SpeechSynthesisUtterance = function SpeechSynthesisUtterance(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(SpeechSynthesisUtterance);

; (function () {
    const $safe_get_attribute = ['lang', 'onboundary', 'onend', 'onerror', 'onmark', 'onpause', 'onresume', 'onstart', 'pitch', 'rate', 'text', 'voice', 'volume'];
    const $safe_set_attribute = ['lang', 'onboundary', 'onend', 'onerror', 'onmark', 'onpause', 'onresume', 'onstart', 'pitch', 'rate', 'text', 'voice', 'volume'];
    const $safe_func_attribute = [];

    SpeechSynthesisUtterance.prototype = {
        get lang() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).lang, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'lang', arguments, result);
            return result;
        },
        set lang(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'lang', arguments);
            myVm.memory.private_data.get(this).lang = value + "";
        },
        get onboundary() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onboundary, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'onboundary', arguments, result);
            return result;
        },
        set onboundary(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'onboundary', arguments);
            myVm.memory.private_data.get(this).onboundary = value + "";
        },
        get onend() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'onend', arguments, result);
            return result;
        },
        set onend(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'onend', arguments);
            myVm.memory.private_data.get(this).onend = value + "";
        },
        get onerror() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onerror, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'onerror', arguments);
            myVm.memory.private_data.get(this).onerror = value + "";
        },
        get onmark() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmark, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'onmark', arguments, result);
            return result;
        },
        set onmark(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'onmark', arguments);
            myVm.memory.private_data.get(this).onmark = value + "";
        },
        get onpause() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpause, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'onpause', arguments, result);
            return result;
        },
        set onpause(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'onpause', arguments);
            myVm.memory.private_data.get(this).onpause = value + "";
        },
        get onresume() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onresume, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'onresume', arguments, result);
            return result;
        },
        set onresume(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'onresume', arguments);
            myVm.memory.private_data.get(this).onresume = value + "";
        },
        get onstart() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onstart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'onstart', arguments, result);
            return result;
        },
        set onstart(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'onstart', arguments);
            myVm.memory.private_data.get(this).onstart = value + "";
        },
        get pitch() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).pitch, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'pitch', arguments, result);
            return result;
        },
        set pitch(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'pitch', arguments);
            myVm.memory.private_data.get(this).pitch = value + "";
        },
        get rate() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).rate, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'rate', arguments, result);
            return result;
        },
        set rate(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'rate', arguments);
            myVm.memory.private_data.get(this).rate = value + "";
        },
        get text() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).text, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'text', arguments, result);
            return result;
        },
        set text(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'text', arguments);
            myVm.memory.private_data.get(this).text = value + "";
        },
        get voice() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).voice, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'voice', arguments, result);
            return result;
        },
        set voice(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'voice', arguments);
            myVm.memory.private_data.get(this).voice = value + "";
        },
        get volume() {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).volume, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SpeechSynthesisUtterance', 'volume', arguments, result);
            return result;
        },
        set volume(value) {
            if (!SpeechSynthesisUtterance.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SpeechSynthesisUtterance', 'volume', arguments);
            myVm.memory.private_data.get(this).volume = value + "";
        },
    }
    myVm.rename(SpeechSynthesisUtterance.prototype, "SpeechSynthesisUtterance");
    myVm.safeDescriptor_addConstructor(SpeechSynthesisUtterance);
    myVm.safe_Objattribute(SpeechSynthesisUtterance, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SpeechSynthesisUtterance.prototype, EventTarget.prototype);
    Object.setPrototypeOf(SpeechSynthesisUtterance, EventTarget);
})();