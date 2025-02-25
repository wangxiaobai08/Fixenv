IDBDatabase = function IDBDatabase(createObj_key, name, version) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {
        name: name,
        version: version || 1
    })
}; myVm.safefunction(IDBDatabase);

; (function () {
    const $safe_get_attribute = ['name', 'objectStoreNames', 'onabort', 'onclose', 'onerror', 'onversionchange', 'version'];
    const $safe_set_attribute = ['onabort', 'onclose', 'onerror', 'onversionchange'];
    const $safe_func_attribute = ['close', 'createObjectStore', 'deleteObjectStore', 'transaction'];

    IDBDatabase.prototype = {
        close() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBDatabase', 'close', arguments, result);
            return result;
        },
        createObjectStore() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBDatabase', 'createObjectStore', arguments, result);
            return result;
        },
        deleteObjectStore() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBDatabase', 'deleteObjectStore', arguments, result);
            return result;
        },
        get name() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).name;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBDatabase', 'name', arguments, result);
            return result;
        },
        get objectStoreNames() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).objectStoreNames, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBDatabase', 'objectStoreNames', arguments, result);
            return result;
        },
        get onabort() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onabort, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBDatabase', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'IDBDatabase', 'onabort', arguments);
            myVm.memory.private_data.get(this).onabort = value;
        },
        get onclose() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onclose);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBDatabase', 'onclose', arguments, result);
            return result;
        },
        set onclose(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'IDBDatabase', 'onclose', arguments);
            myVm.memory.private_data.get(this).onclose = value;
        },
        get onerror() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onerror, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBDatabase', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'IDBDatabase', 'onerror', arguments);
            myVm.memory.private_data.get(this).onerror = value;
        },
        get onversionchange() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onversionchange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBDatabase', 'onversionchange', arguments, result);
            return result;
        },
        set onversionchange(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'IDBDatabase', 'onversionchange', arguments);
            myVm.memory.private_data.get(this).onversionchange = value;
        },
        transaction() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'IDBDatabase', 'transaction', arguments, result);
            return result;
        },
        get version() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.memory.private_data.get(this).version;
        }
    }
    myVm.rename(IDBDatabase.prototype, "IDBDatabase");
    myVm.safeDescriptor_addConstructor(IDBDatabase);
    myVm.safe_Objattribute(IDBDatabase, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(IDBDatabase.prototype, EventTarget.prototype);
    Object.setPrototypeOf(IDBDatabase, EventTarget);
})();

