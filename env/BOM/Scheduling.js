Scheduling = function Scheduling(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Scheduling);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['isInputPending'];

    Scheduling.prototype = {
        isInputPending() {
            if (!Scheduling.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Scheduling', 'isInputPending', arguments, result);
            return result;
        }
    }
    myVm.rename(Scheduling.prototype, "Scheduling");
    myVm.safeDescriptor_addConstructor(Scheduling);
    myVm.safe_Objattribute(Scheduling, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();