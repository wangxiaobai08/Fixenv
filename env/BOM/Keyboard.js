Keyboard = function Keyboard(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Keyboard);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getLayoutMap', 'lock', 'unlock'];

    Keyboard.prototype = {
        getLayoutMap() {
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Keyboard', 'getLayoutMap', arguments, result);
            return result;
        },
        lock() {
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Keyboard', 'lock', arguments, result);
            return result;
        },
        unlock() {
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Keyboard', 'unlock', arguments, result);
            return result;
        },
    }
    myVm.rename(Keyboard.prototype, "Keyboard");
    myVm.safeDescriptor_addConstructor(Keyboard);
    myVm.safe_Objattribute(Keyboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

