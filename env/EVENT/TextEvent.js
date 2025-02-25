TextEvent = function TextEvent(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(TextEvent);

; (function () {
    const $safe_get_attribute = ['data'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initTextEvent'];

    TextEvent.prototype = {
        get data() {
            if (!TextEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).data, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'TextEvent', 'data', arguments, result);
            return result;
        },
        initTextEvent() {
            if (!TextEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'TextEvent', 'initTextEvent', arguments, result);
            return result;
        },
    }
    myVm.rename(TextEvent.prototype, "TextEvent");
    myVm.safeDescriptor_addConstructor(TextEvent);
    myVm.safe_Objattribute(TextEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(TextEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(TextEvent, UIEvent);
})();

