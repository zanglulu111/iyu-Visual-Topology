import {
  ALL_REAL_ERAS,
  ConceptBaseItem,
  ConceptEra,
  ConceptGenderCoding,
  ConceptGroomingIntensity,
  ConceptMakeupRegister,
  ConceptAgeWear,
  ConceptSubjectScope,
  HUMAN_REAL_SCOPE,
  HUMANOID_SCOPE,
  MODERN_ERAS,
  UNIVERSAL_HUMAN_SCOPE
} from './types';

type VisibleBodyRow = [
  key: string,
  name: string,
  nameEn: string,
  group: string,
  groupEn: string,
  def: string,
  defEn: string,
  ontologyLevel?: ConceptBaseItem['ontologyLevel'],
  eras?: ConceptEra[],
  subjectScope?: ConceptSubjectScope[],
  risk?: ConceptBaseItem['risk'],
  affects?: string[]
];

const makeItems = (prefix: string, rows: VisibleBodyRow[], defaultAffects: string[]): ConceptBaseItem[] =>
  rows.map(([key, name, nameEn, group, groupEn, def, defEn, ontologyLevel = 1, eras = ALL_REAL_ERAS, subjectScope = UNIVERSAL_HUMAN_SCOPE, risk = 'clean', affects = defaultAffects]) => ({
    id: `cd_${prefix}_${key}`,
    name,
    nameEn,
    group,
    groupEn,
    def,
    defEn,
    subjectScope,
    ontologyLevel,
    eras,
    affects,
    risk
  }));

const getMakeupMeta = (item: ConceptBaseItem): {
  makeupRegister: ConceptMakeupRegister;
  groomingIntensity: ConceptGroomingIntensity;
  genderCoding: ConceptGenderCoding;
} => {
  const group = item.group || '';
  const id = item.id;
  if (id.includes('no_makeup')) return { makeupRegister: 'RESTRAINED', groomingIntensity: 'LIGHT', genderCoding: 'UNIVERSAL' };
  if (id.includes('clean_base') || id.includes('matte_makeup') || id.includes('nude_lip')) {
    return { makeupRegister: 'RESTRAINED', groomingIntensity: 'LIGHT', genderCoding: 'UNIVERSAL' };
  }
  if (group.startsWith('A.') || group.startsWith('B.')) {
    return { makeupRegister: 'BEAUTY', groomingIntensity: id.includes('red_lip') || id.includes('smokey_eye') || id.includes('cat_eyeliner') ? 'MEDIUM' : 'LIGHT', genderCoding: 'FEMININE' };
  }
  if (group.startsWith('C.')) {
    const isStage = id.includes('idol_stage') || id.includes('goth') || id.includes('avant_garde') || id.includes('editorial') || id.includes('runway');
    return { makeupRegister: isStage ? 'STAGE' : 'EDITORIAL', groomingIntensity: 'STRONG', genderCoding: 'ANDROGYNOUS' };
  }
  if (group.startsWith('D.')) return { makeupRegister: 'RITUAL', groomingIntensity: 'STRONG', genderCoding: 'UNIVERSAL' };
  if (group.startsWith('X.')) return { makeupRegister: item.risk === 'medium' ? 'TECH' : 'BOUNDARY', groomingIntensity: item.risk === 'high' ? 'EXTREME' : 'STRONG', genderCoding: 'ANDROGYNOUS' };
  return { makeupRegister: 'BEAUTY', groomingIntensity: 'MEDIUM', genderCoding: 'FEMININE' };
};

const withMakeupMeta = (items: ConceptBaseItem[]): ConceptBaseItem[] =>
  items.map(item => ({ ...item, ...getMakeupMeta(item) }));

const withBodyEvidenceMeta = (items: ConceptBaseItem[]): ConceptBaseItem[] => items.map(item => {
  const group = item.group || '';
  const id = item.id;
  const evidenceTags = new Set<string>([...(item.affects || [])]);
  let ageWear: ConceptAgeWear | undefined;
  if (id.includes('visible_pores') || id.includes('fine_texture') || id.includes('soft_skin') || id.includes('well_kept')) ageWear = 'WELL_KEPT';
  if (id.includes('rough') || id.includes('weathered') || id.includes('calloused') || id.includes('sun_spots')) ageWear = 'WEATHERED';
  if (id.includes('fine_lines') || id.includes('under_eye') || id.includes('sleepless')) ageWear = 'LIVED_IN';
  if (id.includes('deep_wrinkles')) ageWear = 'WEATHERED';
  if (group.includes('医疗') || group.includes('Medical')) evidenceTags.add('medical');
  if (group.includes('技术') || group.includes('Tech') || group.includes('赛博') || group.includes('Cybernetics')) evidenceTags.add('technology');
  if (group.includes('神秘') || group.includes('Mystic') || group.includes('仪式') || group.includes('Ritual')) evidenceTags.add('ritual');
  if (group.includes('损伤') || group.includes('Damage') || group.includes('新伤')) evidenceTags.add('combat');
  if (group.includes('现实') || group.includes('Real')) evidenceTags.add('realistic');
  return { ...item, ...(ageWear ? { ageWear } : {}), evidenceTags: Array.from(evidenceTags) };
});

const FACE_FEATURE_ROWS: VisibleBodyRow[] = [
  ['oval_face', '鹅蛋脸', 'Oval Face', 'A. 脸型轮廓', 'A. Face Shape', '脸型均衡柔顺，适合现实、古典、明星和身份板主视图。', 'Balanced soft face outline suited to realistic, classical, star-like, and identity-board views.'],
  ['round_face', '圆脸', 'Round Face', 'A. 脸型轮廓', 'A. Face Shape', '面部轮廓圆润，亲和、年轻、生活感更强。', 'Rounded facial outline, more approachable, youthful, and lived-in.'],
  ['long_face', '长脸', 'Long Face', 'A. 脸型轮廓', 'A. Face Shape', '纵向比例明显，适合冷感、模特、学者或贵族气质。', 'Clearly vertical facial proportion, suited to cool, model-like, scholar, or aristocratic aura.'],
  ['square_face', '方脸', 'Square Face', 'A. 脸型轮廓', 'A. Face Shape', '下颌和面部外框更方，力量感和稳定感强。', 'Squarer jaw and outer face frame, giving strength and stability.'],
  ['heart_face', '心形脸', 'Heart-Shaped Face', 'A. 脸型轮廓', 'A. Face Shape', '额部较宽、下巴收尖，适合甜感、明星或精致角色。', 'Wider forehead tapering to the chin, suited to sweet, star-like, or refined characters.'],
  ['diamond_face', '菱形脸', 'Diamond Face', 'A. 脸型轮廓', 'A. Face Shape', '颧骨最突出、额头和下巴收窄，识别性强。', 'Cheekbones dominate while forehead and chin narrow, creating high recognition.'],
  ['small_face', '小脸', 'Small Face', 'A. 脸型轮廓', 'A. Face Shape', '头脸比例显小，适合时尚、偶像和高定造型。', 'Small face-to-head proportion, suited to fashion, idol, and couture styling.'],
  ['broad_face', '宽脸', 'Broad Face', 'A. 脸型轮廓', 'A. Face Shape', '面部横向量感强，更接地、坚实或粗粝。', 'Broad horizontal face mass, feeling grounded, solid, or rough.'],
  ['bony_face', '骨感脸', 'Bony Face', 'A. 脸型轮廓', 'A. Face Shape', '面部脂肪少，骨点清楚，适合疲惫、时尚或苦修气质。', 'Low facial softness with clear bone points, suited to tired, fashion, or ascetic moods.'],
  ['fleshy_face', '肉感脸', 'Fleshy Face', 'A. 脸型轮廓', 'A. Face Shape', '脸部软组织更饱满，带生活感、亲和或富贵感。', 'Fuller soft tissue in the face, suggesting lived-in warmth, approachability, or wealth.'],

  ['high_cheekbones', '高颧骨', 'High Cheekbones', 'B. 骨相结构', 'B. Bone Structure', '颧骨位置高，增强时尚感、冷感和侧面识别。', 'High cheekbones strengthen fashion, coolness, and profile recognition.'],
  ['wide_cheekbones', '宽颧骨', 'Wide Cheekbones', 'B. 骨相结构', 'B. Bone Structure', '颧部横向展开，脸部更有力量和民族/地域识别可能。', 'Cheekbones spread horizontally, giving more force and possible regional recognition.'],
  ['soft_cheekbones', '柔和颧骨', 'Soft Cheekbones', 'B. 骨相结构', 'B. Bone Structure', '颧部不锋利，面部更温和、日常、亲近。', 'Cheekbones are not sharp, making the face warmer, everyday, and approachable.'],
  ['strong_brow_bone', '立体眉骨', 'Strong Brow Bone', 'B. 骨相结构', 'B. Bone Structure', '眉骨存在感强，眼窝更深，适合硬朗、古典或反派气质。', 'Prominent brow bone deepens the eyes, suited to rugged, classical, or antagonist aura.'],
  ['smooth_brow_bone', '平缓眉骨', 'Smooth Brow Bone', 'B. 骨相结构', 'B. Bone Structure', '眉骨过渡柔和，适合亲和、年轻或干净面孔。', 'Smooth brow transition suited to approachable, youthful, or clean faces.'],
  ['deep_eye_sockets', '深眼窝', 'Deep Eye Sockets', 'B. 骨相结构', 'B. Bone Structure', '眼窝深，面部光影更立体，适合成熟、历史、异域或疲惫感。', 'Deep eye sockets give stronger facial depth, suited to mature, historical, foreign, or tired moods.'],
  ['shallow_eye_sockets', '浅眼窝', 'Shallow Eye Sockets', 'B. 骨相结构', 'B. Bone Structure', '眼窝浅，面部更平整、清爽、生活化。', 'Shallow eye sockets make the face flatter, cleaner, and more everyday.'],
  ['sharp_jawline', '清晰下颌线', 'Sharp Jawline', 'B. 骨相结构', 'B. Bone Structure', '下颌线清楚，增强自律、权力、模特或战斗感。', 'Clear jawline strengthens discipline, power, model-like, or combat mood.'],
  ['soft_jawline', '柔和下颌线', 'Soft Jawline', 'B. 骨相结构', 'B. Bone Structure', '下颌线柔和，减少攻击性，增加亲和或甜感。', 'Soft jawline lowers aggression and increases warmth or sweetness.'],
  ['cleft_chin', '欧米伽下巴', 'Cleft Chin', 'B. 骨相结构', 'B. Bone Structure', '下巴中央有清晰凹痕，带经典影视脸识别。', 'A clear central chin dimple, giving classic screen-face recognition.'],
  ['pointed_chin', '尖下巴', 'Pointed Chin', 'B. 骨相结构', 'B. Bone Structure', '下巴收尖，增强精致、妖异或漫画化轮廓。', 'Tapered chin strengthens refinement, uncanny charm, or stylized outline.'],
  ['heavy_chin', '厚重下巴', 'Heavy Chin', 'B. 骨相结构', 'B. Bone Structure', '下巴量感强，角色更稳、固执或威严。', 'Heavy chin mass makes the character feel steady, stubborn, or authoritative.'],

  ['high_nose_bridge', '高鼻梁', 'High Nose Bridge', 'C. 鼻部特征', 'C. Nose Features', '鼻梁高，侧面轮廓更清楚，适合强识别头像。', 'High bridge gives a clearer profile and strong headshot recognition.'],
  ['low_nose_bridge', '低鼻梁', 'Low Nose Bridge', 'C. 鼻部特征', 'C. Nose Features', '鼻梁较低，面部更平缓、自然、生活化。', 'Lower bridge makes the face smoother, more natural, and lived-in.'],
  ['straight_nose', '直鼻', 'Straight Nose', 'C. 鼻部特征', 'C. Nose Features', '鼻梁线条平直干净，适合现实、职业和古典审美。', 'Straight clean nose line suited to realistic, professional, and classical aesthetics.'],
  ['roman_nose', '罗马鼻', 'Roman Nose', 'C. 鼻部特征', 'C. Nose Features', '鼻梁带轻微贵族弧度，增强古典、威严或历史感。', 'A noble curve in the bridge, increasing classical, stern, or historical mood.'],
  ['aquiline_nose', '鹰钩鼻', 'Aquiline Nose', 'C. 鼻部特征', 'C. Nose Features', '鼻尖或鼻梁有钩状特征，适合强性格、贵族、反派或老派人物。', 'Hooked bridge or tip, suited to strong personalities, aristocrats, villains, or old-school figures.'],
  ['button_nose', '小翘鼻', 'Button Nose', 'C. 鼻部特征', 'C. Nose Features', '鼻头小而上翘，增加甜感、偶像感或轻快气质。', 'Small upturned nose adding sweetness, idol mood, or lightness.'],
  ['round_nose_tip', '圆鼻头', 'Round Nose Tip', 'C. 鼻部特征', 'C. Nose Features', '鼻头圆润，降低锋利感，增强现实亲近性。', 'Rounded nose tip lowers sharpness and increases real-world approachability.'],
  ['wide_nostrils', '宽鼻翼', 'Wide Nostrils', 'C. 鼻部特征', 'C. Nose Features', '鼻翼更宽，面部更有呼吸感、力量或地域识别。', 'Wider nostrils add breath, strength, or regional specificity.'],
  ['crooked_nose', '轻微歪鼻梁', 'Slightly Crooked Nose', 'C. 鼻部特征', 'C. Nose Features', '鼻梁轻微不对称，增加真实感和个人经历。', 'Slight asymmetry in the bridge adds realism and personal history.'],

  ['thin_lips', '薄唇', 'Thin Lips', 'D. 嘴唇/口部', 'D. Mouth / Lips', '嘴唇较薄，表情更克制、冷静或严厉。', 'Thin lips make expression feel restrained, cool, or severe.'],
  ['full_lips', '丰厚双唇', 'Full Lips', 'D. 嘴唇/口部', 'D. Mouth / Lips', '嘴唇饱满，增强感官、明星、亲密或成人魅力。', 'Full lips increase sensuality, star quality, intimacy, or adult allure.'],
  ['sharp_cupid_bow', '清晰唇峰', 'Sharp Cupid Bow', 'D. 嘴唇/口部', 'D. Mouth / Lips', '上唇唇峰明显，面部更精致和可识别。', 'Defined upper-lip bow makes the face more refined and recognizable.'],
  ['soft_lip_line', '柔和唇线', 'Soft Lip Line', 'D. 嘴唇/口部', 'D. Mouth / Lips', '唇线不硬，适合自然、日常和温柔气质。', 'Soft lip edge suited to natural, everyday, and gentle aura.'],
  ['small_mouth', '小嘴', 'Small Mouth', 'D. 嘴唇/口部', 'D. Mouth / Lips', '嘴部尺度较小，增加精致、克制或古典感。', 'Smaller mouth scale adds refinement, restraint, or classical feeling.'],
  ['wide_mouth', '宽嘴', 'Wide Mouth', 'D. 嘴唇/口部', 'D. Mouth / Lips', '嘴部横向更宽，表情张力和个性更强。', 'Wider mouth gives stronger expression tension and personality.'],
  ['upturned_mouth', '上扬嘴角', 'Upturned Mouth Corners', 'D. 嘴唇/口部', 'D. Mouth / Lips', '自然嘴角上扬，脸部自带亲和或狡黠。', 'Naturally lifted mouth corners give warmth or slyness.'],
  ['downturned_mouth', '下垂嘴角', 'Downturned Mouth Corners', 'D. 嘴唇/口部', 'D. Mouth / Lips', '嘴角略下垂，增加冷感、倦感或不悦底色。', 'Slightly downturned corners add coolness, fatigue, or displeasure.'],
  ['tooth_gap', '牙缝', 'Tooth Gap', 'D. 嘴唇/口部', 'D. Mouth / Lips', '门牙间有可见间隙，是强识别但不破坏美感的小特征。', 'Visible gap between front teeth, a strong recognizable imperfection without harming appeal.'],
  ['canine_teeth', '小虎牙', 'Small Canines', 'D. 嘴唇/口部', 'D. Mouth / Lips', '轻微虎牙增加顽皮、捕食感或偶像识别。', 'Small canines add playfulness, predatory hint, or idol recognition.'],

  ['balanced_thirds', '三庭均衡', 'Balanced Facial Thirds', 'E. 比例关系', 'E. Facial Proportion', '额头、中庭、下庭比例均衡，适合主视图和标准角色设定。', 'Balanced forehead, midface, and lower face, suited to front views and standard character sheets.'],
  ['long_midface', '中庭偏长', 'Long Midface', 'E. 比例关系', 'E. Facial Proportion', '中庭偏长，脸更成熟、冷或模特化。', 'Longer midface makes the face more mature, cool, or model-like.'],
  ['short_midface', '中庭偏短', 'Short Midface', 'E. 比例关系', 'E. Facial Proportion', '中庭偏短，脸更甜、年轻或偶像化。', 'Shorter midface makes the face sweeter, younger, or idol-like.'],
  ['long_lower_face', '下庭偏长', 'Long Lower Face', 'E. 比例关系', 'E. Facial Proportion', '下半脸更长，增加坚毅、疲惫或成人感。', 'Longer lower face adds determination, fatigue, or adult quality.'],
  ['compact_features', '五官集中', 'Compact Features', 'E. 比例关系', 'E. Facial Proportion', '五官位置更集中，面部留白较多，适合清冷或童话感。', 'Features sit closer together with more facial blank space, suited to cool or fairy-tale moods.'],
  ['spread_features', '五官舒展', 'Spread Features', 'E. 比例关系', 'E. Facial Proportion', '五官分布更舒展，脸部更开阔、自然、现实。', 'Features spread more broadly, making the face open, natural, and realistic.'],
  ['close_brow_eye', '眉眼距离近', 'Close Brow-Eye Distance', 'E. 比例关系', 'E. Facial Proportion', '眉眼压近，眼神更强、更有压迫。', 'Brows sit close to the eyes, strengthening gaze and pressure.'],
  ['wide_brow_eye', '眉眼距离远', 'Wide Brow-Eye Distance', 'E. 比例关系', 'E. Facial Proportion', '眉眼距离大，表情更松、更梦幻或无辜。', 'Wider brow-eye distance makes expression looser, dreamier, or more innocent.'],

  ['dimples', '酒窝', 'Dimples', 'F. 识别小特征', 'F. Recognition Details', '笑时出现的脸颊凹点，增加亲和与记忆点。', 'Cheek indentations when smiling, adding warmth and memorability.'],
  ['single_dimple', '单侧酒窝', 'Single Dimple', 'F. 识别小特征', 'F. Recognition Details', '只有一侧明显酒窝，增强不对称真实感。', 'One visible dimple on one side, increasing asymmetric realism.'],
  ['beauty_mark', '美人痣', 'Beauty Mark', 'F. 识别小特征', 'F. Recognition Details', '面部小黑痣作为稳定识别点。', 'A small facial mole as a stable recognition point.'],
  ['tear_mole', '泪痣', 'Tear Mole', 'F. 识别小特征', 'F. Recognition Details', '眼下或眼尾附近的痣，增强忧郁、魅力或偶像感。', 'A mole under or beside the eye, increasing melancholy, charm, or idol quality.'],
  ['nose_bridge_mole', '鼻梁痣', 'Nose-Bridge Mole', 'F. 识别小特征', 'F. Recognition Details', '鼻梁或鼻侧的小痣，让脸部中心更可记。', 'A small mole on the bridge or side of the nose, making the face center memorable.'],
  ['freckles_across_nose', '鼻梁雀斑', 'Freckles Across Nose', 'F. 识别小特征', 'F. Recognition Details', '雀斑集中在鼻梁和脸颊，增加阳光、真实或乡野气质。', 'Freckles across nose and cheeks, adding sunlit, real, or rural quality.'],
  ['asymmetric_face', '轻微脸部不对称', 'Slight Facial Asymmetry', 'F. 识别小特征', 'F. Recognition Details', '五官轻微不对称，避免塑料完美脸。', 'Slight asymmetry prevents a plastic-perfect face.'],
  ['old_face_scar', '旧面部细疤', 'Old Fine Face Scar', 'F. 识别小特征', 'F. Recognition Details', '已经愈合的细小面部疤痕，提供经历而不抢走身份。', 'A healed fine facial scar adds history without overtaking identity.'],
  ['broken_brow', '断眉', 'Broken Brow', 'F. 识别小特征', 'F. Recognition Details', '眉毛有缺口或旧疤，适合战斗、街头或强个性人物。', 'A break or scar through the brow, suited to combat, street, or strong personalities.'],

  ['cinematic_face', '电影脸', 'Cinematic Face', 'G. 综合脸部气质', 'G. Face Archetype', '脸部有真实细节和镜头记忆点，不像通用网红脸。', 'A face with real detail and screen memorability, not a generic influencer face.'],
  ['model_face', '模特脸', 'Model Face', 'G. 综合脸部气质', 'G. Face Archetype', '骨相、比例和冷感适合秀场或杂志系统。', 'Bone structure, proportion, and coolness suited to runway or magazine systems.'],
  ['idol_face', '偶像脸', 'Idol Face', 'G. 综合脸部气质', 'G. Face Archetype', '面部更清洁、亲和、可被粉丝记住。', 'Cleaner, approachable, and easy for fans to remember.'],
  ['aristocratic_face', '贵族脸', 'Aristocratic Face', 'G. 综合脸部气质', 'G. Face Archetype', '脸部带距离感、保养感和礼制训练痕迹。', 'Face carries distance, maintenance, and traces of etiquette training.'],
  ['street_face', '街头脸', 'Street Face', 'G. 综合脸部气质', 'G. Face Archetype', '脸部更真实、警觉、带城市生活磨损。', 'Face feels real, alert, and marked by urban life.'],
  ['fox_like_face', '狐狸感脸', 'Fox-Like Face', 'G. 综合脸部气质', 'G. Face Archetype', '五官锋利、眼嘴狡黠，偏魅惑和机敏。', 'Sharper features with sly eyes and mouth, leaning alluring and clever.'],
  ['cat_like_face', '猫系脸', 'Cat-Like Face', 'G. 综合脸部气质', 'G. Face Archetype', '面部带冷淡、灵敏、独立感。', 'Face carries coolness, sensitivity, and independence.'],
  ['dog_like_face', '犬系脸', 'Dog-Like Face', 'G. 综合脸部气质', 'G. Face Archetype', '面部更直率、忠诚、亲近。', 'Face reads more direct, loyal, and approachable.'],

  ['metal_face_plate', '金属义面', 'Metal Face Plate', 'X. 越界面部特征', 'X. Boundary Face Features', '局部面部被金属义面替代或覆盖，必须由世界法则授权。', 'A local facial area is replaced or covered by a metal prosthetic face plate; requires world-law permission.', 4, ['near_future', 'far_future', 'timeless'], HUMANOID_SCOPE, 'high', ['face', 'material', 'technology']],
  ['ceramic_mask_face', '陶瓷面具化', 'Ceramic Mask Face', 'X. 越界面部特征', 'X. Boundary Face Features', '脸部像活体陶瓷面具，保留人类五官但材质越界。', 'The face reads like a living ceramic mask, preserving human features while crossing material ontology.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high', ['face', 'material']],
  ['subdermal_face_lines', '皮下发光面纹', 'Subdermal Glowing Face Lines', 'X. 越界面部特征', 'X. Boundary Face Features', '脸部有皮下发光纹路，适合实验、神化或技术化类人。', 'Subdermal glowing facial lines suited to experimental, deified, or technologized humanoids.', 3, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'medium', ['face', 'symbol', 'technology']],
  ['small_horns_forehead', '额部小角', 'Small Forehead Horns', 'X. 越界面部特征', 'X. Boundary Face Features', '额头长出小型角或骨突，不应在写实人类随机中出现。', 'Small horns or bony protrusions grow from the forehead; should not appear in realist-human randoms.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high', ['face', 'body']],
  ['animalized_nose_mouth', '动物化鼻口', 'Animalized Nose-Mouth', 'X. 越界面部特征', 'X. Boundary Face Features', '鼻口部局部动物化，但仍保持类人识别。', 'Nose-mouth area becomes partly animalized while retaining humanoid recognition.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high', ['face', 'body']],
  ['cracked_face_surface', '面部裂纹', 'Cracked Face Surface', 'X. 越界面部特征', 'X. Boundary Face Features', '脸部表面出现非普通伤疤的结构裂纹，适合神像、陶瓷、矿物或实验体。', 'Structural cracks appear on the face beyond ordinary scarring, suited to icons, ceramic, mineral, or experimental subjects.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high', ['face', 'material']]
];

