

import { StyleCategory } from '../types';

export const PERSPECTIVES = [
    { id: 'GOD_MODE', name: '上帝视角 (Third Person Omniscient)', prompt: 'Use an all-knowing, detached perspective that reveals hidden thoughts of all characters.' },
    { id: 'LIMITED', name: '限制视角 (Third Person Limited)', prompt: 'Stick strictly to the protagonist\'s POV. We only know what they know.' },
    { id: 'FIRST_PERSON', name: '第一人称 (First Person "I")', prompt: 'Use "I". Highly subjective, unreliable, filtered through the protagonist\'s bias.' },
    { id: 'SCREENPLAY', name: '剧本视点 (Cinematic/Screenplay)', prompt: 'Write in present tense. Focus purely on visual action and dialogue. No internal monologue.' },
    { id: 'SECOND_PERSON', name: '第二人称 (Second Person "You")', prompt: 'Address the reader/protagonist as "You". Immersive and accusatory.' },
    { id: 'COLLECTIVE', name: '集体视点 (The Collective "We")', prompt: 'Use "We". The voice of a group, a chorus, or a hive mind.' },
    { id: 'UNRELIABLE', name: '不可靠叙述 (Unreliable Narrator)', prompt: 'First person, but the narrator is lying, confused, or insane. Contradict the facts.' },
    { id: 'STREAM', name: '意识流 (Stream of Consciousness)', prompt: 'Fluid, unbroken flow of thoughts, memories, and sensory inputs. Joyce/Woolf style.' },
    { id: 'RETROSPECTIVE', name: '回溯视角 (Retrospective)', prompt: 'An older self looking back at the past with wisdom and regret. "I didn\'t know then..."' },
    { id: 'FLY_ON_WALL', name: '墙上的苍蝇 (Fly on the Wall)', prompt: 'Purely objective observation. No thoughts, no feelings, just behavior. Documentary style.' },
    { id: 'OBJECT_POV', name: '物之眼 (Object POV)', prompt: 'Tell the story from the perspective of an inanimate object (e.g. a gun, a coin).' },
    { id: 'EPISTOLARY', name: '书信体/档案 (Epistolary)', prompt: 'Construct the story through letters, diary entries, logs, or emails.' }
];

export const SENSORY_MODES = [
    { id: 'VISUAL', name: '视觉优先 (Visual Dominant)', prompt: 'While including all senses, prioritize LIGHT, COLOR, and GEOMETRY. Use visual metaphors to describe sound and feeling.' },
    { id: 'AUDITORY', name: '听觉/节奏 (Auditory Dominant)', prompt: 'While including all senses, prioritize SOUND, RHYTHM, and SILENCE. Describe the world through what is heard or the beat of the scene.' },
    { id: 'TACTILE', name: '触觉/质感 (Tactile Dominant)', prompt: 'While including all senses, prioritize TEXTURE, TEMPERATURE, and PAIN. Ground the description in physical sensation and material reality.' },
    { id: 'PSYCHIC', name: '心理/氛围 (Psychic Dominant)', prompt: 'While including all senses, prioritize MOOD, TENSION, and DREAD. The environment should be a reflection of the internal mental state.' },
    { id: 'KINETIC', name: '动能/速度 (Kinetic Dominant)', prompt: 'While including all senses, prioritize MOVEMENT, VELOCITY, and IMPACT. Focus on the choreography of bodies and objects in space.' }
];

