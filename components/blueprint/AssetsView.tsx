
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
}

export const AssetsView: React.FC<AssetsViewProps> = ({
    blueprint, language, isCommercial, isAesthetic, onUpdateBlueprint, onGenerateAssetImage, onZoom, themeAccent, themeBorder
}) => {

    // Derived hover background from accent
    const getHoverClass = () => {
        if (themeAccent.includes('cyan')) return 'hover:bg-cyan-900/20';
        if (themeAccent.includes('rose')) return 'hover:bg-rose-900/20';
        if (themeAccent.includes('purple')) return 'hover:bg-purple-900/20';
        if (themeAccent.includes('orange')) return 'hover:bg-orange-900/20';
        return 'hover:bg-gold-primary/10';
    };
    const themeBgHover = getHoverClass();

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

        const updatedAssets = { ...blueprint.assets };
        // @ts-ignore
        updatedAssets[type] = [...updatedAssets[type], newItem];

        onUpdateBlueprint({ ...blueprint, assets: updatedAssets });
    };

    const handleUpdateAsset = (type: 'characters' | 'locations' | 'props', updatedItem: any) => {
        const updatedList = blueprint.assets[type].map((item: any) =>
            item.id === updatedItem.id ? updatedItem : item
        );
        const updatedAssets = { ...blueprint.assets, [type]: updatedList };
        onUpdateBlueprint({ ...blueprint, assets: updatedAssets });
    };

    const handleDeleteAsset = (type: 'characters' | 'locations' | 'props', id: string) => {
        const updatedList = blueprint.assets[type].filter((item: any) => item.id !== id);
        const updatedAssets = { ...blueprint.assets, [type]: updatedList };
        onUpdateBlueprint({ ...blueprint, assets: updatedAssets });
    };

    const handleReverseAsset = async (url: string, type: 'CHARACTER' | 'SCENE' | 'PROP' | 'OBJECT') => {
        return await analyzeAssetImage(url, type);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-2 pb-20 relative">

            {/* CHARACTERS */}
            <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8">
                    <h3 className="text-2xl font-serif text-white flex items-center gap-3">
                        <User className="text-zinc-500" />
                        {language === 'EN' ? "Characters" : "核心角色"}
                    </h3>
                    <button
                        onClick={() => handleAddAsset('characters')}
                        className={`text-xs font-bold ${themeAccent} ${themeBorder} ${themeBgHover} border px-3 py-1.5 rounded transition-colors uppercase tracking-wider flex items-center gap-2`}
                    >
                        <Plus size={12} /> {language === 'EN' ? "Add Character" : "添加角色"}
                    </button>
                </div>

                {blueprint.assets.characters.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/20">
                        <p className="text-zinc-500 mb-4">{language === 'EN' ? "No characters generated yet." : "暂无角色资产。"}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {blueprint.assets.characters.map((char, i) => (
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
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* LOCATIONS */}
            <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8">
                    <h3 className="text-2xl font-serif text-white flex items-center gap-3">
                        <MapPin className="text-zinc-500" />
                        {language === 'EN' ? "Locations" : "关键场景"}
                    </h3>
                    <button
                        onClick={() => handleAddAsset('locations')}
                        className={`text-xs font-bold ${themeAccent} ${themeBorder} ${themeBgHover} border px-3 py-1.5 rounded transition-colors uppercase tracking-wider flex items-center gap-2`}
                    >
                        <Plus size={12} /> {language === 'EN' ? "Add Location" : "添加场景"}
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {blueprint.assets.locations.map((loc, i) => (
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
                        />
                    ))}
                </div>
            </div>

            {/* PROPS */}
            <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-8">
                    <h3 className="text-2xl font-serif text-white flex items-center gap-3">
                        <Box className="text-zinc-500" />
                        {language === 'EN' ? "Props (MacGuffins)" : "关键道具"}
                    </h3>
                    <button
                        onClick={() => handleAddAsset('props')}
                        className={`text-xs font-bold ${themeAccent} ${themeBorder} ${themeBgHover} border px-3 py-1.5 rounded transition-colors uppercase tracking-wider flex items-center gap-2`}
                    >
                        <Plus size={12} /> {language === 'EN' ? "Add Prop" : "添加道具"}
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {blueprint.assets.props.map((prop, i) => (
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
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};
