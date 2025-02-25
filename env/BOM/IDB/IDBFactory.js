IDBFactory = function IDBFactory(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {
        name: undefined,
        version: undefined
    })
}; myVm.safefunction(IDBFactory);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['cmp', 'databases', 'deleteDatabase', 'open'];

    IDBFactory.prototype = {
        cmp(first, second) {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBFactory', 'cmp', arguments, result);
            return result;
        },
        databases() {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new Promise(function () { debugger });
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBFactory', 'databases', arguments, result);
            return result;
        },
        deleteDatabase(name, options) {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBFactory', 'deleteDatabase', arguments, result);
            return result;
        },
        open(name, version) {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (!name){ throw new TypeError("Failed to execute 'open' on 'IDBFactory': 1 argument required, but only 0 present.") };

            myVm.memory.private_data.set(this, {
                name: name,
                version: version || 1
            })
            let result = new IDBOpenDBRequest(myVm.memory.$createObj_key, name, version);
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBFactory', 'open', arguments, result);
            return result;
        }
    }

    myVm.rename(IDBFactory.prototype, "IDBFactory");
    myVm.safeDescriptor_addConstructor(IDBFactory);
    myVm.safe_Objattribute(IDBFactory, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
indexedDB = new IDBFactory(myVm.memory.$createObj_key);

