import React, { useState, useEffect } from 'react';
import { X, Save, ExternalLink, Globe, Wand2 } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';
import { APISettings, DriverType } from '../../types';
import { testConnection } from '../../services/geminiService';

interface APISettingsModalProps {
    onClose: () => void;
    lang: 'CN' | 'EN';
    setLang: (lang: 'CN' | 'EN') => void;
    selectedDriver: DriverType | null;
}

const LLM_MODELS = [
    { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro Preview' },
    { id: 'gemini-3-pro-preview', name: 'Gemini 3 Pro Preview' },
    { id: 'gemini-3-flash-preview', name: 'Gemini 3 Flash Preview' },
    { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
];

const IMAGE_MODELS = [
    { id: 'gemini-3-pro-image-preview', name: 'Gemini 3 Pro Image' },
    { id: 'gemini-2.5-flash-image', name: 'Gemini 2.5 Flash Image' },
];

export const APISettingsModal: React.FC<APISettingsModalProps> = ({ onClose, lang, setLang, selectedDriver }) => {
    const { settings, updateSettings } = useSettings();
    const [localSettings, setLocalSettings] = useState<APISettings>(settings);
    const [testStatus, setTestStatus] = useState<{ llm: string; image: string }>({ llm: '', image: '' });

    useEffect(() => {
        setLocalSettings(settings);
    }, [settings]);

    const handleSave = () => {
        updateSettings(localSettings);
        onClose();
    };

    const handleChange = (section: 'llm' | 'image', field: string, value: string) => {
        setLocalSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleTestConnection = async (section: 'llm' | 'image') => {
        setTestStatus(prev => ({ ...prev, [section]: lang === 'CN' ? '测试中...' : 'Testing...' }));

        try {
            const success = await testConnection(section);
            setTestStatus(prev => ({
                ...prev,
                [section]: success
                    ? (lang === 'CN' ? '✅ 已连接' : '✅ Connected')
                    : (lang === 'CN' ? '❌ 失败' : '❌ Failed')
            }));
            setTimeout(() => setTestStatus(prev => ({ ...prev, [section]: '' })), 3000);
        } catch (error) {
            setTestStatus(prev => ({ ...prev, [section]: '❌ Error' }));
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="w-[800px] max-h-[90vh] bg-[#0c0c0c] border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-white tracking-wider leading-none">
                            {lang === 'CN' ? "系统设置" : "SYSTEM SETTINGS"}
                        </h2>
                        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mt-1.5 opacity-80">
                            SYSTEM CONFIGURATION
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
                            className="flex items-center gap-2 px-3 py-1.5 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-md transition-all text-[10px] font-bold uppercase tracking-widest"
                        >
                            <Globe size={14} />
                            {lang}
                        </button>

                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-5 py-2 bg-[#D4AF37] text-black hover:bg-[#C5A028] font-bold text-xs rounded transition-all shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
                        >
                            <Save size={16} />
                            {lang === 'CN' ? "保存配置" : "SAVE CONFIG"}
                        </button>

                        <button onClick={onClose} className="p-1 text-zinc-500 hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10 custom-scrollbar">

                    {/* LLM Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-1">
                            <h3 className="text-base font-bold text-[#D4AF37] tracking-wider">
                                {lang === 'CN' ? "LLM 大语言模型" : "LLM LARGE LANGUAGE MODEL"}
                            </h3>
                            <button
                                onClick={() => handleTestConnection('llm')}
                                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded"
                            >
                                <ExternalLink size={12} />
                                {testStatus.llm || (lang === 'CN' ? "测试连接" : "TEST CONNECTION")}
                            </button>
                        </div>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">{lang === 'CN' ? "API 预设方案" : "API PRESET"}</label>
                                <select
                                    className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all appearance-none"
                                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2352525b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                                    value={localSettings.llm.provider === 'custom' ? 'custom' : 'default'}
                                    onChange={(e) => handleChange('llm', 'provider', e.target.value === 'custom' ? 'custom' : 'google')}
                                >
                                    <option value="default">Google Gemini Native (Default)</option>
                                    <option value="custom">Custom Proxy (OpenAI Format)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">API PROVIDER</label>
                                    <input
                                        type="text"
                                        value={localSettings.llm.provider}
                                        onChange={(e) => handleChange('llm', 'provider', e.target.value)}
                                        className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all"
                                        placeholder="google"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">MODEL</label>
                                    <select
                                        className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all appearance-none"
                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2352525b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                                        value={localSettings.llm.model}
                                        onChange={(e) => handleChange('llm', 'model', e.target.value)}
                                    >
                                        {LLM_MODELS.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">API KEY</label>
                                <input
                                    type="password"
                                    value={localSettings.llm.apiKey}
                                    onChange={(e) => handleChange('llm', 'apiKey', e.target.value)}
                                    className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all font-mono"
                                    placeholder="sk-..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">BASE URL</label>
                                <input
                                    type="text"
                                    value={localSettings.llm.baseUrl}
                                    onChange={(e) => handleChange('llm', 'baseUrl', e.target.value)}
                                    className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all"
                                    placeholder="https://api.example.com/v1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-1">
                            <h3 className="text-base font-bold text-[#D4AF37] tracking-wider">
                                {lang === 'CN' ? "图像模型" : "IMAGE SYNTHESIS ENGINE"}
                            </h3>
                            <button
                                onClick={() => handleTestConnection('image')}
                                className="flex items-center gap-2 text-zinc-500 font-bold uppercase tracking-widest text-[10px] border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded transition-all"
                            >
                                <ExternalLink size={12} />
                                {testStatus.image || (lang === 'CN' ? "测试连接" : "TEST CONNECTION")}
                            </button>
                        </div>

                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-8 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">PROTOCOL</label>
                                    <select
                                        className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all appearance-none"
                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2352525b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                                        value={localSettings.image.protocol}
                                        onChange={(e) => handleChange('image', 'protocol', e.target.value)}
                                    >
                                        <option value="gemini-native">Gemini Native (v1beta)</option>
                                        <option value="openai">OpenAI Format (DALL-E)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">IMAGE MODEL</label>
                                    <select
                                        className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all appearance-none"
                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2352525b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                                        value={localSettings.image.model}
                                        onChange={(e) => handleChange('image', 'model', e.target.value)}
                                    >
                                        {IMAGE_MODELS.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">API KEY</label>
                                <input
                                    type="password"
                                    value={localSettings.image.apiKey}
                                    onChange={(e) => handleChange('image', 'apiKey', e.target.value)}
                                    className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-all font-mono"
                                    placeholder="sk-..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

