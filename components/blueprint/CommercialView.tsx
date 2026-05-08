
import React, { useState, useRef, useEffect } from 'react';
import {
    Target, Zap, Palette, FilePlus, Copy, Check, Eye, Mic, FileText, Layout, Film
} from 'lucide-react';
import { CreativeBlueprint, BlueprintLanguage, DriverType } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

interface CommercialViewProps {
    blueprint: CreativeBlueprint;
    language: BlueprintLanguage;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    onGenerateWithAI?: (field: string) => void;
    activeTab?: string;
    onGenerateAssetImage?: (prompt: string) => Promise<string>;
    onZoom?: (url: string) => void;
    themeAccent?: string;
    themeBorder?: string;
    theme?: string;
    isAdmin?: boolean;
}

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={handleCopy}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors group relative"
            title="Copy to clipboard"
        >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-zinc-500 group-hover:text-zinc-300" />}
        </button>
    );
};

const StrategyCard = ({ label, value, onChange, placeholder }: any) => {
    const { theme } = useTheme();
    return (
        <div className={`p-6 rounded-xl border transition-all ${theme === 'retro' ? 'bg-[#F3EFE7] border-[#3A352F]/10 hover:border-[#8B261D]/20 shadow-none' : 'bg-zinc-900/40 border-zinc-800/50 hover:border-[var(--mist-active-accent)]/20'}`}>
            <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${theme === 'retro' ? 'text-[#8B261D]/60' : 'text-[var(--mist-active-accent)]/60'}`}>{label}</div>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full bg-transparent border-none focus:outline-none focus:ring-0 resize-none p-0 text-sm leading-relaxed ${theme === 'retro' ? 'text-black/80' : 'text-zinc-300'} placeholder-zinc-700`}
                placeholder={placeholder}
                rows={3}
            />
        </div>
    );
};

