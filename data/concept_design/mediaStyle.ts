import { LibraryItemDef } from '../../types';

type MediaRoute = 'PHOTOGRAPHY' | 'PAINTING' | 'CGI' | 'TANGIBLE';
type MediaSlot = 'SOUL' | 'QUALITY' | 'EYE' | 'CRAFT' | 'FORMAT';
type MediaEra =
  | 'primitive'
  | 'slave'
  | 'feudal'
  | 'early_modern'
  | 'industrial'
  | 'modern'
  | 'contemporary'
  | 'near_future'
  | 'far_future'
  | 'timeless'
  | 'mythic';

type MediaStyleItem = LibraryItemDef & {
  mediaRoute: MediaRoute;
  mediaSlot: MediaSlot;
  ontologyLevel: 1 | 2 | 3 | 4 | 5;
  eras: MediaEra[];
  affects: string[];
  risk: 'clean' | 'medium' | 'high';
};

const ALL_ERAS: MediaEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const HISTORICAL_PLUS: MediaEra[] = ['industrial', 'modern', 'contemporary', 'timeless'];
const MODERN_PLUS: MediaEra[] = ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const CONTEMPORARY_PLUS: MediaEra[] = ['contemporary', 'near_future', 'far_future', 'timeless'];
const FUTURE: MediaEra[] = ['near_future', 'far_future'];
const HANDMADE_ERAS: MediaEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless', 'mythic'];

const mediaItem = (
  mediaRoute: MediaRoute,
  mediaSlot: MediaSlot,
  key: string,
  name: string,
  nameEn: string,
  group: string,
  groupEn: string,
  def: string,
  defEn: string,
  ontologyLevel: MediaStyleItem['ontologyLevel'],
  eras: MediaEra[],
  risk: MediaStyleItem['risk'] = 'clean',
  affects: string[] = ['medium']
): MediaStyleItem => ({
  id: `cd_media_${mediaRoute.toLowerCase()}_${mediaSlot.toLowerCase()}_${key}`,
  name,
  nameEn,
  group,
  groupEn,
  def,
  defEn,
  mediaRoute,
  mediaSlot,
  ontologyLevel,
  eras,
  risk,
  affects,
  controls: ['physical medium', 'rendering grammar', 'presentation format'],
  forbids: ['unrouted medium mixing', 'cinematic scene takeover', 'style replacing identity'],
  absorptionRule: '媒介风格只控制图像被如何拍摄、绘制、渲染或制作；不得替代角色身份、时代坐标和人设锚点。'
});

export const CD_MEDIA_PHOTOGRAPHY_SOUL: MediaStyleItem[] = [
  mediaItem('PHOTOGRAPHY', 'SOUL', 'studio_casting', '影棚定妆摄影', 'Studio Casting Photography', 'A. 摄影魂', 'A. Photography Soul', '真实人物影棚定妆照逻辑，强调演员、服装、脸部和身份板可读性。', 'Real studio casting-photo logic emphasizing actor, costume, face, and identity-board readability.', 1, MODERN_PLUS, 'clean', ['photography', 'identity']),
  mediaItem('PHOTOGRAPHY', 'SOUL', 'fashion_editorial', '时尚杂志摄影', 'Fashion Editorial Photography', 'A. 摄影魂', 'A. Photography Soul', '以杂志大片、造型统一性、身体姿态和高质感商业修图组织角色。', 'Organizes the character through magazine editorial language, styling unity, body posture, and polished commercial retouching.', 1, MODERN_PLUS, 'clean', ['photography', 'fashion']),
  mediaItem('PHOTOGRAPHY', 'SOUL', 'documentary', '纪实人物摄影', 'Documentary Portrait Photography', 'A. 摄影魂', 'A. Photography Soul', '以真实生活痕迹、非表演表情、现场材料和可信社会位置组织人物。', 'Uses life traces, non-performed expression, on-site materials, and credible social position.', 1, MODERN_PLUS, 'clean', ['photography', 'reality']),
  mediaItem('PHOTOGRAPHY', 'SOUL', 'film_still', '电影角色剧照', 'Film Character Still', 'A. 摄影魂', 'A. Photography Soul', '像电影角色定格照，但必须服务角色资产，不生成复杂剧情场景。', 'Reads like a film character still while serving character-asset clarity, not a complex story scene.', 1, MODERN_PLUS, 'medium', ['photography', 'cinema']),
  mediaItem('PHOTOGRAPHY', 'SOUL', 'archive_record', '人物档案摄影', 'Character Archive Photography', 'A. 摄影魂', 'A. Photography Soul', '用档案、证据、正面记录和中性背景强调身份可读性。', 'Uses archive, evidence, frontal recording, and neutral background to emphasize readable identity.', 1, HISTORICAL_PLUS, 'clean', ['photography', 'archive']),
  mediaItem('PHOTOGRAPHY', 'SOUL', 'backstage', '后台工作摄影', 'Backstage Work Photography', 'A. 摄影魂', 'A. Photography Soul', '后台、工牌、工具、疲惫和工作痕迹成为真实摄影的核心。', 'Backstage, badges, tools, fatigue, and work traces become the core of the real photograph.', 1, MODERN_PLUS, 'clean', ['photography', 'labor'])
];

