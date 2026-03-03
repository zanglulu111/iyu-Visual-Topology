
import React, { useRef, useEffect } from 'react';
import { CreativeBlueprint, BlueprintLanguage } from '../../types';
import { TestTube, FileText, Layers, Eye, Zap, Wind } from 'lucide-react';
import { CopyButton } from '../SharedBlueprintComponents';

interface ExperimentalViewProps {
    blueprint: CreativeBlueprint;
    activeTab: 'CONCEPT' | 'PROTOCOL' | 'SENSATION' | 'ASSETS';
    language: BlueprintLanguage;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    themeAccent: string;
    themeBorder: string;
}

export const ExperimentalView: React.FC<ExperimentalViewProps> = ({ 
    blueprint, activeTab, language, onUpdateBlueprint, themeAccent, themeBorder 
}) => {
    
    // 强制初始化实验数据结构
    const experimentalData = blueprint.experimentalData || {
        concept: language === 'EN' ? "CONCEPT AXIOM" : "核心观念公理",
        method: "",
        sensation: "",
        visualManifesto: "",
        installationPlan: ""
    };

    const manifestoRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (manifestoRef.current) {
            manifestoRef.current.style.height = 'auto';
            manifestoRef.current.style.height = manifestoRef.current.scrollHeight + 'px';
        }
    }, [experimentalData.visualManifesto]);

    const handleUpdate = (field: string, value: string) => {
        const newData = { ...experimentalData, [field]: value };
        onUpdateBlueprint({ ...blueprint, experimentalData: newData });
    };

    const isConceptTemplate = experimentalData.concept === "CONCEPT AXIOM" || !experimentalData.concept;

    return (
        <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-2 pb-20">
             
             {activeTab === 'CONCEPT' && (
                 <>
                     <div className="bg-purple-900/10 border border-purple-500/30 p-10 rounded-2xl relative overflow-hidden text-center group hover:border-purple-500/50 transition-colors">
                          <h3 className="text-purple-400 font-mono font-bold text-xs uppercase tracking-[0.3em] mb-4">E0. CONCEPT AXIOM</h3>
                          <textarea
                              value={experimentalData.concept}
                              onChange={(e) => handleUpdate('concept', e.target.value)}
                              className={`w-full text-2xl md:text-4xl font-serif leading-relaxed bg-transparent border-none text-center focus:outline-none focus:ring-0 resize-none p-0 placeholder-purple-900 ${isConceptTemplate ? 'text-zinc-500' : 'text-white'}`}
                              rows={3}
                              placeholder="在此输入还原核心观念..."
                          />
                     </div>

                     <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-purple-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <FileText size={14} /> Artist Manifesto
                            </h4>
                            <CopyButton text={experimentalData.visualManifesto} />
                        </div>
                        <textarea
                            ref={manifestoRef}
                            value={experimentalData.visualManifesto}
                            onChange={(e) => handleUpdate('visualManifesto', e.target.value)}
                            className="w-full min-h-[300px] bg-transparent text-lg text-zinc-300 font-serif leading-loose border-none focus:outline-none resize-none p-0 custom-scrollbar placeholder-zinc-600 overflow-hidden"
                            placeholder="描述该还原过程背后的艺术宣言与哲学支撑..."
                        />
                    </div>
                 </>
             )}

             {activeTab === 'PROTOCOL' && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl hover:border-purple-500/30 transition-colors">
                         <div className="text-purple-400 text-xs font-bold uppercase mb-4 flex items-center gap-2">
                            <Layers size={14} /> E3. Operation (Methodology)
                         </div>
                         <textarea
                            value={experimentalData.method}
                            onChange={(e) => handleUpdate('method', e.target.value)}
                            className="w-full h-64 bg-transparent text-base text-white font-mono leading-relaxed border-none focus:outline-none resize-none p-0 placeholder-zinc-600"
                            placeholder="详细定义用于本作品的技术或感知层面的介入手段..."
                         />
                     </div>
                     <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl hover:border-purple-500/30 transition-colors">
                         <div className="text-purple-400 text-xs font-bold uppercase mb-4 flex items-center gap-2">
                            <Eye size={14} /> Spatial/Installation Plan
                         </div>
                         <textarea
                            value={experimentalData.installationPlan}
                            onChange={(e) => handleUpdate('installationPlan', e.target.value)}
                            className="w-full h-64 bg-transparent text-base text-white font-mono leading-relaxed border-none focus:outline-none resize-none p-0 placeholder-zinc-600"
                            placeholder="描述该作品在物理空间、画廊或数字介质中的呈现方案..."
                         />
                     </div>
                 </div>
             )}

             {activeTab === 'SENSATION' && (
                 <div className="space-y-8">
                     <div className="bg-zinc-900/30 border border-zinc-800 p-10 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Wind size={120} className="text-purple-500" />
                        </div>
                        <div className="text-purple-400 text-xs font-bold uppercase mb-6 flex items-center gap-2 relative z-10">
                             <Zap size={14} /> E6. Physiological Affect (Sensation)
                        </div>
                        <textarea
                             value={experimentalData.sensation}
                             onChange={(e) => handleUpdate('sensation', e.target.value)}
                             className="w-full min-h-[300px] bg-transparent text-xl md:text-2xl text-zinc-200 font-serif leading-loose border-none focus:outline-none resize-none p-0 relative z-10 placeholder-zinc-600"
                             placeholder="描述观众在面对此还原影像时的生理层面的情动反应（如眩晕、战栗、迷幻感等）..."
                        />
                     </div>
                 </div>
             )}
        </div>
    );
};
