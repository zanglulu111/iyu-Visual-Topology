export type TargetBlueprintLanguage = 'CN' | 'EN';

export type TargetBlueprintModuleKind =
  | 'generated'
  | 'direct_protocol'
  | 'preset_protocol'
  | 'mixed';

export type VideoStoryboardVariableDef = {
  id: string;
  name: string;
  nameEn: string;
  field: string;
  kind: TargetBlueprintModuleKind;
  defaultEnabled: boolean;
  description: string;
  descriptionEn: string;
};

export type VideoStoryboardDirectParamDef = {
  id: string;
  name: string;
  nameEn: string;
  kind: 'direct_protocol';
  defaultValue: string | boolean;
  options: Array<string | boolean>;
  description: string;
  descriptionEn: string;
};

export type VideoStoryboardPresetProtocolDef = {
  id: string;
  name: string;
  nameEn: string;
  kind: 'preset_protocol';
  defaultEnabled: boolean;
  description: string;
  descriptionEn: string;
  textCn: string;
  textEn: string;
};

export type VideoStoryboardTargetBlueprint = {
  id: 'VIDEO_STORYBOARD';
  targetCode: 'T13';
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  processingObject: string;
  processingObjectEn: string;
  variableModules: VideoStoryboardVariableDef[];
  directParams: VideoStoryboardDirectParamDef[];
  presetProtocols: VideoStoryboardPresetProtocolDef[];
  assemblyOrder: string[];
};

export type VideoStoryboardComposerModuleDef = {
  id: keyof VideoStoryboardComposerValues;
  name: string;
  nameEn: string;
  role: 'target' | 'format' | 'generated' | 'protocol' | 'sequence' | 'negative';
  description: string;
  descriptionEn: string;
};

export type VideoStoryboardComposerValues = {
  targetStatement: string;
  formatProtocol: string;
  subjectAsset: string;
  motionEvent: string;
  actionRules: string;
  panelProgression: string;
  effectSystem: string;
  effectProgression: string;
  cameraSystem: string;
  environmentControl: string;
  annotationSystem: string;
  negativeRules: string;
};

export type VideoStoryboardReferenceSample = {
  id: 'kungFuStoryboard' | 'danceStoryboard';
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  values: Record<TargetBlueprintLanguage, VideoStoryboardComposerValues>;
};

export const VIDEO_STORYBOARD_COMPOSER_MODULES: VideoStoryboardComposerModuleDef[] = [
  {
    id: 'targetStatement',
    name: '目标声明',
    nameEn: 'Target Statement',
    role: 'target',
    description: '创建什么类型的分镜图或视频素材。',
    descriptionEn: 'What kind of storyboard sheet or footage asset is being created.'
  },
  {
    id: 'formatProtocol',
    name: '格式参数',
    nameEn: 'Format Protocol',
    role: 'format',
    description: '画幅、面板数量、绘制媒介、黑白 / 彩色和分镜草图质感。',
    descriptionEn: 'Aspect ratio, panel count, drawing medium, monochrome / color, and storyboard sketch texture.'
  },
  {
    id: 'subjectAsset',
    name: '素材对象',
    nameEn: 'Subject Asset',
    role: 'generated',
    description: '人物、怪物、产品、场景、参考图或核心素材对象。',
    descriptionEn: 'Character, creature, product, scene, reference image, or core asset object.'
  },
  {
    id: 'motionEvent',
    name: '运动事件',
    nameEn: 'Motion Event',
    role: 'generated',
    description: '这段画面正在发生什么，主动作链的整体方向。',
    descriptionEn: 'What is happening in the image sequence; the overall direction of the primary action chain.'
  },
  {
    id: 'actionRules',
    name: '动作规则',
    nameEn: 'Action Rules',
    role: 'protocol',
    description: '每格是否必须有运动、是否禁止静态、从什么状态开始。',
    descriptionEn: 'Whether every panel must contain motion, whether static poses are forbidden, and how the sequence begins.'
  },
  {
    id: 'panelProgression',
    name: '逐格分镜',
    nameEn: 'Panel Progression',
    role: 'sequence',
    description: '逐格列出每个 panel / shot 的动作、镜头和推进。',
    descriptionEn: 'Panel-by-panel action, camera, and progression.'
  },
  {
    id: 'effectSystem',
    name: '效果系统',
    nameEn: 'Effect System',
    role: 'generated',
    description: '元素、粒子、声音、情绪或其他 VFX / 表演强调。',
    descriptionEn: 'Elemental, particle, vocal, emotional, or other VFX / performance accents.'
  },
  {
    id: 'effectProgression',
    name: '效果推进',
    nameEn: 'Effect Progression',
    role: 'protocol',
    description: '效果如何从早期、中段、后段到最终格逐步升级。',
    descriptionEn: 'How effects escalate from early panels through the final panel.'
  },
  {
    id: 'cameraSystem',
    name: '镜头系统',
    nameEn: 'Camera System',
    role: 'generated',
    description: '景别、镜头运动、视角、压缩、负空间和观看关系。',
    descriptionEn: 'Shot size, camera movement, angle, compression, negative space, and viewing relation.'
  },
  {
    id: 'environmentControl',
    name: '环境控制',
    nameEn: 'Environment Control',
    role: 'generated',
    description: '场景材料、空间密度、背景元素和环境克制规则。',
    descriptionEn: 'Scene materials, spatial density, background elements, and environmental restraint rules.'
  },
  {
    id: 'annotationSystem',
    name: '标注系统',
    nameEn: 'Annotation System',
    role: 'protocol',
    description: '箭头、颜色、文字标签、镜头备注和 panel label 规则。',
    descriptionEn: 'Arrows, color marks, text labels, lens notes, and panel label rules.'
  },
  {
    id: 'negativeRules',
    name: '禁止项',
    nameEn: 'Negative Rules',
    role: 'negative',
    description: '禁止时间码、对白、额外角色、logo、水印等污染项。',
    descriptionEn: 'Forbids timestamps, dialogue, extra characters, logos, watermarks, and other contaminants.'
  }
];

