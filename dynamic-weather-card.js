var z=function(e,o,a,n){var _=arguments.length,i=_<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,a):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,o,a,n);else for(var l=e.length-1;l>=0;l--)if(r=e[l])i=(_<3?r(i):_>3?r(o,a,i):r(o,a))||i;return _>3&&i&&Object.defineProperty(o,a,i),i};var he=globalThis,be=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol(),Bo=new WeakMap;class Pe{constructor(e,o,a){if(this._$cssResult$=!0,a!==He)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(be&&e===void 0){let a=o!==void 0&&o.length===1;a&&(e=Bo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Bo.set(o,e))}return e}toString(){return this.cssText}}var Jo=(e)=>new Pe(typeof e=="string"?e:e+"",void 0,He),$=(e,...o)=>{let a=e.length===1?e[0]:o.reduce((n,_,i)=>n+((r)=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(_)+e[i+1],e[0]);return new Pe(a,e,He)},Qo=(e,o)=>{if(be)e.adoptedStyleSheets=o.map((a)=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(let a of o){let n=document.createElement("style"),_=he.litNonce;_!==void 0&&n.setAttribute("nonce",_),n.textContent=a.cssText,e.appendChild(n)}},We=be?(e)=>e:(e)=>e instanceof CSSStyleSheet?((o)=>{let a="";for(let n of o.cssRules)a+=n.cssText;return Jo(a)})(e):e;var{is:on,defineProperty:an,getOwnPropertyDescriptor:nn,getOwnPropertyNames:_n,getOwnPropertySymbols:rn,getPrototypeOf:ln}=Object,je=globalThis,Zo=je.trustedTypes,sn=Zo?Zo.emptyScript:"",un=je.reactiveElementPolyfillSupport,ie=(e,o)=>e,re={toAttribute(e,o){switch(o){case Boolean:e=e?sn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,o){let a=e;switch(o){case Boolean:a=e!==null;break;case Number:a=e===null?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(n){a=null}}return a}},Ve=(e,o)=>!on(e,o),Co={attribute:!0,type:String,converter:re,reflect:!1,useDefault:!1,hasChanged:Ve};Symbol.metadata??=Symbol("metadata"),je.litPropertyMetadata??=new WeakMap;class F extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=Co){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){let a=Symbol(),n=this.getPropertyDescriptor(e,a,o);n!==void 0&&an(this.prototype,e,n)}}static getPropertyDescriptor(e,o,a){let{get:n,set:_}=nn(this.prototype,e)??{get(){return this[o]},set(i){this[o]=i}};return{get:n,set(i){let r=n?.call(this);_?.call(this,i),this.requestUpdate(e,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Co}static _$Ei(){if(this.hasOwnProperty(ie("elementProperties")))return;let e=ln(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ie("properties"))){let o=this.properties,a=[..._n(o),...rn(o)];for(let n of a)this.createProperty(n,o[n])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[a,n]of o)this.elementProperties.set(a,n)}this._$Eh=new Map;for(let[o,a]of this.elementProperties){let n=this._$Eu(o,a);n!==void 0&&this._$Eh.set(n,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let n of a)o.unshift(We(n))}else e!==void 0&&o.push(We(e));return o}static _$Eu(e,o){let a=o.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e)=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e)=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,o=this.constructor.elementProperties;for(let a of o.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e)=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e)=>e.hostDisconnected?.())}attributeChangedCallback(e,o,a){this._$AK(e,a)}_$ET(e,o){let a=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,a);if(n!==void 0&&a.reflect===!0){let _=(a.converter?.toAttribute!==void 0?a.converter:re).toAttribute(o,a.type);this._$Em=e,_==null?this.removeAttribute(n):this.setAttribute(n,_),this._$Em=null}}_$AK(e,o){let a=this.constructor,n=a._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let _=a.getPropertyOptions(n),i=typeof _.converter=="function"?{fromAttribute:_.converter}:_.converter?.fromAttribute!==void 0?_.converter:re;this._$Em=n;let r=i.fromAttribute(o,_.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(e,o,a,n=!1,_){if(e!==void 0){let i=this.constructor;if(n===!1&&(_=this[e]),a??=i.getPropertyOptions(e),!((a.hasChanged??Ve)(_,o)||a.useDefault&&a.reflect&&_===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,a))))return;this.C(e,o,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:a,reflect:n,wrapped:_},i){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??o??this[e]),_!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(o=void 0),this._$AL.set(e,o)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,_]of this._$Ep)this[n]=_;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[n,_]of a){let{wrapped:i}=_,r=this[n];i!==!0||this._$AL.has(n)||r===void 0||this.C(n,void 0,_,r)}}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach((a)=>a.hostUpdate?.()),this.update(o)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach((o)=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((o)=>this._$ET(o,this[o])),this._$EM()}updated(e){}firstUpdated(e){}}F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[ie("elementProperties")]=new Map,F[ie("finalized")]=new Map,un?.({ReactiveElement:F}),(je.reactiveElementVersions??=[]).push("2.1.2");var Ue=globalThis,No=(e)=>e,qe=Ue.trustedTypes,$o=qe?qe.createPolicy("lit-html",{createHTML:(e)=>e}):void 0;var x=`lit$${Math.random().toFixed(9).slice(2)}$`,Uo="?"+x,tn=`<${Uo}>`,X=document,se=()=>X.createComment(""),ue=(e)=>e===null||typeof e!="object"&&typeof e!="function",Ge=Array.isArray,pn=(e)=>Ge(e)||typeof e?.[Symbol.iterator]=="function";var le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ao=/-->/g,Fo=/>/g,T=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xo=/'/g,Ho=/"/g,Go=/^(?:script|style|textarea|title)$/i,Re=(e)=>(o,...a)=>({_$litType$:e,strings:o,values:a}),g=Re(1),h=Re(2),k_=Re(3),D=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Wo=new WeakMap,L=X.createTreeWalker(X,129);function Ro(e,o){if(!Ge(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $o!==void 0?$o.createHTML(o):o}var dn=(e,o)=>{let a=e.length-1,n=[],_,i=o===2?"<svg>":o===3?"<math>":"",r=le;for(let l=0;l<a;l++){let s=e[l],u,t,d=-1,k=0;for(;k<s.length&&(r.lastIndex=k,t=r.exec(s),t!==null);)k=r.lastIndex,r===le?t[1]==="!--"?r=Ao:t[1]!==void 0?r=Fo:t[2]!==void 0?(Go.test(t[2])&&(_=RegExp("</"+t[2],"g")),r=T):t[3]!==void 0&&(r=T):r===T?t[0]===">"?(r=_??le,d=-1):t[1]===void 0?d=-2:(d=r.lastIndex-t[2].length,u=t[1],r=t[3]===void 0?T:t[3]==='"'?Ho:xo):r===Ho||r===xo?r=T:r===Ao||r===Fo?r=le:(r=T,_=void 0);let p=r===T&&e[l+1].startsWith("/>")?" ":"";i+=r===le?s+tn:d>=0?(n.push(u),s.slice(0,d)+"$lit$"+s.slice(d)+x+p):s+x+(d===-2?l:p)}return[Ro(e,i+(e[a]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),n]};class te{constructor({strings:e,_$litType$:o},a){let n;this.parts=[];let _=0,i=0,r=e.length-1,l=this.parts,[s,u]=dn(e,o);if(this.el=te.createElement(s,a),L.currentNode=this.el.content,o===2||o===3){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;(n=L.nextNode())!==null&&l.length<r;){if(n.nodeType===1){if(n.hasAttributes())for(let t of n.getAttributeNames())if(t.endsWith("$lit$")){let d=u[i++],k=n.getAttribute(t).split(x),p=/([.?@])?(.*)/.exec(d);l.push({type:1,index:_,name:p[2],strings:k,ctor:p[1]==="."?Lo:p[1]==="?"?Xo:p[1]==="@"?Do:de}),n.removeAttribute(t)}else t.startsWith(x)&&(l.push({type:6,index:_}),n.removeAttribute(t));if(Go.test(n.tagName)){let t=n.textContent.split(x),d=t.length-1;if(d>0){n.textContent=qe?qe.emptyScript:"";for(let k=0;k<d;k++)n.append(t[k],se()),L.nextNode(),l.push({type:2,index:++_});n.append(t[d],se())}}}else if(n.nodeType===8)if(n.data===Uo)l.push({type:2,index:_});else{let t=-1;for(;(t=n.data.indexOf(x,t+1))!==-1;)l.push({type:7,index:_}),t+=x.length-1}_++}}static createElement(e,o){let a=X.createElement("template");return a.innerHTML=e,a}}function I(e,o,a=e,n){if(o===D)return o;let _=n!==void 0?a._$Co?.[n]:a._$Cl,i=ue(o)?void 0:o._$litDirective$;return _?.constructor!==i&&(_?._$AO?.(!1),i===void 0?_=void 0:(_=new i(e),_._$AT(e,a,n)),n!==void 0?(a._$Co??=[])[n]=_:a._$Cl=_),_!==void 0&&(o=I(e,_._$AS(e,o.values),_,n)),o}class To{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:a}=this._$AD,n=(e?.creationScope??X).importNode(o,!0);L.currentNode=n;let _=L.nextNode(),i=0,r=0,l=a[0];for(;l!==void 0;){if(i===l.index){let s;l.type===2?s=new pe(_,_.nextSibling,this,e):l.type===1?s=new l.ctor(_,l.name,l.strings,this,e):l.type===6&&(s=new Eo(_,this,e)),this._$AV.push(s),l=a[++r]}i!==l?.index&&(_=L.nextNode(),i++)}return L.currentNode=X,n}p(e){let o=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,o),o+=a.strings.length-2):a._$AI(e[o])),o++}}class pe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,a,n){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=a,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=I(this,e,o),ue(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(X.createTextNode(e)),this._$AH=e}$(e){let{values:o,_$litType$:a}=e,n=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=te.createElement(Ro(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===n)this._$AH.p(o);else{let _=new To(n,this),i=_.u(this.options);_.p(o),this.T(i),this._$AH=_}}_$AC(e){let o=Wo.get(e.strings);return o===void 0&&Wo.set(e.strings,o=new te(e)),o}k(e){Ge(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,a,n=0;for(let _ of e)n===o.length?o.push(a=new pe(this.O(se()),this.O(se()),this,this.options)):a=o[n],a._$AI(_),n++;n<o.length&&(this._$AR(a&&a._$AB.nextSibling,n),o.length=n)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){let a=No(e).nextSibling;No(e).remove(),e=a}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,a,n,_){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=o,this._$AM=n,this.options=_,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=K}_$AI(e,o=this,a,n){let _=this.strings,i=!1;if(_===void 0)e=I(this,e,o,0),i=!ue(e)||e!==this._$AH&&e!==D,i&&(this._$AH=e);else{let r=e,l,s;for(e=_[0],l=0;l<_.length-1;l++)s=I(this,r[a+l],o,l),s===D&&(s=this._$AH[l]),i||=!ue(s)||s!==this._$AH[l],s===K?e=K:e!==K&&(e+=(s??"")+_[l+1]),this._$AH[l]=s}i&&!n&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Lo extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class Xo extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class Do extends de{constructor(e,o,a,n,_){super(e,o,a,n,_),this.type=5}_$AI(e,o=this){if((e=I(this,e,o,0)??K)===D)return;let a=this._$AH,n=e===K&&a!==K||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,_=e!==K&&(a===K||n);n&&this.element.removeEventListener(this.name,this,a),_&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Eo{constructor(e,o,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}var kn=Ue.litHtmlPolyfillSupport;kn?.(te,pe),(Ue.litHtmlVersions??=[]).push("3.3.2");var Yo=(e,o,a)=>{let n=a?.renderBefore??o,_=n._$litPart$;if(_===void 0){let i=a?.renderBefore??null;n._$litPart$=_=new pe(o.insertBefore(se(),i),i,void 0,a??{})}return _._$AI(e),_};var Te=globalThis;class S extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yo(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}S._$litElement$=!0,S.finalized=!0,Te.litElementHydrateSupport?.({LitElement:S});var gn=Te.litElementPolyfillSupport;gn?.({LitElement:S});(Te.litElementVersions??=[]).push("4.2.2");var cn={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:Ve},yn=(e=cn,o,a)=>{let{kind:n,metadata:_}=a,i=globalThis.litPropertyMetadata.get(_);if(i===void 0&&globalThis.litPropertyMetadata.set(_,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(a.name,e),n==="accessor"){let{name:r}=a;return{set(l){let s=o.get.call(this);o.set.call(this,l),this.requestUpdate(r,s,e,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,e,l),l}}}if(n==="setter"){let{name:r}=a;return function(l){let s=this[r];o.call(this,l),this.requestUpdate(r,s,e,!0,l)}}throw Error("Unsupported decorator location: "+n)};function b(e){return(o,a)=>typeof a=="object"?yn(e,o,a):((n,_,i)=>{let r=_.hasOwnProperty(i);return _.constructor.createProperty(i,n),r?Object.getOwnPropertyDescriptor(_,i):void 0})(e,o,a)}function ke(e){return b({...e,state:!0,attribute:!1})}var Io="0.0.0-dev",N={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},Oo=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],c={showFeelsLike:!0,showWind:!0,showWindGust:!0,showWindDirection:!0,showHumidity:!0,showPressure:!1,showUvIndex:!1,showDewPoint:!1,showMinTemp:!0,showPrecipitationOutlook:!1,showTemperatureBars:!1,showAurora:!1,showRaindrops:!0,showWindEffects:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,hourlyForecastTitle:null,dailyForecastTitle:null,showSunriseSunset:!0,showClock:!1,showDate:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,textShadow:1,language:"auto",height:null,borderRadius:null,sunPositionX:null,sunPositionY:null,textColor:null,windSpeedUnit:"ms",showAnimations:!0,layout:"default",visualStyle:"modern",animationQuality:"high"};var ea={sunny:"Solskin",clear:"Klart",overcast:"Overskyet",cloudy:"Skyet",partlycloudy:"Delvist skyet",rainy:"Regnvejr",rain:"Regn",snowy:"Snevejr",snow:"Sne",foggy:"Tåget",fog:"Tåge",lightning:"Lyn","lightning-rainy":"Tordenvejr",pouring:"Kraftig regn","snowy-rainy":"Slud",hail:"Hagl","clear-night":"Klar nat",windy:"Blæsende","windy-variant":"Blæsende, overskyet",feels_like:"Føles som",forecast_title:"Dagens vejrudsigt",forecast_title_hourly:"Timeprognose",daily_forecast_title:"Daglig vejrudsigt",no_data:"Ingen data",forecast_unavailable:"Vejrudsigt utilgængelig",weather:"Vejr",language:"Sprog",wind_unit_kmh:"km/t",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knob",wind_unit_fts:"ft/s",show_clock:"Vis aktuel tid",am:"FM",pm:"EM",pressure:"Lufttryk",uv_index:"UV-indeks",dew_point:"Dugpunkt",aqi:"Luftkvalitetsindeks",precipitation_outlook:{start:"{kind} ventes omkring {time}",soon:"{kind} ventes snart",stop:"{kind} stopper omkring {time}",continues:"{kind} i mindst {hours} timer mere",rain:"Regn",snow:"Sne",sleet:"Slud",hail:"Hagl",storm:"Tordenvejr"},editor:{entity:"Vejrentitet",name:"Korttitel",layout:"Layout",layout_default:"Standard",layout_minimal:"Minimal",height:"Højde",show_feels_like:"Føles som",show_wind:"Vind",show_wind_gust:"Vindstød",show_wind_direction:"Retning",show_humidity:"Luftfugtighed",show_min_temp:"Min. temperatur",show_hourly_forecast:"Timeprognose",hourly_forecast_hours:"Timer",show_daily_forecast:"Dagsprognose",daily_forecast_days:"Dage",show_sunrise_sunset:"Solopgang og solnedgang",sunrise_entity:"Solopgangssensor",sunset_entity:"Solnedgangssensor",show_clock:"Ur",clock_position:"Placering",clock_position_top:"Øverst",clock_position_details:"Detaljerække",clock_format:"Format",clock_format_12h:"12-timer (FM/EM)",clock_format_24h:"24-timer",overlay_opacity:"Mørkning",language:"Sprog",language_auto:"Automatisk",language_en:"Engelsk",language_ru:"Russisk",language_de:"Tysk",language_nl:"Nederlandsk",language_fr:"Fransk",language_es:"Spansk",language_it:"Italiensk",language_sk:"Slovakisk",language_hu:"Ungarsk",wind_speed_unit:"Enhed for vindhastighed",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/t",animation_quality:"Animationskvalitet",animation_quality_helper:"Sænk den på vægtablets og langsomme enheder",animation_quality_high:"Høj",animation_quality_low:"Lav (20 FPS, til langsomme enheder)",animation_quality_medium:"Middel (30 FPS, færre partikler)",aqi_entity:"Luftkvalitetssensor (AQI)",border_radius:"Hjørneradius",daily_forecast_title:"Titel",daily_forecast_title_helper:"Tom = standardtitel",dew_point_entity:"Dugpunktssensor",feels_like_entity:"Sensor for føles som",hourly_forecast_title:"Titel",hourly_forecast_title_helper:"Tom = standardtitel",humidity_entity:"Luftfugtighedssensor",overlay_opacity_helper:"0–1, gør himlen mørkere, så teksten er let at læse",precipitation_entity:"Nedbørssensor",pressure_entity:"Lufttrykssensor",section_appearance:"Udseende",section_clock:"Sprog, ur og dato",section_details:"Detaljer",section_forecast:"Prognose",section_sensors:"Sensorer (valgfrit)",sensors:"Sensorer (valgfrit, erstatter vejrenheden)",show_animations:"Animationer",show_aurora:"Nordlys",show_aurora_helper:"I klare nætter, moderne grafik",show_date:"Dato",show_dew_point:"Dugpunkt",show_precipitation_outlook:"Hvornår regnen starter/stopper",show_precipitation_outlook_helper:"Ud fra timeprognosen for de næste 12 timer",show_pressure:"Lufttryk",show_raindrops:"Regndråber på ruden",show_raindrops_helper:"I regnvejr, moderne grafik",show_temperature_bars:"Temperaturbjælker",show_uv_index:"UV-indeks",show_wind_effects:"Vindstød og blade",show_wind_effects_helper:"I blæsende vejr eller over 8 m/s",sun_position_x:"Sol/måne-position, vandret",sun_position_x_helper:"Lad stå tomt for at følge tidspunktet på dagen",sun_position_y:"Sol/måne-position, lodret",sun_position_y_helper:"Lad stå tomt for at følge tidspunktet på dagen",temperature_entity:"Temperatursensor",text_color:"Tekstfarve",text_color_helper:"Enhver CSS-farve, f.eks. #1a1a2e eller var(--primary-text-color)",text_shadow:"Tekstskygge",uv_index_entity:"UV-indekssensor",visual_style:"Grafik",visual_style_classic:"Klassisk",visual_style_modern:"Moderne",wind_bearing_entity:"Vindretningssensor",wind_gust_entity:"Vindstødssensor",wind_speed_entity:"Vindhastighedssensor",language_da:"Dansk",language_nb:"Norsk (bokmål)",language_pl:"Polsk",language_pt:"Portugisisk",language_sl:"Slovensk",language_sr:"Serbisk",language_tr:"Tyrkisk",language_zh:"Kinesisk",hourly_forecast_hours_helper:"Ingen øvre grænse: f.eks. 72 for tre dage, eller mere for at vise hele udbyderens prognose"}};var oa={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",windy:"Windig","windy-variant":"Windig, bewölkt",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",forecast_title_hourly:"Stündliche Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",pressure:"Luftdruck",uv_index:"UV-Index",dew_point:"Taupunkt",aqi:"Luftqualitätsindex",precipitation_outlook:{start:"{kind} gegen {time} erwartet",soon:"{kind} in Kürze erwartet",stop:"{kind} endet gegen {time}",continues:"{kind} noch mindestens {hours} Std.",rain:"Regen",snow:"Schnee",sleet:"Schneeregen",hail:"Hagel",storm:"Gewitter"},editor:{entity:"Wetter-Entität",name:"Kartentitel",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Höhe",show_feels_like:"Gefühlt",show_wind:"Wind",show_wind_gust:"Böen",show_wind_direction:"Richtung",show_humidity:"Luftfeuchtigkeit",show_min_temp:"Tiefsttemperatur",show_hourly_forecast:"Stündliche Vorhersage",hourly_forecast_hours:"Stunden",show_daily_forecast:"Tägliche Vorhersage",daily_forecast_days:"Tage",show_sunrise_sunset:"Sonnenauf- und -untergang",sunrise_entity:"Sonnenaufgangssensor",sunset_entity:"Sonnenuntergangssensor",show_clock:"Uhr",clock_position:"Position",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Format",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Abdunklung",text_shadow:"Textschatten",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",language_it:"Italienisch",language_sk:"Slowakisch",language_hu:"Ungarisch",language_pt:"Portugiesisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animationen",animation_quality:"Animationsqualität",animation_quality_helper:"Für Wandtablets und langsame Geräte verringern",animation_quality_high:"Hoch",animation_quality_low:"Niedrig (20 FPS, für langsame Geräte)",animation_quality_medium:"Mittel (30 FPS, weniger Partikel)",aqi_entity:"Luftqualitätssensor (AQI)",border_radius:"Eckenradius",daily_forecast_title:"Titel",daily_forecast_title_helper:"Leer = Standardtitel",dew_point_entity:"Taupunktsensor",feels_like_entity:"Sensor „Gefühlt“",hourly_forecast_title:"Titel",hourly_forecast_title_helper:"Leer = Standardtitel",humidity_entity:"Luftfeuchtigkeitssensor",overlay_opacity_helper:"0–1, dunkelt den Himmel ab, damit der Text lesbar bleibt",precipitation_entity:"Niederschlagssensor",pressure_entity:"Luftdrucksensor",section_appearance:"Darstellung",section_clock:"Sprache, Uhr und Datum",section_details:"Details",section_forecast:"Vorhersage",section_sensors:"Sensoren (optional)",sensors:"Sensoren (optional, ersetzen die Wetter-Entität)",show_aurora:"Polarlicht",show_aurora_helper:"In klaren Nächten, moderne Grafik",show_date:"Datum",show_dew_point:"Taupunkt",show_precipitation_outlook:"Wann Regen beginnt/endet",show_precipitation_outlook_helper:"Aus der stündlichen Vorhersage für die nächsten 12 Stunden",show_pressure:"Luftdruck",show_raindrops:"Regentropfen auf der Scheibe",show_raindrops_helper:"Bei Regen, moderne Grafik",show_temperature_bars:"Temperaturbalken",show_uv_index:"UV-Index",show_wind_effects:"Windböen und Blätter",show_wind_effects_helper:"Bei windigem Wetter oder über 8 m/s",sun_position_x:"Sonne/Mond-Position, horizontal",sun_position_x_helper:"Leer lassen, um der Tageszeit zu folgen",sun_position_y:"Sonne/Mond-Position, vertikal",sun_position_y_helper:"Leer lassen, um der Tageszeit zu folgen",temperature_entity:"Temperatursensor",text_color:"Textfarbe",text_color_helper:"Jede CSS-Farbe, z. B. #1a1a2e oder var(--primary-text-color)",uv_index_entity:"UV-Index-Sensor",visual_style:"Grafik",visual_style_classic:"Klassisch",visual_style_modern:"Modern",wind_bearing_entity:"Windrichtungssensor",wind_gust_entity:"Windböensensor",wind_speed_entity:"Windgeschwindigkeitssensor",language_da:"Dänisch",language_nb:"Norwegisch (Bokmål)",language_pl:"Polnisch",language_sl:"Slowenisch",language_sr:"Serbisch",language_tr:"Türkisch",language_zh:"Chinesisch",hourly_forecast_hours_helper:"Ohne Obergrenze: z. B. 72 für drei Tage oder mehr, um die ganze Vorhersage des Anbieters zu zeigen"}};var aa={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",windy:"Windy","windy-variant":"Windy, cloudy",feels_like:"Feels like",forecast_title:"Today's Forecast",forecast_title_hourly:"Hourly Forecast",daily_forecast_title:"Daily Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",pressure:"Pressure",uv_index:"UV index",dew_point:"Dew point",aqi:"Air quality index",precipitation_outlook:{start:"{kind} expected around {time}",soon:"{kind} expected soon",stop:"{kind} ending around {time}",continues:"{kind} for at least {hours} more hours",rain:"Rain",snow:"Snow",sleet:"Sleet",hail:"Hail",storm:"Thunderstorms"},editor:{entity:"Weather Entity",name:"Card Title",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",visual_style:"Graphics",visual_style_modern:"Modern",visual_style_classic:"Classic",animation_quality:"Animation quality",animation_quality_high:"High",animation_quality_medium:"Medium (30 FPS, fewer particles)",animation_quality_low:"Low (20 FPS, for slow devices)",height:"Height",show_feels_like:"Feels like",show_wind:"Wind",show_wind_gust:"Gusts",show_wind_direction:"Direction",show_humidity:"Humidity",show_min_temp:"Min temperature",show_hourly_forecast:"Hourly forecast",hourly_forecast_hours:"Hours",hourly_forecast_title:"Title",show_daily_forecast:"Daily forecast",daily_forecast_days:"Days",daily_forecast_title:"Title",show_sunrise_sunset:"Sunrise and sunset",sunrise_entity:"Sunrise sensor",sunset_entity:"Sunset sensor",sensors:"Sensors (optional, override the weather entity)",temperature_entity:"Temperature Sensor",feels_like_entity:"Feels Like Sensor",humidity_entity:"Humidity Sensor",wind_speed_entity:"Wind Speed Sensor",wind_gust_entity:"Wind Gust Sensor",wind_bearing_entity:"Wind Bearing Sensor",precipitation_entity:"Precipitation Sensor",show_pressure:"Pressure",show_uv_index:"UV index",show_dew_point:"Dew point",show_precipitation_outlook:"When rain starts/stops",show_temperature_bars:"Temperature bars",pressure_entity:"Pressure Sensor",uv_index_entity:"UV Index Sensor",dew_point_entity:"Dew Point Sensor",aqi_entity:"Air Quality (AQI) Sensor",show_clock:"Clock",show_date:"Date",clock_position:"Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Darkening",text_shadow:"Text shadow",text_color:"Text color",border_radius:"Corner radius",sun_position_x:"Sun/moon position, horizontal",sun_position_y:"Sun/moon position, vertical",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",language_it:"Italian",language_sk:"Slovak",language_hu:"Hungarian",language_pt:"Portuguese",language_da:"Danish",language_sr:"Serbian",language_pl:"Polish",language_zh:"Chinese",language_tr:"Turkish",language_nb:"Norwegian (Bokmål)",language_sl:"Slovenian",wind_speed_unit:"Wind speed unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animations",show_aurora:"Northern lights",section_appearance:"Appearance",section_details:"Details",section_forecast:"Forecast",section_clock:"Language, clock and date",section_sensors:"Sensors (optional)",animation_quality_helper:"Lower it for wall tablets and slow devices",show_aurora_helper:"On clear nights, Modern graphics",overlay_opacity_helper:"0–1, darkens the sky so text stays readable",text_color_helper:"Any CSS color, e.g. #1a1a2e or var(--primary-text-color)",sun_position_x_helper:"Leave empty to follow the time of day",sun_position_y_helper:"Leave empty to follow the time of day",show_precipitation_outlook_helper:"From the hourly forecast for the next 12 hours",hourly_forecast_title_helper:"Empty = default title",daily_forecast_title_helper:"Empty = default title",show_raindrops:"Raindrops on the glass",show_wind_effects:"Wind gusts and leaves",show_raindrops_helper:"In rain, Modern graphics",show_wind_effects_helper:"In windy weather or above 8 m/s",hourly_forecast_hours_helper:"No upper limit: e.g. 72 for three days, or more to show everything the provider forecasts"}};var na={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",windy:"Ventoso","windy-variant":"Ventoso, nublado",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",forecast_title_hourly:"Pronóstico por horas",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",pressure:"Presión",uv_index:"Índice UV",dew_point:"Punto de rocío",aqi:"Índice de calidad del aire",precipitation_outlook:{start:"{kind}: empieza hacia {time}",soon:"{kind}: empieza pronto",stop:"{kind}: termina hacia {time}",continues:"{kind}: al menos {hours} h más",rain:"Lluvia",snow:"Nieve",sleet:"Aguanieve",hail:"Granizo",storm:"Tormentas"},editor:{entity:"Entidad de clima",name:"Título de la tarjeta",layout:"Diseño",layout_default:"Default",layout_minimal:"Minimal",height:"Altura",show_feels_like:"Sensación térmica",show_wind:"Viento",show_wind_gust:"Ráfagas",show_wind_direction:"Dirección",show_humidity:"Humedad",show_min_temp:"Temperatura mínima",show_hourly_forecast:"Pronóstico por horas",hourly_forecast_hours:"Horas",show_daily_forecast:"Pronóstico diario",daily_forecast_days:"Días",show_sunrise_sunset:"Amanecer y atardecer",sunrise_entity:"Sensor de amanecer",sunset_entity:"Sensor de atardecer",show_clock:"Reloj",clock_position:"Posición",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Oscurecimiento",text_shadow:"Sombra del texto",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",language_pt:"Portugués",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animaciones",animation_quality:"Calidad de animación",animation_quality_helper:"Redúcela en tabletas de pared y dispositivos lentos",animation_quality_high:"Alta",animation_quality_low:"Baja (20 FPS, para dispositivos lentos)",animation_quality_medium:"Media (30 FPS, menos partículas)",aqi_entity:"Sensor de calidad del aire (AQI)",border_radius:"Radio de las esquinas",daily_forecast_title:"Título",daily_forecast_title_helper:"Vacío = título predeterminado",dew_point_entity:"Sensor de punto de rocío",feels_like_entity:"Sensor de sensación térmica",hourly_forecast_title:"Título",hourly_forecast_title_helper:"Vacío = título predeterminado",humidity_entity:"Sensor de humedad",overlay_opacity_helper:"0–1, oscurece el cielo para que el texto se lea bien",precipitation_entity:"Sensor de precipitación",pressure_entity:"Sensor de presión",section_appearance:"Apariencia",section_clock:"Idioma, reloj y fecha",section_details:"Detalles",section_forecast:"Pronóstico",section_sensors:"Sensores (opcional)",sensors:"Sensores (opcional, sustituyen a la entidad meteorológica)",show_aurora:"Aurora boreal",show_aurora_helper:"En noches despejadas, gráficos modernos",show_date:"Fecha",show_dew_point:"Punto de rocío",show_precipitation_outlook:"Cuándo empieza/termina la lluvia",show_precipitation_outlook_helper:"Según el pronóstico por horas de las próximas 12 horas",show_pressure:"Presión",show_raindrops:"Gotas de lluvia en el cristal",show_raindrops_helper:"Con lluvia, gráficos modernos",show_temperature_bars:"Barras de temperatura",show_uv_index:"Índice UV",show_wind_effects:"Ráfagas y hojas",show_wind_effects_helper:"Con viento o por encima de 8 m/s",sun_position_x:"Posición del sol/luna, horizontal",sun_position_x_helper:"Déjalo vacío para seguir la hora del día",sun_position_y:"Posición del sol/luna, vertical",sun_position_y_helper:"Déjalo vacío para seguir la hora del día",temperature_entity:"Sensor de temperatura",text_color:"Color del texto",text_color_helper:"Cualquier color CSS, p. ej. #1a1a2e o var(--primary-text-color)",uv_index_entity:"Sensor de índice UV",visual_style:"Gráficos",visual_style_classic:"Clásico",visual_style_modern:"Moderno",wind_bearing_entity:"Sensor de dirección del viento",wind_gust_entity:"Sensor de ráfagas",wind_speed_entity:"Sensor de velocidad del viento",language_da:"Danés",language_nb:"Noruego (bokmål)",language_pl:"Polaco",language_sl:"Esloveno",language_sr:"Serbio",language_tr:"Turco",language_zh:"Chino",hourly_forecast_hours_helper:"Sin límite: p. ej. 72 para tres días, o más para mostrar todo el pronóstico del proveedor"}};var _a={sunny:"Päikeseline",clear:"Pilvitu",overcast:"Lauspilves",cloudy:"Pilves",partlycloudy:"Vahelduv pilvisus",rainy:"Vihmane",rain:"Vihm",snowy:"Lumine",snow:"Lumi",foggy:"Udune",fog:"Udu",windy:"Tuuline","windy-variant":"Tuuline, pilves",lightning:"Äike","lightning-rainy":"Äikesevihm",pouring:"Paduvihm","snowy-rainy":"Lörts",hail:"Rahe","clear-night":"Selge öö",feels_like:"Tundub nagu",forecast_title:"Tänane prognoos",forecast_title_hourly:"Tunniprognoos",daily_forecast_title:"Päevaprognoos",no_data:"Andmed puuduvad",forecast_unavailable:"Prognoos pole saadaval",weather:"Ilm",language:"Keel",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"sõlme",wind_unit_fts:"ft/s",show_clock:"Näita praegust kellaaega",am:"AM",pm:"PM",pressure:"Õhurõhk",uv_index:"UV-indeks",dew_point:"Kastepunkt",aqi:"Õhukvaliteedi indeks",precipitation_outlook:{start:"{kind}: algab umbes {time}",soon:"{kind}: algab peagi",stop:"{kind}: lõpeb umbes {time}",continues:"{kind}: veel vähemalt {hours} h",rain:"Vihm",snow:"Lumi",sleet:"Lörts",hail:"Rahe",storm:"Äike"},editor:{entity:"Ilmaolem",name:"Kaardi pealkiri",layout:"Paigutus",layout_default:"Vaikimisi",layout_minimal:"Minimaalne",visual_style:"Graafika",visual_style_modern:"Moodne",visual_style_classic:"Klassikaline",animation_quality:"Animatsiooni kvaliteet",animation_quality_high:"Kõrge",animation_quality_medium:"Keskmine (30 FPS, vähem osakesi)",animation_quality_low:"Madal (20 FPS, aeglastele seadmetele)",height:"Kõrgus",show_feels_like:"Tundub nagu",show_wind:"Tuul",show_wind_gust:"Puhangud",show_wind_direction:"Suund",show_humidity:"Niiskus",show_min_temp:"Miinimumtemperatuur",show_hourly_forecast:"Tunniprognoos",hourly_forecast_hours:"Tunnid",hourly_forecast_title:"Pealkiri",show_daily_forecast:"Päevaprognoos",daily_forecast_days:"Päevad",daily_forecast_title:"Pealkiri",show_sunrise_sunset:"Päikesetõus ja -loojang",sunrise_entity:"Päikesetõusu andur",sunset_entity:"Päikeseloojangu andur",sensors:"Andurid (valikuline, asendavad ilmaolemit)",temperature_entity:"Temperatuuriandur",feels_like_entity:"Tajutava temperatuuri andur",humidity_entity:"Niiskusandur",wind_speed_entity:"Tuulekiiruse andur",wind_gust_entity:"Tuulepuhangute andur",wind_bearing_entity:"Tuulesuuna andur",precipitation_entity:"Sademeteandur",show_pressure:"Õhurõhk",show_uv_index:"UV-indeks",show_dew_point:"Kastepunkt",show_precipitation_outlook:"Millal vihm algab/lõpeb",show_temperature_bars:"Temperatuuriribad",pressure_entity:"Õhurõhu andur",uv_index_entity:"UV-indeksi andur",dew_point_entity:"Kastepunkti andur",aqi_entity:"Õhukvaliteedi andur (AQI)",show_clock:"Kell",show_date:"Kuupäev",clock_position:"Asukoht",clock_position_top:"Üleval",clock_position_details:"Üksikasjad",clock_format:"Vorming",clock_format_12h:"12-tunnine (AM/PM)",clock_format_24h:"24-tunnine",overlay_opacity:"Tumendus",text_shadow:"Teksti vari",text_color:"Teksti värv",border_radius:"Nurkade ümarus",sun_position_x:"Päikese/kuu asukoht, horisontaalne",sun_position_y:"Päikese/kuu asukoht, vertikaalne",language:"Keel",language_auto:"Automaatne",language_en:"Inglise",language_ru:"Vene",language_de:"Saksa",language_nl:"Hollandi",language_fr:"Prantsuse",language_es:"Hispaania",language_it:"Itaalia",language_sk:"Slovaki",language_hu:"Ungari",language_pt:"Portugali",language_da:"Taani",language_sr:"Serbia",language_pl:"Poola",language_zh:"Hiina",language_tr:"Türgi",language_nb:"Norra (bokmål)",language_sl:"Sloveeni",wind_speed_unit:"Tuulekiiruse ühik",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animatsioonid",show_aurora:"Virmalised",section_appearance:"Välimus",section_details:"Üksikasjad",section_forecast:"Prognoos",section_clock:"Keel, kell ja kuupäev",section_sensors:"Andurid (valikuline)",animation_quality_helper:"Vähenda seinatahvelarvutitel ja aeglastel seadmetel",show_aurora_helper:"Selgetel öödel, moodne graafika",overlay_opacity_helper:"0–1, tumendab taevast, et tekst oleks loetav",text_color_helper:"Mis tahes CSS-värv, nt #1a1a2e või var(--primary-text-color)",sun_position_x_helper:"Jäta tühjaks, et järgida kellaaega",sun_position_y_helper:"Jäta tühjaks, et järgida kellaaega",show_precipitation_outlook_helper:"Järgmise 12 tunni tunniprognoosi põhjal",hourly_forecast_title_helper:"Tühi = vaikepealkiri",daily_forecast_title_helper:"Tühi = vaikepealkiri",show_raindrops:"Vihmapiisad klaasil",show_wind_effects:"Tuulepuhangud ja lehed",show_raindrops_helper:"Vihmaga, moodne graafika",show_wind_effects_helper:"Tuulise ilmaga või üle 8 m/s",hourly_forecast_hours_helper:"Ülempiirita: nt 72 kolme päeva jaoks või rohkem, et näidata pakkuja kogu prognoosi"}};var ia={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",windy:"Venteux","windy-variant":"Venteux, nuageux",feels_like:"Ressenti",forecast_title:"Prévisions du jour",forecast_title_hourly:"Prévisions horaires",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",pressure:"Pression",uv_index:"Indice UV",dew_point:"Point de rosée",aqi:"Indice de qualité de l'air",precipitation_outlook:{start:"{kind} : début vers {time}",soon:"{kind} : début imminent",stop:"{kind} : fin vers {time}",continues:"{kind} : encore au moins {hours} h",rain:"Pluie",snow:"Neige",sleet:"Neige fondue",hail:"Grêle",storm:"Orages"},editor:{entity:"Entité météo",name:"Titre de la carte",layout:"Mise en page",layout_default:"Default",layout_minimal:"Minimal",height:"Hauteur",show_feels_like:"Ressenti",show_wind:"Vent",show_wind_gust:"Rafales",show_wind_direction:"Direction",show_humidity:"Humidité",show_min_temp:"Température min.",show_hourly_forecast:"Prévisions horaires",hourly_forecast_hours:"Heures",show_daily_forecast:"Prévisions quotidiennes",daily_forecast_days:"Jours",show_sunrise_sunset:"Lever et coucher du soleil",sunrise_entity:"Capteur de lever du soleil",sunset_entity:"Capteur de coucher du soleil",show_clock:"Horloge",clock_position:"Position",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Assombrissement",text_shadow:"Ombre du texte",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",language_it:"Italien",language_sk:"Slovaque",language_hu:"Hongrois",language_pt:"Portugais",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animations",animation_quality:"Qualité d'animation",animation_quality_helper:"À réduire pour les tablettes murales et les appareils lents",animation_quality_high:"Élevée",animation_quality_low:"Faible (20 FPS, pour appareils lents)",animation_quality_medium:"Moyenne (30 FPS, moins de particules)",aqi_entity:"Capteur de qualité de l'air (AQI)",border_radius:"Arrondi des coins",daily_forecast_title:"Titre",daily_forecast_title_helper:"Vide = titre par défaut",dew_point_entity:"Capteur de point de rosée",feels_like_entity:"Capteur de température ressentie",hourly_forecast_title:"Titre",hourly_forecast_title_helper:"Vide = titre par défaut",humidity_entity:"Capteur d'humidité",overlay_opacity_helper:"0–1, assombrit le ciel pour garder le texte lisible",precipitation_entity:"Capteur de précipitations",pressure_entity:"Capteur de pression",section_appearance:"Apparence",section_clock:"Langue, horloge et date",section_details:"Détails",section_forecast:"Prévisions",section_sensors:"Capteurs (facultatif)",sensors:"Capteurs (facultatif, remplacent l'entité météo)",show_aurora:"Aurore boréale",show_aurora_helper:"Par nuit claire, graphismes modernes",show_date:"Date",show_dew_point:"Point de rosée",show_precipitation_outlook:"Début/fin de la pluie",show_precipitation_outlook_helper:"D'après la prévision horaire des 12 prochaines heures",show_pressure:"Pression",show_raindrops:"Gouttes de pluie sur la vitre",show_raindrops_helper:"Sous la pluie, graphismes modernes",show_temperature_bars:"Barres de température",show_uv_index:"Indice UV",show_wind_effects:"Rafales et feuilles",show_wind_effects_helper:"Par temps venteux ou au-delà de 8 m/s",sun_position_x:"Position du soleil/de la lune, horizontale",sun_position_x_helper:"Laisser vide pour suivre l'heure de la journée",sun_position_y:"Position du soleil/de la lune, verticale",sun_position_y_helper:"Laisser vide pour suivre l'heure de la journée",temperature_entity:"Capteur de température",text_color:"Couleur du texte",text_color_helper:"Toute couleur CSS, p. ex. #1a1a2e ou var(--primary-text-color)",uv_index_entity:"Capteur d'indice UV",visual_style:"Graphismes",visual_style_classic:"Classique",visual_style_modern:"Moderne",wind_bearing_entity:"Capteur de direction du vent",wind_gust_entity:"Capteur de rafales",wind_speed_entity:"Capteur de vitesse du vent",language_da:"Danois",language_nb:"Norvégien (bokmål)",language_pl:"Polonais",language_sl:"Slovène",language_sr:"Serbe",language_tr:"Turc",language_zh:"Chinois",hourly_forecast_hours_helper:"Sans limite : p. ex. 72 pour trois jours, ou plus pour afficher toute la prévision du fournisseur"}};var ra={sunny:"Napos",clear:"Derült",overcast:"Borult",cloudy:"Felhős",partlycloudy:"Részben felhős",rainy:"Esős",rain:"Eső",snowy:"Havas",snow:"Hó",foggy:"Ködös",fog:"Köd",lightning:"Villámlás","lightning-rainy":"Zivatar",pouring:"Heves eső","snowy-rainy":"Havas eső",hail:"Jégeső","clear-night":"Derült éj",windy:"Szeles","windy-variant":"Szeles, felhős",feels_like:"Hőérzet",forecast_title:"Mai előrejelzés",forecast_title_hourly:"Óránkénti előrejelzés",daily_forecast_title:"Napi előrejelzés",no_data:"Nincs adat",forecast_unavailable:"Előrejelzés nem elérhető",weather:"Időjárás",language:"Nyelv",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"csomó",wind_unit_fts:"ft/s",show_clock:"Aktuális idő mutatása",am:"DE",pm:"DU",pressure:"Légnyomás",uv_index:"UV-index",dew_point:"Harmatpont",aqi:"Levegőminőségi index",precipitation_outlook:{start:"{kind} várható {time} körül",soon:"{kind} hamarosan várható",stop:"{kind} {time} körül eláll",continues:"{kind} még legalább {hours} órán át",rain:"Eső",snow:"Hó",sleet:"Havas eső",hail:"Jégeső",storm:"Zivatar"},editor:{entity:"Időjárás entitás",name:"Kártya címe",layout:"Elrendezés",layout_default:"Default",layout_minimal:"Minimal",height:"Magasság",show_feels_like:"Hőérzet",show_wind:"Szél",show_wind_gust:"Széllökések",show_wind_direction:"Irány",show_humidity:"Páratartalom",show_min_temp:"Minimum hőmérséklet",show_hourly_forecast:"Óránkénti előrejelzés",hourly_forecast_hours:"Órák",show_daily_forecast:"Napi előrejelzés",daily_forecast_days:"Napok",show_sunrise_sunset:"Napkelte és napnyugta",sunrise_entity:"Napkelte-érzékelő",sunset_entity:"Napnyugta-érzékelő",show_clock:"Óra",clock_position:"Helyzet",clock_position_top:"Felül",clock_position_details:"Részletek",clock_format:"Formátum",clock_format_12h:"12 órás (DE/DU)",clock_format_24h:"24 órás",overlay_opacity:"Sötétítés",text_shadow:"Szövegárnyék",language:"Nyelv",language_auto:"Automatikus",language_en:"Angol",language_ru:"Orosz",language_de:"Német",language_nl:"Holland",language_fr:"Francia",language_es:"Spanyol",language_it:"Olasz",language_hu:"Magyar",language_sk:"Szlovák",language_pt:"Portugál",wind_speed_unit:"Szélsebesség mértékegysége",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animációk",animation_quality:"Animáció minősége",animation_quality_helper:"Fali tableteken és lassú eszközökön csökkentse",animation_quality_high:"Magas",animation_quality_low:"Alacsony (20 FPS, lassú eszközökhöz)",animation_quality_medium:"Közepes (30 FPS, kevesebb részecske)",aqi_entity:"Levegőminőség-érzékelő (AQI)",border_radius:"Sarkok lekerekítése",daily_forecast_title:"Cím",daily_forecast_title_helper:"Üres = alapértelmezett cím",dew_point_entity:"Harmatpont-érzékelő",feels_like_entity:"Hőérzet-érzékelő",hourly_forecast_title:"Cím",hourly_forecast_title_helper:"Üres = alapértelmezett cím",humidity_entity:"Páratartalom-érzékelő",overlay_opacity_helper:"0–1, sötétíti az eget, hogy a szöveg olvasható maradjon",precipitation_entity:"Csapadékérzékelő",pressure_entity:"Légnyomás-érzékelő",section_appearance:"Megjelenés",section_clock:"Nyelv, óra és dátum",section_details:"Részletek",section_forecast:"Előrejelzés",section_sensors:"Érzékelők (opcionális)",sensors:"Érzékelők (opcionális, felülírják az időjárás-entitást)",show_aurora:"Sarki fény",show_aurora_helper:"Derült éjszakákon, modern grafika",show_date:"Dátum",show_dew_point:"Harmatpont",show_precipitation_outlook:"Mikor kezd/áll el az eső",show_precipitation_outlook_helper:"Az óránkénti előrejelzésből, a következő 12 órára",show_pressure:"Légnyomás",show_raindrops:"Esőcseppek az üvegen",show_raindrops_helper:"Esőben, modern grafika",show_temperature_bars:"Hőmérséklet-sávok",show_uv_index:"UV-index",show_wind_effects:"Széllökések és levelek",show_wind_effects_helper:"Szeles időben vagy 8 m/s felett",sun_position_x:"Nap/Hold helyzete, vízszintesen",sun_position_x_helper:"Hagyja üresen, hogy a napszakot kövesse",sun_position_y:"Nap/Hold helyzete, függőlegesen",sun_position_y_helper:"Hagyja üresen, hogy a napszakot kövesse",temperature_entity:"Hőmérséklet-érzékelő",text_color:"Szövegszín",text_color_helper:"Bármilyen CSS-szín, pl. #1a1a2e vagy var(--primary-text-color)",uv_index_entity:"UV-index-érzékelő",visual_style:"Grafika",visual_style_classic:"Klasszikus",visual_style_modern:"Modern",wind_bearing_entity:"Szélirány-érzékelő",wind_gust_entity:"Széllökés-érzékelő",wind_speed_entity:"Szélsebesség-érzékelő",language_da:"Dán",language_nb:"Norvég (bokmål)",language_pl:"Lengyel",language_sl:"Szlovén",language_sr:"Szerb",language_tr:"Török",language_zh:"Kínai",hourly_forecast_hours_helper:"Nincs felső határ: pl. 72 három napra, vagy több a szolgáltató teljes előrejelzéséhez"}};var la={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",windy:"Ventoso","windy-variant":"Ventoso, nuvoloso",feels_like:"Percepita",forecast_title:"Previsioni di oggi",forecast_title_hourly:"Previsioni orarie",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",pressure:"Pressione",uv_index:"Indice UV",dew_point:"Punto di rugiada",aqi:"Indice di qualità dell'aria",precipitation_outlook:{start:"{kind}: inizio verso {time}",soon:"{kind}: inizio a breve",stop:"{kind}: fine verso {time}",continues:"{kind}: ancora almeno {hours} h",rain:"Pioggia",snow:"Neve",sleet:"Nevischio",hail:"Grandine",storm:"Temporali"},editor:{entity:"Entità meteo",name:"Titolo della scheda",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Altezza",show_feels_like:"Percepita",show_wind:"Vento",show_wind_gust:"Raffiche",show_wind_direction:"Direzione",show_humidity:"Umidità",show_min_temp:"Temperatura minima",show_hourly_forecast:"Previsioni orarie",hourly_forecast_hours:"Ore",show_daily_forecast:"Previsioni giornaliere",daily_forecast_days:"Giorni",show_sunrise_sunset:"Alba e tramonto",sunrise_entity:"Sensore alba",sunset_entity:"Sensore tramonto",show_clock:"Orologio",clock_position:"Posizione",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Oscuramento",text_shadow:"Ombra del testo",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",language_it:"Italiano",language_sk:"Slovacco",language_hu:"Ungherese",language_pt:"Portoghese",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animazioni",animation_quality:"Qualità animazione",animation_quality_helper:"Riducila su tablet a parete e dispositivi lenti",animation_quality_high:"Alta",animation_quality_low:"Bassa (20 FPS, per dispositivi lenti)",animation_quality_medium:"Media (30 FPS, meno particelle)",aqi_entity:"Sensore qualità dell'aria (AQI)",border_radius:"Raggio degli angoli",daily_forecast_title:"Titolo",daily_forecast_title_helper:"Vuoto = titolo predefinito",dew_point_entity:"Sensore punto di rugiada",feels_like_entity:"Sensore temperatura percepita",hourly_forecast_title:"Titolo",hourly_forecast_title_helper:"Vuoto = titolo predefinito",humidity_entity:"Sensore umidità",overlay_opacity_helper:"0–1, scurisce il cielo per mantenere il testo leggibile",precipitation_entity:"Sensore precipitazioni",pressure_entity:"Sensore pressione",section_appearance:"Aspetto",section_clock:"Lingua, orologio e data",section_details:"Dettagli",section_forecast:"Previsioni",section_sensors:"Sensori (facoltativi)",sensors:"Sensori (facoltativi, sostituiscono l'entità meteo)",show_aurora:"Aurora boreale",show_aurora_helper:"Nelle notti serene, grafica moderna",show_date:"Data",show_dew_point:"Punto di rugiada",show_precipitation_outlook:"Quando inizia/finisce la pioggia",show_precipitation_outlook_helper:"Dalle previsioni orarie delle prossime 12 ore",show_pressure:"Pressione",show_raindrops:"Gocce di pioggia sul vetro",show_raindrops_helper:"Con la pioggia, grafica moderna",show_temperature_bars:"Barre della temperatura",show_uv_index:"Indice UV",show_wind_effects:"Raffiche e foglie",show_wind_effects_helper:"Con tempo ventoso o oltre 8 m/s",sun_position_x:"Posizione sole/luna, orizzontale",sun_position_x_helper:"Lascia vuoto per seguire l'ora del giorno",sun_position_y:"Posizione sole/luna, verticale",sun_position_y_helper:"Lascia vuoto per seguire l'ora del giorno",temperature_entity:"Sensore temperatura",text_color:"Colore del testo",text_color_helper:"Qualsiasi colore CSS, ad es. #1a1a2e o var(--primary-text-color)",uv_index_entity:"Sensore indice UV",visual_style:"Grafica",visual_style_classic:"Classica",visual_style_modern:"Moderna",wind_bearing_entity:"Sensore direzione del vento",wind_gust_entity:"Sensore raffiche",wind_speed_entity:"Sensore velocità del vento",language_da:"Danese",language_nb:"Norvegese (bokmål)",language_pl:"Polacco",language_sl:"Sloveno",language_sr:"Serbo",language_tr:"Turco",language_zh:"Cinese",hourly_forecast_hours_helper:"Nessun limite: ad es. 72 per tre giorni, o di più per mostrare tutte le previsioni del fornitore"}};var sa={sunny:"Sol",clear:"Klart",overcast:"Overskyet",cloudy:"Skyet",partlycloudy:"Delvis skyet",rainy:"Regn",rain:"Regn",snowy:"Snø",snow:"Snø",foggy:"Tåke",fog:"Tåke",lightning:"Lyn","lightning-rainy":"Tordenvær",pouring:"Kraftig regn","snowy-rainy":"Sludd",hail:"Hagl","clear-night":"Klar natt",windy:"Vindfullt","windy-variant":"Vindfullt, skyet",feels_like:"Føles som",forecast_title:"Dagens værvarsel",forecast_title_hourly:"Timevarsel",daily_forecast_title:"Daglig værvarsel",no_data:"Ingen data",forecast_unavailable:"Værvarsel utilgjengelig",weather:"Vær",language:"Språk",wind_unit_kmh:"km/t",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knop",wind_unit_fts:"ft/s",show_clock:"Vis gjeldende klokkeslett",am:"AM",pm:"PM",pressure:"Lufttrykk",uv_index:"UV-indeks",dew_point:"Duggpunkt",aqi:"Luftkvalitetsindeks",precipitation_outlook:{start:"{kind} ventes rundt {time}",soon:"{kind} ventes snart",stop:"{kind} slutter rundt {time}",continues:"{kind} i minst {hours} timer til",rain:"Regn",snow:"Snø",sleet:"Sludd",hail:"Hagl",storm:"Tordenvær"},editor:{entity:"Værentitet",name:"Korttittel",layout:"Oppsett",layout_default:"Standard",layout_minimal:"Minimal",height:"Høyde",show_feels_like:"Føles som",show_wind:"Vind",show_wind_gust:"Vindkast",show_wind_direction:"Retning",show_humidity:"Luftfuktighet",show_min_temp:"Min. temperatur",show_hourly_forecast:"Timevarsel",hourly_forecast_hours:"Timer",show_daily_forecast:"Døgnvarsel",daily_forecast_days:"Dager",show_sunrise_sunset:"Soloppgang og solnedgang",sunrise_entity:"Soloppgangssensor",sunset_entity:"Solnedgangssensor",show_clock:"Klokke",clock_position:"Plassering",clock_position_top:"Øverst",clock_position_details:"Detaljer",clock_format:"Format",clock_format_12h:"12-timers (AM/PM)",clock_format_24h:"24-timers",overlay_opacity:"Mørklegging",text_shadow:"Tekstskygge",language:"Språk",language_auto:"Automatisk",language_en:"Engelsk",language_ru:"Russisk",language_de:"Tysk",language_nl:"Nederlandsk",language_fr:"Fransk",language_es:"Spansk",language_it:"Italiensk",language_sk:"Slovakisk",language_hu:"Ungarsk",language_pt:"Portugisisk",language_da:"Dansk",language_sr:"Serbisk",language_pl:"Polsk",language_zh:"Kinesisk",language_tr:"Tyrkisk",language_nb:"Norsk (bokmål)",wind_speed_unit:"Enhet for vindhastighet",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/t",show_animations:"Animasjoner",animation_quality:"Animasjonskvalitet",animation_quality_helper:"Senk den på veggnettbrett og trege enheter",animation_quality_high:"Høy",animation_quality_low:"Lav (20 FPS, for trege enheter)",animation_quality_medium:"Middels (30 FPS, færre partikler)",aqi_entity:"Luftkvalitetssensor (AQI)",border_radius:"Hjørneradius",daily_forecast_title:"Tittel",daily_forecast_title_helper:"Tom = standardtittel",dew_point_entity:"Duggpunktsensor",feels_like_entity:"Sensor for føles som",hourly_forecast_title:"Tittel",hourly_forecast_title_helper:"Tom = standardtittel",humidity_entity:"Luftfuktighetssensor",overlay_opacity_helper:"0–1, gjør himmelen mørkere slik at teksten er lett å lese",precipitation_entity:"Nedbørsensor",pressure_entity:"Lufttrykksensor",section_appearance:"Utseende",section_clock:"Språk, klokke og dato",section_details:"Detaljer",section_forecast:"Varsel",section_sensors:"Sensorer (valgfritt)",sensors:"Sensorer (valgfritt, erstatter værenheten)",show_aurora:"Nordlys",show_aurora_helper:"I klare netter, moderne grafikk",show_date:"Dato",show_dew_point:"Duggpunkt",show_precipitation_outlook:"Når regnet starter/slutter",show_precipitation_outlook_helper:"Fra timevarselet for de neste 12 timene",show_pressure:"Lufttrykk",show_raindrops:"Regndråper på ruten",show_raindrops_helper:"I regnvær, moderne grafikk",show_temperature_bars:"Temperaturstolper",show_uv_index:"UV-indeks",show_wind_effects:"Vindkast og blader",show_wind_effects_helper:"I vindfullt vær eller over 8 m/s",sun_position_x:"Sol/måne-posisjon, vannrett",sun_position_x_helper:"La stå tomt for å følge tiden på døgnet",sun_position_y:"Sol/måne-posisjon, loddrett",sun_position_y_helper:"La stå tomt for å følge tiden på døgnet",temperature_entity:"Temperatursensor",text_color:"Tekstfarge",text_color_helper:"Hvilken som helst CSS-farge, f.eks. #1a1a2e eller var(--primary-text-color)",uv_index_entity:"UV-indekssensor",visual_style:"Grafikk",visual_style_classic:"Klassisk",visual_style_modern:"Moderne",wind_bearing_entity:"Vindretningssensor",wind_gust_entity:"Vindkastsensor",wind_speed_entity:"Vindhastighetssensor",language_sl:"Slovensk",hourly_forecast_hours_helper:"Ingen øvre grense: f.eks. 72 for tre dager, eller mer for å vise hele varselet fra leverandøren"}};var ua={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",windy:"Winderig","windy-variant":"Winderig, bewolkt",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",forecast_title_hourly:"Uurverwachting",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",pressure:"Luchtdruk",uv_index:"UV-index",dew_point:"Dauwpunt",aqi:"Luchtkwaliteitsindex",precipitation_outlook:{start:"{kind} verwacht rond {time}",soon:"{kind} binnenkort verwacht",stop:"{kind} stopt rond {time}",continues:"{kind} nog minstens {hours} uur",rain:"Regen",snow:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",storm:"Onweer"},editor:{entity:"Weer-entiteit",name:"Kaarttitel",layout:"Indeling",layout_default:"Default",layout_minimal:"Minimal",height:"Hoogte",show_feels_like:"Gevoelstemperatuur",show_wind:"Wind",show_wind_gust:"Windstoten",show_wind_direction:"Richting",show_humidity:"Luchtvochtigheid",show_min_temp:"Minimumtemperatuur",show_hourly_forecast:"Uurverwachting",hourly_forecast_hours:"Uren",show_daily_forecast:"Dagverwachting",daily_forecast_days:"Dagen",show_sunrise_sunset:"Zonsopkomst en -ondergang",sunrise_entity:"Zonsopkomstsensor",sunset_entity:"Zonsondergangsensor",show_clock:"Klok",clock_position:"Positie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Notatie",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Verduistering",text_shadow:"Tekstschaduw",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",language_it:"Italiaans",language_sk:"Slowaaks",language_hu:"Hongaars",language_pt:"Portugees",wind_speed_unit:"Eenheid windsnelheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u",show_animations:"Animaties",animation_quality:"Animatiekwaliteit",animation_quality_helper:"Verlaag dit voor wandtablets en trage apparaten",animation_quality_high:"Hoog",animation_quality_low:"Laag (20 FPS, voor trage apparaten)",animation_quality_medium:"Gemiddeld (30 FPS, minder deeltjes)",aqi_entity:"Luchtkwaliteitssensor (AQI)",border_radius:"Hoekafronding",daily_forecast_title:"Titel",daily_forecast_title_helper:"Leeg = standaardtitel",dew_point_entity:"Dauwpuntsensor",feels_like_entity:"Gevoelstemperatuursensor",hourly_forecast_title:"Titel",hourly_forecast_title_helper:"Leeg = standaardtitel",humidity_entity:"Luchtvochtigheidssensor",overlay_opacity_helper:"0–1, maakt de lucht donkerder zodat tekst leesbaar blijft",precipitation_entity:"Neerslagsensor",pressure_entity:"Luchtdruksensor",section_appearance:"Uiterlijk",section_clock:"Taal, klok en datum",section_details:"Details",section_forecast:"Verwachting",section_sensors:"Sensoren (optioneel)",sensors:"Sensoren (optioneel, vervangen de weerentiteit)",show_aurora:"Noorderlicht",show_aurora_helper:"Bij heldere nachten, moderne grafiek",show_date:"Datum",show_dew_point:"Dauwpunt",show_precipitation_outlook:"Wanneer regen begint/stopt",show_precipitation_outlook_helper:"Uit de uurverwachting voor de komende 12 uur",show_pressure:"Luchtdruk",show_raindrops:"Regendruppels op het glas",show_raindrops_helper:"Bij regen, moderne grafiek",show_temperature_bars:"Temperatuurbalken",show_uv_index:"UV-index",show_wind_effects:"Windstoten en bladeren",show_wind_effects_helper:"Bij winderig weer of boven 8 m/s",sun_position_x:"Positie zon/maan, horizontaal",sun_position_x_helper:"Leeg laten om het tijdstip van de dag te volgen",sun_position_y:"Positie zon/maan, verticaal",sun_position_y_helper:"Leeg laten om het tijdstip van de dag te volgen",temperature_entity:"Temperatuursensor",text_color:"Tekstkleur",text_color_helper:"Elke CSS-kleur, bijv. #1a1a2e of var(--primary-text-color)",uv_index_entity:"UV-indexsensor",visual_style:"Grafiek",visual_style_classic:"Klassiek",visual_style_modern:"Modern",wind_bearing_entity:"Windrichtingsensor",wind_gust_entity:"Windstotensensor",wind_speed_entity:"Windsnelheidsensor",language_da:"Deens",language_nb:"Noors (Bokmål)",language_pl:"Pools",language_sl:"Sloveens",language_sr:"Servisch",language_tr:"Turks",language_zh:"Chinees",hourly_forecast_hours_helper:"Geen maximum: bijv. 72 voor drie dagen, of meer om de hele verwachting van de provider te tonen"}};var ta={sunny:"Słonecznie",clear:"Bezchmurnie",overcast:"Pochmurno",cloudy:"Zachmurzenie",partlycloudy:"Częściowe zachmurzenie",rainy:"Deszczowo",rain:"Deszcz",snowy:"Śnieżnie",snow:"Śnieg",foggy:"Mgliście",fog:"Mgła",lightning:"Błyskawice","lightning-rainy":"Burza",pouring:"Ulewa","snowy-rainy":"Deszcz ze śniegiem",hail:"Grad","clear-night":"Bezchmurna noc",windy:"Wietrznie","windy-variant":"Wietrznie, pochmurno",feels_like:"Odczuwalnie",forecast_title:"Prognoza na dziś",forecast_title_hourly:"Prognoza godzinowa",daily_forecast_title:"Prognoza dzienna",no_data:"Brak danych",forecast_unavailable:"Prognoza niedostępna",weather:"Pogoda",language:"Język",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"węzły",wind_unit_fts:"ft/s",show_clock:"Pokaż aktualny czas",am:"AM",pm:"PM",pressure:"Ciśnienie",uv_index:"Indeks UV",dew_point:"Punkt rosy",aqi:"Indeks jakości powietrza",precipitation_outlook:{start:"{kind}: początek około {time}",soon:"{kind}: początek wkrótce",stop:"{kind}: koniec około {time}",continues:"{kind}: jeszcze co najmniej {hours} h",rain:"Deszcz",snow:"Śnieg",sleet:"Deszcz ze śniegiem",hail:"Grad",storm:"Burza"},editor:{entity:"Encja pogody",name:"Tytuł karty",layout:"Układ",layout_default:"Domyślny",layout_minimal:"Minimalny",height:"Wysokość",show_feels_like:"Odczuwalna",show_wind:"Wiatr",show_wind_gust:"Porywy",show_wind_direction:"Kierunek",show_humidity:"Wilgotność",show_min_temp:"Temperatura minimalna",show_hourly_forecast:"Prognoza godzinowa",hourly_forecast_hours:"Godziny",show_daily_forecast:"Prognoza dzienna",daily_forecast_days:"Dni",show_sunrise_sunset:"Wschód i zachód słońca",sunrise_entity:"Czujnik wschodu słońca",sunset_entity:"Czujnik zachodu słońca",show_clock:"Zegar",clock_position:"Położenie",clock_position_top:"Góra",clock_position_details:"Szczegóły",clock_format:"Format",clock_format_12h:"12-godzinny (AM/PM)",clock_format_24h:"24-godzinny",overlay_opacity:"Przyciemnienie",language:"Język",language_auto:"Automatycznie",language_en:"Angielski",language_ru:"Rosyjski",language_de:"Niemiecki",language_nl:"Holenderski",language_fr:"Francuski",language_es:"Hiszpański",language_it:"Włoski",language_sk:"Słowacki",language_hu:"Węgierski",language_pl:"Polski",wind_speed_unit:"Jednostka prędkości wiatru",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",animation_quality:"Jakość animacji",animation_quality_helper:"Obniż na tabletach ściennych i wolnych urządzeniach",animation_quality_high:"Wysoka",animation_quality_low:"Niska (20 FPS, dla wolnych urządzeń)",animation_quality_medium:"Średnia (30 FPS, mniej cząsteczek)",aqi_entity:"Czujnik jakości powietrza (AQI)",border_radius:"Zaokrąglenie narożników",daily_forecast_title:"Tytuł",daily_forecast_title_helper:"Puste = tytuł domyślny",dew_point_entity:"Czujnik punktu rosy",feels_like_entity:"Czujnik temperatury odczuwalnej",hourly_forecast_title:"Tytuł",hourly_forecast_title_helper:"Puste = tytuł domyślny",humidity_entity:"Czujnik wilgotności",overlay_opacity_helper:"0–1, przyciemnia niebo, aby tekst był czytelny",precipitation_entity:"Czujnik opadów",pressure_entity:"Czujnik ciśnienia",section_appearance:"Wygląd",section_clock:"Język, zegar i data",section_details:"Szczegóły",section_forecast:"Prognoza",section_sensors:"Czujniki (opcjonalnie)",sensors:"Czujniki (opcjonalnie, zastępują encję pogody)",show_animations:"Animacje",show_aurora:"Zorza polarna",show_aurora_helper:"W pogodne noce, nowoczesna grafika",show_date:"Data",show_dew_point:"Punkt rosy",show_precipitation_outlook:"Kiedy zacznie/przestanie padać",show_precipitation_outlook_helper:"Na podstawie prognozy godzinowej na najbliższe 12 godzin",show_pressure:"Ciśnienie",show_raindrops:"Krople deszczu na szybie",show_raindrops_helper:"Podczas deszczu, nowoczesna grafika",show_temperature_bars:"Paski temperatury",show_uv_index:"Indeks UV",show_wind_effects:"Porywy wiatru i liście",show_wind_effects_helper:"Przy wietrznej pogodzie lub powyżej 8 m/s",sun_position_x:"Położenie słońca/księżyca, w poziomie",sun_position_x_helper:"Pozostaw puste, aby podążać za porą dnia",sun_position_y:"Położenie słońca/księżyca, w pionie",sun_position_y_helper:"Pozostaw puste, aby podążać za porą dnia",temperature_entity:"Czujnik temperatury",text_color:"Kolor tekstu",text_color_helper:"Dowolny kolor CSS, np. #1a1a2e lub var(--primary-text-color)",text_shadow:"Cień tekstu",uv_index_entity:"Czujnik indeksu UV",visual_style:"Grafika",visual_style_classic:"Klasyczna",visual_style_modern:"Nowoczesna",wind_bearing_entity:"Czujnik kierunku wiatru",wind_gust_entity:"Czujnik porywów wiatru",wind_speed_entity:"Czujnik prędkości wiatru",language_da:"Duński",language_nb:"Norweski (bokmål)",language_pt:"Portugalski",language_sl:"Słoweński",language_sr:"Serbski",language_tr:"Turecki",language_zh:"Chiński",hourly_forecast_hours_helper:"Bez limitu: np. 72 na trzy dni lub więcej, aby pokazać całą prognozę dostawcy"}};var pa={sunny:"Ensolarado",clear:"Limpo",overcast:"Encoberto",cloudy:"Nublado",partlycloudy:"Parcialmente nublado",rainy:"Chuvoso",rain:"Chuva",snowy:"Neve",snow:"Neve",foggy:"Nevoeiro",fog:"Nevoeiro",lightning:"Relâmpagos","lightning-rainy":"Trovoada",pouring:"Chuva forte","snowy-rainy":"Chuva com neve",hail:"Granizo","clear-night":"Noite limpa",windy:"Ventoso","windy-variant":"Ventoso, nublado",feels_like:"Sensação",forecast_title:"Previsão de hoje",forecast_title_hourly:"Previsão horária",daily_forecast_title:"Previsão diária",no_data:"Sem dados",forecast_unavailable:"Previsão indisponível",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"nós",wind_unit_fts:"ft/s",show_clock:"Mostrar hora atual",am:"AM",pm:"PM",pressure:"Pressão",uv_index:"Índice UV",dew_point:"Ponto de orvalho",aqi:"Índice de qualidade do ar",precipitation_outlook:{start:"{kind}: começa por volta de {time}",soon:"{kind}: começa em breve",stop:"{kind}: termina por volta de {time}",continues:"{kind}: pelo menos mais {hours} h",rain:"Chuva",snow:"Neve",sleet:"Chuva com neve",hail:"Granizo",storm:"Trovoadas"},editor:{entity:"Entidade de clima",name:"Título do card",layout:"Layout",layout_default:"Padrão",layout_minimal:"Mínimo",height:"Altura",show_feels_like:"Sensação térmica",show_wind:"Vento",show_wind_gust:"Rajadas",show_wind_direction:"Direção",show_humidity:"Humidade",show_min_temp:"Temperatura mínima",show_hourly_forecast:"Previsão horária",hourly_forecast_hours:"Horas",hourly_forecast_title:"Título da previsão horária",show_daily_forecast:"Previsão diária",daily_forecast_days:"Dias",daily_forecast_title:"Título da previsão diária",show_sunrise_sunset:"Nascer e pôr do sol",sunrise_entity:"Sensor de nascer do sol",sunset_entity:"Sensor de pôr do sol",sensors:"Sensores (opcional, substituem a entidade meteorológica)",temperature_entity:"Sensor de temperatura",feels_like_entity:"Sensor de sensação térmica",humidity_entity:"Sensor de humidade",wind_speed_entity:"Sensor de velocidade do vento",wind_gust_entity:"Sensor de rajadas de vento",wind_bearing_entity:"Sensor de direção do vento",precipitation_entity:"Sensor de precipitação",show_clock:"Relógio",show_date:"Data",clock_position:"Posição",clock_position_top:"Topo",clock_position_details:"Detalhes",clock_format:"Formato",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Escurecimento",text_shadow:"Sombra do texto",text_color:"Cor do texto",border_radius:"Raio dos cantos",sun_position_x:"Posição do sol/lua, horizontal",sun_position_y:"Posição do sol/lua, vertical",language:"Idioma",language_auto:"Automático",language_en:"Inglês",language_ru:"Russo",language_de:"Alemão",language_nl:"Holandês",language_fr:"Francês",language_es:"Espanhol",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",language_pt:"Português",language_da:"Dinamarquês",language_sr:"Sérvio",language_pl:"Polaco",language_zh:"Chinês",language_tr:"Turco",language_nb:"Norueguês (Bokmål)",wind_speed_unit:"Unidade de velocidade do vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animações",animation_quality:"Qualidade da animação",animation_quality_helper:"Reduza em tablets de parede e dispositivos lentos",animation_quality_high:"Alta",animation_quality_low:"Baixa (20 FPS, para dispositivos lentos)",animation_quality_medium:"Média (30 FPS, menos partículas)",aqi_entity:"Sensor de qualidade do ar (AQI)",daily_forecast_title_helper:"Vazio = título padrão",dew_point_entity:"Sensor de ponto de orvalho",hourly_forecast_title_helper:"Vazio = título padrão",overlay_opacity_helper:"0–1, escurece o céu para manter o texto legível",pressure_entity:"Sensor de pressão",section_appearance:"Aparência",section_clock:"Idioma, relógio e data",section_details:"Detalhes",section_forecast:"Previsão",section_sensors:"Sensores (opcional)",show_aurora:"Aurora boreal",show_aurora_helper:"Em noites limpas, gráficos modernos",show_dew_point:"Ponto de orvalho",show_precipitation_outlook:"Quando a chuva começa/termina",show_precipitation_outlook_helper:"Pela previsão horária das próximas 12 horas",show_pressure:"Pressão",show_raindrops:"Gotas de chuva no vidro",show_raindrops_helper:"Com chuva, gráficos modernos",show_temperature_bars:"Barras de temperatura",show_uv_index:"Índice UV",show_wind_effects:"Rajadas e folhas",show_wind_effects_helper:"Com vento ou acima de 8 m/s",sun_position_x_helper:"Deixe vazio para seguir a hora do dia",sun_position_y_helper:"Deixe vazio para seguir a hora do dia",text_color_helper:"Qualquer cor CSS, p. ex. #1a1a2e ou var(--primary-text-color)",uv_index_entity:"Sensor de índice UV",visual_style:"Gráficos",visual_style_classic:"Clássico",visual_style_modern:"Moderno",language_sl:"Esloveno",hourly_forecast_hours_helper:"Sem limite: p. ex. 72 para três dias, ou mais para mostrar toda a previsão do fornecedor"}};var da={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",windy:"Ветрено","windy-variant":"Ветрено, облачно",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",forecast_title_hourly:"Почасовой прогноз",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Язык",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",pressure:"Давление",uv_index:"УФ-индекс",dew_point:"Точка росы",aqi:"Индекс качества воздуха",precipitation_outlook:{start:"{kind} ожидается около {time}",soon:"{kind} ожидается в ближайший час",stop:"{kind} закончится около {time}",continues:"{kind} продлится ещё не меньше {hours} ч",rain:"Дождь",snow:"Снег",sleet:"Мокрый снег",hail:"Град",storm:"Гроза"},editor:{entity:"Погодная сущность",name:"Название карточки",layout:"Макет",layout_default:"Обычный",layout_minimal:"Минимальный",visual_style:"Графика",visual_style_modern:"Современный",visual_style_classic:"Классический",animation_quality:"Качество анимации",animation_quality_high:"Высокое",animation_quality_medium:"Среднее (30 FPS, меньше частиц)",animation_quality_low:"Низкое (20 FPS, для слабых устройств)",height:"Высота",show_feels_like:"Ощущается как",show_wind:"Ветер",show_wind_gust:"Порывы",show_wind_direction:"Направление",show_humidity:"Влажность",show_min_temp:"Мин. температура",show_hourly_forecast:"Прогноз по часам",hourly_forecast_hours:"Часов",hourly_forecast_title:"Заголовок",show_daily_forecast:"Прогноз по дням",daily_forecast_days:"Дней",daily_forecast_title:"Заголовок",show_sunrise_sunset:"Восход и закат",sunrise_entity:"Датчик восхода",sunset_entity:"Датчик заката",sensors:"Датчики (необязательно, заменяют данные погоды)",temperature_entity:"Датчик температуры",feels_like_entity:"Датчик «ощущается как»",humidity_entity:"Датчик влажности",wind_speed_entity:"Датчик скорости ветра",wind_gust_entity:"Датчик порывов ветра",wind_bearing_entity:"Датчик направления ветра",precipitation_entity:"Датчик осадков",show_pressure:"Давление",show_uv_index:"УФ-индекс",show_dew_point:"Точка росы",show_precipitation_outlook:"Когда начнётся дождь",show_temperature_bars:"Полоски температур",pressure_entity:"Датчик давления",uv_index_entity:"Датчик УФ-индекса",dew_point_entity:"Датчик точки росы",aqi_entity:"Датчик качества воздуха (AQI)",show_clock:"Часы",show_date:"Дата",clock_position:"Положение",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Затемнение",text_shadow:"Тень текста",text_color:"Цвет текста",border_radius:"Скругление углов",sun_position_x:"Солнце/луна по горизонтали",sun_position_y:"Солнце/луна по вертикали",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",language_it:"Итальянский",language_sk:"Словацкий",language_hu:"Венгерский",language_pt:"Португальский",language_da:"Датский",language_sr:"Сербский",language_pl:"Польский",language_zh:"Китайский",language_tr:"Турецкий",language_nb:"Норвежский (букмол)",language_sl:"Словенский",wind_speed_unit:"Единица скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч",show_animations:"Анимации",show_aurora:"Северное сияние",section_appearance:"Внешний вид",section_details:"Детали",section_forecast:"Прогноз",section_clock:"Язык, часы и дата",section_sensors:"Датчики (необязательно)",animation_quality_helper:"Понизьте для настенных планшетов и слабых устройств",show_aurora_helper:"Ясной ночью, в современной графике",overlay_opacity_helper:"0–1, затемняет небо, чтобы текст читался",text_color_helper:"Любой цвет CSS, например #1a1a2e или var(--primary-text-color)",sun_position_x_helper:"Пусто — по времени суток",sun_position_y_helper:"Пусто — по времени суток",show_precipitation_outlook_helper:"По почасовому прогнозу на 12 часов вперёд",hourly_forecast_title_helper:"Пусто — стандартный заголовок",daily_forecast_title_helper:"Пусто — стандартный заголовок",show_raindrops:"Капли на стекле",show_wind_effects:"Порывы ветра и листья",show_raindrops_helper:"В дождь, в современной графике",show_wind_effects_helper:"В ветреную погоду или при ветре от 8 м/с",hourly_forecast_hours_helper:"Без ограничений: например, 72 — три дня, или больше, чтобы показать весь прогноз провайдера"}};var ka={sunny:"Slnečno",clear:"Jasno",overcast:"Zamračené",cloudy:"Oblačno",partlycloudy:"Polooblačno",rainy:"Daždivo",rain:"Dážď",snowy:"Sneženie",snow:"Sneh",foggy:"Hmlisto",fog:"Hmla",lightning:"Blesky","lightning-rainy":"Búrka",pouring:"Silný dážď","snowy-rainy":"Dážď so snehom",hail:"Krúpy","clear-night":"Jasná noc",windy:"Veterno","windy-variant":"Veterno, oblačno",feels_like:"Pocitová teplota",forecast_title:"Predpoveď na dnes",forecast_title_hourly:"Hodinová predpoveď",daily_forecast_title:"Denná predpoveď",no_data:"Žiadne dáta",forecast_unavailable:"Predpoveď nedostupná",weather:"Počasie",language:"Jazyk",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"uzly",wind_unit_fts:"ft/s",show_clock:"Zobraziť aktuálny čas",am:"dop.",pm:"pop.",pressure:"Tlak",uv_index:"UV index",dew_point:"Rosný bod",aqi:"Index kvality ovzdušia",precipitation_outlook:{start:"{kind} sa očakáva okolo {time}",soon:"{kind} sa očakáva čoskoro",stop:"{kind} skončí okolo {time}",continues:"{kind} ešte aspoň {hours} h",rain:"Dážď",snow:"Sneh",sleet:"Dážď so snehom",hail:"Krupobitie",storm:"Búrka"},editor:{entity:"Entita počasia",name:"Názov karty",layout:"Rozloženie",layout_default:"Default",layout_minimal:"Minimal",height:"Výška",show_feels_like:"Pocitová teplota",show_wind:"Vietor",show_wind_gust:"Nárazy",show_wind_direction:"Smer",show_humidity:"Vlhkosť",show_min_temp:"Minimálna teplota",show_hourly_forecast:"Hodinová predpoveď",hourly_forecast_hours:"Hodiny",show_daily_forecast:"Denná predpoveď",daily_forecast_days:"Dni",show_sunrise_sunset:"Východ a západ slnka",sunrise_entity:"Senzor východu slnka",sunset_entity:"Senzor západu slnka",show_clock:"Hodiny",clock_position:"Poloha",clock_position_top:"Hore",clock_position_details:"V detailoch",clock_format:"Formát",clock_format_12h:"12-hodinový (AM/PM)",clock_format_24h:"24-hodinový",overlay_opacity:"Stmavenie",text_shadow:"Tieň textu",language:"Jazyk",language_auto:"Automaticky",language_en:"Angličtina",language_ru:"Ruština",language_de:"Nemčina",language_nl:"Holandčina",language_fr:"Francúzština",language_es:"Španielčina",language_it:"Taliančina",language_sk:"Slovenčina",language_hu:"Maďarčina",language_pt:"Portugalčina",wind_speed_unit:"Jednotka rýchlosti vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animácie",animation_quality:"Kvalita animácie",animation_quality_helper:"Znížte na nástenných tabletoch a pomalých zariadeniach",animation_quality_high:"Vysoká",animation_quality_low:"Nízka (20 FPS, pre pomalé zariadenia)",animation_quality_medium:"Stredná (30 FPS, menej častíc)",aqi_entity:"Senzor kvality ovzdušia (AQI)",border_radius:"Zaoblenie rohov",daily_forecast_title:"Nadpis",daily_forecast_title_helper:"Prázdne = predvolený nadpis",dew_point_entity:"Senzor rosného bodu",feels_like_entity:"Senzor pocitovej teploty",hourly_forecast_title:"Nadpis",hourly_forecast_title_helper:"Prázdne = predvolený nadpis",humidity_entity:"Senzor vlhkosti",overlay_opacity_helper:"0–1, stmaví oblohu, aby bol text čitateľný",precipitation_entity:"Senzor zrážok",pressure_entity:"Senzor tlaku",section_appearance:"Vzhľad",section_clock:"Jazyk, hodiny a dátum",section_details:"Podrobnosti",section_forecast:"Predpoveď",section_sensors:"Senzory (voliteľné)",sensors:"Senzory (voliteľné, nahrádzajú entitu počasia)",show_aurora:"Polárna žiara",show_aurora_helper:"Za jasných nocí, moderná grafika",show_date:"Dátum",show_dew_point:"Rosný bod",show_precipitation_outlook:"Kedy začne/prestane pršať",show_precipitation_outlook_helper:"Z hodinovej predpovede na nasledujúcich 12 hodín",show_pressure:"Tlak",show_raindrops:"Kvapky dažďa na skle",show_raindrops_helper:"Pri daždi, moderná grafika",show_temperature_bars:"Teplotné pruhy",show_uv_index:"UV index",show_wind_effects:"Nárazy vetra a lístie",show_wind_effects_helper:"Pri veternom počasí alebo nad 8 m/s",sun_position_x:"Poloha slnka/mesiaca, vodorovne",sun_position_x_helper:"Nechajte prázdne, aby sa riadila dennou dobou",sun_position_y:"Poloha slnka/mesiaca, zvisle",sun_position_y_helper:"Nechajte prázdne, aby sa riadila dennou dobou",temperature_entity:"Senzor teploty",text_color:"Farba textu",text_color_helper:"Ľubovoľná farba CSS, napr. #1a1a2e alebo var(--primary-text-color)",uv_index_entity:"Senzor UV indexu",visual_style:"Grafika",visual_style_classic:"Klasická",visual_style_modern:"Moderná",wind_bearing_entity:"Senzor smeru vetra",wind_gust_entity:"Senzor nárazov vetra",wind_speed_entity:"Senzor rýchlosti vetra",language_da:"Dánčina",language_nb:"Nórčina (bokmål)",language_pl:"Poľština",language_sl:"Slovinčina",language_sr:"Srbčina",language_tr:"Turečtina",language_zh:"Čínština",hourly_forecast_hours_helper:"Bez obmedzenia: napr. 72 na tri dni alebo viac, aby sa zobrazila celá predpoveď poskytovateľa"}};var ga={sunny:"Sončno",clear:"Jasno",overcast:"Zastrto",cloudy:"Oblačno",partlycloudy:"Delno oblačno",rainy:"Deževno",rain:"Dež",snowy:"Sneženo",snow:"Sneg",foggy:"Megleno",fog:"Megla",lightning:"Strela","lightning-rainy":"Nevihta",pouring:"Močen dež","snowy-rainy":"Dež s snegom",hail:"Toča","clear-night":"Jasna noč",windy:"Vetrovno","windy-variant":"Vetrovno, oblačno",feels_like:"Občutno kot",forecast_title:"Današnja napoved",forecast_title_hourly:"Urna napoved",daily_forecast_title:"Dnevna napoved",no_data:"Ni podatkov",forecast_unavailable:"Napoved nedostopna",weather:"Vreme",language:"Jezik",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"vozlov",wind_unit_fts:"ft/s",show_clock:"Pokaži trenutni čas",am:"AM",pm:"PM",pressure:"Pritisk",uv_index:"UV indeks",dew_point:"Rosišče",aqi:"Indeks kakovosti zraka",precipitation_outlook:{start:"{kind} napovedano okoli {time}",soon:"{kind} napovedano kmalu",stop:"{kind} se konča okoli {time}",continues:"{kind} najmanj za {hours} ur",rain:"Dež",snow:"Sneg",sleet:"Dež s snegom",hail:"Toča",storm:"Nevihta"},editor:{entity:"Vremenska entiteta",name:"Naslov karte",layout:"Postavitev",layout_default:"Privzeto",layout_minimal:"Minimalistično",visual_style:"Grafično",visual_style_modern:"Moderno",visual_style_classic:"Klasično",animation_quality:"Kvaliteta animacije",animation_quality_high:"Visoko",animation_quality_medium:"Srednje (30 FPS, manj delcev)",animation_quality_low:"Nizko (20 FPS, za počasne naprave)",height:"Višina",show_feels_like:"Občutno kot",show_wind:"Veter",show_wind_gust:"Sunki",show_wind_direction:"Smer",show_humidity:"Vlažnost",show_min_temp:"Min temperatura",show_hourly_forecast:"Urna napoved",hourly_forecast_hours:"Ure",hourly_forecast_title:"Naslov",show_daily_forecast:"Dnevna napoved",daily_forecast_days:"Dni",daily_forecast_title:"Naslov",show_sunrise_sunset:"Vzhod in zahod",sunrise_entity:"Senzor sončnega vzhoda",sunset_entity:"Senzor sončnega zahoda",sensors:"Senzorji (neobvezno, preglasijo vremensko entiteto)",temperature_entity:"Temperaturni senzor",feels_like_entity:"Senzor občutene temperature",humidity_entity:"Senzor vlažnosti",wind_speed_entity:"Senzor hitrosti vetra",wind_gust_entity:"Senzor sunkov vetra",wind_bearing_entity:"Senzor smeri vetra",precipitation_entity:"Senzor padavin",show_pressure:"Pritisk",show_uv_index:"UV indeks",show_dew_point:"Rosišče",show_precipitation_outlook:"Kdaj se dež začne/konča",show_temperature_bars:"Temperaturni stolpci",pressure_entity:"Senzor pritiska",uv_index_entity:"Senzor UV indeksa",dew_point_entity:"Senzor rosišča",aqi_entity:"Senzor kakovosti zraka (AQI)",show_clock:"Ura",show_date:"Datum",clock_position:"Položaj",clock_position_top:"Zgoraj",clock_position_details:"Podrobnosti",clock_format:"Oblika",clock_format_12h:"12-urna (AM/PM)",clock_format_24h:"24-urna",overlay_opacity:"Zatemnitev",text_shadow:"Senca besedila",text_color:"Barva besedila",border_radius:"Zaobljenost vogalov",sun_position_x:"Položaj sonca/lune, vodoravno",sun_position_y:"Položaj sonca/lune, navpično",language:"Jezik",language_auto:"Samodejno",language_en:"Angleščina",language_ru:"Ruščina",language_de:"Nemščina",language_nl:"Nizozemščina",language_fr:"Francoščina",language_es:"Španščina",language_it:"Italijanščina",language_sk:"Slovaščina",language_hu:"Madžarščina",language_pt:"Portugalščina",language_da:"Danščina",language_sr:"Srbščina",language_pl:"Poljščina",language_zh:"Kitajščina",language_tr:"Turščina",language_nb:"Norveščina (bokmål)",language_sl:"Slovenščina",wind_speed_unit:"Enota hitrosti vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animacije",show_aurora:"Severni sij",section_appearance:"Videz",section_details:"Podrobnosti",section_forecast:"Napoved",section_clock:"Jezik, ura in datum",section_sensors:"Senzorji (neobvezno)",animation_quality_helper:"Znižajte za stenske tablice in počasne naprave",show_aurora_helper:"Ob jasnih nočeh, moderna grafika",overlay_opacity_helper:"0–1, zatemni nebo, da je besedilo berljivo",text_color_helper:"Katera koli CSS barva, npr. #1a1a2e ali var(--primary-text-color)",sun_position_x_helper:"Pustite prazno za samodejni položaj glede na čas dneva",sun_position_y_helper:"Pustite prazno za samodejni položaj glede na čas dneva",show_precipitation_outlook_helper:"Iz urne napovedi za naslednjih 12 ur",hourly_forecast_title_helper:"Prazno = privzeti naslov",daily_forecast_title_helper:"Prazno = privzeti naslov",show_raindrops:"Dežne kaplje na steklu",show_wind_effects:"Sunki vetra in listje",show_raindrops_helper:"Ob dežju, moderna grafika",show_wind_effects_helper:"Ob vetrovnem vremenu ali nad 8 m/s",hourly_forecast_hours_helper:"Brez omejitve: npr. 72 za tri dni ali več za prikaz celotne napovedi ponudnika"}};var ca={sunny:"Sunčano",clear:"Vedro",overcast:"Oblačno",cloudy:"Oblačno",partlycloudy:"Delimično oblačno",rainy:"Kišovito",rain:"Kiša",snowy:"Snežno",snow:"Sneg",foggy:"Maglovito",fog:"Magla",lightning:"Grmljavina","lightning-rainy":"Grmljavina sa kišom",pouring:"Pljusak","snowy-rainy":"Susnežica",hail:"Grad","clear-night":"Vedra noć",windy:"Vetrovito","windy-variant":"Vetrovito, oblačno",feels_like:"Subjektivni osećaj",forecast_title:"Prognoza",forecast_title_hourly:"Satna prognoza",daily_forecast_title:"Dnevna prognoza",no_data:"Nema podataka",forecast_unavailable:"Prognoza nije dostupna",weather:"Vreme",language:"Jezik",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"čvorova",wind_unit_fts:"ft/s",show_clock:"Prikaži sat",am:"AM",pm:"PM",pressure:"Pritisak",uv_index:"UV indeks",dew_point:"Tačka rose",aqi:"Indeks kvaliteta vazduha",precipitation_outlook:{start:"{kind} se očekuje oko {time}",soon:"{kind} se očekuje uskoro",stop:"{kind} prestaje oko {time}",continues:"{kind} još najmanje {hours} h",rain:"Kiša",snow:"Sneg",sleet:"Susnežica",hail:"Grad",storm:"Grmljavina"},editor:{entity:"Entitet",name:"Naziv (opciono)",layout:"Raspored",layout_default:"Podrazumevano",layout_minimal:"Minimalno",height:"Visina",show_feels_like:"Osećaj temperature",show_wind:"Vetar",show_wind_gust:"Udari",show_wind_direction:"Pravac",show_humidity:"Vlažnost",show_min_temp:"Minimalna temperatura",show_hourly_forecast:"Satna prognoza",hourly_forecast_hours:"Sati",show_daily_forecast:"Dnevna prognoza",daily_forecast_days:"Dani",show_sunrise_sunset:"Izlazak i zalazak sunca",sunrise_entity:"Senzor izlaska sunca",sunset_entity:"Senzor zalaska sunca",show_clock:"Sat",clock_position:"Položaj",clock_position_top:"Vrh",clock_position_details:"Detalji",clock_format:"Format",clock_format_12h:"12h",clock_format_24h:"24h",overlay_opacity:"Zatamnjenje",language:"Jezik",language_auto:"Automatski",language_en:"Engleski",language_ru:"Ruski",language_de:"Nemački",language_nl:"Holandski",language_fr:"Francuski",language_es:"Španski",language_it:"Italijanski",language_sk:"Slovački",language_hu:"Mađarski",wind_speed_unit:"Jedinica brzine vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",animation_quality:"Kvalitet animacije",animation_quality_helper:"Smanjite na zidnim tabletima i sporim uređajima",animation_quality_high:"Visok",animation_quality_low:"Nizak (20 FPS, za spore uređaje)",animation_quality_medium:"Srednji (30 FPS, manje čestica)",aqi_entity:"Senzor kvaliteta vazduha (AQI)",border_radius:"Zaobljenost uglova",daily_forecast_title:"Naslov",daily_forecast_title_helper:"Prazno = podrazumevani naslov",dew_point_entity:"Senzor tačke rose",feels_like_entity:"Senzor osećaja temperature",hourly_forecast_title:"Naslov",hourly_forecast_title_helper:"Prazno = podrazumevani naslov",humidity_entity:"Senzor vlažnosti",overlay_opacity_helper:"0–1, zatamnjuje nebo da bi tekst bio čitljiv",precipitation_entity:"Senzor padavina",pressure_entity:"Senzor pritiska",section_appearance:"Izgled",section_clock:"Jezik, sat i datum",section_details:"Detalji",section_forecast:"Prognoza",section_sensors:"Senzori (opciono)",sensors:"Senzori (opciono, zamenjuju vremenski entitet)",show_animations:"Animacije",show_aurora:"Polarna svetlost",show_aurora_helper:"U vedrim noćima, moderna grafika",show_date:"Datum",show_dew_point:"Tačka rose",show_precipitation_outlook:"Kada kiša počinje/prestaje",show_precipitation_outlook_helper:"Iz satne prognoze za narednih 12 sati",show_pressure:"Pritisak",show_raindrops:"Kapi kiše na staklu",show_raindrops_helper:"Po kiši, moderna grafika",show_temperature_bars:"Trake temperature",show_uv_index:"UV indeks",show_wind_effects:"Udari vetra i lišće",show_wind_effects_helper:"Po vetrovitom vremenu ili iznad 8 m/s",sun_position_x:"Položaj sunca/meseca, vodoravno",sun_position_x_helper:"Ostavite prazno da prati doba dana",sun_position_y:"Položaj sunca/meseca, uspravno",sun_position_y_helper:"Ostavite prazno da prati doba dana",temperature_entity:"Senzor temperature",text_color:"Boja teksta",text_color_helper:"Bilo koja CSS boja, npr. #1a1a2e ili var(--primary-text-color)",text_shadow:"Senka teksta",uv_index_entity:"Senzor UV indeksa",visual_style:"Grafika",visual_style_classic:"Klasična",visual_style_modern:"Moderna",wind_bearing_entity:"Senzor pravca vetra",wind_gust_entity:"Senzor udara vetra",wind_speed_entity:"Senzor brzine vetra",language_da:"Danski",language_nb:"Norveški (bokmål)",language_pl:"Poljski",language_pt:"Portugalski",language_sl:"Slovenački",language_sr:"Srpski",language_tr:"Turski",language_zh:"Kineski",hourly_forecast_hours_helper:"Bez ograničenja: npr. 72 za tri dana, ili više da bi se prikazala cela prognoza dobavljača"}};var ya={sunny:"Güneşli",clear:"Açık",overcast:"Kapalı",cloudy:"Bulutlu",partlycloudy:"Parçalı bulutlu",rainy:"Yağmurlu",rain:"Yağmur",snowy:"Karlı",snow:"Kar",foggy:"Sisli",fog:"Sis",lightning:"Şimşekli","lightning-rainy":"Fırtınalı",pouring:"Şiddetli yağmur","snowy-rainy":"Sulu kar",hail:"Dolu","clear-night":"Açık gece",windy:"Rüzgarlı","windy-variant":"Rüzgarlı, bulutlu",feels_like:"Hissedilen",forecast_title:"Saatlik tahmin",forecast_title_hourly:"Saatlik tahmin",daily_forecast_title:"Günlük hava tahmini",no_data:"Veri yok",forecast_unavailable:"Tahmin mevcut değil",weather:"Hava durumu",language:"Dil",wind_unit_kmh:"km/s",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knot",wind_unit_fts:"ft/s",show_clock:"Saati göster",am:"ÖÖ",pm:"ÖS",pressure:"Basınç",uv_index:"UV indeksi",dew_point:"Çiy noktası",aqi:"Hava kalitesi indeksi",precipitation_outlook:{start:"{kind} {time} civarında bekleniyor",soon:"{kind} yakında bekleniyor",stop:"{kind} {time} civarında sona eriyor",continues:"{kind} en az {hours} saat daha sürecek",rain:"Yağmur",snow:"Kar",sleet:"Karla karışık yağmur",hail:"Dolu",storm:"Gök gürültülü fırtına"},editor:{entity:"Hava durumu varlığı",name:"Kart başlığı",layout:"Düzen",layout_default:"Varsayılan",layout_minimal:"Minimal",height:"Yükseklik",show_feels_like:"Hissedilen",show_wind:"Rüzgâr",show_wind_gust:"Hamleler",show_wind_direction:"Yön",show_humidity:"Nem",show_min_temp:"En düşük sıcaklık",show_hourly_forecast:"Saatlik tahmin",hourly_forecast_hours:"Saat",show_daily_forecast:"Günlük tahmin",daily_forecast_days:"Gün",show_sunrise_sunset:"Gün doğumu ve batımı",sunrise_entity:"Gün doğumu sensörü",sunset_entity:"Gün batımı sensörü",show_clock:"Saat",clock_position:"Konum",clock_position_top:"Üstte",clock_position_details:"Detaylar",clock_format:"Biçim",clock_format_12h:"12 saat (ÖÖ/ÖS)",clock_format_24h:"24 saat",overlay_opacity:"Karartma",text_shadow:"Metin gölgesi",language:"Dil",language_auto:"Otomatik",language_en:"İngilizce",language_ru:"Rusça",language_de:"Almanca",language_nl:"Flemenkçe",language_fr:"Fransızca",language_es:"İspanyolca",language_it:"İtalyanca",language_sk:"Slovakça",language_hu:"Macarca",language_pt:"Portekizce",language_da:"Danca",language_sr:"Sırpça",language_pl:"Lehçe",language_tr:"Türkçe",wind_speed_unit:"Rüzgâr hızı birimi",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/s",show_animations:"Animasyonlar",language_zh:"Çince",animation_quality:"Animasyon kalitesi",animation_quality_helper:"Duvar tabletlerinde ve yavaş cihazlarda düşürün",animation_quality_high:"Yüksek",animation_quality_low:"Düşük (20 FPS, yavaş cihazlar için)",animation_quality_medium:"Orta (30 FPS, daha az parçacık)",aqi_entity:"Hava kalitesi sensörü (AQI)",border_radius:"Köşe yuvarlaklığı",daily_forecast_title:"Başlık",daily_forecast_title_helper:"Boş = varsayılan başlık",dew_point_entity:"Çiy noktası sensörü",feels_like_entity:"Hissedilen sıcaklık sensörü",hourly_forecast_title:"Başlık",hourly_forecast_title_helper:"Boş = varsayılan başlık",humidity_entity:"Nem sensörü",overlay_opacity_helper:"0–1, metnin okunur kalması için gökyüzünü karartır",precipitation_entity:"Yağış sensörü",pressure_entity:"Basınç sensörü",section_appearance:"Görünüm",section_clock:"Dil, saat ve tarih",section_details:"Ayrıntılar",section_forecast:"Tahmin",section_sensors:"Sensörler (isteğe bağlı)",sensors:"Sensörler (isteğe bağlı, hava durumu varlığının yerine geçer)",show_aurora:"Kuzey ışıkları",show_aurora_helper:"Açık gecelerde, modern grafikler",show_date:"Tarih",show_dew_point:"Çiy noktası",show_precipitation_outlook:"Yağmurun başlama/bitme zamanı",show_precipitation_outlook_helper:"Önümüzdeki 12 saatlik saatlik tahminden",show_pressure:"Basınç",show_raindrops:"Camdaki yağmur damlaları",show_raindrops_helper:"Yağmurda, modern grafikler",show_temperature_bars:"Sıcaklık çubukları",show_uv_index:"UV indeksi",show_wind_effects:"Rüzgâr hamleleri ve yapraklar",show_wind_effects_helper:"Rüzgârlı havada veya 8 m/s üzerinde",sun_position_x:"Güneş/ay konumu, yatay",sun_position_x_helper:"Günün saatini izlemesi için boş bırakın",sun_position_y:"Güneş/ay konumu, dikey",sun_position_y_helper:"Günün saatini izlemesi için boş bırakın",temperature_entity:"Sıcaklık sensörü",text_color:"Metin rengi",text_color_helper:"Herhangi bir CSS rengi, ör. #1a1a2e veya var(--primary-text-color)",uv_index_entity:"UV indeksi sensörü",visual_style:"Grafikler",visual_style_classic:"Klasik",visual_style_modern:"Modern",wind_bearing_entity:"Rüzgâr yönü sensörü",wind_gust_entity:"Rüzgâr hamlesi sensörü",wind_speed_entity:"Rüzgâr hızı sensörü",language_nb:"Norveççe (Bokmål)",language_sl:"Slovence",hourly_forecast_hours_helper:"Üst sınır yok: ör. üç gün için 72 veya sağlayıcının tüm tahmini için daha fazlası"}};var ma={sunny:"晴朗",clear:"晴",overcast:"阴天",cloudy:"多云",partlycloudy:"局部多云",rainy:"有雨",rain:"雨",snowy:"有雪",snow:"雪",foggy:"有雾",fog:"雾",lightning:"雷电","lightning-rainy":"雷阵雨",pouring:"大雨","snowy-rainy":"雨夹雪",hail:"冰雹","clear-night":"晴夜",windy:"有风","windy-variant":"有风，多云",feels_like:"体感温度",forecast_title:"今日预报",forecast_title_hourly:"逐小时预报",daily_forecast_title:"每日预报",no_data:"无数据",forecast_unavailable:"预报不可用",weather:"天气",language:"语言",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"节",wind_unit_fts:"ft/s",show_clock:"显示当前时间",am:"上午",pm:"下午",pressure:"气压",uv_index:"紫外线指数",dew_point:"露点",aqi:"空气质量指数",precipitation_outlook:{start:"{kind}：约{time}开始",soon:"{kind}：即将开始",stop:"{kind}：约{time}结束",continues:"{kind}：至少再持续{hours}小时",rain:"雨",snow:"雪",sleet:"雨夹雪",hail:"冰雹",storm:"雷暴"},editor:{entity:"天气实体",name:"卡片标题",layout:"布局",layout_default:"默认",layout_minimal:"简约",height:"高度",show_feels_like:"体感温度",show_wind:"风",show_wind_gust:"阵风",show_wind_direction:"风向",show_humidity:"湿度",show_min_temp:"最低温度",show_hourly_forecast:"逐小时预报",hourly_forecast_hours:"小时数",show_daily_forecast:"每日预报",daily_forecast_days:"天数",show_sunrise_sunset:"日出和日落",sunrise_entity:"日出传感器",sunset_entity:"日落传感器",show_clock:"时钟",clock_position:"位置",clock_position_top:"顶部",clock_position_details:"详情栏",clock_format:"格式",clock_format_12h:"12小时制 (AM/PM)",clock_format_24h:"24小时制",overlay_opacity:"暗化",text_shadow:"文字阴影",language:"语言",language_auto:"自动",language_en:"英语",language_ru:"俄语",language_de:"德语",language_nl:"荷兰语",language_fr:"法语",language_es:"西班牙语",language_it:"意大利语",language_sk:"斯洛伐克语",language_hu:"匈牙利语",language_pt:"葡萄牙语",language_da:"丹麦语",language_sr:"塞尔维亚语",language_pl:"波兰语",language_zh:"简体中文",wind_speed_unit:"风速单位",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"动画",animation_quality:"动画质量",animation_quality_helper:"在壁挂平板和性能较低的设备上可调低",animation_quality_high:"高",animation_quality_low:"低（20 FPS，适合低性能设备）",animation_quality_medium:"中（30 FPS，粒子更少）",aqi_entity:"空气质量传感器（AQI）",border_radius:"圆角半径",daily_forecast_title:"标题",daily_forecast_title_helper:"留空 = 默认标题",dew_point_entity:"露点传感器",feels_like_entity:"体感温度传感器",hourly_forecast_title:"标题",hourly_forecast_title_helper:"留空 = 默认标题",humidity_entity:"湿度传感器",overlay_opacity_helper:"0–1，调暗天空以保证文字清晰可读",precipitation_entity:"降水传感器",pressure_entity:"气压传感器",section_appearance:"外观",section_clock:"语言、时钟和日期",section_details:"详细信息",section_forecast:"预报",section_sensors:"传感器（可选）",sensors:"传感器（可选，覆盖天气实体）",show_aurora:"极光",show_aurora_helper:"晴朗的夜晚，现代图形",show_date:"日期",show_dew_point:"露点",show_precipitation_outlook:"何时开始/停止下雨",show_precipitation_outlook_helper:"根据未来 12 小时的逐小时预报",show_pressure:"气压",show_raindrops:"玻璃上的雨滴",show_raindrops_helper:"下雨时，现代图形",show_temperature_bars:"温度条",show_uv_index:"紫外线指数",show_wind_effects:"阵风和落叶",show_wind_effects_helper:"刮风天或风速超过 8 m/s 时",sun_position_x:"太阳/月亮位置，水平",sun_position_x_helper:"留空则随一天中的时间变化",sun_position_y:"太阳/月亮位置，垂直",sun_position_y_helper:"留空则随一天中的时间变化",temperature_entity:"温度传感器",text_color:"文字颜色",text_color_helper:"任意 CSS 颜色，例如 #1a1a2e 或 var(--primary-text-color)",uv_index_entity:"紫外线指数传感器",visual_style:"图形",visual_style_classic:"经典",visual_style_modern:"现代",wind_bearing_entity:"风向传感器",wind_gust_entity:"阵风传感器",wind_speed_entity:"风速传感器",language_nb:"挪威语（书面挪威语）",language_sl:"斯洛文尼亚语",language_tr:"土耳其语",hourly_forecast_hours_helper:"无上限：例如 72 表示三天，填更大的数可显示服务商提供的全部预报"}};var Z={da:ea,de:oa,en:aa,es:na,et:_a,fr:ia,hu:ra,it:la,nb:sa,nl:ua,pl:ta,pt:pa,ru:da,sk:ka,sl:ga,sr:ca,tr:ya,zh:ma};class wa{lang="en";fallback="en";t(e){let o=e.split("."),a=o.reduce((_,i)=>_?.[i],Z[this.lang]);if(a!=null)return a;return o.reduce((_,i)=>_?.[i],Z[this.fallback])??e}addTranslations(e,o){let a=Z[e];if(!a)return;Z[e]={...a,...o}}setLanguage(e){if(!Z[e]||this.lang===e)return;if(this.lang=e,typeof window<"u")window.dispatchEvent(new CustomEvent("language-changed"))}}var y=new wa;if(typeof window<"u")window.i18n=y;var Le=(e)=>{if(!e)return;let o=e.toLowerCase();if(Object.hasOwn(Z,o))return o;let a=o.split("-")[0];if(Object.hasOwn(Z,a))return a;return},ge=({configLang:e,hassLang:o}={})=>{if(e&&e!=="auto")return Le(e)??"en";return Le(o)??Le(typeof navigator<"u"?navigator.language:void 0)??"en"};function Cn(){let e=new Date,o=e.getHours(),a=e.getMinutes(),n=o*60+a;if(n>=N.SUNRISE_START&&n<N.SUNRISE_END)return{type:"sunrise",progress:(n-N.SUNRISE_START)/120};if(n>=N.SUNRISE_END&&n<N.DAY_END)return{type:"day",progress:(n-N.SUNRISE_END)/600};if(n>=N.DAY_END&&n<N.SUNSET_END)return{type:"sunset",progress:(n-N.DAY_END)/120};return{type:"night",progress:0}}function Nn(e,o,a){if(e.type==="sunrise"){let n=e.progress;return{x:o*(0.3+n*0.4),y:a*(0.85-n*0.55)}}else if(e.type==="sunset"){let n=e.progress;return{x:o*(0.5+n*0.3),y:a*(0.3+n*0.55)}}else if(e.type==="day"){let _=e.progress*Math.PI;return{x:o*(0.5+Math.sin(_)*0.25),y:a*(0.25-Math.sin(_)*0.1)}}else return{x:o*0.75,y:a*0.3}}function Me(e,o,a,n){let _=Nn(e,o,a),i=(r)=>Math.min(100,Math.max(0,r))/100;if(typeof n?.x==="number")_.x=o*i(n.x);if(typeof n?.y==="number")_.y=a*i(n.y);return _}function za(e){if(e.type==="sunrise"){let o=e.progress,a={r:26,g:26,b:46},n={r:255,g:160,b:122},_={r:255,g:215,b:0};return{start:{r:Math.round(a.r+(n.r-a.r)*o),g:Math.round(a.g+(n.g-a.g)*o),b:Math.round(a.b+(n.b-a.b)*o)},end:{r:Math.round(a.r+(_.r-a.r)*o),g:Math.round(a.g+(_.g-a.g)*o),b:Math.round(a.b+(_.b-a.b)*o)}}}else if(e.type==="sunset"){let o=e.progress,a={r:255,g:107,b:107},n={r:255,g:160,b:122},_={r:26,g:26,b:46};return{start:{r:Math.round(a.r+(_.r-a.r)*o),g:Math.round(a.g+(_.g-a.g)*o),b:Math.round(a.b+(_.b-a.b)*o)},end:{r:Math.round(n.r+(_.r-n.r)*o),g:Math.round(n.g+(_.g-n.g)*o),b:Math.round(n.b+(_.b-n.b)*o)}}}return null}function ha(e,o="24h",a="AM",n="PM"){if(!e)return"";let i=new Date(e).getHours();if(o==="12h"){let r=i%12||12,l=i<12?a:n;return`${r} ${l}`}return`${i.toString().padStart(2,"0")}:00`}function ba(e,o=new Date){let a=o.toDateString();return e.map((n)=>{let _=new Date(n.datetime).toDateString(),i=_!==a;return a=_,i})}function Xe(e,o){if(!e)return"";let a=new Date(e);if(Number.isNaN(a.getTime()))return"";return a.toLocaleDateString(o||void 0,{weekday:"short",day:"numeric",month:"short"})}function ce(e,o="24h",a="AM",n="PM"){if(!e)return"";let _=typeof e==="string"?new Date(e):e,i=_.getHours(),r=_.getMinutes();if(o==="12h"){let l=i>=12?n:a;return i=i%12||12,`${i}:${r.toString().padStart(2,"0")} ${l}`}else return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}function De(e,o=null,a=null,n=null){let _=null,i=null;if(o&&n&&n.states[o]){let r=n.states[o];_=new Date(r.state)}if(a&&n&&n.states[a]){let r=n.states[a];i=new Date(r.state)}if(!_||!i){if(e&&e.attributes){let r=e.attributes;if(!_&&(r.forecast_sunrise||r.sunrise))_=new Date(r.forecast_sunrise||r.sunrise);if(!i&&(r.forecast_sunset||r.sunset))i=new Date(r.forecast_sunset||r.sunset)}}if((!_||!i)&&n&&n.states["sun.sun"]){let l=n.states["sun.sun"].attributes;if(!_&&l.next_rising)_=new Date(l.next_rising);if(!i&&l.next_setting)i=new Date(l.next_setting)}return{sunrise:_,sunset:i,hasSunData:!!(_&&i)}}var Pa=3600000,Se=24*Pa,B=Pa;function va(e,o){return e+Math.floor((o-e)/Se)*Se}function Ee(e,o=new Date){if(e.hasSunData&&e.sunrise&&e.sunset){let a=o.getTime(),n=va(e.sunrise.getTime(),a),_=va(e.sunset.getTime(),a);if(n>_){let l=_+Se;if(a<n+B)return{type:"sunrise",progress:(a-(n-B))/(2*B)};if(a>=l-B)return{type:"sunset",progress:(a-(l-B))/(2*B)};let s=n+B,u=l-B;return{type:"day",progress:(a-s)/(u-s)}}let r=n+Se;if(a<_+B)return{type:"sunset",progress:(a-(_-B))/(2*B)};if(a>=r-B)return{type:"sunrise",progress:(a-(r-B))/(2*B)};return{type:"night",progress:0}}return Cn()}var fa={ms:1,mps:1,kmh:0.2777777777777778,kmph:0.2777777777777778,mph:0.44704,kn:0.514444,kt:0.514444,kts:0.514444,knots:0.514444,fts:0.3048};function O(e,o,a){let n=(r)=>r.toLowerCase().replace(/[^a-z]/g,""),_=fa[n(o)],i=fa[n(a)];if(!_||!i||_===i)return e;return e*_/i}function Ye(e,o,a){if(e==null)return null;if(o.wind_speed_unit)return Math.round(e*10)/10;if(a==="kmh")return Math.round(e*3.6*10)/10;return Math.round(e*10)/10}function ja(e,o,a){let n=e.wind_speed_unit;if(n){let _=n.toLowerCase().replace(/[^a-z]/g,"");if(_==="kmh"||_==="kmph")return a("wind_unit_kmh");else if(_==="ms"||_==="mps")return a("wind_unit_ms");else if(_==="mph")return a("wind_unit_mph");else if(_==="knots"||_==="kn"||_==="kt")return a("wind_unit_knots");else if(_==="fts"||_==="ftps")return a("wind_unit_fts");return n}return o==="kmh"?a("wind_unit_kmh"):a("wind_unit_ms")}function Va(e,o){let a={weekday:"short",day:"numeric",month:"long"};try{return e.toLocaleDateString(o,a)}catch{return e.toLocaleDateString(void 0,a)}}function qa(e,o,a,n){if(o==="12h"){let _=e.getHours(),i=String(e.getMinutes()).padStart(2,"0"),r=_>=12?n:a;return _=_%12||12,`${_}:${i} ${r}`}else{let _=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${_}:${i}`}}function Be(e,o){let a=e?.querySelector(o);if(!a)return null;let n=(_)=>{let i=_;if(i.deltaY!==0)_.preventDefault(),a.scrollLeft+=i.deltaY};return a.addEventListener("wheel",n,{passive:!1}),()=>a.removeEventListener("wheel",n)}var Ka=$`
  :host {
    display: block;
    --card-width: 100%;
    --card-height: 200px;
    --primary-color: #007AFF;
    /* Classic style backgrounds */
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
    border-radius: var(--dwc-border-radius, var(--ha-card-border-radius, 12px));
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
    border-radius: var(--dwc-border-radius, 16px);
    overflow: visible;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    /* Sky colors come from the condition and time of day (see sky.ts) */
    background: linear-gradient(to bottom, var(--dwc-sky-top, #2E6FC7), var(--dwc-sky-bottom, #8CC2EC));
    transition: --dwc-sky-top 2s ease-in-out, --dwc-sky-bottom 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.classic {
    background: linear-gradient(135deg, var(--day-gradient-start), var(--day-gradient-end));
    transition: background 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.classic.night {
    background: linear-gradient(135deg, var(--night-gradient-start), var(--night-gradient-end));
  }

  .weather-card.classic.sunset {
    background: linear-gradient(135deg, var(--sunset-gradient-start), var(--sunset-gradient-end));
  }

  .weather-card.classic.sunrise {
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
    z-index: 0;
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
    z-index: 1;
    border-radius: var(--dwc-border-radius, 16px);
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--dwc-text-color, white);
    text-shadow: var(--card-text-shadow);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
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

  .details--clock {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .details--clock .info-grid {
    flex: 1;
  }

  .condition {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
  }

  .primary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .primary-left {
    display: flex;
    flex-direction: column;
  }

  .feels-like {
    font-size: 16px;
    opacity: 0.85;
    margin-top: 8px;
  }

  .precipitation-outlook {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 10px 0 12px;
    font-size: 14px;
    opacity: 0.95;
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

  .info-item span:last-child {
    white-space: nowrap;
  }

  .info-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--dwc-text-color, white);
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
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 200;
    line-height: 1;
    color: var(--dwc-text-color, white);
    text-align: right;
    text-shadow: var(--card-text-shadow);
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .clock {
      font-size: 36px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  /* ---- Minimal layout ---- */
  .weather-card.layout--minimal {
    min-height: 56px;
  }

  .weather-card.layout--minimal .content {
    flex-direction: row;
    align-items: center;
    padding: 4px 12px;
    gap: 12px;
    min-height: inherit;
  }

  .mini-primary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    gap: 0;
  }

  .mini-condition {
    font-size: 11px;
    opacity: 0.85;
    font-weight: 400;
    white-space: nowrap;
  }

  .mini-temp {
    font-size: 44px;
    font-weight: 100;
    line-height: 1;
  }

  .mini-temp-low {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 1px;
  }

  .mini-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    min-width: 0;
  }

`;var m=(e)=>({r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)}),$n={clear:{day:[m("#2E6FC7"),m("#8CC2EC")],night:[m("#060A1C"),m("#1A2546")],cloudLight:m("#FFFFFF"),cloudShade:m("#C6D4E2"),coverage:0.12,twilight:1},partly:{day:[m("#3A74BD"),m("#A0C4E2")],night:[m("#0A1027"),m("#26314E")],cloudLight:m("#FFFFFF"),cloudShade:m("#B9C7D5"),coverage:0.45,twilight:0.9},cloudy:{day:[m("#5E7387"),m("#A5B3C0")],night:[m("#151A23"),m("#2F3845")],cloudLight:m("#EEF1F4"),cloudShade:m("#98A4B1"),coverage:0.85,twilight:0.45},rain:{day:[m("#45576A"),m("#7E8FA0")],night:[m("#0F141C"),m("#252D38")],cloudLight:m("#CDD4DC"),cloudShade:m("#6D7986"),coverage:0.9,twilight:0.3},heavy:{day:[m("#35424F"),m("#62707E")],night:[m("#0B0F15"),m("#1D232C")],cloudLight:m("#AEB6C0"),cloudShade:m("#4A5460"),coverage:1,twilight:0.2},storm:{day:[m("#262B38"),m("#4C5465")],night:[m("#090B11"),m("#1A1E28")],cloudLight:m("#9098A4"),cloudShade:m("#353C48"),coverage:1,twilight:0.2},snow:{day:[m("#7990A6"),m("#C6D2DD")],night:[m("#1C2432"),m("#424D5E")],cloudLight:m("#F4F7FA"),cloudShade:m("#AAB6C3"),coverage:0.8,twilight:0.4},fog:{day:[m("#66727C"),m("#8C959D")],night:[m("#23272D"),m("#464B52")],cloudLight:m("#C3C9CF"),cloudShade:m("#949DA5"),coverage:0.5,twilight:0.35}},Sa={sunrise:[m("#5A7BBE"),m("#F8B77E")],sunset:[m("#3D4E8E"),m("#F08E5C")]},An=m("#4A5366"),Fn=m("#1A202C"),xn=m("#FFC9A6"),Hn=m("#6F5874");function Wn(e){switch(e.toLowerCase()){case"sunny":case"clear":case"clear-night":case"windy":return"clear";case"partlycloudy":return"partly";case"rainy":case"rain":case"snowy-rainy":return"rain";case"pouring":case"hail":return"heavy";case"lightning":case"lightning-rainy":return"storm";case"snowy":case"snow":return"snow";case"foggy":case"fog":return"fog";default:return"cloudy"}}function H(e,o,a){return{r:Math.round(e.r+(o.r-e.r)*a),g:Math.round(e.g+(o.g-e.g)*a),b:Math.round(e.b+(o.b-e.b)*a)}}function J(e,o){return o===void 0?`rgb(${e.r}, ${e.g}, ${e.b})`:`rgba(${e.r}, ${e.g}, ${e.b}, ${o})`}var Ma=(e)=>e*e*(3-2*e);function W(e,o){let a=e.toLowerCase()==="clear-night"?"clear":Wn(e),n=$n[a],_=Math.max(0,Math.min(1,o.progress)),i=o.type==="night"||e.toLowerCase()==="clear-night",r=1,l=0;if(i)r=0;else if(o.type==="sunrise")r=Ma(_),l=Math.sin(_*Math.PI)*n.twilight;else if(o.type==="sunset")r=Ma(1-_),l=Math.sin(_*Math.PI)*n.twilight;let s=o.type==="sunrise"?Sa.sunrise:Sa.sunset,u=H(H(n.night[0],n.day[0],r),s[0],l),t=H(H(n.night[1],n.day[1],r),s[1],l),d=H(H(An,n.cloudLight,r),xn,l*0.6),k=H(H(Fn,n.cloudShade,r),Hn,l*0.5);return{top:u,bottom:t,cloudLight:d,cloudShade:k,coverage:n.coverage,daylight:r}}function Ba(){if(typeof CSS>"u"||typeof CSS.registerProperty!=="function")return;Object.entries({"--dwc-sky-top":"#2E6FC7","--dwc-sky-bottom":"#8CC2EC"}).forEach(([o,a])=>{try{CSS.registerProperty({name:o,syntax:"<color>",inherits:!1,initialValue:a})}catch{}})}var Je={high:{fps:60,particles:1,cloudLayers:3,details:!0,maxDpr:3},medium:{fps:30,particles:0.6,cloudLayers:2,details:!0,maxDpr:2},low:{fps:20,particles:0.35,cloudLayers:1,details:!1,maxDpr:1}};function Qe(e="high"){return{...Je[e]}}class P{ctx;cloudField=null;quality=Qe();children=[];constructor(e){this.ctx=e}attach(e,o){this.cloudField=e,this.quality=o,this.children.forEach((a)=>a.attach(e,o))}drawCloud(e,o,a,n){let _=this.ctx.shadowBlur,i=this.ctx.shadowColor,r=this.ctx.globalAlpha;this.ctx.shadowBlur=a*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${n*0.4})`,this.ctx.globalAlpha=n*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:e,y:o,r:a*0.4},{x:e+a*0.35,y:o,r:a*0.5},{x:e+a*0.65,y:o,r:a*0.48},{x:e+a*0.92,y:o,r:a*0.38},{x:e+a*0.18,y:o-a*0.28,r:a*0.38},{x:e+a*0.52,y:o-a*0.32,r:a*0.42},{x:e+a*0.78,y:o-a*0.28,r:a*0.38},{x:e+a*0.32,y:o-a*0.42,r:a*0.32},{x:e+a*0.62,y:o-a*0.48,r:a*0.36},{x:e+a*0.82,y:o-a*0.42,r:a*0.32}].forEach((s)=>{this.ctx.beginPath(),this.ctx.arc(s.x,s.y,s.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=_,this.ctx.shadowColor=i,this.ctx.globalAlpha=r}drawClouds(e,o,a,n=0.5){if(this.cloudField){this.cloudField.draw(this.ctx,e,o,a,this.quality.cloudLayers);return}let _=Math.max(2,Math.floor(o/150*n));for(let i=0;i<_;i++){let r=(e*3+i*150)%(o+200)-100,l=a*(0.2+i%3*0.15)+Math.sin(e*0.2+i)*8,s=40+i%3*15,u=0.6+i%2*0.2;this.drawCloud(r,l,s,u)}}}var Ja=[{base:0.34,reach:0.3,phase:0,speed:1,alpha:1},{base:0.24,reach:0.22,phase:2.1,speed:-0.7,alpha:0.7},{base:0.42,reach:0.18,phase:4.3,speed:0.5,alpha:0.5}];class Ie{ray=null;draw(e,o,a,n,_){let i=this.getRay(),r=_.details?_.particles>=1?3:5:8,l=_.details?Ja.length:1,s=0.75+Math.sin(o*0.07)*0.25;e.save(),e.globalCompositeOperation="lighter";for(let u=0;u<l;u++){let t=Ja[u],d=o*t.speed;this.drawBand(e,i,t,d,a,n,r*5,s*0.5,!1),this.drawBand(e,i,t,d,a,n,r,s,!0)}e.restore()}drawBand(e,o,a,n,_,i,r,l,s){for(let u=-r;u<_+r;u+=r){let t=u/Math.max(_,1),d=i*(a.base+Math.sin(t*5.2+n*0.11+a.phase)*0.07+Math.sin(t*13-n*0.19+a.phase*2)*0.025),k=(0.5+0.5*Math.sin(t*11+n*0.45+a.phase))*(0.6+0.4*Math.sin(t*4.5-n*0.2+a.phase)),p=s?k*(0.8+0.2*Math.sin(t*140+n*1.5)):k,w=i*a.reach*(0.65+0.35*Math.sin(t*21+n*0.5)),v=Math.min(1,Math.sin(Math.max(0,Math.min(1,t))*Math.PI)*1.6),f=a.alpha*l*v*(0.08+p*0.3);if(f<=0.01)continue;e.globalAlpha=f,e.drawImage(o,u,d-w,r+1,w*1.08)}}getRay(){if(this.ray)return this.ray;let e=document.createElement("canvas");e.width=1,e.height=128;let o=e.getContext("2d");if(o){let a=o.createLinearGradient(0,0,0,128);a.addColorStop(0,"rgba(150, 70, 255, 0)"),a.addColorStop(0.35,"rgba(140, 90, 255, 0.35)"),a.addColorStop(0.65,"rgba(60, 220, 190, 0.6)"),a.addColorStop(0.88,"rgba(90, 255, 160, 1)"),a.addColorStop(0.93,"rgba(170, 255, 200, 0.9)"),a.addColorStop(1,"rgba(90, 255, 160, 0)"),o.fillStyle=a,o.fillRect(0,0,1,128)}return this.ray=e,e}}var Un=29.530588853,Gn=Date.UTC(2000,0,6,18,14),Oe=22,Rn=0.9;function Qa(e=new Date){let a=(e.getTime()-Gn)/86400000/Un%1;return a<0?a+1:a}function Tn(e){let o=e;return()=>{return o=(o*1664525+1013904223)%4294967296,o/4294967296}}class eo{stars=[];starsKey="";moonSprite=null;moonKey="";shootingStar=null;nextShootingStar=0;aurora=new Ie;draw(e,o,a,n,_,i,r,l=!1){if(this.drawStars(e,o,a,n,r),l)this.aurora.draw(e,o,a,n,r);if(r.details)this.drawShootingStar(e,o,a,n);this.drawMoon(e,_,i,n)}drawStars(e,o,a,n,_){let i=`${Math.round(a)}x${Math.round(n)}:${_.particles}`;if(i!==this.starsKey)this.createStars(a,n,_.particles),this.starsKey=i;e.save();for(let r of this.stars){let l=0.65+Math.sin(o*r.twinkleSpeed+r.twinklePhase)*0.35,s=1-r.y/n*0.6;if(e.globalAlpha=r.alpha*l*s,e.fillStyle=r.color,e.beginPath(),e.arc(r.x,r.y,r.size,0,Math.PI*2),e.fill(),_.details&&r.size>1.1){let u=e.createRadialGradient(r.x,r.y,0,r.x,r.y,r.size*4);u.addColorStop(0,"rgba(255, 255, 255, 0.35)"),u.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=u,e.beginPath(),e.arc(r.x,r.y,r.size*4,0,Math.PI*2),e.fill()}}e.restore()}createStars(e,o,a){let n=Tn(Math.round(e)*31+Math.round(o)),_=Math.max(20,Math.min(260,Math.round(e*o/1600*a)));this.stars=[];for(let i=0;i<_;i++){let r=n();this.stars.push({x:n()*e,y:Math.pow(n(),1.4)*o*0.9,size:0.35+Math.pow(n(),3)*1.2,alpha:0.45+n()*0.55,twinkleSpeed:0.5+n()*2,twinklePhase:n()*Math.PI*2,color:r<0.15?"rgb(200, 215, 255)":r<0.3?"rgb(255, 236, 210)":"rgb(255, 255, 255)"})}}drawShootingStar(e,o,a,n){if(!this.nextShootingStar)this.nextShootingStar=o+4+Math.random()*8;if(!this.shootingStar&&o>=this.nextShootingStar)this.shootingStar={start:o,x:a*(0.15+Math.random()*0.7),y:n*(0.05+Math.random()*0.3),angle:Math.PI*(0.12+Math.random()*0.12)*(Math.random()<0.5?1:-1)+(Math.random()<0.5?0:Math.PI)},this.nextShootingStar=o+8+Math.random()*14;let _=this.shootingStar;if(!_)return;let i=(o-_.start)/Rn;if(i>=1){this.shootingStar=null;return}let r=Math.min(220,a*0.45),l=Math.cos(_.angle),s=Math.abs(Math.sin(_.angle)),u=_.x+l*r*i,t=_.y+s*r*i,d=60*Math.sin(i*Math.PI),k=Math.sin(i*Math.PI),p=e.createLinearGradient(u,t,u-l*d,t-s*d);p.addColorStop(0,`rgba(255, 255, 255, ${0.9*k})`),p.addColorStop(1,"rgba(255, 255, 255, 0)"),e.save(),e.strokeStyle=p,e.lineWidth=1.5,e.lineCap="round",e.beginPath(),e.moveTo(u,t),e.lineTo(u-l*d,t-s*d),e.stroke(),e.restore()}drawMoon(e,o,a,n){let _=Math.max(0.5,Math.min(1,n/200)),i=Oe*_,r=(1-Math.cos(a*Math.PI*2))/2,l=e.createRadialGradient(o.x,o.y,i*0.8,o.x,o.y,i*3.5);l.addColorStop(0,`rgba(220, 230, 255, ${0.08+r*0.18})`),l.addColorStop(1,"rgba(220, 230, 255, 0)"),e.fillStyle=l,e.beginPath(),e.arc(o.x,o.y,i*3.5,0,Math.PI*2),e.fill();let s=this.getMoonSprite(a,e.getTransform().a||1),u=(Oe+2)*2*_;e.drawImage(s,o.x-u/2,o.y-u/2,u,u)}getMoonSprite(e,o){let a=`${Math.round(e*200)}@${o}`;if(this.moonSprite&&a===this.moonKey)return this.moonSprite;let n=Oe,_=(n+2)*2,i=document.createElement("canvas");i.width=Math.ceil(_*o),i.height=Math.ceil(_*o);let r=i.getContext("2d");if(this.moonSprite=i,this.moonKey=a,!r)return i;r.scale(o,o);let l=_/2;r.fillStyle="rgba(160, 175, 205, 0.14)",r.beginPath(),r.arc(l,l,n,0,Math.PI*2),r.fill();let s=Math.cos(e*Math.PI*2);if(r.save(),e>0.5)r.translate(_,0),r.scale(-1,1);r.beginPath(),r.arc(l,l,n,-Math.PI/2,Math.PI/2,!1),r.ellipse(l,l,Math.max(0.01,n*Math.abs(s)),n,0,Math.PI/2,-Math.PI/2,s>0),r.closePath(),r.restore();let u=r.createRadialGradient(l-n*0.3,l-n*0.3,0,l,l,n);u.addColorStop(0,"#FFFEF6"),u.addColorStop(1,"#E2E0D6"),r.fillStyle=u,r.fill(),r.save(),r.clip();for(let[d,k,p]of[[-0.3,-0.2,0.34],[0.12,-0.38,0.24],[0.28,0.12,0.32],[-0.18,0.34,0.22],[0.48,-0.12,0.16]]){let w=l+d*n,v=l+k*n,f=r.createRadialGradient(w,v,0,w,v,p*n);f.addColorStop(0,"rgba(135, 140, 148, 0.3)"),f.addColorStop(0.6,"rgba(135, 140, 148, 0.18)"),f.addColorStop(1,"rgba(135, 140, 148, 0)"),r.fillStyle=f,r.fillRect(w-p*n,v-p*n,p*n*2,p*n*2)}let t=r.createRadialGradient(l,l,n*0.6,l,l,n);return t.addColorStop(0,"rgba(0, 0, 0, 0)"),t.addColorStop(1,"rgba(60, 60, 70, 0.18)"),r.fillStyle=t,r.fillRect(0,0,_,_),r.restore(),i}}class oo extends P{nightSky=new eo;draw(e,o,a,n,_,i,r=!1){let l=Date.now()*0.001,s=Me(n,o,a,_),u=s.x,t=s.y;if(n.type==="day"||n.type==="sunrise"||n.type==="sunset"){let d=n.type!=="day";if(this.quality.details)this.drawSunRays(u,t,l,d);if(this.drawSun(u,t,l),this.quality.details)this.drawLensFlare(u,t,o,a,d);if(n.type==="sunrise"||n.type==="sunset")this.drawHorizonReflection(u,t,a,l)}else if(n.type==="night")this.nightSky.draw(this.ctx,l,o,a,s,i??Qa(),this.quality,r);this.drawClouds(l,o,a,0.3)}drawSun(e,o,a){let n=48+Math.sin(a*0.15)*1.5,_=this.ctx.createRadialGradient(e,o,n*0.3,e,o,n*3.5);_.addColorStop(0,"rgba(255, 248, 230, 0.25)"),_.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),_.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),_.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),_.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),_.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),_.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=_,this.ctx.beginPath(),this.ctx.arc(e,o,n*3.5,0,Math.PI*2),this.ctx.fill();let i=this.ctx.createRadialGradient(e,o,n*0.5,e,o,n*2.2);i.addColorStop(0,"rgba(255, 250, 220, 0.35)"),i.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),i.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),i.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),i.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(e,o,n*2.2,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(e,o,n*0.6,e,o,n*1.6);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(e,o,n*1.6,0,Math.PI*2),this.ctx.fill();let l=this.ctx.createRadialGradient(e-n*0.1,o-n*0.1,0,e,o,n);l.addColorStop(0,"#FFFEF5"),l.addColorStop(0.15,"#FFF9E6"),l.addColorStop(0.3,"#FFF4D6"),l.addColorStop(0.5,"#FFEDC0"),l.addColorStop(0.7,"#FFE4A8"),l.addColorStop(0.85,"#FFDC95"),l.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(e,o,n,0,Math.PI*2),this.ctx.fill()}drawSunRays(e,o,a,n){let r=n?"255, 200, 140":"255, 245, 215",l=this.ctx.createRadialGradient(e,o,30,e,o,260);l.addColorStop(0,`rgba(${r}, 0.09)`),l.addColorStop(0.5,`rgba(${r}, 0.03)`),l.addColorStop(1,`rgba(${r}, 0)`),this.ctx.save(),this.ctx.globalCompositeOperation="lighter",this.ctx.fillStyle=l,this.ctx.beginPath();for(let s=0;s<14;s++){let u=a*0.02+s/14*Math.PI*2+Math.sin(a*0.3+s)*0.04,t=0.025+s%3*0.012,d=260*(0.6+0.4*Math.sin(a*0.4+s*1.7)**2);this.ctx.moveTo(e,o),this.ctx.lineTo(e+Math.cos(u-t)*d,o+Math.sin(u-t)*d),this.ctx.lineTo(e+Math.cos(u+t)*d,o+Math.sin(u+t)*d),this.ctx.closePath()}this.ctx.fill(),this.ctx.restore()}drawLensFlare(e,o,a,n,_){let i=a/2-e,r=n/2-o,l=[[1.2,10,_?"255, 190, 120":"255, 240, 200",0.08],[1.6,22,_?"255, 160, 120":"180, 220, 255",0.05],[1.9,5,"255, 255, 255",0.1],[2.3,34,_?"255, 180, 140":"200, 255, 220",0.035]];this.ctx.save(),this.ctx.globalCompositeOperation="lighter";for(let[s,u,t,d]of l){let k=e+i*s,p=o+r*s,w=this.ctx.createRadialGradient(k,p,0,k,p,u);w.addColorStop(0,`rgba(${t}, ${d})`),w.addColorStop(0.7,`rgba(${t}, ${d*0.6})`),w.addColorStop(1,`rgba(${t}, 0)`),this.ctx.fillStyle=w,this.ctx.beginPath(),this.ctx.arc(k,p,u,0,Math.PI*2),this.ctx.fill()}this.ctx.restore()}drawHorizonReflection(e,o,a,n){let _=48+Math.sin(n*0.15)*1.5,i=a*0.85;if(o>=i-50){let r=Math.max(0,(i-o)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${r})`,this.ctx.beginPath(),this.ctx.ellipse(e,i,_*1.5,_*0.5,0,0,Math.PI*2),this.ctx.fill()}}}var Ze=[{density:6,speed:[380,460],length:[8,12],width:0.6,alpha:0.28},{density:3.5,speed:[560,680],length:[14,20],width:0.9,alpha:0.42},{density:1.4,speed:[820,980],length:[22,30],width:1.3,alpha:0.58}],ao=0.12,Za=0.3;class E extends P{rainDrops=[];splashes=[];lastTime=0;dropsKey="";draw(e,o,a,n,_=!1){let i=Date.now()*0.001;this.drawClouds(i,o,a,_?1:0.8),this.drawRain(o,a,_)}drawRain(e,o,a){let n=`${Math.round(e)}x${Math.round(o)}:${a}:${this.quality.particles}`;if(n!==this.dropsKey)this.createDrops(e,o,a),this.dropsKey=n;let _=Date.now()*0.001,i=this.lastTime>0?Math.min(_-this.lastTime,0.1):0.016666666666666666;this.lastTime=_,this.ctx.save(),this.ctx.lineCap="round",Ze.forEach((r,l)=>{this.ctx.beginPath();for(let s of this.rainDrops){if(s.layer!==l)continue;if(s.y+=s.speed*i,s.x+=s.speed*ao*i,s.y-s.length>o){if(this.quality.details&&l===Ze.length-1&&Math.random()<(a?0.7:0.4))this.splashes.push({x:s.x-(s.y-o)*ao,y:o-2-Math.random()*6,age:0,size:3+Math.random()*3});this.resetDrop(s,e)}if(s.x>e+20)s.x-=e+40;this.ctx.moveTo(s.x-s.length*ao,s.y-s.length),this.ctx.lineTo(s.x,s.y)}this.ctx.strokeStyle=`rgba(215, 228, 242, ${r.alpha*(a?1.15:1)})`,this.ctx.lineWidth=r.width,this.ctx.stroke()}),this.drawSplashes(i),this.ctx.restore()}createDrops(e,o,a){this.rainDrops=[],this.splashes=[];let n=e*o/1e4;Ze.forEach((_,i)=>{let r=Math.min(400,Math.round(n*_.density*(a?2:1)*this.quality.particles));for(let l=0;l<r;l++){let s={layer:i,x:0,y:0,speed:0,length:0};this.resetDrop(s,e),s.y=Math.random()*(o+s.length),this.rainDrops.push(s)}})}resetDrop(e,o){let a=Ze[e.layer];e.speed=a.speed[0]+Math.random()*(a.speed[1]-a.speed[0]),e.length=a.length[0]+Math.random()*(a.length[1]-a.length[0]),e.y=-Math.random()*40,e.x=Math.random()*(o+40)-40}drawSplashes(e){if(this.splashes=this.splashes.filter((o)=>(o.age+=e)<Za),this.splashes.length>60)this.splashes.splice(0,this.splashes.length-60);this.ctx.lineWidth=0.8;for(let o of this.splashes){let a=o.age/Za,n=o.size*(0.4+a);this.ctx.strokeStyle=`rgba(220, 232, 245, ${0.45*(1-a)})`,this.ctx.beginPath(),this.ctx.ellipse(o.x,o.y,n,n*0.35,0,Math.PI,0),this.ctx.stroke();let _=Math.sin(a*Math.PI)*o.size*1.2;this.ctx.fillStyle=`rgba(220, 232, 245, ${0.5*(1-a)})`,this.ctx.fillRect(o.x-n*0.8,o.y-_,1,1),this.ctx.fillRect(o.x+n*0.7,o.y-_*0.8,1,1)}}}var Ca=[{density:5,speed:[12,20],size:[1.2,2],alpha:0.6},{density:2.5,speed:[22,34],size:[2.4,3.6],alpha:0.85},{density:0.9,speed:[38,55],size:[4,6.5],alpha:0.95}],ye=32;class no extends P{snowflakes=[];lastTime=0;flakesKey="";sprite=null;draw(e,o,a,n){let _=Date.now()*0.001;this.drawClouds(_,o,a,0.7),this.drawSnowflakes(o,a)}drawSnowflakes(e,o){let a=`${Math.round(e)}x${Math.round(o)}:${this.quality.particles}`;if(a!==this.flakesKey)this.createFlakes(e,o),this.flakesKey=a;let n=this.getSprite(),_=Date.now()*0.001,i=this.lastTime>0?Math.min(_-this.lastTime,0.1):0.016666666666666666;this.lastTime=_,this.ctx.save();for(let r of this.snowflakes){r.y+=r.speed*i;let l=Math.sin(_*r.swaySpeed+r.swayPhase)*r.swayAmount;if(r.x+=(r.speed*0.15+l)*i,r.y-r.size>o)r.y=-r.size-Math.random()*20,r.x=Math.random()*e;if(r.x>e+10)r.x-=e+20;if(r.x<-10)r.x+=e+20;let s=r.size*2;this.ctx.globalAlpha=Ca[r.layer].alpha,this.ctx.drawImage(n,r.x-s/2,r.y-s/2,s,s)}this.ctx.restore()}createFlakes(e,o){this.snowflakes=[];let a=e*o/1e4;Ca.forEach((n,_)=>{let i=Math.min(250,Math.round(a*n.density*this.quality.particles));for(let r=0;r<i;r++)this.snowflakes.push({layer:_,x:Math.random()*e,y:Math.random()*o,speed:n.speed[0]+Math.random()*(n.speed[1]-n.speed[0]),size:n.size[0]+Math.random()*(n.size[1]-n.size[0]),swayPhase:Math.random()*Math.PI*2,swaySpeed:0.6+Math.random()*0.8,swayAmount:6+_*6})})}getSprite(){if(this.sprite)return this.sprite;let e=document.createElement("canvas");e.width=ye,e.height=ye;let o=e.getContext("2d");if(o){let a=ye/2,n=o.createRadialGradient(a,a,0,a,a,a);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(0.45,"rgba(255, 255, 255, 0.85)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=n,o.fillRect(0,0,ye,ye)}return this.sprite=e,e}}class me extends P{draw(e,o,a,n){let _=Date.now()*0.001;this.drawClouds(_,o,a,0.7)}}var Na=[{y:0.3,speed:5,alpha:0.55,scaleY:0.9,seed:1},{y:0.58,speed:-8,alpha:0.6,scaleY:1.1,seed:2},{y:0.85,speed:12,alpha:0.6,scaleY:1.3,seed:3}],ee=600,Ce=140;function Ln(e){let o=e*7919;return()=>{return o=(o*1664525+1013904223)%4294967296,o/4294967296}}class _o extends P{sprites=[];spriteKey="";draw(e,o,a,n){let _=Date.now()*0.001,i=W("foggy",n).cloudLight;this.ensureSprites(i);let r=this.ctx.createLinearGradient(0,a*0.25,0,a);r.addColorStop(0,J(i,0)),r.addColorStop(1,J(i,0.2)),this.ctx.fillStyle=r,this.ctx.fillRect(0,0,o,a);let l=Math.max(0.4,Math.min(1.2,a/200));Na.forEach((s,u)=>{let t=ee*l,d=Ce*l*s.scaleY,k=s.y*a-d/2+Math.sin(_*0.2+u)*4,p=_*s.speed%t;if(p>0)p-=t;this.ctx.save(),this.ctx.globalAlpha=s.alpha;for(;p<o;p+=t)this.ctx.drawImage(this.sprites[u],p,k,t,d);this.ctx.restore()})}ensureSprites(e){let o=this.ctx.getTransform().a||1,a=`${Math.round(e.r/6)},${Math.round(e.g/6)},${Math.round(e.b/6)}@${o}`;if(a===this.spriteKey)return;this.spriteKey=a,this.sprites=Na.map((n)=>this.renderSprite(n.seed,e,o))}renderSprite(e,o,a){let n=document.createElement("canvas");n.width=Math.ceil(ee*a),n.height=Math.ceil(Ce*a);let _=n.getContext("2d");if(!_)return n;_.scale(a,a);let i=Ln(e),r=16;for(let l=0;l<r;l++){let s=l/r*ee+i()*30,u=Ce*(0.35+i()*0.3),t=Ce*(0.2+i()*0.3),d=0.25+i()*0.65;for(let k of[-ee,0,ee]){let p=s+k;if(p+t*2.2<0||p-t*2.2>ee)continue;_.save(),_.translate(p,u),_.scale(2.2,0.55);let w=_.createRadialGradient(0,0,0,0,0,t);w.addColorStop(0,J(o,d)),w.addColorStop(1,J(o,0)),_.fillStyle=w,_.beginPath(),_.arc(0,0,t,0,Math.PI*2),_.fill(),_.restore()}}return n}}var Ne=[{density:1.6,speed:[280,360],size:[1.5,2.2],alpha:0.6},{density:0.9,speed:[420,520],size:[2.6,3.4],alpha:0.85},{density:0.4,speed:[600,720],size:[3.8,5.2],alpha:1}],Xn=1400,we=32;class io extends P{rainyAnimation;hailStones=[];stonesKey="";lastTime=0;sprite=null;constructor(e){super(e);this.rainyAnimation=new E(e),this.children.push(this.rainyAnimation)}draw(e,o,a,n){let _=Date.now()*0.001;this.drawClouds(_,o,a,1),this.rainyAnimation.drawRain(o,a,!1),this.drawHailStones(o,a)}drawHailStones(e,o){let a=`${Math.round(e)}x${Math.round(o)}:${this.quality.particles}`;if(a!==this.stonesKey)this.createStones(e,o),this.stonesKey=a;let n=this.getSprite(),_=Date.now()*0.001,i=this.lastTime>0?Math.min(_-this.lastTime,0.1):0.016666666666666666;this.lastTime=_,this.ctx.save();for(let r of this.hailStones){if(r.bounces>0)r.vy+=Xn*i;if(r.x+=r.vx*i,r.y+=r.vy*i,r.y>=r.ground&&r.vy>0)if(r.bounces<2)r.y=r.ground,r.vy=-r.vy*(r.bounces===0?0.3:0.25),r.vx=(Math.random()-0.5)*60,r.bounces++;else this.resetStone(r,e,o);if(r.x>e+10)r.x-=e+20;if(r.x<-10)r.x+=e+20;let l=r.size*2;this.ctx.globalAlpha=Ne[r.layer].alpha,this.ctx.drawImage(n,r.x-l/2,r.y-l/2,l,l)}this.ctx.restore()}createStones(e,o){this.hailStones=[];let a=e*o/1e4;Ne.forEach((n,_)=>{let i=Math.min(200,Math.round(a*n.density*this.quality.particles));for(let r=0;r<i;r++){let l={layer:_,x:0,y:0,vx:0,vy:0,size:0,ground:0,bounces:0};this.resetStone(l,e,o),l.y=Math.random()*l.ground,this.hailStones.push(l)}})}resetStone(e,o,a){let n=Ne[e.layer];e.x=Math.random()*o,e.y=-10-Math.random()*40,e.vy=n.speed[0]+Math.random()*(n.speed[1]-n.speed[0]),e.vx=e.vy*0.1,e.size=n.size[0]+Math.random()*(n.size[1]-n.size[0]),e.ground=a-2-(Ne.length-1-e.layer)*6-Math.random()*4,e.bounces=0}getSprite(){if(this.sprite)return this.sprite;let e=document.createElement("canvas");e.width=we,e.height=we;let o=e.getContext("2d");if(o){let a=we/2,n=o.createRadialGradient(a,a,0,a,a,a);n.addColorStop(0,"rgba(245, 250, 255, 1)"),n.addColorStop(0.6,"rgba(215, 230, 245, 0.95)"),n.addColorStop(0.8,"rgba(200, 220, 240, 0.5)"),n.addColorStop(1,"rgba(200, 220, 240, 0)"),o.fillStyle=n,o.fillRect(0,0,we,we),o.fillStyle="rgba(255, 255, 255, 0.9)",o.beginPath(),o.arc(a-a*0.25,a-a*0.25,a*0.18,0,Math.PI*2),o.fill()}return this.sprite=e,e}}var $e=0.4;class ro extends P{rainyAnimation;bolts=[];flashActive=!1;constructor(e){super(e);this.rainyAnimation=new E(e),this.children.push(this.rainyAnimation)}draw(e,o,a,n,_=!0){let i=Date.now()*0.001,r=this.getFlashIntensity(i);if(this.updateBolts(i,r,o,a),this.drawBolts(i),this.drawClouds(i,o,a,1),_)this.rainyAnimation.drawRain(o,a,!1);this.drawLightning(o,a,r)}getFlashIntensity(e){return Math.max(0,Math.sin(e*2.5)*Math.sin(e*5.3)*Math.sin(e*7.1))}updateBolts(e,o,a,n){this.bolts=this.bolts.filter((i)=>e<i.startsAt+i.duration);let _=o>$e;if(_&&!this.flashActive){if(this.bolts.push(this.createBolt(e,a,n)),Math.random()<0.3)this.bolts.push(this.createBolt(e+0.08+Math.random()*0.1,a,n))}this.flashActive=_}createBolt(e,o,a){let n=o*(0.1+Math.random()*0.8),_=a*0.25,i=a*(0.6+Math.random()*0.3),r=8+Math.floor(Math.random()*5),l=(i-_)/r,s=Math.min(30,o*0.06),u=[{x:n,y:_}],t=[];for(let d=1;d<=r;d++){let p={x:u[d-1].x+(Math.random()-0.5)*s*2,y:_+l*d};if(u.push(p),d<r-1&&Math.random()<0.25){let w=Math.random()<0.5?-1:1,v=[p],f=2+Math.floor(Math.random()*3);for(let V=1;V<=f;V++){let M=v[V-1];v.push({x:M.x+w*s*(0.3+Math.random()*0.5),y:M.y+l*(0.5+Math.random()*0.5)})}t.push(v)}}return{trunk:u,branches:t,startsAt:e,duration:0.2+Math.random()*0.15}}drawBolts(e){this.bolts.forEach((o)=>{let a=e-o.startsAt;if(a<0)return;let n=0.75+Math.random()*0.25,_=Math.max(0,1-a/o.duration)*n;this.ctx.save(),this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=_,this.ctx.shadowColor="rgba(200, 220, 255, 1)",o.branches.forEach((i)=>this.strokePath(i,1.2,8)),this.strokePath(o.trunk,2.5,16),this.ctx.restore()})}strokePath(e,o,a){this.ctx.beginPath(),this.ctx.moveTo(e[0].x,e[0].y);for(let n=1;n<e.length;n++)this.ctx.lineTo(e[n].x,e[n].y);this.ctx.strokeStyle="rgba(255, 255, 255, 1)",this.ctx.lineWidth=o,this.ctx.shadowBlur=a,this.ctx.stroke()}drawLightning(e,o,a){if(a>$e){let n=(a-$e)/(1-$e),_=n*0.6,i=Math.min(_,Math.sin(n*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${i})`,this.ctx.fillRect(0,0,e,o)}}}var $a=6,lo=240,so=120,Y=[{scale:0.55,speed:3,alpha:0.6,top:0.02,bottom:0.3,density:1.4,bias:-0.1},{scale:0.8,speed:6,alpha:0.85,top:0.08,bottom:0.42,density:0.9,bias:0.1},{scale:1.15,speed:10,alpha:0.95,top:0.15,bottom:0.5,density:0.55,bias:0.25}];function Aa(e){let o=e;return()=>{return o=(o*1664525+1013904223)%4294967296,o/4294967296}}class uo{sprites=[];spriteKey="";clouds=[];cloudsSize="";coverage=-1;targetCoverage=0;light={r:255,g:255,b:255};shade={r:200,g:210,b:220};lastTime=0;wind=1;targetWind=1;drift=Y.map(()=>0);setWeather(e,o){let a=W(e,o);if(this.light=a.cloudLight,this.shade=a.cloudShade,this.targetCoverage=a.coverage,this.coverage<0)this.coverage=a.coverage}setWind(e){this.targetWind=Math.max(1,e)}settle(){this.coverage=this.targetCoverage}draw(e,o,a,n,_=Y.length){let i=e.getTransform().a||1;if(this.ensureSprites(i),this.cloudsSize!==`${a}x${n}`)this.createClouds(a,n);let r=Math.max(0.35,Math.min(1,n/200)),l=this.lastTime?Math.min(0.1,Math.max(0,o-this.lastTime)):0;this.lastTime=o,this.coverage+=(this.targetCoverage-this.coverage)*Math.min(1,l*1.5),this.wind+=(this.targetWind-this.wind)*Math.min(1,l*0.8),Y.forEach((u,t)=>{this.drift[t]+=u.speed*this.wind*l});let s=Y.length-Math.max(1,Math.min(Y.length,_));for(let u of this.clouds){if(u.layer<s)continue;let t=Math.max(0,Math.min(1,(this.coverage-u.threshold)*6));if(t<=0)continue;let d=Y[u.layer],k=lo*d.scale*r,p=so*d.scale*r,w=a+k*2,v=(u.offset*w+this.drift[u.layer])%w-k,f=u.y*n+Math.sin(o*0.15+u.bobPhase)*3-p/2;if(e.save(),e.globalAlpha=d.alpha*t,u.flip)e.translate(v+k,f),e.scale(-1,1),e.drawImage(this.sprites[u.sprite],0,0,k,p);else e.drawImage(this.sprites[u.sprite],v,f,k,p);e.restore()}}createClouds(e,o){let a=Aa(Math.round(e)*7+Math.round(o));this.clouds=[],Y.forEach((n,_)=>{let i=Math.max(2,Math.round(e/100*n.density));for(let r=0;r<i;r++)this.clouds.push({layer:_,sprite:Math.floor(a()*$a),offset:(r+a()*0.6)/i,y:n.top+a()*(n.bottom-n.top),threshold:r/i*0.8+a()*0.05+n.bias,bobPhase:a()*Math.PI*2,flip:a()<0.5})}),this.cloudsSize=`${e}x${o}`}ensureSprites(e){let o=[this.light.r,this.light.g,this.light.b,this.shade.r,this.shade.g,this.shade.b].map((a)=>Math.round(a/6)).join(",")+`@${e}`;if(o===this.spriteKey)return;this.spriteKey=o,this.sprites=Array.from({length:$a},(a,n)=>this.renderSprite(n,e))}renderSprite(e,o){let a=document.createElement("canvas");a.width=Math.ceil(lo*o),a.height=Math.ceil(so*o);let n=a.getContext("2d");if(!n)return a;n.scale(o,o);let _=Aa(e*9973+17),i=lo,r=so,l=r*0.78,s=14+Math.floor(_()*6),u=[];for(let k=0;k<s;k++){let p=_(),w=i*(0.2+p*0.6),v=Math.sin(p*Math.PI),f=r*(0.16+v*(0.14+_()*0.12)),V=l-f*(0.45+_()*0.25)-v*r*0.12;u.push({x:w,y:V,r:f});let M=n.createRadialGradient(w,V,0,w,V,f);M.addColorStop(0,"rgba(255, 255, 255, 1)"),M.addColorStop(0.7,"rgba(255, 255, 255, 0.95)"),M.addColorStop(0.88,"rgba(255, 255, 255, 0.5)"),M.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=M,n.beginPath(),n.arc(w,V,f,0,Math.PI*2),n.fill()}n.globalCompositeOperation="destination-in";let t=n.createLinearGradient(0,0,0,r);t.addColorStop(0,"rgba(0, 0, 0, 1)"),t.addColorStop(0.72,"rgba(0, 0, 0, 1)"),t.addColorStop(0.9,"rgba(0, 0, 0, 0)"),n.fillStyle=t,n.fillRect(0,0,i,r),n.globalCompositeOperation="source-atop";let d=n.createLinearGradient(0,r*0.1,0,l);return d.addColorStop(0,J(this.light)),d.addColorStop(0.45,J(this.light)),d.addColorStop(1,J(this.shade)),n.fillStyle=d,n.fillRect(0,0,i,r),u.sort((k,p)=>p.y-k.y).forEach(({x:k,y:p,r:w})=>{let v=k-w*0.15,f=p-w*0.35,V=n.createRadialGradient(v,f,0,v,f,w*0.85);V.addColorStop(0,J(this.light,0.55)),V.addColorStop(1,J(this.light,0)),n.fillStyle=V,n.beginPath(),n.arc(v,f,w*0.85,0,Math.PI*2),n.fill()}),a}}class to{sprite=null;spriteDpr=0;beads=[];runners=[];size="";lastTime=0;draw(e,o,a,n,_,i){let r=e.getTransform().a||1,l=this.getSprite(r),s=Math.max(0.6,Math.min(1,n/200)),u=Math.round(a*n/2600*_*i.particles),t=Math.max(1,Math.round(a/130*_*i.particles)),d=`${Math.round(a)}x${Math.round(n)}`;if(d!==this.size){this.size=d,this.beads=[],this.runners=[];for(let p=0;p<u;p++){let w=this.createBead(a,n,s);w.age=Math.random()*w.life,this.beads.push(w)}}let k=this.lastTime?Math.min(0.1,Math.max(0,o-this.lastTime)):0;if(this.lastTime=o,this.beads.length<u&&Math.random()<k*u*0.4)this.beads.push(this.createBead(a,n,s));while(this.runners.length<t)this.runners.push(this.createRunner(a,n,s,!0));e.save(),this.beads=this.beads.filter((p)=>(p.age+=k)<p.life);for(let p of this.beads){let w=Math.min(1,p.age/0.25,(p.life-p.age)/0.8);this.drawDrop(e,l,p.x,p.y,p.r,p.r,w)}for(let p of this.runners){if(p.wait>0)p.wait-=k;else{if(p.y+=p.speed*k,p.x+=Math.sin(p.y*0.08+p.wobble)*6*k,Math.random()<k*0.8)p.wait=0.2+Math.random()*1.2;if(p.y-p.lastTrail>p.r*(2+Math.random()*2)&&this.beads.length<u*1.6)p.lastTrail=p.y,this.beads.push({x:p.x+(Math.random()-0.5)*p.r*1.2,y:p.y-p.r*(1.2+Math.random()*0.6),r:p.r*(0.25+Math.random()*0.25),age:0.25,life:2+Math.random()*3})}let w=p.wait>0?1.05:1.3;this.drawDrop(e,l,p.x,p.y,p.r,p.r*w,1)}e.restore(),this.runners=this.runners.map((p)=>p.y-p.r>n?this.createRunner(a,n,s,!1):p)}drawDrop(e,o,a,n,_,i,r){e.globalAlpha=r,e.drawImage(o,a-_,n-i,_*2,i*2)}createBead(e,o,a){return{x:Math.random()*e,y:Math.random()*o,r:(1.3+Math.pow(Math.random(),2)*3.4)*a,age:0,life:4+Math.random()*12}}createRunner(e,o,a,n){let _=(4+Math.random()*3)*a;return{x:Math.random()*e,y:n?Math.random()*o*0.8:-_-Math.random()*o*0.3,r:_,wait:Math.random()*3,speed:25+Math.random()*45,wobble:Math.random()*Math.PI*2,lastTrail:-1/0}}getSprite(e){if(this.sprite&&this.spriteDpr===e)return this.sprite;let o=16,a=document.createElement("canvas");a.width=a.height=Math.ceil(o*2*e);let n=a.getContext("2d");if(this.sprite=a,this.spriteDpr=e,!n)return a;n.scale(e,e);let _=n.createRadialGradient(o,o-2,0,o,o,o);_.addColorStop(0,"rgba(255, 255, 255, 0.1)"),_.addColorStop(0.65,"rgba(255, 255, 255, 0.18)"),_.addColorStop(0.86,"rgba(15, 25, 40, 0.45)"),_.addColorStop(1,"rgba(15, 25, 40, 0)"),n.fillStyle=_,n.fillRect(0,0,o*2,o*2);let i=n.createRadialGradient(o,o*1.45,0,o,o*1.45,o*0.55);i.addColorStop(0,"rgba(255, 255, 255, 0.55)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=i,n.fillRect(0,0,o*2,o*2);let r=o*0.68,l=o*0.62,s=n.createRadialGradient(r,l,0,r,l,o*0.3);return s.addColorStop(0,"rgba(255, 255, 255, 0.95)"),s.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=s,n.fillRect(0,0,o*2,o*2),a}}var Dn=["#6E9F3A","#86B34A","#5C8A2E"],En=["#D9892B","#E3B23C","#B8522A"];class po{gusts=[];leaves=[];sprites=[];spriteKey="";lastTime=0;draw(e,o,a,n,_,i,r,l){let s=this.lastTime?Math.min(0.1,Math.max(0,o-this.lastTime)):0;this.lastTime=o;let u=Math.max(0.5,Math.min(1,n/200)),t=Math.max(2,Math.round(a/60*_*Math.max(0.5,l.particles)));while(this.gusts.length<t)this.gusts.push(this.createGust(a,n,u,!0));if(this.gusts.length>t)this.gusts.length=t;e.save(),e.lineCap="round";let d=0.35+r*0.45;if(this.gusts=this.gusts.map((k)=>{if(k.age+=s,k.x+=k.speed*s,k.age>=k.life||k.x-k.length>a)return this.createGust(a,n,u,!1);return this.drawGust(e,k,d),k}),i&&l.details)this.drawLeaves(e,s,a,n,u,r,l);e.restore()}createGust(e,o,a,n){let _=(90+Math.random()*110)*a;return{x:n?Math.random()*e:-_-Math.random()*e*0.5,y:o*(0.1+Math.random()*0.75),length:_,speed:(260+Math.random()*200)*a,amplitude:(3+Math.random()*6)*a,phase:Math.random()*Math.PI*2,age:0,life:1.4+Math.random()*1.6}}drawGust(e,o,a){let n=Math.sin(Math.min(1,o.age/o.life)*Math.PI);if(n<=0.02)return;let _=o.x-o.length,i=e.createLinearGradient(_,0,o.x,0);i.addColorStop(0,"rgba(255, 255, 255, 0)"),i.addColorStop(0.6,`rgba(255, 255, 255, ${0.85*a*n})`),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=i,e.lineWidth=1.8,e.beginPath();let r=12;for(let l=0;l<=r;l++){let s=_+o.length*l/r,u=o.y+Math.sin(s*0.035+o.phase)*o.amplitude;if(l===0)e.moveTo(s,u);else e.lineTo(s,u)}e.stroke()}drawLeaves(e,o,a,n,_,i,r){let l=e.getTransform().a||1;this.ensureSprites(l);let s=Math.max(2,Math.round(a/70*r.particles));while(this.leaves.length<s)this.leaves.push(this.createLeaf(a,n,_,!0));if(this.leaves.length>s)this.leaves.length=s;e.globalAlpha=0.55+i*0.45,this.leaves=this.leaves.map((u)=>{if(u.x+=u.speed*o,u.flutter+=o*3,u.y+=Math.sin(u.flutter)*30*o*_+12*o*_,u.angle+=u.spin*o,u.x-u.size>a||u.y-u.size>n)return this.createLeaf(a,n,_,!1);return e.save(),e.translate(u.x,u.y),e.rotate(u.angle),e.scale(1,Math.max(0.15,Math.abs(Math.cos(u.flutter*0.7)))),e.drawImage(this.sprites[u.sprite],-u.size,-u.size/2,u.size*2,u.size),e.restore(),u})}createLeaf(e,o,a,n){let _=(6+Math.random()*5)*a;return{x:n?Math.random()*e:-_*2-Math.random()*e*0.6,y:o*(0.1+Math.random()*0.7),speed:(140+Math.random()*120)*a,angle:Math.random()*Math.PI*2,spin:(Math.random()<0.5?-1:1)*(2+Math.random()*4),size:_,flutter:Math.random()*Math.PI*2,sprite:Math.floor(Math.random()*3)}}ensureSprites(e){let o=new Date().getMonth(),a=o>=8&&o<=10?En:Dn,n=`${a[0]}@${e}`;if(n===this.spriteKey)return;this.spriteKey=n,this.sprites=a.map((_)=>{let i=document.createElement("canvas");i.width=Math.ceil(24*e),i.height=Math.ceil(12*e);let r=i.getContext("2d");if(!r)return i;return r.scale(e,e),r.fillStyle=_,r.beginPath(),r.moveTo(1,6),r.quadraticCurveTo(12,-2,23,6),r.quadraticCurveTo(12,14,1,6),r.fill(),r.strokeStyle="rgba(0, 0, 0, 0.25)",r.lineWidth=0.8,r.beginPath(),r.moveTo(2,6),r.lineTo(22,6),r.stroke(),i})}}class ko extends P{draw(e,o,a,n,_){let i=Date.now()*0.001,r=Me(n,o,a,_),l=r.x,s=r.y;if(n.type==="day"||n.type==="sunrise"||n.type==="sunset"){if(this.drawSun(l,s,i),n.type==="sunrise"||n.type==="sunset")this.drawHorizonReflection(l,s,a,i)}else if(n.type==="night")this.drawNightSky(o,a,i,r);this.drawClouds(i,o,a,0.3)}drawSun(e,o,a){let n=48+Math.sin(a*0.15)*1.5,_=this.ctx.createRadialGradient(e,o,n*0.3,e,o,n*3.5);_.addColorStop(0,"rgba(255, 248, 230, 0.25)"),_.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),_.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),_.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),_.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),_.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),_.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=_,this.ctx.beginPath(),this.ctx.arc(e,o,n*3.5,0,Math.PI*2),this.ctx.fill();let i=this.ctx.createRadialGradient(e,o,n*0.5,e,o,n*2.2);i.addColorStop(0,"rgba(255, 250, 220, 0.35)"),i.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),i.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),i.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),i.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(e,o,n*2.2,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(e,o,n*0.6,e,o,n*1.6);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(e,o,n*1.6,0,Math.PI*2),this.ctx.fill();let l=this.ctx.createRadialGradient(e-n*0.1,o-n*0.1,0,e,o,n);l.addColorStop(0,"#FFFEF5"),l.addColorStop(0.15,"#FFF9E6"),l.addColorStop(0.3,"#FFF4D6"),l.addColorStop(0.5,"#FFEDC0"),l.addColorStop(0.7,"#FFE4A8"),l.addColorStop(0.85,"#FFDC95"),l.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(e,o,n,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(e,o,a,n){let _=48+Math.sin(n*0.15)*1.5,i=a*0.85;if(o>=i-50){let r=Math.max(0,(i-o)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${r})`,this.ctx.beginPath(),this.ctx.ellipse(e,i,_*1.5,_*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(e,o,a,n){this.ctx.fillStyle="#FFFFFF";for(let r=0;r<20;r++){let l=(e*0.2+r*47)%e,s=(o*0.2+r*23)%(o*0.6),u=Math.sin(a*0.8+r)*0.5+0.5;this.ctx.globalAlpha=u*0.8,this.ctx.beginPath(),this.ctx.arc(l,s,1.5,0,Math.PI*2),this.ctx.fill()}let{x:_,y:i}=n;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(_,i,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(_-8,i-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class ve extends P{rainDrops=[];lastTime=0;draw(e,o,a,n,_=!1){let i=Date.now()*0.001;this.drawClouds(i,o,a,_?1:0.8),this.drawRain(o,a,_)}drawRain(e,o,a){let n=a?130:90;if(this.rainDrops.length!==n){this.rainDrops=[];for(let l=0;l<n;l++)this.rainDrops.push({x:Math.random()*e,y:Math.random()*o-Math.random()*200,speed:a?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:a?1.2+Math.random()*1:0.8+Math.random()*0.7,length:a?8+Math.random()*10:6+Math.random()*8,alpha:a?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let _=Date.now()*0.001,i=this.lastTime>0?Math.min(_-this.lastTime,0.1):0.016666666666666666;this.lastTime=_;let r=_;for(let l=0;l<this.rainDrops.length;l++){let s=this.rainDrops[l];if(s.y+=s.speed*i,s.y>o+50)s.y=-50-Math.random()*100,s.x=Math.random()*e;let u=s.windOffset*(1+Math.sin(r*0.5+s.phase)*0.2),t=s.x+u;if(t<-10)s.x=e+10;else if(t>e+10)s.x=-10;this.drawRainDrop(t,s.y,s)}}drawRainDrop(e,o,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha;let n=o-a.length*0.5,_=o+a.length*0.5,i=a.alpha,r=a.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+i+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+r+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(e,n),this.ctx.quadraticCurveTo(e-a.width*0.3,o,e-a.width,_-a.width*0.3),this.ctx.arc(e,_,a.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(e+a.width*0.3,o,e,n),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class go extends P{snowflakes=[];lastTime=0;draw(e,o,a,n){let _=Date.now()*0.001;this.drawClouds(_,o,a,0.7),this.drawSnowflakes(o,a)}drawSnowflakes(e,o){let a=Math.floor(e*o/5000),n=Math.max(30,Math.min(a,80));if(this.snowflakes.length!==n){this.snowflakes=[];for(let l=0;l<n;l++)this.snowflakes.push({x:Math.random()*e,y:Math.random()*o-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let _=Date.now()*0.001,i=this.lastTime>0?Math.min(_-this.lastTime,0.1):0.016666666666666666;this.lastTime=_;let r=_;this.ctx.lineCap="round";for(let l=0;l<this.snowflakes.length;l++){let s=this.snowflakes[l],u=Math.sin(r*s.swaySpeed+s.swayPhase)*2;if(s.y+=s.speedY*i,s.x+=(s.speedX+u)*i,s.rotation+=s.rotationSpeed*i,s.y>o+20)s.y=-20-Math.random()*50,s.x=Math.random()*e;if(s.x<-10)s.x=e+10;else if(s.x>e+10)s.x=-10;this.drawSnowflake(s.x,s.y,s.size,s.alpha,s.rotation)}}drawSnowflake(e,o,a,n,_){this.ctx.save(),this.ctx.translate(e,o),this.ctx.rotate(_),this.ctx.strokeStyle=`rgba(255, 255, 255, ${n})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let i=0;i<6;i++){let r=Math.PI/3*i,l=Math.cos(r),s=Math.sin(r);this.ctx.moveTo(0,0),this.ctx.lineTo(s*a*2.5,l*a*2.5);let u=s*a*1.5+l*a*0.5,t=l*a*1.5-s*a*0.5,d=s*a*1.8+l*a*1.2,k=l*a*1.8-s*a*1.2;this.ctx.moveTo(u,t),this.ctx.lineTo(d,k);let p=s*a*1.5-l*a*0.5,w=l*a*1.5+s*a*0.5,v=s*a*1.8-l*a*1.2,f=l*a*1.8+s*a*1.2;this.ctx.moveTo(p,w),this.ctx.lineTo(v,f)}this.ctx.stroke(),this.ctx.restore()}}class co extends P{draw(e,o,a,n){let _=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let i=0;i<3;i++){let r=a*(0.4+i*0.2),l=Math.sin(_+i)*20;this.ctx.beginPath(),this.ctx.moveTo(0,r);for(let s=0;s<=o;s+=5){let u=Math.sin((s/o+_)*Math.PI*4+i)*15;this.ctx.lineTo(s,r+u+l)}this.ctx.lineTo(o,a),this.ctx.lineTo(0,a),this.ctx.closePath(),this.ctx.fill()}}}class yo extends P{hailStones=[];draw(e,o,a,n){let _=Date.now()*0.001;this.drawClouds(_,o,a,1),this.drawHailStones(o,a)}drawHailStones(e,o){if(this.hailStones.length!==60){this.hailStones=[];for(let _=0;_<60;_++)this.hailStones.push({startX:Math.random()*e,startY:Math.random()*(o+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let n=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let _=0;_<this.hailStones.length;_++){let i=this.hailStones[_],r=(i.startY+n*i.speed)%(o+150);if(r>o+30)i.startY=-30-Math.random()*30,i.startX=Math.random()*e;let l=i.windOffset*(1+Math.sin(n*0.6+i.phase)*0.15),s=(i.startX+l+n*20%e)%e;if(s<-5)i.startX=e+5;else if(s>e+5)i.startX=-5;this.drawHailStone(s,r,i)}}drawHailStone(e,o,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha,this.ctx.beginPath(),this.ctx.ellipse(e,o,a.size,a.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(e-a.size*0.3,o-a.size*0.3,a.size*0.3,a.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}var Ae=0.4;class mo extends P{rainyAnimation;bolts=[];flashActive=!1;constructor(e){super(e);this.rainyAnimation=new ve(e)}draw(e,o,a,n,_=!0){let i=Date.now()*0.001,r=this.getFlashIntensity(i);if(this.updateBolts(i,r,o,a),this.drawBolts(i),this.drawClouds(i,o,a,1),_)this.rainyAnimation.draw(e,o,a,n,!1);this.drawLightning(o,a,r)}getFlashIntensity(e){return Math.max(0,Math.sin(e*2.5)*Math.sin(e*5.3)*Math.sin(e*7.1))}updateBolts(e,o,a,n){this.bolts=this.bolts.filter((i)=>e<i.startsAt+i.duration);let _=o>Ae;if(_&&!this.flashActive){if(this.bolts.push(this.createBolt(e,a,n)),Math.random()<0.3)this.bolts.push(this.createBolt(e+0.08+Math.random()*0.1,a,n))}this.flashActive=_}createBolt(e,o,a){let n=o*(0.1+Math.random()*0.8),_=a*0.25,i=a*(0.6+Math.random()*0.3),r=8+Math.floor(Math.random()*5),l=(i-_)/r,s=Math.min(30,o*0.06),u=[{x:n,y:_}],t=[];for(let d=1;d<=r;d++){let p={x:u[d-1].x+(Math.random()-0.5)*s*2,y:_+l*d};if(u.push(p),d<r-1&&Math.random()<0.25){let w=Math.random()<0.5?-1:1,v=[p],f=2+Math.floor(Math.random()*3);for(let V=1;V<=f;V++){let M=v[V-1];v.push({x:M.x+w*s*(0.3+Math.random()*0.5),y:M.y+l*(0.5+Math.random()*0.5)})}t.push(v)}}return{trunk:u,branches:t,startsAt:e,duration:0.2+Math.random()*0.15}}drawBolts(e){this.bolts.forEach((o)=>{let a=e-o.startsAt;if(a<0)return;let n=0.75+Math.random()*0.25,_=Math.max(0,1-a/o.duration)*n;this.ctx.save(),this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=_,this.ctx.shadowColor="rgba(200, 220, 255, 1)",o.branches.forEach((i)=>this.strokePath(i,1.2,8)),this.strokePath(o.trunk,2.5,16),this.ctx.restore()})}strokePath(e,o,a){this.ctx.beginPath(),this.ctx.moveTo(e[0].x,e[0].y);for(let n=1;n<e.length;n++)this.ctx.lineTo(e[n].x,e[n].y);this.ctx.strokeStyle="rgba(255, 255, 255, 1)",this.ctx.lineWidth=o,this.ctx.shadowBlur=a,this.ctx.stroke()}drawLightning(e,o,a){if(a>Ae){let n=(a-Ae)/(1-Ae),_=n*0.6,i=Math.min(_,Math.sin(n*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${i})`,this.ctx.fillRect(0,0,e,o)}}}class wo{sunny;rainy;snowy;cloudy;foggy;hail;thunderstorm;constructor(e){this.sunny=new ko(e),this.rainy=new ve(e),this.snowy=new go(e),this.cloudy=new me(e),this.foggy=new co(e),this.hail=new yo(e),this.thunderstorm=new mo(e)}draw(e,o,a,n,_){let i=Date.now();switch(e){case"sunny":case"clear":this.sunny.draw(i,o,a,n,_);break;case"clear-night":this.sunny.draw(i,o,a,{type:"night",progress:0},_);break;case"rainy":case"rain":this.rainy.draw(i,o,a,n,!1);break;case"pouring":this.rainy.draw(i,o,a,n,!0);break;case"snowy":case"snow":this.snowy.draw(i,o,a,n);break;case"snowy-rainy":this.rainy.draw(i,o,a,n,!1),this.snowy.draw(i,o,a,n);break;case"hail":this.hail.draw(i,o,a,n);break;case"foggy":case"fog":this.foggy.draw(i,o,a,n);break;case"lightning":this.thunderstorm.draw(i,o,a,n,!1);break;case"lightning-rainy":this.thunderstorm.draw(i,o,a,n,!0);break;case"cloudy":case"partlycloudy":default:this.cloudy.draw(i,o,a,n);break}}}var Yn={rainy:0.6,rain:0.6,pouring:1,"lightning-rainy":0.85,"snowy-rainy":0.4},In=new Set(["sunny","clear","clear-night","partlycloudy","cloudy","windy","windy-variant"]),Fa=8;class vo{canvas=null;ctx=null;animationFrame=null;animations={};cloudField=new uo;glassDrops=new to;wind=new po;classic=null;resizeObserver=null;intersectionObserver=null;onScreen=!0;qualityName="high";quality=Qe("high");lastFrameTime=-1/0;reducedMotion=typeof window<"u"&&typeof window.matchMedia==="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null;stillKey="";width=0;height=0;container=null;getDrawParams;handleVisibilityChange=()=>{this.updateRunning()};handleMotionChange=()=>{this.stillKey=""};constructor(e){this.getDrawParams=e}setup(e){if(this.container=e,this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver(),this.setupIntersectionObserver(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.reducedMotion?.addEventListener?.("change",this.handleMotionChange)}destroy(){if(document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.reducedMotion?.removeEventListener?.("change",this.handleMotionChange),this.stopAnimation(),this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.canvas=null,this.ctx=null,this.container=null}resize(){if(this.canvas&&this.ctx)this.resizeCanvas()}setupCanvas(){if(!this.container)return;let e=this.container.querySelector("canvas");if(e)e.remove();this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.resizeCanvas()}resizeCanvas(){if(!this.canvas||!this.container)return;let e=this.container.getBoundingClientRect();if(e.width===0||e.height===0)return;let o=Math.min(window.devicePixelRatio||2,this.quality.maxDpr);if(this.canvas.width=e.width*o,this.canvas.height=e.height*o,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(o,o);this.width=e.width,this.height=e.height,this.stillKey="",this.initializeAnimations()}setupResizeObserver(){if(!this.container)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(this.container)}setupIntersectionObserver(){if(!this.container||typeof IntersectionObserver>"u")return;this.intersectionObserver=new IntersectionObserver((e)=>{this.onScreen=e.some((o)=>o.isIntersecting),this.updateRunning()}),this.intersectionObserver.observe(this.container)}updateRunning(){if(document.hidden||!this.onScreen)this.stopAnimation();else this.startAnimation()}applyQuality(e){if(e===this.qualityName||!Je[e])return;let o=this.quality.maxDpr;if(this.qualityName=e,Object.assign(this.quality,Je[e]),this.quality.maxDpr!==o)this.resizeCanvas()}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new oo(this.ctx),rainy:new E(this.ctx),snowy:new no(this.ctx),cloudy:new me(this.ctx),foggy:new _o(this.ctx),hail:new io(this.ctx),thunderstorm:new ro(this.ctx)},this.classic=null,Object.values(this.animations).forEach((e)=>{e.attach(this.cloudField,this.quality)})}startAnimation(){if(this.animationFrame)return;let e=(o=0)=>{let a=this.reducedMotion?.matches===!0;if(o-this.lastFrameTime>=(a?500:1000/this.quality.fps-2))this.lastFrameTime=o,this.draw(a);this.animationFrame=requestAnimationFrame(e)};e()}stopAnimation(){if(this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null}draw(e=!1){if(!this.ctx||!this.canvas)return;if(!this.width||!this.height){if(this.resizeCanvas(),!this.width||!this.height)return}let o=this.getDrawParams();if(!o)return;this.applyQuality(o.quality??"high");let{condition:a,timeOfDay:n,sunPosition:_,moonPhase:i,visualStyle:r}=o,l=this.width,s=this.height;if(e){let v=JSON.stringify([a,n.type,Math.round(n.progress*20),_,i,r,o.quality,o.aurora,o.raindrops,o.windEffects,Math.round(o.windSpeed??0),l,s]);if(v===this.stillKey)return;this.stillKey=v}else this.stillKey="";this.ctx.clearRect(0,0,l,s);let u=a.toLowerCase();if(r==="classic"){this.classic??=new wo(this.ctx),this.classic.draw(u,l,s,n,_);return}let t=u==="windy"||u==="windy-variant",d=Math.max(0,o.windSpeed??0);if(this.cloudField.setWeather(u,n),this.cloudField.setWind(Math.min(4,Math.max(t?2.5:1,1+d/5))),e)this.cloudField.settle();switch(u){case"sunny":case"clear":case"partlycloudy":case"windy":this.animations.sunny?.draw(Date.now(),l,s,n,_,i,o.aurora);break;case"clear-night":this.animations.sunny?.draw(Date.now(),l,s,{type:"night",progress:0},_,i,o.aurora);break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),l,s,n,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),l,s,n,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),l,s,n);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),l,s,n,!1),this.animations.snowy?.drawSnowflakes(l,s);break;case"hail":this.animations.hail?.draw(Date.now(),l,s,n);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),l,s,n);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),l,s,n,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),l,s,n,!0);break;case"cloudy":default:this.animations.cloudy?.draw(Date.now(),l,s,n);break}let k=Date.now()*0.001,p=t?Math.max(0.6,(d-Fa)/10):(d-Fa)/10;if(o.windEffects!==!1&&In.has(u)&&p>0){let v=W(u,n).daylight;this.wind.draw(this.ctx,k,l,s,Math.min(1,p),t,v,this.quality)}let w=Yn[u];if(w&&o.raindrops!==!1&&this.quality.details)this.glassDrops.draw(this.ctx,k,l,s,w,this.quality)}}var fo=3600000;class zo{hourlyForecast=[];dailyForecast=[];hourlySubscription=null;dailySubscription=null;onUpdate;constructor(e){this.onUpdate=e}getHourlyData(){return this.hourlyForecast}getDailyData(){return this.dailyForecast}async subscribe(e,o,a){if(!e||!o)return;await this.unsubscribe();try{if(this.hourlySubscription=e.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.hourlyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:o}),a)this.dailySubscription=e.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.dailyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:o})}catch{}}async unsubscribe(){if(this.hourlySubscription){try{(await this.hourlySubscription)()}catch{}this.hourlySubscription=null}if(this.dailySubscription){try{(await this.dailySubscription)()}catch{}this.dailySubscription=null}}getHourlyForecast(e,o){let a=Math.max(1,Math.floor(Number(e??c.hourlyForecastHours))||c.hourlyForecastHours),n=this.hourlyForecast&&this.hourlyForecast.length>0,_=n?this.hourlyForecast:o?.forecast??[],i=Date.now(),r=_.map((u)=>({item:u,time:new Date(u.datetime).getTime()})).filter(({time:u})=>!Number.isNaN(u)).sort((u,t)=>u.time-t.time).filter(({time:u})=>u>i-fo),l=r.length<2||r[1].time-r[0].time<=3*fo;return(n||l?r:r.filter(({time:u})=>u<i+24*fo)).slice(0,a).map(({item:u})=>u)}getDailyForecast(e,o){let a=Math.max(1,Math.floor(Number(e??c.dailyForecastDays)));if(this.dailyForecast&&this.dailyForecast.length>0)return this.dailyForecast.slice(0,a);if(!o?.forecast||o.forecast.length===0)return[];let n=new Date,_=new Date(n.getFullYear(),n.getMonth(),n.getDate()),i=new Date(_);i.setDate(i.getDate()+a);let r=(s)=>{let u=s.getFullYear(),t=String(s.getMonth()+1).padStart(2,"0"),d=String(s.getDate()).padStart(2,"0");return`${u}-${t}-${d}`},l=new Map;return o.forecast.forEach((s)=>{if(!s.datetime)return;let u=new Date(s.datetime);if(Number.isNaN(u.getTime()))return;if(u<_||u>=i)return;let t=r(u),d=Math.abs(u.getHours()+u.getMinutes()/60-12),k=s.temperature??s.temp??s.native_temperature,p=l.get(t)??{item:s,itemDate:u,hourScore:d,temperatures:[],precipitationProbabilities:[]};if(d<p.hourScore)p.item=s,p.itemDate=u,p.hourScore=d;if(k!=null)p.temperatures.push(k);if(s.precipitation_probability!=null)p.precipitationProbabilities.push(s.precipitation_probability);l.set(t,p)}),Array.from(l.values()).sort((s,u)=>s.itemDate.getTime()-u.itemDate.getTime()).map(({item:s,temperatures:u,precipitationProbabilities:t})=>{if(u.length<2)return s;let d={...s,temperature:Math.max(...u),templow:s.templow??s.native_templow??Math.min(...u)};if(t.length>0)d.precipitation_probability=Math.max(...t);return d}).slice(0,a)}}class ho{holdTimer=null;lastTap=null;holdFired=!1;holdDelay=500;getHass;getConfig;fireEvent;constructor(e,o,a){this.getHass=e,this.getConfig=o,this.fireEvent=a}handleTap(e){if(e.target.closest(".forecast-item")||e.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.getConfig().tapAction),this.lastTap=null},300)}handlePointerDown(){this.holdTimer=window.setTimeout(()=>{this.handleHold(),this.holdFired=!0},this.holdDelay)}handlePointerUp(e){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)e.preventDefault(),e.stopPropagation(),this.holdFired=!1}handleHold(){this.handleAction(this.getConfig().holdAction)}handleDoubleTap(){this.handleAction(this.getConfig().doubleTapAction)}handleAction(e){let o=this.getHass(),a=this.getConfig();if(!e||!o)return;switch(e.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:e.entity||a.entity});break;case"toggle":o.callService("homeassistant","toggle",{entity_id:e.entity||a.entity});break;case"call-service":if(e.service){let[_,i]=e.service.split(".");o.callService(_,i,e.service_data||{})}break;case"navigate":if(e.navigation_path)window.history.pushState(null,"",e.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(e.url_path)window.open(e.url_path);break;case"none":default:break}}}function C(e,o){if(!e||!o)return null;let a=e.states[o];if(!a)return null;let n=parseFloat(a.state);if(!Number.isFinite(n))return null;let _=a.attributes?.unit_of_measurement;return{value:n,unit:typeof _==="string"?_:null}}function On(e,o){if(!e||!o)return null;let a=e.states[o];return a?a.state:null}function oe(e,o){if(!e||!o)return{};let a=e.states[o];return a?a.attributes:{}}function bo(e,o,a,n){let _=On(e,o),i=oe(e,o),r=i.condition||_||"sunny",l=null;if(a.templowAttribute&&i[a.templowAttribute]!=null)l=i[a.templowAttribute];else{for(let Mo of Oo)if(i[Mo]!=null){l=i[Mo];break}if(l==null)l=(i.forecast&&i.forecast[0]?i.forecast[0].templow??null:null)||(i.forecast_hourly&&i.forecast_hourly[0]?i.forecast_hourly[0].native_templow??null:null)}let s=a.sensorEntities||{},u=C(e,s.temperature),t=C(e,s.feelsLike),d=C(e,s.humidity),k=C(e,s.windSpeed),p=C(e,s.windGust),w=C(e,s.windBearing),v=C(e,s.precipitation),f=C(e,s.pressure),V=C(e,s.uvIndex),M=C(e,s.dewPoint),ne=C(e,s.aqi),G=typeof i.wind_speed_unit==="string"?i.wind_speed_unit:"m/s",_e=i.wind_gust_speed||i.wind_gust||null,R=k?.unit??(k?G:p?.unit??null),j=R??G,Oa=k?k.value:R&&i.wind_speed!=null?O(i.wind_speed,G,j):i.wind_speed??null,en=p?O(p.value,p.unit??j,j):_e!=null&&R?O(_e,G,j):_e;return{condition:r,temperature:u?.value??(i.temperature!=null?i.temperature:null),apparentTemperature:t?.value??(i.apparent_temperature||null),humidity:d?Math.round(d.value):i.humidity!=null?i.humidity:null,windSpeed:Oa,windGust:en,windBearing:w?.value??(i.wind_bearing!=null?i.wind_bearing:null),windDirection:i.wind_direction||null,pressure:f?.value??(i.pressure!=null?i.pressure:null),pressureUnit:f?f.unit:typeof i.pressure_unit==="string"?i.pressure_unit:null,uvIndex:V?.value??(i.uv_index!=null?i.uv_index:null),dewPoint:M?.value??(i.dew_point!=null?i.dew_point:null),aqi:ne?.value??null,forecast:i.forecast||i.forecast_hourly||n||[],friendlyName:i.friendly_name||y.t("weather"),templow:l,windSpeedUnit:R,precipitation:v?.value??null,precipitationUnit:v?.unit??null}}function Ha(e){switch((e||"").toLowerCase()){case"rainy":case"rain":case"pouring":return"rain";case"snowy":case"snow":return"snow";case"snowy-rainy":return"sleet";case"hail":return"hail";case"lightning":case"lightning-rainy":return"storm";default:return null}}function xa(e){let o=Ha(e.condition);if(o)return o;return(e.precipitation_probability??0)>=50?"rain":null}function e_(e,o,a){let n=e.map((r)=>({time:new Date(r.datetime),entry:r})).filter(({time:r})=>!Number.isNaN(r.getTime())).sort((r,l)=>r.time.getTime()-l.time.getTime());if(n.length<2||n[1].time.getTime()-n[0].time.getTime()>10800000)return[];let _=o.getTime()-3600000,i=o.getTime()+a*3600000;return n.filter(({time:r})=>r.getTime()>_&&r.getTime()<=i)}function Wa(e,o,a=new Date,n=12){let _=e_(o,a,n);if(_.length===0)return null;let i=Ha(e);if(i){let r=_.find(({time:l,entry:s})=>l.getTime()>a.getTime()&&!xa(s));return r?{kind:i,type:"stop",time:r.time,hours:n}:{kind:i,type:"continues",time:null,hours:n}}for(let{time:r,entry:l}of _){let s=xa(l);if(!s)continue;return{kind:s,type:"start",time:r.getTime()>a.getTime()?r:null,hours:n}}return null}var o_={wind:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,precipitation:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M46.5 33.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 47.5h28.5a7 7 0 000-14z" transform="translate(0 -8)"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M24 46l-3 9m11-9l-3 9m11-9l-3 9"/>
    </svg>
  `,sunrise:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `,pressure:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M14.5 44a19 19 0 1135 0"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M32 38l9-10"/>
      <circle cx="32" cy="38" r="3" fill="currentColor"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 33.5l2.5 1M32 22.5V25m13 8.5l-2.5 1"/>
    </svg>
  `,uv:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M32 12v5m0 30v5M12 32h5m30 0h5M17.9 17.9l3.5 3.5m21.2 21.2l3.5 3.5M17.9 46.1l3.5-3.5m21.2-21.2l3.5-3.5"/>
    </svg>
  `,dewPoint:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M24 38.5V16a5 5 0 0110 0v22.5a8.5 8.5 0 11-10 0z"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M29 26v17"/>
      <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M46 24c-3 4.4-5 7.2-5 9.9a5 5 0 0010 0c0-2.7-2-5.5-5-9.9z"/>
    </svg>
  `,aqi:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 47c0-19 12-29 31-30 0 20-10 30-26 30"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M17 47c6-9 13-16 22-21"/>
    </svg>
  `},Ua=(e)=>h`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${e}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,a_={sunny:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:h`
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
  `,overcast:h`
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
  `,cloudy:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:h`
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
  `,rain:h`
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
  `,pouring:h`
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
  `,snowy:h`
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
  `,snow:h`
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
  `,foggy:h`
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
  `,fog:h`
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
  `,hail:h`
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
  `,"snowy-rainy":h`
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
  `,lightning:h`
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
  `,"lightning-rainy":h`
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
  `,windy:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function A(e,...o){let a=o_[e];if(typeof a==="function")return a(...o);return a||""}function fe(e){if(!e)return"";return a_[e.toLowerCase()]||""}class Ga extends S{constructor(){super(...arguments);this.format=null;this.compact=!1;this.showDate=!1;this.lang="en";this.currentTime="";this.currentDate=""}clockInterval=null;static styles=$`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .clock {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 48px;
      font-weight: 200;
      line-height: 1;
      color: var(--dwc-text-color, white);
      text-align: right;
      text-shadow: var(--card-text-shadow);
      z-index: 2;
      pointer-events: none;
    }

    @media (max-width: 600px) {
      .clock {
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    .date {
      margin-top: 4px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      opacity: 0.85;
      color: var(--dwc-text-color, white);
      text-align: right;
      text-shadow: var(--card-text-shadow);
      white-space: nowrap;
      pointer-events: none;
    }

    :host([compact]) .clock {
      font-size: 26px;
    }

    :host([compact]) .date {
      margin-top: 2px;
      font-size: 13px;
    }
  `;connectedCallback(){super.connectedCallback(),this.restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer()}updated(e){if(super.updated(e),e.has("format")||e.has("showDate")||e.has("lang"))this.restartTimer()}restartTimer(){if(this.stopTimer(),this.format||this.showDate)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}stopTimer(){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updateTime(){let e=new Date;if(this.format)this.currentTime=qa(e,this.format,y.t("am"),y.t("pm"));if(this.showDate)this.currentDate=Va(e,this.lang)}render(){if(!this.format&&!this.showDate)return g``;return g`
      ${this.format?g`<div class="clock">${this.currentTime}</div>`:""}
      ${this.showDate?g`<div class="date">${this.currentDate}</div>`:""}
    `}}z([b({type:String})],Ga.prototype,"format",void 0),z([b({type:Boolean,reflect:!0})],Ga.prototype,"compact",void 0),z([b({type:Boolean})],Ga.prototype,"showDate",void 0),z([b({type:String})],Ga.prototype,"lang",void 0),z([ke()],Ga.prototype,"currentTime",void 0),z([ke()],Ga.prototype,"currentDate",void 0);customElements.define("weather-clock",Ga);class Ra extends S{constructor(){super(...arguments);this.weather=null;this.sunData=null;this.config=null;this.entityAttributes=null;this.compact=!1}static styles=$`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px 12px;
      font-size: 13px;
      opacity: 0.9;
      text-shadow: var(--card-text-shadow);
    }

    :host([compact]) .info-grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4px 12px;
      font-size: 12px;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .info-item span:last-child {
      white-space: nowrap;
    }

    .info-icon {
      font-size: 16px;
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--dwc-text-color, white);
      filter: var(--card-icon-filter);
    }

    .info-icon svg {
      width: 20px;
      height: 20px;
      display: block;
    }

    :host([compact]) .sun-group {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  `;hasContent(){if(!this.weather||!this.config)return!1;return this.config.showHumidity&&this.weather.humidity!=null||this.config.showWind&&this.weather.windSpeed!=null||this.config.showPressure&&this.weather.pressure!=null||this.config.showUvIndex&&this.weather.uvIndex!=null||this.config.showDewPoint&&this.weather.dewPoint!=null||this.weather.aqi!=null||this.weather.precipitation!=null||this.config.showSunriseSunset&&this.sunData?.hasSunData===!0}renderHumidity(){if(!this.config?.showHumidity||this.weather?.humidity==null)return g``;return g`
      <div class="info-item">
        <span class="info-icon">${A("humidity")}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `}renderItem(e,o,a){return g`
      <div class="info-item" title="${a}">
        <span class="info-icon">${A(e)}</span>
        <span>${o}</span>
      </div>
    `}renderPressure(){if(!this.config?.showPressure||this.weather?.pressure==null)return g``;let e=this.weather.pressureUnit,o=e==="inHg"?2:e==="kPa"?1:0;return this.renderItem("pressure",`${this.weather.pressure.toFixed(o)}${e?` ${e}`:""}`,y.t("pressure"))}renderUvIndex(){if(!this.config?.showUvIndex||this.weather?.uvIndex==null)return g``;return this.renderItem("uv",`UV ${Math.round(this.weather.uvIndex)}`,y.t("uv_index"))}renderDewPoint(){if(!this.config?.showDewPoint||this.weather?.dewPoint==null)return g``;return this.renderItem("dewPoint",`${Math.round(this.weather.dewPoint)}°`,y.t("dew_point"))}renderAqi(){if(this.weather?.aqi==null)return g``;return this.renderItem("aqi",`AQI ${Math.round(this.weather.aqi)}`,y.t("aqi"))}renderSunrise(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunrise)return g``;return g`
      <div class="info-item">
        <span class="info-icon">${A("sunrise")}</span>
        <span>${ce(this.sunData.sunrise,this.config.clockFormat,y.t("am"),y.t("pm"))}</span>
      </div>
    `}renderWind(){if(!this.config?.showWind||this.weather?.windSpeed==null)return g``;let e=this.weather.windSpeedUnit?{...this.entityAttributes||{},wind_speed_unit:this.weather.windSpeedUnit}:this.entityAttributes||{},o=Ye(this.weather.windSpeed,e,this.config.windSpeedUnit),a=ja(e,this.config.windSpeedUnit,y.t.bind(y)),n="";if(this.config.showWindGust&&this.weather.windGust)n=` / ${Ye(this.weather.windGust,e,this.config.windSpeedUnit)} ${a}`;let _=this.config.showWindDirection&&this.weather.windBearing!=null?Ua(this.weather.windBearing):A("wind");return g`
      <div class="info-item">
        <span class="info-icon">${_}</span>
        <span>${o} ${a}${n}</span>
      </div>
    `}renderPrecipitation(){if(this.weather?.precipitation==null)return g``;let e=Math.round(this.weather.precipitation*10)/10,o=this.weather.precipitationUnit?` ${this.weather.precipitationUnit}`:"";return g`
      <div class="info-item">
        <span class="info-icon">${A("precipitation")}</span>
        <span>${e}${o}</span>
      </div>
    `}renderSunset(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunset)return g``;return g`
      <div class="info-item">
        <span class="info-icon">${A("sunset")}</span>
        <span>${ce(this.sunData.sunset,this.config.clockFormat,y.t("am"),y.t("pm"))}</span>
      </div>
    `}render(){if(!this.hasContent())return g``;let o=this.config?.showSunriseSunset&&this.sunData?.hasSunData?g`
      <div class="sun-group">
        ${this.renderSunrise()}
        ${this.renderSunset()}
      </div>
    `:g``;return g`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderWind()}
        ${this.compact?o:g`${this.renderSunrise()}${this.renderSunset()}`}
        ${this.renderPrecipitation()}
        ${this.renderPressure()}
        ${this.renderUvIndex()}
        ${this.renderDewPoint()}
        ${this.renderAqi()}
      </div>
    `}}z([b({type:Object})],Ra.prototype,"weather",void 0),z([b({type:Object})],Ra.prototype,"sunData",void 0),z([b({type:Object})],Ra.prototype,"config",void 0),z([b({type:Object})],Ra.prototype,"entityAttributes",void 0),z([b({type:Boolean,reflect:!0})],Ra.prototype,"compact",void 0);customElements.define("weather-details",Ra);var Fe=$`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none;
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
    text-shadow: var(--card-text-shadow);
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

  /* Hourly forecast spanning several days: the first hour of each new day */
  .forecast-day {
    min-height: 14px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    opacity: 0.85;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-item.day-start {
    position: relative;
  }

  .forecast-item.day-start::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.25);
  }

  .forecast-time {
    font-size: 12px;
    opacity: 0.7;
    font-weight: 400;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-icon {
    line-height: 1;
    filter: var(--card-icon-filter);
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
    text-shadow: var(--card-text-shadow);
  }

  .forecast-temp-low {
    margin-left: 4px;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
  }

  .temp-bar {
    position: relative;
    width: 6px;
    height: 48px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.18);
  }

  .temp-bar-fill {
    position: absolute;
    left: 0;
    right: 0;
    min-height: 6px;
    border-radius: 3px;
  }

  .temp-bar-now {
    position: absolute;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: 0 0 -4px -4px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.35);
  }

  .forecast-temp-low-bar {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
  }

  .forecast-precipitation {
    font-size: 11px;
    opacity: 0.75;
    color: #8ecbff;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-unavailable {
    opacity: 0.6;
    font-size: 14px;
  }
