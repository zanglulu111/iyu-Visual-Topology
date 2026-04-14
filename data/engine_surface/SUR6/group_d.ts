import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_D: LibraryCategoryDef = {
  id: "loc_medical_body",
  name: "04. 医疗与身体空间 (Medical & Body)",
  nameEn: "Medical & Body Spaces",
  desc: "承载诊断、手术、隔离、死亡和身体被他人合法触碰的功能性空间。空间通过无影灯、消毒气味和仪器的蜂鸣声，将人体从'人'降格为'病例'。",
  items: [
    {
      id: "hospital_ward",
      name: "病房",
      nameEn: "Hospital Ward",
      def: "多张可升降的窄床被布帘或矮墙隔开的半开放空间。每张床旁有监护仪器。人体在此处被强制水平化——站着进来、躺着离开。探视时间有严格限制。",
      defEn: "A semi-open space with multiple adjustable narrow beds separated by curtains or low walls. Monitoring equipment beside each bed. Bodies here are forcibly horizontalized — entering upright, leaving prone. Visiting hours are strictly limited.",
      core: "他隔着一道帘子听见隔壁床在咳血——帘子薄到能听见一切，但厚到让你可以假装什么都没听见。病房的核心功能是让痛苦合法地隐形。",
      coreEn: "He heard the next bed coughing blood through a curtain — thin enough to hear everything, thick enough to pretend he heard nothing. The ward's core function is making pain legally invisible.",
      reference: "《潜水钟与蝴蝶》(2007, 朱利安·施纳贝尔) 全瘫病房 / 《爱》(2012, 迈克尔·哈内克) 卧室变病房",
      referenceEn: "\"The Diving Bell and the Butterfly\" (2007, Julian Schnabel) Paralysis Ward / \"Amour\" (2012, Michael Haneke) Bedroom-to-Ward"
    },
    {
      id: "operating_theater",
      name: "手术室/解剖室",
      nameEn: "Operating Theater",
      def: "一个被无影灯从正上方照亮的极高亮度空间。中央是一张金属台面。周围的人全部穿着相同颜色的覆盖物，只露出眼睛。台面上的人是唯一的裸露者。",
      defEn: "An extremely high-brightness space illuminated by shadowless lights from directly above. Center: a metal table. Everyone around wears identical-colored coverings, only eyes visible. The person on the table is the only one exposed.",
      core: "他是房间里唯一没穿衣服的人，也是房间里唯一不被允许说话的人。无影灯把他的影子都消灭了——在这张台面上，他连影子都不配拥有。",
      coreEn: "He's the only naked person in the room, and the only one not allowed to speak. The shadowless light killed even his shadow — on this table, he doesn't even deserve a shadow.",
      reference: "《人体蜈蚣》(2009, 汤姆·西克斯) 地下手术室 / 《异形》(1979, 雷德利·斯科特) 诺斯特罗莫号医疗舱",
      referenceEn: "\"The Human Centipede\" (2009, Tom Six) Basement Surgery / \"Alien\" (1979, Ridley Scott) Nostromo Medical Bay"
    },
    {
      id: "quarantine_zone",
      name: "隔离区",
      nameEn: "Quarantine Zone",
      def: "一个与外部世界通过物理屏障（密封门、负压通道、防护服）完全隔绝的空间。进入需要经过消毒程序，离开需要经过审批程序。里面的人无法自主决定何时出去。",
      defEn: "A space completely isolated from the outside world through physical barriers (sealed doors, negative-pressure corridors, protective suits). Entry requires decontamination procedures; exit requires approval. Those inside cannot decide when to leave.",
      core: "他敲了三天的门，门外的人说再等一次检测结果。他开始分不清——是他被隔离在里面，还是世界被隔离在外面。",
      coreEn: "He knocked for three days; people outside said to wait for one more test result. He couldn't tell anymore — was he isolated inside, or was the world isolated outside.",
      reference: "《传染病》(2011, 史蒂文·索德伯格) CDC隔离区 / 《十二猴子》(1995, 特瑞·吉列姆) 地下隔离设施",
      referenceEn: "\"Contagion\" (2011, Steven Soderbergh) CDC Quarantine / \"12 Monkeys\" (1995, Terry Gilliam) Underground Quarantine"
    },
    {
      id: "asylum",
      name: "精神病院",
      nameEn: "Asylum",
      def: "一个以'治疗'为名将人合法囚禁的空间。走廊很长，门上有观察孔，窗户的玻璃是加厚的。你说自己没疯，恰恰被视为你疯了的最好证据。",
      defEn: "A space that legally imprisons people in the name of 'treatment.' Long corridors, peepholes on doors, reinforced window glass. Claiming you're sane is taken as the best evidence you're insane.",
      core: "他对医生说我没有病。医生在笔记本上写道：'患者否认病情——典型症状。'在这个空间里，清醒本身就是最严重的疾病。",
      coreEn: "He told the doctor: I'm not sick. The doctor wrote: 'Patient denies condition — typical symptom.' In this space, sanity itself is the most severe illness.",
      reference: "《飞越疯人院》(1975, 米洛斯·福尔曼) 州立精神病院 / 《禁闭岛》(2010, 马丁·斯科塞斯) 阿什克利夫灯塔",
      referenceEn: "\"One Flew Over the Cuckoo's Nest\" (1975, Forman) State Mental Hospital / \"Shutter Island\" (2010, Scorsese) Ashecliffe Lighthouse"
    },
    {
      id: "morgue",
      name: "太平间/停尸房",
      nameEn: "Morgue",
      def: "一个被刻意降温的空间。金属抽屉从墙壁中滑出，每个抽屉的尺寸恰好等于一具人体。空气中有福尔马林和金属的气味。灯光是蓝白色的。时间在此停止。",
      defEn: "A deliberately chilled space. Metal drawers slide from walls, each sized exactly for one human body. Air smells of formalin and metal. Lighting is blue-white. Time stops here.",
      core: "他拉开了第三个抽屉，在白布下面认出了那张脸。抽屉滑进去的时候发出的声音，和关上厨房橱柜完全一样——他差点吐出来。",
      coreEn: "He pulled open the third drawer and recognized the face under the white cloth. The sound the drawer made sliding back was identical to closing a kitchen cabinet — he nearly vomited.",
      reference: "《七宗罪》(1995, 大卫·芬奇) 地下停尸房 / 《沉默的羔羊》(1991, 乔纳森·德米) FBI验尸室",
      referenceEn: "\"Se7en\" (1995, David Fincher) Underground Morgue / \"Silence of the Lambs\" (1991, Jonathan Demme) FBI Autopsy Room"
    },
    {
      id: "waiting_room_medical",
      name: "候诊室",
      nameEn: "Waiting Room",
      def: "一排塑料椅子沿墙排列的中型空间。叫号屏幕上的数字缓慢跳动。空气中混合着消毒水和焦虑的体味。每个人都在避免和旁边的人目光接触。",
      defEn: "A medium space with plastic chairs lining the walls. Numbers on the call screen change slowly. Air mixes disinfectant and the body odor of anxiety. Everyone avoids eye contact with the person beside them.",
      core: "他已经等了四个小时。每叫一个号，他都会心跳加速——不是因为轮到他了，是因为又轮到了别人。等待是一种比疾病更慢性的折磨。",
      coreEn: "He'd waited four hours. Every number called, his heart raced — not because it was his turn, but because it was someone else's again. Waiting is a more chronic torment than the disease.",
      reference: "《遗传厄运》(2018, 阿里·艾斯特) 诊所走廊 / 《活着》(1994, 张艺谋) 县城卫生所",
      referenceEn: "\"Hereditary\" (2018, Ari Aster) Clinic Corridor / \"To Live\" (1994, Zhang Yimou) County Clinic"
    },
    {
      id: "birthing_room",
      name: "产房",
      nameEn: "Birthing Room",
      def: "一个女性身体在极度疼痛中被多名陌生人围观的半公开空间。床架上有金属把手供抓握。灯光刺眼。结局只有两种：一声哭喊，或者沉默。",
      defEn: "A semi-public space where a female body in extreme pain is surrounded by multiple strangers. Metal handles on the bed frame for gripping. Blinding lights. Only two endings: a cry, or silence.",
      core: "她用尽了全身力气，听到了一声哭喊——不是她的，是新来的那个。产房是唯一一个尖叫声代表好消息的地方。",
      coreEn: "She used every ounce of strength and heard a cry — not hers, but the new arrival's. The birthing room is the only place where screaming means good news.",
      reference: "《罗马》(2018, 阿方索·卡隆) 产房长镜头 / 《生命之树》(2011, 泰伦斯·马力克) 分娩场景",
      referenceEn: "\"Roma\" (2018, Alfonso Cuarón) Birthing Room Long Take / \"The Tree of Life\" (2011, Terrence Malick) Birth Scene"
    },
    {
      id: "deathbed",
      name: "临终病床",
      nameEn: "Deathbed",
      def: "一张被推到房间角落或靠窗位置的单人床。监护仪的声音从规律的哔哔变成了不规律的哔——哔。周围的椅子上坐着等待的人。空间的功能是把离别压缩进最后一平方米。",
      defEn: "A single bed pushed to the room's corner or window. The monitor's sound shifts from regular beeps to irregular beep — beep. Waiting people sit in surrounding chairs. The space's function: compressing farewell into the last square meter.",
      core: "他握着那只手，看着监护仪上的线条变得越来越平——他知道应该说点什么，但他发现：告别是世界上唯一无法排练的台词。",
      coreEn: "He held that hand, watching the monitor line flatten — he knew he should say something, but discovered: farewell is the world's only unrehearsable line.",
      reference: "《爱》(2012, 迈克尔·哈内克) 巴黎公寓临终 / 《入殓师》(2008, 的田洋次) 亡者告别仪式",
      referenceEn: "\"Amour\" (2012, Michael Haneke) Paris Apartment Deathbed / \"Departures\" (2008, Yōjirō Takita) Last Rites"
    },
    {
      id: "pharmacy_dispensary",
      name: "药房/配药窗口",
      nameEn: "Pharmacy / Dispensary",
      def: "一面带有小窗口的厚实隔墙。窗口后面是你看不到的药架。你递进一张纸条，窗口递出一袋你不确定是否有效的东西。权力关系通过窗口的大小被精确校准。",
      defEn: "A thick partition wall with a small window. Behind the window: shelves you cannot see. You pass in a slip of paper; the window passes out a bag of something you're unsure works. Power relations calibrated precisely by the window's size.",
      core: "他每天来这个窗口领药。药片是白色的，和他吃的饭一样没有味道。窗口后面那个人从来没叫过他的名字，只叫他的编号。",
      coreEn: "He came to this window daily for medication. The pills were white, tasteless like his meals. The person behind the window never called his name, only his number.",
      reference: "《飞越疯人院》(1975, 米洛斯·福尔曼) 护士站药窗 / 《达拉斯买家俱乐部》(2013, 让-马克·瓦雷) 非法药物分发点",
      referenceEn: "\"One Flew Over the Cuckoo's Nest\" (1975, Forman) Nurse Station Window / \"Dallas Buyers Club\" (2013, Jean-Marc Vallée) Illegal Drug Distribution"
    },
    {
      id: "mirror_medical",
      name: "诊疗镜前",
      nameEn: "Medical Mirror",
      def: "一面被安装在特定位置的反射面，功能是让人不得不直视自己身体的伤口、变异或衰老。灯光的色温被调至不加修饰的冷白色。",
      defEn: "A reflective surface installed in a specific position, functioning to force a person to directly face their body's wounds, mutations, or aging. Light color temperature is set to unflattering cold white.",
      core: "她拆掉绷带后看了一眼镜子——镜子里的那张脸她认不出了。她不是在看自己，是在看时间对肉体做过的所有暴行的证据。",
      coreEn: "She removed the bandage and glanced at the mirror — she couldn't recognize the face inside. She wasn't looking at herself, but at evidence of every atrocity time had committed against flesh.",
      reference: "《象人》(1980, 大卫·林奇) 约翰·梅里克照镜子 / 《黑天鹅》(2010, 达伦·阿罗诺夫斯基) 化妆间镜子",
      referenceEn: "\"The Elephant Man\" (1980, David Lynch) John Merrick in the Mirror / \"Black Swan\" (2010, Darren Aronofsky) Dressing Room Mirror"
    }
  ]
};
