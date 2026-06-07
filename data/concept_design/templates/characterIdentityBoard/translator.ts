import {
  CharacterIdentityBoardBodyFormMode,
  CharacterIdentityBoardLanguage,
  CharacterIdentityBoardMaterialPacket,
  CharacterIdentityBoardMaterialTerm,
  CharacterIdentityBoardOptions,
  CharacterIdentityBoardRuleBlock,
  CharacterIdentityBoardTranslatedPayload,
  CharacterIdentityBoardVariables,
  CharacterIdentityBoardWorldLawMode
} from './types';

type CharacterIdentityBoardTranslatorInput = {
  values: CharacterIdentityBoardVariables;
  lang: CharacterIdentityBoardLanguage;
  options: CharacterIdentityBoardOptions;
  materialPacket?: CharacterIdentityBoardMaterialPacket;
  protocols: {
    styleCostumeConflict: string;
    actionMotif: string;
  };
};

const fallbackOtherDetails = (lang: CharacterIdentityBoardLanguage) => lang === 'CN'
  ? '没有额外细节。只根据角色种子、身体类型、视觉媒介与风格自然发明必要内容。'
  : 'No extra details. Invent only what naturally follows from the character seed, body type, visual medium, and style.';

const mediumBaseLabel = (
  lang: CharacterIdentityBoardLanguage,
  category: CharacterIdentityBoardOptions['mediumCategory']
) => {
  const labels: Record<CharacterIdentityBoardOptions['mediumCategory'], { cn: string; en: string }> = {
    PAINTING: {
      cn: '绘画 / 二维艺术媒介',
      en: 'painting / 2D art medium'
    },
    PHOTOGRAPHY: {
      cn: '真实相机摄影 / 真人实拍质感',
      en: 'real-camera photography / live-action photographic texture'
    },
    CGI: {
      cn: 'CGI / 3D 数字建模渲染',
      en: 'CGI / 3D digital model rendering'
    },
    TANGIBLE: {
      cn: '实体手作 / 实物模型摄影',
      en: 'tangible craft / physical model photography'
    },
    ALL: {
      cn: '融合媒介 / 跨风格混合',
      en: 'mixed media / cross-style fusion'
    }
  };
  return lang === 'CN' ? labels[category].cn : labels[category].en;
};

const buildTargetIntent = (
  lang: CharacterIdentityBoardLanguage,
  options: CharacterIdentityBoardOptions
) => {
  const mediumBase = mediumBaseLabel(lang, options.mediumCategory);
  const styleReference = options.primaryStyleReference?.trim();
  if (lang === 'CN') {
    const mediumStyleLock = styleReference
      ? `以「${mediumBase}」为不可改写的媒介硬底座，并吸收「${styleReference}」的视觉气质`
      : `以「${mediumBase}」为不可改写的媒介硬底座`;
    if (options.targetMode === 'GRID_BOARD') {
      return `${options.originality ? '创造一组完全原创、版权安全的概念变体' : '根据用户提供的方向创建一组概念变体'}，${mediumStyleLock}，并将其呈现为一张 12-cell concept exploration grid。`;
    }
    return `${options.originality ? '创造一个完全原创、版权安全的角色' : '根据用户提供的角色方向创建一个角色'}，${mediumStyleLock}，并将其呈现为一张 CHARACTER IDENTITY BOARD。`;
  }
  const mediumStyleLock = styleReference
    ? `use "${mediumBase}" as the non-rewritable medium base while absorbing the visual temperament of "${styleReference}"`
    : `use "${mediumBase}" as the non-rewritable medium base`;
  if (options.targetMode === 'GRID_BOARD') {
    return `${options.originality ? 'Create a fully original, copyright-safe set of concept variants' : 'Create a set of concept variants from the user-provided direction'}, ${mediumStyleLock}, and present them as a 12-cell concept exploration grid.`;
  }
  return `${options.originality ? 'Create a fully original, copyright-safe character' : 'Create a character from the user-provided direction'}, ${mediumStyleLock}, and present it as a CHARACTER IDENTITY BOARD.`;
};

