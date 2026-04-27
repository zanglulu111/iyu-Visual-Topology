import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_C: LibraryCategoryDef = {
  id: "loc_discipline_education",
  name: "03. 教育与训练空间 (Education & Training)",
  nameEn: "Education & Training Spaces",
  desc: "教室、考场、操场、图书馆、宿舍走廊等学习、考核、训练和排队可发生的空间。只给制度化场地。",
  descEn: "Classrooms, exam rooms, yards, libraries, dorm corridors, and related places for study, assessment, training, or queues. Provides institutional locations only.",
  items: [
    spaceContainerItem("sur6_classroom", "标准教室", "Classroom", "讲台、黑板、成排课桌和后墙公告栏构成的矩形教学房间。", "A rectangular teaching room with podium, blackboard, rows of desks, and notice board at the back.", "校园片", "School films"),
    spaceContainerItem("sur6_lecture_hall", "阶梯讲堂", "Lecture Hall", "座位逐级升高，所有视线朝向最低处的讲台或投影幕。", "Tiered seats rise step by step, with all sightlines facing the lower podium or projection screen.", "大学场景", "University scenes"),
    spaceContainerItem("sur6_exam_room", "考试大厅", "Exam Hall", "单人桌按等距网格排列，墙面钟表、监考桌和密封试卷袋清晰可见。", "Single desks arranged in an even grid, with wall clock, proctor desk, and sealed exam packets visible.", "考试场景", "Exam scenes"),
    spaceContainerItem("sur6_library_stacks", "图书馆书架区", "Library Stacks", "高书架排成狭窄通道，编号牌和移动梯沿走道重复出现。", "Tall shelves form narrow aisles, with number plates and rolling ladders repeating along the rows.", "图书馆场景", "Library scenes"),
    spaceContainerItem("sur6_training_yard", "训练操场", "Training Yard", "标线、器械、跑道和集合点构成的户外训练场地。", "An outdoor training ground with markings, equipment, track lanes, and assembly points.", "训练营", "Training camps"),
    spaceContainerItem("sur6_dorm_corridor", "宿舍走廊", "Dormitory Corridor", "连续房门、门牌、洗衣篮和公告板排成一条可回声的长廊。", "A resonant corridor lined with doors, room numbers, laundry baskets, and notice boards.", "宿舍场景", "Dormitory scenes"),
    spaceContainerItem("sur6_principal_office", "校长办公室", "Principal Office", "办公桌、奖杯柜、校徽墙和访客椅组成的校内管理房间。", "A school management room with desk, trophy cabinet, emblem wall, and visitor chairs.", "校园管理", "School administration"),
    spaceContainerItem("sur6_rooftop_court", "屋顶球场", "Rooftop Court", "铁网围住的高处球场，地面标线、球架和城市天际线同时可见。", "A high court enclosed by wire mesh, with floor markings, hoops, and skyline visible together.", "青春片", "Youth films")
  ]
};
