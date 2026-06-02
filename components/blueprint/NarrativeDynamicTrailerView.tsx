import React from 'react';
import {
    BlueprintLanguage,
    CreativeBlueprint,
    DynamicTrailerData,
    DynamicTrailerDurationPreset,
    DynamicTrailerSegment,
    MetonymyAssetInput
} from '../../types';
import { CopyButton } from '../SharedBlueprintComponents';
import { Camera, Clapperboard, Film, ImageIcon, Music2, RefreshCw, Sparkles, Timer, User, MapPin, Box } from 'lucide-react';

interface NarrativeDynamicTrailerViewProps {
    blueprint: CreativeBlueprint;
    language: BlueprintLanguage;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    themeAccent: string;
    themeBorder: string;
    theme?: string;
}

const emptyAssets = { characters: [], scenes: [], props: [] } as {
    characters: MetonymyAssetInput[];
    scenes: MetonymyAssetInput[];
    props: MetonymyAssetInput[];
};

const durationOptions: Array<{ id: DynamicTrailerDurationPreset; cn: string; en: string }> = [
    { id: 'highlight', cn: '高光片段', en: 'Highlight' },
    { id: '30s', cn: '30 秒', en: '30s' },
    { id: '60s', cn: '60 秒', en: '60s' },
    { id: '90s', cn: '90 秒', en: '90s' }
];

const getAssetName = (asset: MetonymyAssetInput, lang: BlueprintLanguage) => {
    return lang === 'EN' ? (asset.nameEn || asset.name) : (asset.name || asset.nameEn || '');
};

const summarizeAssets = (assets: MetonymyAssetInput[], lang: BlueprintLanguage) => {
    const names = assets.map(asset => getAssetName(asset, lang)).filter(Boolean);
    return names.length ? names.join('、') : (lang === 'EN' ? 'not locked yet' : '尚未锁定');
};

const getActiveAssets = (blueprint: CreativeBlueprint) => {
    const metonymyData = blueprint.metonymyData;
    const presets = metonymyData?.stylePresets || [];
    const activePreset = presets.find(preset => preset.id === metonymyData?.activePresetId) || presets[0];
    return activePreset?.assets || emptyAssets;
};

const getToneTokens = (blueprint: CreativeBlueprint, lang: BlueprintLanguage) => {
    const metonymyData = blueprint.metonymyData;
    const presets = metonymyData?.stylePresets || [];
    const activePreset = presets.find(preset => preset.id === metonymyData?.activePresetId) || presets[0];
    const tone = activePreset?.toneAnalysis;
    const tokens = lang === 'EN'
        ? [tone?.styleEn || tone?.style, tone?.lightingEn || tone?.lighting, tone?.textureEn || tone?.texture].filter(Boolean)
        : [tone?.style, tone?.lighting, tone?.texture].filter(Boolean);
    return tokens.slice(0, 3).join(lang === 'EN' ? ', ' : '，') || (lang === 'EN' ? 'muted palette, controlled contrast, stable exposure' : '克制色彩，稳定曝光，明确光源');
};

const getSegmentPlan = (preset: DynamicTrailerDurationPreset) => {
    if (preset === 'highlight') {
        return [{ time: '0-12s', duration: 12, purposeCn: '高光片段', purposeEn: 'Hero moment' }];
    }
    if (preset === '30s') {
        return [
            { time: '0-10s', duration: 10, purposeCn: '开场钩子', purposeEn: 'Opening hook' },
            { time: '10-20s', duration: 10, purposeCn: '冲突显影', purposeEn: 'Conflict reveal' },
            { time: '20-30s', duration: 10, purposeCn: '高潮扣留', purposeEn: 'Climax withheld' }
        ];
    }
    if (preset === '60s') {
        return [
            { time: '0-12s', duration: 12, purposeCn: '开场世界', purposeEn: 'World opening' },
            { time: '12-24s', duration: 12, purposeCn: '人物欲望', purposeEn: 'Character desire' },
            { time: '24-36s', duration: 12, purposeCn: '对抗升级', purposeEn: 'Escalation' },
            { time: '36-48s', duration: 12, purposeCn: '代价画面', purposeEn: 'Cost image' },
            { time: '48-60s', duration: 12, purposeCn: '片名落点', purposeEn: 'Title landing' }
        ];
    }
    return [
        { time: '0-15s', duration: 15, purposeCn: '开场世界', purposeEn: 'World opening' },
        { time: '15-30s', duration: 15, purposeCn: '主角锁定', purposeEn: 'Subject lock' },
        { time: '30-45s', duration: 15, purposeCn: '关系裂缝', purposeEn: 'Relationship fracture' },
        { time: '45-60s', duration: 15, purposeCn: '动作爆点', purposeEn: 'Action peak' },
        { time: '60-75s', duration: 15, purposeCn: '静默代价', purposeEn: 'Silent cost' },
        { time: '75-90s', duration: 15, purposeCn: '片名与余震', purposeEn: 'Title and aftershock' }
    ];
};

