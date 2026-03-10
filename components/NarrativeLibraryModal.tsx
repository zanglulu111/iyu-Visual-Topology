import { X, Search, Layers, Check, Dice5, Trash2, Plus, Zap, Sparkles, Eye, Heart, Music, Sun, Moon, Cloud, Feather, Globe, Copy, LayoutGrid } from 'lucide-react';
import React, { useState, useMemo, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {
    NARRATIVE_ENGINE_LIBRARY,
    COMMERCIAL_ENGINE_LIBRARY, COMM_SKIN_LIBRARY,
    EXPERIMENTAL_ENGINE_LIBRARY, EXPERIMENTAL_SKIN_LIBRARY,
    AESTHETIC_ENGINE_LIBRARY,
    TRAILER_ENGINE_LIBRARY, TRAILER_SKIN_LIBRARY,
    POETIC_ENGINE_LIBRARY,
    BLOCK_LIMITS,
    GENRE_SUPER_GROUPS,
    AES_COLOR_PRESETS
} from '../constants';
import { SKIN_LIBRARY } from '../data/skin_libraries';
import { GENRE_CATEGORIES } from '../data/genres';
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
}

const iconMap: Record<string, React.ElementType> = {
    Zap, Sparkles, Eye, Heart, Music, Sun, Moon, Cloud, Feather
};

