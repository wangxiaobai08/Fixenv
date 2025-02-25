UserActivation = function UserActivation(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(UserActivation);

; (function () {
    const $safe_get_attribute = ['hasBeenActive', 'isActive'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    UserActivation.prototype = {
        get hasBeenActive() {
            if (!UserActivation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'UserActivation', 'hasBeenActive', arguments, result);
            return result;
        },
        get isActive() {
            if (!UserActivation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return false;
        }
    }
    myVm.rename(UserActivation.prototype, "UserActivation");
    myVm.safeDescriptor_addConstructor(UserActivation);
    myVm.safe_Objattribute(UserActivation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

