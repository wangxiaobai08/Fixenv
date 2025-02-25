HTMLLabelElement = function HTMLLabelElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLLabelElement);

; (function () {
    const $safe_get_attribute = ['control', 'form', 'htmlFor'];
    const $safe_set_attribute = ['htmlFor'];
    const $safe_func_attribute = [];

    HTMLLabelElement.prototype = {
        get control() {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).control, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLabelElement', 'control', arguments, result);
            return result;
        },
        get form() {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).form, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLabelElement', 'form', arguments, result);
            return result;
        },
        get htmlFor() {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).htmlFor, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLabelElement', 'htmlFor', arguments, result);
            return result;
        },
        set htmlFor(value) {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLabelElement', 'htmlFor', arguments);
            myVm.memory.private_data.get(this).htmlFor = value + "";
        },
    }

    myVm.rename(HTMLLabelElement.prototype, "HTMLLabelElement");
    myVm.safeDescriptor_addConstructor(HTMLLabelElement);
    myVm.safe_Objattribute(HTMLLabelElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLabelElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLabelElement, HTMLElement);

})();


myVm.memory.htmlElements["label"] = function () {
    return new HTMLLabelElement(myVm.memory.$createObj_key);
}