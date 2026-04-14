import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_J: LibraryCategoryDef = {
  id: "loc_nature_wilderness",
  name: "10. 自然与荒野空间 (Nature & Wilderness)",
  nameEn: "Nature & Wilderness Spaces",
  desc: "不由人类设计、不服从人类意志的空间。这里没有墙壁，但有比墙壁更致命的边界——温度、海拔、潮汐和重力。自然不审判你，它只是存在。你死不死是你自己的事。",
  items: [
    {
      id: "dense_forest",
      name: "密林/森林深处",
      nameEn: "Dense Forest",
      def: "大量垂直生长的树木遮蔽了天空，将光线切割成碎片。地面被落叶和根系覆盖，不存在直线路径。视距被限制在十米以内。方向感在进入后迅速瓦解。",
      defEn: "Masses of vertically growing trees block the sky, slicing light into fragments. Ground covered by fallen leaves and root systems; no straight paths exist. Visibility limited to under ten meters. Orientation dissolves rapidly upon entry.",
      core: "他走了三个小时，发现前面那棵树上有他一个小时前刻的记号。森林不是迷宫——迷宫有出口。森林是一个圆，你走的每一步都在回到原点。",
      coreEn: "After three hours walking, he found the mark he'd carved one hour ago on a tree ahead. A forest isn't a maze — mazes have exits. A forest is a circle; every step returns you to the start.",
      reference: "《猎人》(2011, 丹尼尔·内特海姆) 塔斯马尼亚原始林 / 《女巫》(2015, 罗伯特·艾格斯) 新英格兰黑森林",
      referenceEn: "\"The Hunter\" (2011, Daniel Nettheim) Tasmania Primeval Forest / \"The Witch\" (2015, Robert Eggers) New England Dark Forest"
    },
    {
      id: "cave_cavern",
      name: "洞穴/岩洞",
      nameEn: "Cave / Cavern",
      def: "地表岩层中自然形成的内凹空间。入口通常比内部小。越往深处走，温度越恒定，声音越清晰，光线越少，直至完全黑暗。这是地球的子宫——或胃。",
      defEn: "A naturally formed concave space in surface rock layers. The entrance is usually smaller than the interior. Deeper in: temperature stabilizes, sound clarifies, light diminishes, until total darkness. This is Earth's womb — or stomach.",
      core: "他关掉头灯的那一秒，黑暗不是'降临'的——黑暗是一直在那儿的，灯只是让他假装看不见。完全的黑暗里，他开始听见自己血管里的声音。",
      coreEn: "The second he killed the headlamp, darkness didn't 'descend' — it had always been there; the lamp just let him pretend otherwise. In total darkness, he began hearing the sound inside his own veins.",
      reference: "《洞穴》(2005, 布鲁斯·亨特) 地下洞穴探险 / 《蝙蝠侠：侠影之谜》(2005, 克里斯托弗·诺兰) 蝙蝠洞",
      referenceEn: "\"The Cave\" (2005, Bruce Hunt) Underground Cave / \"Batman Begins\" (2005, Christopher Nolan) The Batcave"
    },
    {
      id: "cliff_precipice",
      name: "悬崖/深渊边缘",
      nameEn: "Cliff / Precipice",
      def: "地面在此处突然中断，形成近乎垂直的落差。站在边缘的人只需要再迈半步就从'活着'变成'坠落'。风在这里比任何地方都大。没有栏杆。",
      defEn: "The ground abruptly terminates here, forming a near-vertical drop. Standing at the edge, one needs only half a step more to transition from 'alive' to 'falling.' Wind here is stronger than anywhere. No railings.",
      core: "他站在边缘往下看——深渊没有回头看他。深渊不在乎你。这就是它最恐怖的地方：它甚至懒得吞噬你，你得自己跳。",
      coreEn: "He stood at the edge looking down — the abyss didn't look back. The abyss doesn't care about you. That's the most terrifying thing: it can't even be bothered to swallow you; you have to jump yourself.",
      reference: "《荒野猎人》(2015, 亚利桑德罗·冈萨雷斯) 悬崖坠马 / 《指环王》(2001, 彼得·杰克逊) 矿坑之桥深渊",
      referenceEn: "\"The Revenant\" (2015, Iñárritu) Cliff Horse Fall / \"LOTR\" (2001, Peter Jackson) Bridge of Khazad-dûm Abyss"
    },
    {
      id: "desert",
      name: "沙漠/戈壁",
      nameEn: "Desert",
      def: "一片几乎没有水源、植被和阴影的极度开阔平坦空间。地平线在所有方向上完全相同。白天温度可致命，夜间温度可致命。你的足迹会在几小时内被风抹平。",
      defEn: "An extremely open, flat space with almost no water, vegetation, or shade. The horizon is identical in all directions. Daytime temperature can be lethal; nighttime temperature can be lethal. Your footprints will be erased by wind within hours.",
      core: "他往任何方向走了一整天，风景没有变过一次。他开始怀疑不是他在走，是沙漠在原地旋转。沙漠是地球唯一坦白的表情——空，就是空。",
      coreEn: "He walked in any direction for an entire day; the scenery never changed once. He began suspecting it wasn't him walking, but the desert rotating in place. The desert is Earth's only honest expression — empty means empty.",
      reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 厄拉科斯沙海 / 《阿拉伯的劳伦斯》(1962, 大卫·里恩) 内夫得沙漠",
      referenceEn: "\"Dune\" (2021, Denis Villeneuve) Arrakis Sand Sea / \"Lawrence of Arabia\" (1962, David Lean) Nefud Desert"
    },
    {
      id: "open_sea",
      name: "大海/远洋",
      nameEn: "Open Sea",
      def: "一个360度没有固定参照物的流体平面。你脚下的东西不是地面，它在动。最近的陆地在视线之外。深度未知。天气由你无法控制的力量决定。",
      defEn: "A fluid plane with no fixed reference points in 360 degrees. What's beneath your feet isn't ground; it moves. The nearest land is beyond sight. Depth unknown. Weather decided by forces beyond your control.",
      core: "他第一天觉得大海是自由。第七天觉得大海是牢笼。第三十天他不再区分自由和牢笼了——因为那需要看见墙壁，而这里没有墙壁。",
      coreEn: "Day one he felt the sea was freedom. Day seven, a prison. Day thirty he stopped distinguishing — because distinction requires walls, and here there are none.",
      reference: "《少年派的奇幻漂流》(2012, 李安) 太平洋漂流 / 《老人与海》(文学) 独钓深海",
      referenceEn: "\"Life of Pi\" (2012, Ang Lee) Pacific Drift / \"The Old Man and the Sea\" (Literature) Deep Sea Alone"
    },
    {
      id: "river_bank",
      name: "河岸/水边",
      nameEn: "Riverbank / Waterside",
      def: "陆地与流水交汇的线性地带。水的流动方向是不可改变的。一侧是稳定的泥土，另一侧是持续运动的液体。你可以观看但不能阻止——水永远比你走得更快。",
      defEn: "A linear zone where land meets flowing water. The water's direction is unchangeable. One side: stable soil. The other: continuously moving liquid. You can watch but cannot stop it — water always moves faster than you.",
      core: "她坐在河边看了整整一个下午的水流。每一滴水都不同，但河看起来永远一样。她在想的不是河——她在想那些流走了再也回不来的东西。",
      coreEn: "She sat at the riverbank watching water flow for an entire afternoon. Every drop is different, but the river always looks the same. She wasn't thinking about the river — she was thinking about things that flowed away and never returned.",
      reference: "《大河恋》(1992, 罗伯特·雷德福) 蒙大拿河钓鱼 / 《现代启示录》(1979, 弗朗西斯·科波拉) 湄公河溯流",
      referenceEn: "\"A River Runs Through It\" (1992, Robert Redford) Montana Fly-fishing / \"Apocalypse Now\" (1979, Coppola) Mekong River Upstream"
    },
    {
      id: "mountain_summit",
      name: "山顶/山巅",
      nameEn: "Mountain Summit",
      def: "通过长时间的垂直攀升才能到达的一个极高点。空气稀薄。温度极低。四面是向下的斜面。你可以看见地平线的弯曲。在这里说话的声音会被风立刻撕碎。",
      defEn: "An extreme high point reachable only through prolonged vertical ascent. Thin air. Extreme cold. Downward slopes on all sides. You can see the horizon's curvature. Words spoken here are instantly torn apart by wind.",
      core: "他爬了七天终于站在了顶上。四面都是往下的路。他突然明白了一件事：山顶不是终点，是世界上最孤独的起点——因为从这里开始，每个方向都是下坡。",
      coreEn: "After seven days climbing he finally stood at the top. Every direction led down. He suddenly understood: the summit isn't the end; it's the world's loneliest beginning — because from here, every direction is downhill.",
      reference: "《绝命海拔》(2015, 巴塔萨·科马库) 珠峰登顶 / 《指环王3》(2003, 彼得·杰克逊) 末日火山口",
      referenceEn: "\"Everest\" (2015, Baltasar Kormákur) Everest Summit / \"Return of the King\" (2003, Peter Jackson) Mount Doom Crater"
    },
    {
      id: "ice_field",
      name: "冰原/雪野",
      nameEn: "Ice Field / Snow Plain",
      def: "一个被冰雪覆盖的无特征极端空间。白色从地面延续到天空，视觉上消除了地平线。温度持续低于人体生存阈值。脚印是你存在过的唯一证据，但它们正在被新雪填平。",
      defEn: "A featureless extreme space covered in ice and snow. White extends from ground to sky, visually erasing the horizon. Temperature continuously below human survival threshold. Footprints are the only proof you existed, but new snow is filling them.",
      core: "他在白茫茫的雪地里走了两天，回头发现自己的脚印已经被填平了。他还在走——但身后的世界不再承认他来过。",
      coreEn: "He walked through blinding white snow for two days, turned around to find his footprints already filled. He kept walking — but the world behind no longer acknowledged he'd been there.",
      reference: "《荒野猎人》(2015, 亚利桑德罗·冈萨雷斯) 冰原求生 / 《南极之恋》(2018, 吴有音) 南极冰盖",
      referenceEn: "\"The Revenant\" (2015, Iñárritu) Ice Field Survival / \"Till the End of the World\" (2018, Wu Youyin) Antarctic Ice Sheet"
    },
    {
      id: "swamp_marsh",
      name: "沼泽/湿地",
      nameEn: "Swamp / Marsh",
      def: "地面和水面之间没有明确边界的空间。脚下看起来是实地但踩下去会下沉。空气潮湿到饱和。能见度被雾气和植被切割到极低。每一步都可能是最后一步。",
      defEn: "A space with no clear boundary between ground and water surface. What looks like solid ground sinks when stepped on. Air is saturated with humidity. Visibility cut to minimum by fog and vegetation. Every step could be the last.",
      core: "他以为那是一块石头，踩上去的时候脚直接没入了泥浆。他用了十五分钟才把自己拔出来——沼泽不会追你，它只需要你走错一步。",
      coreEn: "He thought it was a rock; when he stepped on it, his foot sank straight into mud. It took fifteen minutes to pull himself out — swamps don't chase you; they just need you to take one wrong step.",
      reference: "《指环王2》(2002, 彼得·杰克逊) 死亡沼泽 / 《非洲女王号》(1951, 约翰·休斯顿) 刚果河沼泽",
      referenceEn: "\"The Two Towers\" (2002, Peter Jackson) Dead Marshes / \"The African Queen\" (1951, John Huston) Congo River Swamp"
    },
    {
      id: "volcano_geothermal",
      name: "火山口/地热区",
      nameEn: "Volcano / Geothermal Zone",
      def: "地球内部的熔融物质通过地表裂缝向外喷射或渗出的区域。地面温度极高且不可预测。硫磺气味。蒸汽从岩石缝隙中冒出。你脚下的地壳是一层薄到可以碎裂的外壳。",
      defEn: "A zone where Earth's interior molten matter ejects or seeps through surface cracks. Ground temperature extremely high and unpredictable. Sulfur smell. Steam rises from rock fissures. The crust beneath your feet is a shell thin enough to shatter.",
      core: "他站在火山口的边缘往下看——那是地球的嘴巴，正在慢吞吞地咀嚼一切。橙色的液体比任何人类制造的光都更亮。他离创世纪只有三步远。",
      coreEn: "He stood at the volcano's rim looking down — Earth's mouth, slowly chewing everything. The orange liquid was brighter than any human-made light. He was three steps from Genesis.",
      reference: "《指环王3》(2003, 彼得·杰克逊) 末日火山 / 《乔乔的异想世界》(火山纪录片) 冰岛地热裂缝",
      referenceEn: "\"Return of the King\" (2003, Peter Jackson) Mount Doom / Iceland Geothermal Fissures (Documentary)"
    }
  ]
};
