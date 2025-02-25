Request = function Request() {//构造函数
    if(new.target !== Request){
		throw new TypeError(`Failed to construct 'Request': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Request);

; (function () {
    const $safe_get_attribute = [
        'bodyUsed', 'cache', 'credentials', 'destination', 'headers', 'integrity', 'isHistoryNavigation', 'keepalive', 'method',
        'mode', 'redirect', 'referrer', 'referrerPolicy', 'signal', 'url'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['arrayBuffer', 'blob', 'clone', 'formData', 'json', 'text'];

    Request.prototype = {
        arrayBuffer() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Request', 'arrayBuffer', arguments, result);
            return result;
        },
        blob() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Request', 'blob', arguments, result);
            return result;
        },
        get bodyUsed() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).bodyUsed, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'bodyUsed', arguments, result);
            return result;
        },
        get cache() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).cache, "default");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'cache', arguments, result);
            return result;
        },
        clone() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Request', 'clone', arguments, result);
            return result;
        },
        get credentials() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).credentials, "same-origin");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'credentials', arguments, result);
            return result;
        },
        get destination() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).destination, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'destination', arguments, result);
            return result;
        },
        formData() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Request', 'formData', arguments, result);
            return result;
        },
        get headers() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).headers, new class Headers { });
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'headers', arguments, result);
            return result;
        },
        get integrity() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).integrity, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'integrity', arguments, result);
            return result;
        },
        get isHistoryNavigation() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).isHistoryNavigation, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'isHistoryNavigation', arguments, result);
            return result;
        },
        json() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Request', 'json', arguments, result);
            return result;
        },
        get keepalive() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).keepalive, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'keepalive', arguments, result);
            return result;
        },
        get method() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).method, "GET");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'method', arguments, result);
            return result;
        },
        get mode() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).mode, "cors");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'mode', arguments, result);
            return result;
        },
        get redirect() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).redirect, "follow");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'redirect', arguments, result);
            return result;
        },
        get referrer() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).referrer, "about:client");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'referrer', arguments, result);
            return result;
        },
        get referrerPolicy() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).referrerPolicy, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'referrerPolicy', arguments, result);
            return result;
        },
        get signal() { // 这个有问题
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).signal, new class AbortSignal { aborted = false; onabort = null });
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Request', 'referrerPolicy', arguments, result);
            return result;
        },
        text() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Request', 'text', arguments, result);
            return result;
        },
        get url() {
            if (!Request.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.abs(myVm.memory.private_data.get(this).url, location.href);
        }
    };

    myVm.rename(Request.prototype, "Request");
    myVm.safeDescriptor_addConstructor(Request);
    myVm.safe_Objattribute(Request, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

