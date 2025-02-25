const user_config = {  // 用户配置
    env: {  // 浏览器环境
        canvas: "",
        plugin: [
            { description: "Portable Document Format", filename: "internal-pdf-viewer", name: "Chrome PDF Plugin", MimeTypes: [{ description: "Portable Document Format", suffixes: "pdf", type: "application/x-google-chrome-pdf" }] }
        ],
    }
}

function configObj_to_configStr(user_config) {
    // 深拷贝用户配置
    let copy_user_config = JSON.parse(JSON.stringify(user_config));
    // 提取env属性并删除
    let env = copy_user_config.env  || {};
    delete copy_user_config.env;
    // 提取canvas属性并赋予默认值
    let canvas = env.canvas  || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==";
    delete env.canvas;
    // 合并用户插件与默认插件
    let plugin = env.plugin  || [];
    delete env.plugin;
    const defaultPlugins = [
        {
            description: "Portable Document Format",
            filename: "internal-pdf-viewer",
            name: "Chrome PDF Plugin",
            MimeTypes: [{
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/x-google-chrome-pdf"
            }]
        },
        {
            description: "",
            filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
            name: "Chrome PDF Viewer",
            MimeTypes: [{ description: "", suffixes: "pdf", type: "application/pdf" }]
        },
        {
            description: "",
            filename: "internal-nacl-plugin",
            name: "Native Client",
            MimeTypes: [
                { description: "Native Client Executable", suffixes: "", type: "application/x-nacl" },
                { description: "Portable Native Client Executable", suffixes: "", type: "application/x-pnacl" }
            ]
        }
    ];
    plugin = [...new Set([...plugin, ...defaultPlugins])];
    // 生成配置字符串
    const canvas_str = `myVm.default_envs.canvas="${canvas}"\r\n`;
    const env_str = `myVm.config_envs(${JSON.stringify(env)})\r\n`;
    const plugin_str = plugin.map(p  => `myVm.config_plugin(${JSON.stringify(p)})\r\n`).join('');

    return { canvas_str, env_str, plugin_str, };
}

function deepCopy(targetObj){
    return JSON.parse(JSON.stringify(targetObj));
}

function sanbox_env(){
    let copy_user_config = deepCopy(user_config)                // 深拷贝, 防止被污染
    return configObj_to_configStr(copy_user_config)
}



module.exports = {
    sanbox_env
}