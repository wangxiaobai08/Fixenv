RTCSctpTransport = function RTCSctpTransport(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(RTCSctpTransport);

; (function () {
    const $safe_get_attribute = ['maxChannels', 'maxMessageSize', 'onstatechange', 'state', 'transport'];
    const $safe_set_attribute = ['onstatechange'];
    const $safe_func_attribute = [];

    RTCSctpTransport.prototype = {
        get maxChannels() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).maxChannels, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCSctpTransport', 'maxChannels', arguments, result);
            return result;
        },
        get maxMessageSize() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).maxMessageSize, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCSctpTransport', 'maxMessageSize', arguments, result);
            return result;
        },
        get onstatechange() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onstatechange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCSctpTransport', 'onstatechange', arguments, result);
            return result;
        },
        set onstatechange(value) {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'RTCSctpTransport', 'onstatechange', arguments);
            myVm.memory.private_data.get(this).onstatechange = value + "";
        },
        get state() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).state, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCSctpTransport', 'state', arguments, result);
            return result;
        },
        get transport() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).transport, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCSctpTransport', 'transport', arguments, result);
            return result;
        },
    }
    myVm.rename(RTCSctpTransport.prototype, "RTCSctpTransport");
    myVm.safeDescriptor_addConstructor(RTCSctpTransport);
    myVm.safe_Objattribute(RTCSctpTransport, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCSctpTransport.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCSctpTransport, EventTarget);

})();