MimeTypeArray = function MimeTypeArray() {
    throw new TypeError("Illegal constructor");
}; myVm.safefunction(MimeTypeArray);

; (function () {

    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem'];

    MimeTypeArray.prototype = {
        item(index) {
            let result = this[index];
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MimeTypeArray', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!MimeTypeArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.mimeTypeArray.length;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MimeTypeArray', 'length', arguments, result);
            return result;
        },
        namedItem(key) {
            let result = this[key];
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MimeTypeArray', 'namedItem', arguments, result);
            return result;
        }

    }; myVm.rename(MimeTypeArray.prototype, 'MimeTypeArray');
    myVm.safeDescriptor_addConstructor(MimeTypeArray);
    myVm.safe_Objattribute(MimeTypeArray, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    myVm.memory.mimeTypeArray.instantiate = {};
    myVm.memory.mimeTypeArray.length = 0;

    ; (function add_default_mimeTypeArray() {
        for (let plugin_index = 0; plugin_index < myVm.memory.pluginArray.temp.length; plugin_index++) {
            let plugin_ = myVm.memory.pluginArray.instantiate.item(plugin_index);
            for (let mindex = 0; mindex < plugin_.length; mindex++) {
                let mimeType_ = plugin_.item(mindex)
                if (myVm.memory.mimeTypeArray.instantiate[mimeType_.type] === undefined) {
                    
                    Object.defineProperty(myVm.memory.mimeTypeArray.instantiate, myVm.memory.mimeTypeArray.length, {
                        value: mimeType_, configurable: true, enumerable: true, writable: false
                    });
                    Object.defineProperty(myVm.memory.mimeTypeArray.instantiate, mimeType_.type, {
                        value: mimeType_, configurable: true, enumerable: false, writable: false
                    });

                    myVm.memory.mimeTypeArray.length += 1;
                }
            }
        }
    })();

    Object.setPrototypeOf(myVm.memory.mimeTypeArray.instantiate, MimeTypeArray.prototype);

})();

// debugger;