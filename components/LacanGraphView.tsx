
import React, { useState } from 'react';
import { X, Aperture, BookOpen, Layers, List, Compass, ChevronRight, HelpCircle, History, Settings, Languages, User as UserIcon } from 'lucide-react';
import { BlueprintLanguage, User } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface LacanGraphViewProps {
    lang?: BlueprintLanguage;
    onClose?: () => void;
    openManual?: () => void;
    openHistory?: () => void;
    openSettings?: () => void;
    openProfile?: () => void;
    currentUser?: User;
}

// Data structure supporting dual language
const DESCRIPTIONS: Record<string, { 
    CN: { title: string; subtitle: string; desc: string; formula: string; connections: string[] },
    EN: { title: string; subtitle: string; desc: string; formula: string; connections: string[] }
}> = {
    'S(A)': {
        CN: {
            title: 'S(Ⱥ) : 大他者的匮乏能指',
            subtitle: 'Signifier of the Lack in the Other',
            desc: '这是拉康图式中最核心的启示：大他者本身也是不完整的。在象征界的宝库中，缺少一个能回答主体“我是谁”或“他者要我做什么”的最终能指。这种匮乏是欲望的起源，也是主体得以在法律之外寻找存在空间的缝隙。',
            formula: 'S(\u023A)',
            connections: ['$', 'A', 'd']
        },
        EN: {
            title: 'S(Ⱥ) : Signifier of the Lack in the Other',
            subtitle: 'S(Barred A)',
            desc: 'This is the core revelation of Lacan’s schema: the Other is also incomplete. In the treasury of the symbolic, there is a missing signifier that could provide a final answer to the Subject’s "Who am I?" or "What does the Other want from me?". This lack is the origin of Desire.',
            formula: 'S(\u023A)',
            connections: ['$', 'A', 'd']
        }
    },
    '($♢d)': {
        CN: {
            title: '($ ♢ d) : 驱力',
            subtitle: 'The Drive / Pulsion',
            desc: '主体($)与要求(Demand)的永恒循环。驱力不同于欲望，它不追求目标，而是在环绕目标的重复运动中获得一种“快感” (Jouissance)。它是力比多的自动机，在能指链条的缝隙中回响。',
            formula: '($ ♢ d)',
            connections: ['$', 's(A)', 'S(A)']
        },
        EN: {
            title: '($ ♢ d) : The Drive',
            subtitle: 'Pulsion',
            desc: 'The eternal cycle between the Subject ($) and Demand (D). Unlike Desire, Drive does not seek an object to satisfy its lack; instead, it finds satisfaction (Jouissance) in the repetitive movement around the object. It is the libido automaton echoing in the gaps of the signifier chain.',
            formula: '($ ♢ d)',
            connections: ['$', 's(A)', 'S(A)']
        }
    },
    's(A)': {
        CN: {
            title: 's(A) : 大他者的所指',
            subtitle: 'Signified of the Other',
            desc: '当能指链条扣回时意义产生。这是主体对他者之言说的第一次整合，表现为症状、幻觉或认同。它解答了“他者在说什么”的表面语义，但留下了更深层的、无法言说的余数。',
            formula: 's(A)',
            connections: ['m', 'A', '($♢d)']
        },
        EN: {
            title: 's(A) : Signified of the Other',
            subtitle: 'Signification',
            desc: 'Meaning is produced when the signifier chain loops back through the "buttoning point" (point de capiton). This is the Subject’s first integration of the Other’s speech, manifesting as symptoms or identifications. It answers what the Other says on the surface but leaves an unsaid remainder.',
            formula: 's(A)',
            connections: ['m', 'A', '($♢d)']
        }
    },
    'A': {
        CN: {
            title: 'A : 大他者',
            subtitle: 'The Other',
            desc: '语言的宝库，象征界的总和。它是主体不得不通过其言说的中介，是法律、传统、文化以及“异质性”的象征。然而，大他者本身也是被划杠的 (Ⱥ)，存在着内在的局限与缺失。',
            formula: 'A',
            connections: ['s(A)', 'i(a)', 'I(A)']
        },
        EN: {
            title: 'A : The Other (Grand Autre)',
            subtitle: 'The Symbolic Order',
            desc: 'The treasury of language, the sum total of the Symbolic. It is the necessary mediator through which the Subject must speak; it represents law, culture, and radical alterity. The Subject positions itself through the dialectic with the Other.',
            formula: 'A',
            connections: ['s(A)', 'i(a)', 'I(A)']
        }
    },
    'm': {
        CN: {
            title: 'm : 自我',
            subtitle: 'The Ego (Moi)',
            desc: '想象界的虚假认同中心。它是主体通过镜像映射形成的统一体幻象。自我是防御性的，它试图掩盖主体分裂的真相 ($)，通过与他人影像的认同来维持一个稳固假象。',
            formula: 'm',
            connections: ['$', 'i(a)', 's(A)']
        },
        EN: {
            title: 'm : The Ego (Moi)',
            subtitle: 'Imaginary Identity',
            desc: 'The false center of identification in the Imaginary. The Ego is the illusion of a unified self formed through the mirror plane. It is defensive, attempting to mask the truth of the divided Subject ($) through identification with the image of others.',
            formula: 'm',
            connections: ['$', 'i(a)', 's(A)']
        }
    },
    'i(a)': {
        CN: {
            title: 'i(a) : 理想影像',
            subtitle: 'Ideal Image',
            desc: '小他者的影像，镜像阶段产生的异化坐标。它是自我认同的模板，也是攻击性与自恋的起源。主体看他者，其实是在看自己被异化了的理想化版本。',
            formula: 'i(a)',
            connections: ['m', 'A', 'I(A)']
        },
        EN: {
            title: 'i(a) : Ideal Image',
            subtitle: 'Specular Image',
            desc: 'The image of the little other (objet a), the alienated coordinate produced during the mirror stage. It is the template for ego identification and the origin of narcissism and aggression. Looking at the other, the subject is looking at an idealized, alienated version of itself.',
            formula: 'i(a)',
            connections: ['m', 'A', 'I(A)']
        }
    },
    '($♢a)': {
        CN: {
            title: '($ ♢ a) : 幻想',
            subtitle: 'Fantasy',
            desc: '幻想是主体用来应对大他者柜乏的“屏障”。通过将对象 (a) 放置在幻想逻辑中，主体为自己的欲望提供了一个坐标系。幻想不是为了实现，而是为了维持欲望的张力。',
            formula: '($ ♢ a)',
            connections: ['$', 'd', 's(A)']
        },
        EN: {
            title: '($ ♢ a) : Fantasy (Fantasme)',
            subtitle: 'The Screen of Desire',
            desc: 'Fantasy is the "screen" the Subject uses to cope with the lack in the Other. By positioning the object (a) within a fantasy logic, the subject provides a coordinate system for its desire. Fantasy is not meant to be realized, but to sustain the tension of desire.',
            formula: '($ ♢ a)',
            connections: ['$', 'd', 's(A)']
        }
    },
    'd': {
        CN: {
            title: 'd : 欲望',
            subtitle: 'Desire (Désir)',
            desc: '欲望诞生于要求与需要的裂缝中。它是“对他者欲望的欲望”，即主体试图通过揣测大他者的意图 (Che vuoi?) 来确认自己的价值。欲望永远在滑动，永不满足。',
            formula: 'd',
            connections: ['($♢a)', 'S(A)', '($♢d)']
        },
        EN: {
            title: 'd : Desire (Désir)',
            subtitle: "The Other's Desire",
            desc: 'Desire is born in the gap between Demand and Need. It is the "desire of the Other’s desire," where the Subject seeks to confirm its own value by guessing the Other’s intent (Che vuoi?). Desire is constantly sliding and never satisfied.',
            formula: 'd',
            connections: ['($♢a)', 'S(A)', '($♢d)']
        }
    },
    '$': {
        CN: {
            title: '$ : 分裂的主体',
            subtitle: 'The Barred Subject',
            desc: '被语言划杠的主体。进入象征界意味着必须服从语言的阉割，从而导致主体的分裂：一个是言说的主体，一个是被言说的主体。这种分裂揭示了主体本质上的空无。',
            formula: '$',
            connections: ['m', '($♢a)', 'I(A)']
        },
        EN: {
            title: '$ : The Barred Subject',
            subtitle: 'Suject Barré',
            desc: 'The Subject is barred by language. Entering the Symbolic means submitting to language’s castration, leading to a division: the subject who speaks and the subject who is spoken. This split reveals the Subject’s essential void and alienation.',
            formula: '$',
            connections: ['m', '($♢a)', 'I(A)']
        }
    },
    'I(A)': {
        CN: {
            title: 'I(A) : 理想自我',
            subtitle: 'Ego Ideal',
            desc: '从大他者的视角来审视主体的坐标。它不同于理想影像i(a)，它是象征性的、法律性的点。主体通过认同这个视角，试图在大他者的博弈中占据一个被许可的位置。',
            formula: 'I(A)',
            connections: ['$', 'A', 'i(a)']
        },
        EN: {
            title: 'I(A) : Ego Ideal (Idéal du Moi)',
            subtitle: 'Symbolic Coordinate',
            desc: 'The coordinate for inspecting the Subject from the perspective of the Other. Unlike the specular image i(a), this is a symbolic, legal point. By identifying with this gaze, the subject attempts to occupy a licensed position in the Other’s game.',
            formula: 'I(A)',
            connections: ['$', 'A', 'i(a)']
        }
    },
    'Signifiant': {
        CN: {
            title: '能指',
            subtitle: 'Signifiant / Signifier',
            desc: '语言结构中的物质形式，它是构成象征界的最小单元。拉康认为，“能指是为另一个能指代表主体的那个东西”。能指之间互为参照，构成了一个永无止境的意义网。',
            formula: 'S1 \u2192 S2',
            connections: ['s(A)', 'A', 'S(A)']
        },
        EN: {
            title: 'Signifier',
            subtitle: 'Significance / Signifier',
            desc: 'The material form in language structure, the smallest unit of the Symbolic. Lacan stated: "A signifier represents the subject for another signifier." They refer to each other in an endless network of meaning.',
            formula: 'S1 \u2192 S2',
            connections: ['s(A)', 'A', 'S(A)']
        }
    },
    'Voix': {
        CN: {
            title: '声音',
            subtitle: 'The Voice',
            desc: '作为对象存在的“声音”，是不可能被归纳为语言的部分。它是在话语中回响的原始碎片，连接着享乐与驱动力。',
            formula: 'Voix',
            connections: ['$', 'A', 'Jouissance']
        },
        EN: {
            title: 'The Voice (Voix)',
            subtitle: 'Object a as Voice',
            desc: 'The voice as an object that cannot be reduced to speech. It is the primordial fragment echoing in discourse, connecting Jouissance and Drive.',
            formula: 'Voix',
            connections: ['$', 'A', 'Jouissance']
        }
    },
    'Jouissance': {
        CN: {
            title: '享乐',
            subtitle: 'Jouissance',
            desc: '超越快感原则的剩余。它是一种痛苦的快乐，是主体由于服从了大他者的命令（享乐吧！）而承受的负担。它在能指链条的缝隙中渗透。',
            formula: 'Jo',
            connections: ['$', 'S(A)', 'Voix']
        },
        EN: {
            title: 'Jouissance',
            subtitle: 'Excess of Happiness',
            desc: 'The remainder that exceeds the pleasure principle. It is a painful pleasure, a burden the subject bears for obeying the Other\'s command (Enjoy!). It leaks through the gaps in the signifier chain.',
            formula: 'Jo',
            connections: ['$', 'S(A)', 'Voix']
        }
    },
    'Castration': {
        CN: {
            title: '阉割',
            subtitle: 'Castration',
            desc: '符号界的终极切中。它是主体进入语言结构所必须付出的代价，即丧失了那种想象中的完整性，从而转化为被划杠的主体 ($)。',
            formula: 'Cs',
            connections: ['$', 'A', 'S(A)']
        },
        EN: {
            title: 'Castration',
            subtitle: 'Symbolic Cut',
            desc: 'The ultimate cut of the symbolic. The price the subject must pay to enter language structure: the loss of imaginary wholeness, transforming into the barred subject ($).',
            formula: 'Cs',
            connections: ['$', 'A', 'S(A)']
        }
    }
};

