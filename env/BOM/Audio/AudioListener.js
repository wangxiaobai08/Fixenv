AudioListener = function AudioListener(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(AudioListener);

; (function () {
    const $safe_get_attribute = ['forwardX', 'forwardY', 'forwardZ', 'positionX', 'positionY', 'positionZ', 'upX', 'upY', 'upZ'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['setOrientation', 'setPosition'];

    AudioListener.prototype = {
        get forwardX() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).forwardX;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).forwardX = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'forwardX', arguments, result);
            return result;
        },
        get forwardY() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).forwardY;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).forwardY = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'forwardY', arguments, result);
            return result;
        },
        get forwardZ() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).forwardZ;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", -1, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).forwardZ = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'forwardZ', arguments, result);
            return result;
        },
        get positionX() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).positionX;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).positionX = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'positionX', arguments, result);
            return result;
        },
        get positionY() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).positionY;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).positionY = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'positionY', arguments, result);
            return result;
        },
        get positionZ() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).positionZ;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).positionZ = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'positionZ', arguments, result);
            return result;
        },
        setOrientation() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioListener', 'setOrientation', arguments, result);
            return result;
        },
        setPosition() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'AudioListener', 'setPosition', arguments, result);
            return result;
        },
        get upX() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).upX;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).upX = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'upX', arguments, result);
            return result;
        },
        get upY() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).upY;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 1, 3.4028234663852886e+38, -3.4028234663852886e+38);
                myVm.memory.private_data.get(this).upY = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'upY', arguments, result);
            return result;
        },
        get upZ() {
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).upZ;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38);
                myVm.memory.private_data.get(this).upZ = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'AudioListener', 'upZ', arguments, result);
            return result;
        },
    }
    myVm.rename(AudioListener.prototype, "AudioListener");
    myVm.safeDescriptor_addConstructor(AudioListener);
    myVm.safe_Objattribute(AudioListener, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

