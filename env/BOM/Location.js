Location = function Location() {
    throw new TypeError("TypeError", "Illegal constructor")
}; myVm.safefunction(Location);
location = {};

; (function () {
    Location.prototype = {};
    myVm.rename(Location.prototype, "Location");
    myVm.safeDescriptor_addConstructor(Location);


    const $safe_get_attribute = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];
    const $safe_func_attribute = ['ancestorOrigins', 'assign', 'reload', 'replace', 'toString'];
    let $attribute_map = {
        hash: "",
        host: "newtab",
        hostname: "newtab",
        href: "chrome://newtab/",
        origin: "chrome://newtab",
        pathname: "/",
        port: "",
        protocol: "chrome:",
        search: ""
    };

    location = {
        ancestorOrigins() {
            let result = new class DOMStringList { };
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'ancestorOrigins', arguments, result);
            return result;
        },
        assign() {
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'assign', arguments, result);
            return result;
        },
        get hash() {
            let result = $attribute_map.hash;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'hash', arguments, result);
            return result
        },
        set hash(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'hash', arguments);
            $attribute_map.hash = value
        },

        get host() {
            let result = $attribute_map.host
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'host', arguments, result);
            return result
        },
        set host(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'host', arguments);
            $attribute_map.host = value
        },

        get hostname() {
            let result = $attribute_map.hostname;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'hostname', arguments, result);
            return result
        },
        set hostname(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'hostname', arguments);
            $attribute_map.hostname = value
        },

        get href() {
            let result = $attribute_map.href
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'href', arguments, result);
            return result
        },
        set href(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'href', arguments);
            let a = value.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            location.protocol = a[1] ? a[1] : "";
            location.host = a[2] ? a[2] : "";
            location.port = a[3] ? a[3] : "";
            location.pathname = a[4] ? a[4] : "";
            location.search = a[5] ? a[5] : "";
            location.hash = a[6] ? a[6] : "";
            location.hostname = location.host;
            location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
            $attribute_map.href = value;
        },

        get origin() {
            let result = $attribute_map.origin;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'origin', arguments, result);
            return result
        },
        set origin(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'origin', arguments);
            $attribute_map.origin = value
        },

        get pathname() {
            let result = $attribute_map.pathname
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'pathname', arguments, result);
            return result
        },
        set pathname(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'pathname', arguments);
            $attribute_map.pathname = value
        },

        get port() {
            let result =  $attribute_map.port;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'port', arguments, result);
            return result
        },
        set port(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'port', arguments);
            $attribute_map.port = value
        },
        get protocol() {
            let result = $attribute_map.protocol;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'protocol', arguments, result);
            return result;
        },
        set protocol(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'protocol', arguments);
            $attribute_map.protocol = value
        },
        reload() {
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'reload', arguments, result);
            return result;
        },
        replace() {
            let result = undefined;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'replace', arguments, result);
            return result;
        },
        get search() {
            let result = $attribute_map.search;
            if (myVm.config.logOpen === true) myVm.logAdd('Get', 'Location', 'search', arguments, result);
            return result
        },
        set search(value) {
            if (myVm.config.logOpen === true) myVm.logAdd('Set', 'Location', 'search', arguments);
            $attribute_map.search = value
        },
        toString() {
            let result = location.href;
            if (myVm.config.logOpen === true) myVm.logAdd('Func', 'Location', 'toString', arguments, result);
            return result
        }
    };
    // 添加两个特殊的属性
    Object.defineProperty(location, 'valueOf', { value: valueOf, configurable: false, enumerable: false, writable: false });
    Object.defineProperties(location, { [Symbol.toPrimitive]: { value: undefined, configurable: false, enumerable: false, writable: false } });

    for (let key of $safe_get_attribute) {
        Object.defineProperty(location, key, {
            configurable: false,
            enumerable: true
        });
        myVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['get']);
        myVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['set']);
    };

    for (let key of $safe_func_attribute) {
        Object.defineProperty(location, key, {
            value: location[key],
            configurable: false,
            enumerable: true,
            writable: false
        });
        myVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['value'])
    }
    Object.setPrototypeOf(location, Location.prototype);

    // 初始化用户配置
    location.href = myVm.default_envs['location']['href'];
})()

