
styleMedia = {};  // 未实现
webkitStorageInfo = {} // 未实现
speechSynthesis = {}; // 未实现


alert = function alert() { };
blur = function blur() { };
cancelAnimationFrame = function cancelAnimationFrame() { };
cancelIdleCallback = function cancelIdleCallback() { };
captureEvents = function captureEvents() { };
close = function close() { };
confirm = function confirm() { };
createImageBitmap = function createImageBitmap() { };
fetch = function fetch() { };
find = function find() { };
focus = function focus() { };
getComputedStyle = function getComputedStyle() { };
getSelection = function getSelection() { };
matchMedia = function matchMedia() { };
moveBy = function moveBy() { };
moveTo = function moveTo() { };
open = function open() { };
postMessage = function postMessage() { };
print = function print() { };
prompt = function prompt() { };
queueMicrotask = function queueMicrotask() { };
releaseEvents = function releaseEvents() { };
reportError = function reportError() { };
requestAnimationFrame = function requestAnimationFrame() { };
requestIdleCallback = function requestIdleCallback() { };
resizeBy = function resizeBy() { };
resizeTo = function resizeTo() { };
scroll = function scroll() { };
scrollBy = function scrollBy() { };
scrollTo = function scrollTo() { };
stop = function stop() { };
webkitCancelAnimationFrame = function webkitCancelAnimationFrame() { };
webkitRequestAnimationFrame = function webkitRequestAnimationFrame() { };
showDirectoryPicker = function showDirectoryPicker() { };
showOpenFilePicker = function showOpenFilePicker() { };
showSaveFilePicker = function showSaveFilePicker() { };
webkitRequestFileSystem = function webkitRequestFileSystem() { };
webkitResolveLocalFileSystemURL = function webkitResolveLocalFileSystemURL() { };
cr = function cr() { };
JSCompiler_renameProperty = function JSCompiler_renameProperty() { };
//-------------
//Date = function Date() { };

top = window;
parent = window;
self = window;

