
import React, { useState } from 'react';
import { X, Sparkles, Send, Loader2, Eraser, MessageSquare } from 'lucide-react';
import { BlueprintLanguage } from '../types';
import { ProcessingTimer } from './SharedBlueprintComponents';
import { useTheme } from '../contexts/ThemeContext';

interface AestheticInputSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAnalyzeAndMap: (text: string) => Promise<void>;
  isProcessing: boolean;
  lang: BlueprintLanguage;
}

export const AestheticInputSidebar: React.FC<AestheticInputSidebarProps> = ({
  isOpen,
  onClose,
  onAnalyzeAndMap,
  isProcessing,
  lang
}) => {
  const { theme } = useTheme();
  const [inputText, setTextInput] = useState("");
  const [lastLog, setLastLog] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!inputText.trim()) return;
    const currentText = inputText;
    await onAnalyzeAndMap(currentText);
    setLastLog(currentText);
    setTextInput(""); // Clear after send, like a chat interface
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.metaKey) {
      handleSubmit();
    }
  };

  const getPlaceholder = () => {
    if (lang === 'EN') {
      return "Type your visual instruction here...\nOR Paste a Shot List / Camera Report:\nAspect Ratio: 1.85\nCamera: Alexa 65\nShot Type: Medium\nLighting: Chiaroscuro\n(Cmd+Enter to send)";
    }
    return "在此输入视觉指令...\n或粘贴 摄制组通告单/摄影表 格式：\nAspect Ratio: 1.85\nCamera: Alexa 65\nShot Type: Medium\nLighting: Chiaroscuro\n(Cmd+Enter 发送)";
  };

  return (
    <div className={`
      flex flex-col gap-0 z-40 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
      fixed top-14 left-0 bottom-20 w-[380px] bg-[var(--bg-main)] border-r border-[var(--border-main)] 
      ${theme === 'retro' ? 'shadow-none' : (isOpen ? 'shadow-[20px_0_50px_rgba(0,0,0,0.5)]' : '')}
      ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
    `}>
      {/* Header */}
      <div className={`p-6 pb-5 flex items-center justify-between border-b ${theme === 'retro' ? 'border-[var(--border-main)]/30 bg-[var(--bg-panel)]/40' : 'border-zinc-800 bg-zinc-900/40'} shrink-0 transition-colors duration-500`}>
        <div className="flex items-center gap-3">
          <MessageSquare size={18} className="text-rose-400" />
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-zinc-100 block">
              {lang === 'EN' ? "SPEC PARSER" : "参数解析器"}
            </span>
            <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-wider block mt-1">
              AI Reverse Mapping
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-zinc-800 text-zinc-600 hover:text-white transition-all rounded-full"
        >
          <X size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 overflow-hidden">

        {/* Chat History / Log Area (Visual only for now) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar mb-4 space-y-4 pr-2">
          <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
            <p className="text-zinc-500 text-xs leading-relaxed">
              {lang === 'EN'
                ? "Paste your Camera Report or Shot List keys (e.g. 'Camera:', 'Lens:', 'Lighting:') and I will map them to the engine."
                : "请直接粘贴你的 摄影表 或 拍摄参数 (如 'Camera:', 'Lens:', 'Lighting:')，我会自动将其映射到引擎参数中。"
              }
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-[10px] bg-rose-900/20 text-rose-400 border border-rose-500/20 px-2 py-1 rounded font-mono">Format: "Key: Value"</span>
            </div>
          </div>

          {lastLog && (
            <div className="flex flex-col items-end animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-rose-500 text-black p-4 rounded-2xl rounded-tr-sm text-sm font-medium shadow-lg max-w-[90%] whitespace-pre-wrap font-mono text-xs">
                {lastLog}
              </div>
              <span className="text-[9px] text-zinc-600 mt-1 mr-1">Mapped</span>
            </div>
          )}

          {isProcessing && (
            <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-zinc-800 border border-zinc-700 text-zinc-300 p-4 rounded-2xl rounded-tl-sm text-sm shadow-lg flex items-center gap-3">
                <Loader2 size={16} className="animate-spin text-rose-400" />
                <span>
                  {lang === 'EN' ? "Parsing Specs..." : "正在解析参数..."}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="shrink-0 relative group">
          <textarea
            value={inputText}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={getPlaceholder()}
            className={`w-full h-48 ${theme === 'retro' ? 'bg-[var(--bg-panel)] border-[var(--border-main)] text-[var(--text-main)] placeholder-[var(--text-muted)] focus:ring-[var(--text-accent)]/30' : 'bg-[#080808] border-zinc-700 text-white placeholder-zinc-600 focus:ring-rose-500/50'} border focus:border-rose-500 rounded-xl p-4 pr-14 text-xs font-mono resize-none focus:outline-none focus:ring-1 transition-all shadow-inner leading-relaxed custom-scrollbar`}
          />
          <div className="absolute bottom-3 right-3 flex gap-2">
            {inputText && (
              <button
                onClick={() => setTextInput("")}
                className="p-2 text-zinc-600 hover:text-white transition-colors"
                title="Clear"
              >
                <Eraser size={16} />
              </button>
            )}
            <button
              onClick={handleSubmit}
              disabled={isProcessing || !inputText.trim()}
              className={`p-2 rounded-lg transition-all shadow-lg flex items-center justify-center ${inputText.trim() ? 'bg-rose-500 text-black hover:bg-rose-400 hover:scale-105' : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'}`}
            >
              {isProcessing ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
