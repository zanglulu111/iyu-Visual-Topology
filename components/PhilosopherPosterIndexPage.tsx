import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Download,
  Filter,
  Search,
  Sparkles,
  Table2,
  Users,
} from 'lucide-react';
import { PHILOSOPHER_POSTER_LIST, philosopherPosterStats, PhilosopherTier } from '../data/philosopherPosterList';

interface PhilosopherPosterIndexPageProps {
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  onClose: () => void;
}

const tierLabels: Record<PhilosopherTier, string> = {
  S: 'S 核心',
  A: 'A 一线',
  B: 'B 二线',
};

function uniq(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'));
}

function csvEscape(value: string) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

export const PhilosopherPosterIndexPage: React.FC<PhilosopherPosterIndexPageProps> = ({
  lang,
  setLang,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [era, setEra] = useState('ALL');
  const [tier, setTier] = useState<'ALL' | PhilosopherTier>('ALL');
  const [focus, setFocus] = useState<'ALL' | 'LEFT' | 'GLOBAL'>('ALL');

  const eras = useMemo(() => uniq(PHILOSOPHER_POSTER_LIST.map((item) => item.era)), []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return PHILOSOPHER_POSTER_LIST.filter((item) => {
      const haystack = [
        item.nameCn,
        item.nameEn,
        item.region,
        item.tradition,
        item.era,
        item.posterStyle,
        item.visualMotif,
        item.oneLine,
        item.tags.join(' '),
      ].join(' ').toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      const matchesEra = era === 'ALL' || item.era === era;
      const matchesTier = tier === 'ALL' || item.tier === tier;
      const isLeft = item.tags.some((tag) => tag.includes('左翼')) || item.era.includes('左翼');
      const isGlobal = /中国|日本|南亚|印度|伊斯兰|波斯|安达卢斯|北非|加纳|贝宁|肯尼亚|非洲|马提尼克|阿尔及利亚|巴勒斯坦|牙买加|阿根廷|秘鲁|墨西哥|喀麦隆|南非|香港|韩国|拉美|全球南方/.test(
        `${item.region} ${item.tradition} ${item.tags.join(' ')}`
      );
      const matchesFocus = focus === 'ALL' || (focus === 'LEFT' ? isLeft : isGlobal);
      return matchesQuery && matchesEra && matchesTier && matchesFocus;
    });
  }, [query, era, tier, focus]);

  const exportCsv = () => {
    const header = ['id', '中文名', 'English', '年代', '地区', '传统', '时期', '级别', '标签', '海报风格', '视觉母题', '一句话'];
    const lines = [
      header.map(csvEscape).join(','),
      ...filtered.map((item) => [
        item.id,
        item.nameCn,
        item.nameEn,
        item.years,
        item.region,
        item.tradition,
        item.era,
        item.tier,
        item.tags.join(' / '),
        item.posterStyle,
        item.visualMotif,
        item.oneLine,
      ].map(csvEscape).join(',')),
    ];
    const blob = new Blob([`\uFEFF${lines.join('\n')}`], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'philosopher-poster-index.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0d0f12] text-zinc-100">
      <div className="h-full flex flex-col">
        <header className="shrink-0 border-b border-white/10 bg-[#111418]/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex items-center gap-4">
            <button
              onClick={onClose}
              className="h-10 w-10 shrink-0 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors"
              title={lang === 'CN' ? '返回' : 'Back'}
            >
              <ArrowLeft size={18} />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-cyan-300/80">
                <Table2 size={14} />
                <span>{lang === 'CN' ? '哲学家海报生产表' : 'Philosopher Poster Index'}</span>
              </div>
              <h1 className="mt-1 text-xl md:text-2xl font-semibold tracking-wide text-white truncate">
                {lang === 'CN' ? '全球核心哲学家名单' : 'Global Philosopher List'}
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-3 text-sm">
              <div className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10">
                <span className="text-zinc-500 mr-2">TOTAL</span>
                <span className="font-mono text-white">{philosopherPosterStats.total}</span>
              </div>
              <div className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10">
                <span className="text-zinc-500 mr-2">LEFT</span>
                <span className="font-mono text-rose-300">{philosopherPosterStats.contemporaryLeft}</span>
              </div>
              <div className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10">
                <span className="text-zinc-500 mr-2">S</span>
                <span className="font-mono text-amber-300">{philosopherPosterStats.tierS}</span>
              </div>
            </div>

            <button
              onClick={() => setLang(lang === 'CN' ? 'EN' : 'CN')}
              className="h-10 px-3 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-bold tracking-widest transition-colors"
            >
              {lang}
            </button>
          </div>
        </header>

        <section className="shrink-0 border-b border-white/10 bg-[#0f1216] px-5 py-3">
          <div className="flex flex-col xl:flex-row gap-3 xl:items-center">
            <div className="relative flex-1 min-w-[220px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={lang === 'CN' ? '搜索哲学家 / 流派 / 风格 / 母题' : 'Search name, school, style, motif'}
                className="w-full h-10 rounded-md border border-white/10 bg-black/25 pl-10 pr-3 text-sm outline-none focus:border-cyan-300/60"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                <select
                  value={era}
                  onChange={(event) => setEra(event.target.value)}
                  className="h-10 w-[150px] rounded-md border border-white/10 bg-black/25 pl-9 pr-3 text-sm outline-none focus:border-cyan-300/60"
                >
                  <option value="ALL">全部时期</option>
                  {eras.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <select
                value={tier}
                onChange={(event) => setTier(event.target.value as 'ALL' | PhilosopherTier)}
                className="h-10 w-[118px] rounded-md border border-white/10 bg-black/25 px-3 text-sm outline-none focus:border-cyan-300/60"
              >
                <option value="ALL">全部级别</option>
                <option value="S">S 核心</option>
                <option value="A">A 一线</option>
                <option value="B">B 二线</option>
              </select>

              <div className="h-10 rounded-md border border-white/10 bg-black/25 p-1 flex">
                {[
                  ['ALL', '全部'],
                  ['LEFT', '左翼'],
                  ['GLOBAL', '非欧美'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setFocus(value as 'ALL' | 'LEFT' | 'GLOBAL')}
                    className={`h-8 px-3 rounded text-xs font-semibold transition-colors ${focus === value
                      ? 'bg-cyan-300 text-black'
                      : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <button
                onClick={exportCsv}
                className="h-10 px-3 rounded-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] flex items-center gap-2 text-sm transition-colors"
              >
                <Download size={15} />
                CSV
              </button>
            </div>
          </div>
        </section>

        <main className="flex-1 min-h-0 overflow-hidden">
          <div className="h-full overflow-auto">
            <table className="min-w-[1280px] w-full border-separate border-spacing-0 text-sm">
              <thead className="sticky top-0 z-10 bg-[#15191f] text-zinc-400">
                <tr className="text-left">
                  <th className="w-[70px] px-4 py-3 border-b border-white/10 font-medium">级别</th>
                  <th className="w-[220px] px-4 py-3 border-b border-white/10 font-medium">人物</th>
                  <th className="w-[120px] px-4 py-3 border-b border-white/10 font-medium">地区</th>
                  <th className="w-[170px] px-4 py-3 border-b border-white/10 font-medium">传统</th>
                  <th className="w-[120px] px-4 py-3 border-b border-white/10 font-medium">时期</th>
                  <th className="w-[220px] px-4 py-3 border-b border-white/10 font-medium">海报风格</th>
                  <th className="w-[230px] px-4 py-3 border-b border-white/10 font-medium">视觉母题</th>
                  <th className="px-4 py-3 border-b border-white/10 font-medium">一句话定位</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, index) => {
                  const isLeft = item.tags.some((tag) => tag.includes('左翼')) || item.era.includes('左翼');
                  return (
                    <tr
                      key={item.id}
                      className={`${index % 2 === 0 ? 'bg-white/[0.015]' : 'bg-transparent'} hover:bg-cyan-300/[0.06] transition-colors`}
                    >
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top">
                        <span className={`inline-flex h-7 min-w-9 items-center justify-center rounded border px-2 text-xs font-black ${
                          item.tier === 'S'
                            ? 'border-amber-300/40 bg-amber-300/10 text-amber-200'
                            : item.tier === 'A'
                              ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-200'
                              : 'border-zinc-500/40 bg-zinc-500/10 text-zinc-300'
                        }`}>
                          {item.tier}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top">
                        <div className="font-semibold text-white">{item.nameCn}</div>
                        <div className="mt-0.5 font-mono text-xs text-zinc-500">{item.nameEn}</div>
                        <div className="mt-1 text-xs text-zinc-600">{item.years}</div>
                      </td>
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top text-zinc-300">{item.region}</td>
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top text-zinc-300">{item.tradition}</td>
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top">
                        <span className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs ${isLeft ? 'bg-rose-500/12 text-rose-200' : 'bg-white/[0.05] text-zinc-300'}`}>
                          {isLeft && <Sparkles size={12} />}
                          {item.era}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top text-zinc-300">{item.posterStyle}</td>
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top text-zinc-400">{item.visualMotif}</td>
                      <td className="px-4 py-3 border-b border-white/[0.06] align-top">
                        <div className="max-w-[460px] leading-relaxed text-zinc-300">{item.oneLine}</div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded bg-white/[0.05] px-2 py-0.5 text-[11px] text-zinc-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <div className="h-64 flex items-center justify-center text-zinc-500">
                <Users size={18} className="mr-2" />
                {lang === 'CN' ? '没有匹配项' : 'No matches'}
              </div>
            )}
          </div>
        </main>

        <footer className="shrink-0 border-t border-white/10 bg-[#111418] px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
          <span>VISIBLE {filtered.length} / {philosopherPosterStats.total}</span>
          <span>{tierLabels.S} · {tierLabels.A} · {tierLabels.B}</span>
        </footer>
      </div>
    </div>
  );
};
