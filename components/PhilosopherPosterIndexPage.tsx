import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Copy,
  Dices,
  GalleryVerticalEnd,
  Grid2X2,
  ImageOff,
  LayoutGrid,
  MapPin,
  PanelRightClose,
  RotateCcw,
  Rows3,
  Search,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import {
  PHILOSOPHER_POSTER_LIST,
  PhilosopherPosterRow,
  PhilosopherTier,
} from '../data/philosopherPosterList';
import {
  philosopherPosterMediaStats,
  resolvePhilosopherPosterImage,
} from '../data/philosopherPosterMedia';

interface PhilosopherPosterIndexPageProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  onClose: () => void;
}

type AtlasViewMode = 'mosaic' | 'grid' | 'index';
type SortMode = 'source' | 'tier' | 'era' | 'name';
type TierFilter = 'ALL' | PhilosopherTier;

interface PhilosopherPosterCard extends PhilosopherPosterRow {
  sourceIndex: number;
  imageUrl?: string;
}

const FAVORITES_KEY = 'mist_philosopher_atlas_favorites_v1';
const tierOrder: Record<PhilosopherTier, number> = { S: 0, A: 1, B: 2 };
const tierLabels: Record<PhilosopherTier, string> = {
  S: '核心节点',
  A: '主干节点',
  B: '延展节点',
};

function readFavorites() {
  if (typeof window === 'undefined') return new Set<string>();
  try {
    const parsed = JSON.parse(window.localStorage.getItem(FAVORITES_KEY) || '[]');
    return new Set(Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : []);
  } catch {
    return new Set<string>();
  }
}

function buildCountOptions(values: string[], limit?: number) {
  const counts = values.reduce<Record<string, number>>((map, value) => {
    if (!value) return map;
    map[value] = (map[value] || 0) + 1;
    return map;
  }, {});

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-Hans-CN'))
    .slice(0, limit)
    .map(([label, count]) => ({ label, count }));
}

function normalizeText(value = '') {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
}

function getSearchHaystack(item: PhilosopherPosterCard) {
  return normalizeText([
    item.id,
    item.nameCn,
    item.nameEn,
    item.years,
    item.region,
    item.tradition,
    item.era,
    item.tier,
    item.tags.join(' '),
    item.posterStyle,
    item.visualMotif,
    item.oneLine,
  ].join(' '));
}

function buildIntro(item: PhilosopherPosterCard) {
  const lineage = [item.region, item.era, item.tradition].filter(Boolean).join(' / ');
  const tagText = item.tags.slice(0, 3).join('、');
  return `${item.nameCn}（${item.nameEn}）位于 ${lineage} 的思想坐标中。作为图鉴节点，它适合从 ${tagText || item.tradition} 进入，观察一个时代如何把问题、形式和世界观压缩成可辨认的思想姿态。`;
}

function buildGenerationPrompt(item: PhilosopherPosterCard) {
  return [
    `设计一张哲学家介绍海报，主题是“${item.nameCn} / ${item.nameEn}”。`,
    `核心思想：${item.oneLine}`,
    `视觉风格：${item.posterStyle}。`,
    `画面母题：${item.visualMotif}。`,
    `人物语境：${item.region}，${item.tradition}，${item.era}。`,
    '要求适合小红书/新媒体发布，信息清晰、设计感强、避免廉价百科感。',
  ].join('');
}

function scoreRelated(active: PhilosopherPosterCard, candidate: PhilosopherPosterCard) {
  if (active.id === candidate.id) return -1;
  let score = 0;
  if (active.tradition === candidate.tradition) score += 7;
  if (active.era === candidate.era) score += 5;
  if (active.region === candidate.region) score += 3;
  for (const tag of active.tags) {
    if (candidate.tags.includes(tag)) score += 4;
  }
  if (active.tier === candidate.tier) score += 1;
  return score;
}

const iconSize = 15;

