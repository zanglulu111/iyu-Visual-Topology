import { LibraryCategoryDef, LibraryItemDef, NarrativeBlockDef, NarrativeFieldState } from '../../../../types';
import {
  CharacterIdentityBoardMaterialPacket,
  CharacterIdentityBoardMaterialTerm
} from './types';

type BuildMaterialPacketInput = {
  fieldState: NarrativeFieldState;
  blocks: NarrativeBlockDef[];
  libraries: LibraryCategoryDef[];
  subjectMode: 'HUMAN' | 'CREATURE';
  objectRoute: {
    id: string;
    name: string;
    nameEn: string;
  };
  blockGroups: {
    governance: string[];
    style: string[];
    palette: string[];
    subject: string[];
  };
};

const findBlock = (blocks: NarrativeBlockDef[], blockId: string) => blocks.find(block => block.id === blockId);
const findLibrary = (libraries: LibraryCategoryDef[], blockId: string) => libraries.find(library => library.id === `${blockId}_lib`);
const findLibraryItem = (library: LibraryCategoryDef | undefined, tag: string): LibraryItemDef | undefined =>
  library?.items.find(item => item.name === tag || item.nameEn === tag || item.id === tag);

const compactTerm = (
  blockId: string,
  block: NarrativeBlockDef | undefined,
  tag: string,
  item: LibraryItemDef | undefined
): CharacterIdentityBoardMaterialTerm => ({
  blockId,
  blockName: block?.name || blockId,
  blockNameEn: block?.enName || blockId,
  tag,
  name: item?.name || tag,
  nameEn: item?.nameEn,
  def: item?.def,
  defEn: item?.defEn,
  ontologyLevel: item?.ontologyLevel,
  risk: item?.risk,
  eras: item?.eras,
  affects: item?.affects,
  controls: item?.controls,
  forbids: item?.forbids,
  absorptionRule: item?.absorptionRule
});

const collectTerms = (
  fieldState: NarrativeFieldState,
  blocks: NarrativeBlockDef[],
  libraries: LibraryCategoryDef[],
  blockIds: string[]
): CharacterIdentityBoardMaterialTerm[] => blockIds.flatMap(blockId => {
  const tags = fieldState[blockId] || [];
  const block = findBlock(blocks, blockId);
  const library = findLibrary(libraries, blockId);

  if (blockId === 'cd_spacetime_coordinate') {
    return tags.map(tag => compactTerm(blockId, block, tag, {
      id: 'cd_spacetime_coordinate_exact',
      name: tag,
      nameEn: tag,
      def: `精确时空坐标：${tag}。固定现实域、时间轴、空间锚、技术边界和文化接口，不直接替代主体协议。`,
      defEn: `Precise time-space coordinate: ${tag}. It fixes reality domain, timeline, spatial anchor, technology boundary, and cultural interface without replacing the subject protocol.`
    }));
  }

  return tags.map(tag => compactTerm(blockId, block, tag, findLibraryItem(library, tag)));
});

export const buildCharacterIdentityBoardMaterialPacket = ({
  fieldState,
  blocks,
  libraries,
  subjectMode,
  objectRoute,
  blockGroups
}: BuildMaterialPacketInput): CharacterIdentityBoardMaterialPacket => ({
  templateId: 'character_identity_board',
  subjectMode,
  objectRoute,
  sections: [
    {
      id: 'governance',
      name: '统摄模块',
      nameEn: 'Governance',
      terms: collectTerms(fieldState, blocks, libraries, blockGroups.governance)
    },
    {
      id: 'style',
      name: '风格库',
      nameEn: 'Style Library',
      terms: collectTerms(fieldState, blocks, libraries, blockGroups.style)
    },
    {
      id: 'palette',
      name: '配色方案',
      nameEn: 'Palette',
      terms: collectTerms(fieldState, blocks, libraries, blockGroups.palette)
    },
    {
      id: 'subject',
      name: '本体细节',
      nameEn: 'Ontology Detail',
      terms: collectTerms(fieldState, blocks, libraries, blockGroups.subject)
    }
  ]
});
