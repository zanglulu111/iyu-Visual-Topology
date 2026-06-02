import React from 'react';
import { CreativeBlueprint, BlueprintLanguage, MetonymyAssetInput, NarrativeVisualBibleData } from '../../types';
import { CopyButton } from '../SharedBlueprintComponents';
import { BookOpen, ImageIcon, Layers, Palette, Type, RefreshCw, LayoutTemplate } from 'lucide-react';

interface NarrativeVisualBibleViewProps {
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

const getAssetName = (asset: MetonymyAssetInput, lang: BlueprintLanguage) => {
    return lang === 'EN' ? (asset.nameEn || asset.name) : (asset.name || asset.nameEn || '');
};

const describeAssets = (assets: MetonymyAssetInput[], lang: BlueprintLanguage) => {
    const names = assets.map(asset => getAssetName(asset, lang)).filter(Boolean);
    return names.length ? names.join('、') : (lang === 'EN' ? 'not locked yet' : '尚未锁定');
};

const getActiveAssets = (blueprint: CreativeBlueprint) => {
    const metonymyData = blueprint.metonymyData;
    const presets = metonymyData?.stylePresets || [];
    const activePreset = presets.find(preset => preset.id === metonymyData?.activePresetId) || presets[0];
    return activePreset?.assets || emptyAssets;
};

const getToneLine = (blueprint: CreativeBlueprint, lang: BlueprintLanguage) => {
    const metonymyData = blueprint.metonymyData;
    const presets = metonymyData?.stylePresets || [];
    const activePreset = presets.find(preset => preset.id === metonymyData?.activePresetId) || presets[0];
    const tone = activePreset?.toneAnalysis;
    const line = lang === 'EN'
        ? [tone?.styleEn || tone?.style, tone?.lightingEn || tone?.lighting, tone?.textureEn || tone?.texture, tone?.cameraEn || tone?.camera].filter(Boolean).join('; ')
        : [tone?.style, tone?.lighting, tone?.texture, tone?.camera].filter(Boolean).join('；');
    return line || (lang === 'EN' ? 'derive from the narrative and locked asset references' : '从叙事文本与已锁定资产中提炼');
};

const buildDefaultVisualBibleData = (blueprint: CreativeBlueprint, lang: BlueprintLanguage): NarrativeVisualBibleData => {
    const title = blueprint.narrative?.title || (lang === 'EN' ? 'Untitled Story' : '未命名故事');
    const logline = blueprint.narrative?.logline || (lang === 'EN' ? 'No logline yet.' : '暂无一句话梗概。');
    const assets = getActiveAssets(blueprint);
    const characters = describeAssets(assets.characters, lang);
    const scenes = describeAssets(assets.scenes, lang);
    const props = describeAssets(assets.props, lang);
    const tone = getToneLine(blueprint, lang);

    if (lang === 'EN') {
        return {
            positioning: `Title: ${title}\nVisual promise: turn the story hook into one recognizable campaign image.\nStory hook: ${logline}\nCore cast: ${characters}\nCore spaces: ${scenes}\nCore objects: ${props}\nTone basis: ${tone}`,
            mainPosterPrompt: `Create the main key art poster for "${title}". Use the locked character assets (${characters}), the locked world spaces (${scenes}), and the symbolic props (${props}). The composition should read as one decisive image: foreground subject, pressure-bearing space, one memorable visual motif. Tone: ${tone}. Leave clean negative space for title placement; no random text, no watermark, no collage frame.`,
            seriesPosterPrompt: `Create a unified series of 3 posters for "${title}": character poster, location poster, symbolic-object poster. Keep the same color logic, contrast, typography-safe margins, and recurring visual motif. Character assets: ${characters}. Location assets: ${scenes}. Prop assets: ${props}. Each poster must feel like the same story campaign, not separate illustrations.`,
            titleLogoPrompt: `Design a title logo for "${title}". The logo should carry the story pressure without turning into a decorative emblem. Use custom lettering, clear silhouette, strong readability at poster and thumbnail size, and material cues derived from: ${tone}. No extra slogans, no mockup background, transparent or clean plain background preferred.`,
            titleCardPrompt: `Design a film title card for "${title}" using the poster visual system. Wide 16:9 frame, title centered or strategically offset, enough dark/light separation for opening credits. Integrate the visual motif through texture, light, or negative space rather than illustration clutter. Tone: ${tone}.`,
            socialCoverPrompt: `Create social cover images for "${title}" in 16:9 and 9:16. Use the main poster motif and keep the title readable after mobile crop. Preserve character and asset consistency: ${characters}; ${scenes}; ${props}. No extra text beyond the title unless explicitly added later.`,
            visualRules: `Palette: inherit from the locked tone and poster tests.\nTypography: one title logo system, one small-credit system.\nComposition: one main subject, one pressure-bearing environment, one symbolic object at most.\nAsset rule: character, scene, and prop shapes follow the asset setting page; this page only packages them.\nText rule: title/logo only; no explanatory labels inside artwork.`
        };
    }

    return {
        positioning: `片名：${title}\n视觉承诺：把故事钩子压缩成一个可被记住的作品级主视觉。\n故事钩子：${logline}\n核心角色：${characters}\n核心场景：${scenes}\n核心道具：${props}\n影调依据：${tone}`,
        mainPosterPrompt: `为《${title}》生成主视觉海报。使用已锁定角色资产（${characters}）、已锁定空间资产（${scenes}）和象征性道具（${props}）。构图必须是一张决定性的作品主图：前景主体、承压空间、一个可记忆的视觉母题。影调依据：${tone}。预留片名排版空间；不要随机文字、水印、拼贴边框。`,
        seriesPosterPrompt: `为《${title}》生成 3 张统一系列海报：角色海报、场景海报、象征物海报。保持同一套色彩逻辑、光比、标题安全区和重复视觉母题。角色资产：${characters}。场景资产：${scenes}。道具资产：${props}。每张都像同一部作品的宣传系统，不像三张无关插画。`,
        titleLogoPrompt: `为《${title}》设计标题 Logo。Logo 要承载故事压力，但不要变成装饰徽章。使用定制字形，轮廓清晰，在海报与缩略图尺寸都可读，材质线索来自：${tone}。不要额外标语，不要样机背景，优先透明或干净纯底。`,
        titleCardPrompt: `为《${title}》设计片头标题卡。16:9 横幅，片名居中或策略性偏置，保留开场字幕的明暗分离。通过质感、光线或留白嵌入视觉母题，不要堆满插画细节。影调依据：${tone}。`,
        socialCoverPrompt: `为《${title}》生成社媒封面图，包含 16:9 与 9:16 两种裁切。沿用主海报母题，保证移动端裁切后片名仍清晰。保持角色与资产一致性：${characters}；${scenes}；${props}。除片名外不要出现额外文字。`,
        visualRules: `色彩：从锁定影调与海报测试中继承。\n字体：一套片名 Logo 系统，一套小字演职员系统。\n构图：最多一个主主体、一个承压环境、一个象征物。\n资产规则：角色、场景、道具外观服从“资产设定”页；本页只做作品级包装。\n文字规则：只允许片名/Logo，不在画面里写解释性概念标签。`
    };
};

export const NarrativeVisualBibleView: React.FC<NarrativeVisualBibleViewProps> = ({
    blueprint,
    language,
    onUpdateBlueprint,
    themeAccent,
    theme
}) => {
    const generatedData = buildDefaultVisualBibleData(blueprint, language);
    const data = blueprint.visualBibleData || generatedData;
    const assets = getActiveAssets(blueprint);
    const panelClass = theme === 'retro'
        ? 'bg-transparent border-[var(--border-main)]'
        : 'bg-zinc-900/30 border-zinc-800';

    const updateField = (field: keyof NarrativeVisualBibleData, value: string) => {
        onUpdateBlueprint({
            ...blueprint,
            visualBibleData: {
                ...data,
                [field]: value
            }
        });
    };

    const regenerate = () => {
        onUpdateBlueprint({
            ...blueprint,
            visualBibleData: generatedData
        });
    };

    const exportText = [
        `# ${language === 'EN' ? 'Visual Bible' : '视觉圣经'}｜${blueprint.narrative?.title || ''}`,
        data.positioning,
        `## ${language === 'EN' ? 'Main Poster' : '主视觉海报'}`,
        data.mainPosterPrompt,
        `## ${language === 'EN' ? 'Poster Series' : '系列海报'}`,
        data.seriesPosterPrompt,
        `## ${language === 'EN' ? 'Title Logo' : '标题 Logo'}`,
        data.titleLogoPrompt,
        `## ${language === 'EN' ? 'Title Card' : '片头标题卡'}`,
        data.titleCardPrompt,
        `## ${language === 'EN' ? 'Social Covers' : '社媒封面'}`,
        data.socialCoverPrompt,
        `## ${language === 'EN' ? 'Rules' : '视觉规则'}`,
        data.visualRules
    ].join('\n\n');

    const promptCards: Array<{
        key: keyof NarrativeVisualBibleData;
        title: string;
        icon: React.ElementType;
        rows: number;
    }> = [
        { key: 'mainPosterPrompt', title: language === 'EN' ? 'Main Poster' : '主视觉海报', icon: ImageIcon, rows: 7 },
        { key: 'seriesPosterPrompt', title: language === 'EN' ? 'Poster Series' : '系列海报', icon: Layers, rows: 7 },
        { key: 'titleLogoPrompt', title: language === 'EN' ? 'Title Logo' : '标题 Logo', icon: Type, rows: 6 },
        { key: 'titleCardPrompt', title: language === 'EN' ? 'Title Card' : '片头标题卡', icon: LayoutTemplate, rows: 6 },
        { key: 'socialCoverPrompt', title: language === 'EN' ? 'Social Covers' : '社媒封面', icon: Palette, rows: 6 }
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-40">
            <section className={`border ${panelClass} p-8 relative overflow-hidden`}>
                <div className="absolute right-8 top-8 opacity-5 pointer-events-none">
                    <BookOpen size={160} />
                </div>
                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-3 max-w-3xl">
                        <div className={`text-[10px] font-black uppercase tracking-[0.28em] ${theme === 'retro' ? 'text-[#8B261D]' : themeAccent}`}>
                            {language === 'EN' ? 'Story Campaign System' : '作品级视觉包装系统'}
                        </div>
                        <h2 className={`text-4xl md:text-5xl font-serif font-bold tracking-tight ${theme === 'retro' ? 'text-black' : 'text-white'}`}>
                            {language === 'EN' ? 'Visual Bible' : '视觉圣经'}
                        </h2>
                        <textarea
                            value={data.positioning}
                            onChange={(event) => updateField('positioning', event.target.value)}
                            rows={6}
                            className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-sm leading-relaxed custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/80 placeholder-[#8B261D]/30' : 'text-zinc-300 placeholder-zinc-600'}`}
                        />
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={regenerate}
                            className="mist-story-header-action"
                            title={language === 'EN' ? 'Regenerate from story and assets' : '从故事与资产重新生成'}
                        >
                            <RefreshCw size={14} />
                            <span>{language === 'EN' ? 'REBUILD' : '重新生成'}</span>
                        </button>
                        <CopyButton text={exportText} label={language === 'EN' ? 'COPY ALL' : '复制全部'} theme={theme} className="mist-story-header-action" />
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {promptCards.map(card => {
                        const Icon = card.icon;
                        return (
                            <section key={card.key} className={`border ${panelClass} p-5 flex flex-col gap-4 min-h-[260px]`}>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <Icon size={16} className={theme === 'retro' ? 'text-[#8B261D]' : themeAccent} />
                                        <h3 className={`text-xs font-black uppercase tracking-[0.22em] ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-100'}`}>
                                            {card.title}
                                        </h3>
                                    </div>
                                    <CopyButton text={String(data[card.key] || '')} theme={theme} iconOnly className="mist-story-copy-icon" />
                                </div>
                                <textarea
                                    value={String(data[card.key] || '')}
                                    onChange={(event) => updateField(card.key, event.target.value)}
                                    rows={card.rows}
                                    className={`flex-1 w-full bg-transparent border-none focus:outline-none resize-none p-0 text-sm leading-relaxed custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/82 placeholder-[#8B261D]/30' : 'text-zinc-300 placeholder-zinc-700'}`}
                                />
                            </section>
                        );
                    })}
                </div>

                <aside className="space-y-5">
                    <section className={`border ${panelClass} p-5`}>
                        <div className="flex items-center justify-between gap-3 mb-4">
                            <h3 className={`text-xs font-black uppercase tracking-[0.22em] ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-100'}`}>
                                {language === 'EN' ? 'Visual Rules' : '视觉规则'}
                            </h3>
                            <CopyButton text={data.visualRules} theme={theme} iconOnly className="mist-story-copy-icon" />
                        </div>
                        <textarea
                            value={data.visualRules}
                            onChange={(event) => updateField('visualRules', event.target.value)}
                            rows={14}
                            className={`w-full bg-transparent border-none focus:outline-none resize-none p-0 text-xs leading-loose custom-scrollbar ${theme === 'retro' ? 'text-[#3D1A16]/78 placeholder-[#8B261D]/30' : 'text-zinc-400 placeholder-zinc-700'}`}
                        />
                    </section>

                    <section className={`border ${panelClass} p-5`}>
                        <div className={`text-[10px] font-black uppercase tracking-[0.22em] mb-4 ${theme === 'retro' ? 'text-[#8B261D]' : themeAccent}`}>
                            {language === 'EN' ? 'Locked Sources' : '已锁定来源'}
                        </div>
                        <div className="space-y-4 text-xs leading-relaxed">
                            {[
                                [language === 'EN' ? 'Characters' : '角色', describeAssets(assets.characters, language)],
                                [language === 'EN' ? 'Scenes' : '场景', describeAssets(assets.scenes, language)],
                                [language === 'EN' ? 'Props' : '道具', describeAssets(assets.props, language)],
                                [language === 'EN' ? 'Tone' : '影调', getToneLine(blueprint, language)]
                            ].map(([label, value]) => (
                                <div key={label} className={`border-b pb-3 last:border-b-0 last:pb-0 ${theme === 'retro' ? 'border-[#8B261D]/14' : 'border-zinc-800'}`}>
                                    <div className={`font-bold uppercase tracking-[0.16em] mb-1 ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'}`}>{label}</div>
                                    <div className={theme === 'retro' ? 'text-[#3D1A16]/76' : 'text-zinc-300'}>{value}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
};