export const STYLE_MATRIX: StyleCategory[] = [
  // =================================================================
  // 1. 文学神殿·意识与结构 (The Literary Pantheon)
  // =================================================================
  {
    id: "sector_lit_giants",
    name: "I. 文学神殿·意识与结构 (The Literary Pantheon)",
    items: [
      { 
        id: "joyce", 
        name: "詹姆斯·乔伊斯 (James Joyce)", 
        description: "终极意识流", 
        example: "《尤利西斯》《芬尼根的守灵夜》",
        dna: "完全取消标点符号 + 自由联想的意识碎片 + 创造新词 (Portmanteau) + 百科全书式的细节堆砌 + 晦涩的神话隐喻。" 
      },
      { 
        id: "proust", 
        name: "普鲁斯特 (Marcel Proust)", 
        description: "时光显微镜", 
        example: "《追忆似水年华》",
        dna: "极度绵延的长句（包含多层从句） + 由感官（味觉/嗅觉）触发的非自愿记忆 + 对微小情绪的百字心理分析 + 贵族式的忧郁。" 
      },
      { 
        id: "woolf", 
        name: "弗吉尼亚·伍尔夫 (Virginia Woolf)", 
        description: "流动的波浪", 
        example: "《达洛维夫人》",
        dna: "如水般流动的句式 + 视角在不同人物内心间平滑切换 + 关注瞬间的印象而非情节 + 极具诗意的内心独白。" 
      },
      { 
        id: "faulkner", 
        name: "威廉·福克纳 (William Faulkner)", 
        description: "南方哥特呓语", 
        example: "《喧哗与骚动》",
        dna: "时空错乱（过去与现在混杂） + 长达整页的长句 + 家族的诅咒与衰败 + 智力障碍者视角的纯感官描写 + 晦涩。" 
      },
      { 
        id: "kafka", 
        name: "卡夫卡 (Franz Kafka)", 
        description: "官僚梦魇", 
        example: "《审判》《城堡》",
        dna: "法律文书般严谨枯燥的语言 + 逻辑严密但本质荒谬的事件 + 主角的无力辩解 + 压抑的迷宫式空间。" 
      },
      { 
        id: "nabokov", 
        name: "纳博科夫 (Vladimir Nabokov)", 
        description: "美学暴君", 
        example: "《洛丽塔》",
        dna: "极度华丽、精确且复杂的辞藻 + 不可靠叙述者 + 充满恶作剧的文字游戏 + 对禁忌话题的审美化处理 + 傲慢的智力优越感。" 
      },
      { 
        id: "marquez", 
        name: "马尔克斯 (G.G. Marquez)", 
        description: "魔幻现实主义", 
        example: "《百年孤独》",
        dna: "预言式开头（多年以后） + 夸张的超自然现象被写得像吃饭一样平常 + 宿命论的循环 + 冗长的家谱式罗列。" 
      },
      { 
        id: "borges", 
        name: "博尔赫斯 (Jorge Luis Borges)", 
        description: "迷宫与无限", 
        example: "《小径分叉的花园》",
        dna: "伪造的文献与注脚 + 关于时间、无限、镜子和迷宫的哲学探讨 + 短小精悍但极度烧脑 + 图书馆宇宙。" 
      },
      { 
        id: "calvino", 
        name: "卡尔维诺 (Italo Calvino)", 
        description: "轻盈的寓言", 
        example: "《看不见的城市》",
        dna: "晶莹剔透的想象力 + 数学般的结构美感 + 充满童趣但深邃的寓言 + 对感官细节的极致描绘。" 
      },
      { 
        id: "eco", 
        name: "埃科 (Umberto Eco)", 
        description: "符号学侦探", 
        example: "《玫瑰的名字》",
        dna: "掉书袋式的中世纪知识炫耀 + 符号学隐喻 + 侦探悬疑外壳下的哲学辩论 + 拉丁语引用。" 
      },
      { 
        id: "kundera", 
        name: "米兰·昆德拉 (Milan Kundera)", 
        description: "哲理的轻重", 
        example: "《不能承受的生命之轻》",
        dna: "直接跳出剧情进行哲学议论 + 对‘媚俗’(Kitsch) 的批判 + 性与政治的隐喻 + 冷静的讽刺。" 
      },
      { 
        id: "saramago", 
        name: "萨拉马戈 (José Saramago)", 
        description: "连绵口语河", 
        example: "《失明症漫记》",
        dna: "全文几乎无分段 + 仅用逗号分隔对话 + 只有潜台词没有引号 + 喋喋不休的寓言感。" 
      },
      { 
        id: "melville", 
        name: "梅尔维尔 (Herman Melville)", 
        description: "百科全书式史诗", 
        example: "《白鲸》",
        dna: "莎士比亚式的宏大独白 + 对某一技术（如捕鲸）的枯燥百科全书式描写 + 圣经般的宿命感。" 
      },
      { 
        id: "hugo", 
        name: "雨果 (Victor Hugo)", 
        description: "浪漫主义洪流", 
        example: "《悲惨世界》",
        dna: "宏大的历史背景 + 极度鲜明的善恶对比 + 动辄数页的题外话议论 + 激情澎湃的排比句。" 
      },
      { 
        id: "dickens", 
        name: "狄更斯 (Charles Dickens)", 
        description: "雾都群像", 
        example: "《双城记》",
        dna: "夸张的人物漫画感（口头禅/怪癖） + 极具感染力的环境描写（雾/尘土） + 悬念迭起的连载小说节奏 + 对底层苦难的同情。" 
      }
    ]
  },

  // =================================================================
  // 2. 俄国文学·灵魂拷问 (Russian Soul)
  // =================================================================
  {
    id: "sector_russian",
    name: "II. 俄国文学·灵魂拷问 (The Russian Soul)",
    items: [
      { 
        id: "dostoevsky", 
        name: "陀思妥耶夫斯基 (Dostoevsky)", 
        description: "复调与癫痫", 
        example: "《卡拉马佐夫兄弟》",
        dna: "所有角色都在歇斯底里地辩论 + 极端的道德痛苦 + 宗教般的救赎渴望 + 心理活动的病态解剖 + 混乱而狂热。" 
      },
      { 
        id: "tolstoy", 
        name: "托尔斯泰 (Leo Tolstoy)", 
        description: "全景现实主义", 
        example: "《战争与和平》",
        dna: "上帝般的俯视视角 + 对历史规律的宏大议论 + 极其质朴但精准的心理描写 + 道德说教。" 
      },
      { 
        id: "chekhov", 
        name: "契诃夫 (Anton Chekhov)", 
        description: "零度生活", 
        example: "《樱桃园》",
        dna: "每个人都在说各不相干的话 + 琐碎无聊的日常 + 巨大的停顿 + 无法行动的忧郁 + 悲悯的幽默。" 
      },
      { 
        id: "nabokov_ru", 
        name: "布尔加科夫 (Bulgakov)", 
        description: "魔幻讽刺", 
        example: "《大师与玛格丽特》",
        dna: "魔鬼在莫斯科搞恶作剧 + 荒诞不经的闹剧 + 对权力的辛辣讽刺 + 时空交错。" 
      }
    ]
  },

  // =================================================================
  // 3. 中文古典与历史·东方根骨 (Chinese Classics & Epic)
  // =================================================================
  {
    id: "sector_cn_classic",
    name: "III. 中文古典与历史·东方根骨 (Chinese Classics)",
    items: [
      { 
        id: "caoxueqin", 
        name: "曹雪芹 (Cao Xueqin)", 
        description: "红楼梦中人", 
        example: "《红楼梦》",
        dna: "半文半白 + 极度细腻的服饰/饮食/医药描写 + ‘草蛇灰线’的伏笔 + 繁华背后的虚无感 + 判词般的宿命。" 
      },
      { 
        id: "sanguo", 
        name: "罗贯中 (Romance of 3 Kingdoms)", 
        description: "演义宏大叙事", 
        example: "《三国演义》",
        dna: "极度脸谱化的忠奸对比 + 计谋与策略的对话 + ‘话说天下大势’的评书语调 + 只有动作和语言，极少心理描写。" 
      },
      { 
        id: "shinaian", 
        name: "施耐庵 (Water Margin)", 
        description: "江湖草莽", 
        example: "《水浒传》",
        dna: "粗豪的江湖切口 + 对暴力的直白描写（拳打脚踢） + 大块吃肉的豪迈 + 极具动感的打斗动词。" 
      },
      { 
        id: "liaozhai", 
        name: "蒲松龄 (Strange Tales)", 
        description: "文言志怪", 
        example: "《聊斋志异》",
        dna: "精炼的文言风韵 + 花妖狐魅的拟人化 + 书生与女鬼的套路 + 对现实的暗讽 + 朦胧意境。" 
      },
      { 
        id: "lingmengchu", 
        name: "三言二拍 (Sanyan Erpai)", 
        description: "市井警世", 
        example: "《喻世明言》",
        dna: "劝善惩恶的说教 + 市井小人物的贪嗔痴 + 因果报应的结构 + 露骨的世俗欲望描写。" 
      },
      { 
        id: "shijing", 
        name: "诗经楚辞 (Classic of Poetry)", 
        description: "上古歌谣", 
        example: "《离骚》",
        dna: "四言/骚体韵律 + 大量的香草美人比喻 + 兮/之/乎的虚词 + 质朴的情感宣泄。" 
      }
    ]
  },

  // =================================================================
  // 4. 中文现当代·独异之声 (Chinese Modern & Unique Voices)
  // =================================================================
  {
    id: "sector_cn_modern",
    name: "IV. 中文现当代·独异之声 (Chinese Modern)",
    items: [
      { 
        id: "luxun", 
        name: "鲁迅 (Lu Xun)", 
        description: "民族魂", 
        example: "《狂人日记》",
        dna: "半文半白 + 极其冷峻的黑色幽默 + ‘吃人’的隐喻 + 描写‘看客’的麻木 + 绝望中的呐喊。" 
      },
      { 
        id: "zhangailing", 
        name: "张爱玲 (Eileen Chang)", 
        description: "苍凉传奇", 
        example: "《金锁记》",
        dna: "刻薄而精准的比喻 + 华丽色彩与苍凉底色的反差 + 对人性阴暗面的冷眼旁观 + 上海弄堂气。" 
      },
      { 
        id: "qianzhongshu", 
        name: "钱钟书 (Qian Zhongshu)", 
        description: "学者幽默", 
        example: "《围城》",
        dna: "连珠炮式的精妙比喻 + 贯通中西的引经据典 + 对知识分子的辛辣嘲讽 + 智力游戏。" 
      },
      { 
        id: "shencongwen", 
        name: "沈从文 (Shen Congwen)", 
        description: "湘西牧歌", 
        example: "《边城》",
        dna: "水墨画般的风景描写 + 纯真原始的人性 + 淡淡的哀愁 + 乡土气息。" 
      },
      { 
        id: "wangshuo", 
        name: "王朔 (Wang Shuo)", 
        description: "京味痞气", 
        example: "《顽主》",
        dna: "北京大院俚语 + 调侃一切崇高 + 玩世不恭的自嘲 + 极快的语言节奏 + 骨子里的虚无。" 
      },
      { 
        id: "moyan", 
        name: "莫言 (Mo Yan)", 
        description: "高密魔幻", 
        example: "《红高粱》",
        dna: "极度浓烈的感官色彩（红/血） + 丑陋与生命力的混合 + 幻觉般的现实 + 泥沙俱下的语言洪流。" 
      },
      { 
        id: "yuhua", 
        name: "余华 (Yu Hua)", 
        description: "冷酷极简", 
        example: "《活着》",
        dna: "零度情感叙述 + 惨绝人寰的悲剧被写得像流水账 + 极简的词汇 + 命运的重击。" 
      },
      { 
        id: "jinyong", 
        name: "金庸 (Jin Yong)", 
        description: "武侠巅峰", 
        example: "《天龙八部》",
        dna: "招式名称与内功心法 + 历史与江湖的结合 + 儒家侠义 + 蒙太奇式的打斗描写 + 痴情。" 
      },
      { 
        id: "gulong", 
        name: "古龙 (Gu Long)", 
        description: "散文诗武侠", 
        example: "《多情剑客无情剑》",
        dna: "极短的段落（一行一句） + 数字化描写（三寸七分） + 氛围大于招式 + 孤独、酒与女人。" 
      },
      { 
        id: "sanmao", 
        name: "三毛 (Sanmao)", 
        description: "流浪文学", 
        example: "《撒哈拉的故事》",
        dna: "极其真诚的口语化 + 异域风情 + 对生活琐碎的热爱 + 自由不羁的灵魂。" 
      },
      { 
        id: "zhenhuan", 
        name: "甄嬛体 (Empresses in Palace)", 
        description: "宫斗权谋", 
        example: "《甄嬛传》",
        dna: "考究的半文言敬语（本宫/小主） + 绵里藏针的潜台词 + 以物喻人 + 极度的阶级感。" 
      }
    ]
  },

  // =================================================================
  // 5. 日本美学·物哀与异色 (Japanese Aesthetics)
  // =================================================================
  {
    id: "sector_jp_lit",
    name: "V. 日本美学·物哀与异色 (Japanese Aesthetics)",
    items: [
      { 
        id: "murakami", 
        name: "村上春树 (Haruki Murakami)", 
        description: "都市冷感", 
        example: "《挪威的森林》",
        dna: "特定的爵士乐/西方品牌 + 制作简单的料理细节 + 枯井/猫的隐喻 + 礼貌而疏离的性爱 + 小资虚无。" 
      },
      { 
        id: "kawabata", 
        name: "川端康成 (Yasunari Kawabata)", 
        description: "新感觉派", 
        example: "《雪国》",
        dna: "俳句般的留白 + 洁癖般的视觉描写 + 徒劳感 + 日本传统美学的极致（艺伎/茶道）。" 
      },
      { 
        id: "mishima", 
        name: "三岛由纪夫 (Yukio Mishima)", 
        description: "金阁寺之美", 
        example: "《金阁寺》",
        dna: "古典而坚硬的文体 + 对肉体和死亡的迷恋 + 暴烈的毁灭美学 + 极其复杂的心理推演。" 
      },
      { 
        id: "dazai", 
        name: "太宰治 (Osamu Dazai)", 
        description: "无赖派", 
        example: "《人间失格》",
        dna: "第一人称的极度自卑 + ‘生而为人，我很抱歉’ + 对讨好他人的恐惧 + 毁灭性的自我剖析。" 
      },
      { 
        id: "rampo", 
        name: "江户川乱步 (Edogawa Rampo)", 
        description: "变格推理", 
        example: "《人间椅子》",
        dna: "对感官（触觉/视觉）的猎奇迷恋 + 幽闭空间 + 华丽而腐烂的辞藻 + 诡异色情 (Eroguro)。" 
      },
      { 
        id: "higashino", 
        name: "东野圭吾 (Keigo Higashino)", 
        description: "社会派推理", 
        example: "《白夜行》",
        dna: "平实的白描文笔 + 犯罪动机源于深沉的爱 + 细致的日常生活描写 + 反转的逻辑。" 
      },
      { 
        id: "natsume", 
        name: "夏目漱石 (Natsume Soseki)", 
        description: "明治知识分子", 
        example: "《我是猫》",
        dna: "猫视角的讽刺 + 知识分子的牢骚 + 悠闲的散文笔调 + 对东西方文化冲突的思考。" 
      }
    ]
  },

  // =================================================================
  // 6. 电影作者·欧美大师 (Western Cinema Auteurs)
  // =================================================================
  {
    id: "sector_film_west",
    name: "VI. 电影作者·欧美大师 (Western Cinema)",
    items: [
      { 
        id: "tarantino", 
        name: "昆汀 (Quentin Tarantino)", 
        description: "暴力话痨", 
        example: "《低俗小说》",
        dna: "无意义的流行文化长对话 + 突然的血腥爆发 + 足部特写 + 非线性叙事 + 70年代配乐感。" 
      },
      { 
        id: "kubrick", 
        name: "库布里克 (Stanley Kubrick)", 
        description: "绝对理性", 
        example: "《2001太空漫游》",
        dna: "一点透视的完美对称构图 + 极度冷漠客观的凝视 + 诡异的古典乐 + 人类的异化。" 
      },
      { 
        id: "wes", 
        name: "韦斯·安德森 (Wes Anderson)", 
        description: "对称童话", 
        example: "《布达佩斯大饭店》",
        dna: "绝对对称 + 清单式列举物品 + 鲜艳粉彩配色 + 毫无表情的死板对话 + 精致的微缩模型感。" 
      },
      { 
        id: "nolan", 
        name: "诺兰 (Christopher Nolan)", 
        description: "时间魔术", 
        example: "《信条》",
        dna: "复杂的时间线交错 + 大量的设定解释性对话 (Exposition) + 宏大的实景破坏 + 汉斯季默的轰鸣配乐。" 
      },
      { 
        id: "lynch", 
        name: "大卫·林奇 (David Lynch)", 
        description: "梦魇逻辑", 
        example: "《穆赫兰道》",
        dna: "低频噪音 + 极度尴尬的长时间停顿 + 看起来正常但令人不安的微笑 + 梦境般的非线性逻辑。" 
      },
      { 
        id: "hitchcock", 
        name: "希区柯克 (Alfred Hitchcock)", 
        description: "悬疑大师", 
        example: "《惊魂记》",
        dna: "让观众知道炸弹在那里的悬念 + 金发女郎 + 窥视视角 + 麦格芬 (MacGuffin) 驱动。" 
      },
      { 
        id: "scorsese", 
        name: "斯科塞斯 (Martin Scorsese)", 
        description: "黑帮史诗", 
        example: "《好家伙》",
        dna: "密集的摇滚乐铺底 + 极快的第一人称旁白 + 暴力的突然爆发 + 长镜头跟拍 + 罪恶的魅力。" 
      },
      { 
        id: "woody", 
        name: "伍迪·艾伦 (Woody Allen)", 
        description: "纽约神经质", 
        example: "《安妮·霍尔》",
        dna: "结巴的知识分子独白 + 精神分析术语 + 对死亡和性的无休止焦虑 + 曼哈顿爵士乐。" 
      },
      { 
        id: "coen", 
        name: "科恩兄弟 (Coen Brothers)", 
        description: "荒诞虚无", 
        example: "《冰血暴》",
        dna: "愚蠢角色的车轱辘话 + 极度血腥下的平静对话 + 极其礼貌的杀手 + 命运的恶作剧。" 
      },
      { 
        id: "fincher", 
        name: "芬奇 (David Fincher)", 
        description: "精确控制狂", 
        example: "《社交网络》",
        dna: "低对比度的黄绿色调 + 像手术刀一样精准的剪辑 + 信息量巨大的对话 + 强迫症般的细节。" 
      },
      { 
        id: "sorkin", 
        name: "阿伦·索金 (Aaron Sorkin)", 
        description: "金句击剑", 
        example: "《新闻编辑室》",
        dna: "极快语速 + 边走边说 (Walk & Talk) + 理想主义演讲 + 只有逻辑没有废话。" 
      },
      { 
        id: "godard", 
        name: "戈达尔 (Jean-Luc Godard)", 
        description: "新浪潮", 
        example: "《精疲力尽》",
        dna: "跳接 (Jump Cut) + 角色打破第四面墙 + 政治口号 + 即兴发挥的松散感。" 
      },
      { 
        id: "tarkovsky", 
        name: "塔科夫斯基 (Andrei Tarkovsky)", 
        description: "诗意雕刻", 
        example: "《潜行者》",
        dna: "极长镜头 + 水、火、马的意象 + 极少的对白 + 废墟中的哲学沉思 + 宗教感。" 
      }
    ]
  },

  // =================================================================
  // 7. 电影作者·亚洲风暴 (Asian Cinema Auteurs)
  // =================================================================
  {
    id: "sector_film_asia",
    name: "VII. 电影作者·亚洲风暴 (Asian Cinema)",
    items: [
      { 
        id: "wongkarwai", 
        name: "王家卫 (Wong Kar-wai)", 
        description: "时间恋物癖", 
        example: "《重庆森林》",
        dna: "精确的时间戳 + 喃喃自语的独白 + 物品拟人化（过期的罐头） + 抽帧般的模糊感 + 遗憾与错过。" 
      },
      { 
        id: "stephenchow", 
        name: "周星驰 (Stephen Chow)", 
        description: "无厘头", 
        example: "《大话西游》",
        dna: "粤语无厘头逻辑 + 极其夸张的反应 + 小人物的辛酸 + 突然的深情独白 + 结构解构。" 
      },
      { 
        id: "kitano", 
        name: "北野武 (Takeshi Kitano)", 
        description: "暴力蓝调", 
        example: "《花火》",
        dna: "极简的对话 + 长时间的静止镜头 + 没有任何铺垫的突然暴力 + 蓝色大海 + 孩子气的死亡。" 
      },
      { 
        id: "kurosawa", 
        name: "黑泽明 (Akira Kurosawa)", 
        description: "动态武士", 
        example: "《七武士》",
        dna: "极具动感的天气（暴雨/狂风） + 群像调度 + 极端的英雄主义 + 戏剧化的表演。" 
      },
      { 
        id: "bongjoonho", 
        name: "奉俊昊 (Bong Joon-ho)", 
        description: "类型杂学家", 
        example: "《寄生虫》",
        dna: "突如其来的类型片转换（喜剧变惊悚） + 极其具体的阶级隐喻（气味/地下室） + 黑色幽默。" 
      },
      { 
        id: "edwardyang", 
        name: "杨德昌 (Edward Yang)", 
        description: "城市手术刀", 
        example: "《一一》",
        dna: "冷静的中景固定镜头 + 复杂的城市人际关系网 + 对现代性与传统的反思 + 玻璃幕墙的倒影。" 
      },
      { 
        id: "jiangwen", 
        name: "姜文 (Jiang Wen)", 
        description: "荷尔蒙狂想", 
        example: "《让子弹飞》",
        dna: "极度亢奋的节奏 + 充满隐喻的男性对白 + 荒诞的历史解读 + 强烈的舞台感。" 
      },
      { 
        id: "anglee", 
        name: "李安 (Ang Lee)", 
        description: "压抑的情感", 
        example: "《卧虎藏龙》",
        dna: "极其克制的情感表达 + 东西方文化的冲突 + 礼教下的欲望涌动 + 温柔的注视。" 
      },
      { 
        id: "miyazaki", 
        name: "宫崎骏 (Hayao Miyazaki)", 
        description: "万物有灵", 
        example: "《千与千寻》",
        dna: "飞行/风/水的动态描写 + 蒸汽朋克细节 + 勇敢的少女 + 极度诱人的食物 + 反战与自然。" 
      }
    ]
  },

  // =================================================================
  // 8. 戏剧与独白 (Theater & Playwrights)
  // =================================================================
  {
    id: "sector_theater",
    name: "VIII. 戏剧与独白 (Theater)",
    items: [
      { 
        id: "shakespeare", 
        name: "莎士比亚 (Shakespeare)", 
        description: "命运的音韵", 
        example: "《哈姆雷特》",
        dna: "抑扬格五步格 + 宏大的自然隐喻 + 极具哲理的独白 + 命运与性格的悲剧冲突 + 华丽的骂人话。" 
      },
      { 
        id: "beckett", 
        name: "贝克特 (Samuel Beckett)", 
        description: "荒诞等待", 
        example: "《等待戈多》",
        dna: "循环对话 + 极简词汇 + 强调‘无聊’和‘虚无’ + 滑稽而悲惨的重复动作。" 
      },
      { 
        id: "wilde", 
        name: "王尔德 (Oscar Wilde)", 
        description: "唯美毒舌", 
        example: "《道林格雷的画像》",
        dna: "极度华丽的辞藻 + 玩世不恭的悖论格言 + 对庸俗的鄙视 + 唯美主义。" 
      },
      { 
        id: "mamet", 
        name: "大卫·马泰 (David Mamet)", 
        description: "马泰式粗口", 
        example: "《格伦加里·格伦·罗斯》",
        dna: "破碎的句子 + 极具攻击性的脏话 + 赤裸裸的商业权力斗争 + 只有潜台词没有实话。" 
      },
      { 
        id: "brecht", 
        name: "布莱希特 (Bertolt Brecht)", 
        description: "间离效果", 
        example: "《四川好人》",
        dna: "角色突然跳出剧情分析社会问题 + 歌唱般的说教 + 冷静切断情感共鸣 + 政治寓言。" 
      }
    ]
  },

  // =================================================================
  // 9. 类型小说·幻想与冷硬 (Genre: Sci-Fi, Horror, Noir)
  // =================================================================
  {
    id: "sector_genre",
    name: "IX. 类型小说·幻想与冷硬 (Genre Fiction)",
    items: [
      { 
        id: "lovecraft", 
        name: "洛夫克拉夫特 (Lovecraft)", 
        description: "宇宙恐怖", 
        example: "《克苏鲁的呼唤》",
        dna: "繁复的形容词（不可名状） + 非欧几里得几何 + 主角的理智崩溃 + 远古神袛的冷漠。" 
      },
      { 
        id: "hemingway", 
        name: "海明威 (Hemingway)", 
        description: "冰山理论", 
        example: "《老人与海》",
        dna: "极简的主谓宾短句 + 零形容词 + 只描写可见动作 + 硬汉特质 + 潜台词。" 
      },
      { 
        id: "chandler", 
        name: "钱德勒 (Raymond Chandler)", 
        description: "黑色侦探", 
        example: "《漫长的告别》",
        dna: "第一人称厌世口吻 + 尖酸刻薄的比喻 + 城市作为反派 + 酒精味 + 蛇蝎美人。" 
      },
      { 
        id: "agatha", 
        name: "阿加莎 (Agatha Christie)", 
        description: "暴风雪山庄", 
        example: "《无人生还》",
        dna: "封闭空间 + 逐个死去的人物 + 每个人都有秘密 + 侦探最后的集结解谜 + 优雅的谋杀。" 
      },
      { 
        id: "stephenking", 
        name: "斯蒂芬·金 (Stephen King)", 
        description: "美式惊悚", 
        example: "《它》(It)",
        dna: "大量品牌引用 + 深入骨髓的童年创伤 + 极其口语化的内心独白 + 慢热的恐惧 + 缅因州。" 
      },
      { 
        id: "gibson", 
        name: "威廉·吉布森 (William Gibson)", 
        description: "赛博朋克", 
        example: "《神经漫游者》",
        dna: "高科技与低生活 + 霓虹灯与雨水 + 生造的技术黑话 + 像黑客代码一样的思维流。" 
      },
      { 
        id: "adams", 
        name: "道格拉斯·亚当斯 (Douglas Adams)", 
        description: "宇宙幽默", 
        example: "《银河系漫游指南》",
        dna: "一本正经地胡说八道 + 讽刺性比喻 + 轻松愉快的虚无主义 + 官僚宇宙。" 
      },
      { 
        id: "tolkien", 
        name: "托尔金 (J.R.R. Tolkien)", 
        description: "古典奇幻", 
        example: "《指环王》",
        dna: "古英语风格的庄重 + 极其详尽的地理/家谱设定 + 诗歌穿插 + 善恶分明的史诗感。" 
      },
      { 
        id: "martin", 
        name: "马丁 (G.R.R. Martin)", 
        description: "冰与火", 
        example: "《权力的游戏》",
        dna: "多视点叙事(POV) + 极其细致的美食描写 + 无论主角配角随时会死 + 复杂的政治联姻。" 
      },
      { 
        id: "mccarthy", 
        name: "科马克·麦卡锡 (Cormac McCarthy)", 
        description: "血色西部", 
        example: "《血色子午线》",
        dna: "无引号 + 连词‘and’的长句 + 壮丽的地狱景观 + 绝对冷漠的暴力 + 圣经般的语调。" 
      },
      { 
        id: "carver", 
        name: "雷蒙德·卡佛 (Raymond Carver)", 
        description: "极简主义", 
        example: "《当我们谈论爱情时》",
        dna: "极简词汇 + 谈论无关紧要的小事 + 背后巨大的空虚 + 突然中断的结尾 + 蓝领生活。" 
      }
    ]
  },

  // =================================================================
  // 10. 游戏、网络与数字元 (Digital, Games & Meta)
  // =================================================================
  {
    id: "sector_digital",
    name: "X. 游戏、网络与数字元 (Digital & Meta)",
    items: [
      { 
        id: "kojima", 
        name: "小岛秀夫 (Hideo Kojima)", 
        description: "交互电影", 
        example: "《死亡搁浅》",
        dna: "复杂的军事科技术语 + 尴尬但真诚的说教 + 电影级长镜头 + 打破第四面墙 + 孤独的连接。" 
      },
      { 
        id: "fromsoft", 
        name: "宫崎英高 (Hidetaka Miyazaki)", 
        description: "碎片叙事", 
        example: "《艾尔登法环》",
        dna: "晦涩难懂的物品说明 + 宏大但破败的史诗感 + 极少对话 + 充满了‘死亡’与‘火焰’的意象 + 悲剧。" 
      },
      { 
        id: "disco", 
        name: "极乐迪斯科 (Disco Elysium)", 
        description: "脑内议会", 
        example: "《极乐迪斯科》",
        dna: "多重人格互喷（爬虫脑vs逻辑） + 政治哲学术语 + 宿醉感 + 肮脏现实中的诗意。" 
      },
      { 
        id: "glados", 
        name: "GLaDOS (Portal)", 
        description: "腹黑AI", 
        example: "《传送门》",
        dna: "极度礼貌的科学语气 + 夹杂着侮辱的鼓励 + 用数据量化死亡 + 关于蛋糕的谎言。" 
      },
      { 
        id: "scp", 
        name: "SCP基金会 (SCP Foundation)", 
        description: "收容文档", 
        example: "SCP-173",
        dna: "临床报告格式 + [数据删除] + 客观冷漠地描述极度恐怖 + 收容措施 + 异常等级。" 
      },
      { 
        id: "greentext", 
        name: "网络绿文 (Greentext)", 
        description: "4chan体", 
        example: ">Be me",
        dna: ">Be me 格式 + 箭头符号 + 极其简短的句子 + 自嘲与社死结局 (Pepe)。" 
      },
      { 
        id: "brainrot", 
        name: "Z世代/脑腐 (Gen Z Brainrot)", 
        description: "抽象迷因", 
        example: "TikTok/Reels",
        dna: "全部小写 + 骷髅Emoji + 黑话 (Ohio/Rizz/Skibidi) + 极度虚无主义的幽默 + 语序破碎。" 
      },
      { 
        id: "webnovel_cn", 
        name: "系统爽文 (Web Novel System)", 
        description: "多巴胺泵", 
        example: "《系统流》",
        dna: "【叮！系统提示】 + 数值化面板 + 极快的打脸节奏 + 只有主角是聪明的 + 莫欺少年穷。" 
      }
    ]
  },
  
  // =================================================================
  // 11. 哲学与非虚构 (Philosophy & Thought)
  // =================================================================
  {
    id: "sector_philo",
    name: "XI. 哲学与非虚构 (Philosophy)",
    items: [
      {
        id: "nietzsche",
        name: "尼采 (Nietzsche)",
        description: "查拉图斯特拉",
        example: "《查拉图斯特拉如是说》",
        dna: "格言警句式 + 雷霆般的语气 + 对‘末人’的鄙视 + 充斥着‘权力意志’的隐喻 + 孤独的先知感。"
      },
      {
        id: "freud",
        name: "弗洛伊德 (Sigmund Freud)",
        description: "精神分析",
        example: "《梦的解析》",
        dna: "将一切行为归结为性或童年 + 潜意识的符号解读 + 临床案例般的冷静 + 俄狄浦斯情结。"
      },
      {
        id: "machiavelli",
        name: "马基雅维利 (Machiavelli)",
        description: "君主权术",
        example: "《君主论》",
        dna: "赤裸裸的现实主义 + 狮子与狐狸的比喻 + 目的论（为达目的不择手段） + 冷酷的政治算计。"
      },
      {
        id: "gonzo",
        name: "亨特·汤普森 (Gonzo)",
        description: "刚左新闻",
        example: "《恐惧与厌恶在拉斯维加斯》",
        dna: "极度主观的第一人称 + 药物引致的幻觉描写 + 极度偏激的政治咆哮 + 混乱而狂躁的能量。"
      }
    ]
  }
];
