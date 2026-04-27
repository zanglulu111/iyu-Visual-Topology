import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_E: LibraryCategoryDef = {
  id: "role_art_performance",
  name: "05. 艺术与表演身份 (Art & Performance)",
  nameEn: "Art & Performance Roles",
  desc: "以作品、表演、影像、声音、服饰和公共评价为工作对象的创作身份。只给表达职业接口。",
  descEn: "Creative roles working with works, performance, image, sound, clothing, and public evaluation. Provides creative work interfaces only.",
  items: [
    roleIdentityItem("sur9_painter", "画家", "Painter", "使用画布、墙面、颜料、草图和展览申请进行创作的人。", "A creator working through canvas, walls, paint, sketches, and exhibition applications.", "艺术家传记", "Artist biopics"),
    roleIdentityItem("sur9_writer", "作家", "Writer", "以手稿、合同、采访、校样和截稿日为工作中心的文字创作者。", "A text creator whose work centers on manuscripts, contracts, interviews, proofs, and deadlines.", "文学叙事", "Literary stories"),
    roleIdentityItem("sur9_musician", "乐手", "Musician", "在排练室、舞台、录音棚或巡演车上处理乐器、曲谱和演出的人。", "A performer who handles instruments, scores, and shows in rehearsal rooms, stages, studios, or tour vans.", "音乐片", "Music films"),
    roleIdentityItem("sur9_actor", "演员", "Actor", "在片场、剧场、试镜室或绿幕棚中通过台词、动作和调度工作的表演者。", "A performer working through lines, movement, and blocking on sets, stages, audition rooms, or green-screen spaces.", "剧场与片场", "Stage and set stories"),
    roleIdentityItem("sur9_dancer", "舞者", "Dancer", "依靠排练、节拍、形体训练、舞台标记和服装完成演出的表演者。", "A performer whose work uses rehearsal, rhythm, movement training, stage marks, and costume.", "舞蹈片", "Dance films"),
    roleIdentityItem("sur9_photographer", "摄影师", "Photographer", "携带相机、灯具、胶片或存储卡，在现场捕捉人物、物件和事件的人。", "A worker who carries cameras, lights, film, or cards to capture people, objects, and events on site.", "摄影叙事", "Photography stories"),
    roleIdentityItem("sur9_fashion_designer", "服装设计师", "Fashion Designer", "围绕面料、版型、试衣、秀场和品牌样衣工作的设计者。", "A designer working with fabric, patterns, fittings, runway shows, and brand samples.", "时尚行业", "Fashion industry"),
    roleIdentityItem("sur9_art_critic", "艺术评论人", "Art Critic", "通过展评、专栏、采访、打分和公开讲座影响作品流通的人。", "A reviewer who influences art circulation through reviews, columns, interviews, scoring, and public talks.", "文化圈叙事", "Art-world stories")
  ]
};
