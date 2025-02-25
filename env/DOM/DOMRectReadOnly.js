DOMRectReadOnly = function DOMRectReadOnly(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(DOMRectReadOnly);

; (function () {
    const $safe_get_attribute = ['bottom', 'height', 'left', 'right', 'top', 'width', 'x', 'y'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];

    DOMRectReadOnly.prototype = {
        get bottom() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'bottom', arguments, result);
            return result;
        },
        get height() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'height', arguments, result);
            return result;
        },
        get left() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'left', arguments, result);
            return result;
        },
        get right() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'right', arguments, result);
            return result;
        },
        toJSON() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'DOMRectReadOnly', 'toJSON', arguments, result);
            return result;
        },
        get top() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'top', arguments, result);
            return result;
        },
        get width() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'width', arguments, result);
            return result;
        },
        get x() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'x', arguments, result);
            return result;
        },
        get y() {
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRectReadOnly', 'y', arguments, result);
            return result;
        },
    }
    myVm.rename(DOMRectReadOnly.prototype, "DOMRectReadOnly");
    myVm.safeDescriptor_addConstructor(DOMRectReadOnly);
    myVm.safe_Objattribute(DOMRectReadOnly, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