; (function () {
    let get_set_attribute_map = {
        // window: [window, true, false, false, true],
        self: [window, true, true, true, true],
        // document: [document, true, false, false, true],
        name: ["", true, true, true, true],
        location: [location, true, true, false, true],
        customElements: [customElements, true, false, true, true],
        history: [history, true, false, true, true],
        locationbar: [locationbar, true, true, true, true],
        menubar: [menubar, true, true, true, true],
        personalbar: [personalbar, true, true, true, true],
        scrollbars: [scrollbars, true, true, true, true],
        statusbar: [statusbar, true, true, true, true],
        toolbar: [toolbar, true, true, true, true],
        status: ["", true, true, true, true],
        closed: [false, true, false, true, true],
        frames: [window, true, true, true, true],
        length: [0, true, true, true, true],
        top: [window, true, false, false, true],
        opener: [null, true, true, true, true],
        parent: [window, true, true, true, true],
        frameElement: [null, true, false, true, true],
        navigator: [navigator, true, false, true, true],
        origin: [location.origin, true, true, true, true],
        external: [external, true, true, true, true],
        screen: [screen, true, true, true, true],
        innerWidth: [1707, true, true, true, true],
        innerHeight: [963, true, true, true, true],
        scrollX: [0, true, true, true, true],
        pageXOffset: [0, true, true, true, true],
        scrollY: [0, true, true, true, true],
        pageYOffset: [0, true, true, true, true],
        visualViewport: [visualViewport, true, true, true, true],
        screenX: [0, true, true, true, true],
        screenY: [0, true, true, true, true],
        outerWidth: [1707, true, true, true, true],
        outerHeight: [1067, true, true, true, true],
        devicePixelRatio: [1.5, true, true, true, true],
        clientInformation: [navigator, true, true, true, true],
        screenLeft: [0, true, true, true, true],
        screenTop: [0, true, true, true, true],
        defaultStatus: ["", true, true, true, true],
        defaultstatus: ["", true, true, true, true],
        styleMedia: [styleMedia, true, false, true, true],
        onsearch: [null, true, true, true, true],
        isSecureContext: [true, true, false, true, true],
        performance: [performance, true, true, true, true],
        onappinstalled: [null, true, true, true, true],
        onbeforeinstallprompt: [null, true, true, true, true],
        crypto: [crypto, true, false, true, true],
        indexedDB: [indexedDB, true, false, true, true],
        webkitStorageInfo: [webkitStorageInfo, true, false, true, true],
        sessionStorage: [sessionStorage, true, false, true, true],
        localStorage: [localStorage, true, false, true, true],
        onbeforexrselect: [null, true, true, true, true],
        onabort: [null, true, true, true, true],
        onblur: [null, true, true, true, true],
        oncancel: [null, true, true, true, true],
        oncanplay: [null, true, true, true, true],
        oncanplaythrough: [null, true, true, true, true],
        onchange: [null, true, true, true, true],
        onclick: [null, true, true, true, true],
        onclose: [null, true, true, true, true],
        oncontextmenu: [null, true, true, true, true],
        oncuechange: [null, true, true, true, true],
        ondblclick: [null, true, true, true, true],
        ondrag: [null, true, true, true, true],
        ondragend: [null, true, true, true, true],
        ondragenter: [null, true, true, true, true],
        ondragleave: [null, true, true, true, true],
        ondragover: [null, true, true, true, true],
        ondragstart: [null, true, true, true, true],
        ondrop: [null, true, true, true, true],
        ondurationchange: [null, true, true, true, true],
        onemptied: [null, true, true, true, true],
        onended: [null, true, true, true, true],
        onerror: [null, true, true, true, true],
        onfocus: [null, true, true, true, true],
        onformdata: [null, true, true, true, true],
        oninput: [null, true, true, true, true],
        oninvalid: [null, true, true, true, true],
        onkeydown: [null, true, true, true, true],
        onkeypress: [null, true, true, true, true],
        onkeyup: [null, true, true, true, true],
        onload: [null, true, true, true, true],
        onloadeddata: [null, true, true, true, true],
        onloadedmetadata: [null, true, true, true, true],
        onloadstart: [null, true, true, true, true],
        onmousedown: [null, true, true, true, true],
        onmouseenter: [null, true, true, true, true],
        onmouseleave: [null, true, true, true, true],
        onmousemove: [null, true, true, true, true],
        onmouseout: [null, true, true, true, true],
        onmouseover: [null, true, true, true, true],
        onmouseup: [null, true, true, true, true],
        onmousewheel: [null, true, true, true, true],
        onpause: [null, true, true, true, true],
        onplay: [null, true, true, true, true],
        onplaying: [null, true, true, true, true],
        onprogress: [null, true, true, true, true],
        onratechange: [null, true, true, true, true],
        onreset: [null, true, true, true, true],
        onresize: [null, true, true, true, true],
        onscroll: [null, true, true, true, true],
        onsecuritypolicyviolation: [null, true, true, true, true],
        onseeked: [null, true, true, true, true],
        onseeking: [null, true, true, true, true],
        onselect: [null, true, true, true, true],
        onslotchange: [null, true, true, true, true],
        onstalled: [null, true, true, true, true],
        onsubmit: [null, true, true, true, true],
        onsuspend: [null, true, true, true, true],
        ontimeupdate: [null, true, true, true, true],
        ontoggle: [null, true, true, true, true],
        onvolumechange: [null, true, true, true, true],
        onwaiting: [null, true, true, true, true],
        onwebkitanimationend: [null, true, true, true, true],
        onwebkitanimationiteration: [null, true, true, true, true],
        onwebkitanimationstart: [null, true, true, true, true],
        onwebkittransitionend: [null, true, true, true, true],
        onwheel: [null, true, true, true, true],
        onauxclick: [null, true, true, true, true],
        ongotpointercapture: [null, true, true, true, true],
        onlostpointercapture: [null, true, true, true, true],
        onpointerdown: [null, true, true, true, true],
        onpointermove: [null, true, true, true, true],
        onpointerup: [null, true, true, true, true],
        onpointercancel: [null, true, true, true, true],
        onpointerover: [null, true, true, true, true],
        onpointerout: [null, true, true, true, true],
        onpointerenter: [null, true, true, true, true],
        onpointerleave: [null, true, true, true, true],
        onselectstart: [null, true, true, true, true],
        onselectionchange: [null, true, true, true, true],
        onanimationend: [null, true, true, true, true],
        onanimationiteration: [null, true, true, true, true],
        onanimationstart: [null, true, true, true, true],
        ontransitionrun: [null, true, true, true, true],
        ontransitionstart: [null, true, true, true, true],
        ontransitionend: [null, true, true, true, true],
        ontransitioncancel: [null, true, true, true, true],
        onafterprint: [null, true, true, true, true],
        onbeforeprint: [null, true, true, true, true],
        onbeforeunload: [null, true, true, true, true],
        onhashchange: [null, true, true, true, true],
        onlanguagechange: [null, true, true, true, true],
        onmessage: [null, true, true, true, true],
        onmessageerror: [null, true, true, true, true],
        onoffline: [null, true, true, true, true],
        ononline: [null, true, true, true, true],
        onpagehide: [null, true, true, true, true],
        onpageshow: [null, true, true, true, true],
        onpopstate: [null, true, true, true, true],
        onrejectionhandled: [null, true, true, true, true],
        onstorage: [null, true, true, true, true],
        onunhandledrejection: [null, true, true, true, true],
        onunload: [null, true, true, true, true],
        caches: [caches, true, false, true, true],
        cookieStore: [cookieStore, true, false, true, true],
        ondevicemotion: [null, true, true, true, true],
        ondeviceorientation: [null, true, true, true, true],
        ondeviceorientationabsolute: [null, true, true, true, true],
        originAgentCluster: [false, true, false, true, true],
        trustedTypes: [trustedTypes, true, false, true, true],
        speechSynthesis: [speechSynthesis, true, false, true, true],
        onpointerrawupdate: [null, true, true, true, true],
        crossOriginIsolated: [false, true, false, true, true],
        scheduler: [scheduler, true, true, true, true],
    }

    let value_attribute_map_string = {
        alert: [alert, true, true, true],
        atob: [atob, true, true, true],
        blur: [blur, true, true, true],
        btoa: [btoa, true, true, true],
        cancelAnimationFrame: [cancelAnimationFrame, true, true, true],
        cancelIdleCallback: [cancelIdleCallback, true, true, true],
        captureEvents: [captureEvents, true, true, true],
        clearInterval: [clearInterval, true, true, true],
        clearTimeout: [clearTimeout, true, true, true],
        close: [close, true, true, true],
        confirm: [confirm, true, true, true],
        createImageBitmap: [createImageBitmap, true, true, true],
        //Date:[Date,false, false, false],
        fetch: [fetch, true, true, true],
        find: [find, true, true, true],
        focus: [focus, true, true, true],
        getComputedStyle: [getComputedStyle, true, true, true],
        getSelection: [getSelection, true, true, true],
        matchMedia: [matchMedia, true, true, true],
        moveBy: [moveBy, true, true, true],
        moveTo: [moveTo, true, true, true],
        open: [open, true, true, true],
        postMessage: [postMessage, true, true, true],
        print: [print, true, true, true],
        prompt: [prompt, true, true, true],
        queueMicrotask: [queueMicrotask, true, true, true],
        releaseEvents: [releaseEvents, true, true, true],
        reportError: [reportError, true, true, true],
        requestAnimationFrame: [requestAnimationFrame, true, true, true],
        requestIdleCallback: [requestIdleCallback, true, true, true],
        resizeBy: [resizeBy, true, true, true],
        resizeTo: [resizeTo, true, true, true],
        scroll: [scroll, true, true, true],
        scrollBy: [scrollBy, true, true, true],
        scrollTo: [scrollTo, true, true, true],
        setInterval: [setInterval, true, true, true],
        setTimeout: [setTimeout, true, true, true],
        stop: [stop, true, true, true],
        webkitCancelAnimationFrame: [webkitCancelAnimationFrame, true, true, true],
        webkitRequestAnimationFrame: [webkitRequestAnimationFrame, true, true, true],
        chrome: [chrome, false, true, true],
        showDirectoryPicker: [showDirectoryPicker, true, true, true],
        showOpenFilePicker: [showOpenFilePicker, true, true, true],
        showSaveFilePicker: [showSaveFilePicker, true, true, true],
        openDatabase: [openDatabase, true, true, true],
        webkitRequestFileSystem: [webkitRequestFileSystem, true, true, true],
        webkitResolveLocalFileSystemURL: [webkitResolveLocalFileSystemURL, true, true, true],
        cr: [cr, true, true, true],
        JSCompiler_renameProperty: [JSCompiler_renameProperty, true, true, true],
        ShadyCSS: [ShadyCSS, true, true, true],
    };

    for (const key in get_set_attribute_map) {
        if (Object.hasOwnProperty.call(get_set_attribute_map, key)) {
            const element = get_set_attribute_map[key];
            const value = element[0],
                get = element[1],
                set = element[2],
                configurable = element[3],
                enumerable = element[4];

            let desc = {
                get() { return value },
                set(value) { },
                configurable: configurable,
                enumerable: enumerable
            }
            if (set === false) {
                desc.set = undefined;
            }
            Object.defineProperty(window, key, desc);

            myVm.safefunction(Object.getOwnPropertyDescriptor(window, key)['get'], `get ${key}`, true);
            if (set === true) {
                myVm.safefunction(Object.getOwnPropertyDescriptor(window, key)['set'], `set ${key}`, true);
            }
        }
    };

    for (const key in value_attribute_map_string) {
        if (Object.hasOwnProperty.call(value_attribute_map_string, key)) {
            const element = value_attribute_map_string[key];
            const value = element[0],
                configurable = element[1],
                enumerable = element[2],
                writable = element[3];

            Object.defineProperty(window, key, {
                value: value, configurable: configurable, enumerable: enumerable, writable: writable
            });
            myVm.safefunction(Object.getOwnPropertyDescriptor(window, key)['value'])
        }
    }

})();


