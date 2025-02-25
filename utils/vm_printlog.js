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