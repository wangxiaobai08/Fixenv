HTMLIFrameElement = function HTMLIFrameElement(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLIFrameElement);

; (function () {
    const $safe_get_attribute = ['align', 'allow', 'allowFullscreen', 'allowPaymentRequest', 'contentDocument', 'contentWindow', 'csp', 'featurePolicy', 'frameBorder', 'height', 'loading', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'referrerPolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'];
    const $safe_set_attribute = ['align', 'allow', 'allowFullscreen', 'allowPaymentRequest', 'csp', 'frameBorder', 'height', 'loading', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'referrerPolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'];
    const $safe_func_attribute = ['getSVGDocument'];

    HTMLIFrameElement.prototype = {
        get align() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).align, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'align', arguments, result);
            return result;
        },
        set align(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'align', arguments);
            myVm.memory.private_data.get(this).align = value + "";
        },
        get allow() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).allow, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'allow', arguments, result);
            return result;
        },
        set allow(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'allow', arguments);
            myVm.memory.private_data.get(this).allow = value + "";
        },
        get allowFullscreen() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).allowFullscreen, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'allowFullscreen', arguments, result);
            return result;
        },
        set allowFullscreen(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'allowFullscreen', arguments);
            myVm.memory.private_data.get(this).allowFullscreen = value ? true : false;
        },
        get allowPaymentRequest() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).allowPaymentRequest, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'allowPaymentRequest', arguments, result);
            return result;
        },
        set allowPaymentRequest(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'allowPaymentRequest', arguments);
            myVm.memory.private_data.get(this).allowPaymentRequest =  value ? true : false;
        },
        get contentDocument() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).contentDocument, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'contentDocument', arguments, result);
            return result;
        },
        get contentWindow() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).contentWindow, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'contentWindow', arguments, result);
            return result;
        },
        get csp() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).csp, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'csp', arguments, result);
            return result;
        },
        set csp(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'csp', arguments);
            myVm.memory.private_data.get(this).csp = value + "";
        },
        get featurePolicy() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).featurePolicy, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'featurePolicy', arguments, result);
            return result;
        },
        get frameBorder() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).frameBorder, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'frameBorder', arguments, result);
            return result;
        },
        set frameBorder(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'frameBorder', arguments);
            myVm.memory.private_data.get(this).frameBorder = value + "";
        },
        getSVGDocument() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLIFrameElement', 'getSVGDocument', arguments, result);
            return result;
        },
        get height() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).height, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'height', arguments);
            myVm.memory.private_data.get(this).height = value + "";
        },
        get loading() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).loading, "auto");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'loading', arguments, result);
            return result;
        },
        set loading(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'loading', arguments);
            myVm.memory.private_data.get(this).loading = value + "";
        },
        get longDesc() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).longDesc, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'longDesc', arguments, result);
            return result;
        },
        set longDesc(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'longDesc', arguments);
            myVm.memory.private_data.get(this).longDesc = value + "";
        },
        get marginHeight() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).marginHeight, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'marginHeight', arguments, result);
            return result;
        },
        set marginHeight(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'marginHeight', arguments);
            myVm.memory.private_data.get(this).marginHeight = value + "";
        },
        get marginWidth() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).marginWidth, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'marginWidth', arguments, result);
            return result;
        },
        set marginWidth(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'marginWidth', arguments);
            myVm.memory.private_data.get(this).marginWidth = value + "";
        },
        get name() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).name, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'name', arguments);
            myVm.memory.private_data.get(this).name = value + "";
        },
        get referrerPolicy() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).referrerPolicy, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'referrerPolicy', arguments, result);
            return result;
        },
        set referrerPolicy(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'referrerPolicy', arguments);
            myVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get sandbox() {  // DOMTokenList
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        set sandbox(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'sandbox', arguments);
            myVm.memory.private_data.get(this).sandbox = value + "";
        },
        get scrolling() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).scrolling, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'scrolling', arguments, result);
            return result;
        },
        set scrolling(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'scrolling', arguments);
            myVm.memory.private_data.get(this).scrolling = value + "";
        },
        get src() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).src, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'src', arguments, result);
            return result;
        },
        set src(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'src', arguments);
            myVm.memory.private_data.get(this).src = value + "";
        },
        get srcdoc() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).srcdoc, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'srcdoc', arguments, result);
            return result;
        },
        set srcdoc(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'srcdoc', arguments);
            myVm.memory.private_data.get(this).srcdoc = value + "";
        },
        get width() {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).width, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLIFrameElement', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLIFrameElement', 'width', arguments);
            myVm.memory.private_data.get(this).width = value + "";
        },
    }
    myVm.rename(HTMLIFrameElement.prototype, "HTMLIFrameElement");
    myVm.safeDescriptor_addConstructor(HTMLIFrameElement);
    myVm.safe_Objattribute(HTMLIFrameElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLFrameElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLFrameElement, HTMLElement);
})();

myVm.memory.htmlElements["iframe"] = function () {
    return new HTMLImageElement(myVm.memory.$createObj_key);
}

