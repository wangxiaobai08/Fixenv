Headers = function Headers() {//构造函数
    if(new.target !== Headers){
		throw new TypeError(`Failed to construct 'Headers': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Headers);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['append', 'delete', 'entries', 'forEach', 'get', 'has', 'keys', 'set', 'values'];
    
    Headers.prototype = {
        append() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'append', arguments, result);
            return result;
        },
        delete() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'delete', arguments, result);
            return result;
        },
        entries() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'entries', arguments, result);
            return result;
        },
        forEach() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'forEach', arguments, result);
            return result;
        },
        get() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'get', arguments, result);
            return result;
        },
        has() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'has', arguments, result);
            return result;
        },
        keys() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'keys', arguments, result);
            return result;
        },
        set() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'set', arguments, result);
            return result;
        },
        values() {
            if (!Headers.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Headers', 'values', arguments, result);
            return result;
        }
    }

    myVm.rename(Headers.prototype, "Headers");
    myVm.safeDescriptor_addConstructor(Headers);
    myVm.safe_Objattribute(Headers, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

