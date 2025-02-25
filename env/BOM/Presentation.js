Presentation = function Presentation(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Presentation);

; (function () {
    const $safe_get_attribute = ['defaultRequest', 'receiver'];
    const $safe_set_attribute = ['defaultRequest'];
    const $safe_func_attribute = [];

    Presentation.prototype = {
        get defaultRequest() {
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).defaultRequest, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Presentation', 'defaultRequest', arguments, result);
            return result;
        },
        set defaultRequest(value) {
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'Presentation', 'defaultRequest', arguments);
            myVm.memory.private_data.get(this).defaultRequest = value + "";
        },
        get receiver() {
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Presentation', 'receiver', arguments, result);
            return result;
        },
    }
    myVm.rename(Presentation.prototype, "Presentation");
    myVm.safeDescriptor_addConstructor(Presentation);
    myVm.safe_Objattribute(Presentation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();