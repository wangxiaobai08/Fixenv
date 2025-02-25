KeyboardEvent = function KeyboardEvent(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(KeyboardEvent);

; (function () {

    const $attributes = {
        DOM_KEY_LOCATION_LEFT: 1,
        DOM_KEY_LOCATION_NUMPAD: 3,
        DOM_KEY_LOCATION_RIGHT: 2,
        DOM_KEY_LOCATION_STANDARD: 0
    }

    const $safe_get_attribute = ['altKey', 'charCode', 'code', 'ctrlKey', 'isComposing', 'key', 'keyCode', 'location', 'metaKey', 'repeat', 'shiftKey'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getModifierState', 'initKeyboardEvent'];

    KeyboardEvent.prototype = {
        get altKey() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).altKey, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'altKey', arguments, result);
            return result;
        },
        get charCode() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).charCode, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'charCode', arguments, result);
            return result;
        },
        get code() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).code, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'code', arguments, result);
            return result;
        },
        get ctrlKey() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ctrlKey, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'ctrlKey', arguments, result);
            return result;
        },
        getModifierState() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'KeyboardEvent', 'getModifierState', arguments, result);
            return result;
        },
        initKeyboardEvent() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'KeyboardEvent', 'initKeyboardEvent', arguments, result);
            return result;
        },
        get isComposing() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).isComposing, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'isComposing', arguments, result);
            return result;
        },
        get key() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).key, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'key', arguments, result);
            return result;
        },
        get keyCode() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).keyCode, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'keyCode', arguments, result);
            return result;
        },
        get location() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).location, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'location', arguments, result);
            return result;
        },
        get metaKey() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).metaKey, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'metaKey', arguments, result);
            return result;
        },
        get repeat() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).repeat, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'KeyboardEvent', 'repeat', arguments, result);
            return result;
        },
        get shiftKey() {
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.abs(myVm.memory.private_data.get(this).shiftKey, "");
        }
    };
    myVm.rename(KeyboardEvent.prototype, "KeyboardEvent");
    myVm.safeDescriptor_addConstructor(KeyboardEvent);
    myVm.safe_Objattribute(KeyboardEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    myVm.add_capitalLetter_attribute(KeyboardEvent, $attributes);

    Object.setPrototypeOf(KeyboardEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(KeyboardEvent, UIEvent);
})();

