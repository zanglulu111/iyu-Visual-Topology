import type { SutureStyleItem } from '../suture_styles';
import { makeFilmCase } from './_helpers';

export const FILM_CASE_FEATURE_IDENTITY: SutureStyleItem[] = [
  makeFilmCase({
    id: 'film_fight_club',
    name: '搏击俱乐部 (Fight Club)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '第一人称不可靠感知、身份裂缝、消费空间反讽、身体疼痛作为认知证据',
    sceneMechanics: ['让观众贴近一个正在误读自己的主体，逐步暴露感知和现实之间的断层。', '用日常物件/空间秩序与身体损伤形成反讽关系。'],
    cameraUse: ['局部身体、物件标签式切面、突然贴近的主观视角。'],
    editingUse: ['信息过载式短切、潜意识闪回、错误因果的回补。'],
    soundUse: ['贴近身体的撞击、耳鸣、呼吸和环境噪音压迫。']
  }),
  makeFilmCase({
    id: 'film_matrix',
    name: '黑客帝国 (The Matrix)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '现实层级怀疑、规则觉醒、训练/动作/哲学提问交替推进',
    sceneMechanics: ['把“世界规则是否真实”变成可见的动作测试。', '让解释性信息必须经过身体行动验证。'],
    cameraUse: ['动作关键点的时间延展、人物与空间规则的对抗性构图。'],
    editingUse: ['说明段与动作段交替，动作结果反证前一段信息。'],
    soundUse: ['规则改变时使用突然抽空、低频推进或细小物理声放大。']
  }),
  makeFilmCase({
    id: 'film_blade_runner',
    name: '银翼杀手 (Blade Runner)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '侦探式缓慢逼近、记忆真假、被环境包围的人性追问',
    sceneMechanics: ['调查不是找答案，而是让每个证据反过来污染调查者。', '用环境压力承载身份疑问。'],
    cameraUse: ['隔物窥视、反射遮挡、人物被巨大空间压小。'],
    editingUse: ['低速线索递进，证据镜头和沉默反应镜头互相牵引。'],
    soundUse: ['持续环境底噪、远处机械声、沉默中保留空间深度。']
  }),
  makeFilmCase({
    id: 'film_2001',
    name: '2001太空漫游 (2001: A Space Odyssey)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '冷漠宇宙尺度、极简程序动作、非人视角压过人类情绪',
    sceneMechanics: ['把人物行动放进远大于个人的秩序中，使动作显得渺小而不可逆。', '用程序和停顿替代表情解释。'],
    cameraUse: ['对称、远距离、缓慢移动、机械化视点。'],
    editingUse: ['长停留与巨大省略并置，让因果像仪式一样发生。'],
    soundUse: ['呼吸、机械循环声、绝对静默和空间空白。']
  }),
  makeFilmCase({
    id: 'film_amelie',
    name: '天使爱美丽 (Amelie)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '细节癖旁观、善意干预、物件链触发人物关系',
    sceneMechanics: ['用一串具体小物件建立人物习惯和隐藏愿望。', '让小动作在因果链中制造温柔的偏转。'],
    cameraUse: ['广角近距、正面观察、物件特写串联。'],
    editingUse: ['快速细节蒙太奇把性格转成动作证据。'],
    soundUse: ['轻巧拟音、生活物件声和节奏化转场。']
  }),
  makeFilmCase({
    id: 'film_mood_love',
    name: '花样年华 (In the Mood for Love)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '压抑关系、重复场景、物理近距离与情感不可达',
    sceneMechanics: ['让重复动作逐次改变情绪含义。', '人物很近，但空间和礼貌让真实欲望无法抵达。'],
    cameraUse: ['门框/墙面遮挡、窄道压缩、背影与局部身体。'],
    editingUse: ['回环动作、延宕停留、相似构图中的细微差异。'],
    soundUse: ['循环性环境声、脚步和衣料声替代直白表白。']
  }),
  makeFilmCase({
    id: 'film_chungking',
    name: '重庆森林 (Chungking Express)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '擦肩而过、主观时间量化、错位回答和快速城市切面',
    sceneMechanics: ['用数字、期限、重复动作量化情绪，但只能投射到当前故事原生物件上。', '让人物回答偏离问题，暴露真正的问题。'],
    cameraUse: ['近距晃动、运动残影、局部切面。'],
    editingUse: ['抽帧、重复、跳切、主观碎片。'],
    soundUse: ['循环性声音和画外主观语音错位进入。']
  }),
  makeFilmCase({
    id: 'film_her',
    name: '她 (Her)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '声音亲密关系、孤独空间、不可见对象对可见身体的影响',
    sceneMechanics: ['把关系的另一端转化为声音、等待、身体反应和空间空缺。', '亲密通过听觉距离建立，而不是通过拥抱画面建立。'],
    cameraUse: ['单人中近景、空位构图、隔离式城市远景。'],
    editingUse: ['对话留白、视线落空、声音先于反应。'],
    soundUse: ['近距离呼吸感、设备/房间底噪、轻声对话的空间隔离。']
  }),
  makeFilmCase({
    id: 'film_city_god',
    name: '上帝之城 (City of God)',
    group: '7A. 影片案例 / 身份、现实与城市机制',
    core: '群体暴力生态、非线性回溯、观察者被环境推着走',
    sceneMechanics: ['通过多人行动线建立环境的暴力规则。', '让一个观察者的视线串联分散事件，但不让旁白替代画面证据。'],
    cameraUse: ['手持跟随、快速转向、人物与群体压力同框。'],
    editingUse: ['定格、回溯、快切，先抛结果再补因果。'],
    soundUse: ['街面噪音、脚步、呼喊和突然的暴力声切点。']
  })
];
