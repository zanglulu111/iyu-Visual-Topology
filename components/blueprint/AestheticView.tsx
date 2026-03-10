
import React, { useRef, useEffect, useState } from 'react';
import { CreativeBlueprint, BlueprintLanguage, SubjectType, AestheticMode } from '../../types';
import { Camera, Zap, BookOpen, Terminal, Check, Copy, User, Box, FileText, Palette as PaletteIcon, Plus } from 'lucide-react';
import { CopyButton } from '../SharedBlueprintComponents';
import { AESTHETIC_LOGIC_TEMPLATES } from '../../constants';

interface AestheticViewProps {
    blueprint: CreativeBlueprint;
    activeTab: 'L0_SOUL' | 'L1_L4_MATRIX' | 'L5_TECH' | 'ASSETS';
    language: BlueprintLanguage;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    themeAccent: string;
    themeBorder: string;
    fieldState: any;
    subjectType: SubjectType;
    aestheticMode: AestheticMode;
    customLibraryDefs?: Record<string, { def: string; core: string }>;
    theme?: string;
}

export const AestheticView: React.FC<AestheticViewProps> = ({ 
    blueprint, activeTab, language, onUpdateBlueprint, themeAccent, themeBorder, aestheticMode, theme
}) => {
    const aestheticData = blueprint.aestheticData || {
        visualConcept: "",
        techSpecs: [],
        colorLogic: "",
        promptEngineering: "",
        logicMode: 'IDENTITY'
    };

    const handleUpdate = (field: string, value: any) => {
        const newData = { ...aestheticData, [field]: value };
        onUpdateBlueprint({ ...blueprint, aestheticData: newData });
    };

    const handleUpdateSynopsis = (val: string) => {
        onUpdateBlueprint({
            ...blueprint,
            narrative: {
                ...blueprint.narrative,
                synopsis: val
            }
        });
    };

    const synopsisRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (synopsisRef.current) {
            synopsisRef.current.style.height = 'auto';
            synopsisRef.current.style.height = synopsisRef.current.scrollHeight + 'px';
        }
    }, [blueprint.narrative.synopsis, activeTab]);

    const logicMode = aestheticData.logicMode || 'IDENTITY';
    const currentModeDef = AESTHETIC_LOGIC_TEMPLATES.find(t => t.id === logicMode);
    const isRealism = aestheticMode === 'REALISM';

    return (
        <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-2 pb-40">
             
             {/* SECTION 1: VISUAL MANIFESTO / SYNOPSIS */}
             {activeTab === 'L0_SOUL' && (
                  <div className="space-y-8">
                      <div className={`${theme === 'retro' ? 'bg-[#EBE7DF]/80 border-black/5' : 'bg-rose-950/10 border border-rose-500/30'} p-10 rounded-2xl relative overflow-hidden group hover:border-rose-500/50 transition-colors`}>
                         <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                             <BookOpen size={160} className={theme === 'retro' ? 'text-black' : "text-rose-500"} />
                         </div>
                         <div className={`flex justify-between items-center mb-6 border-b ${theme === 'retro' ? 'border-black/10' : 'border-rose-900/30'} pb-4 relative z-10`}>
                             <h3 className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400'} font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2`}>
                                 <FileText size={16} /> {language === 'EN' ? "Aesthetic Manifesto" : "美学叙事与视觉哲学"}
                             </h3>
                             <div className="flex gap-2">
                                 <CopyButton text={blueprint.narrative.synopsis} />
                             </div>
                         </div>
                          <textarea
                             ref={synopsisRef}
                             value={blueprint.narrative.synopsis}
                             onChange={(e) => handleUpdateSynopsis(e.target.value)}
                             className={`w-full min-h-[400px] bg-transparent text-xl ${theme === 'retro' ? 'text-zinc-800' : 'text-zinc-200'} font-serif leading-loose border-none focus:outline-none resize-none p-0 relative z-10 placeholder-rose-900/60 overflow-hidden`}
                             placeholder={language === 'EN' ? "Describe the visual logic and philosophical core..." : "描述本视觉方案背后的美学逻辑、视觉哲学与影调意境..."}
                         />
                      </div>

                      {/* Mode Context Card */}
                      <div className={`${theme === 'retro' ? 'bg-[#EBE7DF]/40 border-black/5' : 'bg-zinc-900/30 border border-zinc-800'} p-8 rounded-xl`}>
                         <div className="flex items-center gap-3 mb-4">
                             <Zap size={18} className={theme === 'retro' ? 'text-[#8B261D]' : "text-rose-400"} />
                             <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Selected Logic Matrix</span>
                         </div>
                         <h4 className={`text-xl font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} mb-2`}>{currentModeDef?.name}</h4>
                         <p className={`text-sm leading-relaxed mb-4 max-w-2xl ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'}`}>{currentModeDef?.desc}</p>
                         <div className="flex flex-wrap gap-2">
                             {currentModeDef?.primaryBlocks.map(b => (
                                 <span key={b} className={`px-2 py-1 rounded text-[9px] font-mono border uppercase ${theme === 'retro' ? 'bg-black/5 border-black/10 text-zinc-600' : 'bg-black/40 border-zinc-800 text-zinc-600'}`}>
                                     {b.replace('aes_','')}
                                 </span>
                             ))}
                         </div>
                      </div>
                  </div>
             )}

             {/* SECTION 2: TECHNICAL SPECIFICATIONS */}
             {activeTab === 'L1_L4_MATRIX' && (
                  <div className="space-y-12">
                       <div className={`flex items-center justify-between border-b ${theme === 'retro' ? 'border-black/10' : 'border-zinc-800'} pb-4`}>
                            <h3 className={`text-2xl font-serif ${theme === 'retro' ? 'text-black' : 'text-white'} flex items-center gap-3`}>
                                <Camera className={theme === 'retro' ? 'text-[#8B261D]' : "text-rose-500"} />
                                {language === 'EN' ? "Technical Specifications" : "物理参数与显影协议"}
                            </h3>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           {(aestheticData.techSpecs || []).map((spec, i) => (
                               <div key={i} className={`p-6 rounded-xl group transition-all border ${theme === 'retro' ? 'bg-[#EBE7DF]/80 border-black/5 hover:border-[#8B261D]/30 shadow-sm' : 'bg-zinc-900/30 border-zinc-800 hover:border-rose-500/30'}`}>
                                   <div className={`${theme === 'retro' ? 'text-[#8B261D]/50' : 'text-rose-500/50'} text-[10px] font-bold uppercase tracking-widest mb-2`}>{spec.label}</div>
                                   <input 
                                       value={spec.value}
                                       onChange={(e) => {
                                           const next = [...aestheticData.techSpecs];
                                           next[i].value = e.target.value;
                                           handleUpdate('techSpecs', next);
                                       }}
                                       className={`w-full bg-transparent text-lg font-mono border-none focus:outline-none p-0 ${theme === 'retro' ? 'text-black' : 'text-white'}`}
                                   />
                               </div>
                           ))}
                           <button 
                             onClick={() => handleUpdate('techSpecs', [...aestheticData.techSpecs, { label: "Param", value: "" }])}
                             className={`rounded-xl flex items-center justify-center p-6 border-dashed border transition-all ${theme === 'retro' ? 'border-black/20 text-zinc-400 hover:text-[#8B261D] hover:border-[#8B261D]/30 bg-black/5' : 'border-zinc-800 text-zinc-600 hover:text-rose-400 hover:border-rose-500/30'}`}
                           >
                              <Plus size={24} />
                           </button>
                       </div>

                        <div className={`p-8 rounded-xl relative overflow-hidden border ${theme === 'retro' ? 'bg-[#EBE7DF]/80 border-black/5 shadow-sm' : 'bg-zinc-900/30 border border-zinc-800'}`}>
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <PaletteIcon size={120} className={theme === 'retro' ? 'text-[#8B261D]' : "text-rose-500"} />
                            </div>
                            <h4 className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400'} font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2 relative z-10`}>
                                <PaletteIcon size={14} /> Color Logic & Theory
                            </h4>
                            <textarea
                                 value={aestheticData.colorLogic}
                                 onChange={(e) => handleUpdate('colorLogic', e.target.value)}
                                 className={`w-full h-40 bg-transparent text-base font-serif leading-relaxed border-none focus:outline-none resize-none p-0 relative z-10 placeholder-zinc-600 ${theme === 'retro' ? 'text-zinc-800' : 'text-zinc-300'}`}
                                 placeholder="描述画面色彩心理学、色调倾向与美术配色逻辑..."
                            />
                       </div>
                  </div>
             )}

             {/* SECTION 3: PROMPT ENGINEERING */}
             {activeTab === 'L5_TECH' && (
                  <div className="space-y-8">
                      <div className={`border rounded-xl overflow-hidden shadow-2xl ${theme === 'retro' ? 'bg-[#EBE7DF] border-black/5' : 'bg-[#080808] border-zinc-800'}`}>
                          <div className={`flex items-center justify-between px-6 py-4 border-b ${theme === 'retro' ? 'bg-[#D2C8B8] border-black/5' : 'bg-zinc-900/50 border-zinc-800'}`}>
                              <div className="flex items-center gap-3">
                                  <Terminal size={18} className={theme === 'retro' ? 'text-[#8B261D]' : "text-emerald-500"} />
                                  <span className={`text-xs font-black uppercase tracking-widest ${theme === 'retro' ? 'text-black' : 'text-zinc-200'}`}>Production Prompt Library</span>
                              </div>
                              <CopyButton text={aestheticData.promptEngineering} label="COPY LIBRARY" />
                          </div>
                          <textarea 
                              value={aestheticData.promptEngineering} 
                              onChange={(e) => handleUpdate('promptEngineering', e.target.value)} 
                              className={`w-full h-96 bg-transparent p-8 text-sm font-mono focus:outline-none resize-none leading-loose ${theme === 'retro' ? 'text-black placeholder-zinc-400' : 'text-emerald-500/80 placeholder-zinc-800'}`} 
                              placeholder="在此输入最终的 Midjourney 提示词库、负向提示词或特定的画质增强参数..."
                          />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className={`p-8 rounded-xl border ${theme === 'retro' ? 'bg-[#DED8C9]/80 border-black/5 shadow-sm' : 'bg-zinc-900/30 border border-zinc-800'}`}>
                               <h4 className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400'} font-bold text-xs uppercase tracking-widest mb-4`}>Rendering Protocol</h4>
                               <p className={`text-xs leading-relaxed ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-500'}`}>
                                   {isRealism ? "Focusing on physically based rendering (PBR), raytracing, and high-dynamic range (HDR) for photographic authenticity." : "Focusing on stylized cel-shading, painted textures, and artistic medium emulation."}
                               </p>
                          </div>
                          <div className={`p-8 rounded-xl border ${theme === 'retro' ? 'bg-[#DED8C9]/80 border-black/5 shadow-sm' : 'bg-zinc-900/30 border border-zinc-800'}`}>
                               <h4 className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-rose-400'} font-bold text-xs uppercase tracking-widest mb-4`}>Final Output Dimensions</h4>
                               <div className="flex gap-2">
                                   {["16:9", "9:16", "2.39:1", "4:3"].map(ar => (
                                       <span key={ar} className={`px-3 py-1 rounded text-[10px] font-mono border ${theme === 'retro' ? 'bg-[#D2C8B8] border-black/5 text-[#8B261D]' : 'bg-black/40 border-zinc-800 text-zinc-400'}`}>{ar}</span>
                                   ))}
                               </div>
                          </div>
                      </div>
                  </div>
             )}
        </div>
    );
};
