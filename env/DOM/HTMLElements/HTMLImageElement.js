HTMLImageElement = function HTMLImageElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLImageElement);

; (function () {
    const $safe_get_attribute = ['align', 'alt', 'border', 'complete', 'crossOrigin', 'currentSrc', 'decoding', 'height', 'hspace', 'isMap', 'loading', 'longDesc', 'lowsrc', 'name', 'naturalHeight', 'naturalWidth', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'vspace', 'width', 'x', 'y'];
    const $safe_set_attribute = ['align', 'alt', 'border', 'crossOrigin', 'decoding', 'height', 'hspace', 'isMap', 'loading', 'longDesc', 'lowsrc', 'name', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'vspace', 'width'];
    const $safe_func_attribute = ['decode'];

    HTMLImageElement.prototype = {
        get align() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).align, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'align', arguments, result);
            return result;
        },
        set align(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'align', arguments);
            myVm.memory.private_data.get(this).align = value + "";
        },
        get alt() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).alt, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'alt', arguments, result);
            return result;
        },
        set alt(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'alt', arguments);
            myVm.memory.private_data.get(this).alt = value + "";
        },
        get border() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).border, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'border', arguments, result);
            return result;
        },
        set border(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'border', arguments);
            myVm.memory.private_data.get(this).border = value + "";
        },
        get complete() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'complete', arguments, result);
            return result;
        },
        get crossOrigin() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).crossOrigin, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'crossOrigin', arguments, result);
            return result;
        },
        set crossOrigin(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'crossOrigin', arguments);
            myVm.memory.private_data.get(this).crossOrigin = "anonymous";
        },
        get currentSrc() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).currentSrc, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'currentSrc', arguments, result);
            return result;
        },
        decode() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLImageElement', 'decode', arguments, result);
            return result;
        },
        get decoding() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).decoding, 'auto');
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'decoding', arguments, result);
            return result;
        },
        set decoding(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'decoding', arguments);
            myVm.memory.private_data.get(this).decoding = 'auto';
        },
        get height() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).height, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === "") {
                myVm.memory.private_data.get(this).height = "";
            } else if (value === true) {
                myVm.memory.private_data.get(this).height = 1;
            } else {
                myVm.memory.private_data.get(this).height = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
            }
        },
        get hspace() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).hspace, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'hspace', arguments, result);
            return result;
        },
        set hspace(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (value === true) {
                myVm.memory.private_data.get(this).hspace = 1;
            } else {
                myVm.memory.private_data.get(this).hspace = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
            }
        },
        get isMap() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).isMap, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'isMap', arguments, result);
            return result;
        },
        set isMap(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'isMap', arguments);
            myVm.memory.private_data.get(this).isMap = value ? true: false;
        },
        get loading() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).loading, "auto");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'loading', arguments, result);
            return result;
        },
        set loading(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'loading', arguments);
            myVm.memory.private_data.get(this).loading = value + "";
        },
        get longDesc() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).longDesc, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'longDesc', arguments, result);
            return result;
        },
        set longDesc(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'longDesc', arguments);
            myVm.memory.private_data.get(this).longDesc = `${location.href}${value}`;
        },
        get lowsrc() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).lowsrc, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'lowsrc', arguments, result);
            return result;
        },
        set lowsrc(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'lowsrc', arguments);
            myVm.memory.private_data.get(this).lowsrc = `${location.href}${value}`;
        },
        get name() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).name, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'name', arguments);
            myVm.memory.private_data.get(this).name = value + "";
        },
        get naturalHeight() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).naturalHeight, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'naturalHeight', arguments, result);
            return result;
        },
        get naturalWidth() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).naturalWidth, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'naturalWidth', arguments, result);
            return result;
        },
        get referrerPolicy() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).referrerPolicy, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'referrerPolicy', arguments, result);
            return result;
        },
        set referrerPolicy(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'referrerPolicy', arguments);
            myVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get sizes() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).sizes, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'sizes', arguments, result);
            return result;
        },
        set sizes(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'sizes', arguments);
            myVm.memory.private_data.get(this).sizes = value + "";
        },
        get src() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).src, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'src', arguments, result);
            return result;
        },
        set src(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'src', arguments);
            myVm.memory.private_data.get(this).src = value + "";
        },
        get srcset() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).srcset, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'srcset', arguments, result);
            return result;
        },
        set srcset(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'srcset', arguments);
            myVm.memory.private_data.get(this).srcset = value + "";
        },
        get useMap() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).useMap, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'useMap', arguments, result);
            return result;
        },
        set useMap(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'useMap', arguments);
            myVm.memory.private_data.get(this).useMap = value + "";
        },
        get vspace() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).vspace, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'vspace', arguments, result);
            return result;
        },
        set vspace(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'vspace', arguments);
            myVm.memory.private_data.get(this).vspace = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        get width() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).width, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLImageElement', 'width', arguments);
            myVm.memory.private_data.get(this).width = (!isNaN(parseFloat(value)) && isFinite(value)) ? parseInt(value) : 0;
        },
        get x() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).x, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLImageElement', 'x', arguments, result);
            return result;
        },
        get y() {
            if (!HTMLImageElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.abs(myVm.memory.private_data.get(this).y, 0);
        }
    };

    myVm.rename(HTMLImageElement.prototype, "HTMLImageElement");
    myVm.safeDescriptor_addConstructor(HTMLImageElement);
    myVm.safe_Objattribute(HTMLImageElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLImageElement, HTMLElement);

})();

myVm.memory.htmlElements["img"] = function () {
    return new HTMLImageElement(myVm.memory.$createObj_key);
}

