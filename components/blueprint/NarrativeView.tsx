
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CreativeBlueprint, BlueprintLanguage, DriverType, VersionHistoryItem } from '../../types';
import { Star, FileText, PenTool, Palette, Check, Wand2, X, Plus, AlertCircle, Loader2, ArrowDown, ArrowUp, Trash2, RotateCcw, History as HistoryIcon, GitCommit, ListChecks, Zap, RotateCw, ChevronRight } from 'lucide-react';
import { CopyButton, SimpleTextRenderer, ProcessingTimer, MarkdownRenderer } from '../SharedBlueprintComponents';
import { modifyNarrativeWithAI, ModifySectionRequest, ModifyInsertionRequest } from '../../services/geminiService';
import { buildRefactorPrompt } from '../../services/refactorPrompt';
import { STYLE_MATRIX } from '../../data/narrative/style_matrix';
import { NarrativeLibraryModal } from '../NarrativeLibraryModal';
import { LibraryCategoryDef } from '../../types';
import { AdminXRayButton } from '../XRayInspector';

interface NarrativeViewProps {
    blueprint: CreativeBlueprint;
    language: BlueprintLanguage;
    isAesthetic: boolean;
    themeAccent: string;
    themeBorder: string;
    themeBgActive: string;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    theme: string;
    isAdmin?: boolean;
}

// Helper to split text into paragraphs while preserving empty lines for structure if needed
const splitIntoParagraphs = (text: string): string[] => {
    return text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
};

// Simple text diff helper
const DiffViewer = ({ oldText, newText }: { oldText: string, newText: string }) => {
    // Very basic diff visualization: New text with indicators if significantly different length
    // A full diff algo is complex, here we just show side by side or color code if lengths differ drastically.
    // For MVP, let's just show the text.
    return (
        <div className="grid grid-cols-2 gap-4 h-full overflow-hidden">
            <div className="flex flex-col h-full min-h-0">
                <div className="text-xs font-bold text-red-400 mb-2 uppercase tracking-widest border-b border-red-900/30 pb-1">Previous Version</div>
                <div className="flex-1 overflow-y-auto bg-red-950/10 p-4 rounded border border-red-900/20 text-sm text-zinc-400 font-mono whitespace-pre-wrap leading-relaxed custom-scrollbar min-h-0">
                    {oldText}
                </div>
            </div>
            <div className="flex flex-col h-full min-h-0">
                <div className="text-xs font-bold text-green-400 mb-2 uppercase tracking-widest border-b border-green-900/30 pb-1">New Version</div>
                <div className="flex-1 overflow-y-auto bg-green-950/10 p-4 rounded border border-green-900/20 text-sm text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed custom-scrollbar min-h-0">
                    {newText}
                </div>
            </div>
        </div>
    );
};

