export type CharacterIdentityBoardLanguage = 'CN' | 'EN';
export type CharacterIdentityBoardMediumCategory = 'PAINTING' | 'CGI' | 'PHOTOGRAPHY' | 'TANGIBLE';
export type CharacterIdentityBoardFormat = '16:9' | '9:16' | '4:3' | '3:4' | '3:2' | '2:3' | '21:9' | '1:1';
export type CharacterIdentityBoardWorldLawMode = 'LAW_L1' | 'LAW_L2' | 'LAW_L3' | 'LAW_L4' | 'LAW_L5';
export type CharacterIdentityBoardBodyFormMode = 'HUMANOID_DISGUISE' | 'VISIBLE_HYBRID' | 'BEAST_BODY' | 'XENO_BODY';

export type CharacterIdentityBoardVariables = {
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

export type CharacterIdentityBoardOptions = {
  originality: boolean;
  format: CharacterIdentityBoardFormat;
  mediumCategory: CharacterIdentityBoardMediumCategory;
  worldLawMode?: CharacterIdentityBoardWorldLawMode;
  bodyFormMode?: CharacterIdentityBoardBodyFormMode;
  backgroundMode?: 'OFF_WHITE' | 'PURE_WHITE' | 'BLACK' | 'GREEN_SCREEN' | 'TRANSPARENT';
  qualityLevel?: 'STANDARD' | 'HIGH' | 'ULTRA';
};

export type CharacterIdentityBoardMaterialSlotId =
  | 'characterSeed'
  | 'ageBodyType'
  | 'timeSpaceScene'
  | 'actionMoment'
  | 'visualMedium'
  | 'style'
  | 'compositionScene'
  | 'lightingAtmosphere'
  | 'otherDetails';

export type CharacterIdentityBoardMaterialSlot = {
  id: CharacterIdentityBoardMaterialSlotId;
  name: string;
  nameEn: string;
  layer: 'material';
  role: string;
  roleEn: string;
  directToAssembly: boolean;
  translationNeed: 'none' | 'light' | 'required';
};

export type CharacterIdentityBoardRuleBlockId =
  | 'materialPacketSummary'
  | 'materialJudgment'
  | 'styleCostumeConflict'
  | 'actionMotif'
  | 'originality'
  | 'bodyFormControl'
  | 'authenticity'
  | 'mediumControl'
  | 'boardContent'
  | 'layout'
  | 'background'
  | 'formatSpec'
  | 'priority';

export type CharacterIdentityBoardRuleBlock = {
  id: CharacterIdentityBoardRuleBlockId;
  layer: 'translation' | 'assembly';
  fixed: boolean;
  text: string;
};

export type CharacterIdentityBoardMaterialTerm = {
  blockId: string;
  blockName: string;
  blockNameEn: string;
  tag: string;
  name: string;
  nameEn?: string;
  def?: string;
  defEn?: string;
  ontologyLevel?: 1 | 2 | 3 | 4 | 5;
  risk?: 'clean' | 'medium' | 'high';
  eras?: readonly string[];
  affects?: readonly string[];
  controls?: readonly string[];
  forbids?: readonly string[];
  absorptionRule?: string;
};

export type CharacterIdentityBoardMaterialPacket = {
  templateId: 'character_identity_board';
  subjectMode: 'HUMAN' | 'CREATURE';
  objectRoute: {
    id: string;
    name: string;
    nameEn: string;
  };
  sections: Array<{
    id: 'governance' | 'style' | 'palette' | 'subject';
    name: string;
    nameEn: string;
    terms: CharacterIdentityBoardMaterialTerm[];
  }>;
};

export type CharacterIdentityBoardTranslatedPayload = {
  intent: string;
  variables: CharacterIdentityBoardVariables;
  otherDetails: string;
  materialPacket?: CharacterIdentityBoardMaterialPacket;
  ruleBlocks: CharacterIdentityBoardRuleBlock[];
  options: CharacterIdentityBoardOptions;
  lang: CharacterIdentityBoardLanguage;
};