const buildReferenceMap = (blueprint: CreativeBlueprint, lang: BlueprintLanguage) => {
    const assets = getActiveAssets(blueprint);
    const title = blueprint.narrative?.title || (lang === 'EN' ? 'Untitled Story' : '未命名故事');
    const characterRefs = assets.characters.slice(0, 3).map((asset, index) => `@图片${index + 1}：${getAssetName(asset, lang)}${lang === 'EN' ? ' as character identity reference' : '作为角色形象参考'}`);
    const sceneRefs = assets.scenes.slice(0, 3).map((asset, index) => `@图片${index + 1 + characterRefs.length}：${getAssetName(asset, lang)}${lang === 'EN' ? ' as scene reference' : '作为场景空间参考'}`);
    const propStart = characterRefs.length + sceneRefs.length;
    const propRefs = assets.props.slice(0, 2).map((asset, index) => `@图片${index + 1 + propStart}：${getAssetName(asset, lang)}${lang === 'EN' ? ' as prop reference' : '作为道具/符号参考'}`);
    const refs = [...characterRefs, ...sceneRefs, ...propRefs];
    const styleRef = lang === 'EN'
        ? `If the main poster for "${title}" has been generated, upload it as the next @Image and assign it only as visual style / poster-composition reference.`
        : `如果《${title}》主海报已经生成，将其作为下一个 @图片上传，只用于视觉风格 / 海报构图参考。`;
    return refs.length ? `${refs.join('\n')}\n${styleRef}` : styleRef;
};

const buildSegment = (
    blueprint: CreativeBlueprint,
    lang: BlueprintLanguage,
    preset: DynamicTrailerDurationPreset,
    plan: ReturnType<typeof getSegmentPlan>[number],
    index: number
): DynamicTrailerSegment => {
    const title = blueprint.narrative?.title || (lang === 'EN' ? 'Untitled Story' : '未命名故事');
    const logline = blueprint.narrative?.logline || (lang === 'EN' ? 'the story hook' : '故事核心钩子');
    const assets = getActiveAssets(blueprint);
    const characters = summarizeAssets(assets.characters, lang);
    const scenes = summarizeAssets(assets.scenes, lang);
    const props = summarizeAssets(assets.props, lang);
    const tone = getToneTokens(blueprint, lang);
    const purpose = lang === 'EN' ? plan.purposeEn : plan.purposeCn;
    const hasTitleBeat = index === getSegmentPlan(preset).length - 1;
    const firstFrame = lang === 'EN'
        ? `First frame: ${purpose}. Compose from the locked story world of "${title}", using ${characters} and ${scenes}. Start before the motion peak, with clear depth separation.`
        : `首帧：${purpose}。基于《${title}》的锁定故事世界构图，使用${characters}与${scenes}。动作开始前一刻，主体与背景有明确纵深分离。`;
    const lastFrame = lang === 'EN'
        ? `Last frame: hold the unresolved pressure of "${logline}". ${hasTitleBeat ? 'Leave a clean title-safe area for the final logo/title card.' : 'Do not resolve the scene; cut before full explanation.'}`
        : `尾帧：保留“${logline}”的未完成压力。${hasTitleBeat ? '为最终标题 Logo / 片名卡留下干净安全区。' : '不要解释完整，切在悬念前。'}`;

    const seedancePrompt = lang === 'EN'
        ? [
            `Seedance 2.0, Universal Reference mode, ${plan.duration}s, 16:9. Assign every uploaded reference one job before generation.`,
            `Subject/action: "${title}" trailer segment ${index + 1}, ${purpose}. Character identity follows ${characters}; scene space follows ${scenes}; symbolic object follows ${props}.`,
            `Motion: one primary action only, with ${plan.duration <= 10 ? '1-2' : '2-3'} major changes maximum. Start from the first-frame pose, build tension, then hold the final frame for 0.8s.`,
            `Camera: ${index % 2 === 0 ? 'slow dolly push from medium shot to close-up over the full clip' : 'locked horizon, stable tracking shot with one controlled reveal'}; no contradictory camera moves.`,
            `Style: ${tone}. Sound: low ambient bed, one clear impact or tonal swell at the turn, no random dialogue unless provided. Constraints: stable face and clothing, stable prop shape, no watermark, no extra on-screen text${hasTitleBeat ? ', except the final title/logo if supplied as reference' : ''}. 注意分镜编排。`
        ].join('\n')
        : [
            `Seedance 2.0，全能参考模式，${plan.duration}秒，16:9。生成前必须给每个上传参考图分配唯一用途。`,
            `主体/动作：《${title}》预告片段 ${index + 1}，${purpose}。角色形象服从${characters}；场景空间服从${scenes}；象征物服从${props}。`,
            `运动：只保留一个主要动作，最多${plan.duration <= 10 ? '1-2' : '2-3'}个主要变化。从首帧姿态开始，逐步加压，尾帧停留0.8秒。`,
            `镜头：${index % 2 === 0 ? '从中景到近景的缓慢推进，贯穿整段' : '锁定地平线的稳定跟拍，只做一次受控揭示'}；不要叠加互相矛盾的运镜。`,
            `风格：${tone}。声音：低频环境底噪，在转折点加入一次明确撞击或音色抬升，不随机生成对白。约束：脸部与服装稳定，道具形状稳定，无水印，无多余屏幕文字${hasTitleBeat ? '，除非使用最终片名/Logo参考' : ''}。注意分镜编排。`
        ].join('\n');

    return {
        id: `seg-${preset}-${index + 1}`,
        time: plan.time,
        duration: plan.duration,
        purpose,
        sourceAssets: lang === 'EN'
            ? `Characters: ${characters}\nScenes: ${scenes}\nProps: ${props}`
            : `角色：${characters}\n场景：${scenes}\n道具：${props}`,
        firstFramePrompt: firstFrame,
        lastFramePrompt: lastFrame,
        seedancePrompt
    };
};

