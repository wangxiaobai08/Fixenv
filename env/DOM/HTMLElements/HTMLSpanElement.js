HTMLSpanElement = function HTMLSpanElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLSpanElement);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLSpanElement.prototype = {};

    myVm.rename(HTMLSpanElement.prototype, "HTMLSpanElement");
    myVm.safeDescriptor_addConstructor(HTMLSpanElement);
    myVm.safe_Objattribute(HTMLSpanElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLSpanElement, HTMLElement);

})();

myVm.memory.htmlElements["span"] = function () {
    return new HTMLSpanElement(myVm.memory.$createObj_key);
}
