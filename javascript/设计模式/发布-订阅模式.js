let Event = (function () {
    let list = {},
        listen,
        trigger,
        remove;

    listen = function (key, fn) {
        if (!list[key]) {
            list[key] = [];
        }
        list[key].push(fn);
    };

    trigger = function () {
        let key = Array.prototype.shift.call(arguments);
        let msg = list[key];
        if (!msg || msg.length == 0) {
            return false;
        }
        for (let i = 0; i < msg.length; i++) {
            msg[i].apply(this, arguments);
        }
    };

    remove = function (key, fn) {
        let msg = list[key];
        if (!msg) {
            return false;
        }
        if (!fn) {
            delete list[key];
        } else {
            for (let i = 0; i < msg.length; i++) {
                if (msg[i] == fn) {
                    msg.splice(i, 1);
                }
            }
        }
    };
    return {
        listen,
        trigger,
        remove
    }
})();

let fn = function (data) {
    console.log('lalala' + data);
}

Event.listen('lalala', fn);
Event.trigger('lalala', '我是卖报的小行sdasdasd家');
Event.remove('lalala', fn);
