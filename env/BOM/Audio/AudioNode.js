AudioNode = function AudioNode(createObj_key, channelCountMode) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }

    channelCountMode = channelCountMode || "max"
    myVm.memory.private_data.set(this, {
        channelCountMode:channelCountMode
    })
}; myVm.safefunction(AudioNode);

; (function () {
    const $safe_get_attribute = ['channelCount', 'channelCountMode', 'channelInterpretation', 'context', 'numberOfInputs', 'numberOfOutputs'];
    const $safe_set_attribute = ['channelCount', 'channelCountMode', 'channelInterpretation'];
    const $safe_func_attribute = ['connect', 'disconnect'];

    AudioNode.prototype = {
        get channelCount() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).channelCount, 2);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioNode', 'channelCount', arguments, result);
            return result;
        },
        set channelCount(value) {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'AudioNode', 'channelCount', arguments);
            myVm.memory.private_data.get(this).channelCount = value;
        },
        get channelCountMode() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).channelCountMode, "max");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioNode', 'channelCountMode', arguments, result);
            return result;
        },
        set channelCountMode(value) {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'AudioNode', 'channelCountMode', arguments);
            myVm.memory.private_data.get(this).channelCountMode = value + "";
        },
        get channelInterpretation() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).channelInterpretation, "speakers");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioNode', 'channelInterpretation', arguments, result);
            return result;
        },
        set channelInterpretation(value) {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'AudioNode', 'channelInterpretation', arguments);
            myVm.memory.private_data.get(this).channelInterpretation = value + "";
        },
        connect() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioNode', 'connect', arguments, result);
            return result;
        },
        get context() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            // return this;
            let ele = myVm.memory.private_data.get(this).context;
            if (ele === undefined) {
                ele = new OfflineAudioContext(myVm.memory.$createObj_key);
                myVm.memory.private_data.get(this).context = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioNode', 'context', arguments, result);
            return result;
        },
        disconnect() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioNode', 'disconnect', arguments, result);
            return result;
        },
        get numberOfInputs() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).numberOfInputs, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioNode', 'numberOfInputs', arguments, result);
            return result;
        },
        get numberOfOutputs() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).numberOfOutputs, 1);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioNode', 'numberOfOutputs', arguments, result);
            return result;
        },
    }
    myVm.rename(AudioNode.prototype, "AudioNode");
    myVm.safeDescriptor_addConstructor(AudioNode);
    myVm.safe_Objattribute(AudioNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioNode.prototype, EventTarget.prototype);
    Object.setPrototypeOf(AudioNode, EventTarget);
})();