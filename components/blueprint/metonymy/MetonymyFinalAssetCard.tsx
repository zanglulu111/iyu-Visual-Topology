
import React, { useRef, useEffect } from 'react';
import { FinalAssetItem, BlueprintLanguage } from '../../../types';
import { AssetCard } from '../../AssetCard';

interface FinalAssetCardProps {
    item: FinalAssetItem;
    onChange: (item: FinalAssetItem) => void;
    onDelete: () => void;
    onReverseEngineer: () => void;
    isAnalyzing: boolean;
    language: BlueprintLanguage;
    displayLang: 'CN' | 'EN';
    themeAccent: string;
}

export const FinalAssetCard: React.FC<FinalAssetCardProps> = ({ item, onChange, onDelete, onReverseEngineer, isAnalyzing, language, displayLang, themeAccent }) => {
    const descRef = useRef<HTMLTextAreaElement>(null);
    
    useEffect(() => {
        if (descRef.current) {
            descRef.current.style.height = 'auto';
            descRef.current.style.height = descRef.current.scrollHeight + 'px';
        }
    }, [item.description]);

    return (
        <AssetCard 
             item={{
                 id: item.id,
                 name: item.name,
                 nameEn: item.nameEn,
                 desc: item.description,
                 tag: item.anchors || item.type, // Use anchors or type as tag
                 type: item.type === 'CHARACTER' ? 'character' : (item.type === 'SCENE' ? 'location' : 'prop'), // map back for AssetCard
                 view: { images: item.imageUrl ? [{id: '1', url: item.imageUrl, timestamp: Date.now()}] : [], promptCn: item.anchors, promptEn: item.anchors }
             }}
             type={item.type === 'CHARACTER' ? 'character' : (item.type === 'SCENE' ? 'location' : 'prop')}
             language={language}
             contentLanguage={displayLang}
             onUpdate={(updated: any) => {
                 // Map back to FinalAssetItem
                 const newItem: FinalAssetItem = {
                     ...item,
                     name: updated.name,
                     nameEn: updated.nameEn,
                     description: updated.desc,
                     anchors: updated.tag, // map tag back to anchors
                     imageUrl: updated.view?.images?.[0]?.url || item.imageUrl
                 };
                 onChange(newItem);
             }}
             onDelete={onDelete}
             onGenerateImage={async () => null} // Not used in this context, logic handled via reverse engineer usually
             onZoom={(url) => window.open(url, '_blank')}
        />
    );
};
