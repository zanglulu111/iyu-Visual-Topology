import React from 'react';
import { ChevronRight, Database, Lightbulb, List, ListChecks, Scale, ScanLine } from 'lucide-react';
import { BlueprintLanguage, NarrativeFieldState, WorldLawConfig } from '../types';
import {
    AESTHETIC_ENGINE_BLOCKS,
    COMMERCIAL_ENGINE_BLOCKS,
    COMM_SKIN_BLOCKS,
    EXPERIMENTAL_ENGINE_BLOCKS,
    EXPERIMENTAL_SKIN_BLOCKS,
    NARRATIVE_ENGINE_BLOCKS,
    TRAILER_ENGINE_BLOCKS,
    TRAILER_SKIN_BLOCKS
} from '../constants';
import { ALL_SKIN_BLOCKS } from '../data/narrative/skin_libraries';
import { getWorldLawDisplay } from '../services/worldLaw';

interface EngineParamsOverviewProps {
    fieldState?: NarrativeFieldState;
    language: BlueprintLanguage;
    theme: string;
    accentClass: string;
    visionInput?: string;
    visionAnalysis?: string;
    worldLawConfig?: WorldLawConfig;
}

const allBlocks = [
    ...NARRATIVE_ENGINE_BLOCKS,
    ...COMMERCIAL_ENGINE_BLOCKS,
    ...EXPERIMENTAL_ENGINE_BLOCKS,
    ...AESTHETIC_ENGINE_BLOCKS,
    ...TRAILER_ENGINE_BLOCKS,
    ...ALL_SKIN_BLOCKS,
    ...COMM_SKIN_BLOCKS,
    ...EXPERIMENTAL_SKIN_BLOCKS,
    ...TRAILER_SKIN_BLOCKS
];

const surfacePrefixes = ['skin_', 'comm_skin_', 'exp_skin_', 'trl_skin_'];

const isSurfaceBlock = (id: string) => (
    surfacePrefixes.some(prefix => id.startsWith(prefix)) || id === 'sur10x'
);

const getBlockName = (id: string, language: BlueprintLanguage) => {
    const block = allBlocks.find(item => item.id === id);
    if (block) return language === 'EN' ? block.enName : block.name;
    if (id === 'skin_genre') return language === 'EN' ? 'GENRE' : '类型基因';
    if (id === 'skin_animation_genre') return language === 'EN' ? 'ANIMATION GENRE' : '动画基因';
    if (id === 'skin_year_exact') return language === 'EN' ? 'YEAR' : '年代';
    if (id === 'skin_country_exact') return language === 'EN' ? 'COUNTRY' : '国家';
    return id;
};

const cleanTag = (value: string) => {
    if (!value) return '';
    return value.split('(')[0].trim();
};

const getWorldLawLabel = (worldLawConfig: WorldLawConfig | undefined, language: BlueprintLanguage) => {
    if (!worldLawConfig) return null;
    return getWorldLawDisplay(worldLawConfig, language).fullLabel;
};

const borderClassForAccent = (accentClass: string) => {
    return 'border-l-[var(--mist-active-accent)]';
};

const tone = (theme: string, kind: 'engine' | 'surface', accentClass: string) => {
    if (theme === 'retro') {
        return kind === 'engine'
            ? {
                border: 'border-l-[#8B261D]',
                header: 'bg-[#8B261D]/5',
                icon: 'text-[#8B261D]',
                badge: 'bg-[#8B261D]/10 text-[#8B261D]',
                chip: 'bg-white/70 text-[#8B261D] ring-1 ring-[#8B261D]/20',
                row: 'bg-white/60 border-[#8B261D]/14',
                rowText: 'text-[#3D1A16]',
                muted: 'text-[#8B261D]/45'
            }
            : {
                border: 'border-l-[#8B261D]',
                header: 'bg-[#8B261D]/5',
                icon: 'text-[#8B261D]',
                badge: 'bg-[#8B261D]/10 text-[#8B261D]',
                chip: 'bg-white/70 text-[#8B261D] ring-1 ring-[#8B261D]/20',
                row: 'bg-white/60 border-[#8B261D]/14',
                rowText: 'text-[#3D1A16]',
                muted: 'text-[#8B261D]/45'
            };
    }

    return kind === 'engine'
        ? {
            border: borderClassForAccent(accentClass),
            header: 'bg-white/[0.025]',
            icon: accentClass,
            badge: `bg-zinc-900 ${accentClass}`,
            chip: `bg-black/35 ${accentClass} ring-1 ring-white/10`,
            row: 'bg-black/35 border-zinc-800',
            rowText: 'text-zinc-100',
            muted: 'text-zinc-600'
        }
        : {
            border: 'border-l-emerald-400',
            header: 'bg-emerald-400/[0.035]',
            icon: 'text-emerald-300',
            badge: 'bg-zinc-900 text-emerald-300',
            chip: 'bg-black/35 text-emerald-300 ring-1 ring-white/10',
            row: 'bg-black/35 border-zinc-800',
            rowText: 'text-zinc-100',
            muted: 'text-zinc-600'
        };
};

