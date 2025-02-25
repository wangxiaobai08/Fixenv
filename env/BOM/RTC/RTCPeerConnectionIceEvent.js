RTCPeerConnectionIceEvent = function RTCPeerConnectionIceEvent(createObj_key, type) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, { type: type })
}; myVm.safefunction(RTCPeerConnectionIceEvent);

; (function () {
    const $safe_get_attribute = ['candidate'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    RTCPeerConnectionIceEvent.prototype = {
        get candidate() {
            if (!RTCPeerConnectionIceEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).candidate, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'RTCPeerConnectionIceEvent', 'candidate', arguments, result);
            return result;
        },
    }
    myVm.rename(RTCPeerConnectionIceEvent.prototype, "RTCPeerConnectionIceEvent");
    myVm.safeDescriptor_addConstructor(RTCPeerConnectionIceEvent);
    myVm.safe_Objattribute(RTCPeerConnectionIceEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCPeerConnectionIceEvent.prototype, Event.prototype);
    Object.setPrototypeOf(RTCPeerConnectionIceEvent, Event);
})();

