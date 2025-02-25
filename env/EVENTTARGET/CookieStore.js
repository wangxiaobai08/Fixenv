CookieStore = function CookieStore(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(CookieStore);

; (function () {
    const $safe_get_attribute = ['onchange'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = ['delete', 'get', 'getAll', 'set'];

    CookieStore.prototype = {
        delete() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CookieStore', 'delete', arguments, result);
            return result;
        },
        get() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CookieStore', 'get', arguments, result);
            return result;
        },
        getAll() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CookieStore', 'getAll', arguments, result);
            return result;
        },
        get onchange() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onchange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'CookieStore', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'CookieStore', 'onchange', arguments);
            myVm.memory.private_data.get(this).onchange = value + "";
        },
        set() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CookieStore', 'set', arguments, result);
            return result;
        },
    }
    myVm.rename(CookieStore.prototype, "CookieStore");
    myVm.safeDescriptor_addConstructor(CookieStore);
    myVm.safe_Objattribute(CookieStore, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CookieStore.prototype, EventTarget.prototype);
    Object.setPrototypeOf(CookieStore, EventTarget);
})();
cookieStore = new CookieStore(myVm.memory.$createObj_key);

