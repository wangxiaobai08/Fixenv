XMLHttpRequest = function XMLHttpRequest() {//构造函数
    if(new.target !== XMLHttpRequest){
		throw new TypeError(`Failed to construct 'XMLHttpRequest': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}

    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(XMLHttpRequest);
; (function () {
    const $attributes = {
        DONE: 4,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        OPENED: 1,
        UNSENT: 0
    }
    const $safe_get_attribute = [
        'onreadystatechange', 'readyState', 'response', 'responseText', 'responseType', 'responseURL', 'responseXML', 'status', 'statusText', 'timeout', 
        'upload', 'withCredentials'
    ];
    const $safe_set_attribute = ['onreadystatechange', 'response', 'responseType', 'timeout', 'withCredentials'];
    const $safe_func_attribute = ['abort', 'getAllResponseHeaders', 'getResponseHeader', 'open', 'overrideMimeType', 'send', 'setRequestHeader'];
    
    XMLHttpRequest.prototype = {
        abort() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XMLHttpRequest', 'abort', arguments, result);
            return result;
        },
        getAllResponseHeaders() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XMLHttpRequest', 'getAllResponseHeaders', arguments, result);
            return result;
        },
        getResponseHeader() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XMLHttpRequest', 'getResponseHeader', arguments, result);
            return result;
        },
        get onreadystatechange() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onreadystatechange, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'onreadystatechange', arguments, result);
            return result;
        },
        set onreadystatechange(value) {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequest', 'onreadystatechange', arguments);
            myVm.memory.private_data.get(this).onreadystatechange = value + "";
        },
        open() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XMLHttpRequest', 'open', arguments, result);
            return result;
        },
        overrideMimeType() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XMLHttpRequest', 'overrideMimeType', arguments, result);
            return result;
        },
        get readyState() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).readyState, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'readyState', arguments, result);
            return result;
        },
        get response() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).response, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'response', arguments, result);
            return result;
        },
        set response(value) {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequest', 'response', arguments);
            myVm.memory.private_data.get(this).response = value + "";
        },
        get responseText() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).responseText, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'responseText', arguments, result);
            return result;
        },
        get responseType() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).responseType, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'responseType', arguments, result);
            return result;
        },
        set responseType(value) {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequest', 'responseType', arguments);
            myVm.memory.private_data.get(this).responseType = value + "";
        },
        get responseURL() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).responseURL, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'responseURL', arguments, result);
            return result;
        },
        get responseXML() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).responseXML, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'responseXML', arguments, result);
            return result;
        },
        send(body) {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = body;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XMLHttpRequest', 'send', arguments, result);
            return result;
        },
        setRequestHeader() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'XMLHttpRequest', 'setRequestHeader', arguments, result);
            return result;
        },
        get status() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).status, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'status', arguments, result);
            return result;
        },
        get statusText() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).statusText, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'statusText', arguments, result);
            return result;
        },
        get timeout() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).timeout, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'timeout', arguments, result);
            return result;
        },
        set timeout(value) {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'XMLHttpRequest', 'timeout', arguments);
            myVm.memory.private_data.get(this).timeout = value + "";
        },
        get upload() {  //  XMLHttpRequestUpload
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get withCredentials() {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).withCredentials, false);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'XMLHttpRequest', 'withCredentials', arguments, result);
            return result;
        },
        set withCredentials(value) {
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            myVm.memory.private_data.get(this).withCredentials = value;
        }
    }

    for (let key in $attributes) {
        if ($attributes.hasOwnProperty(key)) {
            const value = $attributes[key];
            Object.defineProperty(XMLHttpRequest, key, { value: value, configurable: false, enumerable: true, writable: false });
            Object.defineProperty(XMLHttpRequest.prototype, key, { value: value, configurable: false, enumerable: true, writable: false });
        }
    };

    myVm.rename(XMLHttpRequest.prototype, "XMLHttpRequest");
    myVm.safeDescriptor_addConstructor(XMLHttpRequest);
    myVm.safe_Objattribute(XMLHttpRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);
    Object.setPrototypeOf(XMLHttpRequest, XMLHttpRequestEventTarget);

})();
