HTMLTitleElement = function HTMLTitleElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLTitleElement);



; (function () {
    const $safe_get_attribute = ['text'];
    const $safe_set_attribute = ['text'];
    const $safe_func_attribute = [];

    HTMLTitleElement.prototype = {
        get text() {
            if (!HTMLTitleElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = myVm.abs(myVm.memory.private_data.get(this).text, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLTitleElement', 'text', arguments, result);
            return result;
        },
        set text(value) {
            if (!HTMLTitleElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            myVm.memory.private_data.get(this).text = value + "";
        }
    };

    myVm.rename(HTMLTitleElement.prototype, "HTMLTitleElement");
    myVm.safeDescriptor_addConstructor(HTMLTitleElement);
    myVm.safe_Objattribute(HTMLTitleElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLTitleElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLTitleElement, HTMLElement);

})();
myVm.memory.htmlElements["title"] = function () {
    return new HTMLTitleElement(myVm.memory.$createObj_key);
}
