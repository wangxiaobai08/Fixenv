MouseEvent = function MouseEvent(type, ...args) {//构造函数
    if (new.target !== MouseEvent) throw new TypeError(`Failed to construct 'MouseEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    myVm.protectAddIsTrusted(this);
    myVm.memory.private_data.set(this, {
        altKey: false,
        bubbles: false,
        button: 0,
        buttons: 0,
        cancelBubble: false,
        cancelable: false,
        clientX: 0,
        clientY: 0,
        composed: false,
        ctrlKey: false,
        currentTarget: null,
        defaultPrevented: false,
        detail: 0,
        eventPhase: 0,
        fromElement: null,
        layerX: 0,
        layerY: 0,
        metaKey: false,
        movementX: 0,
        movementY: 0,
        offsetX: 0,
        offsetY: 0,
        pageX: 0,
        pageY: 0,
        path: [],
        relatedTarget: null,
        returnValue: true,
        screenX: 0,
        screenY: 0,
        shiftKey: false,
        sourceCapabilities: null,
        srcElement: null,
        target: null,
        timeStamp: performance.now(),
        toElement: null,
        type: type.toLowerCase(),
        view: null,
        which: 1,
        x: 0,
        y: 0,
    })
}; myVm.safefunction(MouseEvent);

; (function () {
    const $safe_get_attribute = [
        'altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'fromElement', 'layerX', 'layerY', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 
        'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'toElement', 'x', 'y'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getModifierState', 'initMouseEvent'];

    MouseEvent.prototype = {
        get altKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).altKey;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'altKey', arguments, result);
            return result;
        },
        get button() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).button;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'button', arguments, result);
            return result;
        },
        get buttons() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).buttons;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'buttons', arguments, result);
            return result;
        },
        get clientX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).clientX;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'clientX', arguments, result);
            return result;
        },
        get clientY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).clientY;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'clientY', arguments, result);
            return result;
        },
        get ctrlKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).ctrlKey;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'ctrlKey', arguments, result);
            return result;
        },
        get fromElement() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).fromElement;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'fromElement', arguments, result);
            return result;
        },
        getModifierState() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MouseEvent', 'getModifierState', arguments, result);
            return result;
        },
        initMouseEvent() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MouseEvent', 'initMouseEvent', arguments, result);
            return result;
        },
        get layerX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).layerX;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'layerX', arguments, result);
            return result;
        },
        get layerY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).layerY;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'layerY', arguments, result);
            return result;
        },
        get metaKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).metaKey;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'metaKey', arguments, result);
            return result;
        },
        get movementX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).movementX;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'movementX', arguments, result);
            return result;
        },
        get movementY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).movementY;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'movementY', arguments, result);
            return result;
        },
        get offsetX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).offsetX;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'offsetX', arguments, result);
            return result;
        },
        get offsetY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).offsetY;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'offsetY', arguments, result);
            return result;
        },
        get pageX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).pageX;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'pageX', arguments, result);
            return result;
        },
        get pageY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).pageY;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'pageY', arguments, result);
            return result;
        },
        get relatedTarget() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).relatedTarget;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'relatedTarget', arguments, result);
            return result;
        },
        get screenX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).screenX;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'screenX', arguments, result);
            return result;
        },
        get screenY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).screenY;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'screenY', arguments, result);
            return result;
        },
        get shiftKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).shiftKey;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'shiftKey', arguments, result);
            return result;
        },
        get toElement() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).toElement;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'toElement', arguments, result);
            return result;
        },
        get x() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).x;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MouseEvent', 'x', arguments, result);
            return result;
        },
        get y() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.memory.private_data.get(this).y;
        }
    }

    myVm.rename(MouseEvent.prototype, "MouseEvent");
    myVm.safeDescriptor_addConstructor(MouseEvent);
    myVm.safe_Objattribute(MouseEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(MouseEvent, UIEvent);

})();