export const VIDEO_STORYBOARD_EMPTY_COMPOSER_VALUES: VideoStoryboardComposerValues = {
  targetStatement: '',
  formatProtocol: '',
  subjectAsset: '',
  motionEvent: '',
  actionRules: '',
  panelProgression: '',
  effectSystem: '',
  effectProgression: '',
  cameraSystem: '',
  environmentControl: '',
  annotationSystem: '',
  negativeRules: ''
};

export const VIDEO_STORYBOARD_REFERENCE_SAMPLES: VideoStoryboardReferenceSample[] = [
  {
    id: 'kungFuStoryboard',
    name: '参考 1：功夫动作分镜',
    nameEn: 'Reference 1: Kung Fu Action Storyboard',
    description: '已验证的强动作、元素特效、12 格精确推进样本。',
    descriptionEn: 'Verified strong-action, elemental VFX, 12-panel progression sample.',
    values: {
      CN: {
        targetStatement: '创建一张原始功夫表演分镜，核心是极端身体动作。使用参考图作为角色依据。',
        formatProtocol: '16:9 分镜图，12 个电影感 panel。实际分镜绘画必须只使用黑白：粗略铅笔线、最低限度细节、快速手势线能量、简单人体结构和强剪影可读性。保持画面轻量、动态、未完成，像早期武打动作预演分镜。',
        subjectAsset: '一名单独的女性表演者，在一座巨大的古代寺庙中执行侵略性的藏式功夫大师风格套路。',
        motionEvent: '动作编排夸张、爆发，并持续升级：飞身斜踢、僧侣式低架、快速掌击、布料般旋转的身体转向、动物形手势、深弓步、空中扭转、贴地扫腿、突然下坠、爪状格挡、后仰跳跃、滑动恢复和暴烈的雕塑式冲击姿态。',
        actionRules: '直接从动作中开始。不要以平静站姿、准备镜头或缓慢引入开始。\n\n每个 panel 都必须包含可见运动和强身体动量。避免静态站姿。表演者应该像一个仪式战士，以纪律、愤怒、精神压力和全身控制力运动。',
        panelProgression: '动作推进：\n1. 以已经在运动中的空中飞身斜踢开场\n2. 手持近景，掌扫切开空气\n3. 环绕广角，全身旋转\n4. 低角度冲击掌击，带冲击波\n5. 长焦侧面剪影旋身踢\n6. 俯视空中旋转，身体、头发和布料向外张开\n7. 重踏地面，震裂寺庙石板\n8. 贴地滑动扫腿掠过地面\n9. 侵略性近景，肘击、掌击和反手拳连续爆发\n10. 极低僧侣式兽性低架，能量上升\n11. 身体周围形成旋转元素漩涡\n12. 最终空中动作姿态，悬停在寺庙地面上方，身体扭成强力功夫打击姿态，所有元素在冲击前汇聚',
        effectSystem: '加入选择性的元素能量效果，作为 VFX 式分镜强调。这些效果应该具有精神性、仪式性和电影感，而不是超级英雄感：\n旋转与飞踢周围的气爆，\n踏地时扬起的尘土和石块碎片，\n滑动时地面的水波般涟漪，\n爆发性打击周围的火焰般轨迹，\n高强度运动周围的热扭曲，\n高潮附近的元素漩涡。',
        effectProgression: '元素推进：\n早期 panel：微妙的风、尘土和压力线\n中段 panel：更强的石块碎片、地面涟漪和空气冲击波\n后段 panel：受控的火焰轨迹和能量螺旋\n最终 panel：表演者仍在空中时出现最强的复合元素涌动',
        cameraSystem: '使用电影作者式动作摄影：\n手持能量，\n甩镜感，\n环绕镜头运动，\n俯拍，\n侧面剪影，\n侵略性近景，\n长焦压缩，\n极低角度，\n大面积负空间，\n强视差。',
        environmentControl: '寺庙环境保持极简且有氛围：\n高耸石柱，\n磨损的寺庙地面，\n漂浮的焚香烟雾，\n悬挂布料，\n强烈光束，\n空气中淡淡尘埃，\n微妙湿地反射。\n不要让画面过度拥挤。',
        annotationSystem: '标注颜色系统：\n红色箭头 = 身体运动\n蓝色箭头 = 镜头运动\n绿色标记 = 取景 / 构图备注\n橙色标记 = 光线方向\n黄色标记 = 元素 VFX / 能量效果\n黑色文字 = 简短镜头备注和 panel 标签',
        negativeRules: '无时间码。无对白。无唱歌。无额外角色。无敌人。无 logo。无水印。'
      },
      EN: {
        targetStatement: 'Create a raw kung fu performance storyboard focused on extreme physical action. Use reference image for the character.',
        formatProtocol: '16:9 storyboard sheet, 12 cinematic panels. The actual storyboard drawings must be black and white only: rough pencil lines, minimal detail, fast gesture drawing energy, simple anatomy construction and strong silhouette readability. Keep the artwork lightweight, dynamic and unfinished like early fight choreography previs.',
        subjectAsset: 'A solitary female performer executes an aggressive Tibetan kung fu master-style routine inside a vast ancient temple.',
        motionEvent: 'The choreography is exaggerated, explosive and constantly escalating: flying diagonal kicks, monk-style low stances, rapid palm strikes, spinning cloth-like body turns, animal-form hand shapes, deep lunges, aerial twists, floor-level sweeps, sudden drops, claw-like blocks, back-arched jumps, sliding recoveries and violent sculptural impact poses.',
        actionRules: 'Start directly in action. Do not begin with a calm stance, preparation shot or slow introduction.\n\nEvery panel must contain visible motion and strong body momentum. Avoid static standing poses. The performer should feel like a ritual warrior moving with discipline, fury, spiritual pressure and total body control.',
        panelProgression: 'Action progression:\n1. begin mid-air with a flying diagonal kick already in motion\n2. handheld close-up palm sweep cutting through air\n3. orbiting wide shot of a full-body spin\n4. low-angle impact palm strike with shockwave\n5. long-lens side profile spinning kick\n6. top-down aerial turn with body, hair and fabric flaring outward\n7. hard floor stomp cracking the temple stone\n8. sliding low sweep across the floor\n9. aggressive close-up flurry of elbows, palms and backfist strikes\n10. extreme low monk-style beast stance with energy rising\n11. spinning elemental vortex around the body\n12. final airborne action pose, suspended above the temple floor, body twisted in a powerful kung fu strike, all elements converging around her before impact',
        effectSystem: 'Add selective elemental energy effects as VFX-style storyboard accents. The effects should feel spiritual, ritualistic and cinematic, not superhero-like:\nair bursts around spins and flying kicks,\ndust and stone fragments lifting from stomps,\nwater-like floor ripples during slides,\nfire-like trails around explosive strikes,\nheat distortion around high-intensity movement,\nelemental vortex near the climax.',
        effectProgression: 'Element progression:\nearly panels: subtle wind, dust and pressure lines\nmiddle panels: stronger stone fragments, floor ripples and air shockwaves\nlate panels: controlled fire trails and energy spirals\nfinal panel: the strongest combined elemental surge while the performer is still airborne',
        cameraSystem: 'Use cinematic arthouse action camerawork:\nhandheld energy,\nwhip-pan feeling,\norbiting camera moves,\noverhead shots,\nside silhouettes,\naggressive close-ups,\nlong-lens compression,\nextreme low angles,\nwide negative space,\nstrong parallax.',
        environmentControl: 'Keep the temple environment minimal and atmospheric:\ntowering stone columns,\nworn temple floor,\ndrifting incense smoke,\nhanging fabric,\nharsh light shafts,\nfaint dust in the air,\nsubtle wet floor reflections.\nDo not overcrowd the frames.',
        annotationSystem: 'Annotation color system:\nred arrows = body movement\nblue arrows = camera movement\ngreen marks = framing / composition notes\norange marks = lighting direction\nyellow marks = elemental VFX / energy effects\nblack text = short lens notes and panel labels',
        negativeRules: 'No timestamps. No dialogue. No singing. No extra characters. No enemies. No logos. No watermark.'
      }
    }
  },
  {
    id: 'danceStoryboard',
    name: '参考 2：当代舞唱演分镜',
    nameEn: 'Reference 2: Contemporary Dance Singing Storyboard',
    description: '已验证的情绪舞蹈、现场演唱、强身体动势样本。',
    descriptionEn: 'Verified emotional dance, live singing, strong body-momentum sample.',
    values: {
      CN: {
        targetStatement: '创建一张原始当代舞表演分镜，核心是强烈身体运动和现场演唱。使用参考图作为角色依据。',
        formatProtocol: '16:9 分镜图，12 个电影感 panel。实际分镜绘画必须只使用黑白：粗略铅笔线、最低限度细节、快速手势线能量、简单人体结构和强剪影可读性。保持画面轻量、动态、未完成，像早期舞蹈编排预演分镜。',
        subjectAsset: '一名单独的女性表演者在一座巨大、空旷的粗野主义大厅中持续歌唱，同时执行一套情绪强烈的当代舞动作。',
        motionEvent: '动作编排具有攻击性、流动性，并持续变化：快速转身、地面滑动、爬行转换、锐利身体隔离、颤抖的手、极端重心转移、甩发、弓步、跳跃、崩塌动作和扭曲的雕塑式姿态。',
        actionRules: '每个 panel 都必须包含可见运动和强身体动量。避免静态站姿。表演者应该像被困在仪式、疲惫和情绪释放之间。',
        panelProgression: '',
        effectSystem: '现场演唱必须贯穿整个表演，作为声音 / 情绪强调存在；但主要视觉力量仍然来自身体运动。',
        effectProgression: '',
        cameraSystem: '使用电影作者式摄影语言：手持能量、甩镜、环绕运动、俯拍、侧面剪影、侵略性近景、长焦压缩和极端负空间。',
        environmentControl: '环境保持极简：只保留空旷空间、烟雾、布料运动、强烈光束和湿地反射。',
        annotationSystem: '标注颜色系统：\n红色箭头 = 身体运动\n蓝色箭头 = 镜头运动\n绿色标记 = 取景 / 构图备注\n橙色标记 = 光线方向\n紫色标记 = 声音 / 情绪强调\n黑色文字 = 简短镜头备注和 panel 标签',
        negativeRules: '无时间码。以一个压倒性的最终运动姿态结束，角色位于刺眼的孤立聚光灯下。'
      },
      EN: {
        targetStatement: 'Create a raw contemporary dance performance storyboard focused on intense physical movement and live singing. Use reference image for the character.',
        formatProtocol: '16:9 storyboard sheet, 12 cinematic panels. The actual storyboard drawings must be black and white only: rough pencil lines, minimal detail, fast gesture drawing energy, simple anatomy construction and strong silhouette readability. Keep the artwork lightweight, dynamic and unfinished like early choreography previs.',
        subjectAsset: 'A solitary female performer sings continuously while executing an emotionally charged contemporary dance routine inside a massive empty brutalist hall.',
        motionEvent: 'The choreography is aggressive, fluid and constantly evolving: rapid turns, floor slides, crawling transitions, sharp body isolations, trembling hands, extreme balance shifts, hair whips, lunges, jumps, collapsing movements and distorted sculptural poses.',
        actionRules: 'Every panel must contain visible motion and strong body momentum. Avoid static standing poses. The performer should feel trapped between ritual, exhaustion and emotional release.',
        panelProgression: '',
        effectSystem: 'Live singing must remain present throughout the performance as vocal / emotional emphasis, while the main visual force still comes from physical movement.',
        effectProgression: '',
        cameraSystem: 'Use cinematic arthouse camerawork with handheld energy, whip pans, orbit movement, overhead shots, side silhouettes, aggressive close-ups, long lens compression and extreme negative space.',
        environmentControl: 'Keep the environment minimal: empty space, smoke, fabric motion, harsh light beams and wet floor reflections only.',
        annotationSystem: 'Annotation color system:\nred arrows = body movement\nblue arrows = camera movement\ngreen marks = framing / composition notes\norange marks = lighting direction\npurple marks = vocal / emotional emphasis\nblack text = short lens notes and panel labels',
        negativeRules: 'No timestamps. End with one overwhelming final movement pose beneath a harsh isolated spotlight.'
      }
    }
  }
];

