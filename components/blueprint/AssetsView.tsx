
import React, { useState, useEffect } from 'react';
import { CreativeBlueprint, BlueprintLanguage, DriverType } from '../../types';
import { User, MapPin, Box, Plus, ImageIcon, Globe, Languages } from 'lucide-react';
import { AssetCard } from '../AssetCard';
import { analyzeAssetImage } from '../../services/visualBibleGenerator';

interface AssetsViewProps {
    blueprint: CreativeBlueprint;
    language: BlueprintLanguage;
    isCommercial: boolean;
    isAesthetic: boolean;
    onUpdateBlueprint: (blueprint: CreativeBlueprint) => void;
    onGenerateAssetImage: (prompt: string) => Promise<string | null>;
    onZoom: (url: string) => void;
    themeAccent: string;
    themeBorder: string;
    theme?: string;
    isAdmin?: boolean;
}

const emptyBlueprintAssets = { characters: [], locations: [], props: [] };

export const AssetsView: React.FC<AssetsViewProps> = ({
    blueprint, language, onUpdateBlueprint, onGenerateAssetImage, onZoom, theme, isAdmin
}) => {
    const assets = {
        characters: Array.isArray(blueprint.assets?.characters) ? blueprint.assets.characters : emptyBlueprintAssets.characters,
        locations: Array.isArray(blueprint.assets?.locations) ? blueprint.assets.locations : emptyBlueprintAssets.locations,
        props: Array.isArray(blueprint.assets?.props) ? blueprint.assets.props : emptyBlueprintAssets.props
    };

    // Derived hover background from accent
    const themeBgHover = 'hover:bg-[rgba(var(--mist-active-accent-rgb),0.1)]';
    const addAssetButtonTheme = theme === 'retro'
        ? 'text-[#8B261D] border-[#8B261D]/30'
        : 'text-[var(--mist-active-accent)] border-[rgba(var(--mist-active-accent-rgb),0.64)] hover:border-[var(--mist-active-accent)]';

    const handleAddAsset = (type: 'characters' | 'locations' | 'props') => {
        const newId = Date.now().toString();
        const newItem = {
            id: newId,
            name: language === 'EN' ? "New Item" : "新建项目",
            desc: language === 'EN' ? "Description..." : "描述...",
            tag: type === 'characters' ? "ROLE" : (type === 'locations' ? "SCENE" : "PROP"),
            type: type === 'props' ? "OBJECT" : undefined,
            view: { promptCn: "", promptEn: "", images: [] }
        };

        const updatedAssets = { ...assets, [type]: [...assets[type], newItem] };

        onUpdateBlueprint({ ...blueprint, assets: updatedAssets });
    };

    const handleUpdateAsset = (type: 'characters' | 'locations' | 'props', updatedItem: any) => {
        const updatedList = assets[type].map((item: any) =>
            item.id === updatedItem.id ? updatedItem : item
        );
        const updatedAssets = { ...assets, [type]: updatedList };
        onUpdateBlueprint({ ...blueprint, assets: updatedAssets });
    };

    const handleDeleteAsset = (type: 'characters' | 'locations' | 'props', id: string) => {
        const updatedList = assets[type].filter((item: any) => item.id !== id);
        const updatedAssets = { ...assets, [type]: updatedList };
        onUpdateBlueprint({ ...blueprint, assets: updatedAssets });
    };

    const handleReverseAsset = async (url: string, type: 'CHARACTER' | 'SCENE' | 'PROP' | 'OBJECT') => {
        return await analyzeAssetImage(url, type);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-2 pb-20 relative">

            {/* CHARACTERS */}
            <div>
                <div className={`flex items-center justify-between border-b ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800'} pb-4 mb-8`}>
                    <h3 className={`text-2xl font-serif ${theme === 'retro' ? 'text-black' : 'text-white'} flex items-center gap-3`}>
                        <User className={theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'} />
                        {language === 'EN' ? "Characters" : "核心角色"}
                    </h3>
                    <button
                        onClick={() => handleAddAsset('characters')}
                        className={`text-xs font-bold ${addAssetButtonTheme} ${themeBgHover} border px-3 py-1.5 rounded transition-colors uppercase tracking-wider flex items-center gap-2`}
                    >
                        <Plus size={12} /> {language === 'EN' ? "Add Character" : "添加角色"}
                    </button>
                </div>

                {assets.characters.length === 0 ? (
                    <div className={`text-center py-12 border ${theme === 'retro' ? 'border-[#8B261D]/20 bg-[#F9F7F1]/80' : 'border-zinc-800 bg-zinc-900/20'} border-dashed rounded-xl`}>
                        <p className={`${theme === 'retro' ? 'text-black/60' : 'text-zinc-500'} mb-4`}>{language === 'EN' ? "No characters generated yet." : "暂无角色资产。"}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {assets.characters.map((char, i) => (
                            <AssetCard
                                key={char.id || i}
                                item={char}
                                type="character"
                                language={language}
                                onUpdate={(updated: any) => handleUpdateAsset('characters', updated)}
                                onDelete={() => handleDeleteAsset('characters', char.id)}
                                onGenerateImage={onGenerateAssetImage}
                                onZoom={onZoom}
                                onReverseEngineer={(url) => handleReverseAsset(url, 'CHARACTER')}
                                theme={theme}
                                isAdmin={isAdmin}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* LOCATIONS */}
            <div>
                <div className={`flex items-center justify-between border-b ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800'} pb-4 mb-8`}>
                    <h3 className={`text-2xl font-serif ${theme === 'retro' ? 'text-black' : 'text-white'} flex items-center gap-3`}>
                        <MapPin className={theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'} />
                        {language === 'EN' ? "Locations" : "关键场景"}
                    </h3>
                    <button
                        onClick={() => handleAddAsset('locations')}
                        className={`text-xs font-bold ${addAssetButtonTheme} ${themeBgHover} border px-3 py-1.5 rounded transition-colors uppercase tracking-wider flex items-center gap-2`}
                    >
                        <Plus size={12} /> {language === 'EN' ? "Add Location" : "添加场景"}
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {assets.locations.map((loc, i) => (
                        <AssetCard
                            key={loc.id || i}
                            item={loc}
                            type="location"
                            language={language}
                            onUpdate={(updated: any) => handleUpdateAsset('locations', updated)}
                            onDelete={() => handleDeleteAsset('locations', loc.id)}
                            onGenerateImage={onGenerateAssetImage}
                            onZoom={onZoom}
                            onReverseEngineer={(url) => handleReverseAsset(url, 'SCENE')}
                            theme={theme}
                            isAdmin={isAdmin}
                        />
                    ))}
                </div>
            </div>

            {/* PROPS */}
            <div>
                <div className={`flex items-center justify-between border-b ${theme === 'retro' ? 'border-[#8B261D]/10' : 'border-zinc-800'} pb-4 mb-8`}>
                    <h3 className={`text-2xl font-serif ${theme === 'retro' ? 'text-black' : 'text-white'} flex items-center gap-3`}>
                        <Box className={theme === 'retro' ? 'text-[#8B261D]' : 'text-zinc-500'} />
                        {language === 'EN' ? "Props (MacGuffins)" : "关键道具"}
                    </h3>
                    <button
                        onClick={() => handleAddAsset('props')}
                        className={`text-xs font-bold ${addAssetButtonTheme} ${themeBgHover} border px-3 py-1.5 rounded transition-colors uppercase tracking-wider flex items-center gap-2`}
                    >
                        <Plus size={12} /> {language === 'EN' ? "Add Prop" : "添加道具"}
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {assets.props.map((prop, i) => (
                        <AssetCard
                            key={prop.id || i}
                            item={prop}
                            type="prop"
                            language={language}
                            onUpdate={(updated: any) => handleUpdateAsset('props', updated)}
                            onDelete={() => handleDeleteAsset('props', prop.id)}
                            onGenerateImage={onGenerateAssetImage}
                            onZoom={onZoom}
                            onReverseEngineer={(url) => handleReverseAsset(url, 'PROP')}
                            theme={theme}
                            isAdmin={isAdmin}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};
