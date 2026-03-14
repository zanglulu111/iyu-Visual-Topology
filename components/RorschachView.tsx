import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// ─────────────────────────────────────────────────────────────────────────────
// WEBGL SHADER — Dynamic inkblot that responds to session phase
// ─────────────────────────────────────────────────────────────────────────────

const vertexShaderSource = `
  attribute vec2 position;
  varying vec2 v_uv;
  void main() {
    v_uv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
varying vec2 v_uv;

float hash(vec2 p) {
    p = fract(p * vec2(443.8975, 397.2973));
    p += dot(p, p.xy + 19.19);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 6; i++) {
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

float fbm2(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 7; i++) {
        value += amplitude * noise(p * frequency);
        p = rot * p;
        frequency *= 2.1;
        amplitude *= 0.48;
    }
    return value;
}

float warpedFbm(vec2 p, float t) {
    vec2 q = vec2(
        fbm(p + vec2(0.0, 0.0) + 0.1 * t),
        fbm(p + vec2(5.2, 1.3) + 0.12 * t)
    );
    vec2 r = vec2(
        fbm(p + 4.0 * q + vec2(1.7, 9.2) + 0.05 * t),
        fbm(p + 4.0 * q + vec2(8.3, 2.8) + 0.06 * t)
    );
    return fbm(p + 4.0 * r);
}

void main() {
    vec2 uv = v_uv;
    float aspect = u_resolution.x / u_resolution.y;

    vec2 p = (uv - 0.5);
    p.x *= aspect;

    vec2 mouse = (u_mouse - 0.5);
    mouse.x *= aspect;
    float mouseDist = length(p - mouse);
    float mouseInfluence = smoothstep(0.8, 0.0, mouseDist) * 0.15;

    float t = u_time * 0.3;

    vec2 sp = p;
    sp.x = abs(sp.x);
    sp += mouseInfluence * normalize(sp - mouse + 0.001);

    vec2 inkUV = sp * 2.5;
    float ink = warpedFbm(inkUV + vec2(0.0, 0.3 * sin(t * 0.5)), t * 0.2);
    float detail = fbm2(inkUV * 2.0 + vec2(3.14, 2.71) + 0.05 * sin(t * 0.3));

    float centerFade = 1.0 - smoothstep(0.0, 1.2, length(p));
    float verticalStretch = 1.0 - smoothstep(0.0, 0.9, abs(p.y) * 0.8);

    float inkMask = ink * centerFade * verticalStretch;

    float threshold = 0.38 + mouseInfluence * 0.5;
    float blotShape = smoothstep(threshold - 0.05, threshold + 0.02, inkMask);

    float splatter = fbm(sp * 8.0 + vec2(1.0, 2.0));
    float splatterMask = smoothstep(0.55, 0.6, splatter * centerFade * 1.3) * centerFade;

    float specks = noise(sp * 25.0 + vec2(7.7, 3.3));
    float speckMask = smoothstep(0.72, 0.75, specks) * smoothstep(0.3, 0.8, centerFade) * 0.6;

    float finalInk = max(blotShape, max(splatterMask * 0.7, speckMask));

    float internalTexture = fbm2(sp * 6.0 + detail * 2.0);
    float inkVariation = mix(0.7, 1.0, internalTexture);

    vec3 paperColor = vec3(0.95, 0.93, 0.88);
    float paperNoise = noise(uv * vec2(aspect, 1.0) * 50.0);
    float paperGrain = noise(uv * vec2(aspect, 1.0) * 200.0);
    paperColor += (paperNoise - 0.5) * 0.03;
    paperColor += (paperGrain - 0.5) * 0.015;

    vec3 inkColorBase = vec3(0.02, 0.02, 0.03);
    vec3 inkColorWarm = vec3(0.05, 0.03, 0.02);
    vec3 inkColor = mix(inkColorBase, inkColorWarm, detail * 0.5);

    float edgeSoftness = smoothstep(threshold - 0.08, threshold + 0.05, inkMask);
    vec3 inkWash = vec3(0.15, 0.13, 0.12);

    vec3 color = paperColor;
    float washMask = smoothstep(threshold - 0.15, threshold - 0.02, inkMask) * centerFade;
    color = mix(color, inkWash, washMask * 0.3);
    color = mix(color, inkColor * inkVariation, finalInk);

    float greyTone = smoothstep(0.4, 0.6, internalTexture);
    color = mix(color, vec3(0.08, 0.07, 0.07), finalInk * greyTone * 0.3);

    float vignette = 1.0 - 0.3 * length(uv - 0.5) * 1.4;
    color *= vignette;

    float foldLine = exp(-abs(p.x) * 80.0) * 0.08;
    color -= foldLine;

    float spotlight = smoothstep(0.5, 0.0, mouseDist) * 0.05;
    color += spotlight;

    gl_FragColor = vec4(color, 1.0);
}
`;

// ─────────────────────────────────────────────────────────────────────────────
// QUESTION BANK — 12 questions across 4 phases
// ─────────────────────────────────────────────────────────────────────────────

type QuestionType = 'text' | 'choice' | 'click' | 'silent_text';

interface Question {
  id: number;
  phase: 1 | 2 | 3 | 4;
  phaseName: { cn: string; en: string };
  type: QuestionType;
  prompt: { cn: string; en: string };
  placeholder?: { cn: string; en: string };
  choices?: { cn: string; en: string; value: string }[];
  preDelay?: number; // ms silence before question appears
  vector: 'mirror' | 'attachment' | 'temporal' | 'desire';
}

