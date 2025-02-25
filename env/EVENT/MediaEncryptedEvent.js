MediaEncryptedEvent = function MediaEncryptedEvent(type) {
    if(new.target !== MediaEncryptedEvent){
		throw new TypeError(`Failed to construct 'MediaEncryptedEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    if (type === undefined){
        throw new TypeError(`Failed to construct 'MediaEncryptedEvent': 1 argument required, but only 0 present.`)
    }

    myVm.memory.private_data.set(this, {type: type})
}; myVm.safefunction(MediaEncryptedEvent);

; (function () {
    const $safe_get_attribute = ['initData', 'initDataType'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    MediaEncryptedEvent.prototype = {
        get initData() {
            if (!MediaEncryptedEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).initData, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaEncryptedEvent', 'initData', arguments, result);
            return result;
        },
        get initDataType() {
            if (!MediaEncryptedEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).initDataType, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaEncryptedEvent', 'initDataType', arguments, result);
            return result;
        },
    }
    myVm.rename(MediaEncryptedEvent.prototype, "MediaEncryptedEvent");
    myVm.safeDescriptor_addConstructor(MediaEncryptedEvent);
    myVm.safe_Objattribute(MediaEncryptedEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaEncryptedEvent.prototype, Event.prototype);
    Object.setPrototypeOf(MediaEncryptedEvent, Event);

})();

