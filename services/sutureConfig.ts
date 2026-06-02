import { SutureConfig } from '../types';

export const createDefaultSutureConfig = (targetPresetId: string = 'original'): SutureConfig => ({
    controlVersion: 'v2',
    sceneMode: 'AUTO',
    sceneFunction: 'AUTO',
    shotBudget: 'AUTO',
    soundArchitecture: 'AUTO',
    dialogueDensity: 'AUTO',
    dialogueStyle: 'dial_default',
    voiceoverDensity: 'AUTO',
    voiceoverStyle: 'vo_default',
    monologueDensity: 'AUTO',
    monologueStyle: 'mono_default',
    visualStyle: 'vis_wkw',
    filmCaseId: 'filmcase_none',
    shotDensity: 'SHOTS_12',
    subjectFocus: 'AUTO',
    emptyShot: 'AUTO',
    montageId: 'montage_none',
    targetPresetId,
});
