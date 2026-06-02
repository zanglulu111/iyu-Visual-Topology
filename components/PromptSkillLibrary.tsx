import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  BookOpen,
  Box,
  Camera,
  Check,
  ChevronRight,
  Clipboard,
  Copy,
  Cpu,
  Download,
  FileText,
  ImagePlus,
  Lightbulb,
  MessageSquare,
  PanelRight,
  Paintbrush,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Trash2,
  Upload,
  Wand2,
  X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { generatePromptSkillVariables } from '../services/promptSkillService';
import {
  generatePromptSkillImage,
  getPromptSkillOpenAIImageSize,
  PromptSkillAspectRatio,
  PromptSkillImageFormat,
  PromptSkillImageQuality,
  PromptSkillImageScale
} from '../services/promptSkillImageService';
import { globalTaskManager, runWithTask } from '../services/taskManager';
import { TaskManagerPanel } from './TaskManagerPanel';
import { DriverType } from '../types';
import { configService } from '../src/services/configService';
import { ENGINE_CONFIGS, EngineId, MODEL_CATALOG } from '../src/types/config';

type PromptSkillLibraryProps = {
  lang: 'CN' | 'EN';
};

type SkillLanguage = 'CN' | 'EN';

type SkillVariables = {
  characterSeed: string;
  ageBodyType: string;
  visualMedium: string;
  style: string;
  otherDetails: string;
};

type LocalizedVariables = Record<SkillLanguage, SkillVariables>;

type ExampleVariableSet = {
  id: string;
  title: string;
  titleEn: string;
  tone: string;
  variables: LocalizedVariables;
};

type SourceMode = 'IDEA' | 'ARTICLE' | 'IMAGE';
type PhysicalMediumCategory = 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'TANGIBLE';
type BoardFormat = PromptSkillAspectRatio;

type IdentityBoardOptions = {
  originality: boolean;
  format: BoardFormat;
  mediumCategory: PhysicalMediumCategory;
};

type SourceInputs = {
  ideaText: string;
  articleText: string;
  targetCharacter: string;
  imageDataUrl: string;
  imageName: string;
  detailImages: Array<{
    dataUrl: string;
    name: string;
  }>;
  imageGuidance: string;
};

const boardFormatOptions: Array<{
  value: BoardFormat;
  label: string;
  labelEn: string;
}> = [
  { value: '16:9', label: '16:9', labelEn: '16:9' },
  { value: '9:16', label: '9:16', labelEn: '9:16' },
  { value: '4:3', label: '4:3', labelEn: '4:3' },
  { value: '3:4', label: '3:4', labelEn: '3:4' },
  { value: '3:2', label: '3:2', labelEn: '3:2' },
  { value: '2:3', label: '2:3', labelEn: '2:3' },
  { value: '21:9', label: '21:9', labelEn: '21:9' },
  { value: '1:1', label: '1:1', labelEn: '1:1' }
];

const imageScaleOptions: PromptSkillImageScale[] = ['1k', '2k', '4k'];
const imageFormatOptions: Array<{
  value: PromptSkillImageFormat;
  label: string;
  labelEn: string;
}> = [
  { value: 'jpeg', label: 'JPEG', labelEn: 'JPEG' },
  { value: 'png', label: 'PNG', labelEn: 'PNG' },
  { value: 'webp', label: 'WebP', labelEn: 'WebP' }
];
const imageQualityOptions: Array<{
  value: PromptSkillImageQuality;
  label: string;
  labelEn: string;
}> = [
  { value: 'low', label: '低质量', labelEn: 'Low' },
  { value: 'medium', label: '中质量', labelEn: 'Medium' },
  { value: 'high', label: '高质量', labelEn: 'High' }
];

const createEmptySkillVariables = (): SkillVariables => ({
  characterSeed: '',
  ageBodyType: '',
  visualMedium: '',
  style: '',
  otherDetails: ''
});

const createEmptyLocalizedVariables = (): LocalizedVariables => ({
  CN: createEmptySkillVariables(),
  EN: createEmptySkillVariables()
});

const cloneLocalizedVariables = (variables: LocalizedVariables): LocalizedVariables => ({
  CN: { ...variables.CN },
  EN: { ...variables.EN }
});

const subwayDesignerVariables: LocalizedVariables = {
  CN: {
    characterSeed: '一名前地铁维修工，现在为地下街头表演者设计定制夜行夹克。',
    ageBodyType: '成年人，约 20 岁末到 30 岁中段，瘦削体型，中等身高，姿态略显疲惫，手部实用而粗糙，有稳定的日常存在感。',
    visualMedium: '真人摄影角色定妆照 / live-action studio character photography，真实相机拍摄，自然人类五官，可信面部结构，真实布料细节，干净棚拍光线，摄影身份板展示。',
    style: '城市街头时装，地下音乐场景能量，层叠当代服装，手工夹克文化，低饱和城市夜色调，安静的个人魅力。',
    otherDetails: '保持角色真实、克制、原创。强调夹克结构细节、磨损工具、石墨蓝灰色调，以及后台般的平静气质。'
  },
  EN: {
    characterSeed: 'A former subway maintenance worker who now designs custom nightwear jackets for underground street performers.',
    ageBodyType: 'Adult, late 20s to mid-30s, lean build, average height, slightly tired posture, practical hands, grounded everyday presence.',
    visualMedium: 'Live-action studio character photography / actor costume-test portrait, real camera capture, natural human features, believable facial structure, realistic fabric detail, clean studio lighting, photographic identity-board presentation.',
    style: 'Urban street fashion, underground music-scene energy, layered contemporary clothing, handmade jacket culture, muted city-night palette, quiet charisma.',
    otherDetails: 'Keep the character grounded and original. Emphasize jacket construction details, worn utility tools, subdued graphite-blue palette, and a calm backstage presence.'
  }
};

const exampleSets: ExampleVariableSet[] = [
  {
    id: 'subway-designer',
    title: '地下外套设计师',
    titleEn: 'Subway Jacket Designer',
    tone: 'cinematic',
    variables: subwayDesignerVariables
  },
  {
    id: 'cassette-courier',
    title: '霓虹磁带信使',
    titleEn: 'Cassette Courier',
    tone: 'anime',
    variables: {
      CN: {
        characterSeed: '一名年轻的夜巡信使，在霓虹照亮的城区之间递送秘密磁带讯息。',
        ageBodyType: '年轻成年人，身形纤细，动作敏捷，中等身高，姿态警觉，肢体表达清晰。',
        visualMedium: '1980 年代手绘赛璐璐动画角色设计，干净墨线，平涂色彩，经典 cel shading，复古动画美学，高雅身份板展示。',
        style: '复古 city-pop 科幻，霓虹夜生活气氛，模拟技术质感，时髦青春剧能量，怀旧日本动画氛围。',
        otherDetails: '包含紧凑的信使挎包、带标签的磁带盒、雨夜街头服装，以及明亮但不指向任何现有 IP 的色彩组合。'
      },
      EN: {
        characterSeed: 'A young night patrol courier who delivers secret cassette messages between neon-lit districts.',
        ageBodyType: 'Young adult, slim build, agile frame, medium height, alert posture, expressive movements.',
        visualMedium: '1980s hand-painted cel anime character design, clean ink linework, flat painted colors, classic cel shading, retro animation aesthetics, elegant identity-board presentation.',
        style: 'Retro city-pop sci-fi, neon nightlife mood, analog technology, stylish youth-drama energy, nostalgic Japanese animation atmosphere.',
        otherDetails: 'Include a compact courier satchel, labeled cassette cases, rain-slick streetwear, and a bright but non-franchise color palette.'
      }
    }
  },
  {
    id: 'cozy-inventor',
    title: '日常魔法修理师',
    titleEn: 'Everyday Magic Inventor',
    tone: 'family animation',
    variables: {
      CN: {
        characterSeed: '一个开朗但有点笨拙的年轻发明家，修理坏掉的日常物件，并偷偷给它们加上细小的魔法升级。',
        ageBodyType: '年轻成年人，偏矮到中等身高，紧凑体型，圆润特征，姿态富有表情，双手活跃，气质温暖亲近。',
        visualMedium: '风格化 3D 动画角色设计，精致家庭动画质感，干净雕塑形体，柔和材质定义，表情丰富的面部设计，讨喜比例，高级身份板展示。',
        style: '温暖动画冒险，日常奇幻，发明主题，舒适的情感叙事，彩色角色吸引力，精致家庭电影能量。',
        otherDetails: '使用被修好的家用物件、小工具挂饰、柔软羊毛材质、手写标签，以及乐观的色彩 palette。'
      },
      EN: {
        characterSeed: 'A cheerful but slightly clumsy young inventor who repairs broken everyday objects and secretly gives them small magical upgrades.',
        ageBodyType: 'Young adult, short to average height, compact build, rounded features, expressive posture, lively hands, warm approachable presence.',
        visualMedium: 'Stylized 3D animation character design, polished family-animation look, clean sculpted forms, soft material definition, expressive facial design, appealing proportions, premium identity-board presentation.',
        style: 'Heartwarming animated adventure, whimsical everyday fantasy, playful invention theme, cozy emotional storytelling, colorful character appeal, polished family-film energy.',
        otherDetails: 'Use repaired household objects, small tool charms, soft wool textures, hand-written labels, and an optimistic color palette.'
      }
    }
  },
  {
    id: 'chem-salvager',
    title: '地下化学遗物回收者',
    titleEn: 'Chem-Tech Salvager',
    tone: 'prestige fantasy',
    variables: {
      CN: {
        characterSeed: '一名聪明的地下城化学科技回收者，用破损实验室遗物和染着微光的机器零件制造优雅的非法装置。',
        ageBodyType: '年轻成年女性，瘦削但有韧性，中等身高，身体略微前倾，手部动作迅速，目光强烈而警觉。',
        visualMedium: '风格化半写实角色概念设计，带 3D 灵感的绘画渲染，富有表情的面部设计，精致材质细节，电影感光线，高级身份板展示。',
        style: '高级动画奇幻剧审美，工业幻想，地下城污垢，art nouveau 与 steampunk 融合，戏剧化绘画写实，阴郁电影氛围，丰富剪影设计，情感化视觉叙事。',
        otherDetails: '避免直接引用任何现有剧集。使用原创实验室遗物形状、染污手套、不对称绑带、烟雾感蓝绿色光线和精密工具细节。'
      },
      EN: {
        characterSeed: 'A brilliant undercity chem-tech salvager who builds elegant illegal devices from broken laboratory relics and shimmer-stained machinery.',
        ageBodyType: 'Young adult woman, lean build, wiry strength, medium height, slightly forward posture, quick hands, intense watchful presence.',
        visualMedium: 'Stylized semi-realistic character concept art, painterly 3D-inspired rendering, expressive facial design, refined material detail, cinematic lighting, premium identity-board presentation.',
        style: 'Prestige animated fantasy series aesthetic, industrial fantasy, undercity grime, art nouveau meets steampunk, dramatic painterly realism, moody cinematic atmosphere, richly designed silhouette, emotional visual storytelling.',
        otherDetails: 'Avoid direct references to existing shows. Use original lab relic shapes, stained gloves, asymmetrical straps, smoky teal light, and precise tool details.'
      }
    }
  }
];

const mediumPresets: Record<SkillLanguage, string[]> = {
  CN: [
    '真人摄影角色定妆照 / live-action studio photography',
    '写实数字绘画 / realistic digital painting',
    '现代 3D 动画角色模型 / 3D character render',
    '2D anime 角色设计',
    'graphic novel 插画',
    '水彩故事书插画',
    'flat vector poster 插画',
    '水墨插画'
  ],
  EN: [
    'live-action studio character photography',
    'realistic digital painting',
    'modern 3D animation character render',
    '2D anime character design',
    'graphic novel illustration',
    'watercolor storybook illustration',
    'flat vector poster illustration',
    'ink and wash illustration'
  ]
};

const stylePresets: Record<SkillLanguage, string[]> = {
  CN: [
    '暗色电影 noir',
    '柔和忧郁 artbook mood',
    '末世生存服装',
    'retro-future fashion',
    '舒适日常 slice-of-life',
    '优雅 fantasy costume design',
    '诗性海岸 fantasy',
    'bioluminescent natural history mood'
  ],
  EN: [
    'dark cinematic noir',
    'soft melancholic artbook mood',
    'post-apocalyptic survival wear',
    'retro-future fashion',
    'cozy slice-of-life',
    'elegant fantasy costume design',
    'poetic coastal fantasy',
    'bioluminescent natural history mood'
  ]
};

