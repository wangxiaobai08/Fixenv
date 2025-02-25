IDBOpenDBRequest = function IDBOpenDBRequest(createObj_key, name, version) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {
        name:name,
        version:version || 0
    })
}; myVm.safefunction(IDBOpenDBRequest);

; (function () {
    const $safe_get_attribute = ['onblocked', 'onupgradeneeded'];
    const $safe_set_attribute = ['onblocked', 'onupgradeneeded'];
    const $safe_func_attribute = [];

    IDBOpenDBRequest.prototype = {
        get onblocked() {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onblocked, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBOpenDBRequest', 'onblocked', arguments, result);
            return result;
        },
        set onblocked(value) {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'IDBOpenDBRequest', 'onblocked', arguments);
            myVm.memory.private_data.get(this).onblocked = value + "";
        },
        get onupgradeneeded() {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onupgradeneeded, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'IDBOpenDBRequest', 'onupgradeneeded', arguments, result);
            return result;
        },
        set onupgradeneeded(value) {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'IDBOpenDBRequest', 'onupgradeneeded', arguments);
            myVm.memory.private_data.get(this).onupgradeneeded = value;
        },
    }
    myVm.rename(IDBOpenDBRequest.prototype, "IDBOpenDBRequest");
    myVm.safeDescriptor_addConstructor(IDBOpenDBRequest);
    myVm.safe_Objattribute(IDBOpenDBRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    
    Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);
    Object.setPrototypeOf(IDBOpenDBRequest, IDBRequest);
})();