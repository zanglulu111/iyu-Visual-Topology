import { makeStyleProtocolItems, StyleProtocolFamily, StyleProtocolSeed } from './shared';

const ROUTE = 'SURREAL';
const ROUTE_NAME = '超现实本体';
const ROUTE_NAME_EN = 'Surreal Ontology';
const ERAS = ['primitive', 'slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const FORBIDS = ['无解释随机魔法特效', '身体结构完全不可读', '把所有元素都做成发光', '恐怖污染抢走主体身份', '复杂背景吞掉人物', '只做抽象概念不落到可见设计'];

const s = (
  slug: string,
  name: string,
  nameEn: string,
  kind: StyleProtocolSeed['kind'],
  focus: string,
  focusEn: string,
  visual: string[],
  visualEn: string[],
  absorption: string,
  absorptionEn: string,
  extra: Partial<StyleProtocolSeed> = {}
): StyleProtocolSeed => ({ slug, name, nameEn, kind, focus, focusEn, visual, visualEn, absorption, absorptionEn, ...extra });

const families: StyleProtocolFamily[] = [
  {
    slug: 'dream_body',
    name: '梦境身体',
    nameEn: 'Dream Body',
    focus: '梦境逻辑、睡眠残影和不稳定身体边界统摄角色',
    focusEn: 'dream logic, sleep residue, and unstable body boundary governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'surface', 'pose', 'symbol'],
    defaultControls: ['dream_body', 'unstable_boundary', 'sleep_residue'],
    items: [
      s('sleepwalking_axis', '梦游轴线', 'Sleepwalking Axis', 'pose', '梦游式直立和迟滞动作成为角色主姿态', 'sleepwalking uprightness and delayed motion become main posture', ['半闭眼', '脚步漂移', '松弛手臂', '慢半拍', '安静失焦'], ['half-closed eyes', 'drifting step', 'relaxed arms', 'half-beat delay', 'quiet defocus'], '动作类冲突优先转成梦游式迟滞。', 'Translate action conflict into sleepwalking delay.', { ontologyLevel: 3, risk: 'medium' }),
      s('blanket_shell_memory', '被褥壳记忆', 'Blanket-Shell Memory', 'costume', '衣物像睡眠残留而不是普通服装', 'clothing reads as sleep residue rather than normal costume', ['包裹布层', '枕痕', '褶皱拖尾', '柔软边缘', '低饱和'], ['wrapped cloth layers', 'pillow marks', 'wrinkle trail', 'soft edge', 'low saturation'], '服装冲突优先被软化成睡眠包裹层。', 'Soften costume conflict into sleep wrapping layers.', { ontologyLevel: 2, risk: 'medium' }),
      s('lucid_cut_line', '清醒切线', 'Lucid Cut Line', 'symbol', '一条清醒边界切开梦与现实', 'one lucid boundary cuts dream from reality', ['直线裂口', '一侧清晰', '一侧朦胧', '边缘微光', '脸部完整'], ['straight slit', 'one side sharp', 'one side hazy', 'rim glow', 'whole face'], '现实元素和梦境元素用一条切线分层。', 'Layer real and dream elements with one cut line.', { ontologyLevel: 3 }),
      s('repeated_object_echo', '重复物回声', 'Repeated Object Echo', 'prop', '同一小物重复出现制造梦的循环感', 'one small object repeats to create dream-loop feeling', ['重复钥匙', '重复花', '重复纸片', '远近错位', '数量克制'], ['repeated key', 'repeated flower', 'repeated paper', 'depth mismatch', 'restrained count'], '道具冲突优先变成重复回声，不堆新物件。', 'Turn prop conflict into repeated echoes, not more objects.', { ontologyLevel: 2 }),
      s('soft_gravity_body', '软重力身体', 'Soft-Gravity Body', 'pose', '身体像被轻微低重力拖住', 'body feels held by slight low gravity', ['肩部悬浮感', '发梢上扬', '衣角慢落', '脚尖轻触', '重心暧昧'], ['floating shoulders', 'lifted hair tips', 'slow falling hem', 'toe touch', 'ambiguous center'], '动态动作优先降速为软重力。', 'Slow dynamic actions into soft gravity.', { ontologyLevel: 3 }),
      s('dream_stain_surface', '梦斑表面', 'Dream-Stain Surface', 'material', '皮肤或衣物留下非现实梦斑', 'skin or clothing carries unreal dream stains', ['水渍云斑', '边缘扩散', '局部透明', '柔灰紫', '无血腥'], ['watery cloud stain', 'diffuse edge', 'local translucency', 'soft gray violet', 'no gore'], '污染类元素优先净化成梦斑。', 'Purify pollution elements into dream stains.', { ontologyLevel: 3 }),
      s('bedroom_scale_error', '卧室尺度错位', 'Bedroom Scale Error', 'prop', '小型卧室物件以错误尺度附着角色', 'small bedroom objects attach at wrong scale', ['小门把手', '微型床架', '放大纽扣', '比例错位', '日常怪异'], ['tiny doorknob', 'mini bedframe', 'enlarged button', 'scale error', 'daily strangeness'], '场景信息优先缩小成身体旁的尺度错位物。', 'Shrink scene information into scale-error objects near body.', { ontologyLevel: 4, risk: 'high' }),
      s('half_remembered_face', '半记得的脸', 'Half-Remembered Face', 'face', '面部识别清楚但细节像记忆缺口', 'face remains recognizable while details feel like memory gaps', ['清楚轮廓', '轻微模糊区', '淡眉眼', '不对称记忆', '表情温和'], ['clear outline', 'slight blurred area', 'faint brows and eyes', 'asymmetric memory', 'gentle expression'], '脸部超现实必须保留识别，只让局部像被忘记。', 'Keep facial identity; only local areas feel forgotten.', { ontologyLevel: 3 }),
      s('dream_thread_tether', '梦线牵引', 'Dream-Thread Tether', 'symbol', '细线把身体和不可见梦源连接', 'thin thread connects body to invisible dream source', ['细白线', '手腕脚踝', '轻微拉扯', '线头消失', '安静控制'], ['thin white thread', 'wrist and ankle', 'slight pull', 'vanishing end', 'quiet control'], '控制或命运元素优先转成细线牵引。', 'Translate control or fate into thin-thread tethering.', { ontologyLevel: 3 }),
      s('dream_not_fantasy_magic', '梦境非魔法特效', 'Dream Not Magic VFX', 'function', '梦境协议避免变成通用魔法光效', 'dream protocol avoids becoming generic magic glow', ['低光', '柔边', '现实物变形', '少量异象', '主体清楚'], ['low glow', 'soft edge', 'warped real object', 'few anomalies', 'clear subject'], '梦境必须通过现实物的错位显形。', 'Dream must appear through displaced real objects.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'dimension_rift',
    name: '维度裂隙',
    nameEn: 'Dimensional Rift',
    focus: '维度切口、空间折叠和身体断层统摄角色',
    focusEn: 'dimensional cuts, folded space, and body strata governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'silhouette', 'surface', 'symbol'],
    defaultControls: ['dimension_rift', 'space_fold', 'body_strata'],
    items: [
      s('thin_space_slit', '薄空间裂口', 'Thin Space Slit', 'symbol', '极薄空间裂口贴近身体边界', 'very thin spatial slit stays close to body boundary', ['细黑裂缝', '边缘白光', '衣物断线', '局部错层', '无大爆炸'], ['thin black crack', 'white rim light', 'broken garment line', 'local offset', 'no explosion'], '空间异象优先收束为贴身薄裂口。', 'Constrain spatial anomaly into a body-close thin slit.', { ontologyLevel: 4, risk: 'high' }),
      s('folded_limb_offset', '折叠肢体错位', 'Folded Limb Offset', 'ontology', '肢体局部像穿过折叠空间但仍可读', 'local limb seems to pass through folded space while readable', ['手臂错层', '断续边缘', '比例保留', '关节清楚', '静态展示'], ['arm offset', 'intermittent edge', 'proportion kept', 'clear joint', 'static display'], '肢体异常必须保持关节和比例可读。', 'Limb anomaly must preserve readable joints and proportion.', { ontologyLevel: 4, risk: 'high' }),
      s('portal_seam_costume', '传送门缝线', 'Portal-Seam Costume', 'costume', '服装缝线像微型空间门', 'garment seams read as miniature portals', ['缝线开口', '内部暗面', '衣摆错位', '少量星点', '剪裁优先'], ['seam openings', 'dark inside', 'offset hem', 'few star points', 'tailoring first'], '空间感优先落到剪裁缝线，不开巨大门。', 'Put spatial feeling into tailoring seams, not giant portals.', { ontologyLevel: 3 }),
      s('perspective_mismatch_panel', '透视错面', 'Perspective-Mismatch Panel', 'material', '身体或衣物某块面使用错误透视', 'one body or costume panel uses impossible perspective', ['斜向面板', '方向不一致', '边缘硬', '局部视差', '几何怪异'], ['slanted panel', 'mismatched direction', 'hard edge', 'local parallax', 'geometric strangeness'], '维度冲突优先变成单块错透视面。', 'Turn dimensional conflict into one wrong-perspective panel.', { ontologyLevel: 4 }),
      s('inside_out_shadow', '内外反转阴影', 'Inside-Out Shadow', 'material', '阴影像从身体内部投出', 'shadow seems cast from inside the body', ['内侧阴影', '反向光源', '胸腹边', '低对比', '不血腥'], ['inner shadow', 'reversed light source', 'torso edge', 'low contrast', 'non-gory'], '黑暗或虚空元素优先作为内投阴影。', 'Use darkness or void as inner-cast shadow first.', { ontologyLevel: 4 }),
      s('spatial_anchor_ring', '空间锚环', 'Spatial Anchor Ring', 'prop', '锚环固定角色不被维度带走', 'anchor ring keeps character from being taken by dimension', ['金属环', '腰肩固定', '细刻度', '拉力线', '工程感'], ['metal ring', 'waist-shoulder mount', 'fine scale marks', 'tension lines', 'engineering feel'], '失控维度元素需要一个锚定物解释。', 'Unstable dimensional elements need an anchoring object.', { ontologyLevel: 3 }),
      s('room_fragment_attached', '房间碎片附着', 'Room Fragment Attached', 'prop', '空间碎片变成贴身小构件', 'room fragments become close-worn components', ['墙角片', '门框小段', '地砖边', '贴身固定', '尺度克制'], ['wall-corner shard', 'small doorframe piece', 'tile edge', 'body-mounted', 'restrained scale'], '背景空间优先碎片化附着到角色。', 'Fragment background space into body-mounted pieces.', { ontologyLevel: 4 }),
      s('flat_plane_body_cut', '平面切割身体', 'Flat-Plane Body Cut', 'structure', '身体被几何平面局部切分但不破坏身份', 'geometric planes locally segment body without destroying identity', ['平面切口', '几何边', '头脸保留', '身体连续', '冷静构成'], ['planar cut', 'geometric edge', 'face preserved', 'body continuous', 'calm composition'], '抽象几何必须服务身体分层。', 'Abstract geometry must serve body stratification.', { ontologyLevel: 4 }),
      s('axis_rotated_detail', '轴线旋转细节', 'Axis-Rotated Detail', 'symbol', '局部细节旋转九十度形成维度错觉', 'local detail rotates ninety degrees to create dimensional illusion', ['旋转口袋', '横向纽扣', '倒置标记', '局部异常', '整体稳定'], ['rotated pocket', 'sideways button', 'inverted mark', 'local anomaly', 'stable whole'], '小型冲突优先处理成局部轴线旋转。', 'Handle small conflict as local axis rotation.', { ontologyLevel: 2 }),
      s('rift_clarity_rule', '裂隙清晰规则', 'Rift Clarity Rule', 'function', '维度裂隙只允许一个主切口', 'dimensional rift allows only one main cut', ['单主裂口', '其余安静', '轮廓可读', '脸部不切碎', '背景极简'], ['one main rift', 'quiet remainder', 'readable silhouette', 'face not shredded', 'minimal background'], '所有维度元素收束到一个可读切口。', 'Converge all dimensional elements into one readable cut.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'ghost_transparency',
    name: '幽灵透明',
    nameEn: 'Ghost Transparency',
    focus: '幽灵透明、残留轮廓和可见缺席统摄角色',
    focusEn: 'ghost transparency, residual contour, and visible absence governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'surface', 'costume', 'pose'],
    defaultControls: ['ghost_transparency', 'residual_contour', 'visible_absence'],
    items: [
      s('translucent_edge_body', '半透明边缘身体', 'Translucent Edge Body', 'material', '透明只发生在轮廓边缘而非全身消失', 'transparency happens at contour edge instead of whole-body vanishing', ['边缘透明', '中心实在', '轮廓发灰', '脸部清楚', '低光'], ['transparent edge', 'solid center', 'gray contour', 'clear face', 'low light'], '幽灵感优先落在轮廓边缘。', 'Place ghost feeling on contour edges first.', { ontologyLevel: 4, risk: 'high' }),
      s('afterimage_trail', '残影拖痕', 'Afterimage Trail', 'pose', '动作后方留下浅残影', 'a faint afterimage remains behind movement', ['身体残影', '错半步', '透明层', '动作方向', '数量少'], ['body afterimage', 'half-step offset', 'transparent layer', 'motion direction', 'few copies'], '动态冲突优先转成单方向残影。', 'Turn dynamic conflict into one-direction afterimage.', { ontologyLevel: 3 }),
      s('mourning_sheet_layer', '哀悼薄纱层', 'Mourning Veil Layer', 'costume', '薄纱像幽灵媒介而不是普通装饰', 'veil reads as ghost medium rather than decoration', ['灰白薄纱', '脸前半遮', '长垂线', '哀悼气质', '衣物轻'], ['gray-white veil', 'half-covered face', 'long vertical fall', 'mourning mood', 'light garment'], '幽灵和礼仪冲突优先用薄纱连接。', 'Use veil to connect ghost and etiquette conflicts.', { ontologyLevel: 2 }),
      s('hollow_eye_glimmer', '空眼微光', 'Hollow Eye Glimmer', 'face', '眼部像空洞但仍有微弱人格光', 'eyes feel hollow but retain faint personhood light', ['暗眼窝', '细小高光', '无夸张火焰', '凝视稳定', '脸型保留'], ['dark eye socket', 'tiny highlight', 'no huge flame', 'stable gaze', 'face shape kept'], '眼部超现实必须保留人格方向。', 'Eye surrealism must preserve personhood direction.', { ontologyLevel: 4 }),
      s('cold_breath_visible', '冷息可见', 'Cold Breath Visible', 'material', '呼吸像冷雾证明幽灵仍在场', 'breath like cold mist proves ghost remains present', ['白雾呼吸', '嘴边微云', '冷空气', '静态站姿', '低饱和'], ['white mist breath', 'small cloud near mouth', 'cold air', 'static stance', 'low saturation'], '生命迹象优先转成冷息。', 'Translate life sign into cold breath first.', { ontologyLevel: 2 }),
      s('fading_hand_tip', '指尖淡出', 'Fading Fingertips', 'body', '手指末端逐渐淡出形成触碰不可得', 'fingertips fade out to suggest untouchability', ['淡出指尖', '手势清楚', '透明渐变', '无断肢血腥', '触碰距离'], ['fading fingertips', 'clear gesture', 'transparent gradient', 'no gore', 'touch distance'], '身体消失只允许从末端渐变。', 'Body disappearance should gradient from extremities only.', { ontologyLevel: 4 }),
      s('grave_dust_surface', '墓尘表面', 'Grave-Dust Surface', 'material', '表面覆盖安静灰尘而不是腐烂', 'surface carries quiet dust rather than rot', ['细灰尘', '肩头积尘', '衣褶灰白', '无腐肉', '时间感'], ['fine dust', 'dust on shoulders', 'gray-white folds', 'no decay flesh', 'sense of time'], '死亡感优先转成尘埃和时间。', 'Translate death feeling into dust and time.', { ontologyLevel: 2 }),
      s('unseen_weight_pose', '无形重量姿态', 'Unseen-Weight Pose', 'pose', '姿态显示被看不见的重量牵住', 'pose shows being held by unseen weight', ['肩下沉', '手腕低垂', '步伐停住', '目光远', '空白压力'], ['sunken shoulders', 'drooping wrists', 'halted step', 'distant gaze', 'blank pressure'], '超自然压迫优先表现为姿态重量。', 'Show supernatural pressure as postural weight.', { ontologyLevel: 2 }),
      s('transparent_object_memory', '透明物记忆', 'Transparent Object Memory', 'prop', '道具像记忆残留一样半透明', 'prop appears translucent like memory residue', ['半透明伞', '旧信', '空杯', '边缘淡化', '手持清楚'], ['translucent umbrella', 'old letter', 'empty cup', 'faded edge', 'clear holding'], '过往信息优先附着到半透明道具。', 'Attach past information to translucent props first.', { ontologyLevel: 3 }),
      s('ghost_not_horror_monster', '幽灵非恐怖怪物', 'Ghost Not Horror Monster', 'function', '幽灵协议强调缺席和残留，不默认恐怖变形', 'ghost protocol emphasizes absence and residue, not default horror mutation', ['人形清楚', '安静透明', '少量冷雾', '无血腥撕裂', '身份优先'], ['clear humanoid shape', 'quiet transparency', 'little cold mist', 'no bloody tearing', 'identity first'], '幽灵化不得吞掉角色身份。', 'Ghosting must not swallow character identity.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'mirror_dislocation',
    name: '镜像错位',
    nameEn: 'Mirror Dislocation',
    focus: '镜像、反射错位和自我分裂统摄角色',
    focusEn: 'mirrors, reflection mismatch, and split self governing character',
    defaultKind: 'symbol',
    defaultAffects: ['face', 'body', 'prop', 'symbol'],
    defaultControls: ['mirror_dislocation', 'reflection_mismatch', 'split_self'],
    items: [
      s('wrong_reflection_face', '错误倒影脸', 'Wrong Reflection Face', 'face', '倒影里的脸和本体有微差', 'reflected face differs subtly from the subject', ['镜中微笑', '本体冷脸', '五官相同', '表情错位', '镜面小'], ['smiling mirror face', 'cold real face', 'same features', 'expression mismatch', 'small mirror'], '双重人格信息优先放进倒影表情。', 'Put split-personality information into reflected expression.', { ontologyLevel: 3 }),
      s('mirror_shard_halo', '镜片碎冠', 'Mirror-Shard Halo', 'symbol', '碎镜围绕头部形成危险光环', 'mirror shards around head form a dangerous halo', ['碎镜片', '头部周围', '反光边', '不割脸', '冷光'], ['mirror shards', 'around head', 'reflective edge', 'no face cuts', 'cold light'], '神圣或危险光环可转成碎镜结构。', 'Translate sacred or dangerous halo into mirror shards.', { ontologyLevel: 3 }),
      s('asymmetric_reflection_mark', '不对称反射标记', 'Asymmetric Reflection Mark', 'symbol', '身体两侧反射标记不一致', 'reflection marks differ between body sides', ['一侧亮斑', '一侧暗斑', '左右冲突', '局部可控', '无全身花屏'], ['one side bright mark', 'one side dark mark', 'left-right conflict', 'local control', 'no full-body glitch'], '对立元素优先以左右反射差异表达。', 'Express opposing elements through left-right reflection difference.', { ontologyLevel: 2 }),
      s('polished_black_mirror', '黑镜抛光面', 'Polished Black Mirror', 'material', '黑色镜面材料吸收环境并扭曲身份', 'black mirror material absorbs environment and distorts identity', ['黑亮面', '微反射', '边缘硬', '面部不遮', '高冷感'], ['black gloss plane', 'subtle reflection', 'hard edge', 'face uncovered', 'cold elegance'], '暗黑风格优先变成黑镜材质。', 'Translate dark style into black-mirror material.', { ontologyLevel: 2 }),
      s('handheld_mirror_witness', '手镜见证', 'Handheld Mirror Witness', 'prop', '手镜作为观察自我裂缝的证物', 'hand mirror witnesses the crack in selfhood', ['小手镜', '手部姿态', '镜面偏转', '脸外第二视角', '私密感'], ['small hand mirror', 'hand pose', 'tilted mirror', 'second angle outside face', 'private feeling'], '心理冲突优先落成手持镜物。', 'Ground psychological conflict as a handheld mirror object.', { ontologyLevel: 1 }),
      s('mirror_not_screen', '镜非屏幕', 'Mirror Not Screen', 'function', '反射协议避免误变成科技屏幕', 'reflection protocol avoids turning into tech screen', ['真实反光', '无UI', '无数据字', '材质反射', '光源可读'], ['real reflection', 'no UI', 'no data text', 'material reflection', 'readable light source'], '如果不是技术装置，镜面不得生成界面。', 'If not technical apparatus, mirror must not generate UI.', { ontologyLevel: 1 }),
      s('inverted_pose_shadow', '反向姿态影', 'Inverted Pose Shadow', 'pose', '影子或倒影做出相反姿态', 'shadow or reflection performs opposite pose', ['本体站立', '影子伸手', '动作相反', '地面反射', '清楚分离'], ['subject standing', 'shadow reaching', 'opposite action', 'floor reflection', 'clear separation'], '隐藏欲望优先交给倒影动作。', 'Give hidden desire to reflection action first.', { ontologyLevel: 3 }),
      s('face_split_mirror_line', '镜线分脸', 'Mirror Line Face Split', 'face', '镜线切分面部但不做机械或伤口', 'mirror line divides face without mechanics or wounds', ['垂直亮线', '半脸反光', '无伤口', '五官完整', '表情分裂'], ['vertical highlight line', 'half-face reflection', 'no wound', 'complete features', 'split expression'], '面部冲突优先用反射线分层。', 'Layer facial conflict with a reflection line.', { ontologyLevel: 2 }),
      s('many_small_reflections', '多重小反射', 'Many Small Reflections', 'symbol', '多个小反射给出身份碎片', 'many small reflections give identity fragments', ['小镜面', '碎片排列', '每片不同亮度', '数量克制', '主体不碎'], ['small mirrors', 'fragment array', 'different brightness', 'restrained count', 'subject intact'], '复杂身份不拆身体，拆反射。', 'Do not split the body for complex identity; split reflections.', { ontologyLevel: 3 }),
      s('mirror_identity_rule', '镜像身份规则', 'Mirror Identity Rule', 'function', '镜像错位必须回答另一个自我是什么', 'mirror dislocation must answer what the other self is', ['本体清楚', '倒影差异明确', '无随机碎片', '身份线索', '单一主题'], ['clear subject', 'specific reflection difference', 'no random shards', 'identity cue', 'single theme'], '所有镜像元素都必须服务自我分裂。', 'All mirror elements must serve split selfhood.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'void_absence',
    name: '虚空缺席',
    nameEn: 'Void Absence',
    focus: '虚空、缺口、消失和负空间统摄角色',
    focusEn: 'void, gaps, disappearance, and negative space governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'silhouette', 'surface', 'symbol'],
    defaultControls: ['void_absence', 'negative_space', 'controlled_gap'],
    items: [
      s('chest_void_window', '胸口虚空窗', 'Chest Void Window', 'ontology', '胸口小型虚空窗替代夸张黑洞', 'small chest void window replaces exaggerated black hole', ['胸口黑窗', '硬边', '内无细节', '身体完整', '低光'], ['black chest window', 'hard edge', 'detail-less inside', 'body intact', 'low light'], '虚空必须收束到一个可读窗口。', 'Constrain void into one readable window.', { ontologyLevel: 4, risk: 'high' }),
      s('missing_shadow', '缺席影子', 'Missing Shadow', 'symbol', '影子缺失说明存在被抽空', 'missing shadow shows existence being hollowed', ['无影区域', '脚下空白', '光源正常', '身体真实', '安静不安'], ['shadowless area', 'blank under feet', 'normal light source', 'real body', 'quiet unease'], '消失感优先从影子开始。', 'Begin disappearance from the shadow.', { ontologyLevel: 3 }),
      s('black_edge_erosion', '黑边蚀空', 'Black-Edge Erosion', 'material', '轮廓边缘被黑色负空间轻微吞噬', 'contour edge is lightly consumed by black negative space', ['黑色边蚀', '少量缺口', '轮廓保留', '无血肉腐烂', '极简'], ['black edge erosion', 'few gaps', 'contour kept', 'no flesh rot', 'minimal'], '腐化或恐怖元素优先降级为黑边缺口。', 'Downgrade rot or horror into black edge gaps.', { ontologyLevel: 4 }),
      s('empty_face_patch', '面部空白贴片', 'Empty Face Patch', 'face', '面部局部空白但五官识别仍在', 'local facial blankness while features remain recognizable', ['一块空白', '五官绕开', '无伤口', '皮肤平整', '身份还在'], ['one blank patch', 'features around it', 'no wound', 'smooth skin', 'identity remains'], '脸部虚空不得删除眼神。', 'Facial void must not remove the gaze.', { ontologyLevel: 4 }),
      s('negative_space_garment', '负空间服装', 'Negative-Space Garment', 'costume', '剪裁让空白成为服装结构', 'tailoring makes emptiness into garment structure', ['镂空剪裁', '硬边空白', '身体不裸露为主', '图形轮廓', '克制性感'], ['cutout tailoring', 'hard-edged blank', 'not mainly nude', 'graphic silhouette', 'restrained sensuality'], '服装冲突优先变成负空间剪裁。', 'Turn costume conflict into negative-space tailoring.', { ontologyLevel: 2 }),
      s('void_prop_container', '虚空容器道具', 'Void-Container Prop', 'prop', '小容器承载不可见虚空', 'small container holds invisible void', ['黑盒', '空瓶', '无底袋', '手持', '边缘清楚'], ['black box', 'empty bottle', 'bottomless bag', 'handheld', 'clear edge'], '巨大虚空优先缩小为可持有容器。', 'Shrink huge void into a handheld container.', { ontologyLevel: 3 }),
      s('erased_text_mark', '被擦除文字', 'Erased Text Mark', 'symbol', '标识被擦掉留下缺席身份', 'erased label leaves absent identity', ['擦除铭牌', '残字', '白色划痕', '制服位置', '身份缺口'], ['erased nameplate', 'remaining letters', 'white scratch', 'uniform position', 'identity gap'], '身份缺失优先用被擦除标记表达。', 'Express missing identity through erased marks.', { ontologyLevel: 1 }),
      s('void_hair_gap', '发丝虚空缺口', 'Void Gap in Hair', 'material', '发型中出现像被剪走的黑色缺口', 'hair contains black gaps as if cut away', ['黑色空洞', '发束断层', '轮廓清楚', '不脏乱', '剪影强'], ['black holes', 'hair strand strata', 'clear contour', 'not messy', 'strong silhouette'], '头发超现实优先保持发型结构。', 'Hair surrealism must keep hairstyle structure.', { ontologyLevel: 3 }),
      s('absence_weight_pose', '缺席重量姿态', 'Absence-Weight Pose', 'pose', '人物像背负一块看不见的空洞', 'character appears to carry an invisible hollow', ['背微弯', '手扶空处', '重心下沉', '周围留白', '沉默感'], ['slightly bent back', 'hand on empty space', 'lowered center', 'surrounding blank', 'silent feeling'], '虚空压迫优先成为姿态和留白。', 'Void pressure becomes pose and blank space first.', { ontologyLevel: 2 }),
      s('void_not_cosmic_vfx', '虚空非宇宙特效', 'Void Not Cosmic VFX', 'function', '虚空协议避免自动变成星云特效', 'void protocol avoids automatic nebula VFX', ['纯黑空白', '硬边缺口', '少量光', '无星云默认', '主体优先'], ['pure black blank', 'hard-edged gap', 'little light', 'no nebula default', 'subject first'], '虚空先是缺席，不是装饰宇宙。', 'Void is absence first, not decorative cosmos.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'astral_skin',
    name: '星体皮肤',
    nameEn: 'Astral Skin',
    focus: '星体表面、天象纹理和身体宇宙化统摄角色',
    focusEn: 'astral surface, celestial texture, and cosmic embodiment governing character',
    defaultKind: 'material',
    defaultAffects: ['skin', 'surface', 'symbol', 'color'],
    defaultControls: ['astral_skin', 'celestial_texture', 'cosmic_surface'],
    items: [
      s('constellation_freckles', '星座雀斑', 'Constellation Freckles', 'material', '雀斑按星座般稀疏连接', 'freckles connect sparsely like constellations', ['小星点', '细线连接', '脸颊肩部', '肤色保留', '不满版'], ['tiny star points', 'thin connecting lines', 'cheek and shoulder', 'skin tone kept', 'not full coverage'], '星体感优先从小型皮肤标记开始。', 'Begin astral feeling with small skin marks.', { ontologyLevel: 3 }),
      s('moon_phase_marks', '月相标记', 'Moon-Phase Marks', 'symbol', '月相序列成为身体或服饰标记', 'moon phase sequence becomes body or garment mark', ['月相序列', '手臂侧边', '银灰色', '重复节律', '仪式感'], ['moon phase sequence', 'side of arm', 'silver gray', 'repeated rhythm', 'ritual feel'], '周期性主题优先月相化。', 'Translate cyclical themes into moon phases.', { ontologyLevel: 2 }),
      s('nebula_under_skin', '皮下星云', 'Nebula Under Skin', 'material', '星云像在皮下深层而非外贴图', 'nebula appears deep under skin rather than surface sticker', ['皮下云雾', '蓝紫暗光', '边缘柔', '局部区域', '人形清楚'], ['subskin cloud', 'blue-purple dark glow', 'soft edge', 'local area', 'clear humanoid'], '宇宙纹理必须局部且有深度。', 'Cosmic texture must be local and deep.', { ontologyLevel: 4, risk: 'high' }),
      s('eclipse_face_ring', '日蚀面环', 'Eclipse Face Ring', 'face', '脸部以日蚀环形成神秘识别点', 'face uses eclipse ring as mysterious identity point', ['眼周暗环', '金色细边', '一侧脸', '低亮度', '凝视'], ['dark eye ring', 'thin gold edge', 'one face side', 'low brightness', 'gaze'], '强神秘感优先落成日蚀式脸部标记。', 'Ground strong mystery as eclipse-like facial mark.', { ontologyLevel: 3 }),
      s('meteor_scar_line', '流星疤线', 'Meteor Scar Line', 'symbol', '疤痕像流星轨迹但不血腥', 'scar reads as meteor trail without gore', ['细亮疤', '斜向轨迹', '尾端微散', '皮肤平整', '冷光'], ['thin bright scar', 'diagonal trail', 'slightly scattered tail', 'smooth skin', 'cool light'], '损伤元素优先转成星轨疤线。', 'Translate injury into meteor-trail scar.', { ontologyLevel: 3 }),
      s('planetary_orbit_jewelry', '行星轨道饰件', 'Planetary Orbit Jewelry', 'prop', '饰件像小型行星轨道系统', 'accessory reads as miniature planetary orbit system', ['环形饰件', '小球节点', '耳颈位置', '精密比例', '不浮夸'], ['ring accessory', 'small bead nodes', 'ear-neck position', 'precise scale', 'not flamboyant'], '天体结构优先变成可穿戴轨道饰件。', 'Translate celestial structure into wearable orbit accessory.', { ontologyLevel: 2 }),
      s('star_dust_on_cloth', '星尘衣面', 'Stardust Cloth Surface', 'material', '衣物表面有稀疏星尘而非满屏闪粉', 'cloth carries sparse stardust rather than all-over glitter', ['细微银点', '衣褶聚集', '黑蓝底', '低反光', '高级克制'], ['tiny silver points', 'gathered in folds', 'black-blue base', 'low reflection', 'restrained elegance'], '闪光冲突优先降级为稀疏星尘。', 'Downgrade sparkle conflict into sparse stardust.', { ontologyLevel: 1 }),
      s('astral_eye_reflection', '星体眼反光', 'Astral Eye Reflection', 'face', '眼睛反光像远处星体而不改变眼球结构', 'eye reflection resembles distant stars without altering eyeball structure', ['小星点高光', '黑色瞳面', '眼型保留', '无怪眼', '凝视深'], ['tiny star highlights', 'black pupil plane', 'eye shape kept', 'no monster eye', 'deep gaze'], '人类模式下星体感优先只进入眼部反光。', 'In human mode, place astral feeling in eye reflection first.', { ontologyLevel: 2 }),
      s('zodiac_body_grid', '黄道身体网格', 'Zodiac Body Grid', 'symbol', '身体表面有克制的黄道坐标线', 'body surface carries restrained zodiac coordinate lines', ['细坐标线', '肩颈胸口', '圆弧刻度', '淡金色', '地图感'], ['fine coordinate lines', 'shoulder-neck-chest', 'arc scale', 'pale gold', 'map feeling'], '命运或占星元素优先转成身体坐标。', 'Translate fate or astrology into body coordinates.', { ontologyLevel: 3 }),
      s('astral_not_space_background', '星体非太空背景', 'Astral Not Space Background', 'function', '星体协议作用于身体表面，不默认生成宇宙背景', 'astral protocol acts on body surface, not default space background', ['身体表面', '局部天象', '背景干净', '无星舰默认', '身份优先'], ['body surface', 'local celestial sign', 'clean background', 'no spaceship default', 'identity first'], '所有宇宙感先落在皮肤、饰件和纹样。', 'All cosmic feeling must land on skin, accessory, or pattern first.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'symbolic_body',
    name: '符号化身体',
    nameEn: 'Symbolic Body',
    focus: '文字、图形、标记和抽象符号身体化统摄角色',
    focusEn: 'text, graphics, marks, and abstract signs embodied in the character',
    defaultKind: 'symbol',
    defaultAffects: ['body', 'surface', 'costume', 'symbol'],
    defaultControls: ['symbolic_body', 'embodied_sign', 'graphic_rule'],
    items: [
      s('typographic_skin_mark', '字体皮肤标记', 'Typographic Skin Mark', 'symbol', '文字成为皮肤标记而非海报文字', 'typography becomes skin mark rather than poster text', ['小字纹身', '沿骨骼排布', '低对比', '不可读长句', '身体贴合'], ['small text tattoo', 'along bone', 'low contrast', 'unreadable long phrase', 'body-fitted'], '文字信息优先身体化，不飘在画面外。', 'Embody text information instead of floating it outside frame.', { ontologyLevel: 2 }),
      s('diagram_joint_marks', '图解关节标记', 'Diagram Joint Marks', 'symbol', '图解符号标出身体运动节点', 'diagram signs mark body motion nodes', ['圆点线段', '关节旁', '工程图感', '少量标注', '动作清楚'], ['dots and lines', 'near joints', 'diagram feel', 'few labels', 'clear motion'], '结构说明优先变成关节图解。', 'Turn structural explanation into joint diagrams.', { ontologyLevel: 1 }),
      s('sacred_geometry_overlay', '圣几何覆层', 'Sacred Geometry Overlay', 'symbol', '几何图形作为身体秩序覆层', 'geometry acts as bodily order overlay', ['圆三角', '胸口中心', '淡金线', '对称构图', '无满屏法阵'], ['circle-triangle', 'center chest', 'pale gold line', 'symmetry', 'no full-screen magic circle'], '仪式和超现实冲突优先几何化。', 'Geometrize ritual and surreal conflict first.', { ontologyLevel: 3 }),
      s('barcode_identity_skin', '条码身份皮肤', 'Barcode Identity Skin', 'symbol', '条码像身份规训标记附着身体', 'barcode attaches as identity-discipline mark', ['条码小块', '后颈手腕', '编号', '制度感', '无品牌'], ['small barcode', 'back neck or wrist', 'numbering', 'institutional feel', 'no brand'], '制度身份优先以可控标记出现。', 'Express institutional identity as controlled marks.', { ontologyLevel: 1 }),
      s('map_line_body', '地图线身体', 'Map-Line Body', 'symbol', '路线和等高线沿身体走向展开', 'routes and contour lines follow body direction', ['等高线', '路径线', '肩背延展', '地图感', '淡色'], ['contour lines', 'route lines', 'across shoulder-back', 'map feeling', 'pale color'], '地域或旅程元素优先地图线化。', 'Translate place or journey into map lines.', { ontologyLevel: 2 }),
      s('warning_sign_body', '警示标识身体', 'Warning-Sign Body', 'symbol', '警告图形成为身体危险说明', 'warning graphics become bodily danger explanation', ['小警示符', '黄色黑边', '接口附近', '功能明确', '不变广告'], ['small warning sign', 'yellow-black edge', 'near interface', 'clear function', 'not advertisement'], '危险性必须有具体位置和功能。', 'Danger must have concrete placement and function.', { ontologyLevel: 1 }),
      s('redacted_identity_bars', '涂黑身份条', 'Redacted Identity Bars', 'symbol', '涂黑条遮蔽部分身份信息', 'redaction bars conceal parts of identity information', ['黑色遮条', '姓名牌', '眼下非遮眼', '档案感', '缺席'], ['black redaction bar', 'nameplate', 'below eye not over eye', 'archive feel', 'absence'], '匿名和禁忌优先用涂黑条处理。', 'Handle anonymity and taboo through redaction bars.', { ontologyLevel: 1 }),
      s('emblem_replaces_organ', '符号替代器官', 'Emblem Replaces Organ', 'ontology', '局部器官位置被抽象徽记替代', 'one organ position is replaced by an abstract emblem', ['胸口徽记', '眼位符号', '边缘平整', '非血腥', '意义强'], ['chest emblem', 'eye-position sign', 'smooth edge', 'non-gory', 'strong meaning'], '器官超现实必须符号化且局部。', 'Organ surrealism must be symbolic and local.', { ontologyLevel: 4, risk: 'high' }),
      s('gesture_as_symbol', '手势即符号', 'Gesture as Symbol', 'pose', '动作本身构成可读符号', 'gesture itself forms readable sign', ['手指构形', '身体线条', '符号轮廓', '静态清楚', '无文字依赖'], ['finger formation', 'body line', 'symbol silhouette', 'static clarity', 'no text dependency'], '抽象概念优先转成手势结构。', 'Translate abstract concept into gesture structure.', { ontologyLevel: 1 }),
      s('symbol_not_logo', '符号非Logo', 'Symbol Not Logo', 'function', '符号化身体避免生成品牌或IP标志', 'symbolic body avoids brand or IP logos', ['原创符号', '低相似度', '无商标', '身体贴合', '意义服务身份'], ['original sign', 'low resemblance', 'no trademark', 'body-fitted', 'meaning serves identity'], '所有符号必须原创并服从角色身份。', 'All signs must be original and subordinate to character identity.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'nonphysical_presence',
    name: '非物理存在',
    nameEn: 'Nonphysical Presence',
    focus: '声音、气味、记忆、数据幽影等不可触存在统摄角色',
    focusEn: 'sound, scent, memory, data specter, and intangible presence governing character',
    defaultKind: 'ontology',
    defaultAffects: ['pose', 'symbol', 'surface', 'prop'],
    defaultControls: ['nonphysical_presence', 'intangible_trace', 'presence_evidence'],
    items: [
      s('voice_ripple_body', '声音涟漪身体', 'Voice-Ripple Body', 'symbol', '声音以细微涟漪围绕身体显形', 'voice appears as subtle ripples around body', ['声波线', '嘴边胸口', '细环', '无大特效', '沉默对照'], ['sound-wave lines', 'near mouth and chest', 'thin rings', 'no big VFX', 'silent contrast'], '声音能力优先视觉化为小涟漪。', 'Visualize voice power as small ripples first.', { ontologyLevel: 3 }),
      s('scent_trail_presence', '气味拖迹', 'Scent-Trail Presence', 'material', '气味以半透明拖迹说明不可见存在', 'scent uses translucent trail to show invisible presence', ['淡色雾线', '从衣袖流出', '方向清楚', '不遮脸', '轻盈'], ['pale mist line', 'from sleeve', 'clear direction', 'not covering face', 'light'], '气味和记忆冲突优先转成拖迹。', 'Turn scent and memory conflict into trails.', { ontologyLevel: 2 }),
      s('memory_projection_patch', '记忆投影贴片', 'Memory Projection Patch', 'symbol', '记忆像小投影附着而非完整场景', 'memory attaches as small projection, not full scene', ['小投影片', '胸前或手边', '模糊图像', '边缘淡', '主体不变'], ['small projection patch', 'near chest or hand', 'blurred image', 'faded edge', 'subject unchanged'], '背景叙事优先缩成贴身记忆投影。', 'Shrink background narrative into close memory projection.', { ontologyLevel: 3 }),
      s('data_ghost_without_ui', '无界面数据幽影', 'Data Ghost Without UI', 'symbol', '数据幽影不生成复杂屏幕界面', 'data ghost avoids complex screen interface', ['点阵残影', '少量数字碎片', '无UI框', '身体边缘', '低透明'], ['dot-matrix afterimage', 'few number fragments', 'no UI frame', 'body edge', 'low opacity'], '数据感优先成为身体残影，不做屏幕。', 'Make data feeling a body afterimage, not a screen.', { ontologyLevel: 3 }),
      s('absence_companion_shadow', '缺席同伴影', 'Absent Companion Shadow', 'prop', '不存在的同伴只以影或空位出现', 'absent companion appears only as shadow or empty place', ['旁侧空位', '第二影子', '手势留空', '无第二人物', '情感强'], ['empty side space', 'second shadow', 'gesture toward blank', 'no second figure', 'strong feeling'], '关系信息优先用空位表达。', 'Express relationship information through empty space.', { ontologyLevel: 2 }),
      s('temperature_aura', '温度气场', 'Temperature Aura', 'material', '不可见温度改变通过边缘空气显形', 'invisible temperature shift appears through edge air', ['热浪或冷雾', '边缘扭曲', '少量', '环境简洁', '身体清楚'], ['heat shimmer or cold mist', 'edge distortion', 'small amount', 'simple environment', 'clear body'], '元素能力优先降级为温度边缘。', 'Downgrade elemental power into temperature edge.', { ontologyLevel: 2 }),
      s('memory_weight_object', '记忆重量物', 'Memory-Weight Object', 'prop', '一个小物承载不可见记忆重量', 'one small object carries intangible memory weight', ['旧钥匙', '小布包', '照片背面', '握紧动作', '沉重感'], ['old key', 'small cloth bundle', 'photo back', 'tight grip', 'heaviness'], '抽象过去优先落到单一道具。', 'Ground abstract past in one prop.', { ontologyLevel: 1 }),
      s('invisible_wound_response', '无形伤回应', 'Invisible-Wound Response', 'pose', '身体回应看不见的伤口', 'body responds to an unseen wound', ['手按空处', '眉眼收紧', '衣物无破', '姿态防御', '无血腥'], ['hand on empty place', 'tightened eyes', 'clothing unbroken', 'defensive pose', 'no gore'], '痛苦不必实体化，优先姿态化。', 'Pain need not become physical; pose it first.', { ontologyLevel: 2 }),
      s('name_without_body', '有名无身', 'Name Without Body', 'symbol', '名字或编号存在但身体部分缺席', 'name or number exists while part of body is absent', ['名牌清楚', '身体局部淡出', '档案感', '空白周围', '身份悖论'], ['clear nameplate', 'local body fade', 'archive feel', 'blank around it', 'identity paradox'], '身份和缺席冲突优先用名牌固定。', 'Anchor identity-absence conflict with a nameplate.', { ontologyLevel: 3 }),
      s('presence_needs_evidence', '存在必须有证据', 'Presence Needs Evidence', 'function', '非物理存在必须留下可见证据', 'nonphysical presence must leave visible evidence', ['痕迹', '反应', '道具', '姿态', '小范围'], ['trace', 'response', 'prop', 'pose', 'small range'], '不可见力量必须通过痕迹、反应或道具落地。', 'Invisible force must land through trace, reaction, or prop.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'time_anomaly',
    name: '时间异常',
    nameEn: 'Time Anomaly',
    focus: '时间断层、衰老错位和瞬间重叠统摄角色',
    focusEn: 'time strata, age mismatch, and overlapping moments governing character',
    defaultKind: 'ontology',
    defaultAffects: ['body', 'costume', 'surface', 'prop'],
    defaultControls: ['time_anomaly', 'temporal_strata', 'age_mismatch'],
    items: [
      s('age_split_detail', '年龄切片细节', 'Age-Split Detail', 'face', '局部细节显示不同年龄层', 'local detail shows different age layers', ['一侧细纹', '一侧年轻', '眼神统一', '无怪脸', '时间痕'], ['one side fine lines', 'one side young', 'unified gaze', 'no monster face', 'time trace'], '年龄异常必须局部且保留身份。', 'Age anomaly must be local and preserve identity.', { ontologyLevel: 3 }),
      s('old_future_garment_layer', '旧未来衣层', 'Old-Future Garment Layer', 'costume', '服装同时有旧时代和未来修补层', 'clothing carries old-era and future repair layers together', ['旧布底', '未来接缝', '补片', '年代冲突', '层级清楚'], ['old cloth base', 'future seam', 'patch', 'period conflict', 'clear layers'], '时代冲突优先分层，不混成乱搭。', 'Layer period conflict instead of messy mixing.', { ontologyLevel: 2 }),
      s('paused_clock_prop', '停表道具', 'Paused Clock Prop', 'prop', '停住的计时物解释时间异常', 'paused timepiece explains temporal anomaly', ['停表', '破钟面', '指针固定', '手持或胸针', '叙事锚'], ['stopped watch', 'broken dial', 'fixed hands', 'handheld or brooch', 'narrative anchor'], '时间概念优先落到计时道具。', 'Ground time concept in a timekeeping prop.', { ontologyLevel: 1 }),
      s('motion_frame_overlap', '动作帧重叠', 'Motion-Frame Overlap', 'pose', '同一动作的几帧轻微重叠', 'several frames of the same action slightly overlap', ['手部三帧', '透明层', '方向清楚', '主体实', '节奏感'], ['three hand frames', 'transparent layers', 'clear direction', 'solid subject', 'rhythm'], '动态时间感优先局部多帧化。', 'Localize dynamic time feeling into multiple frames.', { ontologyLevel: 3 }),
      s('decay_and_newness', '新旧并置', 'Decay and Newness', 'material', '同一物件同时崭新和老化', 'one object appears both new and aged', ['半边崭新', '半边磨损', '边界清楚', '材料统一', '时间裂缝'], ['half new', 'half worn', 'clear boundary', 'same material', 'time crack'], '时代错位优先在单物件上并置。', 'Juxtapose temporal mismatch on one object first.', { ontologyLevel: 2 }),
      s('future_memory_label', '未来记忆标签', 'Future-Memory Label', 'symbol', '标签记录尚未发生的事件', 'label records an event not yet happened', ['小标签', '未来日期', '手写感', '衣物内侧', '预兆'], ['small label', 'future date', 'handwritten feel', 'inside garment', 'omen'], '预言信息优先变成小标签。', 'Translate prophecy into small labels.', { ontologyLevel: 2 }),
      s('anachronism_controlled_token', '受控错时代物', 'Controlled Anachronism Token', 'prop', '只允许一个错时代物作为时间锚', 'only one anachronistic object serves as time anchor', ['单一道具', '时代突兀', '握持明确', '其余统一', '解释点'], ['single prop', 'period-displaced', 'clear holding', 'rest unified', 'explanation point'], '错时代冲突只能有一个主锚点。', 'Anachronism conflict may have only one main anchor.', { ontologyLevel: 1 }),
      s('dust_of_years', '岁月尘层', 'Dust of Years', 'material', '时间通过细尘和褪色显形', 'time appears through fine dust and fading', ['尘层', '褪色边', '旧纸感', '肩头袖口', '无腐烂'], ['dust layer', 'faded edge', 'old paper feel', 'shoulder and cuff', 'no rot'], '衰败优先处理成时间尘，而非废土脏污。', 'Treat decay as time dust, not wasteland grime.', { ontologyLevel: 1 }),
      s('looped_gesture', '循环手势', 'Looped Gesture', 'pose', '手势像被时间循环卡住', 'gesture seems caught in a time loop', ['重复抬手', '微残影', '眼神疲惫', '动作未完成', '克制'], ['repeated raised hand', 'subtle afterimage', 'tired gaze', 'unfinished motion', 'restrained'], '循环设定优先表现为未完成动作。', 'Show loop setting as unfinished action first.', { ontologyLevel: 2 }),
      s('time_rule_not_random_period_mix', '时间非随机混搭', 'Time Not Random Period Mix', 'function', '时间异常必须有主时代和一个异常点', 'time anomaly must have a main era and one anomaly point', ['主时代清楚', '一个错位点', '材料解释', '无满身混搭', '身份稳定'], ['clear main era', 'one displacement point', 'material explanation', 'no all-over mashup', 'stable identity'], '所有时间冲突必须围绕主时代裁决。', 'All time conflict must be judged around the main era.', { ontologyLevel: 1 })
    ]
  },
  {
    slug: 'surreal_rule',
    name: '超现实裁决',
    nameEn: 'Surreal Judgment',
    focus: '超现实本体的边界、降级和融合裁决统摄角色',
    focusEn: 'boundaries, downgrade, and fusion judgment of surreal ontology governing character',
    defaultKind: 'function',
    defaultAffects: ['ontology', 'body', 'symbol', 'composition'],
    defaultControls: ['surreal_rule', 'fusion_judgment', 'ontology_lock'],
    items: [
      s('one_surreal_channel', '单一超现实通道', 'One Surreal Channel', 'function', '一次生成只允许一个主超现实通道', 'one generation allows only one main surreal channel', ['单主通道', '梦或镜或虚空', '其余降噪', '主体清楚', '无大杂烩'], ['single main channel', 'dream or mirror or void', 'others reduced', 'clear subject', 'no collage mess'], '随机超现实元素必须归并到一个主通道。', 'Random surreal elements must merge into one main channel.', { ontologyLevel: 1 }),
      s('human_readability_lock', '人形可读锁', 'Human Readability Lock', 'function', '超现实不得破坏人物第一识别', 'surrealism must not break the first recognition of character', ['头脸清楚', '身体轴线', '四肢可读', '身份保留', '异象从属'], ['clear head and face', 'body axis', 'readable limbs', 'identity kept', 'anomaly subordinate'], '任何超现实都先服从主体可读性。', 'All surrealism must obey subject readability first.', { ontologyLevel: 1 }),
      s('ontology_level_gate', '本体等级门', 'Ontology-Level Gate', 'function', '超现实强度必须服从ontologyLevel筛选', 'surreal intensity must obey ontologyLevel filtering', ['L1装饰', 'L3暧昧', 'L4真实异常', 'L5象征本体', '等级清楚'], ['L1 decoration', 'L3 ambiguity', 'L4 real anomaly', 'L5 symbolic ontology', 'clear levels'], '等级不足时把异象降级成妆容、材质、道具或光影。', 'When level is insufficient, downgrade anomaly into makeup, material, prop, or lighting.', { ontologyLevel: 1 }),
      s('era_translation_rule', '时代转译规则', 'Era Translation Rule', 'function', '超现实必须用当前时空可理解的材料落地', 'surrealism must land through materials understandable in current time-space', ['时代材料', '工艺解释', '宗教或科技语境', '无无源高科技', '无乱穿越'], ['period material', 'craft explanation', 'religious or technical context', 'no sourceless high tech', 'no random time travel'], '古代可转成圣物、纹样、梦兆；未来可转成接口、投影、数据残影。', 'In ancient settings translate into relic, pattern, omen; in future into interface, projection, data echo.', { ontologyLevel: 1 }),
      s('surreal_as_design_not_scene', '超现实是设计不是场景', 'Surreal as Design Not Scene', 'function', '超现实必须落在角色设计而非复杂背景', 'surrealism must land on character design, not complex background', ['身体标记', '服装结构', '道具锚点', '姿态', '背景简洁'], ['body mark', 'costume structure', 'prop anchor', 'pose', 'simple background'], '所有异象优先落到身体、服装、道具和动作。', 'All anomaly lands first on body, costume, prop, and action.', { ontologyLevel: 1 }),
      s('no_effect_spam', '禁止特效堆叠', 'No Effect Spam', 'function', '禁止光效、雾效、粒子同时堆叠', 'forbid stacking glow, fog, and particles together', ['一种效果', '低密度', '边界清楚', '主体优先', '版面干净'], ['one effect type', 'low density', 'clear boundary', 'subject first', 'clean board'], '特效只能辅助协议，不可成为主体。', 'Effects only support the protocol and cannot become the subject.', { ontologyLevel: 1 }),
      s('symbolic_not_random_weird', '象征非随机怪异', 'Symbolic Not Random Weird', 'function', '怪异必须能被读成一种象征关系', 'weirdness must read as a symbolic relation', ['原因明确', '位置明确', '重复节律', '身份相关', '无随机器官'], ['clear reason', 'clear placement', 'repeated rhythm', 'identity-related', 'no random organs'], '无法解释的怪异删除或降级成表面纹理。', 'Delete unexplained weirdness or downgrade it into surface texture.', { ontologyLevel: 1 }),
      s('face_priority_rule', '脸部优先规则', 'Face Priority Rule', 'function', '超现实面部必须保留眼神和可识别表情', 'surreal face must preserve gaze and readable expression', ['眼神保留', '表情保留', '局部异象', '无全脸遮蔽', '人格优先'], ['gaze kept', 'expression kept', 'local anomaly', 'no full-face cover', 'personhood first'], '脸部异象只能局部化。', 'Facial anomaly must be localized.', { ontologyLevel: 1 }),
      s('conflict_absorption_order', '冲突吸收顺序', 'Conflict Absorption Order', 'function', '冲突元素按身体、服装、道具、符号顺序吸收', 'conflicting elements absorb through body, costume, prop, then symbol', ['先身体', '再服装', '再道具', '最后符号', '层级稳定'], ['body first', 'costume second', 'prop third', 'symbol last', 'stable hierarchy'], '多协议冲突时按可见主体层级裁决。', 'Judge multi-protocol conflict by visible subject hierarchy.', { ontologyLevel: 1 }),
      s('surreal_identity_board_rule', '身份版超现实规则', 'Identity-Board Surreal Rule', 'function', '身份版里的超现实必须清楚分区展示', 'surrealism in identity board must be displayed in clear sections', ['主视图清楚', '细节格解释', '小型符号图', '色条克制', '无海报化'], ['clear main view', 'detail panel explains', 'small symbol diagram', 'restrained color strip', 'no posterization'], '身份版优先解释设计证据，而非制造电影场面。', 'Identity board prioritizes design evidence, not cinematic spectacle.', { ontologyLevel: 1 })
    ]
  }
];

export const SURREAL_STYLE_PROTOCOL_ITEMS = makeStyleProtocolItems(ROUTE, ROUTE_NAME, ROUTE_NAME_EN, ERAS, FORBIDS, families);
