//===================================================
function vm_proxyObj(){
    let code = "";
        let proxyObj = [
        'window','document','location', 'navigator','localStorage','sessionStorage','screen'
    ];
    for (let obj of proxyObj){
        code += `${obj} = myVm.proxy(${obj}, "${obj}");\r\n`
    }
    return code;
}
module.exports = {
    vm_proxyObj
}

