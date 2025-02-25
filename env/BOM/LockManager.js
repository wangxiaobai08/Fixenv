LockManager = function LockManager(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(LockManager);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['query', 'request'];

    LockManager.prototype = {
        query() {
            if (!LockManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'LockManager', 'query', arguments, result);
            return result;
        },
        request() {
            if (!LockManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'LockManager', 'request', arguments, result);
            return result;
        },
    }
    myVm.rename(LockManager.prototype, "LockManager");
    myVm.safeDescriptor_addConstructor(LockManager);
    myVm.safe_Objattribute(LockManager, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

