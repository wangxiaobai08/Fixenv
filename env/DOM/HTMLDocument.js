HTMLDocument = function HTMLDocument(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLDocument);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];


    HTMLDocument.prototype = {};
    myVm.rename(HTMLDocument.prototype, "HTMLDocument");
    myVm.safeDescriptor_addConstructor(HTMLDocument);
    myVm.safe_Objattribute(HTMLDocument, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype); // 指定属性原型的原型链
    Object.setPrototypeOf(HTMLDocument, Document);  // 指定属性的原型链

})();
// debugger;