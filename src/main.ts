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
    fastProgress,
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


// const body = document.getElementsByName('body')
// const connectBtn = document.getElementById("connect");
// const connectBtnText = document.querySelector("#connect > span");
// const connectProgress = document.getElementById("connect-progress");
// const tempDisplay = document.getElementById("temperature");
// const tempSetting = document.getElementById("setTemp");
// const pSetting = document.getElementById("kP");
// const iSetting = document.getElementById("kI");
// const dSetting = document.getElementById("kD");
// const statusBar = document.getElementById("status-bar");

// abstract class EspressoSetting {
//     private characteristic: BluetoothRemoteGATTCharacteristic;
//     private configuredValue: number;
//     private roundDigits: number;
//     private onChange: (v: number) => void;

//     private constructor(characteristic: BluetoothRemoteGATTCharacteristic, configuredValue: number, roundDigits: number, onChange: (v: Number) => void) {
//         this.characteristic = characteristic;
//         this.configuredValue = configuredValue;
//         this.roundDigits = roundDigits;
//         this.onChange = onChange;
//     }

//     static async create(bleService: BluetoothRemoteGATTService, uuid: string, roundDigits: number): Promise<EspressoSetting> {
//         const characteristic = await bleService.getCharacteristic(uuid);
//         const currentValue = Math.round(characteristic.value!.getFloat64(0, true) * Math.pow(10, roundDigits)) / Math.pow(10, roundDigits);
//         return new EspressoSetting(characteristic, currentValue, roundDigits);
//     }
// }
// connectBtn.addEventListener("click", startBLE);

// function onPairingStart() {
//     connectBtnText.innerText = "Pairing..."
//     connectBtn.appearance = "stealth";
//     connectBtn.setAttribute("disabled", true);
//     connectProgress.removeAttribute("paused");
//     connectBtn.removeEventListener("click", startBLE);
// }
// function onDisconnected() {
//     connectBtnText.innerText = "Connect"
//     connectBtn.appearance = "accent";
//     connectBtn.removeAttribute("disabled");
//     connectProgress.setAttribute("paused", true);
//     connectBtn.addEventListener("click", startBLE);
//     connectBtn.removeEventListener("click", disconnectBLE);
//     tempDisplay.innerText = "N/A"
// }
// function onConnected() {
//     connectBtnText.innerText = "Disconnect"
//     connectBtn.appearance = "stealth";
//     connectBtn.removeAttribute("disabled");
//     connectProgress.setAttribute("paused", true);
//     connectBtn.removeEventListener("click", startBLE);
//     connectBtn.addEventListener("click", disconnectBLE)
// }


// class ConfigInputEventListener {
//     constructor(input, characteristic, initialValue, roundDigits) {
//         this.characteristic = characteristic;
//         this.roundDigits = roundDigits;
//         this.lastValue = Math.round(initialValue * Math.pow(10, this.roundDigits)) / Math.pow(10, this.roundDigits);

//         input.value = this.lastValue;
//         input.disabled = false;
//         input.addEventListener("blur", this);
//         bleDevice.addEventListener("gattserverdisconnected", (event) => {
//             input.removeEventListener("blur", this);
//             input.value = "";
//             input.disabled = true;
//         })
//     }

//     static async start(input, uuid, roundDigits) {
//         const characteristic = await bleService.getCharacteristic(uuid);
//         console.log("Characteristic", uuid, characteristic);
//         const initialValue = await characteristic.readValue().then(buf => buf.getFloat64(0, true));
//         console.log("Value", initialValue);
//         return new ConfigInputEventListener(input, characteristic, initialValue, roundDigits);
//     }

//     async handleEvent(event) {
//         console.log(event);
//     }
// }
