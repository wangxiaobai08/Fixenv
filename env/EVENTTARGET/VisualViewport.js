VisualViewport = function VisualViewport(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(VisualViewport);

; (function () {
    const $safe_get_attribute = ['height', 'offsetLeft', 'offsetTop', 'onresize', 'onscroll', 'pageLeft', 'pageTop', 'scale', 'width'];
    const $safe_set_attribute = ['onresize', 'onscroll'];
    const $safe_func_attribute = [];

    VisualViewport.prototype = {
        get height() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 963.3333129882812;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'height', arguments, result);
            return result;
        },
        get offsetLeft() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'offsetLeft', arguments, result);
            return result;
        },
        get offsetTop() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'offsetTop', arguments, result);
            return result;
        },
        get onresize() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onresize, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'onresize', arguments, result);
            return result;
        },
        set onresize(value) {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'VisualViewport', 'onresize', arguments);
            myVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onscroll, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'onscroll', arguments, result);
            return result;
        },
        set onscroll(value) {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'VisualViewport', 'onscroll', arguments);
            myVm.memory.private_data.get(this).onscroll = value + "";
        },
        get pageLeft() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'pageLeft', arguments, result);
            return result;
        },
        get pageTop() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'pageTop', arguments, result);
            return result;
        },
        get scale() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 1;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'scale', arguments, result);
            return result;
        },
        get width() {
            if (!VisualViewport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 1707.3333740234375;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VisualViewport', 'width', arguments, result);
            return result;
        },
    }
    myVm.rename(VisualViewport.prototype, "VisualViewport");
    myVm.safeDescriptor_addConstructor(VisualViewport);
    myVm.safe_Objattribute(VisualViewport, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(VisualViewport.prototype, EventTarget.prototype);
    Object.setPrototypeOf(VisualViewport, EventTarget);
})();
visualViewport = new VisualViewport(myVm.memory.$createObj_key);

