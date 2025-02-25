Crypto = function Crypto(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Crypto);
// crypto = {};

; (function () {
    const $safe_get_attribute = ['subtle'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getRandomValues', 'randomUUID'];

    Crypto.prototype = {
        getRandomValues() {
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Crypto', 'getRandomValues', arguments, result);
            return result;
        },
        randomUUID() {
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Crypto', 'randomUUID', arguments, result);
            return result;
        },
        get subtle() {
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).subtle, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Crypto', 'subtle', arguments, result);
            return result;
        },
    }
    myVm.rename(Crypto.prototype, "Crypto");
    myVm.safeDescriptor_addConstructor(Crypto);
    myVm.safe_Objattribute(Crypto, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    // Object.setPrototypeOf(crypto, Crypto.prototype);
})();
crypto = new Crypto(myVm.memory.$createObj_key)

