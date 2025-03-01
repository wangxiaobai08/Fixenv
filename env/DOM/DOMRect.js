DOMRect = function DOMRect(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(DOMRect);

; (function () {
    const $safe_get_attribute = ['height', 'width', 'x', 'y'];
    const $safe_set_attribute = ['height', 'width', 'x', 'y'];
    const $safe_func_attribute = [];

    DOMRect.prototype = {
        get height() {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).height, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRect', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'DOMRect', 'height', arguments);
            myVm.memory.private_data.get(this).height = value;
        },
        get width() {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).width, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRect', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'DOMRect', 'width', arguments);
            myVm.memory.private_data.get(this).width = value;
        },
        get x() {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).x, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRect', 'x', arguments, result);
            return result;
        },
        set x(value) {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'DOMRect', 'x', arguments);
            myVm.memory.private_data.get(this).x = value;
        },
        get y() {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).y, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DOMRect', 'y', arguments, result);
            return result;
        },
        set y(value) {
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'DOMRect', 'y', arguments);
            myVm.memory.private_data.get(this).y = value;
        },
    }
    myVm.rename(DOMRect.prototype, "DOMRect");
    myVm.safeDescriptor_addConstructor(DOMRect);
    myVm.safe_Objattribute(DOMRect, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(DOMRect.prototype, DOMRectReadOnly.prototype);
    Object.setPrototypeOf(DOMRect, DOMRectReadOnly);
})();

