import type { SutureStyleItem } from '../suture_styles';
import { NO_FILM_CASE } from './_helpers';
import { FILM_CASE_FEATURE_IDENTITY } from './group_feature_identity';
import { FILM_CASE_FEATURE_ACTION_MEMORY } from './group_feature_action_memory';
import { FILM_CASE_SHORT_EXPERIMENTAL } from './group_short_experimental';
import { FILM_CASE_SHORT_GENRE_SOCIAL } from './group_short_genre_social';

export const FILM_CASES: SutureStyleItem[] = [
  NO_FILM_CASE,
  ...FILM_CASE_FEATURE_IDENTITY,
  ...FILM_CASE_FEATURE_ACTION_MEMORY,
  ...FILM_CASE_SHORT_EXPERIMENTAL,
  ...FILM_CASE_SHORT_GENRE_SOCIAL
];

export const CLASSIC_FILM_CASES = FILM_CASES;
