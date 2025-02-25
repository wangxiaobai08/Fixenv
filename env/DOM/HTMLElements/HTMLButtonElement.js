HTMLButtonElement = function HTMLButtonElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLButtonElement);

; (function () {
    const $safe_get_attribute = ['disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];
    const $safe_set_attribute = ['disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'name', 'type', 'value'];
    const $safe_func_attribute = ['checkValidity', 'reportValidity', 'setCustomValidity'];
    
    HTMLButtonElement.prototype = {
        checkValidity() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLButtonElement', 'checkValidity', arguments, result);
            return result;
        },
        get disabled() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).disabled, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'disabled', arguments, result);
            return result;
        },
        set disabled(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'disabled', arguments);
            myVm.memory.private_data.get(this).disabled = value ? true: false;
        },
        get form() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).form, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'form', arguments, result);
            return result;
        },
        set form(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'form', arguments);
            myVm.memory.private_data.get(this).form = null;
        },
        get formAction() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).formAction, location.href);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'formAction', arguments, result);
            return result;
        },
        set formAction(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'formAction', arguments);
            myVm.memory.private_data.get(this).formAction = value + "";
        },
        get formEnctype() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).formEnctype, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'formEnctype', arguments, result);
            return result;
        },
        set formEnctype(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'formEnctype', arguments);
            myVm.memory.private_data.get(this).formEnctype = value + "";
        },
        get formMethod() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).formMethod, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'formMethod', arguments, result);
            return result;
        },
        set formMethod(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'formMethod', arguments);
            myVm.memory.private_data.get(this).formMethod = value.toLowerCase() + "" === 'post'? 'post': 'get';
        },
        get formNoValidate() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).formNoValidate, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'formNoValidate', arguments, result);
            return result;
        },
        set formNoValidate(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'formNoValidate', arguments);
            myVm.memory.private_data.get(this).formNoValidate = value ? true: false;
        },
        get formTarget() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).formTarget, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'formTarget', arguments, result);
            return result;
        },
        set formTarget(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'formTarget', arguments);
            myVm.memory.private_data.get(this).formTarget = value + "";
        },
        get labels() {  // NodeList 
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get name() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).name, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'name', arguments);
            myVm.memory.private_data.get(this).name = value + "";
        },
        reportValidity() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLButtonElement', 'reportValidity', arguments, result);
            return result;
        },
        setCustomValidity() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLButtonElement', 'setCustomValidity', arguments, result);
            return result;
        },
        get type() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).type, "submit");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'type', arguments);
            myVm.memory.private_data.get(this).type = "submit";
        },
        get validationMessage() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).validationMessage, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'validationMessage', arguments, result);
            return result;
        },
        get validity() {  // ValidityState 
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).validity, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'validationMessage', arguments, result);
            return result;
        },
        get value() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).value, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLButtonElement', 'value', arguments, result);
            return result;
        },
        set value(value) {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLButtonElement', 'value', arguments);
            myVm.memory.private_data.get(this).value = value + "";
        },
        get willValidate() {
            if (!HTMLButtonElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        }
    };

    myVm.rename(HTMLButtonElement.prototype, "HTMLButtonElement");
    myVm.safeDescriptor_addConstructor(HTMLButtonElement);
    myVm.safe_Objattribute(HTMLButtonElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLButtonElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLButtonElement, HTMLElement);

})();


myVm.memory.htmlElements["button"] = function () {
    return new HTMLButtonElement(myVm.memory.$createObj_key);
}