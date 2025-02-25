MediaSession = function MediaSession(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(MediaSession);

; (function () {
    const $safe_get_attribute = ['metadata', 'playbackState'];
    const $safe_set_attribute = ['metadata', 'playbackState'];
    const $safe_func_attribute = ['setActionHandler', 'setCameraActive', 'setMicrophoneActive', 'setPositionState'];

    MediaSession.prototype = {
        get metadata() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).metadata, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaSession', 'metadata', arguments, result);
            return result;
        },
        set metadata(value) {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'MediaSession', 'metadata', arguments);
            myVm.memory.private_data.get(this).metadata = value + "";
        },
        get playbackState() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).playbackState, "none");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaSession', 'playbackState', arguments, result);
            return result;
        },
        set playbackState(value) {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'MediaSession', 'playbackState', arguments);
            myVm.memory.private_data.get(this).playbackState = value + "";
        },
        setActionHandler() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaSession', 'setActionHandler', arguments, result);
            return result;
        },
        setCameraActive() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaSession', 'setCameraActive', arguments, result);
            return result;
        },
        setMicrophoneActive() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaSession', 'setMicrophoneActive', arguments, result);
            return result;
        },
        setPositionState() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaSession', 'setPositionState', arguments, result);
            return result;
        },
    }
    myVm.rename(MediaSession.prototype, "MediaSession");
    myVm.safeDescriptor_addConstructor(MediaSession);
    myVm.safe_Objattribute(MediaSession, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
