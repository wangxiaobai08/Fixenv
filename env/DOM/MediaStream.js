MediaStream = function MediaStream(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(MediaStream);

; (function () {
    const $safe_get_attribute = ['active', 'id', 'onactive', 'onaddtrack', 'oninactive', 'onremovetrack'];
    const $safe_set_attribute = ['onactive', 'onaddtrack', 'oninactive', 'onremovetrack'];
    const $safe_func_attribute = [
        'addTrack', 'clone', 'getAudioTracks', 'getTrackById', 'getTracks', 'getVideoTracks', 'removeTrack'
    ];
    
    MediaStream.prototype = {
        get active() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).active, true);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaStream', 'active', arguments, result);
            return result;
        },
        addTrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaStream', 'addTrack', arguments, result);
            return result;
        },
        clone() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaStream', 'clone', arguments, result);
            return result;
        },
        getAudioTracks() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaStream', 'getAudioTracks', arguments, result);
            return result;
        },
        getTrackById() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaStream', 'getTrackById', arguments, result);
            return result;
        },
        getTracks() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaStream', 'getTracks', arguments, result);
            return result;
        },
        getVideoTracks() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaStream', 'getVideoTracks', arguments, result);
            return result;
        },
        get id() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).id, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaStream', 'id', arguments, result);
            return result;
        },
        get onactive() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onactive, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaStream', 'onactive', arguments, result);
            return result;
        },
        set onactive(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'MediaStream', 'onactive', arguments);
            myVm.memory.private_data.get(this).onactive = value + "";
        },
        get onaddtrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onaddtrack, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaStream', 'onaddtrack', arguments, result);
            return result;
        },
        set onaddtrack(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'MediaStream', 'onaddtrack', arguments);
            myVm.memory.private_data.get(this).onaddtrack = value + "";
        },
        get oninactive() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oninactive, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaStream', 'oninactive', arguments, result);
            return result;
        },
        set oninactive(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'MediaStream', 'oninactive', arguments);
            myVm.memory.private_data.get(this).oninactive = value + "";
        },
        get onremovetrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onremovetrack, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'MediaStream', 'onremovetrack', arguments, result);
            return result;
        },
        set onremovetrack(value) {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'MediaStream', 'onremovetrack', arguments);
            myVm.memory.private_data.get(this).onremovetrack = value + "";
        },
        removeTrack() {
            if (!MediaStream.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'MediaStream', 'removeTrack', arguments, result);
            return result;
        },
    }

    myVm.rename(MediaStream.prototype, "MediaStream");
    myVm.safeDescriptor_addConstructor(MediaStream);
    myVm.safe_Objattribute(MediaStream, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaStream.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(MediaStream, HTMLElement);

})();


// myVm.z_sanbox.memory.htmlElements["div"] = function () {
//     return new MediaStream(myVm.z_sanbox.memory.$createObj_key);
// }