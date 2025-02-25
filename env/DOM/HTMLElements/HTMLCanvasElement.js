HTMLCanvasElement = function HTMLCanvasElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, { getContext: null, contextType: null })
}; myVm.safefunction(HTMLCanvasElement);

; (function () {
    const $safe_get_attribute = ['height', 'width'];
    const $safe_set_attribute = ['height', 'width'];
    const $safe_func_attribute = ['captureStream', 'getContext', 'toBlob', 'toDataURL', 'transferControlToOffscreen'];

    HTMLCanvasElement.prototype = {
        captureStream() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLCanvasElement', 'captureStream', arguments, result);
            return result;
        },
        getContext(contextType, contextAttributes) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (contextType === undefined) { throw new TypeError("Failed to execute 'getContext' on 'HTMLCanvasElement': 1 argument required, but only 0 present.") }

            const buffer_context = myVm.memory.private_data.get(this).getContext;
            const buffer_contextType = myVm.memory.private_data.get(this).contextType;

            if (buffer_context === null) {
                let context = {};
                switch (contextType) {
                    case "webgl":
                        context = new WebGLRenderingContext(myVm.memory.$createObj_key, this)
                        break;
                    case "2d":
                        context = new CanvasRenderingContext2D(myVm.memory.$createObj_key, this)
                        break
                    default:
                        context = null;
                };

                myVm.memory.private_data.get(this).getContext = context;
                myVm.memory.private_data.get(this).contextType = contextType
            let result = context;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLCanvasElement', 'switch ', arguments, result);
            return result;
            }

            if (buffer_context !== null && contextType === buffer_contextType) {
            let result = buffer_context;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLCanvasElement', 'switch ', arguments, result);
            return result;
            }
            let result = null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLCanvasElement', 'switch ', arguments, result);
            return result;
        },
        get height() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).height, 150);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLCanvasElement', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLCanvasElement', 'height', arguments);
            myVm.memory.private_data.get(this).height = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        toBlob(callback, type, quality) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLCanvasElement', 'toBlob', arguments, result);
            return result;
        },
        toDataURL() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.default_envs.canvas;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLCanvasElement', 'toDataURL', arguments, result);
            return result;
        },
        transferControlToOffscreen() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLCanvasElement', 'transferControlToOffscreen', arguments, result);
            return result;
        },
        get width() {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).width, 300);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLCanvasElement', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLCanvasElement', 'width', arguments);
            myVm.memory.private_data.get(this).width = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
    }

    myVm.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement");
    myVm.safeDescriptor_addConstructor(HTMLCanvasElement);
    myVm.safe_Objattribute(HTMLCanvasElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLCanvasElement, HTMLElement);

})();


myVm.memory.htmlElements["canvas"] = function () {
    return new HTMLCanvasElement(myVm.memory.$createObj_key);
}


