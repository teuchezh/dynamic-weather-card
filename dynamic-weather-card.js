var f=function(o,i,a,n){var l=arguments.length,s=l<3?i:n===null?n=Object.getOwnPropertyDescriptor(i,a):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(o,i,a,n);else for(var c=o.length-1;c>=0;c--)if(r=o[c])s=(l<3?r(s):l>3?r(i,a,s):r(i,a))||s;return l>3&&s&&Object.defineProperty(i,a,s),s};var io=globalThis,yo=io.ShadowRoot&&(io.ShadyCSS===void 0||io.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,to=Symbol(),Yo=new WeakMap;class fo{constructor(o,i,a){if(this._$cssResult$=!0,a!==to)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this._strings=i}get styleSheet(){let o=this._styleSheet,i=this._strings;if(yo&&o===void 0){let a=i!==void 0&&i.length===1;if(a)o=Yo.get(i);if(o===void 0){if((this._styleSheet=o=new CSSStyleSheet).replaceSync(this.cssText),a)Yo.set(i,o)}}return o}toString(){return this.cssText}}var Oi=(o)=>{if(o._$cssResult$===!0)return o.cssText;else if(typeof o==="number")return o;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${o}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Ei=(o)=>new fo(typeof o==="string"?o:String(o),void 0,to),W=(o,...i)=>{let a=o.length===1?o[0]:i.reduce((n,l,s)=>n+Oi(l)+o[s+1],o[0]);return new fo(a,o,to)},Lo=(o,i)=>{if(yo)o.adoptedStyleSheets=i.map((a)=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(let a of i){let n=document.createElement("style"),l=io.litNonce;if(l!==void 0)n.setAttribute("nonce",l);n.textContent=a.cssText,o.appendChild(n)}},oa=(o)=>{let i="";for(let a of o.cssRules)i+=a.cssText;return Ei(i)},wo=yo?(o)=>o:(o)=>o instanceof CSSStyleSheet?oa(o):o;var{is:ia,defineProperty:aa,getOwnPropertyDescriptor:Io,getOwnPropertyNames:na,getOwnPropertySymbols:la,getPrototypeOf:Oo}=Object,sa=!1,z=globalThis;if(sa)z.customElements??=customElements;var H=!0,Z,Eo=z.trustedTypes,ra=Eo?Eo.emptyScript:"",ii=H?z.reactiveElementPolyfillSupportDevMode:z.reactiveElementPolyfillSupport;if(H)z.litIssuedWarnings??=new Set,Z=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!z.litIssuedWarnings.has(i)&&!z.litIssuedWarnings.has(o))console.warn(i),z.litIssuedWarnings.add(i)},queueMicrotask(()=>{if(Z("dev-mode","Lit is in dev mode. Not recommended for production!"),z.ShadyDOM?.inUse&&ii===void 0)Z("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var ca=H?(o)=>{if(!z.emitLitDebugLogEvents)return;z.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))}:void 0,P=(o,i)=>o,G={toAttribute(o,i){switch(i){case Boolean:o=o?ra:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o);break}return o},fromAttribute(o,i){let a=o;switch(i){case Boolean:a=o!==null;break;case Number:a=o===null?null:Number(o);break;case Object:case Array:try{a=JSON.parse(o)}catch(n){a=null}break}return a}},ao=(o,i)=>!ia(o,i),oi={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:ao};Symbol.metadata??=Symbol("metadata");z.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(o){this.__prepare(),(this._initializers??=[]).push(o)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(o,i=oi){if(i.state)i.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(o))i=Object.create(i),i.wrapped=!0;if(this.elementProperties.set(o,i),!i.noAccessor){let a=H?Symbol.for(`${String(o)} (@property() cache)`):Symbol(),n=this.getPropertyDescriptor(o,a,i);if(n!==void 0)aa(this.prototype,o,n)}}static getPropertyDescriptor(o,i,a){let{get:n,set:l}=Io(this.prototype,o)??{get(){return this[i]},set(s){this[i]=s}};if(H&&n==null){if("value"in(Io(this.prototype,o)??{}))throw Error(`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);Z("reactive-property-without-getter",`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:n,set(s){let r=n?.call(this);l?.call(this,s),this.requestUpdate(o,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??oi}static __prepare(){if(this.hasOwnProperty(P("elementProperties",this)))return;let o=Oo(this);if(o.finalize(),o._initializers!==void 0)this._initializers=[...o._initializers];this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(P("properties",this))){let i=this.properties,a=[...na(i),...la(i)];for(let n of a)this.createProperty(n,i[n])}let o=this[Symbol.metadata];if(o!==null){let i=litPropertyMetadata.get(o);if(i!==void 0)for(let[a,n]of i)this.elementProperties.set(a,n)}this.__attributeToPropertyMap=new Map;for(let[i,a]of this.elementProperties){let n=this.__attributeNameForProperty(i,a);if(n!==void 0)this.__attributeToPropertyMap.set(n,i)}if(this.elementStyles=this.finalizeStyles(this.styles),H){if(this.hasOwnProperty("createProperty"))Z("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))Z("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(o){let i=[];if(Array.isArray(o)){let a=new Set(o.flat(1/0).reverse());for(let n of a)i.unshift(wo(n))}else if(o!==void 0)i.push(wo(o));return i}static __attributeNameForProperty(o,i){let a=i.attribute;return a===!1?void 0:typeof a==="string"?a:typeof o==="string"?o.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((o)=>this.enableUpdating=o),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((o)=>o(this))}addController(o){if((this.__controllers??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected)o.hostConnected?.()}removeController(o){this.__controllers?.delete(o)}__saveInstanceProperties(){let o=new Map,i=this.constructor.elementProperties;for(let a of i.keys())if(this.hasOwnProperty(a))o.set(a,this[a]),delete this[a];if(o.size>0)this.__instanceProperties=o}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lo(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((o)=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this.__controllers?.forEach((o)=>o.hostDisconnected?.())}attributeChangedCallback(o,i,a){this._$attributeToProperty(o,a)}__propertyToAttribute(o,i){let n=this.constructor.elementProperties.get(o),l=this.constructor.__attributeNameForProperty(o,n);if(l!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:G).toAttribute(i,n.type);if(H&&this.constructor.enabledWarnings.includes("migration")&&r===void 0)Z("undefined-attribute-value",`The attribute value for the ${o} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=o,r==null)this.removeAttribute(l);else this.setAttribute(l,r);this.__reflectingProperty=null}}_$attributeToProperty(o,i){let a=this.constructor,n=a.__attributeToPropertyMap.get(o);if(n!==void 0&&this.__reflectingProperty!==n){let l=a.getPropertyOptions(n),s=typeof l.converter==="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:G;this.__reflectingProperty=n;let r=s.fromAttribute(i,l.type);this[n]=r??this.__defaultValues?.get(n)??r,this.__reflectingProperty=null}}requestUpdate(o,i,a,n=!1,l){if(o!==void 0){if(H&&o instanceof Event)Z("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let s=this.constructor;if(n===!1)l=this[o];if(a??=s.getPropertyOptions(o),(a.hasChanged??ao)(l,i)||a.useDefault&&a.reflect&&l===this.__defaultValues?.get(o)&&!this.hasAttribute(s.__attributeNameForProperty(o,a)))this._$changeProperty(o,i,a);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(o,i,{useDefault:a,reflect:n,wrapped:l},s){if(a&&!(this.__defaultValues??=new Map).has(o)){if(this.__defaultValues.set(o,s??i??this[o]),l!==!0||s!==void 0)return}if(!this._$changedProperties.has(o)){if(!this.hasUpdated&&!a)i=void 0;this._$changedProperties.set(o,i)}if(n===!0&&this.__reflectingProperty!==o)(this.__reflectingProperties??=new Set).add(o)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(i){Promise.reject(i)}let o=this.scheduleUpdate();if(o!=null)await o;return!this.isUpdatePending}scheduleUpdate(){let o=this.performUpdate();if(H&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof o?.then==="function")Z("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return o}performUpdate(){if(!this.isUpdatePending)return;if(ca?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),H){let l=[...this.constructor.elementProperties.keys()].filter((s)=>this.hasOwnProperty(s)&&(s in Oo(this)));if(l.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${l.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[n,l]of this.__instanceProperties)this[n]=l;this.__instanceProperties=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[n,l]of a){let{wrapped:s}=l,r=this[n];if(s===!0&&!this._$changedProperties.has(n)&&r!==void 0)this._$changeProperty(n,void 0,l,r)}}let o=!1,i=this._$changedProperties;try{if(o=this.shouldUpdate(i),o)this.willUpdate(i),this.__controllers?.forEach((a)=>a.hostUpdate?.()),this.update(i);else this.__markUpdated()}catch(a){throw o=!1,this.__markUpdated(),a}if(o)this._$didUpdate(i)}willUpdate(o){}_$didUpdate(o){if(this.__controllers?.forEach((i)=>i.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(o);if(this.updated(o),H&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))Z("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(o){return!0}update(o){this.__reflectingProperties&&=this.__reflectingProperties.forEach((i)=>this.__propertyToAttribute(i,this[i])),this.__markUpdated()}updated(o){}firstUpdated(o){}}A.elementStyles=[];A.shadowRootOptions={mode:"open"};A[P("elementProperties",A)]=new Map;A[P("finalized",A)]=new Map;ii?.({ReactiveElement:A});if(H){A.enabledWarnings=["change-in-update","async-perform-update"];let o=function(i){if(!i.hasOwnProperty(P("enabledWarnings",i)))i.enabledWarnings=i.enabledWarnings.slice()};A.enableWarning=function(i){if(o(this),!this.enabledWarnings.includes(i))this.enabledWarnings.push(i)},A.disableWarning=function(i){o(this);let a=this.enabledWarnings.indexOf(i);if(a>=0)this.enabledWarnings.splice(a,1)}}(z.reactiveElementVersions??=[]).push("2.1.2");if(H&&z.reactiveElementVersions.length>1)queueMicrotask(()=>{Z("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var K=globalThis,u=(o)=>{if(!K.emitLitDebugLogEvents)return;K.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))},_a=0,V;K.litIssuedWarnings??=new Set,V=(o,i)=>{if(i+=o?` See https://lit.dev/msg/${o} for more information.`:"",!K.litIssuedWarnings.has(i)&&!K.litIssuedWarnings.has(o))console.warn(i),K.litIssuedWarnings.add(i)},queueMicrotask(()=>{V("dev-mode","Lit is in dev mode. Not recommended for production!")});var v=K.ShadyDOM?.inUse&&K.ShadyDOM?.noPatch===!0?K.ShadyDOM.wrap:(o)=>o,no=K.trustedTypes,ai=no?no.createPolicy("lit-html",{createHTML:(o)=>o}):void 0,da=(o)=>o,co=(o,i,a)=>da,ha=(o)=>{if(C!==co)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");C=o},ga=()=>{C=co},Mo=(o,i,a)=>{return C(o,i,a)},di="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,hi="?"+q,ea=`<${hi}>`,Q=document,U=()=>Q.createComment(""),R=(o)=>o===null||typeof o!="object"&&typeof o!="function",zo=Array.isArray,ua=(o)=>zo(o)||typeof o?.[Symbol.iterator]==="function",mo=`[ 	
\f\r]`,ka=`[^ 	
\f\r"'\`<>=]`,ya=`[^\\s"'>=/]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ni=1,po=2,ta=3,li=/-->/g,si=/>/g,B=new RegExp(`>|${mo}(?:(${ya}+)(${mo}*=${mo}*(?:${ka}|("|')|))|$)`,"g"),fa=0,ri=1,wa=2,ci=3,bo=/'/g,Fo=/"/g,gi=/^(?:script|style|textarea|title)$/i,ma=1,lo=2,so=3,Ho=1,ro=2,pa=3,ba=4,Fa=5,Ao=6,Ma=7,Ko=(o)=>(i,...a)=>{if(i.some((n)=>n===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(a.some((n)=>n?._$litStatic$))V("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:o,strings:i,values:a}},k=Ko(ma),y=Ko(lo),ln=Ko(so),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),_i=new WeakMap,$=Q.createTreeWalker(Q,129),C=co;function ei(o,i){if(!zo(o)||!o.hasOwnProperty("raw")){let a="invalid template strings array";throw a=`
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
`),Error(a)}return ai!==void 0?ai.createHTML(i):i}var za=(o,i)=>{let a=o.length-1,n=[],l=i===lo?"<svg>":i===so?"<math>":"",s,r=j;for(let _=0;_<a;_++){let g=o[_],h=-1,t,m=0,b;while(m<g.length){if(r.lastIndex=m,b=r.exec(g),b===null)break;if(m=r.lastIndex,r===j){if(b[ni]==="!--")r=li;else if(b[ni]!==void 0)r=si;else if(b[po]!==void 0){if(gi.test(b[po]))s=new RegExp(`</${b[po]}`,"g");r=B}else if(b[ta]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(r===B)if(b[fa]===">")r=s??j,h=-1;else if(b[ri]===void 0)h=-2;else h=r.lastIndex-b[wa].length,t=b[ri],r=b[ci]===void 0?B:b[ci]==='"'?Fo:bo;else if(r===Fo||r===bo)r=B;else if(r===li||r===si)r=j;else r=B,s=void 0}console.assert(h===-1||r===B||r===bo||r===Fo,"unexpected parse state B");let S=r===B&&o[_+1].startsWith("/>")?" ":"";l+=r===j?g+ea:h>=0?(n.push(t),g.slice(0,h)+di+g.slice(h))+q+S:g+q+(h===-2?_:S)}let c=l+(o[a]||"<?>")+(i===lo?"</svg>":i===so?"</math>":"");return[ei(o,c),n]};class X{constructor({strings:o,["_$litType$"]:i},a){this.parts=[];let n,l=0,s=0,r=o.length-1,c=this.parts,[_,g]=za(o,i);if(this.el=X.createElement(_,a),$.currentNode=this.el.content,i===lo||i===so){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}while((n=$.nextNode())!==null&&c.length<r){if(n.nodeType===1){{let h=n.localName;if(/^(?:textarea|template)$/i.test(h)&&n.innerHTML.includes(q)){let t=`Expressions are not supported inside \`${h}\` elements. See https://lit.dev/msg/expression-in-${h} for more information.`;if(h==="template")throw Error(t);else V("",t)}}if(n.hasAttributes()){for(let h of n.getAttributeNames())if(h.endsWith(di)){let t=g[s++],b=n.getAttribute(h).split(q),S=/([.?@])?(.*)/.exec(t);c.push({type:Ho,index:l,name:S[2],strings:b,ctor:S[1]==="."?ki:S[1]==="?"?yi:S[1]==="@"?ti:L}),n.removeAttribute(h)}else if(h.startsWith(q))c.push({type:Ao,index:l}),n.removeAttribute(h)}if(gi.test(n.tagName)){let h=n.textContent.split(q),t=h.length-1;if(t>0){n.textContent=no?no.emptyScript:"";for(let m=0;m<t;m++)n.append(h[m],U()),$.nextNode(),c.push({type:ro,index:++l});n.append(h[t],U())}}}else if(n.nodeType===8)if(n.data===hi)c.push({type:ro,index:l});else{let t=-1;while((t=n.data.indexOf(q,t+1))!==-1)c.push({type:Ma,index:l}),t+=q.length-1}l++}if(g.length!==s)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+o.join("${...}")+"`");u&&u({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:o})}static createElement(o,i){let a=Q.createElement("template");return a.innerHTML=o,a}}function T(o,i,a=o,n){if(i===x)return i;let l=n!==void 0?a.__directives?.[n]:a.__directive,s=R(i)?void 0:i._$litDirective$;if(l?.constructor!==s){if(l?._$notifyDirectiveConnectionChanged?.(!1),s===void 0)l=void 0;else l=new s(o),l._$initialize(o,a,n);if(n!==void 0)(a.__directives??=[])[n]=l;else a.__directive=l}if(l!==void 0)i=T(o,l._$resolve(o,i.values),l,n);return i}class ui{constructor(o,i){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=o,this._$parent=i}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(o){let{el:{content:i},parts:a}=this._$template,n=(o?.creationScope??Q).importNode(i,!0);$.currentNode=n;let l=$.nextNode(),s=0,r=0,c=a[0];while(c!==void 0){if(s===c.index){let _;if(c.type===ro)_=new Y(l,l.nextSibling,this,o);else if(c.type===Ho)_=new c.ctor(l,c.name,c.strings,this,o);else if(c.type===Ao)_=new fi(l,this,o);this._$parts.push(_),c=a[++r]}if(s!==c?.index)l=$.nextNode(),s++}return $.currentNode=Q,n}_update(o){let i=0;for(let a of this._$parts){if(a!==void 0)if(u&&u({kind:"set part",part:a,value:o[i],valueIndex:i,values:o,templateInstance:this}),a.strings!==void 0)a._$setValue(o,a,i),i+=a.strings.length-2;else a._$setValue(o[i]);i++}}}class Y{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(o,i,a,n){this.type=ro,this._$committedValue=p,this._$disconnectableChildren=void 0,this._$startNode=o,this._$endNode=i,this._$parent=a,this.options=n,this.__isConnected=n?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let o=v(this._$startNode).parentNode,i=this._$parent;if(i!==void 0&&o?.nodeType===11)o=i.parentNode;return o}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(o,i=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(o=T(this,o,i),R(o)){if(o===p||o==null||o===""){if(this._$committedValue!==p)u&&u({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=p}else if(o!==this._$committedValue&&o!==x)this._commitText(o)}else if(o._$litType$!==void 0)this._commitTemplateResult(o);else if(o.nodeType!==void 0){if(this.options?.host===o){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",o,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(o)}else if(ua(o))this._commitIterable(o);else this._commitText(o)}_insert(o){return v(v(this._$startNode).parentNode).insertBefore(o,this._$endNode)}_commitNode(o){if(this._$committedValue!==o){if(this._$clear(),C!==co){let i=this._$startNode.parentNode?.nodeName;if(i==="STYLE"||i==="SCRIPT"){let a="Forbidden";if(i==="STYLE")a="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else a="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(a)}}u&&u({kind:"commit node",start:this._$startNode,parent:this._$parent,value:o,options:this.options}),this._$committedValue=this._insert(o)}}_commitText(o){if(this._$committedValue!==p&&R(this._$committedValue)){let i=v(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Mo(i,"data","property");o=this._textSanitizer(o),u&&u({kind:"commit text",node:i,value:o,options:this.options}),i.data=o}else{let i=Q.createTextNode("");if(this._commitNode(i),this._textSanitizer===void 0)this._textSanitizer=Mo(i,"data","property");o=this._textSanitizer(o),u&&u({kind:"commit text",node:i,value:o,options:this.options}),i.data=o}this._$committedValue=o}_commitTemplateResult(o){let{values:i,["_$litType$"]:a}=o,n=typeof a==="number"?this._$getTemplate(o):(a.el===void 0&&(a.el=X.createElement(ei(a.h,a.h[0]),this.options)),a);if(this._$committedValue?._$template===n)u&&u({kind:"template updating",template:n,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:i}),this._$committedValue._update(i);else{let l=new ui(n,this),s=l._clone(this.options);u&&u({kind:"template instantiated",template:n,instance:l,parts:l._$parts,options:this.options,fragment:s,values:i}),l._update(i),u&&u({kind:"template instantiated and updated",template:n,instance:l,parts:l._$parts,options:this.options,fragment:s,values:i}),this._commitNode(s),this._$committedValue=l}}_$getTemplate(o){let i=_i.get(o.strings);if(i===void 0)_i.set(o.strings,i=new X(o));return i}_commitIterable(o){if(!zo(this._$committedValue))this._$committedValue=[],this._$clear();let i=this._$committedValue,a=0,n;for(let l of o){if(a===i.length)i.push(n=new Y(this._insert(U()),this._insert(U()),this,this.options));else n=i[a];n._$setValue(l),a++}if(a<i.length)this._$clear(n&&v(n._$endNode).nextSibling,a),i.length=a}_$clear(o=v(this._$startNode).nextSibling,i){this._$notifyConnectionChanged?.(!1,!0,i);while(o!==this._$endNode){let a=v(o).nextSibling;v(o).remove(),o=a}}setConnected(o){if(this._$parent===void 0)this.__isConnected=o,this._$notifyConnectionChanged?.(o);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class L{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(o,i,a,n,l){if(this.type=Ho,this._$committedValue=p,this._$disconnectableChildren=void 0,this.element=o,this.name=i,this._$parent=n,this.options=l,a.length>2||a[0]!==""||a[1]!=="")this._$committedValue=Array(a.length-1).fill(new String),this.strings=a;else this._$committedValue=p;this._sanitizer=void 0}_$setValue(o,i=this,a,n){let l=this.strings,s=!1;if(l===void 0){if(o=T(this,o,i,0),s=!R(o)||o!==this._$committedValue&&o!==x,s)this._$committedValue=o}else{let r=o;o=l[0];let c,_;for(c=0;c<l.length-1;c++){if(_=T(this,r[a+c],i,c),_===x)_=this._$committedValue[c];if(s||=!R(_)||_!==this._$committedValue[c],_===p)o=p;else if(o!==p)o+=(_??"")+l[c+1];this._$committedValue[c]=_}}if(s&&!n)this._commitValue(o)}_commitValue(o){if(o===p)v(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=C(this.element,this.name,"attribute");o=this._sanitizer(o??""),u&&u({kind:"commit attribute",element:this.element,name:this.name,value:o,options:this.options}),v(this.element).setAttribute(this.name,o??"")}}}class ki extends L{constructor(){super(...arguments);this.type=pa}_commitValue(o){if(this._sanitizer===void 0)this._sanitizer=C(this.element,this.name,"property");o=this._sanitizer(o),u&&u({kind:"commit property",element:this.element,name:this.name,value:o,options:this.options}),this.element[this.name]=o===p?void 0:o}}class yi extends L{constructor(){super(...arguments);this.type=ba}_commitValue(o){u&&u({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(o&&o!==p),options:this.options}),v(this.element).toggleAttribute(this.name,!!o&&o!==p)}}class ti extends L{constructor(o,i,a,n,l){super(o,i,a,n,l);if(this.type=Fa,this.strings!==void 0)throw Error(`A \`<${o.localName}>\` has a \`@${i}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(o,i=this){if(o=T(this,o,i,0)??p,o===x)return;let a=this._$committedValue,n=o===p&&a!==p||o.capture!==a.capture||o.once!==a.once||o.passive!==a.passive,l=o!==p&&(a===p||n);if(u&&u({kind:"commit event listener",element:this.element,name:this.name,value:o,options:this.options,removeListener:n,addListener:l,oldListener:a}),n)this.element.removeEventListener(this.name,this,a);if(l)this.element.addEventListener(this.name,this,o);this._$committedValue=o}handleEvent(o){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,o);else this._$committedValue.handleEvent(o)}}class fi{constructor(o,i,a){this.element=o,this.type=Ao,this._$disconnectableChildren=void 0,this._$parent=i,this.options=a}get _$isConnected(){return this._$parent._$isConnected}_$setValue(o){u&&u({kind:"commit to element binding",element:this.element,value:o,options:this.options}),T(this,o)}}var Ha=K.litHtmlPolyfillSupportDevMode;Ha?.(X,Y);(K.litHtmlVersions??=[]).push("3.3.2");if(K.litHtmlVersions.length>1)queueMicrotask(()=>{V("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var D=(o,i,a)=>{if(i==null)throw TypeError(`The container to render into may not be ${i}`);let n=_a++,l=a?.renderBefore??i,s=l._$litPart$;if(u&&u({kind:"begin render",id:n,value:o,container:i,options:a,part:s}),s===void 0){let r=a?.renderBefore??null;l._$litPart$=s=new Y(i.insertBefore(U(),r),r,void 0,a??{})}return s._$setValue(o),u&&u({kind:"end render",id:n,value:o,container:i,options:a,part:s}),s};D.setSanitizer=ha,D.createSanitizer=Mo,D._testOnlyClearSanitizerFactoryDoNotCallOrElse=ga;var Aa=(o,i)=>o,Zo=!0,J=globalThis,wi;if(Zo)J.litIssuedWarnings??=new Set,wi=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!J.litIssuedWarnings.has(i)&&!J.litIssuedWarnings.has(o))console.warn(i),J.litIssuedWarnings.add(i)};class F extends A{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){let i=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(o),this.__childPart=D(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return x}}F._$litElement$=!0;F[Aa("finalized",F)]=!0;J.litElementHydrateSupport?.({LitElement:F});var Ka=Zo?J.litElementPolyfillSupportDevMode:J.litElementPolyfillSupport;Ka?.({LitElement:F});(J.litElementVersions??=[]).push("4.2.2");if(Zo&&J.litElementVersions.length>1)queueMicrotask(()=>{wi("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var mi=!0,pi;if(mi)globalThis.litIssuedWarnings??=new Set,pi=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!globalThis.litIssuedWarnings.has(i)&&!globalThis.litIssuedWarnings.has(o))console.warn(i),globalThis.litIssuedWarnings.add(i)};var Za=(o,i,a)=>{let n=i.hasOwnProperty(a);return i.constructor.createProperty(a,o),n?Object.getOwnPropertyDescriptor(i,a):void 0},va={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:ao},Na=(o=va,i,a)=>{let{kind:n,metadata:l}=a;if(mi&&l==null)pi("missing-class-metadata",`The class ${i} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let s=globalThis.litPropertyMetadata.get(l);if(s===void 0)globalThis.litPropertyMetadata.set(l,s=new Map);if(n==="setter")o=Object.create(o),o.wrapped=!0;if(s.set(a.name,o),n==="accessor"){let{name:r}=a;return{set(c){let _=i.get.call(this);i.set.call(this,c),this.requestUpdate(r,_,o,!0,c)},init(c){if(c!==void 0)this._$changeProperty(r,void 0,o,c);return c}}}else if(n==="setter"){let{name:r}=a;return function(c){let _=this[r];i.call(this,c),this.requestUpdate(r,_,o,!0,c)}}throw Error(`Unsupported decorator location: ${n}`)};function w(o){return(i,a)=>{return typeof a==="object"?Na(o,i,a):Za(o,i,a)}}function _o(o){return w({...o,state:!0,attribute:!1})}var Sa=!0,qa;if(Sa)globalThis.litIssuedWarnings??=new Set,qa=(o,i)=>{if(i+=o?` See https://lit.dev/msg/${o} for more information.`:"",!globalThis.litIssuedWarnings.has(i)&&!globalThis.litIssuedWarnings.has(o))console.warn(i),globalThis.litIssuedWarnings.add(i)};var bi="0.5.0",N={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},Fi=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],e={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var Ja={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",editor:{entity:"Погодная сущность",name:"Название карточки",height:"Высота карточки",show_feels_like:"Показывать ощущаемую температуру",show_wind:"Показывать скорость ветра",show_wind_gust:"Показывать порывы ветра",show_wind_direction:"Показывать направление ветра",show_humidity:"Показывать влажность",show_min_temp:"Показывать минимальную температуру",show_hourly_forecast:"Показывать почасовой прогноз",hourly_forecast_hours:"Часы прогноза",show_daily_forecast:"Показывать дневной прогноз",daily_forecast_days:"Дни прогноза",show_sunrise_sunset:"Показывать восход/закат",sunrise_entity:"Сущность восхода",sunset_entity:"Сущность заката",show_clock:"Показывать часы",clock_position:"Позиция часов",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат времени",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Прозрачность подложки",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",language_it:"Итальянский",language_sk:"Словацкий",language_hu:"Венгерский",wind_speed_unit:"Единицы скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч"},demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",showClock:"Часы",clockPosition:"Позиция часов",clockPositionTop:"Вверху справа",clockPositionDetails:"В строке деталей",clockFormat:"Формат часов",clockFormat12h:"12-часовой (AM/PM)",clockFormat24h:"24-часовой",overlayOpacity:"Прозрачность подложки (0-1)",windSpeedUnit:"Единицы скорости ветра",dailyForecastDays:"Дни прогноза",hourlyForecastHours:"Часы прогноза",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}},Mi=Ja;var Wa={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",editor:{entity:"Wetter-Entität",name:"Kartentitel",height:"Kartenhöhe",show_feels_like:"Gefühlte Temperatur anzeigen",show_wind:"Windgeschwindigkeit anzeigen",show_wind_gust:"Windböen anzeigen",show_wind_direction:"Windrichtung anzeigen",show_humidity:"Luftfeuchtigkeit anzeigen",show_min_temp:"Mindesttemperatur anzeigen",show_hourly_forecast:"Stundenprognose anzeigen",hourly_forecast_hours:"Stunden der Prognose",show_daily_forecast:"Tagesprognose anzeigen",daily_forecast_days:"Tage der Prognose",show_sunrise_sunset:"Sonnenaufgang/Sonnenuntergang anzeigen",sunrise_entity:"Sonnenaufgang-Entität",sunset_entity:"Sonnenuntergang-Entität",show_clock:"Uhr anzeigen",clock_position:"Uhrposition",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Zeitformat",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Überlagerungs-Transparenz",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",language_it:"Italienisch",language_sk:"Slowakisch",language_hu:"Ungarisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",showClock:"Uhr",clockPosition:"Uhrposition",clockPositionTop:"Oben rechts",clockPositionDetails:"Detailzeile",clockFormat:"Uhrzeitformat",clockFormat12h:"12-Stunden (AM/PM)",clockFormat24h:"24-Stunden",overlayOpacity:"Überlagerungs-Transparenz (0-1)",windSpeedUnit:"Windgeschwindigkeitseinheit",dailyForecastDays:"Tage der Prognose",hourlyForecastHours:"Stunden der Prognose",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}},zi=Wa;var Ba={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",editor:{entity:"Weer-entiteit",name:"Kaarttitel",height:"Kaart hoogte",show_feels_like:"Gevoelstemperatuur tonen",show_wind:"Windsnelheid tonen",show_wind_gust:"Windstoten tonen",show_wind_direction:"Windrichting tonen",show_humidity:"Luchtvochtigheid tonen",show_min_temp:"Minimumtemperatuur tonen",show_hourly_forecast:"Uurverwachting tonen",hourly_forecast_hours:"Aantal uren",show_daily_forecast:"Dagverwachting tonen",daily_forecast_days:"Aantal dagen",show_sunrise_sunset:"Zonsopgang/zonsondergang tonen",sunrise_entity:"Zonsopgang-entiteit",sunset_entity:"Zonsondergang-entiteit",show_clock:"Klok tonen",clock_position:"Klokpositie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Tijdformaat",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Overlay-doorzichtigheid",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",language_it:"Italiaans",language_sk:"Slowaaks",language_hu:"Hongaars",wind_speed_unit:"Windsnelheidseenheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u"},demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",showClock:"Klok",clockPosition:"Klokpositie",clockPositionTop:"Rechtsboven",clockPositionDetails:"Detailregel",clockFormat:"Klokformaat",clockFormat12h:"12-uurs (AM/PM)",clockFormat24h:"24-uurs",overlayOpacity:"Overlay-transparantie (0-1)",windSpeedUnit:"Windsnelheidseenheid",dailyForecastDays:"Voorspellingsdagen",hourlyForecastHours:"Voorspellingsuren",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}},Hi=Ba;var $a={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",editor:{entity:"Entité météo",name:"Titre de la carte",height:"Hauteur de la carte",show_feels_like:"Afficher le ressenti",show_wind:"Afficher la vitesse du vent",show_wind_gust:"Afficher les rafales",show_wind_direction:"Afficher la direction du vent",show_humidity:"Afficher l’humidité",show_min_temp:"Afficher la température minimale",show_hourly_forecast:"Afficher la prévision horaire",hourly_forecast_hours:"Heures de prévision",show_daily_forecast:"Afficher la prévision quotidienne",daily_forecast_days:"Jours de prévision",show_sunrise_sunset:"Afficher lever/coucher du soleil",sunrise_entity:"Entité de lever du soleil",sunset_entity:"Entité de coucher du soleil",show_clock:"Afficher l'horloge",clock_position:"Position de l'horloge",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format de l'heure",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Opacité du voile",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",language_it:"Italien",language_sk:"Slovaque",language_hu:"Hongrois",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",showClock:"Horloge",clockPosition:"Position de l'horloge",clockPositionTop:"En haut à droite",clockPositionDetails:"Ligne de détails",clockFormat:"Format de l'horloge",clockFormat12h:"12 heures (AM/PM)",clockFormat24h:"24 heures",overlayOpacity:"Opacité du voile (0-1)",windSpeedUnit:"Unité de vitesse du vent",dailyForecastDays:"Jours de prévision",hourlyForecastHours:"Heures de prévision",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}},Ai=$a;var Qa={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",editor:{entity:"Weather Entity",name:"Card Title",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",show_sunrise_sunset:"Show Sunrise/Sunset",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity",show_clock:"Show Clock",clock_position:"Clock Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Clock Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Overlay Opacity",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",language_it:"Italian",language_sk:"Slovak",language_hu:"Hungarian",wind_speed_unit:"Wind Speed Unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",showClock:"Clock",clockPosition:"Clock Position",clockPositionTop:"Top right",clockPositionDetails:"Details row",clockFormat:"Clock Format",clockFormat12h:"12-hour (AM/PM)",clockFormat24h:"24-hour",overlayOpacity:"Overlay Opacity (0-1)",windSpeedUnit:"Wind Speed Unit",dailyForecastDays:"Daily Forecast Days",hourlyForecastHours:"Hourly Forecast Hours",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian",slovak:"Slovak",hungarian:"Magyar"}}},Ki=Qa;var xa={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",editor:{entity:"Entidad de clima",name:"Título de la tarjeta",height:"Altura de la tarjeta",show_feels_like:"Mostrar sensación térmica",show_wind:"Mostrar velocidad del viento",show_wind_gust:"Mostrar ráfaga de viento",show_wind_direction:"Mostrar dirección del viento",show_humidity:"Mostrar humedad",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar pronóstico por horas",hourly_forecast_hours:"Horas del pronóstico",show_daily_forecast:"Mostrar pronóstico diario",daily_forecast_days:"Días del pronóstico",show_sunrise_sunset:"Mostrar amanecer/atardecer",sunrise_entity:"Entidad de amanecer",sunset_entity:"Entidad de atardecer",show_clock:"Mostrar reloj",clock_position:"Posición del reloj",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato de hora",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidad de superposición",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",language_it:"Italiano",language_sk:"Eslovaco",language_hu:"Húngaro",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",showClock:"Reloj",clockPosition:"Posición del Reloj",clockPositionTop:"Arriba a la derecha",clockPositionDetails:"Línea de detalles",clockFormat:"Formato del Reloj",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidad de Superposición (0-1)",windSpeedUnit:"Unidad de Velocidad del Viento",dailyForecastDays:"Días de Previsión",hourlyForecastHours:"Horas de Previsión",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}},Zi=xa;var Ca={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",editor:{entity:"Entità meteo",name:"Titolo della scheda",height:"Altezza della scheda",show_feels_like:"Mostra temperatura percepita",show_wind:"Mostra velocità del vento",show_wind_gust:"Mostra raffiche di vento",show_wind_direction:"Mostra direzione del vento",show_humidity:"Mostra umidità",show_min_temp:"Mostra temperatura minima",show_hourly_forecast:"Mostra previsione oraria",hourly_forecast_hours:"Ore di previsione",show_daily_forecast:"Mostra previsione giornaliera",daily_forecast_days:"Giorni di previsione",show_sunrise_sunset:"Mostra alba/tramonto",sunrise_entity:"Entità alba",sunset_entity:"Entità tramonto",show_clock:"Mostra orologio",clock_position:"Posizione orologio",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato orario",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Opacità sovrapposizione",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",language_it:"Italiano",language_sk:"Slovacco",language_hu:"Ungherese",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",showClock:"Orologio",clockPosition:"Posizione Orologio",clockPositionTop:"In alto a destra",clockPositionDetails:"Riga dettagli",clockFormat:"Formato Orologio",clockFormat12h:"12 ore (AM/PM)",clockFormat24h:"24 ore",overlayOpacity:"Opacità Sovrapposizione (0-1)",windSpeedUnit:"Unità Velocità Vento",dailyForecastDays:"Giorni di Previsione",hourlyForecastHours:"Ore di Previsione",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}},vi=Ca;var Pa={sunny:"Slnečno",clear:"Jasno",overcast:"Zamračené",cloudy:"Oblačno",partlycloudy:"Polooblačno",rainy:"Daždivo",rain:"Dážď",snowy:"Sneženie",snow:"Sneh",foggy:"Hmlisto",fog:"Hmla",lightning:"Blesky","lightning-rainy":"Búrka",pouring:"Silný dážď","snowy-rainy":"Dážď so snehom",hail:"Krúpy","clear-night":"Jasná noc",feels_like:"Pocitová teplota",forecast_title:"Predpoveď na dnes",daily_forecast_title:"Denná predpoveď",no_data:"Žiadne dáta",forecast_unavailable:"Predpoveď nedostupná",weather:"Počasie",language:"Jazyk",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"uzly",wind_unit_fts:"ft/s",show_clock:"Zobraziť aktuálny čas",am:"dop.",pm:"pop.",editor:{entity:"Entita počasia",name:"Názov karty",height:"Výška karty",show_feels_like:"Zobraziť pocitovú teplotu",show_wind:"Zobraziť rýchlosť vetra",show_wind_gust:"Zobraziť nárazy vetra",show_wind_direction:"Zobraziť smer vetra",show_humidity:"Zobraziť vlhkosť",show_min_temp:"Zobraziť minimálnu teplotu",show_hourly_forecast:"Zobraziť hodinovú predpoveď",hourly_forecast_hours:"Počet hodín v predpovedi",show_daily_forecast:"Zobraziť dennú predpoveď",daily_forecast_days:"Počet dní v predpovedi",show_sunrise_sunset:"Zobraziť východ/západ slnka",sunrise_entity:"Entita východu slnka",sunset_entity:"Entita západu slnka",show_clock:"Zobraziť hodiny",clock_position:"Pozícia hodín",clock_position_top:"Hore",clock_position_details:"V detailoch",clock_format:"Formát času",clock_format_12h:"12-hodinový (AM/PM)",clock_format_24h:"24-hodinový",overlay_opacity:"Priehľadnosť vrstvy",language:"Jazyk",language_auto:"Automaticky",language_en:"Angličtina",language_ru:"Ruština",language_de:"Nemčina",language_nl:"Holandčina",language_fr:"Francúzština",language_es:"Španielčina",language_it:"Taliančina",language_sk:"Slovenčina",language_hu:"Maďarčina",wind_speed_unit:"Jednotka rýchlosti vetra",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamická karta počasia",pageSubtitle:"Interaktívne demo a konfiguračný nástroj",livePreview:"Živý náhľad",configuration:"Konfigurácia",quickPresets:"Rýchle predvoľby",sunnyDay:"Slnečný deň",rainy:"Daždivo",snowy:"Sneženie",clearNight:"Jasná noc",weatherCondition:"Poveternostné podmienky",condition:"Stav",temperature:"Teplota",humidity:"Vlhkosť (%)",windSpeed:"Rýchlosť vetra",timeOfDay:"Čas dňa",timeMode:"Režim času",autoTime:"Automaticky (Aktuálny čas)",manualControl:"Manuálne ovládanie",sunrise:"Východ slnka",day:"Deň",sunset:"Západ slnka",night:"Noc",currentTime:"Aktuálny čas",displayOptions:"Možnosti zobrazenia",cardName:"Názov karty",height:"Výška (px)",feelsLike:"Pocitová teplota",minTemp:"Minimálna teplota",windDirection:"Smer vetra",windGust:"Nárazy vetra",hourlyForecast:"Hodinová predpoveď",dailyForecast:"Denná predpoveď",sunriseSunset:"Východ/Západ slnka",showClock:"Hodiny",clockPosition:"Pozícia hodín",clockPositionTop:"Vpravo hore",clockPositionDetails:"Riadok s detailmi",clockFormat:"Formát času",clockFormat12h:"12-hodinový (AM/PM)",clockFormat24h:"24-hodinový",overlayOpacity:"Priehľadnosť vrstvy (0-1)",windSpeedUnit:"Jednotka rýchlosti vetra",dailyForecastDays:"Dni dennej predpovede",hourlyForecastHours:"Hodiny hodinovej predpovede",updateCard:"Aktualizovať kartu",startDemo:"Spustiť Demo režim",stopDemo:"Zastaviť Demo",madeWith:"Vytvorené s láskou pre Home Assistant",loading:"Načítavam kartu...",errorTitle:"Nepodarilo sa načítať kartu",errorDetails:"Skontrolujte konzolu prehliadača (F12) pre detaily",errorServer:"Uistite sa, že súbor je poskytovaný cez lokálny server (nie cez file://)",placeholderEmpty:"Ponechajte prázdne pre skrytie",weatherConditions:{sunny:"Slnečno",clear:"Jasno",clearNight:"Jasná noc",partlyCloudy:"Polooblačno",cloudy:"Oblačno",rainy:"Daždivo",pouring:"Lejak",snowy:"Sneženie",sleet:"Dážď so snehom",hail:"Krúpy",foggy:"Hmla",lightning:"Blesky",thunderstorm:"Búrka"},language:{title:"Jazyk",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano",slovak:"Slovenčina",hungarian:"Magyar"}}},Ni=Pa;var Ta={sunny:"Napos",clear:"Derült",overcast:"Borult",cloudy:"Felhős",partlycloudy:"Részben felhős",rainy:"Esős",rain:"Eső",snowy:"Havas",snow:"Hó",foggy:"Ködös",fog:"Köd",lightning:"Villámlás","lightning-rainy":"Zivatar",pouring:"Heves eső","snowy-rainy":"Havas eső",hail:"Jégeső","clear-night":"Derült éj",feels_like:"Hőérzet",forecast_title:"Mai előrejelzés",daily_forecast_title:"Napi előrejelzés",no_data:"Nincs adat",forecast_unavailable:"Előrejelzés nem elérhető",weather:"Időjárás",language:"Nyelv",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"csomó",wind_unit_fts:"ft/s",show_clock:"Aktuális idő mutatása",am:"DE",pm:"DU",editor:{entity:"Időjárás entitás",name:"Kártya címe",height:"Kártya magasság",show_feels_like:"Hőérzet mutatása",show_wind:"Szélsebesség mutatása",show_wind_gust:"Széllökések mutatása",show_wind_direction:"Szélirány mutatása",show_humidity:"Páratartalom mutatása",show_min_temp:"Min. hőmérséklet",show_hourly_forecast:"Óránkénti előrejelzés",hourly_forecast_hours:"Óránkénti órák száma",show_daily_forecast:"Napi előrejelzés",daily_forecast_days:"Napok száma a napi előrejelzésben",show_sunrise_sunset:"Napkelte/Napnyugta",sunrise_entity:"Napkelte entitás",sunset_entity:"Napnyugta entitás",show_clock:"Óra mutatása",clock_position:"Óra pozíció",clock_position_top:"Felül",clock_position_details:"Részletek",clock_format:"Óra formátum",clock_format_12h:"12 órás (DE/DU)",clock_format_24h:"24 órás",overlay_opacity:"Fedőréteg átlátszóság",language:"Nyelv",language_auto:"Automatikus",language_en:"Angol",language_ru:"Orosz",language_de:"Német",language_nl:"Holland",language_fr:"Francia",language_es:"Spanyol",language_it:"Olasz",language_hu:"Magyar",language_sk:"Szlovák",wind_speed_unit:"Szélsebesség egység",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interaktív demó és beállító eszköz",livePreview:"Élő előnézet",configuration:"Beállítások",quickPresets:"Gyors presetek",sunnyDay:"Napos nap",rainy:"Esős",snowy:"Havas",clearNight:"Derült éj",weatherCondition:"Időjárási állapot",condition:"Állapot",temperature:"Hőmérséklet",humidity:"Páratartalom (%)",windSpeed:"Szélsebesség",timeOfDay:"Napszak",timeMode:"Idő mód",autoTime:"Automatikus (aktuális idő)",manualControl:"Kézi vezérlés",sunrise:"Napkelte",day:"Nappal",sunset:"Napnyugta",night:"Éjszaka",currentTime:"Aktuális idő",displayOptions:"Megjelenítés",cardName:"Kártya neve",height:"Magasság (px)",feelsLike:"Hőérzet",minTemp:"Min. hőmérséklet",windDirection:"Szélirány",windGust:"Széllökés",hourlyForecast:"Óránkénti előrejelzés",dailyForecast:"Napi előrejelzés",sunriseSunset:"Napkelte/Napnyugta",showClock:"Óra",clockPosition:"Óra pozíció",clockPositionTop:"Jobb felső",clockPositionDetails:"Részletek sora",clockFormat:"Óra formátum",clockFormat12h:"12 órás (DE/DU)",clockFormat24h:"24 órás",overlayOpacity:"Fedőréteg átlátszóság (0–1)",windSpeedUnit:"Szélsebesség egység",dailyForecastDays:"Napi napok",hourlyForecastHours:"Óránkénti órák",updateCard:"Kártya frissítése",startDemo:"Demó indítása",stopDemo:"Demó leállítása",madeWith:"Szeretettel a Home Assistanthez",loading:"Kártya betöltése…",errorTitle:"Nem sikerült betölteni",errorDetails:"Részletek a böngésző konzolban (F12)",errorServer:"A fájlt helyi szerveren szolgáld ki (nem file://)",placeholderEmpty:"Üresen hagyva elrejt",weatherConditions:{sunny:"Napos",clear:"Derült",clearNight:"Derült éj",partlyCloudy:"Részben felhős",cloudy:"Felhős",rainy:"Esős",pouring:"Zuhogó eső",snowy:"Havas",sleet:"Havas eső",hail:"Jégeső",foggy:"Ködös",lightning:"Villámlás",thunderstorm:"Zivatar"},language:{title:"Nyelv",english:"Angol",russian:"Orosz",french:"Francia",german:"Német",dutch:"Holland",spanish:"Spanyol",italian:"Olasz",hungarian:"Magyar",slovak:"Slovenčina"}}},Si=Ta;var vo={en:Ki,ru:Mi,de:zi,nl:Hi,fr:Ai,es:Zi,it:vi,sk:Ni,hu:Si};class qi{lang="en";fallback="en";t(o){let i=o.split("."),a=i.reduce((l,s)=>l?.[s],vo[this.lang]);if(a!=null)return a;return i.reduce((l,s)=>l?.[s],vo[this.fallback])??o}setLanguage(o){if(!vo[o]||this.lang===o)return;this.lang=o,window.dispatchEvent(new CustomEvent("language-changed"))}}var d=new qi;window.i18n=d;var I=({configLang:o,hassLang:i}={})=>{if(o&&o!=="auto")return o;if(i)return i;if(typeof navigator<"u"&&navigator.language){let a=navigator.language.toLowerCase();if(a.startsWith("ru"))return"ru";if(a.startsWith("de"))return"de";if(a.startsWith("nl"))return"nl";if(a.startsWith("fr"))return"fr";if(a.startsWith("it"))return"it";if(a.startsWith("es"))return"es";if(a.startsWith("sk"))return"sk";if(a.startsWith("hu"))return"hu"}return"en"};function Ga(){let o=new Date,i=o.getHours(),a=o.getMinutes(),n=i*60+a;if(n>=N.SUNRISE_START&&n<N.SUNRISE_END)return{type:"sunrise",progress:(n-N.SUNRISE_START)/120};if(n>=N.SUNRISE_END&&n<N.DAY_END)return{type:"day",progress:(n-N.SUNRISE_END)/600};if(n>=N.DAY_END&&n<N.SUNSET_END)return{type:"sunset",progress:(n-N.DAY_END)/120};return{type:"night",progress:0}}function Ji(o,i,a){if(o.type==="sunrise"){let n=o.progress;return{x:i*(0.3+n*0.4),y:a*(0.85-n*0.55)}}else if(o.type==="sunset"){let n=o.progress;return{x:i*(0.5+n*0.3),y:a*(0.3+n*0.55)}}else if(o.type==="day"){let l=o.progress*Math.PI;return{x:i*(0.5+Math.sin(l)*0.25),y:a*(0.25-Math.sin(l)*0.1)}}else return{x:i*0.75,y:a*0.3}}function Wi(o){if(o.type==="sunrise"){let i=o.progress,a={r:26,g:26,b:46},n={r:255,g:160,b:122},l={r:255,g:215,b:0};return{start:{r:Math.round(a.r+(n.r-a.r)*i),g:Math.round(a.g+(n.g-a.g)*i),b:Math.round(a.b+(n.b-a.b)*i)},end:{r:Math.round(a.r+(l.r-a.r)*i),g:Math.round(a.g+(l.g-a.g)*i),b:Math.round(a.b+(l.b-a.b)*i)}}}else if(o.type==="sunset"){let i=o.progress,a={r:255,g:107,b:107},n={r:255,g:160,b:122},l={r:26,g:26,b:46};return{start:{r:Math.round(a.r+(l.r-a.r)*i),g:Math.round(a.g+(l.g-a.g)*i),b:Math.round(a.b+(l.b-a.b)*i)},end:{r:Math.round(n.r+(l.r-n.r)*i),g:Math.round(n.g+(l.g-n.g)*i),b:Math.round(n.b+(l.b-n.b)*i)}}}return null}function Bi(o,i="24h",a="AM",n="PM"){if(!o)return"";let s=new Date(o).getHours();if(i==="12h"){let r=s%12||12,c=s<12?a:n;return`${r} ${c}`}return`${s.toString().padStart(2,"0")}:00`}function $i(o,i){if(!o)return"";let a=new Date(o);if(Number.isNaN(a.getTime()))return"";return a.toLocaleDateString(i||void 0,{weekday:"short",day:"numeric",month:"short"})}function No(o,i="24h",a="AM",n="PM"){if(!o)return"";let l=typeof o==="string"?new Date(o):o,s=l.getHours(),r=l.getMinutes();if(i==="12h"){let c=s>=12?n:a;return s=s%12||12,`${s}:${r.toString().padStart(2,"0")} ${c}`}else return`${s.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}function So(o,i=null,a=null,n=null){let l=null,s=null;if(i&&n&&n.states[i]){let r=n.states[i];l=new Date(r.state)}if(a&&n&&n.states[a]){let r=n.states[a];s=new Date(r.state)}if(!l||!s){if(o&&o.attributes){let r=o.attributes;if(!l&&(r.forecast_sunrise||r.sunrise))l=new Date(r.forecast_sunrise||r.sunrise);if(!s&&(r.forecast_sunset||r.sunset))s=new Date(r.forecast_sunset||r.sunset)}}if((!l||!s)&&n&&n.states["sun.sun"]){let c=n.states["sun.sun"].attributes;if(!l&&c.next_rising)l=new Date(c.next_rising);if(!s&&c.next_setting)s=new Date(c.next_setting)}return{sunrise:l,sunset:s,hasSunData:!!(l&&s)}}function qo(o){let i=new Date;if(o.hasSunData&&o.sunrise&&o.sunset){let a=i.getTime(),n=o.sunrise.getTime(),l=o.sunset.getTime();if(n-a>43200000)n-=86400000;if(l-a>43200000)l-=86400000;let s=n-3600000,r=n+3600000,c=l-3600000,_=l+3600000;if(a>=s&&a<r)return{type:"sunrise",progress:(a-s)/(r-s)};if(a>=r&&a<c)return{type:"day",progress:(a-r)/(c-r)};if(a>=c&&a<_)return{type:"sunset",progress:(a-c)/(_-c)};return{type:"night",progress:0}}return Ga()}function Jo(o,i,a){if(o==null)return null;if(i.wind_speed_unit)return Math.round(o*10)/10;if(a==="kmh")return Math.round(o*3.6*10)/10;return Math.round(o*10)/10}function Qi(o,i,a){let n=o.wind_speed_unit;if(n){let l=n.toLowerCase().replace(/[^a-z]/g,"");if(l==="kmh"||l==="kmph")return a("wind_unit_kmh");else if(l==="ms"||l==="mps")return a("wind_unit_ms");else if(l==="mph")return a("wind_unit_mph");else if(l==="knots"||l==="kn"||l==="kt")return a("wind_unit_knots");else if(l==="fts"||l==="ftps")return a("wind_unit_fts");return n}return i==="kmh"?a("wind_unit_kmh"):a("wind_unit_ms")}function xi(o,i,a,n){if(i==="12h"){let l=o.getHours(),s=String(o.getMinutes()).padStart(2,"0"),r=l>=12?n:a;return l=l%12||12,`${l}:${s} ${r}`}else{let l=String(o.getHours()).padStart(2,"0"),s=String(o.getMinutes()).padStart(2,"0");return`${l}:${s}`}}function go(o,i){let a=o?.querySelector(i);if(!a)return null;let n=(l)=>{let s=l;if(s.deltaY!==0)l.preventDefault(),a.scrollLeft+=s.deltaY};return a.addEventListener("wheel",n,{passive:!1}),()=>a.removeEventListener("wheel",n)}var Ci=W`
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
`;class M{ctx;constructor(o){this.ctx=o}drawCloud(o,i,a,n){let l=this.ctx.shadowBlur,s=this.ctx.shadowColor,r=this.ctx.globalAlpha;this.ctx.shadowBlur=a*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${n*0.4})`,this.ctx.globalAlpha=n*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:o,y:i,r:a*0.4},{x:o+a*0.35,y:i,r:a*0.5},{x:o+a*0.65,y:i,r:a*0.48},{x:o+a*0.92,y:i,r:a*0.38},{x:o+a*0.18,y:i-a*0.28,r:a*0.38},{x:o+a*0.52,y:i-a*0.32,r:a*0.42},{x:o+a*0.78,y:i-a*0.28,r:a*0.38},{x:o+a*0.32,y:i-a*0.42,r:a*0.32},{x:o+a*0.62,y:i-a*0.48,r:a*0.36},{x:o+a*0.82,y:i-a*0.42,r:a*0.32}].forEach((_)=>{this.ctx.beginPath(),this.ctx.arc(_.x,_.y,_.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=l,this.ctx.shadowColor=s,this.ctx.globalAlpha=r}drawClouds(o,i,a,n=0.5){let l=Math.max(2,Math.floor(i/150*n));for(let s=0;s<l;s++){let r=(o*3+s*150)%(i+200)-100,c=a*(0.2+s%3*0.15)+Math.sin(o*0.2+s)*8,_=40+s%3*15,g=0.6+s%2*0.2;this.drawCloud(r,c,_,g)}}}class Wo extends M{draw(o,i,a,n){let l=Date.now()*0.001,s=Ji(n,i,a),r=s.x,c=s.y;if(n.type==="day"||n.type==="sunrise"||n.type==="sunset"){if(this.drawSun(r,c,l),n.type==="sunrise"||n.type==="sunset")this.drawHorizonReflection(r,c,a,l)}else if(n.type==="night")this.drawNightSky(i,a,l);this.drawClouds(l,i,a,0.3)}drawSun(o,i,a){let n=48+Math.sin(a*0.15)*1.5,l=this.ctx.createRadialGradient(o,i,n*0.3,o,i,n*3.5);l.addColorStop(0,"rgba(255, 248, 230, 0.25)"),l.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),l.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),l.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),l.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),l.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),l.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=l,this.ctx.beginPath(),this.ctx.arc(o,i,n*3.5,0,Math.PI*2),this.ctx.fill();let s=this.ctx.createRadialGradient(o,i,n*0.5,o,i,n*2.2);s.addColorStop(0,"rgba(255, 250, 220, 0.35)"),s.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),s.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),s.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),s.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(o,i,n*2.2,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(o,i,n*0.6,o,i,n*1.6);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(o,i,n*1.6,0,Math.PI*2),this.ctx.fill();let c=this.ctx.createRadialGradient(o-n*0.1,i-n*0.1,0,o,i,n);c.addColorStop(0,"#FFFEF5"),c.addColorStop(0.15,"#FFF9E6"),c.addColorStop(0.3,"#FFF4D6"),c.addColorStop(0.5,"#FFEDC0"),c.addColorStop(0.7,"#FFE4A8"),c.addColorStop(0.85,"#FFDC95"),c.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(o,i,n,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(o,i,a,n){let l=48+Math.sin(n*0.15)*1.5,s=a*0.85;if(i>=s-50){let r=Math.max(0,(s-i)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${r})`,this.ctx.beginPath(),this.ctx.ellipse(o,s,l*1.5,l*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(o,i,a){this.ctx.fillStyle="#FFFFFF";for(let s=0;s<20;s++){let r=(o*0.2+s*47)%o,c=(i*0.2+s*23)%(i*0.6),_=Math.sin(a*0.8+s)*0.5+0.5;this.ctx.globalAlpha=_*0.8,this.ctx.beginPath(),this.ctx.arc(r,c,1.5,0,Math.PI*2),this.ctx.fill()}let n=o*0.75,l=i*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(n,l,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(n-8,l-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class O extends M{rainDrops=[];lastTime=0;draw(o,i,a,n,l=!1){let s=Date.now()*0.001;this.drawClouds(s,i,a,l?1:0.8),this.drawRain(i,a,l)}drawRain(o,i,a){let n=a?130:90;if(this.rainDrops.length!==n){this.rainDrops=[];for(let c=0;c<n;c++)this.rainDrops.push({x:Math.random()*o,y:Math.random()*i-Math.random()*200,speed:a?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:a?1.2+Math.random()*1:0.8+Math.random()*0.7,length:a?8+Math.random()*10:6+Math.random()*8,alpha:a?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let l=Date.now()*0.001,s=this.lastTime>0?Math.min(l-this.lastTime,0.1):0.016666666666666666;this.lastTime=l;let r=l;for(let c=0;c<this.rainDrops.length;c++){let _=this.rainDrops[c];if(_.y+=_.speed*s,_.y>i+50)_.y=-50-Math.random()*100,_.x=Math.random()*o;let g=_.windOffset*(1+Math.sin(r*0.5+_.phase)*0.2),h=_.x+g;if(h<-10)_.x=o+10;else if(h>o+10)_.x=-10;this.drawRainDrop(h,_.y,_)}}drawRainDrop(o,i,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha;let n=i-a.length*0.5,l=i+a.length*0.5,s=a.alpha,r=a.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+s+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+r+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(o,n),this.ctx.quadraticCurveTo(o-a.width*0.3,i,o-a.width,l-a.width*0.3),this.ctx.arc(o,l,a.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(o+a.width*0.3,i,o,n),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class Bo extends M{snowflakes=[];lastTime=0;draw(o,i,a,n){let l=Date.now()*0.001;this.drawClouds(l,i,a,0.7),this.drawSnowflakes(i,a)}drawSnowflakes(o,i){let a=Math.floor(o*i/5000),n=Math.max(30,Math.min(a,80));if(this.snowflakes.length!==n){this.snowflakes=[];for(let c=0;c<n;c++)this.snowflakes.push({x:Math.random()*o,y:Math.random()*i-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let l=Date.now()*0.001,s=this.lastTime>0?Math.min(l-this.lastTime,0.1):0.016666666666666666;this.lastTime=l;let r=l;this.ctx.lineCap="round";for(let c=0;c<this.snowflakes.length;c++){let _=this.snowflakes[c],g=Math.sin(r*_.swaySpeed+_.swayPhase)*2;if(_.y+=_.speedY*s,_.x+=(_.speedX+g)*s,_.rotation+=_.rotationSpeed*s,_.y>i+20)_.y=-20-Math.random()*50,_.x=Math.random()*o;if(_.x<-10)_.x=o+10;else if(_.x>o+10)_.x=-10;this.drawSnowflake(_.x,_.y,_.size,_.alpha,_.rotation)}}drawSnowflake(o,i,a,n,l){this.ctx.save(),this.ctx.translate(o,i),this.ctx.rotate(l),this.ctx.strokeStyle=`rgba(255, 255, 255, ${n})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let s=0;s<6;s++){let r=Math.PI/3*s,c=Math.cos(r),_=Math.sin(r);this.ctx.moveTo(0,0),this.ctx.lineTo(_*a*2.5,c*a*2.5);let g=_*a*1.5+c*a*0.5,h=c*a*1.5-_*a*0.5,t=_*a*1.8+c*a*1.2,m=c*a*1.8-_*a*1.2;this.ctx.moveTo(g,h),this.ctx.lineTo(t,m);let b=_*a*1.5-c*a*0.5,S=c*a*1.5+_*a*0.5,Li=_*a*1.8-c*a*1.2,Ii=c*a*1.8+_*a*1.2;this.ctx.moveTo(b,S),this.ctx.lineTo(Li,Ii)}this.ctx.stroke(),this.ctx.restore()}}class $o extends M{draw(o,i,a,n){let l=Date.now()*0.001;this.drawClouds(l,i,a,0.7)}}class Qo extends M{draw(o,i,a,n){let l=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let s=0;s<3;s++){let r=a*(0.4+s*0.2),c=Math.sin(l+s)*20;this.ctx.beginPath(),this.ctx.moveTo(0,r);for(let _=0;_<=i;_+=5){let g=Math.sin((_/i+l)*Math.PI*4+s)*15;this.ctx.lineTo(_,r+g+c)}this.ctx.lineTo(i,a),this.ctx.lineTo(0,a),this.ctx.closePath(),this.ctx.fill()}}}class xo extends M{hailStones=[];draw(o,i,a,n){let l=Date.now()*0.001;this.drawClouds(l,i,a,1),this.drawHailStones(i,a)}drawHailStones(o,i){if(this.hailStones.length!==60){this.hailStones=[];for(let l=0;l<60;l++)this.hailStones.push({startX:Math.random()*o,startY:Math.random()*(i+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let n=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let l=0;l<this.hailStones.length;l++){let s=this.hailStones[l],r=(s.startY+n*s.speed)%(i+150);if(r>i+30)s.startY=-30-Math.random()*30,s.startX=Math.random()*o;let c=s.windOffset*(1+Math.sin(n*0.6+s.phase)*0.15),_=(s.startX+c+n*20%o)%o;if(_<-5)s.startX=o+5;else if(_>o+5)s.startX=-5;this.drawHailStone(_,r,s)}}drawHailStone(o,i,a){this.ctx.save(),this.ctx.globalAlpha=a.alpha,this.ctx.beginPath(),this.ctx.ellipse(o,i,a.size,a.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(o-a.size*0.3,i-a.size*0.3,a.size*0.3,a.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class Co extends M{rainyAnimation;constructor(o){super(o);this.rainyAnimation=new O(o)}draw(o,i,a,n,l=!0){let s=Date.now()*0.001;if(this.drawClouds(s,i,a,1),l)this.rainyAnimation.draw(o,i,a,n,!1);this.drawLightning(i,a,s)}drawLightning(o,i,a){let n=Math.sin(a*2.5)*Math.sin(a*5.3)*Math.sin(a*7.1),l=Math.max(0,n);if(l>0.4){let s=(l-0.4)/0.6,r=s*0.6,c=Math.min(r,Math.sin(s*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${c})`,this.ctx.fillRect(0,0,o,i)}}}class Po{canvas=null;ctx=null;animationFrame=null;animations={};resizeObserver=null;width=0;height=0;container=null;getDrawParams;handleVisibilityChange=()=>{if(document.hidden)this.stopAnimation();else this.startAnimation()};constructor(o){this.getDrawParams=o}setup(o){if(this.container=o,this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver(),document.addEventListener("visibilitychange",this.handleVisibilityChange)}destroy(){if(document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.stopAnimation(),this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;this.canvas=null,this.ctx=null,this.container=null}resize(){if(this.canvas&&this.ctx)this.resizeCanvas()}setupCanvas(){if(!this.container)return;let o=this.container.querySelector("canvas");if(o)o.remove();this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.resizeCanvas()}resizeCanvas(){if(!this.canvas||!this.container)return;let o=this.container.getBoundingClientRect();if(o.width===0||o.height===0)return;let i=window.devicePixelRatio||2;if(this.canvas.width=o.width*i,this.canvas.height=o.height*i,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(i,i);this.width=o.width,this.height=o.height,this.initializeAnimations()}setupResizeObserver(){if(!this.container)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(this.container)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new Wo(this.ctx),rainy:new O(this.ctx),snowy:new Bo(this.ctx),cloudy:new $o(this.ctx),foggy:new Qo(this.ctx),hail:new xo(this.ctx),thunderstorm:new Co(this.ctx)}}startAnimation(){if(this.animationFrame)return;let o=()=>{this.draw(),this.animationFrame=requestAnimationFrame(o)};o()}stopAnimation(){if(this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null}draw(){if(!this.ctx||!this.canvas)return;if(!this.width||!this.height){if(this.resizeCanvas(),!this.width||!this.height)return}let o=this.getDrawParams();if(!o)return;let{condition:i,timeOfDay:a}=o,n=this.width,l=this.height;switch(this.ctx.clearRect(0,0,n,l),i.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),n,l,a);break;case"clear-night":this.animations.sunny?.draw(Date.now(),n,l,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),n,l,a,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),n,l,a,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),n,l,a);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),n,l,a,!1),this.animations.snowy?.draw(Date.now(),n,l,a);break;case"hail":this.animations.hail?.draw(Date.now(),n,l,a);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),n,l,a);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),n,l,a,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),n,l,a,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),n,l,a);break}}}class To{hourlyForecast=[];dailyForecast=[];hourlySubscription=null;dailySubscription=null;onUpdate;constructor(o){this.onUpdate=o}getHourlyData(){return this.hourlyForecast}getDailyData(){return this.dailyForecast}async subscribe(o,i,a){if(!o||!i)return;this.unsubscribe();try{if(this.hourlySubscription=o.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.hourlyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:i}),a)this.dailySubscription=o.connection.subscribeMessage((n)=>{if(n.forecast&&n.forecast.length>0)this.dailyForecast=n.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:i})}catch{}}async unsubscribe(){if(this.hourlySubscription){try{(await this.hourlySubscription)()}catch{}this.hourlySubscription=null}if(this.dailySubscription){try{(await this.dailySubscription)()}catch{}this.dailySubscription=null}}getHourlyForecast(o,i){let a=Math.max(1,Math.floor(Number(o??e.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,a);if(!i?.forecast||i.forecast.length===0)return[];let n=new Date,l=new Date(n.getFullYear(),n.getMonth(),n.getDate()),s=new Date(l);return s.setDate(s.getDate()+1),i.forecast.filter((c)=>{if(!c.datetime)return!1;let _=new Date(c.datetime),g=new Date(_.getFullYear(),_.getMonth(),_.getDate());return g.getTime()===l.getTime()||g.getTime()===s.getTime()&&_.getHours()<=n.getHours()}).sort((c,_)=>new Date(c.datetime).getTime()-new Date(_.datetime).getTime()).slice(0,a)}getDailyForecast(o,i){let a=Math.max(1,Math.floor(Number(o??e.dailyForecastDays)));if(this.dailyForecast&&this.dailyForecast.length>0)return this.dailyForecast.slice(0,a);if(!i?.forecast||i.forecast.length===0)return[];let n=new Date,l=new Date(n.getFullYear(),n.getMonth(),n.getDate()),s=new Date(l);s.setDate(s.getDate()+a);let r=(_)=>{let g=_.getFullYear(),h=String(_.getMonth()+1).padStart(2,"0"),t=String(_.getDate()).padStart(2,"0");return`${g}-${h}-${t}`},c=new Map;return i.forecast.forEach((_)=>{if(!_.datetime)return;let g=new Date(_.datetime);if(Number.isNaN(g.getTime()))return;if(g<l||g>=s)return;let h=r(g),t=Math.abs(g.getHours()+g.getMinutes()/60-12),m=c.get(h);if(!m||t<m.hourScore)c.set(h,{item:_,itemDate:g,hourScore:t})}),Array.from(c.values()).sort((_,g)=>_.itemDate.getTime()-g.itemDate.getTime()).map((_)=>_.item).slice(0,a)}}class Go{holdTimer=null;lastTap=null;holdFired=!1;holdDelay=500;getHass;getConfig;fireEvent;constructor(o,i,a){this.getHass=o,this.getConfig=i,this.fireEvent=a}handleTap(o){if(o.target.closest(".forecast-item")||o.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.getConfig().tapAction),this.lastTap=null},300)}handlePointerDown(){this.holdTimer=window.setTimeout(()=>{this.handleHold(),this.holdFired=!0},this.holdDelay)}handlePointerUp(o){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)o.preventDefault(),o.stopPropagation(),this.holdFired=!1}handleHold(){this.handleAction(this.getConfig().holdAction)}handleDoubleTap(){this.handleAction(this.getConfig().doubleTapAction)}handleAction(o){let i=this.getHass(),a=this.getConfig();if(!o||!i)return;switch(o.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:o.entity||a.entity});break;case"toggle":i.callService("homeassistant","toggle",{entity_id:o.entity||a.entity});break;case"call-service":if(o.service){let[l,s]=o.service.split(".");i.callService(l,s,o.service_data||{})}break;case"navigate":if(o.navigation_path)window.history.pushState(null,"",o.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(o.url_path)window.open(o.url_path);break;case"none":default:break}}}function ja(o,i){if(!o||!i)return null;let a=o.states[i];return a?a.state:null}function jo(o,i){if(!o||!i)return{};let a=o.states[i];return a?a.attributes:{}}function Do(o,i,a,n){let l=ja(o,i),s=jo(o,i),r=s.condition||l||"sunny",c=null;if(a.templowAttribute&&s[a.templowAttribute]!=null)c=s[a.templowAttribute];else{for(let _ of Fi)if(s[_]!=null){c=s[_];break}if(c==null)c=(s.forecast&&s.forecast[0]?s.forecast[0].templow??null:null)||(s.forecast_hourly&&s.forecast_hourly[0]?s.forecast_hourly[0].native_templow??null:null)}return{condition:r,temperature:s.temperature!=null?s.temperature:null,apparentTemperature:s.apparent_temperature||null,humidity:s.humidity!=null?s.humidity:null,windSpeed:s.wind_speed!=null?s.wind_speed:null,windGust:s.wind_gust_speed||s.wind_gust||null,windBearing:s.wind_bearing!=null?s.wind_bearing:null,windDirection:s.wind_direction||null,pressure:s.pressure||null,forecast:s.forecast||s.forecast_hourly||n||[],friendlyName:s.friendly_name||d.t("weather"),templow:c}}class Pi extends F{constructor(){super(...arguments);this.format=null;this.currentTime=""}clockInterval=null;static styles=W`
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
  `;connectedCallback(){if(super.connectedCallback(),this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}disconnectedCallback(){if(super.disconnectedCallback(),this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updated(o){if(super.updated(o),o.has("format")){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;if(this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}}updateTime(){if(!this.format)return;this.currentTime=xi(new Date,this.format,d.t("am"),d.t("pm"))}render(){if(!this.format)return k``;return k`<div class="clock">${this.currentTime}</div>`}}f([w({type:String})],Pi.prototype,"format",void 0),f([_o()],Pi.prototype,"currentTime",void 0);customElements.define("weather-clock",Pi);var Da={wind:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},Ti=(o)=>y`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${o}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,Va={sunny:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:y`
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
  `,overcast:y`
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
  `,cloudy:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:y`
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
  `,rain:y`
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
  `,pouring:y`
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
  `,snowy:y`
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
  `,snow:y`
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
  `,foggy:y`
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
  `,fog:y`
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
  `,hail:y`
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
  `,"snowy-rainy":y`
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
  `,lightning:y`
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
  `,"lightning-rainy":y`
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
  `,windy:y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":y`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function E(o,...i){let a=Da[o];if(typeof a==="function")return a(...i);return a||""}function eo(o){if(!o)return"";return Va[o.toLowerCase()]||""}class Gi extends F{constructor(){super(...arguments);this.weather=null;this.sunData=null;this.config=null;this.entityAttributes=null}static styles=W`
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
  `;hasContent(){if(!this.weather||!this.config)return!1;return this.config.showHumidity&&this.weather.humidity!=null||this.config.showWind&&this.weather.windSpeed!=null||this.config.showSunriseSunset&&this.sunData?.hasSunData===!0}renderHumidity(){if(!this.config?.showHumidity||this.weather?.humidity==null)return k``;return k`
      <div class="info-item">
        <span class="info-icon">${E("humidity")}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `}renderSunrise(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunrise)return k``;return k`
      <div class="info-item">
        <span class="info-icon">${E("sunrise")}</span>
        <span>${No(this.sunData.sunrise,this.config.clockFormat,d.t("am"),d.t("pm"))}</span>
      </div>
    `}renderWind(){if(!this.config?.showWind||this.weather?.windSpeed==null)return k``;let o=this.entityAttributes||{},i=Jo(this.weather.windSpeed,o,this.config.windSpeedUnit),a=Qi(o,this.config.windSpeedUnit,d.t.bind(d)),n="";if(this.config.showWindGust&&this.weather.windGust)n=` / ${Jo(this.weather.windGust,o,this.config.windSpeedUnit)} ${a}`;let l=this.config.showWindDirection&&this.weather.windBearing!=null?Ti(this.weather.windBearing):E("wind");return k`
      <div class="info-item">
        <span class="info-icon">${l}</span>
        <span>${i} ${a}${n}</span>
      </div>
    `}renderSunset(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunset)return k``;return k`
      <div class="info-item">
        <span class="info-icon">${E("sunset")}</span>
        <span>${No(this.sunData.sunset,this.config.clockFormat,d.t("am"),d.t("pm"))}</span>
      </div>
    `}render(){if(!this.hasContent())return k``;return k`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderSunrise()}
        ${this.renderWind()}
        ${this.renderSunset()}
      </div>
    `}}f([w({type:Object})],Gi.prototype,"weather",void 0),f([w({type:Object})],Gi.prototype,"sunData",void 0),f([w({type:Object})],Gi.prototype,"config",void 0),f([w({type:Object})],Gi.prototype,"entityAttributes",void 0);customElements.define("weather-details",Gi);var uo=W`
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

  .forecast-unavailable {
    opacity: 0.6;
    font-size: 14px;
  }
`;class ji extends F{constructor(){super(...arguments);this.forecast=[];this.clockFormat="24h"}static styles=uo;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=go(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(o){return Math.round(o.temperature??o.temp??o.native_temperature??0)}render(){if(this.forecast.length===0)return k``;return k`
      <div class="forecast-container">
        <div class="forecast-title">${d.t("forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((o)=>k`
            <div class="forecast-item">
              <div class="forecast-time">${Bi(o.datetime,this.clockFormat,d.t("am"),d.t("pm"))}</div>
              <div class="forecast-icon">${eo(o.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(o)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}f([w({type:Array})],ji.prototype,"forecast",void 0),f([w({type:String})],ji.prototype,"clockFormat",void 0);customElements.define("hourly-forecast",ji);class Di extends F{constructor(){super(...arguments);this.forecast=[];this.lang="en"}static styles=uo;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=go(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(o){return Math.round(o.temperature??o.temp??o.native_temperature??0)}render(){if(this.forecast.length===0)return k``;return k`
      <div class="forecast-container">
        <div class="forecast-title">${d.t("daily_forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((o)=>k`
            <div class="forecast-item">
              <div class="forecast-time">${$i(o.datetime,this.lang)}</div>
              <div class="forecast-icon">${eo(o.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(o)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}f([w({type:Array})],Di.prototype,"forecast",void 0),f([w({type:String})],Di.prototype,"lang",void 0);customElements.define("daily-forecast",Di);class Vo extends F{animationManager;forecastService;actionHandler;subscribedEntity=null;subscribedShowDaily=!1;_testTimeOfDay;static get styles(){return Ci}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:e.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:e.dailyForecastDays}}constructor(){super();this.config={},this.animationManager=new Po(()=>this.getDrawParams()),this.forecastService=new To(()=>this.requestUpdate()),this.actionHandler=new Go(()=>this.hass,()=>this.config,(o,i)=>this.fireEvent(o,i))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{let o=this.shadowRoot?.querySelector(".canvas-container");if(o)this.animationManager.setup(o)},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationManager.destroy(),this.forecastService.unsubscribe()}updated(o){if(super.updated(o),o.has("hass")||o.has("config")){let a=this.config.entity,n=this.config.showDailyForecast??!1;if(this.hass&&a&&(a!==this.subscribedEntity||n!==this.subscribedShowDaily))this.subscribedEntity=a,this.subscribedShowDaily=n,this.forecastService.subscribe(this.hass,a,n)}let i=I({configLang:this.config?.language,hassLang:this.hass?.language});if(d.lang!==i)d.setLanguage(i)}getDrawParams(){if(!this.hass||!this.config.entity)return null;let o=Do(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),i=this.hass.states[this.config.entity],a=So(i||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||qo(a);return{condition:o.condition,timeOfDay:n}}getDetailsConfig(){return{showHumidity:this.config.showHumidity??!0,showWind:this.config.showWind??!0,showWindGust:this.config.showWindGust??!0,showWindDirection:this.config.showWindDirection??!0,showSunriseSunset:this.config.showSunriseSunset??!0,clockFormat:this.config.clockFormat??"24h",windSpeedUnit:this.config.windSpeedUnit??"ms"}}setConfig(o){if(!o.entity)throw Error("Please define a weather entity");let i=o.show_hourly_forecast??o.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:o.entity,icons_path:o.icons_path,name:o.name,height:o.height||e.height,showFeelsLike:o.show_feels_like!==!1,showWind:o.show_wind!==!1,showWindGust:o.show_wind_gust!==!1,showWindDirection:o.show_wind_direction!==!1,showHumidity:o.show_humidity!==!1,showMinTemp:o.show_min_temp!==!1,showForecast:o.show_forecast===!0,showHourlyForecast:i===!0,showDailyForecast:o.show_daily_forecast===!0,hourlyForecastHours:o.hourly_forecast_hours??e.hourlyForecastHours,dailyForecastDays:o.daily_forecast_days??e.dailyForecastDays,showSunriseSunset:o.show_sunrise_sunset!==!1,showClock:o.show_clock===!0,clockPosition:o.clock_position||e.clockPosition,clockFormat:o.clock_format||e.clockFormat,overlayOpacity:o.overlay_opacity!==void 0?o.overlay_opacity:e.overlayOpacity,language:o.language||e.language,windSpeedUnit:o.wind_speed_unit||e.windSpeedUnit,sunriseEntity:o.sunrise_entity||null,sunsetEntity:o.sunset_entity||null,templowAttribute:o.templow_attribute||null,tapAction:o.tap_action||{action:"more-info"},holdAction:o.hold_action||{action:"none"},doubleTapAction:o.double_tap_action||{action:"none"}},this.config.language)d.setLanguage(this.config.language)}fireEvent(o,i={}){let a=new CustomEvent(o,{detail:i,bubbles:!0,composed:!0});this.dispatchEvent(a)}getCardSize(){return 1}render(){if(!this.hass)return k`<div>No Home Assistant connection</div>`;let o=Do(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),i=this.hass.states[this.config.entity],a=So(i,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),n=this._testTimeOfDay||qo(a),l=`weather-card ${n.type}`,s=this.config.height?`${this.config.height}px`:"200px",r=Wi(n),c=r?`background: linear-gradient(135deg, rgb(${r.start.r}, ${r.start.g}, ${r.start.b}), rgb(${r.end.r}, ${r.end.g}, ${r.end.b}));`:"",g=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:e.overlayOpacity};`,h=this.config.showHourlyForecast?this.forecastService.getHourlyForecast(this.config.hourlyForecastHours??e.hourlyForecastHours,o):[],t=this.config.showDailyForecast?this.forecastService.getDailyForecast(this.config.dailyForecastDays??e.dailyForecastDays,o):[];return k`
      <ha-card
        @click=${(m)=>this.actionHandler.handleTap(m)}
        @pointerdown=${()=>this.actionHandler.handlePointerDown()}
        @pointerup=${(m)=>this.actionHandler.handlePointerUp(m)}
        @pointercancel=${(m)=>this.actionHandler.handlePointerUp(m)}
      >
        <div class="${l}" style="min-height: ${s}; ${c}; ${g} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name&&this.config.name.trim()!==""?k`
              <div class="header">
                <div class="location">${this.config.name}</div>
              </div>
            `:""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${d.t(o.condition)}</div>
                <div class="temperature">${o.temperature!=null?Math.round(o.temperature)+"°":d.t("no_data")}</div>
                ${this.config.showMinTemp?k`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${o.templow!=null?`${Math.round(o.templow)}°`:d.t("no_data")}</span>
                  </div>
                `:""}
                ${this.config.showFeelsLike?k`
                  <div class="feels-like">${d.t("feels_like")} ${o.apparentTemperature!=null?`${Math.round(o.apparentTemperature)}°`:d.t("no_data")}</div>
                `:""}
              </div>
              <weather-clock
                .format=${this.config.showClock&&this.config.clockPosition==="top"?this.config.clockFormat:null}
              ></weather-clock>
            </div>
            <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
              <weather-details
                .weather=${o}
                .sunData=${a}
                .config=${this.getDetailsConfig()}
                .entityAttributes=${jo(this.hass,this.config.entity)}
              ></weather-details>
              <weather-clock
                .format=${this.config.showClock&&this.config.clockPosition==="details"?this.config.clockFormat:null}
              ></weather-clock>
            </div>
            <hourly-forecast
              .forecast=${h}
              .clockFormat=${this.config.clockFormat??"24h"}
            ></hourly-forecast>
            <daily-forecast
              .forecast=${t}
              .lang=${d.lang}
            ></daily-forecast>
          </div>
        </div>
      </ha-card>
    `}}f([w({type:Object})],Vo.prototype,"hass",void 0),f([w({type:Object})],Vo.prototype,"config",void 0);class Uo extends F{constructor(){super(...arguments);this._config={}}setConfig(o){this._config={name:"",height:e.height,show_feels_like:e.showFeelsLike,show_wind:e.showWind,show_wind_gust:e.showWindGust,show_wind_direction:e.showWindDirection,show_humidity:e.showHumidity,show_min_temp:e.showMinTemp,show_hourly_forecast:e.showHourlyForecast,hourly_forecast_hours:e.hourlyForecastHours,show_daily_forecast:e.showDailyForecast,daily_forecast_days:e.dailyForecastDays,show_sunrise_sunset:e.showSunriseSunset,show_clock:e.showClock,clock_position:e.clockPosition,clock_format:e.clockFormat,overlay_opacity:e.overlayOpacity,language:e.language,wind_speed_unit:e.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...o}}updated(o){if(super.updated(o),o.has("hass")){let i=I({hassLang:this.hass?.language});if(d.lang!==i)d.setLanguage(i),this.requestUpdate()}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"height",selector:{number:{min:200,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"show_clock",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:d.t("editor.clock_position_top"),value:"top"},{label:d.t("editor.clock_position_details"),value:"details"}]}}},{name:"clock_format",selector:{select:{options:[{label:d.t("editor.clock_format_24h"),value:"24h"},{label:d.t("editor.clock_format_12h"),value:"12h"}]}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"language",selector:{select:{options:[{label:d.t("editor.language_auto"),value:"auto"},{label:d.t("editor.language_en"),value:"en"},{label:d.t("editor.language_ru"),value:"ru"},{label:d.t("editor.language_de"),value:"de"},{label:d.t("editor.language_nl"),value:"nl"},{label:d.t("editor.language_fr"),value:"fr"},{label:d.t("editor.language_es"),value:"es"},{label:d.t("editor.language_it"),value:"it"},{label:d.t("editor.language_sk"),value:"sk"},{label:d.t("editor.language_hu"),value:"hu"}]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:d.t("editor.wind_speed_unit_ms"),value:"ms"},{label:d.t("editor.wind_speed_unit_kmh"),value:"kmh"}]}}}]}_computeLabel=(o)=>{let i=`editor.${o.name}`,a=d.t(i);return a===i?o.name:a};_valueChanged(o){let i=o.detail?.value;if(!i)return;this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return k``;return k`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}f([w({attribute:!1})],Uo.prototype,"hass",void 0),f([_o()],Uo.prototype,"_config",void 0);var Vi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ui=(o)=>(...i)=>({["_$litDirective$"]:o,values:i});class Ro{constructor(o){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(o,i,a){this.__part=o,this._$parent=i,this.__attributeIndex=a}_$resolve(o,i){return this.update(o,i)}update(o,i){return this.render(...i)}}var Ua=!0,cr=Ua&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(o)=>o;var Ri=(o)=>o.strings===void 0;var Ra=!0,oo=(o,i)=>{let a=o._$disconnectableChildren;if(a===void 0)return!1;for(let n of a)n._$notifyDirectiveConnectionChanged?.(i,!1),oo(n,i);return!0},ko=(o)=>{let i,a;do{if((i=o._$parent)===void 0)break;a=i._$disconnectableChildren,a.delete(o),o=i}while(a?.size===0)},Xi=(o)=>{for(let i;i=o._$parent;o=i){let a=i._$disconnectableChildren;if(a===void 0)i._$disconnectableChildren=a=new Set;else if(a.has(o))break;a.add(o),La(i)}};function Xa(o){if(this._$disconnectableChildren!==void 0)ko(this),this._$parent=o,Xi(this);else this._$parent=o}function Ya(o,i=!1,a=0){let n=this._$committedValue,l=this._$disconnectableChildren;if(l===void 0||l.size===0)return;if(i){if(Array.isArray(n))for(let s=a;s<n.length;s++)oo(n[s],!1),ko(n[s]);else if(n!=null)oo(n,!1),ko(n)}else oo(this,o)}var La=(o)=>{if(o.type==Vi.CHILD)o._$notifyConnectionChanged??=Ya,o._$reparentDisconnectables??=Xa};class Xo extends Ro{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(o,i,a){super._$initialize(o,i,a),Xi(this),this.isConnected=o._$isConnected}["_$notifyDirectiveConnectionChanged"](o,i=!0){if(o!==this.isConnected)if(this.isConnected=o,o)this.reconnected?.();else this.disconnected?.();if(i)oo(this,o),ko(this)}setValue(o){if(Ri(this.__part))this.__part._$setValue(o,this);else{if(Ra&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let i=[...this.__part._$committedValue];i[this.__attributeIndex]=o,this.__part._$setValue(i,this,0)}}disconnected(){}reconnected(){}}class Yi extends Xo{_key="";_onLangChange=null;render(o){return this._key=o,d.t(o)}reconnected(){this._onLangChange=()=>{this.setValue(d.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var Ia=Ui(Yi);try{customElements.define("dynamic-weather-card",Vo),customElements.define("dynamic-weather-card-editor",Uo),console.log(`%cDynamic Weather Card %c${bi}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let o={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(o)}catch(o){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",o)}export{Ia as t,I as resolveLanguage,d as i18n};
