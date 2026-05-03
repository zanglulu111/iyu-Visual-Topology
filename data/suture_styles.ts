
import { DIALOGUE_STYLES } from './suture_dialogue';
import { MONOLOGUE_STYLES } from './suture_monologue';
import { VOICEOVER_STYLES } from './suture_voiceover';
import { SUTURE_VISUAL_STYLES } from './suture_visual_styles';
import { FILM_CASES } from './suture_film_cases';

export { DIALOGUE_STYLES, MONOLOGUE_STYLES, VOICEOVER_STYLES, FILM_CASES };

export interface SutureStyleItem {
  id: string;
  name: string;
  group?: string;
  instruction: string;
  core?: string;
  directorGrammar?: {
    camera?: string[];
    editing?: string[];
    staging?: string[];
    performance?: string[];
  };
  directorRhetoric?: {
    narrativeLogic?: string[];
    allowedDevices?: string[];
    bannedCliches?: string[];
  };
  voiceTopology?: {
    silence?: number;
    dialogue?: number;
    monologue?: number;
    voiceover?: number;
    timingRules?: string[];
    soundMotifs?: string[];
  };
  visualSkin?: {
    palette?: string[];
    lighting?: string[];
    texture?: string[];
    motifs?: string[];
    contaminationRisk?: 'low' | 'medium' | 'high';
  };
  filmCaseMechanics?: {
    sceneMechanics?: string[];
    cameraUse?: string[];
    editingUse?: string[];
    stagingUse?: string[];
    performanceUse?: string[];
    soundUse?: string[];
    transferableUse?: string[];
  };
  filmCaseBoundaries?: {
    extractOnly?: string[];
    forbiddenCopies?: string[];
    conflictPolicy?: string[];
  };
}

// =============================================================================
// 2. 视觉风格 (VISUAL STYLE) - 出口
// =============================================================================
export const VISUAL_STYLES = SUTURE_VISUAL_STYLES;
export const FILM_CASE_STYLES = FILM_CASES;

// Re-export simplified technical settings
export const SHOT_DENSITY = [
  { id: 'SHOTS_4', name: '4个关键帧 (4 Keyframes)' },
  { id: 'SHOTS_6', name: '6个关键帧 (6 Keyframes)' },
  { id: 'SHOTS_9', name: '9个关键帧 (9 Keyframes)' },
  { id: 'SHOTS_12', name: '12个关键帧 (12 Keyframes)' },
  { id: 'SHOTS_16', name: '16个关键帧 (16 Keyframes)' },
  { id: 'SHOTS_20', name: '20个关键帧 (20 Keyframes)' },
  { id: 'SHOTS_25', name: '25个关键帧 (25 Keyframes)' },
];

export const SCENE_MODES = [
  {
    id: 'AUTO',
    name: '自动诊断 (Auto Diagnose)',
    core: '由引擎先判断场景的真实拍法。',
    instruction: '先读源文本的戏剧事件、人物压力、动作密度和空间复杂度，再选择最适合的分镜策略。'
  },
  {
    id: 'DRAMA',
    name: '戏剧对峙 (Drama)',
    core: '关系、反应、沉默和潜台词优先。',
    instruction: '重点不是说了什么，而是谁在回避、压住、误解或等待。'
  },
  {
    id: 'ACTION',
    name: '动作推进 (Action)',
    core: '身体动作、因果链和空间清晰度优先。',
    instruction: '每个动作要有起因、过程、反馈和危险后果，不能只列动作名。'
  },
  {
    id: 'PSYCHOLOGICAL',
    name: '心理内爆 (Psychological)',
    core: '主观感知、细节放大和精神裂缝优先。',
    instruction: '用可见的物理细节承载内心变化，避免直接解释心理。'
  },
  {
    id: 'RITUAL',
    name: '仪式场 (Ritual)',
    core: '秩序、重复、身体姿态和象征性动作优先。',
    instruction: '强调动作的程序感、禁忌感和不可逆感。'
  },
  {
    id: 'SUSPENSE',
    name: '悬疑逼近 (Suspense)',
    core: '信息遮挡、视线控制和延迟揭示优先。',
    instruction: '观众应始终知道一点，又缺失最关键的一点。'
  },
  {
    id: 'CHASE',
    name: '追逐逃逸 (Chase)',
    core: '方向、距离、速度差和障碍物优先。',
    instruction: '必须保持地理连续性，让观众知道谁靠近、谁远离、危险来自哪里。'
  },
  {
    id: 'DREAM',
    name: '梦境/幻觉 (Dream)',
    core: '逻辑断裂、感官漂移和主观连续性优先。',
    instruction: '允许现实规则松动，但情绪因果必须连贯。'
  },
  {
    id: 'ENSEMBLE',
    name: '群像调度 (Ensemble)',
    core: '多人物站位、视线网络和权力中心迁移优先。',
    instruction: '不要把群戏拍成轮流特写，要让人物关系在空间中可见。'
  },
  {
    id: 'EMPTY',
    name: '空场/余波 (Empty / Aftermath)',
    core: '用缺席、痕迹和环境反馈讲故事。',
    instruction: '少用人物解释，多拍物件状态、空间损耗和声音残留。'
  },
  {
    id: 'MONTAGE',
    name: '剪辑结构段落 (Editing Sequence)',
    core: '用并置、压缩、重复和节奏组织意义。',
    instruction: '镜头之间要产生第三意义，但不得把它理解为快速罗列事件或类型片模板。'
  },
];