export const VIDEO_STORYBOARD_VARIABLES: VideoStoryboardVariableDef[] = [
  {
    id: 'projectTitle',
    name: '项目标题',
    nameEn: 'Project Title',
    field: 'projectTitle',
    kind: 'generated',
    defaultEnabled: true,
    description: '分镜或视频素材的标题锁定，负责第一识别。',
    descriptionEn: 'Title lock for the storyboard or video asset; it carries the first read.'
  },
  {
    id: 'metaLine',
    name: '元信息行',
    nameEn: 'Meta Line',
    field: 'metaLine',
    kind: 'generated',
    defaultEnabled: true,
    description: '用几个短语说明类型、能量、审美和制作方向。',
    descriptionEn: 'A compact phrase line for genre, energy, aesthetic, and production direction.'
  },
  {
    id: 'priorityLine',
    name: '优先级行',
    nameEn: 'Priority Line',
    field: 'priorityLine',
    kind: 'generated',
    defaultEnabled: true,
    description: '明确这张故事版最必须读出的动作、对象或效果。',
    descriptionEn: 'States the action, object, or effect that must read most clearly.'
  },
  {
    id: 'microBrief',
    name: '微简介',
    nameEn: 'Micro Brief',
    field: 'microBrief',
    kind: 'generated',
    defaultEnabled: true,
    description: '一句话概括整个素材片段或分镜板。',
    descriptionEn: 'One-sentence summary of the full footage asset or storyboard sheet.'
  },
  {
    id: 'sequenceId',
    name: '序列编号',
    nameEn: 'Sequence ID',
    field: 'sequenceId',
    kind: 'direct_protocol',
    defaultEnabled: true,
    description: '项目内部的序列识别码，可自动生成或手写。',
    descriptionEn: 'Internal sequence identifier; can be auto-generated or manually written.'
  },
  {
    id: 'stylePacket',
    name: '风格包',
    nameEn: 'Style Packet',
    field: 'stylePacket',
    kind: 'generated',
    defaultEnabled: true,
    description: '最终视频的媒介、风格、色彩、材质、光线和质感总说明。',
    descriptionEn: 'The final video look: medium, style, color, material, lighting, and texture.'
  },
  {
    id: 'referencePriority',
    name: '参考优先级',
    nameEn: 'Reference Priority',
    field: 'referencePriority',
    kind: 'mixed',
    defaultEnabled: true,
    description: '说明参考图、视频或音频各自控制什么，不允许裸引用。',
    descriptionEn: 'Assigns each image, video, or audio reference one clear role; no bare references.'
  },
  {
    id: 'scenePremise',
    name: '场景前提',
    nameEn: 'Scene Premise',
    field: 'scenePremise',
    kind: 'generated',
    defaultEnabled: true,
    description: '这段素材发生的核心情境和冲突入口。',
    descriptionEn: 'The core situation and conflict entry of this footage asset.'
  },
  {
    id: 'sceneSummary',
    name: '场景摘要',
    nameEn: 'Scene Summary',
    field: 'sceneSummary',
    kind: 'generated',
    defaultEnabled: true,
    description: '用连续句概括从开始到结束发生了什么。',
    descriptionEn: 'A continuous summary of what happens from start to end.'
  },
  {
    id: 'location',
    name: '场景地点',
    nameEn: 'Location',
    field: 'location',
    kind: 'generated',
    defaultEnabled: true,
    description: '空间、时代、地理、环境材料和可见场域结构。',
    descriptionEn: 'Space, era, geography, environmental materials, and visible field structure.'
  },
  {
    id: 'assetRoles',
    name: '素材职责',
    nameEn: 'Asset Roles',
    field: 'assetRoles',
    kind: 'generated',
    defaultEnabled: true,
    description: '角色、怪物、产品、场景、道具或特效在视频中的职责。',
    descriptionEn: 'Roles of characters, creatures, products, scenes, props, or effects in the video.'
  },
  {
    id: 'startState',
    name: '起始状态',
    nameEn: 'Start State',
    field: 'startState',
    kind: 'generated',
    defaultEnabled: true,
    description: '视频或分镜开始时的对象位置、动作准备、空间状态和道具状态。',
    descriptionEn: 'Subject position, action preparation, space state, and prop state at the start.'
  },
  {
    id: 'endState',
    name: '结束状态',
    nameEn: 'End State',
    field: 'endState',
    kind: 'generated',
    defaultEnabled: true,
    description: '视频或分镜结束时必须抵达的画面、状态和情绪落点。',
    descriptionEn: 'The image, state, and emotional endpoint the video or storyboard must reach.'
  },
  {
    id: 'actionChain',
    name: '动作链',
    nameEn: 'Action Chain',
    field: 'actionChain',
    kind: 'generated',
    defaultEnabled: true,
    description: '主要动作从第一拍到最后一拍的连续因果链。',
    descriptionEn: 'The causal chain of primary motion from first beat to final beat.'
  },
  {
    id: 'propEffectState',
    name: '道具 / 特效状态',
    nameEn: 'Prop / Effect State',
    field: 'propEffectState',
    kind: 'generated',
    defaultEnabled: true,
    description: '道具、特效、材料、损伤、粒子或状态变化的连续规则。',
    descriptionEn: 'Continuity rules for props, effects, materials, damage, particles, or state changes.'
  },
  {
    id: 'mustRead',
    name: '必须读出',
    nameEn: 'Must Read',
    field: 'mustRead',
    kind: 'generated',
    defaultEnabled: true,
    description: '最终画面最不能丢失的观众理解点。',
    descriptionEn: 'The viewer comprehension point that must not be lost.'
  },
  {
    id: 'assetSanitization',
    name: '素材净化',
    nameEn: 'Asset Sanitization',
    field: 'assetSanitization',
    kind: 'generated',
    defaultEnabled: true,
    description: '把素材对象清洗为可见、可执行、无矛盾的视觉资产。',
    descriptionEn: 'Cleans raw assets into visible, executable, non-contradictory visual assets.'
  },
  {
    id: 'identityConsistency',
    name: '身份一致性',
    nameEn: 'Identity Consistency',
    field: 'identityConsistency',
    kind: 'mixed',
    defaultEnabled: true,
    description: '锁定角色、物件、怪物或空间在全序列中的身份、比例和状态。',
    descriptionEn: 'Locks identity, proportion, and state across the sequence.'
  },
  {
    id: 'styleLock',
    name: '风格锁',
    nameEn: 'Style Lock',
    field: 'styleLock',
    kind: 'mixed',
    defaultEnabled: true,
    description: '锁定最终视频风格，不等于分镜草图风格。',
    descriptionEn: 'Locks the final video style; it is not the storyboard sketch style.'
  },
  {
    id: 'effectLock',
    name: '特效锁',
    nameEn: 'Effect Lock',
    field: 'effectLock',
    kind: 'mixed',
    defaultEnabled: true,
    description: '锁定火焰、烟、粒子、速度、魔法、破坏等效果的可见规则。',
    descriptionEn: 'Locks visible rules for flame, smoke, particles, speed, magic, destruction, and effects.'
  },
  {
    id: 'environmentLock',
    name: '环境锁',
    nameEn: 'Environment Lock',
    field: 'environmentLock',
    kind: 'mixed',
    defaultEnabled: true,
    description: '锁定空间布局、方向、地理和背景元素，避免镜头间漂移。',
    descriptionEn: 'Locks spatial layout, direction, geography, and background elements to prevent drift.'
  },
  {
    id: 'sheetPolish',
    name: '板式精修',
    nameEn: 'Sheet Polish',
    field: 'sheetPolish',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '分镜板外观、标题栏、边距、外部强调色和整体设计层级。',
    descriptionEn: 'Storyboard sheet finish: masthead, margins, external accents, and design hierarchy.'
  },
  {
    id: 'drawingEnergy',
    name: '绘制能量',
    nameEn: 'Drawing Energy',
    field: 'drawingEnergy',
    kind: 'mixed',
    defaultEnabled: true,
    description: '分镜草图线条、姿态、速度感和动作可读性的生成要求。',
    descriptionEn: 'Sketch line energy, pose, speed, and action readability requirements.'
  },
  {
    id: 'panelRules',
    name: '分镜规则',
    nameEn: 'Panel Rules',
    field: 'panelRules',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '每格画面内部的禁令与抽取规则。',
    descriptionEn: 'Per-panel image prohibitions and extractability rules.'
  },
  {
    id: 'directorStripSpec',
    name: '导演轨规则',
    nameEn: 'Director Strip Spec',
    field: 'directorStripSpec',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '底部 animatic track board 的轨道结构和标签规则。',
    descriptionEn: 'Track structure and label rules for the bottom animatic board.'
  },
  {
    id: 'panelSequence',
    name: '镜头序列',
    nameEn: 'Panel Sequence',
    field: 'panelSequence[]',
    kind: 'mixed',
    defaultEnabled: true,
    description: '每个 panel / shot 的意图、镜头、动作、连续性和 strip cell。',
    descriptionEn: 'Shot intent, camera, action, continuity, and strip cell for each panel / shot.'
  }
];

