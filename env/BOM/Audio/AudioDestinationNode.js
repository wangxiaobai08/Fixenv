AudioDestinationNode = function AudioDestinationNode(createObj_key, channelCountMode) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {
        channelCountMode:channelCountMode,
        maxChannelCount: 1
    })
}; myVm.safefunction(AudioDestinationNode);

; (function () {
    const $safe_get_attribute = ['maxChannelCount'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    AudioDestinationNode.prototype = {
        get maxChannelCount() {
            if (!AudioDestinationNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).maxChannelCount;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioDestinationNode', 'maxChannelCount', arguments, result);
            return result;
        },
    }
    myVm.rename(AudioDestinationNode.prototype, "AudioDestinationNode");
    myVm.safeDescriptor_addConstructor(AudioDestinationNode);
    myVm.safe_Objattribute(AudioDestinationNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioDestinationNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(AudioDestinationNode, AudioNode);
})();

