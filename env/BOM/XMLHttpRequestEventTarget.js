XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(XMLHttpRequestEventTarget);

; (function () {
    const $safe_get_attribute = ['onabort', 'onerror', 'onload', 'onloadend', 'onloadstart', 'onprogress', 'ontimeout'];
    const $safe_set_attribute = ['onabort', 'onerror', 'onload', 'onloadend', 'onloadstart', 'onprogress', 'ontimeout'];
    const $safe_func_attribute = [];

    XMLHttpRequestEventTarget.prototype = {
        get onabort() {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onabort, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequestEventTarget', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequestEventTarget', 'onabort', arguments);
            myVm.memory.private_data.get(this).onabort = value + "";
        },
        get onerror() {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onerror, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequestEventTarget', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequestEventTarget', 'onerror', arguments);
            myVm.memory.private_data.get(this).onerror = value + "";
        },
        get onload() {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onload, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequestEventTarget', 'onload', arguments, result);
            return result;
        },
        set onload(value) {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequestEventTarget', 'onload', arguments);
            myVm.memory.private_data.get(this).onload = value + "";
        },
        get onloadend() {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onloadend, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequestEventTarget', 'onloadend', arguments, result);
            return result;
        },
        set onloadend(value) {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequestEventTarget', 'onloadend', arguments);
            myVm.memory.private_data.get(this).onloadend = value + "";
        },
        get onloadstart() {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onloadstart, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequestEventTarget', 'onloadstart', arguments, result);
            return result;
        },
        set onloadstart(value) {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequestEventTarget', 'onloadstart', arguments);
            myVm.memory.private_data.get(this).onloadstart = value + "";
        },
        get onprogress() {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onprogress, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequestEventTarget', 'onprogress', arguments, result);
            return result;
        },
        set onprogress(value) {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequestEventTarget', 'onprogress', arguments);
            myVm.memory.private_data.get(this).onprogress = value + "";
        },
        get ontimeout() {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ontimeout, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequestEventTarget', 'ontimeout', arguments, result);
            return result;
        },
        set ontimeout(value) {
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            myVm.memory.private_data.get(this).ontimeout = value + "";
        }
    }

    myVm.rename(XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget");
    myVm.safeDescriptor_addConstructor(XMLHttpRequestEventTarget);
    myVm.safe_Objattribute(XMLHttpRequestEventTarget, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
    Object.setPrototypeOf(XMLHttpRequestEventTarget, EventTarget);

})();