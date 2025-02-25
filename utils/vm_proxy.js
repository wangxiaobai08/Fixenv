//====================================================
// 框架代理功能
myVm.proxy =function(obj, objname) {
    //精确判断变量类型
    function get_attribute_type(value) {
        return Object.prototype.toString.call(value);
    }
    //空值检测函数
    function isPropKeyEmpty(propKey) {
        /* 空值类型策略（按需开启） */
        return propKey === ""                // Case1 空字符串(如访问obj[""])
            || propKey === null             // Case2 null值访问
            || propKey === undefined        // Case3 undefined访问
            || typeof propKey === "symbol"; // Case4 Symbol类型过滤（如Symbol.iterator ）
    }
    //创建代理方法调用的拦截处理器
    function get_method_handler(monitorName) {
        return {
            apply(target, thisArg, argArray) {
                //保持原有函数执行的标准化反射调用
                let result = Reflect.apply(target, thisArg, argArray);
                //防止对console对象的日志方法进行监控（避免递归死循环）
                if (thisArg === console && target.name === "log") {
                    return result;
                }
                //跳过对象原型链方法（防止基础方法调用污染日志）
                if (target.name === "toString") {
                    return result;
                }
                if (myVm.ProxyConfig.method_handler === true) {
                   // console.log(`[${watchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`);
                   console.log(`[${monitorName}] 调用函数，函数名称是 [${target.name}]，参数数组是 [${argArray}]，结果是 [${result}]。`);
                }
                return result

            },
            construct(target, argArray, newTarget) {
                //保持标准对象构造行为
                let result = Reflect.construct(target, argArray, newTarget);
                if (myVm.ProxyConfig.method_handler === true) {
                    console.log(`[${monitorName}] 构造函数，函数名称是 [${target.name}]，参数数组是 [${argArray}]，结果是 [${(result)}]。`);
                }
                return result;
            }
        }
    }
   //对象属性代理系统的核心拦截器
    function get_obj_handler(monitorName) {
        return {
            //* 属性访问拦截 */
            get(target, propKey, receiver) {
                if (myVm.config.proxy_proto === false && propKey === "__proto__") {
                    console.log(`[ 属性访问] 监控路径:${monitorName}.${propKey} | 属性值:${target[propKey]}`);
                    return target[propKey]
                }

                let result = Reflect.get(target, propKey, receiver);
                let result_type = get_attribute_type(result);

                if (result instanceof Object) {
                    const descriptor = Object.getOwnPropertyDescriptor(target,  propKey);
                    if (descriptor) {
                         if (Object.getOwnPropertyDescriptor(target, propKey).writable === false) {
                        console.log(`[ 安全告警] 不可写属性 ${monitorName}.${propKey}`);
                        } else {
                            if (typeof result === "function") {
                                if (myVm.ProxyConfig.get_handler === true) {
                                    console.log(`[ 属性获取] 监控路径: ${monitorName}.${propKey} | 属性值: ${myVm.compress_jsCode(String(result))}  | 类型标识: ${result_type}`);
                                }
                                return new Proxy(result, get_method_handler(monitorName))
                            } else {
                                if (myVm.ProxyConfig.get_handler === true) {
                                    console.log(`[ 属性获取] 监控路径: ${monitorName}.${propKey} | 属性值: ${myVm.compress_jsCode(String(result))}  | 类型标识: ${result_type}`);
                                }
                            }
                            return new Proxy(result, get_obj_handler(`${monitorName}.${propKey}`))
                        }
                    }
                        // else{
                    //      console.warn(`[ 调试信息] ${monitorName}.${propKey} 属性不存在于目标对象`);
                    // }
                }
                if (typeof (propKey) !== "symbol" && propKey !== "toString") {
                    try {
                        if(myVm.ProxyConfig.get_handler === true) {
                            console.log(`\n[ 属性追踪] 路径：${monitorName}.${propKey.description  ?? propKey} | 值：${result} | 类型：${result_type}`);
                        }
                    } catch (e) {
                        console.log(`[${monitorName}] 获取失败`);
                    }
                }
                return result;
            },
             /* 属性设置拦截 */
            set(target, propKey, value, receiver) {
                // 1. 值类型检测
                // 通过自定义类型检测函数获取值类型标签（如 "Function"/"Date"）
                let value_type = get_attribute_type(value);
                // 2. 对象类型区分处理
                if (value instanceof Object) {
                    // 对象类型日志记录（如设置嵌套对象/函数）
                    if (myVm.ProxyConfig.set_handler  === true) {
                        console.log(
                                `[属性设置] 调用者:${monitorName} | 属性:${propKey} | 设置值:${myVm.compress_jsCode(String(value))}  | 类型:${value_type}`
                            );
                    }
                } else {
                    // 非对象类型日志记录（如设置字符串/数字）
                    if (myVm.ProxyConfig.set_handler  === true) {
                       console.log(
                            `[属性设置] 调用者:${monitorName} | 属性:${propKey} | 设置值:${myVm.compress_jsCode(String(value))}  | 类型:${value_type}`
                        );
                    }
                }
                // 3. 反射式赋值
                // 保持代理透明性，通过 Reflect.set  执行原始赋值操作
                return Reflect.set(target,  propKey, value, receiver);
            },
            //其他陷阱方法（has/deleteProperty等）
            has(target, propKey) {
                let result = Reflect.has(target, propKey);
                if (myVm.ProxyConfig.has_handler === true) {
                    console.table([{"调用类型":"has","调用者":monitorName,"调用属性":propKey, "存在值":result}]);
                }
                return result;
            },
            deleteProperty(target, propKey) {
                let result = Reflect.deleteProperty(target, propKey);
                if (myVm.ProxyConfig.deleteProperty_handler === true) {
                    console.table([{"调用类型":"deleteProperty","调用者":monitorName,"调用属性":propKey, "删除值":result}]);
                }
                return result;
            },
            getOwnPropertyDescriptor(target, propKey) {
                let result = Reflect.getOwnPropertyDescriptor(target, propKey);
                if (myVm.ProxyConfig.getOwnPropertyDescriptor_handler === true) {
                    try {
                        console.table([{"调用类型":"getOwnPropertyDescriptor","调用者":monitorName,"调用属性":propKey, "获取属性描述符":(String(result))}]);
                    } catch (error) { }
                }
                return result;
            },
            defineProperty(target, propKey, attributes) {
                let result = Reflect.defineProperty(target, propKey, attributes);
                try {
                    if (myVm.ProxyConfig.defineProperty_handler === true) {
                        console.table([{"调用类型":"defineProperty","调用者":monitorName,"调用属性":propKey, "修改属性":result}]);
                    }
                } catch (e) {
                    console.log(`[${monitorName}] defineProperty error`)
                }
                return result;
            },
            getPrototypeOf(target) {
                let result = Reflect.getPrototypeOf(target);
                if (myVm.ProxyConfig.getPrototypeOf_handler === true) {
                    console.log(`[${monitorName}] 原型对象是 [${(result)}]`)
                }
                return result;
            },
            setPrototypeOf(target, proto) {
                let result = Reflect.setPrototypeOf(target, proto);
                if (myVm.ProxyConfig.setPrototypeOf_handler === true) {
                    console.log(`[${monitorName}] 设置原型对象 [${(proto)}], 最终原型对象 [${result}]`);

                }
                return result;
            },
            preventExtensions(target) {
                let result = Reflect.preventExtensions(target);
                if (myVm.ProxyConfig.preventExtension_handler === true) {
                    console.log(`[${monitorName}] 防止扩展操作，结果是 [${result}]`);
                }
                return result;
            },
            isExtensible(target) {
                let result = Reflect.isExtensible(target);
                if (myVm.ProxyConfig.isExtensible_handler === true) {
                    console.log(`[${monitorName}] 是否可扩展，结果是 [${result}]`);

                }
                return result;
            },
            ownKeys(target) {
                let result = Reflect.ownKeys(target);
                if (myVm.ProxyConfig.ownKeys_handler === true) {
                    try {
                        console.log(`[${monitorName}] 调用 ownKeys，结果是 [${String((result))}]`);
                    } catch (error) {

                    }
                }
                return result
            }
        }
    }
    //
    if (myVm.config.proxy === false) {
        return obj
    }
    //
    if (typeof obj === "function") {
        return new Proxy(obj, get_method_handler(objname));
    }
    return new Proxy(obj, get_obj_handler(objname));
};

