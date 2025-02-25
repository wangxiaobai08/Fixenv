PointerEvent = function PointerEvent(type, ...args) {//构造函数
    if (new.target !== PointerEvent) throw new TypeError(`Failed to construct 'PointerEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    myVm.protectAddIsTrusted(this);
    myVm.memory.private_data.set(this, { })
}; myVm.safefunction(PointerEvent);

; (function () {
    const $safe_get_attribute = ['altitudeAngle', 'azimuthAngle', 'height', 'isPrimary', 'pointerId', 'pointerType', 'pressure', 'tangentialPressure', 'tiltX', 'tiltY', 'twist', 'width'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getCoalescedEvents', 'getPredictedEvents'];

    PointerEvent.prototype = {
        get altitudeAngle() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).altitudeAnglemyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'altitudeAngle', arguments, result);
            return result;
        },
        get azimuthAngle() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).azimuthAnglemyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'azimuthAngle', arguments, result);
            return result;
        },
        getCoalescedEvents() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'PointerEvent', 'getCoalescedEvents', arguments, result);
            return result;
        },
        getPredictedEvents() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'PointerEvent', 'getPredictedEvents', arguments, result);
            return result;
        },
        get height() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).heightmyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'height', arguments, result);
            return result;
        },
        get isPrimary() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).isPrimarymyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'isPrimary', arguments, result);
            return result;
        },
        get pointerId() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).pointerIdmyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'pointerId', arguments, result);
            return result;
        },
        get pointerType() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).pointerTypemyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'pointerType', arguments, result);
            return result;
        },
        get pressure() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).pressuremyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'pressure', arguments, result);
            return result;
        },
        get tangentialPressure() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).tangentialPressuremyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'tangentialPressure', arguments, result);
            return result;
        },
        get tiltX() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).tiltXmyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'tiltX', arguments, result);
            return result;
        },
        get tiltY() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).tiltYmyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'tiltY', arguments, result);
            return result;
        },
        get twist() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).twistmyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'twist', arguments, result);
            return result;
        },
        get width() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVmmyVm.memory.private_data.get(this).widthmyVm;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'PointerEvent', 'width', arguments, result);
            return result;
        },
    }

    myVm.rename(PointerEvent.prototype, "PointerEvent");
    myVm.safeDescriptor_addConstructor(PointerEvent);
    myVm.safe_Objattribute(PointerEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(PointerEvent.prototype, MouseEvent.prototype);
    Object.setPrototypeOf(PointerEvent, MouseEvent);
})();

