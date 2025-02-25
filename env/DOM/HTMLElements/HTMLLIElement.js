HTMLLIElement = function HTMLLIElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLLIElement);

; (function () {
    const $safe_get_attribute = ['type', 'value'];
    const $safe_set_attribute = ['type', 'value'];
    const $safe_func_attribute = [];
    HTMLLIElement.prototype = {

        get type() {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).type, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLIElement', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLLIElement', 'type', arguments);
            myVm.memory.private_data.get(this).type = value + "";
        },
        get value() {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).value, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLLIElement', 'value', arguments, result);
            return result;
        },
        set value(value) {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            myVm.memory.private_data.get(this).value = value + "";
        }
    };

    myVm.rename(HTMLLIElement.prototype, "HTMLLIElement");
    myVm.safeDescriptor_addConstructor(HTMLLIElement);
    myVm.safe_Objattribute(HTMLLIElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLIElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLIElement, HTMLElement);

})();

myVm.memory.htmlElements["li"] = function () {
    return new HTMLLIElement(myVm.memory.$createObj_key);
}

