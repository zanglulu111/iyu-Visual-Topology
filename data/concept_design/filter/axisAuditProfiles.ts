import { TYPE_GRAVITY_RULES } from './typeGravityRules';

export type ConceptAxisAuditProfile = {
  id: string;
  title: string;
  titleEn: string;
  desc: string;
  fileBase: string;
  keywordFilterTags: {
    nativeTags: string[];
    evidenceTags: string[];
    primaryGenreTags: string[];
    genreTags: string[];
    eraTags: string[];
    cultureTags: string[];
    spaceTags: string[];
    riskTags: string[];
  };
};

const uniq = (values: readonly string[]) => Array.from(new Set(values.filter(Boolean)));

const createProfile = (
  typeId: string,
  eraTags: string[],
  options: {
    id?: string;
    title?: string;
    titleEn?: string;
    filePrefix?: string;
    primaryGenreTags?: string[];
    extraGenreTags?: string[];
    extraNativeTags?: string[];
    extraEvidenceTags?: string[];
    extraSceneClassTags?: string[];
    extraSceneTags?: string[];
    riskTags?: string[];
  } = {}
): ConceptAxisAuditProfile => {
  const rule = TYPE_GRAVITY_RULES[typeId];
  const title = options.title || rule?.label || typeId;
  const titleEn = options.titleEn || rule?.labelEn || typeId;
  const genreTags = uniq([typeId, ...(rule?.strongTypeTags || []), ...(options.extraGenreTags || [])]);
  const cultureTags = uniq([...(rule?.preferredSceneClassTags || []), ...(options.extraSceneClassTags || [])]);
  const spaceTags = uniq([...(rule?.preferredSceneTags || []), ...(options.extraSceneTags || [])]);
  const evidenceTags = uniq([...(rule?.strongEvidenceTags || []), ...(options.extraEvidenceTags || [])]);
  const nativeTags = uniq([...evidenceTags, ...(options.extraNativeTags || [])]);
  return {
    id: options.id || typeId,
    title,
    titleEn,
    desc: `类型=${genreTags.join('/')}；时间=${eraTags.join('/')}；场景大类=${cultureTags.join('/')}；具体场景=${spaceTags.join('/')}。`,
    fileBase: `${options.filePrefix || '轴基准'}-${title}验收`,
    keywordFilterTags: {
      nativeTags,
      evidenceTags,
      primaryGenreTags: options.primaryGenreTags || [typeId],
      genreTags,
      eraTags,
      cultureTags,
      spaceTags,
      riskTags: options.riskTags || []
    }
  };
};

export const CONCEPT_AXIS_AUDIT_PROFILES: ConceptAxisAuditProfile[] = [
  createProfile('romance', ['modern', 'contemporary', 'early_modern', 'timeless']),
  createProfile('wuxia', ['feudal', 'early_modern'], {
    id: 'wuxia_xianxia',
    title: '武侠仙侠',
    titleEn: 'Wuxia / Xianxia',
    primaryGenreTags: ['wuxia', 'xianxia'],
    extraGenreTags: ['xianxia', 'historical', 'religious_ritual'],
    extraNativeTags: ['jianghu', 'sect', 'martial', 'sword'],
    extraEvidenceTags: ['cultivation', 'talisman', 'sect_order'],
    extraSceneClassTags: ['east_asian_mythic', 'east_asian_ritual'],
    extraSceneTags: ['altar', 'cave']
  }),
  createProfile('xianxia', ['feudal', 'mythic', 'timeless']),
  createProfile('fantasy', ['mythic', 'feudal', 'early_modern', 'timeless']),
  createProfile('dark_fantasy', ['mythic', 'feudal', 'early_modern', 'timeless']),
  createProfile('mythic_epic', ['mythic', 'feudal', 'timeless']),
  createProfile('historical', ['primitive', 'slave', 'feudal', 'early_modern', 'industrial']),
  createProfile('court', ['slave', 'feudal', 'early_modern']),
  createProfile('adventure', ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary']),
  createProfile('war_military', ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future']),
  createProfile('noir_crime', ['modern', 'contemporary']),
  createProfile('horror', ['modern', 'contemporary', 'timeless']),
  createProfile('body_horror', ['modern', 'contemporary', 'near_future', 'timeless']),
  createProfile('cosmic_horror', ['modern', 'contemporary', 'future', 'timeless']),
  createProfile('science_fiction', ['near_future', 'far_future', 'future']),
  createProfile('cyberpunk', ['near_future', 'future']),
  createProfile('biopunk', ['contemporary', 'near_future', 'future']),
  createProfile('space_opera', ['far_future', 'future']),
  createProfile('post_apocalyptic', ['near_future', 'far_future', 'future']),
  createProfile('wasteland', ['near_future', 'far_future', 'future']),
  createProfile('urban_life', ['modern', 'contemporary']),
  createProfile('real_professional', ['modern', 'contemporary', 'near_future']),
  createProfile('fashion_idol', ['modern', 'contemporary', 'near_future']),
  createProfile('surreal', ['timeless', 'contemporary', 'mythic']),
  createProfile('dream', ['timeless', 'contemporary']),
  createProfile('psychological', ['modern', 'contemporary', 'timeless']),
  createProfile('abstract', ['timeless', 'contemporary']),
  createProfile('ecological', ['primitive', 'mythic', 'contemporary', 'near_future', 'future']),
  createProfile('creature', ['primitive', 'mythic', 'feudal', 'near_future', 'future', 'timeless']),
  createProfile('posthuman', ['near_future', 'far_future', 'future']),
  createProfile('religious_ritual', ['mythic', 'slave', 'feudal', 'early_modern', 'timeless'])
];
