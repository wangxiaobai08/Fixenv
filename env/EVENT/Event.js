Event = function Event(type, ...args) {//构造函数
    if (new.target !== Event) throw new TypeError(`Failed to construct 'Event': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    
    myVm.protectAddIsTrusted(this);
    myVm.memory.private_data.set(this, {
        bubbles: false,
        cancelBubble: false,
        cancelable: false,
        composed: false,
        currentTarget: null,
        defaultPrevented: false,
        eventPhase: 0,
        path: [],
        returnValue: true,
        srcElement: null,
        target: null,
        timeStamp: 0,
        type: type.toLowerCase(),
    });
}; myVm.safefunction(Event);

; (function () {
    const $attributes = {
        AT_TARGET: 2,
        BUBBLING_PHASE: 3,
        CAPTURING_PHASE: 1,
        NONE: 0
    };
    const $safe_get_attribute = ['bubbles', 'cancelBubble', 'cancelable', 'composed', 'currentTarget', 'defaultPrevented', 'eventPhase', 'path', 'returnValue', 'srcElement', 'target', 'timeStamp', 'type'];
    const $safe_set_attribute = ['cancelBubble', 'returnValue'];
    const $safe_func_attribute = ['composedPath', 'initEvent', 'preventDefault', 'stopImmediatePropagation', 'stopPropagation'];

    Event.prototype = {
        get bubbles() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).bubbles;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'bubbles', arguments, result);
            return result;
        },
        get cancelBubble() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).cancelBubble;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'cancelBubble', arguments, result);
            return result;
        },
        set cancelBubble(value) {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'Event', 'cancelBubble', arguments);
            myVm.memory.private_data.get(this).cancelBubble = value ? true :false;
        },
        get cancelable() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).cancelable;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'cancelable', arguments, result);
            return result;
        },
        get composed() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).composed;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'composed', arguments, result);
            return result;
        },
        composedPath() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Event', 'composedPath', arguments, result);
            return result;
        },
        get currentTarget() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).currentTarget;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'currentTarget', arguments, result);
            return result;
        },
        get defaultPrevented() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).defaultPrevented;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'defaultPrevented', arguments, result);
            return result;
        },
        get eventPhase() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).eventPhase;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'eventPhase', arguments, result);
            return result;
        },
        initEvent() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Event', 'initEvent', arguments, result);
            return result;
        },
        get path() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = [];
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'path', arguments, result);
            return result;
        },
        preventDefault() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Event', 'preventDefault', arguments, result);
            return result;
        },
        get returnValue() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).returnValue;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'returnValue', arguments, result);
            return result;
        },
        set returnValue(value) {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'Event', 'returnValue', arguments);
            myVm.memory.private_data.get(this).returnValue = value ? true :false;
        },
        get srcElement() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).srcElement;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'srcElement', arguments, result);
            return result;
        },
        stopImmediatePropagation() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Event', 'stopImmediatePropagation', arguments, result);
            return result;
        },
        stopPropagation() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Event', 'stopPropagation', arguments, result);
            return result;
        },
        get target() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).target;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'target', arguments, result);
            return result;
        },
        get timeStamp() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).timeStamp;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Event', 'timeStamp', arguments, result);
            return result;
        },
        get type() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.memory.private_data.get(this).type;
        }
    };

    myVm.rename(Event.prototype, "Event");
    myVm.add_capitalLetter_attribute(Event, $attributes);
    myVm.safeDescriptor_addConstructor(Event);
    myVm.safe_Objattribute(Event, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
