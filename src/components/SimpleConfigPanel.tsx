import React, { useState, useEffect } from 'react';
import { configService } from '../services/configService';
import { APIConfig, ENGINE_CONFIGS, AVAILABLE_MODELS, ProviderConfig, ApiFormat } from '../types/config';
import { RefreshCw, X, Save, Trash2, Check, AlertTriangle, Globe, Shield, Zap } from 'lucide-react';
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

export const SimpleConfigPanel: React.FC<SimpleConfigPanelProps> = ({ onClose, driverType, lang = 'CN' }) => {
  const { theme: globalTheme } = useTheme();
  const [config, setConfig] = useState<APIConfig | null>(null);

  // Gemini Provider state
  const [geminiKey, setGeminiKey] = useState('');
  const [geminiMode, setGeminiMode] = useState<'official' | 'proxy'>('official');
  const [geminiBaseUrl, setGeminiBaseUrl] = useState('');
  const [geminiTest, setGeminiTest] = useState<ProviderTestResult>({ status: 'idle', message: '' });

  // Claude Provider state
  const [claudeKey, setClaudeKey] = useState('');
  const [claudeBaseUrl, setClaudeBaseUrl] = useState('');
  const [claudeApiFormat, setClaudeApiFormat] = useState<ApiFormat>('anthropic');
  const [claudeTest, setClaudeTest] = useState<ProviderTestResult>({ status: 'idle', message: '' });

  // UI state
  const [savedMessage, setSavedMessage] = useState('');

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

  // ============================================================
  // 加载配置
  // ============================================================
  useEffect(() => {
    const c = configService.getConfig();
    setConfig(c);
    setGeminiKey(c.gemini.apiKey);
    setGeminiMode(c.gemini.mode);
    setGeminiBaseUrl(c.gemini.baseUrl);
    setClaudeKey(c.claude.apiKey);
    setClaudeBaseUrl(c.claude.baseUrl);
    setClaudeApiFormat(c.claude.apiFormat || 'anthropic');
  }, []);

  if (!config) return null;

  // ============================================================
  // 保存
  // ============================================================
  const handleSave = () => {
    const newConfig: APIConfig = {
      gemini: { apiKey: geminiKey, mode: geminiMode, baseUrl: geminiBaseUrl },
      claude: { apiKey: claudeKey, mode: 'proxy', baseUrl: claudeBaseUrl, apiFormat: claudeApiFormat },
      engines: config.engines,
    };
    configService.saveConfig(newConfig);
    setConfig(newConfig);
    flashSaved(lang === 'EN' ? 'CONFIGS Saved' : '配置已保存');
  };

  const flashSaved = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(''), 2500);
  };

  // ============================================================
  // 连接测试
  // ============================================================
  const handleTestProvider = async (provider: 'gemini' | 'claude') => {
    // 先保存当前输入
    handleSave();

    const setter = provider === 'gemini' ? setGeminiTest : setClaudeTest;
    setter({ status: 'testing', message: '' });

    const result = await configService.testProviderConnection(provider);

    setter({
      status: result.success ? 'success' : 'error',
      message: result.message,
    });
    setTimeout(() => setter({ status: 'idle', message: '' }), 5000);
  };

  // ============================================================
  // 引擎模型选择
  // ============================================================
  const handleSaveEngineModel = (engineId: string, model: string) => {
    configService.setEngineModel(engineId, model);
    const c = configService.getConfig();
    setConfig(c);
    flashSaved(lang === 'EN' ? 'Engine Updated' : '引擎已更新');
  };

  // ============================================================
  // 重置
  // ============================================================
  const handleReset = () => {
    if (window.confirm(lang === 'CN' ? '确认恢复默认配置？所有 API Key 和模型选择将被清空。' : 'Reset to defaults? All API Keys and model config will be cleared.')) {
      configService.resetToDefault();
      const c = configService.getConfig();
      setConfig(c);
      setGeminiKey('');
      setGeminiMode('official');
      setGeminiBaseUrl('');
      setClaudeKey('');
      setClaudeBaseUrl('');
      setClaudeApiFormat('anthropic');
    }
  };

  // ============================================================
  // 样式工具函数
  // ============================================================
  const inputClass = `w-full ${isRetro
    ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-black placeholder:text-[#8B261D]/30'
    : 'bg-black/60 border-zinc-800 text-white placeholder:text-zinc-700'
    } rounded-sm px-4 py-2 text-sm focus:outline-none transition-all font-mono border`;

  const labelClass = `text-[10px] font-bold ${isRetro ? 'text-[#8B261D]' : 'text-zinc-400'} uppercase tracking-wider`;

  const sectionBorder = `border-b ${isRetro ? 'border-[#8B261D]/10' : 'border-zinc-800/40'}`;

  const renderTestButton = (provider: 'gemini' | 'claude', testState: ProviderTestResult, disabled: boolean) => {
    const statusColor = testState.status === 'success' ? '#22c55e' : testState.status === 'error' ? '#ef4444' : (isRetro ? '#8B261D' : accentColor);
    const StatusIcon = testState.status === 'success' ? Check : testState.status === 'error' ? AlertTriangle : Zap;
    const label = testState.status === 'testing' ? (lang === 'CN' ? '测试中...' : 'TESTING...')
      : testState.status === 'success' ? 'CONNECTED'
        : testState.status === 'error' ? 'FAILED'
          : (lang === 'CN' ? '测试连接' : 'TEST');

    return (
      <div className="flex flex-col items-end gap-1">
        <button
          onClick={() => handleTestProvider(provider)}
          disabled={disabled || testState.status === 'testing'}
          className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all disabled:opacity-30 min-w-[110px] justify-center`}
          style={{
            color: statusColor,
            borderColor: `${statusColor}44`,
          }}
        >
          <StatusIcon className={`w-3 h-3 ${testState.status === 'testing' ? 'animate-spin' : ''}`} />
          {label}
        </button>
        {testState.message && testState.status !== 'idle' && (
          <span className={`text-[9px] max-w-[180px] text-right leading-tight ${testState.status === 'success' ? 'text-green-500' : 'text-red-400'}`}>
            {testState.message}
          </span>
        )}
      </div>
    );
  };

  // ============================================================
  // 渲染 Provider 卡片
  // ============================================================

  const renderProviderCard = (
    provider: 'gemini' | 'claude',
    providerLabel: string,
    apiKey: string,
    setApiKeyFn: (v: string) => void,
    baseUrl: string,
    setBaseUrlFn: (v: string) => void,
    testState: ProviderTestResult,
    options?: { mode?: 'official' | 'proxy'; setModeFn?: (v: 'official' | 'proxy') => void }
  ) => {
    const isProxy = provider === 'claude' || options?.mode === 'proxy';
    const needsBaseUrl = isProxy;
    const testDisabled = !apiKey || (needsBaseUrl && !baseUrl);

    return (
      <div className={`flex-1 ${isRetro ? 'bg-[#F4EFE0]' : 'bg-zinc-900/30'} rounded-sm p-4 border ${isRetro ? 'border-[#8B261D]/10' : 'border-zinc-800/40'}`}>
        {/* Provider 标题 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: apiKey ? '#22c55e' : '#ef4444' }}></div>
            <span className={`text-sm font-bold ${isRetro ? 'text-[#3D1A16]' : 'text-white'} uppercase tracking-widest`}>
              {providerLabel}
            </span>
          </div>
          {renderTestButton(provider, testState, testDisabled)}
        </div>

        {/* API Key 输入 */}
        <div className="space-y-2">
          <div>
            <label className={labelClass}>API Key</label>
            <div className="relative mt-1">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKeyFn(e.target.value)}
                placeholder={provider === 'gemini' ? 'AIzaSy...' : 'sk-ant-...'}
                className={inputClass}
                style={{ borderLeftColor: isRetro ? '#8B261D' : accentColor, borderLeftWidth: '3px' }}
              />
              {apiKey && (
                <button
                  onClick={() => setApiKeyFn('')}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-600'} hover:text-red-400 transition-colors`}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Gemini 专有：接入模式选择 */}
          {provider === 'gemini' && options?.setModeFn && (
            <div>
              <label className={labelClass}>{lang === 'CN' ? '接入模式' : 'ACCESS MODE'}</label>
              <div className="flex gap-2 mt-1">
                {([
                  { value: 'official' as const, label: lang === 'CN' ? '官方直连' : 'OFFICIAL', icon: Globe },
                  { value: 'proxy' as const, label: lang === 'CN' ? '第三方代理' : 'PROXY', icon: Shield },
                ]).map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => options.setModeFn!(opt.value)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-sm text-[10px] font-bold uppercase tracking-wider border transition-all ${options.mode === opt.value
                      ? (isRetro ? 'bg-[#8B261D] text-white border-[#8B261D]' : `text-black border-transparent`)
                      : (isRetro ? 'bg-transparent text-[#8B261D]/60 border-[#8B261D]/20 hover:border-[#8B261D]/40' : 'bg-transparent text-zinc-500 border-zinc-700 hover:border-zinc-500')
                      }`}
                    style={options.mode === opt.value && !isRetro ? { backgroundColor: accentColor } : {}}
                  >
                    <opt.icon size={12} />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Base URL（代理模式或 Claude） */}
          {needsBaseUrl && (
            <div>
              <label className={labelClass}>{lang === 'CN' ? '代理地址 (BASE URL)' : 'PROXY BASE URL'}</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  value={baseUrl}
                  onChange={(e) => setBaseUrlFn(e.target.value)}
                  placeholder={provider === 'claude' && claudeApiFormat === 'anthropic' 
                    ? 'https://luckycodecc.cn/claude' 
                    : 'https://api.yourproxy.com/v1'}
                  className={inputClass}
                  style={{ borderLeftColor: isRetro ? '#8B261D' : accentColor, borderLeftWidth: '3px' }}
                />
                {baseUrl && (
                  <button
                    onClick={() => setBaseUrlFn('')}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-600'} hover:text-red-400 transition-colors`}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              {provider === 'claude' && (
                <p className={`text-[9px] ${isRetro ? 'text-[#3D1A16]/50' : 'text-zinc-500'} italic mt-1`}>
                  {lang === 'CN'
                    ? '* Claude 必须通过第三方代理访问（浏览器 CORS 限制）'
                    : '* Claude requires a proxy due to browser CORS restrictions'}
                </p>
              )}
            </div>
          )}

          {/* Claude API 协议格式选择 */}
          {provider === 'claude' && (
            <div>
              <label className={labelClass}>{lang === 'CN' ? 'API 协议格式' : 'API FORMAT'}</label>
              <div className="flex gap-1 mt-1">
                {([
                  { value: 'anthropic' as ApiFormat, label: lang === 'CN' ? 'Anthropic 原生' : 'Anthropic Native', desc: '/v1/messages' },
                  { value: 'openai' as ApiFormat, label: lang === 'CN' ? 'OpenAI 兼容' : 'OpenAI Compatible', desc: '/chat/completions' },
                ] as const).map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setClaudeApiFormat(opt.value)}
                    className={`flex-1 py-1.5 px-2 text-[10px] rounded-sm border transition-all tracking-wider flex flex-col items-center gap-0.5
                      ${claudeApiFormat === opt.value
                        ? isRetro
                          ? 'bg-[#3D1A16] text-[#F4EFE0] border-[#8B261D]'
                          : `bg-zinc-800 text-white border-zinc-600`
                        : isRetro
                          ? 'bg-transparent text-[#3D1A16]/40 border-[#8B261D]/15 hover:border-[#8B261D]/40'
                          : 'bg-transparent text-zinc-500 border-zinc-800/40 hover:border-zinc-600'
                      }`}
                  >
                    <span className="font-medium">{opt.label}</span>
                    <span className="opacity-60 text-[8px]">{opt.desc}</span>
                  </button>
                ))}
              </div>
              <p className={`text-[8px] ${isRetro ? 'text-[#3D1A16]/40' : 'text-zinc-600'} mt-1`}>
                {lang === 'CN'
                  ? '大部分 Claude 代理使用 Anthropic 原生格式，如确认是 OpenAI 兼容格式请切换'
                  : 'Most Claude proxies use Anthropic native format. Switch to OpenAI if your proxy requires it.'}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ============================================================
  // 主渲染
  // ============================================================

  return (
    <div
      className={`w-[900px] max-h-[85vh] ${isRetro ? 'bg-[#F9F7F1]' : 'bg-[#0c0c0c]/90 backdrop-blur-xl'} rounded-sm flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500 relative`}
      style={{
        border: isRetro ? '2px solid #8B261D' : `1px solid ${accentColor}44`,
        boxShadow: isRetro
          ? '8px 8px 0px 0px rgba(139,38,29,0.1)'
          : `0 0 0 1px #1a1a1a, 0 30px 100px -20px rgba(0,0,0,0.9), 0 0 40px ${accentColor}11`
      }}
    >
      {/* ═════════ Header ═════════ */}
      <div className={`flex items-center justify-between px-8 py-3 border-b ${isRetro ? 'border-[#8B261D]/20 bg-[#F9F7F1]' : 'border-zinc-900/50'} shrink-0`}>
        <div className="flex flex-col">
          <h2 className={`text-xl font-serif ${isRetro ? 'text-[#8B261D]' : 'text-white'} tracking-[0.2em] leading-none uppercase`}>
            {lang === 'CN' ? "系统架构配置" : "SYSTEM ARCHITECTURE"}
          </h2>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.4em] mt-2 opacity-100"
            style={{ color: isRetro ? '#8B261D' : accentColor }}
          >
            {lang === 'CN' ? "核心引擎协议 · ENGINE PROTOCOL" : "VERSION 3.2 ALPHA CONTROL"}
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
              boxShadow: isRetro ? 'none' : `0 0 20px ${accentColor}33`
            }}
          >
            <Save className="w-3.5 h-3.5" />
            {lang === 'CN' ? "部署配置" : "DEPLOY"}
          </button>
          <button onClick={onClose} className={`p-1 ${isRetro ? 'text-[#8B261D]/60 hover:text-[#8B261D]' : 'text-zinc-600 hover:text-white'} transition-colors`}>
            <X size={22} />
          </button>
        </div>
      </div>

      {/* ═════════ Content ═════════ */}
      <div className="flex-1 flex flex-col p-6 space-y-4 overflow-y-auto">

        {/* ── Section 01: Provider 配置 ── */}
        <div className={sectionBorder + ' pb-4'}>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: isRetro ? '#8B261D' : accentColor }}>
            01 / {lang === 'CN' ? "通证配置" : "PROVIDER CONFIG"}
            <span className={`ml-3 text-[9px] ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-500'} tracking-widest normal-case font-medium`}>
              {lang === 'CN' ? '每个 Provider 独立配置 API Key 和接入方式' : 'Configure each provider independently'}
            </span>
          </h3>

          <div className="flex gap-4">
            {/* Gemini Card */}
            {renderProviderCard(
              'gemini', 'Gemini',
              geminiKey, setGeminiKey,
              geminiBaseUrl, setGeminiBaseUrl,
              geminiTest,
              { mode: geminiMode, setModeFn: setGeminiMode }
            )}

            {/* Claude Card */}
            {renderProviderCard(
              'claude', 'Claude',
              claudeKey, setClaudeKey,
              claudeBaseUrl, setClaudeBaseUrl,
              claudeTest
            )}
          </div>
        </div>

        {/* ── Section 02: 引擎映射矩阵 ── */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: isRetro ? '#8B261D' : accentColor }}>
              02 / {lang === 'CN' ? "引擎映射矩阵" : "ENGINE MAPPING MATRIX"}
            </h3>
            <span className={`text-[9px] ${isRetro ? 'text-[#8B261D]/40' : 'text-zinc-500'} tracking-widest uppercase`}>
              {lang === 'CN' ? '为每个引擎选择模型 · 系统自动路由到对应 Provider' : 'Select Models · Auto-routed to Provider'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 overflow-y-auto no-scrollbar pr-1">
            {ENGINE_CONFIGS.map((engine, index) => {
              let modelList: string[];
              if (index < 4) {
                modelList = (AVAILABLE_MODELS as any).core || AVAILABLE_MODELS.text;
              } else if (engine.type === 'image') {
                modelList = AVAILABLE_MODELS.image;
              } else {
                modelList = AVAILABLE_MODELS.text;
              }

              const currentModel = config.engines[engine.id as keyof typeof config.engines];
              const isClaude = currentModel.includes('claude');
              const isGeminiProxy = !isClaude && geminiMode === 'proxy';
              const providerLabel = isClaude ? 'Claude' : (isGeminiProxy ? 'Gemini (Proxy)' : 'Gemini');
              const providerColor = isClaude ? '#c084fc' : '#22d3ee';

              // 判断该引擎当前选中模型的 Provider 是否已配置
              const providerOk = isClaude
                ? !!(claudeKey && claudeBaseUrl)
                : !!(geminiKey && (geminiMode === 'official' || geminiBaseUrl));

              return (
                <div key={engine.id} className={`${isRetro ? 'bg-[#F4EFE0] border-[#8B261D]/10 hover:border-[#8B261D]/30' : 'bg-zinc-900/10 border-zinc-800/40 hover:bg-white/[0.02]'} border rounded-sm p-3.5 transition-colors group`}>
                  <div className="flex flex-col h-full justify-between">
                    <div className="space-y-1 mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-[14px] font-bold ${isRetro ? 'text-[#3D1A16]' : 'text-white'} uppercase tracking-[0.12em] border-l-2 pl-2`} style={{ borderColor: isRetro ? '#8B261D' : accentColor }}>
                          {lang === 'CN' ? engine.name : engine.id.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        </h4>
                        <div className="flex items-center gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${providerOk ? 'bg-green-500' : 'bg-red-400'}`}></div>
                          <span className={`text-[8px] font-mono tracking-tighter`} style={{ color: isRetro ? '#8B261D66' : providerColor }}>
                            {providerLabel}
                          </span>
                        </div>
                      </div>
                      <p className={`text-[12px] ${isRetro ? 'text-black/60' : 'text-white'} leading-tight font-medium opacity-90`}>
                        {engine.description}
                      </p>
                    </div>

                    <select
                      value={currentModel}
                      onChange={(e) => handleSaveEngineModel(engine.id, e.target.value)}
                      className={`w-full ${isRetro ? 'bg-[#F4EFE0] border-[#8B261D]/20 text-black' : 'bg-black/60 border-zinc-700/80 text-zinc-100'} rounded-sm px-3 py-1.5 text-xs focus:outline-none transition-all appearance-none cursor-pointer hover:border-zinc-500`}
                      style={{
                        backgroundImage: isRetro ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%238B261D\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2352525b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1em'
                      }}
                    >
                      {modelList.map((model: string) => (
                        <option key={model} value={model} className={`${isRetro ? 'bg-[#F4EFE0] text-black' : 'bg-[#0c0c0c] text-white'}`}>{model}</option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═════════ Footer ═════════ */}
      <div className={`px-8 py-2.5 border-t ${isRetro ? 'border-[#8B261D]/10 bg-[#F9F7F1]' : 'border-zinc-900 bg-black/60'} flex justify-between items-center shrink-0`}>
        <button
          onClick={handleReset}
          className={`text-[9px] font-bold ${isRetro ? 'text-[#8B261D]/40 hover:text-red-600' : 'text-zinc-700 hover:text-red-500/80'} transition-colors uppercase tracking-[0.2em] flex items-center gap-2`}
        >
          <RefreshCw size={10} />
          {lang === 'CN' ? "初始化系统配置" : "INIT SYSTEM"}
        </button>

        <span className={`text-[9px] ${isRetro ? 'text-[#8B261D]/30' : 'text-zinc-800'} font-mono`}>PROTOCOL.V.3.2.2025</span>
      </div>
    </div>
  );
};