export const LacanGraphView: React.FC<LacanGraphViewProps> = ({ 
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
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [currentLang, setCurrentLang] = useState<BlueprintLanguage>(initialLang);

    const activeId = hoveredId || selectedId;
    const activeInfo = activeId ? DESCRIPTIONS[activeId][currentLang] : null;

    const handleNodeClick = (id: string) => {
        setSelectedId(id === selectedId ? null : id);
    };

    const toggleLang = () => {
        setCurrentLang(prev => prev === 'CN' ? 'EN' : 'CN');
    };

    const renderId = (id: string) => {
        if (id === 'S(A)') return 'S(\u023A)';
        if (id === 'Signifiant') return currentLang === 'CN' ? '能指' : 'Sn';
        if (id === 'Voix') return currentLang === 'CN' ? '声音' : 'Vx';
        if (id === 'Jouissance') return currentLang === 'CN' ? '享乐' : 'Jo';
        if (id === 'Castration') return currentLang === 'CN' ? '阉割' : 'Cs';
        if (id === '($♢a)') return '( $ ♢ a )';
        if (id === '($♢d)') return '( $ ♢ d )';
        return id;
    };

    return (
        <div className={`flex flex-col h-full w-full bg-[var(--bg-main)] text-[var(--accent-color)] font-sans overflow-hidden animate-in fade-in duration-700 transition-colors duration-500`}>
            {isRetro && <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply z-0" style={{ backgroundImage: 'var(--pattern-aged)' }}></div>}
            
            {/* STANDARD MIST HEADER - Matching AppHeader & LacanTopologyView */}
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
                        {currentLang === 'CN' ? '迷雾学派: 欲望图式' : 'MIST: DESIRE GRAPH'}
                    </span>
                </div>

                {/* CENTERED: MIST SCHOOL - Absolute center within header */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                     <span className={`${isRetro ? 'text-[var(--text-main)]' : 'text-white'} font-serif font-bold text-sm tracking-[0.5em] uppercase pointer-events-none transition-colors`}>
                         {currentLang === 'CN' ? '迷雾学派' : 'MIST SCHOOL'}
                     </span>
                </div>

                <div className="flex items-center gap-4">
                    {[
                        { icon: HelpCircle, label: currentLang === 'CN' ? '哲学辞典' : 'CODEX', onClick: openManual },
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
                
                {/* LEFT AREA: Content Section */}
                <div className={`w-full lg:w-1/2 bg-[var(--bg-panel)] border-r border-[var(--border-main)] flex flex-col z-20 shadow-[40px_0_120px_rgba(0,0,0,0.9)] flex-shrink-0 relative overflow-hidden transition-colors duration-500`}>
                    
                    <header className="p-8 lg:px-12 pt-12 pb-6 relative z-10 flex-shrink-0">
                        <div className="flex flex-col">
                            <h1 className="text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-tight">
                                {currentLang === 'CN' ? (
                                    <>拉康<span className={isRetro ? 'text-[var(--text-accent)]' : 'text-gold-primary'}>欲望图式</span></>
                                ) : (
                                    <>LACAN <span className={isRetro ? 'text-[var(--text-accent)]' : 'text-gold-primary'}>GRAPH OF DESIRE</span></>
                                )}
                            </h1>
                            <div className="h-1 w-24 bg-gold-primary/80 mt-6 shadow-[0_0_15px_rgba(212,175,55,0.3)]"></div>
                            <p className={`mt-5 text-[11px] ${isRetro ? 'text-[var(--text-main)] underline decoration-[var(--text-accent)]' : 'text-white brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'} tracking-[0.3em] font-black uppercase transition-colors`}>
                                {currentLang === 'CN' ? '由于大他者的切中而引发主体的分裂' : 'ALIENATION OF THE SUBJECT BY THE OTHER'}
                            </p>
                        </div>
                    </header>

                    <div className="flex-1 flex flex-col overflow-hidden px-8 lg:px-12 pb-6 gap-5">
                        
                        <div className={`flex-1 min-h-0 flex flex-col border border-[var(--border-main)] bg-[var(--bg-card)] rounded-sm overflow-hidden relative group transition-colors duration-500`}>
                            {activeInfo ? (
                                <div className="flex-1 flex flex-col overflow-hidden">
                                    <div className="p-5 border-b border-gold-primary/10 bg-white/[0.02] flex-shrink-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 flex items-center justify-center bg-gold-primary text-black text-lg font-serif font-black rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.1)] flex-shrink-0">
                                                {activeId === 'S(A)' ? 'S(\u023A)' : (activeId === 'Signifiant' ? 'Sn' : (activeId === 'Voix' ? 'Vx' : activeId?.replace(/[()]/g, '').slice(0, 4)))}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h2 className="text-[10px] font-black tracking-[0.1em] text-gold-primary/60 italic">
                                                        {activeInfo.formula}
                                                    </h2>
                                                </div>
                                                <h3 className="text-xl font-serif font-bold text-white tracking-tight leading-tight">
                                                    {activeInfo.title}
                                                </h3>
                                                <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mt-1">
                                                    {activeInfo.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-5 py-2.5 flex items-center gap-3 bg-white/[0.03] border-y border-gold-primary/5 flex-shrink-0">
                                        <BookOpen size={14} className="text-gold-primary" />
                                        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-gold-primary brightness-110">
                                            {currentLang === 'CN' ? '拓扑解析 // TOPOLOGICAL ANALYSIS' : 'TOPOLOGICAL ANALYSIS'}
                                        </h4>
                                    </div>

                                    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-6 pb-6 pt-4 bg-black/10">
                                        <p className="text-[15px] text-white leading-[1.7] font-medium text-justify selection:bg-gold-primary/30">
                                            {activeInfo.desc}
                                        </p>
                                    </div>

                                    <div className="p-5 border-t border-gold-primary/10 bg-white/[0.02] flex-shrink-0">
                                        <div className="flex items-center gap-3 text-gold-primary mb-3 brightness-125">
                                            <Layers size={14} />
                                            <span className="text-[12px] font-black uppercase tracking-[0.2em]">
                                                {currentLang === 'CN' ? '关联路径 / CONNECTIONS' : 'CONNECTIONS'}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {activeInfo.connections.map(id => (
                                                <div 
                                                    key={id} 
                                                    onClick={() => handleNodeClick(id)} 
                                                    className="px-2.5 py-1 rounded-sm border border-gold-primary/15 bg-gold-primary/5 text-[9px] font-black text-gold-primary cursor-pointer hover:bg-gold-primary hover:text-black transition-all"
                                                >
                                                    {renderId(id)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center p-8 text-center transition-all duration-700 opacity-40">
                                    <div className="w-12 h-12 rounded-full border border-gold-primary/20 flex items-center justify-center mb-6 bg-gold-primary/[0.05] animate-pulse">
                                        <Compass className="text-gold-primary/40" size={24} strokeWidth={1} />
                                    </div>
                                    <h4 className="text-[9px] text-gold-primary/50 font-black uppercase tracking-[0.5em] mb-3">
                                        {currentLang === 'CN' ? '主体待命 // STANDBY' : 'SUBJECT STANDBY'}
                                    </h4>
                                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.1em] flex items-center gap-2 justify-center">
                                         点击图式节点启动语义映射
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* INDEX AREA: Smaller buttons and fonts - Refined as per user request */}
                        <div className="flex-shrink-0 border border-white/5 bg-black/40 p-3.5 rounded-sm space-y-3">
                            <div className="flex items-center gap-3 text-gold-primary brightness-125">
                                <List size={12} className="text-gold-primary" />
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gold-primary brightness-150">
                                    {currentLang === 'CN' ? '能指项索引 / SIGNIFIER INDEX' : 'SIGNIFIER INDEX'}
                                </h4>
                            </div>
                            
                            <div className="grid grid-cols-5 gap-1.5">
                                {Object.keys(DESCRIPTIONS).map((id) => (
                                    <button 
                                        key={id} 
                                        onClick={() => handleNodeClick(id)}
                                        onMouseEnter={() => setHoveredId(id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        className={`py-2 rounded-sm border transition-all text-center ${selectedId === id ? 'bg-gold-primary/40 border-gold-primary text-white scale-[1.05]' : hoveredId === id ? 'bg-white/10 border-white/30 text-white' : 'bg-white/[0.05] border-white/10 text-zinc-300 hover:text-white'}`}
                                    >
                                        <span className="text-[11px] font-black tracking-tight truncate px-1 block drop-shadow-sm">
                                            {renderId(id)}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-1 pt-2 border-t border-white/5">
                                {[
                                    { eq: '$ \u2192 I(A)', node: 'I(A)', label: currentLang === 'CN' ? '认同' : 'IDENT' },
                                    { eq: '$ \u22C4 a', node: '($♢a)', label: currentLang === 'CN' ? '幻想' : 'FANTASY' },
                                    { eq: '$ \u22C4 d', node: 'd', label: currentLang === 'CN' ? '欲望' : 'DESIRE' },
                                    { eq: 'S(\u023A)', node: 'S(A)', label: currentLang === 'CN' ? '匮乏' : 'LACK' }
                                ].map((item, idx) => (
                                    <button 
                                        key={idx} 
                                        onClick={() => handleNodeClick(item.node)}
                                        className={`flex-1 py-2 px-1 text-[10px] font-black tracking-[0.05em] transition-all border ${selectedId === item.node ? 'text-white border-gold-primary/50 bg-gold-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'text-zinc-400 border-white/5 bg-white/[0.02] hover:text-white hover:border-white/20'}`}
                                    >
                                        <span className={`block text-[7px] mb-1 font-bold ${selectedId === item.node ? 'text-gold-primary' : 'text-zinc-500 opacity-80'}`}>{item.label}</span>
                                        {item.eq}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT AREA: Topology Graph Canvas */}
                <div className={`lg:w-1/2 relative flex items-center justify-center p-4 lg:p-8 overflow-hidden bg-[var(--bg-main)] transition-colors duration-500`}>
                    
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(${isRetro ? '#8B261D' : '#D4AF37'} 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

                    <div className="relative w-full h-full max-w-[850px] max-h-[850px] flex items-center justify-center">
                        <svg 
                            viewBox="-50 -150 900 1150" 
                            className="w-full h-full drop-shadow-[0_0_80px_rgba(212,175,55,0.1)]"
                        >
                            <defs>
                                <filter id="gold-glow-node-fix" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="15" result="blur" />
                                    <feFlood floodColor="#D4AF37" floodOpacity="1" result="flood" />
                                    <feComposite in="flood" in2="blur" operator="in" />
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                
                                <linearGradient id="lineGradStatic" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            
                            <g className="transition-all duration-700">
                                <path d="M 600,850 C 580,750 570,650 550,550 C 400,500 300,500 150,550 C 130,650 120,750 100,850" fill="none" stroke="url(#lineGradStatic)" strokeWidth="3" className="opacity-50" />
                                <path d="M 50,710 C 100,660 140,600 150,550 L 150,250 C 200,100 500,100 550,250 L 550,550 C 560,600 600,660 650,710" fill="none" stroke="url(#lineGradStatic)" strokeWidth="3" className="opacity-50" />
                            </g>

                            {[
                                { id: 'Signifiant', cx: 70, cy: 750, label: currentLang === 'CN' ? '能指' : 'Signifier' },
                                { id: 'Voix', cx: 730, cy: 750, label: currentLang === 'CN' ? '声音/语言' : 'Voix' },
                                { id: 'Jouissance', cx: 70, cy: 160, label: currentLang === 'CN' ? '享乐' : 'Jouissance' },
                                { id: 'Castration', cx: 730, cy: 160, label: currentLang === 'CN' ? '阉割' : 'Castration' }
                            ].map((label) => (
                                <g 
                                    key={label.id}
                                    className="group cursor-pointer"
                                    onClick={() => handleNodeClick(label.id)}
                                >
                                    <text 
                                        x={label.cx} y={label.cy}
                                        className={`font-black tracking-[0.4em] transition-all duration-300 ${activeId === label.id ? 'fill-white text-[24px]' : 'fill-gold-primary text-[18px] opacity-90'}`}
                                        style={{ textAnchor: 'middle', textShadow: '0 0 15px rgba(212,175,55,0.4)' }}
                                    >
                                        {label.label}
                                    </text>
                                    <rect x={label.cx - 90} y={label.cy - 35} width="180" height="70" fill="transparent" />
                                </g>
                            ))}

                            {[
                                { id: 'S(A)', cx: 150, cy: 250, label: 'S(\u023A)' },
                                { id: 's(A)', cx: 150, cy: 550, label: 's(A)', fs: 24 },
                                { id: '($♢d)', cx: 550, cy: 250, label: '($♢d)', fs: 20 },
                                { id: 'A', cx: 550, cy: 550, label: 'A', fs: 28 },
                                { id: 'm', cx: 110, cy: 710, label: 'm', type: 'text', fs: 22 },
                                { id: 'i(a)', cx: 570, cy: 710, label: 'i(a)', type: 'text', fs: 22 },
                                { id: '($♢a)', cx: 80, cy: 420, label: '($♢a)', type: 'text', fs: 20 },
                                { id: 'd', cx: 580, cy: 420, label: 'd', type: 'text', fs: 24 },
                                { id: '$', cx: 610, cy: 875, label: '$', type: 'text', fs: 42 },
                                { id: 'I(A)', cx: 80, cy: 875, label: 'I(A)', type: 'text', fs: 24 }
                            ].map((node) => (
                                <g 
                                    key={node.id}
                                    className="group cursor-pointer"
                                    onClick={() => handleNodeClick(node.id)}
                                >
                                    {node.type !== 'text' ? (
                                        <>
                                            <circle cx={node.cx} cy={node.cy} r="45" className={`transition-all duration-300 ${activeId === node.id ? 'stroke-gold-primary/60 scale-100' : 'stroke-transparent'}`} fill="transparent" strokeWidth="2" strokeDasharray="4 4" />
                                            <circle cx={node.cx} cy={node.cy} r="38" className={`transition-all duration-500 fill-black/80 ${activeId === node.id ? 'stroke-gold-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'stroke-gold-primary/50'}`} strokeWidth="2" filter={activeId === node.id ? 'url(#gold-glow-node-fix)' : ''} />
                                        </>
                                    ) : (
                                        <circle cx={node.cx} cy={node.cy} r="48" className={`transition-all duration-300 ${activeId === node.id ? 'fill-gold-primary/20 stroke-gold-primary/40' : 'fill-transparent stroke-transparent'}`} strokeWidth="1.5" />
                                    )}
                                    <text x={node.cx} y={node.cy} className={`font-serif select-none transition-all duration-300 pointer-events-none ${activeId === node.id ? 'fill-white font-black drop-shadow-[0_0_15px_rgba(212,175,55,1)]' : 'fill-gold-primary brightness-110'}`} style={{ fontSize: (node.fs || (activeId === node.id ? 24 : 20)), textAnchor: 'middle', dominantBaseline: 'middle' }}>
                                        {node.label}
                                    </text>
                                    <circle cx={node.cx} cy={node.cy} r="55" fill="transparent" />
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