export const CD_MEDIA_PHOTOGRAPHY_QUALITY: MediaStyleItem[] = [
  mediaItem('PHOTOGRAPHY', 'QUALITY', 'medium_format', '中画幅数码质感', 'Medium-Format Digital Texture', 'L1.1 质', 'L1.1 Quality', '高解析、真实皮肤、低噪点和商业肖像的干净层次。', 'High resolution, real skin detail, low noise, and clean commercial portrait tonal depth.', 1, CONTEMPORARY_PLUS, 'clean', ['sensor', 'skin']),
  mediaItem('PHOTOGRAPHY', 'QUALITY', 'thirtyfive_film', '35mm 胶片质感', '35mm Film Texture', 'L1.1 质', 'L1.1 Quality', '细颗粒、柔和高光卷收和真实胶片的有机随机性。', 'Fine grain, soft highlight roll-off, and organic randomness of real film.', 1, HISTORICAL_PLUS, 'clean', ['grain', 'color']),
  mediaItem('PHOTOGRAPHY', 'QUALITY', 'hard_flash', '硬闪直打', 'Direct Hard-Flash Look', 'L1.1 质', 'L1.1 Quality', '强烈正面闪光、清楚阴影和平台/档案式真实感。', 'Strong frontal flash, crisp shadow, and platform/archive realism.', 1, MODERN_PLUS, 'medium', ['lighting', 'surface']),
  mediaItem('PHOTOGRAPHY', 'QUALITY', 'softbox_clean', '柔光棚拍', 'Clean Softbox Studio Light', 'L1.1 质', 'L1.1 Quality', '大面积柔光、干净皮肤、清楚服装材质和低冲突背景。', 'Large soft light, clean skin, clear clothing material, and low-conflict background.', 1, MODERN_PLUS, 'clean', ['lighting', 'skin']),
  mediaItem('PHOTOGRAPHY', 'QUALITY', 'archive_scan', '档案扫描质感', 'Archive Scan Texture', 'L1.1 质', 'L1.1 Quality', '扫描边缘、纸面灰阶、轻微磨损和记录文件感。', 'Scan edges, paper greyscale, slight wear, and document-record feeling.', 1, HISTORICAL_PLUS, 'clean', ['archive', 'texture']),
  mediaItem('PHOTOGRAPHY', 'QUALITY', 'phone_selfie', '手机自拍真实感', 'Phone Selfie Realism', 'L1.1 质', 'L1.1 Quality', '小传感器锐度、轻微畸变、平台化亲密距离和当代生活感。', 'Small-sensor sharpness, slight distortion, platform intimacy, and contemporary life feeling.', 1, CONTEMPORARY_PLUS, 'clean', ['sensor', 'platform'])
];

export const CD_MEDIA_PHOTOGRAPHY_EYE: MediaStyleItem[] = [
  mediaItem('PHOTOGRAPHY', 'EYE', 'full_body_casting', '全身定妆视角', 'Full-Body Casting View', 'L1.2 眼', 'L1.2 Eye', '全身站姿清楚，服装、比例和面部都可读。', 'Full-body standing view with readable outfit, proportion, and face.', 1, MODERN_PLUS, 'clean', ['composition', 'body']),
  mediaItem('PHOTOGRAPHY', 'EYE', 'front_profile_back', '正侧背记录', 'Front / Side / Back Record', 'L1.2 眼', 'L1.2 Eye', '用多视角记录角色，接近摄影版身份板。', 'Records the character with multiple views, close to a photographic identity board.', 1, MODERN_PLUS, 'clean', ['composition', 'sheet']),
  mediaItem('PHOTOGRAPHY', 'EYE', 'waist_portrait', '半身肖像', 'Waist-Up Portrait', 'L1.2 眼', 'L1.2 Eye', '半身距离强调脸、肩线、手部道具和职业气质。', 'Waist-up distance emphasizes face, shoulder line, hands, props, and occupational aura.', 1, MODERN_PLUS, 'clean', ['composition', 'face']),
  mediaItem('PHOTOGRAPHY', 'EYE', 'neutral_frontal', '中性正面记录', 'Neutral Frontal Record', 'L1.2 眼', 'L1.2 Eye', '正面、平视、低戏剧化，适合档案与设定图。', 'Frontal, eye-level, low-drama view suited to archives and design sheets.', 1, HISTORICAL_PLUS, 'clean', ['composition', 'archive']),
  mediaItem('PHOTOGRAPHY', 'EYE', 'editorial_pose', '编辑式全身姿态', 'Editorial Full-Body Pose', 'L1.2 眼', 'L1.2 Eye', '保留时尚摄影的姿态意识，但不变成海报场景。', 'Keeps fashion-photography pose awareness without turning into poster scene.', 1, MODERN_PLUS, 'clean', ['composition', 'pose']),
  mediaItem('PHOTOGRAPHY', 'EYE', 'detail_callouts_photo', '摄影细节局部', 'Photographic Detail Callouts', 'L1.2 眼', 'L1.2 Eye', '增加服装、手、脸、道具局部照片作为身份板证据。', 'Adds outfit, hand, face, and prop close-up photos as identity-board evidence.', 1, MODERN_PLUS, 'clean', ['sheet', 'detail'])
];

