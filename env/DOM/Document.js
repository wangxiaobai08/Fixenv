Document = function Document(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Document);


; (function () {
    let $attribute_map = {
        // all: new HTMLAllCollection(myVm.memory.$createObj_key),
        body: {},
        referrer: "",
        cookie: "",
        hidden: true,
        webkitHidden: true,
        getElementById: function (id) {
            //用id匹配当前环境内存种已有的Element
            switch (id) {
                case "xMidasToken":
                    return (new class {
                        get value() {
                            return window.__xMidasToken
                        }
                    })
                case "xMidasVersion":
                    return (new class {
                        getAttribute(e) {
                            if (e == 'width') {
                                return '325';
                            }
                        }
                    })
                default:
                    const ele = myVm.memory.runElementList.filter(t => t.id == id)[0];
                    if (!ele) debugger;
                    return ele;
            }
        }
    };

    // 初始化用户配置
    myVm.updata_envs(myVm.default_envs['document'], $attribute_map)


    const $safe_get_attribute = [
        'URL', 'activeElement', 'adoptedStyleSheets', 'alinkColor', 'all', 'anchors', 'applets', 'bgColor', 'body', 'characterSet',
        'charset', 'childElementCount', 'children', 'compatMode', 'contentType', 'cookie', 'currentScript', 'defaultView', 'designMode', 'dir', 'doctype',
        'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'fgColor', 'firstElementChild', 'fonts', 'forms', 'fragmentDirective', 'fullscreen',
        'fullscreenElement', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'inputEncoding', 'lastElementChild', 'lastModified', 'linkColor',
        'links', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforecopy', 'onbeforecut', 'onbeforepaste',
        'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange',
        'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied',
        'onended', 'onerror', 'onfocus', 'onformdata', 'onfreeze', 'onfullscreenchange', 'onfullscreenerror', 'ongotpointercapture', 'oninput', 'oninvalid',
        'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove',
        'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown',
        'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate',
        'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onresume', 'onscroll', 'onsearch', 'onsecuritypolicyviolation', 'onseeked',
        'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle',
        'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onvisibilitychange', 'onvolumechange', 'onwaiting', 'onwebkitanimationend',
        'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwebkittransitionend', 'onwheel',
        'pictureInPictureElement', 'pictureInPictureEnabled', 'plugins', 'pointerLockElement', 'readyState', 'referrer', 'rootElement', 'scripts',
        'scrollingElement', 'styleSheets', 'timeline', 'title', 'visibilityState', 'vlinkColor', 'wasDiscarded', 'webkitCurrentFullScreenElement',
        'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitHidden', 'webkitIsFullScreen', 'webkitVisibilityState', 'xmlEncoding', 'xmlStandalone',
        'xmlVersion'
    ];
    const $safe_set_attribute = [
        'adoptedStyleSheets', 'alinkColor', 'bgColor', 'body', 'cookie', 'designMode', 'dir', 'domain', 'fgColor', 'fullscreen', 'fullscreenElement',
        'fullscreenEnabled', 'linkColor', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforecopy',
        'onbeforecut', 'onbeforepaste', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose',
        'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart',
        'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata', 'onfreeze', 'onfullscreenchange', 'onfullscreenerror',
        'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart',
        'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay',
        'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onpointermove',
        'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onresume', 'onscroll',
        'onsearch', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled',
        'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart',
        'onvisibilitychange', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart',
        'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwebkittransitionend', 'onwheel', 'title', 'vlinkColor', 'xmlStandalone', 'xmlVersion'
    ];
    const $safe_func_attribute = [
        'adoptNode', 'append', 'captureEvents', 'caretRangeFromPoint', 'clear', 'close', 'createAttribute', 'createAttributeNS', 'createCDATASection',
        'createComment', 'createDocumentFragment', 'createElement', 'createElementNS', 'createEvent', 'createExpression', 'createNSResolver',
        'createNodeIterator', 'createProcessingInstruction', 'createRange', 'createTextNode', 'createTreeWalker', 'elementFromPoint', 'elementsFromPoint',
        'evaluate', 'execCommand', 'exitFullscreen', 'exitPictureInPicture', 'exitPointerLock', 'getAnimations', 'getElementById', 'getElementsByClassName',
        'getElementsByName', 'getElementsByTagName', 'getElementsByTagNameNS', 'getSelection', 'hasFocus', 'importNode', 'open', 'prepend', 'queryCommandEnabled',
        'queryCommandIndeterm', 'queryCommandState', 'queryCommandSupported', 'queryCommandValue', 'querySelector', 'querySelectorAll', 'releaseEvents',
        'replaceChildren', 'webkitCancelFullScreen', 'webkitExitFullscreen', 'write', 'writeln'
    ];


    // if (this instanceof Document != true) { throw new TypeError("Illegal constructor"); };
    Document.prototype = {
        get URL() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = location.href;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'URL', arguments, result);
            return result;
        },
        get activeElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.activeElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'activeElement', arguments, result);
            return result;
        },
        adoptNode() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.adoptNode;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'adoptNode', arguments, result);
            return result;
        },
        get adoptedStyleSheets() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.adoptedStyleSheets;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'adoptedStyleSheets', arguments, result);
            return result;
        },
        set adoptedStyleSheets(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'adoptedStyleSheets', arguments);
            $attribute_map.adoptedStyleSheets = value;
        },
        get alinkColor() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.alinkColor;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'alinkColor', arguments, result);
            return result;
        },
        set alinkColor(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'alinkColor', arguments);
            $attribute_map.alinkColor = value;
        },
        get all() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.all;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'all', arguments, result);
            return result;
        },
        get anchors() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.anchors;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'anchors', arguments, result);
            return result;
        },
        append() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.append;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'append', arguments, result);
            return result;
        },
        get applets() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.applets;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'applets', arguments, result);
            return result;
        },
        get bgColor() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.bgColor;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'bgColor', arguments, result);
            return result;
        },
        set bgColor(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'bgColor', arguments);
            $attribute_map.bgColor = value;
        },
        get body() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.body;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'body', arguments, result);
            return result;
        },
        set body(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'body', arguments);
            $attribute_map.body = value;
        },
        captureEvents() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.captureEvents;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'captureEvents', arguments, result);
            return result;
        },
        caretRangeFromPoint() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.caretRangeFromPoint;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'caretRangeFromPoint', arguments, result);
            return result;
        },
        get characterSet() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 'UTF-8';
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'characterSet', arguments, result);
            return result;
        },
        get charset() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 'UTF-8';
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'charset', arguments, result);
            return result;
        },
        get childElementCount() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.childElementCount;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'childElementCount', arguments, result);
            return result;
        },
        get children() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.children;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'children', arguments, result);
            return result;
        },
        clear() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.clear;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'clear', arguments, result);
            return result;
        },
        close() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.close;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'close', arguments, result);
            return result;
        },
        get compatMode() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 'CSS1Compat';
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'compatMode', arguments, result);
            return result;
        },
        get contentType() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.contentType;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'contentType', arguments, result);
            return result;
        },
        get cookie() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.cookie;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'cookie', arguments, result);
            return result;
        },
        set cookie(value) {
            if (value === null) {
                return ;
            }
            if (typeof value === "symbol") {
                throw new TypeError("Cannot convert a Symbol value to a string")
            }
        
            const S = String(value);
            const n = S.length;
            const U = [];
            for (let i = 0; i < n; ++i) {
                const c = S.charCodeAt(i);
                if (c < 0xD800 || c > 0xDFFF) {
                    U.push(String.fromCodePoint(c));
                } else if (0xDC00 <= c && c <= 0xDFFF) {
                    U.push(String.fromCodePoint(0xFFFD));
                } else if (i === n - 1) {
                    U.push(String.fromCodePoint(0xFFFD));
                } else {
                    const d = S.charCodeAt(i + 1);
                    if (0xDC00 <= d && d <= 0xDFFF) {
                        const a = c & 0x3FF;
                        const b = d & 0x3FF;
                        U.push(String.fromCodePoint((2 << 15) + ((2 << 9) * a) + b));
                        ++i;
                    } else {
                        U.push(String.fromCodePoint(0xFFFD));
                    }
                }
            }
            $attribute_map.cookie = U.join("");
        },
        createAttribute() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createAttribute;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createAttribute', arguments, result);
            return result;
        },
        createAttributeNS() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createAttributeNS;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createAttributeNS', arguments, result);
            return result;
        },
        createCDATASection() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createCDATASection;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createCDATASection', arguments, result);
            return result;
        },
        createComment() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createComment;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createComment', arguments, result);
            return result;
        },
        createDocumentFragment() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createDocumentFragment;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createDocumentFragment', arguments, result);
            return result;
        },
        createElement(tagName, options) {
            let tagname = tagName.toLowerCase() + "";
            //console.log(tagname, '---')
            let ele;
            if (myVm.memory.htmlElements[tagname] === undefined) {
                // 注意这地方不完善
                ele = new class createElement { }
            } else {
                ele = myVm.memory.htmlElements[tagname]();
            };
            myVm.memory.runElementList.push(ele);

            let result = ele;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createElement', arguments, result);
            return result;
        },
        createElementNS() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createElementNS;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createElementNS', arguments, result);
            return result;
        },
        createEvent(type) {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele;
            switch(type.toLowerCase()){
                case 'event':
                    ele = new Event(myVm.memory.$createObj_key);
                    break;
                case 'events':
                    ele = new Event(myVm.memory.$createObj_key);
                    break;
                case 'uievent':
                    ele = new UIEvent(myVm.memory.$createObj_key);
                    break;
                case 'uievents':
                    ele = new UIEvent(myVm.memory.$createObj_key);
                    break;
                case 'mouseevent':
                    ele = new MouseEvent(myVm.memory.$createObj_key);
                    break;
                case 'mouseevents':
                    ele = new MouseEvent(myVm.memory.$createObj_key);
                    break;
                case 'mutationevent':
                    ele = new MutationEvent(myVm.memory.$createObj_key);
                    break;
                case 'mutationevents':
                    ele = new MutationEvent(myVm.memory.$createObj_key);
                    break;
                case 'textevent':
                    ele = new TextEvent(myVm.memory.$createObj_key);
                    break;
                case 'textevents':
                    ele = new TextEvent(myVm.memory.$createObj_key);
                    break;
                case 'keyboardevent':
                    ele = new KeyboardEvent(myVm.memory.$createObj_key);
                    break;
                
                case 'customevent':
                    ele = new CustomEvent(myVm.memory.$createObj_key);
                    break;
                    
                default:
                    throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${type}') is invalid.`)
            }
            ele.isTrusted =  false;
            return ele;

        },
        createExpression() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createExpression;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createExpression', arguments, result);
            return result;
        },
        createNSResolver() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createNSResolver;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createNSResolver', arguments, result);
            return result;
        },
        createNodeIterator() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createNodeIterator;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createNodeIterator', arguments, result);
            return result;
        },
        createProcessingInstruction() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createProcessingInstruction;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createProcessingInstruction', arguments, result);
            return result;
        },
        createRange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createRange;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createRange', arguments, result);
            return result;
        },
        createTextNode() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createTextNode;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createTextNode', arguments, result);
            return result;
        },
        createTreeWalker() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.createTreeWalker;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'createTreeWalker', arguments, result);
            return result;
        },
        get currentScript() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'currentScript', arguments, result);
            return result;
        },
        get defaultView() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.defaultView;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'defaultView', arguments, result);
            return result;
        },
        get designMode() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.designMode;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'designMode', arguments, result);
            return result;
        },
        set designMode(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'designMode', arguments);
            $attribute_map.designMode = value;
        },
        get dir() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.dir;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'dir', arguments, result);
            return result;
        },
        set dir(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'dir', arguments);
            $attribute_map.dir = value;
        },
        get doctype() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.doctype;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'doctype', arguments, result);
            return result;
        },
        get documentElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this);

            if (!ele) {
                ele = new HTMLHtmlElement(myVm.memory.$createObj_key);
                myVm.memory.private_data.set(this, {
                    documentElement: ele
                })
                myVm.memory.private_data.get(this).documentElement = ele;
            }else{
                ele = ele.documentElement;
            }
            return ele;

        },
        get documentURI() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.documentURI;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'documentURI', arguments, result);
            return result;
        },
        get domain() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.domain;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'domain', arguments, result);
            return result;
        },
        set domain(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'domain', arguments);
            $attribute_map.domain = value;
        },
        elementFromPoint() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.elementFromPoint;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'elementFromPoint', arguments, result);
            return result;
        },
        elementsFromPoint() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.elementsFromPoint;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'elementsFromPoint', arguments, result);
            return result;
        },
        get embeds() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.embeds;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'embeds', arguments, result);
            return result;
        },
        evaluate() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.evaluate;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'evaluate', arguments, result);
            return result;
        },
        execCommand() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.execCommand;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'execCommand', arguments, result);
            return result;
        },
        exitFullscreen() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.exitFullscreen;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'exitFullscreen', arguments, result);
            return result;
        },
        exitPictureInPicture() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.exitPictureInPicture;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'exitPictureInPicture', arguments, result);
            return result;
        },
        exitPointerLock() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.exitPointerLock;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'exitPointerLock', arguments, result);
            return result;
        },
        get featurePolicy() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.featurePolicy;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'featurePolicy', arguments, result);
            return result;
        },
        get fgColor() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.fgColor;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'fgColor', arguments, result);
            return result;
        },
        set fgColor(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'fgColor', arguments);
            $attribute_map.fgColor = value;
        },
        get firstElementChild() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.firstElementChild;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'firstElementChild', arguments, result);
            return result;
        },
        get fonts() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.fonts;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'fonts', arguments, result);
            return result;
        },
        get forms() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.forms;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'forms', arguments, result);
            return result;
        },
        get fragmentDirective() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.fragmentDirective;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'fragmentDirective', arguments, result);
            return result;
        },
        get fullscreen() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.fullscreen;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'fullscreen', arguments, result);
            return result;
        },
        set fullscreen(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'fullscreen', arguments);
            $attribute_map.fullscreen = value;
        },
        get fullscreenElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.fullscreenElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'fullscreenElement', arguments, result);
            return result;
        },
        set fullscreenElement(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'fullscreenElement', arguments);
            $attribute_map.fullscreenElement = value;
        },
        get fullscreenEnabled() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.fullscreenEnabled;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'fullscreenEnabled', arguments, result);
            return result;
        },
        set fullscreenEnabled(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'fullscreenEnabled', arguments);
            $attribute_map.fullscreenEnabled = value;
        },
        getAnimations() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.getAnimations;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'getAnimations', arguments, result);
            return result;
        },
        getElementById(id) {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.getElementById(id);
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'getElementById', arguments, result);
            return result;
        },
        getElementsByClassName() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.getElementsByClassName;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'getElementsByClassName', arguments, result);
            return result;
        },
        getElementsByName() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.getElementsByName;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'getElementsByName', arguments, result);
            return result;
        },
        getElementsByTagName(tagName) {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (tagName === "*") {
                return myVm.memory.htmlCollection;
            };
            
            tagName = tagName.toLowerCase();
            
            let collection = new HTMLCollection(myVm.memory.$createObj_key);
            let collection_index = 0;

            for (let i = 0; i < myVm.memory.htmlCollection.length; i++) {
                let node_onj = myVm.memory.htmlCollection[i];
                console.log(node_onj.localName, node_onj.localName, tagName)
                if (node_onj.localName && node_onj.localName === tagName) {
                    collection[collection_index] = node_onj;
                    collection_index++;
                }
            }
            let result = collection;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'getElementsByTagName', arguments, result);
            return result;
        },
        getElementsByTagNameNS() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.getElementsByTagNameNS;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'getElementsByTagNameNS', arguments, result);
            return result;
        },
        getSelection() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.getSelection;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'getSelection', arguments, result);
            return result;
        },
        hasFocus() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.hasFocus;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'hasFocus', arguments, result);
            return result;
        },
        get head() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = myVm.memory.private_data.get(this).head;
            if (!ele) {
                ele = new HTMLHeadElement(myVm.memory.$createObj_key);
                myVm.memory.private_data.get(this).head = ele;
            }
            let result = ele;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'if ', arguments, result);
            return result;
        },
        get hidden() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'hidden', arguments, result);
            return result;
        },
        get images() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.images;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'images', arguments, result);
            return result;
        },
        get implementation() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.implementation;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'implementation', arguments, result);
            return result;
        },
        importNode() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.importNode;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'importNode', arguments, result);
            return result;
        },
        get inputEncoding() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.inputEncoding;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'inputEncoding', arguments, result);
            return result;
        },
        get lastElementChild() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.lastElementChild;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'lastElementChild', arguments, result);
            return result;
        },
        get lastModified() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.lastModified;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'lastModified', arguments, result);
            return result;
        },
        get linkColor() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.linkColor;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'linkColor', arguments, result);
            return result;
        },
        set linkColor(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'linkColor', arguments);
            $attribute_map.linkColor = value;
        },
        get links() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.links;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'links', arguments, result);
            return result;
        },
        get onabort() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onabort;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onabort', arguments);
            $attribute_map.onabort = value;
        },
        get onanimationend() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onanimationend;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onanimationend', arguments, result);
            return result;
        },
        set onanimationend(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onanimationend', arguments);
            $attribute_map.onanimationend = value;
        },
        get onanimationiteration() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onanimationiteration;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onanimationiteration', arguments, result);
            return result;
        },
        set onanimationiteration(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onanimationiteration', arguments);
            $attribute_map.onanimationiteration = value;
        },
        get onanimationstart() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onanimationstart;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onanimationstart', arguments, result);
            return result;
        },
        set onanimationstart(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onanimationstart', arguments);
            $attribute_map.onanimationstart = value;
        },
        get onauxclick() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onauxclick;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onauxclick', arguments, result);
            return result;
        },
        set onauxclick(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onauxclick', arguments);
            $attribute_map.onauxclick = value;
        },
        get onbeforecopy() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onbeforecopy;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onbeforecopy', arguments, result);
            return result;
        },
        set onbeforecopy(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onbeforecopy', arguments);
            $attribute_map.onbeforecopy = value;
        },
        get onbeforecut() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onbeforecut;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onbeforecut', arguments, result);
            return result;
        },
        set onbeforecut(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onbeforecut', arguments);
            $attribute_map.onbeforecut = value;
        },
        get onbeforepaste() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onbeforepaste;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onbeforepaste', arguments, result);
            return result;
        },
        set onbeforepaste(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onbeforepaste', arguments);
            $attribute_map.onbeforepaste = value;
        },
        get onbeforexrselect() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onbeforexrselect;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onbeforexrselect', arguments, result);
            return result;
        },
        set onbeforexrselect(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onbeforexrselect', arguments);
            $attribute_map.onbeforexrselect = value;
        },
        get onblur() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onblur;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onblur', arguments, result);
            return result;
        },
        set onblur(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onblur', arguments);
            $attribute_map.onblur = value;
        },
        get oncancel() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oncancel;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oncancel', arguments, result);
            return result;
        },
        set oncancel(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oncancel', arguments);
            $attribute_map.oncancel = value;
        },
        get oncanplay() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oncanplay;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oncanplay', arguments, result);
            return result;
        },
        set oncanplay(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oncanplay', arguments);
            $attribute_map.oncanplay = value;
        },
        get oncanplaythrough() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oncanplaythrough;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oncanplaythrough', arguments, result);
            return result;
        },
        set oncanplaythrough(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oncanplaythrough', arguments);
            $attribute_map.oncanplaythrough = value;
        },
        get onchange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onchange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onchange', arguments);
            $attribute_map.onchange = value;
        },
        get onclick() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onclick;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onclick', arguments, result);
            return result;
        },
        set onclick(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onclick', arguments);
            $attribute_map.onclick = value;
        },
        get onclose() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onclose;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onclose', arguments, result);
            return result;
        },
        set onclose(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onclose', arguments);
            $attribute_map.onclose = value;
        },
        get oncontextmenu() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oncontextmenu;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oncontextmenu', arguments, result);
            return result;
        },
        set oncontextmenu(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oncontextmenu', arguments);
            $attribute_map.oncontextmenu = value;
        },
        get oncopy() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oncopy;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oncopy', arguments, result);
            return result;
        },
        set oncopy(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oncopy', arguments);
            $attribute_map.oncopy = value;
        },
        get oncuechange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oncuechange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oncuechange', arguments, result);
            return result;
        },
        set oncuechange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oncuechange', arguments);
            $attribute_map.oncuechange = value;
        },
        get oncut() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oncut;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oncut', arguments, result);
            return result;
        },
        set oncut(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oncut', arguments);
            $attribute_map.oncut = value;
        },
        get ondblclick() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondblclick;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondblclick', arguments, result);
            return result;
        },
        set ondblclick(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondblclick', arguments);
            $attribute_map.ondblclick = value;
        },
        get ondrag() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondrag;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondrag', arguments, result);
            return result;
        },
        set ondrag(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondrag', arguments);
            $attribute_map.ondrag = value;
        },
        get ondragend() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondragend;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondragend', arguments, result);
            return result;
        },
        set ondragend(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondragend', arguments);
            $attribute_map.ondragend = value;
        },
        get ondragenter() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondragenter;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondragenter', arguments, result);
            return result;
        },
        set ondragenter(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondragenter', arguments);
            $attribute_map.ondragenter = value;
        },
        get ondragleave() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondragleave;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondragleave', arguments, result);
            return result;
        },
        set ondragleave(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondragleave', arguments);
            $attribute_map.ondragleave = value;
        },
        get ondragover() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondragover;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondragover', arguments, result);
            return result;
        },
        set ondragover(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondragover', arguments);
            $attribute_map.ondragover = value;
        },
        get ondragstart() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondragstart;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondragstart', arguments, result);
            return result;
        },
        set ondragstart(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondragstart', arguments);
            $attribute_map.ondragstart = value;
        },
        get ondrop() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondrop;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondrop', arguments, result);
            return result;
        },
        set ondrop(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondrop', arguments);
            $attribute_map.ondrop = value;
        },
        get ondurationchange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ondurationchange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ondurationchange', arguments, result);
            return result;
        },
        set ondurationchange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ondurationchange', arguments);
            $attribute_map.ondurationchange = value;
        },
        get onemptied() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onemptied;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onemptied', arguments, result);
            return result;
        },
        set onemptied(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onemptied', arguments);
            $attribute_map.onemptied = value;
        },
        get onended() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onended;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onended', arguments, result);
            return result;
        },
        set onended(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onended', arguments);
            $attribute_map.onended = value;
        },
        get onerror() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onerror;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onerror', arguments);
            $attribute_map.onerror = value;
        },
        get onfocus() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onfocus;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onfocus', arguments, result);
            return result;
        },
        set onfocus(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onfocus', arguments);
            $attribute_map.onfocus = value;
        },
        get onformdata() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onformdata;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onformdata', arguments, result);
            return result;
        },
        set onformdata(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onformdata', arguments);
            $attribute_map.onformdata = value;
        },
        get onfreeze() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onfreeze;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onfreeze', arguments, result);
            return result;
        },
        set onfreeze(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onfreeze', arguments);
            $attribute_map.onfreeze = value;
        },
        get onfullscreenchange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onfullscreenchange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onfullscreenchange', arguments, result);
            return result;
        },
        set onfullscreenchange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onfullscreenchange', arguments);
            $attribute_map.onfullscreenchange = value;
        },
        get onfullscreenerror() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onfullscreenerror;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onfullscreenerror', arguments, result);
            return result;
        },
        set onfullscreenerror(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onfullscreenerror', arguments);
            $attribute_map.onfullscreenerror = value;
        },
        get ongotpointercapture() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ongotpointercapture;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ongotpointercapture', arguments, result);
            return result;
        },
        set ongotpointercapture(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ongotpointercapture', arguments);
            $attribute_map.ongotpointercapture = value;
        },
        get oninput() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oninput;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oninput', arguments, result);
            return result;
        },
        set oninput(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oninput', arguments);
            $attribute_map.oninput = value;
        },
        get oninvalid() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.oninvalid;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'oninvalid', arguments, result);
            return result;
        },
        set oninvalid(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'oninvalid', arguments);
            $attribute_map.oninvalid = value;
        },
        get onkeydown() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onkeydown;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onkeydown', arguments, result);
            return result;
        },
        set onkeydown(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onkeydown', arguments);
            $attribute_map.onkeydown = value;
        },
        get onkeypress() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onkeypress;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onkeypress', arguments, result);
            return result;
        },
        set onkeypress(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onkeypress', arguments);
            $attribute_map.onkeypress = value;
        },
        get onkeyup() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onkeyup;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onkeyup', arguments, result);
            return result;
        },
        set onkeyup(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onkeyup', arguments);
            $attribute_map.onkeyup = value;
        },
        get onload() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onload;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onload', arguments, result);
            return result;
        },
        set onload(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onload', arguments);
            $attribute_map.onload = value;
        },
        get onloadeddata() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onloadeddata;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onloadeddata', arguments, result);
            return result;
        },
        set onloadeddata(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onloadeddata', arguments);
            $attribute_map.onloadeddata = value;
        },
        get onloadedmetadata() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onloadedmetadata;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onloadedmetadata', arguments, result);
            return result;
        },
        set onloadedmetadata(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onloadedmetadata', arguments);
            $attribute_map.onloadedmetadata = value;
        },
        get onloadstart() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onloadstart;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onloadstart', arguments, result);
            return result;
        },
        set onloadstart(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onloadstart', arguments);
            $attribute_map.onloadstart = value;
        },
        get onlostpointercapture() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onlostpointercapture;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onlostpointercapture', arguments, result);
            return result;
        },
        set onlostpointercapture(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onlostpointercapture', arguments);
            $attribute_map.onlostpointercapture = value;
        },
        get onmousedown() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onmousedown;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onmousedown', arguments, result);
            return result;
        },
        set onmousedown(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onmousedown', arguments);
            $attribute_map.onmousedown = value;
        },
        onmouseenter: undefined,
        onmouseleave: undefined,
        get onmousemove() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onmousemove;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onmousemove', arguments, result);
            return result;
        },
        set onmousemove(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onmousemove', arguments);
            $attribute_map.onmousemove = value;
        },
        get onmouseout() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onmouseout;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onmouseout', arguments, result);
            return result;
        },
        set onmouseout(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onmouseout', arguments);
            $attribute_map.onmouseout = value;
        },
        get onmouseover() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onmouseover;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onmouseover', arguments, result);
            return result;
        },
        set onmouseover(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onmouseover', arguments);
            $attribute_map.onmouseover = value;
        },
        get onmouseup() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onmouseup;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onmouseup', arguments, result);
            return result;
        },
        set onmouseup(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onmouseup', arguments);
            $attribute_map.onmouseup = value;
        },
        get onmousewheel() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onmousewheel;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onmousewheel', arguments, result);
            return result;
        },
        set onmousewheel(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onmousewheel', arguments);
            $attribute_map.onmousewheel = value;
        },
        get onpaste() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpaste;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpaste', arguments, result);
            return result;
        },
        set onpaste(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpaste', arguments);
            $attribute_map.onpaste = value;
        },
        get onpause() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpause;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpause', arguments, result);
            return result;
        },
        set onpause(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpause', arguments);
            $attribute_map.onpause = value;
        },
        get onplay() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onplay;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onplay', arguments, result);
            return result;
        },
        set onplay(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onplay', arguments);
            $attribute_map.onplay = value;
        },
        get onplaying() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onplaying;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onplaying', arguments, result);
            return result;
        },
        set onplaying(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onplaying', arguments);
            $attribute_map.onplaying = value;
        },
        get onpointercancel() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointercancel;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointercancel', arguments, result);
            return result;
        },
        set onpointercancel(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointercancel', arguments);
            $attribute_map.onpointercancel = value;
        },
        get onpointerdown() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerdown;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerdown', arguments, result);
            return result;
        },
        set onpointerdown(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerdown', arguments);
            $attribute_map.onpointerdown = value;
        },
        get onpointerenter() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerenter;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerenter', arguments, result);
            return result;
        },
        set onpointerenter(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerenter', arguments);
            $attribute_map.onpointerenter = value;
        },
        get onpointerleave() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerleave;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerleave', arguments, result);
            return result;
        },
        set onpointerleave(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerleave', arguments);
            $attribute_map.onpointerleave = value;
        },
        get onpointerlockchange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerlockchange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerlockchange', arguments, result);
            return result;
        },
        set onpointerlockchange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerlockchange', arguments);
            $attribute_map.onpointerlockchange = value;
        },
        get onpointerlockerror() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerlockerror;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerlockerror', arguments, result);
            return result;
        },
        set onpointerlockerror(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerlockerror', arguments);
            $attribute_map.onpointerlockerror = value;
        },
        get onpointermove() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointermove;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointermove', arguments, result);
            return result;
        },
        set onpointermove(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointermove', arguments);
            $attribute_map.onpointermove = value;
        },
        get onpointerout() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerout;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerout', arguments, result);
            return result;
        },
        set onpointerout(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerout', arguments);
            $attribute_map.onpointerout = value;
        },
        get onpointerover() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerover;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerover', arguments, result);
            return result;
        },
        set onpointerover(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerover', arguments);
            $attribute_map.onpointerover = value;
        },
        get onpointerrawupdate() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerrawupdate;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerrawupdate', arguments, result);
            return result;
        },
        set onpointerrawupdate(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerrawupdate', arguments);
            $attribute_map.onpointerrawupdate = value;
        },
        get onpointerup() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onpointerup;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onpointerup', arguments, result);
            return result;
        },
        set onpointerup(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onpointerup', arguments);
            $attribute_map.onpointerup = value;
        },
        get onprogress() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onprogress;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onprogress', arguments, result);
            return result;
        },
        set onprogress(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onprogress', arguments);
            $attribute_map.onprogress = value;
        },
        get onratechange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onratechange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onratechange', arguments, result);
            return result;
        },
        set onratechange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onratechange', arguments);
            $attribute_map.onratechange = value;
        },
        onreadystatechange: undefined,
        get onreset() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onreset;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onreset', arguments, result);
            return result;
        },
        set onreset(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onreset', arguments);
            $attribute_map.onreset = value;
        },
        get onresize() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onresize;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onresize', arguments, result);
            return result;
        },
        set onresize(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onresize', arguments);
            $attribute_map.onresize = value;
        },
        get onresume() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onresume;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onresume', arguments, result);
            return result;
        },
        set onresume(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onresume', arguments);
            $attribute_map.onresume = value;
        },
        get onscroll() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onscroll;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onscroll', arguments, result);
            return result;
        },
        set onscroll(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onscroll', arguments);
            $attribute_map.onscroll = value;
        },
        get onsearch() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onsearch;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onsearch', arguments, result);
            return result;
        },
        set onsearch(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onsearch', arguments);
            $attribute_map.onsearch = value;
        },
        get onsecuritypolicyviolation() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onsecuritypolicyviolation;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onsecuritypolicyviolation', arguments, result);
            return result;
        },
        set onsecuritypolicyviolation(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onsecuritypolicyviolation', arguments);
            $attribute_map.onsecuritypolicyviolation = value;
        },
        get onseeked() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onseeked;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onseeked', arguments, result);
            return result;
        },
        set onseeked(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onseeked', arguments);
            $attribute_map.onseeked = value;
        },
        get onseeking() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onseeking;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onseeking', arguments, result);
            return result;
        },
        set onseeking(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onseeking', arguments);
            $attribute_map.onseeking = value;
        },
        get onselect() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onselect;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onselect', arguments, result);
            return result;
        },
        set onselect(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onselect', arguments);
            $attribute_map.onselect = value;
        },
        get onselectionchange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onselectionchange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onselectionchange', arguments, result);
            return result;
        },
        set onselectionchange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onselectionchange', arguments);
            $attribute_map.onselectionchange = value;
        },
        get onselectstart() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onselectstart;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onselectstart', arguments, result);
            return result;
        },
        set onselectstart(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onselectstart', arguments);
            $attribute_map.onselectstart = value;
        },
        get onslotchange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onslotchange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onslotchange', arguments, result);
            return result;
        },
        set onslotchange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onslotchange', arguments);
            $attribute_map.onslotchange = value;
        },
        get onstalled() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onstalled;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onstalled', arguments, result);
            return result;
        },
        set onstalled(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onstalled', arguments);
            $attribute_map.onstalled = value;
        },
        get onsubmit() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onsubmit;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onsubmit', arguments, result);
            return result;
        },
        set onsubmit(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onsubmit', arguments);
            $attribute_map.onsubmit = value;
        },
        get onsuspend() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onsuspend;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onsuspend', arguments, result);
            return result;
        },
        set onsuspend(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onsuspend', arguments);
            $attribute_map.onsuspend = value;
        },
        get ontimeupdate() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ontimeupdate;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ontimeupdate', arguments, result);
            return result;
        },
        set ontimeupdate(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ontimeupdate', arguments);
            $attribute_map.ontimeupdate = value;
        },
        get ontoggle() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ontoggle;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ontoggle', arguments, result);
            return result;
        },
        set ontoggle(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ontoggle', arguments);
            $attribute_map.ontoggle = value;
        },
        get ontransitioncancel() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ontransitioncancel;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ontransitioncancel', arguments, result);
            return result;
        },
        set ontransitioncancel(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ontransitioncancel', arguments);
            $attribute_map.ontransitioncancel = value;
        },
        get ontransitionend() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ontransitionend;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ontransitionend', arguments, result);
            return result;
        },
        set ontransitionend(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ontransitionend', arguments);
            $attribute_map.ontransitionend = value;
        },
        get ontransitionrun() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ontransitionrun;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ontransitionrun', arguments, result);
            return result;
        },
        set ontransitionrun(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ontransitionrun', arguments);
            $attribute_map.ontransitionrun = value;
        },
        get ontransitionstart() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.ontransitionstart;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'ontransitionstart', arguments, result);
            return result;
        },
        set ontransitionstart(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'ontransitionstart', arguments);
            $attribute_map.ontransitionstart = value;
        },
        get onvisibilitychange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onvisibilitychange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onvisibilitychange', arguments, result);
            return result;
        },
        set onvisibilitychange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onvisibilitychange', arguments);
            $attribute_map.onvisibilitychange = value;
        },
        get onvolumechange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onvolumechange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onvolumechange', arguments, result);
            return result;
        },
        set onvolumechange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onvolumechange', arguments);
            $attribute_map.onvolumechange = value;
        },
        get onwaiting() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwaiting;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwaiting', arguments, result);
            return result;
        },
        set onwaiting(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwaiting', arguments);
            $attribute_map.onwaiting = value;
        },
        get onwebkitanimationend() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwebkitanimationend;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwebkitanimationend', arguments, result);
            return result;
        },
        set onwebkitanimationend(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwebkitanimationend', arguments);
            $attribute_map.onwebkitanimationend = value;
        },
        get onwebkitanimationiteration() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwebkitanimationiteration;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwebkitanimationiteration', arguments, result);
            return result;
        },
        set onwebkitanimationiteration(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwebkitanimationiteration', arguments);
            $attribute_map.onwebkitanimationiteration = value;
        },
        get onwebkitanimationstart() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwebkitanimationstart;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwebkitanimationstart', arguments, result);
            return result;
        },
        set onwebkitanimationstart(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwebkitanimationstart', arguments);
            $attribute_map.onwebkitanimationstart = value;
        },
        get onwebkitfullscreenchange() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwebkitfullscreenchange;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwebkitfullscreenchange', arguments, result);
            return result;
        },
        set onwebkitfullscreenchange(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwebkitfullscreenchange', arguments);
            $attribute_map.onwebkitfullscreenchange = value;
        },
        get onwebkitfullscreenerror() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwebkitfullscreenerror;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwebkitfullscreenerror', arguments, result);
            return result;
        },
        set onwebkitfullscreenerror(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwebkitfullscreenerror', arguments);
            $attribute_map.onwebkitfullscreenerror = value;
        },
        get onwebkittransitionend() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwebkittransitionend;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwebkittransitionend', arguments, result);
            return result;
        },
        set onwebkittransitionend(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwebkittransitionend', arguments);
            $attribute_map.onwebkittransitionend = value;
        },
        get onwheel() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.onwheel;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'onwheel', arguments, result);
            return result;
        },
        set onwheel(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'onwheel', arguments);
            $attribute_map.onwheel = value;
        },
        open() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.open;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'open', arguments, result);
            return result;
        },
        get pictureInPictureElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.pictureInPictureElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'pictureInPictureElement', arguments, result);
            return result;
        },
        get pictureInPictureEnabled() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.pictureInPictureEnabled;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'pictureInPictureEnabled', arguments, result);
            return result;
        },
        get plugins() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.plugins;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'plugins', arguments, result);
            return result;
        },
        get pointerLockElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.pointerLockElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'pointerLockElement', arguments, result);
            return result;
        },
        prepend() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.prepend;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'prepend', arguments, result);
            return result;
        },
        queryCommandEnabled() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.queryCommandEnabled;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'queryCommandEnabled', arguments, result);
            return result;
        },
        queryCommandIndeterm() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.queryCommandIndeterm;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'queryCommandIndeterm', arguments, result);
            return result;
        },
        queryCommandState() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.queryCommandState;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'queryCommandState', arguments, result);
            return result;
        },
        queryCommandSupported() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.queryCommandSupported;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'queryCommandSupported', arguments, result);
            return result;
        },
        queryCommandValue() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.queryCommandValue;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'queryCommandValue', arguments, result);
            return result;
        },
        querySelector() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.querySelector;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'querySelector', arguments, result);
            return result;
        },
        querySelectorAll() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.querySelectorAll;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'querySelectorAll', arguments, result);
            return result;
        },
        get readyState() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "complete";
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'readyState', arguments, result);
            return result;
        },
        get referrer() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.referrer;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'referrer', arguments, result);
            return result;
        },
        releaseEvents() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.releaseEvents;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'releaseEvents', arguments, result);
            return result;
        },
        replaceChildren() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.replaceChildren;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'replaceChildren', arguments, result);
            return result;
        },
        get rootElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.rootElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'rootElement', arguments, result);
            return result;
        },
        get scripts() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.scripts;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'scripts', arguments, result);
            return result;
        },
        get scrollingElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.scrollingElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'scrollingElement', arguments, result);
            return result;
        },
        get styleSheets() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.styleSheets;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'styleSheets', arguments, result);
            return result;
        },
        get timeline() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.timeline;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'timeline', arguments, result);
            return result;
        },
        get title() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.title;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'title', arguments, result);
            return result;
        },
        set title(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'title', arguments);
            $attribute_map.title = value;
        },
        get visibilityState() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "hidden";
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'visibilityState', arguments, result);
            return result;
        },
        get vlinkColor() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.vlinkColor;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'vlinkColor', arguments, result);
            return result;
        },
        set vlinkColor(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'vlinkColor', arguments);
            $attribute_map.vlinkColor = value;
        },
        get wasDiscarded() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = false;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'wasDiscarded', arguments, result);
            return result;
        },
        webkitCancelFullScreen() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitCancelFullScreen;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'webkitCancelFullScreen', arguments, result);
            return result;
        },
        get webkitCurrentFullScreenElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitCurrentFullScreenElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'webkitCurrentFullScreenElement', arguments, result);
            return result;
        },
        webkitExitFullscreen() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitExitFullscreen;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'webkitExitFullscreen', arguments, result);
            return result;
        },
        get webkitFullscreenElement() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitFullscreenElement;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'webkitFullscreenElement', arguments, result);
            return result;
        },
        get webkitFullscreenEnabled() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitFullscreenEnabled;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'webkitFullscreenEnabled', arguments, result);
            return result;
        },
        get webkitHidden() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'webkitHidden', arguments, result);
            return result;
        },
        get webkitIsFullScreen() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitIsFullScreen;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'webkitIsFullScreen', arguments, result);
            return result;
        },
        get webkitVisibilityState() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.webkitVisibilityState;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'webkitVisibilityState', arguments, result);
            return result;
        },
        write() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.write;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'write', arguments, result);
            return result;
        },
        writeln() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.writeln;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Document', 'writeln', arguments, result);
            return result;
        },
        get xmlEncoding() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.xmlEncoding;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'xmlEncoding', arguments, result);
            return result;
        },
        get xmlStandalone() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.xmlStandalone;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'xmlStandalone', arguments, result);
            return result;
        },
        set xmlStandalone(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'xmlStandalone', arguments);
            $attribute_map.xmlStandalone = value;
        },
        get xmlVersion() {
            if (!Document.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.xmlVersion;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Document', 'xmlVersion', arguments, result);
            return result;
        },
        set xmlVersion(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Document', 'xmlVersion', arguments);
            $attribute_map.xmlVersion = value;
        },
    }

    myVm.rename(Document.prototype, "Document");
    myVm.safeDescriptor_addConstructor(Document);
    myVm.safe_Objattribute(Document, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.defineProperties(Document.prototype, {
        [Symbol.unscopables]: {
            value: {
                after: true,
                append: true,
                before: true,
                prepend: true,
                remove: true,
                replaceChildren: true,
                replaceWith: true,
            },
            configurable: true, enumerable: false, writable: false
        }
    });

    Object.setPrototypeOf(Document.prototype, Node.prototype);
    Object.setPrototypeOf(Document, Node);

})();