export const VIDEO_STORYBOARD_DIRECT_PARAMS: VideoStoryboardDirectParamDef[] = [
  {
    id: 'aspectRatio',
    name: '画幅比例',
    nameEn: 'Aspect Ratio',
    kind: 'direct_protocol',
    defaultValue: '16:9',
    options: ['OFF', '16:9', '9:16', '4:3', '1:1', 'CUSTOM'],
    description: '分镜图或视频指令的输出画幅。',
    descriptionEn: 'Output aspect ratio for the storyboard image or video directive.'
  },
  {
    id: 'panelCount',
    name: '面板数量',
    nameEn: 'Panel Count',
    kind: 'direct_protocol',
    defaultValue: '12',
    options: ['OFF', '8', '10', '12', '16', 'CUSTOM'],
    description: '故事版面板数量；纯视频提示词可关闭。',
    descriptionEn: 'Storyboard panel count; can be disabled for pure video prompts.'
  },
  {
    id: 'panelLayout',
    name: '面板布局',
    nameEn: 'Panel Layout',
    kind: 'direct_protocol',
    defaultValue: '4x3',
    options: ['OFF', '4x2', '5x2', '4x3', '4x4', 'CUSTOM'],
    description: '故事版网格布局。',
    descriptionEn: 'Storyboard grid layout.'
  },
  {
    id: 'masthead',
    name: '顶部标题栏',
    nameEn: 'Masthead',
    kind: 'direct_protocol',
    defaultValue: true,
    options: [false, true],
    description: '是否生成设计化顶部项目卡。',
    descriptionEn: 'Whether to generate a designed top project card.'
  },
  {
    id: 'styleKeyframes',
    name: '风格色卡',
    nameEn: 'Style Keyframes',
    kind: 'direct_protocol',
    defaultValue: true,
    options: [false, true],
    description: '是否在面板外添加小型最终视频风格色卡。',
    descriptionEn: 'Whether to add small final-video style swatches outside panels.'
  },
  {
    id: 'directorStrip',
    name: '导演轨',
    nameEn: 'Director Strip',
    kind: 'direct_protocol',
    defaultValue: true,
    options: [false, true],
    description: '是否启用底部导演轨。',
    descriptionEn: 'Whether to enable the bottom director strip.'
  },
  {
    id: 'panelNumbering',
    name: '分镜编号',
    nameEn: 'Panel Numbering',
    kind: 'direct_protocol',
    defaultValue: true,
    options: [false, true],
    description: '是否显示 panel 编号。',
    descriptionEn: 'Whether panel numbers are shown.'
  },
  {
    id: 'panelHeaders',
    name: '面板标题',
    nameEn: 'Panel Headers',
    kind: 'direct_protocol',
    defaultValue: true,
    options: [false, true],
    description: '是否在面板外显示 beat name、lens tag 等短标题。',
    descriptionEn: 'Whether to show beat names, lens tags, and short headers outside panels.'
  },
  {
    id: 'noColorInsidePanels',
    name: '面板内禁彩色',
    nameEn: 'No Color Inside Panels',
    kind: 'direct_protocol',
    defaultValue: true,
    options: [false, true],
    description: '是否禁止 panel 内部彩色，只允许面板外强调色。',
    descriptionEn: 'Whether color is forbidden inside panels and only allowed as outside accents.'
  },
  {
    id: 'noSubtitlesWatermarks',
    name: '禁字幕水印',
    nameEn: 'No Subtitles / Watermarks',
    kind: 'direct_protocol',
    defaultValue: true,
    options: [false, true],
    description: '是否禁止字幕、logo、水印、UI 和无关文字。',
    descriptionEn: 'Whether to forbid subtitles, logos, watermarks, UI, and unrelated text.'
  },
  {
    id: 'continuousTake',
    name: '一镜到底',
    nameEn: 'Continuous Take',
    kind: 'direct_protocol',
    defaultValue: false,
    options: [false, true],
    description: '是否把所有面板理解为同一个连续镜头的 beat divisions。',
    descriptionEn: 'Whether all panels are beat divisions of one continuous shot.'
  }
];

