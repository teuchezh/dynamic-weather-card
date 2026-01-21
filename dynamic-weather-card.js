var z=function(_,o,k,g){var l=arguments.length,f=l<3?o:g===null?g=Object.getOwnPropertyDescriptor(o,k):g,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")f=Reflect.decorate(_,o,k,g);else for(var d=_.length-1;d>=0;d--)if(c=_[d])f=(l<3?c(f):l>3?c(o,k,f):c(o,k))||f;return l>3&&f&&Object.defineProperty(o,k,f),f};var o_=globalThis,u_=o_.ShadowRoot&&(o_.ShadyCSS===void 0||o_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K_=Symbol(),R_=new WeakMap;class W_{constructor(_,o,k){if(this._$cssResult$=!0,k!==K_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=_,this._strings=o}get styleSheet(){let _=this._styleSheet,o=this._strings;if(u_&&_===void 0){let k=o!==void 0&&o.length===1;if(k)_=R_.get(o);if(_===void 0){if((this._styleSheet=_=new CSSStyleSheet).replaceSync(this.cssText),k)R_.set(o,_)}}return _}toString(){return this.cssText}}var Lo=(_)=>{if(_._$cssResult$===!0)return _.cssText;else if(typeof _==="number")return _;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${_}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},To=(_)=>new W_(typeof _==="string"?_:String(_),void 0,K_),P_=(_,...o)=>{let k=_.length===1?_[0]:o.reduce((g,l,f)=>g+Lo(l)+_[f+1],_[0]);return new W_(k,_,K_)},I_=(_,o)=>{if(u_)_.adoptedStyleSheets=o.map((k)=>k instanceof CSSStyleSheet?k:k.styleSheet);else for(let k of o){let g=document.createElement("style"),l=o_.litNonce;if(l!==void 0)g.setAttribute("nonce",l);g.textContent=k.cssText,_.appendChild(g)}},Co=(_)=>{let o="";for(let k of _.cssRules)o+=k.cssText;return To(o)},Z_=u_?(_)=>_:(_)=>_ instanceof CSSStyleSheet?Co(_):_;var{is:Ro,defineProperty:Po,getOwnPropertyDescriptor:D_,getOwnPropertyNames:Io,getOwnPropertySymbols:Do,getPrototypeOf:r_}=Object,ro=!1,J=globalThis;if(ro)J.customElements??=customElements;var Q=!0,N,O_=J.trustedTypes,Oo=O_?O_.emptyScript:"",s_=Q?J.reactiveElementPolyfillSupportDevMode:J.reactiveElementPolyfillSupport;if(Q)J.litIssuedWarnings??=new Set,N=(_,o)=>{if(o+=` See https://lit.dev/msg/${_} for more information.`,!J.litIssuedWarnings.has(o)&&!J.litIssuedWarnings.has(_))console.warn(o),J.litIssuedWarnings.add(o)},queueMicrotask(()=>{if(N("dev-mode","Lit is in dev mode. Not recommended for production!"),J.ShadyDOM?.inUse&&s_===void 0)N("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var Eo=Q?(_)=>{if(!J.emitLitDebugLogEvents)return;J.dispatchEvent(new CustomEvent("lit-debug",{detail:_}))}:void 0,R=(_,o)=>_,D={toAttribute(_,o){switch(o){case Boolean:_=_?Oo:null;break;case Object:case Array:_=_==null?_:JSON.stringify(_);break}return _},fromAttribute(_,o){let k=_;switch(o){case Boolean:k=_!==null;break;case Number:k=_===null?null:Number(_);break;case Object:case Array:try{k=JSON.parse(_)}catch(g){k=null}break}return k}},k_=(_,o)=>!Ro(_,o),E_={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:k_};Symbol.metadata??=Symbol("metadata");J.litPropertyMetadata??=new WeakMap;class F extends HTMLElement{static addInitializer(_){this.__prepare(),(this._initializers??=[]).push(_)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(_,o=E_){if(o.state)o.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(_))o=Object.create(o),o.wrapped=!0;if(this.elementProperties.set(_,o),!o.noAccessor){let k=Q?Symbol.for(`${String(_)} (@property() cache)`):Symbol(),g=this.getPropertyDescriptor(_,k,o);if(g!==void 0)Po(this.prototype,_,g)}}static getPropertyDescriptor(_,o,k){let{get:g,set:l}=D_(this.prototype,_)??{get(){return this[o]},set(f){this[o]=f}};if(Q&&g==null){if("value"in(D_(this.prototype,_)??{}))throw Error(`Field ${JSON.stringify(String(_))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);N("reactive-property-without-getter",`Field ${JSON.stringify(String(_))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:g,set(f){let c=g?.call(this);l?.call(this,f),this.requestUpdate(_,c,k)},configurable:!0,enumerable:!0}}static getPropertyOptions(_){return this.elementProperties.get(_)??E_}static __prepare(){if(this.hasOwnProperty(R("elementProperties",this)))return;let _=r_(this);if(_.finalize(),_._initializers!==void 0)this._initializers=[..._._initializers];this.elementProperties=new Map(_.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(R("properties",this))){let o=this.properties,k=[...Io(o),...Do(o)];for(let g of k)this.createProperty(g,o[g])}let _=this[Symbol.metadata];if(_!==null){let o=litPropertyMetadata.get(_);if(o!==void 0)for(let[k,g]of o)this.elementProperties.set(k,g)}this.__attributeToPropertyMap=new Map;for(let[o,k]of this.elementProperties){let g=this.__attributeNameForProperty(o,k);if(g!==void 0)this.__attributeToPropertyMap.set(g,o)}if(this.elementStyles=this.finalizeStyles(this.styles),Q){if(this.hasOwnProperty("createProperty"))N("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))N("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(_){let o=[];if(Array.isArray(_)){let k=new Set(_.flat(1/0).reverse());for(let g of k)o.unshift(Z_(g))}else if(_!==void 0)o.push(Z_(_));return o}static __attributeNameForProperty(_,o){let k=o.attribute;return k===!1?void 0:typeof k==="string"?k:typeof _==="string"?_.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((_)=>this.enableUpdating=_),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((_)=>_(this))}addController(_){if((this.__controllers??=new Set).add(_),this.renderRoot!==void 0&&this.isConnected)_.hostConnected?.()}removeController(_){this.__controllers?.delete(_)}__saveInstanceProperties(){let _=new Map,o=this.constructor.elementProperties;for(let k of o.keys())if(this.hasOwnProperty(k))_.set(k,this[k]),delete this[k];if(_.size>0)this.__instanceProperties=_}createRenderRoot(){let _=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return I_(_,this.constructor.elementStyles),_}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((_)=>_.hostConnected?.())}enableUpdating(_){}disconnectedCallback(){this.__controllers?.forEach((_)=>_.hostDisconnected?.())}attributeChangedCallback(_,o,k){this._$attributeToProperty(_,k)}__propertyToAttribute(_,o){let g=this.constructor.elementProperties.get(_),l=this.constructor.__attributeNameForProperty(_,g);if(l!==void 0&&g.reflect===!0){let c=(g.converter?.toAttribute!==void 0?g.converter:D).toAttribute(o,g.type);if(Q&&this.constructor.enabledWarnings.includes("migration")&&c===void 0)N("undefined-attribute-value",`The attribute value for the ${_} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=_,c==null)this.removeAttribute(l);else this.setAttribute(l,c);this.__reflectingProperty=null}}_$attributeToProperty(_,o){let k=this.constructor,g=k.__attributeToPropertyMap.get(_);if(g!==void 0&&this.__reflectingProperty!==g){let l=k.getPropertyOptions(g),f=typeof l.converter==="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:D;this.__reflectingProperty=g;let c=f.fromAttribute(o,l.type);this[g]=c??this.__defaultValues?.get(g)??c,this.__reflectingProperty=null}}requestUpdate(_,o,k,g=!1,l){if(_!==void 0){if(Q&&_ instanceof Event)N("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let f=this.constructor;if(g===!1)l=this[_];if(k??=f.getPropertyOptions(_),(k.hasChanged??k_)(l,o)||k.useDefault&&k.reflect&&l===this.__defaultValues?.get(_)&&!this.hasAttribute(f.__attributeNameForProperty(_,k)))this._$changeProperty(_,o,k);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(_,o,{useDefault:k,reflect:g,wrapped:l},f){if(k&&!(this.__defaultValues??=new Map).has(_)){if(this.__defaultValues.set(_,f??o??this[_]),l!==!0||f!==void 0)return}if(!this._$changedProperties.has(_)){if(!this.hasUpdated&&!k)o=void 0;this._$changedProperties.set(_,o)}if(g===!0&&this.__reflectingProperty!==_)(this.__reflectingProperties??=new Set).add(_)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(o){Promise.reject(o)}let _=this.scheduleUpdate();if(_!=null)await _;return!this.isUpdatePending}scheduleUpdate(){let _=this.performUpdate();if(Q&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof _?.then==="function")N("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return _}performUpdate(){if(!this.isUpdatePending)return;if(Eo?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),Q){let l=[...this.constructor.elementProperties.keys()].filter((f)=>this.hasOwnProperty(f)&&(f in r_(this)));if(l.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${l.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[g,l]of this.__instanceProperties)this[g]=l;this.__instanceProperties=void 0}let k=this.constructor.elementProperties;if(k.size>0)for(let[g,l]of k){let{wrapped:f}=l,c=this[g];if(f===!0&&!this._$changedProperties.has(g)&&c!==void 0)this._$changeProperty(g,void 0,l,c)}}let _=!1,o=this._$changedProperties;try{if(_=this.shouldUpdate(o),_)this.willUpdate(o),this.__controllers?.forEach((k)=>k.hostUpdate?.()),this.update(o);else this.__markUpdated()}catch(k){throw _=!1,this.__markUpdated(),k}if(_)this._$didUpdate(o)}willUpdate(_){}_$didUpdate(_){if(this.__controllers?.forEach((o)=>o.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(_);if(this.updated(_),Q&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))N("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(_){return!0}update(_){this.__reflectingProperties&&=this.__reflectingProperties.forEach((o)=>this.__propertyToAttribute(o,this[o])),this.__markUpdated()}updated(_){}firstUpdated(_){}}F.elementStyles=[];F.shadowRootOptions={mode:"open"};F[R("elementProperties",F)]=new Map;F[R("finalized",F)]=new Map;s_?.({ReactiveElement:F});if(Q){F.enabledWarnings=["change-in-update","async-perform-update"];let _=function(o){if(!o.hasOwnProperty(R("enabledWarnings",o)))o.enabledWarnings=o.enabledWarnings.slice()};F.enableWarning=function(o){if(_(this),!this.enabledWarnings.includes(o))this.enabledWarnings.push(o)},F.disableWarning=function(o){_(this);let k=this.enabledWarnings.indexOf(o);if(k>=0)this.enabledWarnings.splice(k,1)}}(J.reactiveElementVersions??=[]).push("2.1.2");if(Q&&J.reactiveElementVersions.length>1)queueMicrotask(()=>{N("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var H=globalThis,W=(_)=>{if(!H.emitLitDebugLogEvents)return;H.dispatchEvent(new CustomEvent("lit-debug",{detail:_}))},so=0,E;H.litIssuedWarnings??=new Set,E=(_,o)=>{if(o+=_?` See https://lit.dev/msg/${_} for more information.`:"",!H.litIssuedWarnings.has(o)&&!H.litIssuedWarnings.has(_))console.warn(o),H.litIssuedWarnings.add(o)},queueMicrotask(()=>{E("dev-mode","Lit is in dev mode. Not recommended for production!")});var G=H.ShadyDOM?.inUse&&H.ShadyDOM?.noPatch===!0?H.ShadyDOM.wrap:(_)=>_,g_=H.trustedTypes,p_=g_?g_.createPolicy("lit-html",{createHTML:(_)=>_}):void 0,po=(_)=>_,d_=(_,o,k)=>po,no=(_)=>{if(T!==d_)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");T=_},mo=()=>{T=d_},h_=(_,o,k)=>{return T(_,o,k)},_o="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,oo="?"+X,ao=`<${oo}>`,U=document,s=()=>U.createComment(""),p=(_)=>_===null||typeof _!="object"&&typeof _!="function",B_=Array.isArray,vo=(_)=>B_(_)||typeof _?.[Symbol.iterator]==="function",i_=`[ 	
\f\r]`,eo=`[^ 	
\f\r"'\`<>=]`,to=`[^\\s"'>=/]`,r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,n_=1,M_=2,_k=3,m_=/-->/g,a_=/>/g,V=new RegExp(`>|${i_}(?:(${to}+)(${i_}*=${i_}*(?:${eo}|("|')|))|$)`,"g"),ok=0,v_=1,kk=2,e_=3,q_=/'/g,$_=/"/g,ko=/^(?:script|style|textarea|title)$/i,gk=1,l_=2,f_=3,J_=1,c_=2,lk=3,fk=4,ck=5,Q_=6,dk=7,F_=(_)=>(o,...k)=>{if(o.some((g)=>g===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(k.some((g)=>g?._$litStatic$))E("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:_,strings:o,values:k}},i=F_(gk),M=F_(l_),Ck=F_(f_),L=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),t_=new WeakMap,x=U.createTreeWalker(U,129),T=d_;function go(_,o){if(!B_(_)||!_.hasOwnProperty("raw")){let k="invalid template strings array";throw k=`
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
`),Error(k)}return p_!==void 0?p_.createHTML(o):o}var yk=(_,o)=>{let k=_.length-1,g=[],l=o===l_?"<svg>":o===f_?"<math>":"",f,c=r;for(let y=0;y<k;y++){let Z=_[y],u=-1,q,A=0,h;while(A<Z.length){if(c.lastIndex=A,h=c.exec(Z),h===null)break;if(A=c.lastIndex,c===r){if(h[n_]==="!--")c=m_;else if(h[n_]!==void 0)c=a_;else if(h[M_]!==void 0){if(ko.test(h[M_]))f=new RegExp(`</${h[M_]}`,"g");c=V}else if(h[_k]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(c===V)if(h[ok]===">")c=f??r,u=-1;else if(h[v_]===void 0)u=-2;else u=c.lastIndex-h[kk].length,q=h[v_],c=h[e_]===void 0?V:h[e_]==='"'?$_:q_;else if(c===$_||c===q_)c=V;else if(c===m_||c===a_)c=r;else c=V,f=void 0}console.assert(u===-1||c===V||c===q_||c===$_,"unexpected parse state B");let j=c===V&&_[y+1].startsWith("/>")?" ":"";l+=c===r?Z+ao:u>=0?(g.push(q),Z.slice(0,u)+_o+Z.slice(u))+X+j:Z+X+(u===-2?y:j)}let d=l+(_[k]||"<?>")+(o===l_?"</svg>":o===f_?"</math>":"");return[go(_,d),g]};class n{constructor({strings:_,["_$litType$"]:o},k){this.parts=[];let g,l=0,f=0,c=_.length-1,d=this.parts,[y,Z]=yk(_,o);if(this.el=n.createElement(y,k),x.currentNode=this.el.content,o===l_||o===f_){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}while((g=x.nextNode())!==null&&d.length<c){if(g.nodeType===1){{let u=g.localName;if(/^(?:textarea|template)$/i.test(u)&&g.innerHTML.includes(X)){let q=`Expressions are not supported inside \`${u}\` elements. See https://lit.dev/msg/expression-in-${u} for more information.`;if(u==="template")throw Error(q);else E("",q)}}if(g.hasAttributes()){for(let u of g.getAttributeNames())if(u.endsWith(_o)){let q=Z[f++],h=g.getAttribute(u).split(X),j=/([.?@])?(.*)/.exec(q);d.push({type:J_,index:l,name:j[2],strings:h,ctor:j[1]==="."?fo:j[1]==="?"?co:j[1]==="@"?yo:a}),g.removeAttribute(u)}else if(u.startsWith(X))d.push({type:Q_,index:l}),g.removeAttribute(u)}if(ko.test(g.tagName)){let u=g.textContent.split(X),q=u.length-1;if(q>0){g.textContent=g_?g_.emptyScript:"";for(let A=0;A<q;A++)g.append(u[A],s()),x.nextNode(),d.push({type:c_,index:++l});g.append(u[q],s())}}}else if(g.nodeType===8)if(g.data===oo)d.push({type:c_,index:l});else{let q=-1;while((q=g.data.indexOf(X,q+1))!==-1)d.push({type:dk,index:l}),q+=X.length-1}l++}if(Z.length!==f)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+_.join("${...}")+"`");W&&W({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:_})}static createElement(_,o){let k=U.createElement("template");return k.innerHTML=_,k}}function P(_,o,k=_,g){if(o===L)return o;let l=g!==void 0?k.__directives?.[g]:k.__directive,f=p(o)?void 0:o._$litDirective$;if(l?.constructor!==f){if(l?._$notifyDirectiveConnectionChanged?.(!1),f===void 0)l=void 0;else l=new f(_),l._$initialize(_,k,g);if(g!==void 0)(k.__directives??=[])[g]=l;else k.__directive=l}if(l!==void 0)o=P(_,l._$resolve(_,o.values),l,g);return o}class lo{constructor(_,o){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=_,this._$parent=o}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(_){let{el:{content:o},parts:k}=this._$template,g=(_?.creationScope??U).importNode(o,!0);x.currentNode=g;let l=x.nextNode(),f=0,c=0,d=k[0];while(d!==void 0){if(f===d.index){let y;if(d.type===c_)y=new m(l,l.nextSibling,this,_);else if(d.type===J_)y=new d.ctor(l,d.name,d.strings,this,_);else if(d.type===Q_)y=new wo(l,this,_);this._$parts.push(y),d=k[++c]}if(f!==d?.index)l=x.nextNode(),f++}return x.currentNode=U,g}_update(_){let o=0;for(let k of this._$parts){if(k!==void 0)if(W&&W({kind:"set part",part:k,value:_[o],valueIndex:o,values:_,templateInstance:this}),k.strings!==void 0)k._$setValue(_,k,o),o+=k.strings.length-2;else k._$setValue(_[o]);o++}}}class m{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(_,o,k,g){this.type=c_,this._$committedValue=$,this._$disconnectableChildren=void 0,this._$startNode=_,this._$endNode=o,this._$parent=k,this.options=g,this.__isConnected=g?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let _=G(this._$startNode).parentNode,o=this._$parent;if(o!==void 0&&_?.nodeType===11)_=o.parentNode;return _}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(_,o=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(_=P(this,_,o),p(_)){if(_===$||_==null||_===""){if(this._$committedValue!==$)W&&W({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=$}else if(_!==this._$committedValue&&_!==L)this._commitText(_)}else if(_._$litType$!==void 0)this._commitTemplateResult(_);else if(_.nodeType!==void 0){if(this.options?.host===_){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",_,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(_)}else if(vo(_))this._commitIterable(_);else this._commitText(_)}_insert(_){return G(G(this._$startNode).parentNode).insertBefore(_,this._$endNode)}_commitNode(_){if(this._$committedValue!==_){if(this._$clear(),T!==d_){let o=this._$startNode.parentNode?.nodeName;if(o==="STYLE"||o==="SCRIPT"){let k="Forbidden";if(o==="STYLE")k="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else k="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(k)}}W&&W({kind:"commit node",start:this._$startNode,parent:this._$parent,value:_,options:this.options}),this._$committedValue=this._insert(_)}}_commitText(_){if(this._$committedValue!==$&&p(this._$committedValue)){let o=G(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=h_(o,"data","property");_=this._textSanitizer(_),W&&W({kind:"commit text",node:o,value:_,options:this.options}),o.data=_}else{let o=U.createTextNode("");if(this._commitNode(o),this._textSanitizer===void 0)this._textSanitizer=h_(o,"data","property");_=this._textSanitizer(_),W&&W({kind:"commit text",node:o,value:_,options:this.options}),o.data=_}this._$committedValue=_}_commitTemplateResult(_){let{values:o,["_$litType$"]:k}=_,g=typeof k==="number"?this._$getTemplate(_):(k.el===void 0&&(k.el=n.createElement(go(k.h,k.h[0]),this.options)),k);if(this._$committedValue?._$template===g)W&&W({kind:"template updating",template:g,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:o}),this._$committedValue._update(o);else{let l=new lo(g,this),f=l._clone(this.options);W&&W({kind:"template instantiated",template:g,instance:l,parts:l._$parts,options:this.options,fragment:f,values:o}),l._update(o),W&&W({kind:"template instantiated and updated",template:g,instance:l,parts:l._$parts,options:this.options,fragment:f,values:o}),this._commitNode(f),this._$committedValue=l}}_$getTemplate(_){let o=t_.get(_.strings);if(o===void 0)t_.set(_.strings,o=new n(_));return o}_commitIterable(_){if(!B_(this._$committedValue))this._$committedValue=[],this._$clear();let o=this._$committedValue,k=0,g;for(let l of _){if(k===o.length)o.push(g=new m(this._insert(s()),this._insert(s()),this,this.options));else g=o[k];g._$setValue(l),k++}if(k<o.length)this._$clear(g&&G(g._$endNode).nextSibling,k),o.length=k}_$clear(_=G(this._$startNode).nextSibling,o){this._$notifyConnectionChanged?.(!1,!0,o);while(_!==this._$endNode){let k=G(_).nextSibling;G(_).remove(),_=k}}setConnected(_){if(this._$parent===void 0)this.__isConnected=_,this._$notifyConnectionChanged?.(_);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class a{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(_,o,k,g,l){if(this.type=J_,this._$committedValue=$,this._$disconnectableChildren=void 0,this.element=_,this.name=o,this._$parent=g,this.options=l,k.length>2||k[0]!==""||k[1]!=="")this._$committedValue=Array(k.length-1).fill(new String),this.strings=k;else this._$committedValue=$;this._sanitizer=void 0}_$setValue(_,o=this,k,g){let l=this.strings,f=!1;if(l===void 0){if(_=P(this,_,o,0),f=!p(_)||_!==this._$committedValue&&_!==L,f)this._$committedValue=_}else{let c=_;_=l[0];let d,y;for(d=0;d<l.length-1;d++){if(y=P(this,c[k+d],o,d),y===L)y=this._$committedValue[d];if(f||=!p(y)||y!==this._$committedValue[d],y===$)_=$;else if(_!==$)_+=(y??"")+l[d+1];this._$committedValue[d]=y}}if(f&&!g)this._commitValue(_)}_commitValue(_){if(_===$)G(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=T(this.element,this.name,"attribute");_=this._sanitizer(_??""),W&&W({kind:"commit attribute",element:this.element,name:this.name,value:_,options:this.options}),G(this.element).setAttribute(this.name,_??"")}}}class fo extends a{constructor(){super(...arguments);this.type=lk}_commitValue(_){if(this._sanitizer===void 0)this._sanitizer=T(this.element,this.name,"property");_=this._sanitizer(_),W&&W({kind:"commit property",element:this.element,name:this.name,value:_,options:this.options}),this.element[this.name]=_===$?void 0:_}}class co extends a{constructor(){super(...arguments);this.type=fk}_commitValue(_){W&&W({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(_&&_!==$),options:this.options}),G(this.element).toggleAttribute(this.name,!!_&&_!==$)}}class yo extends a{constructor(_,o,k,g,l){super(_,o,k,g,l);if(this.type=ck,this.strings!==void 0)throw Error(`A \`<${_.localName}>\` has a \`@${o}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(_,o=this){if(_=P(this,_,o,0)??$,_===L)return;let k=this._$committedValue,g=_===$&&k!==$||_.capture!==k.capture||_.once!==k.once||_.passive!==k.passive,l=_!==$&&(k===$||g);if(W&&W({kind:"commit event listener",element:this.element,name:this.name,value:_,options:this.options,removeListener:g,addListener:l,oldListener:k}),g)this.element.removeEventListener(this.name,this,k);if(l)this.element.addEventListener(this.name,this,_);this._$committedValue=_}handleEvent(_){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,_);else this._$committedValue.handleEvent(_)}}class wo{constructor(_,o,k){this.element=_,this.type=Q_,this._$disconnectableChildren=void 0,this._$parent=o,this.options=k}get _$isConnected(){return this._$parent._$isConnected}_$setValue(_){W&&W({kind:"commit to element binding",element:this.element,value:_,options:this.options}),P(this,_)}}var wk=H.litHtmlPolyfillSupportDevMode;wk?.(n,m);(H.litHtmlVersions??=[]).push("3.3.2");if(H.litHtmlVersions.length>1)queueMicrotask(()=>{E("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var O=(_,o,k)=>{if(o==null)throw TypeError(`The container to render into may not be ${o}`);let g=so++,l=k?.renderBefore??o,f=l._$litPart$;if(W&&W({kind:"begin render",id:g,value:_,container:o,options:k,part:f}),f===void 0){let c=k?.renderBefore??null;l._$litPart$=f=new m(o.insertBefore(s(),c),c,void 0,k??{})}return f._$setValue(_),W&&W({kind:"end render",id:g,value:_,container:o,options:k,part:f}),f};O.setSanitizer=no,O.createSanitizer=h_,O._testOnlyClearSanitizerFactoryDoNotCallOrElse=mo;var uk=(_,o)=>_,H_=!0,Y=globalThis,uo;if(H_)Y.litIssuedWarnings??=new Set,uo=(_,o)=>{if(o+=` See https://lit.dev/msg/${_} for more information.`,!Y.litIssuedWarnings.has(o)&&!Y.litIssuedWarnings.has(_))console.warn(o),Y.litIssuedWarnings.add(o)};class b extends F{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let _=super.createRenderRoot();return this.renderOptions.renderBefore??=_.firstChild,_}update(_){let o=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(_),this.__childPart=O(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return L}}b._$litElement$=!0;b[uk("finalized",b)]=!0;Y.litElementHydrateSupport?.({LitElement:b});var Kk=H_?Y.litElementPolyfillSupportDevMode:Y.litElementPolyfillSupport;Kk?.({LitElement:b});(Y.litElementVersions??=[]).push("4.2.2");if(H_&&Y.litElementVersions.length>1)queueMicrotask(()=>{uo("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var Ko=!0,Wo;if(Ko)globalThis.litIssuedWarnings??=new Set,Wo=(_,o)=>{if(o+=` See https://lit.dev/msg/${_} for more information.`,!globalThis.litIssuedWarnings.has(o)&&!globalThis.litIssuedWarnings.has(_))console.warn(o),globalThis.litIssuedWarnings.add(o)};var Wk=(_,o,k)=>{let g=o.hasOwnProperty(k);return o.constructor.createProperty(k,_),g?Object.getOwnPropertyDescriptor(o,k):void 0},Zk={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:k_},ik=(_=Zk,o,k)=>{let{kind:g,metadata:l}=k;if(Ko&&l==null)Wo("missing-class-metadata",`The class ${o} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let f=globalThis.litPropertyMetadata.get(l);if(f===void 0)globalThis.litPropertyMetadata.set(l,f=new Map);if(g==="setter")_=Object.create(_),_.wrapped=!0;if(f.set(k.name,_),g==="accessor"){let{name:c}=k;return{set(d){let y=o.get.call(this);o.set.call(this,d),this.requestUpdate(c,y,_,!0,d)},init(d){if(d!==void 0)this._$changeProperty(c,void 0,_,d);return d}}}else if(g==="setter"){let{name:c}=k;return function(d){let y=this[c];o.call(this,d),this.requestUpdate(c,y,_,!0,d)}}throw Error(`Unsupported decorator location: ${g}`)};function C(_){return(o,k)=>{return typeof k==="object"?ik(_,o,k):Wk(_,o,k)}}function I(_){return C({..._,state:!0,attribute:!1})}var Mk=!0,qk;if(Mk)globalThis.litIssuedWarnings??=new Set,qk=(_,o)=>{if(o+=_?` See https://lit.dev/msg/${_} for more information.`:"",!globalThis.litIssuedWarnings.has(o)&&!globalThis.litIssuedWarnings.has(_))console.warn(o),globalThis.litIssuedWarnings.add(o)};var Zo="0.4.0",S={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},io=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],K={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var $k={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",editor:{entity:"Погодная сущность",name:"Название карточки",height:"Высота карточки",show_feels_like:"Показывать ощущаемую температуру",show_wind:"Показывать скорость ветра",show_wind_gust:"Показывать порывы ветра",show_wind_direction:"Показывать направление ветра",show_humidity:"Показывать влажность",show_min_temp:"Показывать минимальную температуру",show_hourly_forecast:"Показывать почасовой прогноз",hourly_forecast_hours:"Часы прогноза",show_daily_forecast:"Показывать дневной прогноз",daily_forecast_days:"Дни прогноза",show_sunrise_sunset:"Показывать восход/закат",sunrise_entity:"Сущность восхода",sunset_entity:"Сущность заката",show_clock:"Показывать часы",clock_position:"Позиция часов",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат времени",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Прозрачность подложки",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",wind_speed_unit:"Единицы скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч"},demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Mo=$k;var hk={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",editor:{entity:"Wetter-Entität",name:"Kartentitel",height:"Kartenhöhe",show_feels_like:"Gefühlte Temperatur anzeigen",show_wind:"Windgeschwindigkeit anzeigen",show_wind_gust:"Windböen anzeigen",show_wind_direction:"Windrichtung anzeigen",show_humidity:"Luftfeuchtigkeit anzeigen",show_min_temp:"Mindesttemperatur anzeigen",show_hourly_forecast:"Stundenprognose anzeigen",hourly_forecast_hours:"Stunden der Prognose",show_daily_forecast:"Tagesprognose anzeigen",daily_forecast_days:"Tage der Prognose",show_sunrise_sunset:"Sonnenaufgang/Sonnenuntergang anzeigen",sunrise_entity:"Sonnenaufgang-Entität",sunset_entity:"Sonnenuntergang-Entität",show_clock:"Uhr anzeigen",clock_position:"Uhrposition",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Zeitformat",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Überlagerungs-Transparenz",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},qo=hk;var Bk={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",editor:{entity:"Weer-entiteit",name:"Kaarttitel",height:"Kaart hoogte",show_feels_like:"Gevoelstemperatuur tonen",show_wind:"Windsnelheid tonen",show_wind_gust:"Windstoten tonen",show_wind_direction:"Windrichting tonen",show_humidity:"Luchtvochtigheid tonen",show_min_temp:"Minimumtemperatuur tonen",show_hourly_forecast:"Uurverwachting tonen",hourly_forecast_hours:"Aantal uren",show_daily_forecast:"Dagverwachting tonen",daily_forecast_days:"Aantal dagen",show_sunrise_sunset:"Zonsopgang/zonsondergang tonen",sunrise_entity:"Zonsopgang-entiteit",sunset_entity:"Zonsondergang-entiteit",show_clock:"Klok tonen",clock_position:"Klokpositie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Tijdformaat",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Overlay-doorzichtigheid",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",wind_speed_unit:"Windsnelheidseenheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u"},demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},$o=Bk;var Jk={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",editor:{entity:"Entité météo",name:"Titre de la carte",height:"Hauteur de la carte",show_feels_like:"Afficher le ressenti",show_wind:"Afficher la vitesse du vent",show_wind_gust:"Afficher les rafales",show_wind_direction:"Afficher la direction du vent",show_humidity:"Afficher l’humidité",show_min_temp:"Afficher la température minimale",show_hourly_forecast:"Afficher la prévision horaire",hourly_forecast_hours:"Heures de prévision",show_daily_forecast:"Afficher la prévision quotidienne",daily_forecast_days:"Jours de prévision",show_sunrise_sunset:"Afficher lever/coucher du soleil",sunrise_entity:"Entité de lever du soleil",sunset_entity:"Entité de coucher du soleil",show_clock:"Afficher l'horloge",clock_position:"Position de l'horloge",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format de l'heure",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Opacité du voile",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},ho=Jk;var Qk={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",editor:{entity:"Weather Entity",name:"Card Title",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",show_sunrise_sunset:"Show Sunrise/Sunset",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity",show_clock:"Show Clock",clock_position:"Clock Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Clock Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Overlay Opacity",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",wind_speed_unit:"Wind Speed Unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian"}}},Bo=Qk;var Fk={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",editor:{entity:"Entidad de clima",name:"Título de la tarjeta",height:"Altura de la tarjeta",show_feels_like:"Mostrar sensación térmica",show_wind:"Mostrar velocidad del viento",show_wind_gust:"Mostrar ráfaga de viento",show_wind_direction:"Mostrar dirección del viento",show_humidity:"Mostrar humedad",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar pronóstico por horas",hourly_forecast_hours:"Horas del pronóstico",show_daily_forecast:"Mostrar pronóstico diario",daily_forecast_days:"Días del pronóstico",show_sunrise_sunset:"Mostrar amanecer/atardecer",sunrise_entity:"Entidad de amanecer",sunset_entity:"Entidad de atardecer",show_clock:"Mostrar reloj",clock_position:"Posición del reloj",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato de hora",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidad de superposición",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Jo=Fk;var Hk={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",editor:{entity:"Entità meteo",name:"Titolo della scheda",height:"Altezza della scheda",show_feels_like:"Mostra temperatura percepita",show_wind:"Mostra velocità del vento",show_wind_gust:"Mostra raffiche di vento",show_wind_direction:"Mostra direzione del vento",show_humidity:"Mostra umidità",show_min_temp:"Mostra temperatura minima",show_hourly_forecast:"Mostra previsione oraria",hourly_forecast_hours:"Ore di previsione",show_daily_forecast:"Mostra previsione giornaliera",daily_forecast_days:"Giorni di previsione",show_sunrise_sunset:"Mostra alba/tramonto",sunrise_entity:"Entità alba",sunset_entity:"Entità tramonto",show_clock:"Mostra orologio",clock_position:"Posizione orologio",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato orario",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Opacità sovrapposizione",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Qo=Hk;var N_={en:Bo,ru:Mo,de:qo,nl:$o,fr:ho,es:Jo,it:Qo};class Fo{lang="en";fallback="en";t(_){let o=_.split("."),k=o.reduce((l,f)=>l?.[f],N_[this.lang]);if(k!=null)return k;return o.reduce((l,f)=>l?.[f],N_[this.fallback])??_}setLanguage(_){if(!N_[_]||this.lang===_)return;this.lang=_,window.dispatchEvent(new CustomEvent("language-changed"))}}var w=new Fo;window.i18n=w;var v=({configLang:_,hassLang:o}={})=>{if(_&&_!=="auto")return _;if(o)return o;if(typeof navigator<"u"&&navigator.language){let k=navigator.language.toLowerCase();if(k.startsWith("ru"))return"ru";if(k.startsWith("de"))return"de";if(k.startsWith("nl"))return"nl";if(k.startsWith("fr"))return"fr";if(k.startsWith("it"))return"it";if(k.startsWith("es"))return"es"}return"en"};function Nk(){let _=new Date,o=_.getHours(),k=_.getMinutes(),g=o*60+k;if(g>=S.SUNRISE_START&&g<S.SUNRISE_END)return{type:"sunrise",progress:(g-S.SUNRISE_START)/120};if(g>=S.SUNRISE_END&&g<S.DAY_END)return{type:"day",progress:(g-S.SUNRISE_END)/600};if(g>=S.DAY_END&&g<S.SUNSET_END)return{type:"sunset",progress:(g-S.DAY_END)/120};return{type:"night",progress:0}}function Ho(_,o,k){if(_.type==="sunrise"){let g=_.progress;return{x:o*(0.3+g*0.4),y:k*(0.85-g*0.55)}}else if(_.type==="sunset"){let g=_.progress;return{x:o*(0.5+g*0.3),y:k*(0.3+g*0.55)}}else if(_.type==="day"){let l=_.progress*Math.PI;return{x:o*(0.5+Math.sin(l)*0.25),y:k*(0.25-Math.sin(l)*0.1)}}else return{x:o*0.75,y:k*0.3}}function No(_){if(_.type==="sunrise"){let o=_.progress,k={r:26,g:26,b:46},g={r:255,g:160,b:122},l={r:255,g:215,b:0};return{start:{r:Math.round(k.r+(g.r-k.r)*o),g:Math.round(k.g+(g.g-k.g)*o),b:Math.round(k.b+(g.b-k.b)*o)},end:{r:Math.round(k.r+(l.r-k.r)*o),g:Math.round(k.g+(l.g-k.g)*o),b:Math.round(k.b+(l.b-k.b)*o)}}}else if(_.type==="sunset"){let o=_.progress,k={r:255,g:107,b:107},g={r:255,g:160,b:122},l={r:26,g:26,b:46};return{start:{r:Math.round(k.r+(l.r-k.r)*o),g:Math.round(k.g+(l.g-k.g)*o),b:Math.round(k.b+(l.b-k.b)*o)},end:{r:Math.round(g.r+(l.r-g.r)*o),g:Math.round(g.g+(l.g-g.g)*o),b:Math.round(g.b+(l.b-g.b)*o)}}}return null}function Go(_){if(!_)return"";return`${new Date(_).getHours().toString().padStart(2,"0")}:00`}function Ao(_,o){if(!_)return"";let k=new Date(_);if(Number.isNaN(k.getTime()))return"";return k.toLocaleDateString(o||void 0,{weekday:"short",day:"numeric",month:"short"})}function G_(_,o="24h",k="AM",g="PM"){if(!_)return"";let l=typeof _==="string"?new Date(_):_,f=l.getHours(),c=l.getMinutes();if(o==="12h"){let d=f>=12?g:k;return f=f%12||12,`${f}:${c.toString().padStart(2,"0")} ${d}`}else return`${f.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`}function A_(_,o=null,k=null,g=null){let l=null,f=null;if(o&&g&&g.states[o]){let c=g.states[o];l=new Date(c.state)}if(k&&g&&g.states[k]){let c=g.states[k];f=new Date(c.state)}if(!l||!f){if(_&&_.attributes){let c=_.attributes;if(!l&&(c.forecast_sunrise||c.sunrise))l=new Date(c.forecast_sunrise||c.sunrise);if(!f&&(c.forecast_sunset||c.sunset))f=new Date(c.forecast_sunset||c.sunset)}}if((!l||!f)&&g&&g.states["sun.sun"]){let d=g.states["sun.sun"].attributes;if(!l&&d.next_rising)l=new Date(d.next_rising);if(!f&&d.next_setting)f=new Date(d.next_setting)}return{sunrise:l,sunset:f,hasSunData:!!(l&&f)}}function b_(_){let o=new Date;if(_.hasSunData&&_.sunrise&&_.sunset){let k=o.getTime(),g=_.sunrise.getTime(),l=_.sunset.getTime();if(g-k>43200000)g-=86400000;if(l-k>43200000)l-=86400000;let f=g-3600000,c=g+3600000,d=l-3600000,y=l+3600000;if(k>=f&&k<c)return{type:"sunrise",progress:(k-f)/(c-f)};if(k>=c&&k<d)return{type:"day",progress:(k-c)/(d-c)};if(k>=d&&k<y)return{type:"sunset",progress:(k-d)/(y-d)};return{type:"night",progress:0}}return Nk()}class B{ctx;constructor(_){this.ctx=_}drawCloud(_,o,k,g){let l=this.ctx.shadowBlur,f=this.ctx.shadowColor,c=this.ctx.globalAlpha;this.ctx.shadowBlur=k*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${g*0.4})`,this.ctx.globalAlpha=g*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:_,y:o,r:k*0.4},{x:_+k*0.35,y:o,r:k*0.5},{x:_+k*0.65,y:o,r:k*0.48},{x:_+k*0.92,y:o,r:k*0.38},{x:_+k*0.18,y:o-k*0.28,r:k*0.38},{x:_+k*0.52,y:o-k*0.32,r:k*0.42},{x:_+k*0.78,y:o-k*0.28,r:k*0.38},{x:_+k*0.32,y:o-k*0.42,r:k*0.32},{x:_+k*0.62,y:o-k*0.48,r:k*0.36},{x:_+k*0.82,y:o-k*0.42,r:k*0.32}].forEach((y)=>{this.ctx.beginPath(),this.ctx.arc(y.x,y.y,y.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=l,this.ctx.shadowColor=f,this.ctx.globalAlpha=c}drawClouds(_,o,k,g=0.5){let l=Math.max(2,Math.floor(o/150*g));for(let f=0;f<l;f++){let c=(_*3+f*150)%(o+200)-100,d=k*(0.2+f%3*0.15)+Math.sin(_*0.2+f)*8,y=40+f%3*15,Z=0.6+f%2*0.2;this.drawCloud(c,d,y,Z)}}}class S_ extends B{draw(_,o,k,g){let l=Date.now()*0.001,f=Ho(g,o,k),c=f.x,d=f.y;if(g.type==="day"||g.type==="sunrise"||g.type==="sunset"){if(this.drawSun(c,d,l),g.type==="sunrise"||g.type==="sunset")this.drawHorizonReflection(c,d,k,l)}else if(g.type==="night")this.drawNightSky(o,k,l);this.drawClouds(l,o,k,0.3)}drawSun(_,o,k){let g=48+Math.sin(k*0.15)*1.5,l=this.ctx.createRadialGradient(_,o,g*0.3,_,o,g*3.5);l.addColorStop(0,"rgba(255, 248, 230, 0.25)"),l.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),l.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),l.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),l.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),l.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),l.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(_,o,g*3.5,0,Math.PI*2),this.ctx.fill();let f=this.ctx.createRadialGradient(_,o,g*0.5,_,o,g*2.2);f.addColorStop(0,"rgba(255, 250, 220, 0.35)"),f.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),f.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),f.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),f.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=f,this.ctx.beginPath(),this.ctx.arc(_,o,g*2.2,0,Math.PI*2),this.ctx.fill();let c=this.ctx.createRadialGradient(_,o,g*0.6,_,o,g*1.6);c.addColorStop(0,"rgba(255, 252, 240, 0.5)"),c.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),c.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),c.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(_,o,g*1.6,0,Math.PI*2),this.ctx.fill();let d=this.ctx.createRadialGradient(_-g*0.1,o-g*0.1,0,_,o,g);d.addColorStop(0,"#FFFEF5"),d.addColorStop(0.15,"#FFF9E6"),d.addColorStop(0.3,"#FFF4D6"),d.addColorStop(0.5,"#FFEDC0"),d.addColorStop(0.7,"#FFE4A8"),d.addColorStop(0.85,"#FFDC95"),d.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(_,o,g,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(_,o,k,g){let l=48+Math.sin(g*0.15)*1.5,f=k*0.85;if(o>=f-50){let c=Math.max(0,(f-o)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${c})`,this.ctx.beginPath(),this.ctx.ellipse(_,f,l*1.5,l*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(_,o,k){this.ctx.fillStyle="#FFFFFF";for(let f=0;f<20;f++){let c=(_*0.2+f*47)%_,d=(o*0.2+f*23)%(o*0.6),y=Math.sin(k*0.8+f)*0.5+0.5;this.ctx.globalAlpha=y*0.8,this.ctx.beginPath(),this.ctx.arc(c,d,1.5,0,Math.PI*2),this.ctx.fill()}let g=_*0.75,l=o*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(g,l,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(g-8,l-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class e extends B{rainDrops=[];lastTime=0;draw(_,o,k,g,l=!1){let f=Date.now()*0.001;this.drawClouds(f,o,k,l?1:0.8),this.drawRain(o,k,l)}drawRain(_,o,k){let g=k?130:90;if(this.rainDrops.length!==g){this.rainDrops=[];for(let d=0;d<g;d++)this.rainDrops.push({x:Math.random()*_,y:Math.random()*o-Math.random()*200,speed:k?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:k?1.2+Math.random()*1:0.8+Math.random()*0.7,length:k?8+Math.random()*10:6+Math.random()*8,alpha:k?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let l=Date.now()*0.001,f=this.lastTime>0?Math.min(l-this.lastTime,0.1):0.016666666666666666;this.lastTime=l;let c=l;for(let d=0;d<this.rainDrops.length;d++){let y=this.rainDrops[d];if(y.y+=y.speed*f,y.y>o+50)y.y=-50-Math.random()*100,y.x=Math.random()*_;let Z=y.windOffset*(1+Math.sin(c*0.5+y.phase)*0.2),u=y.x+Z;if(u<-10)y.x=_+10;else if(u>_+10)y.x=-10;this.drawRainDrop(u,y.y,y)}}drawRainDrop(_,o,k){this.ctx.save(),this.ctx.globalAlpha=k.alpha;let g=o-k.length*0.5,l=o+k.length*0.5,f=k.alpha,c=k.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+f+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+c+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(_,g),this.ctx.quadraticCurveTo(_-k.width*0.3,o,_-k.width,l-k.width*0.3),this.ctx.arc(_,l,k.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(_+k.width*0.3,o,_,g),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class j_ extends B{snowflakes=[];lastTime=0;draw(_,o,k,g){let l=Date.now()*0.001;this.drawClouds(l,o,k,0.7),this.drawSnowflakes(o,k)}drawSnowflakes(_,o){let k=Math.floor(_*o/5000),g=Math.max(30,Math.min(k,80));if(this.snowflakes.length!==g){this.snowflakes=[];for(let d=0;d<g;d++)this.snowflakes.push({x:Math.random()*_,y:Math.random()*o-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let l=Date.now()*0.001,f=this.lastTime>0?Math.min(l-this.lastTime,0.1):0.016666666666666666;this.lastTime=l;let c=l;this.ctx.lineCap="round";for(let d=0;d<this.snowflakes.length;d++){let y=this.snowflakes[d],Z=Math.sin(c*y.swaySpeed+y.swayPhase)*2;if(y.y+=y.speedY*f,y.x+=(y.speedX+Z)*f,y.rotation+=y.rotationSpeed*f,y.y>o+20)y.y=-20-Math.random()*50,y.x=Math.random()*_;if(y.x<-10)y.x=_+10;else if(y.x>_+10)y.x=-10;this.drawSnowflake(y.x,y.y,y.size,y.alpha,y.rotation)}}drawSnowflake(_,o,k,g,l){this.ctx.save(),this.ctx.translate(_,o),this.ctx.rotate(l),this.ctx.strokeStyle=`rgba(255, 255, 255, ${g})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let f=0;f<6;f++){let c=Math.PI/3*f,d=Math.cos(c),y=Math.sin(c);this.ctx.moveTo(0,0),this.ctx.lineTo(y*k*2.5,d*k*2.5);let Z=y*k*1.5+d*k*0.5,u=d*k*1.5-y*k*0.5,q=y*k*1.8+d*k*1.2,A=d*k*1.8-y*k*1.2;this.ctx.moveTo(Z,u),this.ctx.lineTo(q,A);let h=y*k*1.5-d*k*0.5,j=d*k*1.5+y*k*0.5,xo=y*k*1.8-d*k*1.2,Uo=d*k*1.8+y*k*1.2;this.ctx.moveTo(h,j),this.ctx.lineTo(xo,Uo)}this.ctx.stroke(),this.ctx.restore()}}class z_ extends B{draw(_,o,k,g){let l=Date.now()*0.001;this.drawClouds(l,o,k,0.7)}}class X_ extends B{draw(_,o,k,g){let l=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let f=0;f<3;f++){let c=k*(0.4+f*0.2),d=Math.sin(l+f)*20;this.ctx.beginPath(),this.ctx.moveTo(0,c);for(let y=0;y<=o;y+=5){let Z=Math.sin((y/o+l)*Math.PI*4+f)*15;this.ctx.lineTo(y,c+Z+d)}this.ctx.lineTo(o,k),this.ctx.lineTo(0,k),this.ctx.closePath(),this.ctx.fill()}}}class Y_ extends B{hailStones=[];draw(_,o,k,g){let l=Date.now()*0.001;this.drawClouds(l,o,k,1),this.drawHailStones(o,k)}drawHailStones(_,o){if(this.hailStones.length!==60){this.hailStones=[];for(let l=0;l<60;l++)this.hailStones.push({startX:Math.random()*_,startY:Math.random()*(o+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let g=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let l=0;l<this.hailStones.length;l++){let f=this.hailStones[l],c=(f.startY+g*f.speed)%(o+150);if(c>o+30)f.startY=-30-Math.random()*30,f.startX=Math.random()*_;let d=f.windOffset*(1+Math.sin(g*0.6+f.phase)*0.15),y=(f.startX+d+g*20%_)%_;if(y<-5)f.startX=_+5;else if(y>_+5)f.startX=-5;this.drawHailStone(y,c,f)}}drawHailStone(_,o,k){this.ctx.save(),this.ctx.globalAlpha=k.alpha,this.ctx.beginPath(),this.ctx.ellipse(_,o,k.size,k.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(_-k.size*0.3,o-k.size*0.3,k.size*0.3,k.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class V_ extends B{rainyAnimation;constructor(_){super(_);this.rainyAnimation=new e(_)}draw(_,o,k,g,l=!0){let f=Date.now()*0.001;if(this.drawClouds(f,o,k,1),l)this.rainyAnimation.draw(_,o,k,g,!1);this.drawLightning(o,k,f)}drawLightning(_,o,k){let g=Math.sin(k*2.5)*Math.sin(k*5.3)*Math.sin(k*7.1),l=Math.max(0,g);if(l>0.4){let f=(l-0.4)/0.6,c=f*0.6,d=Math.min(c,Math.sin(f*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${d})`,this.ctx.fillRect(0,0,_,o)}}}var bo=P_`
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
`;var Gk={wind:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},So=(_)=>M`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${_}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,Ak={sunny:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:M`
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
  `,overcast:M`
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
  `,cloudy:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:M`
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
  `,rain:M`
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
  `,pouring:M`
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
  `,snowy:M`
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
  `,snow:M`
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
  `,foggy:M`
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
  `,fog:M`
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
  `,hail:M`
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
  `,"snowy-rainy":M`
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
  `,lightning:M`
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
  `,"lightning-rainy":M`
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
  `,windy:M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":M`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function t(_,...o){let k=Gk[_];if(typeof k==="function")return k(...o);return k||""}function x_(_){if(!_)return"";return Ak[_.toLowerCase()]||""}class U_ extends b{animationFrame=null;canvas=null;ctx=null;canvasWidth=0;canvasHeight=0;animations={};holdTimer=null;holdDelay=500;clockInterval=null;resizeObserver=null;_wheelHandler=null;lastTap=null;holdFired=!1;hourlyForecastSubscription=null;dailyForecastSubscription=null;_testTimeOfDay;static get styles(){return bo}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:K.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:K.dailyForecastDays}}constructor(){super();this.currentTime="";this.hourlyForecast=[];this.dailyForecast=[];this.config={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{if(this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver();this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this._wheelHandler&&this.shadowRoot){let _=this.shadowRoot.querySelector(".forecast-scroll");if(_)_.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=null}if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;this.unsubscribeForecastUpdates()}updated(_){if(super.updated(_),_.has("hass")||_.has("config")){if(this.canvas&&this.ctx)this.resizeCanvas();if(this.setupForecastScroll(),this.hass&&this.config.entity)this.subscribeForecastUpdates()}if(_.has("config"))this.startClock();let o=v({configLang:this.config?.language,hassLang:this.hass?.language});if(w.lang!==o)w.setLanguage(o)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new S_(this.ctx),rainy:new e(this.ctx),snowy:new j_(this.ctx),cloudy:new z_(this.ctx),foggy:new X_(this.ctx),hail:new Y_(this.ctx),thunderstorm:new V_(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;let _=this.shadowRoot.querySelector(".canvas-container");if(!_)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(_)}setupForecastScroll(){if(!this.shadowRoot)return;let _=this.shadowRoot.querySelector(".forecast-scroll");if(!_)return;if(this._wheelHandler)_.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=(o)=>{let k=o;if(k.deltaY!==0)o.preventDefault(),_.scrollLeft+=k.deltaY},_.addEventListener("wheel",this._wheelHandler,{passive:!1})}resizeCanvas(){if(!this.canvas||!this.shadowRoot)return;let _=this.shadowRoot.querySelector(".canvas-container");if(!_)return;let o=_.getBoundingClientRect();if(o.width===0||o.height===0)return;let k=window.devicePixelRatio||2;if(this.canvas.width=o.width*k,this.canvas.height=o.height*k,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(k,k);this.canvasWidth=o.width,this.canvasHeight=o.height,this.initializeAnimations()}setupCanvas(){if(!this.shadowRoot)return;let _=this.shadowRoot.querySelector(".canvas-container");if(!_)return;let o=_.querySelector("canvas");if(o)o.remove();this.canvas=document.createElement("canvas"),_.appendChild(this.canvas),this.resizeCanvas()}getState(_){if(!this.hass||!_)return null;let o=this.hass.states[_];return o?o.state:null}getAttributes(_){if(!this.hass||!_)return{};let o=this.hass.states[_];return o?o.attributes:{}}getWeatherData(){let _=this.config.entity||"weather.home",o=this.getState(_),k=this.getAttributes(_),g=k.condition||o||"sunny",l=null;if(this.config.templowAttribute&&k[this.config.templowAttribute]!=null)l=k[this.config.templowAttribute];else{for(let f of io)if(k[f]!=null){l=k[f];break}if(l==null)l=(k.forecast&&k.forecast[0]?k.forecast[0].templow??null:null)||(k.forecast_hourly&&k.forecast_hourly[0]?k.forecast_hourly[0].native_templow??null:null)}return{condition:g,temperature:k.temperature!=null?k.temperature:null,apparentTemperature:k.apparent_temperature||null,humidity:k.humidity!=null?k.humidity:null,windSpeed:k.wind_speed!=null?k.wind_speed:null,windGust:k.wind_gust_speed||k.wind_gust||null,windBearing:k.wind_bearing!=null?k.wind_bearing:null,windDirection:k.wind_direction||null,pressure:k.pressure||null,forecast:k.forecast||k.forecast_hourly||this.hourlyForecast||[],friendlyName:k.friendly_name||w.t("weather"),templow:l}}async subscribeForecastUpdates(){if(!this.hass||!this.config.entity)return;this.unsubscribeForecastUpdates();try{if(this.hourlyForecastSubscription=this.hass.connection.subscribeMessage((_)=>{if(_.forecast&&_.forecast.length>0)this.hourlyForecast=_.forecast},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:this.config.entity}),this.config.showDailyForecast)this.dailyForecastSubscription=this.hass.connection.subscribeMessage((_)=>{if(_.forecast&&_.forecast.length>0)this.dailyForecast=_.forecast},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:this.config.entity})}catch{}}async unsubscribeForecastUpdates(){if(this.hourlyForecastSubscription){try{(await this.hourlyForecastSubscription)()}catch{}this.hourlyForecastSubscription=null}if(this.dailyForecastSubscription){try{(await this.dailyForecastSubscription)()}catch{}this.dailyForecastSubscription=null}}getTodayForecast(){if(!this.hass||!this.config)return[];let _=Math.max(1,Math.floor(Number(this.config.hourlyForecastHours??K.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,_);let o=this.getWeatherData();if(!o.forecast||o.forecast.length===0)return[];let k=new Date,g=new Date(k.getFullYear(),k.getMonth(),k.getDate()),l=new Date(g);return l.setDate(l.getDate()+1),o.forecast.filter((c)=>{if(!c.datetime)return!1;let d=new Date(c.datetime),y=new Date(d.getFullYear(),d.getMonth(),d.getDate());return y.getTime()===g.getTime()||y.getTime()===l.getTime()&&d.getHours()<=k.getHours()}).sort((c,d)=>new Date(c.datetime).getTime()-new Date(d.datetime).getTime()).slice(0,_)}getWeekForecast(){if(!this.hass||!this.config)return[];if(this.dailyForecast&&this.dailyForecast.length>0){let d=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??K.dailyForecastDays)));return this.dailyForecast.slice(0,d)}let _=this.getWeatherData();if(!_.forecast||_.forecast.length===0)return[];let o=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??K.dailyForecastDays))),k=new Date,g=new Date(k.getFullYear(),k.getMonth(),k.getDate()),l=new Date(g);l.setDate(l.getDate()+o);let f=(d)=>{let y=d.getFullYear(),Z=String(d.getMonth()+1).padStart(2,"0"),u=String(d.getDate()).padStart(2,"0");return`${y}-${Z}-${u}`},c=new Map;return _.forecast.forEach((d)=>{if(!d.datetime)return;let y=new Date(d.datetime);if(Number.isNaN(y.getTime()))return;if(y<g||y>=l)return;let Z=f(y),u=Math.abs(y.getHours()+y.getMinutes()/60-12),q=c.get(Z);if(!q||u<q.hourScore)c.set(Z,{item:d,itemDate:y,hourScore:u})}),Array.from(c.values()).sort((d,y)=>d.itemDate.getTime()-y.itemDate.getTime()).map((d)=>d.item).slice(0,o)}startAnimation(){let _=()=>{this.draw(),this.animationFrame=requestAnimationFrame(_)};_()}draw(){if(!this.ctx||!this.canvas)return;if(!this.canvasWidth||!this.canvasHeight){if(this.resizeCanvas(),!this.canvasWidth||!this.canvasHeight)return}let _=this.canvasWidth,o=this.canvasHeight;this.ctx.clearRect(0,0,_,o);let k=this.getWeatherData(),g=this.hass?.states[this.config.entity],l=A_(g||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),f=this._testTimeOfDay||b_(l);switch(k.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),_,o,f);break;case"clear-night":this.animations.sunny?.draw(Date.now(),_,o,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),_,o,f,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),_,o,f,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),_,o,f);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),_,o,f,!1),this.animations.snowy?.draw(Date.now(),_,o,f);break;case"hail":this.animations.hail?.draw(Date.now(),_,o,f);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),_,o,f);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),_,o,f,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),_,o,f,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),_,o,f);break}}renderTodayForecast(){let _=this.getTodayForecast();if(_.length===0)return i`<div style="opacity: 0.6; font-size: 14px;">${w.t("forecast_unavailable")}</div>`;return i`
      <div class="forecast-scroll">
        ${_.map((o)=>i`
          <div class="forecast-item">
            <div class="forecast-time">${Go(o.datetime)}</div>
            <div class="forecast-icon">${x_(o.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(o.temperature||o.temp||o.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}renderDailyForecast(){let _=this.getWeekForecast();if(_.length===0)return i`<div style="opacity: 0.6; font-size: 14px;">${w.t("forecast_unavailable")}</div>`;return i`
      <div class="forecast-scroll">
        ${_.map((o)=>i`
          <div class="forecast-item">
            <div class="forecast-time">${Ao(o.datetime,w.lang)}</div>
            <div class="forecast-icon">${x_(o.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(o.temperature||o.temp||o.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}convertWindSpeed(_){if(_==null)return null;let o=this.config.entity||"weather.home";if(this.getAttributes(o).wind_speed_unit)return Math.round(_*10)/10;if(this.config.windSpeedUnit==="kmh")return Math.round(_*3.6*10)/10;return Math.round(_*10)/10}getWindSpeedUnit(){let _=this.config.entity||"weather.home",k=this.getAttributes(_).wind_speed_unit;if(k){let g=k.toLowerCase().replace(/[^a-z]/g,"");if(g==="kmh"||g==="kmph")return w.t("wind_unit_kmh");else if(g==="ms"||g==="mps")return w.t("wind_unit_ms");else if(g==="mph")return w.t("wind_unit_mph");else if(g==="knots"||g==="kn"||g==="kt")return w.t("wind_unit_knots");else if(g==="fts"||g==="ftps")return w.t("wind_unit_fts");return k}return this.config.windSpeedUnit==="kmh"?w.t("wind_unit_kmh"):w.t("wind_unit_ms")}formatCurrentTime(){let _=new Date;if(this.config.clockFormat==="12h"){let k=_.getHours(),g=String(_.getMinutes()).padStart(2,"0"),l=k>=12?w.t("pm"):w.t("am");return k=k%12||12,`${k}:${g} ${l}`}else{let k=String(_.getHours()).padStart(2,"0"),g=String(_.getMinutes()).padStart(2,"0");return`${k}:${g}`}}startClock(){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;if(!this.config.showClock)return;this.currentTime=this.formatCurrentTime(),this.clockInterval=window.setInterval(()=>{this.currentTime=this.formatCurrentTime()},1000)}render(){if(!this.hass)return i`<div>No Home Assistant connection</div>`;let _=this.getWeatherData(),o=this.hass.states[this.config.entity],k=A_(o,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),g=this._testTimeOfDay||b_(k),l=`weather-card ${g.type}`,f=this.config.height?`${this.config.height}px`:"200px",c=No(g),d=c?`background: linear-gradient(135deg, rgb(${c.start.r}, ${c.start.g}, ${c.start.b}), rgb(${c.end.r}, ${c.end.g}, ${c.end.b}));`:"",Z=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:K.overlayOpacity};`;return i`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${l}" style="min-height: ${f}; ${d}; ${Z} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name&&this.config.name.trim()!==""?i`
              <div class="header">
                <div class="location">${this.config.name}</div>
              </div>
            `:""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${w.t(_.condition)}</div>
                <div class="temperature">${_.temperature!=null?Math.round(_.temperature)+"°":w.t("no_data")}</div>
                ${this.config.showMinTemp?i`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${_.templow!=null?`${Math.round(_.templow)}°`:w.t("no_data")}</span>
                  </div>
                `:""}
                ${this.config.showFeelsLike?i`
                  <div class="feels-like">${w.t("feels_like")} ${_.apparentTemperature!=null?`${Math.round(_.apparentTemperature)}°`:w.t("no_data")}</div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="top"?i`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
              <div class="info-grid">
                ${this.config.showHumidity&&_.humidity!=null?i`
                  <div class="info-item">
                    <span class="info-icon">${t("humidity")}</span>
                    <span>${_.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&k.hasSunData&&k.sunrise?i`
                  <div class="info-item">
                    <span class="info-icon">${t("sunrise")}</span>
                    <span>${G_(k.sunrise,this.config.clockFormat,w.t("am"),w.t("pm"))}</span>
                  </div>
                `:""}
                ${this.config.showWind&&_.windSpeed!=null?i`
                  ${this.config.showWindDirection&&_.windBearing!=null?i`
                    <div class="info-item">
                      <span class="info-icon">${So(_.windBearing)}</span>
                      <span>${this.convertWindSpeed(_.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&_.windGust?` / ${this.convertWindSpeed(_.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:i`
                    <div class="info-item">
                      <span class="info-icon">${t("wind")}</span>
                      <span>${this.convertWindSpeed(_.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&_.windGust?` / ${this.convertWindSpeed(_.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&k.hasSunData&&k.sunset?i`
                  <div class="info-item">
                    <span class="info-icon">${t("sunset")}</span>
                    <span>${G_(k.sunset,this.config.clockFormat,w.t("am"),w.t("pm"))}</span>
                  </div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="details"?i`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            ${this.config.showHourlyForecast?i`
              <div class="forecast-container">
                <div class="forecast-title">${w.t("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
            ${this.config.showDailyForecast?i`
              <div class="forecast-container">
                <div class="forecast-title">${w.t("daily_forecast_title")}</div>
                ${this.renderDailyForecast()}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(_){if(!_.entity)throw Error("Please define a weather entity");let o=_.show_hourly_forecast??_.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:_.entity,icons_path:_.icons_path,name:_.name,height:_.height||K.height,showFeelsLike:_.show_feels_like!==!1,showWind:_.show_wind!==!1,showWindGust:_.show_wind_gust!==!1,showWindDirection:_.show_wind_direction!==!1,showHumidity:_.show_humidity!==!1,showMinTemp:_.show_min_temp!==!1,showForecast:_.show_forecast===!0,showHourlyForecast:o===!0,showDailyForecast:_.show_daily_forecast===!0,hourlyForecastHours:_.hourly_forecast_hours??K.hourlyForecastHours,dailyForecastDays:_.daily_forecast_days??K.dailyForecastDays,showSunriseSunset:_.show_sunrise_sunset!==!1,showClock:_.show_clock===!0,clockPosition:_.clock_position||K.clockPosition,clockFormat:_.clock_format||K.clockFormat,overlayOpacity:_.overlay_opacity!==void 0?_.overlay_opacity:K.overlayOpacity,language:_.language||K.language,windSpeedUnit:_.wind_speed_unit||K.windSpeedUnit,sunriseEntity:_.sunrise_entity||null,sunsetEntity:_.sunset_entity||null,templowAttribute:_.templow_attribute||null,tapAction:_.tap_action||{action:"more-info"},holdAction:_.hold_action||{action:"none"},doubleTapAction:_.double_tap_action||{action:"none"}},this.config.language)w.setLanguage(this.config.language)}handleAction(_){if(!_||!this.hass)return;switch(_.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:_.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:_.entity||this.config.entity});break;case"call-service":if(_.service){let[k,g]=_.service.split(".");this.hass.callService(k,g,_.service_data||{})}break;case"navigate":if(_.navigation_path)window.history.pushState(null,"",_.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(_.url_path)window.open(_.url_path);break;case"none":default:break}}fireEvent(_,o={}){let k=new CustomEvent(_,{detail:o,bubbles:!0,composed:!0});this.dispatchEvent(k)}handleTap(_){if(_.target.closest(".forecast-item")||_.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(_),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.config.tapAction),this.lastTap=null},300)}handlePointerDown(_){this.holdTimer=window.setTimeout(()=>{this.handleHold(_),this.holdFired=!0},this.holdDelay)}handlePointerUp(_){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)_.preventDefault(),_.stopPropagation(),this.holdFired=!1}handleHold(_){this.handleAction(this.config.holdAction)}handleDoubleTap(_){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}z([C({type:Object})],U_.prototype,"hass",void 0),z([C({type:Object})],U_.prototype,"config",void 0),z([I()],U_.prototype,"currentTime",void 0),z([I()],U_.prototype,"hourlyForecast",void 0),z([I()],U_.prototype,"dailyForecast",void 0);class L_ extends b{constructor(){super(...arguments);this._config={}}setConfig(_){this._config={name:"",height:K.height,show_feels_like:K.showFeelsLike,show_wind:K.showWind,show_wind_gust:K.showWindGust,show_wind_direction:K.showWindDirection,show_humidity:K.showHumidity,show_min_temp:K.showMinTemp,show_hourly_forecast:K.showHourlyForecast,hourly_forecast_hours:K.hourlyForecastHours,show_daily_forecast:K.showDailyForecast,daily_forecast_days:K.dailyForecastDays,show_sunrise_sunset:K.showSunriseSunset,show_clock:K.showClock,clock_position:K.clockPosition,clock_format:K.clockFormat,overlay_opacity:K.overlayOpacity,language:K.language,wind_speed_unit:K.windSpeedUnit,sunrise_entity:"",sunset_entity:"",..._}}updated(_){if(super.updated(_),_.has("hass")){let o=v({hassLang:this.hass?.language});if(w.lang!==o)w.setLanguage(o),this.requestUpdate()}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"height",selector:{number:{min:200,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"show_clock",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:w.t("editor.clock_position_top"),value:"top"},{label:w.t("editor.clock_position_details"),value:"details"}]}}},{name:"clock_format",selector:{select:{options:[{label:w.t("editor.clock_format_24h"),value:"24h"},{label:w.t("editor.clock_format_12h"),value:"12h"}]}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"language",selector:{select:{options:[{label:w.t("editor.language_auto"),value:"auto"},{label:w.t("editor.language_en"),value:"en"},{label:w.t("editor.language_ru"),value:"ru"},{label:w.t("editor.language_de"),value:"de"},{label:w.t("editor.language_nl"),value:"nl"},{label:w.t("editor.language_fr"),value:"fr"},{label:w.t("editor.language_es"),value:"es"}]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:w.t("editor.wind_speed_unit_ms"),value:"ms"},{label:w.t("editor.wind_speed_unit_kmh"),value:"kmh"}]}}}]}_computeLabel=(_)=>{let o=`editor.${_.name}`,k=w.t(o);return k===o?_.name:k};_valueChanged(_){let o=_.detail?.value;if(!o)return;this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return i``;return i`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}z([C({attribute:!1})],L_.prototype,"hass",void 0),z([I()],L_.prototype,"_config",void 0);var jo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zo=(_)=>(...o)=>({["_$litDirective$"]:_,values:o});class T_{constructor(_){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(_,o,k){this.__part=_,this._$parent=o,this.__attributeIndex=k}_$resolve(_,o){return this.update(_,o)}update(_,o){return this.render(...o)}}var bk=!0,Dg=bk&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(_)=>_;var Xo=(_)=>_.strings===void 0;var Sk=!0,__=(_,o)=>{let k=_._$disconnectableChildren;if(k===void 0)return!1;for(let g of k)g._$notifyDirectiveConnectionChanged?.(o,!1),__(g,o);return!0},w_=(_)=>{let o,k;do{if((o=_._$parent)===void 0)break;k=o._$disconnectableChildren,k.delete(_),_=o}while(k?.size===0)},Yo=(_)=>{for(let o;o=_._$parent;_=o){let k=o._$disconnectableChildren;if(k===void 0)o._$disconnectableChildren=k=new Set;else if(k.has(_))break;k.add(_),Xk(o)}};function jk(_){if(this._$disconnectableChildren!==void 0)w_(this),this._$parent=_,Yo(this);else this._$parent=_}function zk(_,o=!1,k=0){let g=this._$committedValue,l=this._$disconnectableChildren;if(l===void 0||l.size===0)return;if(o){if(Array.isArray(g))for(let f=k;f<g.length;f++)__(g[f],!1),w_(g[f]);else if(g!=null)__(g,!1),w_(g)}else __(this,_)}var Xk=(_)=>{if(_.type==jo.CHILD)_._$notifyConnectionChanged??=zk,_._$reparentDisconnectables??=jk};class C_ extends T_{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(_,o,k){super._$initialize(_,o,k),Yo(this),this.isConnected=_._$isConnected}["_$notifyDirectiveConnectionChanged"](_,o=!0){if(_!==this.isConnected)if(this.isConnected=_,_)this.reconnected?.();else this.disconnected?.();if(o)__(this,_),w_(this)}setValue(_){if(Xo(this.__part))this.__part._$setValue(_,this);else{if(Sk&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let o=[...this.__part._$committedValue];o[this.__attributeIndex]=_,this.__part._$setValue(o,this,0)}}disconnected(){}reconnected(){}}class Vo extends C_{_key="";_onLangChange=null;render(_){return this._key=_,w.t(_)}reconnected(){this._onLangChange=()=>{this.setValue(w.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var Yk=zo(Vo);try{customElements.define("dynamic-weather-card",U_),customElements.define("dynamic-weather-card-editor",L_),console.log(`%cDynamic Weather Card %c${Zo}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let _={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(_)}catch(_){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",_)}export{Yk as t,v as resolveLanguage,w as i18n};
