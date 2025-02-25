Clipboard = function Clipboard(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Clipboard);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['read', 'readText', 'write', 'writeText'];
    
    Clipboard.prototype = {
        read() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Clipboard', 'read', arguments, result);
            return result;
        },
        readText() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Clipboard', 'readText', arguments, result);
            return result;
        },
        write() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Clipboard', 'write', arguments, result);
            return result;
        },
        writeText() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Clipboard', 'writeText', arguments, result);
            return result;
        },
    }
    myVm.rename(Clipboard.prototype, "Clipboard");
    myVm.safeDescriptor_addConstructor(Clipboard);
    myVm.safe_Objattribute(Clipboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Clipboard.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Clipboard, EventTarget);
})();

