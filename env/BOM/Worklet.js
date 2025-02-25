Worklet = function Worklet(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Worklet);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addModule'];

    Worklet.prototype = {
        addModule() {
            if (!Worklet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Worklet', 'addModule', arguments, result);
            return result;
        }
    }
    myVm.rename(Worklet.prototype, "Worklet");
    myVm.safeDescriptor_addConstructor(Worklet);
    myVm.safe_Objattribute(Worklet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

