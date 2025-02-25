HTMLMetaElement = function HTMLMetaElement(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLMetaElement);

; (function () {
    const $safe_get_attribute = ['content', 'httpEquiv', 'media', 'name', 'scheme'];
    const $safe_set_attribute = ['content', 'httpEquiv', 'media', 'name', 'scheme'];
    const $safe_func_attribute = [];
    HTMLMetaElement.prototype = {

        get content() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).content, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLMetaElement', 'content', arguments, result);
            return result;
        },
        set content(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLMetaElement', 'content', arguments);
            myVm.memory.private_data.get(this).content = value + "";
        },
        get httpEquiv() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).httpEquiv, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLMetaElement', 'httpEquiv', arguments, result);
            return result;
        },
        set httpEquiv(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLMetaElement', 'httpEquiv', arguments);
            myVm.memory.private_data.get(this).httpEquiv = value + "";
        },
        get media() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).media, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLMetaElement', 'media', arguments, result);
            return result;
        },
        set media(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLMetaElement', 'media', arguments);
            myVm.memory.private_data.get(this).media = value + "";
        },
        get name() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).name, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLMetaElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLMetaElement', 'name', arguments);
            myVm.memory.private_data.get(this).name = value + "";
        },
        get scheme() {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).scheme, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLMetaElement', 'scheme', arguments, result);
            return result;
        },
        set scheme(value) {
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLMetaElement', 'scheme', arguments);
            myVm.memory.private_data.get(this).scheme = value + "";
        },
    }
    myVm.rename(HTMLMetaElement.prototype, "HTMLMetaElement");
    myVm.safeDescriptor_addConstructor(HTMLMetaElement);
    myVm.safe_Objattribute(HTMLMetaElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLMetaElement, HTMLElement);
})();

myVm.memory.htmlElements["meta"] = function () {
    return new HTMLMetaElement(myVm.memory.$createObj_key);
}