// 实现定时器池
let timerId = 0;
const timers = new Map();

window.setTimeout  = (fn, delay, ...args) => {
    const id = timerId++;
    timers.set(id,  {
        start: Date.now(),
        fn: () => fn(...args),
        delay: Math.max(delay  || 0, 4) // 强制4ms最小延迟
    });
    return id;
};
myVm.safefunction(window.setTimeout);

window.clearTimeout  = (id) => timers.delete(id);
// window.setTimeout=function ( ){};
//clearTimeout 实现
// window.clearTimeout=function clearTimeout(id) {
//     if (this._timers.has(id))  {
//         clearTimeout(this._timers.get(id).nodeTimer);
//         this._timers.delete(id);
//     }
// };
myVm.safefunction(window.clearTimeout);

// setInterval 实现
// window.setInterval=function setInterval(callback, interval = 0, ...args) {
//   if (typeof callback !== 'function') {
//     throw new TypeError('回调必须是函数');
//   }
//   const timerId = ++this._timerId;
//   const adjustedInterval = Math.max(0,  parseInt(interval) || 0);
//
//   const execute = () => {
//     if (!this._timers.has(timerId))  return;
//     try {
//       callback.apply(this,  args);
//     } finally {
//       const nodeTimer = setTimeout(execute, adjustedInterval);
//       this._timers.set(timerId,  { nodeTimer, type: 'interval' });
//     }
//   };
//   const nodeTimer = setTimeout(execute, adjustedInterval);
//   this._timers.set(timerId,  { nodeTimer, type: 'interval' });
//   return timerId;
// };
window.setInterval=setInterval;
myVm.safefunction(window.setInterval);
// clearInterval 实现
window.clearInterval=clearInterval;
// window.clearInterval=function clearInterval(id) {
//   if (this._timers.has(id)  && this._timers.get(id).type  === 'interval') {
//     clearTimeout(this._timers.get(id).nodeTimer);
//     this._timers.delete(id);
//   }
// };
myVm.safefunction(window.clearInterval);
// setImmediate 实现
//window.setImmediate=setImmediate;
window.setImmediate=function setImmediate(callback, ...args) {
  if (typeof callback !== 'function') {
    throw new TypeError('回调必须是函数');
  }
  const timerId = ++this._timerId;

  const nodeTimer = setImmediate(() => {
    try {
      callback.apply(this,  args);
    } finally {
      this._immediateQueue.delete(timerId);
    }
  });

  this._immediateQueue.add(timerId);
  return timerId;
};
myVm.safefunction(window.setImmediate);
// clearImmediate 实现
//window.clearImmediate=clearImmediate;
window.clearImmediate=function clearImmediate(id) {
  if (this._immediateQueue.has(id))  {
    clearImmediate(this._immediateQueue.get(id));
    this._immediateQueue.delete(id);
  }
}
myVm.safefunction(window.clearImmediate)

