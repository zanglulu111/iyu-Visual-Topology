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
    styleCostumeConflict: { cn: '风格 / 服装裁决', en: 'Style / Costume Judgment' },
    actionMotif: { cn: '动作母题裁决', en: 'Action Motif Judgment' },
    originality: { cn: '原创 / 版权规则', en: 'Originality / Copyright' },
    bodyFormControl: { cn: '本体形态规则', en: 'Body Form Control' },
    authenticity: { cn: '角色真实感规则', en: 'Character Authenticity' },
    mediumControl: { cn: '媒介一致性规则', en: 'Medium Consistency' },
    boardContent: { cn: '指令目标', en: 'Directive Goal' },
    formatSpec: { cn: '格式要求', en: 'Format Requirements' },
    layout: { cn: '版式规则', en: 'Layout Rules' },
    background: { cn: '背景规则', en: 'Background Rules' },
    priority: { cn: '优先级规则', en: 'Priority Rules' }
  };
  const found = titles[id];
  if (!found) return lang === 'CN' ? id : id;
  return lang === 'CN' ? found.cn : found.en;
};

const sectionPalette = [
  '#F97316',
  '#22C55E',
  '#38BDF8',
  '#A78BFA',
  '#F43F5E',
  '#EAB308',
  '#14B8A6',
  '#FB7185',
  '#60A5FA',
  '#C084FC',
  '#84CC16',
  '#F59E0B'
];

export const buildCharacterIdentityBoardPromptSections = (payload: CharacterIdentityBoardTranslatedPayload): CharacterIdentityBoardPromptSection[] => {
  const { lang, variables, ruleBlocks } = payload;
  const sections: Array<Omit<CharacterIdentityBoardPromptSection, 'color'>> = [];

  if (lang === 'CN') {
    sections.push(
      {
        id: 'objective',
        title: '指令目标',
        titleEn: 'Objective',
        text: payload.intent
      },
      {
        id: 'five_variables',
        title: '九变量模块',
        titleEn: 'Nine Variables',
        text: `[CHARACTER SEED / 角色种子]:
${variables.characterSeed.trim()}

[AGE / BODY TYPE / 年龄与身体类型]:
${variables.ageBodyType.trim()}

[TIME-SPACE FIELD / 时空场域]:
${variables.timeSpaceScene.trim()}

[ACTION MOMENT / 画面事件]:
${variables.actionMoment.trim()}

[VISUAL MEDIUM / 视觉媒介]:
${variables.visualMedium.trim()}

[STYLE / 审美方向]:
${variables.style.trim()}

[COMPOSITION SCENE / 构图场景]:
${variables.compositionScene.trim()}

[LIGHTING ATMOSPHERE / 光影氛围]:
${variables.lightingAtmosphere.trim()}

[OTHER DETAILS - OPTIONAL / 补充细节]:
${payload.otherDetails}`
      }
    );
  } else {
    sections.push(
      {
        id: 'objective',
        title: '指令目标',
        titleEn: 'Objective',
        text: payload.intent
      },
      {
        id: 'five_variables',
        title: '九变量模块',
        titleEn: 'Nine Variables',
        text: `[CHARACTER SEED]:
${variables.characterSeed.trim()}

[AGE / BODY TYPE]:
${variables.ageBodyType.trim()}

[TIME-SPACE FIELD]:
${variables.timeSpaceScene.trim()}

[ACTION MOMENT]:
${variables.actionMoment.trim()}

[VISUAL MEDIUM]:
${variables.visualMedium.trim()}

[STYLE]:
${variables.style.trim()}

[COMPOSITION SCENE]:
${variables.compositionScene.trim()}

[LIGHTING ATMOSPHERE]:
${variables.lightingAtmosphere.trim()}

[OTHER DETAILS - OPTIONAL]:
${payload.otherDetails}`
      }
    );
  }

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
    title: '自动补全要求',
    titleEn: 'Auto Invention Request',
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

  return sections.map((section, index) => ({
    ...section,
    color: sectionPalette[index % sectionPalette.length]
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
