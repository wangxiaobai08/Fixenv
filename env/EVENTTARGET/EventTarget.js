EventTarget = function EventTarget() {  //构造函数
}; myVm.safefunction(EventTarget);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addEventListener', 'dispatchEvent', 'removeEventListener'];

    EventTarget.prototype = {
        addEventListener(type, listener, ...args) {
            if (!myVm.memory.listeners.has(type)) { myVm.memory.listeners.set(type, []) };

            myVm.memory.listeners.get(type).push({
                listener: listener,
                self: this,
            });
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'EventTarget', `addEventListener(${type})`, [listener, ...args], result);
            return result;
        },
        dispatchEvent(event_) {
            if (event_.type === undefined || event_.type === "") {
                return;
            }
            if (myVm.memory.listeners[event_.type] != undefined) {
                return;
            }

            let stack = myVm.memory.listeners[event_.type];
            for (var i = 0; stack.length > i; i++) {
                stack[i].apply(this, event_);
            }

        },
        removeEventListener(type, callback) {
            if (!(type in myVm.memory.listeners)) {
                return;
            }
            var stack = myVm.memory.listeners[type];
            for (var i = 0; stack.length > i; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                }
            }
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'EventTarget', 'removeEventListener ', arguments, result);
            return result;
        }
    };
    myVm.rename(EventTarget.prototype, "EventTarget");
    myVm.safeDescriptor_addConstructor(EventTarget);
    myVm.safe_Objattribute(EventTarget, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

