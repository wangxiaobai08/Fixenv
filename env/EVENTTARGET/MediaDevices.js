MediaDevices = function MediaDevices(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(MediaDevices);

; (function () {
    const $safe_get_attribute = ['ondevicechange'];
    const $safe_set_attribute = ['ondevicechange'];
    const $safe_func_attribute = ['enumerateDevices', 'getDisplayMedia', 'getSupportedConstraints', 'getUserMedia'];

    MediaDevices.prototype = {
        enumerateDevices() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaDevices', 'enumerateDevices', arguments, result);
            return result;
        },
        getDisplayMedia() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaDevices', 'getDisplayMedia', arguments, result);
            return result;
        },
        getSupportedConstraints() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaDevices', 'getSupportedConstraints', arguments, result);
            return result;
        },
        getUserMedia() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaDevices', 'getUserMedia', arguments, result);
            return result;
        },
        get ondevicechange() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondevicechange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaDevices', 'ondevicechange', arguments, result);
            return result;
        },
        set ondevicechange(value) {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'MediaDevices', 'ondevicechange', arguments);
            myVm.memory.private_data.get(this).ondevicechange = value + "";
        },
    }
    myVm.rename(MediaDevices.prototype, "MediaDevices");
    myVm.safeDescriptor_addConstructor(MediaDevices);
    myVm.safe_Objattribute(MediaDevices, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaDevices.prototype, EventTarget.prototype);
    Object.setPrototypeOf(MediaDevices, EventTarget);

})();