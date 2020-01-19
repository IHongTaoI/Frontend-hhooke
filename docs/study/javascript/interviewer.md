# :shaved_ice: 面试经典

## :boom: JS构造函数内有return

直接看下面这段代码

```javascript
function ooo(name) {
    this.name = name;
    return name
}


console.log(new ooo('222'))

function ooo2(name) {
    this.name = name;
    return [1,2,3,4]
}


console.log(new ooo2('444'))
```

输出的是

```javascript
'ooo {name: "222"}'
'Array(4) [1, 2, 3, 4]'
```

### JavaScript对象的创建方式

首先我们了解一下js中对象的创建方式

在JavaScript中，创建对象的方式包括两种：对象字面量和使用new表达式。对象字面量是一种灵活方便的书写方式，例如：

```javascript
var o = {
    name : '洪涛'
}
```

new表达式是配合构造函数使用的:

```javascript
function O(name){
    this.name = name;
}

var o = new O('洪涛');
```

那么，在使用new操作符来调用一个构造函数的时候，发生了什么呢？其实很简单，就发生了四件事：

```javascript
var obj  ={};
obj.__proto__ = CO.prototype;
CO.call(obj);
return obj;
```

- 第一行，创建一个空对象obj。
- 第二行，将这个空对象的proto成员指向了构造函数对象的prototype成员对象，这是最关键的一步。
- 第三行，将构造函数的作用域赋给新对象，因此CA函数中的this指向新对象obj，然后再调用CO函数。于是我们就给obj对象赋值了一个成员变量name，这个成员变量的值是"洪涛"。
- 第四行，返回新对象obj。

### 正确的定义构造函数

如果没有按照正确的方法书写构造函数的话，就像本文上文中出现的情况。就会造成一些难以估计的后果。

一个函数，要做为一个真正意义上的构造函数，要满足以下条件。

1. 在函数内部对新对象（this）的属性进行设置，通常是添加属性和方法。
2. 构造函数可以包含返回语句（不推荐），但返回值必须是this，或者其它非对象类型的值。

如上文中 我们的构造函数中返回了参数name,如果参数是普通值(非引用类型)，则不会发生什么影响，但是如果值是引用类型（如对象，数组等），则我们new 出来的对象就会被返回的引用类型值给替换了。

> **可以看出：在JavaScript构造函数中：如果return值类型，那么对构造函数没有影响，实例化对象返回空对象；如果return引用类型（数组，函数，对象），那么实例化对象就会返回该引用类型；**

## :boom: javascript原型原型链

### Prototype

任意一个函数（包括构造函数）都有一个prototype属性，指向该函数的原型对象，同样任意一个构造函数实例化的对象，都有一个proto属性（proto并非标准属性，ECMA-262第5版将该属性或指针称为[[Prototype]]，可通过Object.getPrototypeOf()标准方法访问该属性）

对于默认的 [[Get]] 操作来说，如果无法在对象本身找到需要的属性，就会继续访问对象的 [[Prototype]] 链

```js
var anotherObject = {
  a: 2
};
// 创建一个关联到 anotherObject 的对象
var myObject = Object.create(anotherObject);
myObject.a; // 2
```

`Object.create(..)` : 创建一个对象并把这个对象的 [[Prototype]] 关联到指定的对象

myObject中没有`a`属性，并且 [[Prototype]] 链不为空的话，就会继续查找下去。否则会直接返回`undefined`

使用 `for..in` 遍历对象时原理和查找 [[Prototype]] 链类似，任何可以通过原型链访问到的属性都会被枚举

```js
var anotherObject = {
 a: 2
};
// 创建一个关联到 anotherObject 的对象
var myObject = Object.create(anotherObject);
for (var k in myObject) {
 console.log("found: " + k);
}
// found: a
console.log(("a" in myObject)); // true
```

当你通过各种语法进行属性查找时都会查找 [[Prototype]] 链，直到找到属性或者查找完整条原型链。

`Object.keys(..)` 和 `hasOwnProperty(..)` 不会查找原型链

```js
var o1 = new Obj1();

function Obj2(){
    this.b = 414;
}

Obj2.prototype = o1;

var o2 = new Obj2();

function Obj3(){
    this.c = 241;
}

Obj3.prototype = o2;

var o3 = new Obj3();

console.log(o3.a)// 123
console.log(o3.b)// 414
console.log(o3.c)// 241
```

观察上述代码。我们在o3对象中，访问了a,b,c三个属性，但是o3只存在c属性，当a和b在当前对象中没有找到，就会顺着[[prototype]]关联的对象上去寻找。所以[[Prototype]] 机制就是存在于对象中的一个内部链接，它会引用其他对象。这个链接的作用是：如果在对象上没有找到需要的属性或者方法引用，引擎就会继续在 [[Prototype]] 关联的对象上进行查找。同理，如果在后者中也没有找到需要的引用就会继续查找它的 [[Prototype]] ，以此类推。这一系列对象的链接被称为“原型链”。

### 关联关系是备用

看起来对象之间的关联关系是处理“缺失”属性或者方法时的一种备用选项。

```js
var anotherObject = {
    cool: function () {
        console.log("cool!");
    }
};
var myObject = Object.create(anotherObject);
myObject.cool(); // "cool!"
```

由于存在 [[Prototype]] 机制,myObject 在无法处理属性或者方法时可以使用备用的 anotherObject,但是这会使你的程序变得很难以理解和维护。

我们可以通过内部委托，来让代码变得更加清晰。

```js
var anotherObject = {
    cool: function () {
        console.log("cool!");
    }
};
var myObject = Object.create(anotherObject);
myObject.doCool = function () {
    this.cool(); // 内部委托！
};
myObject.doCool(); // "cool!"
```

查看下面代码

```js
function Original (){
  this.a = '我是原始的'
}

var obj1 = new Original()

function Evolution (){
  this.a = '我是进化的'
}

Evolution.prototype = obj1;

var obj2 = new Evolution();

console.log(obj2.__proto__ === Evolution.prototype) // true
```

可以了解到一个关系

![关系](/javascript/interviewer1.png)

那么 Original 的 prototype 又是什么呢

我们在浏览器中打印一下就知道了.

![关系](/javascript/interviewer2.png)

打印结果显示 Original.prototype 是一个对象所以,但是这个对象的constructor又是function Original,

```js
obj1.constructor === Original.prototype.constructor // ture
```

上面的代码看起来很让我费解。

我想往上寻找 Original.prototype 然后在去寻找 Original.prototype.constructor.prototype 发现掉进了一个死循环中了。于是我寻找了Original.prototype的 [[prototype]]

```js
Original.prototype.__proto__
```

然后我发现Original.prototype的[[prototype]] 是一个对象 该对象的 constructor 属性指向 Object构造函数。

![关系](/javascript/interviewer3.png)

于是继续寻找function Object(){} 的 prototype。结果发现沿着原型链寻找上去，最终会寻找到null

接着刚才的图

![关系](/javascript/interviewer4.png)
