NetworkInformation = function NetworkInformation(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(NetworkInformation);

; (function () {
    const $safe_get_attribute = ['downlink', 'effectiveType', 'onchange', 'rtt', 'saveData'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = [];

    NetworkInformation.prototype = {
        get downlink() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0.4;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'NetworkInformation', 'downlink', arguments, result);
            return result;
        },
        get effectiveType() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "4g";
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'NetworkInformation', 'effectiveType', arguments, result);
            return result;
        },
        get onchange() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onchange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'NetworkInformation', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'NetworkInformation', 'onchange', arguments);
            myVm.memory.private_data.get(this).onchange = value + "";
        },
        get rtt() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 250;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'NetworkInformation', 'rtt', arguments, result);
            return result;
        },
        get saveData() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = false;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'NetworkInformation', 'saveData', arguments, result);
            return result;
        },
    }
    myVm.rename(NetworkInformation.prototype, "NetworkInformation");
    myVm.safeDescriptor_addConstructor(NetworkInformation);
    myVm.safe_Objattribute(NetworkInformation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
    Object.setPrototypeOf(NetworkInformation, EventTarget);

})();