export const VIDEO_STORYBOARD_PRESET_PROTOCOLS: VideoStoryboardPresetProtocolDef[] = [
  {
    id: 'designedProjectCard',
    name: '设计化项目卡',
    nameEn: 'Designed Project Card',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '顶部项目卡使用设计化标题栏，而不是表格。',
    descriptionEn: 'Use a designed top project card, not a table.',
    textCn: '创建设计化顶部项目卡，不要做成表格；包含标题、元信息行、优先级行和微简介。',
    textEn: 'Create a designed top project card, not a table; include title, meta line, priority line, and micro brief.'
  },
  {
    id: 'monochromeStoryboardPanels',
    name: '单色分镜面板',
    nameEn: 'Monochrome Storyboard Panels',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '面板内部使用低细节浅灰草图，不使用彩色。',
    descriptionEn: 'Use low-detail light-gray rough sketches inside panels; no color inside panels.',
    textCn: 'Panel 内部只使用低细节浅灰粗略分镜草图；不要在 panel 内使用彩色、填色、发光、字幕、箭头或 UI。',
    textEn: 'Panel interiors use only low-detail light-gray rough storyboard sketches; no color, fills, glow, subtitles, arrows, or UI inside panels.'
  },
  {
    id: 'directorStripSevenTracks',
    name: '七轨导演条',
    nameEn: 'Seven-Track Director Strip',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '底部导演轨使用七条轨道。',
    descriptionEn: 'Bottom director strip uses seven tracks.',
    textCn: '底部放置与 panel 列对齐的 animatic track board，轨道为 BEAT LINE、CAMERA PATH、ACTION PATH、RHYTHM TRACK、ESCALATION MAP、STATE TRACK、STYLE TRACK。',
    textEn: 'Place a bottom animatic track board aligned to panel columns with BEAT LINE, CAMERA PATH, ACTION PATH, RHYTHM TRACK, ESCALATION MAP, STATE TRACK, and STYLE TRACK.'
  },
  {
    id: 'referenceRoleAssignment',
    name: '参考角色分配',
    nameEn: 'Reference Role Assignment',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '每个参考素材必须分配一个明确职责。',
    descriptionEn: 'Each reference asset must receive one clear role.',
    textCn: '所有参考图、视频或音频必须明确说明职责：谁控制身份，谁控制场景，谁控制镜头，谁控制风格，谁控制声音；不要裸引用。',
    textEn: 'Every image, video, or audio reference must receive one clear role: identity, scene, camera, style, or sound; do not use bare references.'
  },
  {
    id: 'continuityLock',
    name: '连续性锁',
    nameEn: 'Continuity Lock',
    kind: 'preset_protocol',
    defaultEnabled: true,
    description: '锁定空间、方向、角色、道具和状态变化。',
    descriptionEn: 'Locks space, direction, character, props, and state progression.',
    textCn: '全序列必须保持同一空间地理、屏幕方向、角色身份、道具状态和动作进度；允许改变景别、角度、速度和构图。',
    textEn: 'The whole sequence must preserve geography, screen direction, identity, prop state, and action progression; camera distance, angle, speed, and composition may change.'
  },
  {
    id: 'continuousTakeProtocol',
    name: '一镜到底协议',
    nameEn: 'Continuous Take Protocol',
    kind: 'preset_protocol',
    defaultEnabled: false,
    description: '把 panel 理解成一个连续镜头的节拍划分。',
    descriptionEn: 'Treat panels as beat divisions within one continuous shot.',
    textCn: '标记整条序列为 ONE CONTINUOUS TAKE；所有 panel 只是节拍划分，不是剪辑点。',
    textEn: 'Mark the sequence as ONE CONTINUOUS TAKE; panels are beat divisions only, not edit points.'
  }
];

