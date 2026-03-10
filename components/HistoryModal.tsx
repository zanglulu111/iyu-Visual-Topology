
import React, { useState, useEffect } from 'react';
import { X, Clock, ArrowRight, Trash2, FileText, Check, Database, GitFork, BookOpen, Layers, Star, Bookmark, Play, AlertCircle, Wand2, Monitor, Box } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { HistoryItem, CreativeTreatment, BlueprintLanguage, DriverType, CollectionItem, WorldLawConfig, HistoryType, NarrativeBlockDef } from '../types';
import { NARRATIVE_ENGINE_BLOCKS, COMMERCIAL_ENGINE_BLOCKS, EXPERIMENTAL_ENGINE_BLOCKS, AESTHETIC_ENGINE_BLOCKS, TRAILER_ENGINE_BLOCKS, COMM_SKIN_BLOCKS, EXPERIMENTAL_SKIN_BLOCKS, TRAILER_SKIN_BLOCKS } from '../constants';
import { ALL_SKIN_BLOCKS } from '../data/skin_libraries';
import { persistence } from '../services/persistence';

interface HistoryModalProps {
    history: HistoryItem[];
    onRestore: (item: HistoryItem) => void;
    onClear: () => void;
    onClose: () => void;
    lang?: BlueprintLanguage;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ history, onRestore, onClear, onClose, lang = 'CN' }) => {
    const { theme } = useTheme();
    const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
    const [activeTab, setActiveTab] = useState<'DNA' | 'PATHS' | 'COLLECTION' | 'SCRIPT' | 'ASSETS'>('DNA');
    const [collections, setCollections] = useState<CollectionItem[]>([]);
    const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null);

    // Load collections from IndexedDB via persistence service
    useEffect(() => {
        const loadCollections = async () => {
            try {
                const items = await persistence.getCollections();
                setCollections(items);
            } catch (e) {
                console.error("Failed to load collections", e);
            }
        };
        loadCollections();
    }, []);

    const [isFetchingDetail, setIsFetchingDetail] = useState(false);

    useEffect(() => {
        const fetchDetail = async () => {
            if (selectedItem && (selectedItem as any).is_partial) {
                setIsFetchingDetail(true);
                try {
                    const { supabaseDatabase } = await import('../services/supabaseDatabase');
                    const fullItem = await supabaseDatabase.getCloudHistoryDetail(selectedItem.id);
                    if (fullItem) {
                        setSelectedItem(fullItem);
                    }
                } catch (e) {
                    console.error("Failed to fetch history detail", e);
                } finally {
                    setIsFetchingDetail(false);
                }
            }
        };
        fetchDetail();
    }, [selectedItem]);

    useEffect(() => {
        if (selectedItem && !(selectedItem as any).is_partial) {
            if (selectedItem.type === 'METONYMY') {
                setActiveTab('SCRIPT');
                setSelectedTreatmentId(null);
            } else {
                setActiveTab('DNA');
                if (selectedItem.treatments && selectedItem.treatments.length > 0) {
                    if (!selectedTreatmentId || !selectedItem.treatments.some(t => t.id === selectedTreatmentId)) {
                        setSelectedTreatmentId(selectedItem.treatments[0].id);
                    }
                } else {
                    setSelectedTreatmentId(null);
                }
            }
        }
    }, [selectedItem, (selectedItem as any)?.is_partial]);

    const handleRestoreFromCollection = (coll: CollectionItem) => {
        const pseudoItem: HistoryItem = {
            id: Date.now(),
            date: coll.saveDate,
            type: 'NARRATIVE',
            driverId: coll.blueprint.driverType,
            driverName: coll.blueprint.driverType,
            fieldState: {},
            blueprint: coll.blueprint,
            treatments: []
        };
        onRestore(pseudoItem);
    };

    const deleteFromCollection = async (id: string) => {
        try {
            await persistence.deleteCollectionItem(id);
            setCollections(prev => prev.filter(c => c.id !== id));
        } catch (e) {
            console.error("Failed to delete collection item", e);
        }
    };

    const getBlockName = (key: string) => {
        const allBlocks = [...NARRATIVE_ENGINE_BLOCKS, ...COMMERCIAL_ENGINE_BLOCKS, ...EXPERIMENTAL_ENGINE_BLOCKS, ...AESTHETIC_ENGINE_BLOCKS, ...TRAILER_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS, ...COMM_SKIN_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS, ...TRAILER_SKIN_BLOCKS];
        const block = allBlocks.find(b => b.id === key);
        if (block) {
            const name = lang === 'EN' ? block.enName : block.name;
            return name.replace(/^[0-9IV]+\.\s*/, '').split('(')[0].trim();
        }
        return key.replace('engine_', '').replace('skin_', '').toUpperCase();
    };

    const getDriverColorClass = (driverId: DriverType) => {
        switch (driverId) {
            case DriverType.COMMERCIAL: return 'text-cyan-400 border-cyan-500/50';
            case DriverType.AESTHETIC: return 'text-rose-400 border-rose-500/50';
            case DriverType.EXPERIMENTAL: return 'text-purple-400 border-purple-500/50';
            case DriverType.TRAILER: return 'text-orange-400 border-orange-500/50';
            default: return 'text-gold-primary border-gold-primary/50';
        }
    };

    const getStageLabel = (item: HistoryItem) => {
        if (theme === 'retro') {
            if (item.type === 'METONYMY') {
                return { cn: '换喻项目', en: 'METONYMY PROJECT', className: 'text-indigo-700 border-indigo-800/30 bg-indigo-50' };
            }
            if (item.treatments && item.treatments.length > 0) {
                return { cn: '分歧点', en: 'DIVERGENCE', className: 'text-blue-700 border-blue-800/30 bg-blue-50' };
            }
            return { cn: '引擎DNA', en: 'ENGINE DNA', className: 'text-zinc-600 border-zinc-400 bg-zinc-100' };
        }
        if (item.type === 'METONYMY') {
            return { cn: '换喻项目', en: 'METONYMY PROJECT', className: 'text-indigo-400 border-indigo-500/30 bg-indigo-900/10' };
        }
        if (item.treatments && item.treatments.length > 0) {
            return { cn: '分歧点', en: 'DIVERGENCE', className: 'text-blue-400 border-blue-500/30 bg-blue-900/10' };
        }
        return { cn: '引擎DNA', en: 'ENGINE DNA', className: 'text-zinc-500 border-zinc-700 bg-zinc-900/50' };
    };

    const currentBlueprint = selectedItem ? (selectedItem.type === 'METONYMY' ? selectedItem.blueprint : (selectedTreatmentId ? (selectedItem.savedBlueprints?.[selectedTreatmentId] || (selectedItem.blueprint?.treatmentId === selectedTreatmentId ? selectedItem.blueprint : null)) : null)) : null;

    const BLACKLIST_KEYS = ['visual_prompts', 'story_content', 'visual_style', 'pitch', 'title', 'logline', 'synopsis'];

    // Helper to filter relevant blocks based on the item's driver
    const getRelevantBlocks = (driverId: DriverType): NarrativeBlockDef[] => {
        switch (driverId) {
            case DriverType.COMMERCIAL: return [...COMMERCIAL_ENGINE_BLOCKS, ...COMM_SKIN_BLOCKS];
            case DriverType.EXPERIMENTAL: return [...EXPERIMENTAL_ENGINE_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS];
            case DriverType.TRAILER: return [...TRAILER_ENGINE_BLOCKS, ...TRAILER_SKIN_BLOCKS];
            case DriverType.AESTHETIC: return [...AESTHETIC_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS, ...COMMERCIAL_ENGINE_BLOCKS];
            default: return [...NARRATIVE_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS];
        }
    };

    const renderTag = (key: string, values: string[], driverId: DriverType) => {
        // FIXED: Ensure only relevant tags are rendered for the specific driver to avoid cross-mode leaks
        const relevantIds = getRelevantBlocks(driverId).map(b => b.id);
        if (!relevantIds.includes(key)) return null;

        if (BLACKLIST_KEYS.includes(key) || !values || values.length === 0) return null;
        return (
            <div key={key} className={`flex flex-col gap-2 ${theme === 'retro' ? 'bg-white border-black/10' : 'bg-zinc-900/80 border-zinc-800'} p-4 rounded-xl border hover:border-zinc-700 transition-colors h-full`}>
                <span className={`text-[10px] uppercase font-bold tracking-widest truncate ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    {getBlockName(key)}
                </span>
                <div className="flex flex-wrap gap-2">
                    {values.map((v, i) => (
                        <span key={i} className={`text-sm ${theme === 'retro' ? 'text-black bg-white border-black/5' : 'text-zinc-200 bg-black border-zinc-700'} px-3 py-1.5 rounded border shadow-sm leading-normal`}>
                            {v.split('(')[0]}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
            <div className={`w-full h-full max-w-[1600px] max-h-[90vh] ${theme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'} border ${theme === 'retro' ? 'border-[#8B261D]' : 'border-zinc-800'} rounded-2xl shadow-2xl flex overflow-hidden relative`}>
                <div className={`w-80 border-r ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#080808]'} flex flex-col shrink-0`}>
                    <div className={`p-6 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0a0a0a]'}`}>
                        <div className={`flex ${theme === 'retro' ? 'bg-[#E5DFCD] border-black/10' : 'bg-zinc-900 border-zinc-800'} p-1 rounded-lg border mb-6`}>
                            <button onClick={() => setActiveTab('DNA')} className={`flex-1 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded transition-all ${activeTab !== 'COLLECTION' ? (theme === 'retro' ? 'bg-white text-[#8B261D] shadow-sm' : 'bg-zinc-800 text-white') : (theme === 'retro' ? 'text-zinc-600 hover:text-black hover:bg-white/50' : 'text-zinc-500 hover:text-white')}`}>{lang === 'CN' ? '自动备份' : 'Auto Backup'}</button>
                            <button onClick={() => setActiveTab('COLLECTION')} className={`flex-1 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded transition-all ${activeTab === 'COLLECTION' ? (theme === 'retro' ? 'bg-white text-[#8B261D] shadow-sm' : 'bg-gold-primary text-black') : (theme === 'retro' ? 'text-zinc-600 hover:text-black hover:bg-white/50' : 'text-zinc-500 hover:text-white')}`}>{lang === 'CN' ? '我的收藏' : 'Collection'}</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className={`p-2 ${theme === 'retro' ? 'bg-white text-[#8B261D]' : 'bg-zinc-800 text-zinc-400'} rounded-lg`}>{activeTab === 'COLLECTION' ? <Bookmark size={18} /> : <Clock size={18} />}</div>
                            <div>
                                <h3 className={`text-sm font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} uppercase tracking-wider`}>{activeTab === 'COLLECTION' ? (lang === 'EN' ? "My Projects" : "收藏夹") : (lang === 'EN' ? "Recent Drafts" : "历史轨迹")}</h3>
                                <p className="text-[10px] text-zinc-500">{activeTab === 'COLLECTION' ? collections.length : history.length} {lang === 'EN' ? "Items" : "个记录"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                        {activeTab === 'COLLECTION' ? (
                            collections.map((coll) => (
                                <button key={coll.id} onClick={() => handleRestoreFromCollection(coll)} className="w-full text-left p-6 border-b border-zinc-800/50 hover:bg-zinc-900/30 group transition-all">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className={`font-serif text-sm ${theme === 'retro' ? 'text-[#5C1A14]' : 'text-gold-primary'} font-bold truncate pr-4`}>{coll.blueprint.narrative.title}</h4>
                                        <button onClick={(e) => { e.stopPropagation(); deleteFromCollection(coll.id); }} className="text-zinc-700 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></button>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 line-clamp-2 italic mb-2">"{coll.blueprint.narrative.logline}"</p>
                                    <div className="text-[8px] font-mono text-zinc-600 uppercase">
                                        {new Date(coll.saveDate).toLocaleString(lang === 'CN' ? 'zh-CN' : 'en-US', { hour12: false })}
                                    </div>
                                </button>
                            ))
                        ) : (
                            history.map((item) => {
                                const isSelected = selectedItem?.id === item.id;
                                const driverColorClass = getDriverColorClass(item.driverId);
                                const textColor = driverColorClass.split(' ')[0];
                                const borderColor = driverColorClass.split(' ')[1];
                                const stage = getStageLabel(item);
                                return (
                                    <button key={item.id} onClick={() => setSelectedItem(item)} className={`w-full text-left p-4 border-b ${theme === 'retro' ? 'border-[#8B261D]/10 hover:bg-[#EBE5D5]' : 'border-zinc-800/50 hover:bg-zinc-900/30'} transition-all group ${isSelected ? (theme === 'retro' ? 'bg-[#E5DFCD] border-l-[3px] border-l-[#8B261D] border-y-[#8B261D]/20 shadow-sm' : 'bg-zinc-900/80 border-l-2 ' + borderColor.replace('/50', '')) : 'border-l-[3px] border-l-transparent'}`}>
                                        <div className="flex flex-col gap-2 w-full">
                                            <h4 className={`font-serif text-sm truncate ${theme === 'retro' ? 'text-[#3E110D]' : (item.type === 'METONYMY' ? 'text-indigo-300' : textColor)} ${isSelected ? 'font-bold' : 'opacity-80 group-hover:opacity-100'}`}>{item.blueprint?.narrative?.title || item.treatments?.[0]?.title || (lang === 'EN' ? "Untitled Draft" : "未命名草稿")}</h4>
                                            <div className="flex wrap items-center gap-2">
                                                <span className={`text-[8px] font-bold uppercase tracking-wider ${item.type === 'METONYMY' ? (theme === 'retro' ? 'text-indigo-700 border-indigo-700/30 bg-indigo-50' : 'text-indigo-400 border-indigo-500/30 bg-black/20') : `${textColor} ${borderColor} ${theme === 'retro' ? 'bg-white/50' : 'bg-black/20'}`} px-1.5 py-0.5 rounded border`}>{item.type === 'METONYMY' ? 'METONYMY' : item.driverName}</span>
                                                <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${stage.className}`}>{lang === 'EN' ? stage.en : stage.cn}</span>
                                                <span className={`text-[8px] font-bold text-zinc-500 ml-auto flex items-center gap-1`}>
                                                    <Clock size={10} />
                                                    {new Date(item.date).toLocaleTimeString(lang === 'CN' ? 'zh-CN' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })
                        )}
                    </div>
                    <div className={`p-4 border-t ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0a0a0a]'} flex justify-between items-center`}>
                        <button onClick={onClear} className={`text-zinc-600 ${theme === 'retro' ? 'hover:text-[#8B261D]' : 'hover:text-red-500'} transition-colors p-2`}><Trash2 size={16} /></button>
                        <div className="w-10"></div>
                    </div>
                </div>
                <div className={`flex-1 flex flex-col ${theme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'} relative min-w-0`}>
                    <div className={`h-20 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0c0c0c]'} flex items-center justify-between px-8 shrink-0`}>
                        <div className="flex gap-8 h-full">
                            {selectedItem && activeTab !== 'COLLECTION' ? (
                                selectedItem.type === 'METONYMY' ? (
                                    <>
                                        <button onClick={() => setActiveTab('SCRIPT')} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest h-full border-b-[3px] transition-all ${activeTab === 'SCRIPT' ? (theme === 'retro' ? 'border-[#8B261D] text-[#8B261D]' : 'border-white text-white') : (theme === 'retro' ? 'border-transparent text-zinc-500 hover:text-[#8B261D]' : 'border-transparent text-zinc-500 hover:text-white')}`}><FileText size={16} /> {lang === 'EN' ? "Script" : "剧本与分镜"}</button>
                                        <button onClick={() => setActiveTab('ASSETS')} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest h-full border-b-[3px] transition-all ${activeTab === 'ASSETS' ? (theme === 'retro' ? 'border-[#8B261D] text-[#8B261D]' : 'border-white text-white') : (theme === 'retro' ? 'border-transparent text-zinc-500 hover:text-[#8B261D]' : 'border-transparent text-zinc-500 hover:text-white')}`}><Box size={16} /> {lang === 'EN' ? "Assets" : "资产概览"}</button>
                                        <button onClick={() => setActiveTab('DNA')} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest h-full border-b-[3px] transition-all ${activeTab === 'DNA' ? (theme === 'retro' ? 'border-[#8B261D] text-[#8B261D]' : 'border-white text-white') : (theme === 'retro' ? 'border-transparent text-zinc-500 hover:text-[#8B261D]' : 'border-transparent text-zinc-500 hover:text-white')}`}><Monitor size={16} /> {lang === 'EN' ? "Tone" : "基调"}</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setActiveTab('DNA')} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest h-full border-b-[3px] transition-all ${activeTab === 'DNA' ? (theme === 'retro' ? 'border-[#8B261D] text-[#8B261D]' : 'border-white text-white') : (theme === 'retro' ? 'border-transparent text-zinc-500 hover:text-[#8B261D]' : 'border-transparent text-zinc-500 hover:text-white')}`}><Database size={16} /> {lang === 'EN' ? "DNA" : "基因 (DNA)"}</button>
                                        <button onClick={() => setActiveTab('PATHS')} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest h-full border-b-[3px] transition-all ${activeTab === 'PATHS' ? (theme === 'retro' ? 'border-[#8B261D] text-[#8B261D]' : 'border-white text-white') : (theme === 'retro' ? 'border-transparent text-zinc-500 hover:text-[#8B261D]' : 'border-transparent text-zinc-500 hover:text-white')}`}><GitFork size={16} /> {lang === 'EN' ? "Paths" : "路径 (Paths)"}</button>
                                    </>
                                )
                            ) : (
                                <div className={`flex items-center text-xs font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-zinc-500' : 'text-zinc-500'}`}>{lang === 'EN' ? "Session Inspector" : "会话检视系统"}</div>
                            )}
                        </div>
                        <div className="flex items-center gap-2 h-10">
                            {selectedItem && (
                                <button 
                                    disabled={isFetchingDetail || (selectedItem as any).is_partial}
                                    onClick={() => onRestore(selectedItem)} 
                                    className={`h-full ${theme === 'retro' ? 'bg-[#8B261D] text-white hover:bg-[#6D1E16]' : 'bg-white hover:bg-zinc-200 text-black'} px-5 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    {isFetchingDetail ? (lang === 'EN' ? "Loading..." : "同步中...") : (lang === 'EN' ? "Restore" : "恢复会话")} 
                                    {!isFetchingDetail && <ArrowRight size={14} />}
                                </button>
                            )}
                            <button 
                                onClick={onClose} 
                                className={`h-full aspect-square flex items-center justify-center rounded-lg border transition-all ${theme === 'retro' ? 'border-[#8B261D]/30 text-[#8B261D] hover:bg-[#8B261D]/10' : 'border-zinc-700 text-zinc-400 hover:text-white hover:bg-white/10'}`}
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {isFetchingDetail ? (
                            <div className="flex-1 flex flex-col items-center justify-center h-full gap-4 text-zinc-500">
                                <Wand2 size={32} className="animate-spin opacity-50 text-gold-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{lang === 'EN' ? "Fetching Grid Records..." : "正在从矩阵中同步数据..."}</span>
                            </div>
                        ) : selectedItem && activeTab !== 'COLLECTION' && !(selectedItem as any).is_partial ? (
                            <div className="p-8 md:p-12">
                                {activeTab === 'DNA' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2">
                                        <h3 className={`text-3xl font-serif ${theme === 'retro' ? 'text-black border-[#8B261D]/20' : 'text-white border-zinc-800'} mb-8 border-b pb-4`}>{lang === 'EN' ? "Engine Coordinates" : "引擎坐标参数 (DNA)"}</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                                            {Object.entries(selectedItem.fieldState).map(([key, values]) => renderTag(key, values as string[], selectedItem.driverId))}
                                        </div>
                                    </div>
                                )}
                                {selectedItem.type === 'NARRATIVE' && activeTab === 'PATHS' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2">
                                        <h3 className={`text-3xl font-serif ${theme === 'retro' ? 'text-black border-[#8B261D]/20' : 'text-white border-zinc-800'} mb-8 border-b pb-4`}>{lang === 'EN' ? "Divergent Timelines" : "平行宇宙路径"}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            {selectedItem.treatments?.map((t, idx) => {
                                                const isSelected = selectedTreatmentId === t.id;
                                                const hasBible = (selectedItem.savedBlueprints?.[t.id]) || (selectedItem.blueprint?.treatmentId === t.id);
                                                return (
                                                    <button key={idx} onClick={() => setSelectedTreatmentId(t.id)} className={`text-left p-6 rounded-xl border transition-all relative group flex flex-col h-full ${isSelected ? (theme === 'retro' ? 'bg-[#E5DFCD] border-[#8B261D] shadow-sm' : 'bg-zinc-900 border-gold-primary ring-1 ring-gold-primary/20') : (theme === 'retro' ? 'bg-white border-black/10 hover:bg-[#EBE5D5] hover:border-[#8B261D]/30' : 'bg-black/40 border-zinc-800 hover:border-zinc-600')}`}>
                                                        <div className="flex items-center justify-between mb-4">
                                                            <span className={`text-[10px] font-bold px-2 py-1 rounded ${isSelected ? 'bg-gold-primary text-black' : 'bg-zinc-800 text-zinc-400'}`}>{t.type}</span>
                                                            {hasBible && <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-900/20 px-2 py-0.5 rounded border border-emerald-500/30"><Check size={10} /> {lang === 'EN' ? "GENERATED" : "已生成"}</span>}
                                                        </div>
                                                        <h4 className={`font-serif text-xl mb-2 ${isSelected ? (theme === 'retro' ? 'text-black' : 'text-white') : (theme === 'retro' ? 'text-zinc-600' : 'text-zinc-300')}`}>{t.title}</h4>
                                                        <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-3 italic">"{t.tagline}"</p>
                                                        <div className="text-xs text-zinc-400 leading-relaxed opacity-70 line-clamp-6 mb-4 flex-grow">{t.pitch}</div>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                                {selectedItem.type === 'METONYMY' && activeTab === 'SCRIPT' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-2 max-w-5xl mx-auto space-y-8">
                                        <h2 className={`text-4xl font-serif ${theme === 'retro' ? 'text-black' : 'text-white'} mb-4`}>{currentBlueprint?.narrative.title}</h2>
                                        {Array.isArray(currentBlueprint?.metonymyData?.screenplay) && (currentBlueprint?.metonymyData?.screenplay as any[]).map((section: any) => (
                                            <div key={section.id} className={`${theme === 'retro' ? 'bg-[#F4EFE0] border-black/10' : 'bg-zinc-900/30 border-zinc-800'} border p-8 rounded-xl mb-6`}>
                                                <div className={`flex items-center gap-2 mb-4 ${theme === 'retro' ? 'text-indigo-700' : 'text-indigo-400'} font-bold uppercase tracking-widest text-xs`}><div className={`w-2 h-2 ${theme === 'retro' ? 'bg-indigo-600' : 'bg-indigo-500'} rounded-full`}></div>{section.title}</div>
                                                <div className={`${theme === 'retro' ? 'text-zinc-800' : 'text-zinc-300'} leading-loose whitespace-pre-wrap font-serif text-sm`}>{section.content}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-zinc-700 gap-6 h-full">
                                <Layers size={64} className="opacity-20 text-zinc-500" />
                                <div className="text-center">
                                    <p className="text-xl font-bold uppercase tracking-widest text-zinc-500">{activeTab === 'COLLECTION' ? (lang === 'EN' ? "Cloud Archive" : "云端档案馆") : (lang === 'EN' ? "Select a Session" : "选择一个历史轨迹")}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
