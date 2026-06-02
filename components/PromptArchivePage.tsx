import React, { useEffect, useMemo, useState } from 'react';
import {
  Archive,
  Check,
  Clipboard,
  Copy,
  Download,
  FileJson,
  Link as LinkIcon,
  Plus,
  Save,
  Search,
  Sparkles,
  Tag,
  Trash2,
  Upload
} from 'lucide-react';

type PromptArchivePageProps = {
  lang: 'CN' | 'EN';
  onClose: () => void;
};

type PromptCategory = 'image' | 'video' | 'character' | 'style' | 'camera' | 'workflow' | 'unknown';
type PromptStatus = 'raw' | 'cleaned' | 'tested' | 'excellent';

type PromptEntry = {
  id: string;
  title: string;
  body: string;
  bodyCn: string;
  bodyEn: string;
  source: string;
  sourceUrl: string;
  author: string;
  category: PromptCategory;
  status: PromptStatus;
  tags: string[];
  notes: string;
  createdAt: string;
  updatedAt: string;
};

type PromptDraft = Omit<PromptEntry, 'id' | 'createdAt' | 'updatedAt'>;

const STORAGE_KEY = 'mist-prompt-archive-v1';
const SEEDED_KEY = 'mist-prompt-archive-seeded-packs-v1';
const LEGACY_SEEDED_IDS = ['seedance-wind-witch-pack-01', 'sample-visual-formula'];
const EXTERNAL_SEED_FILES = [
  '/data/prompt-archive/seedance-nightmare-awakening-time-fall.json'
];

const categoryOptions: Array<{ id: PromptCategory; label: string; labelEn: string }> = [
  { id: 'image', label: '图像', labelEn: 'Image' },
  { id: 'video', label: '视频', labelEn: 'Video' },
  { id: 'character', label: '角色', labelEn: 'Character' },
  { id: 'style', label: '风格', labelEn: 'Style' },
  { id: 'camera', label: '镜头', labelEn: 'Camera' },
  { id: 'workflow', label: '工作流', labelEn: 'Workflow' },
  { id: 'unknown', label: '未分类', labelEn: 'Unsorted' }
];

const statusOptions: Array<{ id: PromptStatus; label: string; labelEn: string }> = [
  { id: 'raw', label: '原始', labelEn: 'Raw' },
  { id: 'cleaned', label: '已清洗', labelEn: 'Cleaned' },
  { id: 'tested', label: '已测试', labelEn: 'Tested' },
  { id: 'excellent', label: '精品', labelEn: 'Excellent' }
];

const emptyDraft: PromptDraft = {
  title: '',
  body: '',
  bodyCn: '',
  bodyEn: '',
  source: 'X / aimikoda',
  sourceUrl: '',
  author: 'aimikoda',
  category: 'unknown',
  status: 'raw',
  tags: [],
  notes: ''
};

