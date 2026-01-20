var O=function(k,_,F,K){var Z=arguments.length,N=Z<3?_:K===null?K=Object.getOwnPropertyDescriptor(_,F):K,W;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")N=Reflect.decorate(k,_,F,K);else for(var f=k.length-1;f>=0;f--)if(W=k[f])N=(Z<3?W(N):Z>3?W(_,F,N):W(_,F))||N;return Z>3&&N&&Object.defineProperty(_,F,N),N};var t=globalThis,$0=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B0=Symbol(),d0=new WeakMap;class J0{constructor(k,_,F){if(this._$cssResult$=!0,F!==B0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=k,this._strings=_}get styleSheet(){let k=this._styleSheet,_=this._strings;if($0&&k===void 0){let F=_!==void 0&&_.length===1;if(F)k=d0.get(_);if(k===void 0){if((this._styleSheet=k=new CSSStyleSheet).replaceSync(this.cssText),F)d0.set(_,k)}}return k}toString(){return this.cssText}}var Pk=(k)=>{if(k._$cssResult$===!0)return k.cssText;else if(typeof k==="number")return k;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${k}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Dk=(k)=>new J0(typeof k==="string"?k:String(k),void 0,B0),l0=(k,..._)=>{let F=k.length===1?k[0]:_.reduce((K,Z,N)=>K+Pk(Z)+k[N+1],k[0]);return new J0(F,k,B0)},E0=(k,_)=>{if($0)k.adoptedStyleSheets=_.map((F)=>F instanceof CSSStyleSheet?F:F.styleSheet);else for(let F of _){let K=document.createElement("style"),Z=t.litNonce;if(Z!==void 0)K.setAttribute("nonce",Z);K.textContent=F.cssText,k.appendChild(K)}},ck=(k)=>{let _="";for(let F of k.cssRules)_+=F.cssText;return Dk(_)},Q0=$0?(k)=>k:(k)=>k instanceof CSSStyleSheet?ck(k):k;var{is:Ok,defineProperty:dk,getOwnPropertyDescriptor:u0,getOwnPropertyNames:lk,getOwnPropertySymbols:Ek,getPrototypeOf:h0}=Object,uk=!1,j=globalThis;if(uk)j.customElements??=customElements;var g=!0,Y,o0=j.trustedTypes,hk=o0?o0.emptyScript:"",p0=g?j.reactiveElementPolyfillSupportDevMode:j.reactiveElementPolyfillSupport;if(g)j.litIssuedWarnings??=new Set,Y=(k,_)=>{if(_+=` See https://lit.dev/msg/${k} for more information.`,!j.litIssuedWarnings.has(_)&&!j.litIssuedWarnings.has(k))console.warn(_),j.litIssuedWarnings.add(_)},queueMicrotask(()=>{if(Y("dev-mode","Lit is in dev mode. Not recommended for production!"),j.ShadyDOM?.inUse&&p0===void 0)Y("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var ok=g?(k)=>{if(!j.emitLitDebugLogEvents)return;j.dispatchEvent(new CustomEvent("lit-debug",{detail:k}))}:void 0,d=(k,_)=>k,E={toAttribute(k,_){switch(_){case Boolean:k=k?hk:null;break;case Object:case Array:k=k==null?k:JSON.stringify(k);break}return k},fromAttribute(k,_){let F=k;switch(_){case Boolean:F=k!==null;break;case Number:F=k===null?null:Number(k);break;case Object:case Array:try{F=JSON.parse(k)}catch(K){F=null}break}return F}},k0=(k,_)=>!Ok(k,_),v0={attribute:!0,type:String,converter:E,reflect:!1,useDefault:!1,hasChanged:k0};Symbol.metadata??=Symbol("metadata");j.litPropertyMetadata??=new WeakMap;class L extends HTMLElement{static addInitializer(k){this.__prepare(),(this._initializers??=[]).push(k)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(k,_=v0){if(_.state)_.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(k))_=Object.create(_),_.wrapped=!0;if(this.elementProperties.set(k,_),!_.noAccessor){let F=g?Symbol.for(`${String(k)} (@property() cache)`):Symbol(),K=this.getPropertyDescriptor(k,F,_);if(K!==void 0)dk(this.prototype,k,K)}}static getPropertyDescriptor(k,_,F){let{get:K,set:Z}=u0(this.prototype,k)??{get(){return this[_]},set(N){this[_]=N}};if(g&&K==null){if("value"in(u0(this.prototype,k)??{}))throw Error(`Field ${JSON.stringify(String(k))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);Y("reactive-property-without-getter",`Field ${JSON.stringify(String(k))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:K,set(N){let W=K?.call(this);Z?.call(this,N),this.requestUpdate(k,W,F)},configurable:!0,enumerable:!0}}static getPropertyOptions(k){return this.elementProperties.get(k)??v0}static __prepare(){if(this.hasOwnProperty(d("elementProperties",this)))return;let k=h0(this);if(k.finalize(),k._initializers!==void 0)this._initializers=[...k._initializers];this.elementProperties=new Map(k.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(d("properties",this))){let _=this.properties,F=[...lk(_),...Ek(_)];for(let K of F)this.createProperty(K,_[K])}let k=this[Symbol.metadata];if(k!==null){let _=litPropertyMetadata.get(k);if(_!==void 0)for(let[F,K]of _)this.elementProperties.set(F,K)}this.__attributeToPropertyMap=new Map;for(let[_,F]of this.elementProperties){let K=this.__attributeNameForProperty(_,F);if(K!==void 0)this.__attributeToPropertyMap.set(K,_)}if(this.elementStyles=this.finalizeStyles(this.styles),g){if(this.hasOwnProperty("createProperty"))Y("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))Y("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(k){let _=[];if(Array.isArray(k)){let F=new Set(k.flat(1/0).reverse());for(let K of F)_.unshift(Q0(K))}else if(k!==void 0)_.push(Q0(k));return _}static __attributeNameForProperty(k,_){let F=_.attribute;return F===!1?void 0:typeof F==="string"?F:typeof k==="string"?k.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((k)=>this.enableUpdating=k),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((k)=>k(this))}addController(k){if((this.__controllers??=new Set).add(k),this.renderRoot!==void 0&&this.isConnected)k.hostConnected?.()}removeController(k){this.__controllers?.delete(k)}__saveInstanceProperties(){let k=new Map,_=this.constructor.elementProperties;for(let F of _.keys())if(this.hasOwnProperty(F))k.set(F,this[F]),delete this[F];if(k.size>0)this.__instanceProperties=k}createRenderRoot(){let k=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E0(k,this.constructor.elementStyles),k}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((k)=>k.hostConnected?.())}enableUpdating(k){}disconnectedCallback(){this.__controllers?.forEach((k)=>k.hostDisconnected?.())}attributeChangedCallback(k,_,F){this._$attributeToProperty(k,F)}__propertyToAttribute(k,_){let K=this.constructor.elementProperties.get(k),Z=this.constructor.__attributeNameForProperty(k,K);if(Z!==void 0&&K.reflect===!0){let W=(K.converter?.toAttribute!==void 0?K.converter:E).toAttribute(_,K.type);if(g&&this.constructor.enabledWarnings.includes("migration")&&W===void 0)Y("undefined-attribute-value",`The attribute value for the ${k} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=k,W==null)this.removeAttribute(Z);else this.setAttribute(Z,W);this.__reflectingProperty=null}}_$attributeToProperty(k,_){let F=this.constructor,K=F.__attributeToPropertyMap.get(k);if(K!==void 0&&this.__reflectingProperty!==K){let Z=F.getPropertyOptions(K),N=typeof Z.converter==="function"?{fromAttribute:Z.converter}:Z.converter?.fromAttribute!==void 0?Z.converter:E;this.__reflectingProperty=K;let W=N.fromAttribute(_,Z.type);this[K]=W??this.__defaultValues?.get(K)??W,this.__reflectingProperty=null}}requestUpdate(k,_,F,K=!1,Z){if(k!==void 0){if(g&&k instanceof Event)Y("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let N=this.constructor;if(K===!1)Z=this[k];if(F??=N.getPropertyOptions(k),(F.hasChanged??k0)(Z,_)||F.useDefault&&F.reflect&&Z===this.__defaultValues?.get(k)&&!this.hasAttribute(N.__attributeNameForProperty(k,F)))this._$changeProperty(k,_,F);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(k,_,{useDefault:F,reflect:K,wrapped:Z},N){if(F&&!(this.__defaultValues??=new Map).has(k)){if(this.__defaultValues.set(k,N??_??this[k]),Z!==!0||N!==void 0)return}if(!this._$changedProperties.has(k)){if(!this.hasUpdated&&!F)_=void 0;this._$changedProperties.set(k,_)}if(K===!0&&this.__reflectingProperty!==k)(this.__reflectingProperties??=new Set).add(k)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(_){Promise.reject(_)}let k=this.scheduleUpdate();if(k!=null)await k;return!this.isUpdatePending}scheduleUpdate(){let k=this.performUpdate();if(g&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof k?.then==="function")Y("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return k}performUpdate(){if(!this.isUpdatePending)return;if(ok?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),g){let Z=[...this.constructor.elementProperties.keys()].filter((N)=>this.hasOwnProperty(N)&&(N in h0(this)));if(Z.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${Z.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[K,Z]of this.__instanceProperties)this[K]=Z;this.__instanceProperties=void 0}let F=this.constructor.elementProperties;if(F.size>0)for(let[K,Z]of F){let{wrapped:N}=Z,W=this[K];if(N===!0&&!this._$changedProperties.has(K)&&W!==void 0)this._$changeProperty(K,void 0,Z,W)}}let k=!1,_=this._$changedProperties;try{if(k=this.shouldUpdate(_),k)this.willUpdate(_),this.__controllers?.forEach((F)=>F.hostUpdate?.()),this.update(_);else this.__markUpdated()}catch(F){throw k=!1,this.__markUpdated(),F}if(k)this._$didUpdate(_)}willUpdate(k){}_$didUpdate(k){if(this.__controllers?.forEach((_)=>_.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(k);if(this.updated(k),g&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))Y("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(k){return!0}update(k){this.__reflectingProperties&&=this.__reflectingProperties.forEach((_)=>this.__propertyToAttribute(_,this[_])),this.__markUpdated()}updated(k){}firstUpdated(k){}}L.elementStyles=[];L.shadowRootOptions={mode:"open"};L[d("elementProperties",L)]=new Map;L[d("finalized",L)]=new Map;p0?.({ReactiveElement:L});if(g){L.enabledWarnings=["change-in-update","async-perform-update"];let k=function(_){if(!_.hasOwnProperty(d("enabledWarnings",_)))_.enabledWarnings=_.enabledWarnings.slice()};L.enableWarning=function(_){if(k(this),!this.enabledWarnings.includes(_))this.enabledWarnings.push(_)},L.disableWarning=function(_){k(this);let F=this.enabledWarnings.indexOf(_);if(F>=0)this.enabledWarnings.splice(F,1)}}(j.reactiveElementVersions??=[]).push("2.1.2");if(g&&j.reactiveElementVersions.length>1)queueMicrotask(()=>{Y("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var U=globalThis,B=(k)=>{if(!U.emitLitDebugLogEvents)return;U.dispatchEvent(new CustomEvent("lit-debug",{detail:k}))},vk=0,o;U.litIssuedWarnings??=new Set,o=(k,_)=>{if(_+=k?` See https://lit.dev/msg/${k} for more information.`:"",!U.litIssuedWarnings.has(_)&&!U.litIssuedWarnings.has(k))console.warn(_),U.litIssuedWarnings.add(_)},queueMicrotask(()=>{o("dev-mode","Lit is in dev mode. Not recommended for production!")});var x=U.ShadyDOM?.inUse&&U.ShadyDOM?.noPatch===!0?U.ShadyDOM.wrap:(k)=>k,_0=U.trustedTypes,m0=_0?_0.createPolicy("lit-html",{createHTML:(k)=>k}):void 0,pk=(k)=>k,N0=(k,_,F)=>pk,mk=(k)=>{if(c!==N0)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");c=k},ik=()=>{c=N0},M0=(k,_,F)=>{return c(k,_,F)},t0="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,kk="?"+z,rk=`<${kk}>`,P=document,v=()=>P.createComment(""),p=(k)=>k===null||typeof k!="object"&&typeof k!="function",A0=Array.isArray,sk=(k)=>A0(k)||typeof k?.[Symbol.iterator]==="function",G0=`[ 	
\f\r]`,nk=`[^ 	
\f\r"'\`<>=]`,ak=`[^\\s"'>=/]`,u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,i0=1,H0=2,ek=3,r0=/-->/g,s0=/>/g,w=new RegExp(`>|${G0}(?:(${ak}+)(${G0}*=${G0}*(?:${nk}|("|')|))|$)`,"g"),tk=0,n0=1,k1=2,a0=3,y0=/'/g,b0=/"/g,_k=/^(?:script|style|textarea|title)$/i,_1=1,F0=2,K0=3,j0=1,Z0=2,F1=3,K1=4,Z1=5,g0=6,N1=7,L0=(k)=>(_,...F)=>{if(_.some((K)=>K===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(F.some((K)=>K?._$litStatic$))o("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:k,strings:_,values:F}},H=L0(_1),Q=L0(F0),c1=L0(K0),D=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),e0=new WeakMap,R=P.createTreeWalker(P,129),c=N0;function Fk(k,_){if(!A0(k)||!k.hasOwnProperty("raw")){let F="invalid template strings array";throw F=`
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
`),Error(F)}return m0!==void 0?m0.createHTML(_):_}var W1=(k,_)=>{let F=k.length-1,K=[],Z=_===F0?"<svg>":_===K0?"<math>":"",N,W=u;for(let q=0;q<F;q++){let J=k[q],$=-1,y,V=0,M;while(V<J.length){if(W.lastIndex=V,M=W.exec(J),M===null)break;if(V=W.lastIndex,W===u){if(M[i0]==="!--")W=r0;else if(M[i0]!==void 0)W=s0;else if(M[H0]!==void 0){if(_k.test(M[H0]))N=new RegExp(`</${M[H0]}`,"g");W=w}else if(M[ek]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(W===w)if(M[tk]===">")W=N??u,$=-1;else if(M[n0]===void 0)$=-2;else $=W.lastIndex-M[k1].length,y=M[n0],W=M[a0]===void 0?w:M[a0]==='"'?b0:y0;else if(W===b0||W===y0)W=w;else if(W===r0||W===s0)W=u;else W=w,N=void 0}console.assert($===-1||W===w||W===y0||W===b0,"unexpected parse state B");let C=W===w&&k[q+1].startsWith("/>")?" ":"";Z+=W===u?J+rk:$>=0?(K.push(y),J.slice(0,$)+t0+J.slice($))+z+C:J+z+($===-2?q:C)}let f=Z+(k[F]||"<?>")+(_===F0?"</svg>":_===K0?"</math>":"");return[Fk(k,f),K]};class m{constructor({strings:k,["_$litType$"]:_},F){this.parts=[];let K,Z=0,N=0,W=k.length-1,f=this.parts,[q,J]=W1(k,_);if(this.el=m.createElement(q,F),R.currentNode=this.el.content,_===F0||_===K0){let $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}while((K=R.nextNode())!==null&&f.length<W){if(K.nodeType===1){{let $=K.localName;if(/^(?:textarea|template)$/i.test($)&&K.innerHTML.includes(z)){let y=`Expressions are not supported inside \`${$}\` elements. See https://lit.dev/msg/expression-in-${$} for more information.`;if($==="template")throw Error(y);else o("",y)}}if(K.hasAttributes()){for(let $ of K.getAttributeNames())if($.endsWith(t0)){let y=J[N++],M=K.getAttribute($).split(z),C=/([.?@])?(.*)/.exec(y);f.push({type:j0,index:Z,name:C[2],strings:M,ctor:C[1]==="."?Zk:C[1]==="?"?Nk:C[1]==="@"?Wk:r}),K.removeAttribute($)}else if($.startsWith(z))f.push({type:g0,index:Z}),K.removeAttribute($)}if(_k.test(K.tagName)){let $=K.textContent.split(z),y=$.length-1;if(y>0){K.textContent=_0?_0.emptyScript:"";for(let V=0;V<y;V++)K.append($[V],v()),R.nextNode(),f.push({type:Z0,index:++Z});K.append($[y],v())}}}else if(K.nodeType===8)if(K.data===kk)f.push({type:Z0,index:Z});else{let y=-1;while((y=K.data.indexOf(z,y+1))!==-1)f.push({type:N1,index:Z}),y+=z.length-1}Z++}if(J.length!==N)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+k.join("${...}")+"`");B&&B({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:k})}static createElement(k,_){let F=P.createElement("template");return F.innerHTML=k,F}}function l(k,_,F=k,K){if(_===D)return _;let Z=K!==void 0?F.__directives?.[K]:F.__directive,N=p(_)?void 0:_._$litDirective$;if(Z?.constructor!==N){if(Z?._$notifyDirectiveConnectionChanged?.(!1),N===void 0)Z=void 0;else Z=new N(k),Z._$initialize(k,F,K);if(K!==void 0)(F.__directives??=[])[K]=Z;else F.__directive=Z}if(Z!==void 0)_=l(k,Z._$resolve(k,_.values),Z,K);return _}class Kk{constructor(k,_){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=k,this._$parent=_}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(k){let{el:{content:_},parts:F}=this._$template,K=(k?.creationScope??P).importNode(_,!0);R.currentNode=K;let Z=R.nextNode(),N=0,W=0,f=F[0];while(f!==void 0){if(N===f.index){let q;if(f.type===Z0)q=new i(Z,Z.nextSibling,this,k);else if(f.type===j0)q=new f.ctor(Z,f.name,f.strings,this,k);else if(f.type===g0)q=new fk(Z,this,k);this._$parts.push(q),f=F[++W]}if(N!==f?.index)Z=R.nextNode(),N++}return R.currentNode=P,K}_update(k){let _=0;for(let F of this._$parts){if(F!==void 0)if(B&&B({kind:"set part",part:F,value:k[_],valueIndex:_,values:k,templateInstance:this}),F.strings!==void 0)F._$setValue(k,F,_),_+=F.strings.length-2;else F._$setValue(k[_]);_++}}}class i{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(k,_,F,K){this.type=Z0,this._$committedValue=b,this._$disconnectableChildren=void 0,this._$startNode=k,this._$endNode=_,this._$parent=F,this.options=K,this.__isConnected=K?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let k=x(this._$startNode).parentNode,_=this._$parent;if(_!==void 0&&k?.nodeType===11)k=_.parentNode;return k}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(k,_=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(k=l(this,k,_),p(k)){if(k===b||k==null||k===""){if(this._$committedValue!==b)B&&B({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=b}else if(k!==this._$committedValue&&k!==D)this._commitText(k)}else if(k._$litType$!==void 0)this._commitTemplateResult(k);else if(k.nodeType!==void 0){if(this.options?.host===k){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",k,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(k)}else if(sk(k))this._commitIterable(k);else this._commitText(k)}_insert(k){return x(x(this._$startNode).parentNode).insertBefore(k,this._$endNode)}_commitNode(k){if(this._$committedValue!==k){if(this._$clear(),c!==N0){let _=this._$startNode.parentNode?.nodeName;if(_==="STYLE"||_==="SCRIPT"){let F="Forbidden";if(_==="STYLE")F="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else F="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(F)}}B&&B({kind:"commit node",start:this._$startNode,parent:this._$parent,value:k,options:this.options}),this._$committedValue=this._insert(k)}}_commitText(k){if(this._$committedValue!==b&&p(this._$committedValue)){let _=x(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=M0(_,"data","property");k=this._textSanitizer(k),B&&B({kind:"commit text",node:_,value:k,options:this.options}),_.data=k}else{let _=P.createTextNode("");if(this._commitNode(_),this._textSanitizer===void 0)this._textSanitizer=M0(_,"data","property");k=this._textSanitizer(k),B&&B({kind:"commit text",node:_,value:k,options:this.options}),_.data=k}this._$committedValue=k}_commitTemplateResult(k){let{values:_,["_$litType$"]:F}=k,K=typeof F==="number"?this._$getTemplate(k):(F.el===void 0&&(F.el=m.createElement(Fk(F.h,F.h[0]),this.options)),F);if(this._$committedValue?._$template===K)B&&B({kind:"template updating",template:K,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:_}),this._$committedValue._update(_);else{let Z=new Kk(K,this),N=Z._clone(this.options);B&&B({kind:"template instantiated",template:K,instance:Z,parts:Z._$parts,options:this.options,fragment:N,values:_}),Z._update(_),B&&B({kind:"template instantiated and updated",template:K,instance:Z,parts:Z._$parts,options:this.options,fragment:N,values:_}),this._commitNode(N),this._$committedValue=Z}}_$getTemplate(k){let _=e0.get(k.strings);if(_===void 0)e0.set(k.strings,_=new m(k));return _}_commitIterable(k){if(!A0(this._$committedValue))this._$committedValue=[],this._$clear();let _=this._$committedValue,F=0,K;for(let Z of k){if(F===_.length)_.push(K=new i(this._insert(v()),this._insert(v()),this,this.options));else K=_[F];K._$setValue(Z),F++}if(F<_.length)this._$clear(K&&x(K._$endNode).nextSibling,F),_.length=F}_$clear(k=x(this._$startNode).nextSibling,_){this._$notifyConnectionChanged?.(!1,!0,_);while(k!==this._$endNode){let F=x(k).nextSibling;x(k).remove(),k=F}}setConnected(k){if(this._$parent===void 0)this.__isConnected=k,this._$notifyConnectionChanged?.(k);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class r{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(k,_,F,K,Z){if(this.type=j0,this._$committedValue=b,this._$disconnectableChildren=void 0,this.element=k,this.name=_,this._$parent=K,this.options=Z,F.length>2||F[0]!==""||F[1]!=="")this._$committedValue=Array(F.length-1).fill(new String),this.strings=F;else this._$committedValue=b;this._sanitizer=void 0}_$setValue(k,_=this,F,K){let Z=this.strings,N=!1;if(Z===void 0){if(k=l(this,k,_,0),N=!p(k)||k!==this._$committedValue&&k!==D,N)this._$committedValue=k}else{let W=k;k=Z[0];let f,q;for(f=0;f<Z.length-1;f++){if(q=l(this,W[F+f],_,f),q===D)q=this._$committedValue[f];if(N||=!p(q)||q!==this._$committedValue[f],q===b)k=b;else if(k!==b)k+=(q??"")+Z[f+1];this._$committedValue[f]=q}}if(N&&!K)this._commitValue(k)}_commitValue(k){if(k===b)x(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=c(this.element,this.name,"attribute");k=this._sanitizer(k??""),B&&B({kind:"commit attribute",element:this.element,name:this.name,value:k,options:this.options}),x(this.element).setAttribute(this.name,k??"")}}}class Zk extends r{constructor(){super(...arguments);this.type=F1}_commitValue(k){if(this._sanitizer===void 0)this._sanitizer=c(this.element,this.name,"property");k=this._sanitizer(k),B&&B({kind:"commit property",element:this.element,name:this.name,value:k,options:this.options}),this.element[this.name]=k===b?void 0:k}}class Nk extends r{constructor(){super(...arguments);this.type=K1}_commitValue(k){B&&B({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(k&&k!==b),options:this.options}),x(this.element).toggleAttribute(this.name,!!k&&k!==b)}}class Wk extends r{constructor(k,_,F,K,Z){super(k,_,F,K,Z);if(this.type=Z1,this.strings!==void 0)throw Error(`A \`<${k.localName}>\` has a \`@${_}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(k,_=this){if(k=l(this,k,_,0)??b,k===D)return;let F=this._$committedValue,K=k===b&&F!==b||k.capture!==F.capture||k.once!==F.once||k.passive!==F.passive,Z=k!==b&&(F===b||K);if(B&&B({kind:"commit event listener",element:this.element,name:this.name,value:k,options:this.options,removeListener:K,addListener:Z,oldListener:F}),K)this.element.removeEventListener(this.name,this,F);if(Z)this.element.addEventListener(this.name,this,k);this._$committedValue=k}handleEvent(k){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,k);else this._$committedValue.handleEvent(k)}}class fk{constructor(k,_,F){this.element=k,this.type=g0,this._$disconnectableChildren=void 0,this._$parent=_,this.options=F}get _$isConnected(){return this._$parent._$isConnected}_$setValue(k){B&&B({kind:"commit to element binding",element:this.element,value:k,options:this.options}),l(this,k)}}var f1=U.litHtmlPolyfillSupportDevMode;f1?.(m,i);(U.litHtmlVersions??=[]).push("3.3.2");if(U.litHtmlVersions.length>1)queueMicrotask(()=>{o("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var h=(k,_,F)=>{if(_==null)throw TypeError(`The container to render into may not be ${_}`);let K=vk++,Z=F?.renderBefore??_,N=Z._$litPart$;if(B&&B({kind:"begin render",id:K,value:k,container:_,options:F,part:N}),N===void 0){let W=F?.renderBefore??null;Z._$litPart$=N=new i(_.insertBefore(v(),W),W,void 0,F??{})}return N._$setValue(k),B&&B({kind:"end render",id:K,value:k,container:_,options:F,part:N}),N};h.setSanitizer=mk,h.createSanitizer=M0,h._testOnlyClearSanitizerFactoryDoNotCallOrElse=ik;var q1=(k,_)=>k,U0=!0,S=globalThis,qk;if(U0)S.litIssuedWarnings??=new Set,qk=(k,_)=>{if(_+=` See https://lit.dev/msg/${k} for more information.`,!S.litIssuedWarnings.has(_)&&!S.litIssuedWarnings.has(k))console.warn(_),S.litIssuedWarnings.add(_)};class I extends L{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let k=super.createRenderRoot();return this.renderOptions.renderBefore??=k.firstChild,k}update(k){let _=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(k),this.__childPart=h(_,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return D}}I._$litElement$=!0;I[q1("finalized",I)]=!0;S.litElementHydrateSupport?.({LitElement:I});var $1=U0?S.litElementPolyfillSupportDevMode:S.litElementPolyfillSupport;$1?.({LitElement:I});(S.litElementVersions??=[]).push("4.2.2");if(U0&&S.litElementVersions.length>1)queueMicrotask(()=>{qk("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var $k=!0,Bk;if($k)globalThis.litIssuedWarnings??=new Set,Bk=(k,_)=>{if(_+=` See https://lit.dev/msg/${k} for more information.`,!globalThis.litIssuedWarnings.has(_)&&!globalThis.litIssuedWarnings.has(k))console.warn(_),globalThis.litIssuedWarnings.add(_)};var B1=(k,_,F)=>{let K=_.hasOwnProperty(F);return _.constructor.createProperty(F,k),K?Object.getOwnPropertyDescriptor(_,F):void 0},J1={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k0},Q1=(k=J1,_,F)=>{let{kind:K,metadata:Z}=F;if($k&&Z==null)Bk("missing-class-metadata",`The class ${_} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let N=globalThis.litPropertyMetadata.get(Z);if(N===void 0)globalThis.litPropertyMetadata.set(Z,N=new Map);if(K==="setter")k=Object.create(k),k.wrapped=!0;if(N.set(F.name,k),K==="accessor"){let{name:W}=F;return{set(f){let q=_.get.call(this);_.set.call(this,f),this.requestUpdate(W,q,k,!0,f)},init(f){if(f!==void 0)this._$changeProperty(W,void 0,k,f);return f}}}else if(K==="setter"){let{name:W}=F;return function(f){let q=this[W];_.call(this,f),this.requestUpdate(W,q,k,!0,f)}}throw Error(`Unsupported decorator location: ${K}`)};function s(k){return(_,F)=>{return typeof F==="object"?Q1(k,_,F):B1(k,_,F)}}function W0(k){return s({...k,state:!0,attribute:!1})}var G1=!0,H1;if(G1)globalThis.litIssuedWarnings??=new Set,H1=(k,_)=>{if(_+=k?` See https://lit.dev/msg/${k} for more information.`:"",!globalThis.litIssuedWarnings.has(_)&&!globalThis.litIssuedWarnings.has(k))console.warn(_),globalThis.litIssuedWarnings.add(_)};var Jk="0.4.0",T={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},Qk=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],X={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var y1={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Gk=y1;var b1={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Hk=b1;var M1={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},yk=M1;var A1={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},bk=A1;var j1={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian"}}},Mk=j1;var g1={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Ak=g1;var L1={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},jk=L1;var X0={en:Mk,ru:Gk,de:Hk,nl:yk,fr:bk,es:Ak,it:jk};class gk{lang="en";fallback="en";t(k){let _=k.split("."),F=_.reduce((Z,N)=>Z?.[N],X0[this.lang]);if(F!=null)return F;return _.reduce((Z,N)=>Z?.[N],X0[this.fallback])??k}setLanguage(k){if(!X0[k]||this.lang===k)return;this.lang=k,window.dispatchEvent(new CustomEvent("language-changed"))}}var G=new gk;window.i18n=G;var Y0=({configLang:k,hassLang:_}={})=>{if(k&&k!=="auto")return k;if(_)return _;if(typeof navigator<"u"&&navigator.language){let F=navigator.language.toLowerCase();if(F.startsWith("ru"))return"ru";if(F.startsWith("de"))return"de";if(F.startsWith("nl"))return"nl";if(F.startsWith("fr"))return"fr";if(F.startsWith("it"))return"it";if(F.startsWith("es"))return"es"}return"en"};function U1(){let k=new Date,_=k.getHours(),F=k.getMinutes(),K=_*60+F;if(K>=T.SUNRISE_START&&K<T.SUNRISE_END)return{type:"sunrise",progress:(K-T.SUNRISE_START)/120};if(K>=T.SUNRISE_END&&K<T.DAY_END)return{type:"day",progress:(K-T.SUNRISE_END)/600};if(K>=T.DAY_END&&K<T.SUNSET_END)return{type:"sunset",progress:(K-T.DAY_END)/120};return{type:"night",progress:0}}function Lk(k,_,F){if(k.type==="sunrise"){let K=k.progress;return{x:_*(0.3+K*0.4),y:F*(0.85-K*0.55)}}else if(k.type==="sunset"){let K=k.progress;return{x:_*(0.5+K*0.3),y:F*(0.3+K*0.55)}}else if(k.type==="day"){let Z=k.progress*Math.PI;return{x:_*(0.5+Math.sin(Z)*0.25),y:F*(0.25-Math.sin(Z)*0.1)}}else return{x:_*0.75,y:F*0.3}}function Uk(k){if(k.type==="sunrise"){let _=k.progress,F={r:26,g:26,b:46},K={r:255,g:160,b:122},Z={r:255,g:215,b:0};return{start:{r:Math.round(F.r+(K.r-F.r)*_),g:Math.round(F.g+(K.g-F.g)*_),b:Math.round(F.b+(K.b-F.b)*_)},end:{r:Math.round(F.r+(Z.r-F.r)*_),g:Math.round(F.g+(Z.g-F.g)*_),b:Math.round(F.b+(Z.b-F.b)*_)}}}else if(k.type==="sunset"){let _=k.progress,F={r:255,g:107,b:107},K={r:255,g:160,b:122},Z={r:26,g:26,b:46};return{start:{r:Math.round(F.r+(Z.r-F.r)*_),g:Math.round(F.g+(Z.g-F.g)*_),b:Math.round(F.b+(Z.b-F.b)*_)},end:{r:Math.round(K.r+(Z.r-K.r)*_),g:Math.round(K.g+(Z.g-K.g)*_),b:Math.round(K.b+(Z.b-K.b)*_)}}}return null}function Xk(k){if(!k)return"";return`${new Date(k).getHours().toString().padStart(2,"0")}:00`}function Yk(k,_){if(!k)return"";let F=new Date(k);if(Number.isNaN(F.getTime()))return"";return F.toLocaleDateString(_||void 0,{weekday:"short",day:"numeric",month:"short"})}function x0(k){if(!k)return"";let _=typeof k==="string"?new Date(k):k,F=_.getHours(),K=_.getMinutes();return`${F.toString().padStart(2,"0")}:${K.toString().padStart(2,"0")}`}function V0(k,_=null,F=null,K=null){let Z=null,N=null;if(_&&K&&K.states[_]){let W=K.states[_];Z=new Date(W.state)}if(F&&K&&K.states[F]){let W=K.states[F];N=new Date(W.state)}if(!Z||!N){if(k&&k.attributes){let W=k.attributes;if(!Z&&(W.forecast_sunrise||W.sunrise))Z=new Date(W.forecast_sunrise||W.sunrise);if(!N&&(W.forecast_sunset||W.sunset))N=new Date(W.forecast_sunset||W.sunset)}}if((!Z||!N)&&K&&K.states["sun.sun"]){let f=K.states["sun.sun"].attributes;if(!Z&&f.next_rising)Z=new Date(f.next_rising);if(!N&&f.next_setting)N=new Date(f.next_setting)}return{sunrise:Z,sunset:N,hasSunData:!!(Z&&N)}}function T0(k){let _=new Date;if(k.hasSunData&&k.sunrise&&k.sunset){let F=_.getTime(),K=k.sunrise.getTime(),Z=k.sunset.getTime();if(K-F>43200000)K-=86400000;if(Z-F>43200000)Z-=86400000;let N=K-3600000,W=K+3600000,f=Z-3600000,q=Z+3600000;if(F>=N&&F<W)return{type:"sunrise",progress:(F-N)/(W-N)};if(F>=W&&F<f)return{type:"day",progress:(F-W)/(f-W)};if(F>=f&&F<q)return{type:"sunset",progress:(F-f)/(q-f)};return{type:"night",progress:0}}return U1()}class A{ctx;constructor(k){this.ctx=k}drawCloud(k,_,F,K){let Z=this.ctx.shadowBlur,N=this.ctx.shadowColor,W=this.ctx.globalAlpha;this.ctx.shadowBlur=F*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${K*0.4})`,this.ctx.globalAlpha=K*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:k,y:_,r:F*0.4},{x:k+F*0.35,y:_,r:F*0.5},{x:k+F*0.65,y:_,r:F*0.48},{x:k+F*0.92,y:_,r:F*0.38},{x:k+F*0.18,y:_-F*0.28,r:F*0.38},{x:k+F*0.52,y:_-F*0.32,r:F*0.42},{x:k+F*0.78,y:_-F*0.28,r:F*0.38},{x:k+F*0.32,y:_-F*0.42,r:F*0.32},{x:k+F*0.62,y:_-F*0.48,r:F*0.36},{x:k+F*0.82,y:_-F*0.42,r:F*0.32}].forEach((q)=>{this.ctx.beginPath(),this.ctx.arc(q.x,q.y,q.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=Z,this.ctx.shadowColor=N,this.ctx.globalAlpha=W}drawClouds(k,_,F,K=0.5){let Z=Math.max(2,Math.floor(_/150*K));for(let N=0;N<Z;N++){let W=(k*3+N*150)%(_+200)-100,f=F*(0.2+N%3*0.15)+Math.sin(k*0.2+N)*8,q=40+N%3*15,J=0.6+N%2*0.2;this.drawCloud(W,f,q,J)}}}class C0 extends A{draw(k,_,F,K){let Z=Date.now()*0.001,N=Lk(K,_,F),W=N.x,f=N.y;if(K.type==="day"||K.type==="sunrise"||K.type==="sunset"){if(this.drawSun(W,f,Z),K.type==="sunrise"||K.type==="sunset")this.drawHorizonReflection(W,f,F,Z)}else if(K.type==="night")this.drawNightSky(_,F,Z);this.drawClouds(Z,_,F,0.3)}drawSun(k,_,F){let K=48+Math.sin(F*0.15)*1.5,Z=this.ctx.createRadialGradient(k,_,K*0.3,k,_,K*3.5);Z.addColorStop(0,"rgba(255, 248, 230, 0.25)"),Z.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),Z.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),Z.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),Z.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),Z.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),Z.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=Z,this.ctx.beginPath(),this.ctx.arc(k,_,K*3.5,0,Math.PI*2),this.ctx.fill();let N=this.ctx.createRadialGradient(k,_,K*0.5,k,_,K*2.2);N.addColorStop(0,"rgba(255, 250, 220, 0.35)"),N.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),N.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),N.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),N.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(k,_,K*2.2,0,Math.PI*2),this.ctx.fill();let W=this.ctx.createRadialGradient(k,_,K*0.6,k,_,K*1.6);W.addColorStop(0,"rgba(255, 252, 240, 0.5)"),W.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),W.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),W.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=W,this.ctx.beginPath(),this.ctx.arc(k,_,K*1.6,0,Math.PI*2),this.ctx.fill();let f=this.ctx.createRadialGradient(k-K*0.1,_-K*0.1,0,k,_,K);f.addColorStop(0,"#FFFEF5"),f.addColorStop(0.15,"#FFF9E6"),f.addColorStop(0.3,"#FFF4D6"),f.addColorStop(0.5,"#FFEDC0"),f.addColorStop(0.7,"#FFE4A8"),f.addColorStop(0.85,"#FFDC95"),f.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=f,this.ctx.beginPath(),this.ctx.arc(k,_,K,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(k,_,F,K){let Z=48+Math.sin(K*0.15)*1.5,N=F*0.85;if(_>=N-50){let W=Math.max(0,(N-_)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${W})`,this.ctx.beginPath(),this.ctx.ellipse(k,N,Z*1.5,Z*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(k,_,F){this.ctx.fillStyle="#FFFFFF";for(let N=0;N<20;N++){let W=(k*0.2+N*47)%k,f=(_*0.2+N*23)%(_*0.6),q=Math.sin(F*0.8+N)*0.5+0.5;this.ctx.globalAlpha=q*0.8,this.ctx.beginPath(),this.ctx.arc(W,f,1.5,0,Math.PI*2),this.ctx.fill()}let K=k*0.75,Z=_*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(K,Z,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(K-8,Z-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class n extends A{rainDrops=[];lastTime=0;draw(k,_,F,K,Z=!1){let N=Date.now()*0.001;this.drawClouds(N,_,F,Z?1:0.8),this.drawRain(_,F,Z)}drawRain(k,_,F){let K=F?130:90;if(this.rainDrops.length!==K){this.rainDrops=[];for(let f=0;f<K;f++)this.rainDrops.push({x:Math.random()*k,y:Math.random()*_-Math.random()*200,speed:F?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:F?1.2+Math.random()*1:0.8+Math.random()*0.7,length:F?8+Math.random()*10:6+Math.random()*8,alpha:F?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let Z=Date.now()*0.001,N=this.lastTime>0?Math.min(Z-this.lastTime,0.1):0.016666666666666666;this.lastTime=Z;let W=Z;for(let f=0;f<this.rainDrops.length;f++){let q=this.rainDrops[f];if(q.y+=q.speed*N,q.y>_+50)q.y=-50-Math.random()*100,q.x=Math.random()*k;let J=q.windOffset*(1+Math.sin(W*0.5+q.phase)*0.2),$=q.x+J;if($<-10)q.x=k+10;else if($>k+10)q.x=-10;this.drawRainDrop($,q.y,q)}}drawRainDrop(k,_,F){this.ctx.save(),this.ctx.globalAlpha=F.alpha;let K=_-F.length*0.5,Z=_+F.length*0.5,N=F.alpha,W=F.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+N+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+W+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(k,K),this.ctx.quadraticCurveTo(k-F.width*0.3,_,k-F.width,Z-F.width*0.3),this.ctx.arc(k,Z,F.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(k+F.width*0.3,_,k,K),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class z0 extends A{snowflakes=[];lastTime=0;draw(k,_,F,K){let Z=Date.now()*0.001;this.drawClouds(Z,_,F,0.7),this.drawSnowflakes(_,F)}drawSnowflakes(k,_){let F=Math.floor(k*_/5000),K=Math.max(30,Math.min(F,80));if(this.snowflakes.length!==K){this.snowflakes=[];for(let f=0;f<K;f++)this.snowflakes.push({x:Math.random()*k,y:Math.random()*_-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let Z=Date.now()*0.001,N=this.lastTime>0?Math.min(Z-this.lastTime,0.1):0.016666666666666666;this.lastTime=Z;let W=Z;this.ctx.lineCap="round";for(let f=0;f<this.snowflakes.length;f++){let q=this.snowflakes[f],J=Math.sin(W*q.swaySpeed+q.swayPhase)*2;if(q.y+=q.speedY*N,q.x+=(q.speedX+J)*N,q.rotation+=q.rotationSpeed*N,q.y>_+20)q.y=-20-Math.random()*50,q.x=Math.random()*k;if(q.x<-10)q.x=k+10;else if(q.x>k+10)q.x=-10;this.drawSnowflake(q.x,q.y,q.size,q.alpha,q.rotation)}}drawSnowflake(k,_,F,K,Z){this.ctx.save(),this.ctx.translate(k,_),this.ctx.rotate(Z),this.ctx.strokeStyle=`rgba(255, 255, 255, ${K})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let N=0;N<6;N++){let W=Math.PI/3*N,f=Math.cos(W),q=Math.sin(W);this.ctx.moveTo(0,0),this.ctx.lineTo(q*F*2.5,f*F*2.5);let J=q*F*1.5+f*F*0.5,$=f*F*1.5-q*F*0.5,y=q*F*1.8+f*F*1.2,V=f*F*1.8-q*F*1.2;this.ctx.moveTo(J,$),this.ctx.lineTo(y,V);let M=q*F*1.5-f*F*0.5,C=f*F*1.5+q*F*0.5,Ik=q*F*1.8-f*F*1.2,Rk=f*F*1.8+q*F*1.2;this.ctx.moveTo(M,C),this.ctx.lineTo(Ik,Rk)}this.ctx.stroke(),this.ctx.restore()}}class S0 extends A{draw(k,_,F,K){let Z=Date.now()*0.001;this.drawClouds(Z,_,F,0.7)}}class w0 extends A{draw(k,_,F,K){let Z=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let N=0;N<3;N++){let W=F*(0.4+N*0.2),f=Math.sin(Z+N)*20;this.ctx.beginPath(),this.ctx.moveTo(0,W);for(let q=0;q<=_;q+=5){let J=Math.sin((q/_+Z)*Math.PI*4+N)*15;this.ctx.lineTo(q,W+J+f)}this.ctx.lineTo(_,F),this.ctx.lineTo(0,F),this.ctx.closePath(),this.ctx.fill()}}}class I0 extends A{hailStones=[];draw(k,_,F,K){let Z=Date.now()*0.001;this.drawClouds(Z,_,F,1),this.drawHailStones(_,F)}drawHailStones(k,_){if(this.hailStones.length!==60){this.hailStones=[];for(let Z=0;Z<60;Z++)this.hailStones.push({startX:Math.random()*k,startY:Math.random()*(_+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let K=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let Z=0;Z<this.hailStones.length;Z++){let N=this.hailStones[Z],W=(N.startY+K*N.speed)%(_+150);if(W>_+30)N.startY=-30-Math.random()*30,N.startX=Math.random()*k;let f=N.windOffset*(1+Math.sin(K*0.6+N.phase)*0.15),q=(N.startX+f+K*20%k)%k;if(q<-5)N.startX=k+5;else if(q>k+5)N.startX=-5;this.drawHailStone(q,W,N)}}drawHailStone(k,_,F){this.ctx.save(),this.ctx.globalAlpha=F.alpha,this.ctx.beginPath(),this.ctx.ellipse(k,_,F.size,F.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(k-F.size*0.3,_-F.size*0.3,F.size*0.3,F.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class R0 extends A{rainyAnimation;constructor(k){super(k);this.rainyAnimation=new n(k)}draw(k,_,F,K,Z=!0){let N=Date.now()*0.001;if(this.drawClouds(N,_,F,1),Z)this.rainyAnimation.draw(k,_,F,K,!1);this.drawLightning(_,F,N)}drawLightning(k,_,F){let K=Math.sin(F*2.5)*Math.sin(F*5.3)*Math.sin(F*7.1),Z=Math.max(0,K);if(Z>0.4){let N=(Z-0.4)/0.6,W=N*0.6,f=Math.min(W,Math.sin(N*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${f})`,this.ctx.fillRect(0,0,k,_)}}}var xk=l0`
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
`;var X1={wind:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},Vk=(k)=>Q`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${k}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,Y1={sunny:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:Q`
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
  `,overcast:Q`
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
  `,cloudy:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:Q`
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
  `,rain:Q`
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
  `,pouring:Q`
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
  `,snowy:Q`
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
  `,snow:Q`
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
  `,foggy:Q`
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
  `,fog:Q`
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
  `,hail:Q`
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
  `,"snowy-rainy":Q`
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
  `,lightning:Q`
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
  `,"lightning-rainy":Q`
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
  `,windy:Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":Q`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function a(k,..._){let F=X1[k];if(typeof F==="function")return F(..._);return F||""}function P0(k){if(!k)return"";return Y1[k.toLowerCase()]||""}class D0 extends I{animationFrame=null;canvas=null;ctx=null;canvasWidth=0;canvasHeight=0;animations={};holdTimer=null;holdDelay=500;clockInterval=null;resizeObserver=null;_wheelHandler=null;lastTap=null;holdFired=!1;hourlyForecastSubscription=null;dailyForecastSubscription=null;_testTimeOfDay;static get styles(){return xk}constructor(){super();this.currentTime="";this.hourlyForecast=[];this.dailyForecast=[];this.config={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{if(this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver();this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this._wheelHandler&&this.shadowRoot){let k=this.shadowRoot.querySelector(".forecast-scroll");if(k)k.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=null}if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;this.unsubscribeForecastUpdates()}updated(k){if(super.updated(k),k.has("hass")||k.has("config")){if(this.canvas&&this.ctx)this.resizeCanvas();if(this.setupForecastScroll(),this.hass&&this.config.entity)this.subscribeForecastUpdates()}let _=Y0({configLang:this.config?.language,hassLang:this.hass?.language});if(G.lang!==_)G.setLanguage(_)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new C0(this.ctx),rainy:new n(this.ctx),snowy:new z0(this.ctx),cloudy:new S0(this.ctx),foggy:new w0(this.ctx),hail:new I0(this.ctx),thunderstorm:new R0(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(k)}setupForecastScroll(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".forecast-scroll");if(!k)return;if(this._wheelHandler)k.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=(_)=>{let F=_;if(F.deltaY!==0)_.preventDefault(),k.scrollLeft+=F.deltaY},k.addEventListener("wheel",this._wheelHandler,{passive:!1})}resizeCanvas(){if(!this.canvas||!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;let _=k.getBoundingClientRect();if(_.width===0||_.height===0)return;let F=window.devicePixelRatio||2;if(this.canvas.width=_.width*F,this.canvas.height=_.height*F,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(F,F);this.canvasWidth=_.width,this.canvasHeight=_.height,this.initializeAnimations()}setupCanvas(){if(!this.shadowRoot)return;let k=this.shadowRoot.querySelector(".canvas-container");if(!k)return;let _=k.querySelector("canvas");if(_)_.remove();this.canvas=document.createElement("canvas"),k.appendChild(this.canvas),this.resizeCanvas()}getState(k){if(!this.hass||!k)return null;let _=this.hass.states[k];return _?_.state:null}getAttributes(k){if(!this.hass||!k)return{};let _=this.hass.states[k];return _?_.attributes:{}}getWeatherData(){let k=this.config.entity||"weather.home",_=this.getState(k),F=this.getAttributes(k),K=F.condition||_||"sunny",Z=null;if(this.config.templowAttribute&&F[this.config.templowAttribute]!=null)Z=F[this.config.templowAttribute];else{for(let N of Qk)if(F[N]!=null){Z=F[N];break}if(Z==null)Z=(F.forecast&&F.forecast[0]?F.forecast[0].templow??null:null)||(F.forecast_hourly&&F.forecast_hourly[0]?F.forecast_hourly[0].native_templow??null:null)}return{condition:K,temperature:F.temperature!=null?F.temperature:null,apparentTemperature:F.apparent_temperature||null,humidity:F.humidity!=null?F.humidity:null,windSpeed:F.wind_speed!=null?F.wind_speed:null,windGust:F.wind_gust_speed||F.wind_gust||null,windBearing:F.wind_bearing!=null?F.wind_bearing:null,windDirection:F.wind_direction||null,pressure:F.pressure||null,forecast:F.forecast||F.forecast_hourly||this.hourlyForecast||[],friendlyName:F.friendly_name||G.t("weather"),templow:Z}}async subscribeForecastUpdates(){if(!this.hass||!this.config.entity)return;this.unsubscribeForecastUpdates();try{if(this.hourlyForecastSubscription=this.hass.connection.subscribeMessage((k)=>{if(k.forecast&&k.forecast.length>0)this.hourlyForecast=k.forecast},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:this.config.entity}),this.config.showDailyForecast)this.dailyForecastSubscription=this.hass.connection.subscribeMessage((k)=>{if(k.forecast&&k.forecast.length>0)this.dailyForecast=k.forecast},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:this.config.entity})}catch{}}async unsubscribeForecastUpdates(){if(this.hourlyForecastSubscription){try{(await this.hourlyForecastSubscription)()}catch{}this.hourlyForecastSubscription=null}if(this.dailyForecastSubscription){try{(await this.dailyForecastSubscription)()}catch{}this.dailyForecastSubscription=null}}getTodayForecast(){if(!this.hass||!this.config)return[];let k=Math.max(1,Math.floor(Number(this.config.hourlyForecastHours??X.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,k);let _=this.getWeatherData();if(!_.forecast||_.forecast.length===0)return[];let F=new Date,K=new Date(F.getFullYear(),F.getMonth(),F.getDate()),Z=new Date(K);return Z.setDate(Z.getDate()+1),_.forecast.filter((W)=>{if(!W.datetime)return!1;let f=new Date(W.datetime),q=new Date(f.getFullYear(),f.getMonth(),f.getDate());return q.getTime()===K.getTime()||q.getTime()===Z.getTime()&&f.getHours()<=F.getHours()}).sort((W,f)=>new Date(W.datetime).getTime()-new Date(f.datetime).getTime()).slice(0,k)}getWeekForecast(){if(!this.hass||!this.config)return[];if(this.dailyForecast&&this.dailyForecast.length>0){let f=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??X.dailyForecastDays)));return this.dailyForecast.slice(0,f)}let k=this.getWeatherData();if(!k.forecast||k.forecast.length===0)return[];let _=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??X.dailyForecastDays))),F=new Date,K=new Date(F.getFullYear(),F.getMonth(),F.getDate()),Z=new Date(K);Z.setDate(Z.getDate()+_);let N=(f)=>{let q=f.getFullYear(),J=String(f.getMonth()+1).padStart(2,"0"),$=String(f.getDate()).padStart(2,"0");return`${q}-${J}-${$}`},W=new Map;return k.forecast.forEach((f)=>{if(!f.datetime)return;let q=new Date(f.datetime);if(Number.isNaN(q.getTime()))return;if(q<K||q>=Z)return;let J=N(q),$=Math.abs(q.getHours()+q.getMinutes()/60-12),y=W.get(J);if(!y||$<y.hourScore)W.set(J,{item:f,itemDate:q,hourScore:$})}),Array.from(W.values()).sort((f,q)=>f.itemDate.getTime()-q.itemDate.getTime()).map((f)=>f.item).slice(0,_)}startAnimation(){let k=()=>{this.draw(),this.animationFrame=requestAnimationFrame(k)};k()}draw(){if(!this.ctx||!this.canvas)return;if(!this.canvasWidth||!this.canvasHeight){if(this.resizeCanvas(),!this.canvasWidth||!this.canvasHeight)return}let k=this.canvasWidth,_=this.canvasHeight;this.ctx.clearRect(0,0,k,_);let F=this.getWeatherData(),K=this.hass?.states[this.config.entity],Z=V0(K||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),N=this._testTimeOfDay||T0(Z);switch(F.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),k,_,N);break;case"clear-night":this.animations.sunny?.draw(Date.now(),k,_,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),k,_,N,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),k,_,N,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),k,_,N);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),k,_,N,!1),this.animations.snowy?.draw(Date.now(),k,_,N);break;case"hail":this.animations.hail?.draw(Date.now(),k,_,N);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),k,_,N);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),k,_,N,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),k,_,N,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),k,_,N);break}}renderTodayForecast(){let k=this.getTodayForecast();if(k.length===0)return H`<div style="opacity: 0.6; font-size: 14px;">${G.t("forecast_unavailable")}</div>`;return H`
      <div class="forecast-scroll">
        ${k.map((_)=>H`
          <div class="forecast-item">
            <div class="forecast-time">${Xk(_.datetime)}</div>
            <div class="forecast-icon">${P0(_.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(_.temperature||_.temp||_.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}renderDailyForecast(){let k=this.getWeekForecast();if(k.length===0)return H`<div style="opacity: 0.6; font-size: 14px;">${G.t("forecast_unavailable")}</div>`;return H`
      <div class="forecast-scroll">
        ${k.map((_)=>H`
          <div class="forecast-item">
            <div class="forecast-time">${Yk(_.datetime,G.lang)}</div>
            <div class="forecast-icon">${P0(_.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(_.temperature||_.temp||_.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}convertWindSpeed(k){if(k==null)return null;let _=this.config.entity||"weather.home";if(this.getAttributes(_).wind_speed_unit)return Math.round(k*10)/10;if(this.config.windSpeedUnit==="kmh")return Math.round(k*3.6*10)/10;return Math.round(k*10)/10}getWindSpeedUnit(){let k=this.config.entity||"weather.home",F=this.getAttributes(k).wind_speed_unit;if(F){let K=F.toLowerCase().replace(/[^a-z]/g,"");if(K==="kmh"||K==="kmph")return G.t("wind_unit_kmh");else if(K==="ms"||K==="mps")return G.t("wind_unit_ms");else if(K==="mph")return G.t("wind_unit_mph");else if(K==="knots"||K==="kn"||K==="kt")return G.t("wind_unit_knots");else if(K==="fts"||K==="ftps")return G.t("wind_unit_fts");return F}return this.config.windSpeedUnit==="kmh"?G.t("wind_unit_kmh"):G.t("wind_unit_ms")}formatCurrentTime(){let k=new Date,_=String(k.getHours()).padStart(2,"0"),F=String(k.getMinutes()).padStart(2,"0");return`${_}:${F}`}startClock(){if(!this.config.showClock)return;this.currentTime=this.formatCurrentTime(),this.clockInterval=window.setInterval(()=>{this.currentTime=this.formatCurrentTime()},1000)}render(){if(!this.hass)return H`<div>No Home Assistant connection</div>`;let k=this.getWeatherData(),_=this.hass.states[this.config.entity],F=V0(_,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),K=this._testTimeOfDay||T0(F),Z=`weather-card ${K.type}`,N=this.config.height?`${this.config.height}px`:"200px",W=Uk(K),f=W?`background: linear-gradient(135deg, rgb(${W.start.r}, ${W.start.g}, ${W.start.b}), rgb(${W.end.r}, ${W.end.g}, ${W.end.b}));`:"",J=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:X.overlayOpacity};`;return H`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${Z}" style="min-height: ${N}; ${f}; ${J} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name!==void 0?H`
              <div class="header">
                <div class="location">${this.config.name||k.friendlyName}</div>
              </div>
            `:""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${G.t(k.condition)}</div>
                <div class="temperature">${k.temperature!=null?Math.round(k.temperature)+"°":G.t("no_data")}</div>
                ${this.config.showMinTemp&&k.templow?H`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${Math.round(k.templow)}°</span>
                  </div>
                `:""}
                ${this.config.showFeelsLike&&k.apparentTemperature?H`
                  <div class="feels-like">${G.t("feels_like")} ${Math.round(k.apparentTemperature)}°</div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="top"?H`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
              <div class="info-grid">
                ${this.config.showHumidity&&k.humidity!=null?H`
                  <div class="info-item">
                    <span class="info-icon">${a("humidity")}</span>
                    <span>${k.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&F.hasSunData&&F.sunrise?H`
                  <div class="info-item">
                    <span class="info-icon">${a("sunrise")}</span>
                    <span>${x0(F.sunrise)}</span>
                  </div>
                `:""}
                ${this.config.showWind&&k.windSpeed!=null?H`
                  ${this.config.showWindDirection&&k.windBearing!=null?H`
                    <div class="info-item">
                      <span class="info-icon">${Vk(k.windBearing)}</span>
                      <span>${this.convertWindSpeed(k.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&k.windGust?` / ${this.convertWindSpeed(k.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:H`
                    <div class="info-item">
                      <span class="info-icon">${a("wind")}</span>
                      <span>${this.convertWindSpeed(k.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&k.windGust?` / ${this.convertWindSpeed(k.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&F.hasSunData&&F.sunset?H`
                  <div class="info-item">
                    <span class="info-icon">${a("sunset")}</span>
                    <span>${x0(F.sunset)}</span>
                  </div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="details"?H`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            ${this.config.showHourlyForecast?H`
              <div class="forecast-container">
                <div class="forecast-title">${G.t("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
            ${this.config.showDailyForecast?H`
              <div class="forecast-container">
                <div class="forecast-title">${G.t("daily_forecast_title")}</div>
                ${this.renderDailyForecast()}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(k){if(!k.entity)throw Error("Please define a weather entity");let _=k.show_hourly_forecast??k.show_forecast;if(this.config={type:"custom:animated-weather-card",entity:k.entity,icons_path:k.icons_path,name:k.name,height:k.height||X.height,showFeelsLike:k.show_feels_like!==!1,showWind:k.show_wind!==!1,showWindGust:k.show_wind_gust!==!1,showWindDirection:k.show_wind_direction!==!1,showHumidity:k.show_humidity!==!1,showMinTemp:k.show_min_temp!==!1,showForecast:k.show_forecast===!0,showHourlyForecast:_===!0,showDailyForecast:k.show_daily_forecast===!0,hourlyForecastHours:k.hourly_forecast_hours??X.hourlyForecastHours,dailyForecastDays:k.daily_forecast_days??X.dailyForecastDays,showSunriseSunset:k.show_sunrise_sunset!==!1,showClock:k.show_clock===!0,clockPosition:k.clock_position||X.clockPosition,overlayOpacity:k.overlay_opacity!==void 0?k.overlay_opacity:X.overlayOpacity,language:k.language||X.language,windSpeedUnit:k.wind_speed_unit||X.windSpeedUnit,sunriseEntity:k.sunrise_entity||null,sunsetEntity:k.sunset_entity||null,templowAttribute:k.templow_attribute||null,tapAction:k.tap_action||{action:"more-info"},holdAction:k.hold_action||{action:"none"},doubleTapAction:k.double_tap_action||{action:"none"}},this.config.language)G.setLanguage(this.config.language)}handleAction(k){if(!k||!this.hass)return;switch(k.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:k.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:k.entity||this.config.entity});break;case"call-service":if(k.service){let[F,K]=k.service.split(".");this.hass.callService(F,K,k.service_data||{})}break;case"navigate":if(k.navigation_path)window.history.pushState(null,"",k.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(k.url_path)window.open(k.url_path);break;case"none":default:break}}fireEvent(k,_={}){let F=new CustomEvent(k,{detail:_,bubbles:!0,composed:!0});this.dispatchEvent(F)}handleTap(k){if(k.target.closest(".forecast-item")||k.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(k),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.config.tapAction),this.lastTap=null},300)}handlePointerDown(k){this.holdTimer=window.setTimeout(()=>{this.handleHold(k),this.holdFired=!0},this.holdDelay)}handlePointerUp(k){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)k.preventDefault(),k.stopPropagation(),this.holdFired=!1}handleHold(k){this.handleAction(this.config.holdAction)}handleDoubleTap(k){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}O([s({type:Object})],D0.prototype,"hass",void 0),O([s({type:Object})],D0.prototype,"config",void 0),O([W0()],D0.prototype,"currentTime",void 0),O([W0()],D0.prototype,"hourlyForecast",void 0),O([W0()],D0.prototype,"dailyForecast",void 0);var Tk={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ck=(k)=>(..._)=>({["_$litDirective$"]:k,values:_});class c0{constructor(k){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(k,_,F){this.__part=k,this._$parent=_,this.__attributeIndex=F}_$resolve(k,_){return this.update(k,_)}update(k,_){return this.render(..._)}}var x1=!0,I5=x1&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(k)=>k;var zk=(k)=>k.strings===void 0;var V1=!0,e=(k,_)=>{let F=k._$disconnectableChildren;if(F===void 0)return!1;for(let K of F)K._$notifyDirectiveConnectionChanged?.(_,!1),e(K,_);return!0},q0=(k)=>{let _,F;do{if((_=k._$parent)===void 0)break;F=_._$disconnectableChildren,F.delete(k),k=_}while(F?.size===0)},Sk=(k)=>{for(let _;_=k._$parent;k=_){let F=_._$disconnectableChildren;if(F===void 0)_._$disconnectableChildren=F=new Set;else if(F.has(k))break;F.add(k),z1(_)}};function T1(k){if(this._$disconnectableChildren!==void 0)q0(this),this._$parent=k,Sk(this);else this._$parent=k}function C1(k,_=!1,F=0){let K=this._$committedValue,Z=this._$disconnectableChildren;if(Z===void 0||Z.size===0)return;if(_){if(Array.isArray(K))for(let N=F;N<K.length;N++)e(K[N],!1),q0(K[N]);else if(K!=null)e(K,!1),q0(K)}else e(this,k)}var z1=(k)=>{if(k.type==Tk.CHILD)k._$notifyConnectionChanged??=C1,k._$reparentDisconnectables??=T1};class O0 extends c0{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(k,_,F){super._$initialize(k,_,F),Sk(this),this.isConnected=k._$isConnected}["_$notifyDirectiveConnectionChanged"](k,_=!0){if(k!==this.isConnected)if(this.isConnected=k,k)this.reconnected?.();else this.disconnected?.();if(_)e(this,k),q0(this)}setValue(k){if(zk(this.__part))this.__part._$setValue(k,this);else{if(V1&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let _=[...this.__part._$committedValue];_[this.__attributeIndex]=k,this.__part._$setValue(_,this,0)}}disconnected(){}reconnected(){}}class wk extends O0{_key="";_onLangChange=null;render(k){return this._key=k,G.t(k)}reconnected(){this._onLangChange=()=>{this.setValue(G.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var S1=Ck(wk);try{customElements.define("dynamic-weather-card",D0),console.log(`%cDynamic Weather Card %c${Jk}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let k={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(k)}catch(k){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",k)}export{S1 as t,Y0 as resolveLanguage,G as i18n};