//-------------------------------
//定义安全的 parseInt

// const safeParseInt = function(input) {
//   return parseInt(input);
// };
window.parseInt=parseInt;
myVm.safefunction(window.parseInt)

//-------------------

  // 核心解码函数实现
// window.decodeURI=function decodeURI(encodedURI) {
// try {
//   return encodedURI.replace(/%[a-fA-F0-9]{2}/g,  (match) => {
//     const code = parseInt(match.slice(1),  16);
//     if (code === 0x25) throw new URIError("URI malformed");
//     return String.fromCharCode(code);
//   }).replace(/%(?![a-fA-F0-9]{2})/g, '%25');
// } catch (e) {
//   throw new URIError("URI malformed");
// }
// }
window.decodeURI=decodeURI
myVm.safefunction(window.decodeURI)
// window.decodeURIComponent=function decodeURIComponent(encodedURIComponent) {
// return encodedURIComponent.replace(/%([a-fA-F0-9]{2})/g,  (_, hex) => {
//   const code = parseInt(hex, 16);
//   if (isNaN(code)) throw new URIError("URI malformed");
//   return String.fromCharCode(code);
// });
// }
window.decodeURIComponent=decodeURIComponent
myVm.safefunction(window.decodeURIComponent)


// window.parseFloat=function parseFloat(str) {
//     // 类型强制转换与预处理
//     const inputStr = String(str).trimLeft();
//
//     // 核心解析正则表达式
//     const numberPattern = /^\s*([+-]?)(\d*\.?\d*)(?:[eE]([+-]?\d+))?/;
//     const matches = inputStr.match(numberPattern)  || [];
//
//     // 分块提取数值元素
//     const sign = matches[1] === '-' ? -1 : 1;
//     const basePart = matches[2] || '0';
//     const exponent = parseInt(matches[3] || '0', 10);
//
//     // 分段计算逻辑
//     let [integer, decimal] = basePart.split('.');
//     integer = integer || '0';
//     decimal = decimal || '0';
//
//     // 数值计算过程
//     const integerValue = integer.split('').reduce((acc,  cur) => acc * 10 + (+cur), 0);
//     const decimalValue = decimal.split('').reverse().reduce((acc,  cur, idx) => acc + (+cur) * Math.pow(10,  -(idx+1)), 0);
//     const total = (integerValue + decimalValue) * Math.pow(10,  exponent) * sign;
//
//     // 特殊值处理
//     return /[^\d.eE+-]/.test(inputStr) ? NaN :
//            inputStr === '' ? NaN :
//            isFinite(total) ? total : NaN;
//   }
window.parseFloat=parseFloat
myVm.safefunction(window.parseFloat)


