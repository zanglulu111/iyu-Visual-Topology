
import { VisualBibleAnalysisHints } from './services/visualBibleGenerator';

export interface APISettings {
  llm: {
    provider: string; // 'google' | 'openai' | 'custom'
    model: string;
    apiKey: string;
    baseUrl?: string;
  };
  image: {
    provider: string;
    model: string;
    apiKey: string;
    baseUrl?: string;
    protocol?: string; // 'gemini-native' | 'openai'
  };
}

export enum DriverType {
  COMMERCIAL = 'COMMERCIAL',
  NARRATIVE = 'NARRATIVE',
  EXPERIMENTAL = 'EXPERIMENTAL',
  AESTHETIC = 'AESTHETIC',
  TRAILER = 'TRAILER'
}

export type SubjectType = 'HUMAN' | 'CREATURE';
export type AestheticMode = 'REALISM' | 'STYLIZED';

export type AestheticLogicMode = 'DEFAULT' | 'IDENTITY' | 'ACTION' | 'ATMOSPHERE' | 'LOOK' | 'TECH';

export interface LibraryItemDef {
  id: string;
  name: string;
  def: string;
  core?: string;
  group?: string;
  flaw?: string;
  defEn?: string;
  coreEn?: string;
  topology?: string;
  skeletons?: string[];
}

export interface AestheticPreset extends LibraryItemDef {
  nameEn: string;
  colors: string[];
  params: Record<string, string[]>;
}

export interface LogicTemplateDef {
  id: AestheticLogicMode;
  name: string;
  nameEn: string;
  desc: string;
  descEn?: string;
  iconName: string;
  primaryBlocks: string[];
}

export interface User {
  id: string;
  username: string;
  level: string;
  isPro: boolean;
  membershipTier?: string;
  avatarColor: string;
  avatarUrl?: string;
  tokens: number;
}

export interface CollectionItem {
  id: string;
  saveDate: string;
  blueprint: CreativeBlueprint;
}

export interface DriverDef {
  id: DriverType;
  name: string;
  englishId: string;
  description: string;
  descriptionEn?: string;
  coreDriver: string;
  coreDriverEn: string;
  kpi: string;
  forbidden: string;
  iconName: string;
  gradient: string;
}

export interface NarrativeBlockDef {
  id: string;
  name: string;
  enName: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
}

export type NarrativeFieldState = Record<string, string[]>;

export interface WorldLawConfig {
  physics: 'STRICT' | 'UNBOUND';
  context: 'PURE' | 'FUSION';
}

export interface CreativeBrief {
  title: string;
  logline: string;
  visualStyle: string;
  structure: string;
  shotList: Array<{ shot: string; description: string }>;
}

export interface CreativeTreatment {
  id: string;
  type: 'CLASSIC' | 'STYLIZED' | 'SUBVERSIVE' |
  'REAL' | 'IMAGINARY' | 'SYMBOLIC' |
  'PHENOMENOLOGICAL' | 'STRUCTURALIST' | 'THE SPECTACLE' |
  'ONTOLOGY' | 'ATMOSPHERE' | 'SEMIOTIC' |
  'THE_TEASE' | 'THE_PULSE' | 'THE_GLITCH' |
  'POST_STRUCTURALIST' | 'THE_REAL' |
  'EXISTENTIAL' | 'NIHILISTIC' | 'ROMANTIC' |
  'ABSTRACT' | 'NARRATIVE FLOW' | 'PERFORMANCE';
  title: string;
  tagline: string;
  visualKey?: string;
  pitch: string;
  pitchEn?: string;
  pitchCn?: string;
  universalPrompt?: string;
  visualAnchor: string;
  structure: string;
}

export type BlueprintLanguage = 'CN' | 'EN';

export interface BlueprintNarrative {
  title: string;
  logline: string;
  synopsis: string;
  psychoanalysis?: string;
}

export interface AssetImage {
  id: string;
  url: string;
  timestamp: number;
}

export interface AssetView {
  prompt: string | null;
  promptEn?: string | null;
  promptCn?: string | null;
  images: AssetImage[];
  selectedImageId: string | null;
}

export interface BlueprintContext {
  world: string;
  worldCn?: string;
  worldEn?: string;
  tone: string;
  toneCn?: string;
  toneEn?: string;
  imageUrl?: string;
  colorPalette: string[];
  moodboard: AssetView;
}

export interface AssetBase {
  id: string;
  name: string;
  nameEn?: string;
  desc: string;
  descEn?: string;
  imageUrl?: string;
}

export interface CharacterAsset extends AssetBase {
  tag: string;
  view: AssetView;
}

export interface PropAsset extends AssetBase {
  type: string;
  view: AssetView;
}

