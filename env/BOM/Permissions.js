Permissions = function Permissions(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Permissions);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['query'];
    
    Permissions.prototype = {
        query() {
            if (!Permissions.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Permissions', 'query', arguments, result);
            return result;
        },
    }
    myVm.rename(Permissions.prototype, "Permissions");
    myVm.safeDescriptor_addConstructor(Permissions);
    myVm.safe_Objattribute(Permissions, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
