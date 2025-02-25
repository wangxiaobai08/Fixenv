/**
 * 设置为用户的配置
 */
myVm.config['logOpen'] = myVm_module.nodeConfig.logOpen
myVm.config['proxy'] = myVm_module.nodeConfig.proxy

myVm.memory.finish = true;
myVm.console_log('框架代码加载完毕 !!!')