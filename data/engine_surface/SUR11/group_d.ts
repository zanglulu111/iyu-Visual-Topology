import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_D: LibraryCategoryDef = {
  id: "sur11_group_d",
  name: "4. 暗盒打开 (Hidden Box Opens)",
  nameEn: "Hidden Box Opens",
  desc: "证据、身份、地图、源代码、信号、档案或世界模型在最后画面中被打开、播放、对齐或展示。只给信息显现，不给结论判词。",
  defEn: "Terminal frames where evidence, identity, map, source code, signal, archive, or world model is opened, played, aligned, or shown. Provides disclosure, not a truth verdict.",
  items: [
    visibleEndingItem("sur_truth_revealed", "证据摊开", "Evidence Spread", "所有照片、录音和文件被摊在桌上，缺失的一张终于补齐。", "All photos, recordings, and documents are spread on the table; the missing piece is finally added.", "悬疑片", "Mystery films"),
    visibleEndingItem("sur_expose_conspiracy", "黑幕上线", "Conspiracy Broadcast", "加密文件被上传到公共屏幕，下载数字开始跳动。", "Encrypted files are uploaded to public screens, and the download count begins to climb.", "政治惊悚", "Political thrillers"),
    visibleEndingItem("sur_wake_up", "舱门开启", "Pod Opens", "培养舱内的主角睁开眼，舱门喷出白雾向上打开。", "The protagonist opens their eyes inside the pod; the hatch releases white vapor and lifts open.", "模拟现实叙事", "Simulation stories"),
    visibleEndingItem("sur_matrix_exit", "假天幕裂开", "False Sky Cracks", "远处的蓝天出现裂缝，舞台灯架从云层背后显露出来。", "Cracks appear in the distant blue sky, revealing stage lights behind the clouds.", "《楚门的世界》", "The Truman Show"),
    visibleEndingItem("sur_identity_reveal", "姓名对上", "Name Matched", "旧档案上的姓名、指纹和眼前的人像在屏幕上重合。", "The name, fingerprint, and face in an old file overlap on the screen.", "身份悬疑", "Identity mysteries"),
    visibleEndingItem("sur_read_code", "看到源代码", "Source Code Visible", "现实画面短暂闪烁，墙壁和人群化为流动的底层代码。", "The image of reality flickers; walls and crowds turn into flowing source code.", "赛博科幻", "Cyber sci-fi"),
    visibleEndingItem("sur_fourth_wall_break", "镜头被看见", "Camera Noticed", "角色停下动作，转头直视镜头，摄影机的红灯在画面边缘亮着。", "The character stops, turns to stare into the lens, and the camera's red light glows at the frame edge.", "元叙事", "Meta-narrative"),
    visibleEndingItem("sur_puzzle_complete", "拼图归位", "Puzzle Completed", "最后一块拼图被按下，桌面图案连接成完整地图。", "The final puzzle piece is pressed into place, completing the map across the table.", "解谜片", "Puzzle mysteries"),
    visibleEndingItem("sur_memory_recovered", "记忆回放", "Memory Playback", "记忆装置开始投影，主角看见自己遗失的那一段影像。", "The memory device projects footage, and the protagonist sees the missing segment.", "科幻悬疑", "Sci-fi mystery"),
    visibleEndingItem("sur_macguffin_empty", "盒中无物", "Empty Box", "被争夺整部故事的盒子终于打开，镜头停在空无一物的内衬。", "The box fought over for the whole story opens at last; the frame rests on its empty lining.", "麦高芬叙事", "MacGuffin stories"),
    visibleEndingItem("sur_decode_signal", "信号解码", "Signal Decoded", "噪声频谱被拉直，屏幕上第一次出现清晰坐标。", "The noisy spectrum straightens, and clear coordinates appear on the screen for the first time.", "外星信号片", "Alien-signal films"),
    visibleEndingItem("sur_bloodline_truth", "血样匹配", "Bloodline Match", "两份血样在检测屏上同时亮起，匹配率停在同一个数字。", "Two blood samples light up on the test screen, and the match rate freezes at one number.", "家族秘密", "Family-secret dramas")
  ]
};
