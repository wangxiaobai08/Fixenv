Scheduler = function Scheduler(createObj_key) {
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(Scheduler);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['postTask'];

    Scheduler.prototype = {
        postTask() {
            if (!Scheduler.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'Scheduler', 'postTask', arguments, result);
            return result;
        },
    }
    myVm.rename(Scheduler.prototype, "Scheduler");
    myVm.safeDescriptor_addConstructor(Scheduler);
    myVm.safe_Objattribute(Scheduler, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
scheduler = new Scheduler(myVm.memory.$createObj_key)

