export const PERSPECTIVES = [
  { id: 'GOD_MODE', name: '上帝视角 (Third Person Omniscient)', prompt: '使用全知、超然的视角，揭示所有角色的隐秘思绪。叙述者凌驾于一切之上，知晓一切。' },
  { id: 'LIMITED', name: '限制视角 (Third Person Limited)', prompt: '严格锁定主角的视点。我们只知道他/她知道的事，只看到他/她看到的东西。信息量受限于主角的认知边界。' },
  { id: 'FIRST_PERSON', name: '第一人称 (First Person "I")', prompt: '使用「我」叙事。高度主观、偏颇、经过主角滤镜过滤的世界。允许不可靠叙述。' },
  { id: 'SCREENPLAY', name: '剧本视点 (Cinematic/Screenplay)', prompt: '使用现在时态。纯粹聚焦于视觉动作和对白。禁止内心独白。像摄影机一样只记录能被看见和听见的东西。' },
  { id: 'SECOND_PERSON', name: '第二人称 (Second Person "You")', prompt: '用「你」称呼读者/主角。沉浸式、审问式、带有指控感。拉近到令人不适的距离。' },
  { id: 'COLLECTIVE', name: '集体视点 (The Collective "We")', prompt: '使用「我们」叙事。群体的声音、合唱团、蜂巢意识。个体淹没在集体的嗡鸣中。' },
  { id: 'UNRELIABLE', name: '不可靠叙述 (Unreliable Narrator)', prompt: '第一人称，但叙述者在撒谎、困惑或失常。事实与叙述产生裂痕。让读者自行发现谎言。' },
  { id: 'STREAM', name: '意识流 (Stream of Consciousness)', prompt: '流动的、不间断的思维、记忆与感官输入。乔伊斯/伍尔夫式。意识碎片自由联想，无需逻辑衔接。' },
  { id: 'RETROSPECTIVE', name: '回溯视角 (Retrospective)', prompt: '一个年长的自我回望过去，带着智慧与悔恨。「那时候我不知道……」时间的双层结构：叙述时间与事件时间。' },
  { id: 'FLY_ON_WALL', name: '墙上的苍蝇 (Fly on the Wall)', prompt: '纯客观观察。不写思想、不写情感，只记录行为。纪录片式。冷静到近乎残忍。' },
  { id: 'OBJECT_POV', name: '物之眼 (Object POV)', prompt: '从无生命物体的视角讲述故事（如一把枪、一枚硬币、一面镜子）。人类成为物的背景和环境。' },
  { id: 'EPISTOLARY', name: '书信体/档案 (Epistolary)', prompt: '通过信件、日记、日志、邮件或档案构建故事。碎片化的叙事拼图，由读者自行组装全貌。' }
];

export const SENSORY_MODES = [
  { id: 'VISUAL', name: '视觉优先 (Visual Dominant)', prompt: '在包含所有感官的同时，优先强调光线、色彩与几何结构。用视觉隐喻描述声音和触感。画面感是第一语言。' },
  { id: 'AUDITORY', name: '听觉/节奏 (Auditory Dominant)', prompt: '在包含所有感官的同时，优先强调声音、节奏与沉默。通过听觉和场景的韵律感描述世界。文字本身要有音乐性。' },
  { id: 'TACTILE', name: '触觉/质感 (Tactile Dominant)', prompt: '在包含所有感官的同时，优先强调质感、温度与痛感。描写扎根于物理触感和材质真实。让读者的皮肤有反应。' },
  { id: 'PSYCHIC', name: '心理/氛围 (Psychic Dominant)', prompt: '在包含所有感官的同时，优先强调氛围、张力与不安。环境是内心状态的外化投射。空气本身要有压力。' },
  { id: 'KINETIC', name: '动能/速度 (Kinetic Dominant)', prompt: '在包含所有感官的同时，优先强调运动、速度与冲击。聚焦身体和物体在空间中的运动编排。句子本身要有加速度。' }
];
