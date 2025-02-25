const fs = require("fs");
const bom_node=require("./env/BOM/BOM.Node.js")
const dom_node=require("./env/DOM/DOM.Node.js")
const event_node=require("./env/Event/Event.Node.js")
const eventTarget_node=require("./env/EventTarget/EventTarget.Node.js")
const utils_node=require("./utils/Utils.Node.js")
const config_node=require("./config/Config.Node.js")
const vm_proxyObj=require("./utils/vm_proxyObj.js")
const getenv=require("./config/env.js")

function node_generate_code(){
    // 引入框架工具代码
    var code = "";
    code+=`${config_node.Get_Config_Code()}\r\n`;
    code+=`${utils_node.Get_Utils_Code()}\r\n`;
    code+=`${getenv.sanbox_env().canvas_str}\r\n`; // 自定义canvas指纹放到框架内存
    code+=`${getenv.sanbox_env().env_str}\r\n`;// 自定义浏览器环境放到框架内存
    code+=`${getenv.sanbox_env().plugin_str}\r\n`;// 自定义浏览器插件放到框架内存
    code+=`${event_node.Get_event_node_code()}\r\n`;
    code+=`${eventTarget_node.Get_eventTarget_node_code()}\r\n`;
    code+=`${bom_node.Get_Bom_node_code()}\r\n`;
    code+=`${dom_node.Get_Dom_node_code()}\r\n`;
    code += 'myVm.memory.htmlCollection[0] = new HTMLBodyElement(myVm.memory.$createObj_key);\r\n\r\n';  // 初始化DOM节点
    code += 'myVm.memory.htmlCollection[1] = new HTMLHeadElement(myVm.memory.$createObj_key);\r\n\r\n';  // 初始化DOM节点
    code+=`${vm_proxyObj.vm_proxyObj()}\r\n`;
    return code;
}

module.exports = {
    node_generate_code
}