myVm.proxy_chained = function (obj_, obj_name) {
    function set_traverse_object(target, obj, recursion_layers) {
        recursion_layers -= 1;
        for (let prop in obj) {
            const value = obj[prop];
            const tg_name = `${target}.${prop.toString()}`;
            const value_type = get_value_type(value);
            if (value && value_type === "object" && recursion_layers >= 1) {
                set_traverse_object(tg_name, value, recursion_layers);
                continue;
            }
            if (value && value.toString() !== '[object Object]') {
                if (myVm.config.logOpen === true)
                    myVm.console_log(`setter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
                continue;
            }
            if (myVm.config.logOpen === true)
                myVm.console_log(`setter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
        }
    }

    function new_handler(target_name, obj, number) {
        return new Proxy(obj, my_handler(target_name, number));
    }

    function get_value_type(value) {
        if (Array.isArray(value)) {
            return 'Array';
        }
        return typeof value;
    }

    function my_handler(target_name, number) {
        return {
            set: function (obj, prop, value) {
                const value_type = get_value_type(value);
                const tg_name = `${target_name}.${prop.toString()}`;

                if (value && value_type === "object") {
                    set_traverse_object(tg_name, value, number);
                } else {
                    if (myVm.config.logOpen === true)
                        myVm.console_log(`setter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
                }
                return Reflect.set(obj, prop, value);
            },
            get: function (obj, prop) {
                const tg_name = `${target_name}.${prop.toString()}`;
                const value = Reflect.get(obj, prop);
                let value_type = get_value_type(value);
                if (value && value_type === 'object') {
                    return new_handler(tg_name, value, number);
                }
                if (myVm.config.logOpen === true)
                    myVm.console_log(`getter hook->${tg_name};  值-> ${value};  类型-> ${value_type}`);
                return value;
            },
            deleteProperty(target, propKey) {
                // 没有实现链式输出
                let result = Reflect.deleteProperty(target, propKey);
                let value_type = get_value_type(result);

                if (myVm.config.logOpen === true)
                    myVm.console_log(`delete hook-> ${propKey}, 结果-> ${result};  类型-> ${value_type}`);
                return result;
            }
        };
    }

    return new Proxy(obj_, my_handler(obj_name, 30));
};