const AssetCard = ({ item, theme }: any) => (
    <div className={`group relative overflow-hidden rounded-xl border transition-all duration-500 ${theme === 'retro' ? 'bg-[#F3EFE7] border-[#3A352F]/10 hover:border-[#8B261D]/30' : 'bg-zinc-900/40 border-zinc-800 hover:border-[var(--mist-active-accent)]/30'}`}>
        <div className="aspect-video relative overflow-hidden">
            {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            ) : (
                <div className="w-full h-full bg-zinc-950 flex items-center justify-center text-zinc-800">
                    <Film size={40} />
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
        </div>
        <div className="p-4 relative">
            <div className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'}`}>{item.type || 'ASSET'}</div>
            <h4 className={`text-sm font-bold mb-1 ${theme === 'retro' ? 'text-black' : 'text-white'}`}>{item.name}</h4>
            <p className={`text-[11px] line-clamp-2 ${theme === 'retro' ? 'text-black/60' : 'text-zinc-500'}`}>{item.desc}</p>
        </div>
    </div>
);

export const CommercialView: React.FC<CommercialViewProps> = ({
    blueprint,
    language,
    onUpdateBlueprint
}) => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState<'STRATEGY' | 'SCRIPT' | 'IDENTITY'>('STRATEGY');
    const visualRef = useRef<HTMLTextAreaElement>(null);
    const copyRef = useRef<HTMLTextAreaElement>(null);

    const commercialData = blueprint.commercialData || {
        slogan: "",
        visualFlow: "",
        copywriting: "",
        strategy: {
            core_desire: "", target_audience: "", pain_point: "", product_role: "",
            endorsement: "", ritual: "", threat: "", brand_promise: ""
        },
        avScript: [],
        visualNotes: ""
    };

    const handleUpdateStrategy = (key: string, value: string) => {
        onUpdateBlueprint({
            ...blueprint,
            commercialData: {
                ...commercialData,
                strategy: {
                    ...commercialData.strategy,
                    [key]: value
                }
            }
        });
    };

    const handleUpdateSlogan = (value: string) => {
        onUpdateBlueprint({
            ...blueprint,
            commercialData: { ...commercialData, slogan: value }
        });
    };

    const handleUpdateVisualFlow = (value: string) => {
        onUpdateBlueprint({
            ...blueprint,
            commercialData: { ...commercialData, visualFlow: value }
        });
    };

    const handleUpdateCopywriting = (value: string) => {
        onUpdateBlueprint({
            ...blueprint,
            commercialData: { ...commercialData, copywriting: value }
        });
    };

    const handleUpdateNotes = (value: string) => {
        onUpdateBlueprint({
            ...blueprint,
            commercialData: { ...commercialData, visualNotes: value }
        });
    };

    const strategyFields = [
        { key: 'core_desire', label: language === 'EN' ? 'Core Desire' : '核心欲望', placeholder: '品牌唤起的深层冲动...' },
        { key: 'target_audience', label: language === 'EN' ? 'Subject / Target' : '主体 / 受众', placeholder: '谁在凝视这个产品...' },
        { key: 'pain_point', label: language === 'EN' ? 'The Void / Pain' : '匮乏 / 痛点', placeholder: '生活中缺失的环...' },
        { key: 'product_role', label: language === 'EN' ? 'Object Small a' : '小客体 / 角色', placeholder: '产品如何缝合匮乏...' },
        { key: 'endorsement', label: language === 'EN' ? 'The Big Other' : '大他者 / 背书', placeholder: '权威或社会的认可...' },
        { key: 'ritual', label: language === 'EN' ? 'Ritual / Consumption' : '仪式 / 消费', placeholder: '使用的神圣瞬间...' },
        { key: 'threat', label: language === 'EN' ? 'Castration / Threat' : '阉割 / 威胁', placeholder: '如果不拥有的后果...' },
        { key: 'brand_promise', label: language === 'EN' ? 'Promise' : '品牌承诺', placeholder: '最终达成的平衡状态...' }
    ];

    const isTemplate = !blueprint.commercialData?.slogan && !blueprint.commercialData?.visualFlow;

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Header Tabs */}
            <div className="flex items-center gap-1 mb-8 bg-zinc-900/50 p-1 rounded-xl w-fit border border-zinc-800">
                {(['STRATEGY', 'SCRIPT', 'IDENTITY'] as const).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                            activeTab === tab
                                ? (theme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-[var(--mist-active-accent)] text-black')
                                : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              {activeTab === 'STRATEGY' && (
                  <>
                      <div className="mb-12 text-center py-12 border-y border-zinc-900/50 relative overflow-hidden group">
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${theme === 'retro' ? 'from-transparent via-[#8B261D] to-transparent' : 'from-transparent via-[var(--mist-active-accent)] to-transparent'}`} />
                          <textarea
                              value={commercialData.slogan}
                              onChange={(e) => handleUpdateSlogan(e.target.value)}
                              className={`w-full text-3xl md:text-5xl font-serif leading-tight bg-transparent border-none text-center focus:outline-none focus:ring-0 resize-none p-0 ${isTemplate ? 'text-zinc-500' : (theme === 'retro' ? 'text-black' : 'text-white')}`}
                              rows={2}
                              placeholder="在此输入广告金句..."
                          />
                      </div>

                      <div>
                          <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 border-b pb-2 ${theme === 'retro' ? 'text-[#8B261D]/50 border-[#8B261D]/10' : 'text-zinc-500 border-zinc-800'}`}>Strategic Framework (The 8-Step Engine)</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                              {strategyFields.map(field => (
                                 <StrategyCard
                                     key={field.key}
                                     label={field.label}
                                     value={commercialData.strategy[field.key as keyof typeof commercialData.strategy] || ""}
                                     onChange={(val: string) => handleUpdateStrategy(field.key, val)}
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
                      <div className={`bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl transition-colors group ${theme === 'retro' ? 'hover:border-[#8B261D]/30' : 'hover:border-[var(--mist-active-accent)]/30'}`}>
                         <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                             <h3 className={`font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'}`}>
                                 <Eye size={16} /> {language === 'EN' ? "Visual Narrative Flow" : "画面叙事流"}
                             </h3>
                             <CopyButton text={commercialData.visualFlow} />
                         </div>
                         <textarea
                             ref={visualRef}
                             value={commercialData.visualFlow}
                             onChange={(e) => handleUpdateVisualFlow(e.target.value)}
                             className={`w-full min-h-[300px] bg-transparent text-lg font-light leading-loose border-none focus:outline-none resize-none p-0 placeholder-zinc-600 overflow-hidden ${theme === 'retro' ? 'text-black/80' : 'text-zinc-200'}`}
                             placeholder={language === 'EN' ? "Describe the visual journey of the commercial..." : "在此描述广告的整体视觉流程、画面张力、转场逻辑与视觉奇观..."}
                         />
                      </div>

                      {/* Copywriting Section */}
                      <div className={`bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl transition-colors group ${theme === 'retro' ? 'hover:border-[#8B261D]/30' : 'hover:border-[var(--mist-active-accent)]/30'}`}>
                         <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                             <h3 className={`font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'}`}>
                                 <Mic size={16} /> {language === 'EN' ? "Ad Copy & Voiceover" : "核心文案 & 旁白"}
                             </h3>
                             <CopyButton text={commercialData.copywriting} />
                         </div>
                         <textarea
                             ref={copyRef}
                             value={commercialData.copywriting}
                             onChange={(e) => handleUpdateCopywriting(e.target.value)}
                             className={`w-full min-h-[200px] bg-transparent text-xl font-serif leading-relaxed border-none focus:outline-none resize-none p-0 placeholder-zinc-600 overflow-hidden text-center ${theme === 'retro' ? 'text-black' : 'text-white'}`}
                             placeholder={language === 'EN' ? "Enter the script, slogans, and voiceover text here..." : "在此输入广告旁白、金句文案与屏幕文字..."}
                         />
                      </div>
                  </div>
              )}

              {activeTab === 'IDENTITY' && (
                  <div className="space-y-12 pb-20">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl">
                               <h4 className={`font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'}`}>
                                   <FileText size={14} /> Director's Note
                               </h4>
                               <textarea
                                   value={commercialData.visualNotes}
                                   onChange={(e) => handleUpdateNotes(e.target.value)}
                                   className={`w-full h-40 bg-transparent text-sm leading-loose border-none focus:outline-none resize-none p-0 custom-scrollbar placeholder-zinc-600 ${theme === 'retro' ? 'text-black/70' : 'text-zinc-300'}`}
                                   placeholder="在此输入关于执导风格、镜头语言和执行细节的特殊要求..."
                               />
                           </div>
                           <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl">
                               <h4 className={`font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'}`}>
                                   <Palette size={14} /> Color & Tone
                               </h4>
                               <p className={`text-sm leading-loose mb-6 ${theme === 'retro' ? 'text-black/60' : 'text-zinc-300'}`}>{blueprint.context.tone || "点击“影调”模块定义视觉风格。"}</p>
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
                                <h4 className={`font-bold text-xs uppercase tracking-widest ${theme === 'retro' ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'}`}>Key Visual / Moodboard</h4>
                           </div>
                           <div className="p-6">
                                <AssetCard
                                     item={{
                                         id: "moodboard",
                                         name: language === 'EN' ? "Key Visual" : "核心视觉",
                                         desc: blueprint.context.moodboard.prompt || "暂无美学描述",
                                         image: blueprint.context.moodboard.selectedImageId || (blueprint.context.moodboard.images.length > 0 ? blueprint.context.moodboard.images[0].url : null),
                                         type: "CORE_VISUAL"
                                     }}
                                     theme={theme}
                                />
                           </div>
                       </div>
                  </div>
              )}
            </div>
        </div>
    );
};
