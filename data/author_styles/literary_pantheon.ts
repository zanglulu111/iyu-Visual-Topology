import { defineAuthorCategory } from './helpers';

export const LITERARY_PANTHEON = defineAuthorCategory({
  id: 'sector_lit_giants',
  name: 'I. 文学神殿·意识与结构 (The Literary Pantheon)',
  defaults: {
    transform: {
      time: '允许主观时间、记忆回潮、句法延宕或结构迷宫介入，但 SOURCE 的事件骨架必须可回溯。',
      narrator: '叙述者拥有强烈文学意识，视角距离可以被句法、记忆、讽刺或知识结构调节。',
      psychology: '心理不直接解释，沉入意识流、感官触发、隐喻链、羞耻、自我辩护或审美控制。',
      sceneExpansion: '场景扩写重视物件、房间、文本、身体姿态与时间痕迹，让空间成为心理结构的外壳。',
      visualAssets: '视觉资产强调书房、旧纸张、室内光、镜面、走廊、私人器物和带有思想压力的空间。'
    }
  },
  items: [
    {
      id: 'joyce',
      name: '詹姆斯·乔伊斯 (James Joyce)',
      description: '终极意识流',
      styleTitle: '意识迷宫',
      example: '《尤利西斯》《芬尼根的守灵夜》',
      dna: '自由联想的意识碎片 + 语言变形 + 百科全书式细节 + 神话结构暗线 + 城市日常的精神宇宙。',
      coreRewriteLogic: '保留 SOURCE 骨架，把每个事件渲染为意识内部的连锁误触；外部行动不变，语言、记忆、身体感觉和城市细节在同一时刻互相穿透。',
      transform: {
        time: '同一现实时间内允许大量记忆、联想、词源、街景和身体感受叠入。',
        syntax: '长短句混用，允许意识跳跃与词语回声，但必须保证故事事实可被读者复原。'
      }
    },
    {
      id: 'proust',
      name: '普鲁斯特 (Marcel Proust)',
      description: '时光显微镜',
      styleTitle: '非自愿记忆',
      example: '《追忆似水年华》',
      dna: '绵延长句 + 由味觉/嗅觉触发的记忆 + 微小情绪分析 + 社交礼仪下的时间腐蚀。',
      coreRewriteLogic: '保留 SOURCE 骨架，把关键事件写成被某个气味、味道、织物或光线重新打开的时间层；冲突发生在当下，却由旧日感官决定其重量。',
      transform: {
        time: '用感官触发回忆，让过去不是背景，而是当下动作的隐形密度。',
        psychology: '放大一瞬间的迟疑、嫉妒、羞耻、期待和自我修正。'
      }
    },
    {
      id: 'woolf',
      name: '弗吉尼亚·伍尔夫 (Virginia Woolf)',
      description: '流动的波浪',
      styleTitle: '意识潮汐',
      example: '《达洛维夫人》',
      dna: '水波般句式 + 多人物意识滑移 + 瞬间印象大于情节解释 + 诗性内心独白。',
      coreRewriteLogic: '保留 SOURCE 骨架，把事件写成意识之间的潮汐；人物关系通过视角微移、钟声、街景、天气和未说出口的感受显影。',
      transform: {
        narrator: '视角可在人物之间柔性滑移，但每次滑移都必须服务于 SOURCE 的同一事件压力。',
        syntax: '句子具有波浪式推进，重视节奏、停顿、感官回声。'
      }
    },
    {
      id: 'faulkner',
      name: '威廉·福克纳 (William Faulkner)',
      description: '南方哥特呓语',
      styleTitle: '败坏家族回声',
      example: '《喧哗与骚动》',
      dna: '过去与现在混杂 + 绵长句法 + 家族衰败 + 地方记忆 + 难以摆脱的罪责。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突渲染为历史、血缘、地方和罪责的回声；现在发生的每个动作都像被旧日债务拖住。',
      transform: {
        time: '过去与现在可交错推进，但必须让当前事件仍然可辨。',
        visualAssets: '破败宅邸、尘土、湿热空气、旧照片、家族物件、荒废田地。'
      }
    },
    {
      id: 'kafka',
      name: '卡夫卡 (Franz Kafka)',
      description: '官僚梦魇',
      styleTitle: '官僚梦魇',
      example: '《审判》《城堡》',
      dna: '法律文书般严谨枯燥的语言 + 逻辑严密但本质荒谬的事件 + 主角的无力辩解 + 压抑的迷宫式空间。',
      coreRewriteLogic: '保留原故事骨架，将冲突渲染为冷静、日常、不可申诉的规则压迫；人物越试图解释，越被系统重新命名。',
      preserve: [
        '保留已选草稿的人物关系、关键事件和结局方向。',
        '保留 M7A/M7B 的意义裁决与实在余痕。',
        '保留世界法则；除非世界法则允许，不把荒诞写成鬼怪或超自然。'
      ],
      transform: {
        time: '时间线基本清楚，但让等待、延宕、传唤、手续循环制造压迫。',
        narrator: '冷静、克制、近乎行政记录的叙述者。',
        psychology: '少写激烈情绪，多写困惑、辩解、顺从、自我怀疑与羞耻。',
        sceneExpansion: '增加门、走廊、窗口、文件、编号、等待室、错误表格、无法解释的程序。',
        conflictRendering: '把原冲突翻译成规则、身份、文书、权限、审查、登记错误或无脸系统。',
        syntax: '句子精确平直，逻辑严密，却在严密中逐渐显出荒谬。',
        visualAssets: '狭窄空间、低天花板、冷光、纸张、印章、重复门牌、阴影中的办事窗口。'
      },
      mAxisLens: {
        M1: '保留已选 M1 的缺失本质，只把它显影为某种身份、资格、清白或存在记录的证明危机。',
        M2: '保留已选 M2 的真实穿刺，只把遭遇包装成通知、传唤、记录错误、流程事故或命名偏差等不可撤销的程序事件。',
        M4: '保留已选 M4 的阻断逻辑，只把阻断的可见外壳官僚化、无脸化、程序化。',
        M5: '保留已选 M5 的行动驱力，只把行动姿态染成申诉、等待、提交、解释、补证或反复进入同一流程。',
        M7B: '保留已选 M7B 的身体余痕，只让余痕带有等待、叫号、登记、编号、档案缺口等官僚残响。'
      },
      avoid: [
        '不要生成新故事方案。',
        '不要改变原大纲主事件。',
        '不要直接复刻《审判》《城堡》的桥段或标志性场景。',
        '不要把官僚荒诞写成普通阴谋论。'
      ]
    },
    {
      id: 'nabokov',
      name: '纳博科夫 (Vladimir Nabokov)',
      description: '美学暴君',
      styleTitle: '精密审美陷阱',
      example: '《洛丽塔》',
      dna: '华丽精确的辞藻 + 不可靠叙述 + 文字游戏 + 审美化处理禁忌 + 智力优越感。',
      coreRewriteLogic: '保留 SOURCE 骨架，把叙述者写成一个用美学、修辞和智力游戏替自己辩护的人；越漂亮的句子越暴露道德裂缝。',
      transform: {
        narrator: '允许不可靠叙述，让叙述者用优雅语言遮盖事实，同时让事实从细节里反咬。',
        syntax: '辞藻华丽但精确，句子像收藏品，也像证据。'
      }
    },
    {
      id: 'marquez',
      name: '马尔克斯 (G.G. Marquez)',
      description: '魔幻现实主义',
      styleTitle: '宿命家族神话',
      example: '《百年孤独》',
      dna: '预言式开头 + 超常现象日常化 + 宿命循环 + 家谱式叙事 + 热带政治寓言。',
      coreRewriteLogic: '保留 SOURCE 骨架，把个体事件写成家族、村镇或历史循环中的一次回返；若世界法则不允许超现实，则把奇迹降维为传闻、民俗、误记或集体记忆。',
      transform: {
        time: '允许预言式回望和循环结构，让结局像早已写在开头。',
        sceneExpansion: '增加家族物件、地方传闻、热带气候、集体记忆和政治阴影。'
      }
    },
    {
      id: 'borges',
      name: '博尔赫斯 (Jorge Luis Borges)',
      description: '迷宫与无限',
      styleTitle: '文献迷宫',
      example: '《小径分叉的花园》',
      dna: '伪文献 + 注脚感 + 时间、镜子、迷宫、图书馆 + 短小精密的哲学谜题。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成一份关于事件的文献、注释、索引或传闻；人物行动像进入一个由文本和选择构成的迷宫。',
      transform: {
        narrator: '叙述者可像编目员、译注者或研究者，但不得把故事改成论文。',
        sceneExpansion: '增加书库、目录、镜面、手稿、页码、边注和错置档案。'
      }
    },
    {
      id: 'calvino',
      name: '卡尔维诺 (Italo Calvino)',
      description: '轻盈的寓言',
      styleTitle: '晶体寓言',
      example: '《看不见的城市》',
      dna: '轻盈想象 + 数学结构美 + 寓言透明度 + 城市与感官细节的精确组合。',
      coreRewriteLogic: '保留 SOURCE 骨架，把每个关键事件变成一个清晰、轻盈、几何化的寓言结构；沉重主题以透明构型显影。',
      transform: {
        syntax: '句子清澈、轻盈、带结构感，避免情绪滥流。',
        visualAssets: '几何城市、悬浮路径、透明材质、精密模型、寓言性空间。'
      }
    },
    {
      id: 'eco',
      name: '埃科 (Umberto Eco)',
      description: '符号学侦探',
      styleTitle: '符号侦探迷宫',
      example: '《玫瑰的名字》',
      dna: '知识密度 + 符号误读 + 侦探外壳 + 宗教/历史档案 + 文献争夺。',
      coreRewriteLogic: '保留 SOURCE 骨架，把冲突写成对符号、证据、文本和权威解释权的争夺；真相不是被发现，而是被不同系统解释。',
      transform: {
        sceneExpansion: '增加档案、图书馆、仪式空间、手稿、门禁、术语误读与历史物证。',
        dialogue: '对白可带智性锋芒，但不得变成学术辩论。'
      }
    },
    {
      id: 'kundera',
      name: '米兰·昆德拉 (Milan Kundera)',
      description: '哲理的轻重',
      styleTitle: '轻重反讽',
      example: '《不能承受的生命之轻》',
      dna: '哲理插入 + 性与政治互文 + 对媚俗的讽刺 + 概念与日常并置。',
      coreRewriteLogic: '保留 SOURCE 骨架，把人物选择写成轻与重、身体与政治、私人欲望与历史姿态之间的反讽摆动。',
      transform: {
        narrator: '允许简短概念化旁白，但必须迅速落回人物动作和场景。',
        conflictRendering: '把冲突显影为私人生活与历史/公共姿态之间的互相污染。'
      }
    },
    {
      id: 'saramago',
      name: '萨拉马戈 (José Saramago)',
      description: '连绵口语河',
      styleTitle: '寓言长河',
      example: '《失明症漫记》',
      dna: '长段落 + 逗号推动对话 + 无姓名寓言感 + 群体灾变中的伦理测试。',
      coreRewriteLogic: '保留 SOURCE 骨架，把个体事件扩写为社会寓言；叙述像一条不断拐弯的口语长河，逼出人物在制度与恐惧中的选择。',
      transform: {
        syntax: '长句和逗号推进为主，少用花哨修饰，让叙述具有缓慢围困感。',
        narrator: '叙述者可以带讽刺性的旁观声音，但不直接总结意义。'
      }
    },
    {
      id: 'melville',
      name: '梅尔维尔 (Herman Melville)',
      description: '百科全书式史诗',
      styleTitle: '执念百科史诗',
      example: '《白鲸》',
      dna: '技术百科 + 圣经腔调 + 独白 + 航海/职业知识 + 宿命追逐。',
      coreRewriteLogic: '保留 SOURCE 骨架，把主角行动写成对某个对象、职业或真相的史诗性追逐；技术细节不是说明书，而是执念的仪式。',
      transform: {
        sceneExpansion: '围绕职业工具、工作流程、海/机器/道路等对象建立百科式细节。',
        syntax: '允许庄重长句与独白式推进，但不得拖垮 SOURCE 的关键节点。'
      }
    },
    {
      id: 'hugo',
      name: '雨果 (Victor Hugo)',
      description: '浪漫主义洪流',
      styleTitle: '道德洪流',
      example: '《悲惨世界》',
      dna: '宏大历史背景 + 善恶强光 + 激情排比 + 社会正义 + 题外史诗旁白。',
      coreRewriteLogic: '保留 SOURCE 骨架，把个人命运置于社会、法律、贫困、革命或历史洪流之下；冲突被放大为道德宇宙的碰撞。',
      transform: {
        narrator: '可使用宏大抒情旁白，但不得替角色完成意义裁决。',
        visualAssets: '广场、街垒、教堂、牢房、雨夜街道、群众阴影。'
      }
    },
    {
      id: 'dickens',
      name: '狄更斯 (Charles Dickens)',
      description: '雾都群像',
      styleTitle: '雾都道德剧',
      example: '《双城记》',
      dna: '人物怪癖 + 雾与尘 + 连载悬念 + 底层苦难 + 讽刺与同情并行。',
      coreRewriteLogic: '保留 SOURCE 骨架，把故事写成充满怪癖人物、城市雾气、阶级压力和连载式悬念的道德剧。',
      transform: {
        sceneExpansion: '增加街巷、店铺、雾气、账本、儿童、旧衣物和城市贫困的物性。',
        psychology: '用怪癖、口头禅、身体姿态和小动作显影人物内在裂缝。'
      }
    }
  ]
});
