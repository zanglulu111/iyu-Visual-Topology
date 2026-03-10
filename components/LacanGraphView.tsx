import React, { useState, useMemo } from 'react';
import { 
  Globe, 
  Aperture, 
  Sun, 
  Moon, 
  User as UserIcon, 
  BookOpen, 
  Search, 
  ArrowRight, 
  Maximize2, 
  Link as LinkIcon,
  ChevronRight,
  ChevronDown,
  Info,
  Layers,
  Zap,
  Book,
  Cpu,
  History,
  Settings,
  Compass
} from 'lucide-react';
import { User } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface LacanGraphViewProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: 0 | 1) => void;
  currentUser: User;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
}

// Graph-specific data structure
const DESCRIPTIONS: Record<string, { 
    CN: { title: string; subtitle: string; shortDef: string; definition: string; analogy: string; application: string; connections: string[] },
    EN: { title: string; subtitle: string; shortDef: string; definition: string; analogy: string; application: string; connections: string[] }
}> = {
    'S(A)': {
        CN: {
            title: 'S(Ⱥ) : 大他者的匮乏能指',
            subtitle: 'Signifier of the Lack in the Other',
            shortDef: '象征界宝库中缺失的那个能担保意义完整的最终能指。',
            definition: '这是拉康图式中最核心的启示：大他者本身也是不完整的。在象征界的宝库中，缺少一个能回答主体“我是谁”或“他者要我做什么”的最终能指。这种匮乏是欲望的起源，也是主体得以在法律之外寻找存在空间的缝隙。',
            analogy: '就像一部法律丛书，虽然看似严密，但总有一个条文是空白的，或者需要不断修正的。那个“空白”就是大他者的缺失。',
            application: 'M4 (大他者) 的崩塌时刻。当故事中的绝对权威显露无能时，主角面对应对 S(Ⱥ) 的焦虑。',
            connections: ['$', 'A', 'd']
        },
        EN: {
            title: 'S(Ⱥ) : Signifier of the Lack in the Other',
            subtitle: 'S(Barred A)',
            shortDef: 'The missing signifier in the Other that would provide a final answer to existence.',
            definition: 'The revelation that the Other is also incomplete. There is a missing signifier that could provide a final answer to the Subject’s "Who am I?". This lack is the origin of Desire and the Subject’s agency.',
            analogy: "Like a dictionary that lacks the definition of the word 'meaning'. That missing entry is the S(Barred A).",
            application: 'M4: The moment the system fails. The protagonist faces the void of authority.',
            connections: ['$', 'A', 'd']
        }
    },
    '($♢d)': {
        CN: {
            title: '($ ♢ d) : 驱力',
            subtitle: 'The Drive / Pulsion',
            shortDef: '主体与要求之间的永恒循环，在重复运动中获利享乐。',
            definition: '驱力不同于欲望，它不追求目标，而是在环绕目标的重复运动中获得一种“痛爽” (Jouissance)。它是力比多的自动机，在能指链条的缝隙中回响。',
            analogy: '像一只不停撞击玻璃窗的飞蛾。它不一定非要出去，它在“撞击”这个动作本身中获得了某种盲目的满足。',
            application: 'M5: 强迫性动力。主角无法控制的、自我毁灭式的坚持。',
            connections: ['$', 's(A)', 'S(A)']
        },
        EN: {
            title: '($ ♢ d) : The Drive',
            subtitle: 'Pulsion',
            shortDef: 'The eternal cycle of Jouissance through repetitive movement around an object.',
            definition: 'Unlike Desire, Drive finds satisfaction in the movement itself rather than the realization of a goal. It is a libido automaton echoing in the signifier chain.',
            analogy: 'Like a record skip that keeps playing the same fragment—irritating but strangely captivating.',
            application: 'M5: Obsessive dynamics. The protagonist’s uncontrollable persistence.',
            connections: ['$', 's(A)', 'S(A)']
        }
    },
    '($♢a)': {
        CN: {
            title: '($ ♢ a) : 幻想',
            subtitle: 'Fantasy (Fantasme)',
            shortDef: '主体用来应对大他者匮乏的“屏障”与欲望坐标。',
            definition: '幻想是主体的护盾。通过将对象 (a) 放置在幻想逻辑中，主体为自己的欲望提供了一个坐标系，避免直接面对实在界的深渊。幻想是为了维持欲望，而非满足它。',
            analogy: '就像一个永远无法追到的梦中情人。你并不真的想追到她，你只需要拥有“追她”这个剧情，来让你觉得生活有意义。',
            application: 'M3: 核心幻想。支持主角行动的虚假目标，也是 AI 生成 Prompt 的关键视觉。',
            connections: ['$', 'd', 's(A)']
        },
        EN: {
            title: '($ ♢ a) : Fantasy',
            subtitle: 'The Screen of Desire',
            shortDef: 'The subject’s shield against the lack in the Other and the map of desire.',
            definition: 'Fantasy shields the subject from the direct encounter with the Real. By positioning (objet a) in a script, it gives the subject a frame to desire.',
            analogy: 'A cinema screen: it prevents you from seeing the wall behind it by providing a sequence of moving images.',
            application: 'M3: Core Fantasy. The illusory goal driving the narrative.',
            connections: ['$', 'd', 's(A)']
        }
    }
};

