PerformanceNavigation = function PerformanceNavigation(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(PerformanceNavigation);

; (function () {
    const $attributes = {
        TYPE_BACK_FORWARD: 2,
        TYPE_NAVIGATE: 0,
        TYPE_RELOAD: 1,
        TYPE_RESERVED: 255
    }
    const $safe_get_attribute = ['redirectCount', 'type'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];

    PerformanceNavigation.prototype = {
        get redirectCount() {
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PerformanceNavigation', 'redirectCount', arguments, result);
            return result;
        },
        toJSON() {
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'PerformanceNavigation', 'toJSON', arguments, result);
            return result;
        },
        get type() {
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PerformanceNavigation', 'type', arguments, result);
            return result;
        },
    }
    myVm.rename(PerformanceNavigation.prototype, "PerformanceNavigation");
    myVm.safeDescriptor_addConstructor(PerformanceNavigation);
    myVm.safe_Objattribute(PerformanceNavigation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    myVm.add_capitalLetter_attribute(PerformanceNavigation, $attributes);

})();