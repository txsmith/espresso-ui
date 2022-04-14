import { NumberField } from "@microsoft/fast-components";
import { FASTElement, customElement, attr, html, css, when } from '@microsoft/fast-element';
import { observable } from "@microsoft/fast-element";
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons'
import { faGear, faDroplet, faLinkSlash, faLink, faBolt } from '@fortawesome/free-solid-svg-icons'
import { EspressoBLEService, EspressoController, EspressoEventListener } from './espresso-service';

library.add(faBluetooth, faGear, faDroplet, faLinkSlash, faLink, faBolt);

const template = html<EspressoApp>`
<fast-toolbar>
        ${when(x => x.temp, html<EspressoApp>`<div>${x => x.temp}</div>`)}
        ${when(x => x.heatPwr! >= 0.8, html<EspressoApp>`<i class="active fa-solid fa-bolt"></i>`)}
        ${when(x => x.heatPwr! > 0 && x.heatPwr! < 0.8, html<EspressoApp>`<i class="fa-solid fa-bolt"></i>`)}
        ${when(x => x.isEspressoConnected, html<EspressoApp>`<i class="fa-solid fa-link"></i>`)}
        ${when(x => !x.isEspressoConnected, html<EspressoApp>`<i class="fa-solid fa-link-slash"></i>`)}
</fast-toolbar>
<fast-tabs>
    <fast-tab slot="tab">
        <i class="fa-solid fa-droplet"></i>
    </fast-tab>
    <fast-tab slot="tab">
        <i class="fa-solid fa-gear"></i>
    </fast-tab>

    <fast-tab-panel slot="tabpanel">
        <div id="content">
            <h3>Pump control</h1>
            <fast-card id="settings">
                TODO:
                <ol>
                    <li>Status bar up top</li>
                    <li>Make buttons work</li>
                    <li>Create control for pump</li>
                    <li>Shot timer</li>
                </ol>
            </fast-card>
        </div>
    </fast-tab-panel>
    <fast-tab-panel slot="tabpanel">
        <div id="content">
            <h3>Settings</h1>
            <fast-card id="settings">
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
                        <fast-text-field ?disabled=${x => !x.isEspressoConnected} hide-step appearance="filled" id="kI" name="kI"value=${x => x.i} @change=${(x,e) => x.setI(e.event)}>
                    </li>
                    <li class="row">
                        <div>kD</div>
                        <fast-text-field ?disabled=${x => !x.isEspressoConnected} hide-step appearance="filled" id="kD" value=${x => x.d} @change=${(x,e) => x.setP(e.event)}>
                    </li>
                </ul>
        
            </fast-card>
            <fast-card id="status-bar">
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
</fast-tabs>
`;

const styles = css`
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
}
h1, h2, h3, h4, h5 {
    text-align: center;
}
#settings {
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
#status-bar {
    // border-radius: 0;
    // box-shadow: black 0px 0 8px -4px;
    display: flex;
    // flex-direction: column;
    // z-index: 1;
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
    width: 1em;
    height: 1em;
}
.active {
  color: var(--accent-foreground-rest);
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
        if (this.controller) { this.controller.setP(Number.parseFloat((event.target as NumberField).currentValue)); }
    }
    setI(event: Event): void {
        if (this.controller) { this.controller.setI(Number.parseFloat((event.target as NumberField).currentValue)); }
    }
    setD(event: Event): void {
        if (this.controller) { this.controller.setD(Number.parseFloat((event.target as NumberField).currentValue)); }
    }
    setTargetTemp(event: Event): void {
        if (this.controller) { this.controller.setTargetTemperature(Number.parseFloat((event.target as NumberField).currentValue)); }
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
        const espressoListener: EspressoEventListener = new EspressoAppListener(this);
        EspressoBLEService.start([espressoListener]);
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
}