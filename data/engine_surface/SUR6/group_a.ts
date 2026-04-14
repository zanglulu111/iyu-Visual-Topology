import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_A: LibraryCategoryDef = {
  id: "loc_power_ritual",
  name: "01. 权力与仪式空间 (Power & Ritual)",
  nameEn: "Power & Ritual Spaces",
  desc: "承载统治、审判、加冕与宣誓的功能性空间。权力在此通过建筑的纵轴进行物理展演——讲台高于听众，王座高于朝臣，绞刑架高于囚犯。",
  items: [
    {
      id: "throne_room",
      name: "王座厅",
      nameEn: "Throne Room",
      def: "一个通过纵深、高差和视觉焦点将所有在场者的目光引向唯一中心座位的单轴对称大厅。天花板远高于人体比例。入口到王座之间的距离被故意拉长。",
      defEn: "A single-axis symmetrical hall directing all gazes toward one central seat through depth, elevation difference, and visual focus. The ceiling far exceeds human scale. The distance from entrance to throne is deliberately elongated.",
      core: "走进来的人必须低着头走整整三十秒才能到达——三十秒的沉默足够让任何人的膝盖开始发软。空间本身就是第一道酷刑。",
      coreEn: "Anyone entering must walk with head bowed for a full thirty seconds to reach it — thirty seconds of silence is enough to soften any knees. The space itself is the first torture.",
      reference: "《权力的游戏》(2011, 剧集) 铁王座大厅 / 《角斗士》(2000, 雷德利·斯科特) 罗马元老院",
      referenceEn: "\"Game of Thrones\" (2011, Series) Iron Throne Hall / \"Gladiator\" (2000, Ridley Scott) Roman Senate"
    },
    {
      id: "courtroom",
      name: "法庭",
      nameEn: "Courtroom",
      def: "通过木制隔栏将空间严格划分为审判者、被告、旁听席三个不可逾越区域的封闭空间。法官席始终居高临下。被告席被四面围合。",
      defEn: "An enclosed space rigidly divided by wooden railings into three non-crossable zones: judge, defendant, and gallery. The bench is always elevated. The dock is enclosed on all sides.",
      core: "他站在被告席上，发现所有的出口都在他够不到的地方。这个房间的设计意图只有一个：让你在开口之前就已经认罪了。",
      coreEn: "He stood in the dock and found every exit was beyond his reach. This room was designed with one purpose: to make you confess before you even open your mouth.",
      reference: "《十二怒汉》(1957, 西德尼·吕美特) 陪审团室 / 《审判》(1962, 奥森·威尔斯) 卡夫卡式法庭",
      referenceEn: "\"12 Angry Men\" (1957, Sidney Lumet) Jury Room / \"The Trial\" (1962, Orson Welles) Kafkaesque Court"
    },
    {
      id: "execution_platform",
      name: "刑场",
      nameEn: "Execution Ground",
      def: "一个被刻意抬高、四面向公众敞开的临时或永久平台。功能单一：让一个人的死亡被最大数量的观众目击。",
      defEn: "A deliberately elevated platform, open on all sides to the public. Single function: ensuring one person's death is witnessed by the maximum number of spectators.",
      core: "台上只有一个人，台下有一万双眼睛。他到死都分不清，围观者是来看正义的，还是来看表演的。",
      coreEn: "One person on the platform, ten thousand pairs of eyes below. Until death he couldn't tell whether the crowd came for justice or for the show.",
      reference: "《勇敢的心》(1995, 梅尔·吉布森) 华莱士的行刑台 / 《巴里·林登》(1975, 斯坦利·库布里克) 公开绞刑",
      referenceEn: "\"Braveheart\" (1995, Mel Gibson) Wallace's Scaffold / \"Barry Lyndon\" (1975, Stanley Kubrick) Public Hanging"
    },
    {
      id: "council_chamber",
      name: "议事厅",
      nameEn: "Council Chamber",
      def: "一张巨大的桌子或环形座席将多个权力持有者强行框在一个视线互相可及的封闭空间中。没有一个座位能完全背对所有人。",
      defEn: "A huge table or circular seating arrangement forcibly frames multiple power holders in an enclosed space with mutual line of sight. No seat can fully turn its back on everyone.",
      core: "每个人都在微笑，每个人都在数对面的人眨了几次眼。桌子上摆的是酒杯，桌子下摆的是匕首。",
      coreEn: "Everyone smiles, everyone counts how many times the person opposite blinks. Wine glasses on the table, daggers beneath it.",
      reference: "《教父》(1972, 弗朗西斯·科波拉) 五大家族会议 / 《权力的游戏》(2011, 剧集) 御前小议会",
      referenceEn: "\"The Godfather\" (1972, Coppola) Five Families Meeting / \"Game of Thrones\" (2011, Series) Small Council"
    },
    {
      id: "coronation_altar",
      name: "加冕祭坛",
      nameEn: "Coronation Altar",
      def: "位于信仰空间与权力空间交叉点上的一个微型平台。仪式要求接受者必须跪下，由高于自身头部的权威将信物置于其颅顶。",
      defEn: "A small platform at the intersection of sacred and political space. The ceremony requires the recipient to kneel while an authority above places a token atop their crown.",
      core: "他跪下去的时候是一个人，站起来的时候是另一个人。王冠落在头顶的那一秒，他听到的不是掌声，是锁链扣上的声音。",
      coreEn: "He knelt as one person, rose as another. The second the crown touched his head, he didn't hear applause — he heard chains locking shut.",
      reference: "《拿破仑》(2023, 雷德利·斯科特) 巴黎圣母院加冕 / 《指环王3》(2003, 彼得·杰克逊) 阿拉贡加冕",
      referenceEn: "\"Napoleon\" (2023, Ridley Scott) Notre-Dame Coronation / \"Return of the King\" (2003, Peter Jackson) Aragorn's Coronation"
    },
    {
      id: "balcony_podium",
      name: "阳台/高台讲坛",
      nameEn: "Balcony Podium",
      def: "一个从建筑立面向外悬挑的平台，使站立者的身体高于所有地面上的人群。仰角观看制造天然的崇拜视角。",
      defEn: "A platform cantilevered from a building facade, placing the speaker's body above all ground-level crowds. The upward viewing angle creates a natural worship perspective.",
      core: "他往下看，一万张仰起的脸在等他开口。他还没说话，建筑已经替他说了第一句：我比你高，所以我是对的。",
      coreEn: "He looked down, ten thousand upturned faces waiting for him to speak. Before he said a word, the architecture spoke first: I'm above you, therefore I'm right.",
      reference: "《大独裁者》(1940, 查理·卓别林) 兴凯尔的阳台演讲 / 《星球大战3》(2005, 乔治·卢卡斯) 帕尔帕廷宣布帝国",
      referenceEn: "\"The Great Dictator\" (1940, Charlie Chaplin) Hynkel's Balcony / \"Revenge of the Sith\" (2005, George Lucas) Palpatine Declares the Empire"
    },
    {
      id: "war_room",
      name: "作战指挥室",
      nameEn: "War Room",
      def: "一个被地图、沙盘或屏幕覆盖的密闭空间。所有的门可以从内部锁死。此空间内做出的每一个决定，都会在外部世界变成尸体。",
      defEn: "An enclosed space covered by maps, sand tables, or screens. All doors can be locked from inside. Every decision made within this space becomes corpses in the outside world.",
      core: "他推动了沙盘上的一枚棋子——三百公里外，一座桥被炸了，桥上有七十二个老百姓。棋子不会尖叫。",
      coreEn: "He moved a piece on the sand table — 300 kilometers away, a bridge was blown up with 72 civilians on it. Chess pieces don't scream.",
      reference: "《奇爱博士》(1964, 斯坦利·库布里克) 五角大楼战争室 / 《至暗时刻》(2017, 乔·赖特) 丘吉尔的地下指挥部",
      referenceEn: "\"Dr. Strangelove\" (1964, Stanley Kubrick) Pentagon War Room / \"Darkest Hour\" (2017, Joe Wright) Churchill's Underground HQ"
    },
    {
      id: "parade_ground",
      name: "阅兵广场",
      nameEn: "Parade Ground",
      def: "一块被刻意清空的巨大平坦空间。其唯一功能是让大量人体排列成几何图案，被一个或几个站在最高处的人检阅。",
      defEn: "A deliberately cleared, vast flat space. Its sole function: arranging masses of bodies into geometric patterns to be inspected by one or a few standing at the highest point.",
      core: "一万个人站成方阵，心跳同步。从高处俯瞰，他们不再是人，是像素。广场的终极功能是把人变成风景。",
      coreEn: "Ten thousand people standing in formation, heartbeats synchronized. From above, they're no longer people, they're pixels. The plaza's ultimate function is turning humans into scenery.",
      reference: "《意志的胜利》(1935, 莱妮·里芬施塔尔) 纽伦堡 / 《星球大战4》(1977, 乔治·卢卡斯) 雅汶IV受勋仪式",
      referenceEn: "\"Triumph of the Will\" (1935, Riefenstahl) Nuremberg / \"A New Hope\" (1977, George Lucas) Yavin IV Medal Ceremony"
    },
    {
      id: "audience_chamber",
      name: "觐见走廊",
      nameEn: "Audience Corridor",
      def: "一条极长的、两侧立有卫兵或柱列的通道。来访者必须在所有人的注视下，沿一条不可偏离的直线走向尽头的权力中心。",
      defEn: "An extremely long corridor flanked by guards or columns. Visitors must walk along an undeviateable straight line toward the power center at its end, under everyone's gaze.",
      core: "走廊的长度是经过精确计算的——恰好够让你在走到尽头之前，把所有的骄傲磨碎在鞋底。",
      coreEn: "The corridor's length is precisely calculated — just enough to grind all your pride to dust beneath your soles before you reach the end.",
      reference: "《末代皇帝》(1987, 贝纳尔多·贝托鲁奇) 紫禁城太和殿 / 《沙丘》(2021, 丹尼斯·维伦纽瓦) 皇帝觐见厅",
      referenceEn: "\"The Last Emperor\" (1987, Bernardo Bertolucci) Forbidden City / \"Dune\" (2021, Denis Villeneuve) Emperor's Audience Hall"
    },
    {
      id: "treaty_table",
      name: "签约桌",
      nameEn: "Treaty Table",
      def: "一张桌子，两把椅子，一支笔，一份文件。空间被压缩到极致——整个世界的命运取决于笔尖落在纸上的那半秒钟。",
      defEn: "One table, two chairs, a pen, a document. Space compressed to the extreme — the entire world's fate depends on the half-second the pen tip touches paper.",
      core: "他在签名之前最后看了对面一眼——对面的人也在微笑。两个微笑之间，是一千万条人命。",
      coreEn: "He glanced once more at the person across before signing — that person was smiling too. Between two smiles lay ten million lives.",
      reference: "《慕尼黑协定》(历史) 张伯伦签约 / 《间谍之桥》(2015, 史蒂文·斯皮尔伯格) 格利尼克桥交换",
      referenceEn: "\"Munich Agreement\" (History) Chamberlain Signing / \"Bridge of Spies\" (2015, Spielberg) Glienicke Bridge Exchange"
    }
  ]
};
