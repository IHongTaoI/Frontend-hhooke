// (function (root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         define([], factory);
//     } else if (typeof module === 'object' && module.exports) {
//         module.exports = factory();
//     } else {
//         root.Plugin = factory();
//     }
// })(typeof self !== 'undefined' ? self : this, function () {
//     'use strict';
//     /**
//      * tool
//      * @param {Object} o 源
//      * @param {Object} n 目标
//      * @param {Boolean} override 是否覆盖
//      */
//     function extend(o, n, override) {
//         for (var p in n) {
//             if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) {
//                 o[p] = n[p];
//             }
//         }
//     }

//     var EventUtil = {
//         /**
//          * @param {element} el 元素
//          * @param {String} type 监听类型
//          * @param {function} handler 出发事件的函数
//          */
//         addEvent: function (el, type, handler) {
//             if (el.addEventListener) {
//                 el.addEventListener(type, handler, false);
//             } else if (el.addachEvent) {
//                 // 使用IE方法添加事件
//                 el.attachEvent("on" + type, handler);
//             } else {
//                 // 使用DOM0级方法添加事件
//                 el["on" + type] = handler;
//             }
//         },
//         // 移除事件
//         removeEvent: function (el, type, handler) {
//             if (el.removeEventListener) {
//                 el.removeEventListener(type, handler, false);
//             } else if (el.datachEvent) {
//                 el.detachEvent("on" + type, handler);
//             } else {
//                 el["on" + type] = null;
//             }
//         },
//         getEvent: function (event) {
//             // 返回事件对象引用
//             return event ? event : window.event;
//         },
//         // 获取mouseover和mouseout相关元素
//         getRelatedTarget: function (event) {
//             if (event.relatedTarget) {
//                 return event.relatedTarget;
//             } else if (event.toElement) {
//                 // 兼容IE8-
//                 return event.toElement;
//             } else if (event.formElement) {
//                 return event.formElement;
//             } else {
//                 return null;
//             }
//         },
//         getTarget: function (event) {
//             //返回事件源目标
//             return event.target || event.srcElement;
//         },
//         preventDefault: function (event) {
//             //取消默认事件
//             if (event.preventDefault) {
//                 event.preventDefault();
//             } else {
//                 event.returnValue = false;
//             }
//         },
//         stoppropagation: function (event) {
//             //阻止事件流
//             if (event.stoppropagation) {
//                 event.stoppropagation();
//             } else {
//                 event.canceBubble = false;
//             }
//         },
//         // 获取mousedown或mouseup按下或释放的按钮是鼠标中的哪一个
//         getButton: function (event) {
//             if (document.implementation.hasFeature("MouseEvents", "2.0")) {
//                 return event.button;
//             } else {
//                 //将IE模型下的button属性映射为DOM模型下的button属性
//                 switch (event.button) {
//                     case 0:
//                     case 1:
//                     case 3:
//                     case 5:
//                     case 7:
//                         //按下的是鼠标主按钮（一般是左键）
//                         return 0;
//                     case 2:
//                     case 6:
//                         //按下的是中间的鼠标按钮
//                         return 2;
//                     case 4:
//                         //鼠标次按钮（一般是右键）
//                         return 1;
//                 }
//             }
//         },
//         //获取表示鼠标滚轮滚动方向的数值
//         getWheelDelta: function (event) {
//             if (event.wheelDelta) {
//                 return event.wheelDelta;
//             } else {
//                 return -event.detail * 40;
//             }
//         },
//         // 以跨浏览器取得相同的字符编码，需在keypress事件中使用
//         getCharCode: function (event) {
//             if (typeof event.charCode == "number") {
//                 return event.charCode;
//             } else {
//                 return event.keyCode;
//             }
//         }
//     }
//     // plugin construct function
//     function Plugin(selector, userOptions) {
//         // Plugin() or new Plugin()
//         if (!(this instanceof Plugin)) return new Plugin(selector, userOptions);
//         this.init(selector, userOptions)
//     }
//     Plugin.prototype = {
//         constructor: Plugin,
//         // default option
//         options: {},
//         init: function (selector, userOptions) {
//             extend(this.options, userOptions, true);
//         }
//     };
//     return Plugin;
// })

function showPages(page, total, show) {
    var str = '';
    if (page < show + 1) {
        for (var i = total - show * 2 + 1; i < total; i++) {
            str = str + ' ' + i;
        }
    } else if (page > total - show) {
        for (var i = total - show * 2; i <= total; i++) {
            str = str + ' ' + i;
        }
    } else {
        for (var i = page - show; i <= page + show; i++) {
            str = str + ' ' + i;
        }
    }

    return str.trim();
}

var total = 30;
for (var i = 1; i <= total; i++) {
    console.log(i,showPages(i, total, 2));
}