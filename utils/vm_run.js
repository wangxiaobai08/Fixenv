// utils/vm_run.js  核心修正段
// const { JSDOM } = require('jsdom');
// const { CanvasRenderingContext2D } = require('canvas');
//
// // 创建带Canvas支持的DOM实例
// const dom1 = new JSDOM(`<!DOCTYPE html><body></body>`, {
//     runScripts: "dangerously",
//     pretendToBeVisual: true,  // 关键参数：模拟视觉渲染循环
//     resources: "usable",
//     virtualConsole: new (require('jsdom').VirtualConsole)()
// });
//
// // 强制注入Canvas实现
// dom1.window.HTMLCanvasElement.prototype.getContext  = function(type) {
//     if (type === '2d') {
//         const ctx = new CanvasRenderingContext2D(this);
//         // 补全浏览器特有方法（如isPointInPath）
//         ctx.prototype.isPointInPath  = function() { return true };
//         return ctx;
//     }
//     return null;
// };

const jsdom = require('jsdom');
const { JSDOM }=jsdom;
const html=`<!DOCTYPE html><p>hello world</p>`

const dom=new JSDOM(html,{
  url:"https://dun.163.com/trial/jigsaw",
    referrer:"https://dun.163.com/",
    contentType:"text/html"
})

function vm_run(inputpath,outputpath){
    var  fs = require('fs');
    var fixenv = require('../FixEnv.Node.js');
    const {VM,VMScript} = require('vm2');
    var generate_code = fixenv.node_generate_code();  // 框架代码
    var web_js_code = fs.readFileSync(inputpath) ; // 网站js代码
    var all_code = generate_code+web_js_code;
    fs.writeFileSync(outputpath,all_code);
    const script = new VMScript(all_code,outputpath); //真实路径，浏览器打开的就是该缓存文件
    const vm = new VM({
        sandbox: {
            document:dom.window.document,
          //CanvasRenderingContext2D: dom1.window.CanvasRenderingContext2D,
          require: require,  // 显式将 require 放入沙箱环境
          console: console   // 也可以将其他对象添加到沙箱中
        }
      }); // new 一个纯净v8环境
    debugger
    vm.run(script);
    debugger
}

module.exports = {
    vm_run
}
