
import { BlueprintLanguage, StaticShot, DynamicShot, FinalAssetsData, FinalAssetItem, GlobalVisualTone } from '../types';

// Helper to split text consistently
export const splitIntoParagraphs = (text: string): string[] => {
    return text.split('\n').filter(p => p.trim().length > 0);
};

// Scene Colors for visual distinction
export const SCENE_COLORS = [
    { name: 'Cyan', border: 'border-cyan-500', bg: 'bg-cyan-500/10', activeBg: 'bg-cyan-500/20', text: 'text-cyan-400', label: 'bg-cyan-900/80 text-cyan-200' },
    { name: 'Orange', border: 'border-orange-500', bg: 'bg-orange-500/10', activeBg: 'bg-orange-500/20', text: 'text-orange-400', label: 'bg-orange-900/80 text-orange-200' },
    { name: 'Purple', border: 'border-purple-500', bg: 'bg-purple-500/10', activeBg: 'bg-purple-500/20', text: 'text-purple-400', label: 'bg-purple-900/80 text-purple-200' },
    { name: 'Emerald', border: 'border-emerald-500', bg: 'bg-emerald-500/10', activeBg: 'bg-emerald-500/20', text: 'text-emerald-400', label: 'bg-emerald-900/80 text-emerald-200' },
    { name: 'Pink', border: 'border-pink-500', bg: 'bg-pink-500/10', activeBg: 'bg-pink-500/20', text: 'text-pink-400', label: 'bg-pink-900/80 text-pink-200' },
    { name: 'Yellow', border: 'border-yellow-500', bg: 'bg-yellow-500/10', activeBg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'bg-yellow-900/80 text-yellow-200' },
    { name: 'Indigo', border: 'border-indigo-500', bg: 'bg-indigo-500/10', activeBg: 'bg-indigo-500/20', text: 'text-indigo-400', label: 'bg-indigo-900/80 text-indigo-200' },
    { name: 'Rose', border: 'border-rose-500', bg: 'bg-rose-500/10', activeBg: 'bg-rose-500/20', text: 'text-rose-400', label: 'bg-rose-900/80 text-rose-200' },
    { name: 'Lime', border: 'border-lime-500', bg: 'bg-lime-500/10', activeBg: 'bg-lime-500/20', text: 'text-lime-400', label: 'bg-lime-900/80 text-lime-200' },
];

export const getSceneColor = (index: number) => SCENE_COLORS[index % SCENE_COLORS.length];

export const getStaticColumns = (lang: BlueprintLanguage, contentLang: 'CN' | 'EN') => [
    { key: 'id', label: lang === 'EN' ? 'ID' : '镜号', width: 'w-[4%] min-w-[3rem] max-w-[4rem] font-mono font-bold text-center align-top break-all truncate' },
    { key: contentLang === 'CN' ? 'shotSize' : 'shotSizeEn', label: lang === 'EN' ? 'Size' : '景别', width: 'w-[4%] min-w-[3rem] max-w-[4rem] font-mono font-bold text-center align-top whitespace-normal' },
    { key: contentLang === 'CN' ? 'composition' : 'compositionEn', label: lang === 'EN' ? 'Comp' : '构图', width: 'w-[4%] min-w-[3rem] max-w-[4rem] font-mono font-bold text-center align-top whitespace-normal' },
    { key: contentLang === 'CN' ? 'angle' : 'angleEn', label: lang === 'EN' ? 'Angle' : '角度', width: 'w-[4%] min-w-[3rem] max-w-[4rem] font-mono font-bold text-center align-top whitespace-normal' },
    { key: contentLang === 'CN' ? 'visualDesc' : 'visualDescEn', label: lang === 'EN' ? 'Visual' : '画面', width: 'w-[20%] min-w-[120px] align-top whitespace-pre-wrap leading-relaxed', isHtml: true },
    { key: contentLang === 'CN' ? 'environment' : 'environmentEn', label: lang === 'EN' ? 'Environment' : '环境', width: 'w-[15%] min-w-[100px] align-top whitespace-pre-wrap leading-relaxed' },
    { key: contentLang === 'CN' ? 'lighting' : 'lightingEn', label: lang === 'EN' ? 'Lighting' : '光影', width: 'w-[12%] min-w-[80px] align-top whitespace-pre-wrap leading-relaxed' },
    { key: contentLang === 'CN' ? 'artStyle' : 'artStyleEn', label: lang === 'EN' ? 'Art Style' : '艺术风格', width: 'w-[12%] min-w-[80px] align-top whitespace-pre-wrap leading-relaxed' },
    { key: contentLang === 'CN' ? 'sound' : 'soundEn', label: lang === 'EN' ? 'Sound' : '音效', width: 'w-[12%] min-w-[80px] align-top leading-relaxed whitespace-normal' },
    { key: contentLang === 'CN' ? 'dialogue' : 'dialogueEn', label: lang === 'EN' ? 'Dialogue' : '台词', width: 'w-[14%] min-w-[80px] align-top leading-relaxed whitespace-normal', isHtml: true }
];

