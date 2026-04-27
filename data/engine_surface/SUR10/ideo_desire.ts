import { LibraryCategoryDef } from '../../../types';
import { beliefPresetItem } from './_shared';

export const IDEO_DESIRE: LibraryCategoryDef = {
  id: "ideo_desire",
  name: "1. 消费与满足 (Consumption & Satisfaction)",
  nameEn: "Consumption & Satisfaction",
  desc: "关于购买、愉悦、关注度、品味和自我优化的开场信念。只给人物话语姿态。",
  descEn: "Opening beliefs about buying, pleasure, attention, taste, and self-optimization. Provides character language only.",
  items: [
    beliefPresetItem("sur10_consumerism", "消费主义", "Consumerism", "相信购买、升级和拥有更好的东西能让生活变得可管理、可展示。", "Belief that buying, upgrading, and owning better things can make life manageable and displayable.", "《搏击俱乐部》", "Fight Club"),
    beliefPresetItem("sur10_hedonism", "享乐主义", "Hedonism", "相信即时快感、感官体验和舒适程度是判断生活选择的主要尺度。", "Belief that immediate pleasure, sensory experience, and comfort are the main measures for life choices.", "《猜火车》", "Trainspotting"),
    beliefPresetItem("sur10_attention_worship", "注意力崇拜", "Attention Worship", "相信曝光、粉丝、点赞、转发和实时反馈决定一个人的公共分量。", "Belief that exposure, followers, likes, reposts, and live feedback decide a person's public weight.", "《黑镜》", "Black Mirror"),
    beliefPresetItem("sur10_commodity_fetishism", "商品拜物", "Commodity Fetishism", "相信物件、品牌、版本和稀缺编号本身携带高于使用功能的价值。", "Belief that objects, brands, versions, and rare serials carry value beyond their use.", "《华尔街之狼》", "The Wolf of Wall Street"),
    beliefPresetItem("sur10_aestheticism", "审美至上", "Aestheticism", "相信美感、风格、材质、构图和品味可以优先于普通道德判断。", "Belief that beauty, style, material, composition, and taste can outrank ordinary moral judgment.", "《香水》", "Perfume"),
    beliefPresetItem("sur10_minimalism", "极简主义", "Minimalism", "相信减少物品、关系、选择和杂音能恢复控制感与清晰度。", "Belief that reducing objects, relationships, choices, and noise restores control and clarity.", "《极简主义》", "Minimalism"),
    beliefPresetItem("sur10_self_optimization", "自我优化主义", "Self-Optimization", "相信日程、训练、饮食、睡眠、效率工具和数据记录能持续改良自我。", "Belief that schedule, training, diet, sleep, productivity tools, and tracking can continuously improve the self.", "硅谷创业文化", "Silicon Valley startup culture"),
    beliefPresetItem("sur10_gamification", "游戏化人生", "Gamified Life", "相信积分、等级、任务、排行榜、徽章和打卡能让生活获得清晰规则。", "Belief that points, levels, quests, leaderboards, badges, and check-ins can give life clear rules.", "游戏化平台", "Gamified platforms")
  ]
};
