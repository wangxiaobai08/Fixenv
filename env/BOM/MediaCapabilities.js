MediaCapabilities = function MediaCapabilities(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(MediaCapabilities);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['decodingInfo'];
    
    MediaCapabilities.prototype = {
        decodingInfo() {
            if (!MediaCapabilities.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaCapabilities', 'decodingInfo', arguments, result);
            return result;
        },
    }
    myVm.rename(MediaCapabilities.prototype, "MediaCapabilities");
    myVm.safeDescriptor_addConstructor(MediaCapabilities);
    myVm.safe_Objattribute(MediaCapabilities, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
