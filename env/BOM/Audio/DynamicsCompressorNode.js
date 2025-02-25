DynamicsCompressorNode = function DynamicsCompressorNode(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(DynamicsCompressorNode);

; (function () {
    const $safe_get_attribute = ['attack', 'knee', 'ratio', 'reduction', 'release', 'threshold'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    DynamicsCompressorNode.prototype = {
        get attack() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).attack;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "k-rate", 0.003000000026077032, 1, 0);
                myVm.memory.private_data.get(this).attack = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DynamicsCompressorNode', 'attack', arguments, result);
            return result;
        },
        get knee() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).knee;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "k-rate", 30, 40, 0);
                myVm.memory.private_data.get(this).knee = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DynamicsCompressorNode', 'knee', arguments, result);
            return result;
        },
        get ratio() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).ratio;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "k-rate", 12, 20, 1);
                myVm.memory.private_data.get(this).ratio = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DynamicsCompressorNode', 'ratio', arguments, result);
            return result;
        },
        get reduction() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DynamicsCompressorNode', 'reduction', arguments, result);
            return result;
        },
        get release() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).release;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "k-rate", 0.25, 1, 0);
                myVm.memory.private_data.get(this).release = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'DynamicsCompressorNode', 'release', arguments, result);
            return result;
        },
        get threshold() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).threshold;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "k-rate", -24, 0, -100);
                myVm.memory.private_data.get(this).threshold = ele;
            }
            return ele;
        }
    }
    myVm.rename(DynamicsCompressorNode.prototype, "DynamicsCompressorNode");
    myVm.safeDescriptor_addConstructor(DynamicsCompressorNode);
    myVm.safe_Objattribute(DynamicsCompressorNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(DynamicsCompressorNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(DynamicsCompressorNode, AudioNode);
})();

