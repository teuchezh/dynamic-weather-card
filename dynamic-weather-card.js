var P=function(o,a,e,n){var i=arguments.length,r=i<3?a:n===null?n=Object.getOwnPropertyDescriptor(a,e):n,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(o,a,e,n);else for(var s=o.length-1;s>=0;s--)if(l=o[s])r=(i<3?l(r):i>3?l(a,e,r):l(a,e))||r;return i>3&&r&&Object.defineProperty(a,e,r),r};var fo=globalThis,Po=fo.ShadowRoot&&(fo.ShadyCSS===void 0||fo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ho=Symbol(),Va=new WeakMap;class zo{constructor(o,a,e){if(this._$cssResult$=!0,e!==Ho)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=a}get styleSheet(){let o=this.o,a=this.t;if(Po&&o===void 0){let e=a!==void 0&&a.length===1;e&&(o=Va.get(a)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),e&&Va.set(a,o))}return o}toString(){return this.cssText}}var Fa=(o)=>new zo(typeof o=="string"?o:o+"",void 0,Ho),B=(o,...a)=>{let e=o.length===1?o[0]:a.reduce((n,i,r)=>n+((l)=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new zo(e,o,Ho)},Ca=(o,a)=>{if(Po)o.adoptedStyleSheets=a.map((e)=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of a){let n=document.createElement("style"),i=fo.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Qo=Po?(o)=>o:(o)=>o instanceof CSSStyleSheet?((a)=>{let e="";for(let n of a.cssRules)e+=n.cssText;return Fa(e)})(o):o;var{is:Ee,defineProperty:Oe,getOwnPropertyDescriptor:Ye,getOwnPropertyNames:xe,getOwnPropertySymbols:Ie,getPrototypeOf:on}=Object,bo=globalThis,ja=bo.trustedTypes,an=ja?ja.emptyScript:"",en=bo.reactiveElementPolyfillSupport,eo=(o,a)=>o,no={toAttribute(o,a){switch(a){case Boolean:o=o?an:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,a){let e=o;switch(a){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch(n){e=null}}return e}},Mo=(o,a)=>!Ee(o,a),Sa={attribute:!0,type:String,converter:no,reflect:!1,useDefault:!1,hasChanged:Mo};Symbol.metadata??=Symbol("metadata"),bo.litPropertyMetadata??=new WeakMap;class J extends HTMLElement{static addInitializer(o){this._$Ei(),(this.l??=[]).push(o)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(o,a=Sa){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(o)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(o,a),!a.noAccessor){let e=Symbol(),n=this.getPropertyDescriptor(o,e,a);n!==void 0&&Oe(this.prototype,o,n)}}static getPropertyDescriptor(o,a,e){let{get:n,set:i}=Ye(this.prototype,o)??{get(){return this[a]},set(r){this[a]=r}};return{get:n,set(r){let l=n?.call(this);i?.call(this,r),this.requestUpdate(o,l,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??Sa}static _$Ei(){if(this.hasOwnProperty(eo("elementProperties")))return;let o=on(this);o.finalize(),o.l!==void 0&&(this.l=[...o.l]),this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(eo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(eo("properties"))){let a=this.properties,e=[...xe(a),...Ie(a)];for(let n of e)this.createProperty(n,a[n])}let o=this[Symbol.metadata];if(o!==null){let a=litPropertyMetadata.get(o);if(a!==void 0)for(let[e,n]of a)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[a,e]of this.elementProperties){let n=this._$Eu(a,e);n!==void 0&&this._$Eh.set(n,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(o){let a=[];if(Array.isArray(o)){let e=new Set(o.flat(1/0).reverse());for(let n of e)a.unshift(Qo(n))}else o!==void 0&&a.push(Qo(o));return a}static _$Eu(o,a){let e=a.attribute;return e===!1?void 0:typeof e=="string"?e:typeof o=="string"?o.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((o)=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((o)=>o(this))}addController(o){(this._$EO??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected&&o.hostConnected?.()}removeController(o){this._$EO?.delete(o)}_$E_(){let o=new Map,a=this.constructor.elementProperties;for(let e of a.keys())this.hasOwnProperty(e)&&(o.set(e,this[e]),delete this[e]);o.size>0&&(this._$Ep=o)}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ca(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((o)=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this._$EO?.forEach((o)=>o.hostDisconnected?.())}attributeChangedCallback(o,a,e){this._$AK(o,e)}_$ET(o,a){let e=this.constructor.elementProperties.get(o),n=this.constructor._$Eu(o,e);if(n!==void 0&&e.reflect===!0){let i=(e.converter?.toAttribute!==void 0?e.converter:no).toAttribute(a,e.type);this._$Em=o,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(o,a){let e=this.constructor,n=e._$Eh.get(o);if(n!==void 0&&this._$Em!==n){let i=e.getPropertyOptions(n),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:no;this._$Em=n;let l=r.fromAttribute(a,i.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(o,a,e,n=!1,i){if(o!==void 0){let r=this.constructor;if(n===!1&&(i=this[o]),e??=r.getPropertyOptions(o),!((e.hasChanged??Mo)(i,a)||e.useDefault&&e.reflect&&i===this._$Ej?.get(o)&&!this.hasAttribute(r._$Eu(o,e))))return;this.C(o,a,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(o,a,{useDefault:e,reflect:n,wrapped:i},r){e&&!(this._$Ej??=new Map).has(o)&&(this._$Ej.set(o,r??a??this[o]),i!==!0||r!==void 0)||(this._$AL.has(o)||(this.hasUpdated||e||(a=void 0),this._$AL.set(o,a)),n===!0&&this._$Em!==o&&(this._$Eq??=new Set).add(o))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}let o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[n,i]of e){let{wrapped:r}=i,l=this[n];r!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,i,l)}}let o=!1,a=this._$AL;try{o=this.shouldUpdate(a),o?(this.willUpdate(a),this._$EO?.forEach((e)=>e.hostUpdate?.()),this.update(a)):this._$EM()}catch(e){throw o=!1,this._$EM(),e}o&&this._$AE(a)}willUpdate(o){}_$AE(o){this._$EO?.forEach((a)=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(o){return!0}update(o){this._$Eq&&=this._$Eq.forEach((a)=>this._$ET(a,this[a])),this._$EM()}updated(o){}firstUpdated(o){}}J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[eo("elementProperties")]=new Map,J[eo("finalized")]=new Map,en?.({ReactiveElement:J}),(bo.reactiveElementVersions??=[]).push("2.1.2");var $o=globalThis,Na=(o)=>o,ho=$o.trustedTypes,Da=ho?ho.createPolicy("lit-html",{createHTML:(o)=>o}):void 0;var T=`lit$${Math.random().toFixed(9).slice(2)}$`,Ta="?"+T,nn=`<${Ta}>`,U=document,ro=()=>U.createComment(""),lo=(o)=>o===null||typeof o!="object"&&typeof o!="function",Ao=Array.isArray,rn=(o)=>Ao(o)||typeof o?.[Symbol.iterator]=="function";var io=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ka=/-->/g,Ba=/>/g,G=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Za=/'/g,qa=/"/g,Ha=/^(?:script|style|textarea|title)$/i,Wo=(o)=>(a,...e)=>({_$litType$:o,strings:a,values:e}),p=Wo(1),z=Wo(2),li=Wo(3),R=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Ja=new WeakMap,L=U.createTreeWalker(U,129);function Qa(o,a){if(!Ao(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Da!==void 0?Da.createHTML(a):a}var ln=(o,a)=>{let e=o.length-1,n=[],i,r=a===2?"<svg>":a===3?"<math>":"",l=io;for(let s=0;s<e;s++){let u=o[s],t,d,g=-1,k=0;for(;k<u.length&&(l.lastIndex=k,d=l.exec(u),d!==null);)k=l.lastIndex,l===io?d[1]==="!--"?l=Ka:d[1]!==void 0?l=Ba:d[2]!==void 0?(Ha.test(d[2])&&(i=RegExp("</"+d[2],"g")),l=G):d[3]!==void 0&&(l=G):l===G?d[0]===">"?(l=i??io,g=-1):d[1]===void 0?g=-2:(g=l.lastIndex-d[2].length,t=d[1],l=d[3]===void 0?G:d[3]==='"'?qa:Za):l===qa||l===Za?l=G:l===Ka||l===Ba?l=io:(l=G,i=void 0);let _=l===G&&o[s+1].startsWith("/>")?" ":"";r+=l===io?u+nn:g>=0?(n.push(t),u.slice(0,g)+"$lit$"+u.slice(g)+T+_):u+T+(g===-2?s:_)}return[Qa(o,r+(o[e]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),n]};class so{constructor({strings:o,_$litType$:a},e){let n;this.parts=[];let i=0,r=0,l=o.length-1,s=this.parts,[u,t]=ln(o,a);if(this.el=so.createElement(u,e),L.currentNode=this.el.content,a===2||a===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=L.nextNode())!==null&&s.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith("$lit$")){let g=t[r++],k=n.getAttribute(d).split(T),_=/([.?@])?(.*)/.exec(g);s.push({type:1,index:i,name:_[2],strings:k,ctor:_[1]==="."?Aa:_[1]==="?"?Wa:_[1]==="@"?Ga:to}),n.removeAttribute(d)}else d.startsWith(T)&&(s.push({type:6,index:i}),n.removeAttribute(d));if(Ha.test(n.tagName)){let d=n.textContent.split(T),g=d.length-1;if(g>0){n.textContent=ho?ho.emptyScript:"";for(let k=0;k<g;k++)n.append(d[k],ro()),L.nextNode(),s.push({type:2,index:++i});n.append(d[g],ro())}}}else if(n.nodeType===8)if(n.data===Ta)s.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(T,d+1))!==-1;)s.push({type:7,index:i}),d+=T.length-1}i++}}static createElement(o,a){let e=U.createElement("template");return e.innerHTML=o,e}}function O(o,a,e=o,n){if(a===R)return a;let i=n!==void 0?e._$Co?.[n]:e._$Cl,r=lo(a)?void 0:a._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(a=O(o,i._$AS(o,a.values),i,n)),a}class $a{constructor(o,a){this._$AV=[],this._$AN=void 0,this._$AD=o,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(o){let{el:{content:a},parts:e}=this._$AD,n=(o?.creationScope??U).importNode(a,!0);L.currentNode=n;let i=L.nextNode(),r=0,l=0,s=e[0];for(;s!==void 0;){if(r===s.index){let u;s.type===2?u=new uo(i,i.nextSibling,this,o):s.type===1?u=new s.ctor(i,s.name,s.strings,this,o):s.type===6&&(u=new La(i,this,o)),this._$AV.push(u),s=e[++l]}r!==s?.index&&(i=L.nextNode(),r++)}return L.currentNode=U,n}p(o){let a=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(o,e,a),a+=e.strings.length-2):e._$AI(o[a])),a++}}class uo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(o,a,e,n){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=o,this._$AB=a,this._$AM=e,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let o=this._$AA.parentNode,a=this._$AM;return a!==void 0&&o?.nodeType===11&&(o=a.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,a=this){o=O(this,o,a),lo(o)?o===F||o==null||o===""?(this._$AH!==F&&this._$AR(),this._$AH=F):o!==this._$AH&&o!==R&&this._(o):o._$litType$!==void 0?this.$(o):o.nodeType!==void 0?this.T(o):rn(o)?this.k(o):this._(o)}O(o){return this._$AA.parentNode.insertBefore(o,this._$AB)}T(o){this._$AH!==o&&(this._$AR(),this._$AH=this.O(o))}_(o){this._$AH!==F&&lo(this._$AH)?this._$AA.nextSibling.data=o:this.T(U.createTextNode(o)),this._$AH=o}$(o){let{values:a,_$litType$:e}=o,n=typeof e=="number"?this._$AC(o):(e.el===void 0&&(e.el=so.createElement(Qa(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===n)this._$AH.p(a);else{let i=new $a(n,this),r=i.u(this.options);i.p(a),this.T(r),this._$AH=i}}_$AC(o){let a=Ja.get(o.strings);return a===void 0&&Ja.set(o.strings,a=new so(o)),a}k(o){Ao(this._$AH)||(this._$AH=[],this._$AR());let a=this._$AH,e,n=0;for(let i of o)n===a.length?a.push(e=new uo(this.O(ro()),this.O(ro()),this,this.options)):e=a[n],e._$AI(i),n++;n<a.length&&(this._$AR(e&&e._$AB.nextSibling,n),a.length=n)}_$AR(o=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);o!==this._$AB;){let e=Na(o).nextSibling;Na(o).remove(),o=e}}setConnected(o){this._$AM===void 0&&(this._$Cv=o,this._$AP?.(o))}}class to{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(o,a,e,n,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=o,this.name=a,this._$AM=n,this.options=i,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=F}_$AI(o,a=this,e,n){let i=this.strings,r=!1;if(i===void 0)o=O(this,o,a,0),r=!lo(o)||o!==this._$AH&&o!==R,r&&(this._$AH=o);else{let l=o,s,u;for(o=i[0],s=0;s<i.length-1;s++)u=O(this,l[e+s],a,s),u===R&&(u=this._$AH[s]),r||=!lo(u)||u!==this._$AH[s],u===F?o=F:o!==F&&(o+=(u??"")+i[s+1]),this._$AH[s]=u}r&&!n&&this.j(o)}j(o){o===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o??"")}}class Aa extends to{constructor(){super(...arguments),this.type=3}j(o){this.element[this.name]=o===F?void 0:o}}class Wa extends to{constructor(){super(...arguments),this.type=4}j(o){this.element.toggleAttribute(this.name,!!o&&o!==F)}}class Ga extends to{constructor(o,a,e,n,i){super(o,a,e,n,i),this.type=5}_$AI(o,a=this){if((o=O(this,o,a,0)??F)===R)return;let e=this._$AH,n=o===F&&e!==F||o.capture!==e.capture||o.once!==e.once||o.passive!==e.passive,i=o!==F&&(e===F||n);n&&this.element.removeEventListener(this.name,this,e),i&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,o):this._$AH.handleEvent(o)}}class La{constructor(o,a,e){this.element=o,this.type=6,this._$AN=void 0,this._$AM=a,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(o){O(this,o)}}var sn=$o.litHtmlPolyfillSupport;sn?.(so,uo),($o.litHtmlVersions??=[]).push("3.3.2");var Ua=(o,a,e)=>{let n=e?.renderBefore??a,i=n._$litPart$;if(i===void 0){let r=e?.renderBefore??null;n._$litPart$=i=new uo(a.insertBefore(ro(),r),r,void 0,e??{})}return i._$AI(o),i};var Go=globalThis;class C extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){let a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=Ua(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}}C._$litElement$=!0,C.finalized=!0,Go.litElementHydrateSupport?.({LitElement:C});var un=Go.litElementPolyfillSupport;un?.({LitElement:C});(Go.litElementVersions??=[]).push("4.2.2");var tn={attribute:!0,type:String,converter:no,reflect:!1,hasChanged:Mo},dn=(o=tn,a,e)=>{let{kind:n,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(e.name,o),n==="accessor"){let{name:l}=e;return{set(s){let u=a.get.call(this);a.set.call(this,s),this.requestUpdate(l,u,o,!0,s)},init(s){return s!==void 0&&this.C(l,void 0,o,s),s}}}if(n==="setter"){let{name:l}=e;return function(s){let u=this[l];a.call(this,s),this.requestUpdate(l,u,o,!0,s)}}throw Error("Unsupported decorator location: "+n)};function b(o){return(a,e)=>typeof e=="object"?dn(o,a,e):((n,i,r)=>{let l=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),l?Object.getOwnPropertyDescriptor(i,r):void 0})(o,a,e)}function _o(o){return b({...o,state:!0,attribute:!1})}var Ra="0.0.0-dev",K={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},Xa=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],m={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showPressure:!1,showUvIndex:!1,showDewPoint:!1,showMinTemp:!0,showPrecipitationOutlook:!1,showTemperatureBars:!1,showAurora:!1,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,hourlyForecastTitle:null,dailyForecastTitle:null,showSunriseSunset:!1,showClock:!1,showDate:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,textShadow:1,language:"auto",height:null,borderRadius:null,sunPositionX:null,sunPositionY:null,textColor:null,windSpeedUnit:"ms",showAnimations:!0,layout:"default",visualStyle:"modern",animationQuality:"high"};var Ea={sunny:"Solskin",clear:"Klart",overcast:"Overskyet",cloudy:"Skyet",partlycloudy:"Delvist skyet",rainy:"Regnvejr",rain:"Regn",snowy:"Snevejr",snow:"Sne",foggy:"Tåget",fog:"Tåge",lightning:"Lyn","lightning-rainy":"Tordenvejr",pouring:"Kraftig regn","snowy-rainy":"Slud",hail:"Hagl","clear-night":"Klar nat",windy:"Blæsende","windy-variant":"Blæsende, overskyet",feels_like:"Føles som",forecast_title:"Dagens vejrudsigt",daily_forecast_title:"Daglig vejrudsigt",no_data:"Ingen data",forecast_unavailable:"Vejrudsigt utilgængelig",weather:"Vejr",language:"Sprog",wind_unit_kmh:"km/t",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knob",wind_unit_fts:"ft/s",show_clock:"Vis aktuel tid",am:"FM",pm:"EM",pressure:"Lufttryk",uv_index:"UV-indeks",dew_point:"Dugpunkt",aqi:"Luftkvalitetsindeks",precipitation_outlook:{start:"{kind} ventes omkring {time}",soon:"{kind} ventes snart",stop:"{kind} stopper omkring {time}",continues:"{kind} i mindst {hours} timer mere",rain:"Regn",snow:"Sne",sleet:"Slud",hail:"Hagl",storm:"Tordenvejr"},editor:{entity:"Vejrentitet",name:"Korttitel",layout:"Layout",layout_default:"Standard",layout_minimal:"Minimal",height:"Korthøjde",show_feels_like:'Vis "Føles som"',show_wind:"Vis vindhastighed",show_wind_gust:"Vis vindstød",show_wind_direction:"Vis vindretning",show_humidity:"Vis luftfugtighed",show_min_temp:"Vis min. temperatur",show_hourly_forecast:"Vis timevis vejrudsigt",hourly_forecast_hours:"Timer i timevis vejrudsigt",show_daily_forecast:"Vis daglig vejrudsigt",daily_forecast_days:"Dage i daglig vejrudsigt",show_sunrise_sunset:"Vis solopgang/solnedgang",sunrise_entity:"Solopgang-entitet",sunset_entity:"Solnedgang-entitet",show_clock:"Vis ur",clock_position:"Urplacering",clock_position_top:"Øverst",clock_position_details:"Detaljerække",clock_format:"Urformat",clock_format_12h:"12-timer (FM/EM)",clock_format_24h:"24-timer",overlay_opacity:"Overlejringsopacitet",language:"Sprog",language_auto:"Automatisk",language_en:"Engelsk",language_ru:"Russisk",language_de:"Tysk",language_nl:"Nederlandsk",language_fr:"Fransk",language_es:"Spansk",language_it:"Italiensk",language_sk:"Slovakisk",language_hu:"Ungarsk",wind_speed_unit:"Vindhastighed enhed",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/t"},demo:{pageTitle:"Dynamisk vejrkort",pageSubtitle:"Interaktiv demo og konfigurationsværktøj",livePreview:"Live forhåndsvisning",configuration:"Konfiguration",quickPresets:"Hurtige forudindstillinger",sunnyDay:"Solrig dag",rainy:"Regnvejr",snowy:"Snevejr",clearNight:"Klar nat",weatherCondition:"Vejrforhold",condition:"Tilstand",temperature:"Temperatur",humidity:"Luftfugtighed (%)",windSpeed:"Vindhastighed",timeOfDay:"Tidspunkt",timeMode:"Tidstilstand",autoTime:"Automatisk (aktuel tid)",manualControl:"Manuel styring",sunrise:"Solopgang",day:"Dag",sunset:"Solnedgang",night:"Nat",currentTime:"Aktuel tid",displayOptions:"Visningsindstillinger",cardName:"Kortnavn",height:"Højde (px)",feelsLike:"Føles som temperatur",minTemp:"Min. temperatur",windDirection:"Vindretning",windGust:"Vindstød",hourlyForecast:"Timevis vejrudsigt",dailyForecast:"Daglig vejrudsigt",sunriseSunset:"Solopgang/solnedgang",showClock:"Ur",clockPosition:"Urplacering",clockPositionTop:"Øverst til højre",clockPositionDetails:"Detaljerække",clockFormat:"Urformat",clockFormat12h:"12-timer (FM/EM)",clockFormat24h:"24-timer",overlayOpacity:"Overlejringsopacitet (0-1)",windSpeedUnit:"Vindhastighed enhed",dailyForecastDays:"Dage i daglig vejrudsigt",hourlyForecastHours:"Timer i timevis vejrudsigt",updateCard:"Opdater kort",startDemo:"Start demo-tilstand",stopDemo:"Stop demo",madeWith:"Lavet med kærlighed til Home Assistant",loading:"Indlæser kort...",errorTitle:"Kunne ikke indlæse kort",errorDetails:"Tjek browserkonsollen (F12) for detaljer",errorServer:"Sørg for at filen serveres via en lokal server (ikke file://)",placeholderEmpty:"Lad være tom for at skjule",weatherConditions:{sunny:"Solskin",clear:"Klart",clearNight:"Klar nat",partlyCloudy:"Delvist skyet",cloudy:"Skyet",rainy:"Regnvejr",pouring:"Kraftig regn",snowy:"Snevejr",sleet:"Slud",hail:"Hagl",foggy:"Tåget",lightning:"Lyn",thunderstorm:"Tordenvejr"},language:{title:"Sprog",english:"Engelsk",russian:"Russisk",french:"Fransk",german:"Tysk",dutch:"Nederlandsk",spanish:"Spansk",italian:"Italiensk",slovak:"Slovakisk",hungarian:"Ungarsk",danish:"Dansk",polish:"Polsk",portuguese:"Portugisisk",serbian:"Serbisk"}}};var Oa={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",windy:"Windig","windy-variant":"Windig, bewölkt",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",pressure:"Luftdruck",uv_index:"UV-Index",dew_point:"Taupunkt",aqi:"Luftqualitätsindex",precipitation_outlook:{start:"{kind} gegen {time} erwartet",soon:"{kind} in Kürze erwartet",stop:"{kind} endet gegen {time}",continues:"{kind} noch mindestens {hours} Std.",rain:"Regen",snow:"Schnee",sleet:"Schneeregen",hail:"Hagel",storm:"Gewitter"},editor:{entity:"Wetter-Entität",name:"Kartentitel",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kartenhöhe",show_feels_like:"Gefühlte Temperatur anzeigen",show_wind:"Windgeschwindigkeit anzeigen",show_wind_gust:"Windböen anzeigen",show_wind_direction:"Windrichtung anzeigen",show_humidity:"Luftfeuchtigkeit anzeigen",show_min_temp:"Mindesttemperatur anzeigen",show_hourly_forecast:"Stundenprognose anzeigen",hourly_forecast_hours:"Stunden der Prognose",show_daily_forecast:"Tagesprognose anzeigen",daily_forecast_days:"Tage der Prognose",show_sunrise_sunset:"Sonnenaufgang/Sonnenuntergang anzeigen",sunrise_entity:"Sonnenaufgang-Entität",sunset_entity:"Sonnenuntergang-Entität",show_clock:"Uhr anzeigen",clock_position:"Uhrposition",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Zeitformat",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Überlagerungs-Transparenz",text_shadow:"Textschatten-Stärke",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",language_it:"Italienisch",language_sk:"Slowakisch",language_hu:"Ungarisch",language_pt:"Portugiesisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animationen anzeigen"},demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",showClock:"Uhr",clockPosition:"Uhrposition",clockPositionTop:"Oben rechts",clockPositionDetails:"Detailzeile",clockFormat:"Uhrzeitformat",clockFormat12h:"12-Stunden (AM/PM)",clockFormat24h:"24-Stunden",overlayOpacity:"Überlagerungs-Transparenz (0-1)",windSpeedUnit:"Windgeschwindigkeitseinheit",dailyForecastDays:"Tage der Prognose",hourlyForecastHours:"Stunden der Prognose",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar",danish:"Dänisch",polish:"Polnisch",portuguese:"Portugiesisch",serbian:"Serbisch"}}};var Ya={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",windy:"Windy","windy-variant":"Windy, cloudy",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",pressure:"Pressure",uv_index:"UV index",dew_point:"Dew point",aqi:"Air quality index",precipitation_outlook:{start:"{kind} expected around {time}",soon:"{kind} expected soon",stop:"{kind} ending around {time}",continues:"{kind} for at least {hours} more hours",rain:"Rain",snow:"Snow",sleet:"Sleet",hail:"Hail",storm:"Thunderstorms"},editor:{entity:"Weather Entity",name:"Card Title",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",visual_style:"Graphics style",visual_style_modern:"Modern",visual_style_classic:"Classic",animation_quality:"Animation quality",animation_quality_high:"High",animation_quality_medium:"Medium (30 FPS, fewer particles)",animation_quality_low:"Low (20 FPS, for slow devices)",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",hourly_forecast_title:"Hourly Forecast Title",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",daily_forecast_title:"Daily Forecast Title",show_sunrise_sunset:"Show Sunrise/Sunset",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity",sensors:"Sensors (optional, override the weather entity)",temperature_entity:"Temperature Sensor",feels_like_entity:"Feels Like Sensor",humidity_entity:"Humidity Sensor",wind_speed_entity:"Wind Speed Sensor",wind_gust_entity:"Wind Gust Sensor",wind_bearing_entity:"Wind Bearing Sensor",precipitation_entity:"Precipitation Sensor",show_pressure:"Show Pressure",show_uv_index:"Show UV Index",show_dew_point:"Show Dew Point",show_precipitation_outlook:"Show When Precipitation Starts/Stops",show_temperature_bars:"Temperature Bars in Daily Forecast",pressure_entity:"Pressure Sensor",uv_index_entity:"UV Index Sensor",dew_point_entity:"Dew Point Sensor",aqi_entity:"Air Quality (AQI) Sensor",show_clock:"Show Clock",show_date:"Show Date",clock_position:"Clock Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Clock Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Overlay Opacity",text_shadow:"Text Shadow Strength",text_color:"Text Color",border_radius:"Corner Radius",sun_position_x:"Sun/Moon Horizontal Position",sun_position_y:"Sun/Moon Vertical Position",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",language_it:"Italian",language_sk:"Slovak",language_hu:"Hungarian",language_pt:"Portuguese",language_da:"Danish",language_sr:"Serbian",language_pl:"Polish",language_zh:"Chinese",language_tr:"Turkish",language_nb:"Norwegian (Bokmål)",wind_speed_unit:"Wind Speed Unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Show Animations",show_aurora:"Northern Lights on Clear Nights"},demo:{aurora:"Northern lights",windyDay:"Windy",auroraNight:"Aurora",pressure:"Pressure",uvIndex:"UV Index",dewPoint:"Dew Point",aqi:"Air Quality (sensor)",precipitationOutlook:"Rain start/stop time",temperatureBars:"Temperature bars",pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",moonPhase:"Moon Phase",moonPhaseAuto:"🗓️ Auto (Today)",visualStyle:"Graphics Style",visualStyleModern:"✨ Modern",visualStyleClassic:"🎨 Classic",animationQuality:"Animation Quality",qualityHigh:"High (60 FPS)",qualityMedium:"Medium (30 FPS)",qualityLow:"Low (20 FPS)",tabWeather:"Weather",tabTime:"Time",tabLook:"Look",tabContent:"Content",tabMore:"More",windBearing:"Wind Direction",stationSensorsHint:"Station sensors override temperature, humidity, wind and precipitation with mock personal weather station values.",autoShort:"Auto",playSpeed:"Cycle length",play24h:"Play 24 hours",pause:"Pause",qualityHighShort:"High",qualityMediumShort:"Medium",qualityLowShort:"Low",animations:"Animations",layout:"Layout",layoutDefault:"Default",layoutMinimal:"Minimal",textShadow:"Text Shadow",details:"Details",humidityToggle:"Humidity",clockAndDate:"Clock",forecasts:"Forecasts",placeholderDefault:"Default",links:"Links",documentation:"Documentation",reportIssue:"Report an issue",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",showClock:"Clock",stationSensors:"Station sensors",showDate:"Date",textColor:"Text Color",borderRadius:"Corner Radius (px)",sunPositionX:"Sun/Moon X (%)",sunPositionY:"Sun/Moon Y (%)",clockPosition:"Clock Position",clockPositionTop:"Top right",clockPositionDetails:"Details row",clockFormat:"Clock Format",clockFormat12h:"12-hour (AM/PM)",clockFormat24h:"24-hour",overlayOpacity:"Overlay Opacity (0-1)",windSpeedUnit:"Wind Speed Unit",dailyForecastDays:"Daily Forecast Days",hourlyForecastHours:"Hourly Forecast Hours",hourlyForecastTitle:"Hourly Forecast Title",dailyForecastTitle:"Daily Forecast Title",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{windy:"Windy",windyVariant:"Windy, cloudy",sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian",slovak:"Slovak",hungarian:"Magyar",danish:"Danish",polish:"Polish",portuguese:"Portuguese",serbian:"Serbian",chinese:"Chinese",turkish:"Turkish",norwegian:"Norwegian (Bokmål)"}}};var xa={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",windy:"Ventoso","windy-variant":"Ventoso, nublado",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",pressure:"Presión",uv_index:"Índice UV",dew_point:"Punto de rocío",aqi:"Índice de calidad del aire",precipitation_outlook:{start:"{kind}: empieza hacia {time}",soon:"{kind}: empieza pronto",stop:"{kind}: termina hacia {time}",continues:"{kind}: al menos {hours} h más",rain:"Lluvia",snow:"Nieve",sleet:"Aguanieve",hail:"Granizo",storm:"Tormentas"},editor:{entity:"Entidad de clima",name:"Título de la tarjeta",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Altura de la tarjeta",show_feels_like:"Mostrar sensación térmica",show_wind:"Mostrar velocidad del viento",show_wind_gust:"Mostrar ráfaga de viento",show_wind_direction:"Mostrar dirección del viento",show_humidity:"Mostrar humedad",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar pronóstico por horas",hourly_forecast_hours:"Horas del pronóstico",show_daily_forecast:"Mostrar pronóstico diario",daily_forecast_days:"Días del pronóstico",show_sunrise_sunset:"Mostrar amanecer/atardecer",sunrise_entity:"Entidad de amanecer",sunset_entity:"Entidad de atardecer",show_clock:"Mostrar reloj",clock_position:"Posición del reloj",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato de hora",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidad de superposición",text_shadow:"Intensidad de sombra de texto",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",language_pt:"Portugués",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Mostrar animaciones"},demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",showClock:"Reloj",clockPosition:"Posición del Reloj",clockPositionTop:"Arriba a la derecha",clockPositionDetails:"Línea de detalles",clockFormat:"Formato del Reloj",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidad de Superposición (0-1)",windSpeedUnit:"Unidad de Velocidad del Viento",dailyForecastDays:"Días de Previsión",hourlyForecastHours:"Horas de Previsión",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar",danish:"Danés",polish:"Polaco",portuguese:"Portugués",serbian:"Serbio"}}};var Ia={sunny:"Päikeseline",clear:"Pilvitu",overcast:"Lauspilves",cloudy:"Pilves",partlycloudy:"Vahelduv pilvisus",rainy:"Vihmane",rain:"Vihm",snowy:"Lumine",snow:"Lumi",foggy:"Udune",fog:"Udu",windy:"Tuuline","windy-variant":"Tuuline, pilves"};var oe={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",windy:"Venteux","windy-variant":"Venteux, nuageux",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",pressure:"Pression",uv_index:"Indice UV",dew_point:"Point de rosée",aqi:"Indice de qualité de l'air",precipitation_outlook:{start:"{kind} : début vers {time}",soon:"{kind} : début imminent",stop:"{kind} : fin vers {time}",continues:"{kind} : encore au moins {hours} h",rain:"Pluie",snow:"Neige",sleet:"Neige fondue",hail:"Grêle",storm:"Orages"},editor:{entity:"Entité météo",name:"Titre de la carte",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Hauteur de la carte",show_feels_like:"Afficher le ressenti",show_wind:"Afficher la vitesse du vent",show_wind_gust:"Afficher les rafales",show_wind_direction:"Afficher la direction du vent",show_humidity:"Afficher l'humidité",show_min_temp:"Afficher la température minimale",show_hourly_forecast:"Afficher la prévision horaire",hourly_forecast_hours:"Heures de prévision",show_daily_forecast:"Afficher la prévision quotidienne",daily_forecast_days:"Jours de prévision",show_sunrise_sunset:"Afficher lever/coucher du soleil",sunrise_entity:"Entité de lever du soleil",sunset_entity:"Entité de coucher du soleil",show_clock:"Afficher l'horloge",clock_position:"Position de l'horloge",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format de l'heure",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Opacité du voile",text_shadow:"Intensité de l'ombre du texte",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",language_it:"Italien",language_sk:"Slovaque",language_hu:"Hongrois",language_pt:"Portugais",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Afficher les animations"},demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",showClock:"Horloge",clockPosition:"Position de l'horloge",clockPositionTop:"En haut à droite",clockPositionDetails:"Ligne de détails",clockFormat:"Format de l'horloge",clockFormat12h:"12 heures (AM/PM)",clockFormat24h:"24 heures",overlayOpacity:"Opacité du voile (0-1)",windSpeedUnit:"Unité de vitesse du vent",dailyForecastDays:"Jours de prévision",hourlyForecastHours:"Heures de prévision",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar",danish:"Danois",polish:"Polonais",portuguese:"Portugais",serbian:"Serbe"}}};var ae={sunny:"Napos",clear:"Derült",overcast:"Borult",cloudy:"Felhős",partlycloudy:"Részben felhős",rainy:"Esős",rain:"Eső",snowy:"Havas",snow:"Hó",foggy:"Ködös",fog:"Köd",lightning:"Villámlás","lightning-rainy":"Zivatar",pouring:"Heves eső","snowy-rainy":"Havas eső",hail:"Jégeső","clear-night":"Derült éj",windy:"Szeles","windy-variant":"Szeles, felhős",feels_like:"Hőérzet",forecast_title:"Mai előrejelzés",daily_forecast_title:"Napi előrejelzés",no_data:"Nincs adat",forecast_unavailable:"Előrejelzés nem elérhető",weather:"Időjárás",language:"Nyelv",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"csomó",wind_unit_fts:"ft/s",show_clock:"Aktuális idő mutatása",am:"DE",pm:"DU",pressure:"Légnyomás",uv_index:"UV-index",dew_point:"Harmatpont",aqi:"Levegőminőségi index",precipitation_outlook:{start:"{kind} várható {time} körül",soon:"{kind} hamarosan várható",stop:"{kind} {time} körül eláll",continues:"{kind} még legalább {hours} órán át",rain:"Eső",snow:"Hó",sleet:"Havas eső",hail:"Jégeső",storm:"Zivatar"},editor:{entity:"Időjárás entitás",name:"Kártya címe",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kártya magasság",show_feels_like:"Hőérzet mutatása",show_wind:"Szélsebesség mutatása",show_wind_gust:"Széllökések mutatása",show_wind_direction:"Szélirány mutatása",show_humidity:"Páratartalom mutatása",show_min_temp:"Min. hőmérséklet",show_hourly_forecast:"Óránkénti előrejelzés",hourly_forecast_hours:"Óránkénti órák száma",show_daily_forecast:"Napi előrejelzés",daily_forecast_days:"Napok száma a napi előrejelzésben",show_sunrise_sunset:"Napkelte/Napnyugta",sunrise_entity:"Napkelte entitás",sunset_entity:"Napnyugta entitás",show_clock:"Óra mutatása",clock_position:"Óra pozíció",clock_position_top:"Felül",clock_position_details:"Részletek",clock_format:"Óra formátum",clock_format_12h:"12 órás (DE/DU)",clock_format_24h:"24 órás",overlay_opacity:"Fedőréteg átlátszóság",text_shadow:"Szövegárnyék erőssége",language:"Nyelv",language_auto:"Automatikus",language_en:"Angol",language_ru:"Orosz",language_de:"Német",language_nl:"Holland",language_fr:"Francia",language_es:"Spanyol",language_it:"Olasz",language_hu:"Magyar",language_sk:"Szlovák",language_pt:"Portugál",wind_speed_unit:"Szélsebesség egység",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animációk megjelenítése"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interaktív demó és beállító eszköz",livePreview:"Élő előnézet",configuration:"Beállítások",quickPresets:"Gyors presetek",sunnyDay:"Napos nap",rainy:"Esős",snowy:"Havas",clearNight:"Derült éj",weatherCondition:"Időjárási állapot",condition:"Állapot",temperature:"Hőmérséklet",humidity:"Páratartalom (%)",windSpeed:"Szélsebesség",timeOfDay:"Napszak",timeMode:"Idő mód",autoTime:"Automatikus (aktuális idő)",manualControl:"Kézi vezérlés",sunrise:"Napkelte",day:"Nappal",sunset:"Napnyugta",night:"Éjszaka",currentTime:"Aktuális idő",displayOptions:"Megjelenítés",cardName:"Kártya neve",height:"Magasság (px)",feelsLike:"Hőérzet",minTemp:"Min. hőmérséklet",windDirection:"Szélirány",windGust:"Széllökés",hourlyForecast:"Óránkénti előrejelzés",dailyForecast:"Napi előrejelzés",sunriseSunset:"Napkelte/Napnyugta",showClock:"Óra",clockPosition:"Óra pozíció",clockPositionTop:"Jobb felső",clockPositionDetails:"Részletek sora",clockFormat:"Óra formátum",clockFormat12h:"12 órás (DE/DU)",clockFormat24h:"24 órás",overlayOpacity:"Fedőréteg átlátszóság (0–1)",windSpeedUnit:"Szélsebesség egység",dailyForecastDays:"Napi napok",hourlyForecastHours:"Óránkénti órák",updateCard:"Kártya frissítése",startDemo:"Demó indítása",stopDemo:"Demó leállítása",madeWith:"Szeretettel a Home Assistanthez",loading:"Kártya betöltése…",errorTitle:"Nem sikerült betölteni",errorDetails:"Részletek a böngésző konzolban (F12)",errorServer:"A fájlt helyi szerveren szolgáld ki (nem file://)",placeholderEmpty:"Üresen hagyva elrejt",weatherConditions:{sunny:"Napos",clear:"Derült",clearNight:"Derült éj",partlyCloudy:"Részben felhős",cloudy:"Felhős",rainy:"Esős",pouring:"Zuhogó eső",snowy:"Havas",sleet:"Havas eső",hail:"Jégeső",foggy:"Ködös",lightning:"Villámlás",thunderstorm:"Zivatar"},language:{title:"Nyelv",english:"Angol",russian:"Orosz",french:"Francia",german:"Német",dutch:"Holland",spanish:"Spanyol",italian:"Olasz",hungarian:"Magyar",slovak:"Slovenčina",danish:"Dán",polish:"Lengyel",portuguese:"Portugál",serbian:"Szerb"}}};var ee={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",windy:"Ventoso","windy-variant":"Ventoso, nuvoloso",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",pressure:"Pressione",uv_index:"Indice UV",dew_point:"Punto di rugiada",aqi:"Indice di qualità dell'aria",precipitation_outlook:{start:"{kind}: inizio verso {time}",soon:"{kind}: inizio a breve",stop:"{kind}: fine verso {time}",continues:"{kind}: ancora almeno {hours} h",rain:"Pioggia",snow:"Neve",sleet:"Nevischio",hail:"Grandine",storm:"Temporali"},editor:{entity:"Entità meteo",name:"Titolo della scheda",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Altezza della scheda",show_feels_like:"Mostra temperatura percepita",show_wind:"Mostra velocità del vento",show_wind_gust:"Mostra raffiche di vento",show_wind_direction:"Mostra direzione del vento",show_humidity:"Mostra umidità",show_min_temp:"Mostra temperatura minima",show_hourly_forecast:"Mostra previsione oraria",hourly_forecast_hours:"Ore di previsione",show_daily_forecast:"Mostra previsione giornaliera",daily_forecast_days:"Giorni di previsione",show_sunrise_sunset:"Mostra alba/tramonto",sunrise_entity:"Entità alba",sunset_entity:"Entità tramonto",show_clock:"Mostra orologio",clock_position:"Posizione orologio",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato orario",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Opacità sovrapposizione",text_shadow:"Intensità ombra testo",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",language_it:"Italiano",language_sk:"Slovacco",language_hu:"Ungherese",language_pt:"Portoghese",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Mostra animazioni"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",showClock:"Orologio",clockPosition:"Posizione Orologio",clockPositionTop:"In alto a destra",clockPositionDetails:"Riga dettagli",clockFormat:"Formato Orologio",clockFormat12h:"12 ore (AM/PM)",clockFormat24h:"24 ore",overlayOpacity:"Opacità Sovrapposizione (0-1)",windSpeedUnit:"Unità Velocità Vento",dailyForecastDays:"Giorni di Previsione",hourlyForecastHours:"Ore di Previsione",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar",danish:"Danese",polish:"Polacco",portuguese:"Portoghese",serbian:"Serbo"}}};var ne={sunny:"Sol",clear:"Klart",overcast:"Overskyet",cloudy:"Skyet",partlycloudy:"Delvis skyet",rainy:"Regn",rain:"Regn",snowy:"Snø",snow:"Snø",foggy:"Tåke",fog:"Tåke",lightning:"Lyn","lightning-rainy":"Tordenvær",pouring:"Kraftig regn","snowy-rainy":"Sludd",hail:"Hagl","clear-night":"Klar natt",windy:"Vindfullt","windy-variant":"Vindfullt, skyet",feels_like:"Føles som",forecast_title:"Dagens værvarsel",daily_forecast_title:"Daglig værvarsel",no_data:"Ingen data",forecast_unavailable:"Værvarsel utilgjengelig",weather:"Vær",language:"Språk",wind_unit_kmh:"km/t",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knop",wind_unit_fts:"ft/s",show_clock:"Vis gjeldende klokkeslett",am:"AM",pm:"PM",pressure:"Lufttrykk",uv_index:"UV-indeks",dew_point:"Duggpunkt",aqi:"Luftkvalitetsindeks",precipitation_outlook:{start:"{kind} ventes rundt {time}",soon:"{kind} ventes snart",stop:"{kind} slutter rundt {time}",continues:"{kind} i minst {hours} timer til",rain:"Regn",snow:"Snø",sleet:"Sludd",hail:"Hagl",storm:"Tordenvær"},editor:{entity:"Værentitet",name:"Korttittel",layout:"Oppsett",layout_default:"Standard",layout_minimal:"Minimal",height:"Korthøyde",show_feels_like:"Vis føles som",show_wind:"Vis vindhastighet",show_wind_gust:"Vis vindkast",show_wind_direction:"Vis vindretning",show_humidity:"Vis luftfuktighet",show_min_temp:"Vis minimumstemperatur",show_hourly_forecast:"Vis værvarsel time for time",hourly_forecast_hours:"Antall timer i varselet",show_daily_forecast:"Vis daglig værvarsel",daily_forecast_days:"Antall dager i varselet",show_sunrise_sunset:"Vis soloppgang/solnedgang",sunrise_entity:"Soloppgangsentitet",sunset_entity:"Solnedgangsentitet",show_clock:"Vis klokke",clock_position:"Klokkeplassering",clock_position_top:"Øverst",clock_position_details:"Detaljer",clock_format:"Klokkeformat",clock_format_12h:"12-timers (AM/PM)",clock_format_24h:"24-timers",overlay_opacity:"Gjennomsiktighet for overlegg",text_shadow:"Tekstskygge",language:"Språk",language_auto:"Automatisk",language_en:"Engelsk",language_ru:"Russisk",language_de:"Tysk",language_nl:"Nederlandsk",language_fr:"Fransk",language_es:"Spansk",language_it:"Italiensk",language_sk:"Slovakisk",language_hu:"Ungarsk",language_pt:"Portugisisk",language_da:"Dansk",language_sr:"Serbisk",language_pl:"Polsk",language_zh:"Kinesisk",language_tr:"Tyrkisk",language_nb:"Norsk (bokmål)",wind_speed_unit:"Vindhastighetsenhet",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/t",show_animations:"Vis animasjoner"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interaktiv demo og konfigurasjonsverktøy",livePreview:"Forhåndsvisning",configuration:"Konfigurasjon",quickPresets:"Hurtigvalg",sunnyDay:"Solskinnsdag",rainy:"Regn",snowy:"Snø",clearNight:"Klar natt",weatherCondition:"Værforhold",condition:"Forhold",temperature:"Temperatur",humidity:"Luftfuktighet (%)",windSpeed:"Vindhastighet",timeOfDay:"Tid på døgnet",timeMode:"Tidsmodus",autoTime:"Automatisk (gjeldende tid)",manualControl:"Manuell styring",sunrise:"Soloppgang",day:"Dag",sunset:"Solnedgang",night:"Natt",currentTime:"Gjeldende tid",displayOptions:"Visningsvalg",cardName:"Kortnavn",height:"Høyde (px)",feelsLike:"Føles som-temperatur",minTemp:"Minimumstemperatur",windDirection:"Vindretning",windGust:"Vindkast",hourlyForecast:"Værvarsel time for time",dailyForecast:"Daglig værvarsel",sunriseSunset:"Soloppgang/solnedgang",showClock:"Klokke",clockPosition:"Klokkeplassering",clockPositionTop:"Øverst til høyre",clockPositionDetails:"Detaljrad",clockFormat:"Klokkeformat",clockFormat12h:"12-timers (AM/PM)",clockFormat24h:"24-timers",overlayOpacity:"Gjennomsiktighet for overlegg (0-1)",windSpeedUnit:"Vindhastighetsenhet",dailyForecastDays:"Dager i daglig værvarsel",hourlyForecastHours:"Timer i værvarsel time for time",updateCard:"Oppdater kort",startDemo:"Start demomodus",stopDemo:"Stopp demo",madeWith:"Laget med kjærlighet for Home Assistant",loading:"Laster kort...",errorTitle:"Kunne ikke laste kortet",errorDetails:"Sjekk nettleserkonsollen (F12) for detaljer",errorServer:"Sørg for at filen serveres via en lokal server (ikke file://)",placeholderEmpty:"La stå tom for å skjule",weatherConditions:{sunny:"Sol",clear:"Klart",clearNight:"Klar natt",partlyCloudy:"Delvis skyet",cloudy:"Skyet",rainy:"Regn",pouring:"Kraftig regn",snowy:"Snø",sleet:"Sludd",hail:"Hagl",foggy:"Tåke",lightning:"Lyn",thunderstorm:"Tordenvær"},language:{title:"Språk",english:"Engelsk",russian:"Russisk",french:"Fransk",german:"Tysk",dutch:"Nederlandsk",spanish:"Spansk",italian:"Italiensk",slovak:"Slovakisk",hungarian:"Ungarsk",danish:"Dansk",polish:"Polsk",portuguese:"Portugisisk",serbian:"Serbisk",chinese:"Kinesisk",turkish:"Tyrkisk",norwegian:"Norsk (bokmål)"}}};var ie={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",windy:"Winderig","windy-variant":"Winderig, bewolkt",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",pressure:"Luchtdruk",uv_index:"UV-index",dew_point:"Dauwpunt",aqi:"Luchtkwaliteitsindex",precipitation_outlook:{start:"{kind} verwacht rond {time}",soon:"{kind} binnenkort verwacht",stop:"{kind} stopt rond {time}",continues:"{kind} nog minstens {hours} uur",rain:"Regen",snow:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",storm:"Onweer"},editor:{entity:"Weer-entiteit",name:"Kaarttitel",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kaart hoogte",show_feels_like:"Gevoelstemperatuur tonen",show_wind:"Windsnelheid tonen",show_wind_gust:"Windstoten tonen",show_wind_direction:"Windrichting tonen",show_humidity:"Luchtvochtigheid tonen",show_min_temp:"Minimumtemperatuur tonen",show_hourly_forecast:"Uurverwachting tonen",hourly_forecast_hours:"Aantal uren",show_daily_forecast:"Dagverwachting tonen",daily_forecast_days:"Aantal dagen",show_sunrise_sunset:"Zonsopgang/zonsondergang tonen",sunrise_entity:"Zonsopgang-entiteit",sunset_entity:"Zonsondergang-entiteit",show_clock:"Klok tonen",clock_position:"Klokpositie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Tijdformaat",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Overlay-doorzichtigheid",text_shadow:"Tekstschaduw sterkte",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",language_it:"Italiaans",language_sk:"Slowaaks",language_hu:"Hongaars",language_pt:"Portugees",wind_speed_unit:"Windsnelheidseenheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u",show_animations:"Animaties weergeven"},demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",showClock:"Klok",clockPosition:"Klokpositie",clockPositionTop:"Rechtsboven",clockPositionDetails:"Detailregel",clockFormat:"Klokformaat",clockFormat12h:"12-uurs (AM/PM)",clockFormat24h:"24-uurs",overlayOpacity:"Overlay-transparantie (0-1)",windSpeedUnit:"Windsnelheidseenheid",dailyForecastDays:"Voorspellingsdagen",hourlyForecastHours:"Voorspellingsuren",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar",danish:"Deens",polish:"Pools",portuguese:"Portugees",serbian:"Servisch"}}};var re={sunny:"Słonecznie",clear:"Bezchmurnie",overcast:"Pochmurno",cloudy:"Zachmurzenie",partlycloudy:"Częściowe zachmurzenie",rainy:"Deszczowo",rain:"Deszcz",snowy:"Śnieżnie",snow:"Śnieg",foggy:"Mgliście",fog:"Mgła",lightning:"Błyskawice","lightning-rainy":"Burza",pouring:"Ulewa","snowy-rainy":"Deszcz ze śniegiem",hail:"Grad","clear-night":"Bezchmurna noc",windy:"Wietrznie","windy-variant":"Wietrznie, pochmurno",feels_like:"Odczuwalnie",forecast_title:"Prognoza na dziś",daily_forecast_title:"Prognoza dzienna",no_data:"Brak danych",forecast_unavailable:"Prognoza niedostępna",weather:"Pogoda",language:"Język",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"węzły",wind_unit_fts:"ft/s",show_clock:"Pokaż aktualny czas",am:"AM",pm:"PM",pressure:"Ciśnienie",uv_index:"Indeks UV",dew_point:"Punkt rosy",aqi:"Indeks jakości powietrza",precipitation_outlook:{start:"{kind}: początek około {time}",soon:"{kind}: początek wkrótce",stop:"{kind}: koniec około {time}",continues:"{kind}: jeszcze co najmniej {hours} h",rain:"Deszcz",snow:"Śnieg",sleet:"Deszcz ze śniegiem",hail:"Grad",storm:"Burza"},editor:{entity:"Encja pogody",name:"Tytuł karty",layout:"Układ",layout_default:"Domyślny",layout_minimal:"Minimalny",height:"Wysokość karty",show_feels_like:"Pokaż temperaturę odczuwalną",show_wind:"Pokaż prędkość wiatru",show_wind_gust:"Pokaż porywy wiatru",show_wind_direction:"Pokaż kierunek wiatru",show_humidity:"Pokaż wilgotność",show_min_temp:"Pokaż temperaturę minimalną",show_hourly_forecast:"Pokaż prognozę godzinową",hourly_forecast_hours:"Godziny prognozy godzinowej",show_daily_forecast:"Pokaż prognozę dzienną",daily_forecast_days:"Dni prognozy dziennej",show_sunrise_sunset:"Pokaż wschód/zachód słońca",sunrise_entity:"Encja wschodu słońca",sunset_entity:"Encja zachodu słońca",show_clock:"Pokaż zegar",clock_position:"Pozycja zegara",clock_position_top:"Góra",clock_position_details:"Szczegóły",clock_format:"Format zegara",clock_format_12h:"12-godzinny (AM/PM)",clock_format_24h:"24-godzinny",overlay_opacity:"Przezroczystość nakładki",language:"Język",language_auto:"Automatycznie",language_en:"Angielski",language_ru:"Rosyjski",language_de:"Niemiecki",language_nl:"Holenderski",language_fr:"Francuski",language_es:"Hiszpański",language_it:"Włoski",language_sk:"Słowacki",language_hu:"Węgierski",language_pl:"Polski",wind_speed_unit:"Jednostka prędkości wiatru",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamiczna karta pogody",pageSubtitle:"Interaktywne demo i narzędzie konfiguracji",livePreview:"Podgląd na żywo",configuration:"Konfiguracja",quickPresets:"Szybkie ustawienia",sunnyDay:"Słoneczny dzień",rainy:"Deszczowo",snowy:"Śnieżnie",clearNight:"Bezchmurna noc",weatherCondition:"Warunki pogodowe",condition:"Stan",temperature:"Temperatura",humidity:"Wilgotność (%)",windSpeed:"Prędkość wiatru",timeOfDay:"Pora dnia",timeMode:"Tryb czasu",autoTime:"Automatyczny (aktualny czas)",manualControl:"Ręczne sterowanie",sunrise:"Wschód słońca",day:"Dzień",sunset:"Zachód słońca",night:"Noc",currentTime:"Aktualny czas",displayOptions:"Opcje wyświetlania",cardName:"Nazwa karty",height:"Wysokość (px)",feelsLike:"Temperatura odczuwalna",minTemp:"Temperatura minimalna",windDirection:"Kierunek wiatru",windGust:"Porywy wiatru",hourlyForecast:"Prognoza godzinowa",dailyForecast:"Prognoza dzienna",sunriseSunset:"Wschód/Zachód słońca",showClock:"Zegar",clockPosition:"Pozycja zegara",clockPositionTop:"Prawy górny róg",clockPositionDetails:"Wiersz szczegółów",clockFormat:"Format zegara",clockFormat12h:"12-godzinny (AM/PM)",clockFormat24h:"24-godzinny",overlayOpacity:"Przezroczystość nakładki (0-1)",windSpeedUnit:"Jednostka prędkości wiatru",dailyForecastDays:"Dni prognozy dziennej",hourlyForecastHours:"Godziny prognozy godzinowej",updateCard:"Aktualizuj kartę",startDemo:"Uruchom tryb demo",stopDemo:"Zatrzymaj demo",madeWith:"Stworzone z miłością dla Home Assistant",loading:"Ładowanie karty...",errorTitle:"Nie udało się załadować karty",errorDetails:"Sprawdź konsolę przeglądarki (F12), aby zobaczyć szczegóły",errorServer:"Upewnij się, że plik jest serwowany przez lokalny serwer (nie file://)",placeholderEmpty:"Pozostaw puste, aby ukryć",weatherConditions:{sunny:"Słonecznie",clear:"Bezchmurnie",clearNight:"Bezchmurna noc",partlyCloudy:"Częściowe zachmurzenie",cloudy:"Zachmurzenie",rainy:"Deszczowo",pouring:"Ulewa",snowy:"Śnieżnie",sleet:"Deszcz ze śniegiem",hail:"Grad",foggy:"Mgliście",lightning:"Błyskawice",thunderstorm:"Burza"},language:{title:"Język",english:"Angielski",russian:"Rosyjski",french:"Francuski",german:"Niemiecki",dutch:"Holenderski",spanish:"Hiszpański",italian:"Włoski",slovak:"Słowacki",hungarian:"Węgierski",danish:"Duński",polish:"Polski",portuguese:"Portugalski",serbian:"Serbski"}}};var le={sunny:"Ensolarado",clear:"Limpo",overcast:"Encoberto",cloudy:"Nublado",partlycloudy:"Parcialmente nublado",rainy:"Chuvoso",rain:"Chuva",snowy:"Neve",snow:"Neve",foggy:"Nevoeiro",fog:"Nevoeiro",lightning:"Relâmpagos","lightning-rainy":"Trovoada",pouring:"Chuva forte","snowy-rainy":"Chuva com neve",hail:"Granizo","clear-night":"Noite limpa",windy:"Ventoso","windy-variant":"Ventoso, nublado",feels_like:"Sensação",forecast_title:"Previsão de hoje",daily_forecast_title:"Previsão diária",no_data:"Sem dados",forecast_unavailable:"Previsão indisponível",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"nós",wind_unit_fts:"ft/s",show_clock:"Mostrar hora atual",am:"AM",pm:"PM",pressure:"Pressão",uv_index:"Índice UV",dew_point:"Ponto de orvalho",aqi:"Índice de qualidade do ar",precipitation_outlook:{start:"{kind}: começa por volta de {time}",soon:"{kind}: começa em breve",stop:"{kind}: termina por volta de {time}",continues:"{kind}: pelo menos mais {hours} h",rain:"Chuva",snow:"Neve",sleet:"Chuva com neve",hail:"Granizo",storm:"Trovoadas"},editor:{entity:"Entidade de clima",name:"Título do card",layout:"Layout",layout_default:"Padrão",layout_minimal:"Mínimo",height:"Altura do card",show_feels_like:"Mostrar sensação térmica",show_wind:"Mostrar velocidade do vento",show_wind_gust:"Mostrar rajada de vento",show_wind_direction:"Mostrar direção do vento",show_humidity:"Mostrar humidade",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar previsão horária",hourly_forecast_hours:"Horas da previsão horária",hourly_forecast_title:"Título da previsão horária",show_daily_forecast:"Mostrar previsão diária",daily_forecast_days:"Dias da previsão diária",daily_forecast_title:"Título da previsão diária",show_sunrise_sunset:"Mostrar nascer/pôr do sol",sunrise_entity:"Entidade de nascer do sol",sunset_entity:"Entidade de pôr do sol",sensors:"Sensores (opcional, substituem a entidade meteorológica)",temperature_entity:"Sensor de temperatura",feels_like_entity:"Sensor de sensação térmica",humidity_entity:"Sensor de humidade",wind_speed_entity:"Sensor de velocidade do vento",wind_gust_entity:"Sensor de rajadas de vento",wind_bearing_entity:"Sensor de direção do vento",precipitation_entity:"Sensor de precipitação",show_clock:"Mostrar relógio",show_date:"Mostrar data",clock_position:"Posição do relógio",clock_position_top:"Topo",clock_position_details:"Detalhes",clock_format:"Formato do relógio",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidade do overlay",text_shadow:"Intensidade da sombra do texto",text_color:"Cor do texto",border_radius:"Raio dos cantos",sun_position_x:"Posição horizontal do sol/lua",sun_position_y:"Posição vertical do sol/lua",language:"Idioma",language_auto:"Automático",language_en:"Inglês",language_ru:"Russo",language_de:"Alemão",language_nl:"Holandês",language_fr:"Francês",language_es:"Espanhol",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",language_pt:"Português",language_da:"Dinamarquês",language_sr:"Sérvio",language_pl:"Polaco",language_zh:"Chinês",language_tr:"Turco",language_nb:"Norueguês (Bokmål)",wind_speed_unit:"Unidade de velocidade do vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Mostrar animações"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demonstração interativa e ferramenta de configuração",livePreview:"Pré-visualização ao vivo",configuration:"Configuração",quickPresets:"Predefinições rápidas",sunnyDay:"Dia ensolarado",rainy:"Chuvoso",snowy:"Com neve",clearNight:"Noite limpa",weatherCondition:"Condição climática",condition:"Condição",temperature:"Temperatura",humidity:"Humidade (%)",windSpeed:"Velocidade do vento",timeOfDay:"Hora do dia",timeMode:"Modo de tempo",autoTime:"Automático (hora atual)",manualControl:"Controle manual",sunrise:"Nascer do sol",day:"Dia",sunset:"Pôr do sol",night:"Noite",currentTime:"Hora atual",displayOptions:"Opções de exibição",cardName:"Nome do card",height:"Altura (px)",feelsLike:"Sensação térmica",minTemp:"Temperatura mínima",windDirection:"Direção do vento",windGust:"Rajada de vento",hourlyForecast:"Previsão horária",dailyForecast:"Previsão diária",sunriseSunset:"Nascer/pôr do sol",showClock:"Relógio",stationSensors:"Sensores da estação",showDate:"Data",textColor:"Cor do texto",borderRadius:"Raio dos cantos (px)",sunPositionX:"Sol/lua X (%)",sunPositionY:"Sol/lua Y (%)",clockPosition:"Posição do relógio",clockPositionTop:"Canto superior direito",clockPositionDetails:"Linha de detalhes",clockFormat:"Formato do relógio",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidade do overlay (0-1)",windSpeedUnit:"Unidade de velocidade do vento",dailyForecastDays:"Dias da previsão diária",hourlyForecastHours:"Horas da previsão horária",hourlyForecastTitle:"Título da previsão horária",dailyForecastTitle:"Título da previsão diária",updateCard:"Atualizar card",startDemo:"Iniciar modo demo",stopDemo:"Parar demo",madeWith:"Feito com amor para o Home Assistant",loading:"A carregar card...",errorTitle:"Falha ao carregar o card",errorDetails:"Verifique o console do navegador (F12) para detalhes",errorServer:"Garanta que o ficheiro é servido via servidor local (não file://)",placeholderEmpty:"Deixe em branco para ocultar",weatherConditions:{sunny:"Ensolarado",clear:"Limpo",clearNight:"Noite limpa",partlyCloudy:"Parcialmente nublado",cloudy:"Nublado",rainy:"Chuvoso",pouring:"Chuva forte",snowy:"Com neve",sleet:"Chuva com neve",hail:"Granizo",foggy:"Nevoeiro",lightning:"Relâmpagos",thunderstorm:"Trovoada"},language:{title:"Idioma",english:"Inglês",russian:"Russo",french:"Francês",german:"Alemão",dutch:"Holandês",spanish:"Espanhol",italian:"Italiano",slovak:"Eslovaco",hungarian:"Húngaro",danish:"Dinamarquês",polish:"Polaco",portuguese:"Português",serbian:"Sérvio",chinese:"Chinês",turkish:"Turco",norwegian:"Norueguês (Bokmål)"}}};var se={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",windy:"Ветрено","windy-variant":"Ветрено, облачно",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Язык",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",pressure:"Давление",uv_index:"УФ-индекс",dew_point:"Точка росы",aqi:"Индекс качества воздуха",precipitation_outlook:{start:"{kind} ожидается около {time}",soon:"{kind} ожидается в ближайший час",stop:"{kind} закончится около {time}",continues:"{kind} продлится ещё не меньше {hours} ч",rain:"Дождь",snow:"Снег",sleet:"Мокрый снег",hail:"Град",storm:"Гроза"},editor:{entity:"Погодная сущность",name:"Название карточки",layout:"Layout",layout_default:"Default",layout_minimal:"Минимальный",visual_style:"Стиль графики",visual_style_modern:"Современный",visual_style_classic:"Классический",animation_quality:"Качество анимации",animation_quality_high:"Высокое",animation_quality_medium:"Среднее (30 FPS, меньше частиц)",animation_quality_low:"Низкое (20 FPS, для слабых устройств)",height:"Высота карточки",show_feels_like:"Показывать ощущаемую температуру",show_wind:"Показывать скорость ветра",show_wind_gust:"Показывать порывы ветра",show_wind_direction:"Показывать направление ветра",show_humidity:"Показывать влажность",show_min_temp:"Показывать минимальную температуру",show_hourly_forecast:"Показывать почасовой прогноз",hourly_forecast_hours:"Часы прогноза",hourly_forecast_title:"Заголовок почасового прогноза",show_daily_forecast:"Показывать дневной прогноз",daily_forecast_days:"Дни прогноза",daily_forecast_title:"Заголовок прогноза по дням",show_sunrise_sunset:"Показывать восход/закат",sunrise_entity:"Сущность восхода",sunset_entity:"Сущность заката",sensors:"Датчики (необязательно, заменяют данные погоды)",temperature_entity:"Датчик температуры",feels_like_entity:"Датчик «ощущается как»",humidity_entity:"Датчик влажности",wind_speed_entity:"Датчик скорости ветра",wind_gust_entity:"Датчик порывов ветра",wind_bearing_entity:"Датчик направления ветра",precipitation_entity:"Датчик осадков",show_pressure:"Показывать давление",show_uv_index:"Показывать УФ-индекс",show_dew_point:"Показывать точку росы",show_precipitation_outlook:"Показывать, когда начнутся/закончатся осадки",show_temperature_bars:"Полоски температур в прогнозе по дням",pressure_entity:"Датчик давления",uv_index_entity:"Датчик УФ-индекса",dew_point_entity:"Датчик точки росы",aqi_entity:"Датчик качества воздуха (AQI)",show_clock:"Показывать часы",show_date:"Показывать дату",clock_position:"Позиция часов",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат времени",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Прозрачность подложки",text_shadow:"Интенсивность тени текста",text_color:"Цвет текста",border_radius:"Скругление углов",sun_position_x:"Положение солнца/луны по горизонтали",sun_position_y:"Положение солнца/луны по вертикали",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",language_it:"Итальянский",language_sk:"Словацкий",language_hu:"Венгерский",language_pt:"Португальский",language_da:"Датский",language_sr:"Сербский",language_pl:"Польский",language_zh:"Китайский",language_tr:"Турецкий",language_nb:"Норвежский (букмол)",wind_speed_unit:"Единицы скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч",show_animations:"Показывать анимации",show_aurora:"Северное сияние ясной ночью"},demo:{aurora:"Северное сияние",windyDay:"Ветрено",auroraNight:"Сияние",pressure:"Давление",uvIndex:"УФ-индекс",dewPoint:"Точка росы",aqi:"Качество воздуха (датчик)",precipitationOutlook:"Когда начнётся/закончится дождь",temperatureBars:"Полоски температур",pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",moonPhase:"Фаза луны",moonPhaseAuto:"🗓️ Авто (сегодня)",visualStyle:"Стиль графики",visualStyleModern:"✨ Современный",visualStyleClassic:"🎨 Классический",animationQuality:"Качество анимации",qualityHigh:"Высокое (60 FPS)",qualityMedium:"Среднее (30 FPS)",qualityLow:"Низкое (20 FPS)",tabWeather:"Погода",tabTime:"Время",tabLook:"Вид",tabContent:"Данные",tabMore:"Ещё",windBearing:"Направление ветра",stationSensorsHint:"Сенсоры станции подменяют температуру, влажность, ветер и осадки тестовыми значениями личной метеостанции.",autoShort:"Авто",playSpeed:"Длина цикла",play24h:"Проиграть сутки",pause:"Пауза",qualityHighShort:"Высокое",qualityMediumShort:"Среднее",qualityLowShort:"Низкое",animations:"Анимации",layout:"Макет",layoutDefault:"Обычный",layoutMinimal:"Компактный",textShadow:"Тень текста",details:"Детали",humidityToggle:"Влажность",clockAndDate:"Часы",forecasts:"Прогнозы",placeholderDefault:"По умолчанию",links:"Ссылки",documentation:"Документация",reportIssue:"Сообщить о проблеме",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",showClock:"Часы",stationSensors:"Датчики метеостанции",showDate:"Дата",textColor:"Цвет текста",borderRadius:"Скругление углов (px)",sunPositionX:"Солнце/луна по X (%)",sunPositionY:"Солнце/луна по Y (%)",clockPosition:"Позиция часов",clockPositionTop:"Вверху справа",clockPositionDetails:"В строке деталей",clockFormat:"Формат часов",clockFormat12h:"12-часовой (AM/PM)",clockFormat24h:"24-часовой",overlayOpacity:"Прозрачность подложки (0-1)",windSpeedUnit:"Единицы скорости ветра",dailyForecastDays:"Дни прогноза",hourlyForecastHours:"Часы прогноза",hourlyForecastTitle:"Заголовок почасового прогноза",dailyForecastTitle:"Заголовок прогноза по дням",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{windy:"Ветрено",windyVariant:"Ветрено, облачно",sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar",danish:"Датский",polish:"Польский",portuguese:"Португальский",serbian:"Сербский",chinese:"Китайский",turkish:"Турецкий",norwegian:"Норвежский (букмол)"}}};var ue={sunny:"Slnečno",clear:"Jasno",overcast:"Zamračené",cloudy:"Oblačno",partlycloudy:"Polooblačno",rainy:"Daždivo",rain:"Dážď",snowy:"Sneženie",snow:"Sneh",foggy:"Hmlisto",fog:"Hmla",lightning:"Blesky","lightning-rainy":"Búrka",pouring:"Silný dážď","snowy-rainy":"Dážď so snehom",hail:"Krúpy","clear-night":"Jasná noc",windy:"Veterno","windy-variant":"Veterno, oblačno",feels_like:"Pocitová teplota",forecast_title:"Predpoveď na dnes",daily_forecast_title:"Denná predpoveď",no_data:"Žiadne dáta",forecast_unavailable:"Predpoveď nedostupná",weather:"Počasie",language:"Jazyk",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"uzly",wind_unit_fts:"ft/s",show_clock:"Zobraziť aktuálny čas",am:"dop.",pm:"pop.",pressure:"Tlak",uv_index:"UV index",dew_point:"Rosný bod",aqi:"Index kvality ovzdušia",precipitation_outlook:{start:"{kind} sa očakáva okolo {time}",soon:"{kind} sa očakáva čoskoro",stop:"{kind} skončí okolo {time}",continues:"{kind} ešte aspoň {hours} h",rain:"Dážď",snow:"Sneh",sleet:"Dážď so snehom",hail:"Krupobitie",storm:"Búrka"},editor:{entity:"Entita počasia",name:"Názov karty",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Výška karty",show_feels_like:"Zobraziť pocitovú teplotu",show_wind:"Zobraziť rýchlosť vetra",show_wind_gust:"Zobraziť nárazy vetra",show_wind_direction:"Zobraziť smer vetra",show_humidity:"Zobraziť vlhkosť",show_min_temp:"Zobraziť minimálnu teplotu",show_hourly_forecast:"Zobraziť hodinovú predpoveď",hourly_forecast_hours:"Počet hodín v predpovedi",show_daily_forecast:"Zobraziť dennú predpoveď",daily_forecast_days:"Počet dní v predpovedi",show_sunrise_sunset:"Zobraziť východ/západ slnka",sunrise_entity:"Entita východu slnka",sunset_entity:"Entita západu slnka",show_clock:"Zobraziť hodiny",clock_position:"Pozícia hodín",clock_position_top:"Hore",clock_position_details:"V detailoch",clock_format:"Formát času",clock_format_12h:"12-hodinový (AM/PM)",clock_format_24h:"24-hodinový",overlay_opacity:"Priehľadnosť vrstvy",text_shadow:"Intenzita tieňa textu",language:"Jazyk",language_auto:"Automaticky",language_en:"Angličtina",language_ru:"Ruština",language_de:"Nemčina",language_nl:"Holandčina",language_fr:"Francúzština",language_es:"Španielčina",language_it:"Taliančina",language_sk:"Slovenčina",language_hu:"Maďarčina",language_pt:"Portugalčina",wind_speed_unit:"Jednotka rýchlosti vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Zobraziť animácie"},demo:{pageTitle:"Dynamická karta počasia",pageSubtitle:"Interaktívne demo a konfiguračný nástroj",livePreview:"Živý náhľad",configuration:"Konfigurácia",quickPresets:"Rýchle predvoľby",sunnyDay:"Slnečný deň",rainy:"Daždivo",snowy:"Sneženie",clearNight:"Jasná noc",weatherCondition:"Poveternostné podmienky",condition:"Stav",temperature:"Teplota",humidity:"Vlhkosť (%)",windSpeed:"Rýchlosť vetra",timeOfDay:"Čas dňa",timeMode:"Režim času",autoTime:"Automaticky (Aktuálny čas)",manualControl:"Manuálne ovládanie",sunrise:"Východ slnka",day:"Deň",sunset:"Západ slnka",night:"Noc",currentTime:"Aktuálny čas",displayOptions:"Možnosti zobrazenia",cardName:"Názov karty",height:"Výška (px)",feelsLike:"Pocitová teplota",minTemp:"Minimálna teplota",windDirection:"Smer vetra",windGust:"Nárazy vetra",hourlyForecast:"Hodinová predpoveď",dailyForecast:"Denná predpoveď",sunriseSunset:"Východ/Západ slnka",showClock:"Hodiny",clockPosition:"Pozícia hodín",clockPositionTop:"Vpravo hore",clockPositionDetails:"Riadok s detailmi",clockFormat:"Formát času",clockFormat12h:"12-hodinový (AM/PM)",clockFormat24h:"24-hodinový",overlayOpacity:"Priehľadnosť vrstvy (0-1)",windSpeedUnit:"Jednotka rýchlosti vetra",dailyForecastDays:"Dni dennej predpovede",hourlyForecastHours:"Hodiny hodinovej predpovede",updateCard:"Aktualizovať kartu",startDemo:"Spustiť Demo režim",stopDemo:"Zastaviť Demo",madeWith:"Vytvorené s láskou pre Home Assistant",loading:"Načítavam kartu...",errorTitle:"Nepodarilo sa načítať kartu",errorDetails:"Skontrolujte konzolu prehliadača (F12) pre detaily",errorServer:"Uistite sa, že súbor je poskytovaný cez lokálny server (nie cez file://)",placeholderEmpty:"Ponechajte prázdne pre skrytie",weatherConditions:{sunny:"Slnečno",clear:"Jasno",clearNight:"Jasná noc",partlyCloudy:"Polooblačno",cloudy:"Oblačno",rainy:"Daždivo",pouring:"Lejak",snowy:"Sneženie",sleet:"Dážď so snehom",hail:"Krúpy",foggy:"Hmla",lightning:"Blesky",thunderstorm:"Búrka"},language:{title:"Jazyk",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar",danish:"Dánčina",polish:"Poľština",portuguese:"Portugalčina",serbian:"Srbčina"}}};var te={sunny:"Sunčano",clear:"Vedro",overcast:"Oblačno",cloudy:"Oblačno",partlycloudy:"Delimično oblačno",rainy:"Kišovito",rain:"Kiša",snowy:"Snežno",snow:"Sneg",foggy:"Maglovito",fog:"Magla",lightning:"Grmljavina","lightning-rainy":"Grmljavina sa kišom",pouring:"Pljusak","snowy-rainy":"Susnežica",hail:"Grad","clear-night":"Vedra noć",windy:"Vetrovito","windy-variant":"Vetrovito, oblačno",feels_like:"Subjektivni osećaj",forecast_title:"Prognoza",daily_forecast_title:"Dnevna prognoza",no_data:"Nema podataka",forecast_unavailable:"Prognoza nije dostupna",weather:"Vreme",language:"Jezik",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"čvorova",wind_unit_fts:"ft/s",show_clock:"Prikaži sat",am:"AM",pm:"PM",pressure:"Pritisak",uv_index:"UV indeks",dew_point:"Tačka rose",aqi:"Indeks kvaliteta vazduha",precipitation_outlook:{start:"{kind} se očekuje oko {time}",soon:"{kind} se očekuje uskoro",stop:"{kind} prestaje oko {time}",continues:"{kind} još najmanje {hours} h",rain:"Kiša",snow:"Sneg",sleet:"Susnežica",hail:"Grad",storm:"Grmljavina"},editor:{entity:"Entitet",name:"Naziv (opciono)",layout:"Izgled",layout_default:"Podrazumevano",layout_minimal:"Minimalno",height:"Visina kartice",show_feels_like:"Prikaži subjektivni osećaj",show_wind:"Prikaži vetar",show_wind_gust:"Prikaži udare vetra",show_wind_direction:"Prikaži smer vetra",show_humidity:"Prikaži vlažnost vazduha",show_min_temp:"Prikaži minimalnu temperaturu",show_hourly_forecast:"Prikaži prognozu po satima",hourly_forecast_hours:"Broj sati za prikaz",show_daily_forecast:"Prikaži dnevnu prognozu",daily_forecast_days:"Broj dana za prikaz",show_sunrise_sunset:"Prikaži izlazak/zalazak sunca",sunrise_entity:"Entitet izlaska sunca (opciono)",sunset_entity:"Entitet zalaska sunca (opciono)",show_clock:"Prikaži sat",clock_position:"Pozicija sata",clock_position_top:"Vrh",clock_position_details:"Detalji",clock_format:"Format vremena",clock_format_12h:"12h",clock_format_24h:"24h",overlay_opacity:"Prozirnost pozadine (Overlay)",language:"Jezik",language_auto:"Automatski",language_en:"Engleski",language_ru:"Ruski",language_de:"Nemački",language_nl:"Holandski",language_fr:"Francuski",language_es:"Španski",language_it:"Italijanski",language_sk:"Slovački",language_hu:"Mađarski",wind_speed_unit:"Jedinica brzine vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interaktivni demo i alat za konfiguraciju",livePreview:"Pregled uživo",configuration:"Konfiguracija",quickPresets:"Brza podešavanja",sunnyDay:"Sunčan dan",rainy:"Kišovito",snowy:"Snežno",clearNight:"Vedra noć",weatherCondition:"Vremenske prilike",condition:"Stanje",temperature:"Temperatura",humidity:"Vlažnost (%)",windSpeed:"Brzina vetra",timeOfDay:"Doba dana",timeMode:"Režim vremena",autoTime:"Automatski (trenutno vreme)",manualControl:"Ručno upravljanje",sunrise:"Izlazak sunca",day:"Dan",sunset:"Zalazak sunca",night:"Noć",currentTime:"Trenutno vreme",displayOptions:"Opcije prikaza",cardName:"Naziv kartice",height:"Visina (px)",feelsLike:"Subjektivni osećaj",minTemp:"Min. temp.",windDirection:"Smer vetra",windGust:"Udari vetra",hourlyForecast:"Prognoza po satima",dailyForecast:"Dnevna prognoza",sunriseSunset:"Izlazak/Zalazak",showClock:"Prikaži sat",clockPosition:"Pozicija sata",clockPositionTop:"Gore desno",clockPositionDetails:"U detaljima",clockFormat:"Format sata",clockFormat12h:"12h",clockFormat24h:"24h",overlayOpacity:"Prozirnost (0-1)",windSpeedUnit:"Jedinica brzine",dailyForecastDays:"Broj dana",hourlyForecastHours:"Broj sati",updateCard:"Ažuriraj karticu",startDemo:"Pokreni demo",stopDemo:"Zaustavi demo",madeWith:"Napravljeno za Home Assistant",loading:"Učitavanje kartice...",errorTitle:"Greška pri učitavanju",errorDetails:"Proverite konzolu pregledača (F12) za detalje",errorServer:"Proverite da li se fajl pokreće preko lokalnog servera (ne file://)",placeholderEmpty:"Ostavite prazno za sakrivanje",weatherConditions:{sunny:"Sunčano",clear:"Vedro",clearNight:"Vedra noć",partlyCloudy:"Delimično oblačno",cloudy:"Oblačno",rainy:"Kišovito",pouring:"Pljusak",snowy:"Snežno",sleet:"Susnežica",hail:"Grad",foggy:"Maglovito",lightning:"Grmljavina",thunderstorm:"Grmljavina sa olujom"},language:{title:"Jezik",english:"Engleski",russian:"Ruski",french:"Francuski",german:"Nemački",dutch:"Holandski",spanish:"Španski",italian:"Italijanski",slovak:"Slovački",hungarian:"Mađarski",danish:"Danski",polish:"Poljski",portuguese:"Portugalski",serbian:"Srpski"}}};var de={sunny:"Güneşli",clear:"Açık",overcast:"Kapalı",cloudy:"Bulutlu",partlycloudy:"Parçalı bulutlu",rainy:"Yağmurlu",rain:"Yağmur",snowy:"Karlı",snow:"Kar",foggy:"Sisli",fog:"Sis",lightning:"Şimşekli","lightning-rainy":"Fırtınalı",pouring:"Şiddetli yağmur","snowy-rainy":"Sulu kar",hail:"Dolu","clear-night":"Açık gece",windy:"Rüzgarlı","windy-variant":"Rüzgarlı, bulutlu",feels_like:"Hissedilen",forecast_title:"Saatlik tahmin",daily_forecast_title:"Günlük hava tahmini",no_data:"Veri yok",forecast_unavailable:"Tahmin mevcut değil",weather:"Hava durumu",language:"Dil",wind_unit_kmh:"km/s",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knot",wind_unit_fts:"ft/s",show_clock:"Saati göster",am:"ÖÖ",pm:"ÖS",pressure:"Basınç",uv_index:"UV indeksi",dew_point:"Çiy noktası",aqi:"Hava kalitesi indeksi",precipitation_outlook:{start:"{kind} {time} civarında bekleniyor",soon:"{kind} yakında bekleniyor",stop:"{kind} {time} civarında sona eriyor",continues:"{kind} en az {hours} saat daha sürecek",rain:"Yağmur",snow:"Kar",sleet:"Karla karışık yağmur",hail:"Dolu",storm:"Gök gürültülü fırtına"},editor:{entity:"Hava durumu varlığı",name:"Kart başlığı",layout:"Düzen",layout_default:"Varsayılan",layout_minimal:"Minimal",height:"Kart yüksekliği",show_feels_like:"Hissedileni göster",show_wind:"Rüzgar hızını göster",show_wind_gust:"Rüzgar esintisini göster",show_wind_direction:"Rüzgar yönünü göster",show_humidity:"Nem oranını göster",show_min_temp:"Minimum sıcaklığı göster",show_hourly_forecast:"Saatlik tahmini göster",hourly_forecast_hours:"Tahmin saatleri",show_daily_forecast:"Günlük tahmini göster",daily_forecast_days:"Tahmin günleri",show_sunrise_sunset:"Gün doğumu/batımını göster",sunrise_entity:"Gün doğumu varlığı",sunset_entity:"Gün batımı varlığı",show_clock:"Saati göster",clock_position:"Saat konumu",clock_position_top:"Üstte",clock_position_details:"Detaylar",clock_format:"Saat formatı",clock_format_12h:"12 saat (ÖÖ/ÖS)",clock_format_24h:"24 saat",overlay_opacity:"Kart opaklığı",text_shadow:"Metin Gölgesi Yoğunluğu",language:"Dil",language_auto:"Otomatik",language_en:"İngilizce",language_ru:"Rusça",language_de:"Almanca",language_nl:"Flemenkçe",language_fr:"Fransızca",language_es:"İspanyolca",language_it:"İtalyanca",language_sk:"Slovakça",language_hu:"Macarca",language_pt:"Portekizce",language_da:"Danca",language_sr:"Sırpça",language_pl:"Lehçe",language_tr:"Türkçe",wind_speed_unit:"Rüzgar hız birimi",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/s",show_animations:"Animasyonları göster",language_zh:"Çince"},demo:{pageTitle:"Dinamik Hava Durumu Kartı",pageSubtitle:"Etkileşimli Demo & Yapılandırma Aracı",livePreview:"Canlı önizleme",configuration:"Yapılandırma",quickPresets:"Hızlı hazır ayarlar",sunnyDay:"Güneşli gün",rainy:"Yağmurlu",snowy:"Karlı",clearNight:"Açık gece",weatherCondition:"Hava durumu",condition:"Durum",temperature:"Sıcaklık",humidity:"Nem (%)",windSpeed:"Rüzgar hızı",timeOfDay:"Günün zamanı",timeMode:"Saat modu",autoTime:"Otomatik (mevcut saat)",manualControl:"Manuel kontrol",sunrise:"Gün doğumu",day:"Gündüz",sunset:"Gün batımı",night:"Gece",currentTime:"Mevcut saat",displayOptions:"Görüntüleme seçenekleri",cardName:"Kart adı",height:"Yükseklik (px)",feelsLike:"Hissedilen sıcaklık",minTemp:"Minimum sıcaklık",windDirection:"Rüzgar yönü",windGust:"Rüzgar esintisi",hourlyForecast:"Saatlik tahmin",dailyForecast:"Günlük tahmin",sunriseSunset:"Gün doğumu/batımı",showClock:"Saat",clockPosition:"Saat konumu",clockPositionTop:"Sağ üst",clockPositionDetails:"Detay satırı",clockFormat:"Saat formatı",clockFormat12h:"12 saat (ÖÖ/ÖS)",clockFormat24h:"24 saat",overlayOpacity:"Kaplama opaklığı (0-1)",windSpeedUnit:"Rüzgar hız birimi",dailyForecastDays:"Tahmin günleri",hourlyForecastHours:"Tahmin saatleri",updateCard:"Kartı güncelle",startDemo:"Demo modunu başlat",stopDemo:"Demoyu durdur",madeWith:"Home Assistant için sevgiyle yapıldı",loading:"Kart yükleniyor...",errorTitle:"Kart yüklenemedi",errorDetails:"Daha fazla bilgi için tarayıcı konsolunu (F12) kontrol edin",errorServer:"Dosyanın yerel bir sunucu üzerinden servis edildiğinden emin olun (file:// değil)",placeholderEmpty:"Gizlemek için boş bırakın",weatherConditions:{sunny:"Güneşli",clear:"Açık",clearNight:"Açık gece",partlyCloudy:"Parçalı bulutlu",cloudy:"Bulutlu",rainy:"Yağmurlu",pouring:"Şiddetli yağmur",snowy:"Karlı",sleet:"Sulu kar",hail:"Dolu",foggy:"Sisli",lightning:"Şimşekli",thunderstorm:"Fırtına"},language:{title:"Dil",english:"İngilizce",russian:"Rusça",french:"Fransızca",german:"Almanca",dutch:"Flemenkçe",spanish:"İspanyolca",italian:"İtalyanca",slovak:"Slovakça",hungarian:"Macarca",danish:"Danca",polish:"Lehçe",portuguese:"Portekizce",serbian:"Sırpça",turkish:"Türkçe",chinese:"Çince"}}};var _e={sunny:"晴朗",clear:"晴",overcast:"阴天",cloudy:"多云",partlycloudy:"局部多云",rainy:"有雨",rain:"雨",snowy:"有雪",snow:"雪",foggy:"有雾",fog:"雾",lightning:"雷电","lightning-rainy":"雷阵雨",pouring:"大雨","snowy-rainy":"雨夹雪",hail:"冰雹","clear-night":"晴夜",windy:"有风","windy-variant":"有风，多云",feels_like:"体感温度",forecast_title:"今日预报",daily_forecast_title:"每日预报",no_data:"无数据",forecast_unavailable:"预报不可用",weather:"天气",language:"语言",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"节",wind_unit_fts:"ft/s",show_clock:"显示当前时间",am:"上午",pm:"下午",pressure:"气压",uv_index:"紫外线指数",dew_point:"露点",aqi:"空气质量指数",precipitation_outlook:{start:"{kind}：约{time}开始",soon:"{kind}：即将开始",stop:"{kind}：约{time}结束",continues:"{kind}：至少再持续{hours}小时",rain:"雨",snow:"雪",sleet:"雨夹雪",hail:"冰雹",storm:"雷暴"},editor:{entity:"天气实体",name:"卡片标题",layout:"布局",layout_default:"默认",layout_minimal:"简约",height:"卡片高度",show_feels_like:"显示体感温度",show_wind:"显示风速",show_wind_gust:"显示阵风",show_wind_direction:"显示风向",show_humidity:"显示湿度",show_min_temp:"显示最低温度",show_hourly_forecast:"显示逐小时预报",hourly_forecast_hours:"逐小时预报小时数",show_daily_forecast:"显示每日预报",daily_forecast_days:"每日预报天数",show_sunrise_sunset:"显示日出/日落",sunrise_entity:"日出时间实体",sunset_entity:"日落时间实体",show_clock:"显示时钟",clock_position:"时钟位置",clock_position_top:"顶部",clock_position_details:"详情栏",clock_format:"时间格式",clock_format_12h:"12小时制 (AM/PM)",clock_format_24h:"24小时制",overlay_opacity:"遮罩层透明度",text_shadow:"文字阴影强度",language:"语言",language_auto:"自动",language_en:"英语",language_ru:"俄语",language_de:"德语",language_nl:"荷兰语",language_fr:"法语",language_es:"西班牙语",language_it:"意大利语",language_sk:"斯洛伐克语",language_hu:"匈牙利语",language_pt:"葡萄牙语",language_da:"丹麦语",language_sr:"塞尔维亚语",language_pl:"波兰语",language_zh:"简体中文",wind_speed_unit:"风速单位",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"显示动画"},demo:{pageTitle:"动态天气卡片",pageSubtitle:"交互式演示与配置工具",livePreview:"实时预览",configuration:"配置",quickPresets:"快速预设",sunnyDay:"晴天",rainy:"雨天",snowy:"雪天",clearNight:"晴夜",weatherCondition:"天气状况",condition:"状态",temperature:"温度",humidity:"湿度 (%)",windSpeed:"风速",timeOfDay:"时间段",timeMode:"时间模式",autoTime:"自动 (当前时间)",manualControl:"手动控制",sunrise:"日出",day:"白天",sunset:"日落",night:"夜晚",currentTime:"当前时间",displayOptions:"显示选项",cardName:"卡片名称",height:"高度 (px)",feelsLike:"体感温度",minTemp:"最低温度",windDirection:"风向",windGust:"阵风",hourlyForecast:"逐小时预报",dailyForecast:"每日预报",sunriseSunset:"日出/日落",showClock:"时钟",clockPosition:"时钟位置",clockPositionTop:"右上角",clockPositionDetails:"详情行",clockFormat:"时间格式",clockFormat12h:"12小时制 (AM/PM)",clockFormat24h:"24小时制",overlayOpacity:"遮罩层透明度 (0-1)",windSpeedUnit:"风速单位",dailyForecastDays:"每日预报天数",hourlyForecastHours:"逐小时预报小时数",updateCard:"更新卡片",startDemo:"开启演示模式",stopDemo:"停止演示模式",madeWith:"用爱发电，专为 Home Assistant 打造",loading:"正在加载卡片...",errorTitle:"加载卡片失败",errorDetails:"检查浏览器控制台 (F12) 查看详情",errorServer:"确保通过本地服务器访问 (而非 file://)",placeholderEmpty:"留空则隐藏",weatherConditions:{sunny:"晴朗",clear:"晴",clearNight:"晴夜",partlyCloudy:"局部多云",cloudy:"多云",rainy:"有雨",pouring:"大雨",snowy:"有雪",sleet:"雨夹雪",hail:"冰雹",foggy:"有雾",lightning:"雷电",thunderstorm:"雷阵雨"},language:{title:"语言",english:"英语",russian:"俄语",french:"法语",german:"德语",dutch:"荷兰语",spanish:"西班牙语",italian:"意大利语",slovak:"斯洛伐克语",hungarian:"匈牙利语",danish:"丹麦语",polish:"波兰语",portuguese:"葡萄牙语",serbian:"塞尔维亚语",chinese:"简体中文"}}};var Z={da:Ea,de:Oa,en:Ya,es:xa,et:Ia,fr:oe,hu:ae,it:ee,nb:ne,nl:ie,pl:re,pt:le,ru:se,sk:ue,sr:te,tr:de,zh:_e};class ge{lang="en";fallback="en";t(o){let a=o.split("."),e=a.reduce((i,r)=>i?.[r],Z[this.lang]);if(e!=null)return e;return a.reduce((i,r)=>i?.[r],Z[this.fallback])??o}setLanguage(o){if(!Z[o]||this.lang===o)return;if(this.lang=o,typeof window<"u")window.dispatchEvent(new CustomEvent("language-changed"))}}var c=new ge;if(typeof window<"u")window.i18n=c;var Lo=(o)=>{if(!o)return;let a=o.toLowerCase();if(Object.hasOwn(Z,a))return a;let e=a.split("-")[0];if(Object.hasOwn(Z,e))return e;return},go=({configLang:o,hassLang:a}={})=>{if(o&&o!=="auto")return Lo(o)??"en";return Lo(a)??Lo(typeof navigator<"u"?navigator.language:void 0)??"en"};function Cn(){let o=new Date,a=o.getHours(),e=o.getMinutes(),n=a*60+e;if(n>=K.SUNRISE_START&&n<K.SUNRISE_END)return{type:"sunrise",progress:(n-K.SUNRISE_START)/120};if(n>=K.SUNRISE_END&&n<K.DAY_END)return{type:"day",progress:(n-K.SUNRISE_END)/600};if(n>=K.DAY_END&&n<K.SUNSET_END)return{type:"sunset",progress:(n-K.DAY_END)/120};return{type:"night",progress:0}}function jn(o,a,e){if(o.type==="sunrise"){let n=o.progress;return{x:a*(0.3+n*0.4),y:e*(0.85-n*0.55)}}else if(o.type==="sunset"){let n=o.progress;return{x:a*(0.5+n*0.3),y:e*(0.3+n*0.55)}}else if(o.type==="day"){let i=o.progress*Math.PI;return{x:a*(0.5+Math.sin(i)*0.25),y:e*(0.25-Math.sin(i)*0.1)}}else return{x:a*0.75,y:e*0.3}}function Co(o,a,e,n){let i=jn(o,a,e),r=(l)=>Math.min(100,Math.max(0,l))/100;if(typeof n?.x==="number")i.x=a*r(n.x);if(typeof n?.y==="number")i.y=e*r(n.y);return i}function pe(o){if(o.type==="sunrise"){let a=o.progress,e={r:26,g:26,b:46},n={r:255,g:160,b:122},i={r:255,g:215,b:0};return{start:{r:Math.round(e.r+(n.r-e.r)*a),g:Math.round(e.g+(n.g-e.g)*a),b:Math.round(e.b+(n.b-e.b)*a)},end:{r:Math.round(e.r+(i.r-e.r)*a),g:Math.round(e.g+(i.g-e.g)*a),b:Math.round(e.b+(i.b-e.b)*a)}}}else if(o.type==="sunset"){let a=o.progress,e={r:255,g:107,b:107},n={r:255,g:160,b:122},i={r:26,g:26,b:46};return{start:{r:Math.round(e.r+(i.r-e.r)*a),g:Math.round(e.g+(i.g-e.g)*a),b:Math.round(e.b+(i.b-e.b)*a)},end:{r:Math.round(n.r+(i.r-n.r)*a),g:Math.round(n.g+(i.g-n.g)*a),b:Math.round(n.b+(i.b-n.b)*a)}}}return null}function me(o,a="24h",e="AM",n="PM"){if(!o)return"";let r=new Date(o).getHours();if(a==="12h"){let l=r%12||12,s=r<12?e:n;return`${l} ${s}`}return`${r.toString().padStart(2,"0")}:00`}function Uo(o,a){if(!o)return"";let e=new Date(o);if(Number.isNaN(e.getTime()))return"";return e.toLocaleDateString(a||void 0,{weekday:"short",day:"numeric",month:"short"})}function ko(o,a="24h",e="AM",n="PM"){if(!o)return"";let i=typeof o==="string"?new Date(o):o,r=i.getHours(),l=i.getMinutes();if(a==="12h"){let s=r>=12?n:e;return r=r%12||12,`${r}:${l.toString().padStart(2,"0")} ${s}`}else return`${r.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}`}function Ro(o,a=null,e=null,n=null){let i=null,r=null;if(a&&n&&n.states[a]){let l=n.states[a];i=new Date(l.state)}if(e&&n&&n.states[e]){let l=n.states[e];r=new Date(l.state)}if(!i||!r){if(o&&o.attributes){let l=o.attributes;if(!i&&(l.forecast_sunrise||l.sunrise))i=new Date(l.forecast_sunrise||l.sunrise);if(!r&&(l.forecast_sunset||l.sunset))r=new Date(l.forecast_sunset||l.sunset)}}if((!i||!r)&&n&&n.states["sun.sun"]){let s=n.states["sun.sun"].attributes;if(!i&&s.next_rising)i=new Date(s.next_rising);if(!r&&s.next_setting)r=new Date(s.next_setting)}return{sunrise:i,sunset:r,hasSunData:!!(i&&r)}}var ye=3600000,Fo=24*ye,S=ye;function ke(o,a){return o+Math.floor((a-o)/Fo)*Fo}function Xo(o,a=new Date){if(o.hasSunData&&o.sunrise&&o.sunset){let e=a.getTime(),n=ke(o.sunrise.getTime(),e),i=ke(o.sunset.getTime(),e);if(n>i){let s=i+Fo;if(e<n+S)return{type:"sunrise",progress:(e-(n-S))/(2*S)};if(e>=s-S)return{type:"sunset",progress:(e-(s-S))/(2*S)};let u=n+S,t=s-S;return{type:"day",progress:(e-u)/(t-u)}}let l=n+Fo;if(e<i+S)return{type:"sunset",progress:(e-(i-S))/(2*S)};if(e>=l-S)return{type:"sunrise",progress:(e-(l-S))/(2*S)};return{type:"night",progress:0}}return Cn()}var ce={ms:1,mps:1,kmh:0.2777777777777778,kmph:0.2777777777777778,mph:0.44704,kn:0.514444,kt:0.514444,kts:0.514444,knots:0.514444,fts:0.3048};function Y(o,a,e){let n=(l)=>l.toLowerCase().replace(/[^a-z]/g,""),i=ce[n(a)],r=ce[n(e)];if(!i||!r||i===r)return o;return o*i/r}function Eo(o,a,e){if(o==null)return null;if(a.wind_speed_unit)return Math.round(o*10)/10;if(e==="kmh")return Math.round(o*3.6*10)/10;return Math.round(o*10)/10}function ve(o,a,e){let n=o.wind_speed_unit;if(n){let i=n.toLowerCase().replace(/[^a-z]/g,"");if(i==="kmh"||i==="kmph")return e("wind_unit_kmh");else if(i==="ms"||i==="mps")return e("wind_unit_ms");else if(i==="mph")return e("wind_unit_mph");else if(i==="knots"||i==="kn"||i==="kt")return e("wind_unit_knots");else if(i==="fts"||i==="ftps")return e("wind_unit_fts");return n}return a==="kmh"?e("wind_unit_kmh"):e("wind_unit_ms")}function we(o,a){let e={weekday:"short",day:"numeric",month:"long"};try{return o.toLocaleDateString(a,e)}catch{return o.toLocaleDateString(void 0,e)}}function fe(o,a,e,n){if(a==="12h"){let i=o.getHours(),r=String(o.getMinutes()).padStart(2,"0"),l=i>=12?n:e;return i=i%12||12,`${i}:${r} ${l}`}else{let i=String(o.getHours()).padStart(2,"0"),r=String(o.getMinutes()).padStart(2,"0");return`${i}:${r}`}}function jo(o,a){let e=o?.querySelector(a);if(!e)return null;let n=(i)=>{let r=i;if(r.deltaY!==0)i.preventDefault(),e.scrollLeft+=r.deltaY};return e.addEventListener("wheel",n,{passive:!1}),()=>e.removeEventListener("wheel",n)}var Pe=B`
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

`;var y=(o)=>({r:parseInt(o.slice(1,3),16),g:parseInt(o.slice(3,5),16),b:parseInt(o.slice(5,7),16)}),Sn={clear:{day:[y("#2E6FC7"),y("#8CC2EC")],night:[y("#060A1C"),y("#1A2546")],cloudLight:y("#FFFFFF"),cloudShade:y("#C6D4E2"),coverage:0.12,twilight:1},partly:{day:[y("#3A74BD"),y("#A0C4E2")],night:[y("#0A1027"),y("#26314E")],cloudLight:y("#FFFFFF"),cloudShade:y("#B9C7D5"),coverage:0.45,twilight:0.9},cloudy:{day:[y("#5E7387"),y("#A5B3C0")],night:[y("#151A23"),y("#2F3845")],cloudLight:y("#EEF1F4"),cloudShade:y("#98A4B1"),coverage:0.85,twilight:0.45},rain:{day:[y("#45576A"),y("#7E8FA0")],night:[y("#0F141C"),y("#252D38")],cloudLight:y("#CDD4DC"),cloudShade:y("#6D7986"),coverage:0.9,twilight:0.3},heavy:{day:[y("#35424F"),y("#62707E")],night:[y("#0B0F15"),y("#1D232C")],cloudLight:y("#AEB6C0"),cloudShade:y("#4A5460"),coverage:1,twilight:0.2},storm:{day:[y("#262B38"),y("#4C5465")],night:[y("#090B11"),y("#1A1E28")],cloudLight:y("#9098A4"),cloudShade:y("#353C48"),coverage:1,twilight:0.2},snow:{day:[y("#7990A6"),y("#C6D2DD")],night:[y("#1C2432"),y("#424D5E")],cloudLight:y("#F4F7FA"),cloudShade:y("#AAB6C3"),coverage:0.8,twilight:0.4},fog:{day:[y("#66727C"),y("#8C959D")],night:[y("#23272D"),y("#464B52")],cloudLight:y("#C3C9CF"),cloudShade:y("#949DA5"),coverage:0.5,twilight:0.35}},ze={sunrise:[y("#5A7BBE"),y("#F8B77E")],sunset:[y("#3D4E8E"),y("#F08E5C")]},Nn=y("#4A5366"),Dn=y("#1A202C"),Kn=y("#FFC9A6"),Bn=y("#6F5874");function Zn(o){switch(o.toLowerCase()){case"sunny":case"clear":case"clear-night":case"windy":return"clear";case"partlycloudy":return"partly";case"rainy":case"rain":case"snowy-rainy":return"rain";case"pouring":case"hail":return"heavy";case"lightning":case"lightning-rainy":return"storm";case"snowy":case"snow":return"snow";case"foggy":case"fog":return"fog";default:return"cloudy"}}function H(o,a,e){return{r:Math.round(o.r+(a.r-o.r)*e),g:Math.round(o.g+(a.g-o.g)*e),b:Math.round(o.b+(a.b-o.b)*e)}}function N(o,a){return a===void 0?`rgb(${o.r}, ${o.g}, ${o.b})`:`rgba(${o.r}, ${o.g}, ${o.b}, ${a})`}var be=(o)=>o*o*(3-2*o);function Q(o,a){let e=o.toLowerCase()==="clear-night"?"clear":Zn(o),n=Sn[e],i=Math.max(0,Math.min(1,a.progress)),r=a.type==="night"||o.toLowerCase()==="clear-night",l=1,s=0;if(r)l=0;else if(a.type==="sunrise")l=be(i),s=Math.sin(i*Math.PI)*n.twilight;else if(a.type==="sunset")l=be(1-i),s=Math.sin(i*Math.PI)*n.twilight;let u=a.type==="sunrise"?ze.sunrise:ze.sunset,t=H(H(n.night[0],n.day[0],l),u[0],s),d=H(H(n.night[1],n.day[1],l),u[1],s),g=H(H(Nn,n.cloudLight,l),Kn,s*0.6),k=H(H(Dn,n.cloudShade,l),Bn,s*0.5);return{top:t,bottom:d,cloudLight:g,cloudShade:k,coverage:n.coverage,daylight:l}}function Me(){if(typeof CSS>"u"||typeof CSS.registerProperty!=="function")return;Object.entries({"--dwc-sky-top":"#2E6FC7","--dwc-sky-bottom":"#8CC2EC"}).forEach(([a,e])=>{try{CSS.registerProperty({name:a,syntax:"<color>",inherits:!1,initialValue:e})}catch{}})}var So={high:{fps:60,particles:1,cloudLayers:3,details:!0,maxDpr:3},medium:{fps:30,particles:0.6,cloudLayers:2,details:!0,maxDpr:2},low:{fps:20,particles:0.35,cloudLayers:1,details:!1,maxDpr:1}};function No(o="high"){return{...So[o]}}class M{ctx;cloudField=null;quality=No();children=[];constructor(o){this.ctx=o}attach(o,a){this.cloudField=o,this.quality=a,this.children.forEach((e)=>e.attach(o,a))}drawCloud(o,a,e,n){let i=this.ctx.shadowBlur,r=this.ctx.shadowColor,l=this.ctx.globalAlpha;this.ctx.shadowBlur=e*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${n*0.4})`,this.ctx.globalAlpha=n*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:o,y:a,r:e*0.4},{x:o+e*0.35,y:a,r:e*0.5},{x:o+e*0.65,y:a,r:e*0.48},{x:o+e*0.92,y:a,r:e*0.38},{x:o+e*0.18,y:a-e*0.28,r:e*0.38},{x:o+e*0.52,y:a-e*0.32,r:e*0.42},{x:o+e*0.78,y:a-e*0.28,r:e*0.38},{x:o+e*0.32,y:a-e*0.42,r:e*0.32},{x:o+e*0.62,y:a-e*0.48,r:e*0.36},{x:o+e*0.82,y:a-e*0.42,r:e*0.32}].forEach((u)=>{this.ctx.beginPath(),this.ctx.arc(u.x,u.y,u.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=i,this.ctx.shadowColor=r,this.ctx.globalAlpha=l}drawClouds(o,a,e,n=0.5){if(this.cloudField){this.cloudField.draw(this.ctx,o,a,e,this.quality.cloudLayers);return}let i=Math.max(2,Math.floor(a/150*n));for(let r=0;r<i;r++){let l=(o*3+r*150)%(a+200)-100,s=e*(0.2+r%3*0.15)+Math.sin(o*0.2+r)*8,u=40+r%3*15,t=0.6+r%2*0.2;this.drawCloud(l,s,u,t)}}}var he=[{base:0.34,reach:0.3,phase:0,speed:1,alpha:1},{base:0.24,reach:0.22,phase:2.1,speed:-0.7,alpha:0.7},{base:0.42,reach:0.18,phase:4.3,speed:0.5,alpha:0.5}];class Oo{ray=null;draw(o,a,e,n,i){let r=this.getRay(),l=i.details?i.particles>=1?3:5:8,s=i.details?he.length:1,u=0.75+Math.sin(a*0.07)*0.25;o.save(),o.globalCompositeOperation="lighter";for(let t=0;t<s;t++){let d=he[t],g=a*d.speed;this.drawBand(o,r,d,g,e,n,l*5,u*0.5,!1),this.drawBand(o,r,d,g,e,n,l,u,!0)}o.restore()}drawBand(o,a,e,n,i,r,l,s,u){for(let t=-l;t<i+l;t+=l){let d=t/Math.max(i,1),g=r*(e.base+Math.sin(d*5.2+n*0.11+e.phase)*0.07+Math.sin(d*13-n*0.19+e.phase*2)*0.025),k=(0.5+0.5*Math.sin(d*11+n*0.45+e.phase))*(0.6+0.4*Math.sin(d*4.5-n*0.2+e.phase)),_=u?k*(0.8+0.2*Math.sin(d*140+n*1.5)):k,v=r*e.reach*(0.65+0.35*Math.sin(d*21+n*0.5)),w=Math.min(1,Math.sin(Math.max(0,Math.min(1,d))*Math.PI)*1.6),f=e.alpha*s*w*(0.08+_*0.3);if(f<=0.01)continue;o.globalAlpha=f,o.drawImage(a,t,g-v,l+1,v*1.08)}}getRay(){if(this.ray)return this.ray;let o=document.createElement("canvas");o.width=1,o.height=128;let a=o.getContext("2d");if(a){let e=a.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(150, 70, 255, 0)"),e.addColorStop(0.35,"rgba(140, 90, 255, 0.35)"),e.addColorStop(0.65,"rgba(60, 220, 190, 0.6)"),e.addColorStop(0.88,"rgba(90, 255, 160, 1)"),e.addColorStop(0.93,"rgba(170, 255, 200, 0.9)"),e.addColorStop(1,"rgba(90, 255, 160, 0)"),a.fillStyle=e,a.fillRect(0,0,1,128)}return this.ray=o,o}}var qn=29.530588853,Jn=Date.UTC(2000,0,6,18,14),Yo=22,Tn=0.9;function Ve(o=new Date){let e=(o.getTime()-Jn)/86400000/qn%1;return e<0?e+1:e}function Hn(o){let a=o;return()=>{return a=(a*1664525+1013904223)%4294967296,a/4294967296}}class xo{stars=[];starsKey="";moonSprite=null;moonKey="";shootingStar=null;nextShootingStar=0;aurora=new Oo;draw(o,a,e,n,i,r,l,s=!1){if(this.drawStars(o,a,e,n,l),s)this.aurora.draw(o,a,e,n,l);if(l.details)this.drawShootingStar(o,a,e,n);this.drawMoon(o,i,r,n)}drawStars(o,a,e,n,i){let r=`${Math.round(e)}x${Math.round(n)}:${i.particles}`;if(r!==this.starsKey)this.createStars(e,n,i.particles),this.starsKey=r;o.save();for(let l of this.stars){let s=0.65+Math.sin(a*l.twinkleSpeed+l.twinklePhase)*0.35,u=1-l.y/n*0.6;if(o.globalAlpha=l.alpha*s*u,o.fillStyle=l.color,o.beginPath(),o.arc(l.x,l.y,l.size,0,Math.PI*2),o.fill(),i.details&&l.size>1.1){let t=o.createRadialGradient(l.x,l.y,0,l.x,l.y,l.size*4);t.addColorStop(0,"rgba(255, 255, 255, 0.35)"),t.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=t,o.beginPath(),o.arc(l.x,l.y,l.size*4,0,Math.PI*2),o.fill()}}o.restore()}createStars(o,a,e){let n=Hn(Math.round(o)*31+Math.round(a)),i=Math.max(20,Math.min(260,Math.round(o*a/1600*e)));this.stars=[];for(let r=0;r<i;r++){let l=n();this.stars.push({x:n()*o,y:Math.pow(n(),1.4)*a*0.9,size:0.35+Math.pow(n(),3)*1.2,alpha:0.45+n()*0.55,twinkleSpeed:0.5+n()*2,twinklePhase:n()*Math.PI*2,color:l<0.15?"rgb(200, 215, 255)":l<0.3?"rgb(255, 236, 210)":"rgb(255, 255, 255)"})}}drawShootingStar(o,a,e,n){if(!this.nextShootingStar)this.nextShootingStar=a+4+Math.random()*8;if(!this.shootingStar&&a>=this.nextShootingStar)this.shootingStar={start:a,x:e*(0.15+Math.random()*0.7),y:n*(0.05+Math.random()*0.3),angle:Math.PI*(0.12+Math.random()*0.12)*(Math.random()<0.5?1:-1)+(Math.random()<0.5?0:Math.PI)},this.nextShootingStar=a+8+Math.random()*14;let i=this.shootingStar;if(!i)return;let r=(a-i.start)/Tn;if(r>=1){this.shootingStar=null;return}let l=Math.min(220,e*0.45),s=Math.cos(i.angle),u=Math.abs(Math.sin(i.angle)),t=i.x+s*l*r,d=i.y+u*l*r,g=60*Math.sin(r*Math.PI),k=Math.sin(r*Math.PI),_=o.createLinearGradient(t,d,t-s*g,d-u*g);_.addColorStop(0,`rgba(255, 255, 255, ${0.9*k})`),_.addColorStop(1,"rgba(255, 255, 255, 0)"),o.save(),o.strokeStyle=_,o.lineWidth=1.5,o.lineCap="round",o.beginPath(),o.moveTo(t,d),o.lineTo(t-s*g,d-u*g),o.stroke(),o.restore()}drawMoon(o,a,e,n){let i=Math.max(0.5,Math.min(1,n/200)),r=Yo*i,l=(1-Math.cos(e*Math.PI*2))/2,s=o.createRadialGradient(a.x,a.y,r*0.8,a.x,a.y,r*3.5);s.addColorStop(0,`rgba(220, 230, 255, ${0.08+l*0.18})`),s.addColorStop(1,"rgba(220, 230, 255, 0)"),o.fillStyle=s,o.beginPath(),o.arc(a.x,a.y,r*3.5,0,Math.PI*2),o.fill();let u=this.getMoonSprite(e,o.getTransform().a||1),t=(Yo+2)*2*i;o.drawImage(u,a.x-t/2,a.y-t/2,t,t)}getMoonSprite(o,a){let e=`${Math.round(o*200)}@${a}`;if(this.moonSprite&&e===this.moonKey)return this.moonSprite;let n=Yo,i=(n+2)*2,r=document.createElement("canvas");r.width=Math.ceil(i*a),r.height=Math.ceil(i*a);let l=r.getContext("2d");if(this.moonSprite=r,this.moonKey=e,!l)return r;l.scale(a,a);let s=i/2;l.fillStyle="rgba(160, 175, 205, 0.14)",l.beginPath(),l.arc(s,s,n,0,Math.PI*2),l.fill();let u=Math.cos(o*Math.PI*2);if(l.save(),o>0.5)l.translate(i,0),l.scale(-1,1);l.beginPath(),l.arc(s,s,n,-Math.PI/2,Math.PI/2,!1),l.ellipse(s,s,Math.max(0.01,n*Math.abs(u)),n,0,Math.PI/2,-Math.PI/2,u>0),l.closePath(),l.restore();let t=l.createRadialGradient(s-n*0.3,s-n*0.3,0,s,s,n);t.addColorStop(0,"#FFFEF6"),t.addColorStop(1,"#E2E0D6"),l.fillStyle=t,l.fill(),l.save(),l.clip();for(let[g,k,_]of[[-0.3,-0.2,0.34],[0.12,-0.38,0.24],[0.28,0.12,0.32],[-0.18,0.34,0.22],[0.48,-0.12,0.16]]){let v=s+g*n,w=s+k*n,f=l.createRadialGradient(v,w,0,v,w,_*n);f.addColorStop(0,"rgba(135, 140, 148, 0.3)"),f.addColorStop(0.6,"rgba(135, 140, 148, 0.18)"),f.addColorStop(1,"rgba(135, 140, 148, 0)"),l.fillStyle=f,l.fillRect(v-_*n,w-_*n,_*n*2,_*n*2)}let d=l.createRadialGradient(s,s,n*0.6,s,s,n);return d.addColorStop(0,"rgba(0, 0, 0, 0)"),d.addColorStop(1,"rgba(60, 60, 70, 0.18)"),l.fillStyle=d,l.fillRect(0,0,i,i),l.restore(),r}}class Io extends M{nightSky=new xo;draw(o,a,e,n,i,r,l=!1){let s=Date.now()*0.001,u=Co(n,a,e,i),t=u.x,d=u.y;if(n.type==="day"||n.type==="sunrise"||n.type==="sunset"){let g=n.type!=="day";if(this.quality.details)this.drawSunRays(t,d,s,g);if(this.drawSun(t,d,s),this.quality.details)this.drawLensFlare(t,d,a,e,g);if(n.type==="sunrise"||n.type==="sunset")this.drawHorizonReflection(t,d,e,s)}else if(n.type==="night")this.nightSky.draw(this.ctx,s,a,e,u,r??Ve(),this.quality,l);this.drawClouds(s,a,e,0.3)}drawSun(o,a,e){let n=48+Math.sin(e*0.15)*1.5,i=this.ctx.createRadialGradient(o,a,n*0.3,o,a,n*3.5);i.addColorStop(0,"rgba(255, 248, 230, 0.25)"),i.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),i.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),i.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),i.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),i.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),i.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(o,a,n*3.5,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(o,a,n*0.5,o,a,n*2.2);r.addColorStop(0,"rgba(255, 250, 220, 0.35)"),r.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),r.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),r.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),r.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(o,a,n*2.2,0,Math.PI*2),this.ctx.fill();let l=this.ctx.createRadialGradient(o,a,n*0.6,o,a,n*1.6);l.addColorStop(0,"rgba(255, 252, 240, 0.5)"),l.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),l.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),l.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(o,a,n*1.6,0,Math.PI*2),this.ctx.fill();let s=this.ctx.createRadialGradient(o-n*0.1,a-n*0.1,0,o,a,n);s.addColorStop(0,"#FFFEF5"),s.addColorStop(0.15,"#FFF9E6"),s.addColorStop(0.3,"#FFF4D6"),s.addColorStop(0.5,"#FFEDC0"),s.addColorStop(0.7,"#FFE4A8"),s.addColorStop(0.85,"#FFDC95"),s.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(o,a,n,0,Math.PI*2),this.ctx.fill()}drawSunRays(o,a,e,n){let l=n?"255, 200, 140":"255, 245, 215",s=this.ctx.createRadialGradient(o,a,30,o,a,260);s.addColorStop(0,`rgba(${l}, 0.09)`),s.addColorStop(0.5,`rgba(${l}, 0.03)`),s.addColorStop(1,`rgba(${l}, 0)`),this.ctx.save(),this.ctx.globalCompositeOperation="lighter",this.ctx.fillStyle=s,this.ctx.beginPath();for(let u=0;u<14;u++){let t=e*0.02+u/14*Math.PI*2+Math.sin(e*0.3+u)*0.04,d=0.025+u%3*0.012,g=260*(0.6+0.4*Math.sin(e*0.4+u*1.7)**2);this.ctx.moveTo(o,a),this.ctx.lineTo(o+Math.cos(t-d)*g,a+Math.sin(t-d)*g),this.ctx.lineTo(o+Math.cos(t+d)*g,a+Math.sin(t+d)*g),this.ctx.closePath()}this.ctx.fill(),this.ctx.restore()}drawLensFlare(o,a,e,n,i){let r=e/2-o,l=n/2-a,s=[[1.2,10,i?"255, 190, 120":"255, 240, 200",0.08],[1.6,22,i?"255, 160, 120":"180, 220, 255",0.05],[1.9,5,"255, 255, 255",0.1],[2.3,34,i?"255, 180, 140":"200, 255, 220",0.035]];this.ctx.save(),this.ctx.globalCompositeOperation="lighter";for(let[u,t,d,g]of s){let k=o+r*u,_=a+l*u,v=this.ctx.createRadialGradient(k,_,0,k,_,t);v.addColorStop(0,`rgba(${d}, ${g})`),v.addColorStop(0.7,`rgba(${d}, ${g*0.6})`),v.addColorStop(1,`rgba(${d}, 0)`),this.ctx.fillStyle=v,this.ctx.beginPath(),this.ctx.arc(k,_,t,0,Math.PI*2),this.ctx.fill()}this.ctx.restore()}drawHorizonReflection(o,a,e,n){let i=48+Math.sin(n*0.15)*1.5,r=e*0.85;if(a>=r-50){let l=Math.max(0,(r-a)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${l})`,this.ctx.beginPath(),this.ctx.ellipse(o,r,i*1.5,i*0.5,0,0,Math.PI*2),this.ctx.fill()}}}var Do=[{density:6,speed:[380,460],length:[8,12],width:0.6,alpha:0.28},{density:3.5,speed:[560,680],length:[14,20],width:0.9,alpha:0.42},{density:1.4,speed:[820,980],length:[22,30],width:1.3,alpha:0.58}],oa=0.12,Fe=0.3;class X extends M{rainDrops=[];splashes=[];lastTime=0;dropsKey="";draw(o,a,e,n,i=!1){let r=Date.now()*0.001;this.drawClouds(r,a,e,i?1:0.8),this.drawRain(a,e,i)}drawRain(o,a,e){let n=`${Math.round(o)}x${Math.round(a)}:${e}:${this.quality.particles}`;if(n!==this.dropsKey)this.createDrops(o,a,e),this.dropsKey=n;let i=Date.now()*0.001,r=this.lastTime>0?Math.min(i-this.lastTime,0.1):0.016666666666666666;this.lastTime=i,this.ctx.save(),this.ctx.lineCap="round",Do.forEach((l,s)=>{this.ctx.beginPath();for(let u of this.rainDrops){if(u.layer!==s)continue;if(u.y+=u.speed*r,u.x+=u.speed*oa*r,u.y-u.length>a){if(this.quality.details&&s===Do.length-1&&Math.random()<(e?0.7:0.4))this.splashes.push({x:u.x-(u.y-a)*oa,y:a-2-Math.random()*6,age:0,size:3+Math.random()*3});this.resetDrop(u,o)}if(u.x>o+20)u.x-=o+40;this.ctx.moveTo(u.x-u.length*oa,u.y-u.length),this.ctx.lineTo(u.x,u.y)}this.ctx.strokeStyle=`rgba(215, 228, 242, ${l.alpha*(e?1.15:1)})`,this.ctx.lineWidth=l.width,this.ctx.stroke()}),this.drawSplashes(r),this.ctx.restore()}createDrops(o,a,e){this.rainDrops=[],this.splashes=[];let n=o*a/1e4;Do.forEach((i,r)=>{let l=Math.min(400,Math.round(n*i.density*(e?2:1)*this.quality.particles));for(let s=0;s<l;s++){let u={layer:r,x:0,y:0,speed:0,length:0};this.resetDrop(u,o),u.y=Math.random()*(a+u.length),this.rainDrops.push(u)}})}resetDrop(o,a){let e=Do[o.layer];o.speed=e.speed[0]+Math.random()*(e.speed[1]-e.speed[0]),o.length=e.length[0]+Math.random()*(e.length[1]-e.length[0]),o.y=-Math.random()*40,o.x=Math.random()*(a+40)-40}drawSplashes(o){if(this.splashes=this.splashes.filter((a)=>(a.age+=o)<Fe),this.splashes.length>60)this.splashes.splice(0,this.splashes.length-60);this.ctx.lineWidth=0.8;for(let a of this.splashes){let e=a.age/Fe,n=a.size*(0.4+e);this.ctx.strokeStyle=`rgba(220, 232, 245, ${0.45*(1-e)})`,this.ctx.beginPath(),this.ctx.ellipse(a.x,a.y,n,n*0.35,0,Math.PI,0),this.ctx.stroke();let i=Math.sin(e*Math.PI)*a.size*1.2;this.ctx.fillStyle=`rgba(220, 232, 245, ${0.5*(1-e)})`,this.ctx.fillRect(a.x-n*0.8,a.y-i,1,1),this.ctx.fillRect(a.x+n*0.7,a.y-i*0.8,1,1)}}}var Ce=[{density:5,speed:[12,20],size:[1.2,2],alpha:0.6},{density:2.5,speed:[22,34],size:[2.4,3.6],alpha:0.85},{density:0.9,speed:[38,55],size:[4,6.5],alpha:0.95}],co=32;class aa extends M{snowflakes=[];lastTime=0;flakesKey="";sprite=null;draw(o,a,e,n){let i=Date.now()*0.001;this.drawClouds(i,a,e,0.7),this.drawSnowflakes(a,e)}drawSnowflakes(o,a){let e=`${Math.round(o)}x${Math.round(a)}:${this.quality.particles}`;if(e!==this.flakesKey)this.createFlakes(o,a),this.flakesKey=e;let n=this.getSprite(),i=Date.now()*0.001,r=this.lastTime>0?Math.min(i-this.lastTime,0.1):0.016666666666666666;this.lastTime=i,this.ctx.save();for(let l of this.snowflakes){l.y+=l.speed*r;let s=Math.sin(i*l.swaySpeed+l.swayPhase)*l.swayAmount;if(l.x+=(l.speed*0.15+s)*r,l.y-l.size>a)l.y=-l.size-Math.random()*20,l.x=Math.random()*o;if(l.x>o+10)l.x-=o+20;if(l.x<-10)l.x+=o+20;let u=l.size*2;this.ctx.globalAlpha=Ce[l.layer].alpha,this.ctx.drawImage(n,l.x-u/2,l.y-u/2,u,u)}this.ctx.restore()}createFlakes(o,a){this.snowflakes=[];let e=o*a/1e4;Ce.forEach((n,i)=>{let r=Math.min(250,Math.round(e*n.density*this.quality.particles));for(let l=0;l<r;l++)this.snowflakes.push({layer:i,x:Math.random()*o,y:Math.random()*a,speed:n.speed[0]+Math.random()*(n.speed[1]-n.speed[0]),size:n.size[0]+Math.random()*(n.size[1]-n.size[0]),swayPhase:Math.random()*Math.PI*2,swaySpeed:0.6+Math.random()*0.8,swayAmount:6+i*6})})}getSprite(){if(this.sprite)return this.sprite;let o=document.createElement("canvas");o.width=co,o.height=co;let a=o.getContext("2d");if(a){let e=co/2,n=a.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(0.45,"rgba(255, 255, 255, 0.85)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),a.fillStyle=n,a.fillRect(0,0,co,co)}return this.sprite=o,o}}class po extends M{draw(o,a,e,n){let i=Date.now()*0.001;this.drawClouds(i,a,e,0.7)}}var je=[{y:0.3,speed:5,alpha:0.55,scaleY:0.9,seed:1},{y:0.58,speed:-8,alpha:0.6,scaleY:1.1,seed:2},{y:0.85,speed:12,alpha:0.6,scaleY:1.3,seed:3}],x=600,Ko=140;function Qn(o){let a=o*7919;return()=>{return a=(a*1664525+1013904223)%4294967296,a/4294967296}}class ea extends M{sprites=[];spriteKey="";draw(o,a,e,n){let i=Date.now()*0.001,r=Q("foggy",n).cloudLight;this.ensureSprites(r);let l=this.ctx.createLinearGradient(0,e*0.25,0,e);l.addColorStop(0,N(r,0)),l.addColorStop(1,N(r,0.2)),this.ctx.fillStyle=l,this.ctx.fillRect(0,0,a,e);let s=Math.max(0.4,Math.min(1.2,e/200));je.forEach((u,t)=>{let d=x*s,g=Ko*s*u.scaleY,k=u.y*e-g/2+Math.sin(i*0.2+t)*4,_=i*u.speed%d;if(_>0)_-=d;this.ctx.save(),this.ctx.globalAlpha=u.alpha;for(;_<a;_+=d)this.ctx.drawImage(this.sprites[t],_,k,d,g);this.ctx.restore()})}ensureSprites(o){let a=this.ctx.getTransform().a||1,e=`${Math.round(o.r/6)},${Math.round(o.g/6)},${Math.round(o.b/6)}@${a}`;if(e===this.spriteKey)return;this.spriteKey=e,this.sprites=je.map((n)=>this.renderSprite(n.seed,o,a))}renderSprite(o,a,e){let n=document.createElement("canvas");n.width=Math.ceil(x*e),n.height=Math.ceil(Ko*e);let i=n.getContext("2d");if(!i)return n;i.scale(e,e);let r=Qn(o),l=16;for(let s=0;s<l;s++){let u=s/l*x+r()*30,t=Ko*(0.35+r()*0.3),d=Ko*(0.2+r()*0.3),g=0.25+r()*0.65;for(let k of[-x,0,x]){let _=u+k;if(_+d*2.2<0||_-d*2.2>x)continue;i.save(),i.translate(_,t),i.scale(2.2,0.55);let v=i.createRadialGradient(0,0,0,0,0,d);v.addColorStop(0,N(a,g)),v.addColorStop(1,N(a,0)),i.fillStyle=v,i.beginPath(),i.arc(0,0,d,0,Math.PI*2),i.fill(),i.restore()}}return n}}var Bo=[{density:1.6,speed:[280,360],size:[1.5,2.2],alpha:0.6},{density:0.9,speed:[420,520],size:[2.6,3.4],alpha:0.85},{density:0.4,speed:[600,720],size:[3.8,5.2],alpha:1}],$n=1400,mo=32;class na extends M{rainyAnimation;hailStones=[];stonesKey="";lastTime=0;sprite=null;constructor(o){super(o);this.rainyAnimation=new X(o),this.children.push(this.rainyAnimation)}draw(o,a,e,n){let i=Date.now()*0.001;this.drawClouds(i,a,e,1),this.rainyAnimation.drawRain(a,e,!1),this.drawHailStones(a,e)}drawHailStones(o,a){let e=`${Math.round(o)}x${Math.round(a)}:${this.quality.particles}`;if(e!==this.stonesKey)this.createStones(o,a),this.stonesKey=e;let n=this.getSprite(),i=Date.now()*0.001,r=this.lastTime>0?Math.min(i-this.lastTime,0.1):0.016666666666666666;this.lastTime=i,this.ctx.save();for(let l of this.hailStones){if(l.bounces>0)l.vy+=$n*r;if(l.x+=l.vx*r,l.y+=l.vy*r,l.y>=l.ground&&l.vy>0)if(l.bounces<2)l.y=l.ground,l.vy=-l.vy*(l.bounces===0?0.3:0.25),l.vx=(Math.random()-0.5)*60,l.bounces++;else this.resetStone(l,o,a);if(l.x>o+10)l.x-=o+20;if(l.x<-10)l.x+=o+20;let s=l.size*2;this.ctx.globalAlpha=Bo[l.layer].alpha,this.ctx.drawImage(n,l.x-s/2,l.y-s/2,s,s)}this.ctx.restore()}createStones(o,a){this.hailStones=[];let e=o*a/1e4;Bo.forEach((n,i)=>{let r=Math.min(200,Math.round(e*n.density*this.quality.particles));for(let l=0;l<r;l++){let s={layer:i,x:0,y:0,vx:0,vy:0,size:0,ground:0,bounces:0};this.resetStone(s,o,a),s.y=Math.random()*s.ground,this.hailStones.push(s)}})}resetStone(o,a,e){let n=Bo[o.layer];o.x=Math.random()*a,o.y=-10-Math.random()*40,o.vy=n.speed[0]+Math.random()*(n.speed[1]-n.speed[0]),o.vx=o.vy*0.1,o.size=n.size[0]+Math.random()*(n.size[1]-n.size[0]),o.ground=e-2-(Bo.length-1-o.layer)*6-Math.random()*4,o.bounces=0}getSprite(){if(this.sprite)return this.sprite;let o=document.createElement("canvas");o.width=mo,o.height=mo;let a=o.getContext("2d");if(a){let e=mo/2,n=a.createRadialGradient(e,e,0,e,e,e);n.addColorStop(0,"rgba(245, 250, 255, 1)"),n.addColorStop(0.6,"rgba(215, 230, 245, 0.95)"),n.addColorStop(0.8,"rgba(200, 220, 240, 0.5)"),n.addColorStop(1,"rgba(200, 220, 240, 0)"),a.fillStyle=n,a.fillRect(0,0,mo,mo),a.fillStyle="rgba(255, 255, 255, 0.9)",a.beginPath(),a.arc(e-e*0.25,e-e*0.25,e*0.18,0,Math.PI*2),a.fill()}return this.sprite=o,o}}var Zo=0.4;class ia extends M{rainyAnimation;bolts=[];flashActive=!1;constructor(o){super(o);this.rainyAnimation=new X(o),this.children.push(this.rainyAnimation)}draw(o,a,e,n,i=!0){let r=Date.now()*0.001,l=this.getFlashIntensity(r);if(this.updateBolts(r,l,a,e),this.drawBolts(r),this.drawClouds(r,a,e,1),i)this.rainyAnimation.drawRain(a,e,!1);this.drawLightning(a,e,l)}getFlashIntensity(o){return Math.max(0,Math.sin(o*2.5)*Math.sin(o*5.3)*Math.sin(o*7.1))}updateBolts(o,a,e,n){this.bolts=this.bolts.filter((r)=>o<r.startsAt+r.duration);let i=a>Zo;if(i&&!this.flashActive){if(this.bolts.push(this.createBolt(o,e,n)),Math.random()<0.3)this.bolts.push(this.createBolt(o+0.08+Math.random()*0.1,e,n))}this.flashActive=i}createBolt(o,a,e){let n=a*(0.1+Math.random()*0.8),i=e*0.25,r=e*(0.6+Math.random()*0.3),l=8+Math.floor(Math.random()*5),s=(r-i)/l,u=Math.min(30,a*0.06),t=[{x:n,y:i}],d=[];for(let g=1;g<=l;g++){let _={x:t[g-1].x+(Math.random()-0.5)*u*2,y:i+s*g};if(t.push(_),g<l-1&&Math.random()<0.25){let v=Math.random()<0.5?-1:1,w=[_],f=2+Math.floor(Math.random()*3);for(let V=1;V<=f;V++){let j=w[V-1];w.push({x:j.x+v*u*(0.3+Math.random()*0.5),y:j.y+s*(0.5+Math.random()*0.5)})}d.push(w)}}return{trunk:t,branches:d,startsAt:o,duration:0.2+Math.random()*0.15}}drawBolts(o){this.bolts.forEach((a)=>{let e=o-a.startsAt;if(e<0)return;let n=0.75+Math.random()*0.25,i=Math.max(0,1-e/a.duration)*n;this.ctx.save(),this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=i,this.ctx.shadowColor="rgba(200, 220, 255, 1)",a.branches.forEach((r)=>this.strokePath(r,1.2,8)),this.strokePath(a.trunk,2.5,16),this.ctx.restore()})}strokePath(o,a,e){this.ctx.beginPath(),this.ctx.moveTo(o[0].x,o[0].y);for(let n=1;n<o.length;n++)this.ctx.lineTo(o[n].x,o[n].y);this.ctx.strokeStyle="rgba(255, 255, 255, 1)",this.ctx.lineWidth=a,this.ctx.shadowBlur=e,this.ctx.stroke()}drawLightning(o,a,e){if(e>Zo){let n=(e-Zo)/(1-Zo),i=n*0.6,r=Math.min(i,Math.sin(n*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${r})`,this.ctx.fillRect(0,0,o,a)}}}var Se=6,ra=240,la=120,E=[{scale:0.55,speed:3,alpha:0.6,top:0.02,bottom:0.3,density:1.4,bias:-0.1},{scale:0.8,speed:6,alpha:0.85,top:0.08,bottom:0.42,density:0.9,bias:0.1},{scale:1.15,speed:10,alpha:0.95,top:0.15,bottom:0.5,density:0.55,bias:0.25}];function Ne(o){let a=o;return()=>{return a=(a*1664525+1013904223)%4294967296,a/4294967296}}class sa{sprites=[];spriteKey="";clouds=[];cloudsSize="";coverage=-1;targetCoverage=0;light={r:255,g:255,b:255};shade={r:200,g:210,b:220};lastTime=0;wind=1;targetWind=1;drift=E.map(()=>0);setWeather(o,a){let e=Q(o,a);if(this.light=e.cloudLight,this.shade=e.cloudShade,this.targetCoverage=e.coverage,this.coverage<0)this.coverage=e.coverage}setWind(o){this.targetWind=Math.max(1,o)}settle(){this.coverage=this.targetCoverage}draw(o,a,e,n,i=E.length){let r=o.getTransform().a||1;if(this.ensureSprites(r),this.cloudsSize!==`${e}x${n}`)this.createClouds(e,n);let l=Math.max(0.35,Math.min(1,n/200)),s=this.lastTime?Math.min(0.1,Math.max(0,a-this.lastTime)):0;this.lastTime=a,this.coverage+=(this.targetCoverage-this.coverage)*Math.min(1,s*1.5),this.wind+=(this.targetWind-this.wind)*Math.min(1,s*0.8),E.forEach((t,d)=>{this.drift[d]+=t.speed*this.wind*s});let u=E.length-Math.max(1,Math.min(E.length,i));for(let t of this.clouds){if(t.layer<u)continue;let d=Math.max(0,Math.min(1,(this.coverage-t.threshold)*6));if(d<=0)continue;let g=E[t.layer],k=ra*g.scale*l,_=la*g.scale*l,v=e+k*2,w=(t.offset*v+this.drift[t.layer])%v-k,f=t.y*n+Math.sin(a*0.15+t.bobPhase)*3-_/2;if(o.save(),o.globalAlpha=g.alpha*d,t.flip)o.translate(w+k,f),o.scale(-1,1),o.drawImage(this.sprites[t.sprite],0,0,k,_);else o.drawImage(this.sprites[t.sprite],w,f,k,_);o.restore()}}createClouds(o,a){let e=Ne(Math.round(o)*7+Math.round(a));this.clouds=[],E.forEach((n,i)=>{let r=Math.max(2,Math.round(o/100*n.density));for(let l=0;l<r;l++)this.clouds.push({layer:i,sprite:Math.floor(e()*Se),offset:(l+e()*0.6)/r,y:n.top+e()*(n.bottom-n.top),threshold:l/r*0.8+e()*0.05+n.bias,bobPhase:e()*Math.PI*2,flip:e()<0.5})}),this.cloudsSize=`${o}x${a}`}ensureSprites(o){let a=[this.light.r,this.light.g,this.light.b,this.shade.r,this.shade.g,this.shade.b].map((e)=>Math.round(e/6)).join(",")+`@${o}`;if(a===this.spriteKey)return;this.spriteKey=a,this.sprites=Array.from({length:Se},(e,n)=>this.renderSprite(n,o))}renderSprite(o,a){let e=document.createElement("canvas");e.width=Math.ceil(ra*a),e.height=Math.ceil(la*a);let n=e.getContext("2d");if(!n)return e;n.scale(a,a);let i=Ne(o*9973+17),r=ra,l=la,s=l*0.78,u=14+Math.floor(i()*6),t=[];for(let k=0;k<u;k++){let _=i(),v=r*(0.2+_*0.6),w=Math.sin(_*Math.PI),f=l*(0.16+w*(0.14+i()*0.12)),V=s-f*(0.45+i()*0.25)-w*l*0.12;t.push({x:v,y:V,r:f});let j=n.createRadialGradient(v,V,0,v,V,f);j.addColorStop(0,"rgba(255, 255, 255, 1)"),j.addColorStop(0.7,"rgba(255, 255, 255, 0.95)"),j.addColorStop(0.88,"rgba(255, 255, 255, 0.5)"),j.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=j,n.beginPath(),n.arc(v,V,f,0,Math.PI*2),n.fill()}n.globalCompositeOperation="destination-in";let d=n.createLinearGradient(0,0,0,l);d.addColorStop(0,"rgba(0, 0, 0, 1)"),d.addColorStop(0.72,"rgba(0, 0, 0, 1)"),d.addColorStop(0.9,"rgba(0, 0, 0, 0)"),n.fillStyle=d,n.fillRect(0,0,r,l),n.globalCompositeOperation="source-atop";let g=n.createLinearGradient(0,l*0.1,0,s);return g.addColorStop(0,N(this.light)),g.addColorStop(0.45,N(this.light)),g.addColorStop(1,N(this.shade)),n.fillStyle=g,n.fillRect(0,0,r,l),t.sort((k,_)=>_.y-k.y).forEach(({x:k,y:_,r:v})=>{let w=k-v*0.15,f=_-v*0.35,V=n.createRadialGradient(w,f,0,w,f,v*0.85);V.addColorStop(0,N(this.light,0.55)),V.addColorStop(1,N(this.light,0)),n.fillStyle=V,n.beginPath(),n.arc(w,f,v*0.85,0,Math.PI*2),n.fill()}),e}}class ua{sprite=null;spriteDpr=0;beads=[];runners=[];size="";lastTime=0;draw(o,a,e,n,i,r){let l=o.getTransform().a||1,s=this.getSprite(l),u=Math.max(0.6,Math.min(1,n/200)),t=Math.round(e*n/2600*i*r.particles),d=Math.max(1,Math.round(e/130*i*r.particles)),g=`${Math.round(e)}x${Math.round(n)}`;if(g!==this.size){this.size=g,this.beads=[],this.runners=[];for(let _=0;_<t;_++){let v=this.createBead(e,n,u);v.age=Math.random()*v.life,this.beads.push(v)}}let k=this.lastTime?Math.min(0.1,Math.max(0,a-this.lastTime)):0;if(this.lastTime=a,this.beads.length<t&&Math.random()<k*t*0.4)this.beads.push(this.createBead(e,n,u));while(this.runners.length<d)this.runners.push(this.createRunner(e,n,u,!0));o.save(),this.beads=this.beads.filter((_)=>(_.age+=k)<_.life);for(let _ of this.beads){let v=Math.min(1,_.age/0.25,(_.life-_.age)/0.8);this.drawDrop(o,s,_.x,_.y,_.r,_.r,v)}for(let _ of this.runners){if(_.wait>0)_.wait-=k;else{if(_.y+=_.speed*k,_.x+=Math.sin(_.y*0.08+_.wobble)*6*k,Math.random()<k*0.8)_.wait=0.2+Math.random()*1.2;if(_.y-_.lastTrail>_.r*(2+Math.random()*2)&&this.beads.length<t*1.6)_.lastTrail=_.y,this.beads.push({x:_.x+(Math.random()-0.5)*_.r*1.2,y:_.y-_.r*(1.2+Math.random()*0.6),r:_.r*(0.25+Math.random()*0.25),age:0.25,life:2+Math.random()*3})}let v=_.wait>0?1.05:1.3;this.drawDrop(o,s,_.x,_.y,_.r,_.r*v,1)}o.restore(),this.runners=this.runners.map((_)=>_.y-_.r>n?this.createRunner(e,n,u,!1):_)}drawDrop(o,a,e,n,i,r,l){o.globalAlpha=l,o.drawImage(a,e-i,n-r,i*2,r*2)}createBead(o,a,e){return{x:Math.random()*o,y:Math.random()*a,r:(1.3+Math.pow(Math.random(),2)*3.4)*e,age:0,life:4+Math.random()*12}}createRunner(o,a,e,n){let i=(4+Math.random()*3)*e;return{x:Math.random()*o,y:n?Math.random()*a*0.8:-i-Math.random()*a*0.3,r:i,wait:Math.random()*3,speed:25+Math.random()*45,wobble:Math.random()*Math.PI*2,lastTrail:-1/0}}getSprite(o){if(this.sprite&&this.spriteDpr===o)return this.sprite;let a=16,e=document.createElement("canvas");e.width=e.height=Math.ceil(a*2*o);let n=e.getContext("2d");if(this.sprite=e,this.spriteDpr=o,!n)return e;n.scale(o,o);let i=n.createRadialGradient(a,a-2,0,a,a,a);i.addColorStop(0,"rgba(255, 255, 255, 0.1)"),i.addColorStop(0.65,"rgba(255, 255, 255, 0.18)"),i.addColorStop(0.86,"rgba(15, 25, 40, 0.45)"),i.addColorStop(1,"rgba(15, 25, 40, 0)"),n.fillStyle=i,n.fillRect(0,0,a*2,a*2);let r=n.createRadialGradient(a,a*1.45,0,a,a*1.45,a*0.55);r.addColorStop(0,"rgba(255, 255, 255, 0.55)"),r.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=r,n.fillRect(0,0,a*2,a*2);let l=a*0.68,s=a*0.62,u=n.createRadialGradient(l,s,0,l,s,a*0.3);return u.addColorStop(0,"rgba(255, 255, 255, 0.95)"),u.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=u,n.fillRect(0,0,a*2,a*2),e}}var An=["#6E9F3A","#86B34A","#5C8A2E"],Wn=["#D9892B","#E3B23C","#B8522A"];class ta{gusts=[];leaves=[];sprites=[];spriteKey="";lastTime=0;draw(o,a,e,n,i,r,l,s){let u=this.lastTime?Math.min(0.1,Math.max(0,a-this.lastTime)):0;this.lastTime=a;let t=Math.max(0.5,Math.min(1,n/200)),d=Math.max(2,Math.round(e/60*i*Math.max(0.5,s.particles)));while(this.gusts.length<d)this.gusts.push(this.createGust(e,n,t,!0));if(this.gusts.length>d)this.gusts.length=d;o.save(),o.lineCap="round";let g=0.35+l*0.45;if(this.gusts=this.gusts.map((k)=>{if(k.age+=u,k.x+=k.speed*u,k.age>=k.life||k.x-k.length>e)return this.createGust(e,n,t,!1);return this.drawGust(o,k,g),k}),r&&s.details)this.drawLeaves(o,u,e,n,t,l,s);o.restore()}createGust(o,a,e,n){let i=(90+Math.random()*110)*e;return{x:n?Math.random()*o:-i-Math.random()*o*0.5,y:a*(0.1+Math.random()*0.75),length:i,speed:(260+Math.random()*200)*e,amplitude:(3+Math.random()*6)*e,phase:Math.random()*Math.PI*2,age:0,life:1.4+Math.random()*1.6}}drawGust(o,a,e){let n=Math.sin(Math.min(1,a.age/a.life)*Math.PI);if(n<=0.02)return;let i=a.x-a.length,r=o.createLinearGradient(i,0,a.x,0);r.addColorStop(0,"rgba(255, 255, 255, 0)"),r.addColorStop(0.6,`rgba(255, 255, 255, ${0.85*e*n})`),r.addColorStop(1,"rgba(255, 255, 255, 0)"),o.strokeStyle=r,o.lineWidth=1.8,o.beginPath();let l=12;for(let s=0;s<=l;s++){let u=i+a.length*s/l,t=a.y+Math.sin(u*0.035+a.phase)*a.amplitude;if(s===0)o.moveTo(u,t);else o.lineTo(u,t)}o.stroke()}drawLeaves(o,a,e,n,i,r,l){let s=o.getTransform().a||1;this.ensureSprites(s);let u=Math.max(2,Math.round(e/70*l.particles));while(this.leaves.length<u)this.leaves.push(this.createLeaf(e,n,i,!0));if(this.leaves.length>u)this.leaves.length=u;o.globalAlpha=0.55+r*0.45,this.leaves=this.leaves.map((t)=>{if(t.x+=t.speed*a,t.flutter+=a*3,t.y+=Math.sin(t.flutter)*30*a*i+12*a*i,t.angle+=t.spin*a,t.x-t.size>e||t.y-t.size>n)return this.createLeaf(e,n,i,!1);return o.save(),o.translate(t.x,t.y),o.rotate(t.angle),o.scale(1,Math.max(0.15,Math.abs(Math.cos(t.flutter*0.7)))),o.drawImage(this.sprites[t.sprite],-t.size,-t.size/2,t.size*2,t.size),o.restore(),t})}createLeaf(o,a,e,n){let i=(6+Math.random()*5)*e;return{x:n?Math.random()*o:-i*2-Math.random()*o*0.6,y:a*(0.1+Math.random()*0.7),speed:(140+Math.random()*120)*e,angle:Math.random()*Math.PI*2,spin:(Math.random()<0.5?-1:1)*(2+Math.random()*4),size:i,flutter:Math.random()*Math.PI*2,sprite:Math.floor(Math.random()*3)}}ensureSprites(o){let a=new Date().getMonth(),e=a>=8&&a<=10?Wn:An,n=`${e[0]}@${o}`;if(n===this.spriteKey)return;this.spriteKey=n,this.sprites=e.map((i)=>{let r=document.createElement("canvas");r.width=Math.ceil(24*o),r.height=Math.ceil(12*o);let l=r.getContext("2d");if(!l)return r;return l.scale(o,o),l.fillStyle=i,l.beginPath(),l.moveTo(1,6),l.quadraticCurveTo(12,-2,23,6),l.quadraticCurveTo(12,14,1,6),l.fill(),l.strokeStyle="rgba(0, 0, 0, 0.25)",l.lineWidth=0.8,l.beginPath(),l.moveTo(2,6),l.lineTo(22,6),l.stroke(),r})}}class da extends M{draw(o,a,e,n,i){let r=Date.now()*0.001,l=Co(n,a,e,i),s=l.x,u=l.y;if(n.type==="day"||n.type==="sunrise"||n.type==="sunset"){if(this.drawSun(s,u,r),n.type==="sunrise"||n.type==="sunset")this.drawHorizonReflection(s,u,e,r)}else if(n.type==="night")this.drawNightSky(a,e,r,l);this.drawClouds(r,a,e,0.3)}drawSun(o,a,e){let n=48+Math.sin(e*0.15)*1.5,i=this.ctx.createRadialGradient(o,a,n*0.3,o,a,n*3.5);i.addColorStop(0,"rgba(255, 248, 230, 0.25)"),i.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),i.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),i.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),i.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),i.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),i.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(o,a,n*3.5,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(o,a,n*0.5,o,a,n*2.2);r.addColorStop(0,"rgba(255, 250, 220, 0.35)"),r.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),r.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),r.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),r.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(o,a,n*2.2,0,Math.PI*2),this.ctx.fill();let l=this.ctx.createRadialGradient(o,a,n*0.6,o,a,n*1.6);l.addColorStop(0,"rgba(255, 252, 240, 0.5)"),l.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),l.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),l.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(o,a,n*1.6,0,Math.PI*2),this.ctx.fill();let s=this.ctx.createRadialGradient(o-n*0.1,a-n*0.1,0,o,a,n);s.addColorStop(0,"#FFFEF5"),s.addColorStop(0.15,"#FFF9E6"),s.addColorStop(0.3,"#FFF4D6"),s.addColorStop(0.5,"#FFEDC0"),s.addColorStop(0.7,"#FFE4A8"),s.addColorStop(0.85,"#FFDC95"),s.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(o,a,n,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(o,a,e,n){let i=48+Math.sin(n*0.15)*1.5,r=e*0.85;if(a>=r-50){let l=Math.max(0,(r-a)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${l})`,this.ctx.beginPath(),this.ctx.ellipse(o,r,i*1.5,i*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(o,a,e,n){this.ctx.fillStyle="#FFFFFF";for(let l=0;l<20;l++){let s=(o*0.2+l*47)%o,u=(a*0.2+l*23)%(a*0.6),t=Math.sin(e*0.8+l)*0.5+0.5;this.ctx.globalAlpha=t*0.8,this.ctx.beginPath(),this.ctx.arc(s,u,1.5,0,Math.PI*2),this.ctx.fill()}let{x:i,y:r}=n;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(i,r,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(i-8,r-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class yo extends M{rainDrops=[];lastTime=0;draw(o,a,e,n,i=!1){let r=Date.now()*0.001;this.drawClouds(r,a,e,i?1:0.8),this.drawRain(a,e,i)}drawRain(o,a,e){let n=e?130:90;if(this.rainDrops.length!==n){this.rainDrops=[];for(let s=0;s<n;s++)this.rainDrops.push({x:Math.random()*o,y:Math.random()*a-Math.random()*200,speed:e?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:e?1.2+Math.random()*1:0.8+Math.random()*0.7,length:e?8+Math.random()*10:6+Math.random()*8,alpha:e?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let i=Date.now()*0.001,r=this.lastTime>0?Math.min(i-this.lastTime,0.1):0.016666666666666666;this.lastTime=i;let l=i;for(let s=0;s<this.rainDrops.length;s++){let u=this.rainDrops[s];if(u.y+=u.speed*r,u.y>a+50)u.y=-50-Math.random()*100,u.x=Math.random()*o;let t=u.windOffset*(1+Math.sin(l*0.5+u.phase)*0.2),d=u.x+t;if(d<-10)u.x=o+10;else if(d>o+10)u.x=-10;this.drawRainDrop(d,u.y,u)}}drawRainDrop(o,a,e){this.ctx.save(),this.ctx.globalAlpha=e.alpha;let n=a-e.length*0.5,i=a+e.length*0.5,r=e.alpha,l=e.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+r+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+l+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(o,n),this.ctx.quadraticCurveTo(o-e.width*0.3,a,o-e.width,i-e.width*0.3),this.ctx.arc(o,i,e.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(o+e.width*0.3,a,o,n),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class _a extends M{snowflakes=[];lastTime=0;draw(o,a,e,n){let i=Date.now()*0.001;this.drawClouds(i,a,e,0.7),this.drawSnowflakes(a,e)}drawSnowflakes(o,a){let e=Math.floor(o*a/5000),n=Math.max(30,Math.min(e,80));if(this.snowflakes.length!==n){this.snowflakes=[];for(let s=0;s<n;s++)this.snowflakes.push({x:Math.random()*o,y:Math.random()*a-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let i=Date.now()*0.001,r=this.lastTime>0?Math.min(i-this.lastTime,0.1):0.016666666666666666;this.lastTime=i;let l=i;this.ctx.lineCap="round";for(let s=0;s<this.snowflakes.length;s++){let u=this.snowflakes[s],t=Math.sin(l*u.swaySpeed+u.swayPhase)*2;if(u.y+=u.speedY*r,u.x+=(u.speedX+t)*r,u.rotation+=u.rotationSpeed*r,u.y>a+20)u.y=-20-Math.random()*50,u.x=Math.random()*o;if(u.x<-10)u.x=o+10;else if(u.x>o+10)u.x=-10;this.drawSnowflake(u.x,u.y,u.size,u.alpha,u.rotation)}}drawSnowflake(o,a,e,n,i){this.ctx.save(),this.ctx.translate(o,a),this.ctx.rotate(i),this.ctx.strokeStyle=`rgba(255, 255, 255, ${n})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let r=0;r<6;r++){let l=Math.PI/3*r,s=Math.cos(l),u=Math.sin(l);this.ctx.moveTo(0,0),this.ctx.lineTo(u*e*2.5,s*e*2.5);let t=u*e*1.5+s*e*0.5,d=s*e*1.5-u*e*0.5,g=u*e*1.8+s*e*1.2,k=s*e*1.8-u*e*1.2;this.ctx.moveTo(t,d),this.ctx.lineTo(g,k);let _=u*e*1.5-s*e*0.5,v=s*e*1.5+u*e*0.5,w=u*e*1.8-s*e*1.2,f=s*e*1.8+u*e*1.2;this.ctx.moveTo(_,v),this.ctx.lineTo(w,f)}this.ctx.stroke(),this.ctx.restore()}}class ga extends M{draw(o,a,e,n){let i=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let r=0;r<3;r++){let l=e*(0.4+r*0.2),s=Math.sin(i+r)*20;this.ctx.beginPath(),this.ctx.moveTo(0,l);for(let u=0;u<=a;u+=5){let t=Math.sin((u/a+i)*Math.PI*4+r)*15;this.ctx.lineTo(u,l+t+s)}this.ctx.lineTo(a,e),this.ctx.lineTo(0,e),this.ctx.closePath(),this.ctx.fill()}}}class ka extends M{hailStones=[];draw(o,a,e,n){let i=Date.now()*0.001;this.drawClouds(i,a,e,1),this.drawHailStones(a,e)}drawHailStones(o,a){if(this.hailStones.length!==60){this.hailStones=[];for(let i=0;i<60;i++)this.hailStones.push({startX:Math.random()*o,startY:Math.random()*(a+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let n=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let i=0;i<this.hailStones.length;i++){let r=this.hailStones[i],l=(r.startY+n*r.speed)%(a+150);if(l>a+30)r.startY=-30-Math.random()*30,r.startX=Math.random()*o;let s=r.windOffset*(1+Math.sin(n*0.6+r.phase)*0.15),u=(r.startX+s+n*20%o)%o;if(u<-5)r.startX=o+5;else if(u>o+5)r.startX=-5;this.drawHailStone(u,l,r)}}drawHailStone(o,a,e){this.ctx.save(),this.ctx.globalAlpha=e.alpha,this.ctx.beginPath(),this.ctx.ellipse(o,a,e.size,e.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(o-e.size*0.3,a-e.size*0.3,e.size*0.3,e.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}var qo=0.4;class ca extends M{rainyAnimation;bolts=[];flashActive=!1;constructor(o){super(o);this.rainyAnimation=new yo(o)}draw(o,a,e,n,i=!0){let r=Date.now()*0.001,l=this.getFlashIntensity(r);if(this.updateBolts(r,l,a,e),this.drawBolts(r),this.drawClouds(r,a,e,1),i)this.rainyAnimation.draw(o,a,e,n,!1);this.drawLightning(a,e,l)}getFlashIntensity(o){return Math.max(0,Math.sin(o*2.5)*Math.sin(o*5.3)*Math.sin(o*7.1))}updateBolts(o,a,e,n){this.bolts=this.bolts.filter((r)=>o<r.startsAt+r.duration);let i=a>qo;if(i&&!this.flashActive){if(this.bolts.push(this.createBolt(o,e,n)),Math.random()<0.3)this.bolts.push(this.createBolt(o+0.08+Math.random()*0.1,e,n))}this.flashActive=i}createBolt(o,a,e){let n=a*(0.1+Math.random()*0.8),i=e*0.25,r=e*(0.6+Math.random()*0.3),l=8+Math.floor(Math.random()*5),s=(r-i)/l,u=Math.min(30,a*0.06),t=[{x:n,y:i}],d=[];for(let g=1;g<=l;g++){let _={x:t[g-1].x+(Math.random()-0.5)*u*2,y:i+s*g};if(t.push(_),g<l-1&&Math.random()<0.25){let v=Math.random()<0.5?-1:1,w=[_],f=2+Math.floor(Math.random()*3);for(let V=1;V<=f;V++){let j=w[V-1];w.push({x:j.x+v*u*(0.3+Math.random()*0.5),y:j.y+s*(0.5+Math.random()*0.5)})}d.push(w)}}return{trunk:t,branches:d,startsAt:o,duration:0.2+Math.random()*0.15}}drawBolts(o){this.bolts.forEach((a)=>{let e=o-a.startsAt;if(e<0)return;let n=0.75+Math.random()*0.25,i=Math.max(0,1-e/a.duration)*n;this.ctx.save(),this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=i,this.ctx.shadowColor="rgba(200, 220, 255, 1)",a.branches.forEach((r)=>this.strokePath(r,1.2,8)),this.strokePath(a.trunk,2.5,16),this.ctx.restore()})}strokePath(o,a,e){this.ctx.beginPath(),this.ctx.moveTo(o[0].x,o[0].y);for(let n=1;n<o.length;n++)this.ctx.lineTo(o[n].x,o[n].y);this.ctx.strokeStyle="rgba(255, 255, 255, 1)",this.ctx.lineWidth=a,this.ctx.shadowBlur=e,this.ctx.stroke()}drawLightning(o,a,e){if(e>qo){let n=(e-qo)/(1-qo),i=n*0.6,r=Math.min(i,Math.sin(n*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${r})`,this.ctx.fillRect(0,0,o,a)}}}class pa{sunny;rainy;snowy;cloudy;foggy;hail;thunderstorm;constructor(o){this.sunny=new da(o),this.rainy=new yo(o),this.snowy=new _a(o),this.cloudy=new po(o),this.foggy=new ga(o),this.hail=new ka(o),this.thunderstorm=new ca(o)}draw(o,a,e,n,i){let r=Date.now();switch(o){case"sunny":case"clear":this.sunny.draw(r,a,e,n,i);break;case"clear-night":this.sunny.draw(r,a,e,{type:"night",progress:0},i);break;case"rainy":case"rain":this.rainy.draw(r,a,e,n,!1);break;case"pouring":this.rainy.draw(r,a,e,n,!0);break;case"snowy":case"snow":this.snowy.draw(r,a,e,n);break;case"snowy-rainy":this.rainy.draw(r,a,e,n,!1),this.snowy.draw(r,a,e,n);break;case"hail":this.hail.draw(r,a,e,n);break;case"foggy":case"fog":this.foggy.draw(r,a,e,n);break;case"lightning":this.thunderstorm.draw(r,a,e,n,!1);break;case"lightning-rainy":this.thunderstorm.draw(r,a,e,n,!0);break;case"cloudy":case"partlycloudy":default:this.cloudy.draw(r,a,e,n);break}}}var Gn={rainy:0.6,rain:0.6,pouring:1,"lightning-rainy":0.85,"snowy-rainy":0.4},Ln=new Set(["sunny","clear","clear-night","partlycloudy","cloudy","windy","windy-variant"]),De=8;class ma{canvas=null;ctx=null;animationFrame=null;animations={};cloudField=new sa;glassDrops=new ua;wind=new ta;classic=null;resizeObserver=null;intersectionObserver=null;onScreen=!0;qualityName="high";quality=No("high");lastFrameTime=-1/0;reducedMotion=typeof window<"u"&&typeof window.matchMedia==="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null;stillKey="";width=0;height=0;container=null;getDrawParams;handleVisibilityChange=()=>{this.updateRunning()};handleMotionChange=()=>{this.stillKey=""};constructor(o){this.getDrawParams=o}setup(o){if(this.container=o,this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver(),this.setupIntersectionObserver(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.reducedMotion?.addEventListener?.("change",this.handleMotionChange)}destroy(){if(document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.reducedMotion?.removeEventListener?.("change",this.handleMotionChange),this.stopAnimation(),this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;this.intersectionObserver?.disconnect(),this.intersectionObserver=null,this.canvas=null,this.ctx=null,this.container=null}resize(){if(this.canvas&&this.ctx)this.resizeCanvas()}setupCanvas(){if(!this.container)return;let o=this.container.querySelector("canvas");if(o)o.remove();this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.resizeCanvas()}resizeCanvas(){if(!this.canvas||!this.container)return;let o=this.container.getBoundingClientRect();if(o.width===0||o.height===0)return;let a=Math.min(window.devicePixelRatio||2,this.quality.maxDpr);if(this.canvas.width=o.width*a,this.canvas.height=o.height*a,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(a,a);this.width=o.width,this.height=o.height,this.stillKey="",this.initializeAnimations()}setupResizeObserver(){if(!this.container)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(this.container)}setupIntersectionObserver(){if(!this.container||typeof IntersectionObserver>"u")return;this.intersectionObserver=new IntersectionObserver((o)=>{this.onScreen=o.some((a)=>a.isIntersecting),this.updateRunning()}),this.intersectionObserver.observe(this.container)}updateRunning(){if(document.hidden||!this.onScreen)this.stopAnimation();else this.startAnimation()}applyQuality(o){if(o===this.qualityName||!So[o])return;let a=this.quality.maxDpr;if(this.qualityName=o,Object.assign(this.quality,So[o]),this.quality.maxDpr!==a)this.resizeCanvas()}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new Io(this.ctx),rainy:new X(this.ctx),snowy:new aa(this.ctx),cloudy:new po(this.ctx),foggy:new ea(this.ctx),hail:new na(this.ctx),thunderstorm:new ia(this.ctx)},this.classic=null,Object.values(this.animations).forEach((o)=>{o.attach(this.cloudField,this.quality)})}startAnimation(){if(this.animationFrame)return;let o=(a=0)=>{let e=this.reducedMotion?.matches===!0;if(a-this.lastFrameTime>=(e?500:1000/this.quality.fps-2))this.lastFrameTime=a,this.draw(e);this.animationFrame=requestAnimationFrame(o)};o()}stopAnimation(){if(this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null}draw(o=!1){if(!this.ctx||!this.canvas)return;if(!this.width||!this.height){if(this.resizeCanvas(),!this.width||!this.height)return}let a=this.getDrawParams();if(!a)return;this.applyQuality(a.quality??"high");let{condition:e,timeOfDay:n,sunPosition:i,moonPhase:r,visualStyle:l}=a,s=this.width,u=this.height;if(o){let w=JSON.stringify([e,n.type,Math.round(n.progress*20),i,r,l,a.quality,a.aurora,Math.round(a.windSpeed??0),s,u]);if(w===this.stillKey)return;this.stillKey=w}else this.stillKey="";this.ctx.clearRect(0,0,s,u);let t=e.toLowerCase();if(l==="classic"){this.classic??=new pa(this.ctx),this.classic.draw(t,s,u,n,i);return}let d=t==="windy"||t==="windy-variant",g=Math.max(0,a.windSpeed??0);if(this.cloudField.setWeather(t,n),this.cloudField.setWind(Math.min(4,Math.max(d?2.5:1,1+g/5))),o)this.cloudField.settle();switch(t){case"sunny":case"clear":case"partlycloudy":case"windy":this.animations.sunny?.draw(Date.now(),s,u,n,i,r,a.aurora);break;case"clear-night":this.animations.sunny?.draw(Date.now(),s,u,{type:"night",progress:0},i,r,a.aurora);break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),s,u,n,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),s,u,n,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),s,u,n);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),s,u,n,!1),this.animations.snowy?.drawSnowflakes(s,u);break;case"hail":this.animations.hail?.draw(Date.now(),s,u,n);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),s,u,n);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),s,u,n,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),s,u,n,!0);break;case"cloudy":default:this.animations.cloudy?.draw(Date.now(),s,u,n);break}let k=Date.now()*0.001,_=d?Math.max(0.6,(g-De)/10):(g-De)/10;if(Ln.has(t)&&_>0){let w=Q(t,n).daylight;this.wind.draw(this.ctx,k,s,u,Math.min(1,_),d,w,this.quality)}let v=Gn[t];if(v&&this.quality.details)this.glassDrops.draw(this.ctx,k,s,u,v,this.quality)}}class ya{hourlyForecast=[];dailyForecast=[];hourlySubscription=null;dailySubscription=null;onUpdate;constructor(o){this.onUpdate=o}getHourlyData(){return this.hourlyForecast}getDailyData(){return this.dailyForecast}async subscribe(o,a,e){if(!o||!a)return;await this.unsubscribe();try{if(this.hourlySubscription=o.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.hourlyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:a}),e)this.dailySubscription=o.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.dailyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:a})}catch{}}async unsubscribe(){if(this.hourlySubscription){try{(await this.hourlySubscription)()}catch{}this.hourlySubscription=null}if(this.dailySubscription){try{(await this.dailySubscription)()}catch{}this.dailySubscription=null}}getHourlyForecast(o,a){let e=Math.max(1,Math.floor(Number(o??m.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,e);if(!a?.forecast||a.forecast.length===0)return[];let n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Date(i);return r.setDate(r.getDate()+1),a.forecast.filter((s)=>{if(!s.datetime)return!1;let u=new Date(s.datetime),t=new Date(u.getFullYear(),u.getMonth(),u.getDate());return t.getTime()===i.getTime()||t.getTime()===r.getTime()&&u.getHours()<=n.getHours()}).sort((s,u)=>new Date(s.datetime).getTime()-new Date(u.datetime).getTime()).slice(0,e)}getDailyForecast(o,a){let e=Math.max(1,Math.floor(Number(o??m.dailyForecastDays)));if(this.dailyForecast&&this.dailyForecast.length>0)return this.dailyForecast.slice(0,e);if(!a?.forecast||a.forecast.length===0)return[];let n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Date(i);r.setDate(r.getDate()+e);let l=(u)=>{let t=u.getFullYear(),d=String(u.getMonth()+1).padStart(2,"0"),g=String(u.getDate()).padStart(2,"0");return`${t}-${d}-${g}`},s=new Map;return a.forecast.forEach((u)=>{if(!u.datetime)return;let t=new Date(u.datetime);if(Number.isNaN(t.getTime()))return;if(t<i||t>=r)return;let d=l(t),g=Math.abs(t.getHours()+t.getMinutes()/60-12),k=u.temperature??u.temp??u.native_temperature,_=s.get(d)??{item:u,itemDate:t,hourScore:g,temperatures:[],precipitationProbabilities:[]};if(g<_.hourScore)_.item=u,_.itemDate=t,_.hourScore=g;if(k!=null)_.temperatures.push(k);if(u.precipitation_probability!=null)_.precipitationProbabilities.push(u.precipitation_probability);s.set(d,_)}),Array.from(s.values()).sort((u,t)=>u.itemDate.getTime()-t.itemDate.getTime()).map(({item:u,temperatures:t,precipitationProbabilities:d})=>{if(t.length<2)return u;let g={...u,temperature:Math.max(...t),templow:u.templow??u.native_templow??Math.min(...t)};if(d.length>0)g.precipitation_probability=Math.max(...d);return g}).slice(0,e)}}class va{holdTimer=null;lastTap=null;holdFired=!1;holdDelay=500;getHass;getConfig;fireEvent;constructor(o,a,e){this.getHass=o,this.getConfig=a,this.fireEvent=e}handleTap(o){if(o.target.closest(".forecast-item")||o.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.getConfig().tapAction),this.lastTap=null},300)}handlePointerDown(){this.holdTimer=window.setTimeout(()=>{this.handleHold(),this.holdFired=!0},this.holdDelay)}handlePointerUp(o){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)o.preventDefault(),o.stopPropagation(),this.holdFired=!1}handleHold(){this.handleAction(this.getConfig().holdAction)}handleDoubleTap(){this.handleAction(this.getConfig().doubleTapAction)}handleAction(o){let a=this.getHass(),e=this.getConfig();if(!o||!a)return;switch(o.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:o.entity||e.entity});break;case"toggle":a.callService("homeassistant","toggle",{entity_id:o.entity||e.entity});break;case"call-service":if(o.service){let[i,r]=o.service.split(".");a.callService(i,r,o.service_data||{})}break;case"navigate":if(o.navigation_path)window.history.pushState(null,"",o.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(o.url_path)window.open(o.url_path);break;case"none":default:break}}}function D(o,a){if(!o||!a)return null;let e=o.states[a];if(!e)return null;let n=parseFloat(e.state);if(!Number.isFinite(n))return null;let i=e.attributes?.unit_of_measurement;return{value:n,unit:typeof i==="string"?i:null}}function Un(o,a){if(!o||!a)return null;let e=o.states[a];return e?e.state:null}function I(o,a){if(!o||!a)return{};let e=o.states[a];return e?e.attributes:{}}function wa(o,a,e,n){let i=Un(o,a),r=I(o,a),l=r.condition||i||"sunny",s=null;if(e.templowAttribute&&r[e.templowAttribute]!=null)s=r[e.templowAttribute];else{for(let ha of Xa)if(r[ha]!=null){s=r[ha];break}if(s==null)s=(r.forecast&&r.forecast[0]?r.forecast[0].templow??null:null)||(r.forecast_hourly&&r.forecast_hourly[0]?r.forecast_hourly[0].native_templow??null:null)}let u=e.sensorEntities||{},t=D(o,u.temperature),d=D(o,u.feelsLike),g=D(o,u.humidity),k=D(o,u.windSpeed),_=D(o,u.windGust),v=D(o,u.windBearing),w=D(o,u.precipitation),f=D(o,u.pressure),V=D(o,u.uvIndex),j=D(o,u.dewPoint),oo=D(o,u.aqi),A=typeof r.wind_speed_unit==="string"?r.wind_speed_unit:"m/s",ao=r.wind_gust_speed||r.wind_gust||null,W=k?.unit??(k?A:_?.unit??null),h=W??A,Re=k?k.value:W&&r.wind_speed!=null?Y(r.wind_speed,A,h):r.wind_speed??null,Xe=_?Y(_.value,_.unit??h,h):ao!=null&&W?Y(ao,A,h):ao;return{condition:l,temperature:t?.value??(r.temperature!=null?r.temperature:null),apparentTemperature:d?.value??(r.apparent_temperature||null),humidity:g?Math.round(g.value):r.humidity!=null?r.humidity:null,windSpeed:Re,windGust:Xe,windBearing:v?.value??(r.wind_bearing!=null?r.wind_bearing:null),windDirection:r.wind_direction||null,pressure:f?.value??(r.pressure!=null?r.pressure:null),pressureUnit:f?f.unit:typeof r.pressure_unit==="string"?r.pressure_unit:null,uvIndex:V?.value??(r.uv_index!=null?r.uv_index:null),dewPoint:j?.value??(r.dew_point!=null?r.dew_point:null),aqi:oo?.value??null,forecast:r.forecast||r.forecast_hourly||n||[],friendlyName:r.friendly_name||c.t("weather"),templow:s,windSpeedUnit:W,precipitation:w?.value??null,precipitationUnit:w?.unit??null}}function Be(o){switch((o||"").toLowerCase()){case"rainy":case"rain":case"pouring":return"rain";case"snowy":case"snow":return"snow";case"snowy-rainy":return"sleet";case"hail":return"hail";case"lightning":case"lightning-rainy":return"storm";default:return null}}function Ke(o){let a=Be(o.condition);if(a)return a;return(o.precipitation_probability??0)>=50?"rain":null}function Rn(o,a,e){let n=o.map((l)=>({time:new Date(l.datetime),entry:l})).filter(({time:l})=>!Number.isNaN(l.getTime())).sort((l,s)=>l.time.getTime()-s.time.getTime());if(n.length<2||n[1].time.getTime()-n[0].time.getTime()>10800000)return[];let i=a.getTime()-3600000,r=a.getTime()+e*3600000;return n.filter(({time:l})=>l.getTime()>i&&l.getTime()<=r)}function Ze(o,a,e=new Date,n=12){let i=Rn(a,e,n);if(i.length===0)return null;let r=Be(o);if(r){let l=i.find(({time:s,entry:u})=>s.getTime()>e.getTime()&&!Ke(u));return l?{kind:r,type:"stop",time:l.time,hours:n}:{kind:r,type:"continues",time:null,hours:n}}for(let{time:l,entry:s}of i){let u=Ke(s);if(!u)continue;return{kind:u,type:"start",time:l.getTime()>e.getTime()?l:null,hours:n}}return null}var Xn={wind:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,precipitation:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M46.5 33.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 47.5h28.5a7 7 0 000-14z" transform="translate(0 -8)"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M24 46l-3 9m11-9l-3 9m11-9l-3 9"/>
    </svg>
  `,sunrise:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `,pressure:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M14.5 44a19 19 0 1135 0"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M32 38l9-10"/>
      <circle cx="32" cy="38" r="3" fill="currentColor"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 33.5l2.5 1M32 22.5V25m13 8.5l-2.5 1"/>
    </svg>
  `,uv:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <circle cx="32" cy="32" r="9" fill="none" stroke="currentColor" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M32 12v5m0 30v5M12 32h5m30 0h5M17.9 17.9l3.5 3.5m21.2 21.2l3.5 3.5M17.9 46.1l3.5-3.5m21.2-21.2l3.5-3.5"/>
    </svg>
  `,dewPoint:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M24 38.5V16a5 5 0 0110 0v22.5a8.5 8.5 0 11-10 0z"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M29 26v17"/>
      <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M46 24c-3 4.4-5 7.2-5 9.9a5 5 0 0010 0c0-2.7-2-5.5-5-9.9z"/>
    </svg>
  `,aqi:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 47c0-19 12-29 31-30 0 20-10 30-26 30"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M17 47c6-9 13-16 22-21"/>
    </svg>
  `},qe=(o)=>z`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${o}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,En={sunny:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:z`
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
  `,overcast:z`
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
  `,cloudy:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:z`
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
  `,rain:z`
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
  `,pouring:z`
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
  `,snowy:z`
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
  `,snow:z`
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
  `,foggy:z`
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
  `,fog:z`
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
  `,hail:z`
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
  `,"snowy-rainy":z`
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
  `,lightning:z`
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
  `,"lightning-rainy":z`
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
  `,windy:z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":z`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function q(o,...a){let e=Xn[o];if(typeof e==="function")return e(...a);return e||""}function vo(o){if(!o)return"";return En[o.toLowerCase()]||""}class Je extends C{constructor(){super(...arguments);this.format=null;this.compact=!1;this.showDate=!1;this.lang="en";this.currentTime="";this.currentDate=""}clockInterval=null;static styles=B`
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
  `;connectedCallback(){super.connectedCallback(),this.restartTimer()}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer()}updated(o){if(super.updated(o),o.has("format")||o.has("showDate")||o.has("lang"))this.restartTimer()}restartTimer(){if(this.stopTimer(),this.format||this.showDate)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}stopTimer(){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updateTime(){let o=new Date;if(this.format)this.currentTime=fe(o,this.format,c.t("am"),c.t("pm"));if(this.showDate)this.currentDate=we(o,this.lang)}render(){if(!this.format&&!this.showDate)return p``;return p`
      ${this.format?p`<div class="clock">${this.currentTime}</div>`:""}
      ${this.showDate?p`<div class="date">${this.currentDate}</div>`:""}
    `}}P([b({type:String})],Je.prototype,"format",void 0),P([b({type:Boolean,reflect:!0})],Je.prototype,"compact",void 0),P([b({type:Boolean})],Je.prototype,"showDate",void 0),P([b({type:String})],Je.prototype,"lang",void 0),P([_o()],Je.prototype,"currentTime",void 0),P([_o()],Je.prototype,"currentDate",void 0);customElements.define("weather-clock",Je);class Te extends C{constructor(){super(...arguments);this.weather=null;this.sunData=null;this.config=null;this.entityAttributes=null;this.compact=!1}static styles=B`
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
  `;hasContent(){if(!this.weather||!this.config)return!1;return this.config.showHumidity&&this.weather.humidity!=null||this.config.showWind&&this.weather.windSpeed!=null||this.config.showPressure&&this.weather.pressure!=null||this.config.showUvIndex&&this.weather.uvIndex!=null||this.config.showDewPoint&&this.weather.dewPoint!=null||this.weather.aqi!=null||this.weather.precipitation!=null||this.config.showSunriseSunset&&this.sunData?.hasSunData===!0}renderHumidity(){if(!this.config?.showHumidity||this.weather?.humidity==null)return p``;return p`
      <div class="info-item">
        <span class="info-icon">${q("humidity")}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `}renderItem(o,a,e){return p`
      <div class="info-item" title="${e}">
        <span class="info-icon">${q(o)}</span>
        <span>${a}</span>
      </div>
    `}renderPressure(){if(!this.config?.showPressure||this.weather?.pressure==null)return p``;let o=this.weather.pressureUnit,a=o==="inHg"?2:o==="kPa"?1:0;return this.renderItem("pressure",`${this.weather.pressure.toFixed(a)}${o?` ${o}`:""}`,c.t("pressure"))}renderUvIndex(){if(!this.config?.showUvIndex||this.weather?.uvIndex==null)return p``;return this.renderItem("uv",`UV ${Math.round(this.weather.uvIndex)}`,c.t("uv_index"))}renderDewPoint(){if(!this.config?.showDewPoint||this.weather?.dewPoint==null)return p``;return this.renderItem("dewPoint",`${Math.round(this.weather.dewPoint)}°`,c.t("dew_point"))}renderAqi(){if(this.weather?.aqi==null)return p``;return this.renderItem("aqi",`AQI ${Math.round(this.weather.aqi)}`,c.t("aqi"))}renderSunrise(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunrise)return p``;return p`
      <div class="info-item">
        <span class="info-icon">${q("sunrise")}</span>
        <span>${ko(this.sunData.sunrise,this.config.clockFormat,c.t("am"),c.t("pm"))}</span>
      </div>
    `}renderWind(){if(!this.config?.showWind||this.weather?.windSpeed==null)return p``;let o=this.weather.windSpeedUnit?{...this.entityAttributes||{},wind_speed_unit:this.weather.windSpeedUnit}:this.entityAttributes||{},a=Eo(this.weather.windSpeed,o,this.config.windSpeedUnit),e=ve(o,this.config.windSpeedUnit,c.t.bind(c)),n="";if(this.config.showWindGust&&this.weather.windGust)n=` / ${Eo(this.weather.windGust,o,this.config.windSpeedUnit)} ${e}`;let i=this.config.showWindDirection&&this.weather.windBearing!=null?qe(this.weather.windBearing):q("wind");return p`
      <div class="info-item">
        <span class="info-icon">${i}</span>
        <span>${a} ${e}${n}</span>
      </div>
    `}renderPrecipitation(){if(this.weather?.precipitation==null)return p``;let o=Math.round(this.weather.precipitation*10)/10,a=this.weather.precipitationUnit?` ${this.weather.precipitationUnit}`:"";return p`
      <div class="info-item">
        <span class="info-icon">${q("precipitation")}</span>
        <span>${o}${a}</span>
      </div>
    `}renderSunset(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunset)return p``;return p`
      <div class="info-item">
        <span class="info-icon">${q("sunset")}</span>
        <span>${ko(this.sunData.sunset,this.config.clockFormat,c.t("am"),c.t("pm"))}</span>
      </div>
    `}render(){if(!this.hasContent())return p``;let a=this.config?.showSunriseSunset&&this.sunData?.hasSunData?p`
      <div class="sun-group">
        ${this.renderSunrise()}
        ${this.renderSunset()}
      </div>
    `:p``;return p`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderWind()}
        ${this.compact?a:p`${this.renderSunrise()}${this.renderSunset()}`}
        ${this.renderPrecipitation()}
        ${this.renderPressure()}
        ${this.renderUvIndex()}
        ${this.renderDewPoint()}
        ${this.renderAqi()}
      </div>
    `}}P([b({type:Object})],Te.prototype,"weather",void 0),P([b({type:Object})],Te.prototype,"sunData",void 0),P([b({type:Object})],Te.prototype,"config",void 0),P([b({type:Object})],Te.prototype,"entityAttributes",void 0),P([b({type:Boolean,reflect:!0})],Te.prototype,"compact",void 0);customElements.define("weather-details",Te);var Jo=B`
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
`;class He extends C{constructor(){super(...arguments);this.forecast=[];this.forecastTitle=null;this.clockFormat="24h"}static styles=Jo;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=jo(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(o){return Math.round(o.temperature??o.temp??o.native_temperature??0)}render(){if(this.forecast.length===0)return p``;return p`
      <div class="forecast-container">
        ${this.forecastTitle!==""?p`<div class="forecast-title">${this.forecastTitle??c.t("forecast_title")}</div>`:""}
        <div class="forecast-scroll">
          ${this.forecast.map((o)=>p`
            <div class="forecast-item">
              <div class="forecast-time">${me(o.datetime,this.clockFormat,c.t("am"),c.t("pm"))}</div>
              <div class="forecast-icon">${vo(o.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(o)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}P([b({type:Array})],He.prototype,"forecast",void 0),P([b({type:String})],He.prototype,"forecastTitle",void 0),P([b({type:String})],He.prototype,"clockFormat",void 0);customElements.define("hourly-forecast",He);var $=[[-20,[94,92,230]],[-5,[10,132,255]],[5,[100,210,255]],[15,[48,209,88]],[22,[255,214,10]],[28,[255,159,10]],[35,[255,69,58]]];function Qe(o,a="°C"){let e=/F/i.test(a)?(o-32)*5/9:o,n=$.length-1;if(e<=$[0][0])return`rgb(${$[0][1].join(", ")})`;if(e>=$[n][0])return`rgb(${$[n][1].join(", ")})`;let i=$.findIndex(([d])=>d>e),[r,l]=$[i-1],[s,u]=$[i],t=(e-r)/(s-r);return`rgb(${l.map((d,g)=>Math.round(d+(u[g]-d)*t)).join(", ")})`}function $e(o){return new Date(o).toDateString()===new Date().toDateString()}class Ae extends C{constructor(){super(...arguments);this.forecast=[];this.forecastTitle=null;this.lang="en";this.showBars=!1;this.currentTemperature=null;this.temperatureUnit="°C"}static styles=Jo;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=jo(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(o){return Math.round(o.temperature??o.temp??o.native_temperature??0)}getLowTemperature(o){let a=o.templow??o.native_templow;return a!=null?Math.round(a):null}getPrecipitationProbability(o){let a=o.precipitation_probability;return a!=null&&a>0?Math.round(a):null}renderBarItem(o,a){let e=this.getTemperature(o),n=this.getLowTemperature(o)??e,i=this.getPrecipitationProbability(o),r=Math.max(1,a.max-a.min),l=(a.max-e)/r*100,s=(n-a.min)/r*100,u=`top: ${l}%; bottom: ${s}%; background: linear-gradient(to top, ${Qe(n,this.temperatureUnit)}, ${Qe(e,this.temperatureUnit)});`,t="";if(this.currentTemperature!=null&&$e(o.datetime)){let d=Math.max(a.min,Math.min(a.max,this.currentTemperature));t=p`<div class="temp-bar-now" style="bottom: ${(d-a.min)/r*100}%"></div>`}return p`
      <div class="forecast-item">
        <div class="forecast-time">${Uo(o.datetime,this.lang)}</div>
        <div class="forecast-icon">${vo(o.condition||"sunny")}</div>
        <div class="forecast-temp">${e}°</div>
        <div class="temp-bar">
          <div class="temp-bar-fill" style="${u}"></div>
          ${t}
        </div>
        <div class="forecast-temp forecast-temp-low-bar">${n}°</div>
        ${i!==null?p`<div class="forecast-precipitation">${i}%</div>`:""}
      </div>
    `}renderItem(o){let a=this.getLowTemperature(o),e=this.getPrecipitationProbability(o);return p`
      <div class="forecast-item">
        <div class="forecast-time">${Uo(o.datetime,this.lang)}</div>
        <div class="forecast-icon">${vo(o.condition||"sunny")}</div>
        <div class="forecast-temp">
          ${this.getTemperature(o)}°${a!==null?p`<span class="forecast-temp-low">${a}°</span>`:""}
        </div>
        ${e!==null?p`<div class="forecast-precipitation">${e}%</div>`:""}
      </div>
    `}renderItems(){if(!this.showBars)return this.forecast.map((e)=>this.renderItem(e));let o=this.forecast.flatMap((e)=>{let n=this.getLowTemperature(e);return n!==null?[this.getTemperature(e),n]:[this.getTemperature(e)]});if(this.currentTemperature!=null&&this.forecast.some((e)=>$e(e.datetime)))o.push(Math.round(this.currentTemperature));let a={min:Math.min(...o),max:Math.max(...o)};return this.forecast.map((e)=>this.renderBarItem(e,a))}render(){if(this.forecast.length===0)return p``;return p`
      <div class="forecast-container">
        ${this.forecastTitle!==""?p`<div class="forecast-title">${this.forecastTitle??c.t("daily_forecast_title")}</div>`:""}
        <div class="forecast-scroll">
          ${this.renderItems()}
        </div>
      </div>
    `}}P([b({type:Array})],Ae.prototype,"forecast",void 0),P([b({type:String})],Ae.prototype,"forecastTitle",void 0),P([b({type:String})],Ae.prototype,"lang",void 0),P([b({type:Boolean})],Ae.prototype,"showBars",void 0),P([b({type:Number})],Ae.prototype,"currentTemperature",void 0),P([b({type:String})],Ae.prototype,"temperatureUnit",void 0);customElements.define("daily-forecast",Ae);class fa extends C{animationManager;forecastService;actionHandler;subscribedEntity=null;subscribedShowDaily=!1;_testTimeOfDay;_testMoonPhase;_testNow;static get styles(){return Pe}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:m.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:m.dailyForecastDays}}constructor(){super();this.config={},this.animationManager=new ma(()=>this.getDrawParams()),this.forecastService=new ya(()=>this.requestUpdate()),this.actionHandler=new va(()=>this.hass,()=>this.config,(o,a)=>this.fireEvent(o,a))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{let o=this.shadowRoot?.querySelector(".canvas-container");if(o)this.animationManager.setup(o)},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationManager.destroy(),this.forecastService.unsubscribe()}updated(o){if(super.updated(o),o.has("config")){let e=o.get("config"),n=e?e.showAnimations!==!1:!0,i=this.config.showAnimations!==!1;if(n&&!i)this.animationManager.destroy();else if(!n&&i)this.updateComplete.then(()=>{let r=this.shadowRoot?.querySelector(".canvas-container");if(r)this.animationManager.setup(r)})}if(o.has("hass")||o.has("config")){let e=this.config.entity,n=this.config.showDailyForecast??!1;if(this.hass&&e&&(e!==this.subscribedEntity||n!==this.subscribedShowDaily))this.subscribedEntity=e,this.subscribedShowDaily=n,this.forecastService.subscribe(this.hass,e,n)}let a=go({configLang:this.config?.language,hassLang:this.hass?.language});if(c.lang!==a)c.setLanguage(a)}getDrawParams(){if(!this.hass||!this.config.entity)return null;let o=wa(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),a=this.hass.states[this.config.entity],e=Ro(a||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||Xo(e);return{condition:o.condition,timeOfDay:n,sunPosition:{x:this.config.sunPositionX,y:this.config.sunPositionY},moonPhase:this._testMoonPhase??void 0,visualStyle:this.config.visualStyle,quality:this.config.animationQuality,windSpeed:this.getWindSpeedMs(o),aurora:this.config.showAurora===!0}}getWindSpeedMs(o){if(o.windSpeed==null||!this.hass)return null;let a=I(this.hass,this.config.entity),e=o.windSpeedUnit??(typeof a.wind_speed_unit==="string"?a.wind_speed_unit:"m/s");return Y(o.windSpeed,e,"m/s")}renderPrecipitationOutlook(o){if(!this.config.showPrecipitationOutlook)return p``;let a=this.forecastService.getHourlyData(),e=Ze(o.condition,a.length>0?a:o.forecast,this._testNow??new Date);if(!e)return p``;let n=e.time?ko(e.time,this.config.clockFormat??"24h",c.t("am"),c.t("pm")):"",r=c.t(`precipitation_outlook.${e.type==="start"&&!e.time?"soon":e.type}`).replace("{kind}",c.t(`precipitation_outlook.${e.kind}`)).replace("{time}",n).replace("{hours}",String(e.hours));return p`
      <div class="precipitation-outlook">
        <span class="info-icon">${q("precipitation")}</span>
        <span>${r}</span>
      </div>
    `}getDetailsConfig(){return{showHumidity:this.config.showHumidity??!0,showPressure:this.config.showPressure??!1,showUvIndex:this.config.showUvIndex??!1,showDewPoint:this.config.showDewPoint??!1,showWind:this.config.showWind??!0,showWindGust:this.config.showWindGust??!0,showWindDirection:this.config.showWindDirection??!0,showSunriseSunset:this.config.showSunriseSunset??!0,clockFormat:this.config.clockFormat??"24h",windSpeedUnit:this.config.windSpeedUnit??"ms"}}setConfig(o){if(!o.entity)throw Error("Please define a weather entity");let a=o.show_hourly_forecast??o.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:o.entity,icons_path:o.icons_path,name:o.name,height:o.height||m.height,showFeelsLike:o.show_feels_like!==!1,showWind:o.show_wind!==!1,showWindGust:o.show_wind_gust!==!1,showWindDirection:o.show_wind_direction!==!1,showHumidity:o.show_humidity!==!1,showPressure:o.show_pressure===!0,showUvIndex:o.show_uv_index===!0,showDewPoint:o.show_dew_point===!0,showMinTemp:o.show_min_temp!==!1,showPrecipitationOutlook:o.show_precipitation_outlook===!0,showAurora:o.show_aurora===!0,showTemperatureBars:o.show_temperature_bars===!0,showForecast:o.show_forecast===!0,showHourlyForecast:a===!0,showDailyForecast:o.show_daily_forecast===!0,hourlyForecastHours:o.hourly_forecast_hours??m.hourlyForecastHours,dailyForecastDays:o.daily_forecast_days??m.dailyForecastDays,hourlyForecastTitle:o.hourly_forecast_title??m.hourlyForecastTitle,dailyForecastTitle:o.daily_forecast_title??m.dailyForecastTitle,showSunriseSunset:o.show_sunrise_sunset!==!1,showClock:o.show_clock===!0,showDate:o.show_date===!0,clockPosition:o.clock_position||m.clockPosition,clockFormat:o.clock_format||m.clockFormat,overlayOpacity:o.overlay_opacity!==void 0?o.overlay_opacity:m.overlayOpacity,textShadow:o.text_shadow!==void 0?o.text_shadow:m.textShadow,borderRadius:o.border_radius??m.borderRadius,sunPositionX:o.sun_position_x??m.sunPositionX,sunPositionY:o.sun_position_y??m.sunPositionY,textColor:o.text_color?.trim()||m.textColor,language:o.language||m.language,windSpeedUnit:o.wind_speed_unit||m.windSpeedUnit,showAnimations:o.show_animations!==!1,layout:o.layout||m.layout,visualStyle:o.visual_style==="classic"?"classic":"modern",animationQuality:o.animation_quality==="medium"||o.animation_quality==="low"?o.animation_quality:m.animationQuality,sunriseEntity:o.sunrise_entity||null,sunsetEntity:o.sunset_entity||null,templowAttribute:o.templow_attribute||null,sensorEntities:{temperature:o.temperature_entity||null,feelsLike:o.feels_like_entity||null,humidity:o.humidity_entity||null,windSpeed:o.wind_speed_entity||null,windGust:o.wind_gust_entity||null,windBearing:o.wind_bearing_entity||null,precipitation:o.precipitation_entity||null,pressure:o.pressure_entity||null,uvIndex:o.uv_index_entity||null,dewPoint:o.dew_point_entity||null,aqi:o.aqi_entity||null},tapAction:o.tap_action||{action:"more-info"},holdAction:o.hold_action||{action:"none"},doubleTapAction:o.double_tap_action||{action:"none"}},this.config.language)c.setLanguage(this.config.language)}fireEvent(o,a={}){let e=new CustomEvent(o,{detail:a,bubbles:!0,composed:!0});this.dispatchEvent(e)}getCardSize(){return 1}render(){if(!this.hass)return p`<div>No Home Assistant connection</div>`;let o=wa(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),a=this.hass.states[this.config.entity],e=Ro(a,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||Xo(e),i=`weather-card ${n.type}${this.config.visualStyle==="classic"?" classic":""}`,r=this.config.layout==="minimal",l=r?"56px":"200px",s=this.config.height?`${this.config.height}px`:l,u=this.config.visualStyle==="classic",t;if(u){let h=pe(n);t=h?`background: linear-gradient(135deg, rgb(${h.start.r}, ${h.start.g}, ${h.start.b}), rgb(${h.end.r}, ${h.end.g}, ${h.end.b}));`:""}else{let h=Q(o.condition,n);t=`--dwc-sky-top: ${N(h.top)}; --dwc-sky-bottom: ${N(h.bottom)};`}let g=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:m.overlayOpacity};`,k=this.config.textShadow??m.textShadow,_=k===0?"none":[`0 1px 2px rgba(0,0,0,${Math.min(1,0.4*k).toFixed(2)})`,`0 2px 6px rgba(0,0,0,${Math.min(1,0.3*k).toFixed(2)})`,`0 4px 12px rgba(0,0,0,${Math.min(1,0.2*k).toFixed(2)})`].join(", "),v=k===0?"none":`drop-shadow(0px 1px 3px rgba(0,0,0,${Math.min(1,0.6*k).toFixed(2)}))`,w=`--card-text-shadow: ${_}; --card-icon-filter: ${v};`,f=this.config.showHourlyForecast?this.forecastService.getHourlyForecast(this.config.hourlyForecastHours??m.hourlyForecastHours,o):[],V=this.config.showDailyForecast?this.forecastService.getDailyForecast(this.config.dailyForecastDays??m.dailyForecastDays,o):[],j=`min-height: ${s}; ${t} ${g} ${w} cursor: pointer;`,oo=this.config.borderRadius,A=this.config.textColor&&CSS.supports("color",this.config.textColor)?this.config.textColor:null,ao=[typeof oo==="number"&&oo>=0?`--dwc-border-radius: ${oo}px;`:"",A?`--dwc-text-color: ${A};`:""].join(" "),W=this.hass;return p`
      <ha-card
        style="${ao}"
        @click=${(h)=>this.actionHandler.handleTap(h)}
        @pointerdown=${()=>this.actionHandler.handlePointerDown()}
        @pointerup=${(h)=>this.actionHandler.handlePointerUp(h)}
        @pointercancel=${(h)=>this.actionHandler.handlePointerUp(h)}
      >
        ${r?this.renderMinimal(o,e,W,i,j):this.renderDefault(o,e,f,V,W,i,j)}
      </ha-card>
    `}renderDefault(o,a,e,n,i,r,l){return p`
      <div class="${r}" style="${l}">
        ${this.config.showAnimations!==!1?p`<div class="canvas-container"></div>`:""}
        <div class="content">
          ${this.config.name&&this.config.name.trim()!==""?p`
            <div class="header">
              <div class="location">${this.config.name}</div>
            </div>
          `:""}
          <div class="primary">
            <div class="primary-left">
              <div class="condition">${c.t(o.condition)}</div>
              <div class="temperature">${o.temperature!=null?Math.round(o.temperature)+"°":c.t("no_data")}</div>
              ${this.config.showMinTemp?p`
                <div class="temp-range">
                  <span class="temp-min">↓ ${o.templow!=null?`${Math.round(o.templow)}°`:c.t("no_data")}</span>
                </div>
              `:""}
              ${this.config.showFeelsLike?p`
                <div class="feels-like">${c.t("feels_like")} ${o.apparentTemperature!=null?`${Math.round(o.apparentTemperature)}°`:c.t("no_data")}</div>
              `:""}
              ${this.renderPrecipitationOutlook(o)}
            </div>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="top"?this.config.clockFormat:null}
              .showDate=${!!this.config.showDate&&this.config.clockPosition==="top"}
              .lang=${c.lang}
            ></weather-clock>
          </div>
          <div class="details ${(this.config.showClock||this.config.showDate)&&this.config.clockPosition==="details"?"details--clock":""}">
            <weather-details
              .weather=${o}
              .sunData=${a}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${I(i,this.config.entity)}
            ></weather-details>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="details"?this.config.clockFormat:null}
              .showDate=${!!this.config.showDate&&this.config.clockPosition==="details"}
              .lang=${c.lang}
            ></weather-clock>
          </div>
          <hourly-forecast
            .forecast=${e}
            .clockFormat=${this.config.clockFormat??"24h"}
            .forecastTitle=${this.config.hourlyForecastTitle??null}
          ></hourly-forecast>
          <daily-forecast
            .forecast=${n}
            .lang=${c.lang}
            .forecastTitle=${this.config.dailyForecastTitle??null}
            .showBars=${this.config.showTemperatureBars===!0}
            .currentTemperature=${o.temperature}
            .temperatureUnit=${I(i,this.config.entity).temperature_unit??i.config?.unit_system?.temperature??"°C"}
          ></daily-forecast>
        </div>
      </div>
    `}renderMinimal(o,a,e,n,i){let r=o.temperature!=null?Math.round(o.temperature)+"°":c.t("no_data"),l=o.templow!=null?`↓ ${Math.round(o.templow)}°`:null;return p`
      <div class="${n} layout--minimal" style="${i}">
        ${this.config.showAnimations!==!1?p`<div class="canvas-container"></div>`:""}
        <div class="content">
          <div class="mini-primary">
            <div class="mini-temp">${r}</div>
            ${this.config.showMinTemp&&l?p`<div class="mini-temp-low">${l}</div>`:""}
          </div>
          <div class="mini-details">
            <div class="mini-condition">${c.t(o.condition)}</div>
            <weather-details
              .weather=${o}
              .sunData=${a}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${I(e,this.config.entity)}
              .compact=${!0}
            ></weather-details>
          </div>
          ${this.config.showClock||this.config.showDate?p`
            <weather-clock
              .format=${this.config.showClock?this.config.clockFormat:null}
              .showDate=${!!this.config.showDate}
              .lang=${c.lang}
              .compact=${!0}
            ></weather-clock>
          `:""}
        </div>
      </div>
    `}}P([b({type:Object})],fa.prototype,"hass",void 0),P([b({type:Object})],fa.prototype,"config",void 0);var On=(o)=>{let a=`editor.language_${o}`,e=c.t(a);if(e!==a)return e;try{return new Intl.DisplayNames([c.lang],{type:"language"}).of(o)??o}catch{return o}};class Pa extends C{constructor(){super(...arguments);this._config={}}setConfig(o){this._config={name:"",layout:m.layout,height:m.height,show_feels_like:m.showFeelsLike,show_wind:m.showWind,show_wind_gust:m.showWindGust,show_wind_direction:m.showWindDirection,show_humidity:m.showHumidity,show_pressure:m.showPressure,show_uv_index:m.showUvIndex,show_dew_point:m.showDewPoint,show_min_temp:m.showMinTemp,show_precipitation_outlook:m.showPrecipitationOutlook,show_temperature_bars:m.showTemperatureBars,show_aurora:m.showAurora,show_hourly_forecast:m.showHourlyForecast,hourly_forecast_hours:m.hourlyForecastHours,show_daily_forecast:m.showDailyForecast,daily_forecast_days:m.dailyForecastDays,show_sunrise_sunset:m.showSunriseSunset,show_animations:m.showAnimations,visual_style:m.visualStyle,animation_quality:m.animationQuality,show_clock:m.showClock,show_date:m.showDate,clock_position:m.clockPosition,clock_format:m.clockFormat,overlay_opacity:m.overlayOpacity,text_shadow:m.textShadow,language:m.language,wind_speed_unit:m.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...o}}updated(o){if(super.updated(o),o.has("hass")){let a=go({hassLang:this.hass?.language});if(c.lang!==a)c.setLanguage(a),this.requestUpdate()}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"layout",selector:{select:{options:[{label:c.t("editor.layout_default"),value:"default"},{label:c.t("editor.layout_minimal"),value:"minimal"}]}}},{name:"height",selector:{number:{min:50,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_pressure",selector:{boolean:{}}},{name:"show_uv_index",selector:{boolean:{}}},{name:"show_dew_point",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_precipitation_outlook",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"hourly_forecast_title",selector:{text:{}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"daily_forecast_title",selector:{text:{}}},{name:"show_temperature_bars",selector:{boolean:{}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"sensors",type:"expandable",flatten:!0,title:c.t("editor.sensors"),schema:["temperature_entity","feels_like_entity","humidity_entity","wind_speed_entity","wind_gust_entity","wind_bearing_entity","precipitation_entity","pressure_entity","uv_index_entity","dew_point_entity","aqi_entity"].map((o)=>({name:o,selector:{entity:{domain:["sensor"]}}}))},{name:"show_clock",selector:{boolean:{}}},{name:"show_date",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:c.t("editor.clock_position_top"),value:"top"},{label:c.t("editor.clock_position_details"),value:"details"}]}}},{name:"clock_format",selector:{select:{options:[{label:c.t("editor.clock_format_24h"),value:"24h"},{label:c.t("editor.clock_format_12h"),value:"12h"}]}}},{name:"show_animations",selector:{boolean:{}}},{name:"show_aurora",selector:{boolean:{}}},{name:"visual_style",selector:{select:{options:[{label:c.t("editor.visual_style_modern"),value:"modern"},{label:c.t("editor.visual_style_classic"),value:"classic"}]}}},{name:"animation_quality",selector:{select:{options:[{label:c.t("editor.animation_quality_high"),value:"high"},{label:c.t("editor.animation_quality_medium"),value:"medium"},{label:c.t("editor.animation_quality_low"),value:"low"}]}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"text_shadow",selector:{number:{min:0,max:3,step:1,mode:"box"}}},{name:"text_color",selector:{text:{}}},{name:"border_radius",selector:{number:{min:0,max:50,step:1,mode:"box",unit_of_measurement:"px"}}},{name:"sun_position_x",selector:{number:{min:0,max:100,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"sun_position_y",selector:{number:{min:0,max:100,step:1,mode:"slider",unit_of_measurement:"%"}}},{name:"language",selector:{select:{options:[{label:c.t("editor.language_auto"),value:"auto"},...Object.keys(Z).map((o)=>({label:On(o),value:o}))]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:c.t("editor.wind_speed_unit_ms"),value:"ms"},{label:c.t("editor.wind_speed_unit_kmh"),value:"kmh"}]}}}]}_computeLabel=(o)=>{let a=`editor.${o.name}`,e=c.t(a);return e===a?o.name:e};_valueChanged(o){let a=o.detail?.value;if(!a)return;this._config=a,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return p``;return p`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}P([b({attribute:!1})],Pa.prototype,"hass",void 0),P([_o()],Pa.prototype,"_config",void 0);var We={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},za=(o)=>(...a)=>({_$litDirective$:o,values:a});class ba{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,a,e){this._$Ct=o,this._$AM=a,this._$Ci=e}_$AS(o,a){return this.update(o,a)}update(o,a){return this.render(...a)}}var Ge=(o)=>o.strings===void 0;var wo=(o,a)=>{let e=o._$AN;if(e===void 0)return!1;for(let n of e)n._$AO?.(a,!1),wo(n,a);return!0},To=(o)=>{let a,e;do{if((a=o._$AM)===void 0)break;e=a._$AN,e.delete(o),o=a}while(e?.size===0)},Le=(o)=>{for(let a;a=o._$AM;o=a){let e=a._$AN;if(e===void 0)a._$AN=e=new Set;else if(e.has(o))break;e.add(o),In(a)}};function Yn(o){this._$AN!==void 0?(To(this),this._$AM=o,Le(this)):this._$AM=o}function xn(o,a=!1,e=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(a)if(Array.isArray(n))for(let r=e;r<n.length;r++)wo(n[r],!1),To(n[r]);else n!=null&&(wo(n,!1),To(n));else wo(this,o)}var In=(o)=>{o.type==We.CHILD&&(o._$AP??=xn,o._$AQ??=Yn)};class Ma extends ba{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,a,e){super._$AT(o,a,e),Le(this),this.isConnected=o._$AU}_$AO(o,a=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),a&&(wo(this,o),To(this))}setValue(o){if(Ge(this._$Ct))this._$Ct._$AI(o,this);else{let a=[...this._$Ct._$AH];a[this._$Ci]=o,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}class Ue extends Ma{_key="";_onLangChange=null;render(o){return this._key=o,c.t(o)}reconnected(){this._onLangChange=()=>{this.setValue(c.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var oi=za(Ue);try{Me(),customElements.define("dynamic-weather-card",fa),customElements.define("dynamic-weather-card-editor",Pa),console.log(`%cDynamic Weather Card %c${Ra}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let o={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(o)}catch(o){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",o)}export{oi as t,go as resolveLanguage,c as i18n};
