import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Check,
    ChevronDown,
    ChevronRight,
    Clapperboard,
    Copy,
    Database,
    Edit3,
    Eye,
    Hash,
    Image as ImageIcon,
    LayoutGrid,
    ListChecks,
    Mic2,
    Redo2,
    RotateCcw,
    Search,
    Terminal,
    ToggleLeft,
    Type,
    Undo2,
    X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { DriverType } from '../types';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';

export type XRayPayload = string | number | boolean | Record<string, unknown> | unknown[] | null | undefined;

export type XRaySourceKind =
    | 'text'
    | 'textarea'
    | 'select'
    | 'chips'
    | 'number'
    | 'toggle'
    | 'image'
    | 'json'
    | 'libraryBlock'
    | 'readonly';

type XRayTone = 'director' | 'audio' | 'frame' | 'engine' | 'surface' | 'text' | 'neutral';

export interface XRaySourceOption {
    label: string;
    value: string | number | boolean;
    description?: string;
}

export interface XRaySourceItem {
    id: string;
    label: string;
    kind?: XRaySourceKind;
    value: unknown;
    options?: XRaySourceOption[];
    editable?: boolean;
    description?: string;
    sourcePath?: string[];
    maxSelected?: number;
    placeholder?: string;
    alwaysShow?: boolean;
    driverType?: DriverType;
    inlineOptions?: boolean;
    tone?: XRayTone;
    disabled?: boolean;
}

export interface XRaySourceGroup {
    id: string;
    title: string;
    description?: string;
    tone?: XRayTone;
    items: XRaySourceItem[];
}

type XRayDraftValues = Record<string, unknown>;
type XRayHistoryEntry = {
    values: XRayDraftValues;
    groups: XRaySourceGroup[];
};

interface AdminXRayButtonProps {
    isAdmin?: boolean;
    lang?: 'CN' | 'EN';
    title?: string;
    payload?: XRayPayload;
    getPayload?: () => XRayPayload;
    sources?: XRaySourceGroup[] | (() => XRaySourceGroup[]);
    buildPayload?: (values: XRayDraftValues, groups: XRaySourceGroup[]) => XRayPayload;
    className?: string;
    buttonClassName?: string;
    iconSize?: number;
    disabled?: boolean;
}

interface XRayInspectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang?: 'CN' | 'EN';
    title?: string;
    payload?: XRayPayload;
    getPayload?: () => XRayPayload;
    sources?: XRaySourceGroup[] | (() => XRaySourceGroup[]);
    buildPayload?: (values: XRayDraftValues, groups: XRaySourceGroup[]) => XRayPayload;
}

const formatPayload = (payload: XRayPayload | unknown): string => {
    if (payload == null) return '';
    if (typeof payload === 'string') return payload;
    try {
        return JSON.stringify(payload, null, 2);
    } catch {
        return String(payload);
    }
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
};

const cloneGroups = (groups: XRaySourceGroup[]): XRaySourceGroup[] => {
    return groups.map(group => ({
        ...group,
        items: group.items.map(item => ({
            ...item,
            options: item.options ? [...item.options] : undefined,
            sourcePath: item.sourcePath ? [...item.sourcePath] : undefined
        }))
    }));
};

const cloneDraftValues = (values: XRayDraftValues): XRayDraftValues => {
    try {
        return structuredClone(values);
    } catch {
        return JSON.parse(JSON.stringify(values));
    }
};

const makeValues = (groups: XRaySourceGroup[]): XRayDraftValues => {
    return groups.reduce<XRayDraftValues>((acc, group) => {
        group.items.forEach(item => {
            acc[item.id] = item.value;
        });
        return acc;
    }, {});
};

const inferKind = (value: unknown): XRaySourceKind => {
    if (typeof value === 'boolean') return 'toggle';
    if (typeof value === 'number') return 'number';
    if (Array.isArray(value)) return value.every(v => ['string', 'number', 'boolean'].includes(typeof v)) ? 'chips' : 'json';
    if (typeof value === 'string') {
        if (value.startsWith('data:image') || /^https?:\/\/.*\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(value)) return 'image';
        return value.length > 160 || value.includes('\n') ? 'textarea' : 'text';
    }
    if (isRecord(value)) return 'json';
    return 'readonly';
};

const labelizeKey = (key: string): string => {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^./, c => c.toUpperCase());
};

const categoryForKey = (key: string, value: unknown, lang: 'CN' | 'EN') => {
    const lower = key.toLowerCase();
    if (lower.includes('text') || lower.includes('source') || lower.includes('script') || lower.includes('synopsis') || lower.includes('content') || lower.includes('prompt')) {
        return { id: 'text', title: lang === 'EN' ? 'Text Sources' : '文本源' };
    }
    if (lower.includes('asset') || lower.includes('image') || lower.includes('anchor') || lower.includes('visual')) {
        return { id: 'asset', title: lang === 'EN' ? 'Assets & Visuals' : '资产与视觉' };
    }
    if (lower.includes('tone') || lower.includes('style') || lower.includes('palette') || lower.includes('preset') || lower.includes('mode')) {
        return { id: 'style', title: lang === 'EN' ? 'Style Matrix' : '风格矩阵' };
    }
    if (lower.includes('config') || lower.includes('field') || lower.includes('state') || lower.includes('param') || lower.includes('driver')) {
        return { id: 'params', title: lang === 'EN' ? 'Engine Params' : '引擎参数' };
    }
    if (lower.includes('task') || lower.includes('action') || lower.includes('output') || lower.includes('contract')) {
        return { id: 'contract', title: lang === 'EN' ? 'Output Contract' : '输出契约' };
    }
    if (Array.isArray(value)) return { id: 'params', title: lang === 'EN' ? 'Engine Params' : '引擎参数' };
    return { id: 'other', title: lang === 'EN' ? 'Other Sources' : '其他来源' };
};

const addItemToGroups = (groups: Map<string, XRaySourceGroup>, groupMeta: { id: string; title: string }, item: XRaySourceItem) => {
    const existing = groups.get(groupMeta.id);
    if (existing) {
        existing.items.push(item);
        return;
    }
    groups.set(groupMeta.id, { id: groupMeta.id, title: groupMeta.title, items: [item] });
};

const isPrimitiveArray = (value: unknown): value is Array<string | number | boolean> => {
    return Array.isArray(value) && value.every(v => ['string', 'number', 'boolean'].includes(typeof v));
};

const createGroupsFromPayload = (payload: XRayPayload, lang: 'CN' | 'EN'): XRaySourceGroup[] => {
    if (typeof payload === 'string') {
        return [{
            id: 'raw',
            title: lang === 'EN' ? 'Raw Prompt' : '原始指令',
            items: [{
                id: '__raw_prompt',
                label: lang === 'EN' ? 'Prompt Text' : '指令文本',
                kind: 'textarea',
                value: payload,
                editable: true
            }]
        }];
    }

    if (!isRecord(payload)) {
        return [{
            id: 'raw',
            title: lang === 'EN' ? 'Raw Payload' : '原始载荷',
            items: [{
                id: '__raw_payload',
                label: lang === 'EN' ? 'Payload' : '载荷',
                kind: inferKind(payload),
                value: payload ?? '',
                editable: true
            }]
        }];
    }

    const groups = new Map<string, XRaySourceGroup>();

    Object.entries(payload).forEach(([key, value]) => {
        const groupMeta = categoryForKey(key, value, lang);

        if (isRecord(value) && Object.values(value).every(isPrimitiveArray)) {
            Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                addItemToGroups(groups, groupMeta, {
                    id: `${key}.${nestedKey}`,
                    label: labelizeKey(nestedKey),
                    kind: 'chips',
                    value: nestedValue,
                    editable: true,
                    sourcePath: [key, nestedKey]
                });
            });
            return;
        }

        addItemToGroups(groups, groupMeta, {
            id: key,
            label: labelizeKey(key),
            kind: inferKind(value),
            value,
            editable: true,
            sourcePath: [key]
        });
    });

    const preferredOrder = ['text', 'params', 'style', 'asset', 'contract', 'other'];
    return Array.from(groups.values()).sort((a, b) => preferredOrder.indexOf(a.id) - preferredOrder.indexOf(b.id));
};

const assignPath = (target: Record<string, unknown>, path: string[], value: unknown) => {
    let cursor = target;
    path.forEach((part, index) => {
        if (index === path.length - 1) {
            cursor[part] = value;
            return;
        }
        if (!isRecord(cursor[part])) cursor[part] = {};
        cursor = cursor[part] as Record<string, unknown>;
    });
};

const rebuildPayloadFromPaths = (groups: XRaySourceGroup[], values: XRayDraftValues): Record<string, unknown> | null => {
    const allItems = groups.flatMap(group => group.items);
    if (!allItems.some(item => item.sourcePath?.length)) return null;

    const rebuilt: Record<string, unknown> = {};
    allItems.forEach(item => {
        if (!item.sourcePath?.length) return;
        assignPath(rebuilt, item.sourcePath, values[item.id]);
    });
    return rebuilt;
};

