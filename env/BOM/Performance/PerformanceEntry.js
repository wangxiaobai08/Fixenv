
PerformanceEntry = function PerformanceEntry(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(PerformanceEntry);

; (function () {
    const $safe_get_attribute = ['duration', 'entryType', 'name', 'startTime'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];
    
    PerformanceEntry.prototype = {
        get duration() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).duration, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PerformanceEntry', 'duration', arguments, result);
            return result;
        },
        get entryType() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).entryType, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PerformanceEntry', 'entryType', arguments, result);
            return result;
        },
        get name() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).name, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PerformanceEntry', 'name', arguments, result);
            return result;
        },
        get startTime() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).startTime, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PerformanceEntry', 'startTime', arguments, result);
            return result;
        },
        toJSON() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'PerformanceEntry', 'toJSON', arguments, result);
            return result;
        },
    }
    myVm.rename(PerformanceEntry.prototype, "PerformanceEntry");
    myVm.safeDescriptor_addConstructor(PerformanceEntry);
    myVm.safe_Objattribute(PerformanceEntry, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();