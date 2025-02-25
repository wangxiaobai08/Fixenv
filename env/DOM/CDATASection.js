CDATASection = function CDATASection(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(CDATASection);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    CDATASection.prototype = { }
    myVm.rename(CDATASection.prototype, "CDATASection");
    myVm.safeDescriptor_addConstructor(CDATASection);
    myVm.safe_Objattribute(CDATASection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CDATASection.prototype, Text.prototype);
    Object.setPrototypeOf(CDATASection, Text);

})();