export const getDynamicColumns = (lang: BlueprintLanguage, contentLang: 'CN' | 'EN') => [
    { key: 'id', label: lang === 'EN' ? 'ID' : '镜号', width: 'w-[8%] min-w-[4.5rem] text-center align-top font-mono font-bold break-all border-r border-zinc-800' },
    { key: 'duration', label: lang === 'EN' ? 'Dur' : '时长', width: 'w-[8%] min-w-[4.5rem] text-center align-top font-mono break-all border-r border-zinc-800' }, 
    { key: 'visualAction', label: lang === 'EN' ? 'Visual Flow' : '动态视觉流 (画面/运镜/环境)', width: 'w-[48%] align-top leading-relaxed break-words whitespace-pre-wrap border-r border-zinc-800' },
    // Visual is ~3x larger than Sound/Dialogue.
    { key: 'sound', label: lang === 'EN' ? 'Sound' : '音效', width: 'w-[18%] align-top leading-relaxed whitespace-normal border-r border-zinc-800' },
    { key: 'dialogue', label: lang === 'EN' ? 'Dialogue' : '台词', width: 'w-[18%] align-top leading-relaxed whitespace-normal' }
];

export const formatStaticList = (shots: StaticShot[], lang: 'CN' | 'EN', protocolHeader?: string, globalTone?: GlobalVisualTone) => {
    let text = "";
    if (protocolHeader) {
        // Keep newlines, remove empty lines
        const cleanProtocol = protocolHeader.split('\n').map(l => l.trim()).filter(Boolean).join('\n');
        text += cleanProtocol + "\n\n";
    }

    text += shots.map(s => {
        const shotNum = s.id.split('-').pop()?.replace('#', '') || s.id;
        const getVal = (cn: string, en?: string) => lang === 'CN' ? cn : (en || cn);
        const tags = [
            getVal(s.shotSize, s.shotSizeEn),
            getVal(s.composition, s.compositionEn),
            getVal(s.angle, s.angleEn)
        ].filter(Boolean).join('/'); // Separator: /
        
        // UPDATED: Prioritize parsed artStyle from script. 
        // User requested strict sourcing from "Core Visual Bible" -> "Art & Style".
        // If not found in script, do not fill (ignore globalTone fallback).
        const artStyle = lang === 'CN' ? s.artStyle : (s.artStyleEn || s.artStyle);
        
        const rawDesc = lang === 'CN' ? s.visualDesc : (s.visualDescEn || s.visualDesc);
        
        // Helper to clean text
        const clean = (str: string | undefined, isLighting: boolean = false) => {
            if (!str) return "";
            // Remove HTML tags and newlines
            let res = str.replace(/<[^>]*>/g, '').replace(/\n/g, '').trim();
            
            // UPDATED: Filter out "None" values
            if (/^(无|无[。.]?|none|n\/a|no sound|no dialogue)[.。]?$/i.test(res)) {
                return "";
            }

            if (isLighting) {
                const comma = lang === 'CN' ? '，' : ', ';
                // Replace [Content] with Content, 
                res = res.replace(/\[(.*?)\]\s*/g, (match, p1) => `${p1}${comma}`);
                // If it ends with comma, remove it
                if (res.endsWith(comma)) res = res.slice(0, -comma.length);
            } else {
                // Remove brackets
                res = res.replace(/[\[\]]/g, '');
            }
            
            // Remove extra spaces
            res = res.replace(/\s+/g, ' ').trim();
            return res;
        };
        
        const desc = clean(rawDesc);
        const env = clean(lang === 'CN' ? s.environment : (s.environmentEn || s.environment));
        const light = clean(lang === 'CN' ? s.lighting : (s.lightingEn || s.lighting), true);
        const style = clean(artStyle);

        // Format: #2大全景/三分法/固定镜头；画面：...。环境：...。光影：...。艺术风格：...
        let line = `#${shotNum}${tags}；`;
        
        if (desc) line += `画面：${desc}。`;
        if (env) line += `环境：${env}。`;
        if (light) line += `光影：${light}。`;
        if (style) line += `艺术风格：${style}`; 
        
        // Fix double periods
        line = line.replace(/。。/g, '。').replace(/\.\./g, '.');
        
        return line;
    }).join('\n\n'); // Separate shots with empty line
    
    return text;
};

