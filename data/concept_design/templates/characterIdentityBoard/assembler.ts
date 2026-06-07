import {
  CharacterIdentityBoardLanguage,
  CharacterIdentityBoardOptions,
  CharacterIdentityBoardTranslatedPayload,
  CharacterIdentityBoardVariables
} from './types';
import { translateCharacterIdentityBoardMaterials } from './translator';

type BuildCharacterIdentityBoardPromptInput = {
  values: CharacterIdentityBoardVariables;
  lang: CharacterIdentityBoardLanguage;
  options: CharacterIdentityBoardOptions;
  materialPacket?: CharacterIdentityBoardTranslatedPayload['materialPacket'];
  enabledSectionIds?: string[];
  protocols: {
    styleCostumeConflict: string;
    actionMotif: string;
  };
};

export type CharacterIdentityBoardPromptSection = {
  id: string;
  title: string;
  titleEn: string;
  color: string;
  text: string;
};

const joinBlocks = (blocks: string[]) => blocks.filter(block => block.trim()).join('\n\n');

const ruleTitle = (id: string, lang: CharacterIdentityBoardLanguage) => {
  const titles: Record<string, { cn: string; en: string }> = {
    originality: { cn: '协议 / 原创版权规则', en: 'Protocol / Originality Copyright' },
    bodyFormControl: { cn: '协议 / 本体形态规则', en: 'Protocol / Body Form Control' },
    authenticity: { cn: '协议 / 角色真实感规则', en: 'Protocol / Character Authenticity' },
    mediumControl: { cn: '协议 / 媒介一致性规则', en: 'Protocol / Medium Consistency' },
    boardContent: { cn: '目标 / 身份板内容', en: 'Target / Board Content' },
    formatSpec: { cn: '输出 / 格式要求', en: 'Output / Format Requirements' },
    layout: { cn: '输出 / 版式规则', en: 'Output / Layout Rules' },
    background: { cn: '输出 / 背景规则', en: 'Output / Background Rules' },
    priority: { cn: '注意 / 优先级', en: 'Attention / Priority' }
  };
  const found = titles[id];
  if (!found) return lang === 'CN' ? id : id;
  return lang === 'CN' ? found.cn : found.en;
};

const sectionCategoryColors = {
  target: '#F97316',
  object: '#38BDF8',
  source: '#A78BFA',
  protocol: '#22C55E',
  output: '#EAB308',
  attention: '#F43F5E'
};

const getSectionColor = (sectionId: string) => {
  if (sectionId === 'objective' || sectionId === 'assembly_boardContent') return sectionCategoryColors.target;
  if (sectionId.startsWith('object_')) return sectionCategoryColors.object;
  if (sectionId.startsWith('source_') || sectionId.startsWith('assembly_source')) return sectionCategoryColors.source;
  if (sectionId.startsWith('translation_')) return sectionCategoryColors.protocol;
  if (sectionId === 'auto_invention' || sectionId === 'assembly_priority') return sectionCategoryColors.attention;
  if (sectionId.startsWith('assembly_')) return sectionCategoryColors.output;
  return sectionCategoryColors.protocol;
};

