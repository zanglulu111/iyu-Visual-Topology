import { SutureStyleItem } from '../../types';

export const MONTAGE_STYLES: SutureStyleItem[] = [
  {
    id: 'montage_none',
    name: 'AUTO 自适应 (Auto Editing)',
    group: '0. 默认',
    instruction: '由场景诊断、戏剧功能、镜头预算和导演语法共同决定剪辑关系。默认保持动作连续、空间清楚、信息释放顺序稳定；只有当前片段需要时，才使用延宕、重复、省略、并置或加速。',
    core: '逻辑：不强加模板，让当前片段自己决定镜头之间的时间、空间和信息关系。'
  },
  {
    id: 'montage_continuity',
    name: '标准连续剪辑 (Continuity Flow)',
    group: '1. 基础结构',
    instruction: '线性时间推进。先建立空间和轴线，再按动作链与视线关系切换镜头；景别变化服务可读性，切点跟随动作、对白或声音进入/退出。不得跳过关键因果。',
    core: '逻辑：让观众稳定看懂谁在何处、做了什么、信息如何流动。'
  },
  {
    id: 'montage_delayed_observation',
    name: '延宕观察 (Delayed Observation)',
    group: '1. 基础结构',
    instruction: '减少切换，延长镜头内的等待、呼吸、环境压力和人物微反应。信息不急于解释，让动作在现实空间里慢慢显影；慢镜头必须有内部变化。',
    core: '逻辑：用停留制造重量，让观众在延迟中感到压力。'
  },
  {
    id: 'montage_subjective_fragments',
    name: '主观碎片 (Subjective Fragments)',
    group: '2. 主观时间',
    instruction: '用局部、跳切、重复、失焦、错位声音或记忆式切面组织镜头。只切当前片段已经存在的身体、物件、空间、声音和文字，不得插入后文事件或外部幻象。',
    core: '逻辑：让镜头关系贴近人物感知，而不是客观完整记录。'
  },
  {
    id: 'montage_parallel_cross',
    name: '平行交叉 (Parallel Cross-cutting)',
    group: '3. 并置关系',
    instruction: '在当前片段已经允许的两个或多个空间/行动线之间交替剪辑。每条线必须由源文本或当前场物理条件支持；交叉剪辑只制造并置意义，不制造新的因果。',
    core: '逻辑：通过空间或行动线并置，让观众同时感到距离、互相牵引和信息差。'
  },
  {
    id: 'montage_elliptical_compression',
    name: '省略压缩 (Elliptical Compression)',
    group: '4. 时间处理',
    instruction: '压缩可省略的过程，只保留最能代表动作链、状态变化和信息推进的关键切面。不得跳过源文本明确要求呈现的关键动作，不得把片段终点之后的结果提前带入。',
    core: '逻辑：用少量关键镜头代表一段过程，让时间变短但因果不缺。'
  },
  {
    id: 'montage_repetition_loop',
    name: '重复回环 (Repetition Loop)',
    group: '4. 时间处理',
    instruction: '重复同一动作、构图、声音或物件状态，每次只改变一个变量：距离、力度、注意力、声音层或情绪压力。重复必须来自当前片段原生元素。',
    core: '逻辑：用可见的重复显出不可见的执念、等待、仪式或困局。'
  },
  {
    id: 'montage_delayed_information',
    name: '信息延迟 (Delayed Information)',
    group: '5. 信息释放',
    instruction: '先给痕迹、声音、反应、遮挡或局部，后给主体、原因或空间全貌。信息延迟只能调整展示顺序，不能提前泄露后文真相，也不能凭空制造谜题。',
    core: '逻辑：让观众先感到缺口，再逐步获得确认。'
  },
  {
    id: 'montage_kinetic_acceleration',
    name: '动能加速 (Kinetic Acceleration)',
    group: '6. 动作节奏',
    instruction: '随着动作压力增加，镜头时长递减、切点更硬、声音冲击更明确。加速必须保持轴线、目标方向和动作连续性；不得为了快切牺牲可读性。',
    core: '逻辑：用剪辑频率和切点力度制造身体速度、危险逼近或失控感。'
  },
  {
    id: 'montage_poetic_aftermath',
    name: '诗性余波 (Poetic Aftermath)',
    group: '7. 落幅余韵',
    instruction: '在事件或信息抵达后放慢切换，用空镜、声音残留、人物静止、物件状态或空间回声收束。不得续写后续事件，只停留在当前片段终点的余震。',
    core: '逻辑：不解释结果，让情绪在镜头之间继续回荡。'
  }
];
