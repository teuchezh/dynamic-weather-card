var j=function(o,_,l,c){var k=arguments.length,i=k<3?_:c===null?c=Object.getOwnPropertyDescriptor(_,l):c,g;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(o,_,l,c);else for(var d=o.length-1;d>=0;d--)if(g=o[d])i=(k<3?g(i):k>3?g(_,l,i):g(_,l))||i;return k>3&&i&&Object.defineProperty(_,l,i),i};var _o=globalThis,wo=_o.ShadowRoot&&(_o.ShadyCSS===void 0||_o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ho=Symbol(),Lo=new WeakMap;class Fo{constructor(o,_,l){if(this._$cssResult$=!0,l!==ho)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this._strings=_}get styleSheet(){let o=this._styleSheet,_=this._strings;if(wo&&o===void 0){let l=_!==void 0&&_.length===1;if(l)o=Lo.get(_);if(o===void 0){if((this._styleSheet=o=new CSSStyleSheet).replaceSync(this.cssText),l)Lo.set(_,o)}}return o}toString(){return this.cssText}}var Y_=(o)=>{if(o._$cssResult$===!0)return o.cssText;else if(typeof o==="number")return o;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${o}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},s_=(o)=>new Fo(typeof o==="string"?o:String(o),void 0,ho),Co=(o,..._)=>{let l=o.length===1?o[0]:_.reduce((c,k,i)=>c+Y_(k)+o[i+1],o[0]);return new Fo(l,o,ho)},Ro=(o,_)=>{if(wo)o.adoptedStyleSheets=_.map((l)=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(let l of _){let c=document.createElement("style"),k=_o.litNonce;if(k!==void 0)c.setAttribute("nonce",k);c.textContent=l.cssText,o.appendChild(c)}},x_=(o)=>{let _="";for(let l of o.cssRules)_+=l.cssText;return s_(_)},Ko=wo?(o)=>o:(o)=>o instanceof CSSStyleSheet?x_(o):o;var{is:T_,defineProperty:L_,getOwnPropertyDescriptor:Do,getOwnPropertyNames:C_,getOwnPropertySymbols:R_,getPrototypeOf:Io}=Object,D_=!1,$=globalThis;if(D_)$.customElements??=customElements;var B=!0,r,no=$.trustedTypes,I_=no?no.emptyScript:"",Oo=B?$.reactiveElementPolyfillSupportDevMode:$.reactiveElementPolyfillSupport;if(B)$.litIssuedWarnings??=new Set,r=(o,_)=>{if(_+=` See https://lit.dev/msg/${o} for more information.`,!$.litIssuedWarnings.has(_)&&!$.litIssuedWarnings.has(o))console.warn(_),$.litIssuedWarnings.add(_)},queueMicrotask(()=>{if(r("dev-mode","Lit is in dev mode. Not recommended for production!"),$.ShadyDOM?.inUse&&Oo===void 0)r("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var n_=B?(o)=>{if(!$.emitLitDebugLogEvents)return;$.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))}:void 0,T=(o,_)=>o,R={toAttribute(o,_){switch(_){case Boolean:o=o?I_:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o);break}return o},fromAttribute(o,_){let l=o;switch(_){case Boolean:l=o!==null;break;case Number:l=o===null?null:Number(o);break;case Object:case Array:try{l=JSON.parse(o)}catch(c){l=null}break}return l}},lo=(o,_)=>!T_(o,_),ao={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:lo};Symbol.metadata??=Symbol("metadata");$.litPropertyMetadata??=new WeakMap;class J extends HTMLElement{static addInitializer(o){this.__prepare(),(this._initializers??=[]).push(o)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(o,_=ao){if(_.state)_.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(o))_=Object.create(_),_.wrapped=!0;if(this.elementProperties.set(o,_),!_.noAccessor){let l=B?Symbol.for(`${String(o)} (@property() cache)`):Symbol(),c=this.getPropertyDescriptor(o,l,_);if(c!==void 0)L_(this.prototype,o,c)}}static getPropertyDescriptor(o,_,l){let{get:c,set:k}=Do(this.prototype,o)??{get(){return this[_]},set(i){this[_]=i}};if(B&&c==null){if("value"in(Do(this.prototype,o)??{}))throw Error(`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);r("reactive-property-without-getter",`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:c,set(i){let g=c?.call(this);k?.call(this,i),this.requestUpdate(o,g,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??ao}static __prepare(){if(this.hasOwnProperty(T("elementProperties",this)))return;let o=Io(this);if(o.finalize(),o._initializers!==void 0)this._initializers=[...o._initializers];this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(T("properties",this))){let _=this.properties,l=[...C_(_),...R_(_)];for(let c of l)this.createProperty(c,_[c])}let o=this[Symbol.metadata];if(o!==null){let _=litPropertyMetadata.get(o);if(_!==void 0)for(let[l,c]of _)this.elementProperties.set(l,c)}this.__attributeToPropertyMap=new Map;for(let[_,l]of this.elementProperties){let c=this.__attributeNameForProperty(_,l);if(c!==void 0)this.__attributeToPropertyMap.set(c,_)}if(this.elementStyles=this.finalizeStyles(this.styles),B){if(this.hasOwnProperty("createProperty"))r("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))r("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(o){let _=[];if(Array.isArray(o)){let l=new Set(o.flat(1/0).reverse());for(let c of l)_.unshift(Ko(c))}else if(o!==void 0)_.push(Ko(o));return _}static __attributeNameForProperty(o,_){let l=_.attribute;return l===!1?void 0:typeof l==="string"?l:typeof o==="string"?o.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((o)=>this.enableUpdating=o),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((o)=>o(this))}addController(o){if((this.__controllers??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected)o.hostConnected?.()}removeController(o){this.__controllers?.delete(o)}__saveInstanceProperties(){let o=new Map,_=this.constructor.elementProperties;for(let l of _.keys())if(this.hasOwnProperty(l))o.set(l,this[l]),delete this[l];if(o.size>0)this.__instanceProperties=o}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ro(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((o)=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this.__controllers?.forEach((o)=>o.hostDisconnected?.())}attributeChangedCallback(o,_,l){this._$attributeToProperty(o,l)}__propertyToAttribute(o,_){let c=this.constructor.elementProperties.get(o),k=this.constructor.__attributeNameForProperty(o,c);if(k!==void 0&&c.reflect===!0){let g=(c.converter?.toAttribute!==void 0?c.converter:R).toAttribute(_,c.type);if(B&&this.constructor.enabledWarnings.includes("migration")&&g===void 0)r("undefined-attribute-value",`The attribute value for the ${o} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=o,g==null)this.removeAttribute(k);else this.setAttribute(k,g);this.__reflectingProperty=null}}_$attributeToProperty(o,_){let l=this.constructor,c=l.__attributeToPropertyMap.get(o);if(c!==void 0&&this.__reflectingProperty!==c){let k=l.getPropertyOptions(c),i=typeof k.converter==="function"?{fromAttribute:k.converter}:k.converter?.fromAttribute!==void 0?k.converter:R;this.__reflectingProperty=c;let g=i.fromAttribute(_,k.type);this[c]=g??this.__defaultValues?.get(c)??g,this.__reflectingProperty=null}}requestUpdate(o,_,l,c=!1,k){if(o!==void 0){if(B&&o instanceof Event)r("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let i=this.constructor;if(c===!1)k=this[o];if(l??=i.getPropertyOptions(o),(l.hasChanged??lo)(k,_)||l.useDefault&&l.reflect&&k===this.__defaultValues?.get(o)&&!this.hasAttribute(i.__attributeNameForProperty(o,l)))this._$changeProperty(o,_,l);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(o,_,{useDefault:l,reflect:c,wrapped:k},i){if(l&&!(this.__defaultValues??=new Map).has(o)){if(this.__defaultValues.set(o,i??_??this[o]),k!==!0||i!==void 0)return}if(!this._$changedProperties.has(o)){if(!this.hasUpdated&&!l)_=void 0;this._$changedProperties.set(o,_)}if(c===!0&&this.__reflectingProperty!==o)(this.__reflectingProperties??=new Set).add(o)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(_){Promise.reject(_)}let o=this.scheduleUpdate();if(o!=null)await o;return!this.isUpdatePending}scheduleUpdate(){let o=this.performUpdate();if(B&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof o?.then==="function")r("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return o}performUpdate(){if(!this.isUpdatePending)return;if(n_?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),B){let k=[...this.constructor.elementProperties.keys()].filter((i)=>this.hasOwnProperty(i)&&(i in Io(this)));if(k.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${k.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[c,k]of this.__instanceProperties)this[c]=k;this.__instanceProperties=void 0}let l=this.constructor.elementProperties;if(l.size>0)for(let[c,k]of l){let{wrapped:i}=k,g=this[c];if(i===!0&&!this._$changedProperties.has(c)&&g!==void 0)this._$changeProperty(c,void 0,k,g)}}let o=!1,_=this._$changedProperties;try{if(o=this.shouldUpdate(_),o)this.willUpdate(_),this.__controllers?.forEach((l)=>l.hostUpdate?.()),this.update(_);else this.__markUpdated()}catch(l){throw o=!1,this.__markUpdated(),l}if(o)this._$didUpdate(_)}willUpdate(o){}_$didUpdate(o){if(this.__controllers?.forEach((_)=>_.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(o);if(this.updated(o),B&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))r("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(o){return!0}update(o){this.__reflectingProperties&&=this.__reflectingProperties.forEach((_)=>this.__propertyToAttribute(_,this[_])),this.__markUpdated()}updated(o){}firstUpdated(o){}}J.elementStyles=[];J.shadowRootOptions={mode:"open"};J[T("elementProperties",J)]=new Map;J[T("finalized",J)]=new Map;Oo?.({ReactiveElement:J});if(B){J.enabledWarnings=["change-in-update","async-perform-update"];let o=function(_){if(!_.hasOwnProperty(T("enabledWarnings",_)))_.enabledWarnings=_.enabledWarnings.slice()};J.enableWarning=function(_){if(o(this),!this.enabledWarnings.includes(_))this.enabledWarnings.push(_)},J.disableWarning=function(_){o(this);let l=this.enabledWarnings.indexOf(_);if(l>=0)this.enabledWarnings.splice(l,1)}}($.reactiveElementVersions??=[]).push("2.1.2");if(B&&$.reactiveElementVersions.length>1)queueMicrotask(()=>{r("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var Q=globalThis,h=(o)=>{if(!Q.emitLitDebugLogEvents)return;Q.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))},a_=0,n;Q.litIssuedWarnings??=new Set,n=(o,_)=>{if(_+=o?` See https://lit.dev/msg/${o} for more information.`:"",!Q.litIssuedWarnings.has(_)&&!Q.litIssuedWarnings.has(o))console.warn(_),Q.litIssuedWarnings.add(_)},queueMicrotask(()=>{n("dev-mode","Lit is in dev mode. Not recommended for production!")});var N=Q.ShadyDOM?.inUse&&Q.ShadyDOM?.noPatch===!0?Q.ShadyDOM.wrap:(o)=>o,co=Q.trustedTypes,po=co?co.createPolicy("lit-html",{createHTML:(o)=>o}):void 0,O_=(o)=>o,yo=(o,_,l)=>O_,p_=(o)=>{if(s!==yo)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");s=o},E_=()=>{s=yo},qo=(o,_,l)=>{return s(o,_,l)},__="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,l_="?"+z,m_=`<${l_}>`,X=document,a=()=>X.createComment(""),O=(o)=>o===null||typeof o!="object"&&typeof o!="function",$o=Array.isArray,v_=(o)=>$o(o)||typeof o?.[Symbol.iterator]==="function",Mo=`[ 	
\f\r]`,e_=`[^ 	
\f\r"'\`<>=]`,t_=`[^\\s"'>=/]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eo=1,Wo=2,ol=3,mo=/-->/g,vo=/>/g,U=new RegExp(`>|${Mo}(?:(${t_}+)(${Mo}*=${Mo}*(?:${e_}|("|')|))|$)`,"g"),_l=0,eo=1,ll=2,to=3,Zo=/'/g,Ho=/"/g,c_=/^(?:script|style|textarea|title)$/i,cl=1,ko=2,io=3,Bo=1,go=2,kl=3,il=4,gl=5,Jo=6,dl=7,Qo=(o)=>(_,...l)=>{if(_.some((c)=>c===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(l.some((c)=>c?._$litStatic$))n("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:o,strings:_,values:l}},K=Qo(cl),M=Qo(ko),xl=Qo(io),Y=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),o_=new WeakMap,V=X.createTreeWalker(X,129),s=yo;function k_(o,_){if(!$o(o)||!o.hasOwnProperty("raw")){let l="invalid template strings array";throw l=`
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
`),Error(l)}return po!==void 0?po.createHTML(_):_}var yl=(o,_)=>{let l=o.length-1,c=[],k=_===ko?"<svg>":_===io?"<math>":"",i,g=D;for(let y=0;y<l;y++){let F=o[y],u=-1,W,A=0,H;while(A<F.length){if(g.lastIndex=A,H=g.exec(F),H===null)break;if(A=g.lastIndex,g===D){if(H[Eo]==="!--")g=mo;else if(H[Eo]!==void 0)g=vo;else if(H[Wo]!==void 0){if(c_.test(H[Wo]))i=new RegExp(`</${H[Wo]}`,"g");g=U}else if(H[ol]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(g===U)if(H[_l]===">")g=i??D,u=-1;else if(H[eo]===void 0)u=-2;else u=g.lastIndex-H[ll].length,W=H[eo],g=H[to]===void 0?U:H[to]==='"'?Ho:Zo;else if(g===Ho||g===Zo)g=U;else if(g===mo||g===vo)g=D;else g=U,i=void 0}console.assert(u===-1||g===U||g===Zo||g===Ho,"unexpected parse state B");let S=g===U&&o[y+1].startsWith("/>")?" ":"";k+=g===D?F+m_:u>=0?(c.push(W),F.slice(0,u)+__+F.slice(u))+z+S:F+z+(u===-2?y:S)}let d=k+(o[l]||"<?>")+(_===ko?"</svg>":_===io?"</math>":"");return[k_(o,d),c]};class p{constructor({strings:o,["_$litType$"]:_},l){this.parts=[];let c,k=0,i=0,g=o.length-1,d=this.parts,[y,F]=yl(o,_);if(this.el=p.createElement(y,l),V.currentNode=this.el.content,_===ko||_===io){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}while((c=V.nextNode())!==null&&d.length<g){if(c.nodeType===1){{let u=c.localName;if(/^(?:textarea|template)$/i.test(u)&&c.innerHTML.includes(z)){let W=`Expressions are not supported inside \`${u}\` elements. See https://lit.dev/msg/expression-in-${u} for more information.`;if(u==="template")throw Error(W);else n("",W)}}if(c.hasAttributes()){for(let u of c.getAttributeNames())if(u.endsWith(__)){let W=F[i++],H=c.getAttribute(u).split(z),S=/([.?@])?(.*)/.exec(W);d.push({type:Bo,index:k,name:S[2],strings:H,ctor:S[1]==="."?g_:S[1]==="?"?d_:S[1]==="@"?y_:m}),c.removeAttribute(u)}else if(u.startsWith(z))d.push({type:Jo,index:k}),c.removeAttribute(u)}if(c_.test(c.tagName)){let u=c.textContent.split(z),W=u.length-1;if(W>0){c.textContent=co?co.emptyScript:"";for(let A=0;A<W;A++)c.append(u[A],a()),V.nextNode(),d.push({type:go,index:++k});c.append(u[W],a())}}}else if(c.nodeType===8)if(c.data===l_)d.push({type:go,index:k});else{let W=-1;while((W=c.data.indexOf(z,W+1))!==-1)d.push({type:dl,index:k}),W+=z.length-1}k++}if(F.length!==i)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+o.join("${...}")+"`");h&&h({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:o})}static createElement(o,_){let l=X.createElement("template");return l.innerHTML=o,l}}function L(o,_,l=o,c){if(_===Y)return _;let k=c!==void 0?l.__directives?.[c]:l.__directive,i=O(_)?void 0:_._$litDirective$;if(k?.constructor!==i){if(k?._$notifyDirectiveConnectionChanged?.(!1),i===void 0)k=void 0;else k=new i(o),k._$initialize(o,l,c);if(c!==void 0)(l.__directives??=[])[c]=k;else l.__directive=k}if(k!==void 0)_=L(o,k._$resolve(o,_.values),k,c);return _}class i_{constructor(o,_){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=o,this._$parent=_}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(o){let{el:{content:_},parts:l}=this._$template,c=(o?.creationScope??X).importNode(_,!0);V.currentNode=c;let k=V.nextNode(),i=0,g=0,d=l[0];while(d!==void 0){if(i===d.index){let y;if(d.type===go)y=new E(k,k.nextSibling,this,o);else if(d.type===Bo)y=new d.ctor(k,d.name,d.strings,this,o);else if(d.type===Jo)y=new f_(k,this,o);this._$parts.push(y),d=l[++g]}if(i!==d?.index)k=V.nextNode(),i++}return V.currentNode=X,c}_update(o){let _=0;for(let l of this._$parts){if(l!==void 0)if(h&&h({kind:"set part",part:l,value:o[_],valueIndex:_,values:o,templateInstance:this}),l.strings!==void 0)l._$setValue(o,l,_),_+=l.strings.length-2;else l._$setValue(o[_]);_++}}}class E{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(o,_,l,c){this.type=go,this._$committedValue=Z,this._$disconnectableChildren=void 0,this._$startNode=o,this._$endNode=_,this._$parent=l,this.options=c,this.__isConnected=c?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let o=N(this._$startNode).parentNode,_=this._$parent;if(_!==void 0&&o?.nodeType===11)o=_.parentNode;return o}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(o,_=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(o=L(this,o,_),O(o)){if(o===Z||o==null||o===""){if(this._$committedValue!==Z)h&&h({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=Z}else if(o!==this._$committedValue&&o!==Y)this._commitText(o)}else if(o._$litType$!==void 0)this._commitTemplateResult(o);else if(o.nodeType!==void 0){if(this.options?.host===o){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",o,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(o)}else if(v_(o))this._commitIterable(o);else this._commitText(o)}_insert(o){return N(N(this._$startNode).parentNode).insertBefore(o,this._$endNode)}_commitNode(o){if(this._$committedValue!==o){if(this._$clear(),s!==yo){let _=this._$startNode.parentNode?.nodeName;if(_==="STYLE"||_==="SCRIPT"){let l="Forbidden";if(_==="STYLE")l="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else l="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(l)}}h&&h({kind:"commit node",start:this._$startNode,parent:this._$parent,value:o,options:this.options}),this._$committedValue=this._insert(o)}}_commitText(o){if(this._$committedValue!==Z&&O(this._$committedValue)){let _=N(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=qo(_,"data","property");o=this._textSanitizer(o),h&&h({kind:"commit text",node:_,value:o,options:this.options}),_.data=o}else{let _=X.createTextNode("");if(this._commitNode(_),this._textSanitizer===void 0)this._textSanitizer=qo(_,"data","property");o=this._textSanitizer(o),h&&h({kind:"commit text",node:_,value:o,options:this.options}),_.data=o}this._$committedValue=o}_commitTemplateResult(o){let{values:_,["_$litType$"]:l}=o,c=typeof l==="number"?this._$getTemplate(o):(l.el===void 0&&(l.el=p.createElement(k_(l.h,l.h[0]),this.options)),l);if(this._$committedValue?._$template===c)h&&h({kind:"template updating",template:c,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:_}),this._$committedValue._update(_);else{let k=new i_(c,this),i=k._clone(this.options);h&&h({kind:"template instantiated",template:c,instance:k,parts:k._$parts,options:this.options,fragment:i,values:_}),k._update(_),h&&h({kind:"template instantiated and updated",template:c,instance:k,parts:k._$parts,options:this.options,fragment:i,values:_}),this._commitNode(i),this._$committedValue=k}}_$getTemplate(o){let _=o_.get(o.strings);if(_===void 0)o_.set(o.strings,_=new p(o));return _}_commitIterable(o){if(!$o(this._$committedValue))this._$committedValue=[],this._$clear();let _=this._$committedValue,l=0,c;for(let k of o){if(l===_.length)_.push(c=new E(this._insert(a()),this._insert(a()),this,this.options));else c=_[l];c._$setValue(k),l++}if(l<_.length)this._$clear(c&&N(c._$endNode).nextSibling,l),_.length=l}_$clear(o=N(this._$startNode).nextSibling,_){this._$notifyConnectionChanged?.(!1,!0,_);while(o!==this._$endNode){let l=N(o).nextSibling;N(o).remove(),o=l}}setConnected(o){if(this._$parent===void 0)this.__isConnected=o,this._$notifyConnectionChanged?.(o);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class m{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(o,_,l,c,k){if(this.type=Bo,this._$committedValue=Z,this._$disconnectableChildren=void 0,this.element=o,this.name=_,this._$parent=c,this.options=k,l.length>2||l[0]!==""||l[1]!=="")this._$committedValue=Array(l.length-1).fill(new String),this.strings=l;else this._$committedValue=Z;this._sanitizer=void 0}_$setValue(o,_=this,l,c){let k=this.strings,i=!1;if(k===void 0){if(o=L(this,o,_,0),i=!O(o)||o!==this._$committedValue&&o!==Y,i)this._$committedValue=o}else{let g=o;o=k[0];let d,y;for(d=0;d<k.length-1;d++){if(y=L(this,g[l+d],_,d),y===Y)y=this._$committedValue[d];if(i||=!O(y)||y!==this._$committedValue[d],y===Z)o=Z;else if(o!==Z)o+=(y??"")+k[d+1];this._$committedValue[d]=y}}if(i&&!c)this._commitValue(o)}_commitValue(o){if(o===Z)N(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=s(this.element,this.name,"attribute");o=this._sanitizer(o??""),h&&h({kind:"commit attribute",element:this.element,name:this.name,value:o,options:this.options}),N(this.element).setAttribute(this.name,o??"")}}}class g_ extends m{constructor(){super(...arguments);this.type=kl}_commitValue(o){if(this._sanitizer===void 0)this._sanitizer=s(this.element,this.name,"property");o=this._sanitizer(o),h&&h({kind:"commit property",element:this.element,name:this.name,value:o,options:this.options}),this.element[this.name]=o===Z?void 0:o}}class d_ extends m{constructor(){super(...arguments);this.type=il}_commitValue(o){h&&h({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(o&&o!==Z),options:this.options}),N(this.element).toggleAttribute(this.name,!!o&&o!==Z)}}class y_ extends m{constructor(o,_,l,c,k){super(o,_,l,c,k);if(this.type=gl,this.strings!==void 0)throw Error(`A \`<${o.localName}>\` has a \`@${_}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(o,_=this){if(o=L(this,o,_,0)??Z,o===Y)return;let l=this._$committedValue,c=o===Z&&l!==Z||o.capture!==l.capture||o.once!==l.once||o.passive!==l.passive,k=o!==Z&&(l===Z||c);if(h&&h({kind:"commit event listener",element:this.element,name:this.name,value:o,options:this.options,removeListener:c,addListener:k,oldListener:l}),c)this.element.removeEventListener(this.name,this,l);if(k)this.element.addEventListener(this.name,this,o);this._$committedValue=o}handleEvent(o){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,o);else this._$committedValue.handleEvent(o)}}class f_{constructor(o,_,l){this.element=o,this.type=Jo,this._$disconnectableChildren=void 0,this._$parent=_,this.options=l}get _$isConnected(){return this._$parent._$isConnected}_$setValue(o){h&&h({kind:"commit to element binding",element:this.element,value:o,options:this.options}),L(this,o)}}var fl=Q.litHtmlPolyfillSupportDevMode;fl?.(p,E);(Q.litHtmlVersions??=[]).push("3.3.2");if(Q.litHtmlVersions.length>1)queueMicrotask(()=>{n("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var I=(o,_,l)=>{if(_==null)throw TypeError(`The container to render into may not be ${_}`);let c=a_++,k=l?.renderBefore??_,i=k._$litPart$;if(h&&h({kind:"begin render",id:c,value:o,container:_,options:l,part:i}),i===void 0){let g=l?.renderBefore??null;k._$litPart$=i=new E(_.insertBefore(a(),g),g,void 0,l??{})}return i._$setValue(o),h&&h({kind:"end render",id:c,value:o,container:_,options:l,part:i}),i};I.setSanitizer=p_,I.createSanitizer=qo,I._testOnlyClearSanitizerFactoryDoNotCallOrElse=E_;var ul=(o,_)=>o,ro=!0,P=globalThis,u_;if(ro)P.litIssuedWarnings??=new Set,u_=(o,_)=>{if(_+=` See https://lit.dev/msg/${o} for more information.`,!P.litIssuedWarnings.has(_)&&!P.litIssuedWarnings.has(o))console.warn(_),P.litIssuedWarnings.add(_)};class G extends J{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){let _=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(o),this.__childPart=I(_,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return Y}}G._$litElement$=!0;G[ul("finalized",G)]=!0;P.litElementHydrateSupport?.({LitElement:G});var wl=ro?P.litElementPolyfillSupportDevMode:P.litElementPolyfillSupport;wl?.({LitElement:G});(P.litElementVersions??=[]).push("4.2.2");if(ro&&P.litElementVersions.length>1)queueMicrotask(()=>{u_("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var w_=!0,h_;if(w_)globalThis.litIssuedWarnings??=new Set,h_=(o,_)=>{if(_+=` See https://lit.dev/msg/${o} for more information.`,!globalThis.litIssuedWarnings.has(_)&&!globalThis.litIssuedWarnings.has(o))console.warn(_),globalThis.litIssuedWarnings.add(_)};var hl=(o,_,l)=>{let c=_.hasOwnProperty(l);return _.constructor.createProperty(l,o),c?Object.getOwnPropertyDescriptor(_,l):void 0},Fl={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:lo},Kl=(o=Fl,_,l)=>{let{kind:c,metadata:k}=l;if(w_&&k==null)h_("missing-class-metadata",`The class ${_} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let i=globalThis.litPropertyMetadata.get(k);if(i===void 0)globalThis.litPropertyMetadata.set(k,i=new Map);if(c==="setter")o=Object.create(o),o.wrapped=!0;if(i.set(l.name,o),c==="accessor"){let{name:g}=l;return{set(d){let y=_.get.call(this);_.set.call(this,d),this.requestUpdate(g,y,o,!0,d)},init(d){if(d!==void 0)this._$changeProperty(g,void 0,o,d);return d}}}else if(c==="setter"){let{name:g}=l;return function(d){let y=this[g];_.call(this,d),this.requestUpdate(g,y,o,!0,d)}}throw Error(`Unsupported decorator location: ${c}`)};function x(o){return(_,l)=>{return typeof l==="object"?Kl(o,_,l):hl(o,_,l)}}function C(o){return x({...o,state:!0,attribute:!1})}var Ml=!0,Wl;if(Ml)globalThis.litIssuedWarnings??=new Set,Wl=(o,_)=>{if(_+=o?` See https://lit.dev/msg/${o} for more information.`:"",!globalThis.litIssuedWarnings.has(_)&&!globalThis.litIssuedWarnings.has(o))console.warn(_),globalThis.litIssuedWarnings.add(_)};var F_="0.4.0",b={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},K_=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],w={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var Zl={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",editor:{entity:"Погодная сущность",name:"Название карточки",height:"Высота карточки",show_feels_like:"Показывать ощущаемую температуру",show_wind:"Показывать скорость ветра",show_wind_gust:"Показывать порывы ветра",show_wind_direction:"Показывать направление ветра",show_humidity:"Показывать влажность",show_min_temp:"Показывать минимальную температуру",show_hourly_forecast:"Показывать почасовой прогноз",hourly_forecast_hours:"Часы прогноза",show_daily_forecast:"Показывать дневной прогноз",daily_forecast_days:"Дни прогноза",show_sunrise_sunset:"Показывать восход/закат",sunrise_entity:"Сущность восхода",sunset_entity:"Сущность заката",show_clock:"Показывать часы",clock_position:"Позиция часов",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат времени",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Прозрачность подложки",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",wind_speed_unit:"Единицы скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч"},demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",showClock:"Часы",clockPosition:"Позиция часов",clockPositionTop:"Вверху справа",clockPositionDetails:"В строке деталей",clockFormat:"Формат часов",clockFormat12h:"12-часовой (AM/PM)",clockFormat24h:"24-часовой",overlayOpacity:"Прозрачность подложки (0-1)",windSpeedUnit:"Единицы скорости ветра",dailyForecastDays:"Дни прогноза",hourlyForecastHours:"Часы прогноза",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},M_=Zl;var Hl={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",editor:{entity:"Wetter-Entität",name:"Kartentitel",height:"Kartenhöhe",show_feels_like:"Gefühlte Temperatur anzeigen",show_wind:"Windgeschwindigkeit anzeigen",show_wind_gust:"Windböen anzeigen",show_wind_direction:"Windrichtung anzeigen",show_humidity:"Luftfeuchtigkeit anzeigen",show_min_temp:"Mindesttemperatur anzeigen",show_hourly_forecast:"Stundenprognose anzeigen",hourly_forecast_hours:"Stunden der Prognose",show_daily_forecast:"Tagesprognose anzeigen",daily_forecast_days:"Tage der Prognose",show_sunrise_sunset:"Sonnenaufgang/Sonnenuntergang anzeigen",sunrise_entity:"Sonnenaufgang-Entität",sunset_entity:"Sonnenuntergang-Entität",show_clock:"Uhr anzeigen",clock_position:"Uhrposition",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Zeitformat",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Überlagerungs-Transparenz",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",showClock:"Uhr",clockPosition:"Uhrposition",clockPositionTop:"Oben rechts",clockPositionDetails:"Detailzeile",clockFormat:"Uhrzeitformat",clockFormat12h:"12-Stunden (AM/PM)",clockFormat24h:"24-Stunden",overlayOpacity:"Überlagerungs-Transparenz (0-1)",windSpeedUnit:"Windgeschwindigkeitseinheit",dailyForecastDays:"Tage der Prognose",hourlyForecastHours:"Stunden der Prognose",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},W_=Hl;var ql={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",editor:{entity:"Weer-entiteit",name:"Kaarttitel",height:"Kaart hoogte",show_feels_like:"Gevoelstemperatuur tonen",show_wind:"Windsnelheid tonen",show_wind_gust:"Windstoten tonen",show_wind_direction:"Windrichting tonen",show_humidity:"Luchtvochtigheid tonen",show_min_temp:"Minimumtemperatuur tonen",show_hourly_forecast:"Uurverwachting tonen",hourly_forecast_hours:"Aantal uren",show_daily_forecast:"Dagverwachting tonen",daily_forecast_days:"Aantal dagen",show_sunrise_sunset:"Zonsopgang/zonsondergang tonen",sunrise_entity:"Zonsopgang-entiteit",sunset_entity:"Zonsondergang-entiteit",show_clock:"Klok tonen",clock_position:"Klokpositie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Tijdformaat",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Overlay-doorzichtigheid",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",wind_speed_unit:"Windsnelheidseenheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u"},demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",showClock:"Klok",clockPosition:"Klokpositie",clockPositionTop:"Rechtsboven",clockPositionDetails:"Detailregel",clockFormat:"Klokformaat",clockFormat12h:"12-uurs (AM/PM)",clockFormat24h:"24-uurs",overlayOpacity:"Overlay-transparantie (0-1)",windSpeedUnit:"Windsnelheidseenheid",dailyForecastDays:"Voorspellingsdagen",hourlyForecastHours:"Voorspellingsuren",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Z_=ql;var $l={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",editor:{entity:"Entité météo",name:"Titre de la carte",height:"Hauteur de la carte",show_feels_like:"Afficher le ressenti",show_wind:"Afficher la vitesse du vent",show_wind_gust:"Afficher les rafales",show_wind_direction:"Afficher la direction du vent",show_humidity:"Afficher l’humidité",show_min_temp:"Afficher la température minimale",show_hourly_forecast:"Afficher la prévision horaire",hourly_forecast_hours:"Heures de prévision",show_daily_forecast:"Afficher la prévision quotidienne",daily_forecast_days:"Jours de prévision",show_sunrise_sunset:"Afficher lever/coucher du soleil",sunrise_entity:"Entité de lever du soleil",sunset_entity:"Entité de coucher du soleil",show_clock:"Afficher l'horloge",clock_position:"Position de l'horloge",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format de l'heure",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Opacité du voile",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",showClock:"Horloge",clockPosition:"Position de l'horloge",clockPositionTop:"En haut à droite",clockPositionDetails:"Ligne de détails",clockFormat:"Format de l'horloge",clockFormat12h:"12 heures (AM/PM)",clockFormat24h:"24 heures",overlayOpacity:"Opacité du voile (0-1)",windSpeedUnit:"Unité de vitesse du vent",dailyForecastDays:"Jours de prévision",hourlyForecastHours:"Heures de prévision",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},H_=$l;var Bl={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",editor:{entity:"Weather Entity",name:"Card Title",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",show_sunrise_sunset:"Show Sunrise/Sunset",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity",show_clock:"Show Clock",clock_position:"Clock Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Clock Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Overlay Opacity",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",wind_speed_unit:"Wind Speed Unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",showClock:"Clock",clockPosition:"Clock Position",clockPositionTop:"Top right",clockPositionDetails:"Details row",clockFormat:"Clock Format",clockFormat12h:"12-hour (AM/PM)",clockFormat24h:"24-hour",overlayOpacity:"Overlay Opacity (0-1)",windSpeedUnit:"Wind Speed Unit",dailyForecastDays:"Daily Forecast Days",hourlyForecastHours:"Hourly Forecast Hours",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian"}}},q_=Bl;var Jl={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",editor:{entity:"Entidad de clima",name:"Título de la tarjeta",height:"Altura de la tarjeta",show_feels_like:"Mostrar sensación térmica",show_wind:"Mostrar velocidad del viento",show_wind_gust:"Mostrar ráfaga de viento",show_wind_direction:"Mostrar dirección del viento",show_humidity:"Mostrar humedad",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar pronóstico por horas",hourly_forecast_hours:"Horas del pronóstico",show_daily_forecast:"Mostrar pronóstico diario",daily_forecast_days:"Días del pronóstico",show_sunrise_sunset:"Mostrar amanecer/atardecer",sunrise_entity:"Entidad de amanecer",sunset_entity:"Entidad de atardecer",show_clock:"Mostrar reloj",clock_position:"Posición del reloj",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato de hora",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidad de superposición",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",showClock:"Reloj",clockPosition:"Posición del Reloj",clockPositionTop:"Arriba a la derecha",clockPositionDetails:"Línea de detalles",clockFormat:"Formato del Reloj",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidad de Superposición (0-1)",windSpeedUnit:"Unidad de Velocidad del Viento",dailyForecastDays:"Días de Previsión",hourlyForecastHours:"Horas de Previsión",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},$_=Jl;var Ql={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",editor:{entity:"Entità meteo",name:"Titolo della scheda",height:"Altezza della scheda",show_feels_like:"Mostra temperatura percepita",show_wind:"Mostra velocità del vento",show_wind_gust:"Mostra raffiche di vento",show_wind_direction:"Mostra direzione del vento",show_humidity:"Mostra umidità",show_min_temp:"Mostra temperatura minima",show_hourly_forecast:"Mostra previsione oraria",hourly_forecast_hours:"Ore di previsione",show_daily_forecast:"Mostra previsione giornaliera",daily_forecast_days:"Giorni di previsione",show_sunrise_sunset:"Mostra alba/tramonto",sunrise_entity:"Entità alba",sunset_entity:"Entità tramonto",show_clock:"Mostra orologio",clock_position:"Posizione orologio",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato orario",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Opacità sovrapposizione",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",showClock:"Orologio",clockPosition:"Posizione Orologio",clockPositionTop:"In alto a destra",clockPositionDetails:"Riga dettagli",clockFormat:"Formato Orologio",clockFormat12h:"12 ore (AM/PM)",clockFormat24h:"24 ore",overlayOpacity:"Opacità Sovrapposizione (0-1)",windSpeedUnit:"Unità Velocità Vento",dailyForecastDays:"Giorni di Previsione",hourlyForecastHours:"Ore di Previsione",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},B_=Ql;var No={en:q_,ru:M_,de:W_,nl:Z_,fr:H_,es:$_,it:B_};class J_{lang="en";fallback="en";t(o){let _=o.split("."),l=_.reduce((k,i)=>k?.[i],No[this.lang]);if(l!=null)return l;return _.reduce((k,i)=>k?.[i],No[this.fallback])??o}setLanguage(o){if(!No[o]||this.lang===o)return;this.lang=o,window.dispatchEvent(new CustomEvent("language-changed"))}}var f=new J_;window.i18n=f;var v=({configLang:o,hassLang:_}={})=>{if(o&&o!=="auto")return o;if(_)return _;if(typeof navigator<"u"&&navigator.language){let l=navigator.language.toLowerCase();if(l.startsWith("ru"))return"ru";if(l.startsWith("de"))return"de";if(l.startsWith("nl"))return"nl";if(l.startsWith("fr"))return"fr";if(l.startsWith("it"))return"it";if(l.startsWith("es"))return"es"}return"en"};function rl(){let o=new Date,_=o.getHours(),l=o.getMinutes(),c=_*60+l;if(c>=b.SUNRISE_START&&c<b.SUNRISE_END)return{type:"sunrise",progress:(c-b.SUNRISE_START)/120};if(c>=b.SUNRISE_END&&c<b.DAY_END)return{type:"day",progress:(c-b.SUNRISE_END)/600};if(c>=b.DAY_END&&c<b.SUNSET_END)return{type:"sunset",progress:(c-b.DAY_END)/120};return{type:"night",progress:0}}function Q_(o,_,l){if(o.type==="sunrise"){let c=o.progress;return{x:_*(0.3+c*0.4),y:l*(0.85-c*0.55)}}else if(o.type==="sunset"){let c=o.progress;return{x:_*(0.5+c*0.3),y:l*(0.3+c*0.55)}}else if(o.type==="day"){let k=o.progress*Math.PI;return{x:_*(0.5+Math.sin(k)*0.25),y:l*(0.25-Math.sin(k)*0.1)}}else return{x:_*0.75,y:l*0.3}}function r_(o){if(o.type==="sunrise"){let _=o.progress,l={r:26,g:26,b:46},c={r:255,g:160,b:122},k={r:255,g:215,b:0};return{start:{r:Math.round(l.r+(c.r-l.r)*_),g:Math.round(l.g+(c.g-l.g)*_),b:Math.round(l.b+(c.b-l.b)*_)},end:{r:Math.round(l.r+(k.r-l.r)*_),g:Math.round(l.g+(k.g-l.g)*_),b:Math.round(l.b+(k.b-l.b)*_)}}}else if(o.type==="sunset"){let _=o.progress,l={r:255,g:107,b:107},c={r:255,g:160,b:122},k={r:26,g:26,b:46};return{start:{r:Math.round(l.r+(k.r-l.r)*_),g:Math.round(l.g+(k.g-l.g)*_),b:Math.round(l.b+(k.b-l.b)*_)},end:{r:Math.round(c.r+(k.r-c.r)*_),g:Math.round(c.g+(k.g-c.g)*_),b:Math.round(c.b+(k.b-c.b)*_)}}}return null}function N_(o){if(!o)return"";return`${new Date(o).getHours().toString().padStart(2,"0")}:00`}function A_(o,_){if(!o)return"";let l=new Date(o);if(Number.isNaN(l.getTime()))return"";return l.toLocaleDateString(_||void 0,{weekday:"short",day:"numeric",month:"short"})}function Ao(o,_="24h",l="AM",c="PM"){if(!o)return"";let k=typeof o==="string"?new Date(o):o,i=k.getHours(),g=k.getMinutes();if(_==="12h"){let d=i>=12?c:l;return i=i%12||12,`${i}:${g.toString().padStart(2,"0")} ${d}`}else return`${i.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`}function Go(o,_=null,l=null,c=null){let k=null,i=null;if(_&&c&&c.states[_]){let g=c.states[_];k=new Date(g.state)}if(l&&c&&c.states[l]){let g=c.states[l];i=new Date(g.state)}if(!k||!i){if(o&&o.attributes){let g=o.attributes;if(!k&&(g.forecast_sunrise||g.sunrise))k=new Date(g.forecast_sunrise||g.sunrise);if(!i&&(g.forecast_sunset||g.sunset))i=new Date(g.forecast_sunset||g.sunset)}}if((!k||!i)&&c&&c.states["sun.sun"]){let d=c.states["sun.sun"].attributes;if(!k&&d.next_rising)k=new Date(d.next_rising);if(!i&&d.next_setting)i=new Date(d.next_setting)}return{sunrise:k,sunset:i,hasSunData:!!(k&&i)}}function bo(o){let _=new Date;if(o.hasSunData&&o.sunrise&&o.sunset){let l=_.getTime(),c=o.sunrise.getTime(),k=o.sunset.getTime();if(c-l>43200000)c-=86400000;if(k-l>43200000)k-=86400000;let i=c-3600000,g=c+3600000,d=k-3600000,y=k+3600000;if(l>=i&&l<g)return{type:"sunrise",progress:(l-i)/(g-i)};if(l>=g&&l<d)return{type:"day",progress:(l-g)/(d-g)};if(l>=d&&l<y)return{type:"sunset",progress:(l-d)/(y-d)};return{type:"night",progress:0}}return rl()}class q{ctx;constructor(o){this.ctx=o}drawCloud(o,_,l,c){let k=this.ctx.shadowBlur,i=this.ctx.shadowColor,g=this.ctx.globalAlpha;this.ctx.shadowBlur=l*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${c*0.4})`,this.ctx.globalAlpha=c*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:o,y:_,r:l*0.4},{x:o+l*0.35,y:_,r:l*0.5},{x:o+l*0.65,y:_,r:l*0.48},{x:o+l*0.92,y:_,r:l*0.38},{x:o+l*0.18,y:_-l*0.28,r:l*0.38},{x:o+l*0.52,y:_-l*0.32,r:l*0.42},{x:o+l*0.78,y:_-l*0.28,r:l*0.38},{x:o+l*0.32,y:_-l*0.42,r:l*0.32},{x:o+l*0.62,y:_-l*0.48,r:l*0.36},{x:o+l*0.82,y:_-l*0.42,r:l*0.32}].forEach((y)=>{this.ctx.beginPath(),this.ctx.arc(y.x,y.y,y.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=k,this.ctx.shadowColor=i,this.ctx.globalAlpha=g}drawClouds(o,_,l,c=0.5){let k=Math.max(2,Math.floor(_/150*c));for(let i=0;i<k;i++){let g=(o*3+i*150)%(_+200)-100,d=l*(0.2+i%3*0.15)+Math.sin(o*0.2+i)*8,y=40+i%3*15,F=0.6+i%2*0.2;this.drawCloud(g,d,y,F)}}}class So extends q{draw(o,_,l,c){let k=Date.now()*0.001,i=Q_(c,_,l),g=i.x,d=i.y;if(c.type==="day"||c.type==="sunrise"||c.type==="sunset"){if(this.drawSun(g,d,k),c.type==="sunrise"||c.type==="sunset")this.drawHorizonReflection(g,d,l,k)}else if(c.type==="night")this.drawNightSky(_,l,k);this.drawClouds(k,_,l,0.3)}drawSun(o,_,l){let c=48+Math.sin(l*0.15)*1.5,k=this.ctx.createRadialGradient(o,_,c*0.3,o,_,c*3.5);k.addColorStop(0,"rgba(255, 248, 230, 0.25)"),k.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),k.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),k.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),k.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),k.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),k.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=k,this.ctx.beginPath(),this.ctx.arc(o,_,c*3.5,0,Math.PI*2),this.ctx.fill();let i=this.ctx.createRadialGradient(o,_,c*0.5,o,_,c*2.2);i.addColorStop(0,"rgba(255, 250, 220, 0.35)"),i.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),i.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),i.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),i.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=i,this.ctx.beginPath(),this.ctx.arc(o,_,c*2.2,0,Math.PI*2),this.ctx.fill();let g=this.ctx.createRadialGradient(o,_,c*0.6,o,_,c*1.6);g.addColorStop(0,"rgba(255, 252, 240, 0.5)"),g.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),g.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),g.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=g,this.ctx.beginPath(),this.ctx.arc(o,_,c*1.6,0,Math.PI*2),this.ctx.fill();let d=this.ctx.createRadialGradient(o-c*0.1,_-c*0.1,0,o,_,c);d.addColorStop(0,"#FFFEF5"),d.addColorStop(0.15,"#FFF9E6"),d.addColorStop(0.3,"#FFF4D6"),d.addColorStop(0.5,"#FFEDC0"),d.addColorStop(0.7,"#FFE4A8"),d.addColorStop(0.85,"#FFDC95"),d.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(o,_,c,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(o,_,l,c){let k=48+Math.sin(c*0.15)*1.5,i=l*0.85;if(_>=i-50){let g=Math.max(0,(i-_)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${g})`,this.ctx.beginPath(),this.ctx.ellipse(o,i,k*1.5,k*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(o,_,l){this.ctx.fillStyle="#FFFFFF";for(let i=0;i<20;i++){let g=(o*0.2+i*47)%o,d=(_*0.2+i*23)%(_*0.6),y=Math.sin(l*0.8+i)*0.5+0.5;this.ctx.globalAlpha=y*0.8,this.ctx.beginPath(),this.ctx.arc(g,d,1.5,0,Math.PI*2),this.ctx.fill()}let c=o*0.75,k=_*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(c,k,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(c-8,k-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class e extends q{rainDrops=[];lastTime=0;draw(o,_,l,c,k=!1){let i=Date.now()*0.001;this.drawClouds(i,_,l,k?1:0.8),this.drawRain(_,l,k)}drawRain(o,_,l){let c=l?130:90;if(this.rainDrops.length!==c){this.rainDrops=[];for(let d=0;d<c;d++)this.rainDrops.push({x:Math.random()*o,y:Math.random()*_-Math.random()*200,speed:l?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:l?1.2+Math.random()*1:0.8+Math.random()*0.7,length:l?8+Math.random()*10:6+Math.random()*8,alpha:l?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let k=Date.now()*0.001,i=this.lastTime>0?Math.min(k-this.lastTime,0.1):0.016666666666666666;this.lastTime=k;let g=k;for(let d=0;d<this.rainDrops.length;d++){let y=this.rainDrops[d];if(y.y+=y.speed*i,y.y>_+50)y.y=-50-Math.random()*100,y.x=Math.random()*o;let F=y.windOffset*(1+Math.sin(g*0.5+y.phase)*0.2),u=y.x+F;if(u<-10)y.x=o+10;else if(u>o+10)y.x=-10;this.drawRainDrop(u,y.y,y)}}drawRainDrop(o,_,l){this.ctx.save(),this.ctx.globalAlpha=l.alpha;let c=_-l.length*0.5,k=_+l.length*0.5,i=l.alpha,g=l.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+i+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+g+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(o,c),this.ctx.quadraticCurveTo(o-l.width*0.3,_,o-l.width,k-l.width*0.3),this.ctx.arc(o,k,l.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(o+l.width*0.3,_,o,c),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class jo extends q{snowflakes=[];lastTime=0;draw(o,_,l,c){let k=Date.now()*0.001;this.drawClouds(k,_,l,0.7),this.drawSnowflakes(_,l)}drawSnowflakes(o,_){let l=Math.floor(o*_/5000),c=Math.max(30,Math.min(l,80));if(this.snowflakes.length!==c){this.snowflakes=[];for(let d=0;d<c;d++)this.snowflakes.push({x:Math.random()*o,y:Math.random()*_-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let k=Date.now()*0.001,i=this.lastTime>0?Math.min(k-this.lastTime,0.1):0.016666666666666666;this.lastTime=k;let g=k;this.ctx.lineCap="round";for(let d=0;d<this.snowflakes.length;d++){let y=this.snowflakes[d],F=Math.sin(g*y.swaySpeed+y.swayPhase)*2;if(y.y+=y.speedY*i,y.x+=(y.speedX+F)*i,y.rotation+=y.rotationSpeed*i,y.y>_+20)y.y=-20-Math.random()*50,y.x=Math.random()*o;if(y.x<-10)y.x=o+10;else if(y.x>o+10)y.x=-10;this.drawSnowflake(y.x,y.y,y.size,y.alpha,y.rotation)}}drawSnowflake(o,_,l,c,k){this.ctx.save(),this.ctx.translate(o,_),this.ctx.rotate(k),this.ctx.strokeStyle=`rgba(255, 255, 255, ${c})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let i=0;i<6;i++){let g=Math.PI/3*i,d=Math.cos(g),y=Math.sin(g);this.ctx.moveTo(0,0),this.ctx.lineTo(y*l*2.5,d*l*2.5);let F=y*l*1.5+d*l*0.5,u=d*l*1.5-y*l*0.5,W=y*l*1.8+d*l*1.2,A=d*l*1.8-y*l*1.2;this.ctx.moveTo(F,u),this.ctx.lineTo(W,A);let H=y*l*1.5-d*l*0.5,S=d*l*1.5+y*l*0.5,V_=y*l*1.8-d*l*1.2,X_=d*l*1.8+y*l*1.2;this.ctx.moveTo(H,S),this.ctx.lineTo(V_,X_)}this.ctx.stroke(),this.ctx.restore()}}class zo extends q{draw(o,_,l,c){let k=Date.now()*0.001;this.drawClouds(k,_,l,0.7)}}class Po extends q{draw(o,_,l,c){let k=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let i=0;i<3;i++){let g=l*(0.4+i*0.2),d=Math.sin(k+i)*20;this.ctx.beginPath(),this.ctx.moveTo(0,g);for(let y=0;y<=_;y+=5){let F=Math.sin((y/_+k)*Math.PI*4+i)*15;this.ctx.lineTo(y,g+F+d)}this.ctx.lineTo(_,l),this.ctx.lineTo(0,l),this.ctx.closePath(),this.ctx.fill()}}}class Uo extends q{hailStones=[];draw(o,_,l,c){let k=Date.now()*0.001;this.drawClouds(k,_,l,1),this.drawHailStones(_,l)}drawHailStones(o,_){if(this.hailStones.length!==60){this.hailStones=[];for(let k=0;k<60;k++)this.hailStones.push({startX:Math.random()*o,startY:Math.random()*(_+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let c=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let k=0;k<this.hailStones.length;k++){let i=this.hailStones[k],g=(i.startY+c*i.speed)%(_+150);if(g>_+30)i.startY=-30-Math.random()*30,i.startX=Math.random()*o;let d=i.windOffset*(1+Math.sin(c*0.6+i.phase)*0.15),y=(i.startX+d+c*20%o)%o;if(y<-5)i.startX=o+5;else if(y>o+5)i.startX=-5;this.drawHailStone(y,g,i)}}drawHailStone(o,_,l){this.ctx.save(),this.ctx.globalAlpha=l.alpha,this.ctx.beginPath(),this.ctx.ellipse(o,_,l.size,l.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(o-l.size*0.3,_-l.size*0.3,l.size*0.3,l.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class Vo extends q{rainyAnimation;constructor(o){super(o);this.rainyAnimation=new e(o)}draw(o,_,l,c,k=!0){let i=Date.now()*0.001;if(this.drawClouds(i,_,l,1),k)this.rainyAnimation.draw(o,_,l,c,!1);this.drawLightning(_,l,i)}drawLightning(o,_,l){let c=Math.sin(l*2.5)*Math.sin(l*5.3)*Math.sin(l*7.1),k=Math.max(0,c);if(k>0.4){let i=(k-0.4)/0.6,g=i*0.6,d=Math.min(g,Math.sin(i*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${d})`,this.ctx.fillRect(0,0,o,_)}}}var G_=Co`
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
`;var Nl={wind:M`
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
  `},b_=(o)=>M`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${o}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,Al={sunny:M`
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
  `};function t(o,..._){let l=Nl[o];if(typeof l==="function")return l(..._);return l||""}function Xo(o){if(!o)return"";return Al[o.toLowerCase()]||""}class Yo extends G{animationFrame=null;canvas=null;ctx=null;canvasWidth=0;canvasHeight=0;animations={};holdTimer=null;holdDelay=500;clockInterval=null;resizeObserver=null;_wheelHandler=null;lastTap=null;holdFired=!1;hourlyForecastSubscription=null;dailyForecastSubscription=null;_testTimeOfDay;static get styles(){return G_}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:w.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:w.dailyForecastDays}}constructor(){super();this.currentTime="";this.hourlyForecast=[];this.dailyForecast=[];this.config={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{if(this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver();this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this._wheelHandler&&this.shadowRoot){let o=this.shadowRoot.querySelector(".forecast-scroll");if(o)o.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=null}if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;this.unsubscribeForecastUpdates()}updated(o){if(super.updated(o),o.has("hass")||o.has("config")){if(this.canvas&&this.ctx)this.resizeCanvas();if(this.setupForecastScroll(),this.hass&&this.config.entity)this.subscribeForecastUpdates()}if(o.has("config"))this.startClock();let _=v({configLang:this.config?.language,hassLang:this.hass?.language});if(f.lang!==_)f.setLanguage(_)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new So(this.ctx),rainy:new e(this.ctx),snowy:new jo(this.ctx),cloudy:new zo(this.ctx),foggy:new Po(this.ctx),hail:new Uo(this.ctx),thunderstorm:new Vo(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;let o=this.shadowRoot.querySelector(".canvas-container");if(!o)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(o)}setupForecastScroll(){if(!this.shadowRoot)return;let o=this.shadowRoot.querySelector(".forecast-scroll");if(!o)return;if(this._wheelHandler)o.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=(_)=>{let l=_;if(l.deltaY!==0)_.preventDefault(),o.scrollLeft+=l.deltaY},o.addEventListener("wheel",this._wheelHandler,{passive:!1})}resizeCanvas(){if(!this.canvas||!this.shadowRoot)return;let o=this.shadowRoot.querySelector(".canvas-container");if(!o)return;let _=o.getBoundingClientRect();if(_.width===0||_.height===0)return;let l=window.devicePixelRatio||2;if(this.canvas.width=_.width*l,this.canvas.height=_.height*l,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(l,l);this.canvasWidth=_.width,this.canvasHeight=_.height,this.initializeAnimations()}setupCanvas(){if(!this.shadowRoot)return;let o=this.shadowRoot.querySelector(".canvas-container");if(!o)return;let _=o.querySelector("canvas");if(_)_.remove();this.canvas=document.createElement("canvas"),o.appendChild(this.canvas),this.resizeCanvas()}getState(o){if(!this.hass||!o)return null;let _=this.hass.states[o];return _?_.state:null}getAttributes(o){if(!this.hass||!o)return{};let _=this.hass.states[o];return _?_.attributes:{}}getWeatherData(){let o=this.config.entity||"weather.home",_=this.getState(o),l=this.getAttributes(o),c=l.condition||_||"sunny",k=null;if(this.config.templowAttribute&&l[this.config.templowAttribute]!=null)k=l[this.config.templowAttribute];else{for(let i of K_)if(l[i]!=null){k=l[i];break}if(k==null)k=(l.forecast&&l.forecast[0]?l.forecast[0].templow??null:null)||(l.forecast_hourly&&l.forecast_hourly[0]?l.forecast_hourly[0].native_templow??null:null)}return{condition:c,temperature:l.temperature!=null?l.temperature:null,apparentTemperature:l.apparent_temperature||null,humidity:l.humidity!=null?l.humidity:null,windSpeed:l.wind_speed!=null?l.wind_speed:null,windGust:l.wind_gust_speed||l.wind_gust||null,windBearing:l.wind_bearing!=null?l.wind_bearing:null,windDirection:l.wind_direction||null,pressure:l.pressure||null,forecast:l.forecast||l.forecast_hourly||this.hourlyForecast||[],friendlyName:l.friendly_name||f.t("weather"),templow:k}}async subscribeForecastUpdates(){if(!this.hass||!this.config.entity)return;this.unsubscribeForecastUpdates();try{if(this.hourlyForecastSubscription=this.hass.connection.subscribeMessage((o)=>{if(o.forecast&&o.forecast.length>0)this.hourlyForecast=o.forecast},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:this.config.entity}),this.config.showDailyForecast)this.dailyForecastSubscription=this.hass.connection.subscribeMessage((o)=>{if(o.forecast&&o.forecast.length>0)this.dailyForecast=o.forecast},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:this.config.entity})}catch{}}async unsubscribeForecastUpdates(){if(this.hourlyForecastSubscription){try{(await this.hourlyForecastSubscription)()}catch{}this.hourlyForecastSubscription=null}if(this.dailyForecastSubscription){try{(await this.dailyForecastSubscription)()}catch{}this.dailyForecastSubscription=null}}getTodayForecast(){if(!this.hass||!this.config)return[];let o=Math.max(1,Math.floor(Number(this.config.hourlyForecastHours??w.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,o);let _=this.getWeatherData();if(!_.forecast||_.forecast.length===0)return[];let l=new Date,c=new Date(l.getFullYear(),l.getMonth(),l.getDate()),k=new Date(c);return k.setDate(k.getDate()+1),_.forecast.filter((g)=>{if(!g.datetime)return!1;let d=new Date(g.datetime),y=new Date(d.getFullYear(),d.getMonth(),d.getDate());return y.getTime()===c.getTime()||y.getTime()===k.getTime()&&d.getHours()<=l.getHours()}).sort((g,d)=>new Date(g.datetime).getTime()-new Date(d.datetime).getTime()).slice(0,o)}getWeekForecast(){if(!this.hass||!this.config)return[];if(this.dailyForecast&&this.dailyForecast.length>0){let d=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??w.dailyForecastDays)));return this.dailyForecast.slice(0,d)}let o=this.getWeatherData();if(!o.forecast||o.forecast.length===0)return[];let _=Math.max(1,Math.floor(Number(this.config.dailyForecastDays??w.dailyForecastDays))),l=new Date,c=new Date(l.getFullYear(),l.getMonth(),l.getDate()),k=new Date(c);k.setDate(k.getDate()+_);let i=(d)=>{let y=d.getFullYear(),F=String(d.getMonth()+1).padStart(2,"0"),u=String(d.getDate()).padStart(2,"0");return`${y}-${F}-${u}`},g=new Map;return o.forecast.forEach((d)=>{if(!d.datetime)return;let y=new Date(d.datetime);if(Number.isNaN(y.getTime()))return;if(y<c||y>=k)return;let F=i(y),u=Math.abs(y.getHours()+y.getMinutes()/60-12),W=g.get(F);if(!W||u<W.hourScore)g.set(F,{item:d,itemDate:y,hourScore:u})}),Array.from(g.values()).sort((d,y)=>d.itemDate.getTime()-y.itemDate.getTime()).map((d)=>d.item).slice(0,_)}startAnimation(){let o=()=>{this.draw(),this.animationFrame=requestAnimationFrame(o)};o()}draw(){if(!this.ctx||!this.canvas)return;if(!this.canvasWidth||!this.canvasHeight){if(this.resizeCanvas(),!this.canvasWidth||!this.canvasHeight)return}let o=this.canvasWidth,_=this.canvasHeight;this.ctx.clearRect(0,0,o,_);let l=this.getWeatherData(),c=this.hass?.states[this.config.entity],k=Go(c||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),i=this._testTimeOfDay||bo(k);switch(l.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),o,_,i);break;case"clear-night":this.animations.sunny?.draw(Date.now(),o,_,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),o,_,i,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),o,_,i,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),o,_,i);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),o,_,i,!1),this.animations.snowy?.draw(Date.now(),o,_,i);break;case"hail":this.animations.hail?.draw(Date.now(),o,_,i);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),o,_,i);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),o,_,i,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),o,_,i,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),o,_,i);break}}renderTodayForecast(){let o=this.getTodayForecast();if(o.length===0)return K`<div style="opacity: 0.6; font-size: 14px;">${f.t("forecast_unavailable")}</div>`;return K`
      <div class="forecast-scroll">
        ${o.map((_)=>K`
          <div class="forecast-item">
            <div class="forecast-time">${N_(_.datetime)}</div>
            <div class="forecast-icon">${Xo(_.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(_.temperature||_.temp||_.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}renderDailyForecast(){let o=this.getWeekForecast();if(o.length===0)return K`<div style="opacity: 0.6; font-size: 14px;">${f.t("forecast_unavailable")}</div>`;return K`
      <div class="forecast-scroll">
        ${o.map((_)=>K`
          <div class="forecast-item">
            <div class="forecast-time">${A_(_.datetime,f.lang)}</div>
            <div class="forecast-icon">${Xo(_.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(_.temperature||_.temp||_.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}convertWindSpeed(o){if(o==null)return null;let _=this.config.entity||"weather.home";if(this.getAttributes(_).wind_speed_unit)return Math.round(o*10)/10;if(this.config.windSpeedUnit==="kmh")return Math.round(o*3.6*10)/10;return Math.round(o*10)/10}getWindSpeedUnit(){let o=this.config.entity||"weather.home",l=this.getAttributes(o).wind_speed_unit;if(l){let c=l.toLowerCase().replace(/[^a-z]/g,"");if(c==="kmh"||c==="kmph")return f.t("wind_unit_kmh");else if(c==="ms"||c==="mps")return f.t("wind_unit_ms");else if(c==="mph")return f.t("wind_unit_mph");else if(c==="knots"||c==="kn"||c==="kt")return f.t("wind_unit_knots");else if(c==="fts"||c==="ftps")return f.t("wind_unit_fts");return l}return this.config.windSpeedUnit==="kmh"?f.t("wind_unit_kmh"):f.t("wind_unit_ms")}formatCurrentTime(){let o=new Date;if(this.config.clockFormat==="12h"){let l=o.getHours(),c=String(o.getMinutes()).padStart(2,"0"),k=l>=12?f.t("pm"):f.t("am");return l=l%12||12,`${l}:${c} ${k}`}else{let l=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0");return`${l}:${c}`}}startClock(){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;if(!this.config.showClock)return;this.currentTime=this.formatCurrentTime(),this.clockInterval=window.setInterval(()=>{this.currentTime=this.formatCurrentTime()},1000)}render(){if(!this.hass)return K`<div>No Home Assistant connection</div>`;let o=this.getWeatherData(),_=this.hass.states[this.config.entity],l=Go(_,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),c=this._testTimeOfDay||bo(l),k=`weather-card ${c.type}`,i=this.config.height?`${this.config.height}px`:"200px",g=r_(c),d=g?`background: linear-gradient(135deg, rgb(${g.start.r}, ${g.start.g}, ${g.start.b}), rgb(${g.end.r}, ${g.end.g}, ${g.end.b}));`:"",F=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:w.overlayOpacity};`;return K`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${k}" style="min-height: ${i}; ${d}; ${F} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name&&this.config.name.trim()!==""?K`
              <div class="header">
                <div class="location">${this.config.name}</div>
              </div>
            `:""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${f.t(o.condition)}</div>
                <div class="temperature">${o.temperature!=null?Math.round(o.temperature)+"°":f.t("no_data")}</div>
                ${this.config.showMinTemp?K`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${o.templow!=null?`${Math.round(o.templow)}°`:f.t("no_data")}</span>
                  </div>
                `:""}
                ${this.config.showFeelsLike?K`
                  <div class="feels-like">${f.t("feels_like")} ${o.apparentTemperature!=null?`${Math.round(o.apparentTemperature)}°`:f.t("no_data")}</div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="top"?K`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
              <div class="info-grid">
                ${this.config.showHumidity&&o.humidity!=null?K`
                  <div class="info-item">
                    <span class="info-icon">${t("humidity")}</span>
                    <span>${o.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&l.hasSunData&&l.sunrise?K`
                  <div class="info-item">
                    <span class="info-icon">${t("sunrise")}</span>
                    <span>${Ao(l.sunrise,this.config.clockFormat,f.t("am"),f.t("pm"))}</span>
                  </div>
                `:""}
                ${this.config.showWind&&o.windSpeed!=null?K`
                  ${this.config.showWindDirection&&o.windBearing!=null?K`
                    <div class="info-item">
                      <span class="info-icon">${b_(o.windBearing)}</span>
                      <span>${this.convertWindSpeed(o.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&o.windGust?` / ${this.convertWindSpeed(o.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:K`
                    <div class="info-item">
                      <span class="info-icon">${t("wind")}</span>
                      <span>${this.convertWindSpeed(o.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&o.windGust?` / ${this.convertWindSpeed(o.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&l.hasSunData&&l.sunset?K`
                  <div class="info-item">
                    <span class="info-icon">${t("sunset")}</span>
                    <span>${Ao(l.sunset,this.config.clockFormat,f.t("am"),f.t("pm"))}</span>
                  </div>
                `:""}
              </div>
              ${this.config.showClock&&this.config.clockPosition==="details"?K`
                <div class="clock">${this.currentTime}</div>
              `:""}
            </div>
            ${this.config.showHourlyForecast?K`
              <div class="forecast-container">
                <div class="forecast-title">${f.t("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
            ${this.config.showDailyForecast?K`
              <div class="forecast-container">
                <div class="forecast-title">${f.t("daily_forecast_title")}</div>
                ${this.renderDailyForecast()}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}setConfig(o){if(!o.entity)throw Error("Please define a weather entity");let _=o.show_hourly_forecast??o.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:o.entity,icons_path:o.icons_path,name:o.name,height:o.height||w.height,showFeelsLike:o.show_feels_like!==!1,showWind:o.show_wind!==!1,showWindGust:o.show_wind_gust!==!1,showWindDirection:o.show_wind_direction!==!1,showHumidity:o.show_humidity!==!1,showMinTemp:o.show_min_temp!==!1,showForecast:o.show_forecast===!0,showHourlyForecast:_===!0,showDailyForecast:o.show_daily_forecast===!0,hourlyForecastHours:o.hourly_forecast_hours??w.hourlyForecastHours,dailyForecastDays:o.daily_forecast_days??w.dailyForecastDays,showSunriseSunset:o.show_sunrise_sunset!==!1,showClock:o.show_clock===!0,clockPosition:o.clock_position||w.clockPosition,clockFormat:o.clock_format||w.clockFormat,overlayOpacity:o.overlay_opacity!==void 0?o.overlay_opacity:w.overlayOpacity,language:o.language||w.language,windSpeedUnit:o.wind_speed_unit||w.windSpeedUnit,sunriseEntity:o.sunrise_entity||null,sunsetEntity:o.sunset_entity||null,templowAttribute:o.templow_attribute||null,tapAction:o.tap_action||{action:"more-info"},holdAction:o.hold_action||{action:"none"},doubleTapAction:o.double_tap_action||{action:"none"}},this.config.language)f.setLanguage(this.config.language)}handleAction(o){if(!o||!this.hass)return;switch(o.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:o.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:o.entity||this.config.entity});break;case"call-service":if(o.service){let[l,c]=o.service.split(".");this.hass.callService(l,c,o.service_data||{})}break;case"navigate":if(o.navigation_path)window.history.pushState(null,"",o.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(o.url_path)window.open(o.url_path);break;case"none":default:break}}fireEvent(o,_={}){let l=new CustomEvent(o,{detail:_,bubbles:!0,composed:!0});this.dispatchEvent(l)}handleTap(o){if(o.target.closest(".forecast-item")||o.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(o),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.config.tapAction),this.lastTap=null},300)}handlePointerDown(o){this.holdTimer=window.setTimeout(()=>{this.handleHold(o),this.holdFired=!0},this.holdDelay)}handlePointerUp(o){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)o.preventDefault(),o.stopPropagation(),this.holdFired=!1}handleHold(o){this.handleAction(this.config.holdAction)}handleDoubleTap(o){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}j([x({type:Object})],Yo.prototype,"hass",void 0),j([x({type:Object})],Yo.prototype,"config",void 0),j([C()],Yo.prototype,"currentTime",void 0),j([C()],Yo.prototype,"hourlyForecast",void 0),j([C()],Yo.prototype,"dailyForecast",void 0);class so extends G{constructor(){super(...arguments);this._config={}}setConfig(o){this._config={name:"",height:w.height,show_feels_like:w.showFeelsLike,show_wind:w.showWind,show_wind_gust:w.showWindGust,show_wind_direction:w.showWindDirection,show_humidity:w.showHumidity,show_min_temp:w.showMinTemp,show_hourly_forecast:w.showHourlyForecast,hourly_forecast_hours:w.hourlyForecastHours,show_daily_forecast:w.showDailyForecast,daily_forecast_days:w.dailyForecastDays,show_sunrise_sunset:w.showSunriseSunset,show_clock:w.showClock,clock_position:w.clockPosition,clock_format:w.clockFormat,overlay_opacity:w.overlayOpacity,language:w.language,wind_speed_unit:w.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...o}}updated(o){if(super.updated(o),o.has("hass")){let _=v({hassLang:this.hass?.language});if(f.lang!==_)f.setLanguage(_),this.requestUpdate()}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"height",selector:{number:{min:200,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"show_clock",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:f.t("editor.clock_position_top"),value:"top"},{label:f.t("editor.clock_position_details"),value:"details"}]}}},{name:"clock_format",selector:{select:{options:[{label:f.t("editor.clock_format_24h"),value:"24h"},{label:f.t("editor.clock_format_12h"),value:"12h"}]}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"language",selector:{select:{options:[{label:f.t("editor.language_auto"),value:"auto"},{label:f.t("editor.language_en"),value:"en"},{label:f.t("editor.language_ru"),value:"ru"},{label:f.t("editor.language_de"),value:"de"},{label:f.t("editor.language_nl"),value:"nl"},{label:f.t("editor.language_fr"),value:"fr"},{label:f.t("editor.language_es"),value:"es"}]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:f.t("editor.wind_speed_unit_ms"),value:"ms"},{label:f.t("editor.wind_speed_unit_kmh"),value:"kmh"}]}}}]}_computeLabel=(o)=>{let _=`editor.${o.name}`,l=f.t(_);return l===_?o.name:l};_valueChanged(o){let _=o.detail?.value;if(!_)return;this._config=_,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return K``;return K`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}j([x({attribute:!1})],so.prototype,"hass",void 0),j([C()],so.prototype,"_config",void 0);var S_={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},j_=(o)=>(..._)=>({["_$litDirective$"]:o,values:_});class xo{constructor(o){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(o,_,l){this.__part=o,this._$parent=_,this.__attributeIndex=l}_$resolve(o,_){return this.update(o,_)}update(o,_){return this.render(..._)}}var Gl=!0,Rk=Gl&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(o)=>o;var z_=(o)=>o.strings===void 0;var bl=!0,oo=(o,_)=>{let l=o._$disconnectableChildren;if(l===void 0)return!1;for(let c of l)c._$notifyDirectiveConnectionChanged?.(_,!1),oo(c,_);return!0},uo=(o)=>{let _,l;do{if((_=o._$parent)===void 0)break;l=_._$disconnectableChildren,l.delete(o),o=_}while(l?.size===0)},P_=(o)=>{for(let _;_=o._$parent;o=_){let l=_._$disconnectableChildren;if(l===void 0)_._$disconnectableChildren=l=new Set;else if(l.has(o))break;l.add(o),zl(_)}};function Sl(o){if(this._$disconnectableChildren!==void 0)uo(this),this._$parent=o,P_(this);else this._$parent=o}function jl(o,_=!1,l=0){let c=this._$committedValue,k=this._$disconnectableChildren;if(k===void 0||k.size===0)return;if(_){if(Array.isArray(c))for(let i=l;i<c.length;i++)oo(c[i],!1),uo(c[i]);else if(c!=null)oo(c,!1),uo(c)}else oo(this,o)}var zl=(o)=>{if(o.type==S_.CHILD)o._$notifyConnectionChanged??=jl,o._$reparentDisconnectables??=Sl};class To extends xo{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(o,_,l){super._$initialize(o,_,l),P_(this),this.isConnected=o._$isConnected}["_$notifyDirectiveConnectionChanged"](o,_=!0){if(o!==this.isConnected)if(this.isConnected=o,o)this.reconnected?.();else this.disconnected?.();if(_)oo(this,o),uo(this)}setValue(o){if(z_(this.__part))this.__part._$setValue(o,this);else{if(bl&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let _=[...this.__part._$committedValue];_[this.__attributeIndex]=o,this.__part._$setValue(_,this,0)}}disconnected(){}reconnected(){}}class U_ extends To{_key="";_onLangChange=null;render(o){return this._key=o,f.t(o)}reconnected(){this._onLangChange=()=>{this.setValue(f.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var Pl=j_(U_);try{customElements.define("dynamic-weather-card",Yo),customElements.define("dynamic-weather-card-editor",so),console.log(`%cDynamic Weather Card %c${F_}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let o={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(o)}catch(o){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",o)}export{Pl as t,v as resolveLanguage,f as i18n};
