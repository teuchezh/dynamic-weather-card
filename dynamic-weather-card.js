var m=function(i,o,a,n){var e=arguments.length,l=e<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,a):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(i,o,a,n);else for(var s=i.length-1;s>=0;s--)if(r=i[s])l=(e<3?r(l):e>3?r(o,a,l):r(o,a))||l;return e>3&&l&&Object.defineProperty(o,a,l),l};var ni=globalThis,fi=ni.ShadowRoot&&(ni.ShadyCSS===void 0||ni.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pi=Symbol(),io=new WeakMap;class zi{constructor(i,o,a){if(this._$cssResult$=!0,a!==pi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this._strings=o}get styleSheet(){let i=this._styleSheet,o=this._strings;if(fi&&i===void 0){let a=o!==void 0&&o.length===1;if(a)i=io.get(o);if(i===void 0){if((this._styleSheet=i=new CSSStyleSheet).replaceSync(this.cssText),a)io.set(o,i)}}return i}toString(){return this.cssText}}var sa=(i)=>{if(i._$cssResult$===!0)return i.cssText;else if(typeof i==="number")return i;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},ta=(i)=>new zi(typeof i==="string"?i:String(i),void 0,pi),T=(i,...o)=>{let a=i.length===1?i[0]:o.reduce((n,e,l)=>n+sa(e)+i[l+1],i[0]);return new zi(a,i,pi)},oo=(i,o)=>{if(fi)i.adoptedStyleSheets=o.map((a)=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(let a of o){let n=document.createElement("style"),e=ni.litNonce;if(e!==void 0)n.setAttribute("nonce",e);n.textContent=a.cssText,i.appendChild(n)}},da=(i)=>{let o="";for(let a of i.cssRules)o+=a.cssText;return ta(o)},vi=fi?(i)=>i:(i)=>i instanceof CSSStyleSheet?da(i):i;var{is:ca,defineProperty:ua,getOwnPropertyDescriptor:ao,getOwnPropertyNames:ga,getOwnPropertySymbols:_a,getPrototypeOf:no}=Object,ha=!1,F=globalThis;if(ha)F.customElements??=customElements;var b=!0,H,eo=F.trustedTypes,ka=eo?eo.emptyScript:"",ro=b?F.reactiveElementPolyfillSupportDevMode:F.reactiveElementPolyfillSupport;if(b)F.litIssuedWarnings??=new Set,H=(i,o)=>{if(o+=` See https://lit.dev/msg/${i} for more information.`,!F.litIssuedWarnings.has(o)&&!F.litIssuedWarnings.has(i))console.warn(o),F.litIssuedWarnings.add(o)},queueMicrotask(()=>{if(H("dev-mode","Lit is in dev mode. Not recommended for production!"),F.ShadyDOM?.inUse&&ro===void 0)H("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var ya=b?(i)=>{if(!F.emitLitDebugLogEvents)return;F.dispatchEvent(new CustomEvent("lit-debug",{detail:i}))}:void 0,x=(i,o)=>i,G={toAttribute(i,o){switch(o){case Boolean:i=i?ka:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i);break}return i},fromAttribute(i,o){let a=i;switch(o){case Boolean:a=i!==null;break;case Number:a=i===null?null:Number(i);break;case Object:case Array:try{a=JSON.parse(i)}catch(n){a=null}break}return a}},ei=(i,o)=>!ca(i,o),lo={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:ei};Symbol.metadata??=Symbol("metadata");F.litPropertyMetadata??=new WeakMap;class P extends HTMLElement{static addInitializer(i){this.__prepare(),(this._initializers??=[]).push(i)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(i,o=lo){if(o.state)o.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(i))o=Object.create(o),o.wrapped=!0;if(this.elementProperties.set(i,o),!o.noAccessor){let a=b?Symbol.for(`${String(i)} (@property() cache)`):Symbol(),n=this.getPropertyDescriptor(i,a,o);if(n!==void 0)ua(this.prototype,i,n)}}static getPropertyDescriptor(i,o,a){let{get:n,set:e}=ao(this.prototype,i)??{get(){return this[o]},set(l){this[o]=l}};if(b&&n==null){if("value"in(ao(this.prototype,i)??{}))throw Error(`Field ${JSON.stringify(String(i))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);H("reactive-property-without-getter",`Field ${JSON.stringify(String(i))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:n,set(l){let r=n?.call(this);e?.call(this,l),this.requestUpdate(i,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??lo}static __prepare(){if(this.hasOwnProperty(x("elementProperties",this)))return;let i=no(this);if(i.finalize(),i._initializers!==void 0)this._initializers=[...i._initializers];this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(x("properties",this))){let o=this.properties,a=[...ga(o),..._a(o)];for(let n of a)this.createProperty(n,o[n])}let i=this[Symbol.metadata];if(i!==null){let o=litPropertyMetadata.get(i);if(o!==void 0)for(let[a,n]of o)this.elementProperties.set(a,n)}this.__attributeToPropertyMap=new Map;for(let[o,a]of this.elementProperties){let n=this.__attributeNameForProperty(o,a);if(n!==void 0)this.__attributeToPropertyMap.set(n,o)}if(this.elementStyles=this.finalizeStyles(this.styles),b){if(this.hasOwnProperty("createProperty"))H("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))H("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(i){let o=[];if(Array.isArray(i)){let a=new Set(i.flat(1/0).reverse());for(let n of a)o.unshift(vi(n))}else if(i!==void 0)o.push(vi(i));return o}static __attributeNameForProperty(i,o){let a=o.attribute;return a===!1?void 0:typeof a==="string"?a:typeof i==="string"?i.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((i)=>this.enableUpdating=i),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((i)=>i(this))}addController(i){if((this.__controllers??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected)i.hostConnected?.()}removeController(i){this.__controllers?.delete(i)}__saveInstanceProperties(){let i=new Map,o=this.constructor.elementProperties;for(let a of o.keys())if(this.hasOwnProperty(a))i.set(a,this[a]),delete this[a];if(i.size>0)this.__instanceProperties=i}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oo(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((i)=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this.__controllers?.forEach((i)=>i.hostDisconnected?.())}attributeChangedCallback(i,o,a){this._$attributeToProperty(i,a)}__propertyToAttribute(i,o){let n=this.constructor.elementProperties.get(i),e=this.constructor.__attributeNameForProperty(i,n);if(e!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:G).toAttribute(o,n.type);if(b&&this.constructor.enabledWarnings.includes("migration")&&r===void 0)H("undefined-attribute-value",`The attribute value for the ${i} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=i,r==null)this.removeAttribute(e);else this.setAttribute(e,r);this.__reflectingProperty=null}}_$attributeToProperty(i,o){let a=this.constructor,n=a.__attributeToPropertyMap.get(i);if(n!==void 0&&this.__reflectingProperty!==n){let e=a.getPropertyOptions(n),l=typeof e.converter==="function"?{fromAttribute:e.converter}:e.converter?.fromAttribute!==void 0?e.converter:G;this.__reflectingProperty=n;let r=l.fromAttribute(o,e.type);this[n]=r??this.__defaultValues?.get(n)??r,this.__reflectingProperty=null}}requestUpdate(i,o,a,n=!1,e){if(i!==void 0){if(b&&i instanceof Event)H("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let l=this.constructor;if(n===!1)e=this[i];if(a??=l.getPropertyOptions(i),(a.hasChanged??ei)(e,o)||a.useDefault&&a.reflect&&e===this.__defaultValues?.get(i)&&!this.hasAttribute(l.__attributeNameForProperty(i,a)))this._$changeProperty(i,o,a);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(i,o,{useDefault:a,reflect:n,wrapped:e},l){if(a&&!(this.__defaultValues??=new Map).has(i)){if(this.__defaultValues.set(i,l??o??this[i]),e!==!0||l!==void 0)return}if(!this._$changedProperties.has(i)){if(!this.hasUpdated&&!a)o=void 0;this._$changedProperties.set(i,o)}if(n===!0&&this.__reflectingProperty!==i)(this.__reflectingProperties??=new Set).add(i)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(o){Promise.reject(o)}let i=this.scheduleUpdate();if(i!=null)await i;return!this.isUpdatePending}scheduleUpdate(){let i=this.performUpdate();if(b&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof i?.then==="function")H("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return i}performUpdate(){if(!this.isUpdatePending)return;if(ya?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),b){let e=[...this.constructor.elementProperties.keys()].filter((l)=>this.hasOwnProperty(l)&&(l in no(this)));if(e.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${e.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[n,e]of this.__instanceProperties)this[n]=e;this.__instanceProperties=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[n,e]of a){let{wrapped:l}=e,r=this[n];if(l===!0&&!this._$changedProperties.has(n)&&r!==void 0)this._$changeProperty(n,void 0,e,r)}}let i=!1,o=this._$changedProperties;try{if(i=this.shouldUpdate(o),i)this.willUpdate(o),this.__controllers?.forEach((a)=>a.hostUpdate?.()),this.update(o);else this.__markUpdated()}catch(a){throw i=!1,this.__markUpdated(),a}if(i)this._$didUpdate(o)}willUpdate(i){}_$didUpdate(i){if(this.__controllers?.forEach((o)=>o.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(i);if(this.updated(i),b&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))H("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(i){return!0}update(i){this.__reflectingProperties&&=this.__reflectingProperties.forEach((o)=>this.__propertyToAttribute(o,this[o])),this.__markUpdated()}updated(i){}firstUpdated(i){}}P.elementStyles=[];P.shadowRootOptions={mode:"open"};P[x("elementProperties",P)]=new Map;P[x("finalized",P)]=new Map;ro?.({ReactiveElement:P});if(b){P.enabledWarnings=["change-in-update","async-perform-update"];let i=function(o){if(!o.hasOwnProperty(x("enabledWarnings",o)))o.enabledWarnings=o.enabledWarnings.slice()};P.enableWarning=function(o){if(i(this),!this.enabledWarnings.includes(o))this.enabledWarnings.push(o)},P.disableWarning=function(o){i(this);let a=this.enabledWarnings.indexOf(o);if(a>=0)this.enabledWarnings.splice(a,1)}}(F.reactiveElementVersions??=[]).push("2.1.2");if(b&&F.reactiveElementVersions.length>1)queueMicrotask(()=>{H("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var S=globalThis,h=(i)=>{if(!S.emitLitDebugLogEvents)return;S.dispatchEvent(new CustomEvent("lit-debug",{detail:i}))},ma=0,U;S.litIssuedWarnings??=new Set,U=(i,o)=>{if(o+=i?` See https://lit.dev/msg/${i} for more information.`:"",!S.litIssuedWarnings.has(o)&&!S.litIssuedWarnings.has(i))console.warn(o),S.litIssuedWarnings.add(o)},queueMicrotask(()=>{U("dev-mode","Lit is in dev mode. Not recommended for production!")});var A=S.ShadyDOM?.inUse&&S.ShadyDOM?.noPatch===!0?S.ShadyDOM.wrap:(i)=>i,li=S.trustedTypes,so=li?li.createPolicy("lit-html",{createHTML:(i)=>i}):void 0,wa=(i)=>i,di=(i,o,a)=>wa,fa=(i)=>{if(q!==di)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");q=i},pa=()=>{q=di},Si=(i,o,a)=>{return q(i,o,a)},ko="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,yo="?"+K,za=`<${yo}>`,J=document,L=()=>J.createComment(""),X=(i)=>i===null||typeof i!="object"&&typeof i!="function",ji=Array.isArray,va=(i)=>ji(i)||typeof i?.[Symbol.iterator]==="function",Mi=`[ 	
\f\r]`,Ma=`[^ 	
\f\r"'\`<>=]`,Fa=`[^\\s"'>=/]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,to=1,Fi=2,ba=3,co=/-->/g,uo=/>/g,C=new RegExp(`>|${Mi}(?:(${Fa}+)(${Mi}*=${Mi}*(?:${Ma}|("|')|))|$)`,"g"),Pa=0,go=1,Sa=2,_o=3,bi=/'/g,Pi=/"/g,mo=/^(?:script|style|textarea|title)$/i,ja=1,ri=2,si=3,Hi=1,ti=2,Ha=3,Aa=4,Na=5,Ai=6,Ka=7,Ni=(i)=>(o,...a)=>{if(o.some((n)=>n===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(a.some((n)=>n?._$litStatic$))U("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:i,strings:o,values:a}},u=Ni(ja),k=Ni(ri),wn=Ni(si),W=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),ho=new WeakMap,B=J.createTreeWalker(J,129),q=di;function wo(i,o){if(!ji(i)||!i.hasOwnProperty("raw")){let a="invalid template strings array";throw a=`
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
`),Error(a)}return so!==void 0?so.createHTML(o):o}var Za=(i,o)=>{let a=i.length-1,n=[],e=o===ri?"<svg>":o===si?"<math>":"",l,r=V;for(let t=0;t<a;t++){let g=i[t],_=-1,y,f=0,p;while(f<g.length){if(r.lastIndex=f,p=r.exec(g),p===null)break;if(f=r.lastIndex,r===V){if(p[to]==="!--")r=co;else if(p[to]!==void 0)r=uo;else if(p[Fi]!==void 0){if(mo.test(p[Fi]))l=new RegExp(`</${p[Fi]}`,"g");r=C}else if(p[ba]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(r===C)if(p[Pa]===">")r=l??V,_=-1;else if(p[go]===void 0)_=-2;else _=r.lastIndex-p[Sa].length,y=p[go],r=p[_o]===void 0?C:p[_o]==='"'?Pi:bi;else if(r===Pi||r===bi)r=C;else if(r===co||r===uo)r=V;else r=C,l=void 0}console.assert(_===-1||r===C||r===bi||r===Pi,"unexpected parse state B");let j=r===C&&i[t+1].startsWith("/>")?" ":"";e+=r===V?g+za:_>=0?(n.push(y),g.slice(0,_)+ko+g.slice(_))+K+j:g+K+(_===-2?t:j)}let s=e+(i[a]||"<?>")+(o===ri?"</svg>":o===si?"</math>":"");return[wo(i,s),n]};class Y{constructor({strings:i,["_$litType$"]:o},a){this.parts=[];let n,e=0,l=0,r=i.length-1,s=this.parts,[t,g]=Za(i,o);if(this.el=Y.createElement(t,a),B.currentNode=this.el.content,o===ri||o===si){let _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}while((n=B.nextNode())!==null&&s.length<r){if(n.nodeType===1){{let _=n.localName;if(/^(?:textarea|template)$/i.test(_)&&n.innerHTML.includes(K)){let y=`Expressions are not supported inside \`${_}\` elements. See https://lit.dev/msg/expression-in-${_} for more information.`;if(_==="template")throw Error(y);else U("",y)}}if(n.hasAttributes()){for(let _ of n.getAttributeNames())if(_.endsWith(ko)){let y=g[l++],p=n.getAttribute(_).split(K),j=/([.?@])?(.*)/.exec(y);s.push({type:Hi,index:e,name:j[2],strings:p,ctor:j[1]==="."?po:j[1]==="?"?zo:j[1]==="@"?vo:I}),n.removeAttribute(_)}else if(_.startsWith(K))s.push({type:Ai,index:e}),n.removeAttribute(_)}if(mo.test(n.tagName)){let _=n.textContent.split(K),y=_.length-1;if(y>0){n.textContent=li?li.emptyScript:"";for(let f=0;f<y;f++)n.append(_[f],L()),B.nextNode(),s.push({type:ti,index:++e});n.append(_[y],L())}}}else if(n.nodeType===8)if(n.data===yo)s.push({type:ti,index:e});else{let y=-1;while((y=n.data.indexOf(K,y+1))!==-1)s.push({type:Ka,index:e}),y+=K.length-1}e++}if(g.length!==l)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+i.join("${...}")+"`");h&&h({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:i})}static createElement(i,o){let a=J.createElement("template");return a.innerHTML=i,a}}function $(i,o,a=i,n){if(o===W)return o;let e=n!==void 0?a.__directives?.[n]:a.__directive,l=X(o)?void 0:o._$litDirective$;if(e?.constructor!==l){if(e?._$notifyDirectiveConnectionChanged?.(!1),l===void 0)e=void 0;else e=new l(i),e._$initialize(i,a,n);if(n!==void 0)(a.__directives??=[])[n]=e;else a.__directive=e}if(e!==void 0)o=$(i,e._$resolve(i,o.values),e,n);return o}class fo{constructor(i,o){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=i,this._$parent=o}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(i){let{el:{content:o},parts:a}=this._$template,n=(i?.creationScope??J).importNode(o,!0);B.currentNode=n;let e=B.nextNode(),l=0,r=0,s=a[0];while(s!==void 0){if(l===s.index){let t;if(s.type===ti)t=new O(e,e.nextSibling,this,i);else if(s.type===Hi)t=new s.ctor(e,s.name,s.strings,this,i);else if(s.type===Ai)t=new Mo(e,this,i);this._$parts.push(t),s=a[++r]}if(l!==s?.index)e=B.nextNode(),l++}return B.currentNode=J,n}_update(i){let o=0;for(let a of this._$parts){if(a!==void 0)if(h&&h({kind:"set part",part:a,value:i[o],valueIndex:o,values:i,templateInstance:this}),a.strings!==void 0)a._$setValue(i,a,o),o+=a.strings.length-2;else a._$setValue(i[o]);o++}}}class O{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(i,o,a,n){this.type=ti,this._$committedValue=z,this._$disconnectableChildren=void 0,this._$startNode=i,this._$endNode=o,this._$parent=a,this.options=n,this.__isConnected=n?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let i=A(this._$startNode).parentNode,o=this._$parent;if(o!==void 0&&i?.nodeType===11)i=o.parentNode;return i}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(i,o=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(i=$(this,i,o),X(i)){if(i===z||i==null||i===""){if(this._$committedValue!==z)h&&h({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=z}else if(i!==this._$committedValue&&i!==W)this._commitText(i)}else if(i._$litType$!==void 0)this._commitTemplateResult(i);else if(i.nodeType!==void 0){if(this.options?.host===i){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",i,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(i)}else if(va(i))this._commitIterable(i);else this._commitText(i)}_insert(i){return A(A(this._$startNode).parentNode).insertBefore(i,this._$endNode)}_commitNode(i){if(this._$committedValue!==i){if(this._$clear(),q!==di){let o=this._$startNode.parentNode?.nodeName;if(o==="STYLE"||o==="SCRIPT"){let a="Forbidden";if(o==="STYLE")a="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else a="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(a)}}h&&h({kind:"commit node",start:this._$startNode,parent:this._$parent,value:i,options:this.options}),this._$committedValue=this._insert(i)}}_commitText(i){if(this._$committedValue!==z&&X(this._$committedValue)){let o=A(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Si(o,"data","property");i=this._textSanitizer(i),h&&h({kind:"commit text",node:o,value:i,options:this.options}),o.data=i}else{let o=J.createTextNode("");if(this._commitNode(o),this._textSanitizer===void 0)this._textSanitizer=Si(o,"data","property");i=this._textSanitizer(i),h&&h({kind:"commit text",node:o,value:i,options:this.options}),o.data=i}this._$committedValue=i}_commitTemplateResult(i){let{values:o,["_$litType$"]:a}=i,n=typeof a==="number"?this._$getTemplate(i):(a.el===void 0&&(a.el=Y.createElement(wo(a.h,a.h[0]),this.options)),a);if(this._$committedValue?._$template===n)h&&h({kind:"template updating",template:n,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:o}),this._$committedValue._update(o);else{let e=new fo(n,this),l=e._clone(this.options);h&&h({kind:"template instantiated",template:n,instance:e,parts:e._$parts,options:this.options,fragment:l,values:o}),e._update(o),h&&h({kind:"template instantiated and updated",template:n,instance:e,parts:e._$parts,options:this.options,fragment:l,values:o}),this._commitNode(l),this._$committedValue=e}}_$getTemplate(i){let o=ho.get(i.strings);if(o===void 0)ho.set(i.strings,o=new Y(i));return o}_commitIterable(i){if(!ji(this._$committedValue))this._$committedValue=[],this._$clear();let o=this._$committedValue,a=0,n;for(let e of i){if(a===o.length)o.push(n=new O(this._insert(L()),this._insert(L()),this,this.options));else n=o[a];n._$setValue(e),a++}if(a<o.length)this._$clear(n&&A(n._$endNode).nextSibling,a),o.length=a}_$clear(i=A(this._$startNode).nextSibling,o){this._$notifyConnectionChanged?.(!1,!0,o);while(i!==this._$endNode){let a=A(i).nextSibling;A(i).remove(),i=a}}setConnected(i){if(this._$parent===void 0)this.__isConnected=i,this._$notifyConnectionChanged?.(i);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class I{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(i,o,a,n,e){if(this.type=Hi,this._$committedValue=z,this._$disconnectableChildren=void 0,this.element=i,this.name=o,this._$parent=n,this.options=e,a.length>2||a[0]!==""||a[1]!=="")this._$committedValue=Array(a.length-1).fill(new String),this.strings=a;else this._$committedValue=z;this._sanitizer=void 0}_$setValue(i,o=this,a,n){let e=this.strings,l=!1;if(e===void 0){if(i=$(this,i,o,0),l=!X(i)||i!==this._$committedValue&&i!==W,l)this._$committedValue=i}else{let r=i;i=e[0];let s,t;for(s=0;s<e.length-1;s++){if(t=$(this,r[a+s],o,s),t===W)t=this._$committedValue[s];if(l||=!X(t)||t!==this._$committedValue[s],t===z)i=z;else if(i!==z)i+=(t??"")+e[s+1];this._$committedValue[s]=t}}if(l&&!n)this._commitValue(i)}_commitValue(i){if(i===z)A(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=q(this.element,this.name,"attribute");i=this._sanitizer(i??""),h&&h({kind:"commit attribute",element:this.element,name:this.name,value:i,options:this.options}),A(this.element).setAttribute(this.name,i??"")}}}class po extends I{constructor(){super(...arguments);this.type=Ha}_commitValue(i){if(this._sanitizer===void 0)this._sanitizer=q(this.element,this.name,"property");i=this._sanitizer(i),h&&h({kind:"commit property",element:this.element,name:this.name,value:i,options:this.options}),this.element[this.name]=i===z?void 0:i}}class zo extends I{constructor(){super(...arguments);this.type=Aa}_commitValue(i){h&&h({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(i&&i!==z),options:this.options}),A(this.element).toggleAttribute(this.name,!!i&&i!==z)}}class vo extends I{constructor(i,o,a,n,e){super(i,o,a,n,e);if(this.type=Na,this.strings!==void 0)throw Error(`A \`<${i.localName}>\` has a \`@${o}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(i,o=this){if(i=$(this,i,o,0)??z,i===W)return;let a=this._$committedValue,n=i===z&&a!==z||i.capture!==a.capture||i.once!==a.once||i.passive!==a.passive,e=i!==z&&(a===z||n);if(h&&h({kind:"commit event listener",element:this.element,name:this.name,value:i,options:this.options,removeListener:n,addListener:e,oldListener:a}),n)this.element.removeEventListener(this.name,this,a);if(e)this.element.addEventListener(this.name,this,i);this._$committedValue=i}handleEvent(i){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,i);else this._$committedValue.handleEvent(i)}}class Mo{constructor(i,o,a){this.element=i,this.type=Ai,this._$disconnectableChildren=void 0,this._$parent=o,this.options=a}get _$isConnected(){return this._$parent._$isConnected}_$setValue(i){h&&h({kind:"commit to element binding",element:this.element,value:i,options:this.options}),$(this,i)}}var Da=S.litHtmlPolyfillSupportDevMode;Da?.(Y,O);(S.litHtmlVersions??=[]).push("3.3.2");if(S.litHtmlVersions.length>1)queueMicrotask(()=>{U("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var R=(i,o,a)=>{if(o==null)throw TypeError(`The container to render into may not be ${o}`);let n=ma++,e=a?.renderBefore??o,l=e._$litPart$;if(h&&h({kind:"begin render",id:n,value:i,container:o,options:a,part:l}),l===void 0){let r=a?.renderBefore??null;e._$litPart$=l=new O(o.insertBefore(L(),r),r,void 0,a??{})}return l._$setValue(i),h&&h({kind:"end render",id:n,value:i,container:o,options:a,part:l}),l};R.setSanitizer=fa,R.createSanitizer=Si,R._testOnlyClearSanitizerFactoryDoNotCallOrElse=pa;var Ta=(i,o)=>i,Ki=!0,Z=globalThis,Fo;if(Ki)Z.litIssuedWarnings??=new Set,Fo=(i,o)=>{if(o+=` See https://lit.dev/msg/${i} for more information.`,!Z.litIssuedWarnings.has(o)&&!Z.litIssuedWarnings.has(i))console.warn(o),Z.litIssuedWarnings.add(o)};class v extends P{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let o=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(i),this.__childPart=R(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return W}}v._$litElement$=!0;v[Ta("finalized",v)]=!0;Z.litElementHydrateSupport?.({LitElement:v});var Ca=Ki?Z.litElementPolyfillSupportDevMode:Z.litElementPolyfillSupport;Ca?.({LitElement:v});(Z.litElementVersions??=[]).push("4.2.2");if(Ki&&Z.litElementVersions.length>1)queueMicrotask(()=>{Fo("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var bo=!0,Po;if(bo)globalThis.litIssuedWarnings??=new Set,Po=(i,o)=>{if(o+=` See https://lit.dev/msg/${i} for more information.`,!globalThis.litIssuedWarnings.has(o)&&!globalThis.litIssuedWarnings.has(i))console.warn(o),globalThis.litIssuedWarnings.add(o)};var Ba=(i,o,a)=>{let n=o.hasOwnProperty(a);return o.constructor.createProperty(a,i),n?Object.getOwnPropertyDescriptor(o,a):void 0},Ja={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:ei},Wa=(i=Ja,o,a)=>{let{kind:n,metadata:e}=a;if(bo&&e==null)Po("missing-class-metadata",`The class ${o} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let l=globalThis.litPropertyMetadata.get(e);if(l===void 0)globalThis.litPropertyMetadata.set(e,l=new Map);if(n==="setter")i=Object.create(i),i.wrapped=!0;if(l.set(a.name,i),n==="accessor"){let{name:r}=a;return{set(s){let t=o.get.call(this);o.set.call(this,s),this.requestUpdate(r,t,i,!0,s)},init(s){if(s!==void 0)this._$changeProperty(r,void 0,i,s);return s}}}else if(n==="setter"){let{name:r}=a;return function(s){let t=this[r];o.call(this,s),this.requestUpdate(r,t,i,!0,s)}}throw Error(`Unsupported decorator location: ${n}`)};function w(i){return(o,a)=>{return typeof a==="object"?Wa(i,o,a):Ba(i,o,a)}}function ci(i){return w({...i,state:!0,attribute:!1})}var qa=!0,xa;if(qa)globalThis.litIssuedWarnings??=new Set,xa=(i,o)=>{if(o+=i?` See https://lit.dev/msg/${i} for more information.`:"",!globalThis.litIssuedWarnings.has(o)&&!globalThis.litIssuedWarnings.has(i))console.warn(o),globalThis.litIssuedWarnings.add(o)};var So="0.5.2",N={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},jo=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],c={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,textShadow:1,language:"auto",height:null,windSpeedUnit:"ms",showAnimations:!0,layout:"default"};var Ho={sunny:"Solskin",clear:"Klart",overcast:"Overskyet",cloudy:"Skyet",partlycloudy:"Delvist skyet",rainy:"Regnvejr",rain:"Regn",snowy:"Snevejr",snow:"Sne",foggy:"Tåget",fog:"Tåge",lightning:"Lyn","lightning-rainy":"Tordenvejr",pouring:"Kraftig regn","snowy-rainy":"Slud",hail:"Hagl","clear-night":"Klar nat",feels_like:"Føles som",forecast_title:"Dagens vejrudsigt",daily_forecast_title:"Daglig vejrudsigt",no_data:"Ingen data",forecast_unavailable:"Vejrudsigt utilgængelig",weather:"Vejr",language:"Sprog",wind_unit_kmh:"km/t",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knob",wind_unit_fts:"ft/s",show_clock:"Vis aktuel tid",am:"FM",pm:"EM",editor:{entity:"Vejrentitet",name:"Korttitel",layout:"Layout",layout_default:"Standard",layout_minimal:"Minimal",height:"Korthøjde",show_feels_like:'Vis "Føles som"',show_wind:"Vis vindhastighed",show_wind_gust:"Vis vindstød",show_wind_direction:"Vis vindretning",show_humidity:"Vis luftfugtighed",show_min_temp:"Vis min. temperatur",show_hourly_forecast:"Vis timevis vejrudsigt",hourly_forecast_hours:"Timer i timevis vejrudsigt",show_daily_forecast:"Vis daglig vejrudsigt",daily_forecast_days:"Dage i daglig vejrudsigt",show_sunrise_sunset:"Vis solopgang/solnedgang",sunrise_entity:"Solopgang-entitet",sunset_entity:"Solnedgang-entitet",show_clock:"Vis ur",clock_position:"Urplacering",clock_position_top:"Øverst",clock_position_details:"Detaljerække",clock_format:"Urformat",clock_format_12h:"12-timer (FM/EM)",clock_format_24h:"24-timer",overlay_opacity:"Overlejringsopacitet",language:"Sprog",language_auto:"Automatisk",language_en:"Engelsk",language_ru:"Russisk",language_de:"Tysk",language_nl:"Nederlandsk",language_fr:"Fransk",language_es:"Spansk",language_it:"Italiensk",language_sk:"Slovakisk",language_hu:"Ungarsk",wind_speed_unit:"Vindhastighed enhed",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/t"},demo:{pageTitle:"Dynamisk vejrkort",pageSubtitle:"Interaktiv demo og konfigurationsværktøj",livePreview:"Live forhåndsvisning",configuration:"Konfiguration",quickPresets:"Hurtige forudindstillinger",sunnyDay:"Solrig dag",rainy:"Regnvejr",snowy:"Snevejr",clearNight:"Klar nat",weatherCondition:"Vejrforhold",condition:"Tilstand",temperature:"Temperatur",humidity:"Luftfugtighed (%)",windSpeed:"Vindhastighed",timeOfDay:"Tidspunkt",timeMode:"Tidstilstand",autoTime:"Automatisk (aktuel tid)",manualControl:"Manuel styring",sunrise:"Solopgang",day:"Dag",sunset:"Solnedgang",night:"Nat",currentTime:"Aktuel tid",displayOptions:"Visningsindstillinger",cardName:"Kortnavn",height:"Højde (px)",feelsLike:"Føles som temperatur",minTemp:"Min. temperatur",windDirection:"Vindretning",windGust:"Vindstød",hourlyForecast:"Timevis vejrudsigt",dailyForecast:"Daglig vejrudsigt",sunriseSunset:"Solopgang/solnedgang",showClock:"Ur",clockPosition:"Urplacering",clockPositionTop:"Øverst til højre",clockPositionDetails:"Detaljerække",clockFormat:"Urformat",clockFormat12h:"12-timer (FM/EM)",clockFormat24h:"24-timer",overlayOpacity:"Overlejringsopacitet (0-1)",windSpeedUnit:"Vindhastighed enhed",dailyForecastDays:"Dage i daglig vejrudsigt",hourlyForecastHours:"Timer i timevis vejrudsigt",updateCard:"Opdater kort",startDemo:"Start demo-tilstand",stopDemo:"Stop demo",madeWith:"Lavet med kærlighed til Home Assistant",loading:"Indlæser kort...",errorTitle:"Kunne ikke indlæse kort",errorDetails:"Tjek browserkonsollen (F12) for detaljer",errorServer:"Sørg for at filen serveres via en lokal server (ikke file://)",placeholderEmpty:"Lad være tom for at skjule",weatherConditions:{sunny:"Solskin",clear:"Klart",clearNight:"Klar nat",partlyCloudy:"Delvist skyet",cloudy:"Skyet",rainy:"Regnvejr",pouring:"Kraftig regn",snowy:"Snevejr",sleet:"Slud",hail:"Hagl",foggy:"Tåget",lightning:"Lyn",thunderstorm:"Tordenvejr"},language:{title:"Sprog",english:"Engelsk",russian:"Russisk",french:"Fransk",german:"Tysk",dutch:"Nederlandsk",spanish:"Spansk",italian:"Italiensk",slovak:"Slovakisk",hungarian:"Ungarsk"}}};var Ao={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",editor:{entity:"Wetter-Entität",name:"Kartentitel",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kartenhöhe",show_feels_like:"Gefühlte Temperatur anzeigen",show_wind:"Windgeschwindigkeit anzeigen",show_wind_gust:"Windböen anzeigen",show_wind_direction:"Windrichtung anzeigen",show_humidity:"Luftfeuchtigkeit anzeigen",show_min_temp:"Mindesttemperatur anzeigen",show_hourly_forecast:"Stundenprognose anzeigen",hourly_forecast_hours:"Stunden der Prognose",show_daily_forecast:"Tagesprognose anzeigen",daily_forecast_days:"Tage der Prognose",show_sunrise_sunset:"Sonnenaufgang/Sonnenuntergang anzeigen",sunrise_entity:"Sonnenaufgang-Entität",sunset_entity:"Sonnenuntergang-Entität",show_clock:"Uhr anzeigen",clock_position:"Uhrposition",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Zeitformat",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Überlagerungs-Transparenz",text_shadow:"Textschatten-Stärke",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",language_it:"Italienisch",language_sk:"Slowakisch",language_hu:"Ungarisch",language_pt:"Portugiesisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animationen anzeigen"},demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",showClock:"Uhr",clockPosition:"Uhrposition",clockPositionTop:"Oben rechts",clockPositionDetails:"Detailzeile",clockFormat:"Uhrzeitformat",clockFormat12h:"12-Stunden (AM/PM)",clockFormat24h:"24-Stunden",overlayOpacity:"Überlagerungs-Transparenz (0-1)",windSpeedUnit:"Windgeschwindigkeitseinheit",dailyForecastDays:"Tage der Prognose",hourlyForecastHours:"Stunden der Prognose",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var No={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",editor:{entity:"Weather Entity",name:"Card Title",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",show_sunrise_sunset:"Show Sunrise/Sunset",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity",show_clock:"Show Clock",clock_position:"Clock Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Clock Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Overlay Opacity",text_shadow:"Text Shadow Strength",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",language_it:"Italian",language_sk:"Slovak",language_hu:"Hungarian",language_pt:"Portuguese",language_da:"Danish",language_sr:"Serbian",language_pl:"Polish",wind_speed_unit:"Wind Speed Unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Show Animations"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",showClock:"Clock",clockPosition:"Clock Position",clockPositionTop:"Top right",clockPositionDetails:"Details row",clockFormat:"Clock Format",clockFormat12h:"12-hour (AM/PM)",clockFormat24h:"24-hour",overlayOpacity:"Overlay Opacity (0-1)",windSpeedUnit:"Wind Speed Unit",dailyForecastDays:"Daily Forecast Days",hourlyForecastHours:"Hourly Forecast Hours",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian",slovak:"Slovak",hungarian:"Magyar"}}};var Ko={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",editor:{entity:"Entidad de clima",name:"Título de la tarjeta",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Altura de la tarjeta",show_feels_like:"Mostrar sensación térmica",show_wind:"Mostrar velocidad del viento",show_wind_gust:"Mostrar ráfaga de viento",show_wind_direction:"Mostrar dirección del viento",show_humidity:"Mostrar humedad",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar pronóstico por horas",hourly_forecast_hours:"Horas del pronóstico",show_daily_forecast:"Mostrar pronóstico diario",daily_forecast_days:"Días del pronóstico",show_sunrise_sunset:"Mostrar amanecer/atardecer",sunrise_entity:"Entidad de amanecer",sunset_entity:"Entidad de atardecer",show_clock:"Mostrar reloj",clock_position:"Posición del reloj",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato de hora",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidad de superposición",text_shadow:"Intensidad de sombra de texto",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",language_pt:"Portugués",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Mostrar animaciones"},demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",showClock:"Reloj",clockPosition:"Posición del Reloj",clockPositionTop:"Arriba a la derecha",clockPositionDetails:"Línea de detalles",clockFormat:"Formato del Reloj",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidad de Superposición (0-1)",windSpeedUnit:"Unidad de Velocidad del Viento",dailyForecastDays:"Días de Previsión",hourlyForecastHours:"Horas de Previsión",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var Zo={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",editor:{entity:"Entité météo",name:"Titre de la carte",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Hauteur de la carte",show_feels_like:"Afficher le ressenti",show_wind:"Afficher la vitesse du vent",show_wind_gust:"Afficher les rafales",show_wind_direction:"Afficher la direction du vent",show_humidity:"Afficher l'humidité",show_min_temp:"Afficher la température minimale",show_hourly_forecast:"Afficher la prévision horaire",hourly_forecast_hours:"Heures de prévision",show_daily_forecast:"Afficher la prévision quotidienne",daily_forecast_days:"Jours de prévision",show_sunrise_sunset:"Afficher lever/coucher du soleil",sunrise_entity:"Entité de lever du soleil",sunset_entity:"Entité de coucher du soleil",show_clock:"Afficher l'horloge",clock_position:"Position de l'horloge",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format de l'heure",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Opacité du voile",text_shadow:"Intensité de l'ombre du texte",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",language_it:"Italien",language_sk:"Slovaque",language_hu:"Hongrois",language_pt:"Portugais",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Afficher les animations"},demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",showClock:"Horloge",clockPosition:"Position de l'horloge",clockPositionTop:"En haut à droite",clockPositionDetails:"Ligne de détails",clockFormat:"Format de l'horloge",clockFormat12h:"12 heures (AM/PM)",clockFormat24h:"24 heures",overlayOpacity:"Opacité du voile (0-1)",windSpeedUnit:"Unité de vitesse du vent",dailyForecastDays:"Jours de prévision",hourlyForecastHours:"Heures de prévision",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var Do={sunny:"Napos",clear:"Derült",overcast:"Borult",cloudy:"Felhős",partlycloudy:"Részben felhős",rainy:"Esős",rain:"Eső",snowy:"Havas",snow:"Hó",foggy:"Ködös",fog:"Köd",lightning:"Villámlás","lightning-rainy":"Zivatar",pouring:"Heves eső","snowy-rainy":"Havas eső",hail:"Jégeső","clear-night":"Derült éj",feels_like:"Hőérzet",forecast_title:"Mai előrejelzés",daily_forecast_title:"Napi előrejelzés",no_data:"Nincs adat",forecast_unavailable:"Előrejelzés nem elérhető",weather:"Időjárás",language:"Nyelv",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"csomó",wind_unit_fts:"ft/s",show_clock:"Aktuális idő mutatása",am:"DE",pm:"DU",editor:{entity:"Időjárás entitás",name:"Kártya címe",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kártya magasság",show_feels_like:"Hőérzet mutatása",show_wind:"Szélsebesség mutatása",show_wind_gust:"Széllökések mutatása",show_wind_direction:"Szélirány mutatása",show_humidity:"Páratartalom mutatása",show_min_temp:"Min. hőmérséklet",show_hourly_forecast:"Óránkénti előrejelzés",hourly_forecast_hours:"Óránkénti órák száma",show_daily_forecast:"Napi előrejelzés",daily_forecast_days:"Napok száma a napi előrejelzésben",show_sunrise_sunset:"Napkelte/Napnyugta",sunrise_entity:"Napkelte entitás",sunset_entity:"Napnyugta entitás",show_clock:"Óra mutatása",clock_position:"Óra pozíció",clock_position_top:"Felül",clock_position_details:"Részletek",clock_format:"Óra formátum",clock_format_12h:"12 órás (DE/DU)",clock_format_24h:"24 órás",overlay_opacity:"Fedőréteg átlátszóság",text_shadow:"Szövegárnyék erőssége",language:"Nyelv",language_auto:"Automatikus",language_en:"Angol",language_ru:"Orosz",language_de:"Német",language_nl:"Holland",language_fr:"Francia",language_es:"Spanyol",language_it:"Olasz",language_hu:"Magyar",language_sk:"Szlovák",language_pt:"Portugál",wind_speed_unit:"Szélsebesség egység",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Animációk megjelenítése"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interaktív demó és beállító eszköz",livePreview:"Élő előnézet",configuration:"Beállítások",quickPresets:"Gyors presetek",sunnyDay:"Napos nap",rainy:"Esős",snowy:"Havas",clearNight:"Derült éj",weatherCondition:"Időjárási állapot",condition:"Állapot",temperature:"Hőmérséklet",humidity:"Páratartalom (%)",windSpeed:"Szélsebesség",timeOfDay:"Napszak",timeMode:"Idő mód",autoTime:"Automatikus (aktuális idő)",manualControl:"Kézi vezérlés",sunrise:"Napkelte",day:"Nappal",sunset:"Napnyugta",night:"Éjszaka",currentTime:"Aktuális idő",displayOptions:"Megjelenítés",cardName:"Kártya neve",height:"Magasság (px)",feelsLike:"Hőérzet",minTemp:"Min. hőmérséklet",windDirection:"Szélirány",windGust:"Széllökés",hourlyForecast:"Óránkénti előrejelzés",dailyForecast:"Napi előrejelzés",sunriseSunset:"Napkelte/Napnyugta",showClock:"Óra",clockPosition:"Óra pozíció",clockPositionTop:"Jobb felső",clockPositionDetails:"Részletek sora",clockFormat:"Óra formátum",clockFormat12h:"12 órás (DE/DU)",clockFormat24h:"24 órás",overlayOpacity:"Fedőréteg átlátszóság (0–1)",windSpeedUnit:"Szélsebesség egység",dailyForecastDays:"Napi napok",hourlyForecastHours:"Óránkénti órák",updateCard:"Kártya frissítése",startDemo:"Demó indítása",stopDemo:"Demó leállítása",madeWith:"Szeretettel a Home Assistanthez",loading:"Kártya betöltése…",errorTitle:"Nem sikerült betölteni",errorDetails:"Részletek a böngésző konzolban (F12)",errorServer:"A fájlt helyi szerveren szolgáld ki (nem file://)",placeholderEmpty:"Üresen hagyva elrejt",weatherConditions:{sunny:"Napos",clear:"Derült",clearNight:"Derült éj",partlyCloudy:"Részben felhős",cloudy:"Felhős",rainy:"Esős",pouring:"Zuhogó eső",snowy:"Havas",sleet:"Havas eső",hail:"Jégeső",foggy:"Ködös",lightning:"Villámlás",thunderstorm:"Zivatar"},language:{title:"Nyelv",english:"Angol",russian:"Orosz",french:"Francia",german:"Német",dutch:"Holland",spanish:"Spanyol",italian:"Olasz",hungarian:"Magyar",slovak:"Slovenčina"}}};var To={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",editor:{entity:"Entità meteo",name:"Titolo della scheda",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Altezza della scheda",show_feels_like:"Mostra temperatura percepita",show_wind:"Mostra velocità del vento",show_wind_gust:"Mostra raffiche di vento",show_wind_direction:"Mostra direzione del vento",show_humidity:"Mostra umidità",show_min_temp:"Mostra temperatura minima",show_hourly_forecast:"Mostra previsione oraria",hourly_forecast_hours:"Ore di previsione",show_daily_forecast:"Mostra previsione giornaliera",daily_forecast_days:"Giorni di previsione",show_sunrise_sunset:"Mostra alba/tramonto",sunrise_entity:"Entità alba",sunset_entity:"Entità tramonto",show_clock:"Mostra orologio",clock_position:"Posizione orologio",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato orario",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Opacità sovrapposizione",text_shadow:"Intensità ombra testo",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",language_it:"Italiano",language_sk:"Slovacco",language_hu:"Ungherese",language_pt:"Portoghese",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Mostra animazioni"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",showClock:"Orologio",clockPosition:"Posizione Orologio",clockPositionTop:"In alto a destra",clockPositionDetails:"Riga dettagli",clockFormat:"Formato Orologio",clockFormat12h:"12 ore (AM/PM)",clockFormat24h:"24 ore",overlayOpacity:"Opacità Sovrapposizione (0-1)",windSpeedUnit:"Unità Velocità Vento",dailyForecastDays:"Giorni di Previsione",hourlyForecastHours:"Ore di Previsione",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var Co={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",editor:{entity:"Weer-entiteit",name:"Kaarttitel",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Kaart hoogte",show_feels_like:"Gevoelstemperatuur tonen",show_wind:"Windsnelheid tonen",show_wind_gust:"Windstoten tonen",show_wind_direction:"Windrichting tonen",show_humidity:"Luchtvochtigheid tonen",show_min_temp:"Minimumtemperatuur tonen",show_hourly_forecast:"Uurverwachting tonen",hourly_forecast_hours:"Aantal uren",show_daily_forecast:"Dagverwachting tonen",daily_forecast_days:"Aantal dagen",show_sunrise_sunset:"Zonsopgang/zonsondergang tonen",sunrise_entity:"Zonsopgang-entiteit",sunset_entity:"Zonsondergang-entiteit",show_clock:"Klok tonen",clock_position:"Klokpositie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Tijdformaat",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Overlay-doorzichtigheid",text_shadow:"Tekstschaduw sterkte",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",language_it:"Italiaans",language_sk:"Slowaaks",language_hu:"Hongaars",language_pt:"Portugees",wind_speed_unit:"Windsnelheidseenheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u",show_animations:"Animaties weergeven"},demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",showClock:"Klok",clockPosition:"Klokpositie",clockPositionTop:"Rechtsboven",clockPositionDetails:"Detailregel",clockFormat:"Klokformaat",clockFormat12h:"12-uurs (AM/PM)",clockFormat24h:"24-uurs",overlayOpacity:"Overlay-transparantie (0-1)",windSpeedUnit:"Windsnelheidseenheid",dailyForecastDays:"Voorspellingsdagen",hourlyForecastHours:"Voorspellingsuren",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var Bo={sunny:"Słonecznie",clear:"Bezchmurnie",overcast:"Pochmurno",cloudy:"Zachmurzenie",partlycloudy:"Częściowe zachmurzenie",rainy:"Deszczowo",rain:"Deszcz",snowy:"Śnieżnie",snow:"Śnieg",foggy:"Mgliście",fog:"Mgła",lightning:"Błyskawice","lightning-rainy":"Burza",pouring:"Ulewa","snowy-rainy":"Deszcz ze śniegiem",hail:"Grad","clear-night":"Bezchmurna noc",feels_like:"Odczuwalnie",forecast_title:"Prognoza na dziś",daily_forecast_title:"Prognoza dzienna",no_data:"Brak danych",forecast_unavailable:"Prognoza niedostępna",weather:"Pogoda",language:"Język",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"węzły",wind_unit_fts:"ft/s",show_clock:"Pokaż aktualny czas",am:"AM",pm:"PM",editor:{entity:"Encja pogody",name:"Tytuł karty",layout:"Układ",layout_default:"Domyślny",layout_minimal:"Minimalny",height:"Wysokość karty",show_feels_like:"Pokaż temperaturę odczuwalną",show_wind:"Pokaż prędkość wiatru",show_wind_gust:"Pokaż porywy wiatru",show_wind_direction:"Pokaż kierunek wiatru",show_humidity:"Pokaż wilgotność",show_min_temp:"Pokaż temperaturę minimalną",show_hourly_forecast:"Pokaż prognozę godzinową",hourly_forecast_hours:"Godziny prognozy godzinowej",show_daily_forecast:"Pokaż prognozę dzienną",daily_forecast_days:"Dni prognozy dziennej",show_sunrise_sunset:"Pokaż wschód/zachód słońca",sunrise_entity:"Encja wschodu słońca",sunset_entity:"Encja zachodu słońca",show_clock:"Pokaż zegar",clock_position:"Pozycja zegara",clock_position_top:"Góra",clock_position_details:"Szczegóły",clock_format:"Format zegara",clock_format_12h:"12-godzinny (AM/PM)",clock_format_24h:"24-godzinny",overlay_opacity:"Przezroczystość nakładki",language:"Język",language_auto:"Automatycznie",language_en:"Angielski",language_ru:"Rosyjski",language_de:"Niemiecki",language_nl:"Holenderski",language_fr:"Francuski",language_es:"Hiszpański",language_it:"Włoski",language_sk:"Słowacki",language_hu:"Węgierski",language_pl:"Polski",wind_speed_unit:"Jednostka prędkości wiatru",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamiczna karta pogody",pageSubtitle:"Interaktywne demo i narzędzie konfiguracji",livePreview:"Podgląd na żywo",configuration:"Konfiguracja",quickPresets:"Szybkie ustawienia",sunnyDay:"Słoneczny dzień",rainy:"Deszczowo",snowy:"Śnieżnie",clearNight:"Bezchmurna noc",weatherCondition:"Warunki pogodowe",condition:"Stan",temperature:"Temperatura",humidity:"Wilgotność (%)",windSpeed:"Prędkość wiatru",timeOfDay:"Pora dnia",timeMode:"Tryb czasu",autoTime:"Automatyczny (aktualny czas)",manualControl:"Ręczne sterowanie",sunrise:"Wschód słońca",day:"Dzień",sunset:"Zachód słońca",night:"Noc",currentTime:"Aktualny czas",displayOptions:"Opcje wyświetlania",cardName:"Nazwa karty",height:"Wysokość (px)",feelsLike:"Temperatura odczuwalna",minTemp:"Temperatura minimalna",windDirection:"Kierunek wiatru",windGust:"Porywy wiatru",hourlyForecast:"Prognoza godzinowa",dailyForecast:"Prognoza dzienna",sunriseSunset:"Wschód/Zachód słońca",showClock:"Zegar",clockPosition:"Pozycja zegara",clockPositionTop:"Prawy górny róg",clockPositionDetails:"Wiersz szczegółów",clockFormat:"Format zegara",clockFormat12h:"12-godzinny (AM/PM)",clockFormat24h:"24-godzinny",overlayOpacity:"Przezroczystość nakładki (0-1)",windSpeedUnit:"Jednostka prędkości wiatru",dailyForecastDays:"Dni prognozy dziennej",hourlyForecastHours:"Godziny prognozy godzinowej",updateCard:"Aktualizuj kartę",startDemo:"Uruchom tryb demo",stopDemo:"Zatrzymaj demo",madeWith:"Stworzone z miłością dla Home Assistant",loading:"Ładowanie karty...",errorTitle:"Nie udało się załadować karty",errorDetails:"Sprawdź konsolę przeglądarki (F12), aby zobaczyć szczegóły",errorServer:"Upewnij się, że plik jest serwowany przez lokalny serwer (nie file://)",placeholderEmpty:"Pozostaw puste, aby ukryć",weatherConditions:{sunny:"Słonecznie",clear:"Bezchmurnie",clearNight:"Bezchmurna noc",partlyCloudy:"Częściowe zachmurzenie",cloudy:"Zachmurzenie",rainy:"Deszczowo",pouring:"Ulewa",snowy:"Śnieżnie",sleet:"Deszcz ze śniegiem",hail:"Grad",foggy:"Mgliście",lightning:"Błyskawice",thunderstorm:"Burza"},language:{title:"Język",english:"Angielski",russian:"Rosyjski",french:"Francuski",german:"Niemiecki",dutch:"Holenderski",spanish:"Hiszpański",italian:"Włoski",slovak:"Słowacki",hungarian:"Węgierski"}}};var Jo={sunny:"Ensolarado",clear:"Limpo",overcast:"Encoberto",cloudy:"Nublado",partlycloudy:"Parcialmente nublado",rainy:"Chuvoso",rain:"Chuva",snowy:"Neve",snow:"Neve",foggy:"Nevoeiro",fog:"Nevoeiro",lightning:"Relâmpagos","lightning-rainy":"Trovoada",pouring:"Chuva forte","snowy-rainy":"Chuva com neve",hail:"Granizo","clear-night":"Noite limpa",feels_like:"Sensação",forecast_title:"Previsão de hoje",daily_forecast_title:"Previsão diária",no_data:"Sem dados",forecast_unavailable:"Previsão indisponível",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"nós",wind_unit_fts:"ft/s",show_clock:"Mostrar hora atual",am:"AM",pm:"PM",editor:{entity:"Entidade de clima",name:"Título do card",layout:"Layout",layout_default:"Padrão",layout_minimal:"Mínimo",height:"Altura do card",show_feels_like:"Mostrar sensação térmica",show_wind:"Mostrar velocidade do vento",show_wind_gust:"Mostrar rajada de vento",show_wind_direction:"Mostrar direção do vento",show_humidity:"Mostrar humidade",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar previsão horária",hourly_forecast_hours:"Horas da previsão horária",show_daily_forecast:"Mostrar previsão diária",daily_forecast_days:"Dias da previsão diária",show_sunrise_sunset:"Mostrar nascer/pôr do sol",sunrise_entity:"Entidade de nascer do sol",sunset_entity:"Entidade de pôr do sol",show_clock:"Mostrar relógio",clock_position:"Posição do relógio",clock_position_top:"Topo",clock_position_details:"Detalhes",clock_format:"Formato do relógio",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidade do overlay",language:"Idioma",language_auto:"Automático",language_en:"Inglês",language_ru:"Russo",language_de:"Alemão",language_nl:"Holandês",language_fr:"Francês",language_es:"Espanhol",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",language_pt:"Português",wind_speed_unit:"Unidade de velocidade do vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demonstração interativa e ferramenta de configuração",livePreview:"Pré-visualização ao vivo",configuration:"Configuração",quickPresets:"Predefinições rápidas",sunnyDay:"Dia ensolarado",rainy:"Chuvoso",snowy:"Com neve",clearNight:"Noite limpa",weatherCondition:"Condição climática",condition:"Condição",temperature:"Temperatura",humidity:"Humidade (%)",windSpeed:"Velocidade do vento",timeOfDay:"Hora do dia",timeMode:"Modo de tempo",autoTime:"Automático (hora atual)",manualControl:"Controle manual",sunrise:"Nascer do sol",day:"Dia",sunset:"Pôr do sol",night:"Noite",currentTime:"Hora atual",displayOptions:"Opções de exibição",cardName:"Nome do card",height:"Altura (px)",feelsLike:"Sensação térmica",minTemp:"Temperatura mínima",windDirection:"Direção do vento",windGust:"Rajada de vento",hourlyForecast:"Previsão horária",dailyForecast:"Previsão diária",sunriseSunset:"Nascer/pôr do sol",showClock:"Relógio",clockPosition:"Posição do relógio",clockPositionTop:"Canto superior direito",clockPositionDetails:"Linha de detalhes",clockFormat:"Formato do relógio",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidade do overlay (0-1)",windSpeedUnit:"Unidade de velocidade do vento",dailyForecastDays:"Dias da previsão diária",hourlyForecastHours:"Horas da previsão horária",updateCard:"Atualizar card",startDemo:"Iniciar modo demo",stopDemo:"Parar demo",madeWith:"Feito com amor para o Home Assistant",loading:"A carregar card...",errorTitle:"Falha ao carregar o card",errorDetails:"Verifique o console do navegador (F12) para detalhes",errorServer:"Garanta que o ficheiro é servido via servidor local (não file://)",placeholderEmpty:"Deixe em branco para ocultar",weatherConditions:{sunny:"Ensolarado",clear:"Limpo",clearNight:"Noite limpa",partlyCloudy:"Parcialmente nublado",cloudy:"Nublado",rainy:"Chuvoso",pouring:"Chuva forte",snowy:"Com neve",sleet:"Chuva com neve",hail:"Granizo",foggy:"Nevoeiro",lightning:"Relâmpagos",thunderstorm:"Trovoada"},language:{title:"Idioma",english:"Inglês",russian:"Russo",french:"Francês",german:"Alemão",dutch:"Holandês",spanish:"Espanhol",italian:"Italiano",slovak:"Eslovaco",hungarian:"Húngaro"}}};var Wo={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Язык",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",editor:{entity:"Погодная сущность",name:"Название карточки",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Высота карточки",show_feels_like:"Показывать ощущаемую температуру",show_wind:"Показывать скорость ветра",show_wind_gust:"Показывать порывы ветра",show_wind_direction:"Показывать направление ветра",show_humidity:"Показывать влажность",show_min_temp:"Показывать минимальную температуру",show_hourly_forecast:"Показывать почасовой прогноз",hourly_forecast_hours:"Часы прогноза",show_daily_forecast:"Показывать дневной прогноз",daily_forecast_days:"Дни прогноза",show_sunrise_sunset:"Показывать восход/закат",sunrise_entity:"Сущность восхода",sunset_entity:"Сущность заката",show_clock:"Показывать часы",clock_position:"Позиция часов",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат времени",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Прозрачность подложки",text_shadow:"Интенсивность тени текста",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",language_it:"Итальянский",language_sk:"Словацкий",language_hu:"Венгерский",language_pt:"Португальский",wind_speed_unit:"Единицы скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч",show_animations:"Показывать анимации"},demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",showClock:"Часы",clockPosition:"Позиция часов",clockPositionTop:"Вверху справа",clockPositionDetails:"В строке деталей",clockFormat:"Формат часов",clockFormat12h:"12-часовой (AM/PM)",clockFormat24h:"24-часовой",overlayOpacity:"Прозрачность подложки (0-1)",windSpeedUnit:"Единицы скорости ветра",dailyForecastDays:"Дни прогноза",hourlyForecastHours:"Часы прогноза",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var qo={sunny:"Slnečno",clear:"Jasno",overcast:"Zamračené",cloudy:"Oblačno",partlycloudy:"Polooblačno",rainy:"Daždivo",rain:"Dážď",snowy:"Sneženie",snow:"Sneh",foggy:"Hmlisto",fog:"Hmla",lightning:"Blesky","lightning-rainy":"Búrka",pouring:"Silný dážď","snowy-rainy":"Dážď so snehom",hail:"Krúpy","clear-night":"Jasná noc",feels_like:"Pocitová teplota",forecast_title:"Predpoveď na dnes",daily_forecast_title:"Denná predpoveď",no_data:"Žiadne dáta",forecast_unavailable:"Predpoveď nedostupná",weather:"Počasie",language:"Jazyk",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"uzly",wind_unit_fts:"ft/s",show_clock:"Zobraziť aktuálny čas",am:"dop.",pm:"pop.",editor:{entity:"Entita počasia",name:"Názov karty",layout:"Layout",layout_default:"Default",layout_minimal:"Minimal",height:"Výška karty",show_feels_like:"Zobraziť pocitovú teplotu",show_wind:"Zobraziť rýchlosť vetra",show_wind_gust:"Zobraziť nárazy vetra",show_wind_direction:"Zobraziť smer vetra",show_humidity:"Zobraziť vlhkosť",show_min_temp:"Zobraziť minimálnu teplotu",show_hourly_forecast:"Zobraziť hodinovú predpoveď",hourly_forecast_hours:"Počet hodín v predpovedi",show_daily_forecast:"Zobraziť dennú predpoveď",daily_forecast_days:"Počet dní v predpovedi",show_sunrise_sunset:"Zobraziť východ/západ slnka",sunrise_entity:"Entita východu slnka",sunset_entity:"Entita západu slnka",show_clock:"Zobraziť hodiny",clock_position:"Pozícia hodín",clock_position_top:"Hore",clock_position_details:"V detailoch",clock_format:"Formát času",clock_format_12h:"12-hodinový (AM/PM)",clock_format_24h:"24-hodinový",overlay_opacity:"Priehľadnosť vrstvy",text_shadow:"Intenzita tieňa textu",language:"Jazyk",language_auto:"Automaticky",language_en:"Angličtina",language_ru:"Ruština",language_de:"Nemčina",language_nl:"Holandčina",language_fr:"Francúzština",language_es:"Španielčina",language_it:"Taliančina",language_sk:"Slovenčina",language_hu:"Maďarčina",language_pt:"Portugalčina",wind_speed_unit:"Jednotka rýchlosti vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h",show_animations:"Zobraziť animácie"},demo:{pageTitle:"Dynamická karta počasia",pageSubtitle:"Interaktívne demo a konfiguračný nástroj",livePreview:"Živý náhľad",configuration:"Konfigurácia",quickPresets:"Rýchle predvoľby",sunnyDay:"Slnečný deň",rainy:"Daždivo",snowy:"Sneženie",clearNight:"Jasná noc",weatherCondition:"Poveternostné podmienky",condition:"Stav",temperature:"Teplota",humidity:"Vlhkosť (%)",windSpeed:"Rýchlosť vetra",timeOfDay:"Čas dňa",timeMode:"Režim času",autoTime:"Automaticky (Aktuálny čas)",manualControl:"Manuálne ovládanie",sunrise:"Východ slnka",day:"Deň",sunset:"Západ slnka",night:"Noc",currentTime:"Aktuálny čas",displayOptions:"Možnosti zobrazenia",cardName:"Názov karty",height:"Výška (px)",feelsLike:"Pocitová teplota",minTemp:"Minimálna teplota",windDirection:"Smer vetra",windGust:"Nárazy vetra",hourlyForecast:"Hodinová predpoveď",dailyForecast:"Denná predpoveď",sunriseSunset:"Východ/Západ slnka",showClock:"Hodiny",clockPosition:"Pozícia hodín",clockPositionTop:"Vpravo hore",clockPositionDetails:"Riadok s detailmi",clockFormat:"Formát času",clockFormat12h:"12-hodinový (AM/PM)",clockFormat24h:"24-hodinový",overlayOpacity:"Priehľadnosť vrstvy (0-1)",windSpeedUnit:"Jednotka rýchlosti vetra",dailyForecastDays:"Dni dennej predpovede",hourlyForecastHours:"Hodiny hodinovej predpovede",updateCard:"Aktualizovať kartu",startDemo:"Spustiť Demo režim",stopDemo:"Zastaviť Demo",madeWith:"Vytvorené s láskou pre Home Assistant",loading:"Načítavam kartu...",errorTitle:"Nepodarilo sa načítať kartu",errorDetails:"Skontrolujte konzolu prehliadača (F12) pre detaily",errorServer:"Uistite sa, že súbor je poskytovaný cez lokálny server (nie cez file://)",placeholderEmpty:"Ponechajte prázdne pre skrytie",weatherConditions:{sunny:"Slnečno",clear:"Jasno",clearNight:"Jasná noc",partlyCloudy:"Polooblačno",cloudy:"Oblačno",rainy:"Daždivo",pouring:"Lejak",snowy:"Sneženie",sleet:"Dážď so snehom",hail:"Krúpy",foggy:"Hmla",lightning:"Blesky",thunderstorm:"Búrka"},language:{title:"Jazyk",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}};var xo={sunny:"Sunčano",clear:"Vedro",overcast:"Oblačno",cloudy:"Oblačno",partlycloudy:"Delimično oblačno",rainy:"Kišovito",rain:"Kiša",snowy:"Snežno",snow:"Sneg",foggy:"Maglovito",fog:"Magla",lightning:"Grmljavina","lightning-rainy":"Grmljavina sa kišom",pouring:"Pljusak","snowy-rainy":"Susnežica",hail:"Grad","clear-night":"Vedra noć",feels_like:"Subjektivni osećaj",forecast_title:"Prognoza",daily_forecast_title:"Dnevna prognoza",no_data:"Nema podataka",forecast_unavailable:"Prognoza nije dostupna",weather:"Vreme",language:"Jezik",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"čvorova",wind_unit_fts:"ft/s",show_clock:"Prikaži sat",am:"AM",pm:"PM",editor:{entity:"Entitet",name:"Naziv (opciono)",layout:"Izgled",layout_default:"Podrazumevano",layout_minimal:"Minimalno",height:"Visina kartice",show_feels_like:"Prikaži subjektivni osećaj",show_wind:"Prikaži vetar",show_wind_gust:"Prikaži udare vetra",show_wind_direction:"Prikaži smer vetra",show_humidity:"Prikaži vlažnost vazduha",show_min_temp:"Prikaži minimalnu temperaturu",show_hourly_forecast:"Prikaži prognozu po satima",hourly_forecast_hours:"Broj sati za prikaz",show_daily_forecast:"Prikaži dnevnu prognozu",daily_forecast_days:"Broj dana za prikaz",show_sunrise_sunset:"Prikaži izlazak/zalazak sunca",sunrise_entity:"Entitet izlaska sunca (opciono)",sunset_entity:"Entitet zalaska sunca (opciono)",show_clock:"Prikaži sat",clock_position:"Pozicija sata",clock_position_top:"Vrh",clock_position_details:"Detalji",clock_format:"Format vremena",clock_format_12h:"12h",clock_format_24h:"24h",overlay_opacity:"Prozirnost pozadine (Overlay)",language:"Jezik",language_auto:"Automatski",language_en:"Engleski",language_ru:"Ruski",language_de:"Nemački",language_nl:"Holandski",language_fr:"Francuski",language_es:"Španski",language_it:"Italijanski",language_sk:"Slovački",language_hu:"Mađarski",wind_speed_unit:"Jedinica brzine vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interaktivni demo i alat za konfiguraciju",livePreview:"Pregled uživo",configuration:"Konfiguracija",quickPresets:"Brza podešavanja",sunnyDay:"Sunčan dan",rainy:"Kišovito",snowy:"Snežno",clearNight:"Vedra noć",weatherCondition:"Vremenske prilike",condition:"Stanje",temperature:"Temperatura",humidity:"Vlažnost (%)",windSpeed:"Brzina vetra",timeOfDay:"Doba dana",timeMode:"Režim vremena",autoTime:"Automatski (trenutno vreme)",manualControl:"Ručno upravljanje",sunrise:"Izlazak sunca",day:"Dan",sunset:"Zalazak sunca",night:"Noć",currentTime:"Trenutno vreme",displayOptions:"Opcije prikaza",cardName:"Naziv kartice",height:"Visina (px)",feelsLike:"Subjektivni osećaj",minTemp:"Min. temp.",windDirection:"Smer vetra",windGust:"Udari vetra",hourlyForecast:"Prognoza po satima",dailyForecast:"Dnevna prognoza",sunriseSunset:"Izlazak/Zalazak",showClock:"Prikaži sat",clockPosition:"Pozicija sata",clockPositionTop:"Gore desno",clockPositionDetails:"U detaljima",clockFormat:"Format sata",clockFormat12h:"12h",clockFormat24h:"24h",overlayOpacity:"Prozirnost (0-1)",windSpeedUnit:"Jedinica brzine",dailyForecastDays:"Broj dana",hourlyForecastHours:"Broj sati",updateCard:"Ažuriraj karticu",startDemo:"Pokreni demo",stopDemo:"Zaustavi demo",madeWith:"Napravljeno za Home Assistant",loading:"Učitavanje kartice...",errorTitle:"Greška pri učitavanju",errorDetails:"Proverite konzolu pregledača (F12) za detalje",errorServer:"Proverite da li se fajl pokreće preko lokalnog servera (ne file://)",placeholderEmpty:"Ostavite prazno za sakrivanje",weatherConditions:{sunny:"Sunčano",clear:"Vedro",clearNight:"Vedra noć",partlyCloudy:"Delimično oblačno",cloudy:"Oblačno",rainy:"Kišovito",pouring:"Pljusak",snowy:"Snežno",sleet:"Susnežica",hail:"Grad",foggy:"Maglovito",lightning:"Grmljavina",thunderstorm:"Grmljavina sa olujom"},language:{title:"Jezik",english:"Engleski",russian:"Ruski",french:"Francuski",german:"Nemački",dutch:"Holandski",spanish:"Španski",italian:"Italijanski",slovak:"Slovački",hungarian:"Mađarski"}}};var D={da:Ho,de:Ao,en:No,es:Ko,fr:Zo,hu:Do,it:To,nl:Co,pl:Bo,pt:Jo,ru:Wo,sk:qo,sr:xo};class $o{lang="en";fallback="en";t(i){let o=i.split("."),a=o.reduce((e,l)=>e?.[l],D[this.lang]);if(a!=null)return a;return o.reduce((e,l)=>e?.[l],D[this.fallback])??i}setLanguage(i){if(!D[i]||this.lang===i)return;if(this.lang=i,typeof window<"u")window.dispatchEvent(new CustomEvent("language-changed"))}}var d=new $o;if(typeof window<"u")window.i18n=d;var Zi=(i)=>{if(!i)return;let o=i.toLowerCase();if(Object.hasOwn(D,o))return o;let a=o.split("-")[0];if(Object.hasOwn(D,a))return a;return},E=({configLang:i,hassLang:o}={})=>{if(i&&i!=="auto")return Zi(i)??"en";return Zi(o)??Zi(typeof navigator<"u"?navigator.language:void 0)??"en"};function an(){let i=new Date,o=i.getHours(),a=i.getMinutes(),n=o*60+a;if(n>=N.SUNRISE_START&&n<N.SUNRISE_END)return{type:"sunrise",progress:(n-N.SUNRISE_START)/120};if(n>=N.SUNRISE_END&&n<N.DAY_END)return{type:"day",progress:(n-N.SUNRISE_END)/600};if(n>=N.DAY_END&&n<N.SUNSET_END)return{type:"sunset",progress:(n-N.DAY_END)/120};return{type:"night",progress:0}}function Qo(i,o,a){if(i.type==="sunrise"){let n=i.progress;return{x:o*(0.3+n*0.4),y:a*(0.85-n*0.55)}}else if(i.type==="sunset"){let n=i.progress;return{x:o*(0.5+n*0.3),y:a*(0.3+n*0.55)}}else if(i.type==="day"){let e=i.progress*Math.PI;return{x:o*(0.5+Math.sin(e)*0.25),y:a*(0.25-Math.sin(e)*0.1)}}else return{x:o*0.75,y:a*0.3}}function Go(i){if(i.type==="sunrise"){let o=i.progress,a={r:26,g:26,b:46},n={r:255,g:160,b:122},e={r:255,g:215,b:0};return{start:{r:Math.round(a.r+(n.r-a.r)*o),g:Math.round(a.g+(n.g-a.g)*o),b:Math.round(a.b+(n.b-a.b)*o)},end:{r:Math.round(a.r+(e.r-a.r)*o),g:Math.round(a.g+(e.g-a.g)*o),b:Math.round(a.b+(e.b-a.b)*o)}}}else if(i.type==="sunset"){let o=i.progress,a={r:255,g:107,b:107},n={r:255,g:160,b:122},e={r:26,g:26,b:46};return{start:{r:Math.round(a.r+(e.r-a.r)*o),g:Math.round(a.g+(e.g-a.g)*o),b:Math.round(a.b+(e.b-a.b)*o)},end:{r:Math.round(n.r+(e.r-n.r)*o),g:Math.round(n.g+(e.g-n.g)*o),b:Math.round(n.b+(e.b-n.b)*o)}}}return null}function Vo(i,o="24h",a="AM",n="PM"){if(!i)return"";let l=new Date(i).getHours();if(o==="12h"){let r=l%12||12,s=l<12?a:n;return`${r} ${s}`}return`${l.toString().padStart(2,"0")}:00`}function Ro(i,o){if(!i)return"";let a=new Date(i);if(Number.isNaN(a.getTime()))return"";return a.toLocaleDateString(o||void 0,{weekday:"short",day:"numeric",month:"short"})}function Di(i,o="24h",a="AM",n="PM"){if(!i)return"";let e=typeof i==="string"?new Date(i):i,l=e.getHours(),r=e.getMinutes();if(o==="12h"){let s=l>=12?n:a;return l=l%12||12,`${l}:${r.toString().padStart(2,"0")} ${s}`}else return`${l.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}function Ti(i,o=null,a=null,n=null){let e=null,l=null;if(o&&n&&n.states[o]){let r=n.states[o];e=new Date(r.state)}if(a&&n&&n.states[a]){let r=n.states[a];l=new Date(r.state)}if(!e||!l){if(i&&i.attributes){let r=i.attributes;if(!e&&(r.forecast_sunrise||r.sunrise))e=new Date(r.forecast_sunrise||r.sunrise);if(!l&&(r.forecast_sunset||r.sunset))l=new Date(r.forecast_sunset||r.sunset)}}if((!e||!l)&&n&&n.states["sun.sun"]){let s=n.states["sun.sun"].attributes;if(!e&&s.next_rising)e=new Date(s.next_rising);if(!l&&s.next_setting)l=new Date(s.next_setting)}return{sunrise:e,sunset:l,hasSunData:!!(e&&l)}}function Ci(i){let o=new Date;if(i.hasSunData&&i.sunrise&&i.sunset){let a=o.getTime(),n=i.sunrise.getTime(),e=i.sunset.getTime();if(n-a>43200000)n-=86400000;if(e-a>43200000)e-=86400000;let l=n-3600000,r=n+3600000,s=e-3600000,t=e+3600000;if(a>=l&&a<r)return{type:"sunrise",progress:(a-l)/(r-l)};if(a>=r&&a<s)return{type:"day",progress:(a-r)/(s-r)};if(a>=s&&a<t)return{type:"sunset",progress:(a-s)/(t-s)};return{type:"night",progress:0}}return an()}function Bi(i,o,a){if(i==null)return null;if(o.wind_speed_unit)return Math.round(i*10)/10;if(a==="kmh")return Math.round(i*3.6*10)/10;return Math.round(i*10)/10}function Uo(i,o,a){let n=i.wind_speed_unit;if(n){let e=n.toLowerCase().replace(/[^a-z]/g,"");if(e==="kmh"||e==="kmph")return a("wind_unit_kmh");else if(e==="ms"||e==="mps")return a("wind_unit_ms");else if(e==="mph")return a("wind_unit_mph");else if(e==="knots"||e==="kn"||e==="kt")return a("wind_unit_knots");else if(e==="fts"||e==="ftps")return a("wind_unit_fts");return n}return o==="kmh"?a("wind_unit_kmh"):a("wind_unit_ms")}function Lo(i,o,a,n){if(o==="12h"){let e=i.getHours(),l=String(i.getMinutes()).padStart(2,"0"),r=e>=12?n:a;return e=e%12||12,`${e}:${l} ${r}`}else{let e=String(i.getHours()).padStart(2,"0"),l=String(i.getMinutes()).padStart(2,"0");return`${e}:${l}`}}function gi(i,o){let a=i?.querySelector(o);if(!a)return null;let n=(e)=>{let l=e;if(l.deltaY!==0)e.preventDefault(),a.scrollLeft+=l.deltaY};return a.addEventListener("wheel",n,{passive:!1}),()=>a.removeEventListener("wheel",n)}var Xo=T`
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
    border-radius: 16px;
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
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

`;class M{ctx;constructor(i){this.ctx=i}drawCloud(i,o,a,n){let e=this.ctx.shadowBlur,l=this.ctx.shadowColor,r=this.ctx.globalAlpha;this.ctx.shadowBlur=a*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${n*0.4})`,this.ctx.globalAlpha=n*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:i,y:o,r:a*0.4},{x:i+a*0.35,y:o,r:a*0.5},{x:i+a*0.65,y:o,r:a*0.48},{x:i+a*0.92,y:o,r:a*0.38},{x:i+a*0.18,y:o-a*0.28,r:a*0.38},{x:i+a*0.52,y:o-a*0.32,r:a*0.42},{x:i+a*0.78,y:o-a*0.28,r:a*0.38},{x:i+a*0.32,y:o-a*0.42,r:a*0.32},{x:i+a*0.62,y:o-a*0.48,r:a*0.36},{x:i+a*0.82,y:o-a*0.42,r:a*0.32}].forEach((t)=>{this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=e,this.ctx.shadowColor=l,this.ctx.globalAlpha=r}drawClouds(i,o,a,n=0.5){let e=Math.max(2,Math.floor(o/150*n));for(let l=0;l<e;l++){let r=(i*3+l*150)%(o+200)-100,s=a*(0.2+l%3*0.15)+Math.sin(i*0.2+l)*8,t=40+l%3*15,g=0.6+l%2*0.2;this.drawCloud(r,s,t,g)}}}class Ji extends M{draw(i,o,a,n){let e=Date.now()*0.001,l=Qo(n,o,a),r=l.x,s=l.y;if(n.type==="day"||n.type==="sunrise"||n.type==="sunset"){if(this.drawSun(r,s,e),n.type==="sunrise"||n.type==="sunset")this.drawHorizonReflection(r,s,a,e)}else if(n.type==="night")this.drawNightSky(o,a,e);this.drawClouds(e,o,a,0.3)}drawSun(i,o,a){let n=48+Math.sin(a*0.15)*1.5,e=this.ctx.createRadialGradient(i,o,n*0.3,i,o,n*3.5);e.addColorStop(0,"rgba(255, 248, 230, 0.25)"),e.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),e.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),e.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),e.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),e.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),e.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(i,o,n*3.5,0,Math.PI*2),this.ctx.fill();let l=this.ctx.createRadialGradient(i,o,n*0.5,i,o,n*2.2);l.addColorStop(0,"rgba(255, 250, 220, 0.35)"),l.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),l.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),l.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),l.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(i,o,n*2.2,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(i,o,n*0.6,i,o,n*1.6);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(i,o,n*1.6,0,Math.PI*2),this.ctx.fill();let s=this.ctx.createRadialGradient(i-n*0.1,o-n*0.1,0,i,o,n);s.addColorStop(0,"#FFFEF5"),s.addColorStop(0.15,"#FFF9E6"),s.addColorStop(0.3,"#FFF4D6"),s.addColorStop(0.5,"#FFEDC0"),s.addColorStop(0.7,"#FFE4A8"),s.addColorStop(0.85,"#FFDC95"),s.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(i,o,n,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(i,o,a,n){let e=48+Math.sin(n*0.15)*1.5,l=a*0.85;if(o>=l-50){let r=Math.max(0,(l-o)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${r})`,this.ctx.beginPath(),this.ctx.ellipse(i,l,e*1.5,e*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(i,o,a){this.ctx.fillStyle="#FFFFFF";for(let l=0;l<20;l++){let r=(i*0.2+l*47)%i,s=(o*0.2+l*23)%(o*0.6),t=Math.sin(a*0.8+l)*0.5+0.5;this.ctx.globalAlpha=t*0.8,this.ctx.beginPath(),this.ctx.arc(r,s,1.5,0,Math.PI*2),this.ctx.fill()}let n=i*0.75,e=o*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(n,e,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(n-8,e-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class ii extends M{rainDrops=[];lastTime=0;draw(i,o,a,n,e=!1){let l=Date.now()*0.001;this.drawClouds(l,o,a,e?1:0.8),this.drawRain(o,a,e)}drawRain(i,o,a){let n=a?130:90;if(this.rainDrops.length!==n){this.rainDrops=[];for(let s=0;s<n;s++)this.rainDrops.push({x:Math.random()*i,y:Math.random()*o-Math.random()*200,speed:a?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:a?1.2+Math.random()*1:0.8+Math.random()*0.7,length:a?8+Math.random()*10:6+Math.random()*8,alpha:a?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let e=Date.now()*0.001,l=this.lastTime>0?Math.min(e-this.lastTime,0.1):0.016666666666666666;this.lastTime=e;let r=e;for(let s=0;s<this.rainDrops.length;s++){let t=this.rainDrops[s];if(t.y+=t.speed*l,t.y>o+50)t.y=-50-Math.random()*100,t.x=Math.random()*i;let g=t.windOffset*(1+Math.sin(r*0.5+t.phase)*0.2),_=t.x+g;if(_<-10)t.x=i+10;else if(_>i+10)t.x=-10;this.drawRainDrop(_,t.y,t)}}drawRainDrop(i,o,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha;let n=o-a.length*0.5,e=o+a.length*0.5,l=a.alpha,r=a.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+l+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+r+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(i,n),this.ctx.quadraticCurveTo(i-a.width*0.3,o,i-a.width,e-a.width*0.3),this.ctx.arc(i,e,a.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(i+a.width*0.3,o,i,n),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class Wi extends M{snowflakes=[];lastTime=0;draw(i,o,a,n){let e=Date.now()*0.001;this.drawClouds(e,o,a,0.7),this.drawSnowflakes(o,a)}drawSnowflakes(i,o){let a=Math.floor(i*o/5000),n=Math.max(30,Math.min(a,80));if(this.snowflakes.length!==n){this.snowflakes=[];for(let s=0;s<n;s++)this.snowflakes.push({x:Math.random()*i,y:Math.random()*o-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let e=Date.now()*0.001,l=this.lastTime>0?Math.min(e-this.lastTime,0.1):0.016666666666666666;this.lastTime=e;let r=e;this.ctx.lineCap="round";for(let s=0;s<this.snowflakes.length;s++){let t=this.snowflakes[s],g=Math.sin(r*t.swaySpeed+t.swayPhase)*2;if(t.y+=t.speedY*l,t.x+=(t.speedX+g)*l,t.rotation+=t.rotationSpeed*l,t.y>o+20)t.y=-20-Math.random()*50,t.x=Math.random()*i;if(t.x<-10)t.x=i+10;else if(t.x>i+10)t.x=-10;this.drawSnowflake(t.x,t.y,t.size,t.alpha,t.rotation)}}drawSnowflake(i,o,a,n,e){this.ctx.save(),this.ctx.translate(i,o),this.ctx.rotate(e),this.ctx.strokeStyle=`rgba(255, 255, 255, ${n})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let l=0;l<6;l++){let r=Math.PI/3*l,s=Math.cos(r),t=Math.sin(r);this.ctx.moveTo(0,0),this.ctx.lineTo(t*a*2.5,s*a*2.5);let g=t*a*1.5+s*a*0.5,_=s*a*1.5-t*a*0.5,y=t*a*1.8+s*a*1.2,f=s*a*1.8-t*a*1.2;this.ctx.moveTo(g,_),this.ctx.lineTo(y,f);let p=t*a*1.5-s*a*0.5,j=s*a*1.5+t*a*0.5,mi=t*a*1.8-s*a*1.2,wi=s*a*1.8+t*a*1.2;this.ctx.moveTo(p,j),this.ctx.lineTo(mi,wi)}this.ctx.stroke(),this.ctx.restore()}}class qi extends M{draw(i,o,a,n){let e=Date.now()*0.001;this.drawClouds(e,o,a,0.7)}}class xi extends M{draw(i,o,a,n){let e=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let l=0;l<3;l++){let r=a*(0.4+l*0.2),s=Math.sin(e+l)*20;this.ctx.beginPath(),this.ctx.moveTo(0,r);for(let t=0;t<=o;t+=5){let g=Math.sin((t/o+e)*Math.PI*4+l)*15;this.ctx.lineTo(t,r+g+s)}this.ctx.lineTo(o,a),this.ctx.lineTo(0,a),this.ctx.closePath(),this.ctx.fill()}}}class $i extends M{hailStones=[];draw(i,o,a,n){let e=Date.now()*0.001;this.drawClouds(e,o,a,1),this.drawHailStones(o,a)}drawHailStones(i,o){if(this.hailStones.length!==60){this.hailStones=[];for(let e=0;e<60;e++)this.hailStones.push({startX:Math.random()*i,startY:Math.random()*(o+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let n=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let e=0;e<this.hailStones.length;e++){let l=this.hailStones[e],r=(l.startY+n*l.speed)%(o+150);if(r>o+30)l.startY=-30-Math.random()*30,l.startX=Math.random()*i;let s=l.windOffset*(1+Math.sin(n*0.6+l.phase)*0.15),t=(l.startX+s+n*20%i)%i;if(t<-5)l.startX=i+5;else if(t>i+5)l.startX=-5;this.drawHailStone(t,r,l)}}drawHailStone(i,o,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha,this.ctx.beginPath(),this.ctx.ellipse(i,o,a.size,a.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(i-a.size*0.3,o-a.size*0.3,a.size*0.3,a.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class Qi extends M{rainyAnimation;constructor(i){super(i);this.rainyAnimation=new ii(i)}draw(i,o,a,n,e=!0){let l=Date.now()*0.001;if(this.drawClouds(l,o,a,1),e)this.rainyAnimation.draw(i,o,a,n,!1);this.drawLightning(o,a,l)}drawLightning(i,o,a){let n=Math.sin(a*2.5)*Math.sin(a*5.3)*Math.sin(a*7.1),e=Math.max(0,n);if(e>0.4){let l=(e-0.4)/0.6,r=l*0.6,s=Math.min(r,Math.sin(l*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${s})`,this.ctx.fillRect(0,0,i,o)}}}class Gi{canvas=null;ctx=null;animationFrame=null;animations={};resizeObserver=null;width=0;height=0;container=null;getDrawParams;handleVisibilityChange=()=>{if(document.hidden)this.stopAnimation();else this.startAnimation()};constructor(i){this.getDrawParams=i}setup(i){if(this.container=i,this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver(),document.addEventListener("visibilitychange",this.handleVisibilityChange)}destroy(){if(document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.stopAnimation(),this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;this.canvas=null,this.ctx=null,this.container=null}resize(){if(this.canvas&&this.ctx)this.resizeCanvas()}setupCanvas(){if(!this.container)return;let i=this.container.querySelector("canvas");if(i)i.remove();this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.resizeCanvas()}resizeCanvas(){if(!this.canvas||!this.container)return;let i=this.container.getBoundingClientRect();if(i.width===0||i.height===0)return;let o=window.devicePixelRatio||2;if(this.canvas.width=i.width*o,this.canvas.height=i.height*o,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(o,o);this.width=i.width,this.height=i.height,this.initializeAnimations()}setupResizeObserver(){if(!this.container)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(this.container)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new Ji(this.ctx),rainy:new ii(this.ctx),snowy:new Wi(this.ctx),cloudy:new qi(this.ctx),foggy:new xi(this.ctx),hail:new $i(this.ctx),thunderstorm:new Qi(this.ctx)}}startAnimation(){if(this.animationFrame)return;let i=()=>{this.draw(),this.animationFrame=requestAnimationFrame(i)};i()}stopAnimation(){if(this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null}draw(){if(!this.ctx||!this.canvas)return;if(!this.width||!this.height){if(this.resizeCanvas(),!this.width||!this.height)return}let i=this.getDrawParams();if(!i)return;let{condition:o,timeOfDay:a}=i,n=this.width,e=this.height;switch(this.ctx.clearRect(0,0,n,e),o.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),n,e,a);break;case"clear-night":this.animations.sunny?.draw(Date.now(),n,e,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),n,e,a,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),n,e,a,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),n,e,a);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),n,e,a,!1),this.animations.snowy?.draw(Date.now(),n,e,a);break;case"hail":this.animations.hail?.draw(Date.now(),n,e,a);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),n,e,a);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),n,e,a,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),n,e,a,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),n,e,a);break}}}class Vi{hourlyForecast=[];dailyForecast=[];hourlySubscription=null;dailySubscription=null;onUpdate;constructor(i){this.onUpdate=i}getHourlyData(){return this.hourlyForecast}getDailyData(){return this.dailyForecast}async subscribe(i,o,a){if(!i||!o)return;await this.unsubscribe();try{if(this.hourlySubscription=i.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.hourlyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:o}),a)this.dailySubscription=i.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.dailyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:o})}catch{}}async unsubscribe(){if(this.hourlySubscription){try{(await this.hourlySubscription)()}catch{}this.hourlySubscription=null}if(this.dailySubscription){try{(await this.dailySubscription)()}catch{}this.dailySubscription=null}}getHourlyForecast(i,o){let a=Math.max(1,Math.floor(Number(i??c.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,a);if(!o?.forecast||o.forecast.length===0)return[];let n=new Date,e=new Date(n.getFullYear(),n.getMonth(),n.getDate()),l=new Date(e);return l.setDate(l.getDate()+1),o.forecast.filter((s)=>{if(!s.datetime)return!1;let t=new Date(s.datetime),g=new Date(t.getFullYear(),t.getMonth(),t.getDate());return g.getTime()===e.getTime()||g.getTime()===l.getTime()&&t.getHours()<=n.getHours()}).sort((s,t)=>new Date(s.datetime).getTime()-new Date(t.datetime).getTime()).slice(0,a)}getDailyForecast(i,o){let a=Math.max(1,Math.floor(Number(i??c.dailyForecastDays)));if(this.dailyForecast&&this.dailyForecast.length>0)return this.dailyForecast.slice(0,a);if(!o?.forecast||o.forecast.length===0)return[];let n=new Date,e=new Date(n.getFullYear(),n.getMonth(),n.getDate()),l=new Date(e);l.setDate(l.getDate()+a);let r=(t)=>{let g=t.getFullYear(),_=String(t.getMonth()+1).padStart(2,"0"),y=String(t.getDate()).padStart(2,"0");return`${g}-${_}-${y}`},s=new Map;return o.forecast.forEach((t)=>{if(!t.datetime)return;let g=new Date(t.datetime);if(Number.isNaN(g.getTime()))return;if(g<e||g>=l)return;let _=r(g),y=Math.abs(g.getHours()+g.getMinutes()/60-12),f=s.get(_);if(!f||y<f.hourScore)s.set(_,{item:t,itemDate:g,hourScore:y})}),Array.from(s.values()).sort((t,g)=>t.itemDate.getTime()-g.itemDate.getTime()).map((t)=>t.item).slice(0,a)}}class Ri{holdTimer=null;lastTap=null;holdFired=!1;holdDelay=500;getHass;getConfig;fireEvent;constructor(i,o,a){this.getHass=i,this.getConfig=o,this.fireEvent=a}handleTap(i){if(i.target.closest(".forecast-item")||i.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.getConfig().tapAction),this.lastTap=null},300)}handlePointerDown(){this.holdTimer=window.setTimeout(()=>{this.handleHold(),this.holdFired=!0},this.holdDelay)}handlePointerUp(i){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)i.preventDefault(),i.stopPropagation(),this.holdFired=!1}handleHold(){this.handleAction(this.getConfig().holdAction)}handleDoubleTap(){this.handleAction(this.getConfig().doubleTapAction)}handleAction(i){let o=this.getHass(),a=this.getConfig();if(!i||!o)return;switch(i.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:i.entity||a.entity});break;case"toggle":o.callService("homeassistant","toggle",{entity_id:i.entity||a.entity});break;case"call-service":if(i.service){let[e,l]=i.service.split(".");o.callService(e,l,i.service_data||{})}break;case"navigate":if(i.navigation_path)window.history.pushState(null,"",i.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(i.url_path)window.open(i.url_path);break;case"none":default:break}}}function nn(i,o){if(!i||!o)return null;let a=i.states[o];return a?a.state:null}function _i(i,o){if(!i||!o)return{};let a=i.states[o];return a?a.attributes:{}}function Ui(i,o,a,n){let e=nn(i,o),l=_i(i,o),r=l.condition||e||"sunny",s=null;if(a.templowAttribute&&l[a.templowAttribute]!=null)s=l[a.templowAttribute];else{for(let t of jo)if(l[t]!=null){s=l[t];break}if(s==null)s=(l.forecast&&l.forecast[0]?l.forecast[0].templow??null:null)||(l.forecast_hourly&&l.forecast_hourly[0]?l.forecast_hourly[0].native_templow??null:null)}return{condition:r,temperature:l.temperature!=null?l.temperature:null,apparentTemperature:l.apparent_temperature||null,humidity:l.humidity!=null?l.humidity:null,windSpeed:l.wind_speed!=null?l.wind_speed:null,windGust:l.wind_gust_speed||l.wind_gust||null,windBearing:l.wind_bearing!=null?l.wind_bearing:null,windDirection:l.wind_direction||null,pressure:l.pressure||null,forecast:l.forecast||l.forecast_hourly||n||[],friendlyName:l.friendly_name||d.t("weather"),templow:s}}class Yo extends v{constructor(){super(...arguments);this.format=null;this.compact=!1;this.currentTime=""}clockInterval=null;static styles=T`
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
      color: white;
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

    :host([compact]) .clock {
      font-size: 26px;
    }
  `;connectedCallback(){if(super.connectedCallback(),this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}disconnectedCallback(){if(super.disconnectedCallback(),this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updated(i){if(super.updated(i),i.has("format")){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;if(this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}}updateTime(){if(!this.format)return;this.currentTime=Lo(new Date,this.format,d.t("am"),d.t("pm"))}render(){if(!this.format)return u``;return u`<div class="clock">${this.currentTime}</div>`}}m([w({type:String})],Yo.prototype,"format",void 0),m([w({type:Boolean,reflect:!0})],Yo.prototype,"compact",void 0),m([ci()],Yo.prototype,"currentTime",void 0);customElements.define("weather-clock",Yo);var en={wind:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},Oo=(i)=>k`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${i}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,ln={sunny:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:k`
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
  `,overcast:k`
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
  `,cloudy:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:k`
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
  `,rain:k`
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
  `,pouring:k`
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
  `,snowy:k`
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
  `,snow:k`
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
  `,foggy:k`
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
  `,fog:k`
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
  `,hail:k`
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
  `,"snowy-rainy":k`
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
  `,lightning:k`
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
  `,"lightning-rainy":k`
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
  `,windy:k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":k`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function oi(i,...o){let a=en[i];if(typeof a==="function")return a(...o);return a||""}function hi(i){if(!i)return"";return ln[i.toLowerCase()]||""}class Io extends v{constructor(){super(...arguments);this.weather=null;this.sunData=null;this.config=null;this.entityAttributes=null;this.compact=!1}static styles=T`
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
      color: white;
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
  `;hasContent(){if(!this.weather||!this.config)return!1;return this.config.showHumidity&&this.weather.humidity!=null||this.config.showWind&&this.weather.windSpeed!=null||this.config.showSunriseSunset&&this.sunData?.hasSunData===!0}renderHumidity(){if(!this.config?.showHumidity||this.weather?.humidity==null)return u``;return u`
      <div class="info-item">
        <span class="info-icon">${oi("humidity")}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `}renderSunrise(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunrise)return u``;return u`
      <div class="info-item">
        <span class="info-icon">${oi("sunrise")}</span>
        <span>${Di(this.sunData.sunrise,this.config.clockFormat,d.t("am"),d.t("pm"))}</span>
      </div>
    `}renderWind(){if(!this.config?.showWind||this.weather?.windSpeed==null)return u``;let i=this.entityAttributes||{},o=Bi(this.weather.windSpeed,i,this.config.windSpeedUnit),a=Uo(i,this.config.windSpeedUnit,d.t.bind(d)),n="";if(this.config.showWindGust&&this.weather.windGust)n=` / ${Bi(this.weather.windGust,i,this.config.windSpeedUnit)} ${a}`;let e=this.config.showWindDirection&&this.weather.windBearing!=null?Oo(this.weather.windBearing):oi("wind");return u`
      <div class="info-item">
        <span class="info-icon">${e}</span>
        <span>${o} ${a}${n}</span>
      </div>
    `}renderSunset(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunset)return u``;return u`
      <div class="info-item">
        <span class="info-icon">${oi("sunset")}</span>
        <span>${Di(this.sunData.sunset,this.config.clockFormat,d.t("am"),d.t("pm"))}</span>
      </div>
    `}render(){if(!this.hasContent())return u``;let o=this.config?.showSunriseSunset&&this.sunData?.hasSunData?u`
      <div class="sun-group">
        ${this.renderSunrise()}
        ${this.renderSunset()}
      </div>
    `:u``;return u`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderWind()}
        ${this.compact?o:u`${this.renderSunrise()}${this.renderSunset()}`}
      </div>
    `}}m([w({type:Object})],Io.prototype,"weather",void 0),m([w({type:Object})],Io.prototype,"sunData",void 0),m([w({type:Object})],Io.prototype,"config",void 0),m([w({type:Object})],Io.prototype,"entityAttributes",void 0),m([w({type:Boolean,reflect:!0})],Io.prototype,"compact",void 0);customElements.define("weather-details",Io);var ki=T`
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

  .forecast-unavailable {
    opacity: 0.6;
    font-size: 14px;
  }
`;class Eo extends v{constructor(){super(...arguments);this.forecast=[];this.clockFormat="24h"}static styles=ki;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=gi(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(i){return Math.round(i.temperature??i.temp??i.native_temperature??0)}render(){if(this.forecast.length===0)return u``;return u`
      <div class="forecast-container">
        <div class="forecast-title">${d.t("forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((i)=>u`
            <div class="forecast-item">
              <div class="forecast-time">${Vo(i.datetime,this.clockFormat,d.t("am"),d.t("pm"))}</div>
              <div class="forecast-icon">${hi(i.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(i)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}m([w({type:Array})],Eo.prototype,"forecast",void 0),m([w({type:String})],Eo.prototype,"clockFormat",void 0);customElements.define("hourly-forecast",Eo);class ia extends v{constructor(){super(...arguments);this.forecast=[];this.lang="en"}static styles=ki;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=gi(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(i){return Math.round(i.temperature??i.temp??i.native_temperature??0)}render(){if(this.forecast.length===0)return u``;return u`
      <div class="forecast-container">
        <div class="forecast-title">${d.t("daily_forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((i)=>u`
            <div class="forecast-item">
              <div class="forecast-time">${Ro(i.datetime,this.lang)}</div>
              <div class="forecast-icon">${hi(i.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(i)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}m([w({type:Array})],ia.prototype,"forecast",void 0),m([w({type:String})],ia.prototype,"lang",void 0);customElements.define("daily-forecast",ia);class Li extends v{animationManager;forecastService;actionHandler;subscribedEntity=null;subscribedShowDaily=!1;_testTimeOfDay;static get styles(){return Xo}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:c.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:c.dailyForecastDays}}constructor(){super();this.config={},this.animationManager=new Gi(()=>this.getDrawParams()),this.forecastService=new Vi(()=>this.requestUpdate()),this.actionHandler=new Ri(()=>this.hass,()=>this.config,(i,o)=>this.fireEvent(i,o))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{let i=this.shadowRoot?.querySelector(".canvas-container");if(i)this.animationManager.setup(i)},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationManager.destroy(),this.forecastService.unsubscribe()}updated(i){if(super.updated(i),i.has("config")){let a=i.get("config"),n=a?a.showAnimations!==!1:!0,e=this.config.showAnimations!==!1;if(n&&!e)this.animationManager.destroy();else if(!n&&e)this.updateComplete.then(()=>{let l=this.shadowRoot?.querySelector(".canvas-container");if(l)this.animationManager.setup(l)})}if(i.has("hass")||i.has("config")){let a=this.config.entity,n=this.config.showDailyForecast??!1;if(this.hass&&a&&(a!==this.subscribedEntity||n!==this.subscribedShowDaily))this.subscribedEntity=a,this.subscribedShowDaily=n,this.forecastService.subscribe(this.hass,a,n)}let o=E({configLang:this.config?.language,hassLang:this.hass?.language});if(d.lang!==o)d.setLanguage(o)}getDrawParams(){if(!this.hass||!this.config.entity)return null;let i=Ui(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),o=this.hass.states[this.config.entity],a=Ti(o||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||Ci(a);return{condition:i.condition,timeOfDay:n}}getDetailsConfig(){return{showHumidity:this.config.showHumidity??!0,showWind:this.config.showWind??!0,showWindGust:this.config.showWindGust??!0,showWindDirection:this.config.showWindDirection??!0,showSunriseSunset:this.config.showSunriseSunset??!0,clockFormat:this.config.clockFormat??"24h",windSpeedUnit:this.config.windSpeedUnit??"ms"}}setConfig(i){if(!i.entity)throw Error("Please define a weather entity");let o=i.show_hourly_forecast??i.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:i.entity,icons_path:i.icons_path,name:i.name,height:i.height||c.height,showFeelsLike:i.show_feels_like!==!1,showWind:i.show_wind!==!1,showWindGust:i.show_wind_gust!==!1,showWindDirection:i.show_wind_direction!==!1,showHumidity:i.show_humidity!==!1,showMinTemp:i.show_min_temp!==!1,showForecast:i.show_forecast===!0,showHourlyForecast:o===!0,showDailyForecast:i.show_daily_forecast===!0,hourlyForecastHours:i.hourly_forecast_hours??c.hourlyForecastHours,dailyForecastDays:i.daily_forecast_days??c.dailyForecastDays,showSunriseSunset:i.show_sunrise_sunset!==!1,showClock:i.show_clock===!0,clockPosition:i.clock_position||c.clockPosition,clockFormat:i.clock_format||c.clockFormat,overlayOpacity:i.overlay_opacity!==void 0?i.overlay_opacity:c.overlayOpacity,textShadow:i.text_shadow!==void 0?i.text_shadow:c.textShadow,language:i.language||c.language,windSpeedUnit:i.wind_speed_unit||c.windSpeedUnit,showAnimations:i.show_animations!==!1,layout:i.layout||c.layout,sunriseEntity:i.sunrise_entity||null,sunsetEntity:i.sunset_entity||null,templowAttribute:i.templow_attribute||null,tapAction:i.tap_action||{action:"more-info"},holdAction:i.hold_action||{action:"none"},doubleTapAction:i.double_tap_action||{action:"none"}},this.config.language)d.setLanguage(this.config.language)}fireEvent(i,o={}){let a=new CustomEvent(i,{detail:o,bubbles:!0,composed:!0});this.dispatchEvent(a)}getCardSize(){return 1}render(){if(!this.hass)return u`<div>No Home Assistant connection</div>`;let i=Ui(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),o=this.hass.states[this.config.entity],a=Ti(o,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||Ci(a),e=`weather-card ${n.type}`,l=this.config.layout==="minimal",r=l?"56px":"200px",s=this.config.height?`${this.config.height}px`:r,t=Go(n),g=t?`background: linear-gradient(135deg, rgb(${t.start.r}, ${t.start.g}, ${t.start.b}), rgb(${t.end.r}, ${t.end.g}, ${t.end.b}));`:"",y=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:c.overlayOpacity};`,f=this.config.textShadow??c.textShadow,p=f===0?"none":[`0 1px 2px rgba(0,0,0,${Math.min(1,0.4*f).toFixed(2)})`,`0 2px 6px rgba(0,0,0,${Math.min(1,0.3*f).toFixed(2)})`,`0 4px 12px rgba(0,0,0,${Math.min(1,0.2*f).toFixed(2)})`].join(", "),j=f===0?"none":`drop-shadow(0px 1px 3px rgba(0,0,0,${Math.min(1,0.6*f).toFixed(2)}))`,mi=`--card-text-shadow: ${p}; --card-icon-filter: ${j};`,wi=this.config.showHourlyForecast?this.forecastService.getHourlyForecast(this.config.hourlyForecastHours??c.hourlyForecastHours,i):[],ra=this.config.showDailyForecast?this.forecastService.getDailyForecast(this.config.dailyForecastDays??c.dailyForecastDays,i):[],Ii=`min-height: ${s}; ${g}; ${y} ${mi} cursor: pointer;`,Ei=this.hass;return u`
      <ha-card
        @click=${(Q)=>this.actionHandler.handleTap(Q)}
        @pointerdown=${()=>this.actionHandler.handlePointerDown()}
        @pointerup=${(Q)=>this.actionHandler.handlePointerUp(Q)}
        @pointercancel=${(Q)=>this.actionHandler.handlePointerUp(Q)}
      >
        ${l?this.renderMinimal(i,a,Ei,e,Ii):this.renderDefault(i,a,wi,ra,Ei,e,Ii)}
      </ha-card>
    `}renderDefault(i,o,a,n,e,l,r){return u`
      <div class="${l}" style="${r}">
        ${this.config.showAnimations!==!1?u`<div class="canvas-container"></div>`:""}
        <div class="content">
          ${this.config.name&&this.config.name.trim()!==""?u`
            <div class="header">
              <div class="location">${this.config.name}</div>
            </div>
          `:""}
          <div class="primary">
            <div class="primary-left">
              <div class="condition">${d.t(i.condition)}</div>
              <div class="temperature">${i.temperature!=null?Math.round(i.temperature)+"°":d.t("no_data")}</div>
              ${this.config.showMinTemp?u`
                <div class="temp-range">
                  <span class="temp-min">↓ ${i.templow!=null?`${Math.round(i.templow)}°`:d.t("no_data")}</span>
                </div>
              `:""}
              ${this.config.showFeelsLike?u`
                <div class="feels-like">${d.t("feels_like")} ${i.apparentTemperature!=null?`${Math.round(i.apparentTemperature)}°`:d.t("no_data")}</div>
              `:""}
            </div>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="top"?this.config.clockFormat:null}
            ></weather-clock>
          </div>
          <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
            <weather-details
              .weather=${i}
              .sunData=${o}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${_i(e,this.config.entity)}
            ></weather-details>
            <weather-clock
              .format=${this.config.showClock&&this.config.clockPosition==="details"?this.config.clockFormat:null}
            ></weather-clock>
          </div>
          <hourly-forecast
            .forecast=${a}
            .clockFormat=${this.config.clockFormat??"24h"}
          ></hourly-forecast>
          <daily-forecast
            .forecast=${n}
            .lang=${d.lang}
          ></daily-forecast>
        </div>
      </div>
    `}renderMinimal(i,o,a,n,e){let l=i.temperature!=null?Math.round(i.temperature)+"°":d.t("no_data"),r=i.templow!=null?`↓ ${Math.round(i.templow)}°`:null;return u`
      <div class="${n} layout--minimal" style="${e}">
        ${this.config.showAnimations!==!1?u`<div class="canvas-container"></div>`:""}
        <div class="content">
          <div class="mini-primary">
            <div class="mini-temp">${l}</div>
            ${this.config.showMinTemp&&r?u`<div class="mini-temp-low">${r}</div>`:""}
          </div>
          <div class="mini-details">
            <div class="mini-condition">${d.t(i.condition)}</div>
            <weather-details
              .weather=${i}
              .sunData=${o}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${_i(a,this.config.entity)}
              .compact=${!0}
            ></weather-details>
          </div>
          ${this.config.showClock?u`
            <weather-clock .format=${this.config.clockFormat} .compact=${!0}></weather-clock>
          `:""}
        </div>
      </div>
    `}}m([w({type:Object})],Li.prototype,"hass",void 0),m([w({type:Object})],Li.prototype,"config",void 0);var rn=(i)=>{let o=`editor.language_${i}`,a=d.t(o);if(a!==o)return a;try{return new Intl.DisplayNames([d.lang],{type:"language"}).of(i)??i}catch{return i}};class Xi extends v{constructor(){super(...arguments);this._config={}}setConfig(i){this._config={name:"",layout:c.layout,height:c.height,show_feels_like:c.showFeelsLike,show_wind:c.showWind,show_wind_gust:c.showWindGust,show_wind_direction:c.showWindDirection,show_humidity:c.showHumidity,show_min_temp:c.showMinTemp,show_hourly_forecast:c.showHourlyForecast,hourly_forecast_hours:c.hourlyForecastHours,show_daily_forecast:c.showDailyForecast,daily_forecast_days:c.dailyForecastDays,show_sunrise_sunset:c.showSunriseSunset,show_animations:c.showAnimations,show_clock:c.showClock,clock_position:c.clockPosition,clock_format:c.clockFormat,overlay_opacity:c.overlayOpacity,text_shadow:c.textShadow,language:c.language,wind_speed_unit:c.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...i}}updated(i){if(super.updated(i),i.has("hass")){let o=E({hassLang:this.hass?.language});if(d.lang!==o)d.setLanguage(o),this.requestUpdate()}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"layout",selector:{select:{options:[{label:d.t("editor.layout_default"),value:"default"},{label:d.t("editor.layout_minimal"),value:"minimal"}]}}},{name:"height",selector:{number:{min:50,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"show_clock",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:d.t("editor.clock_position_top"),value:"top"},{label:d.t("editor.clock_position_details"),value:"details"}]}}},{name:"clock_format",selector:{select:{options:[{label:d.t("editor.clock_format_24h"),value:"24h"},{label:d.t("editor.clock_format_12h"),value:"12h"}]}}},{name:"show_animations",selector:{boolean:{}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"text_shadow",selector:{number:{min:0,max:3,step:1,mode:"box"}}},{name:"language",selector:{select:{options:[{label:d.t("editor.language_auto"),value:"auto"},...Object.keys(D).map((i)=>({label:rn(i),value:i}))]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:d.t("editor.wind_speed_unit_ms"),value:"ms"},{label:d.t("editor.wind_speed_unit_kmh"),value:"kmh"}]}}}]}_computeLabel=(i)=>{let o=`editor.${i.name}`,a=d.t(o);return a===o?i.name:a};_valueChanged(i){let o=i.detail?.value;if(!o)return;this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return u``;return u`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}m([w({attribute:!1})],Xi.prototype,"hass",void 0),m([ci()],Xi.prototype,"_config",void 0);var oa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},aa=(i)=>(...o)=>({["_$litDirective$"]:i,values:o});class Yi{constructor(i){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(i,o,a){this.__part=i,this._$parent=o,this.__attributeIndex=a}_$resolve(i,o){return this.update(i,o)}update(i,o){return this.render(...o)}}var sn=!0,Zr=sn&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(i)=>i;var na=(i)=>i.strings===void 0;var tn=!0,ai=(i,o)=>{let a=i._$disconnectableChildren;if(a===void 0)return!1;for(let n of a)n._$notifyDirectiveConnectionChanged?.(o,!1),ai(n,o);return!0},yi=(i)=>{let o,a;do{if((o=i._$parent)===void 0)break;a=o._$disconnectableChildren,a.delete(i),i=o}while(a?.size===0)},ea=(i)=>{for(let o;o=i._$parent;i=o){let a=o._$disconnectableChildren;if(a===void 0)o._$disconnectableChildren=a=new Set;else if(a.has(i))break;a.add(i),un(o)}};function dn(i){if(this._$disconnectableChildren!==void 0)yi(this),this._$parent=i,ea(this);else this._$parent=i}function cn(i,o=!1,a=0){let n=this._$committedValue,e=this._$disconnectableChildren;if(e===void 0||e.size===0)return;if(o){if(Array.isArray(n))for(let l=a;l<n.length;l++)ai(n[l],!1),yi(n[l]);else if(n!=null)ai(n,!1),yi(n)}else ai(this,i)}var un=(i)=>{if(i.type==oa.CHILD)i._$notifyConnectionChanged??=cn,i._$reparentDisconnectables??=dn};class Oi extends Yi{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(i,o,a){super._$initialize(i,o,a),ea(this),this.isConnected=i._$isConnected}["_$notifyDirectiveConnectionChanged"](i,o=!0){if(i!==this.isConnected)if(this.isConnected=i,i)this.reconnected?.();else this.disconnected?.();if(o)ai(this,i),yi(this)}setValue(i){if(na(this.__part))this.__part._$setValue(i,this);else{if(tn&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let o=[...this.__part._$committedValue];o[this.__attributeIndex]=i,this.__part._$setValue(o,this,0)}}disconnected(){}reconnected(){}}class la extends Oi{_key="";_onLangChange=null;render(i){return this._key=i,d.t(i)}reconnected(){this._onLangChange=()=>{this.setValue(d.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var gn=aa(la);try{customElements.define("dynamic-weather-card",Li),customElements.define("dynamic-weather-card-editor",Xi),console.log(`%cDynamic Weather Card %c${So}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let i={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(i)}catch(i){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",i)}export{gn as t,E as resolveLanguage,d as i18n};
