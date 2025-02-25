HTMLHeadElement = function HTMLHeadElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLHeadElement);


; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLHeadElement.prototype = {
    };

    myVm.rename(HTMLHeadElement.prototype, "HTMLHeadElement");
    myVm.safeDescriptor_addConstructor(HTMLHeadElement);
    myVm.safe_Objattribute(HTMLHeadElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLHeadElement, HTMLElement);
})();
myVm.memory.htmlElements["head"] = function () {
    return new HTMLHeadElement(myVm.memory.$createObj_key);
}