const MAKEUP_ROWS: VisibleBodyRow[] = [
  ['no_makeup', '伪素颜', 'No-Makeup Look', 'A. 现实妆容', 'A. Realistic Makeup', '只做轻微修饰，保留真实皮肤和五官。', 'Subtle enhancement while preserving real skin and features.', 1, MODERN_ERAS, HUMAN_REAL_SCOPE],
  ['clean_base', '干净底妆', 'Clean Base Makeup', 'A. 现实妆容', 'A. Realistic Makeup', '肤面均匀但不塑料，适合职业、偶像和定妆照。', 'Even skin finish without plastic perfection, suited to professional, idol, and character portrait contexts.', 1, MODERN_ERAS, HUMAN_REAL_SCOPE],
  ['natural_blush', '自然腮红', 'Natural Blush', 'A. 现实妆容', 'A. Realistic Makeup', '轻微脸颊红润，增强生命力和亲近感。', 'Subtle cheek color adds vitality and approachability.', 1, MODERN_ERAS, HUMAN_REAL_SCOPE],
  ['matte_makeup', '哑光妆面', 'Matte Makeup', 'A. 现实妆容', 'A. Realistic Makeup', '低反光、干净、克制，适合杂志、职业和高定。', 'Low-shine, clean, restrained finish suited to magazine, professional, and couture contexts.', 1, MODERN_ERAS],
  ['glossy_makeup', '水光妆', 'Glossy Makeup', 'A. 现实妆容', 'A. Realistic Makeup', '妆面有透明湿润反光，适合明星、韩系、夜场或未来感。', 'Transparent wet shine suited to celebrity, Korean styling, nightlife, or future mood.', 1, MODERN_ERAS],
  ['red_lip', '大红唇', 'Classic Red Lip', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '鲜明红唇作为强视觉锚点，适合高定、名流、复古和权力感。', 'Bold red lip as a strong visual anchor, suited to couture, socialites, vintage, and power aura.', 1, ['industrial', 'modern', 'contemporary', 'timeless']],
  ['dark_lip', '深色唇妆', 'Dark Lip', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '酒红、黑红或深紫唇色，适合哥特、夜场、反派或舞台。', 'Wine, black-red, or deep violet lip color suited to gothic, nightlife, villain, or stage identities.', 1, MODERN_ERAS],
  ['nude_lip', '裸色唇妆', 'Nude Lip', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '低对比唇色，适合静奢、职业、杂志和成熟人物。', 'Low-contrast lip color suited to quiet luxury, professional, magazine, and mature figures.', 1, MODERN_ERAS],
  ['cat_eyeliner', '猫眼眼线', 'Cat Eyeliner', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '外挑眼线强化眼神方向和攻击性美感。', 'Winged liner strengthens gaze direction and sharp allure.', 1, MODERN_ERAS],
  ['smokey_eye', '烟熏眼妆', 'Smokey Eye', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '深色晕染眼妆，适合夜场、摇滚、名流和危险感。', 'Dark blended eye makeup suited to nightlife, rock, socialites, and danger.', 1, MODERN_ERAS],
  ['bleached_brows', '漂白眉', 'Bleached Brows', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '眉毛视觉弱化，脸部更编辑化、异质或高定。', 'Brows are visually reduced, making the face more editorial, strange, or couture.', 1, MODERN_ERAS],
  ['runway_graphic', '秀场图形妆', 'Runway Graphic Makeup', 'C. 风格化妆容', 'C. Stylized Makeup', '清晰几何色块或线条，作为时尚系统的一部分。', 'Clear geometric color blocks or lines as part of the fashion system.', 1, MODERN_ERAS],
  ['goth_makeup', '哥特妆', 'Goth Makeup', 'C. 风格化妆容', 'C. Stylized Makeup', '苍白底色、深唇或重眼妆形成哥特识别。', 'Pale base, dark lips, or heavy eye makeup create gothic recognition.', 1, MODERN_ERAS],
  ['idol_stage_makeup', '偶像舞台妆', 'Idol Stage Makeup', 'C. 风格化妆容', 'C. Stylized Makeup', '亮片、强眼妆和可远距离识别的舞台修饰。', 'Glitter, strong eye makeup, and stage-readable enhancement.', 1, MODERN_ERAS],
  ['editorial_jewel', '编辑贴钻妆', 'Editorial Face Gems', 'C. 风格化妆容', 'C. Stylized Makeup', '面部贴钻或亮片作为拍摄造型点。', 'Face gems or sequins as a styling point for editorial shoots.', 1, MODERN_ERAS],
  ['avant_garde_makeup', '先锋妆', 'Avant-Garde Makeup', 'C. 风格化妆容', 'C. Stylized Makeup', '非日常妆容结构，但仍服务脸部识别和角色风格。', 'Non-daily makeup structure that still serves facial recognition and character style.', 1, MODERN_ERAS],
  ['kabuki_makeup', '歌舞伎妆', 'Kabuki Makeup', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '程式化红黑线条和白底，需匹配戏剧或仪式语境。', 'Codified red-black lines and white base, requiring theatrical or ritual context.', 1, ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless']],
  ['opera_makeup', '戏曲脸谱', 'Opera Face Paint', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '脸谱化色块与符号，强调角色类型而非普通日常脸。', 'Operatic color blocks and symbols, emphasizing character type rather than ordinary face.'],
  ['tribal_paint', '部落纹面', 'Tribal Face Paint', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '面部彩绘来自仪式、族群或战斗身份，不作为随机装饰。', 'Face paint derives from ritual, group, or combat identity, not random decoration.'],
  ['ritual_ash_face', '仪式灰面', 'Ritual Ash Makeup', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '灰、粉、泥或炭在脸上形成仪式状态。', 'Ash, powder, mud, or charcoal forms a ritual state on the face.'],
  ['cyber_makeup', '赛博面部线条', 'Cyber Face Makeup', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '几何银线、接口感或发光妆效；优先解释为妆，不直接变成义体。', 'Geometric silver lines, interface mood, or glowing makeup; prefer makeup interpretation over literal cybernetics.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['hologram_makeup', '全息妆效', 'Hologram Makeup', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '全息反光或虹彩妆效，适合偶像、赛博、虚拟或高定。', 'Holographic or iridescent makeup suited to idol, cyber, virtual, or couture contexts.', 2, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['biolum_face_paint', '生物荧光彩绘', 'Bioluminescent Face Paint', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '发光彩绘可解释为颜料、仪式材料或生物技术。', 'Glowing face paint may be explained as pigment, ritual material, or biotechnology.', 3, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'medium']
];

const SKIN_MATERIAL_ROWS: VisibleBodyRow[] = [
  ['visible_pores', '可见毛孔', 'Visible Pores', 'A. 现实皮肤质地', 'A. Real Skin Texture', '保留真实皮肤微纹理，避免塑料脸。', 'Keeps real skin micro-texture and avoids plastic face.'],
  ['fine_texture', '细腻肤理', 'Fine Skin Grain', 'A. 现实皮肤质地', 'A. Real Skin Texture', '肤理细但仍真实，适合近景设定和高级定妆。', 'Fine but still real skin grain, suited to close design views and polished portraits.'],
  ['matte_skin', '雾面皮肤', 'Matte Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '皮肤低反光、干净、粉质感轻。', 'Low-reflection clean skin with a slight powdery finish.'],
  ['soft_skin', '柔软皮肤', 'Soft Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '触感柔和，适合亲和、年轻或保养良好人物。', 'Soft tactile quality suited to approachable, young, or well-kept figures.'],
  ['rough_skin', '粗糙皮肤', 'Rough Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '皮肤粗粝，来自户外、劳动、贫困或长期暴露。', 'Rough skin from outdoor life, labor, poverty, or long exposure.'],
  ['thin_skin', '薄透皮肤', 'Thin Translucent Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '皮肤较薄，能显出细微血色或静脉感。', 'Thin skin showing subtle blood tone or vein quality.'],
  ['thick_skin', '厚实皮肤', 'Thick Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '皮肤厚实，适合劳动者、运动员、战斗或户外人物。', 'Thicker skin suited to workers, athletes, fighters, or outdoor figures.'],
  ['weathered_skin', '风吹日晒皮肤', 'Weathered Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '日晒、风化和生活经验形成的自然表面。', 'Natural surface shaped by sun, weather, and life experience.'],
  ['well_kept_skin', '精心保养皮肤', 'Well-Kept Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '皮肤被护理和资源维持得干净，但不要失去真实纹理。', 'Skin maintained clean by care and resources without losing real texture.'],

  ['fine_lines', '细纹', 'Fine Lines', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '眼周、嘴角或额头出现细纹，提供年龄和真实感。', 'Fine lines around eyes, mouth, or forehead provide age and realism.'],
  ['deep_wrinkles', '深皱纹', 'Deep Wrinkles', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '深层皱纹显示长时间经验、压力或高龄。', 'Deep wrinkles show long experience, pressure, or advanced age.'],
  ['under_eye_texture', '眼下纹理', 'Under-Eye Texture', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '眼下细纹、轻微凹陷或疲惫纹理，不等于表情。', 'Under-eye lines, slight hollowing, or tired texture, not expression itself.'],
  ['sun_spots', '晒斑', 'Sun Spots', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '日晒留下的色素点，适合户外、成熟和生活感人物。', 'Sun-caused pigment spots suited to outdoor, mature, and lived-in figures.'],
  ['acne_marks', '痘印', 'Acne Marks', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '轻微痘印或凹凸让脸更真实。', 'Subtle acne marks or unevenness make the face more real.'],
  ['calloused_skin', '老茧皮肤', 'Calloused Skin', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '手掌、关节或足部皮肤硬化，说明劳动、训练或旅行。', 'Hardened palms, knuckles, or feet explain labor, training, or travel.'],
  ['stretch_marks', '生长纹', 'Stretch Marks', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '身体局部银白纹理，提供真实身体经历。', 'Local silvery body lines provide real bodily history.'],
  ['cellulite', '橘皮纹理', 'Cellulite', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '大腿、臀部或身体局部真实皮肤凹凸。', 'Real skin dimpling on thighs, hips, or local body areas.'],

  ['freckled_skin', '雀斑皮肤', 'Freckled Skin', 'C. 色素/自然斑', 'C. Pigment / Natural Marks', '皮肤上有自然雀斑，可与面部识别点分开理解。', 'Natural freckles across skin, separate from face-recognition marks.'],
  ['mole_pattern', '多痣皮肤', 'Mole Pattern', 'C. 色素/自然斑', 'C. Pigment / Natural Marks', '身体有若干自然黑痣，形成真实而非装饰的分布。', 'Several natural moles on the body, forming real rather than decorative distribution.'],
  ['birthmark_patch', '胎记色块', 'Birthmark Patch', 'C. 色素/自然斑', 'C. Pigment / Natural Marks', '局部大块色素胎记，作为稳定身体识别。', 'A larger local birthmark patch as stable body recognition.'],
  ['vitiligo_patches', '白癜风色块', 'Vitiligo Patches', 'C. 色素/自然斑', 'C. Pigment / Natural Marks', '局部色素脱失形成清晰图案，但保持真实人类皮肤逻辑。', 'Depigmented patches form clear patterning while staying within real human skin logic.'],
  ['rosacea_redness', '红血丝泛红', 'Rosacea Redness', 'C. 色素/自然斑', 'C. Pigment / Natural Marks', '脸颊或鼻周红血丝、泛红，提供现实脆弱感。', 'Capillary redness around cheeks or nose, giving realistic vulnerability.'],

  ['porcelain_skin', '瓷质皮肤', 'Porcelain Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤像活体白瓷，适合人偶、神像或高幻想类人。', 'Skin reads as living white porcelain, suited to dolls, icons, or high-fantasy humanoids.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['wax_skin', '蜡质皮肤', 'Waxen Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤有蜡像般的半透明和不自然平滑。', 'Skin has wax-figure translucency and unnatural smoothness.', 3, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['marble_skin', '大理石皮肤', 'Marble Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤像大理石，有石纹和雕像感。', 'Skin resembles marble, with stone veins and statue quality.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['jade_skin', '玉质皮肤', 'Jade Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤像玉石，有温润半透明质感。', 'Skin resembles jade, warm and subtly translucent.', 4, ['timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['chrome_skin', '镀铬皮肤', 'Chrome Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤呈金属镜面反射，属于强技术或非人授权。', 'Skin has mirror-like metallic reflection, requiring strong tech or non-human permission.', 4, ['near_future', 'far_future', 'timeless'], HUMANOID_SCOPE, 'high'],
  ['glass_skin_material', '玻璃皮肤', 'Glass Skin Material', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '身体表面像透明或半透明玻璃，不是普通水光肌。', 'Body surface reads as transparent or translucent glass, not ordinary glossy skin.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['bark_skin', '树皮皮肤', 'Bark Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤木质化或树皮化，适合植物共生、妖怪或神话。', 'Skin becomes woody or bark-like, suited to plant symbiosis, yokai, or myth.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['scale_skin', '鳞片皮肤', 'Scale Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '局部或大面积鳞片化，适合蛇、龙、海洋或实验体。', 'Local or broad scaling, suited to serpent, dragon, oceanic, or experimental subjects.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['biolum_skin', '生物荧光皮肤', 'Bioluminescent Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤内部或表面有生物发光结构。', 'Skin carries internal or surface bioluminescent structure.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['mycelium_skin', '菌丝皮层', 'Mycelium Skin Layer', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '菌丝或真菌组织进入皮肤表层，必须由感染、生态或神话逻辑授权。', 'Mycelium or fungal tissue enters the skin surface, requiring infection, ecology, or myth logic.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['paper_thin_skin', '纸薄皮肤', 'Paper-Thin Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '皮肤显得很薄、干燥、脆，适合病弱、老年、苦修或长期室内人物。', 'Skin reads very thin, dry, and fragile, suited to frail, elderly, ascetic, or long-indoor figures.'],
  ['velvet_skin', '绒感皮肤', 'Velvet Skin', 'A. 现实皮肤质地', 'A. Real Skin Texture', '皮肤表面柔细低光，像绒面一样吸光，适合高定、偶像或柔和成人魅力。', 'Skin surface is soft, fine, and low-sheen like velvet, suited to couture, idols, or soft adult allure.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['scar_tissue_skin', '疤痕组织皮肤', 'Scar-Tissue Skin', 'B. 年龄/生活痕迹', 'B. Age / Life Traces', '局部皮肤由愈合后的疤痕组织构成，强调身体经历而不是新伤。', 'Local skin is formed by healed scar tissue, emphasizing body history rather than fresh injury.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['iridescent_skin', '虹彩皮肤', 'Iridescent Skin', 'X. 越界皮肤材质', 'X. Boundary Skin Material', '皮肤在边缘出现虹彩变色，必须由生物、科技、神话或高幻想逻辑授权。', 'Skin shifts iridescently at the edges, requiring biological, tech, myth, or high-fantasy permission.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high']
];

const SURFACE_STATE_ROWS: VisibleBodyRow[] = [
  ['light_sweat', '细密汗珠', 'Sweat Beads', 'A. 生理表面状态', 'A. Physiological Surface', '汗珠附着在额头、上唇或锁骨，是状态，不是皮肤材质。', 'Sweat beads on forehead, upper lip, or collarbone; a state, not skin material.'],
  ['heavy_sweat', '大汗淋漓', 'Heavy Sweat', 'A. 生理表面状态', 'A. Physiological Surface', '大量汗水流动，适合运动、战斗、夜班、炎热或紧张状态。', 'Heavy running sweat suited to sport, combat, night shift, heat, or tension.'],
  ['oily_sheen', '油性光泽', 'Oily Sheen', 'A. 生理表面状态', 'A. Physiological Surface', 'T 区、额头或鼻翼有油光，说明劳累、热或真实皮肤状态。', 'Oil shine on T-zone, forehead, or nose wings, showing fatigue, heat, or real skin state.'],
  ['tear_tracks', '泪痕', 'Tear Tracks', 'A. 生理表面状态', 'A. Physiological Surface', '泪水留下湿痕，适合悲伤、羞耻、疲惫或风吹刺激。', 'Tears leave wet tracks, suited to sadness, shame, fatigue, or wind irritation.'],
  ['saliva_shine', '唇角湿光', 'Mouth-Corner Wet Shine', 'A. 生理表面状态', 'A. Physiological Surface', '嘴角或唇部轻微湿光，需保持成人和非露骨。', 'Subtle wet shine at mouth corner or lips; keep adult and non-explicit.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['goosebumps', '鸡皮疙瘩', 'Goosebumps', 'A. 生理表面状态', 'A. Physiological Surface', '皮肤因冷、恐惧或触觉反应出现细小隆起。', 'Tiny raised bumps from cold, fear, or tactile response.'],
  ['rain_wet', '雨水流淌', 'Rain-Wet Surface', 'B. 环境附着', 'B. Environmental Coating', '雨水在脸、头发、肩膀和服装上流动。', 'Rainwater runs across face, hair, shoulders, and clothing.'],
  ['dust_coating', '尘土附着', 'Dust Coating', 'B. 环境附着', 'B. Environmental Coating', '灰尘附着在皮肤、发丝、衣物和鞋面，适合废土、工地或旅途。', 'Dust coats skin, hair, clothing, and shoes, suited to wasteland, construction, or travel.'],
  ['mud_splatter', '泥点飞溅', 'Mud Splatter', 'B. 环境附着', 'B. Environmental Coating', '泥点局部溅在腿、手、脸或衣物边缘。', 'Mud splashes locally on legs, hands, face, or clothing edges.'],
  ['sand_grain', '沙粒附着', 'Sand Grains', 'B. 环境附着', 'B. Environmental Coating', '细沙附着在皮肤褶皱、发丝和衣物缝隙。', 'Fine sand sticks to skin folds, hair, and clothing seams.'],
  ['snowflakes', '雪片附着', 'Snowflakes', 'B. 环境附着', 'B. Environmental Coating', '雪落在肩头、头发和睫毛上，作为环境证据。', 'Snow rests on shoulders, hair, and eyelashes as environmental evidence.'],
  ['salt_crust', '盐渍结晶', 'Salt Crust', 'B. 环境附着', 'B. Environmental Coating', '海风、汗水或荒漠留下白色盐渍边。', 'Sea wind, sweat, or desert exposure leaves white salt edges.'],
  ['mechanic_grease', '机械油污', 'Mechanic Grease', 'C. 工作/材料污损', 'C. Work / Material Smear', '黑色机油或润滑脂附着在手、脸颊或工作服上。', 'Black oil or grease sticks to hands, cheeks, or work clothes.'],
  ['charcoal_smudge', '炭黑污迹', 'Charcoal Smudge', 'C. 工作/材料污损', 'C. Work / Material Smear', '炭黑、煤灰或火场烟灰形成可见污迹。', 'Charcoal, coal dust, or fire soot forms visible smudges.'],
  ['paint_splatter', '颜料飞溅', 'Paint Splatter', 'C. 工作/材料污损', 'C. Work / Material Smear', '颜料或喷漆落在皮肤和服装上，适合艺术家、工人、街头。', 'Paint or spray lands on skin and clothing, suited to artists, workers, or street figures.'],
  ['ink_stain', '墨水污迹', 'Ink Stains', 'C. 工作/材料污损', 'C. Work / Material Smear', '手指、袖口或脸侧有墨水痕迹，适合档案、书写、印刷或纹身工作。', 'Ink marks on fingers, cuffs, or face side, suited to archive, writing, printing, or tattoo work.'],
  ['flour_powder', '面粉粉尘', 'Flour Powder', 'C. 工作/材料污损', 'C. Work / Material Smear', '白色粉尘落在手、脸或围裙上，适合厨师、烘焙和劳动身份。', 'White powder on hands, face, or apron, suited to cooks, baking, and labor identities.'],
  ['chalk_marks', '粉笔记号', 'Chalk Marks', 'C. 工作/材料污损', 'C. Work / Material Smear', '粉笔、裁衣粉或标注痕迹，适合教师、裁缝、造型师和工匠。', 'Chalk, tailor chalk, or marking traces, suited to teachers, tailors, stylists, and craftspeople.'],
  ['blood_splatter', '血迹飞溅', 'Blood Splatter', 'D. 损伤/医疗附着', 'D. Injury / Medical Coating', '血迹作为事件附着物，不能替代伤口或身份逻辑。', 'Blood as event coating, not a replacement for wound or identity logic.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['nosebleed_trace', '鼻血痕迹', 'Nosebleed Trace', 'D. 损伤/医疗附着', 'D. Injury / Medical Coating', '鼻下或唇边有少量血痕，适合打斗、病弱、实验或压力。', 'Small blood trace under nose or near lips, suited to fight, frailty, experiment, or pressure.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['iodine_stain', '碘伏痕迹', 'Iodine Stain', 'D. 损伤/医疗附着', 'D. Injury / Medical Coating', '皮肤上有消毒液黄褐色痕迹，说明医疗处理。', 'Yellow-brown disinfectant stain on skin, indicating medical treatment.'],
  ['medical_tape_residue', '医用胶带残留', 'Medical Tape Residue', 'D. 损伤/医疗附着', 'D. Injury / Medical Coating', '胶带边缘、残胶或传感贴片痕迹留在皮肤上。', 'Tape edges, residue, or sensor-pad marks remain on skin.'],
  ['bandage_wrap', '绷带包裹', 'Bandage Wrap', 'D. 损伤/医疗附着', 'D. Injury / Medical Coating', '绷带是外部包裹和治疗证据，不是身体本体。', 'Bandage is external wrapping and treatment evidence, not body ontology.'],
  ['ash_dusted', '香灰/火灰附着', 'Ash-Dusted', 'E. 仪式/装饰附着', 'E. Ritual / Decorative Coating', '灰烬覆盖在额头、手或衣物边缘，适合仪式、灾后或火场。', 'Ash covers forehead, hands, or clothing edges, suited to ritual, aftermath, or fire scenes.'],
  ['gold_powder', '金粉附着', 'Gold Powder', 'E. 仪式/装饰附着', 'E. Ritual / Decorative Coating', '金粉落在皮肤或发丝上，偏仪式、舞台或高定造型。', 'Gold powder rests on skin or hair, leaning ritual, stage, or couture styling.'],
  ['glitter_particles', '闪粉附着', 'Glitter Particles', 'E. 仪式/装饰附着', 'E. Ritual / Decorative Coating', '亮片或闪粉粘在脸、锁骨或衣物上，适合夜场、偶像、派对后。', 'Glitter sticks to face, collarbone, or clothes, suited to nightlife, idols, or afterparty.'],
  ['flower_petals', '花瓣附着', 'Flower Petals', 'E. 仪式/装饰附着', 'E. Ritual / Decorative Coating', '花瓣贴在头发、肩膀或皮肤上，适合仪式、婚礼、神话或舞台。', 'Petals stick to hair, shoulders, or skin, suited to ritual, wedding, myth, or stage.'],
  ['ritual_pigment', '仪式颜料附着', 'Ritual Pigment', 'E. 仪式/装饰附着', 'E. Ritual / Decorative Coating', '颜料以手印、额记、线条或擦痕形式附着。', 'Pigment appears as handprints, forehead marks, lines, or smears.'],
  ['sea_spray_wetness', '海水盐湿', 'Sea-Spray Wetness', 'B. 环境附着', 'B. Environmental Coating', '海水、盐雾和湿发一起构成海边、船上或捕捞后的表面状态。', 'Seawater, salt spray, and wet hair create seaside, shipboard, or post-fishing surface state.'],
  ['desert_dust_mask', '沙尘覆面', 'Desert Dust Mask', 'B. 环境附着', 'B. Environmental Coating', '细沙在脸、睫毛、围巾和衣领处形成干燥遮罩。', 'Fine sand forms a dry mask across face, eyelashes, scarf, and collar.'],
  ['rain_mixed_makeup', '雨水混妆', 'Rain-Mixed Makeup', 'B. 环境附着', 'B. Environmental Coating', '雨水把妆容冲开，形成被天气打乱的脸部证据。', 'Rain breaks down makeup, creating facial evidence disrupted by weather.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['chemical_residue', '化学残留', 'Chemical Residue', 'C. 工作/材料污损', 'C. Work / Material Smear', '试剂、清洁剂、染料或污染液留下轻微残留，适合实验、工厂和污染场域。', 'Reagent, cleaner, dye, or pollutant leaves subtle residue, suited to labs, factories, and toxic fields.', 2, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['metal_dust', '金属粉尘', 'Metal Dust', 'C. 工作/材料污损', 'C. Work / Material Smear', '银灰色金属粉附着在手、脸侧、发际或工作服边缘。', 'Grey metallic powder sticks to hands, face side, hairline, or workwear edges.'],
  ['clay_smear', '陶土泥痕', 'Clay Smear', 'C. 工作/材料污损', 'C. Work / Material Smear', '陶土、雕塑泥或黏土在手臂、手掌和衣物上留下可见痕迹。', 'Ceramic clay, sculpting mud, or clay leaves visible traces on arms, palms, and clothing.'],
  ['lipstick_transfer', '口红蹭痕', 'Lipstick Transfer', 'E. 仪式/装饰附着', 'E. Ritual / Decorative Coating', '口红蹭到手背、衣领、杯沿或皮肤边缘，形成亲密或社交事件证据。', 'Lipstick transfers to hand, collar, glass rim, or skin edge, creating evidence of intimacy or social event.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['confetti_bits', '彩纸碎片附着', 'Confetti Bits', 'E. 仪式/装饰附着', 'E. Ritual / Decorative Coating', '彩纸、亮片纸或庆典碎屑粘在头发、肩膀和皮肤上。', 'Confetti, foil paper, or celebration debris sticks to hair, shoulders, and skin.']
];

const BODY_FEATURE_ROWS: VisibleBodyRow[] = [
  ['standard_human_structure', '标准人形结构', 'Standard Human Structure', 'A. 人形锁定', 'A. Human-Form Lock', '保持标准双臂双腿单头人形，不额外增加异形骨架。', 'Keeps a standard one-head two-arm two-leg human form without extra anomalous anatomy.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'clean'],
  ['subtle_uncanny_proportion', '轻微非人比例', 'Subtle Uncanny Proportion', 'A. 人形锁定', 'A. Human-Form Lock', '仍是人形，但比例略不自然，像过长、过直或过对称。', 'Still human-form, but proportion is slightly unnatural: too long, too straight, or too symmetrical.', 2, ['timeless', 'mythic', 'near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['ritual_icon_body', '神像式身体结构', 'Iconic Ritual Body', 'A. 人形锁定', 'A. Human-Form Lock', '身体像宗教图像或神像构造，姿态和肢体服务仪式对称。', 'Body is organized like a religious icon or statue, with posture and limbs serving ritual symmetry.', 3, ['timeless', 'mythic'], HUMANOID_SCOPE, 'medium'],
  ['puppet_body_structure', '傀儡式身体结构', 'Puppet Body Structure', 'A. 人形锁定', 'A. Human-Form Lock', '身体像被线、关节或外部意志组织起来，保持人形但动作不自然。', 'Body seems organized by strings, joints, or external will, remaining human-form but moving unnaturally.', 3, ['early_modern', 'industrial', 'modern', 'contemporary', 'timeless', 'mythic'], HUMANOID_SCOPE, 'medium'],

  ['two_heads', '双头结构', 'Two-Headed Structure', 'B. 头部复数', 'B. Multiple Heads', '一个身体长出两个头，必须处理视线、人格和颈肩承重逻辑。', 'One body has two heads; gaze, personality, neck, and shoulder load must be designed clearly.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['three_faces_one_head', '一头三面', 'Three Faces on One Head', 'B. 头部复数', 'B. Multiple Heads', '一个头部有三面或多向面孔，适合神性、诅咒或高概念类人。', 'One head has three or multi-directional faces, suited to divinity, curse, or high-concept humanoids.', 5, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['split_head_structure', '分裂头部结构', 'Split-Head Structure', 'B. 头部复数', 'B. Multiple Heads', '头部从中线分裂或展开，但仍保留可读面部主轴。', 'Head splits or unfolds along a central axis while keeping a readable facial main axis.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['mask_head_stack', '面具层叠头部', 'Stacked-Mask Head', 'B. 头部复数', 'B. Multiple Heads', '头部像多层面具叠合，真实头面和符号头面混在一起。', 'Head reads as stacked masks, mixing real face and symbolic faces.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],

  ['extra_arm_pair', '额外一对手臂', 'Extra Pair of Arms', 'C. 多肢结构', 'C. Multiple Limbs', '在标准双臂外增加一对手臂，适合神像、实验体或战斗类人。', 'Adds one extra arm pair beyond normal arms, suited to icons, experiments, or combat humanoids.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['six_armed_structure', '六臂结构', 'Six-Armed Structure', 'C. 多肢结构', 'C. Multiple Limbs', '六只手臂形成主要剪影，必须组织成清楚层级而非杂乱堆叠。', 'Six arms form the main silhouette and must be organized into clear hierarchy, not clutter.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['asymmetric_extra_arm', '单侧额外手臂', 'Asymmetric Extra Arm', 'C. 多肢结构', 'C. Multiple Limbs', '身体一侧多出手臂，形成不稳定、实验或诅咒感。', 'One side has an extra arm, creating instability, experiment, or curse mood.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['tiny_secondary_arms', '小型副手臂', 'Small Secondary Arms', 'C. 多肢结构', 'C. Multiple Limbs', '胸侧、肋侧或背侧长出小型副手臂，服务仪式、寄生或工具功能。', 'Small secondary arms grow from chest, ribs, or back, serving ritual, parasite, or tool function.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['arm_wing_hybrid', '臂翼混合结构', 'Arm-Wing Hybrid', 'C. 多肢结构', 'C. Multiple Limbs', '手臂与翼膜或羽翼结构融合，改变动作和轮廓。', 'Arms fuse with wing membrane or feather structure, changing movement and silhouette.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],

  ['elongated_spine', '拉长脊柱结构', 'Elongated Spine', 'D. 脊柱/躯干异形', 'D. Spine / Torso Anomaly', '脊柱明显拉长，让躯干、站姿和背部轮廓产生非人感。', 'Spine is clearly elongated, making torso, stance, and back silhouette feel non-human.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['exposed_spine_ridge', '外露脊柱脊线', 'Exposed Spine Ridge', 'D. 脊柱/躯干异形', 'D. Spine / Torso Anomaly', '背部脊柱形成外露脊线、骨棘或结构脊。', 'Back spine forms exposed ridge, bone spurs, or structural crest.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['inverted_torso_joint', '反折躯干关节', 'Inverted Torso Joint', 'D. 脊柱/躯干异形', 'D. Spine / Torso Anomaly', '躯干有不正常折叠或反向活动轴，适合怪诞类人。', 'Torso has abnormal fold or reverse movement axis, suited to grotesque humanoids.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['hollow_chest_structure', '空腔胸腔结构', 'Hollow Chest Structure', 'D. 脊柱/躯干异形', 'D. Spine / Torso Anomaly', '胸腔像空洞、圣龛或容器，必须作为核心设计点。', 'Chest reads as cavity, shrine, or vessel and must become a core design point.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['transparent_torso_void', '透明躯干空洞', 'Transparent Torso Void', 'D. 脊柱/躯干异形', 'D. Spine / Torso Anomaly', '躯干局部透明或缺失，显出内部空洞、器官或能量结构。', 'Torso is partly transparent or missing, revealing inner void, organs, or energy structure.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],

  ['centaur_lower_body', '半人马下身', 'Centaur Lower Body', 'E. 下身异形', 'E. Lower-Body Anomaly', '上半身人形，下半身为四足兽体，必须处理重心和服装转接。', 'Human upper body with quadruped lower body; balance and costume transition must be handled.', 5, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['serpent_lower_body', '蛇尾下身', 'Serpent Lower Body', 'E. 下身异形', 'E. Lower-Body Anomaly', '下半身为蛇尾或长尾躯体，改变站姿、盘绕和构图。', 'Lower body is a serpent tail or long tail-body, changing stance, coiling, and composition.', 5, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['merfolk_lower_body', '鱼尾下身', 'Merfolk Lower Body', 'E. 下身异形', 'E. Lower-Body Anomaly', '下半身为鱼尾或海洋推进结构，适合水域、神话或实验设定。', 'Lower body is a fish tail or aquatic propulsion structure, suited to water, myth, or experiment settings.', 5, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['arachnid_lower_body', '蛛形下身', 'Arachnid Lower Body', 'E. 下身异形', 'E. Lower-Body Anomaly', '下半身呈蜘蛛或多足节肢结构，强烈改变角色尺度和恐惧感。', 'Lower body is spider-like or multi-legged arthropod structure, strongly changing scale and dread.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['hoofed_lower_body', '蹄足下身', 'Hoofed Lower Body', 'E. 下身异形', 'E. Lower-Body Anomaly', '腿部为兽腿或蹄足结构，适合羊角、鹿神、恶魔或林地类人。', 'Legs become animal or hoofed structure, suited to goat-horned, deer-god, demon, or woodland humanoids.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['reverse_joint_legs', '反关节腿', 'Reverse-Jointed Legs', 'E. 下身异形', 'E. Lower-Body Anomaly', '膝踝结构反向或兽化，使站姿更敏捷、危险或非人。', 'Knee-ankle structure reverses or animalizes, making stance more agile, dangerous, or non-human.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],

  ['floating_limb_structure', '漂浮肢体结构', 'Floating Limb Structure', 'F. 非连续身体', 'F. Discontinuous Body', '手臂、腿或头部与躯干不完全连接，由能量、磁力或仪式秩序维持。', 'Arms, legs, or head are not fully connected to torso, held by energy, magnetism, or ritual order.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['segmented_body_structure', '分节身体结构', 'Segmented Body Structure', 'F. 非连续身体', 'F. Discontinuous Body', '身体像昆虫、装甲或机关一样分节，但仍保留类人主轴。', 'Body is segmented like insect, armor, or mechanism while retaining a humanoid main axis.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['nested_body_structure', '套娃式身体结构', 'Nested Body Structure', 'F. 非连续身体', 'F. Discontinuous Body', '身体像内部还有一层身体、壳或小型主体，适合寄生和神秘设定。', 'Body seems to contain another body, shell, or smaller subject, suited to parasite and mystery settings.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['body_as_container', '容器化身体', 'Body as Container', 'F. 非连续身体', 'F. Discontinuous Body', '身体被设计成容器、灯笼、棺、圣盒或培养舱的类人形式。', 'Body is designed as a humanoid container, lantern, coffin, reliquary, or incubator.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],

  ['plant_root_skeleton', '根系骨架', 'Root-Skeleton Structure', 'G. 材料骨架', 'G. Material Skeleton', '骨架像树根或藤蔓组织，身体靠植物结构支撑。', 'Skeleton reads as roots or vines, with body supported by plant structure.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['crystal_bone_structure', '晶体骨架', 'Crystal Bone Structure', 'G. 材料骨架', 'G. Material Skeleton', '骨架或关节像晶体生长，改变身体硬度和折射边缘。', 'Skeleton or joints grow like crystal, changing body hardness and refractive edge.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['mechanical_skeleton_frame', '机械骨架框架', 'Mechanical Skeleton Frame', 'G. 材料骨架', 'G. Material Skeleton', '身体由可见机械骨架承重，皮肤、服装或外壳只是覆盖层。', 'Body is carried by visible mechanical skeleton; skin, costume, or shell is only a covering layer.', 5, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['bone_cage_frame', '骨笼框架', 'Bone-Cage Frame', 'G. 材料骨架', 'G. Material Skeleton', '肋骨、肩背或外部骨架形成笼状结构。', 'Ribs, shoulders, back, or external bones form a cage-like structure.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],

  ['swarm_humanoid_structure', '群体拼成人形', 'Swarm Humanoid Structure', 'H. 群体/聚合身体', 'H. Swarm / Composite Body', '身体由小型单元、昆虫、碎片或粒子聚合成人形。', 'Body is assembled into humanoid form from small units, insects, fragments, or particles.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['many_eyes_body_axis', '多眼身体轴', 'Many-Eyed Body Axis', 'H. 群体/聚合身体', 'H. Swarm / Composite Body', '身体中线或关节处出现多眼结构，但必须保持主脸和主体清楚。', 'Many eyes appear along body axis or joints, while main face and subject must remain clear.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['choir_body_structure', '合唱式多口结构', 'Choir-Mouth Body', 'H. 群体/聚合身体', 'H. Swarm / Composite Body', '身体上有多个口、声孔或发声器官，像一个合唱身体。', 'Body has multiple mouths, voice holes, or sound organs, reading as a choir-body.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['fused_twin_body', '融合双生身体', 'Fused-Twin Body', 'H. 群体/聚合身体', 'H. Swarm / Composite Body', '两个身体局部融合成一个主体，必须处理人格、重心和剪影。', 'Two bodies are partly fused into one subject; personality, balance, and silhouette must be handled.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high']
];

const BODY_MARKING_ROWS: VisibleBodyRow[] = [
  ['small_tattoo', '小型纹身', 'Small Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '一个小而清楚的纹身，不压过身份锚点。', 'A small clear tattoo that does not overpower the identity anchor.', 1, MODERN_ERAS],
  ['full_sleeve_tattoo', '花臂', 'Full Sleeve Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '整只手臂的纹身系统，适合街头、黑帮、音乐、格斗或艺术身份。', 'A full-arm tattoo system suited to street, gang, music, fighting, or art identities.', 1, MODERN_ERAS],
  ['back_piece_tattoo', '满背纹身', 'Back Piece Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '背部大面积图案，适合传统帮派、神话、仪式或强身份。', 'Large back design suited to traditional gangs, myth, ritual, or strong identities.', 1, ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'timeless']],
  ['neck_tattoo', '颈部纹身', 'Neck Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '颈部纹身高可见度，适合强社会信号或亚文化。', 'Highly visible neck tattoo suited to strong social signal or subculture.', 1, MODERN_ERAS],
  ['knuckle_letters', '指关节字', 'Knuckle Letters', 'A. 纹身/文字', 'A. Tattoos / Text', '指关节文字或符号，适合罪犯、朋克、拳手或街头人物。', 'Letters or symbols on knuckles, suited to criminals, punks, boxers, or street figures.', 1, MODERN_ERAS],
  ['serial_number_tattoo', '编号纹身', 'Serial Number Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '身体编号作为机构、监狱、实验或克隆身份证据。', 'Body serial number as evidence of institution, prison, experiment, or clone identity.', 2, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future']],
  ['barcode_mark', '条形码标记', 'Barcode Mark', 'A. 纹身/文字', 'A. Tattoos / Text', '条形码或可扫描标记，适合技术制度或商品化身份。', 'Barcode or scannable mark suited to tech systems or commodified identity.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['white_ink_tattoo', '白墨纹身', 'White Ink Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '低对比白色纹身，像隐秘符号或疤痕。', 'Low-contrast white tattoo like hidden symbol or scar.', 1, MODERN_ERAS],
  ['henna_hands', '海娜手绘', 'Henna Hands', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '海娜图案集中在手部，适合婚礼、仪式和地域身份。', 'Henna pattern concentrated on hands, suited to wedding, ritual, and regional identity.'],
  ['ritual_body_paint', '身体仪式彩绘', 'Ritual Body Paint', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '身体彩绘来自仪式、族群、战斗或神话制度。', 'Body paint comes from ritual, group, combat, or myth system.'],
  ['war_paint_body', '战纹', 'War Paint', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '战斗前涂抹的身体标记，必须与身份和场域一致。', 'Body marks applied before battle, must match identity and field.'],
  ['prayer_marks', '祈祷印记', 'Prayer Marks', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '额头、手腕、胸口或肩部有宗教/仪式印记。', 'Religious or ritual marks on forehead, wrists, chest, or shoulders.'],
  ['scarification_pattern', '割痕纹饰', 'Scarification Pattern', 'C. 身体刻印', 'C. Body Inscription', '皮肤隆起的刻痕图案，适合仪式、部落、苦修或极端身份。', 'Raised scar pattern suited to ritual, tribal, ascetic, or extreme identity.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['branding_mark', '烙印', 'Branding Mark', 'C. 身体刻印', 'C. Body Inscription', '烧灼留下的符号，适合奴役、惩罚、组织归属或仪式。', 'A burned symbol suited to slavery, punishment, group ownership, or ritual.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['carved_runes', '皮肤符文刻痕', 'Carved Runes', 'C. 身体刻印', 'C. Body Inscription', '符文像被刻入皮肤，适合奇幻、仪式或诅咒逻辑。', 'Runes appear carved into skin, suited to fantasy, ritual, or curse logic.', 3, ['timeless', 'mythic'], HUMANOID_SCOPE, 'medium'],
  ['uv_tattoo', '荧光纹身', 'UV Tattoo', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '紫外或特殊光下发亮的纹身，可解释为现代技术或生物技术。', 'Tattoo glows under UV or special light, explainable as modern tech or biotech.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['glowing_body_lines', '发光身体纹路', 'Glowing Body Lines', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '身体线条发光，必须由技术、魔法或生物发光授权。', 'Glowing body lines require tech, magic, or bioluminescence permission.', 3, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'medium'],
  ['circuit_tattoo', '电路纹身', 'Circuit Tattoo', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '电路样纹身或接口图案，优先作为标记，不自动变成义体。', 'Circuit-like tattoo or interface pattern, primarily a mark, not automatically cybernetics.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium']
];

const BODY_DAMAGE_ROWS: VisibleBodyRow[] = [
  ['fine_body_scar', '细小旧疤', 'Fine Old Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '身体上细小旧疤，提供经历但不喧宾夺主。', 'Small old body scar adds history without taking over.'],
  ['slash_scar', '刀疤', 'Slash Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '长条切割疤痕，适合战斗、劳动事故或危险经历。', 'Long cut scar suited to combat, work accident, or dangerous history.'],
  ['burn_scar', '烧伤疤痕', 'Burn Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '烧伤愈合后的皮肤质地变化，适合火灾、战斗或实验。', 'Skin texture change after healed burn, suited to fire, combat, or experiment.'],
  ['surgical_scar', '手术疤', 'Surgical Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '整齐手术切口疤痕，适合医疗、义体、实验和身体史。', 'Clean surgical scar suited to medical, prosthetic, experimental, and body-history contexts.'],
  ['keloid_scar', '增生疤痕', 'Keloid Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '隆起疤痕，增加真实身体痕迹。', 'Raised scar adds real bodily trace.'],
  ['old_bullet_scar', '旧弹痕', 'Old Bullet Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '圆形旧弹孔或手术取弹疤，适合战斗、犯罪、战争。', 'Round old bullet or removal scar, suited to combat, crime, or war.'],
  ['fresh_scratch', '新鲜擦伤', 'Fresh Scratch', 'B. 新伤/状态', 'B. Fresh Injury / State', '浅表新擦伤，作为近期事件状态。', 'Superficial fresh scratch as a recent event state.'],
  ['fresh_bruise', '新鲜淤青', 'Fresh Bruise', 'B. 新伤/状态', 'B. Fresh Injury / State', '紫黄淤青说明打斗、训练、事故或压迫。', 'Purple-yellow bruises indicate fight, training, accident, or pressure.'],
  ['split_lip_wound', '裂唇伤', 'Split Lip', 'B. 新伤/状态', 'B. Fresh Injury / State', '嘴唇裂口是打斗或事故后的可见状态。', 'Split lip is a visible state after fight or accident.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['black_eye', '眼眶淤青', 'Black Eye', 'B. 新伤/状态', 'B. Fresh Injury / State', '眼眶周围淤青，适合打斗、暴力、事故或训练。', 'Bruising around the eye, suited to fight, violence, accident, or training.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['stitches', '缝合线', 'Stitches', 'C. 医疗修复', 'C. Medical Repair', '伤口被缝合，说明近期治疗和身体风险。', 'A wound has been stitched, showing recent treatment and bodily risk.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['surgical_staples', '医用钉', 'Surgical Staples', 'C. 医疗修复', 'C. Medical Repair', '金属医用钉闭合伤口，适合医院、战地、实验室。', 'Metal staples close a wound, suited to hospital, field medicine, or lab contexts.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['medical_patch', '医用敷贴', 'Medical Patch', 'C. 医疗修复', 'C. Medical Repair', '小型敷贴、透气胶布或创可贴，作为可控伤损证据。', 'Small dressing, breathable tape, or bandage as controlled injury evidence.'],
  ['joint_brace', '关节护具', 'Joint Brace', 'C. 医疗修复', 'C. Medical Repair', '关节固定带或护具说明伤病、训练或康复。', 'Joint brace indicates injury, training, or recovery.'],
  ['missing_finger', '断指', 'Missing Finger', 'D. 缺损/残肢', 'D. Loss / Amputation', '缺失手指作为强身体经历，需服务身份而非猎奇。', 'Missing finger as strong body history, serving identity rather than shock.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['amputated_limb', '截肢', 'Amputated Limb', 'D. 缺损/残肢', 'D. Loss / Amputation', '肢体缺失，必须与战争、事故、医疗、惩罚或义体逻辑连接。', 'Missing limb must connect to war, accident, medicine, punishment, or prosthetic logic.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['missing_eye', '失去一只眼', 'Missing Eye', 'D. 缺损/残肢', 'D. Loss / Amputation', '一只眼缺失或被眼罩覆盖，适合强经历人物。', 'One eye missing or covered by patch, suited to characters with strong history.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['cauliflower_ear', '饺子耳', 'Cauliflower Ear', 'D. 缺损/残肢', 'D. Loss / Amputation', '耳廓因格斗训练变形，适合拳手、摔跤手、武斗人物。', 'Ear cartilage deformed by fighting training, suited to boxers, wrestlers, combat figures.']
];

const BODY_MODIFICATION_ROWS: VisibleBodyRow[] = [
  ['prosthetic_arm', '现实义肢手臂', 'Realistic Prosthetic Arm', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '现实医疗或工程义肢，不默认赛博战斗化。', 'Real medical or engineering prosthetic arm, not automatically cyber-combat.'],
  ['prosthetic_leg', '现实义肢腿', 'Realistic Prosthetic Leg', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '现实义肢腿，强调佩戴结构、材料和日常功能。', 'Real prosthetic leg emphasizing socket structure, material, and daily function.'],
  ['hearing_aid', '助听器', 'Hearing Aid', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '耳后助听器或小型听力装置，提供现实身体细节。', 'Behind-ear hearing aid or small hearing device as realistic body detail.'],
  ['mobility_cane', '辅助拐杖', 'Mobility Cane', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '辅助行动工具连接身体状态、年龄、伤病或身份。', 'Mobility aid links body state, age, injury, or identity.'],
  ['medical_implant_port', '医疗植入接口', 'Medical Implant Port', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '皮下端口、输液接口或治疗装置，保持医疗现实逻辑。', 'Subdermal port, infusion access, or treatment device within medical realism.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['cyber_arm', '机械臂', 'Cybernetic Arm', 'B. 赛博义体', 'B. Cybernetics', '手臂被明确机械义体替代，属于强技术授权。', 'Arm is clearly replaced by cybernetic prosthesis, requiring strong tech permission.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['cyber_leg', '机械腿', 'Cybernetic Leg', 'B. 赛博义体', 'B. Cybernetics', '腿部为机械义体，设计必须有功能关节和承重逻辑。', 'Leg is cybernetic, requiring functional joints and load-bearing logic.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['cyber_spine', '脊柱植入', 'Cybernetic Spine', 'B. 赛博义体', 'B. Cybernetics', '脊柱外露或植入技术装置，影响姿态和身份。', 'Spine is exposed or implanted with tech, affecting posture and identity.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['metal_jaw', '金属下颌', 'Metal Jaw', 'B. 赛博义体', 'B. Cybernetics', '下颌部分被金属替代，属于面部与身体交界的强改造。', 'Lower jaw partly replaced by metal, a strong modification crossing face and body.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['data_port', '数据插孔', 'Data Port', 'B. 赛博义体', 'B. Cybernetics', '耳后、颈部或手腕有数据接口，适合赛博制度。', 'Data port behind ear, on neck, or wrist, suited to cyber systems.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['animal_ears', '兽耳', 'Animal Ears', 'C. 生物越界', 'C. Biological Boundary', '头部出现动物耳，必须由妖怪化、实验、奇幻或造型协议授权。', 'Animal ears appear on head, requiring yokai, experiment, fantasy, or form-protocol permission.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['horns', '犄角', 'Horns', 'C. 生物越界', 'C. Biological Boundary', '头部或额部有角，适合恶魔、龙、神化、妖怪或实验类人。', 'Horns on head or forehead, suited to demon, dragon, deified, yokai, or experimental humanoids.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['tail', '尾巴', 'Tail', 'C. 生物越界', 'C. Biological Boundary', '身体长出尾巴，改变轮廓和重心，不能作为小装饰处理。', 'A tail grows from the body, changing silhouette and balance; not a small decoration.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['claws', '利爪', 'Claws', 'C. 生物越界', 'C. Biological Boundary', '指甲或手部变成爪，影响手势和危险性。', 'Nails or hands become claws, affecting gesture and danger.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['gills', '腮裂', 'Gills', 'C. 生物越界', 'C. Biological Boundary', '颈侧或肋侧出现呼吸腮裂，适合海洋、实验或异族。', 'Breathing gills on neck or ribs, suited to oceanic, experimental, or non-human origin.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['wings', '翅膀', 'Wings', 'C. 生物越界', 'C. Biological Boundary', '背部翅膀会强烈改变剪影，必须与神化、奇幻或实验体身份绑定。', 'Back wings strongly alter silhouette and must bind to deified, fantasy, or experimental identity.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['plant_symbiosis', '植物共生', 'Plant Symbiosis', 'D. 共生/感染', 'D. Symbiosis / Infection', '藤蔓、叶片或根须与身体共生，不是普通装饰。', 'Vines, leaves, or roots symbiose with the body, not ordinary decoration.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['fungal_growth', '真菌生长', 'Fungal Growth', 'D. 共生/感染', 'D. Symbiosis / Infection', '真菌从皮肤或服装缝隙生长，适合感染、生态或末世。', 'Fungus grows from skin or clothing seams, suited to infection, ecology, or wasteland.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['crystal_growth', '晶体生长', 'Crystal Growth', 'D. 共生/感染', 'D. Symbiosis / Infection', '晶体从身体局部生长，必须解释为矿物化、魔法或实验结果。', 'Crystals grow from local body areas, explained by mineralization, magic, or experiment.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['parasite_host', '寄生宿主痕迹', 'Parasite Host Traces', 'D. 共生/感染', 'D. Symbiosis / Infection', '身体有寄生体接口、鼓包或路线，保持可读而非恶心堆叠。', 'Body has parasite interfaces, bulges, or tracks, readable rather than grossly overloaded.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high']
];

const MAKEUP_EXTRA_ROWS: VisibleBodyRow[] = [
  ['glass_skin_makeup', '玻璃感底妆', 'Glass-Skin Makeup', 'A. 现实妆容', 'A. Realistic Makeup', '透明、湿润、护理感强的底妆，把脸推向精致现实而不是非人材质。', 'Transparent wet cared-for base makeup, pushing the face toward polished realism rather than non-human material.', 1, MODERN_ERAS],
  ['sharp_contour', '锋利修容', 'Sharp Contour', 'A. 现实妆容', 'A. Realistic Makeup', '颧骨、鼻梁和下颌被修容强化，适合权力、名流和高定脸。', 'Cheekbones, nose bridge, and jaw strengthened by contour, suited to power, celebrity, and couture faces.', 1, MODERN_ERAS],
  ['editorial_blush', '编辑腮红', 'Editorial Blush', 'A. 现实妆容', 'A. Realistic Makeup', '腮红位置更大胆，可从脸颊延伸到眼下或太阳穴。', 'Bolder blush placement, extending from cheeks to under-eyes or temples.', 1, MODERN_ERAS],
  ['under_eye_blush', '眼下腮红', 'Under-Eye Blush', 'A. 现实妆容', 'A. Realistic Makeup', '眼下红晕制造可爱、疲惫、暧昧或二次元化的脸部符号。', 'Under-eye blush creates cute, tired, ambiguous, or anime-coded facial sign.', 1, MODERN_ERAS],
  ['laminated_brows', '野生眉胶感', 'Laminated Brows', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '眉毛被梳起固定，强调现代、保养和时尚控制感。', 'Brows brushed upward and fixed, emphasizing modern grooming and fashion control.', 1, MODERN_ERAS],
  ['razor_brows', '锋利眉形', 'Razor Brows', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '眉形修得极利落，增强攻击性、职业感或反派气质。', 'Very clean sharp brows increase aggression, professionalism, or antagonist aura.', 1, MODERN_ERAS],
  ['thin_90s_brows', '90年代细眉', '90s Thin Brows', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '细眉带来复古、辣妹、名媛或反时尚气息。', 'Thin brows carry vintage, hot-girl, socialite, or anti-fashion mood.', 1, ['modern', 'contemporary', 'timeless']],
  ['overlined_lips', '外扩唇线', 'Overlined Lips', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '唇线略外扩，强化社交媒体、名流或舞台化面孔。', 'Slightly overdrawn lip line strengthens social-media, celebrity, or stage face.', 1, MODERN_ERAS],
  ['ombre_lip', '渐变唇', 'Ombre Lip', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '唇部由深到浅或内深外浅，适合韩系、偶像和精致近景。', 'Lips shift from dark to light or inner-dark outer-light, suited to Korean styling, idols, and close-ups.', 1, MODERN_ERAS],
  ['metallic_lip', '金属唇', 'Metallic Lip', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '唇部呈金属反光，适合夜场、科幻、高定和舞台。', 'Metallic lip reflection suited to nightlife, sci-fi, couture, and stage.', 2, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['black_lip_liner', '黑色唇线', 'Black Lip Liner', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '深色唇线形成90年代、哥特、拉丁或夜场符号。', 'Dark lip liner creates 90s, gothic, Latin, or nightlife signal.', 1, MODERN_ERAS],
  ['lip_oil_gloss', '唇油光泽', 'Lip Oil Gloss', 'B. 唇妆/眼妆', 'B. Lip / Eye Makeup', '唇部水润反光，强调感官但保持非露骨。', 'Watery lip gloss emphasizes sensuality while staying non-explicit.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['runway_white_base', '秀场白底妆', 'Runway White Base', 'C. 风格化妆容', 'C. Stylized Makeup', '白色底妆把脸推向秀场、歌剧、人偶或仪式化造型。', 'White base pushes the face toward runway, opera, doll, or ritual styling.'],
  ['negative_space_liner', '留白眼线', 'Negative-Space Liner', 'C. 风格化妆容', 'C. Stylized Makeup', '眼线画出空白图形，适合编辑、赛博和先锋时尚。', 'Eyeliner draws negative-space shapes, suited to editorial, cyber, and avant-garde fashion.', 1, MODERN_ERAS],
  ['floating_eyeliner', '悬浮眼线', 'Floating Eyeliner', 'C. 风格化妆容', 'C. Stylized Makeup', '眼线上移成独立图形，不贴合睫毛根部。', 'Eyeliner floats as an independent graphic above the lash line.', 1, MODERN_ERAS],
  ['lower_lash_graphic', '下睫毛图形妆', 'Graphic Lower Lashes', 'C. 风格化妆容', 'C. Stylized Makeup', '下眼睑被画成夸张线条、点或娃娃睫毛。', 'Lower eyelid becomes exaggerated lines, dots, or doll lashes.', 1, MODERN_ERAS],
  ['pearl_face_dots', '珍珠面部点饰', 'Pearl Face Dots', 'C. 风格化妆容', 'C. Stylized Makeup', '小珍珠沿眼角、颧骨或额头排列，适合高定、婚礼或神圣感。', 'Small pearls arranged around eyes, cheekbones, or forehead, suited to couture, bridal, or sacred mood.'],
  ['crystal_tears', '水晶泪妆', 'Crystal Tear Makeup', 'C. 风格化妆容', 'C. Stylized Makeup', '眼下水晶或亮片形成泪痕符号，适合舞台、偶像和悲剧美感。', 'Crystals or sequins under eyes form tear signs, suited to stage, idols, and tragic beauty.'],
  ['gold_inner_corner', '眼头金点', 'Gold Inner-Corner Highlight', 'C. 风格化妆容', 'C. Stylized Makeup', '眼头金色高光作为微小但强识别的奢华符号。', 'Gold highlight at inner eye corner as a small but strong luxury sign.'],
  ['silver_face_grid', '银色面部网格', 'Silver Face Grid', 'C. 风格化妆容', 'C. Stylized Makeup', '银线在脸上形成网格、坐标或测量感。', 'Silver lines form grid, coordinate, or measurement feeling across the face.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['afterparty_wet_makeup', '派对后湿妆', 'Afterparty Wet Makeup', 'E. 夜场/失控妆', 'E. Nightlife / Uncontrolled Makeup', '妆面有汗、湿光和轻微脱妆，保留夜晚结束后的暧昧。', 'Makeup has sweat, wet shine, and slight wear, keeping after-night ambiguity.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['smeared_mascara', '睫毛膏晕染', 'Smeared Mascara', 'E. 夜场/失控妆', 'E. Nightlife / Uncontrolled Makeup', '睫毛膏在眼下晕开，适合哭过、疲惫、夜场或戏剧化状态。', 'Mascara smears under eyes, suited to crying, fatigue, nightlife, or dramatic state.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['slept_in_makeup', '隔夜妆', 'Slept-In Makeup', 'E. 夜场/失控妆', 'E. Nightlife / Uncontrolled Makeup', '妆容像过了一夜，边缘松动但仍有角色魅力。', 'Makeup looks slept in, edges loosened while retaining character allure.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['punk_black_liner', '朋克黑眼线', 'Punk Black Liner', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '粗黑眼线和脏感边缘形成朋克、地下音乐或反叛信号。', 'Thick black liner and rough edges signal punk, underground music, or rebellion.', 1, MODERN_ERAS],
  ['visual_kei_makeup', '视觉系妆', 'Visual Kei Makeup', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '强眼妆、白底、深唇或戏剧线条组成视觉系舞台人格。', 'Strong eyes, pale base, dark lips, or theatrical lines form visual-kei stage persona.', 1, MODERN_ERAS],
  ['gyaru_makeup', '辣妹妆', 'Gyaru Makeup', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '浅发、重眼妆、亮唇和强烈自拍文化符号。', 'Light hair, heavy eye makeup, glossy lips, and strong selfie-culture signal.', 1, MODERN_ERAS],
  ['egirl_blush', 'E-girl 腮红', 'E-Girl Blush', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '鼻梁和脸颊大面积红晕，带网络亚文化和可爱挑衅。', 'Wide blush across nose and cheeks, carrying internet subculture and cute provocation.', 1, MODERN_ERAS],
  ['doll_blush', '人偶圆腮红', 'Doll Round Blush', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '圆形腮红和精确睫毛形成娃娃化脸部符号。', 'Round blush and precise lashes create doll-like facial sign.', 1, MODERN_ERAS],
  ['drag_contour', '变装皇后修容', 'Drag Contour', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '强修容、高光和夸张眼妆把脸塑成舞台面具。', 'Strong contour, highlight, and exaggerated eye makeup sculpt the face into a stage mask.', 1, MODERN_ERAS],
  ['cabaret_makeup', '歌舞厅妆', 'Cabaret Makeup', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '深眼线、亮唇和戏剧化腮红，适合复古夜场。', 'Dark liner, glossy lips, and theatrical blush suited to vintage nightlife.', 1, ['industrial', 'modern', 'contemporary', 'timeless']],
  ['burlesque_mole', '滑稽戏美人痣妆', 'Burlesque Beauty Mark Makeup', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '夸张美人痣、红唇和舞台腮红构成复古成人舞台符号。', 'Exaggerated beauty mark, red lips, and stage blush form vintage adult stage sign.', 1, ['industrial', 'modern', 'contemporary', 'timeless'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['rave_uv_makeup', '锐舞 UV 妆', 'Rave UV Makeup', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '荧光线条和 UV 颜料服务夜店、电子音乐和群体狂欢。', 'Fluorescent lines and UV pigment serve club, electronic music, and collective rave.', 2, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['club_glitter_sweat', '夜店闪汗妆', 'Club Glitter Sweat Makeup', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '闪粉与汗光混合，强调夜场身体状态。', 'Glitter mixes with sweat shine, emphasizing nightlife body state.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['grunge_smudge', '垃圾摇滚脏妆', 'Grunge Smudged Makeup', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '黑色眼影和唇色边缘脏开，适合乐队、街头和反精致。', 'Black shadow and lip edges smear, suited to bands, street, and anti-polish.', 1, MODERN_ERAS],
  ['clown_blush', '小丑腮红', 'Clown Blush', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '红鼻、圆腮或夸张微笑线，适合马戏、怪诞或时尚戏仿。', 'Red nose, round cheeks, or exaggerated smile lines, suited to circus, grotesque, or fashion parody.', 1, MODERN_ERAS],
  ['mime_face', '默剧白脸', 'Mime Face', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '白脸、黑线和沉默表演符号，适合剧场或怪诞人物。', 'White face, black lines, and silent performance signs, suited to theater or uncanny figures.', 1, ['industrial', 'modern', 'contemporary', 'timeless']],
  ['corpse_paint', '黑金属尸妆', 'Black-Metal Corpse Paint', 'F. 亚文化/舞台妆', 'F. Subculture / Stage Makeup', '黑白强对比妆面，适合金属乐、邪典和仪式化舞台。', 'High-contrast black-white makeup suited to metal music, cult, and ritualized stage.', 1, MODERN_ERAS],
  ['priestess_forehead_mark', '女祭司额记', 'Priestess Forehead Mark', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '额头中心符号让脸部服从信仰或仪式系统。', 'Central forehead sign makes the face obey a belief or ritual system.'],
  ['bridal_henna_face', '婚礼海娜面饰', 'Bridal Henna Face Accent', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '海娜或金粉靠近额头、眉心和脸侧，服务婚礼仪式。', 'Henna or gold powder near forehead, brow center, and face side, serving bridal ritual.'],
  ['ash_cross_forehead', '额头灰十字', 'Ash Cross Forehead', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '灰烬十字或相似印记，指向忏悔、教团或仪式日。', 'Ash cross or similar mark points to penance, order, or ritual day.'],
  ['saffron_tilak', '藏红/朱砂眉心', 'Saffron Tilak', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '眉心朱砂、藏红或颜料点，需与宗教或地域身份一致。', 'Brow-center cinnabar, saffron, or pigment dot must match religion or regional identity.'],
  ['nomad_kohl', '游牧深眼线', 'Nomad Kohl Eyes', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '深色眼线来自日晒、防护、传统或沙漠审美。', 'Dark kohl eyes derive from sun protection, tradition, or desert aesthetics.'],
  ['warrior_eye_black', '运动/战斗眼黑', 'Eye Black', 'D. 仪式/地域妆', 'D. Ritual / Regional Makeup', '眼下黑色条纹可来自运动、战斗、仪式或伪装。', 'Black strips under eyes can come from sport, combat, ritual, or camouflage.'],
  ['cyber_interface_dots', '接口点阵妆', 'Interface Dot Makeup', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '面部点阵像识别点、动捕点或神经接口。', 'Facial dot matrix resembles recognition points, motion-capture dots, or neural interface.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['ar_scan_marks', 'AR 扫描标记', 'AR Scan Marks', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '脸上有可扫描的短线、角标或微型坐标。', 'Scannable short lines, corner marks, or micro-coordinates on the face.', 2, ['near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['biotech_sample_marks', '生物样本标记妆', 'Biotech Sample Mark Makeup', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '脸部有样本编号、取样点或实验室校准标记。', 'Face has sample numbers, sampling points, or lab calibration marks.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['holographic_tears', '全息泪痕妆', 'Holographic Tear Makeup', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '泪痕呈全息虹彩，适合虚拟偶像、赛博夜场或高定科技。', 'Tear marks have holographic iridescence, suited to virtual idols, cyber nightlife, or tech couture.', 3, ['near_future', 'far_future', 'timeless'], HUMANOID_SCOPE, 'medium'],
  ['forbidden_lip_stain', '禁忌唇印妆', 'Forbidden Lip-Stain Makeup', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '唇色像刚被擦掉又残留，形成亲密、秘密和被观看后的成人符号。', 'Lip color looks wiped yet lingering, forming an adult-coded sign of intimacy, secrecy, and being seen.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['living_ink_makeup', '活墨妆', 'Living Ink Makeup', 'X. 技术/越界妆', 'X. Tech / Boundary Makeup', '墨线像会缓慢游动，适合魔法、纳米墨水或诅咒解释。', 'Ink lines seem to move slowly, explainable as magic, nano-ink, or curse.', 3, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'medium']
];

const BODY_MARKING_EXTRA_ROWS: VisibleBodyRow[] = [
  ['ankle_tattoo', '脚踝纹身', 'Ankle Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '脚踝小纹身，适合私密、旅行、舞蹈或生活方式身份。', 'Small ankle tattoo suited to private, travel, dance, or lifestyle identity.', 1, MODERN_ERAS],
  ['rib_tattoo', '肋侧纹身', 'Rib Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '肋侧文字或图案，带隐秘、亲密和身体线条意识。', 'Rib-side text or image carries secrecy, intimacy, and body-line awareness.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['collarbone_script', '锁骨文字', 'Collarbone Script', 'A. 纹身/文字', 'A. Tattoos / Text', '沿锁骨的文字或短句，强化颈肩视觉锚。', 'Text or short phrase along the collarbone strengthens neck-shoulder anchor.', 1, MODERN_ERAS],
  ['spine_script', '脊柱文字', 'Spine Script', 'A. 纹身/文字', 'A. Tattoos / Text', '沿脊柱纵向排列的文字、经文或编号。', 'Vertical text, scripture, or numbering along the spine.', 1, MODERN_ERAS],
  ['wrist_date', '手腕日期', 'Wrist Date Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '手腕日期或短码，适合记忆、组织或关系线索。', 'Wrist date or short code suited to memory, organization, or relationship clue.', 1, MODERN_ERAS],
  ['shoulder_emblem', '肩部徽记纹身', 'Shoulder Emblem Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '肩部徽记解释团体、军队、学校或帮派归属。', 'Shoulder emblem explains group, military, school, or gang belonging.', 1, MODERN_ERAS],
  ['finger_tattoo', '手指纹身', 'Finger Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '手指侧面或关节的小字、小符号。', 'Small letters or symbols on finger side or joints.', 1, MODERN_ERAS],
  ['behind_ear_tattoo', '耳后纹身', 'Behind-Ear Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '耳后小符号，低调但适合近景识别。', 'Small symbol behind the ear, subtle but useful for close-up recognition.', 1, MODERN_ERAS],
  ['lower_back_tattoo', '腰后纹身', 'Lower-Back Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '腰后纹身带有Y2K、夜场、网红或复古性感符号。', 'Lower-back tattoo carries Y2K, nightlife, influencer, or retro-sexy sign.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['minimal_line_tattoo', '极简线条纹身', 'Minimal Line Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '细线小图案，适合现代、文艺、设计师和生活方式人物。', 'Fine-line small image suited to modern, artsy, designer, and lifestyle figures.', 1, MODERN_ERAS],
  ['old_school_tattoo', '老派美式纹身', 'Old-School Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '粗线条、锚、心、鹰或玫瑰等老派纹身语言。', 'Bold-line anchors, hearts, eagles, roses, and other old-school tattoo language.', 1, ['industrial', 'modern', 'contemporary', 'timeless']],
  ['blackwork_tattoo', '黑工纹身', 'Blackwork Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '大面积黑色图形或几何块，适合极简、哥特、战斗和时尚。', 'Large black graphics or geometric blocks suited to minimalism, gothic, combat, and fashion.', 1, MODERN_ERAS],
  ['japanese_irezumi', '日式刺青', 'Japanese Irezumi', 'A. 纹身/文字', 'A. Tattoos / Text', '浪、龙、花、鬼面等传统日式刺青系统。', 'Traditional Japanese tattoo system with waves, dragons, flowers, or demon masks.', 1, ['early_modern', 'industrial', 'modern', 'contemporary', 'timeless']],
  ['prison_tattoo', '监狱纹身', 'Prison Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '粗糙、自制、编号化或帮派化纹身，必须服务犯罪/监禁身份。', 'Rough handmade coded or gang-linked tattoos, serving crime or prison identity.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['cult_symbol_tattoo', '教团符号纹身', 'Cult Symbol Tattoo', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '身体有教团符号，解释信仰归属或秘密组织。', 'Cult symbol on body explains belief belonging or secret order.', 2, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['pilgrimage_stamp', '朝圣印记', 'Pilgrimage Stamp', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '皮肤或衣物边缘有朝圣、寺庙、旅途留下的印记。', 'Marks on skin or clothing edges left by pilgrimage, temple, or journey.'],
  ['festival_body_paint', '节庆身体彩绘', 'Festival Body Paint', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '身体彩绘来自节庆、音乐节、庆典或公共表演。', 'Body paint from festivals, music events, celebration, or public performance.', 1, MODERN_ERAS],
  ['mourning_mark', '丧礼标记', 'Mourning Mark', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '黑带、灰点、白线或小型身体标记表达哀悼身份。', 'Black band, ash dot, white line, or small body mark expresses mourning identity.'],
  ['initiation_mark', '入会标记', 'Initiation Mark', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '身体上有入会、成年礼、门派或组织仪式留下的标记。', 'Body mark left by initiation, coming-of-age, sect, or organization ritual.'],
  ['protective_talisman_mark', '护符印记', 'Protective Talisman Mark', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '护身符号被画、刻或贴在皮肤上。', 'Protective sign is drawn, carved, or placed on skin.'],
  ['slave_mark', '奴役标记', 'Slave Mark', 'C. 身体刻印', 'C. Body Inscription', '身体被标记为所有权或控制对象，需避免无意义猎奇。', 'Body marked as ownership or control object; avoid meaningless shock.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['rank_brand', '等级烙印', 'Rank Brand', 'C. 身体刻印', 'C. Body Inscription', '等级、序列或阶层以烙印形式进入身体。', 'Rank, sequence, or class enters the body as a brand.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['penance_scars', '苦修刻痕', 'Penance Scars', 'C. 身体刻印', 'C. Body Inscription', '刻痕来自自我惩罚、修行或信仰纪律。', 'Scar marks come from self-punishment, discipline, or belief practice.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['victory_notches', '胜利刻痕', 'Victory Notches', 'C. 身体刻印', 'C. Body Inscription', '身体上有计数刻痕，记录战斗、猎物、任务或仪式次数。', 'Tally-like cuts record fights, hunts, missions, or rituals.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['ritual_cuts', '仪式切痕', 'Ritual Cuts', 'C. 身体刻印', 'C. Body Inscription', '浅切痕形成仪式图案，必须有信仰或团体解释。', 'Shallow cuts form ritual pattern and require belief or group explanation.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['inked_coordinates', '坐标纹身', 'Coordinate Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '经纬度、星图坐标或城市坐标作为空间记忆。', 'Latitude-longitude, star-map, or city coordinates as spatial memory.', 1, MODERN_ERAS],
  ['constellation_tattoo', '星座纹身', 'Constellation Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '星点和连线构成个人神话或偶像图案。', 'Star dots and connecting lines form personal myth or idol graphic.', 1, MODERN_ERAS],
  ['botanical_tattoo', '植物纹身', 'Botanical Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '植物、藤蔓、花枝纹身，适合自然、巫术、女性化或艺术身份。', 'Plant, vine, or floral tattoos suited to nature, witchcraft, feminine, or artistic identity.', 1, MODERN_ERAS],
  ['animal_totem_tattoo', '动物图腾纹身', 'Animal Totem Tattoo', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '动物图腾作为身份、守护或群体象征。', 'Animal totem as identity, protection, or group symbol.'],
  ['sports_tape_mark', '运动胶带标记', 'Sports Tape Mark', 'D. 功能标记', 'D. Functional Marks', '肌贴、护具压痕或训练标记证明运动/康复状态。', 'Kinesio tape, brace pressure, or training marks prove sport or recovery state.', 1, MODERN_ERAS],
  ['military_blood_type', '血型标记', 'Blood-Type Mark', 'D. 功能标记', 'D. Functional Marks', '血型、单位、任务编号写在皮肤或贴片上。', 'Blood type, unit, or mission number written on skin or patch.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future']],
  ['worker_stamp', '工号印章', 'Worker Stamp', 'D. 功能标记', 'D. Functional Marks', '工号、质检章或通行章短暂盖在手腕、脖子或衣物边缘。', 'Worker number, inspection stamp, or pass stamp temporarily on wrist, neck, or garment edge.'],
  ['club_entry_stamp', '夜店入场章', 'Club Entry Stamp', 'D. 功能标记', 'D. Functional Marks', '手背或手腕有夜店、演出、派对入场章。', 'Club, gig, or party entry stamp on hand or wrist.', 1, MODERN_ERAS],
  ['hospital_patient_mark', '病人标记', 'Patient Mark', 'D. 功能标记', 'D. Functional Marks', '病房编号、手环信息或术前定位标记。', 'Ward number, wristband info, or pre-surgery marking.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future']],
  ['fashion_fitting_marks', '试衣定位线', 'Fitting Marks', 'D. 功能标记', 'D. Functional Marks', '裁衣粉、别针点位或量体线条落在皮肤和衣物边缘。', 'Tailor chalk, pin points, or measurement lines on skin and clothing edge.', 1, MODERN_ERAS],
  ['subdermal_id_chip_mark', '皮下芯片印记', 'Subdermal ID Chip Mark', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '皮下身份芯片在皮肤上留下微小凸点或扫描符。', 'Subdermal ID chip leaves tiny bump or scan sign on skin.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['qr_skin_print', '皮肤 QR 码', 'Skin QR Code', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '可扫描二维码印在皮肤上，适合监控、商品化或未来制度。', 'Scannable QR code printed on skin, suited to surveillance, commodification, or future systems.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['nfc_wrist_mark', 'NFC 手腕标记', 'NFC Wrist Mark', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '手腕有近场支付、门禁或身份验证标记。', 'Wrist mark for payment, access, or identity verification.', 2, ['near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['biometric_dots', '生物识别点', 'Biometric Dots', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '脸、颈或手上有用于扫描校准的点阵。', 'Dots on face, neck, or hands for scan calibration.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['glowing_runes', '发光符文', 'Glowing Runes', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '符文发光，必须由魔法、科技或神性系统授权。', 'Runes glow and require magic, tech, or divine system permission.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['nanotattoo', '纳米纹身', 'Nano-Tattoo', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '纹身像电子墨水一样可变形或刷新。', 'Tattoo can shift or refresh like electronic ink.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['living_tattoo', '活体纹身', 'Living Tattoo', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '纹身像活物一样轻微移动，适合妖异、魔法或生物科技。', 'Tattoo moves slightly like a living thing, suited to uncanny, magic, or biotech logic.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['cursed_seal', '诅咒封印', 'Cursed Seal', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '身体封印符号压住某种力量、感染或契约。', 'Body seal suppresses a force, infection, or contract.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['angelic_sigils', '天使铭文', 'Angelic Sigils', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '身体铭文带神圣、几何和非人秩序。', 'Body sigils carry sacred, geometric, and non-human order.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['demonic_contract_mark', '恶魔契约印', 'Demonic Contract Mark', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '契约印记显示交易、束缚或非人归属。', 'Contract mark shows bargain, bondage, or non-human belonging.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['clone_batch_mark', '克隆批次标记', 'Clone Batch Mark', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '批次编号、生产线标志或实验室追踪码。', 'Batch number, production-line sign, or lab tracking code.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['lab_specimen_grid', '实验样本网格', 'Specimen Grid Mark', 'X. 发光/技术标记', 'X. Glowing / Tech Marks', '皮肤上有实验标尺、网格或取样区域。', 'Skin has lab ruler, grid, or sampling zones.', 3, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['sacred_geometry_body', '身体神圣几何', 'Sacred Geometry Body Mark', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '圆、三角、线阵在身体上组成秩序图。', 'Circles, triangles, and line arrays form an order diagram on the body.'],
  ['map_tattoo', '地图纹身', 'Map Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '身体上有地图、逃亡路线或遗迹路线图。', 'Body carries map, escape route, or ruin route plan.', 1, MODERN_ERAS],
  ['music_staff_tattoo', '五线谱纹身', 'Music Staff Tattoo', 'A. 纹身/文字', 'A. Tattoos / Text', '五线谱、歌词或采样波形作为音乐身份标记。', 'Music staff, lyric, or sample waveform as music-identity mark.', 1, MODERN_ERAS],
  ['devotional_text_skin', '祷文身体文字', 'Devotional Text on Skin', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '祷文、经文或誓言写在皮肤上。', 'Prayer, scripture, or oath written on skin.'],
  ['ownership_choker_tanline', '项圈晒痕', 'Collar Tan Line', 'D. 功能标记', 'D. Functional Marks', '颈部留下长期佩戴项圈、制服领或护具后的浅色环痕。', 'Neck carries a pale ring mark from long-term collar, uniform neckpiece, or brace wear.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['makeup_transfer_mark', '妆容蹭印', 'Makeup Transfer Mark', 'D. 功能标记', 'D. Functional Marks', '肩颈、手背或衣物边缘有口红、粉底或眼线蹭印，说明接触和场面。', 'Shoulder, neck, hand, or garment edge carries lipstick, foundation, or liner transfer, implying contact and situation.', 1, MODERN_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['family_crest_tattoo', '家族纹章纹身', 'Family Crest Tattoo', 'B. 仪式/文化标记', 'B. Ritual / Cultural Marks', '家族纹章进入身体，适合贵族、黑帮、世家或继承人。', 'Family crest enters the body, suited to aristocrats, gangs, old families, or heirs.']
];

const BODY_DAMAGE_EXTRA_ROWS: VisibleBodyRow[] = [
  ['old_broken_nose', '旧断鼻', 'Old Broken Nose', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '鼻梁曾经断过，形成轻微偏斜和格斗经历。', 'Nose once broken, creating slight crookedness and fight history.'],
  ['caesarean_scar', '剖腹产疤', 'C-Section Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '下腹手术疤痕，提供真实成人身体史。', 'Lower-abdominal surgical scar, giving real adult body history.'],
  ['appendix_scar', '阑尾疤', 'Appendix Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '小型手术疤痕，日常但真实。', 'Small surgical scar, ordinary but real.'],
  ['old_whip_scars', '旧鞭痕', 'Old Lash Scars', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '背部或肩部有长条旧鞭痕，必须服务历史、惩罚或创伤身份。', 'Long old lash scars on back or shoulders must serve history, punishment, or trauma identity.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['old_bite_scar', '旧咬痕疤', 'Old Bite Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '旧咬痕暗示动物、吸血鬼、暴力或亲密危险。', 'Old bite scar suggests animal, vampire, violence, or intimate danger.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['road_rash_scars', '摔车擦疤', 'Road-Rash Scars', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '大面积浅疤来自摔车、滑板、摩托或事故。', 'Wide shallow scars from crash, skateboarding, motorcycle, or accident.'],
  ['training_bruise_old', '训练旧淤痕', 'Old Training Bruise Marks', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '反复训练留下浅淡旧痕，适合格斗、舞蹈和运动。', 'Faint old marks from repeated training, suited to fighting, dance, and sport.'],
  ['needle_scars', '针孔旧痕', 'Needle Scars', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '针孔或输液旧痕，适合医疗、实验、疾病或成瘾叙事。', 'Needle or IV marks suited to medical, experimental, illness, or addiction narrative.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['sun_crack_damage', '晒裂伤痕', 'Sun-Cracked Damage', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '长期日晒导致皮肤裂痕、斑和粗糙边缘。', 'Long sun exposure creates cracks, spots, and rough edges.'],
  ['frostbite_scars', '冻伤旧痕', 'Frostbite Scars', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '指尖、耳朵或脸部有冻伤后的色泽和纹理变化。', 'Fingertips, ears, or face show color and texture change after frostbite.'],
  ['acid_scar', '酸蚀疤痕', 'Acid Scar', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '化学灼伤留下不规则凹凸，适合事故、犯罪或实验。', 'Chemical burn leaves irregular texture, suited to accident, crime, or experiment.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['shrapnel_scars', '弹片疤', 'Shrapnel Scars', 'A. 旧伤/疤痕', 'A. Old Wounds / Scars', '碎片伤留下多个小疤，适合战争、爆炸、矿难或废土。', 'Fragment wounds leave multiple small scars, suited to war, explosion, mining accident, or wasteland.'],
  ['fresh_cut', '新鲜切口', 'Fresh Cut', 'B. 新伤/状态', 'B. Fresh Injury / State', '尚未完全处理的新切口，适合近期冲突或事故。', 'A new cut not fully treated yet, suited to recent conflict or accident.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['fresh_scraped_knees', '膝盖擦伤', 'Scraped Knees', 'B. 新伤/状态', 'B. Fresh Injury / State', '膝盖新擦伤，说明奔跑、摔倒、训练或逃亡。', 'Fresh scraped knees indicate running, falling, training, or escape.'],
  ['rope_burn', '绳索勒痕', 'Rope Burn', 'B. 新伤/状态', 'B. Fresh Injury / State', '手腕、脚踝或肩部有绳索摩擦痕。', 'Rope friction marks on wrists, ankles, or shoulders.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['restraint_marks', '束缚压痕', 'Restraint Marks', 'B. 新伤/状态', 'B. Fresh Injury / State', '皮肤上有手铐、绑带、护具或装置留下的压痕。', 'Skin has pressure marks from cuffs, straps, braces, or devices.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['fresh_burn', '新鲜烫伤', 'Fresh Burn', 'B. 新伤/状态', 'B. Fresh Injury / State', '轻度新鲜烫伤或热痕，适合厨师、工人、战斗和事故。', 'Mild fresh burn or heat mark suited to cooks, workers, combat, and accidents.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['swollen_cheek', '脸颊肿胀', 'Swollen Cheek', 'B. 新伤/状态', 'B. Fresh Injury / State', '脸颊轻微肿胀，显示刚经历冲突或事故。', 'Slight swollen cheek shows recent conflict or accident.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['bloody_knuckles', '破皮指节', 'Bloody Knuckles', 'B. 新伤/状态', 'B. Fresh Injury / State', '指节破皮或红肿，适合拳击、街斗、训练或劳动。', 'Split or reddened knuckles suited to boxing, street fight, training, or labor.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['sprained_ankle_wrap', '脚踝扭伤包扎', 'Sprained Ankle Wrap', 'C. 医疗修复', 'C. Medical Repair', '脚踝包扎或固定，影响站姿和动作。', 'Wrapped or supported ankle affecting stance and movement.'],
  ['wrist_cast', '手腕石膏', 'Wrist Cast', 'C. 医疗修复', 'C. Medical Repair', '手腕石膏或夹板作为临时伤病证据。', 'Wrist cast or splint as temporary injury evidence.'],
  ['neck_brace', '颈托', 'Neck Brace', 'C. 医疗修复', 'C. Medical Repair', '颈托改变头部姿态，适合事故、康复或脆弱状态。', 'Neck brace changes head posture, suited to accident, recovery, or vulnerability.'],
  ['eye_patch_medical', '医用眼罩', 'Medical Eye Patch', 'C. 医疗修复', 'C. Medical Repair', '医用眼罩说明治疗中，而不是海盗化装饰。', 'Medical eye patch indicates treatment rather than pirate decoration.'],
  ['compression_bandage', '压力绷带', 'Compression Bandage', 'C. 医疗修复', 'C. Medical Repair', '压力绷带覆盖关节或肌肉，适合运动、战斗、康复。', 'Compression bandage covers joint or muscle, suited to sport, combat, recovery.'],
  ['iv_port_bandage', '输液口贴', 'IV Port Dressing', 'C. 医疗修复', 'C. Medical Repair', '输液针口或端口被透明敷贴覆盖。', 'IV site or port covered by transparent dressing.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future']],
  ['sensor_patch_marks', '传感贴片压痕', 'Sensor Patch Marks', 'C. 医疗修复', 'C. Medical Repair', '皮肤有传感贴片留下的压痕或胶痕。', 'Skin has pressure or adhesive marks from sensor patches.', 2, ['modern', 'contemporary', 'near_future', 'far_future']],
  ['suture_tape', '免缝胶带', 'Steri-Strip Tape', 'C. 医疗修复', 'C. Medical Repair', '小切口被免缝胶带整齐固定。', 'Small cut neatly closed by steri-strip tape.'],
  ['knee_brace', '膝部护具', 'Knee Brace', 'C. 医疗修复', 'C. Medical Repair', '膝部护具说明运动、旧伤或康复。', 'Knee brace indicates sport, old injury, or recovery.'],
  ['shoulder_sling', '肩臂吊带', 'Shoulder Sling', 'C. 医疗修复', 'C. Medical Repair', '手臂吊带改变角色轮廓和动作范围。', 'Arm sling changes character silhouette and range of motion.'],
  ['healed_amputation_stump', '愈合残肢', 'Healed Amputation Stump', 'D. 缺损/残肢', 'D. Loss / Amputation', '截肢处已愈合，可连接现实义肢或身体史。', 'Amputation site is healed, linking to realistic prosthetic or body history.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['missing_teeth', '缺牙', 'Missing Teeth', 'D. 缺损/残肢', 'D. Loss / Amputation', '缺牙说明打斗、贫困、事故或年龄。', 'Missing teeth indicate fight, poverty, accident, or age.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['chipped_tooth', '崩牙', 'Chipped Tooth', 'D. 缺损/残肢', 'D. Loss / Amputation', '牙齿缺角是小但强识别的损伤。', 'A chipped tooth is a small but strong recognizable injury.'],
  ['damaged_ear', '耳廓缺损', 'Damaged Ear', 'D. 缺损/残肢', 'D. Loss / Amputation', '耳廓缺口或旧伤，适合格斗、事故或野外身份。', 'Notched or scarred ear suited to fighting, accident, or outdoor identity.'],
  ['missing_limb_with_cover', '被衣物遮盖的残肢', 'Covered Missing Limb', 'D. 缺损/残肢', 'D. Loss / Amputation', '缺损被衣物、披挂或装具遮住，只露出结构线索。', 'Loss is covered by clothing, drape, or gear, revealing only structural clues.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['scar_contracture', '疤痕牵拉', 'Scar Contracture', 'D. 缺损/残肢', 'D. Loss / Amputation', '疤痕影响皮肤拉伸和姿态，适合烧伤、手术或战损。', 'Scar affects skin stretch and posture, suited to burn, surgery, or battle damage.', 1, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE, 'high'],
  ['cyber_surgery_seams', '义体手术缝线', 'Cyber Surgery Seams', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '义体接口周围有手术缝线和愈合边缘。', 'Surgical seams and healing edges around cybernetic interface.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['lab_injection_sites', '实验注射点', 'Lab Injection Sites', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '多个规则排列的注射点，说明实验室流程。', 'Multiple regularly placed injection sites indicate lab process.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['implant_rejection_redness', '植入排异红肿', 'Implant Rejection Redness', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '植入物周围红肿，提示身体与技术冲突。', 'Redness around implant suggests conflict between body and technology.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['containment_burns', '封存灼痕', 'Containment Burns', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '约束装置或实验封存造成规则化灼痕。', 'Restraint or containment device causes regular burn marks.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['electrode_marks', '电极痕迹', 'Electrode Marks', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '电极贴片或刺激实验留下小圆痕。', 'Electrode patches or stimulation tests leave small round marks.', 2, ['modern', 'contemporary', 'near_future', 'far_future']],
  ['cryosleep_frostburn', '冷冻舱冻痕', 'Cryosleep Frostburn', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '低温舱或冷冻保存留下皮肤冻痕。', 'Cryo pod or preservation leaves frostburn marks on skin.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['radiation_patch_damage', '辐射斑痕', 'Radiation Patch Damage', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '辐射或未知能量造成斑驳损伤。', 'Radiation or unknown energy creates mottled damage.', 3, ['near_future', 'far_future', 'timeless'], HUMANOID_SCOPE, 'medium'],
  ['biohazard_skin_lesions', '生化病灶', 'Biohazard Lesions', 'E. 技术/实验损伤', 'E. Tech / Experimental Damage', '皮肤出现实验性病灶，必须控制为可读设计证据。', 'Skin shows experimental lesions, controlled as readable design evidence.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['magical_burn_mark', '魔法灼痕', 'Magical Burn Mark', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '能量、诅咒或法术留下非普通火伤。', 'Energy, curse, or spell leaves non-ordinary burn.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['curse_cracks', '诅咒裂痕', 'Curse Cracks', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '皮肤裂痕像封印即将破裂。', 'Skin cracks as if a seal is about to break.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['petrification_edges', '石化边缘损伤', 'Petrification Edge Damage', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '局部皮肤从边缘开始石化、开裂或失去血色。', 'Local skin begins to petrify, crack, or lose blood tone from the edges.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['void_corrosion', '虚空腐蚀痕', 'Void Corrosion Mark', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '身体边缘像被黑色空间侵蚀。', 'Body edge seems corroded by black space.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['holy_stigmata', '圣痕', 'Stigmata', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '手、脚或胸口出现宗教化伤痕，必须服务仪式身份。', 'Religious wounds on hands, feet, or chest must serve ritual identity.', 4, ['timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['monster_claw_wounds', '怪物爪伤', 'Monster Claw Wounds', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '非普通动物造成的爪伤，指向怪物世界事实。', 'Claw wounds from non-ordinary beast point to monster-world fact.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['angelic_burn_edges', '天使灼边', 'Angelic Burn Edges', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '伤口边缘像被圣光烧白，适合神圣暴力或献祭。', 'Wound edges are whitened as if by holy light, suited to sacred violence or sacrifice.', 4, ['timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['demonic_brand_injury', '恶魔烙伤', 'Demonic Brand Injury', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '烙印同时是伤口和契约符号。', 'Brand is both wound and contract sign.', 4, ['timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['psychic_nosebleed', '精神力鼻血', 'Psychic Nosebleed', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '鼻血来自超能力、精神压力或实验，不是普通受伤。', 'Nosebleed comes from psychic power, mental pressure, or experiment, not ordinary injury.', 3, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'medium'],
  ['ritual_bleeding_mark', '仪式出血印', 'Ritual Bleeding Mark', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '少量出血被组织成符号、誓言或献祭痕迹，而不是随机受伤。', 'Small bleeding is organized as sign, oath, or sacrificial trace rather than random injury.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['time_erosion_scars', '时间侵蚀疤', 'Time-Erosion Scars', 'F. 神秘/超现实损伤', 'F. Mystic / Surreal Damage', '身体像被时间擦伤，局部老化或风化异常。', 'Body seems abraded by time, with abnormal local aging or weathering.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high']
];

const BODY_MODIFICATION_EXTRA_ROWS: VisibleBodyRow[] = [
  ['prosthetic_hand', '现实义手', 'Realistic Prosthetic Hand', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '现实义手强调抓握结构、硅胶或工程材料。', 'Realistic prosthetic hand emphasizes grip structure, silicone, or engineering material.'],
  ['prosthetic_eye', '现实义眼', 'Realistic Prosthetic Eye', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '现实义眼用于医疗修复，不默认发光或赛博功能。', 'Realistic prosthetic eye for medical restoration, not automatically glowing or cybernetic.'],
  ['dental_implants', '牙齿植入', 'Dental Implants', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '牙齿修复、金属牙冠或义齿形成现实身体细节。', 'Dental restoration, metal crown, or dentures form realistic body detail.'],
  ['orthopedic_screws_hint', '骨科固定痕迹', 'Orthopedic Fixation Hint', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '皮下钢板或固定螺钉只通过小疤和姿态暗示。', 'Subdermal plate or screws implied through small scars and posture.'],
  ['insulin_pump', '胰岛素泵', 'Insulin Pump', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '小型医疗泵和软管连接身体与日常生活。', 'Small medical pump and tubing connect body to daily life.', 1, ['modern', 'contemporary', 'near_future', 'far_future']],
  ['cochlear_implant', '人工耳蜗', 'Cochlear Implant', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '耳后或颅侧人工耳蜗，清楚但不奇观化。', 'Cochlear implant behind ear or skull side, clear but not spectacle.', 1, ['modern', 'contemporary', 'near_future', 'far_future']],
  ['back_support_brace', '脊背支具', 'Back Support Brace', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '支具影响站姿和服装层次。', 'Brace affects stance and clothing layers.'],
  ['exosuit_assist', '辅助外骨骼', 'Assistive Exosuit', 'A. 现实义肢/辅助', 'A. Real Prosthetics / Support', '辅助行动外骨骼，偏医疗/劳动，不默认武器化。', 'Assistive mobility exosuit, medical or labor-oriented, not automatically weaponized.', 3, ['contemporary', 'near_future', 'far_future'], UNIVERSAL_HUMAN_SCOPE, 'medium'],
  ['smart_contact_implant', '智能隐形镜片', 'Smart Contact Implant', 'B. 赛博义体', 'B. Cybernetics', '眼部有隐形界面或微型显示，不替代整只眼。', 'Eye has hidden interface or micro-display without replacing the whole eye.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['cybernetic_eye', '赛博义眼', 'Cybernetic Eye', 'B. 赛博义体', 'B. Cybernetics', '眼睛明确变成机械/光学装置，属于强技术改造。', 'Eye clearly becomes mechanical/optical device, a strong tech modification.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['neural_jack', '神经插口', 'Neural Jack', 'B. 赛博义体', 'B. Cybernetics', '颈后、耳后或太阳穴有神经连接接口。', 'Neural connection port behind neck, ear, or temple.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['synthetic_lungs_port', '合成肺接口', 'Synthetic Lung Port', 'B. 赛博义体', 'B. Cybernetics', '胸侧或锁骨附近有呼吸系统接口。', 'Respiratory-system interface near ribs or collarbone.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['mechanical_heart_window', '机械心脏视窗', 'Mechanical Heart Window', 'B. 赛博义体', 'B. Cybernetics', '胸口有小型透明视窗或能量核心提示机械心脏。', 'Small chest window or power-core hint suggests mechanical heart.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['subdermal_armor', '皮下护甲', 'Subdermal Armor', 'B. 赛博义体', 'B. Cybernetics', '皮下板块改变身体边缘，适合安保、佣兵或实验体。', 'Subdermal plates alter body edges, suited to security, mercenary, or experiment subjects.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['modular_socket_limb', '模块化肢体插槽', 'Modular Limb Socket', 'B. 赛博义体', 'B. Cybernetics', '肩、肘、膝或腕部有可替换模块接口。', 'Replaceable module socket at shoulder, elbow, knee, or wrist.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['retractable_tool_fingers', '可伸缩工具指', 'Retractable Tool Fingers', 'B. 赛博义体', 'B. Cybernetics', '手指内藏工具，服务维修、医疗或工匠身份。', 'Fingers hide tools, serving repair, medicine, or craft identity.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['spinal_cable_tail', '脊柱线缆尾', 'Spinal Cable Tail', 'B. 赛博义体', 'B. Cybernetics', '从脊柱延伸线缆或平衡尾，必须有功能理由。', 'Cable or balance tail extends from spine and must have functional reason.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['cranial_antenna', '颅侧天线', 'Cranial Antenna', 'B. 赛博义体', 'B. Cybernetics', '头部小型天线、接收器或信号装置。', 'Small head antenna, receiver, or signal device.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['synthetic_skin_seams', '合成皮肤接缝', 'Synthetic Skin Seams', 'B. 赛博义体', 'B. Cybernetics', '皮肤边缘可见合成层接缝，提示仿生或修复。', 'Visible synthetic-skin seams imply android or repair.', 3, ['near_future', 'far_future'], HUMANOID_SCOPE, 'medium'],
  ['heat_vents_body', '身体散热孔', 'Body Heat Vents', 'B. 赛博义体', 'B. Cybernetics', '颈侧、肋部或背部有散热孔，服务机械生理。', 'Heat vents on neck, ribs, or back serve mechanical physiology.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['cat_tail', '猫尾', 'Cat Tail', 'C. 生物越界', 'C. Biological Boundary', '猫尾改变角色平衡和情绪表达。', 'Cat tail changes balance and emotional expression.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['fox_tail', '狐尾', 'Fox Tail', 'C. 生物越界', 'C. Biological Boundary', '狐尾强烈指向妖怪、神话或兽化身份。', 'Fox tail strongly points to yokai, myth, or animalized identity.', 4, ['timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['wolf_ears', '狼耳', 'Wolf Ears', 'C. 生物越界', 'C. Biological Boundary', '狼耳强化警觉、群体、狩猎或兽化身份。', 'Wolf ears strengthen alertness, pack, hunting, or animalized identity.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['serpent_tongue', '蛇信', 'Serpent Tongue', 'C. 生物越界', 'C. Biological Boundary', '舌头轻微分叉，适合蛇女、实验体或妖异人物。', 'Slightly forked tongue suited to serpent women, experiments, or uncanny figures.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['fangs', '獠牙', 'Fangs', 'C. 生物越界', 'C. Biological Boundary', '牙齿变成捕食性獠牙，必须由吸血鬼、兽化或非人规则授权。', 'Teeth become predatory fangs, requiring vampire, animalized, or non-human rule.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['webbed_fingers', '蹼指', 'Webbed Fingers', 'C. 生物越界', 'C. Biological Boundary', '手指之间有蹼，适合海洋、两栖或实验体。', 'Webbing between fingers suited to oceanic, amphibious, or experimental subjects.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['feather_growth', '羽毛生长', 'Feather Growth', 'C. 生物越界', 'C. Biological Boundary', '手臂、肩部或头部有羽毛生长，改变身体边缘。', 'Feathers grow on arms, shoulders, or head, changing body edge.', 4, ['timeless', 'mythic', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['extra_arms', '多臂', 'Extra Arms', 'C. 生物越界', 'C. Biological Boundary', '额外手臂会强烈改变构图，必须服务神话、实验或异种逻辑。', 'Extra arms strongly change composition and must serve myth, experiment, or creature logic.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['third_eye', '第三只眼', 'Third Eye', 'C. 生物越界', 'C. Biological Boundary', '额头或眉心有第三眼，适合神性、预知或实验。', 'Third eye on forehead or brow center, suited to divinity, prophecy, or experiment.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['halo_implant', '植入式光环', 'Implanted Halo', 'C. 生物越界', 'C. Biological Boundary', '光环与头部或背部结构相连，介于神性和技术之间。', 'Halo connects to head or back structure, between divinity and technology.', 4, ['near_future', 'far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['living_vines', '活藤蔓共生', 'Living Vines', 'D. 共生/感染', 'D. Symbiosis / Infection', '藤蔓像活体器官一样与身体共生。', 'Vines symbiose with body like living organs.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['flowering_skin', '开花皮肤', 'Flowering Skin', 'D. 共生/感染', 'D. Symbiosis / Infection', '皮肤局部开花，适合神话、植物感染或仪式牺牲。', 'Skin flowers locally, suited to myth, plant infection, or ritual sacrifice.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['moss_growth', '苔藓共生', 'Moss Symbiosis', 'D. 共生/感染', 'D. Symbiosis / Infection', '苔藓沿肩背、头发或衣物边缘生长。', 'Moss grows along shoulders, back, hair, or clothing edges.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['insect_chitin_patches', '昆虫甲壳斑块', 'Insect Chitin Patches', 'D. 共生/感染', 'D. Symbiosis / Infection', '身体局部出现昆虫甲壳板。', 'Local insect chitin plates appear on the body.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['coral_growth', '珊瑚生长', 'Coral Growth', 'D. 共生/感染', 'D. Symbiosis / Infection', '珊瑚状结构从身体或衣物边缘长出，适合海洋/生态逻辑。', 'Coral-like structures grow from body or garment edges, suited to oceanic/ecological logic.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['bone_spurs', '骨刺生长', 'Bone Spurs', 'D. 共生/感染', 'D. Symbiosis / Infection', '骨刺从肩、脊柱或前臂长出，形成危险轮廓。', 'Bone spurs grow from shoulders, spine, or forearms, forming dangerous silhouette.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['symbiotic_eye_growth', '共生眼点', 'Symbiotic Eye Growths', 'D. 共生/感染', 'D. Symbiosis / Infection', '身体上出现非主视觉的小眼点，必须控制数量。', 'Small non-primary eye spots appear on body; quantity must be controlled.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['parasite_collar', '寄生项圈器官', 'Parasite Collar Organ', 'D. 共生/感染', 'D. Symbiosis / Infection', '寄生体围绕颈部形成项圈状器官。', 'Parasite forms a collar-like organ around the neck.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['living_armor_growth', '活体护甲生长', 'Living Armor Growth', 'D. 共生/感染', 'D. Symbiosis / Infection', '护甲像身体生长出来，而不是外穿装备。', 'Armor appears grown from the body rather than worn externally.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['crystalline_spine', '晶体脊柱', 'Crystalline Spine', 'D. 共生/感染', 'D. Symbiosis / Infection', '脊柱线上长出晶体结构，改变背部轮廓。', 'Crystal structures grow along spine, changing back silhouette.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['mineralized_hand', '矿物化手部', 'Mineralized Hand', 'D. 共生/感染', 'D. Symbiosis / Infection', '手部局部矿物化，影响触碰和道具持握。', 'Hand partially mineralizes, affecting touch and prop handling.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['shadow_limb', '阴影肢体', 'Shadow Limb', 'E. 非物质改造', 'E. Immaterial Alteration', '一只肢体像阴影或烟雾构成，属于高本体越界。', 'One limb appears made of shadow or smoke, a high ontology breach.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['hologram_limb', '全息肢体', 'Hologram Limb', 'E. 非物质改造', 'E. Immaterial Alteration', '肢体由投影或光场补全，适合虚拟、科技或幽灵化身份。', 'Limb completed by projection or light field, suited to virtual, tech, or ghost-like identity.', 5, ['far_future', 'timeless'], HUMANOID_SCOPE, 'high'],
  ['flame_hair_body', '火焰化局部', 'Flame-Form Body Part', 'E. 非物质改造', 'E. Immaterial Alteration', '头发、手或肩部像稳定火焰，必须由神话或能量规则授权。', 'Hair, hand, or shoulder reads as stable flame, requiring myth or energy rules.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['water_body_part', '水体化局部', 'Water-Form Body Part', 'E. 非物质改造', 'E. Immaterial Alteration', '局部身体像水或液体维持形状。', 'Local body part holds shape as water or liquid.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['paper_body_edges', '纸片化身体边缘', 'Paper-Body Edges', 'E. 非物质改造', 'E. Immaterial Alteration', '身体边缘像纸张、符咒或剪影层片。', 'Body edges resemble paper, talismans, or cutout layers.', 5, ['timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['porcelain_joint_body', '陶瓷关节身体', 'Porcelain Joint Body', 'E. 非物质改造', 'E. Immaterial Alteration', '身体有关节化陶瓷结构，适合人偶、神像或实验体。', 'Body has jointed porcelain structure, suited to dolls, icons, or experiments.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['doll_ball_joints', '球形关节', 'Ball-Jointed Body', 'E. 非物质改造', 'E. Immaterial Alteration', '肩肘膝等呈人偶球形关节，改变姿态语言。', 'Shoulders, elbows, knees become doll-like ball joints, changing pose language.', 4, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['mirror_body_fragment', '镜面身体碎片', 'Mirror Body Fragments', 'E. 非物质改造', 'E. Immaterial Alteration', '身体局部像镜面碎片拼合，适合高概念幻想。', 'Local body appears assembled from mirror fragments, suited to high-concept fantasy.', 5, ['far_future', 'timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['ritual_extra_hands', '仪式额外手', 'Ritual Extra Hands', 'C. 生物越界', 'C. Biological Boundary', '额外手臂以神像或仪式姿态组织，不作为随机怪物堆叠。', 'Extra arms organized as icon or ritual posture, not random monster stacking.', 5, ['timeless', 'mythic'], HUMANOID_SCOPE, 'high'],
  ['synthetic_voice_throat', '合成声带喉部', 'Synthetic Voice Throat', 'B. 赛博义体', 'B. Cybernetics', '喉部有发声器、扬声接口或可见振膜。', 'Throat has voice device, speaker interface, or visible diaphragm.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high'],
  ['memory_drive_slot', '记忆盘插槽', 'Memory Drive Slot', 'B. 赛博义体', 'B. Cybernetics', '身体有用于插入记忆盘或数据卡的槽口。', 'Body has a slot for memory drive or data card.', 4, ['near_future', 'far_future'], HUMANOID_SCOPE, 'high']
];

export const CD_FACE_FEATURES = makeItems('face', FACE_FEATURE_ROWS, ['face']);
export const CD_MAKEUP_STYLE = withMakeupMeta(makeItems('makeup', [...MAKEUP_ROWS, ...MAKEUP_EXTRA_ROWS], ['face', 'style']));
export const CD_SKIN_MATERIAL = withBodyEvidenceMeta(makeItems('skin', SKIN_MATERIAL_ROWS, ['skin', 'material']));
export const CD_SURFACE_STATE = withBodyEvidenceMeta(makeItems('surface_state', SURFACE_STATE_ROWS, ['skin', 'surface', 'state']));
export const CD_BODY_FEATURES = withBodyEvidenceMeta(makeItems('body', BODY_FEATURE_ROWS, ['body']));
export const CD_BODY_MARKINGS = withBodyEvidenceMeta(makeItems('body_mark', [...BODY_MARKING_ROWS, ...BODY_MARKING_EXTRA_ROWS], ['body', 'symbol']));
export const CD_BODY_DAMAGE = withBodyEvidenceMeta(makeItems('body_damage', [...BODY_DAMAGE_ROWS, ...BODY_DAMAGE_EXTRA_ROWS], ['body', 'damage']));
export const CD_BODY_MODIFICATION = withBodyEvidenceMeta(makeItems('body_mod', [...BODY_MODIFICATION_ROWS, ...BODY_MODIFICATION_EXTRA_ROWS], ['body', 'modification']));
