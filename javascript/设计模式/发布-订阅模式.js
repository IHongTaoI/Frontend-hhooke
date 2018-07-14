var Event = (function () {
    let list = {},
        listen,
        trigger,
        remove;

    listen = function (key, fn) {
        if (!list[key]) {
            list[key] = [];
        }
        list[key].push(fn);
    }

    trigger = function () {
        let key = Array.prototype.shift(arguments);
    }
})()