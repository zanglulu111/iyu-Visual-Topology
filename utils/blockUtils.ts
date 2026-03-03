
import { 
  NARRATIVE_ENGINE_BLOCKS, 
  COMMERCIAL_ENGINE_BLOCKS, 
  EXPERIMENTAL_ENGINE_BLOCKS, 
  AESTHETIC_ENGINE_BLOCKS, 
  TRAILER_ENGINE_BLOCKS,
  ALL_SKIN_BLOCKS, 
  COMM_SKIN_BLOCKS, 
  EXPERIMENTAL_SKIN_BLOCKS, 
  TRAILER_SKIN_BLOCKS 
} from '../constants';

export const getBlockName = (blockId: string, lang: 'CN' | 'EN'): string => {
    if (blockId === 'skin_genre') return lang === 'EN' ? "GENRE" : "类型基因";
    if (blockId === 'aes_palette_preset') return lang === 'EN' ? "MASTER VISUAL PRESET" : "视觉集成预设";
    
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
    
    const block = allBlocks.find(b => b.id === blockId);
    
    if (block) {
        return lang === 'EN' ? block.enName : block.name;
    }
    
    return blockId.toUpperCase().replace('SKIN_', '');
};
