(function () {
        if (typeof Object.assign != 'function') {
            Object.assign = function (target) {
            //第一个传参不能是undefined和null，因为它们不能被转为对象
            if (target === undefined || target === null) {
                throw new TypeError('Can not convert undefined or null to object');
            }
            //使用Object对象化target
            let output = Object(target);
            for (let idx = 1,l=arguments.length; idx < l; idx++) {
                let source = arguments[idx];
                //后续传参也需要判断undefined和null
                if (source !== undefined && source !== null) {
                    for (let key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            output[key] = source[key];
                        }
                    }
                }
            }
            return output;
            };
        }
    })();