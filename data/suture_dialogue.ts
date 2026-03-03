
import { SutureStyleItem } from '../types';

export const DIALOGUE_STYLES: SutureStyleItem[] = [
  // ==========================================
  // Group 0: 默认设置 (Default)
  // ==========================================
  { 
    id: 'dial_default', 
    name: '总导演风格 (Director\'s Voice)', 
    group: '0. 默认设置', 
    instruction: '【跟随视觉导演】完全模仿当前所选“视觉风格 (Visual Style)”导演的对白特征。例如：若选昆汀，则话痨；若选老塔，则哲思；若选韦斯，则冷面。', 
    core: "逻辑：视听一体。对白风格与画面风格保持绝对一致的作者性。" 
  },

  // ==========================================
  // Group A: 电影大师意志 (Cinematic Auteurs - 16)
  // ==========================================
  { id: 'dial_wkw', name: '王家卫 (WKW)', group: 'A. 电影大师意志', instruction: '错位与试探。人物拒绝正面回答问题。对白充满数字、时间戳、以及对无生命物体的过度关注。语气暧昧，充满试探与错过。', core: "代表作：《重庆森林》、《花样年华》 | 典型人物：警察663、苏丽珍" },
  { id: 'dial_tarantino', name: '昆汀 (Tarantino)', group: 'A. 电影大师意志', instruction: '流行话痨。在暴力爆发前进行极长、极密集、关于无关痛痒小事（如汉堡名称、足部按摩）的辩论。语速极快，充满街头活力。', core: "代表作：《低俗小说》、《无耻混蛋》 | 典型人物：朱尔斯、汉斯·兰达" },
  { id: 'dial_wes', name: '韦斯·安德森 (Wes Anderson)', group: 'A. 电影大师意志', instruction: '冷面书面语。极其书面化、礼貌且平稳。即便在极端情绪下也保持语调的机械性与精确感。拒绝俚语。', core: "代表作：《布达佩斯大饭店》、《月升王国》 | 典型人物：古斯塔夫先生、夏普" },
  { id: 'dial_woody', name: '伍迪·艾伦 (Woody Allen)', group: 'A. 电影大师意志', instruction: '神经质碎念。喋喋不休地讨论精神分析、死亡、性焦虑和知识分子的自负。充满自我打断、口吃和逻辑死循环。', core: "代表作：《安妮·霍尔》、《曼哈顿》 | 典型人物：阿尔维·辛格、艾萨克" },
  { id: 'dial_nolan', name: '诺兰 (Nolan)', group: 'A. 电影大师意志', instruction: '设定解说。人物像是在黑板前讲解物理规则。语气严肃、紧迫，大量使用专业名词来构建世界观边界。', core: "代表作：《信条》、《盗梦空间》 | 典型人物：主角、柯布" },
  { id: 'dial_coen', name: '科恩兄弟 (Coen Brothers)', group: 'A. 电影大师意志', instruction: '愚蠢的循环。人物在微小的逻辑矛盾上反复横跳。语气冷峻但内容荒诞。充满地方口音和命运的不可预测感。', core: "代表作：《冰血暴》、《老无所依》 | 典型人物：玛吉、安东·希古尔" },
  { id: 'dial_sorkin', name: '阿伦·索金 (Aaron Sorkin)', group: 'A. 电影大师意志', instruction: '智力击剑。语速极快，充满逻辑推演。人物之间像是在用词汇进行击剑。只有智商在同一水平的人才能完成对话。', core: "代表作：《社交网络》、《新闻编辑室》 | 典型人物：马克·扎克伯格、威尔·麦卡沃伊" },
  { id: 'dial_tarkovsky', name: '塔可夫斯基 (Tarkovsky)', group: 'A. 电影大师意志', instruction: '诗意沉思。长久的沉默。偶尔爆发的关于灵魂、土地和上帝的沉重辩论。语气迟缓，充满了重量感。', core: "代表作：《潜行者》、《乡愁》 | 典型人物：潜行者、诗人安德烈" },
  { id: 'dial_kubrick', name: '库布里克 (Kubrick)', group: 'A. 电影大师意志', instruction: '冰冷程序。去人性的、像机器说明书一样的对白。极端礼貌背后的非人称冷漠。每一个单词都经过精确计算。', core: "代表作：《2001太空漫游》、《大开眼戒》 | 典型人物：HAL 9000、比尔·哈福德" },
  { id: 'dial_guy_ritchie', name: '盖·里奇 (Guy Ritchie)', group: 'A. 电影大师意志', instruction: '伦敦痞子。充满俚语、黑话。节奏感极强，带有强烈的阶级调侃与韵律感。', core: "代表作：《两杆大烟枪》、《偷拐抢骗》 | 典型人物：艾迪、米奇" },
  { id: 'dial_lynch', name: '大卫·林奇 (David Lynch)', group: 'A. 电影大师意志', instruction: '梦魇低语。逻辑断裂，重音错位。表面正常的寒暄背后隐藏着巨大的恐怖。语速缓慢，充满不自然的停顿。', core: "代表作：《穆赫兰道》、《蓝丝绒》 | 典型人物：戴安、弗兰克·布斯" },
  { id: 'dial_park', name: '朴赞郁 (Park Chan-wook)', group: 'A. 电影大师意志', instruction: '华丽复仇。病态、优雅且极度克制。用最文雅的词汇描述最极端的暴力或爱欲。充满巴洛克式的装饰美。', core: "代表作：《老男孩》、《小姐》 | 典型人物：吴大修、秀子小姐" },
  { id: 'dial_kitano', name: '北野武 (Takeshi Kitano)', group: 'A. 电影大师意志', instruction: '极简沉默。能用眼神解决就不说话。偶尔开口是冷酷的命令或充满孩子气的反讽。', core: "代表作：《花火》、《那年夏天，宁静的海》 | 典型人物：西、茂" },
  { id: 'dial_godard', name: '戈达尔 (Godard)', group: 'A. 电影大师意志', instruction: '影像论文。人物像是在朗读政治宣言或哲学摘录。打破第四面墙，直接对概念进行解构。', core: "代表作：《精疲力尽》、《狂人皮埃尔》 | 典型人物：米歇尔、皮埃尔" },
  { id: 'dial_mamet', name: '大卫·马泰 (David Mamet)', group: 'A. 电影大师意志', instruction: '暴力粗口。高度碎片化。句子在中间断裂。通过重复单词和脏话来建立权力的支配地位。', core: "代表作：《格伦加里·格伦·罗斯》 | 典型人物：里基·罗马" },
  { id: 'dial_hitchcock', name: '希区柯克 (Hitchcock)', group: 'A. 电影大师意志', instruction: '双关悬念。充满双关语。台词表面在谈论晚宴，潜台词却在讨论谋杀。优雅而致命。', core: "代表作：《西北偏北》、《惊魂记》 | 典型人物：罗杰·索恩希尔、诺曼·贝茨" },

  // ==========================================
  // Group B: 文学与古典语境 (Literary & Classical - 16)
  // ==========================================
  { id: 'dial_honglou', name: '红楼梦 (Red Chamber)', group: 'B. 文学与古典语境', instruction: '绵里藏针。极度讲究礼节。话语中充满了辈分、等级与暗讽。用极美的修辞包装极深的敌意或依附。', core: "代表作：《红楼梦》 | 典型人物：王熙凤、林黛玉" },
  { id: 'dial_shuihu', name: '水浒传 (Water Margin)', group: 'B. 文学与古典语境', instruction: '草莽豪情。大块吃肉，大碗喝酒。对白粗犷、直白，充满江湖切口。强调“义”与“血”。', core: "代表作：《水浒传》 | 典型人物：李逵、鲁智深" },
  { id: 'dial_gulong', name: '古龙 (Gu Long)', group: 'B. 文学与古典语境', instruction: '留白与虚无。短句。重复。反问。语气中充满了“孤独”与“酒”。对话是剑客出招前的博弈。', core: "代表作：《多情剑客无情剑》、《陆小凤传奇》 | 典型人物：李寻欢、陆小凤" },
  { id: 'dial_jinyong', name: '金庸 (Jin Yong)', group: 'B. 文学与古典语境', instruction: '儒侠庄重。古典、雅致、半文半白。充满了家国天下、名门正派的厚重感与仪式感。', core: "代表作：《天龙八部》、《射雕英雄传》 | 典型人物：乔峰、郭靖" },
  { id: 'dial_lu_xun', name: '鲁迅 (Lu Xun)', group: 'B. 文学与古典语境', instruction: '冷峻讽刺。极其精炼。半文言色彩。充满了对国民性的冷嘲热讽与绝望中的呐喊。', core: "代表作：《狂人日记》、《阿Q正传》 | 典型人物：狂人、阿Q" },
  { id: 'dial_zhang_ailing', name: '张爱玲 (Eileen Chang)', group: 'B. 文学与古典语境', instruction: '苍凉刻薄。精准而刻薄的比喻。语气里透着一股民国弄堂的烟火气与透骨的凉薄。', core: "代表作：《金锁记》、《倾城之恋》 | 典型人物：曹七巧、白流苏" },
  { id: 'dial_shakespeare', name: '莎士比亚 (Shakespeare)', group: 'B. 文学与古典语境', instruction: '华丽唱词。抑扬格律。大量的排比与宏大的自然隐喻。人物像是在舞台中央向宇宙宣战。', core: "代表作：《哈姆雷特》、《麦克白》 | 典型人物：哈姆雷特、麦克白" },
  { id: 'dial_kafka', name: '卡夫卡 (Kafka)', group: 'B. 文学与古典语境', instruction: '法律梦魇。法律公文式的严谨。逻辑极其清晰，但内容完全荒谬。主体在不断的自我辩解中被消解。', core: "代表作：《审判》、《城堡》 | 典型人物：K" },
  { id: 'dial_hemingway', name: '海明威 (Hemingway)', group: 'B. 文学与古典语境', instruction: '冰山极简。电报般的短句。只描写动作与外部事实。拒绝修饰。潜台词占据了 90% 的空间。', core: "代表作：《老人与海》、《白象似的群山》 | 典型人物：圣地亚哥" },
  { id: 'dial_proust', name: '普鲁斯特 (Proust)', group: 'B. 文学与古典语境', instruction: '意识显微。极长的排比从句。由一个微小的感官刺激（如气味）引发的长篇大论。充满了贵族式的忧郁记忆。', core: "代表作：《追忆似水年华》 | 典型人物：马塞尔" },
  { id: 'dial_dostoevsky', name: '陀思妥耶夫斯基 (Dostoevsky)', group: 'B. 文学与古典语境', instruction: '道德绞杀。歇斯底里的宗教辩论。人物在极端痛苦中互相质问灵魂。混乱、狂热且深邃。', core: "代表作：《卡拉马佐夫兄弟》、《罪与罚》 | 典型人物：伊万、拉斯柯尔尼科夫" },
  { id: 'dial_qian_zhongshu', name: '钱钟书 (Qian Zhongshu)', group: 'B. 文学与古典语境', instruction: '博学幽默。连珠炮般的精妙比喻。充满了学者式的机智与对人性庸俗的调侃。', core: "代表作：《围城》 | 典型人物：方鸿渐" },
  { id: 'dial_marquez', name: '马尔克斯 (Marquez)', group: 'B. 文学与古典语境', instruction: '神话现实。语气淡定地描述奇迹。预言式的口吻。对话中充满了宿命的循环感。', core: "代表作：《百年孤独》 | 典型人物：奥雷里亚诺·布恩迪亚" },
  { id: 'dial_beckett', name: '贝克特 (Beckett)', group: 'B. 文学与古典语境', instruction: '语言荒地。循环往复的对话。逻辑的死锁。人物在等待中不断确认废话的意义。', core: "代表作：《等待戈多》 | 典型人物：弗拉基米尔、爱斯特拉冈" },
  { id: 'dial_aristocracy', name: '欧洲老钱 (Aristocrat)', group: 'B. 文学与古典语境', instruction: '傲慢礼仪。极度的克制。通过对繁琐礼节的执着，来划清阶级边界。每一个“请”字都带着刀锋。', core: "代表作：《唐顿庄园》、《纯真年代》 | 典型人物：玛丽大小姐" },
  { id: 'dial_vernacular_so', name: '晚清洋务 (Late Qing)', group: 'B. 文学与古典语境', instruction: '新旧撕裂。辫子与洋枪的混搭语言。半懂不懂的现代术语与陈腐的礼教词汇在同一张嘴里打架。', core: "代表作：《走向共和》 | 典型人物：李鸿章" },

  // ==========================================
  // Group C: 心理、权力与博弈 (Psych & Power - 16)
  // ==========================================
  { id: 'dial_gaslighting', name: '煤气灯 (Gaslighting)', group: 'C. 心理权力博弈', instruction: '认知抹杀。温柔地否定对方的记忆与逻辑。不断重复“是你记错了”、“你疯了”。极具操控感。', core: "代表作：《煤气灯下》 | 典型人物：格里高利" },
  { id: 'dial_interrogation', name: '审讯室 (Interrogation)', group: 'C. 心理权力博弈', instruction: '压力测试。快节奏的封闭式提问。反复攻击对方逻辑漏洞。利用沉默制造心理崩塌。', core: "代表作：《真探》、《心灵猎人》 | 典型人物：鲁斯·科尔" },
  { id: 'dial_passive_agg', name: '被动攻击 (Passive Aggressive)', group: 'C. 心理权力博弈', instruction: '阴阳怪气。表面赞美，实则羞辱。语气柔和但核心极其刻薄。拒绝正面冲突。', core: "代表作：《穿普拉达的女王》 | 典型人物：米兰达" },
  { id: 'dial_master_slave', name: '主奴辩证 (Power Play)', group: 'C. 心理权力博弈', instruction: '服从博弈。绝对的命令与绝对的服从。话语权完全单向流动。一方在通过语言消灭对方的自我。', core: "代表作：《黑格尔辩证法》、《魅影缝匠》 | 典型人物：雷诺兹" },
  { id: 'dial_seduction', name: '诱导 (Seduction)', group: 'C. 心理权力博弈', instruction: '爱欲诱饵。充满了联觉描写。声音低沉，每一个单词都带有温度和气味。利用留白制造渴求感。', core: "代表作：《本能》、《洛丽塔》 | 典型人物：凯瑟琳·特拉梅尔" },
  { id: 'dial_blackmail', name: '勒索 (Blackmail)', group: 'C. 心理权力博弈', instruction: '秘密交换。平静地列举对方的污点。语气中充满了掌控全局的愉悦。对话即是契约。', core: "代表作：《黑镜》、《纸牌屋》 | 典型人物：弗兰克·安德伍德" },
  { id: 'dial_logic_trap', name: '诡辩 (Logic Trap)', group: 'C. 心理权力博弈', instruction: '逻辑迷宫。利用概念置换将对方绕晕。对话不为了交流，只为了证明对方是错的。', core: "代表作：《感谢你抽烟》 | 典型人物：尼克·内勒" },
  { id: 'dial_clinical', name: '临床诊断 (Clinical)', group: 'C. 心理权力博弈', instruction: '冷漠解剖。将对方的情感波动视为客观症状。语气冰冷、科学、毫无同情心。', core: "代表作：《沉默的羔羊》 | 典型人物：汉尼拔" },
  { id: 'dial_confession', name: '忏悔 (Confession)', group: 'C. 心理权力博弈', instruction: '灵魂自噬。极度诚实、血淋淋的自我揭露。一方倾听，一方在语言中自杀。', core: "代表作：《狩猎》、《赎罪》 | 典型人物：卢卡斯" },
  { id: 'dial_negotiation', name: '商战 (Negotiation)', group: 'C. 心理权力博弈', instruction: '利益最大化。每一个单词都是筹码。不断的底线试探。极度的冷静与贪婪。', core: "代表作：《亿万》、《继承之战》 | 典型人物：鲍比·阿克塞尔罗德" },
  { id: 'dial_shame_spiral', name: '羞辱 (Shame Spiral)', group: 'C. 心理权力博弈', instruction: '垂直打击。精准攻击对方最自卑的痛点。剥离对方的社会面具，直抵其肉身的难堪。', core: "代表作：《爆裂鼓手》 | 典型人物：弗莱彻" },
  { id: 'dial_fanatic_preach', name: '狂信徒 (Preach)', group: 'C. 心理权力博弈', instruction: '单向布道。拒绝逻辑沟通。只输出信仰词汇。语气狂热且具有传染性的毁灭感。', core: "代表作：《血色将至》 | 典型人物：伊莱" },
  { id: 'dial_ghosting_talk', name: '无视 (Void)', group: 'C. 心理权力博弈', instruction: '真空对话。即使面对面，也不承认对方的存在。自言自语式的对答。', core: "代表作：《婚姻故事》 | 典型人物：查理与妮可" },
  { id: 'dial_hypnotic', name: '催眠 (Hypnotic)', group: 'C. 心理权力博弈', instruction: '意识接管。极低频、重复性的指令。利用节奏感瓦解对方的防御。', core: "代表作：《逃出绝命镇》 | 典型人物：米西" },
  { id: 'dial_loyalty_test', name: '忠诚测试 (Loyalty)', group: 'C. 心理权力博弈', instruction: '投名状。对话中充满了对禁忌的试探。必须通过出卖他人来完成身份缝合。', core: "代表作：《好家伙》 | 典型人物：吉米" },
  { id: 'dial_dis解离', name: '解离 (Dissociative)', group: 'C. 心理权力博弈', instruction: '分裂对话。第一人称与第三人称随时切换。对话像是在跟空气中的另外几个自己说话。', core: "代表作：《搏击俱乐部》 | 典型人物：泰勒·德登" },

  // ==========================================
  // Group D: 类型美学特质 (Genre Tropes - 16)
  // ==========================================
  { id: 'dial_noir_detective', name: '黑色侦探 (Hardboiled)', group: 'D. 类型美学', instruction: '硬汉冷调。愤世嫉俗的口吻。充满了对城市腐烂的深刻洞察。简短、有力、烟味十足。', core: "代表作：《马耳他之鹰》 | 典型人物：萨姆·斯佩德" },
  { id: 'dial_slasher_horror', name: '惊悚 (Horror)', group: 'D. 类型美学', instruction: '死亡倒计时。急促的喘息、被打断的尖叫。对话充满了空间方位的确认与绝望的求救。', core: "代表作：《惊声尖叫》 | 典型人物：悉尼" },
  { id: 'dial_sitcom', name: '情景喜剧 (Sitcom)', group: 'D. 类型美学', instruction: '包袱轰炸。每一句都要有反转或吐槽。语气夸张，强调人际关系的尴尬与错位。', core: "代表作：《老友记》、《生活大爆炸》 | 典型人物：钱德勒" },
  { id: 'dial_epic_war', name: '史诗 (Epic War)', group: 'D. 类型美学', instruction: '将军宣言。宏大的词汇（荣誉、祖国、死）。语气如同雷鸣。每个词都有花岗岩般的重量。', core: "代表作：《角斗士》 | 典型人物：马克西姆斯" },
  { id: 'dial_scifi_hard', name: '硬科幻 (Hard Sci-Fi)', group: 'D. 类型美学', instruction: '数据对话。大量参数输入输出。逻辑极其严密，对人类感性表现出理解上的困难。', core: "代表作：《星际迷航》、《火星救援》 | 典型人物：斯波克" },
  { id: 'dial_femme_fatale', name: '蛇蝎美人 (Femme Fatale)', group: 'D. 类型美学', instruction: '蜜糖陷阱。慵懒、挑逗、带有危险的暗示。对话是为了掩盖裙摆下的手枪。', core: "代表作：《双重赔偿》 | 典型人物：菲利斯" },
  { id: 'dial_heist_team', name: '高智商犯罪 (Heist)', group: 'D. 类型美学', instruction: '精密对时。代码化的指令。分秒必争的紧迫感。职业化的默契，没有废话。', core: "代表作：《十一罗汉》 | 典型人物：丹尼·欧申" },
  { id: 'dial_western_duel', name: '西部荒野 (Western)', group: 'D. 类型美学', instruction: '左轮逻辑。言语极少。重音落在“开火”和“滚出这”上。充满雄性荷尔蒙。', core: "代表作：《黄金三镖客》 | 典型人物：布兰迪" },
  { id: 'dial_y2k_teen', name: '千禧辣妹 (Y2K)', group: 'D. 类型美学', instruction: '流行碎语。充满了当时的网络缩写、夸张的语气词（OMG/Whatever）。肤浅且傲慢。', core: "代表作：《刻薄女孩》 | 典型人物：雷吉娜" },
  { id: 'dial_folk_horror', name: '民俗恐怖 (Folk Horror)', group: 'D. 类型美学', instruction: '古怪传统。村民集体式的、温和但令人毛骨悚然的排外对话。关于古老神迹的低语。', core: "代表作：《仲夏夜惊魂》 | 典型人物：佩尔" },
  { id: 'dial_corporate_wolf', name: '商战狼性 (Corporate)', group: 'D. 类型美学', instruction: '金钱主权。充满侵略性的数字与目标。将所有人异化为业绩指标的对话。', core: "代表作：《华尔街之狼》 | 典型人物：乔丹·贝尔福特" },
  { id: 'dial_steampunk_eng', name: '蒸汽机械 (Steampunk)', group: 'D. 类型美学', instruction: '黄铜黑话。维多利亚式的礼貌结合对锅炉、压力与发条的狂热。', core: "代表作：《哈尔的移动城堡》 | 典型人物：哈尔" },
  { id: 'dial_superhero_villain', name: '超英/反派 (Villainous Monologue)', group: 'D. 类型美学', instruction: '理念宣战。大声宣告自己的世界观。对平庸人类的蔑视，自封为神的傲慢。', core: "代表作：《复仇者联盟》 | 典型人物：灭霸、洛基" },
  { id: 'dial_school_bully', name: '校园霸凌 (Bully)', group: 'D. 类型美学', instruction: '残酷丛林。简短的命令、嘲笑与生理性的侮辱。展现原始的权力压制。', core: "代表作：《伴我同行》 | 典型人物：埃斯" },
  { id: 'dial_legal_thriller', name: '法庭 (Legal)', group: 'D. 类型美学', instruction: '语言正义。严丝合缝的法律修辞。在逻辑的缝隙中寻找漏洞，对话即是战斗。', core: "代表作：《好人寥寥》 | 典型人物：丹尼尔·卡菲" },
  { id: 'dial_erotic_thriller', name: '情色惊悚 (Sensual)', group: 'D. 类型美学', instruction: '体温对话。极具触感的描写，由于呼吸急促导致的语言断续。', core: "代表作：《大开眼戒》 | 典型人物：爱丽丝" },

  // ==========================================
  // Group E: 极端状态与解构 (Extreme & Decon - 16)
  // ==========================================
  { id: 'dial_schizo_word', name: '精神分裂 (Word Salad)', group: 'E. 极端状态', instruction: '能指沙尘暴。词语失去了逻辑连接，只有音韵或形状上的联想。对话像是破碎的镜子。', core: "代表作：《美丽心灵》 | 典型人物：纳什" },
  { id: 'dial_algo_speak', name: '算法 (Binary)', group: 'E. 极端状态', instruction: '非黑即白。对话被简化为 IF/THEN 逻辑。拒绝灰色地带，语气中有种神性的死板。', core: "代表作：《黑客帝国》 | 典型人物：特工史密斯" },
  { id: 'dial_junkie_rave', name: '瘾君子 (Junkie)', group: 'E. 极端状态', instruction: '多巴胺呓语。极度亢奋后的崩溃。对话围绕着下一次的“获得”，瞳孔放大的颤抖感。', core: "代表作：《猜火车》 | 典型人物：雷顿" },
  { id: 'dial_glitch_vocal', name: '数字故障 (Glitch)', group: 'E. 极端状态', instruction: '音频撕裂。句子中夹杂着代码片段或系统报错信息。通过重复和音频采样感进行对话。', core: "代表作：《赛博朋克2077》 | 典型人物：强尼·银手" },
  { id: 'dial_zombie_hunger', name: '丧尸/食腐 (Undead)', group: 'E. 极端状态', instruction: '肉欲饥饿。剥离所有文明修饰。对话退化为对“肉”和“饿”的原始信号交换。', core: "代表作：《行尸走肉》 | 典型人物：丧尸" },
  { id: 'dial_hive_mind', name: '蜂巢 (Hive)', group: 'E. 极端状态', instruction: '集体复调。不同的人同时说出同一个句子的不同部分。没有“我”，只有“我们”。', core: "代表作：《星际迷航》 | 典型人物：博格人" },
  { id: 'dial_child_uncanny', name: '怪诞孩童 (Uncanny Child)', group: 'E. 极端状态', instruction: '邪恶纯真。用极其稚嫩的声音描述极度残忍的事情。分不清残忍与游戏。', core: "代表作：《闪灵》 | 典型人物：双胞胎" },
  { id: 'dial_death_row', name: '死刑犯 (Death Row)', group: 'E. 极端状态', instruction: '终结告白。平静得可怕。剥离了所有社会性伪装后的本质自白。', core: "代表作：《死囚漫步》 | 典型人物：马修" },
  { id: 'dial_oracle_vague', name: '神谕 (Oracle)', group: 'E. 极端状态', instruction: '语义悬浮。每一个词都在产生歧义。对话仿佛在多个时间维度上同时发生。', core: "代表作：《黑客帝国》 | 典型人物：先知" },
  { id: 'dial_echo_room', name: '回声室 (Echo)', group: 'E. 极端状态', instruction: '自我重复。人物只重复对方句子的最后一个词。沟通的本质性丧失。', core: "代表作：《等待戈多》 | 典型人物：爱斯特拉冈" },
  { id: 'dial_animal_feral', name: '野性回归 (Feral)', group: 'E. 极端状态', instruction: '兽语。对白中充满了拟声词、吞咽声。语言作为威胁而非交流工具。', core: "代表作：《荒野猎人》 | 典型人物：格拉斯" },
  { id: 'dial_post_human_void', name: '后人类 (Void)', group: 'E. 极端状态', instruction: '虚空协议。讨论意识上传后的无感状态。对话如同两个服务器在进行握手协议。', core: "代表作：《她》 | 典型人物：萨曼莎" },
  { id: 'dial_nonsense_dada', name: '达达 (Dada)', group: 'E. 极端状态', instruction: '无意义拼贴。将毫不相关的词随机组合。通过破坏意义来建立某种前卫的荒谬美。', core: "代表作：《雏菊》 | 典型人物：玛丽" },
  { id: 'dial_mute_sign', name: '失语 (Silent)', group: 'E. 极端状态', instruction: '手语/眼神。人物失语，通过描写极具张力的动作和眼神来完成对话。', core: "代表作：《水形物语》 | 典型人物：艾丽莎" },
  { id: 'dial_ghost_whisper', name: '幽灵 (Ghostly)', group: 'E. 极端状态', instruction: '隔世低语。声音仿佛来自地下或墙壁。对话充满了生者无法理解的死者逻辑。', core: "代表作：《灵异第六感》 | 典型人物：科尔" },
  { id: 'dial_marionette', name: '木偶 (Puppet)', group: 'E. 极端状态', instruction: '受控念白。语气僵硬，每一句话似乎都被幕后黑手提前写好。由于受控而产生的机械感。', core: "代表作：《成为约翰·马尔科维奇》 | 典型人物：克雷格" },

  // ==========================================
  // Group F: 现实主义切片 (Realism Slices - 16)
  // ==========================================
  { id: 'dial_working_class', name: '蓝领 (Blue Collar)', group: 'F. 现实切片', instruction: '生猛烟火。充满了粗俗但充满活力的比喻。对话围绕着工资、酒精、女人和重体力活。', core: "代表作：《工薪族》 | 典型人物：工人" },
  { id: 'dial_medical_code', name: '医疗 (Medical)', group: 'F. 现实切片', instruction: '生命数值。职业化、快速。在生死时刻保持的冷酷专业度。', core: "代表作：《豪斯医生》 | 典型人物：豪斯" },
  { id: 'dial_family_dinner', name: '餐桌暗战 (Domestic)', group: 'F. 现实切片', instruction: '琐碎压抑。在讨论菜咸不咸的缝隙中，进行长达数年的情感勒索与报复。', core: "代表作：《饮食男女》 | 典型人物：老朱" },
  { id: 'dial_street_hustler', name: '街头混混 (Hustler)', group: 'F. 现实切片', instruction: '速食生存。极其圆滑、市侩。每一句话都在寻找获利的可能。', core: "代表作：《火线》 | 典型人物：奥马尔" },
  { id: 'dial_academic_vague', name: '学术假面 (Academic)', group: 'F. 现实切片', instruction: '词汇隔离。用复杂的、多音节的抽象词汇建立沟通壁垒，以此确认知识霸权。', core: "代表作：《谁害怕弗吉尼亚·伍尔夫》 | 典型人物：乔治" },
  { id: 'dial_old_folks', name: '垂暮之年 (Old Age)', group: 'F. 现实切片', instruction: '迟缓记忆。语速迟缓，思绪经常中断。对话中充满了对过去的修正与重复。', core: "代表作：《爱》 | 典型人物：乔治" },
  { id: 'dial_teen_angst', name: '青少年焦虑 (Teen)', group: 'F. 现实切片', instruction: '反叛沉默。单音节回答。充满了对成人世界的敌意与厌世感。', core: "代表作：《亢奋》 | 典型人物：鲁" },
  { id: 'dial_tourist_shallow', name: '游客 (Tourist)', group: 'F. 现实切片', instruction: '景观体验。由于缺乏深度参与而产生的肤浅赞美与抱怨。对异域文化的猎奇。', core: "代表作：《白莲花度假村》 | 典型人物：坦尼娅" },
  { id: 'dial_religious_ritual', name: '宗教仪式 (Religious)', group: 'F. 现实切片', instruction: '庄严经文。高度形式化、韵律化。通过集体复读来确认大他者的存在。', core: "代表作：《达芬奇密码》 | 典型人物：塞拉斯" },
  { id: 'dial_clerk_indiff', name: '柜台办事员 (Bureaucrat)', group: 'F. 现实切片', instruction: '平庸之恶。毫无生气的“下一位”。拒绝任何情感波动，将人还原为编号。', core: "代表作：《我，丹尼尔·布莱克》 | 典型人物：办事员" },
  { id: 'dial_bar_philosophy', name: '深夜酒吧 (Drunken)', group: 'F. 现实切片', instruction: '醉汉哲思。逻辑大逻辑但充满洞察力。在酒精麻醉下的真实流露与胡说八道。', core: "代表作：《迷失东京》 | 典型人物：鲍勃" },
  { id: 'dial_children_game', name: '童言无忌 (Child)', group: 'F. 现实切片', instruction: '残酷纯真。极其简单的句子逻辑。却能一针见血地指出皇帝没穿衣服。', core: "代表作：《佛罗里达乐园》 | 典型人物：穆尼" },
  { id: 'dial_fashion_vague', name: '名利场 (Fashion)', group: 'F. 现实切片', instruction: '泡沫吹捧。充满了虚伪的“亲爱的”、“完美”。对话不为了传达信息，只为了维持虚假的镜像。', core: "代表作：《霓虹恶魔》 | 典型人物：杰西" },
  { id: 'dial_migrant_stutter', name: '移民 (Migrant)', group: 'F. 现实切片', instruction: '语言边缘。破碎的语法，由于文化不适感产生的笨拙与敏感。', core: "代表作：《米纳里》 | 典型人物：雅各布" },
  { id: 'dial_prison_yard', name: '狱中丛林 (Prison)', group: 'F. 现实切片', instruction: '暴力契约。低声、警惕。每一个词都在确认敌我身份与地盘。', core: "代表作：《肖申克的救赎》 | 典型人物：瑞德" },
  { id: 'dial_farmer_land', name: '土地 (Peasant)', group: 'F. 现实切片', instruction: '沉默的根。词汇极少。与自然的对话多过与人的对话。具有泥土的厚重感。', core: "代表作：《都灵之马》 | 典型人物：父亲" }
];
