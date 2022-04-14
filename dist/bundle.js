/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();const e=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==t.g)return t.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===e.trustedTypes&&(e.trustedTypes={createPolicy:(t,e)=>e});const n=Object.freeze([]),a=[],r=e.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let i=r;const o=[];function s(){if(o.length)throw o.shift()}function l(t){try{t.call()}catch(t){o.push(t),setTimeout(s,0)}}const c=`fast-${Math.random().toString(36).substring(2,8)}`,u=`${c}{`,h=`}${c}`,d=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(i!==r)throw new Error("The HTML policy can only be set once.");i=t},createHTML:t=>i.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(c),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${c}:`,"")),createInterpolationPlaceholder:t=>`${u}${t}${h}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${c}:${t}--\x3e`,queueUpdate(t){a.length<1&&window.requestAnimationFrame(d.processUpdates),a.push(t)},processUpdates(){let t=0;for(;t<a.length;)if(l(a[t]),t++,t>1024){for(let e=0,n=a.length-t;e<n;e++)a[e]=a[e+t];a.length-=t,t=0}a.length=0},nextUpdate:()=>new Promise((t=>{d.queueUpdate(t)})),setAttribute(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)});function f(t){const e=this.spillover;-1===e.indexOf(t)&&e.push(t)}function p(t){const e=this.spillover,n=e.indexOf(t);-1!==n&&e.splice(n,1)}function g(t){const e=this.spillover,n=this.source;for(let a=0,r=e.length;a<r;++a)e[a].handleChange(n,t)}function m(t){return-1!==this.spillover.indexOf(t)}class b{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){this.has(t)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,t],this.subscribe=f,this.unsubscribe=p,this.notify=g,this.has=m,this.sub1=void 0,this.sub2=void 0):this.sub2=t:this.sub1=t)}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,n=this.sub2,a=this.source;void 0!==e&&e.handleChange(a,t),void 0!==n&&n.handleChange(a,t)}}class v{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const n=this.subscribers[t];void 0!==n&&n.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var n;if(e){let n=this.subscribers[e];void 0===n&&(this.subscribers[e]=n=new b(this.source)),n.subscribe(t)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new b(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var n;if(e){const n=this.subscribers[e];void 0!==n&&n.unsubscribe(t)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(t)}}const y=/(:|&&|\|\||if)/,w=new WeakMap,x=new WeakMap;let C,k=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class ${constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==C&&C.watch(t,this.name),t[this.field]}setValue(t,e){const n=this.field,a=t[n];if(a!==e){t[n]=e;const r=t[this.callback];"function"==typeof r&&r.call(t,a,e),S(t).notify(this.name)}}}const T=Object.freeze({setArrayObserverFactory(t){k=t},getNotifier(t){let e=t.$fastController||w.get(t);return void 0===e&&(Array.isArray(t)?e=k(t):w.set(t,e=new v(t))),e},track(t,e){void 0!==C&&C.watch(t,e)},trackVolatile(){void 0!==C&&(C.needsRefresh=!0)},notify(t,e){S(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new $(e)),this.getAccessors(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors(t){let e=x.get(t);if(void 0===e){let n=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==n;)e=x.get(n),n=Reflect.getPrototypeOf(n);e=void 0===e?[]:e.slice(0),x.set(t,e)}return e},binding(t,e,n=this.isVolatileBinding(t)){return new V(t,e,n)},isVolatileBinding:t=>y.test(t.toString())}),S=T.getNotifier,O=(T.trackVolatile,d.queueUpdate);function D(t,e){T.defineProperty(t,e)}let I=null;function N(t){I=t}class F{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return I}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}T.defineProperty(F.prototype,"index"),T.defineProperty(F.prototype,"length");const P=Object.seal(new F);class V extends b{constructor(t,e,n=!1){super(t,e),this.binding=t,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const n=C;C=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const a=this.binding(t,e);return C=n,a}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const n=this.last,a=S(t),r=null===n?this.first:{};if(r.propertySource=t,r.propertyName=e,r.notifier=a,a.subscribe(this,e),null!==n){if(!this.needsRefresh){let e;C=void 0,e=n.propertySource[n.propertyName],C=this,t===e&&(this.needsRefresh=!0)}n.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,O(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}class A{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function L(t){return t.map((t=>t instanceof A?L(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function E(t){return t.map((t=>t instanceof A?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}A.create=(()=>{if(d.supportsAdoptedStyleSheets){const t=new Map;return e=>new M(e,t)}return t=>new j(t)})();class M extends A{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=E(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=L(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let n=e.get(t);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(t),e.set(t,n)),n}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let R=0;class j extends A{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=E(t),this.styleSheets=L(t),this.styleClass="fast-style-class-"+ ++R}addStylesTo(t){const e=this.styleSheets,n=this.styleClass;t=this.normalizeTarget(t);for(let a=0;a<e.length;a++){const r=document.createElement("style");r.innerHTML=e[a],r.className=n,t.append(r)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let n=0,a=e.length;n<a;++n)t.removeChild(e[n]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const z={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},B={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class H{constructor(t,e,n=e.toLowerCase(),a="reflect",r){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=n,this.mode=a,this.converter=r,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===a&&void 0===r&&(this.converter=z)}setValue(t,e){const n=t[this.fieldName],a=this.converter;void 0!==a&&(e=a.fromView(e)),n!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](n,e),t.$fastController.notify(this.name))}getValue(t){return T.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,n=this.guards;n.has(t)||"fromView"===e||d.queueUpdate((()=>{n.add(t);const a=t[this.fieldName];switch(e){case"reflect":const e=this.converter;d.setAttribute(t,this.attribute,void 0!==e?e.toView(a):a);break;case"boolean":d.setBooleanAttribute(t,this.attribute,a)}n.delete(t)}))}static collect(t,...e){const n=[];e.push(t.attributes);for(let a=0,r=e.length;a<r;++a){const r=e[a];if(void 0!==r)for(let e=0,a=r.length;e<a;++e){const a=r[e];"string"==typeof a?n.push(new H(t,a)):n.push(new H(t,a.property,a.attribute,a.mode,a.converter))}}return n}}function _(t,e){let n;function a(t,e){arguments.length>1&&(n.property=e);const a=t.constructor.attributes||(t.constructor.attributes=[]);a.push(n)}return arguments.length>1?(n={},void a(t,e)):(n=void 0===t?{}:t,a)}const U={mode:"open"},q={},Y=new Map;class G{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const n=H.collect(t,e.attributes),a=new Array(n.length),r={},i={};for(let t=0,e=n.length;t<e;++t){const e=n[t];a[t]=e.attribute,r[e.name]=e,i[e.attribute]=e}this.attributes=n,this.observedAttributes=a,this.propertyLookup=r,this.attributeLookup=i,this.shadowOptions=void 0===e.shadowOptions?U:null===e.shadowOptions?void 0:Object.assign(Object.assign({},U),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?q:Object.assign(Object.assign({},q),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?A.create(e.styles):e.styles instanceof A?e.styles:A.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const t=this.attributes,n=e.prototype;for(let e=0,a=t.length;e<a;++e)T.defineProperty(n,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),Y.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return Y.get(t)}}function W(t,e,n,a){var r,i=arguments.length,o=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i<3?r(o):i>3?r(e,n,o):r(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}const X=new WeakMap,K={bubbles:!0,composed:!0,cancelable:!0};function Q(t){return t.shadowRoot||X.get(t)||null}class Z extends v{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const n=e.shadowOptions;if(void 0!==n){const e=t.attachShadow(n);"closed"===n.mode&&X.set(t,e)}const a=T.getAccessors(t);if(a.length>0){const e=this.boundObservables=Object.create(null);for(let n=0,r=a.length;n<r;++n){const r=a[n].name,i=t[r];void 0!==i&&(delete t[r],e[r]=i)}}}get isConnected(){return T.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,T.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=Q(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const n=t.behaviors;t.addStylesTo(e),null!==n&&this.addBehaviors(n)}}removeStyles(t){const e=Q(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const n=t.behaviors;t.removeStylesFrom(e),null!==n&&this.removeBehaviors(n)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),n=t.length,a=[];for(let r=0;r<n;++r){const n=t[r];e.has(n)?e.set(n,e.get(n)+1):(e.set(n,1),a.push(n))}if(this._isConnected){const t=this.element;for(let e=0;e<a.length;++e)a[e].bind(t,P)}}removeBehaviors(t,e=!1){const n=this.behaviors;if(null===n)return;const a=t.length,r=[];for(let i=0;i<a;++i){const a=t[i];if(n.has(a)){const t=n.get(a)-1;0===t||e?n.delete(a)&&r.push(a):n.set(a,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<r.length;++e)r[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,P);const e=this.behaviors;if(null!==e)for(const[n]of e)n.bind(t,P);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[n]of e)n.unbind(t)}}onAttributeChangedCallback(t,e,n){const a=this.definition.attributeLookup[t];void 0!==a&&a.onAttributeChangedCallback(this.element,n)}emit(t,e,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},K),n)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const n=Object.keys(e);for(let a=0,r=n.length;a<r;++a){const r=n[a];t[r]=e[r]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,n=Q(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||d.removeChildNodes(n),t&&(this.view=t.render(e,n,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const n=G.forType(t.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return t.$fastController=new Z(t,n)}}function J(t){return class extends t{constructor(){super(),Z.forCustomElement(this)}$emit(t,e,n){return this.$fastController.emit(t,e,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,n){this.$fastController.onAttributeChangedCallback(t,e,n)}}}const tt=Object.assign(J(HTMLElement),{from:t=>J(t),define:(t,e)=>new G(t,e).define().type}),et=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let a=et.get(n);void 0===a&&et.set(n,a=new Map),a.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=et.get(e);if(void 0!==n)return n.get(t)});class nt{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Ot(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:n,key:a}=this;return this.container=this.key=void 0,n.registerResolver(a,new gt(a,t,e))}}function at(t){const e=t.slice(),n=Object.keys(t),a=n.length;let r;for(let i=0;i<a;++i)r=n[i],Lt(r)||(e[r]=t[r]);return e}const rt=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new gt(t,1,t),transient:t=>new gt(t,2,t)}),it=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:rt.singleton})}),ot=new Map;function st(t){return e=>Reflect.getOwnMetadata(t,e)}let lt=null;const ct=Object.freeze({createContainer:t=>new Tt(null,Object.assign({},it.default,t)),findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:ct.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(kt,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||ct.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,e)=>t?t.$$container$$||new Tt(t,Object.assign({},it.default,e,{parentLocator:ct.findParentContainer})):lt||(lt=new Tt(null,Object.assign({},it.default,e,{parentLocator:()=>null}))),getDesignParamtypes:st("design:paramtypes"),getAnnotationParamtypes:st("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=ot.get(t);if(void 0===e){const n=t.inject;if(void 0===n){const n=ct.getDesignParamtypes(t),a=ct.getAnnotationParamtypes(t);if(void 0===n)if(void 0===a){const n=Object.getPrototypeOf(t);e="function"==typeof n&&n!==Function.prototype?at(ct.getDependencies(n)):[]}else e=at(a);else if(void 0===a)e=at(n);else{e=at(n);let t,r=a.length;for(let n=0;n<r;++n)t=a[n],void 0!==t&&(e[n]=t);const i=Object.keys(a);let o;r=i.length;for(let t=0;t<r;++t)o=i[t],Lt(o)||(e[o]=a[o])}}else e=at(n);ot.set(t,e)}return e},defineProperty(t,e,n,a=!1){const r=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[r];if(void 0===t){const i=this instanceof HTMLElement?ct.findResponsibleContainer(this):ct.getOrCreateDOMContainer();if(t=i.get(n),this[r]=t,a&&this instanceof tt){const a=this.$fastController,i=()=>{ct.findResponsibleContainer(this).get(n)!==this[r]&&(this[r]=t,a.notify(e))};a.subscribe({handleChange:i},"isConnected")}}return t}})},createInterface(t,e){const n="function"==typeof t?t:e,a="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||Ft,r="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),i=function(t,e,n){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);e?ct.defineProperty(t,e,i,r):ct.getOrCreateAnnotationParamTypes(t)[n]=i};return i.$isInterface=!0,i.friendlyName=null==a?"(anonymous)":a,null!=n&&(i.register=function(t,e){return n(new nt(t,null!=e?e:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...t)=>function(e,n,a){if("number"==typeof a){const n=ct.getOrCreateAnnotationParamTypes(e),r=t[0];void 0!==r&&(n[a]=r)}else if(n)ct.defineProperty(e,n,t[0]);else{const n=a?ct.getOrCreateAnnotationParamTypes(a.value):ct.getOrCreateAnnotationParamTypes(e);let r;for(let e=0;e<t.length;++e)r=t[e],void 0!==r&&(n[e]=r)}},transient:t=>(t.register=function(e){return Dt.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=dt)=>(t.register=function(e){return Dt.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),ut=ct.createInterface("Container");function ht(t){return function(e){const n=function(t,e,a){ct.inject(n)(t,e,a)};return n.$isResolver=!0,n.resolve=function(n,a){return t(e,n,a)},n}}ct.inject;const dt={scoped:!1};function ft(t,e,n){ct.inject(ft)(t,e,n)}function pt(t,e){return e.getFactory(t).construct(e)}ht(((t,e,n)=>()=>n.get(t))),ht(((t,e,n)=>n.has(t,!0)?n.get(t):void 0)),ft.$isResolver=!0,ft.resolve=()=>{},ht(((t,e,n)=>{const a=pt(t,e),r=new gt(t,0,a);return n.registerResolver(t,r),a})),ht(((t,e,n)=>pt(t,e)));class gt{constructor(t,e,n){this.key=t,this.strategy=e,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=t.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,n,a;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(a=null===(n=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===n?void 0:n.call(e,t))&&void 0!==a?a:null;default:return null}}}function mt(t){return this.get(t)}function bt(t,e){return e(t)}class vt{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let n;return n=void 0===e?new this.Type(...this.dependencies.map(mt,t)):new this.Type(...this.dependencies.map(mt,t),...e),null==this.transformers?n:this.transformers.reduce(bt,n)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const yt={$isResolver:!0,resolve:(t,e)=>e};function wt(t){return"function"==typeof t.register}function xt(t){return function(t){return wt(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const Ct=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),kt="__DI_LOCATE_PARENT__",$t=new Map;class Tt{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ut,yt),t instanceof Node&&t.addEventListener(kt,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,n,a,r,i;const o=this.context;for(let s=0,l=t.length;s<l;++s)if(e=t[s],Pt(e))if(wt(e))e.register(this,o);else if(void 0!==e.prototype)Dt.singleton(e,e).register(this);else for(n=Object.keys(e),r=0,i=n.length;r<i;++r)a=e[n[r]],Pt(a)&&(wt(a)?a.register(this,o):this.register(a));return--this.registerDepth,this}registerResolver(t,e){It(t);const n=this.resolvers,a=n.get(t);return null==a?n.set(t,e):a instanceof gt&&4===a.strategy?a.state.push(e):n.set(t,new gt(t,4,[a,e])),e}registerTransformer(t,e){const n=this.getResolver(t);if(null==n)return!1;if(n.getFactory){const t=n.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(It(t),void 0!==t.resolve)return t;let n,a=this;for(;null!=a;){if(n=a.resolvers.get(t),null!=n)return n;if(null==a.parent){const n=xt(t)?this:a;return e?this.jitRegister(t,n):null}a=a.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(It(t),t.$isResolver)return t.resolve(this,this);let e,n=this;for(;null!=n;){if(e=n.resolvers.get(t),null!=e)return e.resolve(n,this);if(null==n.parent){const a=xt(t)?this:n;return e=this.jitRegister(t,a),e.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){It(t);const a=this;let r,i=a;if(e){let e=n;for(;null!=i;)r=i.resolvers.get(t),null!=r&&(e=e.concat(Nt(r,i,a))),i=i.parent;return e}for(;null!=i;){if(r=i.resolvers.get(t),null!=r)return Nt(r,i,a);if(i=i.parent,null==i)return n}return n}getFactory(t){let e=$t.get(t);if(void 0===e){if(Vt(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);$t.set(t,e=new vt(t,ct.getDependencies(t)))}return e}registerFactory(t,e){$t.set(t,e)}createChild(t){return new Tt(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(Ct.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(wt(t)){const n=t.register(e);if(!(n instanceof Object)||null==n.resolve){const n=e.resolvers.get(t);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const n=this.config.defaultResolver(t,e);return e.resolvers.set(t,n),n}}}const St=new WeakMap;function Ot(t){return function(e,n,a){if(St.has(a))return St.get(a);const r=t(e,n,a);return St.set(a,r),r}}const Dt=Object.freeze({instance:(t,e)=>new gt(t,0,e),singleton:(t,e)=>new gt(t,1,e),transient:(t,e)=>new gt(t,2,e),callback:(t,e)=>new gt(t,3,e),cachedCallback:(t,e)=>new gt(t,3,Ot(e)),aliasTo:(t,e)=>new gt(e,5,t)});function It(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Nt(t,e,n){if(t instanceof gt&&4===t.strategy){const a=t.state;let r=a.length;const i=new Array(r);for(;r--;)i[r]=a[r].resolve(e,n);return i}return[t.resolve(e,n)]}const Ft="(anonymous)";function Pt(t){return"object"==typeof t&&null!==t||"function"==typeof t}const Vt=function(){const t=new WeakMap;let e=!1,n="",a=0;return function(r){return e=t.get(r),void 0===e&&(n=r.toString(),a=n.length,e=a>=29&&a<=100&&125===n.charCodeAt(a-1)&&n.charCodeAt(a-2)<=32&&93===n.charCodeAt(a-3)&&101===n.charCodeAt(a-4)&&100===n.charCodeAt(a-5)&&111===n.charCodeAt(a-6)&&99===n.charCodeAt(a-7)&&32===n.charCodeAt(a-8)&&101===n.charCodeAt(a-9)&&118===n.charCodeAt(a-10)&&105===n.charCodeAt(a-11)&&116===n.charCodeAt(a-12)&&97===n.charCodeAt(a-13)&&110===n.charCodeAt(a-14)&&88===n.charCodeAt(a-15),t.set(r,e)),e}}(),At={};function Lt(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=At[t];if(void 0!==e)return e;const n=t.length;if(0===n)return At[t]=!1;let a=0;for(let e=0;e<n;++e)if(a=t.charCodeAt(e),0===e&&48===a&&n>1||a<48||a>57)return At[t]=!1;return At[t]=!0}default:return!1}}function Et(t){return`${t.toLowerCase()}:presentation`}const Mt=new Map,Rt=Object.freeze({define(t,e,n){const a=Et(t);void 0===Mt.get(a)?Mt.set(a,e):Mt.set(a,!1),n.register(Dt.instance(a,e))},forTag(t,e){const n=Et(t),a=Mt.get(n);return!1===a?ct.findResponsibleContainer(e).get(n):a||null}});class jt{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?A.create(e):e instanceof A?e:A.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}class zt extends tt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Rt.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Ht(this===zt?class extends zt{}:this,t,e)}}function Bt(t,e,n){return"function"==typeof t?t(e,n):t}W([D],zt.prototype,"template",void 0),W([D],zt.prototype,"styles",void 0);class Ht{constructor(t,e,n){this.type=t,this.elementDefinition=e,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const n=this.definition,a=this.overrideDefinition,r=`${n.prefix||e.elementPrefix}-${n.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new jt(Bt(n.template,t,n),Bt(n.styles,t,n));t.definePresentation(e);let r=Bt(n.shadowOptions,t,n);t.shadowRootMode&&(r?a.shadowOptions||(r.mode=t.shadowRootMode):null!==r&&(r={mode:t.shadowRootMode})),t.defineElement({elementOptions:Bt(n.elementOptions,t,n),shadowOptions:r,attributes:Bt(n.attributes,t,n)})}})}}class _t{createCSS(){return""}createBehavior(){}}function Ut(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}const qt=document.createElement("div");class Yt{setProperty(t,e){d.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){d.queueUpdate((()=>this.target.removeProperty(t)))}}class Gt extends Yt{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Wt extends Yt{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Xt{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),T.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),d.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),d.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:n}=this.style;if(n){const t=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[t].style}else this.target=null}}W([D],Xt.prototype,"target",void 0);class Kt{constructor(t){this.target=t.style}setProperty(t,e){d.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){d.queueUpdate((()=>this.target.removeProperty(t)))}}class Qt{setProperty(t,e){Qt.properties[t]=e;for(const n of Qt.roots.values())te.getOrCreate(Qt.normalizeRoot(n)).setProperty(t,e)}removeProperty(t){delete Qt.properties[t];for(const e of Qt.roots.values())te.getOrCreate(Qt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=Qt;if(!e.has(t)){e.add(t);const n=te.getOrCreate(this.normalizeRoot(t));for(const t in Qt.properties)n.setProperty(t,Qt.properties[t])}}static unregisterRoot(t){const{roots:e}=Qt;if(e.has(t)){e.delete(t);const n=te.getOrCreate(Qt.normalizeRoot(t));for(const t in Qt.properties)n.removeProperty(t)}}static normalizeRoot(t){return t===qt?document:t}}Qt.roots=new Set,Qt.properties={};const Zt=new WeakMap,Jt=d.supportsAdoptedStyleSheets?class extends Yt{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(A.create([e]))}}:Xt,te=Object.freeze({getOrCreate(t){if(Zt.has(t))return Zt.get(t);let e;return e=t===qt?new Qt:t instanceof Document?d.supportsAdoptedStyleSheets?new Gt:new Wt:t instanceof tt?new Jt(t):new Kt(t),Zt.set(t,e),e}});class ee extends _t{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ee.uniqueId(),ee.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new ee({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return ee.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=oe.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof ee&&(e=this.alias(e)),oe.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),oe.existsFor(t)&&oe.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(qt,t),this}subscribe(t,e){const n=this.getOrCreateSubscriberSet(e);e&&!oe.existsFor(e)&&oe.getOrCreate(e),n.has(t)||n.add(t)}unsubscribe(t,e){const n=this.subscribers.get(e||this);n&&n.has(t)&&n.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}ee.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),ee.tokensById=new Map;class ne{constructor(t,e,n){this.source=t,this.token=e,this.node=n,this.dependencies=new Set,this.observer=T.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,P))}}class ae{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),T.getNotifier(this).notify(t.id))}get(t){return T.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const re=new WeakMap,ie=new WeakMap;class oe{constructor(t){this.target=t,this.store=new ae,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const n=ee.getTokenById(e);if(n&&(n.notify(this.target),ee.isCSSDesignToken(n))){const e=this.parent,a=this.isReflecting(n);if(e){const r=e.get(n),i=t.get(n);r===i||a?r===i&&a&&this.stopReflectToCSS(n):this.reflectToCSS(n)}else a||this.reflectToCSS(n)}}},re.set(t,this),T.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof tt?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return re.get(t)||new oe(t)}static existsFor(t){return re.has(t)}static findParent(t){if(qt!==t.target){let e=Ut(t.target);for(;null!==e;){if(re.has(e))return re.get(e);e=Ut(e)}return oe.getOrCreate(qt)}return null}static findClosestAssignedNode(t,e){let n=e;do{if(n.has(t))return n;n=n.parent?n.parent:n.target!==qt?oe.getOrCreate(qt):null}while(null!==n);return null}get parent(){return ie.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const n=this.getRaw(t);return void 0!==n?(this.hydrate(t,n),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=oe.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){ee.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),ee.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=oe.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&ie.get(this).removeChild(this)}appendChild(t){t.parent&&ie.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));ie.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),T.getNotifier(this.store).subscribe(t);for(const[e,n]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):n)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),T.getNotifier(this.store).unsubscribe(t),t.parent===this&&ie.delete(t)}contains(t){return function(t,e){let n=e;for(;null!==n;){if(n===t)return!0;n=Ut(n)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),oe.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),oe.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const n=ee.getTokenById(e);n&&this.hydrate(n,this.getRaw(n))}hydrate(t,e){if(!this.has(t)){const n=this.bindingObservers.get(t);ee.isDerivedDesignTokenValue(e)?n?n.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(n&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const n=new ne(e,t,this);return this.bindingObservers.set(t,n),n}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}oe.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:n}=t;this.add(e,n)}add(t,e){te.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(oe.getOrCreate(e).get(t)))}remove(t,e){te.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},W([D],oe.prototype,"children",void 0);const se=Object.freeze({create:function(t){return ee.from(t)},notifyConnection:t=>!(!t.isConnected||!oe.existsFor(t)||(oe.getOrCreate(t).bind(),0)),notifyDisconnection:t=>!(t.isConnected||!oe.existsFor(t)||(oe.getOrCreate(t).unbind(),0)),registerRoot(t=qt){Qt.registerRoot(t)},unregisterRoot(t=qt){Qt.unregisterRoot(t)}}),le=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ce=new Map,ue=new Map;let he=null;const de=ct.createInterface((t=>t.cachedCallback((t=>(null===he&&(he=new pe(null,t)),he))))),fe=Object.freeze({tagFor:t=>ue.get(t),responsibleFor(t){const e=t.$$designSystem$$;return e||ct.findResponsibleContainer(t).get(de)},getOrCreate(t){if(!t)return null===he&&(he=ct.getOrCreateDOMContainer().get(de)),he;const e=t.$$designSystem$$;if(e)return e;const n=ct.getOrCreateDOMContainer(t);if(n.has(de,!1))return n.get(de);{const e=new pe(t,n);return n.register(Dt.instance(de,e)),e}}});class pe{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>le.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,n=[],a=this.disambiguate,r=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(t,i,o){const s=function(t,e,n){return"string"==typeof t?{name:t,type:e,callback:n}:t}(t,i,o),{name:l,callback:c,baseClass:u}=s;let{type:h}=s,d=l,f=ce.get(d),p=!0;for(;f;){const t=a(d,h,f);switch(t){case le.ignoreDuplicate:return;case le.definitionCallbackOnly:p=!1,f=void 0;break;default:d=t,f=ce.get(d)}}p&&((ue.has(h)||h===zt)&&(h=class extends h{}),ce.set(d,h),ue.set(h,d),u&&ue.set(u,d)),n.push(new ge(e,d,h,r,c,p))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&se.registerRoot(this.designTokenRoot)),e.registerWithContext(i,...t);for(const t of n)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class ge{constructor(t,e,n,a,r,i){this.container=t,this.name=e,this.type=n,this.shadowRootMode=a,this.callback=r,this.willDefine=i,this.definition=null}definePresentation(t){Rt.define(this.name,t,this.container)}defineElement(t){this.definition=new G(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return fe.tagFor(t)}}function me(t,e,n,a){var r,i=arguments.length,o=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i<3?r(o):i>3?r(e,n,o):r(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}class be{}W([_({attribute:"aria-atomic",mode:"fromView"})],be.prototype,"ariaAtomic",void 0),W([_({attribute:"aria-busy",mode:"fromView"})],be.prototype,"ariaBusy",void 0),W([_({attribute:"aria-controls",mode:"fromView"})],be.prototype,"ariaControls",void 0),W([_({attribute:"aria-current",mode:"fromView"})],be.prototype,"ariaCurrent",void 0),W([_({attribute:"aria-describedby",mode:"fromView"})],be.prototype,"ariaDescribedby",void 0),W([_({attribute:"aria-details",mode:"fromView"})],be.prototype,"ariaDetails",void 0),W([_({attribute:"aria-disabled",mode:"fromView"})],be.prototype,"ariaDisabled",void 0),W([_({attribute:"aria-errormessage",mode:"fromView"})],be.prototype,"ariaErrormessage",void 0),W([_({attribute:"aria-flowto",mode:"fromView"})],be.prototype,"ariaFlowto",void 0),W([_({attribute:"aria-haspopup",mode:"fromView"})],be.prototype,"ariaHaspopup",void 0),W([_({attribute:"aria-hidden",mode:"fromView"})],be.prototype,"ariaHidden",void 0),W([_({attribute:"aria-invalid",mode:"fromView"})],be.prototype,"ariaInvalid",void 0),W([_({attribute:"aria-keyshortcuts",mode:"fromView"})],be.prototype,"ariaKeyshortcuts",void 0),W([_({attribute:"aria-label",mode:"fromView"})],be.prototype,"ariaLabel",void 0),W([_({attribute:"aria-labelledby",mode:"fromView"})],be.prototype,"ariaLabelledby",void 0),W([_({attribute:"aria-live",mode:"fromView"})],be.prototype,"ariaLive",void 0),W([_({attribute:"aria-owns",mode:"fromView"})],be.prototype,"ariaOwns",void 0),W([_({attribute:"aria-relevant",mode:"fromView"})],be.prototype,"ariaRelevant",void 0),W([_({attribute:"aria-roledescription",mode:"fromView"})],be.prototype,"ariaRoledescription",void 0);class ve{constructor(){this.targetIndex=0}}class ye extends ve{constructor(){super(...arguments),this.createPlaceholder=d.createInterpolationPlaceholder}}class we extends ve{constructor(t,e,n){super(),this.name=t,this.behavior=e,this.options=n}createPlaceholder(t){return d.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function xe(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=T.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Ce(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function ke(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function $e(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Te(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Se(t){d.setAttribute(this.target,this.targetName,t)}function Oe(t){d.setBooleanAttribute(this.target,this.targetName,t)}function De(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Ie(t){this.target[this.targetName]=t}function Ne(t){const e=this.classVersions||Object.create(null),n=this.target;let a=this.version||0;if(null!=t&&t.length){const r=t.split(/\s+/);for(let t=0,i=r.length;t<i;++t){const i=r[t];""!==i&&(e[i]=a,n.classList.add(i))}}if(this.classVersions=e,this.version=a+1,0!==a){a-=1;for(const t in e)e[t]===a&&n.classList.remove(t)}}class Fe extends ye{constructor(t){super(),this.binding=t,this.bind=xe,this.unbind=ke,this.updateTarget=Se,this.isBindingVolatile=T.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=Ie,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,n)=>d.createHTML(t(e,n))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Oe;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Ce,this.unbind=Te;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=Ne)}}targetAtContent(){this.updateTarget=De,this.unbind=$e}createBehavior(t){return new Pe(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Pe{constructor(t,e,n,a,r,i,o){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=n,this.bind=a,this.unbind=r,this.updateTarget=i,this.targetName=o}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){N(t);const e=this.binding(this.source,this.context);N(null),!0!==e&&t.preventDefault()}}let Ve=null;class Ae{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Ve=this}static borrow(t){const e=Ve||new Ae;return e.directives=t,e.reset(),Ve=null,e}}function Le(t){if(1===t.length)return t[0];let e;const n=t.length,a=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),r=new Fe(((t,e)=>{let r="";for(let i=0;i<n;++i)r+=a[i](t,e);return r}));return r.targetName=e,r}const Ee=h.length;function Me(t,e){const n=e.split(u);if(1===n.length)return null;const a=[];for(let e=0,r=n.length;e<r;++e){const r=n[e],i=r.indexOf(h);let o;if(-1===i)o=r;else{const e=parseInt(r.substring(0,i));a.push(t.directives[e]),o=r.substring(i+Ee)}""!==o&&a.push(o)}return a}function Re(t,e,n=!1){const a=e.attributes;for(let r=0,i=a.length;r<i;++r){const o=a[r],s=o.value,l=Me(t,s);let c=null;null===l?n&&(c=new Fe((()=>s)),c.targetName=o.name):c=Le(l),null!==c&&(e.removeAttributeNode(o),r--,i--,t.addFactory(c))}}function je(t,e,n){const a=Me(t,e.textContent);if(null!==a){let r=e;for(let i=0,o=a.length;i<o;++i){const o=a[i],s=0===i?e:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof o?s.textContent=o:(s.textContent=" ",t.captureContentBinding(o)),r=s,t.targetIndex++,s!==e&&n.nextNode()}t.targetIndex--}}const ze=document.createRange();class Be{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,n=this.lastChild;let a,r=this.firstChild;for(;r!==n;)a=r.nextSibling,e.insertBefore(r,t),r=a;e.insertBefore(n,t)}}remove(){const t=this.fragment,e=this.lastChild;let n,a=this.firstChild;for(;a!==e;)n=a.nextSibling,t.appendChild(a),a=n;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let n,a=this.firstChild;for(;a!==e;)n=a.nextSibling,t.removeChild(a),a=n;t.removeChild(e);const r=this.behaviors,i=this.source;for(let t=0,e=r.length;t<e;++t)r[t].unbind(i)}bind(t,e){const n=this.behaviors;if(this.source!==t)if(null!==this.source){const a=this.source;this.source=t,this.context=e;for(let r=0,i=n.length;r<i;++r){const i=n[r];i.unbind(a),i.bind(t,e)}}else{this.source=t,this.context=e;for(let a=0,r=n.length;a<r;++a)n[a].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let n=0,a=t.length;n<a;++n)t[n].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){ze.setStartBefore(t[0].firstChild),ze.setEndAfter(t[t.length-1].lastChild),ze.deleteContents();for(let e=0,n=t.length;e<n;++e){const n=t[e],a=n.behaviors,r=n.source;for(let t=0,e=a.length;t<e;++t)a[t].unbind(r)}}}}class He{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=d.createHTML(e);const n=t.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(t=n)}else t=e;const n=function(t,e){const n=t.content;document.adoptNode(n);const a=Ae.borrow(e);Re(a,t,!0);const r=a.behaviorFactories;a.reset();const i=d.createTemplateWalker(n);let o;for(;o=i.nextNode();)switch(a.targetIndex++,o.nodeType){case 1:Re(a,o);break;case 3:je(a,o,i);break;case 8:d.isMarker(o)&&a.addFactory(e[d.extractDirectiveIndexFromMarker(o)])}let s=0;(d.isMarker(n.firstChild)||1===n.childNodes.length&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),s=-1);const l=a.behaviorFactories;return a.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:r,targetOffset:s}}(t,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,a=new Array(this.behaviorCount),r=d.createTemplateWalker(e);let i=0,o=this.targetOffset,s=r.nextNode();for(let t=n.length;i<t;++i){const t=n[i],e=t.targetIndex;for(;null!==s;){if(o===e){a[i]=t.createBehavior(s);break}s=r.nextNode(),o++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let n=0,r=e.length;n<r;++n,++i)a[i]=e[n].createBehavior(t)}return new Be(e,a)}render(t,e,n){"string"==typeof e&&(e=document.getElementById(e)),void 0===n&&(n=e);const a=this.create(n);return a.bind(t,P),a.appendTo(e),a}}const _e=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ue(t,...e){const n=[];let a="";for(let r=0,i=t.length-1;r<i;++r){const i=t[r];let o=e[r];if(a+=i,o instanceof He){const t=o;o=()=>t}if("function"==typeof o&&(o=new Fe(o)),o instanceof ye){const t=_e.exec(i);null!==t&&(o.targetName=t[2])}o instanceof ve?(a+=o.createPlaceholder(n.length),n.push(o)):a+=o}return a+=t[t.length-1],new He(a,n)}class qe{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function Ye(t){return new we("fast-ref",qe,t)}class Ge{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const We=(t,e)=>Ue`
    <span
        part="end"
        ${Ye("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Ye("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Xe=(t,e)=>Ue`
    <span
        part="start"
        ${Ye("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ye("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;function Ke(t,...e){e.forEach((e=>{if(Object.getOwnPropertyNames(e.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n))})),e.attributes){const n=t.attributes||[];t.attributes=n.concat(e.attributes)}}))}var Qe;Ue`
    <span part="end" ${Ye("endContainer")}>
        <slot
            name="end"
            ${Ye("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,Ue`
    <span part="start" ${Ye("startContainer")}>
        <slot
            name="start"
            ${Ye("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`,function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(Qe||(Qe={}));const Ze="ArrowDown",Je="ArrowLeft",tn="ArrowRight",en="ArrowUp",nn={ArrowDown:Ze,ArrowLeft:Je,ArrowRight:tn,ArrowUp:en},an="form-associated-proxy",rn="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,on=new Map;function sn(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return rn}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?e.concat(Array.from(t)):e;return Object.freeze(n)}return n}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),d.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),d.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!rn)return null;let t=on.get(this);return t||(t=this.attachInternals(),on.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,n){this.elementInternals?this.elementInternals.setValidity(t,e,n):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",an),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",an)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if("Enter"===t.key&&this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}stopPropagation(t){t.stopPropagation()}};return _({mode:"boolean"})(e.prototype,"disabled"),_({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),_({attribute:"current-value"})(e.prototype,"currentValue"),_(e.prototype,"name"),_({mode:"boolean"})(e.prototype,"required"),D(e.prototype,"value"),e}class ln extends zt{}class cn extends(sn(ln)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class un extends cn{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&(null===(e=this.defaultSlottedContent)||void 0===e?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.removeEventListener("click",this.handleClick)}))}}W([_({mode:"boolean"})],un.prototype,"autofocus",void 0),W([_({attribute:"form"})],un.prototype,"formId",void 0),W([_],un.prototype,"formaction",void 0),W([_],un.prototype,"formenctype",void 0),W([_],un.prototype,"formmethod",void 0),W([_({mode:"boolean"})],un.prototype,"formnovalidate",void 0),W([_],un.prototype,"formtarget",void 0),W([_],un.prototype,"type",void 0),W([D],un.prototype,"defaultSlottedContent",void 0);class hn{}W([_({attribute:"aria-expanded",mode:"fromView"})],hn.prototype,"ariaExpanded",void 0),W([_({attribute:"aria-pressed",mode:"fromView"})],hn.prototype,"ariaPressed",void 0),Ke(hn,be),Ke(un,Ge,hn);class dn extends class{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=T.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(n),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function fn(t){return"string"==typeof t&&(t={property:t}),new we("fast-slotted",dn,t)}function pn(t,e){const n=[];let a="";const r=[];for(let i=0,o=t.length-1;i<o;++i){a+=t[i];let o=e[i];if(o instanceof _t){const t=o.createBehavior();o=o.createCSS(),t&&r.push(t)}o instanceof A||o instanceof CSSStyleSheet?(""!==a.trim()&&(n.push(a),a=""),n.push(o)):a+=o}return a+=t[t.length-1],""!==a.trim()&&n.push(a),{styles:n,behaviors:r}}function gn(t,...e){const{styles:n,behaviors:a}=pn(t,e),r=A.create(n);return a.length&&r.withBehaviors(...a),r}class mn extends _t{constructor(t,e){super(),this.behaviors=e,this.css="";const n=t.reduce(((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t)),[]);n.length&&(this.styles=A.create(n))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}const bn="not-allowed";class vn extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,n=this.constructListener(t);n.bind(e)(),e.addListener(n),this.listenerCache.set(t,n)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new vn(t,e)}constructListener(t){let e=!1;const n=this.styles;return function(){const{matches:a}=this;a&&!e?(t.$fastController.addStyles(n),e=a):!a&&e&&(t.$fastController.removeStyles(n),e=a)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const yn=vn.with(window.matchMedia("(forced-colors)"));var wn,xn;function Cn(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function kn(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function $n(t,e,n){return isNaN(t)?e:e+t*(n-e)}function Tn(t){return t*(Math.PI/180)}function Sn(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function On(t,e,n){if(t<=0)return e%360;if(t>=1)return n%360;const a=(e-n+360)%360;return a<=(n-e+360)%360?(e-a*t+360)%360:(e+a*t+360)%360}function Dn(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}vn.with(window.matchMedia("(prefers-color-scheme: dark)")),vn.with(window.matchMedia("(prefers-color-scheme: light)")),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(wn||(wn={})),function(t){t.ltr="ltr",t.rtl="rtl"}(xn||(xn={})),Math.PI;class In{constructor(t,e,n,a){this.r=t,this.g=e,this.b=n,this.a="number"!=typeof a||isNaN(a)?1:a}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new In(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round($n(this.r,0,255))},${Math.round($n(this.g,0,255))},${Math.round($n(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round($n(this.r,0,255))},${Math.round($n(this.g,0,255))},${Math.round($n(this.b,0,255))},${Cn(this.a,0,1)})`}roundToPrecision(t){return new In(Dn(this.r,t),Dn(this.g,t),Dn(this.b,t),Dn(this.a,t))}clamp(){return new In(Cn(this.r,0,1),Cn(this.g,0,1),Cn(this.b,0,1),Cn(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return function(t){const e=Math.round(Cn(t,0,255)).toString(16);return 1===e.length?"0"+e:e}($n(t,0,255))}}class Nn{constructor(t,e,n){this.h=t,this.s=e,this.l=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new Nn(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Nn(Dn(this.h,t),Dn(this.s,t),Dn(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Fn{constructor(t,e,n){this.h=t,this.s=e,this.v=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new Fn(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new Fn(Dn(this.h,t),Dn(this.s,t),Dn(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class Pn{constructor(t,e,n){this.l=t,this.a=e,this.b=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new Pn(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Pn(Dn(this.l,t),Dn(this.a,t),Dn(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Pn.epsilon=216/24389,Pn.kappa=24389/27;class Vn{constructor(t,e,n){this.l=t,this.c=e,this.h=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new Vn(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new Vn(Dn(this.l,t),Dn(this.c,t),Dn(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class An{constructor(t,e,n){this.x=t,this.y=e,this.z=n}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new An(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new An(Dn(this.x,t),Dn(this.y,t),Dn(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Ln(t){return.2126*t.r+.7152*t.g+.0722*t.b}function En(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return Ln(new In(e(t.r),e(t.g),e(t.b),1))}An.whitePoint=new An(.95047,1,1.08883);const Mn=(t,e)=>(t+.05)/(e+.05);function Rn(t,e){const n=En(t),a=En(e);return n>a?Mn(n,a):Mn(a,n)}function jn(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),a=e-n;let r=0;0!==a&&(r=e===t.r?(t.g-t.b)/a%6*60:e===t.g?60*((t.b-t.r)/a+2):60*((t.r-t.g)/a+4)),r<0&&(r+=360);const i=(e+n)/2;let o=0;return 0!==a&&(o=a/(1-Math.abs(2*i-1))),new Nn(r,o,i)}function zn(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,a=n*(1-Math.abs(t.h/60%2-1)),r=t.l-n/2;let i=0,o=0,s=0;return t.h<60?(i=n,o=a,s=0):t.h<120?(i=a,o=n,s=0):t.h<180?(i=0,o=n,s=a):t.h<240?(i=0,o=a,s=n):t.h<300?(i=a,o=0,s=n):t.h<360&&(i=n,o=0,s=a),new In(i+r,o+r,s+r,e)}function Bn(t){const e=Math.max(t.r,t.g,t.b),n=e-Math.min(t.r,t.g,t.b);let a=0;0!==n&&(a=e===t.r?(t.g-t.b)/n%6*60:e===t.g?60*((t.b-t.r)/n+2):60*((t.r-t.g)/n+4)),a<0&&(a+=360);let r=0;return 0!==e&&(r=n/e),new Fn(a,r,e)}function Hn(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const n=e(t.r),a=e(t.g),r=e(t.b);return new An(.4124564*n+.3575761*a+.1804375*r,.2126729*n+.7151522*a+.072175*r,.0193339*n+.119192*a+.9503041*r)}function _n(t,e=1){function n(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const a=n(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),r=n(-.969266*t.x+1.8760108*t.y+.041556*t.z),i=n(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new In(a,r,i,e)}function Un(t){return function(t){function e(t){return t>Pn.epsilon?Math.pow(t,1/3):(Pn.kappa*t+16)/116}const n=e(t.x/An.whitePoint.x),a=e(t.y/An.whitePoint.y),r=e(t.z/An.whitePoint.z);return new Pn(116*a-16,500*(n-a),200*(a-r))}(Hn(t))}function qn(t,e=1){return _n(function(t){const e=(t.l+16)/116,n=e+t.a/500,a=e-t.b/200,r=Math.pow(n,3),i=Math.pow(e,3),o=Math.pow(a,3);let s=0;s=r>Pn.epsilon?r:(116*n-16)/Pn.kappa;let l=0;l=t.l>Pn.epsilon*Pn.kappa?i:t.l/Pn.kappa;let c=0;return c=o>Pn.epsilon?o:(116*a-16)/Pn.kappa,s=An.whitePoint.x*s,l=An.whitePoint.y*l,c=An.whitePoint.z*c,new An(s,l,c)}(t),e)}function Yn(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=Math.atan2(t.b,t.a)*(180/Math.PI)),e<0&&(e+=360);const n=Math.sqrt(t.a*t.a+t.b*t.b);return new Vn(t.l,n,e)}(Un(t))}function Gn(t,e=1){return qn(function(t){let e=0,n=0;return 0!==t.h&&(e=Math.cos(Tn(t.h))*t.c,n=Math.sin(Tn(t.h))*t.c),new Pn(t.l,e,n)}(t),e)}function Wn(t,e,n=18){const a=Yn(t);let r=a.c+e*n;return r<0&&(r=0),Gn(new Vn(a.l,r,a.h))}function Xn(t,e){return t*e}function Kn(t,e){return new In(Xn(t.r,e.r),Xn(t.g,e.g),Xn(t.b,e.b),1)}function Qn(t,e){return Cn(t<.5?2*e*t:1-2*(1-e)*(1-t),0,1)}function Zn(t,e){return new In(Qn(t.r,e.r),Qn(t.g,e.g),Qn(t.b,e.b),1)}var Jn,ta;function ea(t,e,n,a){if(isNaN(t)||t<=0)return n;if(t>=1)return a;switch(e){case ta.HSL:return zn(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new Nn(On(t,e.h,n.h),Sn(t,e.s,n.s),Sn(t,e.l,n.l))}(t,jn(n),jn(a)));case ta.HSV:return function(t,e=1){const n=t.s*t.v,a=n*(1-Math.abs(t.h/60%2-1)),r=t.v-n;let i=0,o=0,s=0;return t.h<60?(i=n,o=a,s=0):t.h<120?(i=a,o=n,s=0):t.h<180?(i=0,o=n,s=a):t.h<240?(i=0,o=a,s=n):t.h<300?(i=a,o=0,s=n):t.h<360&&(i=n,o=0,s=a),new In(i+r,o+r,s+r,e)}(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new Fn(On(t,e.h,n.h),Sn(t,e.s,n.s),Sn(t,e.v,n.v))}(t,Bn(n),Bn(a)));case ta.XYZ:return _n(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new An(Sn(t,e.x,n.x),Sn(t,e.y,n.y),Sn(t,e.z,n.z))}(t,Hn(n),Hn(a)));case ta.LAB:return qn(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new Pn(Sn(t,e.l,n.l),Sn(t,e.a,n.a),Sn(t,e.b,n.b))}(t,Un(n),Un(a)));case ta.LCH:return Gn(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new Vn(Sn(t,e.l,n.l),Sn(t,e.c,n.c),On(t,e.h,n.h))}(t,Yn(n),Yn(a)));default:return function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new In(Sn(t,e.r,n.r),Sn(t,e.g,n.g),Sn(t,e.b,n.b),Sn(t,e.a,n.a))}(t,n,a)}}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(Jn||(Jn={})),function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(ta||(ta={}));class na{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let n=0;n<t.length;n++)0===n?e[n]={color:t[n],position:0}:n===t.length-1?e[n]={color:t[n],position:1}:e[n]={color:t[n],position:n*(1/(t.length-1))};return new na(e)}getColor(t,e=ta.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let n=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(n=e);let a=n+1;return a>=this.stops.length&&(a=this.stops.length-1),ea((t-this.stops[n].position)*(1/(this.stops[a].position-this.stops[n].position)),e,this.stops[n].color,this.stops[a].color)}trim(t,e,n=ta.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new na([{color:this.getColor(t,n),position:0}]);const a=[];for(let n=0;n<this.stops.length;n++)this.stops[n].position>=t&&this.stops[n].position<=e&&a.push(this.stops[n]);if(0===a.length)return new na([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);a[0].position!==t&&a.unshift({color:this.getColor(t),position:t}),a[a.length-1].position!==e&&a.push({color:this.getColor(e),position:e});const r=e-t,i=new Array(a.length);for(let e=0;e<a.length;e++)i[e]={color:a[e].color,position:(a[e].position-t)/r};return new na(i)}findNextColor(t,e,n=!1,a=ta.RGB,r=.005,i=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const o=this.getColor(t,a),s=n?0:1;if(Rn(o,this.getColor(s,a))<=e)return s;let l=n?0:t,c=n?t:0,u=s,h=0;for(;h<=i;){u=Math.abs(c-l)/2+l;const t=Rn(o,this.getColor(u,a));if(Math.abs(t-e)<=r)return u;t>e?n?l=u:c=u:n?c=u:l=u,h++}return u}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new na(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const n=t.position,a=e.position;return n<a?-1:n>a?1:0}))}}const aa=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function ra(t){const e=aa.exec(t);if(null===e)return null;let n=e[1];if(3===n.length){const t=n.charAt(0),e=n.charAt(1),a=n.charAt(2);n=t.concat(t,e,e,a,a)}const a=parseInt(n,16);return isNaN(a)?null:new In(kn((16711680&a)>>>16,0,255),kn((65280&a)>>>8,0,255),kn(255&a,0,255),1)}class ia{constructor(t){this.config=Object.assign({},ia.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const n in t)this.config[n]&&(this.config[n].equalValue?this.config[n].equalValue(t[n])||(this.config[n]=t[n],e=!0):t[n]!==this.config[n]&&(this.config[n]=t[n],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=jn(this.config.baseColor),e=new na([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let n=e.getColor(0),a=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(n=Wn(n,this.config.saturationLight),a=Wn(a,this.config.saturationDark)),0!==this.config.multiplyLight){const t=Kn(this.config.baseColor,n);n=ea(this.config.multiplyLight,this.config.interpolationMode,n,t)}if(0!==this.config.multiplyDark){const t=Kn(this.config.baseColor,a);a=ea(this.config.multiplyDark,this.config.interpolationMode,a,t)}if(0!==this.config.overlayLight){const t=Zn(this.config.baseColor,n);n=ea(this.config.overlayLight,this.config.interpolationMode,n,t)}if(0!==this.config.overlayDark){const t=Zn(this.config.baseColor,a);a=ea(this.config.overlayDark,this.config.interpolationMode,a,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new na([{position:0,color:this.config.baseColor},{position:1,color:a.clamp()}]):this.config.baseScalePosition>=1?new na([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new na([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:a.clamp()}]):new na([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:a.clamp()}])}}ia.defaultPaletteConfig={baseColor:ra("#808080"),steps:11,interpolationMode:ta.RGB,scaleColorLight:new In(1,1,1,1),scaleColorDark:new In(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},ia.greyscalePaletteConfig={baseColor:ra("#808080"),steps:11,interpolationMode:ta.RGB,scaleColorLight:new In(1,1,1,1),scaleColorDark:new In(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},ia.defaultPaletteConfig.scaleColorLight,ia.defaultPaletteConfig.scaleColorDark;class oa{constructor(t){this.palette=[],this.config=Object.assign({},oa.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,n=new In(e,e,e,1),a=new ia(Object.assign(Object.assign({},ia.greyscalePaletteConfig),{baseColor:n,baseScalePosition:86/94,steps:t})).palette,r=(Ln(this.config.baseColor)+jn(this.config.baseColor).l)/2,i=this.matchRelativeLuminanceIndex(r,a)/(t-1),o=this.matchRelativeLuminanceIndex(e,a)/(t-1),s=jn(this.config.baseColor),l=zn(Nn.fromObject({h:s.h,s:s.s,l:e})),c=zn(Nn.fromObject({h:s.h,s:s.s,l:.06})),u=new Array(5);u[0]={position:0,color:new In(1,1,1,1)},u[1]={position:i,color:this.config.baseColor},u[2]={position:o,color:l},u[3]={position:.99,color:c},u[4]={position:1,color:new In(0,0,0,1)};const h=new na(u);this.palette=new Array(t);for(let e=0;e<t;e++){const n=h.getColor(e/(t-1),ta.RGB);this.palette[e]=n}}matchRelativeLuminanceIndex(t,e){let n=Number.MAX_VALUE,a=0,r=0;const i=e.length;for(;r<i;r++){const i=Math.abs(Ln(e[r])-t);i<n&&(n=i,a=r)}return a}}function sa(t,e){const n=t.relativeLuminance>e.relativeLuminance?t:e,a=t.relativeLuminance>e.relativeLuminance?e:t;return(n.relativeLuminance+.05)/(a.relativeLuminance+.05)}oa.defaultPaletteConfig={baseColor:ra("#808080"),steps:94};const la=Object.freeze({create:(t,e,n)=>new ca(t,e,n),from:t=>new ca(t.r,t.g,t.b)});class ca extends In{constructor(t,e,n){super(t,e,n,1),this.toColorString=this.toStringHexRGB,this.contrast=sa.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=En(this)}static fromObject(t){return new ca(t.r,t.g,t.b)}}function ua(t,e,n=0,a=t.length-1){if(a===n)return t[n];const r=Math.floor((a-n)/2)+n;return e(t[r])?ua(t,e,n,r):ua(t,e,r+1,a)}const ha=(-.1+Math.sqrt(.21))/2;function da(t){return function(t){return t.relativeLuminance<=ha}(t)?-1:1}const fa=Object.freeze({create:function(t,e,n){return"number"==typeof t?fa.from(la.create(t,e,n)):fa.from(t)},from:function(t){return function(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const n in e)if(typeof e[n]!=typeof t[n])return!1;return!0}(t)?pa.from(t):pa.from(la.create(t.r,t.g,t.b))}});class pa{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,n,a){void 0===n&&(n=this.closestIndexOf(t));let r=this.swatches;const i=this.lastIndex;let o=n;return void 0===a&&(a=da(t)),-1===a&&(r=this.reversedSwatches,o=i-o),ua(r,(n=>sa(t,n)>=e),o,i)}get(t){return this.swatches[t]||this.swatches[Cn(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const n=this.swatches.reduce(((e,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?n:e));return e=this.swatches.indexOf(n),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new pa(t,Object.freeze(new oa({baseColor:In.fromObject(t)}).palette.map((t=>{const e=ra(t.toStringHexRGB());return la.create(e.r,e.g,e.b)}))))}}const ga=la.create(1,1,1),ma=la.create(0,0,0),ba=la.create(.5,.5,.5),va=ra("#DA1A5F"),ya=la.create(va.r,va.g,va.b);function wa(t){return la.create(t,t,t)}var xa;function Ca(t,e,n,a,r,i){return Math.max(t.closestIndexOf(wa(e))+n,a,r,i)}!function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(xa||(xa={}));const{create:ka}=se,$a=ka("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),Ta=ka("base-height-multiplier").withDefault(10),Sa=(ka("base-horizontal-spacing-multiplier").withDefault(3),ka("base-layer-luminance").withDefault(xa.DarkMode)),Oa=ka("control-corner-radius").withDefault(4),Da=ka("density").withDefault(0),Ia=ka("design-unit").withDefault(4),Na=(ka("direction").withDefault(xn.ltr),ka("disabled-opacity").withDefault(.3)),Fa=ka("stroke-width").withDefault(1),Pa=ka("focus-stroke-width").withDefault(2),Va=ka("type-ramp-base-font-size").withDefault("14px"),Aa=ka("type-ramp-base-line-height").withDefault("20px"),La=(ka("type-ramp-minus-1-font-size").withDefault("12px"),ka("type-ramp-minus-1-line-height").withDefault("16px"),ka("type-ramp-minus-2-font-size").withDefault("10px"),ka("type-ramp-minus-2-line-height").withDefault("16px"),ka("type-ramp-plus-1-font-size").withDefault("16px"),ka("type-ramp-plus-1-line-height").withDefault("24px"),ka("type-ramp-plus-2-font-size").withDefault("20px"),ka("type-ramp-plus-2-line-height").withDefault("28px"),ka("type-ramp-plus-3-font-size").withDefault("28px"),ka("type-ramp-plus-3-line-height").withDefault("36px"),ka("type-ramp-plus-4-font-size").withDefault("34px"),ka("type-ramp-plus-4-line-height").withDefault("44px"),ka("type-ramp-plus-5-font-size").withDefault("46px"),ka("type-ramp-plus-5-line-height").withDefault("56px"),ka("type-ramp-plus-6-font-size").withDefault("60px"),ka("type-ramp-plus-6-line-height").withDefault("72px"),ka("accent-fill-rest-delta").withDefault(0),ka("accent-fill-hover-delta").withDefault(4)),Ea=ka("accent-fill-active-delta").withDefault(-5),Ma=ka("accent-fill-focus-delta").withDefault(0),Ra=ka("accent-foreground-rest-delta").withDefault(0),ja=ka("accent-foreground-hover-delta").withDefault(6),za=ka("accent-foreground-active-delta").withDefault(-4),Ba=ka("accent-foreground-focus-delta").withDefault(0),Ha=ka("neutral-fill-rest-delta").withDefault(7),_a=ka("neutral-fill-hover-delta").withDefault(10),Ua=ka("neutral-fill-active-delta").withDefault(5),qa=ka("neutral-fill-focus-delta").withDefault(0),Ya=ka("neutral-fill-input-rest-delta").withDefault(0),Ga=ka("neutral-fill-input-hover-delta").withDefault(0),Wa=ka("neutral-fill-input-active-delta").withDefault(0),Xa=ka("neutral-fill-input-focus-delta").withDefault(0),Ka=ka("neutral-fill-stealth-rest-delta").withDefault(0),Qa=ka("neutral-fill-stealth-hover-delta").withDefault(5),Za=ka("neutral-fill-stealth-active-delta").withDefault(3),Ja=ka("neutral-fill-stealth-focus-delta").withDefault(0),tr=ka("neutral-fill-strong-rest-delta").withDefault(0),er=ka("neutral-fill-strong-hover-delta").withDefault(8),nr=ka("neutral-fill-strong-active-delta").withDefault(-5),ar=ka("neutral-fill-strong-focus-delta").withDefault(0),rr=ka("neutral-fill-layer-rest-delta").withDefault(3),ir=ka("neutral-stroke-rest-delta").withDefault(25),or=ka("neutral-stroke-hover-delta").withDefault(40),sr=ka("neutral-stroke-active-delta").withDefault(16),lr=ka("neutral-stroke-focus-delta").withDefault(25),cr=ka("neutral-stroke-divider-rest-delta").withDefault(8),ur=ka({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(fa.create(ba)),hr=ka({name:"accent-palette",cssCustomPropertyName:null}).withDefault(fa.create(ya)),dr=ka({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ur.getValueFor(t),n=Sa.getValueFor(t),a=rr.getValueFor(t),e.get(e.closestIndexOf(wa(n))+a);var e,n,a}}),fr=(ka("neutral-layer-card-container").withDefault((t=>dr.getValueFor(t).evaluate(t))),ka({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n){const a=t.closestIndexOf(wa(e))-n;return t.get(a-n)}(ur.getValueFor(t),Sa.getValueFor(t),rr.getValueFor(t))})),pr=(ka("neutral-layer-floating").withDefault((t=>fr.getValueFor(t).evaluate(t))),ka({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.get(t.closestIndexOf(wa(e)))}(ur.getValueFor(t),Sa.getValueFor(t))})),gr=ka("neutral-layer-1").withDefault((t=>pr.getValueFor(t).evaluate(t))),mr=ka({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ur.getValueFor(t),n=Sa.getValueFor(t),a=rr.getValueFor(t),r=Ha.getValueFor(t),i=_a.getValueFor(t),o=Ua.getValueFor(t),e.get(Ca(e,n,a,r,i,o));var e,n,a,r,i,o}}),br=(ka("neutral-layer-2").withDefault((t=>mr.getValueFor(t).evaluate(t))),ka({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ur.getValueFor(t),n=Sa.getValueFor(t),a=rr.getValueFor(t),r=Ha.getValueFor(t),i=_a.getValueFor(t),o=Ua.getValueFor(t),e.get(Ca(e,n,a,r,i,o)+a);var e,n,a,r,i,o}})),vr=(ka("neutral-layer-3").withDefault((t=>br.getValueFor(t).evaluate(t))),ka({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ur.getValueFor(t),n=Sa.getValueFor(t),a=rr.getValueFor(t),r=Ha.getValueFor(t),i=_a.getValueFor(t),o=Ua.getValueFor(t),e.get(Ca(e,n,a,r,i,o)+2*a);var e,n,a,r,i,o}})),yr=(ka("neutral-layer-4").withDefault((t=>vr.getValueFor(t).evaluate(t))),ka("fill-color").withDefault((t=>gr.getValueFor(t))));var wr;!function(t){t[t.normal=4.5]="normal",t[t.large=7]="large"}(wr||(wr={}));const xr=ka({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,a,r,i,o,s,l){const c=t.source,u=e.closestIndexOf(n)>=Math.max(o,s,l)?-1:1,h=t.closestIndexOf(c),d=h+-1*u*a,f=d+u*r,p=d+u*i;return{rest:t.get(d),hover:t.get(h),active:t.get(f),focus:t.get(p)}}(hr.getValueFor(t),ur.getValueFor(t),e||yr.getValueFor(t),La.getValueFor(t),Ea.getValueFor(t),Ma.getValueFor(t),Ha.getValueFor(t),_a.getValueFor(t),Ua.getValueFor(t))}),Cr=ka("accent-fill-rest").withDefault((t=>xr.getValueFor(t).evaluate(t).rest)),kr=ka("accent-fill-hover").withDefault((t=>xr.getValueFor(t).evaluate(t).hover)),$r=ka("accent-fill-active").withDefault((t=>xr.getValueFor(t).evaluate(t).active)),Tr=ka("accent-fill-focus").withDefault((t=>xr.getValueFor(t).evaluate(t).focus)),Sr=t=>(e,n)=>function(t,e){return t.contrast(ga)>=e?ga:ma}(n||Cr.getValueFor(e),t),Or=ka({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Sr(wr.normal)(t,e)}),Dr=ka("foreground-on-accent-rest").withDefault((t=>Or.getValueFor(t).evaluate(t,Cr.getValueFor(t)))),Ir=ka("foreground-on-accent-hover").withDefault((t=>Or.getValueFor(t).evaluate(t,kr.getValueFor(t)))),Nr=ka("foreground-on-accent-active").withDefault((t=>Or.getValueFor(t).evaluate(t,$r.getValueFor(t)))),Fr=(ka("foreground-on-accent-focus").withDefault((t=>Or.getValueFor(t).evaluate(t,Tr.getValueFor(t)))),ka({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Sr(wr.large)(t,e)})),Pr=(ka("foreground-on-accent-rest-large").withDefault((t=>Fr.getValueFor(t).evaluate(t,Cr.getValueFor(t)))),ka("foreground-on-accent-hover-large").withDefault((t=>Fr.getValueFor(t).evaluate(t,kr.getValueFor(t)))),ka("foreground-on-accent-active-large").withDefault((t=>Fr.getValueFor(t).evaluate(t,$r.getValueFor(t)))),ka("foreground-on-accent-focus-large").withDefault((t=>Fr.getValueFor(t).evaluate(t,Tr.getValueFor(t)))),t=>(e,n)=>function(t,e,n,a,r,i,o){const s=t.source,l=t.closestIndexOf(s),c=da(e),u=l+(1===c?Math.min(a,r):Math.max(c*a,c*r)),h=t.colorContrast(e,n,u,c),d=t.closestIndexOf(h),f=d+c*Math.abs(a-r);let p,g;return(1===c?a<r:c*a>c*r)?(p=d,g=f):(p=f,g=d),{rest:t.get(p),hover:t.get(g),active:t.get(p+c*i),focus:t.get(p+c*o)}}(hr.getValueFor(e),n||yr.getValueFor(e),t,Ra.getValueFor(e),ja.getValueFor(e),za.getValueFor(e),Ba.getValueFor(e))),Vr=ka({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Pr(wr.normal)(t,e)}),Ar=ka("accent-foreground-rest").withDefault((t=>Vr.getValueFor(t).evaluate(t).rest)),Lr=ka("accent-foreground-hover").withDefault((t=>Vr.getValueFor(t).evaluate(t).hover)),Er=ka("accent-foreground-active").withDefault((t=>Vr.getValueFor(t).evaluate(t).active)),Mr=(ka("accent-foreground-focus").withDefault((t=>Vr.getValueFor(t).evaluate(t).focus)),ka({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,a,r,i){const o=t.closestIndexOf(e),s=o>=Math.max(n,a,r,i)?-1:1;return{rest:t.get(o+s*n),hover:t.get(o+s*a),active:t.get(o+s*r),focus:t.get(o+s*i)}}(ur.getValueFor(t),e||yr.getValueFor(t),Ha.getValueFor(t),_a.getValueFor(t),Ua.getValueFor(t),qa.getValueFor(t))})),Rr=ka("neutral-fill-rest").withDefault((t=>Mr.getValueFor(t).evaluate(t).rest)),jr=ka("neutral-fill-hover").withDefault((t=>Mr.getValueFor(t).evaluate(t).hover)),zr=ka("neutral-fill-active").withDefault((t=>Mr.getValueFor(t).evaluate(t).active)),Br=(ka("neutral-fill-focus").withDefault((t=>Mr.getValueFor(t).evaluate(t).focus)),ka({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,a,r,i){const o=da(e),s=t.closestIndexOf(e);return{rest:t.get(s-o*n),hover:t.get(s-o*a),active:t.get(s-o*r),focus:t.get(s-o*i)}}(ur.getValueFor(t),e||yr.getValueFor(t),Ya.getValueFor(t),Ga.getValueFor(t),Wa.getValueFor(t),Xa.getValueFor(t))})),Hr=ka("neutral-fill-input-rest").withDefault((t=>Br.getValueFor(t).evaluate(t).rest)),_r=ka("neutral-fill-input-hover").withDefault((t=>Br.getValueFor(t).evaluate(t).hover)),Ur=(ka("neutral-fill-input-active").withDefault((t=>Br.getValueFor(t).evaluate(t).active)),ka("neutral-fill-input-focus").withDefault((t=>Br.getValueFor(t).evaluate(t).focus)),ka({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,a,r,i,o,s,l,c){const u=Math.max(n,a,r,i,o,s,l,c),h=t.closestIndexOf(e),d=h>=u?-1:1;return{rest:t.get(h+d*n),hover:t.get(h+d*a),active:t.get(h+d*r),focus:t.get(h+d*i)}}(ur.getValueFor(t),e||yr.getValueFor(t),Ka.getValueFor(t),Qa.getValueFor(t),Za.getValueFor(t),Ja.getValueFor(t),Ha.getValueFor(t),_a.getValueFor(t),Ua.getValueFor(t),qa.getValueFor(t))})),qr=ka("neutral-fill-stealth-rest").withDefault((t=>Ur.getValueFor(t).evaluate(t).rest)),Yr=ka("neutral-fill-stealth-hover").withDefault((t=>Ur.getValueFor(t).evaluate(t).hover)),Gr=ka("neutral-fill-stealth-active").withDefault((t=>Ur.getValueFor(t).evaluate(t).active)),Wr=(ka("neutral-fill-stealth-focus").withDefault((t=>Ur.getValueFor(t).evaluate(t).focus)),ka({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,a,r,i){const o=da(e),s=t.closestIndexOf(t.colorContrast(e,4.5)),l=s+o*Math.abs(n-a);let c,u;return(1===o?n<a:o*n>o*a)?(c=s,u=l):(c=l,u=s),{rest:t.get(c),hover:t.get(u),active:t.get(c+o*r),focus:t.get(c+o*i)}}(ur.getValueFor(t),e||yr.getValueFor(t),tr.getValueFor(t),er.getValueFor(t),nr.getValueFor(t),ar.getValueFor(t))})),Xr=(ka("neutral-fill-strong-rest").withDefault((t=>Wr.getValueFor(t).evaluate(t).rest)),ka("neutral-fill-strong-hover").withDefault((t=>Wr.getValueFor(t).evaluate(t).hover)),ka("neutral-fill-strong-active").withDefault((t=>Wr.getValueFor(t).evaluate(t).active)),ka("neutral-fill-strong-focus").withDefault((t=>Wr.getValueFor(t).evaluate(t).focus)),ka({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n){const a=t.closestIndexOf(e);return t.get(a-(a<n?-1*n:n))}(ur.getValueFor(t),e||yr.getValueFor(t),rr.getValueFor(t))})),Kr=(ka("neutral-fill-layer-rest").withDefault((t=>Xr.getValueFor(t).evaluate(t))),ka({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ur.getValueFor(t),n=yr.getValueFor(t),e.colorContrast(n,3.5);var e,n}})),Qr=ka("focus-stroke-outer").withDefault((t=>Kr.getValueFor(t).evaluate(t))),Zr=ka({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=hr.getValueFor(t),n=yr.getValueFor(t),a=Qr.getValueFor(t),e.colorContrast(a,3.5,e.closestIndexOf(e.source),-1*da(n));var e,n,a}}),Jr=ka("focus-stroke-inner").withDefault((t=>Zr.getValueFor(t).evaluate(t))),ti=ka({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ur.getValueFor(t),n=yr.getValueFor(t),e.colorContrast(n,4.5);var e,n}}),ei=ka("neutral-foreground-hint").withDefault((t=>ti.getValueFor(t).evaluate(t))),ni=ka({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>{return e=ur.getValueFor(t),n=yr.getValueFor(t),e.colorContrast(n,14);var e,n}}),ai=ka("neutral-foreground-rest").withDefault((t=>ni.getValueFor(t).evaluate(t))),ri=ka({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n,a,r,i){const o=t.closestIndexOf(e),s=da(e),l=o+s*n,c=l+s*(a-n),u=l+s*(r-n),h=l+s*(i-n);return{rest:t.get(l),hover:t.get(c),active:t.get(u),focus:t.get(h)}}(ur.getValueFor(t),yr.getValueFor(t),ir.getValueFor(t),or.getValueFor(t),sr.getValueFor(t),lr.getValueFor(t))}),ii=ka("neutral-stroke-rest").withDefault((t=>ri.getValueFor(t).evaluate(t).rest)),oi=(ka("neutral-stroke-hover").withDefault((t=>ri.getValueFor(t).evaluate(t).hover)),ka("neutral-stroke-active").withDefault((t=>ri.getValueFor(t).evaluate(t).active)),ka("neutral-stroke-focus").withDefault((t=>ri.getValueFor(t).evaluate(t).focus))),si=ka({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n){return t.get(t.closestIndexOf(e)+da(e)*n)}(ur.getValueFor(t),e||yr.getValueFor(t),cr.getValueFor(t))}),li=ka("neutral-stroke-divider-rest").withDefault((t=>si.getValueFor(t).evaluate(t)));function ci(t){return`:host([hidden]){display:none}:host{display:${t}}`}let ui;const hi=function(){if("boolean"==typeof ui)return ui;if("undefined"==typeof window||!window.document||!window.document.createElement)return ui=!1,ui;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),ui=!0}catch(t){ui=!1}finally{document.head.removeChild(t)}return ui}()?"focus-visible":"focus",di=(function(t,...e){const{styles:n,behaviors:a}=pn(t,e);return new mn(n,a)})`(${Ta} + ${Da}) * ${Ia}`,fi=gn`
    ${ci("inline-flex")} :host {
        font-family: ${$a};
        outline: none;
        font-size: ${Va};
        line-height: ${Aa};
        height: calc(${di} * 1px);
        min-width: calc(${di} * 1px);
        background-color: ${Rr};
        color: ${ai};
        border-radius: calc(${Oa} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (${Ia} * 2 * ${Da})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${Fa} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${jr};
    }

    :host(:active) {
        background-color: ${zr};
    }

    .control:${hi} {
        border-color: ${Qr};
        box-shadow: 0 0 0 calc((${Pa} - ${Fa}) * 1px) ${Qr} inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(yn(gn`
            :host .control {
              background-color: ${wn.ButtonFace};
              border-color: ${wn.ButtonText};
              color: ${wn.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${wn.Highlight};
              color: ${wn.HighlightText};
            }

            .control:${hi} {
              forced-color-adjust: none;
              background-color: ${wn.Highlight};
              border-color: ${wn.ButtonText};
              box-shadow: 0 0 0 calc((${Pa} - ${Fa}) * 1px) ${wn.ButtonText} inset;
              color: ${wn.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${wn.ButtonText};
            }

            :host([href]) .control {
                border-color: ${wn.LinkText};
                color: ${wn.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${hi}{
              forced-color-adjust: none;
              background: ${wn.ButtonFace};
              border-color: ${wn.LinkText};
              box-shadow: 0 0 0 1px ${wn.LinkText} inset;
              color: ${wn.LinkText};
              fill: currentColor;
            }
        `)),pi=gn`
    :host([appearance="accent"]) {
        background: ${Cr};
        color: ${Dr};
    }

    :host([appearance="accent"]:hover) {
        background: ${kr};
        color: ${Ir};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${$r};
        color: ${Nr};
    }

    :host([appearance="accent"]) .control:${hi} {
        box-shadow: 0 0 0 calc((${Pa} - ${Fa}) * 1px) ${Qr} inset,
            0 0 0 calc((${Pa} + ${Fa}) * 1px) ${Jr} inset;
    }
`.withBehaviors(yn(gn`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${wn.Highlight};
                color: ${wn.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${wn.HighlightText};
                border-color: ${wn.Highlight};
                color: ${wn.Highlight};
            }

            :host([appearance="accent"]) .control:${hi} {
                border-color: ${wn.Highlight};
                box-shadow: 0 0 0 calc(${Pa} * 1px) ${wn.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${wn.LinkText};
                color: ${wn.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${wn.ButtonFace};
                border-color: ${wn.LinkText};
                box-shadow: none;
                color: ${wn.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${hi} {
                border-color: ${wn.LinkText};
                box-shadow: 0 0 0 calc(${Pa} * 1px) ${wn.HighlightText} inset;
            }
        `)),gi=(gn`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${Ar};
        border-bottom: calc(${Fa} * 1px) solid ${Ar};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${Lr};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Er};
    }

    :host([appearance="hypertext"]) .control:${hi} {
        border-bottom: calc(${Pa} * 1px) solid ${Qr};
        margin-bottom: calc(calc(${Fa} - ${Pa}) * 1px);
    }
`.withBehaviors(yn(gn`
            :host([appearance="hypertext"]:hover) {
                background-color: ${wn.ButtonFace};
                color: ${wn.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${hi} {
                color: ${wn.LinkText};
                border-bottom-color: ${wn.LinkText};
                box-shadow: none;
            }
        `)),gn`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${Ar};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${Lr};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Er};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${Fa} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${Lr};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Er};
    }

    :host([appearance="lightweight"]) .control:${hi} .content::before {
        background: ${ai};
        height: calc(${Pa} * 1px);
    }
`.withBehaviors(yn(gn`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${hi} {
                forced-color-adjust: none;
                background: ${wn.ButtonFace};
                color: ${wn.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${hi} .content::before {
                background: ${wn.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${hi} {
                background: ${wn.ButtonFace};
                box-shadow: none;
                color: ${wn.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${hi} .content::before {
                background: ${wn.LinkText};
            }
        `))),mi=gn`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${Cr};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${kr};
    }

    :host([appearance="outline"]:active) {
        border-color: ${$r};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${hi} {
        box-shadow: 0 0 0 calc((${Pa} - ${Fa}) * 1px) ${Qr} inset;
        border-color: ${Qr};
    }
`.withBehaviors(yn(gn`
            :host([appearance="outline"]) .control {
                border-color: ${wn.ButtonText};
            }
            :host([appearance="outline"]) .control:${hi} {
              forced-color-adjust: none;
              background-color: ${wn.Highlight};
              border-color: ${wn.ButtonText};
              box-shadow: 0 0 0 calc((${Pa} - ${Fa}) * 1px) ${wn.ButtonText} inset;
              color: ${wn.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${wn.ButtonFace};
                border-color: ${wn.LinkText};
                color: ${wn.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${hi} {
              forced-color-adjust: none;
              border-color: ${wn.LinkText};
              box-shadow: 0 0 0 1px ${wn.LinkText} inset;
            }
        `)),bi=gn`
    :host([appearance="stealth"]) {
        background: ${qr};
    }

    :host([appearance="stealth"]:hover) {
        background: ${Yr};
    }

    :host([appearance="stealth"]:active) {
        background: ${Gr};
    }
`.withBehaviors(yn(gn`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${wn.ButtonFace};
                border-color: transparent;
                color: ${wn.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${wn.Highlight};
                border-color: ${wn.Highlight};
                color: ${wn.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${hi}) .control {
                background: ${wn.Highlight};
                box-shadow: 0 0 0 1px ${wn.Highlight};
                color: ${wn.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${wn.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${hi}) .control {
                background: ${wn.LinkText};
                border-color: ${wn.LinkText};
                color: ${wn.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${hi}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${wn.LinkText};
            }
        `));class vi{constructor(t,e,n){this.propertyName=t,this.value=e,this.styles=n}bind(t){T.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){T.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}function yi(t,e){return new vi("appearance",t,e)}class wi extends un{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(t,e){const n=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===n.length&&n[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}me([_],wi.prototype,"appearance",void 0);const xi=wi.compose({baseName:"button",baseClass:un,template:(t,e)=>Ue`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Ye("control")}
    >
        ${Xe(0,e)}
        <span class="content" part="content">
            <slot ${fn("defaultSlottedContent")}></slot>
        </span>
        ${We(0,e)}
    </button>
`,styles:(t,e)=>gn`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${Na};
            background-color: ${Rr};
            cursor: ${bn};
        }

        ${fi}
    `.withBehaviors(yn(gn`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${wn.ButtonFace};
                    border-color: ${wn.GrayText};
                    color: ${wn.GrayText};
                    cursor: ${bn};
                    opacity: 1;
                }
            `),yi("accent",gn`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${Cr};
                }

                ${pi}
            `.withBehaviors(yn(gn`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${wn.ButtonFace};
                            border-color: ${wn.GrayText};
                            color: ${wn.GrayText};
                        }
                    `))),yi("lightweight",gn`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${Ar};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${gi}
            `.withBehaviors(yn(gn`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${wn.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),yi("outline",gn`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${Cr};
                }

                ${mi}
            `.withBehaviors(yn(gn`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${wn.GrayText};
                        }
                    `))),yi("stealth",gn`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${qr};
                }

                ${bi}
            `.withBehaviors(yn(gn`
                        :host([appearance="stealth"][disabled]) {
                            background: ${wn.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${wn.ButtonFace};
                            border-color: transparent;
                            color: ${wn.GrayText};
                        }
                    `)))),shadowOptions:{delegatesFocus:!0}});class Ci extends zt{}class ki extends(sn(Ci)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var $i;!function(t){t.email="email",t.password="password",t.tel="tel",t.text="text",t.url="url"}($i||($i={}));class Ti extends ki{constructor(){super(...arguments),this.type=$i.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&d.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}W([_({attribute:"readonly",mode:"boolean"})],Ti.prototype,"readOnly",void 0),W([_({mode:"boolean"})],Ti.prototype,"autofocus",void 0),W([_],Ti.prototype,"placeholder",void 0),W([_],Ti.prototype,"type",void 0),W([_],Ti.prototype,"list",void 0),W([_({converter:B})],Ti.prototype,"maxlength",void 0),W([_({converter:B})],Ti.prototype,"minlength",void 0),W([_],Ti.prototype,"pattern",void 0),W([_({converter:B})],Ti.prototype,"size",void 0),W([_({mode:"boolean"})],Ti.prototype,"spellcheck",void 0),W([D],Ti.prototype,"defaultSlottedNodes",void 0);class Si{}Ke(Si,be),Ke(Ti,Ge,Si);class Oi extends zt{}class Di extends(sn(Oi)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ii extends Di{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var n;this.max=Math.max(e,null!==(n=this.min)&&void 0!==n?n:e);const a=Math.min(this.min,this.max);void 0!==this.min&&this.min!==a&&(this.min=a),this.value=this.getValidValue(this.value)}minChanged(t,e){var n;this.min=Math.min(e,null!==(n=this.max)&&void 0!==n?n:e);const a=Math.max(this.min,this.max);void 0!==this.max&&this.max!==a&&(this.max=a),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),void 0===t||this.isUserInput||(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}getValidValue(t){var e,n;let a=parseFloat(parseFloat(t).toPrecision(12));return isNaN(a)?a="":(a=Math.min(a,null!==(e=this.max)&&void 0!==e?e:a),a=Math.max(a,null!==(n=this.min)&&void 0!==n?n:a).toString()),a}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&d.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case en:return this.stepUp(),!1;case Ze:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}function Ni(t,e){const n="function"==typeof e?e:()=>e;return(e,a)=>t(e,a)?n(e,a):null}W([_({attribute:"readonly",mode:"boolean"})],Ii.prototype,"readOnly",void 0),W([_({mode:"boolean"})],Ii.prototype,"autofocus",void 0),W([_({attribute:"hide-step",mode:"boolean"})],Ii.prototype,"hideStep",void 0),W([_],Ii.prototype,"placeholder",void 0),W([_],Ii.prototype,"list",void 0),W([_({converter:B})],Ii.prototype,"maxlength",void 0),W([_({converter:B})],Ii.prototype,"minlength",void 0),W([_({converter:B})],Ii.prototype,"size",void 0),W([_({converter:B})],Ii.prototype,"step",void 0),W([_({converter:B})],Ii.prototype,"max",void 0),W([_({converter:B})],Ii.prototype,"min",void 0),W([D],Ii.prototype,"defaultSlottedNodes",void 0),Ke(Ii,Ge,Si);class Fi extends Ii{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}me([_],Fi.prototype,"appearance",void 0);const Pi=Fi.compose({baseName:"number-field",baseClass:Ii,styles:(t,e)=>gn`
    ${ci("inline-block")} :host {
        font-family: ${$a};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${ai};
        background: ${Hr};
        border-radius: calc(${Oa} * 1px);
        border: calc(${Fa} * 1px) solid ${Cr};
        height: calc(${di} * 1px);
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(${Ia} * 2px + 1px);
        font-size: ${Va};
        line-height: ${Aa};
    }

    .control:hover,
    .control:${hi},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .controls {
        opacity: 0;
    }

    .label {
        display: block;
        color: ${ai};
        cursor: pointer;
        font-size: ${Va};
        line-height: ${Aa};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .start,
    .end {
        margin: auto;
        fill: currentcolor;
    }

    .step-up-glyph,
    .step-down-glyph {
        display: block;
        padding: 4px 10px;
        cursor: pointer;
    }

    .step-up-glyph:before,
    .step-down-glyph:before {
        content: '';
        display: block;
        border: solid transparent 6px;
    }

    .step-up-glyph:before {
        border-bottom-color: ${ai};
    }

    .step-down-glyph:before {
        border-top-color: ${ai};
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not([disabled])) .root {
        background: ${_r};
        border-color: ${kr};
    }

    :host(:active:not([disabled])) .root {
        background: ${_r};
        border-color: ${$r};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${Qr};
        box-shadow: 0 0 0 1px ${Qr} inset;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
        opacity: 1;
    }

    :host([appearance="filled"]) .root {
        background: ${Rr};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${jr};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${bn};
    }

    :host([disabled]) {
        opacity: ${Na};
    }

    :host([disabled]) .control {
        border-color: ${ii};
    }
`.withBehaviors(yn(gn`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${wn.Field};
                    border-color: ${wn.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${wn.Field};
                    border-color: ${wn.Highlight};
                }
                .start,
                .end {
                    fill: currentcolor;
                }
                :host([disabled]) {
                    opacity: 1;
                }
                :host([disabled]) .root,
                :host([appearance="filled"]:hover[disabled]) .root {
                    border-color: ${wn.GrayText};
                    background: ${wn.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${wn.Highlight};
                    box-shadow: 0 0 0 1px ${wn.Highlight} inset;
                }
                input::placeholder {
                    color: ${wn.GrayText};
                }
            `)),template:(t,e)=>Ue`
    <template class="${t=>t.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${fn("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Xe(0,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                @keydown="${(t,e)=>t.handleKeyDown(e.event)}"
                @blur="${(t,e)=>t.handleBlur()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                type="text"
                inputmode="numeric"
                min="${t=>t.min}"
                max="${t=>t.max}"
                step="${t=>t.step}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Ye("control")}
            />
            ${Ni((t=>!t.hideStep&&!t.readOnly&&!t.disabled),Ue`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${t=>t.stepUp()}">
                            <slot name="step-up-glyph">
                                ${e.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${t=>t.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${e.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${We(0,e)}
        </div>
    </template>
`,shadowOptions:{delegatesFocus:!0},stepDownGlyph:'\n        <span class="step-down-glyph" part="step-down-glyph"></span>\n    ',stepUpGlyph:'\n        <span class="step-up-glyph" part="step-up-glyph"></span>\n    '});function Vi(t,e,n){return t.nodeType!==Node.TEXT_NODE||"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}class Ai extends Ti{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}me([_],Ai.prototype,"appearance",void 0);const Li=Ai.compose({baseName:"text-field",baseClass:Ti,template:(t,e)=>Ue`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${fn({property:"defaultSlottedNodes",filter:Vi})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Xe(0,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Ye("control")}
            />
            ${We(0,e)}
        </div>
    </template>
`,styles:(t,e)=>gn`
    ${ci("inline-block")} :host {
        font-family: ${$a};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${ai};
        background: ${Hr};
        border-radius: calc(${Oa} * 1px);
        border: calc(${Fa} * 1px) solid ${Cr};
        height: calc(${di} * 1px);
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(${Ia} * 2px + 1px);
        font-size: ${Va};
        line-height: ${Aa};
    }

    .control:hover,
    .control:${hi},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${ai};
        cursor: pointer;
        font-size: ${Va};
        line-height: ${Aa};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .start,
    .end {
        display: flex;
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not([disabled])) .root {
        background: ${_r};
        border-color: ${kr};
    }

    :host(:active:not([disabled])) .root {
        background: ${_r};
        border-color: ${$r};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${Qr};
        box-shadow: 0 0 0 1px ${Qr} inset;
    }

    :host([appearance="filled"]) .root {
        background: ${Rr};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${jr};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${bn};
    }

    :host([disabled]) {
        opacity: ${Na};
    }

    :host([disabled]) .control {
        border-color: ${ii};
    }
`.withBehaviors(yn(gn`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${wn.Field};
                    border-color: ${wn.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${wn.Field};
                    border-color: ${wn.Highlight};
                }
                .start,
                .end {
                    fill: currentcolor;
                }
                :host([disabled]) {
                    opacity: 1;
                }
                :host([disabled]) .root,
                :host([appearance="filled"]:hover[disabled]) .root {
                    border-color: ${wn.GrayText};
                    background: ${wn.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${wn.Highlight};
                    box-shadow: 0 0 0 1px ${wn.Highlight} inset;
                }
                input::placeholder {
                    color: ${wn.GrayText};
                }
            `)),shadowOptions:{delegatesFocus:!0}});var Ei;!function(t){t.separator="separator",t.presentation="presentation"}(Ei||(Ei={}));class Mi extends zt{constructor(){super(...arguments),this.role=Ei.separator}}W([_],Mi.prototype,"role",void 0);const Ri=Mi.compose({baseName:"divider",template:(t,e)=>Ue`
    <template role="${t=>t.role}"></template>
`,styles:(t,e)=>gn`
        ${ci("block")} :host {
            box-sizing: content-box;
            height: 0;
            margin: calc(${Ia} * 1px) 0;
            border: none;
            border-top: calc(${Fa} * 1px) solid ${li};
        }
    `});var ji;!function(t){t.horizontal="horizontal",t.vertical="vertical"}(ji||(ji={}));var zi="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Bi=function(t){return"INPUT"===t.tagName},Hi=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].concat("iframe").join(","),_i=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==zi.call(t,Hi)&&function(t,e){return!(e.disabled||function(t){return Bi(t)&&"hidden"===t.type}(e)||function(t,e){if("hidden"===getComputedStyle(t).visibility)return!0;var n=zi.call(t,"details>summary:first-of-type")?t.parentElement:t;if(zi.call(n,"details:not([open]) *"))return!0;if(e&&"full"!==e){if("non-zero-area"===e){var a=t.getBoundingClientRect(),r=a.width,i=a.height;return 0===r&&0===i}}else for(;t;){if("none"===getComputedStyle(t).display)return!0;t=t.parentElement}return!1}(e,t.displayCheck)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(Bi(t)||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||"BUTTON"===t.tagName)for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var a=e.children.item(n);if("LEGEND"===a.tagName)return!a.contains(t)}return!0}e=e.parentElement}return!1}(e))}(e,t)};const Ui=Object.freeze({[nn.ArrowUp]:{[ji.vertical]:-1},[nn.ArrowDown]:{[ji.vertical]:1},[nn.ArrowLeft]:{[ji.horizontal]:{[xn.ltr]:-1,[xn.rtl]:1}},[nn.ArrowRight]:{[ji.horizontal]:{[xn.ltr]:1,[xn.rtl]:-1}}});class qi extends zt{constructor(){super(...arguments),this._activeIndex=0,this.direction=xn.ltr,this.orientation=ji.horizontal}get activeIndex(){return T.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=function(t,e,n){return Math.min(Math.max(n,0),e)}(0,this.focusableElements.length-1,t),T.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var e;const n=null===(e=this.focusableElements)||void 0===e?void 0:e.indexOf(t.target);return n>-1&&this.activeIndex!==n&&this.setFocusedElement(n),!0}connectedCallback(){super.connectedCallback(),this.direction=(t=>{const e=this.closest("[dir]");return null!==e&&"rtl"===e.dir?xn.rtl:xn.ltr})()}focusinHandler(t){const e=t.relatedTarget;e&&!this.contains(e)&&this.setFocusedElement()}getDirectionalIncrementer(t){var e,n,a,r,i;return null!==(i=null!==(a=null===(n=null===(e=Ui[t])||void 0===e?void 0:e[this.orientation])||void 0===n?void 0:n[this.direction])&&void 0!==a?a:null===(r=Ui[t])||void 0===r?void 0:r[this.orientation])&&void 0!==i?i:0}keydownHandler(t){const e=t.key;if(!(e in nn)||t.defaultPrevented||t.shiftKey)return!0;const n=this.getDirectionalIncrementer(e);if(!n)return!t.target.closest("[role=radiogroup]");const a=this.activeIndex+n;return this.focusableElements[a]&&t.preventDefault(),this.setFocusedElement(a),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){this.focusableElements=this.allSlottedItems.reduce(qi.reduceFocusableItems,[]),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),null===(e=this.focusableElements[this.activeIndex])||void 0===e||e.focus()}static reduceFocusableItems(t,e){var n,a,r,i;const o="radio"===e.getAttribute("role"),s=null===(a=null===(n=e.$fastController)||void 0===n?void 0:n.definition.shadowOptions)||void 0===a?void 0:a.delegatesFocus,l=Array.from(null!==(i=null===(r=e.shadowRoot)||void 0===r?void 0:r.querySelectorAll("*"))&&void 0!==i?i:[]).some((t=>_i(t)));return _i(e)||o||s||l?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(qi.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach(((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1}))}}W([D],qi.prototype,"direction",void 0),W([_],qi.prototype,"orientation",void 0),W([D],qi.prototype,"slottedItems",void 0),W([D],qi.prototype,"slottedLabel",void 0);class Yi{}W([_({attribute:"aria-labelledby"})],Yi.prototype,"ariaLabelledby",void 0),W([_({attribute:"aria-label"})],Yi.prototype,"ariaLabel",void 0),Ke(Yi,be),Ke(qi,Ge,Yi);const Gi=class extends qi{connectedCallback(){super.connectedCallback();const t=Ut(this);t&&yr.setValueFor(this,(e=>Xr.getValueFor(e).evaluate(e,yr.getValueFor(t))))}}.compose({baseName:"toolbar",baseClass:qi,template:(t,e)=>Ue`
    <template
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-orientation="${t=>t.orientation}"
        orientation="${t=>t.orientation}"
        role="toolbar"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @focusin="${(t,e)=>t.focusinHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Xe(0,e)}
            <slot
                ${fn({filter:function(t,e,n){return 1===t.nodeType},property:"slottedItems"})}
            ></slot>
            ${We(0,e)}
        </div>
    </template>
`,styles:(t,e)=>gn`
        ${ci("inline-flex")} :host {
            --toolbar-item-gap: calc(
                (var(--design-unit) + calc(var(--density) + 2)) * 1px
            );
            background-color: ${yr};
            border-radius: calc(${Oa} * 1px);
            fill: currentcolor;
            padding: var(--toolbar-item-gap);
        }

        :host(${hi}) {
            outline: calc(${Fa} * 1px) solid ${oi};
        }

        .positioning-region {
            align-items: flex-start;
            display: inline-flex;
            flex-flow: row wrap;
            justify-content: flex-start;
        }

        :host([orientation="vertical"]) .positioning-region {
            flex-direction: column;
        }

        ::slotted(:not([slot])) {
            flex: 0 0 auto;
            margin: 0 var(--toolbar-item-gap);
        }

        :host([orientation="vertical"]) ::slotted(:not([slot])) {
            margin: var(--toolbar-item-gap) 0;
        }

        .start,
        .end {
            display: flex;
            margin: auto;
            margin-inline: 0;
        }

        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            width: 16px;
            height: 16px;
        }
    `.withBehaviors(yn(gn`
            :host(:${hi}) {
                box-shadow: 0 0 0 calc(${Pa} * 1px) ${wn.Highlight};
                color: ${wn.ButtonText};
                forced-color-adjust: none;
            }
        `)),shadowOptions:{delegatesFocus:!0}});class Wi extends zt{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t="number"==typeof this.min?this.min:0,e="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,a=e-t;this.percentComplete=0===a?0:Math.fround((n-t)/a*100)}}W([_({converter:B})],Wi.prototype,"value",void 0),W([_({converter:B})],Wi.prototype,"min",void 0),W([_({converter:B})],Wi.prototype,"max",void 0),W([_({mode:"boolean"})],Wi.prototype,"paused",void 0),W([D],Wi.prototype,"percentComplete",void 0);const Xi=Wi.compose({baseName:"progress-ring",template:(t,e)=>Ue`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${Ni((t=>"number"==typeof t.value),Ue`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>44*t.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${Ni((t=>"number"!=typeof t.value),Ue`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(t,e)=>gn`
        ${ci("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${di} * 1px);
            width: calc(${di} * 1px);
            margin: calc(${di} * 1px) 0;
        }

        .progress {
            height: 100%;
            width: 100%;
        }

        .background {
            stroke: ${Rr};
            fill: none;
            stroke-width: 2px;
        }

        .determinate {
            stroke: ${Ar};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
        }

        .indeterminate-indicator-1 {
            stroke: ${Ar};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
            animation: spin-infinite 2s linear infinite;
        }

        :host([paused]) .indeterminate-indicator-1 {
            animation-play-state: paused;
            stroke: ${Rr};
        }

        :host([paused]) .determinate {
            stroke: ${ei};
        }

        @keyframes spin-infinite {
            0% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(0deg);
            }
            50% {
                stroke-dasharray: 21.99px 21.99px;
                transform: rotate(450deg);
            }
            100% {
                stroke-dasharray: 0.01px 43.97px;
                transform: rotate(1080deg);
            }
        }
    `.withBehaviors(yn(gn`
                .indeterminate-indicator-1,
                .determinate {
                    stroke: ${wn.FieldText};
                }
                .background {
                    stroke: ${wn.Field};
                }
                :host([paused]) .indeterminate-indicator-1 {
                    stroke: ${wn.Field};
                }
                :host([paused]) .determinate {
                    stroke: ${wn.GrayText};
                }
            `)),indeterminateIndicator:'\n        <svg class="progress" part="progress" viewBox="0 0 16 16">\n            <circle\n                class="background"\n                part="background"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n            <circle\n                class="indeterminate-indicator-1"\n                part="indeterminate-indicator-1"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n        </svg>\n    '});class Ki extends zt{}const Qi=class extends Ki{connectedCallback(){super.connectedCallback();const t=Ut(this);t&&yr.setValueFor(this,(e=>Xr.getValueFor(e).evaluate(e,yr.getValueFor(t))))}}.compose({baseName:"card",baseClass:Ki,template:(t,e)=>Ue`
    <slot></slot>
`,styles:(t,e)=>gn`
        ${ci("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${yr};
            border-radius: calc(${Oa} * 1px);
            ${"box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"}
        }
    `.withBehaviors(yn(gn`
                :host {
                    forced-color-adjust: none;
                    background: ${wn.Canvas};
                    box-shadow: 0 0 0 1px ${wn.CanvasText};
                }
            `))});class Zi extends zt{}W([_({mode:"boolean"})],Zi.prototype,"disabled",void 0);const Ji=Zi.compose({baseName:"tab",template:(t,e)=>Ue`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`,styles:(t,e)=>gn`
    ${ci("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${$a};
        font-size: ${Va};
        line-height: ${Aa};
        height: calc(${di} * 1px);
        padding: calc(${Ia} * 5px) calc(${Ia} * 4px);
        color: ${ei};
        fill: currentcolor;
        border-radius: calc(${Oa} * 1px);
        border: calc(${Fa} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host(:hover) {
        color: ${ai};
        fill: currentcolor;
    }

    :host(:active) {
        color: ${ai};
        fill: currentcolor;
    }

    :host([disabled]) {
        cursor: ${bn};
        opacity: ${Na};
    }

    :host([disabled]:hover) {
        color: ${ei};
        background: ${qr};
    }

    :host([aria-selected="true"]) {
        background: ${Rr};
        color: ${Ar};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:hover) {
        background: ${jr};
        color: ${Lr};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:active) {
        background: ${zr};
        color: ${Er};
        fill: currentcolor;
    }

    :host(:${hi}) {
        outline: none;
        border: calc(${Fa} * 1px) solid ${Qr};
        box-shadow: 0 0 0 calc((${Pa} - ${Fa}) * 1px)
            ${Qr};
    }

    :host(:focus) {
        outline: none;
    }

    :host(.vertical) {
        justify-content: end;
        grid-column: 2;
    }

    :host(.vertical[aria-selected="true"]) {
        z-index: 2;
    }

    :host(.vertical:hover) {
        color: ${ai};
    }

    :host(.vertical:active) {
        color: ${ai};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(yn(gn`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${wn.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${wn.Highlight};
                color: ${wn.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${wn.HighlightText};
                color: ${wn.Highlight};
                fill: currentcolor;
            }
            :host(:${hi}) {
                border-color: ${wn.ButtonText};
                box-shadow: none;
            }
            :host([disabled]),
            :host([disabled]:hover) {
                opacity: 1;
                color: ${wn.GrayText};
                background: ${wn.ButtonFace};
            }
        `))});var to;!function(t){t.vertical="vertical",t.horizontal="horizontal"}(to||(to={}));class eo extends zt{constructor(){super(...arguments),this.orientation=to.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((e,n)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const t=this.tabIds[n],a=this.tabpanelIds[n];e.setAttribute("id","string"!=typeof t?`tab-${n+1}`:t),e.setAttribute("aria-selected",this.activeTabIndex===n?"true":"false"),e.setAttribute("aria-controls","string"!=typeof a?`panel-${n+1}`:a),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===n?"0":"-1"),this.activeTabIndex===n&&(this.activetab=e)}e.style.gridColumn="",e.style.gridRow="",e.style[t]=`${n+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((t,e)=>{const n=this.tabIds[e],a=this.tabpanelIds[e];t.setAttribute("id","string"!=typeof a?`panel-${e+1}`:a),t.setAttribute("aria-labelledby","string"!=typeof n?`tab-${e+1}`:n),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")}))},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Je:t.preventDefault(),this.adjustBackward(t);break;case tn:t.preventDefault(),this.adjustForward(t)}else switch(t.key){case en:t.preventDefault(),this.adjustBackward(t);break;case Ze:t.preventDefault(),this.adjustForward(t)}switch(t.key){case"Home":t.preventDefault(),this.adjust(-this.activeTabIndex);break;case"End":t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const e=this.tabs;let n=0;for(n=this.activetab?e.indexOf(this.activetab)+1:1,n===e.length&&(n=0);n<e.length&&e.length>1;){if(this.isFocusableElement(e[n])){this.moveToTabByIndex(e,n);break}if(this.activetab&&n===e.indexOf(this.activetab))break;n+1>=e.length?n=0:n+=1}},this.adjustBackward=t=>{const e=this.tabs;let n=0;for(n=this.activetab?e.indexOf(this.activetab)-1:0,n=n<0?e.length-1:n;n>=0&&e.length>1;){if(this.isFocusableElement(e[n])){this.moveToTabByIndex(e,n);break}n-1<0?n=e.length-1:n-=1}},this.moveToTabByIndex=(t,e)=>{const n=t[e];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((e=>e.id===t)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((t=>t.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((t=>t.getAttribute("id")))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===to.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",a=this.activeIndicatorRef[n];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[n];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const i=r-a;this.activeIndicatorRef.style.transform=`${e}(${i}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(t){var e,n;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,e=this.tabs.length-1,(n=this.activeTabIndex+t)<0?e:n>e?0:n),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}W([_],eo.prototype,"orientation",void 0),W([_],eo.prototype,"activeid",void 0),W([D],eo.prototype,"tabs",void 0),W([D],eo.prototype,"tabpanels",void 0),W([_({mode:"boolean"})],eo.prototype,"activeindicator",void 0),W([D],eo.prototype,"activeIndicatorRef",void 0),W([D],eo.prototype,"showActiveIndicator",void 0),Ke(eo,Ge);const no=eo.compose({baseName:"tabs",template:(t,e)=>Ue`
    <template class="${t=>t.orientation}">
        ${Xe(0,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${fn("tabs")}></slot>

            ${Ni((t=>t.showActiveIndicator),Ue`
                    <div
                        ${Ye("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${We(0,e)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${fn("tabpanels")}></slot>
        </div>
    </template>
`,styles:(t,e)=>gn`
        ${ci("grid")} :host {
            box-sizing: border-box;
            font-family: ${$a};
            font-size: ${Va};
            line-height: ${Aa};
            color: ${ai};
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr;
        }

        .tablist {
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: auto;
            position: relative;
            width: max-content;
            align-self: end;
            padding: calc(${Ia} * 4px) calc(${Ia} * 4px) 0;
            box-sizing: border-box;
        }

        .start,
        .end {
            align-self: center;
        }

        .activeIndicator {
            grid-row: 2;
            grid-column: 1;
            width: 100%;
            height: 5px;
            justify-self: center;
            background: ${Cr};
            margin-top: 10px;
            border-radius: calc(${Oa} * 1px)
                calc(${Oa} * 1px) 0 0;
        }

        .activeIndicatorTransition {
            transition: transform 0.2s ease-in-out;
        }

        .tabpanel {
            grid-row: 2;
            grid-column-start: 1;
            grid-column-end: 4;
            position: relative;
        }

        :host([orientation="vertical"]) {
            grid-template-rows: auto 1fr auto;
            grid-template-columns: auto 1fr;
        }

        :host([orientation="vertical"]) .tablist {
            grid-row-start: 2;
            grid-row-end: 2;
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: auto 1fr;
            position: relative;
            width: max-content;
            justify-self: end;
            align-self: flex-start;
            width: 100%;
            padding: 0 calc(${Ia} * 4px)
                calc((${di} - ${Ia}) * 1px) 0;
        }

        :host([orientation="vertical"]) .tabpanel {
            grid-column: 2;
            grid-row-start: 1;
            grid-row-end: 4;
        }

        :host([orientation="vertical"]) .end {
            grid-row: 3;
        }

        :host([orientation="vertical"]) .activeIndicator {
            grid-column: 1;
            grid-row: 1;
            width: 5px;
            height: 100%;
            margin-inline-end: 10px;
            align-self: center;
            background: ${Cr};
            margin-top: 0;
            border-radius: 0 calc(${Oa} * 1px)
                calc(${Oa} * 1px) 0;
        }

        :host([orientation="vertical"]) .activeIndicatorTransition {
            transition: transform 0.2s linear;
        }
    `.withBehaviors(yn(gn`
                .activeIndicator,
                :host([orientation="vertical"]) .activeIndicator {
                    forced-color-adjust: none;
                    background: ${wn.Highlight};
                }
            `))}),ao=class extends zt{}.compose({baseName:"tab-panel",template:(t,e)=>Ue`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(t,e)=>gn`
    ${ci("block")} :host {
        box-sizing: border-box;
        font-size: ${Va};
        line-height: ${Aa};
        padding: 0 calc((6 + (${Ia} * 2 * ${Da})) * 1px);
    }
`});function ro(t,e,n,a){var r,i=arguments.length,o=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i<3?r(o):i>3?r(e,n,o):r(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function io(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function oo(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{l(a.next(t))}catch(t){i(t)}}function s(t){try{l(a.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}l((a=a.apply(t,e||[])).next())}))}function so(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function lo(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?so(Object(n),!0).forEach((function(e){ho(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):so(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function co(t){return co="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},co(t)}function uo(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ho(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fo(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,i=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(i.push(a.value),!e||i.length!==e);o=!0);}catch(t){s=!0,r=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw r}}return i}}(t,e)||go(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function po(t){return function(t){if(Array.isArray(t))return mo(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||go(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function go(t,e){if(t){if("string"==typeof t)return mo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mo(t,e):void 0}}function mo(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}Object.create,Object.create;var bo=function(){},vo={},yo={},wo=null,xo={mark:bo,measure:bo};try{"undefined"!=typeof window&&(vo=window),"undefined"!=typeof document&&(yo=document),"undefined"!=typeof MutationObserver&&(wo=MutationObserver),"undefined"!=typeof performance&&(xo=performance)}catch(t){}var Co=(vo.navigator||{}).userAgent,ko=void 0===Co?"":Co,$o=vo,To=yo,So=wo,Oo=xo,Do=($o.document,!!To.documentElement&&!!To.head&&"function"==typeof To.addEventListener&&"function"==typeof To.createElement),Io=~ko.indexOf("MSIE")||~ko.indexOf("Trident/"),No="svg-inline--fa",Fo="data-fa-i2svg",Po="data-fa-pseudo-element",Vo="data-prefix",Ao="data-icon",Lo="fontawesome-i2svg",Eo=["HTML","HEAD","STYLE","SCRIPT"],Mo=function(){try{return!0}catch(t){return!1}}(),Ro={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},jo={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},zo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Bo={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ho=/fa[srltdbk\-\ ]/,_o="fa-layers-text",Uo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,qo={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Yo=[1,2,3,4,5,6,7,8,9,10],Go=Yo.concat([11,12,13,14,15,16,17,18,19,20]),Wo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xo="duotone-group",Ko="primary",Qo="secondary",Zo=[].concat(po(Object.keys(jo)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Xo,"swap-opacity",Ko,Qo]).concat(Yo.map((function(t){return"".concat(t,"x")}))).concat(Go.map((function(t){return"w-".concat(t)}))),Jo=$o.FontAwesomeConfig||{};To&&"function"==typeof To.querySelector&&[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=fo(t,2),n=e[0],a=e[1],r=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=To.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));null!=r&&(Jo[a]=r)}));var ts=lo(lo({},{familyPrefix:"fa",styleDefault:"solid",replacementClass:No,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0}),Jo);ts.autoReplaceSvg||(ts.observeMutations=!1);var es={};Object.keys(ts).forEach((function(t){Object.defineProperty(es,t,{enumerable:!0,set:function(e){ts[t]=e,ns.forEach((function(t){return t(es)}))},get:function(){return ts[t]}})})),$o.FontAwesomeConfig=es;var ns=[],as=16,rs={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function is(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function os(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ss(t){return t.classList?os(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function ls(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cs(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")}),"")}function us(t){return t.size!==rs.size||t.x!==rs.x||t.y!==rs.y||t.rotate!==rs.rotate||t.flipX||t.flipY}function hs(){var t="fa",e=No,n=es.familyPrefix,a=es.replacementClass,r=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ds=!1;function fs(){es.autoAddCss&&!ds&&(function(t){if(t&&Do){var e=To.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=To.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}To.head.insertBefore(e,a)}}(hs()),ds=!0)}var ps={mixout:function(){return{dom:{css:hs,insertCss:fs}}},hooks:function(){return{beforeDOMElementCreation:function(){fs()},beforeI2svg:function(){fs()}}}},gs=$o||{};gs.___FONT_AWESOME___||(gs.___FONT_AWESOME___={}),gs.___FONT_AWESOME___.styles||(gs.___FONT_AWESOME___.styles={}),gs.___FONT_AWESOME___.hooks||(gs.___FONT_AWESOME___.hooks={}),gs.___FONT_AWESOME___.shims||(gs.___FONT_AWESOME___.shims=[]);var ms=gs.___FONT_AWESOME___,bs=[],vs=!1;function ys(t){Do&&(vs?setTimeout(t,0):bs.push(t))}function ws(t){var e=t.tag,n=t.attributes,a=void 0===n?{}:n,r=t.children,i=void 0===r?[]:r;return"string"==typeof t?ls(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(ls(t[n]),'" ')}),"").trim()}(a),">").concat(i.map(ws).join(""),"</").concat(e,">")}function xs(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}Do&&((vs=(To.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(To.readyState))||To.addEventListener("DOMContentLoaded",(function t(){To.removeEventListener("DOMContentLoaded",t),vs=1,bs.map((function(t){return t()}))})));var Cs=function(t,e,n,a){var r,i,o,s=Object.keys(t),l=s.length,c=void 0!==a?function(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}}(e,a):e;for(void 0===n?(r=1,o=t[s[0]]):(r=0,o=n);r<l;r++)o=c(o,t[i=s[r]],i,t);return o};function ks(t){var e=function(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);56320==(64512&i)?e.push(((1023&r)<<10)+(1023&i)+65536):(e.push(r),n--)}else e.push(r)}return e}(t);return 1===e.length?e[0].toString(16):null}function $s(t){return Object.keys(t).reduce((function(e,n){var a=t[n];return a.icon?e[a.iconName]=a.icon:e[n]=a,e}),{})}function Ts(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.skipHooks,r=void 0!==a&&a,i=$s(e);"function"!=typeof ms.hooks.addPack||r?ms.styles[t]=lo(lo({},ms.styles[t]||{}),i):ms.hooks.addPack(t,$s(e)),"fas"===t&&Ts("fa",e)}var Ss=ms.styles,Os=ms.shims,Ds=Object.values(zo),Is=null,Ns={},Fs={},Ps={},Vs={},As={},Ls=Object.keys(Ro);function Es(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~Zo.indexOf(n))?null:i}var Ms,Rs=function(){var t=function(t){return Cs(Ss,(function(e,n,a){return e[a]=Cs(n,t,{}),e}),{})};Ns=t((function(t,e,n){return e[3]&&(t[e[3]]=n),e[2]&&e[2].filter((function(t){return"number"==typeof t})).forEach((function(e){t[e.toString(16)]=n})),t})),Fs=t((function(t,e,n){return t[n]=n,e[2]&&e[2].filter((function(t){return"string"==typeof t})).forEach((function(e){t[e]=n})),t})),As=t((function(t,e,n){var a=e[2];return t[n]=n,a.forEach((function(e){t[e]=n})),t}));var e="far"in Ss||es.autoFetchSvg,n=Cs(Os,(function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),"string"==typeof a&&(t.names[a]={prefix:r,iconName:i}),"number"==typeof a&&(t.unicodes[a.toString(16)]={prefix:r,iconName:i}),t}),{names:{},unicodes:{}});Ps=n.names,Vs=n.unicodes,Is=_s(es.styleDefault)};function js(t,e){return(Ns[t]||{})[e]}function zs(t,e){return(As[t]||{})[e]}function Bs(t){return Ps[t]||{prefix:null,iconName:null}}function Hs(){return Is}function _s(t){var e=jo[t]||jo[Ro[t]],n=t in ms.styles?t:null;return e||n||null}function Us(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.skipLookups,a=void 0!==n&&n,r=null,i=t.reduce((function(t,e){var n=Es(es.familyPrefix,e);if(Ss[e]?(e=Ds.includes(e)?Bo[e]:e,r=e,t.prefix=e):Ls.indexOf(e)>-1?(r=e,t.prefix=_s(e)):n?t.iconName=n:e!==es.replacementClass&&t.rest.push(e),!a&&t.prefix&&t.iconName){var i="fa"===r?Bs(t.iconName):{},o=zs(t.prefix,t.iconName);i.prefix&&(r=null),t.iconName=i.iconName||o||t.iconName,t.prefix=i.prefix||t.prefix,"far"!==t.prefix||Ss.far||!Ss.fas||es.autoFetchSvg||(t.prefix="fas")}return t}),{prefix:null,iconName:null,rest:[]});return"fa"!==i.prefix&&"fa"!==r||(i.prefix=Hs()||"fas"),i}Ms=function(t){Is=_s(t.styleDefault)},ns.push(Ms),Rs();var qs=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n;return e=t,n=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(e){t.definitions[e]=lo(lo({},t.definitions[e]||{}),r[e]),Ts(e,r[e]);var n=zo[e];n&&Ts(n,r[e]),Rs()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon,s=o[2];t[r]||(t[r]={}),s.length>0&&s.forEach((function(e){"string"==typeof e&&(t[r][e]=o)})),t[r][i]=o})),t}}],n&&uo(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Ys=[],Gs={},Ws={},Xs=Object.keys(Ws);function Ks(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Gs[t]||[];return i.forEach((function(t){e=t.apply(null,[e].concat(a))})),e}function Qs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Gs[t]||[];r.forEach((function(t){t.apply(null,n)}))}function Zs(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ws[t]?Ws[t].apply(null,e):void 0}function Js(t){"fa"===t.prefix&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Hs();if(e)return e=zs(n,e)||e,xs(tl.definitions,n,e)||xs(ms.styles,n,e)}var tl=new qs,el={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Do?(Qs("beforeI2svg",t),Zs("pseudoElements2svg",t),Zs("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot;!1===es.autoReplaceSvg&&(es.autoReplaceSvg=!0),es.observeMutations=!0,ys((function(){al({autoReplaceSvgRoot:e}),Qs("watch",t)}))}},nl={noAuto:function(){es.autoReplaceSvg=!1,es.observeMutations=!1,Qs("noAuto")},config:es,dom:el,parse:{icon:function(t){if(null===t)return null;if("object"===co(t)&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:zs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&2===t.length){var e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],n=_s(t[0]);return{prefix:n,iconName:zs(n,e)||e}}if("string"==typeof t&&(t.indexOf("".concat(es.familyPrefix,"-"))>-1||t.match(Ho))){var a=Us(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Hs(),iconName:zs(a.prefix,a.iconName)||a.iconName}}if("string"==typeof t){var r=Hs();return{prefix:r,iconName:zs(r,t)||t}}}},library:tl,findIconDefinition:Js,toHtml:ws},al=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=void 0===e?To:e;(Object.keys(ms.styles).length>0||es.autoFetchSvg)&&Do&&es.autoReplaceSvg&&nl.dom.i2svg({node:n})};function rl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return ws(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(Do){var e=To.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function il(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,d=t.watchable,f=void 0!==d&&d,p=a.found?a:n,g=p.width,m=p.height,b="fak"===r,v=[es.replacementClass,i?"".concat(es.familyPrefix,"-").concat(i):""].filter((function(t){return-1===h.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(h.classes).join(" "),y={children:[],attributes:lo(lo({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(m)})},w=b&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/m*16*.0625,"em")}:{};f&&(y.attributes[Fo]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(u||is())},children:[l]}),delete y.attributes.title);var x=lo(lo({},y),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:lo(lo({},w),h.styles)}),C=a.found&&n.found?Zs("generateAbstractMask",x)||{children:[],attributes:{}}:Zs("generateAbstractIcon",x)||{children:[],attributes:{}},k=C.children,$=C.attributes;return x.children=k,x.attributes=$,s?function(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=!0===i?"".concat(e,"-").concat(es.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:lo(lo({},r),{},{id:o}),children:a}]}]}(x):function(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(us(o)&&n.found&&!a.found){var s={x:n.width/n.height/2,y:.5};r.style=cs(lo(lo({},i),{},{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}(x)}function ol(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=void 0!==s&&s,c=lo(lo(lo({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Fo]="");var u=lo({},o.styles);us(r)&&(u.transform=function(t){var e=t.transform,n=t.width,a=void 0===n?16:n,r=t.height,i=void 0===r?16:r,o=t.startCentered,s=void 0!==o&&o,l="";return l+=s&&Io?"translate(".concat(e.x/as-a/2,"em, ").concat(e.y/as-i/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/as,"em), calc(-50% + ").concat(e.y/as,"em)) "):"translate(".concat(e.x/as,"em, ").concat(e.y/as,"em) "),(l+="scale(".concat(e.size/as*(e.flipX?-1:1),", ").concat(e.size/as*(e.flipY?-1:1),") "))+"rotate(".concat(e.rotate,"deg) ")}({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var h=cs(u);h.length>0&&(c.style=h);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function sl(t){var e=t.content,n=t.title,a=t.extra,r=lo(lo(lo({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=cs(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ll=ms.styles;function cl(t){var e=t[0],n=t[1],a=fo(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(es.familyPrefix,"-").concat(Xo)},children:[{tag:"path",attributes:{class:"".concat(es.familyPrefix,"-").concat(Qo),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(es.familyPrefix,"-").concat(Ko),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}var ul={found:!1,width:512,height:512};function hl(t,e){var n=e;return"fa"===e&&null!==es.styleDefault&&(e=Hs()),new Promise((function(a,r){if(Zs("missingIconAbstract"),"fa"===n){var i=Bs(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ll[e]&&ll[e][t])return a(cl(ll[e][t]));!function(t,e){Mo||es.showMissingIcons||!t||console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}(t,e),a(lo(lo({},ul),{},{icon:es.showMissingIcons&&t&&Zs("missingIconAbstract")||{}}))}))}var dl=function(){},fl=es.measurePerformance&&Oo&&Oo.mark&&Oo.measure?Oo:{mark:dl,measure:dl},pl='FA "6.1.1"',gl=function(t){return fl.mark("".concat(pl," ").concat(t," begins")),function(){return function(t){fl.mark("".concat(pl," ").concat(t," ends")),fl.measure("".concat(pl," ").concat(t),"".concat(pl," ").concat(t," begins"),"".concat(pl," ").concat(t," ends"))}(t)}},ml=function(){};function bl(t){return"string"==typeof(t.getAttribute?t.getAttribute(Fo):null)}function vl(t){return To.createElementNS("http://www.w3.org/2000/svg",t)}function yl(t){return To.createElement(t)}function wl(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ceFn,a=void 0===n?"svg"===t.tag?vl:yl:n;if("string"==typeof t)return To.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach((function(e){r.setAttribute(e,t.attributes[e])}));var i=t.children||[];return i.forEach((function(t){r.appendChild(wl(t,{ceFn:a}))})),r}var xl={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach((function(t){e.parentNode.insertBefore(wl(t),e)})),null===e.getAttribute(Fo)&&es.keepOriginalSource){var n=To.createComment(function(t){var e=" ".concat(t.outerHTML," ");return"".concat(e,"Font Awesome fontawesome.com ")}(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~ss(e).indexOf(es.replacementClass))return xl.replace(t);var a=new RegExp("".concat(es.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce((function(t,e){return e===es.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),0===r.toNode.length?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}var i=n.map((function(t){return ws(t)})).join("\n");e.setAttribute(Fo,""),e.innerHTML=i}};function Cl(t){t()}function kl(t,e){var n="function"==typeof e?e:ml;if(0===t.length)n();else{var a=Cl;"async"===es.mutateApproach&&(a=$o.requestAnimationFrame||Cl),a((function(){var e=!0===es.autoReplaceSvg?xl.replace:xl[es.autoReplaceSvg]||xl.replace,a=gl("mutate");t.map(e),a(),n()}))}}var $l=!1;function Tl(){$l=!0}function Sl(){$l=!1}var Ol=null;function Dl(t){if(So&&es.observeMutations){var e=t.treeCallback,n=void 0===e?ml:e,a=t.nodeCallback,r=void 0===a?ml:a,i=t.pseudoElementsCallback,o=void 0===i?ml:i,s=t.observeMutationsRoot,l=void 0===s?To:s;Ol=new So((function(t){if(!$l){var e=Hs();os(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!bl(t.addedNodes[0])&&(es.searchPseudoElements&&o(t.target),n(t.target)),"attributes"===t.type&&t.target.parentNode&&es.searchPseudoElements&&o(t.target.parentNode),"attributes"===t.type&&bl(t.target)&&~Wo.indexOf(t.attributeName))if("class"===t.attributeName&&function(t){var e=t.getAttribute?t.getAttribute(Vo):null,n=t.getAttribute?t.getAttribute(Ao):null;return e&&n}(t.target)){var a=Us(ss(t.target)),i=a.prefix,s=a.iconName;t.target.setAttribute(Vo,i||e),s&&t.target.setAttribute(Ao,s)}else(l=t.target)&&l.classList&&l.classList.contains&&l.classList.contains(es.replacementClass)&&r(t.target);var l}))}})),Do&&Ol.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Il(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&r.length>0&&(t[a]=r.join(":").trim()),t}),{})),n}function Nl(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Us(ss(t));return o.prefix||(o.prefix=Hs()),a&&r&&(o.prefix=a,o.iconName=r),o.iconName&&o.prefix||o.prefix&&i.length>0&&(o.iconName=(e=o.prefix,n=t.innerText,(Fs[e]||{})[n]||js(o.prefix,ks(t.innerText)))),o}function Fl(t){var e=os(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return es.autoA11y&&(n?e["aria-labelledby"]="".concat(es.replacementClass,"-title-").concat(a||is()):(e["aria-hidden"]="true",e.focusable="false")),e}function Pl(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=Nl(t),a=n.iconName,r=n.prefix,i=n.rest,o=Fl(t),s=Ks("parseNodeAttributes",{},t),l=e.styleParser?Il(t):[];return lo({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:rs,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Vl=ms.styles;function Al(t){var e="nest"===es.autoReplaceSvg?Pl(t,{styleParser:!1}):Pl(t);return~e.extra.classes.indexOf(_o)?Zs("generateLayersText",t,e):Zs("generateSvgReplacementMutation",t,e)}function Ll(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Do)return Promise.resolve();var n=To.documentElement.classList,a=function(t){return n.add("".concat(Lo,"-").concat(t))},r=function(t){return n.remove("".concat(Lo,"-").concat(t))},i=es.autoFetchSvg?Object.keys(Ro):Object.keys(Vl),o=[".".concat(_o,":not([").concat(Fo,"])")].concat(i.map((function(t){return".".concat(t,":not([").concat(Fo,"])")}))).join(", ");if(0===o.length)return Promise.resolve();var s=[];try{s=os(t.querySelectorAll(o))}catch(t){}if(!(s.length>0))return Promise.resolve();a("pending"),r("complete");var l=gl("onTree"),c=s.reduce((function(t,e){try{var n=Al(e);n&&t.push(n)}catch(t){Mo||"MissingIcon"===t.name&&console.error(t)}return t}),[]);return new Promise((function(t,n){Promise.all(c).then((function(n){kl(n,(function(){a("active"),a("complete"),r("pending"),"function"==typeof e&&e(),l(),t()}))})).catch((function(t){l(),n(t)}))}))}function El(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Al(t).then((function(t){t&&kl([t],e)}))}var Ml=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?rs:n,r=e.symbol,i=void 0!==r&&r,o=e.mask,s=void 0===o?null:o,l=e.maskId,c=void 0===l?null:l,u=e.title,h=void 0===u?null:u,d=e.titleId,f=void 0===d?null:d,p=e.classes,g=void 0===p?[]:p,m=e.attributes,b=void 0===m?{}:m,v=e.styles,y=void 0===v?{}:v;if(t){var w=t.prefix,x=t.iconName,C=t.icon;return rl(lo({type:"icon"},t),(function(){return Qs("beforeDOMElementCreation",{iconDefinition:t,params:e}),es.autoA11y&&(h?b["aria-labelledby"]="".concat(es.replacementClass,"-title-").concat(f||is()):(b["aria-hidden"]="true",b.focusable="false")),il({icons:{main:cl(C),mask:s?cl(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:x,transform:lo(lo({},rs),a),symbol:i,title:h,maskId:c,titleId:f,extra:{attributes:b,styles:y,classes:g}})}))}},Rl={mixout:function(){return{icon:(t=Ml,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(e||{}).icon?e:Js(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Js(r||{})),t(a,lo(lo({},n),{},{mask:r}))})};var t},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Ll,t.nodeCallback=El,t}}},provides:function(t){t.i2svg=function(t){var e=t.node,n=void 0===e?To:e,a=t.callback;return Ll(n,void 0===a?function(){}:a)},t.generateSvgReplacementMutation=function(t,e){var n=e.iconName,a=e.title,r=e.titleId,i=e.prefix,o=e.transform,s=e.symbol,l=e.mask,c=e.maskId,u=e.extra;return new Promise((function(e,h){Promise.all([hl(n,i),l.iconName?hl(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(l){var h=fo(l,2),d=h[0],f=h[1];e([t,il({icons:{main:d,mask:f},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,title:a,titleId:r,extra:u,watchable:!0})])})).catch(h)}))},t.generateAbstractIcon=function(t){var e,n=t.children,a=t.attributes,r=t.main,i=t.transform,o=cs(t.styles);return o.length>0&&(a.style=o),us(i)&&(e=Zs("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(e||r.icon),{children:n,attributes:a}}}},jl={mixout:function(){return{layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,a=void 0===n?[]:n;return rl({type:"layer"},(function(){Qs("beforeDOMElementCreation",{assembler:t,params:e});var n=[];return t((function(t){Array.isArray(t)?t.map((function(t){n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(es.familyPrefix,"-layers")].concat(po(a)).join(" ")},children:n}]}))}}}},zl={mixout:function(){return{counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,i=void 0===r?[]:r,o=e.attributes,s=void 0===o?{}:o,l=e.styles,c=void 0===l?{}:l;return rl({type:"counter",content:t},(function(){return Qs("beforeDOMElementCreation",{content:t,params:e}),sl({content:t.toString(),title:a,extra:{attributes:s,styles:c,classes:["".concat(es.familyPrefix,"-layers-counter")].concat(po(i))}})}))}}}},Bl={mixout:function(){return{text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?rs:n,r=e.title,i=void 0===r?null:r,o=e.classes,s=void 0===o?[]:o,l=e.attributes,c=void 0===l?{}:l,u=e.styles,h=void 0===u?{}:u;return rl({type:"text",content:t},(function(){return Qs("beforeDOMElementCreation",{content:t,params:e}),ol({content:t,transform:lo(lo({},rs),a),title:i,extra:{attributes:c,styles:h,classes:["".concat(es.familyPrefix,"-layers-text")].concat(po(s))}})}))}}},provides:function(t){t.generateLayersText=function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(Io){var s=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/s,o=l.height/s}return es.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,ol({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}}},Hl=new RegExp('"',"ug"),_l=[1105920,1112319];function Ul(t,e){var n="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"));return new Promise((function(a,r){if(null!==t.getAttribute(n))return a();var i,o,s,l=os(t.children).filter((function(t){return t.getAttribute(Po)===e}))[0],c=$o.getComputedStyle(t,e),u=c.getPropertyValue("font-family").match(Uo),h=c.getPropertyValue("font-weight"),d=c.getPropertyValue("content");if(l&&!u)return t.removeChild(l),a();if(u&&"none"!==d&&""!==d){var f=c.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?jo[u[2].toLowerCase()]:qo[h],g=function(t){var e,n,a,r,i=t.replace(Hl,""),o=(0,a=(e=i).length,(r=e.charCodeAt(0))>=55296&&r<=56319&&a>1&&(n=e.charCodeAt(1))>=56320&&n<=57343?1024*(r-55296)+n-56320+65536:r),s=o>=_l[0]&&o<=_l[1],l=2===i.length&&i[0]===i[1];return{value:ks(l?i[0]:i),isSecondary:s||l}}(f),m=g.value,b=g.isSecondary,v=u[0].startsWith("FontAwesome"),y=js(p,m),w=y;if(v){var x=(o=Vs[i=m],s=js("fas",i),o||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null});x.iconName&&x.prefix&&(y=x.iconName,p=x.prefix)}if(!y||b||l&&l.getAttribute(Vo)===p&&l.getAttribute(Ao)===w)a();else{t.setAttribute(n,w),l&&t.removeChild(l);var C={iconName:null,title:null,titleId:null,prefix:null,transform:rs,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},k=C.extra;k.attributes[Po]=e,hl(y,p).then((function(r){var i=il(lo(lo({},C),{},{icons:{main:r,mask:{prefix:null,iconName:null,rest:[]}},prefix:p,iconName:w,extra:k,watchable:!0})),o=To.createElement("svg");"::before"===e?t.insertBefore(o,t.firstChild):t.appendChild(o),o.outerHTML=i.map((function(t){return ws(t)})).join("\n"),t.removeAttribute(n),a()})).catch(r)}}else a()}))}function ql(t){return Promise.all([Ul(t,"::before"),Ul(t,"::after")])}function Yl(t){return!(t.parentNode===document.head||~Eo.indexOf(t.tagName.toUpperCase())||t.getAttribute(Po)||t.parentNode&&"svg"===t.parentNode.tagName)}function Gl(t){if(Do)return new Promise((function(e,n){var a=os(t.querySelectorAll("*")).filter(Yl).map(ql),r=gl("searchPseudoElements");Tl(),Promise.all(a).then((function(){r(),Sl(),e()})).catch((function(){r(),Sl(),n()}))}))}var Wl=!1,Xl=function(t){return t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Kl={mixout:function(){return{parse:{transform:function(t){return Xl(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=Xl(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(t){var e=t.main,n=t.transform,a=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={outer:i,inner:{transform:"".concat(o," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(r/2*-1," -256)")}};return{tag:"g",attributes:lo({},c.outer),children:[{tag:"g",attributes:lo({},c.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:lo(lo({},e.icon.attributes),c.path)}]}]}}}},Ql={x:0,y:0,width:"100%",height:"100%"};function Zl(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}var Jl,tc={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),a=n?Us(n.split(" ").map((function(t){return t.trim()}))):{prefix:null,iconName:null,rest:[]};return a.prefix||(a.prefix=Hs()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(t){var e,n=t.children,a=t.attributes,r=t.main,i=t.mask,o=t.maskId,s=t.transform,l=r.width,c=r.icon,u=i.width,h=i.icon,d=function(t){var e=t.transform,n=t.iconWidth,a={transform:"translate(".concat(t.containerWidth/2," 256)")},r="translate(".concat(32*e.x,", ").concat(32*e.y,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(r," ").concat(i," ").concat(o)},path:{transform:"translate(".concat(n/2*-1," -256)")}}}({transform:s,containerWidth:u,iconWidth:l}),f={tag:"rect",attributes:lo(lo({},Ql),{},{fill:"white"})},p=c.children?{children:c.children.map(Zl)}:{},g={tag:"g",attributes:lo({},d.inner),children:[Zl(lo({tag:c.tag,attributes:lo(lo({},c.attributes),d.path)},p))]},m={tag:"g",attributes:lo({},d.outer),children:[g]},b="mask-".concat(o||is()),v="clip-".concat(o||is()),y={tag:"mask",attributes:lo(lo({},Ql),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,m]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(e=h,"g"===e.tag?e.children:[e])},y]};return n.push(w,{tag:"rect",attributes:lo({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},Ql)}),{children:n,attributes:a}}}},ec={provides:function(t){var e=!1;$o.matchMedia&&(e=$o.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var t=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:lo(lo({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=lo(lo({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:lo(lo({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:lo(lo({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:lo(lo({},r),{},{values:"1;0;1;1;0;1;"})}),t.push(i),t.push({tag:"path",attributes:lo(lo({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:lo(lo({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:lo(lo({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:lo(lo({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}};Jl={mixoutsTo:nl}.mixoutsTo,Ys=[ps,Rl,jl,zl,Bl,{hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Gl,t}}},provides:function(t){t.pseudoElements2svg=function(t){var e=t.node,n=void 0===e?To:e;es.searchPseudoElements&&Gl(n)}}},{mixout:function(){return{dom:{unwatch:function(){Tl(),Wl=!0}}}},hooks:function(){return{bootstrap:function(){Dl(Ks("mutationObserverCallbacks",{}))},noAuto:function(){Ol&&Ol.disconnect()},watch:function(t){var e=t.observeMutationsRoot;Wl?Sl():Dl(Ks("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Kl,tc,ec,{hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),a=null!==n&&(""===n||n);return t.symbol=a,t}}}}],Gs={},Object.keys(Ws).forEach((function(t){-1===Xs.indexOf(t)&&delete Ws[t]})),Ys.forEach((function(t){var e=t.mixout?t.mixout():{};if(Object.keys(e).forEach((function(t){"function"==typeof e[t]&&(Jl[t]=e[t]),"object"===co(e[t])&&Object.keys(e[t]).forEach((function(n){Jl[t]||(Jl[t]={}),Jl[t][n]=e[t][n]}))})),t.hooks){var n=t.hooks();Object.keys(n).forEach((function(t){Gs[t]||(Gs[t]=[]),Gs[t].push(n[t])}))}t.provides&&t.provides(Ws)}));var nc,ac=nl.library,rc=nl.dom;class ic{constructor(t,e,n,a){this.listeners=[],this.connected=!1,this.listeners=t,this.bleDevice=e,this.gattServer=n,this.bleService=a,this.bleDevice.addEventListener("gattserverdisconnected",this.onDisconnected)}static start(t){return oo(this,void 0,void 0,(function*(){t.forEach((t=>t.onPairingStart()));const e=yield navigator.bluetooth.requestDevice(this.bleServiceOptions).catch((e=>{throw t.forEach((t=>t.onDisconnected())),e}));console.log("Device found:",e);const n=e.gatt;yield n.connect();const a=yield n.getPrimaryService(this.espressoServiceUUID);console.log("Primary service:",a);const r=new ic(t,e,n,a);yield r.fetchSettings(),yield r.subscribeToTemperatureMeasurements(),yield r.subscribeToHeater()}))}disconnect(){this.gattServer.disconnect(),this.connected=!1}writeCharacteristic(t,e,n,a,r){return oo(this,void 0,void 0,(function*(){const i=Math.round(n*Math.pow(10,a))/Math.pow(10,a),o=yield this.bleService.getCharacteristic(t);if(e!=i){const t=new DataView(new ArrayBuffer(8));t.setFloat64(0,i,!0),yield o.writeValue(t),this.listeners.forEach((t=>r(t)(i)))}}))}subscribeToCharacteristicNotifications(t,e){return oo(this,void 0,void 0,(function*(){const n=yield this.bleService.getCharacteristic(t);console.log("Subscribing to characteristic:",n),n.properties.notify?(n.addEventListener("characteristicvaluechanged",(t=>{console.log("Received notification",t);const a=n.value.getFloat64(0,!0);this.listeners.forEach((t=>e(t)(a)))})),yield n.startNotifications()):console.error("Expected characteristic to have the notify property",n)}))}setTargetTemperature(t){return oo(this,void 0,void 0,(function*(){this.writeCharacteristic(ic.setTemperatureUUID,this.configuredTargetTemp,t,0,(t=>t.onTargetTemperatureChange))}))}setP(t){return oo(this,void 0,void 0,(function*(){this.writeCharacteristic(ic.pUUID,this.configuredP,t,3,(t=>t.onPChange))}))}setI(t){return oo(this,void 0,void 0,(function*(){this.writeCharacteristic(ic.iUUID,this.configuredI,t,3,(t=>t.onIChange))}))}setD(t){return oo(this,void 0,void 0,(function*(){this.writeCharacteristic(ic.dUUID,this.configuredD,t,3,(t=>t.onDChange))}))}onDisconnected(){this.listeners.forEach((t=>t.onDisconnected()))}fetchSettings(){return oo(this,void 0,void 0,(function*(){const t=yield this.bleService.getCharacteristic(ic.setTemperatureUUID),e=yield this.bleService.getCharacteristic(ic.pUUID),n=yield this.bleService.getCharacteristic(ic.iUUID),a=yield this.bleService.getCharacteristic(ic.dUUID);return this.connected=!0,this.configuredTargetTemp=yield t.readValue().then((t=>t.getFloat64(0,!0))),this.configuredP=yield e.readValue().then((t=>t.getFloat64(0,!0))),this.configuredI=yield n.readValue().then((t=>t.getFloat64(0,!0))),this.configuredD=yield a.readValue().then((t=>t.getFloat64(0,!0))),this.listeners.forEach((t=>t.onConnected(this))),this.listeners.forEach((t=>t.onTargetTemperatureChange(this.configuredTargetTemp))),this.listeners.forEach((t=>t.onPChange(this.configuredP))),this.listeners.forEach((t=>t.onIChange(this.configuredI))),this.listeners.forEach((t=>t.onDChange(this.configuredD))),[this.configuredTargetTemp,this.configuredP,this.configuredI,this.configuredD]}))}subscribeToTemperatureMeasurements(){return oo(this,void 0,void 0,(function*(){yield this.subscribeToCharacteristicNotifications(ic.temperatureReadingUUID,(t=>e=>{const n=Math.round(10*e)/10;t.onTemperatureChange(n)}))}))}subscribeToHeater(){return oo(this,void 0,void 0,(function*(){yield this.subscribeToCharacteristicNotifications(ic.heatPwrUUID,(t=>e=>{const n=Math.round(100*e)/100;t.onHeatPowerChange(n)}))}))}}nc=ic,ic.espressoServiceUUID="00c0ffee-add1-c5ed-0000-000000000000",ic.temperatureReadingUUID="00c0ffee-add1-c5ed-0000-000000000001",ic.setTemperatureUUID="00c0ffee-add1-c5ed-0000-000000000002",ic.pUUID="00c0ffee-add1-c5ed-0000-000000000003",ic.iUUID="00c0ffee-add1-c5ed-0000-000000000004",ic.dUUID="00c0ffee-add1-c5ed-0000-000000000005",ic.heatPwrUUID="00c0ffee-add1-c5ed-0000-000000000006",ic.bleServiceOptions={filters:[{services:[nc.espressoServiceUUID]}]},ac.add({prefix:"fab",iconName:"bluetooth",icon:[448,512,[],"f293","M292.6 171.1L249.7 214l-.3-86 43.2 43.1m-43.2 219.8l43.1-43.1-42.9-42.9-.2 86zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4 115.4 0 228.6 0 416 53.9 416 259.4zm-158.5 0l79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9 92.7 93-92.7 93 26.9 26.9 73.8-73.8 2.3 170 127.4-127.5-83.9-88.7z"]},{prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]},{prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M16 319.1C16 245.9 118.3 89.43 166.9 19.3C179.2 1.585 204.8 1.585 217.1 19.3C265.7 89.43 368 245.9 368 319.1C368 417.2 289.2 496 192 496C94.8 496 16 417.2 16 319.1zM112 319.1C112 311.2 104.8 303.1 96 303.1C87.16 303.1 80 311.2 80 319.1C80 381.9 130.1 432 192 432C200.8 432 208 424.8 208 416C208 407.2 200.8 400 192 400C147.8 400 112 364.2 112 319.1z"]},{prefix:"fas",iconName:"link-slash",icon:[640,512,["chain-broken","chain-slash","unlink"],"f127","M185.7 120.3C242.5 75.82 324.7 79.73 376.1 131.1C420.1 175.1 430.9 239.6 406.7 293.5L438.6 318.4L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.1 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.732 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L489.3 358.2L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L185.7 120.3zM238.1 161.1L353.4 251.7C359.3 225.5 351.7 197.2 331.7 177.2C306.6 152.1 269.1 147 238.1 161.1V161.1zM263 380C233.1 350.1 218.7 309.8 220.9 270L406.6 416.4C357.4 431 301.9 418.9 263 380V380zM116.6 187.9L167.2 227.8L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L116.6 187.9z"]},{prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"]},{prefix:"fas",iconName:"bolt",icon:[384,512,[9889,"zap"],"f0e7","M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"]});const oc=Ue`
<fast-toolbar>
        ${Ni((t=>t.temp),Ue`<div>${t=>t.temp}</div>`)}
        ${Ni((t=>t.heatPwr>=.8),Ue`<i class="active fa-solid fa-bolt"></i>`)}
        ${Ni((t=>t.heatPwr>0&&t.heatPwr<.8),Ue`<i class="fa-solid fa-bolt"></i>`)}
        ${Ni((t=>t.isEspressoConnected),Ue`<i class="fa-solid fa-link"></i>`)}
        ${Ni((t=>!t.isEspressoConnected),Ue`<i class="fa-solid fa-link-slash"></i>`)}
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
                        <fast-number-field ?disabled=${t=>!t.isEspressoConnected} appearance="filled" id="setTemp" name="temp" min="10" max="120" step="1" value=${t=>t.targetTemp} @change=${(t,e)=>t.setTargetTemp(e.event)}>
                            <span slot="end">°C</span>
                        </fast-number-field>
                    </li>
                    <li class="row">
                        <div>kP</div>
                        <fast-number-field ?disabled=${t=>!t.isEspressoConnected} hide-step appearance="filled" id="kP" name="kP" value=${t=>t.p} @change=${(t,e)=>t.setP(e.event)}>
                    </li>
                    <li class="row">    
                        <div>kI</div>
                        <fast-text-field ?disabled=${t=>!t.isEspressoConnected} hide-step appearance="filled" id="kI" name="kI"value=${t=>t.i} @change=${(t,e)=>t.setI(e.event)}>
                    </li>
                    <li class="row">
                        <div>kD</div>
                        <fast-text-field ?disabled=${t=>!t.isEspressoConnected} hide-step appearance="filled" id="kD" value=${t=>t.d} @change=${(t,e)=>t.setP(e.event)}>
                    </li>
                </ul>
        
            </fast-card>
            <fast-card id="status-bar">
                <fast-progress-ring id="connect-progress" ?paused=${t=>!t.isConnecting}></fast-progress-ring>
                <fast-button id="connect" appearance="accent" @click=${t=>t.connectButtonClick()}>
                    <i slot="start" class="fab fa-bluetooth fa-2x"></i>
                    <span>Connect</span>
                </fast-button>
            </fast-card>
        </div>
    </fast-tab-panel>
</fast-tabs>
`,sc=gn`
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
    /* margin: calc(5 * var(--design-unit) * 1px) 0; */
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
`;let lc=class extends tt{constructor(){super(...arguments),this.isConnecting=!1,this.isEspressoConnected=!1}setP(t){this.controller&&this.controller.setP(Number.parseFloat(t.target.currentValue))}setI(t){this.controller&&this.controller.setI(Number.parseFloat(t.target.currentValue))}setD(t){this.controller&&this.controller.setD(Number.parseFloat(t.target.currentValue))}setTargetTemp(t){this.controller&&this.controller.setTargetTemperature(Number.parseFloat(t.target.currentValue))}connectedCallback(){super.connectedCallback(),rc.watch({autoReplaceSvgRoot:this.shadowRoot,observeMutationsRoot:this.shadowRoot})}connectButtonClick(){const t=new uc(this);ic.start([t])}};var cc;ro([D,io("design:type",Boolean)],lc.prototype,"isConnecting",void 0),ro([D,io("design:type",Boolean)],lc.prototype,"isEspressoConnected",void 0),ro([D,io("design:type",Number)],lc.prototype,"p",void 0),ro([D,io("design:type",Number)],lc.prototype,"i",void 0),ro([D,io("design:type",Number)],lc.prototype,"d",void 0),ro([D,io("design:type",Object)],lc.prototype,"targetTemp",void 0),ro([D,io("design:type",Number)],lc.prototype,"temp",void 0),ro([D,io("design:type",Number)],lc.prototype,"heatPwr",void 0),lc=ro([(cc={name:"espresso-app",template:oc,styles:sc},function(t){new G(t,cc).define()})],lc);class uc extends class{onPairingStart(){}onConnected(t){}onTemperatureChange(t){}onHeatPowerChange(t){}onPChange(t){}onIChange(t){}onDChange(t){}onTargetTemperatureChange(t){}}{constructor(t){super(),this.app=t}onPairingStart(){this.app.isConnecting=!0}onConnected(t){this.app.isConnecting=!1,this.app.controller=t}onDisconnected(){this.app.isConnecting=!1,this.app.temp=void 0,this.app.heatPwr=void 0}onTemperatureChange(t){this.app.temp=t}onPChange(t){this.app.p=t}onIChange(t){this.app.i=t}onDChange(t){this.app.d=t}onTargetTemperatureChange(t){this.app.targetTemp=t}}fe.getOrCreate(undefined).withPrefix("fast").register(xi(),Pi(),Li(),Ri(),Gi(),Xi(),Qi(),Ji(),no(),ao(),Gi(),lc),Sa.withDefault(xa.DarkMode),Oa.withDefault(28),Ta.withDefault(8),Da.withDefault(4),Na.withDefault(.3),Fa.withDefault(4),Va.withDefault("20px"),hr.withDefault(fa.from(la.from(ra("#d4964e"))))})();
//# sourceMappingURL=bundle.js.map