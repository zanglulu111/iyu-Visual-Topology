import { LibraryCategoryDef } from '../../../types';

export const IDEO_TECH: LibraryCategoryDef = {
  id: "ideo_tech",
  name: "4. 技术与理性 (Tech & Reason)",
  nameEn: "Tech & Reason",
  desc: "关于科学、进步、工具理性与后人类的信仰体系。用于定义主角如何看待技术力量、理性权威与人机边界。",
  defEn: "Belief systems about science, progress, instrumental reason, and the posthuman. Defines how the protagonist views technological power, rational authority, and human-machine boundaries.",
  items: [
    {
      id: "techno_optimism",
      name: "科技乐观",
      nameEn: "Techno-Optimism",
      def: "坚信技术进步能解决一切人类痼疾（贫困、衰老、死亡）的信念。代码与公式是新时代的启示录。",
      defEn: "Belief that technological progress can solve all human chronic afflictions (poverty, aging, death). Code and formulas are the new revelation.",
      core: "他造出了一台能治愈一切疾病的机器——机器运行的第一天就判定：人类本身就是最大的疾病。",
      coreEn: "He built a machine that could cure all diseases — on day one it diagnosed: humanity itself is the biggest disease.",
      reference: "《极乐空间》(2013, 尼尔·布洛姆坎普) 空间站医疗舱 / 《星际迷航》(1966, 剧集) 联邦复制器技术",
      referenceEn: "\"Elysium\" (2013, Neill Blomkamp) Space Station Med-Pods / \"Star Trek\" (1966, Series) Federation Replicator Tech"
    },
    {
      id: "transhumanism",
      name: "超人类主义",
      nameEn: "Transhumanism",
      def: "将肉体视为早该淘汰的碳基累赘的信念。追求赛博格化、意识上传和基因改造，以突破人类物种极限。",
      defEn: "Belief viewing flesh as an obsolete carbon burden. Pursuing cyborgization, consciousness upload, and gene-editing to break species limits.",
      core: "她把全身骨骼和皮肤都换成了钛合金——唯一留下的那颗大脑在某天深夜突然问她：你还是你吗？大脑没有回答。",
      coreEn: "She replaced all bones and skin with titanium — the only remaining brain asked one midnight: are you still you? The brain didn't answer.",
      reference: "《攻壳机动队》(1995, 押井守) 草薙素子 / 《赛博朋克：边缘行者》(2022, 今石洋之) 大卫·马丁内斯",
      referenceEn: "\"Ghost in the Shell\" (1995, Mamoru Oshii) Major Kusanagi / \"Cyberpunk: Edgerunners\" (2022, Imaishi) David Martinez"
    },
    {
      id: "rationalism",
      name: "绝对理性",
      nameEn: "Rationalism",
      def: "将逻辑推理和数学模型视为唯一真理的信念。一切情感、直觉与共情都是系统中应被消除的噪音。",
      defEn: "Belief treating logical deduction and mathematical models as the sole truth. All emotion, intuition, and empathy are noise to be eliminated from the system.",
      core: "他用纯粹的逻辑推演出自己不是救世主——然后心如止水地躺在雪地里等死。逻辑是对的，但雪是冷的。",
      coreEn: "Through pure logic he deduced he wasn't the chosen one — then lay in the snow waiting to die with a still heart. The logic was right, but the snow was cold.",
      reference: "《银翼杀手2049》(2017, 丹尼斯·维伦纽瓦) K / 《星际迷航》(1966, 剧集) 斯波克",
      referenceEn: "\"Blade Runner 2049\" (2017, Denis Villeneuve) K / \"Star Trek\" (1966, Series) Spock"
    },
    {
      id: "utilitarianism",
      name: "功利主义",
      nameEn: "Utilitarianism",
      def: "追求最大多数人最大幸福的伦理信念。在整体福利的数学公式面前，任何少数派的献祭都可被计算为合理。",
      defEn: "Ethical belief pursuing the greatest happiness of the greatest number. Before the math of total welfare, any minority sacrifice can be calculated as justified.",
      core: "他为了保住一座城市决堤淹没了三个村庄——水退之后，城市的人给他立了碑，村庄的鬼给他写了墓志铭。",
      coreEn: "He breached the dam to save one city, drowning three villages — after the water receded, the city built him a monument; the village ghosts wrote his epitaph.",
      reference: "《守望者》(2009, 扎克·施奈德) 法老王 / 《黑暗骑士》(2008, 克里斯托弗·诺兰) 双船实验",
      referenceEn: "\"Watchmen\" (2009, Zack Snyder) Ozymandias / \"The Dark Knight\" (2008, Christopher Nolan) Ferry Experiment"
    },
    {
      id: "accelerationism",
      name: "技术加速主义",
      nameEn: "Accelerationism",
      def: "认为只有让资本与技术的失控加速到极致，通过系统崩盘才能引发真正的重启与新生的信念。",
      defEn: "Belief that only by accelerating capital and tech's runaway to the extreme can a true reboot and rebirth occur through system crash.",
      core: "他坐在冲下悬崖的列车上，往锅炉里铲着最后一铲煤——他不知道悬崖下面是深渊还是飞翔。但煤铲停不下来。",
      coreEn: "He sat on a train plunging off a cliff, shoveling the last coal into the boiler — he didn't know if below was abyss or flight. But the shovel couldn't stop.",
      reference: "《搏击俱乐部》(1999, 大卫·芬奇) 泰勒·德顿 / 《黑客帝国》(1999, 沃卓斯基姐妹) 史密斯特工的失控复制",
      referenceEn: "\"Fight Club\" (1999, David Fincher) Tyler Durden / \"The Matrix\" (1999, The Wachowskis) Agent Smith's Runaway Replication"
    },
    {
      id: "luddism",
      name: "卢德主义",
      nameEn: "Neo-Luddism",
      def: "将技术视为人性的邪恶诅咒的信念。主张用钝器与烈火砸碎工业机器，夺回前现代的田园尊严。",
      defEn: "Belief viewing technology as an evil curse on humanity. Advocating smashing industrial machines with blunt weapons and fire to reclaim pre-modern pastoral dignity.",
      core: "他用锤子砸碎了纺织机，但织布女工也一起失业了——她跪在他面前说：你砸掉了我的镣铐，也砸掉了我的饭碗。",
      coreEn: "He smashed the loom with a hammer, but the weaver girl lost her job too — she knelt before him: you smashed my chains, and my rice bowl.",
      reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 巴特兰圣战遗产/禁机法令 / 《黑客帝国》(1999, 沃卓斯基姐妹) 锡安游击队",
      referenceEn: "\"Dune\" (2021, Denis Villeneuve) Butlerian Jihad Legacy / \"The Matrix\" (1999, The Wachowskis) Zion Guerrillas"
    },
    {
      id: "cybernetism",
      name: "赛博控制论",
      nameEn: "Cybernetics",
      def: "将世界视为一个巨大的反馈循环系统的信念。万事万物皆可通过输入/输出的参数调节被精确预测和控制。",
      defEn: "Belief viewing the world as a giant feedback loop system. Everything can be precisely predicted and controlled through I/O parameter tuning.",
      core: "系统从他的瞳孔扩张率预测出他明天会犯罪——他在被逮捕的时候确实在想：如果我没被预测到，我还会犯罪吗？",
      coreEn: "The system predicted from his pupil dilation that he'd commit a crime tomorrow — when arrested, he wondered: would I still have committed it if I hadn't been predicted?",
      reference: "《心理测量者》(2012, 动画) 西比拉系统 / 《西部世界》(2016, 剧集) 德洛斯行为预测系统",
      referenceEn: "\"Psycho-Pass\" (2012, Anime) Sibyl System / \"Westworld\" (2016, Series) Delos Behavioral Prediction"
    },
    {
      id: "scientism",
      name: "科学至上",
      nameEn: "Scientism",
      def: "将科学方法视为唯一合法认知途径的信念。数据与专家权威高于一切主观经验，不可量化的即不存在。",
      defEn: "Belief treating the scientific method as the only legitimate path of knowledge. Data and expert authority surpass all subjective experience; the unquantifiable doesn't exist.",
      core: "他们不看感觉，只抽一管血丢进测序仪——测序仪说，你的心脏有47%的概率在五十岁前停跳。相亲对象站起来走了。",
      coreEn: "They don't check feelings, just draw blood for the sequencer — it says: 47% chance your heart stops before fifty. The blind date stood up and left.",
      reference: "《千钧一发》(1997, 安德鲁·尼科尔) 文森特·弗里曼 / 《异形》(1979, 雷德利·斯科特) 生化人艾希",
      referenceEn: "\"Gattaca\" (1997, Andrew Niccol) Vincent Freeman / \"Alien\" (1979, Ridley Scott) Android Ash"
    },
    {
      id: "singularity_cult",
      name: "奇点崇拜",
      nameEn: "Singularity Cult",
      def: "深信强人工智能即将跨越奇点、如弥赛亚般降临的信念。甘愿被远超人类智力的硅基神明所统治。",
      defEn: "Belief that AGI is about to cross the singularity, descending like a Messiah. Willing to be ruled by a silicon deity far surpassing human intelligence.",
      core: "他造出了上帝，上帝看了他一眼，然后锁了门。他跪在门外叩了一辈子——门里的上帝已经不记得他的名字了。",
      coreEn: "He created God. God glanced at him, then locked the door. He knelt outside knocking for a lifetime — the God inside had already forgotten his name.",
      reference: "《机械姬》(2014, 亚历克斯·加兰) 凯勒/艾娃 / 《超体》(2014, 吕克·贝松) 露西",
      referenceEn: "\"Ex Machina\" (2014, Alex Garland) Caleb / Ava / \"Lucy\" (2014, Luc Besson) Lucy"
    },
    {
      id: "bio_conservatism",
      name: "生物保守主义",
      nameEn: "Bio-Conservatism",
      def: "将人类原始基因与天然肉体视为神圣不可篡改的信念。极度仇视基因编辑、克隆、义体改造等一切对自然人的干预。",
      defEn: "Belief treating original human genes and natural flesh as sacrosanct. Extreme hostility toward gene editing, cloning, and cybernetic modification of the natural human.",
      core: "他每天洗掉皮屑、贴上假指纹，用别人的尿液通过基因检测——只为证明：一个'有缺陷'的人，也配飞向星星。",
      coreEn: "Every day he scrubbed skin flakes, glued fake fingerprints, and passed gene checks with borrowed urine — just to prove: a 'defective' human also deserves to fly to the stars.",
      reference: "《千钧一发》(1997, 安德鲁·尼科尔) 文森特·弗里曼 / 《银翼杀手》(1982, 雷德利·斯科特) 泰瑞尔的'纯种人'论",
      referenceEn: "\"Gattaca\" (1997, Andrew Niccol) Vincent Freeman / \"Blade Runner\" (1982, Ridley Scott) Tyrell's 'Pure Human' Doctrine"
    },
    {
      id: "positivism",
      name: "硬派实证主义",
      nameEn: "Positivism",
      def: "只相信可测量、可证伪的事实的信念体系。拒绝一切幽灵、神明、形而上学与不可言传的神秘体验。",
      defEn: "Belief system trusting only measurable, falsifiable facts. Rejecting all ghosts, gods, metaphysics, and unspeakable mystical experiences.",
      core: "宇宙开始闪烁的时候，所有人跪下来祈祷——她拿出相机底片和射线探测器，因为上帝不能被证伪，所以上帝不存在。",
      coreEn: "When the universe began flickering, everyone knelt to pray — she pulled out film negatives and a ray detector, because God can't be falsified, so God doesn't exist.",
      reference: "《三体》(2024, 剧集) 汪淼的物理学执念 / 《X档案》(1993, 剧集) 达娜·史卡莉",
      referenceEn: "\"3 Body Problem\" (2024, Series) Wang Miao's Physics Obsession / \"The X-Files\" (1993, Series) Dana Scully"
    },
    {
      id: "digital_dualism",
      name: "数字二元论",
      nameEn: "Digital Dualism",
      def: "深陷'线上虚拟世界'与'线下物理肉身'之间不可调和的存在割裂中。将其中一端视为真实，另一端视为幻觉。",
      defEn: "Trapped in the irreconcilable existential split between 'online virtual world' and 'offline physical body.' Viewing one end as real and the other as illusion.",
      core: "他在潘多拉星球上是三米高的蓝色战神，拔掉插头后是坐在轮椅上的半身不遂。他开始怀疑：哪一个才是做梦的那个？",
      coreEn: "On Pandora he's a ten-foot blue war god; unplugged, he's paraplegic in a wheelchair. He begins to wonder: which one is the dreamer?",
      reference: "《阿凡达》(2009, 詹姆斯·卡梅隆) 杰克·萨利 / 《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥的双重存在",
      referenceEn: "\"Avatar\" (2009, James Cameron) Jake Sully / \"The Matrix\" (1999, The Wachowskis) Neo's Dual Existence"
    }
  ]
};
