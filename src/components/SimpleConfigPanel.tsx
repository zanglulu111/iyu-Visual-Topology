import React, { useState, useEffect } from 'react';
import { configService } from '../services/configService';
import { APIConfig, ENGINE_CONFIGS, AVAILABLE_MODELS } from '../types/config';
import { Settings, Copy, RefreshCw, Check, X, Save, Trash2, Shield, Zap as ZapIcon, Terminal } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

import { DriverType } from '../../types';

interface SimpleConfigPanelProps {
  onClose?: () => void;
  driverType?: DriverType | null;
  lang?: 'CN' | 'EN';
}
export const SimpleConfigPanel: React.FC<SimpleConfigPanelProps> = ({ onClose, driverType, lang = 'CN' }) => {
  const { theme: globalTheme } = useTheme();
  const [config, setConfig] = useState<APIConfig | null>(null);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [testing, setTesting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [savedMessage, setSavedMessage] = useState('');

  const getThemeColor = (id: DriverType | null | undefined) => {
    if (globalTheme === 'retro') return '#8B261D';
    switch (id) {
      case DriverType.COMMERCIAL: return '#22d3ee'; // cyan-400
      case DriverType.NARRATIVE: return '#D4AF37'; // gold-primary
      case DriverType.AESTHETIC: return '#fb7185'; // rose-400
      case DriverType.EXPERIMENTAL: return '#c084fc'; // purple-400
      case DriverType.TRAILER: return '#fb923c'; // orange-400
      default: return '#D4AF37';
    }
  };

  const accentColor = getThemeColor(driverType);

  useEffect(() => {
    const loadedConfig = configService.getConfig();
    setConfig(loadedConfig);
    setApiKeyInput(loadedConfig.apiKey);
  }, []);

  if (!config) return null;

  const handleSaveApiKey = () => {
    configService.setApiKey(apiKeyInput);
    setSavedMessage(lang === 'EN' ? 'API KEY Saved' : 'API 密钥已保存');
    setTimeout(() => setSavedMessage(''), 2000);
  };

  const handleClearApiKey = () => {
    setApiKeyInput('');
    configService.setApiKey('');
    setSavedMessage(lang === 'EN' ? 'API KEY Cleared' : 'API 密钥已清空');
    setTimeout(() => setSavedMessage(''), 2000);
  };

  const handleTestConnection = async () => {
    setTesting(true);
    setConnectionStatus('testing');
    const success = await configService.testConnection(apiKeyInput);
    setConnectionStatus(success ? 'success' : 'error');
    setTesting(false);
    setTimeout(() => setConnectionStatus('idle'), 3000);
  };

  const handleSaveEngineModel = (engineId: string, model: string) => {
    configService.setEngineModel(engineId, model);
    const newConfig = configService.getConfig();
    setConfig(newConfig);
    setSavedMessage(lang === 'EN' ? 'Config Updated' : '配置已更新');
    setTimeout(() => setSavedMessage(''), 2000);
  };

  const handleReset = () => {
    if (window.confirm('Reset to defaults?')) {
      configService.resetToDefault();
      const newConfig = configService.getConfig();
      setConfig(newConfig);
      setApiKeyInput(newConfig.apiKey);
    }
  };

  return (
    <div
      className={`w-[900px] ${globalTheme === 'retro' ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]/98 blur-3xl'} rounded-sm flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500 relative`}
      style={{
        border: globalTheme === 'retro' ? '2px solid #8B261D' : `1px solid ${accentColor}44`,
        boxShadow: globalTheme === 'retro' 
          ? '8px 8px 0px 0px rgba(139,38,29,0.1)' 
          : `0 0 0 1px #1a1a1a, 0 30px 100px -20px rgba(0,0,0,0.9), 0 0 40px ${accentColor}11`
      }}
    >
      {/* Header */}
      <div className={`flex items-center justify-between px-8 py-3 border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/20 bg-[#F4EFE0]' : 'border-zinc-900/50'} shrink-0`}>
        <div className="flex flex-col">
          <h2 className={`text-xl font-serif ${globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-white'} tracking-[0.2em] leading-none uppercase`}>
            {lang === 'CN' ? "系统架构配置" : "SYSTEM ARCHITECTURE"}
          </h2>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.4em] mt-2 opacity-100"
            style={{ color: globalTheme === 'retro' ? '#8B261D' : accentColor }}
          >
            {lang === 'CN' ? "核心引擎协议 · ENGINE PROTOCOL" : "VERSION 3.1 ALPHA CONTROL"}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end mr-2">
            <span className={`text-[8px] ${globalTheme === 'retro' ? 'text-[#8B261D]/60' : 'text-zinc-500'} tracking-widest uppercase mb-0.5`}>Status</span>
            <div className="flex items-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${globalTheme === 'retro' ? 'bg-[#8B261D]' : 'bg-green-500'} animate-pulse`}></div>
              <span className={`text-[10px] ${globalTheme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-300'} font-mono tracking-tighter uppercase`}>Active</span>
            </div>
          </div>
          <button
            onClick={() => {
              handleSaveApiKey();
              if (onClose) onClose();
            }}
            className={`flex items-center gap-2 px-5 py-2 ${globalTheme === 'retro' ? 'bg-[#8B261D] text-white' : 'text-black'} font-bold text-[11px] tracking-widest rounded-sm transition-all uppercase hover:brightness-110 active:scale-95`}
            style={{
              backgroundColor: globalTheme === 'retro' ? '#8B261D' : accentColor,
              boxShadow: globalTheme === 'retro' ? 'none' : `0 0 20px ${accentColor}33`
            }}
          >
            <Save className="w-3.5 h-3.5" />
            {lang === 'CN' ? "部署配置" : "DEPLOY"}
          </button>
          <button onClick={onClose} className={`p-1 ${globalTheme === 'retro' ? 'text-[#8B261D]/60 hover:text-[#8B261D]' : 'text-zinc-600 hover:text-white'} transition-colors`}>
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Content Area - Designed to fit without scroll */}
      <div className="flex-1 flex flex-col p-6 space-y-4 overflow-hidden">

        {/* API Key Section - Compressed & Brighter */}
        <div className={`grid grid-cols-12 gap-6 items-center border-b ${globalTheme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-900/40'} pb-4`}>
          <div className="col-span-3">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: globalTheme === 'retro' ? '#8B261D' : accentColor }}>
              01 / {lang === 'CN' ? "通证" : "TOKEN"}
            </h3>
            <p className={`text-[11px] ${globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-100'} font-medium leading-snug`}>Gemini API Key</p>
          </div>

          <div className="col-span-6 relative flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="sk-..."
                className={`w-full ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black' : 'bg-black/60 border-zinc-800 text-white'} rounded-sm px-4 py-2 text-sm focus:outline-none transition-all font-mono placeholder:text-zinc-800 pr-10`}
                style={{ borderLeftColor: globalTheme === 'retro' ? '#8B261D' : accentColor, borderLeftWidth: '3px' }}
              />
              {apiKeyInput && (
                <button
                  onClick={() => setApiKeyInput('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${globalTheme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-600'} hover:text-[#8B261D] transition-colors`}
                  title={lang === 'CN' ? "清空输入" : "Clear Input"}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <button
              onClick={handleClearApiKey}
              className={`p-2 ${globalTheme === 'retro' ? 'text-[#8B261D]/40 hover:text-[#8B261D] border-[#8B261D]/20 hover:bg-[#8B261D]/10' : 'text-zinc-500 hover:text-red-400 border-zinc-800 hover:bg-red-400/5'} border rounded-sm transition-all group`}
              title={lang === 'CN' ? "彻底抹除存储" : "Wipe from Storage"}
            >
              <Trash2 size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="col-span-3 flex justify-end">
            <button
              onClick={handleTestConnection}
              disabled={testing || !apiKeyInput}
              className={`flex items-center gap-2 ${globalTheme === 'retro' ? 'text-[#8B261D] border-[#8B261D]/20 hover:border-[#8B261D] hover:bg-[#8B261D]/5' : 'text-zinc-200 border-zinc-800 hover:border-zinc-700 hover:text-white'} transition-all text-xs font-bold uppercase tracking-wider border px-4 py-2 rounded-sm disabled:opacity-30 min-w-[140px] justify-center`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin' : ''}`} />
              {connectionStatus === 'success' ? 'CONNECTED' : (connectionStatus === 'error' ? 'FAILED' : (lang === 'CN' ? "测试连接" : "TEST LINK"))}
            </button>
          </div>
        </div>

        {/* Engine Mapping Section - High Density Grid */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: globalTheme === 'retro' ? '#8B261D' : accentColor }}>
              02 / {lang === 'CN' ? "引擎映射矩阵" : "ENGINE MAPPING MATRIX"}
            </h3>
            <span className={`text-[9px] ${globalTheme === 'retro' ? 'text-[#8B261D]/40' : 'text-zinc-400'} tracking-widest uppercase`}>Select Models for Individual Logic Layers</span>
          </div>

          <div className="grid grid-cols-2 gap-2 overflow-y-auto no-scrollbar pr-1">
            {ENGINE_CONFIGS.map((engine) => (
              <div key={engine.id} className={`${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/10' : 'bg-zinc-900/10 border-zinc-800/40'} border rounded-sm p-3.5 hover:bg-white/[0.02] transition-colors group`}>
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`text-[14px] font-bold ${globalTheme === 'retro' ? 'text-[#3D1A16]' : 'text-white'} uppercase tracking-[0.12em] border-l-2 pl-2`} style={{ borderColor: globalTheme === 'retro' ? '#8B261D' : accentColor }}>
                        {lang === 'CN' ? engine.name : engine.id.replace(/([A-Z])/g, ' $1').toUpperCase()}
                      </h4>
                      <span className={`text-[8px] ${globalTheme === 'retro' ? 'text-[#8B261D]/30' : 'text-zinc-400'} font-mono`}>ID_{engine.id.slice(0, 4).toUpperCase()}</span>
                    </div>
                    <p className={`text-[12px] ${globalTheme === 'retro' ? 'text-black/60' : 'text-white'} leading-tight font-medium opacity-90`}>
                      {engine.description}
                    </p>
                  </div>

                  <select
                    value={config.engines[engine.id as keyof typeof config.engines]}
                    onChange={(e) => handleSaveEngineModel(engine.id, e.target.value)}
                    className={`w-full ${globalTheme === 'retro' ? 'bg-white border-[#8B261D]/20 text-black' : 'bg-black/60 border-zinc-700/80 text-zinc-100'} rounded-sm px-3 py-1.5 text-xs focus:outline-none transition-all appearance-none cursor-pointer hover:border-zinc-500`}
                    style={{
                      backgroundImage: globalTheme === 'retro' ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%238B261D\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2352525b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1em'
                    }}
                  >
                    {(engine.type === 'text' ? AVAILABLE_MODELS.text : AVAILABLE_MODELS.image).map((model) => (
                      <option key={model} value={model} className={`${globalTheme === 'retro' ? 'bg-white text-black' : 'bg-[#0c0c0c] text-white'}`}>{model}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`px-8 py-2.5 border-t ${globalTheme === 'retro' ? 'border-[#8B261D]/10 bg-[#F4EFE0]' : 'border-zinc-900 bg-black/60'} flex justify-between items-center shrink-0`}>
        <button
          onClick={handleReset}
          className={`text-[9px] font-bold ${globalTheme === 'retro' ? 'text-[#8B261D]/40 hover:text-red-600' : 'text-zinc-700 hover:text-red-500/80'} transition-colors uppercase tracking-[0.2em] flex items-center gap-2`}
        >
          <RefreshCw size={10} />
          {lang === 'CN' ? "初始化系统配置" : "INIT SYSTEM"}
        </button>

        <div className="flex items-center gap-4">
          {savedMessage && (
            <span
              className="text-[10px] font-bold animate-pulse tracking-widest uppercase"
              style={{ color: globalTheme === 'retro' ? '#8B261D' : accentColor }}
            >
              {savedMessage}
            </span>
          )}
          <span className={`text-[9px] ${globalTheme === 'retro' ? 'text-[#8B261D]/30' : 'text-zinc-800'} font-mono`}>PROTOCOL.V.3.1.2024</span>
        </div>
      </div>
    </div>
  );
};

