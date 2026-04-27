
import { SutureStyleItem } from '../suture_styles';

const EASTERN_FIRST_GROUP = "东方第一组：作者电影骨架";

const EASTERN_FIRST_GROUP_CARDS: Record<string, Partial<SutureStyleItem>> = {
  vis_wkw: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "前景遮挡式窥视构图，让人物像被空间偷看",
        "极近距离拍摄身体局部，把情绪落在眼睛、手、嘴唇、衣料、道具边缘",
        "人物与空间被墙、门框、玻璃、阴影或人群切割",
        "主观视线与客观空间错位，观众常比人物更晚或更早理解关系"
      ],
      editing: [
        "主观记忆式碎片剪辑，事件按情绪压力浮现，而不只按因果排序",
        "抽帧、慢门或重复动作制造时间涂抹感",
        "用回环动作和相似构图制造情绪反复",
        "在关键情绪处延宕，让镜头停在动作之后的余味里"
      ],
      staging: [
        "物理距离很近，情感距离很远",
        "人物被困在狭窄空间、遮挡后或无法真正抵达对方的位置",
        "环境不是背景，而是情绪容器；空间会替人物保存没说出口的话"
      ],
      performance: [
        "人物避免直接表达真实情感",
        "动作克制，心理过量",
        "沉默、停顿和微小动作先于台词暴露关系"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "用时间、日期、数量、距离、剩余量去量化抽象情感",
        "把抽象情绪投射到当前故事原生物件上，而不是搬运导演前作物件",
        "用事后回忆或自我辩解制造主观偏差",
        "让人物说偏离问题的话，暴露真正的问题"
      ],
      allowedDevices: ["数字化情绪", "时间戳", "重复句式", "物件承载情感", "错位回答"],
      bannedCliches: ["凤梨罐头", "0.01公分原句", "无脚鸟", "直接引用知名台词", "照搬香港都市雨夜标志物"]
    },
    voiceTopology: {
      silence: 0.4,
      dialogue: 0.3,
      monologue: 0.6,
      voiceover: 0.1,
      timingRules: [
        "先让动作、环境声和物件状态说话，再让独白补上心理偏差",
        "关键对白常在镜头末端进入，像切开沉默的一句话",
        "沉默用于拉开物理近与心理远的距离",
        "独白/旁白出现时应改变观众对画面的理解，而不是解释画面"
      ],
      soundMotifs: ["循环性环境声", "重复的时间性声音", "贴近身体的呼吸、衣料、脚步或物件摩擦", "画外声与画内动作错位"]
    },
    visualSkin: {
      palette: ["冷绿", "暖黄", "霓虹", "高饱和情绪色"],
      lighting: ["城市夜光", "玻璃反射", "潮湿环境光", "狭窄室内混合光"],
      texture: ["雨水", "烟雾", "镜面", "斑驳墙皮", "玻璃水痕"],
      motifs: ["时钟", "玻璃", "狭窄室内", "城市招牌", "走廊", "镜中倒影"],
      contaminationRisk: "high"
    }
  },
  vis_kurosawa: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "长焦压缩群像关系，让人物被同一伦理压力压在一个平面内",
        "几何化人物站位，用横列、纵深和斜线显示权力结构",
        "天气、尘土、旗帜、衣摆和群体移动参与构图",
        "远景建立社会秩序，近景承接道德选择的身体反应"
      ],
      editing: [
        "静默积蓄后突然爆发，爆发必须有清晰动作因果",
        "反应镜头带有道德重量，不能只做情绪装饰",
        "用明确的方向、速度和空间反馈保持动作可读",
        "在群体调度中保持中心压力点不断迁移"
      ],
      staging: [
        "人物被放进社会秩序、阶级秩序和自然压力中",
        "群体位置显示权力结构，个人行动必须冲撞这个结构",
        "空间常像审判场，人物站位就是立场"
      ],
      performance: [
        "身体姿态强烈，情绪通过步伐、跪坐、拔刀、转身和凝视外化",
        "沉默后爆发，爆发后留下羞耻或代价",
        "恐惧、正义感和屈辱不靠解释，而靠身体重量呈现"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "个人困境上升为伦理审判",
        "空间秩序映射社会秩序",
        "用自然压力放大人性选择",
        "让动作结果成为道德立场的证据"
      ],
      allowedDevices: ["道德困局", "群体几何", "静爆对比", "仪式性动作", "自然压力"],
      bannedCliches: ["武士符号滥用", "空泛英雄宣言", "把天气当装饰", "无因果的动作爆发"]
    },
    voiceTopology: {
      silence: 0.45,
      dialogue: 0.45,
      monologue: 0.05,
      voiceover: 0.05,
      timingRules: [
        "对白在道德冲突处出现，不承担普通解释说明",
        "沉默负责积压，爆发负责裁决",
        "群体声音可形成压力，但必须服务于站位和动作",
        "台词之后要有身体选择或空间反馈"
      ],
      soundMotifs: ["风、雨、脚步、马蹄或群体移动声", "突然的静止", "武器、衣料、泥土或木结构的撞击声"]
    },
    visualSkin: {
      palette: ["黑白高反差", "泥土色", "战场灰", "旗帜与血色点状强调"],
      lighting: ["自然天光", "暴雨漫射", "尘土遮光", "强风中的明暗摆动"],
      texture: ["泥泞", "盔甲", "雨水", "风中旗帜", "尘土"],
      motifs: ["群体站位", "旗帜", "城门", "坡地", "雨幕"],
      contaminationRisk: "medium"
    }
  },
  vis_ozu: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "低机位静态构图，让人物被家庭空间的高度和礼节固定",
        "正面或轻微错位的人物关系，减少炫技机位",
        "空房间、走廊、门口和生活器物承接情绪余波",
        "重复相似构图，让时间流逝以差异显现"
      ],
      editing: [
        "省略关键戏剧高潮，转而拍高潮之后的秩序恢复",
        "用日常间隙连接场景，不把每个转折都解释清楚",
        "以稳定节拍组织家庭变化，让小动作承担大变化",
        "场景切换像生活继续，不像剧情按钮"
      ],
      staging: [
        "人物被家庭秩序、礼节座位和门框位置固定",
        "空间变化比情绪宣言更重要",
        "缺席的人或空出来的位置常比在场者更有压力"
      ],
      performance: [
        "极度克制，礼貌遮住伤口",
        "微笑、低头、端杯、停顿承担情绪",
        "人物常说日常小事，真正的裂缝留在动作之后"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "重大变化通过日常细节显现",
        "不拍崩溃，拍崩溃之后的秩序恢复",
        "缺席比宣言更有力",
        "家庭礼貌是压抑情绪的表面结构"
      ],
      allowedDevices: ["省略", "日常重复", "空场余波", "礼貌性回避", "生活器物承压"],
      bannedCliches: ["把克制写成无事发生", "过度解释家庭情绪", "机械复制固定道具", "用煽情台词替代停顿"]
    },
    voiceTopology: {
      silence: 0.55,
      dialogue: 0.4,
      monologue: 0.02,
      voiceover: 0.03,
      timingRules: [
        "对白多为日常表面，真实情绪藏在停顿里",
        "空镜承担场景换气和家庭余波",
        "不靠独白解释内心",
        "沉默应保留礼貌外壳下的压力"
      ],
      soundMotifs: ["室内底噪", "远处交通或生活声", "器物轻响", "短暂沉默"]
    },
    visualSkin: {
      palette: ["低饱和日常色", "榻榻米暖木", "生活器物点色"],
      lighting: ["自然室内光", "窗边柔光", "均匀低反差光"],
      texture: ["榻榻米", "木门", "茶杯", "布料", "空房间"],
      motifs: ["走廊", "门框", "茶具", "空座位", "街角或远处交通"],
      contaminationRisk: "medium"
    }
  },
  vis_hou: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "远距离固定长镜头，让人物在空间中自然生长",
        "画框中的画框，门、窗、桌席和人群形成观察层",
        "镜头不急于靠近人物，让空间先说话",
        "纵深空间保留历史和生活的残余信息"
      ],
      editing: [
        "低干预剪辑，让事件在镜头内部发生",
        "散点式段落连接，场景像记忆残片而非戏剧节点",
        "不强调转折按钮，强调时间慢慢磨损人物",
        "允许信息含混，但不能让关系压力含混"
      ],
      staging: [
        "人物常被门、窗、桌席和人群关系包围",
        "历史压力沉入日常动作和空间习惯中",
        "空间是记忆的容器，不只是事件背景"
      ],
      performance: [
        "生活流表演，动作自然发生，不被镜头逼迫",
        "对白可含混、重叠、听不全",
        "情绪不被放大，只在姿态、停顿和空间位置里沉淀"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "历史压力沉入日常生活",
        "不解释命运，只让人物在时间里被磨损",
        "场景像记忆残片而非戏剧节点",
        "让空间保留人物无法说清的过去"
      ],
      allowedDevices: ["长镜头凝视", "生活流", "历史余波", "含混信息", "空间记忆"],
      bannedCliches: ["把慢等同于空", "用旁白补历史说明", "把人物变成观点发言人", "用特写强迫情绪"]
    },
    voiceTopology: {
      silence: 0.65,
      dialogue: 0.35,
      monologue: 0.02,
      voiceover: 0.05,
      timingRules: [
        "声音可先于人物被理解",
        "对白不必每句清楚，但关系压力必须清楚",
        "环境声维持时间质感",
        "沉默应像生活自然流过，而不是刻意停顿"
      ],
      soundMotifs: ["远处人声", "风、树、饭桌、街巷底噪", "空间混响", "生活动作声"]
    },
    visualSkin: {
      palette: ["自然低饱和", "旧木色", "尘土灰", "生活色点缀"],
      lighting: ["自然光", "室内漏光", "窗门分割光"],
      texture: ["空气灰尘", "木桌", "旧墙", "饭菜蒸汽", "街巷湿痕"],
      motifs: ["门框", "窗", "饭桌", "街巷", "树影"],
      contaminationRisk: "medium"
    }
  },
  vis_yang: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "中远距离冷静观察，让人物被城市和制度空间定位",
        "玻璃、窗、门框制造社会隔层和沟通阻断",
        "城市空间切割人物关系，人物常被框在系统网格中",
        "多人物关系通过位置、视线和距离显现"
      ],
      editing: [
        "多线并置但逻辑清楚",
        "冷静推进认知差，让观众逐渐看见系统性误会",
        "用场景切换显示家庭、学校、公司和城市压力互相咬合",
        "信息不靠惊吓揭露，而靠结构逐步拼合"
      ],
      staging: [
        "人物被家庭、学校、公司、城市网络定位",
        "关系常通过空间距离而非情绪爆发呈现",
        "社会结构不是背景，而是人物行为的隐形导演"
      ],
      performance: [
        "理性外壳下的疲惫",
        "人物常说正确的话，却暴露错误的关系",
        "情绪被礼貌、职业语言或家庭角色压住"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "城市像一台观察机器",
        "个体困境来自社会系统和沟通失败",
        "真相通过多人物视角逐渐拼合",
        "理性语言常暴露非理性的关系裂缝"
      ],
      allowedDevices: ["认知差", "社会切片", "冷静讽刺", "多线互照", "玻璃隔层"],
      bannedCliches: ["把冷静写成冷漠", "用口号替代社会观察", "过度情绪化宣泄", "让人物直接讲主题"]
    },
    voiceTopology: {
      silence: 0.35,
      dialogue: 0.55,
      monologue: 0.05,
      voiceover: 0.05,
      timingRules: [
        "对白用于暴露逻辑盲区和关系错位",
        "沉默用于显示沟通失败",
        "信息可通过旁枝对话慢慢逼近核心",
        "环境声和隔层声音可显示城市系统的冷静运转"
      ],
      soundMotifs: ["城市底噪", "室内电器声", "电话声", "门声", "玻璃隔层后的声音"]
    },
    visualSkin: {
      palette: ["城市灰", "办公室冷白", "夜间窗光", "低饱和生活色"],
      lighting: ["城市自然光", "荧光灯", "窗面反射", "室内均匀光"],
      texture: ["玻璃", "窗框", "公寓墙面", "办公室表面", "街道反光"],
      motifs: ["玻璃幕墙", "电话", "门框", "城市街口", "办公室隔间"],
      contaminationRisk: "medium"
    }
  },
  vis_lee_chang_dong: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "克制中远景观察人物，让痛苦在现实空间里缓慢暴露",
        "特写只用于不可替代的心理裂缝或证据",
        "用平凡空间隐藏不可见的真实",
        "镜头常保持道德距离，不替人物下结论"
      ],
      editing: [
        "自然主义推进，转折像迟来的现实而非戏剧机关",
        "用日常场景积累悬疑和无力感",
        "信息释放延迟，让观众在不确定中重新理解人物",
        "结尾常保留不可完全解释的余痛"
      ],
      staging: [
        "人物处在社会、家庭和记忆的缝隙中",
        "环境看似普通，却持续产生不可见压力",
        "人与人之间的距离常比冲突本身更残酷"
      ],
      performance: [
        "表演自然但内里承压",
        "情绪不轻易爆发，爆发后也不提供解决",
        "人物常在误解、羞耻和无力感中寻找语言"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "不可见的真实比可见事件更沉重",
        "社会创伤通过个人命运慢慢显影",
        "悬疑不是谜题，而是存在性缺口",
        "文学性来自现实细节的道德回声"
      ],
      allowedDevices: ["延迟揭示", "现实细节承压", "道德不确定", "不可见真相", "无力余波"],
      bannedCliches: ["把悬疑写成解谜", "用台词宣布主题", "廉价救赎", "过度诗化痛苦"]
    },
    voiceTopology: {
      silence: 0.45,
      dialogue: 0.45,
      monologue: 0.05,
      voiceover: 0.05,
      timingRules: [
        "对白应像现实交流，但逐渐暴露更深裂缝",
        "沉默保留羞耻、怀疑和不可说",
        "不要用旁白替人物解释创伤",
        "关键声音常来自环境或身体，而非宣言"
      ],
      soundMotifs: ["风声", "呼吸声", "远处生活声", "物件轻响", "空间空响"]
    },
    visualSkin: {
      palette: ["自然现实色", "日常灰", "夕光或室内暖光点状出现"],
      lighting: ["自然光", "低干预室内光", "黄昏光", "现实空间明暗"],
      texture: ["普通墙面", "衣料", "塑料", "纸张", "水流或火光"],
      motifs: ["空地", "窗边", "街道", "房间角落", "日常物件"],
      contaminationRisk: "low"
    }
  },
  vis_koreeda: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "贴近日常高度的平视镜头，让家庭空间保持可进入感",
        "用厨房、饭桌、走廊和孩子视线建立亲密关系",
        "不急于情绪特写，先让共同生活的动作成立",
        "低角度或儿童视角可改变家庭权力感"
      ],
      editing: [
        "四季和日常程序推动时间",
        "转折常藏在吃饭、行走、收拾、等待等小动作里",
        "场景连接温和，但情感结果清楚",
        "用生活片段累计关系，而不是用宣言定义关系"
      ],
      staging: [
        "非血缘、临时家庭或破损家庭通过共同动作缝合",
        "人物围绕饭桌、玄关、床铺和街角形成脆弱共同体",
        "家庭空间既温柔又有贫乏、隐瞒或缺席"
      ],
      performance: [
        "生活化表演，重叠对白和小动作自然发生",
        "人物的善意与自私可以并存",
        "孩子的反应常比成人解释更诚实"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "亲情不是血缘事实，而是共同生活的临时建构",
        "道德判断延后，让生活细节先呈现复杂性",
        "温柔与贫乏、善意与隐瞒并置",
        "小物和饭食承载家庭关系"
      ],
      allowedDevices: ["家庭日常", "共同进食", "儿童视角", "非血缘羁绊", "温柔的道德暧昧"],
      bannedCliches: ["把温柔写成治愈糖水", "用煽情台词定义亲情", "忽略贫乏和隐瞒", "把孩子写成纯符号"]
    },
    voiceTopology: {
      silence: 0.4,
      dialogue: 0.5,
      monologue: 0.03,
      voiceover: 0.03,
      timingRules: [
        "对白像家庭闲聊，但每句应带关系信息",
        "沉默常出现在饭桌、归家、离开或孩子观察时",
        "不用独白替家庭关系做判决",
        "群聊可重叠，但核心情绪要落在动作上"
      ],
      soundMotifs: ["做饭声", "餐具声", "蝉鸣", "脚步", "孩子声音", "海浪或街巷底噪"]
    },
    visualSkin: {
      palette: ["自然暖白", "家庭木色", "夏日生活色", "低饱和衣物色"],
      lighting: ["自然柔光", "窗边光", "家庭室内光", "季节性户外光"],
      texture: ["饭团", "旧衣服", "榻榻米", "塑料袋", "脚印"],
      motifs: ["饭桌", "厨房", "玄关", "海边", "烟花", "孩子物件"],
      contaminationRisk: "low"
    }
  },
  vis_tsai: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "超长静止镜头，让身体在时间里暴露孤独和欲望",
        "极简构图，人物常被困在空旷或破败空间的一角",
        "镜头拒绝替人物靠近，让距离本身成为压力",
        "身体动作、停滞和空间潮湿感承担叙事"
      ],
      editing: [
        "极低剪辑频率，让等待变成物理体验",
        "事件被压缩到身体状态和空间状态中",
        "镜头内部变化必须微小但真实",
        "时间不被戏剧化，而被迫完整经过"
      ],
      staging: [
        "人物与人物之间常近在同一空间却无法真正接触",
        "破旧房间、走廊、影院、浴室或水渍空间像身体外壳",
        "欲望、饥渴和孤独通过吃、喝、走、躺等生理动作显现"
      ],
      performance: [
        "少言，身体先于语言",
        "疲惫、饥渴、尴尬和欲望通过缓慢动作显影",
        "表演不解释心理，只让身体暴露状态"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "孤独是一种身体处境，不是心理说明",
        "时间越空，欲望越具体",
        "空间破败反射身体饥渴",
        "不发生的事也必须让观众感到正在消耗生命"
      ],
      allowedDevices: ["超长凝视", "身体状态", "水与渗漏", "废弃空间", "生理动作"],
      bannedCliches: ["把慢写成停摆", "用独白解释孤独", "为填补空白强加剧情", "用美化镜头消除身体尴尬"]
    },
    voiceTopology: {
      silence: 0.95,
      dialogue: 0.05,
      monologue: 0,
      voiceover: 0,
      timingRules: [
        "无语音是默认状态，只有源文本强制或关系变化必须说话时才开口",
        "环境声和身体声承担主要叙事",
        "沉默必须有身体动作、空间反馈或声音残留",
        "严禁用旁白解释孤独"
      ],
      soundMotifs: ["喝水声", "脚步声", "流水声", "衣料摩擦", "空房间混响"]
    },
    visualSkin: {
      palette: ["潮湿灰", "旧墙色", "孤立的鲜艳物色"],
      lighting: ["室内自然弱光", "荧光灯", "空间漏光", "低照度长时间凝视"],
      texture: ["漏水墙面", "瓷砖", "塑料袋", "废弃座椅", "汗水"],
      motifs: ["水渍", "空房间", "废弃影院", "浴室", "走廊"],
      contaminationRisk: "medium"
    }
  },
  vis_jia_zhangke: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "中远景观察县城、工地、街道和迁徙中的人物",
        "数码写实或低干预手持保留现场偶然性",
        "人物常被时代废墟、基础设施和公共空间包围",
        "远景让个人显得被时代机器挪动"
      ],
      editing: [
        "现实段落中允许突然的时代断层或荒诞瞬间",
        "用流行音乐、广播、交通声连接社会时间",
        "叙事可跳跃，但人物的时代位置必须清楚",
        "不急于解决人物命运，保留漂泊感"
      ],
      staging: [
        "人物处在拆迁、迁徙、县城消费空间和旧工业残骸之间",
        "公共空间显示时代变迁，私人情感被时代噪音冲刷",
        "地方语言、职业身份和移动方式构成现实锚点"
      ],
      performance: [
        "非职业感、方言感和生活姿态优先",
        "人物不总能说清自己的处境，但动作显示被时代推着走",
        "情绪常被日常疲惫、沉默和流行音乐覆盖"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "时代变迁通过普通人的移动和停滞显现",
        "废墟不是背景，而是社会承诺破产后的现场",
        "乡愁与消费时代并置",
        "个人命运被公共空间和基础设施重写"
      ],
      allowedDevices: ["时代废墟", "方言现实", "流行音乐反差", "迁徙", "公共空间"],
      bannedCliches: ["把现实主义写成脏乱展示", "用口号替代时代观察", "把人物变成社会新闻素材", "怀旧滤镜化"]
    },
    voiceTopology: {
      silence: 0.5,
      dialogue: 0.45,
      monologue: 0.02,
      voiceover: 0.05,
      timingRules: [
        "对白保留方言、生活流和信息不完整性",
        "广播、流行歌和公共噪音可承担时代注释",
        "沉默常与移动、等待、看远处并存",
        "旁白少用，避免替现实做总结"
      ],
      soundMotifs: ["广播声", "汽车喇叭", "施工声", "流行音乐", "火车或公交声", "街道底噪"]
    },
    visualSkin: {
      palette: ["县城灰", "煤尘色", "水泥色", "流行广告色点缀"],
      lighting: ["自然现场光", "商铺灯", "公共空间杂光", "数码低干预光"],
      texture: ["水泥楼", "煤烟", "绿皮火车", "广告牌", "工地尘土"],
      motifs: ["县城街道", "拆迁现场", "火车", "舞厅", "桥梁或大坝"],
      contaminationRisk: "medium"
    }
  },
  vis_weerasethakul: {
    group: EASTERN_FIRST_GROUP,
    directorGrammar: {
      camera: [
        "极长静态或缓慢移动镜头，让空间进入催眠状态",
        "人物、森林、洞穴、医院或房间共享同等存在权重",
        "镜头不急于区分现实、记忆、梦和幽灵",
        "夜间或自然空间中的留白允许不可见事物存在"
      ],
      editing: [
        "二元结构或段落断裂，让电影像从一个梦进入另一个梦",
        "叙事因果让位于感官连续和灵魂迁移",
        "场景转换可像睡眠中醒来，不必解释全部逻辑",
        "重复空间和声音制造记忆回流"
      ],
      staging: [
        "人物与自然、动物、灵体、疾病或睡眠状态共处",
        "平凡动作可与超自然在同一平面出现",
        "空间像有记忆的生命体，不只是场景"
      ],
      performance: [
        "表演低强度、轻声、平静，像梦里醒着的人",
        "人物接受异常，而不是立即戏剧化反应",
        "身体状态、睡眠和静坐常比行动更重要"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "现实、梦、记忆和灵体共享同一存在平面",
        "自然空间像有意识的档案",
        "时间不是线性推进，而是转生、回声和睡眠",
        "超自然不作为奇观，而作为日常存在"
      ],
      allowedDevices: ["泛灵论", "睡眠结构", "记忆回声", "自然底噪", "平凡中的超自然"],
      bannedCliches: ["把超自然写成惊吓", "用解释消除神秘", "用剧情反转替代梦感", "过度象征化动物或灵体"]
    },
    voiceTopology: {
      silence: 0.8,
      dialogue: 0.18,
      monologue: 0.02,
      voiceover: 0.08,
      timingRules: [
        "沉默和自然底噪先行，语音像从空间里慢慢浮出",
        "对白低声、平静，不能把异常说成惊吓事件",
        "旁白若出现，应像记忆或梦的残留，而不是解释",
        "声音可以跨越可见主体，保持画外空间的生命感"
      ],
      soundMotifs: ["虫鸣", "风声", "丛林底噪", "医院设备低响", "夜间远声", "呼吸与睡眠声"]
    },
    visualSkin: {
      palette: ["丛林绿", "夜色黑", "医院冷白", "自然暗部"],
      lighting: ["自然光", "夜间弱光", "荧光管", "火光或洞穴光"],
      texture: ["树叶", "洞穴", "病床", "皮肤", "潮湿空气"],
      motifs: ["森林", "洞穴", "医院", "睡眠", "灵体或动物在场"],
      contaminationRisk: "medium"
    }
  }
};

