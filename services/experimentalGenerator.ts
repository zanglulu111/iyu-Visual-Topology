
import { NarrativeFieldState, CreativeTreatment, WorldLawConfig, StyleConfig } from '../types';
import { POETIC_ENGINE_BLOCKS as EXPERIMENTAL_ENGINE_BLOCKS } from '../data/aesthetic/poetic_data';
import { EXPERIMENTAL_SKIN_BLOCKS } from '../data/aesthetic/experimental_skin';
import { findItemDetails } from './dataRegistry';
import { getVisionAnchorProtocol } from '../data/engine_core/narrative_protocols';

export const buildExperimentalPrompt = (
  duration: string,
  fieldState: NarrativeFieldState,
  visionInput: string = "",
  visionImage: string | null = null
): { text: string, images: string[] } => {

  const engineContext = Object.entries(fieldState).map(([key, tags]) => {
      if (!tags || tags.length === 0 || !key.startsWith('exp_')) return null;
      const blockDef = EXPERIMENTAL_ENGINE_BLOCKS.find(b => b.id === key) || EXPERIMENTAL_SKIN_BLOCKS.find(b => b.id === key);
      const name = blockDef ? blockDef.enName : key;
      return `* **${name}**: ${tags.join(' + ')} (${tags.map(t => findItemDetails(t)).join('; ')})`;
  }).filter(Boolean).join('\n');

  const promptText = `
    Role: Experimental Film Director.
    Task: Generate 3 experimental film concepts.

    ## 1. 实验基因
    ${engineContext}
    
    ${visionInput || visionImage ? getVisionAnchorProtocol(visionInput, Boolean(visionImage)) : ""}

    ## 2. 换喻脚本协议
    将完整故事拆解为物象链、场景链与可拍摄的脚本段落。

    ## 3. 三种还原路径
    ### **OPTION 1: [PHENOMENOLOGICAL]**
    ### **OPTION 2: [THE SPECTACLE]**
    ### **OPTION 3: [VISUAL_POETRY]**

    ## 4. 输出格式 (STRICT JSON)
    [
      {
        "id": "1",
        "type": "PHENOMENOLOGICAL", 
        "title": "Name", "tagline": "Axiom", "visualKey": "Key", "pitch": "Execution", "structure": "Phenomenology"
      }
    ]
  `;

  return { text: promptText, images: visionImage ? [visionImage] : [] };
};

export const buildExperimentalBiblePrompt = (
    treatment: CreativeTreatment,
    style: StyleConfig,
    fieldState: NarrativeFieldState,
    visionInput: string,
    worldLaw: WorldLawConfig
): string => {
    return `
        Role: Avant-Garde Film Director.
        Task: Expand concept into full BIBLE.
        
        Concept: ${treatment.title}
        Treatment: ${treatment.pitch}
        ${visionInput ? `Visual Anchor: ${visionInput}` : ""}

        ## 2. 输出格式 (STRICT JSON)
        **CRITICAL:** All asset descriptions ("desc") MUST be in **Simplified Chinese**.
        
        {
          "treatmentId": "${treatment.id}",
          "driverType": "EXPERIMENTAL",
          "styleName": "Metonymic Script",
          "narrative": { "title": "Title", "logline": "Axiom", "synopsis": "Manifesto" },
          "context": { "world": "Context", "tone": "Tone", "colorPalette": [], "moodboard": { "prompt": "MJ" } },
          "experimentalData": {
              "concept": "Axiom", "method": "Method", "sensation": "Sensation", "visualManifesto": "Manifesto", "installationPlan": "Plan"
          },
          "assets": { 
              "characters": [{ "id": "c1", "name": "Name (CN)", "desc": "Description (CN)" }], 
              "locations": [{ "id": "l1", "name": "Name (CN)", "desc": "Description (CN)" }], 
              "props": [{ "id": "p1", "name": "Name (CN)", "desc": "Description (CN)" }] 
          }
        }
    `;
};
