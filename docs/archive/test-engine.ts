import { runMistEngine, extractEngineInput } from './engine/mist_calculator.ts';
import fs from 'fs';

const dummyFieldState = {
  engine_m0: ['M0_PSYCHIC_TOPOLOGY'], // Make sure to use the exact ID we see in the screenshot. It says [M0_PSYCHIC_TOPOLOGY]. But wait! Is the item ID actually 'M0_PSYCHIC_TOPOLOGY'? Wait, if it says 【M0-强迫症覆写】, let me check what that item is!
  engine_m1: [],
  engine_m2: [],
  engine_m3: [],
  engine_m4: [],
  engine_m5: [],
  engine_m6: [],
  engine_m7: [],
};
const dummyWorldLaw = { gravity: 3, narrativeVector: 'NEUTRAL' } as any;

const output = runMistEngine(dummyFieldState, dummyWorldLaw);
console.log(JSON.stringify(output.redlines, null, 2));
