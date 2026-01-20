var Y=function($,J,q,Q){var K=arguments.length,Z=K<3?J:Q===null?Q=Object.getOwnPropertyDescriptor(J,q):Q,V;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Z=Reflect.decorate($,J,q,Q);else for(var W=$.length-1;W>=0;W--)if(V=$[W])Z=(K<3?V(Z):K>3?V(J,q,Z):V(J,q))||Z;return K>3&&Z&&Object.defineProperty(J,q,Z),Z};var c=globalThis,g=c.ShadowRoot&&(c.ShadyCSS===void 0||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),G0=new WeakMap;class d{constructor($,J,q){if(this._$cssResult$=!0,q!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=$,this.t=J}get styleSheet(){let $=this.o;const J=this.t;if(g&&$===void 0){const q=J!==void 0&&J.length===1;q&&($=G0.get(J)),$===void 0&&((this.o=$=new CSSStyleSheet).replaceSync(this.cssText),q&&G0.set(J,$))}return $}toString(){return this.cssText}}var X0=($)=>new d(typeof $=="string"?$:$+"",void 0,e),i=($,...J)=>{const q=$.length===1?$[0]:J.reduce((Q,K,Z)=>Q+((V)=>{if(V._$cssResult$===!0)return V.cssText;if(typeof V=="number")return V;throw Error("Value passed to 'css' function must be a 'css' function result: "+V+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(K)+$[Z+1],$[0]);return new d(q,$,e)},F0=($,J)=>{if(g)$.adoptedStyleSheets=J.map((q)=>q instanceof CSSStyleSheet?q:q.styleSheet);else for(let q of J){const Q=document.createElement("style"),K=c.litNonce;K!==void 0&&Q.setAttribute("nonce",K),Q.textContent=q.cssText,$.appendChild(Q)}},t=g?($)=>$:($)=>$ instanceof CSSStyleSheet?((J)=>{let q="";for(let Q of J.cssRules)q+=Q.cssText;return X0(q)})($):$;var{is:P1,defineProperty:b1,getOwnPropertyDescriptor:j1,getOwnPropertyNames:x1,getOwnPropertySymbols:U1,getPrototypeOf:R1}=Object,h=globalThis,Y0=h.trustedTypes,_1=Y0?Y0.emptyScript:"",N1=h.reactiveElementPolyfillSupport,E=($,J)=>$,z={toAttribute($,J){switch(J){case Boolean:$=$?_1:null;break;case Object:case Array:$=$==null?$:JSON.stringify($)}return $},fromAttribute($,J){let q=$;switch(J){case Boolean:q=$!==null;break;case Number:q=$===null?null:Number($);break;case Object:case Array:try{q=JSON.parse($)}catch(Q){q=null}}return q}},r=($,J)=>!P1($,J),A0={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:r};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;class X extends HTMLElement{static addInitializer($){this._$Ei(),(this.l??=[]).push($)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty($,J=A0){if(J.state&&(J.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty($)&&((J=Object.create(J)).wrapped=!0),this.elementProperties.set($,J),!J.noAccessor){const q=Symbol(),Q=this.getPropertyDescriptor($,q,J);Q!==void 0&&b1(this.prototype,$,Q)}}static getPropertyDescriptor($,J,q){const{get:Q,set:K}=j1(this.prototype,$)??{get(){return this[J]},set(Z){this[J]=Z}};return{get:Q,set(Z){const V=Q?.call(this);K?.call(this,Z),this.requestUpdate($,V,q)},configurable:!0,enumerable:!0}}static getPropertyOptions($){return this.elementProperties.get($)??A0}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const $=R1(this);$.finalize(),$.l!==void 0&&(this.l=[...$.l]),this.elementProperties=new Map($.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const J=this.properties,q=[...x1(J),...U1(J)];for(let Q of q)this.createProperty(Q,J[Q])}const $=this[Symbol.metadata];if($!==null){const J=litPropertyMetadata.get($);if(J!==void 0)for(let[q,Q]of J)this.elementProperties.set(q,Q)}this._$Eh=new Map;for(let[J,q]of this.elementProperties){const Q=this._$Eu(J,q);Q!==void 0&&this._$Eh.set(Q,J)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles($){const J=[];if(Array.isArray($)){const q=new Set($.flat(Infinity).reverse());for(let Q of q)J.unshift(t(Q))}else $!==void 0&&J.push(t($));return J}static _$Eu($,J){const q=J.attribute;return q===!1?void 0:typeof q=="string"?q:typeof $=="string"?$.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(($)=>this.enableUpdating=$),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(($)=>$(this))}addController($){(this._$EO??=new Set).add($),this.renderRoot!==void 0&&this.isConnected&&$.hostConnected?.()}removeController($){this._$EO?.delete($)}_$E_(){const $=new Map,J=this.constructor.elementProperties;for(let q of J.keys())this.hasOwnProperty(q)&&($.set(q,this[q]),delete this[q]);$.size>0&&(this._$Ep=$)}createRenderRoot(){const $=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return F0($,this.constructor.elementStyles),$}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(($)=>$.hostConnected?.())}enableUpdating($){}disconnectedCallback(){this._$EO?.forEach(($)=>$.hostDisconnected?.())}attributeChangedCallback($,J,q){this._$AK($,q)}_$ET($,J){const q=this.constructor.elementProperties.get($),Q=this.constructor._$Eu($,q);if(Q!==void 0&&q.reflect===!0){const K=(q.converter?.toAttribute!==void 0?q.converter:z).toAttribute(J,q.type);this._$Em=$,K==null?this.removeAttribute(Q):this.setAttribute(Q,K),this._$Em=null}}_$AK($,J){const q=this.constructor,Q=q._$Eh.get($);if(Q!==void 0&&this._$Em!==Q){const K=q.getPropertyOptions(Q),Z=typeof K.converter=="function"?{fromAttribute:K.converter}:K.converter?.fromAttribute!==void 0?K.converter:z;this._$Em=Q;const V=Z.fromAttribute(J,K.type);this[Q]=V??this._$Ej?.get(Q)??V,this._$Em=null}}requestUpdate($,J,q,Q=!1,K){if($!==void 0){const Z=this.constructor;if(Q===!1&&(K=this[$]),q??=Z.getPropertyOptions($),!((q.hasChanged??r)(K,J)||q.useDefault&&q.reflect&&K===this._$Ej?.get($)&&!this.hasAttribute(Z._$Eu($,q))))return;this.C($,J,q)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C($,J,{useDefault:q,reflect:Q,wrapped:K},Z){q&&!(this._$Ej??=new Map).has($)&&(this._$Ej.set($,Z??J??this[$]),K!==!0||Z!==void 0)||(this._$AL.has($)||(this.hasUpdated||q||(J=void 0),this._$AL.set($,J)),Q===!0&&this._$Em!==$&&(this._$Eq??=new Set).add($))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(J){Promise.reject(J)}const $=this.scheduleUpdate();return $!=null&&await $,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[Q,K]of this._$Ep)this[Q]=K;this._$Ep=void 0}const q=this.constructor.elementProperties;if(q.size>0)for(let[Q,K]of q){const{wrapped:Z}=K,V=this[Q];Z!==!0||this._$AL.has(Q)||V===void 0||this.C(Q,void 0,K,V)}}let $=!1;const J=this._$AL;try{$=this.shouldUpdate(J),$?(this.willUpdate(J),this._$EO?.forEach((q)=>q.hostUpdate?.()),this.update(J)):this._$EM()}catch(q){throw $=!1,this._$EM(),q}$&&this._$AE(J)}willUpdate($){}_$AE($){this._$EO?.forEach((J)=>J.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated($)),this.updated($)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate($){return!0}update($){this._$Eq&&=this._$Eq.forEach((J)=>this._$ET(J,this[J])),this._$EM()}updated($){}firstUpdated($){}}X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[E("elementProperties")]=new Map,X[E("finalized")]=new Map,N1?.({ReactiveElement:X}),(h.reactiveElementVersions??=[]).push("2.1.2");var D0=function($,J){if(!q0($)||!$.hasOwnProperty("raw"))throw Error("invalid template strings array");return v0!==void 0?v0.createHTML(J):J},S=function($,J,q=$,Q){if(J===I)return J;let K=Q!==void 0?q._$Co?.[Q]:q._$Cl;const Z=D(J)?void 0:J._$litDirective$;return K?.constructor!==Z&&(K?._$AO?.(!1),Z===void 0?K=void 0:(K=new Z($),K._$AT($,q,Q)),Q!==void 0?(q._$Co??=[])[Q]=K:q._$Cl=K),K!==void 0&&(J=S($,K._$AS($,J.values),K,Q)),J},$0=globalThis,C0=($)=>$,o=$0.trustedTypes,v0=o?o.createPolicy("lit-html",{createHTML:($)=>$}):void 0;var F=`lit\$${Math.random().toFixed(9).slice(2)}\$`,O0="?"+F,H1=`<${O0}>`,v=document,T=()=>v.createComment(""),D=($)=>$===null||typeof $!="object"&&typeof $!="function",q0=Array.isArray,k1=($)=>q0($)||typeof $?.[Symbol.iterator]=="function";var O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I0=/-->/g,p0=/>/g,A=RegExp(`>|[ \t\n\f\r](?:([^\\s"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|\$)`,"g"),S0=/'/g,E0=/"/g,T0=/^(?:script|style|textarea|title)$/i,J0=($)=>(J,...q)=>({_$litType$:$,strings:J,values:q}),b=J0(1),j=J0(2),g1=J0(3),I=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),z0=new WeakMap,C=v.createTreeWalker(v,129),L1=($,J)=>{const q=$.length-1,Q=[];let K,Z=J===2?"<svg>":J===3?"<math>":"",V=O;for(let W=0;W<q;W++){const B=$[W];let x,M,R=-1,H=0;for(;H<B.length&&(V.lastIndex=H,M=V.exec(B),M!==null);)H=V.lastIndex,V===O?M[1]==="!--"?V=I0:M[1]!==void 0?V=p0:M[2]!==void 0?(T0.test(M[2])&&(K=RegExp("</"+M[2],"g")),V=A):M[3]!==void 0&&(V=A):V===A?M[0]===">"?(V=K??O,R=-1):M[1]===void 0?R=-2:(R=V.lastIndex-M[2].length,x=M[1],V=M[3]===void 0?A:M[3]==='"'?E0:S0):V===E0||V===S0?V=A:V===I0||V===p0?V=O:(V=A,K=void 0);const L=V===A&&$[W+1].startsWith("/>")?" ":"";Z+=V===O?B+H1:R>=0?(Q.push(x),B.slice(0,R)+"$lit$"+B.slice(R)+F+L):B+F+(R===-2?W:L)}return[D0($,Z+($[q]||"<?>")+(J===2?"</svg>":J===3?"</math>":"")),Q]};class w{constructor({strings:$,_$litType$:J},q){let Q;this.parts=[];let K=0,Z=0;const V=$.length-1,W=this.parts,[B,x]=L1($,J);if(this.el=w.createElement(B,q),C.currentNode=this.el.content,J===2||J===3){const M=this.el.content.firstChild;M.replaceWith(...M.childNodes)}for(;(Q=C.nextNode())!==null&&W.length<V;){if(Q.nodeType===1){if(Q.hasAttributes())for(let M of Q.getAttributeNames())if(M.endsWith("$lit$")){const R=x[Z++],H=Q.getAttribute(M).split(F),L=/([.?@])?(.*)/.exec(R);W.push({type:1,index:K,name:L[2],strings:H,ctor:L[1]==="."?f0:L[1]==="?"?y0:L[1]==="@"?l0:y}),Q.removeAttribute(M)}else M.startsWith(F)&&(W.push({type:6,index:K}),Q.removeAttribute(M));if(T0.test(Q.tagName)){const M=Q.textContent.split(F),R=M.length-1;if(R>0){Q.textContent=o?o.emptyScript:"";for(let H=0;H<R;H++)Q.append(M[H],T()),C.nextNode(),W.push({type:2,index:++K});Q.append(M[R],T())}}}else if(Q.nodeType===8)if(Q.data===O0)W.push({type:2,index:K});else{let M=-1;for(;(M=Q.data.indexOf(F,M+1))!==-1;)W.push({type:7,index:K}),M+=F.length-1}K++}}static createElement($,J){const q=v.createElement("template");return q.innerHTML=$,q}}class w0{constructor($,J){this._$AV=[],this._$AN=void 0,this._$AD=$,this._$AM=J}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u($){const{el:{content:J},parts:q}=this._$AD,Q=($?.creationScope??v).importNode(J,!0);C.currentNode=Q;let K=C.nextNode(),Z=0,V=0,W=q[0];for(;W!==void 0;){if(Z===W.index){let B;W.type===2?B=new f(K,K.nextSibling,this,$):W.type===1?B=new W.ctor(K,W.name,W.strings,this,$):W.type===6&&(B=new u0(K,this,$)),this._$AV.push(B),W=q[++V]}Z!==W?.index&&(K=C.nextNode(),Z++)}return C.currentNode=v,Q}p($){let J=0;for(let q of this._$AV)q!==void 0&&(q.strings!==void 0?(q._$AI($,q,J),J+=q.strings.length-2):q._$AI($[J])),J++}}class f{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor($,J,q,Q){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=$,this._$AB=J,this._$AM=q,this.options=Q,this._$Cv=Q?.isConnected??!0}get parentNode(){let $=this._$AA.parentNode;const J=this._$AM;return J!==void 0&&$?.nodeType===11&&($=J.parentNode),$}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI($,J=this){$=S(this,$,J),D($)?$===_||$==null||$===""?(this._$AH!==_&&this._$AR(),this._$AH=_):$!==this._$AH&&$!==I&&this._($):$._$litType$!==void 0?this.$($):$.nodeType!==void 0?this.T($):k1($)?this.k($):this._($)}O($){return this._$AA.parentNode.insertBefore($,this._$AB)}T($){this._$AH!==$&&(this._$AR(),this._$AH=this.O($))}_($){this._$AH!==_&&D(this._$AH)?this._$AA.nextSibling.data=$:this.T(v.createTextNode($)),this._$AH=$}$($){const{values:J,_$litType$:q}=$,Q=typeof q=="number"?this._$AC($):(q.el===void 0&&(q.el=w.createElement(D0(q.h,q.h[0]),this.options)),q);if(this._$AH?._$AD===Q)this._$AH.p(J);else{const K=new w0(Q,this),Z=K.u(this.options);K.p(J),this.T(Z),this._$AH=K}}_$AC($){let J=z0.get($.strings);return J===void 0&&z0.set($.strings,J=new w($)),J}k($){q0(this._$AH)||(this._$AH=[],this._$AR());const J=this._$AH;let q,Q=0;for(let K of $)Q===J.length?J.push(q=new f(this.O(T()),this.O(T()),this,this.options)):q=J[Q],q._$AI(K),Q++;Q<J.length&&(this._$AR(q&&q._$AB.nextSibling,Q),J.length=Q)}_$AR($=this._$AA.nextSibling,J){for(this._$AP?.(!1,!0,J);$!==this._$AB;){const q=C0($).nextSibling;C0($).remove(),$=q}}setConnected($){this._$AM===void 0&&(this._$Cv=$,this._$AP?.($))}}class y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor($,J,q,Q,K){this.type=1,this._$AH=_,this._$AN=void 0,this.element=$,this.name=J,this._$AM=Q,this.options=K,q.length>2||q[0]!==""||q[1]!==""?(this._$AH=Array(q.length-1).fill(new String),this.strings=q):this._$AH=_}_$AI($,J=this,q,Q){const K=this.strings;let Z=!1;if(K===void 0)$=S(this,$,J,0),Z=!D($)||$!==this._$AH&&$!==I,Z&&(this._$AH=$);else{const V=$;let W,B;for($=K[0],W=0;W<K.length-1;W++)B=S(this,V[q+W],J,W),B===I&&(B=this._$AH[W]),Z||=!D(B)||B!==this._$AH[W],B===_?$=_:$!==_&&($+=(B??"")+K[W+1]),this._$AH[W]=B}Z&&!Q&&this.j($)}j($){$===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,$??"")}}class f0 extends y{constructor(){super(...arguments),this.type=3}j($){this.element[this.name]=$===_?void 0:$}}class y0 extends y{constructor(){super(...arguments),this.type=4}j($){this.element.toggleAttribute(this.name,!!$&&$!==_)}}class l0 extends y{constructor($,J,q,Q,K){super($,J,q,Q,K),this.type=5}_$AI($,J=this){if(($=S(this,$,J,0)??_)===I)return;const q=this._$AH,Q=$===_&&q!==_||$.capture!==q.capture||$.once!==q.once||$.passive!==q.passive,K=$!==_&&(q===_||Q);Q&&this.element.removeEventListener(this.name,this,q),K&&this.element.addEventListener(this.name,this,$),this._$AH=$}handleEvent($){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,$):this._$AH.handleEvent($)}}class u0{constructor($,J,q){this.element=$,this.type=6,this._$AN=void 0,this._$AM=J,this.options=q}get _$AU(){return this._$AM._$AU}_$AI($){S(this,$)}}var G1=$0.litHtmlPolyfillSupport;G1?.(w,f),($0.litHtmlVersions??=[]).push("3.3.2");var m0=($,J,q)=>{const Q=q?.renderBefore??J;let K=Q._$litPart$;if(K===void 0){const Z=q?.renderBefore??null;Q._$litPart$=K=new f(J.insertBefore(T(),Z),Z,void 0,q??{})}return K._$AI($),K};var Q0=globalThis;class G extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const $=super.createRenderRoot();return this.renderOptions.renderBefore??=$.firstChild,$}update($){const J=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update($),this._$Do=m0(J,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}G._$litElement$=!0,G.finalized=!0,Q0.litElementHydrateSupport?.({LitElement:G});var X1=Q0.litElementPolyfillSupport;X1?.({LitElement:G});(Q0.litElementVersions??=[]).push("4.2.2");var p=function($){return(J,q)=>typeof q=="object"?Y1($,J,q):((Q,K,Z)=>{const V=K.hasOwnProperty(Z);return K.constructor.createProperty(Z,Q),V?Object.getOwnPropertyDescriptor(K,Z):void 0})($,J,q)},F1={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:r},Y1=($=F1,J,q)=>{const{kind:Q,metadata:K}=q;let Z=globalThis.litPropertyMetadata.get(K);if(Z===void 0&&globalThis.litPropertyMetadata.set(K,Z=new Map),Q==="setter"&&(($=Object.create($)).wrapped=!0),Z.set(q.name,$),Q==="accessor"){const{name:V}=q;return{set(W){const B=J.get.call(this);J.set.call(this,W),this.requestUpdate(V,B,$,!0,W)},init(W){return W!==void 0&&this.C(V,void 0,$,W),W}}}if(Q==="setter"){const{name:V}=q;return function(W){const B=this[V];J.call(this,W),this.requestUpdate(V,B,$,!0,W)}}throw Error("Unsupported decorator location: "+Q)};var a=function($){return p({...$,state:!0,attribute:!1})};var c0="0.4.0",k={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},g0=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],P={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var A1={sunny:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u043E",clear:"\u042F\u0441\u043D\u043E",overcast:"\u041F\u0430\u0441\u043C\u0443\u0440\u043D\u043E",cloudy:"\u041E\u0431\u043B\u0430\u0447\u043D\u043E",partlycloudy:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C",rainy:"\u0414\u043E\u0436\u0434\u044C",rain:"\u0414\u043E\u0436\u0434\u044C",snowy:"\u0421\u043D\u0435\u0433",snow:"\u0421\u043D\u0435\u0433",foggy:"\u0422\u0443\u043C\u0430\u043D",fog:"\u0422\u0443\u043C\u0430\u043D",lightning:"\u0413\u0440\u043E\u0437\u0430","lightning-rainy":"\u0413\u0440\u043E\u0437\u0430 \u0441 \u0434\u043E\u0436\u0434\u0435\u043C",pouring:"\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C","snowy-rainy":"\u041C\u043E\u043A\u0440\u044B\u0439 \u0441\u043D\u0435\u0433",hail:"\u0413\u0440\u0430\u0434","clear-night":"\u042F\u0441\u043D\u0430\u044F \u043D\u043E\u0447\u044C",feels_like:"\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A",forecast_title:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",daily_forecast_title:"\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043F\u0440\u043E\u0433\u043D\u043E\u0437",no_data:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",forecast_unavailable:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D",weather:"\u041F\u043E\u0433\u043E\u0434\u0430",language:"Language",wind_unit_kmh:"\u043A\u043C/\u0447",wind_unit_ms:"\u043C/\u0441",demo:{pageTitle:"\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u043E\u0433\u043E\u0434\u044B",pageSubtitle:"\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430",livePreview:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",configuration:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F",quickPresets:"\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u043F\u0440\u0435\u0441\u0435\u0442\u044B",sunnyDay:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0434\u0435\u043D\u044C",rainy:"\u0414\u043E\u0436\u0434\u044C",snowy:"\u0421\u043D\u0435\u0433",clearNight:"\u042F\u0441\u043D\u0430\u044F \u043D\u043E\u0447\u044C",weatherCondition:"\u041F\u043E\u0433\u043E\u0434\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F",condition:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435",temperature:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",humidity:"\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C (%)",windSpeed:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u0442\u0440\u0430",timeOfDay:"\u0412\u0440\u0435\u043C\u044F \u0441\u0443\u0442\u043E\u043A",timeMode:"\u0420\u0435\u0436\u0438\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438",autoTime:"\u0410\u0432\u0442\u043E (\u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F)",manualControl:"\u0420\u0443\u0447\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",sunrise:"\u0412\u043E\u0441\u0445\u043E\u0434",day:"\u0414\u0435\u043D\u044C",sunset:"\u0417\u0430\u043A\u0430\u0442",night:"\u041D\u043E\u0447\u044C",currentTime:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F",displayOptions:"\u041E\u043F\u0446\u0438\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",cardName:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",height:"\u0412\u044B\u0441\u043E\u0442\u0430 (px)",feelsLike:"\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A",minTemp:"\u041C\u0438\u043D. \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",windDirection:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0442\u0440\u0430",windGust:"\u041F\u043E\u0440\u044B\u0432\u044B \u0432\u0435\u0442\u0440\u0430",hourlyForecast:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0433\u043D\u043E\u0437",dailyForecast:"\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043F\u0440\u043E\u0433\u043D\u043E\u0437",sunriseSunset:"\u0412\u043E\u0441\u0445\u043E\u0434/\u0417\u0430\u043A\u0430\u0442",updateCard:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",startDemo:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0434\u0435\u043C\u043E",stopDemo:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0435\u043C\u043E",madeWith:"\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E \u0434\u043B\u044F Home Assistant",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438...",errorTitle:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",errorDetails:"\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 (F12) \u0434\u043B\u044F \u0434\u0435\u0442\u0430\u043B\u0435\u0439",errorServer:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0444\u0430\u0439\u043B \u043E\u0442\u043A\u0440\u044B\u0442 \u0447\u0435\u0440\u0435\u0437 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 (\u043D\u0435 file://)",placeholderEmpty:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0441\u0442\u044B\u043C, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0440\u044B\u0442\u044C",weatherConditions:{sunny:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u043E",clear:"\u042F\u0441\u043D\u043E",clearNight:"\u042F\u0441\u043D\u0430\u044F \u043D\u043E\u0447\u044C",partlyCloudy:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C",cloudy:"\u041E\u0431\u043B\u0430\u0447\u043D\u043E",rainy:"\u0414\u043E\u0436\u0434\u044C",pouring:"\u041B\u0438\u0432\u0435\u043D\u044C",snowy:"\u0421\u043D\u0435\u0433",sleet:"\u041C\u043E\u043A\u0440\u044B\u0439 \u0441\u043D\u0435\u0433",hail:"\u0413\u0440\u0430\u0434",foggy:"\u0422\u0443\u043C\u0430\u043D",lightning:"\u0413\u0440\u043E\u0437\u0430",thunderstorm:"\u0413\u0440\u043E\u0437\u0430 \u0441 \u0434\u043E\u0436\u0434\u0435\u043C"},language:{title:"\u042F\u0437\u044B\u043A",english:"English",russian:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",french:"Fran\xE7ais",german:"Deutsch",dutch:"Nederlands",spanish:"Espa\xF1ol"}}},d0=A1;var C1={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bew\xF6lkt",partlycloudy:"Teilweise bew\xF6lkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gef\xFChlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verf\xFCgbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"H\xF6he (px)",feelsLike:"Gef\xFChlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windb\xF6en",hourlyForecast:"St\xFCndliche Vorhersage",dailyForecast:"T\xE4gliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe f\xFCr Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"\xDCberpr\xFCfe die Browser-Konsole (F12) f\xFCr Details",errorServer:"Stelle sicher, dass die Datei \xFCber einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bew\xF6lkt",cloudy:"Bew\xF6lkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",french:"Fran\xE7ais",german:"Deutsch",dutch:"Nederlands",spanish:"Espa\xF1ol"}}},h0=C1;var v1={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",french:"Fran\xE7ais",german:"Deutsch",dutch:"Nederlands",spanish:"Espa\xF1ol"}}},r0=v1;var I1={sunny:"Ensoleill\xE9",clear:"D\xE9gag\xE9",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"\xC9clairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Gr\xEAle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Pr\xE9visions du jour",daily_forecast_title:"Pr\xE9visions quotidiennes",no_data:"Aucune donn\xE9e",forecast_unavailable:"Pr\xE9visions non disponibles",weather:"M\xE9t\xE9o",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"Carte M\xE9t\xE9o Dynamique",pageSubtitle:"D\xE9mo Interactive & Outil de Configuration",livePreview:"Aper\xE7u en direct",configuration:"Configuration",quickPresets:"Pr\xE9-r\xE9glages rapides",sunnyDay:"Journ\xE9e ensoleill\xE9e",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition m\xE9t\xE9o",condition:"Condition",temperature:"Temp\xE9rature",humidity:"Humidit\xE9 (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journ\xE9e",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contr\xF4le manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Temp\xE9rature ressentie",minTemp:"Temp\xE9rature minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Pr\xE9visions horaires",dailyForecast:"Pr\xE9visions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",updateCard:"Mettre \xE0 jour la carte",startDemo:"D\xE9marrer le mode d\xE9mo",stopDemo:"Arr\xEAter la d\xE9mo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"\xC9chec du chargement de la carte",errorDetails:"V\xE9rifiez la console du navigateur (F12) pour plus de d\xE9tails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleill\xE9",clear:"D\xE9gag\xE9",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Gr\xEAle",foggy:"Brumeux",lightning:"\xC9clairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",french:"Fran\xE7ais",german:"Deutsch",dutch:"Nederlands",spanish:"Espa\xF1ol"}}},o0=I1;var p1={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish"}}},a0=p1;var S1={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta El\xE9ctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensaci\xF3n t\xE9rmica",forecast_title:"Previsi\xF3n para hoy",daily_forecast_title:"Previsi\xF3n diaria",no_data:"Sin datos",forecast_unavailable:"Forecast unavailable",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"\uD83C\uDF24\uFE0F Tarjeta Meteorol\xF3gica Din\xE1mica",pageSubtitle:"Demostraci\xF3n interactiva Y Herramienta De Configuraci\xF3n",livePreview:"Vista previa en vivo",configuration:"\u2699\uFE0F Configuraci\xF3n",quickPresets:"\uD83C\uDFA8 Ajustes R\xE1pidos",sunnyDay:"D\xEDa soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"\uD83C\uDF26\uFE0F Condiciones Meteorol\xF3gicas",condition:"Condici\xF3n",temperature:"Temperatura (\xB0C)",humidity:"Humedad (%)",windSpeed:"Velocidad Del Viento",timeOfDay:"\uD83D\uDD50 Hora del D\xEDa",timeMode:"Modo Tiempo",autoTime:"\uD83D\uDD50 Auto (Hora Actual)",manualControl:"\u23F1\uFE0F Manual Control",sunrise:"\uD83C\uDF05 Amanecer",day:"\u2600\uFE0F D\xEDa",sunset:"\uD83C\uDF07 Atardecer",night:"\uD83C\uDF19 Noche",currentTime:"Hora Actual",displayOptions:"\uD83D\uDC41\uFE0F Opciones de Visualizaci\xF3n",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensaci\xF3n T\xE9rmica",minTemp:"Temperatura M\xEDnima",windDirection:"Direcci\xF3n del Viento",windGust:"R\xE1faga de Viento",hourlyForecast:"Previsi\xF3n por Horas",dailyForecast:"Previsi\xF3n diaria",sunriseSunset:"Amanecer/Atardecer",updateCard:"\uD83D\uDD04 Actualizar Tarjeta",startDemo:"\uD83C\uDFAC Iniciar Modo Demostraci\xF3n",stopDemo:"\u23F9\uFE0F Detener Demostraci\xF3n",madeWith:"Hecho con \u2764\uFE0F para Home Assistant",loading:"\u23F3 Cargando tarjeta...",errorTitle:"\u26A0\uFE0F No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener m\xE1s detalles",errorServer:"Aseg\xFArate de que el archivo se sirve a trav\xE9s de un servidor local (not file://)",placeholderEmpty:"Deje vac\xEDo para ocultar",weatherConditions:{sunny:"\u2600\uFE0F Soleado",clear:"\u2600\uFE0F Despejado",clearNight:"\uD83C\uDF19 Noche Despejada",partlyCloudy:"\u26C5 Parcialmente Nublado",cloudy:"\u2601\uFE0F Nublado",rainy:"\uD83C\uDF27\uFE0F Lluvioso",pouring:"\u26C8\uFE0F Torrencial",snowy:"\u2744\uFE0F Nevado",sleet:"\uD83C\uDF28\uFE0F Aguanieve",hail:"\uD83E\uDDCA Granizo",foggy:"\uD83C\uDF2B\uFE0F Nublado",lightning:"\u26A1 Rayos",thunderstorm:"\u26C8\uFE0F Tormenta El\xE9ctrica"},language:{title:"\uD83C\uDF0D Idioma",english:"\uD83C\uDDFA\uD83C\uDDF8 English",russian:"\uD83C\uDDF7\uD83C\uDDFA \u0420\u0443\u0441\u0441\u043A\u0438\u0439",french:"\uD83C\uDDEB\uD83C\uDDF7 Fran\xE7ais",german:"\uD83C\uDDE9\uD83C\uDDEA Deutsch",dutch:"\uD83C\uDDF3\uD83C\uDDF1 Nederlands",spanish:"\uD83C\uDDEA\uD83C\uDDF8 Espa\xF1ol"}}},n0=S1;var K0={en:a0,ru:d0,de:h0,nl:r0,fr:o0,es:n0};class s0{lang="en";fallback="en";t($){const J=$.split("."),q=J.reduce((K,Z)=>K?.[Z],K0[this.lang]);if(q!=null)return q;return J.reduce((K,Z)=>K?.[Z],K0[this.fallback])??$}setLanguage($){if(!K0[$]||this.lang===$)return;this.lang=$,window.dispatchEvent(new CustomEvent("language-changed"))}}var U=new s0;window.i18n=U;var Z0=({configLang:$,hassLang:J}={})=>{if($&&$!=="auto")return $;if(J)return J;if(typeof navigator!=="undefined"&&navigator.language){const q=navigator.language.toLowerCase();if(q.startsWith("ru"))return"ru";if(q.startsWith("de"))return"de";if(q.startsWith("nl"))return"nl";if(q.startsWith("fr"))return"fr";if(q.startsWith("es"))return"es"}return"en"};var E1=function(){const $=new Date,J=$.getHours(),q=$.getMinutes(),Q=J*60+q;if(Q>=k.SUNRISE_START&&Q<k.SUNRISE_END)return{type:"sunrise",progress:(Q-k.SUNRISE_START)/120};if(Q>=k.SUNRISE_END&&Q<k.DAY_END)return{type:"day",progress:(Q-k.SUNRISE_END)/600};if(Q>=k.DAY_END&&Q<k.SUNSET_END)return{type:"sunset",progress:(Q-k.DAY_END)/120};return{type:"night",progress:0}};function e0($,J,q){if($.type==="sunrise"){const Q=$.progress;return{x:J*(0.3+Q*0.4),y:q*(0.85-Q*0.55)}}else if($.type==="sunset"){const Q=$.progress;return{x:J*(0.5+Q*0.3),y:q*(0.3+Q*0.55)}}else if($.type==="day"){const K=$.progress*Math.PI;return{x:J*(0.5+Math.sin(K)*0.25),y:q*(0.25-Math.sin(K)*0.1)}}else return{x:J*0.75,y:q*0.3}}function i0($){if($.type==="sunrise"){const J=$.progress,q={r:26,g:26,b:46},Q={r:255,g:160,b:122},K={r:255,g:215,b:0};return{start:{r:Math.round(q.r+(Q.r-q.r)*J),g:Math.round(q.g+(Q.g-q.g)*J),b:Math.round(q.b+(Q.b-q.b)*J)},end:{r:Math.round(q.r+(K.r-q.r)*J),g:Math.round(q.g+(K.g-q.g)*J),b:Math.round(q.b+(K.b-q.b)*J)}}}else if($.type==="sunset"){const J=$.progress,q={r:255,g:107,b:107},Q={r:255,g:160,b:122},K={r:26,g:26,b:46};return{start:{r:Math.round(q.r+(K.r-q.r)*J),g:Math.round(q.g+(K.g-q.g)*J),b:Math.round(q.b+(K.b-q.b)*J)},end:{r:Math.round(Q.r+(K.r-Q.r)*J),g:Math.round(Q.g+(K.g-Q.g)*J),b:Math.round(Q.b+(K.b-Q.b)*J)}}}return null}function t0($){if(!$)return"";return`${new Date($).getHours().toString().padStart(2,"0")}:00`}function $1($,J){if(!$)return"";const q=new Date($);if(Number.isNaN(q.getTime()))return"";return q.toLocaleDateString(J||void 0,{weekday:"short",day:"numeric",month:"short"})}function V0($){if(!$)return"";const J=typeof $==="string"?new Date($):$,q=J.getHours(),Q=J.getMinutes();return`${q.toString().padStart(2,"0")}:${Q.toString().padStart(2,"0")}`}function W0($,J=null,q=null,Q=null){let K=null,Z=null;if(J&&Q&&Q.states[J]){const V=Q.states[J];K=new Date(V.state)}if(q&&Q&&Q.states[q]){const V=Q.states[q];Z=new Date(V.state)}if(!K||!Z){if($&&$.attributes){const V=$.attributes;if(!K&&(V.forecast_sunrise||V.sunrise))K=new Date(V.forecast_sunrise||V.sunrise);if(!Z&&(V.forecast_sunset||V.sunset))Z=new Date(V.forecast_sunset||V.sunset)}}return{sunrise:K,sunset:Z,hasSunData:!!(K&&Z)}}function B0($){const J=new Date;if($.hasSunData&&$.sunrise&&$.sunset){const q=J.getTime();let Q=$.sunrise.getTime(),K=$.sunset.getTime();if(Q-q>43200000)Q-=86400000;if(K-q>43200000)K-=86400000;const Z=Q-3600000,V=Q+3600000,W=K-3600000,B=K+3600000;if(q>=Z&&q<V)return{type:"sunrise",progress:(q-Z)/(V-Z)};if(q>=V&&q<W)return{type:"day",progress:(q-V)/(W-V)};if(q>=W&&q<B)return{type:"sunset",progress:(q-W)/(B-W)};return{type:"night",progress:0}}return E1()}class N{ctx;constructor($){this.ctx=$}drawCloud($,J,q,Q){const K=this.ctx.shadowBlur,Z=this.ctx.shadowColor,V=this.ctx.globalAlpha;this.ctx.shadowBlur=q*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${Q*0.4})`,this.ctx.globalAlpha=Q*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:$,y:J,r:q*0.4},{x:$+q*0.35,y:J,r:q*0.5},{x:$+q*0.65,y:J,r:q*0.48},{x:$+q*0.92,y:J,r:q*0.38},{x:$+q*0.18,y:J-q*0.28,r:q*0.38},{x:$+q*0.52,y:J-q*0.32,r:q*0.42},{x:$+q*0.78,y:J-q*0.28,r:q*0.38},{x:$+q*0.32,y:J-q*0.42,r:q*0.32},{x:$+q*0.62,y:J-q*0.48,r:q*0.36},{x:$+q*0.82,y:J-q*0.42,r:q*0.32}].forEach((B)=>{this.ctx.beginPath(),this.ctx.arc(B.x,B.y,B.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=K,this.ctx.shadowColor=Z,this.ctx.globalAlpha=V}drawClouds($,J,q,Q=0.5){const K=Math.max(2,Math.floor(J/150*Q));for(let Z=0;Z<K;Z++){const V=($*3+Z*150)%(J+200)-100,W=q*(0.2+Z%3*0.15)+Math.sin($*0.2+Z)*8,B=40+Z%3*15,x=0.6+Z%2*0.2;this.drawCloud(V,W,B,x)}}}class M0 extends N{constructor(){super(...arguments)}draw($,J,q,Q){const K=Date.now()*0.001,Z=e0(Q,J,q),V=Z.x,W=Z.y;if(Q.type==="day"||Q.type==="sunrise"||Q.type==="sunset"){if(this.drawSun(V,W,K),Q.type==="sunrise"||Q.type==="sunset")this.drawHorizonReflection(V,W,q,K)}else if(Q.type==="night")this.drawNightSky(J,q,K);this.drawClouds(K,J,q,0.3)}drawSun($,J,q){const Q=48+Math.sin(q*0.15)*1.5,K=this.ctx.createRadialGradient($,J,Q*0.3,$,J,Q*3.5);K.addColorStop(0,"rgba(255, 248, 230, 0.25)"),K.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),K.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),K.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),K.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),K.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),K.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=K,this.ctx.beginPath(),this.ctx.arc($,J,Q*3.5,0,Math.PI*2),this.ctx.fill();const Z=this.ctx.createRadialGradient($,J,Q*0.5,$,J,Q*2.2);Z.addColorStop(0,"rgba(255, 250, 220, 0.35)"),Z.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),Z.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),Z.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),Z.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=Z,this.ctx.beginPath(),this.ctx.arc($,J,Q*2.2,0,Math.PI*2),this.ctx.fill();const V=this.ctx.createRadialGradient($,J,Q*0.6,$,J,Q*1.6);V.addColorStop(0,"rgba(255, 252, 240, 0.5)"),V.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),V.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),V.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=V,this.ctx.beginPath(),this.ctx.arc($,J,Q*1.6,0,Math.PI*2),this.ctx.fill();const W=this.ctx.createRadialGradient($-Q*0.1,J-Q*0.1,0,$,J,Q);W.addColorStop(0,"#FFFEF5"),W.addColorStop(0.15,"#FFF9E6"),W.addColorStop(0.3,"#FFF4D6"),W.addColorStop(0.5,"#FFEDC0"),W.addColorStop(0.7,"#FFE4A8"),W.addColorStop(0.85,"#FFDC95"),W.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=W,this.ctx.beginPath(),this.ctx.arc($,J,Q,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection($,J,q,Q){const K=48+Math.sin(Q*0.15)*1.5,Z=q*0.85;if(J>=Z-50){const V=Math.max(0,(Z-J)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${V})`,this.ctx.beginPath(),this.ctx.ellipse($,Z,K*1.5,K*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky($,J,q){this.ctx.fillStyle="#FFFFFF";for(let Z=0;Z<20;Z++){const V=($*0.2+Z*47)%$,W=(J*0.2+Z*23)%(J*0.6),B=Math.sin(q*0.8+Z)*0.5+0.5;this.ctx.globalAlpha=B*0.8,this.ctx.beginPath(),this.ctx.arc(V,W,1.5,0,Math.PI*2),this.ctx.fill()}const Q=$*0.75,K=J*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(Q,K,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(Q-8,K-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class l extends N{constructor(){super(...arguments)}rainDrops=[];lastTime=0;draw($,J,q,Q,K=!1){const Z=Date.now()*0.001;this.drawClouds(Z,J,q,K?1:0.8),this.drawRain(J,q,K)}drawRain($,J,q){const Q=q?130:90;if(this.rainDrops.length!==Q){this.rainDrops=[];for(let W=0;W<Q;W++)this.rainDrops.push({x:Math.random()*$,y:Math.random()*J-Math.random()*200,speed:q?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:q?1.2+Math.random()*1:0.8+Math.random()*0.7,length:q?8+Math.random()*10:6+Math.random()*8,alpha:q?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}const K=Date.now()*0.001,Z=this.lastTime>0?Math.min(K-this.lastTime,0.1):0.016666666666666666;this.lastTime=K;const V=K;for(let W=0;W<this.rainDrops.length;W++){const B=this.rainDrops[W];if(B.y+=B.speed*Z,B.y>J+50)B.y=-50-Math.random()*100,B.x=Math.random()*$;const x=B.windOffset*(1+Math.sin(V*0.5+B.phase)*0.2),M=B.x+x;if(M<-10)B.x=$+10;else if(M>$+10)B.x=-10;this.drawRainDrop(M,B.y,B)}}drawRainDrop($,J,q){this.ctx.save(),this.ctx.globalAlpha=q.alpha;const Q=J-q.length*0.5,K=J+q.length*0.5,Z=q.alpha,V=q.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+Z+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+V+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo($,Q),this.ctx.quadraticCurveTo($-q.width*0.3,J,$-q.width,K-q.width*0.3),this.ctx.arc($,K,q.width,Math.PI,0,!1),this.ctx.quadraticCurveTo($+q.width*0.3,J,$,Q),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class P0 extends N{constructor(){super(...arguments)}snowflakes=[];lastTime=0;draw($,J,q,Q){const K=Date.now()*0.001;this.drawClouds(K,J,q,0.7),this.drawSnowflakes(J,q)}drawSnowflakes($,J){const q=Math.floor($*J/5000),Q=Math.max(30,Math.min(q,80));if(this.snowflakes.length!==Q){this.snowflakes=[];for(let W=0;W<Q;W++)this.snowflakes.push({x:Math.random()*$,y:Math.random()*J-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}const K=Date.now()*0.001,Z=this.lastTime>0?Math.min(K-this.lastTime,0.1):0.016666666666666666;this.lastTime=K;const V=K;this.ctx.lineCap="round";for(let W=0;W<this.snowflakes.length;W++){const B=this.snowflakes[W],x=Math.sin(V*B.swaySpeed+B.swayPhase)*2;if(B.y+=B.speedY*Z,B.x+=(B.speedX+x)*Z,B.rotation+=B.rotationSpeed*Z,B.y>J+20)B.y=-20-Math.random()*50,B.x=Math.random()*$;if(B.x<-10)B.x=$+10;else if(B.x>$+10)B.x=-10;this.drawSnowflake(B.x,B.y,B.size,B.alpha,B.rotation)}}drawSnowflake($,J,q,Q,K){this.ctx.save(),this.ctx.translate($,J),this.ctx.rotate(K),this.ctx.strokeStyle=`rgba(255, 255, 255, ${Q})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let Z=0;Z<6;Z++){const V=Math.PI/3*Z,W=Math.cos(V),B=Math.sin(V);this.ctx.moveTo(0,0),this.ctx.lineTo(B*q*2.5,W*q*2.5);const x=B*q*1.5+W*q*0.5,M=W*q*1.5-B*q*0.5,R=B*q*1.8+W*q*1.2,H=W*q*1.8-B*q*1.2;this.ctx.moveTo(x,M),this.ctx.lineTo(R,H);const L=B*q*1.5-W*q*0.5,W1=W*q*1.5+B*q*0.5,B1=B*q*1.8-W*q*1.2,M1=W*q*1.8+B*q*1.2;this.ctx.moveTo(L,W1),this.ctx.lineTo(B1,M1)}this.ctx.stroke(),this.ctx.restore()}}class b0 extends N{constructor(){super(...arguments)}draw($,J,q,Q){const K=Date.now()*0.001;this.drawClouds(K,J,q,0.7)}}class j0 extends N{constructor(){super(...arguments)}draw($,J,q,Q){const K=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let Z=0;Z<3;Z++){const V=q*(0.4+Z*0.2),W=Math.sin(K+Z)*20;this.ctx.beginPath(),this.ctx.moveTo(0,V);for(let B=0;B<=J;B+=5){const x=Math.sin((B/J+K)*Math.PI*4+Z)*15;this.ctx.lineTo(B,V+x+W)}this.ctx.lineTo(J,q),this.ctx.lineTo(0,q),this.ctx.closePath(),this.ctx.fill()}}}class x0 extends N{constructor(){super(...arguments)}hailStones=[];draw($,J,q,Q){const K=Date.now()*0.001;this.drawClouds(K,J,q,1),this.drawHailStones(J,q)}drawHailStones($,J){if(this.hailStones.length!==60){this.hailStones=[];for(let K=0;K<60;K++)this.hailStones.push({startX:Math.random()*$,startY:Math.random()*(J+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}const Q=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let K=0;K<this.hailStones.length;K++){const Z=this.hailStones[K],V=(Z.startY+Q*Z.speed)%(J+150);if(V>J+30)Z.startY=-30-Math.random()*30,Z.startX=Math.random()*$;const W=Z.windOffset*(1+Math.sin(Q*0.6+Z.phase)*0.15),B=(Z.startX+W+Q*20%$)%$;if(B<-5)Z.startX=$+5;else if(B>$+5)Z.startX=-5;this.drawHailStone(B,V,Z)}}drawHailStone($,J,q){this.ctx.save(),this.ctx.globalAlpha=q.alpha,this.ctx.beginPath(),this.ctx.ellipse($,J,q.size,q.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse($-q.size*0.3,J-q.size*0.3,q.size*0.3,q.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class U0 extends N{rainyAnimation;constructor($){super($);this.rainyAnimation=new l($)}draw($,J,q,Q,K=!0){const Z=Date.now()*0.001;if(this.drawClouds(Z,J,q,1),K)this.rainyAnimation.draw($,J,q,Q,!1);this.drawLightning(J,q,Z)}drawLightning($,J,q){const Q=Math.sin(q*2.5)*Math.sin(q*5.3)*Math.sin(q*7.1),K=Math.max(0,Q);if(K>0.4){const Z=(K-0.4)/0.6,V=Z*0.6,W=Math.min(V,Math.sin(Z*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${W})`,this.ctx.fillRect(0,0,$,J)}}}var q1=i`
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
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 200;
    line-height: 1;
    color: white;
    text-align: right;
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
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;function u($,...J){const q=z1[$];if(typeof q==="function")return q(...J);return q||""}function R0($){if(!$)return"";return O1[$.toLowerCase()]||""}var z1={wind:j`
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
  `},J1=($)=>j`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${$}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,O1={sunny:j`
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
  `};class _0 extends G{animationFrame=null;canvas=null;ctx=null;canvasWidth=0;canvasHeight=0;animations={};holdTimer=null;holdDelay=500;clockInterval=null;resizeObserver=null;_wheelHandler=null;lastTap=null;holdFired=!1;_testTimeOfDay;static get styles(){return q1}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:P.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:P.dailyForecastDays}}constructor(){super();this.currentTime="";this.config={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{if(this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver();this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this._wheelHandler&&this.shadowRoot){const $=this.shadowRoot.querySelector(".forecast-scroll");if($)$.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=null}if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updated($){if(super.updated($),$.has("hass")||$.has("config")){if(this.canvas&&this.ctx)this.resizeCanvas();this.setupForecastScroll()}if($.has("config"))this.startClock();const J=Z0({configLang:this.config?.language,hassLang:this.hass?.language});if(U.lang!==J)U.setLanguage(J)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new M0(this.ctx),rainy:new l(this.ctx),snowy:new P0(this.ctx),cloudy:new b0(this.ctx),foggy:new j0(this.ctx),hail:new x0(this.ctx),thunderstorm:new U0(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;const $=this.shadowRoot.querySelector(".canvas-container");if(!$)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe($)}setupForecastScroll(){if(!this.shadowRoot)return;const $=this.shadowRoot.querySelector(".forecast-scroll");if(!$)return;if(this._wheelHandler)$.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=(J)=>{const q=J;if(q.deltaY!==0)J.preventDefault(),$.scrollLeft+=q.deltaY},$.addEventListener("wheel",this._wheelHandler,{passive:!1})}resizeCanvas(){if(!this.canvas||!this.shadowRoot)return;const $=this.shadowRoot.querySelector(".canvas-container");if(!$)return;const J=$.getBoundingClientRect();if(J.width===0||J.height===0)return;const q=window.devicePixelRatio||2;if(this.canvas.width=J.width*q,this.canvas.height=J.height*q,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(q,q);this.canvasWidth=J.width,this.canvasHeight=J.height,this.initializeAnimations()}setupCanvas(){if(!this.shadowRoot)return;const $=this.shadowRoot.querySelector(".canvas-container");if(!$)return;const J=$.querySelector("canvas");if(J)J.remove();this.canvas=document.createElement("canvas"),$.appendChild(this.canvas),this.resizeCanvas()}getState($){if(!this.hass||!$)return null;const J=this.hass.states[$];return J?J.state:null}getAttributes($){if(!this.hass||!$)return{};const J=this.hass.states[$];return J?J.attributes:{}}getWeatherData(){const $=this.config.entity||"weather.home",J=this.getState($),q=this.getAttributes($),Q=q.condition||J||"sunny";let K=null;if(this.config.templowAttribute&&q[this.config.templowAttribute]!=null)K=q[this.config.templowAttribute];else{for(let Z of g0)if(q[Z]!=null){K=q[Z];break}if(K==null)K=(q.forecast&&q.forecast[0]?q.forecast[0].templow??null:null)||(q.forecast_hourly&&q.forecast_hourly[0]?q.forecast_hourly[0].native_templow??null:null)}return{condition:Q,temperature:q.temperature!=null?q.temperature:null,apparentTemperature:q.apparent_temperature||null,humidity:q.humidity!=null?q.humidity:null,windSpeed:q.wind_speed!=null?q.wind_speed:null,windGust:q.wind_gust_speed||q.wind_gust||null,windBearing:q.wind_bearing!=null?q.wind_bearing:null,windDirection:q.wind_direction||null,pressure:q.pressure||null,forecast:q.forecast||q.forecast_hourly||[],friendlyName:q.friendly_name||U.t("weather"),templow:K}}getTodayForecast(){if(!this.hass||!this.config)return[];const $=this.getWeatherData();if(!$.forecast||$.forecast.length===0)return[];const J=new Date,q=new Date(J.getFullYear(),J.getMonth(),J.getDate()),Q=new Date(q);Q.setDate(Q.getDate()+1);const K=$.forecast.filter((V)=>{if(!V.datetime)return!1;const W=new Date(V.datetime),B=new Date(W.getFullYear(),W.getMonth(),W.getDate());return B.getTime()===q.getTime()||B.getTime()===Q.getTime()&&W.getHours()<=J.getHours()}),Z=Math.max(1,Math.floor(Number(this.config.hourlyForecastHours??P.hourlyForecastHours)));return K.sort((V,W)=>new Date(V.datetime).getTime()-new Date(W.datetime).getTime()).slice(0,Z)}getWeekForecast(){if(!this.hass||!this.config)return[];const $=this.getWeatherData();if(!$.forecast||$.forecast.length===0)return[];const J=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??P.dailyForecastDays))),q=new Date,Q=new Date(q.getFullYear(),q.getMonth(),q.getDate()),K=new Date(Q);K.setDate(K.getDate()+J);const Z=(W)=>{const B=W.getFullYear(),x=String(W.getMonth()+1).padStart(2,"0"),M=String(W.getDate()).padStart(2,"0");return`${B}-${x}-${M}`},V=new Map;return $.forecast.forEach((W)=>{if(!W.datetime)return;const B=new Date(W.datetime);if(Number.isNaN(B.getTime()))return;if(B<Q||B>=K)return;const x=Z(B),M=Math.abs(B.getHours()+B.getMinutes()/60-12),R=V.get(x);if(!R||M<R.hourScore)V.set(x,{item:W,itemDate:B,hourScore:M})}),Array.from(V.values()).sort((W,B)=>W.itemDate.getTime()-B.itemDate.getTime()).map((W)=>W.item).slice(0,J)}startAnimation(){const $=()=>{this.draw(),this.animationFrame=requestAnimationFrame($)};$()}draw(){if(!this.ctx||!this.canvas)return;if(!this.canvasWidth||!this.canvasHeight){if(this.resizeCanvas(),!this.canvasWidth||!this.canvasHeight)return}const $=this.canvasWidth,J=this.canvasHeight;this.ctx.clearRect(0,0,$,J);const q=this.getWeatherData(),Q=this.hass?.states[this.config.entity],K=W0(Q||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),Z=this._testTimeOfDay||B0(K);switch(q.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),$,J,Z);break;case"clear-night":this.animations.sunny?.draw(Date.now(),$,J,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),$,J,Z,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),$,J,Z,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),$,J,Z);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),$,J,Z,!1),this.animations.snowy?.draw(Date.now(),$,J,Z);break;case"hail":this.animations.hail?.draw(Date.now(),$,J,Z);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),$,J,Z);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),$,J,Z,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),$,J,Z,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),$,J,Z);break}}renderTodayForecast(){const $=this.getTodayForecast();if($.length===0)return b`<div style="opacity: 0.6; font-size: 14px;">${U.t("forecast_unavailable")}</div>`;return b`
      <div class="forecast-scroll">
        ${$.map((J)=>b`
          <div class="forecast-item">
            <div class="forecast-time">${t0(J.datetime)}</div>
            <div class="forecast-icon">${R0(J.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(J.temperature||J.temp||J.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}renderDailyForecast(){const $=this.getWeekForecast();if($.length===0)return b`<div style="opacity: 0.6; font-size: 14px;">${U.t("forecast_unavailable")}</div>`;return b`
      <div class="forecast-scroll">
        ${$.map((J)=>b`
          <div class="forecast-item">
            <div class="forecast-time">${$1(J.datetime,U.lang)}</div>
            <div class="forecast-icon">${R0(J.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(J.temperature||J.temp||J.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}convertWindSpeed($){if($==null)return null;if(this.config.windSpeedUnit==="kmh")return Math.round($*3.6*10)/10;return $}getWindSpeedUnit(){return this.config.windSpeedUnit==="kmh"?U.t("wind_unit_kmh"):U.t("wind_unit_ms")}formatCurrentTime(){const $=new Date,J=String($.getHours()).padStart(2,"0"),q=String($.getMinutes()).padStart(2,"0");return`${J}:${q}`}startClock(){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;if(!this.config.showClock)return;this.currentTime=this.formatCurrentTime(),this.clockInterval=window.setInterval(()=>{this.currentTime=this.formatCurrentTime()},1000)}render(){if(!this.hass)return b`<div>No Home Assistant connection</div>`;const $=this.getWeatherData(),J=this.hass.states[this.config.entity],q=W0(J,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),Q=this._testTimeOfDay||B0(q),K=`weather-card ${Q.type}`,Z=this.config.height?`${this.config.height}px`:"200px",V=i0(Q),W=V?`background: linear-gradient(135deg, rgb(${V.start.r}, ${V.start.g}, ${V.start.b}), rgb(${V.end.r}, ${V.end.g}, ${V.end.b}));`:"",x=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:P.overlayOpacity};`;return b`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${K}" style="min-height: ${Z}; ${W}; ${x} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name!==void 0?b`
              <div class="header">
                <div class="location">${this.config.name||$.friendlyName}</div>
              </div>
            `:""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${U.t($.condition)}</div>
                <div class="temperature">${$.temperature!=null?Math.round($.temperature)+"\xB0":U.t("no_data")}</div>
                ${this.config.showMinTemp?b`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${$.templow!=null?`${Math.round($.templow)}\xB0`:U.t("no_data")}</span>
                  </div>
                `:""}
                ${this.config.showFeelsLike?b`
                  <div class="feels-like">${U.t("feels_like")} ${$.apparentTemperature!=null?`${Math.round($.apparentTemperature)}\xB0`:U.t("no_data")}</div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="top"?b`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
              <div class="info-grid">
                ${this.config.showHumidity&&$.humidity!=null?b`
                  <div class="info-item">
                    <span class="info-icon">${u("humidity")}</span>
                    <span>${$.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&q.hasSunData&&q.sunrise?b`
                  <div class="info-item">
                    <span class="info-icon">${u("sunrise")}</span>
                    <span>${V0(q.sunrise)}</span>
                  </div>
                `:""}
                ${this.config.showWind&&$.windSpeed!=null?b`
                  ${this.config.showWindDirection&&$.windBearing!=null?b`
                    <div class="info-item">
                      <span class="info-icon">${J1($.windBearing)}</span>
                      <span>${this.convertWindSpeed($.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&$.windGust?` / ${this.convertWindSpeed($.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:b`
                    <div class="info-item">
                      <span class="info-icon">${u("wind")}</span>
                      <span>${this.convertWindSpeed($.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&$.windGust?` / ${this.convertWindSpeed($.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&q.hasSunData&&q.sunset?b`
                  <div class="info-item">
                    <span class="info-icon">${u("sunset")}</span>
                    <span>${V0(q.sunset)}</span>
                  </div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="details"?b`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            ${this.config.showHourlyForecast?b`
              <div class="forecast-container">
                <div class="forecast-title">${U.t("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
            ${this.config.showDailyForecast?b`
              <div class="forecast-container">
                <div class="forecast-title">${U.t("daily_forecast_title")}</div>
                ${this.renderDailyForecast()}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}setConfig($){if(!$.entity)throw new Error("Please define a weather entity");const J=$.show_hourly_forecast??$.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:$.entity,icons_path:$.icons_path,name:$.name,height:$.height||P.height,showFeelsLike:$.show_feels_like!==!1,showWind:$.show_wind!==!1,showWindGust:$.show_wind_gust!==!1,showWindDirection:$.show_wind_direction!==!1,showHumidity:$.show_humidity!==!1,showMinTemp:$.show_min_temp!==!1,showForecast:$.show_forecast===!0,showHourlyForecast:J===!0,showDailyForecast:$.show_daily_forecast===!0,hourlyForecastHours:$.hourly_forecast_hours??P.hourlyForecastHours,dailyForecastDays:$.daily_forecast_days??P.dailyForecastDays,showSunriseSunset:$.show_sunrise_sunset!==!1,showClock:$.show_clock===!0,clockPosition:$.clock_position||P.clockPosition,overlayOpacity:$.overlay_opacity!==void 0?$.overlay_opacity:P.overlayOpacity,language:$.language||P.language,windSpeedUnit:$.wind_speed_unit||P.windSpeedUnit,sunriseEntity:$.sunrise_entity||null,sunsetEntity:$.sunset_entity||null,templowAttribute:$.templow_attribute||null,tapAction:$.tap_action||{action:"more-info"},holdAction:$.hold_action||{action:"none"},doubleTapAction:$.double_tap_action||{action:"none"}},this.config.language)U.setLanguage(this.config.language)}handleAction($){if(!$||!this.hass)return;switch($.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:$.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:$.entity||this.config.entity});break;case"call-service":if($.service){const[q,Q]=$.service.split(".");this.hass.callService(q,Q,$.service_data||{})}break;case"navigate":if($.navigation_path)window.history.pushState(null,"",$.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if($.url_path)window.open($.url_path);break;case"none":default:break}}fireEvent($,J={}){const q=new CustomEvent($,{detail:J,bubbles:!0,composed:!0});this.dispatchEvent(q)}handleTap($){if($.target.closest(".forecast-item")||$.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap($),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.config.tapAction),this.lastTap=null},300)}handlePointerDown($){this.holdTimer=window.setTimeout(()=>{this.handleHold($),this.holdFired=!0},this.holdDelay)}handlePointerUp($){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)$.preventDefault(),$.stopPropagation(),this.holdFired=!1}handleHold($){this.handleAction(this.config.holdAction)}handleDoubleTap($){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}Y([p({type:Object})],_0.prototype,"hass",void 0),Y([p({type:Object})],_0.prototype,"config",void 0),Y([a()],_0.prototype,"currentTime",void 0);class N0 extends G{constructor(){super(...arguments);this._config={}}setConfig($){this._config={name:"",height:P.height,show_feels_like:P.showFeelsLike,show_wind:P.showWind,show_wind_gust:P.showWindGust,show_wind_direction:P.showWindDirection,show_humidity:P.showHumidity,show_min_temp:P.showMinTemp,show_hourly_forecast:P.showHourlyForecast,hourly_forecast_hours:P.hourlyForecastHours,show_daily_forecast:P.showDailyForecast,daily_forecast_days:P.dailyForecastDays,show_sunrise_sunset:P.showSunriseSunset,show_clock:P.showClock,clock_position:P.clockPosition,overlay_opacity:P.overlayOpacity,language:P.language,wind_speed_unit:P.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...$}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"height",selector:{number:{min:200,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"show_clock",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:"Top",value:"top"},{label:"Details",value:"details"}]}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"language",selector:{select:{options:[{label:"Auto",value:"auto"},{label:"English",value:"en"},{label:"Russian",value:"ru"},{label:"German",value:"de"},{label:"Dutch",value:"nl"},{label:"French",value:"fr"},{label:"Spanish",value:"es"}]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:"m/s",value:"ms"},{label:"km/h",value:"kmh"}]}}}]}_computeLabel=($)=>{return{entity:"Weather Entity",name:"Card Title",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",show_sunrise_sunset:"Show Sunrise/Sunset",show_clock:"Show Clock",clock_position:"Clock Position",overlay_opacity:"Overlay Opacity",language:"Language",wind_speed_unit:"Wind Speed Unit",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity"}[$.name]??$.name};_valueChanged($){const J=$.detail?.value;if(!J)return;this._config=J,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return b``;return b`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}Y([p({attribute:!1})],N0.prototype,"hass",void 0),Y([a()],N0.prototype,"_config",void 0);var Q1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},H0=($)=>(...J)=>({_$litDirective$:$,values:J});class k0{constructor($){}get _$AU(){return this._$AM._$AU}_$AT($,J,q){this._$Ct=$,this._$AM=J,this._$Ci=q}_$AS($,J){return this.update($,J)}update($,J){return this.render(...J)}}var K1=($)=>$.strings===void 0;var T1=function($){this._$AN!==void 0?(s(this),this._$AM=$,Z1(this)):this._$AM=$},D1=function($,J=!1,q=0){const Q=this._$AH,K=this._$AN;if(K!==void 0&&K.size!==0)if(J)if(Array.isArray(Q))for(let Z=q;Z<Q.length;Z++)m(Q[Z],!1),s(Q[Z]);else Q!=null&&(m(Q,!1),s(Q));else m(this,$)},m=($,J)=>{const q=$._$AN;if(q===void 0)return!1;for(let Q of q)Q._$AO?.(J,!1),m(Q,J);return!0},s=($)=>{let J,q;do{if((J=$._$AM)===void 0)break;q=J._$AN,q.delete($),$=J}while(q?.size===0)},Z1=($)=>{for(let J;J=$._$AM;$=J){let q=J._$AN;if(q===void 0)J._$AN=q=new Set;else if(q.has($))break;q.add($),w1(J)}},w1=($)=>{$.type==Q1.CHILD&&($._$AP??=D1,$._$AQ??=T1)};class L0 extends k0{constructor(){super(...arguments),this._$AN=void 0}_$AT($,J,q){super._$AT($,J,q),Z1(this),this.isConnected=$._$AU}_$AO($,J=!0){$!==this.isConnected&&(this.isConnected=$,$?this.reconnected?.():this.disconnected?.()),J&&(m(this,$),s(this))}setValue($){if(K1(this._$Ct))this._$Ct._$AI($,this);else{const J=[...this._$Ct._$AH];J[this._$Ci]=$,this._$Ct._$AI(J,this,0)}}disconnected(){}reconnected(){}}class V1 extends L0{constructor(){super(...arguments)}_key="";_onLangChange=null;render($){return this._key=$,U.t($)}connected(){this._onLangChange=()=>{this.setValue(U.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var f1=H0(V1);try{customElements.define("dynamic-weather-card",_0),customElements.define("dynamic-weather-card-editor",N0),console.log(`%cDynamic Weather Card %c${c0}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u043E\u0433\u043E\u0434\u044B`),window.customCards=window.customCards||[];const $={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u043E\u0433\u043E\u0434\u044B",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push($)}catch($){console.error("\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 Dynamic Weather Card:",$)}export{f1 as t,Z0 as resolveLanguage,U as i18n};
