ScreenOrientation = function ScreenOrientation(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(ScreenOrientation);

; (function () {
    const $safe_get_attribute = ['angle', 'onchange', 'type'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = ['lock', 'unlock'];

    ScreenOrientation.prototype = {
        get angle() {
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'ScreenOrientation', 'angle', arguments, result);
            return result;
        },
        lock() {
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'ScreenOrientation', 'lock', arguments, result);
            return result;
        },
        get onchange() {
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onchange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'ScreenOrientation', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            // debugger;
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type() {
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "landscape-primary";
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'ScreenOrientation', 'type', arguments, result);
            return result;
        },
        unlock() {
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'ScreenOrientation', 'unlock', arguments, result);
            return result;
        }
    }
    myVm.rename(ScreenOrientation.prototype, "ScreenOrientation");
    myVm.safeDescriptor_addConstructor(ScreenOrientation);
    myVm.safe_Objattribute(ScreenOrientation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);
    Object.setPrototypeOf(ScreenOrientation, EventTarget);

})();

