import type { SutureStyleItem } from '../suture/styles';
import { CLASSIC_FILM_CASES } from '../suture_film_cases';

// Deprecated compatibility export.
// Classic films are no longer director/visual styles. They are film-case
// mechanisms and must be consumed through the isolated FILM_CASES selector.
export const CLASSIC_FILMS: SutureStyleItem[] = CLASSIC_FILM_CASES;