const sampleEntries: PromptEntry[] = [
  {
    id: 'seedance-wind-witch-pack-01',
    title: '配套 01：风之女巫对抗巨兽',
    body: 'Use @[storyboard ref] as the authoritative 15-second cinematic storyboard blueprint. Do not render the storyboard sheet itself. Exclude all panel borders, text, labels, headers and layout elements. Treat each storyboard panel as an individual sequential shot guide. Follow panel order, camera angles, action flow, timing rhythm and escalation exactly.\n\nUse @[char ref] as the authoritative character reference.\n\nA young wind witch stands in a grassy field as a massive beast charges toward her. The threat remains visible and readable throughout the sequence.\n\nVisual style: high-end animated fantasy film, stylized cinematic realism, warm daylight, painterly grass movement, vibrant cyan-white wind magic, aggressive but readable cinematography.\n\nThe witch detects the threat, braces herself and narrowly evades the charge. Wind gathers around her feet and hands. Fast-moving wind ribbons strike the beast but fail to stop it. The creature pushes forward through the attack.\n\nThe witch escalates, creating a powerful rotating vortex around the beast. Multiple wind currents converge, tightening into a violent storm trap. Grass, dust and debris are pulled into the airflow.\n\nThe vortex intensifies as the witch gains control. Wind pressure crushes inward from all directions. The beast struggles against the storm.\n\nFinal shot: the witch thrusts her hand forward and releases a concentrated wind blast. The vortex collapses into a single devastating strike that launches the beast across the field. The threat is defeated.\n\nDynamic camera language: low-angle hero shots, ground tracking shots, tight facial close-ups, fast orbit shots, wide environmental reveals, aerial escalation shots, dramatic push-ins.\n\nStrong physical wind interaction, readable action, continuous escalation, spectacular wind VFX and premium animation quality.',
    bodyCn: '使用 @[storyboard ref] 作为权威的 15 秒电影感分镜蓝图。不要渲染分镜表本身。排除所有分镜边框、文字、标签、标题和版式元素。把每一个分镜格都视为独立的连续镜头指引。严格遵循分镜顺序、机位角度、动作流、时间节奏和逐步升级关系。\n\n使用 @[char ref] 作为权威角色参考。\n\n一名年轻的风之女巫站在草地中，一头巨大的野兽向她冲来。整个序列中，威胁必须始终保持可见且易读。\n\n视觉风格：高端动画奇幻电影，风格化电影写实，温暖日光，绘画感草地运动，明亮的青白色风系魔法，具有攻击性但动作清晰可读的摄影语言。\n\n女巫察觉威胁，稳住身体，并惊险地躲开冲撞。风在她的脚边和手中聚集。高速移动的风之缎带击中野兽，但未能阻止它。巨兽顶着攻击继续向前推进。\n\n女巫进一步升级攻势，在巨兽周围制造强力旋转涡流。多股风流汇聚，收紧成一个狂暴的风暴陷阱。草叶、尘土和碎屑被卷入气流。\n\n当女巫逐渐取得控制，涡流继续增强。风压从四面八方向内挤压。巨兽在风暴中挣扎。\n\n最终镜头：女巫猛地向前推出手掌，释放一道凝聚的风爆。涡流坍缩为一次毁灭性的集中打击，将巨兽轰飞到草地远处。威胁被击败。\n\n动态摄影语言：低角度英雄镜头、贴地跟拍、紧凑面部特写、快速环绕镜头、宽阔环境揭示、空中升级镜头、戏剧性推进。\n\n强调强烈的物理风力互动、清晰可读的动作、连续升级的节奏、壮观的风系 VFX，以及高级动画品质。',
    bodyEn: 'Use @[storyboard ref] as the authoritative 15-second cinematic storyboard blueprint. Do not render the storyboard sheet itself. Exclude all panel borders, text, labels, headers and layout elements. Treat each storyboard panel as an individual sequential shot guide. Follow panel order, camera angles, action flow, timing rhythm and escalation exactly.\n\nUse @[char ref] as the authoritative character reference.\n\nA young wind witch stands in a grassy field as a massive beast charges toward her. The threat remains visible and readable throughout the sequence.\n\nVisual style: high-end animated fantasy film, stylized cinematic realism, warm daylight, painterly grass movement, vibrant cyan-white wind magic, aggressive but readable cinematography.\n\nThe witch detects the threat, braces herself and narrowly evades the charge. Wind gathers around her feet and hands. Fast-moving wind ribbons strike the beast but fail to stop it. The creature pushes forward through the attack.\n\nThe witch escalates, creating a powerful rotating vortex around the beast. Multiple wind currents converge, tightening into a violent storm trap. Grass, dust and debris are pulled into the airflow.\n\nThe vortex intensifies as the witch gains control. Wind pressure crushes inward from all directions. The beast struggles against the storm.\n\nFinal shot: the witch thrusts her hand forward and releases a concentrated wind blast. The vortex collapses into a single devastating strike that launches the beast across the field. The threat is defeated.\n\nDynamic camera language: low-angle hero shots, ground tracking shots, tight facial close-ups, fast orbit shots, wide environmental reveals, aerial escalation shots, dramatic push-ins.\n\nStrong physical wind interaction, readable action, continuous escalation, spectacular wind VFX and premium animation quality.',
    source: 'User paste / Seedance 2.0',
    sourceUrl: '',
    author: 'aimikoda / collected',
    category: 'video',
    status: 'cleaned',
    tags: ['Seedance 2.0', '分镜参考', '角色参考', '风魔法', '动作升级', '奇幻战斗'],
    notes: '第一套配套提示词。结构重点：storyboard ref 管控 15 秒镜头顺序，char ref 锁定角色，一路从发现威胁、闪避、风带攻击、涡流陷阱升级到最终集中风爆。',
    createdAt: '2026-06-02T00:00:00.000Z',
    updatedAt: '2026-06-02T00:00:00.000Z'
  },
  {
    id: 'sample-visual-formula',
    title: '样例：视觉风格公式拆解',
    body: 'Subject + medium + lens / framing + material texture + lighting contract + color system + negative constraints.',
    bodyCn: '主体 + 媒介 + 镜头 / 构图 + 材质纹理 + 光线契约 + 色彩系统 + 负面约束。',
    bodyEn: 'Subject + medium + lens / framing + material texture + lighting contract + color system + negative constraints.',
    source: 'Manual pattern',
    sourceUrl: '',
    author: 'Mist Research',
    category: 'workflow',
    status: 'cleaned',
    tags: ['公式', '拆解', '视觉结构'],
    notes: '可以用来把外部提示词拆成稳定模块：主体、媒介、镜头、材质、光线、色彩、约束。',
    createdAt: '2026-06-02T00:00:00.000Z',
    updatedAt: '2026-06-02T00:00:00.000Z'
  }
];

