
import React, { useState, useEffect, memo } from 'react';
import { Copy, Check } from 'lucide-react';

export const CopyButton = ({ text, className = "", label = "", theme = "dark" }: { text: string | null, className?: string, label?: string, theme?: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button 
            onClick={handleCopy}
            className={`transition-all active:scale-95 flex items-center gap-1 ${theme === 'retro' ? 'hover:bg-[#8B261D]/10 text-black/80' : 'hover:bg-white/10 text-zinc-400 hover:text-white'} ${className || 'p-1.5 rounded'}`}
            title="Copy Text"
            disabled={!text}
        >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
            {label && <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>}
            {copied && !label && <span className="text-[9px] font-bold text-green-500 uppercase">Copied</span>}
        </button>
    );
};

export const SimpleTextRenderer = ({ content }: { content: string }) => {
    return (
        <div className="whitespace-pre-wrap leading-relaxed text-zinc-300 font-light">
            {content}
        </div>
    );
};

// Memoized to prevent flickering on parent re-renders if content hasn't changed
export const MarkdownRenderer = memo(({ content, themeAccent = "text-gold-primary", theme = "dark" }: { content: string, themeAccent?: string, theme?: string }) => {
    if (!content) return null;

    // 解析加粗文本并替换为黄色字体
    const parseFormattedText = (text: string) => {
       // 正则匹配 **文本**
       const parts = text.split(/(\*\*.*?\*\*)/g);
       return parts.map((part, index) => {
         if (part.startsWith('**') && part.endsWith('**')) {
           // 移除星号，包裹在黄色 span 中
           return <span key={index} className="text-gold-primary font-bold">{part.slice(2, -2)}</span>;
         }
         return part;
       });
    };

    const lines = content.split('\n');

    return (
        <div className={`space-y-4 ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-300'} font-serif leading-relaxed text-sm md:text-base`}>
          {lines.map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={i} className="h-2"></div>;

            // Headers
            if (trimmed.startsWith('### ')) {
                return <h3 key={i} className={`text-xl font-bold ${themeAccent} mt-8 mb-4 uppercase tracking-wider border-b ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-white/10'} pb-2`}>{parseFormattedText(trimmed.replace('### ', ''))}</h3>;
            }
            if (trimmed.startsWith('## ')) {
                return <h2 key={i} className={`text-2xl font-bold ${theme === 'retro' ? 'text-black' : 'text-white'} mt-10 mb-6`}>{parseFormattedText(trimmed.replace('## ', ''))}</h2>;
            }
            if (trimmed.startsWith('# ')) {
                return <h1 key={i} className={`text-3xl font-black ${theme === 'retro' ? 'text-black' : 'text-white'} mt-12 mb-8 border-l-4 ${theme === 'retro' ? 'border-[#8B261D]' : 'border-gold-primary'} pl-4`}>{parseFormattedText(trimmed.replace('# ', ''))}</h1>;
            }
            
            // Stats / Meta info lines
            if (trimmed.startsWith('**Object of Analysis') || trimmed.startsWith('**Analyst') || trimmed.startsWith('**Date')) {
                 return <div key={i} className="text-xs font-mono text-zinc-500 uppercase tracking-widest py-1">{parseFormattedText(trimmed)}</div>;
            }
            
            // Lists
            if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                 return (
                    <div key={i} className="flex gap-3 ml-4 my-2">
                        <span className={`${themeAccent} opacity-70 mt-1.5 shrink-0`}>•</span>
                        <div className="flex-1">{parseFormattedText(trimmed.substring(2))}</div>
                    </div>
                 );
            }
            
            // Numbered Lists
            if (/^\d+\./.test(trimmed)) {
                return (
                    <div key={i} className="flex gap-3 ml-4 my-2">
                        <span className={`${themeAccent} font-bold mt-0.5 shrink-0 min-w-[1.5rem]`}>{trimmed.split('.')[0]}.</span>
                        <div className="flex-1">{parseFormattedText(trimmed.substring(trimmed.indexOf('.') + 1).trim())}</div>
                    </div>
                );
            }

            // Blockquote
            if (trimmed.startsWith('> ')) {
                return (
                    <div key={i} className="border-l-4 border-zinc-700 pl-6 py-4 my-6 italic text-zinc-400 bg-white/5 rounded-r-xl">
                        {parseFormattedText(trimmed.substring(2))}
                    </div>
                )
            }

            return <p key={i} className="mb-2 leading-loose">{parseFormattedText(line)}</p>;
          })}
        </div>
    );
});

export const ProcessingTimer = ({ startTime }: { startTime: number | null }) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let interval: any;
    if (startTime) {
      // Initialize immediately
      setElapsed((Date.now() - startTime) / 1000);
      interval = setInterval(() => {
        setElapsed((Date.now() - startTime) / 1000);
      }, 100);
    } else {
      setElapsed(0);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  if (!startTime) return null;
  return <span className="font-mono text-xs ml-2 opacity-80">({elapsed.toFixed(1)}s)</span>;
};
