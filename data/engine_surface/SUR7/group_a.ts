import { LibraryCategoryDef } from '../../../types';
import { castingPresetItem } from './_shared';

export const SUR7_GROUP_A: LibraryCategoryDef = {
  id: "casting_presentation",
  name: "选角呈现 (Casting Presentation)",
  nameEn: "Casting Presentation",
  desc: "人物在画面、称谓和互动中采用的性别呈现标签。只给选角层，不解释人物。",
  descEn: "Gender presentation labels used in image, address, and interaction. Casting layer only; not character explanation.",
  items: [
    castingPresetItem(
      "gen_m",
      "男性",
      "Male",
      "人物在称谓、造型和公共读取上呈现为男性。",
      "The character is presented as male in address, styling, and public reading."
    ),
    castingPresetItem(
      "gen_f",
      "女性",
      "Female",
      "人物在称谓、造型和公共读取上呈现为女性。",
      "The character is presented as female in address, styling, and public reading."
    ),
    castingPresetItem(
      "gen_nb",
      "非二元",
      "Non-Binary",
      "人物不被单一男女二分完全标记，可呈现中性、流动或未明示状态。",
      "The character is not fully marked by a single male/female binary, allowing neutral, fluid, or unstated presentation."
    )
  ]
};
