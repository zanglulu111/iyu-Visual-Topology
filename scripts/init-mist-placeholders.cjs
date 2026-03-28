const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CODEX_DATA_DIR = path.join(ROOT, 'public', 'data', 'codex', 'mist');
const DRAFTS_DIR = path.join(ROOT, 'codex-drafts', 'mist');

// Hardcoded MIST_INDEX for initialization to avoid TS-Node dependencies
const MIST_INDEX = [
    {
        id: "mist_volume_1",
        name: "第一卷：总纲",
        enName: "Volume I: General Overview",
        desc: "迷雾学派的正式理论体系与核心架构。",
        concepts: [
            { id: "mist_school", name: "迷雾学派", enName: "Mist School", category: "Core", shortDef: "一个以拉康、黑格尔、马克思、齐泽克等理论为内核的“生产型学派”。" },
            { id: "erotic_structural_topology", name: "爱欲视觉拓扑学", enName: "Erotic Visual Topology", category: "Theory", shortDef: "学派正式理论名。欲望如何在图像中以拓扑结构显形并成为主体的存在之结。" },
            { id: "generative_engine", name: "生成引擎", enName: "Generative Engine", category: "System", shortDef: "从解释世界到生产世界的转向，将结构哲学推进为生成文法。" },
            { id: "structural_visualization_method", name: "结构可视化", enName: "Structural Visualization", category: "Methodology", shortDef: "本体论卫生学，通过锚点、污点、剩余物来显形抽象结构的方法论总纲。" },
            { id: "exception_of_structure_goal", name: "结构的例外", enName: "Exception of Structure", category: "Core", shortDef: "先建立结构，再去看结构的例外与逃逸，是实践的更高目标。" }
        ]
    },
    {
        id: "mist_volume_2",
        name: "第二卷：精神底盘与结构继承",
        enName: "Volume II: Structural Inheritance",
        desc: "来自拉康、黑格尔、马克思、齐泽克的哲学底盘。",
        concepts: [
            { id: "mist_lack", name: "缺失", enName: "Lack", category: "Concept", shortDef: "缺失不是缺点，而是主体成为主体的结构条件。" },
            { id: "mist_objet_a", name: "对象 a", enName: "Objet petit a", category: "Concept", shortDef: "欲望的非对象性，作为剩余物的诱饵。" },
            { id: "mist_fantasy", name: "幻想", enName: "Fantasy", category: "Concept", shortDef: "支撑现实的幕布，不是纯粹谎言。" },
            { id: "mist_drive", name: "驱力", enName: "Drive", category: "Concept", shortDef: "围绕失落物循环的回返与重复。" },
            { id: "mist_sinthome_knot", name: "结与圣状", enName: "Sinthome & Knot", category: "Concept", shortDef: "三界需要圣状来扣住；症状作为生存方式。" },
            { id: "mist_negativity", name: "否定性", enName: "Negativity", category: "Concept", shortDef: "产生裂缝的根本驱动，内部不可融合的硬核。" },
            { id: "mist_aufhebung", name: "扬弃", enName: "Aufhebung", category: "Concept", shortDef: "克服与保存的双重运动。" },
            { id: "mist_retroactivity", name: "回溯性建构", enName: "Retroactive Construction", category: "Concept", shortDef: "结局重写开端，事后确立因果。" },
            { id: "mist_alienation", name: "异化", enName: "Alienation", category: "Concept", shortDef: "主体在社会机器中的残渣化。" },
            { id: "mist_fetishism", name: "商品拜物教", enName: "Commodity Fetishism", category: "Concept", shortDef: "欲望被商品形式捕获的结构。" },
            { id: "mist_parallax", name: "视差之见", enName: "Parallax View", category: "Concept", shortDef: "同一对象因观看位置不同而发生的本体论裂缝。" },
            { id: "mist_stain", name: "污点", enName: "Stain", category: "Concept", shortDef: "图像中最真实且无法去除的剩余。" },
            { id: "mist_sublime_object", name: "崇高客体", enName: "Sublime Object", category: "Concept", shortDef: "意识形态缝合中的核心对象变体。" }
        ]
    },
    {
        id: "mist_volume_3",
        name: "第三卷：叙事生成引擎 (M0-M7)",
        enName: "Volume III: Narrative Engine",
        desc: "将哲学结构转译为角色、遭遇、阻断、行动、代价、落点的方程。",
        concepts: [
            { id: "mist_m0", name: "M0: 精神底色", enName: "M0: Ontological Base", category: "Engine", shortDef: "主体与现实裂缝间的根本关系模式。" },
            { id: "mist_m1", name: "M1: 缺失主体", enName: "M1: Subject of Lack", category: "Engine", shortDef: "主体之伤痕处，其被结构切开的位置。" },
            { id: "mist_m2", name: "M2: 真实遭遇", enName: "M2: Encounter with the Real", category: "Engine", shortDef: "实在界撞击日常秩序，不可预期的失效。" },
            { id: "mist_m3", name: "M3: 欲望幻想", enName: "M3: Fantasy of Desire", category: "Engine", shortDef: "裂口发亮时的诱饵界面，对象a的叙事投影。" },
            { id: "mist_m4", name: "M4: 大他者阻断", enName: "M4: Blockage of Big Other", category: "Engine", shortDef: "必定折损欲望的结构性阻碍、制度与法则。" },
            { id: "mist_m5", name: "M5: 行动驱力", enName: "M5: Drive of Action", category: "Engine", shortDef: "主体被驱力推推攘攘的冲撞及重复宿命。" },
            { id: "mist_m6", name: "M6: 终极代价", enName: "M6: Ultimate Price", category: "Engine", shortDef: "主体在符号秩序界面承担的结构性剥夺与抹除。" },
            { id: "mist_m7", name: "M7: 存在落点", enName: "M7: Existential Drop", category: "Engine", shortDef: "主体与裂隙最终重新结环的特定方式（Knotting）。" }
        ]
    },
    {
        id: "mist_volume_4",
        name: "第四卷：图像与视觉体系",
        enName: "Volume IV: Image & Visuals",
        desc: "本体论卫生学与视觉转译架构。",
        concepts: [
            { id: "mist_ontological_hygiene", name: "本体论卫生学", enName: "Ontological Hygiene", category: "Aesthetics", shortDef: "迷雾学派独创视觉方法，使无菌与沾染构成对位显形。" },
            { id: "mist_sterile", name: "无菌", enName: "Sterile", category: "Aesthetics", shortDef: "象征秩序封闭的光滑表面，纯净且规训。" },
            { id: "mist_bacterial", name: "有菌", enName: "Bacterial", category: "Aesthetics", shortDef: "实在界的生命性、腐败性溢出。" },
            { id: "mist_contamination", name: "沾染", enName: "Contamination", category: "Aesthetics", shortDef: "裂隙的渗透性显形，秩序表面的局部故障与污迹。" },
            { id: "mist_anchor_point", name: "锚点", enName: "Anchor Point", category: "Aesthetics", shortDef: "视觉画面中稳定结构的核心标识。" },
            { id: "mist_image_rift", name: "图像裂口", enName: "Image Rift", category: "Aesthetics", shortDef: "不仅是伤痕，而是使内部结构可见的外翻处。" },
            { id: "mist_tactile_vision", name: "触觉视觉", enName: "Tactile Vision", category: "Aesthetics", shortDef: "诉诸粗糙度与创伤记忆的切肤画面触感。" },
            { id: "mist_defamiliarization", name: "陌生化", enName: "Defamiliarization", category: "Aesthetics", shortDef: "通过剥离日常属性，揭示物之实在界维度的视觉手段。" }
        ]
    },
    {
        id: "mist_volume_5",
        name: "第五卷：创作协议与隐蔽显形",
        enName: "Volume V: Creation Protocol",
        desc: "将哲学操作为生成工具的一系列具体创作法则。",
        concepts: [
            { id: "mist_translation_protocol", name: "转译协议", enName: "Translation Protocol", category: "Methodology", shortDef: "将抽象结构转译为具体叙事元素的操作准则。" },
            { id: "mist_mask_protocol", name: "面具协议", enName: "Mask Protocol", category: "Methodology", shortDef: "赋予角色象征界界面，使其真实在面具缝隙中透出。" },
            { id: "mist_invisible_weaving", name: "隐形织造", enName: "Invisible Weaving", category: "Methodology", shortDef: "不显露哲学词汇，而在叙事骨架层面暗缝理论肌理。" },
            { id: "mist_era_dimensionality", name: "时代降维", enName: "Era Dimensionality Reduction", category: "Methodology", shortDef: "将宏大历史矛盾降维到极度微观的个体切面中。" },
            { id: "mist_naming_protocol", name: "命名协议", enName: "Naming Protocol", category: "Methodology", shortDef: "使用带有工业感、病理、拓扑学隐喻的黑硬词汇系统。" },
            { id: "mist_anti_kitsch", name: "反刻奇", enName: "Anti-Kitsch", category: "Methodology", shortDef: "拒绝廉价的伤感与和解，保卫裂缝的不可愈合性。" }
        ]
    },
    {
        id: "mist_volume_6",
        name: "第六卷：例外与逃逸",
        enName: "Volume VI: The Exception",
        desc: "无法被符号完全收编的边缘余量。",
        concepts: [
            { id: "mist_the_exception", name: "结构的例外", enName: "The Exception", category: "Theory", shortDef: "系统中无法被缝合、必定滑落的存在点。" },
            { id: "mist_symptom_survival", name: "症状作为生存方式", enName: "Symptom as Survival", category: "Theory", shortDef: "不求治愈症状，而是依托症状与结构打结共存。" },
            { id: "mist_creation_as_knotting", name: "创作作为结", enName: "Creation as Knotting", category: "Theory", shortDef: "创作不是表达自我，而是为松散的世界打结的过程。" },
            { id: "mist_remainder", name: "剩余物", enName: "The Remainder", category: "Theory", shortDef: "符号化过程后剩下的那个坚硬、不可消化的物质。" },
            { id: "mist_glitch", name: "故障", enName: "Glitch", category: "Theory", shortDef: "秩序运行中的瞬间卡顿——恰是真实的闪现时刻。" },
            { id: "mist_escape", name: "逃逸路徑", enName: "Line of Flight", category: "Theory", shortDef: "欲望在结构压迫中溢出其原有轨道的流动方向。" },
            { id: "mist_the_impossible", name: "不可能之物", enName: "The Impossible", category: "Theory", shortDef: "实在界的核心特征，绝对抵抗符号化、不可企及之物。" }
        ]
    }
];

