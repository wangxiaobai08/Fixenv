RTCSessionDescription = function RTCSessionDescription(createObj_key, sdp, type) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, { sdp: sdp, type: type })
}; myVm.safefunction(RTCSessionDescription);

; (function () {
    const $safe_get_attribute = ['sdp', 'type'];
    const $safe_set_attribute = ['sdp', 'type'];
    const $safe_func_attribute = ['toJSON'];

    RTCSessionDescription.prototype = {
        get sdp() {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).sdp, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCSessionDescription', 'sdp', arguments, result);
            return result;
        },
        set sdp(value) {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'RTCSessionDescription', 'sdp', arguments);
            myVm.memory.private_data.get(this).sdp = value + "";
        },
        toJSON() {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'RTCSessionDescription', 'toJSON', arguments, result);
            return result;
        },
        get type() {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).type, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCSessionDescription', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'RTCSessionDescription', 'type', arguments);
            myVm.memory.private_data.get(this).type = value + "";
        },
    };

    myVm.rename(RTCSessionDescription.prototype, "RTCSessionDescription");
    myVm.safeDescriptor_addConstructor(RTCSessionDescription);
    myVm.safe_Objattribute(RTCSessionDescription, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

