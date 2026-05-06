import type { SutureStyleItem } from '../suture/styles';

type FilmCaseInput = {
  id: string;
  name: string;
  group: string;
  core: string;
  sceneMechanics: string[];
  cameraUse?: string[];
  editingUse?: string[];
  stagingUse?: string[];
  performanceUse?: string[];
  soundUse?: string[];
  transferableUse?: string[];
};

const DEFAULT_EXTRACT_ONLY = [
  '场面机制、空间关系、信息释放、动作组织、节奏结构和声音进入方式',
  '可迁移的是抽象拍法：延迟、并置、循环、压缩、逼近、遮挡、主观化、留白',
  '必须先贴合 CURRENT_SCENE_SOURCE，再决定片例机制是否可用'
];

const DEFAULT_FORBIDDEN_COPIES = [
  '不得复制原片角色、演员形象、具体场景、著名道具、服装、标志物、台词、音乐、片名梗或 IP 设定',
  '不得把原片时代、城市、科技、怪物、品牌、宗教符号或美术皮肤搬入当前故事',
  '不得把片例的色彩、材质、媒介、滤镜、动画/摄影质感当成基础分镜视觉皮肤'
];

const DEFAULT_CONFLICT_POLICY = [
  '冲突时优先级：CURRENT_SCENE_SOURCE > 人类导演手记 > 用户控制台参数 > 导演语法 > 剪辑结构 > 影片案例机制',
  '如果片例机制需要源文本不存在的人物、地点、道具或事件，必须抽象为剪辑/调度关系，仍不成立就丢弃',
  '导演语法决定每个切面怎么拍；影片案例只提供这场戏可借用的场面机制，不覆盖导演、不染色、不续写剧情'
];

export const NO_FILM_CASE: SutureStyleItem = {
  id: 'filmcase_none',
  name: '不使用影片案例 (No Film Case)',
  group: '影片案例库 / Film Case Library',
  core: '不启用片例机制参考',
  instruction: '不向基础分镜提示词注入影片案例层。导演语法、剪辑结构和源文本照常工作。',
  filmCaseMechanics: {
    sceneMechanics: ['不启用影片案例机制。'],
    transferableUse: ['无。']
  },
  filmCaseBoundaries: {
    extractOnly: DEFAULT_EXTRACT_ONLY,
    forbiddenCopies: DEFAULT_FORBIDDEN_COPIES,
    conflictPolicy: DEFAULT_CONFLICT_POLICY
  }
};

export const makeFilmCase = (input: FilmCaseInput): SutureStyleItem => ({
  id: input.id,
  name: input.name,
  group: input.group,
  core: input.core,
  instruction: `【影片案例层】只借 ${input.name} 的场面机制：${input.core}。不得复制原片角色、台词、道具、场景、音乐、色彩、媒介或 IP 标志；不得覆盖导演语法和视觉圣经。`,
  filmCaseMechanics: {
    sceneMechanics: input.sceneMechanics,
    cameraUse: input.cameraUse || [],
    editingUse: input.editingUse || [],
    stagingUse: input.stagingUse || [],
    performanceUse: input.performanceUse || [],
    soundUse: input.soundUse || [],
    transferableUse: input.transferableUse || input.sceneMechanics
  },
  filmCaseBoundaries: {
    extractOnly: DEFAULT_EXTRACT_ONLY,
    forbiddenCopies: DEFAULT_FORBIDDEN_COPIES,
    conflictPolicy: DEFAULT_CONFLICT_POLICY
  }
});
