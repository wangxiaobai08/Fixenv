Screen = function Screen(createObj_key) {//构造函数
    if (createObj_key !== myVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    myVm.memory.private_data.set(this, {})
};
myVm.safefunction(Screen);
screen = {};
; (function () {
    const $attribute_map = {
        availHeight: 1392,
        availLeft: 0,
        availTop: 0,
        availWidth: 2560,
        colorDepth: 24,
        height: 1440,
        orientation: new ScreenOrientation(myVm.memory.$createObj_key),
        pixelDepth: 24,
        width: 2560
    };
    // 将属性更新为用户自定义属性
    myVm.updata_envs(myVm.default_envs['screen'], $attribute_map)

    const $safe_get_attribute = [
        'availHeight', 'availLeft', 'availTop', 'availWidth', 'colorDepth', 'height', 'orientation', 'pixelDepth', 'width'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    Screen.prototype = {
        get availHeight() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availHeight;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'availHeight', arguments, result);
            return result;
        },
        get availLeft() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availLeft;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'availLeft', arguments, result);
            return result;
        },
        get availTop() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availTop;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'availTop', arguments, result);
            return result;
        },
        get availWidth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.availWidth;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'availWidth', arguments, result);
            return result;
        },
        get colorDepth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.colorDepth;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'colorDepth', arguments, result);
            return result;
        },
        get height() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.height;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'height', arguments, result);
            return result;
        },
        get orientation() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.orientation;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'orientation', arguments, result);
            return result;
        },
        get pixelDepth() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = $attribute_map.pixelDepth;
            if (myVm.config.logOpen=== true) myVm.logAdd('Get', 'Screen', 'pixelDepth', arguments, result);
            return result;
        },
        get width() {
            if (!Screen.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return $attribute_map.width;
        }
    };
    myVm.rename(Screen.prototype, "Screen");
    myVm.safeDescriptor_addConstructor(Screen);
    myVm.safe_Objattribute(Screen, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(screen, Screen.prototype);

})();

