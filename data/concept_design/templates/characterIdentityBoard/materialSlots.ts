import { CharacterIdentityBoardMaterialSlot } from './types';

export const CHARACTER_IDENTITY_BOARD_MATERIAL_SLOTS: CharacterIdentityBoardMaterialSlot[] = [
  {
    id: 'characterSeed',
    name: 'C01 主体身份',
    nameEn: 'C01 Subject Identity',
    layer: 'material',
    role: '主体核心、人设协议、身份功能和角色悖论的原料入口。',
    roleEn: 'Material entry for subject core, persona protocol, identity function, and character contradiction.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'ageBodyType',
    name: 'C02 本体身体',
    nameEn: 'C02 Body Ontology',
    layer: 'material',
    role: '年龄感、身体比例、体态和身体存在感的原料入口。',
    roleEn: 'Material entry for age impression, body proportion, posture, and physical presence.',
    directToAssembly: false,
    translationNeed: 'light'
  },
  {
    id: 'timeSpaceScene',
    name: 'C03 时空场域',
    nameEn: 'C03 Time-Space Field',
    layer: 'material',
    role: '时代、地理、社会制度、空间类型、技术边界和场域压力的原料入口。',
    roleEn: 'Material entry for era, geography, social system, spatial type, technology boundary, and field pressure.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'actionMoment',
    name: 'C04 行动事件',
    nameEn: 'C04 Action Moment',
    layer: 'material',
    role: '角色正在做什么、冲突瞬间、情绪动作和人物关系的原料入口。',
    roleEn: 'Material entry for what the character is doing, conflict moment, emotional action, and relationships.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'visualMedium',
    name: 'C05 视觉媒介',
    nameEn: 'C05 Visual Medium',
    layer: 'material',
    role: '摄影、绘画、CGI、实体工艺等物理媒介的原料入口。',
    roleEn: 'Material entry for physical medium such as photography, painting, CGI, or tangible craft.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'style',
    name: 'C06 审美风格',
    nameEn: 'C06 Aesthetic Style',
    layer: 'material',
    role: '风格参考、审美气质、观看关系、材料气质和整体情绪的原料入口。',
    roleEn: 'Material entry for style reference, aesthetic mood, viewing relation, material mood, and overall emotion.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'paletteStrategy',
    name: 'C07 色彩策略',
    nameEn: 'C07 Palette Strategy',
    layer: 'material',
    role: '主色、辅色、点缀色、背景色倾向、材质色、肤色/物体色关系和光色冷暖的原料入口。',
    roleEn: 'Material entry for main color, secondary color, accent color, background tendency, material color, skin/object color relation, and light color temperature.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'compositionScene',
    name: 'C08 取景构图',
    nameEn: 'C08 Framing & Composition',
    layer: 'material',
    role: '景别、角度、镜头距离、取景、主体位置、空间层次和观看组织的原料入口。',
    roleEn: 'Material entry for shot size, angle, lens distance, framing, subject placement, spatial depth, and viewing structure.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'lightingAtmosphere',
    name: 'C09 光影氛围',
    nameEn: 'C09 Lighting Atmosphere',
    layer: 'material',
    role: '光源、明暗关系、空气感、天气、时间感和情绪压强的原料入口。',
    roleEn: 'Material entry for light source, contrast, air quality, weather, time feeling, and emotional pressure.',
    directToAssembly: false,
    translationNeed: 'required'
  },
  {
    id: 'otherDetails',
    name: 'C10 设计证据',
    nameEn: 'C10 Design Evidence',
    layer: 'material',
    role: '道具、符号、身体细节、限制、人格线索和版式偏好的原料入口。',
    roleEn: 'Material entry for props, symbols, body details, constraints, personality cues, and layout preference.',
    directToAssembly: false,
    translationNeed: 'required'
  }
];
