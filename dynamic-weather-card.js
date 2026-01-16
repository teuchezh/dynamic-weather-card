const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let s=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:r,defineProperty:o,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:c}=Object,u=globalThis,p=u.trustedTypes,g=p?p.emptyScript:"",m=u.reactiveElementPolyfillSupport,f=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!r(t,e),v={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&o(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);s?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=c(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=n;const a=s.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(void 0!==t){const a=this.constructor;if(!1===n&&(s=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==s||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,m?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,x=t=>t,_=k.trustedTypes,$=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+S,A=`<${M}>`,T=document,N=()=>T.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,E="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,O=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,R=/"/g,W=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),U=B(1),j=B(2),I=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),q=new WeakMap,V=T.createTreeWalker(T,129);function K(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,n=[];let s,a=2===e?"<svg>":3===e?"<math>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let o,l,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===H?"!--"===l[1]?r=z:void 0!==l[1]?r=F:void 0!==l[2]?(W.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=s??H,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?O:'"'===l[3]?R:L):r===R||r===L?r=O:r===z||r===F?r=H:(r=O,s=void 0);const c=r===O&&t[e+1].startsWith("/>")?" ":"";a+=r===H?i+A:h>=0?(n.push(o),i.slice(0,h)+C+i.slice(h)+S+c):i+S+(-2===h?e:c)}return[K(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,a=0;const r=t.length-1,o=this.parts,[l,h]=Z(t,e);if(this.el=Y.createElement(l,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=V.nextNode())&&o.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=h[a++],i=n.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(S)&&(o.push({type:6,index:s}),n.removeAttribute(t));if(W.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],N()),V.nextNode(),o.push({type:2,index:++s});n.append(t[e],N())}}}else if(8===n.nodeType)if(n.data===M)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)o.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,n){if(e===I)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const a=D(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=X(t,s._$AS(t,e.values),s,n)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??T).importNode(e,!0);V.currentNode=n;let s=V.nextNode(),a=0,r=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new Q(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new st(s,this,t)),this._$AV.push(e),o=i[++r]}a!==o?.index&&(s=V.nextNode(),a++)}return V.currentNode=T,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),D(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new J(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Q(this.O(N()),this.O(N()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,n){const s=this.strings;let a=!1;if(void 0===s)t=X(this,t,e,0),a=!D(t)||t!==this._$AH&&t!==I,a&&(this._$AH=t);else{const n=t;let r,o;for(t=s[0],r=0;r<s.length-1;r++)o=X(this,n[i+r],e,r),o===I&&(o=this._$AH[r]),a||=!D(o)||o!==this._$AH[r],o===G?t=G:t!==G&&(t+=(o??"")+s[r+1]),this._$AH[r]=o}a&&!n&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class nt extends tt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??G)===I)return;const i=this._$AH,n=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==G&&(i===G||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=k.litHtmlPolyfillSupport;at?.(Y,Q),(k.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;let ot=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new Q(e.insertBefore(N(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const lt=rt.litElementPolyfillSupport;lt?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.2");const ht=360,dt=480,ct=1080,ut=1200,pt=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],gt=.1,mt="auto",ft=null,wt="ms";function yt(t){if(!t)return"";const e="string"==typeof t?new Date(t):t,i=e.getHours(),n=e.getMinutes();return`${i.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}function vt(t,e=null,i=null,n=null){let s=null,a=null;if(e&&n&&n.states[e]){const t=n.states[e];s=new Date(t.state)}if(i&&n&&n.states[i]){const t=n.states[i];a=new Date(t.state)}if((!s||!a)&&t&&t.attributes){const e=t.attributes;s||!e.forecast_sunrise&&!e.sunrise||(s=new Date(e.forecast_sunrise||e.sunrise)),a||!e.forecast_sunset&&!e.sunset||(a=new Date(e.forecast_sunset||e.sunset))}return{sunrise:s,sunset:a,hasSunData:!(!s||!a)}}function bt(t){const e=new Date;if(t.hasSunData&&t.sunrise&&t.sunset){const i=e.getTime();let n=t.sunrise.getTime(),s=t.sunset.getTime();n-i>432e5&&(n-=864e5),s-i>432e5&&(s-=864e5);const a=n-36e5,r=n+36e5,o=s-36e5,l=s+36e5;if(i>=a&&i<r){return{type:"sunrise",progress:(i-a)/(r-a)}}if(i>=r&&i<o){return{type:"day",progress:(i-r)/(o-r)}}if(i>=o&&i<l){return{type:"sunset",progress:(i-o)/(l-o)}}return{type:"night",progress:0}}return function(){const t=new Date,e=60*t.getHours()+t.getMinutes();if(e>=ht&&e<dt)return{type:"sunrise",progress:(e-ht)/120};if(e>=dt&&e<ct)return{type:"day",progress:(e-dt)/600};if(e>=ct&&e<ut)return{type:"sunset",progress:(e-ct)/120};return{type:"night",progress:0}}()}class kt{constructor(t){this.ctx=t}drawCloud(t,e,i,n){const s=this.ctx.shadowBlur,a=this.ctx.shadowColor,r=this.ctx.globalAlpha;this.ctx.shadowBlur=.25*i,this.ctx.shadowColor=`rgba(255, 255, 255, ${.4*n})`,this.ctx.globalAlpha=.85*n,this.ctx.fillStyle="rgba(255, 255, 255, 1)";[{x:t,y:e,r:.4*i},{x:t+.35*i,y:e,r:.5*i},{x:t+.65*i,y:e,r:.48*i},{x:t+.92*i,y:e,r:.38*i},{x:t+.18*i,y:e-.28*i,r:.38*i},{x:t+.52*i,y:e-.32*i,r:.42*i},{x:t+.78*i,y:e-.28*i,r:.38*i},{x:t+.32*i,y:e-.42*i,r:.32*i},{x:t+.62*i,y:e-.48*i,r:.36*i},{x:t+.82*i,y:e-.42*i,r:.32*i}].forEach(t=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=s,this.ctx.shadowColor=a,this.ctx.globalAlpha=r}drawClouds(t,e,i,n=.5){const s=Math.max(2,Math.floor(e/150*n));for(let n=0;n<s;n++){const s=(3*t+150*n)%(e+200)-100,a=i*(.2+n%3*.15)+8*Math.sin(.2*t+n),r=40+n%3*15,o=.6+n%2*.2;this.drawCloud(s,a,r,o)}}}class xt extends kt{draw(t,e,i){const n=.001*Date.now(),s=function(t,e,i){if("sunrise"===t.type){const n=t.progress;return{x:e*(.3+.4*n),y:i*(.85-.55*n)}}if("sunset"===t.type){const n=t.progress;return{x:e*(.5+.3*n),y:i*(.3+.55*n)}}if("day"===t.type){const n=t.progress*Math.PI;return{x:e*(.5+.25*Math.sin(n)),y:i*(.25-.1*Math.sin(n))}}return{x:.75*e,y:.3*i}}(t,e,i),a=s.x,r=s.y;"day"===t.type||"sunrise"===t.type||"sunset"===t.type?(this.drawSun(a,r,n),"sunrise"!==t.type&&"sunset"!==t.type||this.drawHorizonReflection(a,r,i,n)):"night"===t.type&&this.drawNightSky(e,i,n),this.drawClouds(n,e,i,.3)}drawSun(t,e,i){const n=48+1.5*Math.sin(.15*i),s=this.ctx.createRadialGradient(t,e,.3*n,t,e,3.5*n);s.addColorStop(0,"rgba(255, 248, 230, 0.25)"),s.addColorStop(.15,"rgba(255, 240, 200, 0.2)"),s.addColorStop(.3,"rgba(255, 230, 170, 0.15)"),s.addColorStop(.5,"rgba(255, 220, 140, 0.1)"),s.addColorStop(.7,"rgba(255, 210, 120, 0.06)"),s.addColorStop(.85,"rgba(255, 200, 100, 0.03)"),s.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(t,e,3.5*n,0,2*Math.PI),this.ctx.fill();const a=this.ctx.createRadialGradient(t,e,.5*n,t,e,2.2*n);a.addColorStop(0,"rgba(255, 250, 220, 0.35)"),a.addColorStop(.3,"rgba(255, 240, 190, 0.25)"),a.addColorStop(.6,"rgba(255, 230, 160, 0.15)"),a.addColorStop(.85,"rgba(255, 220, 140, 0.08)"),a.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(t,e,2.2*n,0,2*Math.PI),this.ctx.fill();const r=this.ctx.createRadialGradient(t,e,.6*n,t,e,1.6*n);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(t,e,1.6*n,0,2*Math.PI),this.ctx.fill();const o=this.ctx.createRadialGradient(t-.1*n,e-.1*n,0,t,e,n);o.addColorStop(0,"#FFFEF5"),o.addColorStop(.15,"#FFF9E6"),o.addColorStop(.3,"#FFF4D6"),o.addColorStop(.5,"#FFEDC0"),o.addColorStop(.7,"#FFE4A8"),o.addColorStop(.85,"#FFDC95"),o.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(t,e,n,0,2*Math.PI),this.ctx.fill()}drawHorizonReflection(t,e,i,n){const s=48+1.5*Math.sin(.15*n),a=.85*i;if(e>=a-50){const i=.3*Math.max(0,(a-e)/50);this.ctx.fillStyle=`rgba(255, 140, 0, ${i})`,this.ctx.beginPath(),this.ctx.ellipse(t,a,1.5*s,.5*s,0,0,2*Math.PI),this.ctx.fill()}}drawNightSky(t,e,i){this.ctx.fillStyle="#FFFFFF";for(let n=0;n<20;n++){const s=(.2*t+47*n)%t,a=(.2*e+23*n)%(.6*e),r=.5*Math.sin(.8*i+n)+.5;this.ctx.globalAlpha=.8*r,this.ctx.beginPath(),this.ctx.arc(s,a,1.5,0,2*Math.PI),this.ctx.fill()}const n=.75*t,s=.3*e;this.ctx.globalAlpha=.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(n,s,25,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(n-8,s-5,22,0,2*Math.PI),this.ctx.fill(),this.ctx.globalAlpha=1}}class _t extends kt{constructor(t){super(t),this.rainDrops=[],this.lastTime=0}draw(t,e,i,n=!1){const s=.001*Date.now();this.drawClouds(s,e,i,n?1:.8),this.drawRain(e,i,n)}drawRain(t,e,i){const n=i?130:90;if(this.rainDrops.length!==n){this.rainDrops=[];for(let s=0;s<n;s++)this.rainDrops.push({x:Math.random()*t,y:Math.random()*e-200*Math.random(),speed:i?80+100*Math.random():60+80*Math.random(),windOffset:30*(Math.random()-.5),width:i?1.2+1*Math.random():.8+.7*Math.random(),length:i?8+10*Math.random():6+8*Math.random(),alpha:i?.75+.15*Math.random():.65+.2*Math.random(),phase:Math.random()*Math.PI*2})}const s=.001*Date.now(),a=this.lastTime>0?Math.min(s-this.lastTime,.1):1/60;this.lastTime=s;const r=s;for(let i=0;i<this.rainDrops.length;i++){const n=this.rainDrops[i];n.y+=n.speed*a,n.y>e+50&&(n.y=-50-100*Math.random(),n.x=Math.random()*t);const s=n.windOffset*(1+.2*Math.sin(.5*r+n.phase)),o=n.x+s;o<-10?n.x=t+10:o>t+10&&(n.x=-10),this.drawRainDrop(o,n.y,n)}}drawRainDrop(t,e,i){this.ctx.save(),this.ctx.globalAlpha=i.alpha;const n=e-.5*i.length,s=e+.5*i.length;this.ctx.fillStyle=`rgba(220, 240, 255, ${i.alpha})`,this.ctx.strokeStyle=`rgba(240, 250, 255, ${.5*i.alpha})`,this.ctx.lineWidth=.4,this.ctx.beginPath(),this.ctx.moveTo(t,n),this.ctx.quadraticCurveTo(t-.3*i.width,e,t-i.width,s-.3*i.width),this.ctx.arc(t,s,i.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(t+.3*i.width,e,t,n),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class $t extends kt{constructor(t){super(t),this.snowflakes=[],this.lastTime=0}draw(t,e,i){const n=.001*Date.now();this.drawClouds(n,e,i,.7),this.drawSnowflakes(e,i)}drawSnowflakes(t,e){const i=Math.floor(t*e/5e3),n=Math.max(30,Math.min(i,80));if(this.snowflakes.length!==n){this.snowflakes=[];for(let i=0;i<n;i++)this.snowflakes.push({x:Math.random()*t,y:Math.random()*e-100*Math.random(),speedY:15+10*Math.random(),speedX:8*(Math.random()-.5),size:1.5+1.5*Math.random(),alpha:.6+.3*Math.random(),rotation:Math.random()*Math.PI*2,rotationSpeed:.3*(Math.random()-.5),swayPhase:Math.random()*Math.PI*2,swaySpeed:.5+.5*Math.random()})}const s=.001*Date.now(),a=this.lastTime>0?Math.min(s-this.lastTime,.1):1/60;this.lastTime=s;const r=s;this.ctx.lineCap="round";for(let i=0;i<this.snowflakes.length;i++){const n=this.snowflakes[i],s=2*Math.sin(r*n.swaySpeed+n.swayPhase);n.y+=n.speedY*a,n.x+=(n.speedX+s)*a,n.rotation+=n.rotationSpeed*a,n.y>e+20&&(n.y=-20-50*Math.random(),n.x=Math.random()*t),n.x<-10?n.x=t+10:n.x>t+10&&(n.x=-10),this.drawSnowflake(n.x,n.y,n.size,n.alpha,n.rotation)}}drawSnowflake(t,e,i,n,s){this.ctx.save(),this.ctx.translate(t,e),this.ctx.rotate(s),this.ctx.strokeStyle=`rgba(255, 255, 255, ${n})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let t=0;t<6;t++){const e=Math.PI/3*t,n=Math.cos(e),s=Math.sin(e);this.ctx.moveTo(0,0),this.ctx.lineTo(s*i*2.5,n*i*2.5);const a=s*i*1.5+n*i*.5,r=n*i*1.5-s*i*.5,o=s*i*1.8+n*i*1.2,l=n*i*1.8-s*i*1.2;this.ctx.moveTo(a,r),this.ctx.lineTo(o,l);const h=s*i*1.5-n*i*.5,d=n*i*1.5+s*i*.5,c=s*i*1.8-n*i*1.2,u=n*i*1.8+s*i*1.2;this.ctx.moveTo(h,d),this.ctx.lineTo(c,u)}this.ctx.stroke(),this.ctx.restore()}}class Ct extends kt{draw(t,e,i){const n=.001*Date.now();this.drawClouds(n,e,i,.7)}}class St extends kt{draw(t,e,i){const n=3e-4*Date.now();this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let t=0;t<3;t++){const s=i*(.4+.2*t),a=20*Math.sin(n+t);this.ctx.beginPath(),this.ctx.moveTo(0,s);for(let i=0;i<=e;i+=5){const r=15*Math.sin((i/e+n)*Math.PI*4+t);this.ctx.lineTo(i,s+r+a)}this.ctx.lineTo(e,i),this.ctx.lineTo(0,i),this.ctx.closePath(),this.ctx.fill()}}}class Mt extends kt{constructor(t){super(t),this.hailStones=[]}draw(t,e,i){const n=.001*Date.now();this.drawClouds(n,e,i,1),this.drawHailStones(e,i)}drawHailStones(t,e){if(60!==this.hailStones.length){this.hailStones=[];for(let i=0;i<60;i++)this.hailStones.push({startX:Math.random()*t,startY:Math.random()*(e+150)-75,speed:120+80*Math.random(),windOffset:20*(Math.random()-.5),size:2+3*Math.random(),alpha:.8+.15*Math.random(),phase:Math.random()*Math.PI*2})}const i=.002*Date.now();this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=.5;for(let n=0;n<this.hailStones.length;n++){const s=this.hailStones[n],a=(s.startY+i*s.speed)%(e+150);a>e+30&&(s.startY=-30-30*Math.random(),s.startX=Math.random()*t);const r=s.windOffset*(1+.15*Math.sin(.6*i+s.phase)),o=(s.startX+r+20*i%t)%t;o<-5?s.startX=t+5:o>t+5&&(s.startX=-5),this.drawHailStone(o,a,s)}}drawHailStone(t,e,i){this.ctx.save(),this.ctx.globalAlpha=i.alpha,this.ctx.beginPath(),this.ctx.ellipse(t,e,i.size,.9*i.size,0,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(t-.3*i.size,e-.3*i.size,.3*i.size,.25*i.size,0,0,2*Math.PI),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class At extends kt{constructor(t){super(t),this.rainyAnimation=new _t(t)}draw(t,e,i,n=!0){const s=.001*Date.now();this.drawClouds(s,e,i,1),n&&this.rainyAnimation.draw(t,e,i,!1),this.drawLightning(e,i,s)}drawLightning(t,e,i){const n=Math.sin(2.5*i)*Math.sin(5.3*i)*Math.sin(7.1*i),s=Math.max(0,n);if(s>.4){const i=(s-.4)/.6,n=.6*i,a=Math.min(n,.6*Math.sin(i*Math.PI));this.ctx.fillStyle=`rgba(255, 255, 255, ${a})`,this.ctx.fillRect(0,0,t,e)}}}const Tt=((t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(n,t,i)})`
  :host {
    display: block;
    --card-width: 100%;
    --card-height: 200px;
    --primary-color: #007AFF;
    --day-gradient-start: #87CEEB;
    --day-gradient-end: #E0F6FF;
    --night-gradient-start: #1a1a2e;
    --night-gradient-end: #16213e;
    --sunset-gradient-start: #FF6B6B;
    --sunset-gradient-end: #FFA07A;
    --sunrise-gradient-start: #FFA07A;
    --sunrise-gradient-end: #FFD700;
    --overlay-opacity: 0.1;
  }

  ha-card {
    overflow: hidden;
    background: transparent;
    box-shadow: none;
    position: relative;
    z-index: 0;
    isolation: isolate;
  }

  .weather-card {
    position: relative;
    width: var(--card-width);
    min-height: var(--card-height, 200px);
    border-radius: 16px;
    overflow: visible;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, var(--day-gradient-start), var(--day-gradient-end));
    transition: background 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.night {
    background: linear-gradient(135deg, var(--night-gradient-start), var(--night-gradient-end));
  }

  .weather-card.sunset {
    background: linear-gradient(135deg, var(--sunset-gradient-start), var(--sunset-gradient-end));
  }

  .weather-card.sunrise {
    background: linear-gradient(135deg, var(--sunrise-gradient-start), var(--sunrise-gradient-end));
  }

  .canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    pointer-events: none;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Dark overlay for better text contrast */
  .weather-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 0.8)) 0%,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 1.2)) 100%
    );
    z-index: 0;
    border-radius: 16px;
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 2px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .location {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
  }

  .temperature {
    font-size: 64px;
    font-weight: 100;
    line-height: 1;
    margin: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .condition {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
  }

  .feels-like {
    font-size: 16px;
    opacity: 0.85;
    margin-top: 8px;
  }

  .temp-range {
    font-size: 18px;
    opacity: 0.9;
    margin-top: 8px;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .temp-min {
    font-size: 14px;
    opacity: 0.7;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 12px;
    font-size: 13px;
    opacity: 0.9;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .info-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .info-icon svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  .forecast-container {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .forecast-title {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .forecast-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 12px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .forecast-scroll::-webkit-scrollbar {
    height: 6px;
  }

  .forecast-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    min-width: 60px;
  }

  .forecast-time {
    font-size: 12px;
    opacity: 0.7;
    font-weight: 400;
  }

  .forecast-icon {
    line-height: 1;
  }

  .forecast-icon svg {
    width: 32px;
    height: 32px;
    display: block;
  }

  .forecast-temp {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
  }

  .clock {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 48px;
    font-weight: 200;
    line-height: 1;
    color: white;
    text-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 2px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .clock {
      font-size: 36px;
      bottom: 16px;
      right: 16px;
    }
  }
`,Nt={wind:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `,windDirection:t=>j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${t}deg); transform-origin: center;">
      <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
    </svg>
  `},Dt={sunny:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="partly-cloudy-clip">
          <path fill="none" d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#partly-cloudy-clip)">
        <g>
          <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"/>
          <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate"/>
        </g>
      </g>
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </svg>
  `,overcast:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="overcast-clip-a">
          <path fill="none" d="M12 35l-8-1-1-10 2-8 5-4 4.72-2.21h6L29 10l4 3v7l-6 4h-6l-3 3v4l-4 2-2 2z"/>
        </clipPath>
        <clipPath id="overcast-clip-b">
          <path fill="none" d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#overcast-clip-a)">
        <g>
          <g>
            <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"/>
            <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate"/>
          </g>
          <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="3 0; -3 0; 3 0"/>
        </g>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
      <g clip-path="url(#overcast-clip-b)">
        <path fill="none" stroke="#9ca3af" stroke-linejoin="round" stroke-width="2" d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-2.1 0; 2.1 0; -2.1 0"/>
      </g>
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,cloudy:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,rain:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,pouring:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,snowy:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="31" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="24" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
        <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
        <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
    </svg>
  `,snow:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="31" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="24" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
        <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
        <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
    </svg>
  `,foggy:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"/>
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"/>
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
    </svg>
  `,fog:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"/>
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"/>
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
    </svg>
  `,hail:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="24" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="31" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
    </svg>
  `,"snowy-rainy":j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="24" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="31" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
    </svg>
  `,lightning:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"/>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/>
      </g>
    </svg>
  `,"lightning-rainy":j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"/>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/>
      </g>
    </svg>
  `,windy:j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":j`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function Pt(t,...e){const i=Nt[t];return"function"==typeof i?i(...e):i||""}const Et={en:{sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"🌤️ Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"⚙️ Configuration",quickPresets:"🎨 Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"🌦️ Weather Condition",condition:"Condition",temperature:"Temperature (°C)",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"🕐 Time of Day",timeMode:"Time Mode",autoTime:"🕐 Auto (Current Time)",manualControl:"⏱️ Manual Control",sunrise:"🌅 Sunrise",day:"☀️ Day",sunset:"🌇 Sunset",night:"🌙 Night",currentTime:"Current Time",displayOptions:"👁️ Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",sunriseSunset:"Sunrise/Sunset",updateCard:"🔄 Update Card",startDemo:"🎬 Start Demo Mode",stopDemo:"⏹️ Stop Demo",madeWith:"Made with ❤️ for Home Assistant",loading:"⏳ Loading card...",errorTitle:"⚠️ Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"☀️ Sunny",clear:"☀️ Clear",clearNight:"🌙 Clear Night",partlyCloudy:"⛅ Partly Cloudy",cloudy:"☁️ Cloudy",rainy:"🌧️ Rainy",pouring:"⛈️ Pouring",snowy:"❄️ Snowy",sleet:"🌨️ Sleet",hail:"🧊 Hail",foggy:"🌫️ Foggy",lightning:"⚡ Lightning",thunderstorm:"⛈️ Thunderstorm"},language:{title:"🌍 Language",english:"🇺🇸 English",russian:"🇷🇺 Русский",french:"🇫🇷 Français",german:"🇩🇪 Deutsch",dutch:"🇳🇱 Nederlands"}}},ru:{sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",demo:{pageTitle:"🌤️ Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"⚙️ Конфигурация",quickPresets:"🎨 Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"🌦️ Погодные условия",condition:"Состояние",temperature:"Температура (°C)",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"🕐 Время суток",timeMode:"Режим времени",autoTime:"🕐 Авто (текущее время)",manualControl:"⏱️ Ручное управление",sunrise:"🌅 Восход",day:"☀️ День",sunset:"🌇 Закат",night:"🌙 Ночь",currentTime:"Текущее время",displayOptions:"👁️ Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",sunriseSunset:"Восход/Закат",updateCard:"🔄 Обновить карточку",startDemo:"🎬 Запустить демо",stopDemo:"⏹️ Остановить демо",madeWith:"Сделано с ❤️ для Home Assistant",loading:"⏳ Загрузка карточки...",errorTitle:"⚠️ Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"☀️ Солнечно",clear:"☀️ Ясно",clearNight:"🌙 Ясная ночь",partlyCloudy:"⛅ Переменная облачность",cloudy:"☁️ Облачно",rainy:"🌧️ Дождь",pouring:"⛈️ Ливень",snowy:"❄️ Снег",sleet:"🌨️ Мокрый снег",hail:"🧊 Град",foggy:"🌫️ Туман",lightning:"⚡ Гроза",thunderstorm:"⛈️ Гроза с дождем"},language:{title:"🌍 Язык",english:"🇺🇸 English",russian:"🇷🇺 Русский",french:"🇫🇷 Français",german:"🇩🇪 Deutsch",dutch:"🇳🇱 Nederlands"}}},de:{sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"🌤️ Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"⚙️ Konfiguration",quickPresets:"🎨 Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"🌦️ Wetterbedingungen",condition:"Zustand",temperature:"Temperatur (°C)",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"🕐 Tageszeit",timeMode:"Zeitmodus",autoTime:"🕐 Automatisch (Aktuelle Zeit)",manualControl:"⏱️ Manuelle Steuerung",sunrise:"🌅 Sonnenaufgang",day:"☀️ Tag",sunset:"🌇 Sonnenuntergang",night:"🌙 Nacht",currentTime:"Aktuelle Zeit",displayOptions:"👁️ Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",updateCard:"🔄 Karte aktualisieren",startDemo:"🎬 Demo starten",stopDemo:"⏹️ Demo stoppen",madeWith:"Mit ❤️ für Home Assistant gemacht",loading:"⏳ Karte wird geladen...",errorTitle:"⚠️ Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"☀️ Sonnig",clear:"☀️ Klar",clearNight:"🌙 Klare Nacht",partlyCloudy:"⛅ Teilweise bewölkt",cloudy:"☁️ Bewölkt",rainy:"🌧️ Regen",pouring:"⛈️ Starkregen",snowy:"❄️ Schnee",sleet:"🌨️ Schneeregen",hail:"🧊 Hagel",foggy:"🌫️ Nebel",lightning:"⚡ Blitz",thunderstorm:"⛈️ Gewitter"},language:{title:"🌍 Sprache",english:"🇺🇸 English",russian:"🇷🇺 Русский",german:"🇩🇪 Deutsch",dutch:"🇳🇱 Nederlands"}}},nl:{sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",demo:{pageTitle:"🌤️ Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"⚙️ Configuratie",quickPresets:"🎨 Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"🌦️ Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur (°C)",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"🕐 Tijd van de dag",timeMode:"Tijdmodus",autoTime:"🕐 Automatisch (huidige tijd)",manualControl:"⏱️ Handmatige bediening",sunrise:"🌅 Zonsopgang",day:"☀️ Dag",sunset:"🌇 Zonsondergang",night:"🌙 Nacht",currentTime:"Huidige tijd",displayOptions:"👁️ Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",updateCard:"🔄 Kaart bijwerken",startDemo:"🎬 Demo starten",stopDemo:"⏹️ Demo stoppen",madeWith:"Gemaakt met ❤️ voor Home Assistant",loading:"⏳ Kaart laden...",errorTitle:"⚠️ Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"☀️ Zonnig",clear:"☀️ Helder",clearNight:"🌙 Heldere nacht",partlyCloudy:"⛅ Gedeeltelijk bewolkt",cloudy:"☁️ Bewolkt",rainy:"🌧️ Regen",pouring:"⛈️ Zware regen",snowy:"❄️ Sneeuw",sleet:"🌨️ Natte sneeuw",hail:"🧊 Hagel",foggy:"🌫️ Mist",lightning:"⚡ Bliksem",thunderstorm:"⛈️ Onweer"},language:{title:"🌍 Taal",english:"🇺🇸 English",russian:"🇷🇺 Русский",german:"🇩🇪 Deutsch",dutch:"🇳🇱 Nederlands"}}},fr:{sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"🌤️ Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"⚙️ Configuration",quickPresets:"🎨 Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"🌦️ Condition météo",condition:"Condition",temperature:"Température (°C)",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"🕐 Moment de la journée",timeMode:"Mode horaire",autoTime:"🕐 Auto (heure actuelle)",manualControl:"⏱️ Contrôle manuel",sunrise:"🌅 Lever du soleil",day:"☀️ Jour",sunset:"🌇 Coucher du soleil",night:"🌙 Nuit",currentTime:"Heure actuelle",displayOptions:"👁️ Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",sunriseSunset:"Lever/Coucher du soleil",updateCard:"🔄 Mettre à jour la carte",startDemo:"🎬 Démarrer le mode démo",stopDemo:"⏹️ Arrêter la démo",madeWith:"Fait avec ❤️ pour Home Assistant",loading:"⏳ Chargement de la carte...",errorTitle:"⚠️ Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"☀️ Ensoleillé",clear:"☀️ Dégagé",clearNight:"🌙 Nuit claire",partlyCloudy:"⛅ Partiellement nuageux",cloudy:"☁️ Nuageux",rainy:"🌧️ Pluvieux",pouring:"⛈️ Forte pluie",snowy:"❄️ Neigeux",sleet:"🌨️ Neige fondue",hail:"🧊 Grêle",foggy:"🌫️ Brumeux",lightning:"⚡ Éclairs",thunderstorm:"⛈️ Orage"},language:{title:"🌍 Langue",english:"🇺🇸 English",russian:"🇷🇺 Русский",french:"🇫🇷 Français",german:"🇩🇪 Deutsch",dutch:"🇳🇱 Nederlands"}}}};const Ht=new class{lang="en";fallback="en";t(t){const e=t.split("."),i=e.reduce((t,e)=>t?.[e],Et[this.lang]);if(null!=i)return i;const n=e.reduce((t,e)=>t?.[e],Et[this.fallback]);return n??t}setLanguage(t){Et[t]&&this.lang!==t&&(this.lang=t,window.dispatchEvent(new CustomEvent("language-changed")))}};window.i18n=Ht;const zt=({configLang:t,hassLang:e}={})=>{if(t&&"auto"!==t)return t;if(e)return e;if("undefined"!=typeof navigator&&navigator.language){const t=navigator.language.toLowerCase();if(t.startsWith("ru"))return"ru";if(t.startsWith("de"))return"de";if(t.startsWith("nl"))return"nl";if(t.startsWith("fr"))return"fr"}return"en"};class Ft extends ot{static get properties(){return{hass:{type:Object},config:{type:Object},currentTime:{type:String}}}static get styles(){return Tt}constructor(){super(),this.config={},this.animationFrame=null,this.canvas=null,this.ctx=null,this.canvasWidth=0,this.canvasHeight=0,this.animations={},this.holdTimer=null,this.holdDelay=500,this.currentTime="",this.clockInterval=null}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{this.setupCanvas(),this.canvas&&this.ctx&&(this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver()),this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this._wheelHandler&&this.shadowRoot){const t=this.shadowRoot.querySelector(".forecast-scroll");t&&t.removeEventListener("wheel",this._wheelHandler),this._wheelHandler=null}this.clockInterval&&(clearInterval(this.clockInterval),this.clockInterval=null)}updated(t){super.updated(t),(t.has("hass")||t.has("config"))&&(this.canvas&&this.ctx&&this.resizeCanvas(),this.setupForecastScroll());const e=zt({configLang:this.config?.language,hassLang:this.hass?.language});Ht.lang!==e&&Ht.setLanguage(e)}initializeAnimations(){this.animations={sunny:new xt(this.ctx),rainy:new _t(this.ctx),snowy:new $t(this.ctx),cloudy:new Ct(this.ctx),foggy:new St(this.ctx),hail:new Mt(this.ctx),thunderstorm:new At(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector(".canvas-container");t&&(this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(t))}setupForecastScroll(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector(".forecast-scroll");t&&(this._wheelHandler&&t.removeEventListener("wheel",this._wheelHandler),this._wheelHandler=e=>{0!==e.deltaY&&(e.preventDefault(),t.scrollLeft+=e.deltaY)},t.addEventListener("wheel",this._wheelHandler,{passive:!1}))}resizeCanvas(){if(!this.canvas)return;const t=this.shadowRoot.querySelector(".canvas-container");if(!t)return;const e=t.getBoundingClientRect();if(0===e.width||0===e.height)return;const i=window.devicePixelRatio||2;this.canvas.width=e.width*i,this.canvas.height=e.height*i,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx.scale(i,i),this.canvasWidth=e.width,this.canvasHeight=e.height,this.initializeAnimations()}setupCanvas(){const t=this.shadowRoot.querySelector(".canvas-container");if(!t)return;const e=t.querySelector("canvas");e&&e.remove(),this.canvas=document.createElement("canvas"),t.appendChild(this.canvas),this.resizeCanvas()}getState(t){if(!this.hass||!t)return null;const e=this.hass.states[t];return e?e.state:null}getAttributes(t){if(!this.hass||!t)return{};const e=this.hass.states[t];return e?e.attributes:{}}getWeatherData(){const t=this.config.entity||"weather.home",e=this.getState(t),i=this.getAttributes(t),n=i.condition||e||"sunny";let s=null;if(this.config.templowAttribute&&null!=i[this.config.templowAttribute])s=i[this.config.templowAttribute];else{for(const t of pt)if(null!=i[t]){s=i[t];break}null==s&&(s=(i.forecast&&i.forecast[0]?i.forecast[0].templow:null)||(i.forecast_hourly&&i.forecast_hourly[0]?i.forecast_hourly[0].native_templow:null))}return{condition:n,temperature:null!=i.temperature?i.temperature:null,apparentTemperature:i.apparent_temperature||null,humidity:null!=i.humidity?i.humidity:null,windSpeed:null!=i.wind_speed?i.wind_speed:null,windGust:i.wind_gust_speed||i.wind_gust||null,windBearing:null!=i.wind_bearing?i.wind_bearing:null,windDirection:i.wind_direction||null,pressure:i.pressure||null,forecast:i.forecast||i.forecast_hourly||[],friendlyName:i.friendly_name||Ht.t("weather"),templow:s}}getTodayForecast(){if(!this.hass||!this.config)return[];const t=this.getWeatherData();if(!t.forecast||0===t.forecast.length)return[];const e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(i);n.setDate(n.getDate()+1);return t.forecast.filter(t=>{if(!t.datetime)return!1;const s=new Date(t.datetime),a=new Date(s.getFullYear(),s.getMonth(),s.getDate());return a.getTime()===i.getTime()||a.getTime()===n.getTime()&&s.getHours()<=e.getHours()}).sort((t,e)=>new Date(t.datetime)-new Date(e.datetime)).slice(0,8)}startAnimation(){const t=()=>{this.draw(),this.animationFrame=requestAnimationFrame(t)};t()}draw(){if(!this.ctx||!this.canvas)return;if(!(this.canvasWidth&&this.canvasHeight||(this.resizeCanvas(),this.canvasWidth&&this.canvasHeight)))return;const t=this.canvasWidth,e=this.canvasHeight;this.ctx.clearRect(0,0,t,e);const i=this.getWeatherData(),n=this.hass?.states[this.config.entity],s=vt(n),a=this._testTimeOfDay||bt(s);switch(i.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny.draw(a,t,e);break;case"clear-night":this.animations.sunny.draw({type:"night",progress:0},t,e);break;case"rainy":case"rain":this.animations.rainy.draw(a,t,e,!1);break;case"pouring":this.animations.rainy.draw(a,t,e,!0);break;case"snowy":case"snow":this.animations.snowy.draw(a,t,e);break;case"snowy-rainy":this.animations.rainy.draw(a,t,e,!1),this.animations.snowy.draw(a,t,e);break;case"hail":this.animations.hail.draw(a,t,e);break;case"foggy":case"fog":this.animations.foggy.draw(a,t,e);break;case"lightning":this.animations.thunderstorm.draw(a,t,e,!1);break;case"lightning-rainy":this.animations.thunderstorm.draw(a,t,e,!0);break;default:this.animations.cloudy.draw(a,t,e)}}renderTodayForecast(){const t=this.getTodayForecast();return 0===t.length?U`<div style="opacity: 0.6; font-size: 14px;">${Ht.t("forecast_unavailable")}</div>`:U`
      <div class="forecast-scroll">
        ${t.map(t=>{return U`
          <div class="forecast-item">
            <div class="forecast-time">${i=t.datetime,i?`${new Date(i).getHours().toString().padStart(2,"0")}:00`:""}</div>
            <div class="forecast-icon">${e=t.condition,e&&Dt[e.toLowerCase()]||""}</div>
            <div class="forecast-temp">${Math.round(t.temperature||t.temp||t.native_temperature||0)}°</div>
          </div>
        `;var e,i})}
      </div>
    `}convertWindSpeed(t){return null==t?null:"kmh"===this.config.windSpeedUnit?Math.round(3.6*t*10)/10:t}getWindSpeedUnit(){return"kmh"===this.config.windSpeedUnit?Ht.t("wind_unit_kmh"):Ht.t("wind_unit_ms")}formatCurrentTime(){const t=new Date;return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}startClock(){this.config.showClock&&(this.currentTime=this.formatCurrentTime(),this.clockInterval=setInterval(()=>{this.currentTime=this.formatCurrentTime()},1e3))}render(){if(!this.hass)return U`<div>No Home Assistant connection</div>`;const t=this.getWeatherData(),e=vt(this.hass.states[this.config.entity],this.config.sunriseEntity,this.config.sunsetEntity,this.hass),i=this._testTimeOfDay||bt(e),n=`weather-card ${i.type}`,s=this.config.height?`${this.config.height}px`:"200px",a=function(t){if("sunrise"===t.type){const e=t.progress,i={r:26,g:26,b:46},n={r:255,g:160,b:122},s={r:255,g:215,b:0};return{start:{r:Math.round(i.r+(n.r-i.r)*e),g:Math.round(i.g+(n.g-i.g)*e),b:Math.round(i.b+(n.b-i.b)*e)},end:{r:Math.round(i.r+(s.r-i.r)*e),g:Math.round(i.g+(s.g-i.g)*e),b:Math.round(i.b+(s.b-i.b)*e)}}}if("sunset"===t.type){const e=t.progress,i={r:255,g:107,b:107},n={r:255,g:160,b:122},s={r:26,g:26,b:46};return{start:{r:Math.round(i.r+(s.r-i.r)*e),g:Math.round(i.g+(s.g-i.g)*e),b:Math.round(i.b+(s.b-i.b)*e)},end:{r:Math.round(n.r+(s.r-n.r)*e),g:Math.round(n.g+(s.g-n.g)*e),b:Math.round(n.b+(s.b-n.b)*e)}}}return null}(i),r=a?`background: linear-gradient(135deg, rgb(${a.start.r}, ${a.start.g}, ${a.start.b}), rgb(${a.end.r}, ${a.end.g}, ${a.end.b}));`:"",o=`--overlay-opacity: ${void 0!==this.config.overlayOpacity?this.config.overlayOpacity:gt};`;return U`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${n}" style="min-height: ${s}; ${r}; ${o} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${void 0!==this.config.name?U`
              <div class="header">
                <div class="location">${this.config.name||t.friendlyName}</div>
              </div>
            `:""}
            <div>
              <div class="condition">${Ht.t(t.condition)}</div>
              <div class="temperature">${null!=t.temperature?Math.round(t.temperature)+"°":Ht.t("no_data")}</div>
              ${this.config.showMinTemp&&t.templow?U`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(t.templow)}°</span>
                </div>
              `:""}
              ${this.config.showFeelsLike&&t.apparentTemperature?U`
                <div class="feels-like">${Ht.t("feels_like")} ${Math.round(t.apparentTemperature)}°</div>
              `:""}
            </div>
            <div class="details">
              <div class="info-grid">
                ${this.config.showHumidity&&null!=t.humidity?U`
                  <div class="info-item">
                    <span class="info-icon">${Pt("humidity")}</span>
                    <span>${t.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&e.hasSunData?U`
                  <div class="info-item">
                    <span class="info-icon">${Pt("sunrise")}</span>
                    <span>${yt(e.sunrise)}</span>
                  </div>
                `:""}
                ${this.config.showWind&&null!=t.windSpeed?U`
                  ${this.config.showWindDirection&&null!=t.windBearing?U`
                    <div class="info-item">
                      <span class="info-icon">${Pt("windDirection",t.windBearing)}</span>
                      <span>${this.convertWindSpeed(t.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&t.windGust?` / ${this.convertWindSpeed(t.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:U`
                    <div class="info-item">
                      <span class="info-icon">${Pt("wind")}</span>
                      <span>${this.convertWindSpeed(t.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&t.windGust?` / ${this.convertWindSpeed(t.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&e.hasSunData?U`
                  <div class="info-item">
                    <span class="info-icon">${Pt("sunset")}</span>
                    <span>${yt(e.sunset)}</span>
                  </div>
                `:""}
              </div>
            </div>
            ${this.config.showForecast?U`
              <div class="forecast-container">
                <div class="forecast-title">${Ht.t("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
          </div>
          ${this.config.showClock?U`
            <div class="clock">${this.currentTime}</div>
          `:""}
        </div>
      </ha-card>
    `}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity");this.config={entity:t.entity,icons_path:t.icons_path,name:t.name,height:t.height||ft,showFeelsLike:!1!==t.show_feels_like,showWind:!1!==t.show_wind,showWindGust:!1!==t.show_wind_gust,showWindDirection:!1!==t.show_wind_direction,showHumidity:!1!==t.show_humidity,showMinTemp:!1!==t.show_min_temp,showForecast:!0===t.show_forecast,showSunriseSunset:!1!==t.show_sunrise_sunset,showClock:!0===t.show_clock,overlayOpacity:void 0!==t.overlay_opacity?t.overlay_opacity:gt,language:t.language||mt,windSpeedUnit:t.wind_speed_unit||wt,sunriseEntity:t.sunrise_entity||null,sunsetEntity:t.sunset_entity||null,templowAttribute:t.templow_attribute||null,tapAction:t.tap_action||{action:"more-info"},holdAction:t.hold_action||{action:"none"},doubleTapAction:t.double_tap_action||{action:"none"}},this.config.language&&Ht.setLanguage(this.config.language)}handleAction(t){if(!t||!this.hass)return;switch(t.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:t.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:t.entity||this.config.entity});break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}break;case"navigate":t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),this.fireEvent("location-changed",{replace:!1}));break;case"url":t.url_path&&window.open(t.url_path)}}fireEvent(t,e={}){const i=new CustomEvent(t,{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(i)}handleTap(t){if(!t.target.closest(".forecast-item")&&!t.target.closest(".info-item")){if(this.lastTap&&Date.now()-this.lastTap<300)return this.handleDoubleTap(t),void(this.lastTap=null);this.lastTap=Date.now(),setTimeout(()=>{this.lastTap&&(this.handleAction(this.config.tapAction),this.lastTap=null)},300)}}handlePointerDown(t){this.holdTimer=setTimeout(()=>{this.handleHold(t),this.holdFired=!0},this.holdDelay)}handlePointerUp(t){clearTimeout(this.holdTimer),this.holdFired&&(t.preventDefault(),t.stopPropagation(),this.holdFired=!1)}handleHold(){this.handleAction(this.config.holdAction)}handleDoubleTap(){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}const Ot=2;class Lt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Rt=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),Rt(t,e);return!0},Wt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},Bt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),It(e)}};function Ut(t){void 0!==this._$AN?(Wt(this),this._$AM=t,Bt(this)):this._$AM=t}function jt(t,e=!1,i=0){const n=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)Rt(n[t],!1),Wt(n[t]);else null!=n&&(Rt(n,!1),Wt(n));else Rt(this,t)}const It=t=>{t.type==Ot&&(t._$AP??=jt,t._$AQ??=Ut)};class Gt extends Lt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Bt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Rt(this,t),Wt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const qt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Gt{render(t){return this._key=t,Ht.t(t)}connected(){this._onLangChange=()=>{this.setValue(Ht.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){window.removeEventListener("language-changed",this._onLangChange)}});try{customElements.define("dynamic-weather-card",Ft),console.log("%cDynamic Weather Card %c0.3.3","color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;","\nДинамическая карточка погоды"),window.customCards=window.customCards||[],window.customCards.push({type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"})}catch(t){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",t)}export{Ht as i18n,zt as resolveLanguage,qt as t};
