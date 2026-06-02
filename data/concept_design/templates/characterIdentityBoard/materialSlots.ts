import { CharacterIdentityBoardMaterialSlot } from './types';

export const CHARACTER_IDENTITY_BOARD_MATERIAL_SLOTS: CharacterIdentityBoardMaterialSlot[] = [
  {
    id: 'characterSeed',
    name: '角色种子',
    nameEn: 'Character Seed',
    layer: 'material',
    role: '主体核心、人设协议、身份功能和角色悖论的原料入口。',
    roleEn: 'Material entry for subject core, persona protocol, identity function, and character contradiction.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'ageBodyType',
    name: '年龄 / 身体类型',
    nameEn: 'Age / Body Type',
    layer: 'material',
    role: '年龄感、身体比例、体态和身体存在感的原料入口。',
    roleEn: 'Material entry for age impression, body proportion, posture, and physical presence.',
    directToAssembly: false,
    translationNeed: 'light'
  },
  {
    id: 'timeSpaceScene',
    name: '时空场域',
    nameEn: 'Time-Space Field',
    layer: 'material',
    role: '时代、地理、社会制度、空间类型、技术边界和场域压力的原料入口。',
    roleEn: 'Material entry for era, geography, social system, spatial type, technology boundary, and field pressure.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'actionMoment',
    name: '画面事件',
    nameEn: 'Action Moment',
    layer: 'material',
    role: '角色正在做什么、冲突瞬间、情绪动作和人物关系的原料入口。',
    roleEn: 'Material entry for what the character is doing, conflict moment, emotional action, and relationships.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'visualMedium',
    name: '视觉媒介',
    nameEn: 'Visual Medium',
    layer: 'material',
    role: '摄影、绘画、CGI、实体工艺等物理媒介的原料入口。',
    roleEn: 'Material entry for physical medium such as photography, painting, CGI, or tangible craft.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'style',
    name: '审美方向',
    nameEn: 'Style',
    layer: 'material',
    role: '角色 / 主体造型协议、色彩、材料气质和设计方向的原料入口。',
    roleEn: 'Material entry for character / subject form protocol, color, material mood, and design direction.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'compositionScene',
    name: '构图场景',
    nameEn: 'Composition Scene',
    layer: 'material',
    role: '景别、角度、镜头距离、取景、主体位置、空间层次和观看组织的原料入口。',
    roleEn: 'Material entry for shot size, angle, lens distance, framing, subject placement, spatial depth, and viewing structure.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'lightingAtmosphere',
    name: '光影氛围',
    nameEn: 'Lighting Atmosphere',
    layer: 'material',
    role: '光源、明暗关系、空气感、天气、时间感和情绪压强的原料入口。',
    roleEn: 'Material entry for light source, contrast, air quality, weather, time feeling, and emotional pressure.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'otherDetails',
    name: '补充细节',
    nameEn: 'Other Details',
    layer: 'material',
    role: '道具、符号、身体细节、限制、人格线索和版式偏好的原料入口。',
    roleEn: 'Material entry for props, symbols, body details, constraints, personality cues, and layout preference.',
    directToAssembly: false,
    translationNeed: 'required'
  }
];
