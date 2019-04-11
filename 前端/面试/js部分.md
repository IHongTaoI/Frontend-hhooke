- [手写call](#手写call)
- [手写apply](#手写apply)


## 手写call

```js
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    new TypeError('错误');
  }
  context = context || window;
  context.fn = this;
  const argv = [...arguments].slice(1);
  return context.fn(argv);
};

let obj = {
  a: 1
};

global.a = 2;

function geta() {
  console.log(this.a);
}

geta.myCall(obj);
```

## 手写apply

和 call 的区别在于对参数的处理不一样

```js
Function.prototype.myapply = function(context) {
  if (typeof this !== 'function') {
    new TypeError('err');
  }
  context = context || window;
  context.fn = this;
  if (arguments[1]) {
    return context.fn(...arguments[1]);
  } else {
    return context.fn();
  }
};

let obj = {
  a: 1
};

global.a = 2;

function geta() {
  console.log(this.a);
}

geta.myapply(obj);
```