export const CD_MEDIA_PHOTOGRAPHY_CRAFT: MediaStyleItem[] = [
  mediaItem('PHOTOGRAPHY', 'CRAFT', 'commercial_retouch', '商业修图', 'Commercial Retouching', '工艺', 'Craft', '修掉噪声但保留真实皮肤纹理和服装材质。', 'Removes noise while preserving real skin texture and clothing material.', 1, CONTEMPORARY_PLUS, 'clean', ['postprocess']),
  mediaItem('PHOTOGRAPHY', 'CRAFT', 'raw_unretouched', '未精修真实皮肤', 'Raw Unretouched Skin', '工艺', 'Craft', '保留毛孔、轻微瑕疵、汗和真实身体变化。', 'Keeps pores, minor flaws, sweat, and real bodily variation.', 1, MODERN_PLUS, 'clean', ['skin', 'reality']),
  mediaItem('PHOTOGRAPHY', 'CRAFT', 'gelatin_print', '银盐冲印', 'Gelatin Silver Print', '工艺', 'Craft', '黑白银盐层次、纸面密度和暗房冲印触感。', 'Black-and-white silver tonal depth, paper density, and darkroom print tactility.', 1, HISTORICAL_PLUS, 'clean', ['print', 'grain']),
  mediaItem('PHOTOGRAPHY', 'CRAFT', 'polaroid_chemical', '拍立得化学痕迹', 'Polaroid Chemical Trace', '工艺', 'Craft', '白边、显影不均、偏色和不可复制的时间切片。', 'White border, uneven development, color shift, and unrepeatable time-slice quality.', 1, MODERN_PLUS, 'clean', ['print', 'archive']),
  mediaItem('PHOTOGRAPHY', 'CRAFT', 'security_record', '监控记录痕迹', 'Security-Record Trace', '工艺', 'Craft', '低比特率、时间戳感和冷漠记录，但仍保持角色可读。', 'Low bitrate, timestamp feeling, and indifferent recording while keeping the character readable.', 1, CONTEMPORARY_PLUS, 'medium', ['archive', 'sensor']),
  mediaItem('PHOTOGRAPHY', 'CRAFT', 'contact_sheet', '接触印相', 'Contact Sheet Logic', '工艺', 'Craft', '多格小图、选择框和摄影工作流痕迹。', 'Multiple small frames, selection marks, and photographic workflow traces.', 1, HISTORICAL_PLUS, 'clean', ['sheet', 'process'])
];

export const CD_MEDIA_PHOTOGRAPHY_FORMAT: MediaStyleItem[] = [
  mediaItem('PHOTOGRAPHY', 'FORMAT', 'photo_identity_board', '摄影身份板', 'Photographic Identity Board', '展示格式', 'Presentation Format', '用真实照片组织大型主视图、细节局部、色条和身份备注。', 'Uses real photos to organize main view, detail callouts, color strip, and identity notes.', 1, MODERN_PLUS, 'clean', ['sheet']),
  mediaItem('PHOTOGRAPHY', 'FORMAT', 'casting_sheet', '演员定妆资料页', 'Actor Casting Sheet', '展示格式', 'Presentation Format', '像演员试装资料，强调脸、身高比例、服装和角色方向。', 'Reads like actor fitting material, emphasizing face, body proportion, costume, and role direction.', 1, MODERN_PLUS, 'clean', ['sheet', 'identity']),
  mediaItem('PHOTOGRAPHY', 'FORMAT', 'archive_dossier', '人物档案页', 'Character Dossier Page', '展示格式', 'Presentation Format', '档案式排版，主照、编号、细节证据和简短身份注记。', 'Dossier layout with main photo, ID number, detail evidence, and short identity notes.', 1, HISTORICAL_PLUS, 'clean', ['archive', 'sheet']),
  mediaItem('PHOTOGRAPHY', 'FORMAT', 'magazine_layout', '杂志编辑页', 'Magazine Editorial Layout', '展示格式', 'Presentation Format', '杂志式留白和照片编排，但不加入标题海报化。', 'Magazine-like whitespace and photo arrangement without poster-like title design.', 1, MODERN_PLUS, 'clean', ['layout', 'fashion'])
];

export const CD_MEDIA_PAINTING_SOUL: MediaStyleItem[] = [
  mediaItem('PAINTING', 'SOUL', 'character_concept', '角色概念设定图', 'Character Concept Art', 'A. 绘画魂', 'A. Painting Soul', '以角色设计生产为目标，强调剪影、材质、身份和局部拆解。', 'Production-oriented character design emphasizing silhouette, material, identity, and detail breakdowns.', 1, MODERN_PLUS, 'clean', ['concept_art', 'identity']),
  mediaItem('PAINTING', 'SOUL', 'anime_cel', '赛璐璐动画设定', 'Cel-Animation Design', 'A. 绘画魂', 'A. Painting Soul', '硬边阴影、清晰色块和动画角色设定语言。', 'Hard-edged shadows, clean color blocks, and animation character-design language.', 1, MODERN_PLUS, 'clean', ['animation', 'line']),
  mediaItem('PAINTING', 'SOUL', 'manga_graphic', '青年漫画图像语法', 'Seinen Manga Graphic Grammar', 'A. 绘画魂', 'A. Painting Soul', '成熟比例、黑白密度、硬边线稿和可读机械/城市细节。', 'Mature proportions, black-white density, hard linework, and readable mechanical or urban detail.', 1, MODERN_PLUS, 'clean', ['manga', 'line']),
  mediaItem('PAINTING', 'SOUL', 'european_comic', '欧漫图像小说', 'European Graphic-Novel Style', 'A. 绘画魂', 'A. Painting Soul', '清楚线条、平涂色面、世界建筑感和图像小说式人物。', 'Clear lines, flat color planes, world architecture, and graphic-novel character treatment.', 1, MODERN_PLUS, 'clean', ['comic', 'line']),
  mediaItem('PAINTING', 'SOUL', 'illustration_editorial', '编辑插画', 'Editorial Illustration', 'A. 绘画魂', 'A. Painting Soul', '用平面构成、符号化姿态和材料概括组织人物。', 'Organizes the character through graphic composition, symbolic pose, and material reduction.', 1, MODERN_PLUS, 'clean', ['illustration', 'symbol']),
  mediaItem('PAINTING', 'SOUL', 'classical_portrait', '古典肖像绘画', 'Classical Portrait Painting', 'A. 绘画魂', 'A. Painting Soul', '以油画肖像的体积、肤色、服饰层次和身份尊严组织人物。', 'Uses oil-portrait volume, skin tone, garment layers, and identity dignity.', 1, ['early_modern', 'industrial', 'modern', 'contemporary', 'timeless'], 'clean', ['painting', 'portrait'])
];

