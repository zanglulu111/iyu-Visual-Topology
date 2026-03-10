
import React, { useState } from 'react';
import { X, Aperture, BookOpen, Zap, Info, Shield, Layers, HelpCircle, History, Settings, Languages, User as UserIcon } from 'lucide-react';
import { BlueprintLanguage, User } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { BorromeanRings } from './BorromeanRings';

interface LacanTopologyViewProps {
    lang?: BlueprintLanguage;
    onClose?: () => void;
    openManual?: () => void;
    openHistory?: () => void;
    openSettings?: () => void;
    openProfile?: () => void;
    currentUser?: User;
}

const RSI_DESCRIPTIONS: Record<string, {
    CN: { title: string; subtitle: string; desc: string; connection: string; implementation: string; keywords: string[] },
    EN: { title: string; subtitle: string; desc: string; connection: string; implementation: string; keywords: string[] }
}> = {
    'REAL': {
        CN: {
            title: '实在界 (Le Réel)',
            subtitle: '不可言说之核心 // THE UNSPEAKABLE CORE',
            desc: '实在界是语言和象征界之外的剩余，是无法被符号化的“物”（Das Ding）。它不是现实，而是现实中那种由于无法被命名而显得恐怖或创伤的部分。',
            connection: '在【爱欲迷宫】中，实在界对应着迷宫最深处的“空洞”。当玩家跨越了所有逻辑能指，面对那种无法被解释的原始冲动时，便触碰到了实在。',
            implementation: '在引擎中，实在界体现为底层的随机性噪声与不可预测的涌现行为。它是系统运行中产生但又无法被逻辑闭环消化的“余数”。',
            keywords: ['原初物', '创伤', '剩余', '不可能之物']
        },
        EN: {
            title: 'The Real (Le Réel)',
            subtitle: 'THE UNSPEAKABLE CORE',
            desc: 'The Real is the remainder outside of language and the Symbolic order, the unsymbolizable "Thing" (Das Ding). It is not reality, but the part of reality that appears traumatic because it cannot be named.',
            connection: 'In the [Erotic Maze], the Real corresponds to the "Void" at the center. When players move past all signifiers and face inexplainable primitive drives, they touch the Real.',
            implementation: 'Technically, it manifests as underlying stochastic noise and unpredictable emergent behaviors. It is the "remainder" generated during system runtime that escapes logical closure.',
            keywords: ['Das Ding', 'Trauma', 'Remainder', 'The Impossible']
        }
    },
    'SYMBOLIC': {
        CN: {
            title: '象征界 (Le Symbolique)',
            subtitle: '法则与秩序 // THE LAW & ORDER',
            desc: '象征界是语言、法律和社会契约的总和。它是能指的宝库，所有意义都在这个结构中通过差异产生。它是由大他者统治的领域。',
            connection: '【爱欲迷宫】的路径节点及其逻辑分支构成了象征界。它是迷宫的可视化逻辑，定义了主体在欲望网格中移动的“语法”。',
            implementation: '引擎的【叙事图式】（Graph Schema）与逻辑门控是象征界的直接体现。它通过元数据与能指链条（Signifier Chains）定义情节的转场与选择。',
            keywords: ['能指', '大他者', '法律', '语法结构']
        },
        EN: {
            title: 'The Symbolic (Le Symbolique)',
            subtitle: 'THE LAW & ORDER',
            desc: 'The Symbolic is the sum of language, law, and social contracts. It is the treasury of signifiers where all meaning is produced through difference. It is the realm ruled by the Big Other.',
            connection: 'The [Erotic Maze]\'s path nodes and logical branches form the Symbolic. It is the visual logic of the maze, defining the "grammar" for the subject\'s movement in the grid of desire.',
            implementation: 'The engine\'s [Graph Schema] and logic gates are the direct manifestation. It defines scene transitions and choices through metadata and signifier chains.',
            keywords: ['Signifier', 'Big Other', 'The Law', 'Grammar']
        }
    },
    'IMAGINARY': {
        CN: {
            title: '想象界 (L\'Imaginaire)',
            subtitle: '镜像的诱惑 // THE LURE OF IMAGE',
            desc: '想象界是主体通过镜像认同形成的二元关系领域。它是视觉完整性的幻象，充满了诱惑、攻击性、异化和对他者的投射。',
            connection: '迷宫的视觉表现、UI反馈以及玩家对角色身份的自我代入属于想象界。它是迷宫的“皮肤”，掩盖了底层的冰冷逻辑。',
            implementation: '在引擎中，这体现为【视觉看板】（Visual Bible）与渲染层。它通过高度美学的界面营造沉浸感，使玩家沉溺于“自我”存在的错觉中。',
            keywords: ['自我', '镜像阶段', '认同', '视觉幻象']
        },
        EN: {
            title: 'The Imaginary (L\'Imaginaire)',
            subtitle: 'THE LURE OF IMAGE',
            desc: 'The Imaginary is the realm of dual relations formed through mirror identification. it is the fantasy of visual wholeness, filled with lures, aggression, and projection.',
            connection: 'The visual representation of the maze, UI feedback, and player identity belong to the Imaginary. It is the "skin" of the maze, masking the cold underlying logic.',
            implementation: 'In the engine, this manifests as the [Visual Bible] and the rendering layer. It creates immersion through high-aesthetic interfaces, luring players into the illusion of "Ego".',
            keywords: ['Ego', 'Mirror Stage', 'Identification', 'Visual Fantasy']
        }
    },
    'SINTHOME': {
        CN: {
            title: '圣状 (Le Sinthome)',
            subtitle: '不解之解 // THE FINAL SUTURE',
            desc: '圣状是维持R-S-I三界不解解开的第四道环。它是使主体不至于陷入精神分裂崩溃的那个独特的支撑点或创造性缝合。',
            connection: '【爱欲迷宫】的“零点协议”本身就是圣状。它是整场体验的终极逻辑，将碎片化的欲望体验缝合为一个具备审美完整性的剧作闭环。',
            implementation: '这是引擎的核心持久层（Persistence Layer）。它通过全局状态机确保在象征界断裂或实在界爆发时，系统的运行逻辑能够维持稳态。',
            keywords: ['缝合', '乔伊斯', '固定点', '系统稳态']
        },
        EN: {
            title: 'The Sinthome',
            subtitle: 'THE FINAL SUTURE',
            desc: 'The Sinthome is the fourth ring that prevents R-S-I from unraveling. It is the unique support point or creative suture that keeps the subject from psychotic collapse.',
            connection: 'The [Zero Protocol] itself is the Sinthome within the [Erotic Maze]. It is the ultimate logic of the experience, suturing fragmented desires into an aesthetic closure.',
            implementation: 'This is the engine\'s Core Persistence Layer. It ensures system stability via global state machines even when symbolic chains break or the Real erupts.',
            keywords: ['Suture', 'James Joyce', 'Fix point', 'Stability']
        }
    }
};

