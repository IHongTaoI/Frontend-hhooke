```js
var myObject = {
    a: 1,
    b: 2
};

Object.defineProperty(myObject, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function() {
        let o = this;
        let index = 0;
        let keys = Object.keys(o);
        return {
            next: () => {
                return {
                    value: o[keys[index++]],
                    done: index > keys.length
                };
            }
        };
    }
});

for (let i of myObject) {
    console.log(i);
}
```