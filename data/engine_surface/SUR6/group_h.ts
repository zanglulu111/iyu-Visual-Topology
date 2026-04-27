import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_H: LibraryCategoryDef = {
  id: "loc_confinement_control",
  name: "08. 囚禁与管控空间 (Confinement & Control)",
  nameEn: "Confinement & Control Spaces",
  desc: "牢房、审讯室、禁闭间、岗楼、围场和押送车厢等关押、看守、询问和转移可发生的空间。只给管控地点。",
  descEn: "Cells, interrogation rooms, isolation rooms, watchtowers, yards, and transfer compartments for holding, guarding, questioning, or moving. Provides control locations only.",
  items: [
    spaceContainerItem("sur6_prison_cell", "单人牢房", "Prison Cell", "铁门、小窗、窄床、洗手池和编号牌组成的封闭房间。", "A closed room of barred door, small window, narrow bed, sink, and number plate.", "监狱片", "Prison films"),
    spaceContainerItem("sur6_interrogation_room", "审讯室", "Interrogation Room", "一张桌子、两把椅子、顶灯、录音器和单向玻璃构成的询问房间。", "A questioning room with one table, two chairs, overhead lamp, recorder, and one-way glass.", "犯罪片", "Crime films"),
    spaceContainerItem("sur6_solitary_room", "禁闭间", "Solitary Room", "没有家具或仅有固定铺位的小房间，门缝和通风口是主要开口。", "A small room with no furniture or only a fixed bunk, with door slit and vent as main openings.", "拘押场景", "Detention scenes"),
    spaceContainerItem("sur6_watchtower", "看守岗楼", "Watchtower", "高脚平台、探照灯、围栏和狭窄楼梯构成的监看位置。", "A lookout position built from raised platform, searchlight, railing, and narrow stairs.", "营地场景", "Camp scenes"),
    spaceContainerItem("sur6_fenced_yard", "铁网放风场", "Fenced Yard", "高铁网、地面标线、长椅和看守门围出的户外活动区。", "An outdoor yard enclosed by high wire mesh, ground marks, benches, and guard gate.", "监区场景", "Cellblock scenes"),
    spaceContainerItem("sur6_transfer_van", "押送车厢", "Transfer Van Compartment", "金属隔栏把车内分成驾驶区和后部固定座位区。", "A metal partition divides the vehicle into driver area and rear fixed seating compartment.", "押送场景", "Transfer scenes"),
    spaceContainerItem("sur6_security_gate", "安检闸口", "Security Gate", "闸机、金属探测门、托盘传送带和安保桌组成的筛查节点。", "A screening node of turnstiles, metal detector, tray belt, and security table.", "检查场景", "Screening scenes"),
    spaceContainerItem("sur6_control_booth", "监控值班室", "Control Booth", "多屏墙、对讲机、门禁按钮和记录本组成的看守工作间。", "A guard workroom with monitor wall, radio, access buttons, and logbook.", "安保场景", "Security scenes")
  ]
};