`;class Ta extends S{constructor(){super(...arguments);this.forecast=[];this.forecastTitle=null;this.clockFormat="24h";this.lang="en"}static styles=Fe;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=Be(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(e){return Math.round(e.temperature??e.temp??e.native_temperature??0)}getWeekday(e){try{return new Date(e).toLocaleDateString(this.lang,{weekday:"short"})}catch{return new Date(e).toLocaleDateString(void 0,{weekday:"short"})}}renderItem(e,o,a){let n=e.precipitation_probability;return g`
      <div class="forecast-item ${o?"day-start":""}">
        ${a?g`<div class="forecast-day">${o?this.getWeekday(e.datetime):""}</div>`:""}
        <div class="forecast-time">${ha(e.datetime,this.clockFormat,y.t("am"),y.t("pm"))}</div>
        <div class="forecast-icon">${fe(e.condition||"sunny")}</div>
        <div class="forecast-temp">${this.getTemperature(e)}°</div>
        ${n!=null&&n>0?g`<div class="forecast-precipitation">${Math.round(n)}%</div>`:""}
      </div>
    `}render(){if(this.forecast.length===0)return g``;let e=ba(this.forecast),o=e.some(Boolean);return g`
      <div class="forecast-container">
        ${this.forecastTitle!==""?g`<div class="forecast-title">${this.forecastTitle??y.t(o?"forecast_title_hourly":"forecast_title")}</div>`:""}
        <div class="forecast-scroll">
          ${this.forecast.map((a,n)=>this.renderItem(a,e[n],o))}
        </div>
      </div>
    `}}z([b({type:Array})],Ta.prototype,"forecast",void 0),z([b({type:String})],Ta.prototype,"forecastTitle",void 0),z([b({type:String})],Ta.prototype,"clockFormat",void 0),z([b({type:String})],Ta.prototype,"lang",void 0);customElements.define("hourly-forecast",Ta);var U=[[-20,[94,92,230]],[-5,[10,132,255]],[5,[100,210,255]],[15,[48,209,88]],[22,[255,214,10]],[28,[255,159,10]],[35,[255,69,58]]];function Po(e,o="°C"){let a=/F/i.test(o)?(e-32)*5/9:e,n=U.length-1;if(a<=U[0][0])return`rgb(${U[0][1].join(", ")})`;if(a>=U[n][0])return`rgb(${U[n][1].join(", ")})`;let _=U.findIndex(([t])=>t>a),[i,r]=U[_-1],[l,s]=U[_],u=(a-i)/(l-i);return`rgb(${r.map((t,d)=>Math.round(t+(s[d]-t)*u)).join(", ")})`}function La(e){return new Date(e).toDateString()===new Date().toDateString()}class Xa extends S{constructor(){super(...arguments);this.forecast=[];this.forecastTitle=null;this.lang="en";this.showBars=!1;this.currentTemperature=null;this.temperatureUnit="°C"}static styles=Fe;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=Be(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(e){return Math.round(e.temperature??e.temp??e.native_temperature??0)}getLowTemperature(e){let o=e.templow??e.native_templow;return o!=null?Math.round(o):null}getPrecipitationProbability(e){let o=e.precipitation_probability;return o!=null&&o>0?Math.round(o):null}renderBarItem(e,o){let a=this.getTemperature(e),n=this.getLowTemperature(e)??a,_=this.getPrecipitationProbability(e),i=Math.max(1,o.max-o.min),r=(o.max-a)/i*100,l=(n-o.min)/i*100,s=`top: ${r}%; bottom: ${l}%; background: linear-gradient(to top, ${Po(n,this.temperatureUnit)}, ${Po(a,this.temperatureUnit)});`,u="";if(this.currentTemperature!=null&&La(e.datetime)){let t=Math.max(o.min,Math.min(o.max,this.currentTemperature));u=g`<div class="temp-bar-now" style="bottom: ${(t-o.min)/i*100}%"></div>`}return g`
      <div class="forecast-item">
        <div class="forecast-time">${Xe(e.datetime,this.lang)}</div>
        <div class="forecast-icon">${fe(e.condition||"sunny")}</div>
        <div class="forecast-temp">${a}°</div>
        <div class="temp-bar">
          <div class="temp-bar-fill" style="${s}"></div>
          ${u}
        </div>
        <div class="forecast-temp forecast-temp-low-bar">${n}°</div>
        ${_!==null?g`<div class="forecast-precipitation">${_}%</div>`:""}
      </div>
    `}renderItem(e){let o=this.getLowTemperature(e),a=this.getPrecipitationProbability(e);return g`
      <div class="forecast-item">
        <div class="forecast-time">${Xe(e.datetime,this.lang)}</div>
        <div class="forecast-icon">${fe(e.condition||"sunny")}</div>
        <div class="forecast-temp">
          ${this.getTemperature(e)}°${o!==null?g`<span class="forecast-temp-low">${o}°</span>`:""}
        </div>
        ${a!==null?g`<div class="forecast-precipitation">${a}%</div>`:""}
      </div>
    `}renderItems(){if(!this.showBars)return this.forecast.map((a)=>this.renderItem(a));let e=this.forecast.flatMap((a)=>{let n=this.getLowTemperature(a);return n!==null?[this.getTemperature(a),n]:[this.getTemperature(a)]});if(this.currentTemperature!=null&&this.forecast.some((a)=>La(a.datetime)))e.push(Math.round(this.currentTemperature));let o={min:Math.min(...e),max:Math.max(...e)};return this.forecast.map((a)=>this.renderBarItem(a,o))}render(){if(this.forecast.length===0)return g``;return g`
      <div class="forecast-container">
        ${this.forecastTitle!==""?g`<div class="forecast-title">${this.forecastTitle??y.t("daily_forecast_title")}</div>`:""}
        <div class="forecast-scroll">
          ${this.renderItems()}
        </div>
      </div>
    `}}z([b({type:Array})],Xa.prototype,"forecast",void 0),z([b({type:String})],Xa.prototype,"forecastTitle",void 0),z([b({type:String})],Xa.prototype,"lang",void 0),z([b({type:Boolean})],Xa.prototype,"showBars",void 0),z([b({type:Number})],Xa.prototype,"currentTemperature",void 0),z([b({type:String})],Xa.prototype,"temperatureUnit",void 0);customElements.define("daily-forecast",Xa);class jo extends S{animationManager;forecastService;actionHandler;subscribedEntity=null;subscribedShowDaily=!1;_testTimeOfDay;_testMoonPhase;_testNow;static get styles(){return Ka}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:c.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:c.dailyForecastDays}}constructor(){super();this.config={},this.animationManager=new vo(()=>this.getDrawParams()),this.forecastService=new zo(()=>this.requestUpdate()),this.actionHandler=new ho(()=>this.hass,()=>this.config,(e,o)=>this.fireEvent(e,o))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{let e=this.shadowRoot?.querySelector(".canvas-container");if(e)this.animationManager.setup(e)},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationManager.destroy(),this.forecastService.unsubscribe()}updated(e){if(super.updated(e),e.has("config")){let a=e.get("config"),n=a?a.showAnimations!==!1:!0,_=this.config.showAnimations!==!1;if(n&&!_)this.animationManager.destroy();else if(!n&&_)this.updateComplete.then(()=>{let i=this.shadowRoot?.querySelector(".canvas-container");if(i)this.animationManager.setup(i)})}if(e.has("hass")||e.has("config")){let a=this.config.entity,n=this.config.showDailyForecast??!1;if(this.hass&&a&&(a!==this.subscribedEntity||n!==this.subscribedShowDaily))this.subscribedEntity=a,this.subscribedShowDaily=n,this.forecastService.subscribe(this.hass,a,n)}let o=ge({configLang:this.config?.language,hassLang:this.hass?.language});if(y.lang!==o)y.setLanguage(o)}getDrawParams(){if(!this.hass||!this.config.entity)return null;let e=bo(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),o=this.hass.states[this.config.entity],a=De(o||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||Ee(a);return{condition:e.condition,timeOfDay:n,sunPosition:{x:this.config.sunPositionX,y:this.config.sunPositionY},moonPhase:this._testMoonPhase??void 0,visualStyle:this.config.visualStyle,quality:this.config.animationQuality,windSpeed:this.getWindSpeedMs(e),aurora:this.config.showAurora===!0,raindrops:this.config.showRaindrops!==!1,windEffects:this.config.showWindEffects!==!1}}getWindSpeedMs(e){if(e.windSpeed==null||!this.hass)return null;let o=oe(this.hass,this.config.entity),a=e.windSpeedUnit??(typeof o.wind_speed_unit==="string"?o.wind_speed_unit:"m/s");return O(e.windSpeed,a,"m/s")}renderPrecipitationOutlook(e){if(!this.config.showPrecipitationOutlook)return g``;let o=this.forecastService.getHourlyData(),a=Wa(e.condition,o.length>0?o:e.forecast,this._testNow??new Date);if(!a)return g``;let n=a.time?ce(a.time,this.config.clockFormat??"24h",y.t("am"),y.t("pm")):"",i=y.t(`precipitation_outlook.${a.type==="start"&&!a.time?"soon":a.type}`).replace("{kind}",y.t(`precipitation_outlook.${a.kind}`)).replace("{time}",n).replace("{hours}",String(a.hours));return g`
      <div class="precipitation-outlook">
        <span class="info-icon">${A("precipitation")}</span>
        <span>${i}</span>
      </div>
    `}getDetailsConfig(){return{showHumidity:this.config.showHumidity??!0,showPressure:this.config.showPressure??!1,showUvIndex:this.config.showUvIndex??!1,showDewPoint:this.config.showDewPoint??!1,showWind:this.config.showWind??!0,showWindGust:this.config.showWindGust??!0,showWindDirection:this.config.showWindDirection??!0,showSunriseSunset:this.config.showSunriseSunset??!0,clockFormat:this.config.clockFormat??"24h",windSpeedUnit:this.config.windSpeedUnit??"ms"}}setConfig(e){if(!e.entity)throw Error("Please define a weather entity");let o=e.show_hourly_forecast??e.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:e.entity,icons_path:e.icons_path,name:e.name,height:e.height||c.height,showFeelsLike:e.show_feels_like!==!1,showWind:e.show_wind!==!1,showWindGust:e.show_wind_gust!==!1,showWindDirection:e.show_wind_direction!==!1,showHumidity:e.show_humidity!==!1,showPressure:e.show_pressure===!0,showUvIndex:e.show_uv_index===!0,showDewPoint:e.show_dew_point===!0,showMinTemp:e.show_min_temp!==!1,showPrecipitationOutlook:e.show_precipitation_outlook===!0,showAurora:e.show_aurora===!0,showRaindrops:e.show_raindrops!==!1,showWindEffects:e.show_wind_effects!==!1,showTemperatureBars:e.show_temperature_bars===!0,showForecast:e.show_forecast===!0,showHourlyForecast:o===!0,showDailyForecast:e.show_daily_forecast===!0,hourlyForecastHours:e.hourly_forecast_hours??c.hourlyForecastHours,dailyForecastDays:e.daily_forecast_days??c.dailyForecastDays,hourlyForecastTitle:e.hourly_forecast_title??c.hourlyForecastTitle,dailyForecastTitle:e.daily_forecast_title??c.dailyForecastTitle,showSunriseSunset:e.show_sunrise_sunset!==!1,showClock:e.show_clock===!0,showDate:e.show_date===!0,clockPosition:e.clock_position||c.clockPosition,clockFormat:e.clock_format||c.clockFormat,overlayOpacity:e.overlay_opacity!==void 0?e.overlay_opacity:c.overlayOpacity,textShadow:e.text_shadow!==void 0?e.text_shadow:c.textShadow,borderRadius:e.border_radius??c.borderRadius,sunPositionX:e.sun_position_x??c.sunPositionX,sunPositionY:e.sun_position_y??c.sunPositionY,textColor:e.text_color?.trim()||c.textColor,language:e.language||c.language,windSpeedUnit:e.wind_speed_unit||c.windSpeedUnit,showAnimations:e.show_animations!==!1,layout:e.layout||c.layout,visualStyle:e.visual_style==="classic"?"classic":"modern",animationQuality:e.animation_quality==="medium"||e.animation_quality==="low"?e.animation_quality:c.animationQuality,sunriseEntity:e.sunrise_entity||null,sunsetEntity:e.sunset_entity||null,templowAttribute:e.templow_attribute||null,sensorEntities:{temperature:e.temperature_entity||null,feelsLike:e.feels_like_entity||null,humidity:e.humidity_entity||null,windSpeed:e.wind_speed_entity||null,windGust:e.wind_gust_entity||null,windBearing:e.wind_bearing_entity||null,precipitation:e.precipitation_entity||null,pressure:e.pressure_entity||null,uvIndex:e.uv_index_entity||null,dewPoint:e.dew_point_entity||null,aqi:e.aqi_entity||null},tapAction:e.tap_action||{action:"more-info"},holdAction:e.hold_action||{action:"none"},doubleTapAction:e.double_tap_action||{action:"none"}},this.config.language)y.setLanguage(this.config.language)}fireEvent(e,o={}){let a=new CustomEvent(e,{detail:o,bubbles:!0,composed:!0});this.dispatchEvent(a)}getCardSize(){return 1}render(){if(!this.hass)return g`<div>No Home Assistant connection</div>`;let e=bo(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),o=this.hass.states[this.config.entity],a=De(o,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||Ee(a),_=`weather-card ${n.type}${this.config.visualStyle==="classic"?" classic":""}`,i=this.config.layout==="minimal",r=i?"56px":"200px",l=this.config.height?`${this.config.height}px`:r,s=this.config.visualStyle==="classic",u;if(s){let j=za(n);u=j?`background: linear-gradient(135deg, rgb(${j.start.r}, ${j.start.g}, ${j.start.b}), rgb(${j.end.r}, ${j.end.g}, ${j.end.b}));`:""}else{let j=W(e.condition,n);u=`--dwc-sky-top: ${J(j.top)}; --dwc-sky-bottom: ${J(j.bottom)};`}let d=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:c.overlayOpacity};`,k=this.config.textShadow??c.textShadow,p=k===0?"none":[`0 1px 2px rgba(0,0,0,${Math.min(1,0.4*k).toFixed(2)})`,`0 2px 6px rgba(0,0,0,${Math.min(1,0.3*k).toFixed(2)})`,`0 4px 12px rgba(0,0,0,${Math.min(1,0.2*k).toFixed(2)})`].join(", "),w=k===0?"none":`drop-shadow(0px 1px 3px rgba(0,0,0,${Math.min(1,0.6*k).toFixed(2)}))`,v=`--card-text-shadow: ${p}; --card-icon-filter: ${w};`,f=this.config.showHourlyForecast?this.forecastService.getHourlyForecast(this.config.hourlyForecastHours??c.hourlyForecastHours,e):[],V=this.config.showDailyForecast?this.forecastService.getDailyForecast(this.config.dailyForecastDays??c.dailyForecastDays,e):[],M=`min-height: ${l}; ${u} ${d} ${v} cursor: pointer;`,ne=this.config.borderRadius,G=this.config.textColor&&CSS.supports("color",this.config.textColor)?this.config.textColor:null,_e=[typeof ne==="number"&&ne>=0?`--dwc-border-radius: ${ne}px;`:"",G?`--dwc-text-color: ${G};`:""].join(" "),R=this.hass;return g`
      <ha-card
        style="${_e}"
        @click=${(j)=>this.actionHandler.handleTap(j)}
        @pointerdown=${()=>this.actionHandler.handlePointerDown()}
        @pointerup=${(j)=>this.actionHandler.handlePointerUp(j)}
        @pointercancel=${(j)=>this.actionHandler.handlePointerUp(j)}
      >
        ${i?this.renderMinimal(e,a,R,_,M):this.renderDefault(e,a,f,V,R,_,M)}
      </ha-card>
    `}renderDefault(e,o,a,n,_,i,r){return g`
      <div class="${i}" style="${r}">
        ${this.config.showAnimations!==!1?g`<div class="canvas-container"></div>`:""}
        <div class="content">
          ${this.config.name&&this.config.name.trim()!==""?g`
            <div class="header">
              <div class="location">${this.config.name}</div>
            </div>
          `:""}
          <div class="primary">
            <div class="primary-left">
              <div class="condition">${y.t(e.condition)}</div>
              <div class="temperature">${e.temperature!=null?Math.round(e.temperature)+"°":y.t("no_data")}</div>
              ${this.config.showMinTemp?g`
                <div class="temp-range">
                  <span class="temp-min">↓ ${e.templow!=null?`${Math.round(e.templow)}°`:y.t("no_data")}</span>
                </div>
              `:""}
              ${this.config.showFeelsLike?g`
                <div class="feels-like">${y.t("feels_like")} ${e.apparentTemperature!=null?`${Math.round(e.apparentTemperature)}°`:y.t("no_data")}</div>
              `:""}
              ${this.renderPrecipitationOutlook(e)}
            </div>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="top"?this.config.clockFormat:null}
              .showDate=${!!this.config.showDate&&this.config.clockPosition==="top"}
              .lang=${y.lang}
            ></weather-clock>
          </div>
          <div class="details ${(this.config.showClock||this.config.showDate)&&this.config.clockPosition==="details"?"details--clock":""}">
            <weather-details
              .weather=${e}
              .sunData=${o}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${oe(_,this.config.entity)}
            ></weather-details>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="details"?this.config.clockFormat:null}
              .showDate=${!!this.config.showDate&&this.config.clockPosition==="details"}
              .lang=${y.lang}
            ></weather-clock>
          </div>
          <hourly-forecast
            .forecast=${a}
            .lang=${y.lang}
            .clockFormat=${this.config.clockFormat??"24h"}
            .forecastTitle=${this.config.hourlyForecastTitle??null}
          ></hourly-forecast>
          <daily-forecast
            .forecast=${n}
            .lang=${y.lang}
            .forecastTitle=${this.config.dailyForecastTitle??null}
            .showBars=${this.config.showTemperatureBars===!0}
            .currentTemperature=${e.temperature}
            .temperatureUnit=${oe(_,this.config.entity).temperature_unit??_.config?.unit_system?.temperature??"°C"}
          ></daily-forecast>
        </div>
      </div>
    `}renderMinimal(e,o,a,n,_){let i=e.temperature!=null?Math.round(e.temperature)+"°":y.t("no_data"),r=e.templow!=null?`↓ ${Math.round(e.templow)}°`:null;return g`
      <div class="${n} layout--minimal" style="${_}">
        ${this.config.showAnimations!==!1?g`<div class="canvas-container"></div>`:""}
        <div class="content">
          <div class="mini-primary">
            <div class="mini-temp">${i}</div>
            ${this.config.showMinTemp&&r?g`<div class="mini-temp-low">${r}</div>`:""}
          </div>
          <div class="mini-details">
            <div class="mini-condition">${y.t(e.condition)}</div>
            <weather-details
              .weather=${e}
              .sunData=${o}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${oe(a,this.config.entity)}
              .compact=${!0}
            ></weather-details>
          </div>
          ${this.config.showClock||this.config.showDate?g`
            <weather-clock
              .format=${this.config.showClock?this.config.clockFormat:null}
              .showDate=${!!this.config.showDate}
              .lang=${y.lang}
              .compact=${!0}
            ></weather-clock>
          `:""}
        </div>
      </div>
    `}}z([b({type:Object})],jo.prototype,"hass",void 0),z([b({type:Object})],jo.prototype,"config",void 0);var q=(e)=>({name:e,selector:{boolean:{}}}),Q=(...e)=>({name:"",type:"grid",schema:e}),ae=(e,o)=>({name:e,selector:{select:{mode:"dropdown",options:o.map((a)=>({label:y.t(`editor.${e}_${a}`),value:a}))}}}),n_=(e)=>{let o=`editor.language_${e}`,a=y.t(o);if(a!==o)return a;try{let n=new Intl.DisplayNames([y.lang],{type:"language"}).of(e)??e;return n.charAt(0).toLocaleUpperCase(y.lang)+n.slice(1)}catch{return e}};class Vo extends S{constructor(){super(...arguments);this._config={}}setConfig(e){this._config={name:"",layout:c.layout,height:c.height,show_feels_like:c.showFeelsLike,show_wind:c.showWind,show_wind_gust:c.showWindGust,show_wind_direction:c.showWindDirection,show_humidity:c.showHumidity,show_pressure:c.showPressure,show_uv_index:c.showUvIndex,show_dew_point:c.showDewPoint,show_min_temp:c.showMinTemp,show_precipitation_outlook:c.showPrecipitationOutlook,show_temperature_bars:c.showTemperatureBars,show_aurora:c.showAurora,show_raindrops:c.showRaindrops,show_wind_effects:c.showWindEffects,show_hourly_forecast:c.showHourlyForecast,hourly_forecast_hours:c.hourlyForecastHours,show_daily_forecast:c.showDailyForecast,daily_forecast_days:c.dailyForecastDays,show_sunrise_sunset:c.showSunriseSunset,show_animations:c.showAnimations,visual_style:c.visualStyle,animation_quality:c.animationQuality,show_clock:c.showClock,show_date:c.showDate,clock_position:c.clockPosition,clock_format:c.clockFormat,overlay_opacity:c.overlayOpacity,text_shadow:c.textShadow,language:c.language,wind_speed_unit:c.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...e}}willUpdate(e){if(super.willUpdate(e),e.has("hass")){let o=ge({hassLang:this.hass?.language});if(y.lang!==o)y.setLanguage(o)}}get _schema(){let e=this._config,o=(n)=>e[n]===!0,a=(n,_,i)=>({name:n,type:"expandable",flatten:!0,title:y.t(`editor.section_${n}`),icon:_,schema:i});return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},Q(ae("layout",["default","minimal"]),{name:"height",selector:{number:{min:50,max:800,step:10,mode:"box",unit_of_measurement:"px"}}}),a("appearance","mdi:palette-outline",[Q(ae("visual_style",["modern","classic"]),ae("animation_quality",["high","medium","low"])),Q(q("show_animations"),q("show_aurora")),Q(q("show_raindrops"),q("show_wind_effects")),Q({name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"text_shadow",selector:{number:{min:0,max:3,step:1,mode:"box"}}}),Q({name:"text_color",selector:{text:{}}},{name:"border_radius",selector:{number:{min:0,max:50,step:1,mode:"box",unit_of_measurement:"px"}}}),{name:"sun_position_x",selector:{number:{min:0,max:100,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"sun_position_y",selector:{number:{min:0,max:100,step:1,mode:"slider",unit_of_measurement:"%"}}}]),a("details","mdi:thermometer",[Q(q("show_feels_like"),q("show_min_temp"),q("show_humidity"),q("show_pressure"),q("show_uv_index"),q("show_dew_point"),q("show_sunrise_sunset"),q("show_precipitation_outlook")),q("show_wind"),...o("show_wind")?[Q(q("show_wind_gust"),q("show_wind_direction")),ae("wind_speed_unit",["ms","kmh"])]:[]]),a("forecast","mdi:calendar-clock",[q("show_hourly_forecast"),...o("show_hourly_forecast")?[Q({name:"hourly_forecast_hours",selector:{number:{min:1,step:1,mode:"box"}}},{name:"hourly_forecast_title",selector:{text:{}}})]:[],q("show_daily_forecast"),...o("show_daily_forecast")?[Q({name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"daily_forecast_title",selector:{text:{}}}),q("show_temperature_bars")]:[]]),a("clock","mdi:clock-outline",[{name:"language",selector:{select:{mode:"dropdown",options:[{label:y.t("editor.language_auto"),value:"auto"},...Object.keys(Z).map((n)=>({label:n_(n),value:n}))]}}},Q(q("show_clock"),q("show_date")),...o("show_clock")||o("show_date")?[Q(ae("clock_position",["top","details"]),ae("clock_format",["24h","12h"]))]:[]]),a("sensors","mdi:access-point",[...["temperature_entity","feels_like_entity","humidity_entity","wind_speed_entity","wind_gust_entity","wind_bearing_entity","precipitation_entity","pressure_entity","uv_index_entity","dew_point_entity","aqi_entity","sunrise_entity","sunset_entity"].map((n)=>({name:n,selector:{entity:{domain:["sensor"]}}}))])]}_computeHelper=(e)=>{let o=`editor.${e.name}_helper`,a=y.t(o);return a===o?void 0:a};_computeLabel=(e)=>{let o=`editor.${e.name}`,a=y.t(o);return a===o?e.name:a};_valueChanged(e){let o=e.detail?.value;if(!o)return;this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return g``;return g`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}z([b({attribute:!1})],Vo.prototype,"hass",void 0),z([ke()],Vo.prototype,"_config",void 0);var Da={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qo=(e)=>(...o)=>({_$litDirective$:e,values:o});class Ko{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,a){this._$Ct=e,this._$AM=o,this._$Ci=a}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}var Ea=(e)=>e.strings===void 0;var ze=(e,o)=>{let a=e._$AN;if(a===void 0)return!1;for(let n of a)n._$AO?.(o,!1),ze(n,o);return!0},xe=(e)=>{let o,a;do{if((o=e._$AM)===void 0)break;a=o._$AN,a.delete(e),e=o}while(a?.size===0)},Ya=(e)=>{for(let o;o=e._$AM;e=o){let a=o._$AN;if(a===void 0)o._$AN=a=new Set;else if(a.has(e))break;a.add(e),r_(o)}};function __(e){this._$AN!==void 0?(xe(this),this._$AM=e,Ya(this)):this._$AM=e}function i_(e,o=!1,a=0){let n=this._$AH,_=this._$AN;if(_!==void 0&&_.size!==0)if(o)if(Array.isArray(n))for(let i=a;i<n.length;i++)ze(n[i],!1),xe(n[i]);else n!=null&&(ze(n,!1),xe(n));else ze(this,e)}var r_=(e)=>{e.type==Da.CHILD&&(e._$AP??=i_,e._$AQ??=__)};class So extends Ko{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,a){super._$AT(e,o,a),Ya(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(ze(this,e),xe(this))}setValue(e){if(Ea(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}class Ia extends So{_key="";_onLangChange=null;render(e){return this._key=e,y.t(e)}reconnected(){this._onLangChange=()=>{this.setValue(y.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var l_=qo(Ia);try{Ba(),customElements.define("dynamic-weather-card",jo),customElements.define("dynamic-weather-card-editor",Vo),console.log(`%cDynamic Weather Card %c${Io}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let e={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(e)}catch(e){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",e)}export{l_ as t,ge as resolveLanguage,y as i18n};