export const formatDialogueList = (shots: StaticShot[], lang: 'CN' | 'EN') => {
    return shots.map(s => {
        const shotNum = s.id.split('-').pop()?.replace('#', '') || s.id;
        const raw = lang === 'CN' ? s.dialogue : (s.dialogueEn || s.dialogue);
        // Strip HTML if present for copy
        let text = raw?.replace(/<[^>]+>/g, '').trim();
        if (!text || text === '-' || /^(无|无[。.]?|none|n\/a|no sound|no dialogue)[.。]?$/i.test(text)) return null;
        return `#${shotNum} ${text}`;
    }).filter(Boolean).join('\n');
};

export const formatDynamicList = (dynamicShots: DynamicShot[], staticShots: StaticShot[], lang: 'CN' | 'EN') => {
    return dynamicShots.map(d => {
        const shotNum = d.id.split('-').pop()?.replace('#', '') || d.id;
        // Clean up text: remove newlines for compact format
        const action = d.visualAction?.replace(/\n/g, ' ').trim() || "";
        const sound = (d.sound || "").replace(/\n/g, ' ').trim();
        const dialogue = (lang === 'CN' ? (d.dialogue || "") : (d.dialogueEn || d.dialogue || "")).replace(/\n/g, ' ').trim();
        
        let content = `#${shotNum}；${d.duration}；画面: ${action}`;
        
        // Clean up empty/none values for copy
        if (sound && !/^(无|无[。.]?|none|n\/a|no sound)[.。]?$/i.test(sound)) {
            content += `。音效: ${sound}`;
        }
        if (dialogue && !/^(无|无[。.]?|none|n\/a|no dialogue)[.。]?$/i.test(dialogue)) {
            content += `。台词: ${dialogue}`;
        }
        return content;
    }).join('\n');
};

export const formatAssetsList = (assets: FinalAssetsData, lang: 'CN' | 'EN') => {
    let text = "";
    const getName = (item: FinalAssetItem) => lang === 'CN' ? item.name : (item.nameEn || item.name);
    if (assets.characters.length) text += "--- CHARACTERS ---\n" + assets.characters.map(c => `[${getName(c)}] ${c.anchors}\n${c.description}\n\n`).join("");
    if (assets.props.length) text += "--- PROPS ---\n" + assets.props.map(p => `[${getName(p)}] ${p.anchors}\n${p.description}\n\n`).join("");
    if (assets.scenes.length) text += "--- SCENES ---\n" + assets.scenes.map(s => `[${getName(s)}] ${s.anchors}\n${s.description}\n\n`).join("");
    return text;
};

