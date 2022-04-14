export abstract class EspressoEventListener {
    onPairingStart(): void { }
    onConnected(controller: EspressoController): void { }
    abstract onDisconnected(): void
    onTemperatureChange(newTemp: number): void { }
    onHeatPowerChange(newHeatPower: number): void { }
    onPChange(newP: number): void { }
    onIChange(newI: number): void { }
    onDChange(newD: number): void { }
    onTargetTemperatureChange(newTargetTemparature: number): void { }
}

export interface EspressoController {
    disconnect(): void
    setTargetTemperature(temperature: number): Promise<void>
    setP(p: number): Promise<void>
    setI(i: number): Promise<void>
    setD(d: number): Promise<void>
}

export class EspressoBLEService implements EspressoController {
    private static espressoServiceUUID: string = "00c0ffee-add1-c5ed-0000-000000000000";
    private static temperatureReadingUUID: string = "00c0ffee-add1-c5ed-0000-000000000001";
    private static setTemperatureUUID: string = "00c0ffee-add1-c5ed-0000-000000000002";
    private static pUUID: string = "00c0ffee-add1-c5ed-0000-000000000003";
    private static iUUID: string = "00c0ffee-add1-c5ed-0000-000000000004";
    private static dUUID: string = "00c0ffee-add1-c5ed-0000-000000000005";
    private static heatPwrUUID: string = "00c0ffee-add1-c5ed-0000-000000000006";
    private static bleServiceOptions = { filters: [{ services: [this.espressoServiceUUID] }] };

    private bleDevice: BluetoothDevice;
    private gattServer: BluetoothRemoteGATTServer;
    private bleService: BluetoothRemoteGATTService;

    private listeners: EspressoEventListener[] = [];

    private configuredTargetTemp?: number;
    private configuredP?: number;
    private configuredI?: number;
    private configuredD?: number;

    private constructor(listeners: EspressoEventListener[], device: BluetoothDevice, gattServer: BluetoothRemoteGATTServer, service: BluetoothRemoteGATTService) {
        this.listeners = listeners;
        this.bleDevice = device;
        this.gattServer = gattServer;
        this.bleService = service;
        this.bleDevice.addEventListener("gattserverdisconnected", this.onDisconnected);
    }
    static async start(listeners: EspressoEventListener[]): Promise<void> {
        listeners.forEach(l => l.onPairingStart());
        const bleDevice = await navigator.bluetooth.requestDevice(this.bleServiceOptions).catch((error) => {
            listeners.forEach(l => l.onDisconnected());
            throw error;
        });
        console.log("Device found:", bleDevice);
        const gattServer = bleDevice.gatt!;
        await gattServer.connect();
        const bleService = await gattServer.getPrimaryService(this.espressoServiceUUID);
        console.log("Primary service:", bleService);

        const instance = new EspressoBLEService(listeners, bleDevice, gattServer, bleService);
        await instance.fetchSettings();
        await instance.subscribeToTemperatureMeasurements();
        await instance.subscribeToHeater();
        return;
    }
    disconnect(): void {
        this.gattServer.disconnect();
    }

    private async writeCharacteristic(uuid: string, currentValue: number | undefined, value: number, roundDigits: number, onChange: (l: EspressoEventListener) => (v: number) => void): Promise<void> {
        const roundedValue = Math.round(value * Math.pow(10, roundDigits)) / Math.pow(10, roundDigits);
        const characteristic = await this.bleService.getCharacteristic(uuid);
        if (currentValue != roundedValue) {
            const bufferView = new DataView(new ArrayBuffer(8));
            bufferView.setFloat64(0, roundedValue, true);
            await characteristic.writeValue(bufferView);
            this.listeners.forEach(l => onChange(l)(roundedValue));
        }
    }

    private async subscribeToCharacteristicNotifications(uuid: string, onChange: (l: EspressoEventListener) => (v: number) => void): Promise<void> {
        const characteristic = await this.bleService.getCharacteristic(uuid);
        console.log("Subscribing to characteristic:", characteristic);
        if (characteristic.properties.notify) {
            characteristic.addEventListener(
                "characteristicvaluechanged",
                event => {
                    console.log("Received notification", event);
                    const value = characteristic.value!.getFloat64(0, true);
                    this.listeners.forEach(l => onChange(l)(value));
                }
            );
            await characteristic.startNotifications();
        } else {
            console.error("Expected characteristic to have the notify property", characteristic);
        }
    }

    async setTargetTemperature(temperature: number): Promise<void> {
        this.writeCharacteristic(EspressoBLEService.setTemperatureUUID, this.configuredTargetTemp, temperature, 0, l => l.onTargetTemperatureChange);
    }
    async setP(p: number): Promise<void> {
        this.writeCharacteristic(EspressoBLEService.pUUID, this.configuredP, p, 3, l => l.onPChange);
    }
    async setI(i: number): Promise<void> {
        this.writeCharacteristic(EspressoBLEService.iUUID, this.configuredI, i, 3, l => l.onIChange);
    }
    async setD(d: number): Promise<void> {
        this.writeCharacteristic(EspressoBLEService.dUUID, this.configuredD, d, 3, l => l.onDChange);
    }


    private onDisconnected(): void {
        this.listeners.forEach(l => l.onDisconnected());
    }

    private async fetchSettings(): Promise<[number, number, number, number]> {
        const tempCharacteristic = await this.bleService.getCharacteristic(EspressoBLEService.setTemperatureUUID);
        const pCharacteristic = await this.bleService.getCharacteristic(EspressoBLEService.pUUID);
        const iCharacteristic = await this.bleService.getCharacteristic(EspressoBLEService.iUUID);
        const dCharacteristic = await this.bleService.getCharacteristic(EspressoBLEService.dUUID);
        this.configuredTargetTemp = await tempCharacteristic.readValue().then(buf => buf.getFloat64(0, true));
        this.configuredP = await pCharacteristic.readValue().then(buf => buf.getFloat64(0, true));
        this.configuredI = await iCharacteristic.readValue().then(buf => buf.getFloat64(0, true));
        this.configuredD = await dCharacteristic.readValue().then(buf => buf.getFloat64(0, true));

        this.listeners.forEach(l => l.onConnected(this));
        this.listeners.forEach(l => l.onTargetTemperatureChange(this.configuredTargetTemp!));
        this.listeners.forEach(l => l.onPChange(this.configuredP!));
        this.listeners.forEach(l => l.onIChange(this.configuredI!));
        this.listeners.forEach(l => l.onDChange(this.configuredD!));
        return [this.configuredTargetTemp, this.configuredP, this.configuredI, this.configuredD];
    }

    private async subscribeToTemperatureMeasurements(): Promise<void> {
        await this.subscribeToCharacteristicNotifications(EspressoBLEService.temperatureReadingUUID, l => v => {
            const tempValue = Math.round(v * 10) / 10;
            l.onTemperatureChange(tempValue);
        })
    }
    private async subscribeToHeater(): Promise<void> {
        await this.subscribeToCharacteristicNotifications(EspressoBLEService.heatPwrUUID, l => v => {
            const heatPwr = Math.round(v * 100) / 100;
            l.onHeatPowerChange(heatPwr);
        })
    }
}
