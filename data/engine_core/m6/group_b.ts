import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 镜像的碎裂 (Imaginary Shattering) — 20 Items
    // 丧失维度：你的"自我画像"被震碎——镜子还在，但里面的人你不认识了。
    // 核心感受：你不知道自己是谁了，或者你发现"你"从来不存在。
    // 光谱：认知瓦解(1-5) → 记忆/时间丧失(6-10) → 现实感丧失(11-15) → 自我边界溶解(16-20)
    // ============================================================

    // ---- 认知瓦解：理性大厦的地基被抽走 ----

    {
        id: "stake_madness",
        name: "理智崩溃", nameEn: "Madness",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "认知结构被实在界的恐怖喷发冲垮，主体陷入永恒的谵妄，分不清现实与幻觉。",
        defEn: "Cognitive structure overwhelmed by eruptions of the Real, plunging the subject into eternal delirium where reality and hallucination merge.",
        core: "A面：疯子看到了'正常人'被训练忽略的东西——疯癫有时是理性无法容纳的过量真相。/ B面：但疯癫不是'另一种清醒'——是彻底丧失了区分冷热、安危、真假的能力。你被锁进了自己的大脑，钥匙被扔掉了。关键张力：如果'正常'意味着看不到真相——疯癫算不算一种代价过高的启蒙？ | 代价切口(−Φ): 符号认知的终结——语言无法再为世界编织秩序。",
        coreEn: "A-side: The mad see what 'normal people' are trained to ignore — madness is sometimes an excess of truth reason can't contain. / B-side: But madness isn't 'another clarity' — it's losing the ability to distinguish hot from cold, safe from dangerous, true from false. Locked in your own skull, key discarded. Key tension: If 'sanity' means blindness to truth — is madness an overpriced enlightenment? | Castration Circuit: End of symbolic cognition — language can no longer weave order for the world.",
        reference: "《禁闭岛》深陷丧妻创伤而永远困在幻想岛屿上的联邦探员；《闪灵》被旅馆亡魂吞噬理智的杰克。",
        referenceEn: "The federal marshal forever trapped in delusion on his grief-island in Shutter Island; Jack consumed by the hotel's spirits in The Shining.",

        topology: "交出的不是情绪稳定——而是'区分真假'这个能力。镜子还在，但里面的人不再服从指令",

        directive: {
            bright: "写他清醒地看着理性从身上脱落。墙上的裂缝开始呼吸，他知道这不对，但他看得见。他向别人描述时对方的表情告诉他：你已经在线的另一边了。他在这个表情里辨认出代价的精确形状。不要写他得到了什么，只写他注视着清醒离开。",

            dark: "写他刷牙时撞见代价——手指突然变成了陌生物件。他不记得交出过这个。盯着镜中的脸，试图用'我叫某某'把自己拼回来，每个词都像借来的。每一次日常的卡顿都是他低头发现认知又空了一点的瞬间。代价不是一次性收取的，它在日常里一笔一笔地扣。",

            tension: "他坐在医生面前，对方语速正常。但声音和嘴唇之间有零点几秒的延迟。他不确定是否已经付完——还能察觉延迟说明没全疯，但已经无法确认哪一层是真的。他不知道'理智'这张账单有多少笔，不知道下一笔什么时候到。写他等在延迟里的姿势。不要给判断。"
        }
    },
    {
        id: "stake_cognitive_overload",
        name: "认知过载", nameEn: "Cognitive Overload",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "看到了超出人类神经承受极限的真相——大脑的保险丝被真理本身烧断。",
        defEn: "Seeing truth beyond the human nervous system's capacity — the brain's fuse blown by truth itself.",
        core: "A面：只有极少数人有资格被真相烧毁——这意味着你的认知曾触碰到绝大多数人终生无法企及的高度。/ B面：但这种'资格'不是奖赏——是一张永久残疾证。看到了不该看的东西之后，你不会'忘记'，你只会在每个安静的夜晚被它的余像反复灼烧。关键张力：如果真相必然摧毁看到它的人——真相还值得追求吗？ | 代价切口(−Φ): 认知天花板被暴力穿透——你的大脑不是为这种分辨率设计的。",
        coreEn: "A-side: Only a rare few are 'qualified' to be burned by truth — your cognition reached heights most never approach. / B-side: But this 'qualification' isn't a reward — it's a permanent disability card. After seeing what shouldn't be seen, you don't 'forget'; its afterimage sears you every quiet night. Key tension: If truth inevitably destroys whoever sees it — is truth still worth pursuing? | Castration Circuit: Cognitive ceiling violently breached — your brain wasn't designed for this resolution.",
        reference: "《降临》学会外星语言后被迫预见女儿死亡的语言学家；《星际穿越》穿越五维空间后认知结构被彻底改写的库珀。",
        referenceEn: "The linguist forced to foresee her daughter's death after learning the alien language in Arrival; Cooper whose cognitive structure is rewritten after traversing five-dimensional space in Interstellar.",

        topology: "交出的不是无知——而是'不看见'的保险丝。认知容器被真相撑破了，碎片比容器大，塞不回去",

        directive: {
            bright: "写他清醒地看着保险丝烧断。所有噪音停了，脑中画面比现实更清晰。他试图转述，语言在嘴边碎裂。他看着'能用语言说出来'这个能力从身上脱落——像断路器跳闸后的黑暗，比灯亮时更完整。不要写他获得了什么，只写他注视着认知的旧容器碎在地上。",

            dark: "写他买菜时撞见代价——盯着一粒米看了三分钟，因为他看到了原子在振动。他不记得交出过这个。上班、接孩子、做饭，每一件日常事都变成薄纸片，他能看到后面的结构。每一次'无法不看见'都是他发现过滤器又少了一层的瞬间。代价在日常里一笔一笔地扣。",

            tension: "他站在窗前，窗外街景正常。但他同时看到了光的波长、微粒密度、行人骨骼的受力分布。他不确定是否已经付完——保险丝烧了多少根？还有多少层过滤器会在明天消失？这些东西一直在那里，只是他以前看不到。写他等待下一层暴露的姿势。不要给结局。"
        }
    },
    {
        id: "stake_faith_collapse",
        name: "信仰坍塌", nameEn: "Faith Collapse",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "支撑你全部世界观的核心信念被证伪——不是你犯了错，而是你整个坐标系是假的。",
        defEn: "The core belief supporting your entire worldview is falsified — not that you erred, but your entire coordinate system was false.",
        core: "A面：信仰坍塌是重建的前提——只有当旧地基被清除，真正属于你自己的东西才有空间生长。/ B面：但失去信仰不是'升级'——是失去了起床的理由。当'意义'本身被证伪，连问'为什么活着'都变成了一个没有收件人的信。关键张力：信仰坍塌后的废墟上——你是建造新的信仰，还是学会在没有信仰的情况下活着？ | 代价切口(−Φ): 存在的操作系统被格式化——不是文件丢了，是硬盘本身坏了。",
        coreEn: "A-side: Faith collapse is reconstruction's prerequisite — only when old foundations are cleared can something truly yours grow. / B-side: But losing faith isn't 'upgrading' — it's losing the reason to get up. When 'meaning' itself is falsified, even asking 'why live' becomes a letter with no recipient. Key tension: On faith's ruins — do you build new faith, or learn to live without any? | Castration Circuit: The existential operating system is formatted — not files lost, but the hard drive itself is broken.",
        reference: "《沉默》在迫害中等不到上帝回应的传教士；《真探》凝视过太多深渊后彻底不信人类有救赎可能的拉斯特。",
        referenceEn: "The missionary who receives no answer from God under persecution in Silence; Rust who, having stared into too many abysses, ceases believing redemption is possible in True Detective.",

        topology: "交出的不是某个信念——而是'相信'这个能力本身。操作系统被格式化，连错误提示都无法显示",

        directive: {
            bright: "写他清醒地看着'方向感'从身上脱落。闹钟响了，他起床，站在十字路口——所有方向变得等价。以前一根看不见的线牵着他，现在线断了。他感觉到失重的轻，在这个失重里辨认出代价的精确形状。不要写他得到了什么，只写他注视着意义离开。",

            dark: "写他做祈祷时撞见代价——手在做动作，动作底下是空的。他不记得交出过这个。做完整套仪式坐在那里，表情平静，眼睛对焦在不存在的点上。刚才做的和没做完全一样——每一次'完全一样'都是他发现信仰又少了一块的瞬间。代价在仪式里一笔一笔地扣。",

            tension: "他坐在以前觉得神圣的地方，环顾四周，一切没变。但他不确定是否已经付完——'相信'这个词太大，他不知道它有多少零件。以前被托举的感觉如果不来自上帝，来自哪里？如果来自自己，为什么现在给不了自己了？写他等下一个零件消失的姿势。不要给答案。"
        }
    },
    {
        id: "stake_glitch",
        name: "现实崩塌", nameEn: "Reality Collapse",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "撕开了世界幕布的一角——发现自己和整个世界不过是一场投影、一段代码或一个实验。",
        defEn: "Tearing a corner of the world's curtain — discovering yourself and the entire world are merely a projection, a code, or an experiment.",
        core: "A面：发现现实是被建构的，反而意味着现实可以被重新建构——如果旧世界是假的，你就有权利创造新世界。/ B面：但'一切都是假的'这个认知会感染你所有的经验——你的初恋是假的吗？你母亲的笑容是程序生成的吗？你的眼泪有没有真实的重量？关键张力：如果你的全部人生都是一场戏——你继续演下去，还是砸碎舞台？ | 代价切口(−Φ): 存在土壤的伪造被揭穿——地板下面是虚空。",
        coreEn: "A-side: Discovering reality is constructed means it can be reconstructed — if the old world is fake, you have the right to create a new one. / B-side: But 'everything is fake' infects all experience — was your first love fake? Was your mother's smile procedurally generated? Do your tears have real weight? Key tension: If your entire life is a play — do you keep performing, or smash the stage? | Castration Circuit: The falsification of existence's soil is exposed — beneath the floor is void.",
        reference: "《楚门的世界》发现整个人生是一场真人秀的楚门；《黑客帝国》吞下红药丸后看到人类培养皿的尼奥。",
        referenceEn: "Truman discovering his entire life is a reality show in The Truman Show; Neo seeing human pods after swallowing the red pill in The Matrix.",

        topology: "交出的不是安全感——而是'地板是实的'这个预设。壁纸还在，但他已经看到了下面的胶水和虚空",

        directive: {
            bright: "写他清醒地看着'可信度'从物体上脱落。他掐自己手背，白印变红，生理反应还在——但'硬'这个属性还可信吗？他盯着那个白印，试图从这个小反应里找到锚点。他在这个过于安静的验证里辨认出代价的精确形状。不要写恐慌，只写他注视着确定性离开。",

            dark: "写他回家时撞见代价——窗帘的褶皱太规则了。他不记得交出过这个。墙角阴影角度不对，杯子的摆放过于精确。蹲下来看，破绽越看越多——不是一个，到处都是。每一处'太规则'都是他发现真实感又少了一层的瞬间。代价不是一次性收取的，它在每个细节里一笔一笔地扣。",

            tension: "他站在镜前，脸一切正常。但他不确定是否已经付完——这张脸是长出来的还是被设计的？如果愤怒是被设计的，因'被设计'而愤怒的这个愤怒，是不是也是设计的一部分？'现实'这个词太大，他不知道还有多少层壁纸会在明天被揭开。写他等的姿势。不要给结局。"
        }
    },
    {
        id: "stake_nihilism",
        name: "绝对虚无", nameEn: "Absolute Nihilism",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "看透了宇宙毫无意义的底牌——所有驱动欲望前行的'小客体'瞬间蒸发。",
        defEn: "Seeing through the universe's meaningless endgame — all 'objet petit a' driving desire evaporate instantly.",
        core: "A面：虚无是绝对自由的另一个名字——如果没有什么东西'应该'被追求，你就可以追求任何东西，包括什么都不追求。/ B面：但虚无不是平静——是一种比绝望更深的东西。绝望是'得不到'，虚无是'得到了也没有意义'。欲望引擎的熄火。关键张力：当意义本身失去意义——你是彻底躺平，还是在无意义中自行创造意义？ | 代价切口(−Φ): 欲望核心（Desire Engine）的永久熄火。",
        coreEn: "A-side: Nihilism is another name for absolute freedom — if nothing 'should' be pursued, you can pursue anything, including nothing. / B-side: But nihilism isn't peace — it's deeper than despair. Despair is 'can't get'; nihilism is 'getting it wouldn't matter either.' The desire engine stalls. Key tension: When meaning itself loses meaning — do you lie flat forever, or forge your own meaning in the void? | Castration Circuit: The Desire Engine permanently stalls.",
        reference: "《老无所依》直面纯粹的硬币暴力后交出警徽的老警长；《真探》凝望虚无黑洞的拉斯特·科尔。",
        referenceEn: "The old sheriff surrendering his badge after facing pure coin-toss violence in No Country for Old Men; Rust Cohle gazing at the nihilistic void in True Detective.",

        topology: "交出的不是快乐——而是'在乎'这个回路本身。欲望引擎还在，但热量不再传导给任何东西",

        directive: {
            bright: "写他清醒地看着'想要'从身上脱落。公园长椅上，周围人在跑步、亲吻，他能理解每个动作的含义，但'含义'变成了透明的。他试图让自己想要一杯咖啡——那块肌肉已经萎缩了。他在'喜欢与不喜欢之间没有区别'这件事里辨认出代价的形状。不要写他得到什么，只写他注视着欲望离开。",

            dark: "写他躺在床上时撞见代价——等一个念头出现，任何念头。脑中白屏，什么都可能显示，什么都没出现。他不记得交出过这个。等了很久翻了个身——不是因为不舒服，是身体还有惯性而意识已经没有了。每一次'白屏'都是他发现在乎的回路又断了一根的瞬间。代价在空白里一笔一笔地扣。",

            tension: "有人递给他一封信。他接过来了，感受到重量和温度。但'意义'没有传导过来。他不确定是否已经付完——感官完好无损，坏掉的只是'在乎'。他不知道这个回路有多少根线，不知道还有哪些'在乎'会在未来某个下午突然断掉。写他握着那封信等待的姿势。不要给结局。"
        }
    },

    // ---- 记忆/时间丧失：过去或未来的维度被切断 ----

    {
        id: "stake_memory_wipe",
        name: "记忆抹除", nameEn: "Memory Wipe",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "所有经历、情感羁绊和痛苦挣扎被一键清空——变成一张白纸。",
        defEn: "All experiences, emotional bonds, and painful struggles wiped blank — returned to a colorless slate.",
        core: "A面：被清空的人获得了最极端的'重新开始'——没有仇恨、没有创伤、没有前任的阴影，一切从零开始。/ B面：但'我'是记忆的拓扑缠绕——取消了过去，那个曾经存在的'我'就被杀死了。新的白纸上写的故事，已经不是你的故事。关键张力：如果忘掉一切意味着不再痛苦——你愿意用'你'来交换'平静'吗？ | 代价切口(−Φ): 时间拓扑的斩断——过去的你被执行了死刑。",
        coreEn: "A-side: The wiped gain the most extreme 'fresh start' — no hatred, no trauma, no ex's shadow, all from zero. / B-side: But 'I' is memory's topological entanglement — cancel the past and the 'I' who once existed is killed. The story written on the blank page is no longer yours. Key tension: If forgetting everything means no more pain — would you trade 'you' for 'peace'? | Castration Circuit: The timeline topology is severed — past-you is executed.",
        reference: "《美丽心灵的永恒阳光》自愿清除恋爱记忆的痛苦恋人；《黑衣人》被记忆银光笔一闪抹去全部人生的路人。",
        referenceEn: "The anguished lovers voluntarily erasing love memories in Eternal Sunshine; passersby losing entire lives to the memory pen-flash in Men in Black.",

        topology: "交出的不是某段记忆——而是'有过去'这个维度本身。时间轴被斩首，伤口干净，但你成了没有根的植物",

        directive: {
            bright: "写他清醒地看着'连贯性'从身上脱落。醒来时感觉一切正常，但'正常'是空的。下意识想做一件事——内容消失了，只剩'想做'的轮廓。手腕上一道旧疤，完全不记得来历，但手指会自动去摸。他在身体比他记得更多这件事里辨认出代价的形状。只写他注视。",

            dark: "写他翻照片时撞见代价——照片里自己搂着一个笑着的人。他认出了自己的脸，但那个搂肩膀的姿势是陌生人的动作。他不记得交出过这个。试图从照片里读取情感，像读一本自己笔迹写的、内容全然陌生的日记。每一张照片都是他发现过去又少了一块的瞬间。代价在旧物里一笔一笔地扣。",

            tension: "他走在一条显然走过很多次的路上——脚步节奏自动，拐弯时机精确。但他不确定是否已经付完——身体还记得一个他不认识的人的全部习惯。'过去'有多少件？哪些零件会在明天又被发现是空的？写他被一个已死的自己牵着走的姿势。不要让他停下。"
        }
    },
    {
        id: "stake_dementia",
        name: "认知消散", nameEn: "Dementia",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "不是一次性失忆，而是眼睁睁看着自己的心智一块块缓慢崩落的漫长葬礼。",
        defEn: "Not one-time amnesia, but watching your own mind slowly collapse piece by piece — a prolonged funeral.",
        core: "A面：在消散的间隙，偶尔涌现的清晰碎片比健全时更珍贵——因为你知道这是最后几次了。极限中的觉知有一种绝望的纯粹。/ B面：但大多数时间你不是在'清醒地告别'——你是在困惑中反复经历第一次的恐惧。每天醒来都是一个陌生的房间，每个面孔都是第一次见。关键张力：当你连'自己正在消失'都无法理解时——'你'还存在吗？ | 代价切口(−Φ): 逻辑积木的粉化——《困在时间里的父亲》。",
        coreEn: "A-side: In the gaps between fading, occasional clarity fragments are more precious than in health — because you know these are the last few times. Awareness at the limit holds a desperate purity. / B-side: But mostly you're not 'consciously saying goodbye' — you're repeatedly experiencing first-time fear in confusion. Every morning a strange room, every face for the first time. Key tension: When you can't even comprehend 'you're disappearing' — do 'you' still exist? | Castration Circuit: Logical scaffolding pulverized — The Father.",
        reference: "《困在时间里的父亲》认不出女儿、分不清房间方位的老人；《恋恋笔记本》读着日记试图唤醒妻子记忆的丈夫。",
        referenceEn: "The old man who can't recognize his daughter or orient himself in The Father; the husband reading diaries to awaken his wife's memory in The Notebook.",

        topology: "交出的不是一次性的记忆——而是'认出'这个能力的渐次粉化。每块积木都在手里变成粉末，剥到最后也不是地基",

        directive: {
            bright: "写他清醒地看着辨认力从身上脱落——一个清晰的间隙里突然认出了面前的人。眼睛聚焦，嘴角微动，一只手伸出去。但这个清晰自带悲伤——他知道窗口马上要关，无法控制关闭速度。他在窗口里辨认出代价的精确形状：它不是一次收走，而是一扇一扇地关。只写他最后说出的那句话。",

            dark: "写他喝茶时撞见代价——不知道茶是谁倒的，不知道在哪个房间，不知道窗外是哪座城市。但他不害怕。他不记得交出过这个。这个'不害怕'比害怕更深——连'知道自己在失去'这个能力也失去了。他端起茶喝了一口，动作优雅而空洞。代价在从容里一笔一笔地扣。",

            tension: "面前一个人的脸，显然认识他、爱他、正在说话。他感觉到一种温暖，但不确定是记忆还是体温。他不确定是否已经付完——没有内容的重要性，是爱的残骸还是爱的本质？'认出'有多少层，他不知道下一层什么时候粉化。写他等在温暖里的姿势。不要让那个人离开。"
        }
    },
    {
        id: "stake_past_falsified",
        name: "过去篡改", nameEn: "Past Falsified",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "你确信无疑的记忆其实是被他人或系统植入的——你的'过去'是一件伪造品。",
        defEn: "Memories you were certain of were actually implanted by others or systems — your 'past' is a forgery.",
        core: "A面：发现记忆是伪造的，反而证明了当下此刻的你是唯一真实的——因为过去已经不可信，你唯一能锚定的只有'现在'。/ B面：但如果记忆可以被植入——你怎么确定'此刻的你'不也是植入的？怀疑一旦开始就无法停止，你会陷入一种永无终点的认识论螺旋。关键张力：如果你的童年是编造的——那个在编造的童年中哭泣过的'你'，他的眼泪是真的吗？ | 代价切口(−Φ): 存在的根基文件被篡改——你是一份不知道自己是赝品的赝品。",
        coreEn: "A-side: Discovering memories are forged proves the present you is the only real thing — since the past is unreliable, the only anchor is 'now.' / B-side: But if memories can be implanted — how do you know 'the current you' isn't implanted too? Once doubt starts it can't stop; you spiral into an endless epistemological vortex. Key tension: If your childhood was fabricated — were the tears you shed in that fabricated childhood real? | Castration Circuit: Existence's root files are tampered — you're a forgery that doesn't know it's forged.",
        reference: "《银翼杀手》发现自己的童年照片和记忆都是植入的瑞秋；《全面回忆》分不清哪段记忆是真实经历的特工。",
        referenceEn: "Rachael discovering her childhood photos and memories are implants in Blade Runner; the agent who can't tell which memories are real in Total Recall.",

        topology: "交出的不是过去——而是'我的过去属于我'这个前提。源代码被重写了，你运行的每一天都基于被篡改的初始值",

        directive: {
            bright: "写他清醒地看着'可信度'从记忆上脱落。发现第一个证据——照片光影不对，某个细节和物理规律矛盾。像衣服上一根线头，他拉了一下，还没断。手指知道继续拉整件衣服会散架，但手指没有停。他在犹豫里辨认出代价的形状。不要写他发现了什么，只写他注视着信任离开。",

            dark: "写他翻日记时撞见代价——把所有证据摊开：照片、录音、证词。他不记得交出过这个。每一条线索都指向同一个结论：过去是被制造的。确认之后一种特殊的安静——不是崩溃前的平静，是方程被解开后的空白。答案是对的，但答案让问题本身消失了。代价在验证里一笔一笔地扣。",

            tension: "他坐在'记得'的地方——童年的房间。能描述每个细节，但知道这些细节是被植入的。他不确定是否已经付完——对假记忆的感情是真的，他真的在不存在的院子里感到过安全。那种安全感还在，但地基消失了。他不知道还有多少感情会被证伪。写他等的姿势。不要让他离开。"
        }
    },
    {
        id: "stake_eternal_prison",
        name: "永恒囚禁", nameEn: "Eternal Imprisonment",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "被凝固在一个永不流动的瞬间——时间对你不再前进，但意识从未关闭。",
        defEn: "Frozen in a non-flowing instant — time no longer advances for you, yet consciousness never shuts down.",
        core: "A面：时间停止意味着死亡不会来——在某种极端意义上，你获得了永恒。所有害怕死亡的人梦寐以求的东西，你拥有了。/ B面：但没有终结的存在比死亡更可怖——因为连'等待结束'这个希望都被取消了。你不是在'忍耐'，你是在一个没有出口的走廊里永远行走。关键张力：如果你可以永远活着但永远不能改变任何东西——这是生还是死？ | 代价切口(−Φ): 时间流逝与死亡权利的双重剥夺。",
        coreEn: "A-side: Time stopping means death won't come — in an extreme sense, you've gained eternity. What everyone who fears death dreams of, you have. / B-side: But existence without end is more terrifying than death — even the hope of 'waiting for the end' is cancelled. You're not 'enduring'; you're walking forever in a corridor with no exit. Key tension: If you could live forever but never change anything — is this life or death? | Castration Circuit: Both the passage of time and the right to die are stripped.",
        reference: "《黑镜·白色圣诞》被拨至百万年独处的数字意识体；《三体》滑入死线永留一瞬不可生灭的宇宙墓志铭。",
        referenceEn: "A digital consciousness dialed to millions of years of solitary confinement in Black Mirror: White Christmas; falling into the death line, eternally frozen in one instant in The Three-Body Problem.",

        topology: "交出的不是自由——而是'时间会过去'这个承诺。出口被焊死，你被钉在时间的一个点上，河水绕过了你",

        directive: {
            bright: "写他清醒地看着'终结的可能'从身上脱落。最初他还在计数，在墙上刻痕迹，手指磨出了茧。第一天、第一百天。计数本身成为证明存在的仪式。到某一天他停了——数字大到没有意义。他在放下手的动作里辨认出代价的形状。不要写他得到什么，只写他注视着终点离开。",

            dark: "写他在某个极长的时间后撞见代价——试图想起一个人的脸，任何人的。记忆已被时间磨成一种抽象的温度感——记得'温暖'，但不记得来源。他不记得交出过这些。绝对寂静中听到自己的心跳，这是唯一的事件。每一次'想不起来'都是他发现连接又少了一根的瞬间。代价在寂静里一笔一笔地扣。",

            tension: "面前出现了一个变化——光线角度移了一毫米，或空气温度波动了零点几度。无限重复中的第一个变量。他不确定是否已经付完——这个变化是真的，还是意识在空白中自己制造的？如果无法区分真实变化和幻觉——时间对他还流动吗？写他等在变量里的姿势。不要让变化确认自己。"
        }
    },
    {
        id: "stake_time_loop",
        name: "无尽循环", nameEn: "Time Loop",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "无法随时间线前进——永远在同一个悲惨节点重置。知道结局，却无法改变分毫。",
        defEn: "Unable to advance along the timeline — eternally resetting at the same tragic node. Knowing the ending, yet powerless to change a thing.",
        core: "A面：循环给了你无限次练习的机会——每一次重来都是一次修正。如果你足够耐心，你可以在循环中变成一个完美的人。/ B面：但循环的真正恐怖不在于重复——在于你渐渐发现无论怎么改变策略，结果都一样。你开始怀疑变量根本不在你手里。关键张力：如果一万次尝试都失败了——第一万零一次还值得试吗？ | 代价切口(−Φ): 未来向度的抹杀——西西弗斯式的本体论塌丧。",
        coreEn: "A-side: The loop gives infinite practice chances — every reset is a correction. With enough patience, you could become perfect within the loop. / B-side: But the loop's real horror isn't repetition — it's gradually realizing that no matter how you change strategy, the result stays the same. You begin suspecting the variable was never in your hands. Key tension: If ten thousand attempts all fail — is the ten-thousand-and-first still worth trying? | Castration Circuit: The future dimension is erased — Sisyphean ontological despair.",
        reference: "《恐怖游轮》无论怎么挣扎都必须回到起点重新持斧的母亲；《明日边缘》在战场上死亡-重生千次的士兵。",
        referenceEn: "The mother who must return to the starting point and take up the axe no matter what in Triangle; the soldier dying and resurrecting thousands of times on the battlefield in Edge of Tomorrow.",

        topology: "交出的不是未来——而是'下一次会不同'这个可能性。路的终点和起点被焊在一起，你永远在走，永远回到原处",

        directive: {
            bright: "写他清醒地看着'差异'从重复中脱落。第N次循环中发现一个以前没注意的细节——某人眨眼的频率，或某扇门的声音稍微不同。他抓住这个细节时近乎疯狂的兴奋——第一个证据，证明循环不完全相同。他在这个兴奋里辨认出代价的形状：这不是希望，是执念。只写他抓着那个细节的手。",

            dark: "写他在某一次循环中撞见代价——不再试图改变任何事，坐在那里看一切按背熟的剧本发生。他不记得交出过这个。三分钟后有人走进来说一句话，窗外的鸟在话结束时飞过。每一次精确的预知都是他发现自由又少了一格的瞬间。代价不是重复本身，它在全知的无聊里一笔一笔地扣。",

            tension: "他在这次循环中做了一件从没做过的事——故意在该左转的地方右转。结果出现微小偏差。但他不确定是否已经付完——如果打破了循环，就进入没有预知能力的世界。他已经习惯了全知的痛苦，未知的自由反而让他害怕。写他等在偏差里的姿势。不要让他确认循环是否被打破。"
        }
    },

    // ---- 现实感丧失：真与假之间的边界标记被拔除 ----

    {
        id: "stake_dream_trap",
        name: "无尽幻境", nameEn: "Dream Trap",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "以为自己醒来，却只是进入了下一层梦境——现实与幻觉的边界标记被永久拔除。",
        defEn: "Thinking you've awoken, only to enter a deeper dream — the border markers between reality and illusion permanently removed.",
        core: "A面：如果每一层都足够真实，那么'哪一层是真的'可能根本不是一个好问题——也许重要的不是你处于哪一层，而是你在这一层如何活。/ B面：但当你连'我现在是不是清醒的'都无法确定时，你也无法确定你做的任何选择是否会有真正的后果。你陷入了一种永恒的行动瘫痪。关键张力：如果你无法验证现实——你还敢做任何不可逆的决定吗？ | 代价切口(−Φ): 真实界锚点的剥除——你再也无法触碰坚硬的地面。",
        coreEn: "A-side: If every layer feels real enough, 'which layer is real' may not be the right question — perhaps what matters isn't which layer, but how you live in this one. / B-side: But when you can't even confirm 'am I awake now,' you can't be sure any choice carries real consequences. You fall into permanent action paralysis. Key tension: If you can't verify reality — do you dare make any irreversible decision? | Castration Circuit: The Real's anchor is stripped — you can never touch solid ground again.",
        reference: "《穆赫兰道》分不清哪段人生是梦境哪段是现实的女演员；《盗梦空间》困在深层Limbo中老去、失去现实坐标的筑梦者。",
        referenceEn: "The actress unable to distinguish which life is dream in Mulholland Drive; the dreamers aging in deep Limbo, losing all real-world coordinates in Inception.",

        topology: "交出的不是清醒——而是'能验证自己醒着'这个能力。梦与醒之间的分界线被抽走，两边的水混在一起",

        directive: {
            bright: "写他清醒地看着'分辨力'从身上脱落。在某一层醒来——阳光、床单、闹钟都对。掐自己，疼。但上一层也疼。他站在窗前，不是怀疑这层是假的，而是已经不在乎这层是不是真的了。分辨的动力本身耗尽了。他在这个耗尽里辨认出代价的精确形状。只写他站在窗前的犹豫。",

            dark: "写他验证时撞见代价——每次'醒来'做同一个测试：数手指、读文字、看时钟。他不记得交出过这个。某一次测试全部通过，他依然不信。坐在通过了所有测试的'现实'里，发现测试本身也可能是梦的一部分。验证工具被污染了。每一次'通过却不信'都是他发现锚点又少了一个的瞬间。",

            tension: "这一层遇到一个人，对方说了一句只有'真实世界'里才知道的话。最强的锚点。但他不确定是否已经付完——如果潜意识能精确模拟这个人说出这句话，'真的'和'梦到的'之间区别在哪？他不知道还有多少层锚点会被证伪。写他等在这句话里的姿势。不要让他确认。"
        }
    },
    {
        id: "stake_recurrence",
        name: "注定重蹈", nameEn: "Eternal Recurrence",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "不仅在重新经历——而是清楚地知道自己一定会在相同的节点犯下相同的错，因为那个错误就是'你'的一部分。",
        defEn: "Not merely reliving — but knowing clearly you'll commit the same fatal error at the same junction, because that error is part of 'you.'",
        core: "A面：尼采说'如果你能对永恒回归说是'——你就真正爱上了你的命运。接受重蹈覆辙本身就是对自由意志最极限的测试。/ B面：但大多数人无法对自己的苦难说'是'——知道自己必然犯同样的错，却无法修改自己的源代码，这种无力感比任何外部暴力都更令人绝望。关键张力：如果你被给予了预见的能力但没有被给予修改的能力——先知与囚徒有什么区别？ | 代价切口(−Φ): 命运自由度的缴械——尼采的锤炼或诅咒。",
        coreEn: "A-side: Nietzsche said 'if you can say yes to eternal return' — you've truly embraced amor fati. Accepting recurrence is the ultimate test of free will. / B-side: But most can't say 'yes' to their own suffering — knowing you'll inevitably make the same mistake yet unable to rewrite your source code, this helplessness is more devastating than any external violence. Key tension: If given the power to foresee but not to modify — what separates prophet from prisoner? | Castration Circuit: Freedom of destiny disarmed — Nietzsche's forging or curse.",
        reference: "《降临》明知女儿将夭折仍选择迎接那场受孕的语言学家；《十二猴子》无论跳转几次都必须在幼年自己面前死去的布鲁斯。",
        referenceEn: "The linguist who chooses to conceive knowing her daughter will die young in Arrival; Bruce who must die before his childhood self no matter how many times he jumps in Twelve Monkeys.",

        topology: "交出的不是自由意志——而是'下次可以不同'这个幻觉。那个错误写在底层架构里，它不是选择，它是你的形状",

        directive: {
            bright: "写他清醒地看着'修正的可能'从身上脱落。又一次犯了同样的错，提前做了所有防备，还是犯了。不是自责，不是无奈——是对自身结构的冷静辨认。像医生确诊了自己的慢性病：不会好，但至少有了名字。他在这个命名里辨认出代价的形状。只写他第一次对重复说'我知道'时的表情。",

            dark: "写他在分岔路口撞见代价——完全清楚地看到两条路，理性在尖叫往右走。但脚在往左迈。他不记得交出过这个。大脑和身体分属两个操作系统——看着自己的脚迈出那一步，像旁观者看一部已知结局的电影。他想拦住自己，但他就是自己。每一次'看着自己犯错'都是代价。它在重蹈里一笔一笔地扣。",

            tension: "面前站着一个人——和上次毁掉他的人不同，但他认出了同一种结构。他不确定是否已经付完——认出结构的能力和被结构吸引的能力是同一种能力。先知和囚徒是同一个人。他不知道还有多少次重蹈在前面等着。写他等在辨认里的姿势。不要让他做出选择。"
        }
    },
    {
        id: "stake_sensory_loss",
        name: "感官剥夺", nameEn: "Sensory Void",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "全部感知通道被切断——意识完全清醒地被关在颅骨内部，与外部世界的一切信号断开。",
        defEn: "All sensory channels severed — consciousness perfectly awake yet locked inside the skull, disconnected from every signal of the external world.",
        core: "A面：外部噪音全部消失后，内部的声音会变得无比清晰——很多冥想传统追求的就是这种感官隔绝中的极限内省。/ B面：但非自愿的感官剥夺不是冥想——是活埋。当你的意识完全清醒但没有任何外部输入时，大脑会开始自己制造输入——幻听、幻视、身体变形感。你的牢房会长出自己的怪物。关键张力：当外部世界被完全关闭——留在里面的那个东西，还是'你'吗？ | 代价切口(−Φ): 交互感知的全线切断——比活埋更安静一万倍的孤绝。",
        coreEn: "A-side: With all external noise silenced, the inner voice becomes incredibly clear — many meditative traditions pursue this exact sensory isolation for extreme introspection. / B-side: But involuntary sensory deprivation isn't meditation — it's burial alive. When consciousness is fully awake with zero input, the brain starts manufacturing its own — auditory hallucinations, visual phantoms, body distortion. Your cell grows its own monsters. Key tension: When the external world is completely shut off — is the thing left inside still 'you'? | Castration Circuit: All interaction vectors severed — solitude ten thousand times quieter than burial.",
        reference: "《潜水钟与蝴蝶》全身瘫痪仅剩左眼眨动的主编；《活埋》在棺材中只有黑暗和电话信号的人质。",
        referenceEn: "The editor paralyzed entirely except for his left eye's blink in The Diving Bell and the Butterfly; the hostage in a coffin with nothing but darkness and a phone signal in Buried.",

        topology: "交出的不是某种感觉——而是'和外面有连接'这个事实本身。所有管道被切断，你还在，世界也在，但中间是真空",

        directive: {
            bright: "写他清醒地看着'输入'从身上脱落。黑暗、寂静、无触感之后，意识开始做一件事：回放。不是随机闪回，是极其有序的内部放映——'看到'的第一个画面可能是很久前某个下午的光线角度，清晰度比当时经历它时更高。他在这种超清晰里辨认出代价的形状。只写他注视着外部世界离开。",

            dark: "写他在黑暗中撞见代价——大脑开始自己制造输入：一个声音、一种气味、一阵风。他不记得交出过这个。他知道这些不是真的，但感官不知道。'我在想一种气味'和'我闻到了一种气味'之间的走廊越来越窄，两边的墙在靠近。每一次'分不清'都是他发现边界又模糊了一层的瞬间。代价在寂静里一笔一笔地扣。",

            tension: "一个感官突然接收到信号——很远处一声雷，或皮肤上一阵微弱的气流。完全封闭后的第一个外部输入。但他不确定是否已经付完——他已经不确定'外部'这个概念是否成立。真正的风和模拟的风只有信号来源不同，但他无法检测来源。写他等在信号里的姿势。不要让信号重复。"
        }
    },
    {
        id: "stake_mirror_shatter",
        name: "镜像破碎", nameEn: "Mirror Shatter",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "再也无法在镜中认出自己——无论是因为外貌的剧变，还是因为内在的彻底异变。",
        defEn: "No longer able to recognize yourself in the mirror — whether from dramatic external change or thorough internal transformation.",
        core: "A面：不再认出镜中的人，有时恰好证明你已经成长到了旧容器装不下的程度——蝴蝶不会认出毛毛虫的脸。/ B面：但大多数镜像破碎不是蜕变——是创伤。你看到的不是'一个新的我'，而是'我不知道那是谁'。你和你自己之间出现了一道裂缝，而这道裂缝无法被任何外在的安慰填平。关键张力：镜子里那个你不认识的人——是你的未来，还是你被替换掉了？ | 代价切口(−Φ): 镜像阶段的二次创伤——拉康意义上的'自我'的碎裂。",
        coreEn: "A-side: Not recognizing the person in the mirror sometimes proves you've outgrown the old container — butterflies don't recognize caterpillar faces. / B-side: But most mirror shattering isn't metamorphosis — it's trauma. What you see isn't 'a new me' but 'I don't know who that is.' A crack appears between you and yourself, unfillable by any external comfort. Key tension: The stranger in the mirror — your future, or proof you've been replaced? | Castration Circuit: The mirror stage's secondary trauma — the Lacanian 'self' fractures.",
        reference: "《歌剧魅影》终生不敢面对镜中毁容面孔的魅影；《黑天鹅》在镜中看到另一个自己的妮娜。",
        referenceEn: "The Phantom who can never face his disfigured reflection in Phantom of the Opera; Nina seeing another self in the mirror in Black Swan.",

        topology: "交出的不是容貌——而是'认出自己'这个回路。镜子完好无损，映出了一个你不认识的人，认出系统拒绝签收",

        directive: {
            bright: "写他清醒地看着'自我辨认'从身上脱落。第一次主动照镜子——知道会看到陌生人，还是走过去了。身体先于大脑反应：后退半步，又走回来。这个来回不是勇气，是需要反复确认的诚实。他在学习认识一个新的自己，而这个学习没有教材。他在来回里辨认出代价的形状。只写他站在镜前的停顿。",

            dark: "写他出门时撞见代价——调整路线避开商店橱窗，浴室里把镜子翻过去，喝水用不透明杯子。他不记得交出过这个。整个世界都是潜在镜面，精密的回避需要极大的心力。某个不小心的瞬间——手机黑屏反射出半张脸。猝不及防地看到了。每一次撞见都是他发现认出系统又拒绝了一次的瞬间。",

            tension: "他站在镜前，镜中的人做了一个他没做的动作——嘴角微动，或眼球偏移。可能是幻觉，也可能是真的。他不确定是否已经付完——如果镜中的人有自己的意志，'我'是外面这个还是里面那个？谁在照谁？他不知道这个裂缝会不会继续扩大。写他等在镜前的姿势。不要让他触碰镜面。"
        }
    },
    {
        id: "stake_identity_collapse",
        name: "身份坍缩", nameEn: "Identity Collapse",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "发现'你'从来不是你以为的那个人——你的出身、你的血统、你的根本身份都是一场被精心维护的谎言。",
        defEn: "Discovering 'you' were never the person you thought — your origin, lineage, and fundamental identity were a carefully maintained lie.",
        core: "A面：旧身份的坍塌同时打开了一个全新的可能空间——如果你不是你以为的那个人，你就可以成为任何人。你获得了一次极其罕见的'身份自决权'。/ B面：但身份坍缩不是'重新选择'——是脚下的地板消失了。你所有的骄傲、你所有的归属感、你讲给自己听的那个关于'我是谁'的故事，全都是空中楼阁。关键张力：如果你的来历是假的——你用假的来历培养出来的感情和人格，是真的吗？ | 代价切口(−Φ): '我是谁'这个问题的答案被撤回——你成了一个没有出处的引用。",
        coreEn: "A-side: The old identity's collapse opens a wholly new possibility space — if you're not who you thought, you can become anyone. You gain an extremely rare 'right to self-determination.' / B-side: But identity collapse isn't 'choosing again' — it's the floor disappearing. All your pride, all your belonging, the story you told yourself about 'who I am' — all castles in the air. Key tension: If your origin is fake — are the feelings and personality cultivated from that fake origin real? | Castration Circuit: The answer to 'who am I' is withdrawn — you become a citation with no source.",
        reference: "《星球大战》发现自己的父亲是宇宙最大暴君的卢克；《俄狄浦斯王》发现自己弑父娶母的忒拜国王。",
        referenceEn: "Luke discovering his father is the galaxy's greatest tyrant in Star Wars; Oedipus discovering he killed his father and married his mother in Oedipus Rex.",

        topology: "交出的不是某个身份——而是'我为什么是我'这个问题的答案。来源被证伪了，你成了没有出处的引用",

        directive: {
            bright: "写他清醒地看着'来历'从身上脱落。站在镜前试图在面部特征中找到新来源的痕迹——发现一个以前从未注意的细节，鼻梁的弧度或笑时嘴角的方向。这个细节现在有了新的意义。他在重新标注的困惑里辨认出代价的精确形状。不要写他得到什么新身份，只写他注视着旧出处离开。",

            dark: "写他签名时撞见代价——笔尖在纸上停了零点几秒。这个名字写了几万遍，但现在每一笔都像在描摹别人的字迹。他不记得交出过这个。别人叫他名字，他答应了，但'答应'里有极微小的延迟。只有他自己知道。每一次延迟都是他发现认领感又薄了一层的瞬间。代价在名字里一笔一笔地扣。",

            tension: "有人说'你和你父亲真像'——以前让他温暖的话，现在含义完全反转。他不确定是否已经付完——如果温柔是从那个暴君遗传的，温柔本身是不是变异的暴力？基因不讲道德，但他在基因的产物中寻找道德。他不知道还有多少旧温暖会被反转。写他等在那句话里的姿势。不要让说话的人发现。"
        }
    },

    // ---- 自我边界溶解：主体与非主体之间的围栏被拆除 ----

    {
        id: "stake_dissolution",
        name: "意识消融", nameEn: "Ego Dissolution",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "主体意识融化并被吸收到集体意志或宇宙的宏大虚无中——再也无法分出'你'和'我'。",
        defEn: "Subject's consciousness melts and is absorbed into collective will or cosmic void — 'you' and 'I' can no longer be separated.",
        core: "A面：消融在某些神秘主义传统中是最高的合一体验——'小我'让位于'大我'，一滴水融入大海获得了海洋的全部。/ B面：但那不是'合一'——是被吞噬。一滴带着自己名字的水，被强制滴入了沸腾的大海。你没有'升华'，你是消失了。关键张力：放弃自我边界——是觉悟的顶点，还是主体性的死亡？ | 代价切口(−Φ): 主体边界的溶解——你获得了一切，但'你'不再存在来享用它。",
        coreEn: "A-side: Dissolution in certain mystical traditions is the highest unity — 'small self' yields to 'great self,' a drop entering the ocean gains all the ocean holds. / B-side: But that's not 'unity' — it's being devoured. A named drop of water forced into a boiling sea. You didn't 'transcend'; you vanished. Key tension: Surrendering the self's boundary — pinnacle of awakening, or death of subjectivity? | Castration Circuit: The subjective boundary dissolves — you gain everything, but 'you' no longer exists to enjoy it.",
        reference: "《2001太空漫游》穿越星门后意识与宇宙融合的宇航员；宗教修行中'无我'状态的极端形态——你到底是开悟了还是不存在了？",
        referenceEn: "The astronaut merging with the cosmos after traversing the star gate in 2001; the extreme form of 'anatta/no-self' in religious practice — are you enlightened, or do you simply not exist?",

        topology: "交出的不是自我——而是'我和非我之间的那条线'。边界消失了，你获得了一切但失去了容器，水离开杯子就不再是一杯水",

        directive: {
            bright: "写他清醒地看着'轮廓'从身上脱落。像墨水落入水中的头几秒——边界还在但越来越模糊。他第一次感到了墙壁的温度、地板的振动、窗外树叶的光合作用。边界消失了，感知增加了。他在这个增加里辨认出代价的形状：获得一切的前提是不再有'获得者'。只写他注视着轮廓溶解。",

            dark: "写他说话时撞见代价——试图说出'我'这个字，声带在振动，但字在嘴唇上碎了。他不记得交出过这个。用手摸胸口——皮肤是温的，心脏在跳，信号都在，但收件人不在了。每一次'找不到我'都是他发现边界又退了一层的瞬间。他的手从胸口慢慢放下来。代价在每个'我'字里一笔一笔地扣。",

            tension: "他和另一个人面对面，能直接感觉到对方的情绪——不是猜到的，像自己的情绪一样。但他不确定是否已经付完——如果你的痛和我的痛完全一样，'你的'和'我的'还有意义吗？如果没有意义——'爱'这个需要两个主体的动词还成立吗？写他等在分不清里的姿势。不要让他触碰对方。"
        }
    },
    {
        id: "stake_dehuman",
        name: "人性退化", nameEn: "Dehumanization",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "失去了作为'人'所特有的非理性裂缝——爱、悲悯、犹豫、软弱——变成纯粹的机能或纯粹的本能。",
        defEn: "Losing the irrational cracks unique to being 'human' — love, mercy, hesitation, weakness — becoming pure function or pure instinct.",
        core: "A面：去人性化有时是生存的唯一方式——在极端环境中，感情是负担，效率是生存。变'冷'是一种自我保护。/ B面：但当你发现自己可以毫无感觉地做出曾经让你流泪的事，你失去的不是'脆弱'——是'活着'的最核心证据。机器不会犯错，但机器也不会心碎。关键张力：如果变得更强意味着变得更少'人'——你还要继续变强吗？ | 代价切口(−Φ): 人性裂缝的焊死——成为了完美但空洞的运转体。",
        coreEn: "A-side: Dehumanization is sometimes the only way to survive — in extremes, emotion is burden, efficiency is survival. Going 'cold' is self-protection. / B-side: But when you find yourself doing without feeling what once made you weep, what you've lost isn't 'fragility' — it's the core evidence of being alive. Machines don't err, but machines don't heartbreak. Key tension: If getting stronger means becoming less 'human' — do you keep getting stronger? | Castration Circuit: The human flaw is welded shut — becoming a perfect but hollow operating body.",
        reference: "《发条橙》被暴力矫正成无法犯罪但也无法爱的亚历克斯；《现代启示录》在丛林深处彻底脱离文明道德的库尔兹上校。",
        referenceEn: "Alex, violently corrected into inability to sin but also to love in A Clockwork Orange; Colonel Kurtz, fully detached from civilized morality deep in the jungle in Apocalypse Now.",

        topology: "交出的不是弱点——而是'会漏水'这个属性本身。裂缝被焊死了，你不再漏水，但也不再能被任何东西流过",

        directive: {
            bright: "写他清醒地看着'犹豫'从身上脱落。做了一件以前需要挣扎很久的事，三秒做完，干净利落。所有挡在面前的同情、不忍都消失了。他感觉到一种没有摩擦力的顺滑——不是满足，不是后悔，是零阻力。他在这种顺滑里辨认出代价的形状：这不是解脱，是症状。只写他注视着摩擦力离开。",

            dark: "写他在别人哭泣时撞见代价——大脑在处理信息，分析原因，评估影响。一切都在运转。但那个让胸口发紧的回路没有启动。他不记得交出过这个。不是'我怎么没有感觉'，是更精确的：'我记得以前这个位置会疼的'。他摸了摸胸口，什么都没有。每一次'应疼未疼'都是他发现人性又少了一块的瞬间。",

            tension: "面前有一个孩子在笑。所有正常人都会被这个画面触动。他知道自己应该被触动，甚至能精确描述别人此刻会有什么感受。但他不确定是否已经付完——理解共情和拥有共情是两件事。理解越精确，恰好越证明他已经在外面了。他不知道还有多少'该有的感觉'会被发现是空的。写他等的姿势。不要让他模仿微笑。"
        }
    },
    {
        id: "stake_soul_loss",
        name: "灵魂抽离", nameEn: "Soul Loss",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "还有呼吸，还有心跳，但失去了'想要什么'的能力——欲望引擎永久熄火的空壳。",
        defEn: "Still breathing, still heartbeating, but lost the capacity to 'want' anything — an empty shell whose desire engine has permanently stalled.",
        core: "A面：不再想要任何东西意味着不再被任何东西操控——你获得了一种佛陀式的平静，只是这种平静不是你选择的，而是被施加的。/ B面：但没有欲望的生命不是平静——是行尸走肉。你吃饭不是因为饿，呼吸不是因为想活，只是因为身体还没有接到停止的信号。你是一具还在运转但已经没有乘客的车。关键张力：如果你失去了'想要'的能力——还有什么理由证明你和一具尸体的区别？ | 代价切口(−Φ): 欲望主体的阉割——摄魂怪之吻。",
        coreEn: "A-side: No longer wanting anything means no longer being manipulated by anything — you've gained a Buddha-like peace, only this peace wasn't chosen, it was imposed. / B-side: But desire-less life isn't peace — it's the walking dead. You eat not from hunger, breathe not from wanting to live, only because the body hasn't received a stop signal. You're a car still running but with no passenger. Key tension: If you've lost the ability to 'want' — what proves you're different from a corpse? | Castration Circuit: The Subject of Desire is castrated — the Dementor's Kiss.",
        reference: "《海边的曼彻斯特》失去孩子后再也无法对任何事产生感情的父亲；《狗镇》被碾碎善意后变成中空执行体的格蕾丝。",
        referenceEn: "The father who can no longer feel anything after losing his children in Manchester by the Sea; Grace becoming hollow after all goodness is crushed out of her in Dogville.",

        topology: "交出的不是活力——而是'想要'这个动词本身。引擎还在空转，方向盘还在震动，但驾驶座上的人走了",

        directive: {
            bright: "写他清醒地看着'想要'从身上脱落。清晨睁开眼，身体执行了起床的全部程序：翻身、坐起、穿鞋。每个动作都对，但动作之间没有连接的意图。他不是在'起床'，身体在重播昨天的录像。他刷牙时看着镜中的泡沫，没有任何念头。他在这个空洞的精确里辨认出代价的形状。只写他注视。",

            dark: "写有人试图激怒他时撞见代价——说了一句以前一定会让他跳起来的话。他听到了，理解了，甚至能预判对方期待的反应。但内部没有任何波动。他不记得交出过这个。愤怒的那个零件不在了。他最后说了一句话，语调完全正确，但每个字都是从词典里查的，不是从身体里长的。代价在正确里一笔一笔地扣。",

            tension: "面前放着一样他曾经最在乎的东西。他拿起来了，手在轻轻摩挲表面——这是肌肉记忆，不是情感驱动。他不确定是否已经付完——手还记得爱的动作，身体还保存着爱的姿势库，但调用姿势的程序已被卸载。形式完好，内核为空。他不知道还有多少旧姿势是空壳。写他握着那东西等的姿势。不要让他放下。"
        }
    },
    {
        id: "stake_puppet",
        name: "意志篡夺", nameEn: "Will Hijacking",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "意识依然清醒，但身体和行为的支配权被另一个更强大的意志完全接管。",
        defEn: "Consciousness remains fully awake, but control over body and behavior is completely commandeered by a stronger will.",
        core: "A面：被接管意味着你不再需要为自己的行为负责——一种极其扭曲的解脱。有些人甚至在被操控中找到了一种放弃自由意志的安慰。/ B面：但这不是'解脱'——是成为自己身体里的人质。你清醒地看着自己的手在做你不愿做的事，你的嘴在说你不想说的话，而你发不出任何声音来尖叫。关键张力：如果你的身体在做的事是你的意识不同意的——那'做事的人'到底是谁？ | 代价切口(−Φ): 意志效能的无效化——最残酷的木偶剧场。",
        coreEn: "A-side: Being commandeered means you no longer bear responsibility for your actions — a deeply twisted relief. Some even find comfort in surrendering free will. / B-side: But this isn't 'relief' — it's being hostage inside your own body. You watch your hands do what you refuse, your mouth speak what you'd never say, unable to scream. Key tension: If your body does what your consciousness opposes — who exactly is 'doing'? | Castration Circuit: Willpower efficacy invalidated — the cruelest puppet theater.",
        reference: "《逃出绝命镇》意识被压入'沉沦之地'、眼睁睁看着身体为他人服务的克里斯；《甄嬛传》被幕后权力线牵动从而违心行事的后宫女子们。",
        referenceEn: "Chris pushed into the Sunken Place, helplessly watching his body serve others in Get Out; the harem women pulled by invisible power strings into actions against their will in Empresses in the Palace.",

        topology: "交出的不是行动力——而是'我的手在听我的'这个前提。驾驶权被没收，你被挤到副驾驶，安全带锁死，只能看",

        directive: {
            bright: "写他清醒地看着'支配权'从身上脱落。手在做一件事，眼睛看着手做——不是从外部观察，是从内部被挤到了角落。能感觉到手指的触感，但他不是发出指令的人。他试图让手指停下来——像在梦里尖叫但发不出声音。他在这个无声的用力里辨认出代价的形状。只写他注视着控制权离开。",

            dark: "写他在笑的时候撞见代价——被控制了很长时间后，身体在和别人吃饭、聊天、微笑，所有动作流畅自然。但每一个微笑都不是他的。某个瞬间——身体笑了，他在里面哭了。两件事同时发生在同一张脸上，只有一件被外面的人看到。他不记得交出过这个。代价在每一个不属于自己的微笑里一笔一笔地扣。",

            tension: "他的身体正在做一件他绝对不会做的事——伤害一个他爱的人。他在里面拼命抵抗，身体纹丝不动地执行另一个意志。他不确定是否已经付完——从外面看，那就是他的手、他的声音、他的脸。受害者看到的施害者就是他。我的无辜没有证人。他不知道还有多少个'不是我做的'。写他等的姿势。不要让他阻止任何动作。"
        }
    },
    {
        id: "stake_objectification",
        name: "沦为标本", nameEn: "Total Objectification",
        group: "B. 镜像的碎裂", groupEn: "Imaginary Shattering",
        def: "活人被降级为供大他者陈列、赏玩或使用的静态客体——存在变成了纯粹的景观或工具。",
        defEn: "A living person regressed into a static object for the Big Other's display, amusement, or use — existence becomes pure spectacle or tool.",
        core: "A面：被客体化有时反而暴露了'主体'的虚妄——也许我们太执着于'我是一个主体'这件事了。一块石头不会焦虑，不会失眠，不会害怕被遗忘。/ B面：但石头也不会爱。被降为客体的人失去的不是舒适——是'做选择'的资格。你不再是故事的参与者，你是道具间里的一件器材。关键张力：一个不被允许做选择的人——还能被称为'人'吗？ | 代价切口(−Φ): 主观能动性的标本化——活体被制作成永恒的静物。",
        coreEn: "A-side: Being objectified sometimes exposes the illusion of 'subject-hood' — perhaps we're too attached to 'I am a subject.' A stone doesn't have anxiety, insomnia, or fear of being forgotten. / B-side: But a stone can't love either. What the objectified person loses isn't comfort — it's the qualification to 'make choices.' You are no longer a participant in the story; you are a prop in the storeroom. Key tension: A person not permitted to make choices — can they still be called 'a person'? | Castration Circuit: Agentic subjectivity taxidermied — a living specimen preserved as eternal still life.",
        reference: "《使女的故事》被降格为'行走的子宫'的女性；《红楼梦》被当作家族装饰品的贾府千金们。",
        referenceEn: "Women reduced to 'walking wombs' in The Handmaid's Tale; the Jia family's daughters treated as decorative ornaments in Dream of the Red Chamber.",

        topology: "交出的不是尊严——而是'发出动词'的资格。语法结构变了，你从句子的主语变成了宾语，动词不再从你这里发出",

        directive: {
            bright: "写他清醒地看着'主语资格'从身上脱落。有人在他面前讨论他的规格参数：'状态良好'、'功能正常'、'适合使用'。他在听到这些词时做了一件极微小的事——攥紧了一下拳头。没有人看到。这个动作是他还是主体的唯一证据。他在这个证据的微小里辨认出代价的形状。只写拳头的重量。",

            dark: "写他在被展示时撞见代价——被安排在一个位置上，灯光打在身上，有人在看。任务是保持不动。他不记得交出过这个。身体在执行命令，意识在做一件极隐秘的事：在内部构建一个不可见的房间。只有他知道的空间，放了一个名字、一种颜色、一个记忆碎片。每一次'保持不动'都是他发现外面的自己又少了一点的瞬间。",

            tension: "有人递给他一面镜子——不是让他照自己，是让他检查'外观'是否符合标准。他看到了自己的脸。但他不确定是否已经付完——这张脸是'我'还是'他们的产品'？透过这张脸看世界的眼睛，是他的还是他们留的观察窗口？他不知道还有多少'属于自己的'会被发现是他们的。写他等的姿势。不要让他放下镜子。"
        }
    },
];