export const CD_MEDIA_PAINTING_QUALITY: MediaStyleItem[] = [
  mediaItem('PAINTING', 'QUALITY', 'digital_painting', '数字绘画', 'Digital Painting', 'L1.1 质', 'L1.1 Quality', '干净分层、可控边缘和适合角色资产的数字绘制。', 'Clean layers, controlled edges, and digital rendering suited to character assets.', 1, CONTEMPORARY_PLUS, 'clean', ['paint', 'render']),
  mediaItem('PAINTING', 'QUALITY', 'digital_impasto', '数字厚涂', 'Digital Impasto Painting', 'L1.1 质', 'L1.1 Quality', '厚重笔触、块面塑形和高完成度材质。', 'Heavy brushwork, blocky form shaping, and high-finish material rendering.', 1, CONTEMPORARY_PLUS, 'clean', ['brushwork', 'material']),
  mediaItem('PAINTING', 'QUALITY', 'clean_lineart', '干净线稿', 'Clean Line Art', 'L1.1 质', 'L1.1 Quality', '线宽稳定、结构清楚、便于展示服装与身体设计。', 'Stable line weight and clear structure for outfit and body design readability.', 1, MODERN_PLUS, 'clean', ['line', 'structure']),
  mediaItem('PAINTING', 'QUALITY', 'ink_wash', '墨水/水墨', 'Ink / Ink-Wash Medium', 'L1.1 质', 'L1.1 Quality', '流动墨色、留白、笔锋和高对比身份轮廓。', 'Flowing ink tone, negative space, brush tips, and high-contrast identity silhouette.', 1, ALL_ERAS, 'clean', ['ink', 'paper']),
  mediaItem('PAINTING', 'QUALITY', 'watercolor', '水彩', 'Watercolor', 'L1.1 质', 'L1.1 Quality', '透明叠色、纸面渗化和轻盈边缘。', 'Transparent layering, paper bloom, and light edges.', 1, MODERN_PLUS, 'clean', ['paint', 'paper']),
  mediaItem('PAINTING', 'QUALITY', 'screen_tone', '网点漫画质感', 'Manga Screentone Texture', 'L1.1 质', 'L1.1 Quality', '网点灰阶、黑白层次和印刷漫画表面。', 'Screentone greyscale, black-white depth, and printed manga surface.', 1, MODERN_PLUS, 'clean', ['print', 'manga'])
];

export const CD_MEDIA_PAINTING_EYE: MediaStyleItem[] = [
  mediaItem('PAINTING', 'EYE', 'identity_board_view', '身份板视角', 'Identity-Board View', 'L1.2 眼', 'L1.2 Eye', '主视图、侧背视图、表情和局部拆解清楚分区。', 'Clearly separates main view, side/back views, expressions, and detail callouts.', 1, MODERN_PLUS, 'clean', ['sheet', 'composition']),
  mediaItem('PAINTING', 'EYE', 'turnaround_sheet', 'Turnaround 三视图', 'Turnaround Sheet', 'L1.2 眼', 'L1.2 Eye', '正面、侧面、背面保持比例一致，服务资产生产。', 'Front, side, and back remain proportionally consistent for asset production.', 1, MODERN_PLUS, 'clean', ['sheet', 'asset']),
  mediaItem('PAINTING', 'EYE', 'costume_callouts', '服装细节拆解', 'Costume Detail Callouts', 'L1.2 眼', 'L1.2 Eye', '用小图拆解衣领、手套、鞋、道具、材质和标记。', 'Small callouts break down collar, gloves, shoes, props, material, and marks.', 1, MODERN_PLUS, 'clean', ['sheet', 'costume']),
  mediaItem('PAINTING', 'EYE', 'expression_grid', '表情小格', 'Expression Grid', 'L1.2 眼', 'L1.2 Eye', '4 到 6 个表情小格，让角色人格可读。', 'Four to six expression cells make personality readable.', 1, MODERN_PLUS, 'clean', ['sheet', 'face']),
  mediaItem('PAINTING', 'EYE', 'dynamic_pose_plus', '主姿态加态度姿态', 'Main Pose plus Attitude Pose', 'L1.2 眼', 'L1.2 Eye', '一个清楚主姿态加一个 attitude pose，避免动作杂乱。', 'One clear main pose plus one attitude pose, avoiding action clutter.', 1, MODERN_PLUS, 'clean', ['pose', 'composition']),
  mediaItem('PAINTING', 'EYE', 'flat_orthographic', '平视正交设定', 'Flat Orthographic Design View', 'L1.2 眼', 'L1.2 Eye', '减少夸张透视，让身体比例、服装结构和道具尺寸准确。', 'Reduces dramatic perspective so body proportion, costume structure, and prop scale stay accurate.', 1, MODERN_PLUS, 'clean', ['asset', 'composition'])
];

