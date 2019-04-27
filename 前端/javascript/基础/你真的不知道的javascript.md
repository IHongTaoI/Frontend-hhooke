# 前言

最近一直在反编译一些有趣的微信小程序的源码来学习。在看了那些比较难看的源码中发现了很多我所不知道的js中的知识，so,此文章记录一下。

----

# 目录

|目录|
|----|
|[void](#d1)|
|[位移运算符(<<,>>,>>>)](#d2)|

----

<a id="d1"></a>

## void

> [目录](#TOC)

**1. void 是什么**

void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
 
 是否还记得 `javascript:void(0)` 这个写法:
 
 ```html
 <a href="javascript:void(0);"></a>
 ```
 
**其实我一直不知道前面的那个`javascript:`是什么意思，有知道的小伙伴欢迎在下方评论告诉我，谢谢。**

不过我自己认为是执行一段js脚本，因为下面这段代码是直接可以弹出123123。

```html
<script type="text/javascript">
    function fn(){
    	alert(123123)
    }
</script>
<body>
    <a href="javascript:fn()">点我!</a>
</body>
```

> 所以这里还有一个技巧就是，不需要监听a标签的onClick时间就可以实现点击执行js方法。

回归正题。通过下面的打印我们知道，我们证实了。void可以将一个表达式变成不返回值，也就是undefind

<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/4/27/16a5e646bee4cf0f?w=386&h=262&f=png&s=12438">
</div>

**2. 为什么不直接使用undefined**

 undefined在JavaScript中并不属于保留字/关键字，因此在IE5.5~8中我们可以将其当作变量那样对其赋值（IE9+及其他现代浏览器中赋值给undefined将无效）
 
 ```js
 var undefinedBackup = undefined;
undefined = 1;
// 显示"undefined"
console.log(typeof undefinedBackup);  
// 在IE5.5~8中显示"number"，其他浏览器中则显示"undefined"
console.log(typeof undefined);
 ```

**3. 得到一个纯正的undefined**

除了 void 我们还可以通过以下形式来获取纯正的undefined

- 未赋值的变量

    ```javascript
    var myUndefined;
    console.log(typeof myUndefined); // 显示"undefined"
    ```
* 无返回值函数

    ```javascript
    var getUndefined = function(){};
    var myUndefined = getUndefined();
    ```
    
- 未定义的属性

    ```javascript
    var myUndefined1 = {}[''];
    var myUndefined2 = [][0];
    ```
 >  [参考文章：从void 0 === undefined说起](https://www.cnblogs.com/fsjohnhuang/p/4146506.html)
 ----

<a id="d2"></a>

## 位移运算符

> [目录](#TOC)

js中位移运算有3种：左移（<<）、无符号右移(>>>)、有符号右移(>>)

**为什么没有有符号左移运算符**：因为，左移是在后面补0，所以不会产生符号问题。

**0. 前景摘要**

首先我们得先说说二进制。

- 引言
    
    bit(位)：数据存储的最小单元。在计算机二进制系统中，位，简记为b，也称为比特(bit)，每个二进制数字0或1就是一个位(bit)，其中每 8bit = 1 byte(字节)；

* 什么是二进制

    不是计算机相关专业的同学可能对这块不太熟悉，生活中我们有很多进制，如时钟60进制，我们用10进制来计数，一天24小时24进制。二进制在计算机技术中广泛应用。二进制数用0和1两个数字及其组合来表示任何数，二进制的进位规则是：“逢2进1”。数字1在不同的位上代表不同的值，按从右至左的次序，这个值以2倍递增。

> 具体详情请查阅二进制的资料，本文不再叙述。

**1. 左移运算(<<)**

比如我们要左移一个2。2在二进制中用 `0010` 表示,左移一位之后得 `0100` 表示 4（其实操作的是补码）

<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/4/27/16a5ee2f73d12a1b?w=415&h=225&f=png&s=8048"><br/>
     <img src="https://user-gold-cdn.xitu.io/2019/4/27/16a5ee3ad3aeaf02?w=129&h=84&f=png&s=1873">
</div>

**2. 有符号右移(>>)**

原理和左移相同。我们主要看下面的无符号右移

**3. 无符号右移(>>>)**

我们先看 -1 无符号右移 1 位

<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/4/27/16a5ee7a161941ef?w=175&h=100&f=png&s=3115"><br/>
</div>

打印出了 2147483647

**`2147483647` 是32位操作系统中最大的符号型整型常量**

在计算机系统中，数值一律用补码来表示，第一位为符号位，所以-1 在计算器中表示的二进制是

原码为 `1000 0001`

反码为 `11111 1110` (符号位不变，其他值取反)

补码为 `1111 1111`

补码所有的位置都向右移动变成这样子：
<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/4/27/16a5ef56dfdddb94?w=654&h=220&f=png&s=15671"><br/>
</div>

前面空了一位补0 变成 `0111 1111` 符号位变成了 0 也就是正数，正数的源码和补码都相同，所以最终返回 `1111 1111`