const sourceModeMeta: Array<{
  id: SourceMode;
  icon: React.ElementType;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
}> = [
  {
    id: 'IDEA',
    icon: Lightbulb,
    label: '灵感元素',
    labelEn: 'Idea / Elements',
    desc: '输入想法，让 AI 补全五个变量槽。',
    descEn: 'Turn a rough idea into the five variable slots.'
  },
  {
    id: 'ARTICLE',
    icon: FileText,
    label: '文章抽取',
    labelEn: 'Article Extract',
    desc: '从文章/故事中提取指定人物造型。',
    descEn: 'Extract a named character from an article or story.'
  },
  {
    id: 'IMAGE',
    icon: ImagePlus,
    label: '图片反推',
    labelEn: 'Image Reverse',
    desc: '从参考图反推出角色身份板变量。',
    descEn: 'Reverse a reference image into board variables.'
  }
];

const mediumCategoryMeta: Array<{
  id: PhysicalMediumCategory;
  icon: React.ElementType;
  label: string;
  labelEn: string;
  desc: string;
  descEn: string;
}> = [
  {
    id: 'PAINTING',
    icon: Paintbrush,
    label: '绘画/艺术媒介',
    labelEn: 'Painting / Art',
    desc: '设定图、数字绘画、原画、插画材质。',
    descEn: 'Concept art, digital painting, illustration.'
  },
  {
    id: 'CGI',
    icon: Cpu,
    label: '计算生成/数字建模',
    labelEn: 'CGI / Digital Model',
    desc: '3D 资产、游戏模型、UE/Unity 渲染。',
    descEn: '3D assets, game models, engine rendering.'
  },
  {
    id: 'PHOTOGRAPHY',
    icon: Camera,
    label: '镜头捕捉/写实摄影',
    labelEn: 'Photography',
    desc: '真实演员照片、电影剧照、cosplay 摄影。',
    descEn: 'Actor photos, film stills, cosplay photography.'
  },
  {
    id: 'TANGIBLE',
    icon: Box,
    label: '实体手作/定格媒介',
    labelEn: 'Tangible / Craft',
    desc: '雕塑、微缩模型、黏土、实体手作。',
    descEn: 'Sculpture, miniature, clay, handmade craft.'
  }
];

const getMediumCategoryInstruction = (category: PhysicalMediumCategory, lang: SkillLanguage) => {
  const meta = mediumCategoryMeta.find(item => item.id === category) || mediumCategoryMeta[0];
  return lang === 'CN'
    ? `${meta.label}：${meta.desc}`
    : `${meta.labelEn}: ${meta.descEn}`;
};

const getMediumCategoryContract = (category: PhysicalMediumCategory, lang: SkillLanguage) => {
  const contracts: Record<PhysicalMediumCategory, Record<SkillLanguage, string>> = {
    PAINTING: {
      CN: `绘画/二维艺术媒介硬分流：
- 最终画面必须显然属于绘画、插画、原画、漫画、版画、水彩、油画、厚涂、数字绘画或其他 2D art medium。
- visualMedium 必须写出具体绘画媒介，例如 digital painting、oil painting、ink illustration、watercolor、graphic novel art、anime cel painting。
- “写实”在这里只能表示绘画写实、自然主义绘画、写实主义插画，不得被理解成真实相机照片。
- 禁止真实摄影、真人剧照、相机拍摄感、3D/Unreal/Octane/CGI 渲染、实体黏土/手作模型摄影，除非用户明确要求混合媒介。`,
      EN: `Painting / 2D art hard split:
- The final image must visibly belong to painting, illustration, concept art, comics, printmaking, watercolor, oil paint, painterly digital art, or another 2D art medium.
- visualMedium must name a concrete painting medium, such as digital painting, oil painting, ink illustration, watercolor, graphic novel art, or anime cel painting.
- "Realistic" means painterly realism, naturalist painting, or realistic illustration here, never a real camera photograph.
- Do not drift into live-action photography, film stills, camera-captured actors, 3D / Unreal / Octane / CGI rendering, or tangible clay / craft model photography unless the user explicitly asks for mixed media.`
    },
    CGI: {
      CN: `CGI / 数字建模硬分流：
- 最终画面必须显然属于 3D 建模、CGI、游戏引擎、Unreal Engine、Unity、Octane、Blender、ZBrush、PBR 或数字角色资产渲染。
- visualMedium 必须写出具体 3D/CGI 管线，例如 Unreal Engine cinematic character render、PBR 3D character model、stylized 3D animation asset、Octane render。
- “写实”在这里只能表示 3D photoreal render 或 cinematic CGI realism，不得变成真人摄影，也不得变成绘画写实。
- 禁止笔触、插画、concept art painting、真实演员照片、cosplay 摄影、黏土或手作实体模型质感，除非用户明确要求混合媒介。`,
      EN: `CGI / digital model hard split:
- The final image must visibly belong to 3D modeling, CGI, game-engine rendering, Unreal Engine, Unity, Octane, Blender, ZBrush, PBR, or digital character-asset rendering.
- visualMedium must name a concrete 3D / CGI pipeline, such as Unreal Engine cinematic character render, PBR 3D character model, stylized 3D animation asset, or Octane render.
- "Realistic" means 3D photoreal render or cinematic CGI realism here, never live-action photography or painterly realism.
- Do not drift into brushwork, illustration, concept art painting, real actor photography, cosplay photography, clay, or handmade model texture unless the user explicitly asks for mixed media.`
    },
    PHOTOGRAPHY: {
      CN: `摄影 / 真人镜头捕捉硬分流：
- 最终画面必须显然像真实相机拍摄的真人角色身份板、演员定妆照、casting reference、cosplay 摄影或电影剧照级摄影。
- visualMedium 必须写出具体摄影媒介，例如 live-action character photography、cinematic actor costume test、studio portrait photography、film still contact sheet。
- 如果角色是人类或类人，默认应像真实演员/模特在真实服装、化妆、道具和灯光下被拍摄；皮肤、头发、布料、金属和道具必须是镜头捕捉的物理质感。
- “写实”在这里只能表示 photographic realism / real camera capture，不得被理解成写实绘画。
- 禁止 painterly、illustration、concept art、digital painting、visible brushstrokes、anime drawing、3D render、game engine、plastic CGI、clay puppet 或手作模型感。`,
      EN: `Photography / live-action camera-capture hard split:
- The final image must clearly look like a real-camera live-action character identity board, actor costume test, casting reference, cosplay photography, or cinematic film-still photography.
- visualMedium must name a concrete photographic medium, such as live-action character photography, cinematic actor costume test, studio portrait photography, or film still contact sheet.
- If the character is human or humanoid, they should read as a real actor / model photographed in real costume, makeup, props, and lighting; skin, hair, fabric, metal, and props must have camera-captured physical texture.
- "Realistic" means photographic realism / real camera capture here, never realistic painting.
- Do not drift into painterly rendering, illustration, concept art, digital painting, visible brushstrokes, anime drawing, 3D render, game engine, plastic CGI, clay puppet, or handmade model aesthetics.`
    },
    TANGIBLE: {
      CN: `实体手作 / 定格媒介硬分流：
- 最终画面必须显然是实体手作对象被真实相机拍摄：黏土、毛毡、纸艺、树脂、木偶、微缩模型、雕塑、定格动画角色或 maquette。
- visualMedium 必须写出具体实体媒介，例如 clay stop-motion puppet、felt handmade doll、resin maquette photography、miniature practical model、paper craft character。
- “写实”在这里只能表示真实拍摄的实体材料与微缩物理存在感，不得变成真人摄影、CGI photoreal 或绘画写实。
- 必须强调材料纤维、指痕、雕塑边缘、胶水/缝线/漆面、微距景深、比例尺度等实体证据。
- 禁止数字绘画、插画、concept art、纯 CGI 渲染、真实人类演员照片，除非用户明确要求混合媒介。`,
      EN: `Tangible / craft / stop-motion hard split:
- The final image must clearly be a real-camera photograph of a physical handmade object: clay, felt, papercraft, resin, puppet, miniature model, sculpture, stop-motion character, or maquette.
- visualMedium must name a concrete physical medium, such as clay stop-motion puppet, felt handmade doll, resin maquette photography, miniature practical model, or paper craft character.
- "Realistic" means real photographed materiality and miniature physical presence here, never live-action human photography, CGI photorealism, or painterly realism.
- Emphasize material fibers, fingerprints, sculpted edges, glue / stitching / paint finish, macro depth of field, scale, and other evidence of physical construction.
- Do not drift into digital painting, illustration, concept art, pure CGI rendering, or real human actor photography unless the user explicitly asks for mixed media.`
    }
  };

  return contracts[category][lang];
};

const getTextInputPriorityContract = (category: PhysicalMediumCategory, lang: SkillLanguage) => {
  const mediumContract = getMediumCategoryContract(category, lang);
  return lang === 'CN'
    ? `文字输入优先级：
1. 用户文字中的明确艺术需求必须被满足，尤其是用户写出的真人摄影、3D 虚幻引擎、绘画、雕塑、黏土、定格等物理媒介要求。
2. 如果用户文字已经明确指定具体物理媒介，以用户文字为绝对标准；不要因为默认选项把真人摄影改成写实绘画，或把 3D 改成摄影。
3. 如果用户文字没有明确指定物理媒介，则使用下方物理媒介大类作为最低底线和反跑偏锁。
4. 不要混合互相冲突的媒介。除非用户明确要求 mixed media，否则一次只落在一个清楚的物理媒介系统内。

以下“所选物理媒介大类合同”只在用户文字/人工引导没有写出更具体物理媒介时生效；如果用户已经写出真人摄影、3D 虚幻引擎、绘画、雕塑、黏土、定格等具体媒介，必须优先执行用户文字，并忽略下方与之冲突的条目：
${mediumContract}`
    : `Text-input priority:
1. Explicit art-direction requirements in the user's text must be satisfied, especially physical-medium requests such as live-action photography, Unreal / 3D, painting, sculpture, clay, or stop-motion.
2. If the user's text explicitly names a concrete physical medium, treat that text as the absolute standard; do not turn live-action photography into realistic painting, or 3D into photography because of a default selector.
3. If the user's text does not clearly specify a physical medium, use the physical medium category below as the minimum floor and anti-drift lock.
4. Do not blend conflicting media. Unless the user explicitly asks for mixed media, land in one clear physical-medium system.

The selected physical-medium category contract below applies only when the user's text / manual guidance does not name a more concrete physical medium; if the user already specifies live-action photography, Unreal / 3D, painting, sculpture, clay, stop-motion, or another concrete medium, obey the user's text first and ignore conflicting bullets below:
${mediumContract}`;
};

const getReferenceImagePriorityContract = (category: PhysicalMediumCategory, lang: SkillLanguage) => {
  const mediumContract = getMediumCategoryContract(category, lang);
  return lang === 'CN'
    ? `参考图输入优先级：
1. 主参考图的可见风格、媒介、渲染方式、材质、颜色和人物特征是唯一最高标准。
2. 附加细节参考图只锁定局部细节，不得扩写成主图没有的新道具、新服装或新风格。
3. 人工引导可以纠偏或补充，但不能覆盖主参考图中清楚可见的风格事实，除非用户明确说明“以文字纠正图片”。
4. 物理媒介大类是人工分类锁，用来防止把 photography、3D、painting、tangible craft 互相误读；它必须服务于参考图风格，不得把清楚的参考图风格改写成另一个媒介。
5. visualMedium 必须从参考图的真实视觉证据中反推，不要只复述大类标签。

以下“所选物理媒介大类合同”只用于帮助识别参考图，不得覆盖主参考图中清楚可见的摄影/3D/绘画/实体手作事实；如果合同与主参考图可见风格冲突，以主参考图为准：
${mediumContract}`
    : `Reference-image priority:
1. The main reference image's visible style, medium, rendering method, materiality, color, and character traits are the single highest standard.
2. Detail reference images only lock local details; do not expand them into new props, outfits, or styles absent from the main image.
3. Manual guidance may correct or supplement the analysis, but it must not override clearly visible style facts in the main reference unless the user explicitly says the text should correct the image.
4. The physical medium category is a human classification lock that prevents photography, 3D, painting, and tangible craft from being misread as each other; it must serve the reference style, not rewrite a clear reference into another medium.
5. visualMedium must be inferred from real visual evidence in the reference, not merely repeat the broad category label.

The selected physical-medium category contract below is only an aid for classifying the reference image; it must not override clearly visible photography / 3D / painting / tangible-craft facts in the main reference. If the contract conflicts with the visible reference style, follow the main reference:
${mediumContract}`;
};

