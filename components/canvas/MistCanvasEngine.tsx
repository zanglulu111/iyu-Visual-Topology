import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Clock3,
  Download,
  ExternalLink,
  Film,
  Grid3X3,
  Image as ImageIcon,
  Layers3,
  Loader2,
  Map,
  MessageCircle,
  Mic,
  Move,
  Plus,
  Scissors,
  Send,
  Type,
  Upload,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { generateLovartImage, LovartGenerateResult } from '../../services/lovartImageService';

type CanvasMode = 'image' | 'asset-sheet' | 'storyboard-grid' | 'video';
type NodeKind = 'text' | 'image' | 'video' | 'audio' | 'world';

interface MistCanvasEngineProps {
  lang: 'CN' | 'EN';
  isAdmin?: boolean;
}

interface CanvasNode {
  id: string;
  kind: NodeKind;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  prompt?: string;
  mediaUrl?: string;
  originalUrl?: string;
  canvasUrl?: string;
  mode?: CanvasMode;
  aspectRatio?: string;
  resolution?: string;
  imageModel?: string;
  videoModel?: string;
  videoSeconds?: string;
  projectId?: string;
  threadId?: string;
  r2Key?: string;
  gridCount?: number;
  createdAt: number;
}

interface CanvasEdge {
  id: string;
  from: string;
  to: string;
}

interface Viewport {
  x: number;
  y: number;
  zoom: number;
}

interface CropItem {
  id: string;
  label: string;
  url: string;
}

type Interaction =
  | { type: 'pan'; pointerId: number; startClientX: number; startClientY: number; startX: number; startY: number }
  | { type: 'drag'; pointerId: number; nodeId: string; startClientX: number; startClientY: number; startX: number; startY: number }
  | { type: 'connect'; pointerId: number; fromNodeId: string; startClientX: number; startClientY: number; moved: boolean }
  | null;

interface NodeAddMenuState {
  nodeId: string;
}

interface PreviewConnection {
  fromNodeId: string;
  x: number;
  y: number;
}

const STORAGE_KEY = 'mist-canvas-engine.document.v2';
const GRID_OPTIONS = [4, 6, 8, 9, 12, 16, 20, 25];
const GRID_LAYOUTS: Record<number, { cols: number; rows: number }> = {
  4: { cols: 2, rows: 2 },
  6: { cols: 3, rows: 2 },
  8: { cols: 4, rows: 2 },
  9: { cols: 3, rows: 3 },
  12: { cols: 4, rows: 3 },
  16: { cols: 4, rows: 4 },
  20: { cols: 5, rows: 4 },
  25: { cols: 5, rows: 5 }
};

const ASPECT_OPTIONS = ['AUTO', '1:1', '16:9', '9:16', '4:3', '3:4', '21:9'];
const RESOLUTION_OPTIONS = ['AUTO', '480p', '720p', '1080p', '1K', '2K', '3K', '4K'];

const IMAGE_MODELS = [
  { id: 'auto', label: '即梦 5.0 Lite', tool: '' },
  { id: 'nano_banana_pro', label: 'Nano Banana Pro', tool: 'generate_image_nano_banana_pro' },
  { id: 'nano_banana', label: 'Nano Banana', tool: 'generate_image_nano_banana' },
  { id: 'midjourney', label: 'Midjourney', tool: 'generate_image_midjourney' },
  { id: 'seedream', label: 'Seedream 3.0', tool: 'generate_image_seedream_3_0' },
  { id: 'gpt_image', label: 'GPT Image', tool: 'generate_image_gpt_image' },
  { id: 'flux_pro', label: 'Flux Pro', tool: 'generate_image_flux_pro' }
];

const VIDEO_MODELS = [
  { id: 'auto', label: 'AUTO Video', tool: '' },
  { id: 'kling', label: 'Kling 3.0', tool: 'generate_video_kling_3_0' },
  { id: 'wan', label: 'Wan 2.6', tool: 'generate_video_wan_2_6' },
  { id: 'sora', label: 'Sora v2 Pro', tool: 'generate_video_sora_v2_pro' },
  { id: 'veo3', label: 'Veo3', tool: 'generate_video_veo3' }
];

const MODE_LABELS: Record<CanvasMode, { cn: string; en: string; icon: React.ElementType }> = {
  image: { cn: '图片', en: 'Image', icon: ImageIcon },
  'asset-sheet': { cn: '资产多视角', en: 'Asset Sheet', icon: Layers3 },
  'storyboard-grid': { cn: '宫格分镜', en: 'Grid', icon: Grid3X3 },
  video: { cn: '视频', en: 'Video', icon: Film }
};

const NODE_DEFS: Array<{ kind: NodeKind; cn: string; en: string; descCn: string; descEn: string; icon: React.ElementType }> = [
  { kind: 'text', cn: '文本', en: 'Text', descCn: '脚本、广告词、提示词', descEn: 'Script, copy, prompt', icon: Type },
  { kind: 'image', cn: '图片', en: 'Image', descCn: '参考图、成片、宫格', descEn: 'References and outputs', icon: ImageIcon },
  { kind: 'video', cn: '视频', en: 'Video', descCn: '生成视频、参考片段', descEn: 'Generated or reference clips', icon: Film },
  { kind: 'audio', cn: '音频', en: 'Audio', descCn: '旁白、音乐、声音锚点', descEn: 'Voice, music, sound anchor', icon: Mic },
  { kind: 'world', cn: '3D 世界', en: '3D World', descCn: '空间草图 Beta', descEn: 'Spatial sketch beta', icon: Box }
];

const LINKED_NODE_DEFS: Array<{
  kind: NodeKind;
  cn: string;
  en: string;
  descCn: string;
  descEn: string;
  icon: React.ElementType;
  overrides?: Partial<CanvasNode>;
}> = [
  { kind: 'text', cn: '文本生成', en: 'Text Generation', descCn: '脚本、广告词、品牌文案', descEn: 'Script, copy, prompt', icon: Type, overrides: { title: 'Text Generator' } },
  { kind: 'image', cn: '图片生成', en: 'Image Generation', descCn: '参考图、成片、宫格', descEn: 'References and outputs', icon: ImageIcon, overrides: { title: 'Image Generator' } },
  { kind: 'video', cn: '视频生成', en: 'Video Generation', descCn: '生成视频、参考片段', descEn: 'Generated or reference clips', icon: Film, overrides: { title: 'Video Generator' } },
  { kind: 'image', cn: '图片编辑器', en: 'Image Editor', descCn: '引用上游图片再编辑', descEn: 'Edit from upstream image', icon: ImageIcon, overrides: { title: 'Image Editor', prompt: '基于连接的上游图片进行编辑：' } },
  { kind: 'world', cn: '3D 世界', en: '3D World', descCn: '空间草图 Beta', descEn: 'Spatial sketch beta', icon: Box, overrides: { title: '3D World' } }
];

function getGridLabel(count: number) {
  const layout = GRID_LAYOUTS[count];
  return `${count}宫格 ${layout.cols}x${layout.rows}`;
}

