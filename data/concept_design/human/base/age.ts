import { ConceptAgeBand, ConceptAgeWear, ConceptBaseItem, ALL_REAL_ERAS, UNIVERSAL_HUMAN_SCOPE } from './types';

const withAgeMeta = (items: ConceptBaseItem[]): ConceptBaseItem[] => items.map(item => {
  const id = item.id;
  const ageBand: ConceptAgeBand | undefined = id.includes('late_teen')
    ? 'LATE_TEEN'
    : id.includes('young_adult') || id.includes('mature_youth')
      ? 'YOUNG_ADULT'
      : id.includes('early_middle')
        ? 'MATURE_ADULT'
        : id.includes('middle') || id.includes('late_middle')
          ? 'MIDDLE_AGED'
          : id.includes('elder')
            ? 'ELDER'
            : id.includes('timeless_adult')
              ? 'TIMELESS_ADULT'
              : undefined;
  const ageWear: ConceptAgeWear = id.includes('fresh')
    ? 'FRESH'
    : id.includes('lived_in')
      ? 'LIVED_IN'
      : id.includes('weathered')
        ? 'WEATHERED'
        : id.includes('well_kept')
          ? 'WELL_KEPT'
          : id.includes('sleepless')
            ? 'SLEEPLESS'
            : id.includes('disciplined')
              ? 'DISCIPLINED'
              : id.includes('prematurely_aged')
                ? 'PREMATURELY_WORN'
                : 'NEUTRAL';
  return { ...item, ...(ageBand ? { ageBand } : {}), ageWear };
});

export const CD_AGE_TEXTURE: ConceptBaseItem[] = withAgeMeta([
  { id: 'cd_age_late_teen', name: '少年末期', nameEn: 'Late Teen', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '接近成年但仍带未完全定型的骨相和身体轻盈感。', defEn: 'Nearly adult, with not-yet-set facial structure and bodily lightness.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_young_adult', name: '青年', nameEn: 'Young Adult', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '20到30岁左右，体态完整、恢复力强、身份尚有可塑性。', defEn: 'Roughly 20s to early 30s, fully formed body, strong recovery, identity still flexible.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_mature_youth', name: '成熟青年', nameEn: 'Mature Young Adult', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '青年身体中带有更稳定的判断力、职业痕迹和自我管理感。', defEn: 'A young adult body with steadier judgment, work traces, and self-control.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_early_middle', name: '初入中年', nameEn: 'Early Middle Age', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '身体仍有力量，但面部、手部和姿态开始出现责任与消耗。', defEn: 'Still physically capable, while face, hands, and posture begin to show responsibility and wear.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_middle', name: '中年', nameEn: 'Middle Age', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '稳定、厚重、经验感明确，身体语言比青春感更重要。', defEn: 'Stable, grounded, experienced; body language matters more than youthfulness.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_late_middle', name: '深中年', nameEn: 'Late Middle Age', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '经验、疲惫和威望同时存在，适合领导者、匠人、隐退者。', defEn: 'Experience, fatigue, and authority coexist; suited to leaders, craftspeople, or retired figures.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_elder', name: '老年', nameEn: 'Elder', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '时间痕迹清楚，骨相、皮肤和动作节奏成为身份的一部分。', defEn: 'Clear time traces; bone structure, skin, and movement rhythm become part of identity.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'skin', 'pose'], risk: 'clean' },
  { id: 'cd_age_ancient_elder', name: '高龄长者', nameEn: 'Ancient Elder', group: 'A. 年龄阶段', groupEn: 'A. Age Stage', def: '极高年龄感，行动缓慢但精神、权威或神秘性更集中。', defEn: 'Very advanced age, slow movement, but concentrated spirit, authority, or mystery.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'skin', 'pose'], risk: 'clean' },

  { id: 'cd_age_fresh', name: '清新未损', nameEn: 'Fresh and Unworn', group: 'B. 时间质感', groupEn: 'B. Time Texture', def: '几乎没有生活磨损，表情、皮肤和动作都保持轻盈。', defEn: 'Almost no life wear; expression, skin, and movement remain light.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'skin', 'pose'], risk: 'clean' },
  { id: 'cd_age_lived_in', name: '生活磨损感', nameEn: 'Lived-In', group: 'B. 时间质感', groupEn: 'B. Time Texture', def: '不是衰老，而是工作、睡眠不足、通勤或习惯留下的现实痕迹。', defEn: 'Not aging itself, but realistic traces of work, poor sleep, commuting, or habit.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'skin', 'pose'], risk: 'clean' },
  { id: 'cd_age_weathered', name: '风霜感', nameEn: 'Weathered', group: 'B. 时间质感', groupEn: 'B. Time Texture', def: '长期户外、劳动、旅行或危险环境塑造出的皮肤与姿态。', defEn: 'Skin and posture shaped by long-term outdoors, labor, travel, or harsh environments.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['skin', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_well_kept', name: '精心保养感', nameEn: 'Well-Kept', group: 'B. 时间质感', groupEn: 'B. Time Texture', def: '年龄痕迹被护理、资源和自律控制住，呈现干净阶层感。', defEn: 'Age traces controlled by care, resources, and discipline, producing clean class-coded polish.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'skin', 'costume'], risk: 'clean' },
  { id: 'cd_age_sleepless', name: '长期缺眠感', nameEn: 'Sleepless', group: 'B. 时间质感', groupEn: 'B. Time Texture', def: '眼下、肩颈和动作节奏显示持续疲劳，但不等于病态。', defEn: 'Under-eyes, neck, shoulders, and movement rhythm show sustained fatigue without becoming illness.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'body', 'pose'], risk: 'clean' },
  { id: 'cd_age_disciplined', name: '高度自律感', nameEn: 'Disciplined', group: 'B. 时间质感', groupEn: 'B. Time Texture', def: '年龄被训练、饮食、职业要求或礼仪管理成克制状态。', defEn: 'Age presentation controlled by training, diet, profession, or etiquette.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['body', 'pose', 'costume'], risk: 'clean' },
  { id: 'cd_age_prematurely_aged', name: '早熟衰耗感', nameEn: 'Prematurely Worn', group: 'B. 时间质感', groupEn: 'B. Time Texture', def: '实际年龄不高，但压力、贫困、危险或责任让面部更早变重。', defEn: 'Not old in years, but stress, poverty, danger, or responsibility makes the face feel older.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ALL_REAL_ERAS, affects: ['face', 'skin', 'pose'], risk: 'clean' },
  { id: 'cd_age_timeless_adult', name: '无龄成年人', nameEn: 'Timeless Adult', group: 'C. 设计年龄', groupEn: 'C. Designed Age', def: '明确是成年人，但具体年龄被造型、表情和风格压低到暧昧状态。', defEn: 'Clearly adult, while exact age remains ambiguous through styling, expression, and mood.', subjectScope: UNIVERSAL_HUMAN_SCOPE, ontologyLevel: 1, eras: ['timeless'], affects: ['face', 'costume', 'pose'], risk: 'clean' },
]);
