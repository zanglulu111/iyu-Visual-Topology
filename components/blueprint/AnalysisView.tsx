
import React, { useState } from 'react';
import { CreativeBlueprint, BlueprintLanguage, NarrativeFieldState } from '../../types';
import { Bot, Zap, Loader2, Edit3, Eye, AlertCircle, Cpu, ArrowLeft, BrainCircuit, Activity, ScanLine } from 'lucide-react';
import { CopyButton, ProcessingTimer, MarkdownRenderer } from '../SharedBlueprintComponents';
import { AdminXRayButton } from '../XRayInspector';

interface AnalysisViewProps {
    blueprint: CreativeBlueprint;
    language: BlueprintLanguage;
    isAesthetic: boolean;
    onAnalyzePsycho: (fieldState: NarrativeFieldState, synopsis: string) => Promise<string>;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    fieldState: NarrativeFieldState;
    themeAccent: string;
    theme?: string;
    onBack?: () => void;
    isAdmin?: boolean;
}

const SimpleMathRenderer = ({ formula, language, theme }: { formula: string, language: BlueprintLanguage, theme?: string }) => {
  // Basic LaTeX symbol replacement to clean up the string for display
  const cleanText = (t: string) => {
    let text = t
      .replace(/\\quad/g, ' ')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\diamond/g, '◇')
      .replace(/\\to/g, '→')
      .replace(/\\nrightarrow/g, '↛')
      .replace(/\\leftrightarrow/g, ' ↔ ')
      .replace(/\\emptyset/g, '∅')
      .replace(/\\infty/g, '∞')
      .replace(/\\Phi/g, 'Φ')
      .replace(/\\sigma/g, 'σ')
      .replace(/\\\$/g, '$')
      .trim();
      
    // Handle bilingual pattern: "English (Chinese)" -> Select based on language
    // We assume the format is roughly "Subject (主体)"
    if (language === 'CN') {
        // Keep only content inside the last parenthesis if it looks like Chinese
        // Or simpler: remove the English part before the parenthesis
        text = text.replace(/([a-zA-Z0-9\s\-\[\]]+)\s*[（(]([^)）]+)[)）]/g, '$2');
    } else {
        // Keep English, remove Chinese in parenthesis
        text = text.replace(/([a-zA-Z0-9\s\-\[\]]+)\s*[（(]([^)）]+)[)）]/g, '$1');
    }
    
    return text;
  };

  // Regex to find \frac{A}{B} pattern
  const fracRegex = /\\frac\{(.+?)\}\{(.+?)\}/;
  const match = formula.match(fracRegex);

  // Styling classes
  const containerClass = "flex flex-nowrap items-center justify-center gap-3 py-6 overflow-x-auto no-scrollbar w-full select-none";
  const textClass = "text-lg md:text-2xl font-serif whitespace-nowrap tracking-wide";

  if (match) {
    const parts = formula.split(match[0]);
    const leftPart = cleanText(parts[0]);
    const rightPart = cleanText(parts[1] || "");
    const numerator = cleanText(match[1]);
    const denominator = cleanText(match[2]);

    return (
      <div className={containerClass}>
        {leftPart && <span className={`${textClass} text-zinc-500 font-light`}>{leftPart}</span>}
        <div className="flex flex-col items-center px-4 mx-2 group/frac">
           <span className={`border-b ${theme === 'retro' ? 'border-[#8B261D]/30' : 'border-[var(--mist-active-accent)]/30'} px-2 pb-1 mb-1 text-center leading-tight ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} font-bold italic group-hover/frac:text-white transition-colors text-xl md:text-2xl shadow-[var(--mist-active-accent)]/20 drop-shadow-sm`}>{numerator}</span>
           <span className="px-2 pt-1 text-center leading-tight text-zinc-400 font-medium group-hover/frac:text-zinc-200 transition-colors text-base md:text-lg">{denominator}</span>
        </div>
        {rightPart && <span className={`${textClass} font-bold text-[var(--mist-active-accent)] italic`}>{rightPart}</span>}
      </div>
    );
  } else {
     // Render simple equation without fraction
      return (
          <div className={`${containerClass} ${textClass} text-zinc-300 italic`}>
              <span className={`bg-gradient-to-r from-zinc-200 via-[var(--mist-active-accent)] to-zinc-200 bg-clip-text text-transparent font-bold`}>
                 {cleanText(formula)}
              </span>
          </div>
      )
  }
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({ 
    blueprint, language, isAesthetic, onAnalyzePsycho, onUpdateBlueprint, fieldState, themeAccent, theme, onBack, isAdmin 
}) => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    // Track start time for the processing timer
    const [analysisStartTime, setAnalysisStartTime] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        // Set start time when analysis starts
        setAnalysisStartTime(Date.now());
        setErrorMsg(null);
        try {
            const analysis = await onAnalyzePsycho(fieldState, blueprint.narrative?.synopsis || "");
            
            if (!analysis) {
                setErrorMsg(language === 'EN' ? "Analysis failed to generate. Please try again." : "分析生成失败，请重试。");
                return;
            }

            const updatedBlueprint = {
                ...blueprint,
                narrative: {
                    ...blueprint.narrative,
                    psychoanalysis: analysis
                }
            };
            onUpdateBlueprint(updatedBlueprint);
            setIsEditing(false);
        } catch (e) {
            console.error(e);
            setErrorMsg(language === 'EN' ? "An error occurred during analysis." : "诊断过程中发生错误。");
        } finally {
            setIsAnalyzing(false);
            // Clear start time when analysis ends
            setAnalysisStartTime(null);
        }
    };

    const handleUpdateText = (val: string) => {
        const updatedBlueprint = {
            ...blueprint,
            narrative: {
                ...blueprint.narrative,
                psychoanalysis: val
            }
        };
        onUpdateBlueprint(updatedBlueprint);
    };

    // Helper to separate formula from text and split text into pre/post parts
    const fullText = blueprint.narrative?.psychoanalysis || "";
    const formulaMatch = fullText.match(/\$\$([\s\S]*?)\$\$/);
    
    // Extracted formula
    const formula = formulaMatch ? formulaMatch[1].trim() : null;
    
    // Split text based on formula position
    const preText = formulaMatch ? fullText.substring(0, formulaMatch.index).trim() : fullText;
    const postText = formulaMatch ? fullText.substring(formulaMatch.index! + formulaMatch[0].length).trim() : "";

    return (
        <div className="flex w-full h-full animate-in fade-in duration-500">
            {/* --- LEFT SIDEBAR: ANALYTIC ANCHORS --- */}
            {!isEditing && blueprint.narrative?.psychoanalysis && (
                <div className={`w-72 lg:w-80 hidden md:flex flex-col border-r ${theme === 'retro' ? 'border-[#8B261D]/10 bg-[var(--bg-header)]' : 'border-zinc-800 bg-zinc-950/30'} shrink-0`}>
                    <div className={`p-6 border-b ${theme === 'retro' ? 'border-black/5' : 'border-zinc-800/50'}`}>
                        <div className="flex items-center gap-2 mb-1">
                            <Activity size={14} className={themeAccent} />
                            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-black/60' : 'text-zinc-500'}`}>
                                {language === 'EN' ? "Diagnostic Anchors" : "临床诊断锚点"}
                            </span>
                        </div>
                        <h4 className={`text-sm font-serif ${theme === 'retro' ? 'text-black' : 'text-zinc-300'}`}>
                            {language === 'EN' ? "Structural Parameters" : "主体结构参数"}
                        </h4>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
                        {/* Active Blocks as Anchors */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between group">
                                <span className={`text-[10px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-600'} uppercase tracking-widest`}>
                                    {language === 'EN' ? "Symbolic Tags" : "象征界标签"}
                                </span>
                                <div className={`h-[1px] flex-1 mx-3 ${theme === 'retro' ? 'bg-[#8B261D]/10' : 'bg-zinc-800'}`} />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(fieldState || {}).flatMap(([_, tags]) => tags).slice(0, 15).map((tag, i) => (
                                    <span key={i} className={`text-[10px] px-2 py-1 rounded ${theme === 'retro' ? 'bg-[#8B261D]/5 text-[#8B261D] border border-[#8B261D]/10' : 'bg-zinc-900 text-zinc-400 border border-zinc-700/50'}`}>
                                        # {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Equation Summary */}
                        {formula && (
                            <div className="space-y-4">
                                <span className={`text-[10px] font-bold ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-600'} uppercase tracking-widest`}>
                                    {language === 'EN' ? "Core Equation" : "核心代数"}
                                </span>
                                <div className={`p-4 rounded-xl border border-dashed ${theme === 'retro' ? 'bg-white/40 border-[#8B261D]/20' : 'bg-zinc-900/30 border-zinc-700'}`}>
                                    <div className="scale-75 origin-center">
                                         <SimpleMathRenderer formula={formula} language={language} theme={theme} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Clinical Status */}
                        <div className={`p-4 rounded-xl ${theme === 'retro' ? 'bg-[#8B261D]/5' : 'bg-[var(--mist-active-accent)]/5 border border-[var(--mist-active-accent)]/10'}`}>
                            <div className="flex items-center gap-2 mb-2">
                                <ScanLine size={12} className={themeAccent} />
                                <span className={`text-[10px] font-bold ${themeAccent} uppercase tracking-widest`}>
                                    {language === 'EN' ? "Diagnosis Status" : "诊断状态"}
                                </span>
                            </div>
                            <p className={`text-[10px] leading-relaxed ${theme === 'retro' ? 'text-black/60' : 'text-zinc-500'}`}>
                                {language === 'EN' 
                                    ? "Subject mapping complete. Symbolic order verified. Excess of 'Jouissance' detected within narrative structure." 
                                    : "主体映射已完成。象征序位验证通过。叙事结构中检测到过度溢出的‘享乐’。"}
                            </p>
                        </div>
                    </div>
                    
                    <div className="p-6 border-t border-zinc-800/50">
                        <p className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest text-center">Visionary • Psychoanalysis Unit</p>
                    </div>
                </div>
            )}

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 pt-10 px-6">
                    {onBack && (
                        <button 
                            onClick={onBack}
                            className={`mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-zinc-500 hover:text-black' : 'text-zinc-500 hover:text-white'} transition-colors group`}
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            {language === 'EN' ? "Back to Bible" : "返回圣经"}
                        </button>
                    )}

                    {!blueprint.narrative?.psychoanalysis ? (
                        <div className={`flex flex-col items-center justify-center py-20 ${theme === 'retro' ? 'bg-[var(--bg-header)]/40 border-[#8B261D]/20' : 'bg-zinc-900/20 border-zinc-800'} border rounded-2xl border-dashed`}>
                            <BrainCircuit size={48} className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-600'} mb-6`} />
                            <h3 className={`text-xl font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} mb-2`}>{language === 'EN' ? "Psychoanalysis" : "精神分析"}</h3>
                            <p className={`${theme === 'retro' ? 'text-black/60' : 'text-zinc-500'} text-sm mb-8 text-center max-w-md`}>
                                {language === 'EN' 
                                    ? "A structural diagnosis based on Lacanian theory. Reveals the symbolic topology of drive and desire." 
                                    : "基于拉康理论的结构性诊断。揭示叙事中的驱力与欲望在象征界的拓扑映射。"}
                            </p>
                            {errorMsg && (
                                <div className="flex items-center gap-2 text-red-400 text-xs mb-4 bg-red-900/20 px-4 py-2 rounded">
                                    <AlertCircle size={14} /> {errorMsg}
                                </div>
                            )}
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={handleAnalyze}
                                    disabled={isAnalyzing}
                                    className={`px-8 py-3 ${theme === 'retro' ? 'bg-[#8B261D] hover:bg-[#631B15] text-white shadow-none' : 'bg-[var(--mist-active-accent)] hover:opacity-90 text-black'} font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all disabled:opacity-50`}
                                >
                                    {isAnalyzing ? <Loader2 size={16} className="animate-spin" /> : <Zap size={16} />}
                                    {isAnalyzing ? (
                                        <span className="flex items-center">
                                            {language === 'EN' ? "Diagnosing..." : "诊断中..."}
                                            <ProcessingTimer startTime={analysisStartTime} />
                                        </span>
                                    ) : (language === 'EN' ? "Generate Report" : "生成精神分析报告")}
                                </button>
                                <AdminXRayButton
                                    isAdmin={isAdmin}
                                    lang={language === 'EN' ? 'EN' : 'CN'}
                                    title={language === 'EN' ? 'X-Ray Psychoanalysis Prompt' : 'X-Ray 精神分析指令'}
                                    payload={{
                                        task: 'Generate psychoanalysis report',
                                        synopsis: blueprint.narrative?.synopsis || '',
                                        fieldState
                                    }}
                                    disabled={isAnalyzing}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={`${theme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]/20' : 'bg-zinc-900/10 border-zinc-800'} border p-6 md:p-10 rounded-2xl shadow-2xl space-y-10`}>
                            <div className={`flex justify-between items-start border-b ${theme === 'retro' ? 'border-black/10' : 'border-zinc-800'} pb-6`}>
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 ${theme === 'retro' ? 'bg-white/40 border-[#8B261D]/10' : 'bg-zinc-900 border-zinc-700'} border rounded-lg`}>
                                        <BrainCircuit size={24} className={themeAccent} />
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-serif ${theme === 'retro' ? 'text-black' : 'text-white'}`}>{language === 'EN' ? "Psychoanalysis Report" : "精神分析报告"}</h3>
                                        <p className={`text-xs ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'} uppercase tracking-widest mt-1`}>Clinical • Lacanian • Topology of Drive</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                     <button 
                                         onClick={() => setIsEditing(!isEditing)}
                                         className={`${theme === 'retro' ? 'bg-white/40 text-[#8B261D] hover:bg-white/60' : 'bg-zinc-900 text-zinc-400 hover:text-white'} px-3 py-2 rounded transition-colors flex items-center gap-2`}
                                         title={isEditing ? "Preview Mode" : "Edit Mode"}
                                    >
                                        {isEditing ? <Eye size={14} /> : <Edit3 size={14} />}
                                    </button>
                                    <CopyButton text={blueprint.narrative?.psychoanalysis || ""} className={`${theme === 'retro' ? 'bg-white/40 text-[#8B261D] hover:bg-white/60' : 'bg-zinc-900 text-zinc-400 hover:text-white'} px-3 py-2`} label="COPY ALL" />
                                </div>
                            </div>
                            
                            <div className="min-h-[500px]">
                                {isEditing ? (
                                    <textarea
                                        value={blueprint.narrative?.psychoanalysis || ""}
                                        onChange={(e) => handleUpdateText(e.target.value)}
                                        className={`w-full h-[600px] bg-transparent ${theme === 'retro' ? 'text-black border-black/10' : 'text-zinc-300 border-zinc-800'} leading-loose border rounded p-4 focus:ring-1 focus:ring-[var(--mist-active-accent)] resize-none focus:outline-none custom-scrollbar font-mono text-sm`}
                                        placeholder={language === 'EN' ? "Analysis report..." : "分析报告..."}
                                    />
                                ) : (
                                    <div className="space-y-6">
                                        {/* PART 1: INTRO TEXT (Before Formula) */}
                                        <div className={`${theme === 'retro' ? 'bg-white/40' : 'bg-zinc-900/10'} rounded-xl p-2 md:p-4 text-${theme === 'retro' ? 'black' : 'white'}`}>
                                            <MarkdownRenderer content={preText || (language === 'EN' ? "No analysis content." : "暂无分析内容。")} themeAccent={themeAccent} />
                                        </div>

                                        {/* PART 2: FORMULA (Attachment Style) */}
                                        {formula && (
                                            <div className={`${theme === 'retro' ? 'bg-white/40 border-[#8B261D]/20' : 'bg-zinc-900/30 border-zinc-700'} border border-dashed rounded-xl p-6 relative overflow-hidden group hover:border-${themeAccent.replace('text-', '')}/30 transition-colors`}>
                                                <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                                                    <Cpu size={120} className={themeAccent} />
                                                </div>
                                                <div className={`flex items-center gap-2 ${themeAccent} text-[10px] font-bold uppercase tracking-[0.3em] mb-4`}>
                                                    <Zap size={12} className={theme === 'retro' ? 'fill-[#8B261D]' : 'fill-[var(--mist-active-accent)]'} />
                                                    {language === 'EN' ? "ATTACHMENT: CORE EQUATION" : "附件: 核心算式"}
                                                </div>

                                                {/* MATH RENDERER */}
                                                <SimpleMathRenderer formula={formula} language={language} theme={theme} />
                                                
                                                <p className="mt-4 text-[10px] text-zinc-600 font-serif italic text-center opacity-60">
                                                    {language === 'EN' 
                                                        ? "Lacanian Algebraic Representation of Subjective Drive and Lack." 
                                                        : "基于拉康代数的欲望驱力与主体匮乏映射。"}
                                                </p>
                                            </div>
                                        )}

                                        {/* PART 3: REST OF REPORT (After Formula) */}
                                        {postText && (
                                            <div className={`${theme === 'retro' ? 'bg-white/40' : 'bg-zinc-900/10'} rounded-xl p-2 md:p-4 text-${theme === 'retro' ? 'black' : 'white'}`}>
                                                <MarkdownRenderer content={postText} themeAccent={themeAccent} />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className={`mt-8 pt-6 border-t ${theme === 'retro' ? 'border-black/10' : 'border-zinc-800'} text-center flex justify-between items-center`}>
                                <p className={`text-[10px] ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-600'} font-mono uppercase tracking-[0.2em]`}>End of Clinical Report</p>
                                <div className="flex items-center gap-2">
                                    <AdminXRayButton
                                        isAdmin={isAdmin}
                                        lang={language === 'EN' ? 'EN' : 'CN'}
                                        title={language === 'EN' ? 'X-Ray Psychoanalysis Update Prompt' : 'X-Ray 精神分析更新指令'}
                                        payload={{
                                            task: 'Update psychoanalysis report',
                                            synopsis: blueprint.narrative?.synopsis || '',
                                            fieldState,
                                            previousReport: blueprint.narrative?.psychoanalysis || ''
                                        }}
                                        disabled={isAnalyzing}
                                        className={theme === 'retro' ? 'h-8 w-8 bg-white border-[#8B261D]/20 text-[#8B261D] hover:bg-[#8B261D]/10' : 'h-8 w-8 bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-gold-primary'}
                                    />
                                    <button 
                                        onClick={handleAnalyze}
                                        disabled={isAnalyzing}
                                        className={`text-xs font-bold uppercase tracking-wider ${themeAccent} hover:text-white transition-colors flex items-center gap-2`}
                                    >
                                        {isAnalyzing ? <Loader2 size={12} className="animate-spin" /> : <Zap size={12} />}
                                        {language === 'EN' ? "Update Diagnosis" : "更新诊断报告"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
