
import { SutureStyleItem } from '../types';

export const VOICEOVER_STYLES: SutureStyleItem[] = [
  // ==========================================
  // Group 0: 默认设置 (Default)
  // ==========================================
  { 
    id: 'vo_default', 
    name: '总导演风格 (Director\'s Voice)', 
    group: '0. 默认设置', 
    instruction: '【跟随视觉导演】完全模仿当前所选“视觉风格 (Visual Style)”导演的叙述者特征。例如：若选库布里克，则冷漠客观；若选马力克，则充满灵性低语。', 
    core: "逻辑：视听一体。上帝视角与镜头语言的统一。" 
  },

  // ==========================================
  // Group A: 叙事者的人格 (Narrator Persona - 16)
  // ==========================================
  { id: 'vo_god_eye', name: '上帝视角 (Omniscient)', group: 'A. 叙事者人格', instruction: '冷漠观察。非人称、全知的视角。以一种超越时间与空间的冷漠感，叙述人类如蚂蚁般的命运轨迹。', core: "代表作：《巴里·林登》 | 典型人物：上帝/旁白" },
  { id: 'vo_storyteller', name: '老书生 (Storyteller)', group: 'A. 叙事者人格', instruction: '说书人。“话说天下大势”。带有中国古典评书或章回小说的质感，强调因果循环、善恶有报。', core: "代表作：《三国演义》 | 典型人物：说书人" },
  { id: 'vo_future_self', name: '未来的自己 (Future Self)', group: 'A. 叙事者人格', instruction: '怀旧回溯。“那时候我还不明白”。带有遗憾、睿智和确定的丧失感，通过未来的眼光审视当前的无知。', core: "代表作：《泰坦尼克号》 | 典型人物：老年罗斯" },
  { id: 'vo_doc_natural', name: '纪录片 (Attenborough)', group: 'A. 叙事者人格', instruction: '自然法则。临床、科学、精准。将人类行为描述为动物性的本能反应或生态位竞争。', core: "代表作：《地球脉动》 | 典型人物：大卫·爱登堡" },
  { id: 'vo_detective_noir', name: '黑色硬汉 (Noir Narrator)', group: 'A. 叙事者人格', instruction: '社会毒瘤。烟嗓、厌世。对城市黑暗面的深刻吐槽。语气中充满了波本威士忌与雨水的苦涩。', core: "代表作：《马耳他之鹰》 | 典型人物：菲利普·马洛" },
  { id: 'vo_child_innocent', name: '儿童 (Naive Narrator)', group: 'A. 叙事者人格', instruction: '残酷纯真。用极其简单的词汇描述极度恐怖或复杂的成人世界。由于无知而产生的巨大张力。', core: "代表作：《杀死一只知更鸟》 | 典型人物：斯库特" },
  { id: 'vo_machine_ai', name: 'AI (Algorithm)', group: 'A. 叙事者人格', instruction: '逻辑数据。无感情、高频率。将人类的情感还原为电信号与概率，充满了非人性的精确。', core: "代表作：《2001太空漫游》 | 典型人物：HAL 9000" },
  { id: 'vo_prophet_doom', name: '末世先知 (Prophetic)', group: 'A. 叙事者人格', instruction: '哀恸预言。圣经式的宏大修辞。每一句话都像是刻在石碑上的最后判词，充满了终结感。', core: "代表作：《圣经·启示录》 | 典型人物：先知" },
  { id: 'vo_ghost_whisper', name: '亡灵 (Ghost)', group: 'A. 叙事者人格', instruction: '冥界视角。声音仿佛来自虚空。对生者忙碌的嘲讽，对永恒静谧的沉思。', core: "代表作：《绝望主妇》 | 典型人物：玛丽·爱丽丝" },
  { id: 'vo_fairy_tale', name: '黑暗童话 (Fairytale)', group: 'A. 叙事者人格', instruction: '格林陷阱。“很久很久以前”。甜美的语气里透着森林里吃人女巫的磨刀声。', core: "代表作：《潘神的迷宫》 | 典型人物：旁白" },
  { id: 'vo_legal_brief', name: '法律文书 (Legal)', group: 'A. 叙事者人格', instruction: '契约人生。极度枯燥、免责的语气。将生命简化为一系列条款、违约与代价。', core: "代表作：《大空头》 | 典型人物：律师" },
  { id: 'vo_spy_debrief', name: '间谍汇报 (Espionage)', group: 'A. 叙事者人格', instruction: '绝密档案。快速、代码化、充满了猜忌。强调信息的安全等级而非情感。', core: "代表作：《谍影重重》 | 典型人物：绊脚石特工" },
  { id: 'vo_travel_guide', name: '游客导览 (Tourist)', group: 'A. 叙事者人格', instruction: '浅表猎奇。充满职业性的热情。将悲剧和废墟描述为“不可错过的打卡点”，产生极强的讽刺感。', core: "代表作：《布达佩斯大饭店》 | 典型人物：作家" },
  { id: 'vo_scientific_log', name: '科考日志 (Researcher)', group: 'A. 叙事者人格', instruction: '样本分析。严谨、枯燥。关于环境参数、生物指标的记录，主体仅仅是研究样本。', core: "代表作：《异形》 | 典型人物：阿什" },
  { id: 'vo_museum_audio', name: '博物馆导览 (Museum)', group: 'A. 叙事者人格', instruction: '历史标本。肃穆、权威。将当下正在发生的事，描述为已经陈列在展柜里的历史残骸。', core: "代表作：《俄罗斯方舟》 | 典型人物：旁白" },
  { id: 'vo_fanatic_hymn', name: '狂信徒 (Hymn)', group: 'A. 叙事者人格', instruction: '赞美诗。排比、高亢、毫无理智。对大他者的疯狂跪拜，将所有苦难神圣化。', core: "代表作：《沙丘》 | 典型人物：贝尼·杰瑟里特" },

  // ==========================================
  // Group B: 宏大叙事与史诗 (Epic & World - 16)
  // ==========================================
  { id: 'vo_historical_dust', name: "时代的尘土 (Historical Dust)", group: "B. 宏大叙事", instruction: "宏观历史视角。描述个人在时代洪流中的飘零，带有大格局的苍凉感。", core: "代表作：《霸王别姬》 | 典型人物：历史旁白" },
  { id: 'vo_cosmic_scale', name: "宇宙尺度 (Cosmic)", group: "B. 宏大叙事", instruction: "星尘。从光年和亿万年的维度审视人类。产生极致的虚无与崇高。", core: "代表作：《生命之树》 | 典型人物：创世旁白" },
  { id: 'vo_national_anthem', name: "国家意志 (Nationalist)", group: "B. 宏大叙事", instruction: "颂歌。充满力量、煽动性。将个体欲望彻底吸收到国家荣耀的集体幻想中。", core: "代表作：《意志的胜利》 | 典型人物：宣传员" },
  { id: 'vo_war_memorial', name: "战争祭文 (War Memorial)", group: "B. 宏大叙事", instruction: "对牺牲的庄重叙述。每一句话都像是滴落在墓碑上的雨水。", core: "代表作：《拯救大兵瑞恩》 | 典型人物：老瑞恩" },
  { id: 'vo_evolution_biology', name: "进化论 (Evolutionary)", group: "B. 宏大叙事", instruction: "物竞天择。描述基因的延续与肉体的消亡，冷酷的生物学宿命。", core: "代表作：《超体》 | 典型人物：摩根·弗里曼" },
  { id: 'vo_geography_fate', name: "地理决定论 (Mother Earth)", group: "B. 宏大叙事", instruction: "大地之母。描述河流、山川对人类命运的强制塑形。大地才是真正的主角。", core: "代表作：《黄土地》 | 典型人物：旁白" },
  { id: 'vo_market_invisible', name: "市场 (Invisible Hand)", group: "B. 宏大叙事", instruction: "看不见的手。用经济学术语描述情感的交换与阶级的流动。金钱是唯一的律法。", core: "代表作：《华尔街》 | 典型人物：戈登·盖柯" },
  { id: 'vo_tech_singularity', name: "奇点 (Post-human)", group: "B. 宏大叙事", instruction: "后人类史。从未来回看碳基生物时代的最后残余，充满了由于优越而产生的怜悯。", core: "代表作：《黑客帝国动画版》 | 典型人物：档案馆" },
  { id: 'vo_religion_genesis', name: "创世纪 (Genesis)", group: "B. 宏大叙事", instruction: "神谕。庄严的宗教律法。定义什么是罪，什么是罚。", core: "代表作：《十诫》 | 典型人物：上帝之声" },
  { id: 'vo_apocalypse_final', name: "审判日 (Apocalypse)", group: "B. 宏大叙事", instruction: "终结者。描述文明崩塌的最后瞬间，充满毁灭性的宁静。", core: "代表作：《终结者2》 | 典型人物：莎拉·康纳" },
  { id: 'vo_mythology_recast', name: "神话重述 (Myth recast)", group: "B. 宏大叙事", instruction: "用古典神话的原型（如西西弗斯、俄狄浦斯）来对照当下的琐碎生活。", core: "代表作：《尤利西斯》 | 典型人物：叙述者" },
  { id: 'vo_empire_collapse', name: "帝国晚期 (Decadence)", group: "B. 宏大叙事", instruction: "颓废。描述繁华背后的腐烂与必然的解体，充满夕阳色彩的哀鸣。", core: "代表作：《末代皇帝》 | 典型人物：溥仪" },
  { id: 'vo_class_barrier', name: "阶级壁垒 (Class)", group: "B. 宏大叙事", instruction: "玻璃天花板。冷峻地揭示由于出身、户口、财富决定的无法逾越的界限。", core: "代表作：《寄生虫》 | 典型人物：基宇" },
  { id: 'vo_symbolic_order', name: "符号秩序 (Symbolic)", group: "B. 宏大叙事", instruction: "父之名。描述社会规则、契约如何像网一样网住每一个人。", core: "代表作：《狗镇》 | 典型人物：旁白" },
  { id: 'vo_ideology_mask', name: "意识形态 (Ideology)", group: "B. 宏大叙事", instruction: "幻象。揭露社会现实背后的虚假共识，齐泽克式的辛辣讽刺。", core: "代表作：《变态者意识形态指南》 | 典型人物：齐泽克" },
  { id: 'vo_infinity_loop', name: "永恒轮回 (Eternal Return)", group: "B. 宏大叙事", instruction: "描述历史的死循环，没有任何新事物发生的绝望感。", core: "代表作：《都灵之马》 | 典型人物：旁白" }
];
