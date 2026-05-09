import { X, Search, Layers, Check, Dice5, Trash2, Plus, Zap, Sparkles, Eye, Heart, Music, Sun, Moon, Cloud, Feather, Globe, Copy, LayoutGrid, Info, Hash, ChevronRight, ArrowLeftRight } from 'lucide-react';
import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../contexts/ThemeContext';
import {
    NARRATIVE_ENGINE_BLOCKS,
    NARRATIVE_ENGINE_LIBRARY,
    COMMERCIAL_ENGINE_BLOCKS, COMMERCIAL_ENGINE_LIBRARY, COMM_SKIN_BLOCKS, COMM_SKIN_LIBRARY,
    EXPERIMENTAL_ENGINE_BLOCKS, EXPERIMENTAL_ENGINE_LIBRARY, EXPERIMENTAL_SKIN_BLOCKS, EXPERIMENTAL_SKIN_LIBRARY,
    AESTHETIC_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_LIBRARY,
    TRAILER_ENGINE_BLOCKS, TRAILER_ENGINE_LIBRARY, TRAILER_SKIN_BLOCKS, TRAILER_SKIN_LIBRARY,
    POETIC_ENGINE_LIBRARY,
    BLOCK_LIMITS,
    GENRE_SUPER_GROUPS,
    AES_COLOR_PRESETS,
    ALL_SKIN_BLOCKS,
    SKIN_LIBRARY,
    GENRE_CATEGORIES,
    WORLD_MOTIF_CATEGORIES
} from '../constants';
import { BlueprintLanguage, DriverType, LibraryCategoryDef } from '../types';

interface NarrativeLibraryModalProps {
    isOpen: boolean;
    onClose: () => void;
    blockId: string;
    blockName: string;
    selectedTags: string[];
    onToggleTag: (tag: string) => void;
    onClear?: () => void;
    lang?: BlueprintLanguage;
    customLibraryData?: LibraryCategoryDef[];
    driverType?: DriverType;
    onAddCustomDef?: (name: string, def: string, core: string) => void;
    scrollToTag?: string;
    onTempLockChange?: (itemTempLock: Record<string, 'bright' | 'dark' | 'tension'>) => void;
    initialFaceState?: Record<string, 'bright' | 'dark' | 'tension'>;
}

const iconMap: Record<string, React.ElementType> = {
    Zap, Sparkles, Eye, Heart, Music, Sun, Moon, Cloud, Feather
};

