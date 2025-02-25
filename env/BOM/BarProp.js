BarProp = function BarProp(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
}; myVm.safefunction(BarProp);

; (function () {
    const $safe_get_attribute = ['visible'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    BarProp.prototype = {
        get visible() {
            if (!BarProp.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'BarProp', 'visible', arguments, result);
            return result;
        },
    }
    myVm.rename(BarProp.prototype, "BarProp");
    myVm.safeDescriptor_addConstructor(BarProp);
    myVm.safe_Objattribute(BarProp, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
locationbar = new BarProp(myVm.memory.$createObj_key);
menubar = new BarProp(myVm.memory.$createObj_key);
personalbar = new BarProp(myVm.memory.$createObj_key);
scrollbars = new BarProp(myVm.memory.$createObj_key);
statusbar = new BarProp(myVm.memory.$createObj_key);
toolbar = new BarProp(myVm.memory.$createObj_key);

