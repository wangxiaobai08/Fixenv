HTMLDivElement = function HTMLDivElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLDivElement);

; (function () {
    const $safe_get_attribute = ['align'];
    const $safe_set_attribute = ['align'];
    const $safe_func_attribute = [];

    HTMLDivElement.prototype = {
        get align() {
            if (!HTMLDivElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = myVm.abs(myVm.memory.private_data.get(this).align, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLDivElement', 'align', arguments, result);
            return result;
        },
        set align(value) {
            if (!HTMLDivElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            myVm.memory.private_data.get(this).align = value + "";
        }
    };

    myVm.rename(HTMLDivElement.prototype, "HTMLDivElement");
    myVm.safeDescriptor_addConstructor(HTMLDivElement);
    myVm.safe_Objattribute(HTMLDivElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLDivElement, HTMLElement);

})();

myVm.memory.htmlElements["div"] = function () {
    return new HTMLDivElement(myVm.memory.$createObj_key);
}

