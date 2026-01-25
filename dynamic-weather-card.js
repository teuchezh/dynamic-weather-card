var __legacyDecorateClassTS = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// node_modules/@lit/reactive-element/development/css-tag.js
var NODE_MODE = false;
var global = globalThis;
var supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var cssTagCache = new WeakMap;

class CSSResult {
  constructor(cssText, strings, safeToken) {
    this["_$cssResult$"] = true;
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  get styleSheet() {
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === undefined) {
      const cacheable = strings !== undefined && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === undefined) {
        (this._styleSheet = styleSheet = new CSSStyleSheet).replaceSync(this.cssText);
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
var textFromCSSResult = (value) => {
  if (value["_$cssResult$"] === true) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ` + `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` + `to ensure page security.`);
  }
};
var unsafeCSS = (value) => new CSSResult(typeof value === "string" ? value : String(value), undefined, constructionToken);
var css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
var adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  } else {
    for (const s of styles) {
      const style = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== undefined) {
        style.setAttribute("nonce", nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    }
  }
};
var cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
var getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === undefined ? (s) => s : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;

// node_modules/@lit/reactive-element/development/reactive-element.js
var { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf } = Object;
var NODE_MODE2 = false;
var global2 = globalThis;
if (NODE_MODE2) {
  global2.customElements ??= customElements;
}
var DEV_MODE = true;
var issueWarning;
var trustedTypes = global2.trustedTypes;
var emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
var polyfillSupport = DEV_MODE ? global2.reactiveElementPolyfillSupportDevMode : global2.reactiveElementPolyfillSupport;
if (DEV_MODE) {
  global2.litIssuedWarnings ??= new Set;
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!global2.litIssuedWarnings.has(warning) && !global2.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global2.litIssuedWarnings.add(warning);
    }
  };
  queueMicrotask(() => {
    issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
    if (global2.ShadyDOM?.inUse && polyfillSupport === undefined) {
      issueWarning("polyfill-support-missing", `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` + `the \`polyfill-support\` module has not been loaded.`);
    }
  });
}
var debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global2.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global2.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : undefined;
var JSCompiler_renameProperty = (prop, _obj) => prop;
var defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;
      case Object:
      case Array:
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute(value, type) {
    let fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        try {
          fromValue = JSON.parse(value);
        } catch (e) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
var notEqual = (value, old) => !is(value, old);
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  useDefault: false,
  hasChanged: notEqual
};
Symbol.metadata ??= Symbol("metadata");
global2.litPropertyMetadata ??= new WeakMap;

class ReactiveElement extends HTMLElement {
  static addInitializer(initializer) {
    this.__prepare();
    (this._initializers ??= []).push(initializer);
  }
  static get observedAttributes() {
    this.finalize();
    return this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()];
  }
  static createProperty(name, options = defaultPropertyDeclaration) {
    if (options.state) {
      options.attribute = false;
    }
    this.__prepare();
    if (this.prototype.hasOwnProperty(name)) {
      options = Object.create(options);
      options.wrapped = true;
    }
    this.elementProperties.set(name, options);
    if (!options.noAccessor) {
      const key = DEV_MODE ? Symbol.for(`${String(name)} (@property() cache)`) : Symbol();
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== undefined) {
        defineProperty(this.prototype, name, descriptor);
      }
    }
  }
  static getPropertyDescriptor(name, key, options) {
    const { get, set } = getOwnPropertyDescriptor(this.prototype, name) ?? {
      get() {
        return this[key];
      },
      set(v) {
        this[key] = v;
      }
    };
    if (DEV_MODE && get == null) {
      if ("value" in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
        throw new Error(`Field ${JSON.stringify(String(name))} on ` + `${this.name} was declared as a reactive property ` + `but it's actually declared as a value on the prototype. ` + `Usually this is due to using @property or @state on a method.`);
      }
      issueWarning("reactive-property-without-getter", `Field ${JSON.stringify(String(name))} on ` + `${this.name} was declared as a reactive property ` + `but it does not have a getter. This will be an error in a ` + `future version of Lit.`);
    }
    return {
      get,
      set(value) {
        const oldValue = get?.call(this);
        set?.call(this, value);
        this.requestUpdate(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(name) {
    return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
  }
  static __prepare() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("elementProperties", this))) {
      return;
    }
    const superCtor = getPrototypeOf(this);
    superCtor.finalize();
    if (superCtor._initializers !== undefined) {
      this._initializers = [...superCtor._initializers];
    }
    this.elementProperties = new Map(superCtor.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("finalized", this))) {
      return;
    }
    this.finalized = true;
    this.__prepare();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...getOwnPropertyNames(props),
        ...getOwnPropertySymbols(props)
      ];
      for (const p of propKeys) {
        this.createProperty(p, props[p]);
      }
    }
    const metadata = this[Symbol.metadata];
    if (metadata !== null) {
      const properties = litPropertyMetadata.get(metadata);
      if (properties !== undefined) {
        for (const [p, options] of properties) {
          this.elementProperties.set(p, options);
        }
      }
    }
    this.__attributeToPropertyMap = new Map;
    for (const [p, options] of this.elementProperties) {
      const attr = this.__attributeNameForProperty(p, options);
      if (attr !== undefined) {
        this.__attributeToPropertyMap.set(attr, p);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE) {
      if (this.hasOwnProperty("createProperty")) {
        issueWarning("no-override-create-property", "Overriding ReactiveElement.createProperty() is deprecated. " + "The override will not be called with standard decorators");
      }
      if (this.hasOwnProperty("getPropertyDescriptor")) {
        issueWarning("no-override-get-property-descriptor", "Overriding ReactiveElement.getPropertyDescriptor() is deprecated. " + "The override will not be called with standard decorators");
      }
    }
  }
  static finalizeStyles(styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
      const set = new Set(styles.flat(Infinity).reverse());
      for (const s of set) {
        elementStyles.unshift(getCompatibleStyle(s));
      }
    } else if (styles !== undefined) {
      elementStyles.push(getCompatibleStyle(styles));
    }
    return elementStyles;
  }
  static __attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? undefined : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : undefined;
  }
  constructor() {
    super();
    this.__instanceProperties = undefined;
    this.isUpdatePending = false;
    this.hasUpdated = false;
    this.__reflectingProperty = null;
    this.__initialize();
  }
  __initialize() {
    this.__updatePromise = new Promise((res) => this.enableUpdating = res);
    this._$changedProperties = new Map;
    this.__saveInstanceProperties();
    this.requestUpdate();
    this.constructor._initializers?.forEach((i) => i(this));
  }
  addController(controller) {
    (this.__controllers ??= new Set).add(controller);
    if (this.renderRoot !== undefined && this.isConnected) {
      controller.hostConnected?.();
    }
  }
  removeController(controller) {
    this.__controllers?.delete(controller);
  }
  __saveInstanceProperties() {
    const instanceProperties = new Map;
    const elementProperties = this.constructor.elementProperties;
    for (const p of elementProperties.keys()) {
      if (this.hasOwnProperty(p)) {
        instanceProperties.set(p, this[p]);
        delete this[p];
      }
    }
    if (instanceProperties.size > 0) {
      this.__instanceProperties = instanceProperties;
    }
  }
  createRenderRoot() {
    const renderRoot = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    adoptStyles(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot();
    this.enableUpdating(true);
    this.__controllers?.forEach((c) => c.hostConnected?.());
  }
  enableUpdating(_requestedUpdate) {}
  disconnectedCallback() {
    this.__controllers?.forEach((c) => c.hostDisconnected?.());
  }
  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }
  __propertyToAttribute(name, value) {
    const elemProperties = this.constructor.elementProperties;
    const options = elemProperties.get(name);
    const attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== undefined && options.reflect === true) {
      const converter = options.converter?.toAttribute !== undefined ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE && this.constructor.enabledWarnings.includes("migration") && attrValue === undefined) {
        issueWarning("undefined-attribute-value", `The attribute value for the ${name} property is ` + `undefined on element ${this.localName}. The attribute will be ` + `removed, but in the previous version of \`ReactiveElement\`, ` + `the attribute would not have changed.`);
      }
      this.__reflectingProperty = name;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this.__reflectingProperty = null;
    }
  }
  _$attributeToProperty(name, value) {
    const ctor = this.constructor;
    const propName = ctor.__attributeToPropertyMap.get(name);
    if (propName !== undefined && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === "function" ? { fromAttribute: options.converter } : options.converter?.fromAttribute !== undefined ? options.converter : defaultConverter;
      this.__reflectingProperty = propName;
      const convertedValue = converter.fromAttribute(value, options.type);
      this[propName] = convertedValue ?? this.__defaultValues?.get(propName) ?? convertedValue;
      this.__reflectingProperty = null;
    }
  }
  requestUpdate(name, oldValue, options, useNewValue = false, newValue) {
    if (name !== undefined) {
      if (DEV_MODE && name instanceof Event) {
        issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
      }
      const ctor = this.constructor;
      if (useNewValue === false) {
        newValue = this[name];
      }
      options ??= ctor.getPropertyOptions(name);
      const changed = (options.hasChanged ?? notEqual)(newValue, oldValue) || options.useDefault && options.reflect && newValue === this.__defaultValues?.get(name) && !this.hasAttribute(ctor.__attributeNameForProperty(name, options));
      if (changed) {
        this._$changeProperty(name, oldValue, options);
      } else {
        return;
      }
    }
    if (this.isUpdatePending === false) {
      this.__updatePromise = this.__enqueueUpdate();
    }
  }
  _$changeProperty(name, oldValue, { useDefault, reflect, wrapped }, initializeValue) {
    if (useDefault && !(this.__defaultValues ??= new Map).has(name)) {
      this.__defaultValues.set(name, initializeValue ?? oldValue ?? this[name]);
      if (wrapped !== true || initializeValue !== undefined) {
        return;
      }
    }
    if (!this._$changedProperties.has(name)) {
      if (!this.hasUpdated && !useDefault) {
        oldValue = undefined;
      }
      this._$changedProperties.set(name, oldValue);
    }
    if (reflect === true && this.__reflectingProperty !== name) {
      (this.__reflectingProperties ??= new Set).add(name);
    }
  }
  async __enqueueUpdate() {
    this.isUpdatePending = true;
    try {
      await this.__updatePromise;
    } catch (e) {
      Promise.reject(e);
    }
    const result = this.scheduleUpdate();
    if (result != null) {
      await result;
    }
    return !this.isUpdatePending;
  }
  scheduleUpdate() {
    const result = this.performUpdate();
    if (DEV_MODE && this.constructor.enabledWarnings.includes("async-perform-update") && typeof result?.then === "function") {
      issueWarning("async-perform-update", `Element ${this.localName} returned a Promise from performUpdate(). ` + `This behavior is deprecated and will be removed in a future ` + `version of ReactiveElement.`);
    }
    return result;
  }
  performUpdate() {
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent?.({ kind: "update" });
    if (!this.hasUpdated) {
      this.renderRoot ??= this.createRenderRoot();
      if (DEV_MODE) {
        const ctor = this.constructor;
        const shadowedProperties = [...ctor.elementProperties.keys()].filter((p) => this.hasOwnProperty(p) && (p in getPrototypeOf(this)));
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not ` + `trigger updates as expected because they are set using class ` + `fields: ${shadowedProperties.join(", ")}. ` + `Native class fields and some compiled output will overwrite ` + `accessors used for detecting changes. See ` + `https://lit.dev/msg/class-field-shadowing ` + `for more information.`);
        }
      }
      if (this.__instanceProperties) {
        for (const [p, value] of this.__instanceProperties) {
          this[p] = value;
        }
        this.__instanceProperties = undefined;
      }
      const elementProperties = this.constructor.elementProperties;
      if (elementProperties.size > 0) {
        for (const [p, options] of elementProperties) {
          const { wrapped } = options;
          const value = this[p];
          if (wrapped === true && !this._$changedProperties.has(p) && value !== undefined) {
            this._$changeProperty(p, undefined, options, value);
          }
        }
      }
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        this.__controllers?.forEach((c) => c.hostUpdate?.());
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e) {
      shouldUpdate = false;
      this.__markUpdated();
      throw e;
    }
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  willUpdate(_changedProperties) {}
  _$didUpdate(changedProperties) {
    this.__controllers?.forEach((c) => c.hostUpdated?.());
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.includes("change-in-update")) {
      issueWarning("change-in-update", `Element ${this.localName} scheduled an update ` + `(generally because a property was set) ` + `after an update completed, causing a new update to be scheduled. ` + `This is inefficient and should be avoided unless the next update ` + `can only be scheduled as a side effect of the previous update.`);
    }
  }
  __markUpdated() {
    this._$changedProperties = new Map;
    this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.__updatePromise;
  }
  shouldUpdate(_changedProperties) {
    return true;
  }
  update(_changedProperties) {
    this.__reflectingProperties &&= this.__reflectingProperties.forEach((p) => this.__propertyToAttribute(p, this[p]));
    this.__markUpdated();
  }
  updated(_changedProperties) {}
  firstUpdated(_changedProperties) {}
}
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = { mode: "open" };
ReactiveElement[JSCompiler_renameProperty("elementProperties", ReactiveElement)] = new Map;
ReactiveElement[JSCompiler_renameProperty("finalized", ReactiveElement)] = new Map;
polyfillSupport?.({ ReactiveElement });
if (DEV_MODE) {
  ReactiveElement.enabledWarnings = [
    "change-in-update",
    "async-perform-update"
  ];
  const ensureOwnWarnings = function(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings", ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function(warning) {
    ensureOwnWarnings(this);
    if (!this.enabledWarnings.includes(warning)) {
      this.enabledWarnings.push(warning);
    }
  };
  ReactiveElement.disableWarning = function(warning) {
    ensureOwnWarnings(this);
    const i = this.enabledWarnings.indexOf(warning);
    if (i >= 0) {
      this.enabledWarnings.splice(i, 1);
    }
  };
}
(global2.reactiveElementVersions ??= []).push("2.1.2");
if (DEV_MODE && global2.reactiveElementVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
  });
}

