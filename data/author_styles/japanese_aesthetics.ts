import { defineAuthorCategory } from './helpers';

export const JAPANESE_AESTHETICS = defineAuthorCategory({
  id: 'sector_jp_lit',
  name: 'V. 日本美学·物哀与异色 (Japanese Aesthetics)',
  defaults: {
    transform: {
      time: 'SOURCE 因果不变，但允许以季节、仪式、都市日常、停顿或推理线索重组情绪推进。',
      narrator: '叙述者克制、敏感，常通过礼貌距离、洁净细节或异色感官制造压力。',
      psychology: '人物心理通过沉默、礼节、微小动作、身体羞耻、物件摆放、料理和季节变化显影。',
      conflictRendering: '把原冲突染成物哀、孤独、洁癖式美感、社会礼仪、异常欲望或日常推理压力。',
      visualAssets: '雪、榻榻米、便利店、车站、窄屋、茶具、料理、霓虹、玻璃、庭院和过于安静的房间。'
    }
  },
  items: [
    {
      id: 'murakami',
      name: '村上春树 (Haruki Murakami)',
      description: '都市冷感',
      styleTitle: '都市空井',
      example: '《挪威的森林》',
      dna: '爵士乐/品牌/料理 + 枯井和失踪感 + 礼貌疏离 + 小资虚无 + 平静超现实边缘。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写进都市单身生活、音乐、料理、失踪感和礼貌疏离中；若有超现实感，必须像日常裂缝一样低声出现。',
      transform: {
        sceneExpansion: '增加做饭、唱片、酒吧、地铁、井状空间、电话和空房间。',
        syntax: '平静、直接、略带孤独的口吻。'
      }
    },
    {
      id: 'kawabata',
      name: '川端康成 (Yasunari Kawabata)',
      description: '新感觉派',
      styleTitle: '雪色留白',
      example: '《雪国》',
      dna: '俳句留白 + 洁净视觉 + 徒劳感 + 传统美学 + 欲望的寒冷。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物欲望写成雪、光、皮肤、器物和无法抵达的美；冲突在留白里变冷。',
      transform: {
        syntax: '句子清冷、短而有余白，避免解释过满。',
        visualAssets: '雪景、火车窗、温泉、茶室、镜面、白色织物、冷光。'
      }
    },
    {
      id: 'mishima',
      name: '三岛由纪夫 (Yukio Mishima)',
      description: '金阁寺之美',
      styleTitle: '毁灭之美',
      example: '《金阁寺》',
      dna: '古典坚硬文体 + 肉体与死亡 + 暴烈毁灭美学 + 复杂心理推演。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成美、肉体、耻辱和毁灭欲之间的紧绷结构；人物越追求完美，越靠近破坏。',
      transform: {
        psychology: '精确推演羞耻、嫉妒、自卑、崇拜和毁灭冲动。',
        visualAssets: '金属光、寺院、肌肉、军装感、烈日、火、刀刃般构图。'
      }
    },
    {
      id: 'dazai',
      name: '太宰治 (Osamu Dazai)',
      description: '无赖派',
      styleTitle: '自毁告白',
      example: '《人间失格》',
      dna: '第一人称自卑 + 讨好恐惧 + 自嘲 + 毁灭性自我剖析 + 无赖气。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成一个人用自嘲、讨好和失败告白维持体面，又不断把自己交给毁灭。',
      transform: {
        narrator: '可用自我揭短式声音，但不得把故事改成单纯独白。',
        psychology: '重点写微笑、道歉、讨好动作和突然失控后的空白。'
      }
    },
    {
      id: 'rampo',
      name: '江户川乱步 (Edogawa Rampo)',
      description: '变格推理',
      styleTitle: '异色密室',
      example: '《人间椅子》',
      dna: '猎奇感官 + 幽闭空间 + 华丽腐烂辞藻 + 异常窥视 + 变格推理。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突染成窥视、密室、身体感官和异常欲望；恐怖来自日常家具与空间突然变得不可信。',
      transform: {
        sceneExpansion: '增加箱、椅、镜、暗门、走廊、皮革、手指触感和闭塞空气。',
        conflictRendering: '把阻断显影为密闭空间、窥视关系、伪装身份或被看见的羞耻。'
      }
    },
    {
      id: 'higashino',
      name: '东野圭吾 (Keigo Higashino)',
      description: '社会派推理',
      styleTitle: '情感机关',
      example: '《白夜行》',
      dna: '平实白描 + 犯罪动机源于深情 + 日常细节 + 逻辑反转 + 社会现实。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件组织成日常线索逐渐回收的情感机关；反转不改变结局方向，只改变前因的可见意义。',
      transform: {
        time: '按线索递进组织信息，结尾让早前细节回收。',
        syntax: '白描、清楚、节制，避免炫技。'
      }
    },
    {
      id: 'natsume',
      name: '夏目漱石 (Natsume Soseki)',
      description: '明治知识分子',
      styleTitle: '知识分子闲讽',
      example: '《我是猫》',
      dna: '旁观视角讽刺 + 知识分子牢骚 + 悠闲散文 + 东西文化冲突。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成知识分子的自尊、滑稽、文化不适和现代性焦虑；旁观越轻松，讽刺越锋利。',
      transform: {
        narrator: '可使用旁观式、半幽默的叙述距离。',
        sceneExpansion: '增加书房、茶、报纸、会客、课堂、邻里与礼貌争执。'
      }
    }
  ]
});
