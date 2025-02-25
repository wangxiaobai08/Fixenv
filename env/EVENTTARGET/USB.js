USB = function USB(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(USB);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getDevices', 'requestDevice'];

    USB.prototype = {
        getDevices() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'USB', 'getDevices', arguments, result);
            return result;
        },
        get onconnect() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onconnect, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'USB', 'onconnect', arguments, result);
            return result;
        },
        set onconnect(value) {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'USB', 'onconnect', arguments);
            myVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondisconnect, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'USB', 'ondisconnect', arguments, result);
            return result;
        },
        set ondisconnect(value) {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'USB', 'ondisconnect', arguments);
            myVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestDevice() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'USB', 'requestDevice', arguments, result);
            return result;
        },
    }
    myVm.rename(USB.prototype, "USB");
    myVm.safeDescriptor_addConstructor(USB);
    myVm.safe_Objattribute(USB, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(USB.prototype, EventTarget.prototype);
    Object.setPrototypeOf(USB, EventTarget);
})();

