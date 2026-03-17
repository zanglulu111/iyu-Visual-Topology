
import { LacanCategory } from './lacan_dictionary';

// --- 9. 米勒辞典 (MILLER) ---
export const MILLER_DICTIONARY: LacanCategory[] = [
    {
        id: "miller_core",
        name: "米勒与晚期拉康 (Miller & Late Lacan)",
        enName: "Jacques-Alain Miller",
        desc: "雅克-阿兰·米勒将拉康理论现代化，使其能解释当代社会的“非典型”精神结构（如普通精神病）。",
        concepts: [
            {
                id: "ordinary_psychosis_miller",
                name: "普通精神病",
                enName: "Ordinary Psychosis (Psychose Ordinaire)",
                category: "Miller",
                shortDef: "现代人的普遍状态。没有明显的疯癫（幻觉/妄想），但象征秩序已断裂。靠“补偿性补丁”维持着摇摇欲坠的正常。",
                detailed: {
                    definition: "在传统精神分析中，你要么是神经症，要么是精神病（二元对立）。但米勒发现，现代社会充满了“既不疯也不正常”的人。\n他们没有父法（Name-of-the-Father）的支撑，但他们没有发疯。为什么？因为他们发明了一种**“作为补丁 (Make-believe Name-of-the-Father)”**的替代结构。\n这个补丁可能是一份极致的工作、一个强迫性的健身习惯、或者一种成瘾行为。只要补丁还在，他们就看起来像正常人；补丁一掉，瞬间崩塌。",
                    analogy: "**案例：工作狂**\n一个看似成功的CEO，一旦退休（失去了“工作”这个补丁），第二天就发疯了。因为他的精神结构不是靠内部支撑的，是靠外部的“CEO身份”硬撑的。\n**案例：《小丑》亚瑟**\n在他彻底变成Joker之前，他靠“写日记/做社工”这些微弱的补丁维持着。当这些补丁被一个个撕掉，普通精神病就转化为了显性精神病。",
                    application: "M0 (精神底色)：用于塑造那种“冷漠、空心但功能正常”的现代角色（如《局外人》）。"
                }
            },
            {
                id: "extimacy",
                name: "外密性",
                enName: "Extimacy (Extimité)",
                category: "Miller",
                shortDef: "最私密的内部，恰恰是最陌生的外部。你的内核里有一个“异形”。",
                detailed: {
                    definition: "Extimacy = External + Intimacy。米勒用这个词来描述实在界（The Real）的位置。\n通常我们认为“自我”的中心是最熟悉的。但米勒说，你的核心恰恰是你无法控制、无法理解的东西（如冲动、享乐、肿瘤）。\n它就在你体内，但它比外星人还要陌生。",
                    analogy: "**案例：《异形》**\n异形破胸而出。那个怪物一直就在你身体里（最亲密），但它是绝对的敌人（最外部）。\n**案例：爱人的小习惯**\n你爱人有一个下意识的磨牙习惯。这个习惯是他身体最私密的一部分，但对他自己来说是无意识的，对你来说是无法忍受的噪音。这就是外密性。",
                    application: "M2 (遭遇) / 恐怖片内核：恐怖不在外面，恐怖就在镜子里，就在肚子里。"
                }
            },
            {
                id: "paradigms_of_jouissance",
                name: "享乐的六种范式",
                enName: "Paradigms of Jouissance",
                category: "Miller",
                shortDef: "米勒整理了拉康思想的演变，从“享乐是违法的”变成“享乐是身体的事件”。",
                detailed: {
                    definition: "1. **想象的享乐：** 满足于图像（自恋）。\n2. **象征的享乐：** 满足于说话（喋喋不休）。\n3. **不可能的享乐：** 享乐是被禁止的（神经症）。\n4. **作为碎片的享乐 (Object a)：** 享乐不在整体，而在局部（恋物）。\n5. **话语的享乐：** 社会纽带本身就是为了生产享乐。\n6. **身体的享乐 (One-all-alone)：** 最终极的阶段。享乐是自闭的，不需要他者，只是身体的震颤（如吸毒、自残）。",
                    analogy: "**案例：现代成瘾**\n现代人的快乐越来越趋向于第6种范式。刷短视频、嗑药。不需要交流，不需要意义，只需要视神经或多巴胺的直接刺激。这是一种“自闭的享乐”。",
                    application: "M5 (驱力)：角色的堕落过程，往往是从“寻找他人的爱”（范式3/4）退行到“纯粹的身体刺激”（范式6）。"
                }
            },
            {
                id: "sinthome_miller",
                name: "圣状 (Sinthome)",
                enName: "The Sinthome",
                category: "Miller",
                shortDef: "晚期拉康的核心。不是作为病理的“症状”，而是作为创造性解决方案的“圣状”。",
                detailed: {
                    definition: "米勒强调，在没有父法的时代（父权衰落），我们必须**自我加冕**。\nSinthome 是主体发明的一种独特的“结”，用来把松散的实在、想象、符号系在一起。\n乔伊斯（James Joyce）如果不是写作，就是个精神分裂症患者。写作就是他的 Sinthome。通过这种极其晦涩的写作，他给自己造了一个名字。",
                    analogy: "**案例：艺术家**\n草间弥生。她满眼都是幻觉圆点（精神病前兆）。她没有去吃药消除圆点，而是把圆点画满了全世界（圣状）。她通过这种“病态”的创作，成为了世界级大师，稳住了自己的精神世界。",
                    application: "M7 (结局 - Group F): 最完美的艺术升华结局。主角没有治好病，而是成为了独一无二的“疯子大师”。"
                }
            }
        ]
    }
];