export const EngineParamsOverview: React.FC<EngineParamsOverviewProps> = ({
    fieldState,
    language,
    theme,
    accentClass,
    visionInput,
    visionAnalysis,
    worldLawConfig
}) => {
    const worldLawLabel = getWorldLawLabel(worldLawConfig, language);
    const entries = Object.entries(fieldState || {})
        .map(([id, rawValues]) => ({
            id,
            label: getBlockName(id, language),
            values: (rawValues || []).map(String).map(cleanTag).filter(Boolean),
            kind: isSurfaceBlock(id) ? 'surface' as const : 'engine' as const
        }))
        .filter(entry => entry.values.length > 0);
    const surfaceEntries = [
        ...entries.filter(entry => entry.kind === 'surface'),
        ...(worldLawLabel ? [{
            id: '__world_law',
            label: language === 'EN' ? 'World Law' : '世界法则',
            values: [worldLawLabel],
            kind: 'surface' as const
        }] : [])
    ];

    const groups = [
        {
            id: 'engine',
            title: language === 'EN' ? 'Engine Parameters' : '引擎参数',
            eyebrow: language === 'EN' ? 'Director grammar / scene logic' : '导演语法 / 场景裁决',
            icon: Database,
            kind: 'engine' as const,
            items: entries.filter(entry => entry.kind === 'engine')
        },
        {
            id: 'surface',
            title: language === 'EN' ? 'Surface Settings' : '表层设定',
            eyebrow: language === 'EN' ? 'Skin layer / world law' : '表层皮肤 / 世界法则',
            icon: worldLawLabel ? Scale : ListChecks,
            kind: 'surface' as const,
            items: surfaceEntries
        }
    ].filter(group => group.items.length > 0);

    if (entries.length === 0 && !worldLawLabel && !visionInput && !visionAnalysis) {
        return (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-zinc-600 opacity-50">
                <List size={48} />
                <span className="text-xs uppercase tracking-widest">
                    {language === 'EN' ? 'No parameters active' : '暂无激活参数'}
                </span>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {(visionInput || visionAnalysis) && (
                <div className={`space-y-4 border-b pb-6 ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800'}`}>
                    {visionInput && (
                        <div className={`flex flex-col gap-2 rounded-lg border border-dashed p-4 ${theme === 'retro' ? 'bg-white/50 border-[#8B261D]/20' : 'bg-zinc-900/30 border-zinc-700/50'}`}>
                            <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-[#8B261D]/55' : 'text-zinc-500'}`}>
                                <Lightbulb size={12} className={accentClass} />
                                {language === 'EN' ? 'Text Seed' : '文本种子'}
                            </span>
                            <p className={`whitespace-pre-wrap font-serif text-sm leading-relaxed ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-300'}`}>{visionInput}</p>
                        </div>
                    )}
                    {visionAnalysis && (
                        <div className={`flex flex-col gap-2 rounded-lg border border-dashed p-4 ${theme === 'retro' ? 'bg-white/50 border-[#8B261D]/20' : 'bg-zinc-900/30 border-zinc-700/50'}`}>
                            <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${theme === 'retro' ? 'text-[#8B261D]/55' : 'text-zinc-500'}`}>
                                <ScanLine size={12} className={accentClass} />
                                {language === 'EN' ? 'Seed Decoding' : '种子解码结果'}
                            </span>
                            <p className={`whitespace-pre-wrap font-mono text-xs leading-relaxed ${theme === 'retro' ? 'text-[#3D1A16]/70' : 'text-zinc-400'}`}>{visionAnalysis}</p>
                        </div>
                    )}
                </div>
            )}

            {groups.map(group => {
                const palette = tone(theme, group.kind, accentClass);
                const Icon = group.icon;

                return (
                    <section
                        key={group.id}
                        className={`overflow-hidden rounded-xl border border-l-4 ${theme === 'retro' ? 'bg-white/40 border-[#8B261D]/10' : 'bg-zinc-950/50 border-zinc-800/80'} ${palette.border}`}
                    >
                        <div className={`mist-engine-params-group-header flex items-center gap-3 border-b px-3 py-4 ${palette.header} ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800/80'}`}>
                            <ChevronRight size={15} className={`mist-engine-params-header-chevron ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-300'}`} />
                            <Icon size={17} className={palette.icon} />
                            <div className="min-w-0 flex-1">
                                <div className={`mist-engine-params-title truncate text-base font-black tracking-wider ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-white'}`}>{group.title}</div>
                                <div className={`mist-engine-params-eyebrow mt-1 truncate text-[10px] font-bold uppercase tracking-wider ${theme === 'retro' ? 'text-black/35' : 'text-zinc-600'}`}>{group.eyebrow}</div>
                            </div>
                            <span className={`hidden text-[10px] font-bold xl:inline ${palette.muted}`}>
                                {language === 'EN' ? 'Read only' : '已锁定'}
                            </span>
                        </div>

                        <div className="space-y-2 p-3">
                            {group.items.map(item => (
                                <div key={item.id} className={`flex min-h-14 items-center gap-3 rounded-lg border px-3 py-2.5 ${palette.row}`}>
                                    <ChevronRight size={14} className={theme === 'retro' ? 'text-[#3D1A16]/70' : 'text-zinc-300'} />
                                    <div className={`w-[34%] min-w-[116px] shrink-0 truncate text-sm font-black ${palette.rowText}`} title={item.label}>
                                        {item.label}
                                    </div>
                                    <div className="flex min-w-0 flex-1 flex-wrap gap-2">
                                        {item.values.map(value => (
                                            <span key={`${item.id}-${value}`} className={`rounded-full px-2.5 py-1 text-[12px] font-black leading-none ${palette.chip}`} title={value}>
                                                【{value}】
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};
