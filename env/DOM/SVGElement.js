SVGElement = function SVGElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(SVGElement);

; (function () {
    const $safe_get_attribute = [
        'autofocus', 'className', 'dataset', 'nonce', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick',
        'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror',
        'onfocus', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove',
        'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover',
        'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled',
        'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration',
        'onwebkitanimationstart', 'onwebkittransitionend', 'onwheel', 'ownerSVGElement', 'style', 'tabIndex', 'viewportElement'
    ];
    const $safe_set_attribute = [
        'autofocus', 'nonce', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu',
        'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata',
        'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover',
        'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup',
        'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate',
        'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkittransitionend',
        'onwheel', 'style', 'tabIndex'
    ];
    const $safe_func_attribute = ['blur', 'focus'];

    SVGElement.prototype = {
        get autofocus() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).autofocus, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'autofocus', arguments, result);
            return result;
        },
        set autofocus(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'autofocus', arguments);
            myVm.memory.private_data.get(this).autofocus = value + "";
        },
        blur() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SVGElement', 'blur', arguments, result);
            return result;
        },
        get className() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).className, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'className', arguments, result);
            return result;
        },
        get dataset() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).dataset, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'dataset', arguments, result);
            return result;
        },
        focus() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SVGElement', 'focus', arguments, result);
            return result;
        },
        get nonce() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).nonce, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'nonce', arguments, result);
            return result;
        },
        set nonce(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'nonce', arguments);
            myVm.memory.private_data.get(this).nonce = value + "";
        },
        get onabort() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onabort, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onabort', arguments);
            myVm.memory.private_data.get(this).onabort = value + "";
        },
        get onanimationend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onanimationend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onanimationend', arguments, result);
            return result;
        },
        set onanimationend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onanimationend', arguments);
            myVm.memory.private_data.get(this).onanimationend = value + "";
        },
        get onanimationiteration() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onanimationiteration, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onanimationiteration', arguments, result);
            return result;
        },
        set onanimationiteration(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onanimationiteration', arguments);
            myVm.memory.private_data.get(this).onanimationiteration = value + "";
        },
        get onanimationstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onanimationstart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onanimationstart', arguments, result);
            return result;
        },
        set onanimationstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onanimationstart', arguments);
            myVm.memory.private_data.get(this).onanimationstart = value + "";
        },
        get onauxclick() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onauxclick, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onauxclick', arguments, result);
            return result;
        },
        set onauxclick(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onauxclick', arguments);
            myVm.memory.private_data.get(this).onauxclick = value + "";
        },
        get onbeforexrselect() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onbeforexrselect, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onbeforexrselect', arguments, result);
            return result;
        },
        set onbeforexrselect(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onbeforexrselect', arguments);
            myVm.memory.private_data.get(this).onbeforexrselect = value + "";
        },
        get onblur() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onblur, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onblur', arguments, result);
            return result;
        },
        set onblur(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onblur', arguments);
            myVm.memory.private_data.get(this).onblur = value + "";
        },
        get oncancel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oncancel, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oncancel', arguments, result);
            return result;
        },
        set oncancel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oncancel', arguments);
            myVm.memory.private_data.get(this).oncancel = value + "";
        },
        get oncanplay() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oncanplay, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oncanplay', arguments, result);
            return result;
        },
        set oncanplay(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oncanplay', arguments);
            myVm.memory.private_data.get(this).oncanplay = value + "";
        },
        get oncanplaythrough() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oncanplaythrough, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oncanplaythrough', arguments, result);
            return result;
        },
        set oncanplaythrough(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oncanplaythrough', arguments);
            myVm.memory.private_data.get(this).oncanplaythrough = value + "";
        },
        get onchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onchange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onchange', arguments);
            myVm.memory.private_data.get(this).onchange = value + "";
        },
        get onclick() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onclick, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onclick', arguments, result);
            return result;
        },
        set onclick(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onclick', arguments);
            myVm.memory.private_data.get(this).onclick = value + "";
        },
        get onclose() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onclose, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onclose', arguments, result);
            return result;
        },
        set onclose(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onclose', arguments);
            myVm.memory.private_data.get(this).onclose = value + "";
        },
        get oncontextmenu() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oncontextmenu, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oncontextmenu', arguments, result);
            return result;
        },
        set oncontextmenu(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oncontextmenu', arguments);
            myVm.memory.private_data.get(this).oncontextmenu = value + "";
        },
        get oncopy() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oncopy, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oncopy', arguments, result);
            return result;
        },
        set oncopy(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oncopy', arguments);
            myVm.memory.private_data.get(this).oncopy = value + "";
        },
        get oncuechange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oncuechange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oncuechange', arguments, result);
            return result;
        },
        set oncuechange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oncuechange', arguments);
            myVm.memory.private_data.get(this).oncuechange = value + "";
        },
        get oncut() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oncut, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oncut', arguments, result);
            return result;
        },
        set oncut(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oncut', arguments);
            myVm.memory.private_data.get(this).oncut = value + "";
        },
        get ondblclick() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondblclick, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondblclick', arguments, result);
            return result;
        },
        set ondblclick(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondblclick', arguments);
            myVm.memory.private_data.get(this).ondblclick = value + "";
        },
        get ondrag() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondrag, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondrag', arguments, result);
            return result;
        },
        set ondrag(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondrag', arguments);
            myVm.memory.private_data.get(this).ondrag = value + "";
        },
        get ondragend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondragend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondragend', arguments, result);
            return result;
        },
        set ondragend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondragend', arguments);
            myVm.memory.private_data.get(this).ondragend = value + "";
        },
        get ondragenter() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondragenter, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondragenter', arguments, result);
            return result;
        },
        set ondragenter(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondragenter', arguments);
            myVm.memory.private_data.get(this).ondragenter = value + "";
        },
        get ondragleave() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondragleave, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondragleave', arguments, result);
            return result;
        },
        set ondragleave(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondragleave', arguments);
            myVm.memory.private_data.get(this).ondragleave = value + "";
        },
        get ondragover() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondragover, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondragover', arguments, result);
            return result;
        },
        set ondragover(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondragover', arguments);
            myVm.memory.private_data.get(this).ondragover = value + "";
        },
        get ondragstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondragstart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondragstart', arguments, result);
            return result;
        },
        set ondragstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondragstart', arguments);
            myVm.memory.private_data.get(this).ondragstart = value + "";
        },
        get ondrop() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondrop, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondrop', arguments, result);
            return result;
        },
        set ondrop(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondrop', arguments);
            myVm.memory.private_data.get(this).ondrop = value + "";
        },
        get ondurationchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ondurationchange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ondurationchange', arguments, result);
            return result;
        },
        set ondurationchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ondurationchange', arguments);
            myVm.memory.private_data.get(this).ondurationchange = value + "";
        },
        get onemptied() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onemptied, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onemptied', arguments, result);
            return result;
        },
        set onemptied(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onemptied', arguments);
            myVm.memory.private_data.get(this).onemptied = value + "";
        },
        get onended() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onended, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onended', arguments, result);
            return result;
        },
        set onended(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onended', arguments);
            myVm.memory.private_data.get(this).onended = value + "";
        },
        get onerror() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onerror, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onerror', arguments);
            myVm.memory.private_data.get(this).onerror = value + "";
        },
        get onfocus() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onfocus, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onfocus', arguments, result);
            return result;
        },
        set onfocus(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onfocus', arguments);
            myVm.memory.private_data.get(this).onfocus = value + "";
        },
        get onformdata() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onformdata, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onformdata', arguments, result);
            return result;
        },
        set onformdata(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onformdata', arguments);
            myVm.memory.private_data.get(this).onformdata = value + "";
        },
        get ongotpointercapture() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ongotpointercapture, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ongotpointercapture', arguments, result);
            return result;
        },
        set ongotpointercapture(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ongotpointercapture', arguments);
            myVm.memory.private_data.get(this).ongotpointercapture = value + "";
        },
        get oninput() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oninput, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oninput', arguments, result);
            return result;
        },
        set oninput(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oninput', arguments);
            myVm.memory.private_data.get(this).oninput = value + "";
        },
        get oninvalid() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).oninvalid, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'oninvalid', arguments, result);
            return result;
        },
        set oninvalid(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'oninvalid', arguments);
            myVm.memory.private_data.get(this).oninvalid = value + "";
        },
        get onkeydown() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onkeydown, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onkeydown', arguments, result);
            return result;
        },
        set onkeydown(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onkeydown', arguments);
            myVm.memory.private_data.get(this).onkeydown = value + "";
        },
        get onkeypress() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onkeypress, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onkeypress', arguments, result);
            return result;
        },
        set onkeypress(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onkeypress', arguments);
            myVm.memory.private_data.get(this).onkeypress = value + "";
        },
        get onkeyup() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onkeyup, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onkeyup', arguments, result);
            return result;
        },
        set onkeyup(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onkeyup', arguments);
            myVm.memory.private_data.get(this).onkeyup = value + "";
        },
        get onload() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onload, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onload', arguments, result);
            return result;
        },
        set onload(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onload', arguments);
            myVm.memory.private_data.get(this).onload = value + "";
        },
        get onloadeddata() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onloadeddata, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onloadeddata', arguments, result);
            return result;
        },
        set onloadeddata(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onloadeddata', arguments);
            myVm.memory.private_data.get(this).onloadeddata = value + "";
        },
        get onloadedmetadata() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onloadedmetadata, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onloadedmetadata', arguments, result);
            return result;
        },
        set onloadedmetadata(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onloadedmetadata', arguments);
            myVm.memory.private_data.get(this).onloadedmetadata = value + "";
        },
        get onloadstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onloadstart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onloadstart', arguments, result);
            return result;
        },
        set onloadstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onloadstart', arguments);
            myVm.memory.private_data.get(this).onloadstart = value + "";
        },
        get onlostpointercapture() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onlostpointercapture, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onlostpointercapture', arguments, result);
            return result;
        },
        set onlostpointercapture(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onlostpointercapture', arguments);
            myVm.memory.private_data.get(this).onlostpointercapture = value + "";
        },
        get onmousedown() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmousedown, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onmousedown', arguments, result);
            return result;
        },
        set onmousedown(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onmousedown', arguments);
            myVm.memory.private_data.get(this).onmousedown = value + "";
        },
        get onmousemove() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmousemove, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onmousemove', arguments, result);
            return result;
        },
        set onmousemove(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onmousemove', arguments);
            myVm.memory.private_data.get(this).onmousemove = value + "";
        },
        get onmouseout() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmouseout, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onmouseout', arguments, result);
            return result;
        },
        set onmouseout(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onmouseout', arguments);
            myVm.memory.private_data.get(this).onmouseout = value + "";
        },
        get onmouseover() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmouseover, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onmouseover', arguments, result);
            return result;
        },
        set onmouseover(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onmouseover', arguments);
            myVm.memory.private_data.get(this).onmouseover = value + "";
        },
        get onmouseup() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmouseup, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onmouseup', arguments, result);
            return result;
        },
        set onmouseup(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onmouseup', arguments);
            myVm.memory.private_data.get(this).onmouseup = value + "";
        },
        get onmousewheel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onmousewheel, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onmousewheel', arguments, result);
            return result;
        },
        set onmousewheel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onmousewheel', arguments);
            myVm.memory.private_data.get(this).onmousewheel = value + "";
        },
        get onpaste() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpaste, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpaste', arguments, result);
            return result;
        },
        set onpaste(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpaste', arguments);
            myVm.memory.private_data.get(this).onpaste = value + "";
        },
        get onpause() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpause, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpause', arguments, result);
            return result;
        },
        set onpause(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpause', arguments);
            myVm.memory.private_data.get(this).onpause = value + "";
        },
        get onplay() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onplay, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onplay', arguments, result);
            return result;
        },
        set onplay(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onplay', arguments);
            myVm.memory.private_data.get(this).onplay = value + "";
        },
        get onplaying() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onplaying, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onplaying', arguments, result);
            return result;
        },
        set onplaying(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onplaying', arguments);
            myVm.memory.private_data.get(this).onplaying = value + "";
        },
        get onpointercancel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointercancel, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointercancel', arguments, result);
            return result;
        },
        set onpointercancel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointercancel', arguments);
            myVm.memory.private_data.get(this).onpointercancel = value + "";
        },
        get onpointerdown() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointerdown, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointerdown', arguments, result);
            return result;
        },
        set onpointerdown(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointerdown', arguments);
            myVm.memory.private_data.get(this).onpointerdown = value + "";
        },
        get onpointerenter() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointerenter, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointerenter', arguments, result);
            return result;
        },
        set onpointerenter(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointerenter', arguments);
            myVm.memory.private_data.get(this).onpointerenter = value + "";
        },
        get onpointerleave() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointerleave, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointerleave', arguments, result);
            return result;
        },
        set onpointerleave(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointerleave', arguments);
            myVm.memory.private_data.get(this).onpointerleave = value + "";
        },
        get onpointermove() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointermove, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointermove', arguments, result);
            return result;
        },
        set onpointermove(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointermove', arguments);
            myVm.memory.private_data.get(this).onpointermove = value + "";
        },
        get onpointerout() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointerout, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointerout', arguments, result);
            return result;
        },
        set onpointerout(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointerout', arguments);
            myVm.memory.private_data.get(this).onpointerout = value + "";
        },
        get onpointerover() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointerover, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointerover', arguments, result);
            return result;
        },
        set onpointerover(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointerover', arguments);
            myVm.memory.private_data.get(this).onpointerover = value + "";
        },
        get onpointerrawupdate() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointerrawupdate, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointerrawupdate', arguments, result);
            return result;
        },
        set onpointerrawupdate(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointerrawupdate', arguments);
            myVm.memory.private_data.get(this).onpointerrawupdate = value + "";
        },
        get onpointerup() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onpointerup, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onpointerup', arguments, result);
            return result;
        },
        set onpointerup(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onpointerup', arguments);
            myVm.memory.private_data.get(this).onpointerup = value + "";
        },
        get onprogress() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onprogress, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onprogress', arguments, result);
            return result;
        },
        set onprogress(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onprogress', arguments);
            myVm.memory.private_data.get(this).onprogress = value + "";
        },
        get onratechange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onratechange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onratechange', arguments, result);
            return result;
        },
        set onratechange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onratechange', arguments);
            myVm.memory.private_data.get(this).onratechange = value + "";
        },
        get onreset() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onreset, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onreset', arguments, result);
            return result;
        },
        set onreset(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onreset', arguments);
            myVm.memory.private_data.get(this).onreset = value + "";
        },
        get onresize() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onresize, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onresize', arguments, result);
            return result;
        },
        set onresize(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onresize', arguments);
            myVm.memory.private_data.get(this).onresize = value + "";
        },
        get onscroll() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onscroll, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onscroll', arguments, result);
            return result;
        },
        set onscroll(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onscroll', arguments);
            myVm.memory.private_data.get(this).onscroll = value + "";
        },
        get onsecuritypolicyviolation() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onsecuritypolicyviolation, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onsecuritypolicyviolation', arguments, result);
            return result;
        },
        set onsecuritypolicyviolation(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onsecuritypolicyviolation', arguments);
            myVm.memory.private_data.get(this).onsecuritypolicyviolation = value + "";
        },
        get onseeked() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onseeked, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onseeked', arguments, result);
            return result;
        },
        set onseeked(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onseeked', arguments);
            myVm.memory.private_data.get(this).onseeked = value + "";
        },
        get onseeking() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onseeking, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onseeking', arguments, result);
            return result;
        },
        set onseeking(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onseeking', arguments);
            myVm.memory.private_data.get(this).onseeking = value + "";
        },
        get onselect() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onselect, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onselect', arguments, result);
            return result;
        },
        set onselect(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onselect', arguments);
            myVm.memory.private_data.get(this).onselect = value + "";
        },
        get onselectionchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onselectionchange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onselectionchange', arguments, result);
            return result;
        },
        set onselectionchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onselectionchange', arguments);
            myVm.memory.private_data.get(this).onselectionchange = value + "";
        },
        get onselectstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onselectstart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onselectstart', arguments, result);
            return result;
        },
        set onselectstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onselectstart', arguments);
            myVm.memory.private_data.get(this).onselectstart = value + "";
        },
        get onslotchange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onslotchange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onslotchange', arguments, result);
            return result;
        },
        set onslotchange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onslotchange', arguments);
            myVm.memory.private_data.get(this).onslotchange = value + "";
        },
        get onstalled() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onstalled, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onstalled', arguments, result);
            return result;
        },
        set onstalled(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onstalled', arguments);
            myVm.memory.private_data.get(this).onstalled = value + "";
        },
        get onsubmit() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onsubmit, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onsubmit', arguments, result);
            return result;
        },
        set onsubmit(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onsubmit', arguments);
            myVm.memory.private_data.get(this).onsubmit = value + "";
        },
        get onsuspend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onsuspend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onsuspend', arguments, result);
            return result;
        },
        set onsuspend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onsuspend', arguments);
            myVm.memory.private_data.get(this).onsuspend = value + "";
        },
        get ontimeupdate() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ontimeupdate, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ontimeupdate', arguments, result);
            return result;
        },
        set ontimeupdate(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ontimeupdate', arguments);
            myVm.memory.private_data.get(this).ontimeupdate = value + "";
        },
        get ontoggle() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ontoggle, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ontoggle', arguments, result);
            return result;
        },
        set ontoggle(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ontoggle', arguments);
            myVm.memory.private_data.get(this).ontoggle = value + "";
        },
        get ontransitioncancel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ontransitioncancel, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ontransitioncancel', arguments, result);
            return result;
        },
        set ontransitioncancel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ontransitioncancel', arguments);
            myVm.memory.private_data.get(this).ontransitioncancel = value + "";
        },
        get ontransitionend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ontransitionend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ontransitionend', arguments, result);
            return result;
        },
        set ontransitionend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ontransitionend', arguments);
            myVm.memory.private_data.get(this).ontransitionend = value + "";
        },
        get ontransitionrun() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ontransitionrun, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ontransitionrun', arguments, result);
            return result;
        },
        set ontransitionrun(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ontransitionrun', arguments);
            myVm.memory.private_data.get(this).ontransitionrun = value + "";
        },
        get ontransitionstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ontransitionstart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ontransitionstart', arguments, result);
            return result;
        },
        set ontransitionstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'ontransitionstart', arguments);
            myVm.memory.private_data.get(this).ontransitionstart = value + "";
        },
        get onvolumechange() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onvolumechange, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onvolumechange', arguments, result);
            return result;
        },
        set onvolumechange(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onvolumechange', arguments);
            myVm.memory.private_data.get(this).onvolumechange = value + "";
        },
        get onwaiting() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onwaiting, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onwaiting', arguments, result);
            return result;
        },
        set onwaiting(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onwaiting', arguments);
            myVm.memory.private_data.get(this).onwaiting = value + "";
        },
        get onwebkitanimationend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onwebkitanimationend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onwebkitanimationend', arguments, result);
            return result;
        },
        set onwebkitanimationend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onwebkitanimationend', arguments);
            myVm.memory.private_data.get(this).onwebkitanimationend = value + "";
        },
        get onwebkitanimationiteration() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onwebkitanimationiteration, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onwebkitanimationiteration', arguments, result);
            return result;
        },
        set onwebkitanimationiteration(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onwebkitanimationiteration', arguments);
            myVm.memory.private_data.get(this).onwebkitanimationiteration = value + "";
        },
        get onwebkitanimationstart() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onwebkitanimationstart, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onwebkitanimationstart', arguments, result);
            return result;
        },
        set onwebkitanimationstart(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onwebkitanimationstart', arguments);
            myVm.memory.private_data.get(this).onwebkitanimationstart = value + "";
        },
        get onwebkittransitionend() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onwebkittransitionend, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onwebkittransitionend', arguments, result);
            return result;
        },
        set onwebkittransitionend(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onwebkittransitionend', arguments);
            myVm.memory.private_data.get(this).onwebkittransitionend = value + "";
        },
        get onwheel() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).onwheel, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'onwheel', arguments, result);
            return result;
        },
        set onwheel(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'onwheel', arguments);
            myVm.memory.private_data.get(this).onwheel = value + "";
        },
        get ownerSVGElement() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).ownerSVGElement, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'ownerSVGElement', arguments, result);
            return result;
        },
        get style() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).style, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'style', arguments, result);
            return result;
        },
        set style(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'style', arguments);
            myVm.memory.private_data.get(this).style = value + "";
        },
        get tabIndex() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).tabIndex, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGElement', 'tabIndex', arguments, result);
            return result;
        },
        set tabIndex(value) {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'SVGElement', 'tabIndex', arguments);
            myVm.memory.private_data.get(this).tabIndex = value + "";
        },
        get viewportElement() {
            if (!SVGElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return myVm.abs(myVm.memory.private_data.get(this).viewportElement, "");
        }
    }

    myVm.rename(SVGElement.prototype, "SVGElement");
    myVm.safeDescriptor_addConstructor(SVGElement);
    myVm.safe_Objattribute(SVGElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SVGElement.prototype, Element.prototype);
    Object.setPrototypeOf(SVGElement, Element);

})();

