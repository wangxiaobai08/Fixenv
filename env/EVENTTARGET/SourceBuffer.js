SourceBuffer = function SourceBuffer(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(SourceBuffer);

; (function () {
    const $safe_get_attribute = ['appendWindowEnd', 'appendWindowStart', 'buffered', 'mode', 'onabort', 'onerror', 'onupdate', 'onupdateend', 'onupdatestart', 'timestampOffset', 'updating'];
    const $safe_set_attribute = ['appendWindowEnd', 'appendWindowStart', 'mode', 'onabort', 'onerror', 'onupdate', 'onupdateend', 'onupdatestart', 'timestampOffset'];
    
    const $safe_func_attribute = ['abort', 'appendBuffer', 'changeType', 'remove'];
    SourceBuffer.prototype = {
        abort() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SourceBuffer', 'abort', arguments, result);
            return result;
        },
        appendBuffer() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SourceBuffer', 'appendBuffer', arguments, result);
            return result;
        },
        get appendWindowEnd() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).appendWindowEnd, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'appendWindowEnd', arguments, result);
            return result;
        },
        set appendWindowEnd(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'appendWindowEnd', arguments);
            myVm.memory.private_data.get(this).appendWindowEnd = value + "";
        },
        get appendWindowStart() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).appendWindowStart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'appendWindowStart', arguments, result);
            return result;
        },
        set appendWindowStart(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'appendWindowStart', arguments);
            myVm.memory.private_data.get(this).appendWindowStart = value + "";
        },
        get buffered() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).buffered, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'buffered', arguments, result);
            return result;
        },
        changeType() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SourceBuffer', 'changeType', arguments, result);
            return result;
        },
        get mode() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).mode, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'mode', arguments, result);
            return result;
        },
        set mode(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'mode', arguments);
            myVm.memory.private_data.get(this).mode = value + "";
        },
        get onabort() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onabort, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'onabort', arguments);
            myVm.memory.private_data.get(this).onabort = value + "";
        },
        get onerror() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onerror, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'onerror', arguments);
            myVm.memory.private_data.get(this).onerror = value + "";
        },
        get onupdate() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onupdate, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'onupdate', arguments, result);
            return result;
        },
        set onupdate(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'onupdate', arguments);
            myVm.memory.private_data.get(this).onupdate = value + "";
        },
        get onupdateend() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onupdateend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'onupdateend', arguments, result);
            return result;
        },
        set onupdateend(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'onupdateend', arguments);
            myVm.memory.private_data.get(this).onupdateend = value + "";
        },
        get onupdatestart() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onupdatestart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'onupdatestart', arguments, result);
            return result;
        },
        set onupdatestart(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'onupdatestart', arguments);
            myVm.memory.private_data.get(this).onupdatestart = value + "";
        },
        remove() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SourceBuffer', 'remove', arguments, result);
            return result;
        },
        get timestampOffset() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).timestampOffset, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'timestampOffset', arguments, result);
            return result;
        },
        set timestampOffset(value) {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SourceBuffer', 'timestampOffset', arguments);
            myVm.memory.private_data.get(this).timestampOffset = value + "";
        },
        get updating() {
            if (!SourceBuffer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).updating, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SourceBuffer', 'updating', arguments, result);
            return result;
        },
    }
    myVm.rename(SourceBuffer.prototype, "SourceBuffer");
    myVm.safeDescriptor_addConstructor(SourceBuffer);
    myVm.safe_Objattribute(SourceBuffer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SourceBuffer.prototype, EventTarget.prototype);
    Object.setPrototypeOf(SourceBuffer, EventTarget);

})();