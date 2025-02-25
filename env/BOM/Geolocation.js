Geolocation = function Geolocation(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Geolocation);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['clearWatch', 'getCurrentPosition', 'watchPosition'];
    
    Geolocation.prototype = {
        clearWatch() {
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Geolocation', 'clearWatch', arguments, result);
            return result;
        },
        getCurrentPosition() {
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Geolocation', 'getCurrentPosition', arguments, result);
            return result;
        },
        watchPosition() {
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Geolocation', 'watchPosition', arguments, result);
            return result;
        },
    }
    myVm.rename(Geolocation.prototype, "Geolocation");
    myVm.safeDescriptor_addConstructor(Geolocation);
    myVm.safe_Objattribute(Geolocation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();