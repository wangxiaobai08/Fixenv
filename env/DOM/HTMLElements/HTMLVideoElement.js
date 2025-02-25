HTMLVideoElement = function HTMLVideoElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(HTMLVideoElement);

; (function () {
    const $safe_get_attribute = [
        'disablePictureInPicture', 'height', 'onenterpictureinpicture', 'onleavepictureinpicture', 'playsInline', 'poster', 'videoHeight', 'videoWidth', 
        'webkitDecodedFrameCount', 'webkitDisplayingFullscreen', 'webkitDroppedFrameCount', 'webkitSupportsFullscreen', 'width'
    ];
    const $safe_set_attribute = ['disablePictureInPicture', 'height', 'onenterpictureinpicture', 'onleavepictureinpicture', 'playsInline', 'poster', 'width'];
    const $safe_func_attribute = [
        'cancelVideoFrameCallback', 'getVideoPlaybackQuality', 'requestPictureInPicture', 'requestVideoFrameCallback', 'webkitEnterFullScreen', 'webkitEnterFullscreen',
        'webkitExitFullScreen', 'webkitExitFullscreen'
    ];

    HTMLVideoElement.prototype = {
        cancelVideoFrameCallback() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'cancelVideoFrameCallback', arguments, result);
            return result;
        },
        get disablePictureInPicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).disablePictureInPicture, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'disablePictureInPicture', arguments, result);
            return result;
        },
        set disablePictureInPicture(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLVideoElement', 'disablePictureInPicture', arguments);
            myVm.memory.private_data.get(this).disablePictureInPicture = value + "";
        },
        getVideoPlaybackQuality() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'getVideoPlaybackQuality', arguments, result);
            return result;
        },
        get height() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).height, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'height', arguments, result);
            return result;
        },
        set height(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLVideoElement', 'height', arguments);
            myVm.memory.private_data.get(this).height = value + "";
        },
        get onenterpictureinpicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onenterpictureinpicture, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'onenterpictureinpicture', arguments, result);
            return result;
        },
        set onenterpictureinpicture(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLVideoElement', 'onenterpictureinpicture', arguments);
            myVm.memory.private_data.get(this).onenterpictureinpicture = value + "";
        },
        get onleavepictureinpicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onleavepictureinpicture, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'onleavepictureinpicture', arguments, result);
            return result;
        },
        set onleavepictureinpicture(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLVideoElement', 'onleavepictureinpicture', arguments);
            myVm.memory.private_data.get(this).onleavepictureinpicture = value + "";
        },
        get playsInline() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).playsInline, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'playsInline', arguments, result);
            return result;
        },
        set playsInline(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLVideoElement', 'playsInline', arguments);
            myVm.memory.private_data.get(this).playsInline = value + "";
        },
        get poster() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).poster, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'poster', arguments, result);
            return result;
        },
        set poster(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'HTMLVideoElement', 'poster', arguments);
            myVm.memory.private_data.get(this).poster = value + "";
        },
        requestPictureInPicture() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'requestPictureInPicture', arguments, result);
            return result;
        },
        requestVideoFrameCallback() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'requestVideoFrameCallback', arguments, result);
            return result;
        },
        get videoHeight() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).videoHeight, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'videoHeight', arguments, result);
            return result;
        },
        get videoWidth() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).videoWidth, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'videoWidth', arguments, result);
            return result;
        },
        get webkitDecodedFrameCount() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).webkitDecodedFrameCount, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'webkitDecodedFrameCount', arguments, result);
            return result;
        },
        get webkitDisplayingFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).webkitDisplayingFullscreen, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'webkitDisplayingFullscreen', arguments, result);
            return result;
        },
        get webkitDroppedFrameCount() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).webkitDroppedFrameCount, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'webkitDroppedFrameCount', arguments, result);
            return result;
        },
        webkitEnterFullScreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'webkitEnterFullScreen', arguments, result);
            return result;
        },
        webkitEnterFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'webkitEnterFullscreen', arguments, result);
            return result;
        },
        webkitExitFullScreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'webkitExitFullScreen', arguments, result);
            return result;
        },
        webkitExitFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'HTMLVideoElement', 'webkitExitFullscreen', arguments, result);
            return result;
        },
        get webkitSupportsFullscreen() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).webkitSupportsFullscreen, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'webkitSupportsFullscreen', arguments, result);
            return result;
        },
        get width() {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).width, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'HTMLVideoElement', 'width', arguments, result);
            return result;
        },
        set width(value) {
            if (!HTMLVideoElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            myVm.memory.private_data.get(this).width = value + "";
        }
    };

    myVm.rename(HTMLVideoElement.prototype, "HTMLVideoElement");
    myVm.safeDescriptor_addConstructor(HTMLVideoElement);
    myVm.safe_Objattribute(HTMLVideoElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype);
    Object.setPrototypeOf(HTMLVideoElement, HTMLMediaElement);

})();

myVm.memory.htmlElements["video"] = function () {
    return new HTMLVideoElement(myVm.memory.$createObj_key);
}

