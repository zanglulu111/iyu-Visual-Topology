import { PersonaRole } from './types';

export const PERSONA_ROLE_SET: PersonaRole[] = [
  {
    id: 'heir',
    name: '继承人',
    nameEn: 'Heir',
    def: '带有资源、血统、门第或名望压力，姿态克制但身份感强。',
    defEn: 'Carries resource, lineage, house, or reputation pressure, restrained in posture but strong in status.',
    tags: ['status', 'inheritance'],
    controls: ['pose', 'symbol', 'costume']
  },
  {
    id: 'worker',
    name: '劳动者',
    nameEn: 'Worker',
    def: '身份由工作流程、工具、手部痕迹和功能性穿着证明。',
    defEn: 'Identity is proved through workflow, tools, hand traces, and functional dress.',
    tags: ['labor', 'tool'],
    controls: ['prop', 'wear_trace', 'hands']
  },
  {
    id: 'star',
    name: '明星',
    nameEn: 'Star',
    def: '被观看、被包装、被记忆，脸部识别点和造型完整度更重要。',
    defEn: 'Made to be watched, packaged, and remembered; facial memory and styling completion matter more.',
    tags: ['star', 'performance'],
    controls: ['face', 'hair', 'costume', 'pose']
  },
  {
    id: 'outsider',
    name: '边缘人',
    nameEn: 'Outsider',
    def: '不完全属于制度中心，服装和表情里保留偏离、拒绝或自我保护。',
    defEn: 'Not fully inside the institution; clothing and expression keep deviation, refusal, or self-protection.',
    tags: ['outsider', 'deviation'],
    controls: ['expression', 'costume', 'wear_trace']
  },
  {
    id: 'operator',
    name: '执行者',
    nameEn: 'Operator',
    def: '目标明确、动作经济，设计重点是任务、工具、负重和警觉姿态。',
    defEn: 'Goal-oriented and economical in motion; design focuses on task, tools, load, and alert posture.',
    tags: ['operator', 'mission'],
    controls: ['prop', 'pose', 'gear']
  },
  {
    id: 'muse',
    name: '缪斯',
    nameEn: 'Muse',
    def: '角色像某种审美系统的投影，气质、留白和被凝视感大于功能。',
    defEn: 'Reads as a projection of an aesthetic system; aura, negative space, and being gazed at outweigh function.',
    tags: ['muse', 'aura'],
    controls: ['pose', 'expression', 'palette']
  },
  {
    id: 'leader',
    name: '领袖',
    nameEn: 'Leader',
    def: '身体站位和符号承担号召力，服装需要体现秩序、权力或群众关系。',
    defEn: 'Body placement and symbols carry authority; clothing should show order, power, or relation to a group.',
    tags: ['authority', 'group'],
    controls: ['silhouette', 'symbol', 'pose']
  },
  {
    id: 'wanderer',
    name: '漂泊者',
    nameEn: 'Wanderer',
    def: '移动、临时性和不稳定归属构成人设，材料上应有携带、修补和路径痕迹。',
    defEn: 'Movement, temporariness, and unstable belonging define the persona; material should show carrying, repair, and route traces.',
    tags: ['wanderer', 'mobility'],
    controls: ['prop', 'wear_trace', 'costume']
  },
  {
    id: 'devotee',
    name: '信奉者',
    nameEn: 'Devotee',
    def: '被某种审美、组织、信仰或偶像结构塑形，动作里有服从或狂热。',
    defEn: 'Shaped by an aesthetic, organization, belief, or idol structure; movement contains obedience or zeal.',
    tags: ['devotion', 'belief'],
    controls: ['symbol', 'pose', 'expression']
  },
  {
    id: 'trickster',
    name: '伪装者',
    nameEn: 'Trickster',
    def: '身份带有表演、误导或双重面，细节应出现可读的伪装机制。',
    defEn: 'Identity carries performance, misdirection, or a double face; details should show readable disguise mechanics.',
    tags: ['disguise', 'performance'],
    controls: ['face', 'costume', 'prop']
  }
];

