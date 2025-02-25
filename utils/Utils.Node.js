// .node.js文件的用途就是拼接多个文件的js代码
const fs = require("fs")

function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}

function Get_Utils_Code() {
    var code = "";
    code += ReadCode("vm_tools.js");
    code += ReadCode("vm_printlog.js");
    code += ReadCode("vm_protection.js");
    code += ReadCode("vm_printlog.js");
    code += ReadCode("vm_proxy.js");
    return code;
}

module.exports = {
    Get_Utils_Code
}