
import { LibraryItemDef } from '../../types';

export const AES_AGE: LibraryItemDef[] = [
  { id: "age_baby", name: "婴儿 (Baby)", def: "" },
  { id: "age_toddler", name: "幼童 (Toddler)", def: "" },
  { id: "age_child", name: "儿童 (Child)", def: "" },
  { id: "age_teen", name: "少年 (Teenager)", def: "" },
  { id: "age_young_adult", name: "青年 (Young Adult)", def: "" },
  { id: "age_mid_adult", name: "壮年 (Mid-adult)", def: "" },
  { id: "age_middle", name: "中年 (Middle age)", def: "" },
  { id: "age_senior", name: "老年 (Senior)", def: "" }
];

export const AES_GENDER: LibraryItemDef[] = [
  { id: "gen_female", name: "女性 (Female)", def: "" },
  { id: "gen_male", name: "男性 (Male)", def: "" },
  { id: "gen_androgynous", name: "中性 (Androgynous)", def: "" }
];

export const AES_BODY_TYPE: LibraryItemDef[] = [
  // ===============================================================
  // Group A: 女性 - 纤细与少女 (Female: Slender & Petite)
  // ===============================================================
  { id: "bt_f_petite", name: "娇小 (Petite)", group: "A. 女性: 纤细少女", def: "" },
  { id: "bt_f_slender", name: "修长纤细 (Slender)", group: "A. 女性: 纤细少女", def: "" },
  { id: "bt_f_willowy", name: "弱柳扶风 (Willowy)", group: "A. 女性: 纤细少女", def: "" },
  { id: "bt_f_slim", name: "苗条 (Slim)", group: "A. 女性: 纤细少女", def: "" },
  { id: "bt_f_flat", name: "贫乳/骨感 (Flat Chested)", group: "A. 女性: 纤细少女", def: "" },
  { id: "bt_f_lithe", name: "柔软轻盈 (Lithe)", group: "A. 女性: 纤细少女", def: "" },
  { id: "bt_f_delicate", name: "精致脆弱 (Delicate Frame)", group: "A. 女性: 纤细少女", def: "" },

  // ===============================================================
  // Group B: 女性 - 性感与曲线 (Female: Curvy & Alluring)
  // 包含二次元、微胖、辣妹等高张力关键词
  // ===============================================================
  { id: "bt_f_hourglass", name: "沙漏S型 (Hourglass Figure)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_voluptuous", name: "妖娆丰满 (Voluptuous)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_curvy", name: "极致曲线 (Curvaceous)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_busty", name: "傲人上围 (Large Bust)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_thick", name: "肉感丰腴 (Thick)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_plump", name: "微胖 (Plump)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_chubby", name: "棉花糖软妹 (Chubby)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_soft", name: "柔软肉体 (Soft Body)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_thighs", name: "丰满大腿 (Thick Thighs)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_hips", name: "宽胯蜜桃 (Wide Hips)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_mature", name: "成熟御姐 (Mature Female)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_bombshell", name: "尤物 (Bombshell)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_model", name: "超模身材 (Model Stature)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_gravure", name: "写真偶像 (Gravure Figure)", group: "B. 女性: 性感曲线", def: "" },
  { id: "bt_f_fit", name: "健美辣妹 (Fit & Toned)", group: "B. 女性: 性感曲线", def: "" },

  // ===============================================================
  // Group C: 男性 - 肌肉与线条 (Male: Muscular & Lean)
  // ===============================================================
  { id: "bt_m_athletic", name: "运动员 (Athletic Build)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_lean", name: "精瘦 (Lean)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_ripped", name: "线条分明 (Ripped)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_muscular", name: "肌肉壮硕 (Muscular)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_broad", name: "宽肩倒三角 (Broad Shoulders)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_vtaper", name: "公狗腰 (V-Taper)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_abs", name: "腹肌 (Six Pack)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_bodybuilder", name: "健美霸主 (Bodybuilder)", group: "C. 男性: 肌肉线条", def: "" },
  { id: "bt_m_bishonen", name: "美少年 (Bishonen)", group: "C. 男性: 肌肉线条", def: "" },

  // ===============================================================
  // Group D: 男性 - 厚重与熊系 (Male: Heavy & Bear)
  // ===============================================================
  { id: "bt_m_stocky", name: "敦实 (Stocky)", group: "D. 男性: 厚重熊系", def: "" },
  { id: "bt_m_bulky", name: "魁梧 (Bulky)", group: "D. 男性: 厚重熊系", def: "" },
  { id: "bt_m_bear", name: "熊系 (Bear Mode)", group: "D. 男性: 厚重熊系", def: "" },
  { id: "bt_m_dadbod", name: "啤酒肚/老爹 (Dad Bod)", group: "D. 男性: 厚重熊系", def: "" },
  { id: "bt_m_giant", name: "巨人 (Giant)", group: "D. 男性: 厚重熊系", def: "" },
  { id: "bt_m_fat", name: "肥胖 (Obese)", group: "D. 男性: 厚重熊系", def: "" },
  { id: "bt_m_hairy", name: "多毛 (Hairy Chest)", group: "D. 男性: 厚重熊系", def: "" }
];
