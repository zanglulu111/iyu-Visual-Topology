import { PHILOSOPHER_POSTER_LIST, PhilosopherTier } from './philosopherPosterList';
import hegelPrompts from '../../codex-drafts/clean-prompts/lovart_prompts_hegel_001_090.json';
import lacanPrompts from '../../codex-drafts/clean-prompts/lovart_prompts_lacan_001_100.json';
import marxPrompts from '../../codex-drafts/clean-prompts/lovart_prompts_marx_001_058.json';
import zizekPrompts from '../../codex-drafts/clean-prompts/lovart_prompts_zizek_001_090.json';
import sPortraitPrompts from '../../codex-drafts/philosophers/lovart_prompts_s_portraits_001_010.json';

export type PosterSourceKind = 'philosopher-card' | 'philosopher-portrait' | 'concept-poster';
export type PosterSourceFamily = 'philosopher' | 'hegel' | 'lacan' | 'marx' | 'zizek';

export interface PosterSourceRecord {
  id: string;
  kind: PosterSourceKind;
  family: PosterSourceFamily;
  sourceGroup: string;
  sourcePath: string;
  title: string;
  titleCn: string;
  titleEn: string;
  prompt: string;
  negativePrompt?: string;
  tier?: PhilosopherTier;
  years?: string;
  region?: string;
  tradition?: string;
  era?: string;
  tags: string[];
  posterStyle?: string;
  visualMotif?: string;
  oneLine?: string;
  sourceId?: string;
}

interface LovartPromptRecord {
  id: string;
  source?: string;
  title?: string;
  prompt: string;
  negative_prompt?: string;
  tier?: PhilosopherTier;
  name_zh?: string;
  name_en?: string;
  theme?: string;
}

const conceptSources: Array<{
  family: Exclude<PosterSourceFamily, 'philosopher'>;
  sourceGroup: string;
  sourcePath: string;
  prompts: LovartPromptRecord[];
}> = [
  {
    family: 'lacan',
    sourceGroup: '拉康概念海报',
    sourcePath: 'codex-drafts/clean-prompts/lovart_prompts_lacan_001_100.json',
    prompts: lacanPrompts as LovartPromptRecord[],
  },
  {
    family: 'zizek',
    sourceGroup: '齐泽克概念海报',
    sourcePath: 'codex-drafts/clean-prompts/lovart_prompts_zizek_001_090.json',
    prompts: zizekPrompts as LovartPromptRecord[],
  },
  {
    family: 'hegel',
    sourceGroup: '黑格尔概念海报',
    sourcePath: 'codex-drafts/clean-prompts/lovart_prompts_hegel_001_090.json',
    prompts: hegelPrompts as LovartPromptRecord[],
  },
  {
    family: 'marx',
    sourceGroup: '马克思概念海报',
    sourcePath: 'codex-drafts/clean-prompts/lovart_prompts_marx_001_058.json',
    prompts: marxPrompts as LovartPromptRecord[],
  },
];

function splitTitle(title = '') {
  const [cn, ...rest] = title.split(/\s+\/\s+/);
  return {
    titleCn: cn?.trim() || title.trim(),
    titleEn: rest.join(' / ').trim(),
  };
}

function buildPhilosopherPrompt(item: typeof PHILOSOPHER_POSTER_LIST[number]) {
  return [
    `设计一张哲学家介绍海报，主题是“${item.nameCn} / ${item.nameEn}”。`,
    `核心思想：${item.oneLine}`,
    `视觉风格：${item.posterStyle}。`,
    `画面母题：${item.visualMotif}。`,
    `人物语境：${item.region}，${item.tradition}，${item.era}。`,
    '要求适合小红书/新媒体发布，信息清晰、设计感强、避免廉价百科感。',
  ].join('');
}

function buildPhilosopherNegativePrompt() {
  return '避免现实政治敏感符号、旗帜、地图、政党徽章、现实抗议场景、可识别政治标语、低清、错误文字、水印、logo、廉价模板感。';
}

const philosopherSourceRecords: PosterSourceRecord[] = PHILOSOPHER_POSTER_LIST.map((item) => ({
  id: item.id,
  kind: 'philosopher-card',
  family: 'philosopher',
  sourceGroup: '哲学家介绍图',
  sourcePath: 'data/reference/philosopherPosterList.ts',
  title: `${item.nameCn} / ${item.nameEn}`,
  titleCn: item.nameCn,
  titleEn: item.nameEn,
  prompt: buildPhilosopherPrompt(item),
  negativePrompt: buildPhilosopherNegativePrompt(),
  tier: item.tier,
  years: item.years,
  region: item.region,
  tradition: item.tradition,
  era: item.era,
  tags: item.tags,
  posterStyle: item.posterStyle,
  visualMotif: item.visualMotif,
  oneLine: item.oneLine,
  sourceId: item.id,
}));

const conceptSourceRecords: PosterSourceRecord[] = conceptSources.flatMap((group) => (
  group.prompts.map((item) => {
    const titleParts = splitTitle(item.title || item.id);
    return {
      id: item.id,
      kind: 'concept-poster',
      family: group.family,
      sourceGroup: group.sourceGroup,
      sourcePath: group.sourcePath,
      title: item.title || item.id,
      titleCn: titleParts.titleCn,
      titleEn: titleParts.titleEn,
      prompt: item.prompt,
      negativePrompt: item.negative_prompt,
      tier: undefined,
      tags: [group.sourceGroup.replace('概念海报', ''), '概念海报'],
      sourceId: item.source,
    };
  })
));

const portraitSourceRecords: PosterSourceRecord[] = (sPortraitPrompts as LovartPromptRecord[]).map((item) => ({
  id: item.id,
  kind: 'philosopher-portrait',
  family: 'philosopher',
  sourceGroup: 'S级哲学家无文字肖像',
  sourcePath: 'codex-drafts/philosophers/lovart_prompts_s_portraits_001_010.json',
  title: `${item.name_zh || item.id} / ${item.name_en || ''}`.trim(),
  titleCn: item.name_zh || item.id,
  titleEn: item.name_en || '',
  prompt: item.prompt,
  negativePrompt: item.negative_prompt,
  tier: item.tier,
  tags: ['S级', '无文字肖像', item.theme || ''].filter(Boolean),
  oneLine: item.theme,
  sourceId: item.id,
}));

export const POSTER_SOURCE_DATABASE: PosterSourceRecord[] = [
  ...philosopherSourceRecords,
  ...conceptSourceRecords,
  ...portraitSourceRecords,
];

export const posterSourceStats = {
  total: POSTER_SOURCE_DATABASE.length,
  philosopherCards: philosopherSourceRecords.length,
  conceptPosters: conceptSourceRecords.length,
  portraitPosters: portraitSourceRecords.length,
  cleanPromptFiles: conceptSources.length + 1,
};
