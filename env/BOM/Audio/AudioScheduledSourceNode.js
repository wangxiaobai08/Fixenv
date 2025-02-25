AudioScheduledSourceNode = function AudioScheduledSourceNode(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(AudioScheduledSourceNode);

; (function () {
    const $safe_get_attribute = ['onended'];
    const $safe_set_attribute = ['onended'];
    const $safe_func_attribute = ['start', 'stop'];

    AudioScheduledSourceNode.prototype = {
        get onended() {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onended, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioScheduledSourceNode', 'onended', arguments, result);
            return result;
        },
        set onended(value) {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'AudioScheduledSourceNode', 'onended', arguments);
            myVm.memory.private_data.get(this).onended = value;
        },
        start() {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioScheduledSourceNode', 'start', arguments, result);
            return result;
        },
        stop() {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioScheduledSourceNode', 'stop', arguments, result);
            return result;
        },
    }
    myVm.rename(AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode");
    myVm.safeDescriptor_addConstructor(AudioScheduledSourceNode);
    myVm.safe_Objattribute(AudioScheduledSourceNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioScheduledSourceNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(AudioScheduledSourceNode, AudioNode);
})();

