import { LibraryItemDef } from '../../../types';

export const SUBJECTS_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 断裂的主体 (The Disconnected) - 16 Items
    // 缺失方向：向他人 → 关系。"我无法触及你"——爱、失去、背叛、孤独。
    // ============================================================
    {
        id: "subj_unloved",
        name: "缺爱者", nameEn: "The Unloved",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "从未被真正地、无条件地爱过的人。",
        defEn: "One who has never been truly, unconditionally loved.",
        flaw: "情感饥渴", flawEn: "Emotional Starvation",
        core: "缺爱可以让人变得极其强大（我不需要任何人），也可以让人跪在任何给予温暖的人面前。关键张力：当爱终于来了——你敢接住吗？ | 缺失 ($): 被爱",
        coreEn: "Being unloved can make one extremely strong (I need no one) or make one kneel before anyone offering warmth. Key tension: when love finally arrives — do you dare catch it? | Lacks ($): Love",
        reference: "《被嫌弃的松子的一生》中终生渴求爱却反复被抛弃的松子；《心灵捕手》中用愤怒包裹童年创伤的威尔。",
        referenceEn: "Matsuko in Memories of Matsuko, craving love all her life yet repeatedly abandoned; Will in Good Will Hunting, wrapping childhood trauma in anger."
    },
    {
        id: "subj_bereaved",
        name: "丧亲者", nameEn: "The Bereaved",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "失去了至亲至爱之人，世界塌了一角。",
        defEn: "Having lost the closest person, with a corner of the world collapsed.",
        flaw: "哀悼停滞", flawEn: "Arrested Grief",
        core: "失去可以是漫长的沉没，也可以是重新看见世界的契机。关键张力：你是在缅怀逝者，还是在拒绝让他们真正离开？ | 缺失 ($): 逝去之人",
        coreEn: "Loss can be a long sinking or an occasion to see the world anew. Key tension: are you honoring the dead, or refusing to truly let them go? | Lacks ($): The Departed",
        reference: "《海边的曼彻斯特》中因丧子而无法原谅自己的李；《东京物语》中目送子女各自散去的老夫妻。",
        referenceEn: "Lee in Manchester by the Sea, unable to forgive himself after losing his children; the elderly couple watching their children scatter in Tokyo Story."
    },
    {
        id: "subj_betrayed",
        name: "被背叛者", nameEn: "The Betrayed",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "曾经无条件信任某人，那份信任被碾碎了。",
        defEn: "Once trusting someone unconditionally, that trust was shattered.",
        flaw: "信任坍塌", flawEn: "Trust Collapse",
        core: "被背叛可以让人关上所有的门（再也不会相信任何人），也可以逼出新的分辨力（我终于看清了谁值得信）。关键张力：如果背叛你的人跪着求你原谅——原谅是慈悲还是软弱？ | 缺失 ($): 信任",
        coreEn: "Betrayal can make one shut every door (never trusting anyone again) or forge new discernment (finally seeing who deserves trust). Key tension: if the betrayer kneels for forgiveness — is forgiving mercy or weakness? | Lacks ($): Trust",
        reference: "《基督山伯爵》中被至友出卖而蒙冤入狱的唐泰斯；《教父2》中发现亲兄弟出卖家族的迈克尔。",
        referenceEn: "Dantès, betrayed by his closest friend and wrongfully imprisoned in The Count of Monte Cristo; Michael discovering his own brother's betrayal of the family in The Godfather Part II."
    },
    {
        id: "subj_unrequited",
        name: "相思者", nameEn: "The Unrequited",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "爱一个永远得不到的人。",
        defEn: "In love with someone forever beyond reach.",
        flaw: "单向执念", flawEn: "One-Sided Obsession",
        core: "单恋可以是最纯粹的爱情（因为完全不求回报），也可以是最自私的执念（你只是我幻想的容器）。关键张力：如果那个人永远不会回头——你的爱是奉献，还是囚禁？ | 缺失 ($): 回应",
        coreEn: "Unrequited love can be the purest affection (expecting nothing in return) or the most selfish obsession (you are merely a vessel for my fantasy). Key tension: if that person never looks back — is your love dedication, or imprisonment? | Lacks ($): Reciprocity",
        reference: "《大话西游》中隔着五百年凝望紫霞的至尊宝；《赎罪》中用一生忏悔写不出结局的布里奥妮。",
        referenceEn: "Supreme Treasure gazing at Zixia across five hundred years in A Chinese Odyssey; Briony spending a lifetime atoning, unable to write the ending in Atonement."
    },
    {
        id: "subj_caretaker",
        name: "沉默的照顾者", nameEn: "The Silent Caretaker",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "一辈子照顾别人，从没有人问过'你还好吗'。",
        defEn: "Spending a lifetime caring for others, with no one ever asking 'are you okay?'",
        flaw: "自我消隐", flawEn: "Self-Erasure",
        core: "照顾他人可以是爱的最高形式，也可以是逃避自己人生的完美借口。关键张力：如果被照顾的人不再需要你——你还有存在的理由吗？ | 缺失 ($): 被照顾",
        coreEn: "Caring for others can be the highest form of love or the perfect excuse to avoid one's own life. Key tension: if the person you care for no longer needs you — do you still have a reason to exist? | Lacks ($): Being Cared For",
        reference: "《东京物语》中一生为家庭付出却被子女冷落的母亲；《时时刻刻》中因责任感无法离开家庭的劳拉。",
        referenceEn: "The mother in Tokyo Story, giving her whole life to her family yet neglected by her children; Laura in The Hours, unable to leave her family out of a sense of obligation."
    },
    {
        id: "subj_jealous",
        name: "嫉妒者", nameEn: "The Jealous",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "被另一个人的存在——他的才华、爱情或光芒——持续折磨。",
        defEn: "Perpetually tormented by another person's existence — their talent, love, or radiance.",
        flaw: "嫉妒之毒", flawEn: "Envy",
        core: "嫉妒可以是毁灭性的毒药（恨一个不该恨的人），也可以是隐秘的指南针（你最嫉妒的东西就是你最渴望的东西）。关键张力：消灭那个让你嫉妒的人之后——你的痛苦会消失吗？ | 缺失 ($): 平静",
        coreEn: "Jealousy can be destructive poison (hating someone who shouldn't be hated) or a hidden compass (what you envy most is what you desire most). Key tension: after destroying the one you envy — does the pain vanish? | Lacks ($): Peace",
        reference: "《莫扎特传》中萨列里对莫扎特天赋的终生嫉妒与毁灭；《甄嬛传》中对甄嬛宠爱患上执念的皇后。",
        referenceEn: "Salieri's lifelong jealousy and destruction toward Mozart's genius in Amadeus; the Empress developing an obsessive fixation on Zhen Huan's favor in Empresses in the Palace."
    },
    {
        id: "subj_follower",
        name: "追随者", nameEn: "The Follower",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "一切意义和方向都来自另一个人——失去了那个人就是空壳。",
        defEn: "All meaning and direction come from another person — losing them means becoming a hollow shell.",
        flaw: "依附", flawEn: "Dependence",
        core: "追随可以是忠诚的至高表达，也可以是放弃自我的懒惰。关键张力：如果你跟随的那个人是错的——你是忠诚还是帮凶？ | 缺失 ($): 自我方向",
        coreEn: "Following can be the highest expression of loyalty or the laziness of giving up the self. Key tension: if the one you follow is wrong — are you loyal, or complicit? | Lacks ($): Self-Direction",
        reference: "《死亡诗社》中崇拜基廷老师却承受不住压力的尼尔；桑丘之于堂吉诃德的忠诚与困惑。",
        referenceEn: "Neil in Dead Poets Society, worshipping Mr. Keating yet crumbling under pressure; Sancho Panza's loyalty and confusion toward Don Quixote."
    },
    {
        id: "subj_wall",
        name: "无法亲密的人", nameEn: "The Walled",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "渴望靠近他人，却每次都在最后一步退缩或搞砸。",
        defEn: "Yearning to get close to others, yet retreating or sabotaging it at the very last step.",
        flaw: "亲密恐惧", flawEn: "Intimacy Avoidance",
        core: "无法亲密可以是一种保护（我不靠近，就不会受伤），也可以是最深的孤独。关键张力：如果有人愿意等你打开那扇门——你会让他等多久？ | 缺失 ($): 亲近",
        coreEn: "Being unable to get close can be self-protection (if I don't approach, I won't get hurt) or the deepest loneliness. Key tension: if someone is willing to wait for you to open that door — how long will you make them wait? | Lacks ($): Closeness",
        reference: "《花束般的恋爱》中慢慢失去共同语言却不敢说出口的情侣；《她》中只能与AI建立亲密关系的西奥多。",
        referenceEn: "The couple in We Made a Beautiful Bouquet, slowly losing their shared language yet afraid to speak up; Theodore in Her, only able to form intimacy with an AI."
    },
    {
        id: "subj_fading_couple",
        name: "渐行渐远的人", nameEn: "The Fading Bond",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "与曾经最亲密的人之间，正在经历一种缓慢的、不可逆的疏离。",
        defEn: "Experiencing a slow, irreversible estrangement from someone once closest.",
        flaw: "沉默积累", flawEn: "Accumulated Silence",
        core: "渐行渐远可以是温柔的放手（有些关系的使命已经完成），也可以是最痛苦的钝刀（不是不爱了，是不会爱了）。关键张力：你们之间最后一句真心话，是什么时候说的？ | 缺失 ($): 共同语言",
        coreEn: "Drifting apart can be a gentle letting go (some relationships have fulfilled their purpose) or the cruelest blunt knife (it's not that love is gone, but that we've forgotten how to love). Key tension: when was the last time you said something truly honest to each other? | Lacks ($): Common Language",
        reference: "《花束般的恋爱》中从灵魂伴侣到陌路的麦与绢；《革命之路》中困在体面婚姻里窒息的夫妻。",
        referenceEn: "The lovers in We Made a Beautiful Bouquet, drifting from soulmates to strangers; the couple suffocating inside a respectable marriage in Revolutionary Road."
    },
    {
        id: "subj_surrogate_parent",
        name: "代父/代母", nameEn: "The Surrogate Parent",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "被迫承担不属于自己年龄的养育责任——照顾弟妹、赡养长辈、抚养别人的孩子。",
        defEn: "Forced to assume parenting duties beyond one's age — caring for siblings, supporting elders, or raising another's child.",
        flaw: "早熟剥削", flawEn: "Stolen Childhood",
        core: "代替缺席者可以让一个人变得无比坚韧，也可以偷走他们本该拥有的青春。关键张力：你照顾了所有人——但谁来照顾那个当年还是孩子的你？ | 缺失 ($): 童年",
        coreEn: "Standing in for the absent can make a person incredibly resilient, or steal the youth they should have had. Key tension: you've cared for everyone — but who cares for the child you once were? | Lacks ($): Childhood",
        reference: "《冬天的骨头》中十七岁就独撑全家的芮；《请回答1988》中总是让着弟弟妹妹的大女儿德善。",
        referenceEn: "Ree holding an entire family together at seventeen in Winter's Bone; Deok-sun, the eldest daughter always yielding to her siblings in Reply 1988."
    },
    {
        id: "subj_possessive",
        name: "控制者", nameEn: "The Possessive",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "以爱的名义控制另一个人——因为太害怕失去。",
        defEn: "Controlling another in the name of love — out of an overwhelming fear of loss.",
        flaw: "窒息之爱", flawEn: "Suffocating Love",
        core: "控制可以是保护的极端变形（我不能让你受伤），也可以是自我投射的牢笼（我需要你永远不变）。关键张力：你爱的是那个人，还是那个人让你感觉到的安全？ | 缺失 ($): 安全感",
        coreEn: "Control can be an extreme mutation of protection (I can't let you get hurt) or a cage of self-projection (I need you to never change). Key tension: do you love that person, or the safety they make you feel? | Lacks ($): Security",
        reference: "《蝴蝶梦》中被已故丽贝卡的幽灵控制的整栋庄园；《消失的爱人》中把婚姻变成完美牢笼的艾米。",
        referenceEn: "The entire estate controlled by the ghost of the late Rebecca in Rebecca; Amy turning marriage into a perfect cage in Gone Girl."
    },
    {
        id: "subj_guilt_bound",
        name: "负疚者", nameEn: "The Guilt-Bound",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "因为对某个人做过（或没做）的事，背负着无法卸下的愧疚。",
        defEn: "Carrying an unsheddable guilt for something done (or not done) to someone.",
        flaw: "自罚", flawEn: "Self-Punishment",
        core: "愧疚可以是良知的证明（至少你还在乎），也可以是自我惩罚的永动机。关键张力：被你伤害的人已经原谅了你——但你能原谅自己吗？ | 缺失 ($): 宽恕",
        coreEn: "Guilt can be proof of conscience (at least you still care) or a perpetual engine of self-punishment. Key tension: the person you hurt has already forgiven you — but can you forgive yourself? | Lacks ($): Forgiveness",
        reference: "《海边的曼彻斯特》中李永远无法原谅自己的疏忽；《赎罪》中布里奥妮用一生的写作偿还一个童年的谎言。",
        referenceEn: "Lee in Manchester by the Sea, forever unable to forgive his own negligence; Briony in Atonement, spending a lifetime writing to repay a childhood lie."
    },
    {
        id: "subj_silenced",
        name: "失语者", nameEn: "The Silenced",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "有话要说，但语言在到达对方之前就碎了——无论是因为权力、文化还是怯懦。",
        defEn: "Having something to say, but the words shatter before reaching the other — whether due to power, culture, or cowardice.",
        flaw: "表达瘫痪", flawEn: "Expressive Paralysis",
        core: "沉默可以是一种保存自我的尊严，也可以是一种缓慢的自我掩埋。关键张力：如果你终于开口了——对方还在听吗？ | 缺失 ($): 表达",
        coreEn: "Silence can be a dignity that preserves the self or a slow self-burial. Key tension: if you finally speak up — is the other person still listening? | Lacks ($): Expression",
        reference: "李安《饮食男女》中父女之间积压三十年的沉默；《钢琴课》中用钢琴替代语言的哑女。",
        referenceEn: "The thirty years of accumulated silence between father and daughters in Ang Lee's Eat Drink Man Woman; the mute woman replacing words with piano in The Piano."
    },
    {
        id: "subj_empty_nest",
        name: "空巢者", nameEn: "The Empty Nester",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "曾经被孩子或伴侣填满的生活突然空了。",
        defEn: "A life once filled by children or a partner is suddenly empty.",
        flaw: "空洞", flawEn: "Emptiness",
        core: "空巢可以是迟来的自由（终于有了自己的时间），也可以是无声的崩塌（原来没有他们，我不知道自己是谁）。关键张力：你是趁空出来的时间重新找到自己，还是每天给不回来的人留一盏灯？ | 缺失 ($): 被需要",
        coreEn: "An empty nest can be belated freedom (finally having one's own time) or a silent collapse (without them, I don't know who I am). Key tension: do you use the empty time to find yourself again, or leave a light on every night for those who won't return? | Lacks ($): Being Needed",
        reference: "《东京物语》中被子女遗忘的老人；《天伦之旅》中逐一拜访疏远子女、发现自己已不被需要的老父亲。",
        referenceEn: "The elderly parents forgotten by their children in Tokyo Story; the old father visiting each estranged child and discovering he is no longer needed in Everybody's Fine."
    },
    {
        id: "subj_crowd_lonely",
        name: "人群中的孤独者", nameEn: "The Lonely in a Crowd",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "身边有很多人，但没有任何一段关系是真实的。",
        defEn: "Surrounded by many, yet none of the connections are real.",
        flaw: "社交性孤独", flawEn: "Social Isolation",
        core: "被人群包围却感到孤独，可以是最反直觉的痛苦——明明不缺陪伴，缺的是一个真正的人。关键张力：如果你从所有社交中消失一个月——有几个人会真的来找你？ | 缺失 ($): 真实连接",
        coreEn: "Being lonely in a crowd is the most counterintuitive pain — companionship is abundant, but a real person is what's missing. Key tension: if you vanished from all social life for a month — how many people would actually come looking? | Lacks ($): Genuine Connection",
        reference: "《迷失东京》中在异国豪华酒店里各自失眠的两个陌生人；《了不起的盖茨比》中宴会上满堂宾客却找不到一个知己的盖茨比。",
        referenceEn: "The two strangers each sleepless in a foreign luxury hotel in Lost in Translation; Gatsby surrounded by a full house of guests yet unable to find a single confidant in The Great Gatsby."
    },
    {
        id: "subj_rival_bound",
        name: "宿敌", nameEn: "The Rival-Bound",
        group: "D. 断裂的主体", groupEn: "The Disconnected",
        def: "与某个人之间存在一种比爱更深的纽带——互相定义、互相消耗的宿命。",
        defEn: "Sharing a bond with someone deeper than love — a fate of mutual definition and mutual consumption.",
        flaw: "共生仇恨", flawEn: "Symbiotic Hatred",
        core: "宿敌的存在可以是你最强大的驱动力（打败他是我活着的理由），也可以是最隐秘的依赖（没有他，我的人生就没有形状）。关键张力：如果宿敌突然死了——你是解脱还是坍塌？ | 缺失 ($): 与对手的分离",
        coreEn: "A nemesis can be the strongest drive (beating them is my reason to live) or the most hidden dependency (without them, my life has no shape). Key tension: if the rival suddenly dies — is it relief or collapse? | Lacks ($): Separation from the Rival",
        reference: "《蝙蝠侠》中蝙蝠侠与小丑的共生——一个不杀，一个不死；《火影忍者》中鸣人与佐助的宿命纽带。",
        referenceEn: "Batman and the Joker's symbiosis — one won't kill, the other won't die in Batman; the fated bond between Naruto and Sasuke in Naruto."
    }
];

