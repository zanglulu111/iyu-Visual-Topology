import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_B: LibraryCategoryDef = {
  id: "loc_sacred_faith",
  name: "02. 信仰与神圣空间 (Sacred & Faith)",
  nameEn: "Sacred & Faith Spaces",
  desc: "承载祈祷、忏悔、葬礼与灵魂审判的功能性空间。建筑通过垂直轴线、光线控制和声学放大，制造出一种让人体自觉渺小的超人格压迫感。",
  items: [
    {
      id: "cathedral_nave",
      name: "大殿/中殿",
      nameEn: "Cathedral Nave",
      def: "一个屋顶远高于人体需要的巨型室内空间。垂直轴线将视线强行引向天花板。光线从高处倾泻而下。声音被穹顶放大后回旋，使任何低语都变成回声。",
      defEn: "A massive interior space with a ceiling far exceeding human needs. The vertical axis forces gazes upward. Light pours from above. Sound is amplified by the vault and spirals, turning whispers into echoes.",
      core: "他抬头看了一眼穹顶，突然觉得自己像一只站在碗底的蚂蚁。他不知道自己在向谁祈祷——但建筑替他做好了跪下的准备。",
      coreEn: "He looked up at the vault and suddenly felt like an ant at the bottom of a bowl. He didn't know who he was praying to — but the architecture had prepared him to kneel.",
      reference: "《巴黎圣母院》(1956, 让·德拉努瓦) 大教堂中殿 / 《沉默》(2016, 马丁·斯科塞斯) 日本隐藏教堂",
      referenceEn: "\"The Hunchback of Notre Dame\" (1956, Jean Delannoy) Cathedral Nave / \"Silence\" (2016, Martin Scorsese) Hidden Japanese Church"
    },
    {
      id: "confessional",
      name: "忏悔室",
      nameEn: "Confessional",
      def: "一个仅容一人的极小密封隔间，通过一扇带有格栅的窗口与隔壁连通。说话者看不见听话者的脸，但听话者能听见一切。",
      defEn: "An extremely small sealed booth for one person, connected to the adjacent booth through a grilled window. The speaker cannot see the listener's face, but the listener hears everything.",
      core: "他对着一面看不见脸的格栅说出了一生中最黑暗的秘密——他不知道的是，格栅后面那个人和他的仇人共用同一张嘴。",
      coreEn: "He told his darkest secret to a faceless grille — what he didn't know was that the person behind shared a mouth with his enemy.",
      reference: "《教父3》(1990, 弗朗西斯·科波拉) 迈克尔的最终忏悔 / 《米勒的十字路口》(1990, 科恩兄弟) 忏悔室密谋",
      referenceEn: "\"The Godfather Part III\" (1990, Coppola) Michael's Final Confession / \"Miller's Crossing\" (1990, Coen Brothers) Confessional Plot"
    },
    {
      id: "graveyard",
      name: "墓地",
      nameEn: "Graveyard",
      def: "大量相似形状的竖直石碑以网格或随机方式排列在露天土地上。每一块石碑下都有一个不再说话的人。泥土是松软的。",
      defEn: "Numerous similar upright stones arranged in grids or randomly on open ground. Beneath each stone lies a person who no longer speaks. The soil is soft.",
      core: "他来看望的是一个名字。名字刻在石头上，石头插在泥土里，泥土盖在棺材上，棺材里什么都没有了——除了他再也说不出口的道歉。",
      coreEn: "He came to visit a name. The name carved in stone, stone stuck in soil, soil covering the coffin, coffin holding nothing — except an apology he could never speak again.",
      reference: "《辛德勒的名单》(1993, 史蒂文·斯皮尔伯格) 犹太墓园 / 《哈姆雷特》(戏剧) 墓地掘墓人场景",
      referenceEn: "\"Schindler's List\" (1993, Spielberg) Jewish Cemetery / \"Hamlet\" (Drama) Gravedigger Scene"
    },
    {
      id: "altar_sacrificial",
      name: "祭坛",
      nameEn: "Sacrificial Altar",
      def: "一个被刻意抬高至腰部或胸部高度的水平平台，通常位于所有视线的焦点处。表面光滑，边缘有凹槽。设计目的是让一个横卧的身体被所有站立的人俯视。",
      defEn: "A horizontal platform deliberately raised to waist or chest height, usually at the focal point of all sight lines. Smooth surface, grooved edges. Designed so a horizontal body is looked down upon by all standing people.",
      core: "躺在上面的人看到的最后一个画面是天花板——周围所有的脸都在往下看，但没有一张脸打算阻止接下来发生的事。",
      coreEn: "The last thing the person lying on it sees is the ceiling — all surrounding faces look down, but not one intends to stop what happens next.",
      reference: "《现代启示录》(1979, 弗朗西斯·科波拉) 库尔兹的祭杀仪式 / 《仲夏夜惊魂》(2019, 阿里·艾斯特) 花冠祭典",
      referenceEn: "\"Apocalypse Now\" (1979, Coppola) Kurtz's Sacrificial Ritual / \"Midsommar\" (2019, Ari Aster) May Queen Ceremony"
    },
    {
      id: "bell_tower",
      name: "钟塔/宣礼塔",
      nameEn: "Bell Tower / Minaret",
      def: "一个从建筑群中拔地而起的垂直圆柱或方柱。内部是螺旋上升的狭窄楼梯。顶部悬挂着一个能让声波覆盖整个城镇的巨型发声装置。",
      defEn: "A vertical cylinder or column rising from a building complex. Inside is a narrow spiraling staircase. At the top hangs a massive sound-emitting device whose waves cover the entire town.",
      core: "钟声响起来的时候，所有人都停下了手中的事。没有人问钟为谁而鸣——因为钟从来不解释，它只负责中断你的一切。",
      coreEn: "When the bell rings, everyone stops what they're doing. No one asks for whom the bell tolls — because bells never explain; they only interrupt everything.",
      reference: "《巴黎圣母院》(1996, 迪士尼版) 卡西莫多的钟楼 / 《迷魂记》(1958, 阿尔弗雷德·希区柯克) 教堂钟塔",
      referenceEn: "\"The Hunchback of Notre Dame\" (1996, Disney) Quasimodo's Bell Tower / \"Vertigo\" (1958, Hitchcock) Church Tower"
    },
    {
      id: "catacombs",
      name: "地下墓穴",
      nameEn: "Catacombs",
      def: "在地表之下挖掘的多层隧道网络，墙壁上嵌满或堆叠着人类遗骨。空气凝滞，光线来源唯一且随时可以熄灭。方向感在第三个转弯后完全丧失。",
      defEn: "Multi-level tunnel networks dug beneath the surface, walls embedded or stacked with human remains. Air is stagnant; light source is singular and can extinguish at any time. Orientation is completely lost after the third turn.",
      core: "他举着火把走进第三层的时候，发现墙壁上的头骨都在朝同一个方向'看'——那是出口的反方向。死人比他更清楚路线。",
      coreEn: "When he entered the third level with his torch, he found all skulls on the wall 'looking' the same direction — opposite the exit. The dead knew the route better than he did.",
      reference: "《夺宝奇兵3》(1989, 史蒂文·斯皮尔伯格) 威尼斯地下墓穴 / 《地下墓穴》(2014, 约翰·埃里克·道德尔) 巴黎地下",
      referenceEn: "\"Indiana Jones and the Last Crusade\" (1989, Spielberg) Venice Catacombs / \"As Above, So Below\" (2014, John Erick Dowdle) Paris Underground"
    },
    {
      id: "pilgrimage_road",
      name: "朝圣之路",
      nameEn: "Pilgrimage Road",
      def: "一条从起点到神圣目的地之间的物理路径。路面被无数双脚磨出了凹痕。沿途没有岔路——你只能往前走或往回走，不能偏离。",
      defEn: "A physical path from start to sacred destination. The surface is worn concave by countless feet. No forks along the way — you can only walk forward or back, never deviate.",
      core: "他走了七百公里，鞋底磨穿了三双。到达终点的那一刻他发现——他不是在走向上帝，是在走回自己。",
      coreEn: "He walked 700 kilometers, wore through three pairs of soles. The moment he arrived at the end he realized — he wasn't walking toward God, but back to himself.",
      reference: "《朝圣之路》(2010, 埃米利奥·埃斯特维兹) 圣地亚哥之路 / 《指环王》(2001, 彼得·杰克逊) 前往末日山的路",
      referenceEn: "\"The Way\" (2010, Emilio Estevez) Camino de Santiago / \"The Lord of the Rings\" (2001, Peter Jackson) Road to Mount Doom"
    },
    {
      id: "oracle_chamber",
      name: "神谕室",
      nameEn: "Oracle Chamber",
      def: "一个位于建筑最深处或最高处的极小密室。入口设计为必须弯腰或侧身才能通过。室内只有一个座位或一个声孔。空间拒绝一切多余的人。",
      defEn: "An extremely small sealed room at the deepest or highest point of a structure. The entrance is designed so one must stoop or turn sideways to pass. Inside, only one seat or one voice hole. The space rejects all excess persons.",
      core: "他等了三天才被允许进入。里面只坐着一个人，那个人只说了一句话。他用余生去理解那句话——但永远不确定自己听到的是真相还是回声。",
      coreEn: "He waited three days to be granted entry. Inside sat one person who spoke one sentence. He spent his remaining life understanding that sentence — never certain if he heard truth or echo.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 先知的公寓 / 《300》(2006, 扎克·施奈德) 德尔斐神谕",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) The Oracle's Apartment / \"300\" (2006, Zack Snyder) Delphi Oracle"
    },
    {
      id: "cremation_pyre",
      name: "火葬柴堆/焚化场",
      nameEn: "Funeral Pyre",
      def: "一个由可燃材料堆叠成人体尺寸的临时平台。一旦点燃，不可逆转。火焰的温度和光亮使围观者不得不退后，形成以尸体为中心的空白圆环。",
      defEn: "A temporary platform of combustible materials stacked to human body size. Once lit, irreversible. The fire's heat and brightness force onlookers to step back, forming a blank ring centered on the body.",
      core: "火焰升起来的时候，他闻到的不是烟味，是记忆在蒸发的味道。每一个看火的人的脸上都在跳动着同一个问题：下一个是谁？",
      coreEn: "When the flames rose, what he smelled wasn't smoke, but the scent of memory evaporating. On every fire-watcher's face flickered the same question: who's next?",
      reference: "《星球大战6》(1983, 理查德·马昆德) 达斯·维达的火葬 / 《权力的游戏》(2011, 剧集) 卡尔·卓戈的火葬",
      referenceEn: "\"Return of the Jedi\" (1983, Richard Marquand) Vader's Pyre / \"Game of Thrones\" (2011, Series) Khal Drogo's Funeral Pyre"
    },
    {
      id: "sacred_pool",
      name: "圣洗池/净化之水",
      nameEn: "Sacred Pool",
      def: "一个嵌入地面或建筑中的水体容器，面积恰好容纳一个人体浸入。水面静止，映射出进入者的倒影。进入前必须脱去某些覆盖物。",
      defEn: "A water vessel embedded in ground or architecture, sized to fit exactly one body's submersion. The surface is still, reflecting the entrant's mirror image. Some coverings must be removed before entry.",
      core: "他脱掉衣服走进水里的时候是一个罪人，从水里站起来的时候应该是一个新人——但水是冰冷的，而罪是温暖的。他在水里站了很久。",
      coreEn: "He undressed and entered the water as a sinner, and should rise as a new person — but the water was cold, and the sin was warm. He stood in the water for a long time.",
      reference: "《教父》(1972, 弗朗西斯·科波拉) 洗礼蒙太奇 / 《银翼杀手2049》(2017, 丹尼斯·维伦纽瓦) 记忆水池",
      referenceEn: "\"The Godfather\" (1972, Coppola) Baptism Montage / \"Blade Runner 2049\" (2017, Denis Villeneuve) Memory Pool"
    }
  ]
};