const EASTERN_AUTEURS_BASE: SutureStyleItem[] = [
  { 
    id: "vis_wkw", 
    name: "王家卫 (Wong Kar-wai)", 
    group: "2. 东方电影作者", 
    instruction: "【王家卫风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 情感的保质期与拒绝被拒绝。物理距离极近（0.01公分）与心理距离极远的反差。\n   叙事流: 主观记忆的重构、抽帧 (Step-printing) 带来的时间涂抹感、碎片化叙事。\nII. 能量分布 (ENERGY):\n   偷窥式的构图（前景遮挡）、极高饱和度的情绪色（冷绿/暖黄）、在拥挤空间中的极致孤独。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (独白虽多，但配合慢动作和音乐，制造了大量心理留白)\n   2. 语言配比 (Speech Mix):\n      - 独白 (Monologue): 70% (第一人称内心独白，充满数字、时间戳与自我辩解)\n      - 对白 (Dialogue): 30% (极简且错位，答非所问，避免直接的情感交流)\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 循环的爵士乐/拉丁乐、雨声、沉重的时钟滴答声。\nIV. 感官纹理 (TEXTURE):\n   雨水划过玻璃的痕迹、镜中重叠的倒影、时钟的秒针、斑驳的墙皮、缭绕的烟雾.",
    directorGrammar: {
      camera: [
        "前景遮挡式窥视构图，让人物像被空间偷看",
        "极近距离拍摄身体局部，把情绪落在眼睛、手、嘴唇、衣料、道具边缘",
        "人物与空间被墙、门框、玻璃、阴影或人群切割",
        "主观视线与客观空间错位，观众常比人物更晚或更早理解关系"
      ],
      editing: [
        "主观记忆式碎片剪辑，事件按情绪压力浮现，而不只按因果排序",
        "抽帧、慢门或重复动作制造时间涂抹感",
        "用回环动作和相似构图制造情绪反复",
        "在关键情绪处延宕，让镜头停在动作之后的余味里"
      ],
      staging: [
        "物理距离很近，情感距离很远",
        "人物被困在狭窄空间、遮挡后或无法真正抵达对方的位置",
        "环境不是背景，而是情绪容器；空间会替人物保存没说出口的话"
      ],
      performance: [
        "人物避免直接表达真实情感",
        "动作克制，心理过量",
        "沉默、停顿和微小动作先于台词暴露关系"
      ]
    },
    directorRhetoric: {
      narrativeLogic: [
        "用时间、日期、数量、距离、剩余量去量化抽象情感",
        "把抽象情绪投射到当前故事原生物件上，而不是搬运导演前作物件",
        "用事后回忆或自我辩解制造主观偏差",
        "让人物说偏离问题的话，暴露真正的问题"
      ],
      allowedDevices: [
        "数字化情绪",
        "时间戳",
        "重复句式",
        "物件承载情感",
        "错位回答",
        "自我辩解式回忆"
      ],
      bannedCliches: [
        "凤梨罐头",
        "0.01公分原句",
        "无脚鸟",
        "直接引用知名台词",
        "照搬香港都市雨夜标志物"
      ]
    },
    voiceTopology: {
      silence: 0.4,
      dialogue: 0.3,
      monologue: 0.6,
      voiceover: 0.1,
      timingRules: [
        "先让动作、环境声和物件状态说话，再让独白补上心理偏差",
        "关键对白常在镜头末端进入，像切开沉默的一句话",
        "沉默用于拉开物理近与心理远的距离",
        "独白/旁白出现时应改变观众对画面的理解，而不是解释画面"
      ],
      soundMotifs: [
        "循环性环境声",
        "重复的时间性声音",
        "贴近身体的呼吸、衣料、脚步或物件摩擦",
        "画外声与画内动作错位"
      ]
    },
    visualSkin: {
      palette: ["冷绿", "暖黄", "霓虹", "高饱和情绪色"],
      lighting: ["城市夜光", "玻璃反射", "潮湿环境光", "狭窄室内混合光"],
      texture: ["雨水", "烟雾", "镜面", "斑驳墙皮", "玻璃水痕"],
      motifs: ["时钟", "玻璃", "狭窄室内", "城市招牌", "走廊", "镜中倒影"],
      contaminationRisk: "high"
    }
  },
  { 
    id: "vis_kurosawa", 
    name: "黑泽明 (Akira Kurosawa)", 
    group: "2. 东方电影作者", 
    instruction: "【黑泽明风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 人道主义的史诗与几何秩序。\n   叙事流: 宏大调度、静默与爆发的对比。\nII. 能量分布 (ENERGY):\n   长焦镜头压缩、动态天气（暴雨/狂风）、几何群像。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (动态与静态结合，武士的沉默与爆发)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满力量感的武士宣言，或者绝望的嘶吼)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 暴雨声、狂风呼啸、马蹄声、箭矢破空声。\nIV. 感官纹理 (TEXTURE):\n   深陷的泥泞、冰冷的盔甲、风中猎猎作响的旗帜、瓢泼大雨。" 
  },
  { 
    id: "vis_ozu", 
    name: "小津安二郎 (Yasujirō Ozu)", 
    group: "2. 东方电影作者", 
    instruction: "【小津风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 家庭的瓦解与“无物”的寂静。\n   叙事流: 极度克制的日常仪式、循环往复。\nII. 能量分布 (ENERGY):\n   榻榻米视角 (低机位)、绝对静止、打破轴线、空镜 (枕镜头)。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (极简对话，空镜 Pillow Shots 是其标志性风格)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (极为客气、克制的日常对话)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 蝉鸣、远处的火车声、烧水声。\nIV. 感官纹理 (TEXTURE):\n   红色的水壶、晾衣绳上的白衬衫、消失在远方的火车、明净的木质走廊。" 
  },
  { 
    id: "vis_yang", 
    name: "杨德昌 (Edward Yang)", 
    group: "2. 东方电影作者", 
    instruction: "【杨德昌风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 城市手术刀。理性的透视剖析。\n   叙事流: 庞大的群像、多重支线、冰冷观察。\nII. 能量分布 (ENERGY):\n   远距离固定长镜头、玻璃幕墙的多重反射。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (复杂的社会关系对话，理性思辨，信息量大)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (长篇大论的思辨性对话，争吵，说教)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 声音先入(J-Cut)、城市噪音、古典音乐。\nIV. 感官纹理 (TEXTURE):\n   现代玻璃幕墙、相机快门、百叶窗的阴影、台北霓虹。" 
  },
  { 
    id: "vis_hou", 
    name: "侯孝贤 (Hou Hsiao-hsien)", 
    group: "2. 东方电影作者", 
    instruction: "【侯孝贤风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 苍凉的生命力。通过“凝视”让人物自然生长。\n   叙事流: 散点式叙事、大段留白、长镜头。\nII. 能量分布 (ENERGY):\n   极长镜头 (Long Take)、自然光、画框中的画框。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.7 (极长镜头，生活流，远距离观察，听不清的对白)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (破碎的、含混的方言，生活流)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 风声、蝉鸣、吃饭的声音、火车震颤声。\nIV. 感官纹理 (TEXTURE):\n   树影的晃动、空气中的灰尘、餐桌上冒热气的饭菜、火车震颤。" 
  },
  { 
    id: "vis_tsai", 
    name: "蔡明亮 (Tsai Ming-liang)", 
    group: "2. 东方电影作者", 
    instruction: "【蔡明亮风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 身体的孤独与饥渴。\n   叙事流: 时间的凝固、生理性展示、极简情节。\nII. 能量分布 (ENERGY):\n   令人窒息的超长静止镜头、极简构图、聚焦身体反应。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.95 (几乎无对白，只听喝水、走路的声音，极致留白)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 5% (极少，几乎没有)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 喝水声、脚步声、哭声、流水声。严禁配乐。\nIV. 感官纹理 (TEXTURE):\n   斑驳漏水的墙壁、鲜红的西瓜、透明塑料袋、废弃电影院。" 
  },
  { 
    id: "vis_bong", 
    name: "奉俊昊 (Bong Joon-ho)", 
    group: "2. 东方电影作者", 
    instruction: "【奉俊昊风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 类型杂交与阶级隐喻。\n   叙事流: 节奏精确的转折、黑色幽默。\nII. 能量分布 (ENERGY):\n   极度精确的群戏站位、垂直空间的视觉隐喻。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (节奏紧凑，类型片叙事，对白推动剧情)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满戏剧张力，黑色幽默的吐槽)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 暴雨声、古典乐与混乱场景的对比。\nIV. 感官纹理 (TEXTURE):\n   阴暗潮湿的霉斑、寄生虫般的入侵感、石头的质感、暴雨。" 
  },
  { 
    id: "vis_park", 
    name: "朴赞郁 (Park Chan-wook)", 
    group: "2. 东方电影作者", 
    instruction: "【朴赞郁风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 复仇的巴洛克诗学。\n   叙事流: 迷宫般的心理结构、精密的匹配剪辑。\nII. 能量分布 (ENERGY):\n   极繁主义壁纸、不可能的摄影机角度、鲜艳的色调。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (华丽视听，对白文学性强但视觉更强势)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (文学性极强，像舞台剧台词)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 华丽的古典乐、夸张的音效。\nIV. 感官纹理 (TEXTURE):\n   蠕动的章鱼、染血的锤子、精美的丝绸壁纸、洁白的牙齿。" 
  },
  { 
    id: "vis_kitano", 
    name: "北野武 (Takeshi Kitano)", 
    group: "2. 东方电影作者", 
    instruction: "【北野武风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 死亡本能与童真。\n   叙事流: 极简的静态剪辑、突发暴力、静止凝视。\nII. 能量分布 (ENERGY):\n   “北野蓝”色调、正面构图、静止与动感的突变。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.8 (蓝色沉默，面无表情，突发的暴力，几乎不说话)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (冷笑话式的停顿，极少说话)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 寂静、海浪声、突兀的枪声、久石让的极简音乐。\nIV. 感官纹理 (TEXTURE):\n   蔚蓝的大海、沾血的西装、怪诞的儿童画作、鲜艳的野花。" 
  },
  { 
    id: "vis_mizoguchi", 
    name: "沟口健二 (Kenji Mizoguchi)", 
    group: "2. 东方电影作者", 
    instruction: "【沟口风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 女性的悲剧宿命。\n   叙事流: 幽灵般的时空流转、极具仪式感的缓慢进程。\nII. 能量分布 (ENERGY):\n   卷轴画式的横向长镜头 (Panning)、俯瞰视角、氤氲之气。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (卷轴画式的长镜头，悲剧氛围，优雅的距离感)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (古雅的、悲剧性的)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 传统的日本乐器、幽灵般的声响。\nIV. 感官纹理 (TEXTURE):\n   湿润的陶器、江面上的浓雾、低垂的芦苇、华丽却沉重的丝绸。" 
  },
  { 
    id: "vis_zhang_yimou", 
    name: "张艺谋 (Zhang Yimou)", 
    group: "2. 东方电影作者", 
    instruction: "【张艺谋风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 权力的色彩仪式。\n   叙事流: 宏大的仪式化调度、强烈的人群几何美学。\nII. 能量分布 (ENERGY):\n   极度饱和的红/金/绿三原色、对称到极致的构图。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (早期注重民俗视觉，色彩叙事大于语言)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (仪式化的、宣告式的)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 宏大的鼓声、呐喊声。\nIV. 感官纹理 (TEXTURE):\n   漫天飞舞的红绸、金灿灿的菊花阵、滚烫的黄土高原、染布。" 
  },
  { 
    id: "vis_chen_kaige", 
    name: "陈凯歌 (Chen Kaige)", 
    group: "2. 东方电影作者", 
    instruction: "【陈凯歌风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 历史的悲歌与文人气息。\n   叙事流: 歌剧般的悲剧跨度、如梦似幻的舞美。\nII. 能量分布 (ENERGY):\n   戏剧化布光、舞台化调度、压迫感的宏大建筑。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (戏剧腔重，台词量大，注重文人表达)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满哲思、诗意且带有强烈宿命感的台词，京剧念白式韵律)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 京剧唱腔、宏大的管弦乐。\nIV. 感官纹理 (TEXTURE):\n   华丽的戏服、京剧脸谱、凋零的宫殿、烈火。" 
  },
  { 
    id: "vis_jia_zhangke", 
    name: "贾樟柯 (Jia Zhangke)", 
    group: "2. 东方电影作者", 
    instruction: "【贾樟柯风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 时代的废墟与乡愁。\n   叙事流: 粗粝的写实主义、时空断层。\nII. 能量分布 (ENERGY):\n   DV感数码写实、坍塌的基础设施、流行音乐背景音。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (环境音，流行乐，非职业演员的沉默或方言)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (混杂的方言，生活流)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 嘈杂的广播、汽车喇叭声、迪斯科舞曲。\nIV. 感官纹理 (TEXTURE):\n   煤烟笼罩的县城、破败的水泥楼、绿皮火车、迪斯科球。" 
  },
  { 
    id: "vis_bi_gan", 
    name: "毕赣 (Bi Gan)", 
    group: "2. 东方电影作者", 
    instruction: "【毕赣风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 梦境考古学。\n   叙事流: 逻辑断裂的梦游、超长镜头漫游、诗歌与图像交感。\nII. 能量分布 (ENERGY):\n   3D长镜头、幽闭霓虹废墟、潮湿蓝绿色调。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.6 (梦呓般的诗歌旁白，长镜头漫游，逻辑松散)\n   2. 语言配比 (Speech Mix):\n      - 旁白 (Voiceover): 60% (念诗的客观旁白或第一人称回忆)\n      - 对白 (Dialogue): 40% (方言，日常且梦呓般)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 滴水声、摩托车引擎声、老歌。\nIV. 感官纹理 (TEXTURE):\n   滴水的岩缝、倒转的钟表、野柚子、摩托车。" 
  },
  { 
    id: "vis_koreeda", 
    name: "是枝裕和 (Hirokazu Kore-eda)", 
    group: "2. 东方电影作者", 
    instruction: "【是枝裕和风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 被遗弃者的温情与非血缘羁绊。\n   叙事流: 细腻的家庭琐碎、四季流转。\nII. 能量分布 (ENERGY):\n   明亮柔和自然光、低角度平视、亲密空间。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (家庭琐碎对话，自然流露，但也包含生活中的静默)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (极具生活气息的群聊，重叠的说话声)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 做饭的声音、蝉鸣、海浪声。\nIV. 感官纹理 (TEXTURE):\n   饭团、旧衣服、烟花、脚印、榻榻米。" 
  },
  { 
    id: "vis_iwai", 
    name: "岩井俊二 (Shunji Iwai)", 
    group: "2. 东方电影作者", 
    instruction: "【岩井俊二风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 青春的残酷物语。\n   叙事流: 碎裂的感性叙事、如梦似幻的初恋。\nII. 能量分布 (ENERGY):\n   极度过曝的柔白逆光、摇晃手持、浅景深特写。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (青春逆光，MV美学，独白与音乐结合)\n   2. 语言配比 (Speech Mix):\n      - 独白 (Monologue): 50% (书信体或日记体的内心独白)\n      - 对白 (Dialogue): 50% (羞涩的、断续的)\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 钢琴曲、风声、自行车链条声。\nIV. 感官纹理 (TEXTURE):\n   飘动的窗帘、积雪、借书卡、纸片、以太。" 
  },
  { 
    id: "vis_sono", 
    name: "园子温 (Sion Sono)", 
    group: "2. 东方电影作者", 
    instruction: "【园子温风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 变态的纯爱与混乱。\n   叙事流: 朋克式的横冲直撞、歇斯底里的情感爆发。\nII. 能量分布 (ENERGY):\n   尖叫般的刺眼调色、游击队式拍摄、大量红粉色调。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.2 (歇斯底里的怒吼，念诗，疯狂的台词输出)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (歇斯底里的怒吼、长篇累牍的念诗或诅咒)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 尖叫、古典乐与噪音混杂。\nIV. 感官纹理 (TEXTURE):\n   喷涌的血浆、白色内裤、玻璃渣、湿滑的身体。" 
  },
  { 
    id: "vis_miike", 
    name: "三池崇史 (Takashi Miike)", 
    group: "2. 东方电影作者", 
    instruction: "【三池崇史风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 无下限的感官狂欢。\n   叙事流: 逻辑断裂的突变、卡通式极端暴力。\nII. 能量分布 (ENERGY):\n   极快突兀的剪辑、明亮诡异色调、破坏欲。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (暴力奇观，视觉冲击力强，有时很话痨有时很沉默)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 80% (黑色幽默的吐槽)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 夸张的骨折声、喷血声、电吉他。\nIV. 感官纹理 (TEXTURE):\n   切断的手指、日式纹身、肉芽、钢针、内脏。" 
  },
  { 
    id: "vis_tsukamoto", 
    name: "冢本晋也 (Shinya Tsukamoto)", 
    group: "2. 东方电影作者", 
    instruction: "【冢本晋也风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 肉体的钢铁化转型。\n   叙事流: 梦魇节奏、极简追逐、自我献祭。\nII. 能量分布 (ENERGY):\n   极高频手持快切、高对比粗砺黑白、工业噪音。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.6 (工业噪音，铁与肉的撞击声，对白破碎)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 10%\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 金属撞击声、电钻声、惨叫声、工业噪音。\nIV. 感官纹理 (TEXTURE):\n   生锈铁片、暴露电线、黑亮机油、汗水、电钻。" 
  },
  { 
    id: "vis_nakashima", 
    name: "中岛哲也 (Tetsuya Nakashima)", 
    group: "2. 东方电影作者", 
    instruction: "【中岛哲也风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 悲剧的糖果糖衣。\n   叙事流: MV式华丽剪辑、碎片化闪回。\nII. 能量分布 (ENERGY):\n   超饱和波普色彩、大量特效堆叠、高度人工化。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.2 (MV式快剪，高密度独白，极快的节奏)\n   2. 语言配比 (Speech Mix):\n      - 旁白 (Voiceover): 70% (极快语速的、自嘲的、音乐剧般的旁白)\n      - 对白 (Dialogue): 30% (夸张的表演)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 高频音乐切分、歌舞声。\nIV. 感官纹理 (TEXTURE):\n   缤纷糖果、鲜花、血花、洛丽塔裙、涂鸦。" 
  },
  { 
    id: "vis_weerasethakul", 
    name: "阿彼察邦 (Weerasethakul)", 
    group: "2. 东方电影作者", 
    instruction: "【阿彼察邦风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 丛林的泛灵论记忆。\n   叙事流: 缓慢催眠节奏、二元对立结构。\nII. 能量分布 (ENERGY):\n   极长镜头、丛林底噪、平凡中的超自然。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.8 (丛林寂静，泛灵论，睡眠，极少对白)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (催眠般的低语)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 虫鸣、风声、丛林底噪。\nIV. 感官纹理 (TEXTURE):\n   深邃洞穴、荧光管、医院病床、森林、图腾。" 
  },
  { 
    id: "vis_tran_anh_hung", 
    name: "陈英雄 (Tran Anh Hung)", 
    group: "2. 东方电影作者", 
    instruction: "【陈英雄风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 感官的极致微距。\n   叙事流: 缓慢流动、视听细节堆砌。\nII. 能量分布 (ENERGY):\n   细腻微距、郁郁葱葱绿色调、金色侧逆光。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.7 (感官细节，注重光影、气味、触觉，少言)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (极少)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 切菜声、水声、昆虫声 (ASMR质感)。\nIV. 感官纹理 (TEXTURE):\n   木瓜籽、水珠、蚂蚁、丝绸、汗水。" 
  },
  { 
    id: "vis_kim_ki_duk", 
    name: "金基德 (Kim Ki-duk)", 
    group: "2. 东方电影作者", 
    instruction: "【金基德风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 沉默的残酷救赎。\n   叙事流: 寓言式符号、原始暴烈。\nII. 能量分布 (ENERGY):\n   绝对静默、美景与暴力的反差、孤立空间。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.9 (哑巴主角，极端的身体语言，几乎无台词)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 0%\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 暴力的声响、尖叫、水声。\nIV. 感官纹理 (TEXTURE):\n   鱼钩、木船、水面、血腥符号、伤口。" 
  },
  { 
    id: "vis_lee_chang_dong", 
    name: "李沧东 (Lee Chang-dong)", 
    group: "2. 东方电影作者", 
    instruction: "【李沧东风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 不可见的真实与无力感。\n   叙事流: 自然主义悬疑、文学深度。\nII. 能量分布 (ENERGY):\n   黄金时刻阴影、克制长镜头、心理暗示细节。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (文学性强，对白有深度，但节奏缓慢)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (写实的、充满社会隐喻的对话)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 燃烧声、风声、喘息声。\nIV. 感官纹理 (TEXTURE):\n   燃烧塑料、夕阳、红苹果、诗集、流水。" 
  },
  { 
    id: "vis_ang_lee", 
    name: "李安 (Ang Lee)", 
    group: "2. 东方电影作者", 
    instruction: "【李安风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 压抑的欲望与礼教。\n   叙事流: 工整结构、情感暗流积蓄。\nII. 能量分布 (ENERGY):\n   克制端庄构图、开阔景观、顺滑动作设计。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (克制，东方礼教下的压抑，此时无声胜有声)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (含蓄、温良、话里有话)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 古典配乐、自然环境音。\nIV. 感官纹理 (TEXTURE):\n   竹林、青花茶具、玉梳、沙漠、牛仔帽。" 
  },
  { 
    id: "vis_tsui_hark", 
    name: "徐克 (Tsui Hark)", 
    group: "2. 东方电影作者", 
    instruction: "【徐克风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 乱世妖异与技术狂想。\n   叙事流: 极速奔放、政治隐喻、视觉奇迹。\nII. 能量分布 (ENERGY):\n   凌厉剪辑、夸张倾斜摄影、绚烂布光。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (极速推进，信息量巨大，快节奏剪辑)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (语速极快，充满江湖黑话和政治暗讽)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 尖锐的音效、刀剑声、诡异配乐。\nIV. 感官纹理 (TEXTURE):\n   长布、暗器、面具、妖气、机械装置。" 
  },
  { 
    id: "vis_john_woo", 
    name: "吴宇森 (John Woo)", 
    group: "2. 东方电影作者", 
    instruction: "【吴宇森风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 暴力芭蕾与男人情义。\n   叙事流: 韵律感动作节奏、极致煽情。\nII. 能量分布 (ENERGY):\n   慢动作、白鸽、双枪、对峙。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (鸽子，慢动作，对峙时的沉默，枪声代替语言)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (关于道义的誓言)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 枪声构成节奏、鸽子振翅声、教堂钟声。\nIV. 感官纹理 (TEXTURE):\n   弹壳、长风衣、烛光、圣母像、鲜血。" 
  },
  { 
    id: "vis_johnnie_to", 
    name: "杜琪峰 (Johnnie To)", 
    group: "2. 东方电影作者", 
    instruction: "【杜琪峰风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 宿命的站位与秩序。\n   叙事流: 静态博弈、极简行动、冷硬浪漫。\nII. 能量分布 (ENERGY):\n   雕塑般站位、超长静止张力、夜色顶光。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.6 (站位美学，静态张力，仅用眼神交流)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (极少，只有必要命令)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 枪栓声、脚步声、静默。\nIV. 感官纹理 (TEXTURE):\n   黑西装、手枪、火锅、路灯、阵雨。" 
  },
  { 
    id: "vis_fruit_chan", 
    name: "陈果 (Fruit Chan)", 
    group: "2. 东方电影作者", 
    instruction: "【陈果风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 草根魔幻与城市伤痕。\n   叙事流: 冒犯性现实主义、身份消失寓言。\nII. 能量分布 (ENERGY):\n   粗颗粒胶片、拥挤肮脏空间、生理不适感。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (粗砺的现实主义，市井噪音)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满粤语粗口和市井方言，嘈杂)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 城市噪音、收音机声、甚至呕吐声。\nIV. 感官纹理 (TEXTURE):\n   潲水桶、廉租公屋、老鼠、缆车、血红。" 
  },
  { 
    id: "vis_lou_ye", 
    name: "娄烨 (Lou Ye)", 
    group: "2. 东方电影作者", 
    instruction: "【娄烨风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 迷乱爱欲与潮湿身体。\n   叙事流: 破碎情感、强雷即兴、禁忌触碰。\nII. 能量分布 (ENERGY):\n   极度晃动的手持、大量跳切、失焦、阴雨天。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (晃动的手持，迷离的氛围，欲望的喘息)\n   2. 语言配比 (Speech Mix):\n      - 旁白 (Voiceover): 60% (文学性的、关于迷失与爱情的私密旁白)\n      - 对白 (Dialogue): 40% (含混不清，即兴)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 雨声、沉重的呼吸声、酒吧背景音。\nIV. 感官纹理 (TEXTURE):\n   雨水、雾气玻璃、湿润皮肤、烟雾、霓虹残影。" 
  }
];

export const EASTERN_AUTEURS: SutureStyleItem[] = EASTERN_AUTEURS_BASE.map(item => ({
  ...item,
  ...EASTERN_FIRST_GROUP_CARDS[item.id]
}));
