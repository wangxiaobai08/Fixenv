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

myVm.config_envs = function(data){
    for (const key in data) {
        myVm.updata_envs(data[key], myVm.default_envs[key])
    }
}

myVm.config_plugin = function (data) {
    if (myVm.memory.pluginArray.temp === undefined) {
        myVm.memory.pluginArray.temp = [];
    }
    myVm.memory.pluginArray.temp.push(data);
};