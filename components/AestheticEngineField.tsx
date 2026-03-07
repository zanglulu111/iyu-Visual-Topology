
import React, { useState, useCallback, useEffect } from 'react';
import { NarrativeEngineFieldProps } from './NarrativeEngineField';
import {
    AESTHETIC_ENGINE_BLOCKS,
    AESTHETIC_ENGINE_LIBRARY
} from '../data/aesthetic_data';
import {
    COMMERCIAL_ENGINE_BLOCKS,
    COMMERCIAL_ENGINE_LIBRARY
} from '../data/commercial_data';
import { ALL_SKIN_BLOCKS, SKIN_LIBRARY } from '../data/skin_libraries';
import { AES_COLOR_PRESETS } from '../data/aesthetic_libraries/color_presets';
import { MASTER_PRESETS, MASTER_PRESETS_REALISM, MASTER_PRESETS_STYLIZED } from '../data/master_presets';
import { DriverType, NarrativeBlockDef, LibraryCategoryDef, NarrativeFieldState, AestheticLogicMode } from '../types';
import { BookOpen, Camera, Eye, Zap, Box, Lock, RotateCcw, Paintbrush, Terminal, Check, Copy, Edit3, ArrowDownToLine, Eraser, Plus, X, Wand2, LayoutGrid, Palette, Dice5, Unlock, User, Layout, ChevronUp, ChevronDown, ChevronsUp, ChevronsDown } from 'lucide-react';
import { ProphecySlot } from './ProphecySlot';
import { NarrativeLibraryModal } from './NarrativeLibraryModal';
import { generateAestheticSmartRandom, HUMAN_BLOCKS, CREATURE_BLOCKS, AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY, getSingleRandomTag } from '../services/randomizer';
import { generateAestheticPrompt } from '../utils/promptUtils';
import { AESTHETIC_LOGIC_TEMPLATES, BLOCK_LIMITS } from '../constants';
import { findItemFull } from '../services/dataRegistry';
import { BorromeanRings } from './BorromeanRings';

const iconMap: Record<string, any> = {
    User, Zap, Eye, Palette, Camera, Layout
};

// --- Extracted Components to prevent re-render bugs ---
const ModuleContainer = ({ id, lockedModules, moveModule, children }: React.PropsWithChildren<{
    id: string,
    lockedModules: Record<string, boolean>,
    moveModule: (id: string, dir: 'TOP' | 'UP' | 'DOWN' | 'BOTTOM') => void
}>) => {
    const isLocked = lockedModules[id];
    const isFixed = ['PRESETS', 'PALETTE', 'STYLE'].includes(id);
    const borderColor = "border-rose-500/20";

    return (
        <div
            className={`flex flex-row gap-0 rounded-xl border ${borderColor} ${isLocked ? 'bg-black/40 grayscale-[0.5]' : 'bg-white/5'} w-full relative transition-all duration-300 shadow-sm`}
        >
            <div className="flex flex-col items-center justify-center border-r border-white/5 bg-black/20 w-7 shrink-0 py-2 gap-1 rounded-l-xl">
                {!isFixed && (
                    <>
                        <button onClick={() => moveModule(id, 'TOP')} className="p-0.5 text-zinc-600 hover:text-rose-400 transition-colors" title="置顶"><ChevronsUp size={12} /></button>
                        <button onClick={() => moveModule(id, 'UP')} className="p-0.5 text-zinc-600 hover:text-rose-400 transition-colors" title="上移"><ChevronUp size={12} /></button>
                        <button onClick={() => moveModule(id, 'DOWN')} className="p-0.5 text-zinc-600 hover:text-rose-400 transition-colors" title="下移"><ChevronDown size={12} /></button>
                        <button onClick={() => moveModule(id, 'BOTTOM')} className="p-0.5 text-zinc-600 hover:text-rose-400 transition-colors" title="置底"><ChevronsDown size={12} /></button>
                    </>
                )}
            </div>
            <div className="flex-1 flex flex-col gap-1 p-2">
                {children}
            </div>
        </div>
    );
};

const ModuleHeader = ({ icon: Icon, label, actionButtons }: { icon: any, label: string, actionButtons: React.ReactNode }) => (
    <div className="flex items-center justify-between mb-0.5 pl-3">
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400">
            <Icon size={12} className="text-rose-400" /> {label}
        </div>
        {actionButtons}
    </div>
);

