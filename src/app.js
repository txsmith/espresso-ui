import {
    controlCornerRadius,
    density,
    accentPalette,
    fastButton,
    fastNumberField,
    fastTextField,
    fastDivider,
    fastToolbar,
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
    numberFieldStyles,
    typeRampBaseFontSize
} from "@microsoft/fast-components";

import { parseColorHexRGB } from "@microsoft/fast-colors";
provideFASTDesignSystem().register(
    fastButton(),
    fastNumberField(),
    fastTextField(),
    fastDivider(),
    fastToolbar(),
    fastProgressRing(),
    fastCard(),
);

baseLayerLuminance.withDefault(0.2);
controlCornerRadius.withDefault(28);
baseHeightMultiplier.withDefault(8);
density.withDefault(4);
disabledOpacity.withDefault(0.3);
strokeWidth.withDefault(4);
typeRampBaseFontSize.withDefault("20px");
accentPalette.withDefault(PaletteRGB.from(SwatchRGB.from(parseColorHexRGB("#d4964e"))));
// neutralPalette.withDefault(PaletteRGB.from(SwatchRGB.from(parseColorHexRGB("#2efefe"))));


const body = document.getElementsByName('body')
const connectBtn = document.getElementById("connect");
const connectBtnText = document.querySelector("#connect > span");
const connectProgress = document.getElementById("connect-progress");
const tempDisplay = document.getElementById("temperature");
const tempSetting = document.getElementById("setTemp");
const pSetting = document.getElementById("kP");
const iSetting = document.getElementById("kI");
const dSetting = document.getElementById("kD");
const statusBar = document.getElementById("status-bar");

const espressoServiceUUID = "00c0ffee-add1-c5ed-0000-000000000000"
const temperatureReadingUUID = "00c0ffee-add1-c5ed-0000-000000000001"
const setTemperatureUUID = "00c0ffee-add1-c5ed-0000-000000000002"
const pUUID = "00c0ffee-add1-c5ed-0000-000000000003"
const iUUID = "00c0ffee-add1-c5ed-0000-000000000004"
const dUUID = "00c0ffee-add1-c5ed-0000-000000000005"
const heatPwrUUID = "00c0ffee-add1-c5ed-0000-000000000006"
const bleServiceOptions = { filters: [{ services: [espressoServiceUUID] }] };


var bleDevice;
var bleService;

connectBtn.addEventListener("click", startBLE);

function onPairingStart() {
    connectBtnText.innerText = "Pairing..."
    connectBtn.appearance = "stealth";
    connectBtn.setAttribute("disabled", true);
    connectProgress.removeAttribute("paused");
    connectBtn.removeEventListener("click", startBLE);
}
function onDisconnected() {
    connectBtnText.innerText = "Connect"
    connectBtn.appearance = "accent";
    connectBtn.removeAttribute("disabled");
    connectProgress.setAttribute("paused", true);
    connectBtn.addEventListener("click", startBLE);
    connectBtn.removeEventListener("click", disconnectBLE);
    bleDevice = null;
    bleService = null;
    tempDisplay.innerText = "N/A"
}
function onConnected() {
    connectBtnText.innerText = "Disconnect"
    connectBtn.appearance = "stealth";
    connectBtn.removeAttribute("disabled");
    connectProgress.setAttribute("paused", true);
    connectBtn.removeEventListener("click", startBLE);
    connectBtn.addEventListener("click", disconnectBLE)
}

async function startBLE() {
    onPairingStart();
    bleDevice = await navigator.bluetooth.requestDevice(bleServiceOptions).catch((error) => {
        onDisconnected();
        throw error;
    });
    console.log("Device found:", bleDevice);
    bleDevice.addEventListener("gattserverdisconnected", onDisconnected);
    await bleDevice.gatt.connect();
    bleService = await bleDevice.gatt.getPrimaryService(espressoServiceUUID);
    console.log("Primary service:", bleService);
    await subscribeToTemperatureMeasurements();
    await ConfigInputEventListener.start(tempSetting, setTemperatureUUID, 0);
    await ConfigInputEventListener.start(pSetting, pUUID, 3);
    await ConfigInputEventListener.start(iSetting, iUUID, 3);
    await ConfigInputEventListener.start(dSetting, dUUID, 3);
}

async function disconnectBLE() {
    await bleDevice.gatt.disconnect();
}

async function subscribeToTemperatureMeasurements() {
    const tempCharacteristic = await bleService.getCharacteristic(temperatureReadingUUID);
    console.log("Temperature Characteristic:", tempCharacteristic);
    if (tempCharacteristic.properties.notify) {
        tempCharacteristic.addEventListener(
            "characteristicvaluechanged",
            (event) => {
                console.log("Received notification", event);
                onConnected();
                tempDisplay.innerText = Math.round(tempCharacteristic.value.getFloat64(0, true) * 10) / 10;
            }
        );
        await tempCharacteristic.startNotifications();
    } else {
        console.error("Expected characteristic to have the notify property", tempCharacteristic);
    }
}

class ConfigInputEventListener {
    constructor(input, characteristic, initialValue, roundDigits) {
        this.characteristic = characteristic;
        this.roundDigits = roundDigits;
        this.lastValue = Math.round(initialValue * Math.pow(10, this.roundDigits)) / Math.pow(10, this.roundDigits);

        input.value = this.lastValue;
        input.disabled = false;
        input.addEventListener("blur", this);
        bleDevice.addEventListener("gattserverdisconnected", (event) => {
            input.removeEventListener("blur", this);
            input.value = "";
            input.disabled = true;
        })
    }

    static async start(input, uuid, roundDigits) {
        const characteristic = await bleService.getCharacteristic(uuid);
        console.log("Characteristic", uuid, characteristic);
        const initialValue = await characteristic.readValue().then(buf => buf.getFloat64(0, true));
        console.log("Value", initialValue);
        return new ConfigInputEventListener(input, characteristic, initialValue, roundDigits);
    }

    async handleEvent(event) {
        console.log(event);
        if (this.lastValue != event.target.value) {
            this.lastValue = Math.round(event.target.value * Math.pow(10, this.roundDigits)) / Math.pow(10, this.roundDigits);
            const bufferView = new DataView(new ArrayBuffer(8));
            bufferView.setFloat64(0, event.target.value, true);
            await this.characteristic.writeValue(bufferView);
        }
    }
}
