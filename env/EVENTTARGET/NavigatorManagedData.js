NavigatorManagedData = function NavigatorManagedData(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(NavigatorManagedData);

; (function () {
    const $safe_get_attribute = ['onmanagedconfigurationchange'];
    const $safe_set_attribute = ['onmanagedconfigurationchange'];
    const $safe_func_attribute = ['getManagedConfiguration'];

    NavigatorManagedData.prototype = {
        getManagedConfiguration() {
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'NavigatorManagedData', 'getManagedConfiguration', arguments, result);
            return result;
        },
        get onmanagedconfigurationchange() {
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmanagedconfigurationchange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'NavigatorManagedData', 'onmanagedconfigurationchange', arguments, result);
            return result;
        },
        set onmanagedconfigurationchange(value) {
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'NavigatorManagedData', 'onmanagedconfigurationchange', arguments);
            myVm.memory.private_data.get(this).onmanagedconfigurationchange = value + "";
        },
    }
    myVm.rename(NavigatorManagedData.prototype, "NavigatorManagedData");
    myVm.safeDescriptor_addConstructor(NavigatorManagedData);
    myVm.safe_Objattribute(NavigatorManagedData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(NavigatorManagedData.prototype, EventTarget.prototype);
    Object.setPrototypeOf(NavigatorManagedData, EventTarget);

})();