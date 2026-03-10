
import React, { useState } from 'react';
import { CreativeBlueprint, BlueprintLanguage, NarrativeFieldState } from '../../types';
import { Bot, Zap, Loader2, Edit3, Eye, AlertCircle, Cpu } from 'lucide-react';
import { CopyButton, ProcessingTimer, MarkdownRenderer } from '../SharedBlueprintComponents';

interface AnalysisViewProps {
    blueprint: CreativeBlueprint;
    language: BlueprintLanguage;
    isAesthetic: boolean;
    onAnalyzePsycho: (fieldState: NarrativeFieldState, synopsis: string) => Promise<string>;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    fieldState: NarrativeFieldState;
    themeAccent: string;
    theme?: string;
}

const SimpleMathRenderer = ({ formula, language }: { formula: string, language: BlueprintLanguage }) => {
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
           <span className="border-b border-white/30 px-2 pb-1 mb-1 text-center leading-tight text-gold-primary font-bold italic group-hover/frac:text-white transition-colors text-xl md:text-2xl shadow-gold-primary/20 drop-shadow-sm">{numerator}</span>
           <span className="px-2 pt-1 text-center leading-tight text-zinc-400 font-medium group-hover/frac:text-zinc-200 transition-colors text-base md:text-lg">{denominator}</span>
        </div>
        {rightPart && <span className={`${textClass} font-bold text-emerald-400 italic`}>{rightPart}</span>}
      </div>
    );
  } else {
     // Render simple equation without fraction
     return (
         <div className={`${containerClass} ${textClass} text-zinc-300 italic`}>
             <span className="bg-gradient-to-r from-zinc-200 via-gold-primary to-zinc-200 bg-clip-text text-transparent font-bold">
                {cleanText(formula)}
             </span>
         </div>
     )
  }
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({ 
    blueprint, language, isAesthetic, onAnalyzePsycho, onUpdateBlueprint, fieldState, themeAccent, theme 
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
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {!blueprint.narrative?.psychoanalysis ? (
                <div className={`flex flex-col items-center justify-center py-20 ${theme === 'retro' ? 'bg-white/40 border-black/10' : 'bg-zinc-900/20 border-zinc-800'} border rounded-2xl border-dashed`}>
                    <Bot size={48} className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-600'} mb-6`} />
                    <h3 className={`text-xl font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} mb-2`}>{language === 'EN' ? "Psychoanalytic Report" : "精神分析诊断报告"}</h3>
                    <p className={`${theme === 'retro' ? 'text-black/60' : 'text-zinc-500'} text-sm mb-8 text-center max-w-md`}>
                        {language === 'EN' 
                            ? "Generate a deep structural analysis based on Lacanian theory. Reveals hidden desires and ideological symptoms." 
                            : "生成基于拉康理论的深度结构分析。揭示文本背后的潜意识欲望与意识形态症候。"}
                    </p>
                    {errorMsg && (
                        <div className="flex items-center gap-2 text-red-400 text-xs mb-4 bg-red-900/20 px-4 py-2 rounded">
                            <AlertCircle size={14} /> {errorMsg}
                        </div>
                    )}
                    <button 
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className={`px-8 py-3 ${theme === 'retro' ? 'bg-[#8B261D] hover:bg-[#631B15] text-white shadow-none' : (isAesthetic ? 'bg-rose-500 hover:bg-rose-400 text-black' : 'bg-gold-primary hover:bg-amber-400 text-black')} font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all disabled:opacity-50`}
                    >
                        {isAnalyzing ? <Loader2 size={16} className="animate-spin" /> : <Zap size={16} />}
                        {isAnalyzing ? (
                            <span className="flex items-center">
                                {language === 'EN' ? "Diagnosing..." : "诊断中..."}
                                <ProcessingTimer startTime={analysisStartTime} />
                            </span>
                        ) : (language === 'EN' ? "Run Diagnosis" : "开始诊断")}
                    </button>
                </div>
            ) : (
                <div className={`${theme === 'retro' ? 'bg-white border-black/10' : 'bg-[#050505] border-zinc-800'} border p-10 rounded-2xl shadow-2xl space-y-10`}>
                    <div className={`flex justify-between items-start border-b ${theme === 'retro' ? 'border-black/10' : 'border-zinc-800'} pb-6`}>
                        <div className="flex items-center gap-4">
                            <div className={`p-3 ${theme === 'retro' ? 'bg-[#F4EFE0] border-black/10' : 'bg-zinc-900 border-zinc-700'} border rounded-lg`}>
                                <Bot size={24} className={themeAccent} />
                            </div>
                            <div>
                                <h3 className={`text-2xl font-serif ${theme === 'retro' ? 'text-black' : 'text-white'}`}>{language === 'EN' ? "Visionary Analysis" : "Visionary 深度诊断"}</h3>
                                <p className={`text-xs ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'} uppercase tracking-widest mt-1`}>Lacanian • Zizekian • Cultural Critique</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <button 
                                onClick={() => setIsEditing(!isEditing)}
                                className={`${theme === 'retro' ? 'bg-[#F4EFE0] text-[#8B261D] hover:bg-[#DCD8CF]' : 'bg-zinc-900 text-zinc-400 hover:text-white'} px-3 py-2 rounded transition-colors flex items-center gap-2`}
                                title={isEditing ? "Preview Mode" : "Edit Mode"}
                            >
                                {isEditing ? <Eye size={14} /> : <Edit3 size={14} />}
                            </button>
                            <CopyButton text={blueprint.narrative?.psychoanalysis || ""} className={`${theme === 'retro' ? 'bg-[#F4EFE0] text-[#8B261D] hover:bg-[#DCD8CF]' : 'bg-zinc-900 text-zinc-400 hover:text-white'} px-3 py-2`} label="COPY ALL" />
                        </div>
                    </div>
                    
                    <div className="min-h-[500px]">
                        {isEditing ? (
                            <textarea
                                value={blueprint.narrative?.psychoanalysis || ""}
                                onChange={(e) => handleUpdateText(e.target.value)}
                                className={`w-full h-[600px] bg-transparent ${theme === 'retro' ? 'text-black border-black/10' : 'text-zinc-300 border-zinc-800'} leading-loose border rounded p-4 focus:ring-1 focus:ring-gold-primary resize-none focus:outline-none custom-scrollbar font-mono text-sm`}
                                placeholder={language === 'EN' ? "Analysis report..." : "分析报告..."}
                            />
                        ) : (
                            <div className="space-y-6">
                                {/* PART 1: INTRO TEXT (Before Formula) */}
                                <div className={`${theme === 'retro' ? 'bg-[#F4EFE0]' : 'bg-zinc-900/10'} rounded-xl p-2 md:p-4 text-${theme === 'retro' ? 'black' : 'white'}`}>
                                    <MarkdownRenderer content={preText || (language === 'EN' ? "No analysis content." : "暂无分析内容。")} themeAccent={themeAccent} />
                                </div>

                                {/* PART 2: FORMULA (Attachment Style) */}
                                {formula && (
                                    <div className={`${theme === 'retro' ? 'bg-white border-black/20' : 'bg-zinc-900/30 border-zinc-700'} border border-dashed rounded-xl p-6 relative overflow-hidden group hover:border-${themeAccent.replace('text-', '')}/30 transition-colors`}>
                                        <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                                            <Cpu size={120} className={themeAccent} />
                                        </div>
                                        <div className={`flex items-center gap-2 ${themeAccent} text-[10px] font-bold uppercase tracking-[0.3em] mb-4`}>
                                            <Zap size={12} className="fill-gold-primary" /> 
                                            {language === 'EN' ? "ATTACHMENT: CORE EQUATION" : "附件: 核心算式"}
                                        </div>
                                        
                                        {/* MATH RENDERER */}
                                        <SimpleMathRenderer formula={formula} language={language} />
                                        
                                        <p className="mt-4 text-[10px] text-zinc-600 font-serif italic text-center opacity-60">
                                            {language === 'EN' 
                                                ? "Lacanian Algebraic Representation of Subjective Drive and Lack." 
                                                : "基于拉康代数的欲望驱力与主体匮乏映射。"}
                                        </p>
                                    </div>
                                )}

                                {/* PART 3: REST OF REPORT (After Formula) */}
                                {postText && (
                                    <div className={`${theme === 'retro' ? 'bg-[#F4EFE0]' : 'bg-zinc-900/10'} rounded-xl p-2 md:p-4 text-${theme === 'retro' ? 'black' : 'white'}`}>
                                        <MarkdownRenderer content={postText} themeAccent={themeAccent} />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className={`mt-8 pt-6 border-t ${theme === 'retro' ? 'border-black/10' : 'border-zinc-800'} text-center flex justify-between items-center`}>
                        <p className={`text-[10px] ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-600'} font-mono uppercase tracking-[0.2em]`}>End of Confidential Report</p>
                         <button 
                            onClick={handleAnalyze}
                            disabled={isAnalyzing}
                            className={`text-xs font-bold uppercase tracking-wider ${themeAccent} hover:text-white transition-colors flex items-center gap-2`}
                        >
                            {isAnalyzing ? <Loader2 size={12} className="animate-spin" /> : <Zap size={12} />}
                            {language === 'EN' ? "Re-Run Diagnosis" : "重新诊断"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