const buildVariableGenerationPrompt = (
  mode: SourceMode,
  source: SourceInputs,
  promptLang: SkillLanguage,
  options: IdentityBoardOptions
) => {
  const textInputContractCN = getTextInputPriorityContract(options.mediumCategory, 'CN');
  const textInputContractEN = getTextInputPriorityContract(options.mediumCategory, 'EN');
  const referenceImageContractCN = getReferenceImagePriorityContract(options.mediumCategory, 'CN');
  const referenceImageContractEN = getReferenceImagePriorityContract(options.mediumCategory, 'EN');
  const detailReferenceBlockCN = source.detailImages.length
    ? `附加细节参考图：
运行时会附加 ${source.detailImages.length} 张细节参考图。它们只用于锁定武器、配饰、重点材质、面部特征或其他局部细节；不要把参考图里没有的内容扩写成新道具。`
    : `附加细节参考图：
未附加。不要擅自增加用户没有提供的道具、配饰或细节。`;
  const detailReferenceBlockEN = source.detailImages.length
    ? `Detail reference images:
${source.detailImages.length} detail reference image(s) are attached at runtime. Use them only to lock weapons, accessories, key materials, facial features, or other local details; do not expand unstated image content into new props.`
    : `Detail reference images:
None. Do not invent props, accessories, or details that the user did not provide.`;
  const outputSchema = promptLang === 'CN'
    ? `必须只输出 JSON，不要 markdown，不要解释。每一次都同时填写中文 CN 和英文 EN 两套变量：
{
  "CN": {
    "characterSeed": "中文，角色核心概念",
    "ageBodyType": "中文，年龄感、身体类型、姿态、身体存在感",
    "visualMedium": "中文为主，可保留 English 专业词；具体视觉媒介，不要只写大类",
    "style": "中文为主，可保留 English 专业词；审美方向、时代气质、服装/材质方向",
    "otherDetails": "中文，关键道具、服装、色彩、限制、身份备注"
  },
  "EN": {
    "characterSeed": "English, core character idea",
    "ageBodyType": "English, age impression, body type, posture, physical presence",
    "visualMedium": "English, specific rendering medium, not just a broad category",
    "style": "English, aesthetic direction, era mood, outfit/material direction",
    "otherDetails": "English, key props, outfit, colors, constraints, identity notes"
  }
}`
    : `Output JSON only. No markdown, no explanation. Always fill both CN and EN variable sets:
{
  "CN": {
    "characterSeed": "Chinese, core character idea",
    "ageBodyType": "Chinese, age impression, body type, posture, physical presence",
    "visualMedium": "Chinese, English professional terms allowed; specific rendering medium, not just a broad category",
    "style": "Chinese, English professional terms allowed; aesthetic direction, era mood, outfit/material direction",
    "otherDetails": "Chinese, key props, outfit, colors, constraints, identity notes"
  },
  "EN": {
    "characterSeed": "English, core character idea",
    "ageBodyType": "English, age impression, body type, posture, physical presence",
    "visualMedium": "English, specific rendering medium, not just a broad category",
    "style": "English, aesthetic direction, era mood, outfit/material direction",
    "otherDetails": "English, key props, outfit, colors, constraints, identity notes"
  }
}`;

  if (mode === 'ARTICLE') {
    return promptLang === 'CN'
      ? `你是角色资产设计提示词编辑。请从下面文章/故事中，只提取用户指定的人物，并生成 Character Identity Board 的五个变量槽。

全局物理媒介大类（黄金准则）：
${getMediumCategoryInstruction(options.mediumCategory, 'CN')}

${textInputContractCN}

${detailReferenceBlockCN}

目标人物：
${source.targetCharacter || '未填写，请根据文章中最重要的角色判断。'}

规则：
- 只基于文章明示内容和合理视觉推断。
- 不要生成整篇故事的所有人物，只处理目标人物。
- 如果文章没写清外貌，写成“可推断但需设计锁定”的具体视觉方向。
- visualMedium 是最终要给图像模型使用的具体媒介描述，不是用户选择的大类；必须体现文章/人工引导中的明确艺术需求，并在未指定时服从上面的物理媒介大类。
- style 写用户真正想要的艺术方向、时代气质、服装/材质方向；不要把“写实”单独当成媒介，必须说明它属于 photography、CGI、painting 还是 tangible craft。
- 不要复制任何现有 IP、名人或品牌角色。

用户人工引导与纠偏：
${source.imageGuidance || '无。'}

文章/故事：
${source.articleText || '（等待输入文章/故事）'}

${outputSchema}`
      : `You are a character asset prompt editor. From the article/story below, extract only the user-specified character and generate the five Character Identity Board variable slots.

Global physical medium category (golden rule):
${getMediumCategoryInstruction(options.mediumCategory, 'EN')}

${textInputContractEN}

${detailReferenceBlockEN}

Target character:
${source.targetCharacter || 'Not provided. Infer the most important character from the story.'}

Rules:
- Use only explicit story facts and reasonable visual inference.
- Do not extract every character; process only the target character.
- If appearance is underspecified, write a concrete visual direction that still needs design lock.
- visualMedium must be a specific rendering medium for image generation, not a broad category; it must satisfy explicit art-direction requirements from the story / manual guidance and obey the physical medium category above only when the source text does not specify a clearer medium.
- style captures the user's actual art direction, era mood, outfit, and material direction; do not treat "realistic" as a medium by itself, specify whether it belongs to photography, CGI, painting, or tangible craft.
- Do not copy any existing IP, celebrity, or brand character.

User manual guidance:
${source.imageGuidance || 'None.'}

Article / story:
${source.articleText || '(waiting for article/story input)'}

${outputSchema}`;
  }

  if (mode === 'IMAGE') {
    return promptLang === 'CN'
      ? `你是资深角色资产反推编辑。请根据上传的参考图片，反推出 Character Identity Board 的五个变量槽。

重要：运行时图片会作为 inlineData / image part 附加。这里的文本只负责告诉模型如何分析图片。

全局物理媒介大类（黄金准则）：
${getMediumCategoryInstruction(options.mediumCategory, 'CN')}

${referenceImageContractCN}

${detailReferenceBlockCN}

媒介判断规则：
- visualMedium 必须根据主图的可见证据写成具体媒介，不要只写“写实”“高级”“电影感”。
- 如果图像很写实但不是摄影，不要误判为 photography；如果图像是摄影，不要把它写成 realistic painting 或 concept art。
- 如果图像像游戏引擎/3D 模型，要在 visualMedium 中写明 3D / CGI / engine-rendered traits；如果是手作实体，要写明 clay / felt / resin / miniature / stop-motion 等实体媒介证据。
- style 必须保留参考图的真实审美、颜色、材质和渲染逻辑；人工引导只用于补充或纠偏。

人工引导与纠偏：
${source.imageGuidance || '无。'}

规则：
- 严格忠实于主图和附加细节参考图中的人物，不要增加图片没有的武器、配饰、logo 或不存在的道具。
- 如果图片是半身照，可合理推断全身，但必须保持同一风格与身体逻辑。
- otherDetails 要写清可见服装、道具、材质、色彩和不可擅自添加的限制。

${outputSchema}`
      : `You are a senior character asset reverse-analysis editor. Use the uploaded reference image to infer the five Character Identity Board variable slots.

Important: at runtime the image is attached as inlineData / image part. This text only instructs the model how to analyze it.

Global physical medium category (golden rule):
${getMediumCategoryInstruction(options.mediumCategory, 'EN')}

${referenceImageContractEN}

${detailReferenceBlockEN}

Medium judgement rules:
- visualMedium must be a concrete medium inferred from visible evidence in the main image; do not write only "realistic", "premium", or "cinematic".
- If the image is realistic but not photography, do not misclassify it as photography; if it is photography, do not rewrite it as realistic painting or concept art.
- If the image looks like game engine / 3D model output, state 3D / CGI / engine-rendered traits in visualMedium; if it is handmade physical craft, state clay / felt / resin / miniature / stop-motion material evidence.
- style must preserve the reference image's actual aesthetics, colors, materials, and rendering logic; manual guidance only supplements or corrects it.

Manual guidance:
${source.imageGuidance || 'None.'}

Rules:
- Stay faithful to the main image and detail references. Do not add weapons, accessories, logos, or props that are not in the images.
- If the reference is half-body, infer full-body cautiously while preserving style and body logic.
- otherDetails must capture visible outfit, props, materials, colors, and constraints against invented additions.

${outputSchema}`;
  }

  return promptLang === 'CN'
    ? `你是角色资产提示词编辑。请根据用户的灵感、元素和需求，生成 Character Identity Board 的五个变量槽。

全局物理媒介大类（黄金准则）：
${getMediumCategoryInstruction(options.mediumCategory, 'CN')}

${textInputContractCN}

${detailReferenceBlockCN}

用户需求：
${source.ideaText || '（等待输入灵感、元素或需求）'}

规则：
- 把松散灵感整理成清楚、可执行的角色资产方向。
- characterSeed 写角色核心概念，不要写长故事。
- ageBodyType 写年龄感、体型、姿态和身体存在感。
- visualMedium 写具体物理媒介与渲染语言，例如“live-action studio portrait photography”“Unreal Engine 5 cinematic character render”“digital oil painting”“clay stop-motion puppet photography”；不要只写“写实”“好看”“电影感”。
- 如果用户文字已经指定真人摄影、3D 虚幻引擎、绘画、雕塑、黏土等媒介，必须把它作为最低底线写进 visualMedium；如果没指定，才用所选物理媒介大类兜底。
- style 写审美方向、服装/材质/时代气质。
- otherDetails 写道具、颜色、限制、人格线索和版式偏好；如有人工引导，必须吸收其中的具体要求。
- 不要复制任何现有 IP、名人或品牌角色。

用户人工引导与纠偏：
${source.imageGuidance || '无。'}

${outputSchema}`
    : `You are a character asset prompt editor. Based on the user's idea, elements, and needs, generate the five Character Identity Board variable slots.

Global physical medium category (golden rule):
${getMediumCategoryInstruction(options.mediumCategory, 'EN')}

${textInputContractEN}

${detailReferenceBlockEN}

User request:
${source.ideaText || '(waiting for idea, elements, or requirements)'}

Rules:
- Turn loose inspiration into a clear, executable character asset direction.
- characterSeed is the core concept, not a long story.
- ageBodyType covers age impression, body type, posture, and physical presence.
- visualMedium must name a concrete physical medium and rendering language, such as live-action studio portrait photography, Unreal Engine 5 cinematic character render, digital oil painting, or clay stop-motion puppet photography; do not write only "realistic", "beautiful", or "cinematic".
- If the user's text specifies live-action photography, Unreal / 3D, painting, sculpture, clay, or another medium, that medium is the minimum floor in visualMedium; use the selected physical medium category as the fallback only when the user did not specify one.
- style covers aesthetic direction, outfit/material/era mood.
- otherDetails covers props, colors, constraints, personality cues, and layout preferences. If manual guidance is provided, absorb its concrete requirements.
- Do not copy any existing IP, celebrity, or brand character.

User manual guidance:
${source.imageGuidance || 'None.'}

${outputSchema}`;
};

