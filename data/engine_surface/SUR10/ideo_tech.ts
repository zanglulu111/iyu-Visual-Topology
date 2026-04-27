import { LibraryCategoryDef } from '../../../types';
import { beliefPresetItem } from './_shared';

export const IDEO_TECH: LibraryCategoryDef = {
  id: "ideo_tech",
  name: "4. 技术与理性 (Tech & Reason)",
  nameEn: "Tech & Reason",
  desc: "关于科学、工具、数据、进步、优化和人机边界的开场信念。只给理性话语。",
  descEn: "Opening beliefs about science, tools, data, progress, optimization, and human-machine boundaries. Provides rational language only.",
  items: [
    beliefPresetItem("sur10_techno_optimism", "科技乐观", "Techno-Optimism", "相信技术升级、工程方案和平台迭代能逐步处理大多数公共难题。", "Belief that technical upgrades, engineering solutions, and platform iteration can gradually handle most public problems.", "科技创业叙事", "Tech startup stories"),
    beliefPresetItem("sur10_transhumanism", "超人类主义", "Transhumanism", "相信义体、基因编辑、脑机接口和寿命管理能扩展人的能力边界。", "Belief that prosthetics, gene editing, brain-computer interfaces, and longevity management can expand human capacity boundaries.", "赛博朋克叙事", "Cyberpunk stories"),
    beliefPresetItem("sur10_rationalism", "理性主义", "Rationalism", "相信逻辑、证据、推理和清晰定义应优先于直觉、传闻和情绪反应。", "Belief that logic, evidence, inference, and clear definitions should outrank intuition, rumor, and emotional reaction.", "侦探与科学叙事", "Detective and science stories"),
    beliefPresetItem("sur10_utilitarianism", "功利主义", "Utilitarianism", "相信决策应按总收益、总风险、总成本和可比较后果来衡量。", "Belief that decisions should be measured by total benefit, total risk, total cost, and comparable consequences.", "政策与危机叙事", "Policy and crisis stories"),
    beliefPresetItem("sur10_accelerationism", "加速主义", "Accelerationism", "相信既有系统已经无法慢修，必须让技术与资本流速继续加快。", "Belief that existing systems can no longer be slowly repaired, so technological and capital flows must keep accelerating.", "金融与网络叙事", "Finance and network stories"),
    beliefPresetItem("sur10_neo_luddism", "新卢德主义", "Neo-Luddism", "相信过度自动化、算法管理和智能设备会削弱人的判断与手艺。", "Belief that over-automation, algorithmic management, and smart devices weaken human judgment and craft.", "工业与乡土叙事", "Industrial and rural stories"),
    beliefPresetItem("sur10_scientism", "科学至上", "Scientism", "相信可测量、可复验、可统计的知识比个人体验更可靠。", "Belief that measurable, repeatable, statistical knowledge is more reliable than personal experience.", "实验室叙事", "Laboratory stories"),
    beliefPresetItem("sur10_digital_dualism", "数字二元论", "Digital Dualism", "相信线上身份、数据档案和离线生活分别遵循两套不同规则。", "Belief that online identity, data files, and offline life follow two different rule sets.", "社交媒体与虚拟现实叙事", "Social media and VR stories")
  ]
};
