import { LibraryItemDef } from '../../../types';
import { DRIVES_GROUP_A } from './group_a';
import { DRIVES_GROUP_B } from './group_b';
import { DRIVES_GROUP_C } from './group_c';
import { DRIVES_GROUP_D } from './group_d';
import { DRIVES_GROUP_E } from './group_e';

export const M5_DRIVES: LibraryItemDef[] = [
    ...DRIVES_GROUP_A,
    ...DRIVES_GROUP_B,
    ...DRIVES_GROUP_C,
    ...DRIVES_GROUP_D,
    ...DRIVES_GROUP_E
];
