CredentialsContainer = function CredentialsContainer(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(CredentialsContainer);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['create', 'get', 'preventSilentAccess', 'store'];

    CredentialsContainer.prototype = {
        create() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CredentialsContainer', 'create', arguments, result);
            return result;
        },
        get() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CredentialsContainer', 'get', arguments, result);
            return result;
        },
        preventSilentAccess() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CredentialsContainer', 'preventSilentAccess', arguments, result);
            return result;
        },
        store() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CredentialsContainer', 'store', arguments, result);
            return result;
        },
    }
    myVm.rename(CredentialsContainer.prototype, "CredentialsContainer");
    myVm.safeDescriptor_addConstructor(CredentialsContainer);
    myVm.safe_Objattribute(CredentialsContainer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();