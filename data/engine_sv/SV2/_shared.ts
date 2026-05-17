import { LibraryItemDef } from '../../../types';

type Sv2CapacityItemConfig = {
  id: string;
  name: string;
  nameEn: string;
  group: string;
  groupEn: string;
  runtime: string;
  output: string;
  capacity: string;
  plotBudget: string;
  density: string;
  compression: string;
  limits: string;
  aliases?: string[];
  aliasesEn?: string[];
};

export const makeSv2CapacityItem = (config: Sv2CapacityItemConfig): LibraryItemDef => ({
  id: config.id,
  name: config.name,
  nameEn: config.nameEn,
  group: config.group,
  groupEn: config.groupEn,
  aliases: config.aliases,
  aliasesEn: config.aliasesEn,
  def: `成片时长约 ${config.runtime}。${config.capacity}`,
  defEn: `Approx runtime: ${config.runtime}. ${config.capacity}`,
  core: `【成片时长】${config.runtime}
【叙事容量】${config.capacity}
【情节容量上限】${config.plotBudget}
【密度/压缩率】${config.density}
【压缩方式】${config.compression}
【边界】${config.limits}`,
  coreEn: `[Runtime] ${config.runtime}
[Narrative Capacity] ${config.capacity}
[Plot Capacity Ceiling] ${config.plotBudget}
[Density / Compression] ${config.density}
[Compression Method] ${config.compression}
[Boundary] ${config.limits}`,
  patch: {
    mechanics: `【方案输出】每个 Pitch 建议 ${config.output}。这是故事方案的说明精度，不等同于剧本页数。
【情节容量】${config.plotBudget}
【生成影响】只改变三案共同的成片时长、叙事容量、情节复杂度上限、密度、压缩率和输出篇幅；不改变 SV1 结构节点，不替 OPTION 2 指定形式载体。`,
    mechanicsEn: `[Pitch Output] Recommended ${config.output} per pitch. This is outline detail, not script pages.
[Plot Capacity] ${config.plotBudget}
[Generation Effect] Controls shared runtime, narrative capacity, plot complexity ceiling, density, compression, and output length only; it does not override SV1 or choose the FORM carrier.`,
  },
  reference: 'SV2 只控制成片时长、叙事容量、情节复杂度上限、密度和输出篇幅；不控制体裁、结构、叙事容器或 OPTION 2 载体。',
  referenceEn: 'SV2 controls runtime, narrative capacity, plot complexity ceiling, density, and output length only; it does not control genre, structure, narrative container, or the OPTION 2 carrier.',
});