export const PhilosopherPosterIndexPage: React.FC<PhilosopherPosterIndexPageProps> = ({
  lang,
  setLang,
  onClose,
}) => {
  const posters = useMemo<PhilosopherPosterCard[]>(() => (
    PHILOSOPHER_POSTER_LIST.map((item, sourceIndex) => ({
      ...item,
      sourceIndex,
      imageUrl: resolvePhilosopherPosterImage(item),
    }))
  ), []);

  const [activeId, setActiveId] = useState(posters[0]?.id || '');
  const [query, setQuery] = useState('');
  const [eraFilter, setEraFilter] = useState('ALL');
  const [traditionFilter, setTraditionFilter] = useState('ALL');
  const [regionFilter, setRegionFilter] = useState('ALL');
  const [tierFilter, setTierFilter] = useState<TierFilter>('ALL');
  const [tagFilter, setTagFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState<AtlasViewMode>('mosaic');
  const [sortMode, setSortMode] = useState<SortMode>('source');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => readFavorites());
  const [brokenImages, setBrokenImages] = useState<Set<string>>(() => new Set());
  const [copyFeedback, setCopyFeedback] = useState('');

  useEffect(() => {
    try {
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favoriteIds)));
    } catch {
      // Local persistence is a convenience only.
    }
  }, [favoriteIds]);

  const filters = useMemo(() => ({
    eras: buildCountOptions(posters.map((item) => item.era)),
    traditions: buildCountOptions(posters.map((item) => item.tradition), 48),
    regions: buildCountOptions(posters.map((item) => item.region), 36),
    tags: buildCountOptions(posters.flatMap((item) => item.tags), 22),
  }), [posters]);

  const filteredPosters = useMemo(() => {
    const needle = normalizeText(query.trim());
    const rows = posters.filter((item) => {
      const matchesQuery = !needle || getSearchHaystack(item).includes(needle);
      const matchesEra = eraFilter === 'ALL' || item.era === eraFilter;
      const matchesTradition = traditionFilter === 'ALL' || item.tradition === traditionFilter;
      const matchesRegion = regionFilter === 'ALL' || item.region === regionFilter;
      const matchesTier = tierFilter === 'ALL' || item.tier === tierFilter;
      const matchesTag = tagFilter === 'ALL' || item.tags.includes(tagFilter);
      const matchesFavorite = !showFavoritesOnly || favoriteIds.has(item.id);
      return matchesQuery && matchesEra && matchesTradition && matchesRegion && matchesTier && matchesTag && matchesFavorite;
    });

    return [...rows].sort((a, b) => {
      if (sortMode === 'name') return a.nameCn.localeCompare(b.nameCn, 'zh-Hans-CN');
      if (sortMode === 'era') return a.era.localeCompare(b.era, 'zh-Hans-CN') || a.sourceIndex - b.sourceIndex;
      if (sortMode === 'tier') return tierOrder[a.tier] - tierOrder[b.tier] || a.sourceIndex - b.sourceIndex;
      return a.sourceIndex - b.sourceIndex;
    });
  }, [eraFilter, favoriteIds, posters, query, regionFilter, showFavoritesOnly, sortMode, tagFilter, tierFilter, traditionFilter]);

  useEffect(() => {
    if (filteredPosters.length === 0) return;
    if (!filteredPosters.some((item) => item.id === activeId)) {
      setActiveId(filteredPosters[0].id);
    }
  }, [activeId, filteredPosters]);

  const activePoster = useMemo(() => (
    posters.find((item) => item.id === activeId)
    || filteredPosters[0]
    || posters[0]
  ), [activeId, filteredPosters, posters]);

  const relatedPosters = useMemo(() => {
    if (!activePoster) return [];
    return posters
      .map((item) => ({ item, score: scoreRelated(activePoster, item) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.sourceIndex - b.item.sourceIndex)
      .slice(0, 6)
      .map((entry) => entry.item);
  }, [activePoster, posters]);

  const matchedImages = useMemo(() => (
    posters.filter((item) => item.imageUrl).length
  ), [posters]);

  const resetFilters = () => {
    setQuery('');
    setEraFilter('ALL');
    setTraditionFilter('ALL');
    setRegionFilter('ALL');
    setTierFilter('ALL');
    setTagFilter('ALL');
    setShowFavoritesOnly(false);
    setSortMode('source');
  };

  const pickRandomPoster = () => {
    const pool = filteredPosters.length > 0 ? filteredPosters : posters;
    const next = pool[Math.floor(Math.random() * pool.length)];
    if (next) setActiveId(next.id);
  };

  const toggleFavorite = (id: string) => {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const copyActiveCore = async () => {
    if (!activePoster) return;
    const text = [
      `${activePoster.nameCn} / ${activePoster.nameEn}`,
      activePoster.oneLine,
      `传统：${activePoster.tradition}`,
      `视觉母题：${activePoster.visualMotif}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback('已复制');
    } catch {
      setCopyFeedback('复制失败');
    }
    window.setTimeout(() => setCopyFeedback(''), 1400);
  };

  const markImageBroken = (id: string) => {
    setBrokenImages((current) => {
      if (current.has(id)) return current;
      const next = new Set(current);
      next.add(id);
      return next;
    });
  };

  const isImageUsable = (item: PhilosopherPosterCard) => Boolean(item.imageUrl && !brokenImages.has(item.id));

  const renderPosterFallback = (item: PhilosopherPosterCard, compact = false) => (
    <div
      className="flex h-full w-full flex-col justify-between overflow-hidden border border-[#c9ad7d]/20 bg-[#14120e] p-4"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(201,173,125,0.14), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.05), transparent)',
      }}
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-[#c9ad7d]/60">
        <span>{item.tier}</span>
        <ImageOff size={14} />
      </div>
      <div>
        <div className={`${compact ? 'text-2xl' : 'text-4xl'} font-serif font-black tracking-wide text-[#efe7d7]`}>
          {item.nameCn}
        </div>
        <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#efe7d7]/45">
          {item.nameEn}
        </div>
      </div>
      <div className="text-[11px] leading-relaxed text-[#efe7d7]/55" style={{ textWrap: 'pretty' }}>
        {item.visualMotif}
      </div>
    </div>
  );

  const renderPosterImage = (item: PhilosopherPosterCard, mode: 'card' | 'detail' | 'thumb') => {
    const imageUsable = isImageUsable(item);
    const frameClass = mode === 'thumb'
      ? 'h-24 w-20 shrink-0'
      : mode === 'detail'
        ? 'min-h-[360px] w-full'
        : 'w-full';

    return (
      <div
        className={`${frameClass} overflow-hidden bg-black/30`}
        style={{ aspectRatio: mode === 'thumb' ? '4 / 5' : '3 / 4' }}
      >
        {imageUsable ? (
          <img
            src={item.imageUrl}
            alt={`${item.nameCn} poster`}
            loading="lazy"
            decoding="async"
            onError={() => markImageBroken(item.id)}
            className={`h-full w-full ${mode === 'detail' ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-[1.025]`}
          />
        ) : renderPosterFallback(item, mode === 'thumb')}
      </div>
    );
  };

  const renderFilterSelect = (
    label: string,
    value: string,
    onChange: (value: string) => void,
    options: Array<{ label: string; count: number }>,
    allLabel: string,
  ) => (
    <label className="flex min-w-[132px] flex-col gap-1">
      <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#efe7d7]/35">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-9 rounded-none border border-white/10 bg-black/30 px-2 text-xs text-[#efe7d7] outline-none transition-colors focus:border-[#c9ad7d]/60"
      >
        <option value="ALL">{allLabel}</option>
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label} · {option.count}
          </option>
        ))}
      </select>
    </label>
  );

  const renderCard = (item: PhilosopherPosterCard) => {
    const isActive = activePoster?.id === item.id;
    const favorite = favoriteIds.has(item.id);
    const hasPoster = isImageUsable(item);
    return (
      <article
        key={item.id}
        className={`group relative overflow-hidden border bg-[#11100c]/80 transition-[transform,border-color,background-color,box-shadow] duration-300 ${
          isActive
            ? 'border-[#c9ad7d]/70 shadow-[0_26px_80px_rgba(0,0,0,0.42)]'
            : 'border-white/10 hover:-translate-y-1 hover:border-[#c9ad7d]/45 hover:bg-[#171510]'
        }`}
      >
        <button
          type="button"
          onClick={() => setActiveId(item.id)}
          className="block w-full text-left"
        >
          {renderPosterImage(item, 'card')}
          <div className="p-3">
            <div className="mb-2 flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="truncate font-serif text-xl font-black text-[#f3ead8]">{item.nameCn}</h3>
                <p className="truncate text-[10px] uppercase tracking-[0.16em] text-[#f3ead8]/45">{item.nameEn}</p>
              </div>
              <span className={`mt-1 shrink-0 border px-1.5 py-0.5 text-[10px] font-black ${
                item.tier === 'S'
                  ? 'border-[#c9ad7d]/50 text-[#dcc083]'
                  : item.tier === 'A'
                    ? 'border-[#8fb0a2]/40 text-[#a8c2b7]'
                    : 'border-white/15 text-[#f3ead8]/50'
              }`}>
                {item.tier}
              </span>
            </div>
            <p className="min-h-[2.5rem] text-xs leading-relaxed text-[#f3ead8]/62" style={{ textWrap: 'pretty' }}>
              {item.oneLine}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-[#f3ead8]/45">
                  {tag}
                </span>
              ))}
              {!hasPoster && (
                <span className="border border-[#c9ad7d]/20 bg-[#c9ad7d]/10 px-2 py-0.5 text-[10px] text-[#c9ad7d]/70">
                  待补图
                </span>
              )}
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleFavorite(item.id);
          }}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center border backdrop-blur-md transition-colors ${
            favorite
              ? 'border-[#c9ad7d]/60 bg-[#c9ad7d]/20 text-[#f2d28b]'
              : 'border-white/10 bg-black/30 text-white/45 hover:text-[#f2d28b]'
          }`}
          title={favorite ? '取消收藏' : '收藏'}
        >
          <Star size={16} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </article>
    );
  };

  const renderIndexRow = (item: PhilosopherPosterCard) => {
    const isActive = activePoster?.id === item.id;
    const favorite = favoriteIds.has(item.id);
    return (
      <button
        key={item.id}
        type="button"
        onClick={() => setActiveId(item.id)}
        className={`group flex w-full gap-4 border p-3 text-left transition-colors ${
          isActive
            ? 'border-[#c9ad7d]/65 bg-[#c9ad7d]/10'
            : 'border-white/10 bg-[#11100c]/70 hover:border-[#c9ad7d]/40 hover:bg-[#171510]'
        }`}
      >
        {renderPosterImage(item, 'thumb')}
        <div className="min-w-0 flex-1 py-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-[#f3ead8]/35">#{String(item.sourceIndex + 1).padStart(3, '0')}</span>
            <span className="border border-white/10 px-1.5 py-0.5 text-[10px] text-[#f3ead8]/45">{item.tier}</span>
            {favorite && <Star size={13} fill="currentColor" className="text-[#dcc083]" />}
          </div>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-serif text-2xl font-black text-[#f3ead8]">{item.nameCn}</h3>
            <span className="text-xs uppercase tracking-[0.16em] text-[#f3ead8]/45">{item.nameEn}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-[#f3ead8]/62" style={{ textWrap: 'pretty' }}>{item.oneLine}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-[#f3ead8]/40">
            <span>{item.years}</span>
            <span>{item.region}</span>
            <span>{item.tradition}</span>
            <span>{item.era}</span>
          </div>
        </div>
        <ChevronRight size={18} className="mt-9 shrink-0 text-[#f3ead8]/25 group-hover:text-[#c9ad7d]" />
      </button>
    );
  };

  const hasAnyFilter = Boolean(
    query || eraFilter !== 'ALL' || traditionFilter !== 'ALL' || regionFilter !== 'ALL'
    || tierFilter !== 'ALL' || tagFilter !== 'ALL' || showFavoritesOnly || sortMode !== 'source'
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#080806] text-[#efe7d7]">
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage: 'linear-gradient(rgba(239,231,215,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(239,231,215,0.026) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(201,173,125,0.08),transparent_24%,rgba(9,10,8,0.72)_72%)]" />

      <div className="relative z-10 flex h-full flex-col">
        <header className="shrink-0 border-b border-white/10 bg-[#080806]/92 backdrop-blur-2xl">
          <div className="flex flex-col gap-4 px-4 py-4 lg:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onClose}
                className="grid h-10 w-10 place-items-center border border-white/10 bg-white/[0.03] text-[#efe7d7]/65 transition-colors hover:border-[#c9ad7d]/45 hover:text-[#efe7d7]"
                title={lang === 'CN' ? '返回迷雾辞典' : 'Back'}
              >
                <ArrowLeft size={18} />
              </button>

              <div className="min-w-[220px] flex-1">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-[#c9ad7d]/70">
                  <BookOpen size={14} />
                  Mist Codex / Visual Atlas
                </div>
                <h1 className="mt-1 font-serif text-2xl font-black tracking-wide text-[#f5ead7] md:text-3xl">
                  哲学家图鉴
                </h1>
              </div>

              <div className="hidden items-center gap-2 xl:flex">
                {[
                  ['总数', posters.length],
                  ['已接海报', `${matchedImages}/${posters.length}`],
                  ['外部资源', philosopherPosterMediaStats.totalAssets],
                  ['收藏', favoriteIds.size],
                ].map(([label, value]) => (
                  <div key={String(label)} className="h-12 min-w-[96px] border border-white/10 bg-white/[0.03] px-3 py-2">
                    <div className="text-[10px] text-[#efe7d7]/35">{label}</div>
                    <div className="mt-0.5 font-mono text-sm font-bold text-[#efe7d7]">{value}</div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={pickRandomPoster}
                className="inline-flex h-10 items-center gap-2 border border-[#c9ad7d]/35 bg-[#c9ad7d]/10 px-4 text-xs font-bold tracking-[0.16em] text-[#e7c982] transition-colors hover:bg-[#c9ad7d]/18"
              >
                <Dices size={iconSize} />
                随机漫游
              </button>

              <button
                type="button"
                onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
                className="h-10 border border-white/10 bg-white/[0.03] px-3 font-mono text-xs text-[#efe7d7]/60 transition-colors hover:text-[#efe7d7]"
              >
                {lang}
              </button>
            </div>

            <div className="flex flex-col gap-3 2xl:flex-row 2xl:items-end">
              <div className="relative min-w-[260px] flex-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#efe7d7]/35">
                  <Search size={16} />
                </span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="检索姓名 / 学派 / 标签 / 核心观点 / 视觉母题"
                  className="h-11 w-full rounded-none border border-white/10 bg-black/30 pl-10 pr-10 text-sm text-[#efe7d7] outline-none transition-colors placeholder:text-[#efe7d7]/30 focus:border-[#c9ad7d]/60"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center text-[#efe7d7]/35 hover:text-[#efe7d7]"
                    title="清空检索"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:flex">
                {renderFilterSelect('时代', eraFilter, setEraFilter, filters.eras, '全部时代')}
                {renderFilterSelect('传统', traditionFilter, setTraditionFilter, filters.traditions, '全部传统')}
                {renderFilterSelect('地域', regionFilter, setRegionFilter, filters.regions, '全部地域')}

                <label className="flex min-w-[112px] flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#efe7d7]/35">层级</span>
                  <select
                    value={tierFilter}
                    onChange={(event) => setTierFilter(event.target.value as TierFilter)}
                    className="h-9 rounded-none border border-white/10 bg-black/30 px-2 text-xs text-[#efe7d7] outline-none transition-colors focus:border-[#c9ad7d]/60"
                  >
                    <option value="ALL">全部层级</option>
                    <option value="S">S · 核心</option>
                    <option value="A">A · 主干</option>
                    <option value="B">B · 延展</option>
                  </select>
                </label>

                <label className="flex min-w-[118px] flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#efe7d7]/35">排序</span>
                  <select
                    value={sortMode}
                    onChange={(event) => setSortMode(event.target.value as SortMode)}
                    className="h-9 rounded-none border border-white/10 bg-black/30 px-2 text-xs text-[#efe7d7] outline-none transition-colors focus:border-[#c9ad7d]/60"
                  >
                    <option value="source">源顺序</option>
                    <option value="tier">层级优先</option>
                    <option value="era">时代聚合</option>
                    <option value="name">姓名排序</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowFavoritesOnly((current) => !current)}
                className={`inline-flex h-8 items-center gap-1.5 border px-3 text-xs transition-colors ${
                  showFavoritesOnly
                    ? 'border-[#c9ad7d]/55 bg-[#c9ad7d]/14 text-[#e7c982]'
                    : 'border-white/10 bg-white/[0.03] text-[#efe7d7]/50 hover:text-[#efe7d7]'
                }`}
              >
                <Star size={14} fill={showFavoritesOnly ? 'currentColor' : 'none'} />
                收藏
              </button>

              {filters.tags.map((tag) => (
                <button
                  key={tag.label}
                  type="button"
                  onClick={() => setTagFilter((current) => (current === tag.label ? 'ALL' : tag.label))}
                  className={`h-8 border px-3 text-xs transition-colors ${
                    tagFilter === tag.label
                      ? 'border-[#8fb0a2]/55 bg-[#8fb0a2]/14 text-[#bfd6cc]'
                      : 'border-white/10 bg-white/[0.03] text-[#efe7d7]/45 hover:text-[#efe7d7]'
                  }`}
                >
                  {tag.label} <span className="ml-1 text-[#efe7d7]/30">{tag.count}</span>
                </button>
              ))}

              <div className="ml-auto flex items-center gap-1 border border-white/10 bg-black/20 p-1">
                {[
                  ['mosaic', GalleryVerticalEnd, '大图'],
                  ['grid', LayoutGrid, '网格'],
                  ['index', Rows3, '索引'],
                ].map(([mode, Icon, label]) => (
                  <button
                    key={String(mode)}
                    type="button"
                    onClick={() => setViewMode(mode as AtlasViewMode)}
                    className={`inline-flex h-8 items-center gap-1.5 px-2.5 text-xs transition-colors ${
                      viewMode === mode
                        ? 'bg-[#efe7d7] text-[#080806]'
                        : 'text-[#efe7d7]/45 hover:text-[#efe7d7]'
                    }`}
                    title={String(label)}
                  >
                    <Icon size={14} />
                    <span className="hidden md:inline">{String(label)}</span>
                  </button>
                ))}
              </div>

              {hasAnyFilter && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex h-8 items-center gap-1.5 border border-white/10 bg-white/[0.03] px-3 text-xs text-[#efe7d7]/50 transition-colors hover:text-[#efe7d7]"
                >
                  <RotateCcw size={14} />
                  重置
                </button>
              )}
            </div>
          </div>
        </header>

        <main className="grid min-h-0 flex-1 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_430px]">
          <section className="min-h-0 overflow-y-auto px-4 py-5 lg:px-6">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#efe7d7]/35">
                  {filteredPosters.length} visible / {posters.length} total
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#efe7d7]/58" style={{ textWrap: 'pretty' }}>
                  以海报作为第一入口，用时代、传统和视觉母题把人物重新组织成可漫游的思想档案。
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs md:flex">
                {[
                  ['S', posters.filter((item) => item.tier === 'S').length],
                  ['A', posters.filter((item) => item.tier === 'A').length],
                  ['B', posters.filter((item) => item.tier === 'B').length],
                ].map(([label, value]) => (
                  <button
                    key={String(label)}
                    type="button"
                    onClick={() => setTierFilter((current) => (current === label ? 'ALL' : label as PhilosopherTier))}
                    className={`h-9 border px-3 font-mono transition-colors ${
                      tierFilter === label
                        ? 'border-[#c9ad7d]/60 bg-[#c9ad7d]/12 text-[#e7c982]'
                        : 'border-white/10 bg-white/[0.03] text-[#efe7d7]/45 hover:text-[#efe7d7]'
                    }`}
                  >
                    {label} <span className="ml-2 text-[#efe7d7]/35">{value}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="xl:hidden mb-5">
              {activePoster && (
                <div className="border border-[#c9ad7d]/30 bg-[#11100c]/80 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#c9ad7d]/65">当前节点</p>
                      <h2 className="mt-1 font-serif text-2xl font-black text-[#f3ead8]">{activePoster.nameCn}</h2>
                      <p className="text-xs uppercase tracking-[0.14em] text-[#f3ead8]/45">{activePoster.nameEn}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(activePoster.id)}
                      className="grid h-9 w-9 place-items-center border border-white/10 text-[#f3ead8]/55"
                    >
                      <Star size={16} fill={favoriteIds.has(activePoster.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#f3ead8]/65" style={{ textWrap: 'pretty' }}>
                    {activePoster.oneLine}
                  </p>
                </div>
              )}
            </div>

            {filteredPosters.length === 0 ? (
              <div className="grid min-h-[360px] place-items-center border border-white/10 bg-white/[0.02] text-center">
                <div>
                  <Grid2X2 size={28} className="mx-auto mb-4 text-[#efe7d7]/30" />
                  <h3 className="font-serif text-2xl font-black text-[#efe7d7]">没有匹配的哲学家</h3>
                  <p className="mt-2 text-sm text-[#efe7d7]/45">换一个时代、传统或关键词试试。</p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 border border-[#c9ad7d]/35 px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#e7c982]"
                  >
                    清空筛选
                  </button>
                </div>
              </div>
            ) : viewMode === 'index' ? (
              <div className="grid gap-3">
                {filteredPosters.map(renderIndexRow)}
              </div>
            ) : (
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: viewMode === 'mosaic'
                    ? 'repeat(auto-fill, minmax(214px, 1fr))'
                    : 'repeat(auto-fill, minmax(156px, 1fr))',
                }}
              >
                {filteredPosters.map(renderCard)}
              </div>
            )}
          </section>

          <aside className="hidden min-h-0 border-l border-white/10 bg-[#0b0a08]/88 xl:flex xl:flex-col">
            {activePoster && (
              <>
                <div className="shrink-0 border-b border-white/10 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-[#c9ad7d]/65">
                        <PanelRightClose size={14} />
                        Dossier
                      </div>
                      <h2 className="mt-2 font-serif text-4xl font-black text-[#f3ead8]">{activePoster.nameCn}</h2>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f3ead8]/45">{activePoster.nameEn}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(activePoster.id)}
                      className={`grid h-10 w-10 place-items-center border transition-colors ${
                        favoriteIds.has(activePoster.id)
                          ? 'border-[#c9ad7d]/60 bg-[#c9ad7d]/16 text-[#f2d28b]'
                          : 'border-white/10 bg-white/[0.03] text-[#f3ead8]/45 hover:text-[#f2d28b]'
                      }`}
                      title={favoriteIds.has(activePoster.id) ? '取消收藏' : '收藏'}
                    >
                      <Star size={17} fill={favoriteIds.has(activePoster.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-5">
                  <div className="border border-white/10 bg-black/20 p-3">
                    {renderPosterImage(activePoster, 'detail')}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {[
                      [CalendarDays, '年代', activePoster.years],
                      [MapPin, '地域', activePoster.region],
                      [Sparkles, '层级', `${activePoster.tier} · ${tierLabels[activePoster.tier]}`],
                      [BookOpen, '传统', activePoster.tradition],
                    ].map(([Icon, label, value]) => (
                      <div key={String(label)} className="border border-white/10 bg-white/[0.03] p-3">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-[#efe7d7]/35">
                          <Icon size={13} />
                          {String(label)}
                        </div>
                        <div className="mt-1 text-sm text-[#efe7d7]/72">{String(value)}</div>
                      </div>
                    ))}
                  </div>

                  <section className="mt-5 border-t border-white/10 pt-5">
                    <h3 className="font-serif text-xl font-black text-[#f3ead8]">人物简介</h3>
                    <p className="mt-2 text-sm leading-7 text-[#f3ead8]/66" style={{ textWrap: 'pretty' }}>
                      {buildIntro(activePoster)}
                    </p>
                  </section>

                  <section className="mt-5 border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-xl font-black text-[#f3ead8]">核心观点</h3>
                      <button
                        type="button"
                        onClick={copyActiveCore}
                        className="inline-flex h-8 items-center gap-1.5 border border-white/10 bg-white/[0.03] px-2.5 text-xs text-[#efe7d7]/50 transition-colors hover:text-[#efe7d7]"
                      >
                        <Copy size={13} />
                        {copyFeedback || '复制'}
                      </button>
                    </div>
                    <p className="mt-3 border-l border-[#c9ad7d]/45 pl-4 text-base leading-8 text-[#f3ead8]/78" style={{ textWrap: 'pretty' }}>
                      {activePoster.oneLine}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activePoster.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setTagFilter(tag)}
                          className="border border-[#8fb0a2]/30 bg-[#8fb0a2]/10 px-2.5 py-1 text-xs text-[#bfd6cc]"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="mt-5 border-t border-white/10 pt-5">
                    <h3 className="font-serif text-xl font-black text-[#f3ead8]">视觉注释</h3>
                    <div className="mt-3 grid gap-3 text-sm">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#efe7d7]/35">Poster Style</div>
                        <p className="mt-1 text-[#efe7d7]/70">{activePoster.posterStyle}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#efe7d7]/35">Visual Motif</div>
                        <p className="mt-1 text-[#efe7d7]/70">{activePoster.visualMotif}</p>
                      </div>
                    </div>

                    <details className="mt-4 border border-white/10 bg-white/[0.025] p-3">
                      <summary className="cursor-pointer text-xs font-bold tracking-[0.12em] text-[#efe7d7]/55">
                        创作 Prompt
                      </summary>
                      <p className="mt-3 text-xs leading-6 text-[#efe7d7]/55" style={{ textWrap: 'pretty' }}>
                        {buildGenerationPrompt(activePoster)}
                      </p>
                    </details>
                  </section>

                  {relatedPosters.length > 0 && (
                    <section className="mt-5 border-t border-white/10 pt-5">
                      <h3 className="font-serif text-xl font-black text-[#f3ead8]">相关人物</h3>
                      <div className="mt-3 grid gap-2">
                        {relatedPosters.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveId(item.id)}
                            className="group flex items-center justify-between gap-3 border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-colors hover:border-[#c9ad7d]/35"
                          >
                            <div className="min-w-0">
                              <div className="truncate font-serif text-lg font-black text-[#f3ead8]">{item.nameCn}</div>
                              <div className="truncate text-[11px] text-[#f3ead8]/42">{item.tradition} / {item.era}</div>
                            </div>
                            <ChevronRight size={15} className="shrink-0 text-[#f3ead8]/25 group-hover:text-[#c9ad7d]" />
                          </button>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
};
