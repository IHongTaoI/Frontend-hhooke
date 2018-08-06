
eval
eval(..) 函数 接受一个字符串为参数，作用是将字符串中的代码给执行了。就相当于代码写在那个位置是一样的，只不过代码是字符串的形式，要调用eval来执行这串字符串的代码。
        所以，eval是可以对词法作用域的环境进行修改的。

new function(...):




需要注意的是。在严格模式的情况下，eval（...）在运行时有自己的词法作用域，所以严格模式下eval内的声明是无法修改所在的作用域的。



还有一个方法也能执行字符串内的函数;
var fnn = new Function('a', 'console.log(a)');


with 欺骗

function fnn(obj) {
    with(obj) {
        a = 1;
    }
}

var o1 = {
    a: 3
}

var o2 = {
    b: 3
}

fnn(o1);
fnn(o2);

console.log(o1.a);
console.log(o2.b);