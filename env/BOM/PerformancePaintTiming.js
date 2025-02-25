PerformancePaintTiming = function PerformancePaintTiming(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    // myVm.z_sanbox.memory.private_data.set(this, {})
}; myVm.safefunction(PerformancePaintTiming);

; (function () {
    // const $safe_get_attribute = [];
    // const $safe_set_attribute = [];
    // const $safe_func_attribute = [];

    PerformancePaintTiming.prototype = {}

    myVm.rename(PerformancePaintTiming.prototype, "PerformancePaintTiming");
    myVm.safeDescriptor_addConstructor(PerformancePaintTiming);
    // myVm.z_sanbox.safe_Objattribute(PerformancePaintTiming, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(PerformancePaintTiming.prototype, PerformanceEntry.prototype);
    Object.setPrototypeOf(PerformancePaintTiming, PerformanceEntry);

})();