export const VIDEO_STORYBOARD_BLUEPRINT: VideoStoryboardTargetBlueprint = {
  id: 'VIDEO_STORYBOARD',
  targetCode: 'T13',
  name: '视频指令 / 故事版',
  nameEn: 'Video Directive / Storyboard',
  description: '用于生成视频素材、视频分镜图、镜头表或动作序列的目标图纸。',
  descriptionEn: 'Target blueprint for video assets, storyboard sheets, shot lists, or action sequences.',
  processingObject: '素材对象 + 运动事件 + 时间结构',
  processingObjectEn: 'footage asset + motion event + time structure',
  variableModules: VIDEO_STORYBOARD_VARIABLES,
  directParams: VIDEO_STORYBOARD_DIRECT_PARAMS,
  presetProtocols: VIDEO_STORYBOARD_PRESET_PROTOCOLS,
  assemblyOrder: [
    'projectTitle',
    'metaLine',
    'priorityLine',
    'microBrief',
    'sequenceId',
    'stylePacket',
    'referencePriority',
    'scenePremise',
    'sceneSummary',
    'location',
    'assetRoles',
    'startState',
    'endState',
    'actionChain',
    'propEffectState',
    'mustRead',
    'assetSanitization',
    'identityConsistency',
    'styleLock',
    'effectLock',
    'environmentLock',
    'sheetPolish',
    'drawingEnergy',
    'panelRules',
    'directorStripSpec',
    'panelSequence'
  ]
};
