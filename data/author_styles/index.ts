import { StyleCategory } from '../../types';
import { LITERARY_PANTHEON } from './literary_pantheon';
import { RUSSIAN_SOUL } from './russian_soul';
import { CHINESE_CLASSICS } from './chinese_classics';
import { CHINESE_MODERN } from './chinese_modern';
import { JAPANESE_AESTHETICS } from './japanese_aesthetics';
import { WESTERN_CINEMA } from './western_cinema';
import { ASIAN_CINEMA } from './asian_cinema';
import { THEATER } from './theater';
import { GENRE_FICTION } from './genre_fiction';
import { DIGITAL_META } from './digital_meta';
import { PHILOSOPHY } from './philosophy';
import { CONTEMPORARY_NOBEL } from './contemporary_nobel';
import { CLASSIC_NOVELISTS } from './classic_novelists';

export { PERSPECTIVES, SENSORY_MODES } from './controls';

export const STYLE_MATRIX: StyleCategory[] = [
  LITERARY_PANTHEON,
  RUSSIAN_SOUL,
  CHINESE_CLASSICS,
  CHINESE_MODERN,
  JAPANESE_AESTHETICS,
  WESTERN_CINEMA,
  ASIAN_CINEMA,
  THEATER,
  GENRE_FICTION,
  DIGITAL_META,
  PHILOSOPHY,
  CONTEMPORARY_NOBEL,
  CLASSIC_NOVELISTS
];

export default STYLE_MATRIX;