export const LacanTopologyView: React.FC<LacanTopologyViewProps> = ({ 
    lang: initialLang = 'CN', 
    onClose,
    openManual,
    openHistory,
    openSettings,
    openProfile,
    currentUser
}) => {
    const { theme } = useTheme();
    const isRetro = theme === 'retro';
    const [currentLang, setCurrentLang] = useState<BlueprintLanguage>(initialLang);
    const [selectedKey, setSelectedKey] = useState<string>('REAL');
    const [hoveredKey, setHoveredKey] = useState<string | null>(null);

    const toggleLang = () => setCurrentLang(prev => prev === 'CN' ? 'EN' : 'CN');

    const activeKey = hoveredKey || selectedKey;
    const activeData = RSI_DESCRIPTIONS[activeKey];

    return (
        <div className={`flex flex-col h-full w-full bg-[var(--bg-main)] text-[var(--accent-color)] font-sans overflow-hidden animate-in fade-in duration-700 transition-colors duration-500`}>
            {isRetro && <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply z-0" style={{ backgroundImage: 'var(--pattern-aged)' }}></div>}
            
            {/* NEW TOP BAR: Mist School Standard */}
            <header className="h-14 bg-[var(--bg-header)] backdrop-blur-md border-b border-[var(--border-main)] flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-colors duration-500">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-bold uppercase tracking-widest text-zinc-300 group hover:text-gold-primary transition-all duration-100"
                    >
                        <Aperture size={12} className="group-hover:text-gold-primary transition-all" />
                        <span>{currentLang === 'CN' ? '返回全局' : 'GLOBAL'}</span>
                    </button>
                    <div className="h-6 w-px bg-white/10"></div>
                    <span className="text-gold-primary font-serif font-bold text-xs uppercase tracking-widest">
                        {currentLang === 'CN' ? '三界拓扑' : 'RSI TOPOLOGY'}
                    </span>
                </div>

                {/* CENTERED: MIST SCHOOL */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                     <span className={`${isRetro ? 'text-[var(--text-main)]' : 'text-white'} font-serif font-bold text-sm tracking-[0.5em] uppercase pointer-events-none transition-colors`}>
                         {currentLang === 'CN' ? '迷雾学派' : 'MIST SCHOOL'}
                     </span>
                </div>

                <div className="flex items-center gap-4">
                    {[
                        { icon: History, label: currentLang === 'CN' ? '欲望档案' : 'ARCHIVE', onClick: openHistory },
                        { icon: Settings, label: currentLang === 'CN' ? '系统配置' : 'SYSTEM CONFIG', onClick: openSettings }
                    ].map((item, idx) => (
                        <button
                            key={idx}
                            onClick={item.onClick}
                            className="flex items-center gap-2 transition-all duration-100 group text-zinc-400 hover:text-gold-primary"
                        >
                            <item.icon size={14} className="shrink-0 transition-all duration-100 group-hover:scale-110" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] hidden lg:block">{item.label}</span>
                        </button>
                    ))}
                    <div className="h-4 w-px bg-white/10"></div>
                    <button 
                        onClick={toggleLang}
                        className="flex items-center justify-center w-7 h-7 rounded border border-zinc-800 hover:border-zinc-500 bg-zinc-900/50 text-[10px] font-bold text-zinc-400 hover:text-white transition-all duration-100"
                        title="Toggle Language"
                    >
                        {currentLang === 'CN' ? '中' : 'EN'}
                    </button>
                    <div className="h-4 w-px bg-white/10"></div>
                    <button 
                        onClick={openProfile}
                        className="flex items-center gap-2 group transition-all duration-100 hover:scale-105"
                    >
                        {currentUser && currentUser.id !== 'guest_user' ? (
                            <div className={`w-5 h-5 rounded-full ${!currentUser.avatarUrl && (currentUser.avatarColor || 'bg-gold-primary')} border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden shadow-lg`}>
                                {currentUser.avatarUrl ? <img src={currentUser.avatarUrl} alt="avatar" className="w-full h-full object-cover" /> : currentUser.username.substring(0, 1).toUpperCase()}
                            </div>
                        ) : (
                            <div className="w-5 h-5 rounded-full border border-gold-primary/30 flex items-center justify-center bg-gold-primary/10 text-gold-primary group-hover:bg-gold-primary group-hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                <UserIcon size={12} />
                            </div>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                            {currentUser && currentUser.id !== 'guest_user' ? currentUser.username : (currentLang === 'CN' ? '研究员' : 'GUEST')}
                        </span>
                    </button>
                </div>
            </header>

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                
                {/* LEFT AREA: Detailed Explanation (1/3) */}
                <div className={`w-full lg:w-[35%] bg-[var(--bg-panel)] border-r border-[var(--border-main)] flex flex-col z-20 shadow-[40px_0_120px_rgba(0,0,0,0.9)] flex-shrink-0 relative overflow-hidden transition-colors duration-500`}>
                    
                    <div className="flex-1 flex flex-col p-8 lg:p-14 overflow-y-auto custom-scrollbar">
                        
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6 text-gold-primary brightness-125 text-[12px] uppercase tracking-[0.4em] font-black underline underline-offset-8 decoration-gold-primary/30">
                                 <Info size={14} />
                                 {currentLang === 'CN' ? '核心架构解析' : 'ARCHITECTURAL CORE'}
                            </div>
                                <h2 className={`text-5xl lg:text-6xl font-serif font-black ${isRetro ? 'text-[var(--text-accent)]' : 'text-white'} leading-tight mb-4 transition-colors`}>
                                    {activeData[currentLang].title}
                                </h2>
                                <p className={`text-[14px] font-black ${isRetro ? 'text-[var(--text-main)] underline decoration-[var(--text-accent)]' : 'text-white brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]'} tracking-widest uppercase transition-colors`}>
                                    {activeData[currentLang].subtitle}
                                </p>
                            <div className="h-1 w-28 bg-gold-primary mt-8 shadow-[0_0_15px_rgba(212,175,55,0.3)]"></div>
                        </div>

                        <div className="space-y-10">
                            <section>
                                <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] ${isRetro ? 'text-[var(--text-muted)]' : 'text-gold-primary/60'} mb-4 flex items-center gap-2`}>
                                    <BookOpen size={12} /> {currentLang === 'CN' ? '概念界定' : 'CONCEPT DEFINITION'}
                                </h3>
                                <p className={`text-base lg:text-lg ${isRetro ? 'text-[var(--text-main)] italic' : 'text-white'} leading-relaxed font-medium text-justify transition-colors`}>
                                    {activeData[currentLang].desc}
                                </p>
                            </section>

                            <section className="p-8 bg-white/[0.04] border border-gold-primary/20 rounded-sm shadow-inner shadow-black/40">
                                <h3 className={`text-[11px] font-black uppercase tracking-[0.3em] ${isRetro ? 'text-[var(--text-accent)]' : 'text-gold-primary brightness-125'} mb-5 flex items-center gap-2 transition-colors`}>
                                    <Layers size={12} /> {currentLang === 'CN' ? '与爱欲迷宫的关系' : 'RELATION TO EROTIC MAZE'}
                                </h3>
                                <p className={`text-base lg:text-lg ${isRetro ? 'text-[var(--text-main)]' : 'text-white'} leading-relaxed font-medium transition-colors`}>
                                    {activeData[currentLang].connection}
                                </p>
                            </section>

                            <section>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-primary/60 mb-4 flex items-center gap-2">
                                    <Shield size={12} /> {currentLang === 'CN' ? '引擎实现逻辑' : 'ENGINE IMPLEMENTATION'}
                                </h3>
                                <p className="text-sm lg:text-base text-zinc-100 leading-relaxed font-medium opacity-90">
                                    {activeData[currentLang].implementation}
                                </p>
                            </section>

                            <section>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-primary/60 mb-4">
                                    {currentLang === 'CN' ? '关键词能指' : 'KEY SIGNIFIERS'}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {activeData[currentLang].keywords.map((kw, idx) => (
                                        <span key={idx} className="px-3 py-1.5 rounded-sm border border-gold-primary/30 bg-gold-primary/10 text-[11px] font-black text-white shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                                            # {kw}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* RIGHT AREA: Visualization (2/3) */}
                <div className={`flex-1 relative flex items-center justify-center p-8 overflow-hidden bg-[var(--bg-main)] transition-colors duration-500`}>
                    
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(${isRetro ? '#8B261D' : '#D4AF37'} 1px, transparent 0)`, backgroundSize: '32px 32px' }}></div>

                    {/* The Rings - Large and centered */}
                    <div className="w-full h-full max-w-[1000px] max-h-[1000px] relative flex items-center justify-center -translate-y-12">
                        <BorromeanRings centered={true} opacity={1} />
                        
                        {/* Interactive Targets Overlay - HOVER DISABLED AS PER REQUEST */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-10 pointer-events-auto">
                            {['REAL', 'SYMBOLIC', 'IMAGINARY', 'SINTHOME'].map(key => (
                                <div 
                                    key={key}
                                    onClick={() => setSelectedKey(key)}
                                    className="cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Selection Cards at the bottom */}
                    <div className="absolute bottom-12 flex gap-4 px-8 z-40">
                        {Object.entries(RSI_DESCRIPTIONS).map(([id, data]) => (
                            <button 
                                key={id}
                                onClick={() => setSelectedKey(id)}
                                className={`w-40 p-4 border rounded-sm transition-all duration-300 text-left
                                    ${selectedKey === id 
                                        ? 'bg-gold-primary/20 border-gold-primary shadow-[0_0_30px_rgba(212,175,55,0.15)] -translate-y-2' 
                                        : 'bg-black/40 border-white/5 hover:border-white/10 opacity-60 hover:opacity-100'}
                                `}
                            >
                                <div className={`w-6 h-6 flex items-center justify-center rounded-sm font-black text-[10px] mb-2 text-black
                                    ${id === 'REAL' ? 'bg-amber-500' : 
                                      id === 'SYMBOLIC' ? 'bg-cyan-500' : 
                                      id === 'IMAGINARY' ? 'bg-rose-500' : 
                                      'bg-emerald-500'}
                                `}>
                                    {id.charAt(0)}
                                </div>
                                <h4 className={`text-xs font-bold transition-colors ${selectedKey === id ? 'text-white' : 'text-zinc-500'}`}>
                                    {data[currentLang].title.split(' ')[0]}
                                </h4>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
