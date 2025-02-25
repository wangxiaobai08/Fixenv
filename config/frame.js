// 框架内存管理配置，用于解决变量名重复问题
let myVm = {
    console_log: console.log
};

setTimeout={}
setInterval={}
clearTimeout={}
clearInterval={}

let myVm_module = {
    exports: {},
    node_func: {
        setTimeout: setTimeout,
        setInterval: setInterval,
        clearTimeout: clearTimeout,
        clearInterval: clearInterval
    },
};

// 框架运行内存
myVm.memory = {
    config: {print: true, proxy: true}, // 框架配置：是否打印，是否使用proxy
    private_data: new WeakMap(),  // new出来的对象
    timer_map: { 0: null },       // 定时器map
    plugin: {},
    mimeType: {},
    pluginArray: {},
    mimeTypeArray: {},
    listeners: new Map(),         // 保存添加的事件
    eventObj:{},
    htmlElements: {},             // 保存 createElement 方法创造节点需要用到得类
    runElementList: [],
    htmlCollection: [],           // 储存 getElementsByTagName， 返回的节点对象
    logs: []                      // 日志储存
}; // 默认关闭打印

//开关配置, 以及别的配置
myVm.config={
    logOpen: false,
    proxy: true,
    proxy_proto:false
}

myVm.ProxyConfig={
    method_handler:true,
    get_handler:true,
    set_handler:true,
    has_handler:false,
    deleteProperty_handler:false,
    getOwnPropertyDescriptor_handler:false,
    defineProperty_handler:false,
    getPrototypeOf_handler:false,
    setPrototypeOf_handler:false,
    preventExtension_handler:false,
    isExtensible_handler:false,
    ownKeys_handler:false,
}

// 打印保存日志功能
myVm.print = {
    // 动态实现
};

// 默认的环境, 由用户输入的环境, 自定义环境, 只添加动态的值
myVm.default_envs = {
    //canvas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==",
    screen: {
        availHeight: 840,
        availLeft: 0,
        availTop: 0,
        availWidth: 1260,
        colorDepth: 24,
        height: 840,
        isExtended: false,
        onchange: null,
        pixelDepth: 24,
        width: 1260
    },
    navigator:{
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        deviceMemory: 8,
        cookieEnabled: true,
        language: "zh-CN",
        maxTouchPoints: 10,
        platform: "Win32",
        product: "Gecko",
        productSub: "20030107",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        vendor: "Google Inc.",
        vendorSub: "",
        webdriver: false,
        onLine: true,
        pdfViewerEnabled: true,
        languages: ['zh-CN', 'zh', 'en'],
        doNotTrack: null
    },
    location:{
        "ancestorOrigins": {},
        "href": "https://dun.163.com/trial/jigsaw",
        "origin": "https://dun.163.com",
        "protocol": "https:",
        "host": "dun.163.com",
        "hostname": "dun.163.com",
        "port": "",
        "pathname": "/trial/jigsaw",
        "search": "",
        "hash": ""
    },
    document: {
        url:"https://dun.163.com/trial/jigsaw",
        referrer:"https://dun.163.com/",
        contentType:"text/html",
        //cookie: "_ga=GA.1.2b09693d31c3b.42e110e1b7f8d0d80875; __root_domain_v=.163.com; _qddaz=QD.102440043194330; Hm_lvt_4671c5d502135636b837050ec6d716ce=1740369667,1740384617,1740388891,1740391621; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1740391621; HMACCOUNT=9D4F7B78DE2DFBA0"
    },

}

// 算法加解密
myVm.encrypt = {
    base64: {}
};

