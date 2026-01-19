var t=function(k,F,K,Z){var W=arguments.length,q=W<3?F:Z===null?Z=Object.getOwnPropertyDescriptor(F,K):Z,B;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(k,F,K,Z);else for(var $=k.length-1;$>=0;$--)if(B=k[$])q=(W<3?B(q):W>3?B(F,K,q):B(F,K))||q;return W>3&&q&&Object.defineProperty(F,K,q),q};var e=globalThis,J0=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q0=Symbol(),g0=new WeakMap;class G0{constructor(k,F,K){if(this._$cssResult$=!0,K!==Q0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=k,this._strings=F}get styleSheet(){let k=this._styleSheet,F=this._strings;if(J0&&k===void 0){let K=F!==void 0&&F.length===1;if(K)k=g0.get(F);if(k===void 0){if((this._styleSheet=k=new CSSStyleSheet).replaceSync(this.cssText),K)g0.set(F,k)}}return k}toString(){return this.cssText}}var S1=(k)=>{if(k._$cssResult$===!0)return k.cssText;else if(typeof k==="number")return k;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${k}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},P1=(k)=>new G0(typeof k==="string"?k:String(k),void 0,Q0),E0=(k,...F)=>{let K=k.length===1?k[0]:F.reduce((Z,W,q)=>Z+S1(W)+k[q+1],k[0]);return new G0(K,k,Q0)},c0=(k,F)=>{if(J0)k.adoptedStyleSheets=F.map((K)=>K instanceof CSSStyleSheet?K:K.styleSheet);else for(let K of F){let Z=document.createElement("style"),W=e.litNonce;if(W!==void 0)Z.setAttribute("nonce",W);Z.textContent=K.cssText,k.appendChild(Z)}},D1=(k)=>{let F="";for(let K of k.cssRules)F+=K.cssText;return P1(F)},_0=J0?(k)=>k:(k)=>k instanceof CSSStyleSheet?D1(k):k;var{is:w1,defineProperty:O1,getOwnPropertyDescriptor:h0,getOwnPropertyNames:g1,getOwnPropertySymbols:E1,getPrototypeOf:d0}=Object,c1=!1,X=globalThis;if(c1)X.customElements??=customElements;var b=!0,x,u0=X.trustedTypes,h1=u0?u0.emptyScript:"",l0=b?X.reactiveElementPolyfillSupportDevMode:X.reactiveElementPolyfillSupport;if(b)X.litIssuedWarnings??=new Set,x=(k,F)=>{if(F+=` See https://lit.dev/msg/${k} for more information.`,!X.litIssuedWarnings.has(F)&&!X.litIssuedWarnings.has(k))console.warn(F),X.litIssuedWarnings.add(F)},queueMicrotask(()=>{if(x("dev-mode","Lit is in dev mode. Not recommended for production!"),X.ShadyDOM?.inUse&&l0===void 0)x("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var d1=b?(k)=>{if(!X.emitLitDebugLogEvents)return;X.dispatchEvent(new CustomEvent("lit-debug",{detail:k}))}:void 0,g=(k,F)=>k,h={toAttribute(k,F){switch(F){case Boolean:k=k?h1:null;break;case Object:case Array:k=k==null?k:JSON.stringify(k);break}return k},fromAttribute(k,F){let K=k;switch(F){case Boolean:K=k!==null;break;case Number:K=k===null?null:Number(k);break;case Object:case Array:try{K=JSON.parse(k)}catch(Z){K=null}break}return K}},k0=(k,F)=>!w1(k,F),v0={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:k0};Symbol.metadata??=Symbol("metadata");X.litPropertyMetadata??=new WeakMap;class Y extends HTMLElement{static addInitializer(k){this.__prepare(),(this._initializers??=[]).push(k)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(k,F=v0){if(F.state)F.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(k))F=Object.create(F),F.wrapped=!0;if(this.elementProperties.set(k,F),!F.noAccessor){let K=b?Symbol.for(`${String(k)} (@property() cache)`):Symbol(),Z=this.getPropertyDescriptor(k,K,F);if(Z!==void 0)O1(this.prototype,k,Z)}}static getPropertyDescriptor(k,F,K){let{get:Z,set:W}=h0(this.prototype,k)??{get(){return this[F]},set(q){this[F]=q}};if(b&&Z==null){if("value"in(h0(this.prototype,k)??{}))throw Error(`Field ${JSON.stringify(String(k))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);x("reactive-property-without-getter",`Field ${JSON.stringify(String(k))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:Z,set(q){let B=Z?.call(this);W?.call(this,q),this.requestUpdate(k,B,K)},configurable:!0,enumerable:!0}}static getPropertyOptions(k){return this.elementProperties.get(k)??v0}static __prepare(){if(this.hasOwnProperty(g("elementProperties",this)))return;let k=d0(this);if(k.finalize(),k._initializers!==void 0)this._initializers=[...k._initializers];this.elementProperties=new Map(k.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(g("properties",this))){let F=this.properties,K=[...g1(F),...E1(F)];for(let Z of K)this.createProperty(Z,F[Z])}let k=this[Symbol.metadata];if(k!==null){let F=litPropertyMetadata.get(k);if(F!==void 0)for(let[K,Z]of F)this.elementProperties.set(K,Z)}this.__attributeToPropertyMap=new Map;for(let[F,K]of this.elementProperties){let Z=this.__attributeNameForProperty(F,K);if(Z!==void 0)this.__attributeToPropertyMap.set(Z,F)}if(this.elementStyles=this.finalizeStyles(this.styles),b){if(this.hasOwnProperty("createProperty"))x("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))x("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(k){let F=[];if(Array.isArray(k)){let K=new Set(k.flat(1/0).reverse());for(let Z of K)F.unshift(_0(Z))}else if(k!==void 0)F.push(_0(k));return F}static __attributeNameForProperty(k,F){let K=F.attribute;return K===!1?void 0:typeof K==="string"?K:typeof k==="string"?k.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((k)=>this.enableUpdating=k),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((k)=>k(this))}addController(k){if((this.__controllers??=new Set).add(k),this.renderRoot!==void 0&&this.isConnected)k.hostConnected?.()}removeController(k){this.__controllers?.delete(k)}__saveInstanceProperties(){let k=new Map,F=this.constructor.elementProperties;for(let K of F.keys())if(this.hasOwnProperty(K))k.set(K,this[K]),delete this[K];if(k.size>0)this.__instanceProperties=k}createRenderRoot(){let k=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c0(k,this.constructor.elementStyles),k}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((k)=>k.hostConnected?.())}enableUpdating(k){}disconnectedCallback(){this.__controllers?.forEach((k)=>k.hostDisconnected?.())}attributeChangedCallback(k,F,K){this._$attributeToProperty(k,K)}__propertyToAttribute(k,F){let Z=this.constructor.elementProperties.get(k),W=this.constructor.__attributeNameForProperty(k,Z);if(W!==void 0&&Z.reflect===!0){let B=(Z.converter?.toAttribute!==void 0?Z.converter:h).toAttribute(F,Z.type);if(b&&this.constructor.enabledWarnings.includes("migration")&&B===void 0)x("undefined-attribute-value",`The attribute value for the ${k} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=k,B==null)this.removeAttribute(W);else this.setAttribute(W,B);this.__reflectingProperty=null}}_$attributeToProperty(k,F){let K=this.constructor,Z=K.__attributeToPropertyMap.get(k);if(Z!==void 0&&this.__reflectingProperty!==Z){let W=K.getPropertyOptions(Z),q=typeof W.converter==="function"?{fromAttribute:W.converter}:W.converter?.fromAttribute!==void 0?W.converter:h;this.__reflectingProperty=Z;let B=q.fromAttribute(F,W.type);this[Z]=B??this.__defaultValues?.get(Z)??B,this.__reflectingProperty=null}}requestUpdate(k,F,K,Z=!1,W){if(k!==void 0){if(b&&k instanceof Event)x("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let q=this.constructor;if(Z===!1)W=this[k];if(K??=q.getPropertyOptions(k),(K.hasChanged??k0)(W,F)||K.useDefault&&K.reflect&&W===this.__defaultValues?.get(k)&&!this.hasAttribute(q.__attributeNameForProperty(k,K)))this._$changeProperty(k,F,K);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(k,F,{useDefault:K,reflect:Z,wrapped:W},q){if(K&&!(this.__defaultValues??=new Map).has(k)){if(this.__defaultValues.set(k,q??F??this[k]),W!==!0||q!==void 0)return}if(!this._$changedProperties.has(k)){if(!this.hasUpdated&&!K)F=void 0;this._$changedProperties.set(k,F)}if(Z===!0&&this.__reflectingProperty!==k)(this.__reflectingProperties??=new Set).add(k)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(F){Promise.reject(F)}let k=this.scheduleUpdate();if(k!=null)await k;return!this.isUpdatePending}scheduleUpdate(){let k=this.performUpdate();if(b&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof k?.then==="function")x("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return k}performUpdate(){if(!this.isUpdatePending)return;if(d1?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),b){let W=[...this.constructor.elementProperties.keys()].filter((q)=>this.hasOwnProperty(q)&&(q in d0(this)));if(W.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${W.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[Z,W]of this.__instanceProperties)this[Z]=W;this.__instanceProperties=void 0}let K=this.constructor.elementProperties;if(K.size>0)for(let[Z,W]of K){let{wrapped:q}=W,B=this[Z];if(q===!0&&!this._$changedProperties.has(Z)&&B!==void 0)this._$changeProperty(Z,void 0,W,B)}}let k=!1,F=this._$changedProperties;try{if(k=this.shouldUpdate(F),k)this.willUpdate(F),this.__controllers?.forEach((K)=>K.hostUpdate?.()),this.update(F);else this.__markUpdated()}catch(K){throw k=!1,this.__markUpdated(),K}if(k)this._$didUpdate(F)}willUpdate(k){}_$didUpdate(k){if(this.__controllers?.forEach((F)=>F.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(k);if(this.updated(k),b&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))x("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(k){return!0}update(k){this.__reflectingProperties&&=this.__reflectingProperties.forEach((F)=>this.__propertyToAttribute(F,this[F])),this.__markUpdated()}updated(k){}firstUpdated(k){}}Y.elementStyles=[];Y.shadowRootOptions={mode:"open"};Y[g("elementProperties",Y)]=new Map;Y[g("finalized",Y)]=new Map;l0?.({ReactiveElement:Y});if(b){Y.enabledWarnings=["change-in-update","async-perform-update"];let k=function(F){if(!F.hasOwnProperty(g("enabledWarnings",F)))F.enabledWarnings=F.enabledWarnings.slice()};Y.enableWarning=function(F){if(k(this),!this.enabledWarnings.includes(F))this.enabledWarnings.push(F)},Y.disableWarning=function(F){k(this);let K=this.enabledWarnings.indexOf(F);if(K>=0)this.enabledWarnings.splice(K,1)}}(X.reactiveElementVersions??=[]).push("2.1.2");if(b&&X.reactiveElementVersions.length>1)queueMicrotask(()=>{x("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var j=globalThis,G=(k)=>{if(!j.emitLitDebugLogEvents)return;j.dispatchEvent(new CustomEvent("lit-debug",{detail:k}))},u1=0,v;j.litIssuedWarnings??=new Set,v=(k,F)=>{if(F+=k?` See https://lit.dev/msg/${k} for more information.`:"",!j.litIssuedWarnings.has(F)&&!j.litIssuedWarnings.has(k))console.warn(F),j.litIssuedWarnings.add(F)},queueMicrotask(()=>{v("dev-mode","Lit is in dev mode. Not recommended for production!")});var V=j.ShadyDOM?.inUse&&j.ShadyDOM?.noPatch===!0?j.ShadyDOM.wrap:(k)=>k,F0=j.trustedTypes,m0=F0?F0.createPolicy("lit-html",{createHTML:(k)=>k}):void 0,v1=(k)=>k,q0=(k,F,K)=>v1,l1=(k)=>{if(O!==q0)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");O=k},m1=()=>{O=q0},M0=(k,F,K)=>{return O(k,F,K)},a0="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,t0="?"+I,p1=`<${t0}>`,D=document,l=()=>D.createComment(""),m=(k)=>k===null||typeof k!="object"&&typeof k!="function",A0=Array.isArray,o1=(k)=>A0(k)||typeof k?.[Symbol.iterator]==="function",H0=`[ 	
\f\r]`,r1=`[^ 	
\f\r"'\`<>=]`,s1=`[^\\s"'>=/]`,d=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p0=1,N0=2,i1=3,o0=/-->/g,r0=/>/g,R=new RegExp(`>|${H0}(?:(${s1}+)(${H0}*=${H0}*(?:${r1}|("|')|))|$)`,"g"),n1=0,s0=1,a1=2,i0=3,U0=/'/g,f0=/"/g,e0=/^(?:script|style|textarea|title)$/i,t1=1,K0=2,Z0=3,L0=1,W0=2,e1=3,kk=4,Fk=5,X0=6,Kk=7,b0=(k)=>(F,...K)=>{if(F.some((Z)=>Z===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(K.some((Z)=>Z?._$litStatic$))v("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:k,strings:F,values:K}},M=b0(t1),_=b0(K0),Sk=b0(Z0),w=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),n0=new WeakMap,P=D.createTreeWalker(D,129),O=q0;function k1(k,F){if(!A0(k)||!k.hasOwnProperty("raw")){let K="invalid template strings array";throw K=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),Error(K)}return m0!==void 0?m0.createHTML(F):F}var Zk=(k,F)=>{let K=k.length-1,Z=[],W=F===K0?"<svg>":F===Z0?"<math>":"",q,B=d;for(let J=0;J<K;J++){let H=k[J],Q=-1,f,z=0,U;while(z<H.length){if(B.lastIndex=z,U=B.exec(H),U===null)break;if(z=B.lastIndex,B===d){if(U[p0]==="!--")B=o0;else if(U[p0]!==void 0)B=r0;else if(U[N0]!==void 0){if(e0.test(U[N0]))q=new RegExp(`</${U[N0]}`,"g");B=R}else if(U[i1]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(B===R)if(U[n1]===">")B=q??d,Q=-1;else if(U[s0]===void 0)Q=-2;else Q=B.lastIndex-U[a1].length,f=U[s0],B=U[i0]===void 0?R:U[i0]==='"'?f0:U0;else if(B===f0||B===U0)B=R;else if(B===o0||B===r0)B=d;else B=R,q=void 0}console.assert(Q===-1||B===R||B===U0||B===f0,"unexpected parse state B");let T=B===R&&k[J+1].startsWith("/>")?" ":"";W+=B===d?H+p1:Q>=0?(Z.push(f),H.slice(0,Q)+a0+H.slice(Q))+I+T:H+I+(Q===-2?J:T)}let $=W+(k[K]||"<?>")+(F===K0?"</svg>":F===Z0?"</math>":"");return[k1(k,$),Z]};class p{constructor({strings:k,["_$litType$"]:F},K){this.parts=[];let Z,W=0,q=0,B=k.length-1,$=this.parts,[J,H]=Zk(k,F);if(this.el=p.createElement(J,K),P.currentNode=this.el.content,F===K0||F===Z0){let Q=this.el.content.firstChild;Q.replaceWith(...Q.childNodes)}while((Z=P.nextNode())!==null&&$.length<B){if(Z.nodeType===1){{let Q=Z.localName;if(/^(?:textarea|template)$/i.test(Q)&&Z.innerHTML.includes(I)){let f=`Expressions are not supported inside \`${Q}\` elements. See https://lit.dev/msg/expression-in-${Q} for more information.`;if(Q==="template")throw Error(f);else v("",f)}}if(Z.hasAttributes()){for(let Q of Z.getAttributeNames())if(Q.endsWith(a0)){let f=H[q++],U=Z.getAttribute(Q).split(I),T=/([.?@])?(.*)/.exec(f);$.push({type:L0,index:W,name:T[2],strings:U,ctor:T[1]==="."?K1:T[1]==="?"?Z1:T[1]==="@"?W1:r}),Z.removeAttribute(Q)}else if(Q.startsWith(I))$.push({type:X0,index:W}),Z.removeAttribute(Q)}if(e0.test(Z.tagName)){let Q=Z.textContent.split(I),f=Q.length-1;if(f>0){Z.textContent=F0?F0.emptyScript:"";for(let z=0;z<f;z++)Z.append(Q[z],l()),P.nextNode(),$.push({type:W0,index:++W});Z.append(Q[f],l())}}}else if(Z.nodeType===8)if(Z.data===t0)$.push({type:W0,index:W});else{let f=-1;while((f=Z.data.indexOf(I,f+1))!==-1)$.push({type:Kk,index:W}),f+=I.length-1}W++}if(H.length!==q)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+k.join("${...}")+"`");G&&G({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:k})}static createElement(k,F){let K=D.createElement("template");return K.innerHTML=k,K}}function E(k,F,K=k,Z){if(F===w)return F;let W=Z!==void 0?K.__directives?.[Z]:K.__directive,q=m(F)?void 0:F._$litDirective$;if(W?.constructor!==q){if(W?._$notifyDirectiveConnectionChanged?.(!1),q===void 0)W=void 0;else W=new q(k),W._$initialize(k,K,Z);if(Z!==void 0)(K.__directives??=[])[Z]=W;else K.__directive=W}if(W!==void 0)F=E(k,W._$resolve(k,F.values),W,Z);return F}class F1{constructor(k,F){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=k,this._$parent=F}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(k){let{el:{content:F},parts:K}=this._$template,Z=(k?.creationScope??D).importNode(F,!0);P.currentNode=Z;let W=P.nextNode(),q=0,B=0,$=K[0];while($!==void 0){if(q===$.index){let J;if($.type===W0)J=new o(W,W.nextSibling,this,k);else if($.type===L0)J=new $.ctor(W,$.name,$.strings,this,k);else if($.type===X0)J=new q1(W,this,k);this._$parts.push(J),$=K[++B]}if(q!==$?.index)W=P.nextNode(),q++}return P.currentNode=D,Z}_update(k){let F=0;for(let K of this._$parts){if(K!==void 0)if(G&&G({kind:"set part",part:K,value:k[F],valueIndex:F,values:k,templateInstance:this}),K.strings!==void 0)K._$setValue(k,K,F),F+=K.strings.length-2;else K._$setValue(k[F]);F++}}}class o{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(k,F,K,Z){this.type=W0,this._$committedValue=N,this._$disconnectableChildren=void 0,this._$startNode=k,this._$endNode=F,this._$parent=K,this.options=Z,this.__isConnected=Z?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let k=V(this._$startNode).parentNode,F=this._$parent;if(F!==void 0&&k?.nodeType===11)k=F.parentNode;return k}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(k,F=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(k=E(this,k,F),m(k)){if(k===N||k==null||k===""){if(this._$committedValue!==N)G&&G({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=N}else if(k!==this._$committedValue&&k!==w)this._commitText(k)}else if(k._$litType$!==void 0)this._commitTemplateResult(k);else if(k.nodeType!==void 0){if(this.options?.host===k){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",k,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(k)}else if(o1(k))this._commitIterable(k);else this._commitText(k)}_insert(k){return V(V(this._$startNode).parentNode).insertBefore(k,this._$endNode)}_commitNode(k){if(this._$committedValue!==k){if(this._$clear(),O!==q0){let F=this._$startNode.parentNode?.nodeName;if(F==="STYLE"||F==="SCRIPT"){let K="Forbidden";if(F==="STYLE")K="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else K="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(K)}}G&&G({kind:"commit node",start:this._$startNode,parent:this._$parent,value:k,options:this.options}),this._$committedValue=this._insert(k)}}_commitText(k){if(this._$committedValue!==N&&m(this._$committedValue)){let F=V(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=M0(F,"data","property");k=this._textSanitizer(k),G&&G({kind:"commit text",node:F,value:k,options:this.options}),F.data=k}else{let F=D.createTextNode("");if(this._commitNode(F),this._textSanitizer===void 0)this._textSanitizer=M0(F,"data","property");k=this._textSanitizer(k),G&&G({kind:"commit text",node:F,value:k,options:this.options}),F.data=k}this._$committedValue=k}_commitTemplateResult(k){let{values:F,["_$litType$"]:K}=k,Z=typeof K==="number"?this._$getTemplate(k):(K.el===void 0&&(K.el=p.createElement(k1(K.h,K.h[0]),this.options)),K);if(this._$committedValue?._$template===Z)G&&G({kind:"template updating",template:Z,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:F}),this._$committedValue._update(F);else{let W=new F1(Z,this),q=W._clone(this.options);G&&G({kind:"template instantiated",template:Z,instance:W,parts:W._$parts,options:this.options,fragment:q,values:F}),W._update(F),G&&G({kind:"template instantiated and updated",template:Z,instance:W,parts:W._$parts,options:this.options,fragment:q,values:F}),this._commitNode(q),this._$committedValue=W}}_$getTemplate(k){let F=n0.get(k.strings);if(F===void 0)n0.set(k.strings,F=new p(k));return F}_commitIterable(k){if(!A0(this._$committedValue))this._$committedValue=[],this._$clear();let F=this._$committedValue,K=0,Z;for(let W of k){if(K===F.length)F.push(Z=new o(this._insert(l()),this._insert(l()),this,this.options));else Z=F[K];Z._$setValue(W),K++}if(K<F.length)this._$clear(Z&&V(Z._$endNode).nextSibling,K),F.length=K}_$clear(k=V(this._$startNode).nextSibling,F){this._$notifyConnectionChanged?.(!1,!0,F);while(k!==this._$endNode){let K=V(k).nextSibling;V(k).remove(),k=K}}setConnected(k){if(this._$parent===void 0)this.__isConnected=k,this._$notifyConnectionChanged?.(k);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class r{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(k,F,K,Z,W){if(this.type=L0,this._$committedValue=N,this._$disconnectableChildren=void 0,this.element=k,this.name=F,this._$parent=Z,this.options=W,K.length>2||K[0]!==""||K[1]!=="")this._$committedValue=Array(K.length-1).fill(new String),this.strings=K;else this._$committedValue=N;this._sanitizer=void 0}_$setValue(k,F=this,K,Z){let W=this.strings,q=!1;if(W===void 0){if(k=E(this,k,F,0),q=!m(k)||k!==this._$committedValue&&k!==w,q)this._$committedValue=k}else{let B=k;k=W[0];let $,J;for($=0;$<W.length-1;$++){if(J=E(this,B[K+$],F,$),J===w)J=this._$committedValue[$];if(q||=!m(J)||J!==this._$committedValue[$],J===N)k=N;else if(k!==N)k+=(J??"")+W[$+1];this._$committedValue[$]=J}}if(q&&!Z)this._commitValue(k)}_commitValue(k){if(k===N)V(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=O(this.element,this.name,"attribute");k=this._sanitizer(k??""),G&&G({kind:"commit attribute",element:this.element,name:this.name,value:k,options:this.options}),V(this.element).setAttribute(this.name,k??"")}}}class K1 extends r{constructor(){super(...arguments);this.type=e1}_commitValue(k){if(this._sanitizer===void 0)this._sanitizer=O(this.element,this.name,"property");k=this._sanitizer(k),G&&G({kind:"commit property",element:this.element,name:this.name,value:k,options:this.options}),this.element[this.name]=k===N?void 0:k}}class Z1 extends r{constructor(){super(...arguments);this.type=kk}_commitValue(k){G&&G({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(k&&k!==N),options:this.options}),V(this.element).toggleAttribute(this.name,!!k&&k!==N)}}class W1 extends r{constructor(k,F,K,Z,W){super(k,F,K,Z,W);if(this.type=Fk,this.strings!==void 0)throw Error(`A \`<${k.localName}>\` has a \`@${F}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(k,F=this){if(k=E(this,k,F,0)??N,k===w)return;let K=this._$committedValue,Z=k===N&&K!==N||k.capture!==K.capture||k.once!==K.once||k.passive!==K.passive,W=k!==N&&(K===N||Z);if(G&&G({kind:"commit event listener",element:this.element,name:this.name,value:k,options:this.options,removeListener:Z,addListener:W,oldListener:K}),Z)this.element.removeEventListener(this.name,this,K);if(W)this.element.addEventListener(this.name,this,k);this._$committedValue=k}handleEvent(k){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,k);else this._$committedValue.handleEvent(k)}}class q1{constructor(k,F,K){this.element=k,this.type=X0,this._$disconnectableChildren=void 0,this._$parent=F,this.options=K}get _$isConnected(){return this._$parent._$isConnected}_$setValue(k){G&&G({kind:"commit to element binding",element:this.element,value:k,options:this.options}),E(this,k)}}var Wk=j.litHtmlPolyfillSupportDevMode;Wk?.(p,o);(j.litHtmlVersions??=[]).push("3.3.2");if(j.litHtmlVersions.length>1)queueMicrotask(()=>{v("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var u=(k,F,K)=>{if(F==null)throw TypeError(`The container to render into may not be ${F}`);let Z=u1++,W=K?.renderBefore??F,q=W._$litPart$;if(G&&G({kind:"begin render",id:Z,value:k,container:F,options:K,part:q}),q===void 0){let B=K?.renderBefore??null;W._$litPart$=q=new o(F.insertBefore(l(),B),B,void 0,K??{})}return q._$setValue(k),G&&G({kind:"end render",id:Z,value:k,container:F,options:K,part:q}),q};u.setSanitizer=l1,u.createSanitizer=M0,u._testOnlyClearSanitizerFactoryDoNotCallOrElse=m1;var qk=(k,F)=>k,Y0=!0,y=globalThis,B1;if(Y0)y.litIssuedWarnings??=new Set,B1=(k,F)=>{if(F+=` See https://lit.dev/msg/${k} for more information.`,!y.litIssuedWarnings.has(F)&&!y.litIssuedWarnings.has(k))console.warn(F),y.litIssuedWarnings.add(F)};class S extends Y{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let k=super.createRenderRoot();return this.renderOptions.renderBefore??=k.firstChild,k}update(k){let F=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(k),this.__childPart=u(F,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return w}}S._$litElement$=!0;S[qk("finalized",S)]=!0;y.litElementHydrateSupport?.({LitElement:S});var Bk=Y0?y.litElementPolyfillSupportDevMode:y.litElementPolyfillSupport;Bk?.({LitElement:S});(y.litElementVersions??=[]).push("4.2.2");if(Y0&&y.litElementVersions.length>1)queueMicrotask(()=>{B1("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var $1=!0,J1;if($1)globalThis.litIssuedWarnings??=new Set,J1=(k,F)=>{if(F+=` See https://lit.dev/msg/${k} for more information.`,!globalThis.litIssuedWarnings.has(F)&&!globalThis.litIssuedWarnings.has(k))console.warn(F),globalThis.litIssuedWarnings.add(F)};var $k=(k,F,K)=>{let Z=F.hasOwnProperty(K);return F.constructor.createProperty(K,k),Z?Object.getOwnPropertyDescriptor(F,K):void 0},Jk={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:k0},Qk=(k=Jk,F,K)=>{let{kind:Z,metadata:W}=K;if($1&&W==null)J1("missing-class-metadata",`The class ${F} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let q=globalThis.litPropertyMetadata.get(W);if(q===void 0)globalThis.litPropertyMetadata.set(W,q=new Map);if(Z==="setter")k=Object.create(k),k.wrapped=!0;if(q.set(K.name,k),Z==="accessor"){let{name:B}=K;return{set($){let J=F.get.call(this);F.set.call(this,$),this.requestUpdate(B,J,k,!0,$)},init($){if($!==void 0)this._$changeProperty(B,void 0,k,$);return $}}}else if(Z==="setter"){let{name:B}=K;return function($){let J=this[B];F.call(this,$),this.requestUpdate(B,J,k,!0,$)}}throw Error(`Unsupported decorator location: ${Z}`)};function s(k){return(F,K)=>{return typeof K==="object"?Qk(k,F,K):$k(k,F,K)}}function Q1(k){return s({...k,state:!0,attribute:!1})}var Gk=!0,_k;if(Gk)globalThis.litIssuedWarnings??=new Set,_k=(k,F)=>{if(F+=k?` See https://lit.dev/msg/${k} for more information.`:"",!globalThis.litIssuedWarnings.has(F)&&!globalThis.litIssuedWarnings.has(k))console.warn(F),globalThis.litIssuedWarnings.add(F)};var G1="0.4.0",C={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},_1=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],c={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showSunriseSunset:!1,showClock:!1,overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var Hk={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",sunriseSunset:"Восход/Закат",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands"}}},H1=Hk;var Nk={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands"}}},N1=Nk;var Uk={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands"}}},U1=Uk;var fk={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",sunriseSunset:"Lever/Coucher du soleil",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands"}}},f1=fk;var Mk={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",sunriseSunset:"Sunrise/Sunset",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch"}}},M1=Mk;var j0={en:M1,ru:H1,de:N1,nl:U1,fr:f1};class A1{lang="en";fallback="en";t(k){let F=k.split("."),K=F.reduce((W,q)=>W?.[q],j0[this.lang]);if(K!=null)return K;return F.reduce((W,q)=>W?.[q],j0[this.fallback])??k}setLanguage(k){if(!j0[k]||this.lang===k)return;this.lang=k,window.dispatchEvent(new CustomEvent("language-changed"))}}var A=new A1;window.i18n=A;var x0=({configLang:k,hassLang:F}={})=>{if(k&&k!=="auto")return k;if(F)return F;if(typeof navigator<"u"&&navigator.language){let K=navigator.language.toLowerCase();if(K.startsWith("ru"))return"ru";if(K.startsWith("de"))return"de";if(K.startsWith("nl"))return"nl";if(K.startsWith("fr"))return"fr"}return"en"};function Ak(){let k=new Date,F=k.getHours(),K=k.getMinutes(),Z=F*60+K;if(Z>=C.SUNRISE_START&&Z<C.SUNRISE_END)return{type:"sunrise",progress:(Z-C.SUNRISE_START)/120};if(Z>=C.SUNRISE_END&&Z<C.DAY_END)return{type:"day",progress:(Z-C.SUNRISE_END)/600};if(Z>=C.DAY_END&&Z<C.SUNSET_END)return{type:"sunset",progress:(Z-C.DAY_END)/120};return{type:"night",progress:0}}function L1(k,F,K){if(k.type==="sunrise"){let Z=k.progress;return{x:F*(0.3+Z*0.4),y:K*(0.85-Z*0.55)}}else if(k.type==="sunset"){let Z=k.progress;return{x:F*(0.5+Z*0.3),y:K*(0.3+Z*0.55)}}else if(k.type==="day"){let W=k.progress*Math.PI;return{x:F*(0.5+Math.sin(W)*0.25),y:K*(0.25-Math.sin(W)*0.1)}}else return{x:F*0.75,y:K*0.3}}function X1(k){if(k.type==="sunrise"){let F=k.progress,K={r:26,g:26,b:46},Z={r:255,g:160,b:122},W={r:255,g:215,b:0};return{start:{r:Math.round(K.r+(Z.r-K.r)*F),g:Math.round(K.g+(Z.g-K.g)*F),b:Math.round(K.b+(Z.b-K.b)*F)},end:{r:Math.round(K.r+(W.r-K.r)*F),g:Math.round(K.g+(W.g-K.g)*F),b:Math.round(K.b+(W.b-K.b)*F)}}}else if(k.type==="sunset"){let F=k.progress,K={r:255,g:107,b:107},Z={r:255,g:160,b:122},W={r:26,g:26,b:46};return{start:{r:Math.round(K.r+(W.r-K.r)*F),g:Math.round(K.g+(W.g-K.g)*F),b:Math.round(K.b+(W.b-K.b)*F)},end:{r:Math.round(Z.r+(W.r-Z.r)*F),g:Math.round(Z.g+(W.g-Z.g)*F),b:Math.round(Z.b+(W.b-Z.b)*F)}}}return null}function b1(k){if(!k)return"";return`${new Date(k).getHours().toString().padStart(2,"0")}:00`}function V0(k){if(!k)return"";let F=typeof k==="string"?new Date(k):k,K=F.getHours(),Z=F.getMinutes();return`${K.toString().padStart(2,"0")}:${Z.toString().padStart(2,"0")}`}function z0(k,F=null,K=null,Z=null){let W=null,q=null;if(F&&Z&&Z.states[F]){let B=Z.states[F];W=new Date(B.state)}if(K&&Z&&Z.states[K]){let B=Z.states[K];q=new Date(B.state)}if(!W||!q){if(k&&k.attributes){let B=k.attributes;if(!W&&(B.forecast_sunrise||B.sunrise))W=new Date(B.forecast_sunrise||B.sunrise);if(!q&&(B.forecast_sunset||B.sunset))q=new Date(B.forecast_sunset||B.sunset)}}return{sunrise:W,sunset:q,hasSunData:!!(W&&q)}}function C0(k){let F=new Date;if(k.hasSunData&&k.sunrise&&k.sunset){let K=F.getTime(),Z=k.sunrise.getTime(),W=k.sunset.getTime();if(Z-K>43200000)Z-=86400000;if(W-K>43200000)W-=86400000;let q=Z-3600000,B=Z+3600000,$=W-3600000,J=W+3600000;if(K>=q&&K<B)return{type:"sunrise",progress:(K-q)/(B-q)};if(K>=B&&K<$)return{type:"day",progress:(K-B)/($-B)};if(K>=$&&K<J)return{type:"sunset",progress:(K-$)/(J-$)};return{type:"night",progress:0}}return Ak()}class L{ctx;constructor(k){this.ctx=k}drawCloud(k,F,K,Z){let W=this.ctx.shadowBlur,q=this.ctx.shadowColor,B=this.ctx.globalAlpha;this.ctx.shadowBlur=K*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${Z*0.4})`,this.ctx.globalAlpha=Z*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:k,y:F,r:K*0.4},{x:k+K*0.35,y:F,r:K*0.5},{x:k+K*0.65,y:F,r:K*0.48},{x:k+K*0.92,y:F,r:K*0.38},{x:k+K*0.18,y:F-K*0.28,r:K*0.38},{x:k+K*0.52,y:F-K*0.32,r:K*0.42},{x:k+K*0.78,y:F-K*0.28,r:K*0.38},{x:k+K*0.32,y:F-K*0.42,r:K*0.32},{x:k+K*0.62,y:F-K*0.48,r:K*0.36},{x:k+K*0.82,y:F-K*0.42,r:K*0.32}].forEach((J)=>{this.ctx.beginPath(),this.ctx.arc(J.x,J.y,J.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=W,this.ctx.shadowColor=q,this.ctx.globalAlpha=B}drawClouds(k,F,K,Z=0.5){let W=Math.max(2,Math.floor(F/150*Z));for(let q=0;q<W;q++){let B=(k*3+q*150)%(F+200)-100,$=K*(0.2+q%3*0.15)+Math.sin(k*0.2+q)*8,J=40+q%3*15,H=0.6+q%2*0.2;this.drawCloud(B,$,J,H)}}}class T0 extends L{draw(k,F,K,Z){let W=Date.now()*0.001,q=L1(Z,F,K),B=q.x,$=q.y;if(Z.type==="day"||Z.type==="sunrise"||Z.type==="sunset"){if(this.drawSun(B,$,W),Z.type==="sunrise"||Z.type==="sunset")this.drawHorizonReflection(B,$,K,W)}else if(Z.type==="night")this.drawNightSky(F,K,W);this.drawClouds(W,F,K,0.3)}drawSun(k,F,K){let Z=48+Math.sin(K*0.15)*1.5,W=this.ctx.createRadialGradient(k,F,Z*0.3,k,F,Z*3.5);W.addColorStop(0,"rgba(255, 248, 230, 0.25)"),W.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),W.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),W.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),W.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),W.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),W.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=W,this.ctx.beginPath(),this.ctx.arc(k,F,Z*3.5,0,Math.PI*2),this.ctx.fill();let q=this.ctx.createRadialGradient(k,F,Z*0.5,k,F,Z*2.2);q.addColorStop(0,"rgba(255, 250, 220, 0.35)"),q.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),q.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),q.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),q.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=q,this.ctx.beginPath(),this.ctx.arc(k,F,Z*2.2,0,Math.PI*2),this.ctx.fill();let B=this.ctx.createRadialGradient(k,F,Z*0.6,k,F,Z*1.6);B.addColorStop(0,"rgba(255, 252, 240, 0.5)"),B.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),B.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),B.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=B,this.ctx.beginPath(),this.ctx.arc(k,F,Z*1.6,0,Math.PI*2),this.ctx.fill();let $=this.ctx.createRadialGradient(k-Z*0.1,F-Z*0.1,0,k,F,Z);$.addColorStop(0,"#FFFEF5"),$.addColorStop(0.15,"#FFF9E6"),$.addColorStop(0.3,"#FFF4D6"),$.addColorStop(0.5,"#FFEDC0"),$.addColorStop(0.7,"#FFE4A8"),$.addColorStop(0.85,"#FFDC95"),$.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=$,this.ctx.beginPath(),this.ctx.arc(k,F,Z,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(k,F,K,Z){let W=48+Math.sin(Z*0.15)*1.5,q=K*0.85;if(F>=q-50){let B=Math.max(0,(q-F)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${B})`,this.ctx.beginPath(),this.ctx.ellipse(k,q,W*1.5,W*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(k,F,K){this.ctx.fillStyle="#FFFFFF";for(let q=0;q<20;q++){let B=(k*0.2+q*47)%k,$=(F*0.2+q*23)%(F*0.6),J=Math.sin(K*0.8+q)*0.5+0.5;this.ctx.globalAlpha=J*0.8,this.ctx.beginPath(),this.ctx.arc(B,$,1.5,0,Math.PI*2),this.ctx.fill()}let Z=k*0.75,W=F*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(Z,W,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(Z-8,W-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class i extends L{rainDrops=[];lastTime=0;draw(k,F,K,Z,W=!1){let q=Date.now()*0.001;this.drawClouds(q,F,K,W?1:0.8),this.drawRain(F,K,W)}drawRain(k,F,K){let Z=K?130:90;if(this.rainDrops.length!==Z){this.rainDrops=[];for(let $=0;$<Z;$++)this.rainDrops.push({x:Math.random()*k,y:Math.random()*F-Math.random()*200,speed:K?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:K?1.2+Math.random()*1:0.8+Math.random()*0.7,length:K?8+Math.random()*10:6+Math.random()*8,alpha:K?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let W=Date.now()*0.001,q=this.lastTime>0?Math.min(W-this.lastTime,0.1):0.016666666666666666;this.lastTime=W;let B=W;for(let $=0;$<this.rainDrops.length;$++){let J=this.rainDrops[$];if(J.y+=J.speed*q,J.y>F+50)J.y=-50-Math.random()*100,J.x=Math.random()*k;let H=J.windOffset*(1+Math.sin(B*0.5+J.phase)*0.2),Q=J.x+H;if(Q<-10)J.x=k+10;else if(Q>k+10)J.x=-10;this.drawRainDrop(Q,J.y,J)}}drawRainDrop(k,F,K){this.ctx.save(),this.ctx.globalAlpha=K.alpha;let Z=F-K.length*0.5,W=F+K.length*0.5,q=K.alpha,B=K.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+q+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+B+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(k,Z),this.ctx.quadraticCurveTo(k-K.width*0.3,F,k-K.width,W-K.width*0.3),this.ctx.arc(k,W,K.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(k+K.width*0.3,F,k,Z),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class I0 extends L{snowflakes=[];lastTime=0;draw(k,F,K,Z){let W=Date.now()*0.001;this.drawClouds(W,F,K,0.7),this.drawSnowflakes(F,K)}drawSnowflakes(k,F){let K=Math.floor(k*F/5000),Z=Math.max(30,Math.min(K,80));if(this.snowflakes.length!==Z){this.snowflakes=[];for(let $=0;$<Z;$++)this.snowflakes.push({x:Math.random()*k,y:Math.random()*F-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let W=Date.now()*0.001,q=this.lastTime>0?Math.min(W-this.lastTime,0.1):0.016666666666666666;this.lastTime=W;let B=W;this.ctx.lineCap="round";for(let $=0;$<this.snowflakes.length;$++){let J=this.snowflakes[$],H=Math.sin(B*J.swaySpeed+J.swayPhase)*2;if(J.y+=J.speedY*q,J.x+=(J.speedX+H)*q,J.rotation+=J.rotationSpeed*q,J.y>F+20)J.y=-20-Math.random()*50,J.x=Math.random()*k;if(J.x<-10)J.x=k+10;else if(J.x>k+10)J.x=-10;this.drawSnowflake(J.x,J.y,J.size,J.alpha,J.rotation)}}drawSnowflake(k,F,K,Z,W){this.ctx.save(),this.ctx.translate(k,F),this.ctx.rotate(W),this.ctx.strokeStyle=`rgba(255, 255, 255, ${Z})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let q=0;q<6;q++){let B=Math.PI/3*q,$=Math.cos(B),J=Math.sin(B);this.ctx.moveTo(0,0),this.ctx.lineTo(J*K*2.5,$*K*2.5);let H=J*K*1.5+$*K*0.5,Q=$*K*1.5-J*K*0.5,f=J*K*1.8+$*K*1.2,z=$*K*1.8-J*K*1.2;this.ctx.moveTo(H,Q),this.ctx.lineTo(f,z);let U=J*K*1.5-$*K*0.5,T=$*K*1.5+J*K*0.5,y1=J*K*1.8-$*K*1.2,R1=$*K*1.8+J*K*1.2;this.ctx.moveTo(U,T),this.ctx.lineTo(y1,R1)}this.ctx.stroke(),this.ctx.restore()}}class y0 extends L{draw(k,F,K,Z){let W=Date.now()*0.001;this.drawClouds(W,F,K,0.7)}}class R0 extends L{draw(k,F,K,Z){let W=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let q=0;q<3;q++){let B=K*(0.4+q*0.2),$=Math.sin(W+q)*20;this.ctx.beginPath(),this.ctx.moveTo(0,B);for(let J=0;J<=F;J+=5){let H=Math.sin((J/F+W)*Math.PI*4+q)*15;this.ctx.lineTo(J,B+H+$)}this.ctx.lineTo(F,K),this.ctx.lineTo(0,K),this.ctx.closePath(),this.ctx.fill()}}}class S0 extends L{hailStones=[];draw(k,F,K,Z){let W=Date.now()*0.001;this.drawClouds(W,F,K,1),this.drawHailStones(F,K)}drawHailStones(k,F){if(this.hailStones.length!==60){this.hailStones=[];for(let W=0;W<60;W++)this.hailStones.push({startX:Math.random()*k,startY:Math.random()*(F+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let Z=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let W=0;W<this.hailStones.length;W++){let q=this.hailStones[W],B=(q.startY+Z*q.speed)%(F+150);if(B>F+30)q.startY=-30-Math.random()*30,q.startX=Math.random()*k;let $=q.windOffset*(1+Math.sin(Z*0.6+q.phase)*0.15),J=(q.startX+$+Z*20%k)%k;if(J<-5)q.startX=k+5;else if(J>k+5)q.startX=-5;this.drawHailStone(J,B,q)}}drawHailStone(k,F,K){this.ctx.save(),this.ctx.globalAlpha=K.alpha,this.ctx.beginPath(),this.ctx.ellipse(k,F,K.size,K.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(k-K.size*0.3,F-K.size*0.3,K.size*0.3,K.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class P0 extends L{rainyAnimation;constructor(k){super(k);this.rainyAnimation=new i(k)}draw(k,F,K,Z,W=!0){let q=Date.now()*0.001;if(this.drawClouds(q,F,K,1),W)this.rainyAnimation.draw(k,F,K,Z,!1);this.drawLightning(F,K,q)}drawLightning(k,F,K){let Z=Math.sin(K*2.5)*Math.sin(K*5.3)*Math.sin(K*7.1),W=Math.max(0,Z);if(W>0.4){let q=(W-0.4)/0.6,B=q*0.6,$=Math.min(B,Math.sin(q*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${$})`,this.ctx.fillRect(0,0,k,F)}}}var Y1=E0`
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
`;var Lk={wind:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},j1=(k)=>_`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${k}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,Xk={sunny:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:_`
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
  `,overcast:_`
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
  `,cloudy:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:_`
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
  `,rain:_`
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
  `,pouring:_`
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
  `,snowy:_`
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
  `,snow:_`
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
  `,foggy:_`
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
  `,fog:_`
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
  `,hail:_`
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
  `,"snowy-rainy":_`
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
  `,lightning:_`
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
  `,"lightning-rainy":_`
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
  `,windy:_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":_`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function n(k,...F){let K=Lk[k];if(typeof K==="function")return K(...F);return K||""}function x1(k){if(!k)return"";return Xk[k.toLowerCase()]||""}class D0 extends S{animationFrame=null;canvas=null;ctx=null;canvasWidth=0;canvasHeight=0;animations={};holdTimer=null;holdDelay=500;clockInterval=null;resizeObserver=null;_wheelHandler=null;lastTap=null;holdFired=!1;_testTimeOfDay;static get styles(){return Y1}constructor(){super();this.currentTime="";this.config={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{if(this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver();this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this._wheelHandler&&this.shadowRoot){let k=this.shadowRoot.querySelector(".forecast-scroll");if(k)k.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=null}if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updated(k){if(super.updated(k),k.has("hass")||k.has("config")){if(this.canvas&&this.ctx)this.resizeCanvas();this.setupForecastScroll()}let F=x0({configLang:this.config?.language,hassLang:this.hass?.language});if(A.lang!==F)A.setLanguage(F)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new T0(this.ctx),rainy:new i(this.ctx),snowy:new I0(this.ctx),cloudy:new y0(this.ctx),foggy:new R0(this.ctx),hail:new S0(this.ctx),thunderstorm:new P0(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(k)}setupForecastScroll(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".forecast-scroll");if(!k)return;if(this._wheelHandler)k.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=(F)=>{let K=F;if(K.deltaY!==0)F.preventDefault(),k.scrollLeft+=K.deltaY},k.addEventListener("wheel",this._wheelHandler,{passive:!1})}resizeCanvas(){if(!this.canvas||!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;let F=k.getBoundingClientRect();if(F.width===0||F.height===0)return;let K=window.devicePixelRatio||2;if(this.canvas.width=F.width*K,this.canvas.height=F.height*K,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(K,K);this.canvasWidth=F.width,this.canvasHeight=F.height,this.initializeAnimations()}setupCanvas(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;let F=k.querySelector("canvas");if(F)F.remove();this.canvas=document.createElement("canvas"),k.appendChild(this.canvas),this.resizeCanvas()}getState(k){if(!this.hass||!k)return null;let F=this.hass.states[k];return F?F.state:null}getAttributes(k){if(!this.hass||!k)return{};let F=this.hass.states[k];return F?F.attributes:{}}getWeatherData(){let k=this.config.entity||"weather.home",F=this.getState(k),K=this.getAttributes(k),Z=K.condition||F||"sunny",W=null;if(this.config.templowAttribute&&K[this.config.templowAttribute]!=null)W=K[this.config.templowAttribute];else{for(let q of _1)if(K[q]!=null){W=K[q];break}if(W==null)W=(K.forecast&&K.forecast[0]?K.forecast[0].templow??null:null)||(K.forecast_hourly&&K.forecast_hourly[0]?K.forecast_hourly[0].native_templow??null:null)}return{condition:Z,temperature:K.temperature!=null?K.temperature:null,apparentTemperature:K.apparent_temperature||null,humidity:K.humidity!=null?K.humidity:null,windSpeed:K.wind_speed!=null?K.wind_speed:null,windGust:K.wind_gust_speed||K.wind_gust||null,windBearing:K.wind_bearing!=null?K.wind_bearing:null,windDirection:K.wind_direction||null,pressure:K.pressure||null,forecast:K.forecast||K.forecast_hourly||[],friendlyName:K.friendly_name||A.t("weather"),templow:W}}getTodayForecast(){if(!this.hass||!this.config)return[];let k=this.getWeatherData();if(!k.forecast||k.forecast.length===0)return[];let F=new Date,K=new Date(F.getFullYear(),F.getMonth(),F.getDate()),Z=new Date(K);return Z.setDate(Z.getDate()+1),k.forecast.filter((q)=>{if(!q.datetime)return!1;let B=new Date(q.datetime),$=new Date(B.getFullYear(),B.getMonth(),B.getDate());return $.getTime()===K.getTime()||$.getTime()===Z.getTime()&&B.getHours()<=F.getHours()}).sort((q,B)=>new Date(q.datetime).getTime()-new Date(B.datetime).getTime()).slice(0,8)}startAnimation(){let k=()=>{this.draw(),this.animationFrame=requestAnimationFrame(k)};k()}draw(){if(!this.ctx||!this.canvas)return;if(!this.canvasWidth||!this.canvasHeight){if(this.resizeCanvas(),!this.canvasWidth||!this.canvasHeight)return}let k=this.canvasWidth,F=this.canvasHeight;this.ctx.clearRect(0,0,k,F);let K=this.getWeatherData(),Z=this.hass?.states[this.config.entity],W=z0(Z||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),q=this._testTimeOfDay||C0(W);switch(K.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),k,F,q);break;case"clear-night":this.animations.sunny?.draw(Date.now(),k,F,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),k,F,q,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),k,F,q,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),k,F,q);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),k,F,q,!1),this.animations.snowy?.draw(Date.now(),k,F,q);break;case"hail":this.animations.hail?.draw(Date.now(),k,F,q);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),k,F,q);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),k,F,q,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),k,F,q,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),k,F,q);break}}renderTodayForecast(){let k=this.getTodayForecast();if(k.length===0)return M`<div style="opacity: 0.6; font-size: 14px;">${A.t("forecast_unavailable")}</div>`;return M`
      <div class="forecast-scroll">
        ${k.map((F)=>M`
          <div class="forecast-item">
            <div class="forecast-time">${b1(F.datetime)}</div>
            <div class="forecast-icon">${x1(F.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(F.temperature||F.temp||F.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}convertWindSpeed(k){if(k==null)return null;if(this.config.windSpeedUnit==="kmh")return Math.round(k*3.6*10)/10;return k}getWindSpeedUnit(){return this.config.windSpeedUnit==="kmh"?A.t("wind_unit_kmh"):A.t("wind_unit_ms")}formatCurrentTime(){let k=new Date,F=String(k.getHours()).padStart(2,"0"),K=String(k.getMinutes()).padStart(2,"0");return`${F}:${K}`}startClock(){if(!this.config.showClock)return;this.currentTime=this.formatCurrentTime(),this.clockInterval=window.setInterval(()=>{this.currentTime=this.formatCurrentTime()},1000)}render(){if(!this.hass)return M`<div>No Home Assistant connection</div>`;let k=this.getWeatherData(),F=this.hass.states[this.config.entity],K=z0(F,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),Z=this._testTimeOfDay||C0(K),W=`weather-card ${Z.type}`,q=this.config.height?`${this.config.height}px`:"200px",B=X1(Z),$=B?`background: linear-gradient(135deg, rgb(${B.start.r}, ${B.start.g}, ${B.start.b}), rgb(${B.end.r}, ${B.end.g}, ${B.end.b}));`:"",H=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:c.overlayOpacity};`;return M`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${W}" style="min-height: ${q}; ${$}; ${H} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name!==void 0?M`
              <div class="header">
                <div class="location">${this.config.name||k.friendlyName}</div>
              </div>
            `:""}
            <div>
<div class="condition">${A.t(k.condition)}</div>
              <div class="temperature">${k.temperature!=null?Math.round(k.temperature)+"°":A.t("no_data")}</div>
              ${this.config.showMinTemp&&k.templow?M`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(k.templow)}°</span>
                </div>
              `:""}
              ${this.config.showFeelsLike&&k.apparentTemperature?M`
<div class="feels-like">${A.t("feels_like")} ${Math.round(k.apparentTemperature)}°</div>
              `:""}
            </div>
            <div class="details">
              <div class="info-grid">
                ${this.config.showHumidity&&k.humidity!=null?M`
                  <div class="info-item">
                    <span class="info-icon">${n("humidity")}</span>
                    <span>${k.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&K.hasSunData&&K.sunrise?M`
                  <div class="info-item">
                    <span class="info-icon">${n("sunrise")}</span>
                    <span>${V0(K.sunrise)}</span>
                  </div>
                `:""}
                ${this.config.showWind&&k.windSpeed!=null?M`
                  ${this.config.showWindDirection&&k.windBearing!=null?M`
                    <div class="info-item">
                      <span class="info-icon">${j1(k.windBearing)}</span>
                      <span>${this.convertWindSpeed(k.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&k.windGust?` / ${this.convertWindSpeed(k.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:M`
                    <div class="info-item">
                      <span class="info-icon">${n("wind")}</span>
                      <span>${this.convertWindSpeed(k.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&k.windGust?` / ${this.convertWindSpeed(k.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&K.hasSunData&&K.sunset?M`
                  <div class="info-item">
                    <span class="info-icon">${n("sunset")}</span>
                    <span>${V0(K.sunset)}</span>
                  </div>
                `:""}
              </div>
            </div>
            ${this.config.showForecast?M`
              <div class="forecast-container">
<div class="forecast-title">${A.t("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
          </div>
          ${this.config.showClock?M`
            <div class="clock">${this.currentTime}</div>
          `:""}
        </div>
      </ha-card>
    `}setConfig(k){if(!k.entity)throw Error("Please define a weather entity");if(this.config={type:"custom:animated-weather-card",entity:k.entity,icons_path:k.icons_path,name:k.name,height:k.height||c.height,showFeelsLike:k.show_feels_like!==!1,showWind:k.show_wind!==!1,showWindGust:k.show_wind_gust!==!1,showWindDirection:k.show_wind_direction!==!1,showHumidity:k.show_humidity!==!1,showMinTemp:k.show_min_temp!==!1,showForecast:k.show_forecast===!0,showSunriseSunset:k.show_sunrise_sunset!==!1,showClock:k.show_clock===!0,overlayOpacity:k.overlay_opacity!==void 0?k.overlay_opacity:c.overlayOpacity,language:k.language||c.language,windSpeedUnit:k.wind_speed_unit||c.windSpeedUnit,sunriseEntity:k.sunrise_entity||null,sunsetEntity:k.sunset_entity||null,templowAttribute:k.templow_attribute||null,tapAction:k.tap_action||{action:"more-info"},holdAction:k.hold_action||{action:"none"},doubleTapAction:k.double_tap_action||{action:"none"}},this.config.language)A.setLanguage(this.config.language)}handleAction(k){if(!k||!this.hass)return;switch(k.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:k.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:k.entity||this.config.entity});break;case"call-service":if(k.service){let[K,Z]=k.service.split(".");this.hass.callService(K,Z,k.service_data||{})}break;case"navigate":if(k.navigation_path)window.history.pushState(null,"",k.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(k.url_path)window.open(k.url_path);break;case"none":default:break}}fireEvent(k,F={}){let K=new CustomEvent(k,{detail:F,bubbles:!0,composed:!0});this.dispatchEvent(K)}handleTap(k){if(k.target.closest(".forecast-item")||k.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(k),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.config.tapAction),this.lastTap=null},300)}handlePointerDown(k){this.holdTimer=window.setTimeout(()=>{this.handleHold(k),this.holdFired=!0},this.holdDelay)}handlePointerUp(k){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)k.preventDefault(),k.stopPropagation(),this.holdFired=!1}handleHold(k){this.handleAction(this.config.holdAction)}handleDoubleTap(k){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}t([s({type:Object})],D0.prototype,"hass",void 0),t([s({type:Object})],D0.prototype,"config",void 0),t([Q1()],D0.prototype,"currentTime",void 0);var V1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},z1=(k)=>(...F)=>({["_$litDirective$"]:k,values:F});class w0{constructor(k){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(k,F,K){this.__part=k,this._$parent=F,this.__attributeIndex=K}_$resolve(k,F){return this.update(k,F)}update(k,F){return this.render(...F)}}var bk=!0,x2=bk&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(k)=>k;var C1=(k)=>k.strings===void 0;var Yk=!0,a=(k,F)=>{let K=k._$disconnectableChildren;if(K===void 0)return!1;for(let Z of K)Z._$notifyDirectiveConnectionChanged?.(F,!1),a(Z,F);return!0},$0=(k)=>{let F,K;do{if((F=k._$parent)===void 0)break;K=F._$disconnectableChildren,K.delete(k),k=F}while(K?.size===0)},T1=(k)=>{for(let F;F=k._$parent;k=F){let K=F._$disconnectableChildren;if(K===void 0)F._$disconnectableChildren=K=new Set;else if(K.has(k))break;K.add(k),Vk(F)}};function jk(k){if(this._$disconnectableChildren!==void 0)$0(this),this._$parent=k,T1(this);else this._$parent=k}function xk(k,F=!1,K=0){let Z=this._$committedValue,W=this._$disconnectableChildren;if(W===void 0||W.size===0)return;if(F){if(Array.isArray(Z))for(let q=K;q<Z.length;q++)a(Z[q],!1),$0(Z[q]);else if(Z!=null)a(Z,!1),$0(Z)}else a(this,k)}var Vk=(k)=>{if(k.type==V1.CHILD)k._$notifyConnectionChanged??=xk,k._$reparentDisconnectables??=jk};class O0 extends w0{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(k,F,K){super._$initialize(k,F,K),T1(this),this.isConnected=k._$isConnected}["_$notifyDirectiveConnectionChanged"](k,F=!0){if(k!==this.isConnected)if(this.isConnected=k,k)this.reconnected?.();else this.disconnected?.();if(F)a(this,k),$0(this)}setValue(k){if(C1(this.__part))this.__part._$setValue(k,this);else{if(Yk&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let F=[...this.__part._$committedValue];F[this.__attributeIndex]=k,this.__part._$setValue(F,this,0)}}disconnected(){}reconnected(){}}class I1 extends O0{_key="";_onLangChange=null;render(k){return this._key=k,A.t(k)}connected(){this._onLangChange=()=>{this.setValue(A.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var zk=z1(I1);try{customElements.define("dynamic-weather-card",D0),console.log(`%cDynamic Weather Card %c${G1}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let k={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(k)}catch(k){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",k)}export{zk as t,x0 as resolveLanguage,A as i18n};
