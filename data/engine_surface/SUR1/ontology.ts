export type Sur1OntologyKind =
  | 'realist_type'
  | 'conditional_ontology'
  | 'spectacle_ontology';

export const SUR1_ONTOLOGY_KIND_LABEL_CN: Record<Sur1OntologyKind, string> = {
  realist_type: '现实经验类型',
  conditional_ontology: '条件型类型',
  spectacle_ontology: '奇观本体类型',
};

/**
 * SUR1 ontology classification is explicit by design.
 * Do not infer these groups from keywords at prompt time; the prompt compiler
 * reads this table so all 144 story types have a stable world-law contract.
 */
export const SUR1_ONTOLOGY_KIND_BY_ID: Record<string, Sur1OntologyKind> = {
  // A. Action & Adventure
  gun_fu: 'realist_type',
  tactical: 'realist_type',
  western: 'realist_type',
  vehicle: 'realist_type',
  disaster: 'realist_type',
  kaiju: 'spectacle_ontology',
  war: 'realist_type',
  superhero: 'spectacle_ontology',
  prison: 'realist_type',
  treasure: 'realist_type',
  sports: 'realist_type',
  revenge: 'realist_type',

  // B. Sci-Fi & Future
  hard_scifi: 'spectacle_ontology',
  mecha: 'spectacle_ontology',
  space_opera: 'spectacle_ontology',
  time_travel: 'spectacle_ontology',
  ai: 'conditional_ontology',
  post_apocalyptic: 'conditional_ontology',
  alien: 'spectacle_ontology',
  virtual_reality: 'conditional_ontology',
  biopunk: 'conditional_ontology',
  soft_scifi: 'conditional_ontology',
  multiverse: 'spectacle_ontology',
  retro_futurism: 'conditional_ontology',

  // C. Fantasy & Mythology
  high_fantasy: 'spectacle_ontology',
  magical_realism: 'spectacle_ontology',
  dark_fantasy: 'spectacle_ontology',
  urban_fantasy: 'spectacle_ontology',
  fairy_tale: 'conditional_ontology',
  mythological: 'spectacle_ontology',
  gothic: 'conditional_ontology',
  isekai: 'spectacle_ontology',
  sword_sorcery: 'spectacle_ontology',
  gaslamp: 'conditional_ontology',
  new_weird: 'spectacle_ontology',
  supernatural: 'spectacle_ontology',

  // D. Wuxia & Period
  classic_wuxia: 'conditional_ontology',
  ronin: 'realist_type',
  xianxia: 'spectacle_ontology',
  court: 'realist_type',
  historical: 'realist_type',
  period_mystery: 'realist_type',
  shenmo: 'spectacle_ontology',
  alt_history: 'spectacle_ontology',
  republic: 'realist_type',
  manor: 'realist_type',
  kungfu: 'realist_type',
  unofficial: 'realist_type',

  // E. Horror & Terror
  slasher: 'conditional_ontology',
  supernatural_horror: 'spectacle_ontology',
  zombie: 'spectacle_ontology',
  body_horror: 'conditional_ontology',
  folk_horror: 'conditional_ontology',
  found_footage: 'conditional_ontology',
  giallo: 'realist_type',
  home_invasion: 'realist_type',
  lovecraftian: 'spectacle_ontology',
  psychological_horror: 'realist_type',
  tech_horror: 'conditional_ontology',
  horror_comedy: 'conditional_ontology',

  // F. Suspense & Mystery
  whodunit: 'realist_type',
  social_mystery: 'realist_type',
  noir: 'realist_type',
  locked_room: 'realist_type',
  police: 'realist_type',
  psychological_thriller: 'realist_type',
  serial_killer: 'realist_type',
  espionage: 'realist_type',
  legal: 'realist_type',
  heist: 'realist_type',
  techno: 'conditional_ontology',
  hitchcockian: 'realist_type',

  // G. Crime & Gangster
  mafia: 'realist_type',
  yakuza: 'realist_type',
  cartel: 'realist_type',
  prison_gang: 'realist_type',
  vigilante: 'realist_type',
  police_corruption: 'realist_type',
  assassin: 'realist_type',
  buddy_cop: 'realist_type',
  true_crime: 'realist_type',
  con_artist: 'realist_type',
  juvenile: 'realist_type',
  cyber_crime: 'conditional_ontology',

  // H. Drama & Ethics
  family_drama: 'realist_type',
  melodrama: 'realist_type',
  social_realism: 'realist_type',
  biographical: 'realist_type',
  politics: 'realist_type',
  school_bullying: 'realist_type',
  medical: 'realist_type',
  lgbt_drama: 'realist_type',
  religious: 'realist_type',
  legal_ethics: 'realist_type',
  war_trauma: 'realist_type',
  road_drama: 'realist_type',

  // I. Comedy & Humor
  slapstick: 'realist_type',
  screwball: 'realist_type',
  satire: 'realist_type',
  spoof: 'realist_type',
  cringe: 'realist_type',
  stoner: 'realist_type',
  romantic_comedy: 'realist_type',
  road_comedy: 'realist_type',
  high_school: 'realist_type',
  sitcom: 'realist_type',
  workplace: 'realist_type',
  dramedy: 'realist_type',

  // J. Romance & Intimacy
  first_love: 'realist_type',
  tragic: 'realist_type',
  adult: 'realist_type',
  fantasy_romance: 'spectacle_ontology',
  enemies_to_lovers: 'realist_type',
  taboo: 'realist_type',
  period_romance: 'realist_type',
  queer: 'realist_type',
  holiday: 'realist_type',
  triangle: 'realist_type',
  soulmates: 'conditional_ontology',
  fake_dating: 'realist_type',

  // K. Art House & Avant-Garde
  surrealism: 'conditional_ontology',
  experimental: 'realist_type',
  new_wave: 'realist_type',
  cult: 'realist_type',
  minimalism: 'realist_type',
  stream: 'conditional_ontology',
  dogme95: 'realist_type',
  grindhouse: 'realist_type',
  poetic: 'conditional_ontology',
  silent: 'realist_type',
  psychedelic: 'conditional_ontology',
  slow: 'realist_type',

  // L. Music & Performance
  musical: 'realist_type',
  music_biopic: 'realist_type',
  dance: 'realist_type',
  animated_musical: 'conditional_ontology',
  concert: 'realist_type',
  opera: 'realist_type',
  hiphop: 'realist_type',
  rock: 'realist_type',
  bollywood: 'realist_type',
  mv_style: 'realist_type',
  backstage: 'realist_type',
  audiovisual: 'conditional_ontology',
};
