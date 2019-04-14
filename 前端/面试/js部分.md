## 前言

关于 JavaScript，你真的了解吗。为何面试的时候很多 js 问题你答不上来，读完本文，任何 js 面试题都难不倒你。

---

<a id="TOC"></a>

| 目录                          |
| ----------------------------- |
| [手写 call](#d1)              |
| [手写 apply](#d2)             |
| [JS 实现继承的 6 种方式](#d3) |

---

<a id="d1"></a>

## 手写 call

[目录](#TOC)

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

---

<a id="d2"></a>

## 手写 apply

[目录](#TOC)

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

---

<a id="d3"></a>

## JS 有哪些手段可以实现继承

[目录](#TOC)

首先我的得有一个父类

```js
function Father() {
  this.name = 'father';
  this.say1 = function() {
    console.log('say1 : ' + this.name);
  };
}

Father.prototype.say2 = function() {
  console.log('say2 : ' + this.name);
};
```

- **原型链继承**

  将父类的实例作为子类的原型

  ```js
  function Child() {
    this.name = 'Child';
  }

  Child.prototype = new Father();

  var c1 = new Child();

  c1.say2();

  console.log(c1 instanceof Child); // true
  console.log(c1 instanceof Father); // true
  ```

  **问题** :
  无法继承父类构造函数上的属性或方法(如 say1)

* **构造继承**

  使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

  ```js
  function Child() {
    Father.call(this);
    this.name = 'Child';
  }

  var c1 = new Child();
  console.log(c1 instanceof Father); // false
  console.log(c1 instanceof Child); // true
  c1.say();
  c1.say2(); // 报错
  ```

  **问题**：
  不能继承父类原型上的属性方法(如 say2)

- **实例继承**
  为父类实例添加新特性，作为子类实例返回

  ```js
  function Child() {
    var obj = new Father();
    obj.name = 'child';
    return obj;
  }

  var c1 = new Child();
  c1.say1();
  c1.say2();
  console.log(c1 instanceof Child); // false
  console.log(c1 instanceof Father); // true
  ```

  问题：
  实例是父类的实例，不是子类的实例

* **拷贝继承**

  ```js
  function Child() {
    var father = new Father();
    for (let p in father) {
      Child.prototype[p] = father[p];
    }
    this.name = 'child';
  }

  var c1 = new Child(); // saychild
  c1.say();
  console.log(c1 instanceof Child); // true
  console.log(c1 instanceof Father); // false
  ```

  问题：性能消耗巨大

- **组合继承**
  通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

  ```js
  function Child(name) {
    Father.call(this);
    this.name = 'child';
  }

  Child.prototype = new Father();
  // 修复构造函数指向
  Child.prototype.constructor = Child;
  var c1 = new Child();
  c1.say1(); // say1child
  c1.say2(); // say2child
  ```

  问题：调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

* **寄生组合继承**
  通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

  ```js
  function Child(name) {
    Father.call(this);
    this.name = 'child';
  }
  (function() {
    // 创建一个没有实例方法的类
    var Super = function() {};
    Super.prototype = Father.prototype;
    //将实例作为子类的原型
    Child.prototype = new Super();
  })();

  // 修复构造函数指向
  Child.prototype.constructor = Child;
  var c1 = new Child();
  c1.say1(); // say1child
  c1.say2(); // say2child
  ```

  **推荐使用**