export interface SceneAsset extends AssetBase {
  tag: string;
  view: AssetView;
}

export interface CommercialAVRow {
  id: string;
  time: string;
  visual: string;
  audio: string;
  shotType?: string;
}

export interface CommercialStrategy {
  core_desire: string;
  target_audience: string;
  pain_point: string;
  product_role: string;
  endorsement: string;
  ritual: string;
  threat: string;
  brand_promise: string;
}

export interface CommercialData {
  slogan: string;
  visualFlow: string;
  copywriting: string;
  strategy: CommercialStrategy;
  avScript: CommercialAVRow[];
  visualNotes: string;
}

export interface ExperimentalData {
  concept: string;
  method: string;
  sensation: string;
  visualManifesto: string;
  installationPlan: string;
}

export interface TrailerBeat {
  time: string;
  beatType: 'HOOK' | 'RHYTHM' | 'BUILD' | 'DROP' | 'SILENCE';
  audio: string;
  visual: string;
}

export interface TrailerData {
  hook: string;
  copywriting: string[];
  musicCue: string;
  beatSheet: TrailerBeat[];
}

export interface AestheticParam {
  label: string;
  value: string;
}

export interface AestheticData {
  visualConcept: string;
  techSpecs: AestheticParam[];
  colorLogic: string;
  promptEngineering: string;
  logicMode?: AestheticLogicMode;
}

export interface SutureStyleItem {
  id: string;
  name: string;
  group?: string;
  instruction: string;
  core?: string;
}

export interface GlobalVisualTone {
  styleNameCN?: string;
  styleNameEN?: string;

  // 1. Color Palette (Hex Codes + Temp/Tint)
  palette: string[];

  // 2. Lighting (Dynamic Range, Quality, Atmosphere)
  lighting: string;
  lightingEn?: string;

  // 3. Texture (Grain, Imperfections, Surface)
  texture: string;
  textureEn?: string;

  // 4. Style/Medium (Stock, Format, Art Movement)
  style: string;
  styleEn?: string;

  // 5. Camera (Lens, Sharpness/Softness)
  camera: string;
  cameraEn?: string;
}

export interface StaticShot {
  id: string;
  reference: string;
  referenceEn?: string;
  shotSize: string;
  shotSizeEn?: string;
  composition: string;
  compositionEn?: string;
  angle: string;
  angleEn?: string;
  focalLength: string;
  focalLengthEn?: string;
  shutter: string;
  shutterEn?: string;
  perspective: string;
  perspectiveEn?: string;
  depthOfField: string;
  depthOfFieldEn?: string;
  lightingMode: string;
  lightingModeEn?: string;
  lightMood: string;
  lightMoodEn?: string;
  lensFX: string;
  lensFXEn?: string;
  visualDesc: string;
  visualDescEn?: string;
  environment?: string; // NEW: Environment description
  environmentEn?: string; // NEW: Environment description EN
  lighting?: string; // NEW: Lighting description
  lightingEn?: string; // NEW: Lighting description EN
  artStyle?: string; // NEW: Art Style description
  artStyleEn?: string; // NEW: Art Style description EN
  sound: string;
  soundEn?: string;
  dialogue: string;
  dialogueEn?: string;
  imageUrl?: string;
}

export interface DynamicShot {
  id: string;
  duration: string;
  visualAction: string; // Dynamic action description
  camera: string;       // Camera movement
  atmosphere: string;   // Environmental details
  sound?: string;       // Audio FX / Music (CN)
  soundEn?: string;     // Audio FX / Music (EN)
  dialogue?: string;    // Natural Language Dialogue (CN)
  dialogueEn?: string;  // Natural Language Dialogue (EN)

  // Legacy fields for compatibility (can be optional or removed later)
  reference?: string;
  referenceEn?: string;
  cameraMove?: string;
  cameraMoveEn?: string;
  subjectMove?: string;
  subjectMoveEn?: string;
  tempo?: string;
  tempoEn?: string;
  videoPrompt?: string;
  videoPromptCn?: string;
}

export interface FinalAssetItem {
  id: string;
  name: string;
  nameEn?: string;
  type: 'CHARACTER' | 'PROP' | 'SCENE';
  anchors: string;
  description: string;
  imageUrl?: string;
  analysis?: { anchors: string; anchorsEn?: string; description: string; descriptionEn?: string; designPrompt?: string; designPromptEn?: string; conceptPrompt?: string; conceptPromptEn?: string; };
}

export interface FinalAssetsData {
  characters: FinalAssetItem[];
  props: FinalAssetItem[];
  scenes: FinalAssetItem[];
}

export interface SutureResponse {
  literaryScript: string;
  finalAssets?: FinalAssetsData;
  globalTone: GlobalVisualTone;
  staticStoryboard: StaticShot[];
  dynamicStoryboard: DynamicShot[];
  analysis?: string;
  protocolOverride?: string; // NEW: User-edited protocol header
}

export interface ScreenplaySection {
  id: string;
  title: string;
  content: string;
  breakdownInfo?: string;
  sutureDataMap?: Record<string, SutureResponse>;
  sutureData?: SutureResponse;
  sourceIndices?: number[];
  isGlobalSynced?: boolean;
  mountedPresetId?: string;
}

export interface MetonymyAssetInput {
  id: string;
  name: string;
  nameEn?: string;
  type: 'CHARACTER' | 'PROP' | 'SCENE';
  imageUrl?: string;
  analysis?: {
    description: string;
    descriptionEn?: string;
    anchors: string;
    anchorsEn?: string;
    designPrompt?: string;
    designPromptEn?: string;
    conceptPrompt?: string;
    conceptPromptEn?: string;
  };
  designConfig?: VisualBibleAnalysisHints;
}

export interface MetonymyStylePreset {
  id: string;
  name: string;
  nameEn?: string;
  toneImage?: string;
  toneAnalysis?: GlobalVisualTone;
  assets: {
    characters: MetonymyAssetInput[];
    scenes: MetonymyAssetInput[];
    props: MetonymyAssetInput[];
  }
}

export interface MetonymyData {
  screenplay: ScreenplaySection[] | string;
  staticStoryboard: ScreenplaySection[] | string;
  dynamicScript: ScreenplaySection[] | string;
  stylePresets?: MetonymyStylePreset[];
  activePresetId?: string;
}

export interface PoeticData {
  corePhilosophy: string;
  monologue: string;
  voiceStyle: string;
  imagery: string;
  rhythm: string;
}

export interface VersionHistoryItem {
  id: string;
  timestamp: number;
  content: string;
  note?: string;
}

export interface CreativeBlueprint {
  treatmentId: string;
  driverType: DriverType;
  styleName?: string;
  childBlueprint?: CreativeBlueprint;
  narrative: BlueprintNarrative;
  context: BlueprintContext;
  commercialData?: CommercialData;
  experimentalData?: ExperimentalData;
  trailerData?: TrailerData;
  aestheticData?: AestheticData;
  metonymyData?: MetonymyData;
  poeticData?: PoeticData;
  assets: {
    characters: CharacterAsset[];
    locations: SceneAsset[];
    props: PropAsset[];
  };
  versionHistory?: VersionHistoryItem[];
}

export interface LayerConfig {
  layerName: string;
  sectionPrefix: string;
}

export interface TerritoryItem {
  code: string;
  name: string;
  tags?: string;
}

export interface TerritoryGroup {
  id: string;
  name: string;
  desc: string;
  items: TerritoryItem[];
}

export interface LibraryCategoryDef {
  id: string;
  name: string;
  desc: string;
  items: LibraryItemDef[];
  isTimeline?: boolean;
  isTerritory?: boolean;
  territoryGroups?: TerritoryGroup[];
}

export type HistoryType = 'NARRATIVE' | 'METONYMY';

export interface HistoryItem {
  id: number;
  date: string;
  type: HistoryType;
  driverId: DriverType;
  driverName: string;
  fieldState: NarrativeFieldState;
  worldLaw?: WorldLawConfig;
  visionInput?: string;
  visionAnalysis?: string;
  visionImage?: string | null;
  subjectType?: SubjectType;
  aestheticMode?: AestheticMode;
  colorPalette?: string[];
  blueprint: CreativeBlueprint | null;
  treatments: CreativeTreatment[];
  savedBlueprints?: Record<string, CreativeBlueprint>;
}

export interface StoryVolume {
  id: string;
  name: string;
  duration_label: string;
  description: string;
  structure_density: string;
  lacanian_focus: string;
  word_count: string;
}

export interface StyleItem {
  id: string;
  name: string;
  description?: string;
  dna: string;
  example?: string;
}

export interface StyleCategory {
  id: string;
  name: string;
  items: StyleItem[];
}

export interface StyleConfig {
  styleId: string | null;
  perspectiveId: string | null;
  sensoryId: string | null;
}

export type DensityLevel = 'NONE' | 'LOW' | 'MID' | 'HIGH' | 'AUTO';

export interface SutureConfig {
  dialogueDensity: DensityLevel;
  dialogueStyle: string;
  voiceoverDensity: DensityLevel;
  voiceoverStyle: string;
  monologueDensity: DensityLevel;
  monologueStyle: string;
  visualStyle: string;
  actionPacing: string;
  shotDensity: string;
  subjectFocus: DensityLevel;
  emptyShot: DensityLevel;
  montageId: string;
  targetPresetId?: string;
  directorNote?: string;
}