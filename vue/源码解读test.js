/*!
 * vue源码解读
 * aothor
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Vue = factory());
}(this, (function () {
    'use strict';

    // 冻结对象
    var emptyObject = Object.freeze({});

    // 一些工具检测工具
    function isUndef(v) {
        return v === undefined || v === null
    }
    function isDef(v) {
        return v !== undefined && v !== null
    }
    function isTrue(v) {
        return v === true
    }
    function isFalse(v) {
        return v === false
    }
    function isObject(obj) {
        return obj !== null && typeof obj === 'object'
    }
    function isRegExp(v) {
        return _toString.call(v) === '[object RegExp]'
    }
    function isPlainObject(obj) {// 简单对象检测 '[object Object]'
        return _toString.call(obj) === '[object Object]'
    }
    function isPrimitive(value) {//检测是否是非引用类型变量
        return (
            typeof value === 'string' ||
            typeof value === 'number' ||
            // $flow-disable-line
            typeof value === 'symbol' ||
            typeof value === 'boolean'
        )
    }
    function isValidArrayIndex(val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val)
    }
    //将对象转为字符串的方法 如 Object.prototype.toString.call([123,41]) // "[object Array]"
    var _toString = Object.prototype.toString;
    function toRawType(value) {
        return _toString.call(value).slice(8, -1)
    }

    // 一些转换方法
    function toString(val) {
        return val == null
            ? ''
            : typeof val === 'object'
                ? JSON.stringify(val, null, 2)
                : String(val)
    }

    function makeMap(
        str,
        expectsLowerCase
    ) {
        var map = Object.create(null);
        var list = str.split(',');
        for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
        }
        return expectsLowerCase
            ? function (val) { return map[val.toLowerCase()]; }
            : function (val) { return map[val]; }
    }

    // 检测是否是内置标签
    var isBuiltInTag = makeMap('slot,component', true);
    // 检测是否为保留的属性
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
    // 删除数组中的某一项
    function remove(arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item);
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }
    // 检测对象中是否有指定的属性
    var hasOwnProperty = Object.prototype.hasOwnproperty;
    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }
    //创建纯函数的缓存版本
    function cached(fn) {
        var cache = Object.create(null);
        return (function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str))
        })
    }


})))



