CustomElementRegistry = function CustomElementRegistry(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(CustomElementRegistry);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['define', 'get', 'upgrade', 'whenDefined'];
    
    CustomElementRegistry.prototype = {
        define() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CustomElementRegistry', 'define', arguments, result);
            return result;
        },
        get() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CustomElementRegistry', 'get', arguments, result);
            return result;
        },
        upgrade() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CustomElementRegistry', 'upgrade', arguments, result);
            return result;
        },
        whenDefined() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'CustomElementRegistry', 'whenDefined', arguments, result);
            return result;
        },
    }
    myVm.rename(CustomElementRegistry.prototype, "CustomElementRegistry");
    myVm.safeDescriptor_addConstructor(CustomElementRegistry);
    myVm.safe_Objattribute(CustomElementRegistry, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
customElements = new CustomElementRegistry(myVm.memory.$createObj_key)

