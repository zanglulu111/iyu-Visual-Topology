import React, { useEffect, useState } from 'react';
import { configService, ApiPreset } from '../services/configService';
import {
  APIConfig,
  AVAILABLE_MODELS,
  ENGINE_CONFIGS,
  ProviderId,
  ProviderMode,
  PROVIDER_COLORS,
  PROVIDER_LABELS,
  getEffectiveBaseUrl,
  getModelOption,
  getProviderForModel,
} from '../types/config';
import {
  AlertTriangle,
  Check,
  Globe,
  KeyRound,
  Plus,
  RefreshCw,
  Route,
  Save,
  Server,
  Shield,
  Star,
  X,
  Zap,
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { DriverType } from '../../types';

interface SimpleConfigPanelProps {
  onClose?: () => void;
  driverType?: DriverType | null;
  lang?: 'CN' | 'EN';
}

type ConnectionStatus = 'idle' | 'testing' | 'success' | 'error';

interface ProviderTestResult {
  status: ConnectionStatus;
  message: string;
}

const PROVIDERS: ProviderId[] = ['gemini', 'claude', 'openai'];

const EMPTY_TESTS: Record<ProviderId, ProviderTestResult> = {
  gemini: { status: 'idle', message: '' },
  claude: { status: 'idle', message: '' },
  openai: { status: 'idle', message: '' },
};

const providerPlaceholders: Record<ProviderId, { key: string; baseUrl: string }> = {
  gemini: {
    key: 'AIzaSy...',
    baseUrl: 'https://api.your-gemini-proxy.com/v1',
  },
  claude: {
    key: 'sk-ant-...',
    baseUrl: 'https://api.anthropic.com 或你的 Claude 中转地址',
  },
  openai: {
    key: 'sk-...',
    baseUrl: 'https://api.openai.com/v1 或你的 OpenAI 中转地址',
  },
};

export const SimpleConfigPanel: React.FC<SimpleConfigPanelProps> = ({ onClose, driverType, lang = 'CN' }) => {
  const { theme: globalTheme } = useTheme();
  const [config, setConfig] = useState<APIConfig | null>(null);
  const [tests, setTests] = useState<Record<ProviderId, ProviderTestResult>>(EMPTY_TESTS);
  const [savedMessage, setSavedMessage] = useState('');
  const [presets, setPresets] = useState<ApiPreset[]>([]);
  const [presetName, setPresetName] = useState('');
  const [presetProvider, setPresetProvider] = useState<ProviderId>('openai');

  const isRetro = globalTheme === 'retro';

  const getThemeColor = (id: DriverType | null | undefined) => {
    if (isRetro) return '#8B261D';
    switch (id) {
      case DriverType.COMMERCIAL: return '#22d3ee';
      case DriverType.NARRATIVE: return '#D4AF37';
      case DriverType.AESTHETIC: return '#fb7185';
      case DriverType.EXPERIMENTAL: return '#c084fc';
      case DriverType.TRAILER: return '#fb923c';
      default: return '#D4AF37';
    }
  };

  const accentColor = getThemeColor(driverType);

  useEffect(() => {
    setConfig(configService.getConfig());
    setPresets(configService.getPresets());
  }, []);

  if (!config) return null;

  const flashSaved = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(''), 2500);
  };

  const updateProvider = (provider: ProviderId, updates: Partial<APIConfig[ProviderId]>) => {
    setConfig(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        [provider]: {
          ...prev[provider],
          ...updates,
        },
      };
    });
  };

  const saveConfig = (nextConfig: APIConfig, message?: string) => {
    configService.saveConfig(nextConfig);
    setConfig(nextConfig);
    flashSaved(message || (lang === 'EN' ? 'CONFIG SAVED' : '配置已保存'));
  };

  const handleSave = () => {
    saveConfig(config);
  };

  const handleTestProvider = async (provider: ProviderId) => {
    configService.saveConfig(config);
    setTests(prev => ({ ...prev, [provider]: { status: 'testing', message: '' } }));

    const result = await configService.testProviderConnection(provider);
    setTests(prev => ({
      ...prev,
      [provider]: {
        status: result.success ? 'success' : 'error',
        message: result.message,
      },
    }));

    setTimeout(() => {
      setTests(prev => ({ ...prev, [provider]: { status: 'idle', message: '' } }));
    }, 5000);
  };

  const handleSaveEngineModel = (engineId: string, model: string) => {
    const nextConfig: APIConfig = {
      ...config,
      engines: {
        ...config.engines,
        [engineId]: model,
      },
    };
    saveConfig(nextConfig, lang === 'EN' ? 'ENGINE ROUTE SAVED' : '引擎路由已保存');
  };

  const handleReset = () => {
    if (!window.confirm(lang === 'CN' ? '确认恢复默认配置？API Key 与模型路由会被重置。' : 'Reset to defaults? API keys and routes will be cleared.')) {
      return;
    }
    configService.resetToDefault();
    const next = configService.getConfig();
    setConfig(next);
    setTests(EMPTY_TESTS);
    flashSaved(lang === 'EN' ? 'RESET DONE' : '已恢复默认配置');
  };

  const handleSavePreset = () => {
    const providerConfig = config[presetProvider];
    if (!providerConfig.apiKey) return;

    const name = presetName.trim() || `${PROVIDER_LABELS[presetProvider]} ${presets.length + 1}`;
    const preset: ApiPreset = {
      id: Date.now().toString(36),
      name,
      provider: presetProvider,
      apiKey: providerConfig.apiKey,
      baseUrl: providerConfig.baseUrl,
      mode: providerConfig.mode,
      apiFormat: providerConfig.apiFormat,
    };

    configService.savePreset(preset);
    setPresets(configService.getPresets());
    setPresetName('');
    flashSaved(lang === 'CN' ? `已保存: ${name}` : `Saved: ${name}`);
  };

  const handleApplyPreset = (preset: ApiPreset) => {
    configService.applyPreset(preset);
    setConfig(configService.getConfig());
    flashSaved(lang === 'CN' ? `已切换: ${preset.name}` : `Applied: ${preset.name}`);
  };

  const handleDeletePreset = (id: string) => {
    configService.deletePreset(id);
    setPresets(configService.getPresets());
  };

  const inputClass = `w-full ${isRetro
    ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-black placeholder:text-[#8B261D]/30'
    : 'bg-black/60 border-zinc-800 text-white placeholder:text-zinc-700'
    } rounded-sm px-4 py-2 text-sm focus:outline-none transition-all font-mono border`;

  const labelClass = `text-[10px] font-bold ${isRetro ? 'text-[#8B261D]' : 'text-zinc-400'} uppercase tracking-wider`;
  const panelBorder = isRetro ? 'border-[#8B261D]/10' : 'border-zinc-800/40';
  const sectionBorder = `border-b ${isRetro ? 'border-[#8B261D]/10' : 'border-zinc-800/40'}`;

  const isProviderReady = (provider: ProviderId) => {
    const providerConfig = config[provider];
    if (!providerConfig.apiKey) return false;
    if (provider === 'gemini' && providerConfig.mode === 'official') return true;
    return !!getEffectiveBaseUrl(provider, providerConfig);
  };

  const renderTestButton = (provider: ProviderId) => {
    const testState = tests[provider];
    const statusColor = testState.status === 'success'
      ? '#22c55e'
      : testState.status === 'error'
        ? '#ef4444'
        : (isRetro ? '#8B261D' : PROVIDER_COLORS[provider]);
    const StatusIcon = testState.status === 'success' ? Check : testState.status === 'error' ? AlertTriangle : Zap;
    const label = testState.status === 'testing'
      ? (lang === 'CN' ? '测试中...' : 'TESTING...')
      : testState.status === 'success'
        ? 'CONNECTED'
        : testState.status === 'error'
          ? 'FAILED'
          : (lang === 'CN' ? '测试连接' : 'TEST');

    return (
      <div className="flex flex-col items-end gap-1">
        <button
          onClick={() => handleTestProvider(provider)}
          disabled={!isProviderReady(provider) || testState.status === 'testing'}
          className="flex items-center gap-1.5 px-3 py-1.5 border rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all disabled:opacity-30 min-w-[108px] justify-center"
          style={{
            color: statusColor,
            borderColor: `${statusColor}44`,
          }}
        >
          <StatusIcon className={`w-3 h-3 ${testState.status === 'testing' ? 'animate-spin' : ''}`} />
          {label}
        </button>
        {testState.message && testState.status !== 'idle' && (
          <span className={`text-[9px] max-w-[200px] text-right leading-tight ${testState.status === 'success' ? 'text-green-500' : 'text-red-400'}`}>
            {testState.message}
          </span>
        )}
      </div>
    );
  };

  const renderModeSelector = (provider: ProviderId) => {
    const mode = config[provider].mode;
    const options: { value: ProviderMode; label: string; icon: typeof Globe }[] = [
      { value: 'official', label: lang === 'CN' ? '官方入口' : 'OFFICIAL', icon: Globe },
      { value: 'proxy', label: lang === 'CN' ? '自定义 API' : 'CUSTOM API', icon: Shield },
    ];

    return (
      <div>
        <label className={labelClass}>{lang === 'CN' ? '接入模式' : 'ACCESS MODE'}</label>
        <div className="flex gap-2 mt-1">
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => updateProvider(provider, { mode: opt.value })}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-sm text-[10px] font-bold uppercase tracking-wider border transition-all ${mode === opt.value
                ? (isRetro ? 'bg-[#8B261D] text-white border-[#8B261D]' : 'text-black border-transparent')
                : (isRetro ? 'bg-transparent text-[#8B261D]/60 border-[#8B261D]/20 hover:border-[#8B261D]/40' : 'bg-transparent text-zinc-500 border-zinc-700 hover:border-zinc-500')
                }`}
              style={mode === opt.value && !isRetro ? { backgroundColor: PROVIDER_COLORS[provider] } : {}}
            >
              <opt.icon size={12} />
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderProviderCard = (provider: ProviderId) => {
    const providerConfig = config[provider];
    const ready = isProviderReady(provider);
    const providerColor = isRetro ? '#8B261D' : PROVIDER_COLORS[provider];
    const showBaseUrl = provider !== 'gemini' || providerConfig.mode === 'proxy';

    return (
      <div className={`${isRetro ? 'bg-[#F4EFE0]' : 'bg-zinc-900/30'} rounded-sm p-4 border ${panelBorder}`}>
        <div className="flex items-start justify-between mb-3 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ready ? '#22c55e' : '#ef4444' }} />
              <span className={`text-sm font-bold ${isRetro ? 'text-[#3D1A16]' : 'text-white'} uppercase tracking-widest`}>
                {PROVIDER_LABELS[provider]}
              </span>
            </div>
            <p className={`mt-1 text-[10px] leading-tight ${isRetro ? 'text-[#3D1A16]/55' : 'text-zinc-500'}`}>
              {provider === 'gemini' && (lang === 'CN' ? 'Gemini 官方或 OpenAI 兼容代理' : 'Google native or OpenAI-compatible proxy')}
              {provider === 'claude' && (lang === 'CN' ? 'Anthropic 原生 Messages 接口' : 'Anthropic Messages compatible')}
              {provider === 'openai' && (lang === 'CN' ? 'OpenAI 官方或兼容网关' : 'OpenAI official or compatible gateway')}
            </p>
          </div>
          {renderTestButton(provider)}
        </div>

        <div className="space-y-3">
          <div>
            <label className={labelClass}>API Key</label>
            <div className="relative mt-1">
              <KeyRound className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-600'}`} />
              <input
                type="password"
                value={providerConfig.apiKey}
                onChange={(event) => updateProvider(provider, { apiKey: event.target.value })}
                placeholder={providerPlaceholders[provider].key}
                className={`${inputClass} pl-9`}
                style={{ borderLeftColor: providerColor, borderLeftWidth: '3px' }}
              />
              {providerConfig.apiKey && (
                <button
                  onClick={() => updateProvider(provider, { apiKey: '' })}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-600'} hover:text-red-400 transition-colors`}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {renderModeSelector(provider)}

          {showBaseUrl && (
            <div>
              <label className={labelClass}>{lang === 'CN' ? 'API / Gateway 地址' : 'API / GATEWAY URL'}</label>
              <div className="relative mt-1">
                <Server className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-600'}`} />
                <input
                  type="text"
                  value={providerConfig.baseUrl}
                  onChange={(event) => updateProvider(provider, { baseUrl: event.target.value })}
                  placeholder={providerPlaceholders[provider].baseUrl}
                  className={`${inputClass} pl-9`}
                  style={{ borderLeftColor: providerColor, borderLeftWidth: '3px' }}
                />
              </div>
              <p className={`text-[9px] mt-1 ${isRetro ? 'text-[#3D1A16]/50' : 'text-zinc-500'}`}>
                {providerConfig.mode === 'official'
                  ? (lang === 'CN' ? '官方入口会走应用内代理，避免浏览器跨域问题。' : 'Official endpoint is routed through the app proxy when needed.')
                  : (lang === 'CN' ? '填写第三方代理或自建网关的基础地址。' : 'Use a third-party proxy or your own gateway base URL.')}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`w-[1040px] max-h-[88vh] ${isRetro ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]/90 backdrop-blur-xl'} rounded-sm flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500 relative`}
      style={{
        border: isRetro ? '2px solid #8B261D' : `1px solid ${accentColor}44`,
        boxShadow: isRetro
          ? '8px 8px 0px 0px rgba(139,38,29,0.1)'
          : `0 0 0 1px #1a1a1a, 0 30px 100px -20px rgba(0,0,0,0.9), 0 0 40px ${accentColor}11`,
      }}
    >
      <div className={`flex items-center justify-between px-8 py-3 border-b ${isRetro ? 'border-[#8B261D]/20 bg-[#F9F7F1]' : 'border-zinc-900/50'} shrink-0`}>
        <div className="flex flex-col">
          <h2 className={`text-xl font-serif ${isRetro ? 'text-[#8B261D]' : 'text-white'} tracking-[0.2em] leading-none uppercase`}>
            {lang === 'CN' ? '系统架构配置' : 'SYSTEM ARCHITECTURE'}
          </h2>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.4em] mt-2 opacity-100"
            style={{ color: isRetro ? '#8B261D' : accentColor }}
          >
            {lang === 'CN' ? '三供应商 API · 多引擎模型路由' : 'MULTI PROVIDER MODEL ROUTING'}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {savedMessage && (
            <span
              className="text-[10px] font-bold animate-pulse tracking-widest uppercase"
              style={{ color: isRetro ? '#8B261D' : accentColor }}
            >
              {savedMessage}
            </span>
          )}
          <button
            onClick={() => { handleSave(); if (onClose) onClose(); }}
            className={`flex items-center gap-2 px-5 py-2 ${isRetro ? 'bg-[#8B261D] text-white' : 'text-black'} font-bold text-[11px] tracking-widest rounded-sm transition-all uppercase hover:brightness-110 active:scale-95`}
            style={{
              backgroundColor: isRetro ? '#8B261D' : accentColor,
              boxShadow: isRetro ? 'none' : `0 0 20px ${accentColor}33`,
            }}
          >
            <Save className="w-3.5 h-3.5" />
            {lang === 'CN' ? '部署配置' : 'DEPLOY'}
          </button>
          <button onClick={onClose} className={`p-1 ${isRetro ? 'text-[#8B261D]/60 hover:text-[#8B261D]' : 'text-zinc-600 hover:text-white'} transition-colors`}>
            <X size={22} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6 space-y-4 overflow-y-auto">
        <div className={sectionBorder + ' pb-4'}>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: isRetro ? '#8B261D' : accentColor }}>
            01 / {lang === 'CN' ? 'API 供应商' : 'API PROVIDERS'}
            <span className={`ml-3 text-[9px] ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-500'} tracking-widest normal-case font-medium`}>
              {lang === 'CN' ? '每个供应商独立保存 Key 与入口' : 'Independent key and endpoint for each provider'}
            </span>
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {PROVIDERS.map(provider => renderProviderCard(provider))}
          </div>
        </div>

        <div className={sectionBorder + ' pb-4'}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: isRetro ? '#8B261D' : accentColor }}>
              02 / {lang === 'CN' ? 'API 预设' : 'API PRESETS'}
              <span className={`ml-3 text-[9px] ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-500'} tracking-widest normal-case font-medium`}>
                {lang === 'CN' ? '保存任意供应商配置，一键切换' : 'Save and switch provider configs'}
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <select
              value={presetProvider}
              onChange={(event) => setPresetProvider(event.target.value as ProviderId)}
              className={`${isRetro ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-black' : 'bg-black/60 border-zinc-800 text-white'} rounded-sm px-3 py-1.5 text-xs focus:outline-none transition-all font-mono border`}
            >
              {PROVIDERS.map(provider => (
                <option key={provider} value={provider}>{PROVIDER_LABELS[provider]}</option>
              ))}
            </select>
            <input
              type="text"
              value={presetName}
              onChange={(event) => setPresetName(event.target.value)}
              placeholder={lang === 'CN' ? '输入预设名称...' : 'Preset name...'}
              className={`flex-1 ${isRetro
                ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-black placeholder:text-[#8B261D]/30'
                : 'bg-black/60 border-zinc-800 text-white placeholder:text-zinc-700'
                } rounded-sm px-3 py-1.5 text-xs focus:outline-none transition-all font-mono border`}
            />
            <button
              onClick={handleSavePreset}
              disabled={!config[presetProvider].apiKey}
              className="flex items-center gap-1.5 px-3 py-1.5 border rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all disabled:opacity-30 whitespace-nowrap"
              style={{
                color: isRetro ? '#8B261D' : PROVIDER_COLORS[presetProvider],
                borderColor: isRetro ? '#8B261D44' : `${PROVIDER_COLORS[presetProvider]}44`,
              }}
            >
              <Plus className="w-3 h-3" />
              {lang === 'CN' ? '保存当前' : 'SAVE'}
            </button>
          </div>

          {presets.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => {
                const providerConfig = config[preset.provider];
                const isActive = preset.apiKey === providerConfig.apiKey && preset.baseUrl === providerConfig.baseUrl;
                const presetColor = isRetro ? '#8B261D' : PROVIDER_COLORS[preset.provider];

                return (
                  <div
                    key={preset.id}
                    className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-[10px] font-mono transition-all cursor-pointer ${isActive
                      ? isRetro
                        ? 'bg-[#8B261D] text-white border-[#8B261D]'
                        : 'bg-white/10 text-white border-zinc-500'
                      : isRetro
                        ? 'bg-[#F4EFE0] text-[#3D1A16]/70 border-[#8B261D]/15 hover:border-[#8B261D]/40'
                        : 'bg-black/30 text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300'
                      }`}
                    onClick={() => handleApplyPreset(preset)}
                  >
                    <Star className={`w-3 h-3 ${isActive ? 'fill-current' : ''}`} style={{ color: presetColor }} />
                    <span className="tracking-wider uppercase">{preset.name}</span>
                    <span className="text-[8px] opacity-50">{PROVIDER_LABELS[preset.provider]}</span>
                    <button
                      onClick={(event) => { event.stopPropagation(); handleDeletePreset(preset.id); }}
                      className={`ml-1 opacity-0 group-hover:opacity-100 transition-opacity ${isRetro ? 'hover:text-red-600' : 'hover:text-red-400'}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: isRetro ? '#8B261D' : accentColor }}>
              03 / {lang === 'CN' ? '引擎模型路由' : 'ENGINE MODEL ROUTING'}
            </h3>
            <span className={`text-[9px] ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-500'} tracking-widest uppercase flex items-center gap-1.5`}>
              <Route className="w-3 h-3" />
              {lang === 'CN' ? '模型名决定调用哪套 API' : 'Model decides provider route'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 overflow-y-auto no-scrollbar pr-1">
            {ENGINE_CONFIGS.map((engine) => {
              const baseList = engine.type === 'image' ? AVAILABLE_MODELS.image : AVAILABLE_MODELS.core;
              const currentModel = config.engines[engine.id as keyof typeof config.engines];
              const modelList = baseList.includes(currentModel) ? baseList : [currentModel, ...baseList];
              const provider = getProviderForModel(currentModel);
              const modelMeta = getModelOption(currentModel);
              const providerConfig = config[provider];
              const providerOk = isProviderReady(provider);
              const providerColor = isRetro ? '#8B261D' : PROVIDER_COLORS[provider];

              return (
                <div key={engine.id} className={`${isRetro ? 'bg-[#F4EFE0] border-[#8B261D]/10 hover:border-[#8B261D]/30' : 'bg-zinc-900/10 border-zinc-800/40 hover:bg-white/[0.02]'} border rounded-sm p-3.5 transition-colors group`}>
                  <div className="flex flex-col h-full justify-between">
                    <div className="space-y-1 mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-[14px] font-bold ${isRetro ? 'text-[#3D1A16]' : 'text-white'} uppercase tracking-[0.12em] border-l-2 pl-2`} style={{ borderColor: providerColor }}>
                          {lang === 'CN' ? engine.name : engine.id.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        </h4>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${providerOk ? 'bg-green-500' : 'bg-red-400'}`} />
                          <span className="text-[8px] font-mono tracking-tighter" style={{ color: providerColor }}>
                            {PROVIDER_LABELS[provider]}
                          </span>
                        </div>
                      </div>
                      <p className={`text-[12px] ${isRetro ? 'text-black/60' : 'text-white'} leading-tight font-medium opacity-90`}>
                        {engine.description}
                      </p>
                      <p className={`text-[9px] ${isRetro ? 'text-[#3D1A16]/45' : 'text-zinc-600'} leading-tight`}>
                        {providerConfig.mode === 'official'
                          ? (lang === 'CN' ? '官方入口' : 'Official')
                          : (lang === 'CN' ? '自定义 API' : 'Custom API')}
                        {modelMeta?.canSeeImages ? ` · ${lang === 'CN' ? '支持识图' : 'vision-capable'}` : ''}
                      </p>
                    </div>

                    <select
                      value={currentModel}
                      onChange={(event) => handleSaveEngineModel(engine.id, event.target.value)}
                      className={`w-full ${isRetro ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-black' : 'bg-black/60 border-zinc-700/80 text-zinc-100'} rounded-sm px-3 py-1.5 text-xs focus:outline-none transition-all appearance-none cursor-pointer hover:border-zinc-500`}
                      style={{
                        backgroundImage: isRetro ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%238B261D\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2352525b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1em',
                      }}
                    >
                      {modelList.map((model) => {
                        const optionMeta = getModelOption(model);
                        const optionProvider = optionMeta?.provider || getProviderForModel(model);
                        return (
                          <option key={model} value={model} className={`${isRetro ? 'bg-[#F4EFE0] text-black' : 'bg-[#0c0c0c] text-white'}`}>
                            {`${PROVIDER_LABELS[optionProvider]} · ${optionMeta?.name || model}`}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`px-8 py-2.5 border-t ${isRetro ? 'border-[#8B261D]/10 bg-[#F9F7F1]' : 'border-zinc-900 bg-black/60'} flex justify-between items-center shrink-0`}>
        <button
          onClick={handleReset}
          className={`text-[9px] font-bold ${isRetro ? 'text-[#8B261D]/40 hover:text-red-600' : 'text-zinc-700 hover:text-red-500/80'} transition-colors uppercase tracking-[0.2em] flex items-center gap-2`}
        >
          <RefreshCw size={10} />
          {lang === 'CN' ? '初始化系统配置' : 'INIT SYSTEM'}
        </button>

        <span className={`text-[9px] ${isRetro ? 'text-[#8B261D]/30' : 'text-zinc-800'} font-mono`}>PROTOCOL.V.3.3.2026</span>
      </div>
    </div>
  );
};

