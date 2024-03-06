import * as twind from "@twind/core";
import PresetAutoprefix from "@twind/preset-autoprefix";
import PresetTailwind from "@twind/preset-tailwind";
import PresetTypo from "@twind/preset-typography";

twind.install({
  presets: [PresetAutoprefix(), PresetTailwind(), PresetTypo()],
});
