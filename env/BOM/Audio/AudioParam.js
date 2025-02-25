AudioParam = function AudioParam(createObj_key, automationRate, defaultValue, maxValue, minValue) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }

    automationRate = automationRate || "a-rate";
    defaultValue = defaultValue || -1;

    maxValue = maxValue || 3.4028234663852886e+38;
    minValue = minValue || -3.4028234663852886e+38;
    const value = defaultValue;
    myVm.memory.private_data.set(this, {
        automationRate: automationRate,
        defaultValue: defaultValue,
        maxValue: maxValue,
        minValue: minValue,
        value: value
    })
}; myVm.safefunction(AudioParam);

; (function () {
    const $safe_get_attribute = ['automationRate', 'defaultValue', 'maxValue', 'minValue', 'value'];
    const $safe_set_attribute = ['automationRate', 'value'];
    const $safe_func_attribute = [
        'cancelAndHoldAtTime', 'cancelScheduledValues', 'exponentialRampToValueAtTime', 'linearRampToValueAtTime',
        'setTargetAtTime', 'setValueAtTime', 'setValueCurveAtTime'
    ];

    AudioParam.prototype = {
        get automationRate() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).automationRate, "a-rate");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioParam', 'automationRate', arguments, result);
            return result;
        },
        set automationRate(value) {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'AudioParam', 'automationRate', arguments);
            myVm.memory.private_data.get(this).automationRate = value;
        },
        cancelAndHoldAtTime() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioParam', 'cancelAndHoldAtTime', arguments, result);
            return result;
        },
        cancelScheduledValues() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioParam', 'cancelScheduledValues', arguments, result);
            return result;
        },
        get defaultValue() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).defaultValue, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioParam', 'defaultValue', arguments, result);
            return result;
        },
        exponentialRampToValueAtTime() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioParam', 'exponentialRampToValueAtTime', arguments, result);
            return result;
        },
        linearRampToValueAtTime() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioParam', 'linearRampToValueAtTime', arguments, result);
            return result;
        },
        get maxValue() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).maxValue;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioParam', 'maxValue', arguments, result);
            return result;
        },
        get minValue() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.memory.private_data.get(this).minValue;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioParam', 'minValue', arguments, result);
            return result;
        },
        setTargetAtTime() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioParam', 'setTargetAtTime', arguments, result);
            return result;
        },
        setValueAtTime() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new AudioParam(myVm.memory.$createObj_key, "a-rate", 440, 22050);
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioParam', 'setValueAtTime', arguments, result);
            return result;
        },
        setValueCurveAtTime() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioParam', 'setValueCurveAtTime', arguments, result);
            return result;
        },
        get value() {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).value, 0);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioParam', 'value', arguments, result);
            return result;
        },
        set value(value) {
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'AudioParam', 'value', arguments);
            myVm.memory.private_data.get(this).value = value;
        },
    }
    myVm.rename(AudioParam.prototype, "AudioParam");
    myVm.safeDescriptor_addConstructor(AudioParam);
    myVm.safe_Objattribute(AudioParam, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