const QUESTIONS: Question[] = [
  // ── PHASE 1: PERCEPTION (感知层) ──────────────────────────────
  {
    id: 1, phase: 1,
    phaseName: { cn: '感知层', en: 'PERCEPTION' },
    type: 'text',
    prompt: { cn: '你在这幅墨迹中，第一眼看到的是什么？', en: 'What is the first thing you see in this inkblot?' },
    placeholder: { cn: '用任何语言描述都可以……', en: 'Describe in any language…' },
    preDelay: 1200,
    vector: 'mirror',
  },
  {
    id: 2, phase: 1,
    phaseName: { cn: '感知层', en: 'PERCEPTION' },
    type: 'choice',
    prompt: { cn: '它更像是什么？', en: 'It feels more like…' },
    choices: [
      { cn: '一种保护', en: 'Something protective', value: 'protective' },
      { cn: '一种威胁', en: 'Something threatening', value: 'threatening' },
      { cn: '一种渴望', en: 'Something yearned for', value: 'yearned' },
      { cn: '难以判断', en: 'Impossible to say', value: 'unclear' },
    ],
    preDelay: 800,
    vector: 'mirror',
  },
  {
    id: 3, phase: 1,
    phaseName: { cn: '感知层', en: 'PERCEPTION' },
    type: 'choice',
    prompt: { cn: '如果这个形状有重量，它是……', en: 'If this shape had weight, it would be…' },
    choices: [
      { cn: '沉的，向下压', en: 'Heavy, pressing down', value: 'heavy' },
      { cn: '轻的，向上飘', en: 'Light, floating upward', value: 'light' },
      { cn: '悬在中间，无法落地', en: 'Suspended, unable to land', value: 'suspended' },
    ],
    preDelay: 600,
    vector: 'mirror',
  },

  // ── PHASE 2: PROJECTION (投射层) ─────────────────────────────
  {
    id: 4, phase: 2,
    phaseName: { cn: '投射层', en: 'PROJECTION' },
    type: 'click',
    prompt: { cn: '请点击你最先注意到的地方。', en: 'Click the spot you noticed first.' },
    preDelay: 2000,
    vector: 'attachment',
  },
  {
    id: 5, phase: 2,
    phaseName: { cn: '投射层', en: 'PROJECTION' },
    type: 'text',
    prompt: { cn: '如果墨迹中有一个人，他正在做什么？', en: 'If there is a person in this inkblot, what are they doing?' },
    placeholder: { cn: '不必合理……', en: "It doesn't have to make sense…" },
    preDelay: 900,
    vector: 'attachment',
  },
  {
    id: 6, phase: 2,
    phaseName: { cn: '投射层', en: 'PROJECTION' },
    type: 'choice',
    prompt: { cn: '这个人……', en: 'This person is…' },
    choices: [
      { cn: '独自一人', en: 'Completely alone', value: 'alone' },
      { cn: '正在等待某人', en: 'Waiting for someone', value: 'waiting' },
      { cn: '刚刚失去了某人', en: 'Has just lost someone', value: 'lost' },
      { cn: '从未遇见过任何人', en: 'Has never met anyone', value: 'never_met' },
    ],
    preDelay: 600,
    vector: 'attachment',
  },

  // ── PHASE 3: TEMPORAL (时间层) ───────────────────────────────
  {
    id: 7, phase: 3,
    phaseName: { cn: '时间层', en: 'TEMPORAL' },
    type: 'text',
    prompt: { cn: '看着它，你想到了什么气味，或什么声音？', en: 'Looking at it, what smell or sound comes to mind?' },
    placeholder: { cn: '任何感觉都是线索……', en: 'Any sensation is a clue…' },
    preDelay: 2500,
    vector: 'temporal',
  },
  {
    id: 8, phase: 3,
    phaseName: { cn: '时间层', en: 'TEMPORAL' },
    type: 'choice',
    prompt: { cn: '这个画面发生在什么时间？', en: 'When does this scene take place?' },
    choices: [
      { cn: '黎明之前', en: 'Before dawn', value: 'predawn' },
      { cn: '正午', en: 'Noon', value: 'noon' },
      { cn: '黄昏', en: 'Dusk', value: 'dusk' },
      { cn: '深夜', en: 'Deep night', value: 'deep_night' },
    ],
    preDelay: 700,
    vector: 'temporal',
  },
  {
    id: 9, phase: 3,
    phaseName: { cn: '时间层', en: 'TEMPORAL' },
    type: 'choice',
    prompt: { cn: '如果时间可以在这个画面中流动，它……', en: 'If time could flow through this image, it would…' },
    choices: [
      { cn: '向前走', en: 'Move forward', value: 'forward' },
      { cn: '在反复', en: 'Keep repeating', value: 'repeating' },
      { cn: '已经静止', en: 'Have already stopped', value: 'stopped' },
    ],
    preDelay: 700,
    vector: 'temporal',
  },

  // ── PHASE 4: DESIRE (欲望层) ──────────────────────────────────
  {
    id: 10, phase: 4,
    phaseName: { cn: '欲望层', en: 'DESIRE' },
    type: 'text',
    prompt: { cn: '如果你能从这个画面中拿走一样东西，你会拿什么？', en: 'If you could take one thing from this image, what would it be?' },
    placeholder: { cn: '它不必是真实存在的……', en: "It doesn't have to exist…" },
    preDelay: 3000,
    vector: 'desire',
  },
  {
    id: 11, phase: 4,
    phaseName: { cn: '欲望层', en: 'DESIRE' },
    type: 'choice',
    prompt: { cn: '你曾经拥有过它吗？', en: 'Have you ever had it?' },
    choices: [
      { cn: '拥有过，后来失去了', en: 'Yes, and I lost it', value: 'lost_it' },
      { cn: '从未拥有过', en: 'I never had it', value: 'never_had' },
      { cn: '我从来不知道我想要它', en: 'I never knew I wanted it', value: 'never_knew' },
    ],
    preDelay: 1000,
    vector: 'desire',
  },
  {
    id: 12, phase: 4,
    phaseName: { cn: '欲望层', en: 'DESIRE' },
    type: 'silent_text',
    prompt: { cn: '在你离开这个画面之前……有什么是你还没说出口的？', en: "Before you leave this image… is there something you haven't said?" },
    placeholder: { cn: '……', en: '…' },
    preDelay: 4000,
    vector: 'desire',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ANALYSIS ENGINE — derives 4 vectors from answers
// ─────────────────────────────────────────────────────────────────────────────

interface Answer {
  questionId: number;
  value: string;
  clickPos?: { x: number; y: number };
}

interface DesireProfile {
  mirrorScore: number;     // 0-100: 自我认同方式
  attachmentScore: number; // 0-100: 依恋结构
  temporalScore: number;   // 0-100: 时间/创伤模式
  desireScore: number;     // 0-100: 欲望对象性质
  mirrorLabel: { cn: string; en: string };
  attachmentLabel: { cn: string; en: string };
  temporalLabel: { cn: string; en: string };
  desireLabel: { cn: string; en: string };
  summaryText: { cn: string; en: string };
  lacanian_formula: string;
}

function analyzeAnswers(answers: Answer[]): DesireProfile {
  const get = (id: number) => answers.find(a => a.questionId === id)?.value ?? '';

  // Mirror score: based on Q2 perception type
  const q2 = get(2);
  const mirrorScore = q2 === 'protective' ? 30 : q2 === 'threatening' ? 70 : q2 === 'yearned' ? 55 : 50;
  const mirrorLabel = mirrorScore > 60
    ? { cn: '威胁性他者', en: 'Threatening Other' }
    : mirrorScore < 40
    ? { cn: '保护性他者', en: 'Protective Other' }
    : { cn: '渴望的他者', en: 'Desired Other' };

  // Attachment: Q6 relationship type
  const q6 = get(6);
  const attachmentScore = q6 === 'alone' ? 80 : q6 === 'waiting' ? 55 : q6 === 'lost' ? 65 : 90;
  const attachmentLabel = attachmentScore > 75
    ? { cn: '根本孤独', en: 'Fundamental Solitude' }
    : attachmentScore > 50
    ? { cn: '缺席的等待', en: 'Absent Waiting' }
    : { cn: '丧失结构', en: 'Structure of Loss' };

  // Temporal: Q9 time direction
  const q9 = get(9);
  const temporalScore = q9 === 'repeating' ? 85 : q9 === 'stopped' ? 95 : 30;
  const temporalLabel = temporalScore > 80
    ? { cn: '强迫性重复', en: 'Compulsive Repetition' }
    : temporalScore > 60
    ? { cn: '创伤性停滞', en: 'Traumatic Stasis' }
    : { cn: '线性时间', en: 'Linear Time' };

  // Desire: Q11 possession history
  const q11 = get(11);
  const desireScore = q11 === 'never_knew' ? 95 : q11 === 'never_had' ? 75 : 45;
  const desireLabel = desireScore > 85
    ? { cn: '原始缺失', en: 'Originary Lack' }
    : desireScore > 60
    ? { cn: '无法填补的空洞', en: 'Irreducible Void' }
    : { cn: '可能的复得', en: 'Possible Recovery' };

  // Derive Lacanian formula
  const formula = desireScore > 80
    ? 'S(⊄A) → a'
    : temporalScore > 80
    ? 'S ◇ D → Φ'
    : attachmentScore > 75
    ? '$◇a → jouissance'
    : 'S → A → s(A)';

  // Summary text
  const summaryText = {
    cn: `你的凝视落在了${mirrorLabel.cn}的位置。时间对你而言是${temporalLabel.cn}的结构。你所渴望的，指向了${desireLabel.cn}。`,
    en: `Your gaze rests at the position of the ${mirrorLabel.en}. Time for you carries the structure of ${temporalLabel.en}. What you desire points toward ${desireLabel.en}.`,
  };

  return { mirrorScore, attachmentScore, temporalScore, desireScore, mirrorLabel, attachmentLabel, temporalLabel, desireLabel, summaryText, lacanian_formula: formula };
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface RorschachViewProps {
  onClose: () => void;
  lang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  setPage: (page: -1 | 0 | 1) => void;
  setViewMode: (mode: any) => void;
  openManual: () => void;
  openHistory: () => void;
  openSettings: () => void;
  openProfile: () => void;
  currentUser: any;
  showRings: boolean;
  setShowRings: (show: boolean) => void;
}

type SessionState = 'intro' | 'testing' | 'result';

// ─────────────────────────────────────────────────────────────────────────────
// TYPEWRITER COMPONENT - Handles character-by-character display and SFX
// ─────────────────────────────────────────────────────────────────────────────
const TypewriterText: React.FC<{ 
  text: string; 
  onComplete?: () => void; 
  speed?: number; 
  className?: string;
  style?: React.CSSProperties;
  skip?: boolean;
}> = ({ text = "", onComplete, speed = 200, className, style, skip = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Safety check
    if (!text) {
      setDisplayedText("");
      if (onComplete) onComplete();
      return;
    }

    if (skip) {
      setDisplayedText(text);
      if (onComplete) onComplete();
      return;
    }

    audioRef.current = new Audio('/audio/typewriter.mp3');
    audioRef.current.volume = 0.12;
    
    setDisplayedText("");
    let i = 0;
    let timeoutId: NodeJS.Timeout;

    const typeChar = () => {
      if (i < text.length) {
        // Use substring to avoid any potential "undefined" appending
        const nextChar = text[i];
        if (nextChar !== undefined) {
          setDisplayedText(text.substring(0, i + 1));
          
          // Play sound
          if (audioRef.current) {
            const click = audioRef.current.cloneNode() as HTMLAudioElement;
            click.playbackRate = 0.9 + Math.random() * 0.2;
            click.volume = 0.08 + Math.random() * 0.08;
            click.play().catch(() => {});
          }
        }
        
        i++;
        const jitter = Math.random() * 100;
        timeoutId = setTimeout(typeChar, speed + jitter);
      } else {
        if (onComplete) onComplete();
      }
    };

    timeoutId = setTimeout(typeChar, speed);

    return () => {
      clearTimeout(timeoutId);
      audioRef.current = null;
    };
  }, [text, speed, onComplete]);

  return <span className={className} style={style}>{displayedText}</span>;
}

export const RorschachView: React.FC<RorschachViewProps> = ({ onClose, lang }) => {
  const { theme } = useTheme();
  const isRetro = theme === 'retro';
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const uniformsRef = useRef<Record<string, WebGLUniformLocation | null>>({});
  const animFrameRef = useRef<number>(0);

  // Session state
  const [sessionState, setSessionState] = useState<SessionState>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [questionVisible, setQuestionVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [profile, setProfile] = useState<DesireProfile | null>(null);
  const [awaitingClick, setAwaitingClick] = useState(false);
  const [clickPos, setClickPos] = useState<{ x: number; y: number } | null>(null);
  const [historyVisible, setHistoryVisible] = useState(false);

  // Shader uniforms (driven by session)
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const clickPointRef = useRef({ x: -1, y: -1 });
  const clickTimeRef = useRef(0);
  const startTimeRef = useRef(performance.now());

  const question = QUESTIONS[currentQ];
  const phase = question?.phase ?? 4;
  const sessionProgress = currentQ / (QUESTIONS.length - 1); // 0→1

  // Keep sessionProgress accessible inside the render loop without restarting it
  const sessionProgressRef = useRef(sessionProgress);
  useEffect(() => { sessionProgressRef.current = sessionProgress; }, [sessionProgress]);

  // ── WebGL setup (runs once on mount) ─────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Force initial canvas size from parent's bounding rect
    const parent = canvas.parentElement;
    if (parent) {
      const { width, height } = parent.getBoundingClientRect();
      if (width > 0 && height > 0) {
        canvas.width = width;
        canvas.height = height;
      }
    }

    const gl = canvas.getContext('webgl');
    if (!gl) return;
    glRef.current = gl;

    function createShader(type: number, source: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    programRef.current = program;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'position');
    uniformsRef.current = {
      time: gl.getUniformLocation(program, 'u_time'),
      mouse: gl.getUniformLocation(program, 'u_mouse'),
      resolution: gl.getUniformLocation(program, 'u_resolution'),
    };

    // Sync canvas attribute size whenever the container resizes
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          canvas.width = Math.round(width);
          canvas.height = Math.round(height);
          gl.viewport(0, 0, canvas.width, canvas.height);
        }
      }
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    startTimeRef.current = performance.now();

    const render = (now: number) => {
      const w = canvas.width, h = canvas.height;
      if (w <= 0 || h <= 0) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      const t = (now - startTimeRef.current) * 0.001;

      gl.useProgram(program);
      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      const u = uniformsRef.current;
      gl.uniform1f(u.time!, t);
      gl.uniform2f(u.mouse!, mouseRef.current.x, mouseRef.current.y);
      gl.uniform2f(u.resolution!, w, h);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animFrameRef.current = requestAnimationFrame(render);
    };
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mount-only

  // ── Question sequencing ──────────────────────────────────────

  const showQuestion = useCallback(() => {
    const delay = QUESTIONS[currentQ]?.preDelay ?? 800;
    setTimeout(() => setQuestionVisible(true), delay);
  }, [currentQ]);

  useEffect(() => {
    if (sessionState === 'testing') {
      const existing = answers[currentQ];
      
      if (existing) {
        // Already answered: show immediately, restore values
        setQuestionVisible(true);
        setInputValue(existing.value.startsWith('click:') ? '' : existing.value);
        setClickPos(existing.clickPos || null);
        setAwaitingClick(question?.type === 'click' && !existing.clickPos);
      } else {
        // New question: hide, clear, and delay show
        setQuestionVisible(false);
        setInputValue('');
        setClickPos(null);
        if (question?.type === 'click') setAwaitingClick(true);
        else setAwaitingClick(false);
        showQuestion();
      }
    }
  }, [currentQ, sessionState, showQuestion, answers, question?.type]);

  const jumpToQuestion = useCallback((index: number) => {
    if (index === currentQ) return;
    setIsTransitioning(true);
    setQuestionVisible(false);
    setTimeout(() => {
      setCurrentQ(index);
      setIsTransitioning(false);
    }, 400);
  }, [currentQ]);

  const submitAnswer = useCallback((value: string, pos?: { x: number; y: number }) => {
    const newAnswer: Answer = { questionId: question.id, value, clickPos: pos };
    
    // Check if we are overwriting
    let newAnswers: Answer[];
    if (currentQ < answers.length) {
      newAnswers = [...answers];
      newAnswers[currentQ] = newAnswer;
    } else {
      newAnswers = [...answers, newAnswer];
    }
    
    setAnswers(newAnswers);
    setIsTransitioning(true);
    setQuestionVisible(false);

    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(q => q + 1);
        setIsTransitioning(false);
      } else {
        const p = analyzeAnswers(newAnswers);
        setProfile(p);
        setSessionState('result');
      }
    }, 600);
  }, [answers, currentQ, question]);

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!awaitingClick) return;
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    clickPointRef.current = { x, y };
    clickTimeRef.current = (performance.now() - startTimeRef.current) * 0.001;
    setClickPos({ x, y });
    setAwaitingClick(false);
    setTimeout(() => submitAnswer(`click:${x.toFixed(2)},${y.toFixed(2)}`, { x, y }), 1200);
  }, [awaitingClick, submitAnswer]);

  // ── Render helpers ───────────────────────────────────────────

  const phaseColors: Record<number, string> = isRetro ? {
    1: '#4b5563',  // deep graphite — phase 1
    2: '#8b261d',  // oxblood red — phase 2
    3: '#1e3a8a',  // indigo ink  — phase 3
    4: '#78350f',  // scorched earth — phase 4
  } : {
    1: '#94a3b8',  // slate — neutral/clinical
    2: '#c084fc',  // purple — projection
    3: '#22d3ee',  // cyan — temporal
    4: '#fb7185',  // rose — desire
  };
  const phaseColor = phaseColors[phase] ?? (isRetro ? '#4b5563' : '#94a3b8');

  const completedCount = answers.length;

  // ── Theme tokens ─────────────────────────────────────────────
  const bg         = isRetro ? '#f5f0e8' : '#0a0a0b';
  const bgPanel    = isRetro ? '#ede8df' : 'transparent';
  const borderCol  = isRetro ? 'rgba(139,38,29,0.18)' : 'rgba(255,255,255,0.06)';
  const borderSub  = isRetro ? 'rgba(139,38,29,0.10)' : 'rgba(255,255,255,0.05)';
  const textPrimary   = isRetro ? 'rgba(20,10,5,0.98)' : 'rgba(255,255,255,0.95)';
  const textSecondary = isRetro ? 'rgba(50,30,20,0.90)' : 'rgba(255,255,255,0.70)';
  const textMuted     = isRetro ? 'rgba(80,50,40,0.80)' : 'rgba(255,255,255,0.50)';
  const textFaint     = isRetro ? 'rgba(110,70,60,0.70)' : 'rgba(255,255,255,0.35)';
  const inputBorder   = isRetro ? 'rgba(139,38,29,0.20)' : 'rgba(255,255,255,0.08)';
  const choiceBorder  = isRetro ? 'rgba(139,38,29,0.12)' : 'rgba(255,255,255,0.06)';
  const choiceText    = isRetro ? 'rgba(60,30,20,0.55)'  : 'rgba(255,255,255,0.45)';
  const progressEmpty = isRetro ? 'rgba(139,38,29,0.12)' : 'rgba(255,255,255,0.08)';
  const scanlineColor = isRetro ? '0,0,0' : '0,0,0';

  // ─────────────────────────────────────────────────────────────
  return (
    <div className="absolute inset-0 flex overflow-hidden" style={{ backgroundColor: bg }}>
      <style>{`
        @keyframes typeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scanline {
          from { background-position: 0 0; }
          to   { background-position: 0 4px; }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes resultReveal {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseRing {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.04); opacity: 1; }
        }
        .question-enter { animation: typeIn 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .answer-history { animation: fadeSlide 0.3s ease-out both; }
        .result-card { animation: resultReveal 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .cursor-blink::after {
          content: '|';
          animation: blink 1s step-start infinite;
          margin-left: 1px;
          color: currentColor;
        }
        .ink-canvas { cursor: crosshair; }
        .ink-canvas.awaiting { cursor: crosshair; }
        .scanlines::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(${scanlineColor},0.04) 2px,
            rgba(${scanlineColor},0.04) 4px
          );
          pointer-events: none;
        }
      `}</style>

      {/* ── LEFT PANEL: Interview ────────────────────────────── */}
      <div
        className="relative flex flex-col w-[420px] min-w-[340px] max-w-[45vw] h-full overflow-hidden z-10"
        style={{ backgroundColor: bgPanel, borderRight: `1px solid ${borderCol}` }}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6" style={{ borderBottom: `1px solid ${borderSub}` }}>
          <div>
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase" style={{ color: textSecondary }}>
              {lang === 'CN' ? '迷雾学派 / 潜意识探测' : 'MIST SCHOOL / UNCONSCIOUS PROBE'}
            </span>
            <h1
              className="text-[22px] font-black tracking-[0.08em] mt-2 leading-none"
              style={{ fontFamily: "'Noto Serif SC', 'Playfair Display', serif", color: textPrimary }}
            >
              {lang === 'CN' ? '罗夏测验' : 'RORSCHACH'}
            </h1>
          </div>

          {/* Progress indicator */}
          {sessionState === 'testing' && (
            <div className="flex flex-col items-end gap-1.5">
              <div className="flex gap-1">
                {QUESTIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (i <= answers.length) jumpToQuestion(i);
                    }}
                    className={`w-1 rounded-full transition-all duration-500 ${i <= answers.length ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
                    style={{
                      height: i === currentQ ? '18px' : '5px',
                      backgroundColor: i < answers.length
                        ? phaseColors[QUESTIONS[i].phase]
                        : i === currentQ
                        ? phaseColor
                        : borderSub,
                    }}
                    title={i < answers.length ? (lang === 'CN' ? '点击修改此回答' : 'Click to edit') : ''}
                  />
                ))}
              </div>
              <span className="text-[12px] font-mono tracking-[0.2em]" style={{ color: textSecondary }}>
                {completedCount + 1} / {QUESTIONS.length}
              </span>
            </div>
          )}
        </div>

        {/* ── INTRO ── */}
        {sessionState === 'intro' && (
          <div className="flex-1 flex flex-col justify-center px-8 py-10 gap-8">
            <div className="question-enter" style={{ animationDelay: '0.2s' }}>
              <p
                className="text-[28px] font-black leading-[1.2] tracking-tight"
                style={{ fontFamily: "'Noto Serif SC', 'Playfair Display', serif", color: textPrimary }}
              >
                {lang === 'CN' ? '在我们开始之前——' : 'Before we begin—'}
              </p>
            </div>
            <div className="question-enter space-y-4" style={{ animationDelay: '0.8s' }}>
              <p className="text-[13px] leading-[1.8] font-light" style={{ color: textSecondary }}>
                {lang === 'CN'
                  ? '你将看到一系列墨迹。没有正确答案。\n\n我们只是想知道，当你看向它时，你心里出现了什么。'
                  : 'You will see a series of inkblots. There are no right answers.\n\nWe only want to know what appears in your mind when you look.'}
              </p>
              <p className="text-[12px] leading-[1.6] font-mono tracking-[0.05em]" style={{ color: textSecondary }}>
                {lang === 'CN'
                  ? '* 本测验并非诊断工具。它是一面镜子。'
                  : '* This is not a diagnostic tool. It is a mirror.'}
              </p>
            </div>
            <div className="question-enter" style={{ animationDelay: '1.4s' }}>
              <button
                onClick={() => setSessionState('testing')}
                className="group flex items-center gap-3 text-left"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center border transition-all duration-300"
                  style={{ borderColor: isRetro ? 'rgba(139,38,29,0.35)' : 'rgba(255,255,255,0.22)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = isRetro ? 'rgba(139,38,29,0.6)' : 'rgba(255,255,255,0.4)';
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = isRetro ? 'rgba(139,38,29,0.06)' : 'rgba(255,255,255,0.06)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = isRetro ? 'rgba(139,38,29,0.25)' : 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: textSecondary, transform: 'rotate(180deg) scaleX(-1)' }}>
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <span className="text-[12px] font-mono tracking-[0.25em] uppercase transition-colors duration-300" style={{ color: textSecondary }}>
                  {lang === 'CN' ? '开始测验' : 'Begin Test'}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ── TESTING ── */}
        {sessionState === 'testing' && question && (
          <div className="flex-1 flex flex-col overflow-hidden">

            {/* Phase label */}
            <div className="px-8 pt-6 pb-0">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phaseColor }} />
                <span className="text-[12px] font-mono tracking-[0.3em] uppercase" style={{ color: phaseColor, opacity: 0.9 }}>
                  {lang === 'CN' ? question.phaseName.cn : question.phaseName.en}
                </span>
              </div>
            </div>

            {/* Question */}
            <div className="px-8 pt-5 flex-shrink-0">
              {questionVisible && (
                <div className={`${isTransitioning ? 'opacity-0' : ''}`} key={currentQ}>
                  <p
                    className="text-[18px] leading-[1.55] font-medium"
                    style={{ fontFamily: "'Noto Serif SC', 'Playfair Display', serif", color: textPrimary }}
                  >
                    <TypewriterText 
                      text={lang === 'CN' ? question.prompt.cn : question.prompt.en} 
                      speed={50}
                      skip={!!answers[currentQ]}
                    />
                  </p>
                </div>
              )}
              {!questionVisible && (
                <p className="text-[18px] leading-[1.55] font-medium cursor-blink" style={{ color: textFaint }}>
                  &nbsp;
                </p>
              )}
            </div>

            {/* Input area */}
            {questionVisible && (
              <div className="px-8 pt-5 flex-shrink-0">
                {(question.type === 'text' || question.type === 'silent_text') && (
                  <>
                    <div 
                      className="w-full border-b transition-colors duration-300 mt-1"
                      style={{ borderBottomColor: inputValue ? phaseColor + '90' : inputBorder, borderBottomWidth: '1.5px' }}
                    >
                      <textarea
                        autoFocus
                        rows={1}
                        value={inputValue}
                        onChange={e => {
                          setInputValue(e.target.value);
                          e.target.style.height = 'auto';
                          let newH = e.target.scrollHeight;
                          e.target.style.height = (newH < 28 ? 28 : newH) + 'px';
                        }}
                        onKeyDown={e => {
                          if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
                            e.preventDefault();
                            submitAnswer(inputValue.trim());
                          }
                        }}
                        placeholder={lang === 'CN' ? question.placeholder?.cn : question.placeholder?.en}
                        className="w-full bg-transparent border-0 text-[15px] resize-none outline-none p-0 font-medium leading-[1.3] transition-colors"
                        style={{ color: textPrimary, height: '28px' }}
                      />
                    </div>
                    {inputValue.trim() && (
                      <button
                        onClick={() => submitAnswer(inputValue.trim())}
                        className="mt-4 flex items-center gap-2 group"
                      >
                        <span className="text-[11px] font-mono tracking-[0.3em] uppercase transition-colors duration-200" style={{ color: phaseColor, opacity: 0.8 }}>
                          {lang === 'CN' ? '继续' : 'Continue'}
                        </span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: phaseColor, opacity: 0.7 }}>
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    )}
                  </>
                )}

                {question.type === 'choice' && (
                  <div className="space-y-2">
                      {question.choices?.map((choice, i) => {
                        const isSelected = answers[currentQ]?.value === choice.value;
                        return (
                          <button
                            key={i}
                            onClick={() => submitAnswer(choice.value)}
                            className="w-full text-left px-5 py-4 rounded-sm border text-[15px] transition-all duration-200 font-medium"
                            style={{
                              borderColor: isSelected ? phaseColor + '80' : choiceBorder,
                              color: isSelected ? (isRetro ? 'rgba(30,15,10,0.95)' : 'rgba(255,255,255,0.95)') : choiceText,
                              backgroundColor: isSelected ? phaseColor + '10' : 'transparent',
                              animationDelay: `${i * 80}ms`,
                            }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLButtonElement).style.borderColor = phaseColor + '70';
                              (e.currentTarget as HTMLButtonElement).style.color = isRetro ? 'rgba(30,15,10,0.98)' : 'rgba(255,255,255,0.98)';
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor = phaseColor + '12';
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLButtonElement).style.borderColor = isSelected ? phaseColor + '80' : choiceBorder;
                              (e.currentTarget as HTMLButtonElement).style.color = isSelected ? (isRetro ? 'rgba(30,15,10,0.95)' : 'rgba(255,255,255,0.95)') : choiceText;
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor = isSelected ? phaseColor + '10' : 'transparent';
                            }}
                          >
                            <span className="font-mono text-[10px] tracking-[0.2em] mr-3 opacity-40">0{i + 1}</span>
                            {lang === 'CN' ? choice.cn : choice.en}
                          </button>
                        );
                      })}
                  </div>
                )}

                {question.type === 'click' && (
                  <div className="mt-2">
                    {awaitingClick && (
                      <p className="text-[11px] font-mono tracking-[0.15em] flex items-center gap-2" style={{ color: textMuted }}>
                        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: textMuted, animation: 'pulseRing 1.5s ease-in-out infinite' }} />
                        {lang === 'CN' ? '在右侧墨迹上点击——' : 'Click anywhere on the inkblot →'}
                      </p>
                    )}
                    {clickPos && (
                      <div className="mt-3 question-enter">
                        <p className="text-[11px] font-mono tracking-[0.1em]" style={{ color: textSecondary }}>
                          {lang === 'CN' ? '已标记。' : 'Marked.'}
                          <span className="ml-2 opacity-40">[{(clickPos.x * 100).toFixed(0)}%, {(clickPos.y * 100).toFixed(0)}%]</span>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Answer history (toggle) */}
            <div className="flex-1 overflow-hidden px-8 mt-6">
              {answers.length > 0 && (
                <div>
                  <button
                    onClick={() => setHistoryVisible(v => !v)}
                    className="flex items-center gap-2 text-[12px] font-mono tracking-[0.25em] transition-colors mb-3"
                    style={{ color: textSecondary }}
                  >
                    <span>{historyVisible ? '▲' : '▼'}</span>
                    <span>{lang === 'CN' ? `已记录 ${answers.length} 条` : `${answers.length} recorded`}</span>
                  </button>
                  {historyVisible && (
                    <div className="space-y-2 max-h-[180px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'none' }}>
                      {answers.map((a, i) => {
                        const q = QUESTIONS.find(q => q.id === a.questionId);
                        const isCurrent = i === currentQ;
                        return (
                          <button 
                            key={i} 
                            onClick={() => jumpToQuestion(i)}
                            className="answer-history flex gap-3 items-start w-full text-left hover:bg-black/5 dark:hover:bg-white/5 p-1 rounded transition-colors group"
                          >
                            <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: phaseColors[q?.phase ?? 1] }} />
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] leading-[1.6] font-light line-clamp-1 group-hover:line-clamp-none transition-all flex items-baseline gap-2" style={{ color: isCurrent ? phaseColor : textSecondary }}>
                                <span className="font-mono text-[9px] opacity-40 flex-shrink-0">Q{String(i + 1).padStart(2, '0')} —</span>
                                <span className="truncate group-hover:whitespace-normal">
                                  {(() => {
                                    if (a.value.startsWith('click:')) return lang === 'CN' ? '[点击位置记录]' : '[click recorded]';
                                    if (q?.type === 'choice') {
                                      const choice = q.choices?.find(c => c.value === a.value);
                                      return choice ? (lang === 'CN' ? choice.cn : choice.en) : a.value;
                                    }
                                    return a.value;
                                  })()}
                                </span>
                              </p>
                            </div>
                            <span className="text-[9px] font-mono opacity-0 group-hover:opacity-40 transition-opacity whitespace-nowrap pt-0.5">
                              {lang === 'CN' ? '修改' : 'EDIT'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {sessionState === 'result' && profile && (
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6" style={{ scrollbarWidth: 'none' }}>

            <div className="result-card" style={{ animationDelay: '0.1s' }}>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-3" style={{ color: textMuted }}>
                {lang === 'CN' ? '潜意识图谱' : 'DESIRE MAP'}
              </p>
              <p
                className="text-[22px] font-black leading-[1.3] tracking-tight"
                style={{ fontFamily: "'Noto Serif SC', 'Playfair Display', serif", color: textPrimary }}
              >
                {lang === 'CN' ? '你的迷雾' : 'Your Mist'}
              </p>
            </div>

            {/* Summary */}
            <div className="result-card" style={{ animationDelay: '0.3s' }}>
              <p className="text-[13px] leading-[1.9] font-light" style={{ color: textSecondary }}>
                {lang === 'CN' ? profile.summaryText.cn : profile.summaryText.en}
              </p>
            </div>

            {/* 4 vectors */}
            <div className="result-card space-y-3" style={{ animationDelay: '0.5s' }}>
              {[
                { label: { cn: '他者认同', en: 'Mirror / Other' }, score: profile.mirrorScore, sub: lang === 'CN' ? profile.mirrorLabel.cn : profile.mirrorLabel.en, color: phaseColors[1] },
                { label: { cn: '依恋结构', en: 'Attachment' }, score: profile.attachmentScore, sub: lang === 'CN' ? profile.attachmentLabel.cn : profile.attachmentLabel.en, color: phaseColors[2] },
                { label: { cn: '时间创伤', en: 'Temporal' }, score: profile.temporalScore, sub: lang === 'CN' ? profile.temporalLabel.cn : profile.temporalLabel.en, color: phaseColors[3] },
                { label: { cn: '欲望对象', en: 'Desire Object' }, score: profile.desireScore, sub: lang === 'CN' ? profile.desireLabel.cn : profile.desireLabel.en, color: phaseColors[4] },
              ].map((v, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[12px] font-mono tracking-[0.15em] uppercase" style={{ color: textSecondary }}>
                      {lang === 'CN' ? v.label.cn : v.label.en}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: v.color, opacity: 0.7 }}>{v.sub}</span>
                  </div>
                  <div className="h-px relative overflow-hidden rounded-full" style={{ backgroundColor: isRetro ? 'rgba(139,38,29,0.08)' : 'rgba(255,255,255,0.05)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-[1500ms] ease-out"
                      style={{
                        width: `${v.score}%`,
                        backgroundColor: v.color,
                        transitionDelay: `${0.6 + i * 0.15}s`,
                        boxShadow: `0 0 8px ${v.color}60`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Lacanian formula */}
            <div className="result-card" style={{ animationDelay: '0.9s' }}>
              <div className="rounded-sm px-4 py-3" style={{ border: `1px solid ${choiceBorder}` }}>
                <p className="text-[12px] font-mono tracking-[0.3em] mb-2 uppercase" style={{ color: textSecondary }}>
                  {lang === 'CN' ? '欲望公式' : 'Desire Formula'}
                </p>
                <p className="text-[18px] font-mono tracking-wider" style={{ color: isRetro ? 'rgba(100,40,25,0.60)' : 'rgba(255,255,255,0.50)' }}>
                  {profile.lacanian_formula}
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="result-card pt-2" style={{ animationDelay: '1.1s' }}>
              <p className="text-[11px] mb-4 font-light leading-[1.7]" style={{ color: textMuted }}>
                {lang === 'CN'
                  ? '是否愿意将这份图谱存入迷雾学派档案，并将其作为一个故事的种子？'
                  : 'Would you like to archive this profile in the Mist School, and use it as the seed of a story?'}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 text-[9px] font-mono tracking-[0.25em] uppercase py-3 rounded-sm transition-all duration-200"
                  style={{ border: `1px solid ${choiceBorder}`, color: textMuted }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = isRetro ? 'rgba(139,38,29,0.40)' : 'rgba(255,255,255,0.20)';
                    (e.currentTarget as HTMLButtonElement).style.color = isRetro ? 'rgba(30,15,10,0.80)' : 'rgba(255,255,255,0.70)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = choiceBorder;
                    (e.currentTarget as HTMLButtonElement).style.color = textMuted;
                  }}
                >
                  {lang === 'CN' ? '存入档案' : 'Archive'}
                </button>
                <button
                  onClick={() => { setSessionState('intro'); setCurrentQ(0); setAnswers([]); setProfile(null); }}
                  className="text-[9px] font-mono tracking-[0.25em] uppercase py-3 px-4 transition-colors duration-200"
                  style={{ color: textFaint }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = textMuted; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = textFaint; }}
                >
                  {lang === 'CN' ? '重测' : 'Retake'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom: system text */}
        <div className="px-8 py-4" style={{ borderTop: `1px solid ${borderSub}` }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: textSecondary }}>
            {lang === 'CN' ? '罗夏投射测验 // 迷雾学派诊室 // 数据仅用于叙事生成' : 'RORSCHACH PROJECTIVE TEST // MIST CLINIC // DATA FOR NARRATIVE USE ONLY'}
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL: Inkblot ─────────────────────────────── */}
      <div className="relative flex-1 overflow-hidden scanlines">

        {/* Canvas — retro 模式下 shader 颜色保持原样（纸色背景天然对比），dark 模式黑底 */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full ink-canvas ${awaitingClick ? 'awaiting' : ''}`}
          onClick={handleCanvasClick}
          style={{ transition: 'filter 1.5s ease' }}
        />

        {/* retro: 纸质纹理覆层 */}
        {isRetro && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
              mixBlendMode: 'multiply',
              opacity: 0.6,
            }}
          />
        )}

        {/* Click-to-begin overlay */}
        {sessionState === 'testing' && awaitingClick && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center gap-3" style={{ animation: 'pulseRing 2s ease-in-out infinite' }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ border: `1px solid ${isRetro ? 'rgba(139,38,29,0.30)' : 'rgba(255,255,255,0.20)'}` }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isRetro ? 'rgba(100,30,20,0.5)' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
              </div>
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase" style={{ color: isRetro ? 'rgba(100,30,20,0.40)' : 'rgba(255,255,255,0.25)' }}>
                {lang === 'CN' ? '点击墨迹' : 'Click the inkblot'}
              </span>
            </div>
          </div>
        )}

        {/* Phase ambient label */}
        {sessionState === 'testing' && (
          <div className="absolute top-6 right-6 pointer-events-none">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: phaseColor, opacity: 0.5 }} />
              <span className="text-[8px] font-mono tracking-[0.3em] uppercase" style={{ color: phaseColor, opacity: 0.3 }}>
                {lang === 'CN' ? `阶段 0${phase}` : `PHASE 0${phase}`}
              </span>
            </div>
          </div>
        )}

        {/* Result fade */}
        {sessionState === 'result' && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-[2000ms]"
            style={{ backgroundColor: isRetro ? 'rgba(245,240,232,0.45)' : 'rgba(10,10,11,0.50)' }}
          />
        )}

        {/* Coordinate display on click */}
        {clickPos && sessionState === 'testing' && (
          <div className="absolute bottom-6 right-6 pointer-events-none">
            <p className="text-[8px] font-mono tracking-[0.2em]" style={{ color: isRetro ? 'rgba(100,50,30,0.30)' : 'rgba(255,255,255,0.15)' }}>
              [{(clickPos.x * 100).toFixed(0)}, {((1 - clickPos.y) * 100).toFixed(0)}]
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
