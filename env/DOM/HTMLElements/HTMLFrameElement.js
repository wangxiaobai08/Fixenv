HTMLFrameElement = function HTMLFrameElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLFrameElement);

; (function () {
    const $safe_get_attribute = ['contentDocument', 'contentWindow', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
    const $safe_set_attribute = ['frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
    const $safe_func_attribute = [];
    
    HTMLFrameElement.prototype = {
        get contentDocument() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).contentDocument, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'contentDocument', arguments, result);
            return result;
        },
        get contentWindow() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).contentWindow, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'contentWindow', arguments, result);
            return result;
        },
        get frameBorder() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).frameBorder, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'frameBorder', arguments, result);
            return result;
        },
        set frameBorder(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'frameBorder', arguments);
            myVm.memory.private_data.get(this).frameBorder = value + "";
        },
        get longDesc() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).longDesc, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'longDesc', arguments, result);
            return result;
        },
        set longDesc(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'longDesc', arguments);
            myVm.memory.private_data.get(this).longDesc = value + "";
        },
        get marginHeight() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).marginHeight, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'marginHeight', arguments, result);
            return result;
        },
        set marginHeight(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'marginHeight', arguments);
            myVm.memory.private_data.get(this).marginHeight = value + "";
        },
        get marginWidth() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).marginWidth, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'marginWidth', arguments, result);
            return result;
        },
        set marginWidth(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'marginWidth', arguments);
            myVm.memory.private_data.get(this).marginWidth = value + "";
        },
        get name() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).name, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'name', arguments);
            myVm.memory.private_data.get(this).name = value + "";
        },
        get noResize() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).noResize, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'noResize', arguments, result);
            return result;
        },
        set noResize(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'noResize', arguments);
            myVm.memory.private_data.get(this).noResize = value + "";
        },
        get scrolling() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).scrolling, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'scrolling', arguments, result);
            return result;
        },
        set scrolling(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'scrolling', arguments);
            myVm.memory.private_data.get(this).scrolling = value + "";
        },
        get src() {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).src, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLFrameElement', 'src', arguments, result);
            return result;
        },
        set src(value) {
            if (!HTMLFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLFrameElement', 'src', arguments);
            myVm.memory.private_data.get(this).src = value + "";
        },
    }

    myVm.rename(HTMLFrameElement.prototype, "HTMLFrameElement");
    myVm.safeDescriptor_addConstructor(HTMLFrameElement);
    myVm.safe_Objattribute(HTMLFrameElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLFrameElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLFrameElement, HTMLElement);

})();

myVm.memory.htmlElements["frame"] = function () {
    return new HTMLFrameElement(myVm.memory.$createObj_key);
}

