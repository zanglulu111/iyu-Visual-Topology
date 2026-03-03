
import { DriverType, NarrativeFieldState, CreativeBlueprint, WorldLawConfig, User } from '../types';
import { 
    DRIVERS, 
    NARRATIVE_ENGINE_BLOCKS, 
    COMMERCIAL_ENGINE_BLOCKS, 
    EXPERIMENTAL_ENGINE_BLOCKS, 
    AESTHETIC_ENGINE_BLOCKS, 
    TRAILER_ENGINE_BLOCKS, 
    COMM_SKIN_BLOCKS, 
    EXPERIMENTAL_SKIN_BLOCKS, 
    TRAILER_SKIN_BLOCKS 
} from '../constants';
import { ALL_SKIN_BLOCKS } from '../data/skin_libraries';

export interface GlobalDumpOptions {
    driverId: DriverType | null;
    fieldState: NarrativeFieldState;
    worldLaw: WorldLawConfig;
    visionInput: string;
    visionAnalysis: string;
    visionImage: string | null;
    cachedBlueprints: Record<string, CreativeBlueprint>;
    metonymyBlueprint: CreativeBlueprint | null;
    viewMode: string;
    user: User | null;
    subjectType: string;
    lang: 'CN' | 'EN';
}

export const generateGlobalDump = (options: GlobalDumpOptions): string => {
    const { 
        driverId, fieldState, worldLaw, visionInput, visionAnalysis, visionImage, 
        cachedBlueprints, metonymyBlueprint, viewMode, user, subjectType, lang 
    } = options;

    const getDriverName = () => {
        const driver = DRIVERS.find(d => d.id === driverId);
        if (!driver) return "Project";
        return lang === 'EN' ? driver.nameEn : driver.name;
    };

    const lines: string[] = [];
    const drName = getDriverName();
    lines.push(`# 🎬 VISIONARY 创意资产完整备份 (${drName})`);
    lines.push(`> 日期: ${new Date().toLocaleString()} | 用户: ${user?.username || 'Guest'}`);
    
    lines.push(`\n## 0. 输入源与解码 (INPUT & DECODING)`);
    lines.push(`**创意种子:** ${visionInput || '无'}`);
    if (visionAnalysis) lines.push(`**视觉反向解析报告:**\n${visionAnalysis}`);
    if (visionImage) lines.push(`**参考图 URL:** (Base64 数据已省略)`);

    lines.push(`\n## 1. 核心引擎 DNA (ENGINE PARAMETERS)`);
    lines.push(`**驱动模式:** ${drName}`);
    if (driverId === DriverType.AESTHETIC) lines.push(`**本体选择:** ${subjectType}`);
    lines.push(`**世界法则:** 物理 [${worldLaw.physics}] / 语境 [${worldLaw.context}]`);
    
    const allBlocks = [
        ...NARRATIVE_ENGINE_BLOCKS, ...COMMERCIAL_ENGINE_BLOCKS, 
        ...EXPERIMENTAL_ENGINE_BLOCKS, ...AESTHETIC_ENGINE_BLOCKS, 
        ...TRAILER_ENGINE_BLOCKS, ...ALL_SKIN_BLOCKS, 
        ...COMM_SKIN_BLOCKS, ...EXPERIMENTAL_SKIN_BLOCKS, ...TRAILER_SKIN_BLOCKS
    ];
    
    Object.entries(fieldState).forEach(([k, v]) => {
        const tags = v as string[];
        if (tags && tags.length) {
            const blockDef = allBlocks.find(b => b.id === k);
            const label = lang === 'EN' ? blockDef?.enName : blockDef?.name;
            lines.push(`* **${label || k}**: ${tags.join(', ')}`);
        }
    });

    const bibles = Object.values(cachedBlueprints);
    if (bibles.length > 0) {
        lines.push(`\n## 2. 创意圣经与文学剧本 (CREATIVE BIBLES)`);
        bibles.forEach((b, i) => {
            lines.push(`\n### 📜 圣经项目 ${i+1}: ${b.narrative.title}`);
            lines.push(`**风格指向:** ${b.styleName}`);
            lines.push(`**核心 Logline:** ${b.narrative.logline}`);
            
            lines.push(`\n#### [叙事核心 / Narrative Core]`);
            lines.push(b.narrative.synopsis);

            lines.push(`\n#### [世界法则 / World Rules]`);
            lines.push(b.context.world || "未定义世界法则。");

            lines.push(`\n#### [影调与视觉 / Tone & Visuals]`);
            lines.push(b.context.tone || "未定义影调。");
            if (b.context.colorPalette.length) {
                lines.push(`**色板:** ${b.context.colorPalette.join(', ')}`);
            }

            lines.push(`\n#### [视觉资产库 / Visual Asset Library]`);
            if (b.assets.characters.length) {
                lines.push(`\n**人物 (Characters):**`);
                b.assets.characters.forEach(c => lines.push(`- [${c.name} (${c.tag})] ${c.desc}\n  * Prompt: ${c.view.prompt || 'N/A'}`));
            }
            if (b.assets.locations.length) {
                lines.push(`\n**场景 (Locations):**`);
                b.assets.locations.forEach(l => lines.push(`- [${l.name} (${l.tag})] ${l.desc}\n  * Prompt: l.view.prompt || 'N/A'}`));
            }
            if (b.assets.props.length) {
                lines.push(`\n**道具 (Props):**`);
                b.assets.props.forEach(p => lines.push(`- [${p.name} (${p.type})] ${p.desc}\n  * Prompt: p.view.prompt || 'N/A'}`));
            }

            if (b.narrative.psychoanalysis) {
                lines.push(`\n#### [精神分析诊断报告 / Psychoanalysis Report]`);
                // Separating the formula as an attachment
                const analysisText = b.narrative.psychoanalysis;
                const formulaMatch = analysisText.match(/\$\$([\s\S]*?)\$\$/);
                const coreText = analysisText.replace(/\$\$[\s\S]*?\$\$/, "[详见附件：核心算式]");
                
                lines.push(coreText);
                
                if (formulaMatch) {
                    lines.push(`\n[附件: 核心算式 / ATTACHMENT: CORE FORMULA]`);
                    lines.push(`-----------------------------------------`);
                    lines.push(formulaMatch[1].trim());
                    lines.push(`-----------------------------------------`);
                }
            }
        });
    }

    if (metonymyBlueprint && viewMode === 'METONYMY') {
        lines.push(`\n## 3. 换喻转译数据 (METONYMY TRANSLATION)`);
        lines.push(`**项目:** ${metonymyBlueprint.narrative.title}`);
        if (Array.isArray(metonymyBlueprint.metonymyData?.screenplay)) {
            metonymyBlueprint.metonymyData.screenplay.forEach(s => {
                lines.push(`\n### ${s.title}`);
                lines.push(s.content);
                if (s.sutureData?.globalTone) {
                    lines.push(`\n**视觉基调:** ${s.sutureData.globalTone.style} / ${s.sutureData.globalTone.lighting}`);
                }
            });
        }
    }

    lines.push(`\n\n--- END OF VISIONARY DUMP ---`);
    return lines.join('\n');
};