const createId = () => `prompt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const normalizeTags = (value: string) => value
  .split(/[,，#\n]/)
  .map(tag => tag.trim())
  .filter(Boolean)
  .slice(0, 16);

const formatDate = (value: string) => {
  try {
    return new Intl.DateTimeFormat('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(value));
  } catch {
    return 'unknown';
  }
};

const getCategoryLabel = (id: PromptCategory, lang: 'CN' | 'EN') => {
  const item = categoryOptions.find(option => option.id === id);
  return item ? (lang === 'CN' ? item.label : item.labelEn) : id;
};

const getStatusLabel = (id: PromptStatus, lang: 'CN' | 'EN') => {
  const item = statusOptions.find(option => option.id === id);
  return item ? (lang === 'CN' ? item.label : item.labelEn) : id;
};

const inferTitle = (text: string) => {
  const compact = text.replace(/\s+/g, ' ').trim();
  if (!compact) return '';
  return compact.slice(0, 42) + (compact.length > 42 ? '...' : '');
};

const getSeededIds = () => {
  if (typeof window === 'undefined') return new Set<string>();
  const raw = window.localStorage.getItem(SEEDED_KEY);
  if (raw === 'true') return new Set(LEGACY_SEEDED_IDS);
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : []);
  } catch {
    return new Set<string>();
  }
};

const saveSeededIds = (ids: Set<string>) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(SEEDED_KEY, JSON.stringify([...ids]));
};

const loadInitialEntries = () => {
  if (typeof window === 'undefined') return sampleEntries;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? parseImportedEntries(JSON.parse(stored)) : [];
    if (parsed.length === 0) {
      saveSeededIds(new Set(sampleEntries.map(entry => entry.id)));
      return sampleEntries;
    }
    const seededIds = getSeededIds();
    const knownIds = new Set(parsed.map(entry => entry.id));
    const missingSeeds = sampleEntries.filter(entry => !knownIds.has(entry.id) && !seededIds.has(entry.id));
    if (missingSeeds.length === 0) return parsed;
    const merged = [...missingSeeds, ...parsed];
    missingSeeds.forEach(entry => seededIds.add(entry.id));
    saveSeededIds(seededIds);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return sampleEntries;
  }
};

const parseImportedEntries = (value: unknown): PromptEntry[] => {
  if (!Array.isArray(value)) return [];
  return value
    .filter(item => item && typeof item === 'object')
    .map(item => item as Partial<PromptEntry>)
    .filter(item => typeof item.body === 'string' && item.body.trim())
    .map(item => {
      const now = new Date().toISOString();
      return {
        id: typeof item.id === 'string' ? item.id : createId(),
        title: item.title?.trim() || inferTitle(item.body || '') || 'Untitled prompt',
        body: item.body || '',
        bodyCn: item.bodyCn || '',
        bodyEn: item.bodyEn || item.body || '',
        source: item.source || '',
        sourceUrl: item.sourceUrl || '',
        author: item.author || '',
        category: categoryOptions.some(option => option.id === item.category) ? item.category as PromptCategory : 'unknown',
        status: statusOptions.some(option => option.id === item.status) ? item.status as PromptStatus : 'raw',
        tags: Array.isArray(item.tags) ? item.tags.filter(tag => typeof tag === 'string').slice(0, 16) : [],
        notes: item.notes || '',
        createdAt: item.createdAt || now,
        updatedAt: item.updatedAt || now
      };
    });
};

const mergeSeedEntries = (current: PromptEntry[], seedEntries: PromptEntry[]) => {
  const seededIds = getSeededIds();
  const knownIds = new Set(current.map(entry => entry.id));
  const missingSeeds = seedEntries.filter(entry => !knownIds.has(entry.id) && !seededIds.has(entry.id));
  if (missingSeeds.length === 0) return current;
  missingSeeds.forEach(entry => seededIds.add(entry.id));
  saveSeededIds(seededIds);
  return [...missingSeeds, ...current];
};

export default function PromptArchivePage({ lang, onClose }: PromptArchivePageProps) {
  const [entries, setEntries] = useState<PromptEntry[]>(loadInitialEntries);
  const [draft, setDraft] = useState<PromptDraft>(emptyDraft);
  const [tagInput, setTagInput] = useState('');
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<PromptCategory | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<PromptStatus | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(() => loadInitialEntries()[0]?.id || '');
  const [copiedId, setCopiedId] = useState<string>('');
  const [importValue, setImportValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      EXTERNAL_SEED_FILES.map(file => (
        fetch(file)
          .then(response => response.ok ? response.json() : [])
          .catch(() => [])
      ))
    ).then(seedFiles => {
      if (cancelled) return;
      const externalEntries = seedFiles.flatMap(file => parseImportedEntries(file));
      if (externalEntries.length === 0) return;
      setEntries(prev => mergeSeedEntries(prev, externalEntries));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const selectedEntry = useMemo(
    () => entries.find(entry => entry.id === selectedId) || entries[0] || null,
    [entries, selectedId]
  );

  const filteredEntries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return entries.filter(entry => {
      const categoryMatch = categoryFilter === 'all' || entry.category === categoryFilter;
      const statusMatch = statusFilter === 'all' || entry.status === statusFilter;
      if (!categoryMatch || !statusMatch) return false;
      if (!needle) return true;
      return [
        entry.title,
        entry.body,
        entry.bodyCn,
        entry.bodyEn,
        entry.source,
        entry.sourceUrl,
        entry.author,
        entry.notes,
        entry.tags.join(' ')
      ].join(' ').toLowerCase().includes(needle);
    });
  }, [categoryFilter, entries, query, statusFilter]);

  const allTags = useMemo(() => {
    const countMap = new Map<string, number>();
    entries.forEach(entry => entry.tags.forEach(tag => countMap.set(tag, (countMap.get(tag) || 0) + 1)));
    return [...countMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 18);
  }, [entries]);

  const stats = useMemo(() => ({
    total: entries.length,
    raw: entries.filter(entry => entry.status === 'raw').length,
    excellent: entries.filter(entry => entry.status === 'excellent').length,
    tags: allTags.length
  }), [allTags.length, entries]);

  const updateDraft = <K extends keyof PromptDraft>(key: K, value: PromptDraft[K]) => {
    setDraft(prev => ({ ...prev, [key]: value }));
  };

  const saveDraft = () => {
    const mainBody = (draft.bodyEn || draft.body || draft.bodyCn).trim();
    if (!mainBody) return;
    const now = new Date().toISOString();
    const nextEntry: PromptEntry = {
      ...draft,
      id: createId(),
      title: draft.title.trim() || inferTitle(mainBody) || (lang === 'CN' ? '未命名提示词' : 'Untitled prompt'),
      body: mainBody,
      bodyCn: draft.bodyCn.trim(),
      bodyEn: (draft.bodyEn || draft.body).trim(),
      tags: [...new Set([...draft.tags, ...normalizeTags(tagInput)])],
      createdAt: now,
      updatedAt: now
    };
    setEntries(prev => [nextEntry, ...prev]);
    setSelectedId(nextEntry.id);
    setDraft({ ...emptyDraft, source: draft.source, author: draft.author });
    setTagInput('');
  };

  const updateEntry = <K extends keyof PromptEntry>(id: string, key: K, value: PromptEntry[K]) => {
    setEntries(prev => prev.map(entry => entry.id === id ? {
      ...entry,
      [key]: value,
      updatedAt: new Date().toISOString()
    } : entry));
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => {
      const next = prev.filter(entry => entry.id !== id);
      if (selectedId === id) setSelectedId(next[0]?.id || '');
      return next;
    });
  };

  const duplicateToDraft = (entry: PromptEntry) => {
    setDraft({
      title: `${entry.title} copy`,
      body: entry.body,
      bodyCn: entry.bodyCn,
      bodyEn: entry.bodyEn,
      source: entry.source,
      sourceUrl: entry.sourceUrl,
      author: entry.author,
      category: entry.category,
      status: 'raw',
      tags: entry.tags,
      notes: entry.notes
    });
    setTagInput(entry.tags.join(', '));
  };

  const copyPrompt = async (entry: PromptEntry) => {
    await navigator.clipboard.writeText(entry.bodyEn || entry.body);
    setCopiedId(entry.id);
    window.setTimeout(() => setCopiedId(''), 1200);
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mist-prompt-archive-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importJson = () => {
    try {
      const parsed = parseImportedEntries(JSON.parse(importValue));
      if (parsed.length === 0) return;
      setEntries(prev => {
        const knownIds = new Set(prev.map(entry => entry.id));
        const next = [...parsed.filter(entry => !knownIds.has(entry.id)), ...prev];
        setSelectedId(next[0]?.id || '');
        return next;
      });
      setImportValue('');
    } catch {
      window.alert(lang === 'CN' ? 'JSON 格式不对，导入失败。' : 'Invalid JSON.');
    }
  };

  return (
    <div className="h-full w-full overflow-hidden bg-[#030303] text-zinc-200">
      <div className="h-full grid grid-rows-[auto_1fr]">
        <header className="border-b border-white/10 bg-black/80 px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="h-10 px-4 border border-white/10 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
              >
                {lang === 'CN' ? '返回' : 'Back'}
              </button>
              <div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#22d3ee]">
                  <Archive size={14} />
                  Prompt Archive
                </div>
                <h1 className="mt-1 font-serif text-2xl text-white">
                  {lang === 'CN' ? '提示词采集与研究台' : 'Prompt Capture Lab'}
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-[11px] uppercase tracking-[0.14em] text-zinc-500">
              <div className="border border-white/10 bg-white/[0.03] px-4 py-2">
                <div className="text-lg font-semibold text-white">{stats.total}</div>
                {lang === 'CN' ? '总数' : 'Total'}
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-2">
                <div className="text-lg font-semibold text-[#fb7185]">{stats.raw}</div>
                {lang === 'CN' ? '原始' : 'Raw'}
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-2">
                <div className="text-lg font-semibold text-[#ff4f3f]">{stats.excellent}</div>
                {lang === 'CN' ? '精品' : 'Best'}
              </div>
              <div className="border border-white/10 bg-white/[0.03] px-4 py-2">
                <div className="text-lg font-semibold text-[#22d3ee]">{stats.tags}</div>
                Tags
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-0 grid grid-cols-[360px_minmax(360px,1fr)_420px] max-xl:grid-cols-[340px_minmax(360px,1fr)] max-lg:grid-cols-1">
          <section className="min-h-0 overflow-y-auto border-r border-white/10 bg-black/45 p-5">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              <Clipboard size={14} />
              {lang === 'CN' ? '粘贴入口' : 'Capture'}
            </div>
            <div className="mt-4 space-y-3">
              <input
                value={draft.title}
                onChange={event => updateDraft('title', event.target.value)}
                placeholder={lang === 'CN' ? '标题，可空，系统会自动截取' : 'Title, optional'}
                className="w-full border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white outline-none focus:border-[#22d3ee]/60"
              />
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">English Prompt</div>
                <textarea
                  value={draft.bodyEn || draft.body}
                  onChange={event => {
                    updateDraft('bodyEn', event.target.value);
                    updateDraft('body', event.target.value);
                  }}
                  placeholder={lang === 'CN' ? '英文原始提示词，给 Seedance / 图像模型直接使用...' : 'Original English prompt...'}
                  className="min-h-[190px] w-full resize-none border border-white/10 bg-white/[0.03] px-3 py-3 font-mono text-xs leading-relaxed text-zinc-200 outline-none focus:border-[#22d3ee]/60"
                />
              </div>
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">中文翻译 / 研究版</div>
                <textarea
                  value={draft.bodyCn}
                  onChange={event => updateDraft('bodyCn', event.target.value)}
                  placeholder={lang === 'CN' ? '中文翻译、结构化理解、研究版提示词...' : 'Chinese translation / research version...'}
                  className="min-h-[150px] w-full resize-none border border-white/10 bg-white/[0.03] px-3 py-3 text-xs leading-relaxed text-zinc-200 outline-none focus:border-[#22d3ee]/60"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={draft.category}
                  onChange={event => updateDraft('category', event.target.value as PromptCategory)}
                  className="border border-white/10 bg-[#080808] px-3 py-3 text-xs text-zinc-200 outline-none"
                >
                  {categoryOptions.map(option => (
                    <option key={option.id} value={option.id}>{lang === 'CN' ? option.label : option.labelEn}</option>
                  ))}
                </select>
                <select
                  value={draft.status}
                  onChange={event => updateDraft('status', event.target.value as PromptStatus)}
                  className="border border-white/10 bg-[#080808] px-3 py-3 text-xs text-zinc-200 outline-none"
                >
                  {statusOptions.map(option => (
                    <option key={option.id} value={option.id}>{lang === 'CN' ? option.label : option.labelEn}</option>
                  ))}
                </select>
              </div>
              <input
                value={tagInput}
                onChange={event => setTagInput(event.target.value)}
                placeholder={lang === 'CN' ? '标签，用逗号分隔：Midjourney, 人像, 光线' : 'Tags, comma separated'}
                className="w-full border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-zinc-200 outline-none focus:border-[#22d3ee]/60"
              />
              <input
                value={draft.sourceUrl}
                onChange={event => updateDraft('sourceUrl', event.target.value)}
                placeholder={lang === 'CN' ? '来源链接，可空' : 'Source URL, optional'}
                className="w-full border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-zinc-200 outline-none focus:border-[#22d3ee]/60"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  value={draft.source}
                  onChange={event => updateDraft('source', event.target.value)}
                  placeholder={lang === 'CN' ? '来源' : 'Source'}
                  className="border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-zinc-200 outline-none"
                />
                <input
                  value={draft.author}
                  onChange={event => updateDraft('author', event.target.value)}
                  placeholder={lang === 'CN' ? '作者' : 'Author'}
                  className="border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-zinc-200 outline-none"
                />
              </div>
              <textarea
                value={draft.notes}
                onChange={event => updateDraft('notes', event.target.value)}
                placeholder={lang === 'CN' ? '你的初步观察：为什么值得收、可能适合什么模型、哪里要改...' : 'Research notes...'}
                className="min-h-[96px] w-full resize-none border border-white/10 bg-white/[0.03] px-3 py-3 text-xs leading-relaxed text-zinc-300 outline-none"
              />
              <button
                onClick={saveDraft}
                disabled={!(draft.bodyEn || draft.body || draft.bodyCn).trim()}
                className="flex h-11 w-full items-center justify-center gap-2 bg-[#ff4f3f] px-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus size={15} />
                {lang === 'CN' ? '存入资料库' : 'Save Prompt'}
              </button>
            </div>
          </section>

          <section className="min-h-0 overflow-hidden border-r border-white/10 bg-[#050505]">
            <div className="border-b border-white/10 p-5">
              <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-2">
                <Search size={15} className="text-zinc-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder={lang === 'CN' ? '搜索正文、标签、来源、笔记...' : 'Search body, tags, source, notes...'}
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] border ${categoryFilter === 'all' ? 'border-[#22d3ee]/70 text-[#22d3ee]' : 'border-white/10 text-zinc-500 hover:text-white'}`}
                >
                  All
                </button>
                {categoryOptions.map(option => (
                  <button
                    key={option.id}
                    onClick={() => setCategoryFilter(option.id)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] border ${categoryFilter === option.id ? 'border-[#22d3ee]/70 text-[#22d3ee]' : 'border-white/10 text-zinc-500 hover:text-white'}`}
                  >
                    {lang === 'CN' ? option.label : option.labelEn}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] border ${statusFilter === 'all' ? 'border-[#ff4f3f]/70 text-[#ff4f3f]' : 'border-white/10 text-zinc-500 hover:text-white'}`}
                >
                  Status
                </button>
                {statusOptions.map(option => (
                  <button
                    key={option.id}
                    onClick={() => setStatusFilter(option.id)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] border ${statusFilter === option.id ? 'border-[#ff4f3f]/70 text-[#ff4f3f]' : 'border-white/10 text-zinc-500 hover:text-white'}`}
                  >
                    {lang === 'CN' ? option.label : option.labelEn}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[calc(100%-172px)] overflow-y-auto p-4">
              <div className="grid gap-3">
                {filteredEntries.map(entry => (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedId(entry.id)}
                    className={`group border p-4 text-left transition-colors ${selectedEntry?.id === entry.id ? 'border-[#22d3ee]/60 bg-[#22d3ee]/[0.06]' : 'border-white/10 bg-white/[0.025] hover:border-white/25'}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="truncate font-serif text-lg text-white">{entry.title}</div>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                          <span>{getCategoryLabel(entry.category, lang)}</span>
                          <span className="text-zinc-700">/</span>
                          <span>{getStatusLabel(entry.status, lang)}</span>
                          <span className="text-zinc-700">/</span>
                          <span>{formatDate(entry.updatedAt)}</span>
                        </div>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">{entry.author || 'unknown'}</div>
                    </div>
                    <p className="mt-3 line-clamp-3 font-mono text-xs leading-relaxed text-zinc-400">{entry.bodyEn || entry.body}</p>
                    {entry.bodyCn && (
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500">{entry.bodyCn}</p>
                    )}
                    {entry.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {entry.tags.slice(0, 6).map(tag => (
                          <span key={tag} className="border border-white/10 bg-black/30 px-2 py-1 text-[10px] text-zinc-500">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {filteredEntries.length === 0 && (
                <div className="flex h-full items-center justify-center text-sm text-zinc-600">
                  {lang === 'CN' ? '没有匹配的提示词。' : 'No matching prompts.'}
                </div>
              )}
            </div>
          </section>

          <aside className="min-h-0 overflow-y-auto bg-black/55 p-5 max-xl:col-span-2 max-lg:col-span-1">
            {selectedEntry ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    <Sparkles size={14} />
                    {lang === 'CN' ? '研究详情' : 'Research'}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyPrompt(selectedEntry)}
                      className="h-9 w-9 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 inline-flex items-center justify-center"
                      title={lang === 'CN' ? '复制提示词' : 'Copy prompt'}
                    >
                      {copiedId === selectedEntry.id ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                    <button
                      onClick={() => duplicateToDraft(selectedEntry)}
                      className="h-9 w-9 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 inline-flex items-center justify-center"
                      title={lang === 'CN' ? '复制到录入区' : 'Copy to draft'}
                    >
                      <Save size={15} />
                    </button>
                    <button
                      onClick={() => deleteEntry(selectedEntry.id)}
                      className="h-9 w-9 border border-white/10 text-zinc-500 hover:text-[#fb7185] hover:border-[#fb7185]/40 inline-flex items-center justify-center"
                      title={lang === 'CN' ? '删除' : 'Delete'}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                <input
                  value={selectedEntry.title}
                  onChange={event => updateEntry(selectedEntry.id, 'title', event.target.value)}
                  className="w-full border border-white/10 bg-white/[0.03] px-3 py-3 font-serif text-xl text-white outline-none focus:border-[#22d3ee]/60"
                />
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">English Prompt</div>
                  <textarea
                    value={selectedEntry.bodyEn || selectedEntry.body}
                    onChange={event => {
                      updateEntry(selectedEntry.id, 'bodyEn', event.target.value);
                      updateEntry(selectedEntry.id, 'body', event.target.value);
                    }}
                    className="min-h-[220px] w-full resize-y border border-white/10 bg-white/[0.03] px-3 py-3 font-mono text-xs leading-relaxed text-zinc-200 outline-none focus:border-[#22d3ee]/60"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">中文翻译 / 研究版</div>
                  <textarea
                    value={selectedEntry.bodyCn}
                    onChange={event => updateEntry(selectedEntry.id, 'bodyCn', event.target.value)}
                    className="min-h-[190px] w-full resize-y border border-white/10 bg-white/[0.03] px-3 py-3 text-xs leading-relaxed text-zinc-200 outline-none focus:border-[#22d3ee]/60"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={selectedEntry.category}
                    onChange={event => updateEntry(selectedEntry.id, 'category', event.target.value as PromptCategory)}
                    className="border border-white/10 bg-[#080808] px-3 py-3 text-xs text-zinc-200 outline-none"
                  >
                    {categoryOptions.map(option => (
                      <option key={option.id} value={option.id}>{lang === 'CN' ? option.label : option.labelEn}</option>
                    ))}
                  </select>
                  <select
                    value={selectedEntry.status}
                    onChange={event => updateEntry(selectedEntry.id, 'status', event.target.value as PromptStatus)}
                    className="border border-white/10 bg-[#080808] px-3 py-3 text-xs text-zinc-200 outline-none"
                  >
                    {statusOptions.map(option => (
                      <option key={option.id} value={option.id}>{lang === 'CN' ? option.label : option.labelEn}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    value={selectedEntry.source}
                    onChange={event => updateEntry(selectedEntry.id, 'source', event.target.value)}
                    className="border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-zinc-200 outline-none"
                    placeholder={lang === 'CN' ? '来源' : 'Source'}
                  />
                  <input
                    value={selectedEntry.author}
                    onChange={event => updateEntry(selectedEntry.id, 'author', event.target.value)}
                    className="border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-zinc-200 outline-none"
                    placeholder={lang === 'CN' ? '作者' : 'Author'}
                  />
                </div>
                <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-3">
                  <LinkIcon size={14} className="text-zinc-600" />
                  <input
                    value={selectedEntry.sourceUrl}
                    onChange={event => updateEntry(selectedEntry.id, 'sourceUrl', event.target.value)}
                    className="w-full bg-transparent text-xs text-zinc-200 outline-none"
                    placeholder={lang === 'CN' ? '来源链接' : 'Source URL'}
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    <Tag size={13} />
                    Tags
                  </div>
                  <input
                    value={selectedEntry.tags.join(', ')}
                    onChange={event => updateEntry(selectedEntry.id, 'tags', normalizeTags(event.target.value))}
                    className="w-full border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-zinc-200 outline-none"
                  />
                </div>
                <textarea
                  value={selectedEntry.notes}
                  onChange={event => updateEntry(selectedEntry.id, 'notes', event.target.value)}
                  placeholder={lang === 'CN' ? '研究笔记、改写方向、测试结果...' : 'Research notes, rewrite ideas, test results...'}
                  className="min-h-[140px] w-full resize-y border border-white/10 bg-white/[0.03] px-3 py-3 text-xs leading-relaxed text-zinc-300 outline-none"
                />

                <div className="border border-white/10 bg-white/[0.025] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                      {lang === 'CN' ? '导入 / 导出' : 'Import / Export'}
                    </div>
                    <button
                      onClick={exportJson}
                      className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-zinc-400 hover:text-white"
                    >
                      <Download size={13} />
                      JSON
                    </button>
                  </div>
                  <textarea
                    value={importValue}
                    onChange={event => setImportValue(event.target.value)}
                    placeholder={lang === 'CN' ? '粘贴以前导出的 JSON 数组，然后点击导入。' : 'Paste exported JSON array here.'}
                    className="min-h-[84px] w-full resize-y border border-white/10 bg-black/30 px-3 py-3 font-mono text-[11px] leading-relaxed text-zinc-400 outline-none"
                  />
                  <button
                    onClick={importJson}
                    className="mt-2 inline-flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-zinc-400 hover:text-white"
                  >
                    <Upload size={13} />
                    {lang === 'CN' ? '导入' : 'Import'}
                  </button>
                </div>

                {allTags.length > 0 && (
                  <div className="border border-white/10 bg-white/[0.025] p-4">
                    <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                      {lang === 'CN' ? '高频标签' : 'Frequent Tags'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map(([tag, count]) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="inline-flex items-center gap-2 border border-white/10 px-2 py-1 text-[10px] text-zinc-500 hover:text-white"
                        >
                          #{tag}
                          <span className="text-[#22d3ee]">{count}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center border border-white/10 bg-white/[0.025] text-center text-sm text-zinc-600">
                <div>
                  <FileJson className="mx-auto mb-3 text-zinc-700" size={28} />
                  {lang === 'CN' ? '先存入一条提示词。' : 'Save a prompt first.'}
                </div>
              </div>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
