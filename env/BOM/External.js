External = function External(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(External);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['AddSearchProvider', 'IsSearchProviderInstalled'];

    External.prototype = {
        AddSearchProvider() {
            if (!External.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'External', 'AddSearchProvider', arguments, result);
            return result;
        },
        IsSearchProviderInstalled() {
            if (!External.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'External', 'IsSearchProviderInstalled', arguments, result);
            return result;
        },
    }
    myVm.rename(External.prototype, "External");
    myVm.safeDescriptor_addConstructor(External);
    myVm.safe_Objattribute(External, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
external = new External(myVm.memory.$createObj_key);

