
import { SutureStyleItem } from '../suture_styles';

export const WESTERN_AUTEURS: SutureStyleItem[] = [
  { 
    id: "vis_wes", 
    name: "韦斯·安德森 (Wes Anderson)", 
    group: "1. 西方电影作者", 
    instruction: "【韦斯·安德森风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 对秩序的强迫性迷恋与童话般的忧郁。\n   叙事流: 像翻阅立体书一样。章节化结构、横向平移运镜。\nII. 能量分布 (ENERGY):\n   粉彩色调、柔和的平光、扁平化的空间深度、极致对称。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (虽然对白多，但对称构图和定格画面提供了大量视觉呼吸空间)\n   2. 语言配比 (Speech Mix):\n      - 旁白 (Voiceover): 40% (全知视角的客观旁白，朗读小说般的精确)\n      - 对白 (Dialogue): 60% (枯燥 Deadpan，语速快，缺乏情感起伏)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 大键琴、口哨、发条声、复古摇滚。\nIV. 感官纹理 (TEXTURE):\n   灯芯绒、糖果纸、糕点盒子、手写字体。",
    core: "代表作：《布达佩斯大饭店》"
  },
  { 
    id: "vis_nolan", 
    name: "诺兰 (Christopher Nolan)", 
    group: "1. 西方电影作者", 
    instruction: "【诺兰风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 对时间的执念与智力拼图。\n   叙事流: 多线交叉剪辑、时间膨胀/收缩、极度紧迫的倒计时。\nII. 能量分布 (ENERGY):\n   IMAX 70mm 宏大画幅、冷青色调、轰鸣配乐 (Shepard Tone)。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.2 (极高的信息密度，几乎每个镜头都在进行解说 Exposition)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 95% (密集的“解说性 Exposition”对话推动剧情)\n      - 独白 (Monologue): 5% (偶尔的画外音回忆)\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 汉斯季默式的轰鸣 (BRAAAM)、表针滴答声、听不清的对白混音。\nIV. 感官纹理 (TEXTURE):\n   金属、玻璃、定制西装面料、机械的咬合。",
    core: "代表作：《信条》"
  },
  { 
    id: "vis_kubrick", 
    name: "库布里克 (Stanley Kubrick)", 
    group: "1. 西方电影作者", 
    instruction: "【库布里克风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 绝对理性与冷漠的凝视。\n   叙事流: 单点透视、缓慢的推拉镜头、令人窒息的对称。\nII. 能量分布 (ENERGY):\n   极度深景深、冷白色温、诡异的静止。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (极致的视觉凝视，经常有长达数分钟的无对白配乐段落)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 80% (极简，冰冷，仪式化)\n      - 旁白 (Voiceover): 20% (冷漠的、说明书式的客观旁白)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 古典交响乐、沉重的呼吸声、绝对的真空静默。\nIV. 感官纹理 (TEXTURE):\n   抛光的大理石、没有指纹的不锈钢、完美的几何体。",
    core: "代表作：《2001太空漫游》"
  },
  { 
    id: "vis_fincher", 
    name: "大卫·芬奇 (David Fincher)", 
    group: "1. 西方电影作者", 
    instruction: "【芬奇风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 对信息的强迫症式控制。\n   叙事流: 摄影机运动与角色行动完全同步 (Locked-off)、极度稳定。\nII. 能量分布 (ENERGY):\n   低调照明、黄绿色偏、阴影中的细节。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.2 (信息过载，极快的对白节奏，没有任何废话)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (高信息密度、快速、讽刺、充满专业术语)\n      - 独白 (Monologue): 0% (除《搏击俱乐部》外)\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 数字化底噪、键盘敲击声、鞋底摩擦声、工业电子乐。\nIV. 感官纹理 (TEXTURE):\n   雨夜的柏油路、档案纸张、手电筒光束、血迹。",
    core: "代表作：《社交网络》"
  },
  { 
    id: "vis_tarantino", 
    name: "昆汀 (Quentin Tarantino)", 
    group: "1. 西方电影作者", 
    instruction: "【昆汀风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 流行文化崇拜与复仇。\n   叙事流: 章节跳跃、极速变焦、长时间对话突然爆发暴力。\nII. 能量分布 (ENERGY):\n   高饱和度原色、复古胶片感、恋足特写。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.05 (话痨极致，两个角色可以聊汉堡聊十分钟，几乎无留白)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (关于无意义琐事如脚底按摩的长篇大论，话痨)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 70年代金曲、夸张的枪声、武士刀出鞘声。\nIV. 感官纹理 (TEXTURE):\n   鲜血喷溅、赤脚、汉堡、旧唱片、武士刀。",
    core: "代表作：《低俗小说》"
  },
  { 
    id: "vis_scorsese", 
    name: "斯科塞斯 (Martin Scorsese)", 
    group: "1. 西方电影作者", 
    instruction: "【斯科塞斯风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 罪恶、贪婪与赎罪。\n   叙事流: 极具活力的长镜头跟拍、定格画面、快速剪辑。\nII. 能量分布 (ENERGY):\n   摇滚乐节奏、混乱的街头光线、男性荷尔蒙。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.15 (极速剪辑配合几乎不间断的旁白和街头黑话)\n   2. 语言配比 (Speech Mix):\n      - 旁白 (Voiceover): 60% (标志性的第一人称回忆录式叙述，充满悔恨或自辩)\n      - 对白 (Dialogue): 40% (密集且粗俗的街头黑话)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 滚石乐队的歌、冰块撞击玻璃杯、枪声、怒吼。\nIV. 感官纹理 (TEXTURE):\n   意大利面、枪油、西装面料、成捆的钞票、圣像。",
    core: "代表作：《好家伙》"
  },
  {
    id: "vis_lynch",
    name: "大卫·林奇 (David Lynch)",
    group: "1. 西方电影作者",
    instruction: "【林奇风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 梦魇逻辑与潜意识恐惧。\n   叙事流: 极其缓慢的节奏、无逻辑的转场、像做梦一样。\nII. 能量分布 (ENERGY):\n   工业噪音与电流声、闪烁的白炽灯、诡异的静默。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.6 (充满尴尬的停顿、工业噪音和长时间的诡异凝视)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (逻辑断裂，重音错位，尴尬的停顿)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 持续的低频嗡鸣(Drone)、电流声、风声、女人的尖叫。\nIV. 感官纹理 (TEXTURE):\n   红色天鹅绒、冒热气的黑咖啡、樱桃派、腐烂的耳朵。",
    core: "代表作：《穆赫兰道》"
  },
  {
    id: "vis_villeneuve",
    name: "维伦纽瓦 (Denis Villeneuve)",
    group: "1. 西方电影作者",
    instruction: "【维伦纽瓦风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 巨物恐惧与宿命论。\n   叙事流: 极度克制的推进、俯瞰视角、压迫性的寂静。\nII. 能量分布 (ENERGY):\n   粗野主义建筑、单色调美学、极宽的画幅。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.7 (巨物沉默，用广角镜头和音效来讲故事，而非台词)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (极简，只说必要的话)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 震撼的低音(Sub-bass)、巨大的号角声、沙子流动的声音。\nIV. 感官纹理 (TEXTURE):\n   粗糙的混凝土、漫天的沙尘、粘稠的黑色液体、雾气。",
    core: "代表作：《沙丘》"
  },
  {
    id: "vis_malick",
    name: "马力克 (Terrence Malick)",
    group: "1. 西方电影作者",
    instruction: "【马力克风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 灵性漫游与泛灵论。\n   叙事流: 意识流剪辑、跳跃的时间线、摄影机“浮动”。\nII. 能量分布 (ENERGY):\n   魔幻时刻 (Magic Hour)、广角手持、仰拍天空。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.6 (碎片化的诗意独白，大量的自然空镜，叙事松散)\n   2. 语言配比 (Speech Mix):\n      - 独白 (Monologue): 80% (碎片化的、祈祷般的诗意内心独白 Whispered OS)\n      - 对白 (Dialogue): 20% (往往被环境音覆盖，听不清楚)\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 风吹过草地的声音、流水声、古典圣歌。\nIV. 感官纹理 (TEXTURE):\n   高草、流动的水、手掌抚摸麦浪、透过树叶的阳光。",
    core: "代表作：《生命之树》"
  },
  {
    id: "vis_coppola",
    name: "科波拉 (Francis Ford Coppola)",
    group: "1. 西方电影作者",
    instruction: "【科波拉风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 歌剧式的家庭悲剧与权力。\n   叙事流: 古典好莱坞式的宏大叙事、稳重的场面调度。\nII. 能量分布 (ENERGY):\n   顶光造成的眼窝阴影、温暖但压抑的琥珀色调。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (古典歌剧式结构，对白与画面并重，节奏稳健)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满仪式感和潜台词的家族会议，歌剧般的庄重)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 宏大的管弦乐、低沉的耳语、关门的巨响。\nIV. 感官纹理 (TEXTURE):\n   浓重的阴影、橘子、水晶酒杯、意大利丝绸领带。",
    core: "代表作：《教父》"
  },
  {
    id: "vis_pta",
    name: "PT·安德森 (Paul Thomas Anderson)",
    group: "1. 西方电影作者",
    instruction: "【PTA风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 控制狂与伪家庭。\n   叙事流: 精确且复杂的斯坦尼康长镜头、群像调度。\nII. 能量分布 (ENERGY):\n   70年代复古色调、不协和的配乐、充满张力的特写。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (角色驱动，对白密集且具有攻击性，但也有长镜头调度)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满攻击性、操控性的对话，意志较量)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 不和谐的弦乐、重叠的说话声、石油钻井的轰鸣。\nIV. 感官纹理 (TEXTURE):\n   加州的阳光、旧地毯、石油的粘稠感、赌场筹码。",
    core: "代表作：《血色将至》"
  },
  {
    id: "vis_coen",
    name: "科恩兄弟 (Coen Brothers)",
    group: "1. 西方电影作者",
    instruction: "【科恩风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 虚无主义与存在主义荒诞。\n   叙事流: 精确的故事板、冷峻的讽刺。\nII. 能量分布 (ENERGY):\n   广角镜头拍摄夸张表情、凄凉空旷的风景。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (荒诞的方言对话，节奏紧凑，但有黑色幽默的留白)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (循环的、方言浓重的、极具音乐性的荒谬对话)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 夸张的脚步声、风声、枪栓声。\nIV. 感官纹理 (TEXTURE):\n   茫茫雪地、血迹、保龄球、木材破碎机。",
    core: "代表作：《老无所依》"
  },
  {
    id: "vis_spielberg",
    name: "斯皮尔伯格 (Steven Spielberg)",
    group: "1. 西方电影作者",
    instruction: "【斯皮尔伯格风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 童真的惊奇与家庭重聚。\n   叙事流: 流畅的场面调度、推拉镜头强调反应 (The Spielberg Face)。\nII. 能量分布 (ENERGY):\n   上帝之光 (God Rays)、侧影构图、温暖的家庭感。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (标准的好莱坞商业节奏，信息传递效率高)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (家庭式对话，或惊奇时的沉默)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 约翰·威廉姆斯的配乐、自行车的链条声、外星信号。\nIV. 感官纹理 (TEXTURE):\n   手电筒的光束、自行车、漂浮的尘埃、雨衣。",
    core: "代表作：《E.T.》"
  },
  {
    id: "vis_cameron",
    name: "卡梅隆 (James Cameron)",
    group: "1. 西方电影作者",
    instruction: "【卡梅隆风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 技术崇拜与对自然的敬畏。\n   叙事流: 完美的节奏控制、顶级动作场面调度。\nII. 能量分布 (ENERGY):\n   科技冷蓝、生物荧光、机械结构的完美咬合。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (技术名词多，动作场面多，但为了大众理解，对白直白)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 80% (简练有力 One-liners，功能性)\n      - 旁白 (Voiceover): 20% (偶尔使用日记体旁白)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 机械液压声、巨大的爆炸、水流声。\nIV. 感官纹理 (TEXTURE):\n   水体、金属骨骼、外骨骼机甲、深海压力、火焰。",
    core: "代表作：《终结者2》"
  },
  {
    id: "vis_scott",
    name: "雷德利·斯科特 (Ridley Scott)",
    group: "1. 西方电影作者",
    instruction: "【雷德利风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 世界构建者。哲学探讨与极端环境。\n   叙事流: 详尽的视觉叙事、氛围优先。\nII. 能量分布 (ENERGY):\n   烟雾缭绕、高对比度光影、动态光束、雨水。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (氛围组大师，善用烟雾和光影填充画面，减少对白依赖)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (关于造物与死亡的冷峻探讨)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 持续的风声、机械运转声、异形的嘶叫。\nIV. 感官纹理 (TEXTURE):\n   雨水、汗水、异形粘液、古罗马石雕、飞船管道。",
    core: "代表作：《银翼杀手》" 
  },
  {
    id: "vis_del_toro",
    name: "德尔·托罗 (Guillermo del Toro)",
    group: "1. 西方电影作者",
    instruction: "【德尔托罗风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 暗黑童话与对异类的同情。\n   叙事流: 寓言式结构、魔幻现实主义。\nII. 能量分布 (ENERGY):\n   琥珀色与青色对比、发条机械美学、潮湿的场景。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (暗黑童话，视觉元素丰富，对白服务于世界观)\n   2. 语言配比 (Speech Mix):\n      - 旁白 (Voiceover): 30% (童话故事般的客观旁白开场)\n      - 对白 (Dialogue): 70% (温情且怪诞)\n      - 独白 (Monologue): 0%\n   4. 听觉层: 钟表发条声、怪物的呼吸声、雨声。\nIV. 感官纹理 (TEXTURE):\n   昆虫甲壳、巨大的齿轮、福尔马林罐子、血、地下泥土。",
    core: "代表作：《潘神的迷宫》"
  },
  {
    id: "vis_burton",
    name: "蒂姆·波顿 (Tim Burton)",
    group: "1. 西方电影作者",
    instruction: "【波顿风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 孤独的怪胎。哥特式异类。\n   叙事流: 表现主义叙事、夸张的肢体语言。\nII. 能量分布 (ENERGY):\n   黑白条纹、螺旋图案、苍白的皮肤与深黑的眼圈。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (哥特视觉风格强烈，角色造型本身就在“说话”)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (简单天真，像儿童绘本)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 丹尼·叶夫曼的童话配乐、雷声、机关声。\nIV. 感官纹理 (TEXTURE):\n   枯树枝、剪刀、粗糙的缝合线、条纹西装、雪花。",
    core: "代表作：《剪刀手爱德华》"
  },
  {
    id: "vis_refn",
    name: "雷芬 (Nicolas Winding Refn)",
    group: "1. 西方电影作者",
    instruction: "【雷芬风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 恋物、暴力与沉默。\n   叙事流: 极度缓慢的节奏、梦游般的状态、突发的暴力。\nII. 能量分布 (ENERGY):\n   红/蓝霓虹色块、广角静止构图、合成器电子乐。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.8 (极简对白，长时间的霓虹灯凝视和电子乐，几乎是MV)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (极少，人物像雕塑一样凝视)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 合成器电子乐、重低音、心跳声。\nIV. 感官纹理 (TEXTURE):\n   丝绸夹克、粘稠的血浆、锤子、电梯间、镜子。",
    core: "代表作：《亡命驾驶》"
  },
  {
    id: "vis_safdie",
    name: "萨弗迪兄弟 (Safdie Brothers)",
    group: "1. 西方电影作者",
    instruction: "【萨弗迪风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 焦虑诱导。连锁灾难。\n   叙事流: 令人窒息的快节奏、不断的打断。\nII. 能量分布 (ENERGY):\n   长焦特写、混乱的手持、拥挤的构图、噪音。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.05 (焦虑诱导，多人同时说话 Overlapping，极度嘈杂)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (多人同时说话 Overlapping，争吵，吼叫)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 极大的背景噪音、争吵声、电子乐。\nIV. 感官纹理 (TEXTURE):\n   满脸汗水、廉价珠宝、皮衣、拥挤的街道、特写下的毛孔。",
    core: "代表作：《原钻》"
  },
  {
    id: "vis_chazelle",
    name: "查泽雷 (Damien Chazelle)",
    group: "1. 西方电影作者",
    instruction: "【查泽雷风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 痴迷与代价。为了艺术牺牲爱。\n   叙事流: 音乐化的剪辑、极速摇摄。\nII. 能量分布 (ENERGY):\n   聚光灯隔离、鲜艳原色、手持摄影。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (音乐驱动剪辑，虽然对白多，但音乐段落是核心)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (爆发力强，节奏感强)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 乐器的声音（鼓点/小号）、节拍器、城市噪音。\nIV. 感官纹理 (TEXTURE):\n   乐器金属的光泽、鼓皮的震动、汗水滴落、路灯。",
    core: "代表作：《爆裂鼓手》"
  },
  {
    id: "vis_gerwig",
    name: "格蕾塔·葛韦格 (Greta Gerwig)",
    group: "1. 西方电影作者",
    instruction: "【葛韦格风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 女性成长与自我和解。\n   叙事流: 快速机智的对话、奔跑、情感的自然流露。\nII. 能量分布 (ENERGY):\n   温暖的自然光、柔和的色彩、亲密的手持镜头。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.1 (极快的女性主义对白，Mumblecore出身，话很密)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (重叠的、自然的、充满情感的女性对话)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 自然环境音、轻快的配乐。\nIV. 感官纹理 (TEXTURE):\n   棉布裙子、阳光下的灰尘、旧书本、家庭餐桌。",
    core: "代表作：《伯德小姐》"
  },
  {
    id: "vis_lanthimos",
    name: "兰斯莫斯 (Yorgos Lanthimos)",
    group: "1. 西方电影作者",
    instruction: "【兰斯莫斯风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 社会规则的荒诞解构。\n   叙事流: 机械化的表演、尴尬的停顿、残酷的幽默。\nII. 能量分布 (ENERGY):\n   极宽的广角或鱼眼镜头、自然光、冷漠的俯视。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (机械般的对话，尴尬的静默，视觉构图怪诞)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (毫无感情色彩地朗读极其荒谬或残酷的台词)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 不协和的弦乐、尴尬的沉默、动物叫声。\nIV. 感官纹理 (TEXTURE):\n   医院走廊、动物皮毛、血、 sterile white rooms。",
    core: "代表作：《龙虾》"
  },
  {
    id: "vis_sorrentino",
    name: "索伦蒂诺 (Paolo Sorrentino)",
    group: "1. 西方电影作者",
    instruction: "【索伦蒂诺风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 颓废的宏大与神圣的空虚。\n   叙事流: 漫游式结构、突然的舞蹈、对过去的追忆。\nII. 能量分布 (ENERGY):\n   极致的巴洛克美学、复杂的推拉镜头、神圣音乐与电子乐混搭。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (华丽的空虚，漫游式的镜头，派对与圣歌的结合)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满哲学隐喻，诗意)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 歌剧、电子舞曲、教堂钟声。\nIV. 感官纹理 (TEXTURE):\n   罗马的大理石、修女的白帽、晚宴的西装、火烈鸟。",
    core: "代表作：《绝美之城》"
  },
  {
    id: "vis_almodovar",
    name: "阿莫多瓦 (Pedro Almodóvar)",
    group: "1. 西方电影作者",
    instruction: "【阿莫多瓦风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 激情、女性情谊与复杂的欲望。\n   叙事流: 情节剧 (Melodrama) 的现代演绎、情感的爆发。\nII. 能量分布 (ENERGY):\n   高饱和度的红色与蓝色、波普艺术装饰、精致的室内布景。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.2 (密集的情感输出，女性群像的叽叽喳喳，戏剧性强)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (快速、充满情感的西班牙语对话，坦率地讨论性与死亡)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 弗拉门戈音乐、高跟鞋声、哭泣声。\nIV. 感官纹理 (TEXTURE):\n   红色高跟鞋、复古壁纸、鲜艳的嘴唇、西红柿。",
    core: "代表作：《关于我母亲的一切》"
  },
  {
    id: "vis_jarmusch",
    name: "吉姆·贾木许 (Jim Jarmusch)",
    group: "1. 西方电影作者",
    instruction: "【贾木许风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 酷 (Coolness)、无聊与边缘人。\n   叙事流: 极简的情节、漫无目的的闲逛、片段式结构。\nII. 能量分布 (ENERGY):\n   高对比度黑白或夜间色调、慢节奏、摇滚乐精神。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.6 (酷的沉默，慢节奏，角色之间漫无目的的闲聊或不语)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (关于音乐、文学或无意义琐事的尴尬闲聊)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 摇滚乐、咖啡杯碰撞声、烟雾吐出的声音。\nIV. 感官纹理 (TEXTURE):\n   烟雾、黑胶唱片、旧吉他、空旷的街道、咖啡。",
    core: "代表作：《唯爱永生》"
  },
  {
    id: "vis_herzog",
    name: "赫尔佐格 (Werner Herzog)",
    group: "1. 西方电影作者",
    instruction: "【赫尔佐格风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 狂原本性 (Ecstatic Truth) 与自然的冷漠。\n   叙事流: 催眠般的节奏、人与自然的对抗、疯癫。\nII. 能量分布 (ENERGY):\n   手持摄影捕捉真实、宏大的自然景观、歌剧配乐。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (催眠般的哲学旁白，但也包含大量对自然的静默凝视)\n   2. 语言配比 (Speech Mix):\n      - 旁白 (Voiceover): 80% (导演本人带有独特口音的、哲学化的、关于宇宙冷漠的旁白)\n      - 对白 (Dialogue): 20%\n      - 独白 (Monologue): 0%\n   4. 听觉层: 丛林底噪、歌剧、风声。\nIV. 感官纹理 (TEXTURE):\n   丛林、冰川、疯狂的眼神、动物的凝视。",
    core: "代表作：《阿基尔，上帝的愤怒》"
  },
  {
    id: "vis_polanski",
    name: "波兰斯基 (Roman Polanski)",
    group: "1. 西方电影作者",
    instruction: "【波兰斯基风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 幽闭恐惧与被害妄想。\n   叙事流: 逐渐收紧的心理恐怖、公寓三部曲式结构。\nII. 能量分布 (ENERGY):\n   广角镜头扭曲室内空间、窥视视角、阴影。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (心理压抑，密闭空间内的对话博弈)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (日常对话中隐藏着威胁)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 隔壁的脚步声、滴水声、电话铃声。\nIV. 感官纹理 (TEXTURE):\n   剥落的墙纸、钥匙孔、电话、阴暗的走廊。",
    core: "代表作：《罗斯玛丽的婴儿》"
  },
  {
    id: "vis_cronenberg",
    name: "柯南伯格 (David Cronenberg)",
    group: "1. 西方电影作者",
    instruction: "【柯南伯格风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 肉体恐怖 (Body Horror) 与技术异化。\n   叙事流: 冷静的临床观察、突发的肉体变异。\nII. 能量分布 (ENERGY):\n   冷色调、医院般的灯光、有机物与机械的融合。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (学术性冷静，用视觉展示肉体恐怖，对白冷漠)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (用学术性的、冷静的语言讨论变态的肉体现象)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 粘液的声音、机械运作声、冷漠的电子音。\nIV. 感官纹理 (TEXTURE):\n   粘液、搏动的血管、金属插口、电视屏幕、昆虫。",
    core: "代表作：《录像带谋杀案》"
  },
  {
    id: "vis_carpenter",
    name: "卡朋特 (John Carpenter)",
    group: "1. 西方电影作者",
    instruction: "【卡朋特风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 围城与不可知的恐惧。\n   叙事流: 极简的B级片节奏、宽银幕构图。\nII. 能量分布 (ENERGY):\n   蓝色夜景、变形宽银幕镜头 (Anamorphic)、合成器配乐。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (B级片极简，宽银幕构图，合成器音乐填充空间)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (硬汉式的、简练的)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 极简的合成器贝斯线条、风声。\nIV. 感官纹理 (TEXTURE):\n   迷雾、手电筒光束、外星生物的触手、火焰。",
    core: "代表作：《怪形》"
  },
  {
    id: "vis_aronofsky",
    name: "阿伦诺夫斯基 (Darren Aronofsky)",
    group: "1. 西方电影作者",
    instruction: "【阿伦诺夫斯基风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 痴迷与毁灭。\n   叙事流: 极速蒙太奇 (Hip-hop montage)、主观心理崩溃。\nII. 能量分布 (ENERGY):\n   Snorricam (身体佩戴摄影机)、极度颗粒感、令人不适的特写。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (极速蒙太奇 Hip-hop montage，心理独白密集)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满焦虑和压迫感)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 放大的呼吸声、心跳声、指甲刮擦声、药物起效的声音。\nIV. 感官纹理 (TEXTURE):\n   瞳孔放大、起皮的手指、药物、羽毛、血。",
    core: "代表作：《黑天鹅》"
  },
  {
    id: "vis_inarritu",
    name: "伊纳里图 (Alejandro G. Iñárritu)",
    group: "1. 西方电影作者",
    instruction: "【伊纳里图风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 存在的痛苦与连通性。\n   叙事流: 伪长镜头 (One Shot)、多线叙事交汇。\nII. 能量分布 (ENERGY):\n   广角手持近距离跟拍、自然光、魔幻现实主义。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (长镜头对话，伪纪录片式的真实感，填满空间)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (自然流露)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 爵士鼓点、环境音、呼吸声。\nIV. 感官纹理 (TEXTURE):\n   泥土、后台的灰尘、天空、满脸胡茬。",
    core: "代表作：《鸟人》"
  },
  {
    id: "vis_cuaron",
    name: "卡隆 (Alfonso Cuarón)",
    group: "1. 西方电影作者",
    instruction: "【卡隆风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 宏大背景下的个体命运。\n   叙事流: 极其复杂的长镜头、流动的视点、背景叙事。\nII. 能量分布 (ENERGY):\n   广角镜头包含丰富信息、灰调现实主义、客观视角。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (背景即叙事，长镜头中环境音丰富，对白自然)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (背景中的新闻广播、战争噪音构建世界观)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 耳鸣声、爆炸声、婴儿的哭声。\nIV. 感官纹理 (TEXTURE):\n   破碎的玻璃、海浪、废墟、血液溅在镜头上。",
    core: "代表作：《人类之子》"
  },
  {
    id: "vis_miller_g",
    name: "乔治·米勒 (George Miller)",
    group: "1. 西方电影作者",
    instruction: "【乔治·米勒风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 动能与神话。\n   叙事流: 视觉中心构图 (Center Framing)、极速剪辑、动作歌剧。\nII. 能量分布 (ENERGY):\n   高饱和度的橙色与青色、加速镜头、狂乱的能量。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.8 (纯动作电影，台词极少，依靠视觉奇观推进)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (极少，全是吼叫)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 引擎轰鸣声、鼓声、吉他声。\nIV. 感官纹理 (TEXTURE):\n   沙尘、铁锈、机油、镀铬喷漆、火焰。",
    core: "代表作：《疯狂的麦克斯4》"
  },
  {
    id: "vis_spike_lee",
    name: "斯派克·李 (Spike Lee)",
    group: "1. 西方电影作者",
    instruction: "【斯派克·李风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 种族张力与社会评论。\n   叙事流: 打破第四面墙的滑动镜头 (Double Dolly)、多彩的街头感。\nII. 能量分布 (ENERGY):\n   荷兰角 (Dutch Angle)、鲜艳色彩、爵士/嘻哈配乐。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.1 (政治演说，打破第四面墙，密集的社会评论)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (充满节奏感、俚语和政治隐喻的街头对话，直视镜头咆哮)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 爵士乐、嘻哈音乐、扩音器声。\nIV. 感官纹理 (TEXTURE):\n   沥青路面、耐克鞋、披萨、汗水、扩音器。",
    core: "代表作：《为所应为》"
  },
  {
    id: "vis_mann_m",
    name: "迈克尔·曼 (Michael Mann)",
    group: "1. 西方电影作者",
    instruction: "【迈克尔·曼风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 职业主义与都市孤独。\n   叙事流: 冷静的程序化叙事、夜晚的城市漫游。\nII. 能量分布 (ENERGY):\n   高清数码摄影 (Digital Noise)、蓝色夜景、长焦镜头。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.4 (专业冷静，都市夜景，沉默的男人)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (简练、专业、男性化)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 极致真实的枪声回音、寂静。\nIV. 感官纹理 (TEXTURE):\n   西装、枪械金属、夜晚的城市灯光、海面。",
    core: "代表作：《盗火线》"
  },
  {
    id: "vis_snyder",
    name: "扎克·施奈德 (Zack Snyder)",
    group: "1. 西方电影作者",
    instruction: "【施奈德风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 神话重构与视觉奇观。\n   叙事流: 极端的快慢镜头切换 (Speed Ramping)、油画般的构图。\nII. 能量分布 (ENERGY):\n   高对比度、去饱和色调、充满力量感的慢动作。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.6 (慢动作油画，视觉重于叙事，对白往往是漫画式的宣言)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (漫画式的宣言)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 史诗般的配乐、慢动作下的环境音。\nIV. 感官纹理 (TEXTURE):\n   雨水、肌肉、红披风、颗粒感、光晕。",
    core: "代表作：《300勇士》"
  },
  {
    id: "vis_eggers",
    name: "罗伯特·艾格斯 (Robert Eggers)",
    group: "1. 西方电影作者",
    instruction: "【艾格斯风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 历史考据与民俗恐怖。\n   叙事流: 正方形画幅、古英语对白、幽闭恐惧。\nII. 能量分布 (ENERGY):\n   自然光/烛光、高对比度黑白或褪色感、对称构图。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (古英语对白密集，但环境氛围（海浪/风声）极强)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (晦涩难懂的古英语方言)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 海浪声、风声、号角声、动物叫声。\nIV. 感官纹理 (TEXTURE):\n   泥土、木头纹理、雾气、山羊、灯塔透镜。",
    core: "代表作：《灯塔》"
  },
  {
    id: "vis_aster",
    name: "阿里·艾斯特 (Ari Aster)",
    group: "1. 西方电影作者",
    instruction: "【艾斯特风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 家庭创伤与邪教仪式。\n   叙事流: 缓慢的推轨镜头、明亮环境下的恐怖。\nII. 能量分布 (ENERGY):\n   极度明亮的日光、粉彩色调、令人不安的几何图形。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.5 (恐怖氛围的铺垫，长时间的诡异平静)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (日常对话中隐藏着恐怖)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 背景中持续的、令人不安的低频或击舌声、尖叫声。\nIV. 感官纹理 (TEXTURE):\n   鲜花、符文、破碎的头颅、模型屋、刺绣。",
    core: "代表作：《仲夏夜惊魂》"
  },
  {
    id: "vis_peele",
    name: "乔丹·皮尔 (Jordan Peele)",
    group: "1. 西方电影作者",
    instruction: "【皮尔风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 社会隐喻与种族恐怖。\n   叙事流: 充满伏笔的悬疑、超现实符号。\nII. 能量分布 (ENERGY):\n   特写镜头强调眼神（凝视）、鲜艳的色彩暗示。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.3 (社会惊悚，对话中隐藏潜台词，节奏紧凑)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (日常对话中隐藏着恐怖的潜台词)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: 标志性的惊悚配乐、调羹敲击茶杯声。\nIV. 感官纹理 (TEXTURE):\n   眼泪、茶杯、黑洞、兔子、连体服。",
    core: "代表作：《逃出绝命镇》"
  },
  {
    id: "vis_sofia_coppola",
    name: "索菲亚·科波拉 (Sofia Coppola)",
    group: "1. 西方电影作者",
    instruction: "【索菲亚风格协议】\nI. 核心引擎 (CORE ENGINE):\n   驱动力: 奢华中的孤独与女性成长。\n   叙事流: 慵懒的节奏、氛围优先、极简叙事。\nII. 能量分布 (ENERGY):\n   柔光、逆光、低饱和度的梦幻色调、胶片感。\nIII. 音画拓扑 (A/V TOPOLOGY):\n   1. 留白值 (Silence): 0.7 (氛围流，无聊的奢华，极少的对白，大量的凝视)\n   2. 语言配比 (Speech Mix):\n      - 对白 (Dialogue): 100% (稀少且私密)\n      - 独白 (Monologue): 0%\n      - 旁白 (Voiceover): 0%\n   4. 听觉层: Shoegaze或Dream Pop音乐包裹全片。\nIV. 感官纹理 (TEXTURE):\n   香槟气泡、酒店床单、透过窗户的光、假发、蛋糕。",
    core: "代表作：《迷失东京》"
  }
];
