OscillatorNode = function OscillatorNode() {
    if(new.target !== OscillatorNode){
		throw new TypeError(`Failed to construct 'OscillatorNode': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(OscillatorNode);

; (function () {
    const $safe_get_attribute = ['detune', 'frequency', 'type'];
    const $safe_set_attribute = ['type'];
    const $safe_func_attribute = ['setPeriodicWave'];

    OscillatorNode.prototype = {
        get detune() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).detune;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 0, 153600, -153600);
                myVm.memory.private_data.get(this).detune = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'OscillatorNode', 'detune', arguments, result);
            return result;
        },
        get frequency() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).detune;
            if (ele === undefined) {
                ele = new AudioParam(myVm.memory.$createObj_key, "a-rate", 440, 22050, -22050);
                myVm.memory.private_data.get(this).detune = ele;
            }
            let result = ele;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'OscillatorNode', 'frequency', arguments, result);
            return result;
        },
        setPeriodicWave() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'OscillatorNode', 'setPeriodicWave', arguments, result);
            return result;
        },
        get type() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).type, "sine");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'OscillatorNode', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            myVm.memory.private_data.get(this).type = value + "";
        }
    }
    myVm.rename(OscillatorNode.prototype, "OscillatorNode");
    myVm.safeDescriptor_addConstructor(OscillatorNode);
    myVm.safe_Objattribute(OscillatorNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(OscillatorNode.prototype, AudioScheduledSourceNode.prototype);
    Object.setPrototypeOf(OscillatorNode, AudioScheduledSourceNode);
})();

