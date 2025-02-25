HTMLLinkElement = function HTMLLinkElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLLinkElement);

; (function () {
    const $safe_get_attribute = ['as', 'charset', 'crossOrigin', 'disabled', 'href', 'hreflang', 'imageSizes', 'imageSrcset', 'integrity', 'media', 'referrerPolicy', 'rel', 'relList', 'rev', 'sheet', 'sizes', 'target', 'type'];
    const $safe_set_attribute = ['as', 'charset', 'crossOrigin', 'disabled', 'href', 'hreflang', 'imageSizes', 'imageSrcset', 'integrity', 'media', 'referrerPolicy', 'rel', 'relList', 'rev', 'sizes', 'target', 'type'];
    const $safe_func_attribute = [];

    HTMLLinkElement.prototype = {
        get as() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).as, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'as', arguments, result);
            return result;
        },
        set as(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'as', arguments);
            myVm.memory.private_data.get(this).as = "";
        },
        get charset() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).charset, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'charset', arguments, result);
            return result;
        },
        set charset(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'charset', arguments);
            myVm.memory.private_data.get(this).charset = value + "";
        },
        get crossOrigin() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).crossOrigin, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'crossOrigin', arguments, result);
            return result;
        },
        set crossOrigin(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'crossOrigin', arguments);
            myVm.memory.private_data.get(this).crossOrigin = "anonymous";
        },
        get disabled() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).disabled, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'disabled', arguments, result);
            return result;
        },
        set disabled(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'disabled', arguments);
            myVm.memory.private_data.get(this).disabled = value ? true : false;
        },
        get href() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).href, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'href', arguments, result);
            return result;
        },
        set href(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'href', arguments);
            myVm.memory.private_data.get(this).href =  + `${location.origin}/${value}`;
        },
        get hreflang() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).hreflang, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'hreflang', arguments, result);
            return result;
        },
        set hreflang(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'hreflang', arguments);
            myVm.memory.private_data.get(this).hreflang = value + "";
        },
        get imageSizes() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).imageSizes, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'imageSizes', arguments, result);
            return result;
        },
        set imageSizes(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'imageSizes', arguments);
            myVm.memory.private_data.get(this).imageSizes = value + "";
        },
        get imageSrcset() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).imageSrcset, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'imageSrcset', arguments, result);
            return result;
        },
        set imageSrcset(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'imageSrcset', arguments);
            myVm.memory.private_data.get(this).imageSrcset = value + "";
        },
        get integrity() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).integrity, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'integrity', arguments, result);
            return result;
        },
        set integrity(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'integrity', arguments);
            myVm.memory.private_data.get(this).integrity = value + "";
        },
        get media() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).media, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'media', arguments, result);
            return result;
        },
        set media(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'media', arguments);
            myVm.memory.private_data.get(this).media = value + "";
        },
        get referrerPolicy() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).referrerPolicy, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'referrerPolicy', arguments, result);
            return result;
        },
        set referrerPolicy(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'referrerPolicy', arguments);
            myVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get rel() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).rel, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'rel', arguments, result);
            return result;
        },
        set rel(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'rel', arguments);
            myVm.memory.private_data.get(this).rel = value + "";
        },
        get relList() {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set relList(value) {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'relList', arguments);
            myVm.memory.private_data.get(this).relList = value + "";
        },
        get rev() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).rev, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'rev', arguments, result);
            return result;
        },
        set rev(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'rev', arguments);
            myVm.memory.private_data.get(this).rev = value + "";
        },
        get sheet() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).sheet, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'sheet', arguments, result);
            return result;
        },
        get sizes() {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).sizes, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'sheet', arguments, result);
            return result;
        },
        set sizes(value) {  // DOMTokenList
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'sizes', arguments);
            myVm.memory.private_data.get(this).sizes = value + "";
        },
        get target() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).target, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'target', arguments, result);
            return result;
        },
        set target(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'target', arguments);
            myVm.memory.private_data.get(this).target = value + "";
        },
        get type() {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).type, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLinkElement', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!HTMLLinkElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLinkElement', 'type', arguments);
            myVm.memory.private_data.get(this).type = value + "";
        },
    }

    myVm.rename(HTMLLinkElement.prototype, "HTMLLinkElement");
    myVm.safeDescriptor_addConstructor(HTMLLinkElement);
    myVm.safe_Objattribute(HTMLLinkElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLinkElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLinkElement, HTMLElement);

})();


myVm.memory.htmlElements["link"] = function () {
    return new HTMLLinkElement(myVm.memory.$createObj_key);
}