
import { SutureStyleItem } from './suture_styles';
import { WESTERN_AUTEURS } from './suture_visuals/western_auteurs';
import { EASTERN_AUTEURS } from './suture_visuals/eastern_auteurs';
import { ANIMATION_DIRECTORS } from './suture_visuals/animation_directors';
import { ART_HOUSE_STYLES } from './suture_visuals/art_house';
import { COMMERCIAL_MV_STYLES } from './suture_visuals/commercial_mv';
import { PHOTOGRAPHY_STYLES } from './suture_visuals/photography_styles';
import { CLASSIC_FILMS } from './suture_visuals/classic_films';

export const SUTURE_VISUAL_STYLES: SutureStyleItem[] = [
  ...WESTERN_AUTEURS,
  ...EASTERN_AUTEURS,
  ...ANIMATION_DIRECTORS,
  ...ART_HOUSE_STYLES,
  ...COMMERCIAL_MV_STYLES,
  ...PHOTOGRAPHY_STYLES,
  ...CLASSIC_FILMS
];
