
import React from 'react';
import { X, FileSearch } from 'lucide-react';
import { BlueprintLanguage } from '../../../types';
import { MarkdownRenderer } from '../../SharedBlueprintComponents';

interface PreviewContentModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
    title: string;
    themeAccent: string;
    lang: BlueprintLanguage;
}

export const PreviewContentModal: React.FC<PreviewContentModalProps> = ({ isOpen, onClose, content, title, themeAccent, lang }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 p-4" onClick={onClose}>
            <div className="w-full max-w-3xl bg-[#0c0c0c] border border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[80vh]" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-[#0a0a0a]">
                    <div className="flex items-center gap-2">
                        <FileSearch size={16} className={themeAccent} />
                        <span className="text-sm font-bold text-white uppercase tracking-wider">{title}</span>
                        <span className="text-xs text-zinc-500 ml-2 font-mono">({lang === 'EN' ? "Suture Source Text" : "换喻源文本"})</span>
                    </div>
                    <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors"><X size={20} /></button>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-[#0c0c0c]">
                    <div className="prose prose-invert prose-p:text-zinc-300 prose-p:leading-loose max-w-none font-serif text-sm">
                        <MarkdownRenderer content={content || (lang === 'EN' ? "No content available." : "暂无内容。")} themeAccent={themeAccent} />
                    </div>
                </div>
                <div className="p-4 border-t border-zinc-800 bg-[#0a0a0a] flex justify-end">
                    <button onClick={onClose} className={`px-6 py-2 rounded text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-700 hover:text-white hover:border-zinc-500 text-zinc-400 transition-all`}>
                        {lang === 'EN' ? "Close Preview" : "关闭预览"}
                    </button>
                </div>
            </div>
        </div>
    );
};
