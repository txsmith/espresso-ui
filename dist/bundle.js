!function(e){var t={};function r(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(o,s,function(t){return e[t]}.bind(null,s));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([,,,,,,function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));const o=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==e)return e;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===o.trustedTypes&&(o.trustedTypes={createPolicy:(e,t)=>t});const s=Object.freeze([])}).call(this,r(10))},,,function(e,t,r){e.exports=r(11)},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var o=r(6);const s=[],n=o.a.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let i=n;const a=[];function l(){if(a.length)throw a.shift()}function c(e){try{e.call()}catch(e){a.push(e),setTimeout(l,0)}}const h="fast-"+Math.random().toString(36).substring(2,8),u=h+"{",d="}"+h,p=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(i!==n)throw new Error("The HTML policy can only be set once.");i=e},createHTML:e=>i.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(h+":","")),createInterpolationPlaceholder:e=>`${u}${e}${d}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate(e){s.length<1&&window.requestAnimationFrame(p.processUpdates),s.push(e)},processUpdates(){let e=0;for(;e<s.length;)if(c(s[e]),e++,e>1024){for(let t=0,r=s.length-e;t<r;t++)s[t]=s[t+e];s.length-=e,e=0}s.length=0},nextUpdate:()=>new Promise(e=>{p.queueUpdate(e)}),setAttribute(e,t,r){null==r?e.removeAttribute(t):e.setAttribute(t,r)},setBooleanAttribute(e,t,r){r?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function f(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function g(e){const t=this.spillover,r=t.indexOf(e);-1!==r&&t.splice(r,1)}function b(e){const t=this.spillover,r=this.source;for(let o=0,s=t.length;o<s;++o)t[o].handleChange(r,e)}function m(e){return-1!==this.spillover.indexOf(e)}class v{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=f,this.unsubscribe=g,this.notify=b,this.has=m,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,r=this.sub2,o=this.source;void 0!==t&&t.handleChange(o,e),void 0!==r&&r.handleChange(o,e)}}class y{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const r=this.subscribers[e];void 0!==r&&r.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var r;if(t){let r=this.subscribers[t];void 0===r&&(this.subscribers[t]=r=new v(this.source)),r.subscribe(e)}else this.sourceSubscribers=null!==(r=this.sourceSubscribers)&&void 0!==r?r:new v(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var r;if(t){const r=this.subscribers[t];void 0!==r&&r.unsubscribe(e)}else null===(r=this.sourceSubscribers)||void 0===r||r.unsubscribe(e)}}const w=/(:|&&|\|\||if)/,x=new WeakMap,C=new WeakMap;let $=void 0,k=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class V{constructor(e){this.name=e,this.field="_"+e,this.callback=e+"Changed"}getValue(e){return void 0!==$&&$.watch(e,this.name),e[this.field]}setValue(e,t){const r=this.field,o=e[r];if(o!==t){e[r]=t;const s=e[this.callback];"function"==typeof s&&s.call(e,o,t),D(e).notify(this.name)}}}const F=Object.freeze({setArrayObserverFactory(e){k=e},getNotifier(e){let t=e.$fastController||x.get(e);return void 0===t&&(Array.isArray(e)?t=k(e):x.set(e,t=new y(e))),t},track(e,t){void 0!==$&&$.watch(e,t)},trackVolatile(){void 0!==$&&($.needsRefresh=!0)},notify(e,t){D(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new V(t)),this.getAccessors(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(e){let t=C.get(e);if(void 0===t){let r=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==r;)t=C.get(r),r=Reflect.getPrototypeOf(r);t=void 0===t?[]:t.slice(0),C.set(e,t)}return t},binding(e,t,r=this.isVolatileBinding(e)){return new E(e,t,r)},isVolatileBinding:e=>w.test(e.toString())}),D=F.getNotifier,T=(F.trackVolatile,p.queueUpdate);function S(e,t){F.defineProperty(e,t)}let O=null;function N(e){O=e}class P{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return O}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}F.defineProperty(P.prototype,"index"),F.defineProperty(P.prototype,"length");const L=Object.seal(new P);class E extends v{constructor(e,t,r=!1){super(e,t),this.binding=e,this.isVolatileBinding=r,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const r=$;$=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return $=r,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const r=this.last,o=D(e),s=null===r?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=o,o.subscribe(this,t),null!==r){if(!this.needsRefresh){let t;$=void 0,t=r.propertySource[r.propertyName],$=this,e===t&&(this.needsRefresh=!0)}r.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,T(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}class M{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function I(e){return e.map(e=>e instanceof M?I(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function R(e){return e.map(e=>e instanceof M?e.behaviors:null).reduce((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t)),null)}M.create=(()=>{if(p.supportsAdoptedStyleSheets){const e=new Map;return t=>new A(t,e)}return e=>new j(e)})();class A extends M{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=R(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=I(e).map(e=>{if(e instanceof CSSStyleSheet)return e;let r=t.get(e);return void 0===r&&(r=new CSSStyleSheet,r.replaceSync(e),t.set(e,r)),r})}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>-1===t.indexOf(e)),super.removeStylesFrom(e)}}let B=0;class j extends M{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=R(e),this.styleSheets=I(e),this.styleClass="fast-style-class-"+ ++B}addStylesTo(e){const t=this.styleSheets,r=this.styleClass;e=this.normalizeTarget(e);for(let o=0;o<t.length;o++){const s=document.createElement("style");s.innerHTML=t[o],s.className=r,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll("."+this.styleClass);for(let r=0,o=t.length;r<o;++r)e.removeChild(t[r]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const H={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},z={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class _{constructor(e,t,r=t.toLowerCase(),o="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=r,this.mode=o,this.converter=s,this.fieldName="_"+t,this.callbackName=t+"Changed",this.hasCallback=this.callbackName in e.prototype,"boolean"===o&&void 0===s&&(this.converter=H)}setValue(e,t){const r=e[this.fieldName],o=this.converter;void 0!==o&&(t=o.fromView(t)),r!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,t),e.$fastController.notify(this.name))}getValue(e){return F.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,r=this.guards;r.has(e)||"fromView"===t||p.queueUpdate(()=>{r.add(e);const o=e[this.fieldName];switch(t){case"reflect":const t=this.converter;p.setAttribute(e,this.attribute,void 0!==t?t.toView(o):o);break;case"boolean":p.setBooleanAttribute(e,this.attribute,o)}r.delete(e)})}static collect(e,...t){const r=[];t.push(e.attributes);for(let o=0,s=t.length;o<s;++o){const s=t[o];if(void 0!==s)for(let t=0,o=s.length;t<o;++t){const o=s[t];"string"==typeof o?r.push(new _(e,o)):r.push(new _(e,o.property,o.attribute,o.mode,o.converter))}}return r}}function q(e,t){let r;function o(e,t){arguments.length>1&&(r.property=t);const o=e.constructor.attributes||(e.constructor.attributes=[]);o.push(r)}return arguments.length>1?(r={},void o(e,t)):(r=void 0===e?{}:e,o)}const U={mode:"open"},G={},W=new Map;class K{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const r=_.collect(e,t.attributes),o=new Array(r.length),s={},n={};for(let e=0,t=r.length;e<t;++e){const t=r[e];o[e]=t.attribute,s[t.name]=t,n[t.attribute]=t}this.attributes=r,this.observedAttributes=o,this.propertyLookup=s,this.attributeLookup=n,this.shadowOptions=void 0===t.shadowOptions?U:null===t.shadowOptions?void 0:Object.assign(Object.assign({},U),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?G:Object.assign(Object.assign({},G),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?M.create(t.styles):t.styles instanceof M?t.styles:M.create([t.styles])}define(e=customElements){const t=this.type;if(!this.isDefined){const e=this.attributes,r=t.prototype;for(let t=0,o=e.length;t<o;++t)F.defineProperty(r,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),W.set(t,this),this.isDefined=!0}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}static forType(e){return W.get(e)}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function X(e,t,r,o){var s,n=arguments.length,i=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,r,i):s(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i}const Q=new WeakMap,Y={bubbles:!0,composed:!0,cancelable:!0};function Z(e){return e.shadowRoot||Q.get(e)||null}class J extends y{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const r=t.shadowOptions;if(void 0!==r){const t=e.attachShadow(r);"closed"===r.mode&&Q.set(e,t)}const o=F.getAccessors(e);if(o.length>0){const t=this.boundObservables=Object.create(null);for(let r=0,s=o.length;r<s;++r){const s=o[r].name,n=e[s];void 0!==n&&(delete e[s],t[s]=n)}}}get isConnected(){return F.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,F.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=Z(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const r=e.behaviors;e.addStylesTo(t),null!==r&&this.addBehaviors(r)}}removeStyles(e){const t=Z(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const r=e.behaviors;e.removeStylesFrom(t),null!==r&&this.removeBehaviors(r)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),r=e.length,o=[];for(let s=0;s<r;++s){const r=e[s];t.has(r)?t.set(r,t.get(r)+1):(t.set(r,1),o.push(r))}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].bind(e,L)}}removeBehaviors(e,t=!1){const r=this.behaviors;if(null===r)return;const o=e.length,s=[];for(let n=0;n<o;++n){const o=e[n];if(r.has(o)){const e=r.get(o)-1;0===e||t?r.delete(o)&&s.push(o):r.set(o,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,L);const t=this.behaviors;if(null!==t)for(const[r]of t)r.bind(e,L);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[r]of t)r.unbind(e)}}onAttributeChangedCallback(e,t,r){const o=this.definition.attributeLookup[e];void 0!==o&&o.onAttributeChangedCallback(this.element,r)}emit(e,t,r){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Y),r)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const r=Object.keys(t);for(let o=0,s=r.length;o<s;++o){const s=r[o];e[s]=t[s]}this.boundObservables=null}const r=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,r=Z(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||p.removeChildNodes(r),e&&(this.view=e.render(t,r,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const r=K.forType(e.constructor);if(void 0===r)throw new Error("Missing FASTElement definition.");return e.$fastController=new J(e,r)}}function ee(e){return class extends e{constructor(){super(),J.forCustomElement(this)}$emit(e,t,r){return this.$fastController.emit(e,t,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,r){this.$fastController.onAttributeChangedCallback(e,t,r)}}}const te=Object.assign(ee(HTMLElement),{from:e=>ee(e),define:(e,t)=>new K(e,t).define().type});const re=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(r){Reflect.defineMetadata(e,t,r)}},Reflect.defineMetadata=function(e,t,r){let o=re.get(r);void 0===o&&re.set(r,o=new Map),o.set(e,t)},Reflect.getOwnMetadata=function(e,t){const r=re.get(t);if(void 0!==r)return r.get(e)});class oe{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Se(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:r,key:o}=this;return this.container=this.key=void 0,r.registerResolver(o,new me(o,e,t))}}function se(e){const t=e.slice(),r=Object.keys(e),o=r.length;let s;for(let n=0;n<o;++n)s=r[n],Re(s)||(t[s]=e[s]);return t}const ne=Object.freeze({none(e){throw Error(e.toString()+" not registered, did you forget to add @singleton()?")},singleton:e=>new me(e,1,e),transient:e=>new me(e,2,e)}),ie=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:ne.singleton})}),ae=new Map;function le(e){return t=>Reflect.getOwnMetadata(e,t)}let ce=null;const he=Object.freeze({createContainer:e=>new De(null,Object.assign({},ie.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:he.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Ve,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||he.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new De(e,Object.assign({},ie.default,t,{parentLocator:he.findParentContainer})):ce||(ce=new De(null,Object.assign({},ie.default,t,{parentLocator:()=>null}))),getDesignParamtypes:le("design:paramtypes"),getAnnotationParamtypes:le("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=ae.get(e);if(void 0===t){const r=e.inject;if(void 0===r){const r=he.getDesignParamtypes(e),o=he.getAnnotationParamtypes(e);if(void 0===r)if(void 0===o){const r=Object.getPrototypeOf(e);t="function"==typeof r&&r!==Function.prototype?se(he.getDependencies(r)):[]}else t=se(o);else if(void 0===o)t=se(r);else{t=se(r);let e,s=o.length;for(let r=0;r<s;++r)e=o[r],void 0!==e&&(t[r]=e);const n=Object.keys(o);let i;s=n.length;for(let e=0;e<s;++e)i=n[e],Re(i)||(t[i]=o[i])}}else t=se(r);ae.set(e,t)}return t},defineProperty(e,t,r,o=!1){const s="$di_"+t;Reflect.defineProperty(e,t,{get:function(){let e=this[s];if(void 0===e){const n=this instanceof HTMLElement?he.findResponsibleContainer(this):he.getOrCreateDOMContainer();if(e=n.get(r),this[s]=e,o&&this instanceof te){const o=this.$fastController,n=()=>{he.findResponsibleContainer(this).get(r)!==this[s]&&(this[s]=e,o.notify(t))};o.subscribe({handleChange:n},"isConnected")}}return e}})},createInterface(e,t){const r="function"==typeof e?e:t,o="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Le,s="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,r){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(t)he.defineProperty(e,t,n,s);else{he.getOrCreateAnnotationParamTypes(e)[r]=n}};return n.$isInterface=!0,n.friendlyName=null==o?"(anonymous)":o,null!=r&&(n.register=function(e,t){return r(new oe(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,r,o){if("number"==typeof o){const r=he.getOrCreateAnnotationParamTypes(t),s=e[0];void 0!==s&&(r[o]=s)}else if(r)he.defineProperty(t,r,e[0]);else{const r=o?he.getOrCreateAnnotationParamTypes(o.value):he.getOrCreateAnnotationParamTypes(t);let s;for(let t=0;t<e.length;++t)s=e[t],void 0!==s&&(r[t]=s)}},transient:e=>(e.register=function(t){return Oe.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=pe)=>(e.register=function(t){return Oe.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),ue=he.createInterface("Container");function de(e){return function(t){const r=function(e,t,o){he.inject(r)(e,t,o)};return r.$isResolver=!0,r.resolve=function(r,o){return e(t,r,o)},r}}he.inject;const pe={scoped:!1};fe=(e,t,r,o)=>r.getAll(e,o);var fe;de((e,t,r)=>()=>r.get(e)),de((e,t,r)=>r.has(e,!0)?r.get(e):void 0);function ge(e,t,r){he.inject(ge)(e,t,r)}ge.$isResolver=!0,ge.resolve=()=>{};de((e,t,r)=>{const o=be(e,t),s=new me(e,0,o);return r.registerResolver(e,s),o}),de((e,t,r)=>be(e,t));function be(e,t){return t.getFactory(e).construct(t)}class me{constructor(e,t,r){this.key=e,this.strategy=t,this.state=r,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error("Cyclic dependency found: "+this.state.name);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const r=e.getFactory(this.state);if(null===r)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return r.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,r,o;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(o=null===(r=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===r?void 0:r.call(t,e))&&void 0!==o?o:null;default:return null}}}function ve(e){return this.get(e)}function ye(e,t){return t(e)}class we{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let r;return r=void 0===t?new this.Type(...this.dependencies.map(ve,e)):new this.Type(...this.dependencies.map(ve,e),...t),null==this.transformers?r:this.transformers.reduce(ye,r)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const xe={$isResolver:!0,resolve:(e,t)=>t};function Ce(e){return"function"==typeof e.register}function $e(e){return function(e){return Ce(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const ke=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ve="__DI_LOCATE_PARENT__",Fe=new Map;class De{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ue,xe),e instanceof Node&&e.addEventListener(Ve,e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())})}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,r,o,s,n;const i=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Ee(t))if(Ce(t))t.register(this,i);else if(void 0!==t.prototype)Oe.singleton(t,t).register(this);else for(r=Object.keys(t),s=0,n=r.length;s<n;++s)o=t[r[s]],Ee(o)&&(Ce(o)?o.register(this,i):this.register(o));return--this.registerDepth,this}registerResolver(e,t){Ne(e);const r=this.resolvers,o=r.get(e);return null==o?r.set(e,t):o instanceof me&&4===o.strategy?o.state.push(t):r.set(e,new me(e,4,[o,t])),t}registerTransformer(e,t){const r=this.getResolver(e);if(null==r)return!1;if(r.getFactory){const e=r.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ne(e),void 0!==e.resolve)return e;let r,o=this;for(;null!=o;){if(r=o.resolvers.get(e),null!=r)return r;if(null==o.parent){const r=$e(e)?this:o;return t?this.jitRegister(e,r):null}o=o.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ne(e),e.$isResolver)return e.resolve(this,this);let t,r=this;for(;null!=r;){if(t=r.resolvers.get(e),null!=t)return t.resolve(r,this);if(null==r.parent){const o=$e(e)?this:r;return t=this.jitRegister(e,o),t.resolve(r,this)}r=r.parent}throw new Error("Unable to resolve key: "+e)}getAll(e,t=!1){Ne(e);const r=this;let s,n=r;if(t){let t=o.b;for(;null!=n;)s=n.resolvers.get(e),null!=s&&(t=t.concat(Pe(s,n,r))),n=n.parent;return t}for(;null!=n;){if(s=n.resolvers.get(e),null!=s)return Pe(s,n,r);if(n=n.parent,null==n)return o.b}return o.b}getFactory(e){let t=Fe.get(e);if(void 0===t){if(Me(e))throw new Error(e.name+" is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.");Fe.set(e,t=new we(e,he.getDependencies(e)))}return t}registerFactory(e,t){Fe.set(e,t)}createChild(e){return new De(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(ke.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Ce(e)){const r=e.register(t);if(!(r instanceof Object)||null==r.resolve){const r=t.resolvers.get(e);if(null!=r)return r;throw new Error("A valid resolver was not returned from the static register method")}return r}if(e.$isInterface)throw new Error("Attempted to jitRegister an interface: "+e.friendlyName);{const r=this.config.defaultResolver(e,t);return t.resolvers.set(e,r),r}}}const Te=new WeakMap;function Se(e){return function(t,r,o){if(Te.has(o))return Te.get(o);const s=e(t,r,o);return Te.set(o,s),s}}const Oe=Object.freeze({instance:(e,t)=>new me(e,0,t),singleton:(e,t)=>new me(e,1,t),transient:(e,t)=>new me(e,2,t),callback:(e,t)=>new me(e,3,t),cachedCallback:(e,t)=>new me(e,3,Se(t)),aliasTo:(e,t)=>new me(t,5,e)});function Ne(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Pe(e,t,r){if(e instanceof me&&4===e.strategy){const o=e.state;let s=o.length;const n=new Array(s);for(;s--;)n[s]=o[s].resolve(t,r);return n}return[e.resolve(t,r)]}const Le="(anonymous)";function Ee(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Me=function(){const e=new WeakMap;let t=!1,r="",o=0;return function(s){return t=e.get(s),void 0===t&&(r=s.toString(),o=r.length,t=o>=29&&o<=100&&125===r.charCodeAt(o-1)&&r.charCodeAt(o-2)<=32&&93===r.charCodeAt(o-3)&&101===r.charCodeAt(o-4)&&100===r.charCodeAt(o-5)&&111===r.charCodeAt(o-6)&&99===r.charCodeAt(o-7)&&32===r.charCodeAt(o-8)&&101===r.charCodeAt(o-9)&&118===r.charCodeAt(o-10)&&105===r.charCodeAt(o-11)&&116===r.charCodeAt(o-12)&&97===r.charCodeAt(o-13)&&110===r.charCodeAt(o-14)&&88===r.charCodeAt(o-15),e.set(s,t)),t}}(),Ie={};function Re(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ie[e];if(void 0!==t)return t;const r=e.length;if(0===r)return Ie[e]=!1;let o=0;for(let t=0;t<r;++t)if(o=e.charCodeAt(t),0===t&&48===o&&r>1||o<48||o>57)return Ie[e]=!1;return Ie[e]=!0}default:return!1}}function Ae(e){return e.toLowerCase()+":presentation"}const Be=new Map,je=Object.freeze({define(e,t,r){const o=Ae(e);void 0===Be.get(o)?Be.set(o,t):Be.set(o,!1),r.register(Oe.instance(o,t))},forTag(e,t){const r=Ae(e),o=Be.get(r);if(!1===o){return he.findResponsibleContainer(t).get(r)}return o||null}});class He{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?M.create(t):t instanceof M?t:M.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class ze extends te{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=je.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new qe(this===ze?class extends ze{}:this,e,t)}}function _e(e,t,r){return"function"==typeof e?e(t,r):e}X([S],ze.prototype,"template",void 0),X([S],ze.prototype,"styles",void 0);class qe{constructor(e,t,r){this.type=e,this.elementDefinition=t,this.overrideDefinition=r,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const r=this.definition,o=this.overrideDefinition,s=`${r.prefix||t.elementPrefix}-${r.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new He(_e(r.template,e,r),_e(r.styles,e,r));e.definePresentation(t);let s=_e(r.shadowOptions,e,r);e.shadowRootMode&&(s?o.shadowOptions||(s.mode=e.shadowRootMode):null!==s&&(s={mode:e.shadowRootMode})),e.defineElement({elementOptions:_e(r.elementOptions,e,r),shadowOptions:s,attributes:_e(r.attributes,e,r)})}})}}class Ue{createCSS(){return""}createBehavior(){}}function Ge(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const We=document.createElement("div");class Ke{setProperty(e,t){p.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){p.queueUpdate(()=>this.target.removeProperty(e))}}class Xe extends Ke{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Qe extends Ke{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Ye{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),F.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),p.queueUpdate(()=>{null!==this.target&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),p.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:r}=this.style;if(r){const e=r.insertRule(":host{}",r.cssRules.length);this.target=r.cssRules[e].style}else this.target=null}}X([S],Ye.prototype,"target",void 0);class Ze{constructor(e){this.target=e.style}setProperty(e,t){p.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){p.queueUpdate(()=>this.target.removeProperty(e))}}class Je{setProperty(e,t){Je.properties[e]=t;for(const r of Je.roots.values())rt.getOrCreate(Je.normalizeRoot(r)).setProperty(e,t)}removeProperty(e){delete Je.properties[e];for(const t of Je.roots.values())rt.getOrCreate(Je.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Je;if(!t.has(e)){t.add(e);const r=rt.getOrCreate(this.normalizeRoot(e));for(const e in Je.properties)r.setProperty(e,Je.properties[e])}}static unregisterRoot(e){const{roots:t}=Je;if(t.has(e)){t.delete(e);const r=rt.getOrCreate(Je.normalizeRoot(e));for(const e in Je.properties)r.removeProperty(e)}}static normalizeRoot(e){return e===We?document:e}}Je.roots=new Set,Je.properties={};const et=new WeakMap,tt=p.supportsAdoptedStyleSheets?class extends Ke{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(M.create([t]))}}:Ye,rt=Object.freeze({getOrCreate(e){if(et.has(e))return et.get(e);let t;return e===We?t=new Je:e instanceof Document?t=p.supportsAdoptedStyleSheets?new Xe:new Qe:t=e instanceof te?new tt(e):new Ze(e),et.set(e,t),t}});class ot extends Ue{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty="--"+e.cssCustomPropertyName,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ot.uniqueId(),ot.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ot({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return ot.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=lt.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ot&&(t=this.alias(t)),lt.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),lt.existsFor(e)&&lt.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(We,e),this}subscribe(e,t){const r=this.getOrCreateSubscriberSet(t);t&&!lt.existsFor(t)&&lt.getOrCreate(t),r.has(e)||r.add(e)}unsubscribe(e,t){const r=this.subscribers.get(t||this);r&&r.has(e)&&r.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(e=>e.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(e=>e.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}ot.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),ot.tokensById=new Map;class st{constructor(e,t,r){this.source=e,this.token=t,this.node=r,this.dependencies=new Set,this.observer=F.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,L))}}class nt{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),F.getNotifier(this).notify(e.id))}get(e){return F.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const it=new WeakMap,at=new WeakMap;class lt{constructor(e){this.target=e,this.store=new nt,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const r=ot.getTokenById(t);if(r&&(r.notify(this.target),ot.isCSSDesignToken(r))){const t=this.parent,o=this.isReflecting(r);if(t){const s=t.get(r),n=e.get(r);s===n||o?s===n&&o&&this.stopReflectToCSS(r):this.reflectToCSS(r)}else o||this.reflectToCSS(r)}}},it.set(e,this),F.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof te?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return it.get(e)||new lt(e)}static existsFor(e){return it.has(e)}static findParent(e){if(We!==e.target){let t=Ge(e.target);for(;null!==t;){if(it.has(t))return it.get(t);t=Ge(t)}return lt.getOrCreate(We)}return null}static findClosestAssignedNode(e,t){let r=t;do{if(r.has(e))return r;r=r.parent?r.parent:r.target!==We?lt.getOrCreate(We):null}while(null!==r);return null}get parent(){return at.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const r=this.getRaw(e);return void 0!==r?(this.hydrate(e,r),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=lt.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){ot.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ot.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=lt.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){at.get(this).removeChild(this)}}appendChild(e){e.parent&&at.get(e).removeChild(e);const t=this.children.filter(t=>e.contains(t));at.set(e,this),this.children.push(e),t.forEach(t=>e.appendChild(t)),F.getNotifier(this.store).subscribe(e);for(const[t,r]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):r)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),F.getNotifier(this.store).unsubscribe(e),e.parent===this&&at.delete(e)}contains(e){return function(e,t){let r=t;for(;null!==r;){if(r===e)return!0;r=Ge(r)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),lt.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),lt.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const r=ot.getTokenById(t);r&&this.hydrate(r,this.getRaw(r))}hydrate(e,t){if(!this.has(e)){const r=this.bindingObservers.get(e);ot.isDerivedDesignTokenValue(t)?r?r.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(r&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const r=new st(t,e,this);return this.bindingObservers.set(e,r),r}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}lt.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:r}=e;this.add(t,r)}add(e,t){rt.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(lt.getOrCreate(t).get(e)))}remove(e,t){rt.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},X([S],lt.prototype,"children",void 0);const ct=Object.freeze({create:function(e){return ot.from(e)},notifyConnection:e=>!(!e.isConnected||!lt.existsFor(e))&&(lt.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!lt.existsFor(e))&&(lt.getOrCreate(e).unbind(),!0),registerRoot(e=We){Je.registerRoot(e)},unregisterRoot(e=We){Je.unregisterRoot(e)}}),ht=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ut=new Map,dt=new Map;let pt=null;const ft=he.createInterface(e=>e.cachedCallback(e=>(null===pt&&(pt=new bt(null,e)),pt))),gt=Object.freeze({tagFor:e=>dt.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return he.findResponsibleContainer(e).get(ft)},getOrCreate(e){if(!e)return null===pt&&(pt=he.getOrCreateDOMContainer().get(ft)),pt;const t=e.$$designSystem$$;if(t)return t;const r=he.getOrCreateDOMContainer(e);if(r.has(ft,!1))return r.get(ft);{const t=new bt(e,r);return r.register(Oe.instance(ft,t)),t}}});class bt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>ht.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,r=[],o=this.disambiguate,s=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(e,n,i){const a=function(e,t,r){return"string"==typeof e?{name:e,type:t,callback:r}:e}(e,n,i),{name:l,callback:c,baseClass:h}=a;let{type:u}=a,d=l,p=ut.get(d),f=!0;for(;p;){const e=o(d,u,p);switch(e){case ht.ignoreDuplicate:return;case ht.definitionCallbackOnly:f=!1,p=void 0;break;default:d=e,p=ut.get(d)}}f&&((dt.has(u)||u===ze)&&(u=class extends u{}),ut.set(d,u),dt.set(u,d),h&&dt.set(h,d)),r.push(new mt(t,d,u,s,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&ct.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(const e of r)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class mt{constructor(e,t,r,o,s,n){this.container=e,this.name=t,this.type=r,this.shadowRootMode=o,this.callback=s,this.willDefine=n,this.definition=null}definePresentation(e){je.define(this.name,e,this.container)}defineElement(e){this.definition=new K(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return gt.tagFor(e)}}class vt{}X([q({attribute:"aria-atomic",mode:"fromView"})],vt.prototype,"ariaAtomic",void 0),X([q({attribute:"aria-busy",mode:"fromView"})],vt.prototype,"ariaBusy",void 0),X([q({attribute:"aria-controls",mode:"fromView"})],vt.prototype,"ariaControls",void 0),X([q({attribute:"aria-current",mode:"fromView"})],vt.prototype,"ariaCurrent",void 0),X([q({attribute:"aria-describedby",mode:"fromView"})],vt.prototype,"ariaDescribedby",void 0),X([q({attribute:"aria-details",mode:"fromView"})],vt.prototype,"ariaDetails",void 0),X([q({attribute:"aria-disabled",mode:"fromView"})],vt.prototype,"ariaDisabled",void 0),X([q({attribute:"aria-errormessage",mode:"fromView"})],vt.prototype,"ariaErrormessage",void 0),X([q({attribute:"aria-flowto",mode:"fromView"})],vt.prototype,"ariaFlowto",void 0),X([q({attribute:"aria-haspopup",mode:"fromView"})],vt.prototype,"ariaHaspopup",void 0),X([q({attribute:"aria-hidden",mode:"fromView"})],vt.prototype,"ariaHidden",void 0),X([q({attribute:"aria-invalid",mode:"fromView"})],vt.prototype,"ariaInvalid",void 0),X([q({attribute:"aria-keyshortcuts",mode:"fromView"})],vt.prototype,"ariaKeyshortcuts",void 0),X([q({attribute:"aria-label",mode:"fromView"})],vt.prototype,"ariaLabel",void 0),X([q({attribute:"aria-labelledby",mode:"fromView"})],vt.prototype,"ariaLabelledby",void 0),X([q({attribute:"aria-live",mode:"fromView"})],vt.prototype,"ariaLive",void 0),X([q({attribute:"aria-owns",mode:"fromView"})],vt.prototype,"ariaOwns",void 0),X([q({attribute:"aria-relevant",mode:"fromView"})],vt.prototype,"ariaRelevant",void 0),X([q({attribute:"aria-roledescription",mode:"fromView"})],vt.prototype,"ariaRoledescription",void 0);class yt{constructor(){this.targetIndex=0}}class wt extends yt{constructor(){super(...arguments),this.createPlaceholder=p.createInterpolationPlaceholder}}class xt extends yt{constructor(e,t,r){super(),this.name=e,this.behavior=t,this.options=r}createPlaceholder(e){return p.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Ct(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=F.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function $t(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function kt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Vt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Ft(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Dt(e){p.setAttribute(this.target,this.targetName,e)}function Tt(e){p.setBooleanAttribute(this.target,this.targetName,e)}function St(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Ot(e){this.target[this.targetName]=e}function Nt(e){const t=this.classVersions||Object.create(null),r=this.target;let o=this.version||0;if(null!=e&&e.length){const s=e.split(/\s+/);for(let e=0,n=s.length;e<n;++e){const n=s[e];""!==n&&(t[n]=o,r.classList.add(n))}}if(this.classVersions=t,this.version=o+1,0!==o){o-=1;for(const e in t)t[e]===o&&r.classList.remove(e)}}class Pt extends wt{constructor(e){super(),this.binding=e,this.bind=Ct,this.unbind=kt,this.updateTarget=Dt,this.isBindingVolatile=F.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Ot,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,r)=>p.createHTML(e(t,r))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Tt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=$t,this.unbind=Ft;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Nt)}}targetAtContent(){this.updateTarget=St,this.unbind=Vt}createBehavior(e){return new Lt(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Lt{constructor(e,t,r,o,s,n,i){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=r,this.bind=o,this.unbind=s,this.updateTarget=n,this.targetName=i}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){N(e);const t=this.binding(this.source,this.context);N(null),!0!==t&&e.preventDefault()}}let Et=null;class Mt{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Et=this}static borrow(e){const t=Et||new Mt;return t.directives=e,t.reset(),Et=null,t}}function It(e){if(1===e.length)return e[0];let t;const r=e.length,o=e.map(e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding)),s=new Pt((e,t)=>{let s="";for(let n=0;n<r;++n)s+=o[n](e,t);return s});return s.targetName=t,s}const Rt=d.length;function At(e,t){const r=t.split(u);if(1===r.length)return null;const o=[];for(let t=0,s=r.length;t<s;++t){const s=r[t],n=s.indexOf(d);let i;if(-1===n)i=s;else{const t=parseInt(s.substring(0,n));o.push(e.directives[t]),i=s.substring(n+Rt)}""!==i&&o.push(i)}return o}function Bt(e,t,r=!1){const o=t.attributes;for(let s=0,n=o.length;s<n;++s){const i=o[s],a=i.value,l=At(e,a);let c=null;null===l?r&&(c=new Pt(()=>a),c.targetName=i.name):c=It(l),null!==c&&(t.removeAttributeNode(i),s--,n--,e.addFactory(c))}}function jt(e,t,r){const o=At(e,t.textContent);if(null!==o){let s=t;for(let n=0,i=o.length;n<i;++n){const i=o[n],a=0===n?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);"string"==typeof i?a.textContent=i:(a.textContent=" ",e.captureContentBinding(i)),s=a,e.targetIndex++,a!==t&&r.nextNode()}e.targetIndex--}}const Ht=document.createRange();class zt{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,r=this.lastChild;let o,s=this.firstChild;for(;s!==r;)o=s.nextSibling,t.insertBefore(s,e),s=o;t.insertBefore(r,e)}}remove(){const e=this.fragment,t=this.lastChild;let r,o=this.firstChild;for(;o!==t;)r=o.nextSibling,e.appendChild(o),o=r;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let r,o=this.firstChild;for(;o!==t;)r=o.nextSibling,e.removeChild(o),o=r;e.removeChild(t);const s=this.behaviors,n=this.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(n)}bind(e,t){const r=this.behaviors;if(this.source!==e)if(null!==this.source){const o=this.source;this.source=e,this.context=t;for(let s=0,n=r.length;s<n;++s){const n=r[s];n.unbind(o),n.bind(e,t)}}else{this.source=e,this.context=t;for(let o=0,s=r.length;o<s;++o)r[o].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let r=0,o=e.length;r<o;++r)e[r].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Ht.setStartBefore(e[0].firstChild),Ht.setEndAfter(e[e.length-1].lastChild),Ht.deleteContents();for(let t=0,r=e.length;t<r;++t){const r=e[t],o=r.behaviors,s=r.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(s)}}}}class _t{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=p.createHTML(t);const r=e.content.firstElementChild;null!==r&&"TEMPLATE"===r.tagName&&(e=r)}else e=t;const r=function(e,t){const r=e.content;document.adoptNode(r);const o=Mt.borrow(t);Bt(o,e,!0);const s=o.behaviorFactories;o.reset();const n=p.createTemplateWalker(r);let i;for(;i=n.nextNode();)switch(o.targetIndex++,i.nodeType){case 1:Bt(o,i);break;case 3:jt(o,i,n);break;case 8:p.isMarker(i)&&o.addFactory(t[p.extractDirectiveIndexFromMarker(i)])}let a=0;(p.isMarker(r.firstChild)||1===r.childNodes.length&&t.length)&&(r.insertBefore(document.createComment(""),r.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:r,viewBehaviorFactories:l,hostBehaviorFactories:s,targetOffset:a}}(e,this.directives);this.fragment=r.fragment,this.viewBehaviorFactories=r.viewBehaviorFactories,this.hostBehaviorFactories=r.hostBehaviorFactories,this.targetOffset=r.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,o=new Array(this.behaviorCount),s=p.createTemplateWalker(t);let n=0,i=this.targetOffset,a=s.nextNode();for(let e=r.length;n<e;++n){const e=r[n],t=e.targetIndex;for(;null!==a;){if(i===t){o[n]=e.createBehavior(a);break}a=s.nextNode(),i++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let r=0,s=t.length;r<s;++r,++n)o[n]=t[r].createBehavior(e)}return new zt(t,o)}render(e,t,r){"string"==typeof t&&(t=document.getElementById(t)),void 0===r&&(r=t);const o=this.create(r);return o.bind(e,L),o.appendTo(t),o}}const qt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ut(e,...t){const r=[];let o="";for(let s=0,n=e.length-1;s<n;++s){const n=e[s];let i=t[s];if(o+=n,i instanceof _t){const e=i;i=()=>e}if("function"==typeof i&&(i=new Pt(i)),i instanceof wt){const e=qt.exec(n);null!==e&&(i.targetName=e[2])}i instanceof yt?(o+=i.createPlaceholder(r.length),r.push(i)):o+=i}return o+=e[e.length-1],new _t(o,r)}class Gt{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Wt(e){return new xt("fast-ref",Gt,e)}class Kt{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Xt=(e,t)=>Ut`
    <span
        part="end"
        ${Wt("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Wt("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Qt=(e,t)=>Ut`
    <span
        part="start"
        ${Wt("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Wt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Ut`
    <span part="end" ${Wt("endContainer")}>
        <slot
            name="end"
            ${Wt("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Ut`
    <span part="start" ${Wt("startContainer")}>
        <slot
            name="start"
            ${Wt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function Yt(e,...t){t.forEach(t=>{if(Object.getOwnPropertyNames(t.prototype).forEach(r=>{"constructor"!==r&&Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))}),t.attributes){const r=e.attributes||[];e.attributes=r.concat(t.attributes)}})}var Zt;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Zt||(Zt={}));const Jt={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",ArrowUp:"ArrowUp"},er="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,tr=new Map;function rr(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return er}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=e?t.concat(Array.from(e)):t;return Object.freeze(r)}return o.b}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),p.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),p.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!er)return null;let e=tr.get(this);return e||(e=this.attachInternals(),tr.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,r){this.elementInternals?this.elementInternals.setValidity(e,t,r):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(e=>this.proxy.addEventListener(e,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot","form-associated-proxy"),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name","form-associated-proxy")),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){switch(e.key){case"Enter":if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}}stopPropagation(e){e.stopPropagation()}};return q({mode:"boolean"})(t.prototype,"disabled"),q({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),q({attribute:"current-value"})(t.prototype,"currentValue"),q(t.prototype,"name"),q({mode:"boolean"})(t.prototype,"required"),S(t.prototype,"value"),t}class or extends ze{}class sr extends(rr(or)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class nr extends sr{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.removeEventListener("click",this.handleClick)})}}X([q({mode:"boolean"})],nr.prototype,"autofocus",void 0),X([q({attribute:"form"})],nr.prototype,"formId",void 0),X([q],nr.prototype,"formaction",void 0),X([q],nr.prototype,"formenctype",void 0),X([q],nr.prototype,"formmethod",void 0),X([q({mode:"boolean"})],nr.prototype,"formnovalidate",void 0),X([q],nr.prototype,"formtarget",void 0),X([q],nr.prototype,"type",void 0),X([S],nr.prototype,"defaultSlottedContent",void 0);class ir{}X([q({attribute:"aria-expanded",mode:"fromView"})],ir.prototype,"ariaExpanded",void 0),X([q({attribute:"aria-pressed",mode:"fromView"})],ir.prototype,"ariaPressed",void 0),Yt(ir,vt),Yt(nr,Kt,ir);class ar extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=F.getAccessors(e).some(e=>e.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(o.b),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function lr(e){return"string"==typeof e&&(e={property:e}),new xt("fast-slotted",ar,e)}function cr(e,t){const r=[];let o="";const s=[];for(let n=0,i=e.length-1;n<i;++n){o+=e[n];let i=t[n];if(i instanceof Ue){const e=i.createBehavior();i=i.createCSS(),e&&s.push(e)}i instanceof M||i instanceof CSSStyleSheet?(""!==o.trim()&&(r.push(o),o=""),r.push(i)):o+=i}return o+=e[e.length-1],""!==o.trim()&&r.push(o),{styles:r,behaviors:s}}function hr(e,...t){const{styles:r,behaviors:o}=cr(e,t),s=M.create(r);return o.length&&s.withBehaviors(...o),s}class ur extends Ue{constructor(e,t){super(),this.behaviors=t,this.css="";const r=e.reduce((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e),[]);r.length&&(this.styles=M.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}class dr extends class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,r=this.constructListener(e);r.bind(t)(),t.addListener(r),this.listenerCache.set(e,r)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new dr(e,t)}constructListener(e){let t=!1;const r=this.styles;return function(){const{matches:o}=this;o&&!t?(e.$fastController.addStyles(r),t=o):!o&&t&&(e.$fastController.removeStyles(r),t=o)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const pr=dr.with(window.matchMedia("(forced-colors)"));dr.with(window.matchMedia("(prefers-color-scheme: dark)")),dr.with(window.matchMedia("(prefers-color-scheme: light)"));var fr,gr;function br(e,t,r){return isNaN(e)||e<=t?t:e>=r?r:e}function mr(e,t,r){return isNaN(e)||e<=t?0:e>=r?1:e/(r-t)}function vr(e,t,r){return isNaN(e)?t:t+e*(r-t)}function yr(e){return e*(Math.PI/180)}function wr(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:t+e*(r-t)}function xr(e,t,r){if(e<=0)return t%360;if(e>=1)return r%360;const o=(t-r+360)%360;return o<=(r-t+360)%360?(t-o*e+360)%360:(t+o*e+360)%360}!function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"}(fr||(fr={})),function(e){e.ltr="ltr",e.rtl="rtl"}(gr||(gr={}));Math.PI;function Cr(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}class $r{constructor(e,t,r,o){this.r=e,this.g=t,this.b=r,this.a="number"!=typeof o||isNaN(o)?1:o}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new $r(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(vr(this.r,0,255))},${Math.round(vr(this.g,0,255))},${Math.round(vr(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(vr(this.r,0,255))},${Math.round(vr(this.g,0,255))},${Math.round(vr(this.b,0,255))},${br(this.a,0,1)})`}roundToPrecision(e){return new $r(Cr(this.r,e),Cr(this.g,e),Cr(this.b,e),Cr(this.a,e))}clamp(){return new $r(br(this.r,0,1),br(this.g,0,1),br(this.b,0,1),br(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(br(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(vr(e,0,255))}}class kr{constructor(e,t,r){this.h=e,this.s=t,this.l=r}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new kr(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new kr(Cr(this.h,e),Cr(this.s,e),Cr(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Vr{constructor(e,t,r){this.h=e,this.s=t,this.v=r}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.v)?null:new Vr(e.h,e.s,e.v)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new Vr(Cr(this.h,e),Cr(this.s,e),Cr(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class Fr{constructor(e,t,r){this.l=e,this.a=t,this.b=r}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new Fr(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Fr(Cr(this.l,e),Cr(this.a,e),Cr(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Fr.epsilon=216/24389,Fr.kappa=24389/27;class Dr{constructor(e,t,r){this.l=e,this.c=t,this.h=r}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.c)||isNaN(e.h)?null:new Dr(e.l,e.c,e.h)}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new Dr(Cr(this.l,e),Cr(this.c,e),Cr(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class Tr{constructor(e,t,r){this.x=e,this.y=t,this.z=r}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new Tr(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Tr(Cr(this.x,e),Cr(this.y,e),Cr(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Sr(e){return.2126*e.r+.7152*e.g+.0722*e.b}function Or(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return Sr(new $r(t(e.r),t(e.g),t(e.b),1))}Tr.whitePoint=new Tr(.95047,1,1.08883);const Nr=(e,t)=>(e+.05)/(t+.05);function Pr(e,t){const r=Or(e),o=Or(t);return r>o?Nr(r,o):Nr(o,r)}function Lr(e){const t=Math.max(e.r,e.g,e.b),r=Math.min(e.r,e.g,e.b),o=t-r;let s=0;0!==o&&(s=t===e.r?(e.g-e.b)/o%6*60:t===e.g?60*((e.b-e.r)/o+2):60*((e.r-e.g)/o+4)),s<0&&(s+=360);const n=(t+r)/2;let i=0;return 0!==o&&(i=o/(1-Math.abs(2*n-1))),new kr(s,i,n)}function Er(e,t=1){const r=(1-Math.abs(2*e.l-1))*e.s,o=r*(1-Math.abs(e.h/60%2-1)),s=e.l-r/2;let n=0,i=0,a=0;return e.h<60?(n=r,i=o,a=0):e.h<120?(n=o,i=r,a=0):e.h<180?(n=0,i=r,a=o):e.h<240?(n=0,i=o,a=r):e.h<300?(n=o,i=0,a=r):e.h<360&&(n=r,i=0,a=o),new $r(n+s,i+s,a+s,t)}function Mr(e){const t=Math.max(e.r,e.g,e.b),r=t-Math.min(e.r,e.g,e.b);let o=0;0!==r&&(o=t===e.r?(e.g-e.b)/r%6*60:t===e.g?60*((e.b-e.r)/r+2):60*((e.r-e.g)/r+4)),o<0&&(o+=360);let s=0;return 0!==t&&(s=r/t),new Vr(o,s,t)}function Ir(e){let t=0;(Math.abs(e.b)>.001||Math.abs(e.a)>.001)&&(t=Math.atan2(e.b,e.a)*(180/Math.PI)),t<0&&(t+=360);const r=Math.sqrt(e.a*e.a+e.b*e.b);return new Dr(e.l,r,t)}function Rr(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const r=t(e.r),o=t(e.g),s=t(e.b);return new Tr(.4124564*r+.3575761*o+.1804375*s,.2126729*r+.7151522*o+.072175*s,.0193339*r+.119192*o+.9503041*s)}function Ar(e,t=1){function r(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const o=r(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),s=r(-.969266*e.x+1.8760108*e.y+.041556*e.z),n=r(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new $r(o,s,n,t)}function Br(e){return function(e){function t(e){return e>Fr.epsilon?Math.pow(e,1/3):(Fr.kappa*e+16)/116}const r=t(e.x/Tr.whitePoint.x),o=t(e.y/Tr.whitePoint.y),s=t(e.z/Tr.whitePoint.z);return new Fr(116*o-16,500*(r-o),200*(o-s))}(Rr(e))}function jr(e,t=1){return Ar(function(e){const t=(e.l+16)/116,r=t+e.a/500,o=t-e.b/200,s=Math.pow(r,3),n=Math.pow(t,3),i=Math.pow(o,3);let a=0;a=s>Fr.epsilon?s:(116*r-16)/Fr.kappa;let l=0;l=e.l>Fr.epsilon*Fr.kappa?n:e.l/Fr.kappa;let c=0;return c=i>Fr.epsilon?i:(116*o-16)/Fr.kappa,a=Tr.whitePoint.x*a,l=Tr.whitePoint.y*l,c=Tr.whitePoint.z*c,new Tr(a,l,c)}(e),t)}function Hr(e){return Ir(Br(e))}function zr(e,t=1){return jr(function(e){let t=0,r=0;return 0!==e.h&&(t=Math.cos(yr(e.h))*e.c,r=Math.sin(yr(e.h))*e.c),new Fr(e.l,t,r)}(e),t)}function _r(e,t,r=18){const o=Hr(e);let s=o.c+t*r;return s<0&&(s=0),zr(new Dr(o.l,s,o.h))}function qr(e,t){return e*t}function Ur(e,t){return new $r(qr(e.r,t.r),qr(e.g,t.g),qr(e.b,t.b),1)}function Gr(e,t){return br(e<.5?2*t*e:1-2*(1-t)*(1-e),0,1)}function Wr(e,t){return new $r(Gr(e.r,t.r),Gr(e.g,t.g),Gr(e.b,t.b),1)}var Kr,Xr;function Qr(e,t,r,o){if(isNaN(e)||e<=0)return r;if(e>=1)return o;switch(t){case Xr.HSL:return Er(function(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new kr(xr(e,t.h,r.h),wr(e,t.s,r.s),wr(e,t.l,r.l))}(e,Lr(r),Lr(o)));case Xr.HSV:return function(e,t=1){const r=e.s*e.v,o=r*(1-Math.abs(e.h/60%2-1)),s=e.v-r;let n=0,i=0,a=0;return e.h<60?(n=r,i=o,a=0):e.h<120?(n=o,i=r,a=0):e.h<180?(n=0,i=r,a=o):e.h<240?(n=0,i=o,a=r):e.h<300?(n=o,i=0,a=r):e.h<360&&(n=r,i=0,a=o),new $r(n+s,i+s,a+s,t)}(function(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new Vr(xr(e,t.h,r.h),wr(e,t.s,r.s),wr(e,t.v,r.v))}(e,Mr(r),Mr(o)));case Xr.XYZ:return Ar(function(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new Tr(wr(e,t.x,r.x),wr(e,t.y,r.y),wr(e,t.z,r.z))}(e,Rr(r),Rr(o)));case Xr.LAB:return jr(function(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new Fr(wr(e,t.l,r.l),wr(e,t.a,r.a),wr(e,t.b,r.b))}(e,Br(r),Br(o)));case Xr.LCH:return zr(function(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new Dr(wr(e,t.l,r.l),wr(e,t.c,r.c),xr(e,t.h,r.h))}(e,Hr(r),Hr(o)));default:return function(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new $r(wr(e,t.r,r.r),wr(e,t.g,r.g),wr(e,t.b,r.b),wr(e,t.a,r.a))}(e,r,o)}}!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Kr||(Kr={})),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(Xr||(Xr={}));class Yr{constructor(e){if(null==e||0===e.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(null==e||0===e.length)throw new Error("The colors argument must be non-empty");const t=new Array(e.length);for(let r=0;r<e.length;r++)0===r?t[r]={color:e[r],position:0}:r===e.length-1?t[r]={color:e[r],position:1}:t[r]={color:e[r],position:r*(1/(e.length-1))};return new Yr(t)}getColor(e,t=Xr.RGB){if(1===this.stops.length)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let r=0;for(let t=0;t<this.stops.length;t++)this.stops[t].position<=e&&(r=t);let o=r+1;o>=this.stops.length&&(o=this.stops.length-1);return Qr((e-this.stops[r].position)*(1/(this.stops[o].position-this.stops[r].position)),t,this.stops[r].color,this.stops[o].color)}trim(e,t,r=Xr.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new Yr([{color:this.getColor(e,r),position:0}]);const o=[];for(let r=0;r<this.stops.length;r++)this.stops[r].position>=e&&this.stops[r].position<=t&&o.push(this.stops[r]);if(0===o.length)return new Yr([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);o[0].position!==e&&o.unshift({color:this.getColor(e),position:e}),o[o.length-1].position!==t&&o.push({color:this.getColor(t),position:t});const s=t-e,n=new Array(o.length);for(let t=0;t<o.length;t++)n[t]={color:o[t].color,position:(o[t].position-e)/s};return new Yr(n)}findNextColor(e,t,r=!1,o=Xr.RGB,s=.005,n=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);const i=this.getColor(e,o),a=r?0:1;if(Pr(i,this.getColor(a,o))<=t)return a;let l=r?0:e,c=r?e:0,h=a,u=0;for(;u<=n;){h=Math.abs(c-l)/2+l;const e=Pr(i,this.getColor(h,o));if(Math.abs(e-t)<=s)return h;e>t?r?l=h:c=h:r?c=h:l=h,u++}return h}clone(){const e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new Yr(e)}sortColorScaleStops(e){return e.sort((e,t)=>{const r=e.position,o=t.position;return r<o?-1:r>o?1:0})}}const Zr=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Jr(e){const t=Zr.exec(e);if(null===t)return null;let r=t[1];if(3===r.length){const e=r.charAt(0),t=r.charAt(1),o=r.charAt(2);r=e.concat(e,t,t,o,o)}const o=parseInt(r,16);return isNaN(o)?null:new $r(mr((16711680&o)>>>16,0,255),mr((65280&o)>>>8,0,255),mr(255&o,0,255),1)}class eo{constructor(e){this.config=Object.assign({},eo.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(const r in e)this.config[r]&&(this.config[r].equalValue?this.config[r].equalValue(e[r])||(this.config[r]=e[r],t=!0):e[r]!==this.config[r]&&(this.config[r]=e[r],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){const e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const e=Lr(this.config.baseColor),t=new Yr([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let r=t.getColor(0),o=t.getColor(1);if(e.s>=this.config.saturationAdjustmentCutoff&&(r=_r(r,this.config.saturationLight),o=_r(o,this.config.saturationDark)),0!==this.config.multiplyLight){const e=Ur(this.config.baseColor,r);r=Qr(this.config.multiplyLight,this.config.interpolationMode,r,e)}if(0!==this.config.multiplyDark){const e=Ur(this.config.baseColor,o);o=Qr(this.config.multiplyDark,this.config.interpolationMode,o,e)}if(0!==this.config.overlayLight){const e=Wr(this.config.baseColor,r);r=Qr(this.config.overlayLight,this.config.interpolationMode,r,e)}if(0!==this.config.overlayDark){const e=Wr(this.config.baseColor,o);o=Qr(this.config.overlayDark,this.config.interpolationMode,o,e)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Yr([{position:0,color:this.config.baseColor},{position:1,color:o.clamp()}]):this.config.baseScalePosition>=1?new Yr([{position:0,color:r.clamp()},{position:1,color:this.config.baseColor}]):new Yr([{position:0,color:r.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:o.clamp()}]):new Yr([{position:0,color:r.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:o.clamp()}])}}eo.defaultPaletteConfig={baseColor:Jr("#808080"),steps:11,interpolationMode:Xr.RGB,scaleColorLight:new $r(1,1,1,1),scaleColorDark:new $r(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},eo.greyscalePaletteConfig={baseColor:Jr("#808080"),steps:11,interpolationMode:Xr.RGB,scaleColorLight:new $r(1,1,1,1),scaleColorDark:new $r(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};eo.defaultPaletteConfig.scaleColorLight,eo.defaultPaletteConfig.scaleColorDark;class to{constructor(e){this.palette=[],this.config=Object.assign({},to.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);const t=new $r(.14,.14,.14,1),r=new eo(Object.assign(Object.assign({},eo.greyscalePaletteConfig),{baseColor:t,baseScalePosition:86/94,steps:e})).palette,o=(Sr(this.config.baseColor)+Lr(this.config.baseColor).l)/2,s=this.matchRelativeLuminanceIndex(o,r)/(e-1),n=this.matchRelativeLuminanceIndex(.14,r)/(e-1),i=Lr(this.config.baseColor),a=Er(kr.fromObject({h:i.h,s:i.s,l:.14})),l=Er(kr.fromObject({h:i.h,s:i.s,l:.06})),c=new Array(5);c[0]={position:0,color:new $r(1,1,1,1)},c[1]={position:s,color:this.config.baseColor},c[2]={position:n,color:a},c[3]={position:.99,color:l},c[4]={position:1,color:new $r(0,0,0,1)};const h=new Yr(c);this.palette=new Array(e);for(let t=0;t<e;t++){const r=h.getColor(t/(e-1),Xr.RGB);this.palette[t]=r}}matchRelativeLuminanceIndex(e,t){let r=Number.MAX_VALUE,o=0,s=0;const n=t.length;for(;s<n;s++){const n=Math.abs(Sr(t[s])-e);n<r&&(r=n,o=s)}return o}}function ro(e,t){const r=e.relativeLuminance>t.relativeLuminance?e:t,o=e.relativeLuminance>t.relativeLuminance?t:e;return(r.relativeLuminance+.05)/(o.relativeLuminance+.05)}to.defaultPaletteConfig={baseColor:Jr("#808080"),steps:94};const oo=Object.freeze({create:(e,t,r)=>new so(e,t,r),from:e=>new so(e.r,e.g,e.b)});class so extends $r{constructor(e,t,r){super(e,t,r,1),this.toColorString=this.toStringHexRGB,this.contrast=ro.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Or(this)}static fromObject(e){return new so(e.r,e.g,e.b)}}const no=(-.1+Math.sqrt(.21))/2;function io(e){return function(e){return e.relativeLuminance<=no}(e)?-1:1}const ao=Object.freeze({create:function(e,t,r){return"number"==typeof e?ao.from(oo.create(e,t,r)):ao.from(e)},from:function(e){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const r in t)if(typeof t[r]!=typeof e[r])return!1;return!0}(e)?lo.from(e):lo.from(oo.create(e.r,e.g,e.b))}});class lo{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,r,o){void 0===r&&(r=this.closestIndexOf(e));let s=this.swatches;const n=this.lastIndex;let i=r;void 0===o&&(o=io(e));return-1===o&&(s=this.reversedSwatches,i=n-i),function e(t,r,o=0,s=t.length-1){if(s===o)return t[o];const n=Math.floor((s-o)/2)+o;return r(t[n])?e(t,r,o,n):e(t,r,n+1,s)}(s,r=>ro(e,r)>=t,i,n)}get(e){return this.swatches[e]||this.swatches[br(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const r=this.swatches.reduce((t,r)=>Math.abs(r.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?r:t);return t=this.swatches.indexOf(r),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new lo(e,Object.freeze(new to({baseColor:$r.fromObject(e)}).palette.map(e=>{const t=Jr(e.toStringHexRGB());return oo.create(t.r,t.g,t.b)})))}}const co=oo.create(1,1,1),ho=oo.create(0,0,0),uo=oo.create(.5,.5,.5),po=Jr("#DA1A5F"),fo=oo.create(po.r,po.g,po.b);function go(e){return oo.create(e,e,e)}var bo;function mo(e,t,r,o,s,n){return Math.max(e.closestIndexOf(go(t))+r,o,s,n)}!function(e){e[e.LightMode=1]="LightMode",e[e.DarkMode=.23]="DarkMode"}(bo||(bo={}));const{create:vo}=ct,yo=vo("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),wo=vo("base-height-multiplier").withDefault(10),xo=(vo("base-horizontal-spacing-multiplier").withDefault(3),vo("base-layer-luminance").withDefault(bo.DarkMode)),Co=vo("control-corner-radius").withDefault(4),$o=vo("density").withDefault(0),ko=vo("design-unit").withDefault(4),Vo=(vo("direction").withDefault(gr.ltr),vo("disabled-opacity").withDefault(.3)),Fo=vo("stroke-width").withDefault(1),Do=vo("focus-stroke-width").withDefault(2),To=vo("type-ramp-base-font-size").withDefault("14px"),So=vo("type-ramp-base-line-height").withDefault("20px"),Oo=(vo("type-ramp-minus-1-font-size").withDefault("12px"),vo("type-ramp-minus-1-line-height").withDefault("16px"),vo("type-ramp-minus-2-font-size").withDefault("10px"),vo("type-ramp-minus-2-line-height").withDefault("16px"),vo("type-ramp-plus-1-font-size").withDefault("16px"),vo("type-ramp-plus-1-line-height").withDefault("24px"),vo("type-ramp-plus-2-font-size").withDefault("20px"),vo("type-ramp-plus-2-line-height").withDefault("28px"),vo("type-ramp-plus-3-font-size").withDefault("28px"),vo("type-ramp-plus-3-line-height").withDefault("36px"),vo("type-ramp-plus-4-font-size").withDefault("34px"),vo("type-ramp-plus-4-line-height").withDefault("44px"),vo("type-ramp-plus-5-font-size").withDefault("46px"),vo("type-ramp-plus-5-line-height").withDefault("56px"),vo("type-ramp-plus-6-font-size").withDefault("60px"),vo("type-ramp-plus-6-line-height").withDefault("72px"),vo("accent-fill-rest-delta").withDefault(0),vo("accent-fill-hover-delta").withDefault(4)),No=vo("accent-fill-active-delta").withDefault(-5),Po=vo("accent-fill-focus-delta").withDefault(0),Lo=vo("accent-foreground-rest-delta").withDefault(0),Eo=vo("accent-foreground-hover-delta").withDefault(6),Mo=vo("accent-foreground-active-delta").withDefault(-4),Io=vo("accent-foreground-focus-delta").withDefault(0),Ro=vo("neutral-fill-rest-delta").withDefault(7),Ao=vo("neutral-fill-hover-delta").withDefault(10),Bo=vo("neutral-fill-active-delta").withDefault(5),jo=vo("neutral-fill-focus-delta").withDefault(0),Ho=vo("neutral-fill-input-rest-delta").withDefault(0),zo=vo("neutral-fill-input-hover-delta").withDefault(0),_o=vo("neutral-fill-input-active-delta").withDefault(0),qo=vo("neutral-fill-input-focus-delta").withDefault(0),Uo=vo("neutral-fill-stealth-rest-delta").withDefault(0),Go=vo("neutral-fill-stealth-hover-delta").withDefault(5),Wo=vo("neutral-fill-stealth-active-delta").withDefault(3),Ko=vo("neutral-fill-stealth-focus-delta").withDefault(0),Xo=vo("neutral-fill-strong-rest-delta").withDefault(0),Qo=vo("neutral-fill-strong-hover-delta").withDefault(8),Yo=vo("neutral-fill-strong-active-delta").withDefault(-5),Zo=vo("neutral-fill-strong-focus-delta").withDefault(0),Jo=vo("neutral-fill-layer-rest-delta").withDefault(3),es=vo("neutral-stroke-rest-delta").withDefault(25),ts=vo("neutral-stroke-hover-delta").withDefault(40),rs=vo("neutral-stroke-active-delta").withDefault(16),os=vo("neutral-stroke-focus-delta").withDefault(25),ss=vo("neutral-stroke-divider-rest-delta").withDefault(8),ns=vo({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(ao.create(uo)),is=vo({name:"accent-palette",cssCustomPropertyName:null}).withDefault(ao.create(fo)),as=vo({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=xo.getValueFor(e),o=Jo.getValueFor(e),t.get(t.closestIndexOf(go(r))+o);var t,r,o}}),ls=(vo("neutral-layer-card-container").withDefault(e=>as.getValueFor(e).evaluate(e)),vo({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,r){const o=e.closestIndexOf(go(t))-r;return e.get(o-r)}(ns.getValueFor(e),xo.getValueFor(e),Jo.getValueFor(e))})),cs=(vo("neutral-layer-floating").withDefault(e=>ls.getValueFor(e).evaluate(e)),vo({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=xo.getValueFor(e),t.get(t.closestIndexOf(go(r)));var t,r}})),hs=vo("neutral-layer-1").withDefault(e=>cs.getValueFor(e).evaluate(e)),us=vo({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=xo.getValueFor(e),o=Jo.getValueFor(e),s=Ro.getValueFor(e),n=Ao.getValueFor(e),i=Bo.getValueFor(e),t.get(mo(t,r,o,s,n,i));var t,r,o,s,n,i}}),ds=(vo("neutral-layer-2").withDefault(e=>us.getValueFor(e).evaluate(e)),vo({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=xo.getValueFor(e),o=Jo.getValueFor(e),s=Ro.getValueFor(e),n=Ao.getValueFor(e),i=Bo.getValueFor(e),t.get(mo(t,r,o,s,n,i)+o);var t,r,o,s,n,i}})),ps=(vo("neutral-layer-3").withDefault(e=>ds.getValueFor(e).evaluate(e)),vo({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=xo.getValueFor(e),o=Jo.getValueFor(e),s=Ro.getValueFor(e),n=Ao.getValueFor(e),i=Bo.getValueFor(e),t.get(mo(t,r,o,s,n,i)+2*o);var t,r,o,s,n,i}})),fs=(vo("neutral-layer-4").withDefault(e=>ps.getValueFor(e).evaluate(e)),vo("fill-color").withDefault(e=>hs.getValueFor(e)));var gs;!function(e){e[e.normal=4.5]="normal",e[e.large=7]="large"}(gs||(gs={}));const bs=vo({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,r,o,s,n,i,a,l){const c=e.source,h=t.closestIndexOf(r)>=Math.max(i,a,l)?-1:1,u=e.closestIndexOf(c),d=u+-1*h*o,p=d+h*s,f=d+h*n;return{rest:e.get(d),hover:e.get(u),active:e.get(p),focus:e.get(f)}}(is.getValueFor(e),ns.getValueFor(e),t||fs.getValueFor(e),Oo.getValueFor(e),No.getValueFor(e),Po.getValueFor(e),Ro.getValueFor(e),Ao.getValueFor(e),Bo.getValueFor(e))}),ms=vo("accent-fill-rest").withDefault(e=>bs.getValueFor(e).evaluate(e).rest),vs=vo("accent-fill-hover").withDefault(e=>bs.getValueFor(e).evaluate(e).hover),ys=vo("accent-fill-active").withDefault(e=>bs.getValueFor(e).evaluate(e).active),ws=vo("accent-fill-focus").withDefault(e=>bs.getValueFor(e).evaluate(e).focus),xs=e=>(t,r)=>function(e,t){return e.contrast(co)>=t?co:ho}(r||ms.getValueFor(t),e),Cs=vo({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>xs(gs.normal)(e,t)}),$s=vo("foreground-on-accent-rest").withDefault(e=>Cs.getValueFor(e).evaluate(e,ms.getValueFor(e))),ks=vo("foreground-on-accent-hover").withDefault(e=>Cs.getValueFor(e).evaluate(e,vs.getValueFor(e))),Vs=vo("foreground-on-accent-active").withDefault(e=>Cs.getValueFor(e).evaluate(e,ys.getValueFor(e))),Fs=(vo("foreground-on-accent-focus").withDefault(e=>Cs.getValueFor(e).evaluate(e,ws.getValueFor(e))),vo({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>xs(gs.large)(e,t)})),Ds=(vo("foreground-on-accent-rest-large").withDefault(e=>Fs.getValueFor(e).evaluate(e,ms.getValueFor(e))),vo("foreground-on-accent-hover-large").withDefault(e=>Fs.getValueFor(e).evaluate(e,vs.getValueFor(e))),vo("foreground-on-accent-active-large").withDefault(e=>Fs.getValueFor(e).evaluate(e,ys.getValueFor(e))),vo("foreground-on-accent-focus-large").withDefault(e=>Fs.getValueFor(e).evaluate(e,ws.getValueFor(e))),e=>(t,r)=>function(e,t,r,o,s,n,i){const a=e.source,l=e.closestIndexOf(a),c=io(t),h=l+(1===c?Math.min(o,s):Math.max(c*o,c*s)),u=e.colorContrast(t,r,h,c),d=e.closestIndexOf(u),p=d+c*Math.abs(o-s);let f,g;return(1===c?o<s:c*o>c*s)?(f=d,g=p):(f=p,g=d),{rest:e.get(f),hover:e.get(g),active:e.get(f+c*n),focus:e.get(f+c*i)}}(is.getValueFor(t),r||fs.getValueFor(t),e,Lo.getValueFor(t),Eo.getValueFor(t),Mo.getValueFor(t),Io.getValueFor(t))),Ts=vo({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Ds(gs.normal)(e,t)}),Ss=vo("accent-foreground-rest").withDefault(e=>Ts.getValueFor(e).evaluate(e).rest),Os=vo("accent-foreground-hover").withDefault(e=>Ts.getValueFor(e).evaluate(e).hover),Ns=vo("accent-foreground-active").withDefault(e=>Ts.getValueFor(e).evaluate(e).active),Ps=(vo("accent-foreground-focus").withDefault(e=>Ts.getValueFor(e).evaluate(e).focus),vo({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,r,o,s,n){const i=e.closestIndexOf(t),a=i>=Math.max(r,o,s,n)?-1:1;return{rest:e.get(i+a*r),hover:e.get(i+a*o),active:e.get(i+a*s),focus:e.get(i+a*n)}}(ns.getValueFor(e),t||fs.getValueFor(e),Ro.getValueFor(e),Ao.getValueFor(e),Bo.getValueFor(e),jo.getValueFor(e))})),Ls=vo("neutral-fill-rest").withDefault(e=>Ps.getValueFor(e).evaluate(e).rest),Es=vo("neutral-fill-hover").withDefault(e=>Ps.getValueFor(e).evaluate(e).hover),Ms=vo("neutral-fill-active").withDefault(e=>Ps.getValueFor(e).evaluate(e).active),Is=(vo("neutral-fill-focus").withDefault(e=>Ps.getValueFor(e).evaluate(e).focus),vo({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,r,o,s,n){const i=io(t),a=e.closestIndexOf(t);return{rest:e.get(a-i*r),hover:e.get(a-i*o),active:e.get(a-i*s),focus:e.get(a-i*n)}}(ns.getValueFor(e),t||fs.getValueFor(e),Ho.getValueFor(e),zo.getValueFor(e),_o.getValueFor(e),qo.getValueFor(e))})),Rs=vo("neutral-fill-input-rest").withDefault(e=>Is.getValueFor(e).evaluate(e).rest),As=vo("neutral-fill-input-hover").withDefault(e=>Is.getValueFor(e).evaluate(e).hover),Bs=(vo("neutral-fill-input-active").withDefault(e=>Is.getValueFor(e).evaluate(e).active),vo("neutral-fill-input-focus").withDefault(e=>Is.getValueFor(e).evaluate(e).focus),vo({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,r,o,s,n,i,a,l,c){const h=Math.max(r,o,s,n,i,a,l,c),u=e.closestIndexOf(t),d=u>=h?-1:1;return{rest:e.get(u+d*r),hover:e.get(u+d*o),active:e.get(u+d*s),focus:e.get(u+d*n)}}(ns.getValueFor(e),t||fs.getValueFor(e),Uo.getValueFor(e),Go.getValueFor(e),Wo.getValueFor(e),Ko.getValueFor(e),Ro.getValueFor(e),Ao.getValueFor(e),Bo.getValueFor(e),jo.getValueFor(e))})),js=vo("neutral-fill-stealth-rest").withDefault(e=>Bs.getValueFor(e).evaluate(e).rest),Hs=vo("neutral-fill-stealth-hover").withDefault(e=>Bs.getValueFor(e).evaluate(e).hover),zs=vo("neutral-fill-stealth-active").withDefault(e=>Bs.getValueFor(e).evaluate(e).active),_s=(vo("neutral-fill-stealth-focus").withDefault(e=>Bs.getValueFor(e).evaluate(e).focus),vo({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,r,o,s,n){const i=io(t),a=e.closestIndexOf(e.colorContrast(t,4.5)),l=a+i*Math.abs(r-o);let c,h;return(1===i?r<o:i*r>i*o)?(c=a,h=l):(c=l,h=a),{rest:e.get(c),hover:e.get(h),active:e.get(c+i*s),focus:e.get(c+i*n)}}(ns.getValueFor(e),t||fs.getValueFor(e),Xo.getValueFor(e),Qo.getValueFor(e),Yo.getValueFor(e),Zo.getValueFor(e))})),qs=(vo("neutral-fill-strong-rest").withDefault(e=>_s.getValueFor(e).evaluate(e).rest),vo("neutral-fill-strong-hover").withDefault(e=>_s.getValueFor(e).evaluate(e).hover),vo("neutral-fill-strong-active").withDefault(e=>_s.getValueFor(e).evaluate(e).active),vo("neutral-fill-strong-focus").withDefault(e=>_s.getValueFor(e).evaluate(e).focus),vo({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,r){const o=e.closestIndexOf(t);return e.get(o-(o<r?-1*r:r))}(ns.getValueFor(e),t||fs.getValueFor(e),Jo.getValueFor(e))})),Us=(vo("neutral-fill-layer-rest").withDefault(e=>qs.getValueFor(e).evaluate(e)),vo({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=fs.getValueFor(e),t.colorContrast(r,3.5);var t,r}})),Gs=vo("focus-stroke-outer").withDefault(e=>Us.getValueFor(e).evaluate(e)),Ws=vo({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=is.getValueFor(e),r=fs.getValueFor(e),o=Gs.getValueFor(e),t.colorContrast(o,3.5,t.closestIndexOf(t.source),-1*io(r));var t,r,o}}),Ks=vo("focus-stroke-inner").withDefault(e=>Ws.getValueFor(e).evaluate(e)),Xs=vo({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=fs.getValueFor(e),t.colorContrast(r,4.5);var t,r}}),Qs=vo("neutral-foreground-hint").withDefault(e=>Xs.getValueFor(e).evaluate(e)),Ys=vo({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ns.getValueFor(e),r=fs.getValueFor(e),t.colorContrast(r,14);var t,r}}),Zs=vo("neutral-foreground-rest").withDefault(e=>Ys.getValueFor(e).evaluate(e)),Js=vo({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,r,o,s,n){const i=e.closestIndexOf(t),a=io(t),l=i+a*r,c=l+a*(o-r),h=l+a*(s-r),u=l+a*(n-r);return{rest:e.get(l),hover:e.get(c),active:e.get(h),focus:e.get(u)}}(ns.getValueFor(e),fs.getValueFor(e),es.getValueFor(e),ts.getValueFor(e),rs.getValueFor(e),os.getValueFor(e))}),en=vo("neutral-stroke-rest").withDefault(e=>Js.getValueFor(e).evaluate(e).rest),tn=(vo("neutral-stroke-hover").withDefault(e=>Js.getValueFor(e).evaluate(e).hover),vo("neutral-stroke-active").withDefault(e=>Js.getValueFor(e).evaluate(e).active),vo("neutral-stroke-focus").withDefault(e=>Js.getValueFor(e).evaluate(e).focus)),rn=vo({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,r){return e.get(e.closestIndexOf(t)+io(t)*r)}(ns.getValueFor(e),t||fs.getValueFor(e),ss.getValueFor(e))}),on=vo("neutral-stroke-divider-rest").withDefault(e=>rn.getValueFor(e).evaluate(e));function sn(e){return`:host([hidden]){display:none}:host{display:${e}}`}function nn(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}let an;const ln=function(){if("boolean"==typeof an)return an;if(!nn())return an=!1,an;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),an=!0}catch(e){an=!1}finally{document.head.removeChild(e)}return an}()?"focus-visible":"focus",cn=(function(e,...t){const{styles:r,behaviors:o}=cr(e,t);return new ur(r,o)})`(${wo} + ${$o}) * ${ko}`,hn=hr`
    ${sn("inline-flex")} :host {
        font-family: ${yo};
        outline: none;
        font-size: ${To};
        line-height: ${So};
        height: calc(${cn} * 1px);
        min-width: calc(${cn} * 1px);
        background-color: ${Ls};
        color: ${Zs};
        border-radius: calc(${Co} * 1px);
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
        padding: 0 calc((10 + (${ko} * 2 * ${$o})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${Fo} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${Es};
    }

    :host(:active) {
        background-color: ${Ms};
    }

    .control:${ln} {
        border-color: ${Gs};
        box-shadow: 0 0 0 calc((${Do} - ${Fo}) * 1px) ${Gs} inset;
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
`.withBehaviors(pr(hr`
            :host .control {
              background-color: ${fr.ButtonFace};
              border-color: ${fr.ButtonText};
              color: ${fr.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${fr.Highlight};
              color: ${fr.HighlightText};
            }

            .control:${ln} {
              forced-color-adjust: none;
              background-color: ${fr.Highlight};
              border-color: ${fr.ButtonText};
              box-shadow: 0 0 0 calc((${Do} - ${Fo}) * 1px) ${fr.ButtonText} inset;
              color: ${fr.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${fr.ButtonText};
            }

            :host([href]) .control {
                border-color: ${fr.LinkText};
                color: ${fr.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${ln}{
              forced-color-adjust: none;
              background: ${fr.ButtonFace};
              border-color: ${fr.LinkText};
              box-shadow: 0 0 0 1px ${fr.LinkText} inset;
              color: ${fr.LinkText};
              fill: currentColor;
            }
        `)),un=hr`
    :host([appearance="accent"]) {
        background: ${ms};
        color: ${$s};
    }

    :host([appearance="accent"]:hover) {
        background: ${vs};
        color: ${ks};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${ys};
        color: ${Vs};
    }

    :host([appearance="accent"]) .control:${ln} {
        box-shadow: 0 0 0 calc((${Do} - ${Fo}) * 1px) ${Gs} inset,
            0 0 0 calc((${Do} + ${Fo}) * 1px) ${Ks} inset;
    }
`.withBehaviors(pr(hr`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${fr.Highlight};
                color: ${fr.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${fr.HighlightText};
                border-color: ${fr.Highlight};
                color: ${fr.Highlight};
            }

            :host([appearance="accent"]) .control:${ln} {
                border-color: ${fr.Highlight};
                box-shadow: 0 0 0 calc(${Do} * 1px) ${fr.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${fr.LinkText};
                color: ${fr.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${fr.ButtonFace};
                border-color: ${fr.LinkText};
                box-shadow: none;
                color: ${fr.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${ln} {
                border-color: ${fr.LinkText};
                box-shadow: 0 0 0 calc(${Do} * 1px) ${fr.HighlightText} inset;
            }
        `)),dn=(hr`
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
        color: ${Ss};
        border-bottom: calc(${Fo} * 1px) solid ${Ss};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${Os};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Ns};
    }

    :host([appearance="hypertext"]) .control:${ln} {
        border-bottom: calc(${Do} * 1px) solid ${Gs};
        margin-bottom: calc(calc(${Fo} - ${Do}) * 1px);
    }
`.withBehaviors(pr(hr`
            :host([appearance="hypertext"]:hover) {
                background-color: ${fr.ButtonFace};
                color: ${fr.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${ln} {
                color: ${fr.LinkText};
                border-bottom-color: ${fr.LinkText};
                box-shadow: none;
            }
        `)),hr`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${Ss};
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
        color: ${Os};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Ns};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${Fo} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${Os};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Ns};
    }

    :host([appearance="lightweight"]) .control:${ln} .content::before {
        background: ${Zs};
        height: calc(${Do} * 1px);
    }
`.withBehaviors(pr(hr`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${ln} {
                forced-color-adjust: none;
                background: ${fr.ButtonFace};
                color: ${fr.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${ln} .content::before {
                background: ${fr.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${ln} {
                background: ${fr.ButtonFace};
                box-shadow: none;
                color: ${fr.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${ln} .content::before {
                background: ${fr.LinkText};
            }
        `))),pn=hr`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${ms};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${vs};
    }

    :host([appearance="outline"]:active) {
        border-color: ${ys};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${ln} {
        box-shadow: 0 0 0 calc((${Do} - ${Fo}) * 1px) ${Gs} inset;
        border-color: ${Gs};
    }
`.withBehaviors(pr(hr`
            :host([appearance="outline"]) .control {
                border-color: ${fr.ButtonText};
            }
            :host([appearance="outline"]) .control:${ln} {
              forced-color-adjust: none;
              background-color: ${fr.Highlight};
              border-color: ${fr.ButtonText};
              box-shadow: 0 0 0 calc((${Do} - ${Fo}) * 1px) ${fr.ButtonText} inset;
              color: ${fr.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${fr.ButtonFace};
                border-color: ${fr.LinkText};
                color: ${fr.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${ln} {
              forced-color-adjust: none;
              border-color: ${fr.LinkText};
              box-shadow: 0 0 0 1px ${fr.LinkText} inset;
            }
        `)),fn=hr`
    :host([appearance="stealth"]) {
        background: ${js};
    }

    :host([appearance="stealth"]:hover) {
        background: ${Hs};
    }

    :host([appearance="stealth"]:active) {
        background: ${zs};
    }
`.withBehaviors(pr(hr`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${fr.ButtonFace};
                border-color: transparent;
                color: ${fr.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${fr.Highlight};
                border-color: ${fr.Highlight};
                color: ${fr.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${ln}) .control {
                background: ${fr.Highlight};
                box-shadow: 0 0 0 1px ${fr.Highlight};
                color: ${fr.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${fr.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${ln}) .control {
                background: ${fr.LinkText};
                border-color: ${fr.LinkText};
                color: ${fr.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${ln}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${fr.LinkText};
            }
        `));class gn{constructor(e,t,r){this.propertyName=e,this.value=t,this.styles=r}bind(e){F.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){F.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function bn(e,t){return new gn("appearance",e,t)}class mn extends nr{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(e,t){const r=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);1===r.length&&r[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}X([q],mn.prototype,"appearance",void 0);const vn=mn.compose({baseName:"button",baseClass:nr,template:(e,t)=>Ut`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Wt("control")}
    >
        ${Qt(0,t)}
        <span class="content" part="content">
            <slot ${lr("defaultSlottedContent")}></slot>
        </span>
        ${Xt(0,t)}
    </button>
`,styles:(e,t)=>hr`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${Vo};
            background-color: ${Ls};
            cursor: ${"not-allowed"};
        }

        ${hn}
    `.withBehaviors(pr(hr`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${fr.ButtonFace};
                    border-color: ${fr.GrayText};
                    color: ${fr.GrayText};
                    cursor: ${"not-allowed"};
                    opacity: 1;
                }
            `),bn("accent",hr`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${ms};
                }

                ${un}
            `.withBehaviors(pr(hr`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${fr.ButtonFace};
                            border-color: ${fr.GrayText};
                            color: ${fr.GrayText};
                        }
                    `))),bn("lightweight",hr`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${Ss};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${dn}
            `.withBehaviors(pr(hr`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${fr.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),bn("outline",hr`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${ms};
                }

                ${pn}
            `.withBehaviors(pr(hr`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${fr.GrayText};
                        }
                    `))),bn("stealth",hr`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${js};
                }

                ${fn}
            `.withBehaviors(pr(hr`
                        :host([appearance="stealth"][disabled]) {
                            background: ${fr.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${fr.ButtonFace};
                            border-color: transparent;
                            color: ${fr.GrayText};
                        }
                    `)))),shadowOptions:{delegatesFocus:!0}});class yn extends ze{}class wn extends(rr(yn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var xn;!function(e){e.email="email",e.password="password",e.tel="tel",e.text="text",e.url="url"}(xn||(xn={}));class Cn extends wn{constructor(){super(...arguments),this.type=xn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&p.queueUpdate(()=>{this.focus()})}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}X([q({attribute:"readonly",mode:"boolean"})],Cn.prototype,"readOnly",void 0),X([q({mode:"boolean"})],Cn.prototype,"autofocus",void 0),X([q],Cn.prototype,"placeholder",void 0),X([q],Cn.prototype,"type",void 0),X([q],Cn.prototype,"list",void 0),X([q({converter:z})],Cn.prototype,"maxlength",void 0),X([q({converter:z})],Cn.prototype,"minlength",void 0),X([q],Cn.prototype,"pattern",void 0),X([q({converter:z})],Cn.prototype,"size",void 0),X([q({mode:"boolean"})],Cn.prototype,"spellcheck",void 0),X([S],Cn.prototype,"defaultSlottedNodes",void 0);class $n{}Yt($n,vt),Yt(Cn,Kt,$n);class kn extends ze{}class Vn extends(rr(kn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Fn extends Vn{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(e,t){var r;this.max=Math.max(t,null!==(r=this.min)&&void 0!==r?r:t);const o=Math.min(this.min,this.max);void 0!==this.min&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(e,t){var r;this.min=Math.min(t,null!==(r=this.max)&&void 0!==r?r:t);const o=Math.max(this.min,this.max);void 0!==this.max&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,t){this.value=this.getValidValue(t),t===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(e,this.value),void 0===e||this.isUserInput||(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}getValidValue(e){var t,r;let o=parseFloat(parseFloat(e).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,null!==(t=this.max)&&void 0!==t?t:o),o=Math.max(o,null!==(r=this.min)&&void 0!==r?r:o).toString()),o}stepUp(){const e=parseFloat(this.value),t=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:e+this.step;this.value=t.toString()}stepDown(){const e=parseFloat(this.value),t=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:e-this.step;this.value=t.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&p.queueUpdate(()=>{this.focus()})}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(e){switch(e.key){case"ArrowUp":return this.stepUp(),!1;case"ArrowDown":return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}function Dn(e,t){const r="function"==typeof t?t:()=>t;return(t,o)=>e(t,o)?r(t,o):null}X([q({attribute:"readonly",mode:"boolean"})],Fn.prototype,"readOnly",void 0),X([q({mode:"boolean"})],Fn.prototype,"autofocus",void 0),X([q({attribute:"hide-step",mode:"boolean"})],Fn.prototype,"hideStep",void 0),X([q],Fn.prototype,"placeholder",void 0),X([q],Fn.prototype,"list",void 0),X([q({converter:z})],Fn.prototype,"maxlength",void 0),X([q({converter:z})],Fn.prototype,"minlength",void 0),X([q({converter:z})],Fn.prototype,"size",void 0),X([q({converter:z})],Fn.prototype,"step",void 0),X([q({converter:z})],Fn.prototype,"max",void 0),X([q({converter:z})],Fn.prototype,"min",void 0),X([S],Fn.prototype,"defaultSlottedNodes",void 0),Yt(Fn,Kt,$n);class Tn extends Fn{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}X([q],Tn.prototype,"appearance",void 0);const Sn=Tn.compose({baseName:"number-field",baseClass:Fn,styles:(e,t)=>hr`
    ${sn("inline-block")} :host {
        font-family: ${yo};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${Zs};
        background: ${Rs};
        border-radius: calc(${Co} * 1px);
        border: calc(${Fo} * 1px) solid ${ms};
        height: calc(${cn} * 1px);
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
        padding: 0 calc(${ko} * 2px + 1px);
        font-size: ${To};
        line-height: ${So};
    }

    .control:hover,
    .control:${ln},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .controls {
        opacity: 0;
    }

    .label {
        display: block;
        color: ${Zs};
        cursor: pointer;
        font-size: ${To};
        line-height: ${So};
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
        border-bottom-color: ${Zs};
    }

    .step-down-glyph:before {
        border-top-color: ${Zs};
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
        background: ${As};
        border-color: ${vs};
    }

    :host(:active:not([disabled])) .root {
        background: ${As};
        border-color: ${ys};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${Gs};
        box-shadow: 0 0 0 1px ${Gs} inset;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
        opacity: 1;
    }

    :host([appearance="filled"]) .root {
        background: ${Ls};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${Es};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${"not-allowed"};
    }

    :host([disabled]) {
        opacity: ${Vo};
    }

    :host([disabled]) .control {
        border-color: ${en};
    }
`.withBehaviors(pr(hr`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${fr.Field};
                    border-color: ${fr.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${fr.Field};
                    border-color: ${fr.Highlight};
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
                    border-color: ${fr.GrayText};
                    background: ${fr.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${fr.Highlight};
                    box-shadow: 0 0 0 1px ${fr.Highlight} inset;
                }
                input::placeholder {
                    color: ${fr.GrayText};
                }
            `)),template:(e,t)=>Ut`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${lr("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Qt(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                @keydown="${(e,t)=>e.handleKeyDown(t.event)}"
                @blur="${(e,t)=>e.handleBlur()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                type="text"
                inputmode="numeric"
                min="${e=>e.min}"
                max="${e=>e.max}"
                step="${e=>e.step}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Wt("control")}
            />
            ${Dn(e=>!e.hideStep&&!e.readOnly&&!e.disabled,Ut`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${e=>e.stepUp()}">
                            <slot name="step-up-glyph">
                                ${t.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${e=>e.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${t.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${Xt(0,t)}
        </div>
    </template>
`,shadowOptions:{delegatesFocus:!0},stepDownGlyph:'\n        <span class="step-down-glyph" part="step-down-glyph"></span>\n    ',stepUpGlyph:'\n        <span class="step-up-glyph" part="step-up-glyph"></span>\n    '});function On(e,t,r){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}class Nn extends Cn{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}X([q],Nn.prototype,"appearance",void 0);const Pn=Nn.compose({baseName:"text-field",baseClass:Cn,template:(e,t)=>Ut`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${lr({property:"defaultSlottedNodes",filter:On})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Qt(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Wt("control")}
            />
            ${Xt(0,t)}
        </div>
    </template>
`,styles:(e,t)=>hr`
    ${sn("inline-block")} :host {
        font-family: ${yo};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${Zs};
        background: ${Rs};
        border-radius: calc(${Co} * 1px);
        border: calc(${Fo} * 1px) solid ${ms};
        height: calc(${cn} * 1px);
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
        padding: 0 calc(${ko} * 2px + 1px);
        font-size: ${To};
        line-height: ${So};
    }

    .control:hover,
    .control:${ln},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${Zs};
        cursor: pointer;
        font-size: ${To};
        line-height: ${So};
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
        background: ${As};
        border-color: ${vs};
    }

    :host(:active:not([disabled])) .root {
        background: ${As};
        border-color: ${ys};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${Gs};
        box-shadow: 0 0 0 1px ${Gs} inset;
    }

    :host([appearance="filled"]) .root {
        background: ${Ls};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${Es};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${"not-allowed"};
    }

    :host([disabled]) {
        opacity: ${Vo};
    }

    :host([disabled]) .control {
        border-color: ${en};
    }
`.withBehaviors(pr(hr`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${fr.Field};
                    border-color: ${fr.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${fr.Field};
                    border-color: ${fr.Highlight};
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
                    border-color: ${fr.GrayText};
                    background: ${fr.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${fr.Highlight};
                    box-shadow: 0 0 0 1px ${fr.Highlight} inset;
                }
                input::placeholder {
                    color: ${fr.GrayText};
                }
            `)),shadowOptions:{delegatesFocus:!0}});var Ln;!function(e){e.separator="separator",e.presentation="presentation"}(Ln||(Ln={}));class En extends ze{constructor(){super(...arguments),this.role=Ln.separator}}X([q],En.prototype,"role",void 0);const Mn=En.compose({baseName:"divider",template:(e,t)=>Ut`
    <template role="${e=>e.role}"></template>
`,styles:(e,t)=>hr`
        ${sn("block")} :host {
            box-sizing: content-box;
            height: 0;
            margin: calc(${ko} * 1px) 0;
            border: none;
            border-top: calc(${Fo} * 1px) solid ${on};
        }
    `});var In;!function(e){e.horizontal="horizontal",e.vertical="vertical"}(In||(In={}));
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Rn=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],An="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Bn=function(e){return"INPUT"===e.tagName},jn=function(e,t){return!(t.disabled||function(e){return Bn(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var r=An.call(e,"details>summary:first-of-type")?e.parentElement:e;if(An.call(r,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),s=o.width,n=o.height;return 0===s&&0===n}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(Bn(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var o=t.children.item(r);if("LEGEND"===o.tagName)return!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},Hn=Rn.concat("iframe").join(","),zn=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==An.call(e,Hn)&&jn(t,e)};const _n=Object.freeze({[Jt.ArrowUp]:{[In.vertical]:-1},[Jt.ArrowDown]:{[In.vertical]:1},[Jt.ArrowLeft]:{[In.horizontal]:{[gr.ltr]:-1,[gr.rtl]:1}},[Jt.ArrowRight]:{[In.horizontal]:{[gr.ltr]:1,[gr.rtl]:-1}}});class qn extends ze{constructor(){super(...arguments),this._activeIndex=0,this.direction=gr.ltr,this.orientation=In.horizontal}get activeIndex(){return F.track(this,"activeIndex"),this._activeIndex}set activeIndex(e){this.$fastController.isConnected&&(this._activeIndex=function(e,t,r){return Math.min(Math.max(r,e),t)}(0,this.focusableElements.length-1,e),F.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(e){var t;const r=null===(t=this.focusableElements)||void 0===t?void 0:t.indexOf(e.target);return r>-1&&this.activeIndex!==r&&this.setFocusedElement(r),!0}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?gr.rtl:gr.ltr})(this)}focusinHandler(e){const t=e.relatedTarget;t&&!this.contains(t)&&this.setFocusedElement()}getDirectionalIncrementer(e){var t,r,o,s,n;return null!==(n=null!==(o=null===(r=null===(t=_n[e])||void 0===t?void 0:t[this.orientation])||void 0===r?void 0:r[this.direction])&&void 0!==o?o:null===(s=_n[e])||void 0===s?void 0:s[this.orientation])&&void 0!==n?n:0}keydownHandler(e){const t=e.key;if(!(t in Jt)||e.defaultPrevented||e.shiftKey)return!0;const r=this.getDirectionalIncrementer(t);if(!r)return!e.target.closest("[role=radiogroup]");const o=this.activeIndex+r;return this.focusableElements[o]&&e.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){this.focusableElements=this.allSlottedItems.reduce(qn.reduceFocusableItems,[]),this.setFocusableElements()}setFocusedElement(e=this.activeIndex){var t;this.activeIndex=e,this.setFocusableElements(),null===(t=this.focusableElements[this.activeIndex])||void 0===t||t.focus()}static reduceFocusableItems(e,t){var r,o,s,n;const i="radio"===t.getAttribute("role"),a=null===(o=null===(r=t.$fastController)||void 0===r?void 0:r.definition.shadowOptions)||void 0===o?void 0:o.delegatesFocus,l=Array.from(null!==(n=null===(s=t.shadowRoot)||void 0===s?void 0:s.querySelectorAll("*"))&&void 0!==n?n:[]).some(e=>zn(e));return zn(t)||i||a||l?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(qn.reduceFocusableItems,[])):e}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((e,t)=>{e.tabIndex=this.activeIndex===t?0:-1})}}X([S],qn.prototype,"direction",void 0),X([q],qn.prototype,"orientation",void 0),X([S],qn.prototype,"slottedItems",void 0),X([S],qn.prototype,"slottedLabel",void 0);class Un{}X([q({attribute:"aria-labelledby"})],Un.prototype,"ariaLabelledby",void 0),X([q({attribute:"aria-label"})],Un.prototype,"ariaLabel",void 0),Yt(Un,vt),Yt(qn,Kt,Un);const Gn=class extends qn{connectedCallback(){super.connectedCallback();const e=Ge(this);e&&fs.setValueFor(this,t=>qs.getValueFor(t).evaluate(t,fs.getValueFor(e)))}}.compose({baseName:"toolbar",baseClass:qn,template:(e,t)=>{return Ut`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Qt(0,t)}
            <slot
                ${lr({filter:r?function(e,t,o){return 1===e.nodeType&&e.matches(r)}:function(e,t,r){return 1===e.nodeType},property:"slottedItems"})}
            ></slot>
            ${Xt(0,t)}
        </div>
    </template>
`;var r},styles:(e,t)=>hr`
        ${sn("inline-flex")} :host {
            --toolbar-item-gap: calc(
                (var(--design-unit) + calc(var(--density) + 2)) * 1px
            );
            background-color: ${fs};
            border-radius: calc(${Co} * 1px);
            fill: currentcolor;
            padding: var(--toolbar-item-gap);
        }

        :host(${ln}) {
            outline: calc(${Fo} * 1px) solid ${tn};
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
    `.withBehaviors(pr(hr`
            :host(:${ln}) {
                box-shadow: 0 0 0 calc(${Do} * 1px) ${fr.Highlight};
                color: ${fr.ButtonText};
                forced-color-adjust: none;
            }
        `)),shadowOptions:{delegatesFocus:!0}});class Wn extends ze{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,r="number"==typeof this.value?this.value:0,o=t-e;this.percentComplete=0===o?0:Math.fround((r-e)/o*100)}}X([q({converter:z})],Wn.prototype,"value",void 0),X([q({converter:z})],Wn.prototype,"min",void 0),X([q({converter:z})],Wn.prototype,"max",void 0),X([q({mode:"boolean"})],Wn.prototype,"paused",void 0),X([S],Wn.prototype,"percentComplete",void 0);const Kn=Wn.compose({baseName:"progress-ring",template:(e,t)=>Ut`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Dn(e=>"number"==typeof e.value,Ut`
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
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${Dn(e=>"number"!=typeof e.value,Ut`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>hr`
        ${sn("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${cn} * 1px);
            width: calc(${cn} * 1px);
            margin: calc(${cn} * 1px) 0;
        }

        .progress {
            height: 100%;
            width: 100%;
        }

        .background {
            stroke: ${Ls};
            fill: none;
            stroke-width: 2px;
        }

        .determinate {
            stroke: ${Ss};
            fill: none;
            stroke-width: 2px;
            stroke-linecap: round;
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
            transition: all 0.2s ease-in-out;
        }

        .indeterminate-indicator-1 {
            stroke: ${Ss};
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
            stroke: ${Ls};
        }

        :host([paused]) .determinate {
            stroke: ${Qs};
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
    `.withBehaviors(pr(hr`
                .indeterminate-indicator-1,
                .determinate {
                    stroke: ${fr.FieldText};
                }
                .background {
                    stroke: ${fr.Field};
                }
                :host([paused]) .indeterminate-indicator-1 {
                    stroke: ${fr.Field};
                }
                :host([paused]) .determinate {
                    stroke: ${fr.GrayText};
                }
            `)),indeterminateIndicator:'\n        <svg class="progress" part="progress" viewBox="0 0 16 16">\n            <circle\n                class="background"\n                part="background"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n            <circle\n                class="indeterminate-indicator-1"\n                part="indeterminate-indicator-1"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n        </svg>\n    '});class Xn extends ze{}const Qn=class extends Xn{connectedCallback(){super.connectedCallback();const e=Ge(this);e&&fs.setValueFor(this,t=>qs.getValueFor(t).evaluate(t,fs.getValueFor(e)))}}.compose({baseName:"card",baseClass:Xn,template:(e,t)=>Ut`
    <slot></slot>
`,styles:(e,t)=>hr`
        ${sn("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${fs};
            border-radius: calc(${Co} * 1px);
            ${"box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"}
        }
    `.withBehaviors(pr(hr`
                :host {
                    forced-color-adjust: none;
                    background: ${fr.Canvas};
                    box-shadow: 0 0 0 1px ${fr.CanvasText};
                }
            `))});var Yn;gt.getOrCreate(Yn).withPrefix("fast").register(vn(),Sn(),Pn(),Mn(),Gn(),Kn(),Qn()),xo.withDefault(.2),Co.withDefault(28),wo.withDefault(8),$o.withDefault(4),Vo.withDefault(.3),Fo.withDefault(4),To.withDefault("20px"),is.withDefault(ao.from(oo.from(Jr("#d4964e"))));document.getElementsByName("body");const Zn=document.getElementById("connect"),Jn=document.querySelector("#connect > span"),ei=document.getElementById("connect-progress"),ti=document.getElementById("temperature"),ri=document.getElementById("setTemp"),oi=document.getElementById("kP"),si=document.getElementById("kI"),ni=document.getElementById("kD"),ii=(document.getElementById("status-bar"),{filters:[{services:["00c0ffee-add1-c5ed-0000-000000000000"]}]});var ai,li;function ci(){Jn.innerText="Connect",Zn.appearance="accent",Zn.removeAttribute("disabled"),ei.setAttribute("paused",!0),Zn.addEventListener("click",hi),Zn.removeEventListener("click",ui),ai=null,li=null,ti.innerText="N/A"}async function hi(){Jn.innerText="Pairing...",Zn.appearance="stealth",Zn.setAttribute("disabled",!0),ei.removeAttribute("paused"),Zn.removeEventListener("click",hi),ai=await navigator.bluetooth.requestDevice(ii).catch(e=>{throw ci(),e}),console.log("Device found:",ai),ai.addEventListener("gattserverdisconnected",ci),await ai.gatt.connect(),li=await ai.gatt.getPrimaryService("00c0ffee-add1-c5ed-0000-000000000000"),console.log("Primary service:",li),await async function(){const e=await li.getCharacteristic("00c0ffee-add1-c5ed-0000-000000000001");console.log("Temperature Characteristic:",e),e.properties.notify?(e.addEventListener("characteristicvaluechanged",t=>{console.log("Received notification",t),Jn.innerText="Disconnect",Zn.appearance="stealth",Zn.removeAttribute("disabled"),ei.setAttribute("paused",!0),Zn.removeEventListener("click",hi),Zn.addEventListener("click",ui),ti.innerText=Math.round(10*e.value.getFloat64(0,!0))/10}),await e.startNotifications()):console.error("Expected characteristic to have the notify property",e)}(),await di.start(ri,"00c0ffee-add1-c5ed-0000-000000000002",0),await di.start(oi,"00c0ffee-add1-c5ed-0000-000000000003",3),await di.start(si,"00c0ffee-add1-c5ed-0000-000000000004",3),await di.start(ni,"00c0ffee-add1-c5ed-0000-000000000005",3)}async function ui(){await ai.gatt.disconnect()}Zn.addEventListener("click",hi);class di{constructor(e,t,r,o){this.characteristic=t,this.roundDigits=o,this.lastValue=Math.round(r*Math.pow(10,this.roundDigits))/Math.pow(10,this.roundDigits),e.value=this.lastValue,e.disabled=!1,e.addEventListener("blur",this),ai.addEventListener("gattserverdisconnected",t=>{e.removeEventListener("blur",this),e.value="",e.disabled=!0})}static async start(e,t,r){const o=await li.getCharacteristic(t);console.log("Characteristic",t,o);const s=await o.readValue().then(e=>e.getFloat64(0,!0));return console.log("Value",s),new di(e,o,s,r)}async handleEvent(e){if(console.log(e),this.lastValue!=e.target.value){this.lastValue=Math.round(e.target.value*Math.pow(10,this.roundDigits))/Math.pow(10,this.roundDigits);const t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e.target.value,!0),await this.characteristic.writeValue(t)}}}}]);
//# sourceMappingURL=bundle.js.map