const displayCnTag = (value: unknown) => String(value || '')
    .replace(/^\[?SUR-END[.。]\s*/i, '')
    .replace(/^\[?SURX[.。]\s*/i, '')
    .replace(/\s*\([A-Za-z0-9\s/.'"_-]+\)\s*/g, '')
    .replace(/^\[|\]$/g, '')
    .trim();

export const NarrativeLibraryModal: React.FC<NarrativeLibraryModalProps> = ({
    isOpen, onClose, blockId, blockName, selectedTags, onToggleTag, onClear, lang = 'CN', customLibraryData, driverType, onAddCustomDef, scrollToTag, onTempLockChange, initialFaceState
}) => {
    const { theme: globalTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customInputName, setCustomInputName] = useState("");
    const [customInputDef, setCustomInputDef] = useState("");
    const [customInputCore, setCustomInputCore] = useState("");
    const [activeSuperGroup, setActiveSuperGroup] = useState<string | null>(null);
    const [copiedItemId, setCopiedItemId] = useState<string | null>(null);
    const [useAltGroup, setUseAltGroup] = useState(false);
    const [protocolOpenId, setProtocolOpenId] = useState<string | null>(null);
    const isSkinSV = blockId === 'skin_structure' || blockId === 'skin_volume';

    const [currentLang, setCurrentLang] = useState<BlueprintLanguage>(lang);

    const isEngineLexicon = blockId.startsWith('engine_m');
    // Content version control: 'academic' shows def+core, 'ai' shows directive
    const [contentVersion, setContentVersion] = useState<'academic' | 'ai'>('ai'); // Default to AI version
    const effectiveContentVersion = isEngineLexicon ? contentVersion : 'academic';
    // Global temperature control for browsing (bright/dark/tension)
    const [directiveTemp, setDirectiveTemp] = useState<'bright' | 'dark' | 'tension'>('bright');
    const faceState = initialFaceState || {};

    const setFace = (name: string, temp: 'bright' | 'dark' | 'tension') => {
        onTempLockChange?.({ [name]: temp });
    };

    useEffect(() => {
        setCurrentLang(lang);
    }, [lang]);

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
        } else {
            allLibs = [...NARRATIVE_ENGINE_LIBRARY, ...SKIN_LIBRARY, ...GENRE_CATEGORIES];
        }

        if (blockId === 'skin_genre') {
            return GENRE_CATEGORIES;
        }

        if (blockId === 'skin_animation_genre' || blockId === 'skin_era') {
            return WORLD_MOTIF_CATEGORIES;
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
                    : driverType === DriverType.TRAILER
                        ? TRAILER_ENGINE_BLOCKS
                        : NARRATIVE_ENGINE_BLOCKS;
        const block = [...engineBlocks, ...skinBlocks].find(item => item.id === blockId);
        if (block) return currentLang === 'EN' ? block.enName : displayCnTag(block.name);

        const library = libraryData.find(item => item.id === `${blockId}_lib` || item.id === blockId);
        if (library) return currentLang === 'EN' ? (library.nameEn || library.name.match(/\((.*?)\)/)?.[1] || library.name) : displayCnTag(library.name);

        return currentLang === 'EN' ? (blockName.match(/\((.*?)\)/)?.[1] || blockName) : displayCnTag(blockName);
    }, [blockId, blockName, currentLang, driverType, libraryData]);

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
            if (!name) return "";
            if (currentLang === 'EN') {
                return en || name.match(/\((.*?)\)/)?.[1] || name;
            } else {
                return displayCnTag(name);
            }
        };

        let filteredLibraryData = libraryData;

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
                name: formatName(cat.name, cat.nameEn),
                items: cat.items || []
            }));
        } else if (filteredLibraryData.length === 1) {
            const cat = filteredLibraryData[0];
            const groupedItems: Record<string, any[]> = {};

            (cat.items || []).forEach(item => {
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
                    name: formatName(groupName, enName),
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
    }, [libraryData, currentLang, blockId, activeSuperGroup, useAltGroup]);

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

    const handleAddCustom = () => {
        if (customInputName && onAddCustomDef) {
            onAddCustomDef(customInputName, customInputDef, customInputCore);
            onToggleTag(customInputName);
            setCustomInputName("");
            setCustomInputDef("");
            setCustomInputCore("");
            setShowCustomInput(false);
        }
    };

    const getLocalizedItemName = (item: any) => {
        const rawNameCn = String(item.name || '');
        const volumeDuration = blockId === 'skin_volume' ? rawNameCn.match(/\(([^)]*(?:s|m|S|M)[^)]*)\)/)?.[1] : null;
        const nameCn = blockId === 'skin_volume' && volumeDuration
            ? `${rawNameCn.split('(')[0].trim()}（${volumeDuration}）`
            : displayCnTag(item.name);
        const nameEn = item.nameEn || String(item.name || '').match(/\((.*?)\)/)?.[1] || nameCn;
        return currentLang === 'EN' ? nameEn : nameCn;
    };

    const getItemMechanics = (item: any) => {
        if (currentLang === 'EN') return item.patch?.mechanicsEn || item.mechanicsEn || item.patch?.mechanics || item.mechanics;
        return item.patch?.mechanics || item.mechanics || item.patch?.mechanicsEn || item.mechanicsEn;
    };

    const handleRandomize = () => {
        if (filteredItems.length === 0) return;
        const unselectedItems = filteredItems.filter(item => !selectedTags.includes(item.name));
        if (unselectedItems.length === 0) return;
        const randomItem = unselectedItems[Math.floor(Math.random() * unselectedItems.length)];
        if (randomItem) {
            const isCurrentlySelected = selectedTags.includes(randomItem.name);
            onToggleTag(randomItem.name);
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
        const nameCn = item.name.split('(')[0].trim();
        const nameEn = item.nameEn || item.name.match(/\((.*?)\)/)?.[1] || nameCn;

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
                const parts = [nameEn];
                if (item.essenceEn) parts.push(item.essenceEn);
                else if (item.essence) parts.push(item.essence);
                else {
                    if (item.defEn) parts.push(item.defEn);
                    else if (item.def) parts.push(item.def);
                    if (item.coreEn) parts.push(item.coreEn);
                }
                text = parts.join('\n');
            }
        } else {
            const name = currentLang === 'EN' ? nameEn : nameCn;
            const essence = (currentLang === 'EN' && item.essenceEn) ? item.essenceEn : item.essence;
            const def = (currentLang === 'EN' && item.defEn) ? item.defEn : item.def;
            const core = (currentLang === 'EN' && item.coreEn) ? item.coreEn : item.core;
            const parts = [name];
            if (essence) {
                parts.push(essence);
            } else {
                if (def) parts.push(def);
                if (core) parts.push(core);
            }
            if (item.reality) {
                const reality = (currentLang === 'EN' && item.realityEn) ? item.realityEn : item.reality;
                parts.push(reality);
            }
            text = parts.join('\n');
        }
        navigator.clipboard.writeText(text);
        setCopiedItemId(item.id || item.name);
        setTimeout(() => setCopiedItemId(null), 1000);
    };

    const handleScrollToCard = (tagName: string) => {
        const item = processedGroups.flatMap(g => g.items || []).find(i => i.name === tagName);
        if (!item) return;

        const groupContainingTag = processedGroups.find(g => (g.items || []).some(i => i.name === tagName));

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

    const limit = BLOCK_LIMITS[blockId] || 1;

    if (!isOpen) return null;

    return createPortal(
        <>
        <div className={`fixed inset-0 z-[100000] flex items-center justify-center ${globalTheme === 'retro' ? 'bg-[#8B261D]/5 backdrop-blur-md' : 'bg-black/80 backdrop-blur-[12px]'} p-0 md:p-2 xl:p-4 animate-in fade-in duration-500 pointer-events-auto`} onClick={onClose}>
            <div className={`w-full xl:w-[98vw] max-w-[1800px] h-full md:h-[96vh] ${globalTheme === 'retro' ? 'bg-[#EBE7DF] border-[#8B261D] border-2 shadow-[20px_20px_0px_0px_rgba(139,38,29,0.1)]' : `bg-[#080808] border-zinc-800/50 shadow-[0_0_100px_rgba(0,0,0,0.8)]`} md:rounded-3xl flex flex-col overflow-hidden relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform scale-100 animate-in zoom-in-95`} onClick={(e) => e.stopPropagation()}>
                <div className={`h-24 md:h-28 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#F5F2EA]' : `bg-black/40 backdrop-blur-md border-[var(--mist-active-accent)]/10`} flex items-center justify-between px-8 md:px-12 shrink-0 z-20 relative`}>
                    <div className="flex items-center gap-6">
                        <div className={`p-4 ${globalTheme === 'retro' ? 'bg-[#F9F7F1] text-[#8B261D] border-[#8B261D]/30' : `bg-zinc-900 ${themeText} border-[var(--mist-active-accent)]/30`} rounded-2xl border-2 shadow-xl shadow-black/20 group-hover:scale-105 transition-transform duration-500`}>
                            {blockId.includes('skin') ? <LayoutGrid size={28} /> : <Sparkles size={28} />}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-1">
                                <h3 className={`text-2xl md:text-3xl font-serif font-black tracking-wider ${globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                                    {blockDisplayName}
                                </h3>
                                <div className={`px-3 py-1 rounded-full border ${themeBorder.replace('/50', '')} ${globalTheme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-white/5'} text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] ${themeText} flex items-center gap-2`}>
                                   <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${globalTheme === 'retro' ? 'bg-[#8B261D]' : themeText.replace('text-', 'bg-')}`} />
                                   {currentLang === 'EN' ? `DATABASE: ${getLibraryTotalCount()} ENTRIES` : `系统词库: ${getLibraryTotalCount()} 条`}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className={`text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] ${globalTheme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-500'}`}>
                                    {currentLang === 'EN' ? "AESTHETIC TOPOLOGY PARAMETERS" : "爱欲视觉拓扑参数"}
                                </p>
                                <span className={`w-1 h-1 rounded-full ${globalTheme === 'retro' ? 'bg-black/10' : 'bg-white/10'}`} />
                                <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${themeText}`}>
                                    {currentLang === 'EN' ? `LMT: ${limit}` : `可选: ${limit}`}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end ml-4 overflow-hidden">
                        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar flex-1 justify-end max-w-full xl:max-w-none pr-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {selectedTags.length === 0 ? (
                                <div className="flex items-center gap-2 text-zinc-500 whitespace-nowrap opacity-60 mr-2">
                                     <Info size={14} className={themeText} />
                                     <span className={`text-[11px] font-medium uppercase tracking-[0.2em] ${globalTheme === 'retro' ? 'text-[#8B261D]/70' : ''}`}>
                                         {currentLang === 'EN' ? "Select desired parameters" : "请从下方词库中选择所需的拓扑参数"}
                                     </span>
                                </div>
                            ) : (
                                selectedTags.map(tag => {
                                    const item = filteredItems.find(i => i.name === tag) || processedGroups.flatMap(g => g.items || []).find(i => i.name === tag);
                                    const displayTag = item ? getLocalizedItemName(item) : displayCnTag(tag);

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
                                            key={tag}
                                            role="button"
                                            tabIndex={0}
                                            onClick={() => handleScrollToCard(tag)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    handleScrollToCard(tag);
                                                }
                                            }}
                                            className={`flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] whitespace-nowrap font-black border transition-all duration-300 transform active:scale-95 group shadow-sm
                                                ${globalTheme === 'retro' ? `bg-white ${tempBorderClass} ${tempColorClass}` : `bg-zinc-900 ${tempBorderClass} ${tempColorClass} hover:border-white/30 hover:bg-zinc-800`}`}
                                        >
                                            <Hash size={10} className="opacity-40" />
                                            {displayTag}
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); onToggleTag(tag); }}
                                                className="opacity-50 hover:opacity-100 group-hover:rotate-90 transition-all ml-1 cursor-pointer p-0.5 rounded-full hover:bg-black/10"
                                                title={currentLang === 'EN' ? 'Remove' : '删除'}
                                                aria-label={currentLang === 'EN' ? `Remove ${displayTag}` : `删除 ${displayTag}`}
                                            >
                                                <X size={12} />
                                            </button>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        <div className="relative hidden lg:block group shrink-0">
                            <Search size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${globalTheme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-600 group-focus-within:text-white'}`} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={currentLang === 'EN' ? "SEARCH..." : "搜索词条..."}
                                className={`w-32 xl:w-48 border rounded-xl pl-8 pr-3 py-2 text-xs focus:outline-none transition-all duration-500 ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black placeholder-[#8B261D]/30 focus:border-[#8B261D]/50' : `bg-black/60 ${themeText} border-white/10 focus:border-white/20 placeholder-zinc-700 shadow-xl shadow-black/50`}`}
                            />
                        </div>

                        {/* Content Version Toggle (Global) — only for engine M-parameter lexicons */}
                        {isEngineLexicon && (
                        <div className={`flex shrink-0 items-center p-1 rounded-xl border backdrop-blur-sm gap-0.5 mr-2 ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/10 shadow-sm' : 'bg-white/5 border-white/5'}`}>
                            <button
                                onClick={() => setContentVersion('academic')}
                                className={`flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
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
                                className={`flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
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
                        )}

                        {/* Global Temperature Toggle (only show when AI version is selected AND engine lexicon) */}
                        {effectiveContentVersion === 'ai' && (
                            <div className={`flex shrink-0 items-center p-1 rounded-xl border backdrop-blur-sm gap-0.5 mr-2 ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/10 shadow-sm' : 'bg-white/5 border-white/5'}`}>
                                <button
                                    onClick={() => setDirectiveTemp('bright')}
                                    className={`flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                        directiveTemp === 'bright'
                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-amber-500/20 text-amber-400')
                                            : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-amber-400/60')
                                    }`}
                                    title={currentLang === 'EN' ? "Bright" : "亮面"}
                                >
                                    <span className="hidden xl:inline">{currentLang === 'EN' ? 'Bright' : '亮面'}</span>
                                    <span className="xl:hidden">{currentLang === 'EN' ? 'B' : '亮'}</span>
                                </button>
                                <button
                                    onClick={() => setDirectiveTemp('dark')}
                                    className={`flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                        directiveTemp === 'dark'
                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-indigo-500/20 text-indigo-400')
                                            : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-indigo-400/60')
                                    }`}
                                    title={currentLang === 'EN' ? "Dark" : "暗面"}
                                >
                                    <span className="hidden xl:inline">{currentLang === 'EN' ? 'Dark' : '暗面'}</span>
                                    <span className="xl:hidden">{currentLang === 'EN' ? 'D' : '暗'}</span>
                                </button>
                                <button
                                    onClick={() => setDirectiveTemp('tension')}
                                    className={`flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
                                        directiveTemp === 'tension'
                                            ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-violet-500/20 text-violet-400')
                                            : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-violet-400/60')
                                    }`}
                                    title={currentLang === 'EN' ? "Tension" : "张力"}
                                >
                                    <span className="hidden xl:inline">{currentLang === 'EN' ? 'Tension' : '张力'}</span>
                                    <span className="xl:hidden">{currentLang === 'EN' ? 'T' : '张'}</span>
                                </button>
                            </div>
                        )}

                        <div className={`flex shrink-0 items-center p-1 rounded-xl border backdrop-blur-sm gap-0.5 ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/10 shadow-sm' : 'bg-white/5 border-white/5'}`}>
                            <button
                                onClick={handleRandomize}
                                className={`flex items-center gap-1.5 px-3 h-8 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white/10 ${globalTheme === 'retro' ? 'text-[#8B261D] hover:bg-[#8B261D]/5' : `${themeText} hover:bg-white/10`} active:scale-95`}
                                title={currentLang === 'EN' ? "RANDOM" : "随机"}
                            >
                                <Dice5 size={14} />
                                <span className="hidden xl:inline">{currentLang === 'EN' ? "RANDOM" : "随机"}</span>
                            </button>

                            {onClear && (
                                <button
                                    onClick={onClear}
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
                                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${globalTheme === 'retro' ? 'text-black/40 hover:text-[#8B261D] hover:bg-[#8B261D]/5' : 'text-zinc-400 hover:bg-white/10 hover:text-white'}`}
                                title={currentLang === 'CN' ? "Switch to English" : "切换中文"}
                            >
                                <Globe size={16} />
                            </button>

                            <div className={`w-[1px] h-4 mx-1 ${globalTheme === 'retro' ? 'bg-[#8B261D]/10' : 'bg-white/10'}`} />

                            <button
                                onClick={onClose}
                                className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:bg-red-500 hover:text-white ${globalTheme === 'retro' ? 'text-black/40' : 'text-zinc-400'}`}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="absolute bottom-2 right-8 md:right-12 z-30 pointer-events-none">
                        <span className={`text-[9px] font-mono whitespace-nowrap tracking-widest opacity-80 ${globalTheme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'}`}>
                            {currentLang === 'EN' ? "PRESS ESC TO CLOSE" : "点击 ESC 关闭当前面板"}
                        </span>
                    </div>
                </div>
                <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
                    <div className={`w-full md:w-64 border-r border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#FAF8F4]' : `bg-black/60`} flex flex-col shrink-0 overflow-y-auto custom-scrollbar`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}>
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
                    <div className={`flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8 ${globalTheme === 'retro' ? 'bg-white' : 'bg-[#050505]'}`}>

                        {searchQuery && (
                            <div className="mb-4 text-xs text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-2">
                                <Search size={12} /><span>{currentLang === 'EN' ? "Search Results" : "搜索结果"} ({filteredItems.length})</span>
                            </div>
                        )}
                        <div className={blockId === 'aes_palette_preset' ? "flex flex-col gap-2 pb-20" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 pb-20"}>
                            {filteredItems.map(item => {
                                const isSelected = selectedTags.includes(item.name);
                                const isCopied = copiedItemId === (item.id || item.name);
                                const isPreset = blockId === 'aes_palette_preset';
                                const itemMechanics = getItemMechanics(item);

                                return (
                                    <div key={item.id || item.name}
                                        id={`card-${(item.id || item.name).replace(/\s+/g, '_')}`}
                                        onClick={() => {
                                            const isCurrentlySelected = selectedTags.includes(item.name);
                                            onToggleTag(item.name);
                                            if (isEngineLexicon && !isCurrentlySelected && item.directive && typeof item.directive === 'object') {
                                                const temps: ('bright' | 'dark' | 'tension')[] = ['bright', 'dark', 'tension'];
                                                const randomTemp = temps[Math.floor(Math.random() * temps.length)];
                                                setFace(item.name, randomTemp);
                                            }
                                        }}
                                        className={`relative flex ${isPreset ? 'flex-row items-center py-2 px-4' : 'flex-col p-5 md:p-6'} text-left rounded-xl border-2 transition-all duration-200 group h-full cursor-pointer hover:scale-[1.02] ${isSelected ? (globalTheme === 'retro' ? `bg-white border-[#8B261D] shadow-sm` : `${themeText} bg-zinc-900 ${themeBorder.replace('/50', '')}`) : (globalTheme === 'retro' ? 'bg-white/60 border-black/5 text-black hover:border-[#8B261D]/40' : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-500 hover:text-zinc-100')}`}>

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
                                            <h4 className={`font-serif font-bold ${isPreset ? 'text-base' : 'text-lg md:text-xl'} leading-tight ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-black/80' : 'text-zinc-100 group-hover:text-white')}`}>{getLocalizedItemName(item)}</h4>
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

                                                {/* Temperature Control (only show when AI version is selected AND item has directive object) */}
                                                {effectiveContentVersion === 'ai' && item.directive && typeof item.directive === 'object' && (
                                                    <div className="mb-4" onClick={(e) => e.stopPropagation()}>
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    const isCurrentlySelected = selectedTags.includes(item.name);
                                                                    const currentTemp = faceState[item.name];

                                                                    if (isCurrentlySelected && currentTemp === 'bright') {
                                                                        onToggleTag(item.name);
                                                                    } else {
                                                                        if (!isCurrentlySelected) {
                                                                            onToggleTag(item.name);
                                                                        }
                                                                        setFace(item.name, 'bright');
                                                                    }
                                                                }}
                                                                className={`flex-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all relative ${
                                                                    // Only highlight if selected AND this is the locked temperature
                                                                    selectedTags.includes(item.name) && faceState[item.name] === 'bright'
                                                                        ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-amber-500/30 text-amber-300 border-2 border-amber-500')
                                                                        : (faceState[item.name] || directiveTemp) === 'bright'
                                                                        ? (globalTheme === 'retro' ? 'bg-white/60 text-[#8B261D]/40 border border-[#8B261D]/10' : 'bg-black/10 text-amber-400/40 border border-amber-500/20')
                                                                        : (globalTheme === 'retro' ? 'bg-white/40 text-[#8B261D]/30 border border-[#8B261D]/10 hover:bg-white/60' : 'bg-black/20 text-zinc-600 border border-white/5 hover:text-amber-400/60 hover:border-amber-500/30')
                                                                }`}
                                                            >
                                                                {currentLang === 'EN' ? 'Bright' : '亮面'}
                                                                {/* Checkmark for locked selection */}
                                                                {selectedTags.includes(item.name) && faceState[item.name] === 'bright' && (
                                                                    <span className="ml-1 text-xs">✓</span>
                                                                )}
                                                            </button>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    const isCurrentlySelected = selectedTags.includes(item.name);
                                                                    const currentTemp = faceState[item.name];

                                                                    if (isCurrentlySelected && currentTemp === 'dark') {
                                                                        onToggleTag(item.name);
                                                                    } else {
                                                                        if (!isCurrentlySelected) {
                                                                            onToggleTag(item.name);
                                                                        }
                                                                        setFace(item.name, 'dark');
                                                                    }
                                                                }}
                                                                className={`flex-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all relative ${
                                                                    selectedTags.includes(item.name) && faceState[item.name] === 'dark'
                                                                        ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-indigo-500/30 text-indigo-300 border-2 border-indigo-500')
                                                                        : (faceState[item.name] || directiveTemp) === 'dark'
                                                                        ? (globalTheme === 'retro' ? 'bg-white/60 text-[#8B261D]/40 border border-[#8B261D]/10' : 'bg-black/10 text-indigo-400/40 border border-indigo-500/20')
                                                                        : (globalTheme === 'retro' ? 'bg-white/40 text-[#8B261D]/30 border border-[#8B261D]/10 hover:bg-white/60' : 'bg-black/20 text-zinc-600 border border-white/5 hover:text-indigo-400/60 hover:border-indigo-500/30')
                                                                }`}
                                                            >
                                                                {currentLang === 'EN' ? 'Dark' : '暗面'}
                                                                {selectedTags.includes(item.name) && faceState[item.name] === 'dark' && (
                                                                    <span className="ml-1 text-xs">✓</span>
                                                                )}
                                                            </button>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    const isCurrentlySelected = selectedTags.includes(item.name);
                                                                    const currentTemp = faceState[item.name];

                                                                    if (isCurrentlySelected && currentTemp === 'tension') {
                                                                        onToggleTag(item.name);
                                                                    } else {
                                                                        if (!isCurrentlySelected) {
                                                                            onToggleTag(item.name);
                                                                        }
                                                                        setFace(item.name, 'tension');
                                                                    }
                                                                }}
                                                                className={`flex-1 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all relative ${
                                                                    selectedTags.includes(item.name) && faceState[item.name] === 'tension'
                                                                        ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white shadow-md' : 'bg-violet-500/30 text-violet-300 border-2 border-violet-500')
                                                                        : (faceState[item.name] || directiveTemp) === 'tension'
                                                                        ? (globalTheme === 'retro' ? 'bg-white/60 text-[#8B261D]/40 border border-[#8B261D]/10' : 'bg-black/10 text-violet-400/40 border border-violet-500/20')
                                                                        : (globalTheme === 'retro' ? 'bg-white/40 text-[#8B261D]/30 border border-[#8B261D]/10 hover:bg-white/60' : 'bg-black/20 text-zinc-600 border border-white/5 hover:text-violet-400/60 hover:border-violet-500/30')
                                                                }`}
                                                            >
                                                                {currentLang === 'EN' ? 'Tension' : '张力'}
                                                                {selectedTags.includes(item.name) && faceState[item.name] === 'tension' && (
                                                                    <span className="ml-1 text-xs">✓</span>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                {/* Content Display Logic */}
                                                {effectiveContentVersion === 'academic' ? (
                                                    // Academic Version: Show def + core (or essence)
                                                    <>
                                                        {item.essence ? (
                                                            <div className={`mb-4 w-full`}><p className={`text-sm md:text-base leading-relaxed opacity-90 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-white transition-colors')}`}>{currentLang === 'EN' && item.essenceEn ? item.essenceEn : item.essence}</p></div>
                                                        ) : (
                                                            <>
                                                                {item.def && (
                                                                    <div className={`text-sm md:text-base leading-relaxed mb-3 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white') : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200 group-hover:text-white transition-colors')}`}>
                                                                        <span className="mr-1">
                                                                            {blockId === 'skin_era' ? (currentLang === 'EN' ? "Background:" : "时空背景:") : blockId === 'skin_society' ? (currentLang === 'EN' ? "Social:" : "社会描写:") : (currentLang === 'EN' ? "Def:" : "定义:")}
                                                                        </span>
                                                                        <span>{currentLang === 'EN' && item.defEn ? item.defEn : item.def}</span>
                                                                    </div>
                                                                )}
                                                                {item.core && !isSkinSV && (
                                                                    <div className={`text-sm md:text-base font-mono tracking-tight mb-4 ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-[#8B261D]/80 group-hover:text-[#8B261D]' : 'text-zinc-300 group-hover:text-zinc-100 transition-colors')}`}>
                                                                        <span className="mr-1">
                                                                            {blockId === 'skin_era' ? (currentLang === 'EN' ? "Core Tension:" : "核心张力:") : (currentLang === 'EN' ? "Core:" : "核心逻辑:")}
                                                                        </span>
                                                                        <span>{currentLang === 'EN' && item.coreEn ? item.coreEn : item.core}</span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </>
                                                ) : (
                                                    // AI Directive Version: Show topology first, then directive based on temperature
                                                    <>
                                                        {/* Topology Field */}
                                                        {(item as any).topology && (
                                                            <div className={`mb-4 pb-3 border-b border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'}`}>
                                                                <div className={`text-xs md:text-sm leading-relaxed font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-[#3D1A16]/80' : 'text-zinc-400 group-hover:text-zinc-300 transition-colors')}`}>
                                                                    <span className="mr-1 opacity-60 font-bold uppercase tracking-wider">
                                                                        {currentLang === 'EN' ? 'Topology:' : '拓扑结构:'}
                                                                    </span>
                                                                    <span>{currentLang === 'EN' && (item as any).topologyEn ? (item as any).topologyEn : (item as any).topology}</span>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Directive Field */}
                                                        {item.directive ? (
                                                            <div className={`text-sm md:text-base leading-relaxed mb-4 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white') : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200 group-hover:text-white transition-colors')}`}>
                                                                {typeof item.directive === 'string' ? (
                                                                    // M1: Single directive string
                                                                    <span>{item.directive}</span>
                                                                ) : (
                                                                    // M7A/M7B: Object with bright/dark/tension
                                                                    // Use locked temperature if available, otherwise use global temperature
                                                                    <span>{(item.directive as any)[faceState[item.name] || directiveTemp]}</span>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            // Fallback: If no directive, show def+core
                                                            <>
                                                                {item.def && (
                                                                    <div className={`text-sm md:text-base leading-relaxed mb-3 font-light ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white') : (globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200 group-hover:text-white transition-colors')}`}>
                                                                        <span className="mr-1 opacity-60">{currentLang === 'EN' ? "No directive available" : "无AI指令"}</span>
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                                {item.reality && <div className={`mt-3 pt-3 border-t border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'} w-full`}><p className={`text-xs md:text-sm leading-relaxed ${globalTheme === 'retro' ? 'text-[#8B261D]/80' : 'text-zinc-400'}`}><span className="opacity-60 mr-1">{currentLang === 'EN' ? 'REALITY:' : '现实隐喻:'}</span>{currentLang === 'EN' && item.realityEn ? item.realityEn : item.reality}</p></div>}
                                                {blockId === 'skin_volume' && itemMechanics && (
                                                    <div className={`mt-3 pt-3 border-t border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'} w-full`}>
                                                        <p className={`whitespace-pre-line text-[10px] md:text-xs font-mono leading-relaxed ${globalTheme === 'retro' ? 'text-[#8B261D]/75' : 'text-zinc-400 group-hover:text-zinc-300'} transition-colors`}>
                                                            <span className="mr-1 font-black uppercase tracking-wider">{currentLang === 'EN' ? 'MECHANICS:' : '字数机制:'}</span>
                                                            {itemMechanics}
                                                        </p>
                                                    </div>
                                                )}
                                                {item.reference && <div className={`mt-2 pt-2 border-t border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/20' : 'border-white/10'} w-full`}><p className={`text-[10px] md:text-xs font-mono leading-relaxed ${globalTheme === 'retro' ? 'text-[#8B261D]/70' : 'text-zinc-400 group-hover:text-zinc-300'} transition-colors`}><span className="mr-1">{currentLang === 'EN' ? 'REF:' : '参考:'}</span>{currentLang === 'EN' && item.referenceEn ? item.referenceEn : item.reference}</p></div>}
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
                            <button onClick={() => setShowCustomInput(true)} className={`w-full py-3 rounded-lg border border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/30 text-[#8B261D]/50 hover:bg-white/40' : `text-zinc-500 hover:text-white hover:bg-zinc-900`} transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}><Plus size={14} /> {currentLang === 'EN' ? "Add Custom Item" : "添加自定义条目"}</button>
                        ) : (
                            <div className={`space-y-3 p-4 rounded-xl border ${globalTheme === 'retro' ? 'bg-[#F2EDDE] border-[#8B261D]/20 shadow-sm' : 'bg-zinc-900 border-zinc-700'}`}>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input value={customInputName} onChange={e => setCustomInputName(e.target.value)} placeholder={currentLang === 'EN' ? "Name (e.g. My Concept)" : "名称 (如: 我的概念)"} className={`flex-1 ${globalTheme === 'retro' ? 'bg-[#F9F7F1] border-black/10 text-black placeholder-black/30' : 'bg-black border-zinc-700 text-white placeholder-zinc-600'} border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8B261D]`} />
                                    <input value={customInputCore} onChange={e => setCustomInputCore(e.target.value)} placeholder={currentLang === 'EN' ? "Core Logic" : "核心逻辑"} className={`flex-1 ${globalTheme === 'retro' ? 'bg-[#F9F7F1] border-black/10 text-black placeholder-black/30' : 'bg-black border-zinc-700 text-white placeholder-zinc-600'} border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8B261D]`} />
                                </div>
                                <input value={customInputDef} onChange={e => setCustomInputDef(e.target.value)} placeholder={currentLang === 'EN' ? "Definition" : "详细定义"} className={`w-full ${globalTheme === 'retro' ? 'bg-[#F9F7F1] border-black/10 text-black placeholder-black/30' : 'bg-black border-zinc-700 text-white placeholder-zinc-600'} border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8B261D]`} />
                                <div className="flex justify-end gap-2">
                                    <button onClick={() => setShowCustomInput(false)} className={`px-4 py-2 text-xs font-bold ${globalTheme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-500'} hover:opacity-80`}>{currentLang === 'EN' ? "Cancel" : "取消"}</button>
                                    <button onClick={handleAddCustom} disabled={!customInputName} className={`px-6 py-2 text-xs font-bold ${globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-white text-black'} rounded hover:opacity-90 disabled:opacity-50`}>{currentLang === 'EN' ? "Add & Select" : "添加并选择"}</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
        {protocolOpenId && (() => {
            const protocolItem = filteredItems.find(i => (i.id || i.name) === protocolOpenId);
            if (!protocolItem?.core) return null;
            return (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    onClick={() => setProtocolOpenId(null)}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative max-w-lg w-full max-h-[70vh] overflow-y-auto custom-scrollbar rounded-2xl border p-6 md:p-8 shadow-2xl ${
                            globalTheme === 'retro'
                                ? 'bg-[#F5F2EA] border-[#8B261D]/20'
                                : 'bg-[#111] border-white/10'
                        }`}
                    >
                        <button
                            onClick={() => setProtocolOpenId(null)}
                            className={`absolute top-4 right-4 p-1.5 rounded-md transition-colors ${
                                globalTheme === 'retro' ? 'text-[#8B261D]/40 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white'
                            }`}
                        >
                            <X size={16} />
                        </button>
                        <h3 className={`font-serif font-bold text-lg md:text-xl mb-1 ${
                            globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white'
                        }`}>
                            {currentLang === 'EN' ? (protocolItem.nameEn || protocolItem.name.match(/\((.*?)\)/)?.[1] || protocolItem.name) : protocolItem.name.split('(')[0]}
                        </h3>
                        <div className={`mb-4 text-[9px] font-bold uppercase tracking-widest ${
                            globalTheme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-500'
                        }`}>
                            {currentLang === 'EN' ? 'Protocol — Core Logic' : '协议 — 核心逻辑'}
                        </div>
                        <div className={`text-sm md:text-base font-mono tracking-tight leading-relaxed whitespace-pre-wrap ${
                            globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-300'
                        }`}>
                            {currentLang === 'EN' && protocolItem.coreEn ? protocolItem.coreEn : protocolItem.core}
                        </div>
                    </div>
                </div>
            );
        })()}
    </>, document.body);
}
