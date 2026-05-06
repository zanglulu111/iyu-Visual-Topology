import type { SutureStyleItem } from '../suture/styles';
import { makeFilmCase } from './_helpers';

export const FILM_CASE_FEATURE_ACTION_MEMORY: SutureStyleItem[] = [
  makeFilmCase({
    id: 'film_mad_max',
    name: '疯狂的麦克斯4 (Mad Max: Fury Road)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '直线追逐、目标极简、方向清楚、持续动能',
    sceneMechanics: ['把场景组织成明确的距离变化：谁追、谁逃、障碍在哪里、目标在何处。', '动作链只服务生存和抵达，不增加复杂解释。'],
    cameraUse: ['中心化动作轴、清楚方向线、身体和交通/载具/地形的因果关系。'],
    editingUse: ['短切加速但保持方向连续，关键动作点反复回到中心。'],
    soundUse: ['机械/身体/环境冲击声构成节拍。']
  }),
  makeFilmCase({
    id: 'film_hero',
    name: '英雄 (Hero)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '版本叙事、仪式化对峙、动作像思想辩论',
    sceneMechanics: ['同一事件可按不同叙述版本重组，但当前片段没有版本差异时只能借仪式化对峙机制。', '动作结果必须像论点落地。'],
    cameraUse: ['对称、距离、凝视、动作前的静止。'],
    editingUse: ['段落分明，先立规则再让动作破坏或兑现规则。'],
    soundUse: ['动作前的静默、单点物理声、兵器/衣料/空间回声。']
  }),
  makeFilmCase({
    id: 'film_sin_city',
    name: '罪恶之城 (Sin City)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '硬汉主观叙述、道德腐败的物理化、章节式罪案推进',
    sceneMechanics: ['让角色用冷硬主观判断误读或确认道德处境，但不把黑色城市皮肤搬进画面。', '暴力后果用物理痕迹和身体代价表达。'],
    cameraUse: ['强剪影式构图可抽象为高对比权力关系，不指定黑白皮肤。'],
    editingUse: ['章节式推进、暴力切点、结果后的短暂停留。'],
    soundUse: ['低沉独白可少量进入；枪声/脚步/雨声等必须来自当前片段物理事实。']
  }),
  makeFilmCase({
    id: 'film_enter_void',
    name: '进入虚无 (Enter the Void)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '极端主观视点、意识漂移、从身体到俯瞰的视角转移',
    sceneMechanics: ['把人物感知当成镜头组织原则，先感到再理解。', '主观视角可漂移，但不能离开当前空间事实。'],
    cameraUse: ['第一视角、俯瞰、漂浮式空间穿行的抽象机制。'],
    editingUse: ['无缝游移、感官闪回、声音先行。'],
    soundUse: ['心跳、低频、呼吸、隔膜感声音。']
  }),
  makeFilmCase({
    id: 'film_trainspotting',
    name: '猜火车 (Trainspotting)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '自嘲式生存宣言、成瘾循环、现实与主观厌恶的急切切换',
    sceneMechanics: ['用快速动作和自我辩解暴露角色的困局。', '超现实只能是当前人物主观压力的剪辑表达，不能新增外部幻象推动剧情。'],
    cameraUse: ['贴近身体的广角、坠落/冲刺感、尴尬正面凝视。'],
    editingUse: ['狂躁蒙太奇、突然停顿、动作和内心语速错位。'],
    soundUse: ['心跳、脚步、身体声和节奏性音乐进入点。']
  }),
  makeFilmCase({
    id: 'film_seven',
    name: '七宗罪 (Se7en)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '道德调查、证据延迟、倒计时压迫和不可逆结局逼近',
    sceneMechanics: ['让证据以局部、残留、物件状态逐步显现。', '观众先感到缺口，再得到确认。'],
    cameraUse: ['手电/门缝/遮挡式探索、局部证据特写。'],
    editingUse: ['慢调查节奏与突然揭示切点。'],
    soundUse: ['房间底噪、远处城市声、证据被触碰的细小声音。']
  }),
  makeFilmCase({
    id: 'film_children_men',
    name: '人类之子 (Children of Men)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '沉浸式长镜头、背景叙事、危机在人物身后持续发生',
    sceneMechanics: ['让重要世界信息留在背景动作和环境标记中，而不是台词解释。', '镜头跟随人物穿过危险，观众在同一空间里逐步获得信息。'],
    cameraUse: ['手持跟随、长镜头感、前景遮挡和背景事件并存。'],
    editingUse: ['少切或隐形切，危机通过空间连续上升。'],
    soundUse: ['环境声压过台词，突然爆点后保留耳鸣或静默。']
  }),
  makeFilmCase({
    id: 'film_eternal_sunshine',
    name: '暖暖内含光 (Eternal Sunshine of the Spotless Mind)',
    group: '7B. 影片案例 / 动作、悬疑与记忆机制',
    core: '记忆崩塌、场景物理消失、情感先于时间顺序',
    sceneMechanics: ['按情感相邻而非时间相邻组织片段，但只使用当前片段已有信息。', '空间不稳定只能表现记忆/心理压力，不能改变源文本结果。'],
    cameraUse: ['手持亲密、局部照明、人物与空间错层。'],
    editingUse: ['倒叙碎片、声音残留、画面缺口。'],
    soundUse: ['声音模糊、回声、断裂和远近错位。']
  })
];
