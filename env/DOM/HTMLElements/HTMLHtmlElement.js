HTMLHtmlElement = function HTMLHtmlElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLHtmlElement);

; (function () {
    const $safe_get_attribute = ['version'];
    const $safe_set_attribute = ['version'];
    const $safe_func_attribute = [];

    HTMLHtmlElement.prototype = {
        get version() {
            if (!HTMLHtmlElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = myVm.abs(myVm.memory.private_data.get(this).version, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLHtmlElement', 'version', arguments, result);
            return result;
        },
        set version(value) {
            if (!HTMLHtmlElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            myVm.memory.private_data.get(this).version = value + "";
        }
    };

    myVm.rename(HTMLHtmlElement.prototype, "HTMLHtmlElement");
    myVm.safeDescriptor_addConstructor(HTMLHtmlElement);
    myVm.safe_Objattribute(HTMLHtmlElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLHtmlElement, HTMLElement);
})();
myVm.memory.htmlElements["html"] = function () {
    return new HTMLHtmlElement(myVm.memory.$createObj_key);
}

