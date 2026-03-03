
import { NarrativeFieldState } from '../types';
import { TRAILER_ENGINE_BLOCKS } from '../data/trailer_data';
import { TRAILER_SKIN_BLOCKS } from '../data/trailer_skin';
import { findItemDetails } from './dataRegistry';

export const buildTrailerPrompt = (
  duration: string,
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null
): { text: string, images: string[] } => {

  const engineContext = Object.entries(fieldState).map(([key, tags]) => {
      if (!tags || tags.length === 0 || !key.startsWith('trl_')) return null;
      const blockDef = TRAILER_ENGINE_BLOCKS.find(b => b.id === key) || TRAILER_SKIN_BLOCKS.find(b => b.id === key);
      const name = blockDef ? blockDef.enName : key;
      return `* **${name}**: ${tags.join(' + ')} (${tags.map(t => findItemDetails(t)).join('; ')})`;
  }).filter(Boolean).join('\n');

  const promptText = `
    Role: Master Trailer Editor.
    Task: Generate 3 trailer concepts.

    ## 1. 预告基因
    ${engineContext}
    
    ${visionInput ? `## 核心意象种子: "${visionInput}"` : ""}

    ## 2. 延异协议
    通过碎片的拼接制造永远无法被满足的“缺失”。

    ## 3. 三种剪辑路径
    ### **OPTION 1: [THE_TEASE]**
    ### **OPTION 2: [THE_PULSE]**
    ### **OPTION 3: [THE_GLITCH]**

    ## 4. 输出格式 (STRICT JSON)
    [
      {
        "id": "1",
        "type": "THE_TEASE", 
        "title": "Title", "tagline": "Hook", "visualKey": "Visual", "pitch": "Script", "structure": "Dynamics"
      }
    ]
  `;

  return { text: promptText, images: visionImage ? [visionImage] : [] };
};