export const NarrativeView: React.FC<NarrativeViewProps> = ({
    blueprint, language, isAesthetic, themeAccent, themeBorder, themeBgActive, onUpdateBlueprint, theme, isAdmin
}) => {
    // AI Modify State
    const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
    const [sections, setSections] = useState<{ id: string; text: string; isSelected: boolean; instruction: string; highlights: { text: string; note: string; }[] }[]>([]);
    const [insertions, setInsertions] = useState<{ id: string; index: number; instruction: string }[]>([]);
    const [draftSource, setDraftSource] = useState<string>(""); // Track source text version for draft
    const [isRefactoring, setIsRefactoring] = useState(false);
    const [refactorStartTime, setRefactorStartTime] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [savedScrollTop, setSavedScrollTop] = useState(0);
    const [editingSectionId, setEditingSectionId] = useState<string | null>(null);

    // New Refactor State
    const [overallInstruction, setOverallInstruction] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("");
    const [isStyleLibraryOpen, setIsStyleLibraryOpen] = useState(false);

    // Edit Mode State
    const [isEditMode, setIsEditMode] = useState(false);
    const [editText, setEditText] = useState("");
    const [storyViewMode, setStoryViewMode] = useState<'preview' | 'edit'>('preview');

    const toggleEditMode = () => {
        if (scrollContainerRef.current) {
            setSavedScrollTop(scrollContainerRef.current.scrollTop);
        }

        if (isEditMode) {
            // Save changes: Split text back into sections
            const newParagraphs = splitIntoParagraphs(editText);
            const newSections = newParagraphs.map((text, index) => {
                // Try to preserve metadata from existing sections
                // 1. Try exact content match
                let match = sections.find(s => s.text === text);

                // 2. If no exact match, try index match ONLY if total count is same (assumes minor edits)
                if (!match && newParagraphs.length === sections.length) {
                    match = sections[index];
                }

                return {
                    id: match ? match.id : `sec-${Date.now()}-${index}`,
                    text: text,
                    isSelected: match ? match.isSelected : false,
                    instruction: match ? match.instruction : "",
                    highlights: match ? match.highlights : []
                };
            });
            setSections(newSections);
            setIsEditMode(false);
        } else {
            // Enter edit mode: Join sections
            setEditText(sections.map(s => s.text).join('\n\n'));
            setIsEditMode(true);
        }
    };

    // Restore scroll position after mode toggle
    useEffect(() => {
        if (scrollContainerRef.current && savedScrollTop > 0) {
            scrollContainerRef.current.scrollTop = savedScrollTop;
            // Reset saved scroll after restoration to avoid sticky behavior
            setSavedScrollTop(0);
        }
    }, [isEditMode, sections]);

    // Prepare styles for library modal
    const styleLibraryData: LibraryCategoryDef[] = React.useMemo(() => {
        return STYLE_MATRIX.map(cat => ({
            id: cat.id,
            name: cat.name,
            desc: "Select an authorial renderer.",
            items: cat.items.map(item => ({
                id: item.id,
                name: item.name,
                def: item.coreRewriteLogic || item.dna,
                core: `${item.styleTitle || item.description}${item.example ? ` | 代表作: ${item.example}` : ''}`,
                group: cat.name
            }))
        }));
    }, []);

    const handleStyleSelect = (tagName: string) => {
        if (selectedStyle === tagName) {
            setSelectedStyle("");
        } else {
            setSelectedStyle(tagName);
        }
    };

    const handleAddCustomStyle = (name: string, def: string, core: string) => {
        setSelectedStyle(name);
    };

    // History State - Now derived from blueprint
    const history = blueprint.versionHistory || [];
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [selectedVersion, setSelectedVersion] = useState<VersionHistoryItem | null>(null);

    const handleUpdate = (field: string, value: string) => {
        if (field.startsWith('world') || field.startsWith('tone')) {
            const newContext = { ...(blueprint.context || {}), [field]: value };
            // Maintain backward compatibility
            if (field === 'worldCn') newContext.world = value;
            if (field === 'toneCn') newContext.tone = value;
            onUpdateBlueprint({ ...blueprint, context: newContext as any });
        } else {
            const newNarrative = { ...(blueprint.narrative || {}), [field]: value };
            onUpdateBlueprint({ ...blueprint, narrative: newNarrative as any });
        }
    };

    const handleRestoreVersion = (content: string) => {
        if (window.confirm(language === 'EN' ? "Restore this version? Current draft will be overwritten." : "恢复此版本？当前草稿将被覆盖。")) {
            handleUpdate('synopsis', content);
            setIsHistoryModalOpen(false);
        }
    };

    // --- AI MODIFICATION LOGIC ---

    const openModifyModal = () => {
        const rawText = blueprint.narrative?.synopsis || "";

        // If we have a draft and the source text hasn't changed, reuse it (Memory Feature)
        if (sections.length > 0 && rawText === draftSource) {
            setIsModifyModalOpen(true);
            return;
        }

        const paragraphs = splitIntoParagraphs(rawText);
        const newSections = paragraphs.map((text, index) => ({
            id: `sec-${Date.now()}-${index}`,
            text: text,
            isSelected: false,
            instruction: "",
            highlights: []
        }));
        setSections(newSections);
        setInsertions([]);
        setDraftSource(rawText); // Sync draft source

        // Init new state
        setOverallInstruction("");
        setSelectedStyle(blueprint.styleName || "");

        setIsModifyModalOpen(true);
    };

    const handleResetDraft = () => {
        if (window.confirm(language === 'EN' ? "Clear all modifications and reset?" : "清空所有修改并重置？")) {
            const rawText = blueprint.narrative?.synopsis || "";
            const paragraphs = splitIntoParagraphs(rawText);
            const newSections = paragraphs.map((text, index) => ({
                id: `sec-${Date.now()}-${index}`,
                text: text,
                isSelected: false,
                instruction: "",
                highlights: []
            }));
            setSections(newSections);
            setInsertions([]);
            setDraftSource(rawText);
        }
    };

    const toggleSectionSelect = (index: number) => {
        const newSections = [...sections];
        newSections[index].isSelected = !newSections[index].isSelected;
        // If unselecting, maybe clear instruction? kept for now
        setSections(newSections);
    };

    const handleSelectAll = () => {
        const allSelected = sections.every(s => s.isSelected);
        const newSections = sections.map(s => ({ ...s, isSelected: !allSelected }));
        setSections(newSections);
    };

    const updateSectionInstruction = (index: number, val: string) => {
        const newSections = [...sections];
        newSections[index].instruction = val;
        setSections(newSections);
    };

    const addInsertion = (index: number) => {
        setInsertions(prev => [...prev, { id: `ins-${Date.now()}-${Math.random()}`, index, instruction: "" }]);
    };

    const updateInsertion = (id: string, val: string) => {
        setInsertions(prev => prev.map(ins => ins.id === id ? { ...ins, instruction: val } : ins));
    };

    const removeInsertion = (id: string) => {
        setInsertions(prev => prev.filter(ins => ins.id !== id));
    };

    const updateSectionText = (id: string, text: string) => {
        setSections(prev => prev.map(s => s.id === id ? { ...s, text } : s));
    };

    const handleTextSelection = (e: React.MouseEvent, sectionIndex: number) => {
        e.preventDefault();
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) return;

        const text = selection.toString().trim();
        if (!text) return;

        // Simple confirmation to add highlight
        // In a real app, we might pop up a tooltip. Here we just add it to the list.
        const newSections = [...sections];
        // Only allow if section is selected? Or auto-select section?
        // Let's auto-select section
        newSections[sectionIndex].isSelected = true;
        newSections[sectionIndex].highlights.push({ text, note: "" });
        setSections(newSections);

        // Clear selection
        selection.removeAllRanges();
    };

    const updateHighlightNote = (sectionIndex: number, highlightIndex: number, note: string) => {
        const newSections = [...sections];
        newSections[sectionIndex].highlights[highlightIndex].note = note;
        setSections(newSections);
    };

    const removeHighlight = (sectionIndex: number, highlightIndex: number) => {
        const newSections = [...sections];
        newSections[sectionIndex].highlights.splice(highlightIndex, 1);
        setSections(newSections);
    };

    const getRefactorRequests = () => {
        const modifyRequests: ModifySectionRequest[] = sections.map(s => ({
            id: s.id,
            text: s.text,
            instruction: s.isSelected ? s.instruction : "",
            highlights: s.isSelected ? s.highlights : []
        }));

        const insertionRequests: ModifyInsertionRequest[] = insertions.map(i => ({
            index: i.index,
            instruction: i.instruction
        })).filter(i => i.instruction.trim() !== "");

        return { modifyRequests, insertionRequests };
    };

    const getRefactorPrompt = () => {
        const { modifyRequests, insertionRequests } = getRefactorRequests();
        return buildRefactorPrompt(
            blueprint.narrative?.synopsis || "",
            modifyRequests,
            insertionRequests,
            overallInstruction,
            selectedStyle
        );
    };

    const handleSubmitRefactor = async () => {
        setIsRefactoring(true);
        setRefactorStartTime(Date.now());

        const { modifyRequests, insertionRequests } = getRefactorRequests();

        try {
            const newSynopsis = await modifyNarrativeWithAI(
                blueprint.narrative?.synopsis || "",
                modifyRequests,
                insertionRequests,
                overallInstruction,
                selectedStyle
            );
            if (newSynopsis) {
                // Save current version to history (Pre-Refactor) and new version (Post-Refactor)
                const oldText = blueprint.narrative?.synopsis || "";

                const backupItem: VersionHistoryItem = {
                    id: (Date.now() - 100).toString(),
                    timestamp: Date.now() - 100,
                    content: oldText,
                    note: "Pre-Refactor Backup"
                };

                const newItem: VersionHistoryItem = {
                    id: Date.now().toString(),
                    timestamp: Date.now(),
                    content: newSynopsis,
                    note: "AI Refactored Version"
                };

                const currentHistory = blueprint.versionHistory || [];
                const newHistory = [newItem, backupItem, ...currentHistory].slice(0, 20); // Keep last 20

                // Atomic Update
                onUpdateBlueprint({
                    ...blueprint,
                    narrative: { ...blueprint.narrative, synopsis: newSynopsis },
                    versionHistory: newHistory
                });

                setIsModifyModalOpen(false);
                // Clear draft after successful apply
                setSections([]);
                setDraftSource("");
            }
        } catch (e) {
            console.error(e);
            alert("Refactoring failed.");
        } finally {
            setIsRefactoring(false);
            setRefactorStartTime(null);
        }
    };

    // --- Render Annotated Text Helper ---
    // This splits the section text by highlights to render inputs inline (next line)
    const renderAnnotatedText = (sectionIdx: number, section: typeof sections[0]) => {
        if (!section.highlights || section.highlights.length === 0) {
            return <span>{section.text}</span>;
        }

        const elements: React.ReactNode[] = [];
        let remainingText = section.text;

        // Process highlights sequentially
        // Note: This naive approach assumes the first match is the intended one.
        // Ideally we would store indices, but for this prototype string matching allows flexibility if text changes slightly.
        section.highlights.forEach((h, hIdx) => {
            const matchIndex = remainingText.indexOf(h.text);
            if (matchIndex !== -1) {
                // Text before highlight
                if (matchIndex > 0) {
                    elements.push(<span key={`pre-${hIdx}`}>{remainingText.substring(0, matchIndex)}</span>);
                }

                // Highlighted text + Inline Input Box (The "Next Line" Requirement)
                elements.push(
                    <span key={`hl-${hIdx}`} className="inline">
                        <span className={`${theme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-indigo-600/80 text-white'} font-bold px-1 rounded mx-0.5 shadow-sm border ${theme === 'retro' ? 'border-[#8B261D]/30' : 'border-indigo-400/30'} selection:bg-white selection:text-indigo-900`}>
                            {h.text}
                        </span>
                        {/* The "Next Line" Edit Box */}
                        <div className={`block my-3 p-3 ${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/30' : 'bg-zinc-900/50 border-indigo-500/30'} rounded-lg shadow-xl animate-in slide-in-from-left-2 fade-in duration-200 ml-4 border-l-4 ${theme === 'retro' ? 'border-l-[#8B261D]' : 'border-l-indigo-500'}`}>
                            <div className="flex justify-between items-center mb-2">
                                <span className={`text-[10px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} uppercase tracking-wider flex items-center gap-2`}>
                                    <PenTool size={10} />
                                    {language === 'EN' ? "Modification Note" : "修改指令"}
                                </span>
                                <button
                                    onClick={(e) => { e.stopPropagation(); removeHighlight(sectionIdx, hIdx); }}
                                    className={`${theme === 'retro' ? 'text-[#8B261D]/40 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-red-400'} transition-colors p-1`}
                                    title="Remove Highlight"
                                >
                                    <Trash2 size={12} />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={h.note}
                                onChange={(e) => updateHighlightNote(sectionIdx, hIdx, e.target.value)}
                                className={`w-full ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black placeholder-[#8B261D]/30 focus:border-[#8B261D]' : 'bg-zinc-900/50 border-zinc-700 text-white placeholder-zinc-500 focus:border-[var(--mist-active-accent)]'} border rounded px-3 py-2 text-sm transition-colors font-medium focus:outline-none`}
                                placeholder={language === 'EN' ? "How should AI rewrite this specific part?" : "AI 应如何修改此处的具体措辞？"}
                                autoFocus
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </span>
                );

                // Update remaining
                remainingText = remainingText.substring(matchIndex + h.text.length);
            }
        });

        // Remaining text
        if (remainingText) {
            elements.push(<span key="rest">{remainingText}</span>);
        }

        return elements;
    };

    const isTitleTemplate = blueprint.narrative?.title === "NEW CONCEPT" || !blueprint.narrative?.title;

    const getLocalizedStyleName = (style: string) => {
        if (!style) return "";
        if (style === '空白故事圣经' || style === 'Blank Story Bible' || style === '空白故事工程' || style === 'Blank Story Project' || style === '空白叙事创作' || style === 'Blank Narrative Writing') {
            return language === 'EN' ? 'Blank Narrative Writing' : '空白叙事创作';
        }

        if (language === 'EN') {
            // Match English name inside parentheses if it exists
            const match = style.match(/\((.*?)\)/);
            return match ? match[1] : style;
        } else {
            // Match Chinese name before parentheses if it exists
            const match = style.match(/^(.*?)\s*\(/);
            return match ? match[1].trim() : style;
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-20">
            {/* LOGLINE SECTION */}
            <div className={`mist-story-logline-card ${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/15 shadow-sm' : `bg-zinc-900/40 border-zinc-800 hover:${themeAccent.replace('text-', 'border-')}/30`} border p-8 rounded-2xl relative overflow-hidden group transition-all`}>
                <div className={`mist-story-logline-rail absolute top-0 left-0 w-1.5 h-full ${theme === 'retro' ? 'bg-[#8B261D]' : themeAccent.replace('text-', 'bg-')}`}></div>
                <div className="mist-story-logline-head flex justify-between items-start mb-3">
                    <h3 className={`${theme === 'retro' ? 'text-[#8B261D]' : themeAccent} font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2`}>
                        <Star size={12} />
                        <span>{language === 'EN' ? "Logline" : "一句话梗概"}</span>
                    </h3>
                    <CopyButton
                        text={blueprint.narrative?.logline || ""}
                        theme={theme}
                        iconOnly
                        className={theme === 'retro' ? 'mist-story-copy-icon text-black/70 hover:text-[#8B261D]' : `mist-story-copy-icon text-zinc-500 hover:${themeAccent}`}
                    />
                </div>
                <textarea
                    value={blueprint.narrative?.logline || ""}
                    onChange={(e) => handleUpdate('logline', e.target.value)}
                    className={`w-full bg-transparent text-xl md:text-2xl font-serif leading-relaxed italic border-none focus:ring-0 resize-none p-0 focus:outline-none ${theme === 'retro' ? 'placeholder-[#8B261D]/30 text-[#3D1A16]' : 'placeholder-zinc-600 text-white'}`}
                    rows={2}
                    placeholder="在此输入故事梗概..."
                />
            </div>

            {/* STORY PROJECT / SYNOPSIS AREA */}
            <div className="space-y-10">
                <div className="mist-story-project-header pb-8 border-none">
                    <div className="mist-story-title-row">
                        <div className="mist-story-title-mark" aria-hidden="true">
                            <FileText size={28} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <input
                                type="text"
                                value={blueprint.narrative?.title || ""}
                                onChange={(e) => handleUpdate('title', e.target.value)}
                                className={`mist-story-title-input text-5xl font-serif bg-transparent border-none focus:ring-0 p-0 focus:outline-none w-full font-bold tracking-tight ${theme === 'retro' ? 'placeholder-[#8B261D]/10 text-[#1A1A1A]' : 'placeholder-white/10 text-white'}`}
                                placeholder="未命名项目标题"
                            />
                        </div>
                    </div>

                    <div className="mist-story-meta-row">
                        <div className="mist-story-meta-stack">
                            {blueprint.styleName && (
                                <div className={`mist-story-style-chip ${theme === 'retro' ? 'text-[#8B261D]/70' : 'text-white/70'}`}>
                                    <PenTool size={12} className="opacity-60" />
                                    <span>{language === 'EN' ? "Aesthetic" : "美学风格"}</span>
                                    <strong className={theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}>{getLocalizedStyleName(blueprint.styleName)}</strong>
                                </div>
                            )}
                        </div>

                        <div className="mist-story-control-row">
                            <div className={`mist-story-word-count ${theme === 'retro' ? 'is-retro' : ''}`}>
                                <span>{language === 'EN' ? "Word Count" : "实时字数"}</span>
                                <strong>
                                    {(blueprint.narrative?.synopsis || "").length}
                                    <small>{language === 'EN' ? "CHARS" : "字"}</small>
                                </strong>
                            </div>

                            <div className="mist-story-toolbar flex items-center gap-2">
                                <button
                                    onClick={() => setIsHistoryModalOpen(true)}
                                    className="mist-story-header-action"
                                    title={language === 'EN' ? "View History" : "查看历史版本"}
                                >
                                    <HistoryIcon size={14} />
                                    <span>{language === 'EN' ? `HISTORY ${history.length}` : `历史版本 ${history.length}`}</span>
                                </button>

                                <button
                                    onClick={openModifyModal}
                                    disabled={!blueprint.narrative?.synopsis}
                                    className="mist-story-header-action"
                                    title={language === 'EN' ? "AI Deep Modify" : "AI 深度修改"}
                                >
                                    <Wand2 size={14} />
                                    <span>{language === 'EN' ? "AI MODIFY" : "AI 深度修改"}</span>
                                </button>

                                <div className="mist-story-view-toggle" role="tablist" aria-label={language === 'EN' ? "Story view mode" : "故事查看模式"}>
                                    <button
                                        type="button"
                                        className={storyViewMode === 'preview' ? 'is-active' : ''}
                                        onClick={() => setStoryViewMode('preview')}
                                    >
                                        {language === 'EN' ? "VIEW" : "浏览"}
                                    </button>
                                    <button
                                        type="button"
                                        className={storyViewMode === 'edit' ? 'is-active' : ''}
                                        onClick={() => setStoryViewMode('edit')}
                                    >
                                        {language === 'EN' ? "EDIT" : "编辑"}
                                    </button>
                                </div>

                                <CopyButton
                                    text={blueprint.narrative?.synopsis || ""}
                                    theme={theme}
                                    iconOnly
                                    className={theme === 'retro' ? 'mist-story-copy-icon text-black/70 hover:text-[#8B261D]' : 'mist-story-copy-icon text-zinc-500'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mist-story-text-card min-h-[600px] py-4">
                    {storyViewMode === 'edit' ? (
                        <textarea
                            value={blueprint.narrative?.synopsis || ""}
                            onChange={(e) => handleUpdate('synopsis', e.target.value)}
                            className={`w-full h-full min-h-[600px] bg-transparent font-light leading-[2] text-lg border-none focus:ring-0 resize-none p-0 focus:outline-none custom-scrollbar ${theme === 'retro' ? 'placeholder-[#8B261D]/20 text-[#3D1A16]/80' : 'placeholder-white/24 text-zinc-200'}`}
                            placeholder="输入详细的故事大纲、视听节奏与叙事逻辑..."
                        />
                    ) : (
                        <div className="mist-story-preview min-h-[600px]">
                            {(blueprint.narrative?.synopsis || "").trim() ? (
                                <MarkdownRenderer
                                    content={blueprint.narrative?.synopsis || ""}
                                    themeAccent={theme === 'retro' ? 'text-[#8B261D]' : themeAccent}
                                    theme={theme}
                                />
                            ) : (
                                <div className="mist-story-preview-placeholder">
                                    {language === 'EN' ? "No story text yet. Switch to Edit to write." : "暂无故事正文。切换到编辑后可输入叙事创作文本。"}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* VERSION HISTORY MODAL */}
            {isHistoryModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className={`w-[800px] h-[600px] ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20' : 'bg-[#0c0c0c] border-zinc-800'} border rounded-2xl flex shadow-2xl overflow-hidden relative`}>
                        {/* Sidebar */}
                        <div className={`w-64 ${theme === 'retro' ? 'bg-[#F4EFE0] border-black' : 'bg-[#0a0a0a] border-zinc-800'} border-r flex flex-col shrink-0`}>
                            <div className={`p-4 border-b ${theme === 'retro' ? 'border-black bg-[#F4EFE0]' : 'border-zinc-800'} flex items-center justify-between`}>
                                <h3 className={`font-bold text-sm flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}><HistoryIcon size={14} /> {language === 'EN' ? "Version History" : "版本历史"}</h3>
                                <button onClick={() => setIsHistoryModalOpen(false)} className={`${theme === 'retro' ? 'text-[#8B261D]/50 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white'}`}><X size={16} /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                                {history.length === 0 ? (
                                    <div className={`${theme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-600'} text-xs text-center py-4`}>{language === 'EN' ? "No history yet." : "暂无历史记录。"}</div>
                                ) : (
                                    history.map((v, i) => (
                                        <button
                                            key={v.id}
                                            onClick={() => setSelectedVersion(v)}
                                            className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${selectedVersion?.id === v.id ? (theme === 'retro' ? 'bg-[#8B261D] border-[#8B261D] text-white' : 'bg-zinc-800 border-zinc-600 text-white') : (theme === 'retro' ? 'bg-transparent border-transparent text-[#8B261D]/60 hover:text-[#8B261D] hover:bg-[#8B261D]/5' : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900')}`}
                                        >
                                            <div className="font-bold mb-1 flex items-center justify-between">
                                                <span>v{history.length - i}</span>
                                                <span className="font-mono text-[9px] opacity-60">{new Date(v.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                            <div className="opacity-70 truncate font-mono text-[10px]">{v.note || "Manual Edit"}</div>
                                        </button>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Content View */}
                        <div className={`flex-1 flex flex-col ${theme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'} min-w-0`}>
                            {selectedVersion ? (
                                <div className="flex flex-col h-full">
                                    <div className={`p-4 border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0a0a0a]'} flex justify-between items-center`}>
                                        <div className="flex items-center gap-3">
                                            <GitCommit size={16} className={theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-500'} />
                                            <span className={`text-sm font-bold ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-white'}`}>{selectedVersion.note || "Version Detail"}</span>
                                            <span className={`text-xs ${theme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-600'} font-mono`}>{new Date(selectedVersion.timestamp).toLocaleString()}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleRestoreVersion(selectedVersion.content)}
                                                className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${theme === 'retro' ? 'bg-[#8B261D] text-white border-[#8B261D] hover:bg-[#6D1E16]' : `${themeAccent} border-zinc-700 hover:bg-zinc-900`}`}
                                            >
                                                {language === 'EN' ? "Restore this Version" : "恢复此版本"}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex-1 p-6 overflow-hidden">
                                        {/* DIFF VIEW */}
                                        <DiffViewer
                                            oldText={selectedVersion.content}
                                            newText={blueprint.narrative?.synopsis || ""}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-zinc-700 gap-4">
                                    <HistoryIcon size={48} className="opacity-20" />
                                    <p className="text-sm font-mono">{language === 'EN' ? "Select a version to compare." : "选择一个版本进行对比。"}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* AI MODIFY MODAL */}
            {isModifyModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className={`w-[80vw] h-[90vh] max-w-7xl max-h-[800px] ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20' : 'bg-[#0c0c0c] border-zinc-800'} border rounded-2xl flex flex-col shadow-2xl relative overflow-hidden`}>
                        {/* Header */}
                        <div className={`px-6 py-4 flex justify-between items-center border-b ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-800 bg-[#0a0a0a]'} shrink-0`}>
                            <div className="flex items-center gap-4 flex-1 overflow-hidden">
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className={`p-1.5 ${theme === 'retro' ? 'bg-white border-[#8B261D]/20' : 'bg-zinc-900 border-zinc-700'} rounded-lg ${theme === 'retro' ? 'text-[#8B261D]' : themeAccent} border`}>
                                        <Wand2 size={14} />
                                    </div>
                                    <h2 className={`text-sm font-bold font-serif ${theme === 'retro' ? 'text-black' : 'text-white'} uppercase tracking-wider`}>{language === 'EN' ? "Narrative Refactoring" : "AI 叙事重构"}</h2>
                                </div>

                                {/* Style Selector */}
                                <div className={`h-4 w-px ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} mx-2 shrink-0`}></div>
                                <button
                                    onClick={() => setIsStyleLibraryOpen(true)}
                                    className={`relative flex items-center gap-2 ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 hover:border-[#8B261D]/40' : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800'} rounded px-3 py-1.5 transition-all group min-w-[120px]`}
                                >
                                    <Palette size={12} className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} shrink-0 transition-colors`} />
                                    <span className={`text-xs font-bold truncate max-w-[120px] ${selectedStyle ? (theme === 'retro' ? 'text-black' : 'text-zinc-100') : 'text-zinc-500'}`}>
                                        {selectedStyle ? getLocalizedStyleName(selectedStyle) : (language === 'EN' ? "Select Style..." : "选择风格...")}
                                    </span>
                                    <div className="ml-auto pl-2">
                                        <ArrowDown size={10} className="text-zinc-500 group-hover:text-zinc-400" />
                                    </div>
                                </button>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                                {/* Edit Mode Button */}
                                <button
                                    onClick={toggleEditMode}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all border ${isEditMode ? (theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D] border-[#8B261D]/30' : 'bg-zinc-800 text-white border-zinc-600') : (theme === 'retro' ? 'bg-transparent text-[#8B261D]/50 border-transparent hover:text-[#8B261D] hover:bg-[#8B261D]/10 hover:border-[#8B261D]/20' : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-zinc-800 hover:border-zinc-700')}`}
                                >
                                    <PenTool size={14} />
                                    {isEditMode ? (language === 'EN' ? "Done Editing" : "完成编辑") : (language === 'EN' ? "Edit Mode" : "编辑模式")}
                                </button>

                                {/* Select All */}
                                <button
                                    onClick={handleSelectAll}
                                    disabled={isEditMode}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider ${theme === 'retro' ? 'text-[#8B261D]/50 hover:text-[#8B261D] hover:bg-[#8B261D]/10 border-transparent hover:border-[#8B261D]/20' : 'text-zinc-400 hover:text-white hover:bg-zinc-800 border-transparent hover:border-zinc-700'} transition-all border disabled:opacity-30 disabled:cursor-not-allowed`}
                                >
                                    <ListChecks size={14} />
                                    {language === 'EN' ? "Select All" : "全选段落"}
                                </button>

                                {/* Execute Button */}
                                <div className="flex items-center gap-2">
                                    <AdminXRayButton
                                        isAdmin={isAdmin}
                                        lang={language === 'EN' ? 'EN' : 'CN'}
                                        title={language === 'EN' ? 'X-Ray Narrative Refactor Prompt' : 'X-Ray 剧本深度修改指令'}
                                        getPayload={getRefactorPrompt}
                                        disabled={isRefactoring}
                                        className={theme === 'retro' ? 'h-9 w-9 bg-white border-[#8B261D]/20 text-[#8B261D] hover:bg-[#8B261D]/10' : 'h-9 w-9 bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-[var(--mist-active-accent)] hover:border-[var(--mist-active-accent)]'}
                                    />
                                    <button
                                        onClick={handleSubmitRefactor}
                                        disabled={isRefactoring}
                                        className={`mist-traverse-action mist-app-primary-action h-9 px-4 ${theme === 'retro' ? 'bg-[#8B261D] hover:bg-[#6D1E16] text-white shadow-none' : 'bg-[var(--mist-active-accent)] text-black'} rounded font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed group border-none`}
                                        style={{ boxShadow: 'none' }}
                                    >
                                        {isRefactoring ? (
                                            <RotateCw size={14} className="animate-spin" />
                                        ) : (
                                            <Zap size={14} className="group-hover:scale-110 transition-transform" />
                                        )}
                                        <span className="tabular-nums">
                                            {isRefactoring ? (
                                                <span className="flex items-center gap-2">
                                                    {language === 'EN' ? "Refactoring..." : "重构中..."}
                                                    <ProcessingTimer startTime={refactorStartTime} />
                                                </span>
                                            ) : (
                                                language === 'EN' ? "Execute Changes" : "执行修改"
                                            )}
                                        </span>
                                        {!isRefactoring && <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform opacity-70" />}
                                    </button>
                                </div>

                                <div className={`h-4 w-px ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} mx-2`}></div>

                                <button onClick={handleResetDraft} className={`w-9 h-9 flex items-center justify-center ${theme === 'retro' ? 'hover:bg-[#8B261D]/10 text-[#8B261D]/50 hover:text-[#8B261D]' : 'hover:bg-zinc-900 text-zinc-500 hover:text-white'} rounded-lg transition-colors border border-transparent ${theme === 'retro' ? 'hover:border-[#8B261D]/20' : 'hover:border-zinc-800'}`} title={language === 'EN' ? "Reset Draft" : "重置草稿"}>
                                    <RotateCcw size={14} />
                                </button>
                                <button onClick={() => setIsModifyModalOpen(false)} className={`w-9 h-9 flex items-center justify-center ${theme === 'retro' ? 'hover:bg-[#8B261D]/10 text-[#8B261D]/50 hover:text-[#8B261D]' : 'hover:bg-zinc-900 text-zinc-500 hover:text-white'} rounded-lg transition-colors border border-transparent ${theme === 'retro' ? 'hover:border-[#8B261D]/20' : 'hover:border-zinc-800'}`}>
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Sub-Header: Overall Instruction */}
                        <div className={`px-6 py-4 ${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/20' : 'bg-[#0a0a0a] border-zinc-800'} border-b shrink-0`}>
                            <div className="relative group">
                                <div className="absolute top-3 left-3 text-zinc-500 group-focus-within:text-[var(--mist-active-accent)] transition-colors">
                                    <PenTool size={14} />
                                </div>
                                <textarea
                                    value={overallInstruction}
                                    onChange={(e) => setOverallInstruction(e.target.value)}
                                    className={`w-full ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black placeholder-[#8B261D]/30 focus:border-[#8B261D]/50 focus:bg-white' : 'bg-zinc-900/30 border-zinc-800 text-white placeholder-zinc-600 focus:border-[var(--mist-active-accent)]/50 focus:bg-zinc-900/50'} border rounded-lg pl-10 pr-4 py-3 text-sm transition-all resize-none h-20 leading-relaxed custom-scrollbar`}
                                    placeholder={language === 'EN' ? "Enter global instructions for the rewrite (e.g., 'Make the tone more suspenseful', 'Focus on character internal monologue')..." : "在此输入整体修改指示 (例如: '让整体氛围更加悬疑', '增加人物内心独白', '加快叙事节奏')..."}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div
                            ref={scrollContainerRef}
                            className={`flex-1 overflow-y-auto custom-scrollbar p-6 space-y-2 ${theme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]'}`}
                        >
                            {isEditMode ? (
                                <textarea
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className={`w-full h-full ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-[#3D1A16] placeholder-[#8B261D]/30 focus:border-[#8B261D]' : 'bg-zinc-900/30 border-zinc-800 text-zinc-200 focus:border-zinc-600'} border rounded-xl p-6 text-base font-serif leading-loose focus:outline-none resize-none custom-scrollbar`}
                                    placeholder={language === 'EN' ? "Edit your narrative text here..." : "在此编辑您的叙事文本..."}
                                />
                            ) : (
                                <>
                                    {/* Insert at start */}
                                    <div className="flex justify-center group">
                                        <button
                                            onClick={() => addInsertion(0)}
                                            className={`opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'retro' ? 'bg-white border-[#8B261D]/40 text-[#8B261D]/60 hover:text-[#8B261D] hover:border-[#8B261D]' : 'bg-zinc-900 border-zinc-700 text-zinc-500 hover:text-[var(--mist-active-accent)] hover:border-[var(--mist-active-accent)]/50'} border border-dashed text-xs px-4 py-1 rounded-full flex items-center gap-2`}
                                        >
                                            <Plus size={12} /> {language === 'EN' ? "Insert Start" : "在开头插入"}
                                        </button>
                                    </div>
                                    {insertions.filter(i => i.index === 0).map((ins) => (
                                    <div key={ins.id} className={`${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/30' : 'bg-[var(--mist-active-accent)]/5 border-[var(--mist-active-accent)]/20'} border p-4 rounded-xl relative animate-in zoom-in-95 duration-200`}>
                                            <button onClick={() => removeInsertion(ins.id)} className={`${theme === 'retro' ? 'text-[#8B261D]/40 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-red-400'}`}><X size={14} /></button>
                                            <span className={`text-[10px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} uppercase tracking-wider mb-2 block`}>{language === 'EN' ? "Insertion Instruction" : "插入指令"}</span>
                                            <textarea
                                                value={ins.instruction}
                                                onChange={(e) => updateInsertion(ins.id, e.target.value)}
                                                className={`w-full ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black focus:border-[#8B261D]' : 'bg-black/40 border-zinc-700 text-white focus:border-[var(--mist-active-accent)]'} border rounded p-2 text-sm placeholder-zinc-500 resize-none h-20 focus:outline-none`}
                                                placeholder={language === 'EN' ? "Describe what to insert here..." : "描述需要在此处插入的段落内容..."}
                                            />
                                        </div>
                                    ))}

                                    {sections.map((section, idx) => (
                                        <div key={section.id} className="space-y-2">
                                            {/* Main Section Card */}
                                            <div className={`border rounded-xl transition-all duration-300 ${section.isSelected ? (theme === 'retro' ? 'border-[#8B261D] bg-[#F4EFE0]' : `border-[var(--mist-active-accent)] bg-zinc-900/40`) : (theme === 'retro' ? 'border-[#8B261D]/10 bg-white hover:border-[#8B261D]/30' : 'border-zinc-800 bg-zinc-900/10 hover:border-zinc-700')}`}>
                                                <div className="p-4 flex gap-4">
                                                    <div className="pt-1">
                                                        <input
                                                            type="checkbox"
                                                            checked={section.isSelected}
                                                            onChange={() => toggleSectionSelect(idx)}
                                                            className={`w-5 h-5 rounded border-zinc-600 ${theme === 'retro' ? 'bg-white text-[#8B261D]' : 'bg-zinc-900 text-[var(--mist-active-accent)]'} focus:ring-0 cursor-pointer`}
                                                        />
                                                    </div>
                                                    <div className="flex-1 space-y-3">
                                                        {editingSectionId === section.id ? (
                                                            <textarea
                                                                value={section.text}
                                                                onChange={(e) => updateSectionText(section.id, e.target.value)}
                                                                className={`w-full ${theme === 'retro' ? 'bg-white border-[#8B261D]/30 text-black focus:border-[#8B261D]' : 'bg-black/40 border-zinc-700 text-white focus:border-[var(--mist-active-accent)]'} border rounded-lg p-3 text-sm leading-loose font-serif focus:outline-none min-h-[120px] resize-y`}
                                                                autoFocus
                                                            />
                                                        ) : (
                                                            <div
                                                                className={`text-sm leading-loose font-serif whitespace-pre-wrap ${section.isSelected ? (theme === 'retro' ? 'text-black' : 'text-white') : (theme === 'retro' ? 'text-[#3D1A16]/80' : 'text-zinc-200')} cursor-text`}
                                                                onMouseUp={(e) => handleTextSelection(e, idx)}
                                                                onClick={(e) => {
                                                                    // Prevent select if editing
                                                                    if (editingSectionId) e.stopPropagation();
                                                                }}
                                                            >
                                                                {renderAnnotatedText(idx, section)}
                                                            </div>
                                                        )}

                                                        {/* Instruction Input (Overall for Section) */}
                                                        {section.isSelected && (
                                                            <div className={`animate-in fade-in slide-in-from-top-2 pt-2 border-t ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-700/50'} mt-2`}>
                                                                <span className={`text-[10px] font-bold ${theme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-500'} uppercase tracking-widest mb-1 block`}>
                                                                    {language === 'EN' ? "Section Rewrite" : "分段重写指令"}
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    value={section.instruction}
                                                                    onChange={(e) => updateSectionInstruction(idx, e.target.value)}
                                                                    className={`w-full ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black placeholder-[#8B261D]/30 focus:border-[#8B261D]' : 'bg-black/40 border-zinc-700 text-white placeholder-zinc-500 focus:border-[var(--mist-active-accent)]'} border rounded px-3 py-2 text-sm transition-colors focus:outline-none`}
                                                                    placeholder={language === 'EN' ? "Instruction for this section (e.g. Make it darker)..." : "本段整体修改指令 (例如: 让氛围更压抑)..."}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="shrink-0 pt-1">
                                                        <button
                                                            onClick={() => setEditingSectionId(editingSectionId === section.id ? null : section.id)}
                                                            className={`p-2 rounded-lg transition-all duration-300 ${editingSectionId === section.id ? 'bg-[var(--mist-active-accent)] text-black' : 'text-zinc-600 hover:text-white hover:bg-zinc-800'}`}
                                                            title={editingSectionId === section.id ? (language === 'EN' ? "Save" : "保存") : (language === 'EN' ? "Edit Paragraph" : "编辑段落")}
                                                        >
                                                            {editingSectionId === section.id ? <Check size={14} /> : <PenTool size={14} />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Insertion Point Below */}
                                            <div className="flex justify-center group h-4 relative">
                                                 <div className={`absolute inset-x-0 top-1/2 h-px ${theme === 'retro' ? 'bg-[#8B261D]/20' : 'bg-zinc-800'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                                <button
                                                    onClick={() => addInsertion(idx + 1)}
                                                    className={`relative z-10 opacity-0 group-hover:opacity-100 transition-opacity ${theme === 'retro' ? 'bg-white border-[#8B261D]/40 text-[#8B261D]/60 hover:text-[#8B261D] hover:border-[#8B261D]' : 'bg-zinc-900 border-zinc-700 hover:border-[var(--mist-active-accent)] text-zinc-500 hover:text-[var(--mist-active-accent)]'} border text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1`}
                                                >
                                                    <Plus size={10} /> {language === 'EN' ? "Insert Here" : "在此插入"}
                                                </button>
                                            </div>

                                            {/* Render Insertions for this index */}
                                            {insertions.filter(i => i.index === idx + 1).map((ins) => (
                                                <div key={ins.id} className={`${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/30' : 'bg-[var(--mist-active-accent)]/5 border-[var(--mist-active-accent)]/20'} border p-4 rounded-xl relative animate-in zoom-in-95 duration-200 mb-2`}>
                                                    <button onClick={() => removeInsertion(ins.id)} className={`absolute top-2 right-2 ${theme === 'retro' ? 'text-[#8B261D]/40 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-red-400'}`}><X size={14} /></button>
                                                    <span className={`text-[10px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} uppercase tracking-wider mb-2 block`}>{language === 'EN' ? "Insertion Instruction" : "插入指令"}</span>
                                                    <textarea
                                                        value={ins.instruction}
                                                        onChange={(e) => updateInsertion(ins.id, e.target.value)}
                                                        className={`w-full ${theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black focus:border-[#8B261D]' : 'bg-black/40 border-zinc-700 text-white focus:border-[var(--mist-active-accent)]'} border rounded p-2 text-sm placeholder-zinc-500 resize-none h-20 focus:outline-none`}
                                                        placeholder={language === 'EN' ? "Describe what to insert here..." : "描述需要在此处插入的段落内容..."}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Footer - Simplified */}
                        <div className={`p-4 border-t ${theme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/20' : 'bg-[#0a0a0a] border-zinc-800'} flex justify-between items-center shrink-0`}>
                            <div className="text-xs text-zinc-500 flex items-center gap-2">
                                <AlertCircle size={14} />
                                {language === 'EN' ? "Select text to add specific annotations." : "提示：框选文本可添加针对性批注。"}
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setIsModifyModalOpen(false)} className="px-6 py-2 rounded text-zinc-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
                                    {language === 'EN' ? "Close" : "关闭"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Style Library Modal */}
                    <NarrativeLibraryModal
                        isOpen={isStyleLibraryOpen}
                        onClose={() => setIsStyleLibraryOpen(false)}
                        blockId="style_matrix"
                        blockName={language === 'EN' ? "AUTHOR STYLE LIBRARY" : "作者风格词库"}
                        selectedTags={selectedStyle ? [selectedStyle] : []}
                        onToggleTag={handleStyleSelect}
                        customLibraryData={styleLibraryData}
                        lang={language}
                        onAddCustomDef={handleAddCustomStyle}
                    />
                </div >
            )}
        </div >
    );
};
