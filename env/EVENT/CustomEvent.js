CustomEvent = function CustomEvent(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(CustomEvent);

; (function () {
    const $safe_get_attribute = ['detail'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initCustomEvent'];

    CustomEvent.prototype = {
        get detail() {
            if (!CustomEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).detail, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'CustomEvent', 'detail', arguments, result);
            return result;
        },
        initCustomEvent() {
            if (!CustomEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CustomEvent', 'initCustomEvent', arguments, result);
            return result;
        }
    };
    myVm.rename(CustomEvent.prototype, "CustomEvent");
    myVm.safeDescriptor_addConstructor(CustomEvent);
    myVm.safe_Objattribute(CustomEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CustomEvent.prototype, Event.prototype);
    Object.setPrototypeOf(CustomEvent, Event);

})();