function initPlaceholders() {
    // 1. Ensure directories exist
    fs.mkdirSync(CODEX_DATA_DIR, { recursive: true });
    fs.mkdirSync(DRAFTS_DIR, { recursive: true });

    const concepts = MIST_INDEX.flatMap(cat => cat.concepts);

    // 2. Generate summaries.json
    const summaries = concepts.map(c => ({
        id: c.id,
        name: c.name,
        enName: c.enName,
        category: c.category,
        shortDef: c.shortDef,
        summary: `（内容待补充：${c.name} 的详细哲学解析与拓扑学展开...）`
    }));

    fs.writeFileSync(
        path.join(CODEX_DATA_DIR, 'summaries.json'),
        JSON.stringify(summaries, null, 2),
        'utf-8'
    );
    console.log(`Created summaries.json with ${summaries.length} entries.`);

    // 3. Generate placeholder markdown drafts
    let count = 0;
    for (const c of concepts) {
        const draftPath = path.join(DRAFTS_DIR, `${c.id}.md`);
        if (!fs.existsSync(draftPath)) {
            const mdContent = `## 定义\n\n（关于 ${c.name} 的迷雾学派定义...）\n\n---\n\n## 类比\n\n（关于 ${c.name} 的视觉或生活类比...）\n\n---\n\n## 应用\n\n（关于 ${c.name} 在叙事生产中的应用...）\n`;
            fs.writeFileSync(draftPath, mdContent, 'utf-8');
            count++;
        }
    }
    console.log(`Generated ${count} placeholder drafts in codex-drafts/mist/.`);
}

initPlaceholders();
