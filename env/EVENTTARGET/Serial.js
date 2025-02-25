Serial = function Serial(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Serial);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getPorts', 'requestPort'];

    Serial.prototype = {
        getPorts() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Serial', 'getPorts', arguments, result);
            return result;
        },
        get onconnect() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onconnect, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Serial', 'onconnect', arguments, result);
            return result;
        },
        set onconnect(value) {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'Serial', 'onconnect', arguments);
            myVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondisconnect, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Serial', 'ondisconnect', arguments, result);
            return result;
        },
        set ondisconnect(value) {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'Serial', 'ondisconnect', arguments);
            myVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestPort() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Serial', 'requestPort', arguments, result);
            return result;
        },
    }
    myVm.rename(Serial.prototype, "Serial");
    myVm.safeDescriptor_addConstructor(Serial);
    myVm.safe_Objattribute(Serial, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Serial.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Serial, EventTarget);

})();
