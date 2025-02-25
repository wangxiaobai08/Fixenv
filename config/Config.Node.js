const fs = require("fs")

function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}

function Get_Config_Code() {
    var code = "";
    code += ReadCode("frame.js");
    //code+=ReadCode("env.js")
    return code;
}

module.exports = {
    Get_Config_Code
}