const normalizeSources = (sources: XRaySourceGroup[] | ((values: XRayDraftValues) => XRaySourceGroup[]) | undefined, payload: XRayPayload, lang: 'CN' | 'EN', values?: XRayDraftValues) => {
    const rawGroups = typeof sources === 'function' ? (values ? sources(values) : sources({})) : sources;
    const groups = rawGroups && rawGroups.length > 0 ? cloneGroups(rawGroups) : createGroupsFromPayload(payload, lang);
    return groups.map(group => ({
        ...group,
        tone: group.tone || inferGroupTone(group.id),
        items: group.items.map(item => ({
            ...item,
            kind: item.kind || inferKind(item.value),
            editable: item.editable ?? item.kind !== 'readonly',
            tone: item.tone || group.tone || inferGroupTone(group.id) || inferTone(group.id, item)
        }))
    }));
};

const inferGroupTone = (groupId: string): XRayTone | undefined => {
    const id = groupId.toLowerCase();
    if (id.includes('directordesk') || id.includes('director') || id.includes('desk')) return 'director';
    if (id.includes('audio') || id.includes('sound') || id.includes('voice')) return 'audio';
    if (id.includes('frame') || id.includes('visual') || id.includes('shot')) return 'frame';
    if (id.includes('text') || id.includes('source') || id.includes('raw')) return 'text';
    if (id.includes('engine') || id.includes('param')) return 'engine';
    if (id.includes('surface') || id.includes('skin')) return 'surface';
    return undefined;
};

const inferTone = (groupId: string, item: Pick<XRaySourceItem, 'id' | 'label'>): XRayTone => {
    const haystack = `${groupId} ${item.id} ${item.label}`.toLowerCase();
    const groupTone = inferGroupTone(groupId);
    if (groupTone) return groupTone;
    if (
        haystack.includes('surface')
        || haystack.includes('worldlaw')
        || haystack.includes('world law')
        || haystack.includes('世界法则')
        || haystack.includes('skin_')
        || haystack.includes('comm_skin_')
        || haystack.includes('exp_skin_')
        || haystack.includes('trl_skin_')
        || haystack.includes('sur')
        || haystack.includes('sv')
        || haystack.includes('表层')
    ) return 'surface';
    if (
        haystack.includes('engine')
        || haystack.includes('engine_')
        || /\bm[0-9][ab]?\b/i.test(haystack)
        || haystack.includes('核心')
        || haystack.includes('引擎')
    ) return 'engine';
    if (
        haystack.includes('text')
        || haystack.includes('asset')
        || haystack.includes('visual')
        || haystack.includes('image')
        || haystack.includes('source')
        || haystack.includes('vision')
        || haystack.includes('文本')
        || haystack.includes('图像')
        || haystack.includes('视觉')
    ) return 'text';
    return 'neutral';
};

const toneClasses = (tone: XRayTone | undefined, theme: string) => {
    const resolvedTone = tone || 'neutral';
    if (theme === 'retro') {
        switch (resolvedTone) {
            case 'director':
            case 'engine':
                return {
                    selectedPill: 'bg-[#8B261D]/12 text-[#8B261D] ring-1 ring-[#8B261D]/15',
                    emptyPill: 'bg-[#8B261D]/6 text-[#8B261D]/50',
                    selectedOption: 'bg-white border-[#8B261D]/30 text-[#8B261D] shadow-[0_0_0_1px_rgba(139,38,29,0.08)]',
                    unselectedOption: 'bg-[#F9F7F1]/70 border-[#8B261D]/10 text-[#3D1A16] hover:bg-white hover:border-[#8B261D]/30 hover:text-[#8B261D]',
                    focusBorder: 'focus:border-[#8B261D]/50',
                    chip: 'border-[#8B261D]/15 bg-white/50 text-[#8B261D] hover:bg-[#8B261D]/10'
                };
            case 'audio':
                return {
                    selectedPill: 'bg-[#7A2E65]/12 text-[#7A2E65] ring-1 ring-[#7A2E65]/15',
                    emptyPill: 'bg-[#7A2E65]/6 text-[#7A2E65]/45',
                    selectedOption: 'bg-white border-[#7A2E65]/30 text-[#7A2E65] shadow-[0_0_0_1px_rgba(122,46,101,0.08)]',
                    unselectedOption: 'bg-[#F9F7F1]/70 border-[#7A2E65]/10 text-[#3D1A16] hover:bg-white hover:border-[#7A2E65]/30 hover:text-[#7A2E65]',
                    focusBorder: 'focus:border-[#7A2E65]/50',
                    chip: 'border-[#7A2E65]/15 bg-white/50 text-[#7A2E65] hover:bg-[#7A2E65]/10'
                };
            case 'frame':
                return {
                    selectedPill: 'bg-[#2E647A]/12 text-[#2E647A] ring-1 ring-[#2E647A]/15',
                    emptyPill: 'bg-[#2E647A]/6 text-[#2E647A]/45',
                    selectedOption: 'bg-white border-[#2E647A]/30 text-[#2E647A] shadow-[0_0_0_1px_rgba(46,100,122,0.08)]',
                    unselectedOption: 'bg-[#F9F7F1]/70 border-[#2E647A]/10 text-[#3D1A16] hover:bg-white hover:border-[#2E647A]/30 hover:text-[#2E647A]',
                    focusBorder: 'focus:border-[#2E647A]/50',
                    chip: 'border-[#2E647A]/15 bg-white/50 text-[#2E647A] hover:bg-[#2E647A]/10'
                };
            case 'surface':
                return {
                    selectedPill: 'bg-[#3D5A4B]/10 text-[#3D5A4B]',
                    emptyPill: 'bg-[#3D5A4B]/5 text-[#3D5A4B]/45',
                    selectedOption: 'bg-white border-[#3D5A4B]/25 text-[#3D5A4B]',
                    unselectedOption: 'bg-[#F9F7F1]/70 border-[#3D5A4B]/10 text-[#3D1A16] hover:bg-white hover:border-[#3D5A4B]/30 hover:text-[#3D5A4B]',
                    focusBorder: 'focus:border-[#3D5A4B]/50',
                    chip: 'border-[#3D5A4B]/15 bg-white/50 text-[#3D5A4B] hover:bg-[#3D5A4B]/10'
                };
            case 'text':
                return {
                    selectedPill: 'bg-[#4E4A7D]/10 text-[#4E4A7D]',
                    emptyPill: 'bg-[#4E4A7D]/5 text-[#4E4A7D]/45',
                    selectedOption: 'bg-white border-[#4E4A7D]/25 text-[#4E4A7D]',
                    unselectedOption: 'bg-[#F9F7F1]/70 border-[#4E4A7D]/10 text-[#3D1A16] hover:bg-white hover:border-[#4E4A7D]/30 hover:text-[#4E4A7D]',
                    focusBorder: 'focus:border-[#4E4A7D]/50',
                    chip: 'border-[#4E4A7D]/15 bg-white/50 text-[#4E4A7D] hover:bg-[#4E4A7D]/10'
                };
            default:
                return {
                    selectedPill: 'bg-[#6B5D4A]/10 text-[#6B5D4A]',
                    emptyPill: 'bg-[#6B5D4A]/5 text-[#6B5D4A]/50',
                    selectedOption: 'bg-white border-[#6B5D4A]/25 text-[#6B5D4A]',
                    unselectedOption: 'bg-[#F9F7F1]/70 border-[#6B5D4A]/10 text-[#3D1A16] hover:bg-white hover:border-[#6B5D4A]/30 hover:text-[#6B5D4A]',
                    focusBorder: 'focus:border-[#6B5D4A]/50',
                    chip: 'border-[#6B5D4A]/15 bg-white/50 text-[#6B5D4A] hover:bg-[#6B5D4A]/10'
                };
        }
    }

    switch (resolvedTone) {
        case 'director':
        case 'engine':
            return {
                selectedPill: 'bg-gold-primary/10 text-gold-primary ring-1 ring-gold-primary/15',
                emptyPill: 'bg-gold-primary/5 text-gold-primary/45',
                selectedOption: 'bg-zinc-900 border-gold-primary/30 text-gold-primary shadow-[0_0_18px_rgba(216,180,95,0.08)]',
                unselectedOption: 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:border-gold-primary/50 hover:text-gold-primary',
                focusBorder: 'focus:border-gold-primary/60',
                chip: 'border-zinc-700 bg-zinc-900 text-gold-primary hover:text-amber-200 hover:border-gold-primary/50'
            };
        case 'audio':
            return {
                selectedPill: 'bg-fuchsia-400/10 text-fuchsia-300 ring-1 ring-fuchsia-400/15',
                emptyPill: 'bg-fuchsia-400/5 text-fuchsia-900/70',
                selectedOption: 'bg-zinc-900 border-fuchsia-400/30 text-fuchsia-300 shadow-[0_0_18px_rgba(232,121,249,0.08)]',
                unselectedOption: 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:border-fuchsia-400/50 hover:text-fuchsia-200',
                focusBorder: 'focus:border-fuchsia-500/60',
                chip: 'border-zinc-700 bg-zinc-900 text-fuchsia-300 hover:text-fuchsia-100 hover:border-fuchsia-500/50'
            };
        case 'frame':
            return {
                selectedPill: 'bg-gold-primary/10 text-gold-primary ring-1 ring-gold-primary/15',
                emptyPill: 'bg-gold-primary/5 text-yellow-900/70',
                selectedOption: 'bg-zinc-900 border-gold-primary/30 text-gold-primary shadow-[0_0_18px_rgba(212,175,55,0.08)]',
                unselectedOption: 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:border-gold-primary/50 hover:text-yellow-100',
                focusBorder: 'focus:border-gold-primary/60',
                chip: 'border-zinc-700 bg-zinc-900 text-gold-primary hover:text-yellow-100 hover:border-gold-primary/50'
            };
        case 'surface':
            return {
                selectedPill: 'bg-zinc-900 text-emerald-300',
                emptyPill: 'bg-zinc-900/70 text-emerald-800/70',
                selectedOption: 'bg-zinc-900 border-zinc-800 text-emerald-300',
                unselectedOption: 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:border-emerald-400/50 hover:text-emerald-200',
                focusBorder: 'focus:border-emerald-500/60',
                chip: 'border-zinc-700 bg-zinc-900 text-emerald-300 hover:text-emerald-100 hover:border-emerald-500/50'
            };
        case 'text':
            return {
                selectedPill: 'bg-zinc-900 text-amber-300',
                emptyPill: 'bg-zinc-900/70 text-amber-900/70',
                selectedOption: 'bg-zinc-900 border-zinc-800 text-amber-300',
                unselectedOption: 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:border-amber-300/50 hover:text-amber-100',
                focusBorder: 'focus:border-amber-500/60',
                chip: 'border-zinc-700 bg-zinc-900 text-amber-300 hover:text-amber-100 hover:border-amber-400/50'
            };
        default:
            return {
                selectedPill: 'bg-zinc-900 text-zinc-300',
                emptyPill: 'bg-zinc-900/70 text-zinc-600',
                selectedOption: 'bg-zinc-900 border-zinc-800 text-zinc-200',
                unselectedOption: 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-100',
                focusBorder: 'focus:border-zinc-600',
                chip: 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-500'
            };
    }
};

