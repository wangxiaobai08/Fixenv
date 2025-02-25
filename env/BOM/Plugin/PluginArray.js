PluginArray = function PluPluginArraygin() {//构造函数
    throw new TypeError("Illegal constructor");
};
myVm.safefunction(PluginArray);

; (function () {
    const $safe_get_attribute = ['length'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['item', 'namedItem', 'refresh'];


    PluginArray.prototype = {
        item(index) {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this[index];
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'PluginArray', 'item', arguments, result);
            return result;
        },
        get length() {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.pluginArray.temp.length;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PluginArray', 'length', arguments, result);
            return result;
        },
        namedItem(key) {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this[key];
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'PluginArray', 'namedItem', arguments, result);
            return result;
        },
        refresh() {
            if (!PluginArray.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'PluginArray', 'refresh', arguments, result);
            return result;
        }
    };
    myVm.set_iterator(PluginArray);
    myVm.rename(PluginArray.prototype, 'PluginArray');
    myVm.safeDescriptor_addConstructor(PluginArray);
    myVm.safe_Objattribute(PluginArray, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    

    myVm.memory.pluginArray.instantiate = {};
    ; (function add_default_pluginArray() {
        if (Array.isArray(myVm.memory.pluginArray.temp) && myVm.memory.pluginArray.temp.length > 0) {
            for (let index = 0; index < myVm.memory.pluginArray.temp.length; index++) {
                let plugin_temp = myVm.memory.plugin.new(myVm.memory.pluginArray.temp[index]);

                Object.defineProperty(myVm.memory.pluginArray.instantiate, index, {
                    value: plugin_temp, configurable: true, enumerable: true, writable: false
                });
                Object.defineProperty(myVm.memory.pluginArray.instantiate, plugin_temp.name, {
                    value: plugin_temp, configurable: true, enumerable: false, writable: false
                });
            }
        }
    })();

    Object.setPrototypeOf(myVm.memory.pluginArray.instantiate, PluginArray.prototype);

})();