export const CD_MEDIA_PAINTING_CRAFT: MediaStyleItem[] = [
  mediaItem('PAINTING', 'CRAFT', 'hard_shadow', '硬边阴影', 'Hard-Edged Shadow', '工艺', 'Craft', '清晰阴影边界，适合动画、漫画和干净设定图。', 'Crisp shadow borders suited to animation, manga, and clean design sheets.', 1, MODERN_PLUS, 'clean', ['shadow', 'render']),
  mediaItem('PAINTING', 'CRAFT', 'visible_brush', '可见笔触', 'Visible Brushwork', '工艺', 'Craft', '笔触参与体积塑造，但不盖住设计细节。', 'Brushwork participates in volume shaping without hiding design details.', 1, ALL_ERAS, 'clean', ['brushwork']),
  mediaItem('PAINTING', 'CRAFT', 'paper_scan', '纸面扫描', 'Paper Scan Finish', '工艺', 'Craft', '纸纤维、轻微扫描灰和手绘稿真实感。', 'Paper fibers, slight scan grey, and authentic hand-drawn sheet feeling.', 1, MODERN_PLUS, 'clean', ['paper', 'scan']),
  mediaItem('PAINTING', 'CRAFT', 'print_halftone', '印刷半调', 'Printed Halftone', '工艺', 'Craft', '半调网点、套印偏差和漫画/海报印刷质感。', 'Halftone dots, slight registration offset, and comic/poster print texture.', 1, MODERN_PLUS, 'clean', ['print', 'texture']),
  mediaItem('PAINTING', 'CRAFT', 'blue_pencil', '蓝铅笔设定稿', 'Blue-Pencil Design Draft', '工艺', 'Craft', '保留蓝铅笔结构线、修正线和动画设定稿痕迹。', 'Keeps blue construction lines, correction marks, and animation-design draft traces.', 1, MODERN_PLUS, 'clean', ['draft', 'line']),
  mediaItem('PAINTING', 'CRAFT', 'museum_paint_surface', '美术馆画面表层', 'Museum Painting Surface', '工艺', 'Craft', '画布纹理、油层厚度和历史绘画表面感。', 'Canvas weave, paint-layer thickness, and historical painting surface.', 1, ['early_modern', 'industrial', 'modern', 'contemporary', 'timeless'], 'clean', ['paint', 'surface'])
];

export const CD_MEDIA_PAINTING_FORMAT: MediaStyleItem[] = [
  mediaItem('PAINTING', 'FORMAT', 'character_identity_board', '角色身份板', 'Character Identity Board', '展示格式', 'Presentation Format', '大型主视图、三视图、表情、细节、色条和简短备注。', 'Large main view, turnaround views, expressions, details, color strip, and short notes.', 1, MODERN_PLUS, 'clean', ['sheet']),
  mediaItem('PAINTING', 'FORMAT', 'costume_sheet', '服装装备设定板', 'Costume and Gear Sheet', '展示格式', 'Presentation Format', '重点展示服装层级、装备、材料和可穿戴逻辑。', 'Focuses on costume hierarchy, gear, material, and wearable logic.', 1, MODERN_PLUS, 'clean', ['sheet', 'costume']),
  mediaItem('PAINTING', 'FORMAT', 'animation_model_sheet', '动画角色设定表', 'Animation Model Sheet', '展示格式', 'Presentation Format', '比例统一、表情清楚、线稿干净，服务动画制作。', 'Consistent proportions, clear expressions, clean linework, serving animation production.', 1, MODERN_PLUS, 'clean', ['animation', 'sheet']),
  mediaItem('PAINTING', 'FORMAT', 'comic_reference_sheet', '漫画角色参考页', 'Comic Character Reference Sheet', '展示格式', 'Presentation Format', '黑白/彩色角色参考、局部标注和简短设定说明。', 'Black-white or color character reference with detail notes and short design comments.', 1, MODERN_PLUS, 'clean', ['comic', 'sheet'])
];

export const CD_MEDIA_CGI_SOUL: MediaStyleItem[] = [
  mediaItem('CGI', 'SOUL', 'cinematic_character_render', '电影级CG角色渲染', 'Cinematic CG Character Render', 'A. CGI魂', 'A. CGI Soul', '高端 VFX 角色资产逻辑，强调皮肤、布料、材质和可信灯光。', 'High-end VFX character-asset logic emphasizing skin, cloth, materials, and plausible lighting.', 3, CONTEMPORARY_PLUS, 'medium', ['cgi', 'vfx']),
  mediaItem('CGI', 'SOUL', 'game_asset', 'AAA游戏角色资产', 'AAA Game Character Asset', 'A. CGI魂', 'A. CGI Soul', '游戏角色展示逻辑，强调轮廓、装备、材质分层和资产可读性。', 'Game character presentation emphasizing silhouette, equipment, material layering, and asset readability.', 3, CONTEMPORARY_PLUS, 'medium', ['cgi', 'game']),
  mediaItem('CGI', 'SOUL', 'zbrush_sculpt', 'ZBrush 高模雕塑', 'ZBrush High-Poly Sculpt', 'A. CGI魂', 'A. CGI Soul', '数字雕塑工作流，强调解剖、表面细节和模型体积。', 'Digital sculpting workflow emphasizing anatomy, surface detail, and model volume.', 3, CONTEMPORARY_PLUS, 'medium', ['cgi', 'sculpt']),
  mediaItem('CGI', 'SOUL', 'collectible_render', '收藏雕像渲染', 'Collectible Statue Render', 'A. CGI魂', 'A. CGI Soul', '像高端雕像或手办的产品展示，但保持数字渲染管线。', 'Reads like premium statue or figure product presentation while staying in digital rendering pipeline.', 3, CONTEMPORARY_PLUS, 'clean', ['cgi', 'product'])
];

export const CD_MEDIA_CGI_QUALITY: MediaStyleItem[] = [
  mediaItem('CGI', 'QUALITY', 'pbr_materials', 'PBR材质系统', 'PBR Material System', 'L1.1 质', 'L1.1 Quality', '金属、布料、皮肤和塑料遵循物理材质响应。', 'Metal, fabric, skin, and plastic follow physically based material response.', 3, CONTEMPORARY_PLUS, 'clean', ['material', 'render']),
  mediaItem('CGI', 'QUALITY', 'subsurface_skin', '次表面散射皮肤', 'Subsurface-Scattering Skin', 'L1.1 质', 'L1.1 Quality', '皮肤具有真实半透明、毛孔和血色层次。', 'Skin has realistic translucency, pores, and blood-tone depth.', 3, CONTEMPORARY_PLUS, 'medium', ['skin', 'render']),
  mediaItem('CGI', 'QUALITY', 'hard_surface', '硬表面机械精度', 'Hard-Surface Mechanical Precision', 'L1.1 质', 'L1.1 Quality', '机械面板、倒角、接口和螺丝具有功能逻辑。', 'Mechanical panels, bevels, ports, and screws have functional logic.', 4, FUTURE, 'high', ['machine', 'material']),
  mediaItem('CGI', 'QUALITY', 'cloth_simulation', '布料模拟', 'Cloth Simulation', 'L1.1 质', 'L1.1 Quality', '衣料褶皱、重量和悬垂符合物理。', 'Fabric folds, weight, and drape obey physical behavior.', 3, CONTEMPORARY_PLUS, 'clean', ['cloth', 'physics'])
];

