NodeList = function NodeList(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(NodeList);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['entries', 'forEach', 'item', 'keys', 'values'];

    NodeList.prototype = {
        entries() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'NodeList', 'entries', arguments, result);
            return result;
        },
        forEach(callback, ...args) {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'NodeList', 'forEach', arguments, result);
            return result;
        },
        item(imdex) {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            try{
                return this[imdex]
            }catch(error){
            let result = null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'NodeList', 'item', arguments, result);
            return result;
            }
        },
        keys() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = Object.keys(this);
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'NodeList', 'keys', arguments, result);
            return result;
        },
        get length() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).length, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'NodeList', 'length', arguments, result);
            return result;
        },
        values() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'NodeList', 'values', arguments, result);
            return result;
        }
    };
    myVm.set_iterator(NodeList);
    myVm.rename(NodeList.prototype, "NodeList");
    myVm.safeDescriptor_addConstructor(NodeList);
    myVm.safe_Objattribute(NodeList, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();