// --- NEW PARSER FOR STATIC SHOTS ---
export const extractProtocolHeader = (script: string): string => {
    // Extract from start until the first shot header (e.g., # 1-1-1)
    const match = script.match(/^(.*?)#\s*\d+-\d+-\d+/s);
    if (!match) return "";

    const rawHeader = match[1];
    const lines = rawHeader.split('\n');
    
    // Filter out unwanted lines per user request
    const filteredLines = lines.filter(line => {
        const t = line.trim();
        if (!t) return false;
        // Remove specific unwanted lines
        if (t.includes('风格协议')) return false;
        if (t.includes('[模式:')) return false;
        if (t.includes('执行配置')) return false;
        return true;
    });

    // Join with newline, remove empty lines and strip markdown
    return filteredLines
        .map(l => l.replace(/\*\*/g, '').replace(/> /g, '').trim())
        .filter(Boolean)
        .join('\n');
};

export const parseLiteraryScriptToStaticShots = (script: string): StaticShot[] => {
    const lines = script.split('\n');
    const shots: StaticShot[] = [];
    
    // 1. Extract Global Art Style from Protocol
    let globalArtStyle = "";
    // UPDATED: Try to find "Core Visual Bible" -> "Art & Style"
    // Format: > **【核心视觉圣经】** ... > **【艺术与风格】**: StyleName
    const coreStyleMatch = script.match(/> \*\*【艺术与风格】\*\*[:：]\s*(.*?)(?:\n|$)/);
    
    if (coreStyleMatch) {
        globalArtStyle = coreStyleMatch[1].trim();
    } else {
        // Fallback to old format
        const styleMatch = script.match(/\*\*\s*(?:Style DNA|艺术风格|Art Style)(?:\s*\(.*?\))?\s*:\s*\*\*(.*?)(?:\n|$)/i) || 
                           script.match(/\*\*\s*(?:Style DNA|艺术风格|Art Style)(?:\s*\(.*?\))?\s*:\s*(.*?)(?:\n|$)/i) ||
                           script.match(/> \*\*【视觉圣经】\*\*(.*?)(?:\n|$)/i);
        if (styleMatch) {
            globalArtStyle = styleMatch[1].trim();
        }
    }

    let currentShot: Partial<StaticShot> = {};
    let isParsingShot = false;
    let dialogueBuffer: string[] = [];

    // Improved Regex to allow optional spaces in header: # 1-1-22 【CU】
    const headerRegex = /^#\s*(\d+-\d+-\d+)\s*(?:【(.*?)】)?\s*(?:【(.*?)】)?\s*(?:【(.*?)】)?/;

    for (const line of lines) {
        const trimmed = line.trim();
        const headerMatch = trimmed.match(headerRegex);

        if (headerMatch) {
            // Push previous shot
            if (isParsingShot && currentShot.id) {
                if (dialogueBuffer.length > 0) {
                     currentShot.dialogue = dialogueBuffer.join('\n');
                }
                shots.push(currentShot as StaticShot);
            }

            // Start new shot
            isParsingShot = true;
            dialogueBuffer = [];
            currentShot = {
                id: headerMatch[1],
                shotSize: headerMatch[2] || "",
                composition: headerMatch[3] || "",
                angle: headerMatch[4] || "",
                // Defaults
                reference: "", focalLength: "", shutter: "", perspective: "",
                depthOfField: "", lightingMode: "", lightMood: "", lensFX: "",
                visualDesc: "", sound: "", dialogue: "",
                artStyle: globalArtStyle, // Apply global style
                artStyleEn: globalArtStyle // Apply global style (assuming bilingual or same)
            };
            continue;
        }

        if (!isParsingShot) continue;

        // Parse Body Content
        // NEW: Handle "Environment Atmosphere" line
        if (trimmed.startsWith('**环境氛围：**') || trimmed.startsWith('**Atmosphere:**')) {
             const atm = trimmed.replace(/\*\*.*?\*\*:/, '').replace('**环境氛围：**', '').trim();
             currentShot.lightMood = atm; // Map to lightMood for storage
             // Prepend to visualDesc so it's visible in the table if visualDesc exists
             // Or we can leave it in lightMood and rely on the UI to show it?
             // The UI currently only shows visualDesc. Let's prepend it with a badge style in HTML.
             // We will handle the merging when pushing the shot or in UI.
             // Actually, let's prepend it to visualDesc right now for simplicity in the current table renderer.
             // We'll wrap it in a special span for styling later if needed.
             // But wait, visualDesc might come later. We store it in lightMood first.
        } 
        else if (trimmed.startsWith('**画面：**') || trimmed.startsWith('**Visual:**')) {
            let desc = trimmed.replace(/\*\*.*?\*\*:/, '').replace('**画面：**', '').trim();
            // Prepend Atmosphere if captured
            if (currentShot.lightMood) {
                desc = `<span class="text-indigo-400 font-bold block mb-1">[${currentShot.lightMood}]</span>${desc}`;
            }
            currentShot.visualDesc = desc;
            currentShot.reference = desc; // Legacy field backup
        } 
        else if (trimmed.startsWith('**环境：**') || trimmed.startsWith('**Environment:**')) {
             const env = trimmed.replace(/\*\*.*?\*\*:/, '').replace('**环境：**', '').trim();
             currentShot.environment = env;
        }
        else if (trimmed.startsWith('**光影：**') || trimmed.startsWith('**Lighting:**')) {
             const light = trimmed.replace(/\*\*.*?\*\*:/, '').replace('**光影：**', '').trim();
             currentShot.lighting = light;
        }
        else if (trimmed.startsWith('**声音：**') || trimmed.startsWith('**Sound:**')) {
            currentShot.sound = trimmed.replace(/\*\*.*?\*\*:/, '').replace('**声音：**', '').trim();
        } else if (trimmed.startsWith('**音轨内容：**') || trimmed.startsWith('**Audio Track:**')) {
            continue;
        } else if (trimmed.startsWith('**') && trimmed.includes(':')) {
            // Dialogue Cleaning Logic
            // Original: **旁白 (奥多 - 混响/苍老 - [塔可夫斯基]):** 眼睛就是身上的灯...
            // Step 1: Remove Markdown bolding
            let cleanLine = trimmed.replace(/\*\*/g, ''); 
            
            // Step 2: Remove style tags like - [Tarkovsky]
            // Matches " - [Anything]" and removes it
            cleanLine = cleanLine.replace(/\s*-\s*\[.*?\]/g, '');
            
            // Step 3: Simplify "Type (Name - Tone): Content" to "Name - Tone: Content"
            // Check for pattern: "Type (Info): Content"
            const match = cleanLine.match(/^(?:.*?)\((.*?)\):(.*)/);
            
            if (match) {
                const info = match[1].trim(); // 奥多 - 混响/苍老
                const content = match[2].trim(); // 眼睛就是...
                // Construct clean format
                const finalLine = `${info}:${content}`;
                dialogueBuffer.push(finalLine);
            } else {
                // Fallback if format is different, just push the cleaned line
                dialogueBuffer.push(cleanLine);
            }
            
        } else if (trimmed.length > 0) {
             if (dialogueBuffer.length > 0) {
                  dialogueBuffer[dialogueBuffer.length - 1] += " " + trimmed;
             }
        }
    }

    // Push last shot
    if (isParsingShot && currentShot.id) {
         if (dialogueBuffer.length > 0) {
             // For display in table, use break tags or newlines
             currentShot.dialogue = dialogueBuffer.join('\n');
         }
         shots.push(currentShot as StaticShot);
    }

    return shots;
};

// --- NEW HELPER: SYNC DYNAMIC WITH STATIC ---
export const syncDynamicWithStatic = (staticShots: StaticShot[], existingDynamic: DynamicShot[]): DynamicShot[] => {
    return staticShots.map(staticShot => {
        // Try to find an existing dynamic shot with the same ID
        const existing = existingDynamic.find(d => d.id === staticShot.id);
        if (existing) {
            return existing; // Keep existing visual action / duration / camera etc.
        }
        // Initialize new dynamic shot for this ID
        return {
            id: staticShot.id,
            duration: "TBD", // Placeholder
            visualAction: "", // Empty, waiting for generation
            camera: "",
            atmosphere: ""
        };
    });
};