export const LacanGraphView: React.FC<LacanGraphViewProps> = ({
  lang,
  setLang,
  setPage,
  currentUser,
  showRings,
  setShowRings,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'GRAPH' | 'DICTIONARY'>('GRAPH');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('S(A)');
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedNode = useMemo(() => {
    return DESCRIPTIONS[selectedNodeId] || DESCRIPTIONS['S(A)'];
  }, [selectedNodeId]);

  const conceptList = Object.keys(DESCRIPTIONS);

  return (
    <div className={`flex flex-col h-screen overflow-hidden font-sans selection:bg-gold-primary/30 ${theme === 'retro' ? 'bg-[#FAF9F6] text-zinc-900' : 'bg-[var(--bg-main)] text-white'}`}>
      
      {/* Unified Header */}
      <header className={`h-14 backdrop-blur-md border-b flex items-center justify-between px-6 z-50 sticky top-0 shrink-0 transition-all duration-500 ${theme === 'retro' ? 'bg-[#FAF9F6]/80 border-[#8B261D]/15' : 'bg-[var(--bg-header)] border-[var(--border-main)]/15'}`}>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setPage(0)}
            className="flex items-center gap-1.5 transition-all duration-300 group px-2 py-1 rounded-md bg-transparent hover:bg-white/5 hover:scale-105 active:scale-95"
          >
            <Globe size={14} className={`${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'} group-hover:text-gold-primary shrink-0 transition-all duration-100`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.1em] hidden md:block ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'} group-hover:text-gold-primary`}>
              {lang === 'CN' ? "返回全局" : "GLOBAL"}
            </span>
          </button>
          <div className={`h-4 w-px hidden md:block ${theme === 'retro' ? 'bg-zinc-300' : 'bg-zinc-800'}`}></div>
          <span className={`font-serif font-bold text-xs uppercase tracking-widest flex items-center gap-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'}`}>
            <Layers size={14} className="animate-pulse opacity-80" />
            {lang === 'CN' ? '欲望图式: 拓扑节点' : 'GRAPH OF DESIRE: NODES'}
          </span>
        </div>

        {/* Central Toggle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-6">
          <button
            onClick={() => setActiveTab('GRAPH')}
            className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 ${activeTab === 'GRAPH' ? 'text-gold-primary' : (theme === 'retro' ? 'text-zinc-500 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white')}`}
          >
            <Compass size={14} />
            {lang === 'CN' ? "欲望图式" : "DESIRE GRAPH"}
          </button>
          <div className={`w-6 h-px ${theme === 'retro' ? 'bg-zinc-300' : 'bg-zinc-800'}`}></div>
          <button
            onClick={() => setActiveTab('DICTIONARY')}
            className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 ${activeTab === 'DICTIONARY' ? 'text-gold-primary' : (theme === 'retro' ? 'text-zinc-500 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white')}`}
          >
            <BookOpen size={14} />
            {lang === 'CN' ? "节点百科" : "NODE CODEX"}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className={`flex items-center border-r pr-4 mr-2 ${theme === 'retro' ? 'border-zinc-300' : 'border-zinc-800'}`}>
            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className={`text-[10px] font-bold transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-sm tracking-widest hover:bg-white/5 ${theme === 'retro' ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}
            >
              {lang === 'CN' ? '中' : 'EN'}
            </button>
            <button
               onClick={toggleTheme}
               className={`flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-300 hover:bg-white/5 ${theme === 'retro' ? 'text-zinc-600 hover:text-[#8B261D]' : 'text-zinc-400 hover:text-white'}`}
            >
              {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} className="text-[#8B261D]" />}
            </button>
          </div>
          
          <button className="flex items-center gap-2 group">
             <div className={`w-7 h-7 rounded-sm border flex items-center justify-center text-[10px] font-bold shadow-sm transition-all group-hover:scale-110 ${
                theme === 'retro' ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-zinc-900 border-gold-primary/30 text-gold-primary'
             }`}>
                {currentUser.username.charAt(0).toUpperCase()}
             </div>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        
        {/* Left Sidebar Index */}
        <aside className={`w-80 border-r flex flex-col shrink-0 z-20 backdrop-blur-sm shadow-2xl transition-all duration-500 ${theme === 'retro' ? 'bg-[#FAF9F6] border-zinc-200' : 'bg-[var(--bg-panel)] border-[var(--border-main)]/15'}`}>
          <div className="p-4 border-b border-[var(--border-main)]/10">
            <div className="relative group">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${theme === 'retro' ? 'text-zinc-400' : 'text-zinc-500'} group-focus-within:text-gold-primary`} size={14} />
              <input 
                type="text" 
                placeholder={lang === 'CN' ? "搜索图式节点..." : "Search Graph Nodes..."}
                className={`w-full border rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-gold-primary/50 transition-all ${
                  theme === 'retro' ? 'bg-white border-zinc-200 text-zinc-900' : 'bg-black/40 border-zinc-800 text-white'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 pb-20">
             <h3 className={`px-4 py-4 text-[10px] font-bold uppercase tracking-[0.3em] ${theme === 'retro' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Signifier Nodes / 能指节点
             </h3>
             <div className="space-y-1">
                {conceptList.map(id => (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedNodeId(id);
                      if (activeTab === 'GRAPH') setActiveTab('DICTIONARY');
                    }}
                    className={`w-full text-left px-4 py-4 rounded-xl border transition-all duration-300 group ${
                      selectedNodeId === id 
                      ? (theme === 'retro' ? 'bg-[#8B261D]/5 border-[#8B261D]/20 shadow-sm' : 'bg-gold-primary/10 border-gold-primary/30 shadow-lg')
                      : 'border-transparent hover:bg-zinc-800/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                       <span className={`text-lg font-serif font-black ${selectedNodeId === id ? 'text-gold-primary' : 'text-zinc-400'}`}>
                          {id === 'S(A)' ? 'S(\u023A)' : id}
                       </span>
                       {selectedNodeId === id && <Zap size={12} className="text-gold-primary animate-pulse" />}
                    </div>
                    <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest line-clamp-1">
                       {DESCRIPTIONS[id][lang].title}
                    </div>
                  </button>
                ))}
             </div>
          </div>
        </aside>

        {/* Content Section */}
        <section className={`flex-1 relative flex flex-col overflow-hidden ${theme === 'retro' ? 'bg-white' : 'bg-black/20'}`}>
          
          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
            {activeTab === 'GRAPH' ? (
              <div className="h-full flex flex-col items-center justify-center relative py-12">
                <div className="text-center mb-16 max-w-2xl">
                  <h1 className={`text-6xl font-serif font-black tracking-tighter mb-4 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                    GRAPH OF DESIRE
                  </h1>
                   <p className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase font-bold">Structural Alienation of the Barred Subject</p>
                </div>

                {/* Graph Visualization Mock/Placeholder - In a real tool I'd use SVG */}
                <div className="relative w-full max-w-4xl h-[600px] border border-dashed border-zinc-800/50 rounded-[40px] flex items-center justify-center bg-zinc-950/20 backdrop-blur-md shadow-2xl overflow-hidden group">
                   <div className="absolute inset-0 opacity-[0.03] pattern-grid-lg grayscale"></div>
                   
                   {/* Simplified Graph SVG representation */}
                   <svg viewBox="0 0 800 500" className="w-[85%] h-[85%]">
                      <path d="M 100,250 Q 400,100 700,250" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-primary/30" />
                      <path d="M 100,280 Q 400,430 700,280" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-primary/30" />
                      
                      {/* Interactive Nodes */}
                      {[
                        { id: 'S(A)', x: 400, y: 120, label: 'S(\u023A)' },
                        { id: '($♢d)', x: 550, y: 180, label: '($♢d)' },
                        { id: '($♢a)', x: 250, y: 320, label: '($♢a)' }
                      ].map(node => (
                        <g 
                          key={node.id} 
                          className="cursor-pointer group/node"
                          onClick={() => {
                            setSelectedNodeId(node.id);
                            setActiveTab('DICTIONARY');
                          }}
                        >
                           <circle cx={node.x} cy={node.y} r="35" className={`transition-all duration-300 fill-black stroke-2 shadow-2xl ${selectedNodeId === node.id ? 'stroke-gold-primary' : 'stroke-zinc-800 hover:stroke-gold-primary/40'}`} />
                           <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="middle" className={`font-serif font-black text-xl transition-all ${selectedNodeId === node.id ? 'fill-white scale-110' : 'fill-gold-primary opacity-60'}`}>
                             {node.label}
                           </text>
                        </g>
                      ))}
                   </svg>

                   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] text-zinc-600 font-mono tracking-[0.5em] bg-zinc-900/40 px-6 py-2 rounded-full border border-white/5">
                      MAP_ENGINE_VERSION: L_GRAPH_2.0
                   </div>
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto py-12 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {/* Dictionary Header */}
                <div className="space-y-8">
                   <div className="flex items-center gap-4">
                      <span className={`px-4 py-1 rounded-lg text-[10px] font-bold tracking-[0.3em] uppercase border ${theme === 'retro' ? 'bg-[#8B261D]/5 text-[#8B261D] border-[#8B261D]/10' : 'bg-gold-primary/10 text-gold-primary border-gold-primary/30'}`}>
                         Topological Node
                      </span>
                      <div className="h-px flex-1 bg-zinc-800/50"></div>
                      <span className="text-zinc-600 font-mono text-[9px] tracking-tight">IDENT: MAP_{selectedNodeId.replace(/[()]/g, '')}</span>
                   </div>

                   <div className="space-y-4">
                      <h1 className={`text-7xl font-serif font-black tracking-tighter ${theme === 'retro' ? 'text-zinc-900' : 'text-white'}`}>
                         {selectedNode[lang].title.split(' : ')[0]}
                         <span className="text-3xl font-light text-zinc-500 italic block mt-2">{selectedNode[lang].subtitle}</span>
                      </h1>
                   </div>

                   {/* Quick Summary Card */}
                   <div className={`p-10 rounded-[40px] border shadow-2xl relative overflow-hidden group transition-all duration-500 ${theme === 'retro' ? 'bg-[#8B261D]/5 border-[#8B261D]/10 shadow-[#8B261D]/5' : 'bg-gold-primary/5 border-gold-primary/20 hover:bg-gold-primary/10 shadow-gold-primary/5'}`}>
                      <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity transform -rotate-15">
                         <Compass size={200} className="text-gold-primary" />
                      </div>
                      <div className="flex items-start gap-10 relative z-10">
                         <div className={`w-16 h-16 rounded-3xl border flex items-center justify-center flex-shrink-0 bg-black shadow-inner transition-transform group-hover:scale-110 ${theme === 'retro' ? 'border-zinc-200' : 'border-gold-primary/20'}`}>
                            <Zap size={32} className="text-gold-primary" />
                         </div>
                         <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-gold-primary uppercase tracking-[0.4em] flex items-center gap-3">
                               Flash Insight / 闪念定义
                               <span className="w-12 h-px bg-gold-primary/20"></span>
                            </h4>
                            <p className={`text-3xl font-semibold leading-[1.3] font-serif ${theme === 'retro' ? 'text-zinc-800' : 'text-white'}`}>
                               "{selectedNode[lang].shortDef}"
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Deep Dive Section */}
                <div className="space-y-12">
                   <div className="flex items-center justify-between border-b border-zinc-900 pb-8">
                      <h3 className={`text-2xl font-serif font-bold flex items-center gap-4 ${theme === 'retro' ? 'text-zinc-900' : 'text-white'}`}>
                         <BookOpen size={28} className="text-gold-primary" />
                         拓扑分析 & 文字考古
                      </h3>
                      <button 
                        onClick={() => setIsDetailExpanded(!isDetailExpanded)}
                        className={`text-[10px] font-bold px-6 py-3 rounded-full border transition-all uppercase tracking-[0.3em] ${
                           theme === 'retro' ? 'border-zinc-200 text-zinc-500 hover:bg-zinc-100' : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-gold-primary'
                        }`}
                      >
                         {isDetailExpanded ? "Seal Archive" : "Expand Full Transcript"}
                      </button>
                   </div>

                   <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-1000 ${isDetailExpanded ? 'opacity-100 max-h-[4000px]' : 'opacity-40 max-h-[500px] overflow-hidden blur-[3px] pointer-events-none'}`}>
                      <div className="md:col-span-2 space-y-16">
                         <section className="space-y-8">
                            <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.5em] flex items-center gap-4">
                               <span className="w-2 h-2 rounded-full bg-gold-primary"></span>
                               Theoretic Definition / 理论阐述
                            </h4>
                            <div className={`text-xl leading-relaxed whitespace-pre-wrap font-sans font-extralight ${theme === 'retro' ? 'text-zinc-700' : 'text-zinc-300'}`}>
                               {selectedNode[lang].definition}
                            </div>
                         </section>

                         <section className={`p-12 rounded-[40px] border space-y-8 ${theme === 'retro' ? 'bg-zinc-50 border-zinc-200' : 'bg-black/40 border-zinc-800 shadow-inner'}`}>
                            <h4 className="text-[11px] font-bold text-gold-primary uppercase tracking-[0.5em] flex items-center gap-4">
                               <Info size={18} />
                               Linguistic Analogy / 语言类比
                            </h4>
                            <div className={`text-[17px] italic font-serif leading-loose opacity-90 ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-300'}`}>
                               {selectedNode[lang].analogy}
                            </div>
                         </section>
                      </div>

                      {/* Right Sidebar Metadata */}
                      <div className="space-y-10">
                         <div className={`p-10 rounded-[40px] border sticky top-24 space-y-10 shadow-2xl transition-all duration-500 ${theme === 'retro' ? 'bg-[#FAF9F6] border-zinc-200' : 'bg-zinc-900/40 border-gold-primary/10 hover:border-gold-primary/30'}`}>
                            <div className="space-y-6">
                               <h4 className="text-[11px] font-bold text-gold-primary uppercase tracking-[0.3em] flex items-center gap-3">
                                  <Cpu size={18} />
                                  Visionary Mode
                               </h4>
                               <p className={`text-sm leading-relaxed italic opacity-80 ${theme === 'retro' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                                  {selectedNode[lang].application}
                               </p>
                            </div>

                            <div className={`pt-8 border-t space-y-8 ${theme === 'retro' ? 'border-zinc-200' : 'border-zinc-800'}`}>
                               <div className="space-y-4">
                                  <h5 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">Connected Paths</h5>
                                  <div className="flex flex-wrap gap-3">
                                     {selectedNode[lang].connections.map(nodeId => (
                                       <button 
                                         key={nodeId} 
                                         onClick={() => {
                                           setSelectedNodeId(nodeId);
                                           window.scrollTo({ top: 0, behavior: 'smooth' });
                                         }}
                                         className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono transition-all ${
                                           theme === 'retro' ? 'bg-white border-zinc-200 text-zinc-500 hover:text-[#8B261D]' : 'bg-black/30 border-zinc-800 text-zinc-500 hover:text-gold-primary hover:border-gold-primary/40'
                                         }`}
                                       >
                                          {nodeId}
                                       </button>
                                     ))}
                                  </div>
                               </div>

                               <button 
                                 onClick={() => setPage(0)}
                                 className={`w-full py-5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] shadow-xl hover:scale-105 active:scale-95 transition-all text-center ${
                                    theme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-gold-primary text-black'
                                 }`}
                               >
                                  Link to Codex
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>

                   {!isDetailExpanded && (
                     <div className="text-center pb-24 relative z-10 pt-20">
                        <button 
                          onClick={() => setIsDetailExpanded(true)}
                          className={`px-16 py-6 rounded-full text-sm font-black tracking-[0.4em] uppercase shadow-2xl transition-all transform hover:scale-110 active:scale-90 ${
                             theme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-gold-primary text-black'
                          }`}
                        >
                           Decrypt Full Logic
                        </button>
                     </div>
                   )}
                </div>
              </div>
            )}
          </div>

          <footer className={`h-12 border-t px-10 flex items-center justify-between text-[10px] tracking-[0.4em] font-mono transition-colors duration-500 ${
            theme === 'retro' ? 'bg-[#FAF9F6] border-zinc-200 text-zinc-500' : 'bg-zinc-950 border-zinc-900 text-zinc-600'
          }`}>
             <div className="flex items-center gap-8">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse"></div> ENGINE_ONLINE</span>
                <span className="opacity-20">//</span>
                <span>DESIRE_GRAPH_SYSTEM_V4</span>
             </div>
             <div className="flex items-center gap-10">
                <span className="opacity-50">STABLE_TOPOLOGY_LXP</span>
                <span className="text-gold-primary/60">MIST_SCHOOL © 2024</span>
             </div>
          </footer>
        </section>
      </main>

      {/* Background Decor */}
      {showRings && (
        <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(10,10,10,0)_0%,rgba(0,0,0,1)_100%)] opacity-80"></div>
      )}
    </div>
  );
};