// window.encodeURI  = function encodeURI(uri) {
//   // 保留字符集合 (RFC3986标准)
//   const reservedChars = /[;/?:@&=+$,\-_.!~*'()#]/g
//   // 需要编码的字符正则表达式
//   const encodePattern = /([^\w%\-\.!~*'()#;\/?:@&=+$,])/g
//
//   return String(uri).replace(encodePattern, (match) => {
//     // 已编码字符跳过处理
//     if (/%[\da-fA-F]{2}/.test(match)) return match
//
//     // 处理多字节字符编码
//     const utf8Bytes = []
//     for (let i = 0; i < match.length;  i++) {
//       const code = match.charCodeAt(i)
//       if (code <= 0x7F) {
//         utf8Bytes.push(code)
//       } else if (code <= 0x7FF) {
//         utf8Bytes.push(0xC0  | (code >> 6))
//         utf8Bytes.push(0x80  | (code & 0x3F))
//       } else if (code <= 0xFFFF) {
//         utf8Bytes.push(0xE0  | (code >> 12))
//         utf8Bytes.push(0x80  | ((code >> 6) & 0x3F))
//         utf8Bytes.push(0x80  | (code & 0x3F))
//       }
//     }
//
//     // 转换为URI编码格式
//     return utf8Bytes.map(byte  =>
//       `%${byte.toString(16).padStart(2,  '0').toUpperCase()}`
//     ).join('')
//   }).replace(reservedChars, match =>
//     // 保留字符二次验证
//     reservedChars.test(match)  ? match : encodeURIComponent(match)
//   )
// }
// 函数特征伪装
window.encodeURI=encodeURI;
myVm.safefunction(window.encodeURI)

