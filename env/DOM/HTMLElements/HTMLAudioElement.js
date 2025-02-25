HTMLAudioElement = function HTMLAudioElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLAudioElement);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLAudioElement.prototype = {};

    myVm.rename(HTMLAudioElement.prototype, "HTMLAudioElement");
    myVm.safeDescriptor_addConstructor(HTMLAudioElement);
    myVm.safe_Objattribute(HTMLAudioElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
    Object.setPrototypeOf(HTMLAudioElement, HTMLMediaElement);

})();

myVm.memory.htmlElements["audio"] = function () {
    return new HTMLAudioElement(myVm.memory.$createObj_key);
}

