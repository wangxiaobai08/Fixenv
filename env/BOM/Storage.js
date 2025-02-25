Storage = function Storage() {//构造函数
    throw new TypeError("Illegal constructor");
}; myVm.safefunction(Storage);

localStorage = {};
sessionStorage = {};

; (function () {

    const $safe_get_attribute = [ 'length' ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['clear', 'getItem', 'key', 'removeItem', 'setItem']

    Storage.prototype = {
        clear() {
            var temp = Object.keys(this)
            for (var i = 0; temp.length > i; i++) {
                delete this[temp[i]];
            }
        },
        getItem(k) {
            let result = this[k] ? this[k] : null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Storage', 'getItem', arguments, result);
            return result;
        },
        key(index) {
            let result = Object.keys(this)[index];
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Storage', 'key', arguments, result);
            return result;
        },
        get length() {
            if (!Storage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = Object.keys(this).length;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Storage', 'length', arguments, result);
            return result;
        },
        removeItem(k) {
            delete this[k];
        },
        setItem(k, v) {
            this[k] = v;
        }
    }; myVm.rename(Storage.prototype, "Storage");
    myVm.safeDescriptor_addConstructor(Storage);
    myVm.safe_Objattribute(Storage, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(localStorage, Storage.prototype);
    Object.setPrototypeOf(sessionStorage, Storage.prototype);

})();

// debugger;