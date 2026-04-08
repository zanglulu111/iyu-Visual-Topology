import { LibraryCategoryDef } from '../../../types';

export const IDEO_ORDER: LibraryCategoryDef = {
    id: "ideo_order",
    name: "3. 秩序与传统 (Order & Tradition)",
    nameEn: "3. Order & Tradition",
    desc: "关于稳定、等级、过去与神圣的信仰。",
    descEn: "Beliefs about stability, hierarchy, the past, and the sacred.",
    items: [
      {
        id: "fundamentalism",
        name: "原教旨主义", nameEn: "Fundamentalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "回归经典。字面解释教义，排斥现代性，世界非黑即白。",
        defEn: "Return to scripture. Literal interpretation, rejecting modernity, black-and-white worldview.",
        core: "绝对的信仰对抗复杂的现实。异教徒与异端必须被物理净化。",
        coreEn: "Absolute faith versus complex reality. Infidels and heretics must be physically purified.",
        reference: "《使女的故事》根据远古经文倒行逆施剥夺女性所有基本权利只要求其生育的基列国政权；《猎魔人》永恒之火教派在广场上把所有精灵和变异者活活烧死净化城邦的狂热牧师。",
        referenceEn: "\"The Handmaid's Tale\" Gilead enacting ancient scriptures to enslave women as breeders; \"The Witcher\" Eternal Fire priests burning elves alive to purify the city."
      },
      {
        id: "asceticism",
        name: "禁欲主义", nameEn: "Asceticism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "受苦是高尚的。拒绝物质享受，通过肉体痛苦升华灵魂。",
        defEn: "Suffering is noble. Rejecting material pleasure, elevating the soul via fleshly pain.",
        core: "精神对肉体的暴政。越痛苦越神圣，用自我的摧残换取存在的确证。",
        coreEn: "The tyranny of spirit over flesh. The more painful, the holier; trading self-mutilation for existential proof.",
        reference: "《达芬奇密码》用倒刺大腿带疯狂抽打自己以肉体极大痛苦换取心灵洗涤的白化病杀手；《七宗罪》变态杀手以此折磨世人宣判饕餮与贪婪之罪必须通过极度苦难以作偿还。",
        referenceEn: "\"The Da Vinci Code\" an albino assassin flagellating himself with barbed belts for holy purity; \"Se7en\" punishing gluttony and greed through extreme fleshly agony."
      },
      {
        id: "patriarchalism",
        name: "宗法统治", nameEn: "Patriarchalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "长辈永远是对的。等级森严的家族与伦理结构，依靠孝道与绝对服从运转。",
        defEn: "Elders are always right. Strict familial & ethical structures functioning on filial piety and absolute obedience.",
        core: "极其压抑的爱与恨。权力的代际剥削与伪善，伴随着不可言说的反抗。",
        coreEn: "Extremely repressed love and hate. Intergenerational exploitation of power and hypocrisy, accompanied by unspeakable rebellion.",
        reference: "《大红灯笼高高挂》死死锁定在封闭大院里老爷的面孔甚至不用出现也能压死所有偏房的礼教；《教父》长子无论多无能都必须被尊为领袖为了维系家族长序的残酷封建底色。",
        referenceEn: "\"Raise the Red Lantern\" unseen patriarchs crushing concubines within cloistered estates; \"The Godfather\" respecting the eldest son as don strictly to maintain familial hierarchy."
      },
      {
        id: "fatalism",
        name: "宿命论", nameEn: "Fatalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "一切事物皆已在宇宙剧本中注定。反抗是最大的徒劳，接受是绝对的智慧。",
        defEn: "All things are predetermined in the cosmic script. Rebellion is maximum futility; acceptance is absolute wisdom.",
        core: "俄狄浦斯式的深邃悲剧：越是拼命挣扎，越是加速陷入早已织好的大网之中。",
        coreEn: "Oedipal deep tragedy: the more one struggles, the faster one falls into the pre-woven net.",
        reference: "《俄狄浦斯王》为了躲避杀父娶母的神谕拼命逃离最终却恰逢其会完成诅咒的绝对悲剧；《降临》看完了自己女儿一生必将走向病理死亡的剧本却依然微笑着拥抱这一切的平头外星人语言学。",
        referenceEn: "\"Oedipus Rex\" fleeing a prophecy of patricide only to fulfill it perfectly; \"Arrival\" knowing her daughter's tragic doomed fate but embracing the linear timeline."
      },
      {
        id: "collectivism",
        name: "集体主义", nameEn: "Collectivism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "蜂巢意志最高。个人仅仅是巨大工程机器上的螺丝钉，牺牲小我是至高荣耀。",
        defEn: "Hive mind supreme. Individuals are mere cogs; sacrificing the minor self is the highest glory.",
        core: "在极具美学的整齐划一中，压抑着令人窒息的个体消亡与面目模糊的狂热。",
        coreEn: "In highly aesthetic uniformity represses suffocating individual decay and faceless fanaticism.",
        reference: "《1984》在电幕监视下每天做广播体操毫无隐私把甚至思想都全部上交老大哥的温顺螺丝钉；《星河战队》将个体的断手断脚转化为联邦光荣征兵宣传的大毒草阵列。",
        referenceEn: "\"1984\" cogs doing calisthenics on telescreens surrendering even thoughts to Big Brother; \"Starship Troopers\" converting mangled limbs into glorious federal recruitment propaganda."
      },
      {
        id: "nationalism",
        name: "民族主义", nameEn: "Nationalism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "我们对决他们。对血统与假想共同体的极度狂热，外部的仇恨是内部团结的地基。",
        defEn: "Us vs. Them. Extreme fanaticism for bloodline and imagined communities; external hatred grounds internal unity.",
        core: "高度排外的激情与仇恨凝视。神圣的边境线上流淌着被妖魔化的他者的血。",
        coreEn: "Highly xenophobic passion and hateful gaze. The holy border flows with the demonized others' blood.",
        reference: "《辛德勒的名单》极度迷信日耳曼纯血把其他民族像工业垃圾一样排队送进毒气室的狂热纳粹士兵；《斯巴达300勇士》哪怕战至最后一滴血也绝不允许波斯铁蹄玷污城邦半步的战前嘶吼。",
        referenceEn: "\"Schindler's List\" Nazis obsessed with pure blood gassing minorities like industrial waste; \"300\" screaming Spartans refusing to let Persian boots taint their holy turf."
      },
      {
        id: "conformism",
        name: "从众主义", nameEn: "Conformism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "出头的钉子必须挨锤。平庸才是最安全的护城河，竭尽全力融入灰色的背景。",
        defEn: "The nail that sticks out gets hammered. Mediocrity is the safest moat, trying hard to blend into the gray background.",
        core: "对哪怕一丝‘不同’的极度恐惧。在沉默的螺旋中亲手掐死所有的色彩与变异。",
        coreEn: "Extreme fear of even a sliver of 'difference'. Strangling all colors and mutations in the spiral of silence.",
        reference: "《楚门的世界》所有邻居哪怕察觉异样也每天维持虚假早安极度害怕打破镜头秩序的群演；《黑镜: 急转直下》不敢对上级发怒只能挤出假笑卑微维持星级评分的塑料社畜。",
        referenceEn: "\"The Truman Show\" neighbors repeating fake mornings fearing breaking the scheduled routine; \"Black Mirror\" suppressing anger with fake smiles to maintain average plastic star ratings."
      },
      {
        id: "conservatism",
        name: "保守主义", nameEn: "Conservatism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "深信过去永远比现在好。警惕任何形式的加速与变革，死气沉沉地守护着遗迹。",
        defEn: "Convinced the past is always better. Wary of any acceleration and change, lifelessly guarding relics.",
        core: "怀旧的滤镜对抗冰冷变化的现实。在一场注定失败的抗争中试图冻结时间之河。",
        coreEn: "Nostalgic filters battling the cold changing reality. Attempting to freeze the river of time in a doomed struggle.",
        reference: "《唐顿庄园》外面已经打起了一战连电灯都觉得刺眼老伯爵死抓着仆人贵族阶梯不放手的固执；《指环王》对任何外族旅行者充满怀疑唯恐打乱了一日六餐安逸和平的夏尔霍比特人。",
        referenceEn: "\"Downton Abbey\" earls refusing electricity clinging to aristocratic staircases during WWI; \"Lord of the Rings\" Shire hobbits fearing travelers that disrupt their six-meal peace."
      },
      {
        id: "bureaucratism",
        name: "形式官僚", nameEn: "Bureaucratism",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "程序正义与免责高于一切生命价值。将世界裁剪成符合表格与章程的死板形状。",
        defEn: "Procedural justice and exoneration surpass all life value. Cropping the world into rigid shapes fitting forms and statutes.",
        core: "卡夫卡式的庞大荒谬。活生生的人被迷宫般的公文流转彻底困死、抽干。",
        coreEn: "Kafkaesque colossal absurdity. Living humans completely trapped and drained dry by labyrinthine document flows.",
        reference: "《是，大臣》用层层叠叠长达数百页无人看懂的公文直接把改革意图熬死在会议室文山上的汉弗莱；《妙想天开》因为打字机飞进去一只死苍蝇导致名字敲错直接让无辜平民被残酷逮捕的死板公仆。",
        referenceEn: "\"Yes Minister\" burying reforms under hundreds of pages of unreadable memos; \"Brazil\" arresting an innocent man because a dead fly caused a typo on a rigid form."
      },
      {
        id: "feudal_loyalty",
        name: "封建愚忠", nameEn: "Feudal Loyalty",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "士为知己者死。建立在绝对人身依附上的主从关系，为了“义气”进行无条件的献肉。",
        defEn: "Scholars die for their confidants. Master-servant relation built on absolute personal attachment; unconditional flesh sacrifice for 'loyalty'.",
        core: "浪漫化了的极度不平等。一旦主君表现出轻蔑的背叛，会遭遇最深的不可愈合创伤。",
        coreEn: "Romanticized extreme inequality. Once the lord shows contemptuous betrayal, it incurs the deepest unhealable trauma.",
        reference: "《极恶非道》只要黑帮组长一句话就能当场切下自己小指头奉上以彰忠诚的变态小弟；《忠臣藏》四十七浪人蛰伏多年不惜满门抄斩也要为主君切腹尽忠复仇的绝对狂热。",
        referenceEn: "\"Outrage\" Yakuza severing their own pinkies on the spot to prove loyalty to the boss; \"47 Ronin\" waiting years to avenge a lord ending in mass seppuku."
      },
      {
        id: "purity_culture",
        name: "纯洁文化", nameEn: "Purity Culture",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "对“脏污与污染”的病态恐惧。从处女情结到严酷的思想审查，要求环境绝对的一尘不染。",
        defEn: "Pathological fear of 'filth/pollution'. From virgin complexes to harsh thought policing, demanding an absolutely spotless environment.",
        core: "极度压抑的潜台词是变态的渴望。越是狂热洗刷纯洁，越容易被泥沼深处的污秽所吸引。",
        coreEn: "The extreme repressed subtext is perverse desire. The more fanatically one scrubs purity, the easier one is drawn to the filth in the deep bog.",
        reference: "《红字》因为通奸被强迫在胸前绣上猩红A字在清教徒唾沫星子里忍辱偷生一辈子的海斯特；《黑天鹅》被母亲病态的处女洁癖重重保护最终在对黑暗黑天鹅的极度压抑下人格崩坏的妮娜。",
        referenceEn: "\"The Scarlet Letter\" Hester bearing a red 'A' amid puritan spits for adultery; \"Black Swan\" Nina cracking under her mother's pathological virgin-purity protection."
      },
      {
        id: "honor_culture",
        name: "荣誉文化", nameEn: "Honor Culture",
        group: "3. 秩序与传统", groupEn: "3. Order & Tradition",
        def: "面子比生命权柄更重要。一旦受到言语或行动的阶级性侮辱，必须用鲜血与决斗来清算洗刷。",
        defEn: "Face is more vital than the right to live. Class insults must be settled and washed with blood and duels.",
        core: "建立在火药桶上的脆弱纸糊自尊。一次漫不经心的对视就能引发家族诛灭级别的血案。",
        coreEn: "Fragile paper self-esteem built on a powder keg. A careless glance triggers family-annihilation-level bloodshed.",
        reference: "《决斗的人》为了一个微不足道的嘴炮侮辱两个法国军官在几十年间拔剑火拼到底的荒诞执念；《沙丘》哪怕明知是陷阱只要被公然叫阵就必须脱下护盾拿起匕首死战捍卫家徽的厄崔迪公爵。",
        referenceEn: "\"The Duellists\" French officers clashing swords for decades over a petty insult; \"Dune\" Duke Atreides dropping shields for a knife duel just to defend house honor."
      }
    ]
  };