const groupIcon = (id: string, tone?: XRayTone) => {
    if (tone === 'director') return Clapperboard;
    if (tone === 'audio') return Mic2;
    if (tone === 'frame') return LayoutGrid;
    if (tone === 'text') return Type;
    if (id.includes('text') || id.includes('raw')) return Type;
    if (id.includes('asset') || id.includes('visual')) return ImageIcon;
    if (id.includes('param') || id.includes('style')) return Database;
    if (id.includes('surface')) return ListChecks;
    if (id.includes('contract')) return ListChecks;
    return Terminal;
};

const groupMeta = (id: string, theme: string, lang: 'CN' | 'EN', tone?: XRayTone) => {
    const isRetro = theme === 'retro';
    const resolvedTone = tone || inferGroupTone(id);
    if (resolvedTone === 'director' || id.includes('engine')) {
        return {
            index: '01',
            eyebrow: lang === 'EN' ? 'Director Grammar' : '导演语法 / 场景裁决',
            border: isRetro ? 'border-l-[#8B261D]' : 'border-l-gold-primary',
            icon: isRetro ? 'text-[#8B261D]' : 'text-gold-primary',
            badge: isRetro ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-gold-primary/10 text-gold-primary',
            header: isRetro ? 'bg-[#8B261D]/5' : 'bg-gold-primary/5',
        };
    }
    if (resolvedTone === 'audio') {
        return {
            index: '02',
            eyebrow: lang === 'EN' ? 'Sound Timing & Voice' : '声音时机 / 台词层',
            border: isRetro ? 'border-l-[#7A2E65]' : 'border-l-fuchsia-400',
            icon: isRetro ? 'text-[#7A2E65]' : 'text-fuchsia-300',
            badge: isRetro ? 'bg-[#7A2E65]/10 text-[#7A2E65]' : 'bg-fuchsia-400/10 text-fuchsia-300',
            header: isRetro ? 'bg-[#7A2E65]/5' : 'bg-fuchsia-400/5',
        };
    }
    if (resolvedTone === 'frame') {
        return {
            index: '03',
            eyebrow: lang === 'EN' ? 'Frame Tuning' : '画格微调 / 镜头重心',
            border: isRetro ? 'border-l-[#7A5A2E]' : 'border-l-gold-primary',
            icon: isRetro ? 'text-[#7A5A2E]' : 'text-gold-primary',
            badge: isRetro ? 'bg-[#7A5A2E]/10 text-[#7A5A2E]' : 'bg-gold-primary/10 text-gold-primary',
            header: isRetro ? 'bg-[#7A5A2E]/5' : 'bg-gold-primary/5',
        };
    }
    if (id.includes('surface')) {
        return {
            index: '04',
            eyebrow: lang === 'EN' ? 'Skin & Law' : '表层皮肤 / 世界法则',
            border: isRetro ? 'border-l-[#3D5A4B]' : 'border-l-emerald-400',
            icon: isRetro ? 'text-[#3D5A4B]' : 'text-emerald-300',
            badge: isRetro ? 'bg-[#3D5A4B]/10 text-[#3D5A4B]' : 'bg-emerald-400/10 text-emerald-300',
            header: isRetro ? 'bg-[#3D5A4B]/5' : 'bg-emerald-400/5',
        };
    }
    if (resolvedTone === 'text' || id.includes('text')) {
        return {
            index: '00',
            eyebrow: lang === 'EN' ? 'Source Material' : '文本与图像入口',
            border: isRetro ? 'border-l-[#6F4F2D]' : 'border-l-amber-300',
            icon: isRetro ? 'text-[#6F4F2D]' : 'text-amber-300',
            badge: isRetro ? 'bg-[#6F4F2D]/10 text-[#6F4F2D]' : 'bg-amber-300/10 text-amber-300',
            header: isRetro ? 'bg-[#6F4F2D]/5' : 'bg-amber-300/5',
        };
    }
    return {
        index: '00',
        eyebrow: lang === 'EN' ? 'Sources' : '输入源',
        border: isRetro ? 'border-l-[#8B261D]' : 'border-l-zinc-500',
        icon: isRetro ? 'text-[#8B261D]' : 'text-zinc-400',
        badge: isRetro ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-800 text-zinc-400',
        header: isRetro ? 'bg-[#8B261D]/5' : 'bg-white/5',
    };
};

const kindLabel = (kind: XRaySourceKind, lang: 'CN' | 'EN') => {
    const cn: Record<XRaySourceKind, string> = {
        text: '文本',
        textarea: '长文',
        select: '词库',
        chips: '标签',
        number: '数值',
        toggle: '开关',
        image: '图像',
        json: 'JSON',
        libraryBlock: '词库',
        readonly: '只读'
    };
    const en: Record<XRaySourceKind, string> = {
        text: 'Text',
        textarea: 'Long',
        select: 'Library',
        chips: 'Tags',
        number: 'Number',
        toggle: 'Toggle',
        image: 'Image',
        json: 'JSON',
        libraryBlock: 'Library',
        readonly: 'Read'
    };
    return (lang === 'EN' ? en : cn)[kind];
};

const getOptionText = (option: XRaySourceOption) => {
    return `${option.label}${option.description ? ` ${option.description}` : ''}`.toLowerCase();
};

const normalizeTagValue = (value: unknown): string[] => {
    if (Array.isArray(value)) return value.map(String).map(v => v.trim()).filter(Boolean);
    return String(value || '').split(/[,，\n]/).map(v => v.trim()).filter(Boolean);
};

