XRSystem = function XRSystem(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(XRSystem);

; (function () {
    const $safe_get_attribute = ['ondevicechange'];
    const $safe_set_attribute = ['ondevicechange'];
    const $safe_func_attribute = ['isSessionSupported', 'requestSession', 'supportsSession'];

    XRSystem.prototype = {
        isSessionSupported() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XRSystem', 'isSessionSupported', arguments, result);
            return result;
        },
        get ondevicechange() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondevicechange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XRSystem', 'ondevicechange', arguments, result);
            return result;
        },
        set ondevicechange(value) {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XRSystem', 'ondevicechange', arguments);
            myVm.memory.private_data.get(this).ondevicechange = value + "";
        },
        requestSession() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XRSystem', 'requestSession', arguments, result);
            return result;
        },
        supportsSession() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XRSystem', 'supportsSession', arguments, result);
            return result;
        },
    }
    myVm.rename(XRSystem.prototype, "XRSystem");
    myVm.safeDescriptor_addConstructor(XRSystem);
    myVm.safe_Objattribute(XRSystem, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(XRSystem.prototype, EventTarget.prototype);
    Object.setPrototypeOf(XRSystem, EventTarget);
})();