const buildObjectVariableSections = (
  variables: CharacterIdentityBoardVariables,
  otherDetails: string,
  lang: CharacterIdentityBoardLanguage
): Array<Omit<CharacterIdentityBoardPromptSection, 'color'>> => {
  const slots = [
    {
      id: 'character_seed',
      title: '对象 / C01 主体身份',
      titleEn: 'Object / C01 Subject Identity',
      labelCn: '[CHARACTER SEED / 角色种子]',
      labelEn: '[CHARACTER SEED]',
      value: variables.characterSeed
    },
    {
      id: 'age_body_type',
      title: '对象 / C02 本体身体',
      titleEn: 'Object / C02 Body Ontology',
      labelCn: '[AGE / BODY TYPE / 年龄与身体类型]',
      labelEn: '[AGE / BODY TYPE]',
      value: variables.ageBodyType
    },
    {
      id: 'time_space_scene',
      title: '对象 / C03 时空场域',
      titleEn: 'Object / C03 Time-Space Field',
      labelCn: '[TIME-SPACE FIELD / 时空场域]',
      labelEn: '[TIME-SPACE FIELD]',
      value: variables.timeSpaceScene
    },
    {
      id: 'action_moment',
      title: '对象 / C04 行动事件',
      titleEn: 'Object / C04 Action Moment',
      labelCn: '[ACTION MOMENT / 画面事件]',
      labelEn: '[ACTION MOMENT]',
      value: variables.actionMoment
    },
    {
      id: 'visual_medium',
      title: '对象 / C05 视觉媒介',
      titleEn: 'Object / C05 Visual Medium',
      labelCn: '[VISUAL MEDIUM / 视觉媒介]',
      labelEn: '[VISUAL MEDIUM]',
      value: variables.visualMedium
    },
    {
      id: 'style',
      title: '对象 / C06 审美风格',
      titleEn: 'Object / C06 Aesthetic Style',
      labelCn: '[STYLE / 审美方向]',
      labelEn: '[STYLE]',
      value: variables.style
    },
    {
      id: 'palette_strategy',
      title: '对象 / C07 色彩策略',
      titleEn: 'Object / C07 Palette Strategy',
      labelCn: '[PALETTE STRATEGY / 色彩策略]',
      labelEn: '[PALETTE STRATEGY]',
      value: variables.paletteStrategy
    },
    {
      id: 'composition_scene',
      title: '对象 / C08 取景构图',
      titleEn: 'Object / C08 Framing & Composition',
      labelCn: '[COMPOSITION SCENE / 构图场景]',
      labelEn: '[COMPOSITION SCENE]',
      value: variables.compositionScene
    },
    {
      id: 'lighting_atmosphere',
      title: '对象 / C09 光影氛围',
      titleEn: 'Object / C09 Lighting Atmosphere',
      labelCn: '[LIGHTING ATMOSPHERE / 光影氛围]',
      labelEn: '[LIGHTING ATMOSPHERE]',
      value: variables.lightingAtmosphere
    },
    {
      id: 'other_details',
      title: '对象 / C10 设计证据',
      titleEn: 'Object / C10 Design Evidence',
      labelCn: '[DESIGN EVIDENCE / 设计证据]',
      labelEn: '[DESIGN EVIDENCE]',
      value: otherDetails
    }
  ];
  return slots.map(slot => ({
    id: `object_${slot.id}`,
    title: slot.title,
    titleEn: slot.titleEn,
    text: `${lang === 'CN' ? slot.labelCn : slot.labelEn}:\n${slot.value.trim()}`
  }));
};

export const buildCharacterIdentityBoardPromptSections = (payload: CharacterIdentityBoardTranslatedPayload): CharacterIdentityBoardPromptSection[] => {
  const { lang, variables, ruleBlocks } = payload;
  const sections: Array<Omit<CharacterIdentityBoardPromptSection, 'color'>> = [];

  sections.push({
    id: 'objective',
    title: '目标 / 总指令',
    titleEn: 'Target / Main Objective',
    text: payload.intent
  });

  sections.push(...buildObjectVariableSections(variables, payload.otherDetails, lang));

  ruleBlocks
    .filter(block => block.layer === 'translation' && block.text.trim())
    .forEach(block => {
      sections.push({
        id: `translation_${block.id}`,
        title: ruleTitle(block.id, 'CN'),
        titleEn: ruleTitle(block.id, 'EN'),
        text: block.text
      });
    });

  sections.push({
    id: 'auto_invention',
    title: '注意 / 自动补全',
    titleEn: 'Attention / Auto Invention',
    text: lang === 'CN'
      ? `请自行发明其余内容：
角色姓名、别名或称号、角色职责、性格特征、情绪基调、视觉主题、服装设计或身体设计、色彩 palette、标志性道具或标志性生物特征、可识别剪影、姿态语言、简短身份备注。`
      : `Invent everything else:
character name, alias or title, role, personality traits, emotional tone, visual theme, outfit design or body design, color palette, signature prop or signature biological feature, recognizable silhouette, pose language, small identity notes.`
  });

  ruleBlocks
    .filter(block => block.layer === 'assembly' && block.text.trim())
    .forEach(block => {
      sections.push({
        id: `assembly_${block.id}`,
        title: ruleTitle(block.id, 'CN'),
        titleEn: ruleTitle(block.id, 'EN'),
        text: block.text
      });
    });

  return sections.map((section) => ({
    ...section,
    color: getSectionColor(section.id)
  }));
};

export const assembleCharacterIdentityBoardPrompt = (
  payload: CharacterIdentityBoardTranslatedPayload,
  enabledSectionIds?: string[]
): string => {
  const enabledSet = enabledSectionIds ? new Set(enabledSectionIds) : null;
  const sections = buildCharacterIdentityBoardPromptSections(payload)
    .filter(section => !enabledSet || enabledSet.has(section.id));
  return joinBlocks(sections.map(section => section.text));
};

export const buildCharacterIdentityBoardPromptFromLayers = (input: BuildCharacterIdentityBoardPromptInput): string => {
  const translated = translateCharacterIdentityBoardMaterials(input);
  return assembleCharacterIdentityBoardPrompt(translated, input.enabledSectionIds);
};

export const buildCharacterIdentityBoardPromptSectionsFromLayers = (input: BuildCharacterIdentityBoardPromptInput): CharacterIdentityBoardPromptSection[] => {
  const translated = translateCharacterIdentityBoardMaterials(input);
  return buildCharacterIdentityBoardPromptSections(translated);
};
