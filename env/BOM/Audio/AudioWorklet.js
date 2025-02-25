AudioWorklet = function AudioWorklet(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(AudioWorklet);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    AudioWorklet.prototype = {
    }
    myVm.rename(AudioWorklet.prototype, "AudioWorklet");
    myVm.safeDescriptor_addConstructor(AudioWorklet);
    myVm.safe_Objattribute(AudioWorklet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioWorklet.prototype, Worklet.prototype);
    Object.setPrototypeOf(AudioWorklet, Worklet);
})();