// node_modules/lit-html/development/lit-html.js
var DEV_MODE2 = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE3 = false;
var global3 = globalThis;
var debugLogEvent2 = DEV_MODE2 ? (event) => {
  const shouldEmit = global3.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global3.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : undefined;
var debugLogRenderId = 0;
var issueWarning2;
if (DEV_MODE2) {
  global3.litIssuedWarnings ??= new Set;
  issueWarning2 = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global3.litIssuedWarnings.has(warning) && !global3.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global3.litIssuedWarnings.add(warning);
    }
  };
  queueMicrotask(() => {
    issueWarning2("dev-mode", `Lit is in dev mode. Not recommended for production!`);
  });
}
var wrap = ENABLE_SHADYDOM_NOPATCH && global3.ShadyDOM?.inUse && global3.ShadyDOM?.noPatch === true ? global3.ShadyDOM.wrap : (node) => node;
var trustedTypes2 = global3.trustedTypes;
var policy = trustedTypes2 ? trustedTypes2.createPolicy("lit-html", {
  createHTML: (s) => s
}) : undefined;
var identityFunction = (value) => value;
var noopSanitizer = (_node, _name, _type) => identityFunction;
var setSanitizer = (newSanitizer) => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy.` + ` setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
};
var boundAttributeSuffix = "$lit$";
var marker = `lit$${Math.random().toFixed(9).slice(2)}$`;
var markerMatch = "?" + marker;
var nodeMarker = `<${markerMatch}>`;
var d = NODE_MODE3 && global3.document === undefined ? {
  createTreeWalker() {
    return {};
  }
} : document;
var createMarker = () => d.createComment("");
var isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
var isArray = Array.isArray;
var isIterable = (value) => isArray(value) || typeof value?.[Symbol.iterator] === "function";
var SPACE_CHAR = `[ 	
\f\r]`;
var ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`;
var NAME_CHAR = `[^\\s"'>=/]`;
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
var comment2EndRegex = />/g;
var tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g");
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
var rawTextElement = /^(?:script|style|textarea|title)$/i;
var HTML_RESULT = 1;
var SVG_RESULT = 2;
var MATHML_RESULT = 3;
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
var tag = (type) => (strings, ...values) => {
  if (DEV_MODE2 && strings.some((s) => s === undefined)) {
    console.warn(`Some template strings are undefined.
` + "This is probably caused by illegal octal escape sequences.");
  }
  if (DEV_MODE2) {
    if (values.some((val) => val?.["_$litStatic$"])) {
      issueWarning2("", `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
` + `Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
    }
  }
  return {
    ["_$litType$"]: type,
    strings,
    values
  };
};
var html = tag(HTML_RESULT);
var svg = tag(SVG_RESULT);
var mathml = tag(MATHML_RESULT);
var noChange = Symbol.for("lit-noChange");
var nothing = Symbol.for("lit-nothing");
var templateCache = new WeakMap;
var walker = d.createTreeWalker(d, 129);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    if (DEV_MODE2) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, `
`);
    }
    throw new Error(message);
  }
  return policy !== undefined ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml = (strings, type) => {
  const l = strings.length - 1;
  const attrNames = [];
  let html2 = type === SVG_RESULT ? "<svg>" : type === MATHML_RESULT ? "<math>" : "";
  let rawTextEndRegex;
  let regex = textEndRegex;
  for (let i = 0;i < l; i++) {
    const s = strings[i];
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    while (lastIndex < s.length) {
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === "!--") {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== undefined) {
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== undefined) {
          if (rawTextElement.test(match[TAG_NAME])) {
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g");
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== undefined) {
          if (DEV_MODE2) {
            throw new Error("Bindings in tag names are not supported. Please use static templates instead. " + "See https://lit.dev/docs/templates/expressions/#static-expressions");
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === ">") {
          regex = rawTextEndRegex ?? textEndRegex;
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === undefined) {
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === undefined ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        regex = tagEndRegex;
        rawTextEndRegex = undefined;
      }
    }
    if (DEV_MODE2) {
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    }
    const end = regex === tagEndRegex && strings[i + 1].startsWith("/>") ? " " : "";
    html2 += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
  }
  const htmlResult = html2 + (strings[l] || "<?>") + (type === SVG_RESULT ? "</svg>" : type === MATHML_RESULT ? "</math>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};

class Template {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    const [html2, attrNames] = getTemplateHtml(strings, type);
    this.el = Template.createElement(html2, options);
    walker.currentNode = this.el.content;
    if (type === SVG_RESULT || type === MATHML_RESULT) {
      const wrapper = this.el.content.firstChild;
      wrapper.replaceWith(...wrapper.childNodes);
    }
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE2) {
          const tag2 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag2) && node.innerHTML.includes(marker)) {
            const m = `Expressions are not supported inside \`${tag2}\` ` + `elements. See https://lit.dev/msg/expression-in-${tag2} for more ` + `information.`;
            if (tag2 === "template") {
              throw new Error(m);
            } else
              issueWarning2("", m);
          }
        }
        if (node.hasAttributes()) {
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix)) {
              const realName = attrNames[attrNameIndex++];
              const value = node.getAttribute(name);
              const statics = value.split(marker);
              const m = /([.?@])?(.*)/.exec(realName);
              parts.push({
                type: ATTRIBUTE_PART,
                index: nodeIndex,
                name: m[2],
                strings: statics,
                ctor: m[1] === "." ? PropertyPart : m[1] === "?" ? BooleanAttributePart : m[1] === "@" ? EventPart : AttributePart
              });
              node.removeAttribute(name);
            } else if (name.startsWith(marker)) {
              parts.push({
                type: ELEMENT_PART,
                index: nodeIndex
              });
              node.removeAttribute(name);
            }
          }
        }
        if (rawTextElement.test(node.tagName)) {
          const strings2 = node.textContent.split(marker);
          const lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes2 ? trustedTypes2.emptyScript : "";
            for (let i = 0;i < lastIndex; i++) {
              node.append(strings2[i], createMarker());
              walker.nextNode();
              parts.push({ type: CHILD_PART, index: ++nodeIndex });
            }
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;
        if (data === markerMatch) {
          parts.push({ type: CHILD_PART, index: nodeIndex });
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            parts.push({ type: COMMENT_PART, index: nodeIndex });
            i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    if (DEV_MODE2) {
      if (attrNames.length !== attrNameIndex) {
        throw new Error(`Detected duplicate attribute bindings. This occurs if your template ` + `has duplicate attributes on an element tag. For example ` + `"<input ?disabled=\${true} ?disabled=\${false}>" contains a ` + `duplicate "disabled" attribute. The error was detected in ` + `the following template: 
` + "`" + strings.join("${...}") + "`");
      }
    }
    debugLogEvent2 && debugLogEvent2({
      kind: "template prep",
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  static createElement(html2, _options) {
    const el = d.createElement("template");
    el.innerHTML = html2;
    return el;
  }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== undefined ? parent.__directives?.[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? undefined : value["_$litDirective$"];
  if (currentDirective?.constructor !== nextDirectiveConstructor) {
    currentDirective?.["_$notifyDirectiveConnectionChanged"]?.(false);
    if (nextDirectiveConstructor === undefined) {
      currentDirective = undefined;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== undefined) {
      (parent.__directives ??= [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== undefined) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}

class TemplateInstance {
  constructor(template, parent) {
    this._$parts = [];
    this._$disconnectableChildren = undefined;
    this._$template = template;
    this._$parent = parent;
  }
  get parentNode() {
    return this._$parent.parentNode;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _clone(options) {
    const { el: { content }, parts } = this._$template;
    const fragment = (options?.creationScope ?? d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== undefined) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== templatePart?.index) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i = 0;
    for (const part of this._$parts) {
      if (part !== undefined) {
        debugLogEvent2 && debugLogEvent2({
          kind: "set part",
          part,
          value: values[i],
          valueIndex: i,
          values,
          templateInstance: this
        });
        if (part.strings !== undefined) {
          part._$setValue(values, part, i);
          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }
      i++;
    }
  }
}

class ChildPart {
  get _$isConnected() {
    return this._$parent?._$isConnected ?? this.__isConnected;
  }
  constructor(startNode, endNode, parent, options) {
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = undefined;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = options?.isConnected ?? true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = undefined;
    }
  }
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== undefined && parentNode?.nodeType === 11) {
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  get startNode() {
    return this._$startNode;
  }
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    if (DEV_MODE2 && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing || value == null || value === "") {
        if (this._$committedValue !== nothing) {
          debugLogEvent2 && debugLogEvent2({
            kind: "commit nothing to child",
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
    } else if (value["_$litType$"] !== undefined) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== undefined) {
      if (DEV_MODE2 && this.options?.host === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself ` + `(commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = this._$startNode.parentNode?.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          if (DEV_MODE2) {
            if (parentNodeName === "STYLE") {
              message = `Lit does not support binding inside style nodes. ` + `This is a security risk, as style injection attacks can ` + `exfiltrate data and spoof UIs. ` + `Consider instead using css\`...\` literals ` + `to compose styles, and do dynamic styling with ` + `css custom properties, ::parts, <slot>s, ` + `and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. ` + `This is a security risk, as it could allow arbitrary ` + `code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit node",
        start: this._$startNode,
        parent: this._$parent,
        value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(node, "data", "property");
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit text",
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode("");
        this._commitNode(textNode);
        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(textNode, "data", "property");
        }
        value = this._textSanitizer(value);
        debugLogEvent2 && debugLogEvent2({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent2 && debugLogEvent2({
          kind: "commit text",
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    const { values, ["_$litType$"]: type } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === undefined && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (this._$committedValue?._$template === template) {
      debugLogEvent2 && debugLogEvent2({
        kind: "template updating",
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent2 && debugLogEvent2({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent2 && debugLogEvent2({
        kind: "template instantiated and updated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === undefined) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      itemParts.length = partIndex;
    }
  }
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    this._$notifyConnectionChanged?.(false, true, from);
    while (start !== this._$endNode) {
      const n = wrap(start).nextSibling;
      wrap(start).remove();
      start = n;
    }
  }
  setConnected(isConnected) {
    if (this._$parent === undefined) {
      this.__isConnected = isConnected;
      this._$notifyConnectionChanged?.(isConnected);
    } else if (DEV_MODE2) {
      throw new Error("part.setConnected() may only be called on a " + "RootPart returned from render().");
    }
  }
}

class AttributePart {
  get tagName() {
    return this.element.tagName;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = undefined;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== "" || strings[1] !== "") {
      this._$committedValue = new Array(strings.length - 1).fill(new String);
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = undefined;
    }
  }
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    let change = false;
    if (strings === undefined) {
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      const values = value;
      value = strings[0];
      let i, v;
      for (i = 0;i < strings.length - 1; i++) {
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
        if (v === noChange) {
          v = this._$committedValue[i];
        }
        change ||= !isPrimitive(v) || v !== this._$committedValue[i];
        if (v === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v ?? "") + strings[i + 1];
        }
        this._$committedValue[i] = v;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === undefined) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "attribute");
        }
        value = this._sanitizer(value ?? "");
      }
      debugLogEvent2 && debugLogEvent2({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value ?? "");
    }
  }
}

class PropertyPart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === undefined) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "property");
      }
      value = this._sanitizer(value);
    }
    debugLogEvent2 && debugLogEvent2({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing ? undefined : value;
  }
}

class BooleanAttributePart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  _commitValue(value) {
    debugLogEvent2 && debugLogEvent2({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
  }
}

class EventPart extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE2 && this.strings !== undefined) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` + "invalid content. Event listeners in templates must have exactly " + "one expression and no surrounding text.");
    }
  }
  _$setValue(newListener, directiveParent = this) {
    newListener = resolveDirective(this, newListener, directiveParent, 0) ?? nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent2 && debugLogEvent2({
      kind: "commit event listener",
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call(this.options?.host ?? this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
}

class ElementPart {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    this._$disconnectableChildren = undefined;
    this._$parent = parent;
    this.options = options;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent2 && debugLogEvent2({
      kind: "commit to element binding",
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
}
var polyfillSupport2 = DEV_MODE2 ? global3.litHtmlPolyfillSupportDevMode : global3.litHtmlPolyfillSupport;
polyfillSupport2?.(Template, ChildPart);
(global3.litHtmlVersions ??= []).push("3.3.2");
if (DEV_MODE2 && global3.litHtmlVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning2("multiple-versions", `Multiple versions of Lit loaded. ` + `Loading multiple versions is not recommended.`);
  });
}
var render = (value, container, options) => {
  if (DEV_MODE2 && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE2 ? debugLogRenderId++ : 0;
  const partOwnerNode = options?.renderBefore ?? container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent2 && debugLogEvent2({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === undefined) {
    const endNode = options?.renderBefore ?? null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options ?? {});
  }
  part._$setValue(value);
  debugLogEvent2 && debugLogEvent2({
    kind: "end render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE2) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

// node_modules/lit-element/development/lit-element.js
var JSCompiler_renameProperty2 = (prop, _obj) => prop;
var DEV_MODE3 = true;
var global4 = globalThis;
var issueWarning3;
if (DEV_MODE3) {
  global4.litIssuedWarnings ??= new Set;
  issueWarning3 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!global4.litIssuedWarnings.has(warning) && !global4.litIssuedWarnings.has(code)) {
      console.warn(warning);
      global4.litIssuedWarnings.add(warning);
    }
  };
}

class LitElement extends ReactiveElement {
  constructor() {
    super(...arguments);
    this.renderOptions = { host: this };
    this.__childPart = undefined;
  }
  createRenderRoot() {
    const renderRoot = super.createRenderRoot();
    this.renderOptions.renderBefore ??= renderRoot.firstChild;
    return renderRoot;
  }
  update(changedProperties) {
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = render(value, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback();
    this.__childPart?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__childPart?.setConnected(false);
  }
  render() {
    return noChange;
  }
}
LitElement["_$litElement$"] = true;
LitElement[JSCompiler_renameProperty2("finalized", LitElement)] = true;
global4.litElementHydrateSupport?.({ LitElement });
var polyfillSupport3 = DEV_MODE3 ? global4.litElementPolyfillSupportDevMode : global4.litElementPolyfillSupport;
polyfillSupport3?.({ LitElement });
(global4.litElementVersions ??= []).push("4.2.2");
if (DEV_MODE3 && global4.litElementVersions.length > 1) {
  queueMicrotask(() => {
    issueWarning3("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
  });
}
// node_modules/@lit/reactive-element/development/decorators/property.js
var DEV_MODE4 = true;
var issueWarning4;
if (DEV_MODE4) {
  globalThis.litIssuedWarnings ??= new Set;
  issueWarning4 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!globalThis.litIssuedWarnings.has(warning) && !globalThis.litIssuedWarnings.has(code)) {
      console.warn(warning);
      globalThis.litIssuedWarnings.add(warning);
    }
  };
}
var legacyProperty = (options, proto, name) => {
  const hasOwnProperty = proto.hasOwnProperty(name);
  proto.constructor.createProperty(name, options);
  return hasOwnProperty ? Object.getOwnPropertyDescriptor(proto, name) : undefined;
};
var defaultPropertyDeclaration2 = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var standardProperty = (options = defaultPropertyDeclaration2, target, context) => {
  const { kind, metadata } = context;
  if (DEV_MODE4 && metadata == null) {
    issueWarning4("missing-class-metadata", `The class ${target} is missing decorator metadata. This ` + `could mean that you're using a compiler that supports decorators ` + `but doesn't support decorator metadata, such as TypeScript 5.1. ` + `Please update your compiler.`);
  }
  let properties = globalThis.litPropertyMetadata.get(metadata);
  if (properties === undefined) {
    globalThis.litPropertyMetadata.set(metadata, properties = new Map);
  }
  if (kind === "setter") {
    options = Object.create(options);
    options.wrapped = true;
  }
  properties.set(context.name, options);
  if (kind === "accessor") {
    const { name } = context;
    return {
      set(v) {
        const oldValue = target.get.call(this);
        target.set.call(this, v);
        this.requestUpdate(name, oldValue, options, true, v);
      },
      init(v) {
        if (v !== undefined) {
          this._$changeProperty(name, undefined, options, v);
        }
        return v;
      }
    };
  } else if (kind === "setter") {
    const { name } = context;
    return function(value) {
      const oldValue = this[name];
      target.call(this, value);
      this.requestUpdate(name, oldValue, options, true, value);
    };
  }
  throw new Error(`Unsupported decorator location: ${kind}`);
};
function property(options) {
  return (protoOrTarget, nameOrContext) => {
    return typeof nameOrContext === "object" ? standardProperty(options, protoOrTarget, nameOrContext) : legacyProperty(options, protoOrTarget, nameOrContext);
  };
}
// node_modules/@lit/reactive-element/development/decorators/state.js
function state(options) {
  return property({
    ...options,
    state: true,
    attribute: false
  });
}
// node_modules/@lit/reactive-element/development/decorators/query.js
var DEV_MODE5 = true;
var issueWarning5;
if (DEV_MODE5) {
  globalThis.litIssuedWarnings ??= new Set;
  issueWarning5 = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!globalThis.litIssuedWarnings.has(warning) && !globalThis.litIssuedWarnings.has(code)) {
      console.warn(warning);
      globalThis.litIssuedWarnings.add(warning);
    }
  };
}
// src/constants.ts
var VERSION = "dev";
var TIME_THRESHOLDS = {
  SUNRISE_START: 360,
  SUNRISE_END: 480,
  DAY_END: 1080,
  SUNSET_END: 1200
};
var TEMPLOW_ATTRIBUTES = [
  "templow",
  "temperature_low",
  "temp_low",
  "min_temp",
  "yandex_pogoda_minimal_forecast_temperature"
];
var DEFAULT_CONFIG = {
  showFeelsLike: true,
  showWind: false,
  showWindGust: false,
  showWindDirection: false,
  showHumidity: false,
  showMinTemp: true,
  showForecast: false,
  showHourlyForecast: false,
  showDailyForecast: false,
  hourlyForecastHours: 5,
  dailyForecastDays: 5,
  showSunriseSunset: false,
  showClock: false,
  clockPosition: "top",
  clockFormat: "24h",
  overlayOpacity: 0.1,
  language: "auto",
  height: null,
  windSpeedUnit: "ms"
};

// src/internationalization/locales/ru/translation.ts
var translation = {
  sunny: "Солнечно",
  clear: "Ясно",
  overcast: "Пасмурно",
  cloudy: "Облачно",
  partlycloudy: "Переменная облачность",
  rainy: "Дождь",
  rain: "Дождь",
  snowy: "Снег",
  snow: "Снег",
  foggy: "Туман",
  fog: "Туман",
  lightning: "Гроза",
  "lightning-rainy": "Гроза с дождем",
  pouring: "Сильный дождь",
  "snowy-rainy": "Мокрый снег",
  hail: "Град",
  "clear-night": "Ясная ночь",
  feels_like: "Ощущается как",
  forecast_title: "Прогноз на сегодня",
  daily_forecast_title: "Ежедневный прогноз",
  no_data: "Нет данных",
  forecast_unavailable: "Прогноз недоступен",
  weather: "Погода",
  language: "Language",
  wind_unit_kmh: "км/ч",
  wind_unit_ms: "м/с",
  wind_unit_mph: "миль/ч",
  wind_unit_knots: "узлы",
  wind_unit_fts: "фут/с",
  show_clock: "Показывать часы",
  am: "ДП",
  pm: "ПП",
  editor: {
    entity: "Погодная сущность",
    name: "Название карточки",
    height: "Высота карточки",
    show_feels_like: "Показывать ощущаемую температуру",
    show_wind: "Показывать скорость ветра",
    show_wind_gust: "Показывать порывы ветра",
    show_wind_direction: "Показывать направление ветра",
    show_humidity: "Показывать влажность",
    show_min_temp: "Показывать минимальную температуру",
    show_hourly_forecast: "Показывать почасовой прогноз",
    hourly_forecast_hours: "Часы прогноза",
    show_daily_forecast: "Показывать дневной прогноз",
    daily_forecast_days: "Дни прогноза",
    show_sunrise_sunset: "Показывать восход/закат",
    sunrise_entity: "Сущность восхода",
    sunset_entity: "Сущность заката",
    show_clock: "Показывать часы",
    clock_position: "Позиция часов",
    clock_position_top: "Вверху",
    clock_position_details: "Детали",
    clock_format: "Формат времени",
    clock_format_12h: "12-часовой (AM/PM)",
    clock_format_24h: "24-часовой",
    overlay_opacity: "Прозрачность подложки",
    language: "Язык",
    language_auto: "Авто",
    language_en: "Английский",
    language_ru: "Русский",
    language_de: "Немецкий",
    language_nl: "Нидерландский",
    language_fr: "Французский",
    language_es: "Испанский",
    wind_speed_unit: "Единицы скорости ветра",
    wind_speed_unit_ms: "м/с",
    wind_speed_unit_kmh: "км/ч"
  },
  demo: {
    pageTitle: "Динамическая карточка погоды",
    pageSubtitle: "Интерактивная демонстрация и настройка",
    livePreview: "Предпросмотр",
    configuration: "Конфигурация",
    quickPresets: "Быстрые пресеты",
    sunnyDay: "Солнечный день",
    rainy: "Дождь",
    snowy: "Снег",
    clearNight: "Ясная ночь",
    weatherCondition: "Погодные условия",
    condition: "Состояние",
    temperature: "Температура",
    humidity: "Влажность (%)",
    windSpeed: "Скорость ветра",
    timeOfDay: "Время суток",
    timeMode: "Режим времени",
    autoTime: "Авто (текущее время)",
    manualControl: "Ручное управление",
    sunrise: "Восход",
    day: "День",
    sunset: "Закат",
    night: "Ночь",
    currentTime: "Текущее время",
    displayOptions: "Опции отображения",
    cardName: "Название карточки",
    height: "Высота (px)",
    feelsLike: "Ощущается как",
    minTemp: "Мин. температура",
    windDirection: "Направление ветра",
    windGust: "Порывы ветра",
    hourlyForecast: "Почасовой прогноз",
    dailyForecast: "Ежедневный прогноз",
    sunriseSunset: "Восход/Закат",
    showClock: "Часы",
    clockPosition: "Позиция часов",
    clockPositionTop: "Вверху справа",
    clockPositionDetails: "В строке деталей",
    clockFormat: "Формат часов",
    clockFormat12h: "12-часовой (AM/PM)",
    clockFormat24h: "24-часовой",
    overlayOpacity: "Прозрачность подложки (0-1)",
    windSpeedUnit: "Единицы скорости ветра",
    dailyForecastDays: "Дни прогноза",
    hourlyForecastHours: "Часы прогноза",
    updateCard: "Обновить карточку",
    startDemo: "Запустить демо",
    stopDemo: "Остановить демо",
    madeWith: "Сделано с любовью для Home Assistant",
    loading: "Загрузка карточки...",
    errorTitle: "Не удалось загрузить карточку",
    errorDetails: "Проверьте консоль браузера (F12) для деталей",
    errorServer: "Убедитесь, что файл открыт через локальный сервер (не file://)",
    placeholderEmpty: "Оставьте пустым, чтобы скрыть",
    weatherConditions: {
      sunny: "Солнечно",
      clear: "Ясно",
      clearNight: "Ясная ночь",
      partlyCloudy: "Переменная облачность",
      cloudy: "Облачно",
      rainy: "Дождь",
      pouring: "Ливень",
      snowy: "Снег",
      sleet: "Мокрый снег",
      hail: "Град",
      foggy: "Туман",
      lightning: "Гроза",
      thunderstorm: "Гроза с дождем"
    },
    language: {
      title: "Язык",
      english: "English",
      russian: "Русский",
      french: "Français",
      german: "Deutsch",
      dutch: "Nederlands",
      spanish: "Español",
      italian: "Italiano"
    }
  }
};
var translation_default = translation;

// src/internationalization/locales/de/translation.ts
var translation2 = {
  sunny: "Sonnig",
  clear: "Klar",
  overcast: "Bedeckt",
  cloudy: "Bewölkt",
  partlycloudy: "Teilweise bewölkt",
  rainy: "Regnerisch",
  rain: "Regen",
  snowy: "Schneefall",
  snow: "Schnee",
  foggy: "Nebelig",
  fog: "Nebel",
  lightning: "Blitz",
  "lightning-rainy": "Gewitter",
  pouring: "Starkregen",
  "snowy-rainy": "Schneeregen",
  hail: "Hagel",
  "clear-night": "Klare Nacht",
  feels_like: "Gefühlt",
  forecast_title: "Heutige Vorhersage",
  daily_forecast_title: "Tagesvorhersage",
  no_data: "Keine Daten",
  forecast_unavailable: "Vorhersage nicht verfügbar",
  weather: "Wetter",
  language: "Sprache",
  wind_unit_kmh: "km/h",
  wind_unit_ms: "m/s",
  wind_unit_mph: "mph",
  wind_unit_knots: "Knoten",
  wind_unit_fts: "ft/s",
  show_clock: "Aktuelle Uhrzeit anzeigen",
  am: "AM",
  pm: "PM",
  editor: {
    entity: "Wetter-Entität",
    name: "Kartentitel",
    height: "Kartenhöhe",
    show_feels_like: "Gefühlte Temperatur anzeigen",
    show_wind: "Windgeschwindigkeit anzeigen",
    show_wind_gust: "Windböen anzeigen",
    show_wind_direction: "Windrichtung anzeigen",
    show_humidity: "Luftfeuchtigkeit anzeigen",
    show_min_temp: "Mindesttemperatur anzeigen",
    show_hourly_forecast: "Stundenprognose anzeigen",
    hourly_forecast_hours: "Stunden der Prognose",
    show_daily_forecast: "Tagesprognose anzeigen",
    daily_forecast_days: "Tage der Prognose",
    show_sunrise_sunset: "Sonnenaufgang/Sonnenuntergang anzeigen",
    sunrise_entity: "Sonnenaufgang-Entität",
    sunset_entity: "Sonnenuntergang-Entität",
    show_clock: "Uhr anzeigen",
    clock_position: "Uhrposition",
    clock_position_top: "Oben",
    clock_position_details: "Details",
    clock_format: "Zeitformat",
    clock_format_12h: "12-Stunden (AM/PM)",
    clock_format_24h: "24-Stunden",
    overlay_opacity: "Überlagerungs-Transparenz",
    language: "Sprache",
    language_auto: "Automatisch",
    language_en: "Englisch",
    language_ru: "Russisch",
    language_de: "Deutsch",
    language_nl: "Niederländisch",
    language_fr: "Französisch",
    language_es: "Spanisch",
    wind_speed_unit: "Einheit der Windgeschwindigkeit",
    wind_speed_unit_ms: "m/s",
    wind_speed_unit_kmh: "km/h"
  },
  demo: {
    pageTitle: "Dynamische Wetterkarte",
    pageSubtitle: "Interaktive Demo & Konfiguration",
    livePreview: "Live-Vorschau",
    configuration: "Konfiguration",
    quickPresets: "Schnellvorlagen",
    sunnyDay: "Sonniger Tag",
    rainy: "Regnerisch",
    snowy: "Schnee",
    clearNight: "Klare Nacht",
    weatherCondition: "Wetterbedingungen",
    condition: "Zustand",
    temperature: "Temperatur",
    humidity: "Luftfeuchtigkeit (%)",
    windSpeed: "Windgeschwindigkeit",
    timeOfDay: "Tageszeit",
    timeMode: "Zeitmodus",
    autoTime: "Automatisch (Aktuelle Zeit)",
    manualControl: "Manuelle Steuerung",
    sunrise: "Sonnenaufgang",
    day: "Tag",
    sunset: "Sonnenuntergang",
    night: "Nacht",
    currentTime: "Aktuelle Zeit",
    displayOptions: "Anzeigeoptionen",
    cardName: "Kartenname",
    height: "Höhe (px)",
    feelsLike: "Gefühlte Temperatur",
    minTemp: "Mindesttemperatur",
    windDirection: "Windrichtung",
    windGust: "Windböen",
    hourlyForecast: "Stündliche Vorhersage",
    dailyForecast: "Tägliche Vorhersage",
    sunriseSunset: "Sonnenaufgang / Sonnenuntergang",
    showClock: "Uhr",
    clockPosition: "Uhrposition",
    clockPositionTop: "Oben rechts",
    clockPositionDetails: "Detailzeile",
    clockFormat: "Uhrzeitformat",
    clockFormat12h: "12-Stunden (AM/PM)",
    clockFormat24h: "24-Stunden",
    overlayOpacity: "Überlagerungs-Transparenz (0-1)",
    windSpeedUnit: "Windgeschwindigkeitseinheit",
    dailyForecastDays: "Tage der Prognose",
    hourlyForecastHours: "Stunden der Prognose",
    updateCard: "Karte aktualisieren",
    startDemo: "Demo starten",
    stopDemo: "Demo stoppen",
    madeWith: "Mit Liebe für Home Assistant gemacht",
    loading: "Karte wird geladen...",
    errorTitle: "Karte konnte nicht geladen werden",
    errorDetails: "Überprüfe die Browser-Konsole (F12) für Details",
    errorServer: "Stelle sicher, dass die Datei über einen lokalen Server geladen wird (nicht file://)",
    placeholderEmpty: "Leer lassen, um auszublenden",
    weatherConditions: {
      sunny: "Sonnig",
      clear: "Klar",
      clearNight: "Klare Nacht",
      partlyCloudy: "Teilweise bewölkt",
      cloudy: "Bewölkt",
      rainy: "Regen",
      pouring: "Starkregen",
      snowy: "Schnee",
      sleet: "Schneeregen",
      hail: "Hagel",
      foggy: "Nebel",
      lightning: "Blitz",
      thunderstorm: "Gewitter"
    },
    language: {
      title: "Sprache",
      english: "English",
      russian: "Русский",
      french: "Français",
      german: "Deutsch",
      dutch: "Nederlands",
      spanish: "Español",
      italian: "Italiano"
    }
  }
};
var translation_default2 = translation2;

// src/internationalization/locales/nl/translation.ts
var translation3 = {
  sunny: "Zonnig",
  clear: "Helder",
  overcast: "Bewolkt",
  cloudy: "Bewolkt",
  partlycloudy: "Gedeeltelijk bewolkt",
  rainy: "Regenachtig",
  rain: "Regen",
  snowy: "Sneeuwachtig",
  snow: "Sneeuw",
  foggy: "Mistig",
  fog: "Mist",
  lightning: "Bliksem",
  "lightning-rainy": "Onweersbui",
  pouring: "Zware regen",
  "snowy-rainy": "Natte sneeuw",
  hail: "Hagel",
  "clear-night": "Heldere nacht",
  feels_like: "Gevoelstemperatuur",
  forecast_title: "Voorspelling van vandaag",
  daily_forecast_title: "Dagelijkse voorspelling",
  no_data: "Geen gegevens",
  forecast_unavailable: "Voorspelling niet beschikbaar",
  weather: "Weer",
  language: "Taal",
  wind_unit_kmh: "km/u",
  wind_unit_ms: "m/s",
  wind_unit_mph: "mph",
  wind_unit_knots: "knots",
  wind_unit_fts: "ft/s",
  show_clock: "Huidige tijd weergeven",
  am: "AM",
  pm: "PM",
  editor: {
    entity: "Weer-entiteit",
    name: "Kaarttitel",
    height: "Kaart hoogte",
    show_feels_like: "Gevoelstemperatuur tonen",
    show_wind: "Windsnelheid tonen",
    show_wind_gust: "Windstoten tonen",
    show_wind_direction: "Windrichting tonen",
    show_humidity: "Luchtvochtigheid tonen",
    show_min_temp: "Minimumtemperatuur tonen",
    show_hourly_forecast: "Uurverwachting tonen",
    hourly_forecast_hours: "Aantal uren",
    show_daily_forecast: "Dagverwachting tonen",
    daily_forecast_days: "Aantal dagen",
    show_sunrise_sunset: "Zonsopgang/zonsondergang tonen",
    sunrise_entity: "Zonsopgang-entiteit",
    sunset_entity: "Zonsondergang-entiteit",
    show_clock: "Klok tonen",
    clock_position: "Klokpositie",
    clock_position_top: "Boven",
    clock_position_details: "Details",
    clock_format: "Tijdformaat",
    clock_format_12h: "12-uurs (AM/PM)",
    clock_format_24h: "24-uurs",
    overlay_opacity: "Overlay-doorzichtigheid",
    language: "Taal",
    language_auto: "Automatisch",
    language_en: "Engels",
    language_ru: "Russisch",
    language_de: "Duits",
    language_nl: "Nederlands",
    language_fr: "Frans",
    language_es: "Spaans",
    wind_speed_unit: "Windsnelheidseenheid",
    wind_speed_unit_ms: "m/s",
    wind_speed_unit_kmh: "km/u"
  },
  demo: {
    pageTitle: "Dynamische Weerkaart",
    pageSubtitle: "Interactieve demo & configuratietool",
    livePreview: "Live voorbeeld",
    configuration: "Configuratie",
    quickPresets: "Snelle presets",
    sunnyDay: "Zonnige dag",
    rainy: "Regen",
    snowy: "Sneeuw",
    clearNight: "Heldere nacht",
    weatherCondition: "Weersomstandigheden",
    condition: "Conditie",
    temperature: "Temperatuur",
    humidity: "Luchtvochtigheid (%)",
    windSpeed: "Windsnelheid",
    timeOfDay: "Tijd van de dag",
    timeMode: "Tijdmodus",
    autoTime: "Automatisch (huidige tijd)",
    manualControl: "Handmatige bediening",
    sunrise: "Zonsopgang",
    day: "Dag",
    sunset: "Zonsondergang",
    night: "Nacht",
    currentTime: "Huidige tijd",
    displayOptions: "Weergaveopties",
    cardName: "Kaartnaam",
    height: "Hoogte (px)",
    feelsLike: "Gevoelstemperatuur",
    minTemp: "Minimumtemperatuur",
    windDirection: "Windrichting",
    windGust: "Windstoten",
    hourlyForecast: "Uurlijkse voorspelling",
    dailyForecast: "Dagelijkse voorspelling",
    sunriseSunset: "Zonsopgang / Zonsondergang",
    showClock: "Klok",
    clockPosition: "Klokpositie",
    clockPositionTop: "Rechtsboven",
    clockPositionDetails: "Detailregel",
    clockFormat: "Klokformaat",
    clockFormat12h: "12-uurs (AM/PM)",
    clockFormat24h: "24-uurs",
    overlayOpacity: "Overlay-transparantie (0-1)",
    windSpeedUnit: "Windsnelheidseenheid",
    dailyForecastDays: "Voorspellingsdagen",
    hourlyForecastHours: "Voorspellingsuren",
    updateCard: "Kaart bijwerken",
    startDemo: "Demo starten",
    stopDemo: "Demo stoppen",
    madeWith: "Gemaakt met liefde voor Home Assistant",
    loading: "Kaart laden...",
    errorTitle: "Kan kaart niet laden",
    errorDetails: "Controleer de browserconsole (F12) voor details",
    errorServer: "Zorg ervoor dat het bestand via een lokale server wordt geladen (niet file://)",
    placeholderEmpty: "Leeg laten om te verbergen",
    weatherConditions: {
      sunny: "Zonnig",
      clear: "Helder",
      clearNight: "Heldere nacht",
      partlyCloudy: "Gedeeltelijk bewolkt",
      cloudy: "Bewolkt",
      rainy: "Regen",
      pouring: "Zware regen",
      snowy: "Sneeuw",
      sleet: "Natte sneeuw",
      hail: "Hagel",
      foggy: "Mist",
      lightning: "Bliksem",
      thunderstorm: "Onweer"
    },
    language: {
      title: "Taal",
      english: "English",
      russian: "Русский",
      french: "Français",
      german: "Deutsch",
      dutch: "Nederlands",
      spanish: "Español",
      italian: "Italiano"
    }
  }
};
var translation_default3 = translation3;

// src/internationalization/locales/fr/translation.ts
var translation4 = {
  sunny: "Ensoleillé",
  clear: "Dégagé",
  overcast: "Couvert",
  cloudy: "Nuageux",
  partlycloudy: "Partiellement nuageux",
  rainy: "Pluvieux",
  rain: "Pluie",
  snowy: "Neigeux",
  snow: "Neige",
  foggy: "Brumeux",
  fog: "Brouillard",
  lightning: "Éclairs",
  "lightning-rainy": "Orage",
  pouring: "Forte pluie",
  "snowy-rainy": "Neige fondue",
  hail: "Grêle",
  "clear-night": "Nuit claire",
  feels_like: "Ressenti",
  forecast_title: "Prévisions du jour",
  daily_forecast_title: "Prévisions quotidiennes",
  no_data: "Aucune donnée",
  forecast_unavailable: "Prévisions non disponibles",
  weather: "Météo",
  language: "Langue",
  wind_unit_kmh: "km/h",
  wind_unit_ms: "m/s",
  wind_unit_mph: "mph",
  wind_unit_knots: "knots",
  wind_unit_fts: "ft/s",
  show_clock: "Afficher l'heure actuelle",
  am: "AM",
  pm: "PM",
  editor: {
    entity: "Entité météo",
    name: "Titre de la carte",
    height: "Hauteur de la carte",
    show_feels_like: "Afficher le ressenti",
    show_wind: "Afficher la vitesse du vent",
    show_wind_gust: "Afficher les rafales",
    show_wind_direction: "Afficher la direction du vent",
    show_humidity: "Afficher l’humidité",
    show_min_temp: "Afficher la température minimale",
    show_hourly_forecast: "Afficher la prévision horaire",
    hourly_forecast_hours: "Heures de prévision",
    show_daily_forecast: "Afficher la prévision quotidienne",
    daily_forecast_days: "Jours de prévision",
    show_sunrise_sunset: "Afficher lever/coucher du soleil",
    sunrise_entity: "Entité de lever du soleil",
    sunset_entity: "Entité de coucher du soleil",
    show_clock: "Afficher l'horloge",
    clock_position: "Position de l'horloge",
    clock_position_top: "En haut",
    clock_position_details: "Détails",
    clock_format: "Format de l'heure",
    clock_format_12h: "12 heures (AM/PM)",
    clock_format_24h: "24 heures",
    overlay_opacity: "Opacité du voile",
    language: "Langue",
    language_auto: "Auto",
    language_en: "Anglais",
    language_ru: "Russe",
    language_de: "Allemand",
    language_nl: "Néerlandais",
    language_fr: "Français",
    language_es: "Espagnol",
    wind_speed_unit: "Unité de vitesse du vent",
    wind_speed_unit_ms: "m/s",
    wind_speed_unit_kmh: "km/h"
  },
  demo: {
    pageTitle: "Carte Météo Dynamique",
    pageSubtitle: "Démo Interactive & Outil de Configuration",
    livePreview: "Aperçu en direct",
    configuration: "Configuration",
    quickPresets: "Pré-réglages rapides",
    sunnyDay: "Journée ensoleillée",
    rainy: "Pluvieux",
    snowy: "Neigeux",
    clearNight: "Nuit claire",
    weatherCondition: "Condition météo",
    condition: "Condition",
    temperature: "Température",
    humidity: "Humidité (%)",
    windSpeed: "Vitesse du vent",
    timeOfDay: "Moment de la journée",
    timeMode: "Mode horaire",
    autoTime: "Auto (heure actuelle)",
    manualControl: "Contrôle manuel",
    sunrise: "Lever du soleil",
    day: "Jour",
    sunset: "Coucher du soleil",
    night: "Nuit",
    currentTime: "Heure actuelle",
    displayOptions: "Options d'affichage",
    cardName: "Nom de la carte",
    height: "Hauteur (px)",
    feelsLike: "Température ressentie",
    minTemp: "Température minimale",
    windDirection: "Direction du vent",
    windGust: "Rafales de vent",
    hourlyForecast: "Prévisions horaires",
    dailyForecast: "Prévisions quotidiennes",
    sunriseSunset: "Lever/Coucher du soleil",
    showClock: "Horloge",
    clockPosition: "Position de l'horloge",
    clockPositionTop: "En haut à droite",
    clockPositionDetails: "Ligne de détails",
    clockFormat: "Format de l'horloge",
    clockFormat12h: "12 heures (AM/PM)",
    clockFormat24h: "24 heures",
    overlayOpacity: "Opacité du voile (0-1)",
    windSpeedUnit: "Unité de vitesse du vent",
    dailyForecastDays: "Jours de prévision",
    hourlyForecastHours: "Heures de prévision",
    updateCard: "Mettre à jour la carte",
    startDemo: "Démarrer le mode démo",
    stopDemo: "Arrêter la démo",
    madeWith: "Fait avec amour pour Home Assistant",
    loading: "Chargement de la carte...",
    errorTitle: "Échec du chargement de la carte",
    errorDetails: "Vérifiez la console du navigateur (F12) pour plus de détails",
    errorServer: "Assurez-vous que le fichier est servi via un serveur local (pas file://)",
    placeholderEmpty: "Laisser vide pour masquer",
    weatherConditions: {
      sunny: "Ensoleillé",
      clear: "Dégagé",
      clearNight: "Nuit claire",
      partlyCloudy: "Partiellement nuageux",
      cloudy: "Nuageux",
      rainy: "Pluvieux",
      pouring: "Forte pluie",
      snowy: "Neigeux",
      sleet: "Neige fondue",
      hail: "Grêle",
      foggy: "Brumeux",
      lightning: "Éclairs",
      thunderstorm: "Orage"
    },
    language: {
      title: "Langue",
      english: "English",
      russian: "Русский",
      french: "Français",
      german: "Deutsch",
      dutch: "Nederlands",
      spanish: "Español",
      italian: "Italiano"
    }
  }
};
var translation_default4 = translation4;

// src/internationalization/locales/en/translation.ts
var translation5 = {
  sunny: "Sunny",
  clear: "Clear",
  overcast: "Overcast",
  cloudy: "Cloudy",
  partlycloudy: "Partly Cloudy",
  rainy: "Rainy",
  rain: "Rain",
  snowy: "Snowy",
  snow: "Snow",
  foggy: "Foggy",
  fog: "Fog",
  lightning: "Lightning",
  "lightning-rainy": "Thunderstorm",
  pouring: "Heavy Rain",
  "snowy-rainy": "Sleet",
  hail: "Hail",
  "clear-night": "Clear Night",
  feels_like: "Feels like",
  forecast_title: "Today's Forecast",
  daily_forecast_title: "Daily's Forecast",
  no_data: "No data",
  forecast_unavailable: "Forecast unavailable",
  weather: "Weather",
  language: "Language",
  wind_unit_kmh: "km/h",
  wind_unit_ms: "m/s",
  wind_unit_mph: "mph",
  wind_unit_knots: "knots",
  wind_unit_fts: "ft/s",
  show_clock: "Show current time",
  am: "AM",
  pm: "PM",
  editor: {
    entity: "Weather Entity",
    name: "Card Title",
    height: "Card Height",
    show_feels_like: "Show Feels Like",
    show_wind: "Show Wind Speed",
    show_wind_gust: "Show Wind Gust",
    show_wind_direction: "Show Wind Direction",
    show_humidity: "Show Humidity",
    show_min_temp: "Show Min Temperature",
    show_hourly_forecast: "Show Hourly Forecast",
    hourly_forecast_hours: "Hourly Forecast Hours",
    show_daily_forecast: "Show Daily Forecast",
    daily_forecast_days: "Daily Forecast Days",
    show_sunrise_sunset: "Show Sunrise/Sunset",
    sunrise_entity: "Sunrise Entity",
    sunset_entity: "Sunset Entity",
    show_clock: "Show Clock",
    clock_position: "Clock Position",
    clock_position_top: "Top",
    clock_position_details: "Details",
    clock_format: "Clock Format",
    clock_format_12h: "12-hour (AM/PM)",
    clock_format_24h: "24-hour",
    overlay_opacity: "Overlay Opacity",
    language: "Language",
    language_auto: "Auto",
    language_en: "English",
    language_ru: "Russian",
    language_de: "German",
    language_nl: "Dutch",
    language_fr: "French",
    language_es: "Spanish",
    wind_speed_unit: "Wind Speed Unit",
    wind_speed_unit_ms: "m/s",
    wind_speed_unit_kmh: "km/h"
  },
  demo: {
    pageTitle: "Dynamic Weather Card",
    pageSubtitle: "Interactive Demo & Configuration Tool",
    livePreview: "Live Preview",
    configuration: "Configuration",
    quickPresets: "Quick Presets",
    sunnyDay: "Sunny Day",
    rainy: "Rainy",
    snowy: "Snowy",
    clearNight: "Clear Night",
    weatherCondition: "Weather Condition",
    condition: "Condition",
    temperature: "Temperature",
    humidity: "Humidity (%)",
    windSpeed: "Wind Speed",
    timeOfDay: "Time of Day",
    timeMode: "Time Mode",
    autoTime: "Auto (Current Time)",
    manualControl: "Manual Control",
    sunrise: "Sunrise",
    day: "Day",
    sunset: "Sunset",
    night: "Night",
    currentTime: "Current Time",
    displayOptions: "Display Options",
    cardName: "Card Name",
    height: "Height (px)",
    feelsLike: "Feels Like Temperature",
    minTemp: "Min Temperature",
    windDirection: "Wind Direction",
    windGust: "Wind Gust",
    hourlyForecast: "Hourly Forecast",
    dailyForecast: "Daily Forecast",
    sunriseSunset: "Sunrise/Sunset",
    showClock: "Clock",
    clockPosition: "Clock Position",
    clockPositionTop: "Top right",
    clockPositionDetails: "Details row",
    clockFormat: "Clock Format",
    clockFormat12h: "12-hour (AM/PM)",
    clockFormat24h: "24-hour",
    overlayOpacity: "Overlay Opacity (0-1)",
    windSpeedUnit: "Wind Speed Unit",
    dailyForecastDays: "Daily Forecast Days",
    hourlyForecastHours: "Hourly Forecast Hours",
    updateCard: "Update Card",
    startDemo: "Start Demo Mode",
    stopDemo: "Stop Demo",
    madeWith: "Made with love for Home Assistant",
    loading: "Loading card...",
    errorTitle: "Failed to load card",
    errorDetails: "Check the browser console (F12) for details",
    errorServer: "Make sure the file is served via a local server (not file://)",
    placeholderEmpty: "Leave empty to hide",
    weatherConditions: {
      sunny: "Sunny",
      clear: "Clear",
      clearNight: "Clear Night",
      partlyCloudy: "Partly Cloudy",
      cloudy: "Cloudy",
      rainy: "Rainy",
      pouring: "Pouring",
      snowy: "Snowy",
      sleet: "Sleet",
      hail: "Hail",
      foggy: "Foggy",
      lightning: "Lightning",
      thunderstorm: "Thunderstorm"
    },
    language: {
      title: "Language",
      english: "English",
      russian: "Russian",
      french: "French",
      german: "German",
      dutch: "Dutch",
      spanish: "Spanish",
      italian: "Italian"
    }
  }
};
var translation_default5 = translation5;

// src/internationalization/locales/es/translation.ts
var translation6 = {
  sunny: "Soleado",
  clear: "Despejado",
  overcast: "Cubierto",
  cloudy: "Nublado",
  partlycloudy: "Parcialmente Nublado",
  rainy: "Lluvioso",
  rain: "Lluvia",
  snowy: "Nevado",
  snow: "Nieve",
  foggy: "Nublado",
  fog: "Niebla",
  lightning: "Rayo",
  "lightning-rainy": "Tormenta Eléctrica",
  pouring: "Lluvia Intensa",
  "snowy-rainy": "Aguanieve",
  hail: "Granizo",
  "clear-night": "Noche Despejada",
  feels_like: "Sensación térmica",
  forecast_title: "Previsión para hoy",
  daily_forecast_title: "Previsión Diaria",
  no_data: "Sin datos",
  forecast_unavailable: "Previsión no disponible",
  weather: "Clima",
  language: "Idioma",
  wind_unit_kmh: "km/h",
  wind_unit_ms: "m/s",
  wind_unit_mph: "mph",
  wind_unit_knots: "knots",
  wind_unit_fts: "ft/s",
  show_clock: "Mostrar hora actual",
  am: "AM",
  pm: "PM",
  editor: {
    entity: "Entidad de clima",
    name: "Título de la tarjeta",
    height: "Altura de la tarjeta",
    show_feels_like: "Mostrar sensación térmica",
    show_wind: "Mostrar velocidad del viento",
    show_wind_gust: "Mostrar ráfaga de viento",
    show_wind_direction: "Mostrar dirección del viento",
    show_humidity: "Mostrar humedad",
    show_min_temp: "Mostrar temperatura mínima",
    show_hourly_forecast: "Mostrar pronóstico por horas",
    hourly_forecast_hours: "Horas del pronóstico",
    show_daily_forecast: "Mostrar pronóstico diario",
    daily_forecast_days: "Días del pronóstico",
    show_sunrise_sunset: "Mostrar amanecer/atardecer",
    sunrise_entity: "Entidad de amanecer",
    sunset_entity: "Entidad de atardecer",
    show_clock: "Mostrar reloj",
    clock_position: "Posición del reloj",
    clock_position_top: "Arriba",
    clock_position_details: "Detalles",
    clock_format: "Formato de hora",
    clock_format_12h: "12 horas (AM/PM)",
    clock_format_24h: "24 horas",
    overlay_opacity: "Opacidad de superposición",
    language: "Idioma",
    language_auto: "Automático",
    language_en: "Inglés",
    language_ru: "Ruso",
    language_de: "Alemán",
    language_nl: "Neerlandés",
    language_fr: "Francés",
    language_es: "Español",
    wind_speed_unit: "Unidad de velocidad del viento",
    wind_speed_unit_ms: "m/s",
    wind_speed_unit_kmh: "km/h"
  },
  demo: {
    pageTitle: "Tarjeta Meteorológica Dinámica",
    pageSubtitle: "Demostración interactiva y Herramienta de Configuración",
    livePreview: "Vista previa en vivo",
    configuration: "Configuración",
    quickPresets: "Ajustes Rápidos",
    sunnyDay: "Día soleado",
    rainy: "Lluvioso",
    snowy: "Nevado",
    clearNight: "Noche despejada",
    weatherCondition: "Condiciones Meteorológicas",
    condition: "Condición",
    temperature: "Temperatura",
    humidity: "Humedad (%)",
    windSpeed: "Velocidad del Viento",
    timeOfDay: "Hora del Día",
    timeMode: "Modo Tiempo",
    autoTime: "Auto (Hora Actual)",
    manualControl: "Control Manual",
    sunrise: "Amanecer",
    day: "Día",
    sunset: "Atardecer",
    night: "Noche",
    currentTime: "Hora Actual",
    displayOptions: "Opciones de Visualización",
    cardName: "Nombre de la tarjeta",
    height: "Altura (px)",
    feelsLike: "Sensación Térmica",
    minTemp: "Temperatura Mínima",
    windDirection: "Dirección del Viento",
    windGust: "Ráfaga de Viento",
    hourlyForecast: "Previsión por Horas",
    dailyForecast: "Previsión Diaria",
    sunriseSunset: "Amanecer/Atardecer",
    showClock: "Reloj",
    clockPosition: "Posición del Reloj",
    clockPositionTop: "Arriba a la derecha",
    clockPositionDetails: "Línea de detalles",
    clockFormat: "Formato del Reloj",
    clockFormat12h: "12 horas (AM/PM)",
    clockFormat24h: "24 horas",
    overlayOpacity: "Opacidad de Superposición (0-1)",
    windSpeedUnit: "Unidad de Velocidad del Viento",
    dailyForecastDays: "Días de Previsión",
    hourlyForecastHours: "Horas de Previsión",
    updateCard: "Actualizar Tarjeta",
    startDemo: "Iniciar Modo Demostración",
    stopDemo: "Detener Demostración",
    madeWith: "Hecho con amor para Home Assistant",
    loading: "Cargando tarjeta...",
    errorTitle: "No se pudo cargar la tarjeta",
    errorDetails: "Consulte la consola del navegador (F12) para obtener más detalles",
    errorServer: "Asegúrese de que el archivo se sirve a través de un servidor local (no file://)",
    placeholderEmpty: "Deje vacío para ocultar",
    weatherConditions: {
      sunny: "Soleado",
      clear: "Despejado",
      clearNight: "Noche Despejada",
      partlyCloudy: "Parcialmente Nublado",
      cloudy: "Nublado",
      rainy: "Lluvioso",
      pouring: "Torrencial",
      snowy: "Nevado",
      sleet: "Aguanieve",
      hail: "Granizo",
      foggy: "Nublado",
      lightning: "Rayos",
      thunderstorm: "Tormenta Eléctrica"
    },
    language: {
      title: "Idioma",
      english: "English",
      russian: "Русский",
      french: "Français",
      german: "Deutsch",
      dutch: "Nederlands",
      spanish: "Español",
      italian: "Italiano"
    }
  }
};
var translation_default6 = translation6;

// src/internationalization/locales/it/translation.ts
var translation7 = {
  sunny: "Soleggiato",
  clear: "Sereno",
  overcast: "Coperto",
  cloudy: "Nuvoloso",
  partlycloudy: "Parzialmente Nuvoloso",
  rainy: "Piovoso",
  rain: "Pioggia",
  snowy: "Nevoso",
  snow: "Neve",
  foggy: "Nebbia",
  fog: "Nebbia",
  lightning: "Fulmine",
  "lightning-rainy": "Temporale",
  pouring: "Pioggia Intensa",
  "snowy-rainy": "Nevischio",
  hail: "Grandine",
  "clear-night": "Notte Serena",
  feels_like: "Percepita",
  forecast_title: "Previsioni di oggi",
  daily_forecast_title: "Previsioni Giornaliere",
  no_data: "Nessun dato",
  forecast_unavailable: "Previsioni non disponibili",
  weather: "Meteo",
  language: "Lingua",
  wind_unit_kmh: "km/h",
  wind_unit_ms: "m/s",
  wind_unit_mph: "mph",
  wind_unit_knots: "knots",
  wind_unit_fts: "ft/s",
  show_clock: "Mostra ora corrente",
  am: "AM",
  pm: "PM",
  editor: {
    entity: "Entità meteo",
    name: "Titolo della scheda",
    height: "Altezza della scheda",
    show_feels_like: "Mostra temperatura percepita",
    show_wind: "Mostra velocità del vento",
    show_wind_gust: "Mostra raffiche di vento",
    show_wind_direction: "Mostra direzione del vento",
    show_humidity: "Mostra umidità",
    show_min_temp: "Mostra temperatura minima",
    show_hourly_forecast: "Mostra previsione oraria",
    hourly_forecast_hours: "Ore di previsione",
    show_daily_forecast: "Mostra previsione giornaliera",
    daily_forecast_days: "Giorni di previsione",
    show_sunrise_sunset: "Mostra alba/tramonto",
    sunrise_entity: "Entità alba",
    sunset_entity: "Entità tramonto",
    show_clock: "Mostra orologio",
    clock_position: "Posizione orologio",
    clock_position_top: "In alto",
    clock_position_details: "Dettagli",
    clock_format: "Formato orario",
    clock_format_12h: "12 ore (AM/PM)",
    clock_format_24h: "24 ore",
    overlay_opacity: "Opacità sovrapposizione",
    language: "Lingua",
    language_auto: "Auto",
    language_en: "Inglese",
    language_ru: "Russo",
    language_de: "Tedesco",
    language_nl: "Olandese",
    language_fr: "Francese",
    language_es: "Spagnolo",
    wind_speed_unit: "Unità velocità del vento",
    wind_speed_unit_ms: "m/s",
    wind_speed_unit_kmh: "km/h"
  },
  demo: {
    pageTitle: "Dynamic Weather Card",
    pageSubtitle: "Demo interattiva & Strumento di configurazione",
    livePreview: "Anteprima live",
    configuration: "Configurazione",
    quickPresets: "Preset veloci",
    sunnyDay: "Giornata Soleggiata",
    rainy: "Piovoso",
    snowy: "Nevoso",
    clearNight: "Notte Serena",
    weatherCondition: "Condizione Meteo",
    condition: "Condizione",
    temperature: "Temperatura",
    humidity: "Umidità (%)",
    windSpeed: "Velocità del Vento",
    timeOfDay: "Momento della giornata",
    timeMode: "Modalità ora",
    autoTime: "Automatico (Ora corrente)",
    manualControl: "Controllo manuale",
    sunrise: "Alba",
    day: "Giorno",
    sunset: "Tramonto",
    night: "Notte",
    currentTime: "Ora corrente",
    displayOptions: "Opzioni di visualizzazione",
    cardName: "Nome della card",
    height: "Altezza (px)",
    feelsLike: "Temperatura percepita",
    minTemp: "Temperatura minima",
    windDirection: "Direzione del vento",
    windGust: "Raffiche di vento",
    hourlyForecast: "Previsioni orarie",
    dailyForecast: "Previsioni giornaliere",
    sunriseSunset: "Alba/Tramonto",
    showClock: "Orologio",
    clockPosition: "Posizione Orologio",
    clockPositionTop: "In alto a destra",
    clockPositionDetails: "Riga dettagli",
    clockFormat: "Formato Orologio",
    clockFormat12h: "12 ore (AM/PM)",
    clockFormat24h: "24 ore",
    overlayOpacity: "Opacità Sovrapposizione (0-1)",
    windSpeedUnit: "Unità Velocità Vento",
    dailyForecastDays: "Giorni di Previsione",
    hourlyForecastHours: "Ore di Previsione",
    updateCard: "Aggiorna card",
    startDemo: "Avvia Demo",
    stopDemo: "Ferma Demo",
    madeWith: "Creato con amore per Home Assistant",
    loading: "Caricamento card...",
    errorTitle: "Impossibile caricare la card",
    errorDetails: "Controlla la console del browser (F12) per i dettagli",
    errorServer: "Assicurati che il file sia servito tramite server locale (non file://)",
    placeholderEmpty: "Lascia vuoto per nascondere",
    weatherConditions: {
      sunny: "Soleggiato",
      clear: "Sereno",
      clearNight: "Notte Serena",
      partlyCloudy: "Parzialmente Nuvoloso",
      cloudy: "Nuvoloso",
      rainy: "Piovoso",
      pouring: "Pioggia Intensa",
      snowy: "Nevoso",
      sleet: "Nevischio",
      hail: "Grandine",
      foggy: "Nebbia",
      lightning: "Fulmine",
      thunderstorm: "Temporale"
    },
    language: {
      title: "Lingua",
      english: "English",
      russian: "Русский",
      french: "Français",
      german: "Deutsch",
      dutch: "Nederlands",
      spanish: "Español",
      italian: "Italiano"
    }
  }
};
var translation_default7 = translation7;

// src/internationalization/index.ts
var translations = {
  en: translation_default5,
  ru: translation_default,
  de: translation_default2,
  nl: translation_default3,
  fr: translation_default4,
  es: translation_default6,
  it: translation_default7
};

class I18n {
  lang = "en";
  fallback = "en";
  t(key) {
    const path = key.split(".");
    const fromCurrent = path.reduce((o, k) => o?.[k], translations[this.lang]);
    if (fromCurrent != null)
      return fromCurrent;
    const fromFallback = path.reduce((o, k) => o?.[k], translations[this.fallback]);
    return fromFallback ?? key;
  }
  setLanguage(lang) {
    if (!translations[lang] || this.lang === lang)
      return;
    this.lang = lang;
    window.dispatchEvent(new CustomEvent("language-changed"));
  }
}
var i18n = new I18n;
window.i18n = i18n;

// src/internationalization/resolveLanguage.ts
var resolveLanguage = ({ configLang, hassLang } = {}) => {
  if (configLang && configLang !== "auto")
    return configLang;
  if (hassLang)
    return hassLang;
  if (typeof navigator !== "undefined" && navigator.language) {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("ru"))
      return "ru";
    if (lang.startsWith("de"))
      return "de";
    if (lang.startsWith("nl"))
      return "nl";
    if (lang.startsWith("fr"))
      return "fr";
    if (lang.startsWith("it"))
      return "it";
    if (lang.startsWith("es"))
      return "es";
  }
  return "en";
};

// src/utils.ts
function getTimeOfDay() {
  const now = new Date;
  const hour = now.getHours();
  const minute = now.getMinutes();
  const totalMinutes = hour * 60 + minute;
  if (totalMinutes >= TIME_THRESHOLDS.SUNRISE_START && totalMinutes < TIME_THRESHOLDS.SUNRISE_END) {
    const progress = (totalMinutes - TIME_THRESHOLDS.SUNRISE_START) / 120;
    return { type: "sunrise", progress };
  }
  if (totalMinutes >= TIME_THRESHOLDS.SUNRISE_END && totalMinutes < TIME_THRESHOLDS.DAY_END) {
    const progress = (totalMinutes - TIME_THRESHOLDS.SUNRISE_END) / 600;
    return { type: "day", progress };
  }
  if (totalMinutes >= TIME_THRESHOLDS.DAY_END && totalMinutes < TIME_THRESHOLDS.SUNSET_END) {
    const progress = (totalMinutes - TIME_THRESHOLDS.DAY_END) / 120;
    return { type: "sunset", progress };
  }
  return { type: "night", progress: 0 };
}
function getSunPosition(timeOfDay, width, height) {
  if (timeOfDay.type === "sunrise") {
    const progress = timeOfDay.progress;
    return {
      x: width * (0.3 + progress * 0.4),
      y: height * (0.85 - progress * 0.55)
    };
  } else if (timeOfDay.type === "sunset") {
    const progress = timeOfDay.progress;
    return {
      x: width * (0.5 + progress * 0.3),
      y: height * (0.3 + progress * 0.55)
    };
  } else if (timeOfDay.type === "day") {
    const progress = timeOfDay.progress;
    const angle = progress * Math.PI;
    return {
      x: width * (0.5 + Math.sin(angle) * 0.25),
      y: height * (0.25 - Math.sin(angle) * 0.1)
    };
  } else {
    return {
      x: width * 0.75,
      y: height * 0.3
    };
  }
}
function getBackgroundGradient(timeOfDay) {
  if (timeOfDay.type === "sunrise") {
    const progress = timeOfDay.progress;
    const nightStart = { r: 26, g: 26, b: 46 };
    const dayStart = { r: 255, g: 160, b: 122 };
    const dayEnd = { r: 255, g: 215, b: 0 };
    return {
      start: {
        r: Math.round(nightStart.r + (dayStart.r - nightStart.r) * progress),
        g: Math.round(nightStart.g + (dayStart.g - nightStart.g) * progress),
        b: Math.round(nightStart.b + (dayStart.b - nightStart.b) * progress)
      },
      end: {
        r: Math.round(nightStart.r + (dayEnd.r - nightStart.r) * progress),
        g: Math.round(nightStart.g + (dayEnd.g - nightStart.g) * progress),
        b: Math.round(nightStart.b + (dayEnd.b - nightStart.b) * progress)
      }
    };
  } else if (timeOfDay.type === "sunset") {
    const progress = timeOfDay.progress;
    const dayStart = { r: 255, g: 107, b: 107 };
    const dayEnd = { r: 255, g: 160, b: 122 };
    const nightStart = { r: 26, g: 26, b: 46 };
    return {
      start: {
        r: Math.round(dayStart.r + (nightStart.r - dayStart.r) * progress),
        g: Math.round(dayStart.g + (nightStart.g - dayStart.g) * progress),
        b: Math.round(dayStart.b + (nightStart.b - dayStart.b) * progress)
      },
      end: {
        r: Math.round(dayEnd.r + (nightStart.r - dayEnd.r) * progress),
        g: Math.round(dayEnd.g + (nightStart.g - dayEnd.g) * progress),
        b: Math.round(dayEnd.b + (nightStart.b - dayEnd.b) * progress)
      }
    };
  }
  return null;
}
function formatForecastTime(datetime) {
  if (!datetime)
    return "";
  const date = new Date(datetime);
  const hours = date.getHours();
  return `${hours.toString().padStart(2, "0")}:00`;
}
function formatForecastDay(datetime, locale) {
  if (!datetime)
    return "";
  const date = new Date(datetime);
  if (Number.isNaN(date.getTime()))
    return "";
  return date.toLocaleDateString(locale || undefined, {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
}
function formatTime(datetime, format = "24h", amText = "AM", pmText = "PM") {
  if (!datetime)
    return "";
  const date = typeof datetime === "string" ? new Date(datetime) : datetime;
  let hours = date.getHours();
  const minutes = date.getMinutes();
  if (format === "12h") {
    const period = hours >= 12 ? pmText : amText;
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
  } else {
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  }
}
function getSunriseSunsetData(weatherState, sunriseEntity = null, sunsetEntity = null, hass = null) {
  let sunrise = null;
  let sunset = null;
  if (sunriseEntity && hass && hass.states[sunriseEntity]) {
    const sunriseState = hass.states[sunriseEntity];
    sunrise = new Date(sunriseState.state);
  }
  if (sunsetEntity && hass && hass.states[sunsetEntity]) {
    const sunsetState = hass.states[sunsetEntity];
    sunset = new Date(sunsetState.state);
  }
  if (!sunrise || !sunset) {
    if (weatherState && weatherState.attributes) {
      const attrs = weatherState.attributes;
      if (!sunrise && (attrs.forecast_sunrise || attrs.sunrise)) {
        sunrise = new Date(attrs.forecast_sunrise || attrs.sunrise);
      }
      if (!sunset && (attrs.forecast_sunset || attrs.sunset)) {
        sunset = new Date(attrs.forecast_sunset || attrs.sunset);
      }
    }
  }
  if ((!sunrise || !sunset) && hass && hass.states["sun.sun"]) {
    const sunEntity = hass.states["sun.sun"];
    const sunAttrs = sunEntity.attributes;
    if (!sunrise && sunAttrs.next_rising) {
      sunrise = new Date(sunAttrs.next_rising);
    }
    if (!sunset && sunAttrs.next_setting) {
      sunset = new Date(sunAttrs.next_setting);
    }
  }
  return {
    sunrise,
    sunset,
    hasSunData: !!(sunrise && sunset)
  };
}
function getTimeOfDayWithSunData(sunData) {
  const now = new Date;
  if (sunData.hasSunData && sunData.sunrise && sunData.sunset) {
    const currentTime = now.getTime();
    let sunriseTime = sunData.sunrise.getTime();
    let sunsetTime = sunData.sunset.getTime();
    if (sunriseTime - currentTime > 12 * 60 * 60 * 1000) {
      sunriseTime -= 24 * 60 * 60 * 1000;
    }
    if (sunsetTime - currentTime > 12 * 60 * 60 * 1000) {
      sunsetTime -= 24 * 60 * 60 * 1000;
    }
    const sunriseStart = sunriseTime - 60 * 60 * 1000;
    const sunriseEnd = sunriseTime + 60 * 60 * 1000;
    const sunsetStart = sunsetTime - 60 * 60 * 1000;
    const sunsetEnd = sunsetTime + 60 * 60 * 1000;
    if (currentTime >= sunriseStart && currentTime < sunriseEnd) {
      const progress = (currentTime - sunriseStart) / (sunriseEnd - sunriseStart);
      return { type: "sunrise", progress };
    }
    if (currentTime >= sunriseEnd && currentTime < sunsetStart) {
      const progress = (currentTime - sunriseEnd) / (sunsetStart - sunriseEnd);
      return { type: "day", progress };
    }
    if (currentTime >= sunsetStart && currentTime < sunsetEnd) {
      const progress = (currentTime - sunsetStart) / (sunsetEnd - sunsetStart);
      return { type: "sunset", progress };
    }
    return { type: "night", progress: 0 };
  }
  return getTimeOfDay();
}
function convertWindSpeed(speed, attrs, configUnit) {
  if (speed == null)
    return null;
  if (attrs.wind_speed_unit) {
    return Math.round(speed * 10) / 10;
  }
  if (configUnit === "kmh") {
    return Math.round(speed * 3.6 * 10) / 10;
  }
  return Math.round(speed * 10) / 10;
}
function getWindSpeedUnit(attrs, configUnit, t) {
  const unit = attrs.wind_speed_unit;
  if (unit) {
    const normalizedUnit = unit.toLowerCase().replace(/[^a-z]/g, "");
    if (normalizedUnit === "kmh" || normalizedUnit === "kmph") {
      return t("wind_unit_kmh");
    } else if (normalizedUnit === "ms" || normalizedUnit === "mps") {
      return t("wind_unit_ms");
    } else if (normalizedUnit === "mph") {
      return t("wind_unit_mph");
    } else if (normalizedUnit === "knots" || normalizedUnit === "kn" || normalizedUnit === "kt") {
      return t("wind_unit_knots");
    } else if (normalizedUnit === "fts" || normalizedUnit === "ftps") {
      return t("wind_unit_fts");
    }
    return unit;
  }
  return configUnit === "kmh" ? t("wind_unit_kmh") : t("wind_unit_ms");
}
function formatClockTime(date, format, amLabel, pmLabel) {
  if (format === "12h") {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? pmLabel : amLabel;
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  } else {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
}
function setupHorizontalScroll(root, selector) {
  const element = root?.querySelector(selector);
  if (!element)
    return null;
  const handler = (e) => {
    const wheelEvent = e;
    if (wheelEvent.deltaY !== 0) {
      e.preventDefault();
      element.scrollLeft += wheelEvent.deltaY;
    }
  };
  element.addEventListener("wheel", handler, { passive: false });
  return () => element.removeEventListener("wheel", handler);
}

// src/animations/base.ts
class BaseAnimation {
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  drawCloud(x, y, size, opacity) {
    const savedShadowBlur = this.ctx.shadowBlur;
    const savedShadowColor = this.ctx.shadowColor;
    const savedGlobalAlpha = this.ctx.globalAlpha;
    this.ctx.shadowBlur = size * 0.25;
    this.ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.4})`;
    this.ctx.globalAlpha = opacity * 0.85;
    this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
    const parts = [
      { x, y, r: size * 0.4 },
      { x: x + size * 0.35, y, r: size * 0.5 },
      { x: x + size * 0.65, y, r: size * 0.48 },
      { x: x + size * 0.92, y, r: size * 0.38 },
      { x: x + size * 0.18, y: y - size * 0.28, r: size * 0.38 },
      { x: x + size * 0.52, y: y - size * 0.32, r: size * 0.42 },
      { x: x + size * 0.78, y: y - size * 0.28, r: size * 0.38 },
      { x: x + size * 0.32, y: y - size * 0.42, r: size * 0.32 },
      { x: x + size * 0.62, y: y - size * 0.48, r: size * 0.36 },
      { x: x + size * 0.82, y: y - size * 0.42, r: size * 0.32 }
    ];
    parts.forEach((part) => {
      this.ctx.beginPath();
      this.ctx.arc(part.x, part.y, part.r, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.shadowBlur = savedShadowBlur;
    this.ctx.shadowColor = savedShadowColor;
    this.ctx.globalAlpha = savedGlobalAlpha;
  }
  drawClouds(time, width, height, density = 0.5) {
    const cloudCount = Math.max(2, Math.floor(width / 150 * density));
    for (let i = 0;i < cloudCount; i++) {
      const baseX = (time * 3 + i * 150) % (width + 200) - 100;
      const baseY = height * (0.2 + i % 3 * 0.15) + Math.sin(time * 0.2 + i) * 8;
      const size = 40 + i % 3 * 15;
      const opacity = 0.6 + i % 2 * 0.2;
      this.drawCloud(baseX, baseY, size, opacity);
    }
  }
}

// src/animations/sunny.ts
class SunnyAnimation extends BaseAnimation {
  draw(time, width, height, timeOfDay) {
    const currentTime = Date.now() * 0.001;
    const sunPos = getSunPosition(timeOfDay, width, height);
    const sunX = sunPos.x;
    const sunY = sunPos.y;
    if (timeOfDay.type === "day" || timeOfDay.type === "sunrise" || timeOfDay.type === "sunset") {
      this.drawSun(sunX, sunY, currentTime);
      if (timeOfDay.type === "sunrise" || timeOfDay.type === "sunset") {
        this.drawHorizonReflection(sunX, sunY, height, currentTime);
      }
    } else if (timeOfDay.type === "night") {
      this.drawNightSky(width, height, currentTime);
    }
    this.drawClouds(currentTime, width, height, 0.3);
  }
  drawSun(sunX, sunY, time) {
    const sunRadius = 48 + Math.sin(time * 0.15) * 1.5;
    const outerHalo = this.ctx.createRadialGradient(sunX, sunY, sunRadius * 0.3, sunX, sunY, sunRadius * 3.5);
    outerHalo.addColorStop(0, "rgba(255, 248, 230, 0.25)");
    outerHalo.addColorStop(0.15, "rgba(255, 240, 200, 0.2)");
    outerHalo.addColorStop(0.3, "rgba(255, 230, 170, 0.15)");
    outerHalo.addColorStop(0.5, "rgba(255, 220, 140, 0.1)");
    outerHalo.addColorStop(0.7, "rgba(255, 210, 120, 0.06)");
    outerHalo.addColorStop(0.85, "rgba(255, 200, 100, 0.03)");
    outerHalo.addColorStop(1, "rgba(255, 190, 90, 0)");
    this.ctx.fillStyle = outerHalo;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius * 3.5, 0, Math.PI * 2);
    this.ctx.fill();
    const midHalo = this.ctx.createRadialGradient(sunX, sunY, sunRadius * 0.5, sunX, sunY, sunRadius * 2.2);
    midHalo.addColorStop(0, "rgba(255, 250, 220, 0.35)");
    midHalo.addColorStop(0.3, "rgba(255, 240, 190, 0.25)");
    midHalo.addColorStop(0.6, "rgba(255, 230, 160, 0.15)");
    midHalo.addColorStop(0.85, "rgba(255, 220, 140, 0.08)");
    midHalo.addColorStop(1, "rgba(255, 210, 120, 0)");
    this.ctx.fillStyle = midHalo;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius * 2.2, 0, Math.PI * 2);
    this.ctx.fill();
    const innerHalo = this.ctx.createRadialGradient(sunX, sunY, sunRadius * 0.6, sunX, sunY, sunRadius * 1.6);
    innerHalo.addColorStop(0, "rgba(255, 252, 240, 0.5)");
    innerHalo.addColorStop(0.4, "rgba(255, 245, 210, 0.35)");
    innerHalo.addColorStop(0.7, "rgba(255, 235, 180, 0.2)");
    innerHalo.addColorStop(1, "rgba(255, 225, 150, 0)");
    this.ctx.fillStyle = innerHalo;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius * 1.6, 0, Math.PI * 2);
    this.ctx.fill();
    const sunGradient = this.ctx.createRadialGradient(sunX - sunRadius * 0.1, sunY - sunRadius * 0.1, 0, sunX, sunY, sunRadius);
    sunGradient.addColorStop(0, "#FFFEF5");
    sunGradient.addColorStop(0.15, "#FFF9E6");
    sunGradient.addColorStop(0.3, "#FFF4D6");
    sunGradient.addColorStop(0.5, "#FFEDC0");
    sunGradient.addColorStop(0.7, "#FFE4A8");
    sunGradient.addColorStop(0.85, "#FFDC95");
    sunGradient.addColorStop(1, "#FFD37F");
    this.ctx.fillStyle = sunGradient;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
    this.ctx.fill();
  }
  drawHorizonReflection(sunX, sunY, height, time) {
    const sunRadius = 48 + Math.sin(time * 0.15) * 1.5;
    const horizonY = height * 0.85;
    if (sunY >= horizonY - 50) {
      const reflectionAlpha = Math.max(0, (horizonY - sunY) / 50) * 0.3;
      this.ctx.fillStyle = `rgba(255, 140, 0, ${reflectionAlpha})`;
      this.ctx.beginPath();
      this.ctx.ellipse(sunX, horizonY, sunRadius * 1.5, sunRadius * 0.5, 0, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
  drawNightSky(width, height, time) {
    this.ctx.fillStyle = "#FFFFFF";
    for (let i = 0;i < 20; i++) {
      const x = (width * 0.2 + i * 47) % width;
      const y = (height * 0.2 + i * 23) % (height * 0.6);
      const twinkle = Math.sin(time * 0.8 + i) * 0.5 + 0.5;
      this.ctx.globalAlpha = twinkle * 0.8;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      this.ctx.fill();
    }
    const moonX = width * 0.75;
    const moonY = height * 0.3;
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = "#F0F0F0";
    this.ctx.beginPath();
    this.ctx.arc(moonX, moonY, 25, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = "#1a1a2e";
    this.ctx.beginPath();
    this.ctx.arc(moonX - 8, moonY - 5, 22, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.globalAlpha = 1;
  }
}

// src/animations/rainy.ts
class RainyAnimation extends BaseAnimation {
  rainDrops = [];
  lastTime = 0;
  draw(time, width, height, timeOfDay, heavy = false) {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, heavy ? 1 : 0.8);
    this.drawRain(width, height, heavy);
  }
  drawRain(width, height, heavy) {
    const dropCount = heavy ? 130 : 90;
    if (this.rainDrops.length !== dropCount) {
      this.rainDrops = [];
      for (let i = 0;i < dropCount; i++) {
        this.rainDrops.push({
          x: Math.random() * width,
          y: Math.random() * height - Math.random() * 200,
          speed: heavy ? 80 + Math.random() * 100 : 60 + Math.random() * 80,
          windOffset: (Math.random() - 0.5) * 30,
          width: heavy ? 1.2 + Math.random() * 1 : 0.8 + Math.random() * 0.7,
          length: heavy ? 8 + Math.random() * 10 : 6 + Math.random() * 8,
          alpha: heavy ? 0.75 + Math.random() * 0.15 : 0.65 + Math.random() * 0.2,
          phase: Math.random() * Math.PI * 2
        });
      }
    }
    const currentTime = Date.now() * 0.001;
    const deltaTime = this.lastTime > 0 ? Math.min(currentTime - this.lastTime, 0.1) : 1 / 60;
    this.lastTime = currentTime;
    const currentAnimTime = currentTime;
    for (let i = 0;i < this.rainDrops.length; i++) {
      const drop = this.rainDrops[i];
      drop.y += drop.speed * deltaTime;
      if (drop.y > height + 50) {
        drop.y = -50 - Math.random() * 100;
        drop.x = Math.random() * width;
      }
      const wind = drop.windOffset * (1 + Math.sin(currentAnimTime * 0.5 + drop.phase) * 0.2);
      const dropX = drop.x + wind;
      if (dropX < -10) {
        drop.x = width + 10;
      } else if (dropX > width + 10) {
        drop.x = -10;
      }
      this.drawRainDrop(dropX, drop.y, drop);
    }
  }
  drawRainDrop(dropX, dropY, drop) {
    this.ctx.save();
    this.ctx.globalAlpha = drop.alpha;
    const topY = dropY - drop.length * 0.5;
    const bottomY = dropY + drop.length * 0.5;
    const fillAlpha = drop.alpha;
    const strokeAlpha = drop.alpha * 0.5;
    this.ctx.fillStyle = "rgba(220, 240, 255, " + fillAlpha + ")";
    this.ctx.strokeStyle = "rgba(240, 250, 255, " + strokeAlpha + ")";
    this.ctx.lineWidth = 0.4;
    this.ctx.beginPath();
    this.ctx.moveTo(dropX, topY);
    this.ctx.quadraticCurveTo(dropX - drop.width * 0.3, dropY, dropX - drop.width, bottomY - drop.width * 0.3);
    this.ctx.arc(dropX, bottomY, drop.width, Math.PI, 0, false);
    this.ctx.quadraticCurveTo(dropX + drop.width * 0.3, dropY, dropX, topY);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.restore();
  }
}

// src/animations/snowy.ts
class SnowyAnimation extends BaseAnimation {
  snowflakes = [];
  lastTime = 0;
  draw(time, width, height, _timeOfDay) {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, 0.7);
    this.drawSnowflakes(width, height);
  }
  drawSnowflakes(width, height) {
    const snowflakeCount = Math.floor(width * height / 5000);
    const targetCount = Math.max(30, Math.min(snowflakeCount, 80));
    if (this.snowflakes.length !== targetCount) {
      this.snowflakes = [];
      for (let i = 0;i < targetCount; i++) {
        this.snowflakes.push({
          x: Math.random() * width,
          y: Math.random() * height - Math.random() * 100,
          speedY: 15 + Math.random() * 10,
          speedX: (Math.random() - 0.5) * 8,
          size: 1.5 + Math.random() * 1.5,
          alpha: 0.6 + Math.random() * 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.3,
          swayPhase: Math.random() * Math.PI * 2,
          swaySpeed: 0.5 + Math.random() * 0.5
        });
      }
    }
    const currentTime = Date.now() * 0.001;
    const deltaTime = this.lastTime > 0 ? Math.min(currentTime - this.lastTime, 0.1) : 1 / 60;
    this.lastTime = currentTime;
    const currentAnimTime = currentTime;
    this.ctx.lineCap = "round";
    for (let i = 0;i < this.snowflakes.length; i++) {
      const flake = this.snowflakes[i];
      const sway = Math.sin(currentAnimTime * flake.swaySpeed + flake.swayPhase) * 2;
      flake.y += flake.speedY * deltaTime;
      flake.x += (flake.speedX + sway) * deltaTime;
      flake.rotation += flake.rotationSpeed * deltaTime;
      if (flake.y > height + 20) {
        flake.y = -20 - Math.random() * 50;
        flake.x = Math.random() * width;
      }
      if (flake.x < -10) {
        flake.x = width + 10;
      } else if (flake.x > width + 10) {
        flake.x = -10;
      }
      this.drawSnowflake(flake.x, flake.y, flake.size, flake.alpha, flake.rotation);
    }
  }
  drawSnowflake(x, y, size, alpha, rotation) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    for (let j = 0;j < 6; j++) {
      const angle = Math.PI / 3 * j;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(sin * size * 2.5, cos * size * 2.5);
      const branch1X = sin * size * 1.5 + cos * size * 0.5;
      const branch1Y = cos * size * 1.5 - sin * size * 0.5;
      const branch1EndX = sin * size * 1.8 + cos * size * 1.2;
      const branch1EndY = cos * size * 1.8 - sin * size * 1.2;
      this.ctx.moveTo(branch1X, branch1Y);
      this.ctx.lineTo(branch1EndX, branch1EndY);
      const branch2X = sin * size * 1.5 - cos * size * 0.5;
      const branch2Y = cos * size * 1.5 + sin * size * 0.5;
      const branch2EndX = sin * size * 1.8 - cos * size * 1.2;
      const branch2EndY = cos * size * 1.8 + sin * size * 1.2;
      this.ctx.moveTo(branch2X, branch2Y);
      this.ctx.lineTo(branch2EndX, branch2EndY);
    }
    this.ctx.stroke();
    this.ctx.restore();
  }
}

// src/animations/cloudy.ts
class CloudyAnimation extends BaseAnimation {
  draw(time, width, height, _timeOfDay) {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, 0.7);
  }
}

// src/animations/foggy.ts
class FoggyAnimation extends BaseAnimation {
  draw(time, width, height, _timeOfDay) {
    const currentTime = Date.now() * 0.0003;
    this.ctx.fillStyle = "rgba(200, 200, 200, 0.4)";
    for (let i = 0;i < 3; i++) {
      const y = height * (0.4 + i * 0.2);
      const offset = Math.sin(currentTime + i) * 20;
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      for (let x = 0;x <= width; x += 5) {
        const wave = Math.sin((x / width + currentTime) * Math.PI * 4 + i) * 15;
        this.ctx.lineTo(x, y + wave + offset);
      }
      this.ctx.lineTo(width, height);
      this.ctx.lineTo(0, height);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }
}

// src/animations/hail.ts
class HailAnimation extends BaseAnimation {
  hailStones = [];
  draw(time, width, height, _timeOfDay) {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, 1);
    this.drawHailStones(width, height);
  }
  drawHailStones(width, height) {
    const stoneCount = 60;
    if (this.hailStones.length !== stoneCount) {
      this.hailStones = [];
      for (let i = 0;i < stoneCount; i++) {
        this.hailStones.push({
          startX: Math.random() * width,
          startY: Math.random() * (height + 150) - 75,
          speed: 120 + Math.random() * 80,
          windOffset: (Math.random() - 0.5) * 20,
          size: 2 + Math.random() * 3,
          alpha: 0.8 + Math.random() * 0.15,
          phase: Math.random() * Math.PI * 2
        });
      }
    }
    const time = Date.now() * 0.002;
    this.ctx.fillStyle = "rgba(240, 250, 255, 1)";
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
    this.ctx.lineWidth = 0.5;
    for (let i = 0;i < this.hailStones.length; i++) {
      const hail = this.hailStones[i];
      const hailY = (hail.startY + time * hail.speed) % (height + 150);
      if (hailY > height + 30) {
        hail.startY = -30 - Math.random() * 30;
        hail.startX = Math.random() * width;
      }
      const wind = hail.windOffset * (1 + Math.sin(time * 0.6 + hail.phase) * 0.15);
      const hailX = (hail.startX + wind + time * 20 % width) % width;
      if (hailX < -5) {
        hail.startX = width + 5;
      } else if (hailX > width + 5) {
        hail.startX = -5;
      }
      this.drawHailStone(hailX, hailY, hail);
    }
  }
  drawHailStone(hailX, hailY, hail) {
    this.ctx.save();
    this.ctx.globalAlpha = hail.alpha;
    this.ctx.beginPath();
    this.ctx.ellipse(hailX, hailY, hail.size, hail.size * 0.9, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    this.ctx.beginPath();
    this.ctx.ellipse(hailX - hail.size * 0.3, hailY - hail.size * 0.3, hail.size * 0.3, hail.size * 0.25, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = "rgba(240, 250, 255, 1)";
    this.ctx.restore();
  }
}

// src/animations/thunderstorm.ts
class ThunderstormAnimation extends BaseAnimation {
  rainyAnimation;
  constructor(ctx) {
    super(ctx);
    this.rainyAnimation = new RainyAnimation(ctx);
  }
  draw(time, width, height, timeOfDay, withRain = true) {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, 1);
    if (withRain) {
      this.rainyAnimation.draw(time, width, height, timeOfDay, false);
    }
    this.drawLightning(width, height, currentTime);
  }
  drawLightning(width, height, time) {
    const flashPattern = Math.sin(time * 2.5) * Math.sin(time * 5.3) * Math.sin(time * 7.1);
    const flashIntensity = Math.max(0, flashPattern);
    if (flashIntensity > 0.4) {
      const normalizedIntensity = (flashIntensity - 0.4) / 0.6;
      const alpha = normalizedIntensity * 0.6;
      const fadeAlpha = Math.min(alpha, Math.sin(normalizedIntensity * Math.PI) * 0.6);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${fadeAlpha})`;
      this.ctx.fillRect(0, 0, width, height);
    }
  }
}

// src/components/styles.ts
var cardStyles = css`
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
`;

// src/components/clock.ts
class WeatherClock extends LitElement {
  constructor() {
    super(...arguments);
    this.format = null;
    this.currentTime = "";
  }
  clockInterval = null;
  static styles = css`
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
  `;
  connectedCallback() {
    super.connectedCallback();
    if (this.format) {
      this.updateTime();
      this.clockInterval = window.setInterval(() => this.updateTime(), 1000);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("format")) {
      if (this.clockInterval) {
        clearInterval(this.clockInterval);
        this.clockInterval = null;
      }
      if (this.format) {
        this.updateTime();
        this.clockInterval = window.setInterval(() => this.updateTime(), 1000);
      }
    }
  }
  updateTime() {
    if (!this.format)
      return;
    this.currentTime = formatClockTime(new Date, this.format, i18n.t("am"), i18n.t("pm"));
  }
  render() {
    if (!this.format)
      return html``;
    return html`<div class="clock">${this.currentTime}</div>`;
  }
}
__legacyDecorateClassTS([
  property({ type: String })
], WeatherClock.prototype, "format", undefined);
__legacyDecorateClassTS([
  state()
], WeatherClock.prototype, "currentTime", undefined);
customElements.define("weather-clock", WeatherClock);

// src/icons/svg-icons.ts
var SVG_ICONS = {
  wind: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,
  humidity: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,
  sunrise: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,
  sunset: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `
};
var windDirection = (bearing) => svg`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${bearing}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`;
var WEATHER_CONDITION_ICONS = {
  sunny: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,
  clear: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,
  "clear-night": svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,
  partlycloudy: svg`
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
  `,
  overcast: svg`
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
  `,
  cloudy: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,
  rainy: svg`
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
  `,
  rain: svg`
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
  `,
  pouring: svg`
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
  `,
  snowy: svg`
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
  `,
  snow: svg`
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
  `,
  foggy: svg`
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
  `,
  fog: svg`
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
  `,
  hail: svg`
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
  `,
  "snowy-rainy": svg`
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
  `,
  lightning: svg`
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
  `,
  "lightning-rainy": svg`
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
  `,
  windy: svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,
  "windy-variant": svg`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `
};
function getSVGIcon(name, ...args) {
  const icon = SVG_ICONS[name];
  if (typeof icon === "function") {
    return icon(...args);
  }
  return icon || "";
}
function getWeatherConditionIcon(condition) {
  if (!condition)
    return "";
  const icon = WEATHER_CONDITION_ICONS[condition.toLowerCase()];
  return icon || "";
}

// src/components/details.ts
class WeatherDetails extends LitElement {
  constructor() {
    super(...arguments);
    this.weather = null;
    this.sunData = null;
    this.config = null;
    this.entityAttributes = null;
  }
  static styles = css`
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
  `;
  hasContent() {
    if (!this.weather || !this.config)
      return false;
    return this.config.showHumidity && this.weather.humidity != null || this.config.showWind && this.weather.windSpeed != null || this.config.showSunriseSunset && this.sunData?.hasSunData === true;
  }
  renderHumidity() {
    if (!this.config?.showHumidity || this.weather?.humidity == null)
      return html``;
    return html`
      <div class="info-item">
        <span class="info-icon">${getSVGIcon("humidity")}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `;
  }
  renderSunrise() {
    if (!this.config?.showSunriseSunset || !this.sunData?.hasSunData || !this.sunData.sunrise) {
      return html``;
    }
    return html`
      <div class="info-item">
        <span class="info-icon">${getSVGIcon("sunrise")}</span>
        <span>${formatTime(this.sunData.sunrise, this.config.clockFormat, i18n.t("am"), i18n.t("pm"))}</span>
      </div>
    `;
  }
  renderWind() {
    if (!this.config?.showWind || this.weather?.windSpeed == null)
      return html``;
    const attrs = this.entityAttributes || {};
    const speed = convertWindSpeed(this.weather.windSpeed, attrs, this.config.windSpeedUnit);
    const unit = getWindSpeedUnit(attrs, this.config.windSpeedUnit, i18n.t.bind(i18n));
    let gustText = "";
    if (this.config.showWindGust && this.weather.windGust) {
      const gustSpeed = convertWindSpeed(this.weather.windGust, attrs, this.config.windSpeedUnit);
      gustText = ` / ${gustSpeed} ${unit}`;
    }
    const icon = this.config.showWindDirection && this.weather.windBearing != null ? windDirection(this.weather.windBearing) : getSVGIcon("wind");
    return html`
      <div class="info-item">
        <span class="info-icon">${icon}</span>
        <span>${speed} ${unit}${gustText}</span>
      </div>
    `;
  }
  renderSunset() {
    if (!this.config?.showSunriseSunset || !this.sunData?.hasSunData || !this.sunData.sunset) {
      return html``;
    }
    return html`
      <div class="info-item">
        <span class="info-icon">${getSVGIcon("sunset")}</span>
        <span>${formatTime(this.sunData.sunset, this.config.clockFormat, i18n.t("am"), i18n.t("pm"))}</span>
      </div>
    `;
  }
  render() {
    if (!this.hasContent())
      return html``;
    return html`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderSunrise()}
        ${this.renderWind()}
        ${this.renderSunset()}
      </div>
    `;
  }
}
__legacyDecorateClassTS([
  property({ type: Object })
], WeatherDetails.prototype, "weather", undefined);
__legacyDecorateClassTS([
  property({ type: Object })
], WeatherDetails.prototype, "sunData", undefined);
__legacyDecorateClassTS([
  property({ type: Object })
], WeatherDetails.prototype, "config", undefined);
__legacyDecorateClassTS([
  property({ type: Object })
], WeatherDetails.prototype, "entityAttributes", undefined);
customElements.define("weather-details", WeatherDetails);

// src/components/forecast-styles.ts
var forecastStyles = css`
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
`;

// src/components/hourly-forecast.ts
class HourlyForecast extends LitElement {
  constructor() {
    super(...arguments);
    this.forecast = [];
  }
  static styles = forecastStyles;
  _cleanup = null;
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._cleanup = setupHorizontalScroll(this.shadowRoot, ".forecast-scroll");
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanup?.();
    this._cleanup = null;
  }
  getTemperature(item) {
    return Math.round(item.temperature ?? item.temp ?? item.native_temperature ?? 0);
  }
  render() {
    if (this.forecast.length === 0)
      return html``;
    return html`
      <div class="forecast-container">
        <div class="forecast-title">${i18n.t("forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((item) => html`
            <div class="forecast-item">
              <div class="forecast-time">${formatForecastTime(item.datetime)}</div>
              <div class="forecast-icon">${getWeatherConditionIcon(item.condition || "sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(item)}°</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}
__legacyDecorateClassTS([
  property({ type: Array })
], HourlyForecast.prototype, "forecast", undefined);
customElements.define("hourly-forecast", HourlyForecast);

// src/components/daily-forecast.ts
class DailyForecast extends LitElement {
  constructor() {
    super(...arguments);
    this.forecast = [];
    this.lang = "en";
  }
  static styles = forecastStyles;
  _cleanup = null;
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._cleanup = setupHorizontalScroll(this.shadowRoot, ".forecast-scroll");
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanup?.();
    this._cleanup = null;
  }
  getTemperature(item) {
    return Math.round(item.temperature ?? item.temp ?? item.native_temperature ?? 0);
  }
  render() {
    if (this.forecast.length === 0)
      return html``;
    return html`
      <div class="forecast-container">
        <div class="forecast-title">${i18n.t("daily_forecast_title")}</div>
        <div class="forecast-scroll">
          ${this.forecast.map((item) => html`
            <div class="forecast-item">
              <div class="forecast-time">${formatForecastDay(item.datetime, this.lang)}</div>
              <div class="forecast-icon">${getWeatherConditionIcon(item.condition || "sunny")}</div>
              <div class="forecast-temp">${this.getTemperature(item)}°</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}
__legacyDecorateClassTS([
  property({ type: Array })
], DailyForecast.prototype, "forecast", undefined);
__legacyDecorateClassTS([
  property({ type: String })
], DailyForecast.prototype, "lang", undefined);
customElements.define("daily-forecast", DailyForecast);

// src/components/card.ts
class AnimatedWeatherCard extends LitElement {
  animationFrame = null;
  canvas = null;
  ctx = null;
  canvasWidth = 0;
  canvasHeight = 0;
  animations = {};
  holdTimer = null;
  holdDelay = 500;
  resizeObserver = null;
  lastTap = null;
  holdFired = false;
  hourlyForecastSubscription = null;
  dailyForecastSubscription = null;
  _testTimeOfDay;
  static get styles() {
    return cardStyles;
  }
  static getConfigElement() {
    return document.createElement("dynamic-weather-card-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:dynamic-weather-card",
      entity: "weather.home",
      show_hourly_forecast: true,
      hourly_forecast_hours: DEFAULT_CONFIG.hourlyForecastHours,
      show_daily_forecast: true,
      daily_forecast_days: DEFAULT_CONFIG.dailyForecastDays
    };
  }
  constructor() {
    super();
    this.hourlyForecast = [];
    this.dailyForecast = [];
    this.config = {};
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      setTimeout(() => {
        this.setupCanvas();
        if (this.canvas && this.ctx) {
          this.initializeAnimations();
          this.startAnimation();
          this.setupResizeObserver();
        }
      }, 100);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.unsubscribeForecastUpdates();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("hass") || changedProperties.has("config")) {
      if (this.canvas && this.ctx) {
        this.resizeCanvas();
      }
      if (this.hass && this.config.entity) {
        this.subscribeForecastUpdates();
      }
    }
    const resolvedLang = resolveLanguage({
      configLang: this.config?.language,
      hassLang: this.hass?.language
    });
    if (i18n.lang !== resolvedLang) {
      i18n.setLanguage(resolvedLang);
    }
  }
  initializeAnimations() {
    if (!this.ctx)
      return;
    this.animations = {
      sunny: new SunnyAnimation(this.ctx),
      rainy: new RainyAnimation(this.ctx),
      snowy: new SnowyAnimation(this.ctx),
      cloudy: new CloudyAnimation(this.ctx),
      foggy: new FoggyAnimation(this.ctx),
      hail: new HailAnimation(this.ctx),
      thunderstorm: new ThunderstormAnimation(this.ctx)
    };
  }
  setupResizeObserver() {
    if (!this.shadowRoot)
      return;
    const container = this.shadowRoot.querySelector(".canvas-container");
    if (!container)
      return;
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(container);
  }
  resizeCanvas() {
    if (!this.canvas || !this.shadowRoot)
      return;
    const container = this.shadowRoot.querySelector(".canvas-container");
    if (!container)
      return;
    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0)
      return;
    const dpr = window.devicePixelRatio || 2;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.ctx = this.canvas.getContext("2d");
    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }
    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;
    this.initializeAnimations();
  }
  setupCanvas() {
    if (!this.shadowRoot)
      return;
    const container = this.shadowRoot.querySelector(".canvas-container");
    if (!container)
      return;
    const oldCanvas = container.querySelector("canvas");
    if (oldCanvas) {
      oldCanvas.remove();
    }
    this.canvas = document.createElement("canvas");
    container.appendChild(this.canvas);
    this.resizeCanvas();
  }
  getState(entityId) {
    if (!this.hass || !entityId)
      return null;
    const entity = this.hass.states[entityId];
    return entity ? entity.state : null;
  }
  getAttributes(entityId) {
    if (!this.hass || !entityId)
      return {};
    const entity = this.hass.states[entityId];
    return entity ? entity.attributes : {};
  }
  getWeatherData() {
    const entityId = this.config.entity || "weather.home";
    const state3 = this.getState(entityId);
    const attrs = this.getAttributes(entityId);
    const condition = attrs.condition || state3 || "sunny";
    let templow = null;
    if (this.config.templowAttribute && attrs[this.config.templowAttribute] != null) {
      templow = attrs[this.config.templowAttribute];
    } else {
      for (const attrName of TEMPLOW_ATTRIBUTES) {
        if (attrs[attrName] != null) {
          templow = attrs[attrName];
          break;
        }
      }
      if (templow == null) {
        templow = (attrs.forecast && attrs.forecast[0] ? attrs.forecast[0].templow ?? null : null) || (attrs.forecast_hourly && attrs.forecast_hourly[0] ? attrs.forecast_hourly[0].native_templow ?? null : null);
      }
    }
    return {
      condition,
      temperature: attrs.temperature != null ? attrs.temperature : null,
      apparentTemperature: attrs.apparent_temperature || null,
      humidity: attrs.humidity != null ? attrs.humidity : null,
      windSpeed: attrs.wind_speed != null ? attrs.wind_speed : null,
      windGust: attrs.wind_gust_speed || attrs.wind_gust || null,
      windBearing: attrs.wind_bearing != null ? attrs.wind_bearing : null,
      windDirection: attrs.wind_direction || null,
      pressure: attrs.pressure || null,
      forecast: attrs.forecast || attrs.forecast_hourly || this.hourlyForecast || [],
      friendlyName: attrs.friendly_name || i18n.t("weather"),
      templow
    };
  }
  async subscribeForecastUpdates() {
    if (!this.hass || !this.config.entity) {
      return;
    }
    this.unsubscribeForecastUpdates();
    try {
      this.hourlyForecastSubscription = this.hass.connection.subscribeMessage((event) => {
        if (event.forecast && event.forecast.length > 0) {
          this.hourlyForecast = event.forecast;
        }
      }, {
        type: "weather/subscribe_forecast",
        forecast_type: "hourly",
        entity_id: this.config.entity
      });
      if (this.config.showDailyForecast) {
        this.dailyForecastSubscription = this.hass.connection.subscribeMessage((event) => {
          if (event.forecast && event.forecast.length > 0) {
            this.dailyForecast = event.forecast;
          }
        }, {
          type: "weather/subscribe_forecast",
          forecast_type: "daily",
          entity_id: this.config.entity
        });
      }
    } catch {}
  }
  async unsubscribeForecastUpdates() {
    if (this.hourlyForecastSubscription) {
      try {
        const unsubscribe = await this.hourlyForecastSubscription;
        unsubscribe();
      } catch {}
      this.hourlyForecastSubscription = null;
    }
    if (this.dailyForecastSubscription) {
      try {
        const unsubscribe = await this.dailyForecastSubscription;
        unsubscribe();
      } catch {}
      this.dailyForecastSubscription = null;
    }
  }
  getTodayForecast() {
    if (!this.hass || !this.config)
      return [];
    const hours = Math.max(1, Math.floor(Number(this.config.hourlyForecastHours ?? DEFAULT_CONFIG.hourlyForecastHours)));
    if (this.hourlyForecast && this.hourlyForecast.length > 0) {
      return this.hourlyForecast.slice(0, hours);
    }
    const weather = this.getWeatherData();
    if (!weather.forecast || weather.forecast.length === 0)
      return [];
    const now = new Date;
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const todayForecast = weather.forecast.filter((item) => {
      if (!item.datetime)
        return false;
      const itemDate = new Date(item.datetime);
      const itemDay = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate());
      return itemDay.getTime() === today.getTime() || itemDay.getTime() === tomorrow.getTime() && itemDate.getHours() <= now.getHours();
    });
    return todayForecast.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()).slice(0, hours);
  }
  getWeekForecast() {
    if (!this.hass || !this.config)
      return [];
    if (this.dailyForecast && this.dailyForecast.length > 0) {
      const days2 = Math.max(1, Math.floor(Number(this.config.dailyForecastDays ?? DEFAULT_CONFIG.dailyForecastDays)));
      return this.dailyForecast.slice(0, days2);
    }
    const weather = this.getWeatherData();
    if (!weather.forecast || weather.forecast.length === 0)
      return [];
    const days = Math.max(1, Math.floor(Number(this.config.dailyForecastDays ?? DEFAULT_CONFIG.dailyForecastDays)));
    const now = new Date;
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    const toDayKey = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    const dayBuckets = new Map;
    weather.forecast.forEach((item) => {
      if (!item.datetime)
        return;
      const itemDate = new Date(item.datetime);
      if (Number.isNaN(itemDate.getTime()))
        return;
      if (itemDate < start || itemDate >= end)
        return;
      const key = toDayKey(itemDate);
      const hourScore = Math.abs(itemDate.getHours() + itemDate.getMinutes() / 60 - 12);
      const existing = dayBuckets.get(key);
      if (!existing || hourScore < existing.hourScore) {
        dayBuckets.set(key, { item, itemDate, hourScore });
      }
    });
    return Array.from(dayBuckets.values()).sort((a, b) => a.itemDate.getTime() - b.itemDate.getTime()).map((entry) => entry.item).slice(0, days);
  }
  startAnimation() {
    const animate = () => {
      this.draw();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }
  draw() {
    if (!this.ctx || !this.canvas)
      return;
    if (!this.canvasWidth || !this.canvasHeight) {
      this.resizeCanvas();
      if (!this.canvasWidth || !this.canvasHeight)
        return;
    }
    const width = this.canvasWidth;
    const height = this.canvasHeight;
    this.ctx.clearRect(0, 0, width, height);
    const weather = this.getWeatherData();
    const weatherState = this.hass?.states[this.config.entity];
    const sunData = getSunriseSunsetData(weatherState || {}, this.config.sunriseEntity, this.config.sunsetEntity, this.hass);
    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);
    const condition = weather.condition.toLowerCase();
    switch (condition) {
      case "sunny":
      case "clear":
        this.animations.sunny?.draw(Date.now(), width, height, timeOfDay);
        break;
      case "clear-night":
        this.animations.sunny?.draw(Date.now(), width, height, { type: "night", progress: 0 });
        break;
      case "rainy":
      case "rain":
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, false);
        break;
      case "pouring":
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, true);
        break;
      case "snowy":
      case "snow":
        this.animations.snowy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case "snowy-rainy":
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, false);
        this.animations.snowy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case "hail":
        this.animations.hail?.draw(Date.now(), width, height, timeOfDay);
        break;
      case "foggy":
      case "fog":
        this.animations.foggy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case "lightning":
        this.animations.thunderstorm?.draw(Date.now(), width, height, timeOfDay, false);
        break;
      case "lightning-rainy":
        this.animations.thunderstorm?.draw(Date.now(), width, height, timeOfDay, true);
        break;
      case "cloudy":
      case "partlycloudy":
      default:
        this.animations.cloudy?.draw(Date.now(), width, height, timeOfDay);
        break;
    }
  }
  getDetailsConfig() {
    return {
      showHumidity: this.config.showHumidity ?? true,
      showWind: this.config.showWind ?? true,
      showWindGust: this.config.showWindGust ?? true,
      showWindDirection: this.config.showWindDirection ?? true,
      showSunriseSunset: this.config.showSunriseSunset ?? true,
      clockFormat: this.config.clockFormat ?? "24h",
      windSpeedUnit: this.config.windSpeedUnit ?? "ms"
    };
  }
  setConfig(config) {
    if (!config.entity) {
      throw new Error("Please define a weather entity");
    }
    const showHourlyForecast = config.show_hourly_forecast ?? config.show_forecast;
    this.config = {
      type: "custom:dynamic-weather-card",
      entity: config.entity,
      icons_path: config.icons_path,
      name: config.name,
      height: config.height || DEFAULT_CONFIG.height,
      showFeelsLike: config.show_feels_like !== false,
      showWind: config.show_wind !== false,
      showWindGust: config.show_wind_gust !== false,
      showWindDirection: config.show_wind_direction !== false,
      showHumidity: config.show_humidity !== false,
      showMinTemp: config.show_min_temp !== false,
      showForecast: config.show_forecast === true,
      showHourlyForecast: showHourlyForecast === true,
      showDailyForecast: config.show_daily_forecast === true,
      hourlyForecastHours: config.hourly_forecast_hours ?? DEFAULT_CONFIG.hourlyForecastHours,
      dailyForecastDays: config.daily_forecast_days ?? DEFAULT_CONFIG.dailyForecastDays,
      showSunriseSunset: config.show_sunrise_sunset !== false,
      showClock: config.show_clock === true,
      clockPosition: config.clock_position || DEFAULT_CONFIG.clockPosition,
      clockFormat: config.clock_format || DEFAULT_CONFIG.clockFormat,
      overlayOpacity: config.overlay_opacity !== undefined ? config.overlay_opacity : DEFAULT_CONFIG.overlayOpacity,
      language: config.language || DEFAULT_CONFIG.language,
      windSpeedUnit: config.wind_speed_unit || DEFAULT_CONFIG.windSpeedUnit,
      sunriseEntity: config.sunrise_entity || null,
      sunsetEntity: config.sunset_entity || null,
      templowAttribute: config.templow_attribute || null,
      tapAction: config.tap_action || { action: "more-info" },
      holdAction: config.hold_action || { action: "none" },
      doubleTapAction: config.double_tap_action || { action: "none" }
    };
    if (this.config.language) {
      i18n.setLanguage(this.config.language);
    }
  }
  handleAction(actionConfig) {
    if (!actionConfig || !this.hass)
      return;
    const action = actionConfig.action || "more-info";
    switch (action) {
      case "more-info":
        this.fireEvent("hass-more-info", { entityId: actionConfig.entity || this.config.entity });
        break;
      case "toggle":
        this.hass.callService("homeassistant", "toggle", {
          entity_id: actionConfig.entity || this.config.entity
        });
        break;
      case "call-service":
        if (actionConfig.service) {
          const [domain, service] = actionConfig.service.split(".");
          this.hass.callService(domain, service, actionConfig.service_data || {});
        }
        break;
      case "navigate":
        if (actionConfig.navigation_path) {
          window.history.pushState(null, "", actionConfig.navigation_path);
          this.fireEvent("location-changed", { replace: false });
        }
        break;
      case "url":
        if (actionConfig.url_path) {
          window.open(actionConfig.url_path);
        }
        break;
      case "none":
      default:
        break;
    }
  }
  fireEvent(type, detail = {}) {
    const event = new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
  handleTap(e) {
    if (e.target.closest(".forecast-item") || e.target.closest(".info-item")) {
      return;
    }
    if (this.lastTap && Date.now() - this.lastTap < 300) {
      this.handleDoubleTap(e);
      this.lastTap = null;
      return;
    }
    this.lastTap = Date.now();
    setTimeout(() => {
      if (this.lastTap) {
        this.handleAction(this.config.tapAction);
        this.lastTap = null;
      }
    }, 300);
  }
  handlePointerDown(e) {
    this.holdTimer = window.setTimeout(() => {
      this.handleHold(e);
      this.holdFired = true;
    }, this.holdDelay);
  }
  handlePointerUp(e) {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
    }
    if (this.holdFired) {
      e.preventDefault();
      e.stopPropagation();
      this.holdFired = false;
    }
  }
  handleHold(_e) {
    this.handleAction(this.config.holdAction);
  }
  handleDoubleTap(_e) {
    this.handleAction(this.config.doubleTapAction);
  }
  getCardSize() {
    return 1;
  }
  render() {
    if (!this.hass) {
      return html`<div>No Home Assistant connection</div>`;
    }
    const weather = this.getWeatherData();
    const weatherState = this.hass.states[this.config.entity];
    const sunData = getSunriseSunsetData(weatherState, this.config.sunriseEntity, this.config.sunsetEntity, this.hass);
    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);
    const cardClasses = `weather-card ${timeOfDay.type}`;
    const minHeight = this.config.height ? `${this.config.height}px` : "200px";
    const bgGradient = getBackgroundGradient(timeOfDay);
    const bgStyle = bgGradient ? `background: linear-gradient(135deg, rgb(${bgGradient.start.r}, ${bgGradient.start.g}, ${bgGradient.start.b}), rgb(${bgGradient.end.r}, ${bgGradient.end.g}, ${bgGradient.end.b}));` : "";
    const overlayOpacity = this.config.overlayOpacity !== undefined ? this.config.overlayOpacity : DEFAULT_CONFIG.overlayOpacity;
    const overlayStyle = `--overlay-opacity: ${overlayOpacity};`;
    return html`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${cardClasses}" style="min-height: ${minHeight}; ${bgStyle}; ${overlayStyle} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name && this.config.name.trim() !== "" ? html`
              <div class="header">
                <div class="location">${this.config.name}</div>
              </div>
            ` : ""}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${i18n.t(weather.condition)}</div>
                <div class="temperature">${weather.temperature != null ? Math.round(weather.temperature) + "°" : i18n.t("no_data")}</div>
                ${this.config.showMinTemp ? html`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${weather.templow != null ? `${Math.round(weather.templow)}°` : i18n.t("no_data")}</span>
                  </div>
                ` : ""}
                ${this.config.showFeelsLike ? html`
                  <div class="feels-like">${i18n.t("feels_like")} ${weather.apparentTemperature != null ? `${Math.round(weather.apparentTemperature)}°` : i18n.t("no_data")}</div>
                ` : ""}
              </div>
              <weather-clock
                .format=${this.config.showClock && this.config.clockPosition === "top" ? this.config.clockFormat : null}
              ></weather-clock>
            </div>
            <div class="details ${this.config.showClock && this.config.clockPosition === "details" ? "details--clock" : ""}">
              <weather-details
                .weather=${weather}
                .sunData=${sunData}
                .config=${this.getDetailsConfig()}
                .entityAttributes=${this.getAttributes(this.config.entity)}
              ></weather-details>
              <weather-clock
                .format=${this.config.showClock && this.config.clockPosition === "details" ? this.config.clockFormat : null}
              ></weather-clock>
            </div>
            <hourly-forecast
              .forecast=${this.config.showHourlyForecast ? this.getTodayForecast() : []}
            ></hourly-forecast>
            <daily-forecast
              .forecast=${this.config.showDailyForecast ? this.getWeekForecast() : []}
              .lang=${i18n.lang}
            ></daily-forecast>
          </div>
        </div>
      </ha-card>
    `;
  }
}
__legacyDecorateClassTS([
  property({ type: Object })
], AnimatedWeatherCard.prototype, "hass", undefined);
__legacyDecorateClassTS([
  property({ type: Object })
], AnimatedWeatherCard.prototype, "config", undefined);
__legacyDecorateClassTS([
  state()
], AnimatedWeatherCard.prototype, "hourlyForecast", undefined);
__legacyDecorateClassTS([
  state()
], AnimatedWeatherCard.prototype, "dailyForecast", undefined);

// src/components/editor.ts
class DynamicWeatherCardEditor extends LitElement {
  constructor() {
    super(...arguments);
    this._config = {};
  }
  setConfig(config) {
    this._config = {
      name: "",
      height: DEFAULT_CONFIG.height,
      show_feels_like: DEFAULT_CONFIG.showFeelsLike,
      show_wind: DEFAULT_CONFIG.showWind,
      show_wind_gust: DEFAULT_CONFIG.showWindGust,
      show_wind_direction: DEFAULT_CONFIG.showWindDirection,
      show_humidity: DEFAULT_CONFIG.showHumidity,
      show_min_temp: DEFAULT_CONFIG.showMinTemp,
      show_hourly_forecast: DEFAULT_CONFIG.showHourlyForecast,
      hourly_forecast_hours: DEFAULT_CONFIG.hourlyForecastHours,
      show_daily_forecast: DEFAULT_CONFIG.showDailyForecast,
      daily_forecast_days: DEFAULT_CONFIG.dailyForecastDays,
      show_sunrise_sunset: DEFAULT_CONFIG.showSunriseSunset,
      show_clock: DEFAULT_CONFIG.showClock,
      clock_position: DEFAULT_CONFIG.clockPosition,
      clock_format: DEFAULT_CONFIG.clockFormat,
      overlay_opacity: DEFAULT_CONFIG.overlayOpacity,
      language: DEFAULT_CONFIG.language,
      wind_speed_unit: DEFAULT_CONFIG.windSpeedUnit,
      sunrise_entity: "",
      sunset_entity: "",
      ...config
    };
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("hass")) {
      const resolvedLang = resolveLanguage({ hassLang: this.hass?.language });
      if (i18n.lang !== resolvedLang) {
        i18n.setLanguage(resolvedLang);
        this.requestUpdate();
      }
    }
  }
  get _schema() {
    return [
      { name: "entity", required: true, selector: { entity: { domain: ["weather"] } } },
      { name: "name", selector: { text: {} } },
      { name: "height", selector: { number: { min: 200, max: 800, step: 10, mode: "box" } } },
      { name: "show_feels_like", selector: { boolean: {} } },
      { name: "show_wind", selector: { boolean: {} } },
      { name: "show_wind_gust", selector: { boolean: {} } },
      { name: "show_wind_direction", selector: { boolean: {} } },
      { name: "show_humidity", selector: { boolean: {} } },
      { name: "show_min_temp", selector: { boolean: {} } },
      { name: "show_hourly_forecast", selector: { boolean: {} } },
      { name: "hourly_forecast_hours", selector: { number: { min: 1, max: 24, step: 1, mode: "box" } } },
      { name: "show_daily_forecast", selector: { boolean: {} } },
      { name: "daily_forecast_days", selector: { number: { min: 1, max: 14, step: 1, mode: "box" } } },
      { name: "show_sunrise_sunset", selector: { boolean: {} } },
      { name: "sunrise_entity", selector: { entity: { domain: ["sensor"] } } },
      { name: "sunset_entity", selector: { entity: { domain: ["sensor"] } } },
      { name: "show_clock", selector: { boolean: {} } },
      {
        name: "clock_position",
        selector: {
          select: {
            options: [
              { label: i18n.t("editor.clock_position_top"), value: "top" },
              { label: i18n.t("editor.clock_position_details"), value: "details" }
            ]
          }
        }
      },
      {
        name: "clock_format",
        selector: {
          select: {
            options: [
              { label: i18n.t("editor.clock_format_24h"), value: "24h" },
              { label: i18n.t("editor.clock_format_12h"), value: "12h" }
            ]
          }
        }
      },
      { name: "overlay_opacity", selector: { number: { min: 0, max: 1, step: 0.05, mode: "box" } } },
      {
        name: "language",
        selector: {
          select: {
            options: [
              { label: i18n.t("editor.language_auto"), value: "auto" },
              { label: i18n.t("editor.language_en"), value: "en" },
              { label: i18n.t("editor.language_ru"), value: "ru" },
              { label: i18n.t("editor.language_de"), value: "de" },
              { label: i18n.t("editor.language_nl"), value: "nl" },
              { label: i18n.t("editor.language_fr"), value: "fr" },
              { label: i18n.t("editor.language_es"), value: "es" }
            ]
          }
        }
      },
      {
        name: "wind_speed_unit",
        selector: {
          select: {
            options: [
              { label: i18n.t("editor.wind_speed_unit_ms"), value: "ms" },
              { label: i18n.t("editor.wind_speed_unit_kmh"), value: "kmh" }
            ]
          }
        }
      }
    ];
  }
  _computeLabel = (schema) => {
    const key = `editor.${schema.name}`;
    const label = i18n.t(key);
    return label === key ? schema.name : label;
  };
  _valueChanged(ev) {
    const value = ev.detail?.value;
    if (!value)
      return;
    this._config = value;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: this._config },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    if (!this.hass) {
      return html``;
    }
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}
__legacyDecorateClassTS([
  property({ attribute: false })
], DynamicWeatherCardEditor.prototype, "hass", undefined);
__legacyDecorateClassTS([
  state()
], DynamicWeatherCardEditor.prototype, "_config", undefined);
// node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c) => (...values) => ({
  ["_$litDirective$"]: c,
  values
});

class Directive {
  constructor(_partInfo) {}
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
}
// node_modules/lit-html/development/directive-helpers.js
var ENABLE_SHADYDOM_NOPATCH2 = true;
var wrap2 = ENABLE_SHADYDOM_NOPATCH2 && window.ShadyDOM?.inUse && window.ShadyDOM?.noPatch === true ? window.ShadyDOM.wrap : (node) => node;
var isSingleExpression = (part) => part.strings === undefined;

// node_modules/lit-html/development/async-directive.js
var DEV_MODE6 = true;
var notifyChildrenConnectedChanged = (parent, isConnected) => {
  const children = parent._$disconnectableChildren;
  if (children === undefined) {
    return false;
  }
  for (const obj of children) {
    obj["_$notifyDirectiveConnectionChanged"]?.(isConnected, false);
    notifyChildrenConnectedChanged(obj, isConnected);
  }
  return true;
};
var removeDisconnectableFromParent = (obj) => {
  let parent, children;
  do {
    if ((parent = obj._$parent) === undefined) {
      break;
    }
    children = parent._$disconnectableChildren;
    children.delete(obj);
    obj = parent;
  } while (children?.size === 0);
};
var addDisconnectableToParent = (obj) => {
  for (let parent;parent = obj._$parent; obj = parent) {
    let children = parent._$disconnectableChildren;
    if (children === undefined) {
      parent._$disconnectableChildren = children = new Set;
    } else if (children.has(obj)) {
      break;
    }
    children.add(obj);
    installDisconnectAPI(parent);
  }
};
function reparentDisconnectables(newParent) {
  if (this._$disconnectableChildren !== undefined) {
    removeDisconnectableFromParent(this);
    this._$parent = newParent;
    addDisconnectableToParent(this);
  } else {
    this._$parent = newParent;
  }
}
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
  const value = this._$committedValue;
  const children = this._$disconnectableChildren;
  if (children === undefined || children.size === 0) {
    return;
  }
  if (isClearingValue) {
    if (Array.isArray(value)) {
      for (let i = fromPartIndex;i < value.length; i++) {
        notifyChildrenConnectedChanged(value[i], false);
        removeDisconnectableFromParent(value[i]);
      }
    } else if (value != null) {
      notifyChildrenConnectedChanged(value, false);
      removeDisconnectableFromParent(value);
    }
  } else {
    notifyChildrenConnectedChanged(this, isConnected);
  }
}
var installDisconnectAPI = (obj) => {
  if (obj.type == PartType.CHILD) {
    obj._$notifyConnectionChanged ??= notifyChildPartConnectedChanged;
    obj._$reparentDisconnectables ??= reparentDisconnectables;
  }
};

class AsyncDirective extends Directive {
  constructor() {
    super(...arguments);
    this._$disconnectableChildren = undefined;
  }
  _$initialize(part, parent, attributeIndex) {
    super._$initialize(part, parent, attributeIndex);
    addDisconnectableToParent(this);
    this.isConnected = part._$isConnected;
  }
  ["_$notifyDirectiveConnectionChanged"](isConnected, isClearingDirective = true) {
    if (isConnected !== this.isConnected) {
      this.isConnected = isConnected;
      if (isConnected) {
        this.reconnected?.();
      } else {
        this.disconnected?.();
      }
    }
    if (isClearingDirective) {
      notifyChildrenConnectedChanged(this, isConnected);
      removeDisconnectableFromParent(this);
    }
  }
  setValue(value) {
    if (isSingleExpression(this.__part)) {
      this.__part._$setValue(value, this);
    } else {
      if (DEV_MODE6 && this.__attributeIndex === undefined) {
        throw new Error(`Expected this.__attributeIndex to be a number`);
      }
      const newValues = [...this.__part._$committedValue];
      newValues[this.__attributeIndex] = value;
      this.__part._$setValue(newValues, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}
// src/internationalization/directive.ts
class TDirective extends AsyncDirective {
  _key = "";
  _onLangChange = null;
  render(key) {
    this._key = key;
    return i18n.t(key);
  }
  reconnected() {
    this._onLangChange = () => {
      this.setValue(i18n.t(this._key));
    };
    window.addEventListener("language-changed", this._onLangChange);
  }
  disconnected() {
    if (this._onLangChange) {
      window.removeEventListener("language-changed", this._onLangChange);
    }
  }
}
var t = directive(TDirective);

// src/index.ts
try {
  customElements.define("dynamic-weather-card", AnimatedWeatherCard);
  customElements.define("dynamic-weather-card-editor", DynamicWeatherCardEditor);
  console.log(`%cDynamic Weather Card %c${VERSION}`, "color: #007AFF; font-weight: bold; font-size: 14px;", "color: #666; font-size: 12px;", `
Динамическая карточка погоды`);
  window.customCards = window.customCards || [];
  const cardRegistration = {
    type: "dynamic-weather-card",
    name: "Dynamic Weather Card",
    description: "Динамическая карточка погоды",
    preview: true,
    documentationURL: "https://github.com/teuchezh/dynamic-weather-card"
  };
  window.customCards.push(cardRegistration);
} catch (error) {
  console.error("❌ Ошибка при регистрации Dynamic Weather Card:", error);
}
export {
  t,
  resolveLanguage,
  i18n
};
