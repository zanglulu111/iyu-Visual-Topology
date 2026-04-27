import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_E: LibraryCategoryDef = {
  id: "loc_domestic_private",
  name: "05. 居住与私密空间 (Domestic & Private)",
  nameEn: "Domestic & Private Spaces",
  desc: "卧室、厨房、浴室、餐桌、阁楼、地下室等睡眠、饮食、清洁和独处可发生的空间。只给住所内部地点。",
  descEn: "Bedrooms, kitchens, bathrooms, dining tables, attics, basements, and related places for sleep, eating, cleaning, or solitude. Provides domestic locations only.",
  items: [
    spaceContainerItem("sur6_bedroom", "卧室", "Bedroom", "床、床头柜、衣架、窗帘和门锁围出的个人房间。", "A private room shaped by bed, nightstand, clothes rack, curtains, and door lock.", "家庭剧", "Family drama"),
    spaceContainerItem("sur6_kitchen", "家庭厨房", "Kitchen", "灶台、水槽、冰箱、橱柜和切菜台组成的烹饪空间。", "A cooking space of stove, sink, refrigerator, cabinets, and chopping counter.", "家庭场景", "Domestic scenes"),
    spaceContainerItem("sur6_bathroom", "浴室", "Bathroom", "镜柜、洗手台、淋浴帘、排风口和瓷砖地面构成的清洗房间。", "A washing room with mirror cabinet, basin, shower curtain, vent, and tile floor.", "室内场景", "Interior scenes"),
    spaceContainerItem("sur6_dining_table", "餐桌区域", "Dining Table Area", "桌面、座椅、吊灯和餐具把一块居住空间临时组织成用餐场。", "Table, chairs, pendant lamp, and tableware organize part of the home into a dining zone.", "家庭聚餐", "Family meals"),
    spaceContainerItem("sur6_attic", "阁楼", "Attic", "斜屋顶下的低矮储藏层，堆放箱子、旧家具和裸露梁架。", "A low storage level under a sloped roof, filled with boxes, old furniture, and exposed beams.", "老宅场景", "Old house scenes"),
    spaceContainerItem("sur6_basement_cellar", "地下储藏室", "Basement Cellar", "水泥地、管线、货架和小窗组成的低温地下房间。", "A cool underground room with concrete floor, pipes, shelves, and small window.", "地下室场景", "Basement scenes"),
    spaceContainerItem("sur6_closet_wardrobe", "衣柜夹间", "Wardrobe Nook", "衣柜、挂杆、窄门和堆叠箱子围成的狭小存放位置。", "A tight storage position formed by wardrobe, hanging rods, narrow door, and stacked boxes.", "悬疑室内", "Suspense interiors"),
    spaceContainerItem("sur6_doorstep", "门槛前后", "Doorstep", "外门、地垫、门铃、鞋柜和楼道光线交界的过渡位置。", "A threshold zone where front door, mat, bell, shoe cabinet, and hallway light meet.", "邻里场景", "Neighborhood scenes")
  ]
};
