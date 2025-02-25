UIEvent = function UIEvent(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(UIEvent);

; (function () {
    const $safe_get_attribute = ['detail', 'sourceCapabilities', 'view', 'which'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initUIEvent'];

    UIEvent.prototype = {
        get detail() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).detail, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'UIEvent', 'detail', arguments, result);
            return result;
        },
        initUIEvent() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'UIEvent', 'initUIEvent', arguments, result);
            return result;
        },
        get sourceCapabilities() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).sourceCapabilities, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'UIEvent', 'sourceCapabilities', arguments, result);
            return result;
        },
        get view() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).view, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'UIEvent', 'view', arguments, result);
            return result;
        },
        get which() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.abs(myVm.memory.private_data.get(this).which, "");
        }
    }

    myVm.rename(UIEvent.prototype, "UIEvent");
    myVm.safeDescriptor_addConstructor(UIEvent);
    myVm.safe_Objattribute(UIEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
    Object.setPrototypeOf(UIEvent, Event);

})();

