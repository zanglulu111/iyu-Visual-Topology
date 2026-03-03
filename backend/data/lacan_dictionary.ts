
export interface LacanConcept {
    id: string;
    name: string;
    enName: string;
    category: string;
    shortDef: string;
    detailed?: {
        definition: string;
        analogy: string;
        application: string;
    };
}

export interface LacanCategory {
    id: string;
    name: string;
    enName: string;
    desc: string;
    concepts: LacanConcept[];
}

export const LACAN_DICTIONARY: LacanCategory[] = [
    {
        id: "core_concepts",
        name: "核心术语",
        enName: "Core Concepts",
        desc: "拉康精神分析的核心基石。",
        concepts: [
            {
                id: "object_a",
                name: "对象a",
                enName: "Object petit a",
                category: "Desire",
                shortDef: "欲望的原因，而非欲望的目标。一个永远无法被填补的空洞残留。",
                detailed: {
                    definition: "在符号界中，主体通过异化进入语言。对象a是进入符号界时必须牺牲的那个纯粹享乐的剩余。它驱动主体不断寻找，但得到的任何具体客体都只是对象a的幻影。",
                    analogy: "驴子面前永远吃不到的胡萝卜。你以为你想要胡萝卜，其实你想要的是那个让你不断前进的‘渴望感’。",
                    application: "在叙事引擎中作为 M3 (欲望幻想)。主角追求的往往不是金钱或权力，而是对象a投射出的那个完美的、能让他完整的幻象。"
                }
            },
            {
                id: "big_other",
                name: "大他者",
                enName: "The Big Other",
                category: "Symbolic",
                shortDef: "语言、法则、体制和社会秩序。主体必须在此寻找认同，但它本质上是虚构的。",
                detailed: {
                    definition: "大他者代表了社会契约和符号秩序。它并不真实存在，但主体表现得好像它在观察并审判一切。大他者也是主体的语言来源。",
                    analogy: "圣诞老人。大人们表现得好像圣诞老人存在，以便让孩子们守规矩。即便大家都知道是假的，这套秩序依然在运作。",
                    application: "作为 M4 (大他者阻断)。体现为官僚体制、家庭禁忌或难以抗拒的社会规则。"
                }
            }
        ]
    }
];
