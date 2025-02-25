VirtualKeyboard = function VirtualKeyboard(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(VirtualKeyboard);

; (function () {
    const $safe_get_attribute = ['boundingRect', 'ongeometrychange', 'overlaysContent'];
    const $safe_set_attribute = ['ongeometrychange', 'overlaysContent'];
    const $safe_func_attribute = ['hide', 'show'];

    VirtualKeyboard.prototype = {
        get boundingRect() { // 有问题
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.abs(myVm.memory.private_data.get(this).boundingRect, "");
        },
        hide() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'VirtualKeyboard', 'hide', arguments, result);
            return result;
        },
        get ongeometrychange() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ongeometrychange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VirtualKeyboard', 'ongeometrychange', arguments, result);
            return result;
        },
        set ongeometrychange(value) {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'VirtualKeyboard', 'ongeometrychange', arguments);
            myVm.memory.private_data.get(this).ongeometrychange = value + "";
        },
        get overlaysContent() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).overlaysContent, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'VirtualKeyboard', 'overlaysContent', arguments, result);
            return result;
        },
        set overlaysContent(value) {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'VirtualKeyboard', 'overlaysContent', arguments);
            myVm.memory.private_data.get(this).overlaysContent = value ? true : false;
        },
        show() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'VirtualKeyboard', 'show', arguments, result);
            return result;
        },
    }
    myVm.rename(VirtualKeyboard.prototype, "VirtualKeyboard");
    myVm.safeDescriptor_addConstructor(VirtualKeyboard);
    myVm.safe_Objattribute(VirtualKeyboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(VirtualKeyboard.prototype, EventTarget.prototype);
    Object.setPrototypeOf(VirtualKeyboard, EventTarget);
})();