const buildTrailerData = (blueprint: CreativeBlueprint, lang: BlueprintLanguage, durationPreset: DynamicTrailerDurationPreset = '60s'): DynamicTrailerData => {
    const title = blueprint.narrative?.title || (lang === 'EN' ? 'Untitled Story' : '未命名故事');
    const logline = blueprint.narrative?.logline || (lang === 'EN' ? 'No logline yet.' : '暂无一句话梗概。');
    const segments = getSegmentPlan(durationPreset).map((plan, index) => buildSegment(blueprint, lang, durationPreset, plan, index));

    return {
        durationPreset,
        strategy: lang === 'EN'
            ? `Trailer strategy for "${title}": sell the absence, not the full plot. Open with the world pressure, lock the main character image, reveal one conflict mechanism, then cut before explanation. Story hook: ${logline}`
            : `《${title}》动态预告策略：卖缺口，不卖完整剧情。先给世界压力，再锁定主角形象，揭示一个冲突机关，最后在解释前切断。故事钩子：${logline}`,
        referenceMap: buildReferenceMap(blueprint, lang),
        assemblyNotes: lang === 'EN'
            ? `Generate each Seedance clip separately at its listed duration. Re-upload the same character references every time. Use the main poster/title card from Visual Bible only as style or title reference. After generation: select best takes, cut in order, normalize exposure, add title card/logo, then mux final music/SFX.`
            : `每个 Seedance 片段按标注时长单独生成。每次都重新上传同一批角色参考图。视觉圣经里的主海报/片名卡只作为风格或标题参考。生成后：挑选最佳 take，按顺序剪辑，统一曝光，加入标题卡/Logo，最后合成音乐与音效。`,
        segments
    };
};