// window.encodeURIComponent  = function encodeURIComponent(str) {
//   // 核心编码逻辑实现
//   return String(str).replace(/[^\w\-_.!~*'()]/g, (char) => {
//     // 跳过已编码字符
//     if (char === '%' && /^%[\da-f]{2}$/i.test(char))  return char
//
//     // 处理Unicode字符编码
//     const utf8Bytes = []
//     let codePoint = char.codePointAt(0)
//
//     // 处理代理对（四字节字符）
//     if (codePoint > 0xFFFF) {
//       const high = Math.floor((codePoint  - 0x10000) / 0x400) + 0xD800
//       const low = (codePoint - 0x10000) % 0x400 + 0xDC00
//       utf8Bytes.push(...encodeSurrogatePair(high,  low))
//     } else {
//       // 标准UTF-8编码
//       if (codePoint <= 0x007F) {
//         utf8Bytes.push(codePoint)
//       } else if (codePoint <= 0x07FF) {
//         utf8Bytes.push(0xC0  | (codePoint >> 6))
//         utf8Bytes.push(0x80  | (codePoint & 0x3F))
//       } else {
//         utf8Bytes.push(0xE0  | (codePoint >> 12))
//         utf8Bytes.push(0x80  | ((codePoint >> 6) & 0x3F))
//         utf8Bytes.push(0x80  | (codePoint & 0x3F))
//       }
//     }
//
//     // 转换为URI编码格式
//     return utf8Bytes.map(byte  =>
//       `%${byte.toString(16).padStart(2,  '0').toUpperCase()}`
//     ).join('')
//   });
//
//   // 代理对编码处理函数
//   function encodeSurrogatePair(high, low) {
//     const codePoint = (high - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000
//     return [
//       0xF0 | (codePoint >> 18),
//       0x80 | ((codePoint >> 12) & 0x3F),
//       0x80 | ((codePoint >> 6) & 0x3F),
//       0x80 | (codePoint & 0x3F)
//     ]
//   }
// }
window.encodeURIComponent=encodeURIComponent
myVm.safefunction(window.encodeURIComponent)


window.escape  = function escape(str) {
  // 核心编码逻辑
  return String(str).replace(/[^A-Za-z0-9@*\-_+./]/g, function(match) {
    const code = match.charCodeAt(0);

    // 编码规则判断
    if (code < 0xFF) {
      return `%${code.toString(16).padStart(2,  '0').toUpperCase()}`;
    } else {
      return `%u${code.toString(16).padStart(4,  '0').toUpperCase()}`;
    }
  });
};
myVm.safefunction(window.escape)

//--------
window.unescape=unescape;
myVm.safefunction(window.unescape)

window.eval=eval;
myVm.safefunction(window.eval);


window.Date=Date
myVm.safefunction(window.Date);

window.isNaN=isNaN
myVm.safefunction(window.isNaN)

//------------
window.CanvasRenderingContext2D=function () {};
myVm.safefunction(window.CanvasRenderingContext2D)

//-------------------------