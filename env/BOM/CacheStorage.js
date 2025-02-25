CacheStorage = function CacheStorage(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(CacheStorage);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['delete', 'has', 'keys', 'match', 'open'];

    CacheStorage.prototype = {
        delete() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CacheStorage', 'delete', arguments, result);
            return result;
        },
        has() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CacheStorage', 'has', arguments, result);
            return result;
        },
        keys() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CacheStorage', 'keys', arguments, result);
            return result;
        },
        match() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CacheStorage', 'match', arguments, result);
            return result;
        },
        open() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CacheStorage', 'open', arguments, result);
            return result;
        },
    }
    myVm.rename(CacheStorage.prototype, "CacheStorage");
    myVm.safeDescriptor_addConstructor(CacheStorage);
    myVm.safe_Objattribute(CacheStorage, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
caches = new CacheStorage(myVm.memory.$createObj_key);

