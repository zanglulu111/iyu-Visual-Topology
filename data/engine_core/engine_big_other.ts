
import { LibraryItemDef } from '../../types';
import { BIG_OTHER_GROUP_A } from './m4/group_a';
import { BIG_OTHER_GROUP_B } from './m4/group_b';
import { BIG_OTHER_GROUP_C } from './m4/group_c';

/**
 * M4: 大他者 (The Big Other) - 核心引擎配置
 * 
 * 结构说明：
 * GROUP A: 纯粹的大他者 (Systemic) - 不可观测的结构与法则
 * GROUP B: 大他者的代理人 (Authority) - 具体化、肉身化的权威
 * GROUP C: 镜像小他者 (Mirror) - 作为欲望坐标的镜像存在
 */
export const ENGINE_BIG_OTHER: LibraryItemDef[] = [
    ...BIG_OTHER_GROUP_A,
    ...BIG_OTHER_GROUP_B,
    ...BIG_OTHER_GROUP_C
];

// Re-export for convenience if needed elsewhere
export * from './m4/group_a';
export * from './m4/group_b';
export * from './m4/group_c';