const WORLD_LAW_LABELS: Record<CharacterIdentityBoardWorldLawMode, { name: string; nameEn: string; maxLiteralLevel: 1 | 2 | 3 | 4 | 5 }> = {
  LAW_L1: { name: 'L1 写实锁定', nameEn: 'L1 Realist Lock', maxLiteralLevel: 1 },
  LAW_L2: { name: 'L2 同构折译', nameEn: 'L2 Equivalent Translation', maxLiteralLevel: 2 },
  LAW_L3: { name: 'L3 局部缝合', nameEn: 'L3 Local Seam', maxLiteralLevel: 3 },
  LAW_L4: { name: 'L4 本体成立', nameEn: 'L4 Ontology Manifests', maxLiteralLevel: 4 },
  LAW_L5: { name: 'L5 狂想接管', nameEn: 'L5 Rhapsody Takeover', maxLiteralLevel: 5 }
};

const uniqueTerms = (terms: CharacterIdentityBoardMaterialTerm[]) => {
  const seen = new Set<string>();
  return terms.filter(term => {
    const key = `${term.blockId}:${term.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const displayTerm = (term: CharacterIdentityBoardMaterialTerm, lang: CharacterIdentityBoardLanguage) =>
  lang === 'CN' ? term.name : (term.nameEn || term.name);

const compactText = (text: string | undefined, maxLength: number) => {
  const compacted = (text || '').replace(/\s+/g, ' ').trim();
  if (compacted.length <= maxLength) return compacted;
  return `${compacted.slice(0, maxLength - 1)}…`;
};

const termMeaning = (term: CharacterIdentityBoardMaterialTerm, lang: CharacterIdentityBoardLanguage) =>
  lang === 'CN'
    ? compactText(term.def || term.defEn, 72)
    : compactText(term.defEn || term.def, 96);

const termKey = (term: CharacterIdentityBoardMaterialTerm) => `${term.blockId}:${term.name}`;

const uniqueForSummary = (
  terms: CharacterIdentityBoardMaterialTerm[],
  used = new Set<string>()
) => {
  const local = new Set<string>();
  return terms.filter(term => {
    const strictKey = termKey(term);
    const looseKey = term.name;
    if (used.has(strictKey) || used.has(looseKey) || local.has(strictKey) || local.has(looseKey)) return false;
    local.add(strictKey);
    local.add(looseKey);
    used.add(strictKey);
    used.add(looseKey);
    return true;
  });
};

const summarizeTermLines = (
  terms: CharacterIdentityBoardMaterialTerm[],
  lang: CharacterIdentityBoardLanguage
) => terms.map(term => {
    const label = displayTerm(term, lang);
    const meaning = termMeaning(term, lang);
    return meaning ? `${label} => ${meaning}` : label;
  });

const sectionTerms = (
  packet: CharacterIdentityBoardMaterialPacket,
  sectionId: CharacterIdentityBoardMaterialPacket['sections'][number]['id']
) => packet.sections.find(section => section.id === sectionId)?.terms || [];

const summarizeMaterialPacket = (
  packet: CharacterIdentityBoardMaterialPacket | undefined,
  lang: CharacterIdentityBoardLanguage
): string => {
  if (!packet) return '';
  const used = new Set<string>();
  const governance = uniqueForSummary(sectionTerms(packet, 'governance'), used);
  const style = uniqueForSummary(sectionTerms(packet, 'style'), used);
  const palette = uniqueForSummary(sectionTerms(packet, 'palette'), used);
  const subject = uniqueForSummary(sectionTerms(packet, 'subject'), used);

  if (governance.length + style.length + palette.length + subject.length === 0) return '';

  const governanceSummary = summarizeTermLines(governance, lang);
  const styleSummary = summarizeTermLines(style, lang);
  const paletteSummary = summarizeTermLines(palette, lang);
  const subjectSummary = summarizeTermLines(subject, lang);

  if (lang === 'CN') {
    return [
      '词库转译输入：',
      '以下是用户当前选择的原料摘要。请把它们综合成一个角色，不要机械复述词条标题，也不要平均拼贴。',
      `对象：${packet.objectRoute.name} / ${packet.objectRoute.nameEn}`,
      governanceSummary.length
        ? `统摄主轴：\n${governanceSummary.map(line => `- ${line}`).join('\n')}`
        : '',
      styleSummary.length
        ? `视觉风格与媒介参考：\n${styleSummary.map(line => `- ${line}`).join('\n')}`
        : '',
      paletteSummary.length
        ? `配色参考：${paletteSummary.join('；')}`
        : '',
      subjectSummary.length
        ? `本体细节重点：\n${subjectSummary.map(line => `- ${line}`).join('\n')}`
        : '',
      '转译要求：先保留第一识别身份；现代、科幻、超现实或跨时代原料必须按世界法则转成可成立的服装结构、材料证据、道具、符号、姿态、光线、构图或局部异常证据。'
    ].filter(Boolean).join('\n');
  }

  return [
    'Lexicon translation input:',
    'This is a compressed summary of the user-selected raw materials. Synthesize them into one character; do not mechanically repeat term titles or collage everything evenly.',
    `Subject: ${packet.objectRoute.nameEn} / ${packet.objectRoute.name}`,
    governanceSummary.length
      ? `Governing axes:\n${governanceSummary.map(line => `- ${line}`).join('\n')}`
      : '',
    styleSummary.length
      ? `Visual style and medium references:\n${styleSummary.map(line => `- ${line}`).join('\n')}`
      : '',
    paletteSummary.length
      ? `Palette reference: ${paletteSummary.join('; ')}`
      : '',
    subjectSummary.length
      ? `Ontology detail priorities:\n${subjectSummary.map(line => `- ${line}`).join('\n')}`
      : '',
    'Translation requirement: preserve the primary recognizable identity first. Modern, sci-fi, surreal, or cross-era materials must be converted under the world law into plausible costume structure, material evidence, props, symbols, pose, lighting, composition, or one local anomaly.'
  ].filter(Boolean).join('\n');
};

const buildMaterialJudgment = (
  packet: CharacterIdentityBoardMaterialPacket | undefined,
  lang: CharacterIdentityBoardLanguage,
  worldLawMode: CharacterIdentityBoardWorldLawMode = 'LAW_L2'
): string => {
  if (!packet) return '';
  const law = WORLD_LAW_LABELS[worldLawMode];
  const allTerms = uniqueTerms(packet.sections.flatMap(section => section.terms));
  if (allTerms.length === 0) return '';

  const absorptionTerms = allTerms.filter(term => term.absorptionRule).slice(0, 8);
  const absorptionLines = absorptionTerms.map(term => `${displayTerm(term, lang)} => ${term.absorptionRule}`);

  if (lang === 'CN') {
    const lawRules: Record<CharacterIdentityBoardWorldLawMode, string> = {
      LAW_L1: '只允许写实和现实可解释内容字面成立；L2-L5 或 high risk 词条必须降级为妆容、服装结构、道具、支具、材料暗示、摄影光影或制度标记。',
      LAW_L2: '允许非现实词条通过同构折译成立；超出现实时，把它转成同功能的时代材料、工艺、服装结构、工具、纹样或职业证据。',
      LAW_L3: '允许一个主异常作为局部缝合证据；其余高风险词条必须被吸收到服装、道具、材料、符号或姿态中，避免全身异化。',
      LAW_L4: '允许非现实材料或身体结构作为世界事实成立，但必须有清楚接口、功能、材料来源和身份逻辑；不得平均堆叠多个本体通道。',
      LAW_L5: '允许狂想化显性拼贴，但仍必须保留第一识别身份、主体轴线、脸部可读性和身份板清晰分区。'
    };
    return `融合裁决提示：
当前世界法则：${law.name}。
执行规则：${lawRules[worldLawMode]}
冲突吸收规则：
${absorptionLines.length ? absorptionLines.map(line => `- ${line}`).join('\n') : '- 无明确 absorptionRule；按主时空、主主体协议、主造型协议裁决。'}
最终执行：保留第一识别身份；冲突内容不要并列堆叠，优先转成服装结构、材料证据、道具、符号、姿态、光线、构图或局部异常证据。`;
  }

  const lawRules: Record<CharacterIdentityBoardWorldLawMode, string> = {
    LAW_L1: 'Only realistic and materially explainable content may remain literal; L2-L5 or high-risk terms must downgrade into makeup, costume structure, props, braces, material hints, lighting, or institutional marks.',
    LAW_L2: 'Non-realist terms may survive through equivalent translation; when beyond realism, convert them into same-function period material, craft, clothing structure, tool, pattern, or occupational evidence.',
    LAW_L3: 'Allow one main anomaly as local seam evidence; all other high-risk terms must be absorbed into costume, prop, material, symbol, or pose to avoid full-body mutation.',
    LAW_L4: 'Non-realist material or body structure may become a world fact, but it needs clear interface, function, material source, and identity logic; do not stack multiple ontology channels evenly.',
    LAW_L5: 'Explicit rhapsodic collage is allowed, while preserving primary identity, body axis, readable face, and clear identity-board sectioning.'
  };

  return `Fusion judgment hint:
Current world law: ${law.nameEn}.
Execution rule: ${lawRules[worldLawMode]}
Conflict absorption rules:
${absorptionLines.length ? absorptionLines.map(line => `- ${line}`).join('\n') : '- No explicit absorptionRule; judge by main time-space, subject protocol, and form protocol.'}
Final execution: preserve the primary identity. Do not stack conflicting terms as a parallel list; translate them into costume structure, material evidence, props, symbols, pose, lighting, composition, or one local anomaly.`;
};

export const buildCharacterIdentityBoardMaterialTranslationGuide = (
  packet: CharacterIdentityBoardMaterialPacket | undefined,
  lang: CharacterIdentityBoardLanguage,
  worldLawMode: CharacterIdentityBoardWorldLawMode = 'LAW_L2'
): string => '';

const buildOriginalityRule = (lang: CharacterIdentityBoardLanguage, originality: boolean) => {
  if (lang === 'CN') {
    return originality
      ? `原创性规则：
角色不得类似任何现有 anime、manga、game、movie、comic、celebrity、athlete、mascot、franchise character 或已知 copyrighted creature。
不得复制可识别的 IP 元素、服装、发型、制服、武器、logo、symbol、color combination、silhouette、power 或 signature visual traits。
从零创造一个全新的视觉身份。`
      : `参考边界规则：
可以使用用户明确提供的参考方向、世界观或授权元素。
不要额外引入用户未提供的 IP、名人、品牌、logo、franchise character 或 signature visual traits。`;
  }

  return originality
    ? `Originality rules:
The character must not resemble any existing anime, manga, game, movie, comic, celebrity, athlete, mascot, franchise character or known copyrighted creature.
Do not copy recognizable IP elements, costumes, hairstyles, uniforms, weapons, logos, symbols, color combinations, silhouettes, powers or signature visual traits.
Create a fresh visual identity from scratch.`
    : `Reference boundary rules:
You may use reference directions, world details, or authorized elements explicitly provided by the user.
Do not introduce extra IP, celebrities, brands, logos, franchise characters, or signature visual traits that the user did not provide.`;
};

const buildBodyFormControlRule = (
  lang: CharacterIdentityBoardLanguage,
  mode: CharacterIdentityBoardBodyFormMode = 'HUMANOID_DISGUISE'
) => {
  const cnRules: Record<CharacterIdentityBoardBodyFormMode, string> = {
    HUMANOID_DISGUISE: '硬锁第一识别为人形。狼人、狐妖、美杜莎、神怪或异种标签只能通过耳影、尾影、牙齿、瞳孔、发冠、妆容、服装结构、道具、姿态或局部材料暗示；不得生成完整兽体或怪物身体。',
    VISIBLE_HYBRID: '硬锁为人形与非人之间的混合身体。必须保留人形站立结构、脸部可读性和身份板清晰度，同时必须出现明确耳、角、尾、爪、鳞片、蛇发局部、兽化手脚、异色皮肤或局部非人器官作为本体证据。',
    BEAST_BODY: '硬锁为兽化 / 妖怪本体。狼人、狐妖、美杜莎、兽化人设等必须按字面身体成立；必须把“耳影、尾影、藏匿、暗示、民俗异征”等保守写法升级为可见兽耳、兽尾、毛发、爪、兽面、蛇发、鳞片或非人下身。仍需保持单一主体、身份可读和角色身份板结构清楚。',
    XENO_BODY: '硬锁为非人本体。第一识别不必保持人类比例；必须以非人 anatomy、异种、机械生命、神性实体、寄生结构或超现实身体成立，并给出清楚轮廓、功能逻辑、材料证据和人格线索。'
  };
  const enRules: Record<CharacterIdentityBoardBodyFormMode, string> = {
    HUMANOID_DISGUISE: 'Hard-lock the primary read as humanoid. Werewolf, fox spirit, Medusa, mythic, or alien labels may appear only through local hints such as ears, tail, teeth, pupils, hair-crown shape, makeup, costume structure, props, pose, or material evidence; do not generate a full beast or monster body.',
    VISIBLE_HYBRID: 'Hard-lock a hybrid body between humanoid and non-human. Keep humanoid standing structure, readable face, and clear board readability, while requiring explicit ears, horns, tail, claws, scales, partial snake hair, beast hands/feet, unusual skin, or local non-human organs as body-form evidence.',
    BEAST_BODY: 'Hard-lock a beast / mythic body. Werewolf, fox spirit, Medusa, beast-human, and similar identities must become literal body forms; conservative language such as hints, ear shadows, tail shadows, hidden traits, or folklore traces must be upgraded into visible ears, tail, fur, claws, beast face, snake hair, scales, or non-human lower body. Preserve one subject, readable identity, and clear character-board structure.',
    XENO_BODY: 'Hard-lock a non-human body. The primary read does not need human proportions; non-human anatomy, alien, mechanical life, divine entity, parasitic structure, or surreal body must exist literally with clear silhouette, function logic, material evidence, and personality cues.'
  };
  return lang === 'CN'
    ? `本体形态规则：
人设标签负责“身份、气质、社会图像和造型方向”；本体形态只负责“身体显性到什么程度”。
当前本体形态：${cnRules[mode]}
硬控制：本体形态是用户当前选择的身体显性等级，必须覆盖人设词条 def 中关于“隐藏、暗示、耳影、尾影、局部异征”的保守写法。
对象路由“人形”只表示主体入口和身份板语法仍以单一角色为中心，不等于必须保持普通人类身体。
世界法则关系：L1/L2 时才降级为暗示或局部证据；当前若为 L4/L5，必须让本体形态按字面成立。`
    : `Body form control:
Persona tags control identity, mood, social image, and styling direction; body form only controls how literally the body manifests.
Current body form: ${enRules[mode]}
Hard control: body form is the user's selected embodiment level and must override conservative wording in persona definitions such as hidden traits, hints, ear shadows, tail shadows, or local folklore traces.
The humanoid route only means the board still centers on one readable character; it does not force an ordinary human body.
World-law relation: only L1/L2 downgrade to hints or local evidence; under L4/L5, the selected body form must become literal.`;
};

const buildFormatSpecRule = (lang: CharacterIdentityBoardLanguage, options: CharacterIdentityBoardOptions) => {
  const quality = options.qualityLevel || 'HIGH';
  const qualityLabel = lang === 'CN'
    ? ({ STANDARD: '标准质量', HIGH: '高质量', ULTRA: '超高质量 / 4K 级细节' } as const)[quality]
    : ({ STANDARD: 'standard quality', HIGH: 'high quality', ULTRA: 'ultra quality / 4K-level detail' } as const)[quality];
  return lang === 'CN'
    ? `格式要求：
画幅：${options.format}
质量：${qualityLabel}`
    : `Format requirements:
Aspect ratio: ${options.format}
Quality: ${qualityLabel}`;
};

const buildBackgroundRule = (lang: CharacterIdentityBoardLanguage, mode: CharacterIdentityBoardOptions['backgroundMode'] = 'OFF_WHITE') => {
  const cn: Record<NonNullable<CharacterIdentityBoardOptions['backgroundMode']>, string> = {
    OFF_WHITE: '纯白或柔和 off-white，极简干净 graphic design，无复杂环境、无 logo、无 watermark。',
    PURE_WHITE: '纯白背景，极简干净 graphic design，无复杂环境、无 logo、无 watermark。',
    BLACK: '纯黑或深黑背景，极简干净 graphic design，主体轮廓和文字分区必须清楚，无复杂环境、无 logo、无 watermark。',
    GREEN_SCREEN: '标准绿幕背景，主体边缘清楚，便于后期抠像；无复杂环境、无 logo、无 watermark。',
    TRANSPARENT: '透明背景或可抠像的干净背景，主体边缘清楚；无复杂环境、无 logo、无 watermark。'
  };
  const en: Record<NonNullable<CharacterIdentityBoardOptions['backgroundMode']>, string> = {
    OFF_WHITE: 'pure white or soft off-white, minimal clean graphic design, no complex environment, no logo, no watermark.',
    PURE_WHITE: 'pure white background, minimal clean graphic design, no complex environment, no logo, no watermark.',
    BLACK: 'pure black or deep black background, minimal clean graphic design, clear subject silhouette and text sections, no complex environment, no logo, no watermark.',
    GREEN_SCREEN: 'standard green-screen background, clean subject edges for keying, no complex environment, no logo, no watermark.',
    TRANSPARENT: 'transparent or easily keyable clean background, clear subject edges, no complex environment, no logo, no watermark.'
  };
  return lang === 'CN' ? `Background：\n${cn[mode]}` : `Background:\n${en[mode]}`;
};

const fixedGridBoardRuleBlocks = (
  lang: CharacterIdentityBoardLanguage,
  options: CharacterIdentityBoardOptions,
  originalityRule: string
): CharacterIdentityBoardRuleBlock[] => {
  const translationRules = fixedRuleBlocks(lang, options, originalityRule).filter(block => block.layer === 'translation');
  const gridLayout = options.gridLayout || '3x4';
  const cellCount = gridLayout
    .split('x')
    .map(part => Number(part.trim()))
    .filter(Number.isFinite)
    .reduce((total, value) => total * value, 1);
  const gridLabel = `${cellCount}-cell`;
  const contentObject = options.gridContentObject || (lang === 'CN' ? '角色 / 主体' : 'character / subject');
  const variationAxis = options.gridVariationAxis || (lang === 'CN' ? '概念变体' : 'concept variants');
  const titleRule = options.gridTitleMode === 'ARTISTIC'
    ? (lang === 'CN' ? '允许一个短艺术化标题；标题必须服务主题，不要抢画面。' : 'Allow one short artistic title; it must serve the theme and not dominate the image.')
    : options.gridTitleMode === 'PLAIN'
      ? (lang === 'CN' ? '允许一个简短普通标题，清楚标注宫格主题。' : 'Allow one short plain title that clearly labels the grid theme.')
      : (lang === 'CN' ? '不要添加大标题。' : 'Do not add a large title.');
  const numberingRule = options.gridNumbering
    ? (lang === 'CN' ? '每个格子允许小编号，编号必须克制、清楚、不遮挡主体。' : 'Each cell may have a small number; numbering must be restrained, clear, and not cover the subject.')
    : (lang === 'CN' ? '不要给每个格子加编号。' : 'Do not number each cell.');
  const borderRule = options.gridBorderMode
    ? (lang === 'CN' ? '使用细边框或清楚分隔线，让每格边界明确。' : 'Use thin borders or clear separators so each cell boundary is readable.')
    : (lang === 'CN' ? '不要使用明显重边框；用留白和间距分隔格子。' : 'Do not use heavy visible borders; separate cells with whitespace and spacing.');
  if (lang === 'CN') {
    return [
      ...translationRules,
      {
        id: 'boardContent',
        layer: 'assembly',
        fixed: true,
        text: `创建一张 ${gridLabel} concept exploration grid。

宫格内容：
宫格布局：${gridLayout}
内容对象：${contentObject}
变化轴：${variationAxis}

所有格子围绕同一个核心主题、同一个对象方向和同一个视觉媒介展开。每个格子都是一个可读的变化样本，不是互不相关的主题。

每格必须保留：
核心身份 / 核心主题、同一物理媒介、同一世界法则、同一风格底线。

每格必须产生明显差异：
沿着“${variationAxis}”产生变化；剪影、姿态、材料、配色、服装结构、道具、构图、身份方向或局部本体证据可以作为辅助差异，但不要偏离变化轴。`
      },
      {
        id: 'formatSpec',
        layer: 'assembly',
        fixed: true,
        text: buildFormatSpecRule(lang, options)
      },
      {
        id: 'layout',
        layer: 'assembly',
        fixed: true,
        text: `Layout：
默认使用 ${gridLayout} 网格。
所有格子尺寸一致、边界清楚、留白干净、阅读顺序明确。
${numberingRule}
${titleRule}
${borderRule}
不要把格子挤成杂乱拼贴；不要让主体互相重叠；不要出现复杂长文本说明。`
      },
      {
        id: 'background',
        layer: 'assembly',
        fixed: true,
        text: buildBackgroundRule(lang, options.backgroundMode)
      },
      {
        id: 'priority',
        layer: 'assembly',
        fixed: true,
        text: `优先级：
同一主题一致性、沿着“${variationAxis}”形成的清楚差异、准确执行 [VISUAL MEDIUM]、满足 [STYLE] 中的艺术需求、配色与材料可读、每格构图清楚、${options.originality ? '原创概念探索、' : ''}不要生成互不相关的角色 / 物件 / 场景。`
      }
    ];
  }

  return [
    ...translationRules,
    {
      id: 'boardContent',
      layer: 'assembly',
      fixed: true,
      text: `Create a ${gridLabel} concept exploration grid.

Grid content:
Grid layout: ${gridLayout}
Content object: ${contentObject}
Variation axis: ${variationAxis}

All cells are built around the same core theme, subject direction, and visual medium. Each cell is a readable variation sample, not an unrelated theme.

Every cell must preserve:
the core identity / core theme, the same physical medium, the same world law, and the same style floor.

Every cell must create visible variation:
vary along "${variationAxis}". Silhouette, pose, material, palette, outfit structure, prop, composition, identity direction, or local ontology evidence may support the difference, but do not drift away from the variation axis.`
    },
    {
      id: 'formatSpec',
      layer: 'assembly',
      fixed: true,
      text: buildFormatSpecRule(lang, options)
    },
    {
      id: 'layout',
      layer: 'assembly',
      fixed: true,
      text: `Layout:
use a ${gridLayout} grid.
All cells have equal size, clear boundaries, clean whitespace, and readable order.
${numberingRule}
${titleRule}
${borderRule}
Do not crush cells into a cluttered collage; do not overlap subjects between cells; do not add long text blocks.`
    },
    {
      id: 'background',
      layer: 'assembly',
      fixed: true,
      text: buildBackgroundRule(lang, options.backgroundMode)
    },
    {
      id: 'priority',
      layer: 'assembly',
      fixed: true,
      text: `Prioritize:
same-theme consistency, clear differences along "${variationAxis}", accurate execution of [VISUAL MEDIUM], the art-direction needs in [STYLE], readable palette and material, clear composition in every cell, ${options.originality ? 'original concept exploration, ' : ''}do not generate unrelated characters / objects / scenes.`
    }
  ];
};

const fixedRuleBlocks = (
  lang: CharacterIdentityBoardLanguage,
  options: CharacterIdentityBoardOptions,
  originalityRule: string
): CharacterIdentityBoardRuleBlock[] => {
  if (lang === 'CN') {
    return [
      { id: 'originality', layer: 'translation', fixed: false, text: originalityRule },
      { id: 'bodyFormControl', layer: 'translation', fixed: false, text: buildBodyFormControlRule(lang, options.bodyFormMode) },
      {
        id: 'authenticity',
        layer: 'translation',
        fixed: true,
        text: `角色真实感规则：
角色必须具有强烈的个体性与非通用设计感。
如果角色是人形主体，使用有辨识度的面部结构、轻微不对称、自然变化、小缺陷和可信比例。
如果角色是风格化角色，通过原创 shape language、富有表现力的比例、独特特征、姿态和清楚的人格线索保持唯一性。
如果角色是非人类，通过原创 anatomy、可信生物结构、独特比例、功能性特征、surface texture 和清楚的人格线索保持唯一性。`
      },
      {
        id: 'mediumControl',
        layer: 'translation',
        fixed: true,
        text: `媒介与风格控制：
[VISUAL MEDIUM] 是最终图像必须执行的具体物理媒介与 rendering language。
[STYLE] 只控制视觉风格摘要：光线、色彩、构图、镜头距离、媒介质感、观看关系和整体审美气质。
[OTHER DETAILS] 承担服装、道具、妆发、材料、色彩、身份备注、限制和版式偏好。
严格执行 [VISUAL MEDIUM] 和 [STYLE]，不要把一种媒介改写成另一种媒介。
CHARACTER IDENTITY BOARD 只是 presentation format；展示方式必须服务于 [VISUAL MEDIUM] 和 [STYLE]，不得覆盖它们。`
      },
      {
        id: 'boardContent',
        layer: 'assembly',
        fixed: true,
        text: `创建一张 CHARACTER IDENTITY BOARD。

Board 内容：
大型全身主视图、自然站姿全身视图、背面视图、侧面视图、第二个 attitude pose、4 到 6 个 face / expression studies、服装细节 close-ups 或 anatomy detail close-ups、关键道具 close-up 或 signature feature close-up、小型 silhouette / shape study、color palette strip、简短可读的 identity notes。`
      },
      {
        id: 'formatSpec',
        layer: 'assembly',
        fixed: true,
        text: buildFormatSpecRule(lang, options)
      },
      {
        id: 'layout',
        layer: 'assembly',
        fixed: true,
        text: `Layout：
非对称、优雅、有记忆点、大面积留白、所有视图清楚分隔、身体不要重叠、脸不要裁切、四肢不要隐藏、不要杂乱。`
      },
      {
        id: 'background',
        layer: 'assembly',
        fixed: true,
        text: buildBackgroundRule(lang, options.backgroundMode)
      },
      {
        id: 'priority',
        layer: 'assembly',
        fixed: true,
        text: `优先级：
准确执行 [VISUAL MEDIUM]、满足 [STYLE] 中的艺术需求、强烈且独特的身份、清晰可读的服装设计或 anatomy design、明确 personality、${options.originality ? '原创 character design、' : ''}非重复角色设计、媒介一致的 identity-board presentation。`
      }
    ];
  }

  return [
    { id: 'originality', layer: 'translation', fixed: false, text: originalityRule },
    { id: 'bodyFormControl', layer: 'translation', fixed: false, text: buildBodyFormControlRule(lang, options.bodyFormMode) },
    {
      id: 'authenticity',
      layer: 'translation',
      fixed: true,
      text: `Character authenticity rules:
Create the character with a strong sense of individuality and non-generic design.
If the character is human or humanoid, use distinctive facial structure, subtle asymmetry, natural variation, small imperfections and believable proportions.
If the character is stylized, preserve uniqueness through original shape language, expressive proportions, distinctive features, posture and clear personality cues.
If the character is non-human, preserve uniqueness through original anatomy, believable biological structure, distinctive proportions, functional features, surface texture and clear personality cues.`
    },
      {
        id: 'mediumControl',
        layer: 'translation',
        fixed: true,
        text: `Medium and style control:
[VISUAL MEDIUM] is the concrete physical medium and rendering language the final image must execute.
[STYLE] only controls the visual style summary: lighting, color, composition, lens distance, medium texture, viewing relation, and overall aesthetic mood.
[OTHER DETAILS] carries outfit, props, makeup/hair, materials, colors, identity notes, constraints, and layout preferences.
Strictly execute [VISUAL MEDIUM] and [STYLE]; do not rewrite one medium into another.
The character identity board format is only the presentation format; the presentation must serve [VISUAL MEDIUM] and [STYLE], not override them.`
    },
    {
      id: 'boardContent',
      layer: 'assembly',
      fixed: true,
      text: `Create a CHARACTER IDENTITY BOARD.

Board content:
large full-body main character view, neutral full-body view, back view, profile view, secondary attitude pose, 4 to 6 face or expression studies, outfit detail close-ups or anatomy detail close-ups, key prop close-up or signature feature close-up, small silhouette or shape study, color palette strip, short readable identity notes.`
    },
    {
      id: 'formatSpec',
      layer: 'assembly',
      fixed: true,
      text: buildFormatSpecRule(lang, options)
    },
    {
      id: 'layout',
      layer: 'assembly',
      fixed: true,
      text: `Layout:
asymmetrical, elegant, visually memorable, large empty space, clean separation between all views, no overlapping bodies, no cropped faces, no hidden limbs, no clutter.`
    },
    {
      id: 'background',
      layer: 'assembly',
      fixed: true,
      text: buildBackgroundRule(lang, options.backgroundMode)
    },
    {
      id: 'priority',
      layer: 'assembly',
      fixed: true,
      text: `Prioritize:
accurate execution of [VISUAL MEDIUM], the art-direction needs in [STYLE], strong unique identity, readable outfit design or anatomy design, clear personality, ${options.originality ? 'original character design, ' : ''}non-repetitive character design, medium-consistent identity-board presentation.`
    }
  ];
};

export const translateCharacterIdentityBoardMaterials = ({
  values,
  lang,
  options,
  materialPacket,
  protocols
}: CharacterIdentityBoardTranslatorInput): CharacterIdentityBoardTranslatedPayload => {
  const otherDetails = values.otherDetails.trim() || fallbackOtherDetails(lang);
  const normalizedVariables: CharacterIdentityBoardVariables = {
    characterSeed: values.characterSeed || '',
    ageBodyType: values.ageBodyType || '',
    timeSpaceScene: values.timeSpaceScene || '',
    actionMoment: values.actionMoment || '',
    visualMedium: values.visualMedium || '',
    style: values.style || '',
    paletteStrategy: values.paletteStrategy || '',
    compositionScene: values.compositionScene || '',
    lightingAtmosphere: values.lightingAtmosphere || '',
    otherDetails
  };
  const intent = buildTargetIntent(lang, options);
  const targetRuleBlocks = options.targetMode === 'GRID_BOARD'
    ? fixedGridBoardRuleBlocks(lang, options, buildOriginalityRule(lang, options.originality))
    : fixedRuleBlocks(lang, options, buildOriginalityRule(lang, options.originality));

  return {
    intent,
    variables: normalizedVariables,
    otherDetails,
    materialPacket,
    ruleBlocks: [
      {
        id: 'materialPacketSummary',
        layer: 'translation',
        fixed: false,
        text: ''
      },
      {
        id: 'materialJudgment',
        layer: 'translation',
        fixed: false,
        text: ''
      },
      ...targetRuleBlocks
    ],
    options,
    lang
  };
};
