
import React, { useEffect, useRef } from 'react';
import { CreativeBlueprint, BlueprintLanguage, CommercialStrategy } from '../../types';
import { FileText, Palette, Plus, Trash2, Film, Mic, Eye } from 'lucide-react';
import { CopyButton } from '../SharedBlueprintComponents';
import { AssetCard } from '../AssetCard';

interface CommercialViewProps {
    blueprint: CreativeBlueprint;
    activeTab: 'STRATEGY' | 'SCRIPT' | 'IDENTITY' | 'ASSETS';
    language: BlueprintLanguage;
    onGenerateAssetImage: (prompt: string) => Promise<string | null>;
    onZoom: (url: string) => void;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    themeAccent: string;
    themeBorder: string;
}

// Added StrategyCardProps interface to handle props typing including React's reserved 'key'
interface StrategyCardProps {
    label: string;
    value: string;
    onChange: (val: string) => void;
    placeholder: string;
}

// Auto-resizing textarea component for strategy cards - Typed as React.FC to handle key prop correctly
const StrategyCard: React.FC<StrategyCardProps> = ({ 
    label, 
    value, 
    onChange, 
    placeholder 
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const resize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(() => {
        resize();
    }, [value]);

    return (
        <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl hover:border-cyan-500/30 transition-colors h-full flex flex-col">
            <div className="text-cyan-400 text-[10px] font-bold uppercase mb-2">{label}</div>
            <textarea
                ref={textareaRef}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-transparent text-lg text-white font-serif border-none focus:outline-none resize-none p-0 placeholder-zinc-600 overflow-hidden flex-1 min-h-[100px]"
                rows={3}
                placeholder={placeholder}
            />
        </div>
    );
};

export const CommercialView: React.FC<CommercialViewProps> = ({ 
    blueprint, activeTab, language, onGenerateAssetImage, onZoom, onUpdateBlueprint, themeAccent, themeBorder 
}) => {
    
    const defaultStrategy: CommercialStrategy = {
        core_desire: "", target_audience: "", pain_point: "", product_role: "", 
        endorsement: "", ritual: "", threat: "", brand_promise: "" 
    };

    // Robust initialization: Ensure commercialData exists and strategy has all keys
    const commercialData = blueprint.commercialData || {
        slogan: language === 'EN' ? "BRAND SLOGAN" : "品牌广告语",
        visualFlow: "",
        copywriting: "",
        strategy: defaultStrategy,
        avScript: [],
        visualNotes: ""
    };

    // Merge actual strategy with defaults to prevent missing C5/C7 keys - explicitly typed as CommercialStrategy
    const strategy: CommercialStrategy = { ...defaultStrategy, ...commercialData.strategy };

    const handleUpdateStrategy = (field: keyof CommercialStrategy, value: string) => {
        const newStrategy = { ...strategy, [field]: value };
        const newCommercialData = { ...commercialData, strategy: newStrategy };
        onUpdateBlueprint({ ...blueprint, commercialData: newCommercialData });
    };
    
    const handleUpdateSlogan = (value: string) => {
         const newCommercialData = { ...commercialData, slogan: value };
         onUpdateBlueprint({ ...blueprint, commercialData: newCommercialData });
    };
    
    const handleUpdateVisualFlow = (value: string) => {
         const newCommercialData = { ...commercialData, visualFlow: value };
         onUpdateBlueprint({ ...blueprint, commercialData: newCommercialData });
    };

    const handleUpdateCopywriting = (value: string) => {
         const newCommercialData = { ...commercialData, copywriting: value };
         onUpdateBlueprint({ ...blueprint, commercialData: newCommercialData });
    };

    const handleUpdateNotes = (value: string) => {
         const newCommercialData = { ...commercialData, visualNotes: value };
         onUpdateBlueprint({ ...blueprint, commercialData: newCommercialData });
    };

    const isTemplate = commercialData.slogan === "BRAND SLOGAN" || !commercialData.slogan;

    // Define the full 8-step strategy map for rendering with explicitly typed keys
    const strategyFields: { key: keyof CommercialStrategy; label: string; placeholder: string }[] = [
        { key: 'core_desire', label: 'C0. Core Desire (底层欲望)', placeholder: '定义受众最原始的欲望回路...' },
        { key: 'target_audience', label: 'C1. Barred Subject (缺失主体)', placeholder: '描述目标受众的社会属性与核心匮乏...' },
        { key: 'pain_point', label: 'C2. The Real Intrusion (痛点场景)', placeholder: '定义焦虑爆发的具体触发场景...' },
        { key: 'threat', label: 'C6. The Threat (潜在威胁)', placeholder: '如果不买这个产品，面临的社会性死亡或主体性丧失...' },
        { key: 'product_role', label: 'C3. Product Totem (产品图腾)', placeholder: '描述产品如何作为救赎符号出现...' },
        { key: 'endorsement', label: 'C4. Endorsement (信任背书)', placeholder: '谁在为救赎做担保？赋予产品合法性的力量...' },
        { key: 'ritual', label: 'C5. The Ritual (转化仪式)', placeholder: '通过特定的消费动作来获得掌控感...' },
        { key: 'brand_promise', label: 'C7. The Promise (承诺幻象)', placeholder: '消费后获得的完美镜像或理想状态...' }
    ];
    
    // Auto-resize refs
    const visualRef = useRef<HTMLTextAreaElement>(null);
    const copyRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (visualRef.current) {
            visualRef.current.style.height = 'auto';
            visualRef.current.style.height = visualRef.current.scrollHeight + 'px';
        }
        if (copyRef.current) {
            copyRef.current.style.height = 'auto';
            copyRef.current.style.height = copyRef.current.scrollHeight + 'px';
        }
    }, [commercialData.visualFlow, commercialData.copywriting, activeTab]);

    return (
        <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-2 pb-20">
             
             {activeTab === 'STRATEGY' && (
                 <>
                     <div className="bg-cyan-900/10 border border-cyan-500/30 p-10 rounded-2xl relative overflow-hidden text-center group hover:border-cyan-500/50 transition-colors">
                          <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">THE CORE MESSAGE</h3>
                          <textarea
                              value={commercialData.slogan}
                              onChange={(e) => handleUpdateSlogan(e.target.value)}
                              className={`w-full text-3xl md:text-5xl font-serif leading-tight bg-transparent border-none text-center focus:outline-none focus:ring-0 resize-none p-0 ${isTemplate ? 'text-zinc-500' : 'text-white'}`}
                              rows={2}
                              placeholder="在此输入广告金句..."
                          />
                     </div>

                     <div>
                         <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">Strategic Framework (The 8-Step Engine)</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                             {strategyFields.map(field => (
                                <StrategyCard
                                    key={field.key}
                                    label={field.label}
                                    value={strategy[field.key] || ""}
                                    onChange={(val) => handleUpdateStrategy(field.key, val)}
                                    placeholder={field.placeholder}
                                />
                             ))}
                         </div>
                     </div>
                 </>
             )}

             {activeTab === 'SCRIPT' && (
                 <div className="space-y-12 pb-20">
                     {/* Visual Flow Section */}
                     <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                <Eye size={16} /> {language === 'EN' ? "Visual Narrative Flow" : "画面叙事流"}
                            </h3>
                            <CopyButton text={commercialData.visualFlow} />
                        </div>
                        <textarea
                            ref={visualRef}
                            value={commercialData.visualFlow}
                            onChange={(e) => handleUpdateVisualFlow(e.target.value)}
                            className="w-full min-h-[300px] bg-transparent text-lg text-zinc-200 font-light leading-loose border-none focus:outline-none resize-none p-0 placeholder-zinc-600 overflow-hidden"
                            placeholder={language === 'EN' ? "Describe the visual journey of the commercial..." : "在此描述广告的整体视觉流程、画面张力、转场逻辑与视觉奇观..."}
                        />
                     </div>

                     {/* Copywriting Section */}
                     <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                <Mic size={16} /> {language === 'EN' ? "Ad Copy & Voiceover" : "核心文案 & 旁白"}
                            </h3>
                            <CopyButton text={commercialData.copywriting} />
                        </div>
                        <textarea
                            ref={copyRef}
                            value={commercialData.copywriting}
                            onChange={(e) => handleUpdateCopywriting(e.target.value)}
                            className="w-full min-h-[200px] bg-transparent text-xl font-serif text-white leading-relaxed border-none focus:outline-none resize-none p-0 placeholder-zinc-600 overflow-hidden text-center"
                            placeholder={language === 'EN' ? "Enter the script, slogans, and voiceover text here..." : "在此输入广告旁白、金句文案与屏幕文字..."}
                        />
                     </div>
                 </div>
             )}

             {activeTab === 'IDENTITY' && (
                 <div className="space-y-12 pb-20">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl">
                              <h4 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <FileText size={14} /> Director's Note
                              </h4>
                              <textarea
                                  value={commercialData.visualNotes}
                                  onChange={(e) => handleUpdateNotes(e.target.value)}
                                  className="w-full h-40 bg-transparent text-sm text-zinc-300 leading-loose border-none focus:outline-none resize-none p-0 custom-scrollbar placeholder-zinc-600"
                                  placeholder="在此输入关于执导风格、镜头语言和执行细节的特殊要求..."
                              />
                          </div>
                          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl">
                              <h4 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <Palette size={14} /> Color & Tone
                              </h4>
                              <p className="text-sm text-zinc-300 leading-loose mb-6">{blueprint.context.tone || "点击“影调”模块定义视觉风格。"}</p>
                              <div className="flex gap-3">
                                  {blueprint.context.colorPalette.length > 0 ? blueprint.context.colorPalette.map((color, i) => (
                                      <div key={i} className="h-12 w-16 rounded-md border border-white/10 shadow-lg relative group" style={{backgroundColor: color}}>
                                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                              <span className="bg-black/80 text-[9px] text-white px-1 rounded">{color}</span>
                                          </div>
                                      </div>
                                  )) : <span className="text-zinc-800 text-xs font-bold uppercase">No palette</span>}
                              </div>
                          </div>
                      </div>

                      <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
                          <div className="p-6 border-b border-zinc-800">
                               <h4 className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Key Visual / Moodboard</h4>
                          </div>
                          <div className="p-6">
                               <AssetCard 
                                    item={{
                                        id: "moodboard",
                                        name: language === 'EN' ? "Key Visual" : "核心视觉",
                                        desc: blueprint.context.moodboard.prompt || "暂无美学描述",
                                        tag: "MOODBOARD",
                                        view: blueprint.context.moodboard
                                    }}
                                    type="moodboard"
                                    language={language}
                                    onUpdate={(updated: any) => {
                                        const newContext = { ...blueprint.context, moodboard: updated.view ? { ...updated.view } : updated };
                                        const newBlueprint = { ...blueprint, context: newContext };
                                        onUpdateBlueprint(newBlueprint);
                                    }}
                                    onDelete={() => {}}
                                    onGenerateImage={onGenerateAssetImage}
                                    onZoom={onZoom}
                               />
                          </div>
                      </div>
                 </div>
             )}
        </div>
    );
};
