
import { LacanCategory } from './lacan_dictionary';

// --- 7. 其他哲学 (OTHER) ---
export const OTHER_DICTIONARY: LacanCategory[] = [
    {
        id: "other_phenomenology",
        name: "现象学 (Phenomenology)",
        enName: "Phenomenology",
        desc: "胡塞尔、海德格尔、梅洛-庞蒂。回到事物本身，悬置判断，本质直观。",
        concepts: [
            {
                id: "phenomenology_core",
                name: "现象学 (Phenomenology)",
                enName: "Phenomenology",
                category: "Husserl",
                shortDef: "回到事物本身。悬置自然态度，通过意向性分析，揭示意识与世界的本质关联。",
                detailed: {
                    definition: "胡塞尔提出的哲学方法。它反对“自然态度”（理所当然地认为世界存在），主张“悬置”判断，回到纯粹的意识经验。\n核心口号是“回到事物本身”。它不问“世界是否存在”，只问“世界是如何向意识显现的”。\n意识总是“关于某物的意识”（意向性）。",
                    analogy: "**案例：VR眼镜**\n自然态度是你忘了你戴着眼镜，以为看到的是真实；现象学是让你意识到你戴着眼镜，并研究这个眼镜（意识）是如何呈现图像的。",
                    application: "M2 (遭遇) / 实验影像：让主角经历一次“现象学还原”，剥离所有社会标签，直面赤裸的存在。"
                }
            },
            {
                id: "epoche",
                name: "现象学还原 (Epoché)",
                enName: "Phenomenological Reduction",
                category: "Husserl",
                shortDef: "加括号/悬置。把对外部世界的判断（它是否存在、它是什么）暂时搁置，只关注它在意识中的显现方式。",
                detailed: {
                    definition: "也就是“悬置 (Epoché)”。把我们对事物的常识、科学定义、社会标签统统关进括号里。\n看一个杯子，不再想“它是喝水的工具”（功能），也不想“它是陶瓷做的”（科学）。\n只关注：它是一个白色的、弯曲的、冰凉的视觉/触觉现象。\n通过还原，我们从“人类中心主义”的视角中抽离，看到了事物的“本质直观”。",
                    analogy: "**案例：剥洋葱**\n剥去社会属性（名字）、剥去功能属性（职业）、剥去物理属性（体重），最后剩下的那个纯粹的“显现”，就是本质。",
                    application: "实验影像 (Experimental)：剥离叙事和意义，只展示纯粹的视听质感 (Texture)。"
                }
            },
            {
                 id: "dasein",
                 name: "此在 (Dasein)",
                 enName: "Dasein (Being-there)",
                 category: "Heidegger",
                 shortDef: "人的存在总是“在世界之中”。我们不是孤立的主体，而是被抛入世界、向死而生的存在。",
                 detailed: {
                     definition: "海德格尔对胡塞尔的改造。他认为不能把意识从世界中剥离出来。人（此在）总是已经“在世界之中”了。\n核心特征：\n1. **被抛 (Thrownness):** 我们被抛到一个不是我们选择的历史/文化中。\n2. **操劳 (Care):** 我们通过使用工具与世界打交道。\n3. **向死而生:** 只有意识到死亡的不可避免，才能从“常人”的沉沦中觉醒，活出本真。",
                     analogy: "**案例：锤子**\n当你用锤子钉钉子时，锤子是透明的（上手状态）。只有当锤子坏了，你才注意到它是一个物体（在手状态）。死亡就是那个“坏了”的时刻，让我们注意到存在的意义。",
                     application: "M1 (主体) / M6 (代价)：从日常的沉沦（常人）觉醒为本真的存在。"
                 }
            }
        ]
    },
    {
        id: "other_core",
        name: "存在主义与后现代",
        enName: "Existentialism & Postmodern",
        desc: "萨特、加缪、福柯、鲍德里亚等。",
        concepts: [
            { 
                id: "bad_faith",
                name: "自欺 (Bad Faith)", 
                enName: "Mauvaise Foi (Sartre)", 
                category: "Sartre",
                shortDef: "为了逃避自由的重负，假装自己没有选择，假装自己只是一个“物”。",
                detailed: {
                    definition: "萨特认为人是绝对自由的。但这太痛苦了，所以我们对自己撒谎。\n服务员在这个瞬间“扮演”一个完美的服务员，他把自己当成了一个自动机，以此来逃避“我可以随时把盘子扣在客人头上”的那个可怕的自由。",
                    analogy: "**案例：扮演角色**\n你说“我不得不去上班”，这是自欺。你其实选择了去上班，因为你害怕失业的后果。承认“我选择”是痛苦的。",
                    application: "M0 (精神底色)：角色声称“我没办法，是生活逼我的”，这通常是自欺。"
                }
            },
            { 
                id: "simulacra",
                name: "拟像 (Simulacra)", 
                enName: "Simulacra (Baudrillard)", 
                category: "Baudrillard",
                shortDef: "地图取代了领土。符号不再指向现实，符号本身成为了唯一的现实。",
                detailed: {
                    definition: "第一阶段：符号反映现实。\n第二阶段：符号掩盖现实。\n第三阶段：符号掩盖“现实不存在”的事实。\n第四阶段：符号与现实无关（纯粹拟像）。\n\n迪士尼乐园的存在是为了掩盖“整个美国其实就是个迪士尼乐园”这一事实。",
                    analogy: "**案例：网红景点**\n你不是去旅游，你是去“验证照片”。那个景点如果不拍照发朋友圈，仿佛就不存在。照片比实地更真实。",
                    application: "M2 (遭遇)：当拟像崩溃，露出后面荒漠的那一刻。"
                }
            },
            {
                id: "panopticon_foucault",
                name: "全景敞视 (Panopticon)",
                enName: "Panopticism (Foucault)",
                category: "Foucault",
                shortDef: "可见性就是陷阱。权力不再通过肉体惩罚，而是通过“被看见的可能”让主体自我规训。",
                detailed: {
                    definition: "福柯借用边沁的监狱模型。中心塔里的守卫不可见，但这不重要。只要囚犯认为自己“可能”被看，他们就会自我约束。\n现代社会就是一个巨大的全景监狱：档案、摄像头、信用分、体检报告。权力弥散在毛细血管中。",
                    analogy: "**案例：红绿灯**\n即使凌晨三点路口没人没车，你也不敢闯红灯，因为可能有摄像头。你把交警内化到了自己心里。",
                    application: "M4 (大他者)：看不见的压迫系统。"
                }
            }
        ]
    }
];