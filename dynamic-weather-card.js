var M=function(o,i,c,l){var n=arguments.length,_=n<3?i:l===null?l=Object.getOwnPropertyDescriptor(i,c):l,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")_=Reflect.decorate(o,i,c,l);else for(var d=o.length-1;d>=0;d--)if(r=o[d])_=(n<3?r(_):n>3?r(i,c,_):r(i,c))||_;return n>3&&_&&Object.defineProperty(i,c,_),_};var io=globalThis,uo=io.ShadowRoot&&(io.ShadyCSS===void 0||io.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yo=Symbol(),Io=new WeakMap;class Fo{constructor(o,i,c){if(this._$cssResult$=!0,c!==yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this._strings=i}get styleSheet(){let o=this._styleSheet,i=this._strings;if(uo&&o===void 0){let c=i!==void 0&&i.length===1;if(c)o=Io.get(i);if(o===void 0){if((this._styleSheet=o=new CSSStyleSheet).replaceSync(this.cssText),c)Io.set(i,o)}}return o}toString(){return this.cssText}}var Oi=(o)=>{if(o._$cssResult$===!0)return o.cssText;else if(typeof o==="number")return o;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${o}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},ei=(o)=>new Fo(typeof o==="string"?o:String(o),void 0,yo),G=(o,...i)=>{let c=o.length===1?o[0]:i.reduce((l,n,_)=>l+Oi(n)+o[_+1],o[0]);return new Fo(c,o,yo)},Oo=(o,i)=>{if(uo)o.adoptedStyleSheets=i.map((c)=>c instanceof CSSStyleSheet?c:c.styleSheet);else for(let c of i){let l=document.createElement("style"),n=io.litNonce;if(n!==void 0)l.setAttribute("nonce",n);l.textContent=c.cssText,o.appendChild(l)}},Ei=(o)=>{let i="";for(let c of o.cssRules)i+=c.cssText;return ei(i)},Mo=uo?(o)=>o:(o)=>o instanceof CSSStyleSheet?Ei(o):o;var{is:ti,defineProperty:oc,getOwnPropertyDescriptor:eo,getOwnPropertyNames:ic,getOwnPropertySymbols:cc,getPrototypeOf:Eo}=Object,lc=!1,q=globalThis;if(lc)q.customElements??=customElements;var W=!0,B,to=q.trustedTypes,nc=to?to.emptyScript:"",ii=W?q.reactiveElementPolyfillSupportDevMode:q.reactiveElementPolyfillSupport;if(W)q.litIssuedWarnings??=new Set,B=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!q.litIssuedWarnings.has(i)&&!q.litIssuedWarnings.has(o))console.warn(i),q.litIssuedWarnings.add(i)},queueMicrotask(()=>{if(B("dev-mode","Lit is in dev mode. Not recommended for production!"),q.ShadyDOM?.inUse&&ii===void 0)B("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var _c=W?(o)=>{if(!q.emitLitDebugLogEvents)return;q.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))}:void 0,j=(o,i)=>o,X={toAttribute(o,i){switch(i){case Boolean:o=o?nc:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o);break}return o},fromAttribute(o,i){let c=o;switch(i){case Boolean:c=o!==null;break;case Number:c=o===null?null:Number(o);break;case Object:case Array:try{c=JSON.parse(o)}catch(l){c=null}break}return c}},co=(o,i)=>!ti(o,i),oi={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:co};Symbol.metadata??=Symbol("metadata");q.litPropertyMetadata??=new WeakMap;class m extends HTMLElement{static addInitializer(o){this.__prepare(),(this._initializers??=[]).push(o)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(o,i=oi){if(i.state)i.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(o))i=Object.create(i),i.wrapped=!0;if(this.elementProperties.set(o,i),!i.noAccessor){let c=W?Symbol.for(`${String(o)} (@property() cache)`):Symbol(),l=this.getPropertyDescriptor(o,c,i);if(l!==void 0)oc(this.prototype,o,l)}}static getPropertyDescriptor(o,i,c){let{get:l,set:n}=eo(this.prototype,o)??{get(){return this[i]},set(_){this[i]=_}};if(W&&l==null){if("value"in(eo(this.prototype,o)??{}))throw Error(`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);B("reactive-property-without-getter",`Field ${JSON.stringify(String(o))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:l,set(_){let r=l?.call(this);n?.call(this,_),this.requestUpdate(o,r,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??oi}static __prepare(){if(this.hasOwnProperty(j("elementProperties",this)))return;let o=Eo(this);if(o.finalize(),o._initializers!==void 0)this._initializers=[...o._initializers];this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(j("properties",this))){let i=this.properties,c=[...ic(i),...cc(i)];for(let l of c)this.createProperty(l,i[l])}let o=this[Symbol.metadata];if(o!==null){let i=litPropertyMetadata.get(o);if(i!==void 0)for(let[c,l]of i)this.elementProperties.set(c,l)}this.__attributeToPropertyMap=new Map;for(let[i,c]of this.elementProperties){let l=this.__attributeNameForProperty(i,c);if(l!==void 0)this.__attributeToPropertyMap.set(l,i)}if(this.elementStyles=this.finalizeStyles(this.styles),W){if(this.hasOwnProperty("createProperty"))B("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))B("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(o){let i=[];if(Array.isArray(o)){let c=new Set(o.flat(1/0).reverse());for(let l of c)i.unshift(Mo(l))}else if(o!==void 0)i.push(Mo(o));return i}static __attributeNameForProperty(o,i){let c=i.attribute;return c===!1?void 0:typeof c==="string"?c:typeof o==="string"?o.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((o)=>this.enableUpdating=o),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((o)=>o(this))}addController(o){if((this.__controllers??=new Set).add(o),this.renderRoot!==void 0&&this.isConnected)o.hostConnected?.()}removeController(o){this.__controllers?.delete(o)}__saveInstanceProperties(){let o=new Map,i=this.constructor.elementProperties;for(let c of i.keys())if(this.hasOwnProperty(c))o.set(c,this[c]),delete this[c];if(o.size>0)this.__instanceProperties=o}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oo(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((o)=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this.__controllers?.forEach((o)=>o.hostDisconnected?.())}attributeChangedCallback(o,i,c){this._$attributeToProperty(o,c)}__propertyToAttribute(o,i){let l=this.constructor.elementProperties.get(o),n=this.constructor.__attributeNameForProperty(o,l);if(n!==void 0&&l.reflect===!0){let r=(l.converter?.toAttribute!==void 0?l.converter:X).toAttribute(i,l.type);if(W&&this.constructor.enabledWarnings.includes("migration")&&r===void 0)B("undefined-attribute-value",`The attribute value for the ${o} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=o,r==null)this.removeAttribute(n);else this.setAttribute(n,r);this.__reflectingProperty=null}}_$attributeToProperty(o,i){let c=this.constructor,l=c.__attributeToPropertyMap.get(o);if(l!==void 0&&this.__reflectingProperty!==l){let n=c.getPropertyOptions(l),_=typeof n.converter==="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:X;this.__reflectingProperty=l;let r=_.fromAttribute(i,n.type);this[l]=r??this.__defaultValues?.get(l)??r,this.__reflectingProperty=null}}requestUpdate(o,i,c,l=!1,n){if(o!==void 0){if(W&&o instanceof Event)B("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let _=this.constructor;if(l===!1)n=this[o];if(c??=_.getPropertyOptions(o),(c.hasChanged??co)(n,i)||c.useDefault&&c.reflect&&n===this.__defaultValues?.get(o)&&!this.hasAttribute(_.__attributeNameForProperty(o,c)))this._$changeProperty(o,i,c);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(o,i,{useDefault:c,reflect:l,wrapped:n},_){if(c&&!(this.__defaultValues??=new Map).has(o)){if(this.__defaultValues.set(o,_??i??this[o]),n!==!0||_!==void 0)return}if(!this._$changedProperties.has(o)){if(!this.hasUpdated&&!c)i=void 0;this._$changedProperties.set(o,i)}if(l===!0&&this.__reflectingProperty!==o)(this.__reflectingProperties??=new Set).add(o)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(i){Promise.reject(i)}let o=this.scheduleUpdate();if(o!=null)await o;return!this.isUpdatePending}scheduleUpdate(){let o=this.performUpdate();if(W&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof o?.then==="function")B("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return o}performUpdate(){if(!this.isUpdatePending)return;if(_c?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),W){let n=[...this.constructor.elementProperties.keys()].filter((_)=>this.hasOwnProperty(_)&&(_ in Eo(this)));if(n.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${n.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[l,n]of this.__instanceProperties)this[l]=n;this.__instanceProperties=void 0}let c=this.constructor.elementProperties;if(c.size>0)for(let[l,n]of c){let{wrapped:_}=n,r=this[l];if(_===!0&&!this._$changedProperties.has(l)&&r!==void 0)this._$changeProperty(l,void 0,n,r)}}let o=!1,i=this._$changedProperties;try{if(o=this.shouldUpdate(i),o)this.willUpdate(i),this.__controllers?.forEach((c)=>c.hostUpdate?.()),this.update(i);else this.__markUpdated()}catch(c){throw o=!1,this.__markUpdated(),c}if(o)this._$didUpdate(i)}willUpdate(o){}_$didUpdate(o){if(this.__controllers?.forEach((i)=>i.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(o);if(this.updated(o),W&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))B("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(o){return!0}update(o){this.__reflectingProperties&&=this.__reflectingProperties.forEach((i)=>this.__propertyToAttribute(i,this[i])),this.__markUpdated()}updated(o){}firstUpdated(o){}}m.elementStyles=[];m.shadowRootOptions={mode:"open"};m[j("elementProperties",m)]=new Map;m[j("finalized",m)]=new Map;ii?.({ReactiveElement:m});if(W){m.enabledWarnings=["change-in-update","async-perform-update"];let o=function(i){if(!i.hasOwnProperty(j("enabledWarnings",i)))i.enabledWarnings=i.enabledWarnings.slice()};m.enableWarning=function(i){if(o(this),!this.enabledWarnings.includes(i))this.enabledWarnings.push(i)},m.disableWarning=function(i){o(this);let c=this.enabledWarnings.indexOf(i);if(c>=0)this.enabledWarnings.splice(c,1)}}(q.reactiveElementVersions??=[]).push("2.1.2");if(W&&q.reactiveElementVersions.length>1)queueMicrotask(()=>{B("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var $=globalThis,f=(o)=>{if(!$.emitLitDebugLogEvents)return;$.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))},rc=0,R;$.litIssuedWarnings??=new Set,R=(o,i)=>{if(i+=o?` See https://lit.dev/msg/${o} for more information.`:"",!$.litIssuedWarnings.has(i)&&!$.litIssuedWarnings.has(o))console.warn(i),$.litIssuedWarnings.add(i)},queueMicrotask(()=>{R("dev-mode","Lit is in dev mode. Not recommended for production!")});var J=$.ShadyDOM?.inUse&&$.ShadyDOM?.noPatch===!0?$.ShadyDOM.wrap:(o)=>o,lo=$.trustedTypes,ci=lo?lo.createPolicy("lit-html",{createHTML:(o)=>o}):void 0,dc=(o)=>o,ao=(o,i,c)=>dc,ac=(o)=>{if(P!==ao)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");P=o},hc=()=>{P=ao},Ho=(o,i,c)=>{return P(o,i,c)},hi="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,si="?"+x,sc=`<${si}>`,z=document,D=()=>z.createComment(""),L=(o)=>o===null||typeof o!="object"&&typeof o!="function",qo=Array.isArray,gc=(o)=>qo(o)||typeof o?.[Symbol.iterator]==="function",bo=`[ 	
\f\r]`,kc=`[^ 	
\f\r"'\`<>=]`,fc=`[^\\s"'>=/]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,li=1,Ko=2,wc=3,ni=/-->/g,_i=/>/g,C=new RegExp(`>|${bo}(?:(${fc}+)(${bo}*=${bo}*(?:${kc}|("|')|))|$)`,"g"),uc=0,ri=1,yc=2,di=3,Ao=/'/g,Zo=/"/g,gi=/^(?:script|style|textarea|title)$/i,Fc=1,no=2,_o=3,Wo=1,ro=2,Mc=3,bc=4,Kc=5,mo=6,Ac=7,$o=(o)=>(i,...c)=>{if(i.some((l)=>l===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(c.some((l)=>l?._$litStatic$))R("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:o,strings:i,values:c}},w=$o(Fc),u=$o(no),tc=$o(_o),T=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ai=new WeakMap,S=z.createTreeWalker(z,129),P=ao;function ki(o,i){if(!qo(o)||!o.hasOwnProperty("raw")){let c="invalid template strings array";throw c=`
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
`),Error(c)}return ci!==void 0?ci.createHTML(i):i}var Zc=(o,i)=>{let c=o.length-1,l=[],n=i===no?"<svg>":i===_o?"<math>":"",_,r=Y;for(let a=0;a<c;a++){let g=o[a],s=-1,y,F=0,A;while(F<g.length){if(r.lastIndex=F,A=r.exec(g),A===null)break;if(F=r.lastIndex,r===Y){if(A[li]==="!--")r=ni;else if(A[li]!==void 0)r=_i;else if(A[Ko]!==void 0){if(gi.test(A[Ko]))_=new RegExp(`</${A[Ko]}`,"g");r=C}else if(A[wc]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(r===C)if(A[uc]===">")r=_??Y,s=-1;else if(A[ri]===void 0)s=-2;else s=r.lastIndex-A[yc].length,y=A[ri],r=A[di]===void 0?C:A[di]==='"'?Zo:Ao;else if(r===Zo||r===Ao)r=C;else if(r===ni||r===_i)r=Y;else r=C,_=void 0}console.assert(s===-1||r===C||r===Ao||r===Zo,"unexpected parse state B");let N=r===C&&o[a+1].startsWith("/>")?" ":"";n+=r===Y?g+sc:s>=0?(l.push(y),g.slice(0,s)+hi+g.slice(s))+x+N:g+x+(s===-2?a:N)}let d=n+(o[c]||"<?>")+(i===no?"</svg>":i===_o?"</math>":"");return[ki(o,d),l]};class v{constructor({strings:o,["_$litType$"]:i},c){this.parts=[];let l,n=0,_=0,r=o.length-1,d=this.parts,[a,g]=Zc(o,i);if(this.el=v.createElement(a,c),S.currentNode=this.el.content,i===no||i===_o){let s=this.el.content.firstChild;s.replaceWith(...s.childNodes)}while((l=S.nextNode())!==null&&d.length<r){if(l.nodeType===1){{let s=l.localName;if(/^(?:textarea|template)$/i.test(s)&&l.innerHTML.includes(x)){let y=`Expressions are not supported inside \`${s}\` elements. See https://lit.dev/msg/expression-in-${s} for more information.`;if(s==="template")throw Error(y);else R("",y)}}if(l.hasAttributes()){for(let s of l.getAttributeNames())if(s.endsWith(hi)){let y=g[_++],A=l.getAttribute(s).split(x),N=/([.?@])?(.*)/.exec(y);d.push({type:Wo,index:n,name:N[2],strings:A,ctor:N[1]==="."?wi:N[1]==="?"?ui:N[1]==="@"?yi:O}),l.removeAttribute(s)}else if(s.startsWith(x))d.push({type:mo,index:n}),l.removeAttribute(s)}if(gi.test(l.tagName)){let s=l.textContent.split(x),y=s.length-1;if(y>0){l.textContent=lo?lo.emptyScript:"";for(let F=0;F<y;F++)l.append(s[F],D()),S.nextNode(),d.push({type:ro,index:++n});l.append(s[y],D())}}}else if(l.nodeType===8)if(l.data===si)d.push({type:ro,index:n});else{let y=-1;while((y=l.data.indexOf(x,y+1))!==-1)d.push({type:Ac,index:n}),y+=x.length-1}n++}if(g.length!==_)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+o.join("${...}")+"`");f&&f({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:o})}static createElement(o,i){let c=z.createElement("template");return c.innerHTML=o,c}}function V(o,i,c=o,l){if(i===T)return i;let n=l!==void 0?c.__directives?.[l]:c.__directive,_=L(i)?void 0:i._$litDirective$;if(n?.constructor!==_){if(n?._$notifyDirectiveConnectionChanged?.(!1),_===void 0)n=void 0;else n=new _(o),n._$initialize(o,c,l);if(l!==void 0)(c.__directives??=[])[l]=n;else c.__directive=n}if(n!==void 0)i=V(o,n._$resolve(o,i.values),n,l);return i}class fi{constructor(o,i){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=o,this._$parent=i}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(o){let{el:{content:i},parts:c}=this._$template,l=(o?.creationScope??z).importNode(i,!0);S.currentNode=l;let n=S.nextNode(),_=0,r=0,d=c[0];while(d!==void 0){if(_===d.index){let a;if(d.type===ro)a=new I(n,n.nextSibling,this,o);else if(d.type===Wo)a=new d.ctor(n,d.name,d.strings,this,o);else if(d.type===mo)a=new Fi(n,this,o);this._$parts.push(a),d=c[++r]}if(_!==d?.index)n=S.nextNode(),_++}return S.currentNode=z,l}_update(o){let i=0;for(let c of this._$parts){if(c!==void 0)if(f&&f({kind:"set part",part:c,value:o[i],valueIndex:i,values:o,templateInstance:this}),c.strings!==void 0)c._$setValue(o,c,i),i+=c.strings.length-2;else c._$setValue(o[i]);i++}}}class I{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(o,i,c,l){this.type=ro,this._$committedValue=b,this._$disconnectableChildren=void 0,this._$startNode=o,this._$endNode=i,this._$parent=c,this.options=l,this.__isConnected=l?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let o=J(this._$startNode).parentNode,i=this._$parent;if(i!==void 0&&o?.nodeType===11)o=i.parentNode;return o}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(o,i=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(o=V(this,o,i),L(o)){if(o===b||o==null||o===""){if(this._$committedValue!==b)f&&f({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=b}else if(o!==this._$committedValue&&o!==T)this._commitText(o)}else if(o._$litType$!==void 0)this._commitTemplateResult(o);else if(o.nodeType!==void 0){if(this.options?.host===o){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",o,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(o)}else if(gc(o))this._commitIterable(o);else this._commitText(o)}_insert(o){return J(J(this._$startNode).parentNode).insertBefore(o,this._$endNode)}_commitNode(o){if(this._$committedValue!==o){if(this._$clear(),P!==ao){let i=this._$startNode.parentNode?.nodeName;if(i==="STYLE"||i==="SCRIPT"){let c="Forbidden";if(i==="STYLE")c="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else c="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(c)}}f&&f({kind:"commit node",start:this._$startNode,parent:this._$parent,value:o,options:this.options}),this._$committedValue=this._insert(o)}}_commitText(o){if(this._$committedValue!==b&&L(this._$committedValue)){let i=J(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Ho(i,"data","property");o=this._textSanitizer(o),f&&f({kind:"commit text",node:i,value:o,options:this.options}),i.data=o}else{let i=z.createTextNode("");if(this._commitNode(i),this._textSanitizer===void 0)this._textSanitizer=Ho(i,"data","property");o=this._textSanitizer(o),f&&f({kind:"commit text",node:i,value:o,options:this.options}),i.data=o}this._$committedValue=o}_commitTemplateResult(o){let{values:i,["_$litType$"]:c}=o,l=typeof c==="number"?this._$getTemplate(o):(c.el===void 0&&(c.el=v.createElement(ki(c.h,c.h[0]),this.options)),c);if(this._$committedValue?._$template===l)f&&f({kind:"template updating",template:l,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:i}),this._$committedValue._update(i);else{let n=new fi(l,this),_=n._clone(this.options);f&&f({kind:"template instantiated",template:l,instance:n,parts:n._$parts,options:this.options,fragment:_,values:i}),n._update(i),f&&f({kind:"template instantiated and updated",template:l,instance:n,parts:n._$parts,options:this.options,fragment:_,values:i}),this._commitNode(_),this._$committedValue=n}}_$getTemplate(o){let i=ai.get(o.strings);if(i===void 0)ai.set(o.strings,i=new v(o));return i}_commitIterable(o){if(!qo(this._$committedValue))this._$committedValue=[],this._$clear();let i=this._$committedValue,c=0,l;for(let n of o){if(c===i.length)i.push(l=new I(this._insert(D()),this._insert(D()),this,this.options));else l=i[c];l._$setValue(n),c++}if(c<i.length)this._$clear(l&&J(l._$endNode).nextSibling,c),i.length=c}_$clear(o=J(this._$startNode).nextSibling,i){this._$notifyConnectionChanged?.(!1,!0,i);while(o!==this._$endNode){let c=J(o).nextSibling;J(o).remove(),o=c}}setConnected(o){if(this._$parent===void 0)this.__isConnected=o,this._$notifyConnectionChanged?.(o);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class O{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(o,i,c,l,n){if(this.type=Wo,this._$committedValue=b,this._$disconnectableChildren=void 0,this.element=o,this.name=i,this._$parent=l,this.options=n,c.length>2||c[0]!==""||c[1]!=="")this._$committedValue=Array(c.length-1).fill(new String),this.strings=c;else this._$committedValue=b;this._sanitizer=void 0}_$setValue(o,i=this,c,l){let n=this.strings,_=!1;if(n===void 0){if(o=V(this,o,i,0),_=!L(o)||o!==this._$committedValue&&o!==T,_)this._$committedValue=o}else{let r=o;o=n[0];let d,a;for(d=0;d<n.length-1;d++){if(a=V(this,r[c+d],i,d),a===T)a=this._$committedValue[d];if(_||=!L(a)||a!==this._$committedValue[d],a===b)o=b;else if(o!==b)o+=(a??"")+n[d+1];this._$committedValue[d]=a}}if(_&&!l)this._commitValue(o)}_commitValue(o){if(o===b)J(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=P(this.element,this.name,"attribute");o=this._sanitizer(o??""),f&&f({kind:"commit attribute",element:this.element,name:this.name,value:o,options:this.options}),J(this.element).setAttribute(this.name,o??"")}}}class wi extends O{constructor(){super(...arguments);this.type=Mc}_commitValue(o){if(this._sanitizer===void 0)this._sanitizer=P(this.element,this.name,"property");o=this._sanitizer(o),f&&f({kind:"commit property",element:this.element,name:this.name,value:o,options:this.options}),this.element[this.name]=o===b?void 0:o}}class ui extends O{constructor(){super(...arguments);this.type=bc}_commitValue(o){f&&f({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(o&&o!==b),options:this.options}),J(this.element).toggleAttribute(this.name,!!o&&o!==b)}}class yi extends O{constructor(o,i,c,l,n){super(o,i,c,l,n);if(this.type=Kc,this.strings!==void 0)throw Error(`A \`<${o.localName}>\` has a \`@${i}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(o,i=this){if(o=V(this,o,i,0)??b,o===T)return;let c=this._$committedValue,l=o===b&&c!==b||o.capture!==c.capture||o.once!==c.once||o.passive!==c.passive,n=o!==b&&(c===b||l);if(f&&f({kind:"commit event listener",element:this.element,name:this.name,value:o,options:this.options,removeListener:l,addListener:n,oldListener:c}),l)this.element.removeEventListener(this.name,this,c);if(n)this.element.addEventListener(this.name,this,o);this._$committedValue=o}handleEvent(o){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,o);else this._$committedValue.handleEvent(o)}}class Fi{constructor(o,i,c){this.element=o,this.type=mo,this._$disconnectableChildren=void 0,this._$parent=i,this.options=c}get _$isConnected(){return this._$parent._$isConnected}_$setValue(o){f&&f({kind:"commit to element binding",element:this.element,value:o,options:this.options}),V(this,o)}}var Hc=$.litHtmlPolyfillSupportDevMode;Hc?.(v,I);($.litHtmlVersions??=[]).push("3.3.2");if($.litHtmlVersions.length>1)queueMicrotask(()=>{R("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var U=(o,i,c)=>{if(i==null)throw TypeError(`The container to render into may not be ${i}`);let l=rc++,n=c?.renderBefore??i,_=n._$litPart$;if(f&&f({kind:"begin render",id:l,value:o,container:i,options:c,part:_}),_===void 0){let r=c?.renderBefore??null;n._$litPart$=_=new I(i.insertBefore(D(),r),r,void 0,c??{})}return _._$setValue(o),f&&f({kind:"end render",id:l,value:o,container:i,options:c,part:_}),_};U.setSanitizer=ac,U.createSanitizer=Ho,U._testOnlyClearSanitizerFactoryDoNotCallOrElse=hc;var qc=(o,i)=>o,Bo=!0,p=globalThis,Mi;if(Bo)p.litIssuedWarnings??=new Set,Mi=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!p.litIssuedWarnings.has(i)&&!p.litIssuedWarnings.has(o))console.warn(i),p.litIssuedWarnings.add(i)};class Z extends m{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let o=super.createRenderRoot();return this.renderOptions.renderBefore??=o.firstChild,o}update(o){let i=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(o),this.__childPart=U(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return T}}Z._$litElement$=!0;Z[qc("finalized",Z)]=!0;p.litElementHydrateSupport?.({LitElement:Z});var Wc=Bo?p.litElementPolyfillSupportDevMode:p.litElementPolyfillSupport;Wc?.({LitElement:Z});(p.litElementVersions??=[]).push("4.2.2");if(Bo&&p.litElementVersions.length>1)queueMicrotask(()=>{Mi("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var bi=!0,Ki;if(bi)globalThis.litIssuedWarnings??=new Set,Ki=(o,i)=>{if(i+=` See https://lit.dev/msg/${o} for more information.`,!globalThis.litIssuedWarnings.has(i)&&!globalThis.litIssuedWarnings.has(o))console.warn(i),globalThis.litIssuedWarnings.add(i)};var mc=(o,i,c)=>{let l=i.hasOwnProperty(c);return i.constructor.createProperty(c,o),l?Object.getOwnPropertyDescriptor(i,c):void 0},$c={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:co},Bc=(o=$c,i,c)=>{let{kind:l,metadata:n}=c;if(bi&&n==null)Ki("missing-class-metadata",`The class ${i} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let _=globalThis.litPropertyMetadata.get(n);if(_===void 0)globalThis.litPropertyMetadata.set(n,_=new Map);if(l==="setter")o=Object.create(o),o.wrapped=!0;if(_.set(c.name,o),l==="accessor"){let{name:r}=c;return{set(d){let a=i.get.call(this);i.set.call(this,d),this.requestUpdate(r,a,o,!0,d)},init(d){if(d!==void 0)this._$changeProperty(r,void 0,o,d);return d}}}else if(l==="setter"){let{name:r}=c;return function(d){let a=this[r];i.call(this,d),this.requestUpdate(r,a,o,!0,d)}}throw Error(`Unsupported decorator location: ${l}`)};function K(o){return(i,c)=>{return typeof c==="object"?Bc(o,i,c):mc(o,i,c)}}function ho(o){return K({...o,state:!0,attribute:!1})}var Jc=!0,Qc;if(Jc)globalThis.litIssuedWarnings??=new Set,Qc=(o,i)=>{if(i+=o?` See https://lit.dev/msg/${o} for more information.`:"",!globalThis.litIssuedWarnings.has(i)&&!globalThis.litIssuedWarnings.has(o))console.warn(i),globalThis.litIssuedWarnings.add(i)};var Ai="0.5.0",Q={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},Zi=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],k={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showHourlyForecast:!1,showDailyForecast:!1,hourlyForecastHours:5,dailyForecastDays:5,showSunriseSunset:!1,showClock:!1,clockPosition:"top",clockFormat:"24h",overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};var Nc={sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь",feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",daily_forecast_title:"Ежедневный прогноз",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",language:"Language",wind_unit_kmh:"км/ч",wind_unit_ms:"м/с",wind_unit_mph:"миль/ч",wind_unit_knots:"узлы",wind_unit_fts:"фут/с",show_clock:"Показывать часы",am:"ДП",pm:"ПП",editor:{entity:"Погодная сущность",name:"Название карточки",height:"Высота карточки",show_feels_like:"Показывать ощущаемую температуру",show_wind:"Показывать скорость ветра",show_wind_gust:"Показывать порывы ветра",show_wind_direction:"Показывать направление ветра",show_humidity:"Показывать влажность",show_min_temp:"Показывать минимальную температуру",show_hourly_forecast:"Показывать почасовой прогноз",hourly_forecast_hours:"Часы прогноза",show_daily_forecast:"Показывать дневной прогноз",daily_forecast_days:"Дни прогноза",show_sunrise_sunset:"Показывать восход/закат",sunrise_entity:"Сущность восхода",sunset_entity:"Сущность заката",show_clock:"Показывать часы",clock_position:"Позиция часов",clock_position_top:"Вверху",clock_position_details:"Детали",clock_format:"Формат времени",clock_format_12h:"12-часовой (AM/PM)",clock_format_24h:"24-часовой",overlay_opacity:"Прозрачность подложки",language:"Язык",language_auto:"Авто",language_en:"Английский",language_ru:"Русский",language_de:"Немецкий",language_nl:"Нидерландский",language_fr:"Французский",language_es:"Испанский",wind_speed_unit:"Единицы скорости ветра",wind_speed_unit_ms:"м/с",wind_speed_unit_kmh:"км/ч"},demo:{pageTitle:"Динамическая карточка погоды",pageSubtitle:"Интерактивная демонстрация и настройка",livePreview:"Предпросмотр",configuration:"Конфигурация",quickPresets:"Быстрые пресеты",sunnyDay:"Солнечный день",rainy:"Дождь",snowy:"Снег",clearNight:"Ясная ночь",weatherCondition:"Погодные условия",condition:"Состояние",temperature:"Температура",humidity:"Влажность (%)",windSpeed:"Скорость ветра",timeOfDay:"Время суток",timeMode:"Режим времени",autoTime:"Авто (текущее время)",manualControl:"Ручное управление",sunrise:"Восход",day:"День",sunset:"Закат",night:"Ночь",currentTime:"Текущее время",displayOptions:"Опции отображения",cardName:"Название карточки",height:"Высота (px)",feelsLike:"Ощущается как",minTemp:"Мин. температура",windDirection:"Направление ветра",windGust:"Порывы ветра",hourlyForecast:"Почасовой прогноз",dailyForecast:"Ежедневный прогноз",sunriseSunset:"Восход/Закат",showClock:"Часы",clockPosition:"Позиция часов",clockPositionTop:"Вверху справа",clockPositionDetails:"В строке деталей",clockFormat:"Формат часов",clockFormat12h:"12-часовой (AM/PM)",clockFormat24h:"24-часовой",overlayOpacity:"Прозрачность подложки (0-1)",windSpeedUnit:"Единицы скорости ветра",dailyForecastDays:"Дни прогноза",hourlyForecastHours:"Часы прогноза",updateCard:"Обновить карточку",startDemo:"Запустить демо",stopDemo:"Остановить демо",madeWith:"Сделано с любовью для Home Assistant",loading:"Загрузка карточки...",errorTitle:"Не удалось загрузить карточку",errorDetails:"Проверьте консоль браузера (F12) для деталей",errorServer:"Убедитесь, что файл открыт через локальный сервер (не file://)",placeholderEmpty:"Оставьте пустым, чтобы скрыть",weatherConditions:{sunny:"Солнечно",clear:"Ясно",clearNight:"Ясная ночь",partlyCloudy:"Переменная облачность",cloudy:"Облачно",rainy:"Дождь",pouring:"Ливень",snowy:"Снег",sleet:"Мокрый снег",hail:"Град",foggy:"Туман",lightning:"Гроза",thunderstorm:"Гроза с дождем"},language:{title:"Язык",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Hi=Nc;var xc={sunny:"Sonnig",clear:"Klar",overcast:"Bedeckt",cloudy:"Bewölkt",partlycloudy:"Teilweise bewölkt",rainy:"Regnerisch",rain:"Regen",snowy:"Schneefall",snow:"Schnee",foggy:"Nebelig",fog:"Nebel",lightning:"Blitz","lightning-rainy":"Gewitter",pouring:"Starkregen","snowy-rainy":"Schneeregen",hail:"Hagel","clear-night":"Klare Nacht",feels_like:"Gefühlt",forecast_title:"Heutige Vorhersage",daily_forecast_title:"Tagesvorhersage",no_data:"Keine Daten",forecast_unavailable:"Vorhersage nicht verfügbar",weather:"Wetter",language:"Sprache",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"Knoten",wind_unit_fts:"ft/s",show_clock:"Aktuelle Uhrzeit anzeigen",am:"AM",pm:"PM",editor:{entity:"Wetter-Entität",name:"Kartentitel",height:"Kartenhöhe",show_feels_like:"Gefühlte Temperatur anzeigen",show_wind:"Windgeschwindigkeit anzeigen",show_wind_gust:"Windböen anzeigen",show_wind_direction:"Windrichtung anzeigen",show_humidity:"Luftfeuchtigkeit anzeigen",show_min_temp:"Mindesttemperatur anzeigen",show_hourly_forecast:"Stundenprognose anzeigen",hourly_forecast_hours:"Stunden der Prognose",show_daily_forecast:"Tagesprognose anzeigen",daily_forecast_days:"Tage der Prognose",show_sunrise_sunset:"Sonnenaufgang/Sonnenuntergang anzeigen",sunrise_entity:"Sonnenaufgang-Entität",sunset_entity:"Sonnenuntergang-Entität",show_clock:"Uhr anzeigen",clock_position:"Uhrposition",clock_position_top:"Oben",clock_position_details:"Details",clock_format:"Zeitformat",clock_format_12h:"12-Stunden (AM/PM)",clock_format_24h:"24-Stunden",overlay_opacity:"Überlagerungs-Transparenz",language:"Sprache",language_auto:"Automatisch",language_en:"Englisch",language_ru:"Russisch",language_de:"Deutsch",language_nl:"Niederländisch",language_fr:"Französisch",language_es:"Spanisch",wind_speed_unit:"Einheit der Windgeschwindigkeit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamische Wetterkarte",pageSubtitle:"Interaktive Demo & Konfiguration",livePreview:"Live-Vorschau",configuration:"Konfiguration",quickPresets:"Schnellvorlagen",sunnyDay:"Sonniger Tag",rainy:"Regnerisch",snowy:"Schnee",clearNight:"Klare Nacht",weatherCondition:"Wetterbedingungen",condition:"Zustand",temperature:"Temperatur",humidity:"Luftfeuchtigkeit (%)",windSpeed:"Windgeschwindigkeit",timeOfDay:"Tageszeit",timeMode:"Zeitmodus",autoTime:"Automatisch (Aktuelle Zeit)",manualControl:"Manuelle Steuerung",sunrise:"Sonnenaufgang",day:"Tag",sunset:"Sonnenuntergang",night:"Nacht",currentTime:"Aktuelle Zeit",displayOptions:"Anzeigeoptionen",cardName:"Kartenname",height:"Höhe (px)",feelsLike:"Gefühlte Temperatur",minTemp:"Mindesttemperatur",windDirection:"Windrichtung",windGust:"Windböen",hourlyForecast:"Stündliche Vorhersage",dailyForecast:"Tägliche Vorhersage",sunriseSunset:"Sonnenaufgang / Sonnenuntergang",showClock:"Uhr",clockPosition:"Uhrposition",clockPositionTop:"Oben rechts",clockPositionDetails:"Detailzeile",clockFormat:"Uhrzeitformat",clockFormat12h:"12-Stunden (AM/PM)",clockFormat24h:"24-Stunden",overlayOpacity:"Überlagerungs-Transparenz (0-1)",windSpeedUnit:"Windgeschwindigkeitseinheit",dailyForecastDays:"Tage der Prognose",hourlyForecastHours:"Stunden der Prognose",updateCard:"Karte aktualisieren",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Mit Liebe für Home Assistant gemacht",loading:"Karte wird geladen...",errorTitle:"Karte konnte nicht geladen werden",errorDetails:"Überprüfe die Browser-Konsole (F12) für Details",errorServer:"Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",placeholderEmpty:"Leer lassen, um auszublenden",weatherConditions:{sunny:"Sonnig",clear:"Klar",clearNight:"Klare Nacht",partlyCloudy:"Teilweise bewölkt",cloudy:"Bewölkt",rainy:"Regen",pouring:"Starkregen",snowy:"Schnee",sleet:"Schneeregen",hail:"Hagel",foggy:"Nebel",lightning:"Blitz",thunderstorm:"Gewitter"},language:{title:"Sprache",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},qi=xc;var pc={sunny:"Zonnig",clear:"Helder",overcast:"Bewolkt",cloudy:"Bewolkt",partlycloudy:"Gedeeltelijk bewolkt",rainy:"Regenachtig",rain:"Regen",snowy:"Sneeuwachtig",snow:"Sneeuw",foggy:"Mistig",fog:"Mist",lightning:"Bliksem","lightning-rainy":"Onweersbui",pouring:"Zware regen","snowy-rainy":"Natte sneeuw",hail:"Hagel","clear-night":"Heldere nacht",feels_like:"Gevoelstemperatuur",forecast_title:"Voorspelling van vandaag",daily_forecast_title:"Dagelijkse voorspelling",no_data:"Geen gegevens",forecast_unavailable:"Voorspelling niet beschikbaar",weather:"Weer",language:"Taal",wind_unit_kmh:"km/u",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Huidige tijd weergeven",am:"AM",pm:"PM",editor:{entity:"Weer-entiteit",name:"Kaarttitel",height:"Kaart hoogte",show_feels_like:"Gevoelstemperatuur tonen",show_wind:"Windsnelheid tonen",show_wind_gust:"Windstoten tonen",show_wind_direction:"Windrichting tonen",show_humidity:"Luchtvochtigheid tonen",show_min_temp:"Minimumtemperatuur tonen",show_hourly_forecast:"Uurverwachting tonen",hourly_forecast_hours:"Aantal uren",show_daily_forecast:"Dagverwachting tonen",daily_forecast_days:"Aantal dagen",show_sunrise_sunset:"Zonsopgang/zonsondergang tonen",sunrise_entity:"Zonsopgang-entiteit",sunset_entity:"Zonsondergang-entiteit",show_clock:"Klok tonen",clock_position:"Klokpositie",clock_position_top:"Boven",clock_position_details:"Details",clock_format:"Tijdformaat",clock_format_12h:"12-uurs (AM/PM)",clock_format_24h:"24-uurs",overlay_opacity:"Overlay-doorzichtigheid",language:"Taal",language_auto:"Automatisch",language_en:"Engels",language_ru:"Russisch",language_de:"Duits",language_nl:"Nederlands",language_fr:"Frans",language_es:"Spaans",wind_speed_unit:"Windsnelheidseenheid",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/u"},demo:{pageTitle:"Dynamische Weerkaart",pageSubtitle:"Interactieve demo & configuratietool",livePreview:"Live voorbeeld",configuration:"Configuratie",quickPresets:"Snelle presets",sunnyDay:"Zonnige dag",rainy:"Regen",snowy:"Sneeuw",clearNight:"Heldere nacht",weatherCondition:"Weersomstandigheden",condition:"Conditie",temperature:"Temperatuur",humidity:"Luchtvochtigheid (%)",windSpeed:"Windsnelheid",timeOfDay:"Tijd van de dag",timeMode:"Tijdmodus",autoTime:"Automatisch (huidige tijd)",manualControl:"Handmatige bediening",sunrise:"Zonsopgang",day:"Dag",sunset:"Zonsondergang",night:"Nacht",currentTime:"Huidige tijd",displayOptions:"Weergaveopties",cardName:"Kaartnaam",height:"Hoogte (px)",feelsLike:"Gevoelstemperatuur",minTemp:"Minimumtemperatuur",windDirection:"Windrichting",windGust:"Windstoten",hourlyForecast:"Uurlijkse voorspelling",dailyForecast:"Dagelijkse voorspelling",sunriseSunset:"Zonsopgang / Zonsondergang",showClock:"Klok",clockPosition:"Klokpositie",clockPositionTop:"Rechtsboven",clockPositionDetails:"Detailregel",clockFormat:"Klokformaat",clockFormat12h:"12-uurs (AM/PM)",clockFormat24h:"24-uurs",overlayOpacity:"Overlay-transparantie (0-1)",windSpeedUnit:"Windsnelheidseenheid",dailyForecastDays:"Voorspellingsdagen",hourlyForecastHours:"Voorspellingsuren",updateCard:"Kaart bijwerken",startDemo:"Demo starten",stopDemo:"Demo stoppen",madeWith:"Gemaakt met liefde voor Home Assistant",loading:"Kaart laden...",errorTitle:"Kan kaart niet laden",errorDetails:"Controleer de browserconsole (F12) voor details",errorServer:"Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",placeholderEmpty:"Leeg laten om te verbergen",weatherConditions:{sunny:"Zonnig",clear:"Helder",clearNight:"Heldere nacht",partlyCloudy:"Gedeeltelijk bewolkt",cloudy:"Bewolkt",rainy:"Regen",pouring:"Zware regen",snowy:"Sneeuw",sleet:"Natte sneeuw",hail:"Hagel",foggy:"Mist",lightning:"Bliksem",thunderstorm:"Onweer"},language:{title:"Taal",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Wi=pc;var Gc={sunny:"Ensoleillé",clear:"Dégagé",overcast:"Couvert",cloudy:"Nuageux",partlycloudy:"Partiellement nuageux",rainy:"Pluvieux",rain:"Pluie",snowy:"Neigeux",snow:"Neige",foggy:"Brumeux",fog:"Brouillard",lightning:"Éclairs","lightning-rainy":"Orage",pouring:"Forte pluie","snowy-rainy":"Neige fondue",hail:"Grêle","clear-night":"Nuit claire",feels_like:"Ressenti",forecast_title:"Prévisions du jour",daily_forecast_title:"Prévisions quotidiennes",no_data:"Aucune donnée",forecast_unavailable:"Prévisions non disponibles",weather:"Météo",language:"Langue",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Afficher l'heure actuelle",am:"AM",pm:"PM",editor:{entity:"Entité météo",name:"Titre de la carte",height:"Hauteur de la carte",show_feels_like:"Afficher le ressenti",show_wind:"Afficher la vitesse du vent",show_wind_gust:"Afficher les rafales",show_wind_direction:"Afficher la direction du vent",show_humidity:"Afficher l’humidité",show_min_temp:"Afficher la température minimale",show_hourly_forecast:"Afficher la prévision horaire",hourly_forecast_hours:"Heures de prévision",show_daily_forecast:"Afficher la prévision quotidienne",daily_forecast_days:"Jours de prévision",show_sunrise_sunset:"Afficher lever/coucher du soleil",sunrise_entity:"Entité de lever du soleil",sunset_entity:"Entité de coucher du soleil",show_clock:"Afficher l'horloge",clock_position:"Position de l'horloge",clock_position_top:"En haut",clock_position_details:"Détails",clock_format:"Format de l'heure",clock_format_12h:"12 heures (AM/PM)",clock_format_24h:"24 heures",overlay_opacity:"Opacité du voile",language:"Langue",language_auto:"Auto",language_en:"Anglais",language_ru:"Russe",language_de:"Allemand",language_nl:"Néerlandais",language_fr:"Français",language_es:"Espagnol",wind_speed_unit:"Unité de vitesse du vent",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Carte Météo Dynamique",pageSubtitle:"Démo Interactive & Outil de Configuration",livePreview:"Aperçu en direct",configuration:"Configuration",quickPresets:"Pré-réglages rapides",sunnyDay:"Journée ensoleillée",rainy:"Pluvieux",snowy:"Neigeux",clearNight:"Nuit claire",weatherCondition:"Condition météo",condition:"Condition",temperature:"Température",humidity:"Humidité (%)",windSpeed:"Vitesse du vent",timeOfDay:"Moment de la journée",timeMode:"Mode horaire",autoTime:"Auto (heure actuelle)",manualControl:"Contrôle manuel",sunrise:"Lever du soleil",day:"Jour",sunset:"Coucher du soleil",night:"Nuit",currentTime:"Heure actuelle",displayOptions:"Options d'affichage",cardName:"Nom de la carte",height:"Hauteur (px)",feelsLike:"Température ressentie",minTemp:"Température minimale",windDirection:"Direction du vent",windGust:"Rafales de vent",hourlyForecast:"Prévisions horaires",dailyForecast:"Prévisions quotidiennes",sunriseSunset:"Lever/Coucher du soleil",showClock:"Horloge",clockPosition:"Position de l'horloge",clockPositionTop:"En haut à droite",clockPositionDetails:"Ligne de détails",clockFormat:"Format de l'horloge",clockFormat12h:"12 heures (AM/PM)",clockFormat24h:"24 heures",overlayOpacity:"Opacité du voile (0-1)",windSpeedUnit:"Unité de vitesse du vent",dailyForecastDays:"Jours de prévision",hourlyForecastHours:"Heures de prévision",updateCard:"Mettre à jour la carte",startDemo:"Démarrer le mode démo",stopDemo:"Arrêter la démo",madeWith:"Fait avec amour pour Home Assistant",loading:"Chargement de la carte...",errorTitle:"Échec du chargement de la carte",errorDetails:"Vérifiez la console du navigateur (F12) pour plus de détails",errorServer:"Assurez-vous que le fichier est servi via un serveur local (pas file://)",placeholderEmpty:"Laisser vide pour masquer",weatherConditions:{sunny:"Ensoleillé",clear:"Dégagé",clearNight:"Nuit claire",partlyCloudy:"Partiellement nuageux",cloudy:"Nuageux",rainy:"Pluvieux",pouring:"Forte pluie",snowy:"Neigeux",sleet:"Neige fondue",hail:"Grêle",foggy:"Brumeux",lightning:"Éclairs",thunderstorm:"Orage"},language:{title:"Langue",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},mi=Gc;var Cc={sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night",feels_like:"Feels like",forecast_title:"Today's Forecast",daily_forecast_title:"Daily's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",language:"Language",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Show current time",am:"AM",pm:"PM",editor:{entity:"Weather Entity",name:"Card Title",height:"Card Height",show_feels_like:"Show Feels Like",show_wind:"Show Wind Speed",show_wind_gust:"Show Wind Gust",show_wind_direction:"Show Wind Direction",show_humidity:"Show Humidity",show_min_temp:"Show Min Temperature",show_hourly_forecast:"Show Hourly Forecast",hourly_forecast_hours:"Hourly Forecast Hours",show_daily_forecast:"Show Daily Forecast",daily_forecast_days:"Daily Forecast Days",show_sunrise_sunset:"Show Sunrise/Sunset",sunrise_entity:"Sunrise Entity",sunset_entity:"Sunset Entity",show_clock:"Show Clock",clock_position:"Clock Position",clock_position_top:"Top",clock_position_details:"Details",clock_format:"Clock Format",clock_format_12h:"12-hour (AM/PM)",clock_format_24h:"24-hour",overlay_opacity:"Overlay Opacity",language:"Language",language_auto:"Auto",language_en:"English",language_ru:"Russian",language_de:"German",language_nl:"Dutch",language_fr:"French",language_es:"Spanish",wind_speed_unit:"Wind Speed Unit",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Interactive Demo & Configuration Tool",livePreview:"Live Preview",configuration:"Configuration",quickPresets:"Quick Presets",sunnyDay:"Sunny Day",rainy:"Rainy",snowy:"Snowy",clearNight:"Clear Night",weatherCondition:"Weather Condition",condition:"Condition",temperature:"Temperature",humidity:"Humidity (%)",windSpeed:"Wind Speed",timeOfDay:"Time of Day",timeMode:"Time Mode",autoTime:"Auto (Current Time)",manualControl:"Manual Control",sunrise:"Sunrise",day:"Day",sunset:"Sunset",night:"Night",currentTime:"Current Time",displayOptions:"Display Options",cardName:"Card Name",height:"Height (px)",feelsLike:"Feels Like Temperature",minTemp:"Min Temperature",windDirection:"Wind Direction",windGust:"Wind Gust",hourlyForecast:"Hourly Forecast",dailyForecast:"Daily Forecast",sunriseSunset:"Sunrise/Sunset",showClock:"Clock",clockPosition:"Clock Position",clockPositionTop:"Top right",clockPositionDetails:"Details row",clockFormat:"Clock Format",clockFormat12h:"12-hour (AM/PM)",clockFormat24h:"24-hour",overlayOpacity:"Overlay Opacity (0-1)",windSpeedUnit:"Wind Speed Unit",dailyForecastDays:"Daily Forecast Days",hourlyForecastHours:"Hourly Forecast Hours",updateCard:"Update Card",startDemo:"Start Demo Mode",stopDemo:"Stop Demo",madeWith:"Made with love for Home Assistant",loading:"Loading card...",errorTitle:"Failed to load card",errorDetails:"Check the browser console (F12) for details",errorServer:"Make sure the file is served via a local server (not file://)",placeholderEmpty:"Leave empty to hide",weatherConditions:{sunny:"Sunny",clear:"Clear",clearNight:"Clear Night",partlyCloudy:"Partly Cloudy",cloudy:"Cloudy",rainy:"Rainy",pouring:"Pouring",snowy:"Snowy",sleet:"Sleet",hail:"Hail",foggy:"Foggy",lightning:"Lightning",thunderstorm:"Thunderstorm"},language:{title:"Language",english:"English",russian:"Russian",french:"French",german:"German",dutch:"Dutch",spanish:"Spanish",italian:"Italian"}}},$i=Cc;var Sc={sunny:"Soleado",clear:"Despejado",overcast:"Cubierto",cloudy:"Nublado",partlycloudy:"Parcialmente Nublado",rainy:"Lluvioso",rain:"Lluvia",snowy:"Nevado",snow:"Nieve",foggy:"Nublado",fog:"Niebla",lightning:"Rayo","lightning-rainy":"Tormenta Eléctrica",pouring:"Lluvia Intensa","snowy-rainy":"Aguanieve",hail:"Granizo","clear-night":"Noche Despejada",feels_like:"Sensación térmica",forecast_title:"Previsión para hoy",daily_forecast_title:"Previsión Diaria",no_data:"Sin datos",forecast_unavailable:"Previsión no disponible",weather:"Clima",language:"Idioma",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostrar hora actual",am:"AM",pm:"PM",editor:{entity:"Entidad de clima",name:"Título de la tarjeta",height:"Altura de la tarjeta",show_feels_like:"Mostrar sensación térmica",show_wind:"Mostrar velocidad del viento",show_wind_gust:"Mostrar ráfaga de viento",show_wind_direction:"Mostrar dirección del viento",show_humidity:"Mostrar humedad",show_min_temp:"Mostrar temperatura mínima",show_hourly_forecast:"Mostrar pronóstico por horas",hourly_forecast_hours:"Horas del pronóstico",show_daily_forecast:"Mostrar pronóstico diario",daily_forecast_days:"Días del pronóstico",show_sunrise_sunset:"Mostrar amanecer/atardecer",sunrise_entity:"Entidad de amanecer",sunset_entity:"Entidad de atardecer",show_clock:"Mostrar reloj",clock_position:"Posición del reloj",clock_position_top:"Arriba",clock_position_details:"Detalles",clock_format:"Formato de hora",clock_format_12h:"12 horas (AM/PM)",clock_format_24h:"24 horas",overlay_opacity:"Opacidad de superposición",language:"Idioma",language_auto:"Automático",language_en:"Inglés",language_ru:"Ruso",language_de:"Alemán",language_nl:"Neerlandés",language_fr:"Francés",language_es:"Español",wind_speed_unit:"Unidad de velocidad del viento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Tarjeta Meteorológica Dinámica",pageSubtitle:"Demostración interactiva y Herramienta de Configuración",livePreview:"Vista previa en vivo",configuration:"Configuración",quickPresets:"Ajustes Rápidos",sunnyDay:"Día soleado",rainy:"Lluvioso",snowy:"Nevado",clearNight:"Noche despejada",weatherCondition:"Condiciones Meteorológicas",condition:"Condición",temperature:"Temperatura",humidity:"Humedad (%)",windSpeed:"Velocidad del Viento",timeOfDay:"Hora del Día",timeMode:"Modo Tiempo",autoTime:"Auto (Hora Actual)",manualControl:"Control Manual",sunrise:"Amanecer",day:"Día",sunset:"Atardecer",night:"Noche",currentTime:"Hora Actual",displayOptions:"Opciones de Visualización",cardName:"Nombre de la tarjeta",height:"Altura (px)",feelsLike:"Sensación Térmica",minTemp:"Temperatura Mínima",windDirection:"Dirección del Viento",windGust:"Ráfaga de Viento",hourlyForecast:"Previsión por Horas",dailyForecast:"Previsión Diaria",sunriseSunset:"Amanecer/Atardecer",showClock:"Reloj",clockPosition:"Posición del Reloj",clockPositionTop:"Arriba a la derecha",clockPositionDetails:"Línea de detalles",clockFormat:"Formato del Reloj",clockFormat12h:"12 horas (AM/PM)",clockFormat24h:"24 horas",overlayOpacity:"Opacidad de Superposición (0-1)",windSpeedUnit:"Unidad de Velocidad del Viento",dailyForecastDays:"Días de Previsión",hourlyForecastHours:"Horas de Previsión",updateCard:"Actualizar Tarjeta",startDemo:"Iniciar Modo Demostración",stopDemo:"Detener Demostración",madeWith:"Hecho con amor para Home Assistant",loading:"Cargando tarjeta...",errorTitle:"No se pudo cargar la tarjeta",errorDetails:"Consulte la consola del navegador (F12) para obtener más detalles",errorServer:"Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",placeholderEmpty:"Deje vacío para ocultar",weatherConditions:{sunny:"Soleado",clear:"Despejado",clearNight:"Noche Despejada",partlyCloudy:"Parcialmente Nublado",cloudy:"Nublado",rainy:"Lluvioso",pouring:"Torrencial",snowy:"Nevado",sleet:"Aguanieve",hail:"Granizo",foggy:"Nublado",lightning:"Rayos",thunderstorm:"Tormenta Eléctrica"},language:{title:"Idioma",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Bi=Sc;var zc={sunny:"Soleggiato",clear:"Sereno",overcast:"Coperto",cloudy:"Nuvoloso",partlycloudy:"Parzialmente Nuvoloso",rainy:"Piovoso",rain:"Pioggia",snowy:"Nevoso",snow:"Neve",foggy:"Nebbia",fog:"Nebbia",lightning:"Fulmine","lightning-rainy":"Temporale",pouring:"Pioggia Intensa","snowy-rainy":"Nevischio",hail:"Grandine","clear-night":"Notte Serena",feels_like:"Percepita",forecast_title:"Previsioni di oggi",daily_forecast_title:"Previsioni Giornaliere",no_data:"Nessun dato",forecast_unavailable:"Previsioni non disponibili",weather:"Meteo",language:"Lingua",wind_unit_kmh:"km/h",wind_unit_ms:"m/s",wind_unit_mph:"mph",wind_unit_knots:"knots",wind_unit_fts:"ft/s",show_clock:"Mostra ora corrente",am:"AM",pm:"PM",editor:{entity:"Entità meteo",name:"Titolo della scheda",height:"Altezza della scheda",show_feels_like:"Mostra temperatura percepita",show_wind:"Mostra velocità del vento",show_wind_gust:"Mostra raffiche di vento",show_wind_direction:"Mostra direzione del vento",show_humidity:"Mostra umidità",show_min_temp:"Mostra temperatura minima",show_hourly_forecast:"Mostra previsione oraria",hourly_forecast_hours:"Ore di previsione",show_daily_forecast:"Mostra previsione giornaliera",daily_forecast_days:"Giorni di previsione",show_sunrise_sunset:"Mostra alba/tramonto",sunrise_entity:"Entità alba",sunset_entity:"Entità tramonto",show_clock:"Mostra orologio",clock_position:"Posizione orologio",clock_position_top:"In alto",clock_position_details:"Dettagli",clock_format:"Formato orario",clock_format_12h:"12 ore (AM/PM)",clock_format_24h:"24 ore",overlay_opacity:"Opacità sovrapposizione",language:"Lingua",language_auto:"Auto",language_en:"Inglese",language_ru:"Russo",language_de:"Tedesco",language_nl:"Olandese",language_fr:"Francese",language_es:"Spagnolo",wind_speed_unit:"Unità velocità del vento",wind_speed_unit_ms:"m/s",wind_speed_unit_kmh:"km/h"},demo:{pageTitle:"Dynamic Weather Card",pageSubtitle:"Demo interattiva & Strumento di configurazione",livePreview:"Anteprima live",configuration:"Configurazione",quickPresets:"Preset veloci",sunnyDay:"Giornata Soleggiata",rainy:"Piovoso",snowy:"Nevoso",clearNight:"Notte Serena",weatherCondition:"Condizione Meteo",condition:"Condizione",temperature:"Temperatura",humidity:"Umidità (%)",windSpeed:"Velocità del Vento",timeOfDay:"Momento della giornata",timeMode:"Modalità ora",autoTime:"Automatico (Ora corrente)",manualControl:"Controllo manuale",sunrise:"Alba",day:"Giorno",sunset:"Tramonto",night:"Notte",currentTime:"Ora corrente",displayOptions:"Opzioni di visualizzazione",cardName:"Nome della card",height:"Altezza (px)",feelsLike:"Temperatura percepita",minTemp:"Temperatura minima",windDirection:"Direzione del vento",windGust:"Raffiche di vento",hourlyForecast:"Previsioni orarie",dailyForecast:"Previsioni giornaliere",sunriseSunset:"Alba/Tramonto",showClock:"Orologio",clockPosition:"Posizione Orologio",clockPositionTop:"In alto a destra",clockPositionDetails:"Riga dettagli",clockFormat:"Formato Orologio",clockFormat12h:"12 ore (AM/PM)",clockFormat24h:"24 ore",overlayOpacity:"Opacità Sovrapposizione (0-1)",windSpeedUnit:"Unità Velocità Vento",dailyForecastDays:"Giorni di Previsione",hourlyForecastHours:"Ore di Previsione",updateCard:"Aggiorna card",startDemo:"Avvia Demo",stopDemo:"Ferma Demo",madeWith:"Creato con amore per Home Assistant",loading:"Caricamento card...",errorTitle:"Impossibile caricare la card",errorDetails:"Controlla la console del browser (F12) per i dettagli",errorServer:"Assicurati che il file sia servito tramite server locale (non file://)",placeholderEmpty:"Lascia vuoto per nascondere",weatherConditions:{sunny:"Soleggiato",clear:"Sereno",clearNight:"Notte Serena",partlyCloudy:"Parzialmente Nuvoloso",cloudy:"Nuvoloso",rainy:"Piovoso",pouring:"Pioggia Intensa",snowy:"Nevoso",sleet:"Nevischio",hail:"Grandine",foggy:"Nebbia",lightning:"Fulmine",thunderstorm:"Temporale"},language:{title:"Lingua",english:"English",russian:"Русский",french:"Français",german:"Deutsch",dutch:"Nederlands",spanish:"Español",italian:"Italiano"}}},Ji=zc;var Jo={en:$i,ru:Hi,de:qi,nl:Wi,fr:mi,es:Bi,it:Ji};class Qi{lang="en";fallback="en";t(o){let i=o.split("."),c=i.reduce((n,_)=>n?.[_],Jo[this.lang]);if(c!=null)return c;return i.reduce((n,_)=>n?.[_],Jo[this.fallback])??o}setLanguage(o){if(!Jo[o]||this.lang===o)return;this.lang=o,window.dispatchEvent(new CustomEvent("language-changed"))}}var h=new Qi;window.i18n=h;var e=({configLang:o,hassLang:i}={})=>{if(o&&o!=="auto")return o;if(i)return i;if(typeof navigator<"u"&&navigator.language){let c=navigator.language.toLowerCase();if(c.startsWith("ru"))return"ru";if(c.startsWith("de"))return"de";if(c.startsWith("nl"))return"nl";if(c.startsWith("fr"))return"fr";if(c.startsWith("it"))return"it";if(c.startsWith("es"))return"es"}return"en"};function Tc(){let o=new Date,i=o.getHours(),c=o.getMinutes(),l=i*60+c;if(l>=Q.SUNRISE_START&&l<Q.SUNRISE_END)return{type:"sunrise",progress:(l-Q.SUNRISE_START)/120};if(l>=Q.SUNRISE_END&&l<Q.DAY_END)return{type:"day",progress:(l-Q.SUNRISE_END)/600};if(l>=Q.DAY_END&&l<Q.SUNSET_END)return{type:"sunset",progress:(l-Q.DAY_END)/120};return{type:"night",progress:0}}function Ni(o,i,c){if(o.type==="sunrise"){let l=o.progress;return{x:i*(0.3+l*0.4),y:c*(0.85-l*0.55)}}else if(o.type==="sunset"){let l=o.progress;return{x:i*(0.5+l*0.3),y:c*(0.3+l*0.55)}}else if(o.type==="day"){let n=o.progress*Math.PI;return{x:i*(0.5+Math.sin(n)*0.25),y:c*(0.25-Math.sin(n)*0.1)}}else return{x:i*0.75,y:c*0.3}}function xi(o){if(o.type==="sunrise"){let i=o.progress,c={r:26,g:26,b:46},l={r:255,g:160,b:122},n={r:255,g:215,b:0};return{start:{r:Math.round(c.r+(l.r-c.r)*i),g:Math.round(c.g+(l.g-c.g)*i),b:Math.round(c.b+(l.b-c.b)*i)},end:{r:Math.round(c.r+(n.r-c.r)*i),g:Math.round(c.g+(n.g-c.g)*i),b:Math.round(c.b+(n.b-c.b)*i)}}}else if(o.type==="sunset"){let i=o.progress,c={r:255,g:107,b:107},l={r:255,g:160,b:122},n={r:26,g:26,b:46};return{start:{r:Math.round(c.r+(n.r-c.r)*i),g:Math.round(c.g+(n.g-c.g)*i),b:Math.round(c.b+(n.b-c.b)*i)},end:{r:Math.round(l.r+(n.r-l.r)*i),g:Math.round(l.g+(n.g-l.g)*i),b:Math.round(l.b+(n.b-l.b)*i)}}}return null}function pi(o){if(!o)return"";return`${new Date(o).getHours().toString().padStart(2,"0")}:00`}function Gi(o,i){if(!o)return"";let c=new Date(o);if(Number.isNaN(c.getTime()))return"";return c.toLocaleDateString(i||void 0,{weekday:"short",day:"numeric",month:"short"})}function Qo(o,i="24h",c="AM",l="PM"){if(!o)return"";let n=typeof o==="string"?new Date(o):o,_=n.getHours(),r=n.getMinutes();if(i==="12h"){let d=_>=12?l:c;return _=_%12||12,`${_}:${r.toString().padStart(2,"0")} ${d}`}else return`${_.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}function No(o,i=null,c=null,l=null){let n=null,_=null;if(i&&l&&l.states[i]){let r=l.states[i];n=new Date(r.state)}if(c&&l&&l.states[c]){let r=l.states[c];_=new Date(r.state)}if(!n||!_){if(o&&o.attributes){let r=o.attributes;if(!n&&(r.forecast_sunrise||r.sunrise))n=new Date(r.forecast_sunrise||r.sunrise);if(!_&&(r.forecast_sunset||r.sunset))_=new Date(r.forecast_sunset||r.sunset)}}if((!n||!_)&&l&&l.states["sun.sun"]){let d=l.states["sun.sun"].attributes;if(!n&&d.next_rising)n=new Date(d.next_rising);if(!_&&d.next_setting)_=new Date(d.next_setting)}return{sunrise:n,sunset:_,hasSunData:!!(n&&_)}}function xo(o){let i=new Date;if(o.hasSunData&&o.sunrise&&o.sunset){let c=i.getTime(),l=o.sunrise.getTime(),n=o.sunset.getTime();if(l-c>43200000)l-=86400000;if(n-c>43200000)n-=86400000;let _=l-3600000,r=l+3600000,d=n-3600000,a=n+3600000;if(c>=_&&c<r)return{type:"sunrise",progress:(c-_)/(r-_)};if(c>=r&&c<d)return{type:"day",progress:(c-r)/(d-r)};if(c>=d&&c<a)return{type:"sunset",progress:(c-d)/(a-d)};return{type:"night",progress:0}}return Tc()}function po(o,i,c){if(o==null)return null;if(i.wind_speed_unit)return Math.round(o*10)/10;if(c==="kmh")return Math.round(o*3.6*10)/10;return Math.round(o*10)/10}function Ci(o,i,c){let l=o.wind_speed_unit;if(l){let n=l.toLowerCase().replace(/[^a-z]/g,"");if(n==="kmh"||n==="kmph")return c("wind_unit_kmh");else if(n==="ms"||n==="mps")return c("wind_unit_ms");else if(n==="mph")return c("wind_unit_mph");else if(n==="knots"||n==="kn"||n==="kt")return c("wind_unit_knots");else if(n==="fts"||n==="ftps")return c("wind_unit_fts");return l}return i==="kmh"?c("wind_unit_kmh"):c("wind_unit_ms")}function Si(o,i,c,l){if(i==="12h"){let n=o.getHours(),_=String(o.getMinutes()).padStart(2,"0"),r=n>=12?l:c;return n=n%12||12,`${n}:${_} ${r}`}else{let n=String(o.getHours()).padStart(2,"0"),_=String(o.getMinutes()).padStart(2,"0");return`${n}:${_}`}}function go(o,i){let c=o?.querySelector(i);if(!c)return null;let l=(n)=>{let _=n;if(_.deltaY!==0)n.preventDefault(),c.scrollLeft+=_.deltaY};return c.addEventListener("wheel",l,{passive:!1}),()=>c.removeEventListener("wheel",l)}var zi=G`
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
`;class H{ctx;constructor(o){this.ctx=o}drawCloud(o,i,c,l){let n=this.ctx.shadowBlur,_=this.ctx.shadowColor,r=this.ctx.globalAlpha;this.ctx.shadowBlur=c*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${l*0.4})`,this.ctx.globalAlpha=l*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:o,y:i,r:c*0.4},{x:o+c*0.35,y:i,r:c*0.5},{x:o+c*0.65,y:i,r:c*0.48},{x:o+c*0.92,y:i,r:c*0.38},{x:o+c*0.18,y:i-c*0.28,r:c*0.38},{x:o+c*0.52,y:i-c*0.32,r:c*0.42},{x:o+c*0.78,y:i-c*0.28,r:c*0.38},{x:o+c*0.32,y:i-c*0.42,r:c*0.32},{x:o+c*0.62,y:i-c*0.48,r:c*0.36},{x:o+c*0.82,y:i-c*0.42,r:c*0.32}].forEach((a)=>{this.ctx.beginPath(),this.ctx.arc(a.x,a.y,a.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=n,this.ctx.shadowColor=_,this.ctx.globalAlpha=r}drawClouds(o,i,c,l=0.5){let n=Math.max(2,Math.floor(i/150*l));for(let _=0;_<n;_++){let r=(o*3+_*150)%(i+200)-100,d=c*(0.2+_%3*0.15)+Math.sin(o*0.2+_)*8,a=40+_%3*15,g=0.6+_%2*0.2;this.drawCloud(r,d,a,g)}}}class Go extends H{draw(o,i,c,l){let n=Date.now()*0.001,_=Ni(l,i,c),r=_.x,d=_.y;if(l.type==="day"||l.type==="sunrise"||l.type==="sunset"){if(this.drawSun(r,d,n),l.type==="sunrise"||l.type==="sunset")this.drawHorizonReflection(r,d,c,n)}else if(l.type==="night")this.drawNightSky(i,c,n);this.drawClouds(n,i,c,0.3)}drawSun(o,i,c){let l=48+Math.sin(c*0.15)*1.5,n=this.ctx.createRadialGradient(o,i,l*0.3,o,i,l*3.5);n.addColorStop(0,"rgba(255, 248, 230, 0.25)"),n.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),n.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),n.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),n.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),n.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),n.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=n,this.ctx.beginPath(),this.ctx.arc(o,i,l*3.5,0,Math.PI*2),this.ctx.fill();let _=this.ctx.createRadialGradient(o,i,l*0.5,o,i,l*2.2);_.addColorStop(0,"rgba(255, 250, 220, 0.35)"),_.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),_.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),_.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),_.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=_,this.ctx.beginPath(),this.ctx.arc(o,i,l*2.2,0,Math.PI*2),this.ctx.fill();let r=this.ctx.createRadialGradient(o,i,l*0.6,o,i,l*1.6);r.addColorStop(0,"rgba(255, 252, 240, 0.5)"),r.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),r.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),r.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(o,i,l*1.6,0,Math.PI*2),this.ctx.fill();let d=this.ctx.createRadialGradient(o-l*0.1,i-l*0.1,0,o,i,l);d.addColorStop(0,"#FFFEF5"),d.addColorStop(0.15,"#FFF9E6"),d.addColorStop(0.3,"#FFF4D6"),d.addColorStop(0.5,"#FFEDC0"),d.addColorStop(0.7,"#FFE4A8"),d.addColorStop(0.85,"#FFDC95"),d.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(o,i,l,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(o,i,c,l){let n=48+Math.sin(l*0.15)*1.5,_=c*0.85;if(i>=_-50){let r=Math.max(0,(_-i)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${r})`,this.ctx.beginPath(),this.ctx.ellipse(o,_,n*1.5,n*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(o,i,c){this.ctx.fillStyle="#FFFFFF";for(let _=0;_<20;_++){let r=(o*0.2+_*47)%o,d=(i*0.2+_*23)%(i*0.6),a=Math.sin(c*0.8+_)*0.5+0.5;this.ctx.globalAlpha=a*0.8,this.ctx.beginPath(),this.ctx.arc(r,d,1.5,0,Math.PI*2),this.ctx.fill()}let l=o*0.75,n=i*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc(l,n,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc(l-8,n-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class E extends H{rainDrops=[];lastTime=0;draw(o,i,c,l,n=!1){let _=Date.now()*0.001;this.drawClouds(_,i,c,n?1:0.8),this.drawRain(i,c,n)}drawRain(o,i,c){let l=c?130:90;if(this.rainDrops.length!==l){this.rainDrops=[];for(let d=0;d<l;d++)this.rainDrops.push({x:Math.random()*o,y:Math.random()*i-Math.random()*200,speed:c?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:c?1.2+Math.random()*1:0.8+Math.random()*0.7,length:c?8+Math.random()*10:6+Math.random()*8,alpha:c?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let n=Date.now()*0.001,_=this.lastTime>0?Math.min(n-this.lastTime,0.1):0.016666666666666666;this.lastTime=n;let r=n;for(let d=0;d<this.rainDrops.length;d++){let a=this.rainDrops[d];if(a.y+=a.speed*_,a.y>i+50)a.y=-50-Math.random()*100,a.x=Math.random()*o;let g=a.windOffset*(1+Math.sin(r*0.5+a.phase)*0.2),s=a.x+g;if(s<-10)a.x=o+10;else if(s>o+10)a.x=-10;this.drawRainDrop(s,a.y,a)}}drawRainDrop(o,i,c){this.ctx.save(),this.ctx.globalAlpha=c.alpha;let l=i-c.length*0.5,n=i+c.length*0.5,_=c.alpha,r=c.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+_+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+r+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(o,l),this.ctx.quadraticCurveTo(o-c.width*0.3,i,o-c.width,n-c.width*0.3),this.ctx.arc(o,n,c.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(o+c.width*0.3,i,o,l),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class Co extends H{snowflakes=[];lastTime=0;draw(o,i,c,l){let n=Date.now()*0.001;this.drawClouds(n,i,c,0.7),this.drawSnowflakes(i,c)}drawSnowflakes(o,i){let c=Math.floor(o*i/5000),l=Math.max(30,Math.min(c,80));if(this.snowflakes.length!==l){this.snowflakes=[];for(let d=0;d<l;d++)this.snowflakes.push({x:Math.random()*o,y:Math.random()*i-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let n=Date.now()*0.001,_=this.lastTime>0?Math.min(n-this.lastTime,0.1):0.016666666666666666;this.lastTime=n;let r=n;this.ctx.lineCap="round";for(let d=0;d<this.snowflakes.length;d++){let a=this.snowflakes[d],g=Math.sin(r*a.swaySpeed+a.swayPhase)*2;if(a.y+=a.speedY*_,a.x+=(a.speedX+g)*_,a.rotation+=a.rotationSpeed*_,a.y>i+20)a.y=-20-Math.random()*50,a.x=Math.random()*o;if(a.x<-10)a.x=o+10;else if(a.x>o+10)a.x=-10;this.drawSnowflake(a.x,a.y,a.size,a.alpha,a.rotation)}}drawSnowflake(o,i,c,l,n){this.ctx.save(),this.ctx.translate(o,i),this.ctx.rotate(n),this.ctx.strokeStyle=`rgba(255, 255, 255, ${l})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let _=0;_<6;_++){let r=Math.PI/3*_,d=Math.cos(r),a=Math.sin(r);this.ctx.moveTo(0,0),this.ctx.lineTo(a*c*2.5,d*c*2.5);let g=a*c*1.5+d*c*0.5,s=d*c*1.5-a*c*0.5,y=a*c*1.8+d*c*1.2,F=d*c*1.8-a*c*1.2;this.ctx.moveTo(g,s),this.ctx.lineTo(y,F);let A=a*c*1.5-d*c*0.5,N=d*c*1.5+a*c*0.5,vi=a*c*1.8-d*c*1.2,Ii=d*c*1.8+a*c*1.2;this.ctx.moveTo(A,N),this.ctx.lineTo(vi,Ii)}this.ctx.stroke(),this.ctx.restore()}}class So extends H{draw(o,i,c,l){let n=Date.now()*0.001;this.drawClouds(n,i,c,0.7)}}class zo extends H{draw(o,i,c,l){let n=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let _=0;_<3;_++){let r=c*(0.4+_*0.2),d=Math.sin(n+_)*20;this.ctx.beginPath(),this.ctx.moveTo(0,r);for(let a=0;a<=i;a+=5){let g=Math.sin((a/i+n)*Math.PI*4+_)*15;this.ctx.lineTo(a,r+g+d)}this.ctx.lineTo(i,c),this.ctx.lineTo(0,c),this.ctx.closePath(),this.ctx.fill()}}}class To extends H{hailStones=[];draw(o,i,c,l){let n=Date.now()*0.001;this.drawClouds(n,i,c,1),this.drawHailStones(i,c)}drawHailStones(o,i){if(this.hailStones.length!==60){this.hailStones=[];for(let n=0;n<60;n++)this.hailStones.push({startX:Math.random()*o,startY:Math.random()*(i+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let l=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let n=0;n<this.hailStones.length;n++){let _=this.hailStones[n],r=(_.startY+l*_.speed)%(i+150);if(r>i+30)_.startY=-30-Math.random()*30,_.startX=Math.random()*o;let d=_.windOffset*(1+Math.sin(l*0.6+_.phase)*0.15),a=(_.startX+d+l*20%o)%o;if(a<-5)_.startX=o+5;else if(a>o+5)_.startX=-5;this.drawHailStone(a,r,_)}}drawHailStone(o,i,c){this.ctx.save(),this.ctx.globalAlpha=c.alpha,this.ctx.beginPath(),this.ctx.ellipse(o,i,c.size,c.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(o-c.size*0.3,i-c.size*0.3,c.size*0.3,c.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class Po extends H{rainyAnimation;constructor(o){super(o);this.rainyAnimation=new E(o)}draw(o,i,c,l,n=!0){let _=Date.now()*0.001;if(this.drawClouds(_,i,c,1),n)this.rainyAnimation.draw(o,i,c,l,!1);this.drawLightning(i,c,_)}drawLightning(o,i,c){let l=Math.sin(c*2.5)*Math.sin(c*5.3)*Math.sin(c*7.1),n=Math.max(0,l);if(n>0.4){let _=(n-0.4)/0.6,r=_*0.6,d=Math.min(r,Math.sin(_*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${d})`,this.ctx.fillRect(0,0,o,i)}}}class jo{canvas=null;ctx=null;animationFrame=null;animations={};resizeObserver=null;width=0;height=0;container=null;getDrawParams;constructor(o){this.getDrawParams=o}setup(o){if(this.container=o,this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver()}destroy(){if(this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;this.canvas=null,this.ctx=null,this.container=null}resize(){if(this.canvas&&this.ctx)this.resizeCanvas()}setupCanvas(){if(!this.container)return;let o=this.container.querySelector("canvas");if(o)o.remove();this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.resizeCanvas()}resizeCanvas(){if(!this.canvas||!this.container)return;let o=this.container.getBoundingClientRect();if(o.width===0||o.height===0)return;let i=window.devicePixelRatio||2;if(this.canvas.width=o.width*i,this.canvas.height=o.height*i,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(i,i);this.width=o.width,this.height=o.height,this.initializeAnimations()}setupResizeObserver(){if(!this.container)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(this.container)}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new Go(this.ctx),rainy:new E(this.ctx),snowy:new Co(this.ctx),cloudy:new So(this.ctx),foggy:new zo(this.ctx),hail:new To(this.ctx),thunderstorm:new Po(this.ctx)}}startAnimation(){let o=()=>{this.draw(),this.animationFrame=requestAnimationFrame(o)};o()}draw(){if(!this.ctx||!this.canvas)return;if(!this.width||!this.height){if(this.resizeCanvas(),!this.width||!this.height)return}let o=this.getDrawParams();if(!o)return;let{condition:i,timeOfDay:c}=o,l=this.width,n=this.height;switch(this.ctx.clearRect(0,0,l,n),i.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),l,n,c);break;case"clear-night":this.animations.sunny?.draw(Date.now(),l,n,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),l,n,c,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),l,n,c,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),l,n,c);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),l,n,c,!1),this.animations.snowy?.draw(Date.now(),l,n,c);break;case"hail":this.animations.hail?.draw(Date.now(),l,n,c);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),l,n,c);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),l,n,c,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),l,n,c,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),l,n,c);break}}}class Vo{hourlyForecast=[];dailyForecast=[];hourlySubscription=null;dailySubscription=null;onUpdate;constructor(o){this.onUpdate=o}getHourlyData(){return this.hourlyForecast}getDailyData(){return this.dailyForecast}async subscribe(o,i,c){if(!o||!i)return;this.unsubscribe();try{if(this.hourlySubscription=o.connection.subscribeMessage((l)=>{if(l.forecast&&l.forecast.length>0)this.hourlyForecast=l.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:i}),c)this.dailySubscription=o.connection.subscribeMessage((l)=>{if(l.forecast&&l.forecast.length>0)this.dailyForecast=l.forecast,this.onUpdate()},{type:"weather/subscribe_forecast",forecast_type:"daily",entity_id:i})}catch{}}async unsubscribe(){if(this.hourlySubscription){try{(await this.hourlySubscription)()}catch{}this.hourlySubscription=null}if(this.dailySubscription){try{(await this.dailySubscription)()}catch{}this.dailySubscription=null}}getHourlyForecast(o,i){let c=Math.max(1,Math.floor(Number(o??k.hourlyForecastHours)));if(this.hourlyForecast&&this.hourlyForecast.length>0)return this.hourlyForecast.slice(0,c);if(!i?.forecast||i.forecast.length===0)return[];let l=new Date,n=new Date(l.getFullYear(),l.getMonth(),l.getDate()),_=new Date(n);return _.setDate(_.getDate()+1),i.forecast.filter((d)=>{if(!d.datetime)return!1;let a=new Date(d.datetime),g=new Date(a.getFullYear(),a.getMonth(),a.getDate());return g.getTime()===n.getTime()||g.getTime()===_.getTime()&&a.getHours()<=l.getHours()}).sort((d,a)=>new Date(d.datetime).getTime()-new Date(a.datetime).getTime()).slice(0,c)}getDailyForecast(o,i){let c=Math.max(1,Math.floor(Number(o??k.dailyForecastDays)));if(this.dailyForecast&&this.dailyForecast.length>0)return this.dailyForecast.slice(0,c);if(!i?.forecast||i.forecast.length===0)return[];let l=new Date,n=new Date(l.getFullYear(),l.getMonth(),l.getDate()),_=new Date(n);_.setDate(_.getDate()+c);let r=(a)=>{let g=a.getFullYear(),s=String(a.getMonth()+1).padStart(2,"0"),y=String(a.getDate()).padStart(2,"0");return`${g}-${s}-${y}`},d=new Map;return i.forecast.forEach((a)=>{if(!a.datetime)return;let g=new Date(a.datetime);if(Number.isNaN(g.getTime()))return;if(g<n||g>=_)return;let s=r(g),y=Math.abs(g.getHours()+g.getMinutes()/60-12),F=d.get(s);if(!F||y<F.hourScore)d.set(s,{item:a,itemDate:g,hourScore:y})}),Array.from(d.values()).sort((a,g)=>a.itemDate.getTime()-g.itemDate.getTime()).map((a)=>a.item).slice(0,c)}}class Xo{holdTimer=null;lastTap=null;holdFired=!1;holdDelay=500;getHass;getConfig;fireEvent;constructor(o,i,c){this.getHass=o,this.getConfig=i,this.fireEvent=c}handleTap(o){if(o.target.closest(".forecast-item")||o.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.getConfig().tapAction),this.lastTap=null},300)}handlePointerDown(){this.holdTimer=window.setTimeout(()=>{this.handleHold(),this.holdFired=!0},this.holdDelay)}handlePointerUp(o){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)o.preventDefault(),o.stopPropagation(),this.holdFired=!1}handleHold(){this.handleAction(this.getConfig().holdAction)}handleDoubleTap(){this.handleAction(this.getConfig().doubleTapAction)}handleAction(o){let i=this.getHass(),c=this.getConfig();if(!o||!i)return;switch(o.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:o.entity||c.entity});break;case"toggle":i.callService("homeassistant","toggle",{entity_id:o.entity||c.entity});break;case"call-service":if(o.service){let[n,_]=o.service.split(".");i.callService(n,_,o.service_data||{})}break;case"navigate":if(o.navigation_path)window.history.pushState(null,"",o.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(o.url_path)window.open(o.url_path);break;case"none":default:break}}}function Pc(o,i){if(!o||!i)return null;let c=o.states[i];return c?c.state:null}function Yo(o,i){if(!o||!i)return{};let c=o.states[i];return c?c.attributes:{}}function Uo(o,i,c,l){let n=Pc(o,i),_=Yo(o,i),r=_.condition||n||"sunny",d=null;if(c.templowAttribute&&_[c.templowAttribute]!=null)d=_[c.templowAttribute];else{for(let a of Zi)if(_[a]!=null){d=_[a];break}if(d==null)d=(_.forecast&&_.forecast[0]?_.forecast[0].templow??null:null)||(_.forecast_hourly&&_.forecast_hourly[0]?_.forecast_hourly[0].native_templow??null:null)}return{condition:r,temperature:_.temperature!=null?_.temperature:null,apparentTemperature:_.apparent_temperature||null,humidity:_.humidity!=null?_.humidity:null,windSpeed:_.wind_speed!=null?_.wind_speed:null,windGust:_.wind_gust_speed||_.wind_gust||null,windBearing:_.wind_bearing!=null?_.wind_bearing:null,windDirection:_.wind_direction||null,pressure:_.pressure||null,forecast:_.forecast||_.forecast_hourly||l||[],friendlyName:_.friendly_name||h.t("weather"),templow:d}}class Ti extends Z{constructor(){super(...arguments);this.format=null;this.currentTime=""}clockInterval=null;static styles=G`
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
  `;connectedCallback(){if(super.connectedCallback(),this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}disconnectedCallback(){if(super.disconnectedCallback(),this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updated(o){if(super.updated(o),o.has("format")){if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null;if(this.format)this.updateTime(),this.clockInterval=window.setInterval(()=>this.updateTime(),1000)}}updateTime(){if(!this.format)return;this.currentTime=Si(new Date,this.format,h.t("am"),h.t("pm"))}render(){if(!this.format)return w``;return w`<div class="clock">${this.currentTime}</div>`}}M([K({type:String})],Ti.prototype,"format",void 0),M([ho()],Ti.prototype,"currentTime",void 0);customElements.define("weather-clock",Ti);var jc={wind:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},Pi=(o)=>u`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${o}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,Vc={sunny:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:u`
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
  `,overcast:u`
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
  `,cloudy:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:u`
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
  `,rain:u`
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
  `,pouring:u`
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
  `,snowy:u`
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
  `,snow:u`
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
  `,foggy:u`
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
  `,fog:u`
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
  `,hail:u`
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
  `,"snowy-rainy":u`
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
  `,lightning:u`
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
  `,"lightning-rainy":u`
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
  `,windy:u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":u`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function t(o,...i){let c=jc[o];if(typeof c==="function")return c(...i);return c||""}function ko(o){if(!o)return"";return Vc[o.toLowerCase()]||""}class ji extends Z{constructor(){super(...arguments);this.weather=null;this.sunData=null;this.config=null;this.entityAttributes=null}static styles=G`
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
  `;hasContent(){if(!this.weather||!this.config)return!1;return this.config.showHumidity&&this.weather.humidity!=null||this.config.showWind&&this.weather.windSpeed!=null||this.config.showSunriseSunset&&this.sunData?.hasSunData===!0}renderHumidity(){if(!this.config?.showHumidity||this.weather?.humidity==null)return w``;return w`
      <div class="info-item">
        <span class="info-icon">${t("humidity")}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `}renderSunrise(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunrise)return w``;return w`
      <div class="info-item">
        <span class="info-icon">${t("sunrise")}</span>
        <span>${Qo(this.sunData.sunrise,this.config.clockFormat,h.t("am"),h.t("pm"))}</span>
      </div>
    `}renderWind(){if(!this.config?.showWind||this.weather?.windSpeed==null)return w``;let o=this.entityAttributes||{},i=po(this.weather.windSpeed,o,this.config.windSpeedUnit),c=Ci(o,this.config.windSpeedUnit,h.t.bind(h)),l="";if(this.config.showWindGust&&this.weather.windGust)l=` / ${po(this.weather.windGust,o,this.config.windSpeedUnit)} ${c}`;let n=this.config.showWindDirection&&this.weather.windBearing!=null?Pi(this.weather.windBearing):t("wind");return w`
      <div class="info-item">
        <span class="info-icon">${n}</span>
        <span>${i} ${c}${l}</span>
      </div>
    `}renderSunset(){if(!this.config?.showSunriseSunset||!this.sunData?.hasSunData||!this.sunData.sunset)return w``;return w`
      <div class="info-item">
        <span class="info-icon">${t("sunset")}</span>
        <span>${Qo(this.sunData.sunset,this.config.clockFormat,h.t("am"),h.t("pm"))}</span>
      </div>
    `}render(){if(!this.hasContent())return w``;return w`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderSunrise()}
        ${this.renderWind()}
        ${this.renderSunset()}
      </div>
    `}}M([K({type:Object})],ji.prototype,"weather",void 0),M([K({type:Object})],ji.prototype,"sunData",void 0),M([K({type:Object})],ji.prototype,"config",void 0),M([K({type:Object})],ji.prototype,"entityAttributes",void 0);customElements.define("weather-details",ji);var fo=G`
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
`;class Vi extends Z{constructor(){super(...arguments);this.forecast=[]}static styles=fo;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=go(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(o){return Math.round(o.temperature??o.temp??o.native_temperature??0)}render(){if(this.forecast.length===0)return w``;return w`
      <div class="forecast-container">
        <div class="forecast-title">${h.t("forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((o)=>w`
            <div class="forecast-item">
              <div class="forecast-time">${pi(o.datetime)}</div>
              <div class="forecast-icon">${ko(o.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(o)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}M([K({type:Array})],Vi.prototype,"forecast",void 0);customElements.define("hourly-forecast",Vi);class Xi extends Z{constructor(){super(...arguments);this.forecast=[];this.lang="en"}static styles=fo;_cleanup=null;connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._cleanup=go(this.shadowRoot,".forecast-scroll")})}disconnectedCallback(){super.disconnectedCallback(),this._cleanup?.(),this._cleanup=null}getTemperature(o){return Math.round(o.temperature??o.temp??o.native_temperature??0)}render(){if(this.forecast.length===0)return w``;return w`
      <div class="forecast-container">
        <div class="forecast-title">${h.t("daily_forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((o)=>w`
            <div class="forecast-item">
              <div class="forecast-time">${Gi(o.datetime,this.lang)}</div>
              <div class="forecast-icon">${ko(o.condition||"sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(o)}°</div>
            </div>
          `)}
        </div>
      </div>
    `}}M([K({type:Array})],Xi.prototype,"forecast",void 0),M([K({type:String})],Xi.prototype,"lang",void 0);customElements.define("daily-forecast",Xi);class Ro extends Z{animationManager;forecastService;actionHandler;_testTimeOfDay;static get styles(){return zi}static getConfigElement(){return document.createElement("dynamic-weather-card-editor")}static getStubConfig(){return{type:"custom:dynamic-weather-card",entity:"weather.home",show_hourly_forecast:!0,hourly_forecast_hours:k.hourlyForecastHours,show_daily_forecast:!0,daily_forecast_days:k.dailyForecastDays}}constructor(){super();this.config={},this.animationManager=new jo(()=>this.getDrawParams()),this.forecastService=new Vo(()=>this.requestUpdate()),this.actionHandler=new Xo(()=>this.hass,()=>this.config,(o,i)=>this.fireEvent(o,i))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{let o=this.shadowRoot?.querySelector(".canvas-container");if(o)this.animationManager.setup(o)},100)})}disconnectedCallback(){super.disconnectedCallback(),this.animationManager.destroy(),this.forecastService.unsubscribe()}updated(o){if(super.updated(o),o.has("hass")||o.has("config")){if(this.animationManager.resize(),this.hass&&this.config.entity)this.forecastService.subscribe(this.hass,this.config.entity,this.config.showDailyForecast??!1)}let i=e({configLang:this.config?.language,hassLang:this.hass?.language});if(h.lang!==i)h.setLanguage(i)}getDrawParams(){if(!this.hass||!this.config.entity)return null;let o=Uo(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),i=this.hass.states[this.config.entity],c=No(i||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),l=this._testTimeOfDay||xo(c);return{condition:o.condition,timeOfDay:l}}getDetailsConfig(){return{showHumidity:this.config.showHumidity??!0,showWind:this.config.showWind??!0,showWindGust:this.config.showWindGust??!0,showWindDirection:this.config.showWindDirection??!0,showSunriseSunset:this.config.showSunriseSunset??!0,clockFormat:this.config.clockFormat??"24h",windSpeedUnit:this.config.windSpeedUnit??"ms"}}setConfig(o){if(!o.entity)throw Error("Please define a weather entity");let i=o.show_hourly_forecast??o.show_forecast;if(this.config={type:"custom:dynamic-weather-card",entity:o.entity,icons_path:o.icons_path,name:o.name,height:o.height||k.height,showFeelsLike:o.show_feels_like!==!1,showWind:o.show_wind!==!1,showWindGust:o.show_wind_gust!==!1,showWindDirection:o.show_wind_direction!==!1,showHumidity:o.show_humidity!==!1,showMinTemp:o.show_min_temp!==!1,showForecast:o.show_forecast===!0,showHourlyForecast:i===!0,showDailyForecast:o.show_daily_forecast===!0,hourlyForecastHours:o.hourly_forecast_hours??k.hourlyForecastHours,dailyForecastDays:o.daily_forecast_days??k.dailyForecastDays,showSunriseSunset:o.show_sunrise_sunset!==!1,showClock:o.show_clock===!0,clockPosition:o.clock_position||k.clockPosition,clockFormat:o.clock_format||k.clockFormat,overlayOpacity:o.overlay_opacity!==void 0?o.overlay_opacity:k.overlayOpacity,language:o.language||k.language,windSpeedUnit:o.wind_speed_unit||k.windSpeedUnit,sunriseEntity:o.sunrise_entity||null,sunsetEntity:o.sunset_entity||null,templowAttribute:o.templow_attribute||null,tapAction:o.tap_action||{action:"more-info"},holdAction:o.hold_action||{action:"none"},doubleTapAction:o.double_tap_action||{action:"none"}},this.config.language)h.setLanguage(this.config.language)}fireEvent(o,i={}){let c=new CustomEvent(o,{detail:i,bubbles:!0,composed:!0});this.dispatchEvent(c)}getCardSize(){return 1}render(){if(!this.hass)return w`<div>No Home Assistant connection</div>`;let o=Uo(this.hass,this.config.entity,this.config,this.forecastService.getHourlyData()),i=this.hass.states[this.config.entity],c=No(i,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),l=this._testTimeOfDay||xo(c),n=`weather-card ${l.type}`,_=this.config.height?`${this.config.height}px`:"200px",r=xi(l),d=r?`background: linear-gradient(135deg, rgb(${r.start.r}, ${r.start.g}, ${r.start.b}), rgb(${r.end.r}, ${r.end.g}, ${r.end.b}));`:"",g=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:k.overlayOpacity};`,s=this.config.showHourlyForecast?this.forecastService.getHourlyForecast(this.config.hourlyForecastHours??k.hourlyForecastHours,o):[],y=this.config.showDailyForecast?this.forecastService.getDailyForecast(this.config.dailyForecastDays??k.dailyForecastDays,o):[];return w`
      <ha-card
        @click=${(F)=>this.actionHandler.handleTap(F)}
        @pointerdown=${()=>this.actionHandler.handlePointerDown()}
        @pointerup=${(F)=>this.actionHandler.handlePointerUp(F)}
        @pointercancel=${(F)=>this.actionHandler.handlePointerUp(F)}
      >
        <div class="${n}" style="min-height: ${_}; ${d}; ${g} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name&&this.config.name.trim()!==""?w`
              <div class="header">
                <div class="location">${this.config.name}</div>
              </div>
            `:""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${h.t(o.condition)}</div>
                <div class="temperature">${o.temperature!=null?Math.round(o.temperature)+"°":h.t("no_data")}</div>
                ${this.config.showMinTemp?w`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${o.templow!=null?`${Math.round(o.templow)}°`:h.t("no_data")}</span>
                  </div>
                `:""}
                ${this.config.showFeelsLike?w`
                  <div class="feels-like">${h.t("feels_like")} ${o.apparentTemperature!=null?`${Math.round(o.apparentTemperature)}°`:h.t("no_data")}</div>
                `:""}
              </div>
              <weather-clock
                .format=${this.config.showClock&&this.config.clockPosition==="top"?this.config.clockFormat:null}
              ></weather-clock>
            </div>
            <div class="details ${this.config.showClock&&this.config.clockPosition==="details"?"details--clock":""}">
              <weather-details
                .weather=${o}
                .sunData=${c}
                .config=${this.getDetailsConfig()}
                .entityAttributes=${Yo(this.hass,this.config.entity)}
              ></weather-details>
              <weather-clock
                .format=${this.config.showClock&&this.config.clockPosition==="details"?this.config.clockFormat:null}
              ></weather-clock>
            </div>
            <hourly-forecast
              .forecast=${s}
            ></hourly-forecast>
            <daily-forecast
              .forecast=${y}
              .lang=${h.lang}
            ></daily-forecast>
          </div>
        </div>
      </ha-card>
    `}}M([K({type:Object})],Ro.prototype,"hass",void 0),M([K({type:Object})],Ro.prototype,"config",void 0);class Do extends Z{constructor(){super(...arguments);this._config={}}setConfig(o){this._config={name:"",height:k.height,show_feels_like:k.showFeelsLike,show_wind:k.showWind,show_wind_gust:k.showWindGust,show_wind_direction:k.showWindDirection,show_humidity:k.showHumidity,show_min_temp:k.showMinTemp,show_hourly_forecast:k.showHourlyForecast,hourly_forecast_hours:k.hourlyForecastHours,show_daily_forecast:k.showDailyForecast,daily_forecast_days:k.dailyForecastDays,show_sunrise_sunset:k.showSunriseSunset,show_clock:k.showClock,clock_position:k.clockPosition,clock_format:k.clockFormat,overlay_opacity:k.overlayOpacity,language:k.language,wind_speed_unit:k.windSpeedUnit,sunrise_entity:"",sunset_entity:"",...o}}updated(o){if(super.updated(o),o.has("hass")){let i=e({hassLang:this.hass?.language});if(h.lang!==i)h.setLanguage(i),this.requestUpdate()}}get _schema(){return[{name:"entity",required:!0,selector:{entity:{domain:["weather"]}}},{name:"name",selector:{text:{}}},{name:"height",selector:{number:{min:200,max:800,step:10,mode:"box"}}},{name:"show_feels_like",selector:{boolean:{}}},{name:"show_wind",selector:{boolean:{}}},{name:"show_wind_gust",selector:{boolean:{}}},{name:"show_wind_direction",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_min_temp",selector:{boolean:{}}},{name:"show_hourly_forecast",selector:{boolean:{}}},{name:"hourly_forecast_hours",selector:{number:{min:1,max:24,step:1,mode:"box"}}},{name:"show_daily_forecast",selector:{boolean:{}}},{name:"daily_forecast_days",selector:{number:{min:1,max:14,step:1,mode:"box"}}},{name:"show_sunrise_sunset",selector:{boolean:{}}},{name:"sunrise_entity",selector:{entity:{domain:["sensor"]}}},{name:"sunset_entity",selector:{entity:{domain:["sensor"]}}},{name:"show_clock",selector:{boolean:{}}},{name:"clock_position",selector:{select:{options:[{label:h.t("editor.clock_position_top"),value:"top"},{label:h.t("editor.clock_position_details"),value:"details"}]}}},{name:"clock_format",selector:{select:{options:[{label:h.t("editor.clock_format_24h"),value:"24h"},{label:h.t("editor.clock_format_12h"),value:"12h"}]}}},{name:"overlay_opacity",selector:{number:{min:0,max:1,step:0.05,mode:"box"}}},{name:"language",selector:{select:{options:[{label:h.t("editor.language_auto"),value:"auto"},{label:h.t("editor.language_en"),value:"en"},{label:h.t("editor.language_ru"),value:"ru"},{label:h.t("editor.language_de"),value:"de"},{label:h.t("editor.language_nl"),value:"nl"},{label:h.t("editor.language_fr"),value:"fr"},{label:h.t("editor.language_es"),value:"es"}]}}},{name:"wind_speed_unit",selector:{select:{options:[{label:h.t("editor.wind_speed_unit_ms"),value:"ms"},{label:h.t("editor.wind_speed_unit_kmh"),value:"kmh"}]}}}]}_computeLabel=(o)=>{let i=`editor.${o.name}`,c=h.t(i);return c===i?o.name:c};_valueChanged(o){let i=o.detail?.value;if(!i)return;this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){if(!this.hass)return w``;return w`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}M([K({attribute:!1})],Do.prototype,"hass",void 0),M([ho()],Do.prototype,"_config",void 0);var Yi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ui=(o)=>(...i)=>({["_$litDirective$"]:o,values:i});class Lo{constructor(o){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(o,i,c){this.__part=o,this._$parent=i,this.__attributeIndex=c}_$resolve(o,i){return this.update(o,i)}update(o,i){return this.render(...i)}}var Xc=!0,t_=Xc&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(o)=>o;var Ri=(o)=>o.strings===void 0;var Yc=!0,oo=(o,i)=>{let c=o._$disconnectableChildren;if(c===void 0)return!1;for(let l of c)l._$notifyDirectiveConnectionChanged?.(i,!1),oo(l,i);return!0},wo=(o)=>{let i,c;do{if((i=o._$parent)===void 0)break;c=i._$disconnectableChildren,c.delete(o),o=i}while(c?.size===0)},Di=(o)=>{for(let i;i=o._$parent;o=i){let c=i._$disconnectableChildren;if(c===void 0)i._$disconnectableChildren=c=new Set;else if(c.has(o))break;c.add(o),Dc(i)}};function Uc(o){if(this._$disconnectableChildren!==void 0)wo(this),this._$parent=o,Di(this);else this._$parent=o}function Rc(o,i=!1,c=0){let l=this._$committedValue,n=this._$disconnectableChildren;if(n===void 0||n.size===0)return;if(i){if(Array.isArray(l))for(let _=c;_<l.length;_++)oo(l[_],!1),wo(l[_]);else if(l!=null)oo(l,!1),wo(l)}else oo(this,o)}var Dc=(o)=>{if(o.type==Yi.CHILD)o._$notifyConnectionChanged??=Rc,o._$reparentDisconnectables??=Uc};class vo extends Lo{constructor(){super(...arguments);this._$disconnectableChildren=void 0}_$initialize(o,i,c){super._$initialize(o,i,c),Di(this),this.isConnected=o._$isConnected}["_$notifyDirectiveConnectionChanged"](o,i=!0){if(o!==this.isConnected)if(this.isConnected=o,o)this.reconnected?.();else this.disconnected?.();if(i)oo(this,o),wo(this)}setValue(o){if(Ri(this.__part))this.__part._$setValue(o,this);else{if(Yc&&this.__attributeIndex===void 0)throw Error("Expected this.__attributeIndex to be a number");let i=[...this.__part._$committedValue];i[this.__attributeIndex]=o,this.__part._$setValue(i,this,0)}}disconnected(){}reconnected(){}}class Li extends vo{_key="";_onLangChange=null;render(o){return this._key=o,h.t(o)}reconnected(){this._onLangChange=()=>{this.setValue(h.t(this._key))},window.addEventListener("language-changed",this._onLangChange)}disconnected(){if(this._onLangChange)window.removeEventListener("language-changed",this._onLangChange)}}var Lc=Ui(Li);try{customElements.define("dynamic-weather-card",Ro),customElements.define("dynamic-weather-card-editor",Do),console.log(`%cDynamic Weather Card %c${Ai}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let o={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(o)}catch(o){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",o)}export{Lc as t,e as resolveLanguage,h as i18n};
