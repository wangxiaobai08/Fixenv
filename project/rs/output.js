// 框架内存管理配置，用于解决变量名重复问题
let myVm = {
    console_log: console.log
};
// 框架运行内存
myVm.memory = {
    config: {print: true, proxy: true}, // 框架配置：是否打印，是否使用proxy
    htmlelements:{}, // 所有的html节点元素存放位置
    listeners:{}, // 所有事件存放位置
    logs:[], // 环境调用日志统一存放点
    storage:{} ,// localStorage 全局存放点
}; // 默认关闭打印
//开关配置, 以及别的配置
myVm.config={
    logOpen: true,
    proxy: true,
    proxy_proto:true
}

// 打印保存日志功能
myVm.print = {
    // 动态实现
};

// 默认的环境, 由用户输入的环境, 自定义环境, 只添加动态的值
myVm.default_envs = {
    canvas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==",
    screen: {},
    navigator: {
        appCodeName: "Mozilla",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44"
    },
    location: {
        href: "chrome://newtab/"
    },
    document: {
        cookie: ""
    }
}



//========================================================
//去掉所有的空格（中文空格、英文空格都会被替换）
myVm.compress_jsCode = function (string_js) {
    if (string_js.length >= 100) {
        let string = string_js.replace(/\r\n/g, "");
        string = string.replace(/\n/g, "");
        return string.replace(/\s/g, "").slice(0, 100) + "......";
    }
    return string_js
};

// 将用户设置的属性, 设置为自己的属性
myVm.updata_envs = function (user_envs, target_envs) {
    const target_envs_keys = Object.keys(target_envs);

    for (const key in user_envs) {
        if (target_envs_keys.indexOf(key) > -1) {
            target_envs[key] = user_envs[key];
        }
    }
};




/**
 * 去掉所有的空格（中文空格、英文空格都会被替换）
 * @param {String} string_js 
 * @return String
 */
myVm.compressJsCode = function (stringJs) {
    let string_js_length = stringJs.length;
    if (string_js_length >= 100) {
        let string = stringJs.replace(/\r\n/g, "").replace(/\n/g, "").replace(/\s/g, "");
        return string.slice(0, 70) + "..." + string.slice(-30);
    }
    return stringJs
};
// ========================================================================================================================
//框架日志功能
// 封装日志写入文件的功能
// const fs = require('fs');
// const path = require('path');

// function logToFile(logStr) {
//     // 创建 log 目录（如果不存在）
//     const logDirectory = path.join(__dirname, 'log');
//     if (!fs.existsSync(logDirectory)) {
//         fs.mkdirSync(logDirectory);
//     }

//     // 获取当前时间并格式化为 yyyy-MM-dd_HH-mm-ss
//     function getFormattedDate() {
//         const now = new Date();
//         const year = now.getFullYear();
//         const month = (now.getMonth() + 1).toString().padStart(2, '0');
//         const day = now.getDate().toString().padStart(2, '0');
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         const seconds = now.getSeconds().toString().padStart(2, '0');

//         return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
//     }

//     // 动态生成日志文件路径
//     const logFilePath = path.join(logDirectory, `logs_${getFormattedDate()}.txt`);

//     // 将日志写入文件
//     fs.appendFile(logFilePath, logStr + '\n', (err) => {
//         if (err) {
//             console.error('Failed to write log to file:', err);
//         }
//     });
// }

myVm.print.log = function (logType, target, property, value) {
    if (myVm.config.logOpen) {
        //开始保存日志
        if (myVm.memory.print.length === 111) {
        }
        const logStr = `{ "类型": "${logType}", "调用者": "${target}", "属性": "${property}", "值": "${value}" }`;
        myVm.memory.logs.push(logStr);
        // 同时将日志写入文件
        //logToFile(logStr);
    }
};
myVm.print.getall = function () {
    console.table(myVm.memory.logs, ["类型", "调用者", "属性", "值"]);
};
myVm.logAdd = function (logType, target, property, argArray, result) {
    let log_str;

    if (logType === 'ProxyGet') {
        
        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`

    } else if (logType === 'ProxySet' || logType === 'ProxyHas' || logType === 'ProxyDeleteProperty' || logType === 'ProxyGetOwnPropertyDescriptor' || logType === 'ProxyDefineProperty') {

        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`

    } else if (logType === 'ProxyDefineProperty') {

        log_str = `[${logType}] -> ${target}.${property} -> [${argArray}] -> [${result}]`

    } else if (logType === 'ProxyGetPrototypeOf' || logType === 'ProxyIsExtensible' || logType === 'ProxyOwnKeys') {
        try{
            log_str = `[${logType}] -> [${target}] -> [${result}]`
        }catch(e){
            log_str = `[${logType}] -> [${target}] -> [error]`
        }
    } else if (logType === 'ProxySetPrototypeOf') {

        log_str = `[${logType}] -> [${target}] -> [${result}]`

    } else if (logType === 'ProxyPreventExtensions') {

        log_str = `[${logType}] -> [${target}] -> [${result}]`

    } else if (logType === 'Apply' || logType === 'ProxyApply' || logType === 'ProxyConstruct') {

        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${argArray} ] -> [ ${result} ]`

    } else if (logType === 'NodeJs') {

        log_str = `[${logType}] -> [${Array.prototype.slice.call(argArray).join(', ')}]`

    } else if (logType === 'Func') {
        let _args = Array.prototype.slice.call(argArray).join(', ');
        _args = myVm.compressJsCode(_args + "")
        log_str = `[${logType}] -> [ ${target}.${property} ] -> (${_args}) -> [ ${result} ]`

    } else if (logType === 'Get') {
        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`
    } else if (logType === 'Set') {
        log_str = `[${logType}] -> [ ${target}.${property} ] -> (${Array.prototype.slice.call(argArray).join(', ')})`
    } else if (logType == 'myVmLog') {
        log_str = `[${logType}] -> [${target}]`
    }

    if (myVm.memory.isIframe) log_str = '[iframe]' + log_str;
    myVm.memory.logs.push(log_str);
    myVm.console_log(log_str);

    // 同时将日志写入文件
    //logToFile(log_str);
}
/**
 * 打印环境日志
 * @param {boolean} filter 是否过滤重复日志(默认不过滤)
 * @return String
 */
myVm.printLog = function (filter = false, key = '') {
    let logs = filter ? new Set(myVm.memory.logs) : myVm.memory.logs;

    let _logs = "";
    if (key) {
        key = `[${key}`;
        let key_length = key.length;

        for (let index = 0; index < logs.length; index++) {
            let l = logs[index]
            if (l.slice(0, key_length) === key) {
                _logs += `${l}\n`
            }
        }
        return _logs
    }

    for (let index = 0; index < logs.length; index++) {
        let l = logs[index]
        _logs += `${l}\n`
    }

    myVm.memory.logs = [];  // 打印之后清空内存
    return _logs;
};
//=================================================================
/*
 一些保护性功能方法会放到这里
 */

//  保护伪造的函数(Function.toString()) 让其更难被识破
myVm.safefunction = (function() {
    "use strict";
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function () {
        return typeof this === 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };

    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: true,
                enumerable: false,
                writable: true
            }
        );
        d.value = value;
        return d;
    };
    function set_native(func, key, value) {
        Object.defineProperty(func, key, buffer_memory(value))
    };

    Reflect.deleteProperty(Function.prototype, 'toString'); //删除原型链上的toString
    set_native(Function.prototype, "toString", myToString); //自己定义个getter方法
    set_native(Function, myFunction_toString_symbol, "function Function() { [native code] }")
    set_native(Function, "toString", myToString)
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }"); //套个娃 保护一下我们定义的toString 否则就暴露了
    /**
     * 保护伪造func (Function.toString())  让其更难被识破
     * @param { Object } func
     * @param { String } func_name - 可显示的名称
     * @param { Boolean } defined_func_name - 自定义可显示的名称
     * @returns { undefined }
     */
    return function (func, func_name, defined_func_name) {
        if (func_name !== undefined && defined_func_name === true) {
            set_native(func, myFunction_toString_symbol, `function ${func_name || ''}() { [native code] }`);
        } else {
            set_native(func, myFunction_toString_symbol, `function ${func.name || func_name || ''}() { [native code] }`);
        }
    };
})();
//  保护伪造的对象(Object.toString())  让其更难被识破
myVm.rename = (function () {
    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: true, enumerable: false, writable: false
            }
        );
        d.value = value;
        return d;
    };

    /**
     * 保护伪造Object (Object[Symbol.toStringTag])  让其更难被识破
     * @param { Object } Obj
     * @param { String } Objname - 可显示的名称
     * @returns { undefined }
     */
    return function (Obj, Objname) {
        Object.defineProperties(Obj, {
            [Symbol.toStringTag]: buffer_memory(Objname)
        })
    };
})();
// 保护 Object.prototype属性的对象描述符, 并给Object.prototype添加constructor属性
myVm.safeDescriptor_addConstructor = (function () {
    function buffer_memory_proto(value) {
        let d = buffer_memory_proto.d || (
            buffer_memory_proto.d = {
                configurable: false, enumerable: false, writable: false
            }
        );
        d.value = value;
        return d;
    };
    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: true, enumerable: false, writable: true
            }
        );
        d.value = value;
        return d;
    };

    /**
     * 保护 Object.prototype属性的对象描述符, 并给Object.prototype添加constructor属性
     * @param { Object } Obj
     * @returns { undefined }
     */
    return function (Obj) {
        Object.defineProperty(Obj, 'prototype', buffer_memory_proto(Obj.prototype))
        Object.defineProperty(Obj.prototype, 'constructor', buffer_memory(Obj));
    };

})();
/**
 * 保护对象get, set, func 属性的toString 操作
 * @param { Object } Obj
 * @param { Array } safe_get_attribute - 需要保护的 get 属性
 * @param { Array } safe_set_attribute - 需要保护的 set 属性
 * @param { Array } safe_func_attribute - 需要保护的 func 属性
 * @param { Boolean } oneself - 给自身添加, 而不是 prototype
 * @returns { undefined }
 */
myVm.safe_Objattribute = function (Obj, safe_get_attribute, safe_set_attribute, safe_func_attribute, oneself) {
    /*
    Obj：                需要保护的对象, 默认是保护对象的原型对象
    safe_get_attribute： 需要保护的 get 属性
    safe_set_attribute： 需要保护的 set 属性
    safe_func_attribute：需要保护的 func 属性
    oneself：            如果指定了这个参数 为 true，则说明是保护的自身，而不是原型链
    */
    const obj = oneself ? Obj : Obj.prototype;

    // 保护get属性
    for (let key of safe_get_attribute) {
        myVm.safefunction(Object.getOwnPropertyDescriptor(obj, key)['get']);
    }
    // 保护set属性
    for (let key of safe_set_attribute) {
        myVm.safefunction(Object.getOwnPropertyDescriptor(obj, key)['set']);
    }
    // 保护func属性
    for (let key of safe_func_attribute) {
        myVm.safefunction(obj[key]);
    }
}
/**
 * 设置 iterator 属性
 * @param { Object } Obj
 * @param { Boolean } oneself - 是否给自身添加, 而不是 prototype
 * @returns { undefined }
 */
myVm.set_iterator = function (Obj, oneself) {
    const obj = oneself ? Obj : Obj.prototype;

    Object.defineProperties(obj, {
        [Symbol.iterator]: {
            value: Array.prototype[Symbol.iterator],
            configurable: true,
            enumerable: false,
            writable: true
        }
    })
};
/*
大写字母的属性, 都是原型以及本身, 都会有一份
给原型, 以及本身设置属性, 并设置对象描述符
*/
myVm.add_capitalLetter_attribute = (function () {
    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: false, enumerable: true, writable: false
            }
        );
        d.value = value;
        return d;
    };

    /**
     * 同时给原型, 以及自身设置属性, 并设置对象描述符
     * @param { Object } Obj
     * @param { Array } attributes
     * @returns { undefined }
     */
    return function (Obj, attributes) {
        for (let key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                const value_obj = buffer_memory(attributes[key]);
                Object.defineProperty(Obj, key, value_obj);
                Object.defineProperty(Obj.prototype, key, value_obj);
            }
        };
    };
})();




// ========================================================================================================================
//框架日志功能
// 封装日志写入文件的功能
// const fs = require('fs');
// const path = require('path');

// function logToFile(logStr) {
//     // 创建 log 目录（如果不存在）
//     const logDirectory = path.join(__dirname, 'log');
//     if (!fs.existsSync(logDirectory)) {
//         fs.mkdirSync(logDirectory);
//     }

//     // 获取当前时间并格式化为 yyyy-MM-dd_HH-mm-ss
//     function getFormattedDate() {
//         const now = new Date();
//         const year = now.getFullYear();
//         const month = (now.getMonth() + 1).toString().padStart(2, '0');
//         const day = now.getDate().toString().padStart(2, '0');
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         const seconds = now.getSeconds().toString().padStart(2, '0');

//         return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
//     }

//     // 动态生成日志文件路径
//     const logFilePath = path.join(logDirectory, `logs_${getFormattedDate()}.txt`);

//     // 将日志写入文件
//     fs.appendFile(logFilePath, logStr + '\n', (err) => {
//         if (err) {
//             console.error('Failed to write log to file:', err);
//         }
//     });
// }

myVm.print.log = function (logType, target, property, value) {
    if (myVm.config.logOpen) {
        //开始保存日志
        if (myVm.memory.print.length === 111) {
        }
        const logStr = `{ "类型": "${logType}", "调用者": "${target}", "属性": "${property}", "值": "${value}" }`;
        myVm.memory.logs.push(logStr);
        // 同时将日志写入文件
        //logToFile(logStr);
    }
};
myVm.print.getall = function () {
    console.table(myVm.memory.logs, ["类型", "调用者", "属性", "值"]);
};
myVm.logAdd = function (logType, target, property, argArray, result) {
    let log_str;

    if (logType === 'ProxyGet') {
        
        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`

    } else if (logType === 'ProxySet' || logType === 'ProxyHas' || logType === 'ProxyDeleteProperty' || logType === 'ProxyGetOwnPropertyDescriptor' || logType === 'ProxyDefineProperty') {

        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`

    } else if (logType === 'ProxyDefineProperty') {

        log_str = `[${logType}] -> ${target}.${property} -> [${argArray}] -> [${result}]`

    } else if (logType === 'ProxyGetPrototypeOf' || logType === 'ProxyIsExtensible' || logType === 'ProxyOwnKeys') {
        try{
            log_str = `[${logType}] -> [${target}] -> [${result}]`
        }catch(e){
            log_str = `[${logType}] -> [${target}] -> [error]`
        }
    } else if (logType === 'ProxySetPrototypeOf') {

        log_str = `[${logType}] -> [${target}] -> [${result}]`

    } else if (logType === 'ProxyPreventExtensions') {

        log_str = `[${logType}] -> [${target}] -> [${result}]`

    } else if (logType === 'Apply' || logType === 'ProxyApply' || logType === 'ProxyConstruct') {

        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${argArray} ] -> [ ${result} ]`

    } else if (logType === 'NodeJs') {

        log_str = `[${logType}] -> [${Array.prototype.slice.call(argArray).join(', ')}]`

    } else if (logType === 'Func') {
        let _args = Array.prototype.slice.call(argArray).join(', ');
        _args = myVm.compressJsCode(_args + "")
        log_str = `[${logType}] -> [ ${target}.${property} ] -> (${_args}) -> [ ${result} ]`

    } else if (logType === 'Get') {
        log_str = `[${logType}] -> [ ${target}.${property} ] -> [ ${result} ]`
    } else if (logType === 'Set') {
        log_str = `[${logType}] -> [ ${target}.${property} ] -> (${Array.prototype.slice.call(argArray).join(', ')})`
    } else if (logType == 'myVmLog') {
        log_str = `[${logType}] -> [${target}]`
    }

    if (myVm.memory.isIframe) log_str = '[iframe]' + log_str;
    myVm.memory.logs.push(log_str);
    myVm.console_log(log_str);

    // 同时将日志写入文件
    //logToFile(log_str);
}
/**
 * 打印环境日志
 * @param {boolean} filter 是否过滤重复日志(默认不过滤)
 * @return String
 */
myVm.printLog = function (filter = false, key = '') {
    let logs = filter ? new Set(myVm.memory.logs) : myVm.memory.logs;

    let _logs = "";
    if (key) {
        key = `[${key}`;
        let key_length = key.length;

        for (let index = 0; index < logs.length; index++) {
            let l = logs[index]
            if (l.slice(0, key_length) === key) {
                _logs += `${l}\n`
            }
        }
        return _logs
    }

    for (let index = 0; index < logs.length; index++) {
        let l = logs[index]
        _logs += `${l}\n`
    }

    myVm.memory.logs = [];  // 打印之后清空内存
    return _logs;
};
//====================================================
// 框架代理功能
myVm.proxy =function(obj, objname) {
    //console.log(Object.prototype.toString.call(123)); // "[object Number]"
    function get_attribute_type(value) {
        return Object.prototype.toString.call(value);
    }
    function get_method_handler(monitorName) {
        return {
            apply(target, thisArg, argArray) {
                let result = Reflect.apply(target, thisArg, argArray);
                if (thisArg === console && target.name === "log") {
                    return result;
                };
                if (target.name === "toString") {
                    return result;
                };
                if (myVm.config.logOpen === true) {
                   // console.log(`[${watchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`);
                   console.log(`[${monitorName}] 调用函数，函数名称是 [${target.name}]，参数数组是 [${argArray}]，结果是 [${result}]。`);
                }
                return result

            },
            construct(target, argArray, newTarget) {
                let result = Reflect.construct(target, argArray, newTarget);
                if (myVm.config.logOpen === true) {
                    //console.log(`[${watchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`);
                    console.log(`[${monitorName}] 构造函数，函数名称是 [${target.name}]，参数数组是 [${argArray}]，结果是 [${(result)}]。`);
                }
                return result;
            }
        }
    }
    function get_obj_handler(monitorName) {
        return {
            get(target, propKey, receiver) {
                if (myVm.config.proxy_proto === false && propKey === "__proto__") {
                    console.table([{"调用类型":"__proto__","调用者":monitorName,"调用属性":propKey, "获取值":(target[propKey])}]);
                    return target[propKey]
                };
                let result = Reflect.get(target, propKey, receiver);
                let result_type = get_attribute_type(result);
                if (result instanceof Object) {
                    const descriptor = Object.getOwnPropertyDescriptor(target, propKey);

                    if (descriptor && descriptor.writable === false) {
                    console.log(`调用者:${monitorName} 属性:${propKey} 不可写`);
                    } else {
                        if (typeof result === "function") {
                            if (myVm.config.logOpen === true) {
                                console.table([{"调用类型":"get","调用者":monitorName,"调用属性":propKey, "获取值":myVm.compress_jsCode(String(result)),"类型":result_type}]);
                            }
                            return new Proxy(result, get_method_handler(monitorName))
                        } else {
                            if (myVm.config.logOpen === true) {
                                //console.log(`\ngetting propKey-> ${WatchName}.${propKey}  value-> ${myVm.compress_jsCode(String(result))}  typeof-> ${result_type}`);
                                console.table([{"调用类型":"get","调用者":monitorName,"调用属性":propKey, "获取值":myVm.compress_jsCode(String(result)),"类型":result_type}]);
                            }
                        }
                        return new Proxy(result, get_obj_handler(`${monitorName}.${propKey}`))
                    }

                }
                if (typeof (propKey) !== "symbol" && propKey !== "toString") {
                    try {
                        if (myVm.config.logOpen === true) {
                            //console.log(`\n获取属性-> ${monitorName}.${propKey.description ?? propKey}  获取值-> ${result}  类型-> ${result_type}`);
                             console.table([{"调用类型":"get","调用者":monitorName,"调用属性":propKey.description ?? propKey, "获取值":(target[propKey]),"类型": result_type}]);
                        }
                    } catch (e) {
                        console.log(`[${monitorName}] get 获取失败`);
                    }
                }
                return result;
            },
            set(target, propKey, value, receiver) {
                let value_type = get_attribute_type(value);
                if (value instanceof Object) {
                    if (myVm.config.logOpen === true) {
                        //console.log(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${myVm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
                        console.table([{"调用类型":"set","调用者":monitorName,"调用属性":propKey, "设置值":myVm.compress_jsCode(String(value)),"类型":value_type}]);
                    }
                } else {
                    if (myVm.config.logOpen === true) {
                        //console.log(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${myVm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
                        console.table([{"调用类型":"set","调用者":monitorName,"调用属性":propKey, "设置值":myVm.compress_jsCode(String(value)),"类型":value_type}]);
                    }
                }
                return Reflect.set(target, propKey, value, receiver);
            },
            // has(target, propKey) {
            //     let result = Reflect.has(target, propKey);
            //     if (myVm.config.logOpen === true) {
            //         //console.log(`has propKey-> ${WatchName}.${propKey}, result-> ${result}`);
            //         console.table([{"调用类型":"has","调用者":monitorName,"调用属性":propKey, "存在值":result}]);
            //     }
            //     return result;
            // },
            // deleteProperty(target, propKey) {
            //     let result = Reflect.deleteProperty(target, propKey);
            //     if (myVm.config.logOpen === true) {
            //         //console.log(`delete propKey-> ${WatchName}.${propKey}, result-> ${result}`);
            //         console.table([{"调用类型":"deleteProperty","调用者":monitorName,"调用属性":propKey, "删除值":result}]);
            //     }
            //     return result;
            // },
            // getOwnPropertyDescriptor(target, propKey) {
            //     let result = Reflect.getOwnPropertyDescriptor(target, propKey);
            //     if (myVm.config.logOpen === true) {
            //         try {
            //             //console.log(`getOwnPropertyDescriptor  propKey-> ${WatchName}.${propKey} result-> ${(String(result))}`);
            //             console.table([{"调用类型":"getOwnPropertyDescriptor","调用者":monitorName,"调用属性":propKey, "获取属性描述符":(String(result))}]);
            //         } catch (error) { }
            //     }
            //     return result;
            // },
            // defineProperty(target, propKey, attributes) {
            //     let result = Reflect.defineProperty(target, propKey, attributes);
            //     try {
            //         if (myVm.config.logOpen === true) {
            //             //console.log(`defineProperty propKey-> ${WatchName}.${propKey} attributes is [${(attributes)}], result is [${result}]`);
            //             console.table([{"调用类型":"defineProperty","调用者":monitorName,"调用属性":propKey, "修改属性":result}]);
            //         }
            //     } catch (e) {
            //         console.log(`[${monitorName}] defineProperty error`)
            //     }
            //     return result;
            // },
            // getPrototypeOf(target) {
            //     let result = Reflect.getPrototypeOf(target);
            //     if (myVm.config.logOpen === true) {
            //         //console.log(`[${WatchName}] getPrototypeOf result is [${(result)}]`);
            //         console.log(`[${monitorName}] 原型对象是 [${(result)}]`)
            //     }
            //     return result;
            // },
            // setPrototypeOf(target, proto) {
            //     let result = Reflect.setPrototypeOf(target, proto);
            //     if (myVm.config.logOpen === true) {
            //         //console.log(`[${WatchName}] setPrototypeOf proto is [${(proto)}], result is [${result}]`);
            //         console.log(`[${monitorName}] 设置原型对象 [${(proto)}], 最终原型对象 [${result}]`);

            //     }
            //     return result;
            // },
            // preventExtensions(target) {
            //     let result = Reflect.preventExtensions(target);
            //     if (myVm.config.logOpen === true) {
            //         //console.log(`[${WatchName}] preventExtensions, result is [${result}]`);
            //         console.log(`[${monitorName}] 防止扩展操作，结果是 [${result}]`);
            //     }
            //     return result;
            // },
            // isExtensible(target) {
            //     let result = Reflect.isExtensible(target);
            //     if (myVm.config.logOpen === true) {
            //         //console.log(`[${WatchName}] isExtensible, result is [${result}]`);
            //         console.log(`[${monitorName}] 是否可扩展，结果是 [${result}]`);

            //     }
            //     return result;
            // },
            // ownKeys(target) {
            //     let result = Reflect.ownKeys(target);
            //     if (myVm.config.logOpen === true) {
            //         try {
            //             //console.log(`[${WatchName}] invoke ownkeys, result is [${String((result))}]`);
            //             console.log(`[${monitorName}] 调用 ownKeys，结果是 [${String((result))}]`);
            //         } catch (error) {

            //         }
            //     }
            //     return result
            // }
        }
    }
    if (myVm.config.proxy === false) {
        return obj
    }
    // if (type === "method") {
    if (typeof obj === "function") {
        return new Proxy(obj, get_method_handler(objname));
    }
    return new Proxy(obj, get_obj_handler(objname));
};
myVm.proxy_chained = function (obj_, obj_name) {
    function set_traverse_object(target, obj, recursion_layers) {
        recursion_layers -= 1;
        for (let prop in obj) {
            const value = obj[prop];
            const tg_name = `${target}.${prop.toString()}`;
            const value_type = get_value_type(value);
            if (value && value_type === "object" && recursion_layers >= 1) {
                set_traverse_object(tg_name, value, recursion_layers);
                continue;
            }
            if (value && value.toString() !== '[object Object]') {
                if (myVm.config.logOpen === true)
                    myVm.console_log(`setter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
                continue;
            }
            if (myVm.config.logOpen === true)
                myVm.console_log(`setter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
        }
    }

    function new_handler(target_name, obj, number) {
        return new Proxy(obj, my_handler(target_name, number));
    }

    function get_value_type(value) {
        if (Array.isArray(value)) {
            return 'Array';
        }
        return typeof value;
    }

    function my_handler(target_name, number) {
        return {
            set: function (obj, prop, value) {
                const value_type = get_value_type(value);
                const tg_name = `${target_name}.${prop.toString()}`;

                if (value && value_type === "object") {
                    set_traverse_object(tg_name, value, number);
                } else {
                    if (myVm.config.logOpen === true)
                        myVm.console_log(`setter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
                }
                return Reflect.set(obj, prop, value);
            },
            get: function (obj, prop) {
                const tg_name = `${target_name}.${prop.toString()}`;
                const value = Reflect.get(obj, prop);
                let value_type = get_value_type(value);
                if (value && value_type === 'object') {
                    return new_handler(tg_name, value, number);
                }
                if (myVm.config.logOpen === true)
                    myVm.console_log(`getter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
                return value;
            },
            deleteProperty(target, propKey) {
                // 没有实现链式输出
                let result = Reflect.deleteProperty(target, propKey);
                let value_type = get_value_type(result);

                if (myVm.config.logOpen === true)
                    myVm.console_log(`delete hook-> ${propKey}, 结果-> ${result};  类型-> ${value_type}`);
                return result;
            }
        };
    }
    return new Proxy(obj_, my_handler(obj_name, 30));
};



var EventTarget = function EventTarget() { // 构造函数

};
myVm.safefunction(EventTarget);

// 因为EventTarget是构造函数，而我们要的是原型，因此需要先hook EventTarget.prototype，设置下原型的名字，否则它会使用父亲的名字
Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
})

EventTarget.prototype.addEventListener = function addEventListener(type,callback) {
   // debugger; //debugger的意义在于检测到是否检测了该方法
    if(!(type in myVm.memory.listeners)){
        myVm.memory.listeners[type] = [];
    }
    myVm.memory.listeners[type].push(callback);
};
myVm.safefunction(EventTarget.prototype.addEventListener);

EventTarget.prototype.dispatchEvent = function dispatchEvent() {
    debugger;
};
myVm.safefunction(EventTarget.prototype.dispatchEvent);

EventTarget.prototype.removeEventListener = function removeEventListener() {
    debugger;
};
myVm.safefunction(EventTarget.prototype.removeEventListener);

// EventTarget = catvm.proxy(EventTarget);
// EventTarget.prototype = catvm.proxy(EventTarget.prototype);

Node = function Node() {
    throw new TypeError("Illegal constructor");
};
myVm.safefunction(Node);

; (function () {
    const $attributes = {
        ATTRIBUTE_NODE: 2,
        CDATA_SECTION_NODE: 4,
        COMMENT_NODE: 8,
        DOCUMENT_FRAGMENT_NODE: 11,
        DOCUMENT_NODE: 9,
        DOCUMENT_POSITION_CONTAINED_BY: 16,
        DOCUMENT_POSITION_CONTAINS: 8,
        DOCUMENT_POSITION_DISCONNECTED: 1,
        DOCUMENT_POSITION_FOLLOWING: 4,
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32,
        DOCUMENT_POSITION_PRECEDING: 2,
        DOCUMENT_TYPE_NODE: 10,
        ELEMENT_NODE: 1,
        ENTITY_NODE: 6,
        ENTITY_REFERENCE_NODE: 5,
        NOTATION_NODE: 12,
        PROCESSING_INSTRUCTION_NODE: 7,
        TEXT_NODE: 3
    };

    const $safe_get_attribute = [
        'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'
    ];
    const $safe_set_attribute = ['nodeValue', 'textContent'];
    const $safe_func_attribute = [
        'appendChild', 'cloneNode', 'compareDocumentPosition', 'contains', 'getRootNode', 'hasChildNodes', 'insertBefore', 'isDefaultNamespace', 'isEqualNode', 'isSameNode', 'lookupNamespaceURI',
        'lookupPrefix', 'normalize', 'removeChild', 'replaceChild'
    ];

    Node.prototype = {
        appendChild(aChild) {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };

        },
        get baseURI() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).baseURI, location.href);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'baseURI', arguments, result);
            return result;
        },
        get childNodes() {
            // debugger;
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).childNodes, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'childNodes', arguments, result);
            return result;
        },
        cloneNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'cloneNode', arguments, result);
            return result;
        },
        compareDocumentPosition() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'compareDocumentPosition', arguments, result);
            return result;
        },
        contains() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'contains', arguments, result);
            return result;
        },
        get firstChild() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).firstChild, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'firstChild', arguments, result);
            return result;
        },
        getRootNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            console.log(this)
        },
        hasChildNodes() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'hasChildNodes', arguments, result);
            return result;
        },
        insertBefore() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'insertBefore', arguments, result);
            return result;
        },
        get isConnected() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).isConnected, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'isConnected', arguments, result);
            return result;
        },
        isDefaultNamespace() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'isDefaultNamespace', arguments, result);
            return result;
        },
        isEqualNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'isEqualNode', arguments, result);
            return result;
        },
        isSameNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'isSameNode', arguments, result);
            return result;
        },
        get lastChild() {   // 返回一个html
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).lastChild, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'isSameNode', arguments, result);
            return result;
        },
        lookupNamespaceURI() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'lookupNamespaceURI', arguments, result);
            return result;
        },
        lookupPrefix() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'lookupPrefix', arguments, result);
            return result;
        },
        get nextSibling() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).nextSibling, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'nextSibling', arguments, result);
            return result;
        },
        get nodeName() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let node_name = myVm.htmls_toStringTag(this).toUpperCase();
            let result = node_name === 'DOCUMENT' ? '#document' : node_name;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'nodeName', arguments, result);
            return result;
        },
        get nodeType() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 9;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'nodeType', arguments, result);
            return result;
        },
        get nodeValue() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).nodeValue, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'nodeValue', arguments, result);
            return result;
        },
        set nodeValue(value) {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'Node', 'nodeValue', arguments);
            myVm.memory.private_data.get(this).nodeValue = value + "";
        },
        normalize() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'normalize', arguments, result);
            return result;
        },
        get ownerDocument() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'ownerDocument', arguments, result);
            return result;
        },
        get parentElement() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'parentElement', arguments, result);
            return result;
        },
        get parentNode() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = this;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'parentNode', arguments, result);
            return result;
        },
        get previousSibling() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'previousSibling', arguments, result);
            return result;
        },
        removeChild() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'removeChild', arguments, result);
            return result;
        },
        replaceChild() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Node', 'replaceChild', arguments, result);
            return result;
        },
        get textContent() {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).textContent, null);
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Node', 'textContent', arguments, result);
            return result;
        },
        set textContent(value) {
            if (!Node.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (myVm.config.logOpen=== true) myVm.logAdd('Set', 'Node', 'textContent', arguments);
            myVm.memory.private_data.get(this).textContent = value + "";
        },
    };
    myVm.rename(Node.prototype, "Node");
    myVm.safeDescriptor_addConstructor(Node);
    myVm.safe_Objattribute(Node, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    myVm.add_capitalLetter_attribute(Node, $attributes);


    Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Node, EventTarget);
})();



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
        cookie:"",
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
            console.log(tagname, '---')
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
    document={};
    document.__proto__=Document.prototype;
})();


var WindowProperties = function WindowProperties() { // 构造函数

};
myVm.safefunction(WindowProperties);

Object.defineProperties(WindowProperties.prototype, {
    [Symbol.toStringTag]: {
        value: "WindowProperties",
        configurable: true
    }
})

// 设置原型的父对象
WindowProperties.prototype.__proto__ = EventTarget.prototype;



// ========================================================================================================================
// Window -> WindowProperties -> EventTarget
Window = function Window() {
    throw new TypeError("Illegal constructor");
}; 
myVm.safefunction(Window);
window=this;

; (function () {

    let WindowProperties = (function () {
        let WindowProperties = function WindowProperties() {
            throw new TypeError("Illegal constructor");
        }; myVm.safefunction(WindowProperties);

        delete WindowProperties.prototype.constructor;
        myVm.rename(WindowProperties.prototype, "WindowProperties");
        Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
        return WindowProperties;
    })();

    const $attributes = {
        TEMPORARY: 0,
        PERSISTENT: 1
    };

    myVm.rename(Window.prototype, "Window");
    myVm.add_capitalLetter_attribute(Window, $attributes);

    Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
    Object.setPrototypeOf(Window, EventTarget);

    Object.defineProperty(Window, 'prototype', { value: Window.prototype, configurable: false, enumerable: false, writable: false });

    
    window.constructor = Window;
    window.__proto__ = Window.prototype;  // 这个有点特殊, 必须要强制指定原型链

    // v8没有setTimeout，浏览器有，但是浏览器把这个方法放到this下面，伪造v8有这个东西，因此我们需要伪造一下
    window.setTimeout = function (x, y) {
    // x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    // 正确应该 生成UUID，并且保存到内存
    return 123;
    };myVm.safefunction(window.setTimeout);

    window.setInterval=function(x,y){
        typeof (x) == "function" ? x() : undefined;
        typeof (x) == "string" ? eval(x) : undefined;
        return 123;
    };myVm.safefunction(window.setInterval);

    Object.defineProperty(window, 'window', {
        value: window,
        configurable: false,
        enumerable: true,
        writable: true
    })
})();

Location = function Window() {
    throw new TypeError("Illegal constructor");
}; myVm.safefunction(Window);

location = {};

; (function () {
    Location.prototype = {};
    myVm.rename(Location.prototype, "Location");
    myVm.safeDescriptor_addConstructor(Location);
    const $safe_get_attribute = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];
    const $safe_func_attribute = ['ancestorOrigins', 'assign', 'reload', 'replace', 'toString'];
    let $attribute_map = {
        hash: "",
        host: "newtab",
        hostname: "newtab",
        href: "chrome://newtab/",
        origin: "chrome://newtab",
        pathname: "/",
        port: "",
        protocol: "chrome:",
        search: ""
    };
    location = {
        ancestorOrigins() {
            let result = new class DOMStringList { };
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'ancestorOrigins', arguments, result);
            return result;
        },
        assign() {
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'assign', arguments, result);
            return result;
        },
        get hash() {
            let result = $attribute_map.hash;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'hash', arguments, result);
            return result
        },
        set hash(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'hash', arguments);
            $attribute_map.hash = value
        },

        get host() {
            let result = $attribute_map.host
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'host', arguments, result);
            return result
        },
        set host(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'host', arguments);
            $attribute_map.host = value
        },

        get hostname() {
            let result = $attribute_map.hostname;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'hostname', arguments, result);
            return result
        },
        set hostname(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'hostname', arguments);
            $attribute_map.hostname = value
        },

        get href() {
            let result = $attribute_map.href
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'href', arguments, result);
            return result
        },
        set href(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'href', arguments);
            let a = value.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            location.protocol = a[1] ? a[1] : "";
            location.host = a[2] ? a[2] : "";
            location.port = a[3] ? a[3] : "";
            location.pathname = a[4] ? a[4] : "";
            location.search = a[5] ? a[5] : "";
            location.hash = a[6] ? a[6] : "";
            location.hostname = location.host;
            location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
            $attribute_map.href = value;
        },

        get origin() {
            let result = $attribute_map.origin;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'origin', arguments, result);
            return result
        },
        set origin(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'origin', arguments);
            $attribute_map.origin = value
        },

        get pathname() {
            let result = $attribute_map.pathname
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'pathname', arguments, result);
            return result
        },
        set pathname(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'pathname', arguments);
            $attribute_map.pathname = value
        },

        get port() {
            let result =  $attribute_map.port;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'port', arguments, result);
            return result
        },
        set port(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'port', arguments);
            $attribute_map.port = value
        },
        get protocol() {
            let result = $attribute_map.protocol;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'protocol', arguments, result);
            return result;
        },
        set protocol(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'protocol', arguments);
            $attribute_map.protocol = value
        },
        reload() {
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'reload', arguments, result);
            return result;
        },
        replace() {
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'replace', arguments, result);
            return result;
        },
        get search() {
            let result = $attribute_map.search;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'search', arguments, result);
            return result
        },
        set search(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'search', arguments);
            $attribute_map.search = value
        },
        toString() {
            let result = location.href;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'toString', arguments, result);
            return result
        }
    };
    // 添加两个特殊的属性
    Object.defineProperty(location, 'valueOf', { value: valueOf, configurable: false, enumerable: false, writable: false });
    Object.defineProperties(location, { [Symbol.toPrimitive]: { value: undefined, configurable: false, enumerable: false, writable: false } });
    for (let key of $safe_get_attribute) {
        Object.defineProperty(location, key, {
            configurable: false,
            enumerable: true
        });
        myVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['get']);
        myVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['set']);
    };
    for (let key of $safe_func_attribute) {
        Object.defineProperty(location, key, {
            value: location[key],
            configurable: false,
            enumerable: true,
            writable: false
        });
        myVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['value'])
    }
    Object.setPrototypeOf(location, Location.prototype);
    // 初始化用户配置
    location.href = myVm.default_envs['location']['href'];

}
)();


window.top=window;

window = myVm.proxy(window, "window");
document = myVm.proxy(document, "document");
location = myVm.proxy(location, "location");



content="XOzY7XGVGsuJwZxBybRWMwgdlxgdaaHM8MCT4axs9Fv5dQTFg4YdssXdA6WDdghKZYc9Gc4scJIxeBZ3jD9TUQC2O3q9qlMfNVqiB8cywrdelOmOE.TTtNueOhyuWveY"
$_ts = window['$_ts'];
if (!$_ts)
    $_ts = {};
$_ts.nsd = 42799;
$_ts.cd = "qtTqrpAlhqEqDGQFrr93DGEbrpLrDsZcqGq5rSLlDpGcqq9CcqEqcs3xxGqFqG9Cm1LWcqA3DGlRHn3cqrLoDGARDqEqDGEFqS9ZDGqWcAA3qGqFrrLmDpGFxr9drAEqDG3FrS93DGAWcPqLqGqFqpLDDpGcqq9CcaE9DGqFqp93qGqFrSLlDpGcxrLcDGWRDrLrkq7lDqEqDP3FqS93DG3RHaWcqrLlGGVRDrLckc1FqsVSrAVnJRLOarET.99A7cM__syA.R2QCXdHaNt80NsIvaLWS0XP8klkrkAorqDMhqzkUvabWJg61bfYYD7gdUNf3br.MskXibATRcV5KBpCMC9NFUmzePezQD2.tDdBMCZNF6xLMMRzwb2NKPGOjCSxU0W5MsKXFmYOpDezJXTbFbTwpP34aKTCFK9.FvsCMne.QDzLhIpCMC9NFUmzePezQD2.K1CgWlY.HmE0QtLzJ9xzQoThSUzJJ9fYAniGKDTaFK7LM5eBMn2.QbfzzbTCFK9.FvsCMne.QDzLUh3fWDyipUxVLT3zQ2TTYs1OF2rJpkenp.GyKDzaFCGzeoRBF12NQK6ChCTaFK7LM5eBMn2.QbfzSnZfWlplsYULK2m9R92AJe74UDSJJOwj_nlyUbznFDCCMURNF1zjwHRBhCzaFCGzeoRBF12NQK6CUPZvWlEZWB7SpoJNRvRpnml4FDyPpvOkAPldUb2SMI3BMUrNFnfB4CeBtKznFDCCMURNF1zjwHRBUP9vWYw0u9aSJCL6U9hsVoxn1bx2YiNnpcQdUDN0ebZBF6r.Fc60wbeNtK2SMI3BMUrNFnfB4CeBKc92W0.jQvwpwmguYir6p0Tv1kT6TKwLpcQeUCdBMCZNF6xLMMRzwb2NtCN0ebZBF6r.Fc60wbeNKc7biQf_RTrJWbTN.lfMA2J53DBu1l2wAPV5KBpCMC9NFUmzePezQD2.tDdBMCZNF6xLMMRzwb2NKPGOLCrQYYm2VlvRQDTdWo3ZMBxSwKyvRP34aKTCFK9.FvsCMne.QDzLhIpCMC9NFUmzePezQD2.K1CgAlY.sDpfKewmp9yZJbYD.vNiHmmHw1iGKDTaFK7LM5eBMn2.QbfzzbTCFK9.FvsCMne.QDzLUh3fADmlJ2YidlmVAoYO11dkwYmfIUJs3hGyKDzaFCGzeoRBF12NQK6ChCTaFK7LM5eBMn2.QbfzSnZfpbeqQuH.s23uAklSKZJ28VmIYmABCnlyUbznFDCCMURNF1zjwHRBhCzaFCGzeoRBF12NQK6CUPZvssybYe2DFoASVuSHT0eXsDyrJsMH3PldUb2SMI3BMUrNFnfB4CeBtKznFDCCMURNF1zjwHRBUP9vsCwaZ9zTw2JUF9Oj3bzPM9AZFJ3_3PQdUDN0ebZBF6r.Fc60wbeNtK2SMI3BMUrNFnfB4CeBKc92ssbLMYYrMmpPJixL1me1VoTzzllSwcQeUCdBMCZNF6xLMMRzwb2NtCN0ebZBF6r.Fc60wbeNKc7b1iSERlATUuppd9p.IuTWFKkyKuJARcV5KBpCMC9NFUmzePezQD2.tDdBMCZNF6xLMMRzwb2NKPGOnvQCwDz5smMKs2YQJTpHQQ2rwKePRP34aKTCFK9.FvsCMne.QDzLhIpCMC9NFUmzePezQD2.K1CgV9SPw9fNWwAz8sSHIYz0nlqzKOl6w1iGKDTaFK7LM5eBMn2.QbfzzbTCFK9.FvsCMne.QDzLUh3fVUJoplayjbZuHUwXRVOisCxGYVx7AhGyKDzaFCGzeoRBF12NQK6ChCTaFK7LM5eBMn2.QbfzSnZfY2RJHYh41K9.HUAe1IzEiORtWVlnCnlyUbznFDCCMURNF1zjwHRBhCzaFCGzeoRBF12NQK6CUPZvYb2hFdz910zVw6V6ulRfAvY5JDha3PldUb2SMI3BMUrNFnfB4CeBtKznFDCCMURNF1zjwHRBUP9vUvSC.Cy.sbwWFYMnw2wlsYJsRW20QPQdUDN0ebZBF6r.Fc60wbeNtK2SMI3BMUrNFnfB4CeBKc923sopQCVeFuevMX0T3mTlJbwcgbrJpcQeUCdBMCZNF6xLMMRzwb2NtCN0ebZBF6r.Fc60wbeNKc7bRWSDFoES1lSMCCroKbwhYlBIWCq6pcV5KBpCMC9NFUmzePezQD2.tDdBMCZNF6xLMMRzwb2NKPGOdomxYlyuJ6O18TzJwc2asXWzW2mpAc34aKTCFK9.FvsCMne.QDzLhIpCMC9NFUmzePezQD2.K1CgRozEHYAaKdpoUDyzwopSzoph1mWSAniGKDTaFK7LM5eBMn2.QbfzzbTCFK9.FvsCMne.QDzLUh3fF9wDWsxPTTxts6w.Wuv0WKeEIuRm3hGyKDzaFCGzeoRBF12NQK6ChCTaFK7LM5eBMn2.QbfzSnZfMmZ5J0dPWl06t02zwdmQpKzi19JL_nlyUbznFDCCMURNF1zjwHRBhCzaFCGzeoRBF12NQK6CUPZvMueZRie7wbrcJOQTuDTVM9RIVTK0APldU2SIE4Y0RbQjRvpSzKxuMcNnwCsLADR.QKxChBRj3Dr.wDmA_lr73KqL3DsyQUNTQYw2QdzXQcQNQ6R0dTgBUPQLQCsghDxTw1f2QIW7wvRGwVw9eowbwnN.MKhdMUrGtbrfwwRj3Dr.wDmJZ6r6xn2uwvsdU2gNF6xLMMRzwb2NtCN0ebZBF6r.Fc60wbeNKc7bFBJLpKmTpDmKe0YY1C2tMuU.iTYGwcV5KBpCMC9NFUmzePezQD2.tDdBMCZNF6xLMMRzwb2NKPGOe2SysbA6MChN19zdslVT18zYW0xnwP34aKTCFK9.FvsCMne.QDzLhIpCMC9NFUmzePezQD2.K1CgMsATQoweFeY.FkpZFC7B6UpWWTTIp1iGKDTaFK7LM5eBMn2.QbfzzbTCFK9.FvsCMne.QDzLUh3fMop7YYm34Dw9Yl20QKOdM2JoAlp73hGyKDzaFCGzeoRBF12NQK6ChCTaFK7LM5eBMn2.QbfzSnZfQ2rP19IgF1TORDZSViJhFvxhH9ek5nlyUbznFDCCMURNF1zjwHRBhCzaFCGzeoRBF12NQK6CUvgNF6xLMQQxqGzbFCQu_VNN3ugaYVH1K0f9UuSfsQzMQlRZWkeHLbNoFUrJFO.G82Y0WCl63tmJRVwDYDTB_smWIoEZ3vo.VvmPAOrEJ5N7iDRiQorcu9Y4AV2AVk.d39fHR0zriHfnMDW.Js0T5Kq4JPzzwuj.J2x03YZeVjTzp0q.Js0T5Kq4JPzzwu.J3kJAA9msFIr4plL.Js0T5Kq4JPzzwu.YV0ZnY9zbRjLnKv0.MUQ_g9LTs0GTRKsN1mraHOp2siJs3Uwv3DfCauGaMCJOImIwpmYwACGdRjS.sveCICSNnVYftuQ5WDhyiuq.M6AdKJe0smYXMb0C.KwMtuQ5WDhyiuq.M6Adh_G_JCRbHuQBZoqkrAVDJqDMWGWVMUJaQFq4WOEnHOl0jsQyHsVoqOiOJCrbHAQoJ_06qaZ0JuanjuA_JsVdrqKXWuLurpQUvvHMK73iexmt1NnYFjL4rrlC9EvhgFiLQNXRqq3qqGWmbPHShyCRY6ra0lG7enug5dewmFYjFKivLoCwSSDvvLQ6vaWHJkVnWFWSWsWuHGAqjaWxJkE0Wk1LJkAZJqQBMWTARkJS1swXC6YVKbr6AVkhhVRxUVJoRwwBs6S6Wlec.mw0wCpUpYb7QGWmrA3aqR7uqaAnrsACgcePRD3.RKuLhCxTMPz2QBQB3vJ7tCRGZ1efRol.RbO0hCmLw1zb8_GB3c2bRb3z5KSXtKR6wc6yQoqNRvpnhIyPwn2fFCGzdbSGtKmLR6bCRCSStKJNR.RbMb9N3bzTzbR43c2fFDcCRKebtKmLw4R2MD7N3KzB4Pe2Fvl.3CUghCpzFPzOFHaBRoZNMCfSzbzuw12BQDtCFbrjtKyjR4RjMKaNMbNnzbNuRc2XwC_CFKx6tKT2wd7BFUYG3cf._bABM63.MvhTM1eNMDVLMIY9hCGSRPf756WBFDSOtDuuMPeLMvlLMHYvhCfjQ1f7_OqBFoVutDuj3PeLwKxOhIwuRc2Lw6Aze6rjtKN2MP6T3o7NFbrOhIYB312jFClzeUw2tKNSR16j3vqNwKp2QMRuRCWNwCJ7zvJjRP26FDPCQCe7wvWLQIp9h6YTFPfS_vqBwUYutoojw67NwUpGh8N_h6YZRcfaZCVBwomdtokyMoA6tUY2h8fPMP26Rv3z_DR9tUwPwn6LMPe6Fombh8f6R126QC2SzvrfF1203vbCQDaNwvmOh8203P2CQDEz_UNatUmbwP6X3v9NQKr5h8yjR12SMbxvzvw7w6wPFvKCw6wOtUJZwMRTQDlNQUwnzvYaQP2SIDKCwDxutUrf35LBwDf9t6J74ce0FbJftoMTRKV6tUr0Q.R0RbwLt6SOene4FU3.ID6N8neeFD7L88NXh6TCFnfygceytUeXwqDFqawFEYfHqRyQxCpirar8BbpHrAm3Em4Bqal6HAQmJxLcWGVlJG";
if ($_ts.lcd)
    $_ts.lcd();

if($_ts.cd){



    (function(_$aa,_$fF){var _$eG=0;function _$_a(){var _$_i=[69];Array.prototype.push.apply(_$_i,arguments);return _$iv.apply(this,_$_i);}function _$jv(_$_G){return _$_a;function _$_a(){_$_G=0x3d3f*(_$_G&0xFFFF)+0x269ec3;return _$_G;}}function _$kz(_$_a,_$jZ){var _$$4,_$dW,_$fT; !_$jZ?_$jZ=_$gF:0,_$$4=_$_a.length;while(_$$4>1)_$$4-- ,_$fT=_$jZ()%_$$4,_$dW=_$_a[_$$4],_$_a[_$$4]=_$_a[_$fT],_$_a[_$fT]=_$dW;function _$gF(){return Math.floor(_$_A()*0xFFFFFFFF);}}var _$jZ,_$$4,_$$C,_$$g,_$d7,_$ji,_$ga,_$_A,_$gm,_$j$;var _$$8,_$hN,_$kB=_$eG,_$ir=_$fF[0];while(1){_$hN=_$ir[_$kB++];if(_$hN<12){if(_$hN<4){if(_$hN===0){_$d7=window,_$ji=String,_$ga=Array,_$jZ=document,_$_A=Math.random,_$$4=Math.round,_$gm=Date;}else if(_$hN===1){_$j$.lcd=_$_a;}else if(_$hN===2){_$$8= !_$gm;}else{_$j$=_$d7['$_ts'];}}else if(_$hN<8){if(_$hN===4){_$j$=_$d7['$_ts']={};}else if(_$hN===5){_$iv(69);}else if(_$hN===6){_$kB+=2;}else{_$$C=[4,16,64,256,1024,4096,16384,65536];}}else{if(_$hN===8){ !_$$8?_$kB+=0:0;}else if(_$hN===9){return;}else if(_$hN===10){ !_$$8?_$kB+=2:0;}else{_$$8=_$j$;}}}else ;}
    
    
    
    function _$iv(_$gH,_$hu,_$iB){function _$$o(){return _$c$.charCodeAt(_$kp++ );}function _$jr(_$_a,_$jZ){var _$$4,_$dW;_$$4=_$_a.length,_$$4-=1;for(_$dW=0;_$dW<_$$4;_$dW+=2)_$jZ.push(_$eu[_$_a[_$dW]],_$$i[_$_a[_$dW+1]]);_$jZ.push(_$eu[_$_a[_$$4]]);}function _$_H(){return'\x74\x6f\x53\x74\x72\x69\x6e\x67';}var _$_a,_$jZ,_$$4,_$dW,_$fT,_$gF,_$eG,_$kB,_$$8,_$_i,_$hN,_$ir,_$fP,_$am,_$_q,_$$i,_$cI,_$c$,_$cB,_$kp,_$hR,_$cy,_$eu;var _$jt,_$_u,_$$x=_$gH,_$aC=_$fF[1];while(1){_$_u=_$aC[_$$x++];if(_$_u<97){if(_$_u<64){if(_$_u<16){if(_$_u<4){if(_$_u===0){_$$4[0]="gl}y|sMnyn}`7`gyn{b`U`jomb`{l}yn}?f}g}hn`RGFBnnjL}ko}mn`m{lcjn`n}mn`yjjfs`9`f}hanb`a`~ilg`Y7`mnlcha`dich`mozgcn`{byl=i|};n`V`nyla}n`5`yzm`u`{iiec}`ih{fc{e`l}jfy{}`4`lioh|`mnynom`hi|}Nsj}`nyaHyg}`{yff`l}mjihm}N}rn`nsj}`a}n;nnlczon}`Z`mjfcn`y`mfc{}`yjj}h|=bcf|`fi{yncih`hogz}l`W`ihfiy|`]`bl}~`mjfc{}`~oh{ncih`hyg}`ml{`niMnlcha`&`ch|}rI~`zi|s`y{ncih`mnsf}`ihmozgcn`ij}h`y||?p}hnFcmn}h}l`m}n;nnlczon}`jlininsj}`bnnjm4`#`ymsh{`|cp`l}gip}?p}hnFcmn}h}l`a}n`chh}lBNGF`jynbhyg}`2*`ihncg}ion`a}nNcg}`ih}llil`;{ncp}RIzd}{n`}rn}lhyf`mozmnl`ncg}Mnygj`?p}hnNyla}n`jij`l}gip}=bcf|`{ih{yn`m}yl{b`fi{yfMnilya}`e}s=i|}`c~lyg}`BNGF@ilg?f}g}hn`a}n?f}g}hnm<sNyaHyg}`}p}hn`(`l}mjihm}`ihjlial}mm`a}n?f}g}hn<sC|`w`dypym{lcjn4`b}y|}lm`\"`izd}{n`ihl}y|smnyn}{byha}`zonnih`..-`jlini{if`{yhJfysNsj}`om}l;a}hn`{ihmnlo{nil`n}rn`bnnj4`)`pyfo}`oh|}~ch}|`{fc{e`l}mjihm}Nsj}`bc||}h`nij`lyh|ig`}pyf`jyl}hnHi|}`?e{J`~fiil`m}h|`X`ihfiy|}h|`|i{og}hn?f}g}hn` ~lig `mkln`hi|}Hyg}`~lig`chjon`%`v`mnlchac~s`e}s|iqh`bimnhyg}`hiq`bymIqhJlij}lns`ijncihm`gyn{bG}|cy`Gynb`mbiqGi|yf>cyfia`jylm}`RGFBnnjL}ko}mn?p}hnNyla}n`))`pc|}i`cgya}`{}cf`m}nChn}lpyf`ihyziln`a}n=ihn}rn`pcmczcfcns`|i{og}hn`{yhpym`ch|}r}|><`BNGFA}h}lc{?f}g}hn`niFiq}l=ym}`zym}`6`L}mjihm}[Nsj}`mozmnlcha` ym `jiln`Gc{liG}mm}ha}l`ihmo{{}mm`mnynomN}rn`mny{e`#bl}~`{f}ylChn}lpyf`#ihmozgcn`}h{nsj}`ymmcah`l}mjihm}RGF`m}n`{nf`{fim}`g}ny`j~~*`}r}{`{ihn}hn`chn}lhyf`ihfiy|mnyln`#y{ncih`j}l~ilgyh{}`giom}gip}`g}nbi|`{fih}Hi|}`l`gyr`#ml{`l}mofn`nb}h`cgjiln`|ynym[nm`*`$_h|`c`5 M}{ol}`f__`g`ynny{b?p}hn`|yny`jl}fiy|`b}cabn`bcmnils`j~z,_*`{yh|c|yn}`ion}lBNGF`Ip}llc|}Gcg}Nsj}`~ihnm`V\\l\\h9WvV\\l9\\hW`'`$_SPNR`ynnlczon}m`jl}p}hn>}~yofn`gihnb`~cffMnsf}`~oh{ncih `dmih`bimn`m}nCn}g`m}nNcg}ion`yo|ci`?f}g}hn`[`giom}|iqh`cmHyH`{igjcf}Mby|}l`giom}oj`yqycn`fche`qc|nb`gyn{b}m`~}n{b`}hog}lyn}>}pc{}m`|}~yofn `x`~lyg}m`j~y*`nio{b}h|`ncg}`fiy|`{byl;n`___NM___`8`a}nCn}g`g}|cy>}pc{}m`|}m{lcjncih`jimn`$_nm`@oh{ncih`yjj}h|`dypym{lcjn4 pic|V*W5`$z_{yffByh|f}l`L}ko}mn`mnijJlijyayncih`A}nPylcyzf}`G}|cyMnl}ygNly{e`B}y|}lm`{lsjni`lqy*`$HQ?/HtLeSdbgStG.`i~~m}nOhc~ilg`Uizd}{n ;llys]`{bcf|Fcmn`hogCn}gm`y||}|Hi|}m`;dyr l}mjihm} zi|s |}{lsjncih ~ycf}| [ `a}nMiol{}m`|ys`m}mmcihMnilya}`jyl}hn?f}g}hn`~lig=byl=i|}`ncg}Tih}`m}f~`hoff`m{liff`i~~m}nS`i~~m}nB}cabn`l}nolh5`fi{yf}`j~z*`yziln`BNGFIzd}{n?f}g}hn`}h{i|cha`a}nL}mjihm}B}y|}l`Y`{b}{ezir`n}rn)jfych`J`g}mmya}`~ly{ncihyfM}{ih|>cacnm`__#{fymmNsj}`#m}yl{b`jylm}@ligMnlcha`6|cp8C?26)|cp8`j~|*`izd}{nMnil}`hogz}lchaMsmn}g`~y*[`ly|ci`;LL;S_<O@@?L`niOjj}l=ym}`Oh}rj}{n}| nie}h `nio{bgip}`z`Oh}rj}{n}| n}gjfyn} mnlcha }h|cha`z}ny`~cffN}rn`l}nolhPyfo}`yfjby`}llil`qlcn}`i~~m}nR`{f}yl`s}yl`~lyg}`ip}llc|}Gcg}Nsj}`j~}*`ml{?f}g}hn`niAGNMnlcha`{yf}h|yl`bymb`cn}gMct}`ayggy`_`yh{bil`ko}lsM}f}{nil`>IGJylm}l`#chh}lBNGF`{l}|}hncyfm`zynn}ls`#ion}lBNGF`p|@g`nlyhmy{ncih`}m{yj}`loh`$`{yjnol}`l}gip};nnlczon}`#pyfo}`a}nMby|}lJl}{cmcih@ilgyn`@L;AG?HN_MB;>?L`jylm}Chn`p}ln}rJim;nnlcz`ynnlczon}Hyg}`$+_>CP`$z_jfyn~ilg`m}nL}ko}mnB}y|}l`ynny{bMby|}l`{bylachaNcg}`l}gip}Cn}g`a}nIqhJlij}lns>}m{lcjnil`nio{bmnyln`}r}{M{lcjn`$zg@*yRTfLgfPsOBD`+`y{im`VnbcmW5`s`#hi|}Pyfo}`Gc{limi~n(RGFBNNJ`{ihnychm`e}soj`i~~m}nQc|nb`mby|}lMiol{}`yjjfc{yncih)r[qqq[~ilg[olf}h{i|}|`lqz*`izd}{nMnil}Hyg}m`$_SQNO`a}n<ioh|cha=fc}hnL}{n`V^\\mXWvV\\mX$W`iqh}l?f}g}hn`#ih{fc{e`_$l{`fi{yf>}m{lcjncih`{l}yn}Mby|}l`yjjfc{yncih)rgf`5 }rjcl}m7`ni>ynyOLF`j~{*`lq{*`P?LN?R_MB;>?L`-d};F}Mmy0`U*[3y[~;[@]`$z_m}noj`WZ }rj}{n}| `__jlini__`fys}lS`@fymb`bvva`MN;NC=_>L;Q`\\uV(Y9W\\w`a}`h fyha7\"tb\" `dypym{lcjn\" `a-`}L(r{igl`oh`T2RBDDS(zg@*yRTfLgfPsOBDVW`__l{}QZz__=aQlz}`l{pvu8izly}ly``jfoachm`]86c86)c86!U}h|c~][[8`cnmaihhy~ycf`NE_C@`l}nolh h}q yV`}fm} `NE_JIMN@CR_IJ`NE_=FIM?_<L;=?`|}~ch}Jlij}lns`bmyf~[}pyqe{ibm[r)hicny{cfjjy`fys}lR`nbjn)m)4}oh{ln(}`Gc{limi~n(RGFBNNJ(+(*`{yh{}f<ozzf}`{}ffofyl`NE_@OH=NCIH`~chyffs`{l}yn}?p}hn`hih}`i~~m}nF}~n`yff`f}p}f`bueziveTvir}hrgv`5 Myg}Mcn}7Hih}`}pyfoyn}`NE_N?GJF;N?_B?;>`mlyzffil{m`ij}hZ`y||<}bypcil`gnc(cpa(i){fhciham(jd`A}n;ffL}mjihm}B}y|}lm`E}sziyl|`ff;j`Hogz}l`l|`|}pc{}gincih`G?>COG_CHN`gofncjyln)~ilg[|yny`n}rn<ym}fch}`n<`V6I<D?=NW`n}rn)dypym{lcjn`_jsfqyalbc}n{L|i}lnlyMZn_}yjsfcqalLb}nl{|iM}}l}nfMn}i{_ljZsfqyalbc}nmL}oZgf_yjlscqnaLbi}l{l|J}~}il;l{ginhcjZf_qylsbcna{Li}}ll|{Li};l{|inhc`FIQ_CHN`NE_P;L`efy`wuW}Vb{ny{w5Wqi|hcQ ~i}{hynmhc qi|hcqV hlon}lusln`qcgyr`a}n;ffL}mjihm}B}y|}lm`byh|f}l`T2RBDDS(HQ?/HtLeSdbgStG.VW`svisible`#l}gip};nnlczon}`;dyr l}mjihm} zi|s cm hin }h{lsjn}|Z l}mjihm} f}hanb4 `NE_KO?MNCIH_G;LE`m{l`~il?y{b`{bcf|l}h`bip}lvih[|}gyh|vhih}vyhs`{ym} `nAA}}}lhGyCfA>}Z`0~1,030/0}1.0+1.030~0}`#{iiec}`jncih`lh nsj}i~ __`a}nJylyg}n}l`jj}y`Gmrgf-(RGFBNNJ`BCAB_CHN`i 1nq`#a}n;nnlczon}`|}zoaa}l`|i{og}hn[~lyag}hn`io`m{l}}hR`uf}pn` |i `fi`lyzhicn`fin{cyZibh~lZ}hc}hNlGByF{ZinhclZ{m}ZymblZ{{ifhecZ{fpoyj}yZhnybZgb}niZmmbnigh}yiZljbnyZZmjbnliif{ZinylnocnzZ}im}olnGBFNhZmigoczhniZP|y}}fZo~l}}}lllLZFOiZ{|}ohgLnCO`~C}f|hyb`ljm}`m}f}{n}|`#ynnlczon}m`NE_>?@;OFN`ubm.mr4p}ai`i{moj`6?G<?> c|7`Oh}rj}{n}| nie}h4 `Gi`l}mjihm}<i|s`m{l}}hS`NE_NLS`h}||cBmg`a}nMojjiln}|?rn}hmcihm`}rj}lcg}hnyf[q}zaf`[WB=MvGMvNAV Y(]-[*U(\\.`VloZf~ yl}gyH}g Z}~nylom} W87u `ljmy`=iohn`y|yne[hyon`-/`#y||?p}hnFcmn}h}l`ligr{L(y}Jfyf}s l,A= hilnfi+(`{ilf>in}bj`{fc}hnS`>}pc{}Ilc}hnyncih?p}hn`mbc~n`|}pc{}ilc}hnyncih`olfV#|}~yofn#om}l|ynyW`5 jynb7)`-2-0-*-2`__Tsgz3jMT/_;_i`sKHJHNN`bnnjm4))`y;fh}slm|H}i`{fymm `pyl mozgcn7~oh{ncihVWu~ilVpyl n7{ol_}f}5n!77|i{og}hn&&V!n(nyaHyg}vv\"~ilg\"!77n(nyaHyg}(niFiq}l=ym}VWW5Wn7n(jyl}hn?f}g}hn5n!77|i{og}hn&&n(mozgcnVWw5`BNGF?gz}|?f}g}hn`#l}jfy{}`fjnyi~gl`ftrc5anzr;|pncv|{`#jlini{if`020+1,0.110+1,0/.-0~0}0-1/1,1,0/0}0-13`{bylm}n`ohc~ilg,~`{me`kl{efg>i?rnbQDcB;j+mPSEO-L@GKq2CA~JI3,zpFHd[1tR<yMho*N=0as_.T}/|x!:$%^&XVWY768(9)45uwU]v `z}~il}ohfiy|`jijmnyn}`cK{ocegN`om}Jlialyg`NE_?FM?`m}f}{n[`#niMnlcha`glc~hi=|fi`#chm}ln<}~il}`WY|\\V)\\ri~}lc@`0-1,0/0+1.0/./121*1,0/1-1-030~0}`c~V`liin`lnus}lon`wkh~.nkilp`1.0/121..-0~0}1.0/0}1.`m|c}}jryfcsahf~ay`NE_CH`}li`zch|<o~~}l`yzmifon}`NE_?RJILN`GMcJhiln?}hpn}`igcn`#|}ny{b?p}hn`zamioh|`#m}nChn}lpyf`yzion4`_$|z`pyl {ol_}f} 7 nbcm5`{fih}`>Ck}Lnr}`{bylacha`mnhciJb{oiNryGmg`jih}}ZypZfbmqiiGy|>fycifZa}lfj{yZ}mycmhalZf}yiZ|innMclahjZilZj}m;nnncloz}naZn}n;lnzcnoZ}}lig}pn;lnzcnoZ}omgzncMZzocgZnhiomgznccZmhl}<n~}liZ}jy}j|hb=fcZ|}lfj{y=}cb|fyZ||p?h}Fnmc}n}hZl}lig}pp?h}Fnmc}n}hZlnyynb{p?h}Zn}|ynb{p?h}ZnojbmnMnyZ}}lfj{yM}yn}nmZinJjilyjyacnhi`MQ`;ziln`}gilb{`ff`filnhi=a;(f`Oh}rj}{n}| {byly{n}l4 `!`c}hlhrNn}`~ilg?h{nsj}`In}A`=slnjEis}yJlc`+,1(*(*(+`zz2,ed`6![[`l}~l}mb`l}~}ll}l`*(*(*(*`yLf}yJsf(}Llf}Jy`Giom}`h|ay`Gmrgf,(M}lp}lRGFBNNJ(0(*`zQR}iGaF`fz`{saDY`__`hn}jmly}eZl__mh_Zh_;mjjh}N|r}Zni}}Q<zilmql}`NE_?RN?H>M`~cffL}{n`|}~ch}Jlij}lnc}m`NE_N?GJF;N?_N;CF`\\hUnypc }i{}|]\\`Vyhs[jichn}l`|zf{fc{e`ymsh{ `chmnyh{}i~`~cf}Hyg}`#mozgcn`0,0+0.`-2`abn`ni@cr}|`Gmrgf,(RGFBNNJ`qz}l|pcl}`yJfyf}s l,A= hilnfi`gBict}|h|`mm`}nb}lh}n`#ynny{b?p}hn`,+`NE_=;M?`c|utB|gwy~`Gmrgf(RGFBNNJ`n}rn)bngf`Vyhs[bip}l`gticpcmczcfsnb{hy}a`atfsjw`ojbmiHcnc~y{cnhi`ylaog}hnm`mnync{`l}cmhi`neyyhfMi`{iiec} |cmyzf}|`SL;LI`l}nolh yUz]V`nl}f;|fi`Izd}{n(Chd}{n}|M{lcjn(}pyfoyn}`#|i{og}hnOLC`mn|yyhhf}i`sl}nny`x-UW?-}aTomg`NE_QBCF?`{yffzy{e`zo~~}l>yny`ncg}ion`_}M}fchgoC_?>L_{}li}|Zlm_f}h}ocZgy{ff}M}fchgo`n}e{iMz}Q`'yf}lnZ {ih~clgZ jligjn |cmyzf}| ~il'Z |i{og}hn\\(fi{yncih\\(bl}~`oib{iJhcmn`n}rn)}{gym{lcjn`>@Jb`@fiyn-,;llys`fynh}gcl`chyeyry|yfkEfqfu`zfo}niinb`b_j|ch}cnc~l}`ij}h}l`flOfyhcacl`#+1}`^\\mYv\\mY$`-+-0-1-1-1-,-+-0`6![[Uc~ an C? `pc|}i)iaa5 {i|}{m7\"nb}ily\"vpc|}i)gj.5 {i|}{m7\"yp{+(.,?*+?\"vpc|}i)q}zg5 {i|}{m7\"pj2Z pilzcm\"vpc|}i)gj.5 {i|}{m7\"gj.p(,*(2Z gj.y(.*(,\"vpc|}i)gj.5 {i|}{m7\"gj.p(,*(,.*Z gj.y(.*(,\"vpc|}i)r[gynlimey5 {i|}{m7\"nb}ilyZ pilzcm\"`Oh}h{fim}| mnlcha(`U\\\\\\\"\\o****[\\o**+~\\o**1~[\\o**3~\\o**y|\\o*0**[\\o*0*.\\o*1*~\\o+1z.\\o+1z/\\o,**{[\\o,**~\\o,*,2[\\o,*,~\\o,*0*[\\o,*0~\\o~}~~\\o~~~*[\\o~~~~]`y{{}f}lyncihCh{fo|chaAlypcns`?hn`L}hl|J}{l}iCm|m`#jiln`JIMN`{b}{e}|`rq`oh}m{yj}`n{o|`s7Y9eb[xtBucweb`lluhi`mqcn{bV`BCAB_@FI;N`jon`!cgjilnyhn5 pcmczcfcns4 pcmczf} !cgjilnyhn5 qc|nb4 +**% !cgjilnyhn5 t[ch|}r4 ,+.1.2-0.0 !cgjilnyhn5`NE_FCN?L;F`NE_QCNB`Uhyncp} {i|}]`l}mjihm}OLF`1,0/0}0.0/1,/*1,0~0-0/1-1-.30.`l|pcl}`q}zecn=ihh}{ncih`Ochn2;llys`nbliq `i~~m}nNij`oh}rj}{n}| hogz}l }h|cha(`L}a?rj`,`}|iGl}|y}L_ri~}lc~_Z__ri~}lc~__`)4om}l_~ihnm`!h}q ~oh{ncihVWu}pyfV\"nbcm(y7+\"WwVW(y`Vo~{hcnhiWVu yp l y 7}h qy>}nWV 5}|ozaal} 5}lonhlh q}> nyV} W [ y 8*+5*VwWW`-+-+,}-0-1-2`mo~~cr}m`mlazvj-vl}{,*,*vyhs`<z|`p}ln}rJim;llys`ohc~ilgI~~m}n`tphgnn`ehcF||y`\\zU^8]X8VU\\m\\M]X9W6\\)`}hyzf}P}ln}r;nnlcz;llys`yjjfc{yncih)dypym{lcjn`_zfyhe`nws __inwsfrjVdhfyhmCjDbd`nGyo`Jligcm}`NE_IJ?H_<L;=E?N`.2.-20`l}jjylq[hicny{ifv|y}bl}ggybZjilj[}aylinm[mnh}p}[ahch}nmcf[nh}g}f}v|y}bl}ggybZl}pfim}l[flo[nh}go{i|v|y}bl}ggybZn}mlyb{[nh}go{i|v|y}bl}ggyb`y{{}f}lyncih`;dyr l}mjihm} zi|s l}jfysZ }rj}{n}| MH4 `dAtcu~c|p}rt@qdtcgtc6}ecj=xde`jyPj` }rn}h|m `.10+0|0/1*0+0.`kl{efg>i?rnbQDcB;j+mPSEO-L@GKq2CA~JI3,zpFHd(1tR<yMho*N=0as_.T}/|uwvx !#$%VWXYZ[579:U]^`031.13`m}nNcg}`pyl a}n;nnlczon}7~oh{ncihVhyg}Wul}nolh {ol_}f}(a}n;nnlczon}Vhyg}W5w5`j{=oyfmm`{eae{Lqh{k`afizyfMnilya}`}cf{`NE_MOJ?L`#ij}h`-,-/`}gyh`}nyofyp}[goch}f}m`gmmpccfzcc{nbsay}h`+0`p}ln}r;nnlczJichn}l`L}mjihm}`NE_IJ?H_<L;=?`U5&]`ga|u_t{{wqpNy{h/z`NE_L?NOLH`NE_OH;LS_JL?@CR`ua}nrspc3r}ai4p}ac`{l}yn}>yny=byhh}f`#l}gip}=bcf|`lyha}Gyr`M}h|`ic| `:|}zoaa}l`bn|cQfcypy`{l}yn}I~~}l`1*1,0~`}o~fynnyMmnZodI}z({mnJ}lniinn}sIjn~yZliiz}qlmp_}?Zhqne}cz}nkLmon}f@}cmMnsZ}igjh}i|l}y{nbyp}c|{}bqay}hyZnJ>b(,ijnlsijny}|(y|nJMbiZ{o}l~<~o(}jlnliijn}sb(y{}hNa}sZjyqn}lb<}|lac{}bZgl}im(c{yZmjimlqg|y_ah}y}lh_fy}z||iZg{}o(hznsi(|grm[{[{y}}lfiylnseZ}n}}rylfh|(|;p@iynl}ciZaMFiiohaOcfnmciZoM}l<{~o}~mlbZGiiqf|>yfciy|aiZg{}o(hmn}}{finhcs(jn}}n>fyZcAMJPny}n?lfh}}hgMnP(OAH__CNN?S_JDI?<<=IN>OCH<HIA|RiZg{}o(hin}hfmn}c{{ibhay}hiZ{|}ohgzni((|msfn}sy({zleia|o<hhf|}|G}iiZ{|}ohg|ni(g{}o?hfn}}hginh(mlc}Zt=}pyyh}mhLl|c}=hia}hrn>n(,ijnlsijnq}}(cznenAC}ag}yn>yyZBO>}=zQn?Zr;=N>};{Minhcl(ijnnsi(jl}i}pg<}fZ>iizfqih=yy|zfyfZ{_eDQMRiZ{|}ohggnm(j=my{FeilQhyacIhZ~=~=MbMmy}lonfL|}iZg{}o(hmni{flhfac}?gfn}(hsmfn~}i(PhynylhcongHc}{loZh@c{injhl(iinn}s(jhz|cbZl{}i(gjy(jmCnhfyMfnn}ymZHc}iQ|nb}cym{jI}zZ{dn}}(ym|fiZg{}o(h|ny}o~=fbnmy}l_n_Zl~}cr~_ii_hZmgm}}yZam_i_oa_i{mo}_lc}ohnjfZi=?mp}n}(hijnlsijnc}h(=cfn}i?mhpn}}ZnanG{y|b=}LMoMmfZ}nHci{~ycinhcNZGBlFy@Mg}}fn}?hgn}l(ijnnsi(jb}Jyimnc}hylj=ln}oiZ{|}ohgzni((|isihog}mh}lnZ}~Im~}{}lyhh=mpLy|}}hhlach=nin},r{>bZgl}izZdIn}({ijnlsijn_}_(~|c}Mh}}}nlnZ_|_oig{n}(hf~}c}=yl|n>}}yZnzqe};coni|=cni}h(rjnnliijn}sf(i{ZmA}J}}nNl}~mmZn|Gc}iyh=infllfZ}n}}rylfhm(MCl}{ylbiJ|p}chlmCfnfyZ}N|n}Nr{leymFncl(ijnnsi(ja}N}lney<{|sZC{|oihgn}}(fmn}c{Zi|hoig{n}(h|zsin(sm(ff}}c<hyle}iZ{|}ohgzni((|msfn}s}(rnfnc;FayhZmMn}{}llhcIn}yhinhciZ{|}ohgzni((|msfn}sc(hg|QncMbjZ{}b}hMnsmbc}nmnOy}hlZ{i}lhl}ZiQlE}czfny@ZaLm|}}yil|Gl}n;fc}{aJ}y_Zi_ljy}}ZlJl~gi{y}hcJhycngNacZhlj~}giyl}hZ{{|oihgn}i(|zmsn(}s(fNg}mMrcn;t|}mdnoiZ{|}ohgzni((|isyhajM}PZlAyAcj{bfm}?hgn}l(ijnnsi(jg}Li}t}kmoincJ}hln{FeifZc=>{yeZnGyc}y|{?lhns}jp|}?Zh_n__k$icib*-_0_$Z_{|oihgn}h(gimi}opg}i}Z~<}iClnhymJflfjing}?hpjnl(iinn}s(jSEO?BJNZ@GlF}yMg?}fn}}hgjnl(iinn}s(jzqe}Lc}n}kmoonf@{flMh}Z}n}}rylfh`|lyq;llysm`|yny4`l}nolh `l}jfy{}=bcf|`o;c|Niyle{cFnm|Z`nii`/1.|/*0{0+130/1,,}.~.-/2`~oh{ncih {f}ylChn}lpyfVW u Uhyncp} {i|}] w`J@>J(@>`bnnj4))`a}nIqhJlij}lnsHyg}m`****`h}rnMczfcha`cn|GmZFCcihaZ}F|cihaoZn;lbciZtA}<}ynOmm}C}hlZ~LiF}yn{obh`Q=nf`}hyzf}_`|cmjyn{b?p}hn`|}|yiF}ayJn}Mhy{MjjyZl}f|hyB|yiFhy{MjjyZnh}g}{yfj}L}ahyb=}nynMs|y}LhIhy{MjjyZnh}g}{yfj}L|h}Mhy{MjjyZjOs}Ehy{MjjyZhqi>s}Ehy{MjjyZnoImo{i@hy{MjjyZe{cf=hy{Mjjy`NE_;MSH=`yo|ci)iaa5 {i|}{m7\"pilzcm\"vyo|ci)qyp5 {i|}{m7\"+\"vyo|ci)gj}a5vyo|ci)r[g.y5yo|ci)yy{5`10`nl}y`.{030/0,0+0~.+0..|0+1.0-02//1,0{,{.{030/0,0+0~.+1/1.0~.0030{0{/~010+0|0/.+0-0-0~1/0}1..30}000~,{.{030/0,0+0~.,0+0-0z1/1*/~.,0+0-0z1/1*,{.{030/0,0+0~.,0+0-0z1/1*/~.10/1./00/1,1-030~0},{.{030/0,0+0~.,0+0-0z1/1*/~.{0~0+0.,{.{030/0,0+0~.,0+0-0z1/1*/~/,0/0-0~100/1,13,{.{030/0,0+0~.,0+0-0z1/1*/~/-1.0+1.0/,{.{030/0,0+0~.-0+0{0{/,0/1+1/0/1-1.,{.{030/0,0+0~.-0+0{0{/,0/1+1/0/1-1..+1-130}0-,{.{030/0,0+0~..0~110}0{0~0+0.//1,0{,{.{030/0,0+0~.10/1./*1,0/001-,{.{030/0,0+0~.10/1.//1-0/1,.30}000~,{.{030/0,0+0~.10/1.////.3..,{.{030/0,0+0~.10/1./00/1,1-030~0},{.{030/0,0+0~.30}1-1.,{.{030/.,0+0~.{0~0~0z1/1*..0}1-.+0.0.1,0/1-1-,{.{030/0,0+0~.~1*0/0}.30|0+010/.~0-1,,{.{030/0,0+0~/,0/0|0/0|0,0/1,/-0/0{0/0-1.030~0},{.{030/.,0+0~/-0/0}0./,0/1+1/0/1-1.,{.{030/.,0+0~/-0/1..20~1-1..+0.0.1,0/1-1-,{.{030/0,0+0~//0}030}1-.z/*...0,{.}0~1.030013.{030/0,0+0~,{.}0~1.030013.{030/0,0+0~./12`cm@chcn}`@FI;N`FIQ_@FI;N`}rjiln `p}lmcih`NE_H;G?`l7'g'`Z olf4 `@yp}`~ihn`cgjiln `\\zVVmozgcnWvVij}hWvVfi{yncihWvV{iiec}WvVihmozgcnWvVy{ncihWvVbl}~WvVm}yl{bWvVml{WvVm}n;nnlczon}WvVa}n;nnlczon}WvVOLFWvV|i{og}hnOLCWW\\z`NE_HOFFCMB`NE_=IFIH`$z_ihHyncp}L}mjihm}`bnnjm4\\\\`NE_=FIM?_<L;=E?N`NE_M?GC_=IFIH`;||}Mlyb{lJpi|cl}`{y{b}_`|_`l}|cl}{n}|`|__HKG__?FFB_EFK@=@<I`>yn}Ncg}@ilgyn`Oh}h{fim}| l}aofyl }rjl}mmcih(`^V94\\|u+Z-wV94\\(v$WWu.w`q}zecnLN=J}}l=ihh}{ncih`~oh{ncih \\MY9\\V\\Wu\\MY`M?H>`0/.00{0~0+1.`1-1.130{0/-|,,000~0}1.,|000+0|030{13-y0|0|0{0{0303-z000~0}1.,|1-031y0/-y-+-+-.1*12,,-}0|0|0|0|0|0|0|0|0|0|0|0{0{030303-{,~1-1*0+0}-}`\\o@?@@`chm}ln<}~il}`__l|pcl}}_ypofny`h~_njcl{m_l}pcl|z}q__Z{ho~_njcl{m_l}pcl|z}q__Z|}jjylqho_l}pcl|r~__Z|}jjylqho_goch}f}m__Z|}jjylqho_l}pcl|z}q__Z|}jjylqho_l}pcl|__Z}nyofyp}_l}pcl|r~__Z}nyofyp}_goch}f}m__Z}nyofyp}_l}pcl|z}q__Z}`+-(.,`wn{iaUna{pekj`cnL}`dCtp{Gxst~SCtp{Gxst~Me|N 2rexgtI 4~}ec~{ MXWRqxeN`f{fyyJhbgnZib_yjihgn`)N1;sNlriQrA|`BNGF?f}g}hn`V6I<D?=NW_>CP`1*03120/0{..0/1*1.02`/00/1,1-030~0}/{`#fi{yncih`NE_N?GJF;N?_GC>>F?`#m}n;nnlczon}`yjjfc{yncih)}{gym{lcjn`||Fc`t;`qcnbV`lazyV,.*Z++*Z/-Z*(.W`lni[igbgyb}}l[ym||biyoqc[`V^\\)XWvV\\)X$W`~{M}lbjy`2-2`ihnyiog{jinf}}`|cmyzf}|`n}rnyl}y`~f}bmeiizzkZ}`giom}f}yp}`hycdh}bm`|}pc{}C|`~cf}hyg}`NE_?I@`{i`}l}v`=;ialhin`U\\l\\h\\n]`{`#ymmcah`omfs`4\\|Y`a}n;nnlczFi{yncih`NE_=FIM?_J;L?H`NE_;>>CNCP?`NE_@IL`l}mifp}|Ijncihm`mnync{ `go|`>cmjyn{b?p}hn`0,`{l}yn}Izd}{nMnil}`0{0~0,0+0{.~0,0y0/0-1.,*,+-|,*,,1/0}0.0/00030}0/0.,,,*,0,0,*1.131*0/0~00,*11030}0.0~11,*,+-|,*,,1/0}0.0/00030}0/0.,,,*,0,0,*/~010{0~0,0+0{.~0,0y0/0-1.,*-|-|,*11030}0.0~11`i_r`/-030|.20/03-z/-030|/-1/0}-z.}/-030|/-1/0}-z.00+0}01/-0~0}01-z.z0+03/.03-z.00+0}01/-0~0}01.1.,-,---+-,-z.z0+03/.03.1.,-,---+-,-z.|030-1,0~1-0~001.,*/30+.20/03-z.2031,0+01030}0~,*/-0+0}1-,*.1.,-z/-/..20/031.03,*.{0301021.-z/-/..20/031.03-z/-/..z0+031.03-z/-/./-0~0}01-z/-/..00+0}011-0~0}01-z.{03/-1/-z/30~1//31/0+0}-z/-/./203020/03-z/-/./y020~0}011-0~0}01-z.0/y/-021//.03-z.0/y/30+0~1.03-z/-/..-0+03131/0}-z/-/..21/1*0~-z/-/..{031.03-z/-/./2030}010z0+03-z/-/./2030}110/03-z`yDyp`M}nL}ko}mnB}y|}l`#l}jfy{}=bcf|`NE_IJ?H_J;L?H`jyl}hn`|}~yofnJl}p}hn}|`qi`NE_;Q;CN`#jombMnyn}`o{n`?=FN?HL_II<QLLM_?HQ>C_I=QMF?I`gmCh|}r}|><`sc}f| `~clmn=bcf|`uj}les}ec`pfyo}`git=ihh}{ncih`bnnj4\\\\`njcl{MhoLhifynye`NE_N?GJF;N?_HI_MO<MNCNONCIH`|cmjfys`#bimnhyg}`NE_@LIG`Mnilya}`#jynbhyg}`chjonUnsj}7\"mozgcn\"]`bmyf@}pyqe{ibM(bmyf@}pyqe{ibM`[qm[|yny[jl}pc}q[}f}g}hn`cly~ym`NE_>IN`N`#mnijJlijyayncih`NE_NBLIQ`#ilcach`-`snc`jiq`#bimn`lyha}Gch`)|VY\\*W[U]3Y(y ~Mcy\\l|)Y\\`#l}jfy{}Mnyn}`}mmya}`}gilb=mm}f`Gmrgf,(M}lp}lRGFBNNJ(-(*`Chnf`#m}nNcg}ion`|}zoaa}l5_$|zV`gyl}`z}bypcil`NE_<CH_IJ?L;NIL`jy`}qmzin}l`{ihh}{ncih`{byly{n}lM}n` bimn `{yn{b`l}mqil<KK`}ahyb{sncfcz`#{fih}Hi|}`izm}lp}`q}zaf`NE_<L?;E_=IHNCHO?`0}0/11,*0~0{0./10/0,/-0~0-0z0/1.,21/1,0{`iyhzfly`}aylinMnh}nmcml}Jncez}q`gitLN=J}}l=ihh}{ncih`ynnlczon} p}{, ynnlP}ln}r5pylscha p}{, pylschN}r=iil|chyn}5ohc~ilg p}{, ohc~ilgI~~m}n5pic| gychVWupylschN}r=iil|chyn}7ynnlP}ln}rYohc~ilgI~~m}n5af_Jimcncih7p}{.VynnlP}ln}rZ*Z+W5w`Nryg`g)}V\\Y\\W|`fiy|}|`b$ii$e$Z|b$r$Z|m$r$Zco$}$Zf$lm$Zf$jm$Zf$lmZz$$ifaal}$Z;$R=NOFCZM;_R=?_;P_F;JMM_Z=;_RIBEIZMl$y}s|i=}|f;}l|y?s}ro{}nC|Nhcb@myl}g`e{ylNniHi>mg`ihojaly|}h}}|}|`jj`n}hyG {ycb}hO ch=5iidfty5t}P|lhy5y}Bpfn}{c y}H}oF  NlJ i/-N cb5hynibygF5 AgMly_n B}nnmL a}foly>5HClJ[icfba5n}Bpfn}{c yNF.  -cFba nr?}n|h|}B5f}}p_GhCc|5y?ML=ziniFiacnb< fi5|LIG bihysnO chi{}|L a}foly>5il|cM hy mbNcyE5hyyhy|M hyya gHG>5=>O b{h}{5ife{*,0+p_(+5+yMmghoEahyyhy|}Loayf5lCGF H;CNAH< fi5|yMmghoMahyHmgoF-F acnbp5l}y|yhB5f}}pcny{}H}obNhcM5=?y@ffyze{M5gyomahg?di5c}NofoaM hyya gHG=5lyilmcA nicb {=M@5sf}gF acnbL zini icFba5niM;G>[acncF acnbM5Gi =yMmhL a}folyB5RSScyoDhm5nmm5gyomahm[hy[moh.g5Ngag_h}gah}5aiFcb nyEhh|y5ycn}g m}h qilyg5hymmgho[aymmhh[goF.m5l}~cg[himiyj}{M5gyomahyMmhoH[gN-N cb5hi=ifIlOM[CNRcb5hl>ci |yHem bbM~c nf;5nyMmghoNaf}aoLoa}foly<5h}yacfI MNG5 CyFNhhc_a<AI nocm}|S 5MT@cGiyoQA_+<*2*-b5f}}ph[o}[}}loayf5lMM N}Gc|go=5oicll}H q}E5gbl}G hio|eflc ci<|fB5f}}pcny{F  N-,O nfylF acnb? nrh}}|5|}Bpfn}{c yNF,  /fOln ycFba5niLizinG |}oc5gl>ci |yMmh< fi5|ia|o5symmhm[l}~c{[hi}|mh|}f[acnbM5c@|hl}h5ni[iymmh{[edg[|}oc5gcgcoG5iLe{ sLJ =i<|f;5|hil|cf={i e}Loayf5lyMmghoMahyHmgo.[ FcFba5nymmhm[l}~cn[cb5hy;yJahySl}{5myyo5fH<G bihysnNI< fi5|[rmm5niHinyMmhsGhyygTlqysa5c}Bpfn}{c yNF-  -bNhc? nrh}}|5|m;fbs}{MclnjNG; nfH5ni iyMmh> p}hyayly cCOL5zini ii=|hh}}m |i<|fL5zini i}Gc|goC yncf5{cgcor}H5ni iyMmhA loogbe cCOM5NMP }chngym} }cFba5nAFI_clysb5{s~i}~5}[rmm[nfolnfyacnb>5B@c}Q;[15;T@QT<RIN_NhO{c|i5}}>ypyhyaclM hyya gHG< fi5|ymmhm[l}~cg[himiyj}{J5|yoy ei<ei< fi5|AF@[SThc<aEccybM[o+M[/,P,(F5[AT@cSahc<yEMcobM[/+P[(,5-}Bpfn}{cHyo}F} NlJ i/-N 5bcGl{mi~i ncBygyfysM5gyomahyMmhy@ffyze{M5NMG |}oc gnCfy{c;5|hil|cg?di5cyMmghoMahyHmgo-[5LNC =nMhi }}Mcl5~ymmhm[l}~cm[ygffy{mjr5m[nmg[|}oc5gAFM_hcyb}f}mL5zini ibNhcC yncf5{}{nhlo[siabn{c=5ife{jiycF5gohcoi_myMmh@5ifclc|hyM l{jc nf;5niHinM hy moAgleocb< fi5|NFSBTM Ei<|fA5_MbNcyM5gyomah}HHigo-__N5,l;zy{cb5hy[mymmhh[liyg5fiFcb n}NofoaB5KSBcc}/[M*F acnbF5hcm|s}~ liM gyomah;5 Ll=msynbfc}> 5<yMmgho ayMmhG |}oc5gymmgho[aymmhh[go/.b5hy[mymmhz[fi5|oFcgihmoM_l{jc5nMM Ni=|hh}}m5|yMmgho>ap}hyaylyLca}foly;5dhfyG fysyfygyG 5HyMmghoNaybVc}nnm5WT@yFNhhcBac}G[A[+<*2*-B5z}}l qNI5MMA/.;_ylVzh;l|ciI|WMM5gyomahM hy mcFba5nb={i ii{ei5s}bpf[}}h}on[cb5hHJG bihysnNIG |}oc5gAF@[ETNyhi[a+G[3,P.(>5il|cM l}~cM5gyomahcMbhfyLya}folyb5f}}pcny{F5[AT@yEiNahG[3+P[(,5,iHinM hy m}>ypyhyaclO  Ci<|fM5NMF acnb>5J@g?di5c}qny}b~lhihnq}L a}folyL5ziniHigoL->5HClJ[i}gc|goM5gyomahM hy moH/g5/MM N}Bpy snCfy{cF5fA{i.eL a}foly*_*25/}Alica5yihinm[hy[md{5e}NofoaM hyya gHG< fi5|CGCO?  RiHglfyB5KSBcc}1[M/< fi5|iHinyMmhsGhyygTlqysa ci<|fs5homilj[ifz{y5e}bpf[}}h}oh[liyg5foFcgihmoM_l}~cN5 GiGybnhIs NiHglfyM5gyomahyMmhoH[gF- pcFba5nyMmgho ayMmhH go/.M5ygnliAbn{cG |}oc5g}alica5yy{omfy~[hi[nsn}jM5gyomahM hy mi<|fm5ygff{[jyncfy5m@Ghchy}{J =L< fi5|T@yFNhhcBac}A_+<*2*-M5gyomahl;}gchhyL5zini ii<|f{5h}onsla[nicb[{iz|fr5m[nmb[y}spM5NMF acnbC yncf5{bNlyiF5h[rmm[ncfba5nc>zhfiL a}folyM5gyomah}<ahfyLca}folyE5 HiGybnhIsMNygffG |}oc5gsboj}lM5gyomahyNcgLfa}folyG5fysyfygyM hyya gHGH5ni iyMmhE hyyhy|O 5C}bpf[}}h}oB5f}}pcny{F  N//L gihyH5ni iyMmhE hyyhy|< fi5|yMjhysM5gyomahoJdhzyLca}folym5gyomahm[hy[moh.gpFF5_AyEhh|y5yyMmgho ayMmhL a}folyT5qysa[chI5}l>ci |}Mcl ~i<|fC yncf5{T@;EDN5Qi{lo}c l}h5qyMmgho?aigcd}Loayf5lCGCO?  Ri<|f;5|hil|c? igcdH5ni iyHem bl;zy{cO 5C=F >i=5go@onylG |}oc gN<P5pc[ir}ln{y5ny<ahyfM hyya gHG< fi5|ybmhm[hy[m}loayf5lHMgo-[5LHMgo-[5Nybmhm[hy5mMM NfOln ycFba5niLizinL a}folyL5zini icFba5nyBohyg5h}hfqaanicb5{@>}B;c/Q;[b5hy[mymmhf[acnbJ5yf}nA nicb5{HMgo-[5F}Bpfn}{c yNF.  /cFba5nsGhyyg lyMahgyT qysa ci<|ff5[aymmhm[l}~cf[acnbG5OC CR?F acnbL5zini ibNhcM5Gi ;i<|fJ5|yoy5eyMmgho ayMmhM5yjc{oi_mgMfy=fjym5hy[m}mcl5~P>G bihysnNIG |}oc5gnMzy}fM_yf5jigyhi{@5sf}gF[acnb~5ttms|[misjM5l{}}Mhhy5mf{{i,e+*50iLizin= hi}|mh|}< fi |nCfy{c;5clfyE5 HiGybnh s}Gc|goG5nisiFyyGolQ  -igihB5hym|n}= hi}|mh|}L5zini inCfy{cB5=NB hy5|MM NfOln ycFba nnCfy{cM5NMP }chngym} }iLyg5hiHinH mybe; ylcz {CO< fi5|b{~hrt[b}gc|goM5oH=ghi[|N-{5h}onsla[nicb[{}loayf5l}|y~fo_nilizinf[acnbH5ni iyMmhG ysghlyG5ysghlyM hyya gHG;5jj}f= fili? igcdq5y}bnl}i~nh}L5ayMmghoGafysyfygy}Loayf5llyyc5fl>ci |}Mcl ~i<|f=5iJ -LJ =i<|fG5 C;FNHHC5AyMmghoEaliy}[h}Loayf5l}nnm/.L a}folym5cjcl_ncn}g>5p}hyayly cyMahgyG 5H{M}lh}}Mcl5~iLizin{5locm}p~[hi[nsn}jM5BNc}cnp_pc5ib{~hrt5byMmgho af={i@ehi n;-L5zini ii=|hh}}m |}Loayf5lymmgho[a}h[ioh-g5LDAG bihysnNIG |}oc5gb=foibH o} }iFe{l5zini[ioh-g5F}bpf[}}h}oo[nfylcFba}nnrh}}|5|yMmghoIaclys}Loayf5lyMmghoMahyHmgo.[pFF acnbG5cSah}B_c2+-*_*,=<[fi5|@>MJybHiQp[/<AL5zini if<{y5e}bpf[}}h}oo[nfylcfba5ngar_bcc}F5fA{i.eF acnb*_*25/oAydylcnM hyya gHGG5fysyfygyM hyya gHG< fi5|ilizinh[goL-M5RNbcc}p_pc5iT@bThooShyA_+<*2*-h5ni[iymmh{[edf[acnb{5filimiH5ni iyMmhA loogbe5ciHinM hy msMzgfi5miLizinF acnbC yncf5{iFcb nyNcg5fo{mlpc5}}|y~fo_nilizin<5ybbmnc=ygifjr}yMmh< fi5|AFH_go}z_liLizinN cb5higihjm{y|}q[ncibnom[l}~c5m}Bpfn}{c yNF-  /bNhcm5gyomahm[hy[moh-gPF>5HClJ5iiDigbfly5cymmhm[l}~cf[acnbb5f}}ph[o}[}fz{y5eiFcb n}<ahfy5csGhyyg lyMahgyT qysa5cl>ci |}Mcl ~nCfy{cL5zini ii<|fC yncf5{yHohAgnicb5{iMshG zifc }>OA nicb {}Loayf5l}Alica yi<|fC yncf5{ymmgho[aymmhh[goF-5posih[mbnhcm5gyomahh[i}h[goN-{[hi5|iHinM hy msGhyyg lCO< fi5|af}mcl5~T@iSBoc}L[A[+<*2*-F5bincJ hoydczz5my}eplfc}fm5gyomahm[hy[moh.gpNm5gyomahm[hy[mbnhcF5 Ag?di5ch;ydcf}HFqjc5cyMmghoMahyHmgo.[ NbNhcM5gyomahiE}lhy<[fi5|cgcor}f[acnbH5ni iyMmhE hyyhy|L5zini iiHglfyC yncf5{}Alica ynCfy{cm5hy[m}mcl[~}gc|goM5ygnlT qysa5ciLizin= hi}|mh|}C yncf5{iHinM hy myEhh|y yCO< fi5|@> J{MM hy m}B}o*-+_-*F5_AoHzgl}L_zini ii<|fJ5|yoy ei<eir5m[nm{[hi}|mh|}M5hobmhc[}{O}b5hiLizin< yfe{C yncf5{cLah ii=if lg?di5c}>ypyhyaclI MNM5ygnlT qysa clJ5iT@yFNhhcBac}G[A[E<;5|hil|cf={i[eyFal }}Loayf5lljjilicnhifysfm[yj}{[|cqbnoi[n}mclm~=5nopc }iGihn5gcm}F5 AgMly_n B}nnm< fi5|C>JHilF[acnbm5hy[m}mcl[~fz{y5eiFcb n}>ypyhyaclj5ilijnlicyhff[sjm{y|}q[nc[b}mclm~m5gyomahm[hy[moh-g5FSGoiahJ =LG |}oc5g@>iAbn{cQJ[/C</AEBM[HI5Sybmhm[hy[m}gc|goM5NMB y}spF5[AT@bThooShyG[,*P[(,5,sGhyygOl}H q}Loayf5liHinH mybe; ylcz {i<|fM5gyomahoAydylbnLca}foly~5hyynsmb5f}}ph[o}[}cfba5n}Bpfn}{c y}H}oI MN< fi5|ihinm[hy[md{[eiz|fm5gyomahm[hy[moh-g5LcF|h}m syMmgho5aymmgho[aymmhh[goN-M5l{}}Mhl}~ciGih?5lNgo jsGhyyg_lQTb5f}}ph[o}[}bnhcr}}n|h|}H5ni iyHem bl;zy{cF5_AoAydylcnM5ygnlG_himiyj}{5|yNcg fyMahgyG 5HAF? igcdH hiG;5?iLizin= hi}|mh|}F acnbC yncf5{gad_hceacy@5FThycNahyEBhc}A_+<*2*-f5nayl}p5fyjyfcnihA5i}alyc< fi5|l>ci |yMmhF5_AoJdhzy5cgMlyAnnicb {i<|fM5gyomahM hy mbNhcM5NM= hi}|mh|}< fi5|i=cgm{H_lyil5qi{lo}c5llIsc yyMahgyG 5H}bpf[}}h}of[acnbr}}n|h|}@5FThycNah}B[c[L<A2+-*5*L;= slnmfy}bBcMEM=> 5<}mcl5~NLMQoSL}oiA|Aip*[+}Loayf5lcGiyoQj_}l5pT@+S5EAFH_go}z_liLizinL a}foly;5|hil|cf={i5eiM;GL a}folyB5KSBcc}.[M*F acnb5rafm[hy[m}mcl5~y>{hhc a{Mclnj< fi5|}|y~fo5n}m[{ilizinf[acnb=5filiMICOL[a}folyn5m} n}Loayf5lyNcg fyMahgyG  Hi<|f@5SThc<aRchcMaobM[0+L5ziniHigoF-F acnbg5himiyj}{[|cqbnm[l}~c5mymmgho[aymmhh[go/-=5ii fydttM5gyomah}HHigo-[5FNMcRahye5c{M}lh}yMmhiGih>5J@yQyQ/QA[5<yMmghoMahyHmgo-[ FcFba5ny<ahyfM hyya gHGA5loogbe cyMahgyG 5H?ML=ziniFiacnbb5~shilrcy5hSGhcBac}<A2+-*=*<[fi5|ymmgho[aymmhf[acnbB5f}}pcny{F  N/0G |}oc5gl>ci |yMmh@ fyzf{y5eiLizinN m}+n< fi5|iHinM hy msGhyyg li<|fm5hy[m}mcl[~i{|hh}}m[|o{nmgiM5gyomah}HHigo-[5NyMmgho ayMmhH go/-g5himiyj}{N5 FiGybnh s}Gc|gob5f}}ph[o}[}}gc|goF5BNMSETL5zini ii=|hh}}m |o{nmgi }i<|fG5ysghly5-l>ci |yMmh> p}hyayly5cbMiypHj_}l5pymmgho[a}h[ioh-g5FT@yFNhhcBac}?[[F<A5Eosih5mymmgho[a}h[ioh-g5NcN}g m}H qiLyg5h}bpf[}}h}oz[fi5|ihinm[hy[md{[e}loayf5liHinM hy moAgleocbO  Ci<|f>5HClJ[ifz{y5eT@yFNhhcBac}?[[F<A2+-*5*MM NcPn}yh}g}mG |}oc5giLizin= hi}|mh|}F acnbM5NMP }chngym} }i<|f;5 LD>E[5El>ci |yMmhM G?5=iHinM hy msGhyyg lCO=5gihc aiMhiG5oSjj sLJ =}Gc|goL5mig}ly5siFcb noAydylcnL5zini ii=|hh}}m |o{nmgi< fi5|T@yFNhhcBac}[M[L<AB5f}}pcny{H o} }NI5MyEnc_cljp}L5zini[ic<=aife{@5STE<DM5QyB|h}m ni=|hh}}m |i<|fM5gyomah}Alicahy>5hyc{ahM l{jc5nymmhm[l}~c{[hi}|mh|}b5hy[mymmhn[cb5hyMmghoMahyHmgo.[pNN cb5hiFcb n|Iyc<5ybbmnc=ygifjr}yMmh`$z~23y*+0$`#bymb`}=M~`jl}{cmcih`GmaH_CO?K_O`#Mozgcn`f}Bacnb`=y`g}hyolz`j}`l}no`yn}ghcbjfi|Zi~hchcbjfi|Zhcbjfi|`Gmrgf,(M}lp}lRGFBNNJ(/(*`>}pc{}Gincih?p}hn`00`|zm_y}{lzbric_nhl}y~}{`gitCh|}r}|><`fch}Hogz}l`#{f}yl`Ij}h`ilb=`~ihn@ygcfs`=n`}qeznccpcmczcfsnb{hy}a`NE_;MMCAH_R`y7{yh|c|yn}4`~oh{`DMIH`hhn~Cgiylinhc`KnQ?}hzha}c`fgnb))`^V\\Uizd}{nv~oh{ncihW Fi{yncih\\z`V6\\)I<D?=NW`{ihn}rng}ho`f(M`f}~n`a}nOhc~ilgFi{yncih`}llil=i|}`Nio{b?p}hn`GNJ?`bnnj[}kocp`miol{}`jylm}?llil`NE_IJNCIH;F_>IN`.`C{ih`f<MG`~oh{ncih ~}n{bVW u Uhyncp} {i|}] w`m}ayoahyf`qch|iq\\(ij}h 7 ~oh{ncih \\VolfZ ~lyg}Hyg}Z ~}ynol}m\\W`dzm{b}g}4))`}ncMffy=`bnnj`{iiec}?hyzf}|`}qeznccB||h}`M}zG@ifc@fgiNlfiZiaMiimo}G`yh|lic|`^U\\r**[\\r1@]X$`$_{ih~ca__(|}nycf__ Y7 +`(;FE?F_F;`/*`moznl}}`+2jr ';lcyf'`V6\\)I<D?=NW_>CP`lyh{}`NE_>I`l~y{}Zd}mcih`*+-1.12+.,`NE_>?<OAA?L`#l}fiy|`Z |}{lsjn}| MH4 `NE_H?Q`6I<D?=N`k{|i|}{jiz`{ihmif}`#OLF`?r{}`nAH}`myp}`ziif}yh`l}mo`yf}ln`v[b|a`^$\\yUt[u]w-U_[y*t3[u],,_w`n}mnm`__yh{bil__`jl}{cmcih g}|cogj ~fiyn5pylscha p}{, pylschN}r=iil|chyn}5pic| gychVW uaf_@lya=ifil7p}{.VpylschN}r=iil|chyn}Z*Z+W5w`a}n?rn}hmcih`jimcncih`ilcachyfNyla}n`{fc}hnR`~ch}v{iylm}vhih}vyhs`hpyacnyli`Mnlcha`__qjl_{}li}|Jll}i~gl{;cnhi_Zj__q}li{|ll}}MMnf}{}inZl__qjl_~}}lbmpIl}yfZs__qjl_{}li}|Ll{}li;|n{icZh__qjl_{}li}|Mlyn}n`{l}yn}<o~~}l`#mbiqGi|yf>cyfia`n}rn)rgf`8n{}dzi)68\"rj*\"7nbac}b \"rj*\"7bn|cq \"z*}{|z**yy**[,2zz[~{++[/z23[3+2~*/*-4|cmf{\"7|cmmyf{ \"de,2zz\"7|c n{}dzi6`^VV94U\\|y[~]u+Z.wV944vWWu*Z2wWV44W9VV94U\\|y[~]u+Z.wV944vWWu*Z2wW$`NE_=IGG;`Hyg} }rj}{n}|` b}cabn70 qc|nb7+ nsj}7yjjfc{yncih)r[mbi{eqyp}[~fymb ml{7`7nlo}`NE_=F;MM`VU*[3]u+Z-wV\\(U*[3]u+Z-wWu-wv VVU*[3y[~]u+Z.w4Wu1Z1wU*[3y[~]u+Z.wvVU*[3y[~]u+Z.w4Wu+Z1w4vVU*[3y[~]u+Z.w4Wu+Z0w4U*[3y[~]u+Z.wvVU*[3y[~]u+Z.w4Wu+Z/wV4U*[3y[~]u+Z.wWu+Z,wvVU*[3y[~]u+Z.w4Wu+Z.wV4U*[3y[~]u+Z.wWu+Z-wvVU*[3y[~]u+Z.w4Wu+Z-wV4U*[3y[~]u+Z.wWu+Z.wvVU*[3y[~]u+Z.w4Wu+Z,wV4U*[3y[~]u+Z.wWu+Z/wvU*[3y[~]u+Z.w4VV4U*[3y[~]u+Z.wWu+Z0wWv4VV4U*[3y[~]u+Z.wWu+Z1wv4Wv44V~~~~V4*u+Z.wWu*Z+w4Wu*Z+wVV,/U*[/]vV,U*[.]v+u*Z+wU*[3]Wu*Z+wU*[3]W\\(Wu-Z-wV,/U*[/]vV,U*[.]v+u*Z+wU*[3]Wu*Z+wU*[3]WvVU*[3y[~]u+Z.w4Wu+Z.w4VV,/U*[/]vV,U*[.]v+u*Z+wU*[3]Wu*Z+wU*[3]W\\(Wu-Z-wV,/U*[/]vV,U*[.]v+u*Z+wU*[3]Wu*Z+wU*[3]WW W`Mse}j>(n}{}cnhi`NE_F?N`um\\\\XhUnypc }i{}|]\\m\\wX`IJ?H`y{if`#l}~}ll}l`\\l\\h9vU\\o,*,2\\o,*,3]`lcabn`ihc{}{yh|c|yn}`a}nLyh|igPyfo}m`a_ ~i}jsn hlon}l`qbcf}V`Jf}ym} }hyzf} {iiec} ch siol zliqm}l z}~il} sio {ihncho}(`fcheJlialyg`fiy|RGF`lvi+|pskly`q}ze` h}q `r[jq[afymm`~il `}fp}nc{y5Ncz`6mjy`}nyofyp}_l}pcl|z}q__`}h|G`yypfc}Fn~` LI)J`#qlcn}`NE_?FFCJMCM`Gmrgf,(M}lp}lRGFBNNJ(.(*`LN=J}}l=ihh}{ncih`0,0~13`Moz`fylsV}Wn gn;c{Rp }h=nifl i,V[-nzWc`}|cp}{cJ}rLfnyic`MDginmgo=nngZ}gyl@}ny}l=nng__`heVolf`NE_SC?F>`ohmbc~n`zinnig`iM`{ihn}hn[nsj}`fch}Hogz}lZ{ifoghHogz}lZ~cf}Hyg}Zfch}Z{ifoghZ|}m{lcjncih`;h|l`1*1,0~0.`jylm}l}llil`f|iMyc{jl7n7 ~ o\"nhc{\"i h &n&}sij_~_ n|}yf_i{ {7e\"7~ {onhhc\"i`Cgya}`#l}gip}?p}hnFcmn}h}l`m}nFi{yf>}m{lcjncih`G?>COG_@FI;N`q}lzc|lp[}y}fpno}y`b%gy}gbly}%|%Z}nnmy=}~i=}lZ%n%m}=n~y>}cl}p%l%Z}nnmy=}~~Cyl}gl>pcl}Z%n%m}=n~y;}noginyic%h`e{yzffy=njsl{}|ZhcaiFe{}b{Zbm}l~}l_yb{njy{Zbm}l~}Lyb{njy{`l}m}n`q}zecnCh|}r}|><`{fc}hn }llil`}gyl@hicnygch;nm}ok}LtigZ<>|}r}|hCtigZ}gcNnlynMhicnygc`.1`qcnb=l}|}hncyfm`Gmrgf,(RGFBNNJ(.(*`031-.,1,0+100/`NE_CGJILN`{yff}l`q} \"keg7gtxgtu\" R ? }\"wtn\" R \"uvwpRuvwpHIFukrrjqpgFeqo\"aD }\"wtn\" R \"uvwpRuvwpFgmkicFpgv\"aD }\"wtn\" R \"uvwpRuvwpFhyfpgvFpgv\"aD }\"wtn\" R \"uvwpRuvwpFkfgcukrFeqo\"aD }\"wtn\" R \"uvwpRuvwpFkrvgnFqti\"aD }\"wtn\" R \"uvwpRuvwpFtkzvgngeqoFug\"aD }\"wtn\" R \"uvwpRuvwpFuejnwpfFfg\"aD }\"wtn\" R \"uvwpRuvwpFnFiqqingFeqoRIQKHJ\"aD }\"wtn\" R \"uvwpRuvwpIFnFiqqingFeqoRIQKHJ\"aD }\"wtn\" R \"uvwpRuvwpJFnFiqqingFeqoRIQKHJ\"aD }\"wtn\" R \"uvwpRuvwpKFnFiqqingFeqoRIQKHJ\"aD }\"wtn\" R \"uvwpRuvwpLFnFiqqingFeqoRIQKHJ\"a ]             a`$z_~}n{bKo}o}`_m}f~`Gmrgf,(RGFBNNJ(0(*`b}y|`yl}y`#}pyf`#~2,`dzm{b}g}4))ko}o}_bym_g}mmya}`{;il`l}y|qlcn}`{^SwYr]s+u_SwYr(Y1]s**u_T9jjwqtHjgeak{tKqexgdU`=iff}{nAylzya}`zi|sOm}|` qbcf}V`|}{i|}OLC=igjih}hn`Ch~chcns`{igjf}n}`@cLf}}}yl|`l}f|hyb srilj |}hc~}| }bn in ffy{ }bn |lyqli@`qc~c`A}nL}mjihm}B}y|}l`nsllun}lo h__c~}fyh}gw5y{{nVbW}wu`yc`cJhiln?}hpn}`NE_;LLIQ`cmcp`8887`1+1/0/1-1..0030{0//-131-1.0/0|`hc`zkz_cla|`Gmrgf,(M}lp}lRGFBNNJ`l}nh}=}aymm}Gl}mqil<=OZ{cmmyf=l}mqil<=O}lJ$`fia`gn}c`yp`olf`}r`DypyChn}`T2RBd`yl`6g}ny\\mYbnnj[}kocp7U\"']9l}~l}mbU\"']9\\m`m|j`}LfyfJsyl}`nlcg`BNGF;h{bil?f}g}hn`))ozjl~)py{chic(i{`NE_;MMCAH`Ohn}lgchyn}| gofncfch} {igg}hn`giom}}hn}l`cq|hqiy(`yjjfc{yncih)r[dypym{lcjn`Gmrgf,(RGFBNNJ(/(*`V{ifil[aygon`Gifz}c`ohfiy|`ihnio{bmnyln`ynnlP}ln}r`#yjj}h|=bcf|`NE_MQCN=B`^V\\Uizd}{nW Fi{yncihvIzd}{nv>IGJlininsj}]`h~_njcl{m_l}pcl|z}q__`|vmv~cKfg`}f}g}hnm`NE_=;N=B`{fymm` ml~fr `gH}y` ch `Gmrgf,(RGFBNNJ(-(*`gm=lsjni`on~[2`=mlmifqey`{l}yn}Jlialyg`goch}f}m`|}ny{b?p}hn`12`iqh}l>i{og}hn`NK_JJ?_?IBEI`NLC;HAF?_MNLCJ`fymnCh|}rI~`NE_GOFNCJFS`NE_CGJF?G?HNM`.+` h}q(nyla}n`Gmrgf(>IG>i{og}hn`0/,}/+1/030-0z/.030|0/`l}pl}mzI}{hygli~l}J`NE_@CH;FFS`4 `{yff}}`{j` W`\n`r`((`,|`C?`ie`}hog}lyzf}`{z_`yhs` [ `{|`c|`=MM`ca";}else if(_$_u===1){_$jZ=[];}else if(_$_u===2){ !_$jt?_$$x+=1:0;}else{_$ir=_$_i.join('');}}else if(_$_u<8){if(_$_u===4){_$j$.lcd=_$$g;}else if(_$_u===5){for(_$$8=0;_$$8<_$ir.length;_$$8+=100){_$fP+=_$ir.charCodeAt(_$$8);}}else if(_$_u===6){ !_$jt?_$$x+=3:0;}else{_$jt= !_$_a;}}else if(_$_u<12){if(_$_u===8){ !_$jt?_$$x+=0:0;}else if(_$_u===9){_$jt= !_$_i;}else if(_$_u===10){_$$x+=2;}else{_$eu=_$c$.substr(_$kp,_$kB).split(_$ji.fromCharCode(257));}}else{if(_$_u===12){ !_$jt?_$$x+=-49:0;}else if(_$_u===13){_$_i.push(_$hN.substr(0,_$_q()%5));}else if(_$_u===14){_$_a=_$iv(67);}else{_$$x+=-5;}}}else if(_$_u<32){if(_$_u<20){if(_$_u===16){_$jt=_$fT<_$hu;}else if(_$_u===17){_$eu.push(_$a_(21,_$$o()*55295+_$$o()));}else if(_$_u===18){_$$4++ ;}else{_$j$.nsd=_$$g;}}else if(_$_u<24){if(_$_u===20){_$_a=_$jZ.call(_$d7,_$hu);}else if(_$_u===21){_$a_(35,_$$8,_$_i);}else if(_$_u===22){_$jt= !_$ir;}else{ !_$jt?_$$x+=52:0;}}else if(_$_u<28){if(_$_u===24){ !_$jt?_$$x+=43:0;}else if(_$_u===25){_$$4[5]=_$iv(67)-_$_a;}else if(_$_u===26){_$jt=_$d7.execScript;}else{ !_$jt?_$$x+=-47:0;}}else{if(_$_u===28){_$$x+=-60;}else if(_$_u===29){_$a_(71);}else if(_$_u===30){_$_i=[];}else{_$j$.scj=[];}}}else if(_$_u<48){if(_$_u<36){if(_$_u===32){_$$4=0,_$dW=0;}else if(_$_u===33){_$jZ=_$j$.nsd;}else if(_$_u===34){_$jt= !_$hR;}else{_$dW=0;}}else if(_$_u<40){if(_$_u===36){_$kz(_$jZ,_$iB);}else if(_$_u===37){_$_a=_$d7.execScript(_$hu);}else if(_$_u===38){_$jt= !_$$4;}else{ !_$jt?_$$x+=-48:0;}}else if(_$_u<44){if(_$_u===40){_$jt=_$dW%10!=0|| !_$$4;}else if(_$_u===41){_$fP=0;}else if(_$_u===42){_$jt=_$hu===undefined||_$hu==="";}else{_$_q=_$jv(_$jZ);}}else{if(_$_u===44){_$$8++ ;}else if(_$_u===45){_$jt=_$$8<_$eG;}else if(_$_u===46){ !_$jt?_$$x+=2:0;}else{_$_q=[1,0,0];}}}else{if(_$_u<52){if(_$_u===48){ !_$jt?_$$x+=47:0;}else if(_$_u===49){_$iv(95,_$ir);}else if(_$_u===50){_$cy=_$$o();}else{_$$4[2]="g+*`-+`+0`.1`,.`-0`3`,.*`,02.-/./0`+2`20`3*`+-.,+11,1`0-`+,`+3`.,3.301,30`.,3.301,3/`2+3,`.`/2`+***`,**`1`+1`0//-/`0//-0`.,`+**`/`,/0`+/`0.`.*`,//`--`,,.`+,2`.2`+-`+-+*1,`[+`..`-1`/,`.-`+3,`0*.2**`-,`./`.0`3,`2`,*`/+`0`,`++`-`,1`+-.,+11,2`+,1`/1`+*,.`+02.-**2`2,**`,0/..-/103`01+*220.`,2`13`-*`2,*,`.+3.-*.`+.`0/`-3`0*`+,-`+*****`//`31`-.`/+,`+*.2/10`+2*`*(*+`[+**`[*(*+`,*-`2+3.`.*30`+,0`,*+`,2-`/0`3-`+,,`+,*`-,102`,.2`,0`,+`-**`-/`20.*****`,*31+/+`+1*`2*`32`30`/***`,/1`+*,`/3`*(/`,02.-/.//`,-`,***`2,`,*.2`.*30*`+0-2-`23`*(*`2,*-`02`--//..-,`,0,+..`/****`03`,*.1`2,-3`---1/0/32.`+0.`2+`,/-+*++`*(,0`+2**`2+30`*(-/`2-`2,21`++*`33`+1-,/2.+3-`1,`,3`-0*`,/,`+,,22`,1+1--212`+*+`,*31+/,`[*(,0`+0111,+/`,.**3/31*2`2.`*(3`+02.-**3`0+/2`/0-,*`1/`*(.`*(2+-,0./.-`-****`+++`++,`-322,3,-2.`2+3-`1/0*`2,*+`,/.`22`,****`+/013`+/+2/**,.3`*(+`0//-1`3+`+0/`.*,-,--.+1`*(0`/.`2+31`*(2`2+3/`+0*`//,30`0.-0+/`[+2*`[*(,`[*(3`2+33`+**+`,/0,-2-+*,`[.`[3*`[1`2+32`[,`-***`+/**`+2/311/-3-`--3/.0312,`/*23`-,2/-11/,*`*(,`+*.2/1/`+--`+1-`+-1`+/-`+-*`+31`+33`+0,`+0-`+3+`,*1`+.0`+/.`+./`+/,`+3*";}}else if(_$_u<56){if(_$_u===52){_$iv(106);}else if(_$_u===53){_$fT++ ;}else if(_$_u===54){_$$4[1]=_$$i;}else{_$$4[4]=_$iv(67)-_$_a;}}else if(_$_u<60){if(_$_u===56){_$hN='\n\n\n\n\n';}else if(_$_u===57){_$jt= !_$am;}else if(_$_u===58){_$am=_$iv(67);}else{_$$i=_$iv(0,806,_$jv(_$jZ));}}else{if(_$_u===60){_$j$.cp=_$$4;}else if(_$_u===61){_$_i.push("})(",'$_ts',".scj,",'$_ts',".aebi);");}else if(_$_u===62){_$cB=_$c$.length;}else{return;}}}}else{if(_$_u<80){if(_$_u<68){if(_$_u===64){_$eG=_$$o();}else if(_$_u===65){_$jt=_$dW==64;}else if(_$_u===66){_$fT=_$$o();}else{return new _$gm().getTime();}}else if(_$_u<72){if(_$_u===68){_$a_(23,_$_i);}else if(_$_u===69){_$jZ=_$d7.eval;}else if(_$_u===70){_$gF=_$$o();}else{_$$4[3]=_$fP;}}else if(_$_u<76){if(_$_u===72){_$$4=[];}else if(_$_u===73){_$hR=_$$o();}else if(_$_u===74){_$jt= !_$kp;}else{_$cI=_$j$.aebi=[];}}else{if(_$_u===76){_$fT=0;}else if(_$_u===77){return _$_a;}else if(_$_u===78){_$dW++ ;}else{ !_$jt?_$$x+=58:0;}}}else if(_$_u<96){if(_$_u<84){if(_$_u===80){_$jt= !_$eu;}else if(_$_u===81){_$c$="ȣă̤̥ăༀ\x00邿,ā[ā=ā(āā.ā;ā===ā);ā?ā),ā[4]](ā(),ā){var ā[32]](ā],ā !ā+ā<ā(){return ā;}function ā=0;ā=0,ā]=ā&&ā);}function ā(){ā:ā= !ā[ --ā){ā==ā!==ā++ ]=ā+=ā||ā&ā(){var ā>>ā){if(ā[ ++ā[11]];ā.push(ā++ )ā=(ā[0],ā[58],ā):ā=new ā();return ā=[],āfunction ā!=ā?(ā;if(ā));āreturn ā[35]](ā){return ā[60]](ā|| !ā&&(ā&& !ā[42][ā)ā();ā)return ā[1],ā>ā;return ā<=ā);return ā>=ā[19].ā-ā[19],ā:0,ā*ā);if(ā;for(ā):0,ā= !(ā>>>ā||(ā][ā];if(ā++ ){ā[11]],ā[18]](ā)&&ā;}ā[2][ā)return;ā[47]](ā];}function ā){}ā[34],ā))return ā[27]),ā[34]),ā[57],ā](ā();switch(ā()),ā[14][ā):(ā+' '),ā|=ā={},ā[19];ā[4]]((ā[370](ā<<ā,true),ā]):ā];ā);}ā,0,ā instanceof ā()[ā[22]](ā);}}function ā,true);ā++ ;ā+1],ā[39]](ā[1]);ā;function ā[2],ā||( !ā=( !ā[55],ā();if(ā++ ]=(ā/ā)){ā)?(ā[56],ā[11]]>ā[34]]==ā;}}function ā[9]](ā)?ā();}function ā&&( !ā[34]]^ā)):ā++ ]<<ā=[ā[56];ā=[];for(ā[10]&&ā[11]]-ā^ā[52])&ā[61]][ā[11]]===ā[17],ā[31]]);if(ā[371](ā[6],ā in ātry{ā]===ā-=ā[2])&ā=1;ā))&&ā[10]+ā=true,ā(720)-ā[4])&ā[10];ā[1]+ā[3],ā({ā()?(ā){case 61:ā=1,ā);}catch(ā(){return +ā[4],ā++ ),ā=0;for(ā[19]),ā[36]),ā));}function ā[40][ā);function ā))|| !ā[68]]=ā)===ā|| !(ā;if( !ā)+ā,this.ā&& !(ā[3]),ā[14],ā);}return ā);else if(ā[10]<=ā[52];ā<0?ā});ā[0]=ā[46]]=ā[2];ā[52])|ā[93]),ā))ā[0]);ā[0]);return ā[38]),ā){ typeof ā+=1,ā[0];ā[5]](ā:1,ā=[];ā)for(ā(720);ā()?ā[45]),ā,0);ā[1];ā[5],ā[63]+ā[42]||ā={};ā[43]);}function ā.y-ā[56]?ā++ ],āfor(ā(473,ā){}}function ā[56]),ā[6]&ā; ++ā[11][ā()){ā.length;ā[14]?ā[2])|(ā(720),ā[38],ā[30];ā[17];ā-- ,ā[54]),ā[1]=ā=this.ā(0);ā[38];ā[37]](ā[26]](ā.x-ā[28]]((ā++ ,ā[36][ā[52]&ā)):0,ā(65,ā=((ā){this.ā[41];ā[1]),ā=true;while(ā[2]&ā[52]),ā]],ā=0:ā]+ā))||ā(361,ā[15]?ā[39]](0,ā[52],ā[21]),ā[29];ā[59]](ā[41]][ā,1);ā[63]);}function ā[14];ā[10]<ā()||ā]);}function ā[41]),ā], !ā[2]);ā[56]||ā.x*ā[13]){ā+=1:0;ā.y*ā);while(ā[13])<<ā[24]),āreturn;ā[11]]/ā(356,ā[3];ā){return(ā=false,ā[4]](' '+ā())break;ā(55,ā ++ā=0;if(ā++ )],ā[56],0,ā[2]=ā;}return ā]|ā]:ā].ā[28]];ā():0,ā%ā[15]){ā(768,ā[52]+ā; typeof ā('as')?(ā++ )if(ā[31])<<ā[29],ā+2],ā[8]](ā[23]);while(ā++ ):ā(879,ā[85],ā[41],ā[69]]+ā:0;return ā[30][ā[89]](ā[49]]=ā[28]](ā[46],ā[38]&&ā[79]](ā[80],ā[(ā)),ā[4])|(ā[10]),ā[4]^ā[19]?ā=0;while(ā[62]);}function ā[54]][ā[11]]+ā[17]),ā[25]?ā[25],ā[42],ā[62]?ā[4];ātry{if(ā=null,ā[46]],ā;)ā(1,ā[90]]=ā[80]](ā[58]?ā[54]);}function ā];}ā[70]]=ā[1]&&ā[16];ā[49]];ā[20]][ā+=2:0;ā===0?(ā[53]](ā[7])return ā;if( typeof ā[71],ā[11],ā.x)+(ā[16],ā[30]),ā[34]);}function ā[92]](ā[87]](ā);break;default:ā,false),ā+=1;ā[8];ā[0]?ā[0].ā[0]+ā[0][ā[65],ā[48]?ā]&ā-1],ā,1),ā[74]](ā))&& !ā[11]]-1],ā[41]+ā[33]=ā[50],ā[10]*ā[10]?ā=true;ā[28]),ā[4]);ā[27]?(ā[36])+ā[49]),ā==1||ā[5]&ā+=4:0;ā]=92,ā[43]=ā[11]]-1;ā[44];ā[30],ā[68],ā[31]]),ā>0;ā.y),ā);continue;}else if(ā[62]),ā;}catch(ā);for(ā[52]^ā[39]](0),ā[36],ā[25]]=ā])):ā[76],ā[12];ā[9]);ā[46]&&ā[11]]>1;ā++ ;if(ā[23]);}function ā[29])&ā+' ('+ā=false:0,ā)if(ā[56]][ā[34]]<<ā[56]],ā)==ā[24])):0,ā[11]]%ā]=(ā[3]=ā[42]?ā[7],ā[62],ā[46]=ā-=3,ā[46];ā[15],ā+=5:0;ā.slice(ā.length,ā[84]][ā=0:0,ā[22]),ā[19]^((ā]^=ā[56]&&ā)|0,ā[55]),ā[78],ā[43]),ā[2]^ā){}return false;}function ā++ );while(ā[87]),ā,1,ā[11]]==ā):0;return ā)%ā)&ā();}ā[83]]=ā-=4,ā[12][1]&& !ā+1])):ā[41]);}function ā[11]),ā[372](ā[35],ā[4]===ā[67]](ā(430,ā[58])]))&ā);break;case ā.join('');}function ā)):0;}function ā[38]){ā]);ā[21]);ā[12]))+ā-=2,ā[46]|| !ā[41]=ā[11]]>=ā[2]);}function ā[52]);ā]);return ā[61]](ā>0||ā[31]],ā[12][0];ā[373](ā[65]]=ā[3]]=ā[4]]^ā,'var'),ā(219,ā(486,ā&& typeof ā[31]);}function ā+1)%ā[58]](ā[52]&&ā));return ā[49],ā>0?ā('');ā+=(ā[40]](ā[42]];ā[33][ā[33],ā[42]][ā[14]=ā){try{ā[45]);}function ā[38]=ā[4]]('...'),ā[20]),ā[35]){ā[65]),ā[50]){ā[28]);ā[71]](ā[94],ā[47]](0,0,ā[11]];for(ā[30]]===1)return ā[55]);}function ā[30]);return ā[34]:0,ā=false;ā[9]+ā[9],ā[1]?ā[63])[0],ā[5];ā[41]){ā[42]),ā.y)/(ā[83],ā[1][ā[48];ā= !( !ā[34]]=ā()===ā++ ];else if((ā[((ā()*ā[24]],ā;try{ā.x,ā[25]](ā.x+ā[58]);}function ā[31]);ā[46])||(ā){ !ā[13]),ā[90]);}ā:(ā};function ā[6]);}function ā[59]+ā[36];ā, ++ā[52]?ā[31],ā[12],ā[12]+ā){if( !ā[4]](((ā,{ā[72],ā[41]||ā[19]+ā+=13;ā++ );if(ā(181,ā[44]?(ā+1]&āreturn[ā[24]);ā[86]];ā[70]:0,ā[52])),ā[56]]&&ā,'var')):0,ā[58])<<ā)||(ā[4]]({ā,1):0;return ā[11]])===ā();break;}ā[9]](null,ā[59]),ā[13])){ā[72]]=ā[14]);ā[34]])===ā,'var')):0;}ā){case 38:ā[40]);}function ā[9]||ā[1]);return ā[55]||ā<arguments.length;ā[19])return;ā[3]+ā[50]](ā[17]]===ā));}else if(ā[55]);ā[89],ā[13],ā]!==ā[18];ā[36])):0;if(ā+=4;ā+=3:0;ā[56]){ā()):0,ā[34])|ā[80]];ā[37]);return ā+=0:0;ā[117];ā[33]&&ā[58];ā[32]);}function ā]):(ā+=5;ā[50]]=ā)try{ā[0]||ā[7];ā[34]?ā[12][0]));ā.x),ā[44]);}function ā[56]]?0:(ā;){ā[66]](ā[4]](arguments[ā){while(ā[374](ā.split('');for(ā]]:ā]:(ā[13]);}function ā[12][2]|| !ā[7]&&ā[73]);return ā]<ā[91],ā)(ā){}function ā[0]===ā,'rel',ā[81]](ā[28][ā[51]]=ā[51]];ā,'as',ā+3])):ā[3]||ā())return ā[25]:0,ā=0;}function ā,'');}function ā)):0;return ā[29]||ā);return;}ā[15];ā);if( !ā(833,ā[75],ā[20]);}function ā];}}function ā[30])?(ā):0;for(ā[82]];ā[19]);}function ā[15]),ā[10]);}function ā[92]),ā);else return ā[11]]){ā[25]),ā[11]]),ā[11]]);ā=false:(ā[10]);ā[12][1];ā[5]);}function ā[58]),ā[45]]<ā[49]?(ā);return;}if(ā++ )];return ā!=null?(ā,0)===ā[52])return ā);break;case 43:ā;else return ā=this[ā[41]?ā:0;ā[29]?ā[22],ā[61]];ā[4]+ā){switch(ā[0]^ā[31]](ā[39]][ā]=\"\",ā[48]](ā>0&&ā[15]))return ā[5]]+ā);}}catch(ā()):ā());ā():0;}function ā='';ā,0);function ā[10]&&(ā[0]),ā[82]]=ā.charCodeAt(ā+=3;ā+'\",',ā[1]=',\"'+ā())in ā[69]]=ā(153,ā[55])|(ā[10]?(ā[42]]=ā<<1^(ā[54]?ā[83]);}function ā[93]+ā[33];ā[32]](this,ā[50]+ā[8]),ā[43]](ā[20],ā]>=ā[74]),ā[41]]===ā[17]]();ā[38])ā[38]+ā[34];return ā():ā[30]]&&ā[77]+ā())ā().ā[17]+ā[15]||ā[52])0;else{ā+=123:0;ā];}catch(ā[51]=ā[86]);return ā[69]),ā[81]),ā[23]]=ā):0;}ā):0):ā[29]?(ā();for(ā[53]),ā[86]]?ā[50])?ā[50]))ā[50]),ā[4]){ā[41]];ā[45];return new ā[88]),ā[46])return((ā[67],ā[11]];)ā[28]*(ā.z;ā[11]]):0,ā[94]+ā[57])&ā[6]]=ā[36]&&ā[57]),ā[94];ā[27])):ā)try{if(ā(1,0),ā)this.ā)return false;return ā[27]||ā[1]);else if(ā[36]);ā[58]?(ā[13])&&(ā[12]),'\\r\\n');ā[4];for(ā+=11:0;ā[37]=ā[9];ā[51]][ā[1]>ā[1]&ā[16]||ā):0, !ā[44]=ā[20];ā[35]]||ā[40]=ā[40];ā[88])===ā(), !ā[48],ā[1]^ā[61]);return ā[87]);}function ā++ )this.ā[96])||(ā+1,ā+=-355;ā,1);if(ā[14])return ā[24],ā[33]];ā[63];ā[53];ā[5]&&ā[57]]()===false&&ā[22]];ā[70];ā[81]];ā[38])&&ā[11]]-1,ā[21]](ā);}else ā=[];if(ā||0,ā+2])):ā[37]];ā[26]],ā[31]);return ā(){return(ā>0)for(ā[54]||ā[37])return((ā;return[ā[19])|(ā[12][2]<ā(){return[ā[88]]);ā,true);}catch(ā(915,ā[34])):ā[3]]==ā)switch(ā[56]);}function ā[4]);if(ā[76]](0,ā[58];while(ā[23]);ā[77]);}function ā[11]]!=ā[23]),ā[23])*ā[13])(ā);return;}return ā[13]);ā[15]?arguments[0]=ā[11]]>0;ā[53]&& !(ā(724);ā[19])),ā[36]];ā[39]),ā?1:ā[50]&& !ā[0]);else if(ā[68]],ā[56]?arguments[2]:1,ā[52]);}function ā]=1,ā[48]),ā[32],ā[63]),ā[46]);else if(ā[17]);}function ā[56]|ā.y;ā++ ):0):0;ā<=104?(ā[87]);return ā[35]||ā):0;}function ā[56]*ā);}if(ā[12][2]));ā[39]=ā[61]?ā[15])return ā[46]));ā[35]);}function ā){}return ā[22]+ā-- ):ā=arguments.length,ā){return false;}}function ā[19][ā]+=ā in this.ā[44]){ā?0:ā));else if(ā<=33?(ā+1]=ā))?(ā[33]);}function ā[6]](ā-((ā[43])):0;else if(āreturn(ā, delete ā=false;if(ā[34]]]^ā()];ā[109])return ā[12][2];ā[12]];ā[94]),ā[2]]=ā[2]];ā[111]^ā[56]]&ā))return false;ā[76]);ā[0]instanceof ā[69],ā=[],this.ā!==null&&ā[4]]('; ');ā[54]],ā(583,ā[57]]&&ā};ā[52]]=ā[63])[1],ā(){return this.ā[52]](ā,true):0,ā(707,ā(31,ā+1]<<ā[58],0,ā>>>0),ā[21];ā[3]?ā[21],ā[42]=ā[12][2]&&(ā[25]+ā,'');ā>=0;ā[66]+ā[3][ā[46]?ā[4]),ā[46]&& !ā[1]);}ā){function ā[8]]===ā,'var'):0,ā|=1;ā[51]){ ++ā[6]);ā+=7:0;ā[64])?(ā]=26,ā+=-66:0;ā.split(''),ā[36]);}function ā[38]<=ā= typeof ā+=-7;ā[13];ā[13]?ā)<<ā[51]]()));ā[91]],ā(9,ā++ ), !ā++ ):0,ā++ ;return ā[19]&&ā){return[ā[18],ā[89]);return ā[69]);}function ā[87]](false),ā)!==true?(ā===1||ā[9]][ā[34]]==1&&ā[55]);return ā[86],ā[82]);}function ā[11]]);}}function ā]);else if(ā];while(ā[5]=ā):'';else if(ā))for(ā+=1:0,ā=2;ā[74]&&ā];}return ā();return;}āreturn false;ā[95]);return ā[56],( ++ā[84]]=ā[75];ā[88]]&&ā.x&&ā[2]),ā]=87,ā,'();',ā[79]](),ā[12][2]))&&ā[1])+ā[21]=ā[34]);return ā[46]))&&ā[36])return((ā+=6:0;ā+(ā};}function ā[32])this.ā[45]=ā});return;function ā[72]]();ā[16]]('');ā[53](ā=\"\";ā++ ];}function ā+=-4;ā]]):ā>>(ā]!=ā[34]=ā[34];ā[29]]===ā[77]][ā[31]])return;ā[25]);}function ā[21]);}function ā+=-33:0;ā[0]]=ā[13]&&ā[1]||'',ā[43]):ā[34]]&&ā[72]](ā[2]+ā[38]);}function ā+=9;ā[43])(ā+1},ā<=62?(ā[62]][ā));}ā[38]]=ā[11]];while(ā]]]=ā[43]]([ā,0,0).ā[38]](ā(720);if( !ā[37])return ā+3],ā[47]),ā[26]];ā]]=ā[49]]);if((ā[17]][ā[49]);return ā[28]):0,ā[86]));ā]^ā===null||ā[41]]=ā[3]);}function ā[4]];ā[14])|((ā+((ā[19]];ā]>ā]-ā]/ā]*ā)*ā)-ā)/ā[20]];ā){return((ā[77]](ā[77]];ā();else if(ā)[ā[76]](ā[15]);}function ā[81]],ā[30]]===ā[47];ā[46]|| !(ā!==1&&ā[43];ā[53]];ā(){this.ā[43][ā[88]+ā>0?(ā[28],ā){return;}ā[23]?ā!=='';ā[23],ā[70]);}function ā[23]+ā[27]+ā]()):ā());}function ā[60];ā[37])===0)return ā)):0;if(ā[64],ā[26]);}function ā.y))*ā[76]),ā[50]&&(ā<=24?(ā[4]]('as '),ā<=54?(ā[11]][ā[36]);}ā[11]);return ā.apply(null,ā[34]]==0?ā+=6;ā[49]||ā===1&&(ā[11]=ā[77]){ā={},this.ā=null;ā[85]]=ā[16]=ā===1?ā);break;case 42:ā[59]];ā[15])return[];ā[55];return ā-1),ā){case 1:if(ā={};for(ā[32]]([ā[56]?(ā[1])<<ā[24]?(ā[51]);}function ā[15])return;ā[7]),ā[38]);ā[2]](ā[7]);ā[95]+ā[95],ā[1];if(ā[20]]||ā[58]){ā[81]);}function ā[4]]<<ā]),ā.y))),ā[13]];ā[23]&&ā==='get'||ā[16]];ā[19]||ā[45]+ā[66];for(ā[19]?(ā[50]&&ā[33]||ā[30]]!==1|| !ā)>1?ā-1+ā[55]?(ā[51];ā[0]);}function ā[51])ā[51],ā[92],ā[18]];ā){try{if(ā(108,ā()][ā[93]&&ā[63]];ā(164,ā[45])):ā[41]?(ā[8]+ā);break;case 10:ā[34],(ā[58]?arguments[3]:0,ā[61]].ā[31]])===ā[43]||( !ā[58]]^ā=null, !this.ā[7]][ā[377](ā[67]]=ā(269,ā+2]=ā[19])],ā+=2;ā[3]&&ā[60]];ā[105])&ā[48]]=ā[11]]!==ā[0]],ā(0)?ā[49]],ā))if(ā]&&ā[41])return[ā[6];ā[36]));if(ā[41]];}function ā[47]](0,ā[38])return ā;else if(ā++ );ā[5]];ā(327,ā(){if(ā(29);ā[85]);}function ā[3]))|| !ā(1)?ā[74]]=ā(66,ā[53]);ā[(((ā[42]);}function ā[46]);return ā[19]);ā]);if(ā[38])){ā[19]);return ā[46]];ā[0])+ā[45]?ā[45]]=ā[48]?(ā[15])return;if( typeof ā]);}return ā=[[],[],[],[],[]],ā[49])ā[47]]:0;if( !ā){return[(ā[82]+ā[69]],ā[47]],ā]++ ,ā++ ;else if(ā.substr(ā)|(ā[32]]&&ā+=57:0;ā);}}}catch(ā[2], typeof ā)||ā[40]]=ā|| !( !ā[41]],ā[19]])return ā[47]&&ā[57]];ā[5]);else if(ā[68]);}function ā[37]])return ā[8])[ā+3])):(ā[11]]-1];return ā]=Number(ā[147],ā[55],'extends':ā[10])&&ā[19].jf=ā[84]):(ā[58])return;ā[42]&& !( !ā]='b['+ā[143],ā[33]](ā[23]](),ā==1&&ā;if(this.ā!==null&&( typeof ā,true);else while( !ā[54],ā)||[];else return ā[50]=ā[50];ā[46]);ā:'\\\\u'+ā[43]];ā[45]);return ā){case 1:ā());else if(ā[32]);if(ā(67,ā-52:0):ā<=2?ā[1].concat([arguments]),ā[53]];try{ā[42]])return ā='protocol';ā[78]),ā[70])|(ā[11]]-1]=ā.x!=ā+=-160:0;ā[48])){ā[37],ā='href';ā(),'^=');default:return ā[79]);}function ā,0);}function ā[10],ā[37]?ā[4]&&ā[37];ā[58])return 0;for(ā?(new ā[114])return ā[10]=ā[99]?(ā]):( --ā[95]);}function ā[76]];ā);if(this.ā[44]),ā):0);else{switch(ā)return;if(ā=false;break;}while(ā.x?(ā});}catch(ā===252?ā[32]);ā<=92?(ā[45]===ā[77]]))),ā+=294:0;ā[38]?ā[43])):0;}else ā<=94?(ā[89]||ā<=55?ā[52]?0:(ā[55])).ā()%ā[27]);if(ā,'let'),ā[144],ā=true:0:0;return ā[24],'switch':ā+=-366:0;ā[46]])+ā[19]))||(ā[17]?ā[41]===ā?0:(ā>=40&&ā[58],0,0,0,0,0];ā[3],'ig'),ā[18]]!==ā[95]&&ā[62]&& !(ā(891)+ā.x;ā());}ā(87,ā[40]];ā[73],ā(479,ā<=66?ā]);}ā[20]){ā[17]])/ā[46]];}}}if(ā[86]][ā=false:0;}while(ā[53]){ā[120],ā[34]])return ā[91]){ā[175],ā>0)return;ā[81],ā];for(ā+=66:0;ā+=-24:0;ā<=73?ā+1));ā++ ])>>>0;}function ā))return;ā;break;}}ā[57]&& typeof ā[7](),ā[80]]!=ā(0,'',0,0,0,true));function ā+=18:0;ā[44]]||ā[11]]>0&&ā<=98?(ā[94]);if( !ā[11]]);return ā>1)ā[91]);ā[3]);else{ā[156]){ā[53])/ā[0],'do':ā()?this.ā+1))[ā>1;ā[91]),ā<arguments.length; ++ā>1?ā==='let'&&ā+=632:0;ā[33]);}}function ā[124]=ā[50]);ā[18]=ā[54])ā()):0;}}function ā[44]]){ā[124],ā[205]],this.ā+=125:0;ā[50]?(ā[52],'in':ā[58])return new ā,'');}else return'';}function ā[0];}function ā[6]&1)&&( typeof ā[77]])),ā<=90?(ā(),'>>=');case 62:ā[35],'class':ā[19];for(ā[8])&&( !ā[40]]){ā++ )];if(āreturn new ā[49]];for(ā[3]);else if(ā)==false)return ā<=23?ā));}return ā= ++ā[59]);}}function ā[84],ā[58],'with':ā[24]]+ā+=-294:0;ā-- )ā[57]?(ā=false;for(ā[90]);}function ā; !ā]()*ā[94]=ā[57]);ā[108]){do ā[12][0]<=ā[29]](ā(arguments[0]);}}function ā[29];if(ā<=83?ā);break;case 15:ā+=155:0;ā[23])+1,ā-- :0;return ā>>>1)):(ā);return;case 16:ā[117]?ā+1));}}function ā[48]){ā=1;}}if(( !ā<=10?(ā[64];for(ā<<1)+1,ā=false:0;break;case 4:case 36:ā[59]?(ā++ )==='1',ā[94]]({name:ā!==''){if(ā-=1):0;return[ā,false);break;case 37:if(ā[94][ā[6],'try':ā[19])&&ā();case'*':ā[20]])&&ā[17]];ā(424,ā<=14?(ā(585);ā<=51?ā[37]),ā[203]],this.ā+=-26:0;ā[17]);}}function ā):0):0;return ā++ :0;}return ā[26]);ā[33];return ā):0;}catch(ā[113]?ā[3]===ā[4]=2,ā[19]);else{ā=this;try{ā[45]&&ā[13])?(ā[58]);return ā+=-29;ā[12]);}function ā>>>0);}}function ā+=-299;ā[32])));return this;}function ā>=92?ā;else if((ā<=69?(ā[39]](0);for(ā[11]]<=1)return ā[0]])return ā[0]=this,ā[22]);}ā[49])(ā+=-183:0;ā()){case'/':ā(606);ā[50]));ā[12];return ā=0, !ā[49],arguments);}function ā<=63?(ā[94]);return ā[3]=(ā[65]);}function ā+1],16));return ā<=65?(ā[379]());ā())&&ā[1][0]===ā[27])||ā[43]))&&ā[32]),ā&= ~(ā[49]===ā[37]);for(ā.y||ā[204])/ā[19]+1)continue;if(ā<=61?(ā(373,ā,false);break;default:ā[11]]-1)&&(ā=[];function ā[52]);}}function ā++ );}function ā[8])|| !(ā[9]](new ā:0):0:0,ā='/';ā);return true;}}else ā[52])===ā>=97&&ā[60]]))return ā+=140:0;ā[31]]!=null&&(ā+=21:0;ā):0;}}}function ā<=58?ā[80]),ā[80])):0,ā++ :0;return ā[0]=(ā[3]=[ā[31],'yield':ādo{for(ā[384](ā[71])===ā;while(ā=0:0;break;default:break;}ā[2]);else if(ā+=-372:0;ā<=67){if(ā):0);else if(ā+\".y\",ā[23],'catch':ā[75]],ā[18]]();}function ā[8]]||ā+' '):ā[75]]=ā[0];for(ā=unescape;ā+=-172:0;ā[10],0);for(ā[83]];ā]='c['+ā[14])&&ā[34]];for(ā(): !ā(),'**=')):ā[12][1]&&( !ā[28];ā[34])?(ā|=1:0,ā[81];ā('get')||ā[12]=[ā[19]);for(ā+=-445:0;ā[13]);return ā.y>0?ā[11]]-1]==ā+=-338:0;ā);}else(ā[47]);ā[41]);ā[44]+ā+='r2mKa'.length,ā[184],ā<=96?(ā.fromCharCode(255));return[];}function ā++ );while((ā):0:0,ā[84]]&&ā;return;}return ā];return[ā[83]],ā[31]&&ā[1])===0){ā[88],ā[169];}else if(ā){return typeof ā[31]);return +(ā[56]==0?ā[5]+ā[59]:0):ā[44]&&( !ā[45])?(ā[0]===' ';ā[60]](\"id\",ā[31],{},ā(724)));ā+=268:0;ā[11]))&&ā]=1:0;}function ā+=42:0;ā[62];}function ā[23],'typeof':ā);break;case 38:ā[180],ā[60]]?ā[158]^ā[84]),ā[64])!==ā[72]]===ā=0):ā);return;case 17:ā===\"`\"))return ā[44]]=new ā],0),ā=[], !ā('\\\\r',ā[12]]):0,ā})):0,ā[37]&&ā[38])&& typeof ā[29]]=ā[51]])){ā[16]]('\\x00')+ā[29],'--');case 61:ā[53],'finally':ā[56],'debugger':ā[79]]();}function ā[11]&& !(ā[24]);return ā[11]));ā+'\")'):0;}ā():0;return ā(),'&=');default:return ā+=-313:0;ā[11]]&&ā[58]};if(ā});return ā[63]=ā[63]?ā));function ā);continue;}else ā[36])==ā+=1;switch(ā+=-50:0;ā=['top',ā[0]!==0?(ā[20]+ā);return;default:return ā(116,ā[168],ā,false);}return ā+=242:0;ā[20]?ā[53]&&(( !ā[32]]=ā[23]](ā>0)return ā+=-195:0;ā[40]||ā[1]==\"?.\"?ā[22]]=ā[23]];ā[0])return[ā<=93?(ā={ā[64]);return ā+=16:0;ā[4]]('try'),ā[0]):0;if( !ā[64]]=ā[53])while(ā)return false;}return true;}ā.x==ā(744);ā[48]&&(ā[385]();ā[64]][ā===1?(ā=window;ā+=-3;ā[85]);ā[11]]>1?(ā[24]],\"; \");for(ā[35]]:\"{}\");ā[92]);return ā[19],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ā[13],'img',ā){case 1:case 2:ā?( typeof ā(92,ā=true;}}if(ā);break;case 55:if(ā[116])?(ā+1)];}function ā[21]],ā[79]]();ā[39]](0);}ā=0):0;break;case 3:ā();return;case 26:ā[116],'break':ā)return true;}return false;}function ā<=100)(ā[34]];ā;}}if(ā[138],ā=( typeof ā[34]](ā[71]);return ā<=34?(ā[34]],ā())){ā);}else{ā[3]);return ā[19]])&&( typeof ā[15])return false;if(ā[41]='';ā)):0):0);else if(ā].y-ā.y);}function ā<=82?(ā(462,ā[14]||ā]+this.ā[48]&&ā+=-212:0;ā[11]]+1),ā[182],'=>');default:return ā<=80?(ā[11]]===0;ā[18]);}function ā[37]]*ā[86], !ā[26]]-ā[37]]=ā[49]]),ā[7]();return ā[6])?(ā[25]][ā[183],ā[32])));ā),this.ā[38]]&&ā[36]](ā[36]],ā[36]]/ā={'\\b':'\\\\b','\\t':'\\\\t','\\n':'\\\\n','\\f':'\\\\f','\\r':'\\\\r','\"':'\\\\\"','\\\\':'\\\\\\\\'};return ā[36]):0):ā[24]]=ā[77],ā[2],{configurable:true,value:ā.charAt(0)==='~'?ā[70]),ā[35])(ā[80];ā,1)+ā[17])];}function ā;}}ā,1):ā.x<ā),this[ā[58]])return ā[1]===0||ā++ ){if(ā());else if( !ā(240,ā(237);ā);break;case 1:ā[125]=ā[42]&&ā!=='get'&&ā[37]]&&(ā[47]](1,1):0,ā+=-25:0;ā+=46:0;ā[54]];ā[129]){ā[34])),ā[87]](true),ā):0;ā<this.ā[23];ā[46]&& !(ā[3]];}catch(ā>1){for(ā+=-376;ā[97]||ā,'let');ā[43])):ā++ )try{ā[58],'<=');default:return ā+=97:0;ā){case ā(20,ā[68];ā[11]]==1)return new ā[125];for(ā],0)!==ā){try{if( !ā[9],'return':ā;continue;}}ā[20]]===ā(),'|=');case 124:ā[53]](\"_$\")>0;}function ā[11]]>0)for(ā,true);return ā[58];for(ā);break;}ā[58],'!=');}default:return ā[31]]);ā[89]),ā++ );do{ā==='set')){ā!=true)?ā[9]])return ā<=53?(ā[62])return false;return true;}function ā[46])&&ā());else break;}}function ā==null?ā[4]]('...')):0,ā))(ā[56];break;}ā[55])):(ā]]+1:0;for(ā);case'number':return ā[12][0]||( !ā);}}return ā);return true;}return;}return ā[13])?ā+=-631:0;ā[19]))&&ā[91]]==ā[11]])];}while(ā[71]));ā<=108?( --ā()));ā[18]]===false;}function ā[36]]+ā[84]]);break;}ā<=39?ā)||\"\")+ā[24]](ā[12])[ā[43])):0):0;}function ā|| typeof(ā.x),0<=ā[55]]=ā[86]](new ā[80]);}function ā+=-364;ā))[ā[19],'else':ā[11])||(ā(470):0,ā[2]-(ā=true:0;if(ā(1)){ā]))return true;return false;}function ā[52]|0),this.ā[11]]; ++ā[34]<<(ā[55]]||ā<=45?ā||\"\";ā[1]):0,ā].apply(ā[66]);return ā=true;break;}}ā()==1?ā<=49?(ā[82]]];ā[39]]()[ā++ ]= ~ā[1]=arguments,ā!==''?ā[58],'==');}case 62:ā();return;case 10:ā[64])if(ā=false;}function ā;return;}ā[1])>ā(711,ā[77])(ā[2]&&ā[57]))return true;else if(ā[51]]&&ā[8]])))||( typeof ā=0):0;break;case 2:ā+=-32:0;ā[56],'ig'),ā[167]^(ā,false);break;case 54:if(ā++ ]= !ā+=13:0;ā+=210;ā[15]);}}function ā,0);return ā(722);for(ā<=3?ā.id;if(ā[0](ā+=-438;ā.length===8)return new ā].x-ā[11]],this[ā[89];return ā[89]);ā[47]));}}function ā[21])?(ā[79]+ā[79],ā[88]));}catch(ā+1?(ā,'id');ā[51]||ā[10]]||ā+=129:0;ā<=106?(ā[58],'>>>');}default:return ā[39]);}ā>=127?ā,true,true));if(ā[32]+ā[0],0);return ā[60]=ā<=11?ā[32]?ā[32]=ā[32];ā[59]=ā[63])+ā[87]:0,ā[4]);else if(ā++ :ā[68]);return ā=false:0;break;case 42:ā[63]);ā[56],'true':ā[27]);}function ā[24]);}function ā[29],'++');case 61:ā[4]]('??'),ā[141],ā||0);ā[380]();ā[0]):0;return ā<=20?ā){for(;;){ā[77]);ā[56]^ā[83]]||ā.y<ā[90]);ā[65]);ā-=1):0,ā.y+ā[8]])));}catch(ā):0):0;function ā[3]));ā.y,ā[23];return ā[36]=ā[84]]){ā)===true){ā)){try{ā[56]:ā[56])return new ā(){return((ā+=-104:0;ā[72]);return null;}ā.length===3)return new ā[30]);}function ā[33]?(ā[39],ā<=1?(ā+=-168:0;ā||this.ā[52])ā[34])):(ā[52]-ā);return;case 19:ā===null;ā[56])|(ā[58]:1]^ā[75]);ā)return;try{ā[20]?(ā))):0):0;}catch(ā<=0)return;ā[31].ā();}return ā<=9?(ā[91]=ā[1]:null;ā[72]);return ā<92?(ā[4]);}function ā[10])?ā[14]))( !ā[61]=ā[93])){ā[19])){if(ā);try{ typeof ā[48]);return ā+=394:0;ā+=-344;ā[56],'null':ā){case 2:ā[44]];if(ā[36]);return ā[25]],this[ā==0?ā=true;if(ā[34])<<ā++ ;}return ā?(this.ā[39]]){ā[41];else if(ā[91]);}function ā[7])===ā[40]),ā[57];}function ā[7]();ā){}}return[false,null];}function ā+=535:0;ā()]()[ā[12][1]|| !ā[12][1]));ā[19]/ā[19]-ā[19]*ā++ ]=[]:ā[34],'ig'),'$1'));return ā.length===6)return new ā+=-191:0;ā[20]===ā.length=0,ā[16])),ā[52]-(ā]===\"..\"?ā):0):0):0;return ā,' ')),ā<=37?(ā[382](ā+=149:0;ā(822);ā[12][2]&& !ā[39]||(ā[4]:0):0,ā[27]);return ā[2]!==0?ā[13])&&( typeof ā[45];}for(ā();break;case 56:if(ā[43]||ā[52]?(ā[34]];return(ā+=87:0;ā[42]](ā:0},ā[85],'gim');if(ā(774,1);ā+1]);ā[64])&&ā(730));if(ā[2])!==ā<=99?(ā<=5?(ā=window['$_ts'];ā:true};}function ā[49]]+'.y',ā[11]]:0,ā]>>ā]=1;return;}if(ā[51]?(ā+1]-ā[84];return ā[73])?(ā=\"\";}ā+=-442:0;ā[105]?(ā[6]&&( !ā[177]^ā));}for(;;){switch(ā+=200;ā())!==ā[16]];for(ā[94]))return;ā[27]);ā[37]]());}}function ā[114]);}function ā>>=1,ā[6]];ā[42]];try{if( typeof ā[6]]?ā)):0):0,ā[52]='';ā+1]=(ā):'';return ā(546);ā[378]());ā[174]*(ā[93]];else return ā[52])|(āreturn{ā()):0;switch(ā>>>1));ā[43]))||ā[86]]=ā='hostname';ā='#';ā[39])?(ā[1]);}}function ā<=27?ā[48]](new ā)===0)return ā[131],ā))return\"\";for(ā[52]));ā; --ā[84]],this[ā[29]):ā[4]:0):0;return{ā<=47?ā[37];return ā[1]]-ā);return;case 21:ā+=168:0;ā[92]];for(ā);return;case 18:ā[79]]();}ā===0||ā<=87?ā[16]);return ā[13]];for(ā[56])if(ā.x)*(ā[25]:ā+=-287:0;ā[34]]);ā[86]))===\"get\";ā[49]);if(ā[23];while(ā[139],ā='pathname';ā[10])[0];}function ā[48]][ā<=41?(ā[28]&& !(ā[4]:0):ā[19]:0,ā[166],ā[179];}else if(ā[3]&& !ā+=-48;ā){case 52:ā[119];ā[23])return true;return ā);break;default:if(ā]();case 1:return ā=[0,1,ā[58],0,0,0,0,ā[19]]():ā))try{ā,true);else if(ā,[{\"0\":0,\"1\":13,\"2\":31,\"3\":54}],ā)/(ā[61]);}function ā[171]?(ā[46],true);ā[59]));for(ā+=116:0;ā[2]],ā[46]);if(ā[9]);}function ā[49],unique:false});}function ā+=24:0;ā(),'/=');}return ā[172]){do ā[56]];ā.y==ā){this[ā);try{ā[76]);}function ā])):0;return ā++ );return ā){return(new ā[132];for(ā);case'object':if( !ā[94]){ā[56];return ā[12][1]&&ā[15]);return ā();return;}return ā(403,ā[88]](ā[55]]&&ā('\\\\n',ā('of')){ā[14]));ā[88]]=ā[94]))return ā[88]];ā[58],'^');}}function ā.y)return true;return false;}function ā+1));else return\"\";}return\"\";}function ā[6]],this[ā+=-577:0;ā[12]]+ā[12]],ā[91]], !ā){for(ā[73];return ā[52];try{ā+2);for(ā[69];ā[80]&&ā[24])):ā[60]]():0,ā[54]]=ā.y);break;case 1:case 2:ā[69]?ā[11]]*ā)):0);else if(ā[49]]&&ā[57])?0:0,ā(0,ā[11]]:ā+=330;ā[11]]?ā[11]]<ā.lastIndexOf('/'),ā[45]);break;case 43:ā(),'?.');}if(ā+=9:0;ā[27]];ā+=177:0;ā++ ;for(ā[11]];}function ā[121]?(ā[21])[0],ā[90];ā+=384:0;ā]!==null&&ā]]:(ā[7]){if(ā[11]]>0){ā(155,ā)):this.ā();break;case 42:ā[27]((ā)):0;}}function ā){try{return ā+=-173:0;ā]=[ā]+'\\\\b','gim'),ā=false:0;break;case 44:ā]==ā+=-42:0;ā.length===7)return new ā[40])&&(ā;'use strict',ā]||1)ā===0)return[];return ā[21]?ā++ ;break;}if(ā[21]+ā[16]&&( !ā[19])return ā))):(ā){if( typeof(ā()):0;if(ā[3])ā<=26?ā[186],ā[7]+ā);return;}}ā)))ā+=-106:0;ā[42]+ā+=-415:0;ā[7]?ā[46]);}function ā[76]]();function ā=false;do{ā[4]:0:0;return ā[19]]+ā='';do ā[66],ā[9]](this,arguments);}finally{ā];if((ā+'')[ā[62]=ā<=31?ā[76]);}ā[62];ā[81]+ā[3]^ā=1:0):ā[19]=ā,0)-ā]instanceof āreturn'';ā[78]]=ā[14],'while':ā]]===ā[2]);else return ā[34]&&ā+=17;ā[2]||ā[29]];}function ā[10]);return{ā){}}return{ā));else{ā[31]]&&ā[89]?ā++ ]=true:ā[94])){ā);return;case 33:ā[49]))return true;else if(ā+=-11:0;ā[36]:0,ā+=-30;ā(53);ā;}}}function ā[15])];for(ā<=57?(ā:this,ā[48]=ā(324,ā(53),ā.length===0)return new ā[2]|| !ā-- ;ā[2]===ā[376]());ā+=96){ā[1], !ā[376]()),ā]===1){ā[29]]&&((ā+=-58;ā[52]);for(ā[77]+( ++ā[69]){do ā[81]:0):ā[11]]);if(ā], !(ā[64]](\"\");ā<=25?(ā,1);return ā[2],'throw':ā+1);}function ā[6]),ā[15]=null;ā[48])&&(ā(378,ā+1))){ā[39]](0),this.ā[46]](ā[6]])/ā= typeof(ā[75]);}ā+=22:0;ā[20])):0,ā<=21?(ā[56]]:0):0;return ā+=538:0;ā[67]],''),ā.cp;ā+=274:0;ā[51]||(ā++ ])>>>0;else return ā,true));ā))return[true,ā[55]):ā[106]);}function ā=1<<ā[21]|| !ā[79];return ā<=27?(ā.length=54;ā[0]=[],ā]>0;}function ā<=29?(ā[49])break;ā+=-99:0;ā<=78?(ā[64]);}function ā+=73:0;ā[113],'??');}return ā[62]]&&ā[4]++ :ā-1].x,ā[1]++ :ā();}else{for(ā=String;ā[49],'gim'),ā,0)===\" \")ā[14]))||ā[51]]();return ā[52])break;}else if(ā[11]&&(ā[12]]);ā-1]===\"..\"?(ā+4])):ā);break;}}else(ā=0; !ā<=32?(ā+=277:0;ā]=1;for(ā[11]);if((ā[53]))||ā+=-367:0;ā<=109?(ā[91]][ā()==ā;switch( typeof ā<=72?(ā[52]]^ā[80];case'boolean':case'null':return ā[11]]));}}function ā[19])):0,ā[73]]){ā<=79){if(ā], typeof ā);}else{return;}}catch(ā[0])return true;else try{ā[39]](1));ā[92]):0,ā<=74?(ā[18]),ā,0)!==ā=Array;ā[90]],this.y=ā[26],ā;continue;}}while(ā)return\"\";ā===\"\";ā(221);ā]<=ā[96]=ā[56]):ā[86]:ā==\"\")return true;else if(ā[86]?ā[58],'>=');case 62:ā[44]));ā+=89:0;ā[383](ā[91]);}}function ā[15]&&( !ā[48]; ++ā]=1;ā[47]](0);if(ā[38]||( !ā[16];return ā+=-202:0;ā[0]=arguments,ā+=137:0;ā);break;case 5:ā[123]=ā[2]);default:return ā[1]+(new ā[58],'!==');default:return ā[10])[0],ā[63])[1];}function ā[10])[0]+ā:0):0,ā[31],'for':ā(497);ā[3]?(ā[63])[1];return ā[11]]>1&&ā=[0,0,0,0],ā= delete ā[176]?ā:false;ā:0))/ā.charAt(ā[34]);ā]);else return ā[0])):ā[0]));ā<=101){ā[49]]+'.x',ā++ ;}if(ā){throw ā-30:0):0,ā[78]);return ā[127];ā]='\"':ā,1): ++ā[2])[ā,0);for(ā[72]];else return ā[5]);ā[26]),ā[14]&&(ā[43]|| !ā[44]))(ā)!==ā[114])return 1;else if(ā[62]);}}function ā[4]]]^ā+=-190:0;ā+=112:0;ā,'\\n')>=0;return ā.charCodeAt(0)-97;for(ā[48]);}function ā[2]=',\"'+ā===(ā[1]);if(ā[84]](ā<=97?(ā)):0:0,ā[5]){ā={'tests':ā+=-19:0;ā]):0;return ā[2]);if(ā[19],'delete':ā[11]]-1], typeof ā(123);}catch(ā[33]){ā[54]]={};ā(492);ā[2])+ā[4]]('=>'),ā[38]===ā?1:0);ā=[0,0,0,0,0,0,0,0,0,ā=true:0,ā=Object;ā[6]);else if(ā[17])%ā[49])>0&&ā[1])[ā+=-6;ā(95,ā[93]=ā[93]?ā[25]||ā[38]?(ā=parseInt;ā):0;if( !ā+=-395:0;ā[22]){ā[93],ā[3].concat([ā[34];}function ā+=-297:0;ā[1]){ā))continue;else if(ā[58]^ā[31])return false;return true;}function ā&& !( !ā[22]?(ā[29]);}catch(ā[58]/ā[36]||ā,1);try{ā]-=ā[89]);}}function ā-1; ++ā[2]&&( !ā[58]=ā[58]:ā[34])if(ā[12]),\"\"),ā[11]]),1):ā[11]]),1);ā[34]){this.ā[56])return true;}catch(ā+=290:0;ā[41])>>>0;}function ā[19],'export':ā[6]<=ā(569,ā[41];for(ā);break;}}function ā=true;}if(ā];else{ā)):(ā[45]]||ā[55];}ā++ ]={}:ā);return false;}}function ā[23])<<ā+=51:0;ā[61]]=new ā.y<0?ā[46][ā===1&&ā+=635:0;ā[12][0]||ā<=63)ā);break;}break;default:break;}}function ā[17]);ā[93]);}}function ā)):0;break;}ā[106])return ā;}if( !ā[72]]()/ā('set'))&&ā===0)return'';ā[196],ā+=166:0;ā[17]:0,ā(591);ā[25];ā[49])){ā[53],ā]();}catch(ā[16]](''),ā[53]=ā(212,ā[54]){ā+=-62:0;ā<=7?ā[62]);}ā.x||ā[192],ā+=-220:0;ā[19]]||ā()]){ā[17]]=ā+1];if(ā[44],'...')):ā[12][2]||ā[95]))return true;else return false;}function ā[11]]-1){ā[90],ā-1;}else ā>>=ā[90]?ā=true;}ā.PI-ā[14]);return ā[94]],ā[58],'&&');case 61:ā;if((ā[37]]();else return ā+=34:0;ā[42]?(ā[22]],ā,false)):0;}function ā[34]^ā+=-124;ā++ )]+ā[11]]-1);ā(506);ā[71]);default:return ā+=-9;ā[19].cp;ā?this.ā[73]]^ā[15];}}function ā.x)+ā,'\\n'));}function ā[11]]>1)ā[89]);if(ā[68];}function ā[56]:(ā):0):0);else if(ā[75]];}catch(ā(){}function ā<<(ā[3]|| !ā);return;case 43:ā:0;function ā+=-292:0;ā[6]?ā+2]));else if(ā[68]||ā-1].y),ā[41],'');ā[55])?(ā[99])==ā[6]+ā;}return'';}function ā[56],1);ā];return[0,ā.split(ā,true);break;case 6:ā[2]=', \"'+ā+=389:0;ā(),'%=');}else return ā<=13?(ā[54]){if(ā[70]:ā[85]||ā[70],ā[73]](ā(49,ā<=17?(ā[53]);return;}ā[12]),\"\");ā=':';ā[12]),'%0D');ā[66]]?ā[82]),ā=true:0;return ā(436,ā)];}function ā[30]]===1&& typeof ā]));}function ā[52])^ā(),'case':ā+1];if((ā[57]];}catch(ā[2]-ā[23]]('on'+ā[50];return ā];function ā){case 60:ā[37],1];ā,true);break;case 25:ā<127?(ā++ ])&ā[11]]-1);}return ā)return[true,ā(),'*=');case 42:ā[19],0,0,0,ā[34]]);switch(ā<=68?(ā[34]]?(ā||1,ā;}}catch(ā[0][1]?ā[84]]==0&&ā[57]]||ā.substr(0,ā[26]);return ā)){if(ā===1)return āreturn\"\";ā);case 15:ā='on'+ā);break;case 44:if(ā[10]))&&( !ā[75]]&&ā<=60?(ā]]],ā):0;else if(ā+=-754:0;ā[52];}ā[1]];}function ā=[];for(;ā[18]][ā[0];function ā)):0):ā[38]][ā[21]]),ā+=-198:0;ā+=346:0;ā<=40?ā+=55:0;ā,'*/',ā+3]=ā[16]);}function ā[48]<=ā+=625:0;ā[35]]?ā[93];}}return ā))continue;ā+=-136:0;ā[43]])return ā[43])):0,ā[58],'>>');}default:return ā[83]);ā[84]];if(ā<<1,ā;while(1){ā[52])+ā[83]),ā[25]);return +(ā,true);}}}catch(ā[24]);}}function ā[127]);ā[65]))return true;else if(ā<=75?ā[82],1);ā();}}function ā==='on'+ā)===false&&ā[42]&& !ā<=6?ā)&& !ā(18);ā]:0;return ā[110];ā?0:1))+ā===1;ā]][ā[19].jf;ā,0);if( !ā[372](1,1);ā<<1^ā[2]++ :ā[48]||ā[3])&&ā[19]&&(ā<=18?(ā[31])?(ā[57]];for(ā();break;case 43:ā[73]]=ā]?(ā[37]);}function ā+=-250:0;ā)return true;}function ā+=-339:0;ā[29],1):0):0;}}function ā,false)):0;return ā[49]);}}function ā==null?this.ā[79]);return ā)):0);return;}else if(ā[87]](0);ā]===0?(ā):0;return[ā+2]));}else if(ā[44]](ā[93]);ā[1])):0,ā[56]);return ā);}finally{ā[46]||ā[2]=(ā=0^ā[16]]('');}function ā+=-207;ā[93])^ā[12][0]|| !ā+=188:0;ā.substr(1)):0;return ā[11]]>0)ā(new ā[19]]?ā))return true;return false;}function ā]?ā[78]);}function ā,false);break;case 56:ā[34]));}function ā]%ā[13]))return ā[44]||ā[19]](ā[11]]>0?ā++ ;while(ā[19]],ā[57],\"\");return;}return ā[83]||(ā[49]])return ā)>ā[11]]-1)return ā).ā[11]]){case 0:return ā(){ typeof(ā[40])||(ā[15],'continue':ā){this.x=ā={'false':ā[77]]-ā[77]],ā[25]/(ā<=107?ā[7])==ā[85],arguments.callee);}function ā[48]);ā[20]],ā[53]);}ā==1?(ā[58],'<<');}case 61:ā[22]]||ā+=136:0;ā+=165:0;ā)|ā('',ā++ ;break;}ā[58],'||');default:return ā]):0):0;return ā[57]]=ā[87]<ā];}if(ā[27]](0);return ā[50]===ā++ ):0;for(ā[4]=(ā):0;try{ typeof ā[82]]);ā+=118;ā:0});function ā+=92:0;ā){case 45:ā[107])return ā[29]);}function ā[55])],ā<=43?ā]);}}function ā(891);return ā-1]===ā+=59:0;ā();while(1){ā[35]]),ā[29])if(ā):0):0):0;}catch(ā().concat(ā[91]);return ā[2]),(ā[94])):0;}ā++ ]=null:(ā[68]),ā[12]),'%0A');ā[165]||ā={};if(ā[2];}}}function ā));for(ā[16]]||ā,0)):0;}function ā[73])||(ā[68]];}ā[24]);}ā,true);}if(ā[0]:0):0,ā(828);ā[12]),'\\n'),ā[56];else return 0;}ā[150],ā);else return[];}function ā[57])))return ā]='\\'':ā[43]);break;case 10:ā[47]=ā,\"var\");if(ā[38])?(ā[47]+ā[100],'let':ā=[]:0,ā?0:0,ā[47],ā,false);break;case 40:case 41:if(ā++ ]=((ā-=4)ā++ ];}ā[93]);}function ā[53]]=ātry{if( !(ā[43],ā[18]||ā[3]];}function ā[85]?ā[36])===ā[28]]=ā.length;return{ā[53]][ā<=81?(ā=encodeURIComponent;ā[149]];ā-1]),ā[26]])return ā(96);ā+=-157;ā[51]](ā[28]:0):ā[18]&&ā<=76?ā,false);}function ā<=85?(ā[28]?ā[28]:ā+=-30:0;ā],''),ā(93));ā[27]))&&ā[47]),((ā[61])return true;}function ā=1:0;function ā[34]];if(ā+=-291:0;ā=String.fromCharCode,ā[195]);}}function ā:0):ā++ <ā[59]};ā[27]=ā();break;case 36:case 38:case 3:if(ā[27](ā())&&(ā[27],ā,1):0;else if(ā[134])return ā[88];return ā[12]);ā[12]),ā(351,ā(74);ā+=-126;ā==0||ā<=35?ā[60],ā[11]]),1);}catch(ā[57]:0;}function ā+=102:0;ā[67]);return ā<=19?ā)try{return ā[59])ā[75]),ā[42]){ā[58]&&ā[39];return ā='$$_'+ā[46])==ā[11]]<=ā[75])){ā<=110?(ā,1)===ā[64];ā[41]])return true;ā++ );}break;}ā[58],'===');default:return ā<=99)ā,'\\n',ā(166,ā=null;}}catch(ā.length-2;ā[35]+ā[77]),ā[12]||ā[0])continue;ā[43]&& !ā[44],ā[80]<=ā[35]=ā[71]),ā[9]])];ā[15]&&ā[4]](new ā[57],'const':ā[58]& -ā[63]:0;return ā+=132:0;ā[10])return;try{ā[74]];ā[82]);return ā){case 42:ā):0;}}}}function ā[55]);if(ā-- >0)ā[17])){ā[58]?( !ā(722)+ā[77]);return;}ā[12]),'');}function ā[6],0,0,0,0,0,0,0,ā<=50?(ā[178]?ā+=647:0;ā+=12;ā);return;case 11:ā[34]]){case 0:case 3:case 4:ā[52]||ā(514);ā))return true;}ā[70]):0,ā++ ]=false:(ā++ ]= ++ā[10]||ā[3]);ā[86]],'\\n');ā.length===5)return new ā,\" \");if(ā[15]=ā(603);ā()){if(ā[0];if(ā<=52?(ā(583,0,ā(727);ā!==\"js\";ā[17])){if(ā)return true;ā[36])),ā[72]])return false;if(ā='port';ā));return;case 20:ā){}}ā+=-51:0;ā){if((ā[21]))&&ā[11]]):(ā+=-387:0;ā[75]?ā[11]+ā]='';}ā,1);}catch(ā[23])&&( typeof ā[92]);ā[11];ā[52]);return ā<=84?(ā);return;case 6:ā[56]:0,ā[10]===ā[64]]){ā&= ~(1|ā]:0,ā[3]&& !(ā[50]||ā=[]:0;if(ā[52];}function ā[56]);}ā+=448:0;ā[1]);case 3:return ā[56]);continue;}}ā++ ];if((ā[33]|| !(ā+=0;ā[40]);switch(ā)||( typeof ā.push(parseInt(ā[56])));ā[189],ā[43],'if':ā+\".x\",ā[7])return((ā++ );}if(ā[50])return ā[15])||(ā[76]]();}function ā[3]='\")'):0):0;}function ā||[];}function ā<=77?ā[198],ā):0;}return ā,(ā[8]||(ā[16]+ā[38]&&( !ā[59]]=ā[101],'void':ā+=-300:0;ā+=640:0;ā+=-48:0;ā[16]]=ā[56]]<<ā[20]]==ā,true,true)):(ā+=214:0;ā[84]]+ā[46])!==ā= -ā[126]=ā[53]&& !ā])&& typeof(ā):0, typeof ā[52]/ā[30]=ā,''];return[ā+=33:0;ā;continue;}ā,this[ā-1)*ā[15]):ā[12][1]&& !( !ā='//';ā[0].y):0,ā[42])?(ā[27]))return true;else if(ā[381]();ā);return;case 47:ā[170],ā[75]];ā,value:ā&1;ā[1]=(ā);break;case 33:ā])ā[9]);return +(ā(724);return ā[11]]?(ā[29];}catch(ā;}else return ā[0]++ :ā+=56:0;ā<=105?(ā=',\"'+ā[72]),ā<=59?ā+=27;ā[77]]),ā)>=0;}function ā[23]-1)?0:ā-1){ā)return false;ā[39],'instanceof':ā(842,ā(),'<<=');default:return ā[42])&&(ā[46])===ā(),'');}ā[11]]>1){return(ā[140]){ā[102],ā]+'\\\\b','gim');if(ā);break;case 9:ā[1]=[ā.y)*(ā[36]?(ā[15]|| typeof ā[3]++ :ā():0;break;}if(ā[7]){ā();return;case 39:if(ā[56]]=ā[4],'default':ā[27]&&ā[24]];}function ā<=8?(ā[11]]];}function ā[25])+ā[25]?(ā[25]):0,ā));if(ā[38])?ā(891);}}function ā[94])break;}else if(ā[19])?(ā[4]===0?(ā]];for(ā()):0;break;}ā++ ):0;}ā[22]](this.ā(470);ā)!=ā[12][0]&&(ā){case 5:if(ā[39]](1);ā);return;case 12:ā[1])return ā[6]&1);ā[26]));ā){case'string':return ā+1),ā[31]])if(ā]&1;return ā[21])[ā[18]))&& !ā[31]=ā)):0;break;case 46:ā[28]):0):0;}function ā[63])[0];}function ā[79]):0;if(ā)return false;else if(ā[31];ā<=16?(ā[44]))&&ā<=36?(ā[67]);}function ā){case 43:ā]in ā])return true;return false;}switch(ā[72]]();}function ā[45],ā[58]):ā[7]?(ā[60]),ā[185],ā<=12?(ā+=575;ā<=86?ā]]&&ā+=467:0;ā==null?(ā+=-221:0;ā[1]:0,ā()){ !ā(1))if(ā[52];}for(ā[8]&&(ā,1):(ā[40]]);}else if(ā[29]]=true;}function ā[46]),ā[202],ā[29])return;ā[193],ā[6]]():ā-=2)ā<=4?(ā[46]):ā[31]]);return(ā[21]))||ā+=328:0;ā[142]?0:ā-1,ā[15]))&&ā<=38?(ā[21]);return;case 7:ā(16);}catch(ā-1;ā[83]&&ā='\\r\\n';ā[51]?ā<=70?ā+=-240:0;ā(563,ā[32]);break;}ā(6,ā+=382:0;ā===0?ā[66]);}function ā(697);ā===0;ā[56];while(ā+=-38:0;ā)return[ā[2]||(ā[0])){ā[29])|(ā[58])),ā[1]===ā+=459:0;ā[2]));return ā[63]], !ā[58],'**');default:return ā[58])):ā[54])break;ā[31])&&(ā[56]]=(ā+=167:0;ā===0||(ā,false);}ā){case 15:ā[60]);return ā[70]);ā,this.x=ā[92];ā+=-391;ā+=-111:0;ā[79]),ā.charCodeAt?ā,false));}ā[32]()[ā,'let'):0):0,ā==='`')return true;}}function ā);}return null;}function ā(),'-=');default:return ā<=37?ā.y));}function ā[58])){ā[36])):0):0;}function ā[4])?(ā(34);ā().getTime(),ā+=577:0;ā+=-401:0;ā[51]&&( !ā[71]);ā.length===2)return new ā+=11;ā+=-759:0;ā[0]),(ā[3])];}function ā));}break;}}function ā[29]);ā(){return !ā+=63:0;ā+=-249:0;ā^=ā=false;else{ā[38]))return ā[74]),'');}function ā)>0?(ā[35];return ā]>>>ā[57]))){ā[63]](ā<=46?(ā.length-4;ā[29]);}}function ā]++ :(ā[8]=ā<=44?(ā<=95)ā[58],0,0,0,0,0,0,0,0,0,0,0,ā[115]?(ā[8],ā[34]]),ā:0;}catch(ā[36]&&(ā)0;else{if(ā[0]);case 2:return ā<=42?(ā(){return new ā[25]]||ā]++ :ā[33])?(ā]):0;}ā[89]));ā]-- :ā[1]!==ā[14]);}function ā[120])),ā<=48?(ā[71]);}function ā=Function;ā==0){ā[120]));ā[61]]-ā[84]]==0){ā[4]?ā[26]+ā[4]=ā) !ā[14])!==ā();function ā=false;break;}ā);}while(ā++ ]= --ā-- ;}this[ā[5]++ ;for(ā++ ]));return ā[61],ā]):0;}}function ā[1],1));if(ā[25]]-ā===250?ā[4][ā)|0;}}ā[95]?ā[4]=1,ā+96));}ā[34]}),ā[31]];ā[14]);default:return ā=Error;ā[51]),ā[55]]){ā===0)return false;if(ā[65]:ā[39]];ā[39]]=ā.length===4)return new ā)return 0;ā);return;case 8:ā+=-233:0;ā[38]))||ā[68]){for(ā[93])||ā[48]];ā[159],ā[56]];}return[0,0];}function ā[31]]|| !ā[26]]!=ā[11]]];function ā,1);}function ā);}else{if( !(ā[155],ā[0].x,ā[8]]/ā[3]](ā(arguments[ā()];if(ā[35]);return ā=='var'?ā[53])||(ā[11]]-1)!==ā=false;try{ā[3]];ā);break;case 55:case 2:ā+=2)ā[1]];ā();return;case 22:ā();break;case 2:ā[1]]=ā[56]];if((ā[187],(ā[26],arguments);}function ā[58]];}function ā(398);ā[22]);}function ā[42]);if(ā]='\\\\':0;return ā[11]]==0)return new ā<=71?ā[83];}catch(ā[2])+1,ā]&=ā[49]](ā[94]);}function ā[1];for(ā(217,ā[20]));ā[83]+ā[7]]=ā-=5,ā[11]));}function ā]=1:0,this.ā[57]);if(ā[93]);break;case 52:ā+=-670:0;ā,false)):(ā[7]](ā=true:0):0;if(ā[161],ā>0)if(ā[59]]);ā[74]]?ā[91];ā,this.y=ā[64]]||ā,false);break;case 59:ā<=56?(ā=this,ā+=8:0;ā=Math;ā)):0, !ā[1]);for(ā[73],'var':ā[4]]=ā[92])===0;ā<<1)|(ā===''))&&ā(595,ā+=117:0;ā[107];else if(ā(722)))return ā=0;return{ā[63])?(ā[3]=1;ā=\"\"+ā[42]);return ā[21],{keyPath:ā[29]);return ā=\"\",ā[74]<=ā[52])));ā[53]));ā[1]),(ā[4]](' '),ā+=-245:0;ā[12][2]&&ā+=-28:0;ā[74]],ā()).ā())/ā==='img'||ā+=68:0;ā<=64)debugger;else ā))|(ā[34]]];return[ā+=-213:0;ā[12][1]<ā+=320:0;ā]=\"$_\"+ā[118]){ā[10])[1]||'';return ā<=92?ā[148]?(ā[20]]){try{ā[7]);}function ā<=89?(ā[31],'new':ā[4]](0);while(ā[18]]=false;}function ā[11]]-1];ā[54]))break;ā;}else if(ā[188];}}function ā);return;}else if(ā<=88?(ā[38]||ā[85]+ā[79]]===ā[58]);ā[85]:ā;}else{ā[0]>>>0;}function ā[56])+ā(),'function':ā='',ā[13]]=ā]<<ā.reverse();return ā[18]);ā[12][1]||ā[59]]===ā[0]){ā[76]][ā==''||ā[27]](),ā(915,this);ā!=null)return ā[4]]('\\n');return;}ā,''));ā[4]](this):0;}function ā[14]|| !ā[107]?ā-=1:0,ā){for(;;){while(ā[85]);return ā===251?ā[17]);}ā[0][0]&& !ā[11]);}return ā[4]=0,ā[12][2]>=ā[61]?(ā[76]](1));}function ā<=22?(ā[82]],ā[59]]?ā[9])|((ā<=102?ā]);if( typeof ā[62]===ā[56]);ā+=431:0;ā[38]&&(ā[24])):0,(ā).split(ā+=21;ā[21])?ā=1:0;ā[1]]===ā[38]));ā[45]);break;default:if(ā[12]]=ā[12]);return +(ā[194],ā[89]);}function ā,false);if(ā[43])||[];return[];}function ā]|=ā[58]]=ā[45]](ā[11]);}function ā[45]:ā[53])])|0,ā[64])){ā<=28?(ā())){if(ā[34]]){case 0:case 3:case 4:case 1:case 2:return true;default:return false;}}function ā[58]],ā));}catch(ā[44]];ā[93]):0):0,ā[58]]&ā[135];return ā[57];ā<=15?ā+1)===ā]=1;return;}ā={};}ā[43],'ig'),'$1'),ā=Date;ā);return{ā,'let')):ā[16]),ā={};for(;ā);break;case 53:ā[41]));}}catch(ā))||((ā.length===1)return new ā[11]];switch(ā){case 0:ā[3]]);break;case 5:case 6:ā(342,ā[181]?ā++ :0;}function ā[77]]=ā[62])))continue;return ā++ ):0;while(ā[0]?(ā[49]=ā[49]?ā+=238;ā;switch(ā(0))ā=null):ā)|( ~ā<=91?ā[19]):ā)?0:ā<=0?(ā=1):0;break;case 1:ā[375](ā[34]];}function ā[4]](this.ā[47]];ā+=-34:0;ā[69]];ā[160])):ā<=30?(ā[61]),ā&1)?(ā[85]));else return ā[7]];}}}function ā[34])|((ā[2]?(ā(146,ā>0)ā[1]?(ā('-->')&&ā[74]in ā[38],0);if(ā[33]);return +(ā+=1)ā[69]]&& !(ā,0);if(ā[57]);}function ā();}if( !ā[34]]==1?(ā())break;}}while(ā[48])||ā[151]||ā]: ++ā<=103){if(ā[69]][ā, typeof ā[14])return;if(\x00菆(\"r2mKa0\\x00\\x00\\x00aǄ\\x00ja(/8;):92'+*1%Gc#66Q-;*6R-C_*-7*\\x006S\\x00>>c6Z\\x00>:6\\\\\\x006]0\\x00>\\x00>>-\\x00--;4*<--;0*--;%*--;8*--;;Ý*---<-\\x00--;4*-;:*>-;;Ö*>-;*>#6-B-C1*-;n*1\\x00\\x00·>7--;*&-;8*>--;4*^>--;*&-;*>-;8*n>--;;Õ*+&-;)*>-\\x007-N&-\\x00--;4*^	>n\\n-\\x00--<--R-C*-;\\x00*-*-;;Ð*&--;%*--;&*-*9-;8*\\x00\\x00\\x00\\x00\\x00(4E%)8ÿ-Aҳ	6>--9cҳ-;*	>L>-;I*	>L6K-;'*	>L>-;d*	>L6J-;*	>L>-;8*69/68-;*	>T?&u--7 *-7*?-7**-;	*&\\x00\\x00*>\\r*6A*>*>*>*>	*6F*6G\\r*6H*6I\\n\\x00-;;*	>T?&--7 *-7$*>\\n>\\x00\\x00\\x00?	>w?\\x00?-;*+&?!?7	>ª?-;5*?\\x00-7**+&@\\x00-7**9?-;*&-;*?H?\\x00<*[-;*?M\\x00\\x00\\x00	\\x00[\\x00?-\\\".C.:?\\x00-#6!\\x00\\x00	>³!\\x00????\\x00?+&#??*-;*%5*?%4?7*	\\x00F*\\x00\\x00/???\\x00-7'*?\\x00\\x00\\x00-;8*6QQS<6RRQ\\x006S\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00$#6#6	#6\\n#6#6#6\\r#6#6#6#6#6#6\\x00\\x00-R-7*\\x00-;4*H\\x00\\x00´?\\x00?-;4*+&\\r?7$6\\x00Q	6<\\x00*-;\\x00*&!R	6	<\\x00*	6\\n\\x00\\nS	6\\n<\\x00?-;4*+&3*\\x00+&*Y*-;\\\"*&-;\\\"*?7=\\x00\\x00	²\\x00	>x!\\x00\\x00?\\x00?F*-;4*C\\x00?F*d?\\x00-7'*<$6\\x00-7'*<!\\x00#66?\\x00/>¦??\\x00?-;+*+&@\\x00?F*?\\x00?F*?-;4*Cd?\\x00-7'*<??7J\\x00\\x00\\x00,-B-7**?-B-@;**?-B-@&**?\\x00(4E%)8-;?*	>L\\x00####\\x00\\x00\\x00o&j-7=**?&O-7:**>-C**>-?--;*?&#\\n-7:*0\\x00-C*0\\n-B-7*0\\x000#>*	?.%\\x00.'%'--7	*\\x00\\x00\\x00!#>\\x00\\x00\\x00*%'--7	*\\x00\\x00\\x00\\n3\\x00	\\x00\\x00[-;*?	>Z5&-;~*?Ə\\x003?-:'**-:'**-FG*>&\\n-;*?\\n-;R*?\\x00\\x00\\x00#5&8-B-@&*0\\x00-B-@&**-73*0\\x00\\x00ƒ-9?\\x002-7*,&D	?\\x00?.%!\\x00-76**-\\\"&-76*-76**%'\\n/\\x00.D-76**-\\\"&-76*\\x00.D-76**%'\\x00.D&\\x00.D?5'%(5&-7	*\\x00\\x00==%25&±-7_**&D-7_**-B-@?**a&-7_**-@8*-C<*-C	*1\\n-7_**-C<*-C	*\\n_5&?\\x00-7_**&\\x00-7_**-@8*-C<*-C	*1\\n(-B-@?*(-C	*3_!\\n-7_*-B-@?*(-C	*3-7	*\\x00\\x00==?-B-8*0\\x003?\\x00\\x00-C\\\\*0\\x00-C\\\\*0\\x00\\x00-FN*\\x00-C	*\\x00\\x00ã\\x00-7**\\x00R&$h\\x008-\\r-7*<?\\x00>k&³\\x00O?-B->@*3?-B-89*(-7_**_-7**-CB**¢3?-`-6*((AҮlүҮ(-A9**lүљ(-AP**lүѰ(-7\\\"**lү\\\"(-?**lү̖1$h\\x00\\n$h\\x00\\x00\\x00->*\\x00\\x00\\x00-B-@;**&-B-@;*0\\x00\\x00X	?\\x00?.%!\\x00-76**-\\\"&-76*-76**%'\\x003?%D\\x00\\x00Y\\x00&O\\x00?\\x00-7**+&= 333\\x00*?\\x00**&Ə\\n-@*3>D?-7*&?7J:\\x00\\x00J\\x00.N\\x00.\\\"<?\\x00.,\\x00.0\\x00.KO>±?\\x00******&:\\x00\\x00--;b*&\\x00-;*\\x00\\x00--;b*&\\x00\\x00\\x00	\\x00\\x00\\x00\\x00\\x00--;w*?-U'\\r-\\n-;9*,5&c-:F*=-=*=-AK*=-<#*=-A	*=-<O*=-6*=-6&*=-6*=-K*=-A(*=-K\\x00*=-A/*=-=S*=?-B-7J*0\\x00\\x00D\\x00?-7**+&\\x00*>&\\x003>U	?f+&	\\x003>U\\x003>U\\x00\\x00ʠ\\x00-7*-7**\\x00-CB*-CB**\\x00-CI*B\\x00-8*\\x00.I.6\\x00-C**-@*,--&h-7!**-7**\\x00--;*&K\\x00-7!*-7!**-7**\\x00.IO $$\\x00-7Z*-l-C+*\\x00-7!**\\x00-7Z*B8\\x00-C*-C**\\x00.7Ə,&ƍ-C**-9,'-C**Ə,'-C**-C	*,&ţ-7!**-7Z**,?-7!**-7**\\x00--;*&Ĳ\\x00-7!*-7!**-7**\\x00.IO&\\x00-7Z*\\x00-7!**-@Z*-A*?-C**-9,'-C**Ə,*-75*->D*-;)*\\\"'-75*-:V*-;)*\\\"& -B-:%**&A3\\x00> -:*\\x00-7!**-:V*?-7W*-A*-7**\\x00,&\\x00-CI*\\nU-B-7J**&K-B-7J*-K!*3?-7@*:->[*\\x00-7!**->\\r**->**\\x00,&\\x00-CI*8 \\x00-7!*-7!** \\x00-7Z*-7Z** \\x00-CI*-CI**\\x00\\x00Ā-C\\r*?-A'*=?-6<*=-C*=?\\x00.$&\\x00?-7**+&}**2\\x00****&W*-C*,\\x00**-@*,&) \\\"\\\"\\\"\\x00-7Z*-7Z**\\x00-7!*-7!**\\n*\\x00**?7\\x00?-7**+&7**2\\x00****&*\\x00**?7D\\x00\\x00\\x00©-:9*=-@W*=-=@*=-@Z*=-8Z*=-?R*=-:*=-@\\r*=-?Y*=-FT*=-=.*=-AA*=?\\x00?-7**+&K*?&7\\x00	?&(\\x00-+-7 *\\x00*\\x00-*-7 *\\x00*?7X\\x000\\x00\\x00³AT\\x00R\\x00?\\nE\\x00\\x00*?\\n3\\x00\\x00**?\\n\\x00\\x00***_?\\n\\x00\\x00-@W*,&+\\x00-7\\x00*-7\\x00** \\x00-7*-7**\\x00-:*,'	\\x00-@\\r*,&\\x00\\x00*%7\\x00\\x00\\x00k?ee ```-CB*,'-7!*,&\\n\\x00Ə\\nB-7*,&\\n\\x00\\x00\\n.-F\\n*,&	\\x00B\\n*2-70*,&\\n\\x00*\\x00\\x00\\x00ê#>\\x00\\x00*%O-U-9-Ua?\\x00*&-;H*\\n\\x00%I\\x00.I.%\\x00-7**-;:*K&*\\n%$\\x00/\\x00.$-7G**2-C\\r*&-7G*0\\x00&--7	*\\nL-7**-;*,&$-7:*\\x00**\\x00.$**E\\n-7:*\\x00**\\x00.$_\\x00\\x00-7G**&\\x00-7G**-7 *\\x00\\x00\\x00^#>\\x00.I\\x00%*?&-:9*-C<*1\\x00/\\x00\\x00.I\\x00*%'&--7	*1\\n-C*\\x00*\\x00\\x00\\x00(?:?%-Ə%7\\x00/\\x00\\r-7:*-C*-<V*->P*g-8C*-?*g\\x00-C*\\x00-7,**2-C\\r*&\\x00-7,*D:\\x00:j?\\x00-C*\\x00-7,**2-C\\r*&\\r\\x00-7,*\\x00\\x00\\x00:j\\x00\\x00h-7\\x00*\\x00-7\\x00**5&\\x00/\\r-7,**&5--;*&-7,**-7 *\\x001\\n-7,**-7 *\\x00\\x001\\x00\\x00}-7\\x00*\\x00-7\\x00**-7\\x00**-;*,&5&\\x00/\\r-C**&9--;*&-C**-7 *\\x00]\\n-C**-7 *\\x00\\x00]\\x00\\x00\\x00©-$-7 *\\x00-7**?-7**-;*+&-;8*-@H*.%</6Ə Tii	6,?.!\\x00\\\"	.!.!\\\"&3-;*-8$*.!<->)*<.!<Ҳ<.%</6--;8*5&Ə.J-;8*-@H*.%</6Ə\\x00\\x00s-\\r-7*<?\\x00>k&\\r\\x00O\\nR.R-;*,&?\\x00	>®-7**?R&)-;:*-=E*<-?*<.%</6--;8*5&Ə\\x00\\x00\\x00\\x00ħ jjj-B-7N**2-C\\r*&-B-C,*-B-@**-B-@**-7=**-7;**&.-B-C,**-7=**-7;*0\\x00-B-C,**-7=**-7B*0-B-7* ,,-B-7**-7=*-B-C,*3\\x00-B-7**-7=*3\\x00?-B-7**-7=**-7:*0-B-7**-7=**-C*0-B-@**-B-@**-7=**-7;**&.-B-7**-7=**-7;*0-B-7**-7=**-7B*0\\x00\\x00?3\\x00?\\x00%&\\x00%-\\x00Ə%7:?-C*0\\x00-CR*0-7,*0-C*0-C2*0-7I*0-7[*0\\x00/\\x00:\\r\\x00f-7\\x00*\\x00-7\\x00**\\x00-7\\x00**,&:\\x00-7\\x00**-;*,5&\\x00/\\r-C**&-C**-7 *\\x00\\x005:-7\\x00*\\x00-7\\x00**-CR**&-CR**-7 *\\x00\\x00F-7\\x00*\\x00-7\\x00**5&\\x00/\\r-7,**&-7,**-7 *\\x001\\x00\\x00-C**&-C**-7 *\\x00\\x00B-7*\\x00-7**-7\\x00*\\x00-7\\x00**-C2**&-C2**-7 *\\x00\\x00B-7*\\x00-7**-7\\x00*\\x00-7\\x00**-7I**&-7I**-7 *\\x00\\x00 -7[**&-7[**-7 *\\x001\\x00\\x00\\x00-B-7N**2-C\\r*,&8 \\x00-B-7N*3\\x00%1\\x00-B-7N**%1\\x00?\\x00.1-C2*0\\x00\\x00.1-7I*0\\x00.1-7,*0\\x00.1-CR*0\\x00.1-7[*0\\x00.1-7G*0\\x00.1-C*0\\x00-C2**&-C2**-7 *\\x00\\x00-7I**&-7I**-7 *\\x00\\x00-7,**&-7,**-7 *\\x00\\x00-CR**&-CR**-7 *\\x00\\x00-7[**&-7[**-7 *\\x00\\x00-7G**&-7G**-7 *\\x00\\x00-C**&-C**-7 *\\x00\\x00\\x00\\x00.&5& -B-7N**-7=**-7;**-7	*\\x0018*?\\x00?-B-7N**-7=**-7;**-7 *\\x00.&\\x00**`(?-7X*\\x00*-7K*-CQ*\\x00.--7*!-7\\x00*\\x00-7\\x00**-7 *\\x001\\x00\\x00\\x00«\\x00.&5& -B-7N**-7=**-7B**-7	*\\x0018\\x00?\\x00.--7**+&p\\x00.-*?-7X**\\x00*,-7K***,&A-B-7N**-7=**-7B**-7 *\\x00.&\\x00*-CQ***`\\x00.--7/*18?7\\x00\\x00\\x00\\x00.&j\\x00\\x00\\x00\\x00.&j\\x00\\x00\\x00^*?\\x00?.&?-7;*\\x00**](?-7X*\\x00*-7K*-CQ*\\x00.--7*-7 *\\x001\\x00\\x00\\x00p\\x00.&?\\x00?\\x00.--7**+&U\\x00.-*?-7X**\\x00*,-7K***,&&-7B*\\x00*-CQ**1\\x00.--7/*18?7d\\x00\\x00-;8*69/68>°'\\x00	\\n5&5&2-7*,'	2->2*,'	2-7**,&8Ə<!-;?*\\x00	>L\\x00?-7**R&-\\r-7*<O6+<!\\x00\\x00\\x00)\\x00?	#?(	46\\x004%4'4*4(42\\n4!:4Rĉ\\x002-7*&Əh\\x00\\x00	>j\\x006/h\\x00-;7*$>\\x00B,'.S-;*K&8	&8.N?\\x00	>Y?'\\x00h-;0*h--;*&	-;%*h:?--;?*?'--;(*?-\\n&9	>&\\r?-;*h	>-\\n-;4*R'	-;H*&	-;<*h&	-;(*h62\\n\\nO6).%h\\x00\\x00\\x00^-\\r-7*<?\\x002-7*)\\x00>o&/-$-7 *\\x00-7**? 	6,?.J!\\x00Ə!\\x00\\x00\\nj\\x00\\x00\\n-9\\\"\\x00\\x00¯\\x00-C**?-*-7 *\\x00.O?-C'*---;*.S-;*+		&U.?&\\x00%R\\nF-9,'B,'Ə,&-C	*?-C	*,\\x00.7Ə,'-@*,--&	\\x00%RƏ\\x00\\x00<---;*.S-;*+		&\\x00%R:\\x00\\x00.?\\x00\\x00\\x00\\x00\\x00I-;*	>T?--7 *F-C*G-7\\n*E???-E-76**&#?\\n-B-@.*\\r>I8\\x00(-;*4V-;*4@\\x004849\\x00\\x00/>O\\x00/>y\\x00\\x00\\x00---;*=%F6 \\x00\\x00\\x00B-E-7*-7*?-72*-E-76**-7(*-7,*-C*0\\x00g\\x00S\\x00-7\\x00**5'\\x00-7\\x00**-<=*,'\\x00-7\\x00**-A=*,&(-C**-7P*-7,*-C*Bg\\x00\\x00\\x00-;e*	>L6V>[6W\\x00\\x00-;*	>n>/-;'*$>\\x00\\x00\\x00\\n>[V<W9\\x00\\x00\\x00\\x00(4E43%)0\\x00>\\x008\\x00Q-;9*	>T?-7>*>k&-	-@^*<\\n-	-<*<#	?$.//0\\x00>\\x00\\x00/\\x00>?\\x00%A?>j6 ?/\\x00\\x00A#\\n-;8*$>\\x00-E-C#*J>I-E-@,*J>I-E-C*J>I-;;%*/>b\\x00\\x00-;\\x00*$>\\x00\\x00\\x00'\\x00-7T**?-;0*,'-;'*,&-;*$>\\x00\\x00\\x00-;*$>\\x00\\x00\\x00-;:*$>\\x00\\x00\\x005-;e*	>L?\\x00.B\\x00.BR&\\x00.B6V\\x00.U6W\\n6V>[6W\\x00\\x00R MMM-B-@O**-B-C**,&:-8Y*-	<->J*<-E-7*>_-C**-7>*,&-@*<\\n\\x00\\x00ê ååå-B-@O**-B-C**,&Ò--7 *-E-7**-;)*?3\\x00>M?-8+*-7H*-;N*9-:W*<-:*<?-E-7*>_-C**-7>*,&\\n-@*<\\n'$-\\n5-E-7**-7**'-B>G*->**&8-60*/6--;8*5--;*&-B->4*->Y*\\n\\x00\\x00\\x00.?-R-7*V/>H-R-7*W/>HX/>i\\x00\\x00L EEE	>´?-7**\\x00&+>6\\\"?&$>s(	>p4B	>p4U	>µ4/(\\x00\\x00j\\x00-;h*\\x00?>c<?-:W*3>M-:*<?-(-7 *-7**9-@^*,&-@*?-;*	>L)&-='*?\\x00\\x00Ə\\x00\\x00&-E-7*\\x00-7*<<<-F*<J	\\r<\\x00\\x00'Ə6X-B-7)**?-C?**?5&\\\"-C**-7>*,&\\n-C*?\\n-7F*?--7 *\\x00-7**?	65&0&)X-7**?-;a*+&\\x00&-7*6X6X\\x00\\x00\\x00\\x00\\x00<X&6--7 *X-7*?\\x00?-7**+&\\x00*,&?7:\\x00\\x00*\\x00\\x00-7**-;*H\\x00\\\"&\\x00	6;!\\x00\\x00	6:!\\x00\\x00\\x00\\x00Î?-\\n5&(	>'?-7**-7**+&\\r-;8*?!	6!\\x005&!\\x00=?\\x00/>t-;8*	>¬?/>t-7**-;*K&-;*\\r>}>\\x00O>v/>t	6!	>S??/>H/>d&\\n>v?-C_*	>g<\\x00\\x00U\\x00-7'*!\\x00\\x00	>x?&>?5&--7'*-;*	>S?$>s	>p\\\"&-\\x00\\x00.\\x006!?& 	>?\\\"-;8*\\\"&8	>\\\\\\x00\\x00 \\x00j6$?#>\\x00\\x00Ï\\x006!?5&8	>?\\\"-;8*\\\"&8	>\\\\?	>\\\\?	>\\\\?>\\x00O>?-;*\\r>}-;8*)&	>%?&$!$>s	>¹&K	>?	>\\\\?\\x00?		-7**+&' 	*?\\n\\n.V)&$>s\\n%#?	74R\\x00\\x00\\r\\x00?\\n?(4E4>4)4A4F?#?	-B-@.*\\r>I$6$>¸$>Ã$6$6$6&$6>$>»$6<$6?$>Ä$>¶$>¿$>Â$66$>½$>¾$67?\\n-7Q*?\\x00?-7**+&\\r*U%E?7$>\\x00-;*/>b\\x00\\x00B#	\\n-7Q*?\\x00?-7**+&*.3?-9&#??7&#>\\x00\\x00\\n-7*\\x00\\x00\\x00-7*\\x00\\x00\\x00>c	>w/>À\\x00\\x00&&-7Q*=?\\n?\\x00\\x00\\x00¡?\\x00?-7**+&*?.@\\x00&r mmmB?.8\\x00&-:*.V<	>Q?5&1?%9-7**.8\\x00&.8-:*.V<\\r>J-7**&.V/>O/>t?7\\x00\\x00f-E-7W*-7*?-7**9?\\x00K&5*-7#*-CX*-@*,&*-@L**-7P**?M<-;8*69/68\\x00\\x00\\x00\\x00\\x00(4E43%)8\\x00\\x00\\x00+-;:*	>L&!\\x00?--;*&-;*?#6'/>N\\x00\\x00\\x00\\x00U-;8*	>n?\\x00	>n?&>#6>_?--7 *-C**-C-*-@**Q?&	/?\\n$?¶>_-7.**-7?*>*?>_-7R**?\\x00-7\\n*>*?,&m-B>G*?-C**?--7 *-C@*-;)*\\\"'&9--7 *\\x00-7\\n*-;)*&\\n-74*!\\x00\\n-7\\n*!\\x00I-7*<>c<!\\x00>_-7*\\x00<\\x00\\x00-E-7*-7\\r*?-7<*-CV*-@5*1-77*\\x00-E-7*-C*?-71*-\\r-C*-7(*%M-78**-C4*-C*-E-76**-7(*-7*U\\x00\\x00\\x00s\\x00	>j?B.S-;8*,'.S,'\\n.S-;*,&A.=Ə\\n.P>>&.=&.=\\n.+\\n'\\x00!\\x00O6).%\\x00\\x00\\x00Ɛ#>\\x00.?&-;4*!-;*!-;R*Xb!-;8*?-;*&?\\x00.N?\\x00.H	6.??-;(*5&Ə?\\nƏ?5&62!-;S*!\\x0065?\\x00*?*!j>?--%A-j6 ?	-\\r?\\n-;0*&A?\\n\\n-7*<	<?&-74*<<?Ə?--;~*<\\x00.+	>qҫ>-;)*\\x00.+-75*-7\\n*)-;)*\\x00.+-75*-7?*)\\x00.S-;8*,'\\x00.S)&\\x00..>m<\\x00.=<?\\n\\x00.+	>q>m\\x00.=<?(4%\\n-7*<	<4T4!\\x00\\x00}#>\\x00.\\\"	>Y	6-?\\x00*?*?5&:\\x00.N	>	>u	>f?	>u	>f?.;-;<*&	63?.;-;*&	64?<	>S?.<,\\x00\\x00--;;Þ*!\\x00-9j>?---;*%A6 ?\\x00\\x00>º?\\x00-9=j6#&\\x00\\x00æ\\x005&\\x00=\\x00-7%*-74*!\\x00?\\x00?\\x00-7**+&`\\x00*?-7%*-7*?-7**-;8*)\\x00*-\\r)'\\x00*A)&&Ə=*?\\n-7*?7m&=\\x00-r-7R**-7'*,&-)	>Y=	6,?&.J&\\r-7*.J-7*-74*==\\x00\\x00	\\x00	6-\\x00*\\x00\\x00 \\x00Ə,&\\x00-,'-9,'	2-C*&\\x00	>j!B,&\\x00.S-;*&	60.P>>&1.N.H>m.=<?.S,&\\n--7 *..	60\\x00\\x00'\\x00.H&\\x00.H	6.?\\x00.+	>q>m\\x00.=<\\x00.+\\x00\\x00\\x00	>Y-\\r>Á\\x00\\x006>[?Z&6Z\\n6Z7Z-;*\\x00Z>-;;Ú*\\x00	>-;*\\x00<\\x00\\x00Ə?\\x00-7**?\\x00?+&g\\x00*?-C *,-;8*<+&>-:]*	>D?\\x00<*-7*\\x00-;8*<*-7*&\\n-;:*?\\n??7n\\x00\\x00Ə?\\x00-7**?\\x00?+&x\\x00*?-C *,-;8*<+&@-:]*	>D?\\x00<*-7*\\x00-;8*<*-7*&\\n-;:*?\\n\\n-7\\n*,&?7\\n??7\\x00\\x00č\\x00.N	>?\\x00.H	6.?-\\n-;)*\\x00.+-75*-C-*\\\"'F--;~*<\\x00.+	>qҫ>.-;)*\\x00.+-75*-7\\n*\\\"'-;)*\\x00.+-75*-7?*\\\"&#-;C*!-7*-?7*-7*>DƏ?	>u	>f?-;(*&-7*-?F*-7*>DƏ?	>u	>f?-;<*&	63?-;*&	64?<?	>S==\\x00\\x00\\x00%(?\\x00(-;8*4V4@-;8*484E49%>8$\\x00\\x00=\\x00-7*-;;Û*	>T-;F*	>T-;*	>T-;0*	>T`\\x00\\x00\\x00\\x000\\x00%\\x000%\\x000%\\x000%\\n\\x000%\\x000%\\x000%\\x000%\\x000%\\x000	%\\x000\\n%\\x000%\\x000%\\x000\\r%\\x000%\\x000%\\x000%\\x00\\x000%\\x000%\\r\\x000%$\\x00-;8*+&\\x009	\\x00-;8*9	<\\x00\\x00\\x00-;8*+&\\x00\\x009	\\x00\\x00\\x00\\x00??\\x00+&\\n??f\\x00\\x00-;*!\\x00-;:*?-BB)&\\x00<\\x00\\x00-E&\\x00\\n\\x00\\x00-E-7*-7&*&-;p*\\n-;9*\\x00\\x00-\\n5	-B-7V**5&-;\\\\*-;X*\\x00\\x00U!\\x00-;8*!-;:*!-B>G*-C**2-7*)&\\\"\\x00<<\\x00<\\x00-;8*\\x00-;*	<\\x00\\x00<\\x00\\x00-;9*	-;+*<\\x00\\x00-;*	-;:*	-;8*\\x009\\x00\\x00-;7*	-;:*^\\x00\\x00-;*	-;*9\\x00\\x00-;*	-;*	<\\x00	<\\x00\\x00%-;*!\\x00-;:*?-B-C**B)&\\x00<\\x00\\x00-B-C5**&-;9*\\n\\x00\\x00-E-7*-7\\r*&-;p*\\n-;9*\\x00\\x00-\\n5	-B-AY**5&-;\\\\*-;X*\\x00\\x00X!\\x00-;8*!-;:*!-B>G*-C**2-7*)&%\\x00<<\\x00<\\x00-;8*\\x00-;*	<\\x00<\\x00\\x00<\\x00\\x00-;+*!\\x00-;9*!	\\x00<\\x00\\x00 -;*	-;:*	-;8*\\x009-;*<\\x00\\x00-;7*	-;*^\\x00\\x00-;*	-;*9\\x00\\x00$-;*	-;*	<\\x00	<<-;\\\"*\\x00\\x00\\x00	\\x00!\\x00(-;'*4V4@-;f*484E49%>8-\\n5&-CN*	>Q#\\x00\\x00P-\\n&8\\x00?\\x00-7**?\\x00/>O&\\r?\\x00/>i?&-;8*?\\x00/>y\\x00\\x00\\x00-B-@:*-AS*Ə\\x00]\\x00\\x00*-B-:@**&\\r-B-:@**?\\n -=*	>V?\\x00\\x00/Ə? \\\"\\\"\\\"-B-@B**&\\r-B-@B**?\\n-=B*	>V?\\x00\\x00\\x00p-CN*	>Q5&-;t*	>T&\\r-CN*\\r>J ?&-CN*\\r>J-B-:^*0\\x00-B-:8**&	-B-:^*U\\x00\\x00P-B-@:**&8-B-:8**->*)?(???-B-@:*0\\x00-B-A-*0-B-?*00$\\x00Æ5&9-E-7*-7U*-78**-<*-=\\\"*-E-C**-7(*ҰF<-:\\\"*<3\\x00>M-7H*<?(?-<]*\\x00-@*-6:*&-72*->*-l-C\\\"*<\\n-7*-72*-A4*\\x00\\x00-l-C\\\"*?\\x00\\x00\\x00*?&$?\\x00V\\x00\\x00\\x00-CN*\\x00\\r>J-;4*$>\\x00\\x00\\x00\\x00	&\\x00>\\x00\\x00\\x00¨\\\\&86\\\\\\x00/>N-a3\\x00>a?&-CC**?5&8-73*?--7 *ҩ?-7O*?Ə,-7**\\x00&-7O*?--7 *-64*-;)*'\\n-8E*>o'-=(*,&:6\\\\\\x00\\x00\\x00n-B-C)**-C0*-B-C)**-C*-;*\\x00?\\x00-7Q*>[	>¼!\\x00\\x00?\\x00-7**+&\\r\\x00[?7-;8*69/68\\x00\\x00\\x00\\x00\\nć\\x00-7'*\\x00?-7**-;*+&8-7O*?\\x00?-7**?+&?F[-7**-;*9?>[-7'*	>Å\\x00*9?]&6]-7'*\\x00?-;;Ò*&-E>·*-C*,&-B>Ì>Í?^>Ç	><	>,	>?	-7**?\\x00?+&	?F*d-;4*	/68\\x00\\x00\\x000\\x00?>É?#?\\x00(-;*4V4@\\x00484E4349%>8####\\r##\\x00\\x00#\\x00\\x00»5&-;#*	>T?-;Q*	>T?-1*-73*	>S?\\x00?-P-7=**-73**-7	*>Ê?-7**-;*^	>]?-7L*\\x00	>S?o-;*-;8*69/68-;*/68\\x00-/>H\\x00]/>H\\x00/>\\x00/>\\x00\\x007-Aҧ?*-;;Ñ*'*-;;*\\r-\\n5'-\\n-;\\x00*&/68\\x00\\x00>_-7.**->*>o5&\\n-r>B-E>r\\x00\\x00-B-C*>Î?'\\x00\\x00@\\x00\\x00!3\\x00>M?#'\\r3\\x00>M9-;*\\x00\\x00	\\x0073\\x00>M???\\x00? \\x00$?'\\r3\\x00>M9-;*8\\x00`0\\x00-C*-FL*-<&*>c<\\x00<-7+*<$l3\\x00>M9-;*&\\x00!\\x00\\x00-;5*+&!\\x00I$\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00.-;5*	>L)&!-;u*/>b	-;;\\\\*/>b\\n-;;*/>b\\x00\\x00q-;5*	>L)&d-@*=-@!*=-CU*=-C#*=-:>*=-:\\r*=-@,*=-C*=-C*=-@Q*=?\\x00?-7**+&-E*	\\r>I?7\\x00\\x00\\x00 --;<*-&8=\\x00=\\x00=?#?8H-?*3>D?-73*?-7*?&k?\\n\\n\\x00k?	\\x00\\x00\\x005'-0&\\n\\x00\\x00\\x00R\\x00?-7**?+&:>-;*\\x00?	>3?*?-7*-7**??7A\\x00\\x00\\x00-;g*	>L)&-;;Ô*/>b\\x00\\x00\\x00r0\\x00===-h=?-.\\r-\\n-\\n-;4*R5&-7*-B-CE**?\\x00?-7**+&*?-73*	>S?f,\\x00E @@@\\x00?-7**+&-*?-73*	>S?*&?f;\\x00\\x00\\x000\\x00>\\x00\\x00(&\\n>h	'	0\\x00\\x00>N55\\x00\\n-9g\\x00\\x00K-;g*	>L)&>-V-B-C**/-P-B-@7**/#&-\\n-9)'-\\n-;4*&\\x00/>N\\x00\\x00\\n-E>B-r>E\\x00\\x00I DDD-&-7	*\\x00?>Ð3>D?\\x002-70*'-7*5'-9\\\"\\x00&\\x00\\x00\\x00-;g*	>L)&0\\x00\\x00$>h\\x009?-;n*&\\x00/>N>h	\\x00\\x00\\x00K`-9\\\"&` 33-B-7J*>3?-B>G*>*?>Ï*?>Æ*?-9g6`\\x00\\x004\\x00Y\\x00?)Ə?*\\x00?+\\x00?,\\x00?-\\x00?.\\x00?/\\x00?0\\x00?1\\x00?2\\x00?3\\x00(-;:*4V4@\\x00484E4349%>8'U# -\\n5&###\\r##\\n#-E-7;**&!-E>È\\r>I-E>Ó\\r>I-E>Ô\\r>I-B-:*\\r>I\\x00\\x00# ##(#\\x00\\x00j###\\x00-/>O\\x00-/>\\x00+/>\\x00,/>O\\x00)/>H\\x00*/>i\\x003/>H\\x001/>O\\x002/>O\\x00//>O\\x000/>O\\x00-/>H\\x00\\x00\\n-;*/68\\x00\\x00	\\x00*-9\\x00\\x00:--7 *-7$*!\\x00?-7**+&\\x00**-9&?7\\\"\\x00\\x00,'\\x00!\\x00?e-7**K-7*&\\x00\\x00\\x00?e--7 *-;)*&\\x00\\x00«-;l*?-;{*?-;{*??\\x00?+&-7*-R-C**??7&^?-R-7*-;*\\x001\\x00?-7**+&*9-;8*>5??7%^?-R-7*-;*\\x002\\x00\\x00@ 2;;3\\x00>M?\\x00?3\\x00>M9-;:*+&?7-;N*&\\n 3-;*3\\x00\\x00!-V?-8*	??&-;*\\n\\x00/\\x00\\x00\\x00)-P0\\x00-C**'-P-73**0-73**&	-;*0\\x00\\x00\\x00\\x00\\x00\\x00\\x00!-B>Ò&-B?e\\r>Õ>o&\\x00\\x00\\x00\\x00/\\x00\\x00\\\"-?\\x00/68-;<*-&8\\n>\\x00\\x00\\x00û-\\n&%-E>Ñ*'-E>Ë*&.-;<*-;*/8\\x00?>?>ä?>Ú?>Þ=>Ý==?-B>*?-B>å*?	-B>Ü*?\\n>×?>Ù?55\\n-B-=A**55?-75*-F<*\\x00)&-;<*-;6*/		-C&*'\\n\\n-C&*&-;<*-;O*/ \\r#?&.-;<*-;*/8\\x00ļ-B?-E?\\x00?-B>ß*?*&\\r*&?-B>G*?-C**?-7*>3>D?\\n\\n\\n*	>]-;z*+&?	\\n*?	'''*'	&8>ÖҶ3>D?-E?e.\\x00*-:.*,-7*-E*-?**&8\\x00?\\r\\r-7**+&#-E-C**-7#*\\r*&8?\\r71?&8ą-`-:=*&-`-:=*-=\\x00**?&F-C*&>Ø3>D?-7C**2-70*,-7*-7C**-73*5&\\n-7*>à5&~-7*>3>D?*	>]-;z*K&-7*>â3>D?*	>]-;L*K&-7*>á3>D?*	>]-;*K&:\\x00\\x00\\x00\\x00\\x000\\x00?>ã\\x00\\x00\\x00\\x00\\x00D:?(?0\\x00l?>?-70**2)S-CC*?5\\x00 -a\\x00\\x00/-E-7\\\\*>Û&>ò?>ë?-B'-E\\x00\\x00Y-B>õ*&I-B>*5&:-B>*-73*?--7 *>æ-;)*\\\"--7 *>ê-;)*\\\"&:\\x00\\x00-B>ð?-B>í?'\\x00\\x00>çҶ3>D?-B-;0*O\\x00\\x00	>ó	>Pl\\x00\\x00l:?>é	>Pl?&-B2-C\\r*\\\"-B.L-B.L>ô)&-E2-C\\r*\\\"\\r-E>*2-70*)&-E>>ïB?.Q'>ñ&:\\x00\\x00\\x00-P-7=**-P-7=**-7	**%G-P-7=**-7	*0\\x00-E-7*-7&*ƏD-P-7=**-7	*-P-7=**.G-P-7=**%GVƏ<?-75*>ì-;)*'-75*>è-;)*\\x00\\x00\\x00'AҦ?&-A+**\\x00\\x00**%G\\x00\\x00\\nƥ-\\n&8? -E>*-9)-E>*-7**5?:?--7 *-E-7\\r*?>cҴ-77*>î-E-76**&6--7 *-E-76**1-B>*2-C\\r*)?-2-7 *-E-76**1:?--7 *-E-C*?>úcҴ-CP*-77*-71*-77*--7 *-E-C*?-71*>^>öcҴ--7 *-E-C*?		>¢cҴ	-7\\\"*-7*	-71*Ҵ--7 *1--7 *1--7 *	1-77**\\\"?'	>^*\\\"?'AҴ	\\\"?'	>¢*	\\\"?''&-;<*>ü/\\x00\\x00i\\x00?-A$*3>a?--7 *-A*-7$*?\\x00?-7**+&**-9&C??7'>-a&-;*C?\\x00\\x00-B>G*?>*?>?>~?-C**&-C**	>S)&*-B-C**-73*-7**+&*-\\n&*-\\n\\x00,\\x00\\x00Ϟ-B>G*?-C**?>Ą*-9&Â>£>-;S*>-;C*>-B>ù&-;*$\\n--7 *-C@*-;)*\\\"&	>$\\nt-B>þ&-;8*$\\n^-B>û&-;*$\\nH-B>Ă&$\\n5-B>ą'-!-7 *>ø-;)*\\\"&-;e*$\\n	-;:*$8-\\n?-;7*K&3>Ā/-;\\x00*K& -B-C7**5-B>*'-B>¤*&?-B>ā	-B>÷&>ă-;*/-B-C7**5&?>ý*&Ż>ÿ/68-B>ĉ&-;*$\\n°--7 *>đ-;)*&-;*$\\n--7 *>Ć-;)*&-;*$\\nn-B>z*\\r-B>z*2-C*,\\n>ď-B>z*'-!-7 *>č-;)*\\\"&-;<*>ĕ/\\n'-B>Ē'	-B>ċ	&-;;*$\\n$-B>X*-B>X*>ć*5&-B>X*>ē*5&\\n-B>¥*-9-B-C5**>¥*-9-B>Ĕ*5-B>Ċ*5&-;*$\\nP-B>¡*-B>Č*5&\\n=-B-7K**>Ĉ*-B>Đ*5&\\n$-B-7K**>Ď*-B-7K**>ė*&\\n.> -E-C**-78**&-;~*-;8*/-B>Ĥ&-;*$\\n-B>ġ&-;*$\\ny-B>Ģ&-;	*$\\nc--7 *-C@*-;)*\\\"&	>$\\nB-B>X*\\r-B>X*>ę&-;d*$\\n -B>*\\r-B>*>ĝ&	-;*$-B>{*?>*&-;C*-;:*/-B>Ğ*-9&>£>6=&>Ĝ>\\x00\\x00ʃ-B>G*?-C**?-B>Ė&-;<*-;F*/\\nɔ-B>ğ&-;<*-;#*/\\nȹ-B>Ę&-;<*-;*/\\nȞ-B>Ě&-;<*-;Q*/\\nȃ&-;<*-;0*/\\nǭ-B>ģ&-B>ě*&\\n-;<*-;g*/\\nǈ&-;<*-;}*/\\nƲ.&-;<*-;*/\\nƝ-B>¡*-B>ĥ*5&-;<*-;+*/\\nż-B>Ġ*'-B>ĵ*&-;<*>Ĳ/\\nŞ>Ĭ	>D-7*'	>ħ*-4,&-;<*-;K*/\\nĲ>ĩ	>D-7*&-;<*>Ĩ/\\nē&&-;<*-;!*/\\ný$&-;<*>į/\\né%&-;<*>/\\nÕ-B>Ī*-B>ī*-B>ĳ*&-;<*-;&*/\\n­-B>ĭ&-;<*>ı/\\n>Ĵ-B&-;<*>|/\\n~&-;<*-;,*/\\nh&-;<*>İ/\\nT&-;<*>¨/\\n@&-;<*-;\\r*/\\n*&-;<*-;J*/\\n&-;<*-; */\\x00\\x00\\x00 ##0\\x00$'\\x00\\x00&-;;=*>\\x00\\x00-;<*\\x00/-;*$>\\x00\\x00\\x00	Ȩ?\\x00?\\x00-7**+&ȑ\\x00*?-@*-7\\\"**)&¬-7**-C**5'-7**-C**-C9**5&\\nǊ-7**-C**-C9*-76*)-:6**>Ħ)&-;^*$!8\\nI-:6**-K\\r*)-7**-@**-<*	>D-7*-7**-@**&\\n-;*$!8\\nň-@E*-7\\\"**)&ĸ\\x00?-@G**-7**+&Ġ-@G***?-7**)&Ā-C**5'-C**-C9**5&\\nâ-C**-C9*?-7A*)&4-7#*-78*?-6_*	>D-7*&\\n-;*$!8\\n-7*)&w-E-C**-7#*>Į-:A*)&\\n-;>*$!8>^*>^*-7**-;*+&5->*	>D-7*>^*'-6?*	>D-7*>^*&>$!\\n->_*)&>¨$!?7ĳ?7Ȟ\\x00\\x00\\n¯-B>Ń*?-B>Ļ*?-B>*?-B>ĸ*?	2-70*)?	2-70*)?55&-;<*-;^*/55&I\\\"3??(?		-@*	-@E*	-> *-<3*-E-C**'-E-76**	1\\x00\\x00C-B>ń*?	>Ķ?-B-7:**-73*-75*>Ĺ?'\\x00\\x00-`-8T**?-B>Ŀ*-9\\\"	-B>ľ*-9\\\"	-B>ĺ*-9\\\"-B-CL**-B-CL**-73*-75*>Ľ? ...-B-7:**!-&-7	*-B-7:**-75*>Ł-;)*?'\\x00\\x00: 333&->ł	>Pl?>ķ	>Pl?>ļ	>Pl?5:\\x00\\x00\\x00đ0\\x00?0? ÿĂĂ-B>G*?-B>©*>¯*>Ņ	>D-7*>¯*5&-B>©-B>ŀ*`\\n»> -E-C**-78**&/-B-C7**-7:*-C*?-7I*-CA*\\nx-B>{*\\n-B>{*>*&A 7::-B-7S**-7**&#?\\n\\\"-B-7S**cҪ-B-7S**-:<*>Ő#?#?\\n#-B-C7**5-B>*'-B>¤*&#?\\n#?#?\\x00$h\\x00\\x00\\x00:$h\\x00\\x00\\x00\\x00.--;*&$-B-A*3\\x00?-7,*0\\x00-72*>Œ\\x00-;<*-;L*/-;8*$>\\x00\\x00\\x00\\x00\\x00\\x00(\\x004V4@\\x00484E4349%>8<-@V*	>Q-:Y*	>Q-:*	>Q-:*	>Q-@\\n*	>Q\\x00\\x00\\x00/>N\\x00\\x00\\x00?\\x00-7**?\\x00/>O&\\r?\\x00/>d&-;8*?\\x00/>d&-;*?\\x00/>d&-;4*?\\x00/>d&-;0*?\\x00/>d\\x00\\x00\\x00¶5&#5&	-;/*-:Y*\\r>J5&\\n-;/*-:*\\r>J5'	-@+*	>Q5&-;/*-@V*\\r>J5'	-@+*	>Q5&\\r-;/*-@\\n*\\r>J&-;/*-@+*\\r>J\\x00\\x00-\\n-;4*&~&>=>ŉ=>ŏ=>ň=>Ŋ=>ō=>ņ=>Ō=>ŕ=>Ŏ=>Ŕ=>ŋ=>Ň=?\\x00?-7**+&\\\" *m>U-7**?7/\\x00\\x00.5&-=*!\\x00&\\x00	>W-;/*-:*\\r>J:\\x00\\x00\\x00Ɋ-B-<C*-\\n&§-E-7*-7A*?-7D*>ő-E-76**-7(*-E-7\\\\*-F_*?-@**&K??-@**-F**+&-7*-@*?7,--7 *-7$*ҭ/-E-76**-7P*\\nƓ6=&-E-7*-7A*?-;*	>T?-7<*Ҵ-:\\\\*1-7D*-F*H<->I*<<F<-C*<H<-@1*<-E-76**-7(*\\x00?:?-B-C1*0\\x00-;*?	\\nć ĂĂĂ3\\x00>œ?\\n>ţ?>ŝ<-7%*-7*?-E-7*-7A*?-78**-C4*-C*-7D*>ś-E-76**-7(*-=I**\\x00*?\\r\\r-:I**?\\r-@S**?\\x00?-7**+&A\\r-78**-<X**\\r-:I**\\\"'\\r-@S**\\\"&\\n-7**?fN--7 *\\n-7*ҵ/-E-76**-7P*\\x00 >>>-E-7\\\\*H?-@=**2-70*,&-@=*-8*-@=*7'>|&0-.-7 *-B	1-E-7\\\\*-:\\\\*&-E-76**-7P*\\x00\\x00å ààà-E-7*-C6*?-C3**&Á-@$*-;*-@*>|-C3*Ҭ?-7J*?-=6*q-?\\n*->!*-@*-A3*-6*\\x00\\x00-;*-;F*`-@*-6J*-:*-;:*-;*]-@*-?5*-:*-;*-;	*]-:X*	>W\\x00\\x00\\x00̎ 233-E-7*-C6*?-C3*-<4*'-C3*-F*?8 ʽʽʽ?-<:*?->9*?	->B*?\\n-FC*-:\\n**\\n1-B-6C*-;;ß*=-;;Ù*=\\x00=-;;×*=-;;Ó*=\\x00=\\x00=-;;Ø*=\\x00=3?-6;*-:\\n**-=**]\\n-: *-;:*\\n-@F*-;:*-K*?-:U*-:[**?\\r-:J*\\r1-@ *\\r-:U*-:3**?-:J*	1-@ *-::*\\r1-::*1->Z*-F3*-:5*-?K*-K*-@C*->*-8*-8*-8**-88*-:5**\\n-: **-?**5\\x00\\x00G-F-*-@C**]-8J*-K**\\x00\\n-@F**]-C6**B\\\"&-7*-C6**-:X*#?$?-:2**&µ-:[**=-:3**=?-6]**=-A**=-?**=-=T**=-=4**=-=;**=?\\x00?-7**+&S\\x00?-7**+&<-:2***?-7*-<**-8B**-<F**]?7I?7`--7 *-7*	>W_\\x00?eY-+-7 *,&I\\x00*2-7*)&;-=Q*\\x00*?-9\\\"&\\\"2-7**,-;;Ü*K5&-7*\\x00\\x00M-F*?\\x00?-7**+&.*?->:*?-7*$?7;\\x00\\x00\\x00ì-B-<$**-?*3\\x00-?O*?-:**-9&\\n-:**\\nƏ=-:\\x00**-9&\\n-:\\x00**\\nƏ=-@U**-9&\\n-@U**\\nƏ=-:**-9&\\n-:**\\nƏ=-@N**-9&\\n-@N**\\nƏ=-:**-9&\\n-:**\\nƏ=-@**-9&\\n-@**\\nƏ=-@J**-9&\\n-@J**\\nƏ=\\x00\\x00\\x00в?-B>G*?-7*>Ť*-7*>ť*-7*>Ř*-7*>*-7*>ş*-7*>Š*-7*>š*0\\x00l?-7*-7*0l?-7* \\n?	Ə?	-7*	?-8]*?-E-7*-@*?\\r\\r\\r-C**\\r-C**	>Z&?-7%*-C!*?\\x00?-7**+&-7*\\r-C**?7)-7*?-6N*?-E-7*-C.*?-C**-C**	>Z&?-7%*-C!*?\\x00?-7**+&-7*-C**?7)-7*-B-C(**-B-C(**	>Z&œ?->>*-7%*-C!*?\\x00?-7**+&<-7*-B-C(*-6*ұ*&\\nҥ*<\\nƏ<Ҩ<-@%**?7I-7*?-=J*-7%*-C!*?\\x00?-7**+&<-7*-B-C(*-6(*ұ*&\\nҥ*<\\nƏ<Ҩ<-@%**?7I-7*?-8*-7%*-C!*?\\x00?-7**+&<-7*-B-C(*-K*ұ*&\\nҥ*<\\nƏ<Ҩ<-@%**?7I-7*&-7*	>g0l?-7*&-7*	>g&-7*	>g0l?-7*-7*>>²*'>Ş*'-B>²*55?-7*-7*>ř>Ŗ?--7 *-7$*?\\x00?-7**+&-7**	?&\\n\\x00?7+--7 *-7*	>W$ \\x00'\\x00'\\x00-C&*:\\x00\\x00\\\\--7 *\\x00-7Y*?-B?\\x00?-7**9+&*?5&:?f*-7**9*\\x00\\x00\\r \\x00*B\\x00\\x00w?-=**?&`\\x00?-7**+&N*?--7 *-71**=-@4**=-?A**=-?**=-7$*?-7*?7[\\x00\\x00g?>*?&R\\x00?-7**+&@*?-7*--7 *-7\\\"**=-8**=-@4**=-7$*?7M\\x00\\x00l\\x00?>*2-C\\r*&>*?\\n>~*2-C\\r*&\\n>~*? -E-=!*->	*?:?-K*-B?===\\x00\\x00{? LL->*$>V-7*-@_**-7*-<T**-7*-@4**-7*-6* \\r-B>-=*m-7*-@_**\\x00\\x00Ǧ5&Ə?-B>Ŝ*?-7*>e*-B>Ţ*?-7*>e*-B>ŗ*?-7*>e*-B>Ś*?-7*>e*-B>ŧ*?-7*>e*-B>ũ*?-7*>e*-7*-B>ű*-B>G*?	-7*	-C**-7*	>«*\\n	>«*>ŭ*-7*	>­*\\r	>­*-73*-7*	>§*\\r	>§*-73*-7*	>Ũ*-B>Ū*?\\n-7*\\n>Ŭ*-7*\\n>Ű*-7*\\n>Ŧ*-7*\\n>ů*-7*\\n>ū*-7*\\n-@**-7*\\n-@$**-7*\\n>Ů*-7*-7$*<	>W\\x00\\x00\\x00\\x00\\x00\\x00\",þýÿĀ˲̚āĂ\x00ùúûüȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭ8È$É&ÊˇËˊģˌÌːÍ˒Î˗Ï˚Ù˵Ú˽Û̀á̈â̋ã̎åƐæ˯ç˱èéŜƙÉƚçƜ¼ƮŒƯǃươƱǘƲǡĶǥĉT_w³Ð6ï4.>GĪÃ#%ùĈěO$ćùĕı#ìù§÷«#»ù]#Ùùuû#áù¬#ßùµà#!ùĐ#±ù¹eOÜôùĕEGħ#%ù¿Ĉâ#ęùġî#¤ùÉë#Ĩùĳ¼#æùİ#ĞùĝQO5¯ùĕ#ùO¾ÿùĕĖ#Ąù\rĭ#©ù¥OÛÍùĕąÓ#\x00ùsOnēùĕi#@ù<£#YùóÄGÝĎ#%ùĈ}Oėùĕj#ùx\\Oh7ùĕbMĒGċ#øùùĈñ#1ù:®ÂÞG#ºùùĈk2#Āù8SGđV#ÕùùĈPčd¡#ùÚīČ#ÀùĠĬ#ýùco|p#ù*3#ù¨z#ù,OHĴùĕèOJĂùĕrGm#ðùùĈú#ÌùÏGL#ÇùùĈ~ğ#öù#ĤùĲ#KùBa#	ùĜĩGZ\"#%ùĈ+Gþü#%ùĈqOUįùĕ·#­ùF?ďf'Á½yÒĔ(×NCIËăä^ĆåģÔõXÖtòĥ¸\nAg/È`ØÆÎ;¢²=¶´90ª[R-Å¦êĚlãç°)WĦvĵ&ĮĊéÑĘD Ģā{ íÊ+Ĺ3ă\r\x00	\x00\n\x00\x00\x00\rǒ\n0ȪҮੀ\r¦\rï\r@	˴\r\n	֏	࠿	\"\x00	ذ		Ւ	ٟ	଒	\"\x00	ߴ		ਬ\n!	EȩҞ\nĄ\rϷ๶Ǵą\r\x00	\x00\nʠ\nే\nϦ\nൎ	\n\n\n|\nη	EǴĆ\r\x00	\x00\nʠ\nඩ\nϦ\n௴	\n\n\n|\nη\nћ\n଻\nŉ\nӭ	EǴć\r\x00	\x00\nϷ	\n\nò\nฅ	ದ\nđ\nلȩҞ	Ĉ'Băປȫ௦ćȷʙąȵ࣫	ɹąȷ̪ɷȹ௭ȳিɹɷ\nĆȺԱąȴ௶ɹȰ҄ȳſɥĆȺਭɹɥZU3\rąȹكąȺවĄȸˆąȺ൥ɕĄȸǠɷĆȸർɕɷąȶːĄȺѧćȳ΂ăȶĜĆȻǾąȳʣĄȹϬy3ĄȺιɹąȸ̛əăȳ௑ɹəąȵæɚȯ̍ȰڣɥćȶโɚɥɷĄȴ˲ɹăȷʊɷɹąȸšĆȻʿ ĆȺš!ąȷ˄\"ɹăȷ௕ɸĆȶОɹɸĉ´Ąȴу#ăȵɉ3$ɜĄȳŝɚąȵȫɜɚ%´Ąȶธ&Ąȶʣ'ćȴĜĊɸĆȶຣɸɸ(ɥĄȹŤəăȹ܈ɥə)ăȻˆ*ɜȵϧȺCɹąȸ޾ɜɹ+ɚĆȴ̦əćȻЫɚə,ąȺ͕-ĄȷĜ.ĆȷҜ3/ɕȺ६ȸƶɸĄȵࠂɕɸ0Ąȳš1ɷąȴ໥ɜăȶไɷɜ2ĄȻΪ3ąȴƼ4ćȴæ5ɕăȵׅɸăȵʊɕɸ6ĆȵŲ7Ćȹࠧ8ɕĆȳҖɸĆȶΠɕɸ9ɸćȺīəȸ­Ⱥؽɸə:Ćȴ௟y3;ĆȺȍ<ɷĆȷ̛ɥĄȴΠɷɥ=ąȺː>ąȶȝ?ąȴΛ@ăȵЉAɷĆȹΗɸĄȴ୵ɷɸBăȳьCĄȴȪDɷȺыȳǊəćȷͮɷəEăȹʙFɸĄȸɭɕąȵ۵ɸɕZm3GĄȻࣲHĆȴҋċ´ĆȻȍIăȸɌČ´ćȵࣻJăȶ୭čąȹĜKəĆȸ̉ɕĄȴ̚əɕLɸĆȵଁɥĄȸࡵɸɥMɕȹ́ȷöɹćȺ࠾ɕɹNăȶफ़OĄȻط3Pɥąȶ՘ɕĆȶʦɥɕQĄȹฏRɹȴȮȷӕəȳԞȹඤɹəSąȻҔTĆȵ̀Uɹăȹ̢ɸĄȸЫɹɸVĆȷɄWɜĄȹ෣ɚĄȶ಑ɜɚXăȳരYĆȷɴZćȺǫ[ɜąȷcɹĄȷ෾ɜɹZ3\\ɷĆȶංɕȵȮȺ࢐ɷɕ]Ąȵҵ^Ąȶƃ_ćȷӓ`ăȵͽĎɥĄȺ݋ɕĄȸѡɥɕaĆȴΪbąȸæcɜĆȳÑɕąȴԎɜɕdɚȺҌȶƩɥĄȴࣉɚɥeəąȺυɥȷ̄Ⱥ਌əɥfĆȴɉ3gəȸ̑ȳřɜĆȺଡəɜhɹȺߩȺ̬ɜąȸʦɹɜiɜĆȵথɥȴϧȷघɜɥjąȺױďăȺʙkĄȺĜlɷĆȶƂɹăȳૂɷɹĐąȹтđ´ĆȸӀmɷĆȹŝɸĄȵѡɷɸnĄȶࠇoɚĄȷėɥĄȷఱɚɥZm3păȵԍqĄȸĜrćȷ͕sɷĄȷ̜əĄȳࡇɷətɚĆȵ̅ɷĆȸܟɚɷuăȶƼvĆȸǾĒ´ăȴιwćȸŲxąȴʿyɷĆȳbɚĆȳՍɷɚzĄȶ஬m3ēĄȸੁ{ćȶΛĔɚȳ૫ȳɷĄȵЏɚɷĕɚĄȹ˅ɥăȳೠɚɥ|ĄȴԆ}ąȵස~ăȴšĄȴ໵ąȴৈĖ´ĆȹȍɷĆȴ৳ɕćȷȫɷɕėąȸɉ©3ĆȳխɹąȺ̢ɥąȶౚɹɥɷĆȵќɹȺˡȸءɷɹĘɕȸज़ȵΘəȷ̱ȳ଍ɕəɜăȶസɷĄȺʊɜɷęɜćȳ˅ɚćȻېɜɚɸĄȺȠɹȯɓȳߥɸɹɸȯ̍ȸƎɚĆȻऄɸɚąȴɌćȶɴɷĄȹǠɥćȷງɷɥąȵຉy3ąȵجąȶ଼ɸĆȳ౐ɜăȳܤɸɜəȴผȸɿɷȹڨȶథəɷĆȹҔĚəĆȸਵɜćȵୌəɜĄȸʿăȴǫě´ćȶҵăȷƼĆȴʏɷćȵīəćȺҝɷəZa3ĄȸܵĜ´ąȹьəĆȵϪɚĆȺڏəɚąȺʏćȶެɜĄȴˇəĄȵʦɜəąȴɴĄȳԍĄȶҋąȳϸăȳԆ Ćȷಝm3ĝɹĄȷ̵ɷćȴڦɹɷ¡Ąȸͽ¢Ąȸஎ£ɷćȶ೩ɜĄȵЈɷɜ¤ąȴБ¥ĄȹЉĞĄȴʣ¦ɥąȶÕɚąȵԎɥɚ§ĆȳɄ¨ĄȴӀğĆȵȍ©Ćȸম3ªɷĄȶΗɥĆȸОɷɥ«ɸćȷßɹĆȸͮɸɹĠąȵǫ¬ĆȷŲ­ĄȺѺ®əȵಋȺ֚ɚȵ්ȸసəɚ¯ɸąȶȠəąȷ̚ɸəġĆȶŲ°ɥĆȴċɕąȸЏɥɕ±ąȹա²ąȵ௅³ĄȺ४U3´ăȴːµĄȵš¶ɷĄȹ̜ɕĄȳفɷɕ·Ąȹ˄¸ąȹ΂¹ćȶࡀº´Ćȷ̀»Ćȹӓ¼ąȹŲ½Ąȳт¾ĆȺɌ¿ăȷ߳¡3ÀɷąȺ̉ɚĄȷ͔ɷɚÁąȸБÂăȺȪÃɹȵైȺöɷĆȶ໱ɹɷÄɥȷȮȹƁɷȺԞȹࣀɥɷÅćȴɄĢ´ąȶȪÆɥĆȵǠɸĄȳ͔ɥɸÇĄȶࡖ:ɇȯxǤȬಜĤɛȯӽĥ%\x00ɛȯԬŞȯŬȯਜȰ˪ȰӉȱ׬ȯŐɄƖZȻ3Ħ%\x00\x00	ɛȯԬŞȯŬȯϖ	Ȱ൲		ɫ£Ȱƚ	ȯ૶ɫ£ȯŨ	ȰॡȰ˪ȰӉȰޡȯҍ	ȯŐɄƖħ%\x00ɻȯƅȯҷȯƕȰŸȯŰÐ\r\x00	\x00\nȯCɄðȯɻȯ܆		ȯ)	V\n	Uř\n\x00aɓȯ\n\x00ȯВĨ%\x00\x00	\x00\n		Ȭ÷	V	O\n\nȬÊ\n+Ĉ໦Ȭߖ؀ࢮ	ĺĩ\r\x00	\x00\n\x00ńȯĔŗPɄI¸SɄI¸Ĩg	ஂȬŏ\nȯȨ\nŭ	,	RȬଇŚ	ଓȬࡼ	ȬઃĪ\x00\x00	\x00\nȯຒȯę\x00	\x00\niଦ\x00ȱÙ\x00	ºī\x00\x00	ȯ଀ȯʜ\x00	/Ȼଌ\x00	Ĭ\x00\r	\x00\n	ȯȨ\n\n	\nņ\n£୯ĭ\x00\r	O	¡@		^Į\x00\r		०	$Ȭґ	ૅ	$Ȭ೵ȬͲ	$ȬĪȬÐଉ	$Ȭ௽Ȭ̫	$ȬҳȬôϜȬÐȬช	$ȬࡗȬЭ	$ȬŇȬŜϜȬôȬಿȬÐȬญį\rOȯ)ņȯX஛Ȭకİ\x00\x00	\r\n\x00\n	ȯ)+\nځȯ̩ɔȯöȲÆȷžȵ̄Ʉ[ȯ\n\x00ȯƟȯю\x00\x00	tɹ3ı\x00\x00	ˢ	ȯஞࣣe	බe	-	ಟe	-	C	਒İ\x00\x00	yĲ\r\x00	\x00\n\x00\x00Ʉðȯ\x00ȰՐȯشO	¦	ȯ)	V\n	U\nȯǽȬʆɓȯ\nuȬíɛȲϘ\x00ȬੌȬଽFȬ֦	ɗȱѵÂɓȯ\n\x00Ȭಠ	Ȱ߶	ЛɄ[ȯʷÑ\rॣ\x00Ĳĩ4BɄ҃ȯĳ\r\x00	\x00\n\x00\x00\x00\rๅ	ŝ\x00ȯŝ	ȯȬè	ു\n	ƍȯÿȰǬ\nȯW\nொȯտ\n৘\n˦஼ŭ\n࡫ź\n˦Ōҩ\nȯ]െ\nȯ]ൕȬíέ\n£ȯॿź\n˦Ō\nȯ]ݑ{\rɄ[ȯ\n\x00ȰǬȯக\r\"ȯ¨ő\rĴ:ɭȯ¿ȱ૚ĵ\r\x00	\x00\n\x00\x00ȯĭȬK	\nȯW0Ȫĩ	@\n௳	ȬŜ	Ȭô	Ȭࢫ	ුĶ\r\x00	\x00\n\x00\x00\x00\rȯW	\nȯढȬK\r0Ȫĩ	@	é\r\nRȬ«Ȭ`\r\nRȬ¥Ȭ`\r\nRȬȬ`\r\n!$Ȭ̎\rķԝRȬ«ȬӢRȬ¥ȬӢRȬȬ`$Ȭໞĸ\r2ĵG๰Ĺ%\x00ɻȸઌɻȴࡌɄ?ȯN Ȼॐ૬ĺ\x00ीȯॾɄ?ȯȯӥƯ	ίÒ%ɛȰେȰԲɛȰǓȰ૆̚ªʀZȡ3Ļ\r\x00	Ž4ȯҬ		ȯ)	+ȯɏȯ\x00	ȑļ\r\x00	\x00\nŝ\x00ȯऴ	ɄȘȯ\x00ȯ૙	 Ȭȳ\nɄȘȯ\x00Ȱয়\nȬɘ\n	Y	ȯஜɄ?ȯɓȯ\x00	؃Ľ\rɀļGĬ\x00Ʉੲ	ίľɋĿĿ%\x00\x00	ɻȯƅȰˑŠȯˉ	Tȯ9ȯࣱ		؍ɄɄÉȬ࢕Ś	\x00ȰନŚ	\x00ȯ໎ŉ	\x00ň֗ࡒňŀ\x00' ɟՄȯ̕ȯۉ߆Ř͊5ɋĿɋǣŉ\x00ඈŁ%űȬౝǀɽɽȰୃɽȰ̆Շɍȯəȯວł\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x00\x00\x00ȯຖ	\nȲ෦\nȰҼŁ-\rҽŏů\nɈɈ	śUକஹ\rÜ\rȯ)V\rUȯपȬّӰؤ	ե঒\nʓ0ɰ;ȯŊ঺̘࡛Ń\x00\x00	\r\n\x00\x00\x00\r\x00\nł\x00\x00	N\n৯űȬมɄðȯ\x00ȯքȯȬ࣋وȱȳ\r0ɰɄĄȯ෗\rȯŊaɄӪ	ܣĩѸȯ৔൯ɄӪ	ԧǞÓͯɄîȬैɄƢȬΕńѴȬ౎FȬ͗ȬๆFȬฟŅİȬϹFȬરԣ3ņ\r\x00	\x00\nɏȯୠńࢹ		ȯ)	V\nɏȯ\x00	Nń\nԩŅ\nɧȬ஻\nɧȬٍ\nɧȬչ\n੭Ȭࡧ\nBɄ?ȯɄĄȯu	ऑŇ\x00\x00	\r\n6 Ȱ ȯ֔Ɉϊ\nņ	N\n\n Ȱ\n ȯދň%\x00\x00	Ĥɫ	ɉĢ	5Ȱƚ	ȯɢȯŨ	Ȱࢾ+ȯŬPĦ.Ȱ˪ɶȱȿ,\x000ɆK	\x00Nȯԟ\"Ʉŏ=Ȳȃ?ࢉŉ\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00	l	+\x00	P	.	,	0	K	N	\"	=ɄĖ	?ı	ɄĖ	HɄङř\x00ɩ	SȬࣚ\nĤ\nɉĢ#ź\nɫ£Ȱƚȯɢ\nɫ£ȯŨȰࡴɄɐPL	Hƒ\nɻȯÙȯÕɬ\x00ɬɬUɬʁɄȐŚɬȶ఼	SȬҭ	Z\rɫU\rȯँ	SȬࠜ	ઞŇ\r\x00Ʉգ	+	SȬҭ	Zƍ\n֎Ś\x00,ɄĄȯ\x00,ȯ̰Ʉ»ȯ˗ɺ	Ʉ»ȯాɺ5©ɬ,/ɬ.ř\x00ȯࡁɬ.Nř\x00ȯ฿ɬ.N\"\x00	Hƒ\"ɬ.ƎNÂ\n	,ɫ	0Ɇɉ£Ʉ౫ɉ୸ɫ£Ȱƚ	Kȯɢɫ£ȯŨ	KȰࣙ	KɉɄ»ȯɢݸɺ		NɄŒȯɺ\x00ɢr	Nɢ	\"ȯຑ	=Ȳȃ	.ɄŒȯ	,\x00ɶ\x00	0\x00Ɉ\x00	K\n	PɄŒȯ	.\x00	N\x00	\"\x00	=\nɄŒȯ\nȰ݃Ɉ\x00\nɄŒȯ	0\x00Ɉ\x00	K\n#Ń	,\x00	0\x00	K	? \x00	ĳ	N\nĽ	N	SȬ੻		SȬࠡ	S4Ȭş	S८	SȬೣ	SȬઍȯָȯڑȯۚ	=ȯౖ	Ŋ'ɽɽȰ֥ɽȰܞ¼ʮ\r\x00ʰɰȵřȯధʰ݅Ȱƌɲȯ\x00\x00	ÂȰଲ	\r\x00	ʰ	ɏȯߜ	ՋɄĄȯȶ๫	ȯఈȬФȬచʯ\r\x00	\x00\n\x00৥ഠʮޔɑɗ/ȱ২ɗऀBȱݍɭȯ\n\nͩȱ෮ȯ)໲\nʯȀȯɺɄ[ȯ\n\x00ȯƟȯࡸ	¡@ɵȯȰ଴ȯ\x00	\nȯʮ	Âȯҍʯ	ࣼȯҌɄ[ȯ\n\x00ȯƟȯୀʯÔடɼǄȯƏɼˮŋ:ɇȰxɠȾŌ\r\x00	0Ȫ\n	Š	@	!ŋȬȫÕʮ:ʮȬࢩʮ$ȬഊȬືʮō\x00\r	\x00\n\x00ײ	L	ȯє	ּ	ùփ	\x00\n		\nɇȰxɠȾȬ؝Ŏ:őȯຏÖ%\x00OFȬо+ʆȬઇʇȯ)+ɏȯʇہʁpȬʂ&ȬKʃǇ$ȬŇȬKʄ&ȬʅǇ$ȬɦȬʆZЭ3ŏ\x00\r	\x00\n\x00\x00\x00\r\x00ńȯĔŗP#ʇ\x00\nȯW	0ȪɇȰ˧MȬࡠȬ൮ȯȬ൨\n@\r\né	!\r&Ȭǃ\né	!Ƚ\r$ȬɦȬʹ&ȬӮ\r\né	!Ƚ$ȬŇȬ࠲\r&Ȭெ	!\r$Ȭӄ\nȯೢ\r\n	!\r&Ȭǃ(\n	!Ƚ\r$ȬɦȬʹ&ȬӮ ɟ		!Ś$ȬŇȬলɄ[ȯ	ʷŐ\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00ÁިഘȯҬȯW	0ȪɇȰxMȬੳȬ΍JȬށŭ\nɏȯ\x00¶ɏȯ\x00¶ɏȯ\x00¶\rɏȯ\x00¶	!ʁ\nĻʂ	!ʃĻʄ	!ʅĻʆ\rs5\nɏȯ\x00¶ɏȯ\x00¶	!ʁ\nĻʂ5ɏȯ\x00\n	!ʃĻʄஶ	ő\rŐGŔŒ\r\x00	\x00\n\x00\x00\x00\r	ȯW\n0Ȫ	Үɏȯ॰Ȭݷ\r¦\r	ï\r@ɏȯ\x00\r\nHȬ֓Ȭຎ\"\x00HȬΧ¤ȬঝHȬКȬࢎ\"\x00HȬ൝¤ȬکHȬŗȬ࠶\"\x00HȬۨ¤Ȭ௡\n!Eȩȯɬ\nœ\r\x00	\x00\n\x00\x002ɏȯȯٿ		ȯ̭\n	\nȬդ\n\nȬϩ\nȬ೾Ĉ\n$ȬĪȬ˻	ɞȬɈ	Ō\nȬഷĈ\n$ȬŇȬѩ	ɞȬĪȬ˻	ȬωȬɈ	\"Ȭ৾\nȬիĈ\n$ȬઐȬຓ	ɞȬĪȬѩ	ȬωȬĪȬ˻	ȬຶȬɈ	\"Ȭശ\nȬ๝\x00	\"Ȭ໙\nȬ࣬\x00	\"Ȭࢽ\x00	ăDȬഋ¤Ȭ৷ȯn&ȬԔȬซŀȬ߾Ȭ໣ȯGŔ:ŕœºŕ\x00\x00	\r\n\x00\x00ͪ	ɟ		ȯࢋ\n0ȪɨȯĭȬශ	JȬ֤Š@\n!ȩȯɬȯ}\x00\"Ȭෆ		\n!ȩȯɬȯ}\x00	ʸɄ[ȯ\nʷŖ:ɣɱºŗ\r\x00	\x00\n	Ŗ\n\nȯW0Ȫ\n\n\n¤Ȭ΀	\n@	ɏȯ\x00	¶	ɏȯ\x00	¶	ɏȯ\x00	¶	ɏȯ\x00	ԁ\n\"Ȭ΀	\n@	ɏȯ\x00	ࣽŘ:ɾ	ɾȯ/ɲȯ\x00ɰȵʾȯౣř\x00:ɄĄȯuȯɪŚ\x00\r	Á<೰	ɄĄȯuȯֻɄ?ȯ	¿Ʉ?ȯt۩3ś\x00ɔ<̻ɓȯ\x00ȯȯɪŜ\x00ɔ<̻Ʉ?ȯ¿Ʉ?ȯŝ\x00\r		Ʉhȯ\x00N	ȬӺڟɓȯu	\nɓȯ\x00	ܑŞ\x00\r		Ʉhȯ\x00N	ȬӺೌɓȯu	\nɓȯ\x00	଄×%ʮ\x00ʯ\x00ʰʯʰlʱʯɖwLkࡿʰ\nʮʰ\nɄΦ	\x00Ʉ̈́\n%ʴ\x00\x00	\x00\n\x00ʴ¦Ȭо+ʴȯɨ~Ú^Ìʴȯɨ~Ȭ^Ȭෟʴȯɨ~ȬȒ^ு\rOʴȯ)ņ~FʴĽ~ʴȯ]uʺʴȯැʴȯ૘	ʴȯĕȬí\n	-	Cʴʴȯ}Ȭí¯~\n~~\x00b\n\x00oۘʴטʱ\x00\x00	^ിʱbɖwwୈkkя	\nʱoɖwɊw؈kkя		^\rO¡ǀĽkHȬ˘ĽwлĽkJȬΕʲ\x00\r	\x00\n\x00\x00\x00\r\x00	2\nȯW·\r\r\n\rV\rď,pkலw\x00\"kٯHȬ࠭	ȯлJȬɣٌȬ޸JȬɣ¤Ȭମȓ	ȯn૟Ȭ࠯๔ʮ&ʸ	ʳ\x00\r	\x00\n\x00\x00\x00\r\x00	2\n\x00ȯW\r·V\rঽȬ࣒\r໬$\r	\n\no\n\nb\x00\r࢟\n^˖	ȯ\n^\n\n಴		:ʲ\x00ʰ\n:ʳʯ\x00yş\x00\x00	\r\n\x00\x00\x00\r\x00\n-C\rȬӊȬȸ+\n,\nѪpȬǖ&ȬƽȬǹ	Ś$ȬǲȬ,\rǥȬ,Ѫ\npȬǖ\n&ȬƽȬǹ\n	Ԍ&Ȭ̲ȬӲȬǲȬøȯ\n\x00Š\x00Іˣ-͓ଯš\x00\r	\x00\n\x00\x00\x00\r\x00\x00ĵ\n	ɇȰxȯĭȬĎ22\rȬࡪȯǆȬĎĵŌȬɣȯس\n\n	\n+ȯĵȯ}\nMȬĖ\nMȬŃȬ็ȯ}	MȬচ\n\n\r\n+ȯ\rȯĵ௚\n\nȯ)\n+şŠ\n\n\x00\nȯ}ȯȬ୾ĶŢ\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00	0ȪȯȬĎ\nĵ\nĵ\n-CȯͦȬӊȬʛ|Ȭࣿ\r\rȬਈ\r@,λpȬǖ&ȬƽȬǹԌ&Ȭ̲ȬӲȬǲȬ,JǥȬ,λpȬǖ&ȬƽȬǹŚ$ȬǲȬø\x00\x00	\n&Ȭ«Ȭ`	\n&Ȭ¥Ȭ`	\n&ȬȬ`	\nǥȬ`	\n&Ȭ«Ȭ`	\n&Ȭ¥Ȭ`	\n&ȬȬ`	\nǥȬ`é௵	\nƑ	ȯ]\nJ\x00G	Ø%ʮ\x00ʯʮԚʯԚʈІʮ\x00ʯˀţ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\n\x00ȯǆȬࡶ\nɄȅPĵ\n\nµȯW²ȯƲȬࡢȬݵ+Ƒŀ൹ȬȐŀȬ഑RȬӁȬŞ&ȬčȬǂȬǝ&ȬąȬǂȬƱ$ȬܡŀźpȬƱRȬŞpȬµ˾&Ȭ΅ȬີJѤO\r\ră׮\r$ȬűJȬ஗FȬӈ\rȬş\r\r	ƍRȬ਼	ȷ&ȬčȬπ	[&ȬąȬπ	Ϩ$Ȭ๕\x00^Ť\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\nµ	µ2Ȭ÷+Ś˾&Ȭ΅ȬஅO\r৛\n\rs\rඟଛॊୢpȬࠑpȬ੮pȬK&ȬƱ$ȬોȬԿ\n\r\x00\r\x00\r֪Ȭ÷+\nўO\r\rȬ÷\rV\n\r\rଫMȬڹMȬ࢖MȬψ\rMȬғѯȬψMȬ؇Ȭm+T\rpȬŞRȬĖ	TpȬŞRȬൄȬĘ+TȯƲ		Tȯܔυ3ť\x00\x00	\x00\n\r\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00	ˣ-\r		Ȭ࠳Cǝ	ΐȬӧ®ȯĭȬࡡȬȬKਞ\n-\nC\n\n®\n͂+RȬȈ\r&ȬčȬ&ȬąȬ$Ȭ\rRȬȈ&ȬčȬ&ȬąȬ$Ȭ|RȬȈ&ȬčȬ&ȬąȬ\r$ȬȬǃRȬȈ&ȬčȬ\r&ȬąȬ$ȬȬາ\"ȬK\x00\r\x00OȬm+		ȬౕRȬӁȬŞ\r&ȬčȬǂȬǝ&ȬąȬǂȬƱ$Ȭé\x00\r\x00\r\x00\x00EŦ\x00ԝˣ඘͓้ǝ௒७඙ŧͶŋȬŤŋȬŤŋȬŤŋȬݏŨ\x00\r	\x00ʮ\x00ʯ\x00ʰ\x00	ʈʮ	-ʯ	কʮຊʮଝŤ\x00ʮ\x00ʯPʰţ\x00ʮ\x00ʯ¼\n\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00	ɇȰxȯĭȬต2\rȬ޲ȯǆȬФ	ŧĿȯƲȯţ\rO\nȯ)\nŭ\n!\rĵư\n\n	ʛȯ}\npȬП\nϾȬí	Ŧ\x00/\x00ťʰ\x00uʮưȯ)+ȯԙĶ\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x002ĵ\n5ȯĕȬ¸ȯ}Ȭ৪	ȯĭȬמ\n\n	ʛ\rȯ}\npȬП\nϾȬíťʰ\x00\rǡʯ\n	Ŧ\x00˂ȯ)+ȯǷ\rZĶ\nȯԵȯĕȯtl¤\n\x00­Eũ\x00\x00	\x00\n\r\x00	\x00\n\x00ńȯĔŗPή	DȬΔ\nDȬӣŨ\x00\nG¤\x00	Ū\x00\x00	\x00\n\r\x00	\x00\n\x00ή	DȬΔ\nDȬӣŨ\x00\nG­\x00	ū\x00:ŏũ\x00ºŬ\x00:ŪŐ\nŭ\x00:ŔŬ\x00ºŮ҂ZüEȯপώkʶů%\x000Ů̡ɸ+x෼ȀnwȯĕȬǾŰࣾŮ๏x஝nǦţ3ű\rɄʮUBŕŲ:Ʉʮ^ų:ɪŕɄʮଆŴ\x00ɇ	ǔEÜ:ȯलŵ:иŶİȬÐиŷ\rಡ$Ȭґر$Ȭ఺ȬͲ$ȬĪȬÐȼ$Ȭ۝Ȭ̫$ȬҳȬôȬÐȼ$ȬநȬЭ$ȬŇȬŜȬôȬÐȼ$Ȭ૪ȬಫȬŜȬôȬÐসŸѴȬŜȬôȬÐ֯Ź:ŸѰȬಷŸź\r\x00	ŷ\n	\x00\"Eȯ}	\x00Ý\r\x00	ŵ\n	\x00\"EŔȯ}	\x00ђə3Ż\r\x00	ŷ\n	\x00\"EŔȯ}	\x00ºż\x00Ö ȯäËĐDȬʖȬȬȯŽ\x00Ö ȯäËĐDȬʖȬȬȯž\x00DȬťȬʵſ\x00ſ\x00Ö ȯäËĐDȬ֌ȬતFȬΧȯ/FȬळȯɕ&ȬȬʈȬؚȯ$ȬͺFȬ࢔ȯɕ&Ȭ¥ȬʈȬ൉ȯn&ȬȬcȯ$ȬͺFȬධȯɕ&Ȭ«ȬʈȬ¹ȯn&Ȭ¥Ȭcȯn&ȬȬcȯ$Ȭ࠮ȯȬҷȯn&Ȭ«Ȭcȯn&Ȭ¥Ȭcȯn&ȬȬcȯ$Ȭஐƀ\x00Ö ȯäËĐDȬťȬʵȯ&ȬĎȯ$ȬƃƁ\x00Ö ȯäËĐDȬťȬʵȯ&ȬĎȯ$ȬƃƂ\x00Ö ȯǉǔȯn&Ȭ«Ȭcȯn&Ȭ¥Ȭcȯn&ȬȬcȯ$Ȭƃƃ\x00\r	\x00\nń ȯäËǔ	ȬƁ\nŀȬƁȯn	&Ȭ«Ȭcȯn	&Ȭ¥Ȭcȯn	&ȬȬcȯ	$Ȭcȯn\n&Ȭ«Ȭcȯn\n&Ȭ¥Ȭcȯn\n&ȬȬcȯ\n$ȬƃƄ\x00ŗȯͿȬݤż\x00ȯˋƇ\x00ƅ\x00ŗ\nſ\x00ȯˋƇ\x00Ɔ\x00ſ\x00ȯˋƇ\x00tʿ3Ƈ\x00\r	\x00\nO		ȯ)	+\n	৭\n ȯä\nË\nĐ\nDȬʖ\nȬȬȯ	Ġƈ\x00\x00	Ö	 ȯǉ	ǔǇ	&Ȭ«Ȭ`ࢥ	&Ȭ¥Ȭ`Ȭ൷	&ȬȬ`Ȭຩ	$Ȭ੪Þ)¯Eгʍʮʮ%ʯ\x00ʰʯlʰıʌ\nʋ¼ʱ%̚ೡɄȅѸȯĕȬǾ\r\x00	Á࠵ȱɻȲୋ5Ő\n	ĸȯĕȬ΍ȯ}Ȭ¸ĩǄ	5Ţ\x00ʱgŕ\nɍȯəȯǜȌȰȰĭʯ\x00௏\nìʲ%\x00\x00	\x00\n\x00\x00ll	̚ߝ\n¡ʯ@ʯ\n-Ȭű\n4Ȭǘ͇		\n˝ʳ\x00ʌ\nʳ\x00ʋ\nʰߊʳ\x00\r	ɀ5	Ŋ\n	ȯȬҲ	ŗ	\n	š	\x00ʱg	ķĩ	ޮȯʭ	\nȱɂȲȶŏ	࠷\nॼÁ\x00	ɋ\x00\x00	\r\n\nDȬű\n̚ౡLʯू\x00\n\x00	Ģʰ4ȬҲʰ©ɧʲ௜	\rʯU=ݕ͇̚฽௙Ɖ'ʍBʍƊ\x00\x00	'ʍ	๿ʍÁ\x00\x00	ß\x00\x00	\r\nO\n\n	\n+\nǗ\n^Ƌ\r\x00	\x00\nŝ\x00ȯΙ	-\nчŝ	\x00ȯॻy-Hч=\nаƌ\ry\x00H	\"ȯ¨HL=	\"ȯã=őƍ\r\x00	ȶȶȴ`ȸȯȷ࢚		ȯ)	ņŚ\x00	޵Ǝ\rŝŝ\x00ȯȱȯਕɄȘȯ\x00ȰҝɓȯuতƏ\x00'Bȯ¨EƐ\x00'BȯãEZቋ3Ƒ:ŝŝ\x00ȯȱȯࣕà\x00\r	\x00\nȯÿȯĎ\"ȯน		ȯ)	V\n	Uř\n\x00a\nȯѹȯВƒ'Bŝŝ\x00ȯȱȯ๛Ɠ:Ş\x00ȯਖƔ:Ş\x00ȯഩƕ\x00:ƔǄƔä\rʮ\x00\x00ʯ\x00ʰ\x00ʱ\x00ʲ\x00	\x00\n\x00ʳ\x00ʴ\x00ʵ\x00ʶ\x00ʷ\x00ʸ\x00ʹ\x00ʺ\x00ʻ\x00ʼ\x00ʽ\x00ʾ\x00ʿ\x00ˀ\x00ˁ\x00˂\x00˃\x00˄\x00˅ʮ²ʯʰ²ʱʲ²	Ȭൌ\nȬӖʴȬŏʹˆ	\nʺˆ\n\nʻ2ʽ̚õʾȷŏʿˁ˂˃̚õ˅l>¯VÚ@Ú8LE\x003\x009\rг૞ʷːʸ0ˑȬƜʵųěgʶĤwȯԟĪɻ\x00ȰŎ\nĪɻ\x00ȱƨ\nĪɻ\x00ȱș	\nĪɻȰͭȺ੨\n\nĪɻȰͭȷǋ\nĪɻ\x00ȰǮ\nĪɻ\x00Ȳɗ\r\nĪɛ\x00ȴ͒¼˖द˖Ů	˖Ȭ\n˖Ȭ.˖ȬK˖Ȭň\r˖Ȭʵ5˘ஊ˒Ȭڮ˔ȯպ˚׏\r'ʷɟ\\˗ʰ\nʳ	Ƈ\x00ʳ΢ˆ\r˜\x00˝\x00˞\x00˟\x00\x00	˜\x00˝˞˟2l	e\n\x00t\x00Ç\x00¡\r\x00p\x00u\x00|\x00j\x00\\\x00\x00¢\x00E\nࠣ˞Ȏ˜˝˞˝%Өt°˟˝˝,˝Ȏ˜ǣ\r%Өt°˞,˞Ӑ˜Ǥ˜\x00˟˞ੋĉeׂÇĿ˟˞\x00˞,˞Ȏ˜ͯ˞J˝˜Ǥ˜˝˞ʶ˝˞İȎ˜İӐ˜Ǥ˜:˟ˀˇ\x00\x00	\r\nO\n\nï\n@\n	ˈ\x00'ɟ#ɟഫۼУࣸऐˉ\x00:ɇȰĂā࣌āƀç೽çඋˊ\x00:ɇȯxā૖ɇȯxçܪˋ\x00\r		,ĥɃĨȵɇȰĂĥƀĨҕɇȰĂĥƀĨӃɇȯx	ӏ	ɪ	ǣɇȲʜ	ˌ\x00\r	\x00\n	,ĥɃĨȵɇȰĂĥƀĨҕɇȰĂĥƀĨӃɇȯx	ӏ	ɪ	P\nɇȲʜ	\nઓ\nȬΣɇુ\nő\nˍ\r\x00	\x00\n\x00\x00\x00\r2	0˓̹\nټ¦ȯ)+\r0˓ā\nɁç\nƬȯˌ\r\x00	ś\nEˎ%\x00˜\x00˝\x00˞\x00˟\x00ˠ\x00ˡ\x00ˢl˜2ˠ2ˡ2ˢ2¿\x00h	\x00Æ\n\x00È\x00Y\x00\r\x00¹\x00²\x00\x00£\x00ºE\r\x00	˝˟˞ˡ2ˢ2˜2ˠ	jA	4\\A		ଢ	4jñ˜˝ˊ	\n\n˝ăˢȯ	഍ˈ	\nୁˠ˟ˉ	\n\nˠ˟ʧȬੱ˞\"ˠ˟˟ക	\nˡȯy	Ͷ˞\x00˟^\n\r\x00	\x00\n\x00\x00Ȭ	2\nˇ	\x00ਲ˟ï@ˠFȬè	೥FȬƊ	ৎFěÞ	ୣFĖÞ	ഀFȬຄ	ৌ	ීï@	஍\n٨\n\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Ȭ-	\nl\rĶ˝B	Š˝೯22\nໂ˝੸˜|˜UఫDȬ੧्ළ\"ȬޑJ\x00Ĭ\x00ЋΖ\nŌԡ\x00ਪȬోҰ൚+࢏Ĭ\x00ЋΖŌԡO¡@ѮȯȬ໋ພ\nD	\r\r\n\x00	ɇȰœ\r\x00	Ç	\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00©\rıĶˡȯȬۺˢȯ઻ରˢȯƦV	ˢ\nˢષˈ	\x00\nழ	՛\nմ,	ç\nȵ	ā\nީȬ௼Ȭ๮ȬஸËȬ߿ȬਁȬ৿DȬఎȬఉ	ç\nڐȬఏȬАȯΤȯȬ๺ȯЧȴ๽·ȯ)+\"sȯW·ȯ)+ɇȯxѭ\n\"ࡏȯध,ȯţѲȬDȬਠƿ\r܎\r൪\x00૮Ȭӽ\r\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00Ȭɑ	©\n©©ࡐˡȯ\r²·¦ˡȯƦ+ˡˡ|ݒɁ	45\r×DȬè\n	L	/×ࠓࠛ45\r×DȬèL/×DȬǘ\n4	5\n	\x00\rࠖDȬǘ45\x00\r؎\r\x00ˡȯȬෲ%\x00\x00	\x00\x00\x00\r2	Ķˡȯ఻Ȭ۲\x00ȯ෵\n\x00'JDȬ਺JDȬթȬ௤ˍˡ\n\n-ิȬȯ)+\r\nఄ \r5×	DȬ˞຅	ڽ	×\rͳ\x00ȯഉ\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00	Ȭ࣓\nˡ\x00ɪ	Mȯܱɟ\x00ĶȬէȯƦHȯࢻ@0˓ߣ্ܩ૧4ɟ5ˋ\x00\n\"\x00ɇȰœ\x00ĆĈJ࣪೐Ȭതȵ஺\x00\x00	\r\n\nο4ʮ෪u߀	ȯЎˈjg	\nև\n%\x00\x00	\x00\n\x00\x00\x00\r\x00\x00ˡ-0˓̹	ɟ\x00\n·\r¦\rˡȯƦ\r+ˡ\rˊ\x00ඣ0˓āɁçƬ\nˌ\x00\n	 ɟ\n 		И×	\n\x00୹\x00^\r\x00	\x00\n\x00\x00\x00\r\x00	\nؾ˅	˅0˓ˡ෹ˡ೔˅`	˅`˅\x00ˡȯȨ\r\r\r+ˡ\r	ȕā˅ʘ\nȕç˅Ƭˉ\x00\n˅`ͳ	\x00\n\x00\x00ˀˏ%\x00˜\x00˝\x00˞l˜2˝˞¿\x00h	\x00§\n\x00rE\r\x00	˝˞·jA4\\AÒ	\n	ȯȬʹ	ȯȬӑ˜˝	\x00˝Ѓ	ȯȬ˞˞໌	˞\n\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00Ȭ҆	Ȭژ\nū2\rĶ˝ݫ˝ï@˜ȯȬ̠\n˖ȯத\nȯ஥Ѓ\n˂ï@ʧ	\r؟\r\r\x00	\x00\n\x00	װ\n\n˝ï\n'\n˜\nUȯȬɷȯȬ௎ȯଞȯ෈	޿˜\nЛ	ː%\x00˜\x00˝\x00˞\x00˟l˜ˎ˝ˏ˞˟ȲԖE\x00\x00	\r\n\x00\x00\x00\r\n௘ʯग¡˜@˜Ȱј˜eʹ\x00\x00	\n ɟ5\n\x00˞Ξʹ|৏¡˝@˝Ȱј\r˝eʺ\n\r ɟ5\n\r\x00˟Ξʺ|࠺\nˑ\r\x00˜\x00˝\x00˞l˜˝ˆ\n˞ˆ\n 	\x00Ã\n\x00\x00ªE	\x00\x00	'࠸ʯ5˝p	\n˜Ō˞p	݀ª\n\x00'ɟBE:ɪMȬॎȬ࢞%\x00\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00!\x00\"\x00#\x00$\x00%\x00&\x00'\x00(\x00)\x00*\x00+	\n\rʴ\x00 ʴ\x00!˝u\"˞u!Ͱ#˝jA#4˝\\A#˝#Ò$˝#\n%$h\x00	\"%-\"%CɇȰœ$Æ\x00\nɇȰœ$È\x00\n$Y4ɟ5&$Y\x00&ۡ×\"&C&-	ИȬ̮\nȬ̮ࢣ'$¹\x00\"'-\"'C($£\x00\"(-\"(C)$º\x00\")-\")C\")\")®\rɇȰœ$²\x00\r\n$4ɟ	ʴ	$$˝ȓɇȰxMȬѢȓɇȰxMȬѢDȬ໐ĈѱȬ׀ȬǮĈѱĖ๐Ċ,JȬِȬࣛɇȯŕMȬƜɇȯŕMȬƜɇȯŕMȬਦĶ\"Ͱ#˞jA#4˞\\A#˞#Ò*˞#\n\n\"*h\x00\"*§\x00*r4ɟ	 ʴ	 *r  *r˝ʴ	ƿ ʴ	 ƿ#ʳ2+	+ډ 	+kȬಔżʳ\x00+\nƁʳ\x00ɇȯŕ	śƁʳ\x00\nƁʳ\x00˜\nƁʳ\x00\nƁʳ\x00\nƁʳ\x00\nƁʳ\x00\nƁʳ\x00\nƁʳ\x00\r\nƁʳ\x00\n\nƁʳ\x00\nŽʳ\x00\nƂʳ\x00ϞƂʳ\x00ϞƂʳ\x00ح˒\x00\x00	ࣹȯȺൾȳ৶ȴߤȯໍ	೏ȯРȯࢼȱ̳ȱऒȰȇȰ௻˓\x00஢ฬ˔:̚ª˃˕ˢȯັ˖\x00\r		0˒\x00\x00˔ȯךʵ	˘	੥˕	ސ˄ʯ	˗ʯPʺp	\n˄ʰ\x00ʺeÞ˗ʰձ˂່	ȯҟʹp	/	ȯ໷˗ʯ\x00ʮ\x00	\n	Ȱͻʱ	˂Ȭ૛ˁ˂Ȭ൴	ȯȬӋˀ	\x00˂ໜ	ȯȬౠˈˀ\x00	˗ʯP˂ߓ	ȯȬè˂Đ	ȯЎ	Ȱͻʲ5˂Ȭ.ˁܕ	ȯҟˁࠁˁˁHȬè˂ٰ˄ʯ˗\x00\x00	\r\n\x00\x00ȵâȳԠʯ	ʹȕʺu҅\nʷȲສ\x00\x00	\nʸ \x00\x00\nǵ˘\r2ȯȯଘȯ౪ȯʘȯठȯʘȯƬȯȰ້ȯȯޢȯȯ೬ʻȯɄ[ȯ࡭ʻȯۖ̚ªʽHȬ؂˚ˮ˙%\x00\x00	\x00\x00\r\x00űȬউ		ȯ)	ݰ		઩\n	ಌɄ[ȯ\x00ȯࡍŏŰۛ%6ɛȱಖɛȱ܀ȹޫɛȶลȬ൱Ʉ[ȯחɇȰٸ\rමɳwȯഴɛȰڝɛȰǓȰݞɛȰǓȰ࢝˚%ۂʼ	ʼ˙Ŀʿăȯʼ\nȯʿ\nȯʶ\nȯʭʻ\nʻ2ʽ̚õ˛Ʉ[ȯ૗˛\rūɛȯࢢ0ɛȯ്ɛȯส0ɛȯƓȲ౮˖ȯȏȵŎʾqȰ۫िƖ%ʮ6ʏ\\ʏ²Īɻ\x00ȹµƙ\nɋĿʮŀ̚łȬւP ɋP\x00ɄǭȬɄখƘɻȯϑ¼\r\x00	\x00\nɄ?ȯȯȯ̌ƛ\x00ȯΚȯΆƛ\x00ȯǚǭεʮȀ\x00ȯ̥̚˺Èȯहȯ9Ȱ͐ȱ̧ȱ๻ȯŰٝȯ˿ɄɄĞȬց	ȯ9ȯհ	܌	ȯƏ	ǻ	P\nƭ	ƒ3ȯۀɔ\nଳȕ\x00ǿએƗ\x00\r	\x00\n\x00	ȯ9Ȱֺ	ɔ\\	ؖ̚t\nʒ	Ģ\n5\nlʒ	\n\x00Ʉ»ȯ	৴ȯ໭	̚Ӭ	\n\n+̚ł	\nŀ\n+\n\nSS؞\nƘ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x006ѥɟ\\\n0ȪȬΙȯƨ\rȸâȶܷ		P\rДȂʞ'গUࠟݻ\n!\x00\rų҅\nූƛ\x00'ȯ9Ȱ࢛̚ō\x00\x00ȯ9ºƝ\x00\x00	\x00\n\x00\x00ĉSÃwÃ´	Ã\nÃlÃdZ˟3ƞĉiಱƟĉWƠĉfҥҥώÃz	zঋ	ȯຂơ\x00\r	\x00\n\x00\x00X	̚ɜȬƜ\n·¡෌f୬W	\né\nH	ȯऩ̚ɜ	ȯţȬനƢ:Ĭ\x00ʘƣ:Ĭ\x00ʚƤ\rŽȯŁȱਊȰʔȱ͉ඇƥ\r\x00	\x00\n\x00i6ȯ΃ȬԼ	-\nҽ\n ȯŵ\n ȯ໿	vƟ@	Wȯӟ˷\n˶ȯȧɄI¯ȯ¸ȯȯμ	Sʥ		i6	ȯ΃Ȭɹ		ȯȬǃvƟ#ƤYƣƧθ	ȯ]	ȯȬ.Ȭˑ˷\n˶ȯ]Ȭĸ\x00ȯ¹ȯȧɄIȯ¸ȯȯս	Sʦ5		i\x00		ȯƕƣȰƌȰ-	ȯ]	ȯȬȬí˷\n˶ȯ]Ȭĸ\x00ȯ¹ȯȧɄIȯ¸ȯȯާƦ\x00'ȯ൛Ȳ࣡Ĭ\x00ʙƧ\r6ȯȬʆɄ»ȯ໴Ʉ»ȯ\x00ȯٕȰʔȱ͉ڿɒȯǡȯଔƨ\r\x00	\x00\n\x00\x00i\x00	౹	vƟ@	Wȯ̿ÍɄIv\x00ȯ]Ȭĸȳݯ	WȰЅȯǽȬӋȯ]ȬĸɄI¬ȯK	\x00ȯ¹ȯȯμ	Sʦʩ\n	i\x00\n\n-Ʀ\nƋW\x00೨Ȱ-ȯȬű\"ȯঅÍɄIq\x00ȯ]Ȭĸ\x00ण	Sʥ\n	i6\nȯӴȬɹ\n\n-ƤYƦW\x00ƧθÍɄIq\x00ȯ]Ȭĸ\x00ȯƳ\x00ȯ¹ȯǢȬűȯ]ȬୱƩ\r\x00	i\x00		ȯҴĹ-ÍɄIc\x00ûȯKǈȯшƢ	û-ÍɄIȯKੂ	ے˹3ƪ\r\x00	i6ȯӴȬɹ	Ƥ		Ƨ	\n	ȯҴĹ-ÍɄIc\x00ûȯKǈȯшƢ	ƋiƋiȯਝƋiۯƋiȯݟû-ÍɄIȯK૱	\x00ರƫ\r\x00	i\x00ȯǽȬ̠	C	WȱӑÍɄI¨\x00ûȯKĹ	\x00ȯ]ȬϝȯඍƬˢSݳʥƪǳʦƩǳʧƨǳʨƫǳʩƥઈƭ\x00\x00	\r\n\x00\x00\x00\r\x00\x00Á৹\n̚õȦ\n\n̚љ	ÉO\r\rȯ)\r+\rĽ	Ƭ\r඼\n̚õɄîȬિơ³\x00P\n̚õ°ȯપ\n̚љɛȰஔGĺƳȜƘ\x00	͸ʪ	\rÁ#ȯӎȯсɄ?ȯȯƪȕ\x00\nȯϽǭPǿyê\x00\x00	'Ʒa̚ʽ\x00	\x00Nȯ͛\"	E	ƴ\rɛȷࢡȰഝϏȯ٢v#ĺ\x00ȯ໧ȌȰŵϏȯ̐ȰঘȯଅȰпȯಮȯѼȬֲȰпȳ߫	ǞƵӘȯ̐ȯѼȬઁǞƶ\r\x00	\x00\n\x006ɛȯీ۠ȵɗȷࣄ		ȯ)	ݖɛ	ഽɛ	୞ȯ̊౿\nɛ	ഓ\n\nȱȚȯ)ņ\nȱȚӹ\nȱȚTȯ̊ܘƷݹ#ȯෳȰಁɄɄĞȬ˘ĤğȰڼĤwȰਲ਼ƶಥȰϮȯܯɰȹ਱ȯŊʛȯȰߒȰϮȰŵɰȻԳȯŊɭȯȰ࠘ǞƸ\x00\x00	\x00\n'Ʒ	ೈ\n¿ȯΨ̚ʽ\x00\n\x00	Ġƹ\x00\x00	\x00\n'Ʒa̚ʽ\x00\n\x00ÈƴYĺ\x00ȯԑȯó\n,̚Ǳޤ\nL̚ō\x00	\x00\nG\n๦ƴYĺ\x00Ȱඌȯó\n\"	ಘ	\n\x00Ș1\nݐˁ3ƺ\x00\x00	\x00\n'ƴYĺ\x00ȯɮȯó\nȊ\x00	Â\nL̚ō\x00	\x00\nG\nƻ\x00\x00	\x00\n'ɻȯó\n֕̚\nL̚ݘ\nG̚ഏƼ\x00\x00	\x00\n\r6ƴǒ\n\nȯó	đL	\x00ƳG\nƽ\x00\x00	\x00\n\r\x006ƴǒ\n\nȯó	đLȰ஫	\x00ƳG\nƾʮ\x00\x00\x00	'ƴʮYĺʮ\x00ȯۇ	ȯ؄ʮ	\x00ʮ\nE	\nǶʮ\nʮ׹ƿ\x00\x00	\x00\n\r\x006ƵӸɄɄĞȬ̖ȲѻɄ?ȯȯџĺ\x00ȯͥȯɆĺ\x00ȯ̀ȯɷȯඦȯó\nȊ\x00Â\nLȅ\x00\x00\nG\nঈǀ\x00\x00	\x00\n\r6ȯŵƴYĺ\x00ȯࡷ\nȯ՝Ɨੵ{\n\x00ȯஷɟƯΫ\në\x00\x00	\x00\n\r\x006ɟ#ɄԘ	ȯŁʝȯã	U ɟ\x00\x00	\x00\nN ɟBܛȯ͛	α\nE	\nǁ\x00\r	\x00\n6ƴ	Ʉ?ȯȯ	ȯĦ\nUƴ\na\n6\n>ř\n\x00ȯऍɄ\n\n̚ǱN\n4ɟB̚Ց\nޖ^ǂ\x00\x00	\r\n\nȰЊȓ\nN	BɄ\nਥ\n^ǃ\x00\r	\x00\n\x00\x00\x00\r\x006ƴ	Ʉ?ȯȯ	ȯӿǂ\x00ࣨ	ȱȡ\nșʬȬġșʱȬġUȯʥ\nȱż	̚ĴЖ\nȰӛ\rȰЊȋ\n\rȯ;ȯŖG\rȯ֠ĤʴĥƷaɄȀ^Ǆ\x00\r	6ƴ	Ʉ?ȯȯ	ȯӿǂ\x00ۦųǯ3ǅ\x00'ƴaȔ\x00G^ǆ\x00\r	6ƴ	Ʉ?ȯȯȀ\x00aɄГ	ȯż̚Ĵԙ^Ǉ\x00'ĤʴɄࡕƴYĺ\x00ȯඡǂ\x00ހ^ǈ\x00\r	\x00\n6ƵӸɄɄĞȬ̖	Ȳѻ\nɄ?ȯȯџĺ	\x00ȯͥ\nȯɆĺ	\x00ȯ̀\nȯɷ\nȯ௧Ȋ	\x00\nÇ^ǉ\x00:^Ǌ\x00'ɻB̚łȬԒ^ǋ\x00\r	6ƴYĺ\x00ȯɮ	ƗN	B	{ĺ^ǌ\x00'ɻBĥƷaɄȀ^ì\x00\r	6ɟ#ɄԘȯŁ	ʞȯãU	 ɟB	\x00Ç^Ǎڥȯ౒ȯŻȳӠȷॗȱੜȯݾǎ\r\x00	\x00\n\x006ǍϊȯöȯǊȯ܊ȱǮȯŎȲŦȺף		ȯ)	V\n0ɰȰɍ	೺\nȰŘ౭0ɰȺࢀȰŘ஌Ǐ\r\x00	\x00\n\x00\x00\x00\r\x00ȯöȯǊȯŎȯ࣊		ȯ)	V\n0ɰȰɍ	ृ0ɰȰɍ	đȶϤ	đȱ৑\rŠ\nȰŘÒ\r஖ȰŘÒƻ\r˨෥\r˨ศ\r4ۻǗ3ǐ\x00'ɰȹ௹ȱ੝ȯŊץ5ȯĀɰȳߕȲǚȯĀɰȹ֑ȲޒȯĀɰȷຽȯĀɰȹࡤǑ\rɄ˼ǐqɄÉȬɐȲˡਘɻȯÙȯȢȯ¾\x00Ȝ\nȯΓɄ˼ɄÉȬɐɄĄȯ\x00Ȳේȯ̰ǐ୲ǒ'ǎࣧǑ³ΫǓ\x00\r	ʜ\"ÁǏʜְɄɄÉȬ૤ʜǒʜ/ǎʜ	0ɄඅȲ෻ʜ\x00ȵΏȜ	\nʜ	Ⱥࣖȱऔ	ȯŢȱۄȲͧʜ\nʜ๳Ƴǔ\x00\x00	'=ȲຟȯஙɄಕȬȐ̚঍¿ȸൖȱصǬ1ı\x00\x00	Ǖ\x00\x00	'ɛBƱȯɛ\x00	Gı\x00\x00	ǖ\x00\x00	'ɛBƲȯɛ\x00	Gı\x00\x00	Ǘ\x00\x00	'ɛBȑȯ\x00	Gı\x00\x00	ǘ\x00\x00	'ɛBȒȯ\x00	Gı\x00\x00	Ǚ\x00\x00	'ɛȌ	ʫȯΨƭ	߷ı\x00\x00	ǚ\x00\x00	'ĤğɴB̚܍\x00	Ôı\x00\x00	Ǜ\x00\x00	'ĤğɴB̚੟\x00	Ôı\x00\x00	tƛ3ǜ\x00\x00	'Ĥʴ̚ૺ\x00	Ôı\x00\x00	ǝ\x00\x00	\r\n\x006Ĥğɴ\nŞȯŬȯϖŝȯŬȯਗɄƖ\nEĺı\x00\x00	Ǟ\x00\x00	'ɻÄɄי	ʫȯ˩Ǔ\x00	Ôı\x00\x00	ǟ\x00\x00	'ƴYȯȩȅ\x00	-	ɶı\x00\x00	Ǡ\x00\x00	'ƴYȯȩȊ\x00	Ôı\x00\x00	ǡ\x00\x00	'ƴYȯȩȌ\x00	Ôı\x00\x00	Ǣ\x00\x00	'ɛȱމ̚આ\x00	Gı\x00\x00	ǣ\x00\x00	vɛȴ݁	όɛọ̇Ǹ	ࠍı\x00\x00	Ǥ\x00\x00	ɛȱТvɛȱТ	όɛọ̇Ǹ	۸ʎƴYŜȯȃȯɮɄܻ̚͹Çı\x00\x00	ǥ\x00\x00	'ƴYĺ\x00ȯஒǮ\x00	Ôı\x00\x00	Ǧ\x00\x00	'ƴaȎ\x00	Ôı\x00\x00	ǧ\x00\x00	'ƴaȏ\x00	Ôı\x00\x00	tȋ3Ǩ\x00\x00	'ƴaȍ\x00	-	ɶı\x00\x00	ǩ\x00\x00	'ƴaȐ\x00	-	ɶı\x00\x00	Ǫ\x00\x00	\rʮ6ƴʮȰƅ	˲ȓʮ\nƘʮ\x00\n\nȜʮGʮĺı\x00\x00	¼\n'ʮ\\ȓyǫ\x00\x00	'̚ߍȱ٠ǴGı\x00\x00	í\x00\r	\x00\n\x006ɟ#ɄҶ	\nȬ\nɸ\n+	ȯʝ\nຕȯŁʟȯãU ɟB\x00\x00	Çı\x00\x00	î\r\x00		¦	ɸ	+ȯʝ	ԐɛȯݔƱȯɛ\x00ÈɛȰՖƲȯɛ\x00Èɛȱఅȑȯɛ\x00ÈɛȰசȒȯɛ\x00Gȯɛ\x00ï\x00ಆɛȰܥȯ˩ƭঢð'ɻB̚௉ȯഇǬ%\x00ʋȱӵʋȲՁ	ʋȱхőǭʮ\r\x00Áʮʮ2Īʮ\x00ȯ	\nƗʮN{\\ʮȯ9ȯ̵ȅʮ\x00ȯd	ٓ̚ʮ\x00yǮ\x00\r		ƗN		{ళ	{	{ȯԥ	{ȯ\x00³\nìǯ\x00\r	\x00\n\x00	6		ȯݿ\n\n	ȯ޷\nʓ	\nȯԥȯ\x00³಄ə3ǰ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\n	-	C	ԨȰȰȲԜǀ̚Ȋ\n\x00Ȱࡂ	௯ȯ\nĺ\x00ȯ௬\rıȯ9ȯˊ5Ʉ[ȯұɄI_ЦɄI}\x00Ȳ঴\rȬ֍Ʉhȯ\x00ำ#\r	ǿ૜̚Ȋ\n\x00ȯ౟ĺ\x00ȯޘǭ͊	ಛȯఴȯÈȱੈȺXޗı\x00\x00	Ǳ\x00\x00	\r\n\x00\x00\x00\r\n	-	C	ԨȰȰȲԜǀ̚Ȋ\n\x00ȰڂÜ\r\rȯ)\r+\r£	ȯ]\rణ̚Ȋ\n\x00ȯ౾Ü\r\rȯ̭\r£	ȯ]\rਰ\rڞı\x00\x00	ǲȱ஋ȱࣦȲ๣ǳ'ȱԭȷࢪȲޠǴȱڸȱञȳൈǵ:ȳॺǶʮ\r\x00ʢʮ\x00Ɨʮʼ<S#SHȬോɄֳɄo+qɟ#ɄĔ̚Įʮ\x00ȯ൐ʮȯ;ȯŖ\nɧ	˰	ǷʮyǷ\r̚Ǳ\nʢɟ\x004ɟ	ȯÎȱయǸʮ\r\x00ʣʮ\x00ʮȯ9ȯǚ>ř\x00ȱथ̚Ǳʮ\nɟ	̚Įʮ\x00ȯ঻ʮȯ;ȯ\nɧ	˰	ǹʮyǹʣɟ\x00ȯުȱ࡙ǺİɰȷɒȯަȯŊºǻ\r\x00	\x00\n\x00ńȯԗʛȯ\n	Ɏȯ\x00ȯ׾\nȯͦɒȯ\x00	\x00\nʸZΉ3Ǽ\r\x00	\x00\n\x00ʮ\x00\x00ʯƗ\n	Ɨ͚	gߋg	\n	gɊ\nȯ9ȯˊ	g\nࡆ\nȯƏ\nǻ\nP\nƭ\n಍\n࢒ʮɄ[ȯұɄI_ЦɄI}\x00Ȳ̬\n఑ɄɄĞȬࡻȴ̑ȶږȴ՞ʮƭݎʮ\x00ȯƴɔʮઋʯȯƴ\r¼\r%\x00\x00	6ʯ֨˛ȯ9ȯˊ˛ȯࡎȯ;ȯŦʮࣺʯă	˛ȯܽȯ॥ʯිȯ;ȯŦݓȯƴE	ǽ\r6ĴЗȯ)+ī\x00ȰÆĠǾ\r6ĴЗȯ)+Ī\x00ȰÆĠǿ\r\x00	\x00\n\x00\x006ŜȯȃȯԑǼʺȯŦȯ୩		ȯ)	V\n	ȯ9\nNǺ\nȯťǽாȯƏǻPȯȦŚ\x00ƭɓȯ\x00ȯ੾ƭƒ\nɔ³\r_\nȯťǾ٤Ȁ\x00\r	6ȯȣ	Ʉ?ȯȯ൑	Ȳ੢	ȯ૷	๑	ȱ̼	ȹొ	Ȱ஀	ȴ௝	ȰڡŜȯ9ȯcȰߧȁ\x00\x00	\r\n\nɄ?ȯȯ\nȯǶ̚ō\x00\x00	๨\nȰҿȯ;\x00	\nȘअȯ;\x00	Ȃ\x00\x00	\r\n\nɄ?ȯȯ\nȯǶȯ;\x00	\nǼ·ȯ;\x00	ȃ\x00\x00	\r\n\nɄ?ȯȯ\nȯĦ̚ō\x00\x00	·ȯ;\x00	Ȅ\x00\x00	\r\n\x00\x00\nɄ?ȯȯ\nȯĦƗƒข	໾	ȯԗ©	ǻ	Ć	ƭ	ƒȯ;ȯdըɔ		\n{ȯଊ\r_ȯ;ȯ஘ȯ;\x00	ȅ\x00\x00	\r\nŽȯŁ\nʠȯãU\n ɟB\n\x00\x00	Çȯ;\x00	Ȇ\x00\r	\x00\n\x00\x00\x00\r	Ʉ?ȯȯ	ȯǶ\nƗN\n\n+B\n+˚Ʉȯ9ɽ	ȱȡșʬȬġșʱȬġ\rȯ9Nȯʥȱż\r	̚Ĵ\rЖȰӛ\rBȋ\rÇȯ9ȇ\x00\r	\x00\n	Ʉ?ȯȯ	ȯĦ\nƗN\n=\n+Ʉ೿\n+ȯ˩\n+˚Ʉȯ9קȯ9tȕ3Ȉ\x00\r	\x00\n	Ʉ?ȯȯ	ȯĦ\nƗ͚\n\nB\nĺȯ9ȉ\x00\r	\x00\n	Ʉ?ȯȯƪ\nȯ9NȀ\x00aɄ\nÈ	ȯż\n	̚Ĵ\nࢦȯ9Ȋ\x00\r	ŽȯŁ	ʡȯãU	 ɟB	\x00Çȯ9ȋ\r\x00	Ʉ\n	Ʉhȯ\x00Ʉ̔ȯ੄	 Ȭȳ	ׇ	׿ɒȯu	ÇȌ\x00\r	\x00\n	Ʉ?ȯȯƪ\nƗ\n\n5	ȯŗȯɆ	ȯцȯ૩\n+ɄǏ\nSɄ೑	ȯцȯׯ\nɟ\x00\n{ɟڜ	ȰషȯϩȘۓ̚Į\x00ȍ\x00\x00	ɛȰɤvɛȰʚȗ\nȜȑȷՀ\x00	Ȏ\x00ɛȰɤvɛȰʚȗ\nȜȑȯȖȏ\x00\r		ȯŰ\nȘ1	Ȑ\x00\x00	ɛȰɤvɛȰʚȗ\nȜȑȶѵ\x00	ȑÖȯΉƭɩıɛ\x00ȱฌȒÖȯΉƭɩıɛ\x00Ȱؿȓ\rƗ\n5g4ɟ	ȯ;ȯŦgPSȬʹSȬ҈ĺ\x00ȯഎȯ;ȯŖ+/ĺ\x00ȯةȯ;ȯ+\n	ɟٛ4ɟ	ȯ;ȯdP̚Į\x00Ȱ௓͏3Ȕʮ\x00\rʯ6ɄɄÉȬȐʮȯഢɄ?ȯʮȯӥȯżʮઊʯɻȯÙȯȢʯȯ¾ʮȓʯ\nƘʯ\x00Gʯȯ௞ʮʮȰݥȓʮ\nƘʮ\x00	Gʮ଎'ʯ\\ȓ	'ʮ\\ȓyȕ\x00ʮ\r\x00	\x00\nʮȯଚɄ?ȯʮȯ඲	,ȯŤ\n,ȰఔȰ൶	#\n໅Ȱ୥	Īʮ\x00ȰÆ࠙ʐȰٻʮ\x00ʐȱԖ̚õʐȯऌȖ॒ਹȯܦ਀ś\x00ȳߐś\x00ȵ୐ś\x00ȶೖś\x00ȷঃś\x00Ⱥ઺ȗ\r\x00	\x00\n\x00\x00\r\x00\x00\x00\x00\x00Á#ȯӎȯсɄ?ȯȯƪȕ\x00Nȯ9ȰঁȯϽǭPǿ˔ȯ̌ƛ\x00ȯΚȯΆƛ\x00ȯǚǭεȀ\x00ȯ̥ȯ9ȯ̤̚˺ବȯം	ȯగȖ	ࠠ\nȯΓ\nƭ\nƒȯ¾\nƯ_țړȯ9ȯ̦5̚Ĵ\nȯ;ȯƘ୶Ȱߎ\rȯ9ȹǬȯ9Ȱ٦\r\rȵŵ5ŝ\x00ȯċȯ܅ɲȯCɰȲřȯ੽ƌȯ­Ʉo\nȯ;Ȱřܨȱ݌șʬȬġșʱȬġȯʥȱढ़ț/Ȱ੡ȚٴȰҿȘМǿȘԄʤ\\ʤɋ\x00ɧ˰ɋĿ͑ƕʤP\x00ɋP̚ޱʤɄ૕ș\x00\x00	\r\n\nȯ9\n\n5\nŘ\n\n	5	Ë\nɄ?ȯ\nP	ȓ\nɄ҃ȯ\n࡬\nȚ\r\x00	ȯŖ	ȯ9ʼ	\\̚ȋ\x00\x00	෶ț\r\x00	ȯƘ	ȯ9ʼ	\\̚ȋ\x00\x00	բȜȜƘ\x00ȗ͸ìñ\r\x00	\x00\n	¦	׆	@ȯʝ	Ԑɛȱईȯऺ\nȯ੎\nȯĔȯ՚ƭ\nɩɔȯٚɔΤȯฒѷȯݶΒȯǢȬࠢ-̽ȯǢȬז-Cॶȝ\x00ȝ\x00\r	\x00\n	\n\nȯ)\n+	\nԾ\nȯ̩ɔȯöȲÆȳۢɄ[ȯ	\x00ȯƟȯю\x00Ȟ:ʪų⩙3ȟ:ʫৃȠ:ʬȯŻ೭ȡİHȬजFȬ͗HȬКFȬްHȬ়Ȣ:HȬŗFȬڴȣ'ȬњʭƐȬंȡȤ'Ȭњʭണȡȥ\rʮ\x00ʯ\x00ʰ\x00ʱ\x00ʲ\x00ʸ\x00ʹ\x00\x00ˇʮɲȯ\x00ɰȹȶȯ௣ʯʰʱ©ʲɄ»ȯʮ˗ȷߺʯఖʳɄ»ȯʮ\x00ʯʴɏȯʮ\x00ʯʵ%ɏȯʮ\x00ʯ¶ȬƊʱଂʶʞ౞ʵʷ:ɓȯʮ\x00ʯ\x00ȯɪZʸ2ʹ·Ȭݨ+ʸȯ౓Ɲֵʺ\x00\r		ʸʹʹ,ʹȬ೮ʹ͘	S\x00	w\x00	lʰ\x00	dʱ\x00ʱıʲE	ʻ\x00ਫʼ\r\x00	\x00\nʯ୉	ɏȯʮ\x00ʯɛ	ȬǶ	ɏȯʮ\x00ʯɛ	Ȭݭ	Ȭࣶ	ɏȯʮ\x00ʯڛʭ	ƐȬٞȬ৕	Ȭௗ	Ȭজ	ɏȯʮ\x00ʯǟȬϹ		FȬഐ	đğ	Ȭ׶	ɏȯʮ\x00ʯǟȬ੕	#	ĕ໸Ȣ	Ò	ɏȯʮ\x00ʯɛ	ȬΑ	ɏȯʮ\x00ʯǟȢ	Ò	ɏȯʮ\x00ʯಬ	Ȭ໺	Ȭݣ	ɏȯʮ\x00ʯ¶	Ȭҡ	Ȭԕ	ɏȯʮ\x00ʯ໏Ȣ	Ò	ɏȯʮ\x00ʯు	Ȭൔȣ	ʻȶŝʯέʯù\nɒȯʮ\x00\x00ʯ\n	\n\nőʺȬ\nʽ%\x00\x00	ʯ\x00ɏȯʮ\x00ʯކ	ɏȯʮ\x00ʯЂ	#	ȬƊʻȵപ	Ȭϱʯ৸	 BʺȬɒȯʮ\x00\x00ʯºʾ%\x00Ʉhȯʮౄʯ\nȬӟɓȯʮ\x00ʯ\nʯʮȯಈɒȯʮ\x00ʯ\x00\nʯGˆʿ%\x00Ʉhȯʮ଺ʯ\nȬ˜ʻȺৱɒȯʮ\x00ʯ\x00\nʯȬʱʱ#Ʉhȯਿˆˀ%\x00\x00	ʯ\x00ɏȯʮ\x00ʯǟȤÒɏȯʮ\x00ʯԁʯù	ɒȯʮ\x00\x00ʯG	ˁ\r\x00	\x00\nʯ\x00\nॠ	ɏȯʮ\x00ʯЂ	#	ȬƊʻȷഌ	Ȭ౦\n޳	Ȭϱʯ೎	Ȭො\n֢	 Ȭʳ\n@ˀ1ʺȬɒȯʮ\x00\x00ʯº˂%ʲ6ȬͱȬʹЌȬĤĕğȬͱȬΡȬ૦Ȭ੯˃ʯ۞ʳغʵ1ʾؓʵ1ʿ໶˂౸ʳȻȯ੬ʵ1ʺċࣵʺȬ.Ȱ຋ˁȰຫ˄%ʯ×ʴȢaʼȯЈȬӌʮȯXʯ຺ȬהʵʵʺȬસʺȬƘȯລ˅%\x00ˀʲȬಭʺŮʫU۬ʺ\x00GʺŮ	%ˇнˇΦʽ\x00ˇǌ˄\x00ˇ௪˃\x00ˇƗ\x00ˇ̈́	\x00ˇȞ\n\x00ˇϢ\x00ˇƥ\x00ˇв\r\x00ˇ߸\x00ˇࡃ\x00ˇ२\x00ˇۙ\x00ˇ״\x00ˇ৽\x00ˇ׋\x00ˇೆ\x00ˇ͎\x00ˇǼ\x00ˇ͋\x00ˇ੺\x00ˇ߽\x00ˇ࠼\x00ˇ੠\x00ˇ਑\x00ˇݛOȬզ+ʭƐȬèˇ˅HȬŗFȬŨˇʼૢ%ʵʴf±ʵʴf±ʵ1ʺȬਔʺȬރʺȬKȴ੷	%ʵʴĢñʵ1ʺċ૳ʺȬ.Ȱʏ\n%ʵʴfɳʵ1ʺȬૄʵ1ʺċ۔ʺȬ.ȯٗ%ʵʴf±ʵ1ʺċଖʵ1ʴȻĢ°ʵʺċڅʺȬ൳ʺĚȰ୎%ʵʴfറʵ1ʺȬࠈʵ1ʺċȯ෡ʺȬâȱਆ\r%6ʷ໮ʱʶȬتʾǦʵʴf௃ʵ1ʺȬۋʵ1ʺċඉʺȬâȱඪ%6ʷȵ൬ʶȬԒʾǦʵʴfଏʵʴf±ʵ1ʺċೳʺȬமʵ1ʺȬݱʺȬ.Ȱש%ʵʴf±ʵʴf±ʵ1ʺȬూʺȬ߇ʵ1ʺȬܲʺȬșȯࢴ%ʵʴf±ʵ1ʺȬਂʵʴf±ʵ1ʺċלʵʴf±ʵ1ʺċȺૐʺȬ߲ʺȬ୅ʺȬ.ȱ୳ʯƻʴȻȬΑȢʮȯXʯ঩ʵ1ʺĉभʴ৤ȬĦʵ1ʺȬ৊ʺȬʾȯˆ%ʵʴf±ʵ1ʺċՠʺȬए%\x00ʯ\x00ʵʮȯXʯĩʯʮȯˉʯƻȬӔʯԢȬ͠ʮȯXʯ¿ȬҤʯЄʺȬȦʮȰȁ\x00ʯɽȬςʺȬߪʮȰȁ\x00ʯ7ʮȯXʯtʻȲѺ%ʵʴf±ʵ1ʺċݽʵ1ʺȬவʺȬ.Ȱ׊ʵ1ʺȬKȱǫʵ1ʺȬŧȯ˄ʵ1ʺȬՆȯæʵ1ʺȬȒȯϸʵ1ʺȬöȯࠆʵ1ʺȬ®ȯуʵ1ʺȬఢȯѧʵ1ʺĕȯȝʵ1ʺȬവȯƼʵ1ʺĖȯછˆ%\x00ɏȯʮ\x00ʯĩȬ୤ȬઅFȬࡳDȬۆȠख़ȬƊʱ੘ɏȯʮɏʯʰʯ\x00ˇUBDȬઝʺŮˀݗBʺýʻȴ҄ȩђˇ2	ˆ½ʻ\x00ˆ\n\x00ˆ¥Eˆ\nʲʶ%\x00ʯ\x00ʮȯXʯĩʯʮȯˉʯƻȬӔʯԢȬ͠ʮȯXʯ¿ȬҤʯЄʺȬǋʮȰȁ\x00ʯɽȬςʺȬ̇ʮȰȁ\x00ʯ7ʮȯXʯtʻȲߛȦ\x00\x00ʮ\rʯ\x00ʰ\x00ʱ\x00ʲ\x00˙\x00˚\x00˛\x00˜\x00˝\x00˞\x00˟\x00ˠ\x00ˡ\x00ˬ\x00˭\x00ˮ\x00˯\x00	ʯȥ\nʰūʱūʲūʰʵ෎ʳ:ʰSʴʲSʲʯҏʵʱʰ\x00ʲ5ʰʲ\x00ʲ໖ʰʯ1ʰʶ\x00\x00	\x00\nʯ½\x00\x00	\x00\nʷ\x00ʶ\x00lʸɇ	ʰLʷ\x00ȴӠSƾwȯæʹ'ʳaʵAʷʰ\x00ȲɓʰSƾʰwȲһƾȞÂȯæʺ'ʻaʵAʷʰ\x00ȲɓʰSƾʰwȲһʻ:ʰSՂʰwʼගʮ=ʰd#ʰSࣇʰSĖҏʽȯȯėʰSȬϠʵڄʼÞʸˮʾ\x00ȯ\nʹȬȴ˧\x00˟qʯʹȬúȯȯæʿ\r໔ʰSүʻȰࡄ˂˔ʻȯຮȯʰwjʵМʴ̓SȬռ˃/˄ૡˋ೘ʵȯȯ൘ȯʰw\nʵ˅෫ʵȯȳǠʽࣅȯȳˇʵʿ\nʹȬ˅ʾ\x00Ⱥˑʽ࠰ʵʾ\x00ȹ̪ʿھȯȺ˲ʵ˨ˆ\n˩߈ȯȱǕʵʰSĚ°ʵȯȰǅ˘ȉˈಓˉ౩ʵˊࣂʵʰSȬਛȯȱںʵˬʼÞȯȱԻȯȶҖ˧\x00˟qʽಃʵʾ\x00ȵˇ˨ˌ\n˩งʵȯȶ̅˧\x00˟qʽജʵ1ˍଥʰw\x00ȯjʵˑ\x00\nʽ؁ʵʾ\x00ȷĎ˨˯©ʿ\n˩ܖˁংʴSȬಚSĉ°ʰS²˄ˀۣ˄yˀʵȯȸ;ʰdȯ຀ʰSĚ°ʵȯȰझʰSȬӍʰSċ°ȯʰw\nʵʇ˧\x00˟qʽˁ\rȯȷϪʵfʰSɳʵȯȰīʻŅʵȯҙ˘ɥʺȰƂȯȰb˧\x00˟\nʽ˙ʵȯȯŋʰS4ĖñʰSȬ˓ʵȯȯʃʰSĖĳ˘\nʻŅʵȯȰƮ˘ɲʹĖgȯȯÑʻȰˁʵȯȰb˧\x00˟Ćʽ׼ʰw\x00ʵȯjˑ\x00\nʽӡʵȯȱǕʰSĚ°ʵȯȰǅ˘ȉˈ೻ʵȯȱತʰSൻʰw\x00ʵȯjˑ\x00\nʽӡʵȯȱǕʰSĚ°ʵȯȰǅ˘ȉˈƆ˧\x00˟\nʽઙ˂\rʴȬȣʵȯȰÑʵȯȯޅʺȰ౉ȯȰౢȯȷǬʵfʰSࡋȯʰw\nʵʽڶʵȯȰīʻŅʵȯҙ˘ɥʺȰƂȯȰb˧\x00˟\nʽ˙ʵȯȯŋʰS4ĖñʰSȬ˓ʵȯȯʃʰSĖĳ˘\nʻŅʵȯȰƮ˘ɲʹĖgȯȯÑʻȰˁʵȯȰb˧\x00˟Ćʽ࣢ʳ޴˘௫ʳȬધȯʰw\nʵfʰSɳȯȰīʵʻŅʵȯȰƮ˘ɥʺȰƂȯȰb˧\x00˟\nʽ˙ʵȯȯŋʰS4ĖñʰSȬ˓ʵȯȯʃʰSĖĳ˘\nʻŅʵȯȰƮ˘ɲʹĖgȯȯÑʻȰˁʵȯȰb˧\x00˟Ćʽ৚ʺȰƂȯȰb˧\x00˟\nʽක˃˘ȉʹȬÕȯȯbʿ˄˧\x00˟qʽ˅ɇʼÞʰS܁ȯ๊˘ੇʽˆ\rʻȱڈȯʰwjʵʇʹȬฐʰSȬ॔ȯȯئʳȬ୨ʰS\x00ʰw׈ѿ ȬبȬƞʰS²ȯȯ¸˧\x00˟ುʰw\x00ȯȯəjʵˑ\x00॑ȯȯ¸˧\x00˟ߵʰSȬࡺʻऊȯĲʰwjʵ˧\x00˟qʯʹȬúȯȯǜʿक़ʹȬÅȯȯėʰS ȬϠ˧\x00˟ϙʹȬÅȯȯėʰS Ȭ˿˧\x00˟ϙʯʹȬúȯȯǜʿˇ\rʹȬȴȯȯ¸ČʰS Ȭ׎	ˍʹȬƠȯȯಀʰSȬɝʵȯȟ˘ເːݮʹȬúȯȯæˈ\x00˪ʳԈ˘ϯˇ\n˪ˋ\n˫˫ˉ\x00ȯȴ¹ʵ͑	˘ϯ5˨ʳԈ˘ආʰSȬ؊ʵȯȶΏ˧\x00˟Ć˪ʹȬßȯȯŋʰS Ėñʻȵګʵȯȷ٧ʻȯϴʵȯȵরʰSĚ°ʵȯȰບʻڋʻઠʴ̓S ȬૈȯʰwjʵࢭʰS܋ʻȯϴȯʰwjʵȯʰwȯʰw\nʵऽȯȯÅʵ˧\x00˟qʹĕgȯȯມȟʰwȯʰw\nʵɫʸʰwނˈtʹĖgȯȯÑ	˩Ŀ˫ˊʾ\x00ȴɭʿ\nʳȬܐȯȳėʵʿǵˋ˨ʹȬßȯȯŋʰS Ė̒ʳӶʸĿʿȯȯÑʵ˩ˌʹȬßȯȯŋʰS Ė̒ʳӶʸĿʳȬඎȯȳవʵ˧\x00˟qʹȬÕȯȯ̷ʳȬܼȯȱࡘʵʹȬÕȯȯ̷ʿȯȯÑʵˍȯ۷ˋ\nʳȬࢳȯȸќʵʳȬೕʹȬȴȯȯ¸˘օʹȬúȯȯୄˋĆʳȬ࢑ȯȳًʵˋǵˎ˰\x00˱ϭ%ʴSȬ੣˰ȯʰwȯbʵʵː˰\x00˱SȬࠨ˰ȯʰwȯb˘˰\x00˱\nʵ˰ȯȯċ˧˰\x00˟ฤ˰ȯʰwȯb˘˰\x00˱ࢗʰSࣟ˰ȯʰw\nʵ˘˰\x00˱ݚจ˰ȯʰw\nʵʹȬÕ˰ȯȯbː˰\x00˱Ҫ˰ȯȯÅʵ˧˰\x00˟qʹĕg˰ȯȯßʹȬÕ˰ȯȯbː˰\x00˱ƆȟʰwഁʰSȬظ˰ȯȯ¹ʵލˏ\x00ຆʰSȬԛȯȯ¹ʵʰSĕĳː\x00yː\x00ϭ	\r\x00	ȯғȱڃ		ȯ)	ņ	ളʰSү	ʰwȯʰw\nʵɫ˘\x00ҪʵȯȯÅˏ\x00\nʹĕgȯȯबʵȯȯ΄ˎ\x00\nʹĖgȯȯยȯʰw\nʵ˘\x00Ɔȟʰwȯʰw\nʵഔʳȬරʵȯȯċ˧\x00˟૊ˑ\x00ࠏː\x00NʰS Ȭ৅ȯȯ¹ʵ୓˒\rʵȯȯ¸ČʰS Ȭ૵@චʹȬ࣑ʰSȬ൵ȯȯҜʰSȬɝʵȯޏ˧\x00˟ൺȯȯǜʵ˓\r\x00	ČʰS Ȭભ	ˍʹȬƠȯȯӼʳȬਸȯʰw\nʵՏʳȬ๥	ȯW˧\x00˟Ƈ˥\x00	y˔\r\x00	\x00\n\x00ʹȬßȯȯ΄ČʰS Ėൂ5	ʹȬƠ		S4ĖÞȯȯ݆οʰSĖĳ\nʰS\x00ʰw\x00	ʴʻȯࢃ	S஭ȯjʵ॓\nҢ	SȬҡ	SĖܢȯȯb˘ƭ\nҢ	S Ȭŗ	S Ȭ೴ӆއʵȯj˗\nˈƭ\nક	SȬ੐ȯȯb˘\nʵȯȯċ˧\x00˟ƭ\nȬγʵȯȟ˧\x00˟ƭ\nĚñʵȯȰīʰSȬƞʵȯȯÅ˧\x00˟qʹĕgȯȯӞ˗\nˈۜ\nȬƞʵȯȯÅ˧\x00˟qʹĕgȯȯӞ˗ʰSȬǉˈiʹȬÕȯȯb˧\x00˟඄ȯȯÑʵ˕\rʵȯȯÅČʰS ĕñ	ˍʹȬƠȯȯӼʰSĕĳʰSȬɝʵȯȟ˧\x00˟ʰS Ȭ໒˧\x00˟̞ʵȯȯȝ˖ȯʰwjʵௌ˧\x00˟qʰS ĖÞʹĖʇʰʯ¥ȯȯ́ʰwNʰSȬ֞ʵɫʹȬ਻˗ʰSȬĤʰSЌȟʰwȯʰw/ʸʵ˘\x00\r	\x00\nÁʳൃʰS4Ȭȡʶȹࠥ	ʰw6	ȵγȯ	\nʵ1	Z\nˠ	ট\nvƟ\n0Ɵ	\nˠ	\nP	෿ˮf	\n˯f	\n˯	\n\x00ȯ\n\nʵ1\nZ˙ȬǏ˚Ȭȯ˛Ȭ͜˜Ȭ˝Ȭ˞Ȭň˟ˠlˡٖˢ\x00\r	\x00\n\x00\x00\x00\r	ı\n˯Oȯ)+	ɟLvƟ5ˮfWξ\nWrvƞ5\ri-\rvƟ5ˮf\rW\rξ\n\rWr\rȯʳ\rȯ҈	ฦ	Üȯ)+ˣĠˣ\r\x00	6vƟ@˭fWԀvƞiO		ȯ)	+ˣ	ைˤʞ@[©˥\x00\r	ȯ߬	0ƞȯ}śȯ]\x00ȯ\nȯ	ǵ˦\x00\x00	\r\n\n0ƞȯ}śȯ]\x00ȯ\nȯ\n\n\n©\nS	\x00ˡȯ\n˧\x00\x00	\x00\n\r\x00\x00\r\x00\x00\x00\x00ȯ໇ʰSՎ\rʴʰwȯ߉\rSȬʔ\rSơ\rSȬĤ\rSȬశȯĲʰwjʵ˧\x00\x00	\x00\n˔ʰwȱ੼\rSȬΡ\rSơ\rSȬʆȯĲʰwjʵ˧\x00\x00	\x00\nʺ˘คȯʰw\nʵ୪ˡȯW˔NʰSȬʍˡȯÜˡȯ)+ˡSʦ#Sʥ	ࠃˡȯW˕NʰSȬʍˡȯÜˡȯ)+ˡSʦ#Sʥ	ॄʵȯȯ¸ȯW˓\nʹȬúȯȯ௩ʵȯȱǕʰSĚ°ʵȯȰǅˈ૰ˉ଑ʵʰSȬȣʵʺȯȠȯȻൡȯȹυȯW˧\x00˙Ƈ˥\x00\nʰSȬǉ˒P˦\x00\x00ʨਐȯĲʰwjʵˡȯW˧\x00˛຦ˡȯÜˡȯ)+ˡSʦ#Sʥ	؉ȯĲʰwjʵ˧\x00˛ஏ˖ೞȯʰwjʵ˧\x00˟ٔȟʰwʰS²˘જČͼʰS౛ʵ˥\x00\nȯȯÅ˧\x00˟qʹĕgȯȯß˦\x00\x00ʥໃȯʰw\nʵʰSơȟʰwȯʰw\nʵ˦\x00\x00ʦʰSȬƞʵ˥\x00\nȯȯÅ˧\x00˟qʹĕgȯȯß˦\x00\x00ʥധʰw\x00ʵ˥\x00\nȯ\nʰSơȟʰwȯʰw/ʸʵ˦\x00\x00ʦଧH˚\\˥\x00\nȯƕ	ɟLvƟWȰşˤ˯P˒\n˦\x00\x00ʧ܏H˚\\ȯʰw\nʵࡹH˚\\˖ƆාČͼʰSചʰdղH˚\\ȯƕ	ɟLȯʰw\nʵటH˜\\ʰwȵौȯĲʰwٺȯʰw\nʵ˧\x00˜؏H˜#\n\\ȯȻແʵ˧\x00˜ߗH˜\\˪ˢ\x00\nȯ੔ʵʰSȬԕˋ/˧\x00˟Ƈ˫ഃH˝\\ʵȯȯŝ˧\x00˟ƇʹȬÕȯȯb˧\x00˟ฮȯࠉʵ˧\x00˟௲D˞\\ȯƕ	ƿȯʰw\nʵȯW˧\x00˞Ƈ˥\x00\n˦\x00\x00ʩƆճ	ʰSȬԛȯȯ¹ʵ˧\x00˟ఌ˨ˬȯ˯\n˯0Ơ˯˩˯ˬȯێ˪ˬȯˮ\nˬȯ˯\nˮ0Ơˮ\n˯ˮ˫˯ˬȯЧˮˬȯࣆˬ2˭0Ơˮ˭\x00˯˭\x00	ͩ@˧	\x00˟Յʳ໕ʿ	຿³˭\x00°	\x00ˠ\x00Éˡаȧ%ʮ\x00ʯʮ2ʯ฾\x00ɋԄʯोʮʯ^ࡨʮʯ!Ȩʮ\x00ʯ\rʰʰʮ௿\x00ʱ\x00]\x00m	\x00\nɋʱʮ˴ʯ٘ʯ%\x00ʱડʮԣʯ\x00\nʯ\"E	%ü]B૯ɗښ\n\r\x00	ʮ\x00ʰǒʯ	ʯʰ	+	ʱ1ò\x00ʮ\x00ʯ\x00ʰ\x00ʱ\x00ʲ\x00ʳ\r\x00ʴ\x00ʵ0ɳඐ	\nʳн\x00ʵʴ\x00\n¼	\r\x00	\x00ʷ\x00ʸ\x00\n	lڗ	Åਣ؋	Å௰ʴȨ\x00\nʷʴ\x00ʸʴ]\x00\nʸ\x00	Êʮ\x00	±ʰ\x00	«ʯ\x00	¶ʴmௐʴmg	ʷ	ʷ	Cʹ1	ʹ%\x00\x00	\x00\n\x00l5ʷʷ4ʸ	ʷ\n0Ȫ	च	+\nӭʹA	ʷ0Ȫ	ư	+ʹA:\n\x00¼Eʶ\x00'এѷໆΒඕ-̽ࠦ-Cٱ෩-Cפ౴-C®ࠀࡥ-C®µ԰े-C®µâਗ਼ߢ-C®µâ ๟\n\r\x00ʷ\x00ʸ\x00	\x00\n\x00ʹ\x00\x00\x00\r\x00ʺ\x00\x00C\x00ʷÊ\x00ʸ«\x00	±\x00\n¶\x00ʹȧ̡	ò+ʻ	ӂ\rफ	ɰଠ\r\nԣ\r֮ʺ0Ȫ5\nʺÍɛ\x00ʺɛ\x00ʺʳ\x00\n\n2ূ೼ӵĹʺ\x00٪ʺ:OЙò+ʺʽ4ʵ4\nʾu4ǒ¼\rOò+ʻĠʻă\n݊ʼஈʼ\r\x00	\x00\nʠ		ò	+\n˴	\n\nෙ	ਯ\nຈ	௨\nն	ฑǴʽˀ\x00ˁ:%\x00\x00	\x00\n\x00\x006ˀʩʹʹûˁCǈˁ־20Ȫˀ5\nûˁՔǈˁ੩ӂ	ˀ:O\nЙ\n	ò\n+\nʽ	\nt਎Ĺ\x00ض߅ˀ4ඃˀ4ʵˀ4Pʾˀuˀ4ǒ\nµâˀ5ʹ\nʹҒଣʾ\x00\x00	\x00\n\rˀ\x00\x00ˁ\x00˂\x00\x00˃\x00\r\x00˄\x00˅\x00ˆ\x00ˇ\x00ˈ\x00ˉ\x00ˊ\x00˄4\x00˅\nˆ\n®ˇ\n-ˈ\nCˉʹˊ·ˀˀ	ˀV˄ˀUઘູߞ໛ˉˊˉˊѯ\x00ˉˊ!/ࠪˉˊˉˊƐ\x00ˉˊ!/Փˉˊ!ˇ˄(ˀʡˉˊঀય൏˂˄(ˀˉˊĢ5ˀ\"˂ɏˊ̟ࢇˉˊˁ˂ຨ/ୗˉˊ!˅˄(ˀसˉˊˉˊʁ\x00ˉˊ!/߹ഈˊǺˊ\x00ˁˁ˂ˉˊ!ˁˉˉǪ࠻ˊùˊ\x00ˁˁ˂ˉˊ!ˁˉƵ؆\r˄(ˀˀ\"\ri˃˄(ˀˉˊ!ˆ˃T˄(ˀкഺˉˊ\nෝ\nЕ\x00ˀ	/૴ˊǍˊ\x00ˁˁ˂ˁˉˉ|ˉͫؗ\r˄(ˀˀ¤\ri˃˄(ˀˉˊ!ˈ˃T˄(ˀк३లഭˊùˊ\x00ˁ˂eˉƵૻˊùˊ\x00ˉˊ!ˁ˂eˉƵ୧ˉˊˉˊല\x00ˉˊ!iˉˊˁˉˊƑˁʷ˄(ˀѕ/צࠎˉˊࡣ঱˄ˀϵ˂˄(ˀʷ˂˄ˀ\x00ˉˊ!/ຐˉˊˁ˂α/ˉˊ!ʺ˄(ˀʡࢵҘ˂ˉˊˁˉˊrডˉˊˁ˂/ॕˉˊ!˄(ˀʢ˃˄(ˀ˂˄(ˀˁˆ˃rຯˉˊ!ˁ˂ҎৄˊǺˊ\x00ˉˊ!ˁ˂eˉˉǪ໤ˉˊˉˊѬ\x00ˉˊ!iˁˁ˂ˉˊ!ˁˬࢿబড়ʿ\x00˄(ˀ˄(ˀ\r˄(ˀ˄(ˀˀ͘˅\x00\n\n\n෉ˀ	ˀ\"\r/ζ˂˄(ˀˁˇ/ܠˉˊˉˊм\x00ˉˊ!iˁˁ˂ˁˬޣയˊùˊ\x00ˁˁ˂ˁˉƵ࡮˄ˀƤ˂ʱ˄(ˀď˄ˀ˂\x00ˁˉˊrൗˉˊ\r˄(ˀδˀ\"\ri˂˄(ˀˉˊ5ˀ\"˂ɏˊ̟ேସˉˊ઎ࣗˉˊˉˊॅ\x00ˉˊ!/භˉˊˁˉˊˉˊ!ˁʐˉˊˉˊʧ\x00ˉˊ!/තˉˊˉˊ£\x00ˉˊ!/޺ˉˊ!ʳ˄(ˀʡඨ˄ˀХ˂ʱ˄(ˀď˄ˀ˂\x00ˉˊˉˊ!˂ʐˊǺˊ\x00ˁˁ˂ˁˉˉǪؙෂ˂˄(ˀˉˊ!ʽ¼˂\n߁ˊǺˊ\x00ˁ˂eˉˉǪ౥Ϻˉˊˉˊ!i\r˄(ˀˉǑˊJ\r\x00ˊ\nˊ¤\r\x00ˉˊ!ʶˁ˂ր౺ˉˊˁˉˊƑˁʱ˄(ˀѕ/ފˉˊˉˊߘ/Қ˂˄(ˀˁʺ/ˁ˂ය೪ฯ\nإˀ	/ঊˉˊˉˊѭ\x00ˉˊ!/٥ˉˊ౯˄ˀϵ˂˄(ˀʸ˂˄ˀ\x00ˉˊ!/ପˉˊˉˊđ\x00ˉˊ!/ْˉˊˁˉˊƑˁ*ѐ˂˄(ˀˁʳi˂˄(ˀˁ˅È৬ٳ๓م˄ˀХ˂ʷ˄(ˀď˄ˀ˂\x00ˉˊˉˊ!˂r֜ˉˊ௔ˉˊˉˊ๵\x00ˉˊ!ͨณଙˉˊˉˊđ/زˊพˊ\x00ˉˊ!ˁ˂eˉˉ|ˉŉˉћˉ৙൞ˉˊ!ˁ˂ණ\r˄(ˀˊ¤\r\x00ˉǑˊ\x00ˊ\r\nˁ˂޽ˁ\x00୑০ˉˊˉˊ஑\x00ˉˊ!/֭ˉˊ౰ˁ˂ļ৲ˊǨˊ\x00ˁˁ˂ˁˉˉ|ˉŉˉԴˉˊˉˊ̈\x00ˉˊ!/ఋ˄(ˀļಲˁ˂඾ে˂˄(ˀ˂ʐˊǍˊ\x00ˁˁ˂ˉˊ!ˁˉˉ|ˉ୺ථ׻ܳ˂˄(ˀˉˊ!˂rఁˊǨˊ\x00ˉˊ!ˁ˂eˉˉ|ˉŉˉʲܫˉˊˉˊৼ\x00ˉˊ!i˂˄(ˀˉˊĢ	ˀ\"˂ఛࣈಒˉˊ˂˄(ˀˁʲ˂\rˁ\rɟ	\r˄(ˀ໻ˀ\x00ˀ\"\r/఍ˁ˂Ҏ഼ਟˁ˂ʢ˂˄(ˀˉˊˉˊ!˂r໘๩ˉˊˉˊ߄/๠೅ˉˊˉˊ!/כˉˊˉˊඥ\x00ˉˊ!iˉˊˁ˂Ǘ/ո˂˄(ˀˁˉˊr۳ˊǍˊ\x00ˁ˂eˉˉ|ˉͫվˉˊˉˊѮ\x00ˉˊ!iˊǍˊ\x00ˉˊ!ˁ˂eˉˉ|ˉ૥ృڙˊǨˊ\x00ˁ˂eˉˉ|ˉŉˉʲ੆ˉˊˉˊॱ\x00ˉˊ!/ֹˉˊˁ˂ถi˄ˀƤ˂ʷ˄(ˀď˄ˀ˂\x00ˁˉˊГ໼ܙˉˊˉˊĻ\x00ˉˊ!Èਨ\r˄(ˀˉˊˀऱ˃¡ˁ˂˃\x00ʾ\x00ˀ\x00ˀ\r\x00\nN\ņˀ	ֱˀ\"\rઽດרˁ˂ʢˉˊˁ˂\x00ˉˊ!ͨ஧Ο˃˄(ˀ˂˄(ˀˁˈ˃r೧˂˄(ˀˉˊ˂r߱ˊǨˊ\x00ˁˁ˂ˉˊ!ˁˉˉ|ˉŉˉʲˉˊෑˁ˂ļޞˊ\x00ˁˉ\x00˂ˊ/ৢ\r˄(ˀˉǑˊJ\r\x00ˊ\nˊ¤\r\x00ʶˁ˂ఽˉˊˁ˂੶iˉˊˉˊѤ\x00ˉˊ!tʹˉ¼%˄(ˀඊҘ˂ˉˊˁˉˊrী˃˄(ˀ˂˄(ˀˁˆ˃rζ˂˄(ˀˁˇi˄ˀƤ˂ʱ˄(ˀď˄ˀ˂\x00ˁˉˊr๜Қ˂˄(ˀˁʺ/ѐ˂˄(ˀˁʳ/ـ˂˄(ˀˁ˅i˂˄(ˀˁˉˊrࢆ˄ˀƤ˂ʷ˄(ˀď˄ˀ˂\x00ˁˉˊrΟ˃˄(ˀ˂˄(ˀˁˈ˃լˊ\x00ˁˉ\x00˂ˊyʿ\x00\x00	\x00\n\x00\x00\x00\r\x00\r\x00\n¤	\x00	¤ɀʾ\x00\x00\"\x00³\r\x00ʾ\x00\x00	\x00୿âµຌ\"	\x00ʾ\x00\x00\n\x00\nഒ෋\x00Е౜ó҂xÃnÃEȬֆȬڷȬ຤Ȭ௥Ȭג^Ȭ֧ȬൊȬ෸Ȭ؛a	\r\x00	ńȯĔŗ˂ȯ)͖ȯǷ	üÃk\"ȯє	ȯǽȬбaĵ	ȯӾȬد%\x00\x00	\x00\n\x00\x00\x00\r	ü\x00\nüZ\x00ȯſ	ȯȬَ	ȯţȬΣȬm$Ȭϼ+	ȯ๢	̈Ȭбaĵ	ȯӾȬܿ	ĵ	\n	ȯɇȰഖkMȬೊȬࡩ	ȯໟkMȬ޶a	\n\nȯW0ȪMȬڍŭ\r\né\rRȬ«Ȭ`\rRȬ¥Ȭ`\rRȬȬ`!\r$Ȭ̎	\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00ȯƲüZ\x00Ȱ˟\n-C\r®͂FȬछ+HȬ໪JȬӧJȬ১JȬ૔JȬࣰǇุRȬ୽,\npȬ൭\nRȬɭFȬĔ,$໗$\r/FȬಊ\rFȬأ,$Ԥ$\rԤ$\r/FȬड\rL	,ܮ^ɇeȬອ\r\x00\r\x00,pȬՙRȬí\n\x00\n	٩ƌ\nǙೝ­Ǚ஁ыǙقɺ\rǙ஽ˡෛԵ3ôʮ\rʯ\x00ʰ\x00ʱ\x00ʲ\x00ʳ\x00ʴ\x00ʵ\x00ॉʯʮȰՕʰʮȯӷʱʮȯڠʲʮȶԠʳʮȱٷʴʮȰ޹ʮȸࠒʮȺ͍ʮȸݪ_ʵ੉ȬۗʮȰɼʮȜʾȲŧʰ\n ɟ	ʮȯŔඳ	_Īʮ\x00Ȼ®tʊ\n\nĉµ#ʵÃsຼ\nȯȯӫ\x00\nȯȰԉ\rʶˁ\x00˂\x00˃\x00˄\x00˅\x00\rˆ\x00\x00	\x00\n\x00\x00ˆะ˄˄ͪ˄źˆs¦ʷˁ\x00˂\nˆs»ʸˁ\x00˂\nˆsÂʹˁ\x00˂\nˆsÀʺˁ\x00˂\nˆsʻˁ\x00˂\nʼȯˆ\x00ˁ\x00˂Ғ˂ ɟඵ=ʴ=ˆsɟ#ˆsู˄జˆµȹ෤ɧ\r\x00Ȭૼˆs\x00	2\nˆsҰ¡@ӹषмɟ		ў	ॵɟΐ	ޓ¡	@	Ѭ\n5\n	ݦ ɟ=˅ɟ#˅ވˆȰƓˁ\x00೉˃ȯƏ˃\x00΢\rʶȯˆ\x00ˁ\x00˂\x00˃\x00˄\x00˅yʷ\x00Ә ɟ@ʰʽʰ\x00\x00ˈʾ\x00ʰ³	ìʸ\x00'ʳ̸ ɟ@ʳȱɂ\x00ˈʳȱɻ³	ìʹ\x00\r	6ʲʓ	ʿ ɟ@ʲ	T˚ʲ	T̘\nìʺ\x00'ʱ̸ ɟ@ʱȱɂ\x00ˈʱȱɻ³	ìʻ\x00\r	ÁɄౘ	ˀȯƎȯ໰	ȳא	ȯǁȸԪȴ׺ ɟʩ	ȯ;\x00\n	ȹทॽ	ȱফG	ȯ9ԧ\nìʼˁ\x00˂\r˃\x00\x00˃اʴ5²ʴȯȏȰϡ\nȯ୫\n\x00ȸ۹\x00˂ ɟ	ȰȆȰȆ\rآ	ʪ\nʪ\r\x00	ȯŸȰЀ	ȷ੅Ȱใȯࣳ\r\x00	\x00\n\x00ȯŸȰЀȲрȲȥȰߨ	ȲіȰܒȺú\n	ȲκȰė\nȵ،ˁ೛˂ۅȰಯ\r\r\x00	\x00\n\x00˄ȯŸȰखȲрȲȥȰຝ˃sɟɊ	ȲіȰଵ\n	ȲκȰė˄\nȯǰˁ\n˄ȰȆ\nȰय़˄Ȱޛɟ	˃sɟ˃s˄Ȱৣȸ໨ʽ\x00\x00	\r\n\x00\x00\x00\r	ʮȲ୻	NɄhȯ\x00ȯŃȯߌȬɘɄhȯ\x00ȯڢ\nɄhȯ\x00ȯŃȯċ\nȬ˜\nɄhȯ\x00ȯ޼Ʉhȯ\x00ȯĖ\nഡ\rɓȯu\n\n Ȭ˜\rɓȯ\x00Я\nଡ଼ȯŃȯ­	\rȯŃȯ­	E೤ȯŃȯ­	ʾ\x00\r	\x00\n\x00\x00Ž ȯҶ	ȯCɄðȯ\x00ɰȶ࣮\n\nȯ)\nV\nДɄ»ȯ৒ɒȯǡȯঞɄhȯ\x00	ࢷʮȵइɒȯ\x00	ȯWȯ৩ʿɲȯʮȯĚȱȿɰȷජˀ\x00\x00	\r\n ɟʯȯƄ\nʯȯƄ/\nʯȯÙ\n\nȯǁȰϕȰƁ\nȯǁȹಹȴƩ	\nȯڭP		ʯȯŢȯȖ\nǣ\nʰʽʰ\x00ȲŧʮȯܺʮȯŔʰ\x00\x00	\x00\nʶȯ̃\x00ɟ\x00\x00ɟ\x00	\x00\n\r\x00ʶȯ̃\x00\x00ɟyõϗiȯஃöϗW÷\rՃ[ĉzfࢍʫȲƹ඿Ȳ઀zfົüf୴ࡓ૓zfภ़fڲø%\x00Oβ̺կ[ࠬÜβf̺zf৞ݧȯ)͖ĽXǦĶɄЪȯĝɄǌɛȰ໢ÿ	þಽɇȯØɄțăȰ~Ɉ૾	ɄвɽɽȰՌɰɛȶ)	ɄĹȪȯȯӇɬ՟	ƠȯӤ÷ÿɤ<ɻɄƗɤȻľɄફɇȸľÿɊɇSɄݜɠ7ÿQɈ=ɱ#ɸĒɉÿɄ̕ɣÿɑ#ɪüȬſȬวȬƶȬŷ̚ࡱÿɉ=Ʉچɍ<ɺ7ÿɄആù	ʛɔȯȯʰ{ʪȷ।ȷ ȶ-ȸŏȶǋȳ˟ȹʾȸનȹࠩȴµȳɑȳKȴɒȻɒȻƳȳభȶCȷǛȹƳȵdȻǊȶ෕ȸ͜ȴĖȵƳȹŧȴύȵʀȻƨȺŧȶȒȶӖȷҼȺȹǛȸÆȷ݈ȴƎȻňȳ૸ȺʨȸʨȶΘȶ.ȷʨȹžȸϡȷЇȷÆȷȳҊȷƶȺනȹÆȺύȸſȳŏȷ௱ȵƁȷӄɋҦɏɤȯӗɺɨ\ròༀȭ\x00Ȭ\x00Ȯ\x00ɡࣩɄÿɄஓɬÿ,ɬɮɤƔɄǎÿ	þ੊	ʘwȯÿȯ̾ÖAɵਖ਼ÿQɕ=ɤ#Ʉఓɓÿ	þŹɗ৐þ˵ÿ	þમɄԺɟ̚ࢧʑȭ	ɭɵȯȯʰÿɻSɏɏɄऋÿȹɨԫɫ>ɄЬɄɎʝåɅÛ	ʚʘȯʭȯɠɛðɗȯƷÿù=ɈÀɒ#ɷ7ÿɭɹɄÛɄ̙ɇȯľĆȔÿɄਸ਼ɴɄৠɄ÷ɲɤȯѝɛïɄೋɤȯͤÿɶ=ɤSɰɆ7ɝɛȺҫɛìɄ໑Ʌûɛȯ๎ɽɛȸૃɾɤȺऎɄƗɄþ	ƠȯӤXøɘɄՉʉÛ\rʁ2ʂ2ʃ2ʄ2ʅ2ʆÛÿɺ<ɍɼɛȺࣷÿ	þϳɄҨɻȯԂɄܧɄЪɻȯ֙ɶ೓ÿɆ<ɛÿɄ๪ɺÿ	þ๒ÿ	þǐɄࠝɤȯ෧ÿɞ>ɒɛɄʕÿɄܭùȫȩఆɉಂÿɄ൫ù=ɘ>ɖ7ÿɬ<ɉÿɍɘɉȯĝɫ՗ɛ ñÿɠÀɇ>Ʉࢯɣÿɒɸʡå̚ýÿ	þેÿɠ#ɄþɄ͎ɤȱ໠ɄңăȰƝÿɤɋÿɥ>ɌɄঌɄୟ	ʙ¤wȯÿȯ̾ɤɗȯˠÿɷɄþÿɹ=ɨSɍ>ɉ7úɤȯχ̚఩ɄՈɻȯʉɮɛȲິ	ɌȪȯȯѨÿɄҗɄಸɯ<ɛ7ÿɣ#ɰÿ,Ʉষɠ>ɰĒɶɍɛȰѫɄুɇาØAÿɄ९ɛȱݢɄ׍ȬĊÿȹɬ=Ʉۮɰ½ɄɎʖ¦ÿɩɄ਋Ʉੴɷ7ÿɄۏɜÀɄ਷Ʉຠÿɓ<ɴ	ʇɄðȯȶ૨ɺٜÿɺɸɄദɄۿ̚થÿɄϫɫɭăȰƸɘɛȳŷÿQɄॏɯ#ɌƔɄ̂ÿ	þħɔහÿɞ#ɳÿɚɯԫɥɊ7ɄңɤȯͬɄఞɇȰ͢ɤăȰģʠåþйɗăȰƸÿɄЅɄҀɗȯøÿɄೇɄǎɢࣔ×Aɓɤȯծù෢ĄȔɄ߻ɛȲͬÿQɪSɝ<Ʉ෭ɄɎɄҨɋɋȯȲÿ,ɹɆɇĒɄҀÿɄਇɒÄɷ#Ʉਃÿɘ>Ʉˏÿɛɝÿ	þڳÿɄ੹ɲ>ɄڱɄþ	ɴɛȰѠǫ̇ɄƥăȰģʞåɧɄ͟	ɄȞɔȯȯʰɞɇȰľɛǶÿɄҗɄ৖ɻɄۑɪ੤Ʉ౶ăȰϲɄțɤȯҁÿɊ<ɄƧʐåɪăȰ๷ɛ	êÿ	þƣɛîɄƥăȰɰɛíÿɚ<ɳ	ƟȯȯʯöɣٽɝăȰҺɄƗɋÿɜɎɄเɄ͋ɇȺѶɠȯmɄϢɤȰԯ	ɄڌȬȯȬ͒ȬଐÿɆɄນɢ#ɔ7ÿɄӦɄڪɄäɄΩÿɻ#ɬ̚ػʓåɄ̙ȯŶÿɢ<ɄȄɪăȰΈĬôɛ7ɇȯũÿQɏɍ>ə§ɠʔɟɦÛąȔÿɬ>ɺɄඬȬØÿɧɕ%ʬȬॖȬ෱ȬЇȬۥȬɿȬഹȬܜȬܾȬಳȬલȬƎȬ೙ȬžȬבȬࢸȬࠊȬఃɍȯmÿ	þ֫ÿɆ>ɺʒåɹȯ¬ɔɲɧɛȱѝɱంɖɛǫ̇ÿ,ɄඓɄॹɓĒɺɳ຾ÿɲ#ɈɄȞăȰƝÿɄʍɛÿɖ<ɉÿ	þԦʥ²ʦȬʧȬ.ʨȬKʩȬĘɇɄϟɛƖÿ,ɄԽɄঐɄޚɪɛë̚۽ÿ,ɱSɄ຃ɨ§ɏɛ܂ÿ	þ϶ÿɢ#ɄӒćȔɠɥÿ,ɸɄ̴ɰ½ɴɻɄ*ȵ\x00ȯ\x00ȶ\x00ɟ\x00Ȳ\x00Ȭ\x00ȸ\x00ȳ\x00ȹ\x00ȷ\x00ȱ\x00Ⱥ\x00ɛ\x00Ȱ\x00ɰ\x00ɻ\x00ȴ\x00č\x00Ƃ\x00Ī\x00Ɗ\x00Ȼ\x00ų\x00ɳ\x00ɧ\x00ż\x00ɔ\x00Ɖ\x00ɇ\x00ĩ\x00ű\x00û\x00ɍ\x00Ű\x00|\x00ƒ\x00Ê\x00Í\x00ź\x00ɪ\x00'\x00Ĥ\x00ɵ\x00ù\x00Ë\x00Ì\x00Ƈ\x00X\x00Ñ\x00ŏ\x00Ò\x00Ƅ\x00ŀ\x00Ś\x00ɽ\x00Ə\x00Û\x00ř\x00Ÿ\x00Ƒ\x00ɖ\x00Ŵ\x00Ɔ\x00ɱ\x00ũ\x00Õ\x00Ő\x00ƅ\x00Æ\x00\x00Ė\x00ß\x00¨\x00į\x00Ï\x00ŵ\x00Î\x00µ\x00F\x00Ŝ\x00Ū\x00²\x00Ô\x00æ\x00ƕ\x00Ħ\x00\x00Ş\x00Ž\x00\x00N\x00ɠ\x00\x00ś\x00ƀ\x00ĳ\x00\x00\x00\n\x00u\x00\x00ĉ\x00Ċ\x00Å\x00\x00\x00R\x00L\x00f\x00Ĝ\x00H\x00V\x00Ù\x00c\x00º\x00M\x00Ķ\x00p\x00Ų\x00\"\x00Ŗ\x00¦\x00Ó\x00ł\x00´\x00œ\x00Ð\x00Ý\x00ã\x00@\x00Þ\x00Ü\x00é\x00â\x00ķ\x00å\x00á\x00ç\x00ō\x00à\x00ä\x00Ú\x00è\x00ĵ\x005\x00.\x00B\x00É\x00È\x00G\x00\x00{\x00\x00½\x00±\x00\x00Ç\x00;\x00z\x00t\x00¼\x00T\x00\x00¹\x00[\x00¬\x00 \x00\x00O\x00ª\x00\x00«\x00\x00\x00\x00\x00e\x00Â\x00\x00\x00w\x00^\x00k\x00\r\x00y\x00\x00§\x00o\x00\x00g\x00i\x00n\x00Ę\x00\x00\x00³\x00W\x00­\x00%\x00¡\x00&\x00Č\x00Ē\x00(\x00\x00ĝ\x006\x00\x00\x00\x00!\x00Ä\x00J\x00¯\x00a\x00\x00A\x00/\x00s\x00¾\x00Á\x00b\x002\x00ě\x00Y\x00\x00\x00_\x00}\x00\x00Ã\x008\x00\x00\x00S\x00À\x00¢\x00\x00#\x00 \x00\x00·\x00đ\x00»\x00K\x00Q\x00U\x00\x00x\x00ċ\x00Ģ\x00ĕ\x00Ě\x00	\x00®\x00\x00\x00\x00l\x007\x00~\x00\x001\x00v\x00C\x00]\x00m\x00?\x000\x00\x00-\x00d\x00\x00¸\x00+\x00\x00$\x00<\x00¿\x003\x00\x00`\x00ę\x00¥\x00j\x00Ȫ\x00\x00,\x00P\x00°\x00\x00Ĕ\x00\x00D\x00¶\x00*\x00q\x00\x009\x00£\x00©\x00r\x004\x00>\x00)\x00E\x00I\x00\\\x00\x00:\x00h\x00Z\x00\x00\x00=\x00ɑɛȷฆÿɑɵʭ੗ȬKȬKȬKȬKȬ܉ȬଗȬදȬ Ȭ Ȭ Ȭ Ȭ Ȭ Ȭ Ȭ Ȭ Ȭ౤ȬdȬdȬdȬdȬdȬdȬ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.ȬࣥȬϝȬdȬdȬdȬdȬdȬdȬ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ.Ȭ֐ɚɉÿȹɰÄɷɄ൒Ɉɦɸþƈÿɯɰɞ§ɩÿ,ɍSɄƹɹĒɄӒÿ,ɢɕɄ৓ɄƧɄƥɤȲ)Ɇࢱÿɢ<ɓɄǌăȰదʕÛÿɄӌɄþÿ,ɄݩɆɢ§ɄįɍɄ÷ɊɛȰŷ̚௢ÿɦÄɏ#ɔĒɏþ૑ȩఙȪ৵ʜ˯ÿɍ=Ɋ#Ʉيɋÿɤ>ɄþÿɷɍÿɉÄɄ΋Ʉ߮ɘ7ɄࢤÿQɄӦɸ>ɠĒɄƧɎɤȯ˃ÿQɄಢɻɄമùÿQɄපɠɇƔɹɿɪþϻÿɸ#ɕÿ,ɊɄୖɄಇɄƧÿ	þфɢɌʟåÿ,ɓɄౌɏ½ɏɧɄÏɨɇȰ෰ɓăȰƝÿɄ̴ɚɄǌɰɻɛȰҁÿɄ¬GʫணȬࠅȬࡊȬۍȬוȬ಩Ȭ౔ȬਙȬֈȬیȬีȬ๡ě๲ȬׁȬݺȬ಺ȬޯȬܗȬٶȬೱȬ׫ȬণĊଈȬഅȬؑȬॴȬ஡ȬڵȬ੍Ȭ઄Ȭ௮Ȭ٫ȬםȬԸȬఝɩࢲ	ƞȯȯʯõÿ	þํÿɰɣɎȯƷÿɢɄĝɄদɒɤȰˠÿɠSɑSɄাɴ7ÿɄӍɄʻÿ	þ঄ÿɇ#ɓɯɇȯ͢ÿɠ<úɄțɜɠɇȰӗÿɕSɢɸ>ə7Ůȯ઒óA0/12̟̚34̖̗̘̙ #$%&'()*+,-.̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̕L\n	¢\n¦ƤȆ\rȇ./ù˳Ņ˴ŉ˵Ō˶ɡ˷ɨ˸ɬ˹ǅ˺ǈ˻ɸ˼ɻ˽ɽɿʄ˾Ɍ˿ɔʦŭŮŵŽſƁǴåëIK ˀʭΟŁĵɵȫɾBǘȔBƷåÑɋƴŪŒ@hɴĦĳʬƭjÔ~/íȣİţBǴB)BćŅǟīǺâɤ_BċúBƖBŷÀȡɶ]ƞʢȀʡB[nǻʒĭBǓŋ7bġǆ³ĴƟÙG¤ɅňB¤ǞBĀɐķȪƻýcùÝ½ÀƓǁʄɺùĲʦiÚǠĕǲȸpBBȐAľʓƯǔ¬ʃɧȠùȄùľģðĝȮuùʃɧľBƛŖǖKǇBƉùɫɘ0Õë%ǷĤºç%Ƶ·ťLB5%vàƌMB¨µÃ¥ɳÅoqģBÐBtÀɼē¾OȊBBɂǵÍǭBɸBƩBƬBsē%F1ÂBĨʔĄĞyȲǂBʍƱĶƔ°%ŕ^ģȑǉùƥƅʈȰóďù\\ģȭáʎùBģ<BȜŰ$śȏŇǝȗɀÇɲɌȼŶű¿ģɆ¸ǨĪœùHB=ȺYʂĢêıǤƑɖȥȾÏɈƲ>ǹ© ȯƤǄBEBȉɚř&%ǰʠģɜBƊȒɷÄʇQkƧBBņɽBʑȓʏBBĻŢʌBŴ\"ňeĽșʘĒľBȟîĬŨƽɊùɒǗƜùɎ+ȃ«:įʨƇʪɏ.BBɪŝ×£ƻù6ŎùʁģǪǚÚBqȴɇĈŦBɯȂɉNňB\x00mæȬBqŃÒïʇƨĉȎùƮģõÚBWłƻùƾʥƼɩéÿÚů!ɛɱ#şBŸB¡ɕËùǋģȘBì?BCĂùľBƕƄɑɄǥÁʩƞ¶÷ĎĚŧBǸ»Ƙȍăʤƃɢʕ;wŚPªûʗʖɝSǮǱʙħgÛǏŜɭøVòėȇŐɣIɃBūĔɡʅǃʋĘŉļ92ɠȦĝƎƞȎùɻBȦBĜƒǎǽʞɹɞƣ±Ťµțµ¥ƀǦɔȚƗµʐBǬ¢ĸBʣ{(Ȉ'È´ǍBŵȕǀǧXĐȧ\n8J3®ųěȵñŬɓ%ó<ŮóȤÕþưȻ¹Ŀʝʆ%ƏʧʥTǛDǅǼſǛǣlŲəȝÖȶĹʀʉƶȆšƪƸ}ƍɍÕ§-ɥɨʜuöɮƿĮ¦ØāňB ǩ4ǢňʚżBƁňBǯBŹȢBßBBʛŗBaŗBÌÓƳƺɿƠĆǒȨǑğBRƚȽBBȅB¯ŗBƋUùȷčǫʊBąBBʫēɬňBZBŘBBĖBBɰĩőƫģ*CȳȋƢùČǜʟƕÕńŌxșŏdǾǳȹɟǶ,ƂƐüǈȌB­ã`ɦ|BôđĥBĊǊɗƹɁùÉȞBǿBfù\rĺŻÞƝc%ǌŭÎŽÀäǁʄɺùĲʦŀȁŊBģęŮȖǙBCmB¼ǊōÊǡÆơBŔũrǐĠȱǕ²zèȩŠ\"ňŞźƈȿB	BƙƦÜžƆBŽ3̖ȯÎ̂\x00īɻ\x00Ȱன̀%\x00\x00	\x00\n\x00̃̖ȯX̂סFȬ௄ԀȬత̃̖ȯX્̂Ȭ฼Ȭ๚̃̖ȯX̂ķ	̃̖ȯX̂˕	MȬ¨ȬࣜȬ೸̃̖ȯX̂ķ	̃̖ȯX̂ķ\n̃̖ȯX̂˕	MȬ¨\nMȬƙȬ¨ȬڤȬֿ̃̖ȯX̂ķ	̃̖ȯX̂ķ\n̃̖ȯX̂ķ̃̖ȯX̂˕	MȬ¨\nMȬƙȬ¨MȬƙȬƙȬ¨Ȭ๧́\r̖ȯѹ̂\x00\n̂\"E!%\x00\x00	\x00\n\x00\x00\x00\r̀\r0Ȫư+ŀȬڧ̀̏ાȬ.	$ȬҊ\n̀	൤\r̅\nļ	Ȭ̿́\n\n̅ȯ\n\r/	ҩ\r̄\nļ	Ȭè\rɐ\nļ	Ȭş\rʗȯɺ\nȯຬ	Ȭ˞\r̘\n୚\r\"Ȁ\x00ȯ̤̚˺̞ʭ#Ɨ̖(ɋ\r,Ʉ࡯(\x00&\x00)!̟ݴ̖\x00$	̚ō̖\x00ȯŖ%#0˵1	0൓ʞȸƴǄ1ʔ̖'̟ऻ̖̖Ʉo̖\r̃ȯ;ȱɿ̚ē̖\x00ȱල	#ɛȲට̖1	0ൟǲ̗1	0ޙɧàȿ#Ŷ̖ȯ;̗\x00Ʉo̘হ#1	0෬1'1Ɍ ȪȯȯѨʟȺฝǞ̗ĤwȯŐɄƖ̗ʞȹ˳Ǌ̚બ#\x00Ʉo$+7ɄIɐ͌ʟȷůǩ̖>¯VȬ @Ú8LE\x009Ìʝȳॳƻ'ȯ%	1ĺ̖\x00ȯҸ1Ϻ#ȯʻ1	0϶1%+1	0ʅ\r1̗#ƕ̗\x00̘ɄIvɐϟɄI¯ɐͅ8ɿ̘ȋ̘1ɢ=ɝ=ɤ>ɮ7ʟȰŴǥ-ȭ̖>¯VȬK@Ú8LE\x003\x009ÌȽ#ĝ1%Sଢ଼ʎ$ȯؕ1	0ঢ়&kȬव0܃	1̖Hʕȯ)$H\"̙ʟȹӫǖ('Ø1ɝ>ɺ̌̍̎Ʌ*˳НɋĿAʞȴȇǉ8ɛȰࡾ̖\x00̗\x00̘ȳ#ũ1	0ೂĬ#ŀ̘*ŝ)T\x00ȯ~¢#แ̖$Ʉðȯ#౵$ȯ೷$ȷȯĕȬໄ%_$#ȯˠ#̗ʑƛɅ* 1'á%ŀ$	̖ȯ;#\x00$8ʕ	̖ȯ;ȰȦ#$Ɨ#Ʌ*˶̃̄̅ʞȰ¾ǃɅ*˼̃ȯ;ȯƑ%+Â%=1#$Ʌ*1̖ĤA̃̖Ȱ୷1	0ࣃ8ʉ̖s1ɢɻɖ½ɧʎȯ̃1# ȬĊ¢$ȯ̚঎ĩ#Щȱňū#C%ຳ&$ȯ#Ϭ̖Ȱъ̗ʠȰǧȃ#ŲȬɠʟȸܹǗ	1ĺ̖\x00ȯ܄̘\"Ʉ̔ȯ­űȬɰ1Qɉ=ɉ#ɧ½Ɉ1ɛȲӜɅ*˿ȴ#Ȳ̖̘Ʉo̙u%Ⱥ#ಐ̇1QɩÀɄ๗ɄШɍ1#1	0൸1	0ൣ̖>¯VȬĖ@Ú8LE\x003\x009Ì#Ʉ?ȯ̖ȯބ(̚Ό#ɛȯɡ1ǳ̖1%#ʕȯ)Ʌ*˴1%#%౽	#ɻȯÙȯҸ1%ڬɄIɐȲʠȰůư0͙ȼ#ϼʝȲφƯ,ȵ¬ʟȳࢰǠ0౨1	0಼ý̖Ő̖ʞȲφǇ\r1Ʉ?ȯ̚ē̃\x00Ȱ࣐1ɻÀɄ೒ɶ<ɍ70ʑɅ*\r8ɛȰĚȰࢶɳwȯટȬǸ1	0ħ1ɛȯౙʟȸʒǪ1Qɧ=ɄƹɄԇɄʂɅ*#ĥA1Ʉૠɝ1	0಻1	0ф8̖ʞȰǧǁ1ɫɴɤ<Ʉʗ%8ȬຸତȾ#ʻʡȰůȉ$̟໫̖1	0ಉɄI_ɐബ#Ȭ.$ɻȯÙȯȢ%$ȯƅȱ~1̖҉ฺ̚ɄɅ$Ƌ#̗Ʉo̗z$̀A1	0ٲ)&á̂#̖ȯW̅2&2'Û1	0୮Ʌ*˷	̈̉̊̋%Ɨ̖ěʠȰ¾ȁ1	0್1ɉÀɈੰɰɄΥ1#ȯƺʗహʖ{%#$s1	0එɄI¨ɐ߼)̚Ý$\"ɇȯx#&Ƿ	$Ʉʟ%ї%'ŀ%\r̃ȯ;ȯ̇̚ē̖\x00ȯป$ƌ'Ʌ*1#SȬӅǺ#+1Ʉ˱ĺ̖\x00ȱىĺ̖\x00ȰΩ1	0ǐ\rɛȱЍ̖e#\x00$\x00&1	0ั&$ȯશ ̃ʆ1Ʌ>Ʉσ1ɩɅ	̖Ʉ[ȯ$ϥ1	0֬ɄI¬ɐƷɛȰ˹ģ1ɢ=ɊɄƹɰ71̘#ŲȬģ	Īɻ\x00ȰŎ0خʞȰůǆ0໓ê$$ȭò$ঔ#*ȭǑ$\x00$ෞ̖̖Ȱѳ1QɄ൅Ɉɝ§ɖȻ#Ʒ1	0ЮʟȺ௾Ǳ	#ǂ̖\x00ȯ࣭#ɍȯɛ\x00̖1̖ȯĝ8̙Ʌ*\r%ŀ$ವ$	ɟňޟ\r̖̘̚ԃ̖\x00$\x00̙1Ȁ̖\x00̗Y̘עɳwȯд$̖J#	ɻȯŢȯŰ̃1ɍ<ɺʠȲ˳Ȃ&Ƌ̘#Û8̗	1%SȬ	%ɓȯ%ě̙ĤwȯŐȯ¨̙ʞȸۈǄ1Ʉਅ%1ɛȰȗɀ#øǮ̖\x00̗୕ǲ̗	1̖̖ȯ෠	̖ȯ;̗\x00ȱ׵1	0ֶɅ*ɄߠȬ΁ʡȰ¾Ȇ	̖ȯ;̘\x00̙1	0։%\"ɇȯx#&ࢂɅ*1	0Ź̖ȯĀ#Ʌ*˸ʟȴഄǨ̙$̙	̃ɻȯÙȯΈ	̖ȯÎɄo̙̗Ʉo̗	ȪȯȯึɌ1#ѥ#SDȬʎɅ*1Ɉ>ɴ	̖)¯EÌʝȰůƮ#ࣤȬȬ.ȬKȬňȬȬ۱\r̖ɒȯ̖ǡ̖ȯ૎1	0ඞ1ɶ>Ʉˏ#Ʉo#̘\"ȯÊ0й&\"Ȭ1ʎ̚Į̃߭ʡȰǧȇ̘\"ȯã$á1#ɐ#á	1ĺ̖\x00ȯҺ̖>¯VȬ-@Ú8LE\x009\rÌɅ*¢ʋɛȯڀʌɛȱ૝$_ʓ̖ਉ0ਫ਼	%\"Əள(#̗Ø0Ҡ1	0ખʝȰŴǀ$ʟȴԉǘʞȸಾǄ0ƈ'HɄʟ%їTʡȰŴȈȶ#ʕɅ*˾̖̚Ӭ̖1ɫɄϣɫ#ɧ7ɄǼ'\"#ǯ̖\x00̗ʞȵ௷ǌ1,Ɇ=ɫ#ɄഥɄƉ̏̐̑ɂ#mʞȸ๴Ǆ%kȬ͏ȷ#Ɖ1̘$#঵	̖ŝ̖\x00ȯǸ1	0ಅɄ࠹EAʟȴ෨ǚ0ఇ̖Ȳ˧̗à¢ʋȱӳȱȸʋȲ;ȱபʋȲฉȯด%ʋɟZ1	0঳	̖ȯ;̗\x00̘0ث1ɘSɊ>ɰ§ɤ#࢈1	0̓1# ȯþ̘\"Ʉάȯ­űȬɰ\x00#̂۴VȬd#ϔ	̟ë̃\x00Ʉʀ,8#1ʋɄǭȬ૭ʟȶʒǕ	%ļ#N/¢$ȯ̶̘$ƭɓȯ#+\x00$ȯ੿%Ɨ̖ě%+#+%S#SƯ&_	1ř̙\x00ȯˎ0ߡɅ*1	0੦Ȳ#į1ʏ\r#ɄðȯɻȯȿȯǸ	$ȯ#-ȯ~1Ɇɧ=ɺ#ɫ78Ʉໝ#̖>¯VȬň@Ú8LE	\x003\n\x009Ì#Ɠ̘Ʌ*˵+ĤwȯŐ)%Ʌ*1	0ଷ	$̖ȱ଱̗s̚ഗ	#̖ȯ9̗1Ɇ>ɰ1̖̗sɃ#͌ɛʗ̗ȯÿȱڕ	1$ %+8Į̖àν$$Ȭ໩%$ȬࡑȬǿ1ɄĞȬӻ'Ûȱ#Ï#Ʉ૒\r̂Ʉ?ȯ̚ē̖\x00Ȱѣ̘̚ԃ̖\x00$\x00̘ɄǭȬɄও0ࣞ1	0ࡰ1	0ఐʟȺʒǙ&kȬ͞#̖̗sʝȷÎƸ1,ɉÄɄǩɧƔɰ1̖	Ƙɻȯϑ\"	1Ĭ̖\x00ɦ1$1	0՜\r1ɛȻ֒ɟ#ȯ໯ɛ\r1Ʉ˱#ȱ̼#ȰՊ1ɻ<Ʉσ&kȬ࣠'0Ȫ$#ভ̖¿ȯ۾̖१ȯŻȶࢅȬĊʟȻ̳ǦɅ*\r1	0ջ$ȯ̖~Ǵ̗̓8$Ȱτ1%SȬӅǺ%+1ƴ̖YȀ̖\x00̘Y̙#$̖ȯ̖ȯǆȬÊ3ê%#%F̖%V&,ɄఠɠȾȬਜ਼$Â#̟Ϛ%̟Ϛ&'ʕ%sʕ%ʕ&sʕ&'Z	&ŝ%\x00ȯ~1#ȯʕ̃ȯ;ȯƑĤwȯ֊%=ʟȶȆǧʞȸ¾Ǆ$̗á&Ƌ̙#ŝ̖-ȯċ$2%̚Ό1̙൧8ɄϤȱห('ȯеɅ*	ʔ̖1Ʉஆɻ\r#ȯƘ$̖ȯ9#1ǳ̗1	0ૣ1	0ƣ̘ĤAʝȲѦƽ	ɛȰఀȯ̖݇1#\"҉1	0ఘ0഻$ȯȯǸ#̚Ý̖>¯VȬ@Ú8LE\x003\x009Ì1Ʉʤɤ	ν̖̗S̖୔̗71	0ਏ̘̚Ĵ̘1QɄഞȹ#¬	̚ȋ̖\x00̘\x00̙à	1#SȬĘ\r̃ȯ;ȰА̚ē̖\x00Ȱѣ1	0౧ʞȲ˹ǈ1	0যȰ#á1Ʉ٭$ʟȷӳǟȭĈ̖	1ř%\x00ɄƸʀ̚ÝʝȰǧƺ1̗ȯĝ1Ʉ»ȯ̙˗ȯ¬+ê$̖Ȱѳ$>ǵ̗$$Ȱ๞$ȯϓ$ȯ͡ǲ̗³%_ǯ$\x00̗#$Z̙ĤwȯŐɄƖ̙'ȯϐ1ɻ=ɢÄɄຍɄʗ	1į&y8#ȯԓ̚ඏ8Ʉ[ȯ'ϥ	̟ë̃\x00*-*~1ɰ<ɄȄ1%ʟȸ̝ǫ1̖ȯƺ1	0ଭ8ɛȯȏ̖\x00̗\x00̘$Ʉ̖ȯ9ȯؼɄI}ɐũ%̗ÏɅ*+̚ইʝȲ˹ƿʝȲ˳ƾʟȸҧǔ1	0ߙ1	0ओ1	0ʋǯɛ\x00̗ȬĈ̖ħA%ƌ$	)Ʉʟ%\x00&à\r1$ƍȱ]$ƍȯกȯ¬	̃ȯǁȰϕȰŶ̖ȯĀ̗#0न1	0඗1#DȬm+)%ʞȵРǄ$%ê%%$%V'%Ʉ[ȯ!೶1	0̗1	0र1,$ȯ¾ȵছ#Âȳ%Ó$H̙$̖ȯ)̚నɄɅɧěɅ*˽ɦȯɊ̖\x00̗7	$̖ȯ9ȯ׌Ʌ*1Ɋ>ɬʟȸхǢɿ̚̖ȯÎ̗ʟȵ̝Ǥ'Ƌ$Ʌ*1ɈÄɶSɰ#ɶ7#ʞȰŴǋ0ݬ&Ʉo%z1	0࢓	1̖ɟ#̖৺#঑1	0ە	$Ȱ˟%Ȱʂ1	0࡜1Ŝ̗\x00ȯތ#SȬmࢬVȬd@ȬΜȬK8L9ϔʟȳ¾ǡɅ*ɄIqɐø1̘#Ś̘\x00ȴ࠴1$<$S#$SHȬĘ̘$ØʟȹԪǜɅ*\n	1Ȗ̖ȯ࣏	̃ȯ;ȯ+1ɺ>ɄȄ$ȯ#Ó1	0ળɛƚê##Ȭò#VȬ#ԶȬ#֝ʝȰ¾ƹ	ɻȲͧ̚ł̖7	ɻȯŢȯȖ̃	8ɛȯȏ̖\x00̗̘Ʉo̘ō'&!A1Ʉ࡞ɧʟȵȺǰ	ɛȰ໽ȯʯ$̖1ʢ̖̖Ʉ̖	8Ʉઔȯɛ\x00̖Ɂ#ʂ	1ɄɄÉȬÊʞȲѓǅ	8̖ȯ;̗\x00̘&ʝȲŔƿ1QɄಶɄǩɩ§ɮ$Ʉ#̚ൢ$ģ\r8#+ ɟ	#+̗̃ȯ̋%Ɨ̖${1	0׉	1$#ȯ)#ȯÎ̖	$ŝ̘\x00ȯࠄ1Ʉങɺɉ½ɶ%H(ʟȴɯǱê%%ȬÊ%ă#V̖#Ǘ̗%ų1	0๘ʟȸ۪Ǣ1ɋP4(P\r̃ȯ;Ȱž̚ē̖\x00ȰޝɄୡ1	0ڎʞȲѦǅॲ	1QɄɄÉȬǿ\r1ɛȰ໳ɄɄÉȬǿ̂̖ȯԓ̟ý1	0ં̘ȯÎ̗ɛȱЍ̖e#\x00$1	0ຘʞȲŔǈ٬&&ȬĘ&+#\"ʇɇ$eɇ%׳ʇȯޜʒ#೟1#੃̖Ȼඹɻ୘ǵ̗ȯ#Ø1	0؜1&ȯƺ̚͹̖̕Ҧ1ɄःɈ1ɍ=ɉ#Ɋ½ɤ\rɛȯϓɛȯ͡ǲ̗-1%#̖MŜݝ̚ē̖\x00Ȱٮȳ฀%=%Sѿ%S Ȭǘ%S Ȭ֋̂ȱ΋ɄƢȬࢺ'ȯɄ[ȯ&ກ̖Ʉo̖ʞȴ˽ǄɄժ̚൦0ɚʟȴ۰ǰ8̘1	0۟8Ʉo̘Ʌ*˻1ɅɄʤɶ§ɝʟȸɯǣ	̘Ʉo̘u%ɡɐɅ*Ʌ*1	0ಞ[Ūř)\x00+ԩř)\x00,)ɒȯ)\x00+ȯˌ)ŝ)\x00ȱඛ*)Ø)ŭ)C(෷ɄƢȬࡅ'ȯஉ'ȯϐ'ȯ%t-ઉɪ*¿ĩ)%&ƌȯ­)๯%ె.ɄǭȬ୒-ીʠȰŴȄ	%S#S1-	̙ɓȯ̙ě1ɩ>Ɇ¢$ȯ̱ƭɓȯ%+\x00ȯؐȯమ&҇#Ŕ#Ʌ*1'ȯΊ#ȯá\r̂̃̄̅̆̇1Ʉࡲɰ	1̚ª#DȬ୛̄̚ɜ$ȵ#ӻ̚Ё$Ó\r#Ʉhȯ̖\x00Ʉάȯ~	#̖ȯ9̘	8̖ȯҾ̖Ȳľ1	0࣎	1į&H	̚ȋ̖\x00̗\x00̘à	#̚ଃ̚บ̖78̂ȮĈ$ϲʝȲѓƼʟȷɯǛ	$H̙ȯഛ1	0ற	%+#+%kȬҐɄ౏#į'1,̃ȯೀȺǻ̃ȯؔ%=ÄɄ౱ɄǯȬؒƑ%PǄƑĦه%\"ɄĊ1	0๋1ɻSɶ=ɝ>ɍ7ʟȴटǝê%#$%ă#V̖#Ǘ̗%ų̚૏̖Ȳ˧̗à1ɄƢȬm1,ɄǯȬĤɄԹ̃ȯݼȶڇ\r̖)¯E\x003Ì̚ೲ(ɛŎʞȹÎǌ0ຜ1ʓ̖sɅ*Ʌ*˺Ʌ*˹1$ȯƺɅ*8ȬØ#ŲȬƸ0ޭ1ɝ<ɺ1&#̗ȯǢȬʎ̘\"ȯ¬8ƐƔ$\n#ȯৰ̖ɒȯ̖u#1#ׄɄIcɐદɅ*0ʄ%kȬƉ	໊̟̃\x00Ĥwȯி̒	1&#ȯ)̔#ʉ̖sȸ#ͅ̡̟ !̞̛̜̝	W\ny4\r=±ȇˇǓǈ[ŰçĠ%¹`á`ǭŷñǧŌ±`Ĺ{ǞǠȂŭ\"ŉņ<\x00cǞMǁĤǞĥƕśǞƞĮ``ĬǜĨ9ƝęǞƷöũǞÞÜłƐ¾`ŹƩĖÜǬ`ŏ`ėƖĜǉǩǞİƔĺġƁŬŖƌƊ`ǐaÎƴƺƼĪ¯YǨÐ¶IǞÙƔWuƺ`Ȁ|ȁţǢƸĳƃǶÊǞƦN	ƈoıÈ³\rƒűƃń`Ŕ®ŬƩěƠ`ǱFżǍƀ¸`úéǼ`×ŀǥƱŵČ@ĄõǝşǺǥǧÑ¼ĎǞŃZĽÓōƇŝǑÜǑǹåŭ)>ÖĀŞĊƹǺ v¢ƮTŅǽƛXƯPĸ`ǌŋƂÝŶ`^`ǡ·ûƚ(ObǵǪļ`ēĞďĒ§,ŒëƢ;ƩM²ĢǞĥ²½¨ÄƩćfùǇƫƪĚŧȅǞƵyǲǞÌ6-ŬȃƜǣUòøKŬ}œƉĴƟǢä\nđưǿeƓƆǤ©`¬ħ`¬ğ`ŠĘǙ0ƣÿ»Õ`Ǐ`ǯƅŤiūŲȆǞƞƑǞ*Ćïšǀ``ǷSƩÛCĭ`ĦǞŇ¤`ŊÇ`z``£_ðřk5Ǌmó&ćĮ`r`Ʋ`Ś¿ŬǫĶǴÍ`:èĔã``£ƧřǦjťÁdīìËťÅƩĥH8BqnA?ªĻ¬ĩ'`¬ǎ`žƩǅſÏ`íŦ´þüĺƿ`ǒǖƻD`ÀŜƘ¡É¥ǃƩťŮRô`Ǹ``lǚ`Ŀº ǕâŘőơ~Īµý`ǂæ```£ƧřǳĚhľÖ.ƇňǑų°ƨǗ7Ò]îŸêÚLØǞĂƾ`ź`!/ƥǾƤÔŻÃƇ&ǔtĮ``ŴƋ`ŢƇĝÂÆƽ`ǄƇ1ŕǋ`Ĳ«Ǯ=ǻ`ǰƇƭE#į`¬Ĉ`ŪƄƏVƩǆǧǛ2ǘ`ċ`ā`¦`gƬŨ`£ƧřƗMŽǿ4Jķ­Ǟů3ĐǞpƱƍǞ$čǞGȄƳǞĵÜ£Ǝ`ă÷ĕàƙßǞťÃŁƶĉŗQsǞģƔ+ǟxą`\\w`ŐŎ`\x00ȇ	ர	ħƂ̞\x00̘ɫ=Ɇ=ɢ>Ɇ7,ɖɄǻɫ§ɄƉ̘kĒA	̞ȯ)Ȱτ̃̂	ܰž̞\x00̕ގȬ࣍̕̡ćęÓ	ȯ๤̈̚Ý\rTȯÿȯ࢜$ĒA̇4ɟ̈4ɟ̉4ɟž̞\x00̔̂̚Ý!ȯщɄ?ȯȯɱȰԮ̟֛\x00̞Y̚ªʐȱ˒Ȭʌ͙Ƃ̞\x00Ʉࢨ\rȬĤTȯܴ̂;	Īɻ\x00ȱ֩˼zɄޕɍÀɄ๸ɴ7ųȬ਴ಣȲɵȱൿɃȱ݄Ȭ	ۭ̚౼ȯщ̚ªʐȱ˒Ȭʌ̎\"эɅ*kȬÏ̏̚Ý	Īɻ\x00Ȳɗ˶z	ع̘kĝAȯ५ž̞\x00̆ĹA Ⱥॷ Ȱࣝȷҫ̞Ő̞ĵ̉̈̞ȲӇ\r,ȺॢȰ֟ȬॸȸַȸٹȶࢠƁ̞\x00ƅ̞\x00̖Ȱ˥TȴχƁ̞\x00̆	Īɻ\x00ȰǮ˷z̄	̂ȯȬmɄѾɺSɝ>ɘ7	̋ɪ̊̉	̟Ԋʐȯͷ	߰	̟Ԋʐȯͷ4ɟQɄîȬ୆Ʉࠌ̞ȯȖ̌̜ȯÊȬmƁ̞\x00̂ȬÏ	̞ȯҹ	ɻȯƅȰࠐkȬ˯	Īɻ\x00Ȳǋ˸z$ĝA	ϳƁ̞\x00̇ࠋ̛	̂JŻ̞ԔЩ੓౲УΝȬߏ[ȯΊŻ̞TȯеૌɅ*	Ʉ࡚{ƖA0ɳwȯдĬ,Ɋɉ<ɴƔɻ	Īɻ\x00Ȳʀ˹zŃ\x00\x00	پž̞\x00̒ீQɄîȬ୏ɰɄˏ	฻	ࠫ̂ɟδɛȰĚȯĂĴѲȬȤ̛0ʊAQɊSɴ>ɬ½Ʉį̟౷	̝##ȲСȬ	౗ɛčӚȰөȯŻē࢙ȬɘɛčӚȰөȯŻȰڻȬĊȰ¬\rƀ̞\x00̟ϒȬನȬת̈7\r8ਓȪȬଋ׃ȯۊį	ଶ̚๾	รƂ̞\x00̗̟ਚ̞M=ȯȬӈȯȬģ	ࡦ\rɏȯ\x00	׽̞ȹӱ	̞Ȼқsɺ<Ɋ	Q̄#̂#̃̇̞ȲѫȰ˥ȯ)\rƀ̞\x00̟ϒȬઢȬſ̉7ܝ̞ȯɼȯ໹<ɛȯɡ	ڒȬʎ̞ȯҾ̞ȲľkȬÊ	இƃ̞\x00Ʉن¢̟ܬ̞³̞_̂	ਾ̟੒ɧ>Ɉ	ɻȯÙȰɅȰũ̃4઱̄4ُ̅4̯	̂ȯȬÏ	मɅ*\n8޻̌̚ÝɴÄɶ=ɧɶ7	๖	ৡ\r8ɄाJ̞ѰȬ஦J̞7ž̞\x00̇	̂®Ÿ̞	୰	̂<Ÿ̞Ɔ̞\x00̃ż̞\x00̅੖ĵ̔ž̞\x00̅	̗ž̞\x00̑ɰ=Ʉગɺ§ɘɝÀɄહɊ§ɬ̂{	ȯȵͣƗ̞ߚ	ř\x00ȴԋɟ̛\x00sƇ̞\x00̂̜൜Ʉʤɻ඀ȷȯţϨȯ)	రêVʉźt̡ý	̂·Ŷ̞̛ɛȰȗ	̟ë̞\x00ȲƩ~̃ɧà̞ȯҹɰȷട̛ȭɶɘSɝ>ɶ7̄Νż̞\x00	̃ȯȬm̂4ɟ#̆4ɟ̅̯Ʉ೗̂ȱ۩ȱ෯ȱ୼Ɓ̞\x00̞ȲΎ̋̘kȬQɄîȬշ	൰̏࢘	̟ë̞\x00ęÓ̡ć\x00Ȱ˥TȰक	ୂŷɛȰ˽ȯŷɉ=ɘɄШɶ\rȯ9Ȱ͐ȱũ8­įɄǻɶ̂̚ࢁƈ̚৻̞ȯ̋	˨ȬÊ	ඒ8ȶڊ೜̟౬Tȯ)ঙ¢̡൙_Ʌ*̟ฎ̂ƉȲϋƛ	ோƁ̞\x00ɇȯŕ̌7ȌȲ๬ȯȸϻɄǯȬ୦Ʉ͈ĝ˭̞ȯ)̡ć\x00	8ȯȬşਡ	਄̞	ЮҠ̘kȬÏɰȹൽ	̃ȯȬÏ̄ƉȱࠕɄǩɧá8	̟ë̞\x00-~	ڰĵ̓	ȰŸȯŰ̘ಗȬΜȬԏȯŷ̖ȯÎ̂ż̞\x00ɄˎƇ̞\x00̃̃{	ɛȯĚȰӜ̡ćಪÓĵ̒	̓	ȯȺిʎž̞\x00̃	ȯȳ÷TɛȲϘTȬģž̞\x00̄̂Ȃ̔Ȃ̒Ȃ̓ƫ̂<̃̞ȯ)ɟɯ̞ȳܸȳ்ɯ̞ȳࣁȶ౑ɄѾɖ=ɉɄࠚ	শ̞ÄƂ̞\x00Ʉɠ	SFȬĘ̟ൠ̟ఒ̃֖	৉̄{Ʌ*\rɄǼȯ¨ʄȯͣɄѽkȬm̂̃̅{	Īɻ\x00ȰŎ˴z̆{{ż̞\x00̊	Īɻ\x00ȱƨ˳z	Ī̛\x00ȵK\n̞	̍ɪ̎̃ɄǼɖȯ˃	̃ȯ;Ȱž̝ɛčρ	૲	਍ȬĘ	ƍȯÿȯߦ	٣ŵ̞	̛̞ȯ9ȯɾ	ד	Īɻ\x00Ȱɑ˽zQɮSɈ#ɄЬɺȯܚŸ̞	ۧ	ɛȯĚȰΎ\rɛȯ֡ȯȯѠȯ̞ʎȯ̞8̛$Ȭm	١Ɔ̞\x00̂ȵɡȯतɄ?ȯȯɱȯø	̃ĻŒ̞7ɛȱੑ̡ćȲƩ~\rɄ?ȯ¿ȯøʕ̞๙̞ʔɟʕ̞sɤÀɉ=Ʉ௺Ɋ7ɬ=Ɉɘ<Ʉ࡟¦	̞ȯ9ȯɾ̉̞Ȳ͝\r¢ɵȳޥɻ\x00ȵ݉յ_	׭ż̞\x00ɗȱѶɄîȬ͏Ƙ\x00\rzʐȰ଩̚ªʐȱ˒Ȭʌ	਽̟ë̞\x00ȯࢊ~̈ƫ̘kČA̞ȶ͍̞ȵͤ	0Ȫȯˌ	ŝ-ȯ~ϰ	ણƃ̞\x00̙+௸ɄîĒడɄ͈Ĝະɛȸִɟ̂ɛȯęȳӕ˾௠ɛȴ෴ɟ̆ɛȯęȴ҆˿୍_\r,ɄÉȬಎ̞ȯɼȰ~ɰɄϣɤ#ɄΥ̘kȬmʐȰ೚Ƈ̞\x00̆¦Ʌ*ɘɄƉƅ̞\x00ࡉɛčρ\rɄ?ȯȯɱȰѽ̟ݙ	ඝĘAɟ̞Ȳயɟ̞ȱ˃̞	ड़,ɝɖ<ɻ§ɖɅɉ̏ƫ	̑ɪ̐̆ʉ0Ȫ̚łȬԏɛȱŢȱȇɄΰȱฃ	श	ु	ŝ\x00ȯǿž̞\x00̋	ƣ	ȯ9ȴֽȬm	Īɛ\x00ȴȒľŪȲנ̡֘ȲേĔવĔ࡝ȰƄ	৮_ɋĿA	ȯȵ̂8Ȳܓ̞¾ƛɄ¬	೦ž̞\x00̓˵ƅ̞\x00Ʉڔ	ା̊,Ʉ͵ɄןɄ์ɰųȬƝ	ݲ$ȬਮɄǻɅɬ<Ʉǎ	Ɔ̞\x00Ʉȅ̚گ஄+	੫Ƈ̞\x00̄ɶ<ɮŴɄȅ	̞Ȳ݂ȸચ̞ȯ)	ʅ	ƀ̞\x00ųȬਧɉ<Ʉǎؘ̟̚ª̌$Ȭź̞ɬSɰɉ<Ʉʗɚ/Ūɛȱোɛȱёȱ৫ɛȱёȱૹtɛč෽ȱߑȱ͆ȱࡔȱ͆ȱ߃ȰƄ˫_	ȯȳ͞\rɛȱˤTǷ̘ϰ	ɛȯĚȰԂ̞ÄA	ȯ)̡ćٵ~НȯȺȰŶTTࢌȬ୊TƐȬਤĵ̂8Ȱʉప	ƈ̞\x00\x00̘Ƅ̞\x00ȯͿȬ่̜̆̆ȯȬÊ̇4̞Ȳ઴̈4̞Ȳ௛̉4̞Ȳ͝̐ȕ̚ª̏ࠗȱ෺Ȭ	࣯Ʌ*̚łȬ๭ɛȰĚȯĂ̄Я̅	J̃ਢȬȤĵ̆ɄΰȱȇƜ	໡̇{	๼ȯ¬	ാ	̡ć\x00\x00ȯŔɅ*ƀ̞\x00̟౻ȬԷ̇7	̂!Ź̞Ȱຢ	ǐ̕ɪɞɄж̞ȹ෇\x00Ȭ๱Ʉж̞ȴෘ\x00Ȭಧ̊ȕ̚ª̈	̛ȯǰȲǛ\r,ȹೃȹবȬ	Īɻ\x00ȱș˵z̟ë̞\x00ȯ਩Ó	Źɺ>ɮɄoɛȰȗ	ઑž̞\x00̍\r̟ë̞\x00ȯӷȰৗ̄̄ȯȬ͟ӯ{ɟ	Īɻ\x00ȰÆ˻z	ग़	ɟ̞Ȳૉ̞ȱ߂ɮɺÀɄӰɤ7	ݡ	ɓȯě̌ƫ̛˯̖ż̞\x00Ʉ΁	ඁ	Īɻ\x00ȱ్˺z	̞ȯ9Ȱඔ	̛ɻȯƄȹທ¢̡੏_{	QɄǯȬĤɄˎ̈̃ƉȲࠔ	̂©Ż̞	Ţ̞\x00	ീ	¢̟आ̞³҇	ࡈ	̞ȯ;ȯ	ହʑ̗4ɟ,ɄîȬ஠̘$Ȭধ̘$Ȭؠ̡̢	̠		\n\r$·v'rSu	}8\\FbcHl9No& \\(RnY~+[dG|>J\\O\\jq\\pZ\\z5g\\,V]6s^/|\x00UA|;<WC\\\"mt%|m=EX\x00{IKywDa#iP\\L`G\\@?)4kT|!-|\rQh|2|._7B\\$f3Me|x:1\n|*_0\x008Ʌ*8ɛȺ߯ɛȸଟɛȷयɲȯ\x00ɰȱǏȯ́ʄ	ȯȬmз̄̛࠱̆̋ȴʉ	ɻȯęĠ	,̠Ğ˸ɻ̛ȹҧɄ¬	ƊȬ೹\x00ɘ<ɫɱ	8̛\x00\x00	ɻȯęėűĊ˭̢୙	Ԧ\rȯĀɰȲřȯ૽ȰŘ\n	࠽Ʌ*	̡ЁĬ̟ন̛Ȳି̛Ȳ܇Ʌ*	ɻȯęĎ\rɄhȯ\x00Ȼ෍ȬĊ	۶ŪŬ\x00̚ࢄȯȬ˘ଜ_\rɄhȯ\x00ȸೄȬĊ0ɰȹϋɅ*\nɢ=Ʉఊɰ½Ɋ	৆̚Į̞\x00ȯɾ̇ӯɚ	ɻȯęġ#ȯȬØ	̞ȯ;ȯ̛	̛\"ȯ­ʑ	ॆ,Ʉ׷ɄٙɆɰ	ƣ	ூ̄	̛ȶȥ\x00	\rɲȯ\x00ɰउȯ௖̌ɍ<ɄȄ̃̡әȲ઼\x00̃Ʉoz̡ӝ̡ӝȲ๹ɛȺӱ	ɻ̠ʁɟ\r#ȵʳȴ̶	̌ɪȲษ	ɽȰ̆ď˭ɍ>ɮ	ȯȬÏ	ߔɪő\nȬÓɱ̡ԅ	ɛȱˤэඖɅ*\r̠¡ɻ̊ɪȳܶȬȤ	̂ӆ̝ȲС	ࣴ	ݠ	ǐ̛ȯ)	̛ȰƓȲǛ	ħ	ࡽƈ8̠ȰŶ̛0̛ȶঠ\r̛ȰƓȱŏ̇ȯϿɄ˱ȰɵȲɵȱಏɄǩɮȷҐ	,̠Đ˸ɻ	ɪ\x00ȬÓз	ࠤ	ʋ̟ۤɧ\n\x00Ȭԋ̛ƛ̞Ʌ*ɧ>ɢ̂̡әȲƶ\x00̂̢ýɅ*	൩\rɲȯ\x00ɰۃȯ૿,Ɋ=Ʉϫɴ½ɢ̛\"̜আ	ŹK¢·ȯ)VsȷอߟȯȬ֣Ű#6@؅<Y̄ƊŮȱƎ˫_̆	̛ȯǰȱ\r	̛ȯǰȱ	ʅ	,̠ğ˸ɻ೫ɲȯ\x00ɰȱǏȯ́\r̢̣\n	&\r\x00	\n\x00Ʌ*	̃̚Ý̜{	̡ϛȱқȱˌĬ\nɻ̠sȱ)̇{QɄಙɄ͵ɄԇɅ̣ý	ʋ̄\"̚ª̃	ħɅ*Ư̄Ȳࠞ\nɄðȯ̛ȲǓȺ౳\nȳъ	˫_̅\n̅̇̡౅	Źƈ̡ԅ̜Ȭࣘ̃̂̇ɛȱˤ̇໚̇\r̛ȰƓȱŏ̇ȯϿ̅\n̛Ⱥ׸\x00\x00Ʌ*	\n̣\x00\r\x00\x00\x00\x00\nɄhȯ\x00ȸื̡ϛĬ\n		ħ";}else if(_$_u===82){ !_$jt?_$$x+=6:0;}else{_$jZ[_$fT]="_$"+_$_a[_$$4]+_$_a[_$dW];}}else if(_$_u<88){if(_$_u===84){_$kp+=_$kB;}else if(_$_u===85){ !_$jt?_$$x+=4:0;}else if(_$_u===86){_$jt=_$eG>0;}else{_$_a="_$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');}}else if(_$_u<92){if(_$_u===88){_$_i.push('}}}}}}}}}}'.substr(_$eG-1));}else if(_$_u===89){_$dW=_$$o();}else if(_$_u===90){_$$4[6]="";}else{_$kp=0;}}else{if(_$_u===92){_$$x+=-6;}else if(_$_u===93){_$kB=_$$o()*55295+_$$o();}else if(_$_u===94){_$$8=0;}else{return _$jZ;}}}else{ !_$jt?_$$x+=48:0;}}}else ;}function _$a_(_$_i,_$kB,_$$8){function _$$k(_$_a,_$jZ){var _$$4,_$dW;_$$4=_$_a[0],_$dW=_$_a[1],_$jZ.push("function ",_$$i[_$$4],"(){var ",_$$i[_$em],"=[",_$dW,"];Array.prototype.push.apply(",_$$i[_$em],",arguments);return ",_$$i[_$aI],".apply(this,",_$$i[_$em],");}");}function _$eJ(_$_a,_$jZ){var _$$4,_$dW,_$fT;_$$4=_$j0[_$_a],_$dW=_$$4.length,_$dW-=_$dW%2;for(_$fT=0;_$fT<_$dW;_$fT+=2)_$jZ.push(_$eu[_$$4[_$fT]],_$$i[_$$4[_$fT+1]]);_$$4.length!=_$dW?_$jZ.push(_$eu[_$$4[_$dW]]):0;}function _$_4(_$_a,_$jZ,_$$4){var _$dW,_$fT,_$gF,_$eG;_$gF=_$jZ-_$_a;if(_$gF==0)return;else if(_$gF==1)_$eJ(_$_a,_$$4);else if(_$gF<=4){_$eG="if(",_$jZ-- ;for(;_$_a<_$jZ;_$_a++ )_$$4.push(_$eG,_$$i[_$fJ],"===",_$_a,"){"),_$eJ(_$_a,_$$4),_$eG="}else if(";_$$4.push("}else{"),_$eJ(_$_a,_$$4),_$$4.push("}");}else{_$fT=0;for(_$dW=1;_$dW<7;_$dW++ )if(_$gF<=_$$C[_$dW]){_$fT=_$$C[_$dW-1];break;}_$eG="if(";for(;_$_a+_$fT<_$jZ;_$_a+=_$fT)_$$4.push(_$eG,_$$i[_$fJ],"<",_$_a+_$fT,"){"),_$_4(_$_a,_$_a+_$fT,_$$4),_$eG="}else if(";_$$4.push("}else{"),_$_4(_$_a,_$jZ,_$$4),_$$4.push("}");}}function _$_F(_$_a,_$jZ,_$$4){var _$dW,_$fT;_$dW=_$jZ-_$_a,_$dW==1?_$eJ(_$_a,_$$4):_$dW==2?(_$$4.push(_$$i[_$fJ],"==",_$_a,"?"),_$eJ(_$_a,_$$4),_$$4.push(":"),_$eJ(_$_a+1,_$$4)):(_$fT= ~ ~((_$_a+_$jZ)/2),_$$4.push(_$$i[_$fJ],"<",_$fT,"?"),_$_F(_$_a,_$fT,_$$4),_$$4.push(":"),_$_F(_$fT,_$jZ,_$$4));}var _$_a,_$jZ,_$$4,_$dW,_$fT,_$ak,_$eh,_$$n,_$em,_$aK,_$aI,_$fJ,_$dI,_$cp,_$c4,_$_2,_$$_,_$du,_$j0;var _$ir,_$am,_$hN=_$_i,_$hu=_$fF[2];while(1){_$am=_$hu[_$hN++];if(_$am<74){if(_$am<64){if(_$am<16){if(_$am<4){if(_$am===0){_$du[_$jZ]=_$a_(0);}else if(_$am===1){_$d4(0,_$$8,_$kB);}else if(_$am===2){ !_$ir?_$hN+=1:0;}else{_$fJ=_$$o();}}else if(_$am<8){if(_$am===4){ !_$ir?_$hN+=13:0;}else if(_$am===5){_$_a=new RegExp('\x5c\x53\x2b\x5c\x28\x5c\x29\x7b\x5c\x53\x2b\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x7d');}else if(_$am===6){_$$4= --_$_q[1];}else{_$dW=new RegExp('\x5c\x78');}}else if(_$am<12){if(_$am===8){_$jZ=0;}else if(_$am===9){_$eu=_$a_(21,_$$o());}else if(_$am===10){_$_a=_$c$.substr(_$kp,_$kB);_$kp+=_$kB;return _$_a;}else{for(_$$4=0;_$$4<_$_a;_$$4++ ){_$jZ[_$$4]=_$$o();}}}else{if(_$am===12){_$ir=_$jZ<_$dW;}else if(_$am===13){_$j0=[];}else if(_$am===14){_$hN+=-5;}else{_$ir= !_$fT;}}}else if(_$am<32){if(_$am<20){if(_$am===16){_$_a=[];}else if(_$am===17){return _$jZ;}else if(_$am===18){_$c4=_$a_(0);}else{ !_$ir?_$hN+=14:0;}}else if(_$am<24){if(_$am===20){_$fT=_$dW.test(_$jZ);}else if(_$am===21){_$$4= --_$_q[0];}else if(_$am===22){_$eh=_$$o();}else{_$kz(_$_2,_$_q);}}else if(_$am<28){if(_$am===24){_$jZ=new _$ga(_$_a);}else if(_$am===25){_$cp=_$a_(0);}else if(_$am===26){_$ir= !_$j0;}else{_$_2=_$_a;}}else{if(_$am===28){ !_$ir?_$hN+=-65:0;}else if(_$am===29){_$ir= !_$jZ;}else if(_$am===30){_$ir=_$$4;}else{_$$4=_$a_(0);}}}else if(_$am<48){if(_$am<36){if(_$am===32){_$jZ=_$a_(0);}else if(_$am===33){_$cI[_$kB]=_$$4;}else if(_$am===34){_$jZ++ ;}else{_$_2=_$a_(0);}}else if(_$am<40){if(_$am===36){_$ir= !_$du;}else if(_$am===37){_$ir=_$jZ<_$_2.length;}else if(_$am===38){_$hN+=1;}else{_$jr(_$jZ,_$$4);}}else if(_$am<44){if(_$am===40){_$$4=[];}else if(_$am===41){_$fT=_$$o();}else if(_$am===42){_$eu=_$eu.split(_$ji.fromCharCode(257));}else{_$ak=_$$o();}}else{if(_$am===44){_$ir= !_$_2;}else if(_$am===45){_$em=_$$o();}else if(_$am===46){return;}else{_$ir=_$jZ<_$fT;}}}else{if(_$am<52){if(_$am===48){_$aI=_$$o();}else if(_$am===49){_$_a.push([_$_2[_$jZ],_$_2[_$jZ+1]]);}else if(_$am===50){_$j0[_$jZ]=_$a_(0);}else{_$kp=0;}}else if(_$am<56){if(_$am===52){_$kz(_$du,_$_q);}else if(_$am===53){_$du=[];}else if(_$am===54){_$kB.push(_$$4);}else{_$c$="#Řfunction ā(ā){ā[ā(0,8)],8)]=6;ā[4]=3+1;ā[4]=3+1;}function ā(0-6,8)]=5;var ā=6;var ā=4;ā(0,8)],8)]=ā(7,8)];}function ā(4,8)],8)]=ā(3,8)];if(7+5){ā[0]=6;}ā[0]=6;}function ā){if(3+1){ā[4]=2;}ā[4]=ā[0]=7+5;ā[0]=ā){var ā=2;var ā=1+7;ā(7,8)];if(3+1){ā=4;if(ā(3,8)]){if(6){ā(5,8)]=3;}}ā(3,8)];var ā=3;if(ā(7,8)]){if(2){ā[0]=6;}}var ā=ā(6,8)];ā(3,8)];}\x00))))))),,	))\n)))))\r))))))\r)))))\x00),,))\n))))+)))))*))+ )!))\"";}}else if(_$am<60){if(_$am===56){_$$4=_$$4.join('');}else if(_$am===57){_$_a=_$$o();}else if(_$am===58){_$$4=_$_a.test(_$jZ);}else{_$jZ=_$_H[_$_H()]();}}else{if(_$am===60){_$j$.jf= !_$$4;}else if(_$am===61){_$$_=_$$o();}else if(_$am===62){_$aK=_$$o();}else{_$$n=_$$o();}}}}else{if(_$am<68){if(_$am===64){ !_$ir?_$hN+=11:0;}else if(_$am===65){ !_$ir?_$hN+=3:0;}else if(_$am===66){ ++_$$4;}else{_$ir= !(_$dI+1);}}else if(_$am<72){if(_$am===68){_$cB=_$c$.length;}else if(_$am===69){_$jZ+=2;}else if(_$am===70){ !_$ir?_$hN+=27:0;}else{ !_$ir?_$hN+=7:0;}}else{if(_$am===72){_$dI=_$$o();}else{_$dW=_$$o();}}}}else ;}function _$d4(_$dW,_$jZ,_$$4){var _$_a;var _$gF,_$kB,_$fT=_$dW,_$$8=_$fF[3];while(1){_$kB=_$$8[_$fT++];if(_$kB<42){if(_$kB<16){if(_$kB<4){if(_$kB===0){_$jZ.push(";");}else if(_$kB===1){_$jZ.push("function ",_$$i[_$aK],"(",_$$i[_$eh]);}else if(_$kB===2){_$gF=_$$_<_$j0.length;}else{_$_4(0,_$$_,_$jZ);}}else if(_$kB<8){if(_$kB===4){ !_$gF?_$fT+=-29:0;}else if(_$kB===5){_$_a=0;}else if(_$kB===6){_$gF= !_$jZ.length;}else{_$jZ.push("}");}}else if(_$kB<12){if(_$kB===8){ !_$gF?_$fT+=23:0;}else if(_$kB===9){ !_$gF?_$fT+=-28:0;}else if(_$kB===10){_$jZ.push(_$$i[_$eh],",",_$$i[_$dI],"=",_$$i[_$cy],"[",_$$4,"];");}else{_$jZ.push("while(1){",_$$i[_$fJ],"=",_$$i[_$dI],"[",_$$i[_$ak],"++];");}}else{if(_$kB===12){_$jZ.push("}else ");}else if(_$kB===13){ !_$gF?_$fT+=11:0;}else if(_$kB===14){ !_$gF?_$fT+=28:0;}else{return;}}}else if(_$kB<32){if(_$kB<20){if(_$kB===16){ !_$gF?_$fT+=32:0;}else if(_$kB===17){ !_$gF?_$fT+=3:0;}else if(_$kB===18){_$gF=_$j0.length;}else{_$gF= !_$_2;}}else if(_$kB<24){if(_$kB===20){_$fT+=-5;}else if(_$kB===21){_$jZ.push("if(",_$$i[_$fJ],"<",_$$_,"){");}else if(_$kB===22){_$_a++ ;}else{ !_$gF?_$fT+=12:0;}}else if(_$kB<28){if(_$kB===24){_$gF=_$_a<_$cp.length;}else if(_$kB===25){_$gF= !_$$i;}else if(_$kB===26){for(_$_a=0;_$_a<_$_2.length;_$_a++ ){_$$k(_$_2[_$_a],_$jZ);}for(_$_a=0;_$_a<_$du.length;_$_a++ ){_$jr(_$du[_$_a],_$jZ);}}else{_$jZ.push("(function(",_$$i[_$hR],",",_$$i[_$cy],"){var ",_$$i[_$eh],"=0;");}}else{if(_$kB===28){_$_F(_$$_,_$j0.length,_$jZ);}else if(_$kB===29){_$jZ.push("var ",_$$i[_$c4[0]]);}else if(_$kB===30){_$gF=_$$4==0;}else{ !_$gF?_$fT+=1:0;}}}else{if(_$kB<36){if(_$kB===32){_$jZ.push("var ",_$$i[_$$n],",",_$$i[_$fJ],",",_$$i[_$ak],"=");}else if(_$kB===33){_$gF=_$c4.length;}else if(_$kB===34){_$gF=_$jZ.length==0;}else{_$gF=_$cp.length;}}else if(_$kB<40){if(_$kB===36){_$jZ.push("){");}else if(_$kB===37){for(_$_a=1;_$_a<_$c4.length;_$_a++ ){_$jZ.push(",",_$$i[_$c4[_$_a]]);}}else if(_$kB===38){_$jZ.push(",",_$$i[_$cp[_$_a]]);}else{_$gF=_$ak<0;}}else{if(_$kB===40){_$fT+=-17;}else{ !_$gF?_$fT+=6:0;}}}}else ;}}}}})([],[[7,0,2,8,3,11,10,5,6,4,1,9,],[87,1,32,76,16,79,83,78,65,23,35,18,40,96,30,56,64,94,45,85,13,21,44,92,9,82,43,59,72,60,38,24,88,68,61,3,22,8,55,41,5,71,58,57,48,64,93,86,2,11,84,74,8,64,94,45,6,17,44,15,80,39,53,28,36,95,63,67,63,14,33,4,19,7,12,52,54,75,31,81,62,91,0,51,90,89,66,73,50,70,34,27,49,25,63,42,2,63,26,46,37,10,69,20,77,63,47,29,63,63,],[57,24,29,19,23,61,31,33,73,53,8,12,65,0,34,14,36,70,11,17,46,10,46,55,68,51,57,9,42,32,40,39,56,54,46,43,22,63,45,62,48,3,72,67,64,52,41,13,8,47,65,50,34,14,26,4,25,18,35,16,8,37,65,49,69,14,27,44,28,1,46,5,59,58,30,71,6,7,20,15,2,66,38,21,60,46,],[30,16,27,34,14,32,25,13,35,41,5,24,17,38,22,20,36,19,41,10,18,8,11,39,23,26,33,17,29,37,0,6,9,40,1,34,4,21,3,12,2,31,28,0,7,15,],]);}

console.log(document.cookie)