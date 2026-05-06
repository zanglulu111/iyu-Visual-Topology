
export interface EraContext {
    start: number;
    end: number;
    cn: string;
    cnEn: string;
    world: string;
    worldEn: string;
}

export const HISTORICAL_TIMELINE: EraContext[] = [
    // --- 古代 ---
    { 
        start: -5000, end: -2070, 
        cn: "新石器时代 | 三皇五帝传说，良渚文化，部落图腾", 
        cnEn: "Neolithic Age | Three Sovereigns and Five Emperors, Liangzhu Culture, Tribal Totems",
        world: "苏美尔文明，古埃及前王朝，巨石阵建造",
        worldEn: "Sumerian Civilization, Predynastic Egypt, Stonehenge Construction"
    },
    { 
        start: -2070, end: -1600, 
        cn: "夏朝 | 大禹治水，青铜时代萌芽", 
        cnEn: "Xia Dynasty | Yu the Great, Dawn of Bronze Age",
        world: "古巴比伦，汉谟拉比法典，埃及中王国",
        worldEn: "Old Babylon, Code of Hammurabi, Middle Kingdom of Egypt"
    },
    { 
        start: -1600, end: -1046, 
        cn: "商朝 | 甲骨文，人祭，青铜鼎盛", 
        cnEn: "Shang Dynasty | Oracle Bones, Human Sacrifice, Bronze Age Peak",
        world: "希腊迈锡尼文明，赫梯帝国，摩西出埃及",
        worldEn: "Mycenaean Greece, Hittite Empire, Moses Exodus"
    },
    { 
        start: -1046, end: -771, 
        cn: "西周 | 封建宗法制，礼乐文明", 
        cnEn: "Western Zhou | Feudal Patriarchal System, Rites and Music",
        world: "特洛伊战争，大卫王建立以色列",
        worldEn: "Trojan War, King David establishes Israel"
    },
    { 
        start: -770, end: -476, 
        cn: "春秋 | 百家争鸣前夜，诸侯争霸", 
        cnEn: "Spring and Autumn | Pre-Hundred Schools, Hegemony of States",
        world: "罗马建城，希腊城邦兴起，波斯帝国扩张",
        worldEn: "Founding of Rome, Rise of Greek City-States, Persian Empire Expansion"
    },
    { 
        start: -475, end: -221, 
        cn: "战国 | 七雄并立，法家变法，孔孟老庄", 
        cnEn: "Warring States | Seven Warring States, Legalist Reforms, Confucius/Mencius/Laozi",
        world: "亚历山大东征，希腊古典时代(苏格拉底/柏拉图)",
        worldEn: "Alexander's Conquests, Classical Greece (Socrates/Plato)"
    },
    { 
        start: -221, end: -206, 
        cn: "秦朝 | 始皇帝，统一六国，修长城", 
        cnEn: "Qin Dynasty | First Emperor, Unification, Great Wall",
        world: "布匿战争(罗马vs迦太基)，孔雀王朝(阿育王)",
        worldEn: "Punic Wars (Rome vs Carthage), Mauryan Empire (Ashoka)"
    },
    { 
        start: -206, end: 220, 
        cn: "汉朝 | 丝绸之路，独尊儒术，强汉盛世", 
        cnEn: "Han Dynasty | Silk Road, Confucianism, Pax Sinica",
        world: "罗马帝国全盛期，凯撒遇刺，耶稣诞生",
        worldEn: "Pax Romana, Assassination of Caesar, Birth of Jesus"
    },
    { 
        start: 220, end: 280, 
        cn: "三国 | 群雄割据，赤壁之战，英雄主义", 
        cnEn: "Three Kingdoms | Warlords, Battle of Red Cliffs, Heroism",
        world: "罗马帝国三世纪危机，萨珊波斯兴起",
        worldEn: "Crisis of the Third Century, Rise of Sassanid Persia"
    },
    { 
        start: 280, end: 581, 
        cn: "魏晋南北朝 | 玄学，佛教传入，民族大融合", 
        cnEn: "Wei, Jin, Southern & Northern Dynasties | Metaphysics, Buddhism, Ethnic Integration",
        world: "西罗马灭亡，欧洲进入黑暗时代，拜占庭兴起",
        worldEn: "Fall of Western Rome, Dark Ages begin, Rise of Byzantium"
    },
    { 
        start: 581, end: 618, 
        cn: "隋朝 | 大运河，科举制创立", 
        cnEn: "Sui Dynasty | Grand Canal, Imperial Examination System",
        world: "伊斯兰教诞生，玛雅文明古典期",
        worldEn: "Birth of Islam, Classic Maya Civilization"
    },
    { 
        start: 618, end: 907, 
        cn: "唐朝 | 长安盛世，万国来朝，李白杜甫", 
        cnEn: "Tang Dynasty | Golden Age of Chang'an, Cosmopolitanism, Li Bai/Du Fu",
        world: "阿拉伯帝国扩张，查理曼大帝，日本大化改新",
        worldEn: "Arab Expansion, Charlemagne, Taika Reforms (Japan)"
    },
    { 
        start: 907, end: 960, 
        cn: "五代十国 | 战乱分裂，火药用于军事", 
        cnEn: "Five Dynasties and Ten Kingdoms | Fragmentation, Gunpowder in War",
        world: "维京海盗时代，神圣罗马帝国建立",
        worldEn: "Viking Age, Holy Roman Empire Founded"
    },
    { 
        start: 960, end: 1279, 
        cn: "宋朝 | 理学，文人政治，经济繁荣，词", 
        cnEn: "Song Dynasty | Neo-Confucianism, Scholar-Officials, Economic Boom, Ci Poetry",
        world: "十字军东征，大学诞生，哥特式建筑",
        worldEn: "Crusades, Rise of Universities, Gothic Architecture"
    },
    { 
        start: 1279, end: 1368, 
        cn: "元朝 | 蒙古帝国，行省制，马可波罗", 
        cnEn: "Yuan Dynasty | Mongol Empire, Province System, Marco Polo",
        world: "黑死病肆虐欧洲，文艺复兴前夜，奥斯曼兴起",
        worldEn: "Black Death, Pre-Renaissance, Rise of Ottomans"
    },
    { 
        start: 1368, end: 1644, 
        cn: "明朝 | 郑和下西洋，资本主义萌芽，心学", 
        cnEn: "Ming Dynasty | Zheng He's Voyages, Early Capitalism, Philosophy of Mind",
        world: "大航海时代，文艺复兴(达芬奇/米开朗基罗)",
        worldEn: "Age of Discovery, Renaissance (Da Vinci/Michelangelo)"
    },
    { 
        start: 1644, end: 1840, 
        cn: "清朝(前中期) | 康乾盛世，闭关锁国", 
        cnEn: "Qing Dynasty (Early-Mid) | High Qing Era, Isolationism",
        world: "启蒙运动，工业革命开始，美国独立，法国大革命",
        worldEn: "Enlightenment, Industrial Revolution, US Independence, French Revolution"
    },
    
    // --- 近代 (精细化) ---
    { 
        start: 1840, end: 1860, 
        cn: "鸦片战争 | 租界建立，太平天国起义", 
        cnEn: "Opium Wars | Concessions, Taiping Rebellion",
        world: "维多利亚时代，马克思《共产党宣言》，摄影术发明",
        worldEn: "Victorian Era, Communist Manifesto, Invention of Photography"
    },
    { 
        start: 1861, end: 1890, 
        cn: "洋务运动 | 同治中兴，北洋水师，中法战争", 
        cnEn: "Self-Strengthening Movement | Tongzhi Restoration, Beiyang Fleet",
        world: "美国南北战争，明治维新，第二次工业革命(电/内燃机)",
        worldEn: "US Civil War, Meiji Restoration, 2nd Industrial Revolution"
    },
    { 
        start: 1891, end: 1900, 
        cn: "甲午战败 | 戊戌变法，义和团前夜", 
        cnEn: "Sino-Japanese War Defeat | Hundred Days' Reform, Boxer Rising Eve",
        world: "电影诞生，伦琴发现X射线，尼采哲学",
        worldEn: "Birth of Cinema, X-Rays, Nietzsche"
    },
    { 
        start: 1901, end: 1910, 
        cn: "清末新政 | 辛丑条约，废科举，光绪/慈禧去世", 
        cnEn: "Late Qing Reforms | Boxer Protocol, Abolition of Imperial Exams",
        world: "莱特兄弟飞机，相对论提出，日俄战争",
        worldEn: "Wright Brothers, Relativity, Russo-Japanese War"
    },
    { 
        start: 1911, end: 1919, 
        cn: "辛亥革命 | 民国建立，军阀混战，五四运动", 
        cnEn: "Xinhai Revolution | ROC Founded, Warlord Era, May Fourth Movement",
        world: "泰坦尼克沉没，第一次世界大战，十月革命",
        worldEn: "Titanic Sinking, WWI, October Revolution"
    },
    { 
        start: 1920, end: 1929, 
        cn: "大革命 | 北伐战争，国共合作与分裂", 
        cnEn: "The Great Revolution | Northern Expedition, KMT-CCP Split",
        world: "咆哮的二十年代(爵士/禁酒)，大萧条前夜，有声电影",
        worldEn: "Roaring Twenties, Jazz Age, Talkies"
    },
    { 
        start: 1930, end: 1936, 
        cn: "南京十年 | 黄金十年，长征，东北沦陷", 
        cnEn: "Nanjing Decade | Golden Decade, Long March, Invasion of Manchuria",
        world: "经济大萧条，纳粹上台，希特勒，卓别林",
        worldEn: "Great Depression, Rise of Nazis, Chaplin"
    },
    { 
        start: 1937, end: 1945, 
        cn: "抗日战争 | 全面抗战，南京大屠杀，重庆陪都", 
        cnEn: "War of Resistance | Nanjing Massacre, Chongqing Capital",
        world: "第二次世界大战，原子弹，联合国建立",
        worldEn: "WWII, Atomic Bomb, UN Founded"
    },
    { 
        start: 1946, end: 1949, 
        cn: "解放战争 | 三大战役，新中国成立，渡江", 
        cnEn: "Civil War | Three Campaigns, PRC Founded",
        world: "冷战铁幕开启，印巴分治，晶体管发明",
        worldEn: "Cold War Begins, Partition of India, Transistor"
    },
    { 
        start: 1950, end: 1959, 
        cn: "建国初期 | 抗美援朝，一五计划，大跃进", 
        cnEn: "Early PRC | Korean War, First 5-Year Plan, Great Leap Forward",
        world: "朝鲜战争，摇滚乐诞生，太空竞赛开始(卫星上天)",
        worldEn: "Korean War, Rock 'n' Roll, Space Race"
    },
    { 
        start: 1960, end: 1965, 
        cn: "调整时期 | 原子弹爆炸，雷锋，困难时期", 
        cnEn: "Adjustment Period | First A-Bomb, Lei Feng",
        world: "披头士狂热，古巴导弹危机，肯尼迪遇刺，越战升级",
        worldEn: "Beatlemania, Cuban Missile Crisis, JFK Assassination, Vietnam War"
    },
    { 
        start: 1966, end: 1976, 
        cn: "文革时期 | 红卫兵，上山下乡，样板戏", 
        cnEn: "Cultural Revolution | Red Guards, Down to the Countryside",
        world: "阿波罗登月，嬉皮士运动，五月风暴，石油危机",
        worldEn: "Moon Landing, Hippies, May 68, Oil Crisis"
    },
    { 
        start: 1977, end: 1989, 
        cn: "改革开放 | 高考恢复，深圳特区，下海潮，摇滚", 
        cnEn: "Reform & Opening | Gaokao Restored, Shenzhen SEZ, Chinese Rock",
        world: "星球大战上映，个人电脑普及，切尔诺贝利，柏林墙倒塌",
        worldEn: "Star Wars, PCs, Chernobyl, Berlin Wall Falls"
    },
    { 
        start: 1990, end: 1999, 
        cn: "市场经济 | 香港回归，国企改制，98洪水", 
        cnEn: "Market Economy | HK Handover, SOE Reform",
        world: "苏联解体，互联网兴起，克隆羊多莉，黑客帝国",
        worldEn: "USSR Dissolution, Rise of Internet, Dolly the Sheep, The Matrix"
    },
    { 
        start: 2000, end: 2009, 
        cn: "千禧腾飞 | 加入WTO，非典，北京奥运，神舟飞船", 
        cnEn: "Millennium Rise | WTO, SARS, Beijing Olympics, Shenzhou",
        world: "911事件，反恐战争，iPhone发布，社交媒体诞生",
        worldEn: "9/11, War on Terror, iPhone, Social Media"
    },
    { 
        start: 2010, end: 2019, 
        cn: "移动互联 | 微信/4G普及，高铁网，大众创业", 
        cnEn: "Mobile Era | WeChat/4G, High-speed Rail, Mass Entrepreneurship",
        world: "阿拉伯之春，AI深度学习突破，权力的游戏",
        worldEn: "Arab Spring, Deep Learning, Game of Thrones"
    },
    { 
        start: 2020, end: 2029, 
        cn: "当下时代 | 疫情与后疫情，内卷与躺平，新能源", 
        cnEn: "Present Era | Pandemic, Involution/Lying Flat, New Energy",
        world: "COVID-19全球大流行，ChatGPT/AI爆发，地缘冲突加剧",
        worldEn: "COVID-19, AI Explosion, Geopolitical Conflict"
    },
    
    // --- 未来 ---
    { 
        start: 2030, end: 2049, 
        cn: "近未来 | 碳中和，老龄化社会，虚实融合", 
        cnEn: "Near Future | Carbon Neutrality, Aging Society, XR",
        world: "火星登陆，通用人工智能(AGI)，气候临界点",
        worldEn: "Mars Landing, AGI, Climate Tipping Points"
    },
    { 
        start: 2050, end: 2099, 
        cn: "赛博时代 | 高度自动化，神经接口普及", 
        cnEn: "Cyber Age | Automation, Neural Interfaces",
        world: "奇点降临，资源战争，巨型企业统治",
        worldEn: "Singularity, Resource Wars, Corpocracy"
    },
    { 
        start: 2100, end: 3000, 
        cn: "远未来 | 星际文明，后人类，戴森球", 
        cnEn: "Far Future | Interstellar, Post-Human, Dyson Sphere",
        world: "太阳系殖民，意识上传，物种分化",
        worldEn: "Solar Colonization, Mind Uploading, Speciation"
    },
    { 
        start: 3001, end: 9999, 
        cn: "神话重临 | 科技魔法化，新纪元", 
        cnEn: "Mythic Return | Tech as Magic, New Era",
        world: "银河帝国，熵增寂灭，时间旅行",
        worldEn: "Galactic Empire, Heat Death, Time Travel"
    }
];

export const getHistoricalContext = (year: number): EraContext | undefined => {
    return HISTORICAL_TIMELINE.find(era => year >= era.start && year <= era.end);
};
