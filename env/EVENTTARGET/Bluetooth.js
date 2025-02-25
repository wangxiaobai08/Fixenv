Bluetooth = function Bluetooth(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Bluetooth);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getAvailability', 'requestDevice'];

    Bluetooth.prototype = {
        getAvailability() {
            if (!Bluetooth.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Bluetooth', 'getAvailability', arguments, result);
            return result;
        },
        requestDevice() {
            if (!Bluetooth.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Bluetooth', 'requestDevice', arguments, result);
            return result;
        },
    }
    myVm.rename(Bluetooth.prototype, "Bluetooth");
    myVm.safeDescriptor_addConstructor(Bluetooth);
    myVm.safe_Objattribute(Bluetooth, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Bluetooth.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Bluetooth, EventTarget);

})();