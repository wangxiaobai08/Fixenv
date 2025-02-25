MutationEvent = function MutationEvent(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(MutationEvent);

; (function () {
    const $attributes = {
        ADDITION: 2,
        MODIFICATION: 1,
        REMOVAL: 3
    }

    const $safe_get_attribute = ['attrChange', 'attrName', 'newValue', 'prevValue', 'relatedNode'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initMutationEvent'];

    MutationEvent.prototype = {
        get attrChange() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MutationEvent', 'attrChange', arguments, result);
            return result;
        },
        get attrName() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "";
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MutationEvent', 'attrName', arguments, result);
            return result;
        },
        initMutationEvent() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MutationEvent', 'initMutationEvent', arguments, result);
            return result;
        },
        get newValue() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "";
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MutationEvent', 'newValue', arguments, result);
            return result;
        },
        get prevValue() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "";
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MutationEvent', 'prevValue', arguments, result);
            return result;
        },
        get relatedNode() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MutationEvent', 'relatedNode', arguments, result);
            return result;
        },
    }
    myVm.rename(MutationEvent.prototype, "MutationEvent");
    myVm.add_capitalLetter_attribute(MutationEvent, $attributes);
    myVm.safeDescriptor_addConstructor(MutationEvent);
    myVm.safe_Objattribute(MutationEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


    Object.setPrototypeOf(MutationEvent.prototype, Event.prototype);
    Object.setPrototypeOf(MutationEvent, Event);

})();

