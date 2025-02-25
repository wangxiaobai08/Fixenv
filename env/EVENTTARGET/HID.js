HID = function HID(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HID);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getDevices', 'requestDevice'];

    HID.prototype = {
        getDevices() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HID', 'getDevices', arguments, result);
            return result;
        },
        get onconnect() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onconnect, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HID', 'onconnect', arguments, result);
            return result;
        },
        set onconnect(value) {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HID', 'onconnect', arguments);
            myVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondisconnect, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HID', 'ondisconnect', arguments, result);
            return result;
        },
        set ondisconnect(value) {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HID', 'ondisconnect', arguments);
            myVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestDevice() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HID', 'requestDevice', arguments, result);
            return result;
        },
    }
    myVm.rename(HID.prototype, "HID");
    myVm.safeDescriptor_addConstructor(HID);
    myVm.safe_Objattribute(HID, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HID.prototype, EventTarget.prototype);
    Object.setPrototypeOf(HID, EventTarget);

})();