export const CD_MEDIA_CGI_EYE: MediaStyleItem[] = [
  mediaItem('CGI', 'EYE', 'turntable', 'Turntable 展示', 'Turntable Presentation', 'L1.2 眼', 'L1.2 Eye', '角色像资产转台展示，主视角清楚，中性背景。', 'Character reads as asset turntable presentation with clear main view and neutral background.', 3, CONTEMPORARY_PLUS, 'clean', ['asset', 'sheet']),
  mediaItem('CGI', 'EYE', 'asset_board', '3D资产板', '3D Asset Board', 'L1.2 眼', 'L1.2 Eye', '主模型、线框/材质局部、道具和色条并列展示。', 'Main model, wireframe/material callouts, props, and color strip shown together.', 3, CONTEMPORARY_PLUS, 'clean', ['asset', 'sheet']),
  mediaItem('CGI', 'EYE', 'hero_pose', '英雄姿态渲染', 'Hero Pose Render', 'L1.2 眼', 'L1.2 Eye', '单一强姿态展示角色，但避免电影场景和复杂背景。', 'One strong pose presents the character while avoiding cinematic scene and complex background.', 3, CONTEMPORARY_PLUS, 'medium', ['pose', 'render']),
  mediaItem('CGI', 'EYE', 'orthographic_asset', '正交资产视角', 'Orthographic Asset View', 'L1.2 眼', 'L1.2 Eye', '低透视变形，便于读取比例、装备和结构。', 'Low perspective distortion for reading proportions, gear, and structure.', 3, CONTEMPORARY_PLUS, 'clean', ['asset', 'composition'])
];

export const CD_MEDIA_CGI_CRAFT: MediaStyleItem[] = [
  mediaItem('CGI', 'CRAFT', 'unreal_engine', 'Unreal Engine 角色渲染', 'Unreal Engine Character Render', '工艺', 'Craft', '实时引擎光照、材质和游戏资产展示语言。', 'Realtime engine lighting, materials, and game-asset presentation language.', 3, CONTEMPORARY_PLUS, 'medium', ['engine']),
  mediaItem('CGI', 'CRAFT', 'octane_render', 'Octane 产品级渲染', 'Octane Product Render', '工艺', 'Craft', '清洁灯光、强材质反射和产品展示式角色渲染。', 'Clean lighting, strong material reflections, and product-display character rendering.', 3, CONTEMPORARY_PLUS, 'medium', ['renderer']),
  mediaItem('CGI', 'CRAFT', 'grey_model', '灰模雕刻展示', 'Grey-Model Sculpt Display', '工艺', 'Craft', '未贴图灰模展示，强调体积、解剖和雕刻表面。', 'Untextured grey model display emphasizing volume, anatomy, and sculpted surface.', 3, CONTEMPORARY_PLUS, 'clean', ['sculpt']),
  mediaItem('CGI', 'CRAFT', 'wireframe_callout', '线框局部标注', 'Wireframe Callouts', '工艺', 'Craft', '少量线框、拓扑或材质球作为资产说明。', 'Small wireframe, topology, or shader-ball callouts as asset explanation.', 3, CONTEMPORARY_PLUS, 'clean', ['asset', 'callout'])
];

export const CD_MEDIA_CGI_FORMAT: MediaStyleItem[] = [
  mediaItem('CGI', 'FORMAT', 'cgi_identity_board', 'CGI身份板', 'CGI Identity Board', '展示格式', 'Presentation Format', '大型3D主视图、材质局部、装备拆解和色条。', 'Large 3D main view, material closeups, gear breakdowns, and color strip.', 3, CONTEMPORARY_PLUS, 'clean', ['sheet']),
  mediaItem('CGI', 'FORMAT', 'game_asset_sheet', '游戏资产展示板', 'Game Asset Sheet', '展示格式', 'Presentation Format', '角色、装备、材质、比例和局部说明服务游戏资产。', 'Character, gear, material, proportion, and detail notes serve game asset production.', 3, CONTEMPORARY_PLUS, 'clean', ['game', 'sheet']),
  mediaItem('CGI', 'FORMAT', 'sculpt_sheet', '数字雕塑板', 'Digital Sculpt Sheet', '展示格式', 'Presentation Format', '多角度灰模、局部雕刻和解剖/表面标注。', 'Multi-angle grey model, sculpted details, and anatomy/surface notes.', 3, CONTEMPORARY_PLUS, 'clean', ['sculpt', 'sheet'])
];

export const CD_MEDIA_TANGIBLE_SOUL: MediaStyleItem[] = [
  mediaItem('TANGIBLE', 'SOUL', 'clay_puppet', '黏土定格偶', 'Clay Stop-Motion Puppet', 'A. 实体魂', 'A. Tangible Soul', '角色像真实黏土定格动画偶，有可触摸体积和手工表面。', 'Character reads as a real clay stop-motion puppet with tactile volume and handmade surface.', 2, HANDMADE_ERAS, 'clean', ['tangible', 'clay']),
  mediaItem('TANGIBLE', 'SOUL', 'maquette', '概念雕塑小样', 'Concept Maquette', 'A. 实体魂', 'A. Tangible Soul', '像被雕出来的角色小样，用于电影/游戏前期设计。', 'Reads as a sculpted character maquette for film/game preproduction design.', 2, HANDMADE_ERAS, 'clean', ['tangible', 'sculpture']),
  mediaItem('TANGIBLE', 'SOUL', 'figure_photo', '手办实物摄影', 'Collectible Figure Photography', 'A. 实体魂', 'A. Tangible Soul', '像实体手办被棚拍，强调关节、涂装和塑料/树脂材质。', 'Reads as a real figure photographed in studio, emphasizing joints, paint, and plastic/resin material.', 2, MODERN_PLUS, 'clean', ['tangible', 'toy']),
  mediaItem('TANGIBLE', 'SOUL', 'prosthetic_sfx', '实体特效化妆', 'Practical Prosthetic SFX', 'A. 实体魂', 'A. Tangible Soul', '硅胶、假体、面具和实体服装效果，不是纯CG。', 'Silicone, prosthetics, masks, and practical costume effects, not pure CG.', 2, MODERN_PLUS, 'medium', ['tangible', 'prosthetic'])
];

export const CD_MEDIA_TANGIBLE_QUALITY: MediaStyleItem[] = [
  mediaItem('TANGIBLE', 'QUALITY', 'fingerprint_clay', '手塑指纹', 'Hand-Sculpted Fingerprints', 'L1.1 质', 'L1.1 Quality', '表面保留手指压痕、轻微不平和真实黏土触感。', 'Surface keeps fingerprints, slight unevenness, and real clay tactility.', 2, HANDMADE_ERAS, 'clean', ['surface', 'clay']),
  mediaItem('TANGIBLE', 'QUALITY', 'resin_paint', '树脂涂装', 'Painted Resin Finish', 'L1.1 质', 'L1.1 Quality', '树脂硬度、模型漆、边缘高光和手工涂装层次。', 'Resin hardness, model paint, edge highlights, and hand-painted layering.', 2, MODERN_PLUS, 'clean', ['surface', 'paint']),
  mediaItem('TANGIBLE', 'QUALITY', 'fabric_fiber', '布料纤维', 'Visible Fabric Fibers', 'L1.1 质', 'L1.1 Quality', '布偶或服装表面有纤维、缝线和真实织物厚度。', 'Doll or costume surface has fibers, stitching, and real fabric thickness.', 2, HANDMADE_ERAS, 'clean', ['fabric', 'surface']),
  mediaItem('TANGIBLE', 'QUALITY', 'silicone_skin', '硅胶皮肤', 'Silicone Skin Surface', 'L1.1 质', 'L1.1 Quality', '实体假体皮肤、半透明硅胶、上色层和边缘接缝。', 'Practical prosthetic skin, translucent silicone, paint layers, and edge seams.', 2, MODERN_PLUS, 'medium', ['prosthetic', 'skin'])
];

export const CD_MEDIA_TANGIBLE_EYE: MediaStyleItem[] = [
  mediaItem('TANGIBLE', 'EYE', 'tabletop_photo', '桌面棚拍', 'Tabletop Studio Photography', 'L1.2 眼', 'L1.2 Eye', '实体模型在桌面小棚中被拍摄，比例和材质可读。', 'Physical model photographed in tabletop studio with readable scale and material.', 2, MODERN_PLUS, 'clean', ['photo', 'scale']),
  mediaItem('TANGIBLE', 'EYE', 'miniature_identity', '微缩身份板', 'Miniature Identity Board', 'L1.2 眼', 'L1.2 Eye', '主模型、替换脸、手部、道具和材质样本并列。', 'Main model, replacement faces, hands, props, and material samples shown together.', 2, MODERN_PLUS, 'clean', ['sheet', 'miniature']),
  mediaItem('TANGIBLE', 'EYE', 'stopmotion_frame', '定格动画帧', 'Stop-Motion Frame', 'L1.2 眼', 'L1.2 Eye', '像定格动画制作帧，但保持身份板清晰。', 'Reads like a stop-motion production frame while staying clear as an identity board.', 2, MODERN_PLUS, 'clean', ['animation', 'photo'])
];

export const CD_MEDIA_TANGIBLE_CRAFT: MediaStyleItem[] = [
  mediaItem('TANGIBLE', 'CRAFT', 'visible_seams', '可见接缝', 'Visible Seams', '工艺', 'Craft', '接缝、拼合线和关节说明真实制作过程。', 'Seams, assembly lines, and joints explain real fabrication.', 2, HANDMADE_ERAS, 'clean', ['seam', 'craft']),
  mediaItem('TANGIBLE', 'CRAFT', 'paint_wear', '涂装磨损', 'Paint Wear', '工艺', 'Craft', '边缘掉漆、干刷痕和手工旧化让实体可信。', 'Chipped edges, dry-brush marks, and hand weathering make the object credible.', 2, MODERN_PLUS, 'clean', ['paint', 'wear']),
  mediaItem('TANGIBLE', 'CRAFT', 'armature_joint', '可动骨架关节', 'Armature Joints', '工艺', 'Craft', '关节、支架和替换件作为定格偶制作证据。', 'Joints, armature, and replacement parts as evidence of puppet fabrication.', 2, MODERN_PLUS, 'clean', ['joint', 'craft'])
];

export const CD_MEDIA_TANGIBLE_FORMAT: MediaStyleItem[] = [
  mediaItem('TANGIBLE', 'FORMAT', 'craft_identity_board', '实体工艺身份板', 'Tangible Craft Identity Board', '展示格式', 'Presentation Format', '实物主模型、局部照片、材料样本、制作备注和色条。', 'Physical main model, close-up photos, material samples, fabrication notes, and color strip.', 2, MODERN_PLUS, 'clean', ['sheet']),
  mediaItem('TANGIBLE', 'FORMAT', 'maquette_turnaround', '雕塑小样三视图', 'Maquette Turnaround', '展示格式', 'Presentation Format', '实体雕塑正侧背和细节局部，强调真实体积。', 'Physical sculpture front/side/back and details, emphasizing real volume.', 2, MODERN_PLUS, 'clean', ['sculpture', 'sheet']),
  mediaItem('TANGIBLE', 'FORMAT', 'sfx_test_board', '特效化妆测试板', 'Prosthetic SFX Test Board', '展示格式', 'Presentation Format', '假体、面具、接缝、上妆测试和材料说明。', 'Prosthetic, mask, seams, makeup test, and material notes.', 2, MODERN_PLUS, 'medium', ['prosthetic', 'sheet'])
];

export const CONCEPT_MEDIA_STYLE_LIBRARIES = [
  { id: 'cd_media_photo_soul_lib', name: '摄影魂', nameEn: 'PHOTO SOUL', desc: 'Photography style router.', items: CD_MEDIA_PHOTOGRAPHY_SOUL },
  { id: 'cd_media_photo_quality_lib', name: '摄影 L1.1 质', nameEn: 'PHOTO L1.1 QUALITY', desc: 'Camera capture texture and light quality.', items: CD_MEDIA_PHOTOGRAPHY_QUALITY },
  { id: 'cd_media_photo_eye_lib', name: '摄影 L1.2 眼', nameEn: 'PHOTO L1.2 EYE', desc: 'Photographic view and framing.', items: CD_MEDIA_PHOTOGRAPHY_EYE },
  { id: 'cd_media_photo_craft_lib', name: '摄影工艺', nameEn: 'PHOTO CRAFT', desc: 'Photographic process and finishing.', items: CD_MEDIA_PHOTOGRAPHY_CRAFT },
  { id: 'cd_media_photo_format_lib', name: '摄影展示格式', nameEn: 'PHOTO FORMAT', desc: 'Photographic identity-board formats.', items: CD_MEDIA_PHOTOGRAPHY_FORMAT },
  { id: 'cd_media_paint_soul_lib', name: '绘画魂', nameEn: 'PAINT SOUL', desc: 'Painting and illustration style router.', items: CD_MEDIA_PAINTING_SOUL },
  { id: 'cd_media_paint_quality_lib', name: '绘画 L1.1 质', nameEn: 'PAINT L1.1 QUALITY', desc: 'Painting medium and line/render quality.', items: CD_MEDIA_PAINTING_QUALITY },
  { id: 'cd_media_paint_eye_lib', name: '绘画 L1.2 眼', nameEn: 'PAINT L1.2 EYE', desc: 'Painted concept-sheet view grammar.', items: CD_MEDIA_PAINTING_EYE },
  { id: 'cd_media_paint_craft_lib', name: '绘画工艺', nameEn: 'PAINT CRAFT', desc: 'Drawing, scan, print, and brush processes.', items: CD_MEDIA_PAINTING_CRAFT },
  { id: 'cd_media_paint_format_lib', name: '绘画展示格式', nameEn: 'PAINT FORMAT', desc: 'Painted concept-design sheet formats.', items: CD_MEDIA_PAINTING_FORMAT },
  { id: 'cd_media_cgi_soul_lib', name: 'CGI魂', nameEn: 'CGI SOUL', desc: 'CGI render pipeline router.', items: CD_MEDIA_CGI_SOUL },
  { id: 'cd_media_cgi_quality_lib', name: 'CGI L1.1 质', nameEn: 'CGI L1.1 QUALITY', desc: 'CGI material and render quality.', items: CD_MEDIA_CGI_QUALITY },
  { id: 'cd_media_cgi_eye_lib', name: 'CGI L1.2 眼', nameEn: 'CGI L1.2 EYE', desc: '3D asset view grammar.', items: CD_MEDIA_CGI_EYE },
  { id: 'cd_media_cgi_craft_lib', name: 'CGI工艺', nameEn: 'CGI CRAFT', desc: 'Renderer and asset-production processes.', items: CD_MEDIA_CGI_CRAFT },
  { id: 'cd_media_cgi_format_lib', name: 'CGI展示格式', nameEn: 'CGI FORMAT', desc: '3D presentation formats.', items: CD_MEDIA_CGI_FORMAT },
  { id: 'cd_media_tangible_soul_lib', name: '实体魂', nameEn: 'TANGIBLE SOUL', desc: 'Tangible handmade style router.', items: CD_MEDIA_TANGIBLE_SOUL },
  { id: 'cd_media_tangible_quality_lib', name: '实体 L1.1 质', nameEn: 'TANGIBLE L1.1 QUALITY', desc: 'Physical material quality.', items: CD_MEDIA_TANGIBLE_QUALITY },
  { id: 'cd_media_tangible_eye_lib', name: '实体 L1.2 眼', nameEn: 'TANGIBLE L1.2 EYE', desc: 'Physical object photography view.', items: CD_MEDIA_TANGIBLE_EYE },
  { id: 'cd_media_tangible_craft_lib', name: '实体工艺', nameEn: 'TANGIBLE CRAFT', desc: 'Handmade fabrication traces.', items: CD_MEDIA_TANGIBLE_CRAFT },
  { id: 'cd_media_tangible_format_lib', name: '实体展示格式', nameEn: 'TANGIBLE FORMAT', desc: 'Tangible object identity-board formats.', items: CD_MEDIA_TANGIBLE_FORMAT }
];