function downloadDataUrl(url: string, filename: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function buildModePrompt(input: {
  mode: CanvasMode;
  prompt: string;
  aspectRatio: string;
  resolution: string;
  gridCount: number;
  videoSeconds: string;
}) {
  const layout = GRID_LAYOUTS[input.gridCount];
  const specs = [
    input.aspectRatio !== 'AUTO' ? `Aspect ratio: ${input.aspectRatio}.` : 'Aspect ratio: automatic.',
    input.resolution !== 'AUTO' ? `Resolution target: ${input.resolution}.` : 'Resolution target: automatic.'
  ].join('\n');

  if (input.mode === 'asset-sheet') {
    return [
      '[MIST CANVAS / MULTI-VIEW ASSET SHEET]',
      specs,
      'Generate one clean multi-view visual asset sheet in a single image.',
      'Keep identity, costume, material, silhouette, and design details absolutely consistent across all views.',
      'Include front view, side view, back view, three-quarter view, close-up material/detail view, and one neutral scale/context view if possible.',
      'Use clear panel separation. No decorative typography, no fake UI, no logo.',
      'Asset prompt:',
      input.prompt.trim()
    ].join('\n');
  }

  if (input.mode === 'storyboard-grid') {
    return [
      '[MIST CANVAS / STORYBOARD GRID]',
      specs,
      `Create exactly ${input.gridCount} cinematic storyboard panels arranged as ${layout.cols} columns x ${layout.rows} rows in one image.`,
      'Every panel should be a readable film still. Keep character identity, costume, world, lighting logic, and spatial continuity consistent.',
      'Use visible panel boundaries. Do not add captions, numbers, speech bubbles, subtitles, UI overlays, or decorative labels.',
      'If the prompt contains shot numbers, follow them in order. If not, create a coherent visual sequence without inventing a new plot ending.',
      'Storyboard prompt:',
      input.prompt.trim()
    ].join('\n');
  }

  if (input.mode === 'video') {
    return [
      '[MIST CANVAS / VIDEO MODULE]',
      `Duration target: ${input.videoSeconds || 'AUTO'} seconds.`,
      specs,
      'Generate a cinematic video clip. Preserve identity and spatial logic from attached references if present.',
      input.prompt.trim()
    ].join('\n');
  }

  return [
    '[MIST CANVAS / IMAGE MODULE]',
    specs,
    'Generate one high-quality image. Preserve reference identity/style only when reference files are attached.',
    input.prompt.trim()
  ].join('\n');
}

function createNode(kind: NodeKind, x: number, y: number, overrides: Partial<CanvasNode> = {}): CanvasNode {
  const baseSize: Record<NodeKind, { width: number; height: number }> = {
    text: { width: 420, height: 260 },
    image: { width: 430, height: 570 },
    video: { width: 460, height: 430 },
    audio: { width: 380, height: 230 },
    world: { width: 420, height: 380 }
  };
  const labels: Record<NodeKind, string> = {
    text: 'Text',
    image: 'Image',
    video: 'Video',
    audio: 'Audio',
    world: '3D World'
  };

  return {
    id: `${kind}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    kind,
    x,
    y,
    width: baseSize[kind].width,
    height: baseSize[kind].height,
    title: labels[kind],
    mode: kind === 'video' ? 'video' : 'image',
    aspectRatio: kind === 'video' ? '16:9' : '1:1',
    resolution: kind === 'video' ? '1080p' : '2K',
    imageModel: 'auto',
    videoModel: 'auto',
    videoSeconds: '5',
    createdAt: Date.now(),
    ...overrides
  };
}

function createEdge(from: string, to: string): CanvasEdge {
  return {
    id: `edge-${from}-${to}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    from,
    to
  };
}

function getEdgePath(from: CanvasNode, to: CanvasNode) {
  const start = { x: from.x + from.width, y: from.y + from.height / 2 };
  const end = { x: to.x, y: to.y + to.height / 2 };
  const tension = Math.max(80, Math.abs(end.x - start.x) * 0.45);
  return `M ${start.x} ${start.y} C ${start.x + tension} ${start.y}, ${end.x - tension} ${end.y}, ${end.x} ${end.y}`;
}

function getEdgePathToPoint(from: CanvasNode, point: { x: number; y: number }) {
  const start = { x: from.x + from.width, y: from.y + from.height / 2 };
  const tension = Math.max(80, Math.abs(point.x - start.x) * 0.45);
  return `M ${start.x} ${start.y} C ${start.x + tension} ${start.y}, ${point.x - tension} ${point.y}, ${point.x} ${point.y}`;
}

export const MistCanvasEngine: React.FC<MistCanvasEngineProps> = ({ lang, isAdmin = false }) => {
  const { theme } = useTheme();
  const isRetro = theme === 'retro';
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const interactionRef = useRef<Interaction>(null);
  const viewportRef = useRef<Viewport>({ x: 180, y: 90, zoom: 1 });
  const nodesRef = useRef<CanvasNode[]>([]);
  const edgesRef = useRef<CanvasEdge[]>([]);
  const nodeElementRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const edgePathRefs = useRef<Record<string, SVGPathElement | null>>({});
  const previewPathRef = useRef<SVGPathElement | null>(null);
  const viewportSyncTimerRef = useRef<number | null>(null);
  const nodesSyncTimerRef = useRef<number | null>(null);
  const gestureScaleRef = useRef(1);
  const wheelZoomStep = 0.0025;
  const [nodes, setNodes] = useState<CanvasNode[]>(() => [
    createNode('image', 220, 120, { title: 'Image', prompt: lang === 'EN' ? 'Drop or generate an image here.' : '在这里上传或生成图片。' })
  ]);
  const [edges, setEdges] = useState<CanvasEdge[]>([]);
  const [viewport, setViewport] = useState<Viewport>({ x: 180, y: 90, zoom: 1 });
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [pendingConnectionFrom, setPendingConnectionFrom] = useState<string | null>(null);
  const previewConnectionRef = useRef<PreviewConnection | null>(null);
  const [nodeAddMenu, setNodeAddMenu] = useState<NodeAddMenuState | null>(null);
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false);
  const [projectId, setProjectId] = useState('');
  const defaultGridCount = 25;
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [error, setError] = useState('');
  const [crops, setCrops] = useState<CropItem[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.nodes)) setNodes(parsed.nodes);
      if (Array.isArray(parsed.edges)) setEdges(parsed.edges);
      if (parsed.viewport) setViewport(parsed.viewport);
    } catch {
      // Ignore stale local canvas documents.
    }
  }, []);

  useEffect(() => {
    viewportRef.current = viewport;
  }, [viewport]);

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  useEffect(() => {
    edgesRef.current = edges;
  }, [edges]);

  useEffect(() => {
    if (interactionRef.current) return;
    const saveTimer = window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ nodes, edges, viewport }));
    }, 600);
    return () => window.clearTimeout(saveTimer);
  }, [nodes, edges, viewport]);

  useEffect(() => {
    return () => {
      if (viewportSyncTimerRef.current !== null) window.clearTimeout(viewportSyncTimerRef.current);
      if (nodesSyncTimerRef.current !== null) window.clearTimeout(nodesSyncTimerRef.current);
    };
  }, []);

  const selectedNode = useMemo(() => nodes.find(node => node.id === selectedNodeId) || null, [nodes, selectedNodeId]);
  const getUpstreamNodes = useCallback((nodeId: string) => {
    const visited = new Set<string>();
    const ordered: CanvasNode[] = [];
    const visit = (id: string) => {
      edges.filter(edge => edge.to === id).forEach(edge => {
        if (visited.has(edge.from)) return;
        visited.add(edge.from);
        visit(edge.from);
        const node = nodes.find(item => item.id === edge.from);
        if (node) ordered.push(node);
      });
    };
    visit(nodeId);
    return ordered;
  }, [edges, nodes]);

  const incomingNodes = useMemo(() => selectedNode ? getUpstreamNodes(selectedNode.id) : [], [getUpstreamNodes, selectedNode]);

  const getReferenceUrlsForNode = useCallback((nodeId: string) => {
    const urls = new Set<string>();
    getUpstreamNodes(nodeId).forEach(node => {
      if (node.mediaUrl && /^https?:\/\//i.test(node.mediaUrl)) urls.add(node.mediaUrl);
    });
    return Array.from(urls);
  }, [getUpstreamNodes]);

  const selectedReferenceUrls = useMemo(
    () => selectedNode ? getReferenceUrlsForNode(selectedNode.id) : [],
    [getReferenceUrlsForNode, selectedNode]
  );

  const writeViewportToDom = useCallback((nextViewport: Viewport) => {
    viewportRef.current = nextViewport;
    if (worldRef.current) {
      worldRef.current.style.transform = `translate3d(${nextViewport.x}px, ${nextViewport.y}px, 0) scale(${nextViewport.zoom})`;
    }
    if (canvasRef.current) {
      canvasRef.current.style.backgroundSize = `${28 * nextViewport.zoom}px ${28 * nextViewport.zoom}px`;
      canvasRef.current.style.backgroundPosition = `${nextViewport.x}px ${nextViewport.y}px`;
    }
  }, []);

  const flushViewportState = useCallback(() => {
    if (viewportSyncTimerRef.current !== null) {
      window.clearTimeout(viewportSyncTimerRef.current);
      viewportSyncTimerRef.current = null;
    }
    setViewport({ ...viewportRef.current });
  }, []);

  const scheduleViewportStateSync = useCallback((delay = 80) => {
    if (viewportSyncTimerRef.current !== null) window.clearTimeout(viewportSyncTimerRef.current);
    viewportSyncTimerRef.current = window.setTimeout(() => {
      viewportSyncTimerRef.current = null;
      setViewport({ ...viewportRef.current });
    }, delay);
  }, []);

  const persistCanvasDocument = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      nodes: nodesRef.current,
      edges: edgesRef.current,
      viewport: viewportRef.current
    }));
  }, []);

  const commitViewport = useCallback((nextViewport: Viewport, syncDelay = 80) => {
    writeViewportToDom(nextViewport);
    scheduleViewportStateSync(syncDelay);
  }, [scheduleViewportStateSync, writeViewportToDom]);

  const updateEdgePathsForNode = useCallback((nodeId?: string) => {
    edgesRef.current.forEach(edge => {
      if (nodeId && edge.from !== nodeId && edge.to !== nodeId) return;
      const fromNode = nodesRef.current.find(node => node.id === edge.from);
      const toNode = nodesRef.current.find(node => node.id === edge.to);
      const path = edgePathRefs.current[edge.id];
      if (!fromNode || !toNode || !path) return;
      path.setAttribute('d', getEdgePath(fromNode, toNode));
    });
  }, []);

  const flushNodesState = useCallback(() => {
    if (nodesSyncTimerRef.current !== null) {
      window.clearTimeout(nodesSyncTimerRef.current);
      nodesSyncTimerRef.current = null;
    }
    setNodes([...nodesRef.current]);
  }, []);

  const scheduleNodesStateSync = useCallback((delay = 80) => {
    if (nodesSyncTimerRef.current !== null) window.clearTimeout(nodesSyncTimerRef.current);
    nodesSyncTimerRef.current = window.setTimeout(() => {
      nodesSyncTimerRef.current = null;
      setNodes([...nodesRef.current]);
    }, delay);
  }, []);

  const applyNodePosition = useCallback((nodeId: string, x: number, y: number) => {
    nodesRef.current = nodesRef.current.map(node => node.id === nodeId ? { ...node, x, y } : node);
    const element = nodeElementRefs.current[nodeId];
    if (element) {
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    updateEdgePathsForNode(nodeId);
    scheduleNodesStateSync();
  }, [scheduleNodesStateSync, updateEdgePathsForNode]);

  const applyPreviewConnection = useCallback((nextPreview: PreviewConnection | null) => {
    previewConnectionRef.current = nextPreview;
    const path = previewPathRef.current;
    if (!path) return;
    if (!nextPreview) {
      path.style.display = 'none';
      path.setAttribute('d', '');
      return;
    }
    const fromNode = nodesRef.current.find(node => node.id === nextPreview.fromNodeId);
    if (!fromNode) {
      path.style.display = 'none';
      path.setAttribute('d', '');
      return;
    }
    path.setAttribute('d', getEdgePathToPoint(fromNode, nextPreview));
    path.style.display = 'block';
  }, []);

  const buildPromptForNode = useCallback((targetNode: CanvasNode) => {
    const upstreamNodes = getUpstreamNodes(targetNode.id);
    const contextItems = upstreamNodes
      .map(node => {
        if (node.kind === 'text' && node.prompt?.trim()) return `[Text Node: ${node.title}]\n${node.prompt.trim()}`;
        if (node.prompt?.trim()) return `[${node.kind.toUpperCase()} Node: ${node.title}]\n${node.prompt.trim()}`;
        if (node.mediaUrl) return `[${node.kind.toUpperCase()} Reference Node: ${node.title}]`;
        return '';
      })
      .filter(Boolean);
    const instruction = targetNode.prompt?.trim() || '';
    const promptWithContext = [
      'Connected canvas context:',
      contextItems.join('\n\n') || 'No upstream context.',
      instruction ? `Current node instruction:\n${instruction}` : ''
    ].filter(Boolean).join('\n\n');
    return buildModePrompt({
      mode: targetNode.kind === 'video' ? 'video' : (targetNode.mode || 'image'),
      prompt: promptWithContext,
      aspectRatio: targetNode.aspectRatio || 'AUTO',
      resolution: targetNode.resolution || 'AUTO',
      gridCount: targetNode.gridCount || defaultGridCount,
      videoSeconds: targetNode.videoSeconds || '5'
    });
  }, [getUpstreamNodes]);

  const screenToWorld = useCallback((clientX: number, clientY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    const currentViewport = viewportRef.current;
    return {
      x: (clientX - rect.left - currentViewport.x) / currentViewport.zoom,
      y: (clientY - rect.top - currentViewport.y) / currentViewport.zoom
    };
  }, []);

  const findNodeAtScreenPoint = useCallback((clientX: number, clientY: number, excludeId?: string) => {
    const world = screenToWorld(clientX, clientY);
    return [...nodesRef.current].reverse().find(node => (
      node.id !== excludeId &&
      world.x >= node.x - 24 &&
      world.x <= node.x + node.width + 24 &&
      world.y >= node.y - 24 &&
      world.y <= node.y + node.height + 24
    ));
  }, [screenToWorld]);

  const addNode = useCallback((kind: NodeKind, x?: number, y?: number, overrides: Partial<CanvasNode> = {}, connectFromId?: string) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    const currentViewport = viewportRef.current;
    const fallback = rect
      ? { x: (rect.width * 0.42 - currentViewport.x) / currentViewport.zoom, y: (rect.height * 0.28 - currentViewport.y) / currentViewport.zoom }
      : { x: 260, y: 160 };
    const node = createNode(kind, x ?? fallback.x, y ?? fallback.y, overrides);
    setNodes(prev => {
      const next = [...prev, node];
      nodesRef.current = next;
      return next;
    });
    if (connectFromId) {
      setEdges(prev => {
        const next = [...prev, createEdge(connectFromId, node.id)];
        edgesRef.current = next;
        return next;
      });
    }
    setSelectedNodeId(node.id);
    return node;
  }, []);

  const addNodeNearSelected = (kind: NodeKind) => {
    const anchor = selectedNode || nodes[nodes.length - 1];
    addNode(kind, (anchor?.x || 0) + (anchor?.width || 360) + 80, anchor?.y || 160);
  };

  const addLinkedNode = (sourceNode: CanvasNode, def: typeof LINKED_NODE_DEFS[number]) => {
    const node = addNode(
      def.kind,
      sourceNode.x + sourceNode.width + 96,
      sourceNode.y,
      def.overrides || {},
      sourceNode.id
    );
    setNodeAddMenu(null);
    setPendingConnectionFrom(null);
    return node;
  };

  const updateNode = (nodeId: string, updates: Partial<CanvasNode>) => {
    setNodes(prev => {
      const next = prev.map(node => node.id === nodeId ? { ...node, ...updates } : node);
      nodesRef.current = next;
      return next;
    });
  };

  const connectNodes = useCallback((from: string, to: string) => {
    if (from === to) {
      setPendingConnectionFrom(null);
      applyPreviewConnection(null);
      return;
    }
    setEdges(prev => {
      if (prev.some(edge => edge.from === from && edge.to === to)) return prev;
      const next = [...prev, createEdge(from, to)];
      edgesRef.current = next;
      return next;
    });
    setPendingConnectionFrom(null);
    applyPreviewConnection(null);
    setNodeAddMenu(null);
  }, [applyPreviewConnection]);

  const openNodeAddMenu = useCallback((nodeId: string) => {
    setSelectedNodeId(nodeId);
    setPendingConnectionFrom(null);
    applyPreviewConnection(null);
    setNodeAddMenu(prev => prev?.nodeId === nodeId ? null : { nodeId });
  }, [applyPreviewConnection]);

  const handleOutputPortPointerDown = (event: React.PointerEvent<HTMLButtonElement>, node: CanvasNode) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedNodeId(node.id);
    setNodeAddMenu(null);
    setPendingConnectionFrom(node.id);
    interactionRef.current = {
      type: 'connect',
      pointerId: event.pointerId,
      fromNodeId: node.id,
      startClientX: event.clientX,
      startClientY: event.clientY,
      moved: false
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleInputPortClick = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    if (pendingConnectionFrom) connectNodes(pendingConnectionFrom, nodeId);
  };

  const handlePointerDownCanvas = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    event.preventDefault();
    setSelectedNodeId(null);
    setPendingConnectionFrom(null);
    setNodeAddMenu(null);
    applyPreviewConnection(null);
    const currentViewport = viewportRef.current;
    interactionRef.current = {
      type: 'pan',
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startX: currentViewport.x,
      startY: currentViewport.y
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleNodePointerDown = (event: React.PointerEvent<HTMLDivElement>, node: CanvasNode) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedNodeId(node.id);
    const currentNode = nodesRef.current.find(item => item.id === node.id) || node;
    interactionRef.current = {
      type: 'drag',
      pointerId: event.pointerId,
      nodeId: node.id,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startX: currentNode.x,
      startY: currentNode.y
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const interaction = interactionRef.current;
      if (!interaction || interaction.pointerId !== event.pointerId) return;
      event.preventDefault();
      if (interaction.type === 'pan') {
        writeViewportToDom({
          ...viewportRef.current,
          x: interaction.startX + event.clientX - interaction.startClientX,
          y: interaction.startY + event.clientY - interaction.startClientY
        });
      } else if (interaction.type === 'drag') {
        const currentZoom = viewportRef.current.zoom;
        const dx = (event.clientX - interaction.startClientX) / currentZoom;
        const dy = (event.clientY - interaction.startClientY) / currentZoom;
        applyNodePosition(interaction.nodeId, interaction.startX + dx, interaction.startY + dy);
      } else {
        const distance = Math.hypot(event.clientX - interaction.startClientX, event.clientY - interaction.startClientY);
        if (distance > 4) interaction.moved = true;
        const world = screenToWorld(event.clientX, event.clientY);
        applyPreviewConnection({ fromNodeId: interaction.fromNodeId, x: world.x, y: world.y });
      }
    };

    const handleUp = (event: PointerEvent) => {
      const interaction = interactionRef.current;
      if (interaction?.type === 'connect' && interaction.pointerId === event.pointerId) {
        event.preventDefault();
        const targetNode = findNodeAtScreenPoint(event.clientX, event.clientY, interaction.fromNodeId);
        if (interaction.moved && targetNode) {
          connectNodes(interaction.fromNodeId, targetNode.id);
        } else if (interaction.moved) {
          setPendingConnectionFrom(interaction.fromNodeId);
        } else {
          openNodeAddMenu(interaction.fromNodeId);
        }
        applyPreviewConnection(null);
      }
      interactionRef.current = null;
      flushViewportState();
      flushNodesState();
      persistCanvasDocument();
    };

    window.addEventListener('pointermove', handleMove, { passive: false });
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointercancel', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointercancel', handleUp);
    };
  }, [applyNodePosition, applyPreviewConnection, connectNodes, findNodeAtScreenPoint, flushNodesState, flushViewportState, openNodeAddMenu, persistCanvasDocument, screenToWorld, writeViewportToDom]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleNativeWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const rect = canvas.getBoundingClientRect();
      const pointerX = event.clientX - rect.left;
      const pointerY = event.clientY - rect.top;
      const deltaMultiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 160 : 1;
      const currentViewport = viewportRef.current;

      const isPinchZoom = event.ctrlKey;
      const isTrackpadPan = !isPinchZoom && event.deltaMode === 0 && (Math.abs(event.deltaX) > 0 || Math.abs(event.deltaY) < 80);
      if (isTrackpadPan) {
        commitViewport({
          ...currentViewport,
          x: currentViewport.x - event.deltaX * deltaMultiplier,
          y: currentViewport.y - event.deltaY * deltaMultiplier
        }, 45);
        return;
      }

      const gestureMultiplier = isPinchZoom ? 1.5 : 1;
      const normalizedDelta = Math.max(-120, Math.min(120, event.deltaY * deltaMultiplier * gestureMultiplier));
      const worldX = (pointerX - currentViewport.x) / currentViewport.zoom;
      const worldY = (pointerY - currentViewport.y) / currentViewport.zoom;
      const nextZoom = Math.min(2.4, Math.max(0.25, currentViewport.zoom - normalizedDelta * wheelZoomStep));
      commitViewport({
        x: pointerX - worldX * nextZoom,
        y: pointerY - worldY * nextZoom,
        zoom: nextZoom
      });
    };

    canvas.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleNativeWheel);
  }, [commitViewport, wheelZoomStep]);

  useEffect(() => {
    const preventBrowserZoom = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey)) return;
      if (['+', '=', '-', '_', '0'].includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener('keydown', preventBrowserZoom, { capture: true });
    return () => window.removeEventListener('keydown', preventBrowserZoom, { capture: true });
  }, []);

  useEffect(() => {
    const zoomAtScreenPoint = (clientX: number, clientY: number, nextZoom: number) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pointerX = clientX - rect.left;
      const pointerY = clientY - rect.top;
      const currentViewport = viewportRef.current;
      const worldX = (pointerX - currentViewport.x) / currentViewport.zoom;
      const worldY = (pointerY - currentViewport.y) / currentViewport.zoom;
      commitViewport({
        x: pointerX - worldX * nextZoom,
        y: pointerY - worldY * nextZoom,
        zoom: nextZoom
      });
    };

    const preventGestureZoom = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const handleGestureStart = (event: Event) => {
      preventGestureZoom(event);
      gestureScaleRef.current = 1;
    };

    const handleGestureChange = (event: Event) => {
      preventGestureZoom(event);
      const gestureEvent = event as Event & { scale?: number; clientX?: number; clientY?: number };
      const scale = gestureEvent.scale || 1;
      const deltaScale = scale / gestureScaleRef.current;
      gestureScaleRef.current = scale;
      const currentViewport = viewportRef.current;
      const nextZoom = Math.min(2.4, Math.max(0.25, currentViewport.zoom * deltaScale));
      const rect = canvasRef.current?.getBoundingClientRect();
      zoomAtScreenPoint(
        gestureEvent.clientX ?? (rect ? rect.left + rect.width / 2 : 0),
        gestureEvent.clientY ?? (rect ? rect.top + rect.height / 2 : 0),
        nextZoom
      );
    };

    window.addEventListener('gesturestart', handleGestureStart, { passive: false } as AddEventListenerOptions);
    window.addEventListener('gesturechange', handleGestureChange, { passive: false } as AddEventListenerOptions);
    window.addEventListener('gestureend', preventGestureZoom, { passive: false } as AddEventListenerOptions);
    return () => {
      window.removeEventListener('gesturestart', handleGestureStart);
      window.removeEventListener('gesturechange', handleGestureChange);
      window.removeEventListener('gestureend', preventGestureZoom);
    };
  }, [commitViewport]);

  const handleGenerateNode = async (targetNode: CanvasNode) => {
    if (!isAdmin) {
      setError(lang === 'EN' ? 'Lovart generation is administrator-only.' : 'Lovart 生成功能仅管理员可用。');
      return;
    }
    if (!targetNode.prompt?.trim()) {
      setError(lang === 'EN' ? 'Please describe what you want to create.' : '请先描述你想生成的内容。');
      return;
    }

    setIsGenerating(true);
    setError('');
    try {
      const nodeMode = targetNode.kind === 'video' ? 'video' : (targetNode.mode || 'image');
      const activeModel = nodeMode === 'video'
        ? VIDEO_MODELS.find(item => item.id === (targetNode.videoModel || 'auto'))
        : IMAGE_MODELS.find(item => item.id === (targetNode.imageModel || 'auto'));
      const modelTool = activeModel?.tool || '';
      const upstreamUrls = getReferenceUrlsForNode(targetNode.id);

      const result: LovartGenerateResult = await generateLovartImage({
        prompt: buildPromptForNode(targetNode),
        attachments: upstreamUrls,
        projectId: projectId.trim() || undefined,
        timeoutMs: nodeMode === 'video' ? 110000 : 90000,
        preferModels: modelTool ? { [nodeMode === 'video' ? 'VIDEO' : 'IMAGE']: [modelTool] } : undefined
      });

      if (!result.primaryUrl && !result.imageUrl && !result.videoUrl) {
        throw new Error(result.error || 'Lovart did not return a persisted media URL.');
      }

      const isVideo = Boolean(result.videoUrl || result.primaryType?.startsWith('video/'));
      updateNode(targetNode.id, {
        kind: isVideo ? 'video' : targetNode.kind,
        height: isVideo ? Math.max(targetNode.height, 430) : targetNode.height,
        title: nodeMode === 'storyboard-grid' ? getGridLabel(targetNode.gridCount || defaultGridCount) : MODE_LABELS[nodeMode][lang === 'EN' ? 'en' : 'cn'],
        mode: nodeMode,
        mediaUrl: result.imageUrl || result.videoUrl || result.primaryUrl,
        originalUrl: result.originalImageUrl || result.originalVideoUrl,
        canvasUrl: result.canvasUrl,
        projectId: result.projectId,
        threadId: result.threadId,
        r2Key: result.r2Key,
        gridCount: nodeMode === 'storyboard-grid' ? (targetNode.gridCount || defaultGridCount) : targetNode.gridCount
      });
      setSelectedNodeId(targetNode.id);
      if (result.finalStatus === 'pending_confirmation') {
        setError(lang === 'EN'
          ? 'Lovart returned pending confirmation. Open Lovart canvas to confirm the high-cost task.'
          : 'Lovart 返回了高成本确认状态，请打开 Lovart 画布确认。');
      }
    } catch (err: any) {
      setError(err?.message || (lang === 'EN' ? 'Generation failed.' : '生成失败。'));
    } finally {
      setIsGenerating(false);
    }
  };

  const splitImageNode = async (node: CanvasNode, count = node.gridCount || defaultGridCount) => {
    if (!node.mediaUrl) return;
    setError('');
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      const loaded = new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(lang === 'EN'
          ? 'Image load failed. If this is a remote image without CORS, upload it into the canvas first.'
          : '图片加载失败。如果远程图没有 CORS，请先上传到画布再切割。'));
      });
      img.src = node.mediaUrl;
      const image = await loaded;
      const layout = GRID_LAYOUTS[count];
      const cellW = Math.floor(image.naturalWidth / layout.cols);
      const cellH = Math.floor(image.naturalHeight / layout.rows);
      const nextCrops: CropItem[] = [];
      const childNodes: CanvasNode[] = [];
      const childEdges: CanvasEdge[] = [];
      const childW = 210;
      const childH = 140;

      for (let row = 0; row < layout.rows; row += 1) {
        for (let col = 0; col < layout.cols; col += 1) {
          const index = row * layout.cols + col + 1;
          const canvas = document.createElement('canvas');
          canvas.width = cellW;
          canvas.height = cellH;
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Canvas context unavailable.');
          ctx.drawImage(image, col * cellW, row * cellH, cellW, cellH, 0, 0, cellW, cellH);
          const url = canvas.toDataURL('image/png');
          nextCrops.push({ id: `crop-${Date.now()}-${index}`, label: String(index).padStart(2, '0'), url });
          const childNode = createNode('image', node.x + col * (childW + 22), node.y + node.height + 90 + row * (childH + 54), {
            width: childW,
            height: childH + 34,
            title: `Shot ${String(index).padStart(2, '0')}`,
            mediaUrl: url,
            prompt: node.prompt
          });
          childNodes.push(childNode);
          childEdges.push(createEdge(node.id, childNode.id));
        }
      }
      setCrops(nextCrops);
      setNodes(prev => {
        const next = [...prev, ...childNodes];
        nodesRef.current = next;
        return next;
      });
      setEdges(prev => {
        const next = [...prev, ...childEdges];
        edgesRef.current = next;
        return next;
      });
    } catch (err: any) {
      setError(err?.message || (lang === 'EN' ? 'Split failed.' : '切割失败。'));
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const rect = canvasRef.current?.getBoundingClientRect();
    const world = rect ? screenToWorld(rect.left + rect.width * 0.45, rect.top + rect.height * 0.25) : { x: 260, y: 160 };
    const isVideo = file.type.startsWith('video/');
    addNode(isVideo ? 'video' : 'image', world.x, world.y, {
      title: file.name,
      mediaUrl: url,
      width: isVideo ? 460 : 420,
      height: isVideo ? 280 : 420
    });
    event.target.value = '';
  };

  const removeNode = (id: string) => {
    setNodes(prev => {
      const next = prev.filter(node => node.id !== id);
      nodesRef.current = next;
      return next;
    });
    setEdges(prev => {
      const next = prev.filter(edge => edge.from !== id && edge.to !== id);
      edgesRef.current = next;
      return next;
    });
    if (selectedNodeId === id) setSelectedNodeId(null);
    if (nodeAddMenu?.nodeId === id) setNodeAddMenu(null);
    if (pendingConnectionFrom === id) setPendingConnectionFrom(null);
  };

  const zoomBy = (delta: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    const pointerX = rect ? rect.width / 2 : 0;
    const pointerY = rect ? rect.height / 2 : 0;
    const currentViewport = viewportRef.current;
    const worldX = (pointerX - currentViewport.x) / currentViewport.zoom;
    const worldY = (pointerY - currentViewport.y) / currentViewport.zoom;
    const nextZoom = Math.min(2.4, Math.max(0.25, currentViewport.zoom + delta));
    commitViewport({
      x: pointerX - worldX * nextZoom,
      y: pointerY - worldY * nextZoom,
      zoom: nextZoom
    });
  };

  const applyAssistantSuggestion = (text: string) => {
    if (selectedNode) {
      updateNode(selectedNode.id, { prompt: text });
      return;
    }
    addNode('text', undefined, undefined, { title: 'Assistant Note', prompt: text });
  };

  return (
    <div className={`relative h-full overflow-hidden select-none ${isRetro ? 'bg-[#0B0A08]' : 'bg-black'}`}>
      <div
        ref={canvasRef}
        className="absolute inset-0 overflow-hidden cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDownCanvas}
        style={{
          backgroundColor: '#050505',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: `${28 * viewport.zoom}px ${28 * viewport.zoom}px`,
          backgroundPosition: `${viewport.x}px ${viewport.y}px`,
          overscrollBehavior: 'none',
          touchAction: 'none'
        }}
      >
        <div
          ref={worldRef}
          className="absolute left-0 top-0"
          style={{
            transform: `translate3d(${viewport.x}px, ${viewport.y}px, 0) scale(${viewport.zoom})`,
            transformOrigin: '0 0',
            willChange: 'transform'
          }}
        >
          <svg className="absolute left-0 top-0 overflow-visible pointer-events-none" style={{ width: 1, height: 1 }}>
            {edges.map(edge => {
              const fromNode = nodes.find(node => node.id === edge.from);
              const toNode = nodes.find(node => node.id === edge.to);
              if (!fromNode || !toNode) return null;
              const isActive = selectedNodeId === edge.from || selectedNodeId === edge.to;
              return (
                <path
                  key={edge.id}
                  ref={element => {
                    edgePathRefs.current[edge.id] = element;
                  }}
                  d={getEdgePath(fromNode, toNode)}
                  fill="none"
                  stroke={isActive ? 'rgba(56,189,248,0.78)' : 'rgba(255,255,255,0.36)'}
                  strokeWidth={isActive ? 2.2 : 1.6}
                  strokeLinecap="round"
                />
              );
            })}
            <path
              ref={previewPathRef}
              d=""
              fill="none"
              stroke="rgba(251,191,36,0.88)"
              strokeWidth={2.3}
              strokeLinecap="round"
              strokeDasharray="6 8"
              style={{ display: 'none' }}
            />
          </svg>

          {nodes.map(node => {
            const active = selectedNodeId === node.id;
            const nodeMode: CanvasMode = node.kind === 'video' ? 'video' : (node.mode || 'image');
            const modeOptions = (node.kind === 'video' ? ['video'] : ['image', 'asset-sheet', 'storyboard-grid']) as CanvasMode[];
            const incomingCount = edges.filter(edge => edge.to === node.id).length;
            const outgoingCount = edges.filter(edge => edge.from === node.id).length;
            const referenceCount = getReferenceUrlsForNode(node.id).length;
            const isConnectTarget = Boolean(pendingConnectionFrom && pendingConnectionFrom !== node.id);
            const isConnectSource = pendingConnectionFrom === node.id;
            return (
              <div
                key={node.id}
                ref={element => {
                  nodeElementRefs.current[node.id] = element;
                }}
                onPointerDown={(event) => handleNodePointerDown(event, node)}
                className="absolute rounded-[26px] shadow-2xl overflow-visible group"
                style={{
                  left: 0,
                  top: 0,
                  width: node.width,
                  height: node.height,
                  transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
                  willChange: active ? 'transform' : undefined,
                  touchAction: 'none'
                }}
              >
                <button
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => handleInputPortClick(node.id)}
                  className={`absolute z-30 -left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                    isConnectTarget || active
                      ? 'opacity-100 scale-100 border-sky-300 bg-sky-400 text-black shadow-lg shadow-sky-400/40'
                      : 'opacity-0 scale-75 border-white/45 bg-black/80 text-zinc-300 group-hover:opacity-100 group-hover:scale-100 hover:border-sky-300 hover:text-sky-300'
                  }`}
                  title={lang === 'EN' ? 'Input port' : '左节点：输入参考'}
                >
                  <Plus size={16} />
                </button>
                <button
                  onPointerDown={(event) => handleOutputPortPointerDown(event, node)}
                  className={`absolute z-30 -right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                    isConnectSource || nodeAddMenu?.nodeId === node.id || active
                      ? 'opacity-100 scale-100 border-amber-200 bg-amber-300 text-black shadow-lg shadow-amber-300/40'
                      : 'opacity-0 scale-75 border-white/45 bg-black/80 text-zinc-300 group-hover:opacity-100 group-hover:scale-100 hover:border-amber-200 hover:text-amber-200'
                  }`}
                  title={lang === 'EN' ? 'Click to add downstream, drag to connect' : '点击新增下游模块，拖拽连接其他模块'}
                >
                  <Plus size={16} />
                </button>

                <div
                  className={`h-full rounded-[26px] border overflow-hidden ${
                    active ? 'border-sky-400 shadow-sky-500/20' : 'border-white/35 group-hover:border-white/60'
                  } ${node.kind === 'image' && !node.mediaUrl ? 'bg-[#1f1f20]' : 'bg-[#171717]'}`}
                >
                  <div className="h-10 flex items-center justify-between px-3 text-zinc-300 bg-black/15">
                    <div className="flex items-center gap-2 min-w-0">
                      <Move size={13} className="text-zinc-500" />
                      <span className="text-sm font-bold truncate">{node.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-zinc-500 font-bold whitespace-nowrap">
                        {incomingCount} in / {outgoingCount} out
                      </span>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {node.canvasUrl && (
                          <a
                            href={node.canvasUrl}
                            target="_blank"
                            rel="noreferrer"
                            onPointerDown={(event) => event.stopPropagation()}
                            className="p-1.5 rounded-full hover:bg-white/10"
                            title="Lovart"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                        {node.kind === 'image' && node.mediaUrl && (
                          <button
                            onPointerDown={(event) => event.stopPropagation()}
                            onClick={() => splitImageNode(node)}
                            className="p-1.5 rounded-full hover:bg-white/10"
                            title={lang === 'EN' ? 'Split grid' : '切割宫格'}
                          >
                            <Scissors size={13} />
                          </button>
                        )}
                        <button
                          onPointerDown={(event) => event.stopPropagation()}
                          onClick={() => removeNode(node.id)}
                          className="p-1.5 rounded-full hover:bg-white/10"
                          title={lang === 'EN' ? 'Remove' : '删除'}
                        >
                          <X size={13} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="h-[calc(100%-40px)] flex flex-col">
                    {(node.kind === 'image' || node.kind === 'video') && (
                      <div className="flex-1 min-h-0 bg-black/20 flex items-center justify-center">
                        {node.kind === 'image' && node.mediaUrl && (
                          <img src={node.mediaUrl} alt={node.title} className="w-full h-full object-contain pointer-events-none" />
                        )}
                        {node.kind === 'image' && !node.mediaUrl && (
                          <div className="flex flex-col items-center justify-center text-zinc-600">
                            <ImageIcon size={58} />
                            <span className="mt-3 text-xs font-bold">{lang === 'EN' ? 'Image Generator' : '图片生成器'}</span>
                          </div>
                        )}
                        {node.kind === 'video' && node.mediaUrl && (
                          <video src={node.mediaUrl} className="w-full h-full object-contain" controls onPointerDown={(event) => event.stopPropagation()} />
                        )}
                        {node.kind === 'video' && !node.mediaUrl && (
                          <div className="flex flex-col items-center justify-center text-zinc-600">
                            <Film size={54} />
                            <span className="mt-3 text-xs font-bold">{lang === 'EN' ? 'Video Generator' : '视频生成器'}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {node.kind === 'text' && (
                      <textarea
                        value={node.prompt || ''}
                        onPointerDown={(event) => event.stopPropagation()}
                        onChange={(event) => updateNode(node.id, { prompt: event.target.value })}
                        className="flex-1 bg-transparent resize-none outline-none p-5 text-sm text-zinc-200 placeholder:text-zinc-600"
                        placeholder={lang === 'EN' ? 'Write a script, prompt, or note...' : '写脚本、提示词或笔记...'}
                      />
                    )}

                    {node.kind === 'audio' && (
                      <div className="flex-1 min-h-0 flex flex-col justify-center px-5 text-zinc-400">
                        <Mic size={24} className="mb-4 text-sky-400" />
                        <div className="h-10 rounded-full bg-white/10 overflow-hidden flex items-center gap-1 px-4">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <span key={i} className="w-1 rounded-full bg-sky-400/70" style={{ height: `${8 + (i % 6) * 4}px` }} />
                          ))}
                        </div>
                      </div>
                    )}

                    {node.kind === 'world' && (
                      <div className="flex-1 min-h-0 flex items-center justify-center text-zinc-500">
                        <Box size={50} />
                        <span className="ml-4 text-sm font-bold">3D WORLD BETA</span>
                      </div>
                    )}

                    {node.kind !== 'text' && (
                      <div
                        className="border-t border-white/10 bg-[#111112] p-3"
                        onPointerDown={(event) => event.stopPropagation()}
                      >
                        <textarea
                          value={node.prompt || ''}
                          onChange={(event) => updateNode(node.id, { prompt: event.target.value })}
                          className="w-full h-[74px] bg-transparent outline-none resize-none text-sm leading-relaxed text-zinc-100 placeholder:text-zinc-600"
                          placeholder={lang === 'EN' ? 'Describe anything you want to create...' : '描述任何你想要生成的内容'}
                        />
                        {(node.kind === 'image' || node.kind === 'video') && (
                          <div className="mt-3 flex items-center gap-2 min-w-0">
                            <select
                              value={nodeMode}
                              onChange={event => updateNode(node.id, { mode: event.target.value as CanvasMode })}
                              className="min-w-0 flex-1 bg-black/30 border border-white/10 rounded-lg px-2 h-9 text-xs font-bold text-zinc-100 outline-none"
                            >
                              {modeOptions.map(item => (
                                <option key={item} value={item}>{MODE_LABELS[item][lang === 'EN' ? 'en' : 'cn']}</option>
                              ))}
                            </select>
                            <select
                              value={nodeMode === 'video' ? (node.videoModel || 'auto') : (node.imageModel || 'auto')}
                              onChange={event => nodeMode === 'video'
                                ? updateNode(node.id, { videoModel: event.target.value })
                                : updateNode(node.id, { imageModel: event.target.value })}
                              className="min-w-0 flex-1 bg-black/30 border border-white/10 rounded-lg px-2 h-9 text-xs font-bold text-zinc-100 outline-none"
                            >
                              {(nodeMode === 'video' ? VIDEO_MODELS : IMAGE_MODELS).map(item => (
                                <option key={item.id} value={item.id}>{item.label}</option>
                              ))}
                            </select>
                            <button
                              onClick={() => handleGenerateNode(node)}
                              disabled={isGenerating || !isAdmin}
                              className="w-10 h-9 rounded-lg bg-zinc-100 text-black flex items-center justify-center disabled:opacity-45 disabled:cursor-not-allowed"
                              title={lang === 'EN' ? 'Generate' : '生成'}
                            >
                              {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                            </button>
                          </div>
                        )}
                        {(node.kind === 'image' || node.kind === 'video') && (
                          <div className="mt-2 flex items-center gap-2">
                            <select
                              value={node.aspectRatio || 'AUTO'}
                              onChange={event => updateNode(node.id, { aspectRatio: event.target.value })}
                              className="min-w-0 flex-1 bg-black/30 border border-white/10 rounded-lg px-2 h-8 text-xs font-bold text-zinc-100 outline-none"
                            >
                              {ASPECT_OPTIONS.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                            <select
                              value={node.resolution || 'AUTO'}
                              onChange={event => updateNode(node.id, { resolution: event.target.value })}
                              className="min-w-0 flex-1 bg-black/30 border border-white/10 rounded-lg px-2 h-8 text-xs font-bold text-zinc-100 outline-none"
                            >
                              {RESOLUTION_OPTIONS.map(item => <option key={item} value={item}>{item}</option>)}
                            </select>
                            {nodeMode === 'storyboard-grid' && (
                              <select
                                value={node.gridCount || defaultGridCount}
                                onChange={event => updateNode(node.id, { gridCount: Number(event.target.value) })}
                                className="min-w-0 flex-1 bg-black/30 border border-white/10 rounded-lg px-2 h-8 text-xs font-bold text-zinc-100 outline-none"
                              >
                                {GRID_OPTIONS.map(item => <option key={item} value={item}>{getGridLabel(item)}</option>)}
                              </select>
                            )}
                            {nodeMode === 'video' && (
                              <input
                                value={node.videoSeconds || '5'}
                                onChange={event => updateNode(node.id, { videoSeconds: event.target.value })}
                                className="w-16 bg-black/30 border border-white/10 rounded-lg px-2 h-8 text-xs font-bold text-zinc-100 outline-none"
                                placeholder="5s"
                              />
                            )}
                          </div>
                        )}
                        <div className="mt-2 text-[10px] text-zinc-500 font-bold">
                          {lang === 'EN'
                            ? `${referenceCount} connected media refs`
                            : `${referenceCount} 个已连接媒体参考`}
                        </div>
                        {active && error && <div className="mt-2 text-xs text-red-300">{error}</div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {nodeAddMenu && (() => {
            const sourceNode = nodes.find(node => node.id === nodeAddMenu.nodeId);
            if (!sourceNode) return null;
            return (
              <div
                className="absolute z-40 w-[360px] rounded-[24px] border border-white/14 bg-[#1b1b1c]/98 shadow-2xl p-4"
                onPointerDown={(event) => event.stopPropagation()}
                style={{
                  left: 0,
                  top: 0,
                  transform: `translate3d(${sourceNode.x + sourceNode.width + 34}px, ${sourceNode.y + Math.max(0, sourceNode.height * 0.22)}px, 0)`
                }}
              >
                <div className="px-1 pb-3 text-lg font-black text-zinc-400">
                  {lang === 'EN' ? 'Generate from this node' : '引用该节点生成'}
                </div>
                <div className="space-y-2">
                  {LINKED_NODE_DEFS.map(def => {
                    const Icon = def.icon;
                    return (
                      <button
                        key={`${def.kind}-${def.cn}`}
                        onClick={() => addLinkedNode(sourceNode, def)}
                        className="w-full h-[64px] rounded-[18px] flex items-center gap-4 px-3 text-left text-zinc-100 hover:bg-white/10 transition-colors"
                      >
                        <span className="w-12 h-12 rounded-2xl bg-white/8 flex items-center justify-center text-zinc-200">
                          <Icon size={22} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xl font-black truncate">{lang === 'EN' ? def.en : def.cn}</span>
                          <span className="block text-sm font-bold text-zinc-500 truncate">{lang === 'EN' ? def.descEn : def.descCn}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      <div className="absolute left-8 top-[31%] flex items-start gap-2">
        <div className="w-16 rounded-[32px] bg-[#222225]/95 border border-white/10 p-2 flex flex-col items-center gap-4 shadow-2xl">
          <button
            onClick={() => setIsAddPanelOpen(prev => !prev)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isAddPanelOpen ? 'bg-white text-black' : 'text-zinc-300 hover:bg-white/10 hover:text-white'
            }`}
            title={lang === 'EN' ? 'Add node' : '添加节点'}
          >
            <Plus size={22} />
          </button>
          {[Grid3X3, MessageCircle, Clock3, ImageIcon].map((Icon, index) => (
            <button key={index} className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 hover:bg-white/10 hover:text-white">
              <Icon size={20} />
            </button>
          ))}
          <div className="w-10 h-10 rounded-full bg-[#343437] flex items-center justify-center text-zinc-300 font-serif">迷</div>
        </div>
        {isAddPanelOpen && (
          <div className="w-[280px] rounded-xl border border-white/15 bg-[#202025]/95 shadow-2xl p-3">
            <div className="text-zinc-500 text-sm font-bold px-2 mb-2">{lang === 'EN' ? 'Add Node' : '添加节点'}</div>
            <div className="space-y-2">
              {NODE_DEFS.map(def => {
                const Icon = def.icon;
                return (
                  <button
                    key={def.kind}
                    onClick={() => addNodeNearSelected(def.kind)}
                    className="w-full h-[60px] rounded-2xl flex items-center gap-3 px-4 text-left hover:bg-white/10 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-zinc-200">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-zinc-100 font-bold">{lang === 'EN' ? def.en : def.cn}</span>
                      <span className="block text-zinc-500 text-sm">{lang === 'EN' ? def.descEn : def.descCn}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-12 rounded-2xl flex items-center gap-3 px-4 text-zinc-100 hover:bg-white/10 transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Upload size={20} />
                  </span>
                  <span className="font-bold">{lang === 'EN' ? 'Upload' : '上传'}</span>
                </button>
              <input ref={fileInputRef} type="file" accept="image/*,video/*" className="hidden" onChange={handleUpload} />
            </div>
          </div>
        )}
      </div>

      <div className="absolute left-8 bottom-4 flex items-center gap-3">
        <div className="h-10 rounded-full bg-[#222225]/95 border border-white/10 px-3 flex items-center gap-3">
          <button onClick={() => commitViewport({ x: 180, y: 90, zoom: 1 })} className="text-zinc-300 hover:text-white" title={lang === 'EN' ? 'Reset view' : '重置视图'}>
            <Map size={17} />
          </button>
          <button onClick={() => zoomBy(-0.1)} className="text-zinc-300 hover:text-white" title={lang === 'EN' ? 'Zoom out' : '缩小'}>
            <ZoomOut size={17} />
          </button>
          <div className="w-72 h-1 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full rounded-full bg-white" style={{ width: `${Math.round(((viewport.zoom - 0.25) / 2.15) * 100)}%` }} />
          </div>
          <button onClick={() => zoomBy(0.1)} className="text-zinc-300 hover:text-white" title={lang === 'EN' ? 'Zoom in' : '放大'}>
            <ZoomIn size={17} />
          </button>
          <span className="text-zinc-400 text-xs font-bold w-11">{Math.round(viewport.zoom * 100)}%</span>
        </div>
      </div>

      {isRightPanelOpen && (
        <aside className="absolute right-5 top-5 bottom-5 w-[420px] rounded-[22px] bg-[#181819]/98 border border-white/10 shadow-2xl flex flex-col overflow-hidden">
          <div className="h-12 px-4 flex items-center justify-between border-b border-white/10 text-zinc-300">
            <div className="font-bold">{lang === 'EN' ? 'Canvas Assistant' : '画布助手'}</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRightPanelOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"
                title={lang === 'EN' ? 'Close assistant' : '关闭画布助手'}
              >
                <X size={17} />
              </button>
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-center">
            <div className="text-zinc-400 text-xl font-bold mb-3">Hi 迷雾学派!</div>
            <div className="text-white text-3xl font-black leading-tight">{lang === 'EN' ? 'What shall we create today?' : '今天一起创作点什么？'}</div>
            <div className="grid grid-cols-3 gap-2 mt-8">
              {[
                lang === 'EN' ? 'Closer look' : '看看近一点',
                lang === 'EN' ? 'Open strong' : '先有个开头',
                lang === 'EN' ? 'What is this?' : '这个人图什么'
              ].map(item => (
                <button key={item} onClick={() => applyAssistantSuggestion(item)} className="h-16 rounded-xl bg-white/5 hover:bg-white/10 text-left p-3 text-sm font-bold text-zinc-200">
                  {item}
                </button>
              ))}
            </div>
            {selectedNode && (
              <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-zinc-500 mb-1">{lang === 'EN' ? 'Selected Node' : '已选节点'}</div>
                <div className="text-zinc-100 font-bold truncate">{selectedNode.title}</div>
                <div className="text-xs text-zinc-500 mt-1">{selectedNode.kind.toUpperCase()} · {Math.round(selectedNode.x)}, {Math.round(selectedNode.y)}</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-black/20 p-2">
                    <div className="text-[10px] text-zinc-500">{lang === 'EN' ? 'Upstream' : '上游节点'}</div>
                    <div className="text-sm font-bold text-zinc-200">{incomingNodes.length}</div>
                  </div>
                  <div className="rounded-lg bg-black/20 p-2">
                    <div className="text-[10px] text-zinc-500">{lang === 'EN' ? 'Media refs' : '媒体参考'}</div>
                    <div className="text-sm font-bold text-zinc-200">{selectedReferenceUrls.length}</div>
                  </div>
                </div>
              </div>
            )}
            {crops.length > 0 && (
              <div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-zinc-500">{lang === 'EN' ? 'Last Split' : '最近切割'}</div>
                    <div className="text-zinc-100 font-bold">{crops.length} frames</div>
                  </div>
                  <button
                    onClick={() => crops.forEach(item => downloadDataUrl(item.url, `mist-grid-${item.label}.png`))}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-zinc-100 hover:bg-white/15"
                    title={lang === 'EN' ? 'Download all crops' : '下载全部裁切图'}
                  >
                    <Download size={17} />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-white/10">
            <input
              value={projectId}
              onChange={event => setProjectId(event.target.value)}
              className="w-full h-10 rounded-xl bg-[#222225] border border-white/10 outline-none px-3 text-sm text-zinc-100 placeholder:text-zinc-600"
              placeholder="Lovart Project ID"
            />
          </div>
        </aside>
      )}

      {!isRightPanelOpen && (
        <button
          onClick={() => setIsRightPanelOpen(true)}
          className="absolute right-6 bottom-6 w-14 h-14 rounded-full bg-[#222225]/95 border border-white/10 text-zinc-100 flex items-center justify-center shadow-2xl hover:bg-white/10"
          title={lang === 'EN' ? 'Open canvas assistant' : '打开画布助手'}
        >
          <MessageCircle size={22} />
        </button>
      )}

      {pendingConnectionFrom && (
        <div className="absolute left-1/2 top-[96px] -translate-x-1/2 rounded-full bg-[#222225]/95 border border-white/10 text-zinc-200 px-4 py-2 shadow-2xl text-xs font-bold">
          {lang === 'EN' ? 'Choose a left port to finish the connection.' : '点击目标模块的左节点，完成连接。'}
        </div>
      )}

      {isGenerating && (
        <div className="absolute inset-0 bg-black/20 pointer-events-none flex items-center justify-center">
          <div className="rounded-full bg-black/80 border border-white/10 px-5 py-3 text-zinc-100 flex items-center gap-3 shadow-2xl">
            <Loader2 size={18} className="animate-spin text-orange-300" />
            {lang === 'EN' ? 'Lovart is generating...' : 'Lovart 正在生成...'}
          </div>
        </div>
      )}

    </div>
  );
};

export default MistCanvasEngine;
