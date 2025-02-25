SVGGraphicsElement = function SVGGraphicsElement(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
}; myVm.safefunction(SVGGraphicsElement);

; (function () {
    const $safe_get_attribute = ['farthestViewportElement', 'nearestViewportElement', 'requiredExtensions', 'systemLanguage', 'transform'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getBBox', 'getCTM', 'getScreenCTM'];

    SVGGraphicsElement.prototype = {
        get farthestViewportElement() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).farthestViewportElement, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGGraphicsElement', 'farthestViewportElement', arguments, result);
            return result;
        },
        getBBox() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SVGGraphicsElement', 'getBBox', arguments, result);
            return result;
        },
        getCTM() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SVGGraphicsElement', 'getCTM', arguments, result);
            return result;
        },
        getScreenCTM() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (myVm.config.logOpen=== true) myVm.logAdd('Func', 'SVGGraphicsElement', 'getScreenCTM', arguments, result);
            return result;
        },
        get nearestViewportElement() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).nearestViewportElement, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGGraphicsElement', 'nearestViewportElement', arguments, result);
            return result;
        },
        get requiredExtensions() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).requiredExtensions, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGGraphicsElement', 'requiredExtensions', arguments, result);
            return result;
        },
        get systemLanguage() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).systemLanguage, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGGraphicsElement', 'systemLanguage', arguments, result);
            return result;
        },
        get transform() {
            if (!SVGGraphicsElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = myVm.abs(myVm.memory.private_data.get(this).transform, "");
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'SVGGraphicsElement', 'transform', arguments, result);
            return result;
        },
    }

    myVm.rename(SVGGraphicsElement.prototype, "SVGGraphicsElement");
    myVm.safeDescriptor_addConstructor(SVGGraphicsElement);
    myVm.safe_Objattribute(SVGGraphicsElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(SVGGraphicsElement.prototype, SVGElement.prototype);
    Object.setPrototypeOf(SVGGraphicsElement, SVGElement);

})();

myVm.memory.htmlElements["div"] = function () {
    return new SVGGraphicsElement(myVm.memory.$createObj_key);
}

