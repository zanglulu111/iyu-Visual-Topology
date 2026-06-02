import React, { useEffect, useMemo, useState } from 'react';
import { configService } from '../services/configService';
import {
  APIConfig,
  API_FORMAT_LABELS,
  ApiFormat,
  ApiKeyEntry,
  ENGINE_CONFIGS,
  EngineId,
  MODEL_CATALOG,
  OFFICIAL_BASE_URLS,
  PROVIDER_LABELS,
  ProviderId,
  getModelOption,
  maskApiKey,
} from '../types/config';
import {
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Check,
  Cloud,
  Eye,
  Globe,
  KeyRound,
  Plus,
  RefreshCw,
  Route,
  Save,
  Shield,
  SlidersHorizontal,
  Trash2,
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

type TestState = {
  status: 'idle' | 'testing' | 'success' | 'error';
  message: string;
};

const API_FORMAT_OPTIONS: ApiFormat[] = ['openai', 'anthropic', 'google'];
const inputBase = 'w-full rounded-sm border px-3 py-2 text-xs font-mono outline-none ring-0 transition-all focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0';
const providerOrder: ProviderId[] = ['gemini', 'openai', 'claude', 'deepseek'];
const defaultOfficialProvider: ProviderId = 'openai';
const ENGINE_USAGE_TAGS: Record<EngineId, string[]> = {
  coreEngine: ['幻想遍历', '生成蓝图', '自动填充', 'AI 续写/改写', '资产提示词重写', '技能变量生成'],
  metonymyEngine: ['生成文学剧本', '剧本风格迁移', '生成分镜', '换喻缝合流程'],
  psychoAnalysis: ['精神分析报告', '结构症候解读'],
  visualBible: ['图片反推', '文本视觉圣经', '全局影调分析', '资产图片分析', '视觉种子解码'],
  visualSeed: ['欲望输入解析', '审美输入映射', '带图技能变量生成'],
  imageGen: ['资产图片生成', '设计图生成', '技能图片生成', '视觉参考图生成'],
};

export const SimpleConfigPanel: React.FC<SimpleConfigPanelProps> = ({ onClose, driverType, lang = 'CN' }) => {
  const { theme: globalTheme } = useTheme();
  const [config, setConfig] = useState<APIConfig | null>(null);
  const [selectedKeyId, setSelectedKeyId] = useState('');
  const [draftKey, setDraftKey] = useState<ApiKeyEntry | null>(null);
  const [tests, setTests] = useState<Record<string, TestState>>({});
  const [statusMessage, setStatusMessage] = useState('');
  const [cloudMessage, setCloudMessage] = useState('');
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [activeProviderTab, setActiveProviderTab] = useState<ProviderId>('gemini');
  const [expandedKeyId, setExpandedKeyId] = useState('');
  const [quickKeyId, setQuickKeyId] = useState('');
  const [quickModel, setQuickModel] = useState('');

  const isRetro = globalTheme === 'retro';
  const accentColor = isRetro
    ? 'var(--mist-active-accent)'
    : driverType === DriverType.COMMERCIAL
      ? 'var(--mist-commercial-cyan)'
      : 'var(--mist-archive-red)';

  const panelClass = isRetro
    ? 'bg-[#F9F7F1] border-[var(--mist-active-accent)]/20 text-[#3D1A16]'
    : 'bg-[#080808]/96 border-zinc-800/70 text-zinc-100';
  const sectionClass = isRetro
    ? 'bg-[#F4EFE0] border-[var(--mist-active-accent)]/15'
    : 'bg-zinc-950/45 border-zinc-800/70';
  const mutedText = isRetro ? 'text-[#3D1A16]/55' : 'text-zinc-500';
  const inputClass = `${inputBase} ${isRetro
    ? 'bg-[#F9F7F1] border-[var(--mist-active-accent)]/20 text-[#3D1A16] placeholder:text-[#3D1A16]/30 focus:border-[var(--mist-active-accent)]/50'
    : 'bg-black/60 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-zinc-600'
    }`;
  const controlFocusClass = 'focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0';

  const activeProfile = useMemo(() => {
    if (!config) return null;
    return config.routeProfiles.find(profile => profile.id === config.activeRouteProfileId) || config.routeProfiles[0] || null;
  }, [config]);

  const selectedProfile = activeProfile;

  const selectedKey = useMemo(() => {
    if (!config) return null;
    return config.keyEntries.find(entry => entry.id === selectedKeyId)
      || config.keyEntries[0]
      || null;
  }, [config, selectedKeyId]);

  useEffect(() => {
    const loaded = configService.getConfig();
    setConfig(loaded);
    setSelectedKeyId(loaded.keyEntries[0]?.id || '');
    setQuickKeyId(loaded.keyEntries[0]?.id || '');
  }, []);

  useEffect(() => {
    if (!selectedKey) return;
    setDraftKey({ ...selectedKey });
    setIsKeyVisible(false);
  }, [selectedKey]);

  useEffect(() => {
    if (!config) return;
    if (!quickKeyId || !config.keyEntries.some(entry => entry.id === quickKeyId)) {
      setQuickKeyId(selectedKeyId || config.keyEntries[0]?.id || '');
    }
  }, [config, quickKeyId, selectedKeyId]);

  const flash = (message: string) => {
    setStatusMessage(message);
    window.setTimeout(() => setStatusMessage(''), 2400);
  };

  const refresh = (next?: APIConfig, message?: string) => {
    const loaded = next || configService.getConfig();
    setConfig(loaded);
    if (!loaded.keyEntries.some(entry => entry.id === selectedKeyId)) {
      setSelectedKeyId(loaded.keyEntries[0]?.id || '');
    }
    if (message) flash(message);
  };

  const updateDraftKey = (patch: Partial<ApiKeyEntry>) => {
    setDraftKey(prev => prev ? { ...prev, ...patch } : prev);
  };

  const modelIdsForKey = (entry: ApiKeyEntry | null): string[] => {
    if (!entry) return [];
    if (entry.modelCoverage === 'allowlist') return entry.allowedModels;
    if (entry.modelCoverage === 'all') return MODEL_CATALOG.map(model => model.id);
    if (entry.modelCoverage === 'provider' && entry.provider !== 'mixed' && entry.provider !== 'custom') {
      return MODEL_CATALOG.filter(model => model.provider === entry.provider).map(model => model.id);
    }
    if (entry.modelCoverage === 'pattern' && entry.modelPattern) {
      const escaped = entry.modelPattern
        .split('*')
        .map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .join('.*');
      const regex = new RegExp(`^${escaped}$`, 'i');
      return MODEL_CATALOG.filter(model => regex.test(model.id)).map(model => model.id);
    }
    return [];
  };

  const selectedModelIds = useMemo(() => modelIdsForKey(draftKey), [draftKey]);

  const quickKeyEntry = useMemo(() => {
    if (!config) return null;
    if (draftKey?.id === quickKeyId) return draftKey;
    return config.keyEntries.find(entry => entry.id === quickKeyId) || config.keyEntries[0] || null;
  }, [config, draftKey, quickKeyId]);

  const quickKeyModels = useMemo(() => modelIdsForKey(quickKeyEntry), [quickKeyEntry]);

  useEffect(() => {
    if (quickKeyModels.length === 0) {
      if (quickModel) setQuickModel('');
      return;
    }
    if (!quickModel || !quickKeyModels.includes(quickModel)) {
      setQuickModel(quickKeyModels[0]);
    }
  }, [quickKeyModels, quickModel]);

  const getEffectiveKeyEntry = (keyId: string): ApiKeyEntry | null => {
    if (draftKey?.id === keyId) return draftKey;
    return config?.keyEntries.find(entry => entry.id === keyId) || null;
  };

  const updateModelSelection = (modelId: string, checked: boolean) => {
    if (!draftKey) return;
    const current = new Set(modelIdsForKey({ ...draftKey, modelCoverage: 'allowlist' }));
    if (checked) current.add(modelId);
    else current.delete(modelId);
    updateDraftKey({
      modelCoverage: 'allowlist',
      allowedModels: MODEL_CATALOG.filter(model => current.has(model.id)).map(model => model.id),
    });
  };

  const updateProviderSelection = (provider: ProviderId, checked: boolean) => {
    const providerModelIds = MODEL_CATALOG.filter(model => model.provider === provider).map(model => model.id);
    const current = new Set(selectedModelIds);
    for (const modelId of providerModelIds) {
      if (checked) current.add(modelId);
      else current.delete(modelId);
    }
    updateDraftKey({
      modelCoverage: 'allowlist',
      allowedModels: MODEL_CATALOG.filter(model => current.has(model.id)).map(model => model.id),
    });
  };

  const providerModelCount = (provider: ProviderId) =>
    MODEL_CATALOG.filter(model => model.provider === provider && selectedModelIds.includes(model.id)).length;

  const isProviderChecked = (provider: ProviderId): boolean => {
    const providerModelIds = MODEL_CATALOG.filter(model => model.provider === provider).map(model => model.id);
    return providerModelIds.length > 0 && providerModelIds.every(modelId => selectedModelIds.includes(modelId));
  };

  const selectAllModelsForKey = () => {
    updateDraftKey({
      modelCoverage: 'allowlist',
      allowedModels: MODEL_CATALOG.map(model => model.id),
    });
  };

  const clearModelsForKey = () => {
    updateDraftKey({ modelCoverage: 'allowlist', allowedModels: [] });
  };

  const handleSaveKey = () => {
    if (!draftKey) return;
    const next = configService.upsertKeyEntry(draftKey);
    setSelectedKeyId(draftKey.id);
    setQuickKeyId(draftKey.id);
    setExpandedKeyId('');
    refresh(next, 'KEY 已保存');
  };

  const handleCreateKey = () => {
    const key = configService.createKeyEntry({
      name: '新 API Key',
      provider: 'mixed',
      apiFormat: 'openai',
      mode: 'proxy',
      modelCoverage: 'allowlist',
      allowedModels: [],
    });
    const next = configService.upsertKeyEntry(key);
    setSelectedKeyId(key.id);
    setQuickKeyId(key.id);
    setExpandedKeyId(key.id);
    refresh(next, '已新建 Key');
  };

  const inferApiEntryPatch = (baseUrl: string, mode = draftKey?.mode || 'proxy'): Partial<ApiKeyEntry> => {
    const clean = baseUrl.trim().replace(/\/+$/, '');
    const modeUrlPatch = mode === 'official'
      ? { officialBaseUrl: clean }
      : { proxyBaseUrl: clean };
    if (!clean) {
      return { baseUrl: clean, ...modeUrlPatch };
    }
    try {
      const host = new URL(clean).hostname.toLowerCase();
      if (host.includes('generativelanguage.googleapis.com')) {
        return { mode: 'official', baseUrl: '', officialBaseUrl: '', provider: 'gemini', apiFormat: 'google' };
      }
      if (host.includes('anthropic.com')) {
        return { mode: 'official', baseUrl: clean, officialBaseUrl: clean, provider: 'claude', apiFormat: 'anthropic' };
      }
      if (host.includes('api.openai.com')) {
        return { mode: 'official', baseUrl: clean, officialBaseUrl: clean, provider: 'openai', apiFormat: 'openai' };
      }
      if (host.includes('deepseek.com')) {
        return { mode: 'official', baseUrl: clean, officialBaseUrl: clean, provider: 'deepseek', apiFormat: 'openai' };
      }
    } catch {
      // Keep the user's value; validation happens when testing the endpoint.
    }
    return { baseUrl: clean, ...modeUrlPatch };
  };

  const handleGatewayUrlChange = (baseUrl: string) => {
    updateDraftKey(inferApiEntryPatch(baseUrl));
  };

  const handleOfficialToggle = (official: boolean) => {
    if (!draftKey) return;
    if (!official) {
      const proxyBaseUrl = draftKey.proxyBaseUrl ?? (draftKey.mode === 'proxy' ? draftKey.baseUrl : '');
      updateDraftKey({
        mode: 'proxy',
        provider: 'mixed',
        apiFormat: 'openai',
        baseUrl: proxyBaseUrl,
        proxyBaseUrl,
        officialBaseUrl: draftKey.officialBaseUrl ?? (draftKey.mode === 'official' ? draftKey.baseUrl : OFFICIAL_BASE_URLS[defaultOfficialProvider]),
      });
      return;
    }
    const officialBaseUrl = draftKey.officialBaseUrl ?? (draftKey.mode === 'official' ? draftKey.baseUrl : OFFICIAL_BASE_URLS[defaultOfficialProvider]);
    updateDraftKey({
      mode: 'official',
      provider: defaultOfficialProvider,
      apiFormat: 'openai',
      baseUrl: officialBaseUrl,
      officialBaseUrl,
      proxyBaseUrl: draftKey.proxyBaseUrl ?? (draftKey.mode === 'proxy' ? draftKey.baseUrl : ''),
    });
  };

  const handleDeleteKey = () => {
    if (!draftKey || !window.confirm('确认删除这个 API Key 条目？相关路由会自动改绑到可用 Key。')) return;
    const next = configService.deleteKeyEntry(draftKey.id);
    refresh(next, 'Key 已删除');
  };

  const handleTestKey = async (keyId: string, modelHint?: string) => {
    if (draftKey && draftKey.id === keyId) {
      configService.upsertKeyEntry(draftKey);
      setConfig(configService.getConfig());
    }
    setTests(prev => ({ ...prev, [keyId]: { status: 'testing', message: '' } }));
    const result = await configService.testKeyConnection(keyId, modelHint);
    setTests(prev => ({
      ...prev,
      [keyId]: {
        status: result.success ? 'success' : 'error',
        message: result.message,
      },
    }));
    setConfig(configService.getConfig());
  };

  const updateBinding = (engineId: EngineId, patch: Partial<{ keyId: string; model: string }>) => {
    if (!selectedProfile) return;
    const next = configService.setEngineBinding(engineId, patch, selectedProfile.id);
    refresh(next);
  };

  const persistVisibleDrafts = () => {
    let latest = configService.getConfig();
    if (draftKey) {
      latest = configService.upsertKeyEntry(draftKey);
    }
    setConfig(latest);
    return latest;
  };

  const handleCloudSave = async () => {
    if (!config) return;
    setCloudMessage('正在保存本地修改并同步到账户...');
    const latest = persistVisibleDrafts();
    const result = await configService.saveCloudConfig(latest);
    setCloudMessage(result.message);
    if (result.success) refresh(configService.getConfig());
  };

  const handleCloudLoad = async () => {
    setCloudMessage('读取账户配置中...');
    const result = await configService.loadCloudConfigResult();
    setCloudMessage(result.message);
    if (!result.success || !result.config) {
      return;
    }
    configService.saveConfig(result.config);
    refresh(configService.getConfig(), '已载入账户配置');
  };

  if (!config || !selectedProfile || !draftKey) return null;

  const keyStats = {
    total: config.keyEntries.length,
    ready: config.keyEntries.filter(entry => entry.apiKey).length,
    models: selectedModelIds.length,
  };

  const resultTone = (message: string, fallback: string) => {
    if (/失败|不可用|未登录|尚未|权限不足/.test(message)) return 'text-red-300';
    if (/已|成功/.test(message)) return 'text-zinc-200';
    return fallback;
  };

  const getKeyAddressLabel = (entry: ApiKeyEntry) => {
    if (!entry.baseUrl) return entry.mode === 'official' ? '官方地址未设置' : '中转地址未设置';
    return entry.mode === 'official' ? '官方地址已设置' : '中转地址已设置';
  };

  const isKeyConfigured = (entry: ApiKeyEntry | null) => {
    if (!entry?.name.trim() || !entry.apiKey.trim() || modelIdsForKey(entry).length === 0) return false;
    return entry.apiFormat === 'google' && entry.mode === 'official'
      ? true
      : Boolean(entry.baseUrl.trim());
  };

  const renderStatusDot = (ready: boolean) => (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: ready ? 'rgba(242,242,238,0.72)' : accentColor }}
    />
  );

  const renderKeyList = () => (
    <div className={`flex min-h-0 flex-col rounded-sm border ${sectionClass}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
            <KeyRound className="h-3.5 w-3.5" />
            API Key
          </div>
          <p className={`mt-1 text-[10px] ${mutedText}`}>先保存入口，再勾选它能跑的模型。</p>
        </div>
        <button onClick={handleCreateKey} className={`rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`} title="添加 API Key">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 border-b border-white/10 px-4 py-3">
        <Metric label="KEYS" value={String(keyStats.total)} mutedText={mutedText} />
        <Metric label="READY" value={String(keyStats.ready)} mutedText={mutedText} />
        <Metric label="MODELS" value={String(keyStats.models)} mutedText={mutedText} />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        <div className="space-y-2">
          {config.keyEntries.map(entry => {
            const isSelected = entry.id === selectedKeyId;
            const isExpanded = entry.id === expandedKeyId;
            const test = tests[entry.id];
            const modelCount = modelIdsForKey(entry.id === draftKey.id ? draftKey : entry).length;
            return (
              <div
                key={entry.id}
                className={`rounded-sm border transition-all ${isSelected
                  ? isRetro ? 'border-[var(--mist-active-accent)] bg-[#F9F7F1]' : 'border-zinc-500 bg-white/[0.06]'
                  : isRetro ? 'border-[var(--mist-active-accent)]/10 hover:border-[var(--mist-active-accent)]/30' : 'border-zinc-900 bg-black/30 hover:border-zinc-700'
                  }`}
              >
                <button
                  onClick={() => setSelectedKeyId(entry.id)}
                  className={`w-full px-3 py-3 text-left ${controlFocusClass}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {renderStatusDot(!!entry.apiKey)}
                        <span className="truncate text-[12px] font-bold uppercase tracking-[0.12em]">{entry.name}</span>
                      </div>
                      <div className={`mt-1 truncate text-[10px] ${mutedText}`}>{getKeyAddressLabel(entry)}</div>
                    </div>
                    <span className={`shrink-0 text-[9px] font-mono ${test?.status === 'error' ? 'text-red-400' : test?.status === 'success' ? 'text-zinc-200' : mutedText}`}>
                      {test?.status === 'testing' ? 'TEST' : entry.lastTestStatus || `${modelCount} MODEL`}
                    </span>
                  </div>
                </button>
                {isExpanded && (
                  <div className={`border-t border-white/10 px-3 pb-3 text-[10px] font-mono ${mutedText}`}>
                    {maskApiKey(entry.apiKey)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderModelMatrix = () => (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label mutedText={mutedText}>配置模型</Label>
        <div className="flex items-center gap-2">
          <button onClick={selectAllModelsForKey} className={`rounded-sm border border-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}>全选</button>
          <button onClick={clearModelsForKey} className={`rounded-sm border border-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}>清空</button>
        </div>
      </div>
      <div className="grid grid-cols-[180px_minmax(0,1fr)] overflow-hidden rounded-sm border border-white/10 bg-black/20">
        <div className="border-r border-white/10 p-2">
          {providerOrder.map(provider => {
            const active = activeProviderTab === provider;
            const checkedCount = providerModelCount(provider);
            const totalCount = MODEL_CATALOG.filter(model => model.provider === provider).length;
            return (
              <button
                key={provider}
                onClick={() => setActiveProviderTab(provider)}
                className={`flex w-full items-center justify-between gap-2 rounded-sm px-3 py-2 text-left text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${controlFocusClass} ${active ? 'bg-white/[0.08] text-white' : 'text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-300'}`}
              >
                <span>{PROVIDER_LABELS[provider]}</span>
                <span className="font-mono text-[9px]">{checkedCount}/{totalCount}</span>
              </button>
            );
          })}
        </div>
        <div className="min-h-[176px] p-3">
          <label className="mb-2 flex items-center justify-between gap-3 border-b border-white/10 pb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em]">{PROVIDER_LABELS[activeProviderTab]}</span>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-zinc-500">
              全选模型
              <input
                type="checkbox"
                checked={isProviderChecked(activeProviderTab)}
                onChange={event => updateProviderSelection(activeProviderTab, event.target.checked)}
                className={`h-4 w-4 accent-current ${controlFocusClass}`}
                style={{ color: accentColor }}
              />
            </span>
          </label>
          <div className="grid gap-1.5 md:grid-cols-2">
            {MODEL_CATALOG.filter(model => model.provider === activeProviderTab).map(model => (
              <label key={model.id} className="flex items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-[10px] transition-colors hover:bg-white/[0.04]">
                <span className="min-w-0 truncate">
                  <span className="font-bold text-zinc-300">{model.name}</span>
                  <span className={`ml-2 font-mono ${mutedText}`}>{model.id}</span>
                </span>
                <input
                  type="checkbox"
                  checked={selectedModelIds.includes(model.id)}
                  onChange={event => updateModelSelection(model.id, event.target.checked)}
                  className={`h-4 w-4 shrink-0 accent-current ${controlFocusClass}`}
                  style={{ color: accentColor }}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderApiKeyWorkspace = () => {
    const test = tests[draftKey.id];
    const addressValue = draftKey.baseUrl;
    const isExpanded = draftKey.id === expandedKeyId;
    const configured = isKeyConfigured(draftKey);
    return (
      <div className={`rounded-sm border ${sectionClass} p-3`}>
        <div className={`${isExpanded ? 'mb-3' : ''} flex items-center justify-between gap-4`}>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
              <KeyRound className="h-3.5 w-3.5" />
              API 配置
            </div>
            <div className={`mt-1 flex flex-wrap items-center gap-3 text-[10px] ${mutedText}`}>
              <span>{draftKey.name}</span>
              <span>{getKeyAddressLabel(draftKey)}</span>
              <span>{selectedModelIds.length} 个模型</span>
              <span className={configured ? 'text-zinc-300' : 'text-red-300/80'}>{configured ? '已配置' : '待完善'}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExpandedKeyId(isExpanded ? '' : draftKey.id)}
              className={`flex items-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}
            >
              {isExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
              {isExpanded ? '收起' : '编辑'}
            </button>
            <button onClick={() => handleTestKey(draftKey.id)} className={`flex items-center gap-2 rounded-sm border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${controlFocusClass}`} style={{ borderColor: `${accentColor}55`, color: accentColor }}>
              <Zap className={`h-3.5 w-3.5 ${test?.status === 'testing' ? 'animate-spin' : ''}`} />
              测试
            </button>
            <button onClick={handleSaveKey} className={`flex items-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-200 transition-colors hover:border-white/30 ${controlFocusClass}`}>
              <Save className="h-3.5 w-3.5" />
              保存
            </button>
            <button onClick={handleDeleteKey} className={`rounded-sm border border-red-500/20 p-2 text-red-400/80 transition-colors hover:border-red-400/50 hover:text-red-300 ${controlFocusClass}`}>
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {test?.message && (
          <div className={`mb-3 rounded-sm border px-3 py-2 text-[10px] leading-relaxed ${test.status === 'success' ? 'border-white/10 text-zinc-300' : 'border-red-500/30 text-red-300'}`}>
            {test.message}
          </div>
        )}

        {!isExpanded && (
          <div className={`mt-3 grid grid-cols-4 gap-2 text-[10px] ${mutedText}`}>
            <div className="rounded-sm border border-white/10 bg-black/20 px-3 py-2">
              <div className="font-bold uppercase tracking-[0.14em]">KEY</div>
              <div className="mt-1 truncate font-mono">{maskApiKey(draftKey.apiKey)}</div>
            </div>
            <div className="rounded-sm border border-white/10 bg-black/20 px-3 py-2">
              <div className="font-bold uppercase tracking-[0.14em]">模式</div>
              <div className="mt-1">{draftKey.mode === 'official' ? '官方' : '中转'}</div>
            </div>
            <div className="rounded-sm border border-white/10 bg-black/20 px-3 py-2">
              <div className="font-bold uppercase tracking-[0.14em]">协议</div>
              <div className="mt-1">{API_FORMAT_LABELS[draftKey.apiFormat]}</div>
            </div>
            <div className="rounded-sm border border-white/10 bg-black/20 px-3 py-2">
              <div className="font-bold uppercase tracking-[0.14em]">模型</div>
              <div className="mt-1">{selectedModelIds.length ? `${selectedModelIds.length} 个可用` : '未选择'}</div>
            </div>
          </div>
        )}

        {isExpanded && (
          <>
        <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-3">
          <Field label="名称" mutedText={mutedText}>
            <input className={inputClass} value={draftKey.name} onChange={event => updateDraftKey({ name: event.target.value })} placeholder="我的图像 Key / 备用文本 Key / 官方 Key" />
          </Field>
          <Field label="API Key" mutedText={mutedText}>
            <div className="flex gap-2">
              <input className={inputClass} type={isKeyVisible ? 'text' : 'password'} value={draftKey.apiKey} onChange={event => updateDraftKey({ apiKey: event.target.value })} placeholder="sk-..." />
              <button
                type="button"
                onMouseDown={() => setIsKeyVisible(true)}
                onMouseUp={() => setIsKeyVisible(false)}
                onMouseLeave={() => setIsKeyVisible(false)}
                onTouchStart={() => setIsKeyVisible(true)}
                onTouchEnd={() => setIsKeyVisible(false)}
                className={`shrink-0 rounded-sm border border-white/10 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}
                title="按住查看 API Key"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
            </div>
          </Field>
          <Field label="URL 地址" mutedText={mutedText}>
            <div className="flex gap-2">
              <div className="grid shrink-0 grid-cols-2 overflow-hidden rounded-sm border border-white/10">
                {([
                  ['proxy', '中转', Shield],
                  ['official', '官方', Globe],
                ] as const).map(([mode, label, Icon]) => (
                  <button
                    key={mode}
                    onClick={() => handleOfficialToggle(mode === 'official')}
                    className={`flex items-center justify-center gap-1.5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] transition-colors ${controlFocusClass} ${draftKey.mode === mode ? 'bg-white/[0.08] text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    <Icon className="h-3 w-3" />
                    {label}
                  </button>
                ))}
              </div>
              <input className={inputClass} value={addressValue} onChange={event => handleGatewayUrlChange(event.target.value)} placeholder={draftKey.mode === 'official' ? 'https://api.openai.com/v1' : 'https://你的中转域名/v1'} />
            </div>
          </Field>
        </div>

        <div className="mt-3">
          {renderModelMatrix()}
        </div>

        <details className="mt-4 rounded-sm border border-white/10 bg-black/20 p-3">
          <summary className={`cursor-pointer text-[10px] font-bold uppercase tracking-[0.18em] ${mutedText}`}>协议格式（一般不用改）</summary>
          <p className={`mt-2 text-[10px] leading-relaxed ${mutedText}`}>
            中转地址通常保持 OpenAI Compatible。只有直连 Claude 官方、Gemini 官方，或某个接口明确要求非 OpenAI 兼容协议时才需要切换。
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="API 格式" mutedText={mutedText}>
              <select className={inputClass} value={draftKey.apiFormat} onChange={event => updateDraftKey({ apiFormat: event.target.value as ApiFormat })}>
                {API_FORMAT_OPTIONS.map(format => (
                  <option key={format} value={format}>{API_FORMAT_LABELS[format]}</option>
                ))}
              </select>
            </Field>
          </div>
        </details>
          </>
        )}
      </div>
    );
  };

  const routeModelsForKey = (keyId: string, allowedModels: readonly string[]): string[] => {
    const entry = getEffectiveKeyEntry(keyId);
    const keyModels = modelIdsForKey(entry);
    const filtered = allowedModels.filter(model => keyModels.includes(model));
    return filtered;
  };

  const isKeySupportsModel = (keyId: string, modelId: string): boolean => {
    return routeModelsForKey(keyId, [modelId]).includes(modelId);
  };

  const compatibleKeysForModel = (modelId: string) =>
    config.keyEntries.filter(entry => isKeySupportsModel(entry.id, modelId));

  const updateRouteKey = (engineId: EngineId, keyId: string) => {
    const engine = ENGINE_CONFIGS.find(item => item.id === engineId);
    const current = selectedProfile.bindings[engineId] || { model: config.engines[engineId], keyId };
    const models = routeModelsForKey(keyId, engine?.allowedModels || []);
    updateBinding(engineId, {
      keyId,
      model: models.includes(current.model) ? current.model : models[0] || current.model,
    });
  };

  const updateRouteModel = (engineId: EngineId, model: string) => {
    const current = selectedProfile.bindings[engineId] || {
      model,
      keyId: config.keyEntries[0]?.id || '',
    };
    updateBinding(engineId, { model, keyId: current.keyId });
  };

  const quickTargetEngines = quickModel
    ? ENGINE_CONFIGS.filter(engine => engine.allowedModels.includes(quickModel) && isKeySupportsModel(quickKeyId, quickModel))
    : [];
  const quickTargetTypes = Array.from(new Set(quickTargetEngines.map(engine => engine.type)));
  const quickScopeLabel = !quickModel
    ? '请选择模型'
    : quickTargetTypes.length > 1
      ? `跨域：${quickTargetEngines.length} 个引擎`
      : quickTargetTypes[0] === 'image'
        ? `图像：${quickTargetEngines.length} 个引擎`
        : `文本：${quickTargetEngines.length} 个引擎`;
  const quickModelOption = getModelOption(quickModel);

  const handleQuickApply = () => {
    if (!quickKeyId || !quickModel || quickTargetEngines.length === 0) return;
    persistVisibleDrafts();
    const next = configService.applyKeyModelToCompatibleEngines(quickKeyId, quickModel, selectedProfile.id);
    refresh(next, `已应用到 ${quickTargetEngines.length} 个兼容引擎`);
  };

  const renderQuickApply = () => (
    <div className="border-b border-white/10 px-4 py-3">
      <div className="grid grid-cols-[1fr_1fr_auto_auto] items-end gap-3">
        <Field label="快速应用 API Key" mutedText={mutedText}>
          <select className={inputClass} value={quickKeyId} onChange={event => setQuickKeyId(event.target.value)}>
            {config.keyEntries.map(entry => (
              <option key={entry.id} value={entry.id}>{entry.name}</option>
            ))}
          </select>
        </Field>
        <Field label="快速应用模型" mutedText={mutedText}>
          <select className={inputClass} value={quickModel} onChange={event => setQuickModel(event.target.value)} disabled={!quickKeyModels.length}>
            {!quickKeyModels.length && <option value="">先给这个 Key 勾选模型</option>}
            {MODEL_CATALOG.map(model => {
              const supported = quickKeyModels.includes(model.id);
              return (
                <option key={model.id} value={model.id} disabled={!supported}>
                  {model.name}{supported ? '' : ' · Key 未勾选'}
                </option>
              );
            })}
          </select>
        </Field>
        <div className={`min-w-[154px] rounded-sm border border-white/10 bg-black/20 px-3 py-2 text-[10px] ${mutedText}`}>
          <div className="font-bold uppercase tracking-[0.14em]">作用范围</div>
          <div className="mt-1 text-zinc-300">{quickScopeLabel}</div>
          {quickModelOption && <div className="mt-0.5 font-mono">{quickModelOption.type === 'image' ? '生图模型' : '文字模型'}</div>}
        </div>
        <button
          disabled={!quickKeyId || !quickModel || quickTargetEngines.length === 0}
          onClick={handleQuickApply}
          className={`flex items-center justify-center gap-2 rounded-sm border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors disabled:cursor-not-allowed disabled:opacity-30 ${controlFocusClass}`}
          style={{ borderColor: `${accentColor}55`, color: accentColor }}
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          应用
        </button>
      </div>
      <div className={`mt-2 flex flex-wrap gap-2 text-[9px] ${mutedText}`}>
        {quickTargetEngines.length > 0
          ? quickTargetEngines.map(engine => <span key={engine.id} className="rounded-sm border border-white/10 px-2 py-1">{engine.name}</span>)
          : <span className="text-red-300/80">当前 Key 与模型没有可应用的引擎。</span>}
      </div>
    </div>
  );

  const renderEngineRoutes = () => (
    <div className={`min-h-0 rounded-sm border ${sectionClass}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
            <Route className="h-3.5 w-3.5" />
            六大引擎路由
          </div>
          <p className={`mt-1 text-[10px] ${mutedText}`}>每个引擎选择一个 API Key，再选择这个 Key 下要跑的模型。</p>
        </div>
        <span className={`text-[9px] font-mono ${mutedText}`}>{selectedProfile.name}</span>
      </div>

      {renderQuickApply()}

      <div className="grid grid-cols-[0.95fr_minmax(240px,1.35fr)_minmax(150px,0.7fr)_minmax(170px,0.78fr)_82px] gap-3 border-b border-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
        <span>引擎</span>
        <span>应用功能</span>
        <span>API Key</span>
        <span>模型</span>
        <span className="text-right">测试</span>
      </div>
      <div>
        {ENGINE_CONFIGS.map(engine => {
          const engineId = engine.id as EngineId;
          const binding = selectedProfile.bindings[engineId] || {
            model: config.engines[engineId],
            keyId: config.keyEntries[0]?.id || '',
          };
          const key = config.keyEntries.find(entry => entry.id === binding.keyId);
          const selectableModels = routeModelsForKey(binding.keyId, engine.allowedModels);
          const hasSelectableModel = selectableModels.includes(binding.model);
          const compatibleKeyCount = compatibleKeysForModel(binding.model).length;
          const test = key ? tests[key.id] : undefined;

          return (
            <div key={engine.id} className="grid grid-cols-[0.95fr_minmax(240px,1.35fr)_minmax(150px,0.7fr)_minmax(170px,0.78fr)_82px] items-center gap-3 border-b border-white/5 px-4 py-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {renderStatusDot(Boolean(key?.apiKey))}
                  <span className="truncate text-[12px] font-bold uppercase tracking-[0.12em]">{engine.name}</span>
                </div>
                <p className={`mt-1 line-clamp-1 text-[10px] leading-tight ${mutedText}`}>{engine.description}</p>
              </div>

              <div className="flex min-w-0 flex-wrap gap-1.5">
                {(ENGINE_USAGE_TAGS[engineId] || []).map(tag => (
                  <span
                    key={tag}
                    className={`rounded-sm border px-2 py-1 text-[9px] font-bold leading-none ${isRetro ? 'border-[#8B261D]/22 bg-[#8B261D]/8 text-[#3D1A16]' : 'border-white/18 bg-white/[0.075] text-zinc-200'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <select className={inputClass} value={binding.keyId} onChange={event => updateRouteKey(engineId, event.target.value)}>
                {config.keyEntries.map(entry => {
                  const supportsModel = isKeySupportsModel(entry.id, binding.model);
                  return (
                    <option key={entry.id} value={entry.id}>
                      {entry.name}{supportsModel ? '' : ' · 不支持当前模型'}
                    </option>
                  );
                })}
              </select>

              <select className={`${inputClass} ${hasSelectableModel ? '' : 'border-red-500/40 text-red-200'}`} value={binding.model} onChange={event => updateRouteModel(engineId, event.target.value)}>
                {engine.allowedModels.map(model => {
                  const supported = selectableModels.includes(model);
                  return (
                    <option key={model} value={model}>
                      {getModelOption(model)?.name || model}{supported ? '' : ' · 当前 Key 不支持'}
                    </option>
                  );
                })}
              </select>

              <button
                disabled={!key || !hasSelectableModel || test?.status === 'testing'}
                onClick={() => key && handleTestKey(key.id, binding.model)}
                className={`ml-auto flex items-center justify-center gap-1 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:border-white/30 hover:text-white disabled:opacity-30 ${controlFocusClass}`}
              >
                {test?.status === 'success' ? <Check className="h-3.5 w-3.5" /> : test?.status === 'error' ? <AlertTriangle className="h-3.5 w-3.5" /> : <Zap className={`h-3.5 w-3.5 ${test?.status === 'testing' ? 'animate-spin' : ''}`} />}
                TEST
              </button>
              {!hasSelectableModel && (
                <div className="col-start-3 col-span-2 -mt-2 text-[9px] font-mono text-red-300/80">
                  当前组合不可用：请换 API Key，或给这个 Key 勾选该模型。适配此模型的 Key：{compatibleKeyCount || 0}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className={`mist-config-panel mist-archive-modal flex h-screen w-screen flex-col overflow-hidden border-0 shadow-2xl sm:h-[calc(100vh-16px)] sm:w-[calc(100vw-16px)] sm:rounded-sm sm:border ${panelClass}`}
      style={{
        borderColor: isRetro ? 'var(--mist-active-accent)' : `${accentColor}55`,
        boxShadow: isRetro
          ? '8px 8px 0 rgba(var(--mist-active-accent-rgb,139,38,29),0.12)'
          : `0 0 0 1px #111, 0 30px 110px -20px rgba(0,0,0,0.95), 0 0 44px ${accentColor}18`,
      }}
    >
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
        <div>
          <h2 className="text-xl font-serif uppercase leading-none tracking-[0.22em]">API Key 路由配置</h2>
          <div className="mt-2 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.36em]" style={{ color: accentColor }}>
            <span>API Key</span>
            <span>·</span>
            <span>API 配置</span>
            <span>·</span>
            <span>六大引擎</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
          {statusMessage && <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>{statusMessage}</span>}
          {cloudMessage && <span className={`max-w-[440px] text-right text-[10px] leading-snug ${resultTone(cloudMessage, mutedText)}`}>{cloudMessage}</span>}
          <button onClick={handleCloudLoad} className={`flex items-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}>
            <Cloud className="h-3.5 w-3.5" />
            账户载入
          </button>
          <button onClick={handleCloudSave} className={`flex items-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}>
            <Cloud className="h-3.5 w-3.5" />
            同步账户
          </button>
          <button onClick={() => refresh(configService.getConfig(), '已刷新本地配置')} className={`rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}>
            <RefreshCw className="h-4 w-4" />
          </button>
          <button onClick={onClose} className={`rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white ${controlFocusClass}`}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main className="grid min-h-0 flex-1 grid-cols-[320px_minmax(760px,1fr)] gap-4 overflow-x-auto p-4">
        <section className="min-h-0">
          {renderKeyList()}
        </section>

        <section className="flex min-h-0 flex-col gap-4 overflow-y-auto pr-1">
          {renderApiKeyWorkspace()}
          {renderEngineRoutes()}
        </section>
      </main>
    </div>
  );
};

const Metric: React.FC<{ label: string; value: string; mutedText: string }> = ({ label, value, mutedText }) => (
  <div className="rounded-sm border border-white/10 bg-black/20 px-2 py-2">
    <div className={`text-[8px] font-bold uppercase tracking-[0.16em] ${mutedText}`}>{label}</div>
    <div className="mt-1 text-lg font-bold leading-none">{value}</div>
  </div>
);

const Label: React.FC<{ children: React.ReactNode; mutedText: string }> = ({ children, mutedText }) => (
  <div className={`text-[9px] font-bold uppercase tracking-[0.18em] ${mutedText}`}>{children}</div>
);

const Field: React.FC<{ label: string; children: React.ReactNode; mutedText: string; wide?: boolean }> = ({ label, children, mutedText, wide }) => (
  <label className={wide ? 'col-span-2' : ''}>
    <Label mutedText={mutedText}>{label}</Label>
    <div className="mt-1.5">{children}</div>
  </label>
);