const displayCnTag = (value: unknown) => String(value || '')
    .replace(/^\[?SUR-END[.。]\s*/i, '')
    .replace(/^\[?SURX[.。]\s*/i, '')
    .replace(/\s*\([A-Za-z0-9\s/.'"_-]+\)\s*/g, '')
    .replace(/^\[|\]$/g, '')
    .trim();

const isItemEmpty = (item: XRaySourceItem, value: unknown) => {
    if (item.alwaysShow) return false;
    const kind = item.kind || inferKind(item.value);
    if (kind === 'toggle') return false;
    if (kind === 'number') return value === undefined || value === null || Number.isNaN(Number(value));
    if (kind === 'libraryBlock' || kind === 'chips') return normalizeTagValue(value).length === 0;
    if (kind === 'select') return value === undefined || value === null || String(value).trim() === '';
    if (kind === 'image' || kind === 'text' || kind === 'textarea') return String(value || '').trim() === '';
    if (kind === 'readonly') return String(formatPayload(value)).trim() === '';
    return value === undefined || value === null || String(formatPayload(value)).trim() === '';
};

const LibraryBlockControl: React.FC<{
    item: XRaySourceItem;
    value: unknown;
    lang: 'CN' | 'EN';
    theme: string;
    onChange: (value: unknown) => void;
    onOpenLibrary?: (item: XRaySourceItem) => void;
}> = ({ item, value, lang, theme, onChange, onOpenLibrary }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState('');
    const selected = normalizeTagValue(value);
    const maxSelected = item.maxSelected || 1;
    const options = item.options || [];
    const visibleOptions = options.filter(option => !query.trim() || getOptionText(option).includes(query.trim().toLowerCase()));
    const palette = toneClasses(item.tone, theme);

    const removeSelected = (tag: string) => onChange(selected.filter(item => item !== tag));
    const toggleExpanded = () => setIsExpanded(prev => !prev);
    const openFullLibrary = (event: React.MouseEvent) => {
        event.stopPropagation();
        onOpenLibrary?.(item);
    };
    const toggleSelected = (option: XRaySourceOption) => {
        const tag = String(option.value || option.label);
        if (selected.includes(tag)) {
            removeSelected(tag);
            return;
        }
        if (maxSelected <= 1) {
            onChange([tag]);
            setIsExpanded(false);
            return;
        }
        onChange([...selected, tag].slice(-maxSelected));
    };

    return (
        <div className={`space-y-1.5 ${item.disabled ? 'opacity-40 pointer-events-none' : ''}`}>
            <div
                role="button"
                tabIndex={0}
                onClick={toggleExpanded}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        toggleExpanded();
                    }
                }}
                className={`flex w-full cursor-pointer items-center gap-2 rounded-lg border px-2.5 py-1.5 text-left transition-colors ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#3D1A16] hover:bg-white' : 'bg-black/35 border-zinc-800 text-zinc-300 hover:border-zinc-700'}`}
                title={isExpanded ? (lang === 'EN' ? 'Collapse inline entries' : '收起行内可选关键词') : (lang === 'EN' ? 'Expand inline entries' : '展开行内可选关键词')}
            >
                <div className={`flex min-w-0 w-[35%] shrink-0 items-center gap-2 rounded-md transition-colors ${theme === 'retro' ? 'hover:text-[#8B261D]' : 'hover:text-white'}`}>
                    {isExpanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                    <span className={`truncate text-[11px] font-black ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200'}`}>{item.label}</span>
                </div>
                <div className="min-w-0 flex-1 px-1 py-0.5">
                    {selected.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                            {selected.map(tag => (
                                <span
                                    key={tag}
                                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors ${palette.selectedPill} ${theme === 'retro' ? 'hover:bg-[#8B261D]/10' : 'hover:ring-1 hover:ring-gold-primary/40'}`}
                                >
                                    <button
                                        type="button"
                                        onClick={openFullLibrary}
                                        className="min-w-0"
                                        title={lang === 'EN' ? 'Open full library' : '进入完整词库'}
                                    >
                                        【{lang === 'CN' ? displayCnTag(tag) : tag}】
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            removeSelected(tag);
                                        }}
                                        className={`rounded-full p-0.5 transition-colors ${theme === 'retro' ? 'hover:bg-[#8B261D]/10' : 'hover:bg-white/10'}`}
                                        title={lang === 'EN' ? 'Remove' : '删除'}
                                        aria-label={lang === 'EN' ? `Remove ${tag}` : `删除 ${displayCnTag(tag)}`}
                                    >
                                        <X size={10} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={openFullLibrary}
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors ${palette.emptyPill} ${theme === 'retro' ? 'hover:bg-[#8B261D]/10' : 'hover:ring-1 hover:ring-zinc-500/40'}`}
                            title={lang === 'EN' ? 'Open full library' : '进入完整词库'}
                        >
                            【{item.placeholder || (lang === 'EN' ? 'Unselected' : '未选择')}】
                        </button>
                    )}
                </div>
                <span className={`shrink-0 text-[9px] font-mono ${theme === 'retro' ? 'text-[#8B261D]/45' : 'text-zinc-600'}`}>
                    {selected.length}/{maxSelected}
                </span>
            </div>

            {isExpanded && (
                <div className={`rounded-lg border p-2 ${theme === 'retro' ? 'bg-white/55 border-[#8B261D]/10' : 'bg-black/25 border-zinc-800'}`}>
                    <div className={`mb-2 flex items-center gap-2 rounded-md border px-2 py-1.5 ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/10' : 'bg-zinc-950 border-zinc-800'}`}>
                        <Search size={11} className={theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-600'} />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={lang === 'EN' ? 'Search library' : '搜索词库'}
                            className={`w-full bg-transparent text-[10px] outline-none ${theme === 'retro' ? 'text-[#3D1A16] placeholder-[#8B261D]/35' : 'text-zinc-300 placeholder-zinc-600'}`}
                        />
                    </div>
                    <div className="max-h-44 overflow-y-auto custom-scrollbar">
                        {visibleOptions.length === 0 ? (
                            <div className={`px-2 py-4 text-center text-[10px] ${theme === 'retro' ? 'text-[#8B261D]/45' : 'text-zinc-600'}`}>
                                {lang === 'EN' ? 'No entries' : '暂无词条'}
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-1.5">
                                {visibleOptions.map(option => {
                                    const tag = String(option.value || option.label);
                                    const isSelected = selected.includes(tag);
                                    return (
                                        <button
                                            key={tag}
                                            type="button"
                                            onClick={() => toggleSelected(option)}
                                            title={option.description}
                                            className={`rounded-full border px-2 py-1 text-[10px] font-bold transition-colors ${isSelected
                                                ? palette.selectedOption
                                                : palette.unselectedOption
                                            }`}
                                        >
                                            【{lang === 'CN' ? displayCnTag(option.label) : option.label}】
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const ChoiceLineControl: React.FC<{
    item: XRaySourceItem;
    value: unknown;
    lang: 'CN' | 'EN';
    theme: string;
    onChange: (value: unknown) => void;
}> = ({ item, value, lang, theme, onChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const current = item.options?.find(option => String(option.value) === String(value));
    const display = current?.label || item.placeholder || (lang === 'EN' ? 'Unselected' : item.label);
    const palette = toneClasses(item.tone, theme);

    return (
        <div className="space-y-1.5">
            <button
                type="button"
                disabled={item.disabled}
                onClick={() => setIsExpanded(prev => !prev)}
                className={`flex w-full items-center gap-2 rounded-lg border px-2.5 py-1.5 text-left transition-colors ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#3D1A16] hover:bg-white' : 'bg-black/35 border-zinc-800 text-zinc-300 hover:border-zinc-700'}`}
            >
                {isExpanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                <span className={`w-[35%] shrink-0 truncate text-[11px] font-black ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200'}`}>{item.label}</span>
                <div className="flex min-w-0 flex-1 items-center gap-1.5">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${current ? palette.selectedPill : palette.emptyPill}`}>
                        【{lang === 'CN' ? displayCnTag(display) : display}】
                    </span>
                    {(item.editable && current && !item.disabled) && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onChange('');
                            }}
                            className={`rounded-full p-0.5 transition-colors ${theme === 'retro' ? 'hover:bg-[#8B261D]/10 text-[#8B261D]/60' : 'hover:bg-white/10 text-zinc-500 hover:text-white'}`}
                        >
                            <X size={10} />
                        </button>
                    )}
                </div>
            </button>
            {isExpanded && (
                <div className={`flex flex-wrap gap-1.5 rounded-lg border p-2 ${theme === 'retro' ? 'bg-white/55 border-[#8B261D]/10' : 'bg-black/25 border-zinc-800'}`}>
                    {(item.options || []).map(option => {
                        const selected = String(option.value) === String(value);
                        return (
                            <button
                                key={String(option.value)}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsExpanded(false);
                                }}
                                title={option.description}
                                className={`rounded-full border px-2 py-1 text-[10px] font-bold transition-colors ${selected
                                    ? palette.selectedOption
                                    : palette.unselectedOption
                                }`}
                            >
                                【{lang === 'CN' ? displayCnTag(option.label) : option.label}】
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

const InlineChoiceControl: React.FC<{
    item: XRaySourceItem;
    value: unknown;
    lang: 'CN' | 'EN';
    theme: string;
    onChange: (value: unknown) => void;
}> = ({ item, value, lang, theme, onChange }) => {
    const palette = toneClasses(item.tone, theme);

    return (
        <div className={`rounded-lg border px-2.5 py-2 ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#3D1A16]' : 'bg-black/35 border-zinc-800 text-zinc-300'} ${item.disabled ? 'opacity-40 pointer-events-none' : ''}`}>
            <div className="flex items-start gap-2">
                <span className={`w-[35%] shrink-0 truncate pt-1 text-[11px] font-black ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200'}`}>{item.label}</span>
                <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
                    {(item.options || []).map(option => {
                        const selected = String(option.value) === String(value);
                        return (
                            <button
                                key={String(option.value)}
                                type="button"
                                onClick={() => onChange(option.value)}
                                title={option.description}
                                className={`rounded-full border px-2 py-1 text-[10px] font-bold transition-colors ${selected
                                    ? palette.selectedOption
                                    : palette.unselectedOption
                                }`}
                            >
                                【{lang === 'CN' ? displayCnTag(option.label) : option.label}】
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const TextLineControl: React.FC<{
    item: XRaySourceItem;
    value: unknown;
    lang: 'CN' | 'EN';
    theme: string;
    onChange: (value: unknown) => void;
    multiline?: boolean;
}> = ({ item, value, lang, theme, onChange, multiline }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const textValue = String(value ?? '');
    const summary = textValue.trim()
        ? textValue.trim().replace(/\s+/g, ' ').slice(0, 42)
        : (item.placeholder || (lang === 'EN' ? 'Empty' : item.label));
    const palette = toneClasses(item.tone, theme);

    return (
        <div className="space-y-1.5">
            <button
                type="button"
                onClick={() => setIsExpanded(prev => !prev)}
                className={`flex w-full items-center gap-2 rounded-lg border px-2.5 py-1.5 text-left transition-colors ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#3D1A16] hover:bg-white' : 'bg-black/35 border-zinc-800 text-zinc-300 hover:border-zinc-700'}`}
            >
                {isExpanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                <span className={`w-[35%] shrink-0 truncate text-[11px] font-black ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200'}`}>{item.label}</span>
                <span className={`min-w-0 truncate rounded-full px-2 py-0.5 text-[10px] font-bold ${textValue.trim() ? palette.selectedPill : palette.emptyPill}`}>
                    【{summary}】
                </span>
            </button>
            {isExpanded && (
                multiline ? (
                    <textarea
                        value={textValue}
                        onChange={(e) => onChange(e.target.value)}
                        className={`min-h-[92px] w-full resize-y rounded-lg border px-3 py-2 text-xs leading-relaxed outline-none ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#3D1A16]' : 'bg-black/40 border-zinc-800 text-zinc-300'} ${palette.focusBorder}`}
                    />
                ) : (
                    <input
                        value={textValue}
                        onChange={(e) => onChange(e.target.value)}
                        className={`w-full rounded-lg border px-3 py-2 text-xs outline-none ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#3D1A16]' : 'bg-black/40 border-zinc-800 text-zinc-300'} ${palette.focusBorder}`}
                    />
                )
            )}
        </div>
    );
};

const promptToneTextClass = (tone: XRayTone, theme: string, weight: 'font-bold' | 'font-black' = 'font-bold') => {
    if (theme === 'retro') {
        if (tone === 'director' || tone === 'engine') return `${weight} text-[#8B261D]`;
        if (tone === 'audio') return `${weight} text-[#7A2E65]`;
        if (tone === 'frame') return `${weight} text-[#7A5A2E]`;
        if (tone === 'surface') return `${weight} text-[#3D5A4B]`;
        if (tone === 'text') return `${weight} text-[#6F4F2D]`;
        return `${weight} text-[#3D1A16]`;
    }
    if (tone === 'director' || tone === 'engine') return `${weight} text-gold-primary`;
    if (tone === 'audio') return `${weight} text-fuchsia-300`;
    if (tone === 'frame') return `${weight} text-gold-primary`;
    if (tone === 'surface') return `${weight} text-emerald-300`;
    if (tone === 'text') return `${weight} text-amber-300`;
    return `${weight} text-zinc-200`;
};

const promptToneCodeClass = (tone: XRayTone, theme: string) => {
    if (theme === 'retro') {
        if (tone === 'director' || tone === 'engine') return 'rounded bg-[#8B261D]/10 px-1 text-[#8B261D]';
        if (tone === 'audio') return 'rounded bg-[#7A2E65]/10 px-1 text-[#7A2E65]';
        if (tone === 'frame') return 'rounded bg-[#7A5A2E]/10 px-1 text-[#7A5A2E]';
        if (tone === 'surface') return 'rounded bg-[#3D5A4B]/10 px-1 text-[#3D5A4B]';
        if (tone === 'text') return 'rounded bg-[#6F4F2D]/10 px-1 text-[#6F4F2D]';
        return 'rounded bg-[#8B261D]/10 px-1 text-[#8B261D]';
    }
    if (tone === 'director' || tone === 'engine') return 'rounded bg-zinc-900 px-1 text-gold-primary';
    if (tone === 'audio') return 'rounded bg-zinc-900 px-1 text-fuchsia-300';
    if (tone === 'frame') return 'rounded bg-zinc-900 px-1 text-gold-primary';
    if (tone === 'surface') return 'rounded bg-zinc-900 px-1 text-emerald-300';
    if (tone === 'text') return 'rounded bg-zinc-900 px-1 text-amber-300';
    return 'rounded bg-zinc-900 px-1 text-gold-primary';
};

const classifyPromptLineTone = (line: string, fallback: XRayTone = 'director'): XRayTone => {
    const text = line.toLowerCase();
    if (/输入边界|源文本|当前片段|完整源文本|文本源|人类导演手记/.test(line) || /production_context|current_scene_source|current fragment|full source|source material|text sources|director'?s note/.test(text)) return 'text';
    if (/声音架构|声音高级微调|声音微调|对白|旁白|独白|音轨/.test(line) || /sound|audio|voiceover|monologue|dialogue|voice/.test(text)) return 'audio';
    if (/主体密度|空镜留白|画格微调|镜头质量|画面：|环境：|光影：|视觉皮肤|视觉圣经/.test(line) || /frame tuning|subject focus|empty shot|visual skin|visual bible/.test(text)) return 'frame';
    if (/导演台|V2 控制台参数|场景诊断|戏剧功能|场景类型|镜头预算|导演风格|导演语法|剪辑结构/.test(line) || /director|scene diagnosis|shot budget|editing structure|montage/.test(text)) return 'director';
    if (text.includes('surface') || text.includes('skin') || line.includes('表层') || line.includes('世界法则')) return 'surface';
    if (text.includes('engine') || line.includes('引擎') || /\bm[0-9][ab]?\b/i.test(line)) return 'engine';
    return fallback;
};

const classifyPromptTone = (token: string, line = '', fallback: XRayTone = 'director'): XRayTone => {
    const cleanToken = token.replace(/[*`【】「」[\]]/g, '').trim();
    const tokenUpper = cleanToken.toUpperCase();
    const lineText = line.trim();
    const engineLine = /(^|\s|\*|#|[-:：])(?:M[0-9][AB]?|C[0-9]+|T[0-9]+)[.。\s:：]|缺失主体|真实遭遇|欲望幻想|大他者阻断|行动驱力|代价|爱欲重构|实在余痕/i.test(lineText);
    const surfaceLine = /(SUR(?:[0-9X]*|-END)|SV[0-9]+|世界法则|表层|皮肤|外壳|类型基因|叙事动力|叙事结构|故事体量|时空|社会|职业身份|信念预设|对象预设|空间容器|显性收场|圣经风格|作者风格|叙事视点|感官侧重|WORLD LAW|SURFACE|SKIN|PERSPECTIVE|SENSORY|BIBLE STYLE|AUTHOR STYLE)/i.test(lineText);
    const textLine = /(文本|图像|视觉|素材|输入|来源|源文本|参考图|TEXT|IMAGE|VISUAL|SOURCE|VISION|INPUT|TREATMENT|PATH CONTENT)/i.test(lineText);

    if (/导演笔记|导演手记|DIRECTOR'?S NOTE/i.test(cleanToken)) return 'text';
    if (/声音|对白|旁白|独白|音轨|SOUND|AUDIO|VOICEOVER|MONOLOGUE|DIALOGUE/i.test(cleanToken)) return 'audio';
    if (/主体密度|空镜|画格|画面|环境|光影|视觉圣经|FRAME|SHOT|VISUAL BIBLE|SUBJECT|EMPTY SHOT/i.test(cleanToken)) return 'frame';
    if (/导演台|导演语法|场景诊断|戏剧功能|镜头预算|剪辑结构|DIRECTOR|SCENE|BUDGET|EDITING|MONTAGE/i.test(cleanToken)) return 'director';
    if (/^(SUR(?:[0-9X]*|-END)|SV[0-9]+)$/i.test(cleanToken) || /世界法则|表层|皮肤|WORLD LAW|SURFACE|SKIN/i.test(cleanToken)) return 'surface';
    if (/^(M[0-9][AB]?|C[0-9]+|T[0-9]+)$/i.test(cleanToken) || /^\[(M|C|T)[0-9]/i.test(tokenUpper) || /导演笔记|核心|引擎|ENGINE|CORE|DIRECTOR/i.test(cleanToken)) return 'engine';
    if (/文本|图像|视觉|素材|来源|TEXT|IMAGE|VISUAL|SOURCE|VISION/i.test(cleanToken)) return 'text';
    if (engineLine) return 'engine';
    if (surfaceLine) return 'surface';
    if (textLine) return 'text';
    return fallback;
};

const renderPromptPreview = (text: string, theme: string, lang: 'CN' | 'EN') => {
    if (!text) {
        return <div className={theme === 'retro' ? 'text-[#8B261D]/45' : 'text-zinc-600'}>{lang === 'EN' ? 'No prompt payload available.' : '暂无可透视的指令载荷。'}</div>;
    }

    const renderInline = (line: string, lineTone: XRayTone) => {
        const parts = line.split(/(\*\*.*?\*\*|`.*?`|【[^】]+】|「[^」]+」|\[[A-Z0-9_\-]+\]|\b(?:M[0-9][AB]?|SUR[0-9X]+|SV[0-9]+|C[0-9]+|T[0-9]+)\b|CRITICAL|硬约束|禁止|必须|输出格式|导演笔记|世界法则|🚨.*)/g).filter(Boolean);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className={promptToneTextClass(classifyPromptTone(part, line, lineTone), theme, 'font-black')}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={index} className={promptToneCodeClass(classifyPromptTone(part, line, lineTone), theme)}>{part.slice(1, -1)}</code>;
            }
            if (/^【[^】]+】$/.test(part) || /^「[^」]+」$/.test(part)) {
                return <span key={index} className={promptToneTextClass(classifyPromptTone(part, line, lineTone), theme, 'font-black')}>{part}</span>;
            }
            if (/^\[[A-Z0-9_\-]+\]$/.test(part) || /^(M[0-9][AB]?|SUR[0-9X]+|SV[0-9]+|C[0-9]+|T[0-9]+)$/.test(part)) {
                return <span key={index} className={promptToneTextClass(classifyPromptTone(part, line, lineTone), theme)}>{part}</span>;
            }
            if (part.includes('🚨') || part.toUpperCase().includes('CRITICAL') || part.includes('硬约束') || part.includes('禁止') || part.includes('必须') || part.includes('输出格式')) {
                return <span key={index} className={theme === 'retro' ? 'font-black text-red-700' : 'font-black text-red-400'}>{part}</span>;
            }
            if (part.includes('导演笔记') || part.includes('世界法则')) {
                return <span key={index} className={promptToneTextClass(classifyPromptTone(part, line, lineTone), theme, 'font-black')}>{part}</span>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    let activeTone: XRayTone = 'director';
    return text.split('\n').map((line, index) => {
        const trimmed = line.trim();
        const lineTone = classifyPromptLineTone(line, activeTone);
        if (/^#{1,3}\s+/.test(trimmed)) activeTone = lineTone;
        if (trimmed.startsWith('### ')) {
            return <div key={index} className={`mt-5 mb-2 text-sm font-black tracking-wider ${promptToneTextClass(lineTone, theme, 'font-black')}`}>{trimmed.replace(/^###\s+/, '')}</div>;
        }
        if (trimmed.startsWith('## ')) {
            return <div key={index} className={`mt-7 mb-3 border-b pb-1 text-base font-black tracking-wide ${theme === 'retro' ? 'border-[#8B261D]/20' : 'border-zinc-800'} ${promptToneTextClass(lineTone, theme, 'font-black')}`}>{trimmed.replace(/^##\s+/, '')}</div>;
        }
        if (trimmed.startsWith('# ')) {
            return <div key={index} className={`mt-8 mb-4 text-lg font-black tracking-widest ${promptToneTextClass(lineTone, theme, 'font-black')}`}>{trimmed.replace(/^#\s+/, '')}</div>;
        }
        if (trimmed.includes('🚨') || trimmed.toUpperCase().includes('CRITICAL') || trimmed.includes('硬约束') || trimmed.startsWith('[LOCK_')) {
            return <div key={index} className={`my-1 rounded border px-2 py-1 font-sans text-xs font-bold ${theme === 'retro' ? 'bg-red-50 text-red-800 border-red-200' : 'bg-red-950/30 text-red-400 border-red-900/30'}`}>{renderInline(line, lineTone)}</div>;
        }
        if (/^\s*[-*]\s+/.test(line)) {
            return <div key={index} className={`min-h-[1.5em] pl-4 ${theme === 'retro' ? 'text-[#3D1A16]/85' : 'text-zinc-400'}`}>{renderInline(line, lineTone)}</div>;
        }
        return <div key={index} className={`min-h-[1.5em] ${theme === 'retro' ? 'text-[#3D1A16]/85' : 'text-zinc-400'}`}>{renderInline(line, lineTone)}</div>;
    });
};

export const XRayInspectorModal: React.FC<XRayInspectorModalProps> = ({
    isOpen,
    onClose,
    lang = 'CN',
    title,
    payload,
    getPayload,
    sources,
    buildPayload
}) => {
    const { theme } = useTheme();
    const [snapshot, setSnapshot] = useState('');
    const [copied, setCopied] = useState(false);
    const [sourceGroups, setSourceGroups] = useState<XRaySourceGroup[]>([]);
    const [baseSourceGroups, setBaseSourceGroups] = useState<XRaySourceGroup[]>([]);
    const [draftValues, setDraftValues] = useState<XRayDraftValues>({});
    const [baseDraftValues, setBaseDraftValues] = useState<XRayDraftValues>({});
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
    const [query, setQuery] = useState('');
    const [previewMode, setPreviewMode] = useState<'preview' | 'edit'>('preview');
    const [activeLibraryItemId, setActiveLibraryItemId] = useState<string | null>(null);
    const [historyPast, setHistoryPast] = useState<XRayHistoryEntry[]>([]);
    const [historyFuture, setHistoryFuture] = useState<XRayHistoryEntry[]>([]);

    const displayTitle = title || (lang === 'EN' ? 'X-Ray Prompt Inspector' : 'X-Ray 指令透视仪');

    const estimatedTokens = useMemo(() => {
        const cnChars = (snapshot.match(/[\u4e00-\u9fff]/g) || []).length;
        const enWords = snapshot.replace(/[\u4e00-\u9fff]/g, '').split(/\s+/).filter(Boolean).length;
        return Math.round(cnChars * 2 + enWords * 1.3);
    }, [snapshot]);

    const resolvePayload = (values: XRayDraftValues, groups: XRaySourceGroup[]) => {
        if (buildPayload) return buildPayload(values, groups);
        if (Object.prototype.hasOwnProperty.call(values, '__raw_prompt')) return values.__raw_prompt as XRayPayload;
        if (Object.prototype.hasOwnProperty.call(values, '__raw_payload')) return values.__raw_payload as XRayPayload;
        return rebuildPayloadFromPaths(groups, values) || values;
    };

    const syncSnapshot = (values: XRayDraftValues, groups: XRaySourceGroup[]) => {
        setSnapshot(formatPayload(resolvePayload(values, groups)));
    };

    const initializeWorkbench = () => {
        const nextPayload = getPayload ? getPayload() : payload;
        // Start with initial values to get the first set of groups
        const initialGroups = normalizeSources(sources, nextPayload, lang, {});
        const nextValues = makeValues(initialGroups);
        // Re-normalize with the actual values to catch any dynamic rules
        const nextGroups = normalizeSources(sources, nextPayload, lang, nextValues);

        setSourceGroups(nextGroups);
        setBaseSourceGroups(cloneGroups(nextGroups));
        setDraftValues(nextValues);
        setBaseDraftValues({ ...nextValues });
        setOpenGroups(nextGroups.reduce<Record<string, boolean>>((acc, group) => {
            acc[group.id] = false;
            return acc;
        }, {}));
        setQuery('');
        setPreviewMode('preview');
        setActiveLibraryItemId(null);
        setHistoryPast([]);
        setHistoryFuture([]);
        setSnapshot(formatPayload(buildPayload ? buildPayload(nextValues, nextGroups) : resolvePayload(nextValues, nextGroups)));
    };

    useEffect(() => {
        if (!isOpen) return;
        initializeWorkbench();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(snapshot);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleReset = () => {
        const groups = cloneGroups(baseSourceGroups);
        const values = cloneDraftValues(baseDraftValues);
        setHistoryPast(prev => [...prev.slice(-79), { values: cloneDraftValues(draftValues), groups: cloneGroups(sourceGroups) }]);
        setHistoryFuture([]);
        setSourceGroups(groups);
        setDraftValues(values);
        syncSnapshot(values, groups);
    };

    const applyWorkbenchState = (entry: XRayHistoryEntry) => {
        const groups = cloneGroups(entry.groups);
        const values = cloneDraftValues(entry.values);
        setSourceGroups(groups);
        setDraftValues(values);
        syncSnapshot(values, groups);
    };

    const handleUndo = () => {
        if (historyPast.length === 0) return;
        const previous = historyPast[historyPast.length - 1];
        setHistoryPast(prev => prev.slice(0, -1));
        setHistoryFuture(prev => [{ values: cloneDraftValues(draftValues), groups: cloneGroups(sourceGroups) }, ...prev].slice(0, 80));
        applyWorkbenchState(previous);
    };

    const handleRedo = () => {
        if (historyFuture.length === 0) return;
        const next = historyFuture[0];
        setHistoryFuture(prev => prev.slice(1));
        setHistoryPast(prev => [...prev.slice(-79), { values: cloneDraftValues(draftValues), groups: cloneGroups(sourceGroups) }]);
        applyWorkbenchState(next);
    };

    const updateValue = (itemId: string, value: unknown) => {
        const nextValues = { ...draftValues, [itemId]: value };
        const nextGroups = normalizeSources(sources, getPayload ? getPayload() : payload, lang, nextValues);

        setHistoryPast(prev => [...prev.slice(-79), { values: cloneDraftValues(draftValues), groups: cloneGroups(sourceGroups) }]);
        setHistoryFuture([]);
        setDraftValues(nextValues);
        setSourceGroups(nextGroups);
        syncSnapshot(nextValues, nextGroups);
    };

    const filteredGroups = sourceGroups
        .map(group => {
            const showAll = openGroups[group.id] ?? false;
            return {
                ...group,
                items: group.items.filter(item => {
                    const value = draftValues[item.id] ?? item.value;
                    const needle = `${group.title} ${item.label} ${item.description || ''} ${formatPayload(value)}`.toLowerCase();
                    if (query.trim()) return needle.includes(query.trim().toLowerCase());
                    return showAll || !isItemEmpty(item, value);
                })
            };
        })
        .filter((group, index) => group.items.length > 0 || (!query.trim() && (sourceGroups[index]?.items.length || 0) > 0));

    const activeLibraryItem = activeLibraryItemId
        ? sourceGroups.flatMap(group => group.items).find(item => item.id === activeLibraryItemId)
        : undefined;

    const openLibraryForItem = (item: XRaySourceItem) => {
        setActiveLibraryItemId(item.id);
    };

    const toggleLibraryTag = (tag: string) => {
        if (!activeLibraryItem) return;
        const current = normalizeTagValue(draftValues[activeLibraryItem.id] ?? activeLibraryItem.value);
        const limit = activeLibraryItem.maxSelected || 1;

        if (current.includes(tag)) {
            updateValue(activeLibraryItem.id, current.filter(item => item !== tag));
            return;
        }

        if (limit <= 1) {
            updateValue(activeLibraryItem.id, [tag]);
            return;
        }

        updateValue(activeLibraryItem.id, [...current, tag].slice(-limit));
    };

    const renderValueControl = (item: XRaySourceItem) => {
        const kind = item.kind || inferKind(item.value);
        const value = draftValues[item.id] ?? item.value;
        const editable = item.editable !== false && kind !== 'readonly';
        const palette = toneClasses(item.tone, theme);
        const baseInputClass = `w-full rounded-lg border px-3 py-2 text-xs outline-none transition-colors ${theme === 'retro'
            ? 'bg-white/70 border-[#8B261D]/15 text-[#3D1A16]'
            : 'bg-black/40 border-zinc-800 text-zinc-300'
        } ${palette.focusBorder}`;

        if (kind === 'select' && item.options?.length) {
            if (item.inlineOptions) {
                return (
                    <InlineChoiceControl
                        item={item}
                        value={value}
                        lang={lang}
                        theme={theme}
                        onChange={(nextValue) => editable && updateValue(item.id, nextValue)}
                    />
                );
            }
            return (
                <ChoiceLineControl
                    item={item}
                    value={value}
                    lang={lang}
                    theme={theme}
                    onChange={(nextValue) => editable && updateValue(item.id, nextValue)}
                />
            );
        }

        if (kind === 'toggle') {
            const boolValue = Boolean(value);
            return (
                <button
                    type="button"
                    disabled={!editable}
                    onClick={() => updateValue(item.id, !boolValue)}
                    className={`inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 ${boolValue
                        ? palette.selectedOption
                        : (theme === 'retro' ? 'bg-white border-[#8B261D]/20 text-[#8B261D]/60' : 'bg-zinc-900 border-zinc-800 text-zinc-500')
                    }`}
                >
                    <ToggleLeft size={14} />
                    {boolValue ? (lang === 'EN' ? 'On' : '开启') : (lang === 'EN' ? 'Off' : '关闭')}
                </button>
            );
        }

        if (kind === 'number') {
            return (
                <input
                    type="number"
                    value={Number(value ?? 0)}
                    disabled={!editable}
                    onChange={(e) => updateValue(item.id, Number(e.target.value))}
                    className={baseInputClass}
                />
            );
        }

        if (kind === 'chips') {
            const chips = Array.isArray(value) ? value.map(String) : String(value || '').split(/[,，\n]/).map(v => v.trim()).filter(Boolean);
            return (
                <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                        {chips.length === 0 ? (
                            <span className={theme === 'retro' ? 'text-[10px] text-[#8B261D]/40' : 'text-[10px] text-zinc-600'}>{lang === 'EN' ? 'No tags' : '暂无标签'}</span>
                        ) : chips.map((chip, index) => (
                            <button
                                key={`${chip}-${index}`}
                                type="button"
                                disabled={!editable}
                                onClick={() => updateValue(item.id, chips.filter((_, i) => i !== index))}
                                className={`rounded-full border px-2 py-1 text-[10px] transition-colors disabled:cursor-default ${palette.chip}`}
                                title={editable ? (lang === 'EN' ? 'Click to remove' : '点击移除') : undefined}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>
                    {editable && (
                        <textarea
                            value={chips.join('\n')}
                            onChange={(e) => updateValue(item.id, e.target.value.split(/[,，\n]/).map(v => v.trim()).filter(Boolean))}
                            className={`${baseInputClass} min-h-[74px] resize-y font-mono leading-relaxed`}
                        />
                    )}
                </div>
            );
        }

        if (kind === 'libraryBlock') {
            return (
                <LibraryBlockControl
                    item={item}
                    value={value}
                    lang={lang}
                    theme={theme}
                    onChange={(nextValue) => updateValue(item.id, nextValue)}
                    onOpenLibrary={openLibraryForItem}
                />
            );
        }

        if (kind === 'json') {
            const textValue = typeof value === 'string' ? value : formatPayload(value);
            return (
                <TextLineControl
                    item={{ ...item, placeholder: item.placeholder || (lang === 'EN' ? 'Structured values' : '结构化参数') }}
                    value={textValue}
                    lang={lang}
                    theme={theme}
                    multiline
                    onChange={(nextText) => {
                        const raw = String(nextText);
                        try {
                            updateValue(item.id, JSON.parse(raw));
                        } catch {
                            updateValue(item.id, raw);
                        }
                    }}
                />
            );
        }

        if (kind === 'image') {
            const imageUrl = typeof value === 'string' ? value : '';
            return (
                <div className="space-y-2">
                    <TextLineControl
                        item={{ ...item, placeholder: item.placeholder || (lang === 'EN' ? 'No image' : '无参考图') }}
                        value={imageUrl}
                        lang={lang}
                        theme={theme}
                        onChange={(nextValue) => editable && updateValue(item.id, nextValue)}
                    />
                </div>
            );
        }

        if (kind === 'textarea' || (typeof value === 'string' && value.length > 160)) {
            return (
                <TextLineControl
                    item={item}
                    value={String(value ?? '')}
                    lang={lang}
                    theme={theme}
                    multiline
                    onChange={(nextValue) => editable && updateValue(item.id, nextValue)}
                />
            );
        }

        if (kind === 'readonly') {
            return (
                <pre className={`${baseInputClass} max-h-32 overflow-auto whitespace-pre-wrap break-words font-mono opacity-70`}>
                    {formatPayload(value)}
                </pre>
            );
        }

        return (
            <TextLineControl
                item={item}
                value={String(value ?? '')}
                lang={lang}
                theme={theme}
                onChange={(nextValue) => editable && updateValue(item.id, nextValue)}
            />
        );
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center p-1 md:p-2 animate-in fade-in duration-200 ${theme === 'retro' ? 'bg-[#8B261D]/10 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-md'}`}
            onClick={onClose}
        >
            <div
                className={`relative flex h-[96vh] w-full max-w-none flex-col overflow-hidden rounded-xl border shadow-2xl animate-in zoom-in-95 duration-300 ${theme === 'retro' ? 'bg-[#F9F7F1] border-[#8B261D]/20' : 'bg-[#050505] border-zinc-800'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className={`h-14 shrink-0 flex items-center justify-between px-6 border-b ${theme === 'retro' ? 'bg-[#F2EDDE] border-[#8B261D]/10' : 'bg-[#0a0a0a] border-zinc-800/50'}`}>
                    <div className="flex items-center gap-3 min-w-0">
                        <Terminal size={18} className={theme === 'retro' ? 'text-[#8B261D]' : 'text-gold-primary'} />
                        <h2 className={`truncate font-serif font-black tracking-[0.15em] uppercase text-sm ${theme === 'retro' ? 'text-[#8B261D]' : 'text-white'}`}>
                            {displayTitle}
                        </h2>
                        <span className={`px-2 py-0.5 text-[9px] font-mono rounded shrink-0 ${theme === 'retro' ? 'bg-[#8B261D]/10 text-[#8B261D]' : 'bg-zinc-800 text-zinc-400'}`}>
                            ~{estimatedTokens.toLocaleString()} tokens
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={handleReset}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${theme === 'retro' ? 'bg-white border text-[#8B261D] border-[#8B261D]/20 hover:bg-[#8B261D]/5' : 'bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800'}`}
                        >
                            <RotateCcw size={13} />
                            {lang === 'EN' ? 'Reset' : '重置'}
                        </button>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${theme === 'retro' ? 'bg-white border text-[#8B261D] border-[#8B261D]/20 hover:bg-[#8B261D]/5' : 'bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800'}`}
                        >
                            {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                            {copied ? (lang === 'EN' ? 'Copied' : '已复制') : (lang === 'EN' ? 'Copy' : '复制')}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className={`p-1.5 rounded-lg transition-colors ${theme === 'retro' ? 'text-black/50 hover:bg-black/5 hover:text-black' : 'text-zinc-500 hover:text-white hover:bg-white/10'}`}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                <div className="flex min-h-0 flex-1">
                    <aside className={`flex w-[30%] min-w-[300px] max-w-[440px] flex-col border-r ${theme === 'retro' ? 'bg-[#F2EDDE]/70 border-[#8B261D]/10' : 'bg-[#080808] border-zinc-800'}`}>
                        <div className={`shrink-0 border-b p-3 ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800'}`}>
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <div className={`flex min-w-0 items-center gap-2 text-[10px] font-black uppercase tracking-widest ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-400'}`}>
                                    <Database size={13} />
                                    {lang === 'EN' ? 'Input Sources' : '输入源控制台'}
                                </div>
                                <div className="flex shrink-0 items-center gap-1">
                                    <button
                                        type="button"
                                        onClick={handleUndo}
                                        disabled={historyPast.length === 0}
                                        className={`flex h-7 w-7 items-center justify-center rounded-lg border transition-all disabled:cursor-not-allowed disabled:opacity-35 ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#8B261D] hover:bg-[#8B261D]/5' : 'bg-black/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'}`}
                                        title={lang === 'EN' ? 'Undo' : '撤回'}
                                        aria-label={lang === 'EN' ? 'Undo' : '撤回'}
                                    >
                                        <Undo2 size={13} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleRedo}
                                        disabled={historyFuture.length === 0}
                                        className={`flex h-7 w-7 items-center justify-center rounded-lg border transition-all disabled:cursor-not-allowed disabled:opacity-35 ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15 text-[#8B261D] hover:bg-[#8B261D]/5' : 'bg-black/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'}`}
                                        title={lang === 'EN' ? 'Redo' : '前进'}
                                        aria-label={lang === 'EN' ? 'Redo' : '前进'}
                                    >
                                        <Redo2 size={13} />
                                    </button>
                                </div>
                            </div>
                            <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${theme === 'retro' ? 'bg-white/70 border-[#8B261D]/15' : 'bg-black/40 border-zinc-800'}`}>
                                <Search size={13} className={theme === 'retro' ? 'text-[#8B261D]/50' : 'text-zinc-600'} />
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={lang === 'EN' ? 'Filter sources' : '筛选来源'}
                                    className={`w-full bg-transparent text-xs outline-none ${theme === 'retro' ? 'text-[#3D1A16] placeholder-[#8B261D]/35' : 'text-zinc-300 placeholder-zinc-600'}`}
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-2.5">
                            {filteredGroups.map(group => {
                                const Icon = groupIcon(group.id, group.tone);
                                const meta = groupMeta(group.id, theme, lang, group.tone);
                                const showAll = openGroups[group.id] ?? false;
                                const totalCount = sourceGroups.find(sourceGroup => sourceGroup.id === group.id)?.items.length || group.items.length;
                                const selectedCount = (sourceGroups.find(sourceGroup => sourceGroup.id === group.id)?.items || group.items)
                                    .filter(item => !isItemEmpty(item, draftValues[item.id] ?? item.value)).length;
                                return (
                                    <div key={group.id} className={`mb-3 overflow-hidden rounded-xl border border-l-4 ${theme === 'retro' ? 'bg-white/45 border-[#8B261D]/10' : 'bg-zinc-950/50 border-zinc-800/80'} ${meta.border}`}>
                                        <button
                                            type="button"
                                            onClick={() => setOpenGroups(prev => ({ ...prev, [group.id]: !showAll }))}
                                            className={`flex w-full items-center gap-2 px-3 py-3 text-left ${meta.header} ${theme === 'retro' ? 'text-[#3D1A16]' : 'text-zinc-200'}`}
                                        >
                                            {showAll ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                            <span className={`rounded px-1.5 py-0.5 text-[9px] font-black ${meta.badge}`}>{meta.index}</span>
                                            <Icon size={14} className={meta.icon} />
                                            <div className="min-w-0 flex-1">
                                                <div className="truncate text-xs font-black uppercase tracking-wider">{group.title}</div>
                                                <div className={`mt-0.5 truncate text-[9px] font-bold uppercase tracking-wider ${theme === 'retro' ? 'text-black/35' : 'text-zinc-600'}`}>{meta.eyebrow}</div>
                                            </div>
                                            <span className={`rounded-full px-2 py-0.5 text-[9px] font-mono ${meta.badge}`}>
                                                {selectedCount}/{totalCount}
                                            </span>
                                            <span className={`hidden xl:inline text-[9px] font-bold ${theme === 'retro' ? 'text-[#8B261D]/45' : 'text-zinc-600'}`}>
                                                {showAll ? (lang === 'EN' ? 'Selected Only' : '收起未选') : (lang === 'EN' ? 'Show Empty' : '展开未选')}
                                            </span>
                                        </button>

                                        <div className={`space-y-1.5 border-t p-2 ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800/70'}`}>
                                            {group.items.length === 0 ? (
                                                <div className={`px-2 py-3 text-center text-[10px] ${theme === 'retro' ? 'text-[#8B261D]/45' : 'text-zinc-600'}`}>
                                                    {lang === 'EN' ? 'No selected values in this section.' : '本组暂无已选参数。'}
                                                </div>
                                            ) : (
                                                group.items.map(item => (
                                                    <div key={item.id}>
                                                        {renderValueControl(item)}
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </aside>

                    <section className="flex min-w-0 flex-1 flex-col">
                        <div className={`flex h-11 shrink-0 items-center justify-between border-b px-5 ${theme === 'retro' ? 'bg-white/50 border-[#8B261D]/10' : 'bg-[#070707] border-zinc-800'}`}>
                            <div className="flex items-center gap-3">
                                <div className={`text-[10px] font-black uppercase tracking-widest ${theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'}`}>
                                    {lang === 'EN' ? 'Live Prompt' : '实时指令'}
                                </div>
                                <div className={`flex rounded-lg border p-0.5 ${theme === 'retro' ? 'border-[#8B261D]/15 bg-white/60' : 'border-zinc-800 bg-zinc-950'}`}>
                                    <button
                                        type="button"
                                        onClick={() => setPreviewMode('preview')}
                                        className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold transition-all ${previewMode === 'preview' ? (theme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-zinc-800 text-white') : (theme === 'retro' ? 'text-[#8B261D]/55 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-zinc-300')}`}
                                    >
                                        <Eye size={12} />
                                        {lang === 'EN' ? 'Preview' : '预览'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPreviewMode('edit')}
                                        className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold transition-all ${previewMode === 'edit' ? (theme === 'retro' ? 'bg-[#8B261D] text-white' : 'bg-zinc-800 text-white') : (theme === 'retro' ? 'text-[#8B261D]/55 hover:text-[#8B261D]' : 'text-zinc-500 hover:text-zinc-300')}`}
                                    >
                                        <Edit3 size={12} />
                                        {lang === 'EN' ? 'Edit' : '编辑'}
                                    </button>
                                </div>
                            </div>
                            <div className={`text-[10px] font-mono ${theme === 'retro' ? 'text-[#8B261D]/45' : 'text-zinc-700'}`}>
                                {snapshot.length.toLocaleString()} chars
                            </div>
                        </div>
                        {previewMode === 'preview' ? (
                            <div className={`flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 whitespace-pre-wrap break-words font-mono text-xs md:text-sm leading-relaxed ${theme === 'retro' ? 'bg-white text-[#3D1A16]' : 'bg-black text-zinc-300'}`}>
                                {renderPromptPreview(snapshot, theme, lang)}
                            </div>
                        ) : (
                            <textarea
                                value={snapshot}
                                onChange={(e) => setSnapshot(e.target.value)}
                                className={`flex-1 overflow-y-auto custom-scrollbar resize-none p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed outline-none ${theme === 'retro' ? 'bg-white text-[#3D1A16]' : 'bg-black text-zinc-300'}`}
                                placeholder={lang === 'EN' ? 'Edit prompt text...' : '编辑指令文本...'}
                            />
                        )}
                    </section>
                </div>
            </div>
            {activeLibraryItem && (
                <NarrativeLibraryModal
                    isOpen={Boolean(activeLibraryItem)}
                    onClose={() => setActiveLibraryItemId(null)}
                    blockId={activeLibraryItem.id}
                    blockName={activeLibraryItem.label}
                    selectedTags={normalizeTagValue(draftValues[activeLibraryItem.id] ?? activeLibraryItem.value)}
                    onToggleTag={toggleLibraryTag}
                    onClear={() => updateValue(activeLibraryItem.id, [])}
                    lang={lang}
                    driverType={activeLibraryItem.driverType || DriverType.NARRATIVE}
                />
            )}
        </div>,
        document.body
    );
};

export const AdminXRayButton: React.FC<AdminXRayButtonProps> = ({
    isAdmin = false,
    lang = 'CN',
    title,
    payload,
    getPayload,
    sources,
    buildPayload,
    className = '',
    buttonClassName = '',
    iconSize = 14,
    disabled = false
}) => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    if (!isAdmin) return null;

    const openInspector = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;
        setIsOpen(true);
    };

    return (
        <>
            <button
                type="button"
                onClick={openInspector}
                disabled={disabled}
                className={buttonClassName || `flex items-center justify-center rounded-lg border transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${className || (theme === 'retro' ? 'h-9 w-9 bg-white border-[#8B261D]/25 text-[#8B261D] hover:bg-[#8B261D]/10' : 'h-9 w-9 bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-gold-primary hover:border-gold-primary')}`}
                title={lang === 'EN' ? 'X-Ray Prompt Inspector' : 'X-Ray 指令透视仪'}
            >
                <Terminal size={iconSize} />
            </button>
            <XRayInspectorModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                lang={lang}
                title={title}
                payload={payload}
                getPayload={getPayload}
                sources={sources}
                buildPayload={buildPayload}
            />
        </>
    );
};