const buildCharacterIdentityBoardPrompt = (
  values: SkillVariables,
  promptLang: SkillLanguage,
  options: IdentityBoardOptions
) => {
  const otherDetails = values.otherDetails.trim() || (
    promptLang === 'CN'
      ? '没有额外细节。只根据角色种子、身体类型、视觉媒介与风格自然发明必要内容。'
      : 'No extra details. Invent only what naturally follows from the character seed, body type, visual medium, and style.'
  );
  const originalityRuleBlockCN = options.originality
    ? `原创性规则：
角色不得类似任何现有 anime、manga、game、movie、comic、celebrity、athlete、mascot、franchise character 或已知 copyrighted creature。
不得复制可识别的 IP 元素、服装、发型、制服、武器、logo、symbol、color combination、silhouette、power 或 signature visual traits。
避免 fan-art aesthetics。
从零创造一个全新的视觉身份。`
    : `参考边界规则：
可以使用用户在变量中明确提供的参考方向、世界观或授权元素，不强制角色必须“完全原创”。
不要额外引入用户未提供的 IP、名人、品牌、logo、franchise character 或 signature visual traits。
如果需要借鉴气质，请转化为泛化的造型语言、材质、姿态和情绪，不要主动复制未提供的可识别角色特征。`;
  const originalityRuleBlockEN = options.originality
    ? `Originality rules:
The character must not resemble any existing anime, manga, game, movie, comic, celebrity, athlete, mascot, franchise character or known copyrighted creature.
Do not copy recognizable IP elements, costumes, hairstyles, uniforms, weapons, logos, symbols, color combinations, silhouettes, powers or signature visual traits.
Avoid fan-art aesthetics.
Create a fresh visual identity from scratch.`
    : `Reference boundary rules:
You may use reference directions, world details, or authorized elements explicitly provided by the user. The character does not have to be fully original.
Do not introduce extra IP, celebrities, brands, logos, franchise characters, or signature visual traits that the user did not provide.
When borrowing a mood or influence, translate it into generalized shape language, materials, posture, and emotion instead of copying unstated recognizable character traits.`;

  if (promptLang === 'CN') {
    return `${options.originality ? '创造一个完全原创、版权安全的角色' : '根据用户提供的角色方向创建一个角色'}，并将其呈现为一张严格符合媒介的 CHARACTER IDENTITY BOARD。

[CHARACTER SEED / 角色种子]:
${values.characterSeed.trim()}

[AGE / BODY TYPE / 年龄与身体类型]:
${values.ageBodyType.trim()}

[VISUAL MEDIUM / 视觉媒介]:
${values.visualMedium.trim()}

[STYLE / 审美方向]:
${values.style.trim()}

[OTHER DETAILS - OPTIONAL / 补充细节]:
${otherDetails}

请自行发明其余内容：
角色姓名、别名或称号、角色职责、性格特征、情绪基调、视觉主题、服装设计或身体设计、色彩 palette、标志性道具或标志性生物特征、可识别剪影、姿态语言、简短身份备注。

${originalityRuleBlockCN}

角色真实感规则：
角色必须具有强烈的个体性与非通用设计感。
避免过度精致、过度理想化或重复化的视觉特征，避免让角色像默认 AI 生成脸、库存设计、克隆 archetype 或通用生物。

如果角色是人类或类人：
使用有辨识度的面部结构、轻微不对称、自然变化、小缺陷和可信比例。
角色应当显得具体、扎实、可识别为独立个体。
如果角色具有吸引力，必须让吸引力自然、得体，并符合所选视觉媒介。

如果角色是风格化角色：
通过原创 shape language、富有表现力的比例、独特特征、姿态和清楚的人格线索保持唯一性。
避免默认类型套路和重复的审美标准。

如果角色是非人类：
通过原创 anatomy、可信生物结构、独特比例、功能性特征、表面 texture 和清楚的人格线索保持唯一性。
不要让它像通用 mascot、pet monster 或库存 fantasy creature。

媒介与风格控制：
[VISUAL MEDIUM] 是最终图像必须执行的具体物理媒介与 rendering language。
[STYLE] 控制 aesthetic direction、服装/材质/时代气质和艺术需求。
严格执行 [VISUAL MEDIUM] 和 [STYLE]，不要把一种媒介改写成另一种媒介。
CHARACTER IDENTITY BOARD 只是 presentation format；展示方式必须服务于 [VISUAL MEDIUM] 和 [STYLE]，不得覆盖它们。

创建一张 ${options.format} CHARACTER IDENTITY BOARD。

这张 board 应当像经过策展的视觉身份展示，而不是通用 turnaround sheet；策展感来自版式、留白、信息组织和身份表达。

Board 内容：
大型全身主视图、自然站姿全身视图、背面视图、侧面视图、第二个 attitude pose、4 到 6 个 face / expression studies、服装细节 close-ups 或 anatomy detail close-ups、关键道具 close-up 或 signature feature close-up、小型 silhouette / shape study、color palette strip、简短可读的 identity notes。

Layout：
非对称、优雅、有记忆点、大面积留白、所有视图清楚分隔、身体不要重叠、脸不要裁切、四肢不要隐藏、不要杂乱。

Board 上的文字可以包含：
character name、alias、role、personality traits、core theme、signature prop or feature、color notes。

Background：
纯白或柔和 off-white，极简干净 graphic design，无环境、无 logo、无 watermark。

优先级：
准确执行 [VISUAL MEDIUM]、满足 [STYLE] 中的艺术需求、强烈且独特的身份、清晰可读的服装设计或 anatomy design、明确 personality、${options.originality ? '原创 character design、' : ''}符合媒介的自然或风格化个体性、可信唯一性、非重复角色设计、媒介一致的 identity-board presentation。`;
  }

  return `${options.originality ? 'Create a fully original, copyright-safe character' : 'Create a character from the user-provided direction'} and present them as a medium-accurate CHARACTER IDENTITY BOARD.

[CHARACTER SEED]:
${values.characterSeed.trim()}

[AGE / BODY TYPE]:
${values.ageBodyType.trim()}

[VISUAL MEDIUM]:
${values.visualMedium.trim()}

[STYLE]:
${values.style.trim()}

[OTHER DETAILS - OPTIONAL]:
${otherDetails}

Invent everything else:
character name, alias or title, role, personality traits, emotional tone, visual theme, outfit design or body design, color palette, signature prop or signature biological feature, recognizable silhouette, pose language, small identity notes.

${originalityRuleBlockEN}

Character authenticity rules:
Create the character with a strong sense of individuality and non-generic design.
Avoid overly polished, overly idealized or repetitive visual features that make the character feel like a default AI-generated face, stock design, cloned archetype or generic creature.

If the character is human or humanoid:
Use distinctive facial structure, subtle asymmetry, natural variation, small imperfections and believable proportions.
The character should feel specific, grounded and recognizably individual.
If the character is attractive, keep the appeal natural, tasteful and appropriate to the chosen visual medium.

If the character is stylized:
Preserve uniqueness through original shape language, expressive proportions, distinctive features, posture and clear personality cues.
Avoid default genre clichés and repeated beauty standards.

If the character is non-human:
Preserve uniqueness through original anatomy, believable biological structure, distinctive proportions, functional features, surface texture and clear personality cues.
Do not make it feel like a generic mascot, pet monster or stock fantasy creature.

Medium and style control:
[VISUAL MEDIUM] is the concrete physical medium and rendering language the final image must execute.
[STYLE] controls aesthetic direction, outfit / material / era mood, and the user's art-direction needs.
Strictly execute [VISUAL MEDIUM] and [STYLE]; do not rewrite one medium into another.
The character identity board format is only the presentation format; the presentation must serve [VISUAL MEDIUM] and [STYLE], not override them.

Create a ${options.format} CHARACTER IDENTITY BOARD.

The board should feel like a curated visual identity presentation, not a generic turnaround sheet; the curated quality must come from layout, negative space, information hierarchy, and identity expression.

Board content:
large full-body main character view, neutral full-body view, back view, profile view, secondary attitude pose, 4 to 6 face or expression studies, outfit detail close-ups or anatomy detail close-ups, key prop close-up or signature feature close-up, small silhouette or shape study, color palette strip, short readable identity notes.

Layout:
asymmetrical, elegant, visually memorable, large empty space, clean separation between all views, no overlapping bodies, no cropped faces, no hidden limbs, no clutter.

Text on the board may include:
character name, alias, role, personality traits, core theme, signature prop or feature, color notes.

Background:
pure white or soft off-white, minimal clean graphic design, no environment, no logo, no watermark.

Prioritize:
accurate execution of [VISUAL MEDIUM], the art-direction needs in [STYLE], strong unique identity, readable outfit design or anatomy design, clear personality, ${options.originality ? 'original character design, ' : ''}natural or stylized individuality as appropriate, believable uniqueness, non-repetitive character design, medium-consistent identity-board presentation.`;
};

const variableMeta: Array<{
  key: keyof SkillVariables;
  label: string;
  labelEn: string;
  hint: string;
  hintEn: string;
  rows: number;
}> = [
  {
    key: 'characterSeed',
    label: '角色种子',
    labelEn: 'Character Seed',
    hint: '一句话说清角色核心概念、职业、故事功能或身份悖论。',
    hintEn: 'Core idea, role, story function, or identity contradiction.',
    rows: 2
  },
  {
    key: 'ageBodyType',
    label: '年龄 / 身体类型',
    labelEn: 'Age / Body Type',
    hint: '年龄感、体型、姿态、身体存在感；非人类可写 anatomy。',
    hintEn: 'Age impression, body type, posture, physical presence, or anatomy.',
    rows: 2
  },
  {
    key: 'visualMedium',
    label: '视觉媒介',
    labelEn: 'Visual Medium',
    hint: '控制渲染语言。比如 cinematic design、3D animation、anime、graphic novel。',
    hintEn: 'Controls rendering language: cinematic, 3D animation, anime, graphic novel.',
    rows: 2
  },
  {
    key: 'style',
    label: '审美方向',
    labelEn: 'Style',
    hint: '控制气质与造型方向，不要和媒介混成一团。',
    hintEn: 'Controls aesthetic direction, separate from rendering medium.',
    rows: 2
  },
  {
    key: 'otherDetails',
    label: '补充细节',
    labelEn: 'Other Details',
    hint: '服装、道具、色彩、禁忌、人格线索、版式偏好。',
    hintEn: 'Outfit, prop, colors, constraints, personality cues, layout preferences.',
    rows: 2
  }
];

const t = (lang: SkillLanguage, cn: string, en: string) => lang === 'CN' ? cn : en;

