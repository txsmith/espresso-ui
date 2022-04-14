import {
    controlCornerRadius,
    density,
    accentPalette,
    fastButton,
    fastNumberField,
    fastTextField,
    fastDivider,
    fastToolbar,
    fastTabs,
    fastTab,
    fastTabPanel,
    fastProgressRing,
    fastCard,
    PaletteRGB,
    provideFASTDesignSystem,
    SwatchRGB,
    strokeWidth,
    disabledOpacity,
    baseLayerLuminance,
    StandardLuminance,
    baseHeightMultiplier,
    typeRampBaseFontSize
} from "@microsoft/fast-components";
import { parseColorHexRGB } from "@microsoft/fast-colors";
import { EspressoApp } from "./espresso-app"

provideFASTDesignSystem().register(
    fastButton(),
    fastNumberField(),
    fastTextField(),
    fastDivider(),
    fastToolbar(),
    fastProgressRing(),
    fastCard(),
    fastTab(),
    fastTabs(),
    fastTabPanel(),
    fastToolbar(),
    EspressoApp
);

baseLayerLuminance.withDefault(StandardLuminance.DarkMode);
controlCornerRadius.withDefault(28);
baseHeightMultiplier.withDefault(8);
density.withDefault(4);
disabledOpacity.withDefault(0.3);
strokeWidth.withDefault(4);
typeRampBaseFontSize.withDefault("20px");
accentPalette.withDefault(PaletteRGB.from(SwatchRGB.from(parseColorHexRGB("#d4964e")!)));
// neutralPalette.withDefault(PaletteRGB.from(SwatchRGB.from(parseColorHexRGB("#2efefe")!)));