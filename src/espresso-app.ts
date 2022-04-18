import { NumberField } from "@microsoft/fast-components";
import { FASTElement, customElement, attr, html, css, when } from '@microsoft/fast-element';
import { observable } from "@microsoft/fast-element";
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons'
import { faGear, faDroplet, faLinkSlash, faLink, faBolt, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { EspressoWebSocketService, EspressoController, EspressoEventListener } from './espresso-service';
import { ColorScale, rgbToHSL } from "@microsoft/fast-colors";

library.add(faBluetooth, faGear, faDroplet, faLinkSlash, faLink, faBolt, faCircleQuestion);

const template = html<EspressoApp>`
<fast-toolbar>
    ${when(x => x.temp! >= 0, html<EspressoApp>`<div>${x => x.temp?.toFixed(1)} °C</div>`)}
    ${when(x => x.heatPwr! >= 0.8, html<EspressoApp>`<div>${x => (Number(x.heatPwr) * 100).toFixed(0)}% <i class="active fa-solid fa-bolt"></i></div>`)}
    ${when(x =>x.heatPwr! < 0.8, html<EspressoApp>`<div>${x => (Number(x.heatPwr) * 100).toFixed(0)}% <i class="fa-solid fa-bolt"></i></div>`)}
    ${when(x => x.isEspressoConnected, html<EspressoApp>`<div><i class="fa-solid fa-link"></i></div>`)}
    ${when(x => !x.isEspressoConnected, html<EspressoApp>`<div><i hidden class="fa-solid fa-link-slash"></i></div>`)}
</fast-toolbar>
<fast-tabs>
    <fast-tab slot="tab">
        <i class="fa-solid fa-droplet"></i>
    </fast-tab>
    <fast-tab slot="tab">
        <i class="fa-solid fa-gear"></i>
    </fast-tab>
    <fast-tab slot="tab">
        <i class="fa-solid fa-circle-question"></i>
    </fast-tab>

    <fast-tab-panel slot="tabpanel">
        <div id="content">
            <h3>Pump control</h1>
            <fast-card id="pump-slider" class="content-card">
                100%
            </fast-card>
        </div>
    </fast-tab-panel>
    <fast-tab-panel slot="tabpanel">
        <div id="content">
            <h3>Settings</h1>
            <fast-card id="settings" class="content-card">
                <ul>
                    <li class="row">
                        <div>Temperatue</div>
                        <fast-number-field ?disabled=${x => !x.isEspressoConnected} appearance="filled" id="setTemp" name="temp" min="10" max="120" step="1" value=${x => x.targetTemp} @change=${(x,e) => x.setTargetTemp(e.event)}>
                            <span slot="end">°C</span>
                        </fast-number-field>
                    </li>
                    <li class="row">
                        <div>kP</div>
                        <fast-number-field ?disabled=${x => !x.isEspressoConnected} hide-step appearance="filled" id="kP" name="kP" value=${x => x.p} @change=${(x,e) => x.setP(e.event)}>
                    </li>
                    <li class="row">    
                        <div>kI</div>
                        <fast-number-field ?disabled=${x => !x.isEspressoConnected} hide-step appearance="filled" id="kI" name="kI" value=${x => x.i} @change=${(x,e) => x.setI(e.event)}>
                    </li>
                    <li class="row">
                        <div>kD</div>
                        <fast-number-field ?disabled=${x => !x.isEspressoConnected} hide-step appearance="filled" id="kD" name="kD" value=${x => x.d} @change=${(x,e) => x.setD(e.event)}>
                    </li>
                </ul>
        
            </fast-card>
            <fast-card id="connect-card">
                <fast-progress-ring id="connect-progress" ?paused=${x => !x.isConnecting}></fast-progress-ring>
                <fast-button id="connect" ?disabled=${x => x.isConnecting} appearance=${x => x.isEspressoConnected || x.isConnecting ? "stealth" : "accent"} @click=${x => x.connectButtonClick()}>
                    <i slot="start" class="fab fa-bluetooth fa-2x"></i>
                    <span>
                        ${when(x => !x.isEspressoConnected, html<string>`Connect`)}
                        ${when(x => x.isEspressoConnected, html<string>`Disconnect`)}
                    </span>
                </fast-button>
            </fast-card>
        </div>
    </fast-tab-panel>
    <fast-tab-panel slot="tabpanel">
        <div id="content">
            <fast-card class="content-card">
                TODO:
                <ol>
                    <li>Fix icon duplication</li>
                    <li>Implement heat power on esp32</li>
                    <li>Create control for pump</li>
                    <li>Shot timer</li>
                </ol>
            </fast-card>
        </div>
    </fast-tab-panel>
</fast-tabs>
`;

const styles = css`
:host([hidden]) {
    display: none;
}
:host {
    height: 100vh;
    display: flex;
    flex-direction: column;
    --card-height: auto;
}
#content {
    display: grid;
    gap: 20px;
    overflow: scroll;
    flex-grow: 1;
    padding: 0 calc(5 *var(--design-unit) * 1px);
    padding-bottom: calc(5 *var(--design-unit) * 1px);
}
h1, h2, h3, h4, h5 {
    text-align: center;
}
.content-card {
    padding: 20px;
}
#settings > ul {
    display:grid;
    gap: 20px;
    padding: 0;
    margin: 0;
}
.row {
    display: flex;
    align-items: center;
}
.row > * {
    width: 100%;
}
#temperature {
    text-align: right;
}
#connect-card {
    display: flex;
}
#connect {
    flex-grow: 1;
    font-size: var(--type-ramp-plus-2-font-size);
    margin: 10pt;
}
#connect-progress {
    margin: 10pt;
}
fast-tab-panel {
    margin: 0;
    padding: 0;
}
svg {
    width: 1.25em;
    height: 1.25em;
}
fast-toolbar {
    border-radius: 0;
    background: #1d1d1d;
    color: rgb(167, 167, 167);
}
fast-toolbar svg {
    width: 18px;
    height: 18px;
}
.active {
  color: var(--accent-foreground-rest);
}
#pump-slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    user-select: none;
    width: 100px;
    height: 40vh;
    transition: width 0.25s, height 0.25s, margin 0.25s;
}
#pump-slider:active {
    width: 180px;
    margin-top: 0px;
    margin-bottom: 0px;
    height: calc(40vh + 80px);
}
`;

@customElement({
    name: 'espresso-app',
    template,
    styles
})
export class EspressoApp extends FASTElement {
    @observable isConnecting: Boolean = false;
    @observable isEspressoConnected: Boolean = false;
    @observable p?: number;
    @observable i?: number;
    @observable d?: number;
    @observable targetTemp?: number;
    @observable temp?: number
    @observable heatPwr?: number;

    controller?: EspressoController;

    setP(event: Event): void {
        const num = Number.parseFloat((event.target as NumberField).currentValue)
        if (this.controller && num != this.p) { 
            this.controller.setP(num).then(() => this.p = num); 
        }
    }
    setI(event: Event): void {
        const num = Number.parseFloat((event.target as NumberField).currentValue)
        if (this.controller && num != this.i) { 
            this.controller.setI(num).then(() => this.i = num); 
        }
    }
    setD(event: Event): void {
        const num = Number.parseFloat((event.target as NumberField).currentValue)
        if (this.controller && num != this.d) { 
            this.controller.setD(num).then(() => this.d = num); 
        }
    }
    setTargetTemp(event: Event): void {
        const num = Number.parseFloat((event.target as NumberField).currentValue)
        if (this.controller && num != this.targetTemp) { 
            this.controller.setTargetTemperature(num).then(() => this.targetTemp = num); 
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // @ts-ignore
        dom.watch({
            autoReplaceSvgRoot: this.shadowRoot,
            observeMutationsRoot: this.shadowRoot
        });
    }

    connectButtonClick() {
        if (this.controller) {
          this.controller.disconnect();
        } else {
            const espressoListener: EspressoEventListener = new EspressoAppListener(this);
            EspressoWebSocketService.start([espressoListener]);
        }
    }
}

class EspressoAppListener extends EspressoEventListener {
    app: EspressoApp;
    constructor(app: EspressoApp) {
        super();
        this.app = app;
    }
    onPairingStart(): void {
        this.app.isConnecting = true;
    }
    onConnected(controller: EspressoController): void {
        this.app.isEspressoConnected = true;
        this.app.isConnecting = false;
        this.app.controller = controller;
    }
    onDisconnected(): void {
        this.app.isEspressoConnected = false;
        this.app.isConnecting = false;
        this.app.temp = undefined;
        this.app.heatPwr = undefined;
        this.app.controller = undefined;
    }
    onTemperatureChange(newTemp: number): void {
        this.app.temp = newTemp;
    }
    onPChange(newP: number): void {
        this.app.p = newP;
    }
    onIChange(newI: number): void {
        this.app.i = newI;
    }
    onDChange(newD: number): void {
        this.app.d = newD;
    }
    onTargetTemperatureChange(newTargetTemparature: number): void {
        this.app.targetTemp = newTargetTemparature;
    }
    onHeatPowerChange(newHeatPower: number): void {
        this.app.heatPwr = newHeatPower;
    }
}