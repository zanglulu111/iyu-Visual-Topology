
import { LibraryItemDef } from '../types';

export const AUTHORITY_ENVIRONMENTS: LibraryItemDef[] = [
  // === CATEGORY 1: 精密科学 (Precision Science) ===
  { id: "end_nano_lab", name: "无尘纳米实验室 (Nano Lab)", group: "1. 精密科学", def: "全白无菌环境，科学家穿戴密封防护服，激光束穿过淡蓝色气溶胶。", core: "背书：分子级的精确控制。适用：高端护肤、半导体、生物制药。" },
  { id: "end_cryogenic", name: "深冷储藏室 (Cryo-Storage)", group: "1. 精密科学", def: "巨大的液氮罐喷出白雾，精钢地面反光，温度计显示-196℃。", core: "背书：活性的极致封存。适用：生命科学、保鲜技术。" },
  { id: "end_centrifuge", name: "巨型离心机房 (Centrifuge)", group: "1. 精密科学", def: "高速旋转的机械嗡鸣，压力表剧烈跳动，强化的玻璃观察窗。", core: "背书：纯度的极限提取。适用：化工、新材料、能源。" },
  { id: "end_electron_mic", name: "显微透视间 (Microscopy)", group: "1. 精密科学", def: "黑暗的房间，只有电子显微镜屏幕闪烁，揭示肉眼不可见的纹理。", core: "背书：全知视角的微观真相。适用：精密制造、材料研发。" },
  { id: "end_dna_sequencing", name: "基因测序阵列 (DNA Array)", group: "1. 精密科学", def: "无数闪烁的试管架，自动机械臂在光纤间穿梭，代码流动的屏幕。", core: "背书：定制化的生命蓝图。适用：精准医疗、定制营养。" },
  { id: "end_anechoic", name: "全消音暗室 (Anechoic Chamber)", group: "1. 精密科学", def: "墙布满灰色的吸音尖锥，绝对的死寂，连心跳声都清晰可见。", core: "背书：零底噪的纯净声场。适用：声学设备、新能源车静音测试。" },

  // === CATEGORY 2: 历史血统 (Heritage & Lineage) ===
  { id: "end_18th_cellar", name: "18世纪深海地窖 (Century Cellar)", group: "2. 历史血统", def: "覆盖着霉菌的橡木桶，潮湿的石墙，蜘蛛网与厚重的灰尘，微弱的烛光。", core: "背书：时间的沉淀与不朽。适用：高端白酒、干邑、古董收藏。" },
  { id: "end_clockwork_shop", name: "发条匠人工作坊 (Clockmaker)", group: "2. 历史血统", def: "满桌的黄铜零件，戴着放大镜的老匠人，沉闷的钟摆声。木质香气。", core: "背书：手工的尊严与传承。适用：顶级腕表、高级定制。" },
  { id: "end_royal_archive", name: "皇室档案库 (Royal Archive)", group: "2. 历史血统", def: "挑高的穹顶，需要爬梯子的巨大书架，带有火漆印封的羊皮卷。", core: "背书：大他者的权力加冕。适用：经典品牌、教育、法律服务。" },
  { id: "end_terroir_peak", name: "高山源头庄园 (Terroir)", group: "2. 历史血统", def: "清晨的云雾缭绕在茶园或葡萄园，露水打湿泥土，原始的生态循环。", core: "背书：地理决定论的纯正。适用：天然食品、矿泉水、原材料。" },
  { id: "end_guild_hall", name: "中世纪行会大厅 (Guild Hall)", group: "2. 历史血统", def: "沉重的长木桌，家徽旗帜挂在石柱上，巨大的壁炉火光映射。", core: "背书：职业社群的最高公约。适用：行业领袖品牌、专业协会。" },
  { id: "end_tannery", name: "传统植鞣革坊 (Tannery)", group: "2. 历史血统", def: "巨大的染缸，皮革的特殊气味，染料在阳光下升腾的蒸汽。", core: "背书：原始工艺的生命感。适用：高端皮具、手工鞋服。" },

  // === CATEGORY 3: 极端炼狱 (Extreme Testing) ===
  { id: "end_wind_tunnel", name: "航空级风洞 (Wind Tunnel)", group: "3. 极端炼狱", def: "巨大的风扇叶片，流线型的烟雾在机身上拉出完美的平行线。", core: "背书：效率与空气动力学。适用：超跑、空气动力设备。" },
  { id: "end_arctic_proving", name: "北极冰原测试场 (Arctic Site)", group: "3. 极端炼狱", def: "暴风雪中的孤独灯火，冰层上的制动痕迹，防寒服包裹的测试员。", core: "背书：极寒环境下的绝对可靠。适用：户外装备、汽车电池。" },
  { id: "end_desert_heat", name: "死亡谷热力场 (Heat Test)", group: "3. 极端炼狱", def: "热浪扭曲地平线，仪器在烈日下曝晒，干涸的大地纹理。", core: "背书：高温耐受力。适用：建筑材料、高性能涂层。" },
  { id: "end_crash_center", name: "碰撞模拟中心 (Crash Center)", group: "3. 极端炼狱", def: "强光下的鲜亮色彩，假人的特写，金属扭曲的慢动作瞬间。", core: "背书：安全的底线承诺。适用：汽车安全、防护用品。" },
  { id: "end_high_altitude", name: "高海拔低压舱 (Altitude)", group: "3. 极端炼狱", def: "金属密封舱，氧气罩，不断跳动的海拔压力读数。", core: "背书：稀薄环境下的生命维持。适用：航空科技、运动健康。" },
  { id: "end_deep_pressure", name: "万米深海压舱 (Deep Sea)", group: "3. 极端炼狱", def: "深蓝色的厚重玻璃，外界压碎金属的巨响，舱内寂静的仪表盘。", core: "背书：抗压主权的极限。适用：潜水表、深海探查。" },

  // === CATEGORY 4: 智力巅峰 (Intellectual & Elite) ===
  { id: "end_keynote_stage", name: "行业发布会舞台 (The Stage)", group: "4. 智力巅峰", def: "巨大的LED背景墙，主角在强光阴影中踱步，台下的呼吸声。", core: "背书：行业标准的定义权。适用：智能手机、互联网服务。" },
  { id: "end_design_studio", name: "极简设计中心 (Studio)", group: "4. 智力巅峰", def: "落地窗对着雪山，巨大的白木桌，未完成的手稿与3D模型。", core: "背书：审美主权与智力资本。适用：高端设计、创意服务。" },
  { id: "end_boardroom", name: "曼哈顿董事会 (Boardroom)", group: "4. 智力巅峰", def: "夜景作为背景，反光的黑石桌，精致的西装与冷漠的博弈。", core: "背书：资本意志的最高决策。适用：金融、综合咨询。" },
  { id: "end_patent_wall", name: "专利证明墙 (Patent Wall)", group: "4. 智力巅峰", def: "整面墙的证书，泛黄的纸张与现代证书交织。时间的阶梯。", core: "背书：技术壁垒的合法性。适用：技术领先型企业。" },
  { id: "end_observatory", name: "天文观测站 (Observatory)", group: "4. 智力巅峰", def: "巨大的圆顶打开，星光倾泻在望远镜上，寂静中的宏大。", core: "背书：全人类维度的视野。适用：导航、通讯、长远规划。" },
  { id: "end_law_firm", name: "顶级律师事务所 (Law Firm)", group: "4. 智力巅峰", def: "厚重的法律百科全书，窗外的正义女神像，签字时的特写。", core: "背书：契约与社会契约。适用：合规、高端安防。" },

  // === CATEGORY 5: 工业神殿 (Industrial Temple) ===
  { id: "end_giga_factory", name: "自动化超级工厂 (Giga-Factory)", group: "5. 工业神殿", def: "成千上万的橙色机械臂同步起舞，激光焊花如烟火般绽放。", core: "背书：规模化的工业奇迹。适用：新能源、智能家电。" },
  { id: "end_foundry", name: "熔炼炉核心 (The Foundry)", group: "5. 工业神殿", def: "红色的钢水流动，热浪袭人，飞溅的火星与厚重的铁锤声。", core: "背书：意志的锻造。适用：硬核男装、重金属、性能引擎。" },
  { id: "end_control_center", name: "城市运营中心 (City Center)", group: "5. 工业神殿", def: "满墙的数字化热力图，实时跳动的数据指标，系统的神经中枢。", core: "背书：掌控全局的稳定性。适用：云计算、智慧物流。" },
  { id: "end_hangar_7", name: "7号机库 (Hangar)", group: "5. 工业神殿", def: "巨大的室内空间，飞机的机翼剪影，地面的光洁程度可以照人。", core: "背书：大国重器的精密底蕴。适用：大型基建、综合保险。" },
  { id: "end_server_mine", name: "深山服务器集群 (Server Mine)", group: "5. 工业神殿", def: "在冰冷岩洞中的机房，蓝光流动，风扇的白噪音形成回声。", core: "背书：数字记忆的永恒堡垒。适用：云存储、加密技术。" },
  { id: "end_shipyard", name: "巨轮造船台 (Shipyard)", group: "5. 工业神殿", def: "巨大的船底弧线遮蔽天空，生锈的锚链与忙碌的焊工。", core: "背书：承载力的终极象征。适用：跨境贸易、全球金融。" },

  // === CATEGORY 6: 数字神谕 (Digital Oracle) ===
  { id: "end_ai_neural", name: "AI 神经网络室 (Neural Net)", group: "6. 数字神谕", def: "半透明的屏幕悬浮，光纤构成的脉络在不断跳动呼吸。", core: "背书：算法的先知能力。适用：个性化定制、预测系统。" },
  { id: "end_quantum_p", name: "量子计算机原型 (Quantum)", group: "6. 数字神谕", def: "像倒挂金钟般的精密线路，绝对零度的隔层，金色的散热片。", core: "背书：算力的绝对维度超越。适用：硬科技、未来银行。" },
  { id: "end_render_farm", name: "渲染农场 (Render Farm)", group: "6. 数字神谕", def: "热风涌动，风扇的轰鸣，揭示出虚拟世界正在生成的瞬间。", core: "背书：制造幻象的硬实力。适用：游戏、影音、元宇宙。" },
  { id: "end_meta_gateway", name: "元宇宙接口 (Gateway)", group: "6. 数字神谕", def: "虚实交界的边缘，像素化的碎片与真实物体在缓慢融合。", core: "背书：数字主权的完整性。适用：数字藏品、虚实交互。" },
  { id: "end_deep_code", name: "源代码编辑室 (Source Code)", group: "6. 数字神谕", def: "极致的极简主义，只有黑色屏幕与跳动的字符。权力的源代码。", core: "背书：规则的制定权。适用：OS开发、安全平台。" },
  { id: "end_hologram_v", name: "全息沙盘室 (Holo-Sandtable)", group: "6. 数字神谕", def: "蓝色的三维地图在空中旋转，缩放的动作与光影同步。", core: "背书：战略级的信息整合。适用：管理、指挥、高端咨询。" },

  // === CATEGORY 7: 自然源头 (Natural Origin) ===
  { id: "end_deep_spring", name: "岩层深泉 (Deep Spring)", group: "7. 自然源头", def: "在幽暗岩洞中，一滴水滴入深潭，回声。极致的纯净。", core: "背书：无污染的本初。适用：矿泉水、高端饮品。" },
  { id: "end_soil_organic", name: "有机黑土区 (Black Soil)", group: "7. 自然源头", def: "特写松软肥沃的黑色泥土，蚯蚓蠕动，植物的根系极其发达。", core: "背书：生命力的根源营养。适用：有机奶粉、功能食品。" },
  { id: "end_salt_pure", name: "高原盐池 (Salt Flat Source)", group: "7. 自然源头", def: "极致的白与蓝，阳光照射下的盐结晶发出钻石般的光泽。", core: "背书：矿物质的洗礼。适用：个护、洗涤用品。" },
  { id: "end_volcanic_soil", name: "火山灰肥土 (Volcanic Soil)", group: "7. 自然源头", def: "深紫色的肥沃土壤，远处的火山口作为背景，植物异常茂盛。", core: "背书：极端的能量富集。适用：咖啡、顶级补剂。" },
  { id: "end_high_pasture", name: "高山无尘牧场 (Pasture)", group: "7. 自然源头", def: "海拔3000米的草场，空气透明得不真实，动物在自由行走。", core: "背书：自由生长的纯真。适用：乳制品、畜牧品牌。" },
  { id: "end_coral_reef", name: "深海珊瑚丛 (Coral Reef)", group: "7. 自然源头", def: "色彩绚烂的生物群落，鱼群穿梭，阳光透射水面的波纹。", core: "背书：生物多样性的精华。适用：海洋护肤、环保项目。" },

  // === CATEGORY 8: 超验空间 (Transcendent Truth) ===
  { id: "end_white_void_a", name: "绝对白色视界 (White Void)", group: "8. 超验空间", def: "没有重力，没有阴影，只有主体与产品。本质的裸露。", core: "背书：无懈可击的本质。适用：极致极简产品、发布大片。" },
  { id: "end_golden_ratio", name: "黄金分割神殿 (Geometry)", group: "8. 超验空间", def: "由发光线条构成的帕特农神庙，每一根柱子都完美符合比例。", core: "背书：永恒的数学美感。适用：设计、建筑、高端教育。" },
  { id: "end_time_river", name: "时间之河 (River of Time)", group: "8. 超验空间", def: "流动的星轨，加速的云影，主体在其中静止不动。", core: "背书：超越时间的真理。适用：长期投资、保险、古董。" },
  { id: "end_empyrean", name: "光之最高天 (Empyrean)", group: "8. 超验空间", def: "极度高调的光影，主角背对着万丈光芒，象征着最终的救赎。", core: "背书：神圣的承诺。适用：公益、高端医疗、宗教相关。" },
  { id: "end_abstract_gears", name: "宇宙大发条 (Cosmos Gears)", group: "8. 超验空间", def: "星辰化作巨大的齿轮在静谧中咬合运行。宿命的精准感。", core: "背书：宇宙秩序的共鸣。适用：高端腕表、精密物理。" },
  { id: "end_the_origin_a", name: "万物归一点 (The Origin)", group: "8. 超验空间", def: "所有的光线最终汇聚到一个微小的黑点中。极致的凝聚。", core: "背书：核心竞争力的极致坍缩。适用：咨询、核心零部件。" }
];