export const SCENE_FUNCTIONS = [
  {
    id: 'AUTO',
    name: '自动判断 (Auto)',
    core: '由引擎判断本场在故事中的功能。',
    instruction: '根据源文本判断这一场是在建置、靠近、转折、崩坏、揭示还是余波。'
  },
  {
    id: 'SETUP',
    name: '建置 (Setup)',
    core: '建立空间、关系、目标和规则。',
    instruction: '镜头应清楚交代观众必须知道的事实，不要过早进入情绪特写。'
  },
  {
    id: 'APPROACH',
    name: '逼近 (Approach)',
    core: '让人物或危险逐步接近不可回避点。',
    instruction: '镜头应体现距离缩短、选择收窄、压力上升。'
  },
  {
    id: 'REVERSAL',
    name: '反转 (Reversal)',
    core: '让观众对局势的判断被推翻。',
    instruction: '必须控制信息释放顺序，反转镜头前后要有明确认知落差。'
  },
  {
    id: 'BREAKDOWN',
    name: '崩坏 (Breakdown)',
    core: '秩序破裂、人物失控或关系断裂。',
    instruction: '镜头语言可以失衡，但动作链和情绪链不能断。'
  },
  {
    id: 'REVEAL',
    name: '揭示 (Reveal)',
    core: '把被遮挡的信息转化为可见事实。',
    instruction: '揭示不是说出来，而是让观众看见不可否认的证据。'
  },
  {
    id: 'AFTERMATH',
    name: '余波 (Aftermath)',
    core: '表现事件发生后的痕迹、代价和沉默。',
    instruction: '避免继续推进剧情，用物理结果和人物反应收束。'
  },
];

export const SHOT_BUDGETS = [
  {
    id: 'AUTO',
    name: '自动预算 (Auto)',
    core: '从 4/6/9/12/16/20/25 中自动选择。',
    instruction: '先诊断场景真实密度，再选择最小但足够完整的镜头数。不要为了版式或整齐感硬塞。'
  },
  {
    id: 'BUDGET_4',
    name: '4镜头：图标压缩',
    core: '建置、关键动作、反应、落幅。',
    instruction: '适合极短场、单一动作、空场余波。每一镜都必须像海报一样承担核心意义。'
  },
  {
    id: 'BUDGET_6',
    name: '6镜头：清晰节拍',
    core: '最小完整戏剧链。',
    instruction: '适合简单对峙、小动作推进、单一发现。每镜对应一个明确戏剧拍点。'
  },
  {
    id: 'BUDGET_9',
    name: '9镜头：短场展开',
    core: '建置、转折、落幅各三拍。',
    instruction: '适合短场标准输出，用九个清楚节拍完成空间、动作和余韵。'
  },
  {
    id: 'BUDGET_12',
    name: '12镜头：标准电影场',
    core: '兼顾空间、动作、反应、插入和留白。',
    instruction: '适合大多数单场，是默认精品分镜密度。'
  },
  {
    id: 'BUDGET_16',
    name: '16镜头：表演细化',
    core: '允许更多反应、潜台词和微动作。',
    instruction: '适合心理戏、关系戏、仪式戏和含蓄转折。'
  },
  {
    id: 'BUDGET_20',
    name: '20镜头：复杂调度',
    core: '处理多人、动作链、悬疑推进或空间变化。',
    instruction: '适合高密度场景，但仍要避免填充式镜头。'
  },
  {
    id: 'BUDGET_25',
    name: '25镜头：高密度拆解',
    core: '复杂场景的完整动作链与心理链拆解。',
    instruction: '只在源文本密度足够、动作链复杂或用户明确要求 25 镜头时使用。'
  },
];

export const SOUND_ARCHITECTURES = [
  {
    id: 'AUTO',
    name: '自动声音架构 (Auto)',
    core: '由场景诊断决定声音主轴。',
    instruction: '先判断此场应靠对白、内心、旁白、同步声、音乐/噪音还是沉默推进。'
  },
  {
    id: 'SILENT_VISUAL',
    name: '视觉默片',
    core: '无语音，以画面、环境声和音乐组织叙事。',
    instruction: '台词仅在源文本强制需要时保留，否则让动作、声音残留和物件反馈说话。'
  },
  {
    id: 'DIALOGUE_DRIVEN',
    name: '对白驱动',
    core: '对白推动关系和信息，但必须有动作潜台词。',
    instruction: '每句对白都要改变权力关系、距离或认知，不写闲聊。'
  },
  {
    id: 'INNER_VOICE',
    name: '内心独白',
    core: '人物主观意识成为声音主轴。',
    instruction: '独白要像意识压力，不像解释说明。画面必须能与独白形成抵牾。'
  },
  {
    id: 'VOICEOVER_NARRATION',
    name: '旁白叙事',
    core: '叙述者声音组织时间、记忆或命运感。',
    instruction: '旁白不得复述画面已经显现的信息，必须提供时间层、误差或反讽。'
  },
  {
    id: 'SYNC_SOUND_REALISM',
    name: '同步声真实主义',
    core: '环境声、脚步、衣料、呼吸、空间混响主导。',
    instruction: '声音像真实现场录音，音乐克制，台词可碎片化。'
  },
  {
    id: 'MIXED_SOUNDSCAPE',
    name: '混合声景',
    core: '对白、环境声、音乐、噪音共同构成压力场。',
    instruction: '明确每条声音的层级和进入/退出，不要把声音写成单行装饰。'
  },
  {
    id: 'RITUAL_CHANT',
    name: '仪式吟诵',
    core: '重复、低语、群声或咒语式声音构成节奏。',
    instruction: '适合仪式、梦境、宗教性或群体压迫场。声音必须服务于动作程序。'
  },
  {
    id: 'TEXT_CARD',
    name: '字幕/文字卡',
    core: '用屏幕文字、章节卡或物件文字承载信息。',
    instruction: '文字必须成为电影语言的一部分，不是偷懒解释。'
  },
];
