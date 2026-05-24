import React, { useEffect, useMemo, useState } from 'react';
import { configService } from '../services/configService';
import {
  APIConfig,
  API_FORMAT_LABELS,
  API_KEY_PROVIDER_LABELS,
  AVAILABLE_MODELS,
  ApiFormat,
  ApiKeyEntry,
  ApiKeyProvider,
  ENGINE_CONFIGS,
  EngineId,
  ModelCoverageMode,
  OFFICIAL_BASE_URLS,
  ProviderId,
  ProviderMode,
  getOfficialApiBaseUrl,
  getModelOption,
  getRuntimeRequestUrl,
  isApiKeyCompatibleWithModel,
  maskApiKey,
  providerToApiFormat,
} from '../types/config';
import {
  AlertTriangle,
  Check,
  Cloud,
  Copy,
  Database,
  Eye,
  Globe,
  KeyRound,
  Layers,
  ListChecks,
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

const PROVIDER_OPTIONS: ApiKeyProvider[] = ['mixed', 'deepseek', 'openai', 'claude', 'gemini', 'custom'];
const API_FORMAT_OPTIONS: ApiFormat[] = ['openai', 'anthropic', 'google'];
const COVERAGE_OPTIONS: ModelCoverageMode[] = ['all', 'provider', 'allowlist', 'pattern'];
const OFFICIAL_PROVIDER_OPTIONS: ProviderId[] = ['gemini', 'claude', 'openai', 'deepseek'];

const coverageLabels: Record<ModelCoverageMode, string> = {
  all: '全部模型',
  provider: '按供应商',
  allowlist: '白名单',
  pattern: '名称规则',
};

const inputBase = 'w-full rounded-sm border px-3 py-2 text-xs font-mono outline-none transition-all';

export const SimpleConfigPanel: React.FC<SimpleConfigPanelProps> = ({ onClose, driverType, lang = 'CN' }) => {
  const { theme: globalTheme } = useTheme();
  const [config, setConfig] = useState<APIConfig | null>(null);
  const [selectedKeyId, setSelectedKeyId] = useState('');
  const [draftKey, setDraftKey] = useState<ApiKeyEntry | null>(null);
  const [selectedProfileId, setSelectedProfileId] = useState('');
  const [tests, setTests] = useState<Record<string, TestState>>({});
  const [statusMessage, setStatusMessage] = useState('');
  const [cloudMessage, setCloudMessage] = useState('');
  const [bulkKeyId, setBulkKeyId] = useState('');
  const [bulkModel, setBulkModel] = useState('');
  const [routeNameDraft, setRouteNameDraft] = useState('');
  const [isKeyVisible, setIsKeyVisible] = useState(false);

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
    : 'bg-black/60 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-zinc-500'
    }`;

  const activeProfile = useMemo(() => {
    if (!config) return null;
    return config.routeProfiles.find(profile => profile.id === config.activeRouteProfileId) || config.routeProfiles[0] || null;
  }, [config]);

  const selectedProfile = useMemo(() => {
    if (!config) return null;
    return config.routeProfiles.find(profile => profile.id === selectedProfileId)
      || activeProfile
      || config.routeProfiles[0]
      || null;
  }, [activeProfile, config, selectedProfileId]);

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
    setSelectedProfileId(loaded.activeRouteProfileId || loaded.routeProfiles[0]?.id || '');
    setBulkKeyId(loaded.keyEntries.find(entry => entry.apiKey)?.id || loaded.keyEntries[0]?.id || '');
    setBulkModel(AVAILABLE_MODELS.core[0] || '');
  }, []);

  useEffect(() => {
    if (!selectedKey) return;
    setDraftKey({ ...selectedKey });
    setIsKeyVisible(false);
  }, [selectedKey]);

  useEffect(() => {
    if (!selectedProfile) return;
    setRouteNameDraft(selectedProfile.name);
  }, [selectedProfile]);

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
    if (!loaded.routeProfiles.some(profile => profile.id === selectedProfileId)) {
      setSelectedProfileId(loaded.activeRouteProfileId || loaded.routeProfiles[0]?.id || '');
    }
    if (message) flash(message);
  };

  const updateDraftKey = (patch: Partial<ApiKeyEntry>) => {
    setDraftKey(prev => prev ? { ...prev, ...patch } : prev);
  };

  const getOfficialBaseUrl = (provider: ApiKeyProvider, apiFormat = draftKey?.apiFormat || providerToApiFormat(provider)) => {
    return OFFICIAL_PROVIDER_OPTIONS.includes(provider as ProviderId)
      ? getOfficialApiBaseUrl(provider as ProviderId, apiFormat)
      : '';
  };

  const isKnownOfficialBaseUrl = (url: string) => {
    const clean = url.trim().replace(/\/+$/, '');
    if (!clean) return false;
    const officialUrls = [
      ...Object.values(OFFICIAL_BASE_URLS).filter(Boolean),
      getOfficialApiBaseUrl('deepseek', 'anthropic'),
    ];
    return officialUrls.some(officialUrl => clean === officialUrl.replace(/\/+$/, ''));
  };

  const handleProviderChange = (provider: ApiKeyProvider) => {
    const mode: ProviderMode = OFFICIAL_PROVIDER_OPTIONS.includes(provider as ProviderId) ? 'official' : 'proxy';
    const preservedCustomBaseUrl = draftKey && !isKnownOfficialBaseUrl(draftKey.baseUrl)
      ? draftKey.baseUrl
      : '';
    updateDraftKey({
      provider,
      apiFormat: providerToApiFormat(provider),
      mode,
      baseUrl: preservedCustomBaseUrl,
      modelCoverage: provider === 'mixed' || provider === 'custom' ? 'all' : 'provider',
    });
  };

  const handleModeChange = (mode: ProviderMode) => {
    if (!draftKey) return;
    const isGeminiProxy = draftKey.provider === 'gemini' && mode === 'proxy';
    updateDraftKey({
      mode,
      apiFormat: isGeminiProxy ? 'openai' : providerToApiFormat(draftKey.provider),
      modelCoverage: draftKey.provider === 'mixed' || draftKey.provider === 'custom' ? 'all' : 'provider',
      baseUrl: mode === 'proxy' && isKnownOfficialBaseUrl(draftKey.baseUrl)
        ? ''
        : draftKey.baseUrl,
    });
  };

  const handleSaveKey = () => {
    if (!draftKey) return;
    const next = configService.upsertKeyEntry(draftKey);
    setSelectedKeyId(draftKey.id);
    refresh(next, 'KEY 已保存');
  };

  const handleCreateKey = () => {
    const key = configService.createKeyEntry({
      name: '新 API Key',
      provider: 'mixed',
      apiFormat: 'openai',
      mode: 'proxy',
      modelCoverage: 'all',
    });
    const next = configService.upsertKeyEntry(key);
    setSelectedKeyId(key.id);
    refresh(next, '已新建 Key');
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

  const handleCreateProfile = () => {
    const next = configService.createRouteProfile('新路由方案');
    setSelectedProfileId(next.routeProfiles[0]?.id || next.activeRouteProfileId);
    refresh(next, '已新建路由方案，当前运行未切换');
  };

  const handleSaveProfileName = () => {
    if (!selectedProfile) return;
    const next = configService.upsertRouteProfile({ ...selectedProfile, name: routeNameDraft.trim() || selectedProfile.name });
    refresh(next, '路由方案已保存');
  };

  const handleActivateProfile = () => {
    if (!selectedProfile) return;
    const next = configService.setActiveRouteProfile(selectedProfile.id);
    refresh(next, '当前运行方案已切换');
  };

  const handleDeleteProfile = () => {
    if (!selectedProfile || !window.confirm('确认删除这个路由方案？')) return;
    const next = configService.deleteRouteProfile(selectedProfile.id);
    refresh(next, '路由方案已删除');
  };

  const updateBinding = (engineId: EngineId, patch: Partial<{ keyId: string; model: string }>) => {
    if (!selectedProfile) return;
    const next = configService.setEngineBinding(engineId, patch, selectedProfile.id);
    refresh(next);
  };

  const handleApplyKeyToAll = () => {
    if (!selectedProfile || !bulkKeyId) return;
    const next = configService.applyKeyToAllEngines(bulkKeyId, selectedProfile.id);
    refresh(next, '已把兼容引擎切到该 Key');
  };

  const handleApplyModelToAll = () => {
    if (!selectedProfile || !bulkModel) return;
    const next = configService.applyModelToAllCompatibleEngines(bulkModel, selectedProfile.id);
    refresh(next, '已把兼容引擎切到该模型');
  };

  const handleMigratePresets = () => {
    const next = configService.migrateLegacyPresetsToKeys();
    refresh(next, '旧预设已整理进 Key 库');
  };

  const persistVisibleDrafts = () => {
    let latest = configService.getConfig();
    if (draftKey) {
      latest = configService.upsertKeyEntry(draftKey);
    }
    const profile = latest.routeProfiles.find(item => item.id === selectedProfile?.id);
    if (profile && routeNameDraft.trim() && routeNameDraft.trim() !== profile.name) {
      latest = configService.upsertRouteProfile({ ...profile, name: routeNameDraft.trim() });
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

  const copyDiagnostics = async () => {
    const diagnostics = configService.getRuntimeDiagnostics();
    await navigator.clipboard?.writeText(JSON.stringify(diagnostics, null, 2));
    flash('运行诊断已复制');
  };

  if (!config || !selectedProfile || !draftKey) return null;

  const keyStats = {
    total: config.keyEntries.length,
    ready: config.keyEntries.filter(entry => entry.apiKey).length,
    profiles: config.routeProfiles.length,
  };

  const resultTone = (message: string, fallback: string) => {
    if (/失败|不可用|未登录|尚未|权限不足/.test(message)) return 'text-red-300';
    if (/已|成功/.test(message)) return 'text-zinc-200';
    return fallback;
  };

  const renderStatusDot = (ready: boolean) => (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: ready ? 'rgba(242,242,238,0.72)' : accentColor }}
    />
  );

  const renderKeyList = () => (
    <div className={`flex h-full min-h-0 flex-col rounded-sm border ${sectionClass}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
            <KeyRound className="h-3.5 w-3.5" />
            API Key 库
          </div>
          <p className={`mt-1 text-[10px] ${mutedText}`}>长期保存，不随路由切换覆盖</p>
        </div>
        <button onClick={handleCreateKey} className="rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 border-b border-white/10 px-4 py-3">
        <Metric label="KEYS" value={String(keyStats.total)} mutedText={mutedText} />
        <Metric label="READY" value={String(keyStats.ready)} mutedText={mutedText} />
        <Metric label="ROUTES" value={String(keyStats.profiles)} mutedText={mutedText} />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        <div className="space-y-2">
          {config.keyEntries.map(entry => {
            const isSelected = entry.id === selectedKeyId;
            const test = tests[entry.id];
            return (
              <button
                key={entry.id}
                onClick={() => setSelectedKeyId(entry.id)}
                className={`w-full rounded-sm border px-3 py-3 text-left transition-all ${isSelected
                  ? isRetro ? 'border-[var(--mist-active-accent)] bg-[#F9F7F1]' : 'border-zinc-500 bg-white/[0.06]'
                  : isRetro ? 'border-[var(--mist-active-accent)]/10 hover:border-[var(--mist-active-accent)]/30' : 'border-zinc-900 bg-black/30 hover:border-zinc-700'
                  }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {renderStatusDot(!!entry.apiKey)}
                      <span className="truncate text-[12px] font-bold uppercase tracking-[0.12em]">{entry.name}</span>
                    </div>
                    <div className={`mt-1 truncate text-[10px] ${mutedText}`}>
                      {API_KEY_PROVIDER_LABELS[entry.provider]} · {API_FORMAT_LABELS[entry.apiFormat]}
                    </div>
                  </div>
                  <span className={`shrink-0 text-[9px] font-mono ${test?.status === 'error' ? 'text-red-400' : test?.status === 'success' ? 'text-zinc-200' : mutedText}`}>
                    {test?.status === 'testing' ? 'TEST' : entry.lastTestStatus || 'IDLE'}
                  </span>
                </div>
                <div className={`mt-2 truncate text-[10px] font-mono ${mutedText}`}>{maskApiKey(entry.apiKey)}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10 p-3">
        <button
          onClick={handleMigratePresets}
          className="flex w-full items-center justify-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
        >
          <Database className="h-3.5 w-3.5" />
          整理旧预设
        </button>
      </div>
    </div>
  );

  const renderKeyEditor = () => {
    const test = tests[draftKey.id];
    const isOfficialMode = draftKey.mode === 'official';
    const supportsOfficialMode = OFFICIAL_PROVIDER_OPTIONS.includes(draftKey.provider as ProviderId);
    const officialBaseUrl = getOfficialBaseUrl(draftKey.provider, draftKey.apiFormat);
    const officialAddress = officialBaseUrl || (draftKey.provider === 'gemini' ? 'Google Native: https://generativelanguage.googleapis.com' : '');
    const addressValue = isOfficialMode
      ? (officialAddress || '该供应商没有官方固定地址，请使用自定义')
      : draftKey.baseUrl;
    return (
      <div className={`rounded-sm border ${sectionClass} p-4`}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Key 详情
            </div>
            <p className={`mt-1 text-[10px] ${mutedText}`}>这里保存的是可复用入口，不是当前路由方案</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleTestKey(draftKey.id)}
              className="flex items-center gap-2 rounded-sm border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors"
              style={{ borderColor: `${accentColor}55`, color: accentColor }}
            >
              <Zap className={`h-3.5 w-3.5 ${test?.status === 'testing' ? 'animate-spin' : ''}`} />
              测试
            </button>
            <button onClick={handleSaveKey} className="flex items-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-200 transition-colors hover:border-white/30">
              <Save className="h-3.5 w-3.5" />
              保存 Key
            </button>
            <button onClick={handleDeleteKey} className="rounded-sm border border-red-500/20 p-2 text-red-400/80 transition-colors hover:border-red-400/50 hover:text-red-300">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {test?.message && (
          <div className={`mb-3 rounded-sm border px-3 py-2 text-[10px] leading-relaxed ${test.status === 'success' ? 'border-white/10 text-zinc-300' : 'border-red-500/30 text-red-300'}`}>
            {test.message}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Field label="名称" mutedText={mutedText}>
            <input className={inputClass} value={draftKey.name} onChange={event => updateDraftKey({ name: event.target.value })} />
          </Field>
          <Field label="供应商类型" mutedText={mutedText}>
            <select className={inputClass} value={draftKey.provider} onChange={event => handleProviderChange(event.target.value as ApiKeyProvider)}>
              {PROVIDER_OPTIONS.map(provider => (
                <option key={provider} value={provider}>{API_KEY_PROVIDER_LABELS[provider]}</option>
              ))}
            </select>
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
                className="shrink-0 rounded-sm border border-white/10 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
                title="按住查看 API Key"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
            </div>
          </Field>
          <Field label="API 格式" mutedText={mutedText}>
            <select className={inputClass} value={draftKey.apiFormat} onChange={event => updateDraftKey({ apiFormat: event.target.value as ApiFormat })}>
              {API_FORMAT_OPTIONS.map(format => (
                <option key={format} value={format}>{API_FORMAT_LABELS[format]}</option>
              ))}
            </select>
          </Field>
          <Field label="接入模式" mutedText={mutedText}>
            <div className="grid grid-cols-2 gap-2">
              {(['official', 'proxy'] as const).map(mode => (
                <button
                  key={mode}
                  disabled={mode === 'official' && !supportsOfficialMode}
                  onClick={() => handleModeChange(mode)}
                  className={`flex items-center justify-center gap-2 rounded-sm border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] disabled:cursor-not-allowed disabled:opacity-35 ${draftKey.mode === mode ? 'border-white/40 text-white' : 'border-white/10 text-zinc-500 hover:border-white/30'}`}
                >
                  {mode === 'official' ? <Globe className="h-3.5 w-3.5" /> : <Shield className="h-3.5 w-3.5" />}
                  {mode === 'official' ? '官方' : '自定义'}
                </button>
              ))}
            </div>
          </Field>
          <Field label="模型覆盖" mutedText={mutedText}>
            <select className={inputClass} value={draftKey.modelCoverage} onChange={event => updateDraftKey({ modelCoverage: event.target.value as ModelCoverageMode })}>
              {COVERAGE_OPTIONS.map(option => (
                <option key={option} value={option}>{coverageLabels[option]}</option>
              ))}
            </select>
          </Field>
          <Field label={isOfficialMode ? '官方 API 地址' : '自定义 Gateway 地址'} mutedText={mutedText} wide>
            <input
              className={`${inputClass} ${isOfficialMode ? 'cursor-not-allowed opacity-75' : ''}`}
              value={addressValue}
              readOnly={isOfficialMode}
              onChange={event => updateDraftKey({ baseUrl: event.target.value })}
              placeholder={draftKey.apiFormat === 'anthropic' ? 'https://api.anthropic.com' : 'https://your-gateway.com/v1'}
            />
            <p className={`mt-1 text-[9px] ${mutedText}`}>
              {isOfficialMode ? '官方模式会自动使用供应商固定地址；如需中转网关，请切到自定义。' : '自定义模式会把这里作为运行时 Base URL，不会覆盖其他 Key。'}
            </p>
          </Field>
          {draftKey.modelCoverage === 'allowlist' && (
            <Field label="模型白名单" mutedText={mutedText} wide>
              <input
                className={inputClass}
                value={draftKey.allowedModels.join(', ')}
                onChange={event => updateDraftKey({ allowedModels: event.target.value.split(',').map(item => item.trim()).filter(Boolean) })}
                placeholder="gpt-5.5, deepseek-v4-flash"
              />
            </Field>
          )}
          {draftKey.modelCoverage === 'pattern' && (
            <Field label="模型名称规则" mutedText={mutedText} wide>
              <input className={inputClass} value={draftKey.modelPattern || ''} onChange={event => updateDraftKey({ modelPattern: event.target.value })} placeholder="gpt-* / claude-* / gemini-*" />
            </Field>
          )}
          <Field label="备注" mutedText={mutedText} wide>
            <textarea className={`${inputClass} min-h-[70px] resize-none`} value={draftKey.note || ''} onChange={event => updateDraftKey({ note: event.target.value })} placeholder="额度、用途、注意事项..." />
          </Field>
        </div>
      </div>
    );
  };

  const renderProfileRail = () => (
    <div className={`rounded-sm border ${sectionClass} p-3`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
          <Layers className="h-3.5 w-3.5" />
          路由方案
        </div>
        <button onClick={handleCreateProfile} className="rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="max-h-44 space-y-2 overflow-y-auto pr-1">
        {config.routeProfiles.map(profile => {
          const isSelected = profile.id === selectedProfile.id;
          const isActive = profile.id === config.activeRouteProfileId;
          return (
            <button
              key={profile.id}
              onClick={() => setSelectedProfileId(profile.id)}
              className={`flex w-full items-center justify-between gap-2 rounded-sm border px-3 py-2 text-left text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${isSelected ? 'border-white/40 text-white' : 'border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300'}`}
            >
              <span className="min-w-0 truncate">{profile.name}</span>
              {isActive ? <Check className="h-3.5 w-3.5 shrink-0" /> : <Route className="h-3.5 w-3.5 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderBulkControls = () => (
    <div className={`rounded-sm border ${sectionClass} p-3`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
            <ListChecks className="h-3.5 w-3.5" />
            统一切换
          </div>
          <p className={`mt-1 text-[10px] ${mutedText}`}>只影响当前选中的路由方案</p>
        </div>
        <div className="flex items-center gap-2">
          {selectedProfile.id !== config.activeRouteProfileId && (
            <button onClick={handleActivateProfile} className="rounded-sm border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ borderColor: `${accentColor}55`, color: accentColor }}>
              设为当前运行
            </button>
          )}
          <button onClick={handleDeleteProfile} disabled={config.routeProfiles.length <= 1} className="rounded-sm border border-red-500/20 p-2 text-red-400/80 transition-colors hover:border-red-400/50 disabled:opacity-30">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[1.2fr_1fr_auto_auto] gap-2">
        <input className={inputClass} value={routeNameDraft} onChange={event => setRouteNameDraft(event.target.value)} />
        <button onClick={handleSaveProfileName} className="flex items-center justify-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
          <Save className="h-3.5 w-3.5" />
          保存方案名
        </button>
        <select className={inputClass} value={bulkKeyId} onChange={event => setBulkKeyId(event.target.value)}>
          {config.keyEntries.map(entry => (
            <option key={entry.id} value={entry.id}>{entry.name}</option>
          ))}
        </select>
        <button onClick={handleApplyKeyToAll} className="rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
          应用 Key
        </button>
        <select className={`${inputClass} col-span-2`} value={bulkModel} onChange={event => setBulkModel(event.target.value)}>
          {[...AVAILABLE_MODELS.core, ...AVAILABLE_MODELS.image].map(model => (
            <option key={model} value={model}>{getModelOption(model)?.name || model}</option>
          ))}
        </select>
        <button onClick={handleApplyModelToAll} className="col-span-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
          应用模型到兼容引擎
        </button>
      </div>
    </div>
  );

  const renderRouteMatrix = () => (
    <div className={`min-h-0 flex-1 rounded-sm border ${sectionClass}`}>
      <div className="grid grid-cols-[1.1fr_1.1fr_1.2fr_0.9fr_1.4fr_100px] border-b border-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
        <span>引擎</span>
        <span>模型</span>
        <span>API Key</span>
        <span>格式</span>
        <span>实际请求地址</span>
        <span className="text-right">测试</span>
      </div>
      <div className="max-h-[calc(100vh-360px)] overflow-y-auto">
        {ENGINE_CONFIGS.map(engine => {
          const engineId = engine.id as EngineId;
          const binding = selectedProfile.bindings[engineId] || {
            model: config.engines[engineId],
            keyId: config.keyEntries[0]?.id || '',
          };
          const key = config.keyEntries.find(entry => entry.id === binding.keyId);
          const compatibleKeys = config.keyEntries.filter(entry => isApiKeyCompatibleWithModel(entry, binding.model));
          const requestUrl = key ? getRuntimeRequestUrl(key) : '';
          const test = key ? tests[key.id] : undefined;
          const isActiveRoute = selectedProfile.id === config.activeRouteProfileId;

          return (
            <div key={engine.id} className="grid grid-cols-[1.1fr_1.1fr_1.2fr_0.9fr_1.4fr_100px] items-center gap-3 border-b border-white/5 px-4 py-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {renderStatusDot(Boolean(key?.apiKey))}
                  <span className="truncate text-[12px] font-bold uppercase tracking-[0.12em]">{engine.name}</span>
                </div>
                <p className={`mt-1 line-clamp-2 text-[10px] leading-tight ${mutedText}`}>{engine.description}</p>
              </div>

              <select className={inputClass} value={binding.model} onChange={event => updateBinding(engineId, { model: event.target.value })}>
                {engine.allowedModels.map(model => {
                  const meta = getModelOption(model);
                  return <option key={model} value={model}>{meta?.name || model}</option>;
                })}
              </select>

              <select className={inputClass} value={binding.keyId} onChange={event => updateBinding(engineId, { keyId: event.target.value })}>
                {(compatibleKeys.length > 0 ? compatibleKeys : config.keyEntries).map(entry => (
                  <option key={entry.id} value={entry.id}>
                    {entry.name}{!isApiKeyCompatibleWithModel(entry, binding.model) ? ' (不兼容)' : ''}
                  </option>
                ))}
              </select>

              <div className="min-w-0">
                <div className="truncate text-[10px] font-bold uppercase tracking-[0.12em]">{key ? API_FORMAT_LABELS[key.apiFormat] : '未绑定'}</div>
                <div className={`mt-1 truncate text-[9px] ${mutedText}`}>{key ? API_KEY_PROVIDER_LABELS[key.provider] : 'No Key'}</div>
              </div>

              <div className="min-w-0">
                <div className={`truncate text-[10px] font-mono ${requestUrl ? 'text-zinc-300' : 'text-red-400'}`}>
                  {requestUrl || '缺少 Base URL'}
                </div>
                <div className={`mt-1 truncate text-[9px] ${isActiveRoute ? mutedText : 'text-yellow-500/70'}`}>
                  {isActiveRoute ? maskApiKey(key?.apiKey || '') : '预览方案，尚未设为当前运行'}
                </div>
              </div>

              <button
                disabled={!key || test?.status === 'testing'}
                onClick={() => key && handleTestKey(key.id, binding.model)}
                className="ml-auto flex items-center justify-center gap-1 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:border-white/30 hover:text-white disabled:opacity-30"
              >
                {test?.status === 'success' ? <Check className="h-3.5 w-3.5" /> : test?.status === 'error' ? <AlertTriangle className="h-3.5 w-3.5" /> : <Zap className={`h-3.5 w-3.5 ${test?.status === 'testing' ? 'animate-spin' : ''}`} />}
                TEST
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  const runtimeDiagnostics = configService.getRuntimeDiagnostics();
  const selectedKeyRoutes = ENGINE_CONFIGS.filter(engine => selectedProfile.bindings[engine.id as EngineId]?.keyId === selectedKeyId);

  const renderDiagnostics = () => (
    <div className={`flex min-h-0 flex-col rounded-sm border ${sectionClass}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>
            <Eye className="h-3.5 w-3.5" />
            保存信息
          </div>
          <p className={`mt-1 text-[10px] ${mutedText}`}>当前页面到底保存了什么</p>
        </div>
        <button onClick={copyDiagnostics} className="rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
          <Copy className="h-4 w-4" />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div>
            <Label mutedText={mutedText}>当前运行方案</Label>
            <div className="mt-2 rounded-sm border border-white/10 bg-black/20 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[13px] font-bold uppercase tracking-[0.14em]">{activeProfile?.name || '未设置'}</span>
                <span className={`text-[9px] ${mutedText}`}>{config.activeRouteProfileId}</span>
              </div>
            </div>
          </div>

          <div>
            <Label mutedText={mutedText}>选中 Key</Label>
            <div className="mt-2 space-y-2 rounded-sm border border-white/10 bg-black/20 p-3 text-[10px] leading-relaxed">
              <InfoLine label="名称" value={selectedKey?.name || '未选择'} />
              <InfoLine label="Key" value={maskApiKey(selectedKey?.apiKey || '')} />
              <InfoLine label="类型" value={selectedKey ? API_KEY_PROVIDER_LABELS[selectedKey.provider] : '未选择'} />
              <InfoLine label="格式" value={selectedKey ? API_FORMAT_LABELS[selectedKey.apiFormat] : '未选择'} />
              <InfoLine label="地址" value={selectedKey ? (getRuntimeRequestUrl(selectedKey) || '缺少 Base URL') : '未选择'} />
              <InfoLine label="覆盖" value={selectedKey ? coverageLabels[selectedKey.modelCoverage] : '未选择'} />
            </div>
          </div>

          <div>
            <Label mutedText={mutedText}>这个 Key 被哪些引擎使用</Label>
            <div className="mt-2 space-y-2">
              {selectedKeyRoutes.length > 0 ? selectedKeyRoutes.map(engine => (
                <div key={engine.id} className="rounded-sm border border-white/10 bg-black/20 px-3 py-2 text-[10px]">
                  <div className="font-bold uppercase tracking-[0.12em]">{engine.name}</div>
                  <div className={`mt-1 font-mono ${mutedText}`}>{selectedProfile.bindings[engine.id as EngineId]?.model}</div>
                </div>
              )) : (
                <div className={`rounded-sm border border-white/10 bg-black/20 px-3 py-2 text-[10px] ${mutedText}`}>当前选中方案没有使用这个 Key。</div>
              )}
            </div>
          </div>

          <div>
            <Label mutedText={mutedText}>当前运行诊断</Label>
            <div className="mt-2 space-y-2">
              {runtimeDiagnostics.map(item => (
                <div key={item.engineId} className="rounded-sm border border-white/10 bg-black/20 px-3 py-2 text-[10px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold uppercase tracking-[0.12em]">{item.engineName}</span>
                    <span className={item.hasApiKey ? 'text-zinc-300' : 'text-red-400'}>{item.hasApiKey ? 'READY' : 'NO KEY'}</span>
                  </div>
                  <div className={`mt-1 truncate font-mono ${mutedText}`}>{item.model}</div>
                  <div className={`mt-1 truncate font-mono ${mutedText}`}>{item.requestUrl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <h2 className="text-xl font-serif uppercase leading-none tracking-[0.22em]">系统架构配置</h2>
          <div className="mt-2 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.36em]" style={{ color: accentColor }}>
            <span>API Key 库</span>
            <span>·</span>
            <span>路由方案库</span>
            <span>·</span>
            <span>运行诊断</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
          {statusMessage && <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>{statusMessage}</span>}
          {cloudMessage && <span className={`max-w-[440px] text-right text-[10px] leading-snug ${resultTone(cloudMessage, mutedText)}`}>{cloudMessage}</span>}
          <button onClick={handleCloudLoad} className="flex items-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
            <Cloud className="h-3.5 w-3.5" />
            账户载入
          </button>
          <button onClick={handleCloudSave} className="flex items-center gap-2 rounded-sm border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
            <Cloud className="h-3.5 w-3.5" />
            同步账户
          </button>
          <button onClick={() => refresh(configService.getConfig(), '已刷新本地配置')} className="rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button onClick={onClose} className="rounded-sm border border-white/10 p-2 text-zinc-300 transition-colors hover:border-white/30 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main className="grid min-h-0 flex-1 grid-cols-[300px_minmax(620px,1fr)_340px] gap-4 overflow-x-auto p-4 xl:grid-cols-[330px_minmax(700px,1fr)_360px]">
        <section className="flex min-h-0 flex-col gap-4">
          {renderProfileRail()}
          <div className="min-h-0 flex-1">
            {renderKeyList()}
          </div>
        </section>

        <section className="flex min-h-0 flex-col gap-4">
          {renderBulkControls()}
          {renderRouteMatrix()}
        </section>

        <section className="flex min-h-0 flex-col gap-4">
          {renderKeyEditor()}
          {renderDiagnostics()}
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

const InfoLine: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="grid grid-cols-[72px_1fr] gap-2">
    <span className="text-zinc-500">{label}</span>
    <span className="min-w-0 truncate font-mono text-zinc-300">{value}</span>
  </div>
);
