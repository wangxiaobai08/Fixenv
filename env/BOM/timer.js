; (function () {
    let timer = {
        setTimeout(callback, ...arg) {
            const timer_obj = myVm_module.node_func.setTimeout(callback, ...arg);
            const timer_id = parseInt(Object.keys(myVm.memory.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            myVm.memory.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        setInterval(callback, ...arg) {
            const timer_obj = myVm_module.node_func.setInterval(callback, ...arg);
            const timer_id = parseInt(Object.keys(myVm.memory.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            myVm.memory.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        clearTimeout(timer_id) {
            const timer_obj = myVm.memory.timer_map[timer_id];
            return myVm_module.node_func.clearTimeout(timer_obj)
        },
        clearInterval(timer_id) {
            const timer_obj = myVm.memory.timer_map[timer_id];
            return myVm_module.node_func.clearInterval(timer_obj)
        }
    };
    for (const key in timer) {
        if (Object.hasOwnProperty.call(timer, key)) {
            const timer_obj = timer[key];

            myVm.safefunction(timer_obj);

            Object.defineProperty(window, timer_obj.name, {
                value: timer_obj,
                configurable: true,
                enumerable: true,
                writable: true
            })
        }
    };

})();