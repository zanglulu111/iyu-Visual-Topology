
import React from 'react';
import { CreativeBlueprint, BlueprintLanguage } from '../../types';
import { Feather, Mic, Music, Wind, BookOpen } from 'lucide-react';
import { CopyButton } from '../SharedBlueprintComponents';

interface PoeticViewProps {
    blueprint: CreativeBlueprint;
    activeTab: 'PHILOSOPHY' | 'VOICE' | 'IMAGERY' | 'ASSETS';
    language: BlueprintLanguage;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    themeAccent: string;
    themeBorder: string;
    theme?: string;
}

export const PoeticView: React.FC<PoeticViewProps> = ({
    blueprint, activeTab, language, onUpdateBlueprint, themeAccent, themeBorder, theme
}) => {

    const data = blueprint.poeticData || {
        corePhilosophy: "EXISTENTIAL AXIOM",
        monologue: "",
        voiceStyle: "",
        imagery: "",
        rhythm: ""
    };

    const handleUpdate = (field: string, value: any) => {
        const newData = { ...data, [field]: value };
        onUpdateBlueprint({ ...blueprint, poeticData: newData });
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">

             {activeTab === 'PHILOSOPHY' && (
                 <>
                      <div className={`${theme === 'retro' ? 'bg-transparent border-[var(--border-main)]' : 'bg-[var(--mist-active-accent)]/10 border border-[var(--mist-active-accent)]/30'} p-10 rounded-2xl relative overflow-hidden text-center group hover:border-[var(--mist-active-accent)]/50 transition-colors border`}>
                           <h3 className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} font-mono font-bold text-xs uppercase tracking-[0.3em] mb-4`}>CORE PHILOSOPHY</h3>
                           <textarea
                               value={data.corePhilosophy}
                               onChange={(e) => handleUpdate('corePhilosophy', e.target.value)}
                               className={`w-full text-2xl md:text-4xl font-serif leading-relaxed bg-transparent border-none text-center focus:outline-none focus:ring-0 resize-none p-0 placeholder-[var(--mist-active-accent)]/30 ${theme === 'retro' ? 'text-black' : 'text-white'}`}
                               rows={3}
                               placeholder={language === 'EN' ? "Enter the core philosophical axiom..." : "在此输入核心哲学公理..."}
                           />
                      </div>
                 </>
             )}

             {activeTab === 'VOICE' && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className={`p-8 rounded-xl transition-colors border ${theme === 'retro' ? 'bg-transparent border-[var(--border-main)] hover:border-[#8B261D]/30 shadow-none' : 'bg-zinc-900/30 border border-zinc-800 hover:border-[var(--mist-active-accent)]/30'}`}>
                          <div className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} text-xs font-bold uppercase mb-4 flex items-center gap-2`}>
                             <Mic size={14} /> Voice Style
                          </div>
                          <textarea
                             value={data.voiceStyle}
                             onChange={(e) => handleUpdate('voiceStyle', e.target.value)}
                             className={`w-full h-40 bg-transparent text-base font-serif leading-relaxed border-none focus:outline-none resize-none p-0 placeholder-zinc-600 ${theme === 'retro' ? 'text-black' : 'text-zinc-300'}`}
                             placeholder={language === 'EN' ? "Describe the voiceover tone..." : "描述旁白的声音特质与调性..."}
                          />
                      </div>
                      <div className={`p-8 rounded-xl transition-colors border ${theme === 'retro' ? 'bg-transparent border-[var(--border-main)] hover:border-[#8B261D]/30 shadow-none' : 'bg-zinc-900/30 border border-zinc-800 hover:border-[var(--mist-active-accent)]/30'}`}>
                          <div className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} text-xs font-bold uppercase mb-4 flex items-center gap-2`}>
                             <Music size={14} /> Rhythm & Pacing
                          </div>
                          <textarea
                             value={data.rhythm}
                             onChange={(e) => handleUpdate('rhythm', e.target.value)}
                             className={`w-full h-40 bg-transparent text-base font-serif leading-relaxed border-none focus:outline-none resize-none p-0 placeholder-zinc-600 ${theme === 'retro' ? 'text-black' : 'text-zinc-300'}`}
                             placeholder={language === 'EN' ? "Describe the rhythmic structure..." : "描述影像的节奏与律动结构..."}
                          />
                      </div>
                      <div className={`p-8 rounded-xl md:col-span-2 transition-colors border ${theme === 'retro' ? 'bg-transparent border-[var(--border-main)] hover:border-[#8B261D]/30 shadow-none' : 'bg-zinc-900/30 border border-zinc-800 hover:border-[var(--mist-active-accent)]/30'}`}>
                          <div className="flex justify-between items-center mb-4">
                             <div className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} text-xs font-bold uppercase flex items-center gap-2`}>
                                 <BookOpen size={14} /> Inner Monologue
                             </div>
                             <CopyButton text={data.monologue} />
                          </div>
                          <textarea
                             value={data.monologue}
                             onChange={(e) => handleUpdate('monologue', e.target.value)}
                             className={`w-full h-64 bg-transparent text-lg font-serif leading-loose border-none focus:outline-none resize-none p-0 placeholder-zinc-600 ${theme === 'retro' ? 'text-black' : 'text-white'}`}
                             placeholder={language === 'EN' ? "Write the core monologue..." : "撰写核心内心独白..."}
                          />
                      </div>
                 </div>
             )}

             {activeTab === 'IMAGERY' && (
                 <div className="space-y-8">
                      <div className={`p-10 rounded-xl relative overflow-hidden border ${theme === 'retro' ? 'bg-transparent border-[var(--border-main)] shadow-none' : 'bg-zinc-900/30 border border-zinc-800'}`}>
                         <div className="absolute top-0 right-0 p-4 opacity-10">
                             <Wind size={120} className={theme === 'retro' ? 'text-[#8B261D]' : "text-[var(--mist-active-accent)]"} />
                         </div>
                         <div className={`${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} text-xs font-bold uppercase mb-6 flex items-center gap-2 relative z-10`}>
                              <Feather size={14} /> Key Imagery & Symbols
                         </div>
                         <textarea
                              value={data.imagery}
                              onChange={(e) => handleUpdate('imagery', e.target.value)}
                              className={`w-full min-h-[400px] bg-transparent text-xl font-serif leading-loose border-none focus:outline-none resize-none p-0 relative z-10 placeholder-zinc-600 ${theme === 'retro' ? 'text-black' : 'text-zinc-200'}`}
                              placeholder={language === 'EN' ? "Describe the recurring visual motifs..." : "描述反复出现的视觉意象与符号..."}
                         />
                      </div>
                 </div>
             )}
        </div>
    );
};
