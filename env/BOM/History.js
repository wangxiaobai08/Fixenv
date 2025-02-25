History = function History() {
    throw new TypeError("Illegal constructor");
}; myVm.safefunction(History);
history = {};

; (function () {
    const $safe_get_attribute = ['length', 'scrollRestoration', 'state'];
    const $safe_set_attribute = ['scrollRestoration'];
    const $safe_func_attribute = ['back', 'forward', 'go', 'pushState', 'replaceState'];

    History.prototype = {
        back() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'History', 'back', arguments, result);
            return result;
        },
        forward() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'History', 'forward', arguments, result);
            return result;
        },
        go() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'History', 'go', arguments, result);
            return result;
        },
        get length() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = Object.keys(this).length;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'History', 'length', arguments, result);
            return result;
        },
        pushState() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'History', 'pushState', arguments, result);
            return result;
        },
        replaceState() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'History', 'replaceState', arguments, result);
            return result;
        },
        get scrollRestoration() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "auto";
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'History', 'scrollRestoration', arguments, result);
            return result;
        },
        set scrollRestoration(value) {
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'History', 'scrollRestoration', arguments);
            myVm.memory.private_data.get(this).scrollRestoration = value;
        },
        get state() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return {
                idx: 0
            }
        }
    }; myVm.rename(History.prototype, 'History')
    myVm.safeDescriptor_addConstructor(History);
    myVm.safe_Objattribute(History, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(history, History.prototype);

})();

// debugger;