export const AestheticEngineField: React.FC<NarrativeEngineFieldProps> = ({
    fieldState, onChange, lang, driverType, subjectType,
    lockedModules, onToggleLock, lockedTags, onToggleTagLock, onRandomizeTag,
    customLibraryDefs, onAddCustomDef, aestheticMode, onAestheticModeChange,
    colorPalette = [], onPaletteChange, onApplyPreset, showRings = true
}) => {
    const [libraryModalOpen, setLibraryModalOpen] = useState(false);
    const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
    const [compilerLang, setCompilerLang] = useState<'CN' | 'EN'>('EN');
    const [compilerMode, setCompilerMode] = useState<'TEXT' | 'JSON' | 'PROMPT'>('TEXT');
    const [userManualPrompt, setUserManualPrompt] = useState("");
    const [copiedCategoryId, setCopiedCategoryId] = useState<string | null>(null);
    const [logicMode, setLogicMode] = useState<AestheticLogicMode>('DEFAULT');

    // Default order
    const DEFAULT_AESTHETIC_ORDER = [
        'PRESETS', 'PALETTE', 'STYLE', 'L1.1', 'L1.2', 'SUBJECT', 'STAGE', 'VIBE', 'RENDER'
    ];
    const [aestheticModuleOrder, setAestheticModuleOrder] = useState<string[]>(DEFAULT_AESTHETIC_ORDER);

    const isStylized = aestheticMode === 'STYLIZED';
    const isRealism = aestheticMode === 'REALISM';

    useEffect(() => {
        if (fieldState['aes_logic_mode']?.[0]) {
            const mode = fieldState['aes_logic_mode'][0] as AestheticLogicMode;
            if (AESTHETIC_LOGIC_TEMPLATES.some(t => t.id === mode)) {
                setLogicMode(mode);
            }
        }
    }, [fieldState]);

    const handleLogicModeChange = (mode: AestheticLogicMode) => {
        setLogicMode(mode);
        onChange({ ...fieldState, 'aes_logic_mode': [mode] });

        let newOrder = [...DEFAULT_AESTHETIC_ORDER];
        switch (mode) {
            case 'IDENTITY':
                newOrder = ['PRESETS', 'PALETTE', 'SUBJECT', 'STYLE', 'L1.2', 'STAGE', 'VIBE', 'L1.1', 'RENDER'];
                break;
            case 'ACTION':
                newOrder = ['PRESETS', 'PALETTE', 'SUBJECT', 'L1.2', 'STAGE', 'VIBE', 'STYLE', 'L1.1', 'RENDER'];
                break;
            case 'ATMOSPHERE':
                newOrder = ['PRESETS', 'PALETTE', 'VIBE', 'STAGE', 'STYLE', 'L1.1', 'L1.2', 'SUBJECT', 'RENDER'];
                break;
            case 'LOOK':
                newOrder = ['PRESETS', 'PALETTE', 'STYLE', 'L1.1', 'SUBJECT', 'L1.2', 'RENDER', 'VIBE', 'STAGE'];
                break;
            case 'TECH':
                newOrder = ['PRESETS', 'PALETTE', 'L1.1', 'RENDER', 'L1.2', 'VIBE', 'STAGE', 'SUBJECT', 'STYLE'];
                break;
            case 'DEFAULT':
            default:
                newOrder = DEFAULT_AESTHETIC_ORDER;
                break;
        }
        setAestheticModuleOrder(newOrder);
    };

    const ENGINE_BLOCKS: NarrativeBlockDef[] = [
        ...AESTHETIC_ENGINE_BLOCKS.filter(b => b.id !== 'aes_render'),
        (isRealism
            ? { id: "aes_render_real", name: "画质增强 (写实)", enName: "QUALITY (REAL)", description: "摄影与写实渲染精度。", tags: [] }
            : { id: "aes_render_art", name: "画质增强 (美术)", enName: "QUALITY (ART)", description: "美术与动画风格质量。", tags: [] }),
        ...ALL_SKIN_BLOCKS,
        ...COMMERCIAL_ENGINE_BLOCKS
    ];

    const isBlockLockedByHierarchy = useCallback((blockId: string) => {
        if (lockedModules[blockId]) return true;
        const cat = AESTHETIC_GLOBAL_BLOCK_TO_CATEGORY[blockId];
        if (cat && lockedModules[cat]) return true;
        if (HUMAN_BLOCKS.includes(blockId) && lockedModules['SUBJECT']) return true;
        if (CREATURE_BLOCKS.includes(blockId) && lockedModules['SUBJECT']) return true;
        return false;
    }, [lockedModules]);

    const openLibrary = (blockId: string) => {
        if (isBlockLockedByHierarchy(blockId)) return;
        setActiveBlockId(blockId);
        setLibraryModalOpen(true);
    };

    const removeTag = (blockId: string, tag: string) => {
        if (isBlockLockedByHierarchy(blockId)) return;
        const rawCurrent = fieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        onChange({ ...fieldState, [blockId]: current.filter(t => t !== tag) });
    };

    const clearBlock = (blockId: string) => {
        if (isBlockLockedByHierarchy(blockId)) return;
        onChange({ ...fieldState, [blockId]: [] });
    };

    const handleRandomizeSingleBlock = (blockId: string) => {
        if (isBlockLockedByHierarchy(blockId)) return;
        const currentTags = fieldState[blockId] || [];
        const currentTag = currentTags.length > 0 ? currentTags[0] : "";
        const newTag = getSingleRandomTag(blockId, currentTag, driverType, fieldState);
        const newState = { ...fieldState };

        if (newTag) {
            newState[blockId] = [newTag];
        }

        // --- Special Handling for Presets & Palette Randomization ---
        if (blockId === 'aes_palette_preset' && newState[blockId].length > 0) {
            const pName = newState[blockId][0];
            const p = MASTER_PRESETS.find(cp => cp.name === pName);
            if (p) onApplyPreset?.(p);
        }

        // FIX: Ensure Color Palette also updates the hex codes visual
        if (blockId === 'aes_color_palette' && newState[blockId].length > 0) {
            const pName = newState[blockId][0];
            const p = AES_COLOR_PRESETS.find(p => p.name === pName);
            if (p && onPaletteChange) {
                const nextPalette = [...p.colors];
                while (nextPalette.length < 7) nextPalette.push("");
                onPaletteChange(nextPalette.slice(0, 7));
            }
        }

        onChange(newState);
    };

    // Wrapper to handle tag-level randomization (The shuffle icon on existing tags)
    const handleRandomizeTagWrapper = (blockId: string, tag: string) => {
        if (blockId === 'aes_color_palette') {
            handleRandomizeSingleBlock(blockId);
            return;
        }
        if (onRandomizeTag) {
            onRandomizeTag(blockId, tag);
        }
    };

    const getItemDetails = useCallback((tagName: string, targetBlockId?: string) => {
        if (customLibraryDefs && customLibraryDefs[tagName]) {
            return { name: tagName, def: customLibraryDefs[tagName].def, core: customLibraryDefs[tagName].core };
        }
        const chinesePart = tagName.split('(')[0].trim();
        const englishPartMatch = tagName.match(/\(([^)]+)\)/);
        const englishPart = englishPartMatch ? englishPartMatch[1].trim() : null;

        if (targetBlockId === 'aes_palette_preset') {
            const available = isRealism ? MASTER_PRESETS_REALISM : MASTER_PRESETS_STYLIZED;
            return available.find(p =>
                p.id === tagName ||
                p.name === tagName ||
                p.name.split('(')[0].trim() === chinesePart ||
                (englishPart && p.name.includes(`(${englishPart})`))
            );
        }

        if (targetBlockId === 'aes_color_palette') {
            return AES_COLOR_PRESETS.find(p =>
                p.id === tagName ||
                p.name === tagName ||
                p.name.split('(')[0].trim() === chinesePart ||
                (englishPart && p.name.includes(`(${englishPart})`))
            );
        }
        return findItemFull(tagName, targetBlockId);
    }, [customLibraryDefs, isRealism]);

    const getBilingualText = (text: string) => {
        if (!text) return "";
        const englishMatch = text.match(/\((.*?)\)/);
        const chinesePart = text.split('(')[0].trim();
        const englishPart = englishMatch ? englishMatch[1].trim() : "";
        return lang === 'EN' && englishPart ? englishPart : chinesePart;
    };

    const getEnglishTag = (tag: string) => {
        const match = tag.match(/\((.*?)\)/);
        return match ? match[1].trim() : tag.trim();
    };

    const formatTag = (tag: string) => tag.split('(')[0].trim();

    const getLibraryCount = (blockId: string): number => {
        if (blockId === 'aes_palette_preset') return isRealism ? MASTER_PRESETS_REALISM.length : MASTER_PRESETS_STYLIZED.length;
        if (blockId === 'aes_color_palette') return AES_COLOR_PRESETS.length;
        const libId = blockId === 'skin_era' ? 'skin_era_lib' : `${blockId}_lib`;
        let cat = AESTHETIC_ENGINE_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        cat = SKIN_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        cat = COMMERCIAL_ENGINE_LIBRARY.find(c => c.id === libId);
        if (cat) return cat.items.length;
        return 0;
    };

    const toggleTag = (blockId: string, tag: string) => {
        if (isBlockLockedByHierarchy(blockId)) return;
        if (blockId === 'aes_palette_preset') {
            const preset = MASTER_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset) onApplyPreset?.(preset);
            else onChange({ ...fieldState, [blockId]: [tag] });
            setLibraryModalOpen(false);
            return;
        }
        if (blockId === 'aes_color_palette') {
            const preset = AES_COLOR_PRESETS.find(p => p.name === tag || p.id === tag);
            if (preset && onPaletteChange) {
                const nextPalette = [...preset.colors];
                while (nextPalette.length < 7) nextPalette.push("");
                onPaletteChange(nextPalette.slice(0, 7));
            }
            onChange({ ...fieldState, [blockId]: [tag] });
            setLibraryModalOpen(false);
            return;
        }
        const rawCurrent = fieldState[blockId];
        const current = Array.isArray(rawCurrent) ? rawCurrent : (rawCurrent ? [String(rawCurrent)] : []);
        const limit = BLOCK_LIMITS[blockId] || 1;
        let newState = { ...fieldState };
        if (['aes_action_static', 'aes_action_dynamic', 'aes_action_complex'].includes(blockId)) {
            ['aes_action_static', 'aes_action_dynamic', 'aes_action_complex'].forEach(id => { if (id !== blockId) newState[id] = []; });
        }
        if (['aes_hair_style_f', 'aes_hair_style_m'].includes(blockId)) {
            ['aes_hair_style_f', 'aes_hair_style_m'].forEach(id => { if (id !== blockId) newState[id] = []; });
        }
        if (['aes_scene_real', 'aes_scene_abstract', 'aes_scene_surreal'].includes(blockId)) {
            ['aes_scene_real', 'aes_scene_abstract', 'aes_scene_surreal'].forEach(id => { if (id !== blockId) newState[id] = []; });
        }
        if (limit === 1) {
            newState[blockId] = current.includes(tag) ? [] : [tag];
            updateNarrativeState(newState);
            return;
        }
        if (current.includes(tag)) {
            newState[blockId] = current.filter(t => t !== tag);
        } else {
            if (current.length >= limit) {
                alert(lang === 'EN' ? `Max ${limit} items for this module.` : `该模块最多选择 ${limit} 个。`);
                return;
            }
            newState[blockId] = [...current, tag];
        }
        updateNarrativeState(newState);
    };

    const updateNarrativeState = (newState: NarrativeFieldState) => {
        onChange(newState);
    };

    const moveModule = (id: string, direction: 'TOP' | 'UP' | 'DOWN' | 'BOTTOM') => {
        const fixedIds = ['PRESETS', 'PALETTE', 'STYLE'];
        if (fixedIds.includes(id)) return;
        const index = aestheticModuleOrder.indexOf(id);
        if (index === -1) return;
        const newOrder = [...aestheticModuleOrder];
        const firstMovableIndex = fixedIds.length;
        switch (direction) {
            case 'TOP':
                newOrder.splice(index, 1);
                newOrder.splice(firstMovableIndex, 0, id);
                break;
            case 'BOTTOM':
                newOrder.splice(index, 1);
                newOrder.push(id);
                break;
            case 'UP':
                if (index > firstMovableIndex) {
                    [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
                }
                break;
            case 'DOWN':
                if (index < newOrder.length - 1) {
                    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
                }
                break;
        }
        setAestheticModuleOrder(newOrder);
    };

    const getCompilerOutput = () => {
        const cleanString = (s: string) => s.trim().replace(/[，。,.;；]$/, "");

        const styleBlockIds = [
            'aes_color_palette', 'aes_director_style',
            'aes_photo_style', 'aes_art_style', 'aes_anim_director', 'aes_art_movement', 'aes_poster_style'
        ];

        const cameraBlockIds = ['aes_camera_system'];
        const lensBlockIds = ['aes_lens_series', 'aes_focal_length'];
        const lightingBlockIds = ['aes_light_type', 'aes_light_mood', 'aes_light_direction'];
        const renderBlockIds = ['aes_render_real', 'aes_render_art', 'aes_render'];
        const filmBlockIds = ['aes_color_science', 'aes_physical_grain', 'aes_base_tone'];

        const getContentWithDef = (bid: string) => {
            const tags = fieldState[bid] || [];

            // Special handling for custom text input fields: just return the raw text
            if (bid === 'aes_l2_custom' || bid === 'aes_l3_custom') {
                if (tags.length > 0 && tags[0]) return tags[0];
                return undefined;
            }

            if (!tags.length) return undefined;

            return tags.map(t => {
                const item = getItemDetails(t, bid) as any;
                let name = compilerLang === 'EN' ? getEnglishTag(t) : formatTag(t);

                // Prefix Logic
                if (styleBlockIds.includes(bid) && !name.toLowerCase().startsWith('style of')) name = `Style of ${name}`;
                else if (cameraBlockIds.includes(bid)) name = `Shot on ${name}`;
                else if (lensBlockIds.includes(bid)) name = `Using ${name}`;
                else if (lightingBlockIds.includes(bid) && !name.toLowerCase().includes('lighting')) name = `Lighting: ${name}`;
                else if (renderBlockIds.includes(bid)) name = `Rendered in ${name}`;
                else if (filmBlockIds.includes(bid)) name = `Film stock: ${name}`;

                let def = "";
                if (bid === 'aes_color_palette') {
                    if (item) def = (compilerLang === 'EN' ? (item.defEn || item.def) : item.def) || "";
                } else {
                    if (item) {
                        if (compilerLang === 'EN') {
                            if ((item as any).defEn) def = (item as any).defEn;
                            else if (item.def && !/[\u4e00-\u9fa5]/.test(item.def)) def = item.def;
                        } else {
                            def = item.def || "";
                        }
                    }
                }

                const cleanedDef = cleanString(def);

                // For Render Quality blocks, we ONLY want the definition (keywords), not the name.
                if ((bid === 'aes_render_real' || bid === 'aes_render_art' || bid === 'aes_render') && cleanedDef) {
                    return cleanedDef;
                }

                if (cleanedDef) return `${name}, ${cleanedDef}`;
                return name;
            }).join('; ');
        };

        const getFormattedValueForText = (bid: string, noLabel = false) => {
            const content = getContentWithDef(bid);
            if (!content) return null;
            if (noLabel) return content;
            const blockDef = ENGINE_BLOCKS.find(b => b.id === bid);
            const label = blockDef ? (compilerLang === 'EN' ? blockDef.enName : blockDef.name) : bid;
            return `${label}: ${content}`;
        };

        const moduleBlocksMap: Record<string, { label: { CN: string, EN: string }, blocks: string[] }> = {
            'L1.1': {
                label: { CN: '质感与风格', EN: 'MEDIUM&STYLE' },
                blocks: [
                    'aes_color_palette',
                    ...(isStylized ? ['aes_anim_director', 'aes_art_movement'] : ['aes_director_style', 'aes_photo_style', 'aes_art_style']),
                    'aes_poster_style',
                    ...(isRealism ? ['aes_camera_system', 'aes_lens_series', 'aes_optical_format', 'aes_texture_render', 'aes_physical_grain', 'aes_base_tone', 'aes_color_science'] : ['aes_art_medium', 'aes_line_quality', 'aes_canvas_texture'])
                ]
            },
            'L1.2': { label: { CN: '摄影构图', EN: 'CINEMATOGRAPHY' }, blocks: ['aes_image_focus', 'aes_shot_size', 'aes_visual_balance', 'aes_perspective', 'aes_angle', 'aes_focal_length', 'aes_depth', 'aes_shutter', 'aes_lens_fx'] },
            'SUBJECT': { label: { CN: '主体详情', EN: 'SUBJECT' }, blocks: [...(subjectType === 'HUMAN' ? HUMAN_BLOCKS : CREATURE_BLOCKS), 'aes_l2_custom'] },
            'STAGE': { label: { CN: '场景与氛围', EN: 'SCENE' }, blocks: ['aes_scene_real', 'aes_scene_surreal', 'aes_scene_abstract', 'aes_atmosphere', 'aes_particles', 'aes_l3_custom'] },
            'VIBE': { label: { CN: '光影方案', EN: 'LIGHTING' }, blocks: ['aes_light_mood', 'aes_light_type', 'aes_light_direction', 'aes_light_shape'] },
            'RENDER': { label: { CN: '画质增强', EN: 'QUALITY' }, blocks: isRealism ? ['aes_render_real'] : ['aes_render_art'] }
        };

        if (compilerMode === 'JSON') {
            const getValue = (key: string) => getContentWithDef(key) || undefined;
            const getJoinedValues = (keys: string[]) => {
                const vals = keys.map(k => getValue(k)).filter(Boolean);
                return vals.length === 0 ? undefined : vals.join(' ');
            };
            const getArtStyle = () => {
                const styleKeys = isStylized ? ['aes_art_movement', 'aes_poster_style'] : ['aes_art_style', 'aes_poster_style'];
                const styles = getJoinedValues(styleKeys);
                const preset = getValue('aes_color_palette');
                if (preset) return styles ? `${preset} ${styles}` : preset;
                return styles;
            };
            const getColorTheme = () => undefined;

            const jsonStructure = {
                metadata: { project_type: "AESTHETIC_VISUAL", logic_focus: logicMode, language: compilerLang, timestamp: new Date().toISOString() },
                soul: { art_style: getArtStyle(), director_influence: getJoinedValues(isStylized ? ['aes_anim_director'] : ['aes_director_style']), color_theme: getColorTheme() },
                cinematography: { camera_system: getValue('aes_camera_system'), optical_format: getValue('aes_optical_format'), lens_series: getValue('aes_lens_series'), focal_length: getValue('aes_focal_length'), shutter_logic: getValue('aes_shutter'), depth_of_field: getValue('aes_depth'), perspective_geometry: getValue('aes_perspective') },
                composition: { category: getValue('aes_image_focus'), shot_size: getValue('aes_shot_size'), camera_angle: getValue('aes_angle'), visual_balance: getValue('aes_visual_balance'), optical_fx: getValue('aes_lens_fx') },
                subject: {
                    identity_info: subjectType === 'HUMAN' ? getJoinedValues(['aes_age', 'aes_ethnicity', 'aes_gender', 'aes_persona']) : getJoinedValues(['aes_creature_size', 'aes_creature_class', 'aes_creature_element']),
                    pose_and_action: subjectType === 'HUMAN' ? getJoinedValues(['aes_action_static', 'aes_action_dynamic', 'aes_action_complex']) : getJoinedValues(['aes_creature_action']),
                    physical_traits: subjectType === 'HUMAN' ? getJoinedValues(['aes_hair_color', 'aes_hair_style_f', 'aes_hair_style_m', 'aes_eye_color', 'aes_face_features', 'aes_body_features', 'aes_skin_texture']) : getJoinedValues(['aes_creature_head', 'aes_creature_body', 'aes_creature_texture']),
                    custom_details: getValue('aes_l2_custom')
                },
                environment: { setting: getJoinedValues(['aes_scene_real', 'aes_scene_surreal', 'aes_scene_abstract']), lighting: getJoinedValues(['aes_light_mood', 'aes_light_type', 'aes_light_direction', 'aes_light_shape']), background_imagery: getValue('aes_particles'), custom_details: getValue('aes_l3_custom') },
                atmosphere: { air_medium: getJoinedValues(['aes_atmosphere']) },
                render_specs: { visual_texture: isStylized ? getValue('aes_art_medium') : getValue('aes_texture_render'), physical_grain: isStylized ? getJoinedValues(['aes_line_quality', 'aes_canvas_texture']) : getValue('aes_physical_grain'), developing_protocol: getValue('aes_base_tone'), color_science: getValue('aes_color_science'), render_booster: isStylized ? getValue('aes_render_art') : getValue('aes_render_real') },
                color_palette: { hex_codes: colorPalette.filter(c => c !== "") }
            };
            return JSON.stringify(jsonStructure, (key, value) => (value === null || value === undefined) ? undefined : value, 2);
        }

        if (compilerMode === 'PROMPT') {
            return generateAestheticPrompt(
                fieldState,
                subjectType,
                compilerLang === 'CN' ? 'CN' : 'EN',
                customLibraryDefs || {},
                logicMode,
                aestheticModuleOrder
            );
        }

        let output = "";

        aestheticModuleOrder.forEach(modId => {
            if (['PRESETS', 'PALETTE', 'STYLE'].includes(modId)) return;
            const mConfig = moduleBlocksMap[modId];
            if (!mConfig) return;
            const items = mConfig.blocks.map(bid => {
                if (bid === 'aes_l2_custom' || bid === 'aes_l3_custom') {
                    const val = fieldState[bid]?.[0];
                    return val ? `(Custom) ${val}` : null;
                }
                const hideInternalLabel = (modId === 'L1.1' && (bid === 'aes_color_palette' || bid === 'aes_director_style' || bid === 'aes_photo_style' || bid === 'aes_art_style' || bid === 'aes_anim_director' || bid === 'aes_art_movement'))
                    || (modId === 'RENDER' && (bid === 'aes_render_real' || bid === 'aes_render_art'));
                return getFormattedValueForText(bid, hideInternalLabel);
            }).filter(Boolean);
            if (items.length > 0) {
                const title = compilerLang === 'EN' ? mConfig.label.EN : mConfig.label.CN;
                output += `(${title}) ${items.join('; ')}\n`;
            }
        });

        return output.trim() || (lang === 'EN' ? "// Waiting for input..." : "// 等待输入...");
    };

    const renderActionButtons = (blockIds: string[], categoryLabel: string) => {
        const isLocked = lockedModules[categoryLabel];
        const handleCopyCategory = () => {
            const parts: string[] = [];
            if (categoryLabel === 'SUBJECT' && fieldState['aes_l2_custom']?.[0]) parts.push(`[SUBJECT DETAIL]${fieldState['aes_l2_custom'][0]}`);
            if (categoryLabel === 'STAGE' && fieldState['aes_l3_custom']?.[0]) parts.push(`[SCENE DETAIL]${fieldState['aes_l3_custom'][0]}`);

            blockIds.forEach(id => {
                const tags = fieldState[id];
                if (tags && tags.length > 0) {
                    const blockDef = ENGINE_BLOCKS.find(b => b.id === id);
                    const catLabel = blockDef?.enName || blockDef?.name || id;
                    const tagGroup = tags.map(tag => {
                        const name = getEnglishTag(tag);
                        const item = getItemDetails(tag, id) as any;
                        const def = item ? (compilerLang === 'EN' ? ((item as any).defEn || item.def) : item.def) : "";
                        return def ? `${name}; ${def}` : name;
                    }).join(';');
                    parts.push(`[${catLabel.toUpperCase()}]${tagGroup}`);
                }
            });
            if (parts.length > 0) {
                navigator.clipboard.writeText(categoryLabel + ":" + parts.join(';'));
                setCopiedCategoryId(categoryLabel);
                setTimeout(() => setCopiedCategoryId(null), 2000);
            }
        };

        const handleRandomize = () => {
            if (lockedModules[categoryLabel]) return;
            if (categoryLabel === 'PRESETS') {
                const availablePresets = isRealism ? MASTER_PRESETS_REALISM : MASTER_PRESETS_STYLIZED;
                const randomPreset = availablePresets[Math.floor(Math.random() * availablePresets.length)];
                onApplyPreset?.(randomPreset);
                return;
            }
            if (categoryLabel === 'PALETTE') {
                const randomPreset = AES_COLOR_PRESETS[Math.floor(Math.random() * AES_COLOR_PRESETS.length)];
                const newState = { ...fieldState };
                newState['aes_color_palette'] = [randomPreset.name];
                const nextPalette = [...randomPreset.colors];
                while (nextPalette.length < 7) nextPalette.push("");
                onPaletteChange?.(nextPalette.slice(0, 7));
                onChange(newState);
                return;
            }
            const smartState = generateAestheticSmartRandom(fieldState, subjectType, lockedModules, lockedTags, aestheticMode);
            const newState = { ...fieldState };
            blockIds.forEach(id => {
                if (!isBlockLockedByHierarchy(id)) newState[id] = smartState[id] || [];
            });
            onChange(newState);
        };

        const handleReset = () => {
            if (lockedModules[categoryLabel]) return;
            const newState = { ...fieldState };
            if (categoryLabel === 'SUBJECT') delete newState['aes_l2_custom'];
            if (categoryLabel === 'STAGE') delete newState['aes_l3_custom'];
            if (categoryLabel === 'PALETTE') {
                onPaletteChange?.(Array(7).fill(""));
                newState['aes_color_palette'] = [];
                onChange(newState);
                return;
            }
            blockIds.forEach(id => {
                if (!isBlockLockedByHierarchy(id)) {
                    const locks = lockedTags[id] || [];
                    newState[id] = (fieldState[id] || []).filter(t => locks.includes(t));
                }
            });
            onChange(newState);
        };

        return (
            <div className="flex flex-row gap-1 items-center shrink-0" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleCopyCategory} className="p-1.5 rounded bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-white transition-all group">{copiedCategoryId === categoryLabel ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}</button>
                <button onClick={handleRandomize} disabled={isLocked} className={`p-1.5 rounded border transition-all group ${isLocked ? 'bg-zinc-950 border-zinc-900 text-zinc-800 cursor-not-allowed opacity-40' : 'bg-zinc-900/50 border-zinc-800 hover:border-rose-500/50 text-zinc-500 hover:text-rose-400'}`}><Dice5 size={12} className={!isLocked ? "group-hover:rotate-90 transition-transform duration-500" : ""} /></button>
                <button onClick={handleReset} disabled={isLocked} className={`p-1.5 rounded border transition-all group ${isLocked ? 'bg-zinc-950 border-zinc-900 text-zinc-800 cursor-not-allowed opacity-40' : 'bg-zinc-900/50 border-zinc-800 hover:border-red-500/50 text-zinc-500 hover:text-red-400'}`}><RotateCcw size={12} className={!isLocked ? "group-hover:-rotate-90 transition-transform duration-500" : ""} /></button>
                <button onClick={() => onToggleLock(categoryLabel)} className={`p-1.5 rounded border transition-all group ${isLocked ? 'bg-rose-900/30 border-rose-500 text-rose-400' : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600'}`}>{isLocked ? <Lock size={12} /> : <Unlock size={12} />}</button>
            </div>
        );
    };

    const renderModuleById = (id: string) => {
        const l0Blocks = isStylized ? ['aes_anim_director', 'aes_art_movement', 'aes_poster_style'] : ['aes_director_style', 'aes_photo_style', 'aes_art_style', 'aes_poster_style'];
        const l1_1Blocks = isRealism ? ['aes_camera_system', 'aes_lens_series', 'aes_optical_format', 'aes_texture_render', 'aes_physical_grain', 'aes_base_tone', 'aes_color_science'] : ['aes_art_medium', 'aes_line_quality', 'aes_canvas_texture'];
        const l1_2Blocks = ['aes_image_focus', 'aes_shot_size', 'aes_visual_balance', 'aes_perspective', 'aes_angle', 'aes_focal_length', 'aes_depth', 'aes_shutter', 'aes_lens_fx'];
        const l3Blocks = ['aes_scene_real', 'aes_scene_surreal', 'aes_scene_abstract', 'aes_atmosphere', 'aes_particles'];
        const l4Blocks = ['aes_light_mood', 'aes_light_type', 'aes_light_direction', 'aes_light_shape'];
        const l5Blocks = isRealism ? ['aes_render_real'] : ['aes_render_art'];

        const borderColor = "border-rose-500/20";
        const iconColor = "text-rose-400";

        const slot = (bid: string, small = true, props = {}) => (
            <ProphecySlot
                key={bid}
                blockId={bid}
                placeholderCN={ENGINE_BLOCKS.find(b => b.id === bid)?.name || bid}
                placeholderEN={ENGINE_BLOCKS.find(b => b.id === bid)?.enName || bid}
                fieldState={fieldState}
                lang={lang}
                driverType={driverType}
                onOpenLibrary={openLibrary}
                onRemoveTag={removeTag}
                onClearBlock={clearBlock}
                getItemDetails={getItemDetails}
                getBilingualText={getBilingualText}
                ENGINE_BLOCKS={ENGINE_BLOCKS}
                isSmall={small}
                onRandomizeBlock={handleRandomizeSingleBlock}
                onToggleLockBlock={onToggleLock}
                isBlockLocked={isBlockLockedByHierarchy(bid)}
                lockedTags={lockedTags}
                onToggleTagLock={onToggleTagLock}
                onRandomizeTag={handleRandomizeTagWrapper} // Use wrapper here
                getLibraryCount={getLibraryCount}
                {...props}
            />
        );

        const ModuleContent = ({ blocks }: { blocks: string[] }) => (
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs font-serif text-zinc-300 w-full pl-3">
                {blocks.map(bid => slot(bid, true))}
            </div>
        );

        switch (id) {
            case 'PRESETS':
                const selectedPresetName = fieldState['aes_palette_preset']?.[0];
                return (
                    <ModuleContainer key="PRESETS" id="PRESETS" lockedModules={lockedModules} moveModule={moveModule}>
                        <div className="flex items-center justify-between mb-0.5 pl-3">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400">
                                <Wand2 size={12} className={iconColor} />
                                {lang === 'EN' ? "MASTER BLUEPRINTS" : "集成预设"}
                            </div>
                            {renderActionButtons(['aes_palette_preset'], 'PRESETS')}
                        </div>
                        <div className="p-1 flex flex-row items-center gap-3 h-9 pl-3">
                            <button
                                onClick={() => openLibrary('aes_palette_preset')}
                                className={`shrink-0 h-7 px-2 border border-dashed border-zinc-700 rounded-md flex items-center justify-center gap-1.5 hover:bg-white/5 hover:border-rose-500/50 transition-all group/dash w-20 ${selectedPresetName ? 'bg-rose-500/5 border-rose-500/40' : ''}`}
                            >
                                <Plus size={10} className={selectedPresetName ? "text-rose-400" : "text-zinc-600 group-hover/dash:text-rose-400"} />
                                <span className={`text-[8px] font-bold uppercase tracking-tighter truncate ${selectedPresetName ? 'text-white' : 'text-zinc-500 group-hover/dash:text-rose-400'}`}>
                                    {selectedPresetName ? formatTag(selectedPresetName) : (lang === 'EN' ? "SELECT" : "选择")}
                                </span>
                            </button>
                            <div className="flex-1 overflow-y-auto h-7 self-center custom-scrollbar pr-1 grid grid-cols-4 gap-1.5 auto-rows-max">
                                {(isRealism ? MASTER_PRESETS_REALISM : MASTER_PRESETS_STYLIZED).map(preset => {
                                    const isSelected = fieldState['aes_palette_preset']?.includes(preset.name);
                                    return (
                                        <button
                                            key={preset.id}
                                            onClick={() => onApplyPreset?.(preset)}
                                            className={`flex items-center gap-1.5 px-2 py-1 h-7 rounded border transition-all text-left group/card relative w-full ${isSelected ? 'bg-rose-500/10 border-rose-500/40 shadow-sm' : 'bg-zinc-900/30 border-white/5 hover:bg-zinc-800 hover:border-white/10'}`}
                                        >
                                            <div className="flex gap-0.5 shrink-0">
                                                {preset.colors.slice(0, 2).map((c, i) => (
                                                    <div key={i} className="w-1 h-1 rounded-full ring-1 ring-black/30" style={{ backgroundColor: c }} />
                                                ))}
                                            </div>
                                            <span className={`text-[8px] font-bold tracking-tighter truncate flex-1 ${isSelected ? 'text-white' : 'text-zinc-500 group-hover/card:text-zinc-300'}`}>
                                                {lang === 'EN' ? preset.nameEn : preset.name.split('(')[0].trim()}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </ModuleContainer>
                );
            case 'PALETTE':
                const paletteTags = fieldState['aes_color_palette'] || [];
                const isPaletteBound = paletteTags.length > 0;
                return (
                    <ModuleContainer key="PALETTE" id="PALETTE" lockedModules={lockedModules} moveModule={moveModule}>
                        <div className="flex items-center justify-between mb-0.5 pl-3">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400">
                                <Palette size={12} className={iconColor} />
                                {lang === 'EN' ? "PALETTE" : "色彩"}
                            </div>
                            <div className="flex items-center gap-1 z-10">
                                {renderActionButtons(['aes_color_palette'], 'PALETTE')}
                            </div>
                        </div>
                        <div className="p-1 flex flex-row items-stretch gap-3 pl-3 min-h-[2rem]">
                            <div className="flex-1 flex items-center justify-center bg-zinc-900/30 border border-zinc-800 rounded px-2">
                                <ProphecySlot
                                    blockId="aes_color_palette"
                                    placeholderCN="色板库"
                                    placeholderEN="Library"
                                    isSmall={true}
                                    isTiny={false}
                                    isBlockLocked={isBlockLockedByHierarchy('aes_color_palette')}
                                    fieldState={fieldState}
                                    lang={lang}
                                    driverType={driverType}
                                    onOpenLibrary={openLibrary}
                                    onRemoveTag={removeTag}
                                    onClearBlock={clearBlock}
                                    getItemDetails={getItemDetails}
                                    getBilingualText={getBilingualText}
                                    ENGINE_BLOCKS={ENGINE_BLOCKS}
                                    onRandomizeBlock={handleRandomizeSingleBlock}
                                    onToggleLockBlock={onToggleLock}
                                    lockedTags={lockedTags}
                                    onToggleTagLock={onToggleTagLock}
                                    onRandomizeTag={handleRandomizeTagWrapper} // Use wrapper here
                                    getLibraryCount={getLibraryCount}
                                />
                            </div>
                            <div className="flex-1 flex gap-1 border-l border-white/10 pl-3 items-center relative group/hex">
                                {colorPalette.map((color, idx) => (
                                    <div key={idx} className={`flex-1 aspect-square rounded border relative overflow-hidden bg-zinc-900 group/color shadow-md min-w-[18px] max-w-[24px] ${isPaletteBound ? 'border-zinc-800 opacity-60 cursor-not-allowed' : 'border-zinc-700 cursor-pointer hover:border-zinc-500'}`} style={{ backgroundColor: color || '#111' }}>
                                        <input
                                            type="color"
                                            value={color || "#000000"}
                                            disabled={isPaletteBound}
                                            onChange={(e) => {
                                                const next = [...colorPalette];
                                                next[idx] = e.target.value;
                                                onPaletteChange?.(next);
                                            }}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                                        />
                                        {!color && <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"><Plus size={10} className="text-white" /></div>}
                                        {isPaletteBound && <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover/color:opacity-100 bg-black/40 transition-opacity"><Lock size={10} className="text-white" /></div>}
                                    </div>
                                ))}
                                <button
                                    onClick={() => onPaletteChange?.(Array(7).fill(""))}
                                    className="ml-2 p-1.5 rounded-md hover:bg-zinc-800 text-zinc-600 hover:text-red-400 transition-colors border border-transparent hover:border-zinc-700 shrink-0"
                                    title={lang === 'EN' ? "Clear Hex Codes" : "清空色值"}
                                >
                                    <Eraser size={12} />
                                </button>
                            </div>
                        </div>
                    </ModuleContainer>
                );
            case 'STYLE':
                return (
                    <ModuleContainer key="STYLE" id="STYLE" lockedModules={lockedModules} moveModule={moveModule}>
                        <div className="flex items-center justify-between mb-0.5 pl-3">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400"><BookOpen size={12} className={iconColor} /> {lang === 'EN' ? "SOUL" : "魂"}</div>
                            {renderActionButtons(l0Blocks, 'STYLE')}
                        </div>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs font-serif text-zinc-300 w-full pl-3">
                            {l0Blocks.map(bid => slot(bid, true))}
                        </div>
                    </ModuleContainer>
                );
            case 'L1.1':
                return (
                    <ModuleContainer key="L1.1" id="L1.1" lockedModules={lockedModules} moveModule={moveModule}>
                        <ModuleHeader icon={Eye} label={`L1.1 ${lang === 'EN' ? "Medium" : "质"}`} actionButtons={renderActionButtons(l1_1Blocks, 'L1.1')} />
                        <ModuleContent blocks={l1_1Blocks} />
                    </ModuleContainer>
                );
            case 'L1.2':
                return (
                    <ModuleContainer key="L1.2" id="L1.2" lockedModules={lockedModules} moveModule={moveModule}>
                        <ModuleHeader icon={Camera} label={`L1.2 ${lang === 'EN' ? "Lens" : "眼"}`} actionButtons={renderActionButtons(l1_2Blocks, 'L1.2')} />
                        <ModuleContent blocks={l1_2Blocks} />
                    </ModuleContainer>
                );
            case 'SUBJECT':
                if (subjectType === 'HUMAN') {
                    return (
                        <ModuleContainer key="SUBJECT" id="SUBJECT" lockedModules={lockedModules} moveModule={moveModule}>
                            <div className="flex items-center justify-between mb-0.5 pl-3">
                                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400"><User size={12} className={iconColor} /> L2 {lang === 'EN' ? "Subject" : "身"}</div>
                                {renderActionButtons(HUMAN_BLOCKS, 'SUBJECT')}
                            </div>
                            <div className="space-y-2 pl-3 min-w-0 py-2">
                                {/* Human Subject Layout */}
                                <div className="flex flex-wrap items-baseline gap-x-1 leading-loose">
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "A" : "一个"}</span>
                                    {slot('aes_age', true)}
                                    {slot('aes_gender', true)}
                                    {slot('aes_body_type', true)}
                                    {slot('aes_ethnicity', true)}
                                    {slot('aes_occupation', true)}
                                    {slot('aes_persona', true, { prefixCN: "(", suffixCN: ")", prefixEN: "(", suffixEN: ")" })}
                                    <span className="text-zinc-500 text-[12px] font-serif">,</span>
                                </div>
                                <div className="flex flex-wrap items-baseline gap-x-1 leading-loose">
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "with" : "长着"}</span>
                                    {slot('aes_hair_color', true)}
                                    {slot('aes_hair_style_f', true)}
                                    {slot('aes_hair_style_m', true)}
                                    <span className="text-zinc-500 text-[12px] font-serif">,</span>
                                    {slot('aes_eye_color', true)}
                                    {slot('aes_eye_shape', true)}
                                    {slot('aes_eye_fx', true)}
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "eyes." : "眼睛。"}</span>
                                </div>
                                <div className="flex flex-wrap items-baseline gap-x-1 leading-loose">
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "Face has" : "脸上有"}</span>
                                    {slot('aes_face_features', true)}
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? ", wearing a" : "，一副"}</span>
                                    {slot('aes_expression', true)}
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "expression." : "表情。"}</span>
                                </div>
                                <div className="flex flex-wrap items-baseline gap-x-1 leading-loose">
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "Skin is" : "皮肤是"}</span>
                                    {slot('aes_skin_texture', true)}
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? ", body has" : "，身上有"}</span>
                                    {slot('aes_body_features', true)}
                                </div>
                                <div className="flex flex-wrap items-baseline gap-x-1 leading-loose">
                                    <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "Action:" : "动作："}</span>
                                    {slot('aes_action_static', true)}
                                    {slot('aes_action_dynamic', true)}
                                    {slot('aes_action_complex', true)}
                                    <span className="text-zinc-500 text-[12px] font-serif">。</span>
                                </div>
                                <div className="mt-2 pr-2">
                                    <div className="relative">
                                        <textarea
                                            rows={3}
                                            value={fieldState['aes_l2_custom']?.[0] || ""}
                                            onChange={(e) => onChange({ ...fieldState, 'aes_l2_custom': [e.target.value] })}
                                            placeholder={lang === 'EN' ? "Custom Subject Detail (Appended to prompt)..." : "自定义主体细节 (追加在 Prompt 之后)..."}
                                            className="w-full bg-black/20 border border-zinc-800 rounded px-3 py-2 text-xs text-rose-300 placeholder-zinc-700 focus:outline-none focus:border-rose-500/50 transition-colors resize-none overflow-y-auto custom-scrollbar min-h-[4.5rem]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ModuleContainer>
                    );
                } else {
                    return (
                        <ModuleContainer key="SUBJECT" id="SUBJECT" lockedModules={lockedModules} moveModule={moveModule}>
                            <ModuleHeader icon={User} label={`L2 ${lang === 'EN' ? "Creature" : "异"}`} actionButtons={renderActionButtons(CREATURE_BLOCKS, 'SUBJECT')} />
                            <ModuleContent blocks={CREATURE_BLOCKS} />
                            <div className="mt-2 pl-3 pr-2 pb-2">
                                <div className="relative">
                                    <textarea
                                        rows={3}
                                        value={fieldState['aes_l2_custom']?.[0] || ""}
                                        onChange={(e) => onChange({ ...fieldState, 'aes_l2_custom': [e.target.value] })}
                                        placeholder={lang === 'EN' ? "Custom Creature Detail..." : "自定义生物细节..."}
                                        className="w-full bg-black/20 border border-zinc-800 rounded px-3 py-2 text-xs text-rose-300 placeholder-zinc-700 focus:outline-none focus:border-rose-500/50 transition-colors resize-none overflow-y-auto custom-scrollbar min-h-[4.5rem]"
                                    />
                                </div>
                            </div>
                        </ModuleContainer>
                    );
                }
            case 'STAGE':
                return (
                    <ModuleContainer key="STAGE" id="STAGE" lockedModules={lockedModules} moveModule={moveModule}>
                        <div className="flex items-center justify-between mb-0.5 pl-3">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-rose-400"><Box size={12} className={iconColor} /> L3 {lang === 'EN' ? "Stage" : "场"}</div>
                            {renderActionButtons(l3Blocks, 'STAGE')}
                        </div>
                        <div className="space-y-2 pl-3 min-w-0 py-2">
                            <div className="flex flex-wrap items-baseline gap-x-1 leading-loose">
                                <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "In" : "在"}</span>
                                {slot('aes_scene_real', true)}
                                <span className="text-zinc-500 text-[12px] font-serif">/</span>
                                {slot('aes_scene_surreal', true)}
                                <span className="text-zinc-500 text-[12px] font-serif">/</span>
                                {slot('aes_scene_abstract', true)}
                                <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "" : "中。"}</span>
                            </div>
                            <div className="flex flex-wrap items-baseline gap-x-1 leading-loose">
                                <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "Under" : "处于"}</span>
                                {slot('aes_atmosphere', true)}
                                <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "conditions, surrounded by" : "之下，被"}</span>
                                {slot('aes_particles', true)}
                                <span className="text-zinc-500 text-[12px] font-serif">{lang === 'EN' ? "" : "包围。"}</span>
                            </div>
                            <div className="mt-2 pr-2">
                                <div className="relative">
                                    <textarea
                                        rows={3}
                                        value={fieldState['aes_l3_custom']?.[0] || ""}
                                        onChange={(e) => onChange({ ...fieldState, 'aes_l3_custom': [e.target.value] })}
                                        placeholder={lang === 'EN' ? "Custom Scene Detail (Appended to prompt)..." : "自定义场景细节 (追加在 Prompt 之后)..."}
                                        className="w-full bg-black/20 border border-zinc-800 rounded px-3 py-2 text-xs text-rose-300 placeholder-zinc-700 focus:outline-none focus:border-rose-500/50 transition-colors resize-none overflow-y-auto custom-scrollbar min-h-[4.5rem]"
                                    />
                                </div>
                            </div>
                        </div>
                    </ModuleContainer>
                );
            case 'VIBE':
                return (
                    <ModuleContainer key="VIBE" id="VIBE" lockedModules={lockedModules} moveModule={moveModule}>
                        <ModuleHeader icon={Zap} label={`L4 ${lang === 'EN' ? "Vibe" : "影"}`} actionButtons={renderActionButtons(l4Blocks, 'VIBE')} />
                        <ModuleContent blocks={l4Blocks} />
                    </ModuleContainer>
                );
            case 'RENDER':
                return (
                    <ModuleContainer key="RENDER" id="RENDER" lockedModules={lockedModules} moveModule={moveModule}>
                        <ModuleHeader icon={Zap} label={`L5 ${lang === 'EN' ? "Tech" : "法"}`} actionButtons={renderActionButtons(l5Blocks, 'RENDER')} />
                        <ModuleContent blocks={l5Blocks} />
                    </ModuleContainer>
                );
            default: return null;
        }
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-[#050505] overflow-hidden">
            {/* Background Borromean Rings - Clear rings with subtle 'frosted' context */}
            {showRings && (
                <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000" style={{ filter: 'blur(1px)' }}>
                    <BorromeanRings 
                        fieldState={fieldState} 
                        lang={lang} 
                        driverType={driverType} 
                        opacity={0.8} 
                        centered={true}
                    />
                </div>
            )}
            <div className="flex-1 flex flex-row overflow-hidden min-h-0 relative z-10">
                <div className="w-1/2 h-full flex flex-col overflow-hidden border-r border-zinc-800 bg-[#050505]/40 backdrop-blur-sm">
                    <div className="shrink-0 z-20 px-6 py-3 bg-transparent flex items-center justify-between">
                        <div className="pl-6">
                            <h2 className="text-xl font-serif font-bold text-rose-400 tracking-[0.1em]">{lang === 'EN' ? "Aesthetic Engine" : "情绪美学"}</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex bg-zinc-900 border border-zinc-700 rounded-lg p-1 shadow-inner">
                                <button onClick={() => onAestheticModeChange('REALISM')} className={`px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${isRealism ? 'bg-rose-500 text-black' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`} >
                                    <Camera size={12} /> <span>{lang === 'EN' ? "Real" : "写实"}</span>
                                </button>
                                <button onClick={() => onAestheticModeChange('STYLIZED')} className={`px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${isStylized ? 'bg-rose-500 text-black' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}`} >
                                    <Paintbrush size={12} /> <span>{lang === 'EN' ? "Art" : "美术"}</span>
                                </button>
                            </div>
                            <button
                                onClick={() => setAestheticModuleOrder(DEFAULT_AESTHETIC_ORDER)}
                                className="p-1.5 bg-zinc-900 border border-zinc-700 hover:border-rose-500/50 rounded text-zinc-500 hover:text-rose-400 transition-all group"
                            >
                                <RotateCcw size={14} className="group-hover:-rotate-90 transition-transform duration-500" />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
                        {aestheticModuleOrder.map(moduleId => renderModuleById(moduleId))}
                        <div className="h-10 w-full shrink-0"></div>
                    </div>
                </div>

                <div className="w-1/2 h-full flex flex-col overflow-hidden bg-[#050505]/40 backdrop-blur-sm border-l border-zinc-800 relative min-h-0">
                    <div className="p-6 pb-2 shrink-0">
                        <div className="bg-zinc-900/40 border border-zinc-800 p-3 rounded-xl shadow-lg">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <Layout size={12} className="text-rose-400" />
                                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{lang === 'EN' ? "Logic Matrix" : "逻辑矩阵"}</span>
                                </div>
                                <span className="text-[8px] font-mono text-zinc-600">STRUCTURE_PRESET_V3</span>
                            </div>
                            <div className="grid grid-cols-6 gap-1.5">
                                {AESTHETIC_LOGIC_TEMPLATES.map(template => {
                                    const Icon = iconMap[template.iconName];
                                    const isActive = logicMode === template.id;
                                    return (
                                        <button
                                            key={template.id}
                                            onClick={() => handleLogicModeChange(template.id)}
                                            className={`flex flex-col items-center text-center p-1.5 rounded border transition-all duration-300 group ${isActive ? 'bg-rose-500/10 border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.1)]' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'}`}
                                            title={lang === 'EN' ? template.descEn : template.desc}
                                        >
                                            <div className={`p-1.5 rounded-full mb-1 transition-colors ${isActive ? 'bg-rose-500 text-black' : 'bg-zinc-900 text-zinc-600 group-hover:text-zinc-400'}`}>
                                                <Icon size={12} />
                                            </div>
                                            <span className={`text-[8px] font-black uppercase tracking-tighter ${isActive ? 'text-white' : 'text-zinc-600'}`}>{lang === 'EN' ? template.nameEn : template.name.split('(')[0]}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 flex flex-col mx-6 rounded-xl border border-zinc-800 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 shrink-0">
                            <div className="flex items-center gap-3">
                                <span className="text-[9px] font-mono font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                                    <Terminal size={10} />
                                    <span>{lang === 'EN' ? "PROMPT_COMPILER.EXE" : "提示词编译器 (COMPILER)"}</span>
                                </span>
                                <div className="flex bg-black rounded p-0.5 border border-zinc-800 scale-75 origin-left">
                                    <button onClick={() => setCompilerMode('TEXT')} className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-all ${compilerMode === 'TEXT' ? 'bg-zinc-700 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}>TEXT</button>
                                    <button onClick={() => setCompilerMode('JSON')} className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-all ${compilerMode === 'JSON' ? 'bg-zinc-700 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}>JSON</button>
                                    <button onClick={() => setCompilerMode('PROMPT')} className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-all ${compilerMode === 'PROMPT' ? 'bg-zinc-700 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}>PROMPT</button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex border border-zinc-700 rounded overflow-hidden scale-90">
                                    <button onClick={() => setCompilerLang('CN')} className={`px-1.5 py-0.5 text-[8px] font-bold uppercase ${compilerLang === 'CN' ? 'bg-zinc-700 text-white' : 'bg-zinc-900 text-zinc-500 hover:text-zinc-300'}`}>CN</button>
                                    <button onClick={() => setCompilerLang('EN')} className={`px-1.5 py-0.5 text-[8px] font-bold uppercase ${compilerLang === 'EN' ? 'bg-zinc-700 text-white' : 'bg-zinc-900 text-zinc-500 hover:text-zinc-300'}`}>EN</button>
                                </div>
                                <button onClick={() => { navigator.clipboard.writeText(getCompilerOutput()); setCopiedCategoryId('SUMMARY'); setTimeout(() => setCopiedCategoryId(null), 2000); }} className="text-zinc-500 hover:text-white transition-colors ml-1" title="Copy">{copiedCategoryId === 'SUMMARY' ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}</button>
                            </div>
                        </div>
                        <div className="flex-1 min-h-0 p-4 font-mono text-[10px] text-green-500/90 leading-relaxed whitespace-pre-line break-words select-text overflow-y-auto custom-scrollbar">
                            <span className="text-zinc-600 mr-2 select-none">$</span>
                            {getCompilerOutput()}
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 flex flex-col p-6 pt-2 overflow-hidden">
                        <div className="flex flex-col h-full rounded-xl border border-rose-500/30 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl relative min-h-0">
                            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 shrink-0">
                                <div className="flex items-center gap-2 text-rose-400">
                                    <Edit3 size={12} />
                                    <span className="text-[9px] font-bold uppercase tracking-widest">
                                        {lang === 'EN' ? "Polishing" : "润色"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 scale-90 origin-right">
                                    <button onClick={() => setUserManualPrompt(getCompilerOutput())} className="flex items-center gap-2 px-3 py-1 bg-rose-500 hover:bg-rose-400 text-black rounded text-[9px] font-bold uppercase tracking-widest transition-all">
                                        <ArrowDownToLine size={12} /> {lang === 'EN' ? "INJECT" : "注入"}
                                    </button>
                                    <button onClick={() => setUserManualPrompt("")} className="flex items-center gap-2 px-3 py-1 bg-zinc-800 hover:bg-red-900/30 text-zinc-400 hover:text-red-400 border border-zinc-700 rounded text-[9px] font-bold uppercase tracking-widest transition-all">
                                        <Eraser size={12} /> {lang === 'EN' ? "CLEAR" : "清空"}
                                    </button>
                                </div>
                            </div>
                            <textarea
                                value={userManualPrompt}
                                onChange={(e) => setUserManualPrompt(e.target.value)}
                                className="flex-1 min-h-0 bg-transparent p-4 text-[10px] font-mono text-zinc-300 focus:outline-none resize-none leading-relaxed custom-scrollbar placeholder-zinc-800"
                                placeholder={lang === 'EN' ? "Paste or polish your final prompt here..." : "在此处粘贴或润色你的最终提示词..."}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {libraryModalOpen && activeBlockId && (
                <NarrativeLibraryModal
                    isOpen={libraryModalOpen}
                    onClose={() => setLibraryModalOpen(false)}
                    blockId={activeBlockId}
                    blockName={ENGINE_BLOCKS.find(b => b.id === activeBlockId)?.name || activeBlockId}
                    selectedTags={fieldState[activeBlockId] || []}
                    onToggleTag={(tag) => toggleTag(activeBlockId, tag)}
                    onClear={() => clearBlock(activeBlockId)}
                    lang={lang}
                    driverType={driverType}
                    customLibraryData={
                        activeBlockId === 'aes_palette_preset'
                            ? [{
                                id: 'lib_master',
                                name: isRealism ? '写实集成预设 (Realism Blueprints)' : '美术集成预设 (Stylized Blueprints)',
                                desc: 'High-level cinematic and artistic starting points.',
                                items: isRealism ? MASTER_PRESETS_REALISM : MASTER_PRESETS_STYLIZED
                            }]
                            : (activeBlockId === 'aes_color_palette'
                                ? [{ id: 'lib_color', name: '经典色板库 (Color Palettes)', desc: 'Classic Color Schemes', items: AES_COLOR_PRESETS }]
                                : undefined)
                    }
                    onAddCustomDef={onAddCustomDef}
                />
            )}
        </div>
    );
};