export const NarrativeDynamicTrailerView: React.FC<NarrativeDynamicTrailerViewProps> = ({
    blueprint,
    language,
    onUpdateBlueprint,
    themeAccent,
    themeBorder,
    theme
}) => {
    const defaultData = buildTrailerData(blueprint, language, blueprint.dynamicTrailerData?.durationPreset || '60s');
    const data = blueprint.dynamicTrailerData || defaultData;
    const panelClass = theme === 'retro'
        ? 'bg-transparent border-[var(--border-main)]'
        : `bg-zinc-900/30 ${themeBorder || 'border-zinc-800'}`;

    const updateData = (updates: Partial<DynamicTrailerData>) => {
        onUpdateBlueprint({
            ...blueprint,
            dynamicTrailerData: {
                ...data,
                ...updates
            }
        });
    };

    const updateSegment = (id: string, updates: Partial<DynamicTrailerSegment>) => {
        updateData({
            segments: data.segments.map(segment => segment.id === id ? { ...segment, ...updates } : segment)
        });
    };

    const regenerate = (durationPreset = data.durationPreset) => {
        onUpdateBlueprint({
            ...blueprint,
            dynamicTrailerData: buildTrailerData(blueprint, language, durationPreset)
        });
    };

    const exportText = [
        `# ${language === 'EN' ? 'Dynamic Trailer' : '动态预告'}｜${blueprint.narrative?.title || ''}`,
        `## ${language === 'EN' ? 'Strategy' : '预告策略'}`,
        data.strategy,
        `## ${language === 'EN' ? 'Reference Map' : '参考图映射'}`,
        data.referenceMap,
        ...data.segments.flatMap((segment, index) => [
            `## ${language === 'EN' ? 'Segment' : '片段'} ${index + 1}｜${segment.time}｜${segment.purpose}`,
            `### ${language === 'EN' ? 'Source Assets' : '引用资产'}\n${segment.sourceAssets}`,
            `### ${language === 'EN' ? 'First Frame' : '首帧'}\n${segment.firstFramePrompt}`,
            `### ${language === 'EN' ? 'Last Frame' : '尾帧'}\n${segment.lastFramePrompt}`,
            `### Seedance\n${segment.seedancePrompt}`
        ]),
        `## ${language === 'EN' ? 'Assembly Notes' : '剪辑合成备注'}`,
        data.assemblyNotes
    ].join('\n\n');

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-40">
            <section className={`border ${panelClass} p-8 relative overflow-hidden`}>
                <div className="absolute right-8 top-8 opacity-5 pointer-events-none">
                    <Film size={170} />
                </div>
                <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                    <div className="space-y-4 max-w-3xl">
                        <div className={`text-[10px] font-black uppercase tracking-[0.28em] ${theme === 'retro' ? 'text-[#8B261D]' : themeAccent}`}>
                            Seedance 2.0 Pipeline
                        </div>
                        <h2 className={`text-4xl md:text-5xl font-serif font-bold tracking-tight ${theme === 'retro' ? 'text-black' : 'text-white'}`}>
                            {language === 'EN' ? 'Dynamic Trailer' : '动态预告'}
                        </h2>
                        <textarea
                            value={data.strategy}
                            onChange={(event) => updateData({ strategy: event.target.value })}
                            rows={5}
                            className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-sm leading-relaxed custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/80 placeholder-[#8B261D]/30' : 'text-zinc-300 placeholder-zinc-600'}`}
                        />
                    </div>
                    <div className="space-y-3 shrink-0">
                        <div className="mist-story-view-toggle" role="tablist" aria-label={language === 'EN' ? 'Trailer duration' : '预告时长'}>
                            {durationOptions.map(option => (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={data.durationPreset === option.id ? 'is-active' : ''}
                                    onClick={() => regenerate(option.id)}
                                >
                                    {language === 'EN' ? option.en : option.cn}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 justify-end">
                            <button
                                onClick={() => regenerate()}
                                className="mist-story-header-action"
                                title={language === 'EN' ? 'Regenerate trailer pipeline' : '重新生成预告片管线'}
                            >
                                <RefreshCw size={14} />
                                <span>{language === 'EN' ? 'REBUILD' : '重新生成'}</span>
                            </button>
                            <CopyButton text={exportText} label={language === 'EN' ? 'COPY ALL' : '复制全部'} theme={theme} className="mist-story-header-action" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6">
                <aside className="space-y-5">
                    <section className={`border ${panelClass} p-5`}>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles size={15} className={theme === 'retro' ? 'text-[#8B261D]' : themeAccent} />
                            <h3 className={`text-xs font-black uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-100'}`}>
                                {language === 'EN' ? 'Reference Map' : '参考图映射'}
                            </h3>
                        </div>
                        <textarea
                            value={data.referenceMap}
                            onChange={(event) => updateData({ referenceMap: event.target.value })}
                            rows={12}
                            className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-xs leading-loose custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/78 placeholder-[#8B261D]/30' : 'text-zinc-400 placeholder-zinc-700'}`}
                        />
                    </section>

                    <section className={`border ${panelClass} p-5`}>
                        <div className="flex items-center gap-2 mb-4">
                            <Music2 size={15} className={theme === 'retro' ? 'text-[#8B261D]' : themeAccent} />
                            <h3 className={`text-xs font-black uppercase tracking-[0.2em] ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-100'}`}>
                                {language === 'EN' ? 'Assembly Notes' : '剪辑合成备注'}
                            </h3>
                        </div>
                        <textarea
                            value={data.assemblyNotes}
                            onChange={(event) => updateData({ assemblyNotes: event.target.value })}
                            rows={10}
                            className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-xs leading-loose custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/78 placeholder-[#8B261D]/30' : 'text-zinc-400 placeholder-zinc-700'}`}
                        />
                    </section>
                </aside>

                <div className="space-y-5">
                    {data.segments.map((segment, index) => (
                        <section key={segment.id} className={`border ${panelClass} p-5`}>
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 border flex items-center justify-center font-mono text-sm font-black ${theme === 'retro' ? 'border-[#8B261D]/30 text-[#8B261D]' : 'border-zinc-700 text-zinc-100'}`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div>
                                        <div className={`text-lg font-serif font-bold ${theme === 'retro' ? 'text-black' : 'text-white'}`}>{segment.purpose}</div>
                                        <div className={`text-[10px] font-mono uppercase tracking-[0.2em] mt-1 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'}`}>
                                            {segment.time} · {segment.duration}s · Seedance clip
                                        </div>
                                    </div>
                                </div>
                                <CopyButton text={segment.seedancePrompt} label="Seedance" theme={theme} className="mist-story-header-action" />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                                <div className={`border p-3 ${theme === 'retro' ? 'border-[#8B261D]/18' : 'border-zinc-800'}`}>
                                    <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] mb-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'}`}>
                                        <User size={12} />
                                        <MapPin size={12} />
                                        <Box size={12} />
                                        {language === 'EN' ? 'Assets' : '引用资产'}
                                    </div>
                                    <textarea
                                        value={segment.sourceAssets}
                                        onChange={(event) => updateSegment(segment.id, { sourceAssets: event.target.value })}
                                        rows={5}
                                        className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-xs leading-relaxed custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/78' : 'text-zinc-400'}`}
                                    />
                                </div>
                                <div className={`border p-3 ${theme === 'retro' ? 'border-[#8B261D]/18' : 'border-zinc-800'}`}>
                                    <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] mb-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'}`}>
                                        <ImageIcon size={12} />
                                        {language === 'EN' ? 'First Frame' : '首帧'}
                                    </div>
                                    <textarea
                                        value={segment.firstFramePrompt}
                                        onChange={(event) => updateSegment(segment.id, { firstFramePrompt: event.target.value })}
                                        rows={5}
                                        className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-xs leading-relaxed custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/78' : 'text-zinc-400'}`}
                                    />
                                </div>
                                <div className={`border p-3 ${theme === 'retro' ? 'border-[#8B261D]/18' : 'border-zinc-800'}`}>
                                    <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] mb-2 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'}`}>
                                        <Timer size={12} />
                                        {language === 'EN' ? 'Last Frame' : '尾帧'}
                                    </div>
                                    <textarea
                                        value={segment.lastFramePrompt}
                                        onChange={(event) => updateSegment(segment.id, { lastFramePrompt: event.target.value })}
                                        rows={5}
                                        className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-xs leading-relaxed custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/78' : 'text-zinc-400'}`}
                                    />
                                </div>
                            </div>

                            <div className={`border p-4 ${theme === 'retro' ? 'border-[#8B261D]/18 bg-[#8B261D]/[0.015]' : 'border-zinc-800 bg-black/30'}`}>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] ${theme === 'retro' ? 'text-[#8B261D]' : themeAccent}`}>
                                        <Camera size={13} />
                                        <Clapperboard size={13} />
                                        Seedance Prompt
                                    </div>
                                    <CopyButton text={segment.seedancePrompt} theme={theme} iconOnly className="mist-story-copy-icon" />
                                </div>
                                <textarea
                                    value={segment.seedancePrompt}
                                    onChange={(event) => updateSegment(segment.id, { seedancePrompt: event.target.value })}
                                    rows={9}
                                    className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-sm leading-relaxed custom-scrollbar font-mono ${theme === 'retro' ? 'text-[#3D1A16]/86 placeholder-[#8B261D]/30' : 'text-zinc-200 placeholder-zinc-700'}`}
                                />
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};
