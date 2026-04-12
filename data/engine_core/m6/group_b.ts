import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 想象界碎裂 (Imaginary Shattering) — 20 Items
    // 丧失维度：你的"自我画像"被震碎——镜子还在，但里面的人你不认识了。
    // 核心感受：你不知道自己是谁了，或者你发现"你"从来不存在。
    // 光谱：认知瓦解(1-5) → 记忆/时间丧失(6-10) → 现实感丧失(11-15) → 自我边界溶解(16-20)
    // ============================================================

    // ---- 认知瓦解：理性大厦的地基被抽走 ----

    {
        id: "stake_madness",
        name: "理智崩溃", nameEn: "Madness",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "认知结构被实在界的恐怖喷发冲垮，主体陷入永恒的谵妄，分不清现实与幻觉。",
        defEn: "Cognitive structure overwhelmed by eruptions of the Real, plunging the subject into eternal delirium where reality and hallucination merge.",
        core: "A面：疯子看到了'正常人'被训练忽略的东西——疯癫有时是理性无法容纳的过量真相。/ B面：但疯癫不是'另一种清醒'——是彻底丧失了区分冷热、安危、真假的能力。你被锁进了自己的大脑，钥匙被扔掉了。关键张力：如果'正常'意味着看不到真相——疯癫算不算一种代价过高的启蒙？ | 代价回路 (Castration): 符号认知的终结——语言无法再为世界编织秩序。",
        coreEn: "A-side: The mad see what 'normal people' are trained to ignore — madness is sometimes an excess of truth reason can't contain. / B-side: But madness isn't 'another clarity' — it's losing the ability to distinguish hot from cold, safe from dangerous, true from false. Locked in your own skull, key discarded. Key tension: If 'sanity' means blindness to truth — is madness an overpriced enlightenment? | Castration Circuit: End of symbolic cognition — language can no longer weave order for the world.",
        reference: "《禁闭岛》深陷丧妻创伤而永远困在幻想岛屿上的联邦探员；《闪灵》被旅馆亡魂吞噬理智的杰克。",
        referenceEn: "The federal marshal forever trapped in delusion on his grief-island in Shutter Island; Jack consumed by the hotel's spirits in The Shining."
    },
    {
        id: "stake_cognitive_overload",
        name: "认知过载", nameEn: "Cognitive Overload",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "看到了超出人类神经承受极限的真相——大脑的保险丝被真理本身烧断。",
        defEn: "Seeing truth beyond the human nervous system's capacity — the brain's fuse blown by truth itself.",
        core: "A面：只有极少数人有资格被真相烧毁——这意味着你的认知曾触碰到绝大多数人终生无法企及的高度。/ B面：但这种'资格'不是奖赏——是一张永久残疾证。看到了不该看的东西之后，你不会'忘记'，你只会在每个安静的夜晚被它的余像反复灼烧。关键张力：如果真相必然摧毁看到它的人——真相还值得追求吗？ | 代价回路 (Castration): 认知天花板被暴力穿透——你的大脑不是为这种分辨率设计的。",
        coreEn: "A-side: Only a rare few are 'qualified' to be burned by truth — your cognition reached heights most never approach. / B-side: But this 'qualification' isn't a reward — it's a permanent disability card. After seeing what shouldn't be seen, you don't 'forget'; its afterimage sears you every quiet night. Key tension: If truth inevitably destroys whoever sees it — is truth still worth pursuing? | Castration Circuit: Cognitive ceiling violently breached — your brain wasn't designed for this resolution.",
        reference: "《降临》学会外星语言后被迫预见女儿死亡的语言学家；《星际穿越》穿越五维空间后认知结构被彻底改写的库珀。",
        referenceEn: "The linguist forced to foresee her daughter's death after learning the alien language in Arrival; Cooper whose cognitive structure is rewritten after traversing five-dimensional space in Interstellar."
    },
    {
        id: "stake_faith_collapse",
        name: "信仰坍塌", nameEn: "Faith Collapse",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "支撑你全部世界观的核心信念被证伪——不是你犯了错，而是你整个坐标系是假的。",
        defEn: "The core belief supporting your entire worldview is falsified — not that you erred, but your entire coordinate system was false.",
        core: "A面：信仰坍塌是重建的前提——只有当旧地基被清除，真正属于你自己的东西才有空间生长。/ B面：但失去信仰不是'升级'——是失去了起床的理由。当'意义'本身被证伪，连问'为什么活着'都变成了一个没有收件人的信。关键张力：信仰坍塌后的废墟上——你是建造新的信仰，还是学会在没有信仰的情况下活着？ | 代价回路 (Castration): 存在的操作系统被格式化——不是文件丢了，是硬盘本身坏了。",
        coreEn: "A-side: Faith collapse is reconstruction's prerequisite — only when old foundations are cleared can something truly yours grow. / B-side: But losing faith isn't 'upgrading' — it's losing the reason to get up. When 'meaning' itself is falsified, even asking 'why live' becomes a letter with no recipient. Key tension: On faith's ruins — do you build new faith, or learn to live without any? | Castration Circuit: The existential operating system is formatted — not files lost, but the hard drive itself is broken.",
        reference: "《沉默》在迫害中等不到上帝回应的传教士；《真探》凝视过太多深渊后彻底不信人类有救赎可能的拉斯特。",
        referenceEn: "The missionary who receives no answer from God under persecution in Silence; Rust who, having stared into too many abysses, ceases believing redemption is possible in True Detective."
    },
    {
        id: "stake_glitch",
        name: "现实崩塌", nameEn: "Reality Collapse",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "撕开了世界幕布的一角——发现自己和整个世界不过是一场投影、一段代码或一个实验。",
        defEn: "Tearing a corner of the world's curtain — discovering yourself and the entire world are merely a projection, a code, or an experiment.",
        core: "A面：发现现实是被建构的，反而意味着现实可以被重新建构——如果旧世界是假的，你就有权利创造新世界。/ B面：但'一切都是假的'这个认知会感染你所有的经验——你的初恋是假的吗？你母亲的笑容是程序生成的吗？你的眼泪有没有真实的重量？关键张力：如果你的全部人生都是一场戏——你继续演下去，还是砸碎舞台？ | 代价回路 (Castration): 存在土壤的伪造被揭穿——地板下面是虚空。",
        coreEn: "A-side: Discovering reality is constructed means it can be reconstructed — if the old world is fake, you have the right to create a new one. / B-side: But 'everything is fake' infects all experience — was your first love fake? Was your mother's smile procedurally generated? Do your tears have real weight? Key tension: If your entire life is a play — do you keep performing, or smash the stage? | Castration Circuit: The falsification of existence's soil is exposed — beneath the floor is void.",
        reference: "《楚门的世界》发现整个人生是一场真人秀的楚门；《黑客帝国》吞下红药丸后看到人类培养皿的尼奥。",
        referenceEn: "Truman discovering his entire life is a reality show in The Truman Show; Neo seeing human pods after swallowing the red pill in The Matrix."
    },
    {
        id: "stake_nihilism",
        name: "绝对虚无", nameEn: "Absolute Nihilism",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "看透了宇宙毫无意义的底牌——所有驱动欲望前行的'小客体'瞬间蒸发。",
        defEn: "Seeing through the universe's meaningless endgame — all 'objet petit a' driving desire evaporate instantly.",
        core: "A面：虚无是绝对自由的另一个名字——如果没有什么东西'应该'被追求，你就可以追求任何东西，包括什么都不追求。/ B面：但虚无不是平静——是一种比绝望更深的东西。绝望是'得不到'，虚无是'得到了也没有意义'。欲望引擎的熄火。关键张力：当意义本身失去意义——你是彻底躺平，还是在无意义中自行创造意义？ | 代价回路 (Castration): 欲望核心（Desire Engine）的永久熄火。",
        coreEn: "A-side: Nihilism is another name for absolute freedom — if nothing 'should' be pursued, you can pursue anything, including nothing. / B-side: But nihilism isn't peace — it's deeper than despair. Despair is 'can't get'; nihilism is 'getting it wouldn't matter either.' The desire engine stalls. Key tension: When meaning itself loses meaning — do you lie flat forever, or forge your own meaning in the void? | Castration Circuit: The Desire Engine permanently stalls.",
        reference: "《老无所依》直面纯粹的硬币暴力后交出警徽的老警长；《真探》凝望虚无黑洞的拉斯特·科尔。",
        referenceEn: "The old sheriff surrendering his badge after facing pure coin-toss violence in No Country for Old Men; Rust Cohle gazing at the nihilistic void in True Detective."
    },

    // ---- 记忆/时间丧失：过去或未来的维度被切断 ----

    {
        id: "stake_memory_wipe",
        name: "记忆抹除", nameEn: "Memory Wipe",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "所有经历、情感羁绊和痛苦挣扎被一键清空——变成一张白纸。",
        defEn: "All experiences, emotional bonds, and painful struggles wiped blank — returned to a colorless slate.",
        core: "A面：被清空的人获得了最极端的'重新开始'——没有仇恨、没有创伤、没有前任的阴影，一切从零开始。/ B面：但'我'是记忆的拓扑缠绕——取消了过去，那个曾经存在的'我'就被杀死了。新的白纸上写的故事，已经不是你的故事。关键张力：如果忘掉一切意味着不再痛苦——你愿意用'你'来交换'平静'吗？ | 代价回路 (Castration): 时间拓扑的斩断——过去的你被执行了死刑。",
        coreEn: "A-side: The wiped gain the most extreme 'fresh start' — no hatred, no trauma, no ex's shadow, all from zero. / B-side: But 'I' is memory's topological entanglement — cancel the past and the 'I' who once existed is killed. The story written on the blank page is no longer yours. Key tension: If forgetting everything means no more pain — would you trade 'you' for 'peace'? | Castration Circuit: The timeline topology is severed — past-you is executed.",
        reference: "《美丽心灵的永恒阳光》自愿清除恋爱记忆的痛苦恋人；《黑衣人》被记忆银光笔一闪抹去全部人生的路人。",
        referenceEn: "The anguished lovers voluntarily erasing love memories in Eternal Sunshine; passersby losing entire lives to the memory pen-flash in Men in Black."
    },
    {
        id: "stake_dementia",
        name: "认知消散", nameEn: "Dementia",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "不是一次性失忆，而是眼睁睁看着自己的心智一块块缓慢崩落的漫长葬礼。",
        defEn: "Not one-time amnesia, but watching your own mind slowly collapse piece by piece — a prolonged funeral.",
        core: "A面：在消散的间隙，偶尔涌现的清晰碎片比健全时更珍贵——因为你知道这是最后几次了。极限中的觉知有一种绝望的纯粹。/ B面：但大多数时间你不是在'清醒地告别'——你是在困惑中反复经历第一次的恐惧。每天醒来都是一个陌生的房间，每个面孔都是第一次见。关键张力：当你连'自己正在消失'都无法理解时——'你'还存在吗？ | 代价回路 (Castration): 逻辑积木的粉化——《困在时间里的父亲》。",
        coreEn: "A-side: In the gaps between fading, occasional clarity fragments are more precious than in health — because you know these are the last few times. Awareness at the limit holds a desperate purity. / B-side: But mostly you're not 'consciously saying goodbye' — you're repeatedly experiencing first-time fear in confusion. Every morning a strange room, every face for the first time. Key tension: When you can't even comprehend 'you're disappearing' — do 'you' still exist? | Castration Circuit: Logical scaffolding pulverized — The Father.",
        reference: "《困在时间里的父亲》认不出女儿、分不清房间方位的老人；《恋恋笔记本》读着日记试图唤醒妻子记忆的丈夫。",
        referenceEn: "The old man who can't recognize his daughter or orient himself in The Father; the husband reading diaries to awaken his wife's memory in The Notebook."
    },
    {
        id: "stake_past_falsified",
        name: "过去篡改", nameEn: "Past Falsified",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "你确信无疑的记忆其实是被他人或系统植入的——你的'过去'是一件伪造品。",
        defEn: "Memories you were certain of were actually implanted by others or systems — your 'past' is a forgery.",
        core: "A面：发现记忆是伪造的，反而证明了当下此刻的你是唯一真实的——因为过去已经不可信，你唯一能锚定的只有'现在'。/ B面：但如果记忆可以被植入——你怎么确定'此刻的你'不也是植入的？怀疑一旦开始就无法停止，你会陷入一种永无终点的认识论螺旋。关键张力：如果你的童年是编造的——那个在编造的童年中哭泣过的'你'，他的眼泪是真的吗？ | 代价回路 (Castration): 存在的根基文件被篡改——你是一份不知道自己是赝品的赝品。",
        coreEn: "A-side: Discovering memories are forged proves the present you is the only real thing — since the past is unreliable, the only anchor is 'now.' / B-side: But if memories can be implanted — how do you know 'the current you' isn't implanted too? Once doubt starts it can't stop; you spiral into an endless epistemological vortex. Key tension: If your childhood was fabricated — were the tears you shed in that fabricated childhood real? | Castration Circuit: Existence's root files are tampered — you're a forgery that doesn't know it's forged.",
        reference: "《银翼杀手》发现自己的童年照片和记忆都是植入的瑞秋；《全面回忆》分不清哪段记忆是真实经历的特工。",
        referenceEn: "Rachael discovering her childhood photos and memories are implants in Blade Runner; the agent who can't tell which memories are real in Total Recall."
    },
    {
        id: "stake_eternal_prison",
        name: "永恒囚禁", nameEn: "Eternal Imprisonment",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "被凝固在一个永不流动的瞬间——时间对你不再前进，但意识从未关闭。",
        defEn: "Frozen in a non-flowing instant — time no longer advances for you, yet consciousness never shuts down.",
        core: "A面：时间停止意味着死亡不会来——在某种极端意义上，你获得了永恒。所有害怕死亡的人梦寐以求的东西，你拥有了。/ B面：但没有终结的存在比死亡更可怖——因为连'等待结束'这个希望都被取消了。你不是在'忍耐'，你是在一个没有出口的走廊里永远行走。关键张力：如果你可以永远活着但永远不能改变任何东西——这是生还是死？ | 代价回路 (Castration): 时间流逝与死亡权利的双重剥夺。",
        coreEn: "A-side: Time stopping means death won't come — in an extreme sense, you've gained eternity. What everyone who fears death dreams of, you have. / B-side: But existence without end is more terrifying than death — even the hope of 'waiting for the end' is cancelled. You're not 'enduring'; you're walking forever in a corridor with no exit. Key tension: If you could live forever but never change anything — is this life or death? | Castration Circuit: Both the passage of time and the right to die are stripped.",
        reference: "《黑镜·白色圣诞》被拨至百万年独处的数字意识体；《三体》滑入死线永留一瞬不可生灭的宇宙墓志铭。",
        referenceEn: "A digital consciousness dialed to millions of years of solitary confinement in Black Mirror: White Christmas; falling into the death line, eternally frozen in one instant in The Three-Body Problem."
    },
    {
        id: "stake_time_loop",
        name: "无尽循环", nameEn: "Time Loop",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "无法随时间线前进——永远在同一个悲惨节点重置。知道结局，却无法改变分毫。",
        defEn: "Unable to advance along the timeline — eternally resetting at the same tragic node. Knowing the ending, yet powerless to change a thing.",
        core: "A面：循环给了你无限次练习的机会——每一次重来都是一次修正。如果你足够耐心，你可以在循环中变成一个完美的人。/ B面：但循环的真正恐怖不在于重复——在于你渐渐发现无论怎么改变策略，结果都一样。你开始怀疑变量根本不在你手里。关键张力：如果一万次尝试都失败了——第一万零一次还值得试吗？ | 代价回路 (Castration): 未来向度的抹杀——西西弗斯式的本体论塌丧。",
        coreEn: "A-side: The loop gives infinite practice chances — every reset is a correction. With enough patience, you could become perfect within the loop. / B-side: But the loop's real horror isn't repetition — it's gradually realizing that no matter how you change strategy, the result stays the same. You begin suspecting the variable was never in your hands. Key tension: If ten thousand attempts all fail — is the ten-thousand-and-first still worth trying? | Castration Circuit: The future dimension is erased — Sisyphean ontological despair.",
        reference: "《恐怖游轮》无论怎么挣扎都必须回到起点重新持斧的母亲；《明日边缘》在战场上死亡-重生千次的士兵。",
        referenceEn: "The mother who must return to the starting point and take up the axe no matter what in Triangle; the soldier dying and resurrecting thousands of times on the battlefield in Edge of Tomorrow."
    },

    // ---- 现实感丧失：真与假之间的边界标记被拔除 ----

    {
        id: "stake_dream_trap",
        name: "无尽幻境", nameEn: "Dream Trap",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "以为自己醒来，却只是进入了下一层梦境——现实与幻觉的边界标记被永久拔除。",
        defEn: "Thinking you've awoken, only to enter a deeper dream — the border markers between reality and illusion permanently removed.",
        core: "A面：如果每一层都足够真实，那么'哪一层是真的'可能根本不是一个好问题——也许重要的不是你处于哪一层，而是你在这一层如何活。/ B面：但当你连'我现在是不是清醒的'都无法确定时，你也无法确定你做的任何选择是否会有真正的后果。你陷入了一种永恒的行动瘫痪。关键张力：如果你无法验证现实——你还敢做任何不可逆的决定吗？ | 代价回路 (Castration): 真实界锚点的剥除——你再也无法触碰坚硬的地面。",
        coreEn: "A-side: If every layer feels real enough, 'which layer is real' may not be the right question — perhaps what matters isn't which layer, but how you live in this one. / B-side: But when you can't even confirm 'am I awake now,' you can't be sure any choice carries real consequences. You fall into permanent action paralysis. Key tension: If you can't verify reality — do you dare make any irreversible decision? | Castration Circuit: The Real's anchor is stripped — you can never touch solid ground again.",
        reference: "《穆赫兰道》分不清哪段人生是梦境哪段是现实的女演员；《盗梦空间》困在深层Limbo中老去、失去现实坐标的筑梦者。",
        referenceEn: "The actress unable to distinguish which life is dream in Mulholland Drive; the dreamers aging in deep Limbo, losing all real-world coordinates in Inception."
    },
    {
        id: "stake_recurrence",
        name: "注定重蹈", nameEn: "Eternal Recurrence",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "不仅在重新经历——而是清楚地知道自己一定会在相同的节点犯下相同的错，因为那个错误就是'你'的一部分。",
        defEn: "Not merely reliving — but knowing clearly you'll commit the same fatal error at the same junction, because that error is part of 'you.'",
        core: "A面：尼采说'如果你能对永恒回归说是'——你就真正爱上了你的命运。接受重蹈覆辙本身就是对自由意志最极限的测试。/ B面：但大多数人无法对自己的苦难说'是'——知道自己必然犯同样的错，却无法修改自己的源代码，这种无力感比任何外部暴力都更令人绝望。关键张力：如果你被给予了预见的能力但没有被给予修改的能力——先知与囚徒有什么区别？ | 代价回路 (Castration): 命运自由度的缴械——尼采的锤炼或诅咒。",
        coreEn: "A-side: Nietzsche said 'if you can say yes to eternal return' — you've truly embraced amor fati. Accepting recurrence is the ultimate test of free will. / B-side: But most can't say 'yes' to their own suffering — knowing you'll inevitably make the same mistake yet unable to rewrite your source code, this helplessness is more devastating than any external violence. Key tension: If given the power to foresee but not to modify — what separates prophet from prisoner? | Castration Circuit: Freedom of destiny disarmed — Nietzsche's forging or curse.",
        reference: "《降临》明知女儿将夭折仍选择迎接那场受孕的语言学家；《十二猴子》无论跳转几次都必须在幼年自己面前死去的布鲁斯。",
        referenceEn: "The linguist who chooses to conceive knowing her daughter will die young in Arrival; Bruce who must die before his childhood self no matter how many times he jumps in Twelve Monkeys."
    },
    {
        id: "stake_sensory_loss",
        name: "感官剥夺", nameEn: "Sensory Void",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "全部感知通道被切断——意识完全清醒地被关在颅骨内部，与外部世界的一切信号断开。",
        defEn: "All sensory channels severed — consciousness perfectly awake yet locked inside the skull, disconnected from every signal of the external world.",
        core: "A面：外部噪音全部消失后，内部的声音会变得无比清晰——很多冥想传统追求的就是这种感官隔绝中的极限内省。/ B面：但非自愿的感官剥夺不是冥想——是活埋。当你的意识完全清醒但没有任何外部输入时，大脑会开始自己制造输入——幻听、幻视、身体变形感。你的牢房会长出自己的怪物。关键张力：当外部世界被完全关闭——留在里面的那个东西，还是'你'吗？ | 代价回路 (Castration): 交互感知的全线切断——比活埋更安静一万倍的孤绝。",
        coreEn: "A-side: With all external noise silenced, the inner voice becomes incredibly clear — many meditative traditions pursue this exact sensory isolation for extreme introspection. / B-side: But involuntary sensory deprivation isn't meditation — it's burial alive. When consciousness is fully awake with zero input, the brain starts manufacturing its own — auditory hallucinations, visual phantoms, body distortion. Your cell grows its own monsters. Key tension: When the external world is completely shut off — is the thing left inside still 'you'? | Castration Circuit: All interaction vectors severed — solitude ten thousand times quieter than burial.",
        reference: "《潜水钟与蝴蝶》全身瘫痪仅剩左眼眨动的主编；《活埋》在棺材中只有黑暗和电话信号的人质。",
        referenceEn: "The editor paralyzed entirely except for his left eye's blink in The Diving Bell and the Butterfly; the hostage in a coffin with nothing but darkness and a phone signal in Buried."
    },
    {
        id: "stake_mirror_shatter",
        name: "镜像破碎", nameEn: "Mirror Shatter",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "再也无法在镜中认出自己——无论是因为外貌的剧变，还是因为内在的彻底异变。",
        defEn: "No longer able to recognize yourself in the mirror — whether from dramatic external change or thorough internal transformation.",
        core: "A面：不再认出镜中的人，有时恰好证明你已经成长到了旧容器装不下的程度——蝴蝶不会认出毛毛虫的脸。/ B面：但大多数镜像破碎不是蜕变——是创伤。你看到的不是'一个新的我'，而是'我不知道那是谁'。你和你自己之间出现了一道裂缝，而这道裂缝无法被任何外在的安慰填平。关键张力：镜子里那个你不认识的人——是你的未来，还是你被替换掉了？ | 代价回路 (Castration): 镜像阶段的二次创伤——拉康意义上的'自我'的碎裂。",
        coreEn: "A-side: Not recognizing the person in the mirror sometimes proves you've outgrown the old container — butterflies don't recognize caterpillar faces. / B-side: But most mirror shattering isn't metamorphosis — it's trauma. What you see isn't 'a new me' but 'I don't know who that is.' A crack appears between you and yourself, unfillable by any external comfort. Key tension: The stranger in the mirror — your future, or proof you've been replaced? | Castration Circuit: The mirror stage's secondary trauma — the Lacanian 'self' fractures.",
        reference: "《歌剧魅影》终生不敢面对镜中毁容面孔的魅影；《黑天鹅》在镜中看到另一个自己的妮娜。",
        referenceEn: "The Phantom who can never face his disfigured reflection in Phantom of the Opera; Nina seeing another self in the mirror in Black Swan."
    },
    {
        id: "stake_identity_collapse",
        name: "身份坍缩", nameEn: "Identity Collapse",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "发现'你'从来不是你以为的那个人——你的出身、你的血统、你的根本身份都是一场被精心维护的谎言。",
        defEn: "Discovering 'you' were never the person you thought — your origin, lineage, and fundamental identity were a carefully maintained lie.",
        core: "A面：旧身份的坍塌同时打开了一个全新的可能空间——如果你不是你以为的那个人，你就可以成为任何人。你获得了一次极其罕见的'身份自决权'。/ B面：但身份坍缩不是'重新选择'——是脚下的地板消失了。你所有的骄傲、你所有的归属感、你讲给自己听的那个关于'我是谁'的故事，全都是空中楼阁。关键张力：如果你的来历是假的——你用假的来历培养出来的感情和人格，是真的吗？ | 代价回路 (Castration): '我是谁'这个问题的答案被撤回——你成了一个没有出处的引用。",
        coreEn: "A-side: The old identity's collapse opens a wholly new possibility space — if you're not who you thought, you can become anyone. You gain an extremely rare 'right to self-determination.' / B-side: But identity collapse isn't 'choosing again' — it's the floor disappearing. All your pride, all your belonging, the story you told yourself about 'who I am' — all castles in the air. Key tension: If your origin is fake — are the feelings and personality cultivated from that fake origin real? | Castration Circuit: The answer to 'who am I' is withdrawn — you become a citation with no source.",
        reference: "《星球大战》发现自己的父亲是宇宙最大暴君的卢克；《俄狄浦斯王》发现自己弑父娶母的忒拜国王。",
        referenceEn: "Luke discovering his father is the galaxy's greatest tyrant in Star Wars; Oedipus discovering he killed his father and married his mother in Oedipus Rex."
    },

    // ---- 自我边界溶解：主体与非主体之间的围栏被拆除 ----

    {
        id: "stake_dissolution",
        name: "意识消融", nameEn: "Ego Dissolution",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "主体意识融化并被吸收到集体意志或宇宙的宏大虚无中——再也无法分出'你'和'我'。",
        defEn: "Subject's consciousness melts and is absorbed into collective will or cosmic void — 'you' and 'I' can no longer be separated.",
        core: "A面：消融在某些神秘主义传统中是最高的合一体验——'小我'让位于'大我'，一滴水融入大海获得了海洋的全部。/ B面：但那不是'合一'——是被吞噬。一滴带着自己名字的水，被强制滴入了沸腾的大海。你没有'升华'，你是消失了。关键张力：放弃自我边界——是觉悟的顶点，还是主体性的死亡？ | 代价回路 (Castration): 主体边界的溶解——你获得了一切，但'你'不再存在来享用它。",
        coreEn: "A-side: Dissolution in certain mystical traditions is the highest unity — 'small self' yields to 'great self,' a drop entering the ocean gains all the ocean holds. / B-side: But that's not 'unity' — it's being devoured. A named drop of water forced into a boiling sea. You didn't 'transcend'; you vanished. Key tension: Surrendering the self's boundary — pinnacle of awakening, or death of subjectivity? | Castration Circuit: The subjective boundary dissolves — you gain everything, but 'you' no longer exists to enjoy it.",
        reference: "《2001太空漫游》穿越星门后意识与宇宙融合的宇航员；宗教修行中'无我'状态的极端形态——你到底是开悟了还是不存在了？",
        referenceEn: "The astronaut merging with the cosmos after traversing the star gate in 2001; the extreme form of 'anatta/no-self' in religious practice — are you enlightened, or do you simply not exist?"
    },
    {
        id: "stake_dehuman",
        name: "人性退化", nameEn: "Dehumanization",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "失去了作为'人'所特有的非理性裂缝——爱、悲悯、犹豫、软弱——变成纯粹的机能或纯粹的本能。",
        defEn: "Losing the irrational cracks unique to being 'human' — love, mercy, hesitation, weakness — becoming pure function or pure instinct.",
        core: "A面：去人性化有时是生存的唯一方式——在极端环境中，感情是负担，效率是生存。变'冷'是一种自我保护。/ B面：但当你发现自己可以毫无感觉地做出曾经让你流泪的事，你失去的不是'脆弱'——是'活着'的最核心证据。机器不会犯错，但机器也不会心碎。关键张力：如果变得更强意味着变得更少'人'——你还要继续变强吗？ | 代价回路 (Castration): 人性裂缝的焊死——成为了完美但空洞的运转体。",
        coreEn: "A-side: Dehumanization is sometimes the only way to survive — in extremes, emotion is burden, efficiency is survival. Going 'cold' is self-protection. / B-side: But when you find yourself doing without feeling what once made you weep, what you've lost isn't 'fragility' — it's the core evidence of being alive. Machines don't err, but machines don't heartbreak. Key tension: If getting stronger means becoming less 'human' — do you keep getting stronger? | Castration Circuit: The human flaw is welded shut — becoming a perfect but hollow operating body.",
        reference: "《发条橙》被暴力矫正成无法犯罪但也无法爱的亚历克斯；《现代启示录》在丛林深处彻底脱离文明道德的库尔兹上校。",
        referenceEn: "Alex, violently corrected into inability to sin but also to love in A Clockwork Orange; Colonel Kurtz, fully detached from civilized morality deep in the jungle in Apocalypse Now."
    },
    {
        id: "stake_soul_loss",
        name: "灵魂抽离", nameEn: "Soul Loss",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "还有呼吸，还有心跳，但失去了'想要什么'的能力——欲望引擎永久熄火的空壳。",
        defEn: "Still breathing, still heartbeating, but lost the capacity to 'want' anything — an empty shell whose desire engine has permanently stalled.",
        core: "A面：不再想要任何东西意味着不再被任何东西操控——你获得了一种佛陀式的平静，只是这种平静不是你选择的，而是被施加的。/ B面：但没有欲望的生命不是平静——是行尸走肉。你吃饭不是因为饿，呼吸不是因为想活，只是因为身体还没有接到停止的信号。你是一具还在运转但已经没有乘客的车。关键张力：如果你失去了'想要'的能力——还有什么理由证明你和一具尸体的区别？ | 代价回路 (Castration): 欲望主体的阉割——摄魂怪之吻。",
        coreEn: "A-side: No longer wanting anything means no longer being manipulated by anything — you've gained a Buddha-like peace, only this peace wasn't chosen, it was imposed. / B-side: But desire-less life isn't peace — it's the walking dead. You eat not from hunger, breathe not from wanting to live, only because the body hasn't received a stop signal. You're a car still running but with no passenger. Key tension: If you've lost the ability to 'want' — what proves you're different from a corpse? | Castration Circuit: The Subject of Desire is castrated — the Dementor's Kiss.",
        reference: "《海边的曼彻斯特》失去孩子后再也无法对任何事产生感情的父亲；《狗镇》被碾碎善意后变成中空执行体的格蕾丝。",
        referenceEn: "The father who can no longer feel anything after losing his children in Manchester by the Sea; Grace becoming hollow after all goodness is crushed out of her in Dogville."
    },
    {
        id: "stake_puppet",
        name: "意志篡夺", nameEn: "Will Hijacking",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "意识依然清醒，但身体和行为的支配权被另一个更强大的意志完全接管。",
        defEn: "Consciousness remains fully awake, but control over body and behavior is completely commandeered by a stronger will.",
        core: "A面：被接管意味着你不再需要为自己的行为负责——一种极其扭曲的解脱。有些人甚至在被操控中找到了一种放弃自由意志的安慰。/ B面：但这不是'解脱'——是成为自己身体里的人质。你清醒地看着自己的手在做你不愿做的事，你的嘴在说你不想说的话，而你发不出任何声音来尖叫。关键张力：如果你的身体在做的事是你的意识不同意的——那'做事的人'到底是谁？ | 代价回路 (Castration): 意志效能的无效化——最残酷的木偶剧场。",
        coreEn: "A-side: Being commandeered means you no longer bear responsibility for your actions — a deeply twisted relief. Some even find comfort in surrendering free will. / B-side: But this isn't 'relief' — it's being hostage inside your own body. You watch your hands do what you refuse, your mouth speak what you'd never say, unable to scream. Key tension: If your body does what your consciousness opposes — who exactly is 'doing'? | Castration Circuit: Willpower efficacy invalidated — the cruelest puppet theater.",
        reference: "《逃出绝命镇》意识被压入'沉沦之地'、眼睁睁看着身体为他人服务的克里斯；《甄嬛传》被幕后权力线牵动从而违心行事的后宫女子们。",
        referenceEn: "Chris pushed into the Sunken Place, helplessly watching his body serve others in Get Out; the harem women pulled by invisible power strings into actions against their will in Empresses in the Palace."
    },
    {
        id: "stake_objectification",
        name: "沦为标本", nameEn: "Total Objectification",
        group: "B. 想象界碎裂", groupEn: "Imaginary Shattering",
        def: "活人被降级为供大他者陈列、赏玩或使用的静态客体——存在变成了纯粹的景观或工具。",
        defEn: "A living person regressed into a static object for the Big Other's display, amusement, or use — existence becomes pure spectacle or tool.",
        core: "A面：被客体化有时反而暴露了'主体'的虚妄——也许我们太执着于'我是一个主体'这件事了。一块石头不会焦虑，不会失眠，不会害怕被遗忘。/ B面：但石头也不会爱。被降为客体的人失去的不是舒适——是'做选择'的资格。你不再是故事的参与者，你是道具间里的一件器材。关键张力：一个不被允许做选择的人——还能被称为'人'吗？ | 代价回路 (Castration): 主观能动性的标本化——活体被制作成永恒的静物。",
        coreEn: "A-side: Being objectified sometimes exposes the illusion of 'subject-hood' — perhaps we're too attached to 'I am a subject.' A stone doesn't have anxiety, insomnia, or fear of being forgotten. / B-side: But a stone can't love either. What the objectified person loses isn't comfort — it's the qualification to 'make choices.' You are no longer a participant in the story; you are a prop in the storeroom. Key tension: A person not permitted to make choices — can they still be called 'a person'? | Castration Circuit: Agentic subjectivity taxidermied — a living specimen preserved as eternal still life.",
        reference: "《使女的故事》被降格为'行走的子宫'的女性；《红楼梦》被当作家族装饰品的贾府千金们。",
        referenceEn: "Women reduced to 'walking wombs' in The Handmaid's Tale; the Jia family's daughters treated as decorative ornaments in Dream of the Red Chamber."
    },
];
