
import React from 'react';
import { CreativeBlueprint, BlueprintLanguage } from '../../types';
import { Zap, Film, ImageIcon, Clock } from 'lucide-react';
import { CopyButton, MarkdownRenderer } from '../SharedBlueprintComponents';

interface TrailerViewProps {
    blueprint: CreativeBlueprint;
    activeTab: 'HYPE' | 'THE_CUT' | 'ASSETS';
    language: BlueprintLanguage;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    themeAccent: string;
    themeBorder: string;
}

export const TrailerView: React.FC<TrailerViewProps> = ({ 
    blueprint, activeTab, language, onUpdateBlueprint, themeAccent, themeBorder 
}) => {
    const data = blueprint.trailerData || {
        hook: "TRAILER HOOK",
        copywriting: ["LINE 1", "LINE 2", "LINE 3"],
        musicCue: "Epic Tension",
        beatSheet: []
    };

    const handleUpdate = (field: string, value: any) => {
        const newData = { ...data, [field]: value };
        onUpdateBlueprint({ ...blueprint, trailerData: newData });
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-2 pb-20">
             {activeTab === 'HYPE' && (
                 <>
                    <div className={`bg-orange-900/10 border ${themeBorder} p-10 rounded-2xl relative overflow-hidden text-center`}>
                        <h3 className="text-orange-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">THE HOOK</h3>
                        <textarea
                            value={data.hook}
                            onChange={(e) => handleUpdate('hook', e.target.value)}
                            className="w-full text-3xl md:text-5xl font-serif leading-tight bg-transparent border-none text-center focus:outline-none focus:ring-0 resize-none p-0 text-white"
                            rows={2}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.copywriting.map((line, i) => (
                            <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase mb-2 block">Voiceover Line 0{i+1}</span>
                                <textarea 
                                    value={line}
                                    onChange={(e) => {
                                        const next = [...data.copywriting];
                                        next[i] = e.target.value;
                                        handleUpdate('copywriting', next);
                                    }}
                                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-lg font-serif italic text-zinc-300 resize-none"
                                    rows={3}
                                />
                            </div>
                        ))}
                    </div>
                 </>
             )}

             {activeTab === 'THE_CUT' && (
                 <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                        <h3 className="text-2xl font-serif text-white flex items-center gap-2"><Film size={20}/> The Beat Sheet</h3>
                        <div className="text-xs font-mono text-zinc-500 uppercase">Music: {data.musicCue}</div>
                    </div>
                    {data.beatSheet.length === 0 ? (
                        <div className="py-20 text-center text-zinc-700 italic border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10">
                            No beats defined.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {data.beatSheet.map((beat, i) => (
                                <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-lg flex gap-6 items-center">
                                    <div className="w-12 font-mono text-orange-500 font-bold text-sm">[{beat.beatType}]</div>
                                    <div className="w-16 text-zinc-500 font-mono text-xs">{beat.time}</div>
                                    <div className="flex-1 text-sm text-zinc-300">{beat.visual}</div>
                                    <div className="flex-1 text-xs text-zinc-500 italic border-l border-zinc-800 pl-4">{beat.audio}</div>
                                </div>
                            ))}
                        </div>
                    )}
                 </div>
             )}
        </div>
    );
};
