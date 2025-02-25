StorageManager = function StorageManager(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(StorageManager);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['estimate', 'getDirectory', 'persist', 'persisted'];

    StorageManager.prototype = {
        estimate() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        quota: 193274155008,
                        usage: 0,
                        usageDetails: {},
                    })
                }, 0)
            });
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'StorageManager', 'estimate', arguments, result);
            return result;
        },
        getDirectory() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'StorageManager', 'getDirectory', arguments, result);
            return result;
        },
        persist() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'StorageManager', 'persist', arguments, result);
            return result;
        },
        persisted() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'StorageManager', 'persisted', arguments, result);
            return result;
        },
    }
    myVm.rename(StorageManager.prototype, "StorageManager");
    myVm.safeDescriptor_addConstructor(StorageManager);
    myVm.safe_Objattribute(StorageManager, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(StorageManager.prototype, EventTarget.prototype);
    Object.setPrototypeOf(StorageManager, EventTarget);

})();

