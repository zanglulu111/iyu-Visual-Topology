
import { VisualBibleAnalysisHints } from './services/visualBibleGenerator';

type LocalizedModeText = { bright: string; dark: string; tension: string };

export interface APISettings {
  llm: {
    provider: string; // 'google' | 'openai' | 'custom'
    model: string;
    apiKey: string;
    claudeApiKey?: string;
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
  CONCEPT_DESIGN = 'CONCEPT_DESIGN',
  TRAILER = 'TRAILER',
  SUTURE = 'SUTURE'
}

export type NarrativePromptVersion = 'v3' | 'v4';

export type ViewMode = 'ENGINE' | 'DIVERGENCE' | 'BIBLE' | 'METONYMY' | 'CANVAS' | 'TOPOLOGY' | 'RSI' | 'ARCHIVE' | 'VIDEO' | 'RORSCHACH' | 'ANALYSIS' | 'DICTIONARY' | 'SKILLS';

export type SubjectType = 'HUMAN' | 'CREATURE';
export type AestheticMode = 'REALISM' | 'STYLIZED';
export type ConceptDesignSourceMode = 'PRESET' | 'IDEA' | 'ARTICLE' | 'IMAGE';
export type ConceptDesignPhysicalMediumCategory = 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'TANGIBLE' | 'ALL';
export type ConceptDesignBodyFormMode = 'HUMANOID_DISGUISE' | 'VISIBLE_HYBRID' | 'BEAST_BODY' | 'XENO_BODY';
export type ConceptDesignWorkspacePage = 'ENGINE' | 'COMPILE' | 'RESULT' | 'FINAL';
export type ConceptDesignHumanRegister = 'REALISTIC' | 'HISTORICAL' | 'PROFESSIONAL' | 'FASHION' | 'COMBAT' | 'RITUAL' | 'SOCIAL' | 'SCIFI' | 'FANTASY' | 'WASTELAND';

export interface ConceptDesignRuntimeState {
  sourceMode: ConceptDesignSourceMode;
  sourceLabel: string;
  sourceLabelEn: string;
  generationInstruction: string;
  finalPrompt: string;
  variables: {
    characterSeed: string;
    ageBodyType: string;
    timeSpaceScene: string;
    actionMoment: string;
    visualMedium: string;
    style: string;
    compositionScene: string;
    lightingAtmosphere: string;
    otherDetails: string;
  };
  sourceInputs: {
    ideaText: string;
    articleText: string;
    targetCharacter: string;
    imageDataUrl: string;
    imageName: string;
    imageGuidance: string;
  };
  promptLang: 'CN' | 'EN';
  originality: boolean;
  format: string;
  mediumCategory: ConceptDesignPhysicalMediumCategory;
  bodyFormMode?: ConceptDesignBodyFormMode;
  bodyFormLabel?: string;
  bodyFormLabelEn?: string;
  humanRegister?: ConceptDesignHumanRegister;
  humanRegisterLabel?: string;
  humanRegisterLabelEn?: string;
  randomMode?: 'PURE' | 'HYBRID' | 'TRANSGRESS' | 'LAW_L1' | 'LAW_L2' | 'LAW_L3' | 'LAW_L4' | 'LAW_L5';
  randomModeLabel?: string;
  randomModeLabelEn?: string;
}

export type M7BResidueIntensity = 'off' | 'implicit' | 'light' | 'strong' | 'epilogue';
export type MAxisMixerLevel = 'muted' | 'balanced' | 'amplified';
export type MAxisMixerSlot =
  | 'engine_m0'
  | 'engine_m1'
  | 'engine_m2'
  | 'engine_m3'
  | 'engine_m4'
  | 'engine_m5'
  | 'engine_m6'
  | 'engine_m7a';
export type MAxisMixerState = Partial<Record<MAxisMixerSlot, MAxisMixerLevel>>;

export type AestheticLogicMode = 'DEFAULT' | 'IDENTITY' | 'ACTION' | 'ATMOSPHERE' | 'LOOK' | 'TECH';

export type FramingProfileGoal =
  | 'subject'
  | 'portrait'
  | 'space'
  | 'action'
  | 'fashion'
  | 'documentary'
  | 'object'
  | 'abstract';

export type FramingProfileDistance =
  | 'none'
  | 'macro'
  | 'close'
  | 'medium'
  | 'full'
  | 'wide'
  | 'extreme_wide';

export type FramingProfileSubjectReadability = 'high' | 'medium' | 'low';
export type FramingProfileDistortion = 'none' | 'mild' | 'strong' | 'extreme';
export type FramingProfileMotion = 'still' | 'natural' | 'fast' | 'blurred' | 'experimental';
export type FramingProfileOpticalRisk = 'none' | 'low' | 'medium' | 'high';

export interface FramingProfile {
  goals: readonly FramingProfileGoal[];
  distance: FramingProfileDistance;
  subjectReadability: FramingProfileSubjectReadability;
  distortion: FramingProfileDistortion;
  motion: FramingProfileMotion;
  opticalRisk: FramingProfileOpticalRisk;
  multiSubject: boolean;
}

export type CreatureTaxonomyTag =
  | 'mammal'
  | 'avian'
  | 'reptilian'
  | 'aquatic'
  | 'insectoid'
  | 'soft_body'
  | 'draconic'
  | 'demonic'
  | 'divine_spirit'
  | 'undead'
  | 'eldritch'
  | 'plant_fungal'
  | 'mineral_elemental'
  | 'energy_void'
  | 'machine'
  | 'synthetic'
  | 'swarm_parasitic'
  | 'chimera';

export type CreatureTaxonomyFitLevel = 'none' | 'usable' | 'fusion' | 'weak' | 'exclude';

export interface LibraryItemDef {
  id: string;
  name: string;
  nameEn?: string;
  def?: string;
  defEn?: string;
  core?: string;
  coreEn?: string;
  directive?: string | LocalizedModeText;
  directiveEn?: string | LocalizedModeText;
  essence?: string;
  essenceEn?: string;
  reference?: string;
  referenceEn?: string;
  aliases?: readonly string[];
  aliasesEn?: readonly string[];
  reality?: string;
  realityEn?: string;
  group?: string;
  groupEn?: string;
  altGroup?: string;
  altGroupEn?: string;
  flaw?: string;
  flawEn?: string;
  topology?: string;
  topologyEn?: string;
  skeletons?: readonly string[];
  tags?: readonly string[];
  logic?: string;
  logicEn?: string;
  ontologyLevel?: 1 | 2 | 3 | 4 | 5;
  eras?: readonly string[];
  eraStrictness?: 'hard' | 'soft' | 'none';
  anachronismRisk?: 'low' | 'medium' | 'high';
  eraTranslation?: string;
  eraTranslationEn?: string;
  mediaEra?: readonly string[];
  styleEra?: readonly string[];
  typeTags?: readonly string[];
  eraTags?: readonly string[];
  sceneClassTags?: readonly string[];
  sceneTags?: readonly string[];
  commonLevel?: 0 | 1 | 2;
  genreTags?: readonly string[];
  compatibleTypeTags?: readonly string[];
  excludeGenreTags?: readonly string[];
  genreStrictness?: 'hard' | 'soft' | 'none';
  genreRole?: readonly string[];
  genreTranslation?: string;
  genreTranslationEn?: string;
  cultureTags?: readonly string[];
  cultureStrictness?: 'hard' | 'soft' | 'none';
  cultureRole?: readonly string[];
  cultureTranslation?: string;
  cultureTranslationEn?: string;
  spaceTags?: readonly string[];
  spaceScale?: string;
  publicFilterTags?: readonly string[];
  nativeTags?: readonly string[];
  evidenceTags?: readonly string[];
  compatibleGenres?: readonly string[];
  compatibleEras?: readonly string[];
  compatibleCultures?: readonly string[];
  compatibleSpaces?: readonly string[];
  conflictTags?: readonly string[];
  riskTags?: readonly string[];
  affects?: readonly string[];
  risk?: 'clean' | 'medium' | 'high';
  controls?: readonly string[];
  forbids?: readonly string[];
  absorptionRule?: string;
  absorptionRuleEn?: string;
  framingProfile?: FramingProfile;
  styleRoute?: string;
  protocolCategory?: string;
  protocolCategoryEn?: string;
  protocolKind?: 'structure' | 'material' | 'symbol' | 'pose' | 'function' | 'prop' | 'costume' | 'wear' | 'face' | 'body' | 'color' | 'composition' | 'cultural_image' | 'ontology';
  personaCategory?: string;
  personaCategoryEn?: string;
  personaSubgroup?: string;
  personaSubgroupEn?: string;
  personaKind?: string;
  personaKindEn?: string;
  personaStrength?: 'light' | 'medium' | 'strong';
  isCompoundPersona?: boolean;
  creatureFamily?: string;
  creatureFamilyAllow?: readonly string[];
  creatureFamilyFusion?: readonly string[];
  creatureFamilyBlock?: readonly string[];
  creatureTaxonomyFit?: {
    unlisted?: CreatureTaxonomyFitLevel;
    strong?: readonly CreatureTaxonomyTag[];
    usable?: readonly CreatureTaxonomyTag[];
    fusion?: readonly CreatureTaxonomyTag[];
    weak?: readonly CreatureTaxonomyTag[];
    exclude?: readonly CreatureTaxonomyTag[];
  };
  creaturePartRole?: 'primary_head' | 'cranial_structure' | 'eye' | 'mouth' | 'horn' | 'head_tech' | 'eldritch_head' | 'elemental_head' | 'torso' | 'limb' | 'lower_body' | 'wing' | 'tail' | 'internal_mutation' | 'body_tech';
  creaturePartMode?: 'replace' | 'attach' | 'surface' | 'effect';
  realityTags?: readonly string[];
  eraMode?: 'specific' | 'universal';
  categoryFit?: {
    unlisted?: 'none' | 'usable' | 'fusion' | 'weak' | 'exclude';
    strong?: readonly string[];
    usable?: readonly string[];
    fusion?: readonly string[];
    weak?: readonly string[];
    exclude?: readonly string[];
  };
  styleTags?: readonly string[];
  timeTags?: readonly string[];
  adminOnly?: boolean;
  adultOnly?: boolean;
  patch?: {
    mechanics?: string;
    mechanicsEn?: string;
    aesthetic?: string;
    aestheticEn?: string;
    runtime?: string;
    runtimeEn?: string;
  };
}

export interface AestheticPreset extends LibraryItemDef {
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

export type DesireArchiveStage = 'DIVERGENCE_SET' | 'CREATIVE_BIBLE' | 'METONYMY_SCRIPT';

export type DesireArchiveStatus = 'draft' | 'candidate' | 'selected' | 'promoted' | 'archived';

export type DesireProjectKind = 'DIVERGENCE_BATCH' | 'STORY_PROJECT' | 'EDICT_PROJECT';

export type DesireProjectSourceType = 'ENGINE_GENERATED' | 'CUSTOM_STORY';

export type ArchiveSource = 'AI_SNAPSHOT' | 'MANUAL_SAVE';

export type ArchiveReason = 'DIVERGENCE_GENERATED' | 'STORY_GENERATED' | 'METONYMY_GENERATED' | 'USER_SAVED' | 'PROJECT_SAVED';

export interface DesireArchiveVersion {
  id: string;
  stage: DesireArchiveStage;
  archiveSource?: ArchiveSource;
  archiveReason?: ArchiveReason;
  title: string;
  createdAt: string;
  updatedAt: string;
  status: DesireArchiveStatus;
  sourceHistoryId?: number | string;
  sourceTreatmentId?: string;
  versionLabel?: string;
  summary?: string;
  content?: string;
  blueprint?: CreativeBlueprint | null;
  treatments?: CreativeTreatment[];
  assets?: FinalAssetsData;
}

export interface DesireProject {
  id: string;
  projectId?: string;
  archiveKind?: DesireProjectKind;
  archiveSource?: ArchiveSource;
  archiveReason?: ArchiveReason;
  sourceType?: DesireProjectSourceType;
  title: string;
  engineType: DriverType;
  engineName: string;
  createdAt: string;
  updatedAt: string;
  fieldState: NarrativeFieldState;
  worldLaw?: WorldLawConfig;
  visionInput?: string;
  visionAnalysis?: string;
  visionImage?: string | null;
  visionImageNote?: string;
  visionImageMode?: VisionImageUseMode;
  visionImplantEnabled?: boolean;
  subjectType?: SubjectType;
  aestheticMode?: AestheticMode;
  colorPalette?: string[];
  faceState?: FaceState;
  conceptRuntimeState?: ConceptDesignRuntimeState | null;
  sourceHistoryIds: Array<number | string>;
  sourceDivergenceId?: string;
  sourceCandidateId?: string;
  originalStory?: {
    title: string;
    content: string;
    source: 'engine' | 'user';
  };
  candidateCount?: number;
  divergence?: DesireArchiveVersion;
  bibleDrafts: DesireArchiveVersion[];
  metonymyScripts: DesireArchiveVersion[];
  subjectDossierIds: string[];
  notes?: string;
}

export type SubjectDossierStatus = 'draft' | 'published' | 'archived';

export type SubjectDossierCategory = 'NEUROSIS' | 'PSYCHOSIS' | 'PERVERSION' | 'AUTISM' | 'UNCLASSIFIED';

export interface SubjectDossier {
  id: string;
  sourceProjectId?: string;
  sourceArtifactId?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  status: SubjectDossierStatus;
  category: SubjectDossierCategory;
  title: string;
  titleEn?: string;
  summary: string;
  summaryEn?: string;
  imageUrl?: string;
  story: {
    title: string;
    content: string;
    sourceArtifactId?: string;
  };
  psychoanalysis: {
    title: string;
    content: string;
    sourceArtifactId?: string;
  };
  assets: FinalAssetsData;
  screenplay: {
    title: string;
    content: string;
    sections?: ScreenplaySection[];
    sourceArtifactId?: string;
  };
  sourceBlueprint?: CreativeBlueprint | null;
  adminNotes?: string;
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

export type DirectiveFace = 'bright' | 'dark' | 'tension';
export type FaceState = Record<string, DirectiveFace>;
export type PromptFocusState = Record<string, boolean>;
export type RealityAnchorMode = 'strict' | 'inferred' | 'drift';
export type VisionImageUseMode = 'auto' | 'anchor' | 'reference' | 'partial';
export type GenreManifestationMode = 'metaphoric' | 'rationalized' | 'literal' | 'phantasmic';

export interface WorldLawConfig {
  physics?: number;
  timeline?: number;
  continuity?: number;
  gravity?: number;
  realityAnchor?: RealityAnchorMode;
  genreManifestation?: GenreManifestationMode;
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
  type: 'PLOT' | 'FORM' | 'CHARACTER' |
  'CLASSIC' | 'STYLIZED' | 'SUBVERSIVE' |
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

export interface NarrativeVisualBibleData {
  positioning: string;
  mainPosterPrompt: string;
  seriesPosterPrompt: string;
  titleLogoPrompt: string;
  titleCardPrompt: string;
  socialCoverPrompt: string;
  visualRules: string;
}

export type DynamicTrailerDurationPreset = 'highlight' | '30s' | '60s' | '90s';

export interface DynamicTrailerSegment {
  id: string;
  time: string;
  duration: number;
  purpose: string;
  sourceAssets: string;
  firstFramePrompt: string;
  lastFramePrompt: string;
  seedancePrompt: string;
}

export interface DynamicTrailerData {
  durationPreset: DynamicTrailerDurationPreset;
  strategy: string;
  referenceMap: string;
  assemblyNotes: string;
  segments: DynamicTrailerSegment[];
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
  shotFunction?: string;
  shotFunctionEn?: string;
  sceneBeat?: string;
  sceneBeatEn?: string;
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
  generationFieldState?: NarrativeFieldState;
  generationWorldLaw?: WorldLawConfig;
  generationVisionInput?: string;
  generationVisionAnalysis?: string;
  generationVisionImage?: string | null;
  generationVisionImageNote?: string;
  generationVisionImageMode?: VisionImageUseMode;
  generationVisionImplantEnabled?: boolean;
  generationSubjectType?: SubjectType;
  generationAestheticMode?: AestheticMode;
  generationColorPalette?: string[];
  generationFaceState?: FaceState;
  generationFocusState?: PromptFocusState;
  generationMAxisMixer?: MAxisMixerState;
  generationM7BIntensity?: M7BResidueIntensity;
  childBlueprint?: CreativeBlueprint;
  narrative: BlueprintNarrative;
  context: BlueprintContext;
  commercialData?: CommercialData;
  experimentalData?: ExperimentalData;
  trailerData?: TrailerData;
  aestheticData?: AestheticData;
  visualBibleData?: NarrativeVisualBibleData;
  dynamicTrailerData?: DynamicTrailerData;
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
  nameEn?: string;
  defEn?: string;
  desc?: string;
  descEn?: string;
  items: LibraryItemDef[];
  isTimeline?: boolean;
  isTerritory?: boolean;
  territoryGroups?: TerritoryGroup[];
}

export type HistoryType = 'NARRATIVE' | 'METONYMY' | 'BIBLE';

export interface HistoryItem {
  id: number;
  projectId?: string;
  archiveSource?: ArchiveSource;
  archiveReason?: ArchiveReason;
  date: string;
  type: HistoryType;
  driverId: DriverType;
  driverName: string;
  fieldState: NarrativeFieldState;
  worldLaw?: WorldLawConfig;
  visionInput?: string;
  visionAnalysis?: string;
  visionImage?: string | null;
  visionImageNote?: string;
  visionImageMode?: VisionImageUseMode;
  visionImplantEnabled?: boolean;
  subjectType?: SubjectType;
  aestheticMode?: AestheticMode;
  colorPalette?: string[];
  faceState?: FaceState;
  focusState?: PromptFocusState;
  mAxisMixer?: MAxisMixerState;
  m7bIntensity?: M7BResidueIntensity;
  conceptRuntimeState?: ConceptDesignRuntimeState | null;
  blueprint: CreativeBlueprint | null;
  metonymyBlueprint?: CreativeBlueprint | null;
  treatments: CreativeTreatment[];
  savedBlueprints?: Record<string, CreativeBlueprint>;
}

export interface ProjectWorkspaceSnapshot {
  selectedDriver: DriverType | null;
  viewMode: ViewMode;
  fieldState: NarrativeFieldState;
  worldLaw?: WorldLawConfig;
  visionInput?: string;
  visionAnalysis?: string;
  visionImage?: string | null;
  visionImageNote?: string;
  visionImageMode?: VisionImageUseMode;
  visionImplantEnabled?: boolean;
  subjectType?: SubjectType;
  aestheticMode?: AestheticMode;
  colorPalette?: string[];
  faceState?: FaceState;
  focusState?: PromptFocusState;
  mAxisMixer?: MAxisMixerState;
  m7bIntensity?: M7BResidueIntensity;
  conceptRuntimeState?: ConceptDesignRuntimeState | null;
  treatments?: CreativeTreatment[];
  activeBlueprint?: CreativeBlueprint | null;
  metonymyBlueprint?: CreativeBlueprint | null;
  cachedBlueprints?: Record<string, CreativeBlueprint>;
  activeHistoryItem?: HistoryItem | null;
}

export interface MistProject {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  lastSavedAt?: string;
  activeHistoryId?: number | string;
  snapshot?: ProjectWorkspaceSnapshot;
  notes?: string;
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
  styleTitle?: string;
  role?: string;
  coreRewriteLogic?: string;
  preserve?: string[];
  transform?: {
    time?: string;
    narrator?: string;
    psychology?: string;
    sceneExpansion?: string;
    conflictRendering?: string;
    syntax?: string;
    symbolism?: string;
    dialogue?: string;
    visualAssets?: string;
  };
  mAxisLens?: Record<string, string>;
  avoid?: string[];
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
  customStyleName?: string | null;
  customStyleDef?: string | null;
  customStyleCore?: string | null;
}

export type DensityLevel = 'NONE' | 'LOW' | 'MID' | 'HIGH' | 'AUTO';

export type SutureControlVersion = 'legacy' | 'v2';

export interface SutureConfig {
  controlVersion?: SutureControlVersion;
  sceneMode?: string;
  sceneFunction?: string;
  shotBudget?: string;
  soundArchitecture?: string;
  dialogueDensity: DensityLevel;
  dialogueStyle: string;
  voiceoverDensity: DensityLevel;
  voiceoverStyle: string;
  monologueDensity: DensityLevel;
  monologueStyle: string;
  visualStyle: string;
  filmCaseId?: string;
  shotDensity: string;
  subjectFocus: DensityLevel;
  emptyShot: DensityLevel;
  montageId: string;
  targetPresetId?: string;
  directorNote?: string;
}
