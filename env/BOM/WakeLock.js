WakeLock = function WakeLock(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(WakeLock);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['request'];

    WakeLock.prototype = {
        request() {
            if (!WakeLock.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'WakeLock', 'request', arguments, result);
            return result;
        },
    }
    myVm.rename(WakeLock.prototype, "WakeLock");
    myVm.safeDescriptor_addConstructor(WakeLock);
    myVm.safe_Objattribute(WakeLock, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

