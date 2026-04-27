import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_G: LibraryCategoryDef = {
  id: "loc_commerce_consumption",
  name: "07. 商业与消费空间 (Commerce & Consumption)",
  nameEn: "Commerce & Consumption Spaces",
  desc: "市场、商店、酒吧、赌场、拍卖厅、宴会厅、剧场和旅馆等交易、陈列、娱乐和住宿可发生的空间。只给消费地点。",
  descEn: "Markets, shops, bars, casinos, auction rooms, banquet halls, theaters, and hotels for trade, display, entertainment, or lodging. Provides commerce locations only.",
  items: [
    spaceContainerItem("sur6_marketplace", "露天市场", "Open Market", "摊位、遮阳棚、货筐和临时通道组成的开放交易场地。", "An open trading ground of stalls, awnings, baskets, and temporary aisles.", "市集场景", "Market scenes"),
    spaceContainerItem("sur6_shop_counter", "商店柜台", "Shop Counter", "收银台、玻璃柜、货架和门铃围成的零售前场。", "A retail front formed by checkout counter, glass case, shelves, and door bell.", "小店场景", "Small shop scenes"),
    spaceContainerItem("sur6_bar_tavern", "酒吧吧台", "Bar Counter", "长吧台、吧椅、酒架、低灯和后门组成的夜间室内空间。", "A night interior of long counter, stools, bottle shelves, low lamps, and rear door.", "黑色电影", "Noir films"),
    spaceContainerItem("sur6_casino_floor", "赌场大厅", "Casino Floor", "赌桌、筹码盒、吊灯、摄像头和无窗墙面构成的室内娱乐场。", "An indoor gaming floor of tables, chip boxes, chandeliers, cameras, and windowless walls.", "赌场片", "Casino films"),
    spaceContainerItem("sur6_auction_hall", "拍卖厅", "Auction Hall", "展台、号牌座椅、聚光灯和后排观察位组成的公开竞价房间。", "A public bidding room with display stand, numbered seats, spotlights, and rear observation row.", "拍卖场景", "Auction scenes"),
    spaceContainerItem("sur6_banquet_hall", "宴会厅", "Banquet Hall", "圆桌、桌布、舞台、服务通道和吊灯排布成的大型餐饮空间。", "A large dining space arranged with round tables, linens, stage, service aisles, and chandeliers.", "宴会场景", "Banquet scenes"),
    spaceContainerItem("sur6_theater_stage", "剧场舞台", "Theater Stage", "幕布、侧台、观众席、灯架和后台入口共同组成的表演空间。", "A performance space combining curtains, wings, audience seats, lighting rig, and backstage entrance.", "剧场场景", "Theater scenes"),
    spaceContainerItem("sur6_hotel_lobby", "旅馆大堂", "Hotel Lobby", "前台、钥匙柜、沙发区、行李车和旋转门构成的临时接待空间。", "A temporary reception space of front desk, key rack, sofa area, luggage cart, and revolving door.", "旅馆场景", "Hotel scenes")
  ]
};
