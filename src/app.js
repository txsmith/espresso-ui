import {
    baseLayerLuminance,
    ColorRecipe,
    controlCornerRadius,
    density,
    fastButton,
    fastCard,
    fastNumberField,
    fastTextField,
    fastDivider,
    fastToolbar,
    fillColor,
    neutralFillLayerRecipe,
    neutralPalette,
    PaletteRGB,
    provideFASTDesignSystem,
    StandardLuminance,
    SwatchRGB,
} from "@microsoft/fast-components";


provideFASTDesignSystem().register(
    fastButton(),
    fastNumberField(),
    fastTextField(),
    fastDivider(),
    fastToolbar(),
);

controlCornerRadius.withDefault(28);
density.withDefault(1);

const connectBtn = document.getElementById("connect");
const tempDisplay = document.getElementById("temperature");
const tempSetting = document.getElementById("setTemp");
const pSetting = document.getElementById("kP");
const iSetting = document.getElementById("kI");
const dSetting = document.getElementById("kD");
const statusDisplay = document.getElementById("status");

const espressoServiceUUID = "00c0ffee-add1-c5ed-0000-000000000000"
const temperatureReadingUUID = "00c0ffee-add1-c5ed-0000-000000000001"
const setTemperatureUUID = "00c0ffee-add1-c5ed-0000-000000000002"
const pUUID = "00c0ffee-add1-c5ed-0000-000000000003"
const iUUID = "00c0ffee-add1-c5ed-0000-000000000004"
const dUUID = "00c0ffee-add1-c5ed-0000-000000000005"
const heatPwrUUID = "00c0ffee-add1-c5ed-0000-000000000006"
const bleServiceOptions = { filters: [{ services: [espressoServiceUUID] }] };

const notificationsLiveCharacter = "🟢"
const connectedCharacter = "🔵";
const disconnectedCharacter = "⚪️";

statusDisplay.innerText = disconnectedCharacter;

var bleDevice;
var bleService;

connectBtn.addEventListener('click', event => {
    startBLE();
});

async function startBLE() {
    bleDevice = await navigator.bluetooth.requestDevice(bleServiceOptions);
    console.log("Device found:", bleDevice);
    bleDevice.addEventListener(
        "gattserverdisconnected",
        (event) => {
            console.log("Disconnected", event);
            statusDisplay.innerText = disconnectedCharacter;
            tempDisplay.innerText = "N/A"
            bleDevice = null;
            bleService = null;
        }
    );
    statusDisplay.innerText = connectedCharacter;
    await bleDevice.gatt.connect();
    bleService = await bleDevice.gatt.getPrimaryService(espressoServiceUUID);
    console.log("Primary service:", bleService);
    await subscribeToTemperatureMeasurements();
    await ConfigInputEventListener.start(tempSetting, setTemperatureUUID, 0);
    await ConfigInputEventListener.start(pSetting, pUUID, 3);
    await ConfigInputEventListener.start(iSetting, iUUID, 3);
    await ConfigInputEventListener.start(dSetting, dUUID, 3);
}

async function subscribeToTemperatureMeasurements() {
    const tempCharacteristic = await bleService.getCharacteristic(temperatureReadingUUID);
    console.log("Temperature Characteristic:", tempCharacteristic);
    if (tempCharacteristic.properties.notify) {
        tempCharacteristic.addEventListener(
            "characteristicvaluechanged",
            (event) => {
                console.log("Received notification", event);
                statusDisplay.innerText = notificationsLiveCharacter;
                tempDisplay.innerText = Math.round(tempCharacteristic.value.getFloat64(0, true) * 10) / 10;
            }
        );
        await tempCharacteristic.startNotifications();
    } else {
        console.error("Expected characteristic to have the notify property", tempCharacteristic);
    }
}

async function writeTemperatureSetting(event) {
    const setTemperatureCharacteristic = await bleService.getCharacteristic(setTemperatureUUID);
    const characteristicValue = await setTemperatureCharacteristic.readValue()
    var lastValue = Math.round(characteristicValue.getFloat64(0, true) * 10000) / 10000;
    console.log(event);
    if (lastValue != event.target.value) {
        const bufferView = new DataView(new ArrayBuffer(8));
        bufferView.setFloat64(0, event.target.value, true);
        await setTemperatureCharacteristic.writeValue(bufferView);
        lastValue = event.target.value;
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
