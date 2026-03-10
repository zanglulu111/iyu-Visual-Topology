import React from 'react';
import { X, Scale, Wand2, RefreshCcw, Lock, Layers, Zap, Anchor, Eye, Monitor, Box, Film } from 'lucide-react';
import { WorldLawConfig, BlueprintLanguage, DriverType } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface WorldLawModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: WorldLawConfig;
  onChange: (newConfig: WorldLawConfig) => void;
  lang?: BlueprintLanguage;
  driverType?: DriverType;
}

export const WorldLawModal: React.FC<WorldLawModalProps> = ({
  isOpen,
  onClose,
  config,
  onChange,
  lang = 'CN',
  driverType = DriverType.NARRATIVE
}) => {
  const { theme: globalTheme } = useTheme();
  if (!isOpen) return null;

  const isCommercial = driverType === DriverType.COMMERCIAL;
  const isAesthetic = driverType === DriverType.AESTHETIC;
  const isExperimental = driverType === DriverType.EXPERIMENTAL;

  // 获取当前模式的主题色类名
  const getThemeColorClass = () => {
    if (isCommercial) return 'cyan-400';
    if (isAesthetic) return 'rose-400';
    if (isExperimental) return 'purple-400';
    return 'gold-primary';
  };

  const themeColor = getThemeColorClass();

  let t;
  if (isAesthetic) {
      t = {
        title: lang === 'EN' ? "WORLD LAW (AESTHETIC)" : "世界法则配置 (Aesthetic Law)",
        subtitle: lang === 'EN' ? "Define the fundamental physics and logic of the generated image." : "定义图像生成的底层物理法则与逻辑一致性。",
        physicsTitle: lang === 'EN' ? "1. PHYSICS ANCHOR" : "1. 物理锚点 (Physics)",
        physicsStrict: lang === 'EN' ? "STRICT REALISM (Photo)" : "严守现实 (Strict)",
        physicsStrictDesc: lang === 'EN' ? "Gravity applies. Materials are logical. No magic. Looks like a real photo." : "遵循物理定律。重力、材质与光影必须真实。无魔法。追求摄影写实感。",
        physicsUnbound: lang === 'EN' ? "UNBOUND FANTASY (Dream)" : "幻想开放 (Unbound)",
        physicsUnboundDesc: lang === 'EN' ? "Dream logic. Floating objects, magic, impossible geometry allowed." : "梦境逻辑。允许反重力、魔法、变形与超现实元素。打破物理限制。",
        contextTitle: lang === 'EN' ? "2. CONTEXT ANCHOR" : "2. 语境锚点 (Context)",
        contextPure: lang === 'EN' ? "PURE (Segregation)" : "类型纯化 (Pure)",
        contextPureDesc: lang === 'EN' ? "Strict consistency. If tags conflict (e.g. Ancient + Cyber), the dominant era wins. No mashups." : "强制一致性。若标签冲突（如古代+赛博），AI将强制过滤掉不和谐元素，保持单一风格的纯正。",
        contextFusion: lang === 'EN' ? "FUSION (Synthesis)" : "混搭融合 (Fusion)",
        contextFusionDesc: lang === 'EN' ? "Creative mashup. Actively blends conflicting tags to create a new hybrid aesthetic." : "拥抱冲突。AI将主动融合不相容的元素（如古代+赛博），创造出独特的混合美学。",
        confirm: lang === 'EN' ? "CONFIRM LAWS" : "确认法则",
        warning: lang === 'EN' ? "LOGIC NOTE:" : "生成逻辑提示:",
        warningText: config.physics === 'STRICT' && config.context === 'FUSION'
            ? (lang === 'EN' ? "Strict + Fusion = Analog Translation (e.g. A 'computer' in 1800s will be a steam engine)." : "【严守现实】+【混搭融合】= 模拟信号转译。例如：1800年代的'电脑'会被转译为复杂的蒸汽差分机。")
            : (lang === 'EN' ? "These settings control how the AI interprets conflicting tags." : "此设置决定AI如何处理互相冲突的提示词。")
      };
  } else if (isCommercial) {
    t = {
        title: lang === 'EN' ? "ADVERTISING LOGIC CONFIG" : "广告呈现逻辑配置",
        subtitle: lang === 'EN' ? "Define the relationship between Product, Viewer, and Reality." : "定义广告的“呈现协议”与“第四面墙”关系。",
        physicsTitle: lang === 'EN' ? "1. REALITY PROTOCOL" : "1. 现实协议 (Reality Protocol)",
        physicsStrict: lang === 'EN' ? "LITERALISM (Hard Sell)" : "功能直呈 (Literalism)",
        physicsStrictDesc: lang === 'EN' ? "What you see is what it is. Focus on mechanics, ingredients, and physical proof. No metaphors." : "所见即所得。拒绝隐喻，聚焦于物理机制、成分演示与硬核实证。硬广逻辑。",
        physicsUnbound: lang === 'EN' ? "METAPHOR (Soft Sell)" : "感官隐喻 (Metaphor)",
        physicsUnboundDesc: lang === 'EN' ? "Dream logic. The product defies physics to represent a feeling (e.g. flying, melting)." : "所见即所感。允许夸张、变形与超现实。产品不仅是物品，更是魔法。软广逻辑。",
        contextTitle: lang === 'EN' ? "2. THE FOURTH WALL" : "2. 第四面墙 (The Fourth Wall)",
        contextPure: lang === 'EN' ? "IMMERSION (Diegetic)" : "沉浸幻觉 (Immersion)",
        contextPureDesc: lang === 'EN' ? "Cinematic storytelling. Characters don't know they are in an ad. The camera is invisible." : "电影感。构建封闭的完美世界，角色不知道自己在拍广告。观众是窥视者。",
        contextFusion: lang === 'EN' ? "META-AWARE (Non-Diegetic)" : "元叙事 (Meta-Aware)",
        contextFusionDesc: lang === 'EN' ? "Breaking the 4th wall. Acknowledging the camera, talking to audience, self-referential humor." : "打破第四面墙。承认这是广告，直接对话观众，使用跳戏、自嘲或后台视角。",
        confirm: lang === 'EN' ? "APPLY LOGIC" : "确认逻辑",
        warning: lang === 'EN' ? "CREATIVE NOTE:" : "导演备注:",
        warningText: config.physics === 'STRICT' 
            ? (lang === 'EN' ? "Literalism works best for Tech/Pharma." : "【功能直呈】最适合：硬科技、医药、测评类。")
            : (lang === 'EN' ? "Metaphor works best for Luxury/Perfume." : "【感官隐喻】最适合：香水、奢侈品、酒类。")
      };
  } else {
    t = {
        title: lang === 'EN' ? "WORLD LAW CONFIGURATION" : "世界法则配置 (World Law)",
        subtitle: lang === 'EN' ? "Define the topology of reality for this narrative." : "定义叙事场域的底层物理与文化拓扑。",
        physicsTitle: lang === 'EN' ? "1. PHYSICS ANCHOR" : "1. 物理锚点 (Physics)",
        physicsStrict: lang === 'EN' ? "STRICT REALISM" : "严守现实 (Strict)",
        physicsStrictDesc: lang === 'EN' ? "Laws of physics apply. No magic. Tech limited to Era." : "严格遵循物理法则与时代科技。无魔法，无超时代科技。",
        physicsUnbound: lang === 'EN' ? "UNBOUND FANTASY" : "幻想开放 (Unbound)",
        physicsUnboundDesc: lang === 'EN' ? "Magic, supernatural, and super-science allowed." : "允许魔法、超自然现象或超越时代的黑科技。",
        contextTitle: lang === 'EN' ? "2. CONTEXT ANCHOR" : "2. 语境锚点 (Context)",
        contextPure: lang === 'EN' ? "GENRE PURITY" : "类型纯化 (Pure)",
        contextPureDesc: lang === 'EN' ? "Strict adherence to genre tropes. No mixing." : "强制清洗异质元素。武侠就是纯武侠，无外来干扰。",
        contextFusion: lang === 'EN' ? "GENRE FUSION" : "混搭融合 (Fusion)",
        contextFusionDesc: lang === 'EN' ? "Creative mixing of genres (e.g. Wuxia + Cyberpunk)." : "允许跨类型元素碰撞。如：赛博朋克+古代背景。",
        confirm: lang === 'EN' ? "CONFIRM LAWS" : "确认法则",
        warning: lang === 'EN' ? "CONFLICT DETECTED:" : "冲突预警:",
        warningText: lang === 'EN' ? "Strict Physics + Fusion Genre (e.g. Ancient Cyberpunk) will result in 'Analog Translation' (e.g. Clockwork Tech)." : "【严守现实】+【混搭融合】(如古代赛博) 将触发「模拟信号转译」：高科技将被转译为该时代的机关术或社会结构。"
      };
  }

  // 计算左侧选项（STRICT/PURE）选中时的样式
  const leftActiveClasses = globalTheme === 'retro' 
    ? 'border-[#8B261D] bg-white ring-1 ring-[#8B261D]/50'
    : 'border-zinc-500 bg-zinc-800/50 ring-1 ring-zinc-500/50';
  const leftActiveText = globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white';
  
  // 计算右侧选项（UNBOUND/FUSION）选中时的样式，使用动态主题色
  const rightActiveClasses = globalTheme === 'retro'
    ? 'border-[#8B261D] bg-white ring-1 ring-[#8B261D]/50'
    : `border-${themeColor} bg-${themeColor.split('-')[0]}-900/20 ring-1 ring-${themeColor}/50`;
  const rightActiveText = globalTheme === 'retro' ? 'text-[#8B261D]' : `text-${themeColor}`;

  const inactiveClasses = globalTheme === 'retro'
    ? 'bg-transparent border-[#8B261D]/10 hover:border-[#8B261D]/30'
    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700';

  const IconPhysics1 = isCommercial ? Box : Scale;
  const IconContext1 = isCommercial ? Film : Layers;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300 p-4">
      <div className={`w-full max-w-2xl ${globalTheme === 'retro' ? 'bg-[var(--bg-header)] border-[#8B261D]' : 'bg-[#0a0a0a] border-zinc-800'} border rounded-xl shadow-2xl overflow-hidden relative flex flex-col`}>
        
        {/* Header */}
        <div className={`p-6 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/20 bg-[var(--bg-header)]' : 'border-zinc-800 bg-zinc-900/50'} flex justify-between items-start`}>
          <div>
            <div className={`flex items-center gap-2 ${globalTheme === 'retro' ? 'text-[#8B261D]' : `text-${themeColor}`} mb-1`}>
               <Anchor size={16} />
               <span className="text-xs font-bold uppercase tracking-[0.2em]">{t.title}</span>
            </div>
            <p className={`text-sm ${globalTheme === 'retro' ? 'text-zinc-600' : 'text-zinc-500'}`}>{t.subtitle}</p>
          </div>
          <button onClick={onClose} className={`p-2 ${globalTheme === 'retro' ? 'hover:bg-[#8B261D]/10 text-zinc-600' : 'hover:bg-white/10 text-zinc-500'} rounded-full hover:text-[#8B261D] transition-colors`}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8 flex-1 overflow-y-auto">
            
            {/* 1. Dimension 1 (Physics / Reality Protocol) */}
            <div className="space-y-4">
                <h3 className={`text-sm font-bold ${globalTheme === 'retro' ? 'text-black' : 'text-white'} uppercase tracking-wider flex items-center gap-2`}>
                    <IconPhysics1 size={16} className={globalTheme === 'retro' ? 'text-[#8B261D]' : `text-${themeColor}`}/> {t.physicsTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 左侧：严守现实 */}
                    <button 
                        onClick={() => onChange({ ...config, physics: 'STRICT' })}
                        className={`p-4 rounded-xl border text-left transition-all ${
                            config.physics === 'STRICT' ? leftActiveClasses : inactiveClasses
                        }`}
                    >
                        <div className={`font-bold mb-1 ${config.physics === 'STRICT' ? leftActiveText : 'text-zinc-400'}`}>{t.physicsStrict}</div>
                        <div className="text-xs text-zinc-500 leading-relaxed">{t.physicsStrictDesc}</div>
                    </button>

                    {/* 右侧：幻想开放 */}
                    <button 
                        onClick={() => onChange({ ...config, physics: 'UNBOUND' })}
                        className={`p-4 rounded-xl border text-left transition-all ${
                            config.physics === 'UNBOUND' ? rightActiveClasses : inactiveClasses
                        }`}
                    >
                        <div className={`font-bold mb-1 ${config.physics === 'UNBOUND' ? rightActiveText : 'text-zinc-400'}`}>{t.physicsUnbound}</div>
                        <div className="text-xs text-zinc-500 leading-relaxed">{t.physicsUnboundDesc}</div>
                    </button>
                </div>
            </div>

            {/* 2. Dimension 2 (Context / Fourth Wall) */}
            <div className="space-y-4">
                <h3 className={`text-sm font-bold ${globalTheme === 'retro' ? 'text-black' : 'text-white'} uppercase tracking-wider flex items-center gap-2`}>
                    <IconContext1 size={16} className={globalTheme === 'retro' ? 'text-[#8B261D]' : `text-${themeColor}`}/> {t.contextTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 左侧：类型纯化 */}
                    <button 
                        onClick={() => onChange({ ...config, context: 'PURE' })}
                        className={`p-4 rounded-xl border text-left transition-all ${
                            config.context === 'PURE' ? leftActiveClasses : inactiveClasses
                        }`}
                    >
                        <div className={`font-bold mb-1 ${config.context === 'PURE' ? leftActiveText : 'text-zinc-400'}`}>{t.contextPure}</div>
                        <div className="text-xs text-zinc-500 leading-relaxed">{t.contextPureDesc}</div>
                    </button>

                    {/* 右侧：混搭融合 */}
                    <button 
                        onClick={() => onChange({ ...config, context: 'FUSION' })}
                        className={`p-4 rounded-xl border text-left transition-all ${
                            config.context === 'FUSION' ? rightActiveClasses : inactiveClasses
                        }`}
                    >
                        <div className={`font-bold mb-1 ${config.context === 'FUSION' ? rightActiveText : 'text-zinc-400'}`}>{t.contextFusion}</div>
                        <div className="text-xs text-zinc-500 leading-relaxed">{t.contextFusionDesc}</div>
                    </button>
                </div>
            </div>

            {/* Contextual Note / Warning */}
            <div className={`p-4 border rounded-lg flex gap-3 items-start animate-in fade-in slide-in-from-bottom-2 ${
              globalTheme === 'retro' ? 'bg-[#F4EFE0] border-[#8B261D]/20' :
              (isCommercial ? 'bg-cyan-900/10 border-cyan-500/30' : 
              (isAesthetic ? 'bg-rose-900/10 border-rose-500/30' : 
              (isExperimental ? 'bg-purple-900/10 border-purple-500/30' : 'bg-amber-900/10 border-amber-500/30')))
            }`}>
                <Zap size={18} className={globalTheme === 'retro' ? 'text-[#8B261D]' : `text-${themeColor} shrink-0 mt-0.5`} />
                <div>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${globalTheme === 'retro' ? 'text-[#8B261D]' : `text-${themeColor}`}`}>{t.warning}</div>
                    <div className={`text-xs ${globalTheme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'} leading-relaxed`}>{t.warningText}</div>
                </div>
            </div>

        </div>

        {/* Footer */}
        <div className={`p-6 border-t ${globalTheme === 'retro' ? 'border-[#8B261D]/20 bg-[#F9F7F1]' : 'border-zinc-800 bg-zinc-900/50'} flex justify-end`}>
            <button 
                onClick={onClose}
                className={`px-8 py-3 ${globalTheme === 'retro' ? 'bg-[#8B261D] text-white hover:bg-[#6D1E16]' : 'bg-white hover:bg-zinc-200 text-black'} font-bold uppercase tracking-widest rounded transition-colors text-xs shadow-sm`}
            >
                {t.confirm}
            </button>
        </div>

      </div>
    </div>
  );
};
