(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Plugin = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    /**
     * tool
     * @param {Object} o 源
     * @param {Object} n 目标
     * @param {Boolean} override 是否覆盖
     */
    function extend(o, n, override) {
        for (var p in n) {
            if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) {
                o[p] = n[p];
            }
        }
    }

})