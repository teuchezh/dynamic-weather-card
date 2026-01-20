var O=function(k,F,K,Z){var _=arguments.length,N=_<3?F:Z===null?Z=Object.getOwnPropertyDescriptor(F,K):Z,W;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")N=Reflect.decorate(k,F,K,Z);else for(var q=k.length-1;q>=0;q--)if(W=k[q])N=(_<3?W(N):_>3?W(F,K,N):W(F,K))||N;return _>3&&N&&Object.defineProperty(F,K,N),N};var t=globalThis,B0=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J0=Symbol(),l0=new WeakMap;class Q0{constructor(k,F,K){if(this._$cssResult$=!0,K!==J0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=k,this._strings=F}get styleSheet(){let k=this._styleSheet,F=this._strings;if(B0&&k===void 0){let K=F!==void 0&&F.length===1;if(K)k=l0.get(F);if(k===void 0){if((this._styleSheet=k=new CSSStyleSheet).replaceSync(this.cssText),K)l0.set(F,k)}}return k}toString(){return this.cssText}}var P1=(k)=>{if(k._$cssResult$===!0)return k.cssText;else if(typeof k==="number")return k;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${k}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},D1=(k)=>new Q0(typeof k==="string"?k:String(k),void 0,J0),d0=(k,...F)=>{let K=k.length===1?k[0]:F.reduce((Z,_,N)=>Z+P1(_)+k[N+1],k[0]);return new Q0(K,k,J0)},E0=(k,F)=>{if(B0)k.adoptedStyleSheets=F.map((K)=>K instanceof CSSStyleSheet?K:K.styleSheet);else for(let K of F){let Z=document.createElement("style"),_=t.litNonce;if(_!==void 0)Z.setAttribute("nonce",_);Z.textContent=K.cssText,k.appendChild(Z)}},c1=(k)=>{let F="";for(let K of k.cssRules)F+=K.cssText;return D1(F)},f0=B0?(k)=>k:(k)=>k instanceof CSSStyleSheet?c1(k):k;var{is:O1,defineProperty:l1,getOwnPropertyDescriptor:u0,getOwnPropertyNames:d1,getOwnPropertySymbols:E1,getPrototypeOf:h0}=Object,u1=!1,U=globalThis;if(u1)U.customElements??=customElements;var j=!0,Y,o0=U.trustedTypes,h1=o0?o0.emptyScript:"",p0=j?U.reactiveElementPolyfillSupportDevMode:U.reactiveElementPolyfillSupport;if(j)U.litIssuedWarnings??=new Set,Y=(k,F)=>{if(F+=` See https://lit.dev/msg/${k} for more information.`,!U.litIssuedWarnings.has(F)&&!U.litIssuedWarnings.has(k))console.warn(F),U.litIssuedWarnings.add(F)},queueMicrotask(()=>{if(Y("dev-mode","Lit is in dev mode. Not recommended for production!"),U.ShadyDOM?.inUse&&p0===void 0)Y("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var o1=j?(k)=>{if(!U.emitLitDebugLogEvents)return;U.dispatchEvent(new CustomEvent("lit-debug",{detail:k}))}:void 0,l=(k,F)=>k,E={toAttribute(k,F){switch(F){case Boolean:k=k?h1:null;break;case Object:case Array:k=k==null?k:JSON.stringify(k);break}return k},fromAttribute(k,F){let K=k;switch(F){case Boolean:K=k!==null;break;case Number:K=k===null?null:Number(k);break;case Object:case Array:try{K=JSON.parse(k)}catch(Z){K=null}break}return K}},k0=(k,F)=>!O1(k,F),v0={attribute:!0,type:String,converter:E,reflect:!1,useDefault:!1,hasChanged:k0};Symbol.metadata??=Symbol("metadata");U.litPropertyMetadata??=new WeakMap;class g extends HTMLElement{static addInitializer(k){this.__prepare(),(this._initializers??=[]).push(k)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(k,F=v0){if(F.state)F.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(k))F=Object.create(F),F.wrapped=!0;if(this.elementProperties.set(k,F),!F.noAccessor){let K=j?Symbol.for(`${String(k)} (@property() cache)`):Symbol(),Z=this.getPropertyDescriptor(k,K,F);if(Z!==void 0)l1(this.prototype,k,Z)}}static getPropertyDescriptor(k,F,K){let{get:Z,set:_}=u0(this.prototype,k)??{get(){return this[F]},set(N){this[F]=N}};if(j&&Z==null){if("value"in(u0(this.prototype,k)??{}))throw Error(`Field ${JSON.stringify(String(k))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);Y("reactive-property-without-getter",`Field ${JSON.stringify(String(k))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:Z,set(N){let W=Z?.call(this);_?.call(this,N),this.requestUpdate(k,W,K)},configurable:!0,enumerable:!0}}static getPropertyOptions(k){return this.elementProperties.get(k)??v0}static __prepare(){if(this.hasOwnProperty(l("elementProperties",this)))return;let k=h0(this);if(k.finalize(),k._initializers!==void 0)this._initializers=[...k._initializers];this.elementProperties=new Map(k.elementProperties)}static finalize(){if(this.hasOwnProperty(l("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(l("properties",this))){let F=this.properties,K=[...d1(F),...E1(F)];for(let Z of K)this.createProperty(Z,F[Z])}let k=this[Symbol.metadata];if(k!==null){let F=litPropertyMetadata.get(k);if(F!==void 0)for(let[K,Z]of F)this.elementProperties.set(K,Z)}this.__attributeToPropertyMap=new Map;for(let[F,K]of this.elementProperties){let Z=this.__attributeNameForProperty(F,K);if(Z!==void 0)this.__attributeToPropertyMap.set(Z,F)}if(this.elementStyles=this.finalizeStyles(this.styles),j){if(this.hasOwnProperty("createProperty"))Y("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))Y("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(k){let F=[];if(Array.isArray(k)){let K=new Set(k.flat(1/0).reverse());for(let Z of K)F.unshift(f0(Z))}else if(k!==void 0)F.push(f0(k));return F}static __attributeNameForProperty(k,F){let K=F.attribute;return K===!1?void 0:typeof K==="string"?K:typeof k==="string"?k.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((k)=>this.enableUpdating=k),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((k)=>k(this))}addController(k){if((this.__controllers??=new Set).add(k),this.renderRoot!==void 0&&this.isConnected)k.hostConnected?.()}removeController(k){this.__controllers?.delete(k)}__saveInstanceProperties(){let k=new Map,F=this.constructor.elementProperties;for(let K of F.keys())if(this.hasOwnProperty(K))k.set(K,this[K]),delete this[K];if(k.size>0)this.__instanceProperties=k}createRenderRoot(){let k=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E0(k,this.constructor.elementStyles),k}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((k)=>k.hostConnected?.())}enableUpdating(k){}disconnectedCallback(){this.__controllers?.forEach((k)=>k.hostDisconnected?.())}attributeChangedCallback(k,F,K){this._$attributeToProperty(k,K)}__propertyToAttribute(k,F){let Z=this.constructor.elementProperties.get(k),_=this.constructor.__attributeNameForProperty(k,Z);if(_!==void 0&&Z.reflect===!0){let W=(Z.converter?.toAttribute!==void 0?Z.converter:E).toAttribute(F,Z.type);if(j&&this.constructor.enabledWarnings.includes("migration")&&W===void 0)Y("undefined-attribute-value",`The attribute value for the ${k} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=k,W==null)this.removeAttribute(_);else this.setAttribute(_,W);this.__reflectingProperty=null}}_$attributeToProperty(k,F){let K=this.constructor,Z=K.__attributeToPropertyMap.get(k);if(Z!==void 0&&this.__reflectingProperty!==Z){let _=K.getPropertyOptions(Z),N=typeof _.converter==="function"?{fromAttribute:_.converter}:_.converter?.fromAttribute!==void 0?_.converter:E;this.__reflectingProperty=Z;let W=N.fromAttribute(F,_.type);this[Z]=W??this.__defaultValues?.get(Z)??W,this.__reflectingProperty=null}}requestUpdate(k,F,K,Z=!1,_){if(k!==void 0){if(j&&k instanceof Event)Y("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let N=this.constructor;if(Z===!1)_=this[k];if(K??=N.getPropertyOptions(k),(K.hasChanged??k0)(_,F)||K.useDefault&&K.reflect&&_===this.__defaultValues?.get(k)&&!this.hasAttribute(N.__attributeNameForProperty(k,K)))this._$changeProperty(k,F,K);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(k,F,{useDefault:K,reflect:Z,wrapped:_},N){if(K&&!(this.__defaultValues??=new Map).has(k)){if(this.__defaultValues.set(k,N??F??this[k]),_!==!0||N!==void 0)return}if(!this._$changedProperties.has(k)){if(!this.hasUpdated&&!K)F=void 0;this._$changedProperties.set(k,F)}if(Z===!0&&this.__reflectingProperty!==k)(this.__reflectingProperties??=new Set).add(k)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(F){Promise.reject(F)}let k=this.scheduleUpdate();if(k!=null)await k;return!this.isUpdatePending}scheduleUpdate(){let k=this.performUpdate();if(j&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof k?.then==="function")Y("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return k}performUpdate(){if(!this.isUpdatePending)return;if(o1?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),j){let _=[...this.constructor.elementProperties.keys()].filter((N)=>this.hasOwnProperty(N)&&(N in h0(this)));if(_.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${_.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[Z,_]of this.__instanceProperties)this[Z]=_;this.__instanceProperties=void 0}let K=this.constructor.elementProperties;if(K.size>0)for(let[Z,_]of K){let{wrapped:N}=_,W=this[Z];if(N===!0&&!this._$changedProperties.has(Z)&&W!==void 0)this._$changeProperty(Z,void 0,_,W)}}let k=!1,F=this._$changedProperties;try{if(k=this.shouldUpdate(F),k)this.willUpdate(F),this.__controllers?.forEach((K)=>K.hostUpdate?.()),this.update(F);else this.__markUpdated()}catch(K){throw k=!1,this.__markUpdated(),K}if(k)this._$didUpdate(F)}willUpdate(k){}_$didUpdate(k){if(this.__controllers?.forEach((F)=>F.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(k);if(this.updated(k),j&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))Y("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(k){return!0}update(k){this.__reflectingProperties&&=this.__reflectingProperties.forEach((F)=>this.__propertyToAttribute(F,this[F])),this.__markUpdated()}updated(k){}firstUpdated(k){}}g.elementStyles=[];g.shadowRootOptions={mode:"open"};g[l("elementProperties",g)]=new Map;g[l("finalized",g)]=new Map;p0?.({ReactiveElement:g});if(j){g.enabledWarnings=["change-in-update","async-perform-update"];let k=function(F){if(!F.hasOwnProperty(l("enabledWarnings",F)))F.enabledWarnings=F.enabledWarnings.slice()};g.enableWarning=function(F){if(k(this),!this.enabledWarnings.includes(F))this.enabledWarnings.push(F)},g.disableWarning=function(F){k(this);let K=this.enabledWarnings.indexOf(F);if(K>=0)this.enabledWarnings.splice(K,1)}}(U.reactiveElementVersions??=[]).push("2.1.2");if(j&&U.reactiveElementVersions.length>1)queueMicrotask(()=>{Y("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var L=globalThis,J=(k)=>{if(!L.emitLitDebugLogEvents)return;L.dispatchEvent(new CustomEvent("lit-debug",{detail:k}))},v1=0,o;L.litIssuedWarnings??=new Set,o=(k,F)=>{if(F+=k?` See https://lit.dev/msg/${k} for more information.`:"",!L.litIssuedWarnings.has(F)&&!L.litIssuedWarnings.has(k))console.warn(F),L.litIssuedWarnings.add(F)},queueMicrotask(()=>{o("dev-mode","Lit is in dev mode. Not recommended for production!")});var x=L.ShadyDOM?.inUse&&L.ShadyDOM?.noPatch===!0?L.ShadyDOM.wrap:(k)=>k,F0=L.trustedTypes,m0=F0?F0.createPolicy("lit-html",{createHTML:(k)=>k}):void 0,p1=(k)=>k,N0=(k,F,K)=>p1,m1=(k)=>{if(c!==N0)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");c=k},i1=()=>{c=N0},M0=(k,F,K)=>{return c(k,F,K)},t0="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k1="?"+C,r1=`<${k1}>`,P=document,v=()=>P.createComment(""),p=(k)=>k===null||typeof k!="object"&&typeof k!="function",A0=Array.isArray,s1=(k)=>A0(k)||typeof k?.[Symbol.iterator]==="function",G0=`[ 	
\f\r]`,n1=`[^ 	
\f\r"'\`<>=]`,a1=`[^\\s"'>=/]`,u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,i0=1,H0=2,e1=3,r0=/-->/g,s0=/>/g,I=new RegExp(`>|${G0}(?:(${a1}+)(${G0}*=${G0}*(?:${n1}|("|')|))|$)`,"g"),t1=0,n0=1,kk=2,a0=3,y0=/'/g,b0=/"/g,F1=/^(?:script|style|textarea|title)$/i,Fk=1,K0=2,Z0=3,U0=1,_0=2,Kk=3,Zk=4,_k=5,j0=6,Nk=7,g0=(k)=>(F,...K)=>{if(F.some((Z)=>Z===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(K.some((Z)=>Z?._$litStatic$))o("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:k,strings:F,values:K}},G=g0(Fk),f=g0(K0),ck=g0(Z0),D=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),e0=new WeakMap,w=P.createTreeWalker(P,129),c=N0;function K1(k,F){if(!A0(k)||!k.hasOwnProperty("raw")){let K="invalid template strings array";throw K=`
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
`),Error(K)}return m0!==void 0?m0.createHTML(F):F}var Wk=(k,F)=>{let K=k.length-1,Z=[],_=F===K0?"<svg>":F===Z0?"<math>":"",N,W=u;for(let $=0;$<K;$++){let Q=k[$],B=-1,H,V=0,M;while(V<Q.length){if(W.lastIndex=V,M=W.exec(Q),M===null)break;if(V=W.lastIndex,W===u){if(M[i0]==="!--")W=r0;else if(M[i0]!==void 0)W=s0;else if(M[H0]!==void 0){if(F1.test(M[H0]))N=new RegExp(`</${M[H0]}`,"g");W=I}else if(M[e1]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(W===I)if(M[t1]===">")W=N??u,B=-1;else if(M[n0]===void 0)B=-2;else B=W.lastIndex-M[kk].length,H=M[n0],W=M[a0]===void 0?I:M[a0]==='"'?b0:y0;else if(W===b0||W===y0)W=I;else if(W===r0||W===s0)W=u;else W=I,N=void 0}console.assert(B===-1||W===I||W===y0||W===b0,"unexpected parse state B");let T=W===I&&k[$+1].startsWith("/>")?" ":"";_+=W===u?Q+r1:B>=0?(Z.push(H),Q.slice(0,B)+t0+Q.slice(B))+C+T:Q+C+(B===-2?$:T)}let q=_+(k[K]||"<?>")+(F===K0?"</svg>":F===Z0?"</math>":"");return[K1(k,q),Z]};class m{constructor({strings:k,["_$litType$"]:F},K){this.parts=[];let Z,_=0,N=0,W=k.length-1,q=this.parts,[$,Q]=Wk(k,F);if(this.el=m.createElement($,K),w.currentNode=this.el.content,F===K0||F===Z0){let B=this.el.content.firstChild;B.replaceWith(...B.childNodes)}while((Z=w.nextNode())!==null&&q.length<W){if(Z.nodeType===1){{let B=Z.localName;if(/^(?:textarea|template)$/i.test(B)&&Z.innerHTML.includes(C)){let H=`Expressions are not supported inside \`${B}\` elements. See https://lit.dev/msg/expression-in-${B} for more information.`;if(B==="template")throw Error(H);else o("",H)}}if(Z.hasAttributes()){for(let B of Z.getAttributeNames())if(B.endsWith(t0)){let H=Q[N++],M=Z.getAttribute(B).split(C),T=/([.?@])?(.*)/.exec(H);q.push({type:U0,index:_,name:T[2],strings:M,ctor:T[1]==="."?_1:T[1]==="?"?N1:T[1]==="@"?W1:r}),Z.removeAttribute(B)}else if(B.startsWith(C))q.push({type:j0,index:_}),Z.removeAttribute(B)}if(F1.test(Z.tagName)){let B=Z.textContent.split(C),H=B.length-1;if(H>0){Z.textContent=F0?F0.emptyScript:"";for(let V=0;V<H;V++)Z.append(B[V],v()),w.nextNode(),q.push({type:_0,index:++_});Z.append(B[H],v())}}}else if(Z.nodeType===8)if(Z.data===k1)q.push({type:_0,index:_});else{let H=-1;while((H=Z.data.indexOf(C,H+1))!==-1)q.push({type:Nk,index:_}),H+=C.length-1}_++}if(Q.length!==N)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+k.join("${...}")+"`");J&&J({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:k})}static createElement(k,F){let K=P.createElement("template");return K.innerHTML=k,K}}function d(k,F,K=k,Z){if(F===D)return F;let _=Z!==void 0?K.__directives?.[Z]:K.__directive,N=p(F)?void 0:F._$litDirective$;if(_?.constructor!==N){if(_?._$notifyDirectiveConnectionChanged?.(!1),N===void 0)_=void 0;else _=new N(k),_._$initialize(k,K,Z);if(Z!==void 0)(K.__directives??=[])[Z]=_;else K.__directive=_}if(_!==void 0)F=d(k,_._$resolve(k,F.values),_,Z);return F}class Z1{constructor(k,F){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=k,this._$parent=F}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(k){let{el:{content:F},parts:K}=this._$template,Z=(k?.creationScope??P).importNode(F,!0);w.currentNode=Z;let _=w.nextNode(),N=0,W=0,q=K[0];while(q!==void 0){if(N===q.index){let $;if(q.type===_0)$=new i(_,_.nextSibling,this,k);else if(q.type===U0)$=new q.ctor(_,q.name,q.strings,this,k);else if(q.type===j0)$=new q1(_,this,k);this._$parts.push($),q=K[++W]}if(N!==q?.index)_=w.nextNode(),N++}return w.currentNode=P,Z}_update(k){let F=0;for(let K of this._$parts){if(K!==void 0)if(J&&J({kind:"set part",part:K,value:k[F],valueIndex:F,values:k,templateInstance:this}),K.strings!==void 0)K._$setValue(k,K,F),F+=K.strings.length-2;else K._$setValue(k[F]);F++}}}class i{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(k,F,K,Z){this.type=_0,this._$committedValue=b,this._$disconnectableChildren=void 0,this._$startNode=k,this._$endNode=F,this._$parent=K,this.options=Z,this.__isConnected=Z?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let k=x(this._$startNode).parentNode,F=this._$parent;if(F!==void 0&&k?.nodeType===11)k=F.parentNode;return k}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(k,F=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(k=d(this,k,F),p(k)){if(k===b||k==null||k===""){if(this._$committedValue!==b)J&&J({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=b}else if(k!==this._$committedValue&&k!==D)this._commitText(k)}else if(k._$litType$!==void 0)this._commitTemplateResult(k);else if(k.nodeType!==void 0){if(this.options?.host===k){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",k,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(k)}else if(s1(k))this._commitIterable(k);else this._commitText(k)}_insert(k){return x(x(this._$startNode).parentNode).insertBefore(k,this._$endNode)}_commitNode(k){if(this._$committedValue!==k){if(this._$clear(),c!==N0){let F=this._$startNode.parentNode?.nodeName;if(F==="STYLE"||F==="SCRIPT"){let K="Forbidden";if(F==="STYLE")K="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else K="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(K)}}J&&J({kind:"commit node",start:this._$startNode,parent:this._$parent,value:k,options:this.options}),this._$committedValue=this._insert(k)}}_commitText(k){if(this._$committedValue!==b&&p(this._$committedValue)){let F=x(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=M0(F,"data","property");k=this._textSanitizer(k),J&&J({kind:"commit text",node:F,value:k,options:this.options}),F.data=k}else{let F=P.createTextNode("");if(this._commitNode(F),this._textSanitizer===void 0)this._textSanitizer=M0(F,"data","property");k=this._textSanitizer(k),J&&J({kind:"commit text",node:F,value:k,options:this.options}),F.data=k}this._$committedValue=k}_commitTemplateResult(k){let{values:F,["_$litType$"]:K}=k,Z=typeof K==="number"?this._$getTemplate(k):(K.el===void 0&&(K.el=m.createElement(K1(K.h,K.h[0]),this.options)),K);if(this._$committedValue?._$template===Z)J&&J({kind:"template updating",template:Z,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:F}),this._$committedValue._update(F);else{let _=new Z1(Z,this),N=_._clone(this.options);J&&J({kind:"template instantiated",template:Z,instance:_,parts:_._$parts,options:this.options,fragment:N,values:F}),_._update(F),J&&J({kind:"template instantiated and updated",template:Z,instance:_,parts:_._$parts,options:this.options,fragment:N,values:F}),this._commitNode(N),this._$committedValue=_}}_$getTemplate(k){let F=e0.get(k.strings);if(F===void 0)e0.set(k.strings,F=new m(k));return F}_commitIterable(k){if(!A0(this._$committedValue))this._$committedValue=[],this._$clear();let F=this._$committedValue,K=0,Z;for(let _ of k){if(K===F.length)F.push(Z=new i(this._insert(v()),this._insert(v()),this,this.options));else Z=F[K];Z._$setValue(_),K++}if(K<F.length)this._$clear(Z&&x(Z._$endNode).nextSibling,K),F.length=K}_$clear(k=x(this._$startNode).nextSibling,F){this._$notifyConnectionChanged?.(!1,!0,F);while(k!==this._$endNode){let K=x(k).nextSibling;x(k).remove(),k=K}}setConnected(k){if(this._$parent===void 0)this.__isConnected=k,this._$notifyConnectionChanged?.(k);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class r{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(k,F,K,Z,_){if(this.type=U0,this._$committedValue=b,this._$disconnectableChildren=void 0,this.element=k,this.name=F,this._$parent=Z,this.options=_,K.length>2||K[0]!==""||K[1]!=="")this._$committedValue=Array(K.length-1).fill(new String),this.strings=K;else this._$committedValue=b;this._sanitizer=void 0}_$setValue(k,F=this,K,Z){let _=this.strings,N=!1;if(_===void 0){if(k=d(this,k,F,0),N=!p(k)||k!==this._$committedValue&&k!==D,N)this._$committedValue=k}else{let W=k;k=_[0];let q,$;for(q=0;q<_.length-1;q++){if($=d(this,W[K+q],F,q),$===D)$=this._$committedValue[q];if(N||=!p($)||$!==this._$committedValue[q],$===b)k=b;else if(k!==b)k+=($??"")+_[q+1];this._$committedValue[q]=$}}if(N&&!Z)this._commitValue(k)}_commitValue(k){if(k===b)x(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=c(this.element,this.name,"attribute");k=this._sanitizer(k??""),J&&J({kind:"commit attribute",element:this.element,name:this.name,value:k,options:this.options}),x(this.element).setAttribute(this.name,k??"")}}}class _1 extends r{constructor(){super(...arguments);this.type=Kk}_commitValue(k){if(this._sanitizer===void 0)this._sanitizer=c(this.element,this.name,"property");k=this._sanitizer(k),J&&J({kind:"commit property",element:this.element,name:this.name,value:k,options:this.options}),this.element[this.name]=k===b?void 0:k}}class N1 extends r{constructor(){super(...arguments);this.type=Zk}_commitValue(k){J&&J({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(k&&k!==b),options:this.options}),x(this.element).toggleAttribute(this.name,!!k&&k!==b)}}class W1 extends r{constructor(k,F,K,Z,_){super(k,F,K,Z,_);if(this.type=_k,this.strings!==void 0)throw Error(`A \`<${k.localName}>\` has a \`@${F}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(k,F=this){if(k=d(this,k,F,0)??b,k===D)return;let K=this._$committedValue,Z=k===b&&K!==b||k.capture!==K.capture||k.once!==K.once||k.passive!==K.passive,_=k!==b&&(K===b||Z);if(J&&J({kind:"commit event listener",element:this.element,name:this.name,value:k,options:this.options,removeListener:Z,addListener:_,oldListener:K}),Z)this.element.removeEventListener(this.name,this,K);if(_)this.element.addEventListener(this.name,this,k);this._$committedValue=k}handleEvent(k){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,k);else this._$committedValue.handleEvent(k)}}class q1{constructor(k,F,K){this.element=k,this.type=j0,this._$disconnectableChildren=void 0,this._$parent=F,this.options=K}get _$isConnected(){return this._$parent._$isConnected}_$setValue(k){J&&J({kind:"commit to element binding",element:this.element,value:k,options:this.options}),d(this,k)}}var qk=L.litHtmlPolyfillSupportDevMode;qk?.(m,i);(L.litHtmlVersions??=[]).push("3.3.2");if(L.litHtmlVersions.length>1)queueMicrotask(()=>{o("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var h=(k,F,K)=>{if(F==null)throw TypeError(`The container to render into may not be ${F}`);let Z=v1++,_=K?.renderBefore??F,N=_._$litPart$;if(J&&J({kind:"begin render",id:Z,value:k,container:F,options:K,part:N}),N===void 0){let W=K?.renderBefore??null;_._$litPart$=N=new i(F.insertBefore(v(),W),W,void 0,K??{})}return N._$setValue(k),J&&J({kind:"end render",id:Z,value:k,container:F,options:K,part:N}),N};h.setSanitizer=m1,h.createSanitizer=M0,h._testOnlyClearSanitizerFactoryDoNotCallOrElse=i1;var $k=(k,F)=>k,L0=!0,S=globalThis,$1;if(L0)S.litIssuedWarnings??=new Set,$1=(k,F)=>{if(F+=` See https://lit.dev/msg/${k} for more information.`,!S.litIssuedWarnings.has(F)&&!S.litIssuedWarnings.has(k))console.warn(F),S.litIssuedWarnings.add(F)};class R extends g{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let k=super.createRenderRoot();return this.renderOptions.renderBefore??=k.firstChild,k}update(k){let F=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(k),this.__childPart=h(F,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return D}}R._$litElement$=!0;R[$k("finalized",R)]=!0;S.litElementHydrateSupport?.({LitElement:R});var Bk=L0?S.litElementPolyfillSupportDevMode:S.litElementPolyfillSupport;Bk?.({LitElement:R});(S.litElementVersions??=[]).push("4.2.2");if(L0&&S.litElementVersions.length>1)queueMicrotask(()=>{$1("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var B1=!0,J1;if(B1)globalThis.litIssuedWarnings??=new Set,J1=(k,F)=>{if(F+=` See https://lit.dev/msg/${k} for more information.`,!globalThis.litIssuedWarnings.has(F)&&!globalThis.litIssuedWarnings.has(k))console.warn(F),globalThis.litIssuedWarnings.add(F)};var Jk=(k,F,K)=>{let Z=F.hasOwnProperty(K);return F.constructor.createProperty(K,k),Z?Object.getOwnPropertyDescriptor(F,K):void 0},Qk={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k0},fk=(k=Qk,F,K)=>{let{kind:Z,metadata:_}=K;if(B1&&_==null)J1("missing-class-metadata",`The class ${F} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let N=globalThis.litPropertyMetadata.get(_);if(N===void 0)globalThis.litPropertyMetadata.set(_,N=new Map);if(Z==="setter")k=Object.create(k),k.wrapped=!0;if(N.set(K.name,k),Z==="accessor"){let{name:W}=K;return{set(q){let $=F.get.call(this);F.set.call(this,q),this.requestUpdate(W,$,k,!0,q)},init(q){if(q!==void 0)this._$changeProperty(W,void 0,k,q);return q}}}else if(Z==="setter"){let{name:W}=K;return function(q){let $=this[W];F.call(this,q),this.requestUpdate(W,$,k,!0,q)}}throw Error(`Unsupported decorator location: ${Z}`)};function s(k){return(F,K)=>{return typeof K==="object"?fk(k,F,K):Jk(k,F,K)}}function W0(k){return s({...k,state:!0,attribute:!1})}var Gk=!0,Hk;if(Gk)globalThis.litIssuedWarnings??=new Set,Hk=(k,F)=>{if(F+=k?` See https://lit.dev/msg/${k} for more information.`:"",!globalThis.litIssuedWarnings.has(F)&&!globalThis.litIssuedWarnings.has(k))console.warn(F),globalThis.litIssuedWarnings.add(F)};var Q1="0.4.0",z={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},f1=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],X={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var yk={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",show_clock:"Показывать часы",demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},G1=yk;var bk={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",show_clock:"Aktuelle Uhrzeit anzeigen",demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},H1=bk;var Mk={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",show_clock:"Huidige tijd weergeven",demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},y1=Mk;var Ak={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",show_clock:"Afficher l'heure actuelle",demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},b1=Ak;var Uk={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",show_clock:"Show current time",demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian"}}},M1=Uk;var jk={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",show_clock:"Mostrar hora actual",demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},A1=jk;var gk={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",show_clock:"Mostra ora corrente",demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},U1=gk;var X0={en:M1,ru:G1,de:H1,nl:y1,fr:b1,es:A1,it:U1};class j1{lang="en";fallback="en";t(k){let F=k.split("."),K=F.reduce((_,N)=>_?.[N],X0[this.lang]);if(K!=null)return K;return F.reduce((_,N)=>_?.[N],X0[this.fallback])??k}setLanguage(k){if(!X0[k]||this.lang===k)return;this.lang=k,window.dispatchEvent(new CustomEvent("language-changed"))}}var y=new j1;window.i18n=y;var Y0=({configLang:k,hassLang:F}={})=>{if(k&&k!=="auto")return k;if(F)return F;if(typeof navigator<"u"&&navigator.language){let K=navigator.language.toLowerCase();if(K.startsWith("ru"))return"ru";if(K.startsWith("de"))return"de";if(K.startsWith("nl"))return"nl";if(K.startsWith("fr"))return"fr";if(K.startsWith("it"))return"it";if(K.startsWith("es"))return"es"}return"en"};function Lk(){let k=new Date,F=k.getHours(),K=k.getMinutes(),Z=F*60+K;if(Z>=z.SUNRISE_START&&Z<z.SUNRISE_END)return{type:"sunrise",progress:(Z-z.SUNRISE_START)/120};if(Z>=z.SUNRISE_END&&Z<z.DAY_END)return{type:"day",progress:(Z-z.SUNRISE_END)/600};if(Z>=z.DAY_END&&Z<z.SUNSET_END)return{type:"sunset",progress:(Z-z.DAY_END)/120};return{type:"night",progress:0}}function g1(k,F,K){if(k.type==="sunrise"){let Z=k.progress;return{x:F*(0.3+Z*0.4),y:K*(0.85-Z*0.55)}}else if(k.type==="sunset"){let Z=k.progress;return{x:F*(0.5+Z*0.3),y:K*(0.3+Z*0.55)}}else if(k.type==="day"){let _=k.progress*Math.PI;return{x:F*(0.5+Math.sin(_)*0.25),y:K*(0.25-Math.sin(_)*0.1)}}else return{x:F*0.75,y:K*0.3}}function L1(k){if(k.type==="sunrise"){let F=k.progress,K={r:26,g:26,b:46},Z={r:255,g:160,b:122},_={r:255,g:215,b:0};return{start:{r:Math.round(K.r+(Z.r-K.r)*F),g:Math.round(K.g+(Z.g-K.g)*F),b:Math.round(K.b+(Z.b-K.b)*F)},end:{r:Math.round(K.r+(_.r-K.r)*F),g:Math.round(K.g+(_.g-K.g)*F),b:Math.round(K.b+(_.b-K.b)*F)}}}else if(k.type==="sunset"){let F=k.progress,K={r:255,g:107,b:107},Z={r:255,g:160,b:122},_={r:26,g:26,b:46};return{start:{r:Math.round(K.r+(_.r-K.r)*F),g:Math.round(K.g+(_.g-K.g)*F),b:Math.round(K.b+(_.b-K.b)*F)},end:{r:Math.round(Z.r+(_.r-Z.r)*F),g:Math.round(Z.g+(_.g-Z.g)*F),b:Math.round(Z.b+(_.b-Z.b)*F)}}}return null}function X1(k){if(!k)return"";return`${new Date(k).getHours().toString().padStart(2,"0")}:00`}function Y1(k,F){if(!k)return"";let K=new Date(k);if(Number.isNaN(K.getTime()))return"";return K.toLocaleDateString(F||void 0,{weekday:"short",day:"numeric",month:"short"})}function x0(k){if(!k)return"";let F=typeof k==="string"?new Date(k):k,K=F.getHours(),Z=F.getMinutes();return`${K.toString().padStart(2,"0")}:${Z.toString().padStart(2,"0")}`}function V0(k,F=null,K=null,Z=null){let _=null,N=null;if(F&&Z&&Z.states[F]){let W=Z.states[F];_=new Date(W.state)}if(K&&Z&&Z.states[K]){let W=Z.states[K];N=new Date(W.state)}if(!_||!N){if(k&&k.attributes){let W=k.attributes;if(!_&&(W.forecast_sunrise||W.sunrise))_=new Date(W.forecast_sunrise||W.sunrise);if(!N&&(W.forecast_sunset||W.sunset))N=new Date(W.forecast_sunset||W.sunset)}}if((!_||!N)&&Z&&Z.states["sun.sun"]){let q=Z.states["sun.sun"].attributes;if(!_&&q.next_rising)_=new Date(q.next_rising);if(!N&&q.next_setting)N=new Date(q.next_setting)}return{sunrise:_,sunset:N,hasSunData:!!(_&&N)}}function z0(k){let F=new Date;if(k.hasSunData&&k.sunrise&&k.sunset){let K=F.getTime(),Z=k.sunrise.getTime(),_=k.sunset.getTime();if(Z-K>43200000)Z-=86400000;if(_-K>43200000)_-=86400000;let N=Z-3600000,W=Z+3600000,q=_-3600000,$=_+3600000;if(K>=N&&K<W)return{type:"sunrise",progress:(K-N)/(W-N)};if(K>=W&&K<q)return{type:"day",progress:(K-W)/(q-W)};if(K>=q&&K<$)return{type:"sunset",progress:(K-q)/($-q)};return{type:"night",progress:0}}return Lk()}class A{ctx;constructor(k){this.ctx=k}drawCloud(k,F,K,Z){let _=this.ctx.shadowBlur,N=this.ctx.shadowColor,W=this.ctx.globalAlpha;this.ctx.shadowBlur=K*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${Z*0.4})`,this.ctx.globalAlpha=Z*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:k,y:F,r:K*0.4},{x:k+K*0.35,y:F,r:K*0.5},{x:k+K*0.65,y:F,r:K*0.48},{x:k+K*0.92,y:F,r:K*0.38},{x:k+K*0.18,y:F-K*0.28,r:K*0.38},{x:k+K*0.52,y:F-K*0.32,r:K*0.42},{x:k+K*0.78,y:F-K*0.28,r:K*0.38},{x:k+K*0.32,y:F-K*0.42,r:K*0.32},{x:k+K*0.62,y:F-K*0.48,r:K*0.36},{x:k+K*0.82,y:F-K*0.42,r:K*0.32}].forEach(($)=>{this.ctx.beginPath(),this.ctx.arc($.x,$.y,$.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=_,this.ctx.shadowColor=N,this.ctx.globalAlpha=W}drawClouds(k,F,K,Z=0.5){let _=Math.max(2,Math.floor(F/150*Z));for(let N=0;N<_;N++){let W=(k*3+N*150)%(F+200)-100,q=K*(0.2+N%3*0.15)+Math.sin(k*0.2+N)*8,$=40+N%3*15,Q=0.6+N%2*0.2;this.drawCloud(W,q,$,Q)}}}class T0 extends A{draw(k,F,K,Z){let _=Date.now()*0.001,N=g1(Z,F,K),W=N.x,q=N.y;if(Z.type==="day"||Z.type==="sunrise"||Z.type==="sunset"){if(this.drawSun(W,q,_),Z.type==="sunrise"||Z.type==="sunset")this.drawHorizonReflection(W,q,K,_)}else if(Z.type==="night")this.drawNightSky(F,K,_);this.drawClouds(_,F,K,0.3)}drawSun(k,F,K){let Z=48+Math.sin(K*0.15)*1.5,_=this.ctx.createRadialGradient(k,F,Z*0.3,k,F,Z*3.5);_.addColorStop(0,"rgba(255, 248, 230, 0.25)"),_.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),_.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),_.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),_.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),_.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),_.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=_,this.ctx.beginPath(),this.ctx.arc(k,F,Z*3.5,0,Math.PI*2),this.ctx.fill();let N=this.ctx.createRadialGradient(k,F,Z*0.5,k,F,Z*2.2);N.addColorStop(0,"rgba(255, 250, 220, 0.35)"),N.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),N.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),N.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),N.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(k,F,Z*2.2,0,Math.PI*2),this.ctx.fill();let W=this.ctx.createRadialGradient(k,F,Z*0.6,k,F,Z*1.6);W.addColorStop(0,"rgba(255, 252, 240, 0.5)"),W.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),W.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),W.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=W,this.ctx.beginPath(),this.ctx.arc(k,F,Z*1.6,0,Math.PI*2),this.ctx.fill();let q=this.ctx.createRadialGradient(k-Z*0.1,F-Z*0.1,0,k,F,Z);q.addColorStop(0,"#FFFEF5"),q.addColorStop(0.15,"#FFF9E6"),q.addColorStop(0.3,"#FFF4D6"),q.addColorStop(0.5,"#FFEDC0"),q.addColorStop(0.7,"#FFE4A8"),q.addColorStop(0.85,"#FFDC95"),q.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=q,this.ctx.beginPath(),this.ctx.arc(k,F,Z,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(k,F,K,Z){let _=48+Math.sin(Z*0.15)*1.5,N=K*0.85;if(F>=N-50){let W=Math.max(0,(N-F)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${W})`,this.ctx.beginPath(),this.ctx.ellipse(k,N,_*1.5,_*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(k,F,K){this.ctx.fillStyle="#FFFFFF";for(let N=0;N<20;N++){let W=(k*0.2+N*47)%k,q=(F*0.2+N*23)%(F*0.6),$=Math.sin(K*0.8+N)*0.5+0.5;this.ctx.globalAlpha=$*0.8,this.ctx.beginPath(),this.ctx.arc(W,q,1.5,0,Math.PI*2),this.ctx.fill()}let Z=k*0.75,_=F*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(Z,_,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(Z-8,_-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class n extends A{rainDrops=[];lastTime=0;draw(k,F,K,Z,_=!1){let N=Date.now()*0.001;this.drawClouds(N,F,K,_?1:0.8),this.drawRain(F,K,_)}drawRain(k,F,K){let Z=K?130:90;if(this.rainDrops.length!==Z){this.rainDrops=[];for(let q=0;q<Z;q++)this.rainDrops.push({x:Math.random()*k,y:Math.random()*F-Math.random()*200,speed:K?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:K?1.2+Math.random()*1:0.8+Math.random()*0.7,length:K?8+Math.random()*10:6+Math.random()*8,alpha:K?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let _=Date.now()*0.001,N=this.lastTime>0?Math.min(_-this.lastTime,0.1):0.016666666666666666;this.lastTime=_;let W=_;for(let q=0;q<this.rainDrops.length;q++){let $=this.rainDrops[q];if($.y+=$.speed*N,$.y>F+50)$.y=-50-Math.random()*100,$.x=Math.random()*k;let Q=$.windOffset*(1+Math.sin(W*0.5+$.phase)*0.2),B=$.x+Q;if(B<-10)$.x=k+10;else if(B>k+10)$.x=-10;this.drawRainDrop(B,$.y,$)}}drawRainDrop(k,F,K){this.ctx.save(),this.ctx.globalAlpha=K.alpha;let Z=F-K.length*0.5,_=F+K.length*0.5,N=K.alpha,W=K.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+N+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+W+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(k,Z),this.ctx.quadraticCurveTo(k-K.width*0.3,F,k-K.width,_-K.width*0.3),this.ctx.arc(k,_,K.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(k+K.width*0.3,F,k,Z),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class C0 extends A{snowflakes=[];lastTime=0;draw(k,F,K,Z){let _=Date.now()*0.001;this.drawClouds(_,F,K,0.7),this.drawSnowflakes(F,K)}drawSnowflakes(k,F){let K=Math.floor(k*F/5000),Z=Math.max(30,Math.min(K,80));if(this.snowflakes.length!==Z){this.snowflakes=[];for(let q=0;q<Z;q++)this.snowflakes.push({x:Math.random()*k,y:Math.random()*F-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let _=Date.now()*0.001,N=this.lastTime>0?Math.min(_-this.lastTime,0.1):0.016666666666666666;this.lastTime=_;let W=_;this.ctx.lineCap="round";for(let q=0;q<this.snowflakes.length;q++){let $=this.snowflakes[q],Q=Math.sin(W*$.swaySpeed+$.swayPhase)*2;if($.y+=$.speedY*N,$.x+=($.speedX+Q)*N,$.rotation+=$.rotationSpeed*N,$.y>F+20)$.y=-20-Math.random()*50,$.x=Math.random()*k;if($.x<-10)$.x=k+10;else if($.x>k+10)$.x=-10;this.drawSnowflake($.x,$.y,$.size,$.alpha,$.rotation)}}drawSnowflake(k,F,K,Z,_){this.ctx.save(),this.ctx.translate(k,F),this.ctx.rotate(_),this.ctx.strokeStyle=`rgba(255, 255, 255, ${Z})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let N=0;N<6;N++){let W=Math.PI/3*N,q=Math.cos(W),$=Math.sin(W);this.ctx.moveTo(0,0),this.ctx.lineTo($*K*2.5,q*K*2.5);let Q=$*K*1.5+q*K*0.5,B=q*K*1.5-$*K*0.5,H=$*K*1.8+q*K*1.2,V=q*K*1.8-$*K*1.2;this.ctx.moveTo(Q,B),this.ctx.lineTo(H,V);let M=$*K*1.5-q*K*0.5,T=q*K*1.5+$*K*0.5,R1=$*K*1.8-q*K*1.2,w1=q*K*1.8+$*K*1.2;this.ctx.moveTo(M,T),this.ctx.lineTo(R1,w1)}this.ctx.stroke(),this.ctx.restore()}}class S0 extends A{draw(k,F,K,Z){let _=Date.now()*0.001;this.drawClouds(_,F,K,0.7)}}class I0 extends A{draw(k,F,K,Z){let _=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let N=0;N<3;N++){let W=K*(0.4+N*0.2),q=Math.sin(_+N)*20;this.ctx.beginPath(),this.ctx.moveTo(0,W);for(let $=0;$<=F;$+=5){let Q=Math.sin(($/F+_)*Math.PI*4+N)*15;this.ctx.lineTo($,W+Q+q)}this.ctx.lineTo(F,K),this.ctx.lineTo(0,K),this.ctx.closePath(),this.ctx.fill()}}}class R0 extends A{hailStones=[];draw(k,F,K,Z){let _=Date.now()*0.001;this.drawClouds(_,F,K,1),this.drawHailStones(F,K)}drawHailStones(k,F){if(this.hailStones.length!==60){this.hailStones=[];for(let _=0;_<60;_++)this.hailStones.push({startX:Math.random()*k,startY:Math.random()*(F+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let Z=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let _=0;_<this.hailStones.length;_++){let N=this.hailStones[_],W=(N.startY+Z*N.speed)%(F+150);if(W>F+30)N.startY=-30-Math.random()*30,N.startX=Math.random()*k;let q=N.windOffset*(1+Math.sin(Z*0.6+N.phase)*0.15),$=(N.startX+q+Z*20%k)%k;if($<-5)N.startX=k+5;else if($>k+5)N.startX=-5;this.drawHailStone($,W,N)}}drawHailStone(k,F,K){this.ctx.save(),this.ctx.globalAlpha=K.alpha,this.ctx.beginPath(),this.ctx.ellipse(k,F,K.size,K.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(k-K.size*0.3,F-K.size*0.3,K.size*0.3,K.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class w0 extends A{rainyAnimation;constructor(k){super(k);this.rainyAnimation=new n(k)}draw(k,F,K,Z,_=!0){let N=Date.now()*0.001;if(this.drawClouds(N,F,K,1),_)this.rainyAnimation.draw(k,F,K,Z,!1);this.drawLightning(F,K,N)}drawLightning(k,F,K){let Z=Math.sin(K*2.5)*Math.sin(K*5.3)*Math.sin(K*7.1),_=Math.max(0,Z);if(_>0.4){let N=(_-0.4)/0.6,W=N*0.6,q=Math.min(W,Math.sin(N*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${q})`,this.ctx.fillRect(0,0,k,F)}}}var x1=d0`
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
`;var Xk={wind:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},V1=(k)=>f`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${k}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,Yk={sunny:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:f`
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
  `,overcast:f`
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
  `,cloudy:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:f`
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
  `,rain:f`
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
  `,pouring:f`
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
  `,snowy:f`
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
  `,snow:f`
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
  `,foggy:f`
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
  `,fog:f`
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
  `,hail:f`
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
  `,"snowy-rainy":f`
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
  `,lightning:f`
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
  `,"lightning-rainy":f`
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
  `,windy:f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":f`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function a(k,...F){let K=Xk[k];if(typeof K==="function")return K(...F);return K||""}function P0(k){if(!k)return"";return Yk[k.toLowerCase()]||""}class D0 extends R{animationFrame=null;canvas=null;ctx=null;canvasWidth=0;canvasHeight=0;animations={};holdTimer=null;holdDelay=500;clockInterval=null;resizeObserver=null;_wheelHandler=null;lastTap=null;holdFired=!1;hourlyForecastSubscription=null;dailyForecastSubscription=null;_testTimeOfDay;static get styles(){return x1}constructor(){super();this.currentTime="";this.hourlyForecast=[];this.dailyForecast=[];this.config={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{if(this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver();this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this._wheelHandler&&this.shadowRoot){let k=this.shadowRoot.querySelector(".forecast-scroll");if(k)k.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=null}if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;this.unsubscribeForecastUpdates()}updated(k){if(super.updated(k),k.has("hass")||k.has("config")){if(this.canvas&&this.ctx)this.resizeCanvas();if(this.setupForecastScroll(),this.hass&&this.config.entity)this.subscribeForecastUpdates()}let F=Y0({configLang:this.config?.language,hassLang:this.hass?.language});if(y.lang!==F)y.setLanguage(F)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new T0(this.ctx),rainy:new n(this.ctx),snowy:new C0(this.ctx),cloudy:new S0(this.ctx),foggy:new I0(this.ctx),hail:new R0(this.ctx),thunderstorm:new w0(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(k)}setupForecastScroll(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".forecast-scroll");if(!k)return;if(this._wheelHandler)k.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=(F)=>{let K=F;if(K.deltaY!==0)F.preventDefault(),k.scrollLeft+=K.deltaY},k.addEventListener("wheel",this._wheelHandler,{passive:!1})}resizeCanvas(){if(!this.canvas||!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;let F=k.getBoundingClientRect();if(F.width===0||F.height===0)return;let K=window.devicePixelRatio||2;if(this.canvas.width=F.width*K,this.canvas.height=F.height*K,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(K,K);this.canvasWidth=F.width,this.canvasHeight=F.height,this.initializeAnimations()}setupCanvas(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;let F=k.querySelector("canvas");if(F)F.remove();this.canvas=document.createElement("canvas"),k.appendChild(this.canvas),this.resizeCanvas()}getState(k){if(!this.hass||!k)return null;let F=this.hass.states[k];return F?F.state:null}getAttributes(k){if(!this.hass||!k)return{};let F=this.hass.states[k];return F?F.attributes:{}}getWeatherData(){let k=this.config.entity||"weather.home",F=this.getState(k),K=this.getAttributes(k),Z=K.condition||F||"sunny",_=null;if(this.config.templowAttribute&&K[this.config.templowAttribute]!=null)_=K[this.config.templowAttribute];else{for(let N of f1)if(K[N]!=null){_=K[N];break}if(_==null)_=(K.forecast&&K.forecast[0]?K.forecast[0].templow??null:null)||(K.forecast_hourly&&K.forecast_hourly[0]?K.forecast_hourly[0].native_templow??null:null)}return{condition:Z,temperature:K.temperature!=null?K.temperature:null,apparentTemperature:K.apparent_temperature||null,humidity:K.humidity!=null?K.humidity:null,windSpeed:K.wind_speed!=null?K.wind_speed:null,windGust:K.wind_gust_speed||K.wind_gust||null,windBearing:K.wind_bearing!=null?K.wind_bearing:null,windDirection:K.wind_direction||null,pressure:K.pressure||null,forecast:K.forecast||K.forecast_hourly||this.hourlyForecast||[],friendlyName:K.friendly_name||y.t("weather"),templow:_}}async subscribeForecastUpdates(){if(!this.hass||!this.config.entity)return;this.unsubscribeForecastUpdates();try{if(this.hourlyForecastSubscription=this.hass.connection.subscribeMessage((k)=>{if(k.forecast&&k.forecast.length>0)this.hourlyForecast=k.forecast},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:this.config.entity}),this.config.showDailyForecast)this.dailyForecastSubscription=this.hass.connection.subscribeMessage((k)=>{if(k.forecast&&k.forecast.length>0)this.dailyForecast=k.forecast},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:this.config.entity})}catch{}}async unsubscribeForecastUpdates(){if(this.hourlyForecastSubscription){try{(await this.hourlyForecastSubscription)()}catch{}this.hourlyForecastSubscription=null}if(this.dailyForecastSubscription){try{(await this.dailyForecastSubscription)()}catch{}this.dailyForecastSubscription=null}}getTodayForecast(){if(!this.hass||!this.config)return[];let k=Math.max(1,Math.floor(Number(this.config.hourlyForecastHours??X.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,k);let F=this.getWeatherData();if(!F.forecast||F.forecast.length===0)return[];let K=new Date,Z=new Date(K.getFullYear(),K.getMonth(),K.getDate()),_=new Date(Z);return _.setDate(_.getDate()+1),F.forecast.filter((W)=>{if(!W.datetime)return!1;let q=new Date(W.datetime),$=new Date(q.getFullYear(),q.getMonth(),q.getDate());return $.getTime()===Z.getTime()||$.getTime()===_.getTime()&&q.getHours()<=K.getHours()}).sort((W,q)=>new Date(W.datetime).getTime()-new Date(q.datetime).getTime()).slice(0,k)}getWeekForecast(){if(!this.hass||!this.config)return[];if(this.dailyForecast&&this.dailyForecast.length>0){let q=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??X.dailyForecastDays)));return this.dailyForecast.slice(0,q)}let k=this.getWeatherData();if(!k.forecast||k.forecast.length===0)return[];let F=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??X.dailyForecastDays))),K=new Date,Z=new Date(K.getFullYear(),K.getMonth(),K.getDate()),_=new Date(Z);_.setDate(_.getDate()+F);let N=(q)=>{let $=q.getFullYear(),Q=String(q.getMonth()+1).padStart(2,"0"),B=String(q.getDate()).padStart(2,"0");return`${$}-${Q}-${B}`},W=new Map;return k.forecast.forEach((q)=>{if(!q.datetime)return;let $=new Date(q.datetime);if(Number.isNaN($.getTime()))return;if($<Z||$>=_)return;let Q=N($),B=Math.abs($.getHours()+$.getMinutes()/60-12),H=W.get(Q);if(!H||B<H.hourScore)W.set(Q,{item:q,itemDate:$,hourScore:B})}),Array.from(W.values()).sort((q,$)=>q.itemDate.getTime()-$.itemDate.getTime()).map((q)=>q.item).slice(0,F)}startAnimation(){let k=()=>{this.draw(),this.animationFrame=requestAnimationFrame(k)};k()}draw(){if(!this.ctx||!this.canvas)return;if(!this.canvasWidth||!this.canvasHeight){if(this.resizeCanvas(),!this.canvasWidth||!this.canvasHeight)return}let k=this.canvasWidth,F=this.canvasHeight;this.ctx.clearRect(0,0,k,F);let K=this.getWeatherData(),Z=this.hass?.states[this.config.entity],_=V0(Z||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),N=this._testTimeOfDay||z0(_);switch(K.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),k,F,N);break;case"clear-night":this.animations.sunny?.draw(Date.now(),k,F,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),k,F,N,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),k,F,N,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),k,F,N);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),k,F,N,!1),this.animations.snowy?.draw(Date.now(),k,F,N);break;case"hail":this.animations.hail?.draw(Date.now(),k,F,N);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),k,F,N);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),k,F,N,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),k,F,N,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),k,F,N);break}}renderTodayForecast(){let k=this.getTodayForecast();if(k.length===0)return G`<div style="opacity: 0.6; font-size: 14px;">${y.t("forecast_unavailable")}</div>`;return G`
      <div class="forecast-scroll">
        ${k.map((F)=>G`
          <div class="forecast-item">
            <div class="forecast-time">${X1(F.datetime)}</div>
            <div class="forecast-icon">${P0(F.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(F.temperature||F.temp||F.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}renderDailyForecast(){let k=this.getWeekForecast();if(k.length===0)return G`<div style="opacity: 0.6; font-size: 14px;">${y.t("forecast_unavailable")}</div>`;return G`
      <div class="forecast-scroll">
        ${k.map((F)=>G`
          <div class="forecast-item">
            <div class="forecast-time">${Y1(F.datetime,y.lang)}</div>
            <div class="forecast-icon">${P0(F.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(F.temperature||F.temp||F.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}convertWindSpeed(k){if(k==null)return null;if(this.config.windSpeedUnit==="kmh")return Math.round(k*3.6*10)/10;return k}getWindSpeedUnit(){return this.config.windSpeedUnit==="kmh"?y.t("wind_unit_kmh"):y.t("wind_unit_ms")}formatCurrentTime(){let k=new Date,F=String(k.getHours()).padStart(2,"0"),K=String(k.getMinutes()).padStart(2,"0");return`${F}:${K}`}startClock(){if(!this.config.showClock)return;this.currentTime=this.formatCurrentTime(),this.clockInterval=window.setInterval(()=>{this.currentTime=this.formatCurrentTime()},1000)}render(){if(!this.hass)return G`<div>No Home Assistant connection</div>`;let k=this.getWeatherData(),F=this.hass.states[this.config.entity],K=V0(F,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),Z=this._testTimeOfDay||z0(K),_=`weather-card ${Z.type}`,N=this.config.height?`${this.config.height}px`:"200px",W=L1(Z),q=W?`background: linear-gradient(135deg, rgb(${W.start.r}, ${W.start.g}, ${W.start.b}), rgb(${W.end.r}, ${W.end.g}, ${W.end.b}));`:"",Q=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:X.overlayOpacity};`;return G`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${_}" style="min-height: ${N}; ${q}; ${Q} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name!==void 0?G`
              <div class="header">
                <div class="location">${this.config.name||k.friendlyName}</div>
              </div>
            `:""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${y.t(k.condition)}</div>
                <div class="temperature">${k.temperature!=null?Math.round(k.temperature)+"°":y.t("no_data")}</div>
                ${this.config.showMinTemp&&k.templow?G`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${Math.round(k.templow)}°</span>
                  </div>
                `:""}
                ${this.config.showFeelsLike&&k.apparentTemperature?G`
                  <div class="feels-like">${y.t("feels_like")} ${Math.round(k.apparentTemperature)}°</div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="top"?G`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
              <div class="info-grid">
                ${this.config.showHumidity&&k.humidity!=null?G`
                  <div class="info-item">
                    <span class="info-icon">${a("humidity")}</span>
                    <span>${k.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&K.hasSunData&&K.sunrise?G`
                  <div class="info-item">
                    <span class="info-icon">${a("sunrise")}</span>
                    <span>${x0(K.sunrise)}</span>
                  </div>
                `:""}
                ${this.config.showWind&&k.windSpeed!=null?G`
                  ${this.config.showWindDirection&&k.windBearing!=null?G`
                    <div class="info-item">
                      <span class="info-icon">${V1(k.windBearing)}</span>
                      <span>${this.convertWindSpeed(k.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&k.windGust?` / ${this.convertWindSpeed(k.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:G`
                    <div class="info-item">
                      <span class="info-icon">${a("wind")}</span>
                      <span>${this.convertWindSpeed(k.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&k.windGust?` / ${this.convertWindSpeed(k.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&K.hasSunData&&K.sunset?G`
                  <div class="info-item">
                    <span class="info-icon">${a("sunset")}</span>
                    <span>${x0(K.sunset)}</span>
                  </div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="details"?G`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            ${this.config.showHourlyForecast?G`
              <div class="forecast-container">
                <div class="forecast-title">${y.t("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
            ${this.config.showDailyForecast?G`
              <div class="forecast-container">
                <div class="forecast-title">${y.t("daily_forecast_title")}</div>
                ${this.renderDailyForecast()}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(k){if(!k.entity)throw Error("Please define a weather entity");let F=k.show_hourly_forecast??k.show_forecast;if(this.config={type:"custom:animated-weather-card",entity:k.entity,icons_path:k.icons_path,name:k.name,height:k.height||X.height,showFeelsLike:k.show_feels_like!==!1,showWind:k.show_wind!==!1,showWindGust:k.show_wind_gust!==!1,showWindDirection:k.show_wind_direction!==!1,showHumidity:k.show_humidity!==!1,showMinTemp:k.show_min_temp!==!1,showForecast:k.show_forecast===!0,showHourlyForecast:F===!0,showDailyForecast:k.show_daily_forecast===!0,hourlyForecastHours:k.hourly_forecast_hours??X.hourlyForecastHours,dailyForecastDays:k.daily_forecast_days??X.dailyForecastDays,showSunriseSunset:k.show_sunrise_sunset!==!1,showClock:k.show_clock===!0,clockPosition:k.clock_position||X.clockPosition,overlayOpacity:k.overlay_opacity!==void 0?k.overlay_opacity:X.overlayOpacity,language:k.language||X.language,windSpeedUnit:k.wind_speed_unit||X.windSpeedUnit,sunriseEntity:k.sunrise_entity||null,sunsetEntity:k.sunset_entity||null,templowAttribute:k.templow_attribute||null,tapAction:k.tap_action||{action:"more-info"},holdAction:k.hold_action||{action:"none"},doubleTapAction:k.double_tap_action||{action:"none"}},this.config.language)y.setLanguage(this.config.language)}handleAction(k){if(!k||!this.hass)return;switch(k.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:k.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:k.entity||this.config.entity});break;case"call-service":if(k.service){let[K,Z]=k.service.split(".");this.hass.callService(K,Z,k.service_data||{})}break;case"navigate":if(k.navigation_path)window.history.pushState(null,"",k.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(k.url_path)window.open(k.url_path);break;case"none":default:break}}fireEvent(k,F={}){let K=new CustomEvent(k,{detail:F,bubbles:!0,composed:!0});this.dispatchEvent(K)}handleTap(k){if(k.target.closest(".forecast-item")||k.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(k),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.config.tapAction),this.lastTap=null},300)}handlePointerDown(k){this.holdTimer=window.setTimeout(()=>{this.handleHold(k),this.holdFired=!0},this.holdDelay)}handlePointerUp(k){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)k.preventDefault(),k.stopPropagation(),this.holdFired=!1}handleHold(k){this.handleAction(this.config.holdAction)}handleDoubleTap(k){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}O([s({type:Object})],D0.prototype,"hass",void 0),O([s({type:Object})],D0.prototype,"config",void 0),O([W0()],D0.prototype,"currentTime",void 0),O([W0()],D0.prototype,"hourlyForecast",void 0),O([W0()],D0.prototype,"dailyForecast",void 0);var z1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T1=(k)=>(...F)=>({["_$litDirective$"]:k,values:F});class c0{constructor(k){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(k,F,K){this.__part=k,this._$parent=F,this.__attributeIndex=K}_$resolve(k,F){return this.update(k,F)}update(k,F){return this.render(...F)}}var xk=!0,R2=xk&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(k)=>k;var C1=(k)=>k.strings===void 0;var Vk=!0,e=(k,F)=>{let K=k._$disconnectableChildren;if(K===void 0)return!1;for(let Z of K)Z._$notifyDirectiveConnectionChanged?.(F,!1),e(Z,F);return!0},$0=(k)=>{let F,K;do{if((F=k._$parent)===void 0)break;K=F._$disconnectableChildren,K.delete(k),k=F}while(K?.size===0)},S1=(k)=>{for(let F;F=k._$parent;k=F){let K=F._$disconnectableChildren;if(K===void 0)F._$disconnectableChildren=K=new Set;else if(K.has(k))break;K.add(k),Ck(F)}};function zk(k){if(this._$disconnectableChildren!==void 0)$0(this),this._$parent=k,S1(this);else this._$parent=k}function Tk(k,F=!1,K=0){let Z=this._$committedValue,_=this._$disconnectableChildren;if(_===void 0||_.size===0)return;if(F){if(Array.isArray(Z))for(let N=K;N<Z.length;N++)e(Z[N],!1),$0(Z[N]);else if(Z!=null)e(Z,!1),$0(Z)}else e(this,k)}var Ck=(k)=>{if(k.type==z1.CHILD)k._$notifyConnectionChanged??=Tk,k._$reparentDisconnectables??=zk};class O0 extends c0{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(k,F,K){super._$initialize(k,F,K),S1(this),this.isConnected=k._$isConnected}["_$notifyDirectiveConnectionChanged"](k,F=!0){if(k!==this.isConnected)if(this.isConnected=k,k)this.reconnected?.();else this.disconnected?.();if(F)e(this,k),$0(this)}setValue(k){if(C1(this.__part))this.__part._$setValue(k,this);else{if(Vk&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let F=[...this.__part._$committedValue];F[this.__attributeIndex]=k,this.__part._$setValue(F,this,0)}}disconnected(){}reconnected(){}}class I1 extends O0{_key="";_onLangChange=null;render(k){return this._key=k,y.t(k)}reconnected(){this._onLangChange=()=>{this.setValue(y.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var Sk=T1(I1);try{customElements.define("dynamic-weather-card",D0),console.log(`%cDynamic Weather Card %c${Q1}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let k={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(k)}catch(k){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",k)}export{Sk as t,Y0 as resolveLanguage,y as i18n};