export const NarrativeLibraryModal: React.FC<NarrativeLibraryModalProps> = ({
    isOpen, onClose, blockId, blockName, selectedTags, onToggleTag, onClear, lang = 'CN', customLibraryData, driverType, onAddCustomDef
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

    const [currentLang, setCurrentLang] = useState<BlueprintLanguage>(lang);

    useEffect(() => {
        setCurrentLang(lang);
    }, [lang]);

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

        const libId = blockId === 'skin_era' ? 'skin_era_lib' : `${blockId}_lib`;
        const found = allLibs.find(c => c.id === libId);
        return found ? [found] : [];
    }, [blockId, customLibraryData, driverType]);

    useEffect(() => {
        if (blockId === 'skin_genre' && !activeSuperGroup) {
            setActiveSuperGroup(GENRE_SUPER_GROUPS[0].id);
        }
    }, [blockId, activeSuperGroup]);

    const processedGroups = useMemo(() => {
        const formatName = (name: string) => {
            if (!name) return "";
            if (currentLang === 'EN') {
                return name.match(/\((.*?)\)/)?.[1] || name;
            } else {
                return name.split('(')[0].trim();
            }
        };

        let filteredLibraryData = libraryData;

        if (blockId === 'skin_genre' && activeSuperGroup) {
            const superGroup = GENRE_SUPER_GROUPS.find(g => g.id === activeSuperGroup);
            if (superGroup) {
                filteredLibraryData = libraryData.filter(cat => superGroup.includes.includes(cat.id));
            }
        }

        if (filteredLibraryData.length > 1) {
            return filteredLibraryData.map(cat => ({
                id: cat.id,
                name: formatName(cat.name),
                items: cat.items || []
            }));
        } else if (filteredLibraryData.length === 1) {
            const cat = filteredLibraryData[0];
            const groupedItems: Record<string, any[]> = {};

            (cat.items || []).forEach(item => {
                if (item.group) {
                    if (!groupedItems[item.group]) groupedItems[item.group] = [];
                    groupedItems[item.group].push(item);
                } else {
                    const generalKey = currentLang === 'EN' ? "General" : "通用";
                    if (!groupedItems[generalKey]) groupedItems[generalKey] = [];
                    groupedItems[generalKey].push(item);
                }
            });

            const groups = Object.keys(groupedItems).map(groupName => ({
                id: groupName,
                name: formatName(groupName),
                items: groupedItems[groupName]
            }));

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
    }, [libraryData, currentLang, blockId, activeSuperGroup]);

    useEffect(() => {
        if (processedGroups.length > 0) {
            if (!activeTab || !processedGroups.find(g => g.id === activeTab)) {
                setActiveTab(processedGroups[0].id);
            }
        }
    }, [processedGroups]);

    const filteredItems = useMemo(() => {
        if (searchQuery.trim()) {
            const lowerQuery = searchQuery.toLowerCase();
            const searchSource = blockId === 'skin_genre'
                ? GENRE_CATEGORIES.map(cat => ({ id: cat.id, name: cat.name, items: cat.items }))
                : processedGroups;

            return searchSource.flatMap(group =>
                (group.items || []).filter(item =>
                    item.name.toLowerCase().includes(lowerQuery) ||
                    (item.def && item.def.toLowerCase().includes(lowerQuery)) ||
                    (item.core && item.core.toLowerCase().includes(lowerQuery))
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

    const handleRandomize = () => {
        if (filteredItems.length === 0) return;
        const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];
        if (randomItem) {
            onToggleTag(randomItem.name);
        }
    };

    const handleCopyItem = (item: any) => {
        const nameCn = item.name.split('(')[0].trim();
        const nameEn = item.name.match(/\((.*?)\)/)?.[1] || nameCn;
        let text = "";
        if (driverType === DriverType.AESTHETIC) {
            if (currentLang === 'CN') {
                const parts = [nameCn];
                if (item.core) parts.push(item.core);
                text = parts.join('\n');
            } else {
                const parts = [nameEn];
                if (item.def) parts.push(item.def);
                if (item.coreEn) parts.push(item.coreEn);
                text = parts.join('\n');
            }
        } else {
            const name = currentLang === 'EN' ? nameEn : nameCn;
            const def = (currentLang === 'EN' && item.defEn) ? item.defEn : item.def;
            const core = (currentLang === 'EN' && item.coreEn) ? item.coreEn : item.core;
            const parts = [name];
            if (def) parts.push(def);
            if (core) parts.push(core);
            text = parts.join('\n');
        }
        navigator.clipboard.writeText(text);
        setCopiedItemId(item.id || item.name);
        setTimeout(() => setCopiedItemId(null), 1000);
    };

    const getThemeColor = () => {
        if (globalTheme === 'retro') return { text: "text-[#8B261D]", border: "border-[#8B261D]/50", hex: "#8B261D" };
        if (driverType === DriverType.COMMERCIAL) return { text: "text-cyan-400", border: "border-cyan-500/50", hex: "#22d3ee" };
        if (driverType === DriverType.EXPERIMENTAL) return { text: "text-purple-400", border: "border-purple-500/50", hex: "#c084fc" };
        if (driverType === DriverType.AESTHETIC) return { text: "text-rose-400", border: "border-rose-500/50", hex: "#fb7185" };
        if (driverType === DriverType.TRAILER) return { text: "text-orange-400", border: "border-orange-500/50", hex: "#fb923c" };
        return { text: "text-[#D4AF37]", border: "border-[#D4AF37]/50", hex: "#D4AF37" }; // Gold for Narrative
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

    return (
        <div className={`fixed inset-0 z-[300] flex items-center justify-center ${globalTheme === 'retro' ? 'bg-[#8B261D]/5 backdrop-blur-[1px]' : 'bg-[#050505]'} p-4 animate-in fade-in duration-200`} onClick={onClose}>
            <div className={`w-full max-w-[1400px] h-full max-h-[85vh] ${globalTheme === 'retro' ? 'bg-[#EBE7DF] border-[#8B261D] border-2 shadow-[8px_8px_0px_0px_rgba(139,38,29,0.1)]' : `bg-[#0a0a0a] border-2 ${themeBorder.replace('/50', '')} shadow-[10px_10px_40px_rgba(0,0,0,1),8px_8px_0px_var(--theme-color-semi,rgba(212,175,55,0.1))]`} rounded-2xl flex flex-col overflow-hidden relative transition-all duration-300 transform scale-100`} style={globalTheme !== 'retro' ? { '--theme-color-semi': themeText.includes('gold') ? 'rgba(212,175,55,0.15)' : themeText.includes('rose') ? 'rgba(244,63,94,0.15)' : themeText.includes('cyan') ? 'rgba(34,211,238,0.15)' : 'rgba(212,175,55,0.15)' } as any : {}} onClick={(e) => e.stopPropagation()}>
                <div className={`h-16 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#F5F2EA]' : `bg-[#050505]`} flex items-center justify-between px-6 shrink-0 z-20`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}>
                    <div className="flex items-center gap-4">
                        <div className={`p-2 ${globalTheme === 'retro' ? 'bg-[#F9F7F1] text-[#8B261D] border-[#8B261D]/30' : `bg-black/40 ${themeText}`} rounded-lg border shadow-sm`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}4d` } : {}}>
                            {blockId === 'aes_palette_preset' ? <LayoutGrid size={20} /> : <Layers size={20} />}
                        </div>
                        <div>
                            <h3 className={`text-xl font-serif ${globalTheme === 'retro' ? 'text-[#8B261D]' : themeText} flex items-center gap-3`}>
                                {blockName}
                                <span className={`text-sm font-mono ${globalTheme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-400'}`}>({getLibraryTotalCount()})</span>
                                <div className={`flex items-center gap-1 px-2 py-0.5 rounded border ${themeBorder.replace('/50', '')} ${globalTheme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-black/50'} text-[10px] uppercase tracking-wider ${themeText}`}>
                                    <span>{currentLang === 'EN' ? "Max Select" : "可选数量"}:</span>
                                    <span className="font-bold">{limit}</span>
                                </div>
                            </h3>
                            <p className={`text-xs ${globalTheme === 'retro' ? 'text-[#8B261D]/60' : `${themeText} opacity-30`} font-mono uppercase tracking-widest`}>{currentLang === 'EN' ? "LIBRARY DATABASE" : "系统词库"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${globalTheme === 'retro' ? 'text-[#8B261D]/40' : `${themeText} opacity-40`}`} />
                            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={currentLang === 'EN' ? "Search..." : "搜索..."} className={`w-64 border border-dashed rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none transition-colors ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black placeholder-[#8B261D]/30 focus:border-[#8B261D]/50' : `bg-black/60 ${themeText} placeholder-zinc-700`} shadow-inner`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}26` } : {}} />
                        </div>
                        <button onClick={() => setCurrentLang(prev => prev === 'CN' ? 'EN' : 'CN')} className={`p-2 rounded-full transition-colors ${globalTheme === 'retro' ? 'hover:bg-[#8B261D]/10 text-[#8B261D]' : `hover:bg-zinc-800 ${themeText} opacity-70 hover:opacity-100`}`} title={currentLang === 'CN' ? "Switch to English" : "切换中文"}><Globe size={20} /></button>
                        <button onClick={onClose} className={`p-2 rounded-full transition-colors ${globalTheme === 'retro' ? 'hover:bg-[#8B261D]/10 text-[#8B261D]' : `hover:bg-zinc-800 ${themeText} opacity-70 hover:opacity-100`}`}><X size={24} /></button>
                    </div>
                </div>
                <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
                    <div className={`w-full md:w-64 border-r border-dashed ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#FAF8F4]' : `bg-black/60`} flex flex-col shrink-0 overflow-y-auto custom-scrollbar`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}>
                        {blockId === 'skin_genre' && !searchQuery && (
                            <div className={`p-2 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#8B261D]/5' : `bg-zinc-900/30`}`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}33` } : {}}>
                                {GENRE_SUPER_GROUPS.map(sg => {
                                    const Icon = iconMap[sg.iconName || 'Zap'];
                                    return (
                                        <button key={sg.id} onClick={() => setActiveSuperGroup(sg.id)} className={`w-full text-left px-3 py-2 rounded mb-1 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${activeSuperGroup === sg.id ? (globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : `bg-white ${themeText.replace('text-', 'text-black')} font-black shadow-lg shadow-black/40`) : (globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/10' : `${themeText} opacity-50 hover:opacity-100 hover:bg-zinc-800/50`)}`}><Icon size={14} />{currentLang === 'EN' ? sg.name.split('(')[1].replace(')', '') : sg.name.split('(')[0]}</button>
                                    );
                                })}
                            </div>
                        )}
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
                        <div className={`mb-6 md:mb-8 flex flex-wrap gap-3 p-4 ${globalTheme === 'retro' ? 'bg-white/40 border-[#8B261D]/10 border shadow-inner' : `bg-zinc-900/40 border border-dashed`} rounded-xl min-h-[60px] max-h-[120px] overflow-y-auto custom-scrollbar items-center relative shadow-sm`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}26` } : {}}>
                            {selectedTags.length === 0 ? (
                                <span className={`${globalTheme === 'retro' ? 'text-[#8B261D]/30' : 'text-zinc-600'} text-sm italic`}>{currentLang === 'EN' ? "No items selected. Click items below to add." : "暂无选择。点击下方卡片添加。"}</span>
                            ) : (
                                selectedTags.map(tag => (
                                    <button key={tag} onClick={() => onToggleTag(tag)} className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm font-bold border transition-all ${themeText} ${themeBorder.replace('/50', '')} ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/30 text-[#8B261D] shadow-sm' : 'bg-black'} hover:opacity-80 group shadow-sm`}>{tag.split('(')[0]}<X size={14} className="opacity-50 group-hover:opacity-100" /></button>
                                ))
                            )}
                            <div className={`w-full md:w-auto md:ml-auto flex items-center gap-3 pt-3 md:pt-0 md:pl-4 md:border-l border-dashed justify-end sticky top-0 right-0`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}1a` } : {}}>
                                <button onClick={handleRandomize} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${globalTheme === 'retro' ? 'bg-[#F9F7F1] text-[#8B261D] hover:bg-white border border-[#8B261D]/10' : `${themeText} bg-zinc-900/80 border border-zinc-700 hover:border-white transition-all`} transition-colors`}><Dice5 size={14} /> {currentLang === 'EN' ? "Random" : "随机"}</button>
                                {onClear && (
                                    <button onClick={onClear} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${globalTheme === 'retro' ? 'bg-[#F9F7F1] text-[#8B261D] hover:bg-red-50 border border-[#8B261D]/10' : 'text-zinc-400 bg-zinc-900/80 border border-zinc-700 hover:text-red-400 hover:border-red-900/50'} transition-colors`}><Trash2 size={14} /> {currentLang === 'EN' ? "Clear" : "清空"}</button>
                                )}
                            </div>
                        </div>
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
                                
                                return (
                                    <div key={item.id || item.name} onClick={() => onToggleTag(item.name)} 
                                        className={`relative flex ${isPreset ? 'flex-row items-center py-2 px-4' : 'flex-col p-5 md:p-6'} text-left rounded-xl border transition-all duration-200 group h-full cursor-pointer ${isSelected ? (globalTheme === 'retro' ? `bg-white border-[#8B261D] border-2 shadow-sm` : `${themeText} bg-zinc-900 ${themeBorder.replace('/50', '')} border-2 shadow-lg`) : (globalTheme === 'retro' ? 'bg-white/60 border-black/5 text-black hover:border-[#8B261D]/40' : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-500 hover:text-zinc-100')}`}>
                                        
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

                                        <div className={`flex-1 flex justify-between items-center ${isPreset ? '' : 'mb-3 pr-6'}`}>
                                            <h4 className={`font-serif font-bold ${isPreset ? 'text-base' : 'text-lg md:text-xl'} leading-tight ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-black/80' : 'text-zinc-100 group-hover:text-white')}`}>{currentLang === 'EN' ? (item.name.match(/\((.*?)\)/)?.[1] || item.name) : item.name.split('(')[0]}</h4>
                                            {isSelected && <Check size={16} className={`${globalTheme === 'retro' ? 'text-[#8B261D]' : themeText} shrink-0 ml-2`} />}
                                        </div>

                                        {!isPreset && (
                                            <>
                                                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={(e) => { e.stopPropagation(); handleCopyItem(item); }} className={`p-1.5 rounded-md ${globalTheme === 'retro' ? 'bg-white border-black/10 hover:bg-[#8B261D]/5 text-[#8B261D]' : 'bg-black/60 border-zinc-700 hover:bg-zinc-700 text-zinc-500 hover:text-white'} border transition-all shadow-sm`} title={currentLang === 'EN' ? "Copy" : "复制"}>{isCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}</button>
                                                </div>
                                                {(item as any)._groupName && <div className={`mb-2 text-[9px] ${globalTheme === 'retro' ? 'text-[#8B261D]/50 bg-[#8B261D]/5' : 'text-zinc-500 bg-black/20'} font-mono uppercase tracking-wider px-1.5 py-0.5 rounded w-fit`}>{(item as any)._groupName}</div>}
                                                {item.def && <p className={`text-sm md:text-base leading-relaxed opacity-90 mb-4 font-light ${globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-white'}`}>{currentLang === 'EN' && item.defEn ? item.defEn : item.def}</p>}
                                                {item.core && <div className={`mt-auto pt-4 border-t ${globalTheme === 'retro' ? 'border-[#8B261D]/10' : ''} w-full`} style={globalTheme !== 'retro' ? { borderColor: `${themeHex}0d` } : {}}><p className={`text-xs md:text-sm font-mono uppercase tracking-tight ${isSelected ? (globalTheme === 'retro' ? 'text-[#8B261D]' : themeText) : (globalTheme === 'retro' ? 'text-[#8B261D]/40 group-hover:text-[#8B261D]/60' : 'text-zinc-200 group-hover:text-white')}`}>{currentLang === 'EN' && item.coreEn ? item.coreEn : item.core}</p></div>}
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
    );
}
