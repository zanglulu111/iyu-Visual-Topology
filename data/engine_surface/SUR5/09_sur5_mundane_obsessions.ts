import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_MUNDANE_OBSESSIONS: LibraryCategoryDef = {
  id: "sur5_mundane_obsessions",
  name: "9. 日常执物 (Mundane Attachments)",
  nameEn: "Mundane Attachments",
  desc: "音乐盒、餐券、借书卡、怀表、铃铛、围巾、糖纸或旧钥匙等微小、日常、低价值但可被人物执握的对象。",
  descEn: "Small, everyday, low-market-value objects such as music boxes, meal tickets, library cards, watches, bells, scarves, wrappers, or old keys that characters can hold onto.",
  items: [
    objectAnchorItem("sur5_music_box", "坏音乐盒", "Broken Music Box", "一个发条卡住的音乐盒，转轴只能走半圈。", "A wind-up music box with jammed gears, able to turn only halfway.", "生活剧", "Slice-of-life drama"),
    objectAnchorItem("sur5_meal_ticket", "旧餐券", "Old Meal Ticket", "一张已经褪色的餐券，背面写着小店地址。", "A faded meal ticket with a small restaurant address on the back.", "城市叙事", "Urban narratives"),
    objectAnchorItem("sur5_library_card", "借书卡", "Library Card", "一张过期借书卡，最后一栏仍有未还书名。", "An expired library card whose last row still lists an unreturned title.", "校园/成长", "School / coming-of-age"),
    objectAnchorItem("sur5_pocket_watch", "停摆怀表", "Stopped Pocket Watch", "一只停在固定时间的怀表，表盖内侧有划痕。", "A pocket watch stopped at a fixed time, scratched inside the lid.", "年代剧", "Period drama"),
    objectAnchorItem("sur5_bell_collar", "小铃铛", "Small Bell", "一枚从项圈或挂绳上拆下的小铃铛。", "A small bell removed from a collar or cord.", "家庭叙事", "Family narratives"),
    objectAnchorItem("sur5_half_scarf", "半截围巾", "Half Scarf", "一条只织完一半的围巾，毛线针还别在末端。", "A half-finished scarf with the knitting needle still tucked at the end.", "日常叙事", "Everyday narratives"),
    objectAnchorItem("sur5_candy_wrapper", "糖纸", "Candy Wrapper", "一张被压平保存的透明糖纸，折角整齐。", "A transparent candy wrapper pressed flat and preserved with neat corners.", "童年叙事", "Childhood narratives"),
    objectAnchorItem("sur5_old_key", "旧钥匙", "Old Key", "一把齿痕磨平的旧钥匙，钥匙牌上的地址已看不清。", "An old key with worn teeth; the address tag is unreadable.", "归家叙事", "Homecoming narratives")
  ]
};
