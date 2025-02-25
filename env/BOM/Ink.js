Ink = function Ink(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Ink);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['requestPresenter'];
    
    Ink.prototype = {
        requestPresenter() {
            if (!Ink.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Ink', 'requestPresenter', arguments, result);
            return result;
        },
    }
    myVm.rename(Ink.prototype, "Ink");
    myVm.safeDescriptor_addConstructor(Ink);
    myVm.safe_Objattribute(Ink, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

