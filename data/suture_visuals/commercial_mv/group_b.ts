import type { SutureStyleItem } from '../../suture_styles';

const COMMERCIAL_MV_GROUP_B = '5B. 商业与 MV：嘻哈极繁、流行奇观与几何舞台';

export const COMMERCIAL_MV_GROUP_B_STYLES: SutureStyleItem[] = [
  {
    id: 'vis_h_williams',
    name: '海普·威廉姆斯 (Hype Williams)',
    group: COMMERCIAL_MV_GROUP_B,
    core: '代表作：Tupac《California Love》/ Missy Elliott《The Rain》',
    instruction: '【海普·威廉姆斯导演骨架】嘻哈未来主义、物质宣言、超广角自我表现和权力舞台。基础分镜只使用低角度、群体展示和财富/身份姿态，不复制鱼眼、金链、香槟、黑光灯或银色皮肤。',
    directorGrammar: {
      camera: [
        '用超低角度、近距离和广角压迫感放大表演者的存在',
        '镜头围绕身体、车辆、群体和产品式物件建立权力中心',
        '特写落在手势、饰物、嘴、眼神、舞步或身份道具的使用上'
      ],
      editing: [
        '剪辑跟随 rap 节拍和身体姿态，强调进入、展示、回应和再展示',
        '场面切换像身份宣言的连发，不做散乱堆砌',
        '物质符号必须表达权力、欲望或社群身份'
      ],
      staging: [
        '表演者位于摄影棚、荒地、街头、豪车、舞台或群体中央',
        '群体围绕主角形成声望和能量场',
        '空间设计服务自我神话，而不是纯消费陈列'
      ],
      performance: [
        '表演正面、强势、充满身体节拍',
        '歌词或歌曲是主声道，表情和手势承接押韵能量',
        '自信可以夸张，但必须形成角色姿态'
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        '财富物件是身份和权力语言',
        '身体姿态建立社群和自我神话',
        '未来主义必须来自文化投射，不是随机科幻',
        '极繁展示要有节拍秩序'
      ],
      allowedDevices: ['广角自我表现', '物质宣言', '群体声望', '嘻哈未来主义', '节拍展示'],
      bannedCliches: ['鱼眼/金链/香槟/豪车乱入', '银色皮肤污染基础分镜', '物质崇拜无角色功能', '节拍剪辑混乱']
    },
    voiceTopology: {
      silence: 0.15,
      dialogue: 0,
      monologue: 0,
      voiceover: 0,
      timingRules: [
        '歌曲/rap 是主声道，不额外插入解释对白',
        '切点跟随鼓点、押韵和手势落点',
        '环境拟音只在舞步、车辆或物件展示时点出'
      ],
      soundMotifs: ['重低音', '鼓点', '合成器声', '群体呼应', '饰物或车辆轻响']
    },
    visualSkin: {
      palette: ['高饱和彩棚色', '银色金属', '黑光灯色', '豪华暖色'],
      lighting: ['摄影棚彩光', '黑光灯', '高反差边光', '舞台硬光'],
      texture: ['漆皮', '金属饰品', '豪车中网', '香槟泡沫', '油亮皮肤'],
      motifs: ['超广角表演', '豪车', '金链', '群体舞台', '彩色摄影棚'],
      contaminationRisk: 'high'
    }
  },
  {
    id: 'vis_lachapelle',
    name: '拉查佩尔 (David LaChapelle)',
    group: COMMERCIAL_MV_GROUP_B,
    core: '代表作：Christina Aguilera《Dirrty》/ Elton John《This Train Don’t Stop There Anymore》',
    instruction: '【拉查佩尔导演骨架】媚俗狂欢、消费神话、肉欲舞台和波普讽刺。基础分镜只使用过剩构图、群体姿态和大众消费反讽，不复制糖果色、快餐包装、宗教符号或充气娃娃皮肤。',
    directorGrammar: {
      camera: [
        '镜头正面迎向过量场面，让人物像消费神话中的雕像',
        '用夸张近景和群体构图强调肉身、商品和欲望的互相展示',
        '特写落在表情、汗水、包装、舞步或仪式性消费动作上'
      ],
      editing: [
        '快节奏场面按诱惑、堆叠、过载、反讽落点推进',
        '奇观越艳丽，越要暴露消费或名声的荒诞',
        '宗教/消费/流行符号只能抽象成构图关系，不硬塞标志物'
      ],
      staging: [
        '街头、摄影棚、洗车场、宴会、舞台或商店成为过剩剧场',
        '人物互相观看、出售、消费和表演',
        '群体姿态像广告海报，但要有讽刺功能'
      ],
      performance: [
        '表演高能、夸张、带自觉的性感和滑稽',
        '歌曲主导，人物用眼神和身体挑衅观众',
        '过剩中要保留讽刺，不只是热闹'
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        '媚俗可以成为消费主义的镜子',
        '肉欲和商品互相模仿',
        '过剩不是乱，而是讽刺的放大器',
        '流行庆典背后要有对名声或欲望的拆解'
      ],
      allowedDevices: ['波普过剩', '消费反讽', '群体肉身', '怪诞庆典', '广告海报化'],
      bannedCliches: ['糖果色/宗教符号/快餐包装乱入', '媚俗皮肤污染基础分镜', '只剩性感展示', '过载无讽刺']
    },
    voiceTopology: {
      silence: 0.12,
      dialogue: 0,
      monologue: 0,
      voiceover: 0,
      timingRules: [
        '流行歌曲主导，画面跟随副歌和重拍膨胀',
        '人群欢呼、快门声和拟音可制造名声压力',
        '无额外对白，避免削弱 MV 强度'
      ],
      soundMotifs: ['强劲流行乐', '快门声', '人群欢呼', '舞步声', '商品包装声']
    },
    visualSkin: {
      palette: ['超饱和波普色', '糖果色', '油画式暖色', '高对比肤色'],
      lighting: ['戏剧性彩光', '摄影棚强光', '广告式硬光', '舞台光'],
      texture: ['糖果塑料', '汗湿肌肉', '街头涂鸦', '快餐包装', '宗教图像'],
      motifs: ['群体狂欢', '消费物件', '波普舞台', '肉身展示', '讽刺海报'],
      contaminationRisk: 'high'
    }
  },
  {
    id: 'vis_brthr',
    name: 'BRTHR',
    group: COMMERCIAL_MV_GROUP_B,
    core: '代表作：Travis Scott《Goosebumps》/ The Weeknd《Party Monster》',
    instruction: '【BRTHR 导演骨架】信息过载、碎裂意识流、混合媒介和高兴奋快切。基础分镜只使用过载节奏、媒介跳切和主观兴奋，不复制 VHS 故障、霓虹、跑车、UI 弹窗或 3D 模型皮肤。',
    directorGrammar: {
      camera: [
        '镜头快速靠近、甩动、旋转或突然切换尺度，模拟过载感知',
        '主体可在街头、房间、车内、舞台和虚拟空间间跳跃',
        '特写落在眼睛、嘴、手势、屏幕、灯光或当前物件的感官冲击上'
      ],
      editing: [
        '极速快切和混合媒介跳切服务兴奋、幻觉和歌词节拍',
        '每个媒介切换应改变能量、记忆或空间层级',
        '过载中仍要保留主角、动作方向和节拍核心'
      ],
      staging: [
        '人物像在信息流中漂移，空间不断被音乐刷新',
        '群体、车辆、屏幕、灯光和城市片段形成感官通道',
        '现实和后期图层互相侵入，但不能替代当前动作'
      ],
      performance: [
        '表演高能、迷幻、带自我展示和短暂失神',
        '歌曲主导，身体反应跟随 beat 和 ad-lib',
        '人物状态像被信息推着走'
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        '信息过载是一种主观时间结构',
        '混合媒介代表感知碎片，不是素材拼贴',
        '快切必须服务音乐和兴奋曲线',
        '过载之后要留下失控或空洞感'
      ],
      allowedDevices: ['极速快切', '混合媒介', '信息过载', '主观兴奋', '媒介跳层'],
      bannedCliches: ['VHS/霓虹/跑车/UI 弹窗乱入', '故障皮肤污染基础分镜', '快切无节拍', '过载导致主体不可读']
    },
    voiceTopology: {
      silence: 0.08,
      dialogue: 0,
      monologue: 0,
      voiceover: 0,
      timingRules: [
        '歌曲、ad-lib 和重低音是唯一主轴',
        '声音采样与画面故障切点同步',
        '无对白，避免打断过载节奏'
      ],
      soundMotifs: ['Trap 重低音', 'Glitch 噪音', '采样尖叫', '倒放声', '节拍骤停']
    },
    visualSkin: {
      palette: ['霓虹粉紫', 'VHS 漏光色', '高饱和夜色', '赛博杂色'],
      lighting: ['闪烁霓虹', '车灯', '屏幕光', '夜店彩光'],
      texture: ['胶片漏光', 'VHS 故障', '3D 渲染模型', 'UI 弹窗', '故障线条'],
      motifs: ['跑车', '霓虹灯管', '屏幕叠层', '混合媒介', '夜间表演'],
      contaminationRisk: 'high'
    }
  },
  {
    id: 'vis_cole_bennett',
    name: 'Cole Bennett',
    group: COMMERCIAL_MV_GROUP_B,
    core: '代表作：Juice WRLD《Lucid Dreams》/ Lyrical Lemonade 系列',
    instruction: '【Cole Bennett 导演骨架】网络原生、DIY 后期、草根嘻哈活力和卡通恶作剧。基础分镜只使用轻松表演、手绘式互动和互联网情绪，不复制柠檬水、涂鸦、彩色饮料或发光眼皮肤。',
    directorGrammar: {
      camera: [
        '用广角近距离和活力运动贴近表演者',
        '镜头围绕主角动作、手势、脸部和小道具制造玩笑感',
        '空间可以简单，但要让后期互动和身体表演有落点'
      ],
      editing: [
        '剪辑轻快，后期涂写和动作切点互相配合',
        '视觉恶作剧应回应歌词、情绪或表演动作',
        'DIY 感是亲密和活力，不是粗糙随便'
      ],
      staging: [
        '街头、房间、草地、棚拍或简易布景作为年轻人自我展示场',
        '道具和特效围绕主角情绪放大',
        '镜头世界像可以被随手涂改的笔记本'
      ],
      performance: [
        '表演轻松、年轻、直视镜头，带互联网玩笑感',
        '歌曲主导，身体动作和表情承接歌词',
        '忧伤也可以被卡通化，但不能抹掉真实情绪'
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        '网络原生美学把情绪变成可涂写的表面',
        '草根感来自距离近和反应快',
        '后期恶作剧必须回应人物状态',
        '明亮不是浅薄，仍要保留年轻人的脆弱'
      ],
      allowedDevices: ['DIY 后期', '手绘互动', '广角表演', '网络原生', '卡通恶作剧'],
      bannedCliches: ['柠檬水/彩色饮料/发光眼乱入', '涂鸦皮肤污染基础分镜', '特效无动作落点', '把忧伤消成玩笑']
    },
    voiceTopology: {
      silence: 0.12,
      dialogue: 0,
      monologue: 0,
      voiceover: 0,
      timingRules: [
        '歌曲人声清晰置前',
        '拟音特效跟随手绘或卡通动作',
        '不额外插对白'
      ],
      soundMotifs: ['SoundCloud rap', '卡通拟音', '手绘弹跳声', '低频鼓点', '轻快 ad-lib']
    },
    visualSkin: {
      palette: ['明亮彩色', '涂鸦色', '白云蓝天', '网络流行色'],
      lighting: ['自然日光', '棚拍平光', '户外明亮光', 'DIY 后期光效'],
      texture: ['卡通涂鸦', '彩色瓶子', '染色头发', '发光眼', '云朵天空'],
      motifs: ['直视镜头表演', '手绘特效', '简单布景', '年轻人道具', '网络符号'],
      contaminationRisk: 'high'
    }
  },
  {
    id: 'vis_director_x',
    name: 'Director X',
    group: COMMERCIAL_MV_GROUP_B,
    core: '代表作：Drake《Hotline Bling》/ Rihanna《Work》',
    instruction: '【Director X 导演骨架】几何舞台、身体节奏、装置空间和流行可读性。基础分镜只使用光阵列、舞台几何和表演动线，不复制 LED 隧道、大理石地板或冷色布景皮肤。',
    directorGrammar: {
      camera: [
        '用正面、侧面和轴线构图明确舞台几何',
        '镜头让身体动作和空间线条互相咬合',
        '特写用于手势、鞋底、舞步、脸部节奏和灯光触发动作'
      ],
      editing: [
        '剪辑干净，切点跟随舞步、灯光变化和歌曲结构',
        '空间变化不复杂化叙事，而强化节奏秩序',
        '重复构图通过表演差异产生变化'
      ],
      staging: [
        '表演者在极简装置、光带、台阶或几何房间中移动',
        '舞者和主角的关系通过队形、距离和同步度显示',
        '空间像节拍器，控制身体速度'
      ],
      performance: [
        '表演自信、清楚、可模仿，强调标志性动作',
        '歌曲主导，舞步承担叙事',
        '表演者与镜头保持明确互动'
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        '几何空间让流行表演变得可记忆',
        '舞步是角色和品牌识别',
        '灯光阵列必须服务身体节奏',
        '极简空间靠动作变化维持吸引力'
      ],
      allowedDevices: ['几何舞台', '光阵列节奏', '标志性舞步', '极简装置', '队形同步'],
      bannedCliches: ['LED 隧道/大理石地板乱入', '冷色皮肤污染基础分镜', '空间空漂亮', '舞步无切点']
    },
    voiceTopology: {
      silence: 0.18,
      dialogue: 0,
      monologue: 0,
      voiceover: 0,
      timingRules: [
        '歌曲和舞步摩擦声主导',
        '灯光变化可以有轻微电子提示音',
        '不加入对白或旁白'
      ],
      soundMotifs: ['舞曲节奏', '鞋底摩擦', '灯光电流声', '手拍节拍', '空间回声']
    },
    visualSkin: {
      palette: ['冷色光阵列', '极简白', '高对比色块', '舞台蓝紫'],
      lighting: ['LED 灯带', '光隧道', '硬边舞台光', '反光地板光'],
      texture: ['反光大理石', 'LED 灯带', '极简墙面', '人影轮廓', '装置表面'],
      motifs: ['几何房间', '舞台装置', '光隧道', '标志性舞步', '极简台阶'],
      contaminationRisk: 'high'
    }
  },
  {
    id: 'vis_meyers',
    name: '戴夫·迈耶斯 (Dave Meyers)',
    group: COMMERCIAL_MV_GROUP_B,
    core: '代表作：Kendrick Lamar《HUMBLE.》/ Billie Eilish《bad guy》',
    instruction: '【戴夫·迈耶斯导演骨架】商业超现实、魔术转场、巨型奇观和流行图像梗。基础分镜只使用不可能转场、视觉笑点和奇观递进，不复制 CGI 云端、浮空建筑、鱼眼或波普色皮肤。',
    directorGrammar: {
      camera: [
        '镜头以强概念图像开场，迅速建立一个可被记住的视觉命题',
        '鱼眼、巨物或透视夸张只能作为空间关系，而不是固定皮肤',
        '特写用于表演者态度、道具变形、魔术触发点或视觉笑料落点'
      ],
      editing: [
        '转场像魔术，前后动作、姿态或歌词形成匹配',
        '奇观段落按概念建立、升级、反转、收口组织',
        '每个视觉梗都要响应歌词、态度或品牌信息'
      ],
      staging: [
        '人物在不可能空间、舞台、街头、房间或巨大物件中切换',
        '群体、道具和环境成为流行文化梗的执行者',
        '空间逻辑可以荒诞，但镜头目的必须清楚'
      ],
      performance: [
        '表演强势、幽默、带广告级精确姿态',
        '歌曲主导，台词桥段只用于梗或态度',
        '人物像在操控一连串视觉魔术'
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        '商业超现实要有概念钩子',
        '奇观必须响应歌词或品牌核心',
        '魔术转场是信息压缩工具',
        '流行梗需要明确落点'
      ],
      allowedDevices: ['魔术转场', '巨型奇观', '视觉梗', '概念图像', '歌词响应'],
      bannedCliches: ['CGI 云端/浮空建筑/鱼眼乱入', '波普色污染基础分镜', '奇观无概念', '转场只炫技']
    },
    voiceTopology: {
      silence: 0.16,
      dialogue: 0.08,
      monologue: 0,
      voiceover: 0.02,
      timingRules: [
        '歌曲主导，少量对白只能作为桥段或笑点',
        'Whoosh 和魔术声跟随转场触发',
        '节拍切点要配合视觉梗落点'
      ],
      soundMotifs: ['流行节拍', '转场 Whoosh', '夸张拟音', '群体反应', '节拍骤停']
    },
    visualSkin: {
      palette: ['明亮波普色', 'CGI 奇幻色', '高对比肤色', '广告级纯色'],
      lighting: ['棚拍强光', 'CGI 环境光', '鱼眼夸张光', '舞台彩光'],
      texture: ['绿幕云端', '浮空建筑', '卡通化实物', '光滑道具', '数字合成边缘'],
      motifs: ['巨物', '不可能房间', '魔术转场', '视觉梗', '波普群像'],
      contaminationRisk: 'high'
    }
  },
  {
    id: 'vis_kahn',
    name: '约瑟夫·卡恩 (Joseph Kahn)',
    group: COMMERCIAL_MV_GROUP_B,
    core: '代表作：Taylor Swift《Bad Blood》/ Britney Spears《Toxic》',
    instruction: '【约瑟夫·卡恩导演骨架】极速未来、动作大片语法、动漫化节奏和流行态度。基础分镜只使用动作目标、队伍展示和技术速度，不复制摩托、全息、乳胶、赛博霓虹或镜头光晕皮肤。',
    directorGrammar: {
      camera: [
        '用推拉、旋转、低角度和动态近景制造动作大片速度',
        '角色队伍、武器、车辆或科技装置必须有目标和任务关系',
        '特写用于 one-liner 态度、装备启动、眼神和动作触发'
      ],
      editing: [
        '剪辑快速、硬、以进入、攻击、展示、反击和爆点组织',
        '动漫化节奏服务姿态和动作升级',
        '科技奇观必须改变战斗、逃离或品牌信息'
      ],
      staging: [
        '人物像流行文化战队，在训练场、走廊、车辆、实验室或战场中展示能力',
        '群体站位强调阵营和角色差异',
        '每个酷姿态都要有任务语义'
      ],
      performance: [
        '表演酷、快、带挑衅和 one-liner 能量',
        '歌曲主导，少量台词用于态度展示',
        '人物自信但不能只摆拍'
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        '流行明星被动作片机制神话化',
        '速度和技术感必须服务任务',
        '团队展示是身份分类，不只是群像摆拍',
        '酷感要有动作结果'
      ],
      allowedDevices: ['动作大片节奏', '科技展示', '战队姿态', '动漫化切点', 'one-liner'],
      bannedCliches: ['摩托/全息/乳胶/霓虹乱入', '镜头光晕污染基础分镜', '酷姿态无任务', '动作地理混乱']
    },
    voiceTopology: {
      silence: 0.12,
      dialogue: 0.08,
      monologue: 0,
      voiceover: 0.02,
      timingRules: [
        '歌曲和动作音效主导',
        '对白只允许短促酷词或任务提示',
        '爆炸、激光和切点要与歌曲结构同步'
      ],
      soundMotifs: ['电子流行节拍', '爆炸声', '激光声', '机械启动', '动作 Whoosh']
    },
    visualSkin: {
      palette: ['赛博霓虹', '抛光金属色', '冷蓝红对比', '乳胶黑'],
      lighting: ['镜头光晕', '科技屏幕光', '硬边动作光', '爆炸背光'],
      texture: ['抛光金属', '重型摩托', '全息投影', '反光乳胶', '动感线条'],
      motifs: ['战队走廊', '科技武器', '摩托', '未来训练场', '爆炸背景'],
      contaminationRisk: 'high'
    }
  }
];