export const PromptSkillLibrary: React.FC<PromptSkillLibraryProps> = ({ lang }) => {
  const { theme } = useTheme();
  const isRetro = theme === 'retro';
  const [promptLang, setPromptLang] = useState<SkillLanguage>(lang);
  const [localizedValues, setLocalizedValues] = useState<LocalizedVariables>(() => createEmptyLocalizedVariables());
  const [activeExampleId, setActiveExampleId] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'source' | 'contract'>('prompt');
  const [isGeneratingVariables, setIsGeneratingVariables] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');
  const [imageGenerationError, setImageGenerationError] = useState('');
  const [isTaskManagerOpen, setIsTaskManagerOpen] = useState(false);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [sourceMode, setSourceMode] = useState<SourceMode>('IDEA');
  const [identityOptions, setIdentityOptions] = useState<IdentityBoardOptions>({
    originality: true,
    format: '16:9',
    mediumCategory: 'PAINTING'
  });
  const [sourceInputs, setSourceInputs] = useState<SourceInputs>({
    ideaText: '',
    articleText: '',
    targetCharacter: '',
    imageDataUrl: '',
    imageName: '',
    detailImages: [],
    imageGuidance: '',
  });
  const activeGenerationEngineId: EngineId = (sourceMode === 'IMAGE' || sourceInputs.detailImages.length > 0)
    ? 'visualSeed'
    : 'coreEngine';
  const [selectedModel, setSelectedModel] = useState(() =>
    configService.getEngineModel('coreEngine') || 'gemini-3.1-pro-preview'
  );
  const [imageModel, setImageModel] = useState(() =>
    configService.getEngineModel('imageGen') || 'gpt-image-2'
  );
  const [imageAspectRatio, setImageAspectRatio] = useState<PromptSkillAspectRatio>(identityOptions.format);
  const [imageScale, setImageScale] = useState<PromptSkillImageScale>('1k');
  const [imageQuality, setImageQuality] = useState<PromptSkillImageQuality>('low');
  const [imageFormat, setImageFormat] = useState<PromptSkillImageFormat>('jpeg');

  useEffect(() => {
    const unsubscribe = globalTaskManager.subscribe(tasks => {
      setActiveTaskCount(tasks.filter(task => task.status === 'generating').length);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setSelectedModel(configService.getEngineModel(activeGenerationEngineId) || 'gemini-3.1-pro-preview');
  }, [activeGenerationEngineId]);

  useEffect(() => {
    setImageAspectRatio(identityOptions.format);
  }, [identityOptions.format]);

  const values = localizedValues[promptLang];
  const generatedPrompt = useMemo(
    () => buildCharacterIdentityBoardPrompt(values, promptLang, identityOptions),
    [values, promptLang, identityOptions]
  );
  const sourcePrompt = useMemo(
    () => buildVariableGenerationPrompt(sourceMode, sourceInputs, promptLang, identityOptions),
    [sourceMode, sourceInputs, promptLang, identityOptions]
  );
  const promptStats = useMemo(() => ({
    chars: generatedPrompt.length,
    words: generatedPrompt.trim().split(/\s+/).filter(Boolean).length,
    filled: Object.values(values).filter(value => value.trim()).length
  }), [generatedPrompt, values]);
  const modelOptions = useMemo(() => {
    const requiresVision = activeGenerationEngineId === 'visualSeed';
    return MODEL_CATALOG.filter(model => model.type === 'text' && (!requiresVision || model.canSeeImages));
  }, [activeGenerationEngineId]);
  const imageModelOptions = useMemo(() => MODEL_CATALOG.filter(model => model.type === 'image'), []);
  const activeGenerationEngine = useMemo(
    () => ENGINE_CONFIGS.find(engine => engine.id === activeGenerationEngineId),
    [activeGenerationEngineId]
  );
  const imageGenerationEngine = useMemo(
    () => ENGINE_CONFIGS.find(engine => engine.id === 'imageGen'),
    []
  );
  const displayedModelOptions = useMemo(() => (
    selectedModel && !modelOptions.some(model => model.id === selectedModel)
      ? [{ id: selectedModel, name: selectedModel, provider: 'gemini' as const, type: 'text' as const, canSeeImages: true }, ...modelOptions]
      : modelOptions
  ), [modelOptions, selectedModel]);
  const displayedImageModelOptions = useMemo(() => (
    imageModel && !imageModelOptions.some(model => model.id === imageModel)
      ? [{ id: imageModel, name: imageModel, provider: 'openai' as const, type: 'image' as const }, ...imageModelOptions]
      : imageModelOptions
  ), [imageModelOptions, imageModel]);
  const imageRequestSize = useMemo(
    () => getPromptSkillOpenAIImageSize(imageAspectRatio, imageScale),
    [imageAspectRatio, imageScale]
  );

  const panelClass = isRetro
    ? 'border-[#7E2018]/35 bg-[#F7EFE3] text-[#2B1611]'
    : 'border-white/[0.14] bg-[#0b0b0d]/92 text-zinc-200';
  const mutedText = isRetro ? 'text-[#5E352D]/78' : 'text-zinc-500';
  const strongText = isRetro ? 'text-[#3D1A16]' : 'text-white';
  const accentText = isRetro ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]';
  const inputClass = isRetro
    ? 'appearance-none outline-none ring-0 shadow-none bg-[#FFF8EC] border-[#8B261D]/28 text-[#2F1712] placeholder:text-[#5E352D]/42 focus:border-[#8B261D]/65 focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:shadow-none'
    : 'appearance-none outline-none ring-0 shadow-none bg-black/45 border-[#27272f] text-zinc-100 placeholder:text-zinc-600 focus:border-[var(--mist-active-accent)]/55 focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:shadow-none';

  const updateValue = (key: keyof SkillVariables, value: string) => {
    setLocalizedValues(prev => ({
      ...prev,
      [promptLang]: {
        ...prev[promptLang],
        [key]: value
      }
    }));
    setCopied(false);
  };

  const applyExample = (example: ExampleVariableSet) => {
    setLocalizedValues(cloneLocalizedVariables(example.variables));
    setActiveExampleId(example.id);
    setCopied(false);
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(activeTab === 'source' ? sourcePrompt : generatedPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const updateSourceInput = <K extends keyof SourceInputs>(key: K, value: SourceInputs[K]) => {
    setSourceInputs(prev => ({ ...prev, [key]: value }));
    setCopied(false);
  };

  const updateIdentityOption = <K extends keyof IdentityBoardOptions>(key: K, value: IdentityBoardOptions[K]) => {
    setIdentityOptions(prev => ({ ...prev, [key]: value }));
    setCopied(false);
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    configService.setEngineModel(activeGenerationEngineId, model);
  };

  const handleImageModelChange = (model: string) => {
    setImageModel(model);
    configService.setEngineModel('imageGen', model);
  };

  const handleReferenceImage = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateSourceInput('imageDataUrl', String(reader.result || ''));
      updateSourceInput('imageName', file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleDetailImages = (files: FileList | null) => {
    if (!files?.length) return;
    const availableSlots = Math.max(0, 5 - sourceInputs.detailImages.length);
    Array.from(files).slice(0, availableSlots).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setSourceInputs(prev => ({
          ...prev,
          detailImages: [
            ...prev.detailImages,
            {
              dataUrl: String(reader.result || ''),
              name: file.name
            }
          ].slice(0, 5)
        }));
        setCopied(false);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeDetailImage = (index: number) => {
    setSourceInputs(prev => ({
      ...prev,
      detailImages: prev.detailImages.filter((_, itemIndex) => itemIndex !== index)
    }));
    setCopied(false);
  };

  const clearVariables = () => {
    setLocalizedValues(createEmptyLocalizedVariables());
    setActiveExampleId('');
    setCopied(false);
  };

  const attachedImageParts = useMemo(() => ([
    sourceMode === 'IMAGE' ? sourceInputs.imageDataUrl : '',
    ...sourceInputs.detailImages.map(image => image.dataUrl)
  ].filter(Boolean)), [sourceMode, sourceInputs.detailImages, sourceInputs.imageDataUrl]);
  const canGenerateVariables = !isGeneratingVariables && (sourceMode !== 'IMAGE' || Boolean(sourceInputs.imageDataUrl));

  const runVariableGeneration = async () => {
    if (!canGenerateVariables) return;
    setIsGeneratingVariables(true);
    setActiveTab('source');
    setCopied(false);
    try {
      const generated = await runWithTask(
        t(lang, '角色身份板变量生成', 'Character Board Variables'),
        async () => generatePromptSkillVariables(sourcePrompt, attachedImageParts, selectedModel, activeGenerationEngineId)
      );
      if (generated) {
        setLocalizedValues(cloneLocalizedVariables(generated));
        setActiveExampleId('');
        setActiveTab('prompt');
      }
    } catch (error: any) {
      if (error?.message !== 'AbortError') {
        console.error(error);
        alert(error?.message || t(lang, '变量生成失败，请检查模型配置。', 'Variable generation failed. Check model configuration.'));
      }
    } finally {
      setIsGeneratingVariables(false);
    }
  };

  const runImageGeneration = async () => {
    if (isGeneratingImage) return;
    setIsGeneratingImage(true);
    setImageGenerationError('');
    setGeneratedImageUrl('');
    try {
      const result = await runWithTask(
        t(lang, '角色身份板图片生成', 'Character Board Image'),
        async () => generatePromptSkillImage({
          prompt: generatedPrompt,
          aspectRatio: imageAspectRatio,
          scale: imageScale,
          quality: imageQuality,
          format: imageFormat,
          model: imageModel
        })
      );
      setGeneratedImageUrl(result.imageUrl);
    } catch (error: any) {
      const message = error?.message || t(lang, '图片生成失败，请检查资产生成引擎配置。', 'Image generation failed. Check imageGen configuration.');
      setImageGenerationError(message);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const activeExample = exampleSets.find(example => example.id === activeExampleId);
  const activeSourceMode = sourceModeMeta.find(item => item.id === sourceMode) || sourceModeMeta[0];

  const applyPreset = (key: keyof SkillVariables, preset: string) => {
    if (!preset) return;
    updateValue(key, values[key].trim() ? `${values[key].replace(/\s+$/g, '')}, ${preset}` : preset);
  };

  return (
    <div className={`prompt-skill-library h-full w-full overflow-hidden ${isRetro ? 'bg-[#8B261D]' : 'bg-[#050506]'} relative`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isRetro ? 'bg-[radial-gradient(circle_at_top_left,rgba(255,248,236,0.94),rgba(248,238,222,0.74)_34%,rgba(139,38,29,0.54)_100%)]' : 'bg-[radial-gradient(circle_at_top_left,var(--mist-active-accent),transparent_34%)] opacity-[0.045]'}`} />
        <div className={`absolute inset-x-0 top-0 h-72 ${isRetro ? 'bg-[#FFF4E2]/30' : 'bg-[var(--mist-active-accent)]/[0.045]'}`} />
      </div>

      <div className="relative z-10 h-full overflow-y-auto xl:overflow-hidden custom-scrollbar">
        <div className="mx-auto flex min-h-full w-full max-w-[1720px] flex-col px-5 py-6 pb-24 lg:px-8 xl:h-full xl:min-h-0 xl:pb-20">
          <section className="grid min-h-0 gap-4 xl:h-full xl:grid-cols-[320px_minmax(460px,0.92fr)_minmax(520px,1.08fr)]">
            <aside className="min-h-0 space-y-4 xl:flex xl:h-full xl:flex-col xl:overflow-y-auto xl:pr-1 xl:pb-2 custom-scrollbar">
              <div className={`rounded-lg border p-5 shadow-2xl ${panelClass}`}>
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-[0.34em] ${mutedText}`}>
                    Mist Skill Library
                  </p>
                  <h1 className={`mt-3 font-serif text-2xl font-black leading-tight tracking-[0.05em] ${strongText}`}>
                    {t(lang, '角色身份板技能', 'Character Identity Board')}
                  </h1>
                  <p className={`mt-3 text-xs leading-6 ${isRetro ? 'text-black/65' : 'text-zinc-400'}`}>
                    {t(
                      lang,
                      '把角色种子、媒介和风格拼装成一条可直接发送给 GPT Image 2 的完整角色资产提示词。示例只用于填槽，不会混入最终 prompt。',
                      'Assemble character seed, medium, and style into a final GPT Image 2 prompt. Examples fill variables only and are not sent as examples.'
                    )}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => updateIdentityOption('originality', !identityOptions.originality)}
                    className={`flex h-9 items-center justify-between gap-2 rounded-md border px-2.5 text-left transition-all focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ${
                      isRetro ? 'border-[#8B261D]/22 bg-[#FFF8EC]/70 hover:bg-[#FFF8EC]' : 'border-white/[0.12] bg-white/[0.035] hover:border-white/[0.2]'
                    }`}
                    aria-pressed={identityOptions.originality}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-[0.16em] ${mutedText}`}>
                      {t(lang, '原创', 'Original')}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className={`text-[10px] font-black ${strongText}`}>
                        {identityOptions.originality ? t(lang, '开', 'On') : t(lang, '关', 'Off')}
                      </span>
                      <span className={`relative h-3.5 w-6 rounded-full border transition-colors ${
                          identityOptions.originality
                            ? (isRetro ? 'border-[#8B261D] bg-[#8B261D]' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]')
                            : (isRetro ? 'border-[#8B261D]/35 bg-[#F1E1D0]' : 'border-white/[0.18] bg-white/[0.06]')
                        }`}>
                        <span className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full transition-transform ${
                            identityOptions.originality ? 'translate-x-[12px] bg-white' : 'translate-x-[3px] bg-zinc-500'
                          }`} />
                      </span>
                    </span>
                  </button>

                  <div className={`flex h-9 items-center gap-2 rounded-md border px-2.5 ${isRetro ? 'border-[#8B261D]/22 bg-[#FFF8EC]/70' : 'border-white/[0.12] bg-white/[0.035]'}`}>
                    <div className={`shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] ${mutedText}`}>
                      {t(lang, '格式', 'Format')}
                    </div>
                    <select
                      value={identityOptions.format}
                      onChange={(event) => updateIdentityOption('format', event.target.value as BoardFormat)}
                      className={`h-6 min-w-0 flex-1 rounded-md border px-2 text-[10px] font-bold ${inputClass}`}
                    >
                      {boardFormatOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {t(lang, option.label, option.labelEn)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              <div className={`rounded-lg border p-4 ${panelClass}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h2 className={`text-xs font-bold uppercase tracking-[0.22em] ${strongText}`}>
                      {t(lang, '使用方式', 'Source Mode')}
                    </h2>
                    <p className={`mt-1 text-[11px] ${mutedText}`}>
                      {t(lang, '选择变量从哪里生成', 'Choose how variables are produced')}
                    </p>
                  </div>
                  <activeSourceMode.icon size={15} className={accentText} />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {sourceModeMeta.map(mode => {
                    const Icon = mode.icon;
                    const selected = sourceMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => {
                          setSourceMode(mode.id);
                          setActiveTab('source');
                          setCopied(false);
                        }}
                        className={`flex min-h-[66px] flex-col items-center justify-center gap-1.5 rounded-md border px-1.5 text-center transition-all active:scale-[0.98] ${
                          selected
                            ? (isRetro ? 'border-[#8B261D] bg-[#8B261D]/9 text-[#8B261D]' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/8 text-white')
                            : (isRetro ? 'border-[#8B261D]/16 bg-[#FFF8EC]/42 text-[#4F2C25]/72 hover:border-[#8B261D]/35' : 'border-white/[0.1] bg-white/[0.025] text-zinc-500 hover:border-white/[0.18] hover:text-zinc-200')
                        }`}
                        aria-pressed={selected}
                      >
                        <Icon size={15} className={selected ? accentText : ''} />
                        <span className="text-[10px] font-black leading-4 tracking-[0.06em]">
                          {t(promptLang, mode.label, mode.labelEn)}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className={`mt-2 text-[11px] leading-5 ${mutedText}`}>
                  {t(promptLang, activeSourceMode.desc, activeSourceMode.descEn)}
                </p>

                {sourceMode === 'IDEA' && (
                  <textarea
                    value={sourceInputs.ideaText}
                    onChange={(event) => updateSourceInput('ideaText', event.target.value)}
                    placeholder={t(lang, '输入灵感、元素、禁忌和你想要的方向。', 'Enter inspiration, elements, constraints, and desired direction.')}
                    rows={3}
                    className={`mt-3 w-full resize-none rounded-md border px-3 py-2 text-xs leading-5 ${inputClass}`}
                  />
                )}

                {sourceMode === 'ARTICLE' && (
                  <div className="mt-3 space-y-2">
                    <input
                      value={sourceInputs.targetCharacter}
                      onChange={(event) => updateSourceInput('targetCharacter', event.target.value)}
                      placeholder={t(lang, '要提取的角色名，例如：女档案员', 'Target character, e.g. the archivist')}
                      className={`w-full rounded-md border px-3 py-2 text-xs ${inputClass}`}
                    />
                    <textarea
                      value={sourceInputs.articleText}
                      onChange={(event) => updateSourceInput('articleText', event.target.value)}
                      placeholder={t(lang, '粘贴文章或故事文本。', 'Paste article or story text.')}
                      rows={3}
                      className={`w-full resize-none rounded-md border px-3 py-2 text-xs leading-5 ${inputClass}`}
                    />
                  </div>
                )}

                {sourceMode === 'IMAGE' && (
                  <div className="mt-3 space-y-2">
                    <label className={`flex cursor-pointer items-center justify-between gap-3 rounded-md border px-3 py-2.5 transition-all ${isRetro ? 'border-[#8B261D]/15 hover:bg-[#8B261D]/8' : 'border-white/[0.08] hover:border-white/[0.16]'}`}>
                      <span className={`flex min-w-0 items-center gap-2 text-xs font-bold ${strongText}`}>
                        <Upload size={14} className={accentText} />
                        <span className="truncate">{sourceInputs.imageName || t(lang, '上传角色参考图', 'Upload character reference')}</span>
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => handleReferenceImage(event.target.files?.[0])}
                      />
                    </label>
                  </div>
                )}

                <div className={`mt-3 rounded-md border p-3 ${isRetro ? 'border-[#8B261D]/16 bg-[#FFF8EC]/42' : 'border-white/[0.08] bg-black/18'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] ${strongText}`}>
                      <ImagePlus size={13} className={accentText} />
                      {t(lang, '附加细节参考图', 'Detail References')}
                    </div>
                    <span className={`text-[10px] font-bold ${mutedText}`}>{sourceInputs.detailImages.length} / 5</span>
                  </div>
                  <p className={`mt-2 text-[11px] leading-5 ${mutedText}`}>
                    {t(
                      lang,
                      '可上传武器、配饰、重点材质、面部特征等特写。没有附加图时，系统以主图或文字为准，不擅自增加不存在的道具。',
                      'Upload close-ups for weapons, accessories, key materials, or facial features. If absent, the system follows the main image or text only.'
                    )}
                  </p>
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1 custom-scrollbar">
                    {sourceInputs.detailImages.map((image, index) => (
                      <div key={`${image.name}-${index}`} className={`group relative h-16 w-16 shrink-0 overflow-hidden rounded-md border ${isRetro ? 'border-[#8B261D]/22 bg-[#F3E8D8]' : 'border-white/[0.1] bg-black/40'}`}>
                        <img src={image.dataUrl} alt={image.name || 'detail'} className="h-full w-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeDetailImage(index)}
                          className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded border border-white/10 bg-black/70 text-zinc-300 opacity-0 transition-opacity hover:text-red-300 group-hover:opacity-100"
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                    {sourceInputs.detailImages.length < 5 && (
                      <label className={`flex h-16 w-16 shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed text-[9px] font-bold uppercase tracking-[0.08em] transition-colors ${
                        isRetro ? 'border-[#8B261D]/28 bg-[#FFF8EC]/45 text-[#8B261D]/62 hover:border-[#8B261D]/55 hover:text-[#8B261D]' : 'border-white/[0.16] bg-white/[0.025] text-zinc-500 hover:border-white/[0.28] hover:text-zinc-300'
                      }`}>
                        <ImagePlus size={17} />
                        {t(lang, '上传', 'Upload')}
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={(event) => {
                            handleDetailImages(event.target.files);
                            event.currentTarget.value = '';
                          }}
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div className={`mt-3 rounded-md border p-3 ${isRetro ? 'border-[#8B261D]/16 bg-[#FFF8EC]/42' : 'border-white/[0.08] bg-black/18'}`}>
                  <div className={`mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] ${strongText}`}>
                    <MessageSquare size={13} className={accentText} />
                    {t(lang, '人工引导与纠偏', 'Manual Guidance')}
                  </div>
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {[
                      { label: t(lang, '角色名字', 'Name'), text: t(lang, '角色名字：', 'Character name: ') },
                      { label: t(lang, '武器', 'Weapon'), text: t(lang, '武器：', 'Weapon: ') },
                      { label: t(lang, '配饰', 'Accessory'), text: t(lang, '配饰：', 'Accessory: ') },
                      { label: t(lang, '特征', 'Feature'), text: t(lang, '特征：', 'Feature: ') },
                      { label: t(lang, '服装', 'Outfit'), text: t(lang, '服装：', 'Outfit: ') },
                      { label: t(lang, '动作', 'Action'), text: t(lang, '动作：', 'Action: ') }
                    ].map(tag => (
                      <button
                        key={tag.label}
                        type="button"
                        onClick={() => updateSourceInput(
                          'imageGuidance',
                          sourceInputs.imageGuidance.trim()
                            ? `${sourceInputs.imageGuidance.trim()}\n${tag.text}`
                            : tag.text
                        )}
                        className={`rounded-md border px-2 py-1 text-[10px] font-bold transition-colors ${
                          isRetro ? 'border-[#8B261D]/18 bg-[#FFF8EC]/45 text-[#8B261D]/76 hover:border-[#8B261D]/42' : 'border-white/[0.1] bg-black/24 text-zinc-400 hover:border-white/[0.18] hover:text-white'
                        }`}
                      >
                        + {tag.label}
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={sourceInputs.imageGuidance}
                    onChange={(event) => updateSourceInput('imageGuidance', event.target.value)}
                    placeholder={t(lang, '说明需要注意的特定要求，例如：手里拿的武器是一把血红色的日本武士刀；这只是半身照，下半身穿中世纪骑士铠甲长靴。', 'Explain specific requirements, e.g. the weapon is a blood-red katana; this is half-body, infer medieval knight armor boots.')}
                    rows={3}
                    className={`w-full resize-none rounded-md border px-3 py-2 text-xs leading-5 ${inputClass}`}
                  />
                </div>
              </div>

              <div className={`rounded-lg border p-4 ${panelClass}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h2 className={`text-xs font-bold uppercase tracking-[0.22em] ${strongText}`}>
                      {t(lang, '示例变量', 'Example Variables')}
                    </h2>
                    <p className={`mt-1 text-[11px] ${mutedText}`}>
                      {t(lang, '点击后只填入变量槽', 'Click to fill variable slots')}
                    </p>
                  </div>
                  <Clipboard size={15} className={mutedText} />
                </div>
                <select
                  value={activeExampleId}
                  onChange={(event) => {
                    const next = exampleSets.find(example => example.id === event.target.value);
                    if (next) {
                      applyExample(next);
                    } else {
                      setActiveExampleId('');
                    }
                  }}
                  className={`w-full rounded-md border px-3 py-2.5 text-sm font-bold ${inputClass}`}
                >
                  <option value="">
                    {t(lang, '选择示例变量...', 'Choose an example...')}
                  </option>
                  {exampleSets.map(example => (
                    <option key={example.id} value={example.id}>
                      {promptLang === 'CN' ? example.title : example.titleEn} / {example.tone}
                    </option>
                  ))}
                </select>
                <div className={`mt-3 rounded-md border px-3 py-2 ${isRetro ? 'border-[#8B261D]/12 bg-white/20' : 'border-white/[0.06] bg-black/20'}`}>
                  <div className={`text-[8px] font-bold uppercase tracking-[0.18em] ${mutedText}`}>
                    {activeExample?.tone || t(lang, '未选择', 'No example')}
                  </div>
                  <div className={`mt-1 text-xs font-bold leading-5 ${strongText}`}>
                    {activeExample
                      ? (promptLang === 'CN' ? activeExample.title : activeExample.titleEn)
                      : t(lang, '初始为空，示例不会自动填入。', 'Initial state is empty; examples are not auto-filled.')}
                  </div>
                </div>
              </div>

              <div className={`rounded-lg border p-4 xl:mb-2 ${panelClass}`}>
                <h2 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${strongText}`}>
                  <BookOpen size={14} className={accentText} />
                  {t(lang, '调用位置', 'Runtime Use')}
                </h2>
                <div className="mt-3 space-y-2.5">
                  {[
                    t(lang, '从完整故事中抽取角色资产。', 'Extract a character asset from a complete story.'),
                    t(lang, '补全五个变量槽，尤其是媒介和风格。', 'Fill five variable slots, especially medium and style.'),
                    t(lang, '复制右侧最终 prompt，发给图像模型。', 'Copy the final prompt and send it to the image model.'),
                    t(lang, '生成图片后再反推回资产库。', 'After generation, reverse-analyze the image back into the asset library.')
                  ].map((line, index) => (
                    <div key={line} className="flex gap-3">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${isRetro ? 'border-[#8B261D]/25 text-[#8B261D]' : 'border-white/[0.08] text-zinc-400'}`}>
                        {index + 1}
                      </span>
                      <p className={`text-[11px] leading-5 ${isRetro ? 'text-[#4F2C25]/82' : 'text-zinc-400'}`}>{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <main className={`min-h-0 rounded-lg border ${panelClass} overflow-hidden xl:flex xl:h-full xl:flex-col`}>
              <div className={`shrink-0 border-b px-4 py-2.5 ${isRetro ? 'border-[#8B261D]/18 bg-[#FFF8EC]/45' : 'border-white/[0.1] bg-white/[0.025]'}`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className={`text-[9px] font-mono uppercase tracking-[0.28em] ${mutedText}`}>
                      Variable Composer
                    </p>
                    <h2 className={`mt-1 text-lg font-bold tracking-[0.08em] ${strongText}`}>
                      {t(lang, '变量拼装台', 'Variable Workbench')}
                    </h2>
                  </div>
                  <button
                    onClick={clearVariables}
                    className={`flex h-9 items-center gap-2 rounded-md border px-3 text-[10px] font-bold uppercase tracking-[0.18em] transition-all active:scale-95 ${isRetro ? 'border-[#8B261D]/20 text-[#8B261D] hover:bg-[#8B261D]/8' : 'border-white/[0.08] text-zinc-400 hover:border-white/[0.18] hover:text-white'}`}
                  >
                    <Trash2 size={13} />
                    {t(lang, '清空', 'Clear')}
                  </button>
                </div>
              </div>

              <div className="space-y-2 p-3 xl:flex-1 xl:overflow-y-auto xl:pb-4 custom-scrollbar">
                <div className={`rounded-lg border p-3 ${isRetro ? 'border-[#8B261D]/20 bg-[#FFF8EC]/58' : 'border-white/[0.1] bg-black/24'}`}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div>
                      <h3 className={`text-xs font-black uppercase tracking-[0.18em] ${strongText}`}>
                        {t(lang, '1. 选择物理媒介', '1. Physical Medium')}
                      </h3>
                      <p className={`mt-1 text-[10px] leading-4 ${mutedText}`}>
                        {t(lang, '黄金准则：先确定大致艺术方向，再细化视觉媒介。', 'Golden rule: choose the broad art direction before refining the visual medium.')}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {mediumCategoryMeta.map(item => {
                      const Icon = item.icon;
                      const selected = identityOptions.mediumCategory === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => updateIdentityOption('mediumCategory', item.id)}
                          className={`flex min-h-[68px] items-center gap-2 rounded-md border p-2 text-left transition-all active:scale-[0.99] ${
                            selected
                              ? (isRetro ? 'border-[#8B261D] bg-[#8B261D]/8' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)]/8')
                              : (isRetro ? 'border-[#8B261D]/16 bg-[#FFF8EC]/42 hover:border-[#8B261D]/35' : 'border-white/[0.1] bg-white/[0.025] hover:border-white/[0.18]')
                          }`}
                        >
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                            selected
                              ? (isRetro ? 'border-[#8B261D] bg-[#8B261D] text-white' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)] text-black')
                              : (isRetro ? 'border-[#8B261D]/20 bg-[#F3E8D8] text-[#8B261D]/70' : 'border-white/[0.1] bg-black/42 text-zinc-500')
                          }`}>
                            <Icon size={15} />
                          </span>
                          <span className="min-w-0">
                            <span className={`block text-[11px] font-black leading-4 ${strongText}`}>
                              {t(promptLang, item.label, item.labelEn)}
                            </span>
                            <span className={`mt-0.5 block text-[10px] leading-4 ${isRetro ? 'text-[#4F2C25]/76' : 'text-zinc-400'}`}>
                              {t(promptLang, item.desc, item.descEn)}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {variableMeta.map(meta => (
                  <div key={meta.key} className={`rounded-lg border p-2.5 ${isRetro ? 'border-[#8B261D]/18 bg-[#FFF8EC]/55' : 'border-white/[0.1] bg-black/22'}`}>
                    <label className="flex items-start justify-between gap-3">
                      <span className="min-w-0">
                        <span className={`block text-xs font-black uppercase tracking-[0.2em] ${strongText}`}>
                          {t(lang, meta.label, meta.labelEn)}
                        </span>
                        <span className={`mt-0.5 block truncate text-[10px] leading-4 ${mutedText}`}>
                          {t(lang, meta.hint, meta.hintEn)}
                        </span>
                      </span>
                      <div className="flex shrink-0 items-center gap-2">
                        {(meta.key === 'visualMedium' || meta.key === 'style') && (
                          <select
                            value=""
                            onChange={(event) => {
                              applyPreset(meta.key, event.target.value);
                              event.currentTarget.value = '';
                            }}
                            className={`h-7 w-[150px] rounded-md border px-2 text-[10px] font-bold ${inputClass}`}
                          >
                            <option value="">{t(lang, '添加标签', 'Add Tag')}</option>
                            {(meta.key === 'visualMedium' ? mediumPresets[promptLang] : stylePresets[promptLang]).map(preset => (
                              <option key={preset} value={preset}>{preset}</option>
                            ))}
                          </select>
                        )}
                        <span className={`rounded-full border px-2 py-1 text-[8px] font-bold uppercase tracking-[0.16em] ${values[meta.key].trim() ? (isRetro ? 'border-[#8B261D]/25 text-[#8B261D]' : 'border-emerald-400/20 text-emerald-300') : (isRetro ? 'border-black/10 text-black/35' : 'border-white/[0.06] text-zinc-600')}`}>
                          {values[meta.key].trim() ? t(lang, '已填', 'filled') : t(lang, '空', 'empty')}
                        </span>
                      </div>
                    </label>
                    <textarea
                      value={values[meta.key]}
                      onChange={(event) => updateValue(meta.key, event.target.value)}
                      rows={meta.rows}
                      className={`mt-1.5 h-[46px] w-full resize-none rounded-md border px-3 py-1.5 text-xs leading-4 transition-colors custom-scrollbar ${inputClass}`}
                    />
                  </div>
                ))}
              </div>
            </main>

            <aside className={`min-h-[640px] rounded-lg border ${panelClass} flex flex-col overflow-hidden xl:h-full xl:min-h-0`}>
              <div className={`shrink-0 border-b px-5 py-3 ${isRetro ? 'border-[#8B261D]/18 bg-[#FFF8EC]/45' : 'border-white/[0.1] bg-white/[0.025]'}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className={`text-[9px] font-mono uppercase tracking-[0.28em] ${mutedText}`}>
                      Final Payload
                    </p>
                    <h2 className={`mt-1 flex items-center gap-2 text-lg font-bold tracking-[0.08em] ${strongText}`}>
                      <PanelRight size={16} className={accentText} />
                      {t(lang, '最终成型律令', 'Assembled Edict')}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`flex h-10 overflow-hidden rounded-md border ${isRetro ? 'border-[#8B261D]/20' : 'border-white/[0.08]'}`}>
                      {(['CN', 'EN'] as SkillLanguage[]).map(option => (
                        <button
                          key={option}
                          onClick={() => {
                            setPromptLang(option);
                            setCopied(false);
                          }}
                          className={`px-3 text-[10px] font-black uppercase tracking-[0.16em] transition-all ${
                            promptLang === option
                              ? (isRetro ? 'bg-[#8B261D] text-white' : 'bg-[var(--mist-active-accent)] text-black')
                              : (isRetro ? 'text-[#8B261D] hover:bg-[#8B261D]/8' : 'text-zinc-500 hover:text-zinc-200')
                          }`}
                        >
                          {option === 'CN' ? '中' : 'EN'}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={copyPrompt}
                      className={`mist-app-primary-action flex h-10 items-center gap-2 rounded-md border px-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                        copied
                          ? (isRetro ? 'border-[#8B261D] bg-[#8B261D] text-white' : 'border-emerald-400 bg-emerald-400 text-black')
                          : (isRetro ? 'border-[#8B261D] bg-[#8B261D] text-white hover:brightness-95' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)] text-black hover:brightness-110')
                      }`}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? t(lang, '已复制', 'Copied') : t(lang, '复制', 'Copy')}
                    </button>
                    <button
                      onClick={() => {
                        setImageAspectRatio(identityOptions.format);
                        setIsImageModalOpen(true);
                        setImageGenerationError('');
                      }}
                      className={`mist-app-primary-action flex h-10 items-center gap-2 rounded-md border px-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                        isRetro
                          ? 'border-[#8B261D] bg-[#8B261D] text-white hover:brightness-95'
                          : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)] text-black hover:brightness-110'
                      }`}
                    >
                      <ImagePlus size={14} />
                      {t(lang, '生成图片', 'Image')}
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    { label: t(lang, '字符', 'Chars'), value: promptStats.chars },
                    { label: t(lang, '词数', 'Words'), value: promptStats.words },
                    { label: activeTab === 'source' ? t(lang, '来源', 'Source') : t(lang, '变量', 'Slots'), value: activeTab === 'source' ? t(promptLang, activeSourceMode.label, activeSourceMode.labelEn) : `${promptStats.filled}/5` }
                  ].map(stat => (
                    <div key={stat.label} className={`rounded-md border px-3 py-2 ${isRetro ? 'border-[#8B261D]/18 bg-[#FFF8EC]/55' : 'border-white/[0.1] bg-black/20'}`}>
                      <div className={`text-[8px] font-bold uppercase tracking-[0.16em] ${mutedText}`}>{stat.label}</div>
                      <div className={`mt-1 text-sm font-black ${strongText}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`shrink-0 flex items-center gap-1 border-b px-4 py-2 ${isRetro ? 'border-[#8B261D]/18' : 'border-white/[0.1]'}`}>
                {[
                  { id: 'prompt', label: 'Prompt', icon: FileText },
                  { id: 'source', label: t(lang, '模块指令', 'Source'), icon: Wand2 },
                  { id: 'contract', label: t(lang, '规则', 'Contract'), icon: ShieldCheck }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as 'prompt' | 'source' | 'contract');
                      setCopied(false);
                    }}
                    className={`flex items-center gap-2 rounded-md px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${activeTab === tab.id ? (isRetro ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-white/[0.06] text-white') : (isRetro ? 'text-black/45 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-zinc-200')}`}
                  >
                    <tab.icon size={13} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'prompt' ? (
                <pre className={`flex-1 overflow-y-auto whitespace-pre-wrap break-words p-5 font-mono text-[12px] leading-6 custom-scrollbar ${isRetro ? 'bg-[#FFF8EC] text-[#2F211C]' : 'bg-black text-zinc-300'}`}>
                  {generatedPrompt}
                </pre>
              ) : activeTab === 'source' ? (
                <div className={`flex-1 overflow-hidden ${isRetro ? 'bg-[#FFF8EC]' : 'bg-black'}`}>
                  <div className={`border-b px-5 py-3 ${isRetro ? 'border-[#8B261D]/18 text-[#2F211C]' : 'border-white/[0.1] text-zinc-300'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`text-[9px] font-bold uppercase tracking-[0.22em] ${mutedText}`}>
                          {t(lang, '变量生成/反推指令', 'Variable Generation Prompt')}
                        </div>
                        <div className={`mt-1 text-sm font-black ${strongText}`}>
                          {t(promptLang, activeSourceMode.label, activeSourceMode.labelEn)}
                        </div>
                      </div>
                      {sourceMode === 'IMAGE' && sourceInputs.imageDataUrl && (
                        <div className="flex items-center gap-1.5">
                          <img
                            src={sourceInputs.imageDataUrl}
                            alt={sourceInputs.imageName || 'reference'}
                            className="h-12 w-12 rounded-md border border-white/10 object-cover"
                          />
                          {sourceInputs.detailImages.slice(0, 3).map((image, index) => (
                            <img
                              key={`${image.name}-${index}`}
                              src={image.dataUrl}
                              alt={image.name || 'detail'}
                              className="h-9 w-9 rounded-md border border-white/10 object-cover"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <pre className={`h-full overflow-y-auto whitespace-pre-wrap break-words p-5 pb-24 font-mono text-[12px] leading-6 custom-scrollbar ${isRetro ? 'text-[#2F211C]' : 'text-zinc-300'}`}>
                    {sourcePrompt}
                  </pre>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
                  <div className={`rounded-lg border p-5 ${isRetro ? 'border-[#8B261D]/20 bg-[#FFF8EC]/65' : 'border-white/[0.1] bg-black/20'}`}>
                    <h3 className={`flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] ${strongText}`}>
                      <Sparkles size={15} className={accentText} />
                      {t(lang, '技能契约', 'Skill Contract')}
                    </h3>
                    <div className="mt-5 space-y-4">
                      {[
                        [t(lang, '输入', 'Input'), t(lang, '5 个变量槽：角色种子、年龄/体型、视觉媒介、审美方向、补充细节。', 'Five slots: seed, age/body type, visual medium, style, other details.')],
                        [t(lang, '媒介', 'Medium'), getMediumCategoryInstruction(identityOptions.mediumCategory, promptLang)],
                        [t(lang, '拼装', 'Assembly'), t(lang, '示例不会进入最终 prompt；只把变量和固定规则拼成 payload。', 'Examples never enter the final prompt; only variables and fixed rules are assembled.')],
                        [t(lang, '目标模型', 'Target'), 'GPT Image 2 / image generation models'],
                        [t(lang, '格式', 'Format'), t(lang, `${identityOptions.format} CHARACTER IDENTITY BOARD，白底或柔白底，无 logo，无水印。`, `${identityOptions.format} CHARACTER IDENTITY BOARD, white or off-white background, no logo, no watermark.`)],
                        [t(lang, '边界', 'Boundary'), identityOptions.originality
                          ? t(lang, '不复制 IP、名人、品牌、标志性服装/武器/轮廓；保持原创。', 'No IP, celebrity, brand, logo, signature costume, weapon, silhouette, or franchise resemblance.')
                          : t(lang, '允许用户提供的参考方向；不要额外引入未提供的 IP、名人、品牌或标志性特征。', 'Use user-provided references only; do not add unstated IP, celebrities, brands, or signature traits.')]
                      ].map(([title, body]) => (
                        <div key={title} className={`border-l-2 pl-4 ${isRetro ? 'border-[#8B261D]/35' : 'border-[var(--mist-active-accent)]/40'}`}>
                          <div className={`text-[10px] font-bold uppercase tracking-[0.22em] ${accentText}`}>{title}</div>
                          <p className={`mt-1 text-sm leading-7 ${isRetro ? 'text-[#4F2C25]/84' : 'text-zinc-400'}`}>{body}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`mt-4 rounded-lg border p-5 ${isRetro ? 'border-[#8B261D]/20 bg-[#FFF8EC]/55' : 'border-white/[0.1] bg-black/16'}`}>
                    <h3 className={`flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] ${strongText}`}>
                      <Wand2 size={15} className={accentText} />
                      {t(lang, '后续扩展', 'Next Skills')}
                    </h3>
                    <p className={`mt-3 text-sm leading-7 ${isRetro ? 'text-[#4F2C25]/84' : 'text-zinc-400'}`}>
                      {t(
                        lang,
                        '这一页先把 Character Identity Board 做成可用技能。之后可以按同一结构增加 Environment Identity Board、Prop Identity Board、Expression Sheet、Turnaround Sheet，并从资产页直接调用。',
                        'This page turns Character Identity Board into a usable skill first. The same structure can later add Environment Identity Board, Prop Identity Board, Expression Sheet, Turnaround Sheet, and direct asset-page calls.'
                      )}
                    </p>
                  </div>
                </div>
              )}
            </aside>
          </section>
        </div>
      </div>
      <TaskManagerPanel
        isOpen={isTaskManagerOpen}
        onClose={() => setIsTaskManagerOpen(false)}
        lang={lang}
        driverType={DriverType.AESTHETIC}
      />
      {isImageModalOpen && (
        <div className="fixed inset-x-0 top-4 bottom-20 z-[140] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className={`w-full max-w-3xl max-h-full rounded-xl border shadow-2xl flex flex-col overflow-hidden ${
            isRetro ? 'border-[#8B261D] bg-[var(--bg-header)]' : 'border-zinc-800 bg-[#0c0c0c]'
          }`}>
            <div className={`flex shrink-0 items-center justify-between border-b px-6 py-4 ${
              isRetro ? 'border-[#8B261D]/20 bg-[var(--bg-header)]' : 'border-zinc-900 bg-zinc-950'
            }`}>
              <div>
                <h2 className={`flex items-center gap-2 text-lg font-bold tracking-wider ${isRetro ? 'text-black' : 'text-white'}`}>
                  <Sparkles size={18} className={accentText} />
                  {t(lang, '生成图片', 'Generate Image')}
                </h2>
                <p className={`mt-1 text-[11px] font-bold uppercase tracking-widest ${isRetro ? 'text-[#8B261D]' : 'text-zinc-300'}`}>
                  {t(lang, '使用最终成型律令生成角色身份板', 'Generate a character identity board from the assembled edict')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className={`p-1 transition-colors ${isRetro ? 'text-[#8B261D]/55 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-white'}`}
              >
                <X size={20} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto custom-scrollbar">
              <div className="grid gap-5 p-5 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="space-y-4">
                  <div className={`rounded-lg border p-4 ${isRetro ? 'border-[#8B261D]/16 bg-[var(--bg-header)]/55' : 'border-zinc-800 bg-zinc-900/30'}`}>
                    <label className={`text-xs font-bold uppercase tracking-widest ${isRetro ? 'text-black' : 'text-zinc-200'}`}>
                      {t(lang, '模型', 'Model')}
                    </label>
                    <select
                      value={imageModel}
                      onChange={(event) => handleImageModelChange(event.target.value)}
                      className={`mt-3 w-full rounded-md border px-3 py-2.5 text-xs font-bold ${inputClass}`}
                    >
                      {displayedImageModelOptions.map(model => (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      ))}
                    </select>
	                    <p className={`mt-2 text-[11px] leading-5 ${mutedText}`}>
	                      {imageGenerationEngine
	                        ? t(lang, imageGenerationEngine.name, imageGenerationEngine.id)
	                        : 'imageGen'} · {imageModel.toLowerCase().startsWith('gpt-image') ? 'OpenAI Images' : t(lang, '运行时图像模型', 'Runtime image model')}
	                    </p>
                      <div className={`mt-3 rounded-md border px-3 py-2 text-[10px] leading-5 ${isRetro ? 'border-[#8B261D]/14 bg-[#FFF8EC]/55 text-[#5E352D]' : 'border-zinc-800 bg-black/24 text-zinc-500'}`}>
                        {imageModel.toLowerCase().startsWith('gpt-image')
                          ? `POST /v1/images/generations · size ${imageRequestSize} · ${imageQuality} · ${imageFormat}`
                          : t(lang, '使用运行时图像模型配置', 'Uses runtime image model configuration')}
                      </div>
	                  </div>

                  <div className={`rounded-lg border p-4 ${isRetro ? 'border-[#8B261D]/16 bg-[var(--bg-header)]/55' : 'border-zinc-800 bg-zinc-900/30'}`}>
                    <label className={`text-xs font-bold uppercase tracking-widest ${isRetro ? 'text-black' : 'text-zinc-200'}`}>
                      {t(lang, '分辨率比例', 'Aspect Ratio')}
                    </label>
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {boardFormatOptions.map(option => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setImageAspectRatio(option.value)}
                          className={`h-9 rounded-md border text-[11px] font-black transition-all active:scale-95 ${
                            imageAspectRatio === option.value
                              ? (isRetro ? 'border-[#8B261D] bg-[#8B261D] text-white' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)] text-black')
                              : (isRetro ? 'border-[#8B261D]/18 text-[#8B261D] hover:bg-[#8B261D]/8' : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white')
                          }`}
                        >
                          {option.value}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={`rounded-lg border p-4 ${isRetro ? 'border-[#8B261D]/16 bg-[var(--bg-header)]/55' : 'border-zinc-800 bg-zinc-900/30'}`}>
                    <label className={`text-xs font-bold uppercase tracking-widest ${isRetro ? 'text-black' : 'text-zinc-200'}`}>
                      {t(lang, '分辨率', 'Resolution')}
                    </label>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {imageScaleOptions.map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setImageScale(option)}
                          className={`h-9 rounded-md border text-[11px] font-black uppercase transition-all active:scale-95 ${
                            imageScale === option
                              ? (isRetro ? 'border-[#8B261D] bg-[#8B261D] text-white' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)] text-black')
                              : (isRetro ? 'border-[#8B261D]/18 text-[#8B261D] hover:bg-[#8B261D]/8' : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white')
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {imageModel.toLowerCase().startsWith('gpt-image') && (
                      <>
                        <label className={`mt-4 block text-xs font-bold uppercase tracking-widest ${isRetro ? 'text-black' : 'text-zinc-200'}`}>
                          {t(lang, '格式', 'Format')}
                        </label>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {imageFormatOptions.map(option => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setImageFormat(option.value)}
                              className={`h-9 rounded-md border text-[11px] font-black transition-all active:scale-95 ${
                                imageFormat === option.value
                                  ? (isRetro ? 'border-[#8B261D] bg-[#8B261D] text-white' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)] text-black')
                                  : (isRetro ? 'border-[#8B261D]/18 text-[#8B261D] hover:bg-[#8B261D]/8' : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white')
                              }`}
                            >
                              {t(lang, option.label, option.labelEn)}
                            </button>
                          ))}
                        </div>

                        <label className={`mt-4 block text-xs font-bold uppercase tracking-widest ${isRetro ? 'text-black' : 'text-zinc-200'}`}>
                          GPT Image Quality
                        </label>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {imageQualityOptions.map(option => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setImageQuality(option.value)}
                              className={`h-9 rounded-md border text-[11px] font-black transition-all active:scale-95 ${
                                imageQuality === option.value
                                  ? (isRetro ? 'border-[#8B261D] bg-[#8B261D] text-white' : 'border-[var(--mist-active-accent)] bg-[var(--mist-active-accent)] text-black')
                                  : (isRetro ? 'border-[#8B261D]/18 text-[#8B261D] hover:bg-[#8B261D]/8' : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white')
                              }`}
                            >
                              {t(lang, option.label, option.labelEn)}
                            </button>
                          ))}
                        </div>
                        {(imageScale === '4k' || imageQuality === 'high') && (
                          <p className={`mt-3 text-[11px] leading-5 ${mutedText}`}>
                            {t(
                              lang,
                              '如果网关秒退，请先切回 1k / low / JPEG 验证权限。4k 或 high 可能需要额外上游权限。',
                              'If the gateway fails immediately, test 1k / low / JPEG first. 4k or high may require extra upstream access.'
                            )}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className={`flex min-h-[320px] items-center justify-center overflow-hidden rounded-lg border ${
                    isRetro ? 'border-[#8B261D]/18 bg-[#FFF8EC]' : 'border-zinc-800 bg-black'
                  }`}>
                    {generatedImageUrl ? (
                      <img src={generatedImageUrl} alt="Generated character identity board" className="max-h-[54vh] w-full object-contain" />
                    ) : (
                      <div className={`px-8 text-center ${mutedText}`}>
                        <ImagePlus size={34} className="mx-auto mb-4 opacity-70" />
                        <p className="text-xs font-bold uppercase tracking-[0.2em]">
                          {t(lang, '等待生成', 'Ready to Generate')}
                        </p>
                        <p className="mt-3 text-xs leading-6">
                          {t(lang, '会使用右侧最终成型律令，不会混入示例变量。', 'Uses the assembled edict on the right, with no example variables mixed in.')}
                        </p>
                      </div>
                    )}
                  </div>

                  {imageGenerationError && (
                    <div className={`rounded-lg border p-3 text-xs leading-5 ${
                      isRetro ? 'border-[#8B261D]/24 bg-[#8B261D]/8 text-[#8B261D]' : 'border-red-500/25 bg-red-500/10 text-red-200'
                    }`}>
                      {imageGenerationError}
                    </div>
                  )}

                  <div className={`rounded-lg border p-3 ${isRetro ? 'border-[#8B261D]/14 bg-[var(--bg-header)]/50' : 'border-zinc-800 bg-zinc-900/25'}`}>
                    <div className={`mb-2 text-[10px] font-black uppercase tracking-[0.18em] ${mutedText}`}>
                      {t(lang, '发送内容预览', 'Prompt Preview')}
                    </div>
                    <p className={`line-clamp-6 text-xs leading-5 ${isRetro ? 'text-black/68' : 'text-zinc-400'}`}>
                      {generatedPrompt}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`flex shrink-0 items-center justify-between gap-3 border-t px-6 py-4 ${
              isRetro ? 'border-[#8B261D]/20 bg-[var(--bg-header)]' : 'border-zinc-900 bg-black/20'
            }`}>
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors ${isRetro ? 'text-black/60 hover:text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                {t(lang, '取消', 'Cancel')}
              </button>
              <div className="flex items-center gap-3">
                {generatedImageUrl && (
	                  <a
	                    href={generatedImageUrl}
	                    download={`character-identity-board-${imageAspectRatio.replace(':', 'x')}.${imageFormat === 'jpeg' ? 'jpg' : imageFormat}`}
                    className={`flex items-center gap-2 rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all active:scale-95 ${
                      isRetro ? 'border-[#8B261D]/25 text-[#8B261D] hover:bg-[#8B261D]/8' : 'border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <Download size={14} />
                    {t(lang, '下载', 'Download')}
                  </a>
                )}
                <button
                  type="button"
                  data-testid="prompt-skill-image-generate"
                  onClick={runImageGeneration}
                  disabled={isGeneratingImage}
                  className={`mist-traverse-action mist-app-primary-action flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${
                    isRetro ? 'bg-[#8B261D] text-white hover:bg-[#6D1E16]' : 'bg-[var(--mist-active-accent)] text-black'
                  }`}
                >
                  {isGeneratingImage ? <RefreshCcw size={14} className="animate-spin" /> : <Sparkles size={14} />}
                  {isGeneratingImage ? t(lang, '生成中', 'Generating') : t(lang, '生成图片', 'Generate Image')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="mist-app-footer mist-aesthetic-footer fixed bottom-0 left-0 right-0 z-40 flex h-14 items-center justify-between border-t border-[var(--border-main)] bg-[var(--bg-header)] px-4 backdrop-blur-md transition-colors duration-500 md:px-12"
        style={{ ['--footer-accent' as any]: 'var(--mist-active-accent)' }}
      >
        <div className="flex min-w-0 shrink-0 items-center gap-3 md:w-[340px]">
          <div className={`mist-app-footer-segment flex h-10 min-w-0 items-center gap-2 border px-2.5 ${isRetro ? 'bg-[var(--bg-panel)]' : 'bg-[#050505]'}`}>
            <Cpu size={15} className={isRetro ? 'text-[#8B261D]' : 'text-[var(--mist-active-accent)]'} />
            <div className="hidden shrink-0 leading-none sm:block">
              <div className={`text-[9px] font-black uppercase tracking-[0.18em] ${isRetro ? 'text-[#8B261D]' : 'text-zinc-400'}`}>
                {t(lang, '模型', 'Model')}
              </div>
              <div className={`mt-0.5 max-w-[76px] truncate text-[8px] font-bold uppercase tracking-[0.08em] ${isRetro ? 'text-[#3D1A16]/55' : 'text-zinc-600'}`}>
                {activeGenerationEngine ? t(lang, activeGenerationEngine.name, activeGenerationEngine.id) : activeGenerationEngineId}
              </div>
            </div>
            <select
              value={selectedModel}
              onChange={(event) => handleModelChange(event.target.value)}
              className={`h-7 min-w-[138px] max-w-[210px] flex-1 rounded border bg-transparent px-2 text-[10px] font-bold outline-none ring-0 shadow-none ${
                isRetro
                  ? 'border-[#8B261D]/18 text-[#2F1712]'
                  : 'border-white/[0.08] text-zinc-200'
              }`}
              title={t(lang, '变量生成模型', 'Variable generation model')}
            >
              {displayedModelOptions.map(model => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsTaskManagerOpen(open => !open)}
            className={`mist-app-footer-control ${isTaskManagerOpen ? 'is-active' : ''} group relative flex min-w-[60px] shrink-0 flex-col items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95`}
          >
            <div className="relative">
              <Activity size={18} />
              {activeTaskCount > 0 && (
                <span className="mist-task-count-badge absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[var(--mist-archive-red)] text-[8px] font-bold text-white shadow-[0_0_10px_var(--accent-glow)]">
                  {activeTaskCount}
                </span>
              )}
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider">
              {t(lang, '任务中心', 'Tasks')}
            </span>
          </button>
        </div>

        <div className="flex shrink-0 items-center justify-end md:w-[340px]">
          <button
            type="button"
            onClick={runVariableGeneration}
            disabled={!canGenerateVariables}
            className={`mist-traverse-action mist-app-primary-action flex min-w-[174px] items-center justify-center gap-3 rounded-lg border px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${
              isRetro ? 'bg-[#8B261D] text-white shadow-none hover:bg-[#6D1E16]' : 'bg-[var(--mist-active-accent)] text-black'
            }`}
            title={sourceMode === 'IMAGE' && !sourceInputs.imageDataUrl ? t(lang, '请先上传角色参考图', 'Upload a character reference first') : undefined}
          >
            {isGeneratingVariables ? <RefreshCcw size={16} className="animate-spin" /> : <Sparkles size={16} />}
            <span className="tabular-nums">
              {isGeneratingVariables ? t(lang, '生成中', 'Generating') : t(lang, '生成变量', 'Generate')}
            </span>
            {!isGeneratingVariables && <